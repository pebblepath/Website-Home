import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { dataStore } from '../services/data.js';
import './member-chip.js';
import './pebble-icon.js';

/**
 * Family Pebble — the family-PLANNING advisor, inline in the Pebble tab.
 * The non-parent (and childless-member) sibling of <child-pebble>. It is
 * account-scoped: every family-circle member gets a Pebble tab; a parent
 * keeps the child-tuned <child-pebble>, everyone else gets THIS planning
 * surface, which pulls in NO child data (the guardrail is server-side in
 * the askPebblePlanning / streamPebblePlanning CFs regardless of the UI).
 *
 * Mirrors the iOS planning fork (AdvisorView.nonParentPlanningAdvisor):
 * a single family-shared thread, NO sessions rail, NO Private toggle, NO
 * medical disclaimer. The planning CFs are answer-only, so this component
 * persists BOTH turns itself to /families/{fid}/pebblePlanningMessages via
 * dataStore (data.js owns the addDoc + Timestamp.now()).
 *
 * Props:
 *   messages        — persisted planning thread [{ role, content, senderUid }]
 *                     (listener-fed via dataStore state.planningMessages)
 *   memberProfiles  — family member profile map for sender attribution
 *   myUid           — signed-in member uid
 *   prefill         — optional seed question
 *   compact         — embedded in the floating FAB widget (denser skin)
 */

const STREAM_THINK_CAPTIONS = [
  "Reading your family's context",
  'Thinking it through',
  'Gathering a few ideas',
  'Pulling the pieces together',
];
const STREAM_SEARCH_CAPTIONS = [
  'Looking up fresh ideas',
  'Finding current options',
  'Checking the latest',
];

export class FamilyPebble extends LitElement {
  static properties = {
    messages: { type: Array },
    memberProfiles: { type: Object },
    myUid: { type: String },
    prefill: { type: String },
    quota: { type: Object },
    _session: { state: true },
    _input: { state: true },
    _loading: { state: true },
    _streaming: { state: true }, // live trailing bubble: { phase, text } | null
    _streamTick: { state: true }, // rotates the waiting caption
    _error: { state: true },
    _listening: { state: true },
    // Embedded in the floating liquid-glass widget (non-Pebble tabs).
    compact: { type: Boolean },
  };

