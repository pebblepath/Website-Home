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
    // P3-5c (2026-05-19) — the deferred web parent-prompt
    // (P3-INHERITED from the 2C-4e deferral; parity with iOS
    // CairnConnectionView's 2C-4d parentPromptContent). After a
    // successful join we interstitial: "are you a parent of a
    // child here?" → tap a child → file a 2A claim
    // (requestToBeCoParent). The claim GRANTS NOTHING — an
    // existing parent confirms it (the explicit 2A flow). The
    // `joined` event is deliberately delayed until the prompt is
    // answered (app-shell keeps rendering us while joinCode is
    // set — verified; no app-shell change needed).
    _step: { state: true }, // 'join' | 'parent'
    _children: { state: true },
    _claiming: { state: true },
    _claimedName: { state: true },
  };

  constructor() {
    super();
    this.code = '';
    this._family = null;
    this._loading = true;
    this._joining = false;
    this._error = '';
    this._step = 'join';
    this._children = [];
    this._claiming = false;
    this._claimedName = null;
    this._joinedFamilyId = null;
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
      // Phase 2C Slice 4e (2026-05-18): dual-accept lookup (unified
      // 6-char OR legacy CAIRN-XXXX in cairnInviteCode OR legacy PP
      // inviteCode) — parity with iOS findFamilyByConnectCode.
      const family = await dataStore.findFamilyByConnectCode(this.code);
      if (!family) {
        this._error = 'Invite code not found. Check it was typed correctly.';
        this._family = null;
      } else {
        // Validate the expiry of the field that actually matched.
        const rawExp = family._matchedCodeKind === 'pp'
          ? family.inviteCodeExpiresAt
          : family.cairnInviteCodeExpiresAt;
        const exp = rawExp?.toDate?.()
          ?? (rawExp ? new Date(rawExp) : null);
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
      // Phase 2C Slice 4e (2026-05-18): unified connect-code
      // redemption (dual-accept) — parity with iOS redeemConnectCode.
      // Same return (familyId) + same side-effects (→ cairnMemberIds,
      // NEVER memberIds; mutual connection) as the superseded
      // joinFamilyAsCairn — a drop-in.
      const familyId = await dataStore.redeemConnectCode(this.code);
      toast(`Welcome to ${this._family?.name ?? 'the family'}.`);
      this._joinedFamilyId = familyId;
      // P3-5c — the deferred web parent-prompt. The redeemer is now
      // a flat (cairnMemberIds) member; if the family has children,
      // ask whether one is theirs BEFORE finishing (so they can
      // file a 2A claim — an existing parent confirms it; the
      // privilege-escalation guardrail is the product). No children
      // → nothing to claim → finish straight through.
      const kids = await dataStore.fetchFamilyChildren(familyId);
      if (Array.isArray(kids) && kids.length) {
        this._children = kids;
        this._step = 'parent';
        // NB: deliberately do NOT dispatch `joined` yet — app-shell
        // keeps rendering us while joinCode is set; _finishJoin
        // dispatches it once the prompt is answered.
      } else {
        this.dispatchEvent(new CustomEvent('joined', { detail: { familyId } }));
      }
    } catch (e) {
      console.error(e);
      this._error = e?.message ?? 'Could not join.';
    } finally {
      this._joining = false;
    }
  }

  // P3-5c — tapping a child files a 2A co-parent claim. It grants
  // NOTHING; an existing parent of THIS child must confirm it (the
  // deployed coParentRequests rule independently enforces this).
  async _claimChild(child) {
    if (this._claiming || !child?.id) return;
    this._claiming = true;
    this._error = '';
    try {
      await dataStore.requestToBeCoParent(child.id);
      this._claimedName = child.name ?? 'your child';
    } catch (e) {
      console.error(e);
      this._error = e?.message ?? "Couldn't send the request.";
    } finally {
      this._claiming = false;
    }
  }

  _notAParent() {
    this._finishJoin();
  }

  _finishJoin() {
    this.dispatchEvent(
      new CustomEvent('joined', {
        detail: { familyId: this._joinedFamilyId },
      }),
    );
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
      /* Brand typography parity (matches register/sign-in + iOS):
         body defaults to Inter; headings below use Nunito. */
      font-family: var(--font-body);
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
      color: var(--teal-pebble);
      text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
    }
    h1 {
      font-family: var(--font-nunito);
      font-size: clamp(26px, 4vw, 34px);
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin: 0 0 14px;
      text-align: center;
      color: var(--teal-pebble);
    }
    .preview {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 14px 0 22px;
    }
    .family-name {
      font-family: var(--font-nunito);
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
    /* P3-5c — parent-prompt child rows. */
    .prompt-lede {
      text-align: center;
      color: var(--text-secondary);
      font-size: 14.5px;
      line-height: 1.55;
      margin: 0 0 18px;
    }
    .child-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 4px 0 18px;
    }
    .child-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 14px 16px;
      width: 100%;
      text-align: left;
      background: rgba(255, 248, 235, 0.05);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-tile);
      cursor: pointer;
      font-family: var(--font-nunito);
      font-weight: 600;
      font-size: 15.5px;
      color: var(--text-primary);
      transition: background 180ms ease, border-color 180ms ease;
    }
    .child-btn:hover:not(:disabled) {
      background: rgba(255, 248, 235, 0.09);
      border-color: var(--glass-border-strong);
    }
    .child-btn:disabled { opacity: 0.55; cursor: not-allowed; }
    .sent {
      text-align: center;
      color: var(--teal-pebble);
      font-size: 15px;
      line-height: 1.5;
      margin: 8px 0 20px;
    }
  `;

  // P3-5c — the post-join parent-prompt (parity with iOS
  // CairnConnectionView's 2C-4d parentPromptContent). Tapping a
  // child files a 2A claim that GRANTS NOTHING until an existing
  // parent confirms; "No" / after-sent → finish into the app.
  _renderParentPrompt() {
    const familyName = this._family?.name ?? 'this family';
    return html`
      <div class="wrap">
        <div class="mark">
          <img
            class="brand-icon"
            src=${`${import.meta.env.BASE_URL}assets/cairn-icon.png`}
            srcset=${`${import.meta.env.BASE_URL}assets/cairn-icon.png 1x, ${import.meta.env.BASE_URL}assets/cairn-icon-2x.png 2x`}
            alt="Portal"
            width="44"
            height="44"
            style="border-radius:11px;display:block;box-shadow:0 4px 16px rgba(0,0,0,0.25);"
          />
          <div class="mark-name">PebblePath</div>
        </div>
        <glass-panel padding="lg" variant="strong" lifted>
          ${this._claimedName
            ? html`
                <h1>Request sent</h1>
                <div class="sent">
                  ✓ We've asked an existing parent to confirm your
                  link to ${this._claimedName}. You won't see their
                  information until they do.
                </div>
                <div class="actions">
                  <glass-button
                    variant="primary"
                    size="lg"
                    full
                    @click=${this._finishJoin}
                  >
                    Continue
                  </glass-button>
                </div>
              `
            : html`
                <h1>Are you a parent or caregiver in ${familyName}?</h1>
                <p class="prompt-lede">
                  If you're a parent or active caregiver of one of
                  these children, ask to be linked to them — an
                  existing parent confirms it. You won't see a child's
                  information until they do.
                </p>
                <div class="child-list">
                  ${this._children.map(
                    (child) => html`
                      <button
                        class="child-btn"
                        ?disabled=${this._claiming}
                        @click=${() => this._claimChild(child)}
                      >
                        <span>${child.name ?? 'Child'}</span>
                        <span aria-hidden="true">›</span>
                      </button>
                    `,
                  )}
                </div>
                <div class="actions">
                  <glass-button
                    variant="ghost"
                    size="lg"
                    full
                    ?disabled=${this._claiming}
                    @click=${this._notAParent}
                  >
                    No, I'm not a parent or caregiver here
                  </glass-button>
                </div>
                ${this._error
                  ? html`<div class="error">${this._error}</div>`
                  : ''}
              `}
        </glass-panel>
      </div>
    `;
  }

  render() {
    if (this._step === 'parent') return this._renderParentPrompt();
    const inviter = this._inviterFromFamily(this._family);
    // Gate C (2026-06-09): a mapping-resolved family (`_viaMapping`)
    // carries no member arrays — non-members can't read /families
    // pre-join — so counts are unknowable; hide the meta line instead
    // of rendering a bogus "0 people". (The inviter chip degrades the
    // same way: memberProfiles absent → no chip.)
    const hasCounts =
      Array.isArray(this._family?.cairnMemberIds) || Array.isArray(this._family?.memberIds);
    const cairnCount = (this._family?.cairnMemberIds ?? this._family?.memberIds ?? []).length;
    const ppCount = (this._family?.memberIds ?? []).length;
    return html`
      <div class="wrap">
        <div class="mark">
          <img
            class="brand-icon"
            src=${`${import.meta.env.BASE_URL}assets/cairn-icon.png`}
            srcset=${`${import.meta.env.BASE_URL}assets/cairn-icon.png 1x, ${import.meta.env.BASE_URL}assets/cairn-icon-2x.png 2x`}
            alt="Portal"
            width="44"
            height="44"
            style="border-radius:11px;display:block;box-shadow:0 4px 16px rgba(0,0,0,0.25);"
          />
          <div class="mark-name">PebblePath</div>
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
                  ${hasCounts
                    ? html`<div class="meta">
                        ${cairnCount} ${cairnCount === 1 ? 'person' : 'people'} on the Portal${
                          ppCount && ppCount < cairnCount ? ` · ${ppCount} on PebblePath` : ''
                        }
                      </div>`
                    : ''}
                </div>
                <div class="what-you-get">
                  <strong>You'll see</strong>
                  shared trips, family birthdays, and anniversaries.
                  You won't see PebblePath's child-development data — that stays private to the parents.
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
                    Continue to Portal
                  </glass-button>
                </div>
              `}
        </glass-panel>
      </div>
    `;
  }
}

customElements.define('join-family-screen', JoinFamilyScreen);
