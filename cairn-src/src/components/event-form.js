import { LitElement, html, css } from 'lit';
import { parseLocalDate } from '../services/data.js';
import './glass-panel.js';
import './glass-button.js';
import './member-chip.js';

/**
 * Phase 3B: Family event editor modal. Handles birthdays, anniversaries,
 * and custom one-off events. Mirrors trip-form's UX patterns (sheet,
 * shadow-DOM box-sizing, 16px inputs for iOS no-zoom).
 *
 * Properties:
 *   open      — boolean
 *   event     — existing event to edit (or null for create)
 *   members   — immediate + extended members for the people picker
 *   familyId  — required for save
 *   busy      — save/delete in flight
 *
 * Events: save, remove, cancel
 */
export class EventForm extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    event: { type: Object },
    members: { type: Array },
    familyId: { type: String },
    busy: { type: Boolean },
    _draft: { state: true },
    _error: { state: true },
  };

  constructor() {
    super();
    this.open = false;
    this.event = null;
    this.members = [];
    this.familyId = '';
    this.busy = false;
    this._draft = this._blankDraft();
    this._error = '';
  }

  willUpdate(changed) {
    if (changed.has('event') || changed.has('open')) {
      if (this.open) this._draft = this._draftFromEvent(this.event);
      this._error = '';
    }
  }

  _blankDraft() {
    const today = new Date().toISOString().slice(0, 10);
    return {
      id: null,
      type: 'birthday',
      title: '',
      date: today,
      personIds: [],
      recurring: true,
      subtitle: '',
      notes: '',
      visibility: 'family',
    };
  }

  _draftFromEvent(event) {
    if (!event) return this._blankDraft();
    return {
      id: event.id ?? null,
      type: event.type ?? 'birthday',
      title: event.title ?? '',
      date: event.date ?? new Date().toISOString().slice(0, 10),
      personIds: Array.isArray(event.personIds) ? [...event.personIds] : [],
      recurring: event.recurring ?? true,
      subtitle: event.subtitle ?? '',
      notes: event.notes ?? '',
      visibility: event.visibility ?? 'family',
    };
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
    :host([open]) {
      display: flex;
    }
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
      max-width: 620px;
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
      margin-bottom: 18px;
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
    .close:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .field { margin-bottom: 14px; min-width: 0; }
    label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: -0.005em;
      margin-bottom: 6px;
    }
    input[type='text'],
    input[type='date'],
    textarea {
      width: 100%;
      min-width: 0;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.16);
      border-radius: var(--radius-input);
      padding: 11px 14px;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 16px;
    }
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--terracotta);
      background: rgba(255, 248, 235, 0.1);
    }
    textarea { min-height: 60px; resize: vertical; }
    .row-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    @media (max-width: 520px) {
      .row-2 { grid-template-columns: 1fr; gap: 0; }
    }
    .seg {
      display: inline-flex;
      padding: 3px;
      gap: 2px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.14);
      border-radius: var(--radius-pill);
    }
    .seg button {
      background: transparent;
      color: var(--text-secondary);
      border: none;
      padding: 7px 14px;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      border-radius: var(--radius-pill);
      cursor: pointer;
    }
    .seg button.active {
      background: var(--sand-warm);
      color: var(--charcoal);
      font-weight: 600;
    }
    .people {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .person-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 12px 5px 5px;
      background: rgba(255, 248, 235, 0.05);
      border: 1px solid rgba(255, 248, 235, 0.12);
      border-radius: var(--radius-pill);
      cursor: pointer;
      font-size: 13px;
      color: var(--text-secondary);
    }
    .person-chip:hover {
      border-color: var(--glass-border-strong);
      color: var(--text-primary);
    }
    .person-chip.on {
      background: rgba(212, 168, 67, 0.16);
      border-color: rgba(212, 168, 67, 0.45);
      color: var(--text-primary);
    }
    .toggle-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      background: rgba(255, 248, 235, 0.04);
      border: 1px solid rgba(255, 248, 235, 0.1);
      border-radius: var(--radius-input);
      cursor: pointer;
      user-select: none;
    }
    .toggle-row .body {
      flex: 1;
    }
    .toggle-row .name {
      font-size: 14px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .toggle-row .desc {
      font-size: 12.5px;
      color: var(--text-tertiary);
      margin-top: 2px;
      line-height: 1.5;
    }
    .toggle-switch {
      width: 38px;
      height: 22px;
      border-radius: 999px;
      background: rgba(255, 248, 235, 0.18);
      position: relative;
      transition: background 200ms ease;
      flex-shrink: 0;
    }
    .toggle-switch::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: #fff;
      transition: transform 200ms ease;
    }
    .toggle-row.on .toggle-switch {
      background: var(--teal-pebble);
    }
    .toggle-row.on .toggle-switch::after {
      transform: translateX(16px);
    }
    .actions {
      display: flex;
      gap: 10px;
      margin-top: 22px;
      flex-wrap: wrap;
    }
    .spacer { flex: 1; }
    .delete-btn {
      background: transparent;
      color: var(--rose-soft);
      border: 1px solid rgba(201, 138, 138, 0.35);
      padding: 11px 18px;
      border-radius: var(--radius-pill);
      cursor: pointer;
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 14px;
    }
    .delete-btn:hover {
      background: rgba(201, 138, 138, 0.12);
      border-color: rgba(201, 138, 138, 0.5);
    }
    .error {
      color: var(--rose-soft);
      font-size: 13px;
      margin-top: 10px;
    }
    .hint {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-top: 6px;
      line-height: 1.4;
    }
  `;

  _set(field, value) {
    this._draft = { ...this._draft, [field]: value };
  }

  _toggleType(t) {
    // Auto-fill title placeholder when switching type with empty title.
    this._set('type', t);
  }

  _togglePerson(uid) {
    const has = this._draft.personIds.includes(uid);
    this._set(
      'personIds',
      has
        ? this._draft.personIds.filter((id) => id !== uid)
        : [...this._draft.personIds, uid],
    );
  }

  _onSave() {
    const d = this._draft;
    if (!d.title.trim()) {
      this._error = 'Give it a title.';
      return;
    }
    if (!d.date) {
      this._error = 'Pick a date.';
      return;
    }
    if (!this.familyId) {
      this._error = 'No family yet.';
      return;
    }
    this._error = '';
    this.dispatchEvent(
      new CustomEvent('save', {
        detail: {
          ...d,
          title: d.title.trim(),
          subtitle: d.subtitle.trim(),
          notes: d.notes.trim(),
        },
      }),
    );
  }

  _onDelete() {
    if (!this._draft.id) return;
    if (!confirm('Delete this event? This can\'t be undone.')) return;
    this.dispatchEvent(new CustomEvent('remove', { detail: { id: this._draft.id } }));
  }

  _onCancel() {
    this.dispatchEvent(new Event('cancel'));
  }

  render() {
    if (!this.open) return html``;
    const d = this._draft;
    const isEdit = Boolean(d.id);
    return html`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>${isEdit ? 'Edit event' : 'New event'}</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <div class="field">
            <label>Type</label>
            <div class="seg">
              ${[
                { v: 'birthday', label: 'Birthday' },
                { v: 'anniversary', label: 'Anniversary' },
                { v: 'custom', label: 'Other' },
              ].map(
                (t) => html`
                  <button
                    class=${d.type === t.v ? 'active' : ''}
                    @click=${() => this._toggleType(t.v)}
                  >
                    ${t.label}
                  </button>
                `,
              )}
            </div>
          </div>

          <div class="row-2">
            <div class="field">
              <label>Title</label>
              <input
                type="text"
                placeholder=${d.type === 'birthday'
                  ? 'e.g. Mum’s birthday'
                  : d.type === 'anniversary'
                  ? 'e.g. Mum & Dad’s anniversary'
                  : 'e.g. School play'}
                .value=${d.title}
                @input=${(e) => this._set('title', e.target.value)}
              />
            </div>
            <div class="field">
              <label>Date</label>
              <input
                type="date"
                .value=${d.date}
                @input=${(e) => this._set('date', e.target.value)}
              />
            </div>
          </div>

          <div class="field">
            <div
              class="toggle-row ${d.recurring ? 'on' : ''}"
              @click=${() => this._set('recurring', !d.recurring)}
            >
              <div class="body">
                <div class="name">Recurs every year</div>
                <div class="desc">
                  ${d.recurring
                    ? `Shows up on ${this._monthDay(d.date)} every year.`
                    : 'One-time event on that specific date only.'}
                </div>
              </div>
              <div class="toggle-switch"></div>
            </div>
          </div>

          ${this.members.length > 0
            ? html`
                <div class="field">
                  <label>Who is this about</label>
                  <div class="people">
                    ${this.members.map(
                      (m) => html`
                        <div
                          class="person-chip ${d.personIds.includes(m.uid) ? 'on' : ''}"
                          @click=${() => this._togglePerson(m.uid)}
                        >
                          <member-chip
                            .name=${m.displayName}
                            .photo=${m.photoURL ?? ''}
                            .hue=${m.hue}
                            size="22"
                          ></member-chip>
                          ${m.displayName}
                        </div>
                      `,
                    )}
                  </div>
                </div>
              `
            : ''}

          <div class="row-2">
            <div class="field">
              <label>Visibility</label>
              <div class="seg">
                ${['personal', 'family', 'extended'].map(
                  (v) => html`
                    <button
                      class=${d.visibility === v ? 'active' : ''}
                      @click=${() => this._set('visibility', v)}
                    >
                      ${v === 'personal' ? 'Just me' : v === 'family' ? 'Family' : 'Extended'}
                    </button>
                  `,
                )}
              </div>
            </div>
            <div class="field">
              <label>Subtitle (optional)</label>
              <input
                type="text"
                placeholder=${d.type === 'anniversary' ? 'e.g. 30 years' : 'e.g. surprise party'}
                .value=${d.subtitle}
                @input=${(e) => this._set('subtitle', e.target.value)}
              />
            </div>
          </div>

          <div class="field">
            <label>Notes</label>
            <textarea
              placeholder="Gift ideas, card text, who's bringing what…"
              .value=${d.notes}
              @input=${(e) => this._set('notes', e.target.value)}
            ></textarea>
          </div>

          ${this._error ? html`<div class="error">${this._error}</div>` : ''}

          <div class="actions">
            ${isEdit
              ? html`<button class="delete-btn" @click=${this._onDelete} ?disabled=${this.busy}>
                  Delete
                </button>`
              : ''}
            <div class="spacer"></div>
            <glass-button variant="ghost" @click=${this._onCancel} ?disabled=${this.busy}>
              Cancel
            </glass-button>
            <glass-button variant="primary" @click=${this._onSave} ?disabled=${this.busy}>
              ${this.busy ? 'Saving…' : isEdit ? 'Save changes' : 'Add event'}
            </glass-button>
          </div>
        </glass-panel>
      </div>
    `;
  }

  _monthDay(iso) {
    if (!iso) return '';
    // parseLocalDate keeps YYYY-MM-DD as a local calendar day.
    // `new Date('2026-05-15')` is parsed as UTC midnight, which prints
    // as 14 May in any timezone west of UTC — the off-by-one the user
    // saw in the "Recurs every year" subtitle.
    const d = parseLocalDate(iso);
    if (!d || Number.isNaN(d.getTime())) return '';
    return d.toLocaleString('en-GB', { day: 'numeric', month: 'long' });
  }
}

customElements.define('event-form', EventForm);
