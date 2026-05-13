import { LitElement, html, css } from 'lit';
import './member-chip.js';
import { gradientForTrip } from '../services/data.js';

/**
 * Trip card. Cover area uses lodging image when present, else a gradient.
 * Properties:
 *   trip      — { id, title, location, start, end, coverGradient, coverImage,
 *                  lodgingHost, lodgingTitle, attendees, visibility }
 *   members   — full member list (for resolving attendee uids → display)
 */
export class TripCard extends LitElement {
  static properties = {
    trip: { type: Object },
    members: { type: Array },
  };

  constructor() {
    super();
    this.trip = null;
    this.members = [];
  }

  static styles = css`
    :host {
      display: block;
    }
    article {
      position: relative;
      border-radius: var(--radius-stone);
      overflow: hidden;
      background: var(--glass-fill);
      backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      border: 1px solid var(--glass-border);
      box-shadow: var(--glass-shadow);
      transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
      cursor: pointer;
    }
    article:hover {
      transform: translateY(-3px);
      box-shadow: var(--glass-shadow-lifted);
      border-color: var(--glass-border-strong);
    }
    .cover {
      aspect-ratio: 16 / 10;
      position: relative;
      background-size: cover;
      background-position: center;
    }
    .cover::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(20, 12, 6, 0.55) 100%);
    }
    .visibility {
      position: absolute;
      top: 12px;
      left: 12px;
      padding: 4px 10px;
      border-radius: var(--radius-pill);
      background: rgba(20, 12, 6, 0.35);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(255, 248, 235, 0.22);
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-primary);
      z-index: 2;
    }
    .dates {
      position: absolute;
      bottom: 12px;
      right: 12px;
      padding: 6px 12px;
      border-radius: var(--radius-pill);
      background: rgba(255, 248, 235, 0.18);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(255, 248, 235, 0.32);
      font-size: 12px;
      font-weight: 600;
      color: var(--text-primary);
      z-index: 2;
    }
    .body {
      padding: 18px 20px 20px;
    }
    h3 {
      margin: 0 0 4px;
      font-family: var(--font-display);
      font-size: 19px;
      font-weight: 600;
      letter-spacing: -0.015em;
    }
    .location {
      color: var(--text-secondary);
      font-size: 13px;
      margin-bottom: 14px;
    }
    .lodging {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .lodging .pill {
      padding: 2px 8px;
      border-radius: var(--radius-pill);
      background: rgba(255, 248, 235, 0.08);
      border: 1px solid rgba(255, 248, 235, 0.14);
      font-weight: 500;
      color: var(--text-secondary);
    }
    .attendees {
      display: flex;
      align-items: center;
    }
    .attendees member-chip {
      margin-right: -8px;
    }
    .attendees .more {
      margin-left: 4px;
      font-size: 12px;
      color: var(--text-tertiary);
    }
  `;

  _fmtDates(start, end) {
    const s = new Date(start);
    const e = new Date(end);
    const sm = s.toLocaleString('en-GB', { month: 'short' });
    const em = e.toLocaleString('en-GB', { month: 'short' });
    if (sm === em && s.getFullYear() === e.getFullYear()) {
      return `${s.getDate()}–${e.getDate()} ${sm}`;
    }
    return `${s.getDate()} ${sm} – ${e.getDate()} ${em}`;
  }

  render() {
    const t = this.trip;
    if (!t) return html``;
    const cover = t.coverImage
      ? `background-image: url(${t.coverImage});`
      : `background: ${gradientForTrip(t)};`;
    const memberMap = new Map(this.members.map((m) => [m.uid, m]));
    const attendees = (t.attendees ?? []).map((uid) => memberMap.get(uid)).filter(Boolean);
    const shown = attendees.slice(0, 4);
    const overflow = Math.max(0, attendees.length - shown.length);
    return html`
      <article
        tabindex="0"
        aria-label=${t.title}
        @click=${() => this.dispatchEvent(new CustomEvent('edit-trip', { detail: t, bubbles: true, composed: true }))}
        @keydown=${(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent('edit-trip', { detail: t, bubbles: true, composed: true }));
          }
        }}
      >
        <div class="cover" style=${cover}>
          <div class="visibility">${t.visibility ?? 'family'}</div>
          <div class="dates">${this._fmtDates(t.start, t.end)}</div>
        </div>
        <div class="body">
          <h3>${t.title}</h3>
          <div class="location">${t.location || '—'}</div>
          ${t.lodgingUrl || t.lodgingHost
            ? html`<div class="lodging">
                ${t.lodgingHost ? html`<span class="pill">${t.lodgingHost}</span>` : ''}
                <span>${t.lodgingTitle || t.lodgingUrl || ''}</span>
              </div>`
            : ''}
          <div class="attendees">
            ${shown.map(
              (m) => html`<member-chip name=${m.displayName} .hue=${m.hue} size="28"></member-chip>`,
            )}
            ${overflow > 0 ? html`<span class="more">+${overflow}</span>` : ''}
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define('trip-card', TripCard);
