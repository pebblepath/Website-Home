import { LitElement, html, css } from 'lit';
import { dataStore } from '../services/data.js';
import './member-chip.js';
import './pebble-icon.js';

// Close-the-loop Slice 6 (2026-05-28) — per-trip packing list, the
// Portal port of the iOS PackingListView (Phase 2.4). Lives inside the
// trip planner behind a Day plan / Packing toggle.
//
// State machine (mirrors iOS):
//   EMPTY (no items + not started) → 3 CTAs: Use my lists / Create new
//     / Ask Pebble to start.
//   POPULATED → Pebble Review CTA + [suggestions] + groups (Parents,
//     Children, custom) each with items (check / edit / delete) + add
//     row + "Add another list" + "Save this list for future trips".
//
// Reads packing items + templates via dataStore component-managed
// listeners (same pattern as the planner's planItemsListener). All
// writes go through dataStore. The Pebble Review family payload is
// built from dataStore state (ppChildren + the Slice-4 memory layers).
export class PackingList extends LitElement {
  static properties = {
    trip: { type: Object },
    _items: { state: true },
    _templates: { state: true },
    _hasStarted: { state: true },
    _adHoc: { state: true },
    _drafts: { state: true },
    _editingId: { state: true },
    _editText: { state: true },
    _review: { state: true },
    _reviewing: { state: true },
    _reviewError: { state: true },
    _useOpen: { state: true },
    _saveOpen: { state: true },
    _saveName: { state: true },
    _addGroupOpen: { state: true },
    _newGroup: { state: true },
  };

  constructor() {
    super();
    this.trip = null;
    this._items = [];
    this._templates = [];
    this._hasStarted = false;
    this._adHoc = [];
    this._drafts = {};
    this._editingId = null;
    this._editText = '';
    this._review = null;
    this._reviewing = false;
    this._reviewError = '';
    this._useOpen = false;
    this._saveOpen = false;
    this._saveName = '';
    this._addGroupOpen = false;
    this._newGroup = '';
    this._dismissed = new Set();
    this._unsub = null;
    this._tplUnsub = null;
    this._subId = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this._tplUnsub = dataStore.packingTemplatesListener((t) => {
      this._templates = t;
    });
    this._subscribe();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsub?.();
    this._tplUnsub?.();
    this._unsub = this._tplUnsub = null;
    this._subId = null;
  }

  willUpdate(changed) {
    if (changed.has('trip')) this._subscribe();
  }

  _subscribe() {
    const id = this.trip?.id ?? null;
    if (id === this._subId) return;
    this._unsub?.();
    this._subId = id;
    this._items = [];
    this._review = null;
    this._hasStarted = false;
    this._adHoc = [];
    if (!id) return;
    this._unsub = dataStore.packingListListener(id, (items) => {
      this._items = items;
    });
  }

  // ── Derived ──────────────────────────────────────────────────────
  get _tripId() {
    return this.trip?.id ?? null;
  }

  get _showEmpty() {
    return this._items.length === 0 && !this._hasStarted && this._adHoc.length === 0;
  }

  get _groupNames() {
    const seen = new Set();
    const out = [];
    for (const n of ['Parents', 'Children']) {
      if (!seen.has(n)) { seen.add(n); out.push(n); }
    }
    for (const it of this._items) {
      if (it.groupName && !seen.has(it.groupName)) { seen.add(it.groupName); out.push(it.groupName); }
    }
    for (const n of this._adHoc) {
      if (!seen.has(n)) { seen.add(n); out.push(n); }
    }
    return out;
  }

  _itemsFor(group) {
    return this._items
      .filter((i) => i.groupName === group)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }

  // ── Mutations ────────────────────────────────────────────────────
  async _toggle(item) {
    if (!this._tripId) return;
    try { await dataStore.togglePackingItem(this._tripId, item); } catch (e) { console.warn(e); }
  }

  async _addItem(group) {
    const text = String(this._drafts[group] ?? '').trim();
    if (!text || !this._tripId) return;
    const order = (this._itemsFor(group).reduce((m, i) => Math.max(m, i.order ?? 0), -1)) + 1;
    this._drafts = { ...this._drafts, [group]: '' };
    this._hasStarted = true;
    try {
      await dataStore.addPackingItem(this._tripId, { groupName: group, text, order });
    } catch (e) {
      console.warn('[packing] add failed', e);
    }
    // refocus
    this.updateComplete.then(() => {
      const el = this.renderRoot.querySelector(`input[data-add="${CSS.escape(group)}"]`);
      el?.focus();
    });
  }

