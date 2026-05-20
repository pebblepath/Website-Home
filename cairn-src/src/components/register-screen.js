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
 * Flat-family Phase 3 P3-6 (2026-05-19) — pre-auth registration
 * LITERAL-MIRROR of the iOS pre-auth flow (Thomas, AskUserQuestion
 * 2026-05-19: chose B "literal iOS-mirror rebuild" for the
 * registration surface; this refines the otherwise-functional parity
 * bar for THIS surface specifically). The old Cairn-era 3-card
 * chooser (Sign in / Join CAIRN-XXXX / Create-on-Cairn) is replaced
 * by iOS's three steps:
 *
 *   welcome  → iOS WelcomeView   : two CTAs, Register / Login.
 *   register → iOS CreateAccountView : Name · Email · Password(6+) ·
 *              18+/Terms+Privacy consent (GATES submit) · Create
 *              account · Apple · Google.
 *   login    → iOS SignInView    : Email · Password · Forgot
 *              password · Sign in · Apple · Google.
 *
 * Email/password is now FIRST-CLASS on BOTH register and login
 * alongside Apple/Google (the old Create/Join cards offered NO
 * email/password — the parity gap Thomas caught in smoke test).
 *
 * Register does NOT pre-stash a family name anymore. Like iOS, you
 * authenticate FIRST; the post-auth onboarding-wizard (the P3-5
 * "Do you have children?" branch + family create/join) owns family
 * + child setup. This is REQUIRED by the literal mirror and also
 * fixes the P3-5 bypass (the old pre-stash → createCairnOnlyFamily
 * skipped the new children branch entirely).
 *
 * Visual identity: Portal KEEPS its own dusk-glass + stone-mark
 * chrome (the brand block in render() is byte-unchanged) — "literal"
 * means flow/steps/fields/methods literal, NOT a visual reskin to
 * the iOS app's look. Locked: feedback_portal_keeps_own_identity.md;
 * design-sandbox/17 masthead ("two native skins").
 *
 * The standalone pre-auth "Join a family" card is REMOVED (iOS has
 * none — joining is post-auth via the onboarding-wizard's join path,
 * or a shared ?join= link → join-family-screen). A signed-out user
 * who arrives via ?join= still works: the code is stashed to
 * PENDING_JOIN_KEY and consumed post-auth (app-shell → join-family-
 * screen), so the invite-link flow is preserved without a pre-auth
 * join card.
 */

const PENDING_JOIN_KEY = 'cairn:pendingJoinCode';
const PENDING_LOGIN_KEY = 'cairn:pendingLoginIntent';

export class RegisterScreen extends LitElement {
  static properties = {
    error: { state: true },
    busy: { state: true },
    joinCode: { type: String },
    /** P3-6 — 'welcome' | 'register' | 'login' (iOS-mirror steps;
     *  replaced the old 'choose'|'login'|'create'|'join'). */
    _step: { state: true },
    _email: { state: true },
    _password: { state: true },
    _displayName: { state: true },
    /** P3-6 — 18+/Terms+Privacy consent, mirrors iOS
     *  CreateAccountView's LegalConsentRow; GATES the Create button. */
    _consent: { state: true },
    _code: { state: true },
    _resetSent: { state: true },
    /** P3-6 — set when a signed-out user arrived via ?join= so the
     *  welcome step can show an "you've been invited" note (the code
     *  itself is stashed to PENDING_JOIN_KEY for post-auth). */
    _invited: { state: true },
  };

  constructor() {
    super();
    this.error = '';
    this.busy = false;
    this.joinCode = '';
    this._step = 'welcome';
    this._email = '';
    this._password = '';
    this._displayName = '';
    this._consent = false;
    this._code = '';
    this._resetSent = false;
    this._invited = false;
  }

