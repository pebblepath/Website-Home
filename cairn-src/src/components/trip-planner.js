import { LitElement, html, css } from 'lit';
import './member-chip.js';
import { dataStore } from '../services/data.js';
import { toast } from '../services/toast.js';

/**
 * Collaborative trip day-planner (Portal). Opens from a trip card.
 * Anyone in the trip's audience can add items (visit / meal / travel /
 * note) on a per-day agenda; every item is tagged with who added it.
 * Live via dataStore.planItemsListener — co-planners see each other's
 * additions in real time, Google-Sheets style, laid out like a
 * Google-Calendar day. Read/write is enforced server-side by the
 * trip's visibleTo (firestore.rules canCoplanTrip).
 *
 * Props:
 *   open       — Boolean (reflected)
 *   trip       — { id, title, location, start, end }
 *   members    — [{ uid, displayName, photoURL, hue }] (author tags)
 *   currentUid — viewer uid (controls delete-own affordance)
 */
const TYPES = [
  { key: 'visit', label: 'Visit', color: '#3d9b8f' },
  { key: 'meal', label: 'Meal', color: '#d4a843' },
  { key: 'travel', label: 'Travel', color: '#6b9ac4' },
  { key: 'note', label: 'Note', color: '#c98a8a' },
];

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
    this._busy = false;
    this._unsub = null;
    this._subscribedTripId = null;
  }

  willUpdate(changed) {
    if (changed.has('open') || changed.has('trip')) {
      const tripId = this.trip?.id ?? null;
      if (this.open && tripId) {
        if (this._subscribedTripId !== tripId) {
          this._teardown();
          this._subscribedTripId = tripId;
          const days = this._days();
          this._dayKey = days[0]?.key ?? '';
          this._unsub = dataStore.planItemsListener(tripId, (items) => {
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
    this._subscribedTripId = null;
    this._items = [];
  }

  _onCancel() {
    this.dispatchEvent(new Event('cancel'));
  }

  /** Day buckets across the trip range (inclusive, capped at 31). */
  _days() {
    const s = parseYMD(this.trip?.start);
    const e = parseYMD(this.trip?.end) ?? s;
    if (!s) return [{ key: '', label: 'The trip' }];
    const out = [];
    const cur = new Date(s);
    let guard = 0;
    while (cur <= e && guard < 31) {
      out.push({
        key: ymd(cur),
        label: cur.toLocaleDateString('en-GB', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
        }),
      });
      cur.setDate(cur.getDate() + 1);
      guard += 1;
    }
    return out.length ? out : [{ key: '', label: 'The trip' }];
  }

  _member(uid) {
    return (this.members ?? []).find((m) => m.uid === uid) ?? null;
  }

  async _add() {
    const title = this._title.trim();
    if (!title || this._busy) return;
    this._busy = true;
    try {
      await dataStore.addPlanItem(this.trip.id, {
        title,
        type: this._type,
        day: this._dayKey ?? '',
        time: this._time || '',
      });
      this._title = '';
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

  async _remove(item) {
    try {
      await dataStore.deletePlanItem(this.trip.id, item.id);
    } catch (err) {
      console.error('deletePlanItem failed:', err);
      toast(`Couldn't remove: ${err?.code ?? err?.message}`, { duration: 4000 });
    }
  }

  static styles = css`
    * { box-sizing: border-box; }
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: none;
    }
    :host([open]) { display: block; }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(20, 12, 6, 0.5);
      animation: fade 200ms ease;
    }
    @keyframes fade { from { opacity: 0; } to { opacity: 1; } }
    .panel {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: min(720px, calc(100vw - 32px));
      max-height: min(86vh, 820px);
      display: flex;
      flex-direction: column;
      background: rgba(40, 32, 42, 0.55);
      backdrop-filter: blur(34px) saturate(180%);
      -webkit-backdrop-filter: blur(34px) saturate(180%);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-card);
      box-shadow: 0 24px 60px rgba(20, 12, 6, 0.55);
      padding: 22px 22px 20px;
      animation: pop 240ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes pop {
      from { transform: translate(-50%, -48%) scale(0.98); opacity: 0; }
      to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    @media (max-width: 640px) {
      .panel {
        width: calc(100vw - 16px);
        max-height: calc(100vh - 24px);
        padding: 16px;
      }
    }
    .head {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding-bottom: 14px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.08);
    }
    .head h3 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 20px;
      letter-spacing: -0.015em;
    }
    .head .sub {
      color: var(--text-secondary);
      font-size: 13px;
      margin-top: 3px;
    }
    .head .body { flex: 1; min-width: 0; }
    .close {
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      width: 32px;
      height: 32px;
      border-radius: 999px;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 17px;
      flex-shrink: 0;
    }
    .close:hover { color: var(--text-primary); }
    .days {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding: 14px 0 12px;
      scrollbar-width: none;
    }
    .days::-webkit-scrollbar { display: none; }
    .day {
      padding: 8px 14px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 12.5px;
      white-space: nowrap;
      cursor: pointer;
    }
    .day.on {
      background: rgba(61, 155, 143, 0.22);
      color: #fff;
      border-color: rgba(61, 155, 143, 0.45);
    }
    .agenda {
      flex: 1;
      min-height: 160px;
      overflow-y: auto;
      margin: 4px -6px 0;
      padding: 4px 6px 6px;
      scrollbar-width: thin;
      scrollbar-color: rgba(255, 248, 235, 0.18) transparent;
    }
    .agenda::-webkit-scrollbar { width: 6px; }
    .agenda::-webkit-scrollbar-thumb {
      background: rgba(255, 248, 235, 0.18);
      border-radius: 999px;
    }
    .item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 0;
      border-bottom: 1px solid rgba(255, 248, 235, 0.07);
    }
    .item:last-child { border-bottom: none; }
    .item .when {
      width: 52px;
      flex-shrink: 0;
      font-size: 12.5px;
      font-weight: 700;
      color: var(--text-secondary);
      font-variant-numeric: tabular-nums;
      padding-top: 1px;
    }
    .item .accent {
      width: 4px;
      align-self: stretch;
      border-radius: 999px;
      flex-shrink: 0;
    }
    .item .body { flex: 1; min-width: 0; }
    .item .title {
      font-size: 14.5px;
      font-weight: 600;
      line-height: 1.35;
    }
    .item .by {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 5px;
      font-size: 11.5px;
      color: var(--text-tertiary);
    }
    .item .type-pill {
      display: inline-block;
      margin-left: 8px;
      padding: 1px 8px;
      border-radius: 999px;
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-secondary);
      border: 1px solid var(--glass-border);
    }
    .item .del {
      background: transparent;
      border: none;
      color: var(--text-tertiary);
      cursor: pointer;
      font-size: 15px;
      padding: 0 2px;
      flex-shrink: 0;
    }
    .item .del:hover { color: var(--rose-soft); }
    .empty {
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.55;
      padding: 22px 4px;
      text-align: center;
    }
    .add {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 14px;
      padding: 10px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px dashed var(--glass-border);
      flex-wrap: wrap;
    }
    .add input,
    .add select {
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      border-radius: var(--radius-pill);
      padding: 9px 13px;
      font-family: var(--font-body);
      font-size: 13px;
      outline: none;
    }
    .add input:focus,
    .add select:focus { border-color: var(--teal-pebble); }
    .add .t { flex: 1; min-width: 150px; }
    .add .tm { width: 78px; text-align: center; }
    .add select { cursor: pointer; }
    .add .go {
      padding: 9px 16px;
      border-radius: var(--radius-pill);
      border: none;
      cursor: pointer;
      background-image: var(--gradient-sage);
      color: #fff;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13px;
    }
    .add .go:disabled { opacity: 0.5; cursor: not-allowed; }
    .hint {
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
    const dayItems = this._items.filter(
      (i) => String(i.day ?? '') === String(dayKey),
    );
    return html`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div
        class="panel"
        @keydown=${(e) => {
          if (e.key === 'Escape') this._onCancel();
        }}
      >
        <div class="head">
          <div class="body">
            <h3>${this.trip.title || 'Trip'}</h3>
            <div class="sub">
              Shared day plan${this.trip.location
                ? ` · ${this.trip.location}`
                : ''} — everyone on the trip can add
            </div>
          </div>
          <button class="close" @click=${this._onCancel} aria-label="Close">
            ×
          </button>
        </div>

        <div class="days">
          ${days.map(
            (d) => html`<button
              class="day ${d.key === dayKey ? 'on' : ''}"
              @click=${() => (this._dayKey = d.key)}
            >
              ${d.label}
            </button>`,
          )}
        </div>

        <div class="agenda">
          ${dayItems.length === 0
            ? html`<div class="empty">
                Nothing planned for this day yet — add the first item
                below. Anyone on the trip can contribute.
              </div>`
            : dayItems.map((i) => {
                const ty =
                  TYPES.find((t) => t.key === i.type) ?? TYPES[3];
                const m = this._member(i.addedBy);
                return html`<div class="item">
                  <div class="when">${i.time || '—'}</div>
                  <div
                    class="accent"
                    style="background:${ty.color}"
                  ></div>
                  <div class="body">
                    <div class="title">
                      ${i.title}<span class="type-pill">${ty.label}</span>
                    </div>
                    <div class="by">
                      <member-chip
                        .name=${m?.displayName ?? 'Family'}
                        .photo=${m?.photoURL ?? ''}
                        .hue=${m?.hue ?? 198}
                        size="18"
                      ></member-chip>
                      ${m?.displayName ?? 'Someone'} added this
                    </div>
                  </div>
                  ${i.addedBy === this.currentUid
                    ? html`<button
                        class="del"
                        title="Remove"
                        @click=${() => this._remove(i)}
                      >
                        ×
                      </button>`
                    : ''}
                </div>`;
              })}
        </div>

        <form
          class="add"
          @submit=${(e) => {
            e.preventDefault();
            this._add();
          }}
        >
          <input
            class="tm"
            type="text"
            .value=${this._time}
            placeholder="12:00"
            aria-label="Time"
            @input=${(e) => (this._time = e.target.value)}
          />
          <input
            class="t"
            type="text"
            .value=${this._title}
            placeholder="Add lunch, a visit, a note…"
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
          <button
            type="submit"
            class="go"
            ?disabled=${this._busy || !this._title.trim()}
          >
            + Add
          </button>
        </form>
        <div class="hint">
          Every item is tagged with who added it — like a shared sheet,
          on the trip's day view.
        </div>
      </div>
    `;
  }
}

customElements.define('trip-planner', TripPlanner);
