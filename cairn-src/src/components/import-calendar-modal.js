import { LitElement, html, css } from 'lit';
import './glass-panel.js';
import './glass-button.js';
import {
  dataStore,
  fetchUpcomingCalendarEvents,
  normalizeCalendarEventToTrip,
} from '../services/data.js';
import { connectGoogleCalendar, auth } from '../services/firebase.js';
import { toast } from '../services/toast.js';

/**
 * Phase 4: Google Calendar import modal. Triggers OAuth re-auth with
 * calendar scope (silent if already granted), fetches the next 90 days
 * of events from the user's primary calendar, and lets them tick which
 * to import as Cairn trips/activities. Already-imported events (by
 * `gcalEventId`) are flagged and disabled to prevent duplicates.
 */
export class ImportCalendarModal extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    _events: { state: true },
    _selected: { state: true },
    _loading: { state: true },
    _error: { state: true },
    _importing: { state: true },
    /** Gate the Google OAuth popup behind an explicit "Connect" tap +
     *  an expectations note. During the beta the unverified-app +
     *  raw firebaseapp.com Google screens are unavoidable (fixing
     *  them = OAuth verification / custom auth domain, both deferred
     *  pre-public-launch). Auto-firing the popup on open made testers
     *  hit those screens with zero context; this primes them first. */
    _started: { state: true },
    /** 2026-05-22 — null = chooser, 'newTrips' = current behaviour
     *  (each event becomes its own Trip), 'addToTrip' = each event
     *  becomes a PlanItem on a user-picked existing Trip. */
    _mode: { state: true },
    /** Mode B — id of the chosen Trip the imported events will land in. */
    _targetTripId: { state: true },
    /** Mode B — events whose start date fell outside the chosen trip's
     *  inclusive range. Surfaced on the done screen. */
    _skippedOutOfRange: { state: true },
    /** Mode B — count of items just added, for the done copy. */
    _addedCount: { state: true },
  };

  constructor() {
    super();
    this.open = false;
    this._events = [];
    this._selected = new Set();
    this._loading = false;
    this._error = '';
    this._importing = false;
    this._started = false;
    this._mode = null;
    this._targetTripId = '';
    this._skippedOutOfRange = 0;
    this._addedCount = 0;
  }

  willUpdate(changed) {
    // Reset to the chooser step each time the modal (re)opens — do
    // NOT auto-fire the Google popup; the user starts it from the
    // intro. Mode + trip selections reset too so each open is a
    // fresh import session.
    if (changed.has('open') && this.open) {
      this._started = false;
      this._error = '';
      this._mode = null;
      this._targetTripId = '';
      this._skippedOutOfRange = 0;
      this._addedCount = 0;
    }
  }

  /** Trips eligible as Mode B destinations: any trip whose end date is
   *  today or later. Sorted by start date ascending. */
  _eligibleTrips() {
    const today = new Date().toISOString().slice(0, 10);
    const trips = Array.isArray(dataStore.state.trips) ? dataStore.state.trips : [];
    return trips
      .filter((t) => t && t.end && String(t.end) >= today)
      .sort((a, b) => String(a.start || '').localeCompare(String(b.start || '')));
  }

  _pickMode(mode) {
    this._mode = mode;
    if (mode === 'newTrips') {
      // Skip straight past trip-picker; the existing intro / connect
      // flow takes over from here.
    }
  }

  _pickTrip(tripId) {
    this._targetTripId = tripId;
  }

  _start() {
    if (this._loading) return;
    this._started = true;
    this._load();
  }

  async _load() {
    this._loading = true;
    this._error = '';
    try {
      const token = await connectGoogleCalendar();
      const events = await fetchUpcomingCalendarEvents(token, 90);
      const existingIds = new Set(
        (dataStore.state.trips ?? [])
          .filter((t) => t.gcalEventId)
          .map((t) => t.gcalEventId),
      );
      this._events = events.map((e) => ({
        ...e,
        _alreadyImported: existingIds.has(e.id),
      }));
      // Pre-select multi-day events that aren't already imported.
      const sel = new Set();
      for (const e of this._events) {
        if (e._alreadyImported) continue;
        const startD = e.start?.date ?? e.start?.dateTime?.slice(0, 10);
        const endD = e.end?.date ?? e.end?.dateTime?.slice(0, 10);
        if (startD && endD && endD !== startD) sel.add(e.id);
      }
      this._selected = sel;
    } catch (e) {
      console.error(e);
      this._error = e?.message ?? 'Could not load calendar events.';
    } finally {
      this._loading = false;
    }
  }

  _toggle(eventId) {
    const next = new Set(this._selected);
    if (next.has(eventId)) next.delete(eventId);
    else next.add(eventId);
    this._selected = next;
  }

  _toggleAll() {
    const importable = this._events.filter((e) => !e._alreadyImported);
    if (this._selected.size === importable.length) {
      this._selected = new Set();
    } else {
      this._selected = new Set(importable.map((e) => e.id));
    }
  }

  async _import() {
    if (this._importing || this._selected.size === 0) return;
    this._importing = true;
    const uid = auth?.currentUser?.uid;
    const toImport = this._events.filter((e) => this._selected.has(e.id));
    let okCount = 0;
    let failCount = 0;
    let skipped = 0;
    if (this._mode === 'addToTrip') {
      // Mode B — each event becomes a PlanItem on the chosen trip.
      // Skip events outside the trip's inclusive date range (locked
      // fork): drop them with a count rather than clamp to nearest day.
      const trip = this._eligibleTrips().find((t) => t.id === this._targetTripId);
      if (!trip) {
        this._importing = false;
        toast('Couldn’t find that activity. Try again.', { duration: 4000 });
        return;
      }
      for (const event of toImport) {
        const startDay = event.start?.date ?? event.start?.dateTime?.slice(0, 10);
        if (!startDay) { skipped++; continue; }
        if (startDay < trip.start || startDay > trip.end) {
          skipped++;
          continue;
        }
        // U7 7-A — add-to-trip writes a trip-attached /activities doc
        // (was a planItem, which U4's planner + U6's calendar no longer
        // read). saveActivity inherits the trip's audience via tripId.
        // Omit time/durationMins when absent (Firestore rejects undefined).
        const base = this._calendarEventToPlanItem(event, startDay);
        const activity = {
          title: base.title,
          type: base.type,
          day: base.day,
          tripId: trip.id,
          source: 'google-calendar',
        };
        if (base.time) activity.time = base.time;
        if (Number.isFinite(base.durationMins)) activity.durationMins = base.durationMins;
        try {
          await dataStore.saveActivity(activity);
          okCount++;
        } catch (err) {
          console.error('add-to-trip activity failed for event', event.id, err);
          failCount++;
        }
      }
      this._importing = false;
      this._skippedOutOfRange = skipped;
      this._addedCount = okCount;
      // Stay in the modal — switch to the done screen with the
      // "Open day plan" CTA (handled by render's mode==='addToTrip'
      // && _addedCount > 0 branch).
      return;
    }
    // Mode A — original behaviour. Each event becomes a Trip.
    for (const event of toImport) {
      const trip = normalizeCalendarEventToTrip(event, uid);
      try {
        await dataStore.saveTrip(trip);
        okCount++;
      } catch (err) {
        console.error('Import failed for event', event.id, err);
        failCount++;
      }
    }
    this._importing = false;
    if (failCount === 0) {
      toast(`Imported ${okCount} ${okCount === 1 ? 'activity' : 'activities'}.`);
    } else {
      toast(`Imported ${okCount}, ${failCount} failed.`, { duration: 5000 });
    }
    this._events = [];
    this._selected = new Set();
    this.dispatchEvent(new Event('cancel'));
  }

  /** Heuristic planItem-type assignment (mirrors iOS
   *  CalendarConnectSheet.heuristicPlanItemType). Falls back to
   *  'visit' so each imported item shows a meaningful icon in the
   *  planner; user can edit per-item later. */
  _calendarEventToPlanItem(event, startDay) {
    const text = `${event.summary ?? ''} ${event.description ?? ''}`.toLowerCase();
    let type = 'visit';
    if (/(lunch|dinner|breakfast|brunch|coffee|restaurant|caf[eé])/i.test(text)) {
      type = 'meal';
    } else if (/(flight|airline|airport|drive|train|taxi|uber|lyft|transfer)/i.test(text)) {
      type = 'travel';
    }
    // Time + duration only for timed events (not all-day).
    let time = '';
    let durationMins = undefined;
    if (event.start?.dateTime && event.end?.dateTime) {
      const s = new Date(event.start.dateTime);
      const e = new Date(event.end.dateTime);
      const hh = String(s.getHours()).padStart(2, '0');
      const mm = String(s.getMinutes()).padStart(2, '0');
      time = `${hh}:${mm}`;
      const mins = Math.round((e - s) / 60000);
      if (mins > 0) durationMins = Math.min(mins, 600);
    }
    return {
      title: (event.summary || '(untitled)').trim(),
      type,
      day: startDay,
      time,
      durationMins,
    };
  }

  /** Forward the "Open day plan" intent to home-screen via a custom
   *  event. home-screen's listener routes the user into the trip's
   *  detail / planner view, mirroring the iOS pendingTripPlannerOpen
   *  pattern. */
  _openPlannerForTarget() {
    if (!this._targetTripId) return;
    this.dispatchEvent(
      new CustomEvent('open-trip-planner', {
        detail: { tripId: this._targetTripId },
        bubbles: true,
        composed: true,
      }),
    );
    this._closeAndReset();
  }

  _closeAndReset() {
    this._events = [];
    this._selected = new Set();
    this._mode = null;
    this._targetTripId = '';
    this._skippedOutOfRange = 0;
    this._addedCount = 0;
    this._started = false;
    this.dispatchEvent(new Event('cancel'));
  }

  _onCancel() {
    this.dispatchEvent(new Event('cancel'));
  }

  _fmtRange(event) {
    const start = event.start?.date ?? event.start?.dateTime?.slice(0, 10);
    const end = event.end?.date ?? event.end?.dateTime?.slice(0, 10);
    if (!start) return '';
    const s = new Date(start);
    if (!end || end === start) {
      return s.toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    }
    // Google all-day end is exclusive; visually shift back by one day for display.
    let e = new Date(end);
    if (event.start?.date && event.end?.date) {
      e.setDate(e.getDate() - 1);
    }
    const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();
    const sameYear = s.getFullYear() === e.getFullYear();
    if (sameMonth) {
      return `${s.getDate()}–${e.getDate()} ${s.toLocaleString('en-GB', { month: 'short', year: 'numeric' })}`;
    }
    const sm = s.toLocaleString('en-GB', { day: 'numeric', month: 'short' });
    const em = e.toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    return sameYear ? `${sm} – ${em}` : `${s.toLocaleDateString()} – ${e.toLocaleDateString()}`;
  }

  static styles = css`
    * { box-sizing: border-box; }
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding: 6vh 24px;
      overflow-y: auto;
    }
    :host([open]) { display: flex; }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(20, 12, 6, 0.55);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: -1;
    }
    .sheet {
      position: relative;
      width: 100%;
      max-width: 680px;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to   { transform: translateY(0); opacity: 1; }
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .close {
      background: transparent;
      border: 1px solid var(--glass-border);
      width: 32px;
      height: 32px;
      border-radius: 999px;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 18px;
    }
    .lede {
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.55;
      margin: 0 0 18px;
    }
    .lede strong { color: var(--text-primary); font-weight: 600; }
    .list {
      max-height: 50vh;
      overflow-y: auto;
      margin: 6px -6px 0;
      padding: 0 6px;
    }
    .row {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 8px;
      border-radius: 10px;
      cursor: pointer;
      transition: background 180ms ease;
    }
    .row:hover {
      background: rgba(255, 248, 235, 0.04);
    }
    .row.disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .checkbox {
      width: 18px;
      height: 18px;
      border-radius: 5px;
      border: 1.5px solid rgba(255, 248, 235, 0.32);
      flex-shrink: 0;
      margin-top: 2px;
      position: relative;
      transition: all 160ms ease;
    }
    .row.on .checkbox {
      background: var(--teal-pebble);
      border-color: var(--teal-pebble);
    }
    .row.on .checkbox::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 6px;
      width: 4px;
      height: 8px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
    .body {
      flex: 1;
      min-width: 0;
    }
    .title {
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 14.5px;
      color: var(--text-primary);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .meta {
      color: var(--text-tertiary);
      font-size: 12px;
      margin-top: 3px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .badge {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 999px;
      background: rgba(122, 158, 126, 0.18);
      border: 1px solid rgba(122, 158, 126, 0.35);
      color: rgba(174, 191, 166, 0.95);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      align-self: center;
      flex-shrink: 0;
    }
    .loading,
    .empty,
    .error {
      padding: 28px 8px;
      text-align: center;
      color: var(--text-secondary);
      font-size: 14px;
      line-height: 1.5;
    }
    .error {
      color: var(--rose-soft);
    }
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 248, 235, 0.08);
    }
    .select-all {
      background: transparent;
      border: none;
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-size: 13px;
      cursor: pointer;
      padding: 4px 0;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    .select-all:hover {
      color: var(--text-primary);
    }
    .actions {
      display: flex;
      gap: 10px;
    }
    .intro {
      padding: 4px 2px 2px;
    }
    .intro-lede {
      margin: 0 0 14px;
      color: var(--text-secondary);
      font-size: 14px;
      line-height: 1.6;
    }
    .intro-lede strong { color: var(--text-primary); font-weight: 600; }
    .note {
      border: 1px solid var(--glass-border);
      background: rgba(255, 248, 235, 0.04);
      border-radius: 12px;
      padding: 12px 14px;
      color: var(--text-secondary);
      font-size: 12.5px;
      line-height: 1.6;
    }
    .note strong { color: var(--text-primary); font-weight: 600; }
    .note em { font-style: normal; color: var(--text-primary); }
    .note code {
      font-family: 'SF Mono', ui-monospace, monospace;
      font-size: 11.5px;
      background: rgba(255, 248, 235, 0.08);
      padding: 1px 5px;
      border-radius: 5px;
      word-break: break-all;
    }
    .intro-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 18px;
    }
    /* Mode chooser (new) */
    .mode-cards {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 6px;
    }
    .mode-card {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 16px;
      width: 100%;
      text-align: left;
      background: var(--glass-surface, rgba(255, 248, 235, 0.04));
      border: 1px solid var(--glass-border);
      border-radius: 16px;
      cursor: pointer;
      color: inherit;
      transition: background 180ms ease, transform 180ms ease;
    }
    .mode-card:hover:not(.disabled) {
      background: rgba(255, 248, 235, 0.08);
      transform: translateY(-1px);
    }
    .mode-card.disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }
    .mode-card-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-shrink: 0;
    }
    .mode-card-icon-a {
      background: linear-gradient(135deg, #3d9b8f, #1f5c54);
      box-shadow: 0 2px 4px rgba(61, 155, 143, 0.3);
    }
    .mode-card-icon-b {
      background: linear-gradient(135deg, #6bb4e8 0%, #4a90e2 55%, #3d9b8f 100%);
      box-shadow: 0 2px 4px rgba(74, 144, 226, 0.3);
    }
    .mode-card.disabled .mode-card-icon-b {
      background: linear-gradient(135deg, var(--text-tertiary), var(--text-secondary));
      box-shadow: none;
    }
    .mode-card-body { flex: 1; min-width: 0; }
    .mode-card-title {
      font-family: var(--font-display);
      font-size: 16px;
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: -0.01em;
    }
    .mode-card-subtitle {
      font-size: 13px;
      color: var(--text-secondary);
      margin-top: 4px;
      line-height: 1.45;
    }
    /* Trip picker rows (Mode B step 0.5) */
    .trip-picker-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 6px;
      max-height: 50vh;
      overflow-y: auto;
    }
    .trip-pick-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px;
      width: 100%;
      text-align: left;
      background: var(--glass-surface, rgba(255, 248, 235, 0.04));
      border: 1px solid var(--glass-border);
      border-radius: 12px;
      cursor: pointer;
      color: inherit;
      transition: background 180ms ease;
    }
    .trip-pick-row:hover {
      background: rgba(255, 248, 235, 0.08);
    }
    .trip-pick-body { flex: 1; min-width: 0; }
    .trip-pick-title {
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 600;
      color: var(--text-primary);
    }
    .trip-pick-dates {
      font-size: 12px;
      color: var(--text-secondary);
      margin-top: 3px;
    }
    .trip-pick-chev {
      font-size: 18px;
      color: var(--text-tertiary);
      flex-shrink: 0;
    }
    /* Mode B done — skipped-out-of-range note */
    .skipped-note {
      padding: 10px 14px;
      background: rgba(212, 168, 67, 0.12);
      border: 1px solid rgba(212, 168, 67, 0.30);
      border-radius: 10px;
      color: var(--text-primary);
      font-size: 13px;
      margin-top: 10px;
    }
  `;

  render() {
    if (!this.open) return html``;
    const importable = this._events.filter((e) => !e._alreadyImported);
    const allSelected = importable.length > 0 && this._selected.size === importable.length;

    // Phase routing. Order:
    //   1. _mode === null               → mode chooser
    //   2. mode='addToTrip' + no target → trip picker
    //   3. mode='addToTrip' + done      → success screen with planner CTA
    //   4. else                         → existing intro / load / list flow
    const showModeChooser = this._mode === null;
    const showTripPicker = this._mode === 'addToTrip' && !this._targetTripId;
    const showDoneScreen =
      this._mode === 'addToTrip' && this._addedCount > 0 && !this._importing;

    return html`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Import from Google Calendar</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          ${showModeChooser
            ? this._renderModeChooser()
            : showTripPicker
            ? this._renderTripPicker()
            : showDoneScreen
            ? this._renderDone()
            : this._renderLoadAndList(importable, allSelected)}
        </glass-panel>
      </div>
    `;
  }

  /** Step 0: pick mode. Two big-tap-target cards. */
  _renderModeChooser() {
    const eligible = this._eligibleTrips();
    const canModeB = eligible.length > 0;
    return html`
      <p class="lede">What would you like to do with your calendar events?</p>
      <div class="mode-cards">
        <button class="mode-card" @click=${() => this._pickMode('newTrips')}>
          <div class="mode-card-icon mode-card-icon-a">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
          </div>
          <div class="mode-card-body">
            <div class="mode-card-title">New Activities from calendar</div>
            <div class="mode-card-subtitle">Each event becomes its own Activity.</div>
          </div>
        </button>
        <button
          class="mode-card ${canModeB ? '' : 'disabled'}"
          ?disabled=${!canModeB}
          @click=${() => canModeB && this._pickMode('addToTrip')}
        >
          <div class="mode-card-icon mode-card-icon-b">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <line x1="12" y1="14" x2="12" y2="18"></line>
              <line x1="10" y1="16" x2="14" y2="16"></line>
            </svg>
          </div>
          <div class="mode-card-body">
            <div class="mode-card-title">Add events to an existing Activity</div>
            <div class="mode-card-subtitle">
              ${canModeB
                ? html`Pick a trip: events become items in its day planner.`
                : html`You'll need a current or upcoming Activity first.`}
            </div>
          </div>
        </button>
      </div>
    `;
  }

  /** Step 0.5 (Mode B only): pick destination trip. */
  _renderTripPicker() {
    const eligible = this._eligibleTrips();
    return html`
      <p class="lede">
        Which Activity should these events join? Each imported event becomes
        an item in the trip's day planner.
      </p>
      <div class="trip-picker-list">
        ${eligible.map(
          (t) => html`
            <button class="trip-pick-row" @click=${() => this._pickTrip(t.id)}>
              <div class="trip-pick-body">
                <div class="trip-pick-title">${t.title || '(untitled trip)'}</div>
                <div class="trip-pick-dates">${this._fmtTripRange(t)}</div>
              </div>
              <span class="trip-pick-chev">›</span>
            </button>
          `,
        )}
      </div>
      <div class="intro-actions">
        <glass-button variant="ghost" @click=${() => (this._mode = null)}>
          Back
        </glass-button>
      </div>
    `;
  }

  _fmtTripRange(t) {
    const s = t.start ? new Date(t.start) : null;
    const e = t.end ? new Date(t.end) : null;
    if (!s) return '';
    const opts = { day: 'numeric', month: 'short' };
    if (!e || +e === +s) return s.toLocaleDateString('en-GB', opts);
    return `${s.toLocaleDateString('en-GB', opts)} – ${e.toLocaleDateString('en-GB', opts)}`;
  }

  /** Mode B done screen. Shows imported count + skipped-out-of-range
   *  note + the "Open day plan" CTA. */
  _renderDone() {
    const trip = this._eligibleTrips().find((t) => t.id === this._targetTripId);
    const tripName = trip?.title || 'your Activity';
    return html`
      <p class="lede">
        Added <strong>${this._addedCount}</strong>
        ${this._addedCount === 1 ? 'item' : 'items'} to
        <strong>${tripName}</strong>'s day planner.
      </p>
      ${this._skippedOutOfRange > 0
        ? html`<div class="skipped-note">
            Skipped ${this._skippedOutOfRange}
            ${this._skippedOutOfRange === 1 ? 'event' : 'events'}
            outside the trip's dates.
          </div>`
        : ''}
      <div class="intro-actions">
        <glass-button variant="ghost" @click=${this._closeAndReset}>
          Close
        </glass-button>
        <glass-button variant="primary" @click=${this._openPlannerForTarget}>
          Open day plan
        </glass-button>
      </div>
    `;
  }

  /** Existing intro / load / list flow (Mode A path, OR Mode B once
   *  destination trip is picked). */
  _renderLoadAndList(importable, allSelected) {
    return html`
      <p class="lede">
        Looking at your <strong>primary Google Calendar</strong> for the next 90 days.
        ${this._mode === 'addToTrip'
          ? html`Tick the events you want as items in the trip's day planner. The rest stay where they are.`
          : html`Tick the events you want as Portal activities. The rest stay where they are.`}
      </p>

      ${!this._started
        ? html`
                <div class="intro">
                  <p class="intro-lede">
                    We'll pull the next <strong>90 days</strong> from your
                    primary Google Calendar so you can pick which events
                    become Portal activities. Read-only. Portal never edits
                    your calendar.
                  </p>
                  <div class="note">
                    <strong>During our beta:</strong> Google will show
                    <code>pebblepath-992b6.firebaseapp.com</code> and may
                    warn the app "isn't verified." That's expected, it's
                    PebblePath. Pick your Google account, tap
                    <em>Advanced → continue</em> if prompted, then grant
                    calendar access.
                  </div>
                  <div class="intro-actions">
                    <glass-button variant="ghost" @click=${this._onCancel}>
                      Cancel
                    </glass-button>
                    <glass-button variant="primary" @click=${this._start}>
                      Connect Google Calendar
                    </glass-button>
                  </div>
                </div>
              `
            : this._loading
            ? html`<div class="loading">Loading your calendar…</div>`
            : this._error
            ? html`
                <div class="error">${this._error}</div>
                <div class="intro-actions">
                  <glass-button variant="ghost" @click=${this._onCancel}>
                    Close
                  </glass-button>
                  <glass-button variant="primary" @click=${this._start}>
                    Try again
                  </glass-button>
                </div>
              `
            : this._events.length === 0
            ? html`<div class="empty">No events found in the next 90 days.</div>`
            : html`
                <div class="list">
                  ${this._events.map(
                    (event) => html`
                      <div
                        class="row ${event._alreadyImported
                          ? 'disabled'
                          : this._selected.has(event.id)
                          ? 'on'
                          : ''}"
                        @click=${() =>
                          !event._alreadyImported && this._toggle(event.id)}
                      >
                        <div class="checkbox"></div>
                        <div class="body">
                          <div class="title">${event.summary || '(untitled)'}</div>
                          <div class="meta">
                            <span>${this._fmtRange(event)}</span>
                            ${event.location
                              ? html`<span>· ${event.location}</span>`
                              : ''}
                          </div>
                        </div>
                        ${event._alreadyImported
                          ? html`<span class="badge">In Portal</span>`
                          : ''}
                      </div>
                    `,
                  )}
                </div>
                <div class="toolbar">
                  <button class="select-all" @click=${this._toggleAll}>
                    ${allSelected ? 'Deselect all' : 'Select all'}
                  </button>
                  <div class="actions">
                    <glass-button variant="ghost" @click=${this._onCancel} ?disabled=${this._importing}>
                      Cancel
                    </glass-button>
                    <glass-button
                      variant="primary"
                      @click=${this._import}
                      ?disabled=${this._importing || this._selected.size === 0}
                    >
                      ${this._importing
                        ? 'Importing…'
                        : this._selected.size === 0
                        ? 'Pick events'
                        : this._mode === 'addToTrip'
                        ? `Add ${this._selected.size} ${this._selected.size === 1 ? 'item' : 'items'}`
                        : `Import ${this._selected.size} ${this._selected.size === 1 ? 'activity' : 'activities'}`}
                    </glass-button>
                  </div>
                </div>
              `}
    `;
  }
}

customElements.define('import-calendar-modal', ImportCalendarModal);