  async _delete(item) {
    if (!this._tripId) return;
    try { await dataStore.deletePackingItem(this._tripId, item.id); } catch (e) { console.warn(e); }
  }

  _startEdit(item) {
    this._editingId = item.id;
    this._editText = item.text ?? '';
    this.updateComplete.then(() => {
      const el = this.renderRoot.querySelector('input.edit-input');
      el?.focus();
      el?.select();
    });
  }

  async _commitEdit(item) {
    const text = String(this._editText ?? '').trim();
    this._editingId = null;
    if (!text || text === item.text || !this._tripId) return;
    try { await dataStore.updatePackingItemText(this._tripId, item.id, text); } catch (e) { console.warn(e); }
  }

  async _applyTemplate(tpl) {
    this._useOpen = false;
    this._hasStarted = true;
    if (!this._tripId) return;
    try { await dataStore.applyPackingTemplate(this._tripId, tpl); } catch (e) { console.warn(e); }
  }

  _addGroup() {
    const name = String(this._newGroup ?? '').trim();
    if (!name) return;
    if (!this._groupNames.includes(name)) this._adHoc = [...this._adHoc, name];
    this._newGroup = '';
    this._addGroupOpen = false;
    this._hasStarted = true;
  }

  async _saveAsTemplate() {
    const name = String(this._saveName ?? '').trim();
    if (!name) return;
    this._saveOpen = false;
    this._saveName = '';
    try {
      await dataStore.savePackingListAsTemplate(name, '', this._items);
    } catch (e) {
      console.warn('[packing] save template failed', e);
    }
  }

  // ── Pebble review ────────────────────────────────────────────────
  _familyPayload() {
    const s = dataStore.state;
    const profiles = s.ppFamily?.memberProfiles ?? {};
    const parents = Object.values(profiles)
      .map((p) => p?.displayName)
      .filter(Boolean);
    const anchors = Array.isArray(s.pebbleAnchors) ? s.pebbleAnchors : [];
    const rhythms = Array.isArray(s.pebbleRhythms) ? s.pebbleRhythms : [];
    const ageMonths = (dob) => {
      const t = dob?.getTime?.() ?? (dob ? new Date(dob).getTime() : 0);
      if (!t) return 0;
      return Math.max(0, Math.floor((Date.now() - t) / (30.44 * 24 * 3600 * 1000)));
    };
    const children = (Array.isArray(s.ppChildren) ? s.ppChildren : []).map((c) => ({
      name: c.name,
      ageMonths: ageMonths(c.dateOfBirth),
      anchors: anchors.filter((a) => a.scope === 'child' && a.childId === c.id).map((a) => a.label),
      rhythms: rhythms.filter((r) => r.scope === 'child' && r.childId === c.id).map((r) => r.title),
      recentObservations: [],
    }));
    const familyAnchors = anchors.filter((a) => a.scope === 'family').map((a) => a.label);
    return { parents, children, familyAnchors };
  }

  _tripPayload() {
    const t = this.trip ?? {};
    const p = { title: t.title || 'Trip' };
    if (t.location) p.location = t.location;
    if (t.start) p.startDate = t.start;
    if (t.end) p.endDate = t.end;
    if (t.lodgingTitle) p.lodgingTitle = t.lodgingTitle;
    if (t.lodgingNotes || t.notes) p.lodgingNotes = t.lodgingNotes || t.notes;
    if (t.flightDepartAirline || t.flightAirline) p.flightAirline = t.flightDepartAirline || t.flightAirline;
    return p;
  }

