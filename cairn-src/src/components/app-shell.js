import { LitElement, html } from 'lit';
import { onAuth } from '../services/firebase.js';
import { dataStore, resolvePhoto } from '../services/data.js';
import './register-screen.js';
import './home-screen.js';
import './join-family-screen.js';
import './onboarding-wizard.js';
import { toast } from '../services/toast.js';

const PENDING_JOIN_KEY = 'cairn:pendingJoinCode';
const PENDING_CREATE_KEY = 'cairn:pendingCreateFamily';

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
    activities: { state: true },
    holidays: { state: true },
    userDocResolved: { state: true },
    ppFamily: { state: true },
    ppIsMember: { state: true },
    ppChildren: { state: true },
    selectedChildId: { state: true },
    childMilestones: { state: true },
    childInsights: { state: true },
    childDailyCard: { state: true },
    familyDailyCard: { state: true },
    pebbleAnchors: { state: true },
    pebbleRhythms: { state: true },
    pebblePatterns: { state: true },
    pebbleLiveContext: { state: true },
    childPebbleMessages: { state: true },
    childPebbleSessions: { state: true },
    ppIsChildViewer: { state: true },
    incomingChildRequests: { state: true },
    myChildAccessRequest: { state: true },
  };

  constructor() {
    super();
    this.authUser = null;
    this.loading = true;
    const params = new URLSearchParams(window.location.search);
    this.preview = params.has('preview');
    // Dev path: `?reset=1` forces the onboarding wizard to render for
    // the current signed-in user regardless of their existing family
    // pointers. Also drops any stashed join code so a previous invite
    // link doesn't snap them to the join screen. Read-only — no
    // Firestore writes — so reloading without the flag returns the
    // user to their normal state.
    this._resetMode = params.has('reset');
    if (this._resetMode) {
      try {
        localStorage.removeItem(PENDING_JOIN_KEY);
      } catch {
        /* private mode */
      }
    }
    // Pull join code from URL OR from a previous-session stash (set when
    // user clicked an invite link while signed out — we resume after auth).
    const urlJoin = params.get('join');
    if (urlJoin && !this._resetMode) {
      try {
        localStorage.setItem(PENDING_JOIN_KEY, urlJoin);
      } catch {
        /* private mode */
      }
    }
    let pending = null;
    if (!this._resetMode) {
      try {
        pending = localStorage.getItem(PENDING_JOIN_KEY);
      } catch {
        /* private mode */
      }
    }
    this.joinCode = this._resetMode ? null : (urlJoin ?? pending ?? null);
    this.pebbleUser = null;
    this.family = null;
    this.children = [];
    this.trips = [];
    this.events = [];
    this.activities = [];
    this.holidays = [];
    this.ppFamily = null;
    this.ppIsMember = false;
    this.ppChildren = [];
    this.selectedChildId = null;
    this.childMilestones = [];
    this.childInsights = [];
    this.childDailyCard = null;
    this.familyDailyCard = null;
    this.pebbleAnchors = [];
    this.pebbleRhythms = [];
    this.pebblePatterns = [];
    this.pebbleLiveContext = [];
    this.childPebbleMessages = [];
    this.childPebbleSessions = [];
    this.ppIsChildViewer = false;
    this.incomingChildRequests = [];
    this.myChildAccessRequest = null;
    this._unsubAuth = null;
    this._onDataChange = () => {
      this.pebbleUser = dataStore.state.user;
      this.family = dataStore.state.family;
      this.children = dataStore.state.children;
      this.trips = dataStore.state.trips;
      this.events = dataStore.state.events;
      this.activities = dataStore.state.activities;
      this.holidays = dataStore.state.holidays;
      this.ppFamily = dataStore.state.ppFamily;
      this.ppIsMember = dataStore.state.ppIsMember;
      this.ppChildren = dataStore.state.ppChildren;
      this.selectedChildId = dataStore.state.selectedChildId;
      this.childMilestones = dataStore.state.childMilestones;
      this.childInsights = dataStore.state.childInsights;
      this.childDailyCard = dataStore.state.childDailyCard;
      this.familyDailyCard = dataStore.state.familyDailyCard;
      this.pebbleAnchors = dataStore.state.pebbleAnchors;
      this.pebbleRhythms = dataStore.state.pebbleRhythms;
      this.pebblePatterns = dataStore.state.pebblePatterns;
      this.pebbleLiveContext = dataStore.state.pebbleLiveContext;
      this.childPebbleMessages = dataStore.state.childPebbleMessages;
      this.childPebbleSessions = dataStore.state.childPebbleSessions;
      this.ppIsChildViewer = dataStore.state.ppIsChildViewer;
      this.incomingChildRequests = dataStore.state.incomingChildRequests;
      this.myChildAccessRequest = dataStore.state.myChildAccessRequest;
      // Promote the userDocResolved flag to a tracked property so render
      // re-runs the moment we know whether the user has a family.
      this.userDocResolved = dataStore.userDocResolved;
    };
    this.userDocResolved = false;
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
    // Inject the Daybreak wallpaper URL as a CSS custom property on the
    // root so global pre-login background CSS in tokens.css can consume
    // it. Can't hard-code the URL in CSS because prod's base path is
    // `/cairn/` while local dev serves at root — only JS can resolve
    // both via import.meta.env.BASE_URL.
    if (typeof document !== 'undefined') {
      const url = `${import.meta.env.BASE_URL}assets/pebblepath-daybreak-empty.jpg`;
      document.documentElement.style.setProperty(
        '--pre-login-bg',
        `url('${url}')`,
      );
    }
    if (this.preview) {
      this.loading = false;
      return;
    }
    dataStore.addEventListener('change', this._onDataChange);
    this._unsubAuth = onAuth((u) => {
      this.authUser = u;
      this.loading = false;
      if (u) {
        // Pick up any join-code the user stashed pre-auth on the
        // register screen — same localStorage key as the URL ?join=
        // flow. ?reset=1 skips this so the wizard can render without
        // being short-circuited to join-family-screen.
        if (!this._resetMode) {
          try {
            const pending = localStorage.getItem(PENDING_JOIN_KEY);
            if (pending && !this.joinCode) this.joinCode = pending;
          } catch { /* private mode */ }
        }
        dataStore.start(u.uid);
        // If the user picked "Create Cairn account" on the register
        // screen pre-auth, the family-name is sitting in localStorage.
        // Fire-and-forget createCairnOnlyFamily after auth completes;
        // data-store listener will pick up the new cairnFamilyId and
        // route us into the dashboard.
        this._consumePendingCreate();
      } else {
        dataStore.clearBriefCaches();
        dataStore.stop();
        this.userDocResolved = false;
      }
    });
  }

  /** Consume the register-screen "create family" intent if present. */
  async _consumePendingCreate() {
    let pending = null;
    try {
      pending = localStorage.getItem(PENDING_CREATE_KEY);
    } catch { /* private mode */ }
    if (!pending) return;
    try {
      localStorage.removeItem(PENDING_CREATE_KEY);
    } catch {}
    try {
      await dataStore.createCairnOnlyFamily(pending);
      toast(`Welcome to ${pending}.`);
    } catch (e) {
      console.error('Pending family create failed:', e);
      toast(
        e?.code === 'permission-denied'
          ? "Couldn't create the family — Firestore rules may need a redeploy."
          : `Couldn't create the family: ${e?.message ?? 'try again'}`,
        { duration: 5000 },
      );
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsubAuth?.();
    dataStore.removeEventListener('change', this._onDataChange);
  }

  _composeViewer() {
    const u = this.authUser;
    // User-doc displayName wins over Firebase Auth's value: the user
    // can edit it via the profile sheet (`/users/{uid}.displayName`),
    // but the auth provider's displayName is fixed by Google and
    // would otherwise mask the edit. Empty-string user-doc value
    // falls back to auth → 'You'.
    const pebbleName = this.pebbleUser?.displayName;
    return {
      uid: u.uid,
      displayName: (pebbleName && pebbleName.trim()) || u.displayName || 'You',
      email: u.email ?? this.pebbleUser?.email ?? '',
      photoURL: resolvePhoto(u, this.pebbleUser),
    };
  }

  /**
   * True when the signed-in user has neither a PebblePath family
   * (`familyId`) nor a Cairn family (`cairnFamilyId`). We wait for the
   * user-doc snapshot to fire at least once before deciding — otherwise
   * we'd flash the onboarding wizard during the initial async load.
   *
   * Dev override: `?reset=1` on the URL forces the wizard to render
   * for the current session regardless of the user's existing family
   * pointers. Useful for QAing the wizard without wiping a real account
   * doc. The flag doesn't mutate any Firestore state — it just changes
   * what app-shell renders, and the user can sign out + return to the
   * dashboard normally on their next visit.
   */
  _needsOnboarding() {
    if (!this.authUser) return false;
    if (this.joinCode) return false;          // dedicated join flow takes over
    if (this._resetMode) return true;         // ?reset=1 — force wizard
    if (!this.userDocResolved) return false;  // still loading the user doc
    const fid =
      this.pebbleUser?.familyId ?? this.pebbleUser?.cairnFamilyId ?? null;
    return !fid;
  }

  /** Reflect the active route on the host so global CSS can swap the
   *  page background (Daybreak wallpaper on pre-login, dusk gradient
   *  on the dashboard). The wallpaper URL itself is set as a CSS custom
   *  property up in the main connectedCallback. */
  updated() {
    this.setAttribute('data-route', this._currentRoute());
  }

  _currentRoute() {
    if (this.loading) return 'loading';
    if (this.preview) return 'home';
    if (!this.authUser) return 'register';
    if (this.joinCode) return 'join';
    // Auth done but the user-doc snapshot hasn't fired yet — we don't
    // yet know wizard-vs-dashboard. Treat it as 'wizard' for the
    // BACKGROUND only (keeps the Daybreak wallpaper continuous on the
    // Create-account → Set-up-family path); render() shows nothing
    // during this gap so the empty dashboard never flashes.
    if (!this.userDocResolved && !this._resetMode) return 'wizard';
    if (this._needsOnboarding()) return 'wizard';
    return 'home';
  }

  render() {
    if (this.loading) return html``;
    if (this.preview) return html`<home-screen preview></home-screen>`;
    if (!this.authUser) {
      return html`
        <register-screen
          .joinCode=${this.joinCode ?? ''}
        ></register-screen>
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
    // Auth resolved but the user-doc snapshot hasn't fired yet: we
    // can't tell if this account needs onboarding or has a family.
    // Render nothing (over the continuous Daybreak wallpaper — see
    // _currentRoute) so a brand-new account doesn't flash the empty
    // dashboard between "Create account" and "Set up your family".
    // ?reset=1 + preview bypass (they don't depend on the user doc).
    if (!this.userDocResolved && !this._resetMode) {
      return html``;
    }
    if (this._needsOnboarding()) {
      return html`
        <onboarding-wizard
          .user=${this.authUser}
          @join-code=${(e) => {
            // User pasted a code in the wizard — feed it into the
            // join-family-screen flow (writes to
            // /families/{id}.cairnMemberIds via dataStore.redeemConnectCode).
            this.joinCode = e.detail.code;
            try {
              localStorage.setItem(PENDING_JOIN_KEY, e.detail.code);
            } catch { /* private mode */ }
          }}
        ></onboarding-wizard>
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
        .activities=${this.activities}
        .holidays=${this.holidays}
        .ppFamily=${this.ppFamily}
        .ppIsMember=${this.ppIsMember}
        .ppChildren=${this.ppChildren}
        .selectedChildId=${this.selectedChildId}
        .childMilestones=${this.childMilestones}
        .childInsights=${this.childInsights}
        .childDailyCard=${this.childDailyCard}
        .familyDailyCard=${this.familyDailyCard}
        .pebbleAnchors=${this.pebbleAnchors}
        .pebbleRhythms=${this.pebbleRhythms}
        .pebblePatterns=${this.pebblePatterns}
        .pebbleLiveContext=${this.pebbleLiveContext}
        .childPebbleMessages=${this.childPebbleMessages}
        .childPebbleSessions=${this.childPebbleSessions}
        .ppIsChildViewer=${this.ppIsChildViewer}
        .incomingChildRequests=${this.incomingChildRequests}
        .myChildAccessRequest=${this.myChildAccessRequest}
      ></home-screen>
    `;
  }
}

customElements.define('cairn-app', AppShell);
