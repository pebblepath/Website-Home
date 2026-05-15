import { LitElement, html, css } from 'lit';
import {
  signIn,
  signInWithApple,
  signInWithEmail,
  signUpWithEmail,
  sendPasswordReset,
  isConfigured,
} from '../services/firebase.js';
import './glass-panel.js';
import './glass-button.js';
import './cairn-mark.js';

/**
 * Phase-2 pre-auth registration landing — replaces the simpler sign-in
 * screen with a 3-card "what do you want to do?" menu before the user
 * authenticates. Each card expands into a focused sub-flow:
 *
 *   1. Existing account → email/password + Apple + Google (PP users
 *      land directly on the dashboard since their familyId is already
 *      set; brand-new accounts created here drop into the post-auth
 *      wizard if no family pointer exists yet).
 *   2. New family → captures family name pre-auth, signs in, then
 *      `createCairnOnlyFamily` runs via the same path the post-auth
 *      wizard uses.
 *   3. Join with code → CAIRN-XXXX input, sign in, falls through to
 *      `join-family-screen` via the existing localStorage handoff.
 *
 * Auth providers (email, Google, Apple) live on every card so users
 * can pick the method that matches their existing PP credentials.
 *
 * Events emitted to app-shell:
 *   pending-create — { detail: { familyName } } — stash the family
 *     name on localStorage so app-shell can run createCairnOnlyFamily
 *     after auth completes.
 */

const PENDING_CREATE_KEY = 'cairn:pendingCreateFamily';
const PENDING_JOIN_KEY = 'cairn:pendingJoinCode';
const PENDING_LOGIN_KEY = 'cairn:pendingLoginIntent';

export class RegisterScreen extends LitElement {
  static properties = {
    error: { state: true },
    busy: { state: true },
    joinCode: { type: String },
    /** 'choose' | 'login' | 'create' | 'join' */
    _step: { state: true },
    /** Which auth method the user picked inside a step. */
    _authMode: { state: true },
    _email: { state: true },
    _password: { state: true },
    _confirmPassword: { state: true },
    _displayName: { state: true },
    _familyName: { state: true },
    _code: { state: true },
    _resetSent: { state: true },
  };

  constructor() {
    super();
    this.error = '';
    this.busy = false;
    this.joinCode = '';
    this._step = 'choose';
    this._authMode = null;
    this._email = '';
    this._password = '';
    this._confirmPassword = '';
    this._displayName = '';
    this._familyName = '';
    this._code = '';
    this._resetSent = false;
  }

  willUpdate(changed) {
    if (changed.has('joinCode') && this.joinCode && this._step === 'choose') {
      // Landed via ?join=URL — drop the user straight on the join card.
      this._code = this.joinCode;
      this._step = 'join';
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
      max-width: 480px;
    }
    .brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      margin-bottom: 24px;
      animation: brandIn 720ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes brandIn {
      from { opacity: 0; transform: translateY(6px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .brand { animation: none; }
    }
    .mark-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .brand-icon {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      display: block;
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
    }
    .mark-name {
      font-family: var(--font-pebble);
      font-weight: 300;
      font-synthesis: weight;
      font-size: 44px;
      letter-spacing: 0.04em;
      line-height: 1;
      /* Brand teal — matches the iOS welcome screen's PebblePath
         wordmark color so the two surfaces feel like one product. */
      color: var(--teal-pebble);
      transform: translateY(4px);
      text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
    }
    .companion {
      font-family: var(--font-nunito);
      font-weight: 600;
      font-size: 11.5px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--teal-pebble);
    }
    .companion::before,
    .companion::after {
      content: '';
      display: inline-block;
      width: 18px;
      height: 1px;
      background: var(--teal-pebble);
      vertical-align: middle;
      opacity: 0.55;
    }
    .companion::before { margin-right: 10px; }
    .companion::after { margin-left: 10px; }

    h1 {
      margin: 0 0 6px;
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 22px;
      letter-spacing: -0.02em;
      text-align: center;
      color: var(--teal-pebble);
    }
    .lede {
      color: var(--teal-pebble);
      opacity: 0.82;
      font-size: 14.5px;
      line-height: 1.5;
      margin: 0 0 18px;
      text-align: center;
    }

    .cards {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .card {
      display: flex;
      align-items: center;
      gap: 14px;
      width: 100%;
      padding: 14px 16px;
      background: rgba(255, 248, 235, 0.05);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-tile);
      cursor: pointer;
      text-align: left;
      transition: background 180ms ease, border-color 180ms ease, transform 160ms ease;
      font: inherit;
      color: inherit;
    }
    .card:hover {
      background: rgba(255, 248, 235, 0.09);
      border-color: var(--glass-border-strong);
      transform: translateY(-1px);
    }
    .card .icon-cell {
      width: 42px;
      height: 42px;
      border-radius: 11px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: #fff;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
    }
    .card .icon-cell.tide { background: var(--gradient-tide); }
    .card .icon-cell.sage { background: var(--gradient-sage); }
    .card .icon-cell.amber { background: var(--gradient-amber); }
    .card .icon-cell svg { width: 22px; height: 22px; fill: currentColor; }
    .card .label {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 15px;
      letter-spacing: -0.005em;
      color: var(--teal-pebble);
    }
    .card .desc {
      font-size: 12.5px;
      color: var(--teal-pebble);
      opacity: 0.78;
      line-height: 1.45;
      margin-top: 2px;
    }

    .step {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .back {
      background: transparent;
      border: none;
      color: var(--text-secondary);
      font: inherit;
      font-size: 13.5px;
      cursor: pointer;
      padding: 4px 6px;
      align-self: flex-start;
    }
    .back:hover { color: var(--text-primary); }

    label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--teal-pebble);
      letter-spacing: -0.005em;
      margin-bottom: 5px;
    }
    input[type='text'],
    input[type='email'],
    input[type='password'] {
      width: 100%;
      min-height: 44px;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.6);
      border: 1px solid rgba(61, 155, 143, 0.3);
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
      background: rgba(255, 255, 255, 0.85);
    }
    input::placeholder {
      color: rgba(61, 155, 143, 0.45);
    }

