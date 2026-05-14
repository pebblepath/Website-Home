import { LitElement, html, css } from 'lit';
import { signIn, isConfigured } from '../services/firebase.js';
import './cairn-mark.js';

export class SignInScreen extends LitElement {
  static properties = {
    error: { state: true },
    busy: { state: true },
    joinCode: { type: String },
    _codeInputOpen: { state: true },
    _code: { state: true },
  };

  constructor() {
    super();
    this.error = '';
    this.busy = false;
    this.joinCode = '';
    // If we already arrived with a code (URL or stashed), keep the
    // input collapsed — the invite banner above the form covers it.
    this._codeInputOpen = false;
    this._code = '';
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
    }
    .wrap {
      width: 100%;
      max-width: 440px;
    }

    /* Brand block: stones + wordmark on one row, companion tag below */
    .brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      margin-bottom: 28px;
      animation: brandIn 720ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes brandIn {
      from {
        opacity: 0;
        transform: translateY(6px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .brand {
        animation: none;
      }
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
      color: rgba(255, 248, 235, 0.92);
      text-shadow: 0 2px 14px rgba(0, 0, 0, 0.18);
      /* Script font's optical center sits above its baseline — nudge down
         so it aligns with the visual middle of the stones. */
      transform: translateY(4px);
    }
    .companion {
      font-family: var(--font-nunito);
      font-weight: 600;
      font-size: 11.5px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--text-tertiary);
      /* Sits below the wordmark in a quiet, "subtitle" voice — same
         visual move the website uses for "for every little milestone"
         under the PebblePath wordmark. */
    }
    .companion::before {
      content: '';
      display: inline-block;
      width: 18px;
      height: 1px;
      background: var(--text-tertiary);
      vertical-align: middle;
      margin-right: 10px;
      opacity: 0.6;
    }
    .companion::after {
      content: '';
      display: inline-block;
      width: 18px;
      height: 1px;
      background: var(--text-tertiary);
      vertical-align: middle;
      margin-left: 10px;
      opacity: 0.6;
    }

    h1 {
      font-family: var(--font-display);
      font-size: clamp(28px, 4.5vw, 38px);
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin: 0 0 14px;
      text-align: center;
      background: linear-gradient(180deg, #fff 0%, rgba(255, 248, 235, 0.7) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    p.lede {
      color: var(--text-secondary);
      text-align: center;
      margin: 0 0 28px;
      font-size: 15.5px;
      line-height: 1.55;
    }
    .actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    /* Google-spec "clean" button — white background, colored G logo,
       matches Google's branding guidelines. Distinct from the rest of
       the app's gradient pills so it reads instantly as a sign-in
       affordance, not a generic CTA. */
    .google-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      width: 100%;
      padding: 13px 22px;
      background: #fff;
      color: #1f1f1f;
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: var(--radius-pill);
      font-family: 'Inter', system-ui, sans-serif;
      font-weight: 500;
      font-size: 15px;
      letter-spacing: -0.005em;
      cursor: pointer;
      min-height: 48px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
      transition: box-shadow 200ms ease, background 200ms ease, transform 160ms ease;
    }
    .google-btn:hover:not(:disabled) {
      background: #f8fafd;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.24);
    }
    .google-btn:active:not(:disabled) {
      transform: translateY(1px) scale(0.995);
    }
    .google-btn:disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }
    .google-btn svg {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }

