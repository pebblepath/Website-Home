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
  storage,
  storageRef,
  uploadBytes,
  getDownloadURL,
} from './firebase.js';

// Free-text country (from iOS CLGeocoder / manual entry) → ISO-3166-1
// alpha-2 for the Nager.Date holiday API. Covers the launch markets
// + common aliases; unmapped countries simply skip the overlay
// ("if available"). Keys are lower-cased + trimmed at lookup.
const COUNTRY_ISO = {
  'united states': 'US',
  'united states of america': 'US',
  usa: 'US',
  us: 'US',
  'united kingdom': 'GB',
  uk: 'GB',
  'great britain': 'GB',
  england: 'GB',
  scotland: 'GB',
  wales: 'GB',
  'northern ireland': 'GB',
  canada: 'CA',
  australia: 'AU',
  ireland: 'IE',
  france: 'FR',
  germany: 'DE',
  spain: 'ES',
  italy: 'IT',
  netherlands: 'NL',
  'the netherlands': 'NL',
  belgium: 'BE',
  switzerland: 'CH',
  austria: 'AT',
  portugal: 'PT',
  sweden: 'SE',
  norway: 'NO',
  denmark: 'DK',
  finland: 'FI',
  'new zealand': 'NZ',
  mexico: 'MX',
  brazil: 'BR',
  'south africa': 'ZA',
  india: 'IN',
  japan: 'JP',
  singapore: 'SG',
  poland: 'PL',
};

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
    this.state = {
      user: null,
      family: null,
      children: [],
      trips: [],
      events: [],
      // Public-holiday overlay (Nager.Date, by family.homeLocation
      // .country). NOT persisted — deterministic from country+year,
      // so it's a read-only display layer, never written to the
      // shared family doc. Event-shaped: {id,title,date,source}.
      holidays: [],
      // ── PP-household child surface (Children / Today / Pebble) ──
      // Deliberately separate from `family`/`children` above (the
      // Cairn-resolved context). Children/Pebble must read the
      // parent's OWN household — see _subscribePpFamily.
      ppFamily: null,
      ppIsMember: false,
      // Batch F (Portal v3) — read-only "child viewer" tier. An
      // extended-ring member a parent explicitly approved; sees the
      // Children view read-only (no Pebble/pediatrician/write).
      ppIsChildViewer: false,
      // The requester's own access-request doc { status } | null.
      myChildAccessRequest: null,
      // PP members: pending requests awaiting approve/decline.
      incomingChildRequests: [],
      ppChildren: [],
      selectedChildId: null,
      childMilestones: [],
      childInsights: [],
      childDailyCard: null,
      childPebbleMessages: [],
      childPebbleSessions: [],
    };
    this._uid = null;
    this._unsubUser = null;
    this._unsubFamily = null;
    this._unsubChildren = null;
    this._unsubTrips = null;
    this._unsubEvents = null;
    this._currentFamilyId = null;
    this._holidayKey = null;
    this._ppFamilyId = null;
    this._selectedChildId = null;
    this._unsubPpFamily = null;
    this._unsubPpChildren = null;
    this._unsubChildMs = null;
    this._unsubChildIns = null;
    this._unsubChildDaily = null;
    this._unsubChildPebble = null;
    this._unsubChildSessions = null;
    // Batch F — read-only when the PP-household is resolved via the
    // childViewer fallback (extended member, no own household).
    this._ppReadOnly = false;
    this._unsubIncomingReq = null;
    this._unsubMyReq = null;
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
      // Cairn-specific family pointer wins: a user who has BOTH `familyId`
      // (their own PebblePath household) AND `cairnFamilyId` (a relative's
      // family they were invited to as extended Cairn-ring) wants to see
      // the relative's family when they visit Cairn web. Without this
      // priority, a PP parent who joins a parent-in-law's Cairn ring would
      // silently keep loading their own family + see permission-denied on
      // the joined family's trips. Users with only `familyId` (Cairn-only
      // for their own household) fall through to the PP pointer.
      const fid =
        this.state.user?.cairnFamilyId ?? this.state.user?.familyId ?? null;
      // Auto-heal: if the user doc carries NO family pointer but they
      // are listed as a member on a family doc (PP or Cairn ring), back-
      // fill the pointer so future sign-ins land them on the dashboard
      // directly. Covers the "half-joined" state where joinFamilyAsCairn
      // wrote to family.cairnMemberIds but the /users upsert silently
      // failed, or the user doc was wiped and re-created without family
      // metadata. Fire-and-forget — the listener will fire again with
      // the populated pointer once the setDoc lands.
      if (!fid && this.state.user) {
        this._healFamilyPointer(uid);
      }
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
      // PP-household resolver — the deliberate INVERSE of the Cairn
      // resolver above. Children/Pebble surface the parent's OWN
      // household (`user.familyId`, where the viewer is a memberIds
      // parent), NOT the Cairn-resolved family (which may be a
      // relative's ring the parent joined). They coincide in the
      // common case; they diverge for a parent who also joined an
      // in-law's ring — then the two contexts run side by side.
      const ppFid = this.state.user?.familyId ?? null;
      if (ppFid !== this._ppFamilyId) {
        this._ppFamilyId = ppFid;
        this._teardownPpFamily();
        if (ppFid) this._subscribePpFamily(ppFid);
      }
      this._emit();
    });
  }

  /**
   * Reconcile a signed-in user's family pointer when /users is missing
   * `familyId` / `cairnFamilyId` but the user IS already a member of
   * some family doc. Queries by `cairnMemberIds array-contains` first
   * (the more common path on Cairn web), then falls back to PP
   * `memberIds`. Writes the pointer back to /users so the next sign-in
   * lands the user directly on the dashboard. Guarded against re-entry
   * and silently no-ops on errors so a permission-denied or network
   * blip never breaks the dashboard.
   */
  async _healFamilyPointer(uid) {
    if (this._healing) return;
    this._healing = true;
    try {
      const cairnQ = query(
        collection(db, 'families'),
        where('cairnMemberIds', 'array-contains', uid),
      );
      const cairnSnap = await getDocs(cairnQ);
      if (!cairnSnap.empty) {
        await setDoc(
          doc(db, 'users', uid),
          {
            cairnFamilyId: cairnSnap.docs[0].id,
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        );
        return;
      }
      const ppQ = query(
        collection(db, 'families'),
        where('memberIds', 'array-contains', uid),
      );
      const ppSnap = await getDocs(ppQ);
      if (!ppSnap.empty) {
        await setDoc(
          doc(db, 'users', uid),
          {
            familyId: ppSnap.docs[0].id,
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        );
      }
    } catch (e) {
      console.warn('[Cairn] auto-heal family pointer failed:', e?.code, e?.message);
    } finally {
      this._healing = false;
    }
  }

  /**
   * Public-holiday overlay (Ellie ③). Resolves the family's country
   * from `family.homeLocation.country` (set by iOS), maps it to an
   * ISO-3166-1 alpha-2 code, and pulls this + next year's public
   * holidays from the free, no-key, CORS-enabled Nager.Date API.
   * Results are an in-memory + localStorage-cached read-only overlay
   * (event-shaped, source:'holiday') — deterministic data, never
   * written to the shared family doc. Idempotent: keyed on
   * iso+years so the frequent family-doc snapshots don't refetch.
   * Silent on any failure (holidays just don't show — "if available").
   */
  async _loadHolidays() {
    const raw = this.state.family?.homeLocation?.country;
    const iso = COUNTRY_ISO[String(raw ?? '').trim().toLowerCase()] ?? null;
    if (!iso) {
      if (this.state.holidays.length) {
        this.state.holidays = [];
        this._holidayKey = null;
        this._emit();
      }
      return;
    }
    const yr = new Date().getFullYear();
    const years = [yr, yr + 1];
    const key = `${iso}:${years.join(',')}`;
    if (this._holidayKey === key) return; // already loaded for this country/years
    this._holidayKey = key;
    try {
      const all = [];
      for (const y of years) {
        const ck = `pp_hol_${iso}_${y}`;
        let list = null;
        try {
          const cached = JSON.parse(localStorage.getItem(ck) || 'null');
          if (cached && Date.now() - cached.t < 30 * 24 * 3600 * 1000) {
            list = cached.h;
          }
        } catch {
          /* ignore cache parse errors */
        }
        if (!list) {
          const res = await fetch(
            `https://date.nager.at/api/v3/PublicHolidays/${y}/${iso}`,
          );
          if (!res.ok) continue;
          const data = await res.json();
          list = (Array.isArray(data) ? data : []).map((h) => ({
            date: h.date,
            name: h.name || h.localName || 'Holiday',
          }));
          try {
            localStorage.setItem(ck, JSON.stringify({ t: Date.now(), h: list }));
          } catch {
            /* storage may be full / disabled — fine */
          }
        }
        for (const h of list) {
          all.push({
            id: `hol-${iso}-${h.date}-${h.name}`,
            title: h.name,
            date: h.date,
            source: 'holiday',
          });
        }
      }
      // Dedupe (a date can carry multiple holiday names; keep each
      // distinct title once).
      const seen = new Set();
      this.state.holidays = all.filter((h) => {
        const k = `${h.date}|${h.title}`;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });
      this._emit();
    } catch {
      // Network/API failure → leave whatever we have; allow a later
      // retry by clearing the key.
      this._holidayKey = null;
    }
  }

  _subscribeFamily(familyId) {
    this._unsubFamily = onSnapshot(doc(db, 'families', familyId), (snap) => {
      this.state.family = snap.exists() ? { id: snap.id, ...snap.data() } : null;
      // Batch F: a user with NO own PP household who a parent
      // approved as a child viewer resolves the PP-household to THIS
      // (Cairn-resolved) family, read-only. Reconciled here so a
      // live approval (childViewers change) activates access without
      // a reload. Pure fallback — members are untouched.
      this._reconcileChildViewer();
      this._loadHolidays();
      this._emit();
    });
    // Batch F: the requester's own access-request doc (id = uid) on
    // the Cairn-resolved family. Member or not, reading own doc is
    // permitted by the rule; for members it just resolves to null.
    this._unsubMyReq?.();
    this._unsubMyReq = onSnapshot(
      doc(db, 'families', familyId, 'childAccessRequests', this._uid),
      (s) => {
        this.state.myChildAccessRequest = s.exists()
          ? { id: s.id, ...s.data() }
          : null;
        this._emit();
      },
      (err) =>
        console.warn(
          '[Portal] childAccessRequest (mine) error:',
          err.code,
          err.message,
        ),
    );
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
    // 2026-05-15 — visibility enforced server-side. Rules reject a
    // list query that would return any doc the caller can't read, so
    // we MUST filter to the caller's visibleTo (rules don't filter,
    // they validate). All live docs were backfilled + verified before
    // the rule shipped, so array-contains returns the full readable set.
    this._unsubTrips = onSnapshot(
      query(
        collection(db, 'families', familyId, 'trips'),
        where('visibleTo', 'array-contains', this._uid),
      ),
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
        this._backfillVisibleTo('trips', snap.docs);
        this._emit();
      },
      (err) => {
        // Most common: rules not deployed yet → PERMISSION_DENIED.
        console.warn('[Cairn] trips subscription error:', err.code, err.message);
      },
    );
    this._unsubEvents = onSnapshot(
      query(
        collection(db, 'families', familyId, 'familyEvents'),
        where('visibleTo', 'array-contains', this._uid),
      ),
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
        this._backfillVisibleTo('familyEvents', snap.docs);
        this._emit();
      },
      (err) => {
        console.warn('[Cairn] familyEvents subscription error:', err.code, err.message);
      },
    );
  }

  /**
   * Batch F (Portal v3) — resolve the PP-household via the read-only
   * "child viewer" FALLBACK. A user who IS a member of their own PP
   * household always resolves via `user.familyId` (the deliberate
   * inverse-resolver invariant — untouched). This only fires for a
   * user with NO own household whom a parent explicitly approved
   * into the Cairn-resolved family's `childViewers`: that family
   * becomes their read-only Children context. Being a childViewer
   * NEVER confers member powers — the firestore.rules enforce that;
   * this client resolver only picks which surface to render.
   */
  _reconcileChildViewer() {
    // Members resolve via their OWN household — never override.
    if (this.state.user?.familyId) return;
    const fam = this.state.family;
    const uid = this._uid;
    const isViewer = !!(
      fam &&
      Array.isArray(fam.childViewers) &&
      fam.childViewers.includes(uid) &&
      !(Array.isArray(fam.memberIds) && fam.memberIds.includes(uid))
    );
    const targetPp = isViewer ? fam.id : null;
    if (targetPp !== this._ppFamilyId) {
      this._ppFamilyId = targetPp;
      this._ppReadOnly = Boolean(targetPp);
      this._teardownPpFamily();
      if (targetPp) this._subscribePpFamily(targetPp);
      this._emit();
    }
  }

  /**
   * Subscribe the PP household (user.familyId) for the Children /
   * Today / Pebble surfaces. SEPARATE from _subscribeFamily — that
   * one tracks the Cairn-resolved family (trips/events/rings); this
   * one is strictly the parent's own child-data household.
   *
   * Member gate: `ppIsMember` = the viewer is in this family's
   * `memberIds`. The Firestore rules already enforce parent-only
   * access to milestones/insights/dailyCards/pebbleMessages
   * server-side (a Cairn-only joiner gets PERMISSION_DENIED). The
   * client gate just decides whether to render the surface vs. the
   * parent-only empty state — it never relaxes a rule.
   */
  _subscribePpFamily(ppFid) {
    this._unsubPpFamily = onSnapshot(
      doc(db, 'families', ppFid),
      (snap) => {
        const fam = snap.exists() ? { id: snap.id, ...snap.data() } : null;
        this.state.ppFamily = fam;
        const isMember = Boolean(
          fam && Array.isArray(fam.memberIds) && fam.memberIds.includes(this._uid),
        );
        this.state.ppIsMember = isMember;
        // Batch F: read-only child-viewer flag for the gate logic.
        this.state.ppIsChildViewer = Boolean(
          !isMember &&
            fam &&
            Array.isArray(fam.childViewers) &&
            fam.childViewers.includes(this._uid),
        );
        // PP members see the pending access-request queue; a viewer
        // is dropped from childViewers if a parent later revokes —
        // reconcile so access deactivates live.
        if (isMember) this._subscribeIncomingRequests(ppFid);
        if (!this.state.user?.familyId) this._reconcileChildViewer();
        this._emit();
      },
      (err) => {
        console.warn('[Portal] ppFamily subscription error:', err.code, err.message);
      },
    );
    this._unsubPpChildren = onSnapshot(
      collection(db, 'families', ppFid, 'children'),
      (snap) => {
        const kids = snap.docs
          .map((d) => {
            const data = d.data();
            return {
              id: d.id,
              ...data,
              dateOfBirth:
                data.dateOfBirth?.toDate?.() ??
                (data.dateOfBirth ? new Date(data.dateOfBirth) : null),
            };
          })
          .sort(
            (a, b) =>
              (a.createdAt?.toMillis?.() ?? 0) - (b.createdAt?.toMillis?.() ?? 0),
          );
        this.state.ppChildren = kids;
        // iOS may store a local file:// profilePhotoURL (pre-Storage
        // builds) which a browser can't load. Resolve the canonical
        // Firebase Storage avatar (Build 14 path, no extension) so the
        // real child photo shows on the web.
        this._resolveChildPhotos(ppFid, kids);
        // Pick / keep the active child. Default to the first child;
        // keep the current selection if it still exists.
        const stillThere =
          this._selectedChildId &&
          kids.some((k) => k.id === this._selectedChildId);
        const nextId = stillThere ? this._selectedChildId : kids[0]?.id ?? null;
        if (nextId !== this._selectedChildId) {
          this._subscribeChild(nextId);
        } else if (!nextId) {
          this._teardownChild();
        }
        this._emit();
      },
      (err) => {
        console.warn('[Portal] ppChildren subscription error:', err.code, err.message);
      },
    );
  }

  /**
   * Batch F — PP members listen to the pending child-access request
   * queue. Rule restricts this collection's read to members (+ each
   * requester's own doc), so a non-member never reaches here.
   */
  _subscribeIncomingRequests(ppFid) {
    this._unsubIncomingReq?.();
    this._unsubIncomingReq = onSnapshot(
      collection(db, 'families', ppFid, 'childAccessRequests'),
      (snap) => {
        this.state.incomingChildRequests = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .filter((r) => r.status === 'pending')
          .sort(
            (a, b) =>
              (a.requestedAt?.toMillis?.() ?? 0) -
              (b.requestedAt?.toMillis?.() ?? 0),
          );
        this._emit();
      },
      (err) =>
        console.warn(
          '[Portal] childAccessRequests error:',
          err.code,
          err.message,
        ),
    );
  }

  /**
   * Subscribe the selected child's milestone / insight / daily-card /
   * Pebble-message subcollections. Collections are small per child so
   * we read them unordered and sort client-side — zero composite-index
   * surface, and no firebase.js export change.
   *
   * isPrivate filter (pebbleMessages): a co-parent's private message
   * (`isPrivate === true && senderUid !== me`) is dropped here. This
   * mirrors the iOS client filter — Firestore rules do NOT filter
   * private messages, so skipping this leaks them to the other parent.
   */
  _subscribeChild(childId) {
    this._teardownChild();
    this._selectedChildId = childId;
    this.state.selectedChildId = childId;
    if (!childId || !this._ppFamilyId) {
      this.state.childMilestones = [];
      this.state.childInsights = [];
      this.state.childDailyCard = null;
      this.state.childPebbleMessages = [];
      this.state.childPebbleSessions = [];
      return;
    }
    const base = ['families', this._ppFamilyId, 'children', childId];
    this._unsubChildMs = onSnapshot(
      collection(db, ...base, 'milestones'),
      (snap) => {
        this.state.childMilestones = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .sort(
            (a, b) =>
              (a.ageRangeStartMonths ?? 0) - (b.ageRangeStartMonths ?? 0),
          );
        this._emit();
      },
      (err) => console.warn('[Portal] milestones error:', err.code, err.message),
    );
    this._unsubChildIns = onSnapshot(
      collection(db, ...base, 'insights'),
      (snap) => {
        this.state.childInsights = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .sort((a, b) => (b.relevanceScore ?? 0) - (a.relevanceScore ?? 0));
        this._emit();
      },
      (err) => console.warn('[Portal] insights error:', err.code, err.message),
    );
    // dailyCards stays PARENTS-ONLY (the proactive "Pebble's daily"
    // card on Today/Children). Rules gate it `isChildParent`; a
    // read-only childViewer would just get PERMISSION_DENIED churn —
    // skip. (If Thomas later wants approved viewers to see the daily
    // card too, widen the dailyCards rule to `|| isChildViewer` AND
    // drop this guard.)
    if (!this._ppReadOnly) {
      this._unsubChildDaily = onSnapshot(
        collection(db, ...base, 'dailyCards'),
        (snap) => {
          // Doc id is a YYYY-MM-DD string (device-local tz). Latest =
          // lexicographically-max id (sorts chronologically). Avoids a
          // tz-sensitive "today's key" computation in the browser.
          const cards = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
          cards.sort((a, b) => String(b.id).localeCompare(String(a.id)));
          this.state.childDailyCard = cards[0] ?? null;
          this._emit();
        },
        (err) => console.warn('[Portal] dailyCards error:', err.code, err.message),
      );
    }

    // Pebble chat + sessions — parents AND parent-approved
    // childViewers (Thomas, 2026-05-17: an approved viewer gets full
    // Pebble, same as parents). Rules now admit `isChildViewer` on
    // pebbleMessages READ + pebbleSessions READ/WRITE, so these
    // listeners attach for read-only viewers too (NOT inside the
    // `!_ppReadOnly` guard anymore).
    this._unsubChildPebble = onSnapshot(
      collection(db, ...base, 'pebbleMessages'),
      (snap) => {
        this.state.childPebbleMessages = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .filter(
            (m) => !(m.isPrivate === true && m.senderUid !== this._uid),
          )
          .sort(
            (a, b) =>
              (a.timestamp?.toMillis?.() ?? 0) -
              (b.timestamp?.toMillis?.() ?? 0),
          );
        this._emit();
      },
      (err) => console.warn('[Portal] pebbleMessages error:', err.code, err.message),
    );
    // Pebble multi-session: each session is a doc; messages carry
    // sessionId. Private sessions a co-parent didn't create are
    // filtered out client-side (the message-level isPrivate filter
    // above is the actual leak guard; this just hides the session
    // chrome). Archived sessions stay out of the live list.
    this._unsubChildSessions = onSnapshot(
      collection(db, ...base, 'pebbleSessions'),
      (snap) => {
        this.state.childPebbleSessions = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .filter((s) => s.archived !== true)
          .filter(
            (s) => !(s.isPrivate === true && s.createdBy !== this._uid),
          )
          .sort(
            (a, b) =>
              (b.lastMessageAt?.toMillis?.() ??
                b.createdAt?.toMillis?.() ??
                0) -
              (a.lastMessageAt?.toMillis?.() ??
                a.createdAt?.toMillis?.() ??
                0),
          );
        this._emit();
      },
      (err) =>
        console.warn('[Portal] pebbleSessions error:', err.code, err.message),
    );
  }

  /**
   * Resolve child avatars from Firebase Storage when the Child doc's
   * profilePhotoURL isn't a usable https URL (iOS local file:// from
   * pre-Build-14 installs). Path mirrors iOS StorageService:
   * families/{fid}/avatars/children/{childId} (no extension). Patches
   * state.ppChildren in place + re-emits. Idempotent per child.
   */
  _resolveChildPhotos(ppFid, kids) {
    if (!storage) return;
    if (!this._photoTried) this._photoTried = new Set();
    for (const k of kids) {
      const cur = k.profilePhotoURL;
      if (typeof cur === 'string' && /^https?:\/\//i.test(cur)) continue;
      const key = ppFid + '/' + k.id;
      if (this._photoTried.has(key)) continue;
      this._photoTried.add(key);
      getDownloadURL(
        storageRef(storage, 'families/' + ppFid + '/avatars/children/' + k.id),
      )
        .then((url) => {
          const arr = this.state.ppChildren || [];
          const idx = arr.findIndex((c) => c.id === k.id);
          if (idx >= 0) {
            arr[idx] = { ...arr[idx], profilePhotoURL: url };
            this.state.ppChildren = [...arr];
            this._emit();
          }
        })
        .catch(() => {
          // No Storage avatar for this child — keep the initials chip.
          this._photoTried.delete(key);
        });
    }
  }

  /** Switch the active child (multi-child families). */
  selectChild(childId) {
    if (!childId || childId === this._selectedChildId) return;
    if (!this.state.ppChildren.some((k) => k.id === childId)) return;
    this._subscribeChild(childId);
    this._emit();
  }

  /**
   * Child-development Pebble (Phase C). Calls the member-only
   * `askPebbleAboutChild` Cloud Function (firebase/functions
   * codebase — NOT the activities `askPebbleAboutActivities`, which
   * admits the extended ring). The function re-enforces memberIds
   * server-side; this is the convenience client path.
   */
  async askPebbleAboutChild(
    childId,
    question,
    history = [],
    isPrivate = false,
    sessionId = '',
  ) {
    if (!functions) throw new Error('Firebase functions not configured.');
    if (!this._ppFamilyId) throw new Error('No PebblePath family.');
    if (!childId) throw new Error('No child selected.');
    const fn = httpsCallable(functions, 'askPebbleAboutChild');
    const result = await fn({
      familyId: this._ppFamilyId,
      childId,
      question,
      history,
      isPrivate: isPrivate === true,
      sessionId: sessionId || '',
    });
    return result.data;
  }

  // ── Pebble multi-session (Portal v7) ─────────────────────────────
  // Each chat is a `pebbleSessions/{id}` doc; messages carry
  // `sessionId`. Privacy is per-SESSION (stored on the session doc;
  // the CF copies it onto each message turn so the existing
  // message-level isPrivate filter — the real leak guard — keeps a
  // private session hidden from the co-parent on web AND iOS).
  _childPebbleBase(childId) {
    return ['families', this._ppFamilyId, 'children', childId, 'pebbleSessions'];
  }

  async createPebbleSession(childId, { title, isPrivate } = {}) {
    if (!db || !this._ppFamilyId || !childId) {
      throw new Error('No child selected.');
    }
    const ref = await addDoc(
      collection(db, ...this._childPebbleBase(childId)),
      {
        title: (title || 'New chat').trim() || 'New chat',
        isPrivate: isPrivate === true,
        archived: false,
        createdBy: this._uid ?? '',
        createdAt: serverTimestamp(),
        lastMessageAt: serverTimestamp(),
      },
    );
    return ref.id;
  }

  async renamePebbleSession(childId, sessionId, title) {
    if (!db || !this._ppFamilyId || !childId || !sessionId) return;
    await updateDoc(
      doc(db, ...this._childPebbleBase(childId), sessionId),
      { title: (title || '').trim() || 'Untitled chat' },
    );
  }

  async setPebbleSessionPrivacy(childId, sessionId, isPrivate) {
    if (!db || !this._ppFamilyId || !childId || !sessionId) return;
    await updateDoc(
      doc(db, ...this._childPebbleBase(childId), sessionId),
      { isPrivate: isPrivate === true },
    );
  }

  async archivePebbleSession(childId, sessionId) {
    if (!db || !this._ppFamilyId || !childId || !sessionId) return;
    await updateDoc(
      doc(db, ...this._childPebbleBase(childId), sessionId),
      { archived: true },
    );
  }

  async touchPebbleSession(childId, sessionId) {
    if (!db || !this._ppFamilyId || !childId || !sessionId) return;
    try {
      await updateDoc(
        doc(db, ...this._childPebbleBase(childId), sessionId),
        { lastMessageAt: serverTimestamp() },
      );
    } catch {
      /* non-fatal — ordering just won't bump */
    }
  }

  _teardownChild() {
    this._unsubChildMs?.();
    this._unsubChildIns?.();
    this._unsubChildDaily?.();
    this._unsubChildPebble?.();
    this._unsubChildSessions?.();
    this._unsubChildMs =
      this._unsubChildIns =
      this._unsubChildDaily =
      this._unsubChildPebble =
      this._unsubChildSessions =
        null;
  }

  _teardownPpFamily() {
    this._teardownChild();
    this._unsubPpFamily?.();
    this._unsubPpChildren?.();
    this._unsubIncomingReq?.();
    this._unsubPpFamily = null;
    this._unsubPpChildren = null;
    this._unsubIncomingReq = null;
    this._selectedChildId = null;
    this.state.ppFamily = null;
    this.state.ppIsMember = false;
    this.state.ppIsChildViewer = false;
    this.state.incomingChildRequests = [];
    this.state.ppChildren = [];
    this.state.selectedChildId = null;
    this.state.childMilestones = [];
    this.state.childInsights = [];
    this.state.childDailyCard = null;
    this.state.childPebbleMessages = [];
    this.state.childPebbleSessions = [];
  }

  // ───────────────────────────────────────────────────────────────
  // Batch F (Portal v3) — child-view access requests.
  //
  // Security model (mirrors firestore.rules — the rules, not these
  // methods, are the trust boundary):
  //   • A request NEVER grants access. requestChildAccess only writes
  //     a `pending` doc.
  //   • Only a PP member can approve; approval adds the uid to the
  //     family's `childViewers` (a read-only tier — milestones +
  //     insights only, never memberIds / Pebble / write).
  //   • The requester can neither self-approve (rule: status update
  //     is member-only) nor self-add to childViewers (rule: the
  //     Cairn-only update branch forbids touching childViewers).
  // ───────────────────────────────────────────────────────────────

  /** Requester (extended-ring member, no own PP household) asks the
   *  parents for read-only Children access. Writes one pending doc
   *  keyed on their uid on the Cairn-resolved core family. */
  async requestChildAccess() {
    const fid = this._currentFamilyId;
    if (!fid) throw new Error('No family to request access from.');
    await setDoc(
      doc(db, 'families', fid, 'childAccessRequests', this._uid),
      {
        uid: this._uid,
        displayName: this.state.user?.displayName ?? 'Family member',
        requestedAt: serverTimestamp(),
        status: 'pending',
      },
    );
  }

  /** Requester withdraws their own pending request. */
  async withdrawChildAccessRequest() {
    const fid = this._currentFamilyId;
    if (!fid) return;
    await deleteDoc(
      doc(db, 'families', fid, 'childAccessRequests', this._uid),
    );
  }

  /** PP member approves: add the uid to `childViewers` (full-array
   *  write — no arrayUnion import needed; last-write-wins is fine at
   *  this cadence) AND stamp the request approved. */
  async approveChildAccess(reqUid) {
    const fid = this._ppFamilyId;
    if (!fid || !this.state.ppIsMember) {
      throw new Error('Only a parent can approve access.');
    }
    const cur = Array.isArray(this.state.ppFamily?.childViewers)
      ? this.state.ppFamily.childViewers
      : [];
    if (!cur.includes(reqUid)) {
      await updateDoc(doc(db, 'families', fid), {
        childViewers: [...cur, reqUid],
        updatedAt: serverTimestamp(),
      });
    }
    await updateDoc(
      doc(db, 'families', fid, 'childAccessRequests', reqUid),
      {
        status: 'approved',
        actionedBy: this._uid,
        actionedAt: serverTimestamp(),
      },
    );
  }

  /** PP member declines: stamp the request only — no grant. */
  async declineChildAccess(reqUid) {
    const fid = this._ppFamilyId;
    if (!fid || !this.state.ppIsMember) {
      throw new Error('Only a parent can decline access.');
    }
    await updateDoc(
      doc(db, 'families', fid, 'childAccessRequests', reqUid),
      {
        status: 'declined',
        actionedBy: this._uid,
        actionedAt: serverTimestamp(),
      },
    );
  }

  /** PP member revokes a previously-granted viewer: drop the uid
   *  from `childViewers` (access deactivates live via the viewer's
   *  _reconcileChildViewer) + best-effort flip their request doc so
   *  it doesn't linger as approved. */
  async revokeChildViewer(uid) {
    const fid = this._ppFamilyId;
    if (!fid || !this.state.ppIsMember) {
      throw new Error('Only a parent can revoke access.');
    }
    const cur = Array.isArray(this.state.ppFamily?.childViewers)
      ? this.state.ppFamily.childViewers
      : [];
    const next = cur.filter((x) => x !== uid);
    if (next.length !== cur.length) {
      await updateDoc(doc(db, 'families', fid), {
        childViewers: next,
        updatedAt: serverTimestamp(),
      });
    }
    try {
      await updateDoc(
        doc(db, 'families', fid, 'childAccessRequests', uid),
        {
          status: 'declined',
          actionedBy: this._uid,
          actionedAt: serverTimestamp(),
        },
      );
    } catch {
      /* request doc may not exist — revocation already done */
    }
  }

  /**
   * 2026-05-15 — lazy migration: stamp `visibleTo` onto trip /
   * familyEvent docs that predate it, so stage-2 enforcement (tighter
   * rule + `array-contains` query) can be switched on without legacy
   * docs vanishing from the list. Fire-and-forget; idempotent (skips
   * docs that already have the array); per-doc guard prevents write
   * storms across rapid snapshots, with retry allowed on failure.
   */
  _backfillVisibleTo(collName, rawDocs) {
    if (!db || !this._currentFamilyId) return;
    const fam = this.state.family;
    if (!fam) return; // need the member arrays to compute the audience
    if (!this._vtBackfilled) this._vtBackfilled = new Set();
    for (const d of rawDocs) {
      const data = d.data();
      if (Array.isArray(data.visibleTo)) continue;
      const key = `${collName}/${d.id}`;
      if (this._vtBackfilled.has(key)) continue;
      this._vtBackfilled.add(key);
      updateDoc(doc(db, 'families', this._currentFamilyId, collName, d.id), {
        // Slice 3a: include tagged attendees (Participants) in the
        // backfilled audience so a legacy doc never under-shares once
        // enforcement is on. Connections deliberately NOT fanned out
        // here — legacy docs predate them and their 'extended' already
        // resolves to a safe superset; a per-doc async family fetch in
        // a backfill loop would be needlessly heavy.
        visibleTo: computeVisibleTo(
          data.visibility ?? 'family', fam, data.createdBy,
          Array.isArray(data.attendees) ? data.attendees : [],
        ),
      }).catch((e) => {
        this._vtBackfilled.delete(key); // allow retry on the next snapshot
        console.warn(`[Cairn] visibleTo backfill failed (${key}):`, e?.code, e?.message);
      });
    }
  }

  /**
   * Phase 2B Slice 3a (2026-05-18) — materialize a trip/event's
   * `visibleTo` with the flat-family 3-stop semantics:
   *   Just Me (personal)     → owner
   *   Participants (family)  → household + owner + TAGGED attendees
   *   Everyone (extended)    → + cairn ring + all CONNECTION members
   * Tagged attendees always land in the audience (so "Participants"
   * shows the trip to the people you tagged — Thomas's spec). The
   * connected-family member fan-out is fetched ONLY for "Everyone"
   * (the async resolve is skipped for personal/family — no cost on
   * the common path). Shared by saveTrip + saveEvent so the two
   * stay in parity.
   */
  async _visibleToFor(rest, family, ownerUid) {
    const visibility = rest?.visibility ?? 'family';
    const attendees = Array.isArray(rest?.attendees) ? rest.attendees : [];
    const connMembers = visibility === 'extended'
      ? await resolveConnectionMemberIds(family)
      : [];
    return computeVisibleTo(visibility, family, ownerUid, attendees, connMembers);
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
    // Stage 1 (additive — no rule/query change yet): always carry an
    // accurate read-audience so stage 2 can flip enforcement on safely.
    // Slice 3a: now includes tagged attendees (Participants) + resolved
    // connection members (Everyone) per the flat-family 3-stop model.
    payload.visibleTo = await this._visibleToFor(
      rest,
      this.state.family,
      rest.createdBy ?? uid, // existing creator on update; this user on create
    );
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
   * Collaborative trip planner (Portal). planItems live under the
   * Cairn-resolved family's trip (same context as the trips listener).
   * Read/write is gated by the parent trip's `visibleTo` server-side
   * (firestore.rules `canCoplanTrip`) — the trip's audience co-plans
   * it; a "family" trip's plan is hidden from the extended ring.
   * Component-managed listener (subscribe on open, unsub on close).
   */
  planItemsListener(tripId, onChange) {
    if (!db || !this._currentFamilyId || !tripId) return () => {};
    return onSnapshot(
      collection(
        db,
        'families',
        this._currentFamilyId,
        'trips',
        tripId,
        'planItems',
      ),
      (snap) => {
        const items = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .sort((a, b) => {
            const dk = String(a.day ?? '').localeCompare(String(b.day ?? ''));
            if (dk !== 0) return dk;
            const tk = String(a.time ?? '').localeCompare(String(b.time ?? ''));
            if (tk !== 0) return tk;
            return (
              (a.createdAt?.toMillis?.() ?? 0) -
              (b.createdAt?.toMillis?.() ?? 0)
            );
          });
        onChange(items);
      },
      (err) => {
        console.warn('[Portal] planItems subscription error:', err.code, err.message);
        onChange([]);
      },
    );
  }

  async addPlanItem(tripId, item) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    const title = String(item?.title ?? '').trim();
    if (!title) throw new Error('Add a title.');
    const url = String(item?.url ?? '').trim();
    const ref = await addDoc(
      collection(
        db,
        'families',
        this._currentFamilyId,
        'trips',
        tripId,
        'planItems',
      ),
      {
        title,
        type: item?.type ?? 'note',
        day: item?.day ?? '',
        time: item?.time ?? '',
        durationMins: Number.isFinite(item?.durationMins)
          ? item.durationMins
          : 60,
        ...(/^https?:\/\//i.test(url) ? { url } : {}),
        // Honest author tag — the rule enforces addedBy == caller.
        addedBy: uid,
        createdAt: serverTimestamp(),
      },
    );
    return ref.id;
  }

  /** Patch a plan item the caller authored (the rule restricts
   *  update to addedBy == caller). Used to attach a file URL after
   *  the item doc exists (need its id for the Storage path). */
  async updatePlanItem(tripId, itemId, patch) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    await updateDoc(
      doc(
        db,
        'families',
        this._currentFamilyId,
        'trips',
        tripId,
        'planItems',
        itemId,
      ),
      patch,
    );
  }

  /** Upload a per-item attachment (PDF / screenshot) to Storage and
   *  return its download URL. Path has NO extension (Cloud Storage
   *  rules can't combine a wildcard with a literal .ext); the
   *  contentType metadata drives serving. Member-gated via
   *  storage.rules `planAttachments` path. */
  async uploadPlanAttachment(tripId, itemId, file) {
    if (!storage || !this._currentFamilyId) {
      throw new Error('Storage unavailable.');
    }
    const path = `families/${this._currentFamilyId}/planAttachments/${tripId}__${itemId}`;
    const r = storageRef(storage, path);
    await uploadBytes(r, file, {
      contentType: file.type || 'application/octet-stream',
    });
    return getDownloadURL(r);
  }

  async deletePlanItem(tripId, itemId) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    await deleteDoc(
      doc(
        db,
        'families',
        this._currentFamilyId,
        'trips',
        tripId,
        'planItems',
        itemId,
      ),
    );
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
    // Stage 1 (additive) — parity with saveTrip so stage-2 enforcement
    // can cover /familyEvents too. Slice 3a: same 3-stop audience
    // (attendees for Participants, connection members for Everyone).
    payload.visibleTo = await this._visibleToFor(
      rest,
      this.state.family,
      rest.createdBy ?? uid,
    );
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

  // ── School-calendar import (Ellie ①) ──────────────────────────────
  // 3 steps: upload the file → CF extracts candidate events → after
  // the PARENT REVIEW screen, the confirmed subset is written. The CF
  // never writes; only this confirmed-write does.

  /** Upload the school calendar (PDF/image/.docx) to Storage. Path
   *  has NO extension (contentType drives it, per the wildcard rule).
   *  Returns the path + a coarse fileType the CF branches on. */
  async uploadSchoolCalendar(file) {
    if (!storage || !this._currentFamilyId) {
      throw new Error('Storage unavailable.');
    }
    const ct = file.type || '';
    const fileType = /pdf/.test(ct)
      ? 'pdf'
      : /^image\//.test(ct)
        ? 'image'
        : /word|officedocument|msword/.test(ct)
          ? 'docx'
          : 'pdf';
    const path = `families/${this._currentFamilyId}/schoolCalendarUploads/${Date.now()}`;
    await uploadBytes(storageRef(storage, path), file, {
      contentType: ct || 'application/octet-stream',
    });
    return { storagePath: path, fileType };
  }

  /** Call the extractSchoolCalendar CF → candidate events for review.
   *  Returns [] gracefully if the CF isn't deployed yet. */
  async extractSchoolCalendarEvents(storagePath, fileType) {
    if (!functions || !this._currentFamilyId) {
      throw new Error('No family yet.');
    }
    const fn = httpsCallable(functions, 'extractSchoolCalendar');
    const res = await fn({
      familyId: this._currentFamilyId,
      storagePath,
      fileType,
    });
    const events = res?.data?.events;
    return Array.isArray(events) ? events : [];
  }

  /** Write the parent-confirmed subset as familyEvents tagged
   *  source:'school-import'. They're family-wide (personIds = the
   *  whole ring) and ring-visible ('extended') so everyone sees
   *  school closures/holidays. */
  async importSchoolEvents(list) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    const fam = this.state.family ?? {};
    const memberIds = Array.isArray(fam.memberIds) ? fam.memberIds : [];
    const cairnIds = Array.isArray(fam.cairnMemberIds)
      ? fam.cairnMemberIds
      : [];
    const personIds = [...new Set([...memberIds, ...cairnIds, uid])];
    const visibleTo = computeVisibleTo('extended', fam, uid);
    const col = collection(
      db,
      'families',
      this._currentFamilyId,
      'familyEvents',
    );
    const clean = (list ?? [])
      .filter(
        (e) =>
          e &&
          /^\d{4}-\d{2}-\d{2}$/.test(String(e.date ?? '')) &&
          String(e.title ?? '').trim(),
      )
      .slice(0, 250);
    let n = 0;
    await Promise.all(
      clean.map(async (e) => {
        await addDoc(col, {
          title: String(e.title).trim().slice(0, 120),
          date: e.date,
          type: e.type || 'other',
          source: 'school-import',
          personIds,
          visibility: 'extended',
          visibleTo,
          createdBy: uid,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
        n += 1;
      }),
    );
    return n;
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
   * Phase 2C Slice 1 (2026-05-18). Dual-accept connect-code lookup —
   * THE unified connect-code resolver. `cairnInviteCode` is the
   * unified field (2C-2): for a post-2C-2 family it holds the new
   * 6-char code; for a pre-2C-2 Cairn-only family it still holds an
   * old `CAIRN-XXXX`; either way an exact-match query resolves it.
   * Checked FIRST. Then the legacy PP `inviteCode` (6-char) as the
   * back-compat fallback for pre-2C-2 PP families that only ever
   * had `inviteCode`. A post-2C-2 family carries the SAME 6-char
   * string in both fields — the cairn-first order makes that
   * resolve as 'cairn' (30-day expiry), which is correct.
   * No-collision note (2C-1's "prefix" reasoning is obsolete after
   * 2C-2): the two fields can legitimately hold the same value now;
   * cairn-first ordering is deliberate and unambiguous.
   *
   * Returns the family doc augmented with `_matchedCodeKind`
   * ('cairn' | 'pp') so the redeem path validates the matching
   * expiry field. Null on no match. Rides the existing open
   * `/families` `list` rule (any signed-in user) — same as the PP
   * and Cairn code lookups already do; NO rules change.
   *
   * WIRED in 2C-4e: `join-family-screen._lookup` calls this for the
   * pre-join preview; `redeemConnectCode` calls it for the join.
   */
  async findFamilyByConnectCode(code) {
    if (!db) throw new Error('Firebase not configured.');
    const cairnSnap = await getDocs(
      query(collection(db, 'families'), where('cairnInviteCode', '==', code)),
    );
    if (!cairnSnap.empty) {
      const d = cairnSnap.docs[0];
      return { id: d.id, ...d.data(), _matchedCodeKind: 'cairn' };
    }
    const ppSnap = await getDocs(
      query(collection(db, 'families'), where('inviteCode', '==', code)),
    );
    if (!ppSnap.empty) {
      const d = ppSnap.docs[0];
      return { id: d.id, ...d.data(), _matchedCodeKind: 'pp' };
    }
    return null;
  }

  // Phase 2C Slice 4e (2026-05-18): the legacy `joinFamilyAsCairn`
  // (Cairn-code-only lookup) was DELETED here — zero callers after
  // join-family-screen rewired to `redeemConnectCode`. The unified
  // `redeemConnectCode` supersedes it: dual-accept lookup
  // (`findFamilyByConnectCode`) + the SAME shared write mechanics
  // (`_applyCairnJoin` → `cairnMemberIds`, NEVER `memberIds`; mutual
  // connection). Same return (familyId) + same side-effects, just
  // also resolving the unified 6-char + legacy PP code. Don't
  // re-introduce a Cairn-code-only join — use `redeemConnectCode`.

  /**
   * Phase 2C Slice 1 (2026-05-18). Extracted verbatim from
   * joinFamilyAsCairn: the shared, security-critical "add me to this
   * family's cairnMemberIds + memberProfile, sync my user doc,
   * record the mutual connection" mechanics. The caller resolves
   * `family` (by whichever code format) and validates expiry FIRST.
   *
   * SECURITY SPINE: routes ONLY to `cairnMemberIds` (the
   * non-escalating flat-member tier), NEVER `memberIds` /
   * `parentIds`. So redeeming ANY code format through here grants
   * flat membership only; becoming a child's parent stays the
   * separate explicit 2A confirm step. Atomic update still matches
   * `isJoiningOwnUidAsCairn()` exactly — NO firestore.rules change.
   */
  async _applyCairnJoin(family) {
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');
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
      // Slice 1b: backfill the mutual connection for an already-joined
      // pair (self-healing on any re-entry; arrayUnion is idempotent).
      await this._recordMutualConnection(family.id, uid);
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
    await updateDoc(doc(db, 'families', family.id), {
      cairnMemberIds: [...beforeCairn, uid],
      [`memberProfiles.${uid}`]: profile,
      updatedAt: serverTimestamp(),
    });

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

    // Slice 1b: record the mutual family↔family connection.
    await this._recordMutualConnection(family.id, uid);

    return family.id;
  }

  /**
   * Phase 2C Slice 1 (2026-05-18). The ONE unified connect-code
   * redemption: dual-accept lookup (ANY legacy code format) → flat
   * `cairnMemberIds` membership + mutual connection. This is the
   * forward path the unified onboarding (2C-4) will call instead of
   * joinFamilyAsCairn.
   *
   * SECURITY SPINE: redeeming ANY code — INCLUDING an old PP 6-char
   * that historically meant "co-parent" → `memberIds` — grants ONLY
   * flat membership here, NEVER `memberIds` / child `parentIds`.
   * Co-parenting is the separate explicit 2A confirm step. One code
   * can't reach family-admin rights or child data. This intentional
   * de-escalation of the legacy PP code is inert until 2C-4 wires
   * this path into the UI.
   *
   * ADDITIVE + UNWIRED in 2C-1 (behaviour-neutral): nothing calls
   * this yet. Rides the existing isJoiningOwnUidAsCairn branch (same
   * writes as joinFamilyAsCairn) — NO firestore.rules change.
   *
   * Throws .code = 'not-found' | 'expired' | 'full' for error UX.
   */
  async redeemConnectCode(code) {
    if (!db) throw new Error('Firebase not configured.');
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');

    const family = await this.findFamilyByConnectCode(code);
    if (!family) {
      const err = new Error('Invite code not found.');
      err.code = 'not-found';
      throw err;
    }

    // Validate the expiry of the code field that actually matched.
    const rawExp = family._matchedCodeKind === 'pp'
      ? family.inviteCodeExpiresAt
      : family.cairnInviteCodeExpiresAt;
    const exp = rawExp?.toDate?.()
      ?? (rawExp ? new Date(rawExp) : null);
    if (!exp || exp < new Date()) {
      const err = new Error('This invite code has expired.');
      err.code = 'expired';
      throw err;
    }

    return this._applyCairnJoin(family);
  }

  /**
   * Flat-family model — Phase 2B Slice 1b (2026-05-18). Records the
   * MUTUAL family↔family connection after a connect-code redemption.
   * Additive + best-effort: a failure here NEVER fails the join (the
   * connection is recoverable on any later re-entry — `arrayUnion` is
   * idempotent — and the join is the critical path).
   *
   * A connection grants ONLY activity co-visibility (Slice 2's
   * `computeVisibleTo`) — NEVER `/children`. Both writes ride the
   * EXISTING `/families` update branches: the HOST write is authorized
   * by branch-2 (the redeemer is now in the host's `cairnMemberIds`,
   * and we touch neither `memberIds` nor `childViewers`); the OWN-family
   * write by branch-1/2 (the redeemer is a member of their own family).
   * So the strict `isJoiningOwnUidAsCairn` join rule is UNTOUCHED — no
   * firestore.rules change, no rule deploy for this slice.
   *
   * Familyless / Cairn-only redeemer (no own family doc yet) → skipped;
   * deferred to 2C account/family unification (consistent with the
   * "build on CAIRN now, unify in 2C" sequencing).
   */
  async _recordMutualConnection(hostFamilyId, uid) {
    try {
      const { getDoc, arrayUnion } = await import('firebase/firestore');
      const meSnap = await getDoc(doc(db, 'users', uid));
      const myFamilyId = meSnap.exists() ? meSnap.data()?.familyId : null;
      // No own family yet (Cairn-only / familyless) → defer to 2C.
      // Can't connect a family to itself.
      if (!myFamilyId || myFamilyId === hostFamilyId) return;
      await updateDoc(doc(db, 'families', hostFamilyId), {
        connectedFamilyIds: arrayUnion(myFamilyId),
        updatedAt: serverTimestamp(),
      });
      await updateDoc(doc(db, 'families', myFamilyId), {
        connectedFamilyIds: arrayUnion(hostFamilyId),
        updatedAt: serverTimestamp(),
      });
    } catch (e) {
      // Best-effort: a failed connection record must not fail the join.
      console.warn('[connect] mutual connection record skipped (non-fatal):', e);
    }
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
   * Remove an extended-ring member from this Cairn family entirely.
   * Strips them from `cairnMemberIds`, drops their denormalised
   * `memberProfiles[uid]`, revokes any read-only child access
   * (`childViewers`), tidies any pending `childAccessRequests/{uid}`,
   * and pulls them from every sub-group — one atomic family-doc
   * write (the sub-collection request doc is a separate delete).
   *
   * Scope guard: refuses to remove a PP member (anyone in
   * `memberIds`). Removing a co-parent is an account-level action,
   * not a "manage the ring" action — and the firestore.rules keep
   * `createdBy` immutable regardless. Caller must be a PP member
   * (the modal only surfaces the control to them); the member
   * update branch in firestore.rules allows mutating cairnMemberIds
   * + memberProfiles + childViewers + subGroups.
   */
  async removeCairnMember(uid) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    if (!uid) throw new Error('uid is required.');
    const fam = this.state.family ?? {};
    const memberIds = Array.isArray(fam.memberIds) ? fam.memberIds : [];
    if (memberIds.includes(uid)) {
      throw new Error('PP members can’t be removed from the ring here.');
    }
    const { deleteField } = await import('firebase/firestore');
    const patch = { updatedAt: serverTimestamp() };

    const cairnIds = Array.isArray(fam.cairnMemberIds) ? fam.cairnMemberIds : [];
    if (cairnIds.includes(uid)) {
      patch.cairnMemberIds = cairnIds.filter((id) => id !== uid);
    }
    if (fam.memberProfiles && fam.memberProfiles[uid]) {
      patch[`memberProfiles.${uid}`] = deleteField();
    }
    const viewers = Array.isArray(fam.childViewers) ? fam.childViewers : [];
    if (viewers.includes(uid)) {
      patch.childViewers = viewers.filter((id) => id !== uid);
    }
    const subGroups = fam.subGroups ?? {};
    for (const [gid, g] of Object.entries(subGroups)) {
      const ids = Array.isArray(g.memberIds) ? g.memberIds : [];
      if (ids.includes(uid)) {
        patch[`subGroups.${gid}.memberIds`] = ids.filter((id) => id !== uid);
      }
    }

    await updateDoc(doc(db, 'families', this._currentFamilyId), patch);

    // Best-effort: clear any open child-access request from this
    // person so re-inviting them later starts clean. Non-fatal.
    try {
      await deleteDoc(
        doc(db, 'families', this._currentFamilyId, 'childAccessRequests', uid),
      );
    } catch {
      /* no open request, or already gone — fine */
    }
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
      // Flat-family model Phase 2B (2026-05-18): families this family
      // is connected to (mutual; activity co-visibility ONLY, never
      // /children). Separate, narrower tier than cairnMemberIds.
      // Populated by the mutual connect handshake (Slice 1b); read
      // defensively as `?? []` everywhere.
      connectedFamilyIds: [],
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
    this._teardownPpFamily();
    this._uid = null;
    this._currentFamilyId = null;
    this._holidayKey = null;
    this._ppFamilyId = null;
    this.userDocResolved = false;
    this.state = {
      user: null,
      family: null,
      children: [],
      trips: [],
      events: [],
      holidays: [],
      ppFamily: null,
      ppIsMember: false,
      ppChildren: [],
      selectedChildId: null,
      childMilestones: [],
      childInsights: [],
      childDailyCard: null,
      childPebbleMessages: [],
      childPebbleSessions: [],
    };
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

/**
 * Phase 2B Slice 3b (2026-05-18) — the people behind a family's
 * `connectedFamilyIds`, for the trip/activity attendee picker's
 * "Connections" group. Same member-object shape as
 * `deriveExtendedMembers` ({uid,displayName,photoURL,role,circles,hue}).
 * Async — fetches each connected family doc + reads its
 * `memberProfiles`/`memberIds`. Best-effort: an unreadable/missing
 * connected family is skipped, never throws. De-duped by uid across
 * families; the viewer is excluded (they're in the immediate group).
 *
 * (Lean parallel `resolveConnectionMemberIds` — Slice 2 — returns just
 * the uids for the save-path `computeVisibleTo`; this returns the
 * richer profiles the picker needs. Both are best-effort fetches; kept
 * separate so the perf-sensitive save path stays uid-only.)
 */
export async function deriveConnectionMembers(uid, family) {
  const ids = Array.isArray(family?.connectedFamilyIds) ? family.connectedFamilyIds : [];
  if (ids.length === 0 || !db) return [];
  const { getDoc } = await import('firebase/firestore');
  const out = [];
  const seen = new Set(uid ? [uid] : []);
  let hue = 150;
  for (const fid of ids) {
    try {
      const snap = await getDoc(doc(db, 'families', fid));
      if (!snap.exists()) continue;
      const fam = snap.data() ?? {};
      const profiles = fam.memberProfiles ?? {};
      const famName = fam.name ?? 'Connection';
      for (const m of (fam.memberIds ?? [])) {
        if (seen.has(m)) continue;
        seen.add(m);
        const url = profiles[m]?.profilePhotoURL;
        out.push({
          uid: m,
          displayName: profiles[m]?.displayName ?? 'Connection',
          photoURL: typeof url === 'string' && /^https?:\/\//i.test(url) ? url : null,
          role: 'connection',
          circles: ['connection'],
          familyName: famName,
          hue,
        });
        hue = (hue + 53) % 360;
      }
    } catch { /* skip unreadable connection — best-effort */ }
  }
  return out;
}

/**
 * 2026-05-15 — materialized read-audience for a trip / family-event,
 * so visibility can be ENFORCED by Firestore rules (rules can't filter
 * list queries, so the gating set must live on the doc — same pattern
 * the codebase uses for per-user scoping).
 * Flat-family model — Phase 2B Slice 2 (2026-05-18). The stored
 * `visibility` keys stay `personal|family|extended` (UI relabels them
 * Just Me / Participants / Everyone in Slice 3 — no field migration).
 * Audience per stop:
 *   - personal  (Just Me)      → just the owner
 *   - family    (Participants) → memberIds + owner + tagged attendees
 *   - extended  (Everyone)     → memberIds + cairnMemberIds + owner
 *                                + attendees + connection members
 * `attendees` (the trip's tagged uids) and `connectionMemberIds` (the
 * resolved member uids of `family.connectedFamilyIds`, via
 * `resolveConnectionMemberIds`) are NEW optional params, default `[]`.
 * With them omitted this is BYTE-IDENTICAL to the prior behaviour
 * (existing call sites unchanged → Slice 2 is behaviour-neutral until
 * Slice 3 starts passing them). `cairnMemberIds` is KEPT in `extended`
 * for back-compat so existing ring-shared trips never vanish on
 * re-save; connections are ADDED, not a replacement.
 * The owner is always included so a Cairn-only creator (empty
 * memberIds) never loses sight of their own trip. Recompute on every
 * save; `_backfillVisibleTo` populates legacy docs.
 *
 * ⚠️ LOCKSTEP with iOS `AppState.tripVisibleTo` — change both together.
 */
export function computeVisibleTo(visibility, family, ownerUid, attendees = [], connectionMemberIds = []) {
  const memberIds = family?.memberIds ?? [];
  const cairnIds = family?.cairnMemberIds ?? [];
  const owner = ownerUid ? [ownerUid] : [];
  const tagged = Array.isArray(attendees) ? attendees : [];
  const conns = Array.isArray(connectionMemberIds) ? connectionMemberIds : [];
  if (visibility === 'personal') return [...new Set(owner)];
  if (visibility === 'extended') {
    return [...new Set([...memberIds, ...cairnIds, ...owner, ...tagged, ...conns])];
  }
  // 'family' + any unknown/missing value → household + tagged attendees.
  return [...new Set([...memberIds, ...owner, ...tagged])];
}

/**
 * Phase 2B Slice 2 — resolve the member uids behind a family's
 * `connectedFamilyIds` (each connection is family↔family; we want the
 * PEOPLE in those families so they can land in an "Everyone" trip's
 * materialized `visibleTo`). Async (fetches each connected family doc);
 * call it in the save path ONLY when visibility === 'extended' and feed
 * the result into `computeVisibleTo`'s `connectionMemberIds`. A
 * connection's members get activity co-visibility ONLY — NEVER
 * `/children` (that gate stays `isCairnMember`, untouched). Best-effort:
 * an unreadable/missing connected family is skipped, never throws.
 */
export async function resolveConnectionMemberIds(family) {
  const ids = Array.isArray(family?.connectedFamilyIds) ? family.connectedFamilyIds : [];
  if (ids.length === 0 || !db) return [];
  const { getDoc } = await import('firebase/firestore');
  const out = new Set();
  for (const fid of ids) {
    try {
      const snap = await getDoc(doc(db, 'families', fid));
      if (!snap.exists()) continue;
      for (const uid of (snap.data()?.memberIds ?? [])) out.add(uid);
    } catch { /* skip unreadable connection — best-effort */ }
  }
  return [...out];
}

/**
 * Unified connect-code generator — Phase 2C Slice 2 (2026-05-18).
 * ONE code format across both surfaces: a plain 6-char code, NO
 * `CAIRN-` prefix (the prefix was old-sub-brand; we're collapsing
 * to one identity). Charset is identical to iOS
 * `FirestoreService.generateInviteCode` (no I/L/O/0/1 — avoids
 * manual-typing confusion + keeps codes visually identical
 * regardless of which surface minted them). 30-day expiry is set
 * by the callers (createCairnOnlyFamily / regenerateCairnInviteCode),
 * unchanged. The code lives in the `cairnInviteCode` field — the
 * unified connect-code field; legacy PP `inviteCode` stays
 * read-only for back-compat (dual-accept via findFamilyByConnectCode).
 * Function name kept so existing callers need no change.
 */
export function newCairnInviteCode() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
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
    // 2026-05-15 — make the common operational failures self-diagnose
    // instead of surfacing an opaque "Google Calendar: 403 {json}".
    if (res.status === 401) {
      throw new Error('Your Google session expired — connect your calendar again.');
    }
    if (
      res.status === 403 &&
      /accessNotConfigured|SERVICE_DISABLED|PERMISSION_DENIED|insufficient/i.test(txt)
    ) {
      throw new Error(
        'Google Calendar access isn’t configured for this project yet. ' +
          '(Admin: enable the Google Calendar API and add the ' +
          'calendar.readonly scope to the OAuth consent screen in Google ' +
          'Cloud Console.)',
      );
    }
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
