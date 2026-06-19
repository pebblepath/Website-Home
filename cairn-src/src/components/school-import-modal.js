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
    knownTags: { type: Array }, // existing calendar tags, for quick reuse
    children: { type: Array }, // for the report-review child picker
    // True only for a parent-of-a-child persona. Reports are parents-only
    // (rule isChildParent), so non-parents (extended members, read-only
    // viewers) neither see "report card" in the copy nor reach report-review.
    canSaveReports: { type: Boolean },
    // pick | working | review | report-review | booking-soon | done | error
    _phase: { state: true },
    _events: { state: true },
    _err: { state: true },
    _count: { state: true },
    _category: { state: true }, // plan | activity | celebration
    _tag: { state: true }, // optional custom calendar tag
    _documentKind: { state: true }, // calendar | booking | report | unknown
    _report: { state: true }, // the report payload (or null)
    _rChildId: { state: true },
    _rTitle: { state: true },
    _rPeriod: { state: true },
    _rSummary: { state: true },
    _rKeepFile: { state: true },
    _booking: { state: true }, // the CF booking payload (or null)
    _bRows: { state: true }, // editable timeline drafts
    _bTarget: { state: true }, // { type:'existing'|'newTrip'|'calendarOnly', tripId? }
  };

  constructor() {
    super();
    this.open = false;
    this.knownTags = [];
    this.children = [];
    this.canSaveReports = false;
    this._reset();
  }

  _reset() {
    this._phase = 'pick';
    this._events = [];
    this._err = '';
    this._count = 0;
    this._category = 'activity'; // U7 7-A — default: imported dates land as Activities
    this._tag = '';
    // Smart Upload v2 — classify state.
    this._documentKind = '';
    this._report = null;
    this._file = null; // held so a report can keep the original file
    this._rChildId = null;
    this._rTitle = '';
    this._rPeriod = '';
    this._rSummary = '';
    this._rKeepFile = true;
    this._booking = null;
    this._bRows = [];
    this._bTarget = { type: 'calendarOnly' };
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
    this._file = file; // held so a report can keep the original file
    this._phase = 'working';
    this._err = '';
    try {
      const { storagePath, fileType } =
        await dataStore.uploadSchoolCalendar(file);
      // Smart Upload v2 — ONE CF classifies the upload + returns a kind.
      const res = await dataStore.classifyUpload(storagePath, fileType);
      const kind = res?.documentKind ?? 'unknown';
      this._documentKind = kind;
      if (kind === 'calendar') {
        const events = Array.isArray(res.events) ? res.events : [];
        if (!events.length) {
          this._phase = 'error';
          this._err =
            "Couldn't find any dated events in that file. Try a clearer PDF or a screenshot of the calendar.";
          return;
        }
        this._events = events
          .map((ev) => ({ ...ev, _sel: true }))
          .sort((a, b) => String(a.date).localeCompare(String(b.date)));
        this._phase = 'review';
      } else if (kind === 'report') {
        if (!this.canSaveReports) {
          this._phase = 'error';
          this._err =
            "Report cards can only be saved to a child's profile by their parent.";
          return;
        }
        const r = res.report ?? {};
        if (!String(r.summary ?? '').trim()) {
          this._phase = 'error';
          this._err =
            "I couldn't pull a summary out of that report. Try a clearer photo or PDF.";
          return;
        }
        this._report = r;
        this._rTitle = r.title ?? 'Report';
        this._rPeriod = r.periodLabel ?? '';
        this._rSummary = r.summary ?? '';
        this._rKeepFile = true;
        this._rChildId = this._defaultReportChildId(r);
        this._phase = 'report-review';
      } else if (kind === 'booking') {
        const b = res.booking ?? {};
        this._booking = b;
        this._bRows = (Array.isArray(b.timeline) ? b.timeline : []).map((t) => ({
          day: t.day ?? '',
          time: t.time ?? '',
          durationMins: Number.isFinite(t.durationMins) ? t.durationMins : null,
          title: t.title ?? '',
          type: t.type ?? 'note',
          notes: t.notes ?? '',
          _sel: true,
        }));
        // Default target: the CF's pre-ranked match, else a new trip if it
        // proposed one, else the loose calendar.
        if (b.suggestedTripId) {
          this._bTarget = { type: 'existing', tripId: b.suggestedTripId };
        } else if (b.newTripProposal) {
          this._bTarget = { type: 'newTrip' };
        } else {
          this._bTarget = { type: 'calendarOnly' };
        }
        this._phase = 'booking-review';
      } else {
        this._phase = 'error';
        this._err = res?.reason
          ? `I couldn't read that as a calendar, booking, or report. ${res.reason}`
          : "I couldn't tell what that file is. Try a clearer photo, or a calendar, a booking confirmation, or a report.";
      }
    } catch (err) {
      console.error('smart upload failed:', err);
      this._phase = 'error';
      this._err =
        err?.code === 'functions/permission-denied'
          ? "You're not a member of this family."
          : err?.code === 'storage/unauthorized'
            ? 'The upload rule needs publishing. Ask the team to deploy storage.rules.'
            : err?.code === 'functions/not-found' ||
                err?.code === 'functions/internal'
              ? "The importer isn't available right now. Try again in a moment."
              : (err?.message ?? 'Something went wrong. Try again.');
    }
  }

  _defaultReportChildId(r) {
    const kids = this.children ?? [];
    if (!kids.length) return null;
    const guess = String(r?.childNameGuess ?? '').trim().toLowerCase();
    if (guess) {
      const match = kids.find((c) => {
        const n = String(c.name ?? '').toLowerCase();
        return n === guess || guess.includes(n);
      });
      if (match) return match.id;
    }
    return kids[0]?.id ?? null;
  }

  async _confirmReport() {
    if (
      !this._rChildId ||
      !this._rTitle.trim() ||
      !this._rSummary.trim()
    )
      return;
    this._phase = 'working';
    try {
      await dataStore.importReport(
        this._rChildId,
        {
          title: this._rTitle,
          source: this._report?.source,
          periodLabel: this._rPeriod,
          reportDate: this._report?.reportDate,
          summary: this._rSummary,
          highlights: this._report?.highlights,
        },
        this._rKeepFile ? this._file : null,
      );
      this._count = 1;
      this._phase = 'done';
      toast('Report saved to the profile.');
      this.dispatchEvent(new CustomEvent('added', { detail: 1 }));
    } catch (err) {
      console.error('importReport failed:', err);
      this._phase = 'error';
      this._err =
        err?.code === 'permission-denied'
          ? "Couldn't save. You may not have permission."
          : (err?.message ?? "Couldn't save the report. Try again.");
    }
  }

  // ── Booking review (P3) ──────────────────────────────────────────
  _patchB(i, key, val) {
    const next = this._bRows.slice();
    next[i] = { ...next[i], [key]: val };
    this._bRows = next;
  }

  _bSpan() {
    const p = this._booking?.newTripProposal;
    if (p?.start && p?.end) return { start: p.start, end: p.end };
    const days = this._bRows
      .map((r) => r.day)
      .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(String(d ?? '')))
      .sort();
    return { start: days[0] ?? '', end: days[days.length - 1] ?? days[0] ?? '' };
  }

  _matchingTrips() {
    const { start, end } = this._bSpan();
    return start ? dataStore.matchingTrips(start, end) : [];
  }

  _prettyDay(ymd) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(ymd ?? ''))) return ymd ?? '';
    const [y, m, d] = ymd.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  }

  _tripDateLabel(t) {
    const s = this._prettyDay(t.start);
    if (t.end && t.end !== t.start) return `${s} to ${this._prettyDay(t.end)}`;
    return s;
  }

  _bookingNoun(type) {
    return type === 'flight'
      ? 'flight booking'
      : type === 'hotel'
        ? 'hotel booking'
        : type === 'car'
          ? 'car rental'
          : type === 'restaurant'
            ? 'restaurant reservation'
            : 'booking';
  }

  _bHeaderText() {
    const b = this._booking ?? {};
    let s = `I found a ${this._bookingNoun(b.bookingType)}`;
    if (b.location) s += ` in ${b.location}`;
    const { start, end } = this._bSpan();
    if (start) {
      s += ` for ${this._prettyDay(start)}`;
      if (end && end !== start) s += ` to ${this._prettyDay(end)}`;
    }
    return `${s}. Where should it go?`;
  }

  _bFillPreview() {
    if (this._bTarget?.type !== 'existing') return [];
    const trip = (dataStore.state.trips ?? []).find(
      (t) => t.id === this._bTarget.tripId,
    );
    if (!trip) return [];
    const b = this._booking ?? {};
    const willFill = (existing, incoming) => !existing && !!incoming;
    const out = [];
    if (
      willFill(trip.lodgingTitle, b.lodging?.title) ||
      willFill(trip.lodgingUrl, b.lodging?.url)
    )
      out.push('Lodging');
    if (
      willFill(trip.flightAirline, b.flight?.airline) ||
      willFill(trip.flightDepartAirport, b.flight?.departAirport)
    )
      out.push('Flight');
    if (
      willFill(trip.returnFlightAirline, b.returnFlight?.airline) ||
      willFill(trip.returnFlightDepartAirport, b.returnFlight?.departAirport)
    )
      out.push('Return flight');
    return out;
  }

  _bAddLabel() {
    if (this._bTarget?.type === 'newTrip') return 'Create trip';
    if (this._bTarget?.type === 'existing') return 'Add to trip';
    return `Add ${this._bRows.filter((r) => r._sel).length}`;
  }

  _renderTRow(title, subtitle, isSelected, onClick) {
    return html`<button
      type="button"
      class="trow ${isSelected ? 'on' : ''}"
      @click=${onClick}
    >
      <span class="trad">${isSelected ? '●' : '○'}</span>
      <span class="ttxt">
        <span class="ttitle">${title}</span>
        ${subtitle ? html`<span class="tsub">${subtitle}</span>` : ''}
      </span>
    </button>`;
  }

  async _confirmBooking() {
    const selected = this._bRows.filter((r) => r._sel);
    if (!selected.length) return;
    this._phase = 'working';
    try {
      await dataStore.importBooking(this._booking, this._bTarget, this._bRows);
      this._count = selected.length;
      this._phase = 'done';
      toast('Booking added.');
      this.dispatchEvent(new CustomEvent('added', { detail: selected.length }));
    } catch (err) {
      console.error('importBooking failed:', err);
      this._phase = 'error';
      this._err =
        err?.code === 'permission-denied'
          ? "Couldn't save. You may not have permission."
          : (err?.message ?? "Couldn't save the booking. Try again.");
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

  get _allSelected() {
    return this._events.length > 0 && this._events.every((e) => e._sel);
  }

  // Select-all / unselect-all toggle for the review list — flips every
  // row to the opposite of the current all-selected state.
  _toggleAll() {
    const next = !this._allSelected;
    this._events = this._events.map((e) => ({ ...e, _sel: next }));
  }

  async _confirm() {
    const sel = this._selected;
    if (!sel.length) return;
    this._phase = 'working';
    try {
      const n = await dataStore.importSchoolEvents(
        sel.map((e) => ({
          date: e.date,
          title: e.title.trim(),
          type: e.type,
          description: e.description,
        })),
        { category: this._category, tag: this._tag },
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
          ? "Couldn't save. You may not have permission."
          : (err?.message ?? "Couldn't save the events. Try again.");
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
    .catbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      margin: 0 0 14px;
    }
    .catseg {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .catlbl {
      font-size: 12.5px;
      font-weight: 600;
      color: var(--text-secondary);
      margin-right: 2px;
    }
    .catopt {
      padding: 6px 12px;
      border-radius: var(--radius-pill);
      border: 1px solid var(--glass-border);
      background: var(--glass-fill);
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      transition: all 150ms ease;
    }
    .catopt.on {
      background: rgba(61, 155, 143, 0.28);
      color: var(--bubble-link-pb);
      border-color: rgba(61, 155, 143, 0.55);
    }
    .tagin {
      flex: 1;
      min-width: 170px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      border-radius: var(--radius-input);
      padding: 8px 12px;
      font-family: var(--font-body);
      font-size: 13px;
      outline: none;
    }
    .tagin::placeholder { color: var(--text-tertiary); }
    .tagin:focus { border-color: rgba(61, 155, 143, 0.5); }
    .tagsuggest {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin: -4px 0 14px;
    }
    .tslbl { font-size: 12px; color: var(--text-tertiary); }
    .tschip {
      padding: 5px 11px;
      border-radius: var(--radius-pill);
      border: 1px solid rgba(198, 123, 92, 0.4);
      background: rgba(198, 123, 92, 0.12);
      color: var(--ink-terracotta);
      font-family: var(--font-body);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    .tschip.on {
      background: rgba(198, 123, 92, 0.3);
      border-color: rgba(198, 123, 92, 0.6);
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
    .foot-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .selinfo { font-size: 12.5px; color: var(--text-secondary); }
    .selall {
      background: transparent;
      border: none;
      padding: 0;
      font-family: var(--font-body);
      font-size: 12.5px;
      font-weight: 600;
      color: var(--ink-teal);
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .selall:hover { color: var(--bubble-link-pb); }
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
    .fieldin {
      width: 100%;
      margin-bottom: 10px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      border-radius: var(--radius-input);
      padding: 9px 12px;
      font-family: var(--font-body);
      font-size: 13px;
      outline: none;
    }
    .fieldin:focus { border-color: rgba(61, 155, 143, 0.5); }
    .summaryin {
      width: 100%;
      min-height: 160px;
      resize: vertical;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      border-radius: var(--radius-input);
      padding: 10px 12px;
      font-family: var(--font-body);
      font-size: 13px;
      line-height: 1.5;
      outline: none;
      margin-bottom: 12px;
    }
    .summaryin:focus { border-color: rgba(61, 155, 143, 0.5); }
    .keepfile {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: var(--text-secondary);
      margin-bottom: 8px;
      cursor: pointer;
    }
    .keepfile input {
      width: 16px;
      height: 16px;
      accent-color: var(--teal-pebble);
    }
    /* Booking-review target picker */
    .trips {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 12px;
    }
    .trow {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      text-align: left;
      padding: 10px 12px;
      border-radius: var(--radius-tile);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      font-family: var(--font-body);
      cursor: pointer;
      transition: all 150ms ease;
    }
    .trow.on {
      background: rgba(61, 155, 143, 0.18);
      border-color: rgba(61, 155, 143, 0.55);
    }
    .trad {
      color: var(--teal-pebble);
      font-size: 14px;
      flex-shrink: 0;
      width: 16px;
      text-align: center;
    }
    .ttxt {
      display: flex;
      flex-direction: column;
      gap: 1px;
      min-width: 0;
    }
    .ttitle {
      font-size: 13.5px;
      font-weight: 600;
    }
    .tsub {
      font-size: 12px;
      color: var(--text-tertiary);
    }
    .fillnote {
      font-size: 12.5px;
      color: var(--text-secondary);
      margin: -2px 0 14px;
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
            <h2>Smart Upload</h2>
            <button class="close" @click=${this._cancel} aria-label="Close">
              ×
            </button>
          </div>
          ${this._phase === 'pick'
            ? html`
                <p class="lede">
                  Upload a calendar or schedule, a booking confirmation
                  (flight, hotel, restaurant),${this.canSaveReports
                    ? ' a flier, or a report card'
                    : ' or a flier'}, as a
                  <strong>PDF, a screenshot, or a Word doc</strong>. Pebble
                  reads it and pulls out the details. You'll review
                  everything before it's saved.
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
                  Pebble can read calendars, bookings, and
                  ${this.canSaveReports ? 'report cards' : 'fliers'}. Nothing
                  is saved until you confirm it.
                </div>
              `
            : ''}
          ${this._phase === 'working'
            ? html`<div class="working">
                <div class="spin"></div>
                <div>Reading it…</div>
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
                <div class="catbar">
                  <div class="catseg" role="group" aria-label="Add these as">
                    <span class="catlbl">Add as</span>
                    ${[
                      // U7 7-A — Plans/Activities collapsed into Activities
                      // (both bucketed into Activities since U2).
                      ['activity', 'Activities'],
                      ['celebration', 'Celebrations'],
                    ].map(
                      ([id, label]) => html`<button
                        type="button"
                        class="catopt ${this._category === id ? 'on' : ''}"
                        @click=${() => (this._category = id)}
                      >
                        ${label}
                      </button>`,
                    )}
                  </div>
                  <input
                    class="tagin"
                    type="text"
                    .value=${this._tag}
                    maxlength="60"
                    placeholder="Tag (optional), e.g. Daycare 2026"
                    @input=${(e) => (this._tag = e.target.value)}
                  />
                </div>
                ${(this.knownTags ?? []).length
                  ? html`<div class="tagsuggest">
                      <span class="tslbl">Reuse a tag</span>
                      ${this.knownTags.map(
                        (t) => html`<button
                          type="button"
                          class="tschip ${this._tag === t ? 'on' : ''}"
                          @click=${() =>
                            (this._tag = this._tag === t ? '' : t)}
                        >
                          ${t}
                        </button>`,
                      )}
                    </div>`
                  : ''}
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
                  <div class="foot-left">
                    <span class="selinfo"
                      >${this._selected.length} selected</span
                    >
                    <button class="selall" @click=${() => this._toggleAll()}>
                      ${this._allSelected ? 'Unselect all' : 'Select all'}
                    </button>
                  </div>
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
          ${this._phase === 'report-review'
            ? html`
                <p class="lede">
                  I read the report and pulled out a summary. Pick the child,
                  edit anything, then save it to their profile. I'll keep it
                  in mind whenever you ask about them.
                </p>
                ${(this.children ?? []).length > 1
                  ? html`<div class="catbar">
                      <span class="catlbl">For</span>
                      ${this.children.map(
                        (c) => html`<button
                          type="button"
                          class="catopt ${this._rChildId === c.id ? 'on' : ''}"
                          @click=${() => (this._rChildId = c.id)}
                        >
                          ${c.name}
                        </button>`,
                      )}
                    </div>`
                  : ''}
                <input
                  class="fieldin"
                  type="text"
                  maxlength="200"
                  .value=${this._rTitle}
                  placeholder="Title"
                  @input=${(e) => (this._rTitle = e.target.value)}
                />
                <input
                  class="fieldin"
                  type="text"
                  maxlength="120"
                  .value=${this._rPeriod}
                  placeholder="Period (optional), e.g. Spring 2026"
                  @input=${(e) => (this._rPeriod = e.target.value)}
                />
                <textarea
                  class="summaryin"
                  .value=${this._rSummary}
                  placeholder="Summary"
                  @input=${(e) => (this._rSummary = e.target.value)}
                ></textarea>
                ${this._file
                  ? html`<label class="keepfile">
                      <input
                        type="checkbox"
                        .checked=${this._rKeepFile}
                        @change=${(e) => (this._rKeepFile = e.target.checked)}
                      />
                      Keep the original file
                    </label>`
                  : ''}
                <div class="foot" style="justify-content:flex-end;">
                  <div class="actions">
                    <button class="btn-ghost" @click=${this._cancel}>
                      Cancel
                    </button>
                    <button
                      class="btn-primary"
                      ?disabled=${!this._rChildId ||
                      !this._rTitle.trim() ||
                      !this._rSummary.trim()}
                      @click=${this._confirmReport}
                    >
                      Save to profile
                    </button>
                  </div>
                </div>
              `
            : ''}
          ${this._phase === 'booking-review'
            ? html`
                <p class="lede">${this._bHeaderText()}</p>
                <div class="catlbl" style="margin-bottom: 6px">Add to</div>
                <div class="trips">
                  ${this._matchingTrips().map((t) =>
                    this._renderTRow(
                      t.title,
                      this._tripDateLabel(t),
                      this._bTarget.type === 'existing' &&
                        this._bTarget.tripId === t.id,
                      () => (this._bTarget = { type: 'existing', tripId: t.id }),
                    ),
                  )}
                  ${this._renderTRow(
                    'New trip',
                    this._booking?.newTripProposal?.title ?? '',
                    this._bTarget.type === 'newTrip',
                    () => (this._bTarget = { type: 'newTrip' }),
                  )}
                  ${this._renderTRow(
                    'Just the calendar',
                    'Add as standalone items, not a trip',
                    this._bTarget.type === 'calendarOnly',
                    () => (this._bTarget = { type: 'calendarOnly' }),
                  )}
                </div>
                ${this._bFillPreview().length
                  ? html`<div class="fillnote">
                      Also fills this trip's empty details:
                      ${this._bFillPreview().join(', ')}.
                    </div>`
                  : ''}
                <div class="list">
                  ${this._bRows.map(
                    (row, i) => html`<div class="row ${row._sel ? '' : 'off'}">
                      <input
                        type="checkbox"
                        .checked=${row._sel}
                        @change=${(e) => this._patchB(i, '_sel', e.target.checked)}
                        aria-label="Include this item"
                      />
                      <input
                        type="date"
                        .value=${row.day}
                        @change=${(e) => this._patchB(i, 'day', e.target.value)}
                      />
                      <input
                        class="t"
                        type="text"
                        .value=${row.title}
                        @input=${(e) => this._patchB(i, 'title', e.target.value)}
                      />
                      ${row.time ? html`<span class="ty">${row.time}</span>` : ''}
                      <span class="ty">${row.type}</span>
                    </div>`,
                  )}
                </div>
                <div class="foot">
                  <div class="foot-left">
                    <span class="selinfo"
                      >${this._bRows.filter((r) => r._sel).length} selected</span
                    >
                  </div>
                  <div class="actions">
                    <button class="btn-ghost" @click=${this._cancel}>
                      Cancel
                    </button>
                    <button
                      class="btn-primary"
                      ?disabled=${this._bRows.filter((r) => r._sel).length === 0}
                      @click=${this._confirmBooking}
                    >
                      ${this._bAddLabel()}
                    </button>
                  </div>
                </div>
              `
            : ''}
          ${this._phase === 'done'
            ? html`<div class="done">
                ${this._documentKind === 'report'
                  ? html`<div class="sub" style="margin-top: 8px">
                      Report saved to the profile.
                    </div>`
                  : this._documentKind === 'booking'
                    ? html`<div class="sub" style="margin-top: 8px">
                        ${this._count} item${this._count === 1 ? '' : 's'} added
                        to your activities.
                      </div>`
                    : html`<div class="big">${this._count}</div>
                        <div class="sub">
                          event${this._count === 1 ? '' : 's'} added to your
                          family calendar.
                        </div>`}
                <button class="btn-primary" @click=${this._cancel}>Done</button>
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
