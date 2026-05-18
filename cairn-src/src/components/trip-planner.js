import { LitElement, html, css } from 'lit';
import './member-chip.js';
import { dataStore } from '../services/data.js';
import { toast } from '../services/toast.js';

/**
 * Collaborative trip day-planner — INLINE + collapsible (concept
 * parity). Lives below the trips row on the Activities tab; a trip
 * card opens it. Google-Calendar day grid + Google-Sheets attribution:
 * anyone in the trip's audience adds items (visit/meal/travel/note),
 * each tagged with who added it. Live via dataStore.planItemsListener;
 * read/write enforced server-side by the trip's visibleTo.
 *
 * Props:
 *   open       — Boolean (collapsed when false)
 *   trip       — { id, title, location, start, end }
 *   members    — [{ uid, displayName, photoURL, hue }]
 *   currentUid — viewer uid (delete-own affordance)
 */
const TYPES = [
  { key: 'visit', label: 'Visit' },
  { key: 'meal', label: 'Meal' },
  { key: 'travel', label: 'Travel' },
  { key: 'note', label: 'Note' },
];

// User-selectable item length (was hardcoded 1h). Minutes.
const DURATIONS = [
  { m: 30, label: '30 min' },
  { m: 60, label: '1 h' },
  { m: 90, label: '1½ h' },
  { m: 120, label: '2 h' },
  { m: 180, label: '3 h' },
  { m: 240, label: '4 h' },
  { m: 480, label: 'All day' },
];
const ROWH = 56; // px per hour — matches concept .sched-row height

