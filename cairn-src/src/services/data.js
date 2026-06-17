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
  Timestamp,
  increment,
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
      // Activity Unification U3 (2026-06-02) — the unified single-day
      // items. Holds ALL visible activities (standalone + trip-attached);
      // the calendar reads the standalone slice (tripId nil), the planner
      // (later) reads tripId == trip. visibleTo-filtered server-side.
      activities: [],
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
      // parents: pending requests awaiting approve/decline.
      incomingChildRequests: [],
      ppChildren: [],
      selectedChildId: null,
      childMilestones: [],
      childInsights: [],
      childDailyCard: null,
      // Close-the-loop Slice 3 (2026-05-28) — family-scope daily brief
      // (the multi-child Family Brief). Generated server-side nightly
      // (scheduledFamilyBriefs CF), read here. Parent-household only.
      familyDailyCard: null,
      // Close-the-loop Slice 4 (2026-05-28) — the four memory layers,
      // read-only ("What Pebble Knows"). Member-private docs of the
      // co-parent are filtered to the viewer's own uid in the listener.
      pebbleAnchors: [],
      pebbleRhythms: [],
      pebblePatterns: [],
      pebbleLiveContext: [],
      childPebbleMessages: [],
      childPebbleSessions: [],
      // Pebble-for-all (2026-06) — the non-parent family PLANNING thread,
      // family-shared at /families/{fid}/pebblePlanningMessages, separate
      // from childPebbleMessages (the parent child-advisor thread).
      planningMessages: [],
    };
    this._uid = null;
    this._unsubUser = null;
    this._unsubFamily = null;
    this._unsubChildren = null;
    this._unsubTrips = null;
    this._unsubEvents = null;
    this._unsubActivities = null;
    // Pebble-for-all — the non-parent family PLANNING thread listener,
    // attached on the Cairn-resolved family (mirrors _unsubTrips/etc).
    this._unsubPlanning = null;
    this._currentFamilyId = null;
    this._inviteCodeMigratedFamilyId = null;
    this._holidayKey = null;
    this._ppFamilyId = null;
    this._selectedChildId = null;
    this._unsubPpFamily = null;
    this._unsubPpChildren = null;
    this._unsubChildMs = null;
    this._unsubChildIns = null;
    this._unsubChildDaily = null;
    this._unsubFamilyDaily = null;
    // Close-the-loop Slice 4 (2026-05-28) — the four memory layers
    // ("What Pebble Knows"). Read-only on the web (editing stays iOS).
    // Security #2 (2026-06-13) made the read rules scope-conditional, so
    // each layer fans out into family / own-member / parented-child
    // sub-queries (mirrors iOS makeScopeSegmentedListener), merged
    // client-side. _memUnsubs = the family+member subs (stable for the
    // family); _memChildUnsubs = the child subs (re-attached once
    // ppChildren resolves). _memSlices buffers each layer's 3 slices.
    this._memFid = null;
    this._memLayers = null;
    this._memSlices = {};
    this._memUnsubs = [];
    this._memChildUnsubs = [];
    this._memChildKey = '';
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
      // the joined family's trips. Users with only `familyId` (non-parent
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
        this._unsubActivities?.();
        this._unsubPlanning?.();
        this._unsubFamily = null;
        this._unsubChildren = null;
        this._unsubTrips = null;
        this._unsubEvents = null;
        this._unsubActivities = null;
        this._unsubPlanning = null;
        this.state.family = null;
        this.state.children = [];
        this.state.trips = [];
        this.state.events = [];
        this.state.activities = [];
        this.state.planningMessages = [];
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
      // Batch F: a user with NO own parent household who a parent
      // approved as a child viewer resolves the parent-household to
      // THIS (resolved) family, read-only. Reconciled here so a live
      // approval (childViewers change) activates access without a
      // reload. Pure fallback — members are untouched.
      this._reconcileChildViewer();
      this._loadHolidays();
      // One-shot silent migration to the unified 6-char invite-code
      // format. Legacy codes minted before Phase 2C Slice 2
      // (2026-05-18) still carry the deprecated `CAIRN-XXXX` prefix;
      // back-compat redemption keeps working, but the visible code
      // should match the new format. Only parents can write to the
      // family doc, so non-parent viewers no-op silently.
      this._maybeMigrateInviteCodeFormat();
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
    // Activity Unification U3 — unified activities. Same visibleTo
    // array-contains filter as trips/events (strict rule). Client-sorts
    // by day → time → createdAt (mirrors iOS FamilyActivity.order; no
    // server orderBy → only the automatic single-field index needed).
    this._unsubActivities = onSnapshot(
      query(
        collection(db, 'families', familyId, 'activities'),
        where('visibleTo', 'array-contains', this._uid),
      ),
      (snap) => {
        this.state.activities = snap.docs
          .map((d) => {
            const data = d.data();
            return {
              id: d.id,
              ...data,
              day: data.day ?? '',
              createdAt: data.createdAt?.toDate?.() ?? null,
              updatedAt: data.updatedAt?.toDate?.() ?? null,
            };
          })
          .sort((a, b) => {
            const dk = String(a.day ?? '').localeCompare(String(b.day ?? ''));
            if (dk !== 0) return dk;
            const tk = String(a.time ?? '').localeCompare(String(b.time ?? ''));
            if (tk !== 0) return tk;
            return (a.createdAt?.getTime?.() ?? 0) - (b.createdAt?.getTime?.() ?? 0);
          });
        this._emit();
      },
      (err) => {
        console.warn('[Cairn] activities subscription error:', err.code, err.message);
      },
    );
    // Pebble-for-all (2026-06) — the family PLANNING thread feeding the
    // Pebble tab's non-parent surface (<family-pebble>). Family-shared,
    // single thread, no sessions / no private mode. The
    // /pebblePlanningMessages rule is plain isCairnMember (no content
    // predicate), so the whole-collection query is admitted; we sort
    // client-side by timestamp so no composite index is needed (same
    // pattern as trips / events / activities above).
    this._unsubPlanning?.();
    this._unsubPlanning = onSnapshot(
      collection(db, 'families', familyId, 'pebblePlanningMessages'),
      (snap) => {
        this.state.planningMessages = snap.docs
          .map((d) => {
            const data = d.data();
            return {
              id: d.id,
              role: data.role,
              content: data.content,
              senderUid: data.senderUid,
              timestamp:
                data.timestamp?.toDate?.() ??
                (data.timestamp ? new Date(data.timestamp) : null),
            };
          })
          .sort(
            (a, b) =>
              (a.timestamp?.getTime?.() ?? 0) - (b.timestamp?.getTime?.() ?? 0),
          );
        this._emit();
      },
      (err) =>
        console.warn(
          '[Cairn] pebblePlanningMessages subscription error:',
          err.code,
          err.message,
        ),
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
   * server-side (a non-parent joiner gets PERMISSION_DENIED). The
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
        // parents see the pending access-request queue; a viewer
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
        // The memory-engine child sub-queries depend on the children
        // this user parents; (re)attach them now that ppChildren has
        // resolved (they load async, after the family + member memory
        // subs attach). No-ops on the read-only path. See
        // _subscribePebbleMemory / _attachMemoryChildSubs.
        this._attachMemoryChildSubs();
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
    // Close-the-loop Slice 3 (2026-05-28) — family-scope daily brief.
    // Family-level (not per-child): generated nightly server-side for
    // multi-child families + written to /familyDailyCards/{YYYY-MM-DD}.
    // Gated on the own-household path (`!_ppReadOnly`) exactly like the
    // per-child dailyCards subscription — a read-only viewer would just
    // get PERMISSION_DENIED churn (rule is isFamilyMember). Latest =
    // lexicographically-max doc id (sorts chronologically, tz-free).
    if (!this._ppReadOnly) {
      // SWR: paint the last-cached family brief (today only) before the
      // snapshot resolves; the listener below reconciles it instantly.
      const cachedFam = this._readBriefCache('family', ppFid);
      if (cachedFam) this.state.familyDailyCard = cachedFam;
      this._unsubFamilyDaily = onSnapshot(
        collection(db, 'families', ppFid, 'familyDailyCards'),
        (snap) => {
          const cards = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
          cards.sort((a, b) => String(b.id).localeCompare(String(a.id)));
          // Only surface TODAY's card. The doc id is a local-tz YYYY-MM-DD;
          // without this, a stale card (e.g. Tuesday's) shows on Friday with
          // a wrong day-of-week in its title. If today's card hasn't been
          // generated yet, show nothing rather than a stale brief.
          // Show only a card generated TODAY (browser-local). Use
          // generatedAt (a precise instant), NOT the doc-id string — the
          // CF writes the id in the family's tz (UTC fallback), which can
          // differ from the browser's local date and would otherwise hide
          // a freshly-refreshed card. Stale older-day cards stay hidden.
          const latest = cards[0] ?? null;
          const genMs = latest?.generatedAt?.toMillis?.() ?? 0;
          const freshToday =
            genMs > 0 &&
            formatLocalDate(new Date(genMs)) === formatLocalDate(new Date());
          this.state.familyDailyCard = freshToday ? latest : null;
          if (freshToday) this._writeBriefCache('family', ppFid, latest);
          this._emit();
        },
        (err) =>
          console.warn('[Portal] familyDailyCards error:', err.code, err.message),
      );
      // Close-the-loop Slice 4 — the four memory layers ("What Pebble
      // Knows"). Same own-household gate; rules `allow list` is
      // permissive so the listener succeeds, and we scope-filter
      // member-private docs to the viewer's own uid client-side.
      this._subscribePebbleMemory(ppFid);
    }
  }

  /**
   * Close-the-loop Slice 4 (2026-05-28) — subscribe the four Family
   * Memory Engine layers for the read-only "What Pebble Knows" Portal
   * surface. The Firestore rules use a permissive `allow list` + strict
   * `allow get`, so a collection listener returns ALL docs; we filter
   * member-private docs (scope === 'member') down to the viewer's own
   * uid here (the co-parent's private notes must not leak). Family +
   * child scope pass through; the render resolves child names + tags.
   * Patterns + dismissed live-context items are dropped. Editing stays
   * iOS-only — this is purely a read surface.
   */
  _subscribePebbleMemory(ppFid) {
    const ms = (t) => t?.toMillis?.() ?? 0;
    // Defensive: tear down any prior subs so a re-subscribe (re-resolved
    // family) never leaks listeners.
    this._memUnsubs.forEach((u) => u?.());
    this._memChildUnsubs.forEach((u) => u?.());
    this._memFid = ppFid;
    // Per-layer config: collection, state key, an optional post-merge
    // filter, the sort, and an optional cap. The member sub-query itself
    // scopes member-private docs to this._uid, so no client-side owner
    // filter is needed (the OLD bare listener used a `mineOnly` filter).
    this._memLayers = [
      { col: 'anchors', key: 'pebbleAnchors', extra: null,
        sort: (a, b) => ms(b.updatedAt) - ms(a.updatedAt) },
      { col: 'rhythms', key: 'pebbleRhythms', extra: null,
        sort: (a, b) => ms(b.updatedAt) - ms(a.updatedAt) },
      { col: 'patterns', key: 'pebblePatterns', extra: (p) => !p.dismissedAt,
        sort: (a, b) => ms(b.derivedAt) - ms(a.derivedAt) },
      { col: 'liveContext', key: 'pebbleLiveContext',
        extra: (i) =>
          !i.dismissedAt && ms(i.validFrom) >= Date.now() - 14 * 24 * 3600 * 1000,
        sort: (a, b) => ms(b.validFrom) - ms(a.validFrom), cap: 90 },
    ];
    this._memSlices = {};
    this._memUnsubs = [];
    this._memChildUnsubs = [];
    this._memChildKey = '';
    // Family + own-member sub-queries don't depend on children, so
    // attach them now. The child sub-query is wired by
    // _attachMemoryChildSubs (called here AND when ppChildren resolves),
    // scoped to the children this user actually parents.
    for (const layer of this._memLayers) {
      this._memSlices[layer.key] = { family: [], member: [], child: [] };
      const base = collection(db, 'families', ppFid, layer.col);
      this._memUnsubs.push(
        onSnapshot(
          query(base, where('scope', '==', 'family')),
          (snap) => {
            this._memSlices[layer.key].family = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
            this._recomputeMemLayer(layer);
          },
          (err) => console.warn(`[Portal] ${layer.col}/family error:`, err.code, err.message),
        ),
      );
      if (this._uid) {
        this._memUnsubs.push(
          onSnapshot(
            query(base, where('scope', '==', 'member'), where('memberUid', '==', this._uid)),
            (snap) => {
              this._memSlices[layer.key].member = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
              this._recomputeMemLayer(layer);
            },
            (err) => console.warn(`[Portal] ${layer.col}/member error:`, err.code, err.message),
          ),
        );
      }
    }
    this._attachMemoryChildSubs();
  }

  // Merge a layer's three scope slices (family / own-member / parented-
  // child) into its state key: dedupe by id, apply the optional extra
  // filter + sort, optionally cap. Every memory sub-listener calls this.
  _recomputeMemLayer(layer) {
    const slices = this._memSlices[layer.key];
    if (!slices) return;
    const seen = new Set();
    let merged = [];
    for (const arr of [slices.family, slices.member, slices.child]) {
      for (const it of arr) {
        if (!seen.has(it.id)) {
          seen.add(it.id);
          merged.push(it);
        }
      }
    }
    if (layer.extra) merged = merged.filter(layer.extra);
    merged.sort(layer.sort);
    if (layer.cap && merged.length > layer.cap) merged = merged.slice(0, layer.cap);
    this.state[layer.key] = merged;
    this._emit();
  }

  // (Re)attach the child-scope sub-query for every memory layer. The
  // child read rule is isChildParent(familyId, childId), so the query is
  // limited to children THIS user parents (uid in child.parentIds) — a
  // broader query would permission-deny. Called once from
  // _subscribePebbleMemory and again whenever ppChildren resolves (the
  // children load async, after the family + member subs attach). A key
  // guard skips a needless re-attach when the parented set is unchanged.
  _attachMemoryChildSubs() {
    if (!this._memFid || !this._memLayers) return; // own-household path only
    const childIds = (this.state.ppChildren || [])
      .filter((k) => k?.id && Array.isArray(k.parentIds) && k.parentIds.includes(this._uid))
      .map((k) => k.id)
      .slice(0, 30);
    const key = childIds.join(',');
    if (key === this._memChildKey) return; // unchanged — keep current subs
    this._memChildKey = key;
    this._memChildUnsubs.forEach((u) => u?.());
    this._memChildUnsubs = [];
    if (childIds.length === 0) {
      // No parented children: clear any stale child slice + recompute.
      for (const layer of this._memLayers) {
        if (this._memSlices[layer.key]) {
          this._memSlices[layer.key].child = [];
          this._recomputeMemLayer(layer);
        }
      }
      return;
    }
    for (const layer of this._memLayers) {
      const base = collection(db, 'families', this._memFid, layer.col);
      this._memChildUnsubs.push(
        onSnapshot(
          query(base, where('scope', '==', 'child'), where('childId', 'in', childIds)),
          (snap) => {
            this._memSlices[layer.key].child = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
            this._recomputeMemLayer(layer);
          },
          (err) => console.warn(`[Portal] ${layer.col}/child error:`, err.code, err.message),
        ),
      );
    }
  }

  // ── Brief SWR cache (localStorage) ─────────────────────────────────
  // Paint the last-seen daily/family brief instantly on a cold load or
  // offline, BEFORE the Firestore snapshot resolves, then reconcile.
  // Keyed by family/child id; the value carries the local dateKey so a
  // stale (pre-today) card is never painted, mirroring the snapshot's
  // today-only filter (and iOS SWR). Cleared on sign-out.
  _briefCacheKey(kind, id) {
    return `pp_brief_${kind}_${id}`;
  }

  _writeBriefCache(kind, id, card) {
    if (!id || !card) return;
    try {
      localStorage.setItem(
        this._briefCacheKey(kind, id),
        JSON.stringify({ dateKey: formatLocalDate(new Date()), card }),
      );
    } catch {
      /* private mode / storage full — non-fatal */
    }
  }

  _readBriefCache(kind, id) {
    if (!id) return null;
    try {
      const raw = localStorage.getItem(this._briefCacheKey(kind, id));
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      // Only surface a card cached TODAY (browser-local), never flash
      // yesterday's brief. Matches the snapshot freshToday gate.
      if (parsed?.dateKey === formatLocalDate(new Date()) && parsed.card) {
        return parsed.card;
      }
    } catch {
      /* corrupt cache — ignore */
    }
    return null;
  }

  /** Drop every cached brief. Called on genuine sign-out (app-shell). */
  clearBriefCaches() {
    try {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('pp_brief_')) keys.push(k);
      }
      keys.forEach((k) => localStorage.removeItem(k));
    } catch {
      /* private mode — non-fatal */
    }
  }

  /**
   * Batch F — parents listen to the pending child-access request
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
      // SWR: seed this child's cached brief (today only) so it paints on
      // switch/cold-load before the snapshot resolves. Also clears any
      // previous child's card to null when there is no fresh cache.
      this.state.childDailyCard = this._readBriefCache('child', childId) || null;
      this._emit();
      this._unsubChildDaily = onSnapshot(
        collection(db, ...base, 'dailyCards'),
        (snap) => {
          // Doc id is a YYYY-MM-DD string (device-local tz). Only surface
          // TODAY's card — otherwise a stale card (e.g. Tuesday's) shows on
          // Friday with the wrong day-of-week in its title. If today's
          // hasn't been generated yet, show nothing rather than stale.
          const cards = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
          cards.sort((a, b) => String(b.id).localeCompare(String(a.id)));
          // Today-only via generatedAt (see familyDailyCards above for why
          // not the doc-id string — tz mismatch hides fresh cards).
          const latest = cards[0] ?? null;
          const genMs = latest?.generatedAt?.toMillis?.() ?? 0;
          const freshToday =
            genMs > 0 &&
            formatLocalDate(new Date(genMs)) === formatLocalDate(new Date());
          this.state.childDailyCard = freshToday ? latest : null;
          if (freshToday) this._writeBriefCache('child', childId, latest);
          this._emit();
        },
        (err) => console.warn('[Portal] dailyCards error:', err.code, err.message),
      );
    } else {
      this.state.childDailyCard = null;
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

  /**
   * STREAMING Pebble (Load-time port, 2026-05-31). Calls the new
   * `streamPebbleChatPortal` Cloud Function — same server-side context
   * build + membership gate + persistence as askPebbleAboutChild, but
   * streams the answer token-by-token so the bubble fills in live. The
   * CF persists both turns server-side; the pebbleMessages listener
   * delivers them (the caller does NOT persist). `onStatus(status)`
   * fires once when a web_search starts; `onDelta(cumulativeText)` fires
   * with the CUMULATIVE detokenized answer so far (replace, don't append
   * — sidesteps split-token edge cases). Resolves to { answer, followUps }.
   * Throws if the stream fails so the caller can fall back to
   * askPebbleAboutChild (the non-streaming path).
   */
  async streamPebbleChat(
    childId,
    question,
    history = [],
    isPrivate = false,
    sessionId = '',
    { onStatus, onDelta } = {},
  ) {
    if (!functions) throw new Error('Firebase functions not configured.');
    if (!this._ppFamilyId) throw new Error('No PebblePath family.');
    if (!childId) throw new Error('No child selected.');
    const fn = httpsCallable(functions, 'streamPebbleChatPortal');
    const { stream, data } = await fn.stream({
      familyId: this._ppFamilyId,
      childId,
      question,
      history,
      isPrivate: isPrivate === true,
      sessionId: sessionId || '',
    });
    for await (const chunk of stream) {
      if (!chunk) continue;
      if (chunk.kind === 'status' && typeof onStatus === 'function') {
        onStatus(chunk.status);
      } else if (
        chunk.kind === 'delta' &&
        typeof chunk.text === 'string' &&
        typeof onDelta === 'function'
      ) {
        onDelta(chunk.text);
      }
    }
    return await data; // { answer, followUps }
  }

  /**
   * Pebble-for-all (2026-06) — family PLANNING advisor for non-parent
   * members (and childless members). Mirrors the iOS planning fork
   * (AppState+Pebble). Calls the DEPLOYED askPebblePlanning /
   * streamPebblePlanning CFs, which admit cairnMemberIds and read NO
   * child data (the guardrail is server-side regardless of UI). Two ways
   * the planning path diverges from the child path:
   *   1. the CFs are ANSWER-ONLY (zero Firestore writes), so the Portal
   *      persists BOTH turns itself via appendPlanningMessage;
   *   2. the CFs REQUIRE a non-empty clientContext (they 400 otherwise) —
   *      there is no server-side family-context builder for planning — so
   *      the Portal assembles its own via buildPlanningContext.
   * familyId is the Cairn-resolved family (_currentFamilyId); non-parents
   * have no _ppFamilyId.
   */
  buildPlanningContext() {
    const lines = [];
    const fam = this.state.family;
    const loc = fam?.homeLocation;
    if (loc && (loc.city || loc.region || loc.country)) {
      const parts = [loc.city, loc.region, loc.country].filter(Boolean);
      if (parts.length) lines.push('Family home: ' + parts.join(', ') + '.');
    }
    const today = new Date().toISOString().slice(0, 10);
    const fmtRange = (s, e) => (e && e !== s ? s + ' to ' + e : s);

    // Trips — upcoming or ongoing, soonest first (state.trips already
    // visibleTo-filtered + start-sorted by the subscription).
    const trips = (Array.isArray(this.state.trips) ? this.state.trips : [])
      .filter((t) => t && t.title && (!t.end || String(t.end) >= today))
      .slice(0, 12);
    if (trips.length) {
      lines.push('');
      lines.push('Trips:');
      trips.forEach((t) => {
        const range = fmtRange(String(t.start ?? ''), String(t.end ?? ''));
        const ongoing =
          t.start &&
          String(t.start) <= today &&
          (!t.end || String(t.end) >= today);
        const where = t.location ? ' at ' + t.location : '';
        lines.push(
          '- ' +
            t.title +
            (range ? ' (' + range + ')' : '') +
            where +
            (ongoing ? ' [ACTIVE NOW]' : ''),
        );
      });
    }

    // Upcoming family events.
    const events = (Array.isArray(this.state.events) ? this.state.events : [])
      .filter((ev) => ev && ev.title && (!ev.date || String(ev.date) >= today))
      .sort((a, b) => String(a.date ?? '').localeCompare(String(b.date ?? '')))
      .slice(0, 15);
    if (events.length) {
      lines.push('');
      lines.push('Upcoming family events:');
      events.forEach((ev) => {
        lines.push('- ' + ev.title + (ev.date ? ' (' + ev.date + ')' : ''));
      });
    }

    // Planned standalone activities (calendar items, tripId nil).
    const acts = (Array.isArray(this.state.activities)
      ? this.state.activities
      : []
    )
      .filter((a) => a && a.title && !a.tripId && (!a.day || String(a.day) >= today))
      .sort((a, b) => String(a.day ?? '').localeCompare(String(b.day ?? '')))
      .slice(0, 15);
    if (acts.length) {
      lines.push('');
      lines.push('Planned activities:');
      acts.forEach((a) => {
        const when = [a.day, a.time].filter(Boolean).join(' ');
        lines.push('- ' + a.title + (when ? ' (' + when + ')' : ''));
      });
    }

    const ctx = lines.join('\n').trim();
    // The CFs 400 on an empty clientContext — always return something.
    return (
      ctx ||
      'This is a family-planning conversation. Help with activities, ' +
        'plans, and logistics. No child information is available.'
    );
  }

  async askPebblePlanning(question, history = []) {
    if (!functions) throw new Error('Firebase functions not configured.');
    if (!this._currentFamilyId) throw new Error('No family.');
    const fn = httpsCallable(functions, 'askPebblePlanning');
    const result = await fn({
      familyId: this._currentFamilyId,
      question,
      history,
      clientContext: this.buildPlanningContext(),
    });
    return result.data; // { answer, followUps }
  }

  async streamPebblePlanning(question, history = [], { onStatus, onDelta } = {}) {
    if (!functions) throw new Error('Firebase functions not configured.');
    if (!this._currentFamilyId) throw new Error('No family.');
    const fn = httpsCallable(functions, 'streamPebblePlanning');
    const { stream, data } = await fn.stream({
      familyId: this._currentFamilyId,
      question,
      history,
      clientContext: this.buildPlanningContext(),
    });
    for await (const chunk of stream) {
      if (!chunk) continue;
      if (chunk.kind === 'status' && typeof onStatus === 'function') {
        onStatus(chunk.status);
      } else if (
        chunk.kind === 'delta' &&
        typeof chunk.text === 'string' &&
        typeof onDelta === 'function'
      ) {
        onDelta(chunk.text);
      }
    }
    return await data; // { answer, followUps }
  }

  // Persist ONE planning turn. The CFs write nothing, so the Portal owns
  // persistence. CONCRETE Timestamp.now(), never serverTimestamp(): a
  // pending serverTimestamp reads back null and crashes the iOS
  // non-optional Date decode (feedback_firestore_servertimestamp_pending_null).
  // No sessionId / isPrivate fields (planning is a single family thread).
  async appendPlanningMessage(message) {
    if (!this._currentFamilyId) throw new Error('No family.');
    if (!this._uid) throw new Error('Not signed in.');
    // Match the iOS doc shape: the user turn carries senderUid (for
    // cross-member "X asked" attribution); the assistant turn omits it
    // (iOS leaves ChatMessage.senderUid nil for Pebble's own replies).
    const payload = {
      role: message.role,
      content: message.content,
      timestamp: Timestamp.now(),
    };
    if (message.role === 'user') payload.senderUid = this._uid;
    await addDoc(
      collection(db, 'families', this._currentFamilyId, 'pebblePlanningMessages'),
      payload,
    );
  }

  async deleteAllPlanningMessages() {
    if (!this._currentFamilyId) return;
    const snap = await getDocs(
      collection(db, 'families', this._currentFamilyId, 'pebblePlanningMessages'),
    );
    await Promise.all(snap.docs.map((d) => deleteDoc(d.ref)));
  }

  // ── Pebble quota (shared family pool) ──────────────────────────────
  // ONE 5/week pool per family, shared across iOS + Portal (both read +
  // increment the SAME family-doc counter, so a question asked on either
  // surface draws the family down on both). Mirrors iOS Family.swift
  // (pebbleQuotaShouldReset / pebbleQuestionsRemaining / pebbleWeekRollover)
  // + AppState+Pebble (the !isPremium && !bypass gate). Unlimited when the
  // signed-in user is Premium (User.isPremium, written by the iOS app on
  // entitlement change) OR a flagged beta tester (User.bypassPebbleQuota).
  // Enforcement is client-side on BOTH surfaces today (no server backstop) —
  // matching the iOS posture; server-side enforcement is a future hardening.

  _toMillis(v) {
    return v?.toDate?.()?.getTime?.() ?? (v ? new Date(v).getTime() : null);
  }

  get _pebbleUnlimited() {
    const u = this.state.user;
    return !!(u && (u.isPremium === true || u.bypassPebbleQuota === true));
  }

  _pebbleQuotaShouldReset(now = new Date()) {
    const startedMs = this._toMillis(this.state.family?.pebbleWeekStartedAt);
    if (startedMs == null) return true;
    return now.getTime() - startedMs >= 7 * 24 * 60 * 60 * 1000;
  }

  pebbleQuestionsRemaining(now = new Date()) {
    const fam = this.state.family;
    const limit =
      typeof fam?.pebbleQuestionsLimit === 'number' ? fam.pebbleQuestionsLimit : 5;
    if (this._pebbleQuotaShouldReset(now)) return limit;
    const used =
      typeof fam?.pebbleQuestionsUsed === 'number' ? fam.pebbleQuestionsUsed : 0;
    return Math.max(0, limit - used);
  }

  pebbleWeekRollover(now = new Date()) {
    const startedMs = this._toMillis(this.state.family?.pebbleWeekStartedAt);
    if (startedMs == null || this._pebbleQuotaShouldReset(now)) return null;
    return new Date(startedMs + 7 * 24 * 60 * 60 * 1000);
  }

  // The single object the Pebble UIs read (passed down as a prop so the
  // components re-render when the family counter or user flags change).
  pebbleQuota() {
    const u = this.state.user;
    const unlimited = this._pebbleUnlimited;
    const remaining = this.pebbleQuestionsRemaining();
    return {
      unlimited,
      bypassed: u?.bypassPebbleQuota === true,
      premium: u?.isPremium === true,
      limit: this.state.family?.pebbleQuestionsLimit ?? 5,
      remaining,
      atLimit: !unlimited && remaining <= 0,
      rollover: this.pebbleWeekRollover(), // Date | null
    };
  }

  // Increment the SHARED family counter after a successfully-answered
  // question. PARTIAL updateDoc (only the two quota fields) so the
  // Cairn-only-member rule branch admits it (memberIds / childViewers /
  // createdBy stay byte-identical). No-ops for Premium / bypass users
  // (they never draw the pool down, matching iOS). Atomic increment()
  // avoids a lost-update race between two co-members asking at once.
  async incrementPebbleQuota() {
    if (this._pebbleUnlimited) return;
    if (!this._currentFamilyId) return;
    const ref = doc(db, 'families', this._currentFamilyId);
    try {
      if (this._pebbleQuotaShouldReset()) {
        await updateDoc(ref, {
          pebbleQuestionsUsed: 1,
          pebbleWeekStartedAt: Timestamp.now(),
        });
      } else {
        await updateDoc(ref, { pebbleQuestionsUsed: increment(1) });
      }
    } catch (e) {
      // Non-fatal: the user already got their answer. Log + move on.
      console.warn('[Cairn] pebble quota increment failed:', e?.code, e?.message);
    }
  }

  /**
   * Close-the-loop Slice 3 (2026-05-28) — force-regenerate today's
   * family-scope brief SERVER-SIDE via the `refreshFamilyBrief`
   * callable. The CF rebuilds context from the full memory bank,
   * overwrites /familyDailyCards/{date}, and returns the card. The
   * live `_unsubFamilyDaily` listener also picks up the overwrite, so
   * we don't need to set state from the return — but we return it so
   * the caller can react (toast, optimistic render). Parent-only
   * (CF re-enforces isFamilyMember).
   */
  async refreshFamilyBrief() {
    if (!functions) throw new Error('Firebase functions not configured.');
    if (!this._ppFamilyId) throw new Error('No PebblePath family.');
    const fn = httpsCallable(functions, 'refreshFamilyBrief');
    const result = await fn({ familyId: this._ppFamilyId });
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
    this._unsubFamilyDaily?.();
    this._memUnsubs.forEach((u) => u?.());
    this._memChildUnsubs.forEach((u) => u?.());
    this._unsubIncomingReq?.();
    this._unsubPpFamily = null;
    this._unsubPpChildren = null;
    this._unsubFamilyDaily = null;
    this._memUnsubs = [];
    this._memChildUnsubs = [];
    this._memSlices = {};
    this._memFid = null;
    this._memLayers = null;
    this._memChildKey = '';
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
    this.state.familyDailyCard = null;
    this.state.pebbleAnchors = [];
    this.state.pebbleRhythms = [];
    this.state.pebblePatterns = [];
    this.state.pebbleLiveContext = [];
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
  //   • Only a parent can approve; approval adds the uid to the
  //     family's `childViewers` (a read-only tier — milestones +
  //     insights only, never memberIds / Pebble / write).
  //   • The requester can neither self-approve (rule: status update
  //     is member-only) nor self-add to childViewers (rule: the
  //     non-parent update branch forbids touching childViewers).
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

  /** P4-B — owner-private custom member label ("Grandpa", "Aunt").
   *  Stored on the OWNER's OWN user doc as a map
   *  `memberLabels.{memberUid}`. Only the owner can read/write
   *  their own user doc (the per-user rule), so it is private by
   *  construction — NO rule change, NOT a privilege grant (it
   *  changes no access, only a label the owner sees). Blank value
   *  is stored as '' and treated as "no label" on read (falls back
   *  to the default). */
  async setMemberLabel(memberUid, label) {
    if (!this._uid || !memberUid) return;
    await updateDoc(doc(db, 'users', this._uid), {
      [`memberLabels.${memberUid}`]: (label ?? '').trim(),
    });
  }

  /** parent approves: add the uid to `childViewers` (full-array
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

  /** parent declines: stamp the request only — no grant. */
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

  // ─── Phase 11 — Parent-initiated direct elevation ──────────────────
  //
  // The acting parent taps a connection in the Family Circle / manage-
  // members modal + picks a tier. Two writes mirror the approve-path
  // destinations (`childViewers` for read-only, `Child.parentIds` for
  // parent tier) — ZERO new Firestore rules. Distinction from
  // `approveChildAccess`: no prior request doc; the parent initiates
  // without one. Both writes are member/parent-only via the deployed
  // rules, independent of any request-doc state.
  //
  // Privilege-escalation guarantees live in the rules + the UI
  // eligibility filter (manage-members-modal only surfaces the
  // "Grant access" affordance for `ppIsMember` viewers on rows in the
  // extended `cairnMembers` set). See
  // docs/P11-parent-elevation-from-family-circle-plan.md.

  /** Direct grant of READ-ONLY (`childViewers`) access by an acting
   *  parent. No request doc required. Mirror of `approveChildAccess`
   *  minus the request-side update. Member-only via the deployed
   *  `/families` update rule arm. */
  async grantChildViewerDirectly(uid) {
    const fid = this._ppFamilyId;
    if (!fid || !this.state.ppIsMember) {
      throw new Error('Only a parent can grant access.');
    }
    const cur = Array.isArray(this.state.ppFamily?.childViewers)
      ? this.state.ppFamily.childViewers
      : [];
    if (cur.includes(uid)) return; // idempotent — already a viewer
    await updateDoc(doc(db, 'families', fid), {
      childViewers: [...cur, uid],
      updatedAt: serverTimestamp(),
    });
  }

  /** Direct grant of PARENT (`Child.parentIds`) access by an acting
   *  parent. Writes the uid to each of the acting parent's own
   *  children's `parentIds` arrays. The acting parent must be in
   *  `parentIds` of each child or the rule's `isChildParent` check
   *  rejects the write — we filter `state.ppChildren` to those
   *  children here as a defence-in-depth. Snapshotted at grant time
   *  (future-added children don't retroactively extend the grant —
   *  matches the iOS + P8 invariant). Returns the array of child
   *  display names that were updated, so the caller can show a toast
   *  like "Added as a parent of Felix & Luna". */
  async grantParentAccessForOwnChildren(uid) {
    const fid = this._ppFamilyId;
    if (!fid || !this.state.ppIsMember) {
      throw new Error('Only a parent can grant access.');
    }
    const myUid = this._uid;
    if (!myUid) throw new Error('Not signed in.');
    const kids = Array.isArray(this.state.ppChildren)
      ? this.state.ppChildren
      : [];
    const mine = kids.filter(
      (c) =>
        c?.id &&
        Array.isArray(c.parentIds) &&
        c.parentIds.includes(myUid),
    );
    if (mine.length === 0) return [];
    const grantedNames = [];
    for (const child of mine) {
      const cur = Array.isArray(child.parentIds) ? child.parentIds : [];
      if (cur.includes(uid)) {
        // Already a parent of this one — count it as "granted" so the
        // toast still reads sensibly across a mixed already/not state.
        grantedNames.push(child.name ?? 'your child');
        continue;
      }
      await updateDoc(doc(db, 'families', fid, 'children', child.id), {
        parentIds: [...cur, uid],
        updatedAt: serverTimestamp(),
      });
      grantedNames.push(child.name ?? 'your child');
    }
    return grantedNames;
  }

  /** parent revokes a previously-granted viewer: drop the uid
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

  // U8 (2026-06-02) — the per-trip planItems data layer (planItemsListener
  // / addPlanItem / updatePlanItem / deletePlanItem / uploadPlanAttachment)
  // was retired. The trip planner reads/writes the unified /activities
  // collection (U4) and the U7 migration moved all planItems into
  // /activities. Activity attachments use uploadActivityAttachment.

  // ── Packing lists (Phase 2.4 parity — close-the-loop Slice 6) ─────
  // Two surfaces share this layer:
  //   • per-trip list  → families/{fid}/trips/{tid}/packingList (rule:
  //     canCoplanTrip — the trip's audience co-plans it).
  //   • reusable templates → families/{fid}/packingTemplates (rule:
  //     isCairnMember). "My Packing Lists" in Settings + "Use my lists"
  //     on a trip.
  // Component-managed listeners (subscribe on mount, unsub on teardown),
  // same pattern as planItemsListener.

  /** Reusable packing templates for the whole circle. Family-level. */
  packingTemplatesListener(onChange) {
    if (!db || !this._currentFamilyId) return () => {};
    return onSnapshot(
      collection(db, 'families', this._currentFamilyId, 'packingTemplates'),
      (snap) => {
        const list = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .sort(
            (a, b) =>
              (b.updatedAt?.toMillis?.() ?? 0) - (a.updatedAt?.toMillis?.() ?? 0),
          );
        onChange(list);
      },
      (err) => {
        console.warn('[Portal] packingTemplates error:', err.code, err.message);
        onChange([]);
      },
    );
  }

  /** A single trip's working packing list. Sorted group then order. */
  packingListListener(tripId, onChange) {
    if (!db || !this._currentFamilyId || !tripId) return () => {};
    return onSnapshot(
      collection(db, 'families', this._currentFamilyId, 'trips', tripId, 'packingList'),
      (snap) => {
        const items = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .sort((a, b) => {
            const g = String(a.groupName ?? '').localeCompare(String(b.groupName ?? ''));
            if (g !== 0) return g;
            return (a.order ?? 0) - (b.order ?? 0);
          });
        onChange(items);
      },
      (err) => {
        console.warn('[Portal] packingList error:', err.code, err.message);
        onChange([]);
      },
    );
  }

  _packingListCol(tripId) {
    return collection(db, 'families', this._currentFamilyId, 'trips', tripId, 'packingList');
  }

  async addPackingItem(tripId, { groupName, text, order = 0, addedByPebble = false }) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    const trimmed = String(text ?? '').trim();
    if (!trimmed) throw new Error('Add an item.');
    const ref = await addDoc(this._packingListCol(tripId), {
      groupName,
      text: trimmed,
      checked: false,
      order,
      addedBy: uid,
      addedByPebble: addedByPebble === true,
      addedAt: serverTimestamp(),
    });
    return ref.id;
  }

  async togglePackingItem(tripId, item) {
    if (!db || !this._currentFamilyId || !item?.id) return;
    await updateDoc(doc(this._packingListCol(tripId), item.id), {
      checked: !(item.checked === true),
    });
  }

  async updatePackingItemText(tripId, itemId, text) {
    if (!db || !this._currentFamilyId || !itemId) return;
    const trimmed = String(text ?? '').trim();
    if (!trimmed) return;
    await updateDoc(doc(this._packingListCol(tripId), itemId), { text: trimmed });
  }

  async deletePackingItem(tripId, itemId) {
    if (!db || !this._currentFamilyId || !itemId) return;
    await deleteDoc(doc(this._packingListCol(tripId), itemId));
  }

  /** Copy every template item into the trip's working list (checked
   *  false), then stamp the trip's derivedFromTemplateId. Existing
   *  items are NOT cleared (the empty-state CTA only shows when empty). */
  async applyPackingTemplate(tripId, template) {
    if (!db || !this._currentFamilyId || !template?.id) return;
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    const writes = [];
    for (const group of Array.isArray(template.groups) ? template.groups : []) {
      const items = Array.isArray(group.items) ? group.items : [];
      for (const it of items.slice().sort((a, b) => (a.order ?? 0) - (b.order ?? 0))) {
        writes.push(
          addDoc(this._packingListCol(tripId), {
            templateId: template.id,
            groupName: group.name,
            text: String(it.text ?? '').trim(),
            checked: false,
            order: it.order ?? 0,
            addedBy: uid,
            addedByPebble: it.addedByPebble === true,
            addedAt: serverTimestamp(),
          }),
        );
      }
    }
    if (writes.length === 0) return;
    await Promise.all(writes);
    await updateDoc(
      doc(db, 'families', this._currentFamilyId, 'trips', tripId),
      { 'packingListMeta.derivedFromTemplateId': template.id },
    );
  }

  /** Save a trip's current items as a reusable template (grouped). */
  async savePackingListAsTemplate(name, iconKey, items) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    const byGroup = new Map();
    for (const it of Array.isArray(items) ? items : []) {
      const g = it.groupName ?? 'Parents';
      if (!byGroup.has(g)) byGroup.set(g, []);
      byGroup.get(g).push(it);
    }
    const groups = [...byGroup.entries()].map(([gname, gitems]) => ({
      id: crypto.randomUUID(),
      name: gname,
      items: gitems
        .slice()
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .map((it, i) => ({
          id: crypto.randomUUID(),
          text: String(it.text ?? '').trim(),
          order: i,
          addedByPebble: it.addedByPebble === true,
        })),
    }));
    const now = serverTimestamp();
    const ref = await addDoc(
      collection(db, 'families', this._currentFamilyId, 'packingTemplates'),
      {
        name: String(name ?? 'My list').trim() || 'My list',
        ...(iconKey ? { iconKey } : {}),
        groups,
        createdBy: uid,
        createdAt: now,
        updatedAt: now,
      },
    );
    return ref.id;
  }

  async deletePackingTemplate(templateId) {
    if (!db || !this._currentFamilyId || !templateId) return;
    await deleteDoc(
      doc(db, 'families', this._currentFamilyId, 'packingTemplates', templateId),
    );
  }

  /** Stamp lastReviewedAt after a Pebble review run. */
  async markPackingReviewed(tripId) {
    if (!db || !this._currentFamilyId || !tripId) return;
    await updateDoc(
      doc(db, 'families', this._currentFamilyId, 'trips', tripId),
      { 'packingListMeta.lastReviewedAt': serverTimestamp() },
    );
  }

  /** Calls the deployed generatePackingReview CF. Returns
   *  { additions, concerns, removals } (each [{text, groupName, reason}]). */
  async generatePackingReview(tripId, trip, family, currentList, dismissedTexts, groupNames) {
    if (!functions) throw new Error('Firebase functions not configured.');
    if (!this._currentFamilyId) throw new Error('No family yet.');
    const fn = httpsCallable(functions, 'generatePackingReview');
    const result = await fn({
      familyId: this._currentFamilyId,
      tripId,
      trip,
      family,
      currentList,
      dismissedTexts,
      groupNames,
    });
    return result.data;
  }

  // ── Weekend planner (Phase 2.5 parity — close-the-loop Slice 7) ───
  /** Calls the deployed generateFamilyPlan CF. Returns
   *  { candidates: [{title, subtitle, date, startTime, endTime,
   *  location, costEstimate, weatherSummary, perChildFit[],
   *  logisticsNotes[], aggregateScore}] } sorted by score desc. */
  async generateFamilyPlan(family, window) {
    if (!functions) throw new Error('Firebase functions not configured.');
    if (!this._currentFamilyId) throw new Error('No family yet.');
    const fn = httpsCallable(functions, 'generateFamilyPlan');
    const result = await fn({ familyId: this._currentFamilyId, family, window });
    const candidates = result?.data?.candidates;
    return Array.isArray(candidates) ? candidates : [];
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

  // ── Activity Unification — U1 (2026-06-02) ─────────────────────────
  // THE unified single-day item. Merges the old plan/activity
  // familyEvents + trip planItems into one collection:
  //   /families/{fid}/activities/{id}
  // tripId nil → standalone (family calendar); tripId set → trip planner.
  //
  // DORMANT until U2 (calendar reads) + U3 (authoring) wire the UI.
  // Shipped in U1 so the data layer mirrors iOS FamilyActivity 1-to-1.
  // Read/write gated by firestore.rules `/activities` (own visibleTo;
  // author-only update/delete on the trip-attached path).

  /**
   * Family-wide activities listener. Filters `visibleTo array-contains
   * uid` (REQUIRED — the strict read rule is query-satisfiable only with
   * this filter). Returns ALL visible activities (standalone +
   * trip-attached); consumers partition by `tripId` (calendar = nil,
   * planner = a specific trip). Sorts CLIENT-SIDE by day → time →
   * createdAt (mirrors iOS FamilyActivity.order + the planItems
   * listener), so no server orderBy + no composite index drift (P6-4
   * lesson). Component/AppShell-managed (subscribe on mount, unsub on
   * teardown), same as the trips listener.
   */
  activitiesListener(onChange) {
    if (!db || !this._currentFamilyId || !this._uid) return () => {};
    const q = query(
      collection(db, 'families', this._currentFamilyId, 'activities'),
      where('visibleTo', 'array-contains', this._uid),
    );
    return onSnapshot(
      q,
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
        console.warn('[Portal] activities subscription error:', err.code, err.message);
        onChange([]);
      },
    );
  }

  /**
   * Create or update an activity. Pass an `id` to update, omit to create.
   * Stamps `visibleTo` from the activity's own `visibility` via
   * `_visibleToFor` (lockstep with saveTrip/saveEvent). For TRIP-ATTACHED
   * activities the caller is responsible for setting `visibility` =
   * the parent trip's audience (the authoring layer in U3/U4 does this +
   * re-syncs on trip audience change); saveActivity is a generic writer.
   * Stamps an honest `addedBy == uid` on create (rule-enforced); never
   * mutates it on update (so trip-attached author-only edits hold).
   */
  async saveActivity(activity) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    const { id, createdAt, updatedAt, ...rest } = activity;
    const payload = { ...rest, updatedAt: serverTimestamp() };
    const ownerUid = rest.addedBy ?? uid; // existing author on update; this user on create
    if (rest.tripId) {
      // TRIP-ATTACHED — inherit the parent trip's materialized audience
      // (locked rule, mirrors iOS AppState.activityVisibleTo). Falls back
      // to a self-compute if the trip isn't loaded yet.
      const trip = (this.state.trips ?? []).find((t) => t.id === rest.tripId);
      payload.visibleTo =
        Array.isArray(trip?.visibleTo) && trip.visibleTo.length
          ? trip.visibleTo
          : await this._visibleToFor(rest, this.state.family, ownerUid);
    } else {
      // STANDALONE — visibility-seg-driven. Activities fold their
      // "who's going" `personIds` INTO attendees for the audience compute,
      // so "Participants" shows the activity to the tagged people (+
      // household). This DIVERGES from FamilyEvent (where personIds is
      // descriptive). The doc does NOT persist `attendees` (matches iOS
      // FamilyActivity, which has no attendees field).
      const personIds = Array.isArray(rest.personIds) ? rest.personIds : [];
      payload.visibleTo = await this._visibleToFor(
        { ...rest, attendees: personIds },
        this.state.family,
        ownerUid,
      );
    }
    if (id) {
      await updateDoc(doc(db, 'families', this._currentFamilyId, 'activities', id), payload);
      return id;
    }
    payload.addedBy = uid; // honest author tag (rule-enforced on create)
    payload.createdAt = serverTimestamp();
    const ref = await addDoc(
      collection(db, 'families', this._currentFamilyId, 'activities'),
      payload,
    );
    return ref.id;
  }

  async deleteActivity(activityId) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    await deleteDoc(doc(db, 'families', this._currentFamilyId, 'activities', activityId));
  }

  /** Raw field patch on an activity — does NOT recompute `visibleTo`
   *  (unlike saveActivity, which materializes the audience from
   *  visibility/personIds/trip). Used by the trip planner to stamp an
   *  attachment URL onto a just-created trip-attached activity WITHOUT
   *  clobbering its inherited trip audience. Mirrors updatePlanItem. */
  async updateActivity(activityId, patch) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    await updateDoc(
      doc(db, 'families', this._currentFamilyId, 'activities', activityId),
      patch,
    );
  }

  /** Upload an activity attachment (PDF / screenshot) to Storage and
   *  return its download URL. REUSES the member-gated `planAttachments`
   *  Storage path with an `activity__` segment (matching iOS
   *  StorageService.uploadActivityAttachment) — so NO new Storage rule.
   *  Path has NO extension (the wildcard rule); contentType drives
   *  serving. */
  async uploadActivityAttachment(activityId, file) {
    if (!storage || !this._currentFamilyId) {
      throw new Error('Storage unavailable.');
    }
    const path = `families/${this._currentFamilyId}/planAttachments/activity__${activityId}`;
    const r = storageRef(storage, path);
    await uploadBytes(r, file, {
      contentType: file.type || 'application/octet-stream',
    });
    return getDownloadURL(r);
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

  /**
   * Upload a trip preview image. File is whatever the <input type=file>
   * yielded (no client-side resize for simplicity — Storage caps at
   * 5MB per the rule + browser image rendering is forgiving). Returns
   * the Storage download URL, which the caller stores on the trip's
   * `previewImage` field. UUID-named so successive uploads (image
   * replacement) don't collide with stale CDN cache entries.
   */
  async uploadTripPreview(file) {
    if (!storage || !this._currentFamilyId) {
      throw new Error('Storage unavailable.');
    }
    if (!/^image\//.test(file.type || '')) {
      throw new Error('Preview image must be an image file.');
    }
    const previewId = (crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`);
    const path = `families/${this._currentFamilyId}/trip-previews/${previewId}`;
    const ref = storageRef(storage, path);
    await uploadBytes(ref, file, { contentType: file.type });
    return await getDownloadURL(ref);
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
   *  source:'school-import'. Defaults (2026-05-31, Thomas): type
   *  'custom' (shows as "Other" in the editor), visibility 'family'
   *  (parents/household only, NOT the extended ring), and recurring
   *  false (a dated schedule, not an annual event).
   *
   *  `opts.category` ('plan' | 'activity' | 'celebration', default
   *  'plan') drives the calendar bucket + keeps them OUT of the
   *  Celebrations feed unless the user explicitly chose celebration.
   *  `opts.tag` is an optional custom calendar tag (e.g. "Daycare 2026
   *  schedule") stamped on every imported row as `calTag`. */
  async importSchoolEvents(list, opts = {}) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    const fam = this.state.family ?? {};
    const memberIds = Array.isArray(fam.memberIds) ? fam.memberIds : [];
    const cairnIds = Array.isArray(fam.cairnMemberIds)
      ? fam.cairnMemberIds
      : [];
    const personIds = [...new Set([...memberIds, ...cairnIds, uid])];
    // Parents/household only by default (not the extended ring).
    const visibleTo = computeVisibleTo('family', fam, uid);
    // U7 7-A — only 'celebration' still writes a familyEvent; everything
    // else writes the unified /activities collection (standalone, all-day),
    // freezing the legacy plan/activity event source for the migration.
    const isCelebration = opts.category === 'celebration';
    const calTag = String(opts.tag ?? '').trim().slice(0, 60);
    const eventsCol = collection(db, 'families', this._currentFamilyId, 'familyEvents');
    const activitiesCol = collection(db, 'families', this._currentFamilyId, 'activities');
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
        // 4-5 sentence description the extractor pulled from the doc
        // → the notes (shown in the iOS quick-view + editor).
        const notes = String(e.description ?? '').trim().slice(0, 1000);
        if (isCelebration) {
          await addDoc(eventsCol, {
            title: String(e.title).trim().slice(0, 120),
            date: e.date,
            type: 'custom', // shows as "Other" in the event editor
            recurring: false, // a dated schedule, not an annual event
            category: 'celebration',
            ...(calTag ? { calTag } : {}),
            ...(notes ? { notes } : {}),
            source: 'school-import',
            personIds,
            visibility: 'family', // parents/household only
            visibleTo,
            createdBy: uid,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          });
        } else {
          // Standalone, all-day activity. NO personIds (household audience
          // via the directly-set `visibleTo`; the attendee-fold would
          // widen it). No tripId key → standalone.
          await addDoc(activitiesCol, {
            title: String(e.title).trim().slice(0, 120),
            type: 'note',
            day: e.date,
            ...(notes ? { notes } : {}),
            ...(calTag ? { calTag } : {}),
            source: 'school-import',
            visibility: 'family',
            visibleTo,
            addedBy: uid, // honest author tag (rule-enforced on create)
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          });
        }
        n += 1;
      }),
    );
    return n;
  }

  /** Rename a custom calendar tag across every visible event that
   *  carries it. Operates on the already-loaded `state.events` (the
   *  listener filtered them to visibleTo) + updateDoc by id, so there's
   *  no Firestore query (the content-conditional read rule would reject
   *  a bare calTag query) and no composite index. Any cairn member may
   *  write familyEvents (rules), so this works regardless of who
   *  created each event. Returns the number of events updated. */
  async renameCalTag(oldTag, newTag) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const from = String(oldTag ?? '').trim();
    const to = String(newTag ?? '').trim().slice(0, 60);
    if (!from || !to || from === to) return 0;
    return this._applyTagWrite(from, { calTag: to, updatedAt: serverTimestamp() });
  }

  /** Remove a custom calendar tag: the items STAY on the calendar,
   *  they just lose this tag. `calTag` is set to null (untagged on iOS
   *  + Portal — both treat null/absent as no tag). Same loaded-state +
   *  updateDoc-by-id approach as renameCalTag (no query, no index).
   *  Returns the number of items untagged. */
  async deleteCalTag(tag) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const t = String(tag ?? '').trim();
    if (!t) return 0;
    return this._applyTagWrite(t, { calTag: null, updatedAt: serverTimestamp() });
  }

  /** Apply a calTag patch across BOTH /familyEvents AND /activities for
   *  every already-loaded doc carrying `from` as its tag. Post-U2 most
   *  tagged items live in /activities, so the original events-only loop
   *  matched 0 of them — the "Renamed tag ... on 0 events" no-op bug
   *  (2026-06-04). Operates on already-loaded state + updateDoc-by-id
   *  (the listener filtered to visibleTo; a bare calTag query would be
   *  rejected by the content-conditional read rule + need a composite
   *  index). Any cairn member may write both collections. Returns the
   *  total number of docs written. */
  async _applyTagWrite(from, patch) {
    const targets = [];
    for (const e of this.state.events ?? []) {
      if (e?.id && String(e?.calTag ?? '').trim() === from) {
        targets.push(['familyEvents', e.id]);
      }
    }
    for (const a of this.state.activities ?? []) {
      if (a?.id && String(a?.calTag ?? '').trim() === from) {
        targets.push(['activities', a.id]);
      }
    }
    await Promise.all(
      targets.map(([col, id]) =>
        updateDoc(doc(db, 'families', this._currentFamilyId, col, id), patch),
      ),
    );
    return targets.length;
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

  // `lookupFlight` (Phase 4) removed 2026-05-20 — aviationstack's
  // free-tier coverage was too patchy. The CF stays deployed but
  // no client invokes it (callable inert). Trip-form's flight
  // section is manual entry only. Re-add this wrapper when/if a
  // paid aviation API replaces aviationstack.

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
   * doesn't yet have child-edit settings). Only parents can
   * write per the existing `/children/` rules.
   */
  async updateChildBirthday(childId, dateOfBirth) {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    await updateDoc(doc(db, 'families', this._currentFamilyId, 'children', childId), {
      dateOfBirth,
      updatedAt: serverTimestamp(),
    });
  }

  // Gate C (2026-06-09): the dead `findFamilyByCairnCode` (zero callers —
  // superseded by `findFamilyByConnectCode` in 2C-4e) was DELETED here so
  // it can't become a landmine once `/families` `list` closes at gate D.

  /**
   * THE unified connect-code resolver — web twin of iOS
   * `FirestoreService.resolveConnectCode` (kept in LOCKSTEP).
   *
   * Gate C (2026-06-09): mapping-first. Resolves `/inviteCodes/{CODE}`
   * by exact doc id (a `get` — `list` on that collection is denied), and
   * trusts its `familyId` because the mapping's CREATE rule proved the
   * code belonged to that family. The mapping-built result carries ONLY
   * {id, name, expiry} — a NON-member can't `get` `/families/{id}`
   * pre-join (member-only rule), so consumers must treat member arrays /
   * memberProfiles as absent (`_viaMapping: true` marks this shape;
   * `_applyCairnJoin` probes a direct get, the preview hides counts).
   *
   * Falls back to the legacy open `/families` dual-accept list query
   * (cairn field first, then legacy PP `inviteCode`) while that list is
   * still open; after gate D flips it to members-only the fallback's
   * rules-denial is swallowed to "not found" (the mapping is the only
   * path by then — the gate-B backfill guarantees coverage).
   *
   * Returns the family-shaped object augmented with `_matchedCodeKind`
   * ('cairn' | 'pp') so the redeem path validates the matching expiry
   * field; the mapping shape stores its expiry under
   * `cairnInviteCodeExpiresAt` + kind 'cairn' so that same validation
   * path reads it unchanged. Null on no match.
   *
   * Callers: `join-family-screen._lookup` (pre-join preview),
   * `home-screen` "Join another family" (P9), `redeemConnectCode`.
   */
  async findFamilyByConnectCode(code) {
    if (!db) throw new Error('Firebase not configured.');

    // 1. The /inviteCodes lookup — get-by-exact-id; you must already KNOW
    //    the code (no enumeration surface). Codes are stored uppercase;
    //    normalize so a lowercase-typed code still resolves (the legacy
    //    query below was always case-sensitive-exact).
    const norm = String(code ?? '').trim().toUpperCase();
    if (norm) {
      try {
        const { getDoc } = await import('firebase/firestore');
        const snap = await getDoc(doc(db, 'inviteCodes', norm));
        if (snap.exists() && typeof snap.data()?.familyId === 'string') {
          const m = snap.data();
          console.debug('[ConnectCode] resolved via /inviteCodes mapping →', m.familyId);
          return {
            id: m.familyId,
            name: m.familyName ?? '',
            cairnInviteCodeExpiresAt: m.expiresAt ?? null,
            _matchedCodeKind: 'cairn',
            _viaMapping: true,
          };
        }
      } catch (e) {
        // Transient read error — fall through to the legacy query.
        console.debug('[ConnectCode] mapping lookup errored, trying legacy:', e?.code);
      }
    }

    // 2. Legacy fallback — the open /families list query. Kept as the net
    //    while gate C bakes; rules-denied after gate D (→ "not found").
    try {
      const cairnSnap = await getDocs(
        query(collection(db, 'families'), where('cairnInviteCode', '==', code)),
      );
      if (!cairnSnap.empty) {
        const d = cairnSnap.docs[0];
        console.debug('[ConnectCode] resolved via LEGACY list query (cairn field)');
        return { id: d.id, ...d.data(), _matchedCodeKind: 'cairn' };
      }
      const ppSnap = await getDocs(
        query(collection(db, 'families'), where('inviteCode', '==', code)),
      );
      if (!ppSnap.empty) {
        const d = ppSnap.docs[0];
        console.debug('[ConnectCode] resolved via LEGACY list query (pp field)');
        return { id: d.id, ...d.data(), _matchedCodeKind: 'pp' };
      }
    } catch (e) {
      // Post-gate-D the list query is rules-denied — report as no-match
      // rather than surfacing a raw permissions error.
      console.debug('[ConnectCode] legacy fallback denied (expected post-gate-D):', e?.code);
      return null;
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
    const authUser = auth.currentUser;

    // Gate C (2026-06-09): a mapping-resolved family (`_viaMapping`)
    // carries NO member arrays — a non-member can't read `/families`
    // pre-join. Probe a direct get: the family-doc `get` rule is
    // member-only, so a SUCCESSFUL read proves "already a member" (and
    // hands us live arrays for the checks below), while a denial means
    // the normal join case — where the server rule, not the client, is
    // the enforcer. Legacy (list-resolved) families arrive with real
    // arrays and skip the probe.
    let live = family;
    if (family._viaMapping) {
      try {
        const { getDoc } = await import('firebase/firestore');
        const snap = await getDoc(doc(db, 'families', family.id));
        live = snap.exists() ? { id: snap.id, ...snap.data() } : null;
      } catch {
        live = null; // not a member yet — blind join below
      }
    }
    const beforeCairn = live?.cairnMemberIds ?? [];
    const memberIds = live?.memberIds ?? [];

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

    // Friendly cap pre-check — only when we could read live data (the
    // blind path defers to the rule, which enforces the cap regardless).
    if (live) {
      const cap = live.cairnMaxMembers ?? 20;
      if (beforeCairn.length >= cap) {
        const err = new Error('This family\'s connection ring is full.');
        err.code = 'full';
        throw err;
      }
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
    // Gate C: `arrayUnion` (was a full-array write computed from a
    // pre-join read) — blind-safe: needs no pre-read and can never
    // clobber existing members, which a stale/empty `beforeCairn`
    // would have done on the mapping path.
    try {
      const { arrayUnion } = await import('firebase/firestore');
      await updateDoc(doc(db, 'families', family.id), {
        cairnMemberIds: arrayUnion(uid),
        [`memberProfiles.${uid}`]: profile,
        updatedAt: serverTimestamp(),
      });
    } catch (e) {
      // On the blind (mapping) path the server rule is the enforcer — a
      // permission-denied means it rejected the join (ring at capacity,
      // raced already-member, or a stale mapping for a rotated code).
      // Translate to an honest, friendly message (iOS twin: joinRejected).
      if (e?.code === 'permission-denied') {
        const err = new Error(
          "Couldn't join this family. The code may have been replaced, or the family's circle is full. Ask them for a fresh invite.",
        );
        err.code = 'join-rejected';
        throw err;
      }
      throw e;
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
   * Familyless / non-parent redeemer (no own family doc yet) → skipped;
   * deferred to 2C account/family unification (consistent with the
   * "build on CAIRN now, unify in 2C" sequencing).
   */
  async _recordMutualConnection(hostFamilyId, uid) {
    try {
      const { getDoc, arrayUnion } = await import('firebase/firestore');
      const meSnap = await getDoc(doc(db, 'users', uid));
      const myFamilyId = meSnap.exists() ? meSnap.data()?.familyId : null;
      // No own family yet (non-parent / familyless) → defer to 2C.
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
   * Scope guard: refuses to remove a parent (anyone in
   * `memberIds`). Removing a co-parent is an account-level action,
   * not a "manage the ring" action — and the firestore.rules keep
   * `createdBy` immutable regardless. Caller must be a parent
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
      throw new Error('parents can’t be removed from the ring here.');
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
   * non-parent family creation — used by the onboarding wizard when a
   * brand-new signed-in user picks "Start a new family" without an
   * invite code. Writes a family doc tagged `createdInApp: 'cairn'`
   * with the viewer in `cairnMemberIds` (NOT `memberIds`, since PP's
   * /children/ + /milestones/ flows shouldn't activate for a non-parent
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
      // No parentIds — this is a non-parent household.
      // memberIds is intentionally an empty array so PP-side queries
      // (children, milestones) treat this family as "no parents
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

    // Gate C (2026-06-09) — write the code → family lookup mapping so
    // joining resolves via /inviteCodes once /families `list` closes
    // (gate D). The family is server-committed by the awaited addDoc
    // above, so the mapping's CREATE rule (code must equal the family's
    // real code) passes. Best-effort: a miss is healed by the
    // backfill-invite-codes.mjs script (re-run before gate D).
    try {
      await setDoc(doc(db, 'inviteCodes', code), {
        familyId: ref.id,
        familyName: name,
        expiresAt,
        createdAt: serverTimestamp(),
      });
    } catch (e) {
      console.warn('[Cairn] invite-code mapping write failed (backfill heals):', e?.code);
    }

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
   * Flat-family model Phase 3 P3-5 (2026-05-19) — Slice P3-5a.
   * THE web parity twin of iOS `FirestoreService.createFamily`.
   * UNWIRED in P3-5a (no caller yet) → behaviour-neutral, safe to
   * ship before any deploy (the 2C-1 discipline). P3-5b wires it
   * into the onboarding-wizard's "Yes, I have children" branch.
   *
   * C-i (Thomas, AskUserQuestion 2026-05-19): when a web user
   * answers "I have children" their new family is created
   * PP-style — the creator goes into `memberIds` (NOT
   * `createCairnOnlyFamily`'s empty `memberIds`) so they can
   * author children (the deployed `/children` CREATE rule is
   * `isFamilyMember` = uid ∈ memberIds). `createCairnOnlyFamily`
   * is untouched and stays the "no children / family-coordinator"
   * path.
   *
   * NON-ESCALATION (the validated 2C-3 Proof-A structural
   * argument): this writes a BRAND-NEW family doc where the
   * caller is `createdBy` AND the sole `memberIds` entry. The
   * family has no other members and no pre-existing children, so
   * self-promotion to `memberIds` here grants access to NOTHING
   * that existed before. The deployed `/families` CREATE rule's
   * PP branch independently enforces exactly this
   * (`memberIds == [uid] && createdBy == uid`; no `createdInApp`
   * required) — a stale/raced UI cannot widen it. ZERO rules
   * change (verified). Field set mirrors `createCairnOnlyFamily`
   * EXACTLY except: (a) `memberIds: [uid]` not `[]`, (b) no
   * `createdInApp: 'cairn'` (this is the PP path; `createdInApp`
   * is telemetry per 2C-3 — we don't mislabel), (c) the iOS 2C-2
   * dual code write (`inviteCode` + `cairnInviteCode`, same
   * 6-char string, 30-day) so BOTH the unified and legacy lookup
   * paths resolve it, (d) the user doc gets `familyId` + owner
   * role (NOT `cairnFamilyId`).
   */
  async createPebblePathFamily(familyName) {
    if (!db) throw new Error('Firebase not configured.');
    const authUser = auth?.currentUser;
    const uid = authUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    const name = (familyName ?? '').trim();
    if (!name) throw new Error('Family name is required.');

    const now = new Date();
    // 2C-2 unified 6-char connect code (the SAME helper
    // createCairnOnlyFamily uses — no CAIRN- prefix).
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
      // C-i: the creator IS a parent (the only diff vs
      // createCairnOnlyFamily that matters for child authoring).
      memberIds: [uid],
      // Also a first-class flat-ring member of their own family so
      // the Portal connections model is consistent (harmless: the
      // PP CREATE rule branch only constrains memberIds; isCairn-
      // Member already ORs memberIds in regardless).
      cairnMemberIds: [uid],
      connectedFamilyIds: [],
      cairnMaxMembers: 20,
      // iOS 2C-2 dual-write so the one shared code resolves via
      // BOTH the unified (cairnInviteCode) and legacy (inviteCode)
      // lookup paths, 30-day on both.
      inviteCode: code,
      inviteCodeExpiresAt: expiresAt,
      cairnInviteCode: code,
      cairnInviteCodeExpiresAt: expiresAt,
      memberProfiles: { [uid]: profile },
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const ref = await addDoc(collection(db, 'families'), familyDoc);

    // Gate C (2026-06-09) — invite-code lookup mapping; see
    // createCairnOnlyFamily for the full rationale. Best-effort.
    try {
      await setDoc(doc(db, 'inviteCodes', code), {
        familyId: ref.id,
        familyName: name,
        expiresAt,
        createdAt: serverTimestamp(),
      });
    } catch (e) {
      console.warn('[Cairn] invite-code mapping write failed (backfill heals):', e?.code);
    }

    // Upsert user doc — PP path: `familyId` (NOT `cairnFamilyId`)
    // + owner role, mirroring iOS createFamily's user-doc update.
    await setDoc(
      doc(db, 'users', uid),
      {
        email: authUser.email ?? '',
        displayName: authUser.displayName ?? '',
        profilePhotoURL: authUser.photoURL ?? null,
        familyId: ref.id,
        role: 'owner',
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
   * Flat-family model Phase 3 P3-5 (2026-05-19) — Slice P3-5a.
   * Web parity twin of iOS `FirestoreService.createChild` +
   * `AppState.addChild`'s `parentIds` stamp. UNWIRED in P3-5a →
   * behaviour-neutral. P3-5b wires it after
   * `createPebblePathFamily` on the "I have children" branch.
   *
   * `parentIds := family.memberIds` is the Phase-1 model (iOS
   * `AppState.addChild`: `draft.parentIds = currentFamily
   * .memberIds`). The deployed `/children` CREATE rule is
   * `isFamilyMember(familyId)` (uid ∈ memberIds) — satisfied
   * because the caller just created a PP family with themselves
   * in `memberIds` (C-i). ZERO rules change.
   *
   * β SAFETY-NET DISCRIMINATOR (Thomas, AskUserQuestion
   * 2026-05-19): the child doc is stamped `needsServerSeed: true`.
   * The P3-5d Cloud Function `onChildCreated` seeds milestones
   * ONLY for docs carrying this flag, then clears it (idempotent).
   * iOS `createChild` never sets the flag and keeps its
   * synchronous client-seed BYTE-UNCHANGED — so the CF never
   * touches an iOS-created child (zero regression to the shipped,
   * dogfooded iOS path) and there is no create-race: the
   * discriminator is explicit, not timing-based.
   *
   * @param {string} familyId  the PP family (creator in memberIds)
   * @param {{name:string,dateOfBirth:Date,developmentalFlags?:string[],region?:string}} childData
   * @returns {Promise<string>} the new child doc id
   */
  async createChild(familyId, childData) {
    if (!db) throw new Error('Firebase not configured.');
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    if (!familyId) throw new Error('No family.');
    const name = (childData?.name ?? '').trim();
    if (!name) throw new Error("Child's name is required.");
    if (!(childData?.dateOfBirth instanceof Date)) {
      throw new Error("Child's date of birth is required.");
    }

    // parentIds := the family's current memberIds (Phase-1 model).
    // Read fresh via the dynamic-import getDoc pattern used by
    // _recordMutualConnection (getDoc is not in the top imports).
    const { getDoc } = await import('firebase/firestore');
    const famSnap = await getDoc(doc(db, 'families', familyId));
    const memberIds = famSnap.exists()
      ? (Array.isArray(famSnap.data()?.memberIds) ? famSnap.data().memberIds : [])
      : [];
    // Defensive: the caller (creator) must be a member; if the
    // read somehow missed, fall back to [uid] so parentIds is
    // never empty for the creating parent.
    const parentIds = memberIds.length ? memberIds : [uid];

    const childDoc = {
      name,
      dateOfBirth: childData.dateOfBirth,
      profilePhotoURL: null,
      developmentalFlags: Array.isArray(childData?.developmentalFlags)
        ? childData.developmentalFlags
        : [],
      pediatricianNotes: null,
      region: childData?.region ?? null,
      parentIds,
      // β safety-net discriminator — see the doc comment above.
      needsServerSeed: true,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const ref = await addDoc(
      collection(db, 'families', familyId, 'children'),
      childDoc,
    );
    return ref.id;
  }

  /**
   * Upload a child's avatar to the Build-14 cross-device Storage path
   * `families/{familyId}/avatars/children/{childId}` (no extension —
   * contentType metadata drives serving) and stamp the resulting
   * download URL onto the child doc's `profilePhotoURL`. Mirrors the
   * user-avatar pattern in profile-sheet.js so a photo set during web
   * onboarding flows to iOS (which reads child `profilePhotoURL`) and
   * back via the data.js Storage fallback (≈L731).
   *
   * Deployed Storage rule already admits this write
   * (`/avatars/children/{childId}` allow write: isFamilyMember +
   * <5 MB + image/*) — the onboarding "Yes, add a child" creator is
   * in memberIds. ZERO rules change. Best-effort by design: the
   * caller treats a failure as non-fatal (the family + child are
   * already created; the photo can be set later in the app).
   *
   * @param {string} familyId
   * @param {string} childId
   * @param {Blob|File} blob  already-processed image (≤5 MB, image/*)
   * @returns {Promise<string>} the download URL
   */
  async uploadChildAvatar(familyId, childId, blob) {
    if (!db || !storage) throw new Error('Firebase not configured.');
    if (!familyId || !childId) throw new Error('Missing family/child id.');
    if (!blob) throw new Error('No image.');
    const contentType =
      blob.type && blob.type.startsWith('image/') ? blob.type : 'image/jpeg';
    const ref = storageRef(
      storage,
      `families/${familyId}/avatars/children/${childId}`,
    );
    await uploadBytes(ref, blob, { contentType });
    const url = await getDownloadURL(ref);
    await updateDoc(doc(db, 'families', familyId, 'children', childId), {
      profilePhotoURL: url,
      updatedAt: serverTimestamp(),
    });
    return url;
  }

  /**
   * Upload the signed-in user's avatar to the Build-14 path
   * `families/{familyId}/avatars/users/{uid}` + stamp
   * `users/{uid}.profilePhotoURL` + mirror into
   * `family.memberProfiles.{uid}` (co-parents/extended family read
   * profiles off the family doc, not /users/{uid}). Byte-identical
   * to profile-sheet.js's user-avatar logic — factored here so the
   * onboarding wizard can set the parent photo as soon as the family
   * exists (the user-avatar Storage rule requires family membership,
   * so this can only run post-family-create). iOS reads
   * users/{uid}.profilePhotoURL → the photo syncs cross-platform.
   * ZERO rules change (the deployed user-avatar write rule already
   * admits own-uid + isCairnMember). Best-effort: callers treat a
   * failure as non-fatal.
   *
   * @param {string} familyId
   * @param {Blob|File} blob  already-processed image (≤5 MB, image/*)
   * @returns {Promise<string>} the download URL
   */
  async uploadUserAvatar(familyId, blob) {
    if (!db || !storage) throw new Error('Firebase not configured.');
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    if (!familyId) throw new Error('No family.');
    if (!blob) throw new Error('No image.');
    const contentType =
      blob.type && blob.type.startsWith('image/') ? blob.type : 'image/jpeg';
    const ref = storageRef(storage, `families/${familyId}/avatars/users/${uid}`);
    await uploadBytes(ref, blob, { contentType });
    const url = await getDownloadURL(ref);
    await updateDoc(doc(db, 'users', uid), {
      profilePhotoURL: url,
      updatedAt: serverTimestamp(),
    });
    try {
      await updateDoc(doc(db, 'families', familyId), {
        [`memberProfiles.${uid}.profilePhotoURL`]: url,
        [`memberProfiles.${uid}.updatedAt`]: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } catch (famErr) {
      console.warn('memberProfiles photo fan-out failed:', famErr);
    }
    return url;
  }

  /**
   * Flat-family model Phase 3 P3-5 (2026-05-19) — Slice P3-5a.
   * Web parity twin of iOS `AppState.requestToBeCoParent` /
   * `FirestoreService.createCoParentRequest` — the deferred web
   * parent-prompt (P3-INHERITED from the 2C-4e deferral). UNWIRED
   * in P3-5a → behaviour-neutral. P3-5c wires it into
   * `join-family-screen`'s post-join "are you a parent of a child
   * here?" step.
   *
   * Files a 2A `coParentRequests/{uid}` claim (status 'pending').
   * The claim GRANTS NOTHING — an existing parent of THIS child
   * must confirm it (the 2A approve flow), and the deployed
   * `coParentRequests` CREATE rule independently enforces
   * `uid == reqUid && isCairnMember(fid) && !isChildParent &&
   * status == 'pending'`. ZERO rules change (the rule shipped
   * with iOS 2A and already admits this web cairn-member write).
   * Doc shape mirrors iOS `createCoParentRequest` byte-for-byte
   * (doc id == uid; uid / displayName / status / requestedAt).
   *
   * @param {string} childId  a child in the joined (cairn) family
   */
  async requestToBeCoParent(childId) {
    if (!db) throw new Error('Firebase not configured.');
    const uid = auth?.currentUser?.uid;
    if (!uid) throw new Error('Not signed in.');
    // The joined family the redeemer is a flat (cairn) member of.
    const familyId =
      this._currentFamilyId ??
      this.state.user?.cairnFamilyId ??
      this.state.user?.familyId ??
      null;
    if (!familyId) throw new Error('No family.');
    if (!childId) throw new Error('No child.');
    const displayName =
      this.state.user?.displayName ??
      auth?.currentUser?.displayName ??
      '';

    await setDoc(
      doc(
        db,
        'families',
        familyId,
        'children',
        childId,
        'coParentRequests',
        uid,
      ),
      {
        uid,
        displayName,
        status: 'pending',
        requestedAt: serverTimestamp(),
      },
    );
  }

  /**
   * Flat-family model Phase 3 P3-5 (2026-05-19) — Slice P3-5c.
   * One-shot read of the children in a (joined) family, for the
   * `join-family-screen` post-join parent-prompt. Web parity twin
   * of iOS `AppState.fetchCairnChildren`. Read-only, no listener.
   *
   * The deployed `/children` DOC read rule is `isCairnMember`, so a
   * fresh connect-code redeemer (now in `cairnMemberIds`) may read
   * the child docs — name/DOB/photo ONLY; their per-child
   * dev/health subcollections stay `isChildParent` and 0-result.
   * Best-effort: a failed/denied read returns [] so the prompt
   * just doesn't show (the join still succeeds). NOT
   * privilege-sensitive (a read; grants nothing).
   */
  async fetchFamilyChildren(familyId) {
    if (!db || !familyId) return [];
    try {
      const snap = await getDocs(
        collection(db, 'families', familyId, 'children'),
      );
      return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (e) {
      console.warn('[parent-prompt] fetchFamilyChildren skipped (non-fatal):', e);
      return [];
    }
  }

  /**
   * Phase 3A: generate or regenerate the Cairn invite code. Caller must be
   * a parent (rules enforce). 30-day expiry — extended-family invites
   * move on human time, not the 7-day co-parent timeline.
   */
  async regenerateCairnInviteCode() {
    if (!db || !this._currentFamilyId) throw new Error('No family yet.');
    const code = newCairnInviteCode();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    // Gate C (2026-06-09) — mapping bookkeeping, fail-closed order: retire
    // the OLD cairn code's mapping BEFORE the family update, so a mid-way
    // failure leaves an UNMAPPED code (joining fails until retry/backfill)
    // — never a stale mapping that still resolves a retired code. The old
    // mapping is KEPT when that same code still lives in the legacy PP
    // `inviteCode` field (Portal regen rotates only `cairnInviteCode`),
    // because the code remains genuinely redeemable through it.
    const fam = this.state.family;
    const oldCairn = String(fam?.cairnInviteCode ?? '').toUpperCase();
    const ppCode = String(fam?.inviteCode ?? '').toUpperCase();
    if (oldCairn && oldCairn !== ppCode && oldCairn !== code) {
      try {
        await deleteDoc(doc(db, 'inviteCodes', oldCairn));
      } catch (e) {
        console.warn('[Cairn] stale invite-code mapping delete failed:', e?.code);
      }
    }

    await updateDoc(doc(db, 'families', this._currentFamilyId), {
      cairnInviteCode: code,
      cairnInviteCodeExpiresAt: expiresAt,
      updatedAt: serverTimestamp(),
    });

    // New code is committed above → its mapping CREATE rule passes.
    try {
      await setDoc(doc(db, 'inviteCodes', code), {
        familyId: this._currentFamilyId,
        familyName: fam?.name ?? '',
        expiresAt,
        createdAt: serverTimestamp(),
      });
    } catch (e) {
      console.warn('[Cairn] invite-code mapping write failed (backfill heals):', e?.code);
    }

    return { code, expiresAt };
  }

  /**
   * One-shot silent migration to the unified 6-char invite-code
   * format. Phase 2C Slice 2 (2026-05-18) collapsed the old
   * `CAIRN-XXXX` prefix into a flat 6-char code; the resolver still
   * accepts both, but families created before that date still hold a
   * prefixed code in their `cairnInviteCode` field. This regenerates
   * it on next family-doc load so existing parents see the new
   * format without having to hit Regenerate themselves.
   *
   * Guard rails:
   *   - Memoised via `_inviteCodeMigratedFamilyId` so it fires at most
   *     once per session per family (the family-doc snapshot fires on
   *     every change).
   *   - Only the parent (in memberIds) can write to the family doc;
   *     non-parent viewers no-op silently to keep PERMISSION_DENIED
   *     out of the console.
   *   - Best-effort: any write failure swallows back to a console
   *     log — no toast, no surfacing. The old code still works.
   */
  _maybeMigrateInviteCodeFormat() {
    const fam = this.state.family;
    if (!fam || !this._uid) return;
    if (this._inviteCodeMigratedFamilyId === fam.id) return;
    const code = fam.cairnInviteCode;
    if (!code || typeof code !== 'string') return;
    // New-format codes are exactly 6 chars with no separator. Anything
    // containing a hyphen is the deprecated `CAIRN-XXXX` shape.
    if (!code.includes('-')) {
      this._inviteCodeMigratedFamilyId = fam.id;
      return;
    }
    const memberIds = Array.isArray(fam.memberIds) ? fam.memberIds : [];
    if (!memberIds.includes(this._uid)) return; // non-parent — no write permission
    this._inviteCodeMigratedFamilyId = fam.id; // memo BEFORE await so we don't double-fire
    this.regenerateCairnInviteCode().catch((e) => {
      // Drop the memo so a subsequent family-doc tick can retry once.
      // (Permission errors / rules tightening are the only realistic
      // failures; both are non-recoverable from the client, so silently
      // accept and leave the legacy code in place.)
      console.debug('invite-code format migration deferred:', e?.code ?? e?.message ?? e);
    });
  }

  stop() {
    this._unsubUser?.();
    this._unsubFamily?.();
    this._unsubChildren?.();
    this._unsubTrips?.();
    this._unsubEvents?.();
    this._unsubActivities?.();
    this._unsubPlanning?.();
    this._unsubUser =
      this._unsubFamily =
      this._unsubChildren =
      this._unsubTrips =
      this._unsubEvents =
      this._unsubActivities =
      this._unsubPlanning =
        null;
    this._teardownPpFamily();
    this._uid = null;
    this._currentFamilyId = null;
    this._inviteCodeMigratedFamilyId = null;
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
      familyDailyCard: null,
      pebbleAnchors: [],
      pebbleRhythms: [],
      pebblePatterns: [],
      pebbleLiveContext: [],
      childPebbleMessages: [],
      childPebbleSessions: [],
      planningMessages: [],
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
 * Connection-ring members — anyone in `cairnMemberIds` but NOT in
 * `memberIds` (co-parents) and NOT the viewer themself. Falls back to
 * empty when the family hasn't been migrated yet.
 *
 * Terminology: every account is the same kind of account. The only
 * differentiator is whether the viewer is a *parent* of a child in
 * this family — i.e. whether `uid` is in `family.memberIds`.
 *
 * Viewer perspective:
 *   - Parent (uid in memberIds): My Connections = cairn ring minus
 *     self minus co-parents (those render in My Family via
 *     deriveImmediateMembers).
 *   - Non-parent (the viewer is a connection — e.g. a grandparent):
 *     My Connections = every OTHER human member of the family they're
 *     connected to — co-parents (from memberIds) AND other non-parent
 *     members (from cairnMemberIds), unioned and minus self. Children
 *     are NOT surfaced (they stay private to parents — a non-parent
 *     viewer never sees a child's name/photo through this derivation,
 *     regardless of what Firestore happens to return on the wire).
 *
 * `children` is threaded through so "co-parent" identity is keyed off
 * real `Child.parentIds` (mirrors iOS SettingsFamilyView), with a
 * `memberIds` fallback for a non-parent viewer who can't read the
 * children docs (see `isCoParentInChildren`).
 */
// C.1 (Portal parity, 2026) — someone is a "co-parent" only when their
// uid sits in some `Child.parentIds`, mirroring iOS
// SettingsFamilyView:224. A member who is in memberIds but parents no
// child (childless household, or data drift) is a plain member, NOT a
// co-parent. Children may be empty (non-parent viewer); callers fall
// back to a memberIds check in that case.
function isCoParentInChildren(uid, children) {
  return (
    Array.isArray(children) &&
    children.some(
      (c) => Array.isArray(c?.parentIds) && c.parentIds.includes(uid),
    )
  );
}

export function deriveExtendedMembers(uid, family, children = []) {
  if (!family) return [];
  const memberIds = family.memberIds ?? [];
  const cairnIds = family.cairnMemberIds ?? family.memberIds ?? [];
  const profiles = family.memberProfiles ?? {};
  const isParent = memberIds.includes(uid);
  // Non-parent viewers need the co-parents folded in — they sit in
  // memberIds, NOT cairnMemberIds (parents never go through the
  // connection join path). Union so co-parents surface for a
  // grandparent / friend / sibling.
  const ringIds = isParent
    ? cairnIds
    : Array.from(new Set([...cairnIds, ...memberIds]));
  const out = [];
  let hue = 280;
  for (const otherUid of ringIds) {
    if (otherUid === uid) continue;
    // Parent viewer: skip their own co-parents (already in My Family).
    // Non-parent viewer: keep them — they're the parents the viewer is
    // connected to.
    if (isParent && memberIds.includes(otherUid)) continue;
    const profile = profiles[otherUid];
    const url = profile?.profilePhotoURL;
    // Co-parent identity keyed off real Child.parentIds (iOS parity).
    // A non-parent viewer can't read the children docs, so when none
    // are available fall back to memberIds — still surfaces co-parents
    // to a grandparent / friend in their connections list, while a
    // parent viewer (who DOES have children) labels by parentIds.
    const otherIsCoParent =
      Array.isArray(children) && children.length > 0
        ? isCoParentInChildren(otherUid, children)
        : memberIds.includes(otherUid);
    out.push({
      uid: otherUid,
      displayName: profile?.displayName ?? 'Family',
      photoURL: typeof url === 'string' && /^https?:\/\//i.test(url) ? url : null,
      // Preserve co-parent identity for non-parent viewers so the modal
      // shows "Co-parent" instead of an editable Connection pencil for
      // someone who isn't actually their connection to label.
      role: otherIsCoParent ? 'co-parent' : 'extended',
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
 * The owner is always included so a non-parent creator (empty
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
  const isParent = memberIds.has(uid);
  // Self always appears first — the dashboard renders the "Self" pebble
  // for parent viewers and uses this entry for any "is this me?" check.
  // For non-parent viewers (not in memberIds) the cairn-stack render
  // skips the self pebble and surfaces the viewer in the Connections
  // row instead; this entry is still useful for greetings, profile pills.
  out.push({
    uid,
    displayName: authUser?.displayName ?? pebbleUser?.displayName ?? 'You',
    photoURL: resolvePhoto(authUser, pebbleUser),
    role: isParent ? 'self' : 'self-extended',
    circles: ['immediate'],
    hue: 198,
  });
  // Non-parent viewer (a connection — e.g. a grandparent): their
  // "My family" stops at them. The family's co-parents + children are
  // NOT their immediate family — those people belong in My Connections,
  // surfaced via deriveExtendedMembers.
  if (!isParent) return out;
  // memberProfiles includes non-parent joiners too (joinFamilyAsCairn
  // writes an entry per joiner). Filter to `memberIds` only so the
  // Family stone never surfaces non-parent members as immediate.
  const profiles = family?.memberProfiles ?? {};
  for (const [otherUid, profile] of Object.entries(profiles)) {
    if (otherUid === uid) continue;
    if (!memberIds.has(otherUid)) continue;
    const url = profile.profilePhotoURL;
    // C.1 (iOS parity) — only "Co-parent" if they actually parent one
    // of this family's children (uid in some Child.parentIds). A member
    // who parents no child (childless household / data drift) is a plain
    // member; the family circle surfaces them in the connection ring
    // instead of the inner household ring (see family-circle.js).
    const coParents = isCoParentInChildren(otherUid, children);
    out.push({
      uid: otherUid,
      displayName: profile.displayName ?? (coParents ? 'Co-parent' : 'Family'),
      photoURL: typeof url === 'string' && /^https?:\/\//i.test(url) ? url : null,
      role: coParents ? 'co-parent' : 'member',
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
      throw new Error('Your Google session expired. Connect your calendar again.');
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
