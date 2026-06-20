import { LitElement, html, css } from 'lit';
import './member-chip.js';
import { gradientForTrip, parseLocalDate } from '../services/data.js';
import { toast } from '../services/toast.js';

// Known booking/lodging providers → clean display name. The scraped
// `lodgingHost` (og:site_name) is unreliable — e.g. a saved Airbnb
// wishlist URL returns "Flo's Favorites" (often HTML-entity-encoded
// as "Flo&#039;s Favorites"). We derive the source from the URL's
// domain instead and fall back to a plain "Other" for anything we
// don't recognise, so the pill is always a clean, trustworthy label.
const LODGING_PROVIDERS = [
  [/(^|\.)airbnb\./, 'Airbnb'],
  [/(^|\.)(vrbo|homeaway)\./, 'Vrbo'],
  [/(^|\.)booking\./, 'Booking.com'],
  [/(^|\.)expedia\./, 'Expedia'],
  [/(^|\.)hipcamp\./, 'Hipcamp'],
  [/(^|\.)tripadvisor\./, 'Tripadvisor'],
  [/(^|\.)hotels\./, 'Hotels.com'],
  [/(^|\.)(marriott|hilton|hyatt|ihg|accor|fourseasons)\./, 'Hotel'],
  [/(^|\.)plumguide\./, 'Plum Guide'],
];

function lodgingSourceLabel(t) {
  const raw = (t && t.lodgingUrl ? String(t.lodgingUrl) : '').trim();
  if (raw) {
    let host = '';
    try {
      host = new URL(raw.includes('://') ? raw : `https://${raw}`).hostname;
    } catch {
      host = '';
    }
    if (host) {
      const h = host.toLowerCase();
      for (const [re, name] of LODGING_PROVIDERS) {
        if (re.test(h)) return name;
      }
    }
    return 'Other';
  }
  // No URL but a lodging was noted — the scraped host is unreliable,
  // so don't surface it; just say it came from somewhere else.
  return t && t.lodgingHost ? 'Other' : '';
}

/**
 * Format a trip as plain text for sharing via Web Share / clipboard.
 */
