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
     *  raw `…firebaseapp.com` Google screens are unavoidable (fixing
     *  them = OAuth verification / custom auth domain, both deferred
     *  pre-public-launch). Auto-firing the popup on open made testers
     *  hit those screens with zero context; this primes them first. */
    _started: { state: true },
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
  }

  willUpdate(changed) {
    // Reset to the intro step each time the modal (re)opens — do NOT
    // auto-fire the Google popup; the user starts it from the intro.
    if (changed.has('open') && this.open) {
      this._started = false;
      this._error = '';
    }
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
  `;

  render() {
    if (!this.open) return html``;
    const importable = this._events.filter((e) => !e._alreadyImported);
    const allSelected = importable.length > 0 && this._selected.size === importable.length;
    return html`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Import from Google Calendar</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>
          <p class="lede">
            Looking at your <strong>primary Google Calendar</strong> for the next 90 days.
            Tick the events you want as Cairn activities — the rest stay where they are.
          </p>

          ${!this._started
            ? html`
                <div class="intro">
                  <p class="intro-lede">
                    We'll pull the next <strong>90 days</strong> from your
                    primary Google Calendar so you can pick which events
                    become Cairn activities. Read-only — Cairn never edits
                    your calendar.
                  </p>
                  <div class="note">
                    <strong>During our beta:</strong> Google will show
                    <code>pebblepath-992b6.firebaseapp.com</code> and may
                    warn the app "isn't verified." That's expected — it's
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
                          ? html`<span class="badge">In Cairn</span>`
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
                        : `Import ${this._selected.size} ${this._selected.size === 1 ? 'activity' : 'activities'}`}
                    </glass-button>
                  </div>
                </div>
              `}
        </glass-panel>
      </div>
    `;
  }
}

customElements.define('import-calendar-modal', ImportCalendarModal);
