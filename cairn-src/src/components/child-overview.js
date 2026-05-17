import { LitElement, html, css } from 'lit';
import './member-chip.js';
import './insight-card.js';

/**
 * Children tab body — surfaces the PebblePath app's child-development
 * data on the web: child card, the 4 CDC domain tiles, coming-up +
 * recently-achieved milestones, growth insights, and Pebble's daily
 * card. Read-only mirror of the iOS app (no writes here).
 *
 * Props:
 *   child       — selected child { id, name, dateOfBirth:Date,
 *                  profilePhotoURL, pronouns, themeColorHex }
 *   children    — all children (renders a switcher when > 1)
 *   milestones  — [{ category, title, status, ageRangeStartMonths, ... }]
 *   insights    — [{ type, domain, title, body, relevanceScore }]
 *   dailyCard   — { title, body, topicForChat } | null
 *
 * Events:
 *   select-child  detail: childId
 *   ask-pebble    detail: seed question string
 */
// Icons mirror the iOS app's DomainTileView SF Symbols:
// motor=figure.walk, language=bubble.left.fill, social=heart.fill,
// cognitive=brain.head.profile.
const DOMAINS = [
  {
    key: 'motor',
    label: 'Motor',
    color: '#6b9ac4',
    svg: html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="13.5" cy="4" r="2"/><path d="M12.6 7.3 8.8 9.9a1 1 0 0 0-.42.66l-.7 3.6a1 1 0 0 0 1.96.38l.5-2.6 1.5-.9-1 4-2.4 4.8a1 1 0 0 0 1.8.9l2.4-4.9.6-2 1.3 2.2.5 4.6a1 1 0 0 0 2-.2l-.5-5a1 1 0 0 0-.13-.42l-1.7-2.9.5-2.7 1.7 1.9a1 1 0 0 0 .76.34l2.3-.05a1 1 0 0 0 0-2l-1.86.04-2.7-3a1 1 0 0 0-.7-.33l-3.3-.06a1 1 0 0 0-.5.12z"/></svg>`,
  },
  {
    key: 'language',
    label: 'Language',
    color: '#d4a843',
    svg: html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3.5h14A3.5 3.5 0 0 1 22.5 7v6A3.5 3.5 0 0 1 19 16.5h-7.6l-5 4.2A1 1 0 0 1 5 20V16.5A3.5 3.5 0 0 1 1.5 13V7A3.5 3.5 0 0 1 5 3.5z"/></svg>`,
  },
  {
    key: 'socialEmotional',
    label: 'Social-Emotional',
    color: '#c98a8a',
    svg: html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7.4-4.6-9.7-9.2A5.4 5.4 0 0 1 12 6.1a5.4 5.4 0 0 1 9.7 5.7C19.4 16.4 12 21 12 21z"/></svg>`,
  },
  {
    key: 'cognitive',
    label: 'Cognitive',
    color: '#8b7bb5',
    svg: html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15.5 21v-3.2a3 3 0 0 0 2.3-2.9 4 4 0 0 0-.8-6.6A4.2 4.2 0 0 0 9 5.4 4 4 0 0 0 5 9.3a3.9 3.9 0 0 0 1.6 3.2 3 3 0 0 0 1.7 5.3V21"/><path d="M10.5 8.2a2.3 2.3 0 0 1 2.5 2.2v7"/></svg>`,
  },
];

// Legacy 'selfCare' rows decode to motor (matches the iOS decoder
// back-compat — Build 9 retag).
function normCat(c) {
  return c === 'selfCare' ? 'motor' : c;
}

function ageLabel(dob) {
  if (!dob || Number.isNaN(dob.getTime?.() ?? NaN)) return '';
  const now = new Date();
  let months =
    (now.getFullYear() - dob.getFullYear()) * 12 +
    (now.getMonth() - dob.getMonth());
  if (now.getDate() < dob.getDate()) months -= 1;
  months = Math.max(0, months);
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y === 0) return `${m} month${m === 1 ? '' : 's'}`;
  const mm = m ? `, ${m} month${m === 1 ? '' : 's'}` : '';
  return `${y} year${y === 1 ? '' : 's'}${mm}`;
}

