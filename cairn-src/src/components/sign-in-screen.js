import { LitElement, html, css } from 'lit';
import { signIn, isConfigured } from '../services/firebase.js';
import './cairn-mark.js';

export class SignInScreen extends LitElement {
  static properties = {
    error: { state: true },
    busy: { state: true },
    joinCode: { type: String },
  };

  constructor() {
    super();
    this.error = '';
    this.busy = false;
    this.joinCode = '';
  }

  static styles = css`
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
    .mark {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 28px;
      justify-content: center;
    }
    .mark-name {
      font-family: var(--font-pebble);
      font-weight: 400;
      font-size: 44px;
      letter-spacing: 0.04em;
      line-height: 1;
      text-shadow: 0 2px 14px rgba(0, 0, 0, 0.25);
    }
    h1 {
      font-family: var(--font-display);
      font-size: clamp(30px, 5vw, 42px);
      line-height: 1.1;
      letter-spacing: -0.025em;
      margin: 0 0 12px;
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
    .gicon {
      width: 18px;
      height: 18px;
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

  _enterPreview() {
    const url = new URL(window.location.href);
    url.searchParams.set('preview', '1');
    window.location.href = url.toString();
  }

  render() {
    return html`
      <div class="wrap">
        <div class="mark">
          <cairn-mark size="52"></cairn-mark>
          <div class="mark-name">Cairn</div>
        </div>
        <glass-panel padding="lg" lifted variant="strong">
          ${this.joinCode
            ? html`<div class="invite-banner">
                <strong>You've been invited to a family on Cairn.</strong><br />
                Sign in to continue — we'll show you the family next.
                <br /><code>${this.joinCode}</code>
              </div>`
            : ''}
          <h1>${this.joinCode ? 'Almost there.' : 'Where your people gather.'}</h1>
          <p class="lede">
            ${this.joinCode
              ? 'Sign in with the Google account you use with your family. You\'ll see a preview before joining.'
              : 'One quiet place for trips, birthdays, and anniversaries — across your immediate and extended family.'}
          </p>
          <div class="actions">
            <glass-button
              variant="primary"
              size="lg"
              full
              ?disabled=${this.busy || !isConfigured}
              @click=${this._handleSignIn}
            >
              <svg class="gicon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#fff"
                  d="M21.35 11.1H12v2.94h5.35c-.23 1.4-1.66 4.1-5.35 4.1-3.22 0-5.85-2.66-5.85-5.94S8.78 6.26 12 6.26c1.83 0 3.06.78 3.76 1.45l2.57-2.48C16.78 3.78 14.58 2.8 12 2.8 6.95 2.8 2.85 6.9 2.85 11.96S6.95 21.1 12 21.1c6.93 0 9.5-4.86 9.5-7.4 0-.5-.05-.88-.15-1.6z"
                />
              </svg>
              ${this.busy ? 'Signing in…' : 'Continue with Google'}
            </glass-button>
            <glass-button variant="ghost" size="lg" full @click=${this._enterPreview}>
              Preview the app
            </glass-button>
          </div>
          ${!isConfigured
            ? html`<div class="config-hint">
                Sign-in is awaiting your Firebase config — copy
                <code>.env.example</code> to <code>.env</code> and fill in the web-app
                values from PebblePath's Firebase Console.
              </div>`
            : ''}
          ${this.error ? html`<div class="error">${this.error}</div>` : ''}
        </glass-panel>
        <div class="footnote">A private space for your family</div>
      </div>
    `;
  }
}

customElements.define('sign-in-screen', SignInScreen);
