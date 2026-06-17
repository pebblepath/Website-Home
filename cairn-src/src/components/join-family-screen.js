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
    _step: { state: true }, // 'join' | 'photo' | 'parent'
    _children: { state: true },
    _claiming: { state: true },
    _claimedName: { state: true },
    // C.5 (iOS parity, mirrors CairnConnectionView.photoStepContent) —
    // a post-redeem own-photo step so a joiner sets their avatar during
    // onboarding (was only reachable later via profile-sheet). Picker
    // logic is intentionally self-contained here (NOT shared with
    // onboarding-wizard); consolidate into one helper in the onboarding-
    // parity session that reworks both flows.
    _photoPreview: { state: true },
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
    // C.5 — own-photo step. _photoBlob is the processed 512² JPEG (set
    // on pick, uploaded best-effort on Continue); _pendingKids holds the
    // family's children between redeem and the parent-claim step.
    this._photoBlob = null;
    this._photoPreview = '';
    this._uploadingPhoto = false;
    this._pendingKids = [];
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
      // ask whether one is theirs (a 2A claim an existing parent
      // confirms; the privilege-escalation guardrail is the product).
      // C.5 — first, offer an own-photo step (iOS parity). _afterPhoto
      // then routes to the parent prompt (if children) or finishes.
      // NB: deliberately do NOT dispatch `joined` yet — app-shell keeps
      // rendering us while joinCode is set; _finishJoin dispatches it.
      const kids = await dataStore.fetchFamilyChildren(familyId);
      this._pendingKids = Array.isArray(kids) ? kids : [];
      this._step = 'photo';
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
    this._goNotifications();
  }

  // Notifications is the final step for every persona (iOS parity).
  _goNotifications() {
    this._step = 'notifications';
  }

  // ─── C.5 — joiner own-photo step (best-effort, never blocks) ──────

  _pickPhoto() {
    this.renderRoot.querySelector('#joiner-photo-file')?.click();
  }

  async _onPhotoChosen(e) {
    const blob = await this._readPickedImage(e);
    if (!blob) return;
    this._photoBlob = blob;
    if (this._photoPreview) URL.revokeObjectURL(this._photoPreview);
    this._photoPreview = URL.createObjectURL(blob);
  }

  // Upload runs once the family exists (the user-avatar Storage rule
  // requires membership — redeemConnectCode already added us). NEVER
  // throws: a photo failure must not strand the joiner mid-onboarding.
  async _uploadOwnPhotoIfAny() {
    if (!this._photoBlob || !this._joinedFamilyId) return;
    try {
      await dataStore.uploadUserAvatar(this._joinedFamilyId, this._photoBlob);
    } catch (err) {
      console.warn('joiner avatar upload failed (non-fatal):', err);
      toast("Couldn't save your photo, add it later in Settings.");
    }
  }

  async _continueFromPhoto() {
    if (this._uploadingPhoto) return;
    this._uploadingPhoto = true;
    try {
      await this._uploadOwnPhotoIfAny();
    } finally {
      this._uploadingPhoto = false;
    }
    this._afterPhoto();
  }

  _skipPhoto() {
    this._afterPhoto();
  }

  // After the photo step: if the family has children, go to the 2A
  // parent-claim prompt; otherwise on to the notifications explainer.
  _afterPhoto() {
    if (this._pendingKids.length) {
      this._children = this._pendingKids;
      this._step = 'parent';
    } else {
      this._goNotifications();
    }
  }

  // Validate + process a file <input> change into a 512² JPEG blob.
  // (Mirrors onboarding-wizard._readPickedImage / _processAvatarImage —
  // kept self-contained; consolidate in the onboarding-parity session.)
  async _readPickedImage(e) {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow re-picking the same file
    if (!file) return null;
    if (!file.type.startsWith('image/')) {
      toast('Pick an image file (JPG, PNG, etc.).');
      return null;
    }
    if (file.size > 15 * 1024 * 1024) {
      toast('That photo is very large. Pick one under 15 MB.');
      return null;
    }
    try {
      return await this._processAvatarImage(file);
    } catch (err) {
      console.warn('photo processing failed:', err);
      toast("Couldn't read that image. Try another.");
      return null;
    }
  }

  // Center-square crop + downscale to a 512² JPEG before upload, so
  // web + iOS avatars look consistent and the Storage object stays small.
  async _processAvatarImage(file) {
    let bmp;
    try {
      bmp = await createImageBitmap(file, { imageOrientation: 'from-image' });
    } catch {
      bmp = await createImageBitmap(file);
    }
    const side = Math.min(bmp.width, bmp.height);
    const sx = (bmp.width - side) / 2;
    const sy = (bmp.height - side) / 2;
    const out = 512;
    const canvas = document.createElement('canvas');
    canvas.width = out;
    canvas.height = out;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bmp, sx, sy, side, side, 0, 0, out, out);
    bmp.close?.();
    return await new Promise((resolve, reject) => {
      canvas.toBlob(
        (b) => (b ? resolve(b) : reject(new Error('toBlob returned null'))),
        'image/jpeg',
        0.85,
      );
    });
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
    .app-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 46px;
      margin: 0 0 14px;
      padding: 10px 16px;
      border-radius: var(--radius-input, 12px);
      background: rgba(61, 155, 143, 0.18);
      border: 1px solid var(--teal-pebble);
      color: var(--teal-pebble);
      font-family: var(--font-nunito);
      font-weight: 600;
      font-size: 15px;
      text-decoration: none;
      transition: background 180ms ease;
    }
    .app-cta:hover { background: rgba(61, 155, 143, 0.28); }
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
    /* C.5 — joiner own-photo step. Mirrors onboarding-wizard .av-pick:
       a tappable circular ring (preview or placeholder) with a camera
       badge, centered above a caption. */
    .av-pick {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      margin: 6px 0 22px;
    }
    .av-pick button {
      position: relative;
      width: 84px;
      height: 84px;
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
      overflow: visible;
      color: var(--teal-pebble);
    }
    .av-pick .ring {
      width: 84px;
      height: 84px;
      border-radius: 999px;
      overflow: hidden;
      border: 2px solid var(--teal-pebble);
      background: rgba(61, 155, 143, 0.12);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: border-color 180ms ease, box-shadow 180ms ease;
    }
    .av-pick button:hover .ring {
      border-color: var(--sage-mid, #2d7567);
      box-shadow: 0 0 0 4px rgba(61, 155, 143, 0.16);
    }
    .av-pick img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .av-pick .ph {
      width: 34px;
      height: 34px;
      opacity: 0.6;
    }
    .av-pick .cam {
      position: absolute;
      right: -1px;
      bottom: -1px;
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: var(--teal-pebble);
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--panel-solid, #fffcf7);
      box-shadow: 0 1px 4px rgba(20, 12, 6, 0.3);
    }
    .av-pick .cam svg {
      width: 14px;
      height: 14px;
    }
    .av-pick .cap {
      font-size: 12px;
      color: var(--teal-pebble);
      opacity: 0.75;
    }
    .av-pick input[type='file'] {
      display: none;
    }
  `;

  // C.5 — the post-redeem own-photo step (parity with iOS
  // CairnConnectionView.photoStepContent). Optional + best-effort:
  // Continue uploads the picked photo then proceeds, Skip just
  // proceeds. _afterPhoto routes to the parent prompt or finishes.
  _renderPhoto() {
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
          <h1>Add your photo</h1>
          <p class="prompt-lede">
            So the rest of the family knows who's who. You can always
            change it later in Settings.
          </p>
          <div class="av-pick">
            <button
              type="button"
              @click=${this._pickPhoto}
              aria-label="Add a profile photo"
            >
              <span class="ring">
                ${this._photoPreview
                  ? html`<img src=${this._photoPreview} alt="" />`
                  : html`<svg
                      class="ph"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      />
                    </svg>`}
              </span>
              <span class="cam">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M9 3l-1.8 2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.2L15 3H9zm3 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 10z"
                  />
                </svg>
              </span>
            </button>
            <span class="cap"
              >${this._photoPreview ? 'Tap to change' : 'Add a photo (optional)'}</span
            >
            <input
              id="joiner-photo-file"
              type="file"
              accept="image/*"
              @change=${this._onPhotoChosen}
            />
          </div>
          <div class="actions">
            <glass-button
              variant="primary"
              size="lg"
              full
              ?disabled=${this._uploadingPhoto}
              @click=${this._continueFromPhoto}
            >
              ${this._uploadingPhoto ? 'Saving…' : 'Continue'}
            </glass-button>
            <glass-button
              variant="ghost"
              size="lg"
              full
              ?disabled=${this._uploadingPhoto}
              @click=${this._skipPhoto}
            >
              Skip for now
            </glass-button>
          </div>
        </glass-panel>
      </div>
    `;
  }

  // Notifications explainer — the final step for every joiner persona
  // (iOS parity). The Portal has no web push, so this is informational:
  // notifications live in the mobile app. Deliberately does NOT touch
  // the iOS notificationsOnboardingComplete flag (that gates the iOS
  // on-device prompt). "Finish" dispatches `joined` into the app.
  _renderNotifications() {
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
          <h1>Stay in the loop</h1>
          <p class="prompt-lede">
            Reminders and your family's daily brief come from the
            PebblePath mobile app. Turn them on there when you install it.
          </p>
          <div class="what-you-get">
            <strong>Notifications are set up on your phone.</strong>
            When you install the PebblePath app and sign in, it asks
            permission right on your device. Your family and everything
            here is already waiting for you.
          </div>
          <a
            class="app-cta"
            href="https://pebblepath.ai"
            target="_blank"
            rel="noopener"
          >
            Get the PebblePath app
          </a>
          <div class="actions">
            <glass-button variant="primary" size="lg" full @click=${this._finishJoin}>
              Finish
            </glass-button>
          </div>
        </glass-panel>
      </div>
    `;
  }

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
                    @click=${this._goNotifications}
                  >
                    Continue
                  </glass-button>
                </div>
              `
            : html`
                <h1>Are you a parent or caregiver in ${familyName}?</h1>
                <p class="prompt-lede">
                  If you're a parent or active caregiver of one of
                  these children, ask to be linked to them. An
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
    if (this._step === 'photo') return this._renderPhoto();
    if (this._step === 'parent') return this._renderParentPrompt();
    if (this._step === 'notifications') return this._renderNotifications();
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
                  You won't see PebblePath's child-development data. That stays private to the parents.
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
