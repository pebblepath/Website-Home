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
      // Traced to match the iOS picker's SF Symbol fills as seen in
      // the user's screenshot (leaf.fill / paperplane.fill / gift.fill).
      // viewBox 24×24, all paths fill currentColor.
      {
        type: 'activity',
        tone: 'sage',
        icon: html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.9 3.5c-.1-.4-.4-.7-.8-.7-3.2-.1-9 .4-13 4.4-3.3 3.3-3.9 7.7-3.4 10.7-.8 1.3-1.4 2.7-1.7 3.8-.1.4.1.8.5.9.4.1.8-.1.9-.5.3-1 .7-2.1 1.4-3.2.5.2 1.3.3 2.2.3 2.3 0 5.1-.8 7.5-3.2 4-4 4.5-9.8 4.4-13zm-6.2 11.7c-1.9 1.9-4 2.6-5.6 2.7 2-2.9 4.5-5.4 7.5-7.4.4-.2.5-.7.3-1-.2-.4-.7-.5-1-.3-2.8 1.9-5.3 4.1-7.3 6.7.1-1.8.9-4 2.9-6 3-3 7.9-3.7 10.7-3.9-.2 2.8-.8 7.7-3.5 10.2z"/>
        </svg>`,
        label: 'Group activity',
        desc: 'Weekend plans, outings, day trips — no lodging or flights needed.',
      },
      {
        type: 'trip',
        tone: 'tide',
        icon: html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.7 2.4a.9.9 0 0 0-1-.2L2.6 8.6a.85.85 0 0 0-.6.83c0 .42.3.78.7.86l6.65 1.5 1.5 6.65c.08.4.43.7.84.7.4 0 .77-.24.94-.6L21.9 3.4a.9.9 0 0 0-.2-1zM9.65 11.0L5 9.85 17.4 5.4 9.65 11.0zm1.5 1.55L17.4 6.3 13.0 18.7l-1.85-6.15z"/>
        </svg>`,
        label: 'Family trip',
        desc: 'Multi-day travel with lodging, flight info, attendees.',
      },
      {
        type: 'event',
        tone: 'amber',
        icon: html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <!-- Bow loops on top -->
          <path d="M10.7 7.3c-.2-1-.9-2.4-2-3.1-.7-.5-1.4-.7-2.1-.6-.9.2-1.5.9-1.6 1.8-.1.7.1 1.4.6 1.9.6.6 1.5.9 2.6.9.7 0 1.5-.1 2.2-.3l.7-.2-.4-.4zM18.7 5.4c-.1-.9-.7-1.6-1.6-1.8-.7-.1-1.4.1-2.1.6-1.1.7-1.8 2.1-2 3.1l-.4.4.7.2c.7.2 1.5.3 2.2.3 1.1 0 2-.3 2.6-.9.5-.5.7-1.2.6-1.9z"/>
          <!-- Box lid (slimmer, full width) -->
          <path d="M21 8H3a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h7.5V8h3v4.5H21a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/>
          <!-- Box body -->
          <path d="M4 14v6.5A1.5 1.5 0 0 0 5.5 22h5V14H4zM13.5 22h5a1.5 1.5 0 0 0 1.5-1.5V14h-6.5v8z"/>
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
