import { LitElement, html, css } from 'lit';
import { dataStore } from '../services/data.js';

/**
 * Pebble — the child-development advisor, inline in the Pebble tab.
 * Sibling of <pebble-chat> (the family-ACTIVITIES advisor modal); this
 * one is child-scoped and PARENT-ONLY. It seeds from the persisted,
 * isPrivate-filtered thread (data.js childPebbleMessages) then runs a
 * live session through the member-only `askPebbleAboutChild` Cloud
 * Function — which also persists turns to Firestore so the iOS app +
 * co-parent stay in sync.
 *
 * Props:
 *   child     — selected child { id, name }
 *   messages  — persisted thread [{ role, content, senderUid? }]
 *               (already isPrivate-filtered by data.js)
 *   prefill   — optional seed question (from "Ask Pebble about this")
 */
export class ChildPebble extends LitElement {
  static properties = {
    child: { type: Object },
    messages: { type: Array },
    prefill: { type: String },
    _session: { state: true },
    _input: { state: true },
    _loading: { state: true },
    _error: { state: true },
    _seeded: { state: true },
  };

  constructor() {
    super();
    this.child = null;
    this.messages = [];
    this.prefill = '';
    this._session = [];
    this._input = '';
    this._loading = false;
    this._error = '';
    this._seeded = false;
  }

