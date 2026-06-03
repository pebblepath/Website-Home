import { LitElement, html, css } from 'lit';
import { dataStore, parseLocalDate } from '../services/data.js';
import './pebble-icon.js';

// Close-the-loop Slice 7 (2026-05-28) — weekend planner, the Portal
// port of the iOS FamilyPlanGeneratorView (Phase 2.5). Opened from the
// Activities tab. Builds the family + weekend-window payload from
// dataStore state, calls the deployed generateFamilyPlan CF, renders a
// Recommended card + alternatives, and accepts a plan into the family
// calendar as a FamilyEvent tagged source:"pebble-weekend-plan" (the
// same write the brief reads as the [LEAD PLAN] of tomorrow's brief).
//
// Candidates persist to localStorage keyed by the weekend window, so
// reopening the planner restores the last generation (auto-discarded
// once the weekend rolls over, since the key changes).

// Staged loading captions (mirror iOS FamilyPlanGeneratorView). Cycle ~2s
// each while the CF round-trip completes, holding on the last.
const PLAN_LOADING_CAPTIONS = [
  'Checking the weekend weather…',
  'Finding nearby spots…',
  'Scoring ideas for your family…',
  'Building your plan…',
];

export class WeekendPlanner extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    _state: { state: true }, // 'empty' | 'loading' | 'loaded' | 'error'
    _loadingStep: { state: true }, // staged-caption index while loading
    _candidates: { state: true },
    _rec: { state: true }, // index of the recommended candidate
    _error: { state: true },
    _accepted: { state: true }, // index just accepted (for the toast)
  };

  constructor() {
    super();
    this.open = false;
    this._state = 'empty';
    this._loadingStep = 0;
    this._candidates = [];
    this._rec = 0;
    this._error = '';
    this._accepted = null;
    this._captionTimer = null;
  }

  willUpdate(changed) {
    if (changed.has('open') && this.open) {
      this._restoreCache();
    }
  }

  // Drive the staged-caption cycle off the reactive _state, so it starts/stops
  // correctly on every transition (incl. reopening mid-flight).
  updated(changed) {
    if (changed.has('_state')) {
      if (this._state === 'loading') this._startLoadingCaptions();
      else this._stopLoadingCaptions();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopLoadingCaptions();
  }

  _startLoadingCaptions() {
    this._stopLoadingCaptions();
    this._loadingStep = 0;
    this._captionTimer = setInterval(() => {
      if (this._loadingStep >= PLAN_LOADING_CAPTIONS.length - 1) {
        this._stopLoadingCaptions(); // hold on the last caption
        return;
      }
      this._loadingStep += 1;
    }, 2000);
  }

  _stopLoadingCaptions() {
    if (this._captionTimer) {
      clearInterval(this._captionTimer);
      this._captionTimer = null;
    }
  }

  // ── Weekend window math (mirrors iOS upcomingWeekendWindow) ───────
  _window() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const day = today.getDay(); // Sun=0 … Sat=6
    const toSat = day === 6 ? 0 : day === 0 ? -1 : 6 - day;
    const sat = new Date(today.getTime() + toSat * 86400000);
    const sun = new Date(sat.getTime() + 86400000);
    const iso = (d) =>
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    return { sat, sun, satKey: iso(sat), sunKey: iso(sun) };
  }

  _weekendLabel() {
    const { sat, sun } = this._window();
    const f = (d) => d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
    return `${f(sat)} – ${f(sun)}`;
  }

  _cacheKey() {
    return `pp_weekend_plan_${this._window().satKey}`;
  }

  _restoreCache() {
    if (this._state === 'loaded' && this._candidates.length) return;
    try {
      const raw = localStorage.getItem(this._cacheKey());
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed?.candidates) && parsed.candidates.length) {
        this._candidates = parsed.candidates;
        this._rec = Number.isInteger(parsed.rec) ? parsed.rec : 0;
        this._state = 'loaded';
      }
    } catch {
      /* ignore corrupt cache */
    }
  }

  _saveCache() {
    try {
      localStorage.setItem(
        this._cacheKey(),
        JSON.stringify({ candidates: this._candidates, rec: this._rec }),
      );
    } catch {
      /* storage full / blocked — non-fatal */
    }
  }

  // ── Payload assembly (mirrors iOS buildFamilyPlanPayload) ─────────
  _familyPayload() {
    const s = dataStore.state;
    const profiles = s.ppFamily?.memberProfiles ?? {};
    const parents = Object.values(profiles).map((p) => p?.displayName).filter(Boolean);
    const anchors = Array.isArray(s.pebbleAnchors) ? s.pebbleAnchors : [];
    const rhythms = Array.isArray(s.pebbleRhythms) ? s.pebbleRhythms : [];
    const ageMonths = (dob) => {
      const t = dob?.getTime?.() ?? (dob ? new Date(dob).getTime() : 0);
      if (!t) return 0;
      return Math.max(0, Math.floor((Date.now() - t) / (30.44 * 24 * 3600 * 1000)));
    };
    const children = (Array.isArray(s.ppChildren) ? s.ppChildren : []).map((c) => ({
      childId: c.id,
      name: c.name,
      ageMonths: ageMonths(c.dateOfBirth),
      anchors: anchors
        .filter((a) => a.scope === 'child' && a.childId === c.id)
        .map((a) => (a.value ? `${a.label}: ${a.value}` : a.label)),
      rhythms: rhythms
        .filter((r) => r.scope === 'child' && r.childId === c.id)
        .map((r) => (r.timeOfDay ? `${r.title} (${r.timeOfDay})` : r.title)),
      recentObservations: [],
    }));
    const familyAnchors = anchors
      .filter((a) => a.scope === 'family')
      .map((a) => (a.value ? `${a.label}: ${a.value}` : a.label));
    const home = s.ppFamily?.homeLocation;
    const homeLocation = home
      ? [home.city, home.region, home.country].filter((x) => x && String(x).trim()).join(', ')
      : undefined;
    const payload = { parents, children, familyAnchors };
    if (homeLocation) payload.homeLocation = homeLocation;
    return payload;
  }

  _windowPayload() {
    const s = dataStore.state;
    const { sat, sun, satKey, sunKey } = this._window();
    const weather = (Array.isArray(s.pebbleLiveContext) ? s.pebbleLiveContext : []).find(
      (i) => i.kind === 'weatherSnapshot',
    );
    // U7/U8 — "already on the weekend" = celebration events PLUS standalone
    // /activities (plan/activity items migrated there). Without the
    // activities term the planner would re-suggest things already scheduled.
    const occupiedEvents = [
      ...(Array.isArray(s.events) ? s.events : [])
        .filter((e) => e.date === satKey || e.date === sunKey)
        .map((e) => e.title),
      ...(Array.isArray(s.activities) ? s.activities : [])
        .filter((a) => !a.tripId && (a.day === satKey || a.day === sunKey))
        .map((a) => a.title),
    ].filter(Boolean);
    const now = new Date();
    const cutoff = new Date(now.getTime() + 14 * 86400000);
    const upcomingTripTitles = (Array.isArray(s.trips) ? s.trips : [])
      .filter((t) => {
        const start = parseLocalDate(t.start);
        return start && start >= now && start <= cutoff;
      })
      .slice(0, 5)
      .map((t) => t.title);
    const w = {
      weekendStart: satKey,
      weekendEnd: sunKey,
      occupiedEvents,
      upcomingTripTitles,
      recentlyDone: [],
    };
    if (weather?.title) w.weatherSummary = weather.title;
    return w;
  }

  // ── Generate ─────────────────────────────────────────────────────
  async _generate() {
    if (this._state === 'loading') return;
    this._state = 'loading';
    this._error = '';
    try {
      const candidates = await dataStore.generateFamilyPlan(
        this._familyPayload(),
        this._windowPayload(),
      );
      if (!candidates.length) {
        this._state = 'error';
        this._error = 'Pebble could not find a plan for this weekend. Try again.';
        return;
      }
      this._candidates = candidates;
      this._rec = 0;
      this._state = 'loaded';
      this._saveCache();
    } catch (e) {
      this._state = 'error';
      this._error = e?.message || 'Pebble could not plan right now. Try again.';
    }
  }

  async _accept(cand, index) {
    if (this.preview) return;
    const fit = Array.isArray(cand.perChildFit) ? cand.perChildFit : [];
    const logistics = Array.isArray(cand.logisticsNotes) ? cand.logisticsNotes : [];
    const noteLines = fit.map((f) => `${f.childName}: ${f.reason}`);
    if (logistics.length) noteLines.push('', ...logistics);
    try {
      // U7 7-A — accepted weekend plans write the unified /activities
      // collection (were plan/activity familyEvents), freezing the legacy
      // source for migration. Standalone, all-day; household audience
      // (no personIds, so the attendee-fold doesn't widen it).
      await dataStore.saveActivity({
        type: 'note',
        title: cand.title,
        day: cand.date,
        notes: noteLines.join('\n'),
        visibility: 'family',
        source: 'pebble-weekend-plan',
      });
      this._accepted = index;
      setTimeout(() => { this._accepted = null; }, 2200);
    } catch (e) {
      this._error = e?.message || 'Could not add this plan.';
    }
  }

  _close() {
    this.dispatchEvent(new Event('cancel'));
  }

  // ── Render ───────────────────────────────────────────────────────
  render() {
    if (!this.open) return html``;
    return html`
      <div class="backdrop" @click=${this._close}></div>
      <div class="panel" role="dialog" aria-label="Weekend planner">
        <div class="head">
          <div class="head-l">
            <pebble-icon size="20"></pebble-icon>
            <div>
              <h3>Weekend planner</h3>
              <div class="wk">${this._weekendLabel()}</div>
            </div>
          </div>
          <button class="x" @click=${this._close} aria-label="Close">×</button>
        </div>
        <div class="body">${this._renderState()}</div>
      </div>
    `;
  }

  _renderState() {
    if (this._state === 'loading') {
      return html`
        <div class="plan-cap">${PLAN_LOADING_CAPTIONS[this._loadingStep]}</div>
        ${this._skeletonRec()}
        <div class="alts-head"><span class="sk" style="width:90px;height:11px"></span></div>
        ${this._skeletonAlt()}
        ${this._skeletonAlt()}
      `;
    }
    if (this._state === 'error') {
      return html`<div class="status">
        <div class="err">${this._error}</div>
        <button class="big-cta" @click=${() => this._generate()}>Try again</button>
      </div>`;
    }
    if (this._state === 'loaded' && this._candidates.length) {
      const rec = this._candidates[this._rec];
      const alts = this._candidates.filter((_, i) => i !== this._rec);
      return html`
        ${this._renderRecommended(rec, this._rec)}
        ${alts.length
          ? html`<div class="alts-head">Other ideas</div>
              ${this._candidates
                .map((c, i) => ({ c, i }))
                .filter(({ i }) => i !== this._rec)
                .map(({ c, i }) => this._renderAlt(c, i))}`
          : ''}
        <button class="regen" @click=${() => this._generate()}>Regenerate ideas</button>
      `;
    }
    // empty
    return html`<div class="status">
      <div class="status-t">Plan our weekend</div>
      <div class="status-s">Pebble suggests 2 to 3 ideas tuned to your family, the weather, and what's already on the calendar.</div>
      <button class="big-cta" @click=${() => this._generate()}>
        <pebble-icon size="16" color="#fff"></pebble-icon> Plan our weekend
      </button>
    </div>`;
  }

  // Skeleton ghosts mirroring the loaded .rec / .alt card shapes.
  _skeletonRec() {
    return html`<div class="rec sk-card">
      <span class="sk" style="width:96px;height:18px;border-radius:999px;margin-bottom:12px"></span>
      <span class="sk" style="width:72%;height:22px;margin-bottom:10px"></span>
      <span class="sk" style="width:94%;height:13px;margin-bottom:6px"></span>
      <span class="sk" style="width:58%;height:13px;margin-bottom:14px"></span>
      <div class="rec-meta">
        <span class="sk" style="width:62px;height:22px;border-radius:999px"></span>
        <span class="sk" style="width:84px;height:22px;border-radius:999px"></span>
        <span class="sk" style="width:54px;height:22px;border-radius:999px"></span>
      </div>
      <div class="fit">
        <div class="fit-row">
          <span class="sk" style="width:40%;height:12px;margin-bottom:5px"></span>
          <span class="sk" style="width:82%;height:11px"></span>
        </div>
        <div class="fit-row">
          <span class="sk" style="width:34%;height:12px;margin-bottom:5px"></span>
          <span class="sk" style="width:70%;height:11px"></span>
        </div>
      </div>
      <span class="sk" style="width:100%;height:44px;border-radius:12px"></span>
    </div>`;
  }

  _skeletonAlt() {
    return html`<div class="alt sk-card">
      <div class="alt-body">
        <span class="sk" style="width:55%;height:14px;margin-bottom:6px"></span>
        <span class="sk" style="width:38%;height:11px"></span>
      </div>
    </div>`;
  }

  _renderRecommended(c, index) {
    if (!c) return '';
    const fit = Array.isArray(c.perChildFit) ? c.perChildFit : [];
    const logistics = Array.isArray(c.logisticsNotes) ? c.logisticsNotes : [];
    const meta = [
      this._timeLabel(c),
      c.location,
      c.costEstimate,
      c.weatherSummary,
    ].filter(Boolean);
    return html`<div class="rec">
      <div class="rec-badge">Recommended</div>
      <h2 class="rec-title">${c.title}</h2>
      ${c.subtitle ? html`<p class="rec-sub">${c.subtitle}</p>` : ''}
      ${meta.length ? html`<div class="rec-meta">${meta.map((m) => html`<span>${m}</span>`)}</div>` : ''}
      ${fit.length
        ? html`<div class="fit">
            ${fit.map(
              (f) => html`<div class="fit-row">
                <span class="fit-name">${f.childName}</span>
                <span class="fit-reason">${f.reason}</span>
              </div>`,
            )}
          </div>`
        : ''}
      ${logistics.length
        ? html`<ul class="logi">${logistics.map((l) => html`<li>${l}</li>`)}</ul>`
        : ''}
      <button class="accept ${this._accepted === index ? 'done' : ''}" @click=${() => this._accept(c, index)}>
        ${this._accepted === index ? '✓ Added to Activities' : 'Add to our calendar'}
      </button>
    </div>`;
  }

  _renderAlt(c, index) {
    return html`<button class="alt" @click=${() => { this._rec = index; this._saveCache(); }}>
      <div class="alt-body">
        <div class="alt-title">${c.title}</div>
        <div class="alt-sub">${this._timeLabel(c)}${c.location ? ` · ${c.location}` : ''}</div>
      </div>
      <span class="alt-go">Make recommended</span>
    </button>`;
  }

  _timeLabel(c) {
    const fmt = (t) => {
      if (!t) return '';
      const [h, m] = String(t).split(':').map(Number);
      if (Number.isNaN(h)) return '';
      const ap = h >= 12 ? 'pm' : 'am';
      const hh = ((h + 11) % 12) + 1;
      return m ? `${hh}:${String(m).padStart(2, '0')}${ap}` : `${hh}${ap}`;
    };
    const a = fmt(c.startTime);
    const b = fmt(c.endTime);
    if (a && b) return `${a}–${b}`;
    return a || 'Anytime';
  }

  static styles = css`
    * { box-sizing: border-box; }
    :host { display: contents; }
    button { font-family: inherit; cursor: pointer; }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(12, 22, 24, 0.5);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      z-index: 90;
    }
    .panel {
      position: fixed;
      z-index: 91;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: min(560px, calc(100vw - 32px));
      max-height: calc(100vh - 64px);
      display: flex;
      flex-direction: column;
      background: var(--panel-solid, #fffcf7);
      border: 1px solid var(--glass-border-strong);
      border-radius: 20px;
      box-shadow: 0 24px 70px rgba(12, 22, 24, 0.4);
      overflow: hidden;
    }
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 20px;
      border-bottom: 1px solid var(--glass-border);
    }
    .head-l { display: flex; align-items: center; gap: 10px; color: var(--ink-teal); }
    .head h3 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 18px;
      color: var(--text-primary);
    }
    .head .wk { font-size: 12.5px; color: var(--text-secondary); margin-top: 1px; }
    .x {
      border: none;
      background: transparent;
      color: var(--text-secondary);
      font-size: 24px;
      line-height: 1;
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
    .x:hover { background: var(--glass-fill); }
    .body { padding: 20px; overflow-y: auto; }
    /* status (empty / loading / error) */
    .status {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;
      padding: 28px 16px;
    }
    .status-t { font-family: var(--font-display); font-size: 19px; color: var(--text-primary); }
    .status-s { font-size: 13.5px; color: var(--text-secondary); max-width: 360px; line-height: 1.5; }
    /* staged loading caption + skeleton ghosts (mirror the loaded cards) */
    .plan-cap {
      text-align: center;
      font-size: 13.5px;
      color: var(--text-secondary);
      min-height: 18px;
      margin-bottom: 16px;
      transition: opacity 0.25s ease;
    }
    .sk {
      display: block;
      border-radius: 6px;
      background: linear-gradient(
        100deg,
        rgba(127, 127, 127, 0.12) 30%,
        rgba(127, 127, 127, 0.22) 50%,
        rgba(127, 127, 127, 0.12) 70%
      );
      background-size: 200% 100%;
      animation: sk-shimmer 1.4s ease-in-out infinite;
    }
    @keyframes sk-shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .sk-card { pointer-events: none; }
    @media (prefers-reduced-motion: reduce) {
      .plan-cap { transition: none; }
      .sk { animation: none; background: rgba(127, 127, 127, 0.16); }
    }
    .big-cta {
      margin-top: 8px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 22px;
      border: none;
      border-radius: 999px;
      background: linear-gradient(135deg, #3d9b8f 0%, #2d7a70 100%);
      color: #fff;
      font-weight: 700;
      font-size: 14px;
    }
    .err { font-size: 13.5px; color: var(--terracotta, #c67b5c); }
    /* recommended card */
    .rec {
      border: 1px solid rgba(61, 155, 143, 0.3);
      border-radius: 16px;
      padding: 18px;
      background: var(--glass-fill-strong);
    }
    .rec-badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #fff;
      background: var(--ink-teal);
      padding: 3px 10px;
      border-radius: 999px;
      margin-bottom: 10px;
    }
    .rec-title {
      margin: 0 0 4px;
      font-family: var(--font-display);
      font-size: 21px;
      line-height: 1.1;
      color: var(--text-primary);
    }
    .rec-sub { margin: 0 0 12px; font-size: 14px; color: var(--text-secondary); line-height: 1.45; }
    .rec-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 14px;
    }
    .rec-meta span {
      font-size: 12px;
      font-weight: 600;
      color: var(--ink-teal);
      background: rgba(61, 155, 143, 0.1);
      padding: 4px 10px;
      border-radius: 999px;
    }
    .fit { display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px; }
    .fit-row {
      display: flex;
      flex-direction: column;
      gap: 1px;
      padding: 8px 12px;
      border-radius: 10px;
      background: var(--glass-fill);
    }
    .fit-name { font-size: 13px; font-weight: 700; color: var(--text-primary); }
    .fit-reason { font-size: 12.5px; color: var(--text-secondary); line-height: 1.4; }
    .logi { margin: 0 0 14px; padding-left: 18px; }
    .logi li { font-size: 12.5px; color: var(--text-secondary); line-height: 1.5; }
    .accept {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 12px;
      background: var(--ink-teal);
      color: #fff;
      font-weight: 700;
      font-size: 14px;
    }
    .accept.done { background: var(--ink-green, #2e8049); }
    /* alternatives */
    .alts-head {
      margin: 18px 0 8px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-tertiary);
    }
    .alt {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      width: 100%;
      text-align: left;
      padding: 13px 14px;
      margin-bottom: 8px;
      border: 1px solid var(--glass-border);
      border-radius: 12px;
      background: var(--glass-fill-strong);
    }
    .alt:hover { border-color: rgba(61, 155, 143, 0.4); }
    .alt-title { font-size: 14px; font-weight: 600; color: var(--text-primary); }
    .alt-sub { font-size: 12px; color: var(--text-secondary); margin-top: 1px; }
    .alt-go { font-size: 12px; font-weight: 600; color: var(--ink-teal); flex-shrink: 0; }
    .regen {
      width: 100%;
      margin-top: 6px;
      padding: 11px;
      border: 1px solid rgba(61, 155, 143, 0.3);
      border-radius: 12px;
      background: transparent;
      color: var(--ink-teal);
      font-weight: 600;
      font-size: 13px;
    }
  `;
}

customElements.define('weekend-planner', WeekendPlanner);
