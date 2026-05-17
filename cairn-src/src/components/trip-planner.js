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
    this._unsub = null;
    this._subId = null;
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
    .sched {
      position: relative;
      border-radius: var(--radius-tile);
      border: 1px solid var(--glass-border);
      background: rgba(255, 248, 235, 0.03);
      overflow: hidden;
    }
    .sched-row {
      display: grid;
      grid-template-columns: 62px 1fr;
      height: ${ROWH}px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.06);
    }
    .sched-row:last-child { border-bottom: none; }
    .sched-row .hr {
      font-size: 11px;
      color: var(--text-tertiary);
      padding: 6px 10px 0;
      border-right: 1px solid rgba(255, 248, 235, 0.06);
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
    .evt.meal { background: rgba(212, 168, 67, 0.32); border-color: #d4a843; }
    .evt.visit { background: rgba(61, 155, 143, 0.32); border-color: #3d9b8f; }
    .evt.travel { background: rgba(107, 154, 196, 0.32); border-color: #6b9ac4; }
    .evt.note { background: rgba(201, 138, 138, 0.3); border-color: #c98a8a; }
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
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      border-radius: var(--radius-pill);
      padding: 8px 13px;
      font-family: var(--font-body);
      font-size: 12.5px;
      outline: none;
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
      background: rgba(255, 248, 235, 0.06);
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
            ${rows}
            <div class="sched-track">
              ${blocks.length
                ? blocks
                : html`<div class="sched-empty">
                    Nothing planned for this day yet — add the first item below.
                  </div>`}
            </div>
          </div>

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
