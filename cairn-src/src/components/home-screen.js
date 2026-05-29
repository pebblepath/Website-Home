import { LitElement, html, css } from 'lit';
import './cairn-mark.js';
import './glass-panel.js';
import './glass-button.js';
import './circle-switcher.js';
import './member-chip.js';
import './trip-card.js';
import './event-row.js';
import './trip-form.js';
import './event-form.js';
import './manage-members-modal.js';
import './all-trips-modal.js';
import './import-calendar-modal.js';
import './school-import-modal.js';
import './profile-sheet.js';
// `pebble-chat.js` (the family-ACTIVITIES advisor popup) is no longer
// instantiated — the activities-Pebble fallback was removed
// 2026-05-17 (Pebble is parents-only; non-parents get no Pebble).
import './activity-type-picker.js';
import './discover-pebblepath.js';
import './child-overview.js';
import './child-pebble.js';
import './insight-card.js';
import './trip-planner.js';
import {
  mockUser,
  mockMembers,
  mockTrips,
  mockEvents,
  mockChild,
  mockChildren,
  mockMilestones,
  mockInsights,
  mockDailyCard,
  mockFamilyDailyCard,
  mockChildPebbleMessages,
} from '../data/mock.js';
import {
  dataStore,
  deriveImmediateMembers,
  deriveExtendedMembers,
  deriveConnectionMembers,
  deriveBirthdayEvents,
  resolveEventOccurrence,
  parseLocalDate,
  formatLocalDate,
  gradientForTrip,
} from '../services/data.js';
import { signOutUser } from '../services/firebase.js';
import { toast } from '../services/toast.js';

/**
 * Post-login dashboard.
 *
 * Properties:
 *   user        — { uid, displayName, email, photoURL }
 *   pebbleUser  — full /users/{uid} doc (or null)
 *   family      — /families/{familyId} doc (or null)
 *   children    — array of /children/* docs
 *   trips       — array of /families/{familyId}/trips/* docs
 *   preview     — preview mode flag (no auth, all-mock)
 */
export class HomeScreen extends LitElement {
  static properties = {
    user: { type: Object },
    pebbleUser: { type: Object },
    family: { type: Object },
    children: { type: Array },
    trips: { type: Array },
    events: { type: Array },
    holidays: { type: Array },
    preview: { type: Boolean },
    // ── PP-household child surface (Children / Today / Pebble) ──
    ppFamily: { type: Object },
    ppIsMember: { type: Boolean },
    ppChildren: { type: Array },
    selectedChildId: { type: String },
    childMilestones: { type: Array },
    childInsights: { type: Array },
    childDailyCard: { type: Object },
    familyDailyCard: { type: Object },
    // Close-the-loop Slice 4 (2026-05-28) — the four memory layers
    // ("What Pebble Knows"), read-only.
    pebbleAnchors: { type: Array },
    pebbleRhythms: { type: Array },
    pebblePatterns: { type: Array },
    pebbleLiveContext: { type: Array },
    childPebbleMessages: { type: Array },
    childPebbleSessions: { type: Array },
    // Batch F — read-only child-viewer tier + access requests.
    ppIsChildViewer: { type: Boolean },
    incomingChildRequests: { type: Array },
    myChildAccessRequest: { type: Object },
    _pebblePrefill: { state: true },
    _plannerOpen: { state: true },
    _plannerTrip: { state: true },
    circle: { state: true },
    /** Active top-nav tab: 'today' | 'children' | 'activities' |
     *  'pebble' | 'cairn'. Replaced the centre-column Pebble search
     *  bar (now the Pebble tab). Purely in-component UI state — NOT a
     *  URL param, so it never collides with app-shell's ?join / ?reset
     *  / ?preview routing. */
    _activeTab: { state: true },
    // Close-the-loop Slice 3 (2026-05-28) — family-brief refresh spinner.
    _refreshingFamilyBrief: { state: true },
    // "What Pebble knows" drill-down (open = detail view, like the iOS
    // settings page push). Reset on tab-leave in updated().
    _wpkOpen: { state: true },
    _formOpen: { state: true },
    _formTrip: { state: true },
    _formBusy: { state: true },
    _membersOpen: { state: true },
    _eventFormOpen: { state: true },
    _eventFormEvent: { state: true },
    _eventFormBusy: { state: true },
    _displayMonth: { state: true },
    /** 2026-05-22 — single-card calendar with view-toggle replaced
     *  the stacked monthly + yearly panels. 'week' | 'month' | 'year'.
     *  2026-05-24 — Activities calendar workspace redesign (design 28)
     *  reuses this state; default flipped from 'month' to 'week'. */
    _calendarView: { state: true },
    /** 2026-05-24 — design 28. Filter map for the new sidebar Calendars
     *  legend. Session-only (a page refresh resets to all-on). Keys are
     *  the 5 category ids: trip, plan, holiday, event, celebrate. */
    _calFilters: { state: true },
    /** 2026-05-24 — design 28. Anchor (Sunday) for the visible week in
     *  Week view. Independent of _displayMonth so flipping Week prev/
     *  next doesn't drag the Month-view focus along (and vice-versa).
     *  Reset to today's Sunday by the toolbar Today button. */
    _displayWeekStart: { state: true },
    /** 2026-05-24 — design 28. Plan items overlapping the visible week.
     *  Map<tripId, PlanItem[]>. Subscribed when Week view is active +
     *  the visible-week trip set changes; torn down otherwise. */
    _weekPlanItems: { state: true },
    _allTripsOpen: { state: true },
    _editingFamilyName: { state: true },
    _importOpen: { state: true },
    _schoolImportOpen: { state: true },
    _profileOpen: { state: true },
    _typePickerOpen: { state: true },
    _formMode: { state: true },
    _pebbleFabOpen: { state: true },
    _themeLight: { state: true },
    /** Currently-hovered drop target during a member drag — gives the
     *  receiving stone a highlighted ring so it's obvious where the
     *  drop will land. Holds the targetGroupId ('extended' or a sub-
     *  group id), or null when nothing is being dragged over. */
    _dragOverTarget: { state: true },
    /** Flat-family Phase 2B Slice 3b-ii — people across the family's
     *  `connectedFamilyIds` for the trip-form "Connections" picker
     *  group. Connected families are NOT subscribed in state, so this
     *  is an async one-shot fetch (`deriveConnectionMembers`) refreshed
     *  from `updated()` when the family's connection set changes. */
    _connectionMembers: { state: true },
    /** P7 Item 3 (2026-05-20) — per-child 2A claim affordance on the
     *  Children gate. `_claimingChildId` blocks double-tap while the
     *  Firestore write is in flight; `_claimedChildName` shows a
     *  one-shot "✓ Request sent for {name}" confirmation in the gate.
     *  Session-local; resets on a fresh visit to the tab. The
     *  underlying `requestToBeCoParent` GRANTS NOTHING — an existing
     *  parent confirms it (the deployed coParentRequests rule enforces
     *  this independently). */
    _claimingChildId: { state: true },
    _claimedChildName: { state: true },
    /** Phase 9 — post-registration "Join another family" surface in the
     *  Settings tab. The Account row hosts an inline code input + Join
     *  button (no separate sheet). State is session-local; resets on
     *  page reload. The redemption itself routes through
     *  `dataStore.redeemConnectCode` — the same already-shipped path
     *  used by the onboarding `join-family-screen`. NOT privilege-
     *  sensitive on its own (adds to `cairnMemberIds` only). */
    _joinAnotherCode: { state: true },
    _joinAnotherBusy: { state: true },
    _joinAnotherError: { state: true },
    _joinAnotherSuccessName: { state: true },
  };

  constructor() {
    super();
    this.user = mockUser;
    this.pebbleUser = null;
    this.family = null;
    this.children = [];
    this.trips = [];
    this.events = [];
    this.holidays = [];
    this._connectionMembers = [];
    /** Non-reactive dedup key so `updated()` only re-fetches when the
     *  family's id or connectedFamilyIds set actually changes. */
    this._connKey = '';
    this.ppFamily = null;
    this.ppIsMember = false;
    this.ppChildren = [];
    this.selectedChildId = null;
    this.childMilestones = [];
    this.childInsights = [];
    this.childDailyCard = null;
    this.familyDailyCard = null;
    this.pebbleAnchors = [];
    this.pebbleRhythms = [];
    this.pebblePatterns = [];
    this.pebbleLiveContext = [];
    this._wpkExpanded = new Set();
    this.childPebbleMessages = [];
    this.childPebbleSessions = [];
    this.ppIsChildViewer = false;
    this.incomingChildRequests = [];
    this.myChildAccessRequest = null;
    // P7 Item 3 — 2A claim state. Null = no claim sent this session;
    // string = which child's name was just claimed (for the
    // confirmation toast inside the gate).
    this._claimingChildId = null;
    this._claimedChildName = null;
    // P9 — Settings → Join another family
    this._joinAnotherCode = '';
    this._joinAnotherBusy = false;
    this._joinAnotherError = '';
    this._joinAnotherSuccessName = '';
    this._pebblePrefill = '';
    this._plannerOpen = false;
    this._plannerTrip = null;
    this.preview = false;
    // 2026-05-14: the circle toggle was removed from the topbar (Pebble
    // search bar took its centre-column slot). Default to 'extended' so
    // the dashboard shows everything the viewer has access to; per-user
    // visibility filtering still lives on the trip doc (visibility +
    // viewers + targetSubGroups) and is enforced by the rules + the
    // _userCanSeeTrip resolver below. The switcher component is kept in
    // the codebase for a future re-introduction (likely as a filter
    // chip row above All Trips or inside the profile sheet).
    this.circle = 'extended';
    // Today is the landing glance — greeting + a real-data preview of
    // what's coming up. Activities holds the full trips/calendars/
    // celebrations surface (the pre-tabs dashboard); My Cairn holds the
    // ring stack; Children + Pebble are the app-companion surfaces.
    this._activeTab = 'today';
    this._refreshingFamilyBrief = false;
    this._wpkOpen = false;
    this._formOpen = false;
    this._formTrip = null;
    this._formBusy = false;
    this._membersOpen = false;
    this._eventFormOpen = false;
    this._eventFormEvent = null;
    this._eventFormBusy = false;
    this._allTripsOpen = false;
    this._editingFamilyName = false;
    this._importOpen = false;
    this._schoolImportOpen = false;
    this._profileOpen = false;
    this._typePickerOpen = false;
    this._formMode = 'trip';
    this._pebbleFabOpen = false;
    this._themeLight =
      typeof document !== 'undefined' &&
      document.documentElement.classList.contains('theme-light');
    this._dragOverTarget = null;
    // Calendar nav state — initialized to "today" at first paint, then
    // user-controlled via prev/next or yearly month-tap.
    const t = new Date();
    this._displayMonth = new Date(t.getFullYear(), t.getMonth(), 1);
    // 2026-05-24 — design 28: default flipped from 'month' to 'week'.
    // The redesigned Week view IS the headline shape — "what is
    // happening this week" is the most useful default for a family.
    this._calendarView = 'week';
    // 2026-05-24 — design 28. Sunday-anchored week start.
    const _t = new Date(t);
    _t.setHours(0, 0, 0, 0);
    this._displayWeekStart = new Date(_t);
    this._displayWeekStart.setDate(_t.getDate() - _t.getDay());
    // 2026-05-24 — design 28. All five filters on by default.
    this._calFilters = {
      trip: true,
      plan: true,
      holiday: true,
      event: true,
      celebrate: true,
    };
    // 2026-05-24 — design 28. Plan items for visible-week trips. Map
    // keyed by tripId. Populated by _syncWeekPlanSubs (see below).
    this._weekPlanItems = new Map();
    // Internal lifecycle handle — not a Lit prop. Array of
    // { tripId, unsub } so we can tear down per-trip listeners
    // selectively as the visible-week trip set changes.
    this._weekPlanUnsubs = [];
  }

  // 2026-05-24 — design 28. Helper used by the plan-item sync to scope
  // the visible week. Wrapped so we can swap the anchor logic later
  // without touching the listener code.
  _visibleWeekStart() {
    return new Date(this._displayWeekStart);
  }

