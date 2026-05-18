import { LitElement, html, css } from 'lit';

/**
 * Growth-insight card — the iOS app's InsightCardView /
 * design-sandbox D-1 treatment: a hand-drawn pebble watermark behind
 * the text + per-family colour harmony (bg tint + icon-circle +
 * accent label), adapted to the Portal's dark glass surface.
 *
 * Shared so the Children tab AND the Today tab render insights
 * identically (reuse, don't reinvent).
 *
 * Props: type (strength|watching|connection|nudge), domain
 * (motor|language|socialEmotional|cognitive|cross), title, body.
 */

// 7 hand-drawn pebble silhouettes (a–g), verbatim from the
// design-sandbox D-1 spec / the iOS PebbleShapes.
const PEBBLES = [
  { vb: '0 0 100 70', d: 'M 8 38 C 6 18, 26 6, 48 8 C 72 10, 94 18, 94 38 C 94 58, 72 66, 48 64 C 22 62, 10 58, 8 38 Z' },
  { vb: '0 0 80 90', d: 'M 38 6 C 56 8, 70 24, 72 46 C 74 70, 58 84, 38 84 C 16 84, 6 66, 8 44 C 10 22, 22 4, 38 6 Z' },
  { vb: '0 0 90 80', d: 'M 14 26 C 18 10, 38 4, 56 8 C 78 14, 86 32, 82 50 C 76 70, 54 78, 32 72 C 12 66, 10 42, 14 26 Z' },
  { vb: '0 0 70 60', d: 'M 8 30 C 8 14, 22 6, 38 8 C 54 10, 64 22, 62 36 C 60 52, 44 56, 28 54 C 14 52, 8 44, 8 30 Z' },
  { vb: '0 0 110 75', d: 'M 8 38 C 6 18, 30 8, 56 10 C 84 12, 104 22, 104 40 C 102 58, 80 68, 52 66 C 24 64, 10 56, 8 38 Z' },
  { vb: '0 0 95 75', d: 'M 14 24 C 18 10, 40 6, 56 12 C 70 18, 80 18, 86 30 C 90 44, 80 56, 64 60 C 48 64, 28 60, 18 50 C 10 42, 10 32, 14 24 Z' },
  { vb: '0 0 80 80', d: 'M 14 20 C 20 10, 36 6, 52 10 C 68 16, 76 30, 72 48 C 66 64, 50 72, 32 66 C 16 60, 8 44, 10 30 C 12 24, 12 22, 14 20 Z' },
];

// Stable shape pick (djb2, mirrors iOS PebbleShape.stable(for:)).
function pebbleFor(seed) {
  let h = 5381;
  const s = String(seed ?? '');
  for (let i = 0; i < s.length; i += 1) h = (h * 33) ^ s.charCodeAt(i);
  return PEBBLES[Math.abs(h) % PEBBLES.length];
}

const INSIGHT_FAM = {
  motor: { cls: 'fam-motor', fill: '#6b9ac4', dom: 'Motor' },
  language: { cls: 'fam-language', fill: '#d4a843', dom: 'Language' },
  socialEmotional: { cls: 'fam-social', fill: '#c98a8a', dom: 'Social-Emotional' },
  cognitive: { cls: 'fam-cognitive', fill: '#8b7bb5', dom: 'Cognitive' },
  cross: { cls: 'fam-cross', fill: '#3d9b8f', dom: '' },
};

const INSIGHT_ICON = {
  strength: {
    label: 'Strength',
    svg: html`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.6l-5.88 3.01 1.12-6.55-4.76-4.64 6.58-.96L12 2.5z"/></svg>`,
  },
  watching: {
    label: 'Watching',
    svg: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3.2"/></svg>`,
  },
  connection: {
    label: 'Connection',
    svg: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.07.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.07-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  },
  nudge: {
    label: 'Try this',
    svg: html`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>`,
  },
};

export class InsightCard extends LitElement {
  static properties = {
    type: { type: String },
    domain: { type: String },
    title: { type: String },
    body: { type: String },
  };

  constructor() {
    super();
    this.type = 'nudge';
    this.domain = 'cross';
    this.title = '';
    this.body = '';
  }

