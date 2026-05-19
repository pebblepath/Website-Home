import { LitElement, html, css } from 'lit';
import { dataStore } from '../services/data.js';
import { toast } from '../services/toast.js';
import './glass-panel.js';
import './glass-button.js';

/**
 * Post-auth onboarding wizard (the user authenticated via
 * register-screen — P3-6a — and has no family yet). P3-6b
 * (2026-05-19): the choose step now MIRRORS iOS FamilySetupView
 * ("Set up your family") — exactly two options, iOS copy + order:
 *
 *   create → Start a new family → name → the P3-5 "Do you have
 *            children?" branch (Yes: createPebblePathFamily +
 *            createChild · No: createCairnOnlyFamily). Mirrors
 *            iOS FamilySetup → AddChild step-0.
 *   join   → I have an invite code → dispatch `join-code`;
 *            app-shell routes through join-family-screen
 *            (→ redeemConnectCode → flat member + the post-join
 *            parent-prompt).
 *
 * The Cairn-era third option ("I have the PebblePath app" App
 * Store nudge) was REMOVED — it made no sense post-auth and iOS
 * FamilySetup has no such step (Thomas smoke-test 2026-05-19).
 *
 * Events:
 *   join-code — { detail: { code } } when the join path submits a
 *               code; app-shell wires it into the join-family flow.
 */
const PENDING_LOGIN_KEY = 'cairn:pendingLoginIntent';

export class OnboardingWizard extends LitElement {
  static properties = {
    user: { type: Object },
    _mode: { state: true },
    _code: { state: true },
    _familyName: { state: true },
    _busy: { state: true },
    _error: { state: true },
    // P3-5b (2026-05-19) — flat-family "Do you have children?"
    // branch (functional parity with iOS P3-4b; design-sandbox/17).
    // Captured on the create path so we route to the right
    // family-create: with children → createPebblePathFamily (C-i:
    // creator in memberIds, can author children) + createChild;
    // without → the existing createCairnOnlyFamily (unchanged,
    // first-class family-coordinator member — "No" is NOT lesser).
    _childName: { state: true },
    _childDob: { state: true },
    // Optional avatars. *PhotoBlob = processed 512² JPEG (not
    // reactive); *PhotoPreview = object-URL for the on-screen circle
    // (reactive). Child → uploaded post-createChild; parent →
    // uploaded post-family-create (both submit paths).
    _childPhotoPreview: { state: true },
    _parentPhotoPreview: { state: true },
    /** 'welcome' (default — brand-new user) or 'recovery' (signed-in
     *  user came in via Login but has no family pointer). Affects only
     *  the choose-step heading + lede so the message lands as
     *  "we couldn't find your family" instead of "let's get you set up". */
    _flavor: { state: true },
  };

  constructor() {
    super();
    this.user = null;
    // P3-5b — added 'children' (the "Do you have children?" branch)
    // + 'addchild' (the single-child add on the with-children path)
    // modes.
    this._mode = 'choose'; // choose|join|create|children|addchild|download
    this._code = '';
    this._familyName = '';
    this._busy = false;
    this._error = '';
    this._childName = '';
    this._childDob = ''; // <input type="date"> value (YYYY-MM-DD)
    this._childPhotoBlob = null;     // processed Blob (not reactive)
    this._childPhotoPreview = null;  // object-URL string (reactive)
    this._parentPhotoBlob = null;
    this._parentPhotoPreview = null;
    this._flavor = 'welcome';
    // Detect login-intent flag the register-screen stashed when the
    // user clicked the Sign-in card. Consumed-and-cleared here so a
    // page refresh doesn't keep us in recovery mode.
    try {
      if (localStorage.getItem(PENDING_LOGIN_KEY) === '1') {
        this._flavor = 'recovery';
        localStorage.removeItem(PENDING_LOGIN_KEY);
      }
    } catch { /* private mode */ }
  }