function parseYMD(s) {
  const m = String(s ?? '').match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return null;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
}
function ymd(d) {
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const da = String(d.getDate()).padStart(2, '0');
  return `${y}-${mo}-${da}`;
}
function toHours(t) {
  const m = String(t ?? '').match(/^(\d{1,2}):?(\d{2})?/);
  if (!m) return null;
  return Number(m[1]) + (m[2] ? Number(m[2]) / 60 : 0);
}
function fmtH(x) {
  const hh = Math.floor(x);
  const mm = Math.round((x - hh) * 60);
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

export class TripPlanner extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    trip: { type: Object },
    members: { type: Array },
    currentUid: { type: String },
    _items: { state: true },
    _dayKey: { state: true },
    _title: { state: true },
    _time: { state: true },
    _type: { state: true },
    _dur: { state: true },
    _url: { state: true },
    _fileName: { state: true },
    _busy: { state: true },
    _view: { state: true }, // 'day' | 'week' (Google-Calendar week grid)
    _weekStart: { state: true }, // first day index when the trip > 7 days
    _sel: { state: true }, // drag-to-create selection { dayKey, aMin, bMin }
  };

  constructor() {
    super();
    this.open = false;
    this.trip = null;
    this.members = [];
    this.currentUid = '';
    this._items = [];
    this._dayKey = null;
    this._title = '';
    this._time = '12:00';
    this._type = 'visit';
    this._dur = 60; // minutes; user-selectable (was hardcoded 1h)
    this._url = '';
    this._file = null; // pending File for attachment (not reactive)
    this._fileName = ''; // reactive label for the chosen file
    this._busy = false;
    this._view = 'day';
    this._weekStart = 0;
    this._sel = null;
    this._dragCtx = null; // { dayKey, lo, hi, el } captured at pointerdown
    this._onGridMove = this._gridMove.bind(this);
    this._onGridUp = this._gridUp.bind(this);
    this._unsub = null;
    this._subId = null;
  }

  // Days shown as columns in the week grid. Trips are usually short, so
  // ≤ 7 days → show them all; longer trips page in 7-day windows.
  _weekDays() {
    const all = this._days();
    if (all.length <= 7) return all;
    const start = Math.min(
      Math.max(0, this._weekStart),
      Math.max(0, all.length - 7),
    );
    return all.slice(start, start + 7);
  }

  // ── Google-Calendar-style click-&-drag to pick a time slot ───────
  // mousedown on empty grid → drag → release prefills the add-row's
  // time + duration (and focuses the title) instead of creating an
  // empty item. Works in both Day (.sched-track) and Week (.wk-col).
  _minFromPointer(clientY, el, lo, hi) {
    const r = el.getBoundingClientRect();
    const y = Math.max(0, Math.min(clientY - r.top, r.height));
    const raw = lo * 60 + (y / ROWH) * 60;
    const snapped = Math.round(raw / 15) * 15;
    return Math.max(lo * 60, Math.min(hi * 60, snapped));
  }

  _gridDown(e, dayKey, lo, hi) {
    // Ignore drags that begin on an existing event/affordance.
    if (e.button != null && e.button !== 0) return;
    if (e.target.closest && e.target.closest('.evt, .wk-evt, button, a'))
      return;
    const el = e.currentTarget;
    const aMin = this._minFromPointer(e.clientY, el, lo, hi);
    this._dragCtx = { dayKey, lo, hi, el };
    this._sel = { dayKey, aMin, bMin: aMin };
    window.addEventListener('pointermove', this._onGridMove);
    window.addEventListener('pointerup', this._onGridUp);
    e.preventDefault();
  }

  _gridMove(e) {
    if (!this._dragCtx || !this._sel) return;
    const { el, lo, hi } = this._dragCtx;
    this._sel = {
      ...this._sel,
      bMin: this._minFromPointer(e.clientY, el, lo, hi),
    };
  }

  _gridUp() {
    window.removeEventListener('pointermove', this._onGridMove);
    window.removeEventListener('pointerup', this._onGridUp);
    const sel = this._sel;
    const ctx = this._dragCtx;
    this._sel = null;
    this._dragCtx = null;
    if (!sel || !ctx) return;
    let start = Math.min(sel.aMin, sel.bMin);
    let end = Math.max(sel.aMin, sel.bMin);
    // A plain click (no real drag) → keep the current duration choice.
    let dur = end - start;
    if (dur < 15) dur = this._dur && this._dur >= 15 ? this._dur : 60;
    const hh = String(Math.floor(start / 60)).padStart(2, '0');
    const mm = String(start % 60).padStart(2, '0');
    this._dayKey = sel.dayKey;
    this._time = `${hh}:${mm}`;
    this._dur = dur;
    this.updateComplete.then(() => {
      const t = this.renderRoot.querySelector('.add-row input.t');
      if (t) t.focus();
    });
  }

  _selGhost(dayKey, lo) {
    const s = this._sel;
    if (!s || s.dayKey !== dayKey) return '';
    const a = Math.min(s.aMin, s.bMin);
    const b = Math.max(s.aMin, s.bMin);
    const top = ((a - lo * 60) / 60) * ROWH;
    const height = Math.max(3, ((b - a) / 60) * ROWH);
    const lbl = `${String(Math.floor(a / 60)).padStart(2, '0')}:${String(
      a % 60,
    ).padStart(2, '0')}`;
    return html`<div
      class="sel-ghost"
      style="top:${top}px;height:${height}px;"
    >
      <span>${lbl}</span>
    </div>`;
  }

  willUpdate(changed) {
    if (changed.has('open') || changed.has('trip')) {
      const id = this.trip?.id ?? null;
      if (this.open && id) {
        if (this._subId !== id) {
          this._teardown();
          this._subId = id;
          this._dayKey = this._days()[0]?.key ?? '';
          this._unsub = dataStore.planItemsListener(id, (items) => {
            this._items = items;
          });
        }
      } else if (!this.open) {
        this._teardown();
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._teardown();
  }
  _teardown() {
    this._unsub?.();
    this._unsub = null;
    this._subId = null;
    this._items = [];
    window.removeEventListener('pointermove', this._onGridMove);
    window.removeEventListener('pointerup', this._onGridUp);
    this._sel = null;
    this._dragCtx = null;
  }
  _close() {
    this.dispatchEvent(new Event('cancel'));
  }

  _days() {
    const s = parseYMD(this.trip?.start);
    const e = parseYMD(this.trip?.end) ?? s;
    if (!s) return [{ key: '', lbl: 'Day', d: 'The trip' }];
    const out = [];
    const cur = new Date(s);
    let g = 0;
    while (cur <= e && g < 31) {
      out.push({
        key: ymd(cur),
        lbl: cur.toLocaleDateString('en-GB', { weekday: 'short' }),
        d: cur.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
      });
      cur.setDate(cur.getDate() + 1);
      g += 1;
    }
    return out.length ? out : [{ key: '', lbl: 'Day', d: 'The trip' }];
  }

  _member(uid) {
    return (this.members ?? []).find((m) => m.uid === uid) ?? null;
  }

  async _add() {
    const title = this._title.trim();
    if (!title || this._busy) return;
    this._busy = true;
    const file = this._file;
    try {
      const id = await dataStore.addPlanItem(this.trip.id, {
        title,
        type: this._type,
        day: this._dayKey ?? '',
        time: this._time || '',
        durationMins: this._dur,
        url: this._url.trim(),
      });
      // Attachment is uploaded AFTER the item exists (its id is the
      // Storage key). A failed upload doesn't lose the item — the
      // user is told the file didn't attach and can retry.
      if (file && id) {
        try {
          const attachmentURL = await dataStore.uploadPlanAttachment(
            this.trip.id,
            id,
            file,
          );
          await dataStore.updatePlanItem(this.trip.id, id, {
            attachmentURL,
            attachmentName: file.name || 'attachment',
          });
        } catch (upErr) {
          console.error('plan attachment upload failed:', upErr);
          toast(
            upErr?.code === 'storage/unauthorized'
              ? 'Item added — but the attachment needs the Storage rule published.'
              : "Item added — couldn't attach the file, try again.",
            { duration: 5000 },
          );
        }
      }
      this._title = '';
      this._url = '';
      this._file = null;
      this._fileName = '';
      this._dur = 60;
    } catch (err) {
      console.error('addPlanItem failed:', err);
      toast(
        err?.code === 'permission-denied'
          ? "Couldn't add — the planner rule may need publishing."
          : `Couldn't add: ${err?.message ?? 'try again'}`,
        { duration: 5000 },
      );
    } finally {
      this._busy = false;
    }
  }
  async _remove(it) {
    try {
      await dataStore.deletePlanItem(this.trip.id, it.id);
    } catch (err) {
      toast(`Couldn't remove: ${err?.code ?? err?.message}`, { duration: 4000 });
    }
  }

  static styles = css`
    *, *::before, *::after { box-sizing: border-box; }
    :host { display: block; }
    :host(:not([open])) { display: none; }
    section { margin-bottom: 30px; }
    .glass {
      position: relative;
      border-radius: var(--radius-card);
      background: var(--glass-fill-strong);
      backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      border: 1px solid var(--glass-border-strong);
      box-shadow: var(--glass-shadow);
      padding: 28px;
      animation: drop 240ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes drop {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: none; }
    }
    .pl-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 18px;
    }
    .pl-head h3 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 20px;
      letter-spacing: -0.015em;
    }
    .pl-sub {
      color: var(--text-secondary);
      font-size: 13px;
      margin-top: 5px;
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .who-adds { display: inline-flex; align-items: center; }
    .who-adds member-chip { margin-right: -6px; }
    .pl-close {
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      width: 34px;
      height: 34px;
      border-radius: 999px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      flex-shrink: 0;
    }
    .pl-close:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .day-rail {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 4px;
      margin-bottom: 16px;
      scrollbar-width: none;
    }
    .day-rail::-webkit-scrollbar { display: none; }
    .day-pill {
      padding: 9px 15px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      cursor: pointer;
      font-family: var(--font-body);
      font-size: 12.5px;
      font-weight: 600;
      white-space: nowrap;
      text-align: center;
      line-height: 1.3;
    }
    .day-pill small {
      display: block;
      font-weight: 500;
      font-size: 11px;
      color: var(--text-tertiary);
    }
    .day-pill.on {
      background: rgba(61, 155, 143, 0.22);
      color: #fff;
      border-color: rgba(61, 155, 143, 0.45);
    }
    .day-pill.on small { color: #bfe6df; }

    /* Day | Week segmented toggle + optional week pager. */
    .pl-modebar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 14px;
    }
    .view-toggle {
      display: inline-flex;
      padding: 3px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
    }
    .view-toggle button {
      padding: 6px 16px;
      border-radius: var(--radius-pill);
      border: none;
      background: transparent;
      color: var(--text-tertiary);
      font-family: var(--font-body);
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      transition: all 150ms ease;
    }
    .view-toggle button.on {
      background: rgba(61, 155, 143, 0.22);
      color: #fff;
      box-shadow: inset 0 0 0 1px rgba(61, 155, 143, 0.45);
    }
    .wk-pager {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--text-secondary);
      font-size: 12px;
    }
    .wk-pager button {
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 13px;
    }
    .wk-pager button:disabled { opacity: 0.4; cursor: default; }

    /* Google-Calendar-style week grid: shared hour gutter + a column
       per trip day, items absolutely positioned by time/duration. */
    .wk {
      border-radius: var(--radius-tile);
      border: 1px solid var(--glass-border);
      background: rgba(255, 248, 235, 0.03);
      overflow: hidden;
    }
    .wk-head {
      display: grid;
      grid-template-columns: 62px repeat(var(--cols, 1), 1fr);
      border-bottom: 1px solid var(--gridline);
    }
    .wk-head .wk-hc {
      padding: 8px 4px;
      text-align: center;
      font-size: 11.5px;
      font-weight: 600;
      color: var(--text-secondary);
      border-left: 1px solid var(--gridline);
      cursor: pointer;
      line-height: 1.3;
    }
    .wk-head .wk-hc:first-child { border-left: none; cursor: default; }
    .wk-head .wk-hc small {
      display: block;
      font-weight: 500;
      font-size: 10.5px;
      color: var(--text-tertiary);
    }
    .wk-head .wk-hc.on {
      background: rgba(61, 155, 143, 0.18);
      color: #fff;
    }
    .wk-head .wk-hc.on small { color: #bfe6df; }
    .wk-body {
      position: relative;
      display: grid;
      grid-template-columns: 62px repeat(var(--cols, 1), 1fr);
      max-height: 460px;
      overflow-y: auto;
      scrollbar-width: thin;
    }
    .wk-gutter { position: relative; }
    .wk-gutter .wk-hr {
      height: ${ROWH}px;
      font-size: 10.5px;
      color: var(--text-tertiary);
      text-align: right;
      padding: 4px 8px 0;
      border-bottom: 1px solid var(--gridline);
      box-sizing: border-box;
    }
    .wk-col {
      position: relative;
      border-left: 1px solid var(--gridline);
      background-image: repeating-linear-gradient(
        var(--gridline) 0,
        var(--gridline) 1px,
        transparent 1px,
        transparent ${ROWH}px
      );
    }
    .wk-evt {
      position: absolute;
      left: 3px;
      right: 3px;
      border-radius: 7px;
      padding: 4px 6px;
      overflow: hidden;
      border-left: 3px solid;
      box-shadow: 0 3px 9px rgba(20, 12, 6, 0.26);
      cursor: default;
    }
    .wk-evt b {
      font-size: 11px;
      font-weight: 600;
      color: #fff;
      display: block;
      line-height: 1.25;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .wk-evt span {
      font-size: 10px;
      color: rgba(255, 255, 255, 0.78);
    }
    .wk-evt.meal { background: var(--evt-meal); border-color: #d4a843; }
    .wk-evt.visit { background: var(--evt-visit); border-color: #3d9b8f; }
    .wk-evt.travel { background: var(--evt-travel); border-color: #6b9ac4; }
    .wk-evt.note { background: var(--evt-note); border-color: #c98a8a; }
    .wk-evt .wkdel {
      position: absolute;
      top: 1px;
      right: 3px;
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      font-size: 12px;
      line-height: 1;
      padding: 0;
    }
    .wk-evt .wkdel:hover { color: #fff; }
    .sched {
      /* Fixed visible height + internal scroll so the Day view is the
         SAME height as the Week view (.wk-body, also 460px) — was
         intrinsic-height which made the page scroll on long days. */
      max-height: 460px;
      overflow-y: auto;
      border-radius: var(--radius-tile);
      border: 1px solid var(--glass-border);
      background: rgba(255, 248, 235, 0.03);
      scrollbar-width: thin;
    }
    /* Inner wrapper carries the full intrinsic height so the
       absolutely-positioned .sched-track spans ALL hours (not just
       the 460px viewport — same trick the week .wk-col uses). */
    .sched-inner {
      position: relative;
    }
    .sched-row {
      display: grid;
      grid-template-columns: 62px 1fr;
      height: ${ROWH}px;
      border-bottom: 1px solid var(--gridline);
    }
    .sched-row:last-child { border-bottom: none; }
    .sched-row .hr {
      font-size: 11px;
      color: var(--text-tertiary);
      padding: 6px 10px 0;
      border-right: 1px solid var(--gridline);
      text-align: right;
    }
    .sched-track {
      position: absolute;
      left: 62px;
      right: 0;
      top: 0;
      bottom: 0;
    }
    .evt {
      position: absolute;
      left: 10px;
      right: 10px;
      border-radius: 10px;
      padding: 8px 12px;
      overflow: hidden;
      border-left: 4px solid;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      box-shadow: 0 4px 14px rgba(20, 12, 6, 0.28);
      backdrop-filter: blur(6px);
    }
    .evt .et { flex: 1; min-width: 0; }
    .evt .et b {
      font-size: 13px;
      font-weight: 600;
      display: block;
      color: #fff;
    }
    .evt .et span {
      font-size: 11.5px;
      color: rgba(255, 255, 255, 0.78);
    }
    .evt .by {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
    }
    .evt .by .nm {
      font-size: 10.5px;
      color: rgba(255, 255, 255, 0.7);
    }
    .evt .del {
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      flex-shrink: 0;
    }
    .evt .del:hover { color: #fff; }
    .evt.meal { background: var(--evt-meal); border-color: #d4a843; }
    .evt.visit { background: var(--evt-visit); border-color: #3d9b8f; }
    .evt.travel { background: var(--evt-travel); border-color: #6b9ac4; }
    .evt.note { background: var(--evt-note); border-color: #c98a8a; }
    .sched-empty {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-tertiary);
      font-size: 13px;
      text-align: center;
      padding: 0 24px;
    }
    /* Empty grid is the drag surface; the cursor signals it. The
       drag ghost previews the picked slot (Google-Calendar style). */
    .sched-track,
    .wk-col {
      cursor: cell;
    }
    .sel-ghost {
      position: absolute;
      left: 4px;
      right: 4px;
      border-radius: 8px;
      background: rgba(61, 155, 143, 0.32);
      border: 1.5px solid rgba(61, 155, 143, 0.7);
      pointer-events: none;
      z-index: 4;
      overflow: hidden;
    }
    .sel-ghost span {
      position: absolute;
      top: 3px;
      left: 7px;
      font-size: 10.5px;
      font-weight: 600;
      color: #eafaf6;
    }
    .add-row {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-top: 16px;
      padding: 12px 14px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px dashed var(--glass-border);
      flex-wrap: wrap;
    }
    .add-row input,
    .add-row select {
      background: var(--field-bg);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      border-radius: var(--radius-pill);
      padding: 8px 13px;
      font-family: var(--font-body);
      font-size: 12.5px;
      outline: none;
    }
    /* Readable placeholder — browsers dim the placeholder by their
       own UA opacity on top of the colour, which left the title +
       URL hints near-invisible on the dark glass. Pin to the page's
       standard muted secondary text + opacity:1 so it matches the
       other items. */
    .add-row input::placeholder {
      color: var(--text-secondary);
      opacity: 1;
    }
    .add-row input.t { flex: 1; min-width: 160px; }
    .add-row input.tm { width: 78px; text-align: center; }
    .add-row select { cursor: pointer; }
    .add-row .add-btn {
      padding: 8px 16px;
      border-radius: var(--radius-pill);
      border: none;
      cursor: pointer;
      background-image: var(--gradient-sage);
      color: #fff;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 12.5px;
    }
    .add-row .add-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .add-row select.dur { width: auto; }
    .add-row input.url { flex: 1; min-width: 150px; }
    .add-row .attach {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      max-width: 170px;
      padding: 8px 13px;
      border-radius: var(--radius-pill);
      background: var(--field-bg);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      font-size: 12.5px;
      cursor: pointer;
    }
    .add-row .attach:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .add-row .attach svg { width: 14px; height: 14px; flex-shrink: 0; }
    .add-row .attach span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .add-row .attach input { display: none; }
    /* Item link / attachment chips inside the schedule block. */
    .evt .et .adorn {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 4px;
    }
    .evt .et .adorn a {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      max-width: 100%;
      padding: 2px 8px;
      border-radius: var(--radius-pill);
      background: rgba(255, 255, 255, 0.16);
      color: #fff;
      font-size: 10.5px;
      font-weight: 600;
      text-decoration: none;
      overflow: hidden;
    }
    .evt .et .adorn a:hover { background: rgba(255, 255, 255, 0.28); }
    .evt .et .adorn a svg { width: 11px; height: 11px; flex-shrink: 0; }
    .add-hint {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-top: 10px;
      padding-left: 4px;
    }
  `;

  // Google-Calendar-style week grid: a shared hour gutter + one column
  // per trip day, each item absolutely positioned by its time +
  // duration (same block math as the day view, denser). Tapping a
  // day header drops into that day's day view.
  _renderWeek() {
    const cols = this._weekDays();
    const n = cols.length || 1;
    const colKeys = new Set(cols.map((c) => c.key));
    const weekItems = (this._items || []).filter((i) =>
      colKeys.has(String(i.day ?? '')),
    );
    let lo = 8;
    let hi = 20;
    for (const it of weekItems) {
      const sh = toHours(it.time);
      if (sh == null) continue;
      const dur = Math.max(0.5, (Number(it.durationMins) || 60) / 60);
      lo = Math.min(lo, Math.floor(sh));
      hi = Math.max(hi, Math.ceil(sh + dur));
    }
    lo = Math.max(0, Math.min(lo, 8));
    hi = Math.min(24, Math.max(hi, 20));
    const hours = [];
    for (let h = lo; h < hi; h++) {
      hours.push(
        html`<div class="wk-hr">${String(h).padStart(2, '0')}:00</div>`,
      );
    }
    const colHeight = (hi - lo) * ROWH;
    return html`
      <div class="wk">
        <div class="wk-head" style="--cols:${n};">
          <div class="wk-hc"></div>
          ${cols.map(
            (c) => html`<div
              class="wk-hc ${c.key === (this._dayKey ?? '') ? 'on' : ''}"
              title="Open ${c.d} in day view"
              @click=${() => {
                this._dayKey = c.key;
                this._view = 'day';
              }}
            >
              ${c.lbl}<small>${c.d}</small>
            </div>`,
          )}
        </div>
        <div class="wk-body" style="--cols:${n};">
          <div class="wk-gutter">${hours}</div>
          ${cols.map((c) => {
            const dayItems = weekItems.filter(
              (i) => String(i.day ?? '') === String(c.key),
            );
            return html`<div
              class="wk-col"
              style="height:${colHeight}px;"
              @pointerdown=${(e) => this._gridDown(e, c.key, lo, hi)}
            >
              ${this._selGhost(c.key, lo)}
              ${dayItems.map((it) => {
                const sh = toHours(it.time);
                if (sh == null) return '';
                const dur = Math.max(
                  0.5,
                  (Number(it.durationMins) || 60) / 60,
                );
                const top = (sh - lo) * ROWH + 2;
                const height = Math.max(26, dur * ROWH - 4);
                const type = TYPES.some((t) => t.key === it.type)
                  ? it.type
                  : 'note';
                return html`<div
                  class="wk-evt ${type}"
                  style="top:${top}px;height:${height}px;"
                  title=${it.title}
                >
                  ${it.addedBy === this.currentUid
                    ? html`<button
                        class="wkdel"
                        title="Remove"
                        @click=${() => this._remove(it)}
                      >
                        ×
                      </button>`
                    : ''}
                  <b>${it.title}</b>
                  <span>${fmtH(sh)}</span>
                </div>`;
              })}
            </div>`;
          })}
        </div>
      </div>
    `;
  }

  render() {
    if (!this.open || !this.trip) return html``;
    const days = this._days();
    const dayKey = this._dayKey ?? days[0]?.key ?? '';
    const dayItems = (this._items || []).filter(
      (i) => String(i.day ?? '') === String(dayKey),
    );
    // Dynamic hour window: bound to the day's items, default 8–20.
    let lo = 8;
    let hi = 20;
    for (const it of dayItems) {
      const sh = toHours(it.time);
      if (sh == null) continue;
      const dur = Math.max(0.5, (Number(it.durationMins) || 60) / 60);
      lo = Math.min(lo, Math.floor(sh));
      hi = Math.max(hi, Math.ceil(sh + dur));
    }
    lo = Math.max(0, Math.min(lo, 8));
    hi = Math.min(24, Math.max(hi, 20));
    const rows = [];
    for (let h = lo; h < hi; h++) {
      rows.push(html`<div class="sched-row">
        <div class="hr">${String(h).padStart(2, '0')}:00</div>
        <div></div>
      </div>`);
    }
    const blocks = dayItems
      .map((it) => {
        const sh = toHours(it.time);
        if (sh == null) return null;
        const dur = Math.max(0.5, (Number(it.durationMins) || 60) / 60);
        const top = (sh - lo) * ROWH + 3;
        const height = dur * ROWH - 8;
        const p = this._member(it.addedBy);
        const type = TYPES.some((t) => t.key === it.type) ? it.type : 'note';
        return html`<div
          class="evt ${type}"
          style="top:${top}px;height:${Math.max(34, height)}px;"
        >
          <div class="et">
            <b>${it.title}</b>
            <span>${fmtH(sh)}${dur ? `–${fmtH(sh + dur)}` : ''}</span>
            ${it.url || it.attachmentURL
              ? html`<div class="adorn">
                  ${it.url
                    ? html`<a
                        href=${it.url}
                        target="_blank"
                        rel="noopener"
                        title=${it.url}
                        @click=${(e) => e.stopPropagation()}
                        ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.07.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.07-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>Link</a
                      >`
                    : ''}
                  ${it.attachmentURL
                    ? html`<a
                        href=${it.attachmentURL}
                        target="_blank"
                        rel="noopener"
                        title=${it.attachmentName || 'Attachment'}
                        @click=${(e) => e.stopPropagation()}
                        ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05 12.7 19.8a5 5 0 0 1-7.07-7.07l8.49-8.49a3 3 0 0 1 4.24 4.24l-8.49 8.49a1 1 0 0 1-1.41-1.41l7.78-7.78"/></svg>${it.attachmentName || 'File'}</a
                      >`
                    : ''}
                </div>`
              : ''}
          </div>
          <div class="by">
            <member-chip
              .name=${p?.displayName ?? 'Family'}
              .photo=${p?.photoURL ?? ''}
              .hue=${p?.hue ?? 198}
              size="20"
            ></member-chip>
            <span class="nm">${p?.displayName ?? 'Someone'}</span>
          </div>
          ${it.addedBy === this.currentUid
            ? html`<button class="del" title="Remove" @click=${() => this._remove(it)}>×</button>`
            : ''}
        </div>`;
      })
      .filter(Boolean);

    return html`
      <section>
        <div class="glass">
          <div class="pl-head">
            <div>
              <h3>${this.trip.title || 'Trip'}</h3>
              <div class="pl-sub">
                Shared day plan${this.trip.location ? ` · ${this.trip.location}` : ''} — everyone on the trip can add
                <span class="who-adds">
                  ${(this.members ?? []).slice(0, 4).map(
                    (m) => html`<member-chip
                      .name=${m.displayName}
                      .photo=${m.photoURL ?? ''}
                      .hue=${m.hue ?? 198}
                      size="22"
                    ></member-chip>`,
                  )}
                </span>
              </div>
            </div>
            <button class="pl-close" @click=${this._close} aria-label="Close planner">×</button>
          </div>

          <div class="pl-modebar">
            <div class="view-toggle" role="group" aria-label="Planner view">
              <button
                class=${this._view === 'day' ? 'on' : ''}
                @click=${() => (this._view = 'day')}
              >
                Day
              </button>
              <button
                class=${this._view === 'week' ? 'on' : ''}
                @click=${() => (this._view = 'week')}
              >
                Week
              </button>
            </div>
            ${this._view === 'week' && days.length > 7
              ? html`<div class="wk-pager">
                  <button
                    ?disabled=${this._weekStart <= 0}
                    @click=${() =>
                      (this._weekStart = Math.max(0, this._weekStart - 7))}
                    aria-label="Previous week"
                  >
                    ‹
                  </button>
                  <span>Days ${this._weekStart + 1}–${Math.min(days.length, this._weekStart + 7)} of ${days.length}</span>
                  <button
                    ?disabled=${this._weekStart + 7 >= days.length}
                    @click=${() =>
                      (this._weekStart = Math.min(
                        days.length - 7,
                        this._weekStart + 7,
                      ))}
                    aria-label="Next week"
                  >
                    ›
                  </button>
                </div>`
              : ''}
          </div>

          ${this._view === 'week'
            ? this._renderWeek()
            : html`
                <div class="day-rail">
                  ${days.map(
                    (d) => html`<button
                      class="day-pill ${d.key === dayKey ? 'on' : ''}"
                      @click=${() => (this._dayKey = d.key)}
                    >
                      ${d.lbl}<small>${d.d}</small>
                    </button>`,
                  )}
                </div>

                <div class="sched">
                  <div class="sched-inner">
                    ${rows}
                    <div
                      class="sched-track"
                      @pointerdown=${(e) => this._gridDown(e, dayKey, lo, hi)}
                    >
                      ${blocks.length
                        ? blocks
                        : html`<div class="sched-empty">
                            Drag to block out a time — or add an item below.
                          </div>`}
                      ${this._selGhost(dayKey, lo)}
                    </div>
                  </div>
                </div>
              `}

          <form
            class="add-row"
            @submit=${(e) => {
              e.preventDefault();
              this._add();
            }}
          >
            <input
              class="tm"
              type="text"
              .value=${this._time}
              aria-label="Time"
              @input=${(e) => (this._time = e.target.value)}
            />
            <input
              class="t"
              type="text"
              .value=${this._title}
              placeholder="Add an item — lunch, a visit, a note…"
              aria-label="Item"
              @input=${(e) => (this._title = e.target.value)}
            />
            <select
              aria-label="Type"
              .value=${this._type}
              @change=${(e) => (this._type = e.target.value)}
            >
              ${TYPES.map(
                (t) => html`<option value=${t.key}>${t.label}</option>`,
              )}
            </select>
            <select
              class="dur"
              aria-label="Duration"
              @change=${(e) => (this._dur = Number(e.target.value))}
            >
              ${DURATIONS.map(
                (d) => html`<option
                  value=${String(d.m)}
                  ?selected=${d.m === this._dur}
                >
                  ${d.label}
                </option>`,
              )}
            </select>
            <input
              class="url"
              type="url"
              .value=${this._url}
              placeholder="Link (optional) — e.g. booking URL"
              aria-label="Link"
              @input=${(e) => (this._url = e.target.value)}
            />
            <label class="attach" title="Attach a PDF or screenshot">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05 12.7 19.8a5 5 0 0 1-7.07-7.07l8.49-8.49a3 3 0 0 1 4.24 4.24l-8.49 8.49a1 1 0 0 1-1.41-1.41l7.78-7.78"/></svg>
              <span>${this._fileName || 'Attach'}</span>
              <input
                type="file"
                accept="application/pdf,image/*"
                @change=${(e) => {
                  const f = e.target.files?.[0] ?? null;
                  this._file = f;
                  this._fileName = f ? f.name : '';
                }}
              />
            </label>
            <button class="add-btn" type="submit" ?disabled=${this._busy || !this._title.trim()}>
              ${this._busy ? 'Adding…' : '+ Add to plan'}
            </button>
          </form>
          <div class="add-hint">
            Anyone on the trip can add to this plan — every item is tagged
            with who added it (like a shared sheet, on a day grid).
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('trip-planner', TripPlanner);