  willUpdate(changed) {
    // Seed the live session from the persisted thread once it arrives
    // (and re-seed if the active child changes).
    if (changed.has('child')) {
      this._seeded = false;
      this._session = [];
      this._error = '';
    }
    if (!this._seeded && Array.isArray(this.messages) && this.messages.length) {
      this._session = this.messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));
      this._seeded = true;
    }
    if (changed.has('prefill') && this.prefill) {
      this._input = this.prefill;
    }
  }

  updated(changed) {
    if (changed.has('messages') || changed.has('_session') || changed.has('_loading')) {
      this.updateComplete.then(() => this._scrollToBottom());
    }
  }

  _scrollToBottom() {
    const t = this.renderRoot.querySelector('.thread');
    if (t) t.scrollTop = t.scrollHeight;
  }

  _suggestions() {
    const n = this.child?.name ?? 'your child';
    return [
      `What's coming up for ${n}?`,
      `Ideas for a rainy weekend with ${n}`,
      `Is ${n}'s speech on track?`,
      `How can I support ${n} this week?`,
    ];
  }

  async _send(text) {
    const question = (text ?? this._input).trim();
    if (!question || this._loading) return;
    if (!this.child?.id) {
      this._error = 'No child selected.';
      return;
    }
    this._error = '';
    this._input = '';
    const history = this._session.slice(-20).map((m) => ({
      role: m.role,
      content: m.content,
    }));
    this._session = [...this._session, { role: 'user', content: question }];
    this._loading = true;
    try {
      const result = await dataStore.askPebbleAboutChild(
        this.child.id,
        question,
        history,
      );
      this._session = [
        ...this._session,
        { role: 'assistant', content: result?.answer ?? '…' },
      ];
    } catch (e) {
      console.error(e);
      if (e?.code === 'functions/unauthenticated') {
        this._error = 'Pebble needs you to be signed in.';
      } else if (e?.code === 'functions/permission-denied') {
        this._error =
          "Pebble's child advisor is for parents on this household.";
      } else if (
        e?.code === 'functions/not-found' ||
        e?.code === 'functions/internal'
      ) {
        this._error =
          "Pebble isn't available right now — try again in a moment.";
      } else {
        this._error = e?.message ?? 'Pebble could not answer right now.';
      }
    } finally {
      this._loading = false;
    }
  }

  static styles = css`
    *, *::before, *::after { box-sizing: border-box; }
    :host { display: block; }
    .wrap {
      max-width: 880px;
      margin: 0 auto;
    }
    .panel {
      position: relative;
      border-radius: var(--radius-card);
      background: var(--glass-fill-strong);
      backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      border: 1px solid var(--glass-border-strong);
      box-shadow: var(--glass-shadow);
      padding: 28px;
    }
    .head {
      display: flex;
      align-items: center;
      gap: 14px;
      padding-bottom: 18px;
      margin-bottom: 18px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.08);
    }
    .pico {
      width: 44px;
      height: 44px;
      border-radius: 14px;
      background: var(--gradient-sage);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-shrink: 0;
      box-shadow: 0 4px 14px rgba(61, 155, 143, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25);
    }
    .pico svg { width: 22px; height: 22px; }
    .ht { flex: 1; min-width: 0; }
    .ht b {
      font-family: var(--font-display);
      font-size: 18px;
      display: block;
    }
    .ht span {
      font-size: 12.5px;
      color: var(--text-secondary);
    }
    .thread {
      display: flex;
      flex-direction: column;
      gap: 14px;
      min-height: 44vh;
      max-height: 56vh;
      overflow-y: auto;
      padding: 4px 2px;
      scrollbar-width: thin;
      scrollbar-color: rgba(255, 248, 235, 0.18) transparent;
    }
    .thread::-webkit-scrollbar { width: 6px; }
    .thread::-webkit-scrollbar-thumb {
      background: rgba(255, 248, 235, 0.18);
      border-radius: 999px;
    }
    .bubble {
      max-width: 80%;
      padding: 13px 16px;
      border-radius: 18px;
      font-size: 14px;
      line-height: 1.55;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .bubble.user {
      align-self: flex-end;
      background: linear-gradient(135deg, #c67b5c, #8b5a3e);
      color: #fff;
      border-bottom-right-radius: 6px;
    }
    .bubble.assistant {
      align-self: flex-start;
      background: var(--glass-fill-strong);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      border-bottom-left-radius: 6px;
    }
    .typing {
      align-self: flex-start;
      padding: 13px 18px;
      border-radius: 16px;
      background: var(--glass-fill-strong);
      border: 1px solid var(--glass-border);
      display: inline-flex;
      gap: 4px;
    }
    .typing span {
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: var(--text-secondary);
      animation: b 1s infinite ease-in-out;
    }
    .typing span:nth-child(2) { animation-delay: 0.15s; }
    .typing span:nth-child(3) { animation-delay: 0.3s; }
    @keyframes b {
      0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
      40% { transform: translateY(-4px); opacity: 1; }
    }
    .empty {
      padding: 20px 4px 8px;
    }
    .empty .lede {
      font-family: var(--font-display);
      font-size: 17px;
      font-weight: 600;
      margin-bottom: 6px;
    }
    .empty .sub {
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.55;
      margin-bottom: 16px;
    }
    .prompts {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 16px;
    }
    .prompts button {
      padding: 8px 14px;
      border-radius: var(--radius-pill);
      font-size: 12.5px;
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      cursor: pointer;
      font-family: var(--font-body);
    }
    .prompts button:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .composer {
      display: flex;
      gap: 10px;
      align-items: flex-end;
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 248, 235, 0.08);
    }
    textarea {
      flex: 1;
      resize: none;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border);
      border-radius: 14px;
      padding: 11px 14px;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 15px;
      min-height: 44px;
      max-height: 120px;
      line-height: 1.4;
      outline: none;
    }
    textarea::placeholder {
      color: rgba(255, 248, 235, 0.92);
      opacity: 1;
    }
    textarea:focus {
      border-color: var(--teal-pebble);
      background: rgba(255, 248, 235, 0.09);
    }
    .send {
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      border-radius: 999px;
      background: var(--gradient-sage);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.18);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 14px rgba(61, 155, 143, 0.35);
    }
    .send:disabled { opacity: 0.5; cursor: not-allowed; }
    .send svg { width: 18px; height: 18px; }
    .error {
      color: var(--rose-soft);
      font-size: 13px;
      padding: 8px 0 0;
      text-align: center;
      line-height: 1.5;
    }
  `;

  _pico() {
    return html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" /></svg>`;
  }

  render() {
    const name = this.child?.name ?? 'your child';
    const hasThread = this._session.length > 0;
    return html`
      <div class="wrap">
        <div class="panel">
          <div class="head">
            <span class="pico">${this._pico()}</span>
            <div class="ht">
              <b>Ask Pebble</b>
              <span>Personalised to ${name} · private to parents</span>
            </div>
          </div>

          <div class="thread">
            ${!hasThread
              ? html`<div class="empty">
                  <div class="lede">Hi — what's on your mind?</div>
                  <div class="sub">
                    I know ${name}'s milestones, recent observations and
                    Pebble's running notes. Ask about development,
                    activities, sleep, behaviour — anything ${name}-shaped.
                  </div>
                  <div class="prompts">
                    ${this._suggestions().map(
                      (s) => html`<button @click=${() => this._send(s)}>
                        ${s}
                      </button>`,
                    )}
                  </div>
                </div>`
              : html`
                  ${this._session.map(
                    (m) => html`<div class="bubble ${m.role}">
                      ${m.content}
                    </div>`,
                  )}
                  ${this._loading
                    ? html`<div class="typing">
                        <span></span><span></span><span></span>
                      </div>`
                    : ''}
                `}
          </div>

          ${this._error
            ? html`<div class="error">${this._error}</div>`
            : ''}

          <form
            class="composer"
            @submit=${(e) => {
              e.preventDefault();
              this._send();
            }}
          >
            <textarea
              placeholder="Ask Pebble about ${name}…"
              .value=${this._input}
              @input=${(e) => (this._input = e.target.value)}
              @keydown=${(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  this._send();
                }
              }}
              ?disabled=${this._loading}
            ></textarea>
            <button
              type="submit"
              class="send"
              ?disabled=${this._loading || !this._input.trim()}
              aria-label="Send"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    `;
  }
}

customElements.define('child-pebble', ChildPebble);