  async _runReview() {
    if (this._reviewing || !this._tripId) return;
    this._reviewing = true;
    this._reviewError = '';
    this._hasStarted = true;
    try {
      const currentList = this._items.map((i) => ({
        groupName: i.groupName,
        text: i.text,
        checked: i.checked === true,
        addedByPebble: i.addedByPebble === true,
      }));
      const res = await dataStore.generatePackingReview(
        this._tripId,
        this._tripPayload(),
        this._familyPayload(),
        currentList,
        [...this._dismissed],
        this._groupNames,
      );
      this._review = {
        additions: Array.isArray(res?.additions) ? res.additions : [],
        concerns: Array.isArray(res?.concerns) ? res.concerns : [],
        removals: Array.isArray(res?.removals) ? res.removals : [],
      };
      dataStore.markPackingReviewed(this._tripId).catch(() => {});
    } catch (e) {
      this._reviewError = e?.message || 'Pebble could not review right now.';
    } finally {
      this._reviewing = false;
    }
  }

  async _acceptAddition(sug) {
    if (!this._tripId) return;
    const order = (this._itemsFor(sug.groupName).reduce((m, i) => Math.max(m, i.order ?? 0), -1)) + 1;
    try {
      await dataStore.addPackingItem(this._tripId, {
        groupName: this._groupNames.includes(sug.groupName) ? sug.groupName : 'Parents',
        text: sug.text,
        order,
        addedByPebble: true,
      });
    } catch (e) { console.warn(e); }
    this._dropSuggestion('additions', sug);
  }

  _dismiss(bucket, sug) {
    this._dismissed.add(String(sug.text || '').toLowerCase());
    this._dropSuggestion(bucket, sug);
  }

  _dropSuggestion(bucket, sug) {
    if (!this._review) return;
    const key = `${sug.groupName}::${(sug.text || '').toLowerCase()}`;
    this._review = {
      ...this._review,
      [bucket]: this._review[bucket].filter(
        (s) => `${s.groupName}::${(s.text || '').toLowerCase()}` !== key,
      ),
    };
  }

  // ── Avatars (Parents from memberProfiles, Children from ppChildren) ─
  _avatars(group) {
    const s = dataStore.state;
    if (group === 'Parents') {
      const profiles = s.ppFamily?.memberProfiles ?? {};
      return Object.entries(profiles)
        .slice(0, 3)
        .map(([uid, p]) => ({ id: uid, name: p?.displayName ?? '?', photo: p?.profilePhotoURL ?? '', hue: 150 }));
    }
    if (group === 'Children') {
      return (Array.isArray(s.ppChildren) ? s.ppChildren : [])
        .slice(0, 3)
        .map((c) => ({ id: c.id, name: c.name, photo: c.profilePhotoURL ?? '', hue: 265 }));
    }
    return [];
  }

  // ── Render ───────────────────────────────────────────────────────
  render() {
    if (this._showEmpty) return this._renderEmpty();
    return html`
      ${this._renderReview()}
      ${this._groupNames.map((g) => this._renderGroup(g))}
      <div class="foot-actions">
        ${this._addGroupOpen
          ? html`<div class="inline-input">
              <input
                type="text"
                placeholder="List name (e.g. Beach gear)"
                .value=${this._newGroup}
                @input=${(e) => (this._newGroup = e.target.value)}
                @keydown=${(e) => e.key === 'Enter' && this._addGroup()}
              />
              <button class="mini-go" @click=${() => this._addGroup()}>Add</button>
            </div>`
          : html`<button class="ghost-btn" @click=${() => { this._addGroupOpen = true; }}>+ Add another list</button>`}
        ${this._items.length > 0
          ? (this._saveOpen
            ? html`<div class="inline-input">
                <input
                  type="text"
                  placeholder="Save as (e.g. Beach trips)"
                  .value=${this._saveName}
                  @input=${(e) => (this._saveName = e.target.value)}
                  @keydown=${(e) => e.key === 'Enter' && this._saveAsTemplate()}
                />
                <button class="mini-go" @click=${() => this._saveAsTemplate()}>Save</button>
              </div>`
            : html`<button class="save-btn" @click=${() => { this._saveOpen = true; this._saveName = this.trip?.location || this.trip?.title || ''; }}>
                Save this list for future trips
              </button>`)
          : ''}
      </div>
    `;
  }