  // P9 — Settings → Join another family. Input formatter that keeps the
  // value alphanumeric + uppercase + 6 chars max. Same shape as the
  // onboarding `join-family-screen` and iOS `JoinFamilyView`.
  _onJoinAnotherCodeInput(e) {
    const raw = (e.target?.value ?? '').toString();
    const cleaned = raw
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '')
      .slice(0, 6);
    if (cleaned !== raw) e.target.value = cleaned;
    this._joinAnotherCode = cleaned;
    if (this._joinAnotherError) this._joinAnotherError = '';
  }

  async _attemptJoinAnotherFamily() {
    const code = (this._joinAnotherCode ?? '').trim();
    if (code.length !== 6 || this._joinAnotherBusy) return;
    this._joinAnotherBusy = true;
    this._joinAnotherError = '';
    this._joinAnotherSuccessName = '';
    try {
      // Pre-look up the family by code so we can capture its name for
      // the success state — `redeemConnectCode` only returns the
      // familyId. If the lookup misses we abort here with a clearer
      // error before mutating anything.
      const fam = await dataStore.findFamilyByConnectCode(code);
      if (!fam) {
        this._joinAnotherError =
          "Couldn't find that family. Double-check the code with whoever invited you.";
        return;
      }
      const joinedName = fam.name || 'the family';
      await dataStore.redeemConnectCode(code);
      this._joinAnotherSuccessName = joinedName;
      toast(`Joined ${joinedName}.`);
      this._joinAnotherCode = '';
    } catch (e) {
      console.error('Join another family failed:', e);
      this._joinAnotherError =
        e?.message?.replace(/^Error:\s*/, '') ??
        "Couldn't join — double-check the code with whoever invited you.";
    } finally {
      this._joinAnotherBusy = false;
    }
  }

  async _saveFamilyName(e) {
    const input = e.target;
    const newName = (input.value ?? '').trim();
    const current = this.family?.name ?? '';
    if (newName && newName !== current && this.family?.id) {
      try {
        const { db, doc, updateDoc, serverTimestamp } = await import('../services/firebase.js');
        await updateDoc(doc(db, 'families', this.family.id), {
          name: newName,
          updatedAt: serverTimestamp(),
        });
        toast('Family name updated.');
      } catch (err) {
        console.error('Update family name failed:', err);
        toast(`Couldn't save: ${err.code ?? err.message}`, { duration: 5000 });
      }
    }
    this._editingFamilyName = false;
  }

  static styles = css`
    /* The global tokens.css *{box-sizing} does NOT pierce this shadow
       root — without this every concept-tuned padding renders against
       content-box and the layout drifts from the concept. */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    :host {
      display: block;
      width: 100%;
      min-height: 100vh;
    }
    .topbar {
      /* Padding + height match PebblePath website's <nav> exactly.
         Three-column grid where the centre column truly centres the
         circle-switcher in the viewport, not just within the gap
         between brand and the .who group. The two outer columns are
         locked to equal width via the 1fr/auto-but-balanced trick. */
      position: sticky;
      top: 0;
      z-index: 10;
      padding: 0 48px;
      height: 68px;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      column-gap: 14px;
      background: var(--chrome-bg);
      backdrop-filter: blur(28px) saturate(180%);
      -webkit-backdrop-filter: blur(28px) saturate(180%);
      border-bottom: 1px solid var(--glass-border);
    }
    .topbar .brand {
      justify-self: start;
    }
    /* circle-switcher was removed from the topbar 2026-05-14 — left
       a no-op selector here so older selectors that targeted it
       degrade gracefully if anyone re-introduces it. */
    .topbar .who {
      justify-self: end;
    }
    /* Pebble surfaces as a search-bar in the centre column (not a pill).
       Always visible, invites a question rather than competing with the
       + Activity primary CTA. Clicking anywhere on it opens the full
       chat sheet, optionally pre-filling the textarea with whatever
       was typed inline. */
    .pebble-search {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      width: clamp(360px, 42vw, 560px);
      max-width: 100%;
      padding: 7px 14px 7px 12px;
      border-radius: var(--radius-pill);
      background: var(--field-bg);
      border: 1px solid var(--glass-border);
      cursor: text;
      transition: background 200ms ease, border-color 200ms ease;
    }
    .pebble-search:hover,
    .pebble-search:focus-within {
      background: rgba(61, 155, 143, 0.14);
      border-color: rgba(61, 155, 143, 0.4);
    }
    .pebble-search-icon {
      width: 16px;
      height: 16px;
      color: var(--teal-pebble);
      flex-shrink: 0;
    }
    .pebble-search-input {
      flex: 1;
      min-width: 0;
      background: transparent;
      border: none;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 14px;
      padding: 2px 0;
      outline: none;
    }
    .pebble-search-input::placeholder {
      /* Quieter than var(--text-tertiary) — the bar already reads as
         a Pebble entry-point from its location + sparkle icon, so the
         placeholder shouldn't compete visually. */
      color: rgba(255, 248, 235, 0.32);
      font-style: italic;
    }
    /* Mobile-only Pebble button — shown next to "+ Activity" instead of
       a centred search bar on narrow viewports. */
    .pebble-mobile-btn {
      display: none;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 999px;
      background: rgba(255, 248, 235, 0.08);
      border: 1px solid var(--glass-border);
      color: var(--teal-pebble);
      cursor: pointer;
      padding: 0;
    }
    .pebble-mobile-btn:hover {
      background: rgba(61, 155, 143, 0.16);
      border-color: rgba(61, 155, 143, 0.45);
    }
    .pebble-mobile-btn svg { width: 16px; height: 16px; }
    @media (max-width: 768px) {
      /* Replace the central search bar with a small button next to
         the "+ Activity" CTA — much less typing real-estate is needed
         on a phone, and the button reads cleaner. */
      .pebble-search {
        display: none;
      }
      .pebble-mobile-btn {
        display: inline-flex;
      }
    }

    .activity-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      border-radius: var(--radius-pill);
      background-image: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      cursor: pointer;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13.5px;
      letter-spacing: -0.005em;
      text-shadow: 0 1px 1px rgba(20, 12, 6, 0.3);
      box-shadow:
        0 4px 14px rgba(139, 90, 62, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
      transition: background-image 240ms ease, transform 160ms ease, box-shadow 240ms ease;
    }
    .activity-btn:hover {
      background-image: var(--gradient-cta-hover);
    }
    .activity-btn:active {
      transform: translateY(1px) scale(0.98);
    }
    @media (max-width: 768px) {
      /* Pixel-matched with pebblepath.ai's mobile nav: padding 0 20px,
         height 60px, same teal wash gradient that fades to transparent.
         Logo lives at the same x/y as on the website so the two surfaces
         feel like one product when switching between them. */
      .topbar {
        padding: 0 20px;
        height: 60px;
        column-gap: 8px;
        grid-template-columns: auto 1fr auto;
        background: linear-gradient(
          180deg,
          rgba(31, 92, 84, 0.96) 0%,
          rgba(31, 92, 84, 0.78) 100%
        );
        backdrop-filter: blur(18px) saturate(160%);
        -webkit-backdrop-filter: blur(18px) saturate(160%);
      }
      .topbar .brand-name {
        display: none;
      }
      .activity-btn-label {
        display: none;
      }
      /* Label hidden on mobile → make it a CLEAN 40px circle with a
         properly-sized "+" (was a cramped pill + tiny 13.5px glyph).
         40px matches the planner close + is a comfortable touch
         target; the FAB stays the larger primary floating action. */
      .activity-btn {
        width: 40px;
        height: 40px;
        padding: 0;
        justify-content: center;
        font-size: 24px;
        font-weight: 300;
        line-height: 1;
      }
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .brand-icon {
      width: 38px;
      height: 38px;
      border-radius: 9px;
      display: block;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
    .brand-name {
      font-family: var(--font-pebble);
      font-weight: 300;
      font-synthesis: weight;
      font-size: 24px;
      letter-spacing: 0.04em;
      line-height: 1;
      color: rgba(255, 248, 235, 0.94);
      transform: translateY(2px);
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
    }
    .who {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .avatar-tap {
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
      border-radius: 999px;
      transition: transform 200ms ease, box-shadow 200ms ease;
    }
    .avatar-tap:hover {
      transform: scale(1.04);
      box-shadow: 0 0 0 3px rgba(255, 248, 235, 0.14);
    }
    .avatar-tap:focus-visible {
      outline: 2px solid var(--terracotta);
      outline-offset: 2px;
    }
    .preview-banner {
      padding: 10px 24px;
      background: linear-gradient(90deg, rgba(212, 168, 67, 0.18), rgba(198, 123, 92, 0.18));
      border-bottom: 1px solid rgba(212, 168, 67, 0.3);
      font-size: 13px;
      color: rgba(255, 232, 200, 0.95);
      text-align: center;
    }
    .preview-banner strong {
      font-weight: 600;
    }
    .preview-banner a {
      color: inherit;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    /* ── Floating Pebble — liquid-glass launcher + docked panel.
       Present on every tab EXCEPT Pebble (that tab IS Pebble). The
       panel reuses <child-pebble compact> — one chat implementation,
       two surfaces. ───────────────────────────────────────────── */
    .pebble-fab {
      position: fixed;
      right: 24px;
      bottom: 24px;
      z-index: 900;
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 13px 18px 13px 15px;
      border-radius: var(--radius-pill);
      cursor: pointer;
      color: #eafaf6;
      font-family: var(--font-display);
      font-size: 14px;
      font-weight: 600;
      letter-spacing: -0.01em;
      /* Liquid glass: translucent teal over a heavy backdrop blur +
         saturation, hairline light edge, soft lifted shadow. */
      background: linear-gradient(
        135deg,
        rgba(61, 155, 143, 0.42),
        rgba(45, 122, 112, 0.32)
      );
      backdrop-filter: blur(22px) saturate(180%);
      -webkit-backdrop-filter: blur(22px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.22);
      box-shadow:
        0 10px 30px rgba(20, 60, 54, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
      transition: transform 160ms ease, box-shadow 160ms ease;
    }
    .pebble-fab:hover {
      transform: translateY(-2px);
      box-shadow:
        0 16px 40px rgba(20, 60, 54, 0.48),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    .pebble-fab svg { width: 20px; height: 20px; }
    .pebble-fab .lbl {
      /* Label hides on narrow screens — the orb alone is the affordance. */
    }
    .pebble-fab-panel {
      position: fixed;
      right: 24px;
      bottom: 92px;
      z-index: 901;
      width: 400px;
      max-width: calc(100vw - 32px);
      height: 580px;
      max-height: calc(100vh - 132px);
      display: flex;
      flex-direction: column;
      border-radius: 22px;
      overflow: hidden;
      background: var(--panel-solid);
      backdrop-filter: blur(34px) saturate(170%);
      -webkit-backdrop-filter: blur(34px) saturate(170%);
      border: 1px solid var(--glass-border-strong);
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.5);
      animation: pebbleFabRise 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes pebbleFabRise {
      from { transform: translateY(16px) scale(0.98); opacity: 0; }
      to { transform: translateY(0) scale(1); opacity: 1; }
    }
    .pebble-fab-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 14px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      flex-shrink: 0;
    }
    .pebble-fab-head .ttl {
      display: flex;
      align-items: center;
      gap: 9px;
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .pebble-fab-head .ttl svg { width: 18px; height: 18px; color: var(--ink-teal); }
    .pebble-fab-head .x {
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      width: 30px;
      height: 30px;
      border-radius: 999px;
      cursor: pointer;
      font-size: 17px;
      line-height: 1;
      flex-shrink: 0;
    }
    .pebble-fab-head .x:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    /* Flex chain (NOT percentage heights) so the embedded
       <child-pebble compact> fills the panel: its thread scrolls
       internally + the composer stays pinned + visible. A
       percentage-height chain breaks here because the custom-element
       host has no definite height. */
    .pebble-fab-body {
      flex: 1;
      min-height: 0;
      overflow: hidden;
      display: flex;
    }
    .pebble-fab-body > child-pebble {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }
    .pebble-fab-empty {
      padding: 26px 22px;
      text-align: center;
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.6;
    }
    .pebble-fab-empty button {
      margin-top: 14px;
      padding: 9px 18px;
      border-radius: var(--radius-pill);
      background: var(--gradient-sage);
      color: #fff;
      border: none;
      cursor: pointer;
      font-family: var(--font-body);
      font-size: 13px;
      font-weight: 600;
    }
    @media (max-width: 720px) {
      /* Sit above the fixed bottom nav bar. */
      /* Icon-only on mobile → an explicit, clean 52px circle (was
         padding-derived ~44 which varied with the glyph). 52 keeps
         it the clearly-primary floating action, distinct from the
         40px header circular controls. */
      .pebble-fab {
        right: 16px;
        bottom: 84px;
        width: 52px;
        height: 52px;
        padding: 0;
        justify-content: center;
      }
      .pebble-fab .lbl { display: none; }
      .pebble-fab-panel {
        right: 12px;
        left: 12px;
        bottom: 150px;
        width: auto;
        max-width: none;
        /* Definite height (not auto) so the inner flex chain can
           size the chat + keep the composer on-screen. */
        height: 62vh;
        max-height: calc(100vh - 210px);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .pebble-fab-panel { animation: none; }
      .pebble-fab:hover { transform: none; }
    }

    main {
      /* Definite width + margin-inline:auto centres reliably
         regardless of the host formatting context (max-width +
         margin:0 auto was computing to 0 here). Matches the concept's
         1280 max + 24px gutters. */
      padding: 30px 24px 0;
      width: min(1280px, 100%);
      margin-inline: auto;
    }
    @media (max-width: 768px) {
      main {
        padding: 20px 16px calc(32px + env(safe-area-inset-bottom));
      }
    }
    /* Portal v4 — Pebble tab is full-bleed: drop the gutters + width
       cap so the chat surface runs edge-to-edge and right up to the
       nav bar. <child-pebble> supplies its own internal padding. */
    main.pebble-full {
      padding: 0;
      width: 100%;
      max-width: none;
    }

    .hello {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 32px;
      flex-wrap: wrap;
    }
    @media (max-width: 768px) {
      .hello {
        margin-bottom: 22px;
        /* Keep the scope/privacy pill on the SAME row as the
           title/subheader, top-right (matches the Activities tab) —
           was wrapping to its own left-aligned row on Today/Children
           because the tall title block forced a flex wrap. */
        flex-wrap: nowrap;
        align-items: flex-start;
      }
      .hello > div:first-child {
        min-width: 0;
        flex: 1;
      }
      .hello > :not(div:first-child) {
        flex-shrink: 0;
      }
    }
    .hello h1 {
      margin: 0;
      font-family: var(--font-display);
      font-size: clamp(30px, 4vw, 44px);
      line-height: 1.05;
      letter-spacing: -0.025em;
      background: var(--heading-fill);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .hello .stat {
      color: var(--text-secondary);
      font-size: 15px;
      margin-top: 8px;
    }
    .hello .stat span {
      color: var(--text-primary);
      font-weight: 600;
    }
    /* Static page subtitle (non-Today tabs). Visually matches the
       old subtitle but is NOT interactive — no cursor/hover — so it
       never looks editable (only Today's .family-name is editable). */
    .hello .page-sub {
      color: var(--text-tertiary);
      font-size: 14px;
      margin-top: 6px;
      letter-spacing: -0.005em;
    }
    .hello .family-name {
      color: var(--text-tertiary);
      font-size: 14px;
      margin-top: 6px;
      letter-spacing: -0.005em;
      cursor: pointer;
      padding: 2px 4px;
      margin-left: -4px;
      border-radius: 4px;
      transition: background 160ms ease, color 160ms ease;
    }
    .hello .family-name:hover {
      color: var(--text-secondary);
      background: var(--field-bg);
    }
    .hello .family-name-input {
      color: var(--text-primary);
      font-size: 14px;
      margin-top: 6px;
      letter-spacing: -0.005em;
      font-family: var(--font-body);
      font-weight: 500;
      background: var(--field-bg);
      border: 1px solid var(--glass-border-strong);
      border-radius: 4px;
      padding: 2px 6px;
      margin-left: -6px;
      outline: none;
      min-width: 200px;
    }
    .hello .smart {
      font-family: var(--font-display);
      font-size: clamp(15px, 1.8vw, 18px);
      font-weight: 600;
      letter-spacing: -0.005em;
      margin: 10px 0 4px;
      color: transparent;
      background: linear-gradient(
        90deg,
        var(--terracotta) 0%,
        var(--amber-glow) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
    }

    section {
      margin-bottom: 32px;
    }
    .section-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 14px;
      padding: 0 4px;
      /* Consistent header height so a head WITH an action pill
         (e.g. "Manage members") and a head WITHOUT one line up —
         keeps side-by-side grid-2 cards top-aligned (My Cairn). */
      min-height: 34px;
    }
    /* Today: the "Felix today" h2 + "Open …'s path" pill were
       removed; the scope ("Your household") chip moved down here
       and sits where the pill was (right-aligned). Tighter margin
       so the cards float up into the reclaimed space. */
    .section-head.scope-only {
      justify-content: flex-end;
      min-height: 0;
      margin-bottom: 10px;
    }
    /* Tab 1 ONLY: pull the lead section (scope chip + Felix/Coming-up
       cards) up toward the family name without moving the greeting
       header itself — the shared .hello margin + main padding stay
       at their original values, this just reclaims part of that gap
       on Today. Other tabs unaffected. */
    /* Gentle pull so the cards sit close under the greeting. The
       scope chip moved into the header rightSlot (unified with the
       other tabs), so the old -20px (calibrated WITH a scope row
       present) would now jam the cards into the family-name; -6 is
       the right gap now. */
    section.today-lead {
      margin-top: -6px;
    }
    @media (max-width: 768px) {
      section.today-lead {
        margin-top: -4px;
      }
    }
    .section-head h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
    /* ONE harmonized action pill — verbatim from the concept's global
       .link (All activities / More insights / See all / Clear / Manage /
       Edit / + Add event …). De-scoped from .section-head so EVERY .link
       across all 5 tabs gets the pill, not just section headers (a
       .section-head-scoped rule left cal-head / set-row links unstyled —
       Portal-polish-v3 #4). */
    .link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      font-family: var(--font-body);
      transition: color 0.18s ease, border-color 0.18s ease, background 0.18s ease;
    }
    .link:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
      background: var(--glass-fill-strong);
    }
    .link svg {
      width: 13px;
      height: 13px;
    }
    @media (max-width: 768px) {
      .link.hide-mobile {
        display: none;
      }
    }

    /* 2026-05-22 — was a wrapping grid that grew taller as trips
       accumulated. Switched to a horizontal scroll-snap carousel so
       the section stays one row tall + lets users browse many
       activities without vertical scroll. There's no hard cap on
       trips shown; all eligible trips render and the user swipes
       through them. */
    .trips-row {
      display: flex;
      gap: 18px;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
      scroll-padding-left: 0;
      padding-bottom: 6px;
      /* Hide scrollbar — the carousel rhythm is the affordance. */
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .trips-row::-webkit-scrollbar { display: none; }
    .trips-row > trip-card {
      flex: 0 0 320px;
      scroll-snap-align: start;
    }
    @media (max-width: 480px) {
      .trips-row > trip-card {
        flex: 0 0 86%;
      }
    }

    /* Celebrations — two-column layout (Birthdays | Anniversaries)
       so the panels feel intentional even with sparse content,
       instead of one wide low-density panel. */
    .cel-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    @media (max-width: 720px) {
      .cel-row {
        grid-template-columns: 1fr;
      }
    }
    .cel-col-head {
      display: flex;
      align-items: baseline;
      margin-bottom: 4px;
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.08);
    }
    .cel-col-title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 14.5px;
      letter-spacing: -0.005em;
    }
    .cel-empty {
      color: var(--text-tertiary);
      font-size: 13px;
      padding: 8px 0 4px;
      line-height: 1.5;
    }
    @media (max-width: 720px) {
      .cel-row {
        gap: 12px;
      }
      .cel-col-head {
        margin-bottom: 2px;
        padding-bottom: 6px;
      }
    }

    /* Empty state for the Coming up panel — promoted from a one-line
       "No trips yet" to something inviting since this is the first
       thing a fresh family sees. */
    .empty-hero {
      text-align: center;
      padding: 16px 12px 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    .empty-icon {
      opacity: 0.85;
      margin-bottom: 4px;
    }
    .empty-title {
      font-family: var(--font-display);
      font-size: 19px;
      font-weight: 600;
      letter-spacing: -0.015em;
    }
    .empty-sub {
      color: var(--text-secondary);
      font-size: 14px;
      line-height: 1.55;
      max-width: 420px;
      margin-bottom: 6px;
    }
    .empty-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .empty-cta {
      padding: 10px 18px;
      border-radius: var(--radius-pill);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13.5px;
      cursor: pointer;
      transition: transform 160ms ease, background-image 240ms ease, box-shadow 240ms ease;
      min-height: 40px;
    }
    .empty-cta.primary {
      background-image: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      text-shadow: 0 1px 1px rgba(20, 12, 6, 0.3);
      box-shadow:
        0 4px 14px rgba(139, 90, 62, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
    }
    .empty-cta.primary:hover {
      background-image: var(--gradient-cta-hover);
    }
    .empty-cta.ghost {
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
    }
    .empty-cta.ghost:hover {
      background: var(--glass-fill-strong);
      border-color: var(--glass-border-strong);
    }
    .empty-cta:active {
      transform: translateY(1px) scale(0.99);
    }

    /* P7 Item 3 (2026-05-20) — 2A claim section on the Children gate.
       Sits below the read-only Request Access affordance as a secondary
       option for actual parents/caregivers. Uses the same .empty-*
       typographic scale so the gate reads as one cohesive surface. */
    .claim-section {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid var(--glass-border);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      max-width: 440px;
      width: 100%;
    }
    .claim-title {
      font-family: var(--font-display);
      font-size: 15.5px;
      font-weight: 600;
      letter-spacing: -0.015em;
      color: var(--text-primary);
    }
    .claim-sub {
      color: var(--text-secondary);
      font-size: 13px;
      line-height: 1.55;
      text-align: center;
      margin-bottom: 4px;
    }
    .claim-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }
    .claim-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      width: 100%;
      padding: 12px 16px;
      background: rgba(61, 155, 143, 0.10);
      border: 1px solid rgba(61, 155, 143, 0.30);
      border-radius: var(--radius-tile);
      color: var(--teal-pebble);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13.5px;
      cursor: pointer;
      transition: background 180ms ease, border-color 180ms ease, transform 160ms ease;
      text-align: left;
    }
    .claim-btn:hover:not(:disabled) {
      background: rgba(61, 155, 143, 0.16);
      border-color: rgba(61, 155, 143, 0.45);
    }
    .claim-btn:active:not(:disabled) {
      transform: translateY(1px) scale(0.99);
    }
    .claim-btn:disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }
    .claim-chev {
      color: rgba(61, 155, 143, 0.65);
      font-size: 16px;
      font-weight: 700;
    }
    .claim-sent {
      color: var(--teal-pebble);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13.5px;
      text-align: center;
      padding: 10px 14px;
      background: rgba(61, 155, 143, 0.10);
      border: 1px solid rgba(61, 155, 143, 0.25);
      border-radius: var(--radius-tile);
      width: 100%;
    }

    /* Celebrations (left) + Your Cairn (right) share the EXACT column
       ratio of the calendars above (1fr 1.2fr, 18px gap, same 1024px
       break) so the Celebrations card lines up flush with the monthly
       calendar and Your Cairn lines up flush with the annual grid. */
    .cel-cairn-row {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 18px;
      align-items: start;
    }
    @media (max-width: 1024px) {
      .cel-cairn-row {
        grid-template-columns: 1fr;
      }
    }
    .cel-cairn-col {
      min-width: 0;
    }
    /* Stacked Birthdays / Anniversaries inside one card. */
    .cel-stack-block + .cel-stack-block {
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 248, 235, 0.08);
    }

    .cal-row {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 18px;
      align-items: stretch;
    }
    .cal-row > glass-panel {
      display: block;
      height: 100%;
    }
    @media (max-width: 1024px) {
      .cal-row {
        grid-template-columns: 1fr;
      }
    }
    /* Activities tab icon — mountain.png used as a CSS mask so it
       picks up currentColor like the other inline-SVG tab icons.
       The PNG is solid black on transparent; the mask treats its
       opaque pixels as the icon shape and the background-color
       paints through. Net: icon = whatever the surrounding text
       color is (white on the dark-teal topbar). 2026-05-23.
       prettier-ignore — keep this comment single-line per the
       no-backticks-in-css-templates rule. */
    .mountain-icon {
      display: inline-block;
      width: 22px;
      height: 22px;
      background-color: currentColor;
      -webkit-mask: var(--mountain-src) center / contain no-repeat;
      mask: var(--mountain-src) center / contain no-repeat;
      vertical-align: middle;
    }
    .cal-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .cal-head h3 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 17px;
      font-weight: 600;
    }

    /* ══ Activities calendar workspace (design 28, 2026-05-24) ══
       Replaces the prior single-card calendar (Week/Month/Year
       toggle + chip-per-cell month + weekly strip). New shape =
       toolbar across the top, sidebar with mini-month + filters
       on the left, main pane with Week / Month / Year on the
       right. All-day chips + monthly spanning bars use a shared
       category color carrier via the cat-trip / cat-plan / cat-
       holiday / cat-event / cat-celebrate classes (rules at the
       bottom of this block — they map a category id to --cat,
       --cat-bg, --cat-ink custom properties consumed by the chip
       rules). */

    /* margin-bottom puts air between the calendar workspace and the
       Celebrations section below it on the Activities tab. */
    .cal-section { display: block; margin: 0 0 28px 0; }
    .cal-ws { display: flex; flex-direction: column; }
    .cal-ws-divider { height: 1px; background: var(--hairline); }

    /* ── toolbar ─────────────────────────────────────────── */
    .cal-tb {
      display: flex; align-items: center; justify-content: space-between;
      gap: 16px; padding: 16px 20px; flex-wrap: wrap;
    }
    .cal-tb-l { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .cal-tb-r { display: flex; align-items: center; gap: 10px; }
    .cal-today-btn {
      font-family: var(--font-body); font-weight: 600; font-size: 13px;
      color: var(--text-primary); background: var(--glass-fill);
      border: 1px solid var(--glass-border); padding: 9px 15px;
      border-radius: var(--radius-pill); cursor: pointer;
      transition: border-color 160ms ease, color 160ms ease, background 160ms ease;
    }
    .cal-today-btn:hover {
      border-color: var(--teal-pebble); color: var(--teal-pebble);
      background: var(--glass-fill-strong);
    }
    .cal-nav { display: flex; gap: 4px; }
    .cal-nav button {
      width: 34px; height: 34px; border-radius: 50%;
      border: 1px solid var(--glass-border); background: var(--glass-fill);
      color: var(--text-secondary); cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: border-color 160ms ease, color 160ms ease, background 160ms ease;
      padding: 0;
    }
    .cal-nav button:hover {
      border-color: var(--teal-pebble); color: var(--teal-pebble);
      background: var(--glass-fill-strong);
    }
    .cal-nav button svg { width: 16px; height: 16px; display: block; }
    .cal-period { display: flex; flex-direction: column; line-height: 1.15; margin-left: 4px; }
    .cal-period .pt {
      font-family: var(--font-display); font-weight: 700; font-size: 21px;
      letter-spacing: -0.02em; color: var(--text-primary);
    }
    .cal-period .ps {
      font-size: 12px; color: var(--text-tertiary); font-weight: 500; margin-top: 1px;
    }
    .cal-vswitch {
      display: flex; gap: 3px; padding: 3px;
      background: var(--glass-fill); border: 1px solid var(--glass-border);
      border-radius: var(--radius-pill);
    }
    .cal-vswitch button {
      border: none; background: transparent;
      font-family: var(--font-body); font-weight: 600; font-size: 13px;
      color: var(--text-secondary); padding: 8px 17px;
      border-radius: var(--radius-pill); cursor: pointer;
      transition: background 160ms ease, color 160ms ease;
    }
    .cal-vswitch button:hover { color: var(--text-primary); }
    .cal-vswitch button.on {
      background: var(--teal-pebble); color: #fff;
      box-shadow: 0 2px 7px rgba(61, 155, 143, 0.40);
    }
    .cal-add {
      display: inline-flex; align-items: center; gap: 7px;
      font-family: var(--font-body); font-weight: 600; font-size: 13px;
      color: #fff; background-image: var(--gradient-cta);
      border: 1px solid rgba(0, 0, 0, 0.04);
      padding: 9px 16px; border-radius: var(--radius-pill);
      cursor: pointer; transition: filter 160ms ease;
      box-shadow: 0 3px 10px rgba(139, 90, 62, 0.32);
    }
    .cal-add:hover { background-image: var(--gradient-cta-hover); }
    .cal-add svg { width: 15px; height: 15px; display: block; }

    /* ── body ────────────────────────────────────────────── */
    .cal-ws-body { display: grid; grid-template-columns: 248px 1fr; }
    @media (max-width: 900px) {
      .cal-ws-body { grid-template-columns: 1fr; }
    }
    .cal-side {
      border-right: 1px solid var(--hairline);
      padding: 18px 16px; background: var(--glass-fill);
    }
    @media (max-width: 900px) {
      .cal-side { border-right: none; border-bottom: 1px solid var(--hairline); }
    }
    /* 2026-05-24 — fixed height (not min-height) so the workspace
       doesn't resize when the user flips Week / Month / Year.
       Calibrated to Month's natural full-bleed height: 6 week rows
       × 114px (684) + DOW row + small margin (22) + cal-main top/
       bottom padding (42) = 748px → rounded up to 760px to leave a
       small margin for Week's variable all-day lane (max 3 lanes ×
       23px). overflow-y: auto is the safety net for any view that
       grows past this in edge cases. overflow-x kept for narrow
       viewports where the 8-column Week / Month grids can extend
       past the available width. */
    .cal-main { padding: 18px 20px 24px; height: 760px; overflow: auto; }

    /* ── sidebar: mini-month ──────────────────────────────── */
    .cal-mini-top {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 8px;
    }
    .cal-mini-top .mm {
      font-family: var(--font-display); font-weight: 700; font-size: 14px;
      color: var(--text-primary);
    }
    .cal-mini-arrows { display: flex; gap: 2px; }
    .cal-mini-arrows button {
      width: 24px; height: 24px; border: none; background: transparent;
      border-radius: 6px; color: var(--text-tertiary); cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 140ms ease, color 140ms ease;
    }
    .cal-mini-arrows button:hover {
      background: var(--glass-fill-strong); color: var(--text-primary);
    }
    .cal-mini-arrows svg { width: 13px; height: 13px; display: block; }
    .cal-mini-dow {
      display: grid; grid-template-columns: repeat(7, 1fr); margin-bottom: 2px;
    }
    .cal-mini-dow span {
      text-align: center; font-size: 10px; font-weight: 700;
      color: var(--text-tertiary); padding: 3px 0;
    }
    .cal-mini-grid { display: grid; grid-template-columns: repeat(7, 1fr); }
    .cal-mini-d {
      aspect-ratio: 1; display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      font-size: 11.5px; font-weight: 600; color: var(--text-secondary);
      position: relative; border-radius: 7px; cursor: pointer;
      transition: background 120ms ease;
    }
    .cal-mini-d:hover { background: var(--glass-fill-strong); }
    .cal-mini-d.muted { color: var(--text-tertiary); opacity: 0.55; }
    .cal-mini-d.today {
      background: var(--teal-pebble); color: #fff; font-weight: 700;
    }
    .cal-mini-d .dot {
      width: 4px; height: 4px; border-radius: 50%;
      background: var(--cat, var(--teal-pebble));
      position: absolute; bottom: 3px;
    }
    .cal-mini-d.today .dot { background: #fff; }

    /* ── sidebar: filters ─────────────────────────────────── */
    .cal-side-h {
      font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
      text-transform: uppercase; color: var(--text-tertiary);
      margin: 22px 4px 8px;
    }
    .cal-filt {
      display: flex; align-items: center; gap: 10px;
      padding: 7px 8px; border-radius: 9px; cursor: pointer;
      transition: background 140ms ease;
      user-select: none;
    }
    .cal-filt:hover { background: var(--glass-fill-strong); }
    .cal-filt .sw {
      width: 17px; height: 17px; border-radius: 5px;
      background: var(--cat);
      flex-shrink: 0; display: flex; align-items: center; justify-content: center;
      transition: background 140ms ease, box-shadow 140ms ease;
    }
    .cal-filt .sw svg { width: 11px; height: 11px; color: #fff; }
    .cal-filt .nm {
      font-size: 13px; font-weight: 600; color: var(--text-primary); flex: 1;
    }
    .cal-filt .ct {
      font-size: 11.5px; font-weight: 600; color: var(--text-tertiary);
    }
    .cal-filt.off .sw {
      background: transparent;
      box-shadow: inset 0 0 0 1.5px var(--text-tertiary);
    }
    .cal-filt.off .nm, .cal-filt.off .ct { color: var(--text-tertiary); }

    /* ── category color carriers ──────────────────────────── */
    /* Each row writes --cat (solid for swatches + chip accent bars),
       --cat-bg (low-alpha tint for chip backgrounds — works in BOTH
       themes), and --cat-ink (chip text). Pure-rule mapping so any
       descendant chip inherits the right palette. */
    .cat-trip {
      --cat: var(--teal-pebble);
      --cat-bg: rgba(61, 155, 143, 0.16);
      --cat-ink: var(--text-primary);
    }
    .cat-plan {
      --cat: var(--sage-soft);
      --cat-bg: rgba(122, 158, 126, 0.16);
      --cat-ink: var(--text-primary);
    }
    .cat-holiday {
      --cat: var(--dusty-blue);
      --cat-bg: rgba(107, 154, 196, 0.16);
      --cat-ink: var(--text-primary);
    }
    .cat-event {
      --cat: var(--amber-glow);
      --cat-bg: rgba(212, 168, 67, 0.18);
      --cat-ink: var(--text-primary);
    }
    .cat-celebrate {
      --cat: var(--rose-soft);
      --cat-bg: rgba(201, 138, 138, 0.18);
      --cat-ink: var(--text-primary);
    }

    /* ── WEEK view ────────────────────────────────────────── */
    .cal-week .wk-head {
      display: grid; grid-template-columns: 54px repeat(7, 1fr);
    }
    .cal-week .wk-h {
      padding: 6px 4px 10px; text-align: center;
      border-left: 1px solid var(--hairline);
    }
    .cal-week .wk-h .dw {
      font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
      color: var(--text-tertiary); text-transform: uppercase;
    }
    .cal-week .wk-h .nm {
      font-family: var(--font-display); font-weight: 700; font-size: 19px;
      color: var(--text-primary); margin-top: 3px;
      display: inline-flex; align-items: center; justify-content: center;
      width: 32px; height: 32px; border-radius: 50%;
    }
    .cal-week .wk-h.today .dw { color: var(--teal-pebble); }
    .cal-week .wk-h.today .nm { background: var(--teal-pebble); color: #fff; }

    .cal-allday {
      display: grid; grid-template-columns: 54px repeat(7, 1fr);
      grid-auto-rows: 23px; row-gap: 3px;
      padding: 7px 0 9px;
      border-top: 1px solid var(--hairline);
      border-bottom: 1px solid var(--hairline);
      background: var(--glass-fill);
    }
    .cal-allday .ad-lbl {
      grid-column: 1; grid-row: 1;
      font-size: 9.5px; font-weight: 700; letter-spacing: 0.04em;
      text-transform: uppercase; color: var(--text-tertiary);
      text-align: right; padding-right: 9px; align-self: center;
    }
    .ad {
      background: var(--cat-bg); color: var(--cat-ink);
      border-left: 3px solid var(--cat); border-radius: 5px;
      font-size: 11.5px; font-weight: 600; padding: 3px 8px;
      margin: 0 3px;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      cursor: pointer;
      display: flex; align-items: center;
      transition: filter 140ms ease;
    }
    .ad:hover { filter: brightness(0.97); }

    .cal-tg {
      display: grid; grid-template-columns: 54px repeat(7, 1fr);
      position: relative;
    }
    .tg-gut { display: flex; flex-direction: column; }
    .tg-hr {
      height: 52px; text-align: right; padding-right: 9px;
      font-size: 10.5px; font-weight: 600; color: var(--text-tertiary);
      transform: translateY(-7px);
    }
    .tg-day {
      position: relative; border-left: 1px solid var(--hairline);
      min-height: 624px;
      background: repeating-linear-gradient(
        to bottom,
        var(--hairline) 0 1px,
        transparent 1px 52px
      );
    }
    .tg-day.today {
      background:
        repeating-linear-gradient(
          to bottom,
          var(--hairline) 0 1px,
          transparent 1px 52px
        ),
        rgba(61, 155, 143, 0.06);
    }
    .tev {
      position: absolute; left: 3px; right: 3px;
      background: var(--cat-bg); color: var(--cat-ink);
      border-left: 3px solid var(--cat); border-radius: 6px;
      padding: 4px 7px; overflow: hidden; cursor: pointer;
      transition: filter 140ms ease, box-shadow 140ms ease;
    }
    .tev:hover {
      filter: brightness(0.97);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.13);
    }
    .tev .tt {
      font-size: 11.5px; font-weight: 700; line-height: 1.25;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .tev .tm {
      font-size: 10.5px; font-weight: 500; opacity: 0.85; margin-top: 1px;
    }
    .nowline {
      position: absolute; left: 0; right: 0; height: 2px;
      background: var(--terracotta); z-index: 5;
    }
    .nowline::before {
      content: ''; position: absolute; left: -4px; top: -3px;
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--terracotta);
    }

    /* ── MONTH view ───────────────────────────────────────── */
    .cal-month .m-dow {
      display: grid; grid-template-columns: repeat(7, 1fr); margin-bottom: 7px;
    }
    .cal-month .m-dow span {
      text-align: left; padding: 0 8px;
      font-size: 11px; font-weight: 700; letter-spacing: 0.05em;
      color: var(--text-tertiary); text-transform: uppercase;
    }
    .cal-month .m-grid {
      border: 1px solid var(--hairline);
      border-radius: 13px; overflow: hidden;
    }
    .cal-month .wkrow { position: relative; }
    .cal-month .dnums { display: grid; grid-template-columns: repeat(7, 1fr); }
    .cal-month .dcell {
      min-height: 114px;
      border-right: 1px solid var(--hairline);
      border-bottom: 1px solid var(--hairline);
      padding: 6px 8px;
    }
    .cal-month .wkrow:last-child .dcell { border-bottom: none; }
    .cal-month .dcell .dn {
      font-size: 13px; font-weight: 700; color: var(--text-secondary);
      display: inline-flex; align-items: center; justify-content: center;
      min-width: 24px; height: 24px; border-radius: 50%;
    }
    .cal-month .dcell.muted { background: var(--glass-fill); }
    .cal-month .dcell.muted .dn { color: var(--text-tertiary); opacity: 0.55; }
    .cal-month .dcell.today .dn { background: var(--teal-pebble); color: #fff; }
    .cal-month .devents {
      position: absolute; left: 0; right: 0; top: 32px; bottom: 5px;
      display: grid; grid-template-columns: repeat(7, 1fr);
      grid-auto-rows: 23px; row-gap: 3px;
      pointer-events: none;
    }
    .cal-month .ev {
      margin: 0 3px;
      background: var(--cat-bg); color: var(--cat-ink);
      border-left: 3px solid var(--cat); border-radius: 5px;
      font-size: 11.5px; font-weight: 600; padding: 3px 7px;
      line-height: 1.35;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      pointer-events: auto; cursor: pointer;
      transition: filter 140ms ease;
    }
    .cal-month .ev:hover { filter: brightness(0.97); }
    .cal-month .ev .ed {
      display: inline-block; width: 6px; height: 6px; border-radius: 50%;
      background: var(--cat); margin-right: 5px; vertical-align: 1px;
    }
    .cal-month .evmore {
      margin: 0 3px; padding: 2px 7px;
      font-size: 11px; font-weight: 600; color: var(--text-tertiary);
      pointer-events: auto; cursor: pointer;
    }
    .cal-month .evmore:hover { color: var(--teal-pebble); }

    /* ── YEAR view ────────────────────────────────────────── */
    .cal-year {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
    }
    @media (max-width: 820px) {
      .cal-year { grid-template-columns: repeat(2, 1fr); }
    }
    .ym {
      text-align: left;
      background: var(--glass-fill);
      border: 1px solid var(--hairline);
      border-radius: 13px; padding: 13px 13px 11px;
      cursor: pointer; transition: border-color 160ms ease,
        box-shadow 160ms ease, transform 160ms ease, background 160ms ease;
      font-family: var(--font-body);
    }
    .ym:hover {
      border-color: var(--teal-pebble);
      box-shadow: 0 8px 20px -10px rgba(0, 0, 0, 0.25);
      transform: translateY(-2px);
    }
    .ym.cur {
      border-color: var(--teal-pebble);
      background: linear-gradient(180deg, rgba(61, 155, 143, 0.10), transparent 60%);
    }
    .ym-name {
      font-family: var(--font-display); font-weight: 700; font-size: 14px;
      color: var(--text-primary); margin-bottom: 7px;
    }
    .ym.cur .ym-name { color: var(--teal-pebble); }
    .ym-dow {
      display: grid; grid-template-columns: repeat(7, 1fr); margin-bottom: 3px;
    }
    .ym-dow span {
      text-align: center; font-size: 9px; font-weight: 700;
      color: var(--text-tertiary);
    }
    .ym-days { display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; }
    .ym-d {
      aspect-ratio: 1; display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      font-size: 10.5px; font-weight: 600; color: var(--text-secondary);
      position: relative; border-radius: 5px;
    }
    .ym-d.e { color: transparent; }
    .ym-d.today { background: var(--teal-pebble); color: #fff; font-weight: 800; }
    .ym-d .yd {
      width: 4px; height: 4px; border-radius: 50%;
      background: var(--cat); position: absolute; bottom: 1px;
    }

    /* ── Cairn stack: flat polished pebbles in solid colors with
       specular highlights, mirroring the app icon. Each stone is a
       true ellipse (border-radius 50% on a wider-than-tall box),
       solid-colored — terracotta on top, teal below — with a soft
       elongated upper highlight + a small specular dot, and a
       darker inner shadow on the bottom rim for 3D shading. */
    .cairn-stack {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      padding: 22px 6px 20px;
      /* Faint ground-ring under the base, like the icon's drawn
         arc. Drawn as a soft horizontal vignette. */
      background:
        radial-gradient(
          ellipse 60% 14% at 50% calc(100% - 26px),
          rgba(61, 155, 143, 0.16) 0%,
          rgba(61, 155, 143, 0) 70%
        );
    }
    .stone {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
    }
    .pebble {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      /* Default pebble palette (teal); specific stones override. */
      background:
        radial-gradient(
          ellipse 80% 60% at 50% 30%,
          #4eb2a4 0%,
          #3d9b8f 55%,
          #1f5c54 100%
        );
      box-shadow:
        0 6px 14px -6px rgba(0, 0, 0, 0.38),
        inset 0 -8px 14px rgba(0, 0, 0, 0.24),
        inset 0 6px 14px rgba(255, 255, 255, 0.06);
      transition: transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1),
        filter 240ms ease;
    }
    /* Elongated specular: soft white smear across the upper face. */
    .pebble::before {
      content: '';
      position: absolute;
      top: 16%;
      left: 18%;
      right: 18%;
      height: 22%;
      border-radius: 50%;
      background: radial-gradient(
        ellipse 100% 100% at 50% 50%,
        rgba(255, 255, 255, 0.55) 0%,
        rgba(255, 255, 255, 0.18) 55%,
        rgba(255, 255, 255, 0) 100%
      );
      filter: blur(2px);
      pointer-events: none;
    }
    /* Catchlight dot deferred — the elongated upper smear is enough
       texture without it. Reintroduce later if needed. */
    .stone:hover .pebble {
      transform: translateY(-2px);
      filter: brightness(1.04);
    }
    /* Drop hover: bright ring + lift so the receiving stone reads as
       the active target during a drag. */
    .pebble-drop {
      outline: 2px dashed rgba(255, 255, 255, 0.7);
      outline-offset: 4px;
      transform: translateY(-3px) scale(1.02);
      filter: brightness(1.08);
    }
    .stone-chips member-chip.is-draggable {
      cursor: grab;
    }
    .stone-chips member-chip.is-draggable:active {
      cursor: grabbing;
    }
    /* Sizes follow the icon's progression — flatter + wider as the
       stack descends, like real river stones balanced on each other. */
    .pebble-self {
      width: 120px;
      height: 44px;
      background:
        radial-gradient(
          ellipse 80% 60% at 50% 30%,
          #d4866a 0%,
          #a85f3e 55%,
          #5e3220 100%
        );
    }
    .pebble-family {
      width: 221px;
      height: 66px;
      background:
        radial-gradient(
          ellipse 80% 60% at 50% 30%,
          #52baad 0%,
          #3d9b8f 55%,
          #1f5c54 100%
        );
    }
    .pebble-extended {
      width: 340px;
      height: 80px;
      background:
        radial-gradient(
          ellipse 80% 60% at 50% 30%,
          #46a89c 0%,
          #348177 55%,
          #194c45 100%
        );
    }
    .pebble-subgroup {
      width: 150px;
      height: 50px;
      /* All sub-group pebbles share one green (matches the Family/
         Extended teal family) — the terracotta/teal alternation read
         as inconsistent, not intentional. */
      background:
        radial-gradient(
          ellipse 80% 60% at 50% 30%,
          #46a89c 0%,
          #348177 55%,
          #194c45 100%
        );
    }
    .stone-chips {
      display: inline-flex;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    .stone-chips member-chip {
      /* Slim 1px ring instead of the thick cream halo — matches how
         avatars are shown elsewhere (attendees row on trip cards). */
      box-shadow:
        0 0 0 1px rgba(255, 248, 235, 0.5),
        0 1px 3px rgba(0, 0, 0, 0.28);
      border-radius: 999px;
      margin-left: -6px;
      transition: transform 180ms ease;
    }
    .stone-chips member-chip:first-child {
      margin-left: 0;
    }
    .stone:hover .stone-chips member-chip {
      transform: translateY(-1px);
    }
    .stone-more {
      margin-left: 6px;
      padding: 2px 7px;
      font-size: 11px;
      font-weight: 700;
      color: #fff;
      background: rgba(0, 0, 0, 0.28);
      border-radius: 999px;
      font-variant-numeric: tabular-nums;
      box-shadow: 0 0 0 1px rgba(255, 248, 235, 0.5);
    }
    .stone-label {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 12px;
      color: var(--text-secondary);
      letter-spacing: -0.005em;
      white-space: nowrap;
    }
    /* Empty stones: hollow dashed ellipse — invites a click without
       breaking the pebble silhouette. */
    .pebble-empty {
      background: transparent;
      border: 1.5px dashed rgba(255, 248, 235, 0.22);
      box-shadow: none;
      color: var(--text-tertiary);
      font-size: 12px;
      font-style: italic;
      padding: 0 18px;
    }
    .pebble-empty::before,
    .pebble-empty::after {
      display: none;
    }
    .stone:hover .pebble-empty {
      transform: none;
      border-color: rgba(255, 248, 235, 0.4);
      color: var(--text-secondary);
      filter: none;
    }
    .subgroup-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px 18px;
      margin-top: 4px;
      max-width: 100%;
    }
    @media (max-width: 560px) {
      .pebble-self { width: 100px; height: 38px; }
      .pebble-family { width: 220px; height: 58px; }
      .pebble-extended { width: 270px; height: 68px; }
      .pebble-subgroup { width: 130px; height: 46px; }
      .subgroup-row { gap: 12px; }
    }
    /* Onboarding hint shown when the cairn is mostly empty (just self).
       Sits above the meta with a soft glow + gentle suggestion. */
    .cairn-hint {
      margin-top: 12px;
      padding: 14px 16px;
      border-radius: var(--radius-tile);
      background: linear-gradient(
        135deg,
        rgba(61, 155, 143, 0.16) 0%,
        rgba(212, 168, 67, 0.12) 100%
      );
      border: 1px solid rgba(255, 248, 235, 0.14);
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .cairn-hint-icon {
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      border-radius: 10px;
      background: var(--gradient-sage);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
    }
    .cairn-hint-icon svg { width: 18px; height: 18px; }
    .cairn-hint-body {
      flex: 1;
      min-width: 0;
    }
    .cairn-hint-title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 13.5px;
      letter-spacing: -0.005em;
    }
    .cairn-hint-sub {
      font-size: 12px;
      color: var(--text-secondary);
      margin-top: 2px;
      line-height: 1.5;
    }
    .cairn-hint-cta {
      flex-shrink: 0;
      background: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      border-radius: var(--radius-pill);
      padding: 7px 14px;
      font: inherit;
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      box-shadow:
        0 3px 10px rgba(139, 90, 62, 0.32),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
    }
    .cairn-hint-cta:hover {
      background: var(--gradient-cta-hover);
    }

    /* ── Top-nav tabs (centre column — replaced the Pebble search) ──
       Lives inside .topbar's auto centre column so it stays visually
       centred in the viewport via the same 1fr/auto/1fr grid the
       search bar used. The Pebble entry-point moved to the Pebble
       tab. */
    .tabs {
      display: inline-flex;
      gap: 3px;
      padding: 5px;
      border-radius: var(--radius-pill);
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border);
      /* Anchor for the absolutely-positioned .tab-slider — the slider
         rides inside .tabs padding-box and slides left/right to
         overlay whichever tab is active. */
      position: relative;
    }
    /* The active visual lives on this ONE absolutely-positioned
       element — it tracks the active tab by transforming horizontally,
       giving a true iOS-26 liquid-glass pill that morphs across the
       bar rather than one pill fading off and another fading in.
       Position + width are set inline by _positionTabSlider() (Lit
       firstUpdated / updated). */
    .tab-slider {
      position: absolute;
      top: 5px;
      bottom: 5px;
      left: 0;
      width: 0;
      transform: translateX(0);
      border-radius: var(--radius-pill);
      pointer-events: none;
      z-index: 0;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.32) 0%,
        rgba(255, 255, 255, 0.12) 55%,
        rgba(255, 255, 255, 0.22) 100%
      );
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow:
        0 6px 18px rgba(20, 50, 46, 0.34),
        inset 0 1px 0 rgba(255, 255, 255, 0.55),
        inset 0 -1px 0 rgba(0, 0, 0, 0.06);
      transition:
        transform 0.42s cubic-bezier(0.4, 0, 0.2, 1),
        width 0.42s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
    .tab-slider.ready {
      opacity: 1;
    }
    .tab {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 16px;
      border: none;
      background: transparent;
      color: var(--chrome-fg);
      cursor: pointer;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13px;
      letter-spacing: -0.005em;
      border-radius: var(--radius-pill);
      white-space: nowrap;
      /* Above the slider so the label stays crisp on the liquid-glass
         pill underneath. */
      position: relative;
      z-index: 1;
      transition: color 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .tab svg {
      width: 16px;
      height: 16px;
    }
    .tab:hover {
      color: var(--chrome-fg-strong);
    }
    .tab.active {
      color: #fff;
    }
    /* Below ~1000px the labels drop to icon-only so 5 tabs + brand +
       Activity + avatar still fit the 68px bar. */
    @media (max-width: 1000px) {
      .tab span {
        display: none;
      }
      .tab {
        padding: 9px 12px;
      }
    }
    /* On phones the centre column scrolls horizontally rather than
       wrapping — the bar stays one row at the existing 60px height. */
    @media (max-width: 768px) {
      .topbar .tabs {
        overflow-x: auto;
        max-width: 100%;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
      }
      .topbar .tabs::-webkit-scrollbar {
        display: none;
      }
    }

    /* ── Mobile bottom tab bar (≤720px) — the PebblePath app's
       mental model. Rendered as a SIBLING of .topbar so its
       position:fixed resolves to the viewport; a .topbar ancestor's
       backdrop-filter would otherwise trap it (the documented
       containing-block trap). Replaces the old icon-only topbar
       shrink with a proper bottom bar. */
    .bottomnav {
      display: none;
    }
    @media (max-width: 720px) {
      .topbar {
        grid-template-columns: 1fr auto;
        padding: 0 16px;
        height: 60px;
      }
      .topbar .tabs {
        display: none;
      }
      .bottomnav {
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 40;
        padding: 8px 6px calc(8px + env(safe-area-inset-bottom));
        background: var(--chrome-bg);
        backdrop-filter: blur(28px) saturate(180%);
        -webkit-backdrop-filter: blur(28px) saturate(180%);
        border-top: 1px solid var(--glass-border);
      }
      .bn-tab {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        padding: 6px 2px;
        border: none;
        background: transparent;
        color: var(--chrome-fg);
        cursor: pointer;
        font-family: var(--font-body);
        font-weight: 600;
        font-size: 10px;
        letter-spacing: -0.005em;
        border-radius: 12px;
        /* Above the bn-slider so the label/icon stay crisp on the
           liquid-glass pill underneath. */
        position: relative;
        z-index: 1;
        transition: color 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .bn-tab svg {
        width: 21px;
        height: 21px;
      }
      .bn-tab.active {
        /* teal-pebble (#3d9b8f) was too dim on the dark-green bar;
           a bright light-teal reads clearly as the active tab. */
        color: #8fe0d2;
      }
      /* Mirror of the top .tab-slider — same iOS-26 liquid-glass
         pill that rides inside the bottom bar, sized for the larger
         vertical bn-tab content (icon + label). Position+width set
         inline by _positionTabSlider(). Larger corner radius (14)
         wraps the vertical bn-tab a touch more generously than the
         12px on the buttons themselves. */
      .bn-slider {
        position: absolute;
        top: 8px;
        bottom: calc(8px + env(safe-area-inset-bottom));
        left: 0;
        width: 0;
        transform: translateX(0);
        border-radius: 14px;
        pointer-events: none;
        z-index: 0;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.32) 0%,
          rgba(255, 255, 255, 0.12) 55%,
          rgba(255, 255, 255, 0.22) 100%
        );
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.4);
        box-shadow:
          0 6px 18px rgba(20, 50, 46, 0.34),
          inset 0 1px 0 rgba(255, 255, 255, 0.55),
          inset 0 -1px 0 rgba(0, 0, 0, 0.06);
        transition:
          transform 0.42s cubic-bezier(0.4, 0, 0.2, 1),
          width 0.42s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
      }
      .bn-slider.ready {
        opacity: 1;
      }
      main {
        padding: 18px 16px calc(82px + env(safe-area-inset-bottom));
      }
    }

    /* Per-tab privacy scope badge (Children/Pebble are parent-only —
       surfaces the "without sharing everything" boundary visibly). */
    .scope-chip {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 7px 14px;
      border-radius: var(--radius-pill);
      font-size: 12.5px;
      font-weight: 600;
      background: rgba(198, 123, 92, 0.16);
      color: var(--ink-terracotta);
      border: 1px solid rgba(198, 123, 92, 0.4);
    }
    .scope-chip svg {
      width: 13px;
      height: 13px;
    }

    /* Today tab — compact child snapshot. */
    .today-child {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .today-child .tc-meta {
      flex: 1;
      min-width: 0;
    }
    .today-child .tc-name {
      font-family: var(--font-display);
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
    .today-child .tc-sub {
      color: var(--text-secondary);
      font-size: 13.5px;
      margin-top: 3px;
    }
    .today-child .tc-pct {
      font-family: var(--font-display);
      font-size: 28px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .tc-daily {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 248, 235, 0.08);
    }
    .tc-daily-tag {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--teal-pebble);
      margin-bottom: 5px;
    }
    .tc-daily-title {
      font-family: var(--font-display);
      font-size: 15.5px;
      font-weight: 600;
      letter-spacing: -0.005em;
    }

    /* ── Concept-parity classes (Today + My Cairn rebuilds) ─────── */
    .scope {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 7px 14px;
      border-radius: var(--radius-pill);
      font-size: 12.5px;
      font-weight: 600;
      border: 1px solid var(--glass-border);
    }
    .scope svg {
      width: 13px;
      height: 13px;
    }
    .scope.private {
      background: rgba(198, 123, 92, 0.16);
      color: var(--ink-terracotta);
      border-color: rgba(198, 123, 92, 0.4);
    }
    .scope.shared {
      background: rgba(61, 155, 143, 0.16);
      color: var(--ink-teal);
      border-color: rgba(61, 155, 143, 0.4);
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 18px;
      align-items: start;
    }
    @media (max-width: 1024px) {
      .grid-2 {
        grid-template-columns: 1fr;
      }
    }
    /* Today top row (Portal v4): left column stacks the half-width
       child card + Pebble's-daily; "Coming up" sits right, stretched
       to the full height of the left stack. */
    .today-top {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 18px;
      align-items: stretch;
    }
    .today-top-left {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    .today-top-left .daily {
      flex: 1;
    }
    /* The Recently-achieved / Growth-insight row sits directly under
       .today-top. Use the SAME column template so the Growth-insight
       card is exactly as wide as the "Coming up" card above it and
       the two right-hand cards align vertically (the shared .grid-2
       is 1fr 1.2fr — slightly wider — so it gets its own override
       here without disturbing My Cairn's grid-2). */
    .today-insight-row {
      grid-template-columns: 1fr 1.1fr;
      /* Override the parent .grid-2's align-items:start so the two
         glass-panels in this row stretch to the same height (the
         Recently-achieved card was sizing to its short content while
         the Growth-insight card was taller). */
      align-items: stretch;
    }
    .today-insight-row > glass-panel {
      height: 100%;
    }
    @media (max-width: 1024px) {
      .today-top {
        grid-template-columns: 1fr;
      }
      .today-insight-row {
        grid-template-columns: 1fr;
      }
    }
    .gico {
      width: 38px;
      height: 38px;
      border-radius: 11px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .gico svg {
      width: 19px;
      height: 19px;
    }
    .gico.trip {
      background: var(--gradient-tide);
      color: #0d2840;
    }
    .gico.event {
      background: var(--gradient-celebration);
      color: #5a3a1a;
    }
    /* External/imported sources — deliberately distinct from the
       trip (tide) + celebration (amber) palettes (Ellie ③). */
    .gico.holiday {
      background: var(--gradient-sage);
      color: #fff;
    }
    .gico.school {
      background: var(--gradient-cta);
      color: #fff;
    }
    .ms-row {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 13px 4px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.07);
    }
    .ms-row:last-child {
      border-bottom: none;
    }
    .ms-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .ms-dot.motor {
      background: #6b9ac4;
    }
    .ms-dot.language {
      background: #d4a843;
    }
    .ms-dot.social {
      background: #c98a8a;
    }
    .ms-dot.cognitive {
      background: #8b7bb5;
    }
    .ms-row .t {
      flex: 1;
      font-size: 14.5px;
      font-weight: 500;
    }
    .ms-row .t small {
      display: block;
      color: var(--text-tertiary);
      font-size: 12px;
      font-weight: 400;
      margin-top: 2px;
    }
    .ms-stat {
      padding: 4px 11px;
      border-radius: var(--radius-pill);
      font-size: 11.5px;
      font-weight: 600;
      white-space: nowrap;
    }
    .ms-stat.done {
      background: rgba(79, 194, 107, 0.18);
      color: var(--ink-green);
    }
    .ms-stat.emerging {
      background: rgba(212, 168, 67, 0.18);
      color: var(--ink-amber);
    }
    .ms-stat.up {
      background: var(--field-bg);
      color: var(--text-secondary);
      border: 1px solid var(--hairline);
    }
    .insight {
      display: flex;
      gap: 14px;
      padding: 16px;
      border-radius: var(--radius-tile);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      margin-bottom: 12px;
    }
    .insight:last-child {
      margin-bottom: 0;
    }
    .insight .strip {
      width: 4px;
      border-radius: 999px;
      flex-shrink: 0;
    }
    .insight.strength .strip {
      background: var(--teal-pebble);
    }
    .insight.watching .strip {
      background: var(--amber-glow);
    }
    .insight.connection .strip {
      background: var(--purple-muted);
    }
    .insight.nudge .strip {
      background: var(--terracotta);
    }
    .insight .ikind {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 5px;
      color: var(--text-secondary);
    }
    .insight.strength .ikind {
      color: var(--ink-teal);
    }
    .insight.watching .ikind {
      color: var(--ink-amber);
    }
    .insight.connection .ikind {
      color: var(--ink-purple);
    }
    .insight.nudge .ikind {
      color: var(--ink-terracotta);
    }
    .insight h4 {
      margin: 0 0 5px;
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 600;
    }
    .insight p {
      margin: 0;
      font-size: 13.5px;
      color: var(--text-secondary);
      line-height: 1.55;
    }
    .daily {
      border-radius: var(--radius-card);
      padding: 24px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #3d9b8f 0%, #1f5c54 100%);
      box-shadow: 0 12px 30px rgba(31, 92, 84, 0.4);
    }
    .daily::after {
      content: '';
      position: absolute;
      right: -30px;
      top: -30px;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.14), transparent 70%);
    }
    .daily .tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 10px;
    }
    .daily .tag svg {
      width: 13px;
      height: 13px;
    }
    .daily h3 {
      margin: 0 0 8px;
      font-family: var(--font-display);
      font-size: 19px;
      color: #fff;
      letter-spacing: -0.01em;
    }
    .daily p {
      margin: 0 0 16px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.88);
      line-height: 1.6;
    }
    .daily .ask {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 8px 16px;
      border-radius: var(--radius-pill);
      background: rgba(255, 255, 255, 0.16);
      border: 1px solid rgba(255, 255, 255, 0.28);
      color: #fff;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
    }
    .daily .ask:hover {
      background: rgba(255, 255, 255, 0.24);
    }
    /* 2026-05-28 — next-trip card (replaces the per-child Pebble Daily
       card). Fills the same left-column slot (flex:1) so it matches the
       Coming-up panel height, exactly like .daily did. */
    .today-top-left .next-trip {
      flex: 1;
    }
    .next-trip {
      position: relative;
      display: block;
      width: 100%;
      min-height: 200px;
      padding: 0;
      border: none;
      border-radius: var(--radius-card);
      overflow: hidden;
      cursor: pointer;
      text-align: left;
      background-size: cover;
      background-position: center;
      box-shadow: 0 12px 30px rgba(31, 92, 84, 0.22);
    }
    .next-trip .nt-scrim {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 38%,
        rgba(20, 12, 6, 0.62) 100%
      );
    }
    .next-trip .nt-overlay {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 18px 20px;
      z-index: 1;
    }
    .next-trip .nt-eyebrow {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 4px;
    }
    .next-trip .nt-title {
      font-family: var(--font-display);
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      letter-spacing: -0.01em;
      line-height: 1.1;
    }
    .next-trip .nt-dates {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.85);
      margin-top: 3px;
    }
    .next-trip.empty {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--glass-fill-strong);
      border: 1px dashed var(--glass-border-strong);
      box-shadow: none;
    }
    .next-trip .nt-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      padding: 24px;
      text-align: center;
      color: var(--text-secondary);
    }
    .next-trip .nt-empty-title {
      font-weight: 600;
      font-size: 15px;
      color: var(--text-primary);
    }
    .next-trip .nt-empty-sub {
      font-size: 13px;
      color: var(--ink-teal);
    }
    /* Close-the-loop Slice 3 (2026-05-28) — family-scope brief.
       Light informational surface (NOT the saturated teal .daily
       card), bullet-based, mirrors the iOS InformationalBriefCard. */
    .family-brief {
      margin-bottom: 16px;
    }
    /* Pebble watermark (top-left, faint, clipped by the panel's
       overflow:hidden) + content layered above it. */
    .fb-card {
      position: relative;
    }
    .fb-watermark {
      position: absolute;
      top: -30px;
      left: -26px;
      width: 150px;
      height: 115px;
      opacity: 0.1;
      pointer-events: none;
      z-index: 0;
    }
    .fb-content {
      position: relative;
      z-index: 1;
    }
    .fb-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 10px;
    }
    .fb-tag {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--ink-teal);
    }
    .fb-refresh {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      border-radius: 50%;
      border: 1px solid var(--glass-border-strong);
      background: transparent;
      color: var(--ink-teal);
      cursor: pointer;
    }
    .fb-refresh:hover:not(:disabled) {
      background: rgba(61, 155, 143, 0.12);
    }
    .fb-refresh:disabled {
      opacity: 0.5;
      cursor: default;
    }
    .fb-refresh.spinning svg {
      animation: fb-spin 0.9s linear infinite;
    }
    @keyframes fb-spin {
      to {
        transform: rotate(360deg);
      }
    }
    .fb-title {
      margin: 0 0 14px;
      font-family: var(--font-display);
      font-size: 19px;
      letter-spacing: -0.01em;
      color: var(--text-primary);
    }
    .fb-bullets {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .fb-bullet {
      display: flex;
      align-items: flex-start;
      gap: 11px;
    }
    .fb-ico {
      position: relative;
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .fb-ico-peb {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .fb-ico-glyph {
      position: relative;
      z-index: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .fb-ico-glyph svg {
      width: 14px;
      height: 14px;
    }
    .fb-text {
      font-size: 14px;
      line-height: 1.45;
      color: var(--text-primary);
    }
    .fb-body {
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
      color: var(--text-secondary);
    }
    /* Close-the-loop Slice 4 (2026-05-28) — "What Pebble Knows". */
    .wpk-back {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      margin: 0 0 6px;
      padding: 6px 12px 6px 8px;
      background: none;
      border: none;
      color: var(--ink-teal);
      font-family: var(--font-body);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border-radius: var(--radius-pill);
    }
    .wpk-back:hover {
      background: rgba(61, 155, 143, 0.1);
    }
    .wpk {
      margin-top: 8px;
    }
    .wpk-intro {
      font-size: 13px;
      color: var(--text-secondary);
      margin: 0 0 14px;
      padding: 0 2px;
      line-height: 1.5;
      max-width: 640px;
    }
    .wpk .section-head h3 {
      font-family: var(--font-display);
      font-size: 15px;
      margin: 0;
      letter-spacing: -0.01em;
    }
    .wpk-sub {
      font-size: 12px;
      color: var(--text-secondary);
      margin-bottom: 10px;
    }
    .wpk-empty {
      font-size: 13px;
      color: var(--text-tertiary);
      padding: 6px 2px;
      line-height: 1.5;
    }
    .wpk-rows {
      display: flex;
      flex-direction: column;
    }
    .wpk-row {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px solid var(--glass-border);
    }
    .wpk-row:last-child {
      border-bottom: none;
    }
    .wpk-ico {
      flex-shrink: 0;
      width: 22px;
      color: var(--ink-teal);
      display: inline-flex;
      align-items: center;
      padding-top: 1px;
    }
    .wpk-body {
      flex: 1;
      min-width: 0;
    }
    .wpk-primary {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-primary);
      line-height: 1.4;
    }
    .wpk-secondary {
      font-size: 13px;
      color: var(--text-secondary);
      margin-top: 1px;
    }
    .wpk-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      align-items: center;
      margin-top: 5px;
    }
    .wpk-scope {
      font-size: 11px;
      font-weight: 600;
      padding: 1px 8px;
      border-radius: var(--radius-pill);
      border: 1px solid currentColor;
      white-space: nowrap;
    }
    .wpk-scope.family {
      color: var(--ink-teal);
    }
    .wpk-scope.child {
      color: var(--ink-blue);
    }
    .wpk-scope.member {
      color: var(--ink-terracotta);
    }
    .wpk-hint {
      font-size: 11px;
      font-style: italic;
      color: var(--text-tertiary);
    }
    .wpk-toggle {
      margin-top: 8px;
      background: none;
      border: none;
      color: var(--ink-teal);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      padding: 4px 0;
    }
    .child-card {
      display: flex;
      align-items: center;
      gap: 22px;
      flex-wrap: wrap;
    }
    .child-photo {
      position: relative;
      display: inline-flex;
      border-radius: 999px;
      padding: 3px;
      background: var(--teal-pebble);
    }
    .child-meta {
      min-width: 0;
    }
    .child-meta h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 26px;
      letter-spacing: -0.02em;
    }
    .child-meta .sub {
      color: var(--text-secondary);
      font-size: 14px;
      margin-top: 3px;
    }
    .child-meta .age-pill {
      display: inline-block;
      margin-top: 10px;
      padding: 4px 12px;
      border-radius: var(--radius-pill);
      font-size: 12.5px;
      font-weight: 600;
      background: rgba(61, 155, 143, 0.18);
      color: var(--ink-teal);
      border: 1px solid rgba(61, 155, 143, 0.35);
    }
    /* Identity · headline-stat as ONE left-aligned cluster with a
       hairline divider (consistent with the Children card). */
    .child-progress {
      margin-left: 6px;
      padding-left: 28px;
      border-left: 1px solid var(--hairline);
      text-align: left;
    }
    .child-progress .big {
      font-family: var(--font-display);
      font-size: 30px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .child-progress .lbl {
      color: var(--text-secondary);
      font-size: 12.5px;
      margin-top: 2px;
    }
    /* Phones: keep the Today hero card a SINGLE simple row — avatar ·
       name/age · % on one line (Thomas). Shrink the % to fit beside
       the identity; drop the divider/indent. */
    @media (max-width: 560px) {
      .child-card {
        flex-wrap: nowrap;
        align-items: center;
      }
      .child-meta {
        flex: 1;
        min-width: 0;
      }
      .child-meta h2 { font-size: 20px; }
      .child-meta .sub { font-size: 13px; }
      .child-progress {
        flex-shrink: 0;
        margin-left: 0;
        padding-left: 0;
        border-left: none;
        text-align: right;
      }
      .child-progress .big { font-size: 22px; }
      .child-progress .lbl { font-size: 11px; }
    }
    .cta-card {
      display: flex;
      align-items: center;
      gap: 18px;
      flex-wrap: wrap;
    }
    .cta-card .ic {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background: var(--gradient-cta);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-shrink: 0;
    }
    .cta-card .ic svg {
      width: 22px;
      height: 22px;
    }
    .cta-card .tx {
      flex: 1;
      min-width: 200px;
    }
    .cta-card .tx h4 {
      margin: 0 0 4px;
      font-family: var(--font-display);
      font-size: 16px;
    }
    .cta-card .tx p {
      margin: 0;
      font-size: 13px;
      color: var(--text-secondary);
    }
    .btn-primary {
      padding: 10px 18px;
      border-radius: var(--radius-pill);
      font-weight: 600;
      font-size: 13.5px;
      background-image: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      cursor: pointer;
      box-shadow:
        0 4px 14px rgba(139, 90, 62, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
    }
    .btn-primary:hover {
      background-image: var(--gradient-cta-hover);
    }
    .set-row {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 15px 4px;
      border-bottom: 1px solid var(--hairline);
    }
    .set-row:last-child {
      border-bottom: none;
    }
    .theme-seg {
      display: inline-flex;
      flex-shrink: 0;
      padding: 3px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
    }
    .theme-seg button {
      /* min-height keeps it a comfortable tap target on mobile
         (was ~27px — too small for touch). */
      min-height: 34px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 6px 15px;
      border-radius: var(--radius-pill);
      border: none;
      background: transparent;
      color: var(--text-tertiary);
      font-family: var(--font-body);
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      transition: all 150ms ease;
    }
    .theme-seg button.on {
      background: rgba(61, 155, 143, 0.22);
      color: var(--text-primary);
      box-shadow: inset 0 0 0 1px rgba(61, 155, 143, 0.45);
    }
    .set-row .si {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: var(--glass-fill-strong);
      border: 1px solid var(--glass-border);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      flex-shrink: 0;
    }
    .set-row .si svg {
      width: 16px;
      height: 16px;
    }
    .set-row .sl {
      flex: 1;
      min-width: 0;
    }
    .set-row .sl b {
      font-size: 14.5px;
      font-weight: 600;
      display: block;
    }
    .set-row .sl span {
      font-size: 12.5px;
      color: var(--text-secondary);
    }
    /* Right-side INFO label (e.g. Premium "Managed in the app").
       Deliberately NOT a pill/button — every other set-row has an
       actionable control on the right, so a bare row read as broken;
       this muted, control-less text keeps the row grammar consistent
       while clearly signalling "informational, not actionable". */
    .set-row .set-meta {
      flex-shrink: 0;
      font-size: 12.5px;
      color: var(--text-tertiary);
      font-style: italic;
    }
    /* 2026-05-23 — Join-another-family row: input + button live in
       the row right column (flex grid: si | sl | join-cluster),
       aligned with the rest of the settings rows pill/badge slot.
       On narrow viewports the row wraps so the input+button drop to
       a new line below the .sl (still inside the row). The
       .set-row-join-another wrapper class flips flex-wrap + adjusts
       margin-top on the wrapped state. */
    .join-cluster {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }
    .set-row-join-another {
      flex-wrap: wrap;
    }
    .set-row-join-another > .join-feedback {
      /* Errors / success copy wraps onto a full-width row below the
         input + button. The negative left-margin counts back past
         the icon column so the feedback aligns under the label
         text (visual hierarchy: feedback applies to the label). */
      flex-basis: 100%;
      margin-left: 50px;
    }
    @media (max-width: 560px) {
      .set-row-join-another > .join-cluster {
        flex-basis: 100%;
        margin-left: 50px;
        margin-top: 6px;
      }
    }
    .join-cluster input.join-code {
      width: 110px;
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo,
        monospace);
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 4px;
      text-transform: uppercase;
      text-align: center;
      padding: 7px 8px;
      border-radius: var(--radius-input);
      background: var(--glass-fill-strong);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
    }
    .join-cluster input.join-code:focus {
      outline: none;
      border-color: var(--terracotta);
    }
    .join-cluster button.join-go {
      padding: 7px 14px;
      border-radius: var(--radius-pill);
      background: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      cursor: pointer;
      font: inherit;
      font-weight: 600;
      font-size: 12.5px;
    }
    .join-cluster button.join-go:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .join-error {
      margin-top: 8px;
      font-size: 12px;
      color: var(--rose-soft, var(--terracotta));
    }
    .join-success {
      margin-top: 8px;
      font-size: 12.5px;
      color: var(--text-secondary);
    }
    .set-pill {
      display: inline-flex;
      align-items: center;
      padding: 4px 11px;
      border-radius: var(--radius-pill);
      font-size: 11.5px;
      font-weight: 600;
      background: rgba(255, 248, 235, 0.1);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
    }
    .ring-note {
      font-size: 12.5px;
      color: var(--text-tertiary);
      line-height: 1.5;
      margin-top: 10px;
      padding: 0 4px;
    }
    /* Compact header (Pebble tab) — pulls the chat box up so its top
       sits right under the "Pebble" title instead of floating low. */
    .hello.tight {
      margin-bottom: 14px;
      align-items: center;
    }
    .hello.tight h1 {
      font-size: 26px;
      line-height: 1.1;
    }
  `;

  _liveImmediate() {
    if (this.preview || !this.user?.uid) {
      return mockMembers.filter((m) => m.circles.includes('immediate'));
    }
    return deriveImmediateMembers(
      this.user.uid,
      this.user,
      this.pebbleUser,
      this.family,
      this.children,
    );
  }

  _liveExtended() {
    if (this.preview) return mockMembers.filter((m) => m.circles.includes('extended'));
    // Previously hard-coded to [] — that was the bug where joined
    // connection-ring members never appeared on the dashboard. Read
    // the connection ring from the family doc instead. `children` is
    // accepted by deriveExtendedMembers for signature stability but is
    // not surfaced to non-parent viewers (children stay private to
    // parents); see deriveExtendedMembers for the viewer-perspective
    // rule.
    return deriveExtendedMembers(this.user?.uid, this.family, this.children);
  }

  /** Flat-family Phase 2B Slice 3b-ii — the "Connections" picker
   *  group: people across the family's `connectedFamilyIds`. Async,
   *  so it reads the cached `_connectionMembers` state (populated by
   *  `_refreshConnectionMembers` from `updated()`); empty in preview. */
  _liveConnections() {
    if (this.preview) return [];
    return this._connectionMembers ?? [];
  }

  async _refreshConnectionMembers() {
    if (this.preview || !this.family) {
      this._connectionMembers = [];
      return;
    }
    try {
      this._connectionMembers = await deriveConnectionMembers(
        this.user?.uid,
        this.family,
      );
    } catch {
      this._connectionMembers = []; // best-effort — never block the UI
    }
  }

  /** Lit lifecycle. Only re-fetch connection members when the family's
   *  id or its `connectedFamilyIds` set actually changes (the dedup
   *  key) — assigning `_connectionMembers` re-renders but doesn't
   *  change `family`, so this can't loop. */
  updated(changed) {
    if (changed.has('family')) {
      const ids = Array.isArray(this.family?.connectedFamilyIds)
        ? this.family.connectedFamilyIds
        : [];
      const key = `${this.family?.id ?? ''}|${[...ids].sort().join(',')}`;
      if (key !== this._connKey) {
        this._connKey = key;
        this._refreshConnectionMembers();
      }
    }
    if (changed.has('_activeTab')) {
      this._positionTabSlider({ animate: true });
      // Pop the "What Pebble knows" drill-down when leaving Settings so
      // returning to the tab lands on the root (matches iOS pop-on-leave).
      if (this._activeTab !== 'cairn' && this._wpkOpen) {
        this._wpkOpen = false;
      }
    }
    // 2026-05-24 — design 28. Manage plan-item subscriptions for the
    // visible-week trip set. Week-only subscription set so non-week
    // views don't carry the subscription cost. Re-evaluates whenever
    // the view changes, the visible-week start advances, or the trips
    // snapshot listener pushes a new set.
    if (
      changed.has('_calendarView') ||
      changed.has('_displayWeekStart') ||
      changed.has('trips')
    ) {
      if (this._calendarView === 'week') {
        this._syncWeekPlanSubs();
      } else if (changed.has('_calendarView')) {
        // Only tear down on a view-transition AWAY from week — not
        // every render while we're not in week mode.
        this._dropAllWeekPlanSubs();
      }
    }
  }

  _liveTrips() {
    if (this.preview) return mockTrips;
    return this.trips ?? [];
  }

  _liveEvents() {
    if (this.preview) return mockEvents;
    // Auto-derived children birthdays + manual familyEvents from Firestore.
    // Birthdays are inherently recurring — resolve them to this/next-year's
    // occurrence so they show on the yearly calendar in the right column,
    // not stuck on the birth year. formatLocalDate keeps the YYYY-MM-DD
    // in local time (toISOString shifts by a day west of UTC).
    const resolve = (e) => {
      const { date, yearsElapsed } = resolveEventOccurrence(e);
      return {
        ...e,
        date: date ? formatLocalDate(date) : e.date,
        _yearsElapsed: yearsElapsed,
        _originalDate: e.date,
      };
    };
    const autoEvents = deriveBirthdayEvents(this.children).map(resolve);
    const manualEvents = (this.events ?? []).map(resolve);
    return [...autoEvents, ...manualEvents].sort((a, b) =>
      String(a.date).localeCompare(String(b.date)),
    );
  }

  _filteredMembers() {
    const immediate = this._liveImmediate();
    const extended = this._liveExtended();
    if (this.circle === 'personal') {
      return immediate.filter((m) => m.uid === this.user?.uid);
    }
    if (this.circle === 'family') return immediate;
    return [...immediate, ...extended];
  }

  /** All trips for the current circle (past + future). Applies the
   *  per-user visibility resolver so a viewer never sees trips they
   *  weren't included in, then dedupes by trip id as a safety net
   *  against legacy duplicates lingering in Firestore. */
  _circleTrips() {
    const trips = this._liveTrips();
    const uid = this.user?.uid ?? 'thomas';
    let scoped;
    if (this.circle === 'personal') {
      scoped = trips.filter((t) => t.attendees?.includes(uid));
    } else if (this.circle === 'family') {
      scoped = trips.filter(
        (t) => t.visibility !== 'extended' && this._userCanSeeTrip(t),
      );
    } else {
      scoped = trips.filter((t) => this._userCanSeeTrip(t));
    }
    const seen = new Set();
    const out = [];
    for (const t of scoped) {
      const key = t.id ?? `${t.title}|${t.start}|${t.end}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(t);
    }
    return out;
  }

  /** Upcoming + ongoing trips only — for the "Coming up" feed. */
  _filteredTrips() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this._circleTrips().filter((t) => {
      if (!t.end) return true;
      return parseLocalDate(t.end) >= today;
    });
  }

  /** Trip visibility resolver — decides whether the viewer should see
   *  this trip in their feed.
   *
   *  Parents (`memberIds`) see EVERY trip in their family regardless
   *  of the visibility flag — they're the household; trips scoped to
   *  "extended" or with no visibility set still belong to them. This
   *  is also a safety net for legacy trips written before the
   *  visibility field defaulted to 'family' in trip-form.
   *
   *  Non-parent members (in `cairnMemberIds` but not `memberIds`) see
   *  trips where they're explicitly named (attendees / viewers) OR
   *  where visibility is `family` / `extended` — the whole point of
   *  the connection ring is to share trips beyond the parents.
   *  Personal trips stay creator-only.
   */
  _userCanSeeTrip(trip) {
    const uid = this.user?.uid;
    if (!uid) return false;
    if (trip.attendees?.includes(uid)) return true;
    if (trip.viewers?.includes(uid)) return true;

    const memberIds = this.family?.memberIds ?? [];
    const cairnIds = this.family?.cairnMemberIds ?? memberIds;
    const isParent = memberIds.includes(uid);
    const isConnectionMember = cairnIds.includes(uid);

    // Parents see everything in their family.
    if (isParent) return true;

    // Outside the ring entirely: no read.
    if (!isConnectionMember) return false;

    // Non-parent members: family + extended trips, with optional
    // sub-group targeting for extended.
    const visibility = trip.visibility || 'family';
    if (visibility === 'personal') return false;
    if (visibility === 'family') return true;
    if (visibility === 'extended') {
      const targets = trip.targetSubGroups ?? [];
      if (targets.length === 0) return true;
      const myGroups = Object.entries(this.family?.subGroups ?? {})
        .filter(([, g]) => (g.memberIds ?? []).includes(uid))
        .map(([id]) => id);
      return targets.some((t) => myGroups.includes(t));
    }
    return false;
  }

  _filteredEvents() {
    const memberIds = new Set(this._filteredMembers().map((m) => m.uid));
    return this._liveEvents().filter((e) => {
      // Defensive: a Firestore event doc can lack `personIds` (legacy
      // docs, or docs imported without the field). Without this guard
      // `.some()` throws TypeError and the whole Today tab + nav-bar
      // render bails. Treat missing personIds as "applies to no one"
      // — the event drops out of the filter rather than crashing.
      const ids = Array.isArray(e?.personIds) ? e.personIds : [];
      return ids.some((id) => memberIds.has(id));
    });
  }

  /**
   * Smart hero greeting — returns a relative-time callout for the next
   * notable event (ongoing trip, upcoming trip, upcoming celebration).
   * Returns null when nothing close enough warrants a callout, in which
   * case the dashboard falls back to the plain stat line.
   */
  _smartCallout() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dayMs = 24 * 60 * 60 * 1000;
    const daysFromToday = (d) => Math.round((d - today) / dayMs);

    // 2026-05-24 — dropped the ongoing-trip callout ("Day N of M in
    // X."). Two reasons: (a) it told the user something they already
    // know — they're on the trip right now — so it didn't earn its
    // hero-line spot; (b) the original math was inverted —
    // `dayN = daysFromToday(s) + 1` where `daysFromToday(s) = (s -
    // today)/dayMs`, so for any past start the dayN went negative
    // (started 4 days ago → "Day -3 of 5"). The ongoing-trip case
    // is still visible elsewhere — it appears in Coming up + on the
    // Activities tab — so removing this branch doesn't hide the
    // trip, just stops it from owning hero-line attention.

    // 2. Find the soonest upcoming trip OR event, whichever is closer.
    let best = null;
    let bestDays = Infinity;

    for (const t of this._circleTrips()) {
      if (!t.start) continue;
      const s = parseLocalDate(t.start);
      if (!s) continue;
      const d = daysFromToday(s);
      if (d > 0 && d < bestDays) {
        best = { kind: 'trip', item: t };
        bestDays = d;
      }
    }
    for (const ev of this._filteredEvents()) {
      if (!ev.date) continue;
      const d = parseLocalDate(ev.date);
      if (!d) continue;
      const delta = daysFromToday(d);
      if (delta >= 0 && delta < bestDays) {
        best = { kind: 'event', item: ev };
        bestDays = delta;
      }
    }
    if (!best) return null;

    if (best.kind === 'trip') {
      const where = best.item.location?.trim() || best.item.title;
      if (bestDays === 1) return `${where} starts tomorrow.`;
      if (bestDays <= 14) return `${where} in ${bestDays} days.`;
      // Anything 15+ days out is still worth a quiet preview but less
      // urgent-feeling — keep it factual.
      if (bestDays <= 60) return `Next trip: ${where} in ${bestDays} days.`;
      return null;
    }
    // Event callouts: only louder when really close.
    if (bestDays === 0) return `${best.item.title} — today.`;
    if (bestDays === 1) return `${best.item.title} — tomorrow.`;
    if (bestDays <= 7) return `${best.item.title} in ${bestDays} days.`;
    return null;
  }

  _tripDensityByDay(year) {
    const map = new Map();
    for (const t of this._filteredTrips()) {
      if (!t.start || !t.end) continue;
      const s = parseLocalDate(t.start);
      const e = parseLocalDate(t.end);
      if (Number.isNaN(s.getTime()) || Number.isNaN(e.getTime())) continue;
      if (s.getFullYear() > year || e.getFullYear() < year) continue;
      const cursor = new Date(Math.max(s, new Date(year, 0, 1)));
      const stop = new Date(Math.min(e, new Date(year, 11, 31)));
      while (cursor <= stop) {
        const key = `${String(cursor.getMonth() + 1).padStart(2, '0')}-${String(cursor.getDate()).padStart(2, '0')}`;
        map.set(key, Math.min(1, (map.get(key) ?? 0) + 0.5));
        cursor.setDate(cursor.getDate() + 1);
      }
    }
    return map;
  }

  _shiftMonth(delta) {
    const cur = this._displayMonth;
    this._displayMonth = new Date(cur.getFullYear(), cur.getMonth() + delta, 1);
  }

  _jumpToMonth(year, month) {
    this._displayMonth = new Date(year, month, 1);
  }

  _resetToToday() {
    const t = new Date();
    this._displayMonth = new Date(t.getFullYear(), t.getMonth(), 1);
  }


  /**
   * Render a single cairn stone with overlapping member chips. Empty
   * lists render as a dashed "invite" stone instead — the action lives
   * on the stone itself so the user clicks the visual rather than
   * hunting for a separate "+ Invite" button.
   */
  /**
   * Render a cairn stone.
   *
   * Drop-target opt-in: pass `dropTargetId` ('extended' or a sub-group
   * id) and the stone wires up dragover/drop so non-parent members can
   * be moved between rings by drag.
   *
   * Chip draggability: each chip is draggable when `draggable(member)`
   * returns true (typically: non-parent members, not self, not parents).
   * dragstart writes `text/cairn-uid` to dataTransfer; that's what the
   * drop handler reads back.
   */

  _openCreate() {
    if (this.preview) {
      toast('Sign in to create real activities.');
      return;
    }
    if (!dataStore.familyId) {
      toast('You need a PebblePath family first.');
      return;
    }
    // Opens the type picker first; selection routes to the right form
    // with the right field-set (trip form full vs. activity-only, or
    // event form for birthdays/anniversaries).
    this._typePickerOpen = true;
  }

  _onTypePicked(e) {
    this._typePickerOpen = false;
    const type = e.detail.type;
    if (type === 'event') {
      this._eventFormEvent = null;
      this._eventFormOpen = true;
      return;
    }
    if (type === 'import') {
      this._importOpen = true;
      return;
    }
    // 'trip' or 'activity' both open trip-form, with different field sets.
    this._formMode = type;
    this._formTrip = null;
    this._formOpen = true;
  }

  /** Open the collaborative day planner for a trip (card-body tap).
   *  The pencil icon on the card is the EDITOR (_openEdit); the card
   *  body opens the PLANNER. */
  _openPlanner(trip) {
    this._plannerTrip = trip;
    this._plannerOpen = true;
    // The inline planner lives on the Activities tab — jump there so
    // it un-collapses in view regardless of where the card was tapped.
    this._activeTab = 'activities';
    // Portal v4 — gently scroll the now-open planner into view after
    // the tab + planner have rendered (two RAFs lets the expand
    // layout settle so the scroll lands accurately).
    this.updateComplete.then(() => {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          const pl = this.renderRoot?.querySelector('trip-planner');
          pl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }),
      );
    });
  }

  /** 2026-05-22 — Calendar Mode B done-screen "Open day plan" handler.
   *  ImportCalendarModal fires `open-trip-planner` with `detail.tripId`;
   *  we look up the trip in dataStore + route to its planner. Closes the
   *  import modal first so the planner has the foreground when it lands.
   *  Mirrors iOS's app.pendingTripPlannerOpen → ActivitiesView pickup. */
  _onOpenTripPlannerFromImport(e) {
    const tripId = e?.detail?.tripId;
    if (!tripId) return;
    this._importOpen = false;
    const trip = (dataStore.state.trips ?? []).find((t) => t.id === tripId);
    if (!trip) return;
    // Defer one tick so the just-closed import modal is fully out of
    // the DOM stacking context before the planner expands.
    requestAnimationFrame(() => this._openPlanner(trip));
  }

  _openEdit(trip) {
    if (this.preview) {
      toast('Sign in to edit real activities.');
      return;
    }
    // For edits: infer field-set from existing data. If the trip has
    // any lodging or flight info, treat it as a full Family Trip;
    // otherwise it's a Group Activity (compact form).
    const hasLodgingOrFlight =
      trip.lodgingUrl ||
      trip.lodgingHost ||
      trip.flightNumber ||
      trip.flightDepartAirport;
    this._formMode = hasLodgingOrFlight ? 'trip' : 'activity';
    this._formTrip = trip;
    this._formOpen = true;
  }

  async _onSaveTrip(e) {
    const trip = e.detail;
    this._formBusy = true;
    try {
      await dataStore.saveTrip(trip);
      this._formOpen = false;
      this._formTrip = null;
      toast(trip.id ? 'Trip updated.' : 'Trip created.');
    } catch (err) {
      console.error('Save trip failed:', err);
      toast(`Couldn't save: ${err.code ?? err.message}`, { duration: 5000 });
    } finally {
      this._formBusy = false;
    }
  }

  async _onDeleteTrip(e) {
    this._formBusy = true;
    try {
      await dataStore.deleteTrip(e.detail.id);
      this._formOpen = false;
      this._formTrip = null;
      toast('Trip deleted.');
    } catch (err) {
      console.error('Delete trip failed:', err);
      toast(`Couldn't delete: ${err.code ?? err.message}`, { duration: 5000 });
    } finally {
      this._formBusy = false;
    }
  }

  _openCreateEvent() {
    if (this.preview) {
      toast('Sign in to add real events.');
      return;
    }
    if (!dataStore.familyId) {
      toast('You need a family first.');
      return;
    }
    this._eventFormEvent = null;
    this._eventFormOpen = true;
  }

  _openEditEvent(event) {
    if (this.preview) {
      toast('Sign in to edit real events.');
      return;
    }
    // Birthdays auto-derived from /children/ get routed to a child-edit
    // dialog instead — they live on the child doc, not on familyEvents.
    if (event?._childId) {
      const newDate = prompt(
        `Edit ${event._childName}'s birthday (YYYY-MM-DD):`,
        event.date,
      );
      if (!newDate) return;
      if (!/^\d{4}-\d{2}-\d{2}$/.test(newDate)) {
        toast('Use YYYY-MM-DD format.');
        return;
      }
      dataStore
        .updateChildBirthday(event._childId, new Date(newDate))
        .then(() => toast(`Updated ${event._childName}'s birthday.`))
        .catch((err) => {
          console.error('Update child birthday failed:', err);
          toast(`Couldn't update: ${err.code ?? err.message}`, { duration: 5000 });
        });
      return;
    }
    // Manual event from /familyEvents — open the form. Use the ORIGINAL
    // stored date (not the resolved next-occurrence) so editing recurring
    // events preserves their anchor year.
    this._eventFormEvent = {
      ...event,
      date: event._originalDate ?? event.date,
    };
    this._eventFormOpen = true;
  }

  async _onSaveEvent(e) {
    this._eventFormBusy = true;
    try {
      await dataStore.saveEvent(e.detail);
      this._eventFormOpen = false;
      this._eventFormEvent = null;
      toast(e.detail.id ? 'Event updated.' : 'Event added.');
    } catch (err) {
      console.error('Save event failed:', err);
      toast(`Couldn't save: ${err.code ?? err.message}`, { duration: 5000 });
    } finally {
      this._eventFormBusy = false;
    }
  }

  async _onDeleteEvent(e) {
    this._eventFormBusy = true;
    try {
      await dataStore.deleteEvent(e.detail.id);
      this._eventFormOpen = false;
      this._eventFormEvent = null;
      toast('Event deleted.');
    } catch (err) {
      console.error('Delete event failed:', err);
      toast(`Couldn't delete: ${err.code ?? err.message}`, { duration: 5000 });
    } finally {
      this._eventFormBusy = false;
    }
  }

  /** The 5-tab nav that replaced the centre-column Pebble search.
   *  Pebble's tab icon reuses the EXACT live Pebble glyph; the four
   *  other tabs are new surfaces so they take new icons. */
  /** Pebble (child-development advisor) is for parents AND
   *  parent-APPROVED childViewers (Thomas, 2026-05-17 — an approved
   *  viewer gets read-only child data AND full Pebble, same as
   *  parents; the `askPebbleAboutChild` CF + Firestore rules admit
   *  childViewers). Non-parent ring members with NO approval get NO
   *  Pebble — the tab is removed from the nav entirely (replaces the
   *  old activities-advisor fallback). Preview keeps it (mock=parent).
   */
  get _pebbleAvailable() {
    return this.preview || this.ppIsMember || this.ppIsChildViewer;
  }

  _tabDefs() {
    const pebbleTab = {
      id: 'pebble',
      label: 'Pebble',
      // 2026-05-23 — Pebble Ripple Stone (was double-ring target).
      // currentColor inherits the active/inactive tab tint.
      icon: html`<pebble-icon></pebble-icon>`,
    };
    // 2026-05-23 — tab order: Today · Children · Pebble (centre) ·
    // Activities · Settings. Matches iOS AppTab.allCases order so the
    // middle slot is Pebble on both surfaces (parity).
    // Activities icon updated to mountain.2 style (matching iOS
    // mountain.2.fill SF Symbol).
    return [
      {
        id: 'today',
        label: 'Today',
        icon: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9" /><path d="M5 10v10h14V10" /></svg>`,
      },
      {
        id: 'children',
        label: 'Children',
        icon: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4" /><path d="M5 21c0-4 3-6 7-6s7 2 7 6" /></svg>`,
      },
      ...(this._pebbleAvailable ? [pebbleTab] : []),
      {
        id: 'activities',
        label: 'Activities',
        // 2026-05-23 — pixel-identical to iOS (same mountain.png
        // asset). Rendered via CSS mask + background:currentColor
        // so the icon TINTS to the nav text color (white on the
        // dark-teal topbar). Pure <img> renders the PNG black —
        // visible but off-brand. Mask + currentColor lets the icon
        // inherit whatever color cascade from the tab matches the
        // other inline SVG icons.
        icon: html`<span
          class="mountain-icon"
          style="--mountain-src:url(${import.meta.env.BASE_URL}mountain.png)"
          aria-hidden="true"
        ></span>`,
      },
      {
        id: 'cairn',
        label: 'Settings',
        icon: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>`,
      },
    ];
  }

  /** Desktop/tablet: tabs centred in the 68px topbar. */
  _renderTabBar() {
    return html`
      <nav class="tabs" role="tablist" aria-label="Sections">
        <span class="tab-slider" aria-hidden="true"></span>
        ${this._tabDefs().map(
          (t) => html`<button
            class="tab ${this._activeTab === t.id ? 'active' : ''}"
            role="tab"
            aria-selected=${this._activeTab === t.id ? 'true' : 'false'}
            @click=${() => (this._activeTab = t.id)}
          >
            ${t.icon}<span>${t.label}</span>
          </button>`,
        )}
      </nav>
    `;
  }

  // ── Top-tab sliding liquid-glass indicator ──────────────────────
  // The active visual is a single absolutely-positioned `.tab-slider`
  // that rides inside `.tabs`. We measure the active tab's
  // offsetLeft + offsetWidth and write them to the slider's inline
  // `transform: translateX()` / `width:` — the CSS cubic-bezier
  // transition (.tab-slider in static styles) then animates the move.
  // First mount snaps in place (no slide-from-zero); subsequent
  // _activeTab changes animate.
  // Position BOTH the top-tab slider and the mobile bottom-nav slider.
  // Either container may be display:none at a given viewport (the
  // mobile breakpoint hides .tabs; the desktop one hides .bottomnav),
  // in which case offsetParent === null and we skip — the slider stays
  // at width:0/opacity:0 until its container becomes visible.
  _positionTabSlider({ animate = true } = {}) {
    this._slideOn('.tabs', '.tab-slider', '.tab.active', animate);
    this._slideOn('.bottomnav', '.bn-slider', '.bn-tab.active', animate);
  }

  _slideOn(containerSel, sliderSel, activeSel, animate) {
    const container = this.renderRoot?.querySelector(containerSel);
    if (!container) return;
    const slider = container.querySelector(sliderSel);
    const active = container.querySelector(activeSel);
    if (!slider || !active) return;
    // offsetParent === null when this side of the tab system is
    // display:none at the current viewport (mobile bottomnav on
    // desktop / desktop tabs on mobile).
    if (active.offsetParent === null) return;
    if (!animate) {
      // Snap into position on first paint (and on resize) without
      // sliding from 0 — kill the transition for this frame, force
      // a reflow, then restore it.
      const prev = slider.style.transition;
      slider.style.transition = 'none';
      slider.style.transform = `translateX(${active.offsetLeft}px)`;
      slider.style.width = `${active.offsetWidth}px`;
      // eslint-disable-next-line no-unused-expressions
      slider.offsetWidth; // force reflow
      slider.classList.add('ready');
      requestAnimationFrame(() => {
        slider.style.transition = prev || '';
      });
      return;
    }
    slider.classList.add('ready');
    slider.style.transform = `translateX(${active.offsetLeft}px)`;
    slider.style.width = `${active.offsetWidth}px`;
  }

  firstUpdated(changedProps) {
    super.firstUpdated?.(changedProps);
    this._positionTabSlider({ animate: false });
    if (typeof ResizeObserver !== 'undefined') {
      this._tabsRO = new ResizeObserver(() => {
        this._positionTabSlider({ animate: false });
      });
      const tabs = this.renderRoot?.querySelector('.tabs');
      const bnav = this.renderRoot?.querySelector('.bottomnav');
      if (tabs) this._tabsRO.observe(tabs);
      if (bnav) this._tabsRO.observe(bnav);
    }
  }

  disconnectedCallback() {
    this._tabsRO?.disconnect();
    this._tabsRO = null;
    // 2026-05-24 — design 28. Tear down any active plan-item
    // listeners so they don't leak past component lifetime.
    this._dropAllWeekPlanSubs();
    super.disconnectedCallback();
  }

  /** Phones (≤720px): a real iOS-style fixed bottom tab bar — the
   *  same mental model as the PebblePath app. Rendered as a SIBLING
   *  of .topbar / <main> (NOT a child of .topbar) so it escapes the
   *  backdrop-filter containing-block trap and stays fixed to the
   *  viewport. CSS shows it only ≤720px and hides the topbar tabs. */
  _renderBottomNav() {
    return html`
      <nav class="bottomnav" role="tablist" aria-label="Sections">
        <span class="bn-slider" aria-hidden="true"></span>
        ${this._tabDefs().map(
          (t) => html`<button
            class="bn-tab ${this._activeTab === t.id ? 'active' : ''}"
            role="tab"
            aria-selected=${this._activeTab === t.id ? 'true' : 'false'}
            @click=${() => {
              this._activeTab = t.id;
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            ${t.icon}<span>${t.label}</span>
          </button>`,
        )}
      </nav>
    `;
  }

  _renderActiveTab() {
    switch (this._activeTab) {
      case 'children':
        return this._renderChildrenTab();
      case 'activities':
        return this._renderActivitiesTab();
      case 'pebble':
        return this._renderPebbleTab();
      case 'cairn':
        return this._renderCairnTab();
      default:
        return this._renderTodayTab();
    }
  }

  /** Today's greeting — the only header carrying the editable
   *  family-name affordance + smart callout (verbatim from the
   *  pre-tabs dashboard, just scoped to this tab). */
  _renderTodayHeader(rightSlot = '') {
    const firstName = (this.user?.displayName ?? 'there').split(' ')[0];
    const filteredEvents = this._filteredEvents();
    const today = new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const eventsThisMonth = filteredEvents.filter((e) => {
      const d = parseLocalDate(e.date);
      return d && d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth();
    });
    const tripsThisMonth = this._circleTrips().filter((t) => {
      if (!t.start || !t.end) return false;
      const s = parseLocalDate(t.start);
      const e = parseLocalDate(t.end);
      if (Number.isNaN(s.getTime()) || Number.isNaN(e.getTime())) return false;
      return s <= monthEnd && e >= monthStart;
    });
    const activitiesThisMonth = tripsThisMonth.length + eventsThisMonth.length;
    return html`
        <div class="hello">
          <div>
            <h1>Hi ${firstName}.</h1>
            ${(() => {
              const callout = this._smartCallout();
              return callout ? html`<div class="smart">${callout}</div>` : '';
            })()}
            ${activitiesThisMonth > 0
              ? html`<div class="stat">
                  <span>${activitiesThisMonth}</span> ${activitiesThisMonth === 1 ? 'activity' : 'activities'} this month
                </div>`
              : ''}
            ${this.family
              ? this._editingFamilyName
                ? html`<input
                    class="family-name-input"
                    type="text"
                    .value=${this.family.name ?? ''}
                    autofocus
                    @blur=${this._saveFamilyName}
                    @keydown=${(e) => {
                      if (e.key === 'Enter') e.target.blur();
                      if (e.key === 'Escape') {
                        e.target.value = this.family.name ?? '';
                        this._editingFamilyName = false;
                      }
                    }}
                  />`
                : html`<div
                    class="family-name"
                    title="Click to rename"
                    @click=${() => (this._editingFamilyName = true)}
                  >
                    ${this.family.name || 'Tap to name your family'}
                  </div>`
              : ''}
          </div>
          ${rightSlot}
        </div>
    `;
  }

  /** Plain header for the non-Today tabs — reuses .hello styling so
   *  every tab shares one header grammar. */
  _renderTabHeader(title, subtitle, rightSlot = '') {
    return html`
        <div class="hello">
          <div>
            <h1>${title}</h1>
            ${subtitle ? html`<div class="page-sub">${subtitle}</div>` : ''}
          </div>
          ${rightSlot}
        </div>
    `;
  }

  _renderComingUpSection() {
    const filteredTrips = this._filteredTrips();
    const allMembers = this._liveImmediate().concat(this._liveExtended());
    return html`
        <section>
          <div class="section-head">
            <h2>Coming up</h2>
            <div style="display:flex;gap:10px;align-items:center;">
              <button
                class="link hide-mobile"
                @click=${() => (this._importOpen = true)}
              >
                Import from Calendar
              </button>
              <button
                class="link hide-mobile"
                @click=${() => (this._schoolImportOpen = true)}
              >
                Import from PDF
              </button>
              ${this._circleTrips().length > 4
                ? html`<button class="link" @click=${() => (this._allTripsOpen = true)}>
                    All trips →
                  </button>`
                : ''}
            </div>
          </div>
          ${filteredTrips.length === 0
            ? html`
                <glass-panel padding="lg" variant="strong">
                  <div class="empty-hero">
                    <div class="empty-icon" aria-hidden="true">
                      <svg viewBox="0 0 28 28" width="40" height="40">
                        <defs>
                          <linearGradient id="es-grad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stop-color="#3d9b8f" />
                            <stop offset="1" stop-color="#c67b5c" />
                          </linearGradient>
                        </defs>
                        <circle cx="14" cy="14" r="13" fill="none" stroke="url(#es-grad)" stroke-width="1.5" stroke-dasharray="2 3" />
                        <path d="M14 8v6l4 2.5" fill="none" stroke="url(#es-grad)" stroke-width="2" stroke-linecap="round" />
                      </svg>
                    </div>
                    <div class="empty-title">Let's plan something fun.</div>
                    <div class="empty-sub">
                      Plan a trip, weekend, or outing — or pull what's already
                      in your Google Calendar.
                    </div>
                    <div class="empty-actions">
                      <button class="empty-cta primary" @click=${() => this._openCreate()}>
                        + New activity
                      </button>
                      <button class="empty-cta ghost" @click=${() => (this._importOpen = true)}>
                        Import from Google Calendar
                      </button>
                    </div>
                  </div>
                </glass-panel>
              `
            : html`
                <div class="trips-row">
                  ${filteredTrips.map(
                    (t) => html`<trip-card
                      .trip=${t}
                      .members=${allMembers}
                      @open-planner=${(e) => this._openPlanner(e.detail)}
                      @edit-trip=${(e) => this._openEdit(e.detail)}
                    ></trip-card>`,
                  )}
                </div>
              `}
        </section>
    `;
  }

  // ════════════════════════════════════════════════════════════════
  // Activities calendar workspace (design-sandbox/28, 2026-05-24).
  //
  // Replaces the prior single-card calendar (Week / Month / Year toggle
  // with chip-per-cell month + weekly strip). The new layout is the
  // canonical Google-Calendar shape: toolbar across the top, sidebar
  // (mini-month + Calendars filters) on the left, main pane (Week /
  // Month / Year) on the right. Section position is unchanged — sits
  // between _renderComingUpSection() and _renderCelebrationsSection()
  // on the Activities tab.
  //
  // Categories: trip (teal) · plan (sage) · holiday (dusty blue) ·
  // event (amber) · celebrate (rose). Each carries inline --cat /
  // --cat-bg / --cat-ink tokens via a cat-<id> class (rules at the
  // end of static styles).
  //
  // Plan items aren't snapshot-listened by home-screen normally — only
  // <trip-planner> subscribes per-trip. For the Week time-grid to show
  // timed plan items, we subscribe per visible-week trip while Week is
  // active and tear down on view-change / disconnect. See _syncWeekPlanSubs.
  // ════════════════════════════════════════════════════════════════

  /** Toolbar Today button — branches by view: Week resets to today's
   *  Sunday, Month resets _displayMonth to month-of-today, Year resets
   *  _displayMonth to Jan 1 of current year (so the year-grid retitles). */
  _resetCalToToday() {
    const t = new Date();
    if (this._calendarView === 'week') {
      const sunday = new Date(t.getFullYear(), t.getMonth(), t.getDate());
      sunday.setDate(sunday.getDate() - sunday.getDay());
      this._displayWeekStart = sunday;
    } else if (this._calendarView === 'year') {
      this._displayMonth = new Date(t.getFullYear(), 0, 1);
    } else {
      this._resetToToday();
    }
  }

  /** Toolbar prev arrow — view-dependent. */
  _calToolbarPrev() {
    if (this._calendarView === 'week') {
      const d = new Date(this._displayWeekStart);
      d.setDate(d.getDate() - 7);
      this._displayWeekStart = d;
    } else if (this._calendarView === 'year') {
      const y = this._displayMonth?.getFullYear() ?? new Date().getFullYear();
      this._displayMonth = new Date(y - 1, 0, 1);
    } else {
      this._shiftMonth(-1);
    }
  }

  /** Toolbar next arrow — view-dependent. */
  _calToolbarNext() {
    if (this._calendarView === 'week') {
      const d = new Date(this._displayWeekStart);
      d.setDate(d.getDate() + 7);
      this._displayWeekStart = d;
    } else if (this._calendarView === 'year') {
      const y = this._displayMonth?.getFullYear() ?? new Date().getFullYear();
      this._displayMonth = new Date(y + 1, 0, 1);
    } else {
      this._shiftMonth(1);
    }
  }

  /** Trips whose [start, end] intersects the visible week — used to
   *  scope the plan-item subscription set (§5 of design 28 brief). */
  _visibleWeekTrips() {
    const sunday = this._visibleWeekStart();
    const sat = new Date(sunday);
    sat.setDate(sunday.getDate() + 6);
    sat.setHours(23, 59, 59, 999);
    return this._circleTrips().filter((t) => {
      if (!t.start || !t.end) return false;
      const s = parseLocalDate(t.start);
      const e = parseLocalDate(t.end);
      return s && e && e >= sunday && s <= sat;
    });
  }

  /** Attach planItem listeners for every visible-week trip; detach the
   *  rest. Idempotent — safe to call on every render. */
  _syncWeekPlanSubs() {
    const wanted = new Set(this._visibleWeekTrips().map((t) => t.id));
    // Detach trips no longer needed.
    this._weekPlanUnsubs = (this._weekPlanUnsubs ?? []).filter(
      ({ tripId, unsub }) => {
        if (!wanted.has(tripId)) {
          try { unsub(); } catch (err) { /* noop */ }
          this._weekPlanItems.delete(tripId);
          return false;
        }
        return true;
      },
    );
    const have = new Set(this._weekPlanUnsubs.map((x) => x.tripId));
    for (const tripId of wanted) {
      if (have.has(tripId)) continue;
      const unsub = dataStore.planItemsListener(tripId, (items) => {
        // Copy the Map immutably so Lit notices the state change.
        const next = new Map(this._weekPlanItems);
        next.set(tripId, items ?? []);
        this._weekPlanItems = next;
      });
      this._weekPlanUnsubs.push({ tripId, unsub });
    }
  }

  /** Detach all plan listeners — called when Week deactivates + on
   *  disconnectedCallback. */
  _dropAllWeekPlanSubs() {
    for (const { unsub } of this._weekPlanUnsubs ?? []) {
      try { unsub(); } catch (err) { /* noop */ }
    }
    this._weekPlanUnsubs = [];
    if (this._weekPlanItems.size) this._weekPlanItems = new Map();
  }

  /** Single dispatch for chip taps across Week + Month. Holiday +
   *  unattached plan items are noops in v1. */
  _openItem(item) {
    if (!item || !item.ref) return;
    if (item.cat === 'trip') {
      this._openPlanner(item.ref);
    } else if (item.cat === 'event' || item.cat === 'celebrate') {
      this._eventFormEvent = item.ref;
      this._eventFormOpen = true;
    }
  }

  /** Dominant category for a calendar day — first match wins. Order
   *  reflects mental model: trip is the headline, plans live inside.
   *  Used by the mini-month + year-card dots. Plan items excluded
   *  from dots intentionally (over-clutter). */
  _dominantCategoryForDay(d) {
    if (!d) return null;
    const y = d.getFullYear();
    const m = d.getMonth();
    const day = d.getDate();
    if (this._calFilters.trip) {
      for (const t of this._circleTrips()) {
        if (!t.start || !t.end) continue;
        const s = parseLocalDate(t.start);
        const e = parseLocalDate(t.end);
        if (!s || !e) continue;
        if (d >= s && d <= e) return 'trip';
      }
    }
    if (this._calFilters.holiday) {
      for (const h of this.holidays ?? []) {
        const hd = parseLocalDate(h.date);
        if (hd && hd.getFullYear() === y && hd.getMonth() === m && hd.getDate() === day) {
          return 'holiday';
        }
      }
    }
    // Events split: birthday/anniversary → celebrate; custom → event.
    let sawCeleb = false;
    let sawEvent = false;
    for (const ev of this._filteredEvents()) {
      const ed = parseLocalDate(ev.date);
      if (!ed || ed.getFullYear() !== y || ed.getMonth() !== m || ed.getDate() !== day) continue;
      const cat = (ev.type === 'birthday' || ev.type === 'anniversary') ? 'celebrate' : 'event';
      if (cat === 'celebrate') sawCeleb = true;
      else sawEvent = true;
    }
    if (sawCeleb && this._calFilters.celebrate) return 'celebrate';
    if (sawEvent && this._calFilters.event) return 'event';
    return null;
  }

  /** Toolbar — Today / prev / next / period block on the left;
   *  view-switcher segmented pill + Add-event CTA on the right. */
  _renderCalToolbar(view, today) {
    let title = '';
    let subtitle = '';
    if (view === 'week') {
      const s = new Date(this._displayWeekStart);
      const e = new Date(s);
      e.setDate(s.getDate() + 6);
      const fmt = (d) => d.toLocaleDateString('en-GB', { month: 'short', day: 'numeric' });
      const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();
      title = sameMonth
        ? `${fmt(s)} – ${e.getDate()}`
        : `${fmt(s)} – ${fmt(e)}`;
      subtitle = String(s.getFullYear());
    } else if (view === 'year') {
      const y = this._displayMonth?.getFullYear() ?? today.getFullYear();
      title = String(y);
      subtitle = 'Tap a month to open it';
    } else {
      const d = this._displayMonth ?? today;
      title = d.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
      subtitle = String(d.getFullYear());
    }
    const views = [
      { id: 'week', label: 'Week' },
      { id: 'month', label: 'Month' },
      { id: 'year', label: 'Year' },
    ];
    return html`
      <div class="cal-tb">
        <div class="cal-tb-l">
          <button class="cal-today-btn" @click=${() => this._resetCalToToday()}>Today</button>
          <div class="cal-nav">
            <button aria-label="Previous" @click=${() => this._calToolbarPrev()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button aria-label="Next" @click=${() => this._calToolbarNext()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
          <div class="cal-period">
            <span class="pt">${title}</span>
            <span class="ps">${subtitle}</span>
          </div>
        </div>
        <div class="cal-tb-r">
          <div class="cal-vswitch" role="tablist" aria-label="Calendar view">
            ${views.map(
              (opt) => html`
                <button
                  role="tab"
                  aria-selected=${view === opt.id ? 'true' : 'false'}
                  class=${view === opt.id ? 'on' : ''}
                  @click=${() => (this._calendarView = opt.id)}
                >${opt.label}</button>
              `,
            )}
          </div>
          <button class="cal-add" @click=${() => this._openCreate()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add event
          </button>
        </div>
      </div>
    `;
  }

  /** Mini-month inside the sidebar. Read-only navigation header
   *  (prev/next pair) + Sun-first DOW row + 6-row date grid with
   *  dominant-category dots. Click a day → jump to Month view. */
  _renderCalMini(today) {
    const disp = this._displayMonth ?? today;
    const y = disp.getFullYear();
    const m = disp.getMonth();
    const monthName = disp.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
    const firstDow = new Date(y, m, 1).getDay(); // 0 = Sun
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const prevMonthDays = new Date(y, m, 0).getDate();
    const cells = [];
    // Leading muted days from prior month.
    for (let i = firstDow - 1; i >= 0; i--) {
      const d = prevMonthDays - i;
      cells.push({ day: d, muted: true, real: new Date(y, m - 1, d) });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({ day: d, muted: false, real: new Date(y, m, d) });
    }
    // Pad to 42 with next-month days so the grid is stable height.
    let nextDay = 1;
    while (cells.length < 42) {
      cells.push({ day: nextDay, muted: true, real: new Date(y, m + 1, nextDay) });
      nextDay++;
    }
    const isSame = (a, b) =>
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate();
    return html`
      <div class="cal-mini">
        <div class="cal-mini-top">
          <span class="mm">${monthName}</span>
          <div class="cal-mini-arrows">
            <button @click=${() => this._shiftMonth(-1)} aria-label="Previous month">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button @click=${() => this._shiftMonth(1)} aria-label="Next month">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
        <div class="cal-mini-dow">
          <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
        </div>
        <div class="cal-mini-grid">
          ${cells.map((c) => {
            const isToday = isSame(c.real, today);
            const dom = isToday ? null : this._dominantCategoryForDay(c.real);
            const cls = [
              'cal-mini-d',
              c.muted ? 'muted' : '',
              isToday ? 'today' : '',
            ].filter(Boolean).join(' ');
            return html`<div
              class=${cls}
              @click=${() => {
                this._displayMonth = new Date(c.real.getFullYear(), c.real.getMonth(), 1);
                this._calendarView = 'month';
              }}
            >
              ${c.day}
              ${dom ? html`<span class=${'dot cat-' + dom}></span>` : ''}
            </div>`;
          })}
        </div>
      </div>
    `;
  }

  /** Filter chips — 5 categories, click toggles in/out of _calFilters.
   *  Counts show what's currently in the data (week-only for plans). */
  _renderCalFilters() {
    const trips = this._circleTrips();
    const events = this._filteredEvents();
    const customEvents = events.filter((e) => e.type === 'custom');
    const celebEvents = events.filter(
      (e) => e.type === 'birthday' || e.type === 'anniversary',
    );
    const planTotal = Array.from(this._weekPlanItems.values()).reduce(
      (n, arr) => n + (Array.isArray(arr) ? arr.length : 0),
      0,
    );
    const yearForHolidays =
      this._displayMonth?.getFullYear() ?? new Date().getFullYear();
    const holidays = (this.holidays ?? []).filter(
      (h) => parseLocalDate(h.date)?.getFullYear() === yearForHolidays,
    );
    const rows = [
      { id: 'trip', label: 'Trips', count: trips.length },
      { id: 'plan', label: 'Plans', count: planTotal },
      { id: 'holiday', label: 'Holidays', count: holidays.length },
      { id: 'event', label: 'Events', count: customEvents.length },
      { id: 'celebrate', label: 'Celebrations', count: celebEvents.length },
    ];
    return html`
      <div class="cal-side-h">Calendars</div>
      <div class="cal-filt-list">
        ${rows.map((r) => {
          const on = this._calFilters[r.id] !== false;
          return html`
            <div
              class=${'cal-filt cat-' + r.id + (on ? '' : ' off')}
              @click=${() =>
                (this._calFilters = { ...this._calFilters, [r.id]: !on })}
              role="checkbox"
              aria-checked=${on ? 'true' : 'false'}
              tabindex="0"
              @keydown=${(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  this._calFilters = { ...this._calFilters, [r.id]: !on };
                }
              }}
            >
              <span class="sw">
                ${on
                  ? html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
                  : ''}
              </span>
              <span class="nm">${r.label}</span>
              <span class="ct">${r.count}</span>
            </div>
          `;
        })}
      </div>
    `;
  }

  /** Greedy lane assignment — items get the lowest lane index whose
   *  last-placed item ended before this one starts. Used by Week +
   *  Month all-day rows. */
  _assignLanes(items) {
    const sorted = [...items].sort(
      (a, b) => a.colStart - b.colStart || b.span - a.span,
    );
    const lanes = []; // lanes[i] = next-free colStart
    for (const it of sorted) {
      let placed = false;
      for (let i = 0; i < lanes.length; i++) {
        if (lanes[i] <= it.colStart) {
          it.lane = i + 1;
          lanes[i] = it.colStart + it.span;
          placed = true;
          break;
        }
      }
      if (!placed) {
        it.lane = lanes.length + 1;
        lanes.push(it.colStart + it.span);
      }
    }
    return sorted;
  }

  /** Week view — 7 days × hour grid 8 AM → 8 PM, 12 rows at 52px.
   *  All-day lane above the grid carries trips/events/holidays;
   *  timed plan items render inside the day columns. */
  _renderCalWeek(today) {
    const sunday = new Date(this._displayWeekStart);
    sunday.setHours(0, 0, 0, 0);
    const sat = new Date(sunday);
    sat.setDate(sunday.getDate() + 6);
    sat.setHours(23, 59, 59, 999);
    const days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(sunday);
      d.setDate(sunday.getDate() + i);
      return d;
    });
    const isSame = (a, b) =>
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate();

    // ── All-day items ───────────────────────────────────────
    const allDay = [];
    if (this._calFilters.trip) {
      for (const t of this._circleTrips()) {
        if (!t.start || !t.end) continue;
        const s = parseLocalDate(t.start);
        const e = parseLocalDate(t.end);
        if (!s || !e) continue;
        if (e < sunday || s > sat) continue;
        const clipS = s < sunday ? sunday : s;
        const clipE = e > sat ? sat : e;
        const colStart = clipS.getDay() + 2; // col 1 = gutter, col 2 = Sun
        const dayDiff = Math.round((clipE - clipS) / (24 * 60 * 60 * 1000));
        const span = Math.max(1, dayDiff + 1);
        allDay.push({
          cat: 'trip',
          title: t.title || 'Trip',
          colStart,
          span,
          ref: t,
        });
      }
    }
    for (const ev of this._filteredEvents()) {
      const d = parseLocalDate(ev.date);
      if (!d) continue;
      if (d < sunday || d > sat) continue;
      const cat = (ev.type === 'birthday' || ev.type === 'anniversary')
        ? 'celebrate' : 'event';
      if (!this._calFilters[cat]) continue;
      allDay.push({
        cat,
        title: ev.title || (cat === 'celebrate' ? 'Celebration' : 'Event'),
        colStart: d.getDay() + 2,
        span: 1,
        ref: ev,
      });
    }
    if (this._calFilters.holiday) {
      for (const h of this.holidays ?? []) {
        const d = parseLocalDate(h.date);
        if (!d) continue;
        if (d < sunday || d > sat) continue;
        allDay.push({
          cat: 'holiday',
          title: h.title || 'Holiday',
          colStart: d.getDay() + 2,
          span: 1,
          ref: h,
        });
      }
    }
    // All-day plan items (time === '') join the lane too.
    if (this._calFilters.plan) {
      for (const [tripId, items] of this._weekPlanItems.entries()) {
        for (const it of items ?? []) {
          if (!it || !it.day) continue;
          const d = parseLocalDate(it.day);
          if (!d || d < sunday || d > sat) continue;
          if (it.time && String(it.time).trim() !== '') continue; // timed → grid
          allDay.push({
            cat: 'plan',
            title: it.title || 'Plan',
            colStart: d.getDay() + 2,
            span: 1,
            ref: { ...it, tripId },
          });
        }
      }
    }
    const lanedAllDay = this._assignLanes(allDay).slice(0, 60); // safety cap

    // ── Timed plan items ────────────────────────────────────
    const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    const ROW = 52;
    const fmtTime = (h, m) => {
      const ampm = h < 12 ? 'AM' : 'PM';
      const hh = ((h + 11) % 12) + 1;
      return `${hh}:${String(m).padStart(2, '0')} ${ampm}`;
    };
    const timedByDay = Array.from({ length: 7 }, () => []);
    if (this._calFilters.plan) {
      for (const [tripId, items] of this._weekPlanItems.entries()) {
        for (const it of items ?? []) {
          if (!it || !it.day) continue;
          const d = parseLocalDate(it.day);
          if (!d || d < sunday || d > sat) continue;
          const timeStr = String(it.time ?? '').trim();
          if (!timeStr) continue;
          const m = timeStr.match(/^(\d{1,2}):(\d{2})/);
          if (!m) continue;
          const hr = Number(m[1]);
          const mn = Number(m[2]);
          if (hr < 8 || hr >= 20) continue; // outside the visible window
          const top = (hr - 8) * ROW + (mn / 60) * ROW;
          const dur = Number.isFinite(it.durationMins) ? it.durationMins : 60;
          const height = Math.max(24, (dur / 60) * ROW);
          const endMin = hr * 60 + mn + dur;
          const endH = Math.floor(endMin / 60);
          const endM = endMin % 60;
          const timeLabel = `${fmtTime(hr, mn)} – ${fmtTime(endH, endM)}`;
          timedByDay[d.getDay()].push({
            cat: 'plan',
            title: it.title || 'Plan',
            top, height, timeLabel,
            ref: { ...it, tripId },
          });
        }
      }
    }

    // ── Now-line ────────────────────────────────────────────
    const now = new Date();
    let nowCol = -1;
    let nowTop = null;
    if (now >= sunday && now <= sat) {
      const nowH = now.getHours();
      const nowM = now.getMinutes();
      if (nowH >= 8 && nowH < 20) {
        nowCol = now.getDay();
        nowTop = (nowH - 8) * ROW + (nowM / 60) * ROW;
      }
    }

    const allDayHeight = Math.max(
      1,
      Math.min(3, lanedAllDay.reduce((mx, it) => Math.max(mx, it.lane), 0)),
    );

    return html`
      <div class="cal-week">
        <div class="wk-head">
          <div class="gut"></div>
          ${days.map((d) => {
            const isToday = isSame(d, today);
            const dw = d.toLocaleDateString('en-GB', { weekday: 'short' });
            return html`<div class=${'wk-h' + (isToday ? ' today' : '')}>
              <div class="dw">${dw}</div>
              <div class="nm">${d.getDate()}</div>
            </div>`;
          })}
        </div>
        <div
          class="cal-allday"
          style="grid-template-rows: repeat(${allDayHeight}, 23px);"
        >
          <div class="ad-lbl">All-day</div>
          ${lanedAllDay
            .filter((it) => it.lane <= 3)
            .map(
              (it) => html`<div
                class=${'ad cat-' + it.cat}
                style=${`grid-column:${it.colStart} / span ${it.span}; grid-row:${it.lane};`}
                title=${it.title}
                @click=${() => this._openItem(it)}
              >${it.title}</div>`,
            )}
        </div>
        <div class="cal-tg">
          <div class="tg-gut">
            ${HOURS.map((h) => {
              const ampm = h < 12 ? 'AM' : 'PM';
              const hh = ((h + 11) % 12) + 1;
              return html`<div class="tg-hr">${hh} ${ampm}</div>`;
            })}
          </div>
          ${days.map((d, idx) => {
            const isToday = isSame(d, today);
            const showNow = idx === nowCol && nowTop != null;
            return html`<div class=${'tg-day' + (isToday ? ' today' : '')}>
              ${showNow
                ? html`<div class="nowline" style=${`top:${nowTop}px;`}></div>`
                : ''}
              ${timedByDay[idx].map(
                (ev) => html`<div
                  class=${'tev cat-' + ev.cat}
                  style=${`top:${ev.top}px; height:${ev.height}px;`}
                  title=${ev.title}
                  @click=${() => this._openItem(ev)}
                >
                  <div class="tt">${ev.title}</div>
                  <div class="tm">${ev.timeLabel}</div>
                </div>`,
              )}
            </div>`;
          })}
        </div>
      </div>
    `;
  }

  /** Month view — 7-col Sunday-first, 6 week rows for stable height.
   *  Trip bars span across week-internal day ranges; events/holidays
   *  are single-day chips. Lane assignment caps at 3 + N more. */
  _renderCalMonth(today) {
    const disp = this._displayMonth ?? today;
    const y = disp.getFullYear();
    const m = disp.getMonth();
    const firstDow = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const prevMonthDays = new Date(y, m, 0).getDate();

    // Build the 6 week rows (each a 7-day array of {real, muted}).
    const days42 = [];
    for (let i = firstDow - 1; i >= 0; i--) {
      const d = prevMonthDays - i;
      days42.push({ real: new Date(y, m - 1, d), muted: true });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days42.push({ real: new Date(y, m, d), muted: false });
    }
    let nextDay = 1;
    while (days42.length < 42) {
      days42.push({ real: new Date(y, m + 1, nextDay), muted: true });
      nextDay++;
    }
    const weeks = [];
    for (let i = 0; i < 6; i++) weeks.push(days42.slice(i * 7, i * 7 + 7));

    const isSame = (a, b) =>
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate();
    const dayDiff = (a, b) =>
      Math.round(
        (new Date(a.getFullYear(), a.getMonth(), a.getDate()) -
          new Date(b.getFullYear(), b.getMonth(), b.getDate())) /
        (24 * 60 * 60 * 1000),
      );

    // Per-week item buckets.
    const allTrips = this._circleTrips();
    const allEvents = this._filteredEvents();
    const allHolidays = this.holidays ?? [];

    return html`
      <div class="cal-month">
        <div class="m-dow">
          <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
        </div>
        <div class="m-grid">
          ${weeks.map((week) => {
            const wkStart = week[0].real;
            const wkEnd = week[6].real;
            const items = [];
            if (this._calFilters.trip) {
              for (const t of allTrips) {
                if (!t.start || !t.end) continue;
                const s = parseLocalDate(t.start);
                const e = parseLocalDate(t.end);
                if (!s || !e) continue;
                if (e < wkStart || s > wkEnd) continue;
                const cs = Math.max(0, dayDiff(s, wkStart));
                const ce = Math.min(6, dayDiff(e, wkStart));
                items.push({
                  cat: 'trip',
                  title: t.title || 'Trip',
                  colStart: cs + 1,
                  span: ce - cs + 1,
                  ref: t,
                });
              }
            }
            for (const ev of allEvents) {
              const d = parseLocalDate(ev.date);
              if (!d) continue;
              if (d < wkStart || d > wkEnd) continue;
              const cat = (ev.type === 'birthday' || ev.type === 'anniversary')
                ? 'celebrate' : 'event';
              if (!this._calFilters[cat]) continue;
              items.push({
                cat,
                title: ev.title || (cat === 'celebrate' ? 'Celebration' : 'Event'),
                colStart: dayDiff(d, wkStart) + 1,
                span: 1,
                ref: ev,
              });
            }
            if (this._calFilters.holiday) {
              for (const h of allHolidays) {
                const d = parseLocalDate(h.date);
                if (!d) continue;
                if (d < wkStart || d > wkEnd) continue;
                items.push({
                  cat: 'holiday',
                  title: h.title || 'Holiday',
                  colStart: dayDiff(d, wkStart) + 1,
                  span: 1,
                  ref: h,
                });
              }
            }
            const laned = this._assignLanes(items);
            const visible = laned.filter((it) => it.lane <= 3);
            const overflow = laned.filter((it) => it.lane > 3);
            // Per-column overflow counts → render "+N more" in lane 3
            // (covering the 4th+ slot).
            const overflowByCol = new Map();
            for (const ov of overflow) {
              for (let c = ov.colStart; c < ov.colStart + ov.span; c++) {
                overflowByCol.set(c, (overflowByCol.get(c) ?? 0) + 1);
              }
            }
            return html`<div class="wkrow">
              <div class="dnums">
                ${week.map((c) => {
                  const isToday = isSame(c.real, today);
                  const cls = [
                    'dcell',
                    c.muted ? 'muted' : '',
                    isToday ? 'today' : '',
                  ].filter(Boolean).join(' ');
                  return html`<div class=${cls}>
                    <span class="dn">${c.real.getDate()}</span>
                  </div>`;
                })}
              </div>
              <div class="devents">
                ${visible.map(
                  (it) => html`<div
                    class=${'ev cat-' + it.cat + (it.span > 1 ? ' span' : '')}
                    style=${`grid-column:${it.colStart} / span ${it.span}; grid-row:${it.lane};`}
                    title=${it.title}
                    @click=${() => this._openItem(it)}
                  >
                    ${it.span === 1 ? html`<span class="ed"></span>` : ''}${it.title}
                  </div>`,
                )}
                ${Array.from(overflowByCol.entries()).map(
                  ([col, n]) => html`<div
                    class="evmore"
                    style=${`grid-column:${col}; grid-row:3;`}
                  >+${n} more</div>`,
                )}
              </div>
            </div>`;
          })}
        </div>
      </div>
    `;
  }

  /** Year view — 12 mini-month cards. Click → jump to Month view. */
  _renderCalYear(today) {
    const y = this._displayMonth?.getFullYear() ?? today.getFullYear();
    return html`
      <div class="cal-year">
        ${Array.from({ length: 12 }, (_, m) => this._renderYearMonthCard(y, m, today))}
      </div>
    `;
  }

  _renderYearMonthCard(y, m, today) {
    const isCur = today.getFullYear() === y && today.getMonth() === m;
    const monthName = new Date(y, m, 1).toLocaleString('en-GB', { month: 'long' });
    const firstDow = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstDow; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    while (cells.length < 42) cells.push(null);
    return html`
      <button
        class=${'ym' + (isCur ? ' cur' : '')}
        @click=${() => {
          this._displayMonth = new Date(y, m, 1);
          this._calendarView = 'month';
        }}
      >
        <div class="ym-name">${monthName}</div>
        <div class="ym-dow">
          <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
        </div>
        <div class="ym-days">
          ${cells.map((d) => {
            if (d == null) return html`<div class="ym-d e">0</div>`;
            const real = new Date(y, m, d);
            const isToday =
              today.getFullYear() === y && today.getMonth() === m && today.getDate() === d;
            const dom = isToday ? null : this._dominantCategoryForDay(real);
            return html`<div class=${'ym-d' + (isToday ? ' today' : '')}>
              ${d}
              ${dom ? html`<i class=${'yd cat-' + dom}></i>` : ''}
            </div>`;
          })}
        </div>
      </button>
    `;
  }

  _renderCalendarsSection() {
    const today = new Date();
    const v = this._calendarView ?? 'week';
    return html`
      <section class="cal-section">
        <glass-panel padding="none" variant="strong" stretch>
          <div class="cal-ws">
            ${this._renderCalToolbar(v, today)}
            <div class="cal-ws-divider"></div>
            <div class="cal-ws-body">
              <aside class="cal-side">
                ${this._renderCalMini(today)}
                ${this._renderCalFilters()}
              </aside>
              <div class="cal-main">
                ${v === 'week' ? this._renderCalWeek(today) : ''}
                ${v === 'month' ? this._renderCalMonth(today) : ''}
                ${v === 'year' ? this._renderCalYear(today) : ''}
              </div>
            </div>
          </div>
        </glass-panel>
      </section>
    `;
  }


  _renderCelebrationsSection() {
    const filteredEvents = this._filteredEvents();
    const allMembers = this._liveImmediate().concat(this._liveExtended());
    return html`
        <section>
          <div class="section-head">
            <h2>Celebrations</h2>
            <button class="link" @click=${() => this._openCreateEvent()}>+ Add event</button>
          </div>
          ${(() => {
            // 2026-05-16 — one chronological sequence, soonest →
            // furthest. `e.date` is the next-occurrence date as
            // zero-padded YYYY-MM-DD, so a lexical asc compare IS
            // chronological-by-soonest. Type is conveyed per row by
            // <event-row> itself.
            const sorted = filteredEvents
              .slice()
              .sort((a, b) => String(a.date).localeCompare(String(b.date)));
            return html`
              <glass-panel padding="md" variant="strong">
                ${sorted.length === 0
                  ? html`<div class="cel-empty">No celebrations yet.</div>`
                  : sorted.map(
                      (e) => html`<event-row
                        .event=${e}
                        .members=${allMembers}
                        @edit-event=${(ev) => this._openEditEvent(ev.detail)}
                      ></event-row>`,
                    )}
              </glass-panel>
            `;
          })()}
        </section>
    `;
  }


  _renderTodayTab() {
    const cd = this._childData();
    const scope = html`<div class="scope shared">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5M15 17c2 0 5 1 5 3" stroke-linecap="round"/></svg>
      Your household
    </div>`;
    const coming = this._comingUp();
    const comingPanel = html`
      <glass-panel padding="md" variant="strong" stretch>
        <div class="cal-head"><h3>Coming up</h3>
          <button class="link" @click=${() => (this._activeTab = 'activities')}>All activities</button></div>
        ${coming.length === 0
          ? html`<div class="ring-note" style="padding:8px 4px;">Nothing on the calendar yet — plan something from the Activities tab.</div>`
          : coming.map(
              (c) => html`<div class="ms-row">
                ${this._gicoFor(c)}
                <div class="t">${c.title}${c.sub ? html`<small>${c.sub}</small>` : ''}</div>
                <span class="ms-stat up">${c.chip}</span>
              </div>`,
            )}
      </glass-panel>`;

    if (!cd.hasPP || !cd.child) {
      // Non-parent viewer / no child to surface — greeting + activities glance only.
      return html`
        ${this._renderTodayHeader(scope)}
        <section>${comingPanel}</section>
        ${this._renderCelebrationsSection()}
      `;
    }

    const ms = cd.milestones;
    const achieved = ms.filter((x) => x.status === 'achieved');
    const pct = ms.length ? Math.round((achieved.length / ms.length) * 100) : 0;
    const DOM = (c) =>
      ({ selfCare: 'motor' }[c] || c) || 'motor';
    const recently = achieved
      .slice()
      .sort((a, b) => (b.ageRangeStartMonths ?? 0) - (a.ageRangeStartMonths ?? 0))
      .slice(0, 3);
    const insight = (cd.insights || [])[0];

    return html`
      ${this._renderTodayHeader(scope)}
      ${this._renderFamilyBrief(cd)}

      <section class="today-lead">
        <div class="today-top">
          <div class="today-top-left">
            <glass-panel padding="md" variant="strong">
              <div class="child-card">
                <span class="child-photo">
                  <member-chip
                    .name=${cd.child.name}
                    .photo=${cd.child.profilePhotoURL ?? ''}
                    .hue=${150}
                    size="72"
                  ></member-chip>
                </span>
                <div class="child-meta">
                  <h2>${cd.child.name}</h2>
                  <div class="sub">${this._ageLong(cd.child.dateOfBirth)}</div>
                </div>
                <div class="child-progress">
                  <div class="big">${pct}%</div>
                  <div class="lbl">of tracked milestones</div>
                </div>
              </div>
            </glass-panel>
            ${this._renderNextTripCard()}
          </div>
          ${comingPanel}
        </div>
      </section>

      <section>
        <div class="grid-2 today-insight-row">
          <!-- 2026-05-23 — stretch attribute on both panels so the
               glass-panel inner .panel + .content divs fill the host
               (which was already height:100% via align-items:stretch
               on the grid row). Without stretch, the bg/border chrome
               sized to natural content while the host was stretched —
               making Recently-achieved visually shorter than Growth-
               insight even though the grid track matched. -->
          <glass-panel padding="md" variant="strong" stretch>
            <div class="cal-head"><h3>Recently achieved</h3>
              <button class="link" @click=${() => (this._activeTab = 'children')}>See all</button></div>
            ${recently.length === 0
              ? html`<div class="ring-note" style="padding:8px 4px;">No milestones logged as achieved yet.</div>`
              : recently.map(
                  (m) => html`<div class="ms-row">
                    <span class="ms-dot ${DOM(m.category)}"></span>
                    <div class="t">${m.title}</div>
                    <span class="ms-stat done">Achieved</span>
                  </div>`,
                )}
          </glass-panel>
          <glass-panel padding="md" variant="strong" stretch>
            <div class="cal-head"><h3>Growth insight</h3>
              <button class="link" @click=${() => (this._activeTab = 'children')}>More insights</button></div>
            ${insight
              ? html`<insight-card
                  .type=${insight.type}
                  .domain=${insight.domain}
                  .title=${insight.title}
                  .body=${insight.body}
                ></insight-card>`
              : html`<div class="ring-note" style="padding:8px 4px;">Pebble surfaces patterns here as more of ${cd.child.name}'s milestones are logged.</div>`}
          </glass-panel>
        </div>
      </section>
    `;
  }

  /** ACTIVITIES — the full pre-tabs dashboard surface (trips +
   *  calendars + celebrations), unchanged data wiring. */
  _renderActivitiesTab() {
    const allMembers = this._liveImmediate().concat(this._liveExtended());
    const scope = html`<div class="scope shared">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5M15 17c2 0 5 1 5 3" stroke-linecap="round"/></svg>
      Shared with connections
    </div>`;
    return html`
      ${this._renderTabHeader(
        'Activities',
        this.family?.name ?? 'Your family',
        scope,
      )}
      ${this._renderComingUpSection()}
      <trip-planner
        ?open=${this._plannerOpen}
        .trip=${this._plannerTrip}
        .members=${allMembers}
        .currentUid=${this.user?.uid ?? ''}
        @cancel=${() => {
          this._plannerOpen = false;
          this._plannerTrip = null;
        }}
        @edit-trip=${(e) => {
          // 2026-05-24 — planner's edit pencil routes the trip into
          // the existing trip-form sheet via _openEdit. Close the
          // planner first so the form lands on a clean stacking
          // context (and the user comes back to it via the trip
          // card afterward if they want to keep planning).
          const trip = e.detail?.trip ?? this._plannerTrip;
          this._plannerOpen = false;
          this._plannerTrip = null;
          if (trip) this._openEdit(trip);
        }}
      ></trip-planner>
      ${this._renderCalendarsSection()}
      ${this._renderCelebrationsSection()}
    `;
  }

  /** Batch F — PP-member-only: approve/decline pending child-view
   *  requests + revoke previously-granted read-only viewers. Renders
   *  nothing unless the viewer is a member AND there's something to
   *  show, so it never clutters an extended member's My Cairn. */
  _renderChildAccessSection() {
    if (this.preview || !this.ppIsMember) return '';
    const reqs = this.incomingChildRequests ?? [];
    const viewers = Array.isArray(this.ppFamily?.childViewers)
      ? this.ppFamily.childViewers
      : [];
    if (reqs.length === 0 && viewers.length === 0) return '';
    const profiles = this.ppFamily?.memberProfiles ?? {};
    const nameFor = (uid, fallback) =>
      profiles[uid]?.displayName ??
      fallback ??
      `${String(uid).charAt(0).toUpperCase()}${String(uid).slice(1)}`;
    const personSvg = html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6" stroke-linecap="round"/></svg>`;
    return html`
      <section>
        <div class="section-head">
          <h2>Child-view access</h2>
          <span class="note" style="margin:0;"
            >Read-only — milestones &amp; insights, never Pebble or
            editing</span
          >
        </div>
        <glass-panel padding="md" variant="strong">
          ${reqs.length === 0
            ? ''
            : reqs.map(
                (r) => html`<div class="set-row">
                  <span class="si" style="color:var(--ink-terracotta);">${personSvg}</span>
                  <div class="sl">
                    <b>${nameFor(r.uid ?? r.id, r.displayName)}</b>
                    <span>Wants read-only access to the Children view</span>
                  </div>
                  <span style="display:inline-flex;gap:8px;">
                    <button
                      class="link"
                      style="color:var(--ink-teal);border-color:rgba(61,155,143,.4);"
                      @click=${() => this._approveChildAccess(r.uid ?? r.id)}
                    >
                      Approve
                    </button>
                    <button
                      class="link"
                      @click=${() => this._declineChildAccess(r.uid ?? r.id)}
                    >
                      Decline
                    </button>
                  </span>
                </div>`,
              )}
          ${viewers.map(
            (uid) => html`<div class="set-row">
              <span class="si" style="color:var(--ink-teal);">${personSvg}</span>
              <div class="sl">
                <b>${nameFor(uid)}</b>
                <span>Read-only Children access</span>
              </div>
              <button
                class="link"
                @click=${() => this._revokeChildViewer(uid)}
              >
                Revoke
              </button>
            </div>`,
          )}
          ${viewers.length === 0
            ? ''
            : html`<div class="ring-note">
                Granted viewers see milestones &amp; growth insights
                only — never Pebble, the pediatrician summary, or any
                editing. Revoke any time.
              </div>`}
        </glass-panel>
      </section>
    `;
  }

  /** Light/dark theme toggle (lives in Settings, themes the whole
   *  Portal). Flips the html.theme-light class — CSS custom
   *  properties inherit through every component's shadow DOM — and
   *  persists the choice + syncs the browser theme-color meta. */
  _setTheme(light) {
    this._themeLight = light;
    try {
      document.documentElement.classList.toggle('theme-light', light);
      localStorage.setItem('portalTheme', light ? 'light' : 'dark');
      const m = document.querySelector('meta[name="theme-color"]');
      if (m) m.setAttribute('content', light ? '#f2ede3' : '#1f5c54');
    } catch (e) {
      /* storage blocked — the in-memory toggle still themes the session */
    }
  }

  /** MY CAIRN — levels + "what each level sees" + settings. */
  _renderCairnTab() {
    // Drill-down: "What Pebble knows" detail (like the iOS settings
    // page push). Opened from the Account-card row below.
    if (this._wpkOpen) return this._renderWpkDetail();
    const name = this.user?.displayName ?? 'You';
    const email = this.user?.email ?? '';
    const famName = this.family?.name ?? 'Your family';
    return html`
      ${this._renderTabHeader(
        'Settings',
        "Who's in your circle, and what each level can see",
      )}

      <section>
        <div class="grid-2">
          <div>
            <div class="section-head">
              <h2>Your Circles</h2>
              <button class="link" @click=${() => (this._membersOpen = true)}>
                Manage members
              </button>
            </div>
            <glass-panel padding="md" variant="strong">
              <family-circle
                .immediate=${this._liveImmediate()}
                .extended=${this._liveExtended()}
              ></family-circle>
            </glass-panel>
          </div>
          <div>
            <div class="section-head"><h2>What each level sees</h2></div>
            <glass-panel padding="md" variant="strong">
              <div class="set-row">
                <span class="si" style="color:var(--ink-blue);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6" stroke-linecap="round"/></svg>
                </span>
                <div class="sl"><b>You</b><span>Your account, your perspective.</span></div>
                <span class="set-pill" style="color:var(--ink-blue);border-color:var(--ink-blue);">You</span>
              </div>
              <div class="set-row">
                <span class="si" style="color:var(--ink-green);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="7" rx="3" ry="1.4"/><ellipse cx="12" cy="12" rx="6" ry="2.4"/><ellipse cx="12" cy="17" rx="8" ry="3"/></svg>
                </span>
                <div class="sl"><b>Your family</b><span>Your co-parent and your children.</span></div>
                <span class="set-pill" style="color:var(--ink-green);border-color:var(--ink-green);">Full access</span>
              </div>
              <div class="set-row">
                <span class="si" style="color:var(--ink-terracotta);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/></svg>
                </span>
                <div class="sl"><b>Your connections</b><span>Everyone who joined by invitation.</span></div>
                <span class="set-pill" style="color:var(--ink-terracotta);border-color:var(--ink-terracotta);">Activities only</span>
              </div>
            </glass-panel>
          </div>
        </div>
      </section>

      ${this._renderChildAccessSection()}

      <section>
        <div class="section-head"><h2>Account</h2></div>
        <glass-panel padding="md" variant="strong">
          <div class="set-row">
            <span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6"/></svg></span>
            <div class="sl"><b>Profile Settings</b><span>Your photo, display name, sign out.</span></div>
            <button class="link" @click=${() => (this._profileOpen = true)}>Edit</button>
          </div>
          <div class="set-row">
            <span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="3"/></svg></span>
            <div class="sl"><b>${famName}</b><span>Family name &amp; invite codes</span></div>
            <button class="link" @click=${() => (this._membersOpen = true)}>Manage</button>
          </div>
          <div class="set-row">
            <span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8"/></svg></span>
            <div class="sl"><b>Appearance</b><span>Applies across the Portal.</span></div>
            <div class="theme-seg" role="group" aria-label="Theme">
              <button
                class=${this._themeLight ? 'on' : ''}
                @click=${() => this._setTheme(true)}
              >
                Light
              </button>
              <button
                class=${this._themeLight ? '' : 'on'}
                @click=${() => this._setTheme(false)}
              >
                Dark
              </button>
            </div>
          </div>
          <!-- Portal v4 audit: the Activity-notifications + Pebble-
               milestone-alerts toggles were removed — they were dead
               decoration (no web notification backend; FCM push is
               iOS-only). Premium is kept as an informational line
               only: the web can't verify StoreKit subscription
               state, so the misleading green "Active" badge was
               dropped (manage the subscription in the iOS app). -->
          <div class="set-row">
            <span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.5 5 5.5.8-4 4 1 5.5L12 15l-5 2.3 1-5.5-4-4 5.5-.8z"/></svg></span>
            <div class="sl"><b>PebblePath Premium</b><span>Unlimited Pebble, summaries, and insights.</span></div>
            <span class="set-meta">Managed in the app</span>
          </div>
          ${this.ppIsMember
            ? html`<div class="set-row">
                <span class="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 3l9 5-9 5-9-5 9-5z"></path>
                    <path d="M3 13l9 5 9-5"></path>
                  </svg>
                </span>
                <div class="sl">
                  <b>What Pebble knows</b>
                  <span>The memory Pebble keeps about your family.</span>
                </div>
                <button class="link" @click=${() => { this._wpkOpen = true; }}>View</button>
              </div>`
            : ''}
          ${this._renderJoinAnotherFamilyRow()}
        </glass-panel>
      </section>
    `;
  }

  /** Phase 9 — Settings → "Join another family". Inline 6-char code
   *  input + Join button. Routes through `dataStore.redeemConnectCode`,
   *  the already-shipped flat-member redeem path. NOT privilege-
   *  sensitive (adds to `cairnMemberIds` only). */
  _renderJoinAnotherFamilyRow() {
    const code = this._joinAnotherCode ?? '';
    const canJoin = code.length === 6 && !this._joinAnotherBusy;
    return html`
      <div class="set-row set-row-join-another">
        <span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/><circle cx="12" cy="12" r="9"/></svg></span>
        <div class="sl">
          <b>Join another family</b>
          <span>Paste a 6-character connect code.</span>
        </div>
        <!-- 2026-05-23 — input + button moved to the row's right
             column to align with the rest of the settings rows
             (pill/badge slot). The join-cluster takes the right side
             on desktop; wraps to a second line below the .sl on
             narrow viewports via the @media rule on .set-row-join-
             another. -->
        <div class="join-cluster">
          <input
            class="join-code"
            type="text"
            inputmode="latin"
            autocapitalize="characters"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            maxlength="6"
            placeholder="ABC123"
            .value=${code}
            ?disabled=${this._joinAnotherBusy}
            @input=${(e) => this._onJoinAnotherCodeInput(e)}
            @keydown=${(e) => {
              if (e.key === 'Enter' && canJoin) {
                this._attemptJoinAnotherFamily();
              }
            }}
            aria-label="Connect code"
          />
          <button
            class="join-go"
            ?disabled=${!canJoin}
            @click=${() => this._attemptJoinAnotherFamily()}
          >
            ${this._joinAnotherBusy ? 'Joining…' : 'Join'}
          </button>
        </div>
        ${this._joinAnotherError
          ? html`<div class="join-error join-feedback">${this._joinAnotherError}</div>`
          : ''}
        ${this._joinAnotherSuccessName
          ? html`<div class="join-success join-feedback">
              ✓ Joined ${this._joinAnotherSuccessName}.
            </div>`
          : ''}
      </div>
    `;
  }

  /** Batch F — the Children gate for a non-member / non-viewer. An
   *  extended-ring member can REQUEST read-only access here; a parent
   *  approves it from My Cairn. A request never grants anything —
   *  firestore.rules enforce that the grant (childViewers) is a
   *  member-only write. UI state is driven by myChildAccessRequest. */
  _renderChildGate() {
    const req = this.myChildAccessRequest;
    const kids = this.children ?? [];
    const hasKids = kids.length > 0;
    const who =
      kids.length === 1 ? `${kids[0].name}'s` : "the children's";
    const backBtn = html`<button
      class="empty-cta ghost"
      @click=${() => (this._activeTab = 'activities')}
    >
      Back to Activities
    </button>`;

    if (!hasKids) {
      return html`
        <div class="empty-title">This area is private to parents</div>
        <div class="empty-sub">
          Children's milestones, growth insights and Pebble are visible
          only to parents on a PebblePath household — never to the
          extended Cairn. If you're a parent here and don't see your
          child, make sure you're signed in with your PebblePath
          account.
        </div>
        <div class="empty-actions">${backBtn}</div>
      `;
    }

    if (req?.status === 'pending') {
      return html`
        <div class="empty-title">Request sent</div>
        <div class="empty-sub">
          A parent on this family has been asked to share read-only
          access to ${who} milestones &amp; growth insights with you.
          You'll see it here as soon as they approve.
        </div>
        <div class="empty-actions">
          <button
            class="empty-cta ghost"
            @click=${() => this._withdrawChildAccess()}
          >
            Withdraw request
          </button>
          ${backBtn}
        </div>
      `;
    }

    if (req?.status === 'approved') {
      return html`
        <div class="empty-title">Access approved</div>
        <div class="empty-sub">
          A parent shared read-only access with you — loading ${who}
          view…
        </div>
        <div class="empty-actions">${backBtn}</div>
      `;
    }

    // No request, or a previously declined one (re-request allowed).
    return html`
      <div class="empty-title">This area is private to parents</div>
      <div class="empty-sub">
        Children's milestones &amp; growth insights are shared only
        with the parents by default. You can ask them to share a
        <strong>read-only</strong> view with you — they'll approve or
        decline, and you'll never get Pebble or editing access.
        ${req?.status === 'declined'
          ? html`<br /><span style="color:var(--text-tertiary);"
              >A parent declined a previous request.</span
            >`
          : ''}
      </div>
      <div class="empty-actions">
        <button
          class="empty-cta primary"
          @click=${() => this._requestChildAccess()}
        >
          Request read-only access
        </button>
        ${backBtn}
      </div>
      ${this._renderParentClaimSection(kids)}
    `;
  }

  /** P7 Item 3 (2026-05-20) — 2A "I'm a parent or caregiver of {child}"
   *  affordance, surfaced as a secondary section on the Children gate.
   *  Visible only when the family has children; sits BELOW the
   *  read-only request affordance so the read-only path stays the
   *  primary CTA for non-parents who simply want to follow. The 2A
   *  claim is for users who ARE a parent or active caregiver of a
   *  specific child — distinct from the family-level read-only flow.
   *  Mirrors iOS ChildrenView.nonParentClaimSection. */
  _renderParentClaimSection(kids) {
    if (!Array.isArray(kids) || kids.length === 0) return '';
    if (this._claimedChildName) {
      return html`
        <div class="claim-section">
          <div class="claim-sent">
            ✓ Claim sent for ${this._claimedChildName} — an existing
            parent will confirm you.
          </div>
        </div>
      `;
    }
    return html`
      <div class="claim-section">
        <div class="claim-title">
          Are you a parent or caregiver of one of them?
        </div>
        <div class="claim-sub">
          Claim the link — an existing parent confirms it. You'll get
          the full child experience once approved.
        </div>
        <div class="claim-list">
          ${kids.map(
            (child) => html`
              <button
                class="claim-btn"
                ?disabled=${this._claimingChildId !== null}
                @click=${() => this._claimChildAsParent(child)}
              >
                <span>I'm a parent or caregiver of ${child.name ?? 'this child'}</span>
                <span class="claim-chev" aria-hidden="true">›</span>
              </button>
            `,
          )}
        </div>
      </div>
    `;
  }

  /** CHILDREN — real PP-household child data (parents only). The
   *  scope chip + the member gate surface the "without sharing
   *  everything" boundary; non-members see the parent-only state. */
  _renderChildrenTab() {
    const cd = this._childData();
    const scope = html`<span class="scope-chip">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" stroke-linecap="round" /></svg>
      Private to parents
    </span>`;
    if (cd.hasPP) {
      const subtitle = cd.readonly
        ? 'Milestones & growth insights — read-only, shared by the parents'
        : 'Milestones and insights';
      const viewerScope = cd.readonly
        ? html`<span class="scope-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3.2"/></svg>
            Shared with you · read-only
          </span>`
        : scope;
      return html`
        ${this._renderTabHeader('Children', subtitle, viewerScope)}
        <section>
          <child-overview
            .child=${cd.child}
            .children=${cd.children}
            .milestones=${cd.milestones}
            .insights=${cd.insights}
            .dailyCard=${cd.dailyCard}
            ?readonly=${cd.readonly}
            @select-child=${this._onSelectChild}
            @ask-pebble=${this._onAskPebble}
          ></child-overview>
        </section>
      `;
    }
    return html`
      ${this._renderTabHeader(
        'Children',
        'Milestones and insights',
        scope,
      )}
      <section>
        <glass-panel padding="lg" variant="strong">
          <div class="empty-hero">
            <div class="empty-icon" aria-hidden="true">
              <svg viewBox="0 0 28 28" width="44" height="44">
                <circle cx="14" cy="9" r="5" fill="none" stroke="#3d9b8f" stroke-width="1.6" />
                <path d="M4 25c0-5.5 4.5-9 10-9s10 3.5 10 9" fill="none" stroke="#c67b5c" stroke-width="1.6" stroke-linecap="round" />
              </svg>
            </div>
            ${this._renderChildGate()}
          </div>
        </glass-panel>
      </section>
    `;
  }

  /** PEBBLE — the child-development advisor, PARENTS ONLY (member-only
   *  `askPebbleAboutChild` CF). Accounts without full child access
   *  don't get the tab at all (`_pebbleAvailable` filters it from the
   *  nav). This defensive branch only fires if such an account somehow
   *  lands here (stale state / deep link) — no activities-advisor
   *  fallback, no popup (removed 2026-05-17, Thomas's call). */
  _renderPebbleTab() {
    const cd = this._childData();
    if (this._pebbleAvailable && cd.child) {
      // Portal v4 — Pebble is the whole tab: no page header/subheader
      // and no card. <child-pebble> runs full-bleed (the "Private to
      // parents" pill is integrated into its own top strip). The
      // `pebble-full` class on <main> drops the gutters so the chat
      // surface reaches the nav bar.
      return html`
        <child-pebble
          .child=${cd.child}
          .messages=${cd.pebbleMessages}
          .sessions=${cd.pebbleSessions}
          .prefill=${this._pebblePrefill}
          .memberProfiles=${this.family?.memberProfiles ?? {}}
          .myUid=${this.user?.uid ?? ''}
        ></child-pebble>
      `;
    }
    return html`
      ${this._renderTabHeader('Pebble', 'Personalised guidance for parents')}
      <section>
        <glass-panel padding="lg" variant="strong">
          <div class="empty-hero">
            <div class="empty-icon" aria-hidden="true">
              <pebble-icon size="42" color="#3d9b8f"></pebble-icon>
            </div>
            <div class="empty-title">Pebble is for parents</div>
            <div class="empty-sub">
              Pebble is the child-development advisor for parents on
              this household. Ask a parent to add you to a child if you
              need access.
            </div>
          </div>
        </glass-panel>
      </section>
    `;
  }

  /** Floating liquid-glass Pebble — on every tab EXCEPT Pebble itself.
   *  PARENTS ONLY: reuses <child-pebble compact>. Accounts without
   *  full child access get no floating Pebble at all (no activities
   *  fallback — removed 2026-05-17). */
  _renderPebbleFab() {
    if (this._activeTab === 'pebble') return '';
    if (!this._pebbleAvailable) return '';
    const cd = this._childData();
    if (!cd.child) return '';
    // 2026-05-23 — Pebble Ripple Stone (was double-ring target).
    const pico = html`<pebble-icon></pebble-icon>`;
    return html`
      <button
        class="pebble-fab"
        aria-label="Ask Pebble"
        title="Ask Pebble"
        @click=${() => (this._pebbleFabOpen = !this._pebbleFabOpen)}
      >
        ${pico}<span class="lbl">Ask Pebble</span>
      </button>
      ${this._pebbleFabOpen
        ? html`<div
            class="pebble-fab-panel"
            role="dialog"
            aria-label="Pebble"
          >
            <div class="pebble-fab-head">
              <span class="ttl">${pico} Pebble</span>
              <button
                class="x"
                aria-label="Close"
                @click=${() => (this._pebbleFabOpen = false)}
              >
                ×
              </button>
            </div>
            <div class="pebble-fab-body">
              <child-pebble
                compact
                .child=${cd.child}
                .messages=${cd.pebbleMessages}
                .sessions=${cd.pebbleSessions}
                .prefill=${this._pebblePrefill}
                .memberProfiles=${this.family?.memberProfiles ?? {}}
                .myUid=${this.user?.uid ?? ''}
              ></child-pebble>
            </div>
          </div>`
        : ''}
    `;
  }

  render() {
    // Modals below still need the resolved member lists; the per-tab
    // sections recompute their own (cheap derivations) so each helper
    // stays self-contained.
    const immediate = this._liveImmediate();
    const extended = this._liveExtended();
    const allMembers = immediate.concat(extended);

    return html`
      <div class="topbar">
        <div class="brand">
          <img
            class="brand-icon"
            src=${`${import.meta.env.BASE_URL}assets/cairn-icon.png`}
            srcset=${`${import.meta.env.BASE_URL}assets/cairn-icon.png 1x, ${import.meta.env.BASE_URL}assets/cairn-icon-2x.png 2x`}
            alt="Portal"
            width="38"
            height="38"
          />
          <!-- 2026-05-16 — wordmark text removed from the logged-in
               topbar per Thomas; the stone icon stays as the brand mark. -->
        </div>
        ${this._renderTabBar()}
        <div class="who">
          <button
            class="activity-btn"
            @click=${() => this._openCreate()}
            title="New activity"
          >
            <span aria-hidden="true">+</span>
            <span class="activity-btn-label">Activity</span>
          </button>
          <button
            class="avatar-tap"
            @click=${() => (this._activeTab = 'cairn')}
            title="${this.user?.displayName ?? 'Profile'} — open Settings"
            aria-label="Open Settings"
          >
            <member-chip
              .name=${this.user?.displayName ?? 'You'}
              .photo=${this.user?.photoURL ?? ''}
              .hue=${198}
              size="36"
            ></member-chip>
          </button>
        </div>
      </div>

      ${this.preview
        ? html`<div class="preview-banner">
            <strong>Preview mode</strong> — viewing the dashboard with placeholder
            data. <a href="?">Back to sign-in</a>.
          </div>`
        : ''}

      <main class=${this._activeTab === 'pebble' ? 'pebble-full' : ''}>
        ${this._renderActiveTab()}
        ${this._activeTab === 'pebble'
          ? ''
          : html`<discover-pebblepath></discover-pebblepath>`}
      </main>

      ${this._renderBottomNav()}

      ${this._renderPebbleFab()}

      <trip-form
        ?open=${this._formOpen}
        .trip=${this._formTrip}
        .members=${immediate}
        .extendedMembers=${this._liveExtended()}
        .connectionMembers=${this._liveConnections()}
        .currentUid=${this.user?.uid ?? ''}
        .familyId=${this.family?.id ?? ''}
        .busy=${this._formBusy}
        .formMode=${this._formMode}
        .subGroups=${this.family?.subGroups ?? {}}
        @save=${this._onSaveTrip}
        @remove=${this._onDeleteTrip}
        @cancel=${() => {
          this._formOpen = false;
          this._formTrip = null;
        }}
      ></trip-form>

      <activity-type-picker
        ?open=${this._typePickerOpen}
        @pick=${this._onTypePicked}
        @cancel=${() => (this._typePickerOpen = false)}
      ></activity-type-picker>

      <manage-members-modal
        ?open=${this._membersOpen}
        .family=${this.family}
        .immediate=${immediate}
        .extended=${extended}
        .canRemove=${this.ppIsMember}
        @cancel=${() => (this._membersOpen = false)}
      ></manage-members-modal>

      <event-form
        ?open=${this._eventFormOpen}
        .event=${this._eventFormEvent}
        .members=${allMembers}
        .familyId=${this.family?.id ?? ''}
        .busy=${this._eventFormBusy}
        @save=${this._onSaveEvent}
        @remove=${this._onDeleteEvent}
        @cancel=${() => {
          this._eventFormOpen = false;
          this._eventFormEvent = null;
        }}
      ></event-form>

      <all-trips-modal
        ?open=${this._allTripsOpen}
        .trips=${this._circleTrips()}
        .members=${allMembers}
        @open-planner=${(e) => {
          this._allTripsOpen = false;
          this._openPlanner(e.detail);
        }}
        @edit-trip=${(e) => {
          this._allTripsOpen = false;
          this._openEdit(e.detail);
        }}
        @cancel=${() => (this._allTripsOpen = false)}
      ></all-trips-modal>

      <import-calendar-modal
        ?open=${this._importOpen}
        @cancel=${() => (this._importOpen = false)}
        @open-trip-planner=${(e) => this._onOpenTripPlannerFromImport(e)}
      ></import-calendar-modal>

      <school-import-modal
        ?open=${this._schoolImportOpen}
        @cancel=${() => (this._schoolImportOpen = false)}
        @added=${() => (this._schoolImportOpen = false)}
      ></school-import-modal>

      <profile-sheet
        ?open=${this._profileOpen}
        .user=${this.user}
        .pebbleUser=${this.pebbleUser}
        @cancel=${() => (this._profileOpen = false)}
      ></profile-sheet>
    `;
  }
  // ── Close-the-loop Slice 3 (2026-05-28) — family-scope brief ──
  //
  // The multi-child Family Brief, generated server-side nightly
  // (scheduledFamilyBriefs CF) + read via dataStore. Bullet-based
  // (brief mode); each bullet carries a `kind` mapped to a categorical
  // icon tile + tint, mirroring the iOS InformationalBriefCard. Refresh
  // calls the refreshFamilyBrief callable (full memory-bank rebuild).
  // Only renders when a card exists — the server only writes one for
  // multi-child families, so presence implies N>=2.
  _renderFamilyBrief(cd) {
    const fc = cd.familyDailyCard;
    if (!fc) return '';
    const bullets = Array.isArray(fc.bullets) ? fc.bullets : [];
    const spinning = this._refreshingFamilyBrief ? 'spinning' : '';
    // Pebble watermark (top-left, faint, behind content) mirrors the
    // iOS dashboard-card design language. preserveAspectRatio="none"
    // lets the silhouette fill its box from its native viewBox.
    const wm = this._pebblePath('plan');
    return html`
      <section class="family-brief">
        <glass-panel padding="sm" variant="strong">
          <div class="fb-card">
            <svg
              class="fb-watermark"
              viewBox=${wm.vb}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d=${wm.d} fill="#3d9b8f"></path>
            </svg>
            <div class="fb-content">
              <div class="fb-head">
                <div class="fb-tag">
                  <pebble-icon size="20"></pebble-icon>
                  <span>Family brief</span>
                </div>
                <button
                  class="fb-refresh ${spinning}"
                  title="Refresh brief"
                  aria-label="Refresh family brief"
                  ?disabled=${this._refreshingFamilyBrief}
                  @click=${() => this._onRefreshFamilyBrief()}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
                    stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12a9 9 0 1 1-2.64-6.36"></path>
                    <path d="M21 4v5h-5"></path>
                  </svg>
                </button>
              </div>
              <h3 class="fb-title">${fc.title}</h3>
              ${bullets.length
                ? html`<ul class="fb-bullets">
                    ${bullets.map((b) => this._renderBriefBullet(b))}
                  </ul>`
                : html`<p class="fb-body">${fc.body}</p>`}
            </div>
          </div>
        </glass-panel>
      </section>
    `;
  }

  _renderBriefBullet(b) {
    const kind =
      b && typeof b.kind === 'string' ? b.kind : 'other';
    const text = b && typeof b.text === 'string' ? b.text : '';
    const tint = this._briefTint(kind);
    const peb = this._pebblePath(kind);
    // Icon = a faint-tint pebble silhouette (the "pebble design") with
    // the saturated-tint category glyph on top — mirrors the iOS
    // tile-at-0.16 + saturated-glyph contrast, in the brand pebble shape.
    return html`<li class="fb-bullet">
      <span class="fb-ico">
        <svg
          class="fb-ico-peb"
          viewBox=${peb.vb}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d=${peb.d} fill=${tint} fill-opacity="0.2"></path>
        </svg>
        <span class="fb-ico-glyph" style="color:${tint};"
          >${this._briefGlyph(kind)}</span
        >
      </span>
      <span class="fb-text">${text}</span>
    </li>`;
  }

  /** Bullet-kind tint, mirroring the iOS BriefBulletKind tint map onto
   *  the Portal palette (milestone-domain + brand tokens). */
  _briefTint(kind) {
    switch (kind) {
      case 'plan': return '#3d9b8f'; // teal
      case 'weather': return '#d4a843'; // amber / language
      case 'packing': return '#8b7bb5'; // purple / cognitive
      case 'coordinate': return '#6b9ac4'; // blue / motor
      case 'action': return '#c67b5c'; // terracotta
      case 'trip': return '#2d7a70'; // teal dark
      case 'rhythm': return '#c98a8a'; // rose / social
      case 'memory': return '#1f5c54'; // teal deep
      default: return '#8a8f98'; // muted
    }
  }

  /** Hand-drawn pebble silhouette per bullet kind. Paths are the 7
   *  brand pebbles (a–g) ported verbatim from the iOS PebbleShapes
   *  library / design-sandbox `<defs>`. Each kind maps to a stable
   *  shape so a given category always renders the same pebble. */
  _pebblePath(kind) {
    const P = {
      a: { vb: '0 0 100 70', d: 'M 8 38 C 6 18, 26 6, 48 8 C 72 10, 94 18, 94 38 C 94 58, 72 66, 48 64 C 22 62, 10 58, 8 38 Z' },
      b: { vb: '0 0 80 90', d: 'M 38 6 C 56 8, 70 24, 72 46 C 74 70, 58 84, 38 84 C 16 84, 6 66, 8 44 C 10 22, 22 4, 38 6 Z' },
      c: { vb: '0 0 90 80', d: 'M 14 26 C 18 10, 38 4, 56 8 C 78 14, 86 32, 82 50 C 76 70, 54 78, 32 72 C 12 66, 10 42, 14 26 Z' },
      d: { vb: '0 0 70 60', d: 'M 8 30 C 8 14, 22 6, 38 8 C 54 10, 64 22, 62 36 C 60 52, 44 56, 28 54 C 14 52, 8 44, 8 30 Z' },
      e: { vb: '0 0 110 75', d: 'M 8 38 C 6 18, 30 8, 56 10 C 84 12, 104 22, 104 40 C 102 58, 80 68, 52 66 C 24 64, 10 56, 8 38 Z' },
      f: { vb: '0 0 95 75', d: 'M 14 24 C 18 10, 40 6, 56 12 C 70 18, 80 18, 86 30 C 90 44, 80 56, 64 60 C 48 64, 28 60, 18 50 C 10 42, 10 32, 14 24 Z' },
      g: { vb: '0 0 80 80', d: 'M 14 20 C 20 10, 36 6, 52 10 C 68 16, 76 30, 72 48 C 66 64, 50 72, 32 66 C 16 60, 8 44, 10 30 C 12 24, 12 22, 14 20 Z' },
    };
    const map = {
      plan: 'e', weather: 'a', packing: 'c', coordinate: 'g',
      action: 'd', trip: 'f', rhythm: 'b', memory: 'c', other: 'a',
    };
    return P[map[kind] ?? 'a'];
  }

  /** Categorical SVG glyph per bullet kind. Stroke = currentColor so
   *  the tint flows from the .fb-ico color. Simple, recognizable
   *  shapes — the iOS SF Symbols don't translate 1:1 to the web. */
  _briefGlyph(kind) {
    const a = {
      width: 14, height: 14, viewBox: '0 0 24 24',
    };
    switch (kind) {
      case 'plan': // sparkle
        return html`<svg viewBox=${a.viewBox} width=${a.width} height=${a.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3v5M12 16v5M3 12h5M16 12h5"></path>
          <path d="M6.5 6.5l2.5 2.5M15 15l2.5 2.5M17.5 6.5L15 9M9 15l-2.5 2.5"></path>
        </svg>`;
      case 'weather': // sun
        return html`<svg viewBox=${a.viewBox} width=${a.width} height=${a.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19"></path>
        </svg>`;
      case 'packing': // suitcase
        return html`<svg viewBox=${a.viewBox} width=${a.width} height=${a.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="8" width="16" height="12" rx="2"></rect>
          <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
        </svg>`;
      case 'coordinate': // two people
        return html`<svg viewBox=${a.viewBox} width=${a.width} height=${a.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="8" r="3"></circle>
          <path d="M3.5 20a5.5 5.5 0 0 1 11 0"></path>
          <circle cx="17" cy="9" r="2.4"></circle>
          <path d="M16 14.2a4.5 4.5 0 0 1 4.5 4.8"></path>
        </svg>`;
      case 'action': // checkmark
        return html`<svg viewBox=${a.viewBox} width=${a.width} height=${a.height}
          fill="none" stroke="currentColor" stroke-width="2.4"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7"></path>
        </svg>`;
      case 'trip': // paper plane
        return html`<svg viewBox=${a.viewBox} width=${a.width} height=${a.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 4L3 11l6 2.5L21 4z"></path>
          <path d="M9 13.5V20l3.5-3.8"></path>
        </svg>`;
      case 'rhythm': // clock
        return html`<svg viewBox=${a.viewBox} width=${a.width} height=${a.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="8"></circle>
          <path d="M12 8v4.5l3 1.8"></path>
        </svg>`;
      case 'memory': // heart
        return html`<svg viewBox=${a.viewBox} width=${a.width} height=${a.height}
          fill="currentColor" stroke="none">
          <path d="M12 20.5S4 15.5 4 9.8A3.8 3.8 0 0 1 12 7.4 3.8 3.8 0 0 1 20 9.8c0 5.7-8 10.7-8 10.7z"></path>
        </svg>`;
      default: // dot
        return html`<svg viewBox=${a.viewBox} width=${a.width} height=${a.height}
          fill="currentColor" stroke="none">
          <circle cx="12" cy="12" r="4"></circle>
        </svg>`;
    }
  }

  async _onRefreshFamilyBrief() {
    if (this.preview || this._refreshingFamilyBrief) return;
    this._refreshingFamilyBrief = true;
    try {
      await dataStore.refreshFamilyBrief();
      // The live _unsubFamilyDaily listener picks up the overwrite —
      // no manual state set needed.
    } catch (err) {
      console.warn('[Portal] refreshFamilyBrief failed:', err?.message ?? err);
    } finally {
      this._refreshingFamilyBrief = false;
    }
  }

  // ── 2026-05-28 — Next-trip card (replaces the per-child Pebble
  // Daily card on the Portal Home). The Family Brief above already
  // carries the operational message; this slot becomes a trip teaser
  // that routes to Activities on tap. ──

  /** Soonest ongoing-or-upcoming trip (end >= today), by start date.
   *  null when the circle has no current/future trips. */
  _nextUpcomingTrip() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let best = null;
    let bestStart = Infinity;
    for (const t of this._circleTrips()) {
      const s = parseLocalDate(t.start);
      if (!s) continue;
      const e = parseLocalDate(t.end) ?? s;
      if (e < today) continue; // already ended
      if (s.getTime() < bestStart) {
        best = t;
        bestStart = s.getTime();
      }
    }
    return best;
  }

  /** "May 22 – 26" (same month) / "May 30 – Jun 2" / "May 22" (single day). */
  _fmtTripRange(t) {
    const s = parseLocalDate(t.start);
    if (!s) return '';
    const e = parseLocalDate(t.end) ?? s;
    const opts = { month: 'short', day: 'numeric' };
    const ss = s.toLocaleDateString(undefined, opts);
    if (e.getTime() === s.getTime()) return ss;
    const sameMonth =
      s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();
    const ee = sameMonth ? String(e.getDate()) : e.toLocaleDateString(undefined, opts);
    return `${ss} – ${ee}`;
  }

  _renderNextTripCard() {
    const goActivities = () => {
      this._activeTab = 'activities';
    };
    const trip = this._nextUpcomingTrip();
    if (!trip) {
      return html`<button
        class="next-trip empty"
        @click=${goActivities}
        aria-label="Plan a trip in Activities"
      >
        <div class="nt-empty">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
            stroke="currentColor" stroke-width="1.8"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 4L3 11l6 2.5L21 4z"></path>
            <path d="M9 13.5V20l3.5-3.8"></path>
          </svg>
          <div class="nt-empty-title">No upcoming trips</div>
          <div class="nt-empty-sub">Plan one in Activities →</div>
        </div>
      </button>`;
    }
    const displayImage =
      (trip.previewImage && String(trip.previewImage).trim()) || trip.coverImage;
    const cover = displayImage
      ? `background-image: url("${displayImage}");`
      : `background: ${gradientForTrip(trip)};`;
    return html`<button
      class="next-trip ${displayImage ? 'has-image' : ''}"
      style=${cover}
      @click=${goActivities}
      aria-label="${trip.title} — open in Activities"
    >
      <div class="nt-scrim"></div>
      <div class="nt-overlay">
        <div class="nt-eyebrow">Next trip</div>
        <div class="nt-title">${trip.title}</div>
        <div class="nt-dates">
          ${this._fmtTripRange(trip)}${trip.location ? ` · ${trip.location}` : ''}
        </div>
      </div>
    </button>`;
  }

  // ── Close-the-loop Slice 4 (2026-05-28) — "What Pebble Knows" ──
  //
  // Read-only Portal mirror of the iOS SettingsMemoryView. Renders the
  // four Family Memory Engine layers (Anchors / Rhythms / Patterns /
  // Live context) as stacked panels with scope tags + a top-3 collapse.
  // Editing stays iOS-only — the web is a transparency surface so a
  // parent can SEE what Pebble has remembered. Parent-household only
  // (gated on ppIsMember; the data layer only subscribes for the
  // own-household path).
  _renderWpkDetail() {
    const anchors = this.pebbleAnchors ?? [];
    const rhythms = this.pebbleRhythms ?? [];
    const patterns = this.pebblePatterns ?? [];
    const live = this.pebbleLiveContext ?? [];
    return html`
      <button class="wpk-back" @click=${() => { this._wpkOpen = false; }}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
          stroke="currentColor" stroke-width="2.2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 5l-7 7 7 7"></path>
        </svg>
        Settings
      </button>
      ${this._renderTabHeader(
        'What Pebble knows',
        'The memory Pebble keeps about your family',
      )}
      <section class="wpk">
        <p class="wpk-intro">
          Pebble keeps a memory of your family in four layers. Edit anchors and
          rhythms in the PebblePath app; this is a read-only view on the web.
        </p>
        <div class="grid-2">
          ${this._wpkGroup({
            label: 'Anchors',
            subtitle: 'Rarely-changes facts: names, allergies, sizes, places.',
            empty: 'No anchors yet. Add facts Pebble should always know in the app.',
            items: anchors,
            glyph: 'anchor',
            row: (a) =>
              this._wpkRow({
                glyph: 'anchor',
                primary: a.label,
                secondary: a.value,
                scope: a.scope,
                childId: a.childId,
              }),
          })}
          ${this._wpkGroup({
            label: 'Rhythms',
            subtitle: 'Routines that repeat: bedtime, school, weekly classes.',
            empty: 'No rhythms yet. Add a routine Pebble should expect in the app.',
            items: rhythms,
            glyph: 'rhythm',
            row: (r) =>
              this._wpkRow({
                glyph: 'rhythm',
                primary: r.title,
                secondary: this._wpkCadence(r),
                scope: r.scope,
                childId: r.childId,
              }),
          })}
          ${this._wpkGroup({
            label: 'Patterns',
            subtitle: 'What Pebble has noticed about your family over time.',
            empty:
              'Patterns appear as Pebble learns from how you use the app. Nothing yet.',
            items: patterns,
            glyph: 'pattern',
            row: (p) =>
              this._wpkRow({
                glyph: 'pattern',
                primary: p.statement,
                scope: p.scope,
                childId: p.childId,
                hint: p.confidence < 0.6 ? 'Pebble is still learning this' : '',
              }),
          })}
          ${this._wpkGroup({
            label: 'Live context',
            subtitle: "This week's calendar, weather, handoffs, prep.",
            empty:
              'Calendar events, weather, and handoffs appear here. Nothing yet.',
            items: live,
            glyph: 'live',
            row: (i) =>
              this._wpkRow({
                glyph: 'live',
                primary: i.title,
                secondary: this._wpkRelDate(i.validFrom),
                scope: i.scope,
                childId: i.childId,
              }),
          })}
        </div>
      </section>
    `;
  }

  _wpkGroup({ label, subtitle, empty, items, row }) {
    const expanded = this._wpkExpanded.has(label);
    const shown = expanded ? items : items.slice(0, 3);
    return html`
      <div>
        <div class="section-head"><h3>${label}</h3></div>
        <glass-panel padding="md" variant="strong" stretch>
          <div class="wpk-sub">${subtitle}</div>
          ${items.length === 0
            ? html`<div class="wpk-empty">${empty}</div>`
            : html`<div class="wpk-rows">${shown.map(row)}</div>`}
          ${items.length > 3
            ? html`<button
                class="wpk-toggle"
                @click=${() => this._toggleWpk(label)}
              >
                ${expanded ? 'Show fewer' : `Show all ${items.length}`}
              </button>`
            : ''}
        </glass-panel>
      </div>
    `;
  }

  _wpkRow({ glyph, primary, secondary, scope, childId, hint }) {
    return html`<div class="wpk-row">
      <span class="wpk-ico">${this._wpkGlyph(glyph)}</span>
      <div class="wpk-body">
        <div class="wpk-primary">${primary}</div>
        ${secondary
          ? html`<div class="wpk-secondary">${secondary}</div>`
          : ''}
        <div class="wpk-tags">
          <span class="wpk-scope ${this._scopeClass(scope)}"
            >${this._scopeLabel(scope, childId)}</span
          >
          ${hint ? html`<span class="wpk-hint">${hint}</span>` : ''}
        </div>
      </div>
    </div>`;
  }

  _toggleWpk(label) {
    if (this._wpkExpanded.has(label)) this._wpkExpanded.delete(label);
    else this._wpkExpanded.add(label);
    this.requestUpdate();
  }

  _scopeClass(scope) {
    if (scope === 'child') return 'child';
    if (scope === 'member') return 'member';
    return 'family';
  }

  _scopeLabel(scope, childId) {
    if (scope === 'member') return 'Private';
    if (scope === 'child') {
      const kid = (this.ppChildren ?? []).find((c) => c.id === childId);
      return kid?.name ?? 'Child';
    }
    return 'Family';
  }

  _wpkCadence(r) {
    let cadence;
    switch (r.cadence) {
      case 'daily': cadence = 'Daily'; break;
      case 'weekday': cadence = 'Weekdays'; break;
      case 'weekly':
        cadence =
          Array.isArray(r.daysOfWeek) && r.daysOfWeek.length
            ? r.daysOfWeek.map((n) => this._weekdayShort(n)).filter(Boolean).join(', ')
            : 'Weekly';
        break;
      case 'monthly': cadence = 'Monthly'; break;
      case 'asNeeded': cadence = 'As needed'; break;
      default: cadence = r.cadence || '';
    }
    return r.timeOfDay ? `${cadence} · ${r.timeOfDay}` : cadence;
  }

  _weekdayShort(n) {
    return ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][n] ?? '';
  }

  _wpkRelDate(ts) {
    const millis = ts?.toMillis?.() ?? (ts ? new Date(ts).getTime() : 0);
    if (!millis) return '';
    const day = 24 * 3600 * 1000;
    const startOf = (t) => {
      const d = new Date(t);
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    };
    const diff = Math.round((startOf(millis) - startOf(Date.now())) / day);
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Tomorrow';
    if (diff === -1) return 'Yesterday';
    if (diff > 1) return `In ${diff} days`;
    return `${-diff} days ago`;
  }

  _wpkGlyph(kind) {
    const a = { width: 16, height: 16, viewBox: '0 0 24 24' };
    switch (kind) {
      case 'rhythm': // repeat
        return html`<svg viewBox=${a.viewBox} width=${a.width} height=${a.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 2l4 4-4 4"></path>
          <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
          <path d="M7 22l-4-4 4-4"></path>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
        </svg>`;
      case 'pattern': // insight / eye
        return html`<svg viewBox=${a.viewBox} width=${a.width} height=${a.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>`;
      case 'live': // calendar
        return html`<svg viewBox=${a.viewBox} width=${a.width} height=${a.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="5" width="18" height="16" rx="2"></rect>
          <path d="M3 9h18M8 3v4M16 3v4"></path>
        </svg>`;
      default: // anchor → map pin
        return html`<svg viewBox=${a.viewBox} width=${a.width} height=${a.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"></path>
          <circle cx="12" cy="9" r="2.5"></circle>
        </svg>`;
    }
  }

  _childData() {
    if (this.preview) {
      return {
        hasPP: true,
        readonly: false,
        children: mockChildren,
        child: mockChild,
        milestones: mockMilestones,
        insights: mockInsights,
        dailyCard: mockDailyCard,
        familyDailyCard: mockFamilyDailyCard,
        pebbleMessages: mockChildPebbleMessages,
        pebbleSessions: [],
      };
    }
    const children = this.ppChildren ?? [];
    const child =
      children.find((c) => c.id === this.selectedChildId) ??
      children[0] ??
      null;
    // Batch F: a parent-approved read-only child viewer also gets the
    // Children surface — but in readonly mode (no Pebble/pediatrician/
    // write). ppIsMember stays the full-rights gate.
    const canSee = Boolean((this.ppIsMember || this.ppIsChildViewer) && child);
    return {
      hasPP: canSee,
      readonly: Boolean(this.ppIsChildViewer && !this.ppIsMember),
      children,
      child,
      milestones: this.childMilestones ?? [],
      insights: this.childInsights ?? [],
      dailyCard: this.childDailyCard ?? null,
      familyDailyCard: this.familyDailyCard ?? null,
      pebbleMessages: this.childPebbleMessages ?? [],
      pebbleSessions: this.childPebbleSessions ?? [],
    };
  }

  _onSelectChild(e) {
    if (this.preview) return;
    dataStore.selectChild(e.detail);
  }

  _onAskPebble(e) {
    this._pebblePrefill = e.detail ?? '';
    this._activeTab = 'pebble';
  }

  // ── P7 Item 3 (2026-05-20) — per-child 2A claim handler ──
  // Files a co-parent claim against `requestToBeCoParent`. The claim
  // GRANTS NOTHING; an existing parent of the child must confirm it
  // (the deployed coParentRequests rule independently enforces this).
  // Mirrors iOS ChildrenView.nonParentClaimSection + Portal
  // join-family-screen.js _claimChild (same underlying dataStore call).
  async _claimChildAsParent(child) {
    if (this.preview) return;
    if (!child?.id || this._claimingChildId) return;
    this._claimingChildId = child.id;
    try {
      await dataStore.requestToBeCoParent(child.id);
      this._claimedChildName = child.name ?? 'your child';
    } catch (err) {
      toast(`Couldn't send the request: ${err.code ?? err.message}`, {
        duration: 5000,
      });
    } finally {
      this._claimingChildId = null;
    }
  }

  // ── Batch F — child-view access request/approval handlers ──
  async _requestChildAccess() {
    if (this.preview) return;
    try {
      await dataStore.requestChildAccess();
      toast("Request sent — a parent will be notified.");
    } catch (err) {
      toast(`Couldn't send request: ${err.code ?? err.message}`, {
        duration: 5000,
      });
    }
  }

  async _withdrawChildAccess() {
    if (this.preview) return;
    try {
      await dataStore.withdrawChildAccessRequest();
      toast('Request withdrawn.');
    } catch (err) {
      toast(`Couldn't withdraw: ${err.code ?? err.message}`, {
        duration: 4000,
      });
    }
  }

  async _approveChildAccess(uid) {
    try {
      await dataStore.approveChildAccess(uid);
      toast('Access granted — read-only Children view.');
    } catch (err) {
      toast(`Couldn't approve: ${err.code ?? err.message}`, {
        duration: 5000,
      });
    }
  }

  async _declineChildAccess(uid) {
    try {
      await dataStore.declineChildAccess(uid);
      toast('Request declined.');
    } catch (err) {
      toast(`Couldn't decline: ${err.code ?? err.message}`, {
        duration: 4000,
      });
    }
  }

  async _revokeChildViewer(uid) {
    try {
      await dataStore.revokeChildViewer(uid);
      toast('Read-only access revoked.');
    } catch (err) {
      toast(`Couldn't revoke: ${err.code ?? err.message}`, {
        duration: 4000,
      });
    }
  }

  _ageShort(dob) {
    if (!dob || Number.isNaN(dob.getTime?.() ?? NaN)) return '';
    const now = new Date();
    let m =
      (now.getFullYear() - dob.getFullYear()) * 12 +
      (now.getMonth() - dob.getMonth());
    if (now.getDate() < dob.getDate()) m -= 1;
    m = Math.max(0, m);
    const y = Math.floor(m / 12);
    const mm = m % 12;
    if (y === 0) return `${mm} mo`;
    return `${y}y${mm ? ` ${mm}m` : ''}`;
  }

  /** TODAY — the landing glance: greeting + real upcoming activities +
   *  celebrations, plus a real child snapshot (parents) or a teaser. */
  _ageLong(dob) {
    if (!dob || Number.isNaN(dob.getTime?.() ?? NaN)) return '';
    const now = new Date();
    let m =
      (now.getFullYear() - dob.getFullYear()) * 12 +
      (now.getMonth() - dob.getMonth());
    if (now.getDate() < dob.getDate()) m -= 1;
    m = Math.max(0, m);
    const y = Math.floor(m / 12);
    const mm = m % 12;
    if (y === 0) return `${mm} month${mm === 1 ? '' : 's'}`;
    const ms = mm ? `, ${mm} month${mm === 1 ? '' : 's'}` : '';
    return `${y} year${y === 1 ? '' : 's'}${ms}`;
  }

  /** Combined upcoming activities (trips + celebrations) for Today's
   *  "Coming up" glance — soonest first, max 3. */
  _comingUp() {
    const out = [];
    for (const t of this._filteredTrips()) {
      if (!t.start) continue;
      out.push({
        kind: 'trip',
        title: t.title || 'Trip',
        sub: t.location || t.lodgingHost || '',
        date: t.start,
        chip: this._fmtRangeShort(t.start, t.end),
      });
    }
    for (const e of this._filteredEvents()) {
      if (!e.date) continue;
      const d = parseLocalDate(e.date);
      if (!d) continue;
      out.push({
        // school-import events get the distinct "external" treatment
        // (icon + colour), same family as holidays (Ellie ③).
        kind: e.source === 'school-import' ? 'external' : 'event',
        title: e.title || 'Celebration',
        sub: '',
        date: e.date,
        chip: d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
      });
    }
    // Public-holiday overlay — upcoming only (a glance, not history).
    const todayKey = new Date().toISOString().slice(0, 10);
    for (const h of this.holidays ?? []) {
      if (!h.date || h.date < todayKey) continue;
      const d = parseLocalDate(h.date);
      if (!d) continue;
      out.push({
        kind: 'holiday',
        title: h.title || 'Public holiday',
        sub: 'Public holiday',
        date: h.date,
        chip: d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
      });
    }
    return out
      .sort((a, b) => String(a.date).localeCompare(String(b.date)))
      .slice(0, 5);
  }

  _fmtRangeShort(start, end) {
    const s = parseLocalDate(start);
    const e = parseLocalDate(end);
    if (!s) return '';
    const sm = s.toLocaleDateString('en-GB', { month: 'short' });
    if (!e || (s.getDate() === e.getDate() && sm === e.toLocaleDateString('en-GB', { month: 'short' }))) {
      return `${s.getDate()} ${sm}`;
    }
    const em = e.toLocaleDateString('en-GB', { month: 'short' });
    return sm === em ? `${s.getDate()}–${e.getDate()} ${sm}` : `${s.getDate()} ${sm} – ${e.getDate()} ${em}`;
  }

  _tripGico() {
    return html`<span class="gico trip"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.62 3.05a1 1 0 0 0-1.12-.18L3.7 10.3c-.86.38-.83 1.62.05 1.95l6.06 2.27 2.27 6.06c.33.88 1.57.9 1.95.05L21.8 4.17a1 1 0 0 0-.18-1.12zM10.5 12.7l6.4-5.7-4.9 6.6-.1.1z"/></svg></span>`;
  }
  _eventGico() {
    return html`<span class="gico event"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.1 6.7C10.4 5 9.2 3.7 7.8 3.3c-1-.3-1.9.1-2.2.9-.4 1 .2 2.1 1 2.7 1 .75 2.5 1.05 4.5 1.05z"/><path d="M12.9 6.7c.7-1.7 1.9-3 3.3-3.4 1-.3 1.9.1 2.2.9.4 1-.2 2.1-1 2.7-1 .75-2.5 1.05-4.5 1.05z"/><rect x="3" y="8" width="8.1" height="3.5" rx="1"/><rect x="12.9" y="8" width="8.1" height="3.5" rx="1"/><rect x="4.1" y="11.7" width="7" height="9.1" rx="1.4"/><rect x="12.9" y="11.7" width="7" height="9.1" rx="1.4"/></svg></span>`;
  }
  // External/imported sources (Ellie ③) — visually distinct from
  // user-created trips/celebrations. Holiday = a calendar glyph
  // (calendar.svg, 2026-05-18 — replaced the prior sun glyph);
  // school-import = a school building.
  _holidayGico() {
    return html`<span class="gico holiday"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"/><path d="M3 10V6C3 4.89543 3.89543 4 5 4H7"/><path d="M7 2V6"/><path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"/></svg></span>`;
  }
  _schoolGico() {
    return html`<span class="gico school"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l9-5 9 5-9 5-9-5z"/><path d="M7 12.5V17c0 1 2.5 2.5 5 2.5s5-1.5 5-2.5v-4.5M21 10v5"/></svg></span>`;
  }
  _gicoFor(c) {
    if (c.kind === 'trip') return this._tripGico();
    if (c.kind === 'holiday') return this._holidayGico();
    if (c.kind === 'external') return this._schoolGico();
    return this._eventGico();
  }
}

customElements.define('home-screen', HomeScreen);
