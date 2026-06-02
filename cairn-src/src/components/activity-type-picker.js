import { LitElement, html, css } from 'lit';
import './glass-panel.js';

/**
 * Sits between "+ Activity" tap and the form. Lets the user pick what
 * kind of thing they're adding so the form can hide irrelevant fields
 * (no lodging on a weekend outing, no flight on a birthday).
 *
 * Activity Unification U5 (2026-06-02): the two old trip cards (Group
 * activity + Family trip) collapse into ONE "Trip", and a NEW "Activity"
 * card opens the unified <activity-form> (a single standalone calendar
 * item). Tones echo each card's destination calendar category: Trip =
 * tide (teal), Activity = amber (the Activities bucket), Birthday =
 * celebration (Celebrations).
 *
 * Events:
 *   pick   — { detail: { type } } where type is 'trip' | 'activity' | 'event' | 'import'
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
      // Custom Cairn icon set — original, cohesive glyphs (rounded
      // filled silhouettes in the pebble aesthetic). The exact same
      // SVG source files live in public/assets/icons/{activity,trip,
      // event}.svg and are the parity source-of-truth: the iOS app
      // imports those files into its asset catalog so both surfaces
      // render byte-identical art. Do NOT hand-tweak one side only.
      {
        type: 'trip',
        tone: 'tide',
        icon: html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.62 3.05a1 1 0 0 0-1.12-.18L3.7 10.3c-.86.38-.83 1.62.05 1.95l6.06 2.27 2.27 6.06c.33.88 1.57.9 1.95.05L21.8 4.17a1 1 0 0 0-.18-1.12zM10.5 12.7l6.4-5.7-4.9 6.6-.1.1z"/>
        </svg>`,
        label: 'Trip',
        desc: 'Day trips or multi-day travel, with optional lodging, flights, attendees.',
      },
      {
        type: 'activity',
        tone: 'amber',
        icon: html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M15.8 7.4 21.8 19.5a1.1 1.1 0 0 1-.98 1.6H10.2z"/>
          <path d="M9 4.6 16.5 19.5a1.1 1.1 0 0 1-.98 1.6H3.46a1.1 1.1 0 0 1-.98-1.6z"/>
        </svg>`,
        label: 'Activity',
        desc: 'A single outing, plan, or to-do for the family calendar.',
      },
      {
        type: 'event',
        tone: 'celebration',
        icon: html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M11.1 6.7C10.4 5 9.2 3.7 7.8 3.3c-1-.3-1.9.1-2.2.9-.4 1 .2 2.1 1 2.7 1 .75 2.5 1.05 4.5 1.05z"/>
          <path d="M12.9 6.7c.7-1.7 1.9-3 3.3-3.4 1-.3 1.9.1 2.2.9.4 1-.2 2.1-1 2.7-1 .75-2.5 1.05-4.5 1.05z"/>
          <rect x="3" y="8" width="8.1" height="3.5" rx="1"/>
          <rect x="12.9" y="8" width="8.1" height="3.5" rx="1"/>
          <rect x="4.1" y="11.7" width="7" height="9.1" rx="1.4"/>
          <rect x="12.9" y="11.7" width="7" height="9.1" rx="1.4"/>
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
    .icon-cell.celebration { background: var(--gradient-celebration); }
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