    .or {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--teal-pebble);
      opacity: 0.7;
      font-size: 11.5px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin: 4px 0;
    }
    .or::before,
    .or::after {
      content: '';
      flex: 1;
      height: 1px;
      background: rgba(61, 155, 143, 0.25);
    }

    .providers {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .provider-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
      min-height: 44px;
      padding: 0 14px;
      border-radius: var(--radius-pill);
      /* Google brand style: white background, dark text, hairline
         border. Matches the iOS Google sign-in button. */
      border: 1px solid rgba(0, 0, 0, 0.12);
      background: #fff;
      color: #3c4043;
      font: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      transition: background 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
    }
    .provider-btn:hover:not(:disabled) {
      background: #f8f8f8;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
    }
    .provider-btn.apple {
      background: #000;
      color: #fff;
      border-color: #000;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
    .provider-btn.apple:hover:not(:disabled) {
      background: #1a1a1a;
    }
    .provider-btn:disabled { opacity: 0.55; cursor: not-allowed; }
    .provider-btn svg { width: 18px; height: 18px; flex-shrink: 0; }

    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      font-size: 13px;
      color: var(--teal-pebble);
      opacity: 0.82;
    }
    .toggle-row button {
      background: transparent;
      border: none;
      color: var(--terracotta-deep, #8b5a3e);
      cursor: pointer;
      font: inherit;
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 3px;
      padding: 0;
    }
    .actions { display: flex; gap: 10px; margin-top: 4px; }
    .actions glass-button { flex: 1; }

    .error {
      color: var(--rose-soft);
      font-size: 13px;
      margin-top: 4px;
    }
    .success {
      color: var(--teal-pebble);
      font-size: 13px;
      margin-top: 4px;
    }

    .config-hint {
      margin-top: 14px;
      padding: 12px 14px;
      border-radius: var(--radius-tile);
      background: rgba(212, 168, 67, 0.1);
      border: 1px solid rgba(212, 168, 67, 0.26);
      color: rgba(255, 232, 200, 0.9);
      font-size: 13px;
      line-height: 1.5;
    }

    .footnote {
      /* Sits over the panel's drop shadow zone where the wallpaper
         darkens — white reads cleanly here. */
      margin-top: 22px;
      color: rgba(255, 255, 255, 0.92);
      font-size: 12px;
      text-align: center;
      letter-spacing: 0.04em;
      font-weight: 500;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
    }
  `;

  // ─── Inline icons ──────────────────────────────────────────────────

  _iconLogin() {
    return html`<svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zM20 19h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"/>
    </svg>`;
  }
  _iconCreate() {
    return html`<svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4zm0 4.7l1.6 3.2 3.6.5-2.6 2.5.6 3.5L12 14.7l-3.2 1.7.6-3.5-2.6-2.5 3.6-.5L12 6.7z"/>
    </svg>`;
  }
  _iconJoin() {
    return html`<svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>`;
  }
  _iconGoogle() {
    return html`<svg viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.65 4.65-6.08 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.05 6.05 29.27 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20c0-1.34-.14-2.65-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.31 14.69l6.57 4.82C14.66 16.06 19.04 13 24 13c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.05 6.05 29.27 4 24 4 16.32 4 9.66 8.34 6.31 14.69z"/>
      <path fill="#4CAF50" d="M24 44c5.16 0 9.86-1.98 13.41-5.19l-6.19-5.24C29.21 35.09 26.71 36 24 36c-5.2 0-9.62-3.33-11.28-7.97l-6.51 5.02C9.5 39.56 16.23 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.79 2.24-2.23 4.16-4.09 5.57l6.19 5.24C39.5 36.46 44 30.5 44 24c0-1.34-.14-2.65-.4-3.5z"/>
    </svg>`;
  }
  _iconApple() {
    return html`<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M17.05 12.5c0-2.92 2.4-4.32 2.5-4.4-1.36-2-3.48-2.27-4.24-2.3-1.8-.18-3.52 1.06-4.43 1.06-.92 0-2.33-1.03-3.84-1-1.97.03-3.8 1.15-4.82 2.92-2.06 3.57-.52 8.85 1.48 11.76.98 1.42 2.14 3.02 3.66 2.97 1.47-.06 2.03-.95 3.81-.95 1.78 0 2.28.95 3.84.92 1.58-.03 2.59-1.45 3.55-2.88 1.12-1.65 1.58-3.26 1.6-3.34-.04-.02-3.07-1.18-3.11-4.66zm-2.94-8.55c.81-.99 1.36-2.36 1.21-3.73-1.17.05-2.59.78-3.42 1.76-.75.87-1.4 2.27-1.23 3.6 1.3.1 2.64-.66 3.44-1.63z"/>
    </svg>`;
  }

  // ─── Step navigation ──────────────────────────────────────────────

  _go(step) {
    this._step = step;
    this.error = '';
    this._authMode = null;
    this._resetSent = false;
    // Stash intent so app-shell can tailor the post-auth wizard heading
    // if the user lands without a family pointer. Cleared by the wizard
    // (or app-shell) once consumed. Only stash for the Login card —
    // Create/Join already have their own stashes (PENDING_CREATE_KEY,
    // PENDING_JOIN_KEY) that get consumed when the auth completes.
    try {
      if (step === 'login') {
        localStorage.setItem(PENDING_LOGIN_KEY, '1');
      } else {
        localStorage.removeItem(PENDING_LOGIN_KEY);
      }
    } catch { /* private mode */ }
  }

  // ─── Auth handlers ────────────────────────────────────────────────

  async _runAuth(fn, { onSuccess } = {}) {
    if (this.busy) return;
    this.busy = true;
    this.error = '';
    try {
      const result = await fn();
      onSuccess?.(result);
    } catch (e) {
      console.error(e);
      this.error = this._humanizeAuthError(e);
    } finally {
      this.busy = false;
    }
  }

  _humanizeAuthError(e) {
    const code = e?.code ?? '';
    if (code === 'auth/invalid-credential' || code === 'auth/wrong-password') {
      return 'That email and password don\'t match. Try again or reset your password.';
    }
    if (code === 'auth/user-not-found') return 'No account with that email yet.';
    if (code === 'auth/email-already-in-use') return 'An account already exists for that email — try signing in instead.';
    if (code === 'auth/invalid-email') return 'That email doesn\'t look right.';
    if (code === 'auth/weak-password') return 'Pick a password with at least 6 characters.';
    if (code === 'auth/popup-closed-by-user') return 'Sign-in cancelled. Try again when you\'re ready.';
    if (code === 'auth/popup-blocked') return 'Your browser blocked the sign-in popup. Allow popups and retry.';
    return e?.message ?? 'Sign-in failed. Try again.';
  }

  _stashCreateIntent() {
    const name = (this._familyName ?? '').trim();
    if (!name) return false;
    try {
      localStorage.setItem(PENDING_CREATE_KEY, name);
    } catch { /* private mode */ }
    return true;
  }

  _stashJoinIntent() {
    const raw = (this._code ?? '').trim().toUpperCase();
    if (!raw) return false;
    const normalized = raw.startsWith('CAIRN-')
      ? raw
      : `CAIRN-${raw.replace(/^CAIRN-?/i, '')}`;
    try {
      localStorage.setItem(PENDING_JOIN_KEY, normalized);
    } catch { /* private mode */ }
    return true;
  }

  // ─── Render ───────────────────────────────────────────────────────

  render() {
    return html`
      <div class="wrap">
        <div class="brand">
          <div class="mark-row">
            <img
              class="brand-icon"
              src=${`${import.meta.env.BASE_URL}assets/cairn-icon.png`}
              srcset=${`${import.meta.env.BASE_URL}assets/cairn-icon.png 1x, ${import.meta.env.BASE_URL}assets/cairn-icon-2x.png 2x`}
              alt="Cairn"
              width="56"
              height="56"
            />
            <div class="mark-name">Cairn</div>
          </div>
          <div class="companion">PebblePath companion</div>
        </div>
        <glass-panel padding="lg" lifted variant="strong">
          ${this._step === 'choose' ? this._renderChoose() : ''}
          ${this._step === 'login' ? this._renderLogin() : ''}
          ${this._step === 'create' ? this._renderCreate() : ''}
          ${this._step === 'join' ? this._renderJoin() : ''}
          ${!isConfigured ? this._renderConfigHint() : ''}
        </glass-panel>
        <div class="footnote">Beta Version</div>
      </div>
    `;
  }

  _renderChoose() {
    return html`
      <h1>Let's get you all set up.</h1>
      <p class="lede">Visiting or Returning from PebblePath?</p>
      <div class="cards">
        <button class="card" @click=${() => this._go('login')}>
          <span class="icon-cell tide" aria-hidden="true">${this._iconLogin()}</span>
          <span>
            <div class="label">Sign in</div>
            <div class="desc">For accounts already connected to a family.</div>
          </span>
        </button>
        <button class="card" @click=${() => this._go('join')}>
          <span class="icon-cell amber" aria-hidden="true">${this._iconJoin()}</span>
          <span>
            <div class="label">Join an existing family</div>
            <div class="desc">Paste your CAIRN-XXXX invite code.</div>
          </span>
        </button>
        <button class="card" @click=${() => this._go('create')}>
          <span class="icon-cell sage" aria-hidden="true">${this._iconCreate()}</span>
          <span>
            <div class="label">Create my own account</div>
            <div class="desc">Start a new family planner on Cairn.</div>
          </span>
        </button>
      </div>
    `;
  }

  _renderProviders({ google, apple, busyText }) {
    return html`
      <div class="providers">
        <button
          class="provider-btn"
          ?disabled=${this.busy || !isConfigured}
          @click=${google}
        >
          ${this._iconGoogle()}
          ${this.busy ? busyText : 'Continue with Google'}
        </button>
        <button
          class="provider-btn apple"
          ?disabled=${this.busy || !isConfigured}
          @click=${apple}
        >
          ${this._iconApple()}
          ${this.busy ? busyText : 'Continue with Apple'}
        </button>
      </div>
    `;
  }

  _renderLogin() {
    const isSignUp = this._authMode === 'signup';
    return html`
      <button class="back" @click=${() => this._go('choose')}>‹ Back</button>
      <h1 style="margin-top:6px;">${isSignUp ? 'Create your account' : 'Welcome back'}</h1>
      <p class="lede">
        ${isSignUp
          ? 'Pick the method you want for sign-in next time.'
          : 'Sign in with the same method you used on PebblePath.'}
      </p>
      ${this._renderProviders({
        google: () =>
          this._runAuth(() => signIn()),
        apple: () =>
          this._runAuth(() => signInWithApple()),
        busyText: 'Signing in…',
      })}
      <div class="or">or use email</div>
      <div class="step">
        ${isSignUp
          ? html`
              <div>
                <label>Your name</label>
                <input
                  type="text"
                  placeholder="First Last"
                  .value=${this._displayName}
                  @input=${(e) => (this._displayName = e.target.value)}
                  autocomplete="name"
                />
              </div>
            `
          : ''}
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            .value=${this._email}
            @input=${(e) => (this._email = e.target.value)}
            autocomplete="email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="At least 6 characters"
            .value=${this._password}
            @input=${(e) => (this._password = e.target.value)}
            autocomplete=${isSignUp ? 'new-password' : 'current-password'}
            @keydown=${(e) => {
              if (e.key === 'Enter' && !this.busy) {
                e.preventDefault();
                this._submitEmailAuth();
              }
            }}
          />
        </div>
        ${this.error ? html`<div class="error">${this.error}</div>` : ''}
        ${this._resetSent
          ? html`<div class="success">Check your inbox for the reset link.</div>`
          : ''}
        <div class="actions">
          <glass-button
            variant="primary"
            ?disabled=${this.busy}
            @click=${this._submitEmailAuth}
          >
            ${this.busy
              ? isSignUp
                ? 'Creating…'
                : 'Signing in…'
              : isSignUp
              ? 'Create account'
              : 'Sign in'}
          </glass-button>
        </div>
        <div class="toggle-row">
          ${isSignUp
            ? html`
                <span>Already have an account?</span>
                <button @click=${() => { this._authMode = null; this.error = ''; }}>
                  Sign in
                </button>
              `
            : html`
                <button @click=${this._sendReset}>Forgot password?</button>
                <span>·</span>
                <button @click=${() => { this._authMode = 'signup'; this.error = ''; }}>
                  Create account
                </button>
              `}
        </div>
      </div>
    `;
  }

  _submitEmailAuth() {
    const isSignUp = this._authMode === 'signup';
    const email = (this._email ?? '').trim();
    const pw = this._password ?? '';
    if (!email || !pw) {
      this.error = 'Email and password are required.';
      return;
    }
    if (isSignUp) {
      this._runAuth(() =>
        signUpWithEmail(email, pw, (this._displayName ?? '').trim()),
      );
    } else {
      this._runAuth(() => signInWithEmail(email, pw));
    }
  }

  async _sendReset() {
    const email = (this._email ?? '').trim();
    if (!email) {
      this.error = 'Enter your email first, then tap Forgot password.';
      return;
    }
    this.busy = true;
    this.error = '';
    try {
      await sendPasswordReset(email);
      this._resetSent = true;
    } catch (e) {
      this.error = this._humanizeAuthError(e);
    } finally {
      this.busy = false;
    }
  }

  _renderCreate() {
    return html`
      <button class="back" @click=${() => this._go('choose')}>‹ Back</button>
      <h1 style="margin-top:6px;">Start a new family</h1>
      <p class="lede">
        Name your family — you can rename it later and invite others
        as soon as you're in.
      </p>
      <div class="step">
        <div>
          <label>Family name</label>
          <input
            type="text"
            placeholder="The Paris Family"
            .value=${this._familyName}
            @input=${(e) => (this._familyName = e.target.value)}
            maxlength="64"
          />
        </div>
        ${this.error ? html`<div class="error">${this.error}</div>` : ''}
        <p style="font-size:12.5px;color:var(--text-tertiary);margin:6px 0 0;">
          Continue with a sign-in method — we'll create the family right
          after.
        </p>
        ${this._renderProviders({
          google: () => this._continueCreate(() => signIn()),
          apple: () => this._continueCreate(() => signInWithApple()),
          busyText: 'Creating…',
        })}
      </div>
    `;
  }

  _continueCreate(authFn) {
    if (!this._stashCreateIntent()) {
      this.error = 'Give your family a name first.';
      return;
    }
    this._runAuth(authFn);
  }

  _renderJoin() {
    return html`
      <button class="back" @click=${() => this._go('choose')}>‹ Back</button>
      <h1 style="margin-top:6px;">Join a family</h1>
      <p class="lede">
        Paste the code you were sent. Codes look like
        <strong>CAIRN-XXXX</strong>.
      </p>
      <div class="step">
        <div>
          <label>Family code</label>
          <input
            class="code"
            type="text"
            placeholder="CAIRN-XXXX"
            .value=${this._code}
            @input=${(e) => (this._code = e.target.value)}
            autocapitalize="characters"
            autocomplete="off"
            spellcheck="false"
            maxlength="14"
          />
        </div>
        ${this.error ? html`<div class="error">${this.error}</div>` : ''}
        ${this._renderProviders({
          google: () => this._continueJoin(() => signIn()),
          apple: () => this._continueJoin(() => signInWithApple()),
          busyText: 'Joining…',
        })}
      </div>
    `;
  }

  _continueJoin(authFn) {
    if (!this._stashJoinIntent()) {
      this.error = 'Paste your CAIRN-XXXX code first.';
      return;
    }
    this._runAuth(authFn);
  }

  _renderConfigHint() {
    return html`
      <div class="config-hint">
        Sign-in is awaiting your Firebase config — copy
        <code>.env.example</code> to <code>.env</code> and fill in the web-app
        values from PebblePath's Firebase Console.
      </div>
    `;
  }
}

customElements.define('register-screen', RegisterScreen);