    /* "I have a family code" affordance — sits just below the Google
       button as a quiet link, expands into an inline code input when
       tapped. Mirrors the iOS onboarding wizard's "Join an existing
       family" path so an invited grandparent who only has the code
       (no link) still has a clear way in. */
    .have-code {
      display: flex;
      justify-content: center;
      margin-top: 14px;
    }
    .have-code button {
      background: transparent;
      border: none;
      color: var(--text-secondary);
      font: inherit;
      font-size: 13.5px;
      font-weight: 500;
      cursor: pointer;
      padding: 4px 6px;
      letter-spacing: -0.005em;
    }
    .have-code button:hover {
      color: var(--text-primary);
    }
    .code-row {
      display: flex;
      gap: 8px;
      margin-top: 12px;
      animation: codeReveal 220ms ease;
    }
    @keyframes codeReveal {
      from { opacity: 0; transform: translateY(-4px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .code-input {
      flex: 1;
      min-width: 0;
      background: rgba(255, 248, 235, 0.08);
      border: 1px solid rgba(255, 248, 235, 0.22);
      border-radius: var(--radius-input);
      padding: 11px 14px;
      color: var(--text-primary);
      font-family: 'SF Mono', ui-monospace, monospace;
      font-size: 14px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      outline: none;
      transition: border-color 200ms ease, background 200ms ease;
    }
    .code-input::placeholder {
      color: rgba(255, 248, 235, 0.32);
      letter-spacing: 0.06em;
    }
    .code-input:focus {
      border-color: var(--teal-pebble);
      background: rgba(255, 248, 235, 0.12);
    }
    .code-hint {
      margin-top: 8px;
      font-size: 12px;
      color: var(--text-tertiary);
      text-align: center;
    }

    .config-hint {
      margin-top: 18px;
      padding: 12px 14px;
      border-radius: var(--radius-tile);
      background: rgba(212, 168, 67, 0.1);
      border: 1px solid rgba(212, 168, 67, 0.26);
      color: rgba(255, 232, 200, 0.9);
      font-size: 13px;
      line-height: 1.5;
    }
    .invite-banner {
      margin-bottom: 18px;
      padding: 12px 14px;
      border-radius: var(--radius-tile);
      background: rgba(61, 155, 143, 0.12);
      border: 1px solid rgba(61, 155, 143, 0.32);
      color: rgba(255, 248, 235, 0.95);
      font-size: 13.5px;
      line-height: 1.55;
      text-align: center;
    }
    .invite-banner strong {
      font-weight: 600;
    }
    .invite-banner code {
      font-family: 'SF Mono', ui-monospace, monospace;
      font-size: 12.5px;
      letter-spacing: 0.08em;
      padding: 2px 8px;
      background: rgba(255, 248, 235, 0.08);
      border-radius: 6px;
      margin-left: 4px;
    }
    .config-hint code {
      background: rgba(20, 12, 6, 0.4);
      padding: 1px 6px;
      border-radius: 4px;
      font-size: 12px;
    }
    .error {
      margin-top: 14px;
      color: rgba(255, 180, 180, 0.95);
      font-size: 14px;
      text-align: center;
    }
    .footnote {
      margin-top: 24px;
      color: var(--text-tertiary);
      font-size: 12px;
      text-align: center;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
  `;

  async _handleSignIn() {
    if (this.busy) return;
    // If the user typed a family code, stash it so app-shell re-reads
    // it on the post-auth render and routes through the join-family
    // flow. Same localStorage key the URL-based ?join= handler uses.
    const code = (this._code ?? '').trim().toUpperCase();
    if (this._codeInputOpen && code) {
      const normalized = code.startsWith('CAIRN-') ? code : `CAIRN-${code.replace(/^CAIRN-?/i, '')}`;
      try {
        localStorage.setItem('cairn:pendingJoinCode', normalized);
      } catch {
        /* private mode — code lost; app-shell will fall back to wizard */
      }
    }
    this.busy = true;
    this.error = '';
    try {
      await signIn();
    } catch (e) {
      this.error = e?.message ?? 'Sign-in failed.';
    } finally {
      this.busy = false;
    }
  }

  _toggleCode() {
    this._codeInputOpen = !this._codeInputOpen;
    if (this._codeInputOpen) {
      // Auto-focus the input on reveal so the user can paste straight away.
      requestAnimationFrame(() => {
        this.renderRoot.querySelector('.code-input')?.focus();
      });
    }
  }

  /**
   * Google's official multi-color G logo (per Google's branding guidelines).
   * Inlined SVG so it works offline and renders crisp at any size.
   */
  _renderGoogleIcon() {
    return html`
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        />
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        />
        <path fill="none" d="M0 0h48v48H0z" />
      </svg>
    `;
  }

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
          ${this.joinCode
            ? html`<div class="invite-banner">
                <strong>You've been invited to a family on Cairn.</strong><br />
                Sign in to continue — we'll show you the family next.
                <br /><code>${this.joinCode}</code>
              </div>`
            : ''}
          <h1>${this.joinCode ? 'Almost there.' : 'for every little adventure'}</h1>
          <p class="lede">
            ${this.joinCode
              ? 'Sign in with the Google account you use with your family. You\'ll see a preview before joining.'
              : 'Private portal for your trips, activities, birthdays and anniversaries — for your whole family.'}
          </p>
          <div class="actions">
            <button
              class="google-btn"
              ?disabled=${this.busy || !isConfigured}
              @click=${this._handleSignIn}
            >
              ${this._renderGoogleIcon()}
              ${this.busy
                ? 'Signing in…'
                : this._codeInputOpen && this._code.trim()
                ? 'Continue with Google & join'
                : 'Continue with Google'}
            </button>
          </div>
          ${!this.joinCode
            ? html`<div class="have-code">
                <button type="button" @click=${this._toggleCode}>
                  ${this._codeInputOpen ? '× Cancel code' : 'I have a family code'}
                </button>
              </div>`
            : ''}
          ${this._codeInputOpen
            ? html`
                <div class="code-row">
                  <input
                    class="code-input"
                    type="text"
                    placeholder="CAIRN-XXXX"
                    .value=${this._code}
                    @input=${(e) => (this._code = e.target.value)}
                    @keydown=${(e) => {
                      if (e.key === 'Enter' && this._code.trim()) {
                        e.preventDefault();
                        this._handleSignIn();
                      }
                    }}
                    autocapitalize="characters"
                    autocomplete="off"
                    spellcheck="false"
                    maxlength="14"
                  />
                </div>
                <div class="code-hint">
                  Paste the code from your family invite, then continue with
                  Google. We'll add you to the family right after sign-in.
                </div>
              `
            : ''}
          ${!isConfigured
            ? html`<div class="config-hint">
                Sign-in is awaiting your Firebase config — copy
                <code>.env.example</code> to <code>.env</code> and fill in the web-app
                values from PebblePath's Firebase Console.
              </div>`
            : ''}
          ${this.error ? html`<div class="error">${this.error}</div>` : ''}
        </glass-panel>
        <div class="footnote">Beta Version</div>
      </div>
    `;
  }
}

customElements.define('sign-in-screen', SignInScreen);
