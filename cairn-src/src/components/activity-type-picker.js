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
      // Filled glyphs traced to match the iOS picker's SF Symbol
      // `*.fill` variants (leaf.fill / paperplane.fill / gift.fill).
      // viewBox 0 0 22 22 keeps the optical sizing aligned with SF
      // Symbols' default 17pt body weight.
      {
        type: 'activity',
        tone: 'sage',
        icon: html`<svg viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
          <path d="M19.5 2.5c-.3-.3-.7-.4-1.1-.4-2.7.1-7.5.8-10.9 4.2C4.3 9.5 3.7 13.3 4.2 16c-1 1.5-1.6 3-1.9 4.2-.1.4.1.8.5.9.4.1.8-.1.9-.5.2-.9.7-2 1.5-3.1.7.3 1.6.5 2.5.5 2 0 4.5-.7 6.9-3.1 3.4-3.4 4.1-8.2 4.2-10.9 0-.4-.1-.8-.4-1.1zm-5.4 9.8c-1.7 1.7-3.5 2.4-5 2.6 1.8-2.6 4.1-4.9 6.9-6.8.4-.2.5-.7.3-1.1-.2-.4-.7-.5-1.1-.3-2.5 1.7-4.7 3.7-6.4 6 .1-1.6.8-3.5 2.5-5.2 2.6-2.6 6.4-3.4 9-3.7-.3 2.6-1.1 6.4-3.7 9z" />
        </svg>`,
        label: 'Group activity',
        desc: 'Weekend plans, outings, day trips — no lodging or flights needed.',
      },
      {
        type: 'trip',
        tone: 'tide',
        icon: html`<svg viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
          <path d="M20.4 1.2c-.2-.2-.6-.3-.9-.2L1.7 7.5c-.4.1-.6.5-.6.9 0 .4.3.7.7.8l6.4 1.7 1.6 6.4c.1.4.4.7.8.7.4 0 .7-.2.9-.6L21.1 2.6c.2-.4.1-.8-.2-1.1L20.4 1.2zM8.4 9.4L4.4 8.3l13.4-4.8L8.4 9.4zm1.6 1.2l9.7-9.7-4.8 13.4L11.5 12 9.7 10.6h.3z" />
        </svg>`,
        label: 'Family trip',
        desc: 'Multi-day travel with lodging, flight info, attendees.',
      },
      {
        type: 'event',
        tone: 'amber',
        // gift.fill silhouette — bow loops on top, ribbon through the
        // box vertically and horizontally.
        icon: html`<svg viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
          <!-- Bow loops -->
          <path d="M9.5 6.5C8 6.6 6 6.1 6 4.6c0-1 .9-1.6 1.9-1.6 1.6 0 3 1.7 3.4 3.5h-1.8zM12.5 6.5c1.5.1 3.5-.4 3.5-1.9 0-1-.9-1.6-1.9-1.6-1.6 0-3 1.7-3.4 3.5h1.8z"/>
          <!-- Top of box (slimmer) -->
          <rect x="3" y="7" width="16" height="3.2" rx="1.2"/>
          <!-- Box body -->
          <rect x="3.8" y="10.2" width="14.4" height="9.6" rx="1.4"/>
          <!-- Vertical ribbon — cuts box in two -->
          <rect x="9.75" y="7" width="2.5" height="12.8" fill="#000" fill-opacity="0.18"/>
          <!-- Horizontal ribbon across top quarter of box body -->
          <rect x="3.8" y="11.6" width="14.4" height="1.2" fill="#000" fill-opacity="0.18"/>
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
