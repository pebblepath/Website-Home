import { LitElement, html, css } from 'lit';
import { parseLocalDate } from '../services/data.js';

/**
 * Compact 12-month grid for the current year. Each day cell is colored
 * by what's on it: trip-day gradient for trips, celebration gradient
 * for birthdays/anniversaries, today indicator on today's cell.
 *
 * Properties:
 *   year     — number (defaults to current)
 *   tripDays — Map<string, number> keyed "MM-DD" → density (0-1)
 *   trips    — Array of { title, start: "YYYY-MM-DD", end, location? }
 *   events   — Array of { date: "YYYY-MM-DD", title }
 *   today    — Date (defaults to new Date())
 *
 * Behaviour:
 *   - Hovering a day cell with content shows a native tooltip with the
 *     trip/event names (so the at-a-glance signal isn't just colour).
 *   - Tapping a coloured day flips the floating caption below the
 *     grid to that day's items — accessible on mobile where there's
 *     no hover.
 */
export class YearlyView extends LitElement {
  static properties = {
    year: { type: Number },
    tripDays: { type: Object },
    trips: { type: Array },
    events: { type: Array },
    holidays: { type: Array },
    today: { type: Object },
    _activeDay: { state: true },
  };

  constructor() {
    super();
    this.year = new Date().getFullYear();
    this.tripDays = new Map();
    this.trips = [];
    this.events = [];
    this.holidays = [];
    this.today = new Date();
    this._activeDay = null; // { month, day, label }
  }

  static styles = css`
    :host {
      display: block;
    }
    /* Desktop: 6 columns × 2 rows so the year card's height matches
       the monthly calendar beside it (was 4×3, which made it ~50%
       taller than the monthly view). Narrower viewports fall back to
       fewer columns. */
    .grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 6px;
    }
    @media (max-width: 1024px) {
      .grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
      }
    }
    @media (max-width: 720px) {
      .grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media (max-width: 380px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }
    }
    .month {
      padding: 6px 5px 4px;
      border-radius: 9px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.14);
      transition: background 200ms ease, border-color 200ms ease;
      cursor: pointer;
    }
    .month:hover {
      background: rgba(255, 248, 235, 0.1);
      border-color: rgba(255, 248, 235, 0.22);
    }
    .month.current {
      background: rgba(61, 155, 143, 0.1);
      border-color: rgba(61, 155, 143, 0.32);
    }
    .name {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 10.5px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-secondary);
      margin-bottom: 5px;
      text-align: center;
    }
    .month.current .name {
      color: var(--teal-pebble);
    }
    .mini-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 1px;
    }
    .cell {
      aspect-ratio: 1 / 1;
      border-radius: 3px;
      background: rgba(255, 248, 235, 0.09);
      box-shadow: inset 0 0 0 1px rgba(255, 248, 235, 0.07);
      position: relative;
      transition: transform 120ms ease, box-shadow 120ms ease;
    }
    .cell.labelled {
      cursor: pointer;
    }
    .cell.labelled:hover {
      transform: scale(1.18);
      z-index: 1;
      box-shadow:
        0 0 0 1.5px rgba(255, 255, 255, 0.55),
        0 2px 6px rgba(0, 0, 0, 0.35);
    }
    .cell.active {
      transform: scale(1.18);
      z-index: 1;
      box-shadow:
        0 0 0 1.5px rgba(255, 255, 255, 0.7),
        0 2px 8px rgba(0, 0, 0, 0.4);
    }
    .cell.empty {
      background: transparent;
      box-shadow: none;
    }
    .cell.today {
      background: var(--today-bg);
      /* No glow — let the meadow gradient stand on its own. The
         outer rim and shadow were reading as a halo that competed
         with the celebration + trip cells nearby. */
      box-shadow: none;
    }
    /* Public-holiday day — teal, matching the monthly calendar's
       .cal-cell.has-holiday. Declared BEFORE .cell.trip / .cell.event
       so that on a day which is also a trip or celebration the user's
       own content wins the colour; the holiday is just the backdrop. */
    .cell.holiday {
      background: var(--gradient-sage);
      box-shadow: inset 0 0 0 1px rgba(61, 155, 143, 0.55);
    }
    .cell.trip {
      background: var(--trip-day-bg);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);
    }
    .cell.trip.dense {
      background: var(--trip-day-bg-strong);
    }
    /* Celebration day — solid colored cell, treated the same way as
       trip and today instead of a tiny dot. */
    .cell.event {
      background: var(--gradient-celebration);
      box-shadow: inset 0 0 0 1px rgba(255, 240, 215, 0.35);
    }
    /* Trip + celebration day — split diagonally so both signals read. */
    .cell.event.trip {
      background:
        linear-gradient(135deg,
          #6bb4e8 0%,
          #4a90e2 45%,
          #f29a4d 55%,
          #ffd066 100%
        );
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
    }
    .legend {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-top: 12px;
      padding: 0 4px;
      font-size: 11.5px;
      color: var(--text-secondary);
      flex-wrap: wrap;
    }
    .swatch {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .swatch i {
      width: 9px;
      height: 9px;
      border-radius: 3px;
      display: inline-block;
    }
    .swatch i.trip {
      background: var(--trip-day-bg-strong);
      border-radius: 2px;
    }
    .swatch i.event {
      background: var(--gradient-celebration);
      border-radius: 2px;
    }
    .swatch i.holiday {
      background: var(--gradient-sage);
      border-radius: 2px;
    }

    /* Caption strip — appears under the year grid when the user taps a
       coloured day. Stays put until they tap somewhere else or the
       same cell again (toggle). */
    .day-caption {
      margin-top: 12px;
      padding: 10px 12px;
      border-radius: 10px;
      background: linear-gradient(
        135deg,
        rgba(74, 144, 226, 0.16) 0%,
        rgba(212, 168, 67, 0.16) 100%
      );
      border: 1px solid rgba(255, 248, 235, 0.16);
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 12.5px;
      color: var(--text-primary);
    }
    .day-caption .day-pill {
      flex-shrink: 0;
      padding: 3px 9px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.16);
      font-weight: 600;
      font-variant-numeric: tabular-nums;
    }
    .day-caption .day-text {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .day-caption .day-close {
      background: transparent;
      border: none;
      color: var(--text-tertiary);
      font: inherit;
      font-size: 16px;
      cursor: pointer;
      padding: 0 4px;
    }
    .day-caption .day-close:hover { color: var(--text-primary); }
    .swatch i.today {
      background: var(--today-bg);
    }
  `;