  willUpdate(changed) {
    if (changed.has('user') && this.user && !this._familyName) {
      // Seed the family-name input with a friendly default ("Smith Family"
      // when the auth user's name is "Sarah Smith"). User can overwrite.
      const last = (this.user.displayName ?? '').trim().split(/\s+/).slice(-1)[0];
      if (last && last.length > 1) {
        this._familyName = `${last} Family`;
      }
    }
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
    h1 {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 26px;
      letter-spacing: -0.02em;
      margin: 0 0 6px;
      text-align: center;
      color: var(--teal-pebble);
    }
    .lede {
      color: var(--teal-pebble);
      opacity: 0.82;
      font-size: 14.5px;
      line-height: 1.5;
      margin: 0 0 22px;
      text-align: center;
    }
    .options {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .option {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 16px;
      width: 100%;
      background: rgba(255, 248, 235, 0.05);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-tile);
      cursor: pointer;
      text-align: left;
      transition: background 180ms ease, border-color 180ms ease, transform 160ms ease;
      font: inherit;
      color: inherit;
    }
    .option:hover {
      background: rgba(255, 248, 235, 0.09);
      border-color: var(--glass-border-strong);
      transform: translateY(-1px);
    }
    .option:active { transform: translateY(0); }
    .option .icon-cell {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: #fff;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
    }
    .option .icon-cell.tide { background: var(--gradient-tide); }
    .option .icon-cell.sage { background: var(--gradient-sage); }
    .option .icon-cell.amber { background: var(--gradient-amber); }
    .option .icon-cell svg { width: 22px; height: 22px; }
    /* P3-6b fix (Thomas 2026-05-19) — this wizard renders on a LIGHT
       glass panel, but --text-primary/--text-secondary are Portal's
       DUSK (white) text vars → white-on-light, unreadable. Use
       --teal-pebble (the dark green h1/.lede already use correctly),
       opacity for the secondary hierarchy. Same fix applied to
       label / input / placeholder / .back below. */
    .option .label {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 15.5px;
      letter-spacing: -0.01em;
      color: var(--teal-pebble);
    }
    .option .desc {
      font-size: 12.5px;
      color: var(--teal-pebble);
      opacity: 0.78;
      line-height: 1.45;
      margin-top: 2px;
    }

    .step {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--teal-pebble);
      opacity: 0.82;
      letter-spacing: -0.005em;
      margin-bottom: 6px;
    }
    input {
      width: 100%;
      min-height: 44px;
      box-sizing: border-box;
      background: rgba(255, 248, 235, 0.08);
      border: 1px solid rgba(255, 248, 235, 0.22);
      border-radius: var(--radius-input);
      padding: 10px 14px;
      color: var(--teal-pebble);
      font-family: var(--font-body);
      font-size: 16px;
      outline: none;
      transition: border-color 200ms ease, background 200ms ease;
    }
    input.code {
      font-family: 'SF Mono', ui-monospace, monospace;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    input:focus {
      border-color: var(--teal-pebble);
      background: rgba(255, 248, 235, 0.12);
    }
    input::placeholder {
      color: var(--teal-pebble);
      opacity: 0.42;
    }
    .actions {
      display: flex;
      gap: 10px;
      margin-top: 8px;
    }
    .actions glass-button { flex: 1; }
    .error {
      color: var(--rose-soft);
      font-size: 13px;
      margin-top: 4px;
    }
    .back {
      background: transparent;
      border: none;
      color: var(--teal-pebble);
      opacity: 0.85;
      font: inherit;
      font-size: 13.5px;
      cursor: pointer;
      padding: 4px 6px;
      align-self: flex-start;
    }
    .back:hover { opacity: 1; }
    /* Avatar picker (onboarding "Add your child" + "Start a new
       family" parent photo) — optional; the chosen image is
       center-square cropped + resized to 512² JPEG client-side
       before upload to the Build-14 Storage path. The OUTER button
       is overflow:visible so the camera badge isn't clipped; only
       the inner .ring clips the image to a circle. The ring border
       is brand green (was a near-white that vanished on the light
       Daybreak wallpaper). */
    .av-pick {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      margin-bottom: 2px;
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
    /* P3-6b — .download-card / .app-store-cta / .alt styles removed
       with _renderDownload (the "get the iOS app" card). */
  `;

  _go(mode) {
    this._mode = mode;
    this._error = '';
  }

  _submitJoin() {
    // Phase 2C Slice 4e (2026-05-18): the unified connect code is a
    // plain 6-char code (no CAIRN- prefix — 2C-2). Accept that AND a
    // pasted legacy CAIRN-XXXX (dual-accept resolves both server-side
    // via findFamilyByConnectCode). Pass the code through AS-IS — no
    // forced normalization that would mangle one of the two formats.
    const raw = (this._code ?? '').trim().toUpperCase().replace(/\s+/g, '');
    if (!raw) {
      this._error = 'Paste the connect code you were sent.';
      return;
    }
    const isUnified = /^[A-Z0-9]{6}$/.test(raw);
    const isLegacyCairn = /^CAIRN-[A-Z0-9]{3,6}$/.test(raw);
    if (!isUnified && !isLegacyCairn) {
      this._error = 'Connect codes are 6 characters.';
      return;
    }
    this._error = '';
    // Hand off to app-shell — it routes to join-family-screen, which
    // does the unified redeemConnectCode write (→ cairnMemberIds).
    this.dispatchEvent(
      new CustomEvent('join-code', {
        detail: { code: raw },
        bubbles: true,
        composed: true,
      }),
    );
  }

  // P3-5b — the family-name step no longer creates the family
  // directly. It advances to the "Do you have children?" branch,
  // because the ANSWER decides which family-create runs (C-i):
  //   • Yes → createPebblePathFamily (creator in memberIds → can
  //           author children) + createChild
  //   • No  → the existing createCairnOnlyFamily (byte-unchanged;
  //           a first-class family-coordinator member — NOT lesser)
  _goChildrenQuestion() {
    const name = (this._familyName ?? '').trim();
    if (!name) {
      this._error = 'Give your family a name.';
      return;
    }
    this._error = '';
    this._go('children');
  }

  _goAddChild() {
    this._error = '';
    this._go('addchild');
  }

  // "No" outcome — byte-identical to the pre-P3-5b _submitCreate
  // (the existing Cairn-only / family-coordinator path). "No" is a
  // first-class member, never a dead-end or a lesser tier.
  async _submitNoChildren() {
    const name = (this._familyName ?? '').trim();
    if (!name) {
      this._error = 'Give your family a name.';
      return;
    }
    this._busy = true;
    this._error = '';
    try {
      const fid = await dataStore.createCairnOnlyFamily(name);
      await this._uploadParentPhotoIfAny(fid);
      toast(`Welcome to ${name}.`);
      // The user-doc listener fires with cairnFamilyId set; app-shell
      // re-evaluates _needsOnboarding() (now false) and renders the
      // dashboard. No need to dispatch anything.
    } catch (e) {
      console.error('Create family failed:', e);
      this._error = e?.code === 'permission-denied'
        ? "Couldn't create the family — Firestore rules may not be deployed yet."
        : `Couldn't create the family: ${e?.message ?? 'try again'}`;
    } finally {
      this._busy = false;
    }
  }