  _renderEmpty() {
    const tplNames = this._templates.slice(0, 3).map((t) => t.name).join(', ');
    const extra = this._templates.length - 3;
    return html`
      <div class="empty">
        ${this._templates.length > 0
          ? html`<button class="cta primary" @click=${() => { this._useOpen = !this._useOpen; }}>
              <span class="cta-ic">📋</span>
              <span class="cta-body">
                <span class="cta-t">Use my lists</span>
                <span class="cta-s">${tplNames}${extra > 0 ? ` + ${extra} more` : ''}</span>
              </span>
            </button>`
          : ''}
        ${this._useOpen
          ? html`<div class="tpl-picker">
              ${this._templates.map(
                (t) => html`<button class="tpl-opt" @click=${() => this._applyTemplate(t)}>
                  ${t.name}
                  <small>${this._templateItemCount(t)} items</small>
                </button>`,
              )}
            </div>`
          : ''}
        <button class="cta secondary" @click=${() => { this._hasStarted = true; }}>
          <span class="cta-ic">✏️</span>
          <span class="cta-body">
            <span class="cta-t">Create new</span>
            <span class="cta-s">Start blank with Parents and Children groups.</span>
          </span>
        </button>
        <button class="cta tertiary" @click=${() => this._runReview()}>
          <span class="cta-ic"><pebble-icon size="16"></pebble-icon></span>
          <span class="cta-body">
            <span class="cta-t">Ask Pebble to start the list</span>
            <span class="cta-s">Generates a starter from this trip and your family.</span>
          </span>
        </button>
        ${this._reviewError ? html`<div class="err">${this._reviewError}</div>` : ''}
      </div>
    `;
  }

  _templateItemCount(t) {
    return (Array.isArray(t.groups) ? t.groups : []).reduce(
      (n, g) => n + (Array.isArray(g.items) ? g.items.length : 0),
      0,
    );
  }

  _renderReview() {
    const r = this._review;
    const hasSug = r && r.additions.length + r.concerns.length + r.removals.length > 0;
    return html`
      ${hasSug ? this._renderSuggestions(r) : ''}
      <button class="review-cta ${this._reviewing ? 'loading' : ''}" @click=${() => this._runReview()} ?disabled=${this._reviewing}>
        <pebble-icon size="18"></pebble-icon>
        <span class="rc-body">
          <span class="rc-t">${this._items.length === 0 ? 'Ask Pebble to start the list' : 'Ask Pebble to review'}</span>
          <span class="rc-s">${this._reviewing ? 'Checking the trip, lodging, and your family…' : 'Checks against the trip, lodging, and what we know about your family.'}</span>
        </span>
      </button>
      ${this._reviewError ? html`<div class="err">${this._reviewError}</div>` : ''}
    `;
  }

  _renderSuggestions(r) {
    const row = (bucket, sug, tone) => html`<div class="sug-row ${tone}">
      <div class="sug-text">
        <b>${sug.text}</b>
        <small>${sug.reason}</small>
      </div>
      <div class="sug-actions">
        ${bucket === 'additions'
          ? html`<button class="sug-add" title="Add" @click=${() => this._acceptAddition(sug)}>Add</button>`
          : ''}
        <button class="sug-x" title="Dismiss" @click=${() => this._dismiss(bucket, sug)}>✕</button>
      </div>
    </div>`;
    return html`<div class="suggestions">
      <div class="sug-head"><pebble-icon size="14"></pebble-icon> Pebble's suggestions</div>
      ${r.additions.map((s) => row('additions', s, 'add'))}
      ${r.concerns.map((s) => row('concerns', s, 'concern'))}
      ${r.removals.map((s) => row('removals', s, 'remove'))}
    </div>`;
  }

  _renderGroup(group) {
    const items = this._itemsFor(group);
    const avatars = this._avatars(group);
    const checked = items.filter((i) => i.checked === true).length;
    return html`<div class="group">
      <div class="group-head">
        <div class="gh-left">
          <span class="gh-name">${group}</span>
          ${avatars.length
            ? html`<span class="gh-avatars">
                ${avatars.map(
                  (a) => html`<member-chip .name=${a.name} .photo=${a.photo} .hue=${a.hue} size="22"></member-chip>`,
                )}
              </span>`
            : ''}
        </div>
        ${items.length ? html`<span class="gh-count">${checked}/${items.length}</span>` : ''}
      </div>
      <div class="items">
        ${items.map((it) => this._renderItem(it))}
        <div class="add-row">
          <span class="add-plus">+</span>
          <input
            type="text"
            data-add=${group}
            placeholder="Add for ${group}"
            .value=${this._drafts[group] ?? ''}
            @input=${(e) => (this._drafts = { ...this._drafts, [group]: e.target.value })}
            @keydown=${(e) => e.key === 'Enter' && this._addItem(group)}
          />
        </div>
      </div>
    </div>`;
  }