  willUpdate(changed) {
    if (changed.has('joinCode') && this.joinCode && !this._invited) {
      // P3-6 — signed-out user arrived via a shared ?join= invite
      // link. There is no pre-auth join card anymore (iOS has none).
      // Stash the code to PENDING_JOIN_KEY so app-shell routes them
      // to join-family-screen AFTER they register/sign in (the
      // existing post-auth handoff), and flag `_invited` so the
      // welcome step can show a gentle "you've been invited" note.
      // Pass the code through as-is (2C unified it to a plain 6-char
      // code; the dual-accept lookup handles legacy CAIRN- too — do
      // NOT re-prefix).
      try {
        localStorage.setItem(
          PENDING_JOIN_KEY,
          (this.joinCode ?? '').trim().toUpperCase(),
        );
      } catch { /* private mode */ }
      this._invited = true;
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
      /* Brand typography parity with the iOS app: the whole pre-login
         flow defaults to the PebblePath body font (Inter); headings
         below switch to Nunito. Scoping it here means no text in this
         flow can fall back to the Portal's Cairn display font. */
      font-family: var(--font-body);
      /* +50% backdrop blur for the pre-login box only. --glass-blur is
         a CSS custom property so it cascades through the nested
         glass-panel's shadow root; overriding it here scopes the
         heavier frost to the register screen without touching the
         dashboard's 24px default. */
      --glass-blur: 36px;
    }
    .wrap {
      width: 100%;
      /* 460 (not 412) so the side-by-side "Sign in with Google /
         Apple" provider pair shows its FULL label on desktop without
         truncating. On mobile the pair stacks (media query below) so
         width there is a non-issue. */
      max-width: 460px;
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
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.17em;
      text-transform: uppercase;
      color: var(--teal-pebble);
    }
    .companion::before,
    .companion::after {
      content: '';
      display: inline-block;
      width: 24px;
      height: 1px;
      background: var(--teal-pebble);
      vertical-align: middle;
      opacity: 0.55;
    }
    .companion::before { margin-right: 12px; }
    .companion::after { margin-left: 12px; }

    h1 {
      margin: 0 0 6px;
      /* Nunito — the PebblePath brand heading font (iOS uses it for
         all titles); was --font-display = Bricolage Grotesque, the
         Portal/Cairn display font, which broke brand parity. */
      font-family: var(--font-nunito);
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
      font-family: var(--font-nunito);
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
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      margin: 0 0 2px -6px;
      background: transparent;
      border: none;
      border-radius: 999px;
      color: var(--teal-pebble);
      cursor: pointer;
      padding: 0;
      align-self: flex-start;
      transition: background 160ms ease;
    }
    .back:hover {
      background: rgba(61, 155, 143, 0.12);
    }
    .back svg {
      width: 20px;
      height: 20px;
    }
    .back:hover { color: var(--teal-pebble); opacity: 0.75; }

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
      min-height: 40px;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.6);
      border: 1px solid rgba(61, 155, 143, 0.3);
      border-radius: var(--radius-input);
      padding: 8px 12px;
      color: var(--teal-pebble);
      font-family: var(--font-body);
      font-size: 14px;
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

    /* iOS-app parity — Apple + Google, each labelled "Sign in with …".
       Desktop: SIDE BY SIDE, 50/50, so the pair is exactly as wide as
       the Create account / Sign in button above (the widened .wrap
       guarantees the full label fits). Mobile: STACKED full-width
       (media query below) so the full label always reads on a phone. */
    .providers {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
    .provider-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      flex: 1 1 0;
      min-width: 0;
      min-height: 44px;
      padding: 0 10px;
      border-radius: var(--radius-pill);
      white-space: nowrap;
      /* Google brand style: white background, hairline border.
         Matches the iOS Google sign-in button. */
      border: 1px solid rgba(0, 0, 0, 0.12);
      background: #fff;
      color: #3c4043;
      font: inherit;
      font-size: 12px;
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
    .provider-btn span {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* Phones: stack the two providers full-width so "Sign in with
       Google / Apple" always shows in full (side-by-side halves are
       too narrow on a phone). Slightly larger label since there's
       now a full row of width. */
    @media (max-width: 480px) {
      .providers {
        flex-direction: column;
      }
      .provider-btn {
        font-size: 13px;
      }
    }

    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: center;
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
      font-weight: 500;
      text-decoration: underline;
      text-underline-offset: 3px;
      padding: 0;
    }
    .actions {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 4px;
    }
    /* Form submit buttons (Create account / Sign in) span the full
       inner width — the side-by-side provider pair below them matches
       this width. */
    .actions glass-button {
      flex: 1;
    }
    /* iOS-welcome parity — ONLY the welcome Register/Login CTAs are
       centered narrow pills (not edge-to-edge), so the landing card
       reads lighter. Scoped via .cta so it doesn't shrink the form
       submit buttons. */
    .actions.cta glass-button {
      flex: 0 1 248px;
      max-width: 248px;
    }

