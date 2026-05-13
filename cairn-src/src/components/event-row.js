import { LitElement, html, css } from 'lit';
import './member-chip.js';

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
      padding: 12px 14px;
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
      font-size: 18px;
      flex-shrink: 0;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    .icon.birthday {
      background: var(--gradient-amber);
    }
    .icon.anniversary {
      background: var(--gradient-rose);
    }
    .icon.custom {
      background: var(--gradient-sage);
    }
    .body {
      flex: 1;
      min-width: 0;
    }
    .title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 15px;
      letter-spacing: -0.01em;
    }
    .meta {
      font-size: 12.5px;
      color: var(--text-secondary);
      margin-top: 2px;
    }
    .date {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-primary);
      text-align: right;
      flex-shrink: 0;
    }
    .date small {
      display: block;
      color: var(--text-tertiary);
      font-weight: 500;
      font-size: 11px;
      margin-top: 2px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
  `;

  _icon(type) {
    if (type === 'birthday') return '\u{1F382}';
    if (type === 'anniversary') return '\u{1F495}';
    return '✨';
  }

  _fmtDate(date) {
    const d = new Date(date);
    return {
      day: d.getDate(),
      month: d.toLocaleString('en-GB', { month: 'short' }),
    };
  }

  render() {
    const e = this.event;
    if (!e) return html``;
    const dt = this._fmtDate(e.date);
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
          <div class="title">${e.title}</div>
          ${e.subtitle ? html`<div class="meta">${e.subtitle}</div>` : ''}
        </div>
        <div class="date">
          ${dt.day}
          <small>${dt.month}</small>
        </div>
      </div>
    `;
  }
}

customElements.define('event-row', EventRow);
