import {
  db,
  doc,
  collection,
  onSnapshot,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  auth,
  functions,
  httpsCallable,
} from './firebase.js';

/**
 * Pub-sub store for the signed-in user's PebblePath docs + Cairn trips.
 * Surface area:
 *
 *   dataStore.start(uid)        — begin subscriptions for this auth UID
 *   dataStore.stop()            — tear down (on sign-out)
 *   dataStore.state             — { user, family, children, trips }
 *   dataStore.addEventListener('change', handler)
 *   dataStore.saveTrip(trip)    — write a trip (id optional → create)
 *   dataStore.deleteTrip(tripId)
 */
class FamilyDataStore extends EventTarget {
  constructor() {
    super();
    this.state = { user: null, family: null, children: [], trips: [], events: [] };
    this._uid = null;
    this._unsubUser = null;
    this._unsubFamily = null;
    this._unsubChildren = null;
    this._unsubTrips = null;
    this._unsubEvents = null;
    this._currentFamilyId = null;
    // True after the user-doc snapshot has fired at least once (whether
    // the doc exists or not). Lets app-shell distinguish "still loading
    // the user record" from "user has no family yet, show onboarding".
    this.userDocResolved = false;
  }

  get familyId() {
    return this._currentFamilyId;
  }

  start(uid) {
    if (!db || !uid) return;
    if (this._uid === uid) return;
    this.stop();
    this._uid = uid;

    this._unsubUser = onSnapshot(doc(db, 'users', uid), (snap) => {
      this.userDocResolved = true;
      this.state.user = snap.exists() ? { id: snap.id, ...snap.data() } : null;
      // PebblePath users have `familyId`. Cairn-only users (extended family
      // who joined via invite) have `cairnFamilyId` instead — keeps the two
      // app's family-membership semantics cleanly separated so a Cairn-only
      // user installing PP later doesn't trip PP's "you're a co-parent" UX.
      const fid =
        this.state.user?.familyId ?? this.state.user?.cairnFamilyId ?? null;
      if (fid !== this._currentFamilyId) {
        this._currentFamilyId = fid;
        this._unsubFamily?.();
        this._unsubChildren?.();
        this._unsubTrips?.();
        this._unsubEvents?.();
        this._unsubFamily = null;
        this._unsubChildren = null;
        this._unsubTrips = null;
        this._unsubEvents = null;
        this.state.family = null;
        this.state.children = [];
        this.state.trips = [];
        this.state.events = [];
        if (fid) this._subscribeFamily(fid);
      }
      this._emit();
    });
  }

