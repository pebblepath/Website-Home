import { LitElement, html, css } from 'lit';
import { dataStore } from '../services/data.js';
import { toast } from '../services/toast.js';

/**
 * School-calendar import (Ellie ①). Upload a PDF / screenshot / Word
 * calendar → the extractSchoolCalendar Cloud Function pulls dated
 * events via Claude → a PARENT REVIEW screen (edit / deselect) →
 * confirmed events are written as familyEvents source:'school-import'.
 * The CF never writes — only the confirmed subset here does, so an
 * imperfect AI extraction can't surprise the shared calendar.
 *
 * Emits `cancel` to close (mirrors the other modals). `added` is
 * dispatched after a successful import (count in detail).
 */
export class SchoolImportModal extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    _phase: { state: true }, // pick | working | review | done | error
    _events: { state: true },
    _err: { state: true },
    _count: { state: true },
  };

  constructor() {
    super();
    this.open = false;
    this._reset();
  }

  _reset() {
    this._phase = 'pick';
    this._events = [];
    this._err = '';
    this._count = 0;
  }

  willUpdate(changed) {
    // Fresh state every time it's (re)opened.
    if (changed.has('open') && this.open) this._reset();
  }

  _cancel() {
    this.dispatchEvent(new Event('cancel'));
  }

  async _onFile(e) {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow re-picking the same file
    if (!file) return;
    this._phase = 'working';
    this._err = '';
    try {
      const { storagePath, fileType } =
        await dataStore.uploadSchoolCalendar(file);
      const events = await dataStore.extractSchoolCalendarEvents(
        storagePath,
        fileType,
      );
      if (!events.length) {
        this._phase = 'error';
        this._err =
          "Couldn't find any dated events in that file. Try a clearer PDF or a screenshot of the calendar.";
        return;
      }
      // Default every row selected; sort by date.
      this._events = events
        .map((ev) => ({ ...ev, _sel: true }))
        .sort((a, b) => String(a.date).localeCompare(String(b.date)));
      this._phase = 'review';
    } catch (err) {
      console.error('school import failed:', err);
      this._phase = 'error';
      this._err =
        err?.code === 'functions/permission-denied'
          ? "You're not a member of this family."
          : err?.code === 'storage/unauthorized'
            ? 'The upload rule needs publishing — ask the team to deploy storage.rules.'
            : err?.code === 'functions/not-found' ||
                err?.code === 'functions/internal'
              ? "The importer isn't available right now — try again in a moment."
              : (err?.message ?? 'Something went wrong — try again.');
    }
  }

  _patch(i, key, val) {
    const next = this._events.slice();
    next[i] = { ...next[i], [key]: val };
    this._events = next;
  }

  get _selected() {
    return this._events.filter(
      (e) => e._sel && /^\d{4}-\d{2}-\d{2}$/.test(e.date) && e.title.trim(),
    );
  }

  async _confirm() {
    const sel = this._selected;
    if (!sel.length) return;
    this._phase = 'working';
    try {
      const n = await dataStore.importSchoolEvents(
        sel.map((e) => ({ date: e.date, title: e.title.trim(), type: e.type })),
      );
      this._count = n;
      this._phase = 'done';
      toast(`Added ${n} event${n === 1 ? '' : 's'} to the calendar.`);
      this.dispatchEvent(new CustomEvent('added', { detail: n }));
    } catch (err) {
      console.error('importSchoolEvents failed:', err);
      this._phase = 'error';
      this._err =
        err?.code === 'permission-denied'
          ? "Couldn't save — you may not have permission."
          : (err?.message ?? "Couldn't save the events — try again.");
    }
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
      max-width: 680px;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.02em;
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
    }
    .lede {
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.55;
      margin: 0 0 18px;
    }
    .lede strong { color: var(--text-primary); font-weight: 600; }
    .pickbtn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 18px;
      border-radius: var(--radius-pill);
      background-image: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13.5px;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(139, 90, 62, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
    }
    .pickbtn svg { width: 16px; height: 16px; }
    .pickbtn input { display: none; }
    .hint {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-top: 12px;
    }
    .working {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      padding: 34px 0;
      color: var(--text-secondary);
      font-size: 14px;
      text-align: center;
    }
    .spin {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 3px solid var(--glass-border);
      border-top-color: var(--teal-pebble);
      animation: sp 0.9s linear infinite;
    }
    @keyframes sp {
      to { transform: rotate(360deg); }
    }
    .list {
      max-height: 52vh;
      overflow-y: auto;
      margin: 4px -4px;
      padding: 0 4px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border-radius: var(--radius-tile);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
    }
    .row.off { opacity: 0.42; }
    .row input[type='checkbox'] {
      width: 17px;
      height: 17px;
      accent-color: var(--teal-pebble);
      flex-shrink: 0;
      cursor: pointer;
    }
    .row input[type='date'] {
      flex-shrink: 0;
      width: 140px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      border-radius: var(--radius-input);
      padding: 7px 10px;
      font-family: var(--font-body);
      font-size: 12.5px;
      outline: none;
      color-scheme: dark;
    }
    .row input.t {
      flex: 1;
      min-width: 0;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      border-radius: var(--radius-input);
      padding: 7px 11px;
      font-family: var(--font-body);
      font-size: 13px;
      outline: none;
    }
    .ty {
      flex-shrink: 0;
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #9fded2;
      border: 1px solid rgba(61, 155, 143, 0.4);
      border-radius: var(--radius-pill);
      padding: 3px 9px;
    }
    .foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-top: 18px;
      flex-wrap: wrap;
    }
    .selinfo { font-size: 12.5px; color: var(--text-secondary); }
    .actions { display: flex; gap: 10px; }
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
    }
    .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-ghost {
      padding: 10px 18px;
      border-radius: var(--radius-pill);
      font-weight: 600;
      font-size: 13.5px;
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      cursor: pointer;
      font-family: var(--font-body);
    }
    .err {
      color: var(--rose-soft);
      font-size: 13.5px;
      line-height: 1.55;
      padding: 16px 0;
      text-align: center;
    }
    .done {
      text-align: center;
      padding: 24px 0 8px;
    }
    .done .big {
      font-family: var(--font-display);
      font-size: 30px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .done .sub {
      color: var(--text-secondary);
      font-size: 13.5px;
      margin: 6px 0 18px;
    }
  `;

  _accept =
    'application/pdf,image/*,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword';

  render() {
    if (!this.open) return html``;
    return html`
      <div class="backdrop" @click=${this._cancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Import school calendar</h2>
            <button class="close" @click=${this._cancel} aria-label="Close">
              ×
            </button>
          </div>
          ${this._phase === 'pick'
            ? html`
                <p class="lede">
                  Upload the calendar your school sent —
                  <strong>PDF, a screenshot, or a Word doc</strong>. Pebble
                  reads it and pulls out the dates (closures, holidays,
                  INSET days, activities). You'll review and pick which to
                  add before anything lands on the family calendar.
                </p>
                <label class="pickbtn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
                  Choose a file
                  <input
                    type="file"
                    accept=${this._accept}
                    @change=${this._onFile}
                  />
                </label>
                <div class="hint">
                  Imported events are tagged so they're visually distinct
                  from your own activities, and shared with your whole
                  Cairn.
                </div>
              `
            : ''}
          ${this._phase === 'working'
            ? html`<div class="working">
                <div class="spin"></div>
                <div>Reading the calendar…</div>
              </div>`
            : ''}
          ${this._phase === 'review'
            ? html`
                <p class="lede">
                  Found <strong>${this._events.length}</strong> dated
                  ${this._events.length === 1 ? 'event' : 'events'}. Uncheck
                  any you don't want, fix a date or title if Pebble got it
                  slightly wrong, then add them.
                </p>
                <div class="list">
                  ${this._events.map(
                    (ev, i) => html`<div class="row ${ev._sel ? '' : 'off'}">
                      <input
                        type="checkbox"
                        .checked=${ev._sel}
                        @change=${(e) => this._patch(i, '_sel', e.target.checked)}
                        aria-label="Include this event"
                      />
                      <input
                        type="date"
                        .value=${ev.date}
                        @change=${(e) => this._patch(i, 'date', e.target.value)}
                      />
                      <input
                        class="t"
                        type="text"
                        .value=${ev.title}
                        @input=${(e) => this._patch(i, 'title', e.target.value)}
                      />
                      <span class="ty">${ev.type}</span>
                    </div>`,
                  )}
                </div>
                <div class="foot">
                  <span class="selinfo"
                    >${this._selected.length} selected</span
                  >
                  <div class="actions">
                    <button class="btn-ghost" @click=${this._cancel}>
                      Cancel
                    </button>
                    <button
                      class="btn-primary"
                      ?disabled=${this._selected.length === 0}
                      @click=${this._confirm}
                    >
                      Add ${this._selected.length} to calendar
                    </button>
                  </div>
                </div>
              `
            : ''}
          ${this._phase === 'done'
            ? html`<div class="done">
                <div class="big">${this._count}</div>
                <div class="sub">
                  event${this._count === 1 ? '' : 's'} added to your family
                  calendar.
                </div>
                <button class="btn-primary" @click=${this._cancel}>
                  Done
                </button>
              </div>`
            : ''}
          ${this._phase === 'error'
            ? html`<div>
                <div class="err">${this._err}</div>
                <div class="foot" style="justify-content:center;">
                  <button class="btn-ghost" @click=${() => this._reset()}>
                    Try again
                  </button>
                </div>
              </div>`
            : ''}
        </glass-panel>
      </div>
    `;
  }
}

customElements.define('school-import-modal', SchoolImportModal);
