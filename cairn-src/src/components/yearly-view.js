import { LitElement, html, css } from 'lit';
import { parseLocalDate } from '../services/data.js';

/**
 * Compact 12-month grid for the current year. Each day cell is colored
 * by what's on it: sage tint for trip density, amber dot for celebrations,
 * highlight for today.
 *
 * Properties:
 *   year     — number (defaults to current)
 *   tripDays — Map<string, number> keyed "MM-DD" → density (0-1)
 *   events   — Array of { date: "YYYY-MM-DD" }
 *   today    — Date (defaults to new Date())
 */
export class YearlyView extends LitElement {
  static properties = {
    year: { type: Number },
    tripDays: { type: Object },
    events: { type: Array },
    today: { type: Object },
  };

  constructor() {
    super();
    this.year = new Date().getFullYear();
    this.tripDays = new Map();
    this.events = [];
    this.today = new Date();
  }

  static styles = css`
    :host {
      display: block;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
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
      padding: 8px 6px 6px;
      border-radius: 10px;
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
    }
    .cell.empty {
      background: transparent;
      box-shadow: none;
    }
    .cell.today {
      background: var(--today-bg);
      box-shadow:
        0 0 0 1px rgba(255, 255, 255, 0.4),
        0 0 6px rgba(79, 194, 107, 0.7);
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
      gap: 10px;
      margin-top: 10px;
      padding: 0 4px;
      font-size: 10.5px;
      color: var(--text-tertiary);
      flex-wrap: wrap;
    }
    .swatch {
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .swatch i {
      width: 8px;
      height: 8px;
      border-radius: 2px;
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

  _renderMonth(m) {
    const y = this.year;
    const firstDow = new Date(y, m, 1).getDay();
    const offset = (firstDow + 6) % 7;
    const days = this._daysInMonth(y, m);
    const eventDates = new Set(
      this.events
        .filter((e) => {
          const d = parseLocalDate(e.date);
          return d && d.getFullYear() === y && d.getMonth() === m;
        })
        .map((e) => parseLocalDate(e.date).getDate()),
    );
    const cells = [];
    for (let i = 0; i < offset; i++) cells.push(html`<div class="cell empty"></div>`);
    const today = this.today;
    for (let d = 1; d <= days; d++) {
      const key = `${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const density = this.tripDays.get(key) ?? 0;
      const isToday =
        today.getFullYear() === y && today.getMonth() === m && today.getDate() === d;
      const hasEvent = eventDates.has(d);
      const cls = [
        'cell',
        isToday ? 'today' : '',
        density > 0 ? 'trip' : '',
        density > 0.6 ? 'dense' : '',
        hasEvent ? 'event' : '',
      ]
        .filter(Boolean)
        .join(' ');
      cells.push(html`<div class=${cls}></div>`);
    }
    return cells;
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
        <span class="swatch"><i class="trip"></i> Trip</span>
        <span class="swatch"><i class="event"></i> Celebration</span>
        <span class="swatch"><i class="today"></i> Today</span>
      </div>
    `;
  }
}

customElements.define('yearly-view', YearlyView);