  _isLeap(y) {
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  }

  _daysInMonth(y, m) {
    return [31, this._isLeap(y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m];
  }

  /**
   * Build per-day labels for a month from the trips + events lists.
   * Each key is the day-of-month (number); the value is a string with
   * trip titles and event titles for that day, " · " separated.
   */
  _labelsForMonth(m) {
    const y = this.year;
    const labels = new Map();
    const push = (day, label) => {
      const cur = labels.get(day);
      labels.set(day, cur ? `${cur} · ${label}` : label);
    };
    for (const t of this.trips ?? []) {
      if (!t.start || !t.end) continue;
      const s = parseLocalDate(t.start);
      const e = parseLocalDate(t.end);
      if (!s || !e) continue;
      if (s.getFullYear() > y || e.getFullYear() < y) continue;
      const monthStart = new Date(y, m, 1);
      const monthEnd = new Date(y, m + 1, 0);
      if (e < monthStart || s > monthEnd) continue;
      const fromDay = s.getMonth() === m && s.getFullYear() === y ? s.getDate() : 1;
      const toDay = e.getMonth() === m && e.getFullYear() === y ? e.getDate() : monthEnd.getDate();
      const title = t.location?.trim() ? `${t.title} (${t.location.trim()})` : t.title;
      for (let d = fromDay; d <= toDay; d++) push(d, title);
    }
    for (const ev of this.events ?? []) {
      const d = parseLocalDate(ev.date);
      if (!d) continue;
      if (d.getFullYear() === y && d.getMonth() === m) {
        push(d.getDate(), ev.title ?? 'Event');
      }
    }
    for (const h of this.holidays ?? []) {
      const d = parseLocalDate(h.date);
      if (!d) continue;
      if (d.getFullYear() === y && d.getMonth() === m) {
        push(d.getDate(), h.title ?? 'Public holiday');
      }
    }
    return labels;
  }

  _renderMonth(m) {
    const y = this.year;
    const firstDow = new Date(y, m, 1).getDay();
    const offset = (firstDow + 6) % 7;
    const days = this._daysInMonth(y, m);
    const labels = this._labelsForMonth(m);
    const cells = [];
    for (let i = 0; i < offset; i++) cells.push(html`<div class="cell empty"></div>`);
    const today = this.today;
    for (let d = 1; d <= days; d++) {
      const key = `${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const density = this.tripDays.get(key) ?? 0;
      const isToday =
        today.getFullYear() === y && today.getMonth() === m && today.getDate() === d;
      const label = labels.get(d);
      const hasEvent = (this.events ?? []).some((e) => {
        const dd = parseLocalDate(e.date);
        return dd && dd.getFullYear() === y && dd.getMonth() === m && dd.getDate() === d;
      });
      const hasHoliday = (this.holidays ?? []).some((h) => {
        const dd = parseLocalDate(h.date);
        return dd && dd.getFullYear() === y && dd.getMonth() === m && dd.getDate() === d;
      });
      const isActive =
        this._activeDay?.month === m && this._activeDay?.day === d;
      const cls = [
        'cell',
        isToday ? 'today' : '',
        hasHoliday ? 'holiday' : '',
        density > 0 ? 'trip' : '',
        density > 0.6 ? 'dense' : '',
        hasEvent ? 'event' : '',
        label ? 'labelled' : '',
        isActive ? 'active' : '',
      ]
        .filter(Boolean)
        .join(' ');
      cells.push(html`<div
        class=${cls}
        title=${label ? `${d} ${this._monthName(m)} — ${label}` : ''}
        @click=${(ev) => label && this._onDayTap(ev, m, d, label)}
      ></div>`);
    }
    return cells;
  }

  _onDayTap(ev, month, day, label) {
    // Day taps are caught here BEFORE the month-cell click bubbles, so
    // we stop propagation: tapping a labelled day pops the caption
    // instead of jumping the monthly view away.
    ev.stopPropagation();
    if (
      this._activeDay?.month === month &&
      this._activeDay?.day === day
    ) {
      this._activeDay = null;
      return;
    }
    this._activeDay = { month, day, label };
  }

  _monthName(m) {
    return new Date(this.year, m, 1).toLocaleString('en-GB', { month: 'short' });
  }

  _onSelect(m) {
    this.dispatchEvent(
      new CustomEvent('month-select', {
        detail: { month: m, year: this.year },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonth = this.today.getMonth();
    const sameYear = this.today.getFullYear() === this.year;
    return html`
      <div class="grid">
        ${months.map(
          (name, m) => html`
            <div
              class="month ${sameYear && m === currentMonth ? 'current' : ''}"
              @click=${() => this._onSelect(m)}
            >
              <div class="name">${name}</div>
              <div class="mini-grid">${this._renderMonth(m)}</div>
            </div>
          `,
        )}
      </div>
      <div class="legend">
        <span class="swatch"><i class="today"></i> Today</span>
        <span class="swatch"><i class="trip"></i> Family Activities</span>
        <span class="swatch"><i class="event"></i> Celebrations</span>
        <span class="swatch"><i class="holiday"></i> Public holidays</span>
      </div>
      ${this._activeDay
        ? html`
            <div class="day-caption">
              <span class="day-pill">
                ${this._activeDay.day} ${this._monthName(this._activeDay.month)}
              </span>
              <span class="day-text">${this._activeDay.label}</span>
              <button
                class="day-close"
                aria-label="Dismiss"
                @click=${(e) => {
                  e.stopPropagation();
                  this._activeDay = null;
                }}
              >×</button>
            </div>
          `
        : ''}
    `;
  }
}

customElements.define('yearly-view', YearlyView);
