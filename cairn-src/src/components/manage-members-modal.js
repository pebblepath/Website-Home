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
    canRemove: { type: Boolean },
    _busy: { state: true },
    _newGroupName: { state: true },
    _editingGroupId: { state: true },
    _removingUid: { state: true },
    _addingChild: { state: true },
    _childName: { state: true },
    _childDob: { state: true },
    _savingChild: { state: true },
    _editingLabelUid: { state: true },
    _labelDraft: { state: true },
    /** Phase 11 — parent-initiated upgrade. When the acting parent
     *  taps "Grant access" on a connection row, this is set to the
     *  row's uid and the inline tier-picker expands beneath the row.
     *  Tapping a tier fires the grant via `dataStore` + collapses.
     *  Null otherwise. */
    _grantTargetUid: { state: true },
    /** Per-row grant in-flight flag. Holds the uid currently being
     *  granted; drives the disabled-state on both tier buttons so a
     *  double-click during the network round-trip doesn't fire twice. */
    _grantingUid: { state: true },
  };

  constructor() {
    super();
    this.open = false;
    this.family = null;
    this.immediate = [];
    this.extended = [];
    this.canRemove = false;
    this._busy = false;
    this._newGroupName = '';
    this._editingGroupId = null;
    this._removingUid = null;
    this._addingChild = false;
    this._childName = '';
    this._childDob = '';
    this._savingChild = false;
    this._editingLabelUid = null;
    this._labelDraft = '';
    // Phase 11 — null when no inline tier-picker is expanded.
    this._grantTargetUid = null;
    this._grantingUid = null;
  }

  // ── Phase 11 — parent-initiated direct elevation ──────────────────

  _toggleGrantPicker(uid) {
    // Collapse any open label edit on this row so the two affordances
    // don't fight for the same vertical slot.
    if (this._editingLabelUid === uid) this._editingLabelUid = null;
    this._grantTargetUid = this._grantTargetUid === uid ? null : uid;
  }

  async _grantReadOnly(uid, name) {
    if (this._grantingUid) return;
    this._grantingUid = uid;
    try {
      await dataStore.grantChildViewerDirectly(uid);
      toast(`Read-only access granted to ${name}.`);
      this._grantTargetUid = null;
    } catch (e) {
      console.error('grantChildViewerDirectly failed:', e);
      toast(`Couldn't grant access: ${e.code ?? e.message}`, { duration: 5000 });
    } finally {
      this._grantingUid = null;
    }
  }

  async _grantParent(uid, name) {
    if (this._grantingUid) return;
    this._grantingUid = uid;
    try {
      const grantedNames = await dataStore.grantParentAccessForOwnChildren(uid);
      if (!grantedNames || grantedNames.length === 0) {
        toast(
          "No children to grant access to. Add a child first, then try again.",
          { duration: 5000 },
        );
      } else if (grantedNames.length === 1) {
        toast(`${name} is now a parent of ${grantedNames[0]}.`);
      } else if (grantedNames.length === 2) {
        toast(`${name} is now a parent of ${grantedNames[0]} & ${grantedNames[1]}.`);
      } else {
        const head = grantedNames.slice(0, -1).join(', ');
        const tail = grantedNames[grantedNames.length - 1];
        toast(`${name} is now a parent of ${head} & ${tail}.`);
      }
      this._grantTargetUid = null;
    } catch (e) {
      console.error('grantParentAccessForOwnChildren failed:', e);
      toast(`Couldn't grant access: ${e.code ?? e.message}`, { duration: 5000 });
    } finally {
      this._grantingUid = null;
    }
  }

  /** Owner-private label for a connection. Read from the OWNER's
   *  own user doc (dataStore.state.user.memberLabels) — never the
   *  member's profile, so it's only ever visible to the owner. */
  _memberLabel(uid) {
    const v = dataStore.state.user?.memberLabels?.[uid];
    return v && v.trim() ? v.trim() : '';
  }

  _startLabelEdit(uid) {
    this._editingLabelUid = uid;
    this._labelDraft = this._memberLabel(uid);
  }

  async _saveLabel(uid) {
    const draft = this._labelDraft;
    this._editingLabelUid = null;
    try {
      await dataStore.setMemberLabel(uid, draft);
    } catch (e) {
      toast(`Couldn't save label: ${e.code ?? e.message}`, { duration: 4000 });
    }
    this.requestUpdate();
  }

  _toggleAddChild() {
    this._addingChild = !this._addingChild;
    if (!this._addingChild) {
      this._childName = '';
      this._childDob = '';
    }
  }

  async _saveChild() {
    const name = (this._childName ?? '').trim();
    if (!name || this._savingChild) return;
    if (!this._childDob) {
      toast("Add your child's date of birth.");
      return;
    }
    const dob = new Date(`${this._childDob}T00:00:00`);
    if (Number.isNaN(dob.getTime())) {
      toast("That date of birth doesn't look right.");
      return;
    }
    const fid = dataStore.familyId;
    if (!fid) {
      toast("Can't add a child. No family yet.");
      return;
    }
    this._savingChild = true;
    try {
      await dataStore.createChild(fid, { name, dateOfBirth: dob });
      toast(`${name} added.`);
      this._childName = '';
      this._childDob = '';
      this._addingChild = false;
    } catch (e) {
      console.error('Add child failed:', e);
      toast(
        e?.code === 'permission-denied'
          ? 'Only a parent in this family can add a child.'
          : `Couldn't add the child: ${e?.message ?? 'try again'}`,
        { duration: 5000 },
      );
    } finally {
      this._savingChild = false;
    }
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
      /* Phase 11 — the right-side pills (Grant access + Remove) need
         to wrap onto a second line on narrow viewports, otherwise
         they overlap the body column's name + label. Allow the row
         to flow vertically when content can't fit horizontally. */
      flex-wrap: wrap;
    }
    .member-row:last-child {
      border-bottom: none;
    }
    .member-row .body {
      flex: 1;
      /* Phase 11 — was min-width:0 (let body shrink to nothing).
         With the Grant access pill added at narrow viewports the
         body got squashed until its content overlapped the pills.
         Setting a sensible minimum forces the right-side pills onto
         a new wrapped line instead — see flex-wrap:wrap above. */
      /* prettier-ignore — never put backticks in CSS comments inside
         a Lit css tagged template; they terminate the template
         silently and only blow up at module-eval time (node --check
         catches it; Vite build does NOT). */
      min-width: 140px;
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
    .role-edit {
      margin-top: 2px;
      background: transparent;
      border: 1px dashed var(--glass-border);
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-size: 12.5px;
      padding: 2px 9px;
      border-radius: 999px;
      cursor: pointer;
      transition: all 150ms ease;
    }
    .role-edit:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .role-edit .pen {
      opacity: 0.55;
      margin-left: 5px;
      font-size: 11px;
    }
    .label-input {
      margin-top: 2px;
      width: 150px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border-strong);
      border-radius: 999px;
      padding: 3px 11px;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 12.5px;
    }
    .label-input:focus {
      outline: none;
      border-color: var(--dusty-blue);
    }
    .member-row .remove-btn {
      flex-shrink: 0;
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      padding: 5px 12px;
      border-radius: 999px;
      font-family: var(--font-body);
      font-size: 12.5px;
      cursor: pointer;
      transition: all 160ms ease;
    }
    .member-row .remove-btn:hover {
      color: var(--rose-soft);
      border-color: rgba(201, 138, 138, 0.5);
      background: rgba(201, 138, 138, 0.08);
    }
    .member-row .remove-btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    /* Phase 11 — "Grant access" pill on connection rows + the inline
       tier-picker that expands beneath the row when tapped. Inline
       (not a nested modal) so the tier-tap stays close to the row
       it acts on; mirrors the iOS sheet's two-card vertical stack. */
    .member-row .grant-btn {
      flex-shrink: 0;
      background: rgba(61, 155, 143, 0.14);
      border: 1px solid rgba(61, 155, 143, 0.4);
      color: var(--ink-teal, var(--text-primary));
      padding: 5px 12px;
      border-radius: 999px;
      font-family: var(--font-body);
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      transition: all 160ms ease;
    }
    .member-row .grant-btn:hover {
      background: rgba(61, 155, 143, 0.22);
      border-color: rgba(61, 155, 143, 0.6);
    }
    .grant-picker {
      /* prettier-ignore — Lit css tagged-template gotcha: backticks
         here would terminate the template even inside a CSS comment.
         Renders as a sibling block AFTER its .member-row (Lit map
         emits both; parent is a flex column so the picker stacks
         naturally below). Indented to align with the row's name
         column (avatar = 36px + 12px gap = 48px). */
      margin: 4px 0 14px 48px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-right: 4px;
    }
    .grant-picker-head {
      display: flex;
      flex-direction: column;
      gap: 3px;
      padding: 0 4px 4px;
    }
    .grant-picker-head b {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-primary);
    }
    .grant-picker-sub {
      font-size: 11.5px;
      color: var(--text-tertiary);
    }
    .tier-card {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border-radius: var(--radius-input);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      font-family: var(--font-body);
      text-align: left;
      cursor: pointer;
      transition: all 160ms ease;
    }
    .tier-card:hover {
      background: var(--glass-fill-strong);
      border-color: var(--glass-border-strong);
    }
    .tier-card:disabled {
      opacity: 0.55;
      cursor: default;
    }
    .tier-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .tier-icon svg {
      width: 18px;
      height: 18px;
    }
    .tier-text {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .tier-text b {
      font-size: 13.5px;
      font-weight: 600;
    }
    .tier-text span {
      font-size: 11.5px;
      color: var(--text-secondary);
      line-height: 1.4;
    }
    .tier-chev {
      flex-shrink: 0;
      color: var(--text-tertiary);
      font-size: 18px;
      line-height: 1;
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
    .add-child-form {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 6px;
    }
    .add-child-actions {
      display: flex;
      gap: 8px;
    }
    .add-child-actions glass-button {
      flex: 1;
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

  async _removeMember(m) {
    if (this._removingUid) return;
    const name = m.displayName || 'this person';
    if (
      !confirm(
        `Remove ${name} from ${this.family?.name ?? 'your family'}?\n\n` +
          `They'll lose access to shared trips, celebrations and any ` +
          `read-only child access. You can re-invite them anytime with ` +
          `the invite code.`,
      )
    )
      return;
    this._removingUid = m.uid;
    try {
      await dataStore.removeCairnMember(m.uid);
      toast(`${name} removed.`);
    } catch (e) {
      toast(`Couldn't remove: ${e.code ?? e.message}`, { duration: 5000 });
    } finally {
      this._removingUid = null;
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
      toast('Could not copy. Try long-press the link instead.');
    }
  }

  async _share() {
    const code = this.family?.cairnInviteCode;
    if (!code) return;
    const url = this._inviteLink(code);
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join our family on PebblePath',
          text: `Join our family on PebblePath. Invite code: ${code}. It's where we keep our family's milestones, plans, and everything we're coordinating, with a little help from Pebble, our family's AI assistant.`,
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

          <h3>My family · ${this.immediate.length}</h3>
          ${this.immediate.length === 0
            ? html`<div class="empty">No one in your family yet.</div>`
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
                          ? 'Co-parent'
                          : m.role === 'child'
                          ? 'Child'
                          : m.role === 'member'
                          ? 'Member'
                          : 'Family'}
                      </div>
                    </div>
                  </div>
                `,
              )}

          <h3>My connections · ${this.extended.length}</h3>
          ${this.extended.length === 0
            ? html`<div class="empty">
                Anyone you invite (grandparents, aunts, uncles, etc.) will appear here.
                They can see trips and celebrations but not PebblePath child data.
              </div>`
            : this.extended.map((m) => {
                // Co-parents belong here for non-parent viewers (see
                // deriveExtendedMembers). They aren't private labels the
                // viewer assigns — render the role as plain text and
                // skip the remove affordance for them. `child` is
                // retained defensively even though non-parent viewers
                // no longer see children through derivation.
                const isFixedRole = m.role === 'co-parent' || m.role === 'child';
                const fixedRoleLabel =
                  m.role === 'co-parent' ? 'Co-parent' : 'Child';
                return html`
                  <div class="member-row">
                    <member-chip
                      .name=${m.displayName}
                      .photo=${m.photoURL ?? ''}
                      .hue=${m.hue}
                      size="36"
                    ></member-chip>
                    <div class="body">
                      <div class="name">${m.displayName}</div>
                      ${isFixedRole
                        ? html`<div class="role">${fixedRoleLabel}</div>`
                        : this._editingLabelUid === m.uid
                        ? html`<input
                            class="label-input"
                            .value=${this._labelDraft}
                            placeholder="Connection"
                            @input=${(e) => (this._labelDraft = e.target.value)}
                            @keydown=${(e) => {
                              if (e.key === 'Enter') this._saveLabel(m.uid);
                              if (e.key === 'Escape')
                                this._editingLabelUid = null;
                            }}
                            @blur=${() => this._saveLabel(m.uid)}
                          />`
                        : html`<button
                            class="role-edit"
                            title="Set a private label only you can see"
                            @click=${() => this._startLabelEdit(m.uid)}
                          >
                            ${this._memberLabel(m.uid) || 'Connection'}<span
                              class="pen"
                              >✎</span
                            >
                          </button>`}
                    </div>
                    ${this.canRemove && !isFixedRole
                      ? html`<button
                          class="grant-btn"
                          @click=${() => this._toggleGrantPicker(m.uid)}
                          title="Grant ${m.displayName} access to child data"
                        >
                          ${this._grantTargetUid === m.uid ? 'Cancel' : 'Grant access'}
                        </button>`
                      : ''}
                    ${this.canRemove && !isFixedRole
                      ? html`<button
                          class="remove-btn"
                          ?disabled=${this._removingUid === m.uid}
                          @click=${() => this._removeMember(m)}
                        >
                          ${this._removingUid === m.uid ? 'Removing…' : 'Remove'}
                        </button>`
                      : ''}
                  </div>
                  ${this._grantTargetUid === m.uid
                    ? html`<div class="grant-picker">
                        <div class="grant-picker-head">
                          <b>Pick a level for ${m.displayName}</b>
                          <span class="grant-picker-sub"
                            >Tap one. It takes effect immediately. You can revoke read-only anytime in Settings.</span
                          >
                        </div>
                        <button
                          class="tier-card"
                          ?disabled=${this._grantingUid === m.uid}
                          @click=${() => this._grantReadOnly(m.uid, m.displayName)}
                        >
                          <span class="tier-icon" style="background:rgba(61,155,143,.14);color:var(--ink-teal);">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/></svg>
                          </span>
                          <span class="tier-text">
                            <b>Read-only access</b>
                            <span
                              >See milestones, growth insights, and Pebble's
                              notes. Can't mark milestones, edit, or use
                              Pebble.</span
                            >
                          </span>
                          <span class="tier-chev">›</span>
                        </button>
                        <button
                          class="tier-card"
                          ?disabled=${this._grantingUid === m.uid}
                          @click=${() => this._grantParent(m.uid, m.displayName)}
                        >
                          <span class="tier-icon" style="background:rgba(201,138,138,.18);color:var(--ink-terracotta);">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3 2.5-5 6-5s6 2 6 5"/><path d="M14.5 20c0-2 2-3.5 4.5-3.5s4.5 1.5 4.5 3.5"/></svg>
                          </span>
                          <span class="tier-text">
                            <b>Parent or caregiver</b>
                            <span
                              >Becomes a parent of your children. Can mark
                              milestones, ask Pebble, edit child info, export
                              pediatrician PDF. Same access as you.</span
                            >
                          </span>
                          <span class="tier-chev">›</span>
                        </button>
                      </div>`
                    : ''}
                `;
              })}

          ${/* P4-B 2026-05-19 — sub-groups UI hidden for now to avoid
               confusion (Thomas); revisit later. Block + the
               _createSubGroup/_toggleSubGroupMember/_deleteSubGroup
               methods kept dormant: remove the "false &&" prefix
               below to restore the original condition. */
          false &&
          (this.extended.length > 0 || Object.keys(this.family?.subGroups ?? {}).length > 0)
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
                                    Invite connections first, then group them here.
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
                            No members yet. Tap ✎ to add.
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

          <h3>Children</h3>
          ${this._addingChild
            ? html`
                <div class="add-child-form">
                  <input
                    class="new-group-input"
                    type="text"
                    placeholder="Child's name"
                    .value=${this._childName}
                    @input=${(e) => (this._childName = e.target.value)}
                    @keydown=${(e) => {
                      if (e.key === 'Enter') this._saveChild();
                    }}
                  />
                  <input
                    class="new-group-input"
                    type="date"
                    aria-label="Date of birth"
                    .value=${this._childDob}
                    @input=${(e) => (this._childDob = e.target.value)}
                  />
                  <div class="add-child-actions">
                    <glass-button
                      variant="primary"
                      ?disabled=${this._savingChild ||
                      !this._childName.trim() ||
                      !this._childDob}
                      @click=${this._saveChild}
                    >
                      ${this._savingChild ? 'Adding…' : 'Add child'}
                    </glass-button>
                    <glass-button
                      variant="ghost"
                      ?disabled=${this._savingChild}
                      @click=${this._toggleAddChild}
                    >
                      Cancel
                    </glass-button>
                  </div>
                </div>
              `
            : html`
                <glass-button
                  variant="ghost"
                  full
                  @click=${this._toggleAddChild}
                >
                  + Add a child
                </glass-button>
              `}

          <h3>Family invite code</h3>
          ${code && !codeExpired
            ? html`
                <div class="invite-box">
                  <div class="invite-code">${code}</div>
                  <div class="invite-meta">${this._expiryText(expiresAt)} · share this code with anyone in your family</div>
                  <div class="invite-actions">
                    <glass-button variant="primary" @click=${this._share} ?disabled=${this._busy}>
                      Send a family invite
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
                    ? 'Your invite code has expired. Generate a new one to invite people to your family.'
                    : 'No invite code yet. Generate one to invite people to your family.'}
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
