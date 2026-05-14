import { LitElement, html, css } from 'lit';
import './glass-panel.js';
import './glass-button.js';
import './member-chip.js';
import './date-range-picker.js';
import { dataStore } from '../services/data.js';

/**
 * Modal sheet for creating or editing a trip. Renders as a fullscreen
 * overlay with a centered glass panel.
 *
 * Properties:
 *   open       — boolean: visibility
 *   trip       — existing trip to edit (or null for create)
 *   members    — immediate family members for the attendee picker
 *   currentUid — signed-in user uid (pre-selected attendee on create)
 *   familyId   — required to save; if null we disable save
 *   busy       — true while a save/delete is in flight
 *
 * Events:
 *   save     — { detail: trip } — parent should write to Firestore
 *   remove   — { detail: { id } } — parent should delete
 *   cancel
 */
export class TripForm extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    trip: { type: Object },
    members: { type: Array },
    currentUid: { type: String },
    familyId: { type: String },
    busy: { type: Boolean },
    /** 'trip' (full form, default) or 'activity' (hide lodging + flight). */
    formMode: { type: String },
    /** family.subGroups map for the "visible to which sub-groups" picker. */
    subGroups: { type: Object },
    _draft: { state: true },
    _error: { state: true },
    _previewing: { state: true },
    _previewError: { state: true },
  };

  constructor() {
    super();
    this.open = false;
    this.trip = null;
    this.members = [];
    this.currentUid = '';
    this.familyId = '';
    this.busy = false;
    this.formMode = 'trip';
    this.subGroups = {};
    this._draft = this._blankDraft();
    this._error = '';
    this._previewing = false;
    this._previewError = '';
    this._previewDebounce = null;
    this._lastPreviewedUrl = '';
  }

  willUpdate(changed) {
    if (changed.has('trip') || changed.has('open')) {
      if (this.open) {
        this._draft = this._draftFromTrip(this.trip);
        // If we're opening an existing trip that has a lodging URL but
        // no cover image, auto-refetch the preview. Catches trips that
        // were created before the previewUrl Cloud Function was
        // deployed — opening the form now will populate the cover
        // image without the user re-typing the URL.
        if (this._draft.lodgingUrl && !this._draft.coverImage) {
          // Defer one frame so the form renders before the network call.
          requestAnimationFrame(() => this._runPreview(this._draft.lodgingUrl));
        }
      }
      this._error = '';
    }
  }

  _blankDraft() {
    const today = new Date().toISOString().slice(0, 10);
    return {
      id: null,
      title: '',
      location: '',
      start: today,
      end: today,
      visibility: 'family',
      attendees: this.currentUid ? [this.currentUid] : [],
      viewers: [],
      targetSubGroups: [],
      lodgingUrl: '',
      lodgingHost: '',
      lodgingTitle: '',
      flightAirline: '',
      flightNumber: '',
      flightDepartAirport: '',
      flightDepartTime: '',
      flightArriveAirport: '',
      flightArriveTime: '',
      notes: '',
    };
  }

  _draftFromTrip(trip) {
    if (!trip) return this._blankDraft();
    return {
      id: trip.id ?? null,
      title: trip.title ?? '',
      location: trip.location ?? '',
      start: trip.start ?? new Date().toISOString().slice(0, 10),
      end: trip.end ?? trip.start ?? new Date().toISOString().slice(0, 10),
      visibility: trip.visibility ?? 'family',
      attendees: Array.isArray(trip.attendees) ? [...trip.attendees] : [],
      viewers: Array.isArray(trip.viewers) ? [...trip.viewers] : [],
      targetSubGroups: Array.isArray(trip.targetSubGroups)
        ? [...trip.targetSubGroups]
        : [],
      lodgingUrl: trip.lodgingUrl ?? '',
      lodgingHost: trip.lodgingHost ?? '',
      lodgingTitle: trip.lodgingTitle ?? '',
      flightAirline: trip.flightAirline ?? '',
      flightNumber: trip.flightNumber ?? '',
      flightDepartAirport: trip.flightDepartAirport ?? '',
      flightDepartTime: trip.flightDepartTime ?? '',
      flightArriveAirport: trip.flightArriveAirport ?? '',
      flightArriveTime: trip.flightArriveTime ?? '',
      coverImage: trip.coverImage ?? '',
      notes: trip.notes ?? '',
    };
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }
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
      animation: fadeIn 200ms ease;
    }
    .sheet {
      position: relative;
      width: 100%;
      max-width: 760px;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 24px;
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
      line-height: 1;
    }
    .close:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .field {
      margin-bottom: 14px;
      min-width: 0;
    }
    label {
      display: block;
      font-size: 11.5px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    input[type='text'],
    input[type='url'],
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
      /* 16px prevents iOS Safari auto-zoom on focus. */
      font-size: 16px;
      transition: border-color 200ms ease, background 200ms ease;
    }
    input[type='date'] {
      /* Keep native picker icon from squeezing the displayed date. */
      font-variant-numeric: tabular-nums;
    }
    input:focus,
    textarea:focus {
      outline: none;
      border-color: var(--terracotta);
      background: rgba(255, 248, 235, 0.1);
    }
    input::placeholder,
    textarea::placeholder {
      color: var(--text-tertiary);
    }
    textarea {
      min-height: 64px;
      resize: vertical;
      font-family: var(--font-body);
    }
    /* Wider form unlocks more 2-column rows so the sheet is shorter. */
    .row-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .row-dates {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    @media (max-width: 560px) {
      .row-2,
      .row-dates {
        grid-template-columns: 1fr;
        gap: 0;
      }
    }
    @media (max-width: 560px) {
      :host {
        padding: 4vh 12px;
      }
      h2 {
        font-size: 21px;
      }
      .actions {
        flex-wrap: wrap;
      }
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
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
    }
    .attendees {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .att-chip {
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
      transition: all 180ms ease;
    }
    .att-chip:hover {
      border-color: var(--glass-border-strong);
      color: var(--text-primary);
    }
    .att-chip.on {
      background: rgba(61, 155, 143, 0.18);
      border-color: rgba(61, 155, 143, 0.5);
      color: var(--text-primary);
    }
    .actions {
      display: flex;
      gap: 10px;
      margin-top: 24px;
    }
    .actions .spacer {
      flex: 1;
    }
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
      margin-top: 12px;
    }
    .hint {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-top: 6px;
    }
    .preview {
      margin-top: 10px;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 12px;
      border-radius: var(--radius-tile);
      background: rgba(255, 248, 235, 0.05);
      border: 1px solid rgba(255, 248, 235, 0.12);
    }
    .preview .thumb {
      width: 64px;
      height: 48px;
      border-radius: 8px;
      background-size: cover;
      background-position: center;
      flex-shrink: 0;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    }
    .preview .meta {
      flex: 1;
      min-width: 0;
    }
    .preview .meta-title {
      font-size: 13px;
      font-weight: 500;
      color: var(--text-primary);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .preview .meta-host {
      font-size: 11.5px;
      color: var(--text-tertiary);
      margin-top: 2px;
    }
    .preview-loading,
    .preview-error {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-top: 6px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .preview-error {
      color: var(--rose-soft);
    }
    .spinner {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      border: 1.5px solid rgba(255, 248, 235, 0.3);
      border-top-color: var(--terracotta);
      animation: spin 700ms linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  `;

  _set(field, value) {
    this._draft = { ...this._draft, [field]: value };
  }

  _onLodgingChange(value) {
    this._set('lodgingUrl', value);
    this._previewError = '';
    // Debounce server call so we don't fire on every keystroke. 700ms
    // covers a paste + brief pause; user typing manually takes longer.
    if (this._previewDebounce) clearTimeout(this._previewDebounce);
    const url = value.trim();
    if (!url) {
      this._set('coverImage', '');
      this._set('lodgingHost', '');
      this._set('lodgingTitle', '');
      this._lastPreviewedUrl = '';
      return;
    }
    if (!/^https?:\/\//i.test(url)) return; // wait for a complete URL
    if (url === this._lastPreviewedUrl) return; // already fetched
    this._previewDebounce = setTimeout(() => this._runPreview(url), 700);
  }

  async _runPreview(url) {
    this._previewing = true;
    this._previewError = '';
    try {
      const result = await dataStore.previewUrl(url);
      if (!result) return;
      this._lastPreviewedUrl = url;
      this._draft = {
        ...this._draft,
        coverImage: result.image ?? this._draft.coverImage,
        lodgingHost: result.siteName ?? result.host ?? this._draft.lodgingHost,
        lodgingTitle: result.title ?? this._draft.lodgingTitle,
      };
    } catch (e) {
      console.warn('Preview failed:', e);
      // Surface only auth/invalid errors — silently skip unavailable so
      // an unreachable booking site doesn't block trip creation.
      if (e?.code === 'functions/unauthenticated') {
        this._previewError = 'Preview unavailable — sign in.';
      } else if (e?.code === 'functions/invalid-argument') {
        this._previewError = 'That URL doesn’t look right.';
      } else {
        this._previewError = 'Preview unavailable — paste it again or skip.';
      }
    } finally {
      this._previewing = false;
    }
  }

  _toggleAttendee(uid) {
    const has = this._draft.attendees.includes(uid);
    const attendees = has
      ? this._draft.attendees.filter((id) => id !== uid)
      : [...this._draft.attendees, uid];
    // Remove from viewers if newly attending (redundant once you're going).
    let viewers = this._draft.viewers ?? [];
    if (!has) viewers = viewers.filter((id) => id !== uid);
    this._draft = { ...this._draft, attendees, viewers };
  }

  _toggleViewer(uid) {
    if (this._draft.attendees.includes(uid)) return;
    const has = (this._draft.viewers ?? []).includes(uid);
    const viewers = has
      ? this._draft.viewers.filter((id) => id !== uid)
      : [...(this._draft.viewers ?? []), uid];
    this._set('viewers', viewers);
  }

  _toggleSubGroup(groupId) {
    const has = (this._draft.targetSubGroups ?? []).includes(groupId);
    const next = has
      ? this._draft.targetSubGroups.filter((id) => id !== groupId)
      : [...(this._draft.targetSubGroups ?? []), groupId];
    this._set('targetSubGroups', next);
  }

  _onSave() {
    const d = this._draft;
    if (!d.title.trim()) {
      this._error = 'Give the trip a title.';
      return;
    }
    if (!d.start || !d.end) {
      this._error = 'Set both start and end dates.';
      return;
    }
    if (d.end < d.start) {
      this._error = 'End date can’t be before start date.';
      return;
    }
    if (!this.familyId) {
      this._error = 'You need to be in a family first.';
      return;
    }
    this._error = '';
    this.dispatchEvent(
      new CustomEvent('save', {
        detail: { ...d, title: d.title.trim(), location: d.location.trim() },
      }),
    );
  }

  _onDelete() {
    if (!this._draft.id) return;
    if (!confirm('Delete this trip? This can’t be undone.')) return;
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
            <h2>${
              isEdit
                ? 'Edit activity'
                : this.formMode === 'activity'
                ? 'New group activity'
                : 'New family trip'
            }</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <div class="row-2">
            <div class="field">
              <label>Title</label>
              <input
                type="text"
                placeholder="e.g. Half-term in the Alps"
                .value=${d.title}
                @input=${(e) => this._set('title', e.target.value)}
              />
            </div>
            <div class="field">
              <label>Location</label>
              <input
                type="text"
                placeholder="City, country"
                .value=${d.location}
                @input=${(e) => this._set('location', e.target.value)}
              />
            </div>
          </div>

          <div class="field">
            <label>Dates</label>
            <date-range-picker
              .start=${d.start}
              .end=${d.end}
              @range-change=${(e) => {
                this._draft = {
                  ...this._draft,
                  start: e.detail.start,
                  end: e.detail.end || e.detail.start,
                };
              }}
            ></date-range-picker>
          </div>

          <div class=${this.formMode === 'activity' ? 'field' : 'row-2'}>
            <div class="field" style=${this.formMode === 'activity' ? 'margin-bottom:0;' : ''}>
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
            ${this.formMode !== 'activity'
              ? html`
                  <div class="field">
                    <label>Lodging URL</label>
                    <input
                      type="url"
                      placeholder="airbnb.com/… or booking.com/…"
                      .value=${d.lodgingUrl}
                      @input=${(e) => this._onLodgingChange(e.target.value)}
                    />
                    ${this._previewing
                      ? html`<div class="preview-loading">
                          <div class="spinner"></div>
                          Fetching preview…
                        </div>`
                      : ''}
                    ${this._previewError
                      ? html`<div class="preview-error">${this._previewError}</div>`
                      : ''}
                    ${!this._previewing && d.coverImage
                      ? html`<div class="preview">
                          <div class="thumb" style="background-image:url(${d.coverImage});"></div>
                          <div class="meta">
                            <div class="meta-title">${d.lodgingTitle || d.lodgingUrl}</div>
                            <div class="meta-host">${d.lodgingHost || ''}</div>
                          </div>
                        </div>`
                      : ''}
                  </div>
                `
              : ''}
          </div>

          <div class="field">
            <label>Who's going</label>
            <div class="attendees">
              ${this.members.map(
                (m) => html`
                  <div
                    class="att-chip ${d.attendees.includes(m.uid) ? 'on' : ''}"
                    @click=${() => this._toggleAttendee(m.uid)}
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

          ${d.visibility === 'extended' && Object.keys(this.subGroups ?? {}).length > 0
            ? html`
                <div class="field">
                  <label>Limit to sub-groups <span style="text-transform:none;font-weight:400;color:var(--text-tertiary);letter-spacing:0.01em;">(optional — leave empty to show to all extended)</span></label>
                  <div class="attendees">
                    ${Object.entries(this.subGroups).map(
                      ([gid, group]) => html`
                        <div
                          class="att-chip ${(d.targetSubGroups ?? []).includes(gid) ? 'on' : ''}"
                          @click=${() => this._toggleSubGroup(gid)}
                        >
                          ${group.name}
                          <span style="color:var(--text-tertiary);font-size:11px;margin-left:4px;">
                            ${(group.memberIds ?? []).length}
                          </span>
                        </div>
                      `,
                    )}
                  </div>
                </div>
              `
            : ''}

          <div class="field">
            <label>Also visible to <span style="text-transform:none;font-weight:400;color:var(--text-tertiary);letter-spacing:0.01em;">(without going)</span></label>
            <div class="attendees">
              ${this.members
                .filter((m) => !d.attendees.includes(m.uid))
                .map(
                  (m) => html`
                    <div
                      class="att-chip ${(d.viewers ?? []).includes(m.uid) ? 'on' : ''}"
                      @click=${() => this._toggleViewer(m.uid)}
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
              ${this.members.filter((m) => !d.attendees.includes(m.uid)).length === 0
                ? html`<span style="color:var(--text-tertiary);font-size:13px;">
                    Everyone is going — no extra viewers needed.
                  </span>`
                : ''}
            </div>
          </div>

          ${this.formMode === 'activity'
            ? ''
            : html`
          <fieldset class="flight-section">
            <legend>Flight (optional)</legend>
            <div class="row-2">
              <div class="field" style="margin-bottom:0;">
                <label>Airline</label>
                <input
                  type="text"
                  placeholder="e.g. Air France"
                  .value=${d.flightAirline}
                  @input=${(e) => this._set('flightAirline', e.target.value)}
                />
              </div>
              <div class="field" style="margin-bottom:0;">
                <label>Flight number</label>
                <input
                  type="text"
                  placeholder="AF1234"
                  .value=${d.flightNumber}
                  @input=${(e) => this._set('flightNumber', e.target.value)}
                />
              </div>
            </div>

            <div class="leg-label">Departure</div>
            <div class="row-3">
              <div class="field" style="margin-bottom:0;">
                <input
                  type="text"
                  placeholder="CDG"
                  maxlength="4"
                  .value=${d.flightDepartAirport}
                  @input=${(e) => this._set('flightDepartAirport', e.target.value)}
                />
              </div>
              <div class="field" style="margin-bottom:0;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary);font-size:18px;">→</div>
              <div class="field" style="margin-bottom:0;">
                <input
                  type="datetime-local"
                  .value=${d.flightDepartTime}
                  @input=${(e) => this._set('flightDepartTime', e.target.value)}
                />
              </div>
            </div>

            <div class="leg-label">Arrival</div>
            <div class="row-3">
              <div class="field" style="margin-bottom:0;">
                <input
                  type="text"
                  placeholder="NCE"
                  maxlength="4"
                  .value=${d.flightArriveAirport}
                  @input=${(e) => this._set('flightArriveAirport', e.target.value)}
                />
              </div>
              <div class="field" style="margin-bottom:0;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary);font-size:18px;">→</div>
              <div class="field" style="margin-bottom:0;">
                <input
                  type="datetime-local"
                  .value=${d.flightArriveTime}
                  @input=${(e) => this._set('flightArriveTime', e.target.value)}
                />
              </div>
            </div>
            <div class="hint">
              Auto-fill from confirmation email arrives in a later phase. Manual entry for now.
            </div>
          </fieldset>
          `}

          <div class="field">
            <label>Notes</label>
            <textarea
              placeholder="Reservations, packing list, who's bringing what…"
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
              ${this.busy ? 'Saving…' : isEdit ? 'Save changes' : 'Create activity'}
            </glass-button>
          </div>
        </glass-panel>
      </div>
    `;
  }
}

customElements.define('trip-form', TripForm);
