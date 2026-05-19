import { LitElement, html, css } from 'lit';
import './cairn-mark.js';
import './glass-panel.js';
import './glass-button.js';
import './circle-switcher.js';
import './member-chip.js';
import './trip-card.js';
import './event-row.js';
import './yearly-view.js';
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
    _formOpen: { state: true },
    _formTrip: { state: true },
    _formBusy: { state: true },
    _membersOpen: { state: true },
    _eventFormOpen: { state: true },
    _eventFormEvent: { state: true },
    _eventFormBusy: { state: true },
    _displayMonth: { state: true },
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
    this.childPebbleMessages = [];
    this.childPebbleSessions = [];
    this.ppIsChildViewer = false;
    this.incomingChildRequests = [];
    this.myChildAccessRequest = null;
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

    .trips-row {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 18px;
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
    .cal-head .nav {
      display: flex;
      gap: 6px;
    }
    .cal-nav-btn {
      width: 36px;
      height: 36px;
      border-radius: 999px;
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-family: var(--font-body);
      padding: 0;
    }
    .cal-nav-btn:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .cal-today-btn {
      width: auto;
      padding: 0 12px;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .cal-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 6px;
    }
    .cal-dow {
      font-size: 11px;
      color: var(--text-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      text-align: center;
      padding: 6px 0;
    }
    .cal-cell {
      /* Shorter cells (3:2 ratio instead of square) so the monthly
         card has less vertical weight — keeps trip cards as the
         primary focus of the page. */
      aspect-ratio: 3 / 2;
      border-radius: 8px;
      background: rgba(255, 248, 235, 0.04);
      border: 1px solid var(--gridline);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 3px 5px 4px;
      font-size: 11.5px;
      color: var(--text-secondary);
      gap: 1px;
      position: relative;
      overflow: hidden;
    }
    .cal-cell .cal-cell-day {
      font-weight: 600;
    }
    .cal-cell .cal-cell-label {
      font-size: 10px;
      line-height: 1.15;
      font-weight: 500;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      opacity: 0.95;
      text-align: left;
      word-break: break-word;
      margin-top: auto;
    }
    @media (max-width: 480px) {
      .cal-cell .cal-cell-label {
        display: none;
      }
    }
    @media (max-width: 480px) {
      .cal-grid {
        gap: 4px;
      }
      .cal-cell {
        padding: 4px 2px;
        font-size: 11.5px;
        border-radius: 8px;
      }
      .cal-nav-btn {
        width: 32px;
        height: 32px;
      }
    }
    .cal-cell.empty {
      background: transparent;
      border-color: transparent;
    }
    .cal-cell.today {
      background: var(--today-bg);
      color: var(--today-fg);
      font-weight: 700;
      border-color: rgba(255, 248, 235, 0.5);
    }
    /* Holiday days — teal, distinct from trip-blue + celebration-
       amber (Ellie ③). Declared BEFORE has-event/has-trip so on a
       day that's both, the user's own trip/celebration wins the
       colour (this is just the public-holiday backdrop). */
    .cal-cell.has-holiday {
      background: var(--gradient-sage);
      border-color: rgba(61, 155, 143, 0.6);
      color: #fff;
      font-weight: 600;
    }
    .cal-cell.has-event {
      background: var(--gradient-celebration);
      border-color: rgba(255, 240, 215, 0.55);
      color: var(--charcoal);
      font-weight: 600;
    }
    .cal-cell.has-trip {
      background: var(--trip-day-bg);
      border-color: rgba(74, 144, 226, 0.75);
      color: var(--trip-day-fg);
      font-weight: 600;
    }
    .cal-cell.has-trip.has-event {
      background: linear-gradient(
        135deg,
        #6bb4e8 0%,
        #4a90e2 45%,
        #d4a843 100%
      );
      border-color: rgba(212, 168, 67, 0.65);
      color: var(--charcoal);
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
        transition: color 0.18s ease;
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
    // extended members never appeared on the dashboard. Read the
    // cairn ring from the family doc instead.
    return deriveExtendedMembers(this.user?.uid, this.family);
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
   *  PP family members (`memberIds`) see EVERY trip in their family
   *  regardless of the visibility flag — they're the household; trips
   *  scoped to "extended" or with no visibility set still belong to
   *  them. This is also a safety net for legacy trips written before
   *  the visibility field defaulted to 'family' in trip-form.
   *
   *  Cairn-only members (in `cairnMemberIds` but not `memberIds`) see
   *  trips where they're explicitly named (attendees / viewers) OR
   *  where visibility is `family` / `extended` — the whole point of
   *  the Cairn ring is to share trips with extended family. Personal
   *  trips stay creator-only.
   */
  _userCanSeeTrip(trip) {
    const uid = this.user?.uid;
    if (!uid) return false;
    if (trip.attendees?.includes(uid)) return true;
    if (trip.viewers?.includes(uid)) return true;

    const memberIds = this.family?.memberIds ?? [];
    const cairnIds = this.family?.cairnMemberIds ?? memberIds;
    const isPPMember = memberIds.includes(uid);
    const isCairnMember = cairnIds.includes(uid);

    // PP family members see everything in their family.
    if (isPPMember) return true;

    // Outside the ring entirely: no read.
    if (!isCairnMember) return false;

    // Cairn-only members: family + extended trips, with optional
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
    return this._liveEvents().filter((e) => e.personIds.some((id) => memberIds.has(id)));
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

    // 1. Ongoing trip wins above all (you're actually in it right now).
    for (const t of this._circleTrips()) {
      if (!t.start || !t.end) continue;
      const s = parseLocalDate(t.start);
      const e = parseLocalDate(t.end);
      s.setHours(0, 0, 0, 0);
      e.setHours(0, 0, 0, 0);
      if (s <= today && today <= e) {
        const dayN = daysFromToday(s) + 1;
        const total = daysFromToday(e) - daysFromToday(s) + 1;
        const where = t.location?.trim() || t.title;
        return `Day ${dayN} of ${total} in ${where}.`;
      }
    }

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
   * id) and the stone wires up dragover/drop so Cairn-only members can
   * be moved between rings by drag.
   *
   * Chip draggability: each chip is draggable when `draggable(member)`
   * returns true (typically: Cairn-only members, not self, not PP-only).
   * dragstart writes `text/cairn-uid` to dataTransfer; that's what the
   * drop handler reads back.
   */

  _renderMonthly() {
    const today = new Date();
    const disp = this._displayMonth ?? today;
    const year = disp.getFullYear();
    const month = disp.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const offset = (firstDay + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // Per-day label map — Map<day, string>. Lets the cell render a short
    // text caption (event title or trip title) underneath the day number
    // so the colour isn't the only signal.
    const dayLabels = new Map();
    const pushLabel = (day, label) => {
      if (!dayLabels.has(day)) dayLabels.set(day, label);
    };
    const events = [];
    for (const ev of this._filteredEvents()) {
      const d = parseLocalDate(ev.date);
      if (!d) continue;
      if (d.getFullYear() === year && d.getMonth() === month) {
        events.push(d.getDate());
        pushLabel(d.getDate(), ev.title ?? '');
      }
    }
    const tripDays = new Set();
    for (const t of this._filteredTrips()) {
      if (!t.start || !t.end) continue;
      const s = parseLocalDate(t.start);
      const e = parseLocalDate(t.end);
      if (Number.isNaN(s.getTime()) || Number.isNaN(e.getTime())) continue;
      if (s.getFullYear() > year || e.getFullYear() < year) continue;
      if (s.getMonth() > month && e.getMonth() > month) continue;
      if (s.getMonth() < month && e.getMonth() < month) continue;
      const start = s.getMonth() === month ? s.getDate() : 1;
      const end = e.getMonth() === month ? e.getDate() : daysInMonth;
      for (let d = start; d <= end; d++) {
        tripDays.add(d);
        pushLabel(d, t.title ?? '');
      }
    }
    // Public-holiday overlay on the grid (Ellie ③) — distinct dot
    // colour + the holiday name as the cell label.
    const holidayDays = new Set();
    for (const h of this.holidays ?? []) {
      const d = parseLocalDate(h.date);
      if (!d) continue;
      if (d.getFullYear() === year && d.getMonth() === month) {
        holidayDays.add(d.getDate());
        pushLabel(d.getDate(), h.title ?? 'Holiday');
      }
    }
    const cells = [];
    for (let i = 0; i < offset; i++) cells.push(html`<div class="cal-cell empty"></div>`);
    const isCurrentMonth =
      today.getFullYear() === year && today.getMonth() === month;
    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = isCurrentMonth && d === today.getDate();
      const hasEvent = events.includes(d);
      const hasTrip = tripDays.has(d);
      const hasHoliday = holidayDays.has(d);
      // Today gets its own preview label like trips/events do, so the
      // cell carries text (not just colour) consistently.
      const label = isToday ? (dayLabels.get(d) ?? 'Today') : dayLabels.get(d);
      const cls = [
        'cal-cell',
        isToday ? 'today' : '',
        hasEvent ? 'has-event' : '',
        hasTrip ? 'has-trip' : '',
        hasHoliday ? 'has-holiday' : '',
      ]
        .filter(Boolean)
        .join(' ');
      cells.push(html`<div class=${cls} title=${label ? `${d} — ${label}` : ''}>
        <span class="cal-cell-day">${d}</span>
        ${label ? html`<span class="cal-cell-label">${label}</span>` : ''}
      </div>`);
    }
    const monthName = new Date(year, month, 1).toLocaleString('en-GB', {
      month: 'long',
      year: 'numeric',
    });
    const showTodayBtn = !isCurrentMonth;
    return html`
      <div class="cal-head">
        <h3>${monthName}</h3>
        <div class="nav">
          ${showTodayBtn
            ? html`<button
                class="cal-nav-btn cal-today-btn"
                @click=${() => this._resetToToday()}
                title="Jump to today"
              >
                Today
              </button>`
            : ''}
          <button class="cal-nav-btn" @click=${() => this._shiftMonth(-1)} aria-label="Previous month">‹</button>
          <button class="cal-nav-btn" @click=${() => this._shiftMonth(1)} aria-label="Next month">›</button>
        </div>
      </div>
      <div class="cal-grid">
        ${['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => html`<div class="cal-dow">${d}</div>`)}
        ${cells}
      </div>
    `;
  }

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
   *  childViewers). Cairn-only ring members with NO approval get NO
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
      icon: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" /></svg>`,
    };
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
      {
        id: 'activities',
        label: 'Activities',
        icon: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /></svg>`,
      },
      ...(this._pebbleAvailable ? [pebbleTab] : []),
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
  _positionTabSlider({ animate = true } = {}) {
    const tabs = this.renderRoot?.querySelector('.tabs');
    if (!tabs) return;
    const slider = tabs.querySelector('.tab-slider');
    const active = tabs.querySelector('.tab.active');
    if (!slider || !active) return;
    if (!animate) {
      // Snap into position on first paint (and on resize) without
      // sliding from 0 — kill the transition for this frame, force a
      // reflow, then restore it.
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
    const tabs = this.renderRoot?.querySelector('.tabs');
    if (tabs && typeof ResizeObserver !== 'undefined') {
      this._tabsRO = new ResizeObserver(() => {
        this._positionTabSlider({ animate: false });
      });
      this._tabsRO.observe(tabs);
    }
  }

  disconnectedCallback() {
    this._tabsRO?.disconnect();
    this._tabsRO = null;
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

  _renderCalendarsSection() {
    const today = new Date();
    return html`
        <section>
          <div class="cal-row">
            <glass-panel padding="md" variant="strong" stretch>
              ${this._renderMonthly()}
            </glass-panel>
            <glass-panel padding="md" variant="strong" stretch>
              <div class="cal-head">
                <h3>${this._displayMonth?.getFullYear() ?? today.getFullYear()}</h3>
                <div style="font-size:12px;color:var(--text-tertiary);">Yearly</div>
              </div>
              <yearly-view
                .year=${this._displayMonth?.getFullYear() ?? today.getFullYear()}
                .tripDays=${this._tripDensityByDay(
                  this._displayMonth?.getFullYear() ?? today.getFullYear(),
                )}
                .trips=${this._circleTrips()}
                .events=${this._liveEvents()}
                .holidays=${this.holidays ?? []}
                .today=${today}
                @month-select=${(e) => this._jumpToMonth(e.detail.year, e.detail.month)}
              ></yearly-view>
            </glass-panel>
          </div>
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
      // Cairn-only / no PP child — greeting + activities glance only.
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
    const dc = cd.dailyCard;

    return html`
      ${this._renderTodayHeader(scope)}

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
            ${dc
              ? html`<div class="daily">
                  <div class="tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/></svg>
                    Pebble's daily
                  </div>
                  <h3>${dc.title}</h3>
                  <p>${dc.body}</p>
                  <button
                    class="ask"
                    @click=${() =>
                      this._onAskPebble({
                        detail:
                          dc.topicForChat ||
                          `Tell me more about: ${dc.title}`,
                      })}
                  >
                    Ask Pebble about this →
                  </button>
                </div>`
              : html`<div class="daily">
                  <div class="tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/></svg>
                    Pebble's daily
                  </div>
                  <h3>Pebble's note is on its way</h3>
                  <p>A fresh observation about ${cd.child.name} appears here each day once Pebble has enough to go on.</p>
                  <button class="ask" @click=${() => (this._activeTab = 'pebble')}>
                    Ask Pebble anything →
                  </button>
                </div>`}
          </div>
          ${comingPanel}
        </div>
      </section>

      <section>
        <div class="grid-2 today-insight-row">
          <glass-panel padding="md" variant="strong">
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
          <glass-panel padding="md" variant="strong">
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
      Shared with your connections
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
                <span class="si" style="color:var(--ink-purple);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/></svg>
                </span>
                <div class="sl"><b>Your connections</b><span>Everyone who joined by invitation.</span></div>
                <span class="set-pill" style="color:var(--ink-purple);border-color:var(--ink-purple);">Activities only</span>
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
            <div class="sl"><b>Appearance</b><span>Light or dark theme — applies across the Portal.</span></div>
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
        </glass-panel>
      </section>
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
              <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#3d9b8f" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4.5" fill="#3d9b8f" stroke="none" />
              </svg>
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
    const pico = html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none"/></svg>`;
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
            alt="Cairn"
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
}

customElements.define('home-screen', HomeScreen);