    /* P3-6 — 18+/Terms+Privacy consent row (gates Create). Scoped
       resets so the global full-width input rule doesn't stretch the
       checkbox. Mirrors iOS CreateAccountView's LegalConsentRow. */
    .consent {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 4px 0 2px;
      font-size: 10.5px;
      line-height: 1.3;
      white-space: nowrap;
      color: var(--teal-pebble);
      cursor: pointer;
    }
    .consent input[type='checkbox'] {
      width: 18px;
      min-width: 18px;
      height: 18px;
      min-height: 18px;
      margin: 1px 0 0;
      padding: 0;
      accent-color: var(--teal-pebble);
      cursor: pointer;
      flex: 0 0 auto;
    }
    .consent a {
      color: var(--teal-pebble);
      text-decoration: underline;
      text-underline-offset: 2px;
    }

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

  // P3-6 — _iconLogin/_iconCreate/_iconJoin removed: they were the
  // old 3-card chooser icons; the iOS-mirror welcome step uses plain
  // CTAs, not iconned cards. _iconGoogle/_iconApple stay (providers).
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
    this._resetSent = false;
    // Stash login-intent so app-shell can tailor the post-auth
    // onboarding-wizard heading ("we couldn't find your family"
    // recovery copy) when a returning user signs in but has no
    // family pointer. Register clears it (a brand-new account is
    // the "welcome" flavour, not "recovery").
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