// Growth-insight rendering moved to the shared <insight-card>
// component (Portal v4 Batch G) so Children + Today match the app
// identically — pebble shapes / family colours live there now.

export class ChildOverview extends LitElement {
  static properties = {
    child: { type: Object },
    children: { type: Array },
    milestones: { type: Array },
    insights: { type: Array },
    dailyCard: { type: Object },
    // Batch F — true when shown to a read-only "child viewer"
    // (parent-approved extended-ring member): hide the Pediatrician
    // CTA (it dispatches a Pebble request — member-only) and reframe
    // the visibility note. Milestones/timeline/insights are
    // inherently read-only displays already.
    readonly: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.child = null;
    this.children = [];
    this.milestones = [];
    this.insights = [];
    this.dailyCard = null;
    this.readonly = false;
  }

  static styles = css`
    *, *::before, *::after { box-sizing: border-box; }
    :host { display: block; }
    section { margin-bottom: 30px; }
    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
      padding: 0 4px;
      gap: 14px;
      flex-wrap: wrap;
    }
    .section-head h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
    .note {
      font-size: 12.5px;
      color: var(--text-tertiary);
      margin: 0;
    }
    .panel {
      position: relative;
      border-radius: var(--radius-card);
      background: var(--glass-fill-strong);
      backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      border: 1px solid var(--glass-border-strong);
      box-shadow: var(--glass-shadow);
      padding: 24px;
    }

    /* child switcher */
    .switcher {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }
    .switcher button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 7px 14px 7px 8px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
    }
    .switcher button.on {
      background: rgba(61, 155, 143, 0.2);
      color: #fff;
      border-color: rgba(61, 155, 143, 0.45);
    }

    /* child card */
    .child-card {
      display: flex;
      align-items: center;
      gap: 22px;
      flex-wrap: wrap;
    }
    .ring {
      border-radius: 999px;
      padding: 4px;
      background: var(--theme, var(--teal-pebble));
      display: inline-flex;
    }
    .meta h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 26px;
      letter-spacing: -0.02em;
    }
    .meta .sub {
      color: var(--text-secondary);
      font-size: 14px;
      margin-top: 3px;
    }
    .meta .agepill {
      display: inline-block;
      margin-top: 10px;
      padding: 4px 12px;
      border-radius: var(--radius-pill);
      font-size: 12.5px;
      font-weight: 600;
      background: rgba(61, 155, 143, 0.18);
      color: #9fded2;
      border: 1px solid rgba(61, 155, 143, 0.35);
    }
    .progress {
      margin-left: auto;
      text-align: right;
      min-width: 150px;
    }
    .progress .big {
      font-family: var(--font-display);
      font-size: 30px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .progress .lbl {
      color: var(--text-secondary);
      font-size: 12.5px;
      margin-top: 2px;
    }

    /* domain tiles */
    .domains {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
    }
    @media (max-width: 880px) {
      .domains { grid-template-columns: repeat(2, 1fr); }
    }
    .dtile {
      border-radius: var(--radius-tile);
      padding: 18px;
      border: 1px solid var(--glass-border);
      background: var(--tint);
    }
    .dico {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin-bottom: 14px;
      background: var(--c);
    }
    .dico svg { width: 18px; height: 18px; }
    .dname {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 14px;
    }
    .dcount {
      font-size: 12.5px;
      color: var(--text-secondary);
      margin: 4px 0 12px;
    }
    .bar {
      height: 7px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.12);
      overflow: hidden;
    }
    .bar i {
      display: block;
      height: 100%;
      border-radius: 999px;
      background: var(--c);
    }

    /* milestone rows */
    .ms-row {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 13px 4px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.07);
    }
    .ms-row:last-child { border-bottom: none; }
    .ms-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .ms-row .t {
      flex: 1;
      font-size: 14.5px;
      font-weight: 500;
    }
    .ms-row .t small {
      display: block;
      color: var(--text-tertiary);
      font-size: 12px;
      font-weight: 400;
      margin-top: 2px;
    }
    .ms-stat {
      padding: 4px 11px;
      border-radius: var(--radius-pill);
      font-size: 11.5px;
      font-weight: 600;
      white-space: nowrap;
    }
    .ms-stat.done { background: rgba(79, 194, 107, 0.18); color: #a6e6b8; }
    .ms-stat.emerging { background: rgba(212, 168, 67, 0.18); color: #ecca7e; }
    .ms-stat.up { background: rgba(255, 248, 235, 0.08); color: var(--text-secondary); }

    .two-col {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 18px;
      align-items: start;
    }
    @media (max-width: 1024px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* Growth insights now render via the shared <insight-card>
       component (Portal v4 Batch G) — the pebble-watermark + family
       harmony CSS lives there. This only spaces the stack. */
    .insight-stack {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* "The longer view" longitudinal timeline — concept-faithful. */
    .timeline {
      position: relative;
      padding: 8px 4px 4px;
      /* lane-label width + the 14px lane gap = the left pad the
         "now" marker and axis align to. Made a custom property so
         the ≤560px refinement can shrink it without desyncing. */
      --tl-name-w: 104px;
      --tl-pad: 118px;
    }
    .tl-lane { display: flex; align-items: center; gap: 14px; height: 46px; }
    .tl-name {
      width: var(--tl-name-w, 104px);
      font-size: 12.5px;
      font-weight: 600;
      color: var(--text-secondary);
      text-align: right;
      flex-shrink: 0;
    }
    .tl-track {
      flex: 1;
      position: relative;
      height: 2px;
      background: rgba(255, 248, 235, 0.12);
      border-radius: 2px;
    }
    .tl-track i {
      position: absolute;
      top: 50%;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 0 3px rgba(20, 12, 6, 0.35);
    }
    .tl-lane.motor .tl-track i { background: #6b9ac4; }
    .tl-lane.language .tl-track i { background: #d4a843; }
    .tl-lane.social .tl-track i { background: #c98a8a; }
    .tl-lane.cognitive .tl-track i { background: #8b7bb5; }
    .tl-track i.future {
      background: transparent !important;
      border: 2px dashed rgba(255, 248, 235, 0.3);
      box-shadow: none;
    }
    .tl-now {
      position: absolute;
      top: 0;
      bottom: 24px;
      width: 2px;
      background: linear-gradient(180deg, #4fc26b, transparent);
    }
    .tl-now span {
      position: absolute;
      top: -22px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 11px;
      font-weight: 700;
      color: #7fdc97;
      white-space: nowrap;
    }
    .tl-axis {
      display: flex;
      justify-content: space-between;
      margin: 8px 0 0 var(--tl-pad, 118px);
      font-size: 11px;
      color: var(--text-tertiary);
    }

    /* Pediatrician summary CTA — concept .cta-card. */
    .cta-card {
      display: flex;
      align-items: center;
      gap: 18px;
      flex-wrap: wrap;
    }
    .cta-card .cic {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background-image: var(--gradient-cta);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-shrink: 0;
    }
    .cta-card .cic svg { width: 22px; height: 22px; }
    .cta-card .ctx { flex: 1; min-width: 200px; }
    .cta-card .ctx h4 {
      margin: 0 0 4px;
      font-family: var(--font-display);
      font-size: 16px;
    }
    .cta-card .ctx p {
      margin: 0;
      font-size: 13px;
      color: var(--text-secondary);
    }
    .btn-primary {
      padding: 10px 18px;
      border-radius: var(--radius-pill);
      font-weight: 600;
      font-size: 13.5px;
      background-image: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      cursor: pointer;
      font-family: var(--font-body);
      box-shadow: 0 4px 14px rgba(139, 90, 62, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
    }
    .btn-primary:hover { background-image: var(--gradient-cta-hover); }
    .vis-note {
      font-size: 12.5px;
      color: var(--text-tertiary);
      line-height: 1.5;
      margin-top: 12px;
      padding: 0 4px;
    }
    .vis-note b { color: var(--text-secondary); }

    /* Phone refinement — the timeline's fixed lane-label gutter is
       too wide on narrow screens; shrink it (and the axis text) so
       the track keeps usable width. The custom-prop pad keeps the
       "now" marker + axis aligned automatically. */
    @media (max-width: 560px) {
      .timeline {
        --tl-name-w: 58px;
        --tl-pad: 72px;
      }
      .tl-name { font-size: 11px; }
      .tl-axis { font-size: 10px; }
      .child-card { gap: 16px; }
      .progress { margin-left: 0; min-width: 0; text-align: left; }
    }

    /* Pebble's daily card */
    .daily {
      border-radius: var(--radius-card);
      padding: 24px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #3d9b8f 0%, #1f5c54 100%);
      box-shadow: 0 12px 30px rgba(31, 92, 84, 0.4);
    }
    .daily::after {
      content: '';
      position: absolute;
      right: -30px;
      top: -30px;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.14), transparent 70%);
    }
    .daily .tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 10px;
    }
    .daily .tag svg { width: 13px; height: 13px; }
    .daily h3 {
      margin: 0 0 8px;
      font-family: var(--font-display);
      font-size: 19px;
      color: #fff;
      letter-spacing: -0.01em;
    }
    .daily p {
      margin: 0 0 16px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.88);
      line-height: 1.6;
    }
    .daily .ask {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 8px 16px;
      border-radius: var(--radius-pill);
      background: rgba(255, 255, 255, 0.16);
      border: 1px solid rgba(255, 255, 255, 0.28);
      color: #fff;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
    }
    .daily .ask:hover { background: rgba(255, 255, 255, 0.24); }

    .empty {
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.55;
      padding: 6px 0;
    }
  `;

