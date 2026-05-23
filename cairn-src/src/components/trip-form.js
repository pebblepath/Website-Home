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
    /** Extended-family ring members (in-laws / grandparents) — Cairn
     *  ring minus PP household. (Phase 2B: tagging no longer
     *  auto-elevates visibility — "Everyone" is an explicit pick;
     *  tagging anyone just adds them as a participant.) */
    extendedMembers: { type: Array },
    /** Flat-family Phase 2B — people across `connectedFamilyIds`
     *  families (`deriveConnectionMembers`). Rendered as a
     *  "Connections" group in the attendee picker. Tagging one adds
     *  them as a participant (they see it via Participants/Everyone);
     *  it does NOT force visibility. Empty until home-screen threads
     *  the prop (3b-ii). */
    connectionMembers: { type: Array },
    currentUid: { type: String },
    familyId: { type: String },
    busy: { type: Boolean },
    /** 'trip' (full form, default) or 'activity' (hide lodging + flight). */
    formMode: { type: String },
    /** family.subGroups map for the "visible to which sub-groups" picker. */
    subGroups: { type: Object },
    /** True when WE auto-elevated visibility to "extended" because an
     *  extended member was tagged — lets us revert to "family" if the
     *  last extended attendee is removed, and surfaces the inline note.
     *  Cleared the moment the user picks visibility manually. */
    _visibilityAutoExtended: { state: true },
    _draft: { state: true },
    _error: { state: true },
    _previewing: { state: true },
    _previewError: { state: true },
    _uploadingPreviewImage: { state: true },
    _previewImageError: { state: true },
    _showReturn: { state: true },
    _showOutboundDetails: { state: true },
    _showReturnDetails: { state: true },
    _showFlight: { state: true },
    // Flight-lookup state removed 2026-05-20 — aviationstack
    // free-tier coverage was too patchy to be useful; flight
    // section is manual entry only. `lookupFlight` Cloud Function
    // stays deployed but uninvoked. Re-add the state declarations
    // when/if a paid aviation API replaces it.
  };

  constructor() {
    super();
    this.open = false;
    this.trip = null;
    this.members = [];
    this.extendedMembers = [];
    this.connectionMembers = [];
    this._visibilityAutoExtended = false;
    this.currentUid = '';
    this.familyId = '';
    this.busy = false;
    this.formMode = 'trip';
    this.subGroups = {};
    this._draft = this._blankDraft();
    this._error = '';
    this._previewing = false;
    this._previewError = '';
    this._uploadingPreviewImage = false;
    this._previewImageError = '';
    this._previewDebounce = null;
    this._lastPreviewedUrl = '';
    this._showReturn = false;
    this._showOutboundDetails = false;
    this._showReturnDetails = false;
    this._showFlight = false;
    // (lookup-state instance vars removed 2026-05-20)
  }

  // `_runFlightLookup` removed 2026-05-20. aviationstack's free
  // tier coverage was too patchy to be useful — real flight
  // numbers returned "not found" often enough that the auto-fill
  // UX was net-negative. Manual entry only now; the
  // `lookupFlight` Cloud Function stays deployed but uninvoked
  // from any client. Re-add this method (and the state vars at
  // the top of the class) when/if a paid aviation API replaces
  // aviationstack.

  willUpdate(changed) {
    if (changed.has('trip') || changed.has('open')) {
      if (this.open) {
        this._draft = this._draftFromTrip(this.trip);
        // Fresh form session — clear the auto-elevate flag so the
        // "set to Extended because…" note never carries over from a
        // previously-edited trip. (An existing trip already saved as
        // Extended just shows Extended selected, no note — correct:
        // we didn't auto-elevate it this session.)
        this._visibilityAutoExtended = false;
        // If we're opening an existing trip that has a lodging URL but
        // no cover image, auto-refetch + auto-save. Catches trips
        // created before the previewUrl Cloud Function was deployed.
        if (this._draft.id && this._draft.lodgingUrl && !this._draft.coverImage) {
          requestAnimationFrame(() => this._autoRefreshPreview());
        }
        // Show return flight section by default if the trip already has
        // any return-flight data. Same for the airport disclosures.
        this._showReturn = Boolean(
          this._draft.returnFlightNumber ||
            this._draft.returnFlightDepartTime ||
            this._draft.returnFlightDepartAirport ||
            this._draft.returnFlightArriveAirport,
        );
        this._showOutboundDetails = Boolean(
          this._draft.flightDepartAirport || this._draft.flightArriveAirport,
        );
        this._showReturnDetails = Boolean(
          this._draft.returnFlightDepartAirport ||
            this._draft.returnFlightArriveAirport,
        );
        // Reveal the whole flight section by default when an existing
        // trip already carries flight data; otherwise keep it tucked
        // away behind the "Will you be flying?" toggle so the form
        // doesn't feel cluttered for activities without flights.
        this._showFlight = Boolean(
          this._draft.flightNumber ||
            this._draft.flightAirline ||
            this._draft.flightDepartTime ||
            this._draft.flightDepartAirport ||
            this._draft.flightArriveAirport ||
            this._showReturn,
        );
      }
      this._error = '';
    }
  }

  /**
   * Existing-trip backfill: fetches the og:image and silently writes
   * coverImage/lodgingHost/lodgingTitle to the trip doc, so the dashboard
   * card updates without the user pressing Save. Different from
   * `_runPreview` which only updates the in-memory draft (used during
   * the user typing a new URL — they'll Save manually after editing
   * other fields).
   */
  async _autoRefreshPreview() {
    const url = this._draft.lodgingUrl;
    const tripId = this._draft.id;
    if (!url || !tripId || this._previewing) return;
    this._previewing = true;
    this._previewError = '';
    try {
      const result = await dataStore.previewUrl(url);
      if (!result?.image) {
        // Function ran but the URL didn't yield an og:image.
        this._previewError = 'No preview image found for this URL.';
        return;
      }
      const patch = {
        coverImage: result.image,
        lodgingHost: result.siteName ?? result.host ?? this._draft.lodgingHost ?? '',
        lodgingTitle: result.title ?? this._draft.lodgingTitle ?? '',
      };
      this._draft = { ...this._draft, ...patch };
      this._lastPreviewedUrl = url;
      // Silent partial-update — trip-card on the dashboard re-renders
      // via the live Firestore listener as soon as this lands.
      try {
        await dataStore.saveTrip({ id: tripId, ...patch });
      } catch (saveErr) {
        console.warn('Auto-save cover failed:', saveErr);
      }
    } catch (e) {
      console.warn('Auto preview failed:', e);
      this._previewError =
        e?.code === 'functions/unauthenticated'
          ? 'Preview needs you to be signed in.'
          : 'Preview unavailable — try the Refresh button.';
    } finally {
      this._previewing = false;
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
      previewImage: '',
      flightAirline: '',
      flightNumber: '',
      flightDepartAirport: '',
      flightDepartTime: '',
      flightArriveAirport: '',
      flightArriveTime: '',
      returnFlightAirline: '',
      returnFlightNumber: '',
      returnFlightDepartAirport: '',
      returnFlightDepartTime: '',
      returnFlightArriveAirport: '',
      returnFlightArriveTime: '',
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
      returnFlightAirline: trip.returnFlightAirline ?? '',
      returnFlightNumber: trip.returnFlightNumber ?? '',
      returnFlightDepartAirport: trip.returnFlightDepartAirport ?? '',
      returnFlightDepartTime: trip.returnFlightDepartTime ?? '',
      returnFlightArriveAirport: trip.returnFlightArriveAirport ?? '',
      returnFlightArriveTime: trip.returnFlightArriveTime ?? '',
      coverImage: trip.coverImage ?? '',
      previewImage: trip.previewImage ?? '',
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
      font-size: 13px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: -0.005em;
      margin-bottom: 6px;
    }
    input[type='text'],
    input[type='url'],
    input[type='date'],
    textarea {
      width: 100%;
      min-width: 0;
      min-height: 44px;
      box-sizing: border-box;
      /* Themeable: the old light-on-dark rgba border/bg was invisible
         on the light sand surface — fields had no visible outline.
         --glass-border-strong reads clearly in BOTH themes. */
      background: var(--field-bg);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-input);
      padding: 10px 14px;
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
      background: var(--glass-fill-strong);
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
    /* Top-of-form grid: Title + Dates on the left, Location + Visibility
       + Who's going + Lodging URL on the right. Keeps the date-picker
       size in proportion with the title field above, and tucks all the
       smaller inputs into the right column so the form reads as two
       balanced stacks. Falls back to a single column on phones. */
    .form-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 20px 24px;
      margin-bottom: 4px;
    }
    .form-col {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .form-col .field {
      margin-bottom: 14px;
    }
    .form-col .field:last-child {
      margin-bottom: 0;
    }
    @media (max-width: 560px) {
      .row-2,
      .row-dates {
        grid-template-columns: 1fr;
        gap: 0;
      }
      .form-grid {
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
      /* Single-row, uniform-shape action buttons on mobile. All three
         (Delete / Cancel / Save) become equal-width pills with the
         exact same height + radius — Delete uses a destructive outline
         tint, Cancel the standard ghost, Save the primary fill, but
         the silhouette matches across all three. */
      .actions {
        flex-wrap: nowrap;
        gap: 8px;
      }
      .actions .spacer {
        display: none;
      }
      .actions .delete-btn,
      .actions glass-button {
        flex: 1 1 0;
        min-width: 0;
        height: 44px;
        padding: 0;
        font-size: 13.5px;
        text-align: center;
        white-space: nowrap;
        border-radius: var(--radius-pill);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .save-long { display: none; }
      .save-short { display: inline; }
    }
    /* Segmented Visibility control — matches the text input shape
       (14px radius, 44px min-height) so the trip-form fields all share
       the same silhouette. The active segment is still pill-radius
       inside the rounded-rect frame for affordance. */
    .seg {
      display: inline-flex;
      width: 100%;
      box-sizing: border-box;
      min-height: 44px;
      padding: 3px;
      gap: 2px;
      background: var(--field-bg);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-input);
    }
    .seg button {
      flex: 1;
      background: transparent;
      color: var(--text-secondary);
      border: none;
      padding: 0 12px;
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
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
    }
    .attendees {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .att-group-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-tertiary);
      margin: 12px 0 6px;
    }
    .vis-note {
      margin-top: 8px;
      font-size: 12px;
      line-height: 1.45;
      color: var(--text-secondary);
      background: rgba(198, 123, 92, 0.10);
      border: 1px solid rgba(198, 123, 92, 0.28);
      border-radius: 10px;
      padding: 8px 10px;
    }
    .vis-note strong { color: var(--text-primary); font-weight: 700; }
    .att-chip {
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
    /* Two labels on the Save button: full copy on desktop, terse copy
       on mobile (so the three single-row pills fit even at narrow
       widths). The mobile media-query below flips the visibility. */
    .save-short { display: none; }
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
    .preview-refresh-btn {
      flex-shrink: 0;
      width: 44px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.16);
      border-radius: var(--radius-input);
      color: var(--text-secondary);
      font-size: 18px;
      cursor: pointer;
      transition: background 180ms ease, color 180ms ease, transform 220ms ease;
    }
    .preview-refresh-btn:hover:not(:disabled) {
      background: rgba(255, 248, 235, 0.12);
      color: var(--text-primary);
    }
    .preview-refresh-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      animation: spin 1s linear infinite;
    }
    /* Preview-image (new field — takes precedence over lodging cover) */
    .preview-image-help {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-bottom: 8px;
      line-height: 1.4;
    }
    .preview-image-controls {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .preview-upload-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      font-size: 13px;
      font-weight: 600;
      color: var(--teal-pebble);
      background: rgba(61, 155, 143, 0.10);
      border: 1px solid rgba(61, 155, 143, 0.30);
      border-radius: 999px;
      cursor: pointer;
      transition: background 180ms ease;
    }
    .preview-upload-btn:hover {
      background: rgba(61, 155, 143, 0.18);
    }
    .preview-upload-btn[data-busy] {
      opacity: 0.7;
      cursor: progress;
    }
    .preview-upload-btn .upload-icon {
      font-size: 14px;
    }
    .preview-clear-btn {
      background: transparent;
      border: none;
      color: var(--text-tertiary);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      padding: 4px 8px;
    }
    .preview-clear-btn:hover { color: var(--text-secondary); }
    .preview-image-thumb {
      margin-top: 10px;
      width: 100%;
      height: 120px;
      border-radius: 10px;
      background-size: cover;
      background-position: center;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
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

    /* Flight section is collapsible behind a "Will you be flying?"
       toggle — most activities don't involve a flight so the section
       stays hidden until the user opts in. No fieldset border;
       contained by the form's natural rhythm. */
    .flight-section {
      border: none;
      padding: 0;
      margin: 6px 0 14px;
    }
    .flight-section legend {
      display: none;
    }
    .flight-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 12px 0;
      background: transparent;
      border: none;
      cursor: pointer;
      font: inherit;
    }
    .flight-toggle .ft-label {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: 0.02em;
    }
    .flight-toggle .ft-caret {
      color: var(--text-tertiary);
      font-size: 14px;
      transition: transform 200ms ease;
    }
    .flight-toggle[aria-expanded="true"] .ft-caret {
      transform: rotate(180deg);
    }
    .flight-toggle:hover .ft-label {
      color: var(--text-primary);
    }
    .flight-body {
      padding-top: 4px;
    }
    .flight-leg {
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px dashed rgba(255, 248, 235, 0.1);
    }
    .flight-leg:last-of-type {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .leg-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .leg-name {
      font-family: var(--font-body);
      font-size: 13px;
      font-weight: 600;
      color: var(--text-primary);
    }
    .leg-disclosure {
      background: transparent;
      border: none;
      color: var(--text-tertiary);
      font: inherit;
      font-size: 12px;
      cursor: pointer;
      padding: 2px 4px;
    }
    .leg-disclosure:hover {
      color: var(--text-secondary);
    }
    .row-flight {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 14px;
    }
    @media (max-width: 560px) {
      .row-flight {
        grid-template-columns: 1fr;
        gap: 0;
      }
    }
    .row-airports {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 10px;
      align-items: center;
      margin-top: 10px;
    }
    .row-airports .arrow {
      color: var(--text-tertiary);
      font-size: 18px;
      text-align: center;
    }
    .return-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 8px;
      background: transparent;
      border: 1px dashed rgba(255, 248, 235, 0.22);
      color: var(--text-secondary);
      border-radius: var(--radius-pill);
      padding: 6px 12px;
      font: inherit;
      font-size: 13px;
      cursor: pointer;
      transition: border-color 180ms ease, color 180ms ease;
    }
    .return-toggle:hover {
      border-color: rgba(255, 248, 235, 0.4);
      color: var(--text-primary);
    }
    .return-remove {
      background: transparent;
      border: none;
      color: var(--rose-soft);
      font: inherit;
      font-size: 12px;
      cursor: pointer;
      padding: 0;
    }
    .return-remove:hover {
      text-decoration: underline;
    }
    .lookup-status {
      margin-top: 8px;
      font-size: 12px;
      color: var(--text-tertiary);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .lookup-ok { color: var(--teal-pebble); }
    .lookup-error { color: var(--rose-soft); }
  `;

  _set(field, value) {
    this._draft = { ...this._draft, [field]: value };
  }

  /** Display + persist precedence: pasted URL beats uploaded Storage
   *  URL beats nothing. Mirrors iOS TripFormView.resolvedPreviewImage. */
  _resolvedPreviewImage() {
    const url = (this._draft.previewImage || '').trim();
    if (url) return url;
    if (this._uploadedPreviewImageUrl) return this._uploadedPreviewImageUrl;
    return '';
  }

  /** File input handler — upload to Storage, stash the returned URL on
   *  _uploadedPreviewImageUrl. Save path serialises _resolvedPreviewImage()
   *  onto trip.previewImage. */
  async _onPreviewImageUpload(e) {
    const file = e.target?.files?.[0];
    if (!file) return;
    this._previewImageError = '';
    this._uploadingPreviewImage = true;
    try {
      const url = await dataStore.uploadTripPreview(file);
      this._uploadedPreviewImageUrl = url;
      // If the URL field is empty, mirror the uploaded URL into it
      // so the field stays a single source of truth on save. (Save
      // path reads trip.previewImage directly, so this also keeps
      // the form's serialisation consistent.)
      if (!(this._draft.previewImage || '').trim()) {
        this._set('previewImage', url);
      }
    } catch (err) {
      console.warn('Preview image upload failed:', err);
      this._previewImageError = err?.message || 'Upload failed.';
    } finally {
      this._uploadingPreviewImage = false;
      // Reset the input so the same file can be re-picked if needed.
      e.target.value = '';
    }
  }

  _clearPreviewImage() {
    this._set('previewImage', '');
    this._uploadedPreviewImageUrl = '';
    this._previewImageError = '';
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

  _isExtendedUid(uid) {
    return (this.extendedMembers ?? []).some((m) => m.uid === uid);
  }

  /** Explicit visibility pick (segmented control). A manual choice
   *  always wins — clear the auto-elevate flag so we never silently
   *  revert a visibility the user deliberately set. */
  _setVisibility(v) {
    this._visibilityAutoExtended = false;
    this._set('visibility', v);
  }

  _toggleAttendee(uid) {
    const has = this._draft.attendees.includes(uid);
    const attendees = has
      ? this._draft.attendees.filter((id) => id !== uid)
      : [...this._draft.attendees, uid];
    // Remove from viewers if newly attending (redundant once you're going).
    let viewers = this._draft.viewers ?? [];
    if (!has) viewers = viewers.filter((id) => id !== uid);

    // Phase 2B (2026-05-18): tagging NO LONGER auto-elevates visibility.
    // A tagged participant is visible because `computeVisibleTo`
    // includes attendees in Participants ("family") + Everyone
    // ("extended"). "Everyone" stays a deliberate, separate pick — so
    // inviting one in-law/connection no longer broadcasts to the whole
    // ring. Visibility is purely the user's explicit choice.
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

  // (`_renderFlightLookupStatus` removed 2026-05-20 with the
  //  lookup itself. No status chrome needed for manual entry.)

  _onSave() {
    const d = this._draft;
    if (!d.title.trim()) {
      this._error = 'Give the trip a title.';
      return;
    }
    if (!d.start) {
      this._error = 'Pick a start date.';
      return;
    }
    // Single-day activity: when the user picks a start but no end,
    // treat both endpoints as the same day so the save can proceed.
    const end = d.end || d.start;
    if (end < d.start) {
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
        detail: { ...d, end, title: d.title.trim(), location: d.location.trim() },
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

          <div class="form-grid">
            <div class="form-col">
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
                <label>Dates</label>
                <date-range-picker
                  .start=${d.start}
                  .end=${d.end}
                  @range-change=${(e) => {
                    // Don't coerce end → start when the picker emits
                    // an empty end; that snaps both endpoints to the
                    // same day and breaks the hover-preview state.
                    this._draft = {
                      ...this._draft,
                      start: e.detail.start,
                      end: e.detail.end ?? '',
                    };
                  }}
                ></date-range-picker>
              </div>
            </div>
            <div class="form-col">
              <div class="field">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="City, country"
                  .value=${d.location}
                  @input=${(e) => this._set('location', e.target.value)}
                />
              </div>
              <div class="field">
                <label>Visibility</label>
                <div class="seg">
                  ${['personal', 'family', 'extended'].map(
                    (v) => html`
                      <button
                        class=${d.visibility === v ? 'active' : ''}
                        @click=${() => this._setVisibility(v)}
                      >
                        ${v === 'personal' ? 'Just Me' : v === 'family' ? 'Participants' : 'Everyone'}
                      </button>
                    `,
                  )}
                </div>
                <!-- Phase 2B: visibility auto-elevate removed; the
                     vis-note no longer applies. -->
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
                ${(this.extendedMembers ?? []).length > 0
                  ? html`
                      <div class="att-group-label">My connections</div>
                      <div class="attendees">
                        ${this.extendedMembers.map(
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
                    `
                  : ''}
                ${(this.connectionMembers ?? []).length > 0
                  ? html`
                      <div class="att-group-label">Connections</div>
                      <div class="attendees">
                        ${this.connectionMembers.map(
                          (m) => html`
                            <div
                              class="att-chip ${d.attendees.includes(m.uid) ? 'on' : ''}"
                              @click=${() => this._toggleAttendee(m.uid)}
                              title=${m.familyName ?? ''}
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
                    `
                  : ''}
              </div>
              <div class="field">
                <label>Preview image</label>
                <div class="preview-image-help">
                  Shown as the cover instead of the lodging photo. Upload one, or paste an image URL.
                </div>
                <div class="preview-image-controls">
                  <label class="preview-upload-btn" ?data-busy=${this._uploadingPreviewImage}>
                    ${this._uploadingPreviewImage
                      ? html`<span class="spinner"></span> Uploading…`
                      : html`<span class="upload-icon">📷</span> Upload image`}
                    <input
                      type="file"
                      accept="image/*"
                      @change=${(e) => this._onPreviewImageUpload(e)}
                      ?disabled=${this._uploadingPreviewImage}
                      hidden
                    />
                  </label>
                  ${this._resolvedPreviewImage()
                    ? html`<button
                        type="button"
                        class="preview-clear-btn"
                        @click=${() => this._clearPreviewImage()}
                      >
                        Clear
                      </button>`
                    : ''}
                </div>
                <div style="display:flex;gap:8px;align-items:stretch;margin-top:8px;">
                  <input
                    type="url"
                    placeholder="Or paste an image URL"
                    .value=${d.previewImage}
                    @input=${(e) => this._set('previewImage', e.target.value)}
                    style="flex:1;min-width:0;"
                  />
                </div>
                ${this._previewImageError
                  ? html`<div class="preview-error">${this._previewImageError}</div>`
                  : ''}
                ${this._resolvedPreviewImage()
                  ? html`<div class="preview-image-thumb" style="background-image:url(${this._resolvedPreviewImage()});"></div>`
                  : ''}
              </div>
              ${this.formMode !== 'activity'
                ? html`
                    <div class="field">
                      <label>Lodging URL</label>
                      <div style="display:flex;gap:8px;align-items:stretch;">
                        <input
                          type="url"
                          placeholder="airbnb.com/… or booking.com/…"
                          .value=${d.lodgingUrl}
                          @input=${(e) => this._onLodgingChange(e.target.value)}
                          style="flex:1;min-width:0;"
                        />
                        ${d.lodgingUrl
                          ? html`<button
                              type="button"
                              class="preview-refresh-btn"
                              ?disabled=${this._previewing}
                              title="Re-fetch preview"
                              @click=${() => this._runPreview(d.lodgingUrl)}
                            >
                              ↻
                            </button>`
                          : ''}
                      </div>
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

          <!-- "Also visible to" picker removed — the Visibility toggle
               above (Just me / Family / Extended) already controls the
               read audience. The viewers array is preserved on the trip
               doc for old data round-tripping, but we don't surface it
               in the iOS-parity form anymore. -->


          ${this.formMode === 'activity'
            ? ''
            : html`
          <fieldset class="flight-section">
            <legend>Flight (optional)</legend>
            <button
              type="button"
              class="flight-toggle"
              aria-expanded=${this._showFlight ? 'true' : 'false'}
              @click=${() => (this._showFlight = !this._showFlight)}
            >
              <span class="ft-label">Will you be flying?</span>
              <span class="ft-caret" aria-hidden="true">⌄</span>
            </button>
            ${this._showFlight
              ? html`<div class="flight-body">

            <div class="flight-leg">
              <div class="leg-head">
                <span class="leg-name">Outbound</span>
                <button
                  type="button"
                  class="leg-disclosure"
                  @click=${() => (this._showOutboundDetails = !this._showOutboundDetails)}
                >
                  ${this._showOutboundDetails ? '− Hide airports' : '+ Airports'}
                </button>
              </div>
              <div class="row-flight">
                <div class="field" style="margin-bottom:0;">
                  <label>Flight #</label>
                  <input
                    type="text"
                    placeholder="AF1234"
                    .value=${d.flightNumber}
                    @input=${(e) => this._set('flightNumber', e.target.value)}
                  />
                </div>
                <div class="field" style="margin-bottom:0;">
                  <label>Departure</label>
                  <input
                    type="datetime-local"
                    .value=${d.flightDepartTime}
                    @input=${(e) => this._set('flightDepartTime', e.target.value)}
                  />
                </div>
              </div>
              ${this._showOutboundDetails
                ? html`
                    <div class="row-airports">
                      <input
                        type="text"
                        placeholder="From (CDG)"
                        maxlength="4"
                        .value=${d.flightDepartAirport}
                        @input=${(e) => this._set('flightDepartAirport', e.target.value)}
                      />
                      <span class="arrow">→</span>
                      <input
                        type="text"
                        placeholder="To (NCE)"
                        maxlength="4"
                        .value=${d.flightArriveAirport}
                        @input=${(e) => this._set('flightArriveAirport', e.target.value)}
                      />
                    </div>
                  `
                : ''}
            </div>

            ${this._showReturn
              ? html`
                  <div class="flight-leg">
                    <div class="leg-head">
                      <span class="leg-name">Return</span>
                      <div style="display:flex;gap:10px;align-items:baseline;">
                        <button
                          type="button"
                          class="leg-disclosure"
                          @click=${() =>
                            (this._showReturnDetails = !this._showReturnDetails)}
                        >
                          ${this._showReturnDetails ? '− Hide airports' : '+ Airports'}
                        </button>
                        <button
                          type="button"
                          class="return-remove"
                          @click=${() => {
                            this._showReturn = false;
                            this._draft = {
                              ...this._draft,
                              returnFlightAirline: '',
                              returnFlightNumber: '',
                              returnFlightDepartAirport: '',
                              returnFlightDepartTime: '',
                              returnFlightArriveAirport: '',
                              returnFlightArriveTime: '',
                            };
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div class="row-flight">
                      <div class="field" style="margin-bottom:0;">
                        <label>Flight #</label>
                        <input
                          type="text"
                          placeholder="AF1235"
                          .value=${d.returnFlightNumber}
                          @input=${(e) =>
                            this._set('returnFlightNumber', e.target.value)}
                        />
                      </div>
                      <div class="field" style="margin-bottom:0;">
                        <label>Departure</label>
                        <input
                          type="datetime-local"
                          .value=${d.returnFlightDepartTime}
                          @input=${(e) =>
                            this._set('returnFlightDepartTime', e.target.value)}
                        />
                      </div>
                    </div>
                    ${this._showReturnDetails
                      ? html`
                          <div class="row-airports">
                            <input
                              type="text"
                              placeholder="From (NCE)"
                              maxlength="4"
                              .value=${d.returnFlightDepartAirport}
                              @input=${(e) =>
                                this._set(
                                  'returnFlightDepartAirport',
                                  e.target.value,
                                )}
                            />
                            <span class="arrow">→</span>
                            <input
                              type="text"
                              placeholder="To (CDG)"
                              maxlength="4"
                              .value=${d.returnFlightArriveAirport}
                              @input=${(e) =>
                                this._set(
                                  'returnFlightArriveAirport',
                                  e.target.value,
                                )}
                            />
                          </div>
                        `
                      : ''}
                  </div>
                `
              : html`
                  <button
                    type="button"
                    class="return-toggle"
                    @click=${() => (this._showReturn = true)}
                  >
                    + Add return flight
                  </button>
                `}
              </div>`
              : ''}
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
              <span class="save-long">${this.busy ? 'Saving…' : isEdit ? 'Save changes' : 'Create activity'}</span>
              <span class="save-short">${this.busy ? 'Saving…' : isEdit ? 'Save' : 'Create'}</span>
            </glass-button>
          </div>
        </glass-panel>
      </div>
    `;
  }
}

customElements.define('trip-form', TripForm);
