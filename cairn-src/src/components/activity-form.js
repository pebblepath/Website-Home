import { LitElement, html, css } from 'lit';
import './glass-panel.js';
import './glass-button.js';
import './member-chip.js';

/**
 * Activity Unification U3-b (2026-06-02) — the Portal authoring surface
 * for a unified `FamilyActivity` (the iOS `ActivityFormView` mirror).
 * One single-day item that lives EITHER standalone on the family
 * calendar (tripId nil) OR attached to a trip's day planner (tripId set),
 * with OPTIONAL times.
 *
 * Mirrors event-form.js's UX (sheet, shadow-DOM box-sizing, 16px inputs
 * for iOS no-zoom). Field set merges the two forms it replaces:
 *   • event-form (plan/activity path) — title / day / notes / tag /
 *     visibility / who.
 *   • plan-item (trip planner) — type (visit/meal/travel/note) / optional
 *     time + duration / link.
 * Attachment (photo/PDF) is DEFERRED to a fast follow-up to keep this
 * first form smaller (iOS form has it; parity gap is noted).
 *
 * Visibility is conditional, matching iOS: a STANDALONE activity shows
 * the Just me / Participants / Everyone segment + a "who's going" picker;
 * a TRIP-ATTACHED one (opened from the planner, tripId set) inherits the
 * trip's audience, so both are hidden in favour of a short note.
 *
 * "Who's going" folds into the audience: with visibility "Participants"
 * the activity is shown to the tagged people + household (same behaviour
 * as a trip's attendees). data.js `saveActivity` does the
 * personIds → attendees fold (activity-only) — this form just emits
 * `personIds`. Children carry no login, so tagging them is descriptive.
 *
 * Properties:
 *   open            — boolean
 *   activity        — existing activity to edit (or null for create)
 *   members         — adults for the who's-going picker (uid/displayName/photoURL/hue)
 *   children        — children for the who's-going picker (id/name/photoURL)
 *   familyId        — required for save
 *   busy            — save/delete in flight
 *   defaultDay      — YYYY-MM-DD prefill on create (calendar "add on this day")
 *   defaultTripId   — trip-attached create (planner "+") — hides who/visibility
 *   defaultTime     — HH:mm prefill on create (planner time-slot)
 *   defaultDuration — minutes prefill on create (planner)
 *
 * Events: save (detail = activity draft for saveActivity), remove
 * (detail = { id }), cancel.
 */
