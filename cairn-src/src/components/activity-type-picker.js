import { LitElement, html, css } from 'lit';
import './glass-panel.js';

/**
 * Sits between "+ Activity" tap and the form. Lets the user pick what
 * kind of thing they're adding so the form can hide irrelevant fields
 * (no lodging on a weekend outing, no flight on a birthday).
 *
 * Events:
 *   pick   — { detail: { type } } where type is 'activity' | 'trip' | 'event'
 *   cancel
 */
export class ActivityTypePicker extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.open = false;
  }

  static OPTIONS = [
    {
      type: 'activity',
      icon: '🌿',
      label: 'Group activity',
      desc: 'Weekend plans, outings, day trips — no lodging or flights needed.',
    },
    {
      type: 'trip',
      icon: '✈️',
      label: 'Family trip',
      desc: 'Multi-day travel with lodging, flight info, attendees.',
    },
    {
      type: 'event',
      icon: '🎂',
      label: 'Birthday or anniversary',
      desc: 'Recurring celebration on a specific date.',
    },
  ];

  _pick(type) {
    this.dispatchEvent(new CustomEvent('pick', { detail: { type } }));
  }

  _cancel() {
    this.dispatchEvent(new Event('cancel'));
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
      padding: 10vh 24px;
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
      max-width: 460px;
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
      margin-bottom: 18px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 20px;
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
    .options {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .option {
      display: grid;
      grid-template-columns: 44px 1fr;
      gap: 14px;
      align-items: center;
      padding: 14px 16px;
      border-radius: var(--radius-card);
      background: rgba(255, 248, 235, 0.05);
      border: 1px solid rgba(255, 248, 235, 0.12);
      cursor: pointer;
      text-align: left;
      font: inherit;
      color: inherit;
      width: 100%;
      transition: all 200ms ease;
    }
    .option:hover {
      background: rgba(255, 248, 235, 0.09);
      border-color: rgba(255, 248, 235, 0.24);
      transform: translateY(-1px);
    }
    .option:active {
      transform: translateY(0);
    }
    .icon-cell {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(255, 248, 235, 0.06);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      flex-shrink: 0;
    }
    .label {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 15.5px;
      letter-spacing: -0.01em;
      color: var(--text-primary);
    }
    .desc {
      font-size: 12.5px;
      color: var(--text-secondary);
      line-height: 1.45;
      margin-top: 2px;
    }
  `;

  render() {
    if (!this.open) return html``;
    return html`
      <div class="backdrop" @click=${this._cancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>What are you adding?</h2>
            <button class="close" @click=${this._cancel} aria-label="Close">×</button>
          </div>
          <div class="options">
            ${ActivityTypePicker.OPTIONS.map(
              (o) => html`
                <button class="option" @click=${() => this._pick(o.type)}>
                  <span class="icon-cell" aria-hidden="true">${o.icon}</span>
                  <span>
                    <div class="label">${o.label}</div>
                    <div class="desc">${o.desc}</div>
                  </span>
                </button>
              `,
            )}
          </div>
        </glass-panel>
      </div>
    `;
  }
}

customElements.define('activity-type-picker', ActivityTypePicker);
