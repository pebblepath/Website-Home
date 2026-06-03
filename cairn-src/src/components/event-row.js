import { LitElement, html, css } from 'lit';
import './member-chip.js';
import { parseLocalDate } from '../services/data.js';

/**
 * One row in the upcoming celebrations list.
 * Properties:
 *   event   — { id, type, date, title, subtitle?, personIds }
 *   members — full member list
 */
export class EventRow extends LitElement {
  static properties = {
    event: { type: Object },
    members: { type: Array },
  };

  constructor() {
    super();
    this.event = null;
    this.members = [];
  }

  static styles = css`
    :host {
      display: block;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 12px 0;
      border-radius: var(--radius-tile);
      transition: background 200ms ease;
      cursor: pointer;
    }
    .row:hover {
      background: rgba(255, 248, 235, 0.05);
    }
    .icon {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
      color: #fff;
    }
    .icon svg {
      width: 20px;
      height: 20px;
      display: block;
    }
    /* All celebration icons share the warmsun→rose gradient so they
       match the colour Celebrations carry on the calendar (yearly +
       monthly view paint those days with the same gradient). */
    .icon.birthday,
    .icon.anniversary,
    .icon.custom {
      background: var(--gradient-celebration);
    }
    .body {
      flex: 1;
      min-width: 0;
    }
    .title-row {
      display: flex;
      align-items: center;
      gap: 18px;
      min-width: 0;
    }
    .title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 15px;
      letter-spacing: -0.01em;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .faces {
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
    }
    .faces member-chip {
      /* Match the cairn-stack thin halo — was a thick cream ring,
         out of place vs the rest of the app's avatar treatment. */
      box-shadow:
        0 0 0 1px rgba(255, 248, 235, 0.5),
        0 1px 3px rgba(0, 0, 0, 0.25);
      border-radius: 999px;
      margin-left: -7px;
    }
    .faces member-chip:first-child {
      margin-left: 0;
    }
    @media (max-width: 768px) {
      /* Mobile: hide the person avatars beside the event title — the
         title alone is enough on a narrow row, and the chips can
         crowd the type/date area. */
      .faces {
        display: none;
      }
    }
    .meta {
      font-size: 12.5px;
      color: var(--text-secondary);
      margin-top: 2px;
    }
    /* custom calendar tag (e.g. "Daycare 2026 schedule") */
    .tagpill {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 999px;
      background: rgba(198, 123, 92, 0.16);
      color: var(--ink-terracotta);
      font-size: 11px;
      font-weight: 600;
      margin-right: 6px;
    }
    /* Solid teal capsule date pill — iOS parity (EventRowView's
       right-side pill). */
    .date {
      font-size: 13px;
      font-weight: 700;
      color: #fff;
      background: var(--teal-pebble);
      border-radius: 999px;
      padding: 6px 13px;
      flex-shrink: 0;
      white-space: nowrap;
    }
  `;

  _icon(type) {
    // Stroke-based icons matching Cairn/PebblePath line style. Cake
    // for birthdays (candle + frosting); two interlocked rings for
    // anniversaries; sparkle for everything else.
    if (type === 'birthday') {
      return html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 14h14v6H5z" />
        <path d="M5 14c0-2 1.5-3 3-3h8c1.5 0 3 1 3 3" />
        <path d="M12 11V7" />
        <path d="M11 5.5c0-.8.5-1.5 1-2 .5.5 1 1.2 1 2 0 .6-.4 1-1 1s-1-.4-1-1z" fill="currentColor" stroke="none" />
      </svg>`;
    }
    if (type === 'anniversary') {
      return html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="9" cy="13" r="5" />
        <circle cx="15" cy="13" r="5" />
      </svg>`;
    }
    return html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>`;
  }

  _fmtDate(date) {
    // parseLocalDate keeps YYYY-MM-DD as a local calendar day so the
    // displayed day matches what the user picked in the editor —
    // otherwise `new Date('YYYY-10-11')` is UTC-midnight and prints
    // as Oct 10 in any timezone west of UTC.
    const d = parseLocalDate(date) ?? new Date(date);
    return {
      day: d.getDate(),
      month: d.toLocaleString('en-GB', { month: 'short' }),
    };
  }

  render() {
    const e = this.event;
    if (!e) return html``;
    // iOS parity (EventRowView): solid teal date pill, "d MMM" for
    // recurring celebrations, "d MMM yyyy" for one-offs. Person-avatar
    // faces dropped to match the 2026-05-22 iOS compact row.
    const parsed = parseLocalDate(e.date) ?? new Date(e.date);
    const dateLabel = parsed.toLocaleDateString(
      'en-GB',
      (e.recurring ?? false)
        ? { day: 'numeric', month: 'short' }
        : { day: 'numeric', month: 'short', year: 'numeric' },
    );
    // Secondary line — subtitle wins; else a "Yearly" hint for
    // recurring events (mirrors EventRowView.secondaryLine).
    const secondary =
      e.subtitle && e.subtitle.length
        ? e.subtitle
        : (e.recurring ?? false)
          ? 'Yearly'
          : '';
    return html`
      <div
        class="row"
        @click=${() =>
          this.dispatchEvent(
            new CustomEvent('edit-event', { detail: e, bubbles: true, composed: true }),
          )}
      >
        <div class="icon ${e.type}">${this._icon(e.type)}</div>
        <div class="body">
          <div class="title-row">
            <div class="title">${e.title}</div>
          </div>
          ${e.calTag || secondary
            ? html`<div class="meta">
                ${e.calTag
                  ? html`<span class="tagpill">${e.calTag}</span>`
                  : ''}${secondary}
              </div>`
            : ''}
        </div>
        <div class="date">${dateLabel}</div>
      </div>
    `;
  }
}

customElements.define('event-row', EventRow);