export class ActivityForm extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    activity: { type: Object },
    members: { type: Array },
    children: { type: Array },
    familyId: { type: String },
    busy: { type: Boolean },
    defaultDay: { type: String },
    defaultTripId: { type: String },
    defaultTime: { type: String },
    defaultDuration: { type: Number },
    _draft: { state: true },
    _error: { state: true },
  };

  constructor() {
    super();
    this.open = false;
    this.activity = null;
    this.members = [];
    this.children = [];
    this.familyId = '';
    this.busy = false;
    this.defaultDay = '';
    this.defaultTripId = null;
    this.defaultTime = '';
    this.defaultDuration = 60;
    this._draft = this._blankDraft();
    this._error = '';
  }

  willUpdate(changed) {
    if (changed.has('activity') || changed.has('open')) {
      if (this.open) {
        this._draft = this.activity
          ? this._draftFromActivity(this.activity)
          : this._blankDraft();
      }
      this._error = '';
    }
  }

  _blankDraft() {
    const today = new Date().toISOString().slice(0, 10);
    return {
      id: null,
      title: '',
      type: 'visit',
      day: this.defaultDay || today,
      time: this.defaultTime || '', // '' = untimed / anytime that day
      durationMins: this.defaultDuration || 60,
      personIds: [],
      visibility: 'family',
      calTag: '',
      notes: '',
      url: '',
      tripId: this.defaultTripId || null,
    };
  }

  _draftFromActivity(a) {
    if (!a) return this._blankDraft();
    const today = new Date().toISOString().slice(0, 10);
    return {
      id: a.id ?? null,
      title: a.title ?? '',
      type: a.type ?? 'visit',
      day: a.day ?? today,
      time: a.time ?? '',
      durationMins: a.durationMins ?? 60,
      personIds: Array.isArray(a.personIds) ? [...a.personIds] : [],
      visibility: a.visibility ?? 'family',
      calTag: a.calTag ?? '',
      notes: a.notes ?? '',
      url: a.url ?? '',
      tripId: a.tripId ?? null,
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
    input[type='time'],
    input[type='url'],
    textarea {
      width: 100%;
      min-width: 0;
      background: var(--field-bg);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-input);
      padding: 11px 14px;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 16px;
      transition: border-color 200ms ease, background 200ms ease;
    }
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--teal-pebble);
      background: var(--glass-fill-strong);
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
      background: var(--field-bg);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-input);
      flex-wrap: wrap;
    }
    .seg button {
      background: transparent;
      color: var(--text-secondary);
      border: none;
      padding: 7px 14px;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      border-radius: calc(var(--radius-input) - 4px);
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
      background: var(--field-bg);
      border: 1px solid var(--glass-border);
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
      background: rgba(61, 155, 143, 0.18);
      border-color: rgba(61, 155, 143, 0.5);
      color: var(--text-primary);
    }
    .toggle-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      background: var(--field-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-input);
      cursor: pointer;
      user-select: none;
    }
    .toggle-row .body { flex: 1; }
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
    .toggle-row.on .toggle-switch { background: var(--teal-pebble); }
    .toggle-row.on .toggle-switch::after { transform: translateX(16px); }
    .time-detail { margin-top: 10px; }
    .dur-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .dur-chip {
      background: var(--field-bg);
      color: var(--text-secondary);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-pill);
      padding: 7px 14px;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
    }
    .dur-chip.on {
      background: rgba(61, 155, 143, 0.18);
      border-color: rgba(61, 155, 143, 0.5);
      color: var(--text-primary);
      font-weight: 600;
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
    .trip-note {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 12px 14px;
      background: rgba(61, 155, 143, 0.08);
      border: 1px solid rgba(61, 155, 143, 0.24);
      border-radius: var(--radius-input);
      font-size: 13px;
      color: var(--text-secondary);
      line-height: 1.45;
    }
  `;

  _set(field, value) {
    this._draft = { ...this._draft, [field]: value };
  }

  _toggleTime() {
    // Flip between untimed ('') and a default morning time.
    this._set('time', this._draft.time ? '' : '09:00');
  }

  _togglePerson(id) {
    const has = this._draft.personIds.includes(id);
    this._set(
      'personIds',
      has
        ? this._draft.personIds.filter((x) => x !== id)
        : [...this._draft.personIds, id],
    );
  }

  _onSave() {
    const d = this._draft;
    if (!d.title.trim()) {
      this._error = 'Give it a title.';
      return;
    }
    if (!d.day) {
      this._error = 'Pick a date.';
      return;
    }
    if (!this.familyId) {
      this._error = 'No family yet.';
      return;
    }
    const url = (d.url ?? '').trim();
    if (url && !/^https?:\/\//i.test(url)) {
      this._error = 'Links must start with http:// or https://';
      return;
    }
    this._error = '';
    const timed = Boolean(d.time);
    const detail = {
      id: d.id,
      title: d.title.trim(),
      type: d.type,
      day: d.day,
      time: timed ? d.time : null,
      durationMins: timed ? d.durationMins : null,
      personIds: [...d.personIds],
      visibility: d.visibility,
      calTag: d.calTag.trim() || null,
      notes: d.notes.trim() || null,
      url: url || null,
    };
    // Match iOS FamilyActivity: OMIT tripId entirely when standalone (the
    // calendar partitions standalone vs attached by `tripId == nil`); only
    // carry it when this is a trip-attached activity.
    if (d.tripId) detail.tripId = d.tripId;
    this.dispatchEvent(new CustomEvent('save', { detail }));
  }

  _onDelete() {
    if (!this._draft.id) return;
    if (!confirm('Delete this activity? This can\'t be undone.')) return;
    this.dispatchEvent(new CustomEvent('remove', { detail: { id: this._draft.id } }));
  }

  _onCancel() {
    this.dispatchEvent(new Event('cancel'));
  }

  render() {
    if (!this.open) return html``;
    const d = this._draft;
    const isEdit = Boolean(d.id);
    const tripAttached = Boolean(d.tripId);
    const timed = Boolean(d.time);
    const durations = [
      { v: 30, label: '30m' },
      { v: 60, label: '1h' },
      { v: 120, label: '2h' },
      { v: 180, label: '3h' },
      { v: 1440, label: 'All day' },
    ];
    return html`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>${isEdit ? 'Edit activity' : 'New activity'}</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <div class="field">
            <label>Type</label>
            <div class="seg">
              ${[
                { v: 'visit', label: 'Visit' },
                { v: 'meal', label: 'Meal' },
                { v: 'travel', label: 'Travel' },
                { v: 'note', label: 'Note' },
              ].map(
                (t) => html`
                  <button
                    class=${d.type === t.v ? 'active' : ''}
                    @click=${() => this._set('type', t.v)}
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
                placeholder=${this._titlePlaceholder(d.type)}
                .value=${d.title}
                @input=${(e) => this._set('title', e.target.value)}
              />
            </div>
            <div class="field">
              <label>Date</label>
              <input
                type="date"
                .value=${d.day}
                @input=${(e) => this._set('day', e.target.value)}
              />
            </div>
          </div>

          <div class="field">
            <div
              class="toggle-row ${timed ? 'on' : ''}"
              @click=${this._toggleTime}
            >
              <div class="body">
                <div class="name">${timed ? 'Has a specific time' : 'Anytime that day'}</div>
                <div class="desc">
                  ${timed
                    ? 'Shows at this time on the planner / week grid.'
                    : 'An all-day item, no fixed time.'}
                </div>
              </div>
              <div class="toggle-switch"></div>
            </div>
            ${timed
              ? html`
                  <div class="time-detail row-2">
                    <div class="field">
                      <label>Starts at</label>
                      <input
                        type="time"
                        .value=${d.time}
                        @input=${(e) => this._set('time', e.target.value || '09:00')}
                      />
                    </div>
                    <div class="field">
                      <label>Duration</label>
                      <div class="dur-chips">
                        ${durations.map(
                          (o) => html`
                            <button
                              class="dur-chip ${d.durationMins === o.v ? 'on' : ''}"
                              @click=${() => this._set('durationMins', o.v)}
                            >
                              ${o.label}
                            </button>
                          `,
                        )}
                      </div>
                    </div>
                  </div>
                `
              : ''}
          </div>

          ${tripAttached
            ? html`
                <div class="field">
                  <div class="trip-note">
                    <span aria-hidden="true">ⓘ</span>
                    <span>This is part of a trip, so it's visible to everyone on that trip.</span>
                  </div>
                </div>
              `
            : html`
                ${this._whosGoing(d)}
                <div class="field">
                  <label>Visibility</label>
                  <div class="seg">
                    ${['personal', 'family', 'extended'].map(
                      (v) => html`
                        <button
                          class=${d.visibility === v ? 'active' : ''}
                          @click=${() => this._set('visibility', v)}
                        >
                          ${v === 'personal'
                            ? 'Just Me'
                            : v === 'family'
                            ? 'Participants'
                            : 'Everyone'}
                        </button>
                      `,
                    )}
                  </div>
                </div>
              `}

          <div class="field">
            <label>Tag (optional)</label>
            <input
              type="text"
              placeholder="e.g. Daycare 2026"
              .value=${d.calTag}
              @input=${(e) => this._set('calTag', e.target.value)}
            />
          </div>

          <div class="field">
            <label>Link (optional)</label>
            <input
              type="url"
              placeholder="https://..."
              .value=${d.url}
              @input=${(e) => this._set('url', e.target.value)}
            />
          </div>

          <div class="field">
            <label>Notes</label>
            <textarea
              placeholder="Anything else worth noting…"
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
              ${this.busy ? 'Saving…' : isEdit ? 'Save changes' : 'Add activity'}
            </glass-button>
          </div>
        </glass-panel>
      </div>
    `;
  }

  /** Who's going — adults (real uids) + children (`child:{id}`, descriptive).
   *  Tagged people feed the audience (saveActivity folds them into
   *  attendees). Hidden when no members/children exist. */
  _whosGoing(d) {
    const adults = Array.isArray(this.members) ? this.members : [];
    const kids = Array.isArray(this.children) ? this.children : [];
    if (adults.length === 0 && kids.length === 0) return '';
    return html`
      <div class="field">
        <label>Who's going</label>
        <div class="people">
          ${adults.map(
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
          ${kids.map(
            (c) => html`
              <div
                class="person-chip ${d.personIds.includes('child:' + c.id) ? 'on' : ''}"
                @click=${() => this._togglePerson('child:' + c.id)}
              >
                <member-chip
                  .name=${c.name ?? ''}
                  .photo=${c.photoURL ?? ''}
                  size="22"
                ></member-chip>
                ${c.name ?? 'Child'}
              </div>
            `,
          )}
        </div>
      </div>
    `;
  }

  _titlePlaceholder(type) {
    if (type === 'visit') return 'e.g. Zoo morning';
    if (type === 'meal') return 'e.g. Pizza night';
    if (type === 'travel') return 'e.g. Drive to grandma\'s';
    return 'e.g. Pack swim bag';
  }
}

customElements.define('activity-form', ActivityForm);
