import { LitElement, html, css } from 'lit';
import { parseLocalDate } from '../services/data.js';

/**
 * Single-control date range picker for the trip/activity form.
 *
 * UX:
 *   - First click sets the start (clears any existing end).
 *   - Hovering over later days while only-start-is-set previews the range.
 *   - Second click sets the end (auto-swaps if before start).
 *   - Subsequent click resets and starts a new range from there.
 *   - Touch: same flow without hover-preview.
 *
 * Properties:
 *   start, end — YYYY-MM-DD strings (one-way bind from parent)
 *
 * Events:
 *   range-change — { detail: { start, end } } whenever either endpoint updates
 */
export class DateRangePicker extends LitElement {
  static properties = {
    start: { type: String },
    end: { type: String },
    _displayMonth: { state: true },
    _hoverDate: { state: true },
  };

  constructor() {
    super();
    this.start = '';
    this.end = '';
    this._displayMonth = null;
    this._hoverDate = null;
  }

  willUpdate(changed) {
    // Anchor calendar to the start date (if any), else today.
    if (changed.has('start') || this._displayMonth === null) {
      const anchor = this.start ? parseLocalDate(this.start) : new Date();
      this._displayMonth = new Date(anchor.getFullYear(), anchor.getMonth(), 1);
    }
  }

  _isoFor(year, month, day) {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  }

  _emit(start, end) {
    this.start = start;
    this.end = end;
    this._hoverDate = null;
    this.dispatchEvent(
      new CustomEvent('range-change', {
        detail: { start, end },
        bubbles: true,
        composed: true,
      }),
    );
  }

  _onDayClick(iso) {
    // If no start, or both already set → start a new range.
    if (!this.start || (this.start && this.end)) {
      this._emit(iso, '');
      return;
    }
    // Only start is set → set end (auto-swap if user picked earlier).
    if (iso < this.start) this._emit(iso, this.start);
    else this._emit(this.start, iso);
  }

  _onDayHover(iso) {
    if (this.start && !this.end) this._hoverDate = iso;
  }

  _onLeave() {
    this._hoverDate = null;
  }

  _shiftMonth(delta) {
    const d = this._displayMonth;
    this._displayMonth = new Date(d.getFullYear(), d.getMonth() + delta, 1);
  }

  _isToday(year, month, day) {
    const t = new Date();
    return (
      t.getFullYear() === year && t.getMonth() === month && t.getDate() === day
    );
  }

  _inSelectedRange(iso) {
    if (!this.start || !this.end) return false;
    return iso > this.start && iso < this.end;
  }

  _inHoverRange(iso) {
    if (!this.start || this.end || !this._hoverDate) return false;
    const a = this._hoverDate < this.start ? this._hoverDate : this.start;
    const b = this._hoverDate < this.start ? this.start : this._hoverDate;
    return iso > a && iso < b;
  }

  _summary() {
    if (!this.start && !this.end) return 'Pick a start date';
    const fmt = (iso) => {
      const d = parseLocalDate(iso);
      return d
        ? d.toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
        : '';
    };
    if (this.start && !this.end) return `From ${fmt(this.start)} — pick an end date`;
    if (this.start === this.end) return fmt(this.start);
    return `${fmt(this.start)} – ${fmt(this.end)}`;
  }

  _renderGrid() {
    const year = this._displayMonth.getFullYear();
    const month = this._displayMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const offset = (firstDay + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells = [];
    for (let i = 0; i < offset; i++) cells.push(html`<div class="empty"></div>`);
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = this._isoFor(year, month, d);
      const isStart = iso === this.start;
      const isEnd = iso === this.end && iso !== this.start;
      const inRange = this._inSelectedRange(iso);
      const inHover = this._inHoverRange(iso);
      const isToday = this._isToday(year, month, d);
      const cls = [
        'day',
        isStart ? 'start' : '',
        isEnd ? 'end' : '',
        inRange ? 'in-range' : '',
        inHover ? 'hover-range' : '',
        isToday && !isStart && !isEnd ? 'today' : '',
      ]
        .filter(Boolean)
        .join(' ');
      cells.push(html`
        <button
          type="button"
          class=${cls}
          @click=${() => this._onDayClick(iso)}
          @mouseover=${() => this._onDayHover(iso)}
        >
          ${d}
        </button>
      `);
    }
    return cells;
  }

  static styles = css`
    * { box-sizing: border-box; }
    :host {
      display: block;
    }
    /* Compact variant — date picker takes ~half the space it used to.
       Headed by a slim summary chip, narrower grid cells, smaller
       day buttons. Keeps the same UX (click-start, hover-preview,
       click-end), just at a more proportionate footprint for the
       form sheet. */
    :host {
      max-width: 360px;
    }
    .summary {
      font-family: var(--font-body);
      font-size: 13.5px;
      font-weight: 500;
      color: var(--text-primary);
      padding: 8px 12px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.16);
      border-radius: var(--radius-input);
      margin-bottom: 8px;
    }
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      padding: 0 4px;
    }
    .month-label {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 12.5px;
      letter-spacing: -0.005em;
    }
    .nav {
      width: 24px;
      height: 24px;
      border-radius: 999px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.14);
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 12px;
      font-family: var(--font-body);
      padding: 0;
    }
    .nav:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .dow-row {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
      margin-bottom: 4px;
    }
    .dow {
      font-size: 9.5px;
      color: var(--text-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      text-align: center;
      padding: 4px 0;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 1px;
    }
    .empty {
      aspect-ratio: 1 / 1;
    }
    .day {
      aspect-ratio: 1 / 1;
      background: transparent;
      border: none;
      border-radius: 4px;
      color: var(--text-primary);
      font: inherit;
      font-size: 11.5px;
      cursor: pointer;
      transition: background 140ms ease, color 140ms ease;
      padding: 0;
    }
    .day:hover {
      background: rgba(255, 248, 235, 0.06);
    }
    .day.today {
      box-shadow: inset 0 -2px 0 var(--teal-pebble);
    }
    .day.in-range,
    .day.hover-range {
      background: rgba(61, 155, 143, 0.22);
      border-radius: 0;
    }
    .day.hover-range {
      background: rgba(61, 155, 143, 0.14);
    }
    .day.start,
    .day.end {
      background: var(--teal-pebble);
      color: #fff;
      font-weight: 600;
      border-radius: 6px;
    }
    .day.start {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    .day.end {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    /* When start has an in-range neighbor on its right, square that edge
       so the range bar visually connects. Same for end + left neighbor. */
    .day.start + .in-range,
    .day.start + .hover-range {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `;

  render() {
    if (!this._displayMonth) return html``;
    const monthLabel = this._displayMonth.toLocaleString('en-GB', {
      month: 'long',
      year: 'numeric',
    });
    return html`
      <div class="summary">${this._summary()}</div>
      <div class="head">
        <button class="nav" type="button" @click=${() => this._shiftMonth(-1)} aria-label="Previous month">‹</button>
        <span class="month-label">${monthLabel}</span>
        <button class="nav" type="button" @click=${() => this._shiftMonth(1)} aria-label="Next month">›</button>
      </div>
      <div class="dow-row">
        ${['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(
          (d) => html`<div class="dow">${d}</div>`,
        )}
      </div>
      <div class="grid" @mouseleave=${this._onLeave}>${this._renderGrid()}</div>
    `;
  }
}

customElements.define('date-range-picker', DateRangePicker);