  _subscribeFamily(familyId) {
    this._unsubFamily = onSnapshot(doc(db, 'families', familyId), (snap) => {
      this.state.family = snap.exists() ? { id: snap.id, ...snap.data() } : null;
      this._emit();
    });
    this._unsubChildren = onSnapshot(
      collection(db, 'families', familyId, 'children'),
      (snap) => {
        this.state.children = snap.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            ...data,
            dateOfBirth:
              data.dateOfBirth?.toDate?.() ??
              (data.dateOfBirth ? new Date(data.dateOfBirth) : null),
          };
        });
        this._emit();
      },
    );
    this._unsubTrips = onSnapshot(
      collection(db, 'families', familyId, 'trips'),
      (snap) => {
        this.state.trips = snap.docs
          .map((d) => {
            const data = d.data();
            return {
              id: d.id,
              ...data,
              start: data.start ?? '',
              end: data.end ?? '',
              createdAt: data.createdAt?.toDate?.() ?? null,
              updatedAt: data.updatedAt?.toDate?.() ?? null,
            };
          })
          .sort((a, b) => String(a.start).localeCompare(String(b.start)));
        this._emit();
      },
      (err) => {
        // Most common: rules not deployed yet → PERMISSION_DENIED.
        console.warn('[Cairn] trips subscription error:', err.code, err.message);
      },
    );
    this._unsubEvents = onSnapshot(
      collection(db, 'families', familyId, 'familyEvents'),
      (snap) => {
        this.state.events = snap.docs
          .map((d) => {
            const data = d.data();
            return {
              id: d.id,
              ...data,
              date: data.date ?? '',
              createdAt: data.createdAt?.toDate?.() ?? null,
              updatedAt: data.updatedAt?.toDate?.() ?? null,
            };
          });
        this._emit();
      },
      (err) => {
        console.warn('[Cairn] familyEvents subscription error:', err.code, err.message);
      },
    );
  }

  /**
   * Create or update a trip. If `trip.id` is set, updates that doc; else
   * creates a new one. Returns the trip id.
   */
  async saveTrip(trip) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    const { id, createdAt, updatedAt, ...rest } = trip;
    const payload = {
      ...rest,
      updatedAt: serverTimestamp(),
    };
    if (id) {
      await updateDoc(doc(db, 'families', this._currentFamilyId, 'trips', id), payload);
      return id;
    }
    payload.createdBy = uid;
    payload.createdAt = serverTimestamp();
    const ref = await addDoc(collection(db, 'families', this._currentFamilyId, 'trips'), payload);
    return ref.id;
  }

  async deleteTrip(tripId) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    await deleteDoc(doc(db, 'families', this._currentFamilyId, 'trips', tripId));
  }

  /**
   * Phase 3B: create or update a family event (birthday, anniversary, or
   * custom). Same shape as saveTrip — pass an `id` to update, omit to create.
   */
  async saveEvent(event) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    const { id, createdAt, updatedAt, ...rest } = event;
    const payload = { ...rest, updatedAt: serverTimestamp() };
    if (id) {
      await updateDoc(doc(db, 'families', this._currentFamilyId, 'familyEvents', id), payload);
      return id;
    }
    payload.createdBy = uid;
    payload.createdAt = serverTimestamp();
    const ref = await addDoc(
      collection(db, 'families', this._currentFamilyId, 'familyEvents'),
      payload,
    );
    return ref.id;
  }

  async deleteEvent(eventId) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    await deleteDoc(doc(db, 'families', this._currentFamilyId, 'familyEvents', eventId));
  }


  /**
   * Phase 3C: server-side URL preview (OG image + title scrape). Calls the
   * `previewUrl` Cloud Function in the `cairn` functions codebase.
   * Returns null when the URL is empty/invalid (lets the form silently
   * skip preview), throws for actual function errors.
   */
  async previewUrl(url) {
    if (!url || typeof url !== 'string') return null;
    if (!/^https?:\/\//i.test(url.trim())) return null;
    if (!functions) throw new Error('Firebase functions not configured.');
    const fn = httpsCallable(functions, 'previewUrl');
    const result = await fn({ url: url.trim() });
    return result.data;
  }

  /**
   * Phase 4: server-side flight-number lookup (AviationStack via the
   * `lookupFlight` Cloud Function). Returns null when no flight number
   * is provided so callers can silently skip; surfaces structured
   * errors (`functions/failed-precondition` when the API key secret
   * isn't configured, `functions/not-found` when the number is unknown,
   * `functions/unavailable` for transient API outages) so the form
   * can show specific hints.
   */
  async lookupFlight(flightNumber, date) {
    if (!flightNumber || typeof flightNumber !== 'string') return null;
    if (!functions) throw new Error('Firebase functions not configured.');
    const fn = httpsCallable(functions, 'lookupFlight');
    const result = await fn({
      flightNumber: flightNumber.trim(),
      date: typeof date === 'string' ? date.trim() : '',
    });
    return result.data;
  }

  /**
   * Pebble inside Cairn (Tier 3). Calls the askPebbleAboutActivities
   * Cloud Function — same Firebase project secret as PP's Pebble,
   * different scope (family activities / trip planning, not child
   * milestones). Returns { answer, followUps? } or throws on failure.
   */
  async askPebble(question, history = []) {
    if (!functions) throw new Error('Firebase functions not configured.');
    if (!this._currentFamilyId) throw new Error('No family yet.');
    const fn = httpsCallable(functions, 'askPebbleAboutActivities');
    const result = await fn({
      question,
      familyId: this._currentFamilyId,
      history,
    });
    return result.data;
  }

  /**
   * Phase 3B: edit a child's birthday from Cairn (since PP TestFlight
   * doesn't yet have child-edit settings). Only PP family members can
   * write per the existing `/children/` rules.
   */
  async updateChildBirthday(childId, dateOfBirth) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    await updateDoc(doc(db, 'families', this._currentFamilyId, 'children', childId), {
      dateOfBirth,
      updatedAt: serverTimestamp(),
    });
  }

  /**
   * Phase 3A.2: look up a family by Cairn invite code (returns null when no
   * match, throws on error). Used by the join-family preview screen.
   */
  async findFamilyByCairnCode(code) {
    if (!db) throw new Error('Firebase not configured.');
    const q = query(collection(db, 'families'), where('cairnInviteCode', '==', code));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...d.data() };
  }

  /**
   * Phase 3A.2: atomically add the signed-in user to a family's cairnMemberIds
   * via the `isJoiningOwnUidAsCairn` rule path. Also writes a memberProfile
   * entry (so the family doc surfaces the joiner's name + photo) and creates
   * or updates the user doc with `cairnFamilyId` so the data store auto-
   * subscribes after the join completes.
   *
   * Throws with .code = 'expired' | 'not-found' | 'already-member' | 'full'
   * for distinguishable error UX. Other errors propagate.
   */
  async joinFamilyAsCairn(code) {
    if (!db) throw new Error('Firebase not configured.');
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');

    console.log('[Cairn join] starting', { code, uid });
    const family = await this.findFamilyByCairnCode(code);
    console.log('[Cairn join] family lookup result', family ? {
      id: family.id,
      name: family.name,
      memberIds: family.memberIds,
      cairnMemberIds: family.cairnMemberIds,
      cairnInviteCodeExpiresAt: family.cairnInviteCodeExpiresAt,
    } : null);
    if (!family) {
      const err = new Error('Invite code not found.');
      err.code = 'not-found';
      throw err;
    }

    const exp = family.cairnInviteCodeExpiresAt?.toDate?.()
      ?? (family.cairnInviteCodeExpiresAt ? new Date(family.cairnInviteCodeExpiresAt) : null);
    if (!exp || exp < new Date()) {
      const err = new Error('This invite code has expired.');
      err.code = 'expired';
      throw err;
    }

    const beforeCairn = family.cairnMemberIds ?? [];
    const memberIds = family.memberIds ?? [];
    const authUser = auth.currentUser;

    // Idempotent: already in cairnMemberIds (or memberIds for the PP
    // path) means the join completed previously. Just ensure the
    // user doc's cairnFamilyId points at this family so the dataStore
    // listener resumes. No family-doc write needed.
    if (beforeCairn.includes(uid) || memberIds.includes(uid)) {
      await setDoc(
        doc(db, 'users', uid),
        {
          email: authUser.email ?? '',
          displayName: authUser.displayName ?? '',
          profilePhotoURL: authUser.photoURL ?? null,
          cairnFamilyId: family.id,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );
      return family.id;
    }

    const cap = family.cairnMaxMembers ?? 20;
    if (beforeCairn.length >= cap) {
      const err = new Error('This family\'s Cairn ring is full.');
      err.code = 'full';
      throw err;
    }

    const now = new Date();
    const profile = {
      displayName: authUser.displayName ?? '',
      profilePhotoURL: authUser.photoURL ?? null,
      role: 'member',
      joinedAt: now,
      updatedAt: now,
    };

    // Atomic narrow update — matches isJoiningOwnUidAsCairn() exactly:
    // only cairnMemberIds, memberProfiles, updatedAt change.
    console.log('[Cairn join] writing family update', {
      familyId: family.id,
      newCairnMemberIds: [...beforeCairn, uid],
    });
    try {
      await updateDoc(doc(db, 'families', family.id), {
        cairnMemberIds: [...beforeCairn, uid],
        [`memberProfiles.${uid}`]: profile,
        updatedAt: serverTimestamp(),
      });
      console.log('[Cairn join] family update OK');
    } catch (err) {
      console.error('[Cairn join] family update FAILED', err.code, err.message);
      throw err;
    }

    // Upsert user doc with a PP-compatible shape so future PP iOS reads
    // decode cleanly. `cairnFamilyId` is what Cairn uses to subscribe.
    await setDoc(
      doc(db, 'users', uid),
      {
        email: authUser.email ?? '',
        displayName: authUser.displayName ?? '',
        profilePhotoURL: authUser.photoURL ?? null,
        cairnFamilyId: family.id,
        role: 'member',
        notificationPreferences: {
          milestoneReminders: true,
          tipNotifications: true,
          schoolDeadlines: true,
        },
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { merge: true },
    );

    return family.id;
  }

  /**
   * Sub-groups (Phase 5): create, rename, or update the member list of a
   * named sub-group under "extended" (e.g. Grandparents, In-laws). Stored
   * as a map on the family doc: `subGroups: { [id]: { name, memberIds } }`.
   * Pass an `id` to update; omit for a new sub-group.
   */
  async saveSubGroup({ id, name, memberIds }) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const groupId = id ?? `g_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
    await updateDoc(doc(db, 'families', this._currentFamilyId), {
      [`subGroups.${groupId}`]: {
        name: name.trim(),
        memberIds: Array.isArray(memberIds) ? [...memberIds] : [],
        updatedAt: serverTimestamp(),
      },
      updatedAt: serverTimestamp(),
    });
    return groupId;
  }

  async deleteSubGroup(groupId) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const { deleteField } = await import('firebase/firestore');
    await updateDoc(doc(db, 'families', this._currentFamilyId), {
      [`subGroups.${groupId}`]: deleteField(),
      updatedAt: serverTimestamp(),
    });
  }

  /**
   * Move a Cairn member into a sub-group (exclusive membership — drops them
   * from any other sub-group at the same time). Pass `targetGroupId === null`
   * to strip them from every sub-group (back to "general extended"). No-op
   * when nothing would change.
   */
  async setCairnMemberSubGroup(uid, targetGroupId) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    if (!uid) throw new Error('uid is required.');
    const subGroups = this.state.family?.subGroups ?? {};
    const patch = {};
    for (const [gid, g] of Object.entries(subGroups)) {
      const memberIds = Array.isArray(g.memberIds) ? g.memberIds : [];
      if (gid === targetGroupId) {
        if (!memberIds.includes(uid)) {
          patch[`subGroups.${gid}.memberIds`] = [...memberIds, uid];
        }
      } else if (memberIds.includes(uid)) {
        patch[`subGroups.${gid}.memberIds`] = memberIds.filter((id) => id !== uid);
      }
    }
    if (Object.keys(patch).length === 0) return;
    patch.updatedAt = serverTimestamp();
    await updateDoc(doc(db, 'families', this._currentFamilyId), patch);
  }

  /**
   * Cairn-only family creation — used by the onboarding wizard when a
   * brand-new signed-in user picks "Start a new family" without an
   * invite code. Writes a family doc tagged `createdInApp: 'cairn'`
   * with the viewer in `cairnMemberIds` (NOT `memberIds`, since PP's
   * /children/ + /milestones/ flows shouldn't activate for a Cairn-only
   * household). Generates the invite code so the user can immediately
   * invite extended family.
   *
   * Also writes the matching `/users/{uid}` doc with `cairnFamilyId`
   * (creating it if it doesn't exist) so the dataStore's user listener
   * picks up the new family and starts subscribing.
   */
  async createCairnOnlyFamily(familyName) {
    if (!db) throw new Error('Firebase not configured.');
    const authUser = auth?.currentUser;
    const uid = authUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    const name = (familyName ?? '').trim();
    if (!name) throw new Error('Family name is required.');

    const now = new Date();
    const code = newCairnInviteCode();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    const profile = {
      displayName: authUser.displayName ?? '',
      profilePhotoURL: authUser.photoURL ?? null,
      role: 'admin',
      joinedAt: now,
      updatedAt: now,
    };

    const familyDoc = {
      name,
      createdBy: uid,
      createdInApp: 'cairn',
      // No PebblePath memberIds — this is a Cairn-only household.
      // memberIds is intentionally an empty array so PP-side queries
      // (children, milestones) treat this family as "no PP members
      // yet" rather than throwing on the missing field.
      memberIds: [],
      cairnMemberIds: [uid],
      cairnMaxMembers: 20,
      cairnInviteCode: code,
      cairnInviteCodeExpiresAt: expiresAt,
      memberProfiles: { [uid]: profile },
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const ref = await addDoc(collection(db, 'families'), familyDoc);

    // Upsert user doc so the listener picks up cairnFamilyId.
    await setDoc(
      doc(db, 'users', uid),
      {
        email: authUser.email ?? '',
        displayName: authUser.displayName ?? '',
        profilePhotoURL: authUser.photoURL ?? null,
        cairnFamilyId: ref.id,
        role: 'admin',
        notificationPreferences: {
          milestoneReminders: false,
          tipNotifications: false,
          schoolDeadlines: false,
        },
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { merge: true },
    );

    return ref.id;
  }

  /**
   * Phase 3A: generate or regenerate the Cairn invite code. Caller must be
   * a PP member (rules enforce). 30-day expiry — extended-family invites
   * move on human time, not the 7-day co-parent timeline.
   */
  async regenerateCairnInviteCode() {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const code = newCairnInviteCode();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    await updateDoc(doc(db, 'families', this._currentFamilyId), {
      cairnInviteCode: code,
      cairnInviteCodeExpiresAt: expiresAt,
      updatedAt: serverTimestamp(),
    });
    return { code, expiresAt };
  }

  stop() {
    this._unsubUser?.();
    this._unsubFamily?.();
    this._unsubChildren?.();
    this._unsubTrips?.();
    this._unsubEvents?.();
    this._unsubUser =
      this._unsubFamily =
      this._unsubChildren =
      this._unsubTrips =
      this._unsubEvents =
        null;
    this._uid = null;
    this._currentFamilyId = null;
    this.userDocResolved = false;
    this.state = { user: null, family: null, children: [], trips: [], events: [] };
  }

  _emit() {
    this.dispatchEvent(new Event('change'));
  }
}

export const dataStore = new FamilyDataStore();

/**
 * Photo resolution: Google > PebblePath (remote only) > null.
 * PebblePath MVP uses file:// URLs that don't load in browsers.
 */
export function resolvePhoto(authUser, pebbleUser) {
  // User-uploaded photo (Storage URL on the user doc) wins — it's an
  // explicit choice over the default Google avatar. Cairn writes this
  // when the user picks "Change photo" in the profile sheet; PP iOS
  // writes it via Build 14 cross-device avatar sync. Either way, a
  // real https URL here is the chosen photo.
  const pp = pebbleUser?.profilePhotoURL;
  if (typeof pp === 'string' && /^https?:\/\//i.test(pp)) return pp;
  // Fallback: Google's default profile photo.
  if (authUser?.photoURL) return authUser.photoURL;
  return null;
}

/**
 * Phase 3A: extended-family members are anyone in `cairnMemberIds`
 * but NOT in `memberIds` (PP co-parents) and NOT the viewer themself.
 * Falls back to empty when the family hasn't been migrated yet.
 */
export function deriveExtendedMembers(uid, family) {
  if (!family) return [];
  const cairnIds = family.cairnMemberIds ?? family.memberIds ?? [];
  const memberIds = family.memberIds ?? [];
  const profiles = family.memberProfiles ?? {};
  const out = [];
  let hue = 280;
  for (const otherUid of cairnIds) {
    if (memberIds.includes(otherUid)) continue; // PP member already in immediate
    if (otherUid === uid) continue; // viewer rendered in immediate
    const profile = profiles[otherUid];
    const url = profile?.profilePhotoURL;
    out.push({
      uid: otherUid,
      displayName: profile?.displayName ?? 'Family',
      photoURL: typeof url === 'string' && /^https?:\/\//i.test(url) ? url : null,
      role: 'extended',
      circles: ['extended'],
      hue,
    });
    hue = (hue + 47) % 360;
  }
  return out;
}

/** Cairn invite code generator. Format: CAIRN-XXXX (4 chars). */
export function newCairnInviteCode() {
  // No I/O/0/1 to avoid confusion when typed manually.
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'CAIRN-';
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

export function deriveImmediateMembers(uid, authUser, pebbleUser, family, children) {
  const out = [];
  const memberIds = new Set(family?.memberIds ?? []);
  const isPPViewer = memberIds.has(uid);
  // Self always appears first — the dashboard renders the "Self" pebble
  // for PP viewers and uses this entry for any "is this me?" check.
  // For Cairn-only viewers (not in memberIds) the cairn-stack render
  // skips the self pebble and surfaces the viewer in the Extended row
  // instead; this entry is still useful for greetings, profile pills.
  out.push({
    uid,
    displayName: authUser?.displayName ?? pebbleUser?.displayName ?? 'You',
    photoURL: resolvePhoto(authUser, pebbleUser),
    role: isPPViewer ? 'self' : 'self-extended',
    circles: ['immediate'],
    hue: 198,
  });
  // memberProfiles includes Cairn joiners too (joinFamilyAsCairn writes
  // an entry per joiner). Filter to PP `memberIds` only so the Family
  // stone never surfaces extended-family members as "immediate".
  const profiles = family?.memberProfiles ?? {};
  for (const [otherUid, profile] of Object.entries(profiles)) {
    if (otherUid === uid) continue;
    if (!memberIds.has(otherUid)) continue;
    const url = profile.profilePhotoURL;
    out.push({
      uid: otherUid,
      displayName: profile.displayName ?? 'Co-parent',
      photoURL: typeof url === 'string' && /^https?:\/\//i.test(url) ? url : null,
      role: 'co-parent',
      circles: ['immediate'],
      hue: 8,
    });
  }
  let hue = 142;
  for (const child of children ?? []) {
    const url = child.profilePhotoURL;
    out.push({
      uid: `child:${child.id}`,
      displayName: child.name,
      photoURL: typeof url === 'string' && /^https?:\/\//i.test(url) ? url : null,
      role: 'child',
      circles: ['immediate'],
      hue,
      dateOfBirth: child.dateOfBirth,
    });
    hue = (hue + 58) % 360;
  }
  return out;
}

export function deriveBirthdayEvents(children) {
  const out = [];
  for (const child of children ?? []) {
    if (!child.dateOfBirth) continue;
    // Cairn writes child birthdays as `new Date("YYYY-MM-DD")` which
    // is UTC-midnight. PP iOS may also be writing UTC-midnight in
    // recent builds. Either way, the *intent* of the stored value is
    // a calendar day. UTC components decode it consistently regardless
    // of the viewer's timezone (LOCAL components drift by ±1 day when
    // viewing from a TZ west of where the date was originally entered).
    const d = child.dateOfBirth;
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(d.getUTCDate()).padStart(2, '0');
    out.push({
      id: `bday:${child.id}`,
      type: 'birthday',
      date: `${y}-${m}-${dd}`,
      personIds: [`child:${child.id}`],
      title: `${child.name}'s birthday`,
      _childId: child.id,
      _childName: child.name,
      recurring: true,
    });
  }
  return out;
}

