import { LitElement, html } from 'lit';
import { onAuth } from '../services/firebase.js';
import { dataStore, resolvePhoto } from '../services/data.js';
import './sign-in-screen.js';
import './home-screen.js';
import './join-family-screen.js';

const PENDING_JOIN_KEY = 'cairn:pendingJoinCode';

export class AppShell extends LitElement {
  static properties = {
    authUser: { state: true },
    loading: { state: true },
    preview: { state: true },
    joinCode: { state: true },
    pebbleUser: { state: true },
    family: { state: true },
    children: { state: true },
    trips: { state: true },
    events: { state: true },
  };

  constructor() {
    super();
    this.authUser = null;
    this.loading = true;
    const params = new URLSearchParams(window.location.search);
    this.preview = params.has('preview');
    // Pull join code from URL OR from a previous-session stash (set when
    // user clicked an invite link while signed out — we resume after auth).
    const urlJoin = params.get('join');
    if (urlJoin) {
      try {
        localStorage.setItem(PENDING_JOIN_KEY, urlJoin);
      } catch {
        /* private mode */
      }
    }
    let pending = null;
    try {
      pending = localStorage.getItem(PENDING_JOIN_KEY);
    } catch {
      /* private mode */
    }
    this.joinCode = urlJoin ?? pending ?? null;
    this.pebbleUser = null;
    this.family = null;
    this.children = [];
    this.trips = [];
    this.events = [];
    this._unsubAuth = null;
    this._onDataChange = () => {
      this.pebbleUser = dataStore.state.user;
      this.family = dataStore.state.family;
      this.children = dataStore.state.children;
      this.trips = dataStore.state.trips;
      this.events = dataStore.state.events;
    };
  }

  _clearJoinState() {
    this.joinCode = null;
    try {
      localStorage.removeItem(PENDING_JOIN_KEY);
    } catch {
      /* private mode */
    }
    // Strip ?join= from the URL without reloading the page.
    const url = new URL(window.location.href);
    url.searchParams.delete('join');
    window.history.replaceState({}, '', url.toString());
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.preview) {
      this.loading = false;
      return;
    }
    dataStore.addEventListener('change', this._onDataChange);
    this._unsubAuth = onAuth((u) => {
      this.authUser = u;
      this.loading = false;
      if (u) dataStore.start(u.uid);
      else dataStore.stop();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsubAuth?.();
    dataStore.removeEventListener('change', this._onDataChange);
  }

  _composeViewer() {
    const u = this.authUser;
    return {
      uid: u.uid,
      displayName: u.displayName ?? this.pebbleUser?.displayName ?? 'You',
      email: u.email ?? this.pebbleUser?.email ?? '',
      photoURL: resolvePhoto(u, this.pebbleUser),
    };
  }

  render() {
    if (this.loading) return html``;
    if (this.preview) return html`<home-screen preview></home-screen>`;
    if (!this.authUser) {
      return html`
        <sign-in-screen
          .joinCode=${this.joinCode ?? ''}
        ></sign-in-screen>
      `;
    }
    if (this.joinCode) {
      return html`
        <join-family-screen
          .code=${this.joinCode}
          @joined=${() => this._clearJoinState()}
          @cancel=${() => this._clearJoinState()}
        ></join-family-screen>
      `;
    }
    return html`
      <home-screen
        .user=${this._composeViewer()}
        .pebbleUser=${this.pebbleUser}
        .family=${this.family}
        .children=${this.children}
        .trips=${this.trips}
        .events=${this.events}
      ></home-screen>
    `;
  }
}

customElements.define('cairn-app', AppShell);