  constructor() {
    super();
    this.messages = [];
    this.memberProfiles = {};
    this.myUid = '';
    this.prefill = '';
    this.quota = null;
    this._session = [];
    this._input = '';
    this._loading = false;
    this._streaming = null;
    this._streamTick = 0;
    this._streamTimer = null;
    this._error = '';
    this.compact = false;
    // Voice-to-Pebble (Web Speech API).
    this._listening = false;
    this._recognition = null;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopStreamCaptions();
    try {
      this._recognition?.abort();
    } catch {
      /* recognition may already be stopped */
    }
    this._recognition = null;
  }

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
    rec.interimResults = true;
    rec.continuous = false;
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
          'Microphone access is blocked, allow it in your browser to ask by voice.';
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
    // Re-derive the rendered thread from the listener-fed messages when
    // they change AND we are not mid-send. While _loading, the optimistic
    // _session (the in-flight turns) is preserved. When idle, this is what
    // makes a co-member's new question appear live.
    if (changed.has('messages') && !this._loading) {
      const base = (this.messages ?? []).map((m) => ({
        role: m.role,
        content: m.content,
        senderUid: m.senderUid,
      }));
      // Preserve any TRAILING optimistic turns not yet reflected in the
      // persisted thread (e.g. an assistant answer whose addDoc has not
      // landed or failed, or a turn the listener has not delivered yet) so
      // a re-derive never DROPS a message already shown. As persistence +
      // the listener catch up, base grows and these extras fall away.
      const extra = this._session.slice(base.length);
      this._session = extra.length ? [...base, ...extra] : base;
    }
    if (changed.has('prefill') && this.prefill) {
      this._input = this.prefill;
    }
  }

  updated(changed) {
    if (
      changed.has('messages') ||
      changed.has('_session') ||
      changed.has('_loading')
    ) {
      this.updateComplete.then(() => this._scrollToBottom());
    }
  }

  _scrollToBottom() {
    const t = this.renderRoot.querySelector('.thread');
    if (t) t.scrollTop = t.scrollHeight;
  }

  async _send(text) {
    const question = (text ?? this._input).trim();
    if (!question || this._loading) return;
    if (this._atLimit) return; // composer disabled + limit banner already shown
    this._error = '';
    this._input = '';
    const history = this._session
      .slice(-20)
      .map((m) => ({ role: m.role, content: m.content }));

    // Optimistic user turn so it shows instantly (before the addDoc round
    // trip + listener delivery). _loading freezes the willUpdate re-derive
    // so this is not wiped while the answer streams.
    this._session = [
      ...this._session,
      { role: 'user', content: question, senderUid: this.myUid },
    ];
    this._loading = true;
    this._streaming = { phase: 'thinking', text: '' };
    this._startStreamCaptions();

    // Persist the user turn FIRST (the CFs write nothing). If even this
    // fails there is no point streaming, so surface + restore the draft.
    try {
      await dataStore.appendPlanningMessage({ role: 'user', content: question });
    } catch (e) {
      this._stopStreamCaptions();
      this._streaming = null;
      this._loading = false;
      this._session = this._session.slice(0, -1); // drop the optimistic turn
      this._input = question; // let them retry
      this._error = this._sendErrorMessage(e);
      return;
    }

    let answered = false;
    const appendAssistant = async (content) => {
      const body = content ?? '…';
      answered = true;
      this._session = [
        ...this._session,
        { role: 'assistant', content: body },
      ];
      try {
        await dataStore.appendPlanningMessage({ role: 'assistant', content: body });
      } catch {
        /* Persist failed (rare: Firestore offline-cache makes addDoc
           resolve locally even when offline). The optimistic turn stays in
           _session, and the trailing-optimistic preserve in willUpdate keeps
           it visible in-session instead of being wiped by a later re-derive. */
      }
    };
    // Non-streaming fallback for when the stream yields nothing usable.
    const doFallback = async () => {
      try {
        const result = await dataStore.askPebblePlanning(question, history);
        await appendAssistant(result?.answer ?? '…');
      } catch (e2) {
        console.error(e2);
        this._error = this._sendErrorMessage(e2);
      }
    };

    try {
      const result = await dataStore.streamPebblePlanning(question, history, {
        onStatus: (status) => {
          if (
            status === 'searching_web' &&
            this._streaming &&
            !this._streaming.text
          ) {
            this._streaming = { ...this._streaming, phase: 'searching' };
          }
        },
        onDelta: (cumulative) => {
          this._stopStreamCaptions();
          this._streaming = { phase: 'streaming', text: cumulative || '' };
        },
      });
      const finalText = (result?.answer ?? this._streaming?.text ?? '').trim();
      if (finalText) await appendAssistant(finalText);
      else await doFallback();
    } catch (e) {
      console.error(e);
      const partial = (this._streaming?.text ?? '').trim();
      if (partial.length >= 20) await appendAssistant(partial);
      else await doFallback();
    } finally {
      this._stopStreamCaptions();
      this._streaming = null;
      this._loading = false;
      // Shared family pool: a successfully-answered question draws the
      // family's weekly quota down on BOTH platforms (no-ops for Premium /
      // beta-bypass users; mirrors iOS incrementPebbleQuota).
      if (answered) dataStore.incrementPebbleQuota();
    }
  }

  _sendErrorMessage(e) {
    if (e?.code === 'functions/unauthenticated') {
      return 'Pebble needs you to be signed in.';
    }
    if (e?.code === 'functions/not-found' || e?.code === 'functions/internal') {
      return "Pebble isn't available right now, try again in a moment.";
    }
    return e?.message ?? 'Pebble could not answer right now.';
  }

  async _clear() {
    if (!this._session.length) return;
    if (
      !window.confirm(
        "Clear your family's planning chat with Pebble? This can't be undone.",
      )
    )
      return;
    try {
      await dataStore.deleteAllPlanningMessages();
      this._session = [];
    } catch (e) {
      this._error = e?.message ?? "Couldn't clear the chat.";
    }
  }

  // Rotate the warm waiting caption while the live bubble has no text yet.
  _startStreamCaptions() {
    this._stopStreamCaptions();
    this._streamTick = 0;
    this._streamTimer = setInterval(() => {
      this._streamTick += 1;
    }, 2400);
  }

  _stopStreamCaptions() {
    if (this._streamTimer) {
      clearInterval(this._streamTimer);
      this._streamTimer = null;
    }
  }

  _streamCaption() {
    const set =
      this._streaming?.phase === 'searching'
        ? STREAM_SEARCH_CAPTIONS
        : STREAM_THINK_CAPTIONS;
    return set[this._streamTick % set.length];
  }

  // Portal's default theme is the dusk dark (no html.theme-light); the
  // greeting-name flips brand-green hue with the theme.
  _isDark() {
    return typeof document !== 'undefined'
      ? !document.documentElement.classList.contains('theme-light')
      : true;
  }

  _firstName() {
    const dn = this.memberProfiles?.[this.myUid]?.displayName;
    const first = String(dn ?? '')
      .trim()
      .split(/\s+/)[0];
    return first || 'there';
  }

  // ── Shared family Pebble quota (passed in via .quota) ──────────────
  get _atLimit() {
    return this.quota?.atLimit === true;
  }
  _quotaLabel() {
    const q = this.quota;
    if (!q) return '';
    if (q.bypassed) return 'Unlimited · beta tester';
    if (q.premium) return 'Unlimited · Premium';
    const n = q.remaining;
    return n + (n === 1 ? ' question' : ' questions') + ' left this week · Free';
  }
  _rolloverLabel() {
    const d = this.quota?.rollover;
    if (!d) return '';
    try {
      const date = d instanceof Date ? d : new Date(d);
      return date.toLocaleDateString(undefined, {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return '';
    }
  }
  _limitMessage() {
    const limit = this.quota?.limit ?? 5;
    const when = this._rolloverLabel();
    return (
      'Your family has used its ' +
      limit +
      ' Pebble questions this week.' +
      (when ? ' They reset ' + when + '.' : '') +
      ' For unlimited, subscribe to Premium in the PebblePath app.'
    );
  }

  // Smart Upload card → bubble up to home-screen, which owns the shared
  // <school-import-modal>. composed:true crosses the shadow boundary;
  // bubbles:true reaches the host listener.
  _smartUpload() {
    this.dispatchEvent(
      new CustomEvent('smart-upload', { bubbles: true, composed: true }),
    );
  }

  static styles = css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    :host {
      display: block;
    }

    /* Single-column shell (no sessions rail). */
    .pebble-wrap {
      display: flex;
      gap: 0;
      align-items: stretch;
    }
    .pebble-wrap.compact {
      flex: 1;
      min-height: 0;
      height: auto;
    }
    .pebble-wrap.compact .chatpane {
      flex: 1;
      min-height: 0;
      height: auto;
      padding: 12px 16px 12px;
    }
    .pebble-wrap.compact .toprow {
      margin-bottom: 8px;
    }
    .pebble-wrap.compact .composer {
      margin-top: 12px;
      margin-bottom: 4px;
    }
    .chatpane {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
      height: calc(100vh - 84px);
      padding: 14px 24px 0;
    }
    @media (max-width: 720px) {
      .chatpane {
        padding: 10px 16px 0;
        height: calc(100vh - 150px);
      }
    }
    .toprow {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
    }
    .qstrip {
      font-size: 12px;
      font-weight: 600;
      color: var(--text-tertiary);
    }
    .qstrip.lim {
      color: var(--ink-terracotta);
    }
    .limitbanner {
      margin-top: 10px;
      padding: 10px 14px;
      border-radius: 14px;
      background: rgba(198, 123, 92, 0.12);
      border: 1px solid rgba(198, 123, 92, 0.4);
      color: var(--ink-terracotta);
      font-size: 13px;
      line-height: 1.45;
    }
    .composer.disabled {
      opacity: 0.6;
    }
    /* Clear pill (terracotta-tinted, mirrors the iOS planning header). */
    .clear {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 13px;
      border-radius: var(--radius-pill);
      font-family: var(--font-body);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      background: rgba(198, 123, 92, 0.16);
      color: var(--ink-terracotta);
      border: 1px solid rgba(198, 123, 92, 0.4);
    }
    .clear:hover {
      background: rgba(198, 123, 92, 0.24);
    }
    .clear svg {
      width: 13px;
      height: 13px;
    }
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
    .msg.pb {
      align-self: flex-start;
    }
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
    .msg .pic svg {
      width: 16px;
      height: 16px;
    }
    .msg .col {
      min-width: 0;
    }
    .said {
      font-size: 11px;
      color: var(--text-tertiary);
      margin: 0 4px 5px;
    }
    .msg.you .said {
      text-align: right;
    }
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
    .thread::-webkit-scrollbar {
      width: 6px;
    }
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
    .msg.pb .bubble b {
      color: var(--bubble-link-pb);
    }
    .msg.pb .bubble a {
      color: var(--bubble-link-pb);
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .msg.you .bubble a {
      color: #ffe9da;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    /* live streaming bubble — warm caption + dots before text arrives */
    .bubble.waiting {
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }
    .wcap {
      color: var(--text-secondary);
      font-size: 14px;
      transition: opacity 0.2s ease;
    }
    .wdots {
      display: inline-flex;
      gap: 4px;
      flex-shrink: 0;
    }
    .wdots span {
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: var(--text-secondary);
      animation: b 1s infinite ease-in-out;
    }
    .wdots span:nth-child(2) {
      animation-delay: 0.15s;
    }
    .wdots span:nth-child(3) {
      animation-delay: 0.3s;
    }
    @keyframes b {
      0%,
      80%,
      100% {
        transform: translateY(0);
        opacity: 0.5;
      }
      40% {
        transform: translateY(-4px);
        opacity: 1;
      }
    }
    /* ============================================================
       Pebble landing — the warm front door. Floating glowing glass
       Ripple Stone hero + two-line greeting (brand-green name) + a row
       of three translucent action cards (the lowest-friction planning
       channels). Mirrors child-pebble's landing; copy mirrors the iOS
       planning advisor (Smart Upload / Weekend ideas / Speak directly).
       ============================================================ */
    .landing {
      flex: 1;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      padding: 14px 4px;
    }
    .landing-inner {
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 26px;
      width: 100%;
    }
    .stone-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 6px 0 8px;
    }
    .stone {
      position: relative;
      width: 128px;
      height: 107px;
      border-radius: 50%;
      backdrop-filter: blur(3px) saturate(1.5);
      -webkit-backdrop-filter: blur(3px) saturate(1.5);
      background:
        radial-gradient(120% 110% at 32% 22%, rgba(255, 255, 255, 0.52), transparent 30%),
        radial-gradient(85% 78% at 50% 60%, rgba(124, 212, 200, 0.85), transparent 60%),
        radial-gradient(95% 85% at 76% 86%, rgba(198, 123, 92, 0.34), transparent 54%),
        radial-gradient(125% 120% at 50% 52%, rgba(92, 191, 176, 0.66), rgba(45, 122, 112, 0.66) 55%, rgba(31, 92, 84, 0.8) 100%);
      border: 1px solid rgba(255, 255, 255, 0.55);
      box-shadow:
        inset 0 6px 18px rgba(255, 255, 255, 0.7),
        inset 0 -20px 38px rgba(18, 58, 52, 0.4),
        0 0 16px rgba(124, 212, 200, 0.65),
        0 0 34px rgba(61, 155, 143, 0.45),
        0 22px 46px rgba(31, 92, 84, 0.32);
      animation: stoneFloat 2.8s ease-in-out infinite;
    }
    .stone .glow {
      position: absolute;
      inset: -30%;
      border-radius: 50%;
      z-index: -1;
      background: radial-gradient(circle at 50% 50%, rgba(124, 212, 200, 0.55), rgba(61, 155, 143, 0.18) 45%, transparent 70%);
      filter: blur(9px);
      animation: stoneGlow 2.8s ease-in-out infinite;
    }
    .stone .dome {
      position: absolute;
      left: 21%;
      top: 11%;
      width: 50%;
      height: 30%;
      border-radius: 50%;
      background: radial-gradient(130% 130% at 42% 30%, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.1) 62%, transparent 80%);
      filter: blur(0.8px);
    }
    .stone .glint {
      position: absolute;
      top: 17%;
      left: 25%;
      width: 24%;
      height: 10%;
      border-radius: 50%;
      background: linear-gradient(120deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0));
      transform: rotate(-20deg);
      filter: blur(0.5px);
    }
    .stone .spark {
      position: absolute;
      right: 21%;
      bottom: 20%;
      width: 13%;
      height: 10%;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.75), transparent 72%);
      filter: blur(1px);
    }
    .rings {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 7px;
      animation: ringsFloat 2.8s ease-in-out infinite;
    }
    .rings span {
      display: block;
      border-radius: 50%;
      border: 1px solid rgba(45, 122, 112, 0.32);
    }
    .rings .r1 {
      width: 73px;
      height: 13px;
    }
    .rings .r2 {
      width: 49px;
      height: 8px;
      margin-top: -3px;
      opacity: 0.7;
    }
    @keyframes stoneFloat {
      0%,
      100% {
        transform: translateY(5px) scale(0.99);
      }
      50% {
        transform: translateY(-6px) scale(1.02);
      }
    }
    @keyframes ringsFloat {
      0%,
      100% {
        transform: translateY(3px) scale(0.96);
        opacity: 0.72;
      }
      50% {
        transform: translateY(-2px) scale(1.04);
        opacity: 0.95;
      }
    }
    @keyframes stoneGlow {
      0%,
      100% {
        opacity: 0.5;
      }
      50% {
        opacity: 0.95;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .stone,
      .rings,
      .stone .glow {
        animation: none;
      }
      .stone .glow {
        opacity: 0.6;
      }
    }
    .greet {
      text-align: center;
      margin-top: 4px;
    }
    .greet .g-line {
      font-family: var(--font-nunito);
      font-weight: 700;
      font-size: 23px;
      line-height: 1.2;
      letter-spacing: -0.005em;
    }
    .greet .name {
      color: #1f5c54;
    }
    .landing.dark .greet .name {
      color: #5cbfb0;
    }
    .greet .ask {
      color: var(--text-primary);
    }
    .cardgrid {
      display: flex;
      justify-content: center;
      gap: 12px;
      width: 100%;
      max-width: 600px;
    }
    .lcard {
      flex: 1 1 0;
      min-width: 0;
      max-width: 200px;
      position: relative;
      text-align: center;
      padding: 16px 14px 15px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.34);
      border: 1px solid var(--glass-border);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      box-shadow: var(--glass-shadow);
      cursor: pointer;
      font-family: var(--font-body);
      color: var(--text-primary);
      transition:
        transform 0.18s ease,
        box-shadow 0.18s ease,
        border-color 0.18s ease;
    }
    .landing.dark .lcard {
      background: rgba(255, 248, 235, 0.06);
    }
    .lcard:hover {
      transform: translateY(-2px);
      box-shadow: var(--glass-shadow-lifted);
      border-color: var(--glass-border-strong);
    }
    .lcard h3 {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 15px;
      letter-spacing: -0.01em;
      margin: 0 0 3px;
    }
    .lcard p {
      font-size: 12px;
      line-height: 1.4;
      color: var(--text-secondary);
      margin: 0;
    }
    .lico {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 46px;
      margin: 0 auto 12px;
      border-radius: 14px;
    }
    .lico svg {
      width: 24px;
      height: 24px;
      display: block;
    }
    .lico.teal {
      background: rgba(61, 155, 143, 0.13);
      color: var(--ink-teal);
    }
    .lico.terra {
      background: rgba(198, 123, 92, 0.15);
      color: var(--ink-terracotta);
    }
    .pebble-wrap.compact .landing {
      padding: 6px 2px;
    }
    .pebble-wrap.compact .landing-inner {
      gap: 16px;
    }
    .pebble-wrap.compact .stone-wrap {
      margin: 2px 0 4px;
    }
    .pebble-wrap.compact .stone {
      width: 86px;
      height: 72px;
    }
    .pebble-wrap.compact .rings .r1 {
      width: 50px;
      height: 9px;
    }
    .pebble-wrap.compact .rings .r2 {
      width: 33px;
      height: 6px;
    }
    .pebble-wrap.compact .greet .g-line {
      font-size: 18px;
    }
    .pebble-wrap.compact .cardgrid {
      gap: 8px;
    }
    .pebble-wrap.compact .lcard {
      padding: 12px 8px;
      border-radius: 16px;
    }
    .pebble-wrap.compact .lcard h3 {
      font-size: 12.5px;
    }
    .pebble-wrap.compact .lcard p {
      font-size: 10.5px;
    }
    .pebble-wrap.compact .lico {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      margin-bottom: 8px;
    }
    .pebble-wrap.compact .lico svg {
      width: 18px;
      height: 18px;
    }
    .composer {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-top: 18px;
      padding: 10px 10px 10px 20px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      transition:
        border-color 0.18s ease,
        background 0.18s ease;
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
      padding: 4px 2px;
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
    .send:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .send svg {
      width: 16px;
      height: 16px;
    }
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
      transition:
        color 0.18s ease,
        border-color 0.18s ease,
        background 0.18s ease;
    }
    .mic:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .mic:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .mic svg {
      width: 17px;
      height: 17px;
    }
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
      .mic.on {
        animation: none;
      }
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
    return html`<pebble-icon></pebble-icon>`;
  }

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

  // Safe inline markdown for the bubble (HTML-escape FIRST, then
  // re-introduce only bold / italic / http links). Newlines stay handled
  // by the bubble's white-space:pre-wrap.
  _fmt(text) {
    const esc = String(text ?? '')
      .replace(/^[ \t ]+/gm, '')
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
    const hasThread = this._session.length > 0;
    return html`
      <div class="pebble-wrap ${this.compact ? 'compact' : ''}">
        <div class="chatpane">
          <div class="toprow">
            <span class="qstrip ${this._atLimit ? 'lim' : ''}">${this._quotaLabel()}</span>
            ${hasThread
              ? html`<button class="clear" @click=${() => this._clear()}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg>
                  Clear
                </button>`
              : ''}
          </div>
          <div class="thread">
            ${!hasThread
              ? html`<div class="landing ${this._isDark() ? 'dark' : ''}">
                  <div class="landing-inner">
                    <div class="stone-wrap" aria-hidden="true">
                      <div class="stone">
                        <span class="glow"></span>
                        <span class="dome"></span>
                        <span class="glint"></span>
                        <span class="spark"></span>
                      </div>
                      <div class="rings">
                        <span class="r1"></span><span class="r2"></span>
                      </div>
                    </div>
                    <div class="greet">
                      <div class="g-line name">Hi ${this._firstName()},</div>
                      <div class="g-line ask">what can I help your family plan?</div>
                    </div>
                    <div class="cardgrid">
                      <button class="lcard" @click=${() => this._smartUpload()}>
                        <span class="lico terra">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4M8 8l4-4 4 4"/><path d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"/></svg>
                        </span>
                        <h3>Smart Upload</h3>
                        <p>Drop a flier, schedule or note. I'll pull out the dates.</p>
                      </button>
                      <button
                        class="lcard"
                        @click=${() =>
                          this._send(
                            'What are some good things for our family to do this weekend?',
                          )}
                      >
                        <span class="lico teal">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>
                        </span>
                        <h3>Weekend ideas</h3>
                        <p>Things for your family to do nearby.</p>
                      </button>
                      ${this._voiceSupported
                        ? html`<button class="lcard" @click=${() => this._toggleVoice()}>
                            <span class="lico teal">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h2l2-7 4 14 3-9 2 4h5"/></svg>
                            </span>
                            <h3>Speak directly</h3>
                            <p>Hands full? Just talk, I'm listening.</p>
                          </button>`
                        : ''}
                    </div>
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
                            <div class="said">${this._senderName(m.senderUid)} asked</div>
                            <div class="bubble">${this._fmt(m.content)}</div>
                          </div>
                        </div>`,
                  )}
                  ${this._streaming
                    ? html`<div class="msg pb" data-idx="streaming">
                        <span class="pic">${this._pico()}</span>
                        <div class="col">
                          ${this._streaming.text
                            ? html`<!-- prettier-ignore -->
                                <div class="bubble">${this._fmt(this._streaming.text)}</div>`
                            : html`<div class="bubble waiting">
                                <span class="wcap">${this._streamCaption()}</span>
                                <span class="wdots"><span></span><span></span><span></span></span>
                              </div>`}
                        </div>
                      </div>`
                    : ''}
                `}
          </div>

          ${this._error ? html`<div class="error">${this._error}</div>` : ''}
          ${this._atLimit
            ? html`<div class="limitbanner">${this._limitMessage()}</div>`
            : ''}

          <form
            class="composer ${this._atLimit ? 'disabled' : ''}"
            @submit=${(e) => {
              e.preventDefault();
              this._send();
            }}
          >
            <textarea
              placeholder=${this._atLimit
                ? 'Out of questions this week'
                : 'Ask about plans, activities, logistics…'}
              .value=${this._input}
              @input=${(e) => (this._input = e.target.value)}
              @keydown=${(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  this._send();
                }
              }}
              ?disabled=${this._loading || this._atLimit}
            ></textarea>
            ${this._voiceSupported
              ? html`<button
                  type="button"
                  class="mic ${this._listening ? 'on' : ''}"
                  @click=${() => this._toggleVoice()}
                  ?disabled=${this._loading || this._atLimit}
                  aria-label=${this._listening ? 'Stop listening' : 'Ask by voice'}
                  title=${this._listening ? 'Listening… tap to stop' : 'Ask by voice'}
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
              ?disabled=${this._loading || this._atLimit || !this._input.trim()}
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

customElements.define('family-pebble', FamilyPebble);
