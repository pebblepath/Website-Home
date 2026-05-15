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
import './profile-sheet.js';
import './pebble-chat.js';
import './activity-type-picker.js';
import './discover-pebblepath.js';
import {
  mockUser,
  mockMembers,
  mockTrips,
  mockEvents,
} from '../data/mock.js';
import {
  dataStore,
  deriveImmediateMembers,
  deriveExtendedMembers,
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
    preview: { type: Boolean },
    circle: { state: true },
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
    _profileOpen: { state: true },
    _typePickerOpen: { state: true },
    _formMode: { state: true },
    _pebbleOpen: { state: true },
    /** Currently-hovered drop target during a member drag — gives the
     *  receiving stone a highlighted ring so it's obvious where the
     *  drop will land. Holds the targetGroupId ('extended' or a sub-
     *  group id), or null when nothing is being dragged over. */
    _dragOverTarget: { state: true },
  };

  constructor() {
    super();
    this.user = mockUser;
    this.pebbleUser = null;
    this.family = null;
    this.children = [];
    this.trips = [];
    this.events = [];
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
    this._profileOpen = false;
    this._typePickerOpen = false;
    this._formMode = 'trip';
    this._pebbleOpen = false;
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
    :host {
      display: block;
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
      background: rgba(20, 12, 6, 0.42);
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
      background: rgba(255, 248, 235, 0.08);
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
      .activity-btn {
        padding: 8px 12px;
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

    main {
      padding: 32px 24px 48px;
      max-width: 1280px;
      margin: 0 auto;
    }
    @media (max-width: 768px) {
      main {
        padding: 20px 16px calc(32px + env(safe-area-inset-bottom));
      }
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
      }
    }
    .hello h1 {
      margin: 0;
      font-family: var(--font-display);
      font-size: clamp(30px, 4vw, 44px);
      line-height: 1.05;
      letter-spacing: -0.025em;
      background: linear-gradient(180deg, #fff 0%, rgba(255, 248, 235, 0.7) 100%);
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
      background: rgba(255, 248, 235, 0.05);
    }
    .hello .family-name-input {
      color: var(--text-primary);
      font-size: 14px;
      margin-top: 6px;
      letter-spacing: -0.005em;
      font-family: var(--font-body);
      font-weight: 500;
      background: rgba(255, 248, 235, 0.08);
      border: 1px solid rgba(255, 248, 235, 0.25);
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
    }
    .section-head h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
    .section-head .link {
      color: var(--text-secondary);
      font-size: 13px;
      cursor: pointer;
      background: transparent;
      border: none;
      font-family: var(--font-body);
    }
    .section-head .link:hover {
      color: var(--text-primary);
    }
    @media (max-width: 768px) {
      .section-head .link.hide-mobile {
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
      border: 1px solid rgba(255, 248, 235, 0.06);
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
      color: var(--text-tertiary);
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
    .cairn-meta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px dashed rgba(255, 248, 235, 0.1);
    }
    .cairn-meta button {
      background: transparent;
      border: none;
      color: var(--text-secondary);
      font: inherit;
      font-size: 12.5px;
      cursor: pointer;
    }
    .cairn-meta button:hover {
      color: var(--text-primary);
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
  _renderStone({
    label,
    members,
    pebbleClass,
    emptyLabel,
    onClick,
    maxChips = 6,
    dropTargetId = null,
    draggable = () => false,
  }) {
    const dropProps = dropTargetId
      ? {
          'dragover': (e) => {
            if (e.dataTransfer.types?.includes('text/cairn-uid')) {
              e.preventDefault();
              this._dragOverTarget = dropTargetId;
            }
          },
          'dragleave': () => {
            if (this._dragOverTarget === dropTargetId) this._dragOverTarget = null;
          },
          'drop': async (e) => {
            e.preventDefault();
            this._dragOverTarget = null;
            const uid = e.dataTransfer.getData('text/cairn-uid');
            if (!uid) return;
            const target = dropTargetId === 'extended' ? null : dropTargetId;
            try {
              await dataStore.setCairnMemberSubGroup(uid, target);
              toast(target ? `Moved to ${label}.` : 'Moved to extended.');
            } catch (err) {
              console.error('Move failed:', err);
              toast(`Couldn't move: ${err.code ?? err.message}`, { duration: 4000 });
            }
          },
        }
      : {};
    const isDropOver = dropTargetId && this._dragOverTarget === dropTargetId;
    const pebbleClassFull = `pebble ${pebbleClass}${isDropOver ? ' pebble-drop' : ''}`;

    if (!members || members.length === 0) {
      return html`
        <button
          class="stone"
          @click=${onClick}
          title=${emptyLabel}
          @dragover=${dropProps.dragover}
          @dragleave=${dropProps.dragleave}
          @drop=${dropProps.drop}
        >
          <span class="${pebbleClassFull} pebble-empty">${emptyLabel}</span>
          <span class="stone-label">${label}</span>
        </button>
      `;
    }
    const shown = members.slice(0, maxChips);
    const extra = members.length - shown.length;
    return html`
      <button
        class="stone"
        @click=${onClick}
        title="${label} — manage members"
        @dragover=${dropProps.dragover}
        @dragleave=${dropProps.dragleave}
        @drop=${dropProps.drop}
      >
        <span class="${pebbleClassFull}">
          <span class="stone-chips">
            ${shown.map((m) => {
              const isDraggable = draggable(m);
              return html`
                <member-chip
                  draggable=${isDraggable ? 'true' : 'false'}
                  class=${isDraggable ? 'is-draggable' : ''}
                  @dragstart=${(e) => {
                    if (!isDraggable) {
                      e.preventDefault();
                      return;
                    }
                    e.stopPropagation();
                    e.dataTransfer.setData('text/cairn-uid', m.uid);
                    e.dataTransfer.effectAllowed = 'move';
                  }}
                  .name=${m.displayName}
                  .photo=${m.photoURL ?? ''}
                  .hue=${m.hue}
                  size="26"
                ></member-chip>
              `;
            })}
            ${extra > 0 ? html`<span class="stone-more">+${extra}</span>` : ''}
          </span>
        </span>
        <span class="stone-label">${label}</span>
      </button>
    `;
  }

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
    const cells = [];
    for (let i = 0; i < offset; i++) cells.push(html`<div class="cal-cell empty"></div>`);
    const isCurrentMonth =
      today.getFullYear() === year && today.getMonth() === month;
    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = isCurrentMonth && d === today.getDate();
      const hasEvent = events.includes(d);
      const hasTrip = tripDays.has(d);
      // Today gets its own preview label like trips/events do, so the
      // cell carries text (not just colour) consistently.
      const label = isToday ? (dayLabels.get(d) ?? 'Today') : dayLabels.get(d);
      const cls = [
        'cal-cell',
        isToday ? 'today' : '',
        hasEvent ? 'has-event' : '',
        hasTrip ? 'has-trip' : '',
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

  render() {
    const filteredTrips = this._filteredTrips();
    const filteredEvents = this._filteredEvents();
    const immediate = this._liveImmediate();
    const extended = this._liveExtended();
    const allMembers = immediate.concat(extended);
    const firstName = (this.user?.displayName ?? 'there').split(' ')[0];
    const today = new Date();
    // "Activities this month" = trips overlapping the current month +
    // events landing in the current month. Trip-overlap counts the trip
    // once even if it spans multiple months.
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
          <div class="brand-name">Cairn</div>
        </div>
        <div
          class="pebble-search"
          @click=${(e) => {
            // Clicking the bar focuses the input. If the user types and
            // hits Enter, hand the seed query to the chat modal.
            if (e.target.tagName !== 'INPUT') {
              this.renderRoot.querySelector('.pebble-search-input')?.focus();
            }
          }}
        >
          <svg class="pebble-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
          </svg>
          <input
            class="pebble-search-input"
            type="text"
            placeholder="Ask Pebble — weekend plans, trip ideas…"
            @focus=${() => {
              // Open chat sheet on focus (sheet has its own composer);
              // blur the inline input so the modal's textarea can take
              // focus cleanly.
              this._pebbleOpen = true;
              this.renderRoot.querySelector('.pebble-search-input')?.blur();
            }}
            @keydown=${(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                this._pebbleOpen = true;
              }
            }}
            aria-label="Ask Pebble"
          />
        </div>
        <div class="who">
          <button
            class="pebble-mobile-btn"
            @click=${() => (this._pebbleOpen = true)}
            title="Ask Pebble"
            aria-label="Ask Pebble"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
            </svg>
          </button>
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
            @click=${() => (this._profileOpen = true)}
            title="${this.user?.displayName ?? 'Profile'} — open settings"
            aria-label="Open profile settings"
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

      <main>
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
        </div>

        <section>
          <div class="section-head">
            <h2>Coming up</h2>
            <div style="display:flex;gap:14px;align-items:baseline;">
              <button
                class="link hide-mobile"
                @click=${() => (this._importOpen = true)}
              >
                Import from Calendar
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
                    <div class="empty-title">A blank calendar — full of room.</div>
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
                      @edit-trip=${(e) => this._openEdit(e.detail)}
                    ></trip-card>`,
                  )}
                </div>
              `}
        </section>

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
                .today=${today}
                @month-select=${(e) => this._jumpToMonth(e.detail.year, e.detail.month)}
              ></yearly-view>
            </glass-panel>
          </div>
        </section>

        <section>
          <div class="cel-cairn-row">
            <!-- LEFT — Celebrations (combined Birthdays + Anniversaries
                 stacked in one card; width matches the monthly
                 calendar directly above it). -->
            <div class="cel-cairn-col">
              <div class="section-head">
                <h2>Celebrations</h2>
                <button class="link" @click=${() => this._openCreateEvent()}>+ Add event</button>
              </div>
              ${(() => {
                // Defensive sort: _liveEvents already sorts by date asc,
                // but re-sort each slice so any future mutation still
                // lands in chronological order.
                const byDate = (a, b) =>
                  String(a.date).localeCompare(String(b.date));
                const birthdays = filteredEvents
                  .filter((e) => e.type === 'birthday')
                  .slice()
                  .sort(byDate);
                const anniversaries = filteredEvents
                  .filter((e) => e.type === 'anniversary')
                  .slice()
                  .sort(byDate);
                const other = filteredEvents
                  .filter(
                    (e) => e.type !== 'birthday' && e.type !== 'anniversary',
                  )
                  .slice()
                  .sort(byDate);
                const renderBlock = (heading, list, emptyCopy) => html`
                  <div class="cel-stack-block">
                    <div class="cel-col-head">
                      <span class="cel-col-title">${heading}</span>
                    </div>
                    ${list.length === 0
                      ? html`<div class="cel-empty">${emptyCopy}</div>`
                      : list.map(
                          (e) => html`<event-row
                            .event=${e}
                            .members=${allMembers}
                            @edit-event=${(ev) => this._openEditEvent(ev.detail)}
                          ></event-row>`,
                        )}
                  </div>
                `;
                return html`
                  <glass-panel padding="md" variant="strong">
                    ${renderBlock('Birthdays', birthdays, 'No birthdays yet.')}
                    ${renderBlock(
                      'Anniversaries',
                      anniversaries,
                      'No anniversaries yet.',
                    )}
                    ${other.length > 0
                      ? renderBlock('Other', other, '')
                      : ''}
                  </glass-panel>
                `;
              })()}
            </div>

            <!-- RIGHT — Your Cairn (width matches the annual grid
                 directly above it). -->
            <div class="cel-cairn-col">
              <div class="section-head">
                <h2>Your Cairn</h2>
                <button class="link" @click=${() => (this._membersOpen = true)}>
                  Manage members
                </button>
              </div>
              <glass-panel padding="md" variant="strong">
                ${(() => {
              const me = immediate.find((m) => m.uid === this.user?.uid);
              // Viewer can be a PP household member (in memberIds) or
              // a Cairn-only joiner (cairnMemberIds only — extended
              // family). The stack lays out differently:
              //
              //   PP viewer       → Self pebble at top, Family stone
              //                     (co-parents + children), Extended
              //                     stone (cairn-only joiners), sub-groups.
              //   Extended viewer → No Self pebble. Family stone shows
              //                     the PP household they joined; the
              //                     viewer appears in the Extended stone
              //                     alongside any other Cairn joiners.
              const memberIdsSet = new Set(this.family?.memberIds ?? []);
              const isPPViewer = memberIdsSet.has(this.user?.uid);
              const familyMembers = immediate.filter(
                (m) => m.uid !== this.user?.uid,
              );
              const extendedMembers =
                !isPPViewer && me
                  ? [{ ...me, role: 'extended' }, ...extended]
                  : extended;
              const subGroupEntries = Object.entries(
                this.family?.subGroups ?? {},
              );
              const memberById = new Map(
                allMembers.map((m) => [m.uid, m]),
              );
              return html`
                <div class="cairn-stack">
                  ${isPPViewer
                    ? html`
                        <!-- Top: you (terracotta pebble) — PP viewer only. -->
                        <button
                          class="stone"
                          @click=${() => (this._profileOpen = true)}
                          title="Your profile"
                        >
                          <span class="pebble pebble-self">
                            <span class="stone-chips">
                              <member-chip
                                .name=${me?.displayName ?? this.user?.displayName ?? 'You'}
                                .photo=${me?.photoURL ?? this.user?.photoURL ?? ''}
                                .hue=${me?.hue ?? 198}
                                size="28"
                              ></member-chip>
                            </span>
                          </span>
                          <span class="stone-label">You</span>
                        </button>
                      `
                    : ''}

                  <!-- Family stone — for PP viewers this is co-parents +
                       children; for extended-family viewers it shows the
                       PP household they joined. -->
                  ${this._renderStone({
                    label: 'Family',
                    members: familyMembers,
                    pebbleClass: 'pebble-family',
                    emptyLabel: '+ Add co-parent or child',
                    onClick: () => (this._membersOpen = true),
                  })}

                  <!-- Extended (deeper teal, larger). For extended viewers
                       this is where the viewer's own avatar appears. -->
                  ${this._renderStone({
                    label: 'Extended',
                    members: extendedMembers,
                    pebbleClass: 'pebble-extended',
                    emptyLabel: '+ Invite extended family',
                    onClick: () => (this._membersOpen = true),
                    dropTargetId: 'extended',
                    draggable: (m) => m.role === 'extended',
                  })}

                  <!-- Sub-group base row — each stone is a drop target for
                       its group; chips inside are draggable so they can be
                       moved into another sub-group or back to extended. -->
                  ${subGroupEntries.length > 0
                    ? html`
                        <div class="subgroup-row">
                          ${subGroupEntries.map(([gid, g]) => {
                            const groupMembers = (g.memberIds ?? [])
                              .map((uid) => memberById.get(uid))
                              .filter(Boolean);
                            return this._renderStone({
                              label: g.name ?? 'Group',
                              members: groupMembers,
                              pebbleClass: 'pebble-subgroup',
                              emptyLabel: `${g.name ?? 'Group'} (empty)`,
                              onClick: () => (this._membersOpen = true),
                              maxChips: 4,
                              dropTargetId: gid,
                              draggable: (m) => m.role === 'extended',
                            });
                          })}
                        </div>
                      `
                    : ''}
                </div>
                ${familyMembers.length === 0 && extended.length === 0
                  ? html`
                      <div class="cairn-hint">
                        <span class="cairn-hint-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <ellipse cx="12" cy="6.5" rx="3.5" ry="1.5" />
                            <ellipse cx="12" cy="12" rx="6" ry="2.4" />
                            <ellipse cx="12" cy="18" rx="8" ry="3" />
                          </svg>
                        </span>
                        <div class="cairn-hint-body">
                          <div class="cairn-hint-title">Start stacking your cairn</div>
                          <div class="cairn-hint-sub">
                            Invite a partner, child or grandparent — every stone
                            adds shared trips, celebrations, and circles.
                          </div>
                        </div>
                        <button
                          class="cairn-hint-cta"
                          @click=${() => (this._membersOpen = true)}
                        >
                          Invite
                        </button>
                      </div>
                    `
                  : html`
                      <div class="cairn-meta">
                        <button @click=${() => (this._membersOpen = true)}>
                          + Invite
                        </button>
                        <span style="color:var(--text-tertiary);">·</span>
                        <button @click=${() => (this._membersOpen = true)}>
                          + Sub-group
                        </button>
                      </div>
                    `}
              `;
            })()}
              </glass-panel>
            </div>
          </div>
        </section>

        <discover-pebblepath></discover-pebblepath>
      </main>

      <trip-form
        ?open=${this._formOpen}
        .trip=${this._formTrip}
        .members=${immediate}
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

      <profile-sheet
        ?open=${this._profileOpen}
        .user=${this.user}
        .pebbleUser=${this.pebbleUser}
        @cancel=${() => (this._profileOpen = false)}
      ></profile-sheet>

      <pebble-chat
        ?open=${this._pebbleOpen}
        .family=${this.family}
        .trips=${this._circleTrips()}
        @cancel=${() => (this._pebbleOpen = false)}
      ></pebble-chat>
    `;
  }
}

customElements.define('home-screen', HomeScreen);