  _renderItem(it) {
    const editing = this._editingId === it.id;
    return html`<div class="item ${it.checked ? 'done' : ''}">
      <button
        class="check ${it.checked ? 'on' : ''}"
        role="checkbox"
        aria-checked=${it.checked ? 'true' : 'false'}
        @click=${() => this._toggle(it)}
      >
        ${it.checked
          ? html`<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"></path></svg>`
          : ''}
      </button>
      ${editing
        ? html`<input
            class="edit-input"
            type="text"
            .value=${this._editText}
            @input=${(e) => (this._editText = e.target.value)}
            @keydown=${(e) => { if (e.key === 'Enter') this._commitEdit(it); if (e.key === 'Escape') this._editingId = null; }}
            @blur=${() => this._commitEdit(it)}
          />`
        : html`<span class="item-text" @click=${() => this._startEdit(it)}>${it.text}</span>`}
      ${it.addedByPebble ? html`<span class="peb-dot" title="Added by Pebble"></span>` : ''}
      <button class="item-x" title="Delete" @click=${() => this._delete(it)}>✕</button>
    </div>`;
  }

  static styles = css`
    * { box-sizing: border-box; }
    :host {
      display: block;
    }
    button { font-family: inherit; cursor: pointer; }
    .err {
      font-size: 13px;
      color: var(--terracotta, #c67b5c);
      padding: 4px 2px;
    }
    /* Empty state */
    .empty {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .cta {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      text-align: left;
      padding: 14px;
      border-radius: 14px;
      border: none;
    }
    .cta-ic {
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      font-size: 16px;
    }
    .cta-body { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
    .cta-t { font-weight: 700; font-size: 14px; }
    .cta-s { font-size: 11.5px; opacity: 0.8; }
    .cta.primary {
      background: linear-gradient(135deg, #3d9b8f 0%, #2d7a70 100%);
      color: #fff;
    }
    .cta.primary .cta-ic { background: rgba(255, 255, 255, 0.22); }
    .cta.secondary {
      background: rgba(61, 155, 143, 0.1);
      color: var(--text-primary);
    }
    .cta.secondary .cta-ic { background: var(--glass-fill-strong); }
    .cta.tertiary {
      background: var(--glass-fill-strong);
      color: var(--text-primary);
      border: 1px solid var(--glass-border);
    }
    .cta.tertiary .cta-ic { background: rgba(61, 155, 143, 0.12); }
    .tpl-picker {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 4px 0 4px 44px;
    }
    .tpl-opt {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 14px;
      border-radius: 10px;
      border: 1px solid var(--glass-border);
      background: var(--glass-fill-strong);
      color: var(--text-primary);
      font-size: 13px;
      font-weight: 600;
    }
    .tpl-opt small { color: var(--text-secondary); font-weight: 400; }
    /* Review CTA */
    .review-cta {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      text-align: left;
      padding: 13px 14px;
      margin-bottom: 14px;
      border-radius: 14px;
      border: 1px solid rgba(61, 155, 143, 0.3);
      background: rgba(61, 155, 143, 0.08);
      color: var(--ink-teal);
    }
    .review-cta.loading { opacity: 0.7; }
    .rc-body { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
    .rc-t { font-weight: 700; font-size: 14px; }
    .rc-s { font-size: 11.5px; color: var(--text-secondary); }
    /* Suggestions */
    .suggestions {
      border: 1px solid rgba(61, 155, 143, 0.28);
      border-radius: 14px;
      padding: 12px 14px;
      margin-bottom: 14px;
      background: var(--glass-fill-strong);
    }
    .sug-head {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--ink-teal);
      margin-bottom: 8px;
    }
    .sug-row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
      border-top: 1px solid var(--glass-border);
    }
    .sug-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
    .sug-text b { font-size: 13.5px; color: var(--text-primary); font-weight: 600; }
    .sug-text small { font-size: 12px; color: var(--text-secondary); line-height: 1.35; }
    .sug-row.concern b::before { content: '⚠ '; color: var(--amber-glow, #d4a843); }
    .sug-row.remove b { text-decoration: line-through; opacity: 0.7; }
    .sug-actions { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
    .sug-add {
      border: none;
      background: var(--ink-teal);
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 999px;
    }
    .sug-x {
      border: none;
      background: transparent;
      color: var(--text-tertiary);
      font-size: 13px;
      line-height: 1;
      padding: 4px 6px;
    }
    /* Groups */
    .group {
      border-radius: 14px;
      background: var(--glass-fill-strong);
      border: 1px solid var(--glass-border);
      margin-bottom: 12px;
      overflow: hidden;
    }
    .group-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 14px 6px;
    }
    .gh-left { display: flex; align-items: center; gap: 10px; }
    .gh-name {
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .gh-avatars { display: inline-flex; }
    .gh-avatars member-chip { margin-left: -6px; }
    .gh-avatars member-chip:first-child { margin-left: 0; }
    .gh-count {
      font-size: 12px;
      font-weight: 600;
      color: var(--text-secondary);
    }
    .items { padding: 0 6px 6px; }
    .item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 7px 8px;
      border-radius: 8px;
    }
    .item:hover { background: var(--glass-fill); }
    .item:hover .item-x { opacity: 0.6; }
    .check {
      width: 22px;
      height: 22px;
      flex-shrink: 0;
      border-radius: 6px;
      border: 1.5px solid var(--glass-border-strong);
      background: transparent;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
    .check.on { background: var(--ink-teal); border-color: var(--ink-teal); }
    .item-text {
      flex: 1;
      min-width: 0;
      font-size: 14px;
      color: var(--text-primary);
    }
    .item.done .item-text { text-decoration: line-through; color: var(--text-secondary); }
    .edit-input {
      flex: 1;
      min-width: 0;
      font: inherit;
      font-size: 14px;
      padding: 4px 8px;
      border-radius: 6px;
      border: 1px solid var(--ink-teal);
      background: var(--glass-fill-strong);
      color: var(--text-primary);
    }
    .peb-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--ink-teal);
      flex-shrink: 0;
    }
    .item-x {
      border: none;
      background: transparent;
      color: var(--text-tertiary);
      font-size: 12px;
      line-height: 1;
      padding: 4px 6px;
      opacity: 0;
      transition: opacity 0.15s;
    }
    .add-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px;
      border-top: 1px solid var(--glass-border);
      margin-top: 2px;
    }
    .add-plus {
      width: 22px;
      height: 22px;
      flex-shrink: 0;
      border-radius: 50%;
      background: rgba(61, 155, 143, 0.14);
      color: var(--ink-teal);
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .add-row input {
      flex: 1;
      min-width: 0;
      font: inherit;
      font-size: 14px;
      border: none;
      background: transparent;
      color: var(--text-primary);
      outline: none;
    }
    /* Footer actions */
    .foot-actions { display: flex; flex-direction: column; gap: 10px; }
    .ghost-btn {
      width: 100%;
      padding: 13px;
      border-radius: 14px;
      border: 1px solid rgba(61, 155, 143, 0.3);
      background: var(--glass-fill-strong);
      color: var(--ink-teal);
      font-weight: 600;
      font-size: 13px;
    }
    .save-btn {
      width: 100%;
      padding: 12px;
      border-radius: 14px;
      border: none;
      background: rgba(61, 155, 143, 0.12);
      color: var(--ink-teal);
      font-weight: 600;
      font-size: 13px;
    }
    .inline-input { display: flex; gap: 8px; }
    .inline-input input {
      flex: 1;
      min-width: 0;
      font: inherit;
      font-size: 14px;
      padding: 11px 14px;
      border-radius: 12px;
      border: 1px solid var(--glass-border-strong);
      background: var(--glass-fill-strong);
      color: var(--text-primary);
    }
    .mini-go {
      border: none;
      background: var(--ink-teal);
      color: #fff;
      font-weight: 600;
      font-size: 13px;
      padding: 0 18px;
      border-radius: 12px;
    }
  `;
}

customElements.define('packing-list', PackingList);