  // P3-6 — _stashCreateIntent removed: Register no longer captures a
  // family name pre-auth (family + children are post-auth via the
  // P3-5 onboarding-wizard, mirroring iOS). _stashJoinIntent removed:
  // the pre-auth join card is gone; willUpdate() now stashes a
  // ?join= code to PENDING_JOIN_KEY directly (un-prefixed — 2C
  // unified the code; dual-accept handles legacy CAIRN-).

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
              alt="Portal"
              width="56"
              height="56"
            />
            <div class="mark-name">PebblePath</div>
          </div>
          <div class="companion">Web Portal</div>
        </div>
        <glass-panel padding="md" lifted variant="strong">
          ${this._step === 'welcome' ? this._renderWelcome() : ''}
          ${this._step === 'register' ? this._renderRegister() : ''}
          ${this._step === 'login' ? this._renderLogin() : ''}
          ${!isConfigured ? this._renderConfigHint() : ''}
        </glass-panel>
      </div>
    `;
  }

  // P3-6 — iOS WelcomeView mirror: brand chrome (in render()) +
  // two CTAs (Register / Login). No Cairn 3-card chooser, no
  // pre-auth Join card.
  _renderWelcome() {
    return html`
      <h1>Let's connect</h1>
      <p class="lede">
        ${this._invited
          ? "You've been invited to a family — register or sign in to join."
          : 'One shared space for the whole family.'}
      </p>
      <div class="step">
        <div class="actions cta">
          <glass-button
            variant="frost-teal"
            ?disabled=${this.busy}
            @click=${() => this._go('register')}
          >
            Register
          </glass-button>
        </div>
        <div class="actions cta">
          <glass-button
            variant="frost-neutral"
            ?disabled=${this.busy}
            @click=${() => this._go('login')}
          >
            Login
          </glass-button>
        </div>
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
          <span>${this.busy ? busyText : 'Sign in with Google'}</span>
        </button>
        <button
          class="provider-btn apple"
          ?disabled=${this.busy || !isConfigured}
          @click=${apple}
        >
          ${this._iconApple()}
          <span>${this.busy ? busyText : 'Sign in with Apple'}</span>
        </button>
      </div>
    `;
  }

  // P3-6 — iOS SignInView mirror (de-toggled: Login is its own step
  // now, not an _authMode toggle of a shared form). Email · Password
  // · Forgot password · Sign in · Apple · Google.
  _renderLogin() {
    return html`
      <button
        class="back"
        aria-label="Back"
        @click=${() => this._go('welcome')}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <h1 style="margin-top:6px;">Welcome back</h1>
      <div class="step">
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
            placeholder="Your password"
            .value=${this._password}
            @input=${(e) => (this._password = e.target.value)}
            autocomplete="current-password"
            @keydown=${(e) => {
              if (e.key === 'Enter' && !this.busy) {
                e.preventDefault();
                this._submitEmailAuth();
              }
            }}
          />
        </div>
        <div class="toggle-row">
          <button @click=${this._sendReset}>Forgot password?</button>
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
            ${this.busy ? 'Signing in…' : 'Sign in'}
          </glass-button>
        </div>
        ${this._renderProviders({
          google: () => this._runAuth(() => signIn()),
          apple: () => this._runAuth(() => signInWithApple()),
          busyText: 'Signing in…',
        })}
      </div>
    `;
  }

  // P3-6 — branches on the step (register/login are now distinct
  // steps, not an _authMode toggle). Register mirrors iOS
  // CreateAccountView.canSubmit exactly: name + email@ + pw≥6 +
  // consent. Login mirrors SignInView: email + password (no length
  // gate — same as iOS).
  _submitEmailAuth() {
    const email = (this._email ?? '').trim();
    const pw = this._password ?? '';
    if (this._step === 'register') {
      const name = (this._displayName ?? '').trim();
      if (!name) { this.error = 'Please enter your name.'; return; }
      if (!email.includes('@')) { this.error = "That email doesn't look right."; return; }
      if (pw.length < 6) { this.error = 'Pick a password with at least 6 characters.'; return; }
      if (!this._consent) {
        this.error = 'Please confirm you are 18+ and agree to the Terms and Privacy Policy.';
        return;
      }
      this._runAuth(() => signUpWithEmail(email, pw, name));
    } else {
      if (!email || !pw) {
        this.error = 'Email and password are required.';
        return;
      }
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

  // P3-6 — iOS CreateAccountView mirror: Name · Email · Password(6+)
  // · 18+/Terms+Privacy consent (GATES Create) · Create account ·
  // Apple · Google. No family-name capture here — family + children
  // are post-auth via the P3-5 onboarding-wizard (mirrors iOS:
  // authenticate first, onboarding after). The Create button is
  // disabled until the same conditions iOS canSubmit enforces.
  _renderRegister() {
    const canSubmit =
      (this._displayName ?? '').trim().length > 0 &&
      (this._email ?? '').includes('@') &&
      (this._password ?? '').length >= 6 &&
      this._consent &&
      !this.busy;
    return html`
      <button
        class="back"
        aria-label="Back"
        @click=${() => this._go('welcome')}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <h1 style="margin-top:6px;">Create your account</h1>
      <div class="step">
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
            autocomplete="new-password"
            @keydown=${(e) => {
              if (e.key === 'Enter' && !this.busy) {
                e.preventDefault();
                this._submitEmailAuth();
              }
            }}
          />
        </div>
        <label class="consent">
          <input
            type="checkbox"
            .checked=${this._consent}
            @change=${(e) => (this._consent = e.target.checked)}
          />
          <span>
            I'm 18 or older and agree to the
            <a
              href="https://pebblepath.ai/terms"
              target="_blank"
              rel="noopener noreferrer"
            >Terms</a>
            and
            <a
              href="https://pebblepath.ai/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >Privacy Policy</a>.
          </span>
        </label>
        ${this.error ? html`<div class="error">${this.error}</div>` : ''}
        <div class="actions">
          <glass-button
            variant="primary"
            ?disabled=${!canSubmit}
            @click=${this._submitEmailAuth}
          >
            ${this.busy ? 'Creating account…' : 'Create account'}
          </glass-button>
        </div>
        ${this._renderProviders({
          google: () => this._runAuth(() => signIn()),
          apple: () => this._runAuth(() => signInWithApple()),
          busyText: 'Creating…',
        })}
      </div>
    `;
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
