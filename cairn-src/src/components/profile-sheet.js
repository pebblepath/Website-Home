import { LitElement, html, css } from 'lit';
import './glass-panel.js';
import './glass-button.js';
import './member-chip.js';
import {
  signOutUser,
  db,
  doc,
  updateDoc,
  serverTimestamp,
  auth,
  storage,
  storageRef,
  uploadBytes,
  getDownloadURL,
} from '../services/firebase.js';
import { dataStore } from '../services/data.js';
import { toast } from '../services/toast.js';

/**
 * Profile settings sheet. Opens when the user taps the member-chip in
 * the topbar. Holds the things we hid from the topbar to make it
 * cleaner: display name, sign out — plus a placeholder for photo
 * override and a "connected services" surface for future Calendar /
 * Gmail / etc. status.
 *
 * Properties:
 *   open    — boolean (reflected)
 *   user    — { uid, displayName, email, photoURL }
 *   pebbleUser — full /users/{uid} doc (for any persisted overrides)
 */
export class ProfileSheet extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    user: { type: Object },
    pebbleUser: { type: Object },
    _name: { state: true },
    _savingName: { state: true },
    _uploadingPhoto: { state: true },
  };

  constructor() {
    super();
    this.open = false;
    this.user = null;
    this.pebbleUser = null;
    this._name = '';
    this._savingName = false;
    this._uploadingPhoto = false;
  }

  willUpdate(changed) {
    if (changed.has('open') && this.open) {
      this._name = this.user?.displayName ?? '';
    }
  }

  _onCancel() {
    this.dispatchEvent(new Event('cancel'));
  }

  async _saveName() {
    const name = this._name.trim();
    if (!name || name === (this.user?.displayName ?? '')) return;
    if (!auth?.currentUser?.uid || !db) return;
    this._savingName = true;
    try {
      await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        displayName: name,
        updatedAt: serverTimestamp(),
      });
      toast('Display name updated.');
    } catch (e) {
      console.error(e);
      toast(`Couldn't save: ${e.code ?? e.message}`, { duration: 5000 });
    } finally {
      this._savingName = false;
    }
  }

  async _signOut() {
    if (!confirm('Sign out of Cairn?')) return;
    this.dispatchEvent(new Event('cancel'));
    await signOutUser();
  }

  _triggerPhotoPicker() {
    this.renderRoot.querySelector('#photo-file')?.click();
  }

  async _onPhotoChosen(e) {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow re-selecting the same file later
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast('Pick an image file (JPG, PNG, etc.).');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast('Photo is too big — keep it under 5 MB.');
      return;
    }
    const uid = auth?.currentUser?.uid;
    const familyId = dataStore.familyId;
    if (!uid || !familyId || !storage) {
      toast("Can't upload yet — you need to be in a family first.");
      return;
    }
    this._uploadingPhoto = true;
    try {
      // Path matches PP's Build 14 cross-device avatar sync rule, so an
      // upload from Cairn flows to PP iOS without extra plumbing.
      const ref = storageRef(storage, `families/${familyId}/avatars/users/${uid}`);
      await uploadBytes(ref, file, { contentType: file.type });
      const url = await getDownloadURL(ref);
      await updateDoc(doc(db, 'users', uid), {
        profilePhotoURL: url,
        updatedAt: serverTimestamp(),
      });
      toast('Photo updated.');
    } catch (err) {
      console.error('Photo upload failed', err);
      toast(`Upload failed: ${err.code ?? err.message}`, { duration: 5000 });
    } finally {
      this._uploadingPhoto = false;
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
      padding: 8vh 24px;
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
      max-width: 440px;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to   { transform: translateY(0); opacity: 1; }
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 22px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 20px;
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
    .avatar-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-bottom: 26px;
    }
    .change-photo {
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      font: inherit;
      font-size: 12px;
      padding: 5px 12px;
      border-radius: var(--radius-pill);
      cursor: pointer;
    }
    .change-photo:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .field {
      margin-bottom: 16px;
    }
    label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: -0.005em;
      margin-bottom: 6px;
    }
    input[type='text'] {
      width: 100%;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.16);
      border-radius: var(--radius-input);
      padding: 11px 14px;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 16px;
    }
    input[type='text']:focus {
      outline: none;
      border-color: var(--terracotta);
      background: rgba(255, 248, 235, 0.1);
    }
    .read-only {
      padding: 11px 14px;
      background: rgba(255, 248, 235, 0.03);
      border: 1px solid rgba(255, 248, 235, 0.08);
      border-radius: var(--radius-input);
      color: var(--text-secondary);
      font-size: 14px;
      letter-spacing: -0.005em;
    }
    .save-btn {
      width: 100%;
      padding: 10px 14px;
      border-radius: var(--radius-pill);
      background: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      cursor: pointer;
      font: inherit;
      font-weight: 600;
      font-size: 14px;
      margin-top: 8px;
      box-shadow: 0 4px 14px rgba(139, 90, 62, 0.3);
    }
    .save-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .danger-row {
      margin-top: 28px;
      padding-top: 18px;
      border-top: 1px solid rgba(255, 248, 235, 0.08);
      display: flex;
      justify-content: center;
    }
    .signout {
      background: transparent;
      border: 1px solid rgba(201, 138, 138, 0.32);
      color: var(--rose-soft);
      font: inherit;
      font-size: 13.5px;
      padding: 9px 22px;
      border-radius: var(--radius-pill);
      cursor: pointer;
      transition: all 200ms ease;
    }
    .signout:hover {
      background: rgba(201, 138, 138, 0.1);
      border-color: rgba(201, 138, 138, 0.5);
    }
  `;

  render() {
    if (!this.open) return html``;
    const u = this.user;
    const nameChanged = this._name.trim() && this._name.trim() !== (u?.displayName ?? '');
    return html`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Profile</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <div class="avatar-block">
            <member-chip
              .name=${u?.displayName ?? 'You'}
              .photo=${u?.photoURL ?? ''}
              .hue=${198}
              size="80"
            ></member-chip>
            <button
              class="change-photo"
              ?disabled=${this._uploadingPhoto}
              @click=${this._triggerPhotoPicker}
            >
              ${this._uploadingPhoto ? 'Uploading…' : 'Change photo'}
            </button>
            <input
              id="photo-file"
              type="file"
              accept="image/*"
              style="display:none;"
              @change=${this._onPhotoChosen}
            />
          </div>

          <div class="field">
            <label>Display name</label>
            <input
              type="text"
              .value=${this._name}
              @input=${(e) => (this._name = e.target.value)}
            />
            ${nameChanged
              ? html`<button
                  class="save-btn"
                  ?disabled=${this._savingName}
                  @click=${this._saveName}
                >
                  ${this._savingName ? 'Saving…' : 'Save name'}
                </button>`
              : ''}
          </div>

          <div class="field">
            <label>Email</label>
            <div class="read-only">${u?.email ?? '—'}</div>
          </div>

          <div class="danger-row">
            <button class="signout" @click=${this._signOut}>Sign out</button>
          </div>
        </glass-panel>
      </div>
    `;
  }
}

customElements.define('profile-sheet', ProfileSheet);
