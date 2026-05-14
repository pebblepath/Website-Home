import { LitElement, html, css } from 'lit';
import './glass-panel.js';
import './glass-button.js';
import './member-chip.js';
import { dataStore } from '../services/data.js';
import { toast } from '../services/toast.js';

/**
 * Manage Members modal (Phase 3A). Lists immediate + extended family,
 * shows the current Cairn invite code, and lets a PP-member admin
 * regenerate / copy / share the link.
 *
 * Properties:
 *   open       — boolean
 *   family     — current family doc
 *   immediate  — derived immediate members (from deriveImmediateMembers)
 *   extended   — derived extended members (from deriveExtendedMembers)
 *
 * Events: cancel
 */
export class ManageMembersModal extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    family: { type: Object },
    immediate: { type: Array },
    extended: { type: Array },
    _busy: { state: true },
    _newGroupName: { state: true },
    _editingGroupId: { state: true },
  };

  constructor() {
    super();
    this.open = false;
    this.family = null;
    this.immediate = [];
    this.extended = [];
    this._busy = false;
    this._newGroupName = '';
    this._editingGroupId = null;
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
      max-width: 560px;
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
    h3 {
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 600;
      letter-spacing: -0.005em;
      color: var(--text-primary);
      margin: 22px 0 12px;
    }
    h3:first-of-type {
      margin-top: 0;
    }
    .member-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 6px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.06);
    }
    .member-row:last-child {
      border-bottom: none;
    }
    .member-row .body {
      flex: 1;
      min-width: 0;
    }
    .member-row .name {
      font-size: 14.5px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .member-row .role {
      font-size: 12.5px;
      color: var(--text-tertiary);
      letter-spacing: -0.005em;
      margin-top: 2px;
    }
    .empty {
      color: var(--text-tertiary);
      font-size: 13.5px;
      padding: 12px 0;
      line-height: 1.5;
    }
    .invite-box {
      margin-top: 8px;
      padding: 16px;
      border-radius: var(--radius-tile);
      background: rgba(61, 155, 143, 0.1);
      border: 1px solid rgba(61, 155, 143, 0.28);
    }
    .invite-code {
      font-family: 'SF Mono', ui-monospace, monospace;
      font-size: 22px;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: var(--text-primary);
      margin-bottom: 6px;
    }
    .invite-meta {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-bottom: 14px;
    }
    .invite-actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .invite-actions glass-button {
      flex: 1;
      min-width: 140px;
    }
    .invite-empty {
      padding: 16px;
      border-radius: var(--radius-tile);
      background: rgba(255, 248, 235, 0.04);
      border: 1px dashed rgba(255, 248, 235, 0.18);
      text-align: center;
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.55;
    }
    .invite-empty glass-button {
      margin-top: 12px;
    }
    .footer {
      margin-top: 24px;
      display: flex;
      justify-content: flex-end;
    }

    /* Sub-groups */
    .subgroup {
      padding: 12px 14px;
      border-radius: var(--radius-tile);
      background: rgba(255, 248, 235, 0.04);
      border: 1px solid rgba(255, 248, 235, 0.1);
      margin-bottom: 10px;
    }
    .subgroup-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 8px;
    }
    .subgroup-name {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 14.5px;
      letter-spacing: -0.005em;
    }
    .subgroup-actions {
      display: flex;
      gap: 6px;
    }
    .icon-btn {
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      width: 28px;
      height: 28px;
      border-radius: 999px;
      cursor: pointer;
      font-size: 13px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .icon-btn:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .icon-btn.danger:hover {
      color: var(--rose-soft);
      border-color: rgba(201, 138, 138, 0.5);
    }
    .chip-toggle {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 4px 11px 4px 4px;
      border-radius: 999px;
      background: rgba(255, 248, 235, 0.05);
      border: 1px solid rgba(255, 248, 235, 0.12);
      font-size: 12.5px;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 160ms ease;
      margin: 0 6px 6px 0;
    }
    .chip-toggle:hover {
      color: var(--text-primary);
    }
    .chip-toggle.on {
      background: rgba(61, 155, 143, 0.18);
      border-color: rgba(61, 155, 143, 0.45);
      color: var(--text-primary);
    }
    .new-group-input {
      width: 100%;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.18);
      border-radius: var(--radius-input);
      padding: 9px 12px;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 14.5px;
    }
    .new-group-input:focus {
      outline: none;
      border-color: var(--terracotta);
    }
    .add-group-row {
      display: flex;
      gap: 8px;
      margin-top: 10px;
    }
  `;

  _onCancel() {
    this.dispatchEvent(new Event('cancel'));
  }

  async _createSubGroup() {
    const name = this._newGroupName.trim();
    if (!name || this._busy) return;
    this._busy = true;
    try {
      const id = await dataStore.saveSubGroup({ name, memberIds: [] });
      this._newGroupName = '';
      this._editingGroupId = id; // open it for adding members
      toast(`Sub-group "${name}" created.`);
    } catch (e) {
      toast(`Couldn't create: ${e.code ?? e.message}`, { duration: 5000 });
    } finally {
      this._busy = false;
    }
  }

  async _toggleSubGroupMember(groupId, memberUid) {
    const group = this.family?.subGroups?.[groupId];
    if (!group) return;
    const memberIds = group.memberIds ?? [];
    const next = memberIds.includes(memberUid)
      ? memberIds.filter((id) => id !== memberUid)
      : [...memberIds, memberUid];
    try {
      await dataStore.saveSubGroup({ id: groupId, name: group.name, memberIds: next });
    } catch (e) {
      toast(`Couldn't update: ${e.code ?? e.message}`, { duration: 5000 });
    }
  }

  async _deleteSubGroup(groupId, groupName) {
    if (!confirm(`Delete the "${groupName}" sub-group?`)) return;
    try {
      await dataStore.deleteSubGroup(groupId);
      if (this._editingGroupId === groupId) this._editingGroupId = null;
      toast('Sub-group deleted.');
    } catch (e) {
      toast(`Couldn't delete: ${e.code ?? e.message}`, { duration: 5000 });
    }
  }

  async _regenerate() {
    if (this._busy) return;
    this._busy = true;
    try {
      await dataStore.regenerateCairnInviteCode();
      toast('New invite code generated.');
    } catch (e) {
      console.error(e);
      toast(`Couldn't generate code: ${e.code ?? e.message}`, { duration: 5000 });
    } finally {
      this._busy = false;
    }
  }

  _inviteLink(code) {
    return `${window.location.origin}${import.meta.env.BASE_URL}?join=${code}`;
  }

  async _copyLink() {
    const code = this.family?.cairnInviteCode;
    if (!code) return;
    try {
      await navigator.clipboard.writeText(this._inviteLink(code));
      toast('Invite link copied to clipboard.');
    } catch {
      toast('Could not copy — try long-press the link instead.');
    }
  }

  async _share() {
    const code = this.family?.cairnInviteCode;
    if (!code) return;
    const url = this._inviteLink(code);
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join my family on Cairn',
          text: `Join ${this.family?.name ?? 'our family'} on Cairn — our shared family calendar.`,
          url,
        });
      } catch {
        /* user cancelled */
      }
    } else {
      this._copyLink();
    }
  }

  _expiryText(ts) {
    if (!ts) return '';
    const date = ts.toDate ? ts.toDate() : new Date(ts);
    const now = new Date();
    const days = Math.max(0, Math.round((date - now) / (24 * 60 * 60 * 1000)));
    if (days === 0) return 'Expires today';
    if (days === 1) return 'Expires tomorrow';
    return `Expires in ${days} days`;
  }

  render() {
    if (!this.open) return html``;
    const code = this.family?.cairnInviteCode;
    const expiresAt = this.family?.cairnInviteCodeExpiresAt;
    const codeExpired =
      expiresAt &&
      (expiresAt.toDate ? expiresAt.toDate() : new Date(expiresAt)) < new Date();

    return html`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Manage members</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <h3>Immediate family · ${this.immediate.length}</h3>
          ${this.immediate.length === 0
            ? html`<div class="empty">No one in immediate yet.</div>`
            : this.immediate.map(
                (m) => html`
                  <div class="member-row">
                    <member-chip
                      .name=${m.displayName}
                      .photo=${m.photoURL ?? ''}
                      .hue=${m.hue}
                      size="36"
                    ></member-chip>
                    <div class="body">
                      <div class="name">${m.displayName}</div>
                      <div class="role">
                        ${m.role === 'self'
                          ? 'You'
                          : m.role === 'co-parent'
                          ? 'Co-parent (PebblePath)'
                          : m.role === 'child'
                          ? 'Child'
                          : 'Family'}
                      </div>
                    </div>
                  </div>
                `,
              )}

          <h3>Extended family · ${this.extended.length}</h3>
          ${this.extended.length === 0
            ? html`<div class="empty">
                Anyone you invite via Cairn (grandparents, aunts, uncles, etc.) will appear here.
                They can see trips and celebrations but not PebblePath child data.
              </div>`
            : this.extended.map(
                (m) => html`
                  <div class="member-row">
                    <member-chip
                      .name=${m.displayName}
                      .photo=${m.photoURL ?? ''}
                      .hue=${m.hue}
                      size="36"
                    ></member-chip>
                    <div class="body">
                      <div class="name">${m.displayName}</div>
                      <div class="role">Cairn — extended</div>
                    </div>
                  </div>
                `,
              )}

          ${this.extended.length > 0 || Object.keys(this.family?.subGroups ?? {}).length > 0
            ? html`
                <h3>Sub-groups</h3>
                ${Object.entries(this.family?.subGroups ?? {}).map(
                  ([groupId, group]) => html`
                    <div class="subgroup">
                      <div class="subgroup-head">
                        <div>
                          <span class="subgroup-name">${group.name}</span>
                          <span class="count">${(group.memberIds ?? []).length} ${(group.memberIds ?? []).length === 1 ? 'member' : 'members'}</span>
                        </div>
                        <div class="subgroup-actions">
                          <button
                            class="icon-btn"
                            title=${this._editingGroupId === groupId ? 'Done' : 'Edit members'}
                            @click=${() =>
                              (this._editingGroupId =
                                this._editingGroupId === groupId ? null : groupId)}
                          >
                            ${this._editingGroupId === groupId ? '✓' : '✎'}
                          </button>
                          <button
                            class="icon-btn danger"
                            title="Delete"
                            @click=${() => this._deleteSubGroup(groupId, group.name)}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                      ${this._editingGroupId === groupId
                        ? html`
                            <div style="margin-top:4px;">
                              ${this.extended.map(
                                (m) => html`
                                  <span
                                    class="chip-toggle ${(group.memberIds ?? []).includes(m.uid) ? 'on' : ''}"
                                    @click=${() => this._toggleSubGroupMember(groupId, m.uid)}
                                  >
                                    <member-chip
                                      .name=${m.displayName}
                                      .photo=${m.photoURL ?? ''}
                                      .hue=${m.hue}
                                      size="20"
                                    ></member-chip>
                                    ${m.displayName}
                                  </span>
                                `,
                              )}
                              ${this.extended.length === 0
                                ? html`<span style="color:var(--text-tertiary);font-size:13px;">
                                    Invite extended family first, then group them here.
                                  </span>`
                                : ''}
                            </div>
                          `
                        : (group.memberIds ?? []).length > 0
                        ? html`<div style="margin-top:4px;">
                            ${(group.memberIds ?? []).map((uid) => {
                              const m = this.extended.find((x) => x.uid === uid);
                              if (!m) return '';
                              return html`<span class="chip-toggle on" style="cursor:default;">
                                <member-chip
                                  .name=${m.displayName}
                                  .photo=${m.photoURL ?? ''}
                                  .hue=${m.hue}
                                  size="20"
                                ></member-chip>
                                ${m.displayName}
                              </span>`;
                            })}
                          </div>`
                        : html`<div style="color:var(--text-tertiary);font-size:12.5px;margin-top:4px;">
                            No members yet — tap ✎ to add.
                          </div>`}
                    </div>
                  `,
                )}
                <div class="add-group-row">
                  <input
                    class="new-group-input"
                    type="text"
                    placeholder="New sub-group (e.g. Grandparents, In-laws)"
                    .value=${this._newGroupName}
                    @input=${(e) => (this._newGroupName = e.target.value)}
                    @keydown=${(e) => {
                      if (e.key === 'Enter') this._createSubGroup();
                    }}
                  />
                  <glass-button
                    variant="primary"
                    ?disabled=${this._busy || !this._newGroupName.trim()}
                    @click=${this._createSubGroup}
                  >
                    Create
                  </glass-button>
                </div>
              `
            : ''}

          <h3>Cairn invite code</h3>
          ${code && !codeExpired
            ? html`
                <div class="invite-box">
                  <div class="invite-code">${code}</div>
                  <div class="invite-meta">${this._expiryText(expiresAt)} · share this code with extended family</div>
                  <div class="invite-actions">
                    <glass-button variant="primary" @click=${this._share} ?disabled=${this._busy}>
                      Share invite
                    </glass-button>
                    <glass-button variant="ghost" @click=${this._copyLink} ?disabled=${this._busy}>
                      Copy link
                    </glass-button>
                    <glass-button variant="ghost" @click=${this._regenerate} ?disabled=${this._busy}>
                      Regenerate
                    </glass-button>
                  </div>
                </div>
              `
            : html`
                <div class="invite-empty">
                  ${codeExpired
                    ? 'Your invite code has expired. Generate a new one to invite extended family.'
                    : 'No invite code yet. Generate one to share Cairn with extended family.'}
                  <br />
                  <glass-button variant="primary" @click=${this._regenerate} ?disabled=${this._busy}>
                    ${this._busy ? 'Generating…' : 'Generate invite code'}
                  </glass-button>
                </div>
              `}

          <div class="footer">
            <glass-button variant="ghost" @click=${this._onCancel}>Done</glass-button>
          </div>
        </glass-panel>
      </div>
    `;
  }
}

customElements.define('manage-members-modal', ManageMembersModal);