/**
 * For a recurring annual event, compute the next occurrence date — the
 * upcoming anniversary in this year, or next year's if this year's has
 * already passed. Non-recurring events return their stored date as-is.
 * Also returns the years-elapsed since the stored date for subtitle use
 * ("Mum & Dad's anniversary — 38 years").
 */
export function resolveEventOccurrence(event, now = new Date()) {
  if (!event?.date) return { date: null, yearsElapsed: 0 };
  const stored = parseLocalDate(event.date);
  if (!stored || Number.isNaN(stored.getTime())) return { date: null, yearsElapsed: 0 };
  if (!event.recurring) return { date: stored, yearsElapsed: 0 };
  const thisYear = new Date(now.getFullYear(), stored.getMonth(), stored.getDate());
  const occurrence = thisYear < new Date(now.getFullYear(), now.getMonth(), now.getDate())
    ? new Date(now.getFullYear() + 1, stored.getMonth(), stored.getDate())
    : thisYear;
  const yearsElapsed = occurrence.getFullYear() - stored.getFullYear();
  return { date: occurrence, yearsElapsed };
}

/** Stable trip-cover gradient based on title hash. */
const TRIP_GRADIENT_PALETTE = [
  'linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)',
  'linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)',
  'linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)',
  'linear-gradient(135deg, #3d9b8f 0%, #1f5c54 100%)',
  'linear-gradient(135deg, #d4a843 0%, #c67b5c 55%, #c98a8a 100%)',
  'linear-gradient(135deg, #8b7bb5 0%, #c98a8a 60%, #d4a843 100%)',
  'linear-gradient(135deg, #6b9ac4 0%, #3d9b8f 100%)',
];