  static styles = css`
    *, *::before, *::after { box-sizing: border-box; }
    :host { display: block; }
    .insight {
      position: relative;
      border-radius: var(--radius-tile);
      border: 1px solid var(--glass-border);
      padding: 16px 18px;
      overflow: hidden;
      isolation: isolate;
    }
    .wm {
      position: absolute;
      top: -28px;
      left: -34px;
      width: 150px;
      height: 130px;
      opacity: 0.18;
      z-index: 0;
      pointer-events: none;
    }
    .irow {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .icirc {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1px;
    }
    .icirc svg { width: 14px; height: 14px; }
    .icontent { flex: 1; min-width: 0; }
    .cat {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 9.5px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      line-height: 1;
      margin-bottom: 6px;
    }
    .cat .sep,
    .cat .dom { color: var(--text-tertiary); }
    h4 {
      position: relative;
      z-index: 1;
      margin: 0 0 5px;
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 700;
      color: var(--text-primary);
      line-height: 1.32;
      letter-spacing: -0.005em;
    }
    p {
      position: relative;
      z-index: 1;
      margin: 0;
      font-size: 13.5px;
      color: var(--text-secondary);
      line-height: 1.52;
    }
    /* per-family harmony — base colour drives bg tint + icon-circle;
       light accent drives the cat-label + glyph (legible on dusk).
       Mirrors the app's domain mapping (motor=blue, language=amber,
       social=rose, cognitive=purple, cross=teal). */
    /* Hue tint layered OVER the themed glass fill — without the
       --glass-fill base the faint tint sat straight on the page and
       charcoal text read as muddy "dark-on-dark" in light mode. The
       base makes it a proper light card in light / stays subtle in
       dark (--glass-fill there is ~0.06, invisible under the tint). */
    .fam-motor { background: linear-gradient(135deg, rgba(107,154,196,0.16), rgba(107,154,196,0.05)), var(--glass-fill); }
    .fam-motor .icirc { background: rgba(107,154,196,0.22); color: var(--ink-blue); }
    .fam-motor .cat .type { color: var(--ink-blue); }
    .fam-language { background: linear-gradient(135deg, rgba(212,168,67,0.16), rgba(212,168,67,0.05)), var(--glass-fill); }
    .fam-language .icirc { background: rgba(212,168,67,0.22); color: var(--ink-amber); }
    .fam-language .cat .type { color: var(--ink-amber); }
    .fam-social { background: linear-gradient(135deg, rgba(201,138,138,0.16), rgba(201,138,138,0.05)), var(--glass-fill); }
    .fam-social .icirc { background: rgba(201,138,138,0.22); color: var(--ink-rose); }
    .fam-social .cat .type { color: var(--ink-rose); }
    .fam-cognitive { background: linear-gradient(135deg, rgba(139,123,181,0.16), rgba(139,123,181,0.05)), var(--glass-fill); }
    .fam-cognitive .icirc { background: rgba(139,123,181,0.22); color: var(--ink-purple); }
    .fam-cognitive .cat .type { color: var(--ink-purple); }
    .fam-cross { background: linear-gradient(135deg, rgba(61,155,143,0.16), rgba(61,155,143,0.05)), var(--glass-fill); }
    .fam-cross .icirc { background: rgba(61,155,143,0.22); color: var(--ink-teal); }
    .fam-cross .cat .type { color: var(--ink-teal); }
  `;

  render() {
    const fam = INSIGHT_FAM[this.domain] ?? INSIGHT_FAM.cross;
    const ic = INSIGHT_ICON[this.type] ?? INSIGHT_ICON.nudge;
    const peb = pebbleFor(`${this.title}${this.type}`);
    return html`
      <div class="insight ${fam.cls}">
        <svg
          class="wm"
          viewBox=${peb.vb}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <path d=${peb.d} fill=${fam.fill} />
        </svg>
        <div class="irow">
          <div class="icirc">${ic.svg}</div>
          <div class="icontent">
            <div class="cat">
              <span class="type">${ic.label}</span>
              ${fam.dom
                ? html`<span class="sep">·</span
                    ><span class="dom">${fam.dom}</span>`
                : ''}
            </div>
            <h4>${this.title}</h4>
            <p>${this.body}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('insight-card', InsightCard);