  // "Yes" outcome — C-i: PP-style family (creator in memberIds) so
  // the child can be authored (the deployed /children CREATE rule
  // is isFamilyMember). Then createChild stamps parentIds :=
  // memberIds (Phase-1) + needsServerSeed (the β safety-net CF
  // seeds milestones). User-doc listener picks up `familyId` →
  // app-shell drops to the dashboard (same pattern as the No path).
  async _submitWithChild() {
    const name = (this._familyName ?? '').trim();
    const childName = (this._childName ?? '').trim();
    if (!name) {
      this._error = 'Give your family a name.';
      return;
    }
    if (!childName) {
      this._error = "Add your child's name.";
      return;
    }
    if (!this._childDob) {
      this._error = "Add your child's date of birth.";
      return;
    }
    const dob = new Date(`${this._childDob}T00:00:00`);
    if (Number.isNaN(dob.getTime())) {
      this._error = "That date of birth doesn't look right.";
      return;
    }
    this._busy = true;
    this._error = '';
    try {
      const fid = await dataStore.createPebblePathFamily(name);
      const childId = await dataStore.createChild(fid, {
        name: childName,
        dateOfBirth: dob,
      });
      // Optional avatar — best-effort, NEVER blocks onboarding. The
      // family + child already exist; if the upload fails the photo
      // can be set later in the app/Settings.
      if (this._childPhotoBlob) {
        try {
          await dataStore.uploadChildAvatar(
            fid,
            childId,
            this._childPhotoBlob,
          );
        } catch (photoErr) {
          console.warn('child avatar upload failed (non-fatal):', photoErr);
          toast("Family created — couldn't save the photo, add it later.");
        }
      }
      await this._uploadParentPhotoIfAny(fid);
      toast(`Welcome to ${name}.`);
      // user-doc listener fires with familyId set; app-shell
      // re-evaluates _needsOnboarding() (now false) → dashboard.
    } catch (e) {
      console.error('Create family + child failed:', e);
      this._error = e?.code === 'permission-denied'
        ? "Couldn't set up your family — Firestore rules may not be deployed yet."
        : `Couldn't set up your family: ${e?.message ?? 'try again'}`;
    } finally {
      this._busy = false;
    }
  }

