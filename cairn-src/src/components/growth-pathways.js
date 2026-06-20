import { LitElement, html, css, svg } from 'lit';

/**
 * Growth Pathways — the web mirror of the iOS feature (2026-06-14).
 * A "growth shape" radar of the six developmental pathways alongside the
 * horizontal swim-lane timeline, with a 6-pathway selector above it: pick
 * a pathway and its ribbon weaves across the four areas over time.
 *
 * Read-only on web (milestone dots are context, not clickable). Mirrors
 * the iOS arc model (MilestoneArc) — keep the arc→label/color map in
 * lockstep with iOS. Visual source of truth: design-sandbox/40.
 *
 * Props:
 *   child       — { name, dateOfBirth:Date, ... }
 *   milestones  — [{ category, status, ageRangeStartMonths, arc, arcOrder }]
 */

// Six arcs, in radar VERTEX order (clockwise from top), mirroring the iOS
// MilestoneArc.radarOrder + MilestoneArc+UI colors. `key` = the Firestore
// `arc` rawValue. `color` = the pathway's signature hue; `deep` = the
// readable label variant on the light glass.
// `deep` = readable label on the LIGHT glass; `bright` = readable on the
// DARK glass (the Portal defaults to light, but dark must stay legible).
const ARCS = [
  { key: 'attentionToLiteracy',      short: 'Reading',      name: 'From noticing to reading',            color: '#d4a843', deep: '#8a6c2e', bright: '#e8c66b' },
  { key: 'movementToCoordination',   short: 'Movement',     name: 'From first moves to confident motion', color: '#6b9ac4', deep: '#3d5b7d', bright: '#9cc0e8' },
  { key: 'curiosityToReasoning',     short: 'Reasoning',    name: 'From curiosity to reasoning',          color: '#8b7bb5', deep: '#5a4877', bright: '#c4bae0' },
  { key: 'regulationToIndependence', short: 'Independence', name: 'From self-soothing to self-reliance',  color: '#3d9b8f', deep: '#1f5c54', bright: '#7fd8c9' },
  { key: 'connectionToFriendship',   short: 'Friendship',   name: 'From first smiles to friendship',      color: '#c98a8a', deep: '#8e4a42', bright: '#e8bbbb' },
  { key: 'graspToWriting',           short: 'Writing',      name: 'From grasping to writing',             color: '#c67b5c', deep: '#a8624a', bright: '#e0a488' },
];

// Selector-tile glyphs (ported from design-sandbox/40 / iOS selectorIcon).
const ARC_GLYPH = {
  attentionToLiteracy:      svg`<path d="M4 5.5C4 5 9 4 11 6.5v12C9 17 4 18 4 18.5ZM18 5.5C18 5 13 4 11 6.5v12c2-1.5 7-.5 7 0Z"/>`,
  movementToCoordination:   svg`<circle cx="14" cy="5" r="2"/><path d="M13 9l-2.5 4 2.5 2.5.5 4.5M10.5 13L7 12M14 11l3 1.5 1 3.5"/>`,
  curiosityToReasoning:     svg`<path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10.5c-.7.7-1 1.2-1 2.5H9c0-1.3-.3-1.8-1-2.5A6 6 0 0 1 12 3Z"/>`,
  regulationToIndependence: svg`<path d="M12 21v-8M12 13c-3.5 0-5-2.5-5-5.5 3.5 0 5 2.5 5 5.5ZM12 13c3.5 0 5-2.5 5-5.5-3.5 0-5 2.5-5 5.5Z"/>`,
  connectionToFriendship:   svg`<circle cx="8" cy="8" r="2.4"/><circle cx="16" cy="8.5" r="2.2"/><path d="M3.5 18.5a4.5 4.5 0 0 1 9 0M12.5 17.5a3.8 3.8 0 0 1 7.5 0"/>`,
  graspToWriting:           svg`<path d="M5 19l-1 1 1-4L15 6l3 3L8 19l-3 1ZM14 7l3 3"/>`,
};