function formatTripForShare(t, memberMap) {
  const lines = [];
  lines.push(t.title || 'Portal activity');
  if (t.location) lines.push(t.location);
  if (t.start && t.end) {
    const s = parseLocalDate(t.start);
    const e = parseLocalDate(t.end);
    const sm = s.toLocaleString('en-GB', { day: 'numeric', month: 'short' });
    const em = e.toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    lines.push(t.start === t.end ? em : `${sm} – ${em}`);
  }
  if (t.lodgingUrl || t.lodgingHost || t.lodgingTitle) {
    lines.push(
      `Lodging: ${[lodgingSourceLabel(t), t.lodgingTitle].filter(Boolean).join(', ')}`,
    );
  }
  if (t.flightNumber || t.flightAirline || t.flightDepartAirport) {
    const parts = [];
    const label = [t.flightAirline, t.flightNumber].filter(Boolean).join(' ');
    if (label) parts.push(label);
    if (t.flightDepartAirport && t.flightArriveAirport) {
      parts.push(`${t.flightDepartAirport.toUpperCase()} → ${t.flightArriveAirport.toUpperCase()}`);
    }
    if (t.flightDepartTime) {
      const dt = new Date(t.flightDepartTime);
      if (!Number.isNaN(dt.getTime())) {
        parts.push(
          `Depart: ${dt.toLocaleString('en-GB', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
          })}`,
        );
      }
    }
    if (parts.length) lines.push(`Flight: ${parts.join(' · ')}`);
  }
  const attendees = (t.attendees ?? [])
    .map((uid) => memberMap.get(uid)?.displayName)
    .filter(Boolean);
  if (attendees.length) lines.push(`With: ${attendees.join(', ')}`);
  if (t.notes) lines.push('', t.notes);
  lines.push('', 'Shared from Portal · pebblepath.ai/portal');
  return lines.join('\n');
}

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
    this._resizeObs = null;
  }

  connectedCallback() {
    super.connectedCallback();
    // Re-fit the title whenever the card's container width changes
    // (e.g. resizing the window, layout reflow when other cards load).
    if (typeof ResizeObserver !== 'undefined') {
      this._resizeObs = new ResizeObserver(() => this._fitTitle());
      // Defer attach to first updated() — element isn't in the DOM yet.
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._resizeObs?.disconnect();
  }

  updated() {
    if (this._resizeObs && this.renderRoot) {
      const root = this.renderRoot.querySelector('article');
      if (root && !root._observed) {
        this._resizeObs.observe(root);
        root._observed = true;
      }
    }
    this._fitTitle();
  }

  /**
   * Shrink the title font-size until it fits on a single line. Floors at
   * 13px so we never go absurdly small; if it still doesn't fit at the
   * floor, CSS overflow:hidden lets the rest of the text just get cut.
   */
  _fitTitle() {
    if (!this.renderRoot) return;
    const h3 = this.renderRoot.querySelector('h3');
    if (!h3) return;
    h3.style.fontSize = '';
    let size = 19;
    h3.style.fontSize = `${size}px`;
    while (h3.scrollWidth > h3.clientWidth + 1 && size > 13) {
      size -= 0.5;
      h3.style.fontSize = `${size}px`;
    }
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
      overflow: hidden;
      background-size: cover;
      background-position: center;
    }
    /* When a real lodging photo is attached, give the cover more
       vertical real estate + a stronger bottom vignette so the
       overlay chips stay legible against any image. */
    .cover.has-image {
      aspect-ratio: 3 / 2;
    }
    /* 2026-06-20 (Thomas) — the photo now lives on a ::before layer (fed by
       the --cover-img custom property) so the hover zoom is a transform on
       JUST the image, leaving the date/visibility chips put. The old hover
       used background-size 105 percent, which is WIDTH-relative with auto
       height: on covers wider than the 3:2 frame it shrank the image (zoom
       OUT) and exposed the card background as borders; on narrower covers it
       zoomed in. Keeping background-size cover constant + scaling via
       transform makes the photo always fill the frame and zoom consistently. */
    .cover.has-image::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 0;
      background-image: var(--cover-img);
      background-size: cover;
      background-position: center;
      transform: scale(1);
      transition: transform 360ms ease;
    }
    .cover::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(20, 12, 6, 0.55) 100%);
    }
    .cover.has-image::after {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0) 40%,
        rgba(20, 12, 6, 0.72) 100%
      );
    }
    article:hover .cover.has-image::before {
      /* Subtle zoom on hover gives the photo a polaroid-like presence */
      transform: scale(1.06);
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
      /* Always white — the badge sits on a photo thumbnail, so it
         must not follow the theme (charcoal in light = unreadable
         on the image). The frosted light pill + white text reads on
         any cover. */
      color: #fff;
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
      white-space: nowrap;
      overflow: hidden;
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
      align-items: flex-start;
      gap: 6px;
      min-width: 0;
    }
    .lodging .pill {
      padding: 2px 8px;
      border-radius: var(--radius-pill);
      background: rgba(255, 248, 235, 0.08);
      border: 1px solid rgba(255, 248, 235, 0.14);
      font-weight: 500;
      color: var(--text-secondary);
      flex-shrink: 0;
    }
    .lodging .lodging-text {
      flex: 1;
      min-width: 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.35;
    }
    .flight-info {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .flight-info .plane {
      color: var(--teal-pebble);
    }
    .flight-info .route {
      font-family: 'SF Mono', ui-monospace, monospace;
      font-size: 11.5px;
      letter-spacing: 0.04em;
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
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-top: 10px;
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .icon-btn {
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.14);
      color: var(--text-secondary);
      width: 32px;
      height: 32px;
      border-radius: 999px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      padding: 0;
      transition: color 200ms ease, border-color 200ms ease, background 200ms ease;
    }
    .icon-btn:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
      background: rgba(255, 248, 235, 0.1);
    }
    .icon-btn svg {
      width: 15px;
      height: 15px;
    }
  `;

  _fmtDates(start, end) {
    const s = parseLocalDate(start);
    const e = parseLocalDate(end);
    if (!s || !e) return '';
    const sm = s.toLocaleString('en-GB', { month: 'short' });
    const em = e.toLocaleString('en-GB', { month: 'short' });
    if (sm === em && s.getFullYear() === e.getFullYear()) {
      return `${s.getDate()} – ${e.getDate()} ${sm}`;
    }
    return `${s.getDate()} ${sm} – ${e.getDate()} ${em}`;
  }

  async _onShare(t, memberMap, e) {
    e.stopPropagation(); // don't trigger card edit
    const text = formatTripForShare(t, memberMap);
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Portal: ${t.title ?? 'activity'}`,
          text,
        });
      } catch {
        /* user cancelled the share sheet */
      }
    } else {
      try {
        await navigator.clipboard.writeText(text);
        toast('Itinerary copied to clipboard.');
      } catch {
        toast('Could not copy. Try again from a browser tab.');
      }
    }
  }

  render() {
    const t = this.trip;
    if (!t) return html``;
    // Display precedence (mirrors iOS Trip.previewImage docstring):
    // user-supplied previewImage beats the auto-derived lodging
    // coverImage so trips don't all look like hotel rooms. Either
    // can be a Storage URL (uploaded) OR a directly-pasted image URL.
    const displayImage = (t.previewImage && String(t.previewImage).trim()) || t.coverImage;
    // Quote the URL inside CSS url(). Unquoted url() can't handle
    // parens/colons inside the URL — e.g. a midwestliving thumb URL
    // like `.../filters:no_upscale():max_bytes(150000)/...` parses
    // as broken because CSS sees the inner () as nested parens.
    // Double-quoted url() is safe for any URL except those containing
    // a literal " (extremely rare in real-world image URLs). Same
    // pattern applied to trip-form's thumbnail preview.
    const cover = displayImage
      ? `--cover-img: url("${displayImage}");`
      : `background: ${gradientForTrip(t)};`;
    const coverClass = displayImage ? 'cover has-image' : 'cover';
    const memberMap = new Map(this.members.map((m) => [m.uid, m]));
    const attendees = (t.attendees ?? []).map((uid) => memberMap.get(uid)).filter(Boolean);
    const shown = attendees.slice(0, 4);
    const overflow = Math.max(0, attendees.length - shown.length);
    return html`
      <article
        tabindex="0"
        aria-label="${t.title}, open day plan"
        @click=${() => this.dispatchEvent(new CustomEvent('open-planner', { detail: t, bubbles: true, composed: true }))}
        @keydown=${(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent('open-planner', { detail: t, bubbles: true, composed: true }));
          }
        }}
      >
        <div class="${coverClass}" style=${cover}>
          <div class="dates">${this._fmtDates(t.start, t.end)}</div>
        </div>
        <div class="body">
          <h3>${t.title}</h3>
          <div class="location">${t.location || '—'}</div>
          ${t.lodgingUrl || t.lodgingHost
            ? (() => {
                const src = lodgingSourceLabel(t);
                return html`<div class="lodging">
                  ${src ? html`<span class="pill">${src}</span>` : ''}
                  <span class="lodging-text">${t.lodgingTitle || t.lodgingUrl || ''}</span>
                </div>`;
              })()
            : ''}
          ${t.flightNumber || t.flightDepartAirport
            ? html`<div class="flight-info">
                <span class="plane">✈</span>
                <span>${[t.flightAirline, t.flightNumber].filter(Boolean).join(' ')}</span>
                ${t.flightDepartAirport && t.flightArriveAirport
                  ? html`<span class="route">${t.flightDepartAirport.toUpperCase()} → ${t.flightArriveAirport.toUpperCase()}</span>`
                  : ''}
              </div>`
            : ''}
          <div class="footer">
            <div class="attendees">
              ${shown.map(
                (m) => html`<member-chip
                  .name=${m.displayName}
                  .photo=${m.photoURL ?? ''}
                  .hue=${m.hue}
                  size="28"
                ></member-chip>`,
              )}
              ${overflow > 0 ? html`<span class="more">+${overflow}</span>` : ''}
            </div>
            <div class="actions">
              <button
                class="icon-btn"
                title="Edit trip"
                aria-label="Edit trip details"
                @click=${(e) => {
                  e.stopPropagation(); // don't open the planner
                  this.dispatchEvent(
                    new CustomEvent('edit-trip', {
                      detail: t,
                      bubbles: true,
                      composed: true,
                    }),
                  );
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
                </svg>
              </button>
              <button
                class="icon-btn"
                title="Share itinerary"
                aria-label="Share itinerary"
                @click=${(e) => this._onShare(t, memberMap, e)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define('trip-card', TripCard);