  // ─── Inline icons (sage hiker, tide paperplane, amber download) ────

  _iconJoin() {
    return html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>`;
  }
  _iconCreate() {
    return html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4zm0 4.7l1.6 3.2 3.6.5-2.6 2.5.6 3.5L12 14.7l-3.2 1.7.6-3.5-2.6-2.5 3.6-.5L12 6.7z"/>
    </svg>`;
  }
  // "+" — used for "Start a new family" and "Yes, add a child"
  // (replaced the shield-star, which read as a rating/award glyph).
  _iconPlus() {
    return html`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.4"
      stroke-linecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>`;
  }
  // Single person/torso — used for "No, this is not a parent account"
  // (distinct from the group glyph used for "I have an invite code").
  _iconPerson() {
    return html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>`;
  }
  // P3-6b — _iconDownload removed with the "I have the PebblePath
  // app" card (no longer part of the post-auth family-setup choose).

  render() {
    if (this._mode === 'join') return this._renderJoin();
    if (this._mode === 'create') return this._renderCreate();
    if (this._mode === 'children') return this._renderChildren();
    if (this._mode === 'addchild') return this._renderAddChild();
    return this._renderChoose();
  }

  // P3-6b (2026-05-19) — the post-auth choose step now mirrors iOS
  // FamilySetupView ("Set up your family"): exactly TWO options
  // (Start a new family / I have an invite code), iOS copy + order.
  // The Cairn-era "I have the PebblePath app" download card is
  // REMOVED — it made no sense post-auth (Thomas smoke-test
  // 2026-05-19) and iOS FamilySetup has no such option. The recovery
  // flavour (signed-in user with no family pointer) keeps a distinct
  // heading but the same 2 options. Portal keeps its own dusk-glass
  // skin + icons (literal = flow/copy/options, not a visual reskin —
  // feedback_portal_keeps_own_identity.md).
  _renderChoose() {
    const isRecovery = this._flavor === 'recovery';
    const heading = isRecovery
      ? "We couldn't find a family on your account"
      : 'Set up your family';
    const lede = isRecovery
      ? 'Start a new family, or join one with an invite code.'
      : 'Your family is one shared space — everyone you invite is a member.';
    return html`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <h1>${heading}</h1>
          <p class="lede">${lede}</p>
          <div class="options">
            <button class="option" @click=${() => this._go('create')}>
              <span class="icon-cell sage">${this._iconPlus()}</span>
              <span>
                <div class="label">Start a new family</div>
                <div class="desc">You'll be the first member, you can then add connections with your family invite code.</div>
              </span>
            </button>
            <button class="option" @click=${() => this._go('join')}>
              <span class="icon-cell tide">${this._iconJoin()}</span>
              <span>
                <div class="label">I have an invite code</div>
                <div class="desc">Join a family on PebblePath.</div>
              </span>
            </button>
          </div>
        </glass-panel>
      </div>
    `;
  }

  _renderJoin() {
    return html`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <button class="back" @click=${() => this._go('choose')}>‹ Back</button>
          <h1 style="margin-top:10px;">Join a family</h1>
          <p class="lede">
            Paste the connect code you were sent. It's
            <strong>6 characters</strong>.
          </p>
          <div class="step">
            <div>
              <label>Family code</label>
              <input
                class="code"
                type="text"
                placeholder="ABC123"
                .value=${this._code}
                @input=${(e) => (this._code = e.target.value)}
                @keydown=${(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    this._submitJoin();
                  }
                }}
                autocapitalize="characters"
                autocomplete="off"
                spellcheck="false"
                maxlength="14"
              />
            </div>
            ${this._error ? html`<div class="error">${this._error}</div>` : ''}
            <div class="actions">
              <glass-button variant="primary" @click=${this._submitJoin}>
                Continue
              </glass-button>
            </div>
          </div>
        </glass-panel>
      </div>
    `;
  }

  _renderCreate() {
    return html`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <button class="back" @click=${() => this._go('choose')}>‹ Back</button>
          <h1 style="margin-top:10px;">Start a new family</h1>
          <p class="lede">
            Give your family a name — you can rename it later and invite
            others as soon as you're in.
          </p>
          <div class="step">
            ${this._renderAvatarPicker({
              preview: this._parentPhotoPreview,
              inputId: 'parent-photo-file',
              onPick: this._pickParentPhoto,
              onChange: this._onParentPhotoChosen,
              ariaLabel: 'Add your profile photo',
            })}
            <div>
              <label>Family name</label>
              <input
                type="text"
                placeholder="The Paris Family"
                .value=${this._familyName}
                @input=${(e) => (this._familyName = e.target.value)}
                @keydown=${(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    this._goChildrenQuestion();
                  }
                }}
                maxlength="64"
              />
            </div>
            ${this._error ? html`<div class="error">${this._error}</div>` : ''}
            <div class="actions">
              <glass-button
                variant="primary"
                @click=${this._goChildrenQuestion}
              >
                Continue
              </glass-button>
            </div>
          </div>
        </glass-panel>
      </div>
    `;
  }

  // P3-5b — the flat-family "Do you have children?" branch
  // (functional parity with iOS P3-4b; design-sandbox/17). The
  // answer routes the family-create (C-i): Yes → PP-style family
  // + child; No → the existing Cairn-only / family-coordinator
  // family. "No" is a first-class member, never a lesser tier.
  _renderChildren() {
    return html`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <button class="back" @click=${() => this._go('create')}>‹ Back</button>
          <h1 style="margin-top:10px;">Do you have children to add?</h1>
          <p class="lede">
            This will create a parent role for you in PebblePath, you can
            always add this later.
          </p>
          <div class="options">
            <button
              class="option"
              ?disabled=${this._busy}
              @click=${this._goAddChild}
            >
              <span class="icon-cell sage">${this._iconPlus()}</span>
              <span>
                <div class="label">Yes, I want to add a child.</div>
                <div class="desc">
                  Sets up child milestones, growth insights, tips, and
                  Pebble advisor for your family.
                </div>
              </span>
            </button>
            <button
              class="option"
              ?disabled=${this._busy}
              @click=${this._submitNoChildren}
            >
              <span class="icon-cell tide">${this._iconPerson()}</span>
              <span>
                <div class="label">
                  ${this._busy ? 'Setting up…' : 'No, this is not a parent account.'}
                </div>
                <div class="desc">
                  Collaborate on the family activity planner together.
                </div>
              </span>
            </button>
          </div>
          ${this._error ? html`<div class="error">${this._error}</div>` : ''}
        </glass-panel>
      </div>
    `;
  }

  // Shared circular avatar-picker markup (child + parent). The outer
  // <button> is overflow:visible so the camera badge sits ON the
  // ring edge instead of being clipped; only the inner .ring clips
  // the image to a circle and carries the brand-green border.
  _renderAvatarPicker({ preview, inputId, onPick, onChange, ariaLabel }) {
    return html`
      <div class="av-pick">
        <button type="button" @click=${onPick} aria-label=${ariaLabel}>
          <span class="ring">
            ${preview
              ? html`<img src=${preview} alt="" />`
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
          >${preview ? 'Tap to change' : 'Add a photo (optional)'}</span
        >
        <input
          id=${inputId}
          type="file"
          accept="image/*"
          @change=${onChange}
        />
      </div>
    `;
  }

  // Best-effort parent-avatar upload once the family exists (the
  // user-avatar Storage rule requires family membership, so this can
  // only run post-family-create). NEVER throws — a photo failure
  // must not block onboarding.
  async _uploadParentPhotoIfAny(familyId) {
    if (!this._parentPhotoBlob || !familyId) return;
    try {
      await dataStore.uploadUserAvatar(familyId, this._parentPhotoBlob);
    } catch (err) {
      console.warn('parent avatar upload failed (non-fatal):', err);
      toast("Family created — couldn't save your photo, add it later.");
    }
  }

  _pickChildPhoto() {
    this.renderRoot.querySelector('#kid-photo-file')?.click();
  }
  _pickParentPhoto() {
    this.renderRoot.querySelector('#parent-photo-file')?.click();
  }

  async _onChildPhotoChosen(e) {
    const blob = await this._readPickedImage(e);
    if (!blob) return;
    this._childPhotoBlob = blob;
    if (this._childPhotoPreview) URL.revokeObjectURL(this._childPhotoPreview);
    this._childPhotoPreview = URL.createObjectURL(blob);
  }

  async _onParentPhotoChosen(e) {
    const blob = await this._readPickedImage(e);
    if (!blob) return;
    this._parentPhotoBlob = blob;
    if (this._parentPhotoPreview) URL.revokeObjectURL(this._parentPhotoPreview);
    this._parentPhotoPreview = URL.createObjectURL(blob);
  }

  // Validate + process a file <input> change into a 512² JPEG blob.
  // Returns null (with a toast) on any rejection so callers stay tiny.
  async _readPickedImage(e) {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow re-picking the same file
    if (!file) return null;
    if (!file.type.startsWith('image/')) {
      toast('Pick an image file (JPG, PNG, etc.).');
      return null;
    }
    if (file.size > 15 * 1024 * 1024) {
      toast('That photo is very large — pick one under 15 MB.');
      return null;
    }
    try {
      return await this._processAvatarImage(file);
    } catch (err) {
      console.warn('photo processing failed:', err);
      toast("Couldn't read that image — try another.");
      return null;
    }
  }

  // Center-square crop + downscale to a 512² JPEG before upload —
  // mirrors iOS LocalImageStore.processForAvatar so web + iOS
  // avatars look consistent and the Storage object stays small
  // (~30–80 KB vs a multi-MB phone photo).
  async _processAvatarImage(file) {
    let bmp;
    try {
      bmp = await createImageBitmap(file, { imageOrientation: 'from-image' });
    } catch {
      // Safari < 16 ignores the options bag — retry without it.
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

  // P3-5b — single-child add on the "Yes" path (design-sandbox/17
  // web "Add your child": name + birthday). More children can be
  // added later in the app. Submits createPebblePathFamily +
  // createChild together (C-i + β).
  _renderAddChild() {
    return html`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <button class="back" @click=${() => this._go('children')}>‹ Back</button>
          <h1 style="margin-top:10px;">Add your child</h1>
          <p class="lede">
            You can add another anytime in the app.
          </p>
          <div class="step">
            ${this._renderAvatarPicker({
              preview: this._childPhotoPreview,
              inputId: 'kid-photo-file',
              onPick: this._pickChildPhoto,
              onChange: this._onChildPhotoChosen,
              ariaLabel: 'Add a photo of your child',
            })}
            <div>
              <label>Child's name</label>
              <input
                type="text"
                placeholder="Felix"
                .value=${this._childName}
                @input=${(e) => (this._childName = e.target.value)}
                maxlength="64"
              />
            </div>
            <div>
              <label>Date of birth</label>
              <input
                type="date"
                .value=${this._childDob}
                @input=${(e) => (this._childDob = e.target.value)}
              />
            </div>
            ${this._error ? html`<div class="error">${this._error}</div>` : ''}
            <div class="actions">
              <glass-button
                variant="primary"
                ?disabled=${this._busy}
                @click=${this._submitWithChild}
              >
                ${this._busy ? 'Setting up…' : 'Create family'}
              </glass-button>
            </div>
          </div>
        </glass-panel>
      </div>
    `;
  }

  // P3-6b — _renderDownload removed. The "get the iOS app" nudge is
  // a marketing-site concern, not part of the post-auth family-setup
  // wizard; iOS FamilySetupView has no such step.
}

customElements.define('onboarding-wizard', OnboardingWizard);