  _domainStats(key) {
    const inDomain = (this.milestones ?? []).filter(
      (m) => normCat(m.category) === key,
    );
    const achieved = inDomain.filter((m) => m.status === 'achieved').length;
    const total = inDomain.length;
    return { achieved, total, pct: total ? Math.round((achieved / total) * 100) : 0 };
  }

  _pebbleIcon() {
    return html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" /></svg>`;
  }

  _ageMonths(dob) {
    if (!dob || Number.isNaN(dob.getTime?.() ?? NaN)) return 0;
    const now = new Date();
    let m =
      (now.getFullYear() - dob.getFullYear()) * 12 +
      (now.getMonth() - dob.getMonth());
    if (now.getDate() < dob.getDate()) m -= 1;
    return Math.max(0, m);
  }

  /** "The longer view" model — per-domain dots on a 0→axisMax age
   *  axis. Solid dot = achieved milestone (by start age); one dashed
   *  "future" dot = the next not-yet-achieved one in that domain.
   *  Axis adapts to the child's age + the catalog so it stays
   *  meaningful past toddlerhood. */
  _timelineModel() {
    const ms = this.milestones ?? [];
    const ageM = this._ageMonths(this.child?.dateOfBirth);
    const maxEnd = ms.reduce(
      (mx, m) => Math.max(mx, m.ageRangeEndMonths ?? 0),
      0,
    );
    const ladder = [36, 48, 60, 72, 96, 120, 144, 168, 216, 264];
    const need = Math.max(ageM + 4, maxEnd, 36);
    const axisMax = ladder.find((v) => v >= need) ?? ladder[ladder.length - 1];
    const pos = (mm) =>
      Math.min(98, Math.max(2, ((mm ?? 0) / axisMax) * 100));
    const lanes = [
      { key: 'motor', cls: 'motor', name: 'Motor' },
      { key: 'language', cls: 'language', name: 'Language' },
      { key: 'socialEmotional', cls: 'social', name: 'Social-Emo.' },
      { key: 'cognitive', cls: 'cognitive', name: 'Cognitive' },
    ].map((ln) => {
      const inDom = ms.filter((m) => normCat(m.category) === ln.key);
      const done = inDom
        .filter((m) => m.status === 'achieved')
        .sort(
          (a, b) =>
            (a.ageRangeStartMonths ?? 0) - (b.ageRangeStartMonths ?? 0),
        );
      // Cap at 7 evenly-sampled so a 100+ catalog doesn't blur into a
      // solid bar (concept shows a curated handful per lane).
      let picks = done;
      if (done.length > 7) {
        picks = Array.from({ length: 7 }, (_, i) =>
          done[Math.round((i * (done.length - 1)) / 6)],
        );
      }
      const dots = picks.map((m) => ({
        left: pos(m.ageRangeStartMonths),
        future: false,
      }));
      const next = inDom
        .filter((m) => m.status !== 'achieved')
        .sort(
          (a, b) =>
            (a.ageRangeStartMonths ?? 0) - (b.ageRangeStartMonths ?? 0),
        )[0];
      if (next)
        dots.push({ left: pos(next.ageRangeStartMonths), future: true });
      return { ...ln, dots };
    });
    const fmt = (mm) => {
      if (mm <= 0) return 'birth';
      if (mm < 24) return `${mm} mo`;
      if (mm % 12 === 0) return `${mm / 12} yr`;
      return `${(mm / 12).toFixed(1).replace(/\.0$/, '')} yr`;
    };
    const axis = Array.from({ length: 7 }, (_, i) =>
      fmt(Math.round((i * axisMax) / 6)),
    );
    const nowFrac = Math.min(1, Math.max(0, ageM / axisMax));
    return { lanes, axis, ageM, nowFrac };
  }

