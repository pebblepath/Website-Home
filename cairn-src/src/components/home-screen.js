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
    this.circle = 'family';
    this._formOpen = false;
    this._formTrip = null;
    this._formBusy = false;
    this._membersOpen = false;
    this._eventFormOpen = false;
    this._eventFormEvent = null;
    this._eventFormBusy = false;
    // Calendar nav state — initialized to "today" at first paint, then
    // user-controlled via prev/next or yearly month-tap.
    const t = new Date();
    this._displayMonth = new Date(t.getFullYear(), t.getMonth(), 1);
  }

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
    }
    .topbar {
      /* Padding + height match PebblePath website's <nav> exactly so the
         logo sits at the same screen coordinates when tabbing between
         pebblepath.ai and pebblepath.ai/cairn. */
      position: sticky;
      top: 0;
      z-index: 10;
      padding: 0 48px;
      height: 68px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      column-gap: 16px;
      background: rgba(20, 12, 6, 0.42);
      backdrop-filter: blur(28px) saturate(180%);
      -webkit-backdrop-filter: blur(28px) saturate(180%);
      border-bottom: 1px solid var(--glass-border);
    }
    .topbar circle-switcher {
      justify-self: center;
    }
    .topbar .who {
      justify-self: end;
    }
    @media (max-width: 768px) {
      .topbar {
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto;
        height: auto;
        padding: 10px 20px;
        row-gap: 10px;
      }
      .topbar .brand {
        grid-column: 1;
        grid-row: 1;
      }
      .topbar .who {
        grid-column: 2;
        grid-row: 1;
      }
      .topbar circle-switcher {
        grid-column: 1 / -1;
        grid-row: 2;
        justify-self: center;
      }
      .topbar .who .label {
        display: none;
      }
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .brand-name {
      font-family: var(--font-pebble);
      font-weight: 400;
      font-size: 24px;
      letter-spacing: 0.04em;
      line-height: 1;
      transform: translateY(2px);
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.22);
    }
    .who {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .who .label {
      font-size: 13px;
      color: var(--text-secondary);
      max-width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .signout {
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-tertiary);
      font: inherit;
      font-size: 12px;
      padding: 6px 12px;
      border-radius: var(--radius-pill);
      cursor: pointer;
      transition: color 200ms ease, border-color 200ms ease;
    }
    .signout:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    @media (max-width: 768px) {
      .signout {
        padding: 6px 10px;
        font-size: 11.5px;
      }
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
      padding: 32px 24px 120px;
      max-width: 1280px;
      margin: 0 auto;
    }
    @media (max-width: 768px) {
      main {
        padding: 20px 16px calc(110px + env(safe-area-inset-bottom));
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
      font-size: 13px;
      margin-top: 6px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
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

    .trips-row {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 18px;
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
      aspect-ratio: 1 / 1;
      border-radius: 10px;
      background: rgba(255, 248, 235, 0.04);
      border: 1px solid rgba(255, 248, 235, 0.06);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 6px 4px;
      font-size: 12px;
      color: var(--text-secondary);
      gap: 3px;
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
      background: var(--gradient-warmsun);
      color: var(--charcoal);
      font-weight: 700;
      border-color: rgba(255, 248, 235, 0.5);
    }
    .cal-cell.has-event {
      background: rgba(212, 168, 67, 0.12);
      border-color: rgba(212, 168, 67, 0.3);
      color: var(--text-primary);
    }
    .cal-cell.has-trip {
      background: rgba(61, 155, 143, 0.18);
      border-color: rgba(61, 155, 143, 0.35);
      color: var(--text-primary);
    }
    .cal-cell.has-trip.has-event {
      background: linear-gradient(
        135deg,
        rgba(61, 155, 143, 0.22) 0%,
        rgba(212, 168, 67, 0.22) 100%
      );
      border-color: rgba(201, 138, 138, 0.4);
    }

    .circle-block {
      padding: 14px 0;
      border-top: 1px solid rgba(255, 248, 235, 0.08);
    }
    .circle-block:first-child {
      border-top: none;
      padding-top: 0;
    }
    .circle-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .circle-head .name {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 15px;
    }
    .circle-head .count {
      color: var(--text-tertiary);
      font-size: 12px;
      margin-left: 8px;
      font-weight: 500;
    }
    .invite-btn {
      font-family: var(--font-body);
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      border-radius: var(--radius-pill);
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
    }
    .invite-btn:hover {
      border-color: var(--glass-border-strong);
      color: var(--text-primary);
    }
    .members-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .member-tile {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px 6px 6px;
      border-radius: var(--radius-pill);
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.1);
      font-size: 13px;
    }
    .empty-extended {
      color: var(--text-tertiary);
      font-size: 13px;
      padding: 8px 0;
    }
    .empty-extended button {
      margin-left: 6px;
      background: transparent;
      border: none;
      color: var(--terracotta);
      cursor: pointer;
      font: inherit;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    .fab {
      position: fixed;
      bottom: calc(24px + env(safe-area-inset-bottom));
      right: calc(24px + env(safe-area-inset-right));
      z-index: 20;
    }
    @media (max-width: 480px) {
      .fab {
        bottom: calc(16px + env(safe-area-inset-bottom));
        right: 16px;
      }
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
    return [];
  }

  _liveTrips() {
    if (this.preview) return mockTrips;
    return this.trips ?? [];
  }

  _liveEvents() {
    if (this.preview) return mockEvents;
    // Auto-derived children birthdays + manual familyEvents from Firestore.
    // For recurring events, resolve to the next upcoming occurrence so
    // the list sorts naturally by what's-coming-up.
    const autoEvents = deriveBirthdayEvents(this.children);
    const manualEvents = (this.events ?? []).map((e) => {
      const { date, yearsElapsed } = resolveEventOccurrence(e);
      return {
        ...e,
        date: date ? date.toISOString().slice(0, 10) : e.date,
        _yearsElapsed: yearsElapsed,
        _originalDate: e.date,
      };
    });
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

  _filteredTrips() {
    const trips = this._liveTrips();
    const uid = this.user?.uid ?? 'thomas';
    if (this.circle === 'personal') {
      return trips.filter((t) => t.attendees?.includes(uid));
    }
    if (this.circle === 'family') return trips.filter((t) => t.visibility !== 'extended');
    return trips;
  }

  _filteredEvents() {
    const memberIds = new Set(this._filteredMembers().map((m) => m.uid));
    return this._liveEvents().filter((e) => e.personIds.some((id) => memberIds.has(id)));
  }

  _tripDensityByDay(year) {
    const map = new Map();
    for (const t of this._filteredTrips()) {
      if (!t.start || !t.end) continue;
      const s = new Date(t.start);
      const e = new Date(t.end);
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

  _renderMonthly() {
    const today = new Date();
    const disp = this._displayMonth ?? today;
    const year = disp.getFullYear();
    const month = disp.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const offset = (firstDay + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const events = this._filteredEvents()
      .map((e) => new Date(e.date))
      .filter((d) => d.getFullYear() === year && d.getMonth() === month)
      .map((d) => d.getDate());
    const tripDays = new Set();
    for (const t of this._filteredTrips()) {
      if (!t.start || !t.end) continue;
      const s = new Date(t.start);
      const e = new Date(t.end);
      if (Number.isNaN(s.getTime()) || Number.isNaN(e.getTime())) continue;
      if (s.getFullYear() > year || e.getFullYear() < year) continue;
      if (s.getMonth() > month && e.getMonth() > month) continue;
      if (s.getMonth() < month && e.getMonth() < month) continue;
      const start = s.getMonth() === month ? s.getDate() : 1;
      const end = e.getMonth() === month ? e.getDate() : daysInMonth;
      for (let d = start; d <= end; d++) tripDays.add(d);
    }
    const cells = [];
    for (let i = 0; i < offset; i++) cells.push(html`<div class="cal-cell empty"></div>`);
    const isCurrentMonth =
      today.getFullYear() === year && today.getMonth() === month;
    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = isCurrentMonth && d === today.getDate();
      const hasEvent = events.includes(d);
      const hasTrip = tripDays.has(d);
      const cls = [
        'cal-cell',
        isToday ? 'today' : '',
        hasEvent ? 'has-event' : '',
        hasTrip ? 'has-trip' : '',
      ]
        .filter(Boolean)
        .join(' ');
      cells.push(html`<div class=${cls}>${d}</div>`);
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
      toast('Sign in to create real trips.');
      return;
    }
    if (!dataStore.familyId) {
      toast('You need a PebblePath family first.');
      return;
    }
    this._formTrip = null;
    this._formOpen = true;
  }

  _openEdit(trip) {
    if (this.preview) {
      toast('Sign in to edit real trips.');
      return;
    }
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
    const eventsThisMonth = filteredEvents.filter((e) => {
      const d = new Date(e.date);
      return d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth();
    });

    return html`
      <div class="topbar">
        <div class="brand">
          <cairn-mark size="38"></cairn-mark>
          <div class="brand-name">Cairn</div>
        </div>
        <div class="spacer"></div>
        <circle-switcher
          .value=${this.circle}
          @circle-change=${(e) => (this.circle = e.detail.value)}
        ></circle-switcher>
        <div class="spacer"></div>
        <div class="who">
          <span class="label">${this.user?.displayName ?? ''}</span>
          <member-chip
            .name=${this.user?.displayName ?? 'You'}
            .photo=${this.user?.photoURL ?? ''}
            .hue=${198}
            size="32"
          ></member-chip>
          ${this.preview
            ? ''
            : html`<button class="signout" @click=${() => signOutUser()} title="Sign out">
                Sign out
              </button>`}
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
            <div class="stat">
              <span>${filteredTrips.length}</span> trip${filteredTrips.length === 1 ? '' : 's'} ahead ·
              <span>${eventsThisMonth.length}</span> celebration${eventsThisMonth.length === 1 ? '' : 's'} this month
            </div>
            ${this.family?.name
              ? html`<div class="family-name">${this.family.name}</div>`
              : ''}
          </div>
        </div>

        <section>
          <div class="section-head">
            <h2>Coming up</h2>
            ${filteredTrips.length > 0
              ? html`<button class="link" @click=${() => toast('Trip list view is coming in Phase 3.')}>All trips →</button>`
              : ''}
          </div>
          ${filteredTrips.length === 0
            ? html`
                <glass-panel padding="lg" variant="strong">
                  <div style="text-align:center;color:var(--text-secondary);padding:14px 0;font-size:14.5px;line-height:1.5;">
                    No trips yet for this circle.<br />
                    <button
                      style="margin-top:10px;background:transparent;border:none;color:var(--terracotta);cursor:pointer;font:inherit;text-decoration:underline;text-underline-offset:3px;"
                      @click=${() => this._openCreate()}
                    >
                      Plan your first trip
                    </button>
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
                .events=${this._liveEvents()}
                .today=${today}
                @month-select=${(e) => this._jumpToMonth(e.detail.year, e.detail.month)}
              ></yearly-view>
            </glass-panel>
          </div>
        </section>

        <section>
          <div class="section-head">
            <h2>Celebrations</h2>
            <button class="link" @click=${() => this._openCreateEvent()}>+ Add event</button>
          </div>
          <glass-panel padding="md" variant="strong">
            ${filteredEvents.length === 0
              ? html`<div style="color:var(--text-tertiary);padding:18px 4px;font-size:13.5px;">
                  No birthdays or anniversaries yet.
                  <button
                    style="background:transparent;border:none;color:var(--terracotta);cursor:pointer;font:inherit;text-decoration:underline;text-underline-offset:3px;margin-left:4px;"
                    @click=${() => this._openCreateEvent()}
                  >
                    Add one
                  </button>
                </div>`
              : filteredEvents.map(
                  (e) => html`<event-row
                    .event=${e}
                    .members=${allMembers}
                    @edit-event=${(ev) => this._openEditEvent(ev.detail)}
                  ></event-row>`,
                )}
          </glass-panel>
        </section>

        <section>
          <div class="section-head">
            <h2>Your circles</h2>
            <button class="link" @click=${() => (this._membersOpen = true)}>
              Manage members
            </button>
          </div>
          <glass-panel padding="md" variant="strong">
            <div class="circle-block">
              <div class="circle-head">
                <div>
                  <span class="name">Immediate family</span>
                  <span class="count">${immediate.length} ${immediate.length === 1 ? 'person' : 'people'}</span>
                </div>
                <button class="invite-btn" @click=${() => (this._membersOpen = true)}>
                  Manage
                </button>
              </div>
              <div class="members-row">
                ${immediate.map(
                  (m) => html`
                    <div class="member-tile">
                      <member-chip
                        .name=${m.displayName}
                        .photo=${m.photoURL ?? ''}
                        .hue=${m.hue}
                        size="24"
                      ></member-chip>
                      ${m.displayName}
                    </div>
                  `,
                )}
              </div>
            </div>
            <div class="circle-block">
              <div class="circle-head">
                <div>
                  <span class="name">Extended family</span>
                  <span class="count">${extended.length} ${extended.length === 1 ? 'person' : 'people'}</span>
                </div>
                <button class="invite-btn" @click=${() => (this._membersOpen = true)}>
                  + Invite
                </button>
              </div>
              ${extended.length === 0
                ? html`<div class="empty-extended">
                    No one yet —
                    <button @click=${() => (this._membersOpen = true)}>
                      invite the grandparents
                    </button>
                  </div>`
                : html`<div class="members-row">
                    ${extended.map(
                      (m) => html`
                        <div class="member-tile">
                          <member-chip
                            .name=${m.displayName}
                            .photo=${m.photoURL ?? ''}
                            .hue=${m.hue}
                            size="24"
                          ></member-chip>
                          ${m.displayName}
                        </div>
                      `,
                    )}
                  </div>`}
            </div>
          </glass-panel>
        </section>

        <discover-pebblepath></discover-pebblepath>
      </main>

      <div class="fab">
        <glass-button variant="primary" size="lg" @click=${() => this._openCreate()}>
          + New trip
        </glass-button>
      </div>

      <trip-form
        ?open=${this._formOpen}
        .trip=${this._formTrip}
        .members=${immediate}
        .currentUid=${this.user?.uid ?? ''}
        .familyId=${this.family?.id ?? ''}
        .busy=${this._formBusy}
        @save=${this._onSaveTrip}
        @remove=${this._onDeleteTrip}
        @cancel=${() => {
          this._formOpen = false;
          this._formTrip = null;
        }}
      ></trip-form>

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
    `;
  }
}

customElements.define('home-screen', HomeScreen);