// Four CDC lanes (the swim-lane rows), in order. Colors mirror the iOS
// milestone-domain tokens (and the Portal DOMAINS const).
const LANES = [
  { key: 'motor',           name: 'Motor',       color: '#6b9ac4', deep: '#3d5b7d', bright: '#9cc0e8' },
  { key: 'language',        name: 'Language',    color: '#d4a843', deep: '#8a6c2e', bright: '#e8c66b' },
  { key: 'socialEmotional', name: 'Social-Emo.', color: '#c98a8a', deep: '#8e4a42', bright: '#e8bbbb' },
  { key: 'cognitive',       name: 'Cognitive',   color: '#8b7bb5', deep: '#5a4877', bright: '#c4bae0' },
];

const normCat = (c) => (c === 'selfCare' ? 'motor' : c);

// Timeline geometry (SVG user space, horizontal).
const X0 = 104, X1 = 730, LANE_Y = [60, 118, 176, 234];

export class GrowthPathways extends LitElement {
  static properties = {
    child: { type: Object },
    milestones: { type: Array },
    _selected: { state: true },
  };

  constructor() {
    super();
    this.child = null;
    this.milestones = [];
    this._selected = 'attentionToLiteracy';
  }

  connectedCallback() {
    super.connectedCallback();
    // Re-render when the Portal theme flips (label colors are theme-aware).
    this._themeObs = new MutationObserver(() => this.requestUpdate());
    this._themeObs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  disconnectedCallback() {
    this._themeObs?.disconnect();
    super.disconnectedCallback();
  }

  // ── data ──────────────────────────────────────────────────────────
  _ageMonths() {
    const dob = this.child?.dateOfBirth;
    if (!dob || Number.isNaN(dob.getTime?.() ?? NaN)) return 0;
    const now = new Date();
    let m =
      (now.getFullYear() - dob.getFullYear()) * 12 +
      (now.getMonth() - dob.getMonth());
    if (now.getDate() < dob.getDate()) m -= 1;
    return Math.max(0, m);
  }

  _arcProgress(key) {
    const items = (this.milestones ?? []).filter((m) => m.arc === key);
    const done = items.filter((m) => m.status === 'achieved').length;
    return { done, total: items.length, fraction: items.length ? done / items.length : 0 };
  }

  _hasArcData() {
    return (this.milestones ?? []).some((m) => m.arc);
  }

  // Portal defaults to light (html.theme-light); fall through = dark.
  _isDark() {
    return !document.documentElement.classList.contains('theme-light');
  }

  // Readable label color for the current theme.
  _lbl(item) {
    return this._isDark() ? item.bright : item.deep;
  }

  /** Radar vertices — RELATIVE growth (the strongest pathway near the rim,
   *  others scaled to it, with a floor so the shape is always visible).
   *  Not absolute completion. Mirrors the iOS GrowthPathwaysRadar. */
  _radar() {
    const raw = ARCS.map((a) => this._arcProgress(a.key).fraction);
    const maxF = Math.max(0, ...raw);
    const floor = 0.32, peak = 0.92;
    const disp = maxF > 0 ? raw.map((f) => floor + (peak - floor) * (f / maxF)) : raw.map(() => floor);
    const cx = 140, cy = 130, R = 85;
    const lbl = [
      [140, 33, 'middle'], [221, 86, 'start'], [221, 178, 'start'],
      [140, 236, 'middle'], [59, 178, 'end'], [59, 86, 'end'],
    ];
    const verts = ARCS.map((a, i) => {
      const ang = ((-90 + 60 * i) * Math.PI) / 180;
      const r = R * disp[i];
      return {
        key: a.key, color: a.color, deep: a.deep, bright: a.bright, short: a.short,
        x: cx + r * Math.cos(ang), y: cy + r * Math.sin(ang),
        gx: cx + R * Math.cos(ang), gy: cy + R * Math.sin(ang),
        ix: cx + R * 0.5 * Math.cos(ang), iy: cy + R * 0.5 * Math.sin(ang),
        lx: lbl[i][0], ly: lbl[i][1], anchor: lbl[i][2],
      };
    });
    const ring = verts.find((v) => v.key === this._selected) ?? verts[0];
    return { verts, ring, cx, cy };
  }

  /** Horizontal swim-lane model + the selected pathway's woven ribbon. */
  _timeline() {
    const ms = this.milestones ?? [];
    const ageM = this._ageMonths();
    const latestEnd = ms.reduce(
      (mx, m) => (m.status === 'achieved'
        ? Math.max(mx, m.ageRangeEndMonths ?? m.ageRangeStartMonths ?? 0) : mx), 0);
    let axisMax = Math.max(latestEnd + 12, ageM + 6, 18);
    axisMax = Math.ceil(axisMax / 6) * 6;
    const ageX = (mm) => X0 + (Math.min(mm ?? 0, axisMax) / axisMax) * (X1 - X0);
    const laneIdx = (c) => LANES.findIndex((l) => l.key === normCat(c));

    const lanes = LANES.map((ln, li) => {
      const inDom = ms.filter((m) => normCat(m.category) === ln.key);
      const done = inDom
        .filter((m) => m.status === 'achieved')
        .sort((a, b) => (a.ageRangeStartMonths ?? 0) - (b.ageRangeStartMonths ?? 0));
      let picks = done;
      if (done.length > 7) {
        picks = Array.from({ length: 7 }, (_, i) => done[Math.round((i * (done.length - 1)) / 6)]);
      }
      const dots = picks.map((m) => ({ x: ageX(m.ageRangeStartMonths ?? 0), achieved: true }));
      const next = inDom
        .filter((m) => m.status !== 'achieved')
        .sort((a, b) => (a.ageRangeStartMonths ?? 0) - (b.ageRangeStartMonths ?? 0))[0];
      if (next) dots.push({ x: ageX(next.ageRangeStartMonths ?? 0), achieved: false });
      return { ...ln, y: LANE_Y[li], dots };
    });

    // Selected pathway → ribbon nodes. The Portal keeps the FULL birth->now
    // history (unlike iOS, which windows to +/-2yr) per Thomas (2026-06-20),
    // so it declutters via thinning instead of a window. Three passes tame a
    // dense catalog (e.g. a Reading arc that alternates Language<->Cognitive
    // on nearly every milestone) into a clean woven line:
    //   1. per-lane age-gap thin    — collapse same-lane clusters (iOS minDotGap),
    //   2. key-node reduction       — keep endpoints + lane-transition nodes,
    //   3. global min-gap spacing   — no two nodes closer than NODE_GAP px, so
    //                                 rapid cross-lane weaves stop spaghettiing.
    // The px gaps are axis-relative (ageX maps months -> px over a fixed
    // width), so denser/older timelines thin proportionally more.
    const LANE_GAP = 22; // px between consecutive same-lane nodes
    const NODE_GAP = 48; // px between consecutive ribbon nodes (any lane)

    const arcAll = ms
      .filter((m) => m.arc === this._selected && (m.ageRangeStartMonths ?? 0) <= axisMax)
      .sort((a, b) => (a.ageRangeStartMonths ?? 0) - (b.ageRangeStartMonths ?? 0));

    // 1. per-lane thin
    const laneLastX = {};
    const arcMs = arcAll.filter((m) => {
      const lane = normCat(m.category);
      const x = ageX(m.ageRangeStartMonths ?? 0);
      if (laneLastX[lane] === undefined || x - laneLastX[lane] >= LANE_GAP) {
        laneLastX[lane] = x;
        return true;
      }
      return false;
    });

    // 2. key-node reduction (endpoints + lane transitions)
    let kept = arcMs;
    if (arcMs.length > 2) {
      kept = arcMs.filter((m, i) => {
        const end = i === 0 || i === arcMs.length - 1;
        const cb = i > 0 && normCat(arcMs[i - 1].category) !== normCat(m.category);
        const ca = i < arcMs.length - 1 && normCat(arcMs[i + 1].category) !== normCat(m.category);
        return end || cb || ca;
      });
    }

    // 3. global min-gap spacing — drop nodes that crowd the previous kept one,
    //    but always honor the first AND last node so the ribbon still spans
    //    the arc's full reached range.
    let spaced = kept;
    if (kept.length > 2) {
      spaced = [];
      let lastX = -Infinity;
      kept.forEach((m, i) => {
        const x = ageX(m.ageRangeStartMonths ?? 0);
        const isLast = i === kept.length - 1;
        if (spaced.length === 0 || x - lastX >= NODE_GAP) {
          spaced.push(m);
          lastX = x;
        } else if (isLast) {
          spaced[spaced.length - 1] = m; // keep the final endpoint
          lastX = x;
        }
      });
    }

    const ribbon = spaced.map((m) => ({ x: ageX(m.ageRangeStartMonths ?? 0), y: LANE_Y[laneIdx(m.category)] }));
    const catColor = (c) => LANES.find((l) => l.key === normCat(c))?.color ?? '#6b9ac4';

    const fmt = (mm) => (mm <= 0 ? 'birth'
      : mm < 24 ? `${mm} mo`
      : mm % 12 === 0 ? `${mm / 12} yr`
      : `${(mm / 12).toFixed(1)} yr`);
    const axis = Array.from({ length: 7 }, (_, i) => {
      const mm = Math.round((i * axisMax) / 6);
      return { x: ageX(mm), label: fmt(mm) };
    });

    return {
      lanes, ribbon, axis,
      todayX: ageX(Math.min(ageM, axisMax)),
      gradFrom: spaced.length ? catColor(spaced[0].category) : '#6b9ac4',
      gradTo: spaced.length ? catColor(spaced[spaced.length - 1].category) : '#6b9ac4',
    };
  }

  /** Smooth Catmull-Rom through the ribbon nodes; x monotonic (age), y
   *  weaves between lanes. Control-y clamped to each segment span so the
   *  ribbon never overshoots a lane. */
  _ribbonPath(pts) {
    if (pts.length < 2) return '';
    if (pts.length === 2) return `M${pts[0].x},${pts[0].y} L${pts[1].x},${pts[1].y}`;
    let d = `M${pts[0].x},${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] ?? pts[0], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] ?? pts[i + 1];
      let c1y = p1.y + (p2.y - p0.y) / 6;
      let c2y = p2.y - (p3.y - p1.y) / 6;
      const lo = Math.min(p1.y, p2.y), hi = Math.max(p1.y, p2.y);
      c1y = Math.max(lo, Math.min(hi, c1y));
      c2y = Math.max(lo, Math.min(hi, c2y));
      d += ` C${p1.x + (p2.x - p0.x) / 6},${c1y} ${p2.x - (p3.x - p1.x) / 6},${c2y} ${p2.x},${p2.y}`;
    }
    return d;
  }

  _select(key) {
    this._selected = key;
  }

  // Re-run the ribbon draw animation after each (re)render.
  updated() {
    const path = this.renderRoot?.querySelector('#gpRibbon');
    const halo = this.renderRoot?.querySelector('#gpHalo');
    if (!path || !path.getTotalLength) return;
    const L = path.getTotalLength();
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    [path, halo].forEach((r) => {
      if (!r) return;
      r.style.transition = 'none';
      r.style.strokeDasharray = L;
      r.style.strokeDashoffset = L;
    });
    void path.getBoundingClientRect();
    const tr = reduce ? 'none' : 'stroke-dashoffset 1.9s cubic-bezier(.45,.05,.25,1)';
    [path, halo].forEach((r) => {
      if (!r) return;
      r.style.transition = tr;
      r.style.strokeDashoffset = 0;
    });
  }

  render() {
    if (!this.child) return html``;
    if (!this._hasArcData()) return this._renderEmpty();

    const arc = ARCS.find((a) => a.key === this._selected) ?? ARCS[0];
    const prog = this._arcProgress(arc.key);
    const r = this._radar();
    const tl = this._timeline();
    const ribD = this._ribbonPath(tl.ribbon);
    const rx1 = tl.ribbon[0]?.x ?? X0;
    const rx2 = tl.ribbon[tl.ribbon.length - 1]?.x ?? X1;

    return html`
      <h2 class="sec">Growth Pathways</h2>
      <div class="gp">
        <div class="card radar">
          <div class="cap">${this.child.name}&rsquo;s growth shape</div>
          <div class="sub">Relative strength across the six pathways</div>
          <div class="radar-wrap">${this._renderRadar(r)}</div>
          <div class="foot">A child&rsquo;s shape is <b>uniquely theirs</b>.</div>
        </div>

        <div class="main">
          <div class="pgrid">
            ${ARCS.map((a) => html`
              <button
                class=${'pchip' + (a.key === this._selected ? ' on' : '')}
                style=${`--ac:${a.color};--at:${a.color}29`}
                @click=${() => this._select(a.key)}
                aria-pressed=${a.key === this._selected}
              >
                <span class="ig">
                  <svg viewBox="0 0 24 24" fill="none" stroke=${a.color}
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ARC_GLYPH[a.key]}</svg>
                </span>
                <span class="pl">${a.short}</span>
              </button>`)}
          </div>

          <div class="sel">
            <span class="sw" style=${`background:${arc.color}`}></span>
            <span class="nm" style=${`color:${this._lbl(arc)}`}>${arc.name}</span>
            <span class="ct"><b>${prog.done}</b> of ${prog.total} reached</span>
          </div>

          <div class="card tlc">
            ${this._renderTimeline(tl, ribD, rx1, rx2)}
            <div class="tlhint">The ribbon is the selected pathway, woven over time.</div>
            <div class="legend">
              <span><span class="d" style="background:#3d9b8f"></span> Reached</span>
              <span><span class="d hollow"></span> Coming up</span>
              <span><span class="bar"></span> Selected pathway</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _renderRadar(r) {
    const gridOuter = r.verts.map((v) => `${v.gx},${v.gy}`).join(' ');
    const gridInner = r.verts.map((v) => `${v.ix},${v.iy}`).join(' ');
    const shape = r.verts.map((v) => `${v.x},${v.y}`).join(' ');
    return html`
      <svg viewBox="0 5 280 250" class="radar-svg" aria-label="Growth pathways radar">
        <polygon points=${gridOuter} fill="none" stroke="#1f5c54" stroke-opacity="0.10" stroke-width="1"></polygon>
        <polygon points=${gridInner} fill="none" stroke="#1f5c54" stroke-opacity="0.09" stroke-width="1"></polygon>
        ${r.verts.map((v) => svg`<line x1=${r.cx} y1=${r.cy} x2=${v.gx} y2=${v.gy} stroke="#1f5c54" stroke-opacity="0.08" stroke-width="1"></line>`)}
        <polygon points=${shape} fill="#3d9b8f" fill-opacity="0.18" stroke="#3d9b8f" stroke-opacity="0.72" stroke-width="2.4" stroke-linejoin="round"></polygon>
        ${r.verts.map((v) => svg`<circle cx=${v.x} cy=${v.y} r="5" fill=${v.color} stroke="#fff" stroke-width="1.8"></circle>`)}
        <circle cx=${r.ring.x} cy=${r.ring.y} r="9" fill="none" stroke="#1f5c54" stroke-width="2"></circle>
        ${r.verts.map((v) => svg`<text x=${v.lx} y=${v.ly} text-anchor=${v.anchor} font-size="11.5" font-weight="600" fill=${this._lbl(v)}>${v.short}</text>`)}
      </svg>
    `;
  }

  _renderTimeline(tl, ribD, rx1, rx2) {
    return html`
      <svg viewBox="0 0 760 300" class="tl-svg" aria-label="Pathway timeline">
        <defs>
          <linearGradient id="gpRibGrad" gradientUnits="userSpaceOnUse" x1=${rx1} y1="0" x2=${rx2} y2="0">
            <stop offset="0" stop-color=${tl.gradFrom}></stop>
            <stop offset="1" stop-color=${tl.gradTo}></stop>
          </linearGradient>
        </defs>

        ${tl.lanes.map((ln) => svg`
          <line x1=${X0} y1=${ln.y} x2=${X1} y2=${ln.y} stroke=${ln.color} stroke-opacity="0.18" stroke-width="2.5" stroke-linecap="round"></line>
          <text x=${X0 - 12} y=${ln.y + 4} text-anchor="end" font-size="11" font-weight="600" fill=${this._lbl(ln)}>${ln.name}</text>
        `)}

        ${tl.axis.map((a) => svg`
          <line x1=${a.x} y1="42" x2=${a.x} y2="252" stroke="#1f5c54" stroke-opacity="0.06" stroke-width="1"></line>
          <text x=${a.x} y="272" text-anchor="middle" font-size="10.5" font-weight="600" fill="currentColor" class="ax">${a.label}</text>
        `)}

        <line x1=${tl.todayX} y1="30" x2=${tl.todayX} y2="258" stroke="#3a9b6f" stroke-width="1.5" stroke-dasharray="4 3"></line>
        <rect x=${tl.todayX - 22} y="18" width="44" height="18" rx="9" fill="#3a9b6f"></rect>
        <text x=${tl.todayX} y="31" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">Today</text>

        <path id="gpHalo" d=${ribD} fill="none" stroke="#5cbfb0" stroke-opacity="0.22" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"></path>
        <path id="gpRibbon" d=${ribD} fill="none" stroke="url(#gpRibGrad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>

        ${tl.lanes.map((ln) => ln.dots.map((dt) => (dt.achieved
          ? svg`<circle cx=${dt.x} cy=${ln.y} r="6" fill=${ln.color} stroke="#fff" stroke-width="1.8"></circle>`
          : svg`<circle cx=${dt.x} cy=${ln.y} r="6" fill="#fff" stroke=${ln.color} stroke-width="2" stroke-dasharray="2.4 2"></circle>`)))}

        ${tl.ribbon.map((n) => svg`
          <circle cx=${n.x} cy=${n.y} r="9.5" fill="none" stroke="#fff" stroke-width="2.6"></circle>
          <circle cx=${n.x} cy=${n.y} r="6" fill="#3d9b8f" stroke="#fff" stroke-width="1.8"></circle>
        `)}
      </svg>
    `;
  }

  _renderEmpty() {
    return html`
      <h2 class="sec">Growth Pathways</h2>
      <div class="card empty">
        <div class="eh">Pathways need milestone data</div>
        <div class="eb">Once ${this.child?.name ?? 'this child'}&rsquo;s milestones are synced, their growth shape and woven timeline appear here.</div>
      </div>
    `;
  }

  static styles = css`
    *, *::before, *::after { box-sizing: border-box; }
    :host { display: block; margin-bottom: 30px; }

    .sec {
      font-family: var(--font-display);
      font-size: 18px; font-weight: 600; letter-spacing: -0.01em;
      color: var(--text-primary); margin: 0 2px 14px;
    }

    .gp { display: grid; grid-template-columns: 360px 1fr; gap: 22px; align-items: stretch; }
    @media (max-width: 880px) { .gp { grid-template-columns: 1fr; } }

    .card {
      border-radius: var(--radius-card);
      background: var(--glass-fill-strong);
      backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      border: 1px solid var(--glass-border-strong);
      box-shadow: var(--glass-shadow);
    }

    /* radar — vertically centered + filling the available card height */
    .radar { padding: 16px 14px 12px; display: flex; flex-direction: column; }
    .radar .cap { text-align: center; font-family: var(--font-display); font-weight: 700; font-size: 13px; color: var(--text-primary); }
    .radar .sub { text-align: center; font-size: 11px; color: var(--text-tertiary); margin-top: 4px; margin-bottom: 4px; }
    .radar-wrap { flex: 1; min-height: 0; display: flex; align-items: center; justify-content: center; padding: 4px 0; }
    .radar-svg { width: 100%; height: 100%; display: block; }
    .radar .foot { text-align: center; font-size: 11px; color: var(--text-secondary); padding: 10px 12px 2px; line-height: 1.45; }
    .radar .foot b { color: var(--text-primary); font-weight: 700; }

    /* main column */
    .main { display: flex; flex-direction: column; gap: 14px; }

    /* selector */
    .pgrid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 9px; }
    @media (max-width: 620px) { .pgrid { grid-template-columns: repeat(3, 1fr); } }
    .pchip {
      display: flex; flex-direction: column; align-items: center; gap: 7px;
      padding: 11px 6px 9px; border-radius: 15px;
      border: 1px solid var(--glass-border); background: var(--glass-fill);
      cursor: pointer; transition: transform .14s, box-shadow .18s, background .18s, border-color .18s;
      font-family: inherit;
    }
    .pchip:hover { transform: translateY(-2px); box-shadow: var(--glass-shadow); }
    .pchip .ig { width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center; background: var(--at); transition: background .18s; }
    .pchip .ig svg { width: 19px; height: 19px; }
    .pchip .pl { font-family: var(--font-display); font-weight: 700; font-size: 11.5px; color: var(--text-secondary); transition: color .18s; }
    .pchip.on { background: var(--ac); border-color: var(--ac); box-shadow: 0 7px 16px color-mix(in srgb, var(--ac) 36%, transparent); }
    .pchip.on .ig { background: rgba(255, 255, 255, 0.24) !important; }
    .pchip.on .ig svg { stroke: #fff !important; }
    .pchip.on .pl { color: #fff; }

    /* selected header */
    .sel { display: flex; align-items: center; gap: 11px; padding: 2px 4px; }
    .sel .sw { width: 26px; height: 11px; border-radius: 6px; flex-shrink: 0; }
    .sel .nm { font-family: var(--font-display); font-weight: 700; font-size: 16px; }
    .sel .ct { margin-left: auto; font-family: var(--font-display); font-weight: 700; font-size: 13px; color: var(--text-secondary); white-space: nowrap; }
    .sel .ct b { color: var(--text-primary); }

    /* timeline */
    .tlc { padding: 14px 16px 10px; }
    .tl-svg { width: 100%; display: block; overflow: visible; color: var(--text-secondary); }
    .tl-svg .ax { fill: currentColor; }
    .tlhint { text-align: center; font-size: 10.5px; color: var(--text-secondary); margin-top: 2px; }
    .legend { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; margin-top: 7px; font-size: 10.5px; color: var(--text-secondary); }
    .legend span { display: inline-flex; align-items: center; gap: 6px; }
    .legend .d { width: 10px; height: 10px; border-radius: 50%; }
    .legend .d.hollow { background: var(--glass-fill-strong); border: 1.5px dashed #8b7bb5; }
    .legend .bar { width: 18px; height: 5px; border-radius: 3px; display: inline-block; background: linear-gradient(90deg, #c98a8a, #8b7bb5); }

    /* empty */
    .empty { padding: 30px 22px; text-align: center; }
    .empty .eh { font-family: var(--font-display); font-weight: 700; font-size: 15px; color: var(--text-primary); margin-bottom: 6px; }
    .empty .eb { font-size: 13px; color: var(--text-secondary); max-width: 460px; margin: 0 auto; line-height: 1.5; }
  `;
}

customElements.define('growth-pathways', GrowthPathways);