  render() {
    const child = this.child;
    if (!child) {
      return html`<div class="panel empty">No child selected yet.</div>`;
    }
    const ms = this.milestones ?? [];
    const achievedAll = ms.filter((m) => m.status === 'achieved');
    const overallPct = ms.length
      ? Math.round((achievedAll.length / ms.length) * 100)
      : 0;
    const recently = achievedAll
      .slice()
      .sort(
        (a, b) => (b.ageRangeStartMonths ?? 0) - (a.ageRangeStartMonths ?? 0),
      )
      .slice(0, 4);
    const comingUp = ms
      .filter((m) => m.status !== 'achieved')
      .slice(0, 5);
    const theme = child.themeColorHex || 'var(--teal-pebble)';
    const insights = this.insights ?? [];
    const tl = this._timelineModel();
    const statusClass = (s) =>
      s === 'achieved' ? 'done' : s === 'emerging' ? 'emerging' : 'up';
    const statusLabel = (s) =>
      s === 'achieved' ? 'Achieved' : s === 'emerging' ? 'Emerging' : 'Upcoming';

    return html`
      ${(this.children ?? []).length > 1
        ? html`<div class="switcher">
            ${this.children.map(
              (k) => html`<button
                class=${k.id === child.id ? 'on' : ''}
                @click=${() =>
                  this.dispatchEvent(
                    new CustomEvent('select-child', {
                      detail: k.id,
                      bubbles: true,
                      composed: true,
                    }),
                  )}
              >
                <member-chip
                  .name=${k.name}
                  .photo=${k.profilePhotoURL ?? ''}
                  .hue=${150}
                  size="22"
                ></member-chip>
                ${k.name}
              </button>`,
            )}
          </div>`
        : ''}

      <section>
        <div class="panel">
          <div class="child-card" style="--theme:${theme};">
            <span class="ring">
              <member-chip
                .name=${child.name}
                .photo=${child.profilePhotoURL ?? ''}
                .hue=${150}
                size="84"
              ></member-chip>
            </span>
            <div class="meta">
              <h2>${child.name}</h2>
              <div class="sub">${ageLabel(child.dateOfBirth)}</div>
              <span class="agepill"
                >${achievedAll.length} of ${ms.length} milestones
                achieved</span
              >
            </div>
            <div class="progress">
              <div class="big">${overallPct}%</div>
              <div class="lbl">of tracked milestones</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2>Milestone areas</h2>
          <p class="note">From ${child.name}'s PebblePath path</p>
        </div>
        <div class="domains">
          ${DOMAINS.map((d) => {
            const s = this._domainStats(d.key);
            return html`<div
              class="dtile"
              style="--c:${d.color};--tint:${d.color}26;"
            >
              <div class="dico">${d.svg}</div>
              <div class="dname">${d.label}</div>
              <div class="dcount">${s.achieved} of ${s.total} achieved</div>
              <div class="bar"><i style="width:${s.pct}%"></i></div>
            </div>`;
          })}
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2>The longer view</h2>
          <p class="note">
            Every dot is a logged milestone · the longer you use
            PebblePath, the richer this gets
          </p>
        </div>
        <div class="panel">
          <div class="timeline">
            <div
              class="tl-now"
              style="left:calc(var(--tl-pad, 118px) + (100% - var(--tl-pad, 118px)) * ${tl.nowFrac});"
            >
              <span
                >now · ${Math.floor(tl.ageM / 12)}y ${tl.ageM % 12}m</span
              >
            </div>
            ${tl.lanes.map(
              (ln) => html`<div class="tl-lane ${ln.cls}">
                <div class="tl-name">${ln.name}</div>
                <div class="tl-track">
                  ${ln.dots.map(
                    (dt) => html`<i
                      class=${dt.future ? 'future' : ''}
                      style="left:${dt.left}%"
                    ></i>`,
                  )}
                </div>
              </div>`,
            )}
            <div class="tl-axis">
              ${tl.axis.map((a) => html`<span>${a}</span>`)}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="two-col">
          <div>
            <div class="section-head"><h2>Coming up</h2></div>
            <div class="panel">
              ${comingUp.length === 0
                ? html`<div class="empty">
                    Nothing flagged as next right now — ${child.name} is on
                    track across the board.
                  </div>`
                : comingUp.map((m) => {
                    const c =
                      DOMAINS.find((d) => d.key === normCat(m.category))
                        ?.color ?? '#6b9ac4';
                    return html`<div class="ms-row">
                      <span class="ms-dot" style="background:${c}"></span>
                      <div class="t">
                        ${m.title}
                        <small
                          >${DOMAINS.find(
                            (d) => d.key === normCat(m.category),
                          )?.label ?? ''}
                          · ${m.ageRangeStartMonths}–${m.ageRangeEndMonths}
                          months</small
                        >
                      </div>
                      <span class="ms-stat ${statusClass(m.status)}"
                        >${statusLabel(m.status)}</span
                      >
                    </div>`;
                  })}
            </div>
            <div class="section-head" style="margin-top:18px;">
              <h2>Recently achieved</h2>
            </div>
            <div class="panel">
              ${recently.length === 0
                ? html`<div class="empty">
                    No milestones logged as achieved yet.
                  </div>`
                : recently.map((m) => {
                    const c =
                      DOMAINS.find((d) => d.key === normCat(m.category))
                        ?.color ?? '#6b9ac4';
                    return html`<div class="ms-row">
                      <span class="ms-dot" style="background:${c}"></span>
                      <div class="t">${m.title}</div>
                      <span class="ms-stat done">Achieved</span>
                    </div>`;
                  })}
            </div>
          </div>

          <div>
            <div class="section-head"><h2>Growth insights</h2></div>
            ${insights.length === 0
              ? html`<div class="panel empty">
                  Pebble is still learning about ${child.name} — insights
                  appear as more milestones are logged in the app.
                </div>`
              : html`<div class="insight-stack">
                  ${insights.map(
                    (i) => html`<insight-card
                      .type=${i.type}
                      .domain=${i.domain}
                      .title=${i.title}
                      .body=${i.body}
                    ></insight-card>`,
                  )}
                </div>`}
          </div>
        </div>
      </section>

      <section>
        ${this.readonly
          ? html`<div class="vis-note">
              You're seeing ${child.name}'s milestones &amp; growth
              insights <b>read-only</b>, shared by the parents. Pebble,
              the pediatrician summary and any editing stay with the
              parents — a parent can revoke this access any time.
            </div>`
          : html`<div class="panel">
                <div class="cta-card">
                  <div class="cic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3v5h5"/><path d="M14 3H6v18h12V8z"/><path d="M9 13h6M9 17h6"/></svg>
                  </div>
                  <div class="ctx">
                    <h4>Pediatrician summary</h4>
                    <p>
                      A clinician-ready summary of ${child.name}'s
                      milestone history, written by Pebble. Bring it to
                      your next check-up.
                    </p>
                  </div>
                  <button
                    class="btn-primary"
                    @click=${() =>
                      this.dispatchEvent(
                        new CustomEvent('ask-pebble', {
                          detail: `Write a clinician-ready summary of ${child.name}'s developmental milestone history I can bring to our next pediatrician visit — strengths, anything to watch, and current progress by domain.`,
                          bubbles: true,
                          composed: true,
                        }),
                      )}
                  >
                    Generate summary
                  </button>
                </div>
              </div>
              <div class="vis-note">
                Visibility model — this whole tab reads from the app's
                child data and is gated to
                <b>parents (PP household members)</b>. Grandparents and
                the wider Cairn ring never see milestone or health
                content; they only see what's on the Activities &amp;
                My Cairn tabs.
              </div>`}
      </section>
    `;
  }
}

customElements.define('child-overview', ChildOverview);
