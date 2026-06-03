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
      // glyphs in the pebble aesthetic). These mirror the iOS picker
      // (Components/AddActivityPicker.swift) one-for-one — iOS uses SF
      // Symbols (suitcase.fill / star.fill / gift.fill / calendar.badge
      // .plus) and these SVGs are the matching web art (briefcase, star,
      // gift, calendar-with-plus). Tones echo the iOS tile colors so both
      // surfaces read identically: Trip=sage (teal), Activity=amber,
      // Birthday=terracotta, Import=tide (blue). Keep the two sides in
      // lockstep — do NOT hand-tweak one platform only.
      {
        type: 'trip',
        tone: 'sage',
        icon: html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M9 3.5h6A2.5 2.5 0 0 1 17.5 6v1h2A2.5 2.5 0 0 1 22 9.5v9A2.5 2.5 0 0 1 19.5 21h-15A2.5 2.5 0 0 1 2 18.5v-9A2.5 2.5 0 0 1 4.5 7h2V6A2.5 2.5 0 0 1 9 3.5zm.5 3.5h5V6a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v1z"/>
        </svg>`,
        label: 'Trip',
        desc: 'A getaway or a day out, with a day-by-day plan. Lodging and flights optional.',
      },
      {
        type: 'activity',
        tone: 'amber',
        icon: html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.6l2.82 5.72 6.31.92a.7.7 0 0 1 .39 1.2l-4.57 4.45 1.08 6.29a.7.7 0 0 1-1.02.74L12 18.94l-5.65 2.97a.7.7 0 0 1-1.02-.74l1.08-6.29-4.57-4.45a.7.7 0 0 1 .39-1.2l6.31-.92z"/>
        </svg>`,
        label: 'Activity',
        desc: 'A single thing to do, on the family calendar. Add a time if it has one.',
      },
      {
        type: 'event',
        tone: 'terracotta',
        icon: html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M11.25 9H4a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h7.25V9zm1.5 0v3.5H20a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-7.25zM11.25 14H4.5v5.5A1.5 1.5 0 0 0 6 21h5.25v-7zm1.5 0v7H18a1.5 1.5 0 0 0 1.5-1.5V14h-6.75zM8.4 3a2.1 2.1 0 0 0-.5 4.15c.86.2 1.96.05 3.1-.4C10.3 5.05 9.5 3.2 8.4 3zm7.2 0c-1.1.2-1.9 2.05-2.6 3.75 1.14.45 2.24.6 3.1.4A2.1 2.1 0 0 0 15.6 3z"/>
        </svg>`,
        label: 'Birthday or anniversary',
        desc: 'Recurring celebration on a specific date.',
      },
      {
        // Lives in the picker on BOTH platforms now (parity with the iOS
        // AddActivityPicker, 2026-06-03) — was previously desktop-hidden
        // because the affordance sat in the "Coming up" section header
        // instead. That header link is gone; this is the single home.
        type: 'import',
        tone: 'tide',
        icon: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h7" />
          <path d="M3 9h18M8 2.5v3M16 2.5v3" />
          <path d="M18 15v6M15 18h6" />
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
    .icon-cell.terracotta { background: var(--gradient-terracotta); }
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
