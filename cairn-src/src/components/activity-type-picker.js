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

  // Inline SVGs matching the Cairn line-icon style (stroke-based, 2px).
  // Defined as a getter so html`` is evaluated lazily at render time
  // and we don't need a build-time JS evaluation gotcha for static.
  static get OPTIONS() {
    return [
      {
        type: 'activity',
        tone: 'sage',
        icon: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M4 20c0-7 5-12 12-12 0 7-5 12-12 12z" />
          <path d="M4 20l8-8" />
        </svg>`,
        label: 'Group activity',
        desc: 'Weekend plans, outings, day trips — no lodging or flights needed.',
      },
      {
        type: 'trip',
        tone: 'tide',
        icon: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 14l-9 6-3-3 3-3-8-2 2-2 9 1 4-4a2 2 0 1 1 3 3l-4 4z" />
        </svg>`,
        label: 'Family trip',
        desc: 'Multi-day travel with lodging, flight info, attendees.',
      },
      {
        type: 'event',
        tone: 'amber',
        icon: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 14h14v6H5z" />
          <path d="M5 14c0-2 1.5-3 3-3h8c1.5 0 3 1 3 3" />
          <path d="M12 11V7" />
          <path d="M11 5.5c0-.8.5-1.5 1-2 .5.5 1 1.2 1 2 0 .6-.4 1-1 1s-1-.4-1-1z" fill="currentColor" stroke="none" />
        </svg>`,
        label: 'Birthday or anniversary',
        desc: 'Recurring celebration on a specific date.',
      },
      {
        // Mobile-only option: on desktop this lives in the "Coming up"
        // section header instead. Mobile hides that link to keep the
        // section-head from getting cluttered, so we surface it here.
        type: 'import',
        tone: 'tide',
        mobileOnly: true,
        icon: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
          <path d="M9 14l3 3 4-5" />
        </svg>`,
        label: 'Import from Calendar',
        desc: 'Pull recent events from your Google Calendar.',
      },
    ];
  }

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
      flex-shrink: 0;
      color: #fff;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
    }
    .icon-cell svg {
      width: 22px;
      height: 22px;
      display: block;
    }
    .icon-cell.sage { background: var(--gradient-sage); }
    .icon-cell.tide { background: var(--gradient-tide); }
    .icon-cell.amber { background: var(--gradient-amber); }
    /* Mobile-only options (e.g. Import from Calendar) — hidden on
       desktop where the equivalent affordance lives in the section
       header. */
    @media (min-width: 769px) {
      .option.mobile-only { display: none; }
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
                <button
                  class="option ${o.mobileOnly ? 'mobile-only' : ''}"
                  @click=${() => this._pick(o.type)}
                >
                  <span class="icon-cell ${o.tone}" aria-hidden="true">${o.icon}</span>
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
