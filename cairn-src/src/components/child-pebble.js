import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { dataStore } from '../services/data.js';
import './member-chip.js';

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
    memberProfiles: { type: Object },
    myUid: { type: String },
    _session: { state: true },
    _input: { state: true },
    _loading: { state: true },
    _error: { state: true },
    _seeded: { state: true },
    _listening: { state: true },
    _isPrivate: { state: true },
    _railOpen: { state: true },
    // Embedded in the floating liquid-glass widget (non-Pebble tabs):
    // no rail, fills its container instead of the viewport, tighter
    // padding. Same component, same logic — just a denser skin.
    compact: { type: Boolean },
  };

  constructor() {
    super();
    this.child = null;
    this.messages = [];
    this.prefill = '';
    this.memberProfiles = {};
    this.myUid = '';
    this._session = [];
    this._input = '';
    this._loading = false;
    this._error = '';
    this._seeded = false;
    // Private/Family toggle (mirrors iOS Pebble Build 30). false =
    // Family (co-parents see it); true = Private (only the asker).
    // Per-session like iOS — resets when the child changes.
    this._isPrivate = false;
    // Mobile: the recent-questions rail is collapsed by default.
    this._railOpen = false;
    this.compact = false;
    // Voice-to-Pebble (Web Speech API — mirrors the iOS speak-to-ask).
    this._listening = false;
    this._recognition = null;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    try {
      this._recognition?.abort();
    } catch {
      /* recognition may already be stopped */
    }
    this._recognition = null;
  }

  // Feature-detect once; if the browser has no SpeechRecognition the
  // mic button is simply not rendered (graceful fallback — typing
  // still works everywhere).
  get _voiceSupported() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  _toggleVoice() {
    if (this._listening) {
      try {
        this._recognition?.stop();
      } catch {
        /* noop */
      }
      return;
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    const rec = new SR();
    rec.lang = 'en-US';
    rec.interimResults = true; // live-fill the box as they speak
    rec.continuous = false; // single utterance, then auto-stop
    rec.onresult = (e) => {
      let text = '';
      for (let i = 0; i < e.results.length; i += 1) {
        text += e.results[i][0].transcript;
      }
      this._input = text;
    };
    rec.onerror = (e) => {
      this._listening = false;
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        this._error =
          'Microphone access is blocked — allow it in your browser to ask by voice.';
      }
    };
    rec.onend = () => {
      this._listening = false;
      this._recognition = null;
    };
    this._recognition = rec;
    this._listening = true;
    this._error = '';
    try {
      rec.start();
    } catch {
      this._listening = false;
      this._recognition = null;
    }
  }

  willUpdate(changed) {
    // Seed the live session from the persisted thread once it arrives
    // (and re-seed if the active child changes).
    if (changed.has('child')) {
      this._seeded = false;
      this._session = [];
      this._error = '';
      this._isPrivate = false; // per-session, like iOS
    }
    if (!this._seeded && Array.isArray(this.messages) && this.messages.length) {
      this._session = this.messages.map((m) => ({
        role: m.role,
        content: m.content,
        senderUid: m.senderUid,
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

  // "Recent" rail — the asked questions in this thread, newest first,
  // each one a jump-link back to that exchange (the thread is one
  // continuous conversation per child, mirroring the iOS app; this is
  // a navigator over it, not a separate-conversations store).
  _recentQuestions() {
    const out = [];
    this._session.forEach((m, idx) => {
      if (m.role !== 'user') return;
      const text = String(m.content ?? '').trim();
      if (!text) return;
      out.push({ idx, text, isPrivate: m.isPrivate === true });
    });
    return out.reverse();
  }

  _scrollToMsg(idx) {
    this._railOpen = false;
    this.updateComplete.then(() => {
      const el = this.renderRoot.querySelector(`.thread [data-idx="${idx}"]`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  _newQuestion() {
    this._railOpen = false;
    this._input = '';
    this.updateComplete.then(() => {
      const ta = this.renderRoot.querySelector('textarea');
      ta?.focus();
      this._scrollToBottom();
    });
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
    const priv = this._isPrivate === true;
    this._session = [
      ...this._session,
      {
        role: 'user',
        content: question,
        senderUid: this.myUid,
        isPrivate: priv,
      },
    ];
    this._loading = true;
    try {
      const result = await dataStore.askPebbleAboutChild(
        this.child.id,
        question,
        history,
        priv,
      );
      this._session = [
        ...this._session,
        {
          role: 'assistant',
          content: result?.answer ?? '…',
          isPrivate: priv,
          senderUid: priv ? this.myUid : undefined,
        },
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

    /* Two-column shell: a "Recent" rail (desktop) beside the chat. */
    .pebble-wrap {
      display: flex;
      gap: 0;
      align-items: stretch;
    }
    .rail {
      flex: 0 0 232px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      height: min(800px, calc(100vh - 84px));
      padding: 18px 14px 18px 24px;
      border-right: 1px solid var(--glass-border);
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: rgba(255, 248, 235, 0.18) transparent;
    }
    .rail-head {
      font-family: var(--font-display);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--text-tertiary);
      padding: 2px 8px 8px;
    }
    .rail-new {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 9px 12px;
      margin-bottom: 8px;
      border-radius: var(--radius-input);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-size: 13px;
      cursor: pointer;
      text-align: left;
    }
    .rail-new:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .rail-new svg { width: 14px; height: 14px; flex-shrink: 0; }
    .rail-item {
      display: flex;
      align-items: center;
      gap: 7px;
      width: 100%;
      padding: 9px 11px;
      border-radius: var(--radius-input);
      background: transparent;
      border: 1px solid transparent;
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-size: 12.5px;
      line-height: 1.4;
      cursor: pointer;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .rail-item:hover {
      background: var(--glass-fill);
      color: var(--text-primary);
      border-color: var(--glass-border);
    }
    .rail-item .lock { width: 11px; height: 11px; flex-shrink: 0; color: #e6c3ab; }
    .rail-empty {
      color: var(--text-tertiary);
      font-size: 12.5px;
      line-height: 1.5;
      padding: 6px 8px;
    }
    /* Private/Family segmented toggle (iOS Build 30 parity). */
    .privtoggle {
      display: inline-flex;
      padding: 3px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
    }
    .privtoggle button {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 13px;
      border-radius: var(--radius-pill);
      border: none;
      background: transparent;
      color: var(--text-tertiary);
      font-family: var(--font-body);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 160ms ease;
    }
    .privtoggle button svg { width: 13px; height: 13px; }
    .privtoggle button.on.fam {
      background: rgba(61, 155, 143, 0.2);
      color: #9fded2;
      box-shadow: inset 0 0 0 1px rgba(61, 155, 143, 0.4);
    }
    .privtoggle button.on.priv {
      background: rgba(198, 123, 92, 0.2);
      color: #e6c3ab;
      box-shadow: inset 0 0 0 1px rgba(198, 123, 92, 0.45);
    }
    .rail-toggle {
      display: none;
      align-items: center;
      gap: 7px;
      padding: 6px 13px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    .rail-toggle svg { width: 13px; height: 13px; }
    @media (max-width: 900px) {
      .rail {
        position: absolute;
        z-index: 5;
        left: 0;
        top: 0;
        background: var(--surface-raised, rgba(20, 14, 9, 0.96));
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        box-shadow: 0 18px 50px rgba(0, 0, 0, 0.4);
        transform: translateX(-104%);
        transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      .rail.open { transform: translateX(0); }
      .pebble-wrap { position: relative; }
      .rail-toggle { display: inline-flex; }
    }
    /* Compact: embedded in the floating widget — no rail, fill the
       widget box (its parent sizes it), tighter gutters. */
    .pebble-wrap.compact { height: 100%; }
    .pebble-wrap.compact .rail,
    .pebble-wrap.compact .rail-toggle { display: none; }
    .pebble-wrap.compact .chatpane {
      height: 100%;
      padding: 12px 16px 0;
    }
    .pebble-wrap.compact .toprow { margin-bottom: 8px; }
    .pebble-wrap.compact .composer { margin-top: 12px; }
    /* Portal v4 — Pebble is the whole tab: no card, no page header,
       edge-to-edge up to the nav bar; the "Private to parents" pill
       is integrated into the top of the chat surface.
       Height is CAPPED at ~800px below the nav bar (not endless) —
       the thread scrolls internally inside that box; the composer
       stays pinned at the bottom. min() so short viewports shrink to
       fit instead of pushing the page into its own scroll. */
    .chatpane {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
      height: min(800px, calc(100vh - 84px));
      padding: 14px 24px 0;
    }
    @media (max-width: 720px) {
      .chatpane {
        padding: 10px 16px 0;
        height: min(800px, calc(100vh - 150px));
      }
    }
    .toprow {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 10px;
    }
    .privtag {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 6px 13px;
      border-radius: var(--radius-pill);
      font-size: 12px;
      font-weight: 600;
      background: rgba(198, 123, 92, 0.16);
      color: #e6c3ab;
      border: 1px solid rgba(198, 123, 92, 0.4);
    }
    .privtag svg { width: 13px; height: 13px; }
    /* Message rows with sender-attribution avatars (concept .msg).
       In-panel header removed — the page header already says
       "Pebble · {name}'s development advisor", so the chat box is
       top-aligned with no redundant in-panel title. */
    .msg {
      display: flex;
      gap: 10px;
      align-items: flex-end;
      max-width: 80%;
    }
    .msg.you {
      align-self: flex-end;
      flex-direction: row-reverse;
    }
    .msg.pb { align-self: flex-start; }
    .msg .av {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
    }
    .msg .pic {
      width: 30px;
      height: 30px;
      border-radius: 9px;
      background: var(--gradient-sage);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-shrink: 0;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
    }
    .msg .pic svg { width: 16px; height: 16px; }
    .msg .col { min-width: 0; }
    .said {
      font-size: 11px;
      color: var(--text-tertiary);
      margin: 0 4px 5px;
    }
    .msg.you .said { text-align: right; }
    .thread {
      display: flex;
      flex-direction: column;
      gap: 14px;
      flex: 1;
      min-height: 0;
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
      padding: 13px 16px;
      border-radius: 18px;
      font-size: 14px;
      line-height: 1.55;
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow-wrap: anywhere;
    }
    .msg.you .bubble {
      background: linear-gradient(135deg, #c67b5c, #8b5a3e);
      color: #fff;
      border-bottom-right-radius: 6px;
    }
    .msg.pb .bubble {
      background: var(--glass-fill-strong);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      border-bottom-left-radius: 6px;
    }
    .msg.pb .bubble b { color: #9fded2; }
    /* Harmonised link colour — kill the browser blue. Light teal on
       the glass Pebble bubble; warm cream on the terracotta you
       bubble. Underlined for the affordance. */
    .msg.pb .bubble a {
      color: #7fd3c6;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .msg.you .bubble a {
      color: #ffe9da;
      text-decoration: underline;
      text-underline-offset: 2px;
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
    /* Composer — the concept's rounded pill: a transparent textarea
       inside a glass-fill pill, vertically centred, with a 38px send
       circle (fixes "input not rounded / wrong colour / not centred"). */
    .composer {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 18px;
      padding: 7px 7px 7px 16px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      transition: border-color 0.18s ease, background 0.18s ease;
    }
    .composer:focus-within {
      border-color: rgba(61, 155, 143, 0.45);
      background: rgba(61, 155, 143, 0.1);
    }
    textarea {
      flex: 1;
      resize: none;
      background: transparent;
      border: none;
      padding: 7px 0;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 14px;
      line-height: 1.5;
      min-height: 24px;
      max-height: 120px;
      outline: none;
    }
    textarea::placeholder {
      color: var(--text-tertiary);
      opacity: 1;
    }
    .send {
      flex-shrink: 0;
      width: 38px;
      height: 38px;
      border-radius: 999px;
      background-image: var(--gradient-sage);
      color: #fff;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 3px 10px rgba(61, 155, 143, 0.35);
    }
    .send:disabled { opacity: 0.5; cursor: not-allowed; }
    .send svg { width: 16px; height: 16px; }
    /* Voice-to-Pebble mic — ghost circle when idle, teal + pulsing
       while listening (mirrors the iOS speak-to-ask affordance). */
    .mic {
      flex-shrink: 0;
      width: 38px;
      height: 38px;
      border-radius: 999px;
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: color 0.18s ease, border-color 0.18s ease,
        background 0.18s ease;
    }
    .mic:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .mic:disabled { opacity: 0.5; cursor: not-allowed; }
    .mic svg { width: 17px; height: 17px; }
    .mic.on {
      color: #fff;
      border-color: transparent;
      background: var(--teal-pebble);
      animation: micpulse 1.4s ease-in-out infinite;
    }
    @keyframes micpulse {
      0%,
      100% {
        box-shadow: 0 0 0 0 rgba(61, 155, 143, 0.5);
      }
      50% {
        box-shadow: 0 0 0 6px rgba(61, 155, 143, 0);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .mic.on { animation: none; }
    }
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

  // Sender attribution — co-parents on a shared family see who asked
  // (mirrors the iOS app's senderUid attribution). Resolves via the
  // family memberProfiles map; falls back to a title-cased uid so the
  // preview mock ("thomas"/"partner") still reads sensibly.
  _senderName(uid) {
    if (!uid || uid === this.myUid) return 'You';
    const p = this.memberProfiles?.[uid];
    if (p?.displayName) return p.displayName;
    return uid.charAt(0).toUpperCase() + uid.slice(1);
  }

  _senderPhoto(uid) {
    const url = this.memberProfiles?.[uid]?.profilePhotoURL;
    return typeof url === 'string' && /^https?:\/\//i.test(url) ? url : '';
  }

  // Safe inline markdown for the bubble (matches the iOS app + makes
  // the ported `.bubble b` rule meaningful). HTML-escape FIRST, then
  // re-introduce only **bold**, *italic* and http(s) links — so model
  // output can never inject markup. Newlines stay handled by the
  // bubble's white-space:pre-wrap (no <br>).
  _fmt(text) {
    // Strip leading indentation per line + overall trim FIRST — the
    // model occasionally prefixes a tab/spaces (rendered as an odd
    // first-line indent under white-space:pre-wrap). Prose + bullet/
    // numbered lines start flush, so this is safe.
    const esc = String(text ?? '')
      .replace(/^[ \t\u00A0]+/gm, '')
      .trim()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    const md = esc
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,!?]|$)/g, '$1<i>$2</i>')
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener">$1</a>',
      );
    return unsafeHTML(md);
  }

  render() {
    const name = this.child?.name ?? 'your child';
    const hasThread = this._session.length > 0;
    const recents = this._recentQuestions();
    return html`
      <div class="pebble-wrap ${this.compact ? 'compact' : ''}">
        <aside class="rail ${this._railOpen ? 'open' : ''}">
          <div class="rail-head">Recent</div>
          <button class="rail-new" @click=${() => this._newQuestion()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
            New question
          </button>
          ${recents.length === 0
            ? html`<div class="rail-empty">
                Your questions about ${name} show up here so you can jump
                back to any answer.
              </div>`
            : recents.map(
                (q) => html`<button
                  class="rail-item"
                  title=${q.text}
                  @click=${() => this._scrollToMsg(q.idx)}
                >
                  ${q.isPrivate
                    ? html`<svg class="lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3" stroke-linecap="round"/></svg>`
                    : ''}
                  ${q.text}
                </button>`,
              )}
        </aside>
      <div class="chatpane">
        <div class="toprow">
          <button
            class="rail-toggle"
            @click=${() => (this._railOpen = !this._railOpen)}
            aria-label="Recent questions"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>
            Recent
          </button>
          <div
            class="privtoggle"
            role="group"
            aria-label="Who can see this conversation"
          >
            <button
              class="fam ${this._isPrivate ? '' : 'on'}"
              @click=${() => (this._isPrivate = false)}
              title="Both parents see this conversation"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-3-3.87M9 21v-2a4 4 0 0 1 3-3.87"/><circle cx="9" cy="7" r="3"/><circle cx="17" cy="8" r="2.4"/></svg>
              Family
            </button>
            <button
              class="priv ${this._isPrivate ? 'on' : ''}"
              @click=${() => (this._isPrivate = true)}
              title="Only you see this conversation"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3" stroke-linecap="round"/></svg>
              Private
            </button>
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
                  ${this._session.map((m, i) =>
                    m.role === 'assistant'
                      ? html`<div class="msg pb" data-idx="${i}">
                          <span class="pic">${this._pico()}</span>
                          <div class="col">
                            <!-- prettier-ignore -->
                            <div class="bubble">${this._fmt(m.content)}</div>
                          </div>
                        </div>`
                      : html`<div class="msg you" data-idx="${i}">
                          <span class="av">
                            <member-chip
                              .name=${this._senderName(m.senderUid)}
                              .photo=${this._senderPhoto(m.senderUid)}
                              .hue=${8}
                              size="30"
                            ></member-chip>
                          </span>
                          <div class="col">
                            <div class="said">
                              ${this._senderName(m.senderUid)} asked${m.isPrivate
                                ? ' · private'
                                : ''}
                            </div>
                            <div class="bubble">${this._fmt(m.content)}</div>
                          </div>
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
            ${this._voiceSupported
              ? html`<button
                  type="button"
                  class="mic ${this._listening ? 'on' : ''}"
                  @click=${() => this._toggleVoice()}
                  ?disabled=${this._loading}
                  aria-label=${this._listening
                    ? 'Stop listening'
                    : 'Ask by voice'}
                  title=${this._listening
                    ? 'Listening… tap to stop'
                    : 'Ask by voice'}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
                  </svg>
                </button>`
              : ''}
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
