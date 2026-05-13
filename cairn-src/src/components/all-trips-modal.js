import { LitElement, html, css } from 'lit';
import './glass-panel.js';
import './glass-button.js';
import './trip-card.js';

/**
 * Phase 3E: chronological list of all trips (past, present, future)
 * for the current circle. Grouped by year. Click a row to edit via
 * the same trip-form modal home-screen owns.
 */
export class AllTripsModal extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    trips: { type: Array },
    members: { type: Array },
  };

  constructor() {
    super();
    this.open = false;
    this.trips = [];
    this.members = [];
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
      padding: 6vh 24px;
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
      max-width: 780px;
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
      margin-bottom: 20px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .count {
      color: var(--text-tertiary);
      font-size: 13px;
      margin-left: 8px;
      font-weight: 500;
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
      line-height: 1;
    }
    .close:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .year {
      font-family: var(--font-display);
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-tertiary);
      margin: 22px 0 12px;
      padding: 0 4px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .year::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(255, 248, 235, 0.18) 0%,
        rgba(255, 248, 235, 0) 100%
      );
    }
    .year:first-of-type { margin-top: 0; }
    .year.current {
      color: var(--teal-pebble);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 14px;
    }
    .grid trip-card { display: block; }
    .past trip-card {
      opacity: 0.65;
      transition: opacity 200ms ease;
    }
    .past trip-card:hover {
      opacity: 1;
    }
    .empty {
      text-align: center;
      color: var(--text-tertiary);
      font-size: 14px;
      padding: 38px 12px;
      line-height: 1.55;
    }
  `;

  _onCancel() {
    this.dispatchEvent(new Event('cancel'));
  }

  _groupByYear(trips) {
    // Sort chronological ascending (oldest first) so the year sections
    // appear in time order. Past trips render with dimmed opacity.
    const sorted = [...trips].sort((a, b) =>
      String(a.start).localeCompare(String(b.start)),
    );
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const groups = new Map();
    for (const t of sorted) {
      if (!t.start) continue;
      const year = new Date(t.start).getFullYear();
      if (!groups.has(year)) groups.set(year, []);
      const isPast = t.end ? new Date(t.end) < today : false;
      groups.get(year).push({ trip: t, isPast });
    }
    return groups;
  }

  render() {
    if (!this.open) return html``;
    const groups = this._groupByYear(this.trips ?? []);
    const total = this.trips?.length ?? 0;
    const currentYear = new Date().getFullYear();
    return html`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>All trips<span class="count">${total} ${total === 1 ? 'trip' : 'trips'}</span></h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>
          ${total === 0
            ? html`<div class="empty">
                No trips for this circle yet.<br />
                Close this and tap <strong>+ New trip</strong> to add one.
              </div>`
            : Array.from(groups.entries()).map(
                ([year, items]) => html`
                  <div class="year ${year === currentYear ? 'current' : ''}">
                    ${year}
                  </div>
                  <div class="grid">
                    ${items.map(
                      ({ trip, isPast }) => html`
                        <div class=${isPast ? 'past' : ''}>
                          <trip-card .trip=${trip} .members=${this.members}></trip-card>
                        </div>
                      `,
                    )}
                  </div>
                `,
              )}
        </glass-panel>
      </div>
    `;
  }
}

customElements.define('all-trips-modal', AllTripsModal);