/**
 * Parse a YYYY-MM-DD string as a LOCAL date (not UTC). `new Date('2026-08-01')`
 * is parsed as UTC midnight by JS, which displays as the PREVIOUS day in
 * westward timezones. This helper avoids that off-by-one by constructing
 * the Date from explicit year/month/day components.
 *
 * Passes Date instances through unchanged; non-date-string inputs fall
 * back to `new Date(input)`.
 */
export function parseLocalDate(input) {
  if (!input) return null;
  if (input instanceof Date) return input;
  const m = String(input).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return new Date(input);
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
}

/**
 * Format a Date as `YYYY-MM-DD` using LOCAL components. `toISOString().slice(0,10)`
 * converts to UTC first, which shifts the day for any user west of UTC —
 * causes recurring events to show on the wrong day in the yearly view.
 */
export function formatLocalDate(date) {
  if (!date) return null;
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Tier 2: fetch the user's upcoming Google Calendar events. Accepts a
 * raw OAuth access token (from connectGoogleCalendar in firebase.js).
 */
export async function fetchUpcomingCalendarEvents(accessToken, daysAhead = 90, maxResults = 100) {
  const now = new Date();
  const future = new Date(now.getTime() + daysAhead * 24 * 60 * 60 * 1000);
  const url = new URL('https://www.googleapis.com/calendar/v3/calendars/primary/events');
  url.searchParams.set('timeMin', now.toISOString());
  url.searchParams.set('timeMax', future.toISOString());
  url.searchParams.set('maxResults', String(maxResults));
  url.searchParams.set('singleEvents', 'true');
  url.searchParams.set('orderBy', 'startTime');
  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Google Calendar: ${res.status} ${txt.slice(0, 160)}`);
  }
  const json = await res.json();
  return (json.items ?? []).filter(
    (e) => e.status !== 'cancelled' && (e.start?.date || e.start?.dateTime),
  );
}

/**
 * Map a Google Calendar event to a Cairn trip-shaped doc. All-day events
 * have exclusive end.date (Google convention) — shift back one day so the
 * displayed range matches the user's intent.
 */
export function normalizeCalendarEventToTrip(event, uid) {
  const startDate = event.start?.date ?? event.start?.dateTime?.slice(0, 10) ?? '';
  let endDate = event.end?.date ?? event.end?.dateTime?.slice(0, 10) ?? startDate;
  if (event.start?.date && event.end?.date) {
    const e = new Date(endDate);
    e.setDate(e.getDate() - 1);
    endDate = e.toISOString().slice(0, 10);
  }
  return {
    title: event.summary || '(untitled)',
    location: event.location ?? '',
    start: startDate,
    end: endDate,
    attendees: uid ? [uid] : [],
    viewers: [],
    visibility: 'family',
    notes: (event.description ?? '').slice(0, 1000),
    gcalEventId: event.id,
    gcalEventLink: event.htmlLink ?? null,
  };
}

export function gradientForTrip(trip) {
  if (trip?.coverGradient) return trip.coverGradient;
  const seed = (trip?.title ?? trip?.id ?? '') + (trip?.location ?? '');
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return TRIP_GRADIENT_PALETTE[hash % TRIP_GRADIENT_PALETTE.length];
}
