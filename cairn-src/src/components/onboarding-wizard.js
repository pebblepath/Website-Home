import { LitElement, html, css } from 'lit';
import { dataStore } from '../services/data.js';
import { toast } from '../services/toast.js';
import './glass-panel.js';
import './glass-button.js';

/**
 * Post-sign-in onboarding wizard for users who just authenticated and
 * have no family yet. Mirrors the PebblePath iOS onboarding wizard's
 * three-option pattern:
 *
 *   1. Join an existing family — paste a CAIRN-XXXX code; app-shell
 *      picks up the code and routes through `join-family-screen`.
 *   2. Start a new family — name input + `createCairnOnlyFamily`. New
 *      family doc tagged `createdInApp: 'cairn'`, viewer lands in the
 *      dashboard immediately afterwards.
 *   3. Get the PebblePath app — quiet App Store link for parents who
 *      stumbled onto Cairn first. We don't force them off the web —
 *      they can still pick option 2 to use Cairn standalone.
 *
 * Events:
 *   join-code   — { detail: { code } } when option 1 submits a code;
 *                 the parent (app-shell) wires this into the existing
 *                 join-family flow.
 */
export class OnboardingWizard extends LitElement {
  static properties = {
    user: { type: Object },
    _mode: { state: true },
    _code: { state: true },
    _familyName: { state: true },
    _busy: { state: true },
    _error: { state: true },
  };

  constructor() {
    super();
    this.user = null;
    this._mode = 'choose'; // 'choose' | 'join' | 'create' | 'download'
    this._code = '';
    this._familyName = '';
    this._busy = false;
    this._error = '';
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
      color: var(--text-primary);
    }
    .lede {
      color: var(--text-secondary);
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
    .option .label {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 15.5px;
      letter-spacing: -0.01em;
      color: var(--text-primary);
    }
    .option .desc {
      font-size: 12.5px;
      color: var(--text-secondary);
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
      color: var(--text-secondary);
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
      color: var(--text-primary);
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
      color: rgba(255, 248, 235, 0.32);
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
      color: var(--text-secondary);
      font: inherit;
      font-size: 13.5px;
      cursor: pointer;
      padding: 4px 6px;
      align-self: flex-start;
    }
    .back:hover { color: var(--text-primary); }

    .download-card {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
      text-align: center;
      padding: 8px 4px;
    }
    .download-card p {
      margin: 0;
      color: var(--text-secondary);
      font-size: 14px;
      line-height: 1.55;
    }
    .download-card .app-store-cta {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 18px;
      border-radius: var(--radius-pill);
      background: #000;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
    }
    .download-card .alt {
      color: var(--text-tertiary);
      font-size: 12.5px;
    }
    .download-card .alt a {
      color: var(--terracotta);
      text-decoration: underline;
      text-underline-offset: 3px;
      cursor: pointer;
    }
  `;

  _go(mode) {
    this._mode = mode;
    this._error = '';
  }

  _submitJoin() {
    const raw = (this._code ?? '').trim().toUpperCase();
    if (!raw) {
      this._error = 'Paste the family code you were sent.';
      return;
    }
    const normalized = raw.startsWith('CAIRN-')
      ? raw
      : `CAIRN-${raw.replace(/^CAIRN-?/i, '')}`;
    if (!/^CAIRN-[A-Z0-9]{3,6}$/.test(normalized)) {
      this._error = "Codes look like CAIRN-XXXX.";
      return;
    }
    this._error = '';
    // Hand off to app-shell — it'll route to join-family-screen which
    // already handles the actual cairnMemberIds write.
    this.dispatchEvent(
      new CustomEvent('join-code', {
        detail: { code: normalized },
        bubbles: true,
        composed: true,
      }),
    );
  }

  async _submitCreate() {
    const name = (this._familyName ?? '').trim();
    if (!name) {
      this._error = 'Give your family a name.';
      return;
    }
    this._busy = true;
    this._error = '';
    try {
      await dataStore.createCairnOnlyFamily(name);
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
  _iconDownload() {
    return html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>`;
  }

  render() {
    if (this._mode === 'join') return this._renderJoin();
    if (this._mode === 'create') return this._renderCreate();
    if (this._mode === 'download') return this._renderDownload();
    return this._renderChoose();
  }

  _renderChoose() {
    const firstName = (this.user?.displayName ?? '').trim().split(/\s+/)[0] || 'there';
    return html`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <h1>Welcome, ${firstName}.</h1>
          <p class="lede">Let's get you all set up.</p>
          <div class="options">
            <button class="option" @click=${() => this._go('join')}>
              <span class="icon-cell tide">${this._iconJoin()}</span>
              <span>
                <div class="label">Join an existing family</div>
                <div class="desc">Paste the CAIRN-XXXX code from your invite.</div>
              </span>
            </button>
            <button class="option" @click=${() => this._go('create')}>
              <span class="icon-cell sage">${this._iconCreate()}</span>
              <span>
                <div class="label">Start a new family</div>
                <div class="desc">Create a family planner account.</div>
              </span>
            </button>
            <button class="option" @click=${() => this._go('download')}>
              <span class="icon-cell amber">${this._iconDownload()}</span>
              <span>
                <div class="label">I have the PebblePath app</div>
                <div class="desc">Sign in on the app — your family will sync.</div>
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
            <div>
              <label>Family name</label>
              <input
                type="text"
                placeholder="The Paris Family"
                .value=${this._familyName}
                @input=${(e) => (this._familyName = e.target.value)}
                @keydown=${(e) => {
                  if (e.key === 'Enter' && !this._busy) {
                    e.preventDefault();
                    this._submitCreate();
                  }
                }}
                maxlength="64"
              />
            </div>
            ${this._error ? html`<div class="error">${this._error}</div>` : ''}
            <div class="actions">
              <glass-button
                variant="primary"
                ?disabled=${this._busy}
                @click=${this._submitCreate}
              >
                ${this._busy ? 'Creating…' : 'Create family'}
              </glass-button>
            </div>
          </div>
        </glass-panel>
      </div>
    `;
  }

  _renderDownload() {
    return html`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <button class="back" @click=${() => this._go('choose')}>‹ Back</button>
          <h1 style="margin-top:10px;">PebblePath on iPhone</h1>
          <div class="download-card">
            <p>
              Sign in on the app — your family will sync to Cairn
              automatically. PebblePath is our iPhone app for tracking
              your kids' milestones, daily wins, and Pebble's
              parenting advisor.
            </p>
            <a
              class="app-store-cta"
              href="https://apps.apple.com/app/pebblepath"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⌘ Get PebblePath on the App Store
            </a>
            <div class="alt">
              Or
              <a @click=${() => this._go('create')}>
                use Cairn standalone for now
              </a>
              — you can connect PebblePath later.
            </div>
          </div>
        </glass-panel>
      </div>
    `;
  }
}

customElements.define('onboarding-wizard', OnboardingWizard);
