import { LitElement, html, css } from 'lit';
import './cairn-mark.js';
import './glass-panel.js';
import './glass-button.js';
import './member-chip.js';
import { dataStore } from '../services/data.js';
import { toast } from '../services/toast.js';

/**
 * Phase 3A.2: Cairn invite landing screen. Renders when the URL has
 * ?join=CAIRN-XXXX and the user is signed in. Looks up the family,
 * shows a preview (name + inviter + member count), and lets them join.
 *
 * Properties:
 *   code — the invite code from the URL
 * Events:
 *   joined — { detail: { familyId } }  user successfully joined
 *   cancel —                            user backed out
 */
export class JoinFamilyScreen extends LitElement {
  static properties = {
    code: { type: String },
    _family: { state: true },
    _loading: { state: true },
    _joining: { state: true },
    _error: { state: true },
  };

  constructor() {
    super();
    this.code = '';
    this._family = null;
    this._loading = true;
    this._joining = false;
    this._error = '';
  }

  willUpdate(changed) {
    if (changed.has('code') && this.code) {
      this._lookup();
    }
  }

  async _lookup() {
    this._loading = true;
    this._error = '';
    try {
      const family = await dataStore.findFamilyByCairnCode(this.code);
      if (!family) {
        this._error = 'Invite code not found. Check it was typed correctly.';
        this._family = null;
      } else {
        const exp = family.cairnInviteCodeExpiresAt?.toDate?.()
          ?? (family.cairnInviteCodeExpiresAt ? new Date(family.cairnInviteCodeExpiresAt) : null);
        if (!exp || exp < new Date()) {
          this._error = 'This invite code has expired. Ask the family for a fresh one.';
          this._family = null;
        } else {
          this._family = family;
        }
      }
    } catch (e) {
      console.error(e);
      this._error = e?.message ?? 'Couldn\'t look up the invite.';
    } finally {
      this._loading = false;
    }
  }

  async _join() {
    if (this._joining) return;
    this._joining = true;
    this._error = '';
    try {
      const familyId = await dataStore.joinFamilyAsCairn(this.code);
      toast(`Welcome to ${this._family?.name ?? 'the family'}.`);
      this.dispatchEvent(new CustomEvent('joined', { detail: { familyId } }));
    } catch (e) {
      console.error(e);
      this._error = e?.message ?? 'Could not join.';
    } finally {
      this._joining = false;
    }
  }

  _cancel() {
    this.dispatchEvent(new Event('cancel'));
  }

  _inviterFromFamily(family) {
    if (!family) return null;
    const profile = family.memberProfiles?.[family.createdBy];
    if (!profile) return null;
    const url = profile.profilePhotoURL;
    return {
      displayName: profile.displayName ?? 'A family member',
      photoURL: typeof url === 'string' && /^https?:\/\//i.test(url) ? url : null,
    };
  }

  static styles = css`
    * { box-sizing: border-box; }
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
    }
    .wrap {
      width: 100%;
      max-width: 460px;
    }
    .mark {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 28px;
      justify-content: center;
    }
    .mark-name {
      font-family: var(--font-pebble);
      font-weight: 400;
      font-size: 36px;
      letter-spacing: 0.04em;
      line-height: 1;
      transform: translateY(2px);
    }
    h1 {
      font-family: var(--font-display);
      font-size: clamp(26px, 4vw, 34px);
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin: 0 0 14px;
      text-align: center;
      background: linear-gradient(180deg, #fff 0%, rgba(255, 248, 235, 0.7) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .preview {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 14px 0 22px;
    }
    .family-name {
      font-family: var(--font-display);
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.015em;
    }
    .inviter {
      color: var(--text-secondary);
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .meta {
      color: var(--text-tertiary);
      font-size: 12.5px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .what-you-get {
      margin: 4px 0 22px;
      padding: 14px 16px;
      border-radius: var(--radius-tile);
      background: rgba(61, 155, 143, 0.1);
      border: 1px solid rgba(61, 155, 143, 0.28);
      font-size: 13.5px;
      line-height: 1.55;
      color: rgba(255, 248, 235, 0.86);
    }
    .what-you-get strong {
      color: var(--text-primary);
      display: block;
      margin-bottom: 4px;
      font-weight: 600;
    }
    .actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .error {
      color: var(--rose-soft);
      font-size: 14px;
      text-align: center;
      margin-top: 14px;
      line-height: 1.5;
    }
    .loading {
      text-align: center;
      color: var(--text-secondary);
      padding: 32px 12px;
      font-size: 14px;
    }
    code {
      font-family: 'SF Mono', ui-monospace, monospace;
      font-size: 13px;
      letter-spacing: 0.08em;
      padding: 2px 8px;
      background: rgba(255, 248, 235, 0.08);
      border-radius: 6px;
    }
  `;

  render() {
    const inviter = this._inviterFromFamily(this._family);
    const cairnCount = (this._family?.cairnMemberIds ?? this._family?.memberIds ?? []).length;
    const ppCount = (this._family?.memberIds ?? []).length;
    return html`
      <div class="wrap">
        <div class="mark">
          <cairn-mark size="44"></cairn-mark>
          <div class="mark-name">Cairn</div>
        </div>
        <glass-panel padding="lg" variant="strong" lifted>
          ${this._loading
            ? html`<div class="loading">Looking up <code>${this.code}</code>…</div>`
            : this._family
            ? html`
                <h1>You're invited.</h1>
                <div class="preview">
                  ${inviter
                    ? html`
                        <member-chip
                          .name=${inviter.displayName}
                          .photo=${inviter.photoURL ?? ''}
                          .hue=${198}
                          size="64"
                        ></member-chip>
                        <div class="inviter">
                          From <strong>${inviter.displayName}</strong>
                        </div>
                      `
                    : ''}
                  <div class="family-name">${this._family.name ?? 'A family'}</div>
                  <div class="meta">
                    ${cairnCount} ${cairnCount === 1 ? 'person' : 'people'} on Cairn${
                      ppCount && ppCount < cairnCount ? ` · ${ppCount} on PebblePath` : ''
                    }
                  </div>
                </div>
                <div class="what-you-get">
                  <strong>You'll see</strong>
                  shared trips, family birthdays, and anniversaries.
                  You won't see PebblePath's child-development data — that stays private to the immediate family.
                </div>
                <div class="actions">
                  <glass-button
                    variant="primary"
                    size="lg"
                    full
                    ?disabled=${this._joining}
                    @click=${this._join}
                  >
                    ${this._joining ? 'Joining…' : `Join ${this._family.name ?? 'family'}`}
                  </glass-button>
                  <glass-button variant="ghost" size="lg" full @click=${this._cancel}>
                    Not now
                  </glass-button>
                </div>
                ${this._error ? html`<div class="error">${this._error}</div>` : ''}
              `
            : html`
                <h1>Hmm.</h1>
                <p style="text-align:center;color:var(--text-secondary);margin:0 0 22px;line-height:1.55;">
                  ${this._error || 'This invite link doesn\'t look right.'}
                </p>
                <div class="actions">
                  <glass-button variant="primary" size="lg" full @click=${this._cancel}>
                    Continue to Cairn
                  </glass-button>
                </div>
              `}
        </glass-panel>
      </div>
    `;
  }
}

customElements.define('join-family-screen', JoinFamilyScreen);
