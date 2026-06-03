var Mt=Object.defineProperty;var It=(g,e,t)=>e in g?Mt(g,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):g[e]=t;var _=(g,e,t)=>It(g,typeof e!="symbol"?e+"":e,t);import{i as z,a as T,b as n,o as zt}from"./lit-dM6tPkba.js";import{f as Tt,h as Dt,j as Ft,k as Et,G as tt,O as Nt,l as Rt,s as Bt,m as bt,n as Ot,o as Lt,q as jt,t as Ut,v as C,w as M,x as $,R as Gt,y as Yt,z as E,A as G,B as I,D as Y,E as Z,H as V,I as L,J as W}from"./firebase-core-CJo043ws.js";import{g as Vt,h as H}from"./firebase-functions-BL34gNgU.js";import{g as Ht,a as ee,r as K,u as te}from"./firebase-storage-DGfGQ5c2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();class we extends z{constructor(){super(),this.variant="default",this.lifted=!1,this.padding="md"}render(){const e=["panel",this.variant==="strong"?"strong":"",this.lifted?"lifted":"",`pad-${this.padding}`].filter(Boolean).join(" ");return n`
      <div class=${e}>
        <div class="content"><slot></slot></div>
      </div>
    `}}_(we,"properties",{variant:{type:String},lifted:{type:Boolean},padding:{type:String}}),_(we,"styles",T`
    :host {
      display: block;
    }
    :host([stretch]) {
      height: 100%;
    }
    :host([stretch]) .panel {
      height: 100%;
    }
    /* 2026-05-23 — also stretch the inner .content wrapper so a
       slotted flex-column (e.g. the calendar section cal-inner)
       can use height 100% and have it actually cascade. Without
       this rule the slot parent .content sized to natural content
       only, and the calendar Week/Month views sat at half-height. */
    :host([stretch]) .content {
      height: 100%;
    }
    .panel {
      position: relative;
      border-radius: var(--radius-card);
      background: var(--glass-fill);
      backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      border: 1px solid var(--glass-border);
      box-shadow: var(--glass-shadow);
      overflow: hidden;
      box-sizing: border-box;
    }
    .panel.strong {
      background: var(--glass-fill-strong);
      border-color: var(--glass-border-strong);
    }
    .panel.lifted {
      box-shadow: var(--glass-shadow-lifted);
    }
    .panel::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.12) 0%,
        rgba(255, 255, 255, 0) 35%
      );
      pointer-events: none;
    }
    .pad-none {
      padding: 0;
    }
    .pad-sm {
      padding: 16px;
    }
    .pad-md {
      padding: 28px;
    }
    .pad-lg {
      padding: 44px;
    }
    .content {
      position: relative;
      z-index: 1;
    }
  `);customElements.define("glass-panel",we);class _e extends z{constructor(){super(),this.variant="primary",this.size="md",this.full=!1,this.disabled=!1}render(){const e=[this.variant,`size-${this.size}`,this.full?"full":""].filter(Boolean).join(" ");return n`
      <button class=${e} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}}_(_e,"properties",{variant:{type:String},size:{type:String},full:{type:Boolean},disabled:{type:Boolean,reflect:!0}}),_(_e,"styles",T`
    * {
      box-sizing: border-box;
    }
    :host {
      display: inline-block;
    }
    :host([disabled]) button {
      opacity: 0.5;
      cursor: not-allowed;
    }
    button {
      font-family: var(--font-body);
      font-weight: 600;
      letter-spacing: -0.01em;
      color: var(--text-primary);
      border-radius: var(--radius-pill);
      border: 1px solid transparent;
      cursor: pointer;
      transition:
        transform 160ms ease,
        box-shadow 240ms ease,
        background 240ms ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
      min-height: 44px; /* iOS touch target minimum */
    }
    button:active {
      transform: translateY(1px) scale(0.99);
    }
    .size-md {
      padding: 12px 22px;
      font-size: 15px;
    }
    .size-lg {
      padding: 16px 28px;
      font-size: 17px;
    }
    .full {
      display: block;
      width: 100%;
    }
    .primary {
      background-image: var(--gradient-cta);
      color: #fff;
      text-shadow: 0 1px 1px rgba(20, 12, 6, 0.35);
      box-shadow:
        0 8px 24px rgba(139, 90, 62, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.32);
      border-color: rgba(255, 248, 235, 0.22);
    }
    .primary:hover:not(:disabled) {
      background-image: var(--gradient-cta-hover);
      box-shadow:
        0 12px 32px rgba(139, 90, 62, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.38);
    }
    .ghost {
      background: var(--glass-fill);
      backdrop-filter: blur(20px) saturate(160%);
      -webkit-backdrop-filter: blur(20px) saturate(160%);
      border-color: var(--glass-border);
    }
    .ghost:hover:not(:disabled) {
      background: var(--glass-fill-strong);
      border-color: var(--glass-border-strong);
    }
    /* Parity with the iOS welcome screen's Register button —
       PebbleTranslucentButtonStyle(tint: .ppTeal): a teal wash sitting
       OVER frosted glass, white label, a hairline white border. Reads
       as a brand-tinted frosted pill in BOTH themes (the teal mix is
       opaque enough that white text stays legible regardless of the
       surface behind it). Additive variant — primary/ghost untouched. */
    .frost-teal {
      /* iOS = ppTeal(#3d9b8f) @ ~0.65 OVER .ultraThinMaterial (a
         near-white frost) on the light Daybreak wallpaper, which
         reads as a soft MUTED SAGE-teal — NOT the vivid 60% teal the
         old color-mix + saturate(160%) produced. This fixed sage
         (#3d9b8f blended ~38% toward white, lightly translucent) +
         no saturation boost matches the iOS Register pill. */
      background: rgba(124, 186, 175, 0.88);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      color: #fff;
      text-shadow: 0 1px 2px rgba(20, 12, 6, 0.34);
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow:
        0 8px 22px rgba(61, 155, 143, 0.26),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    .frost-teal:hover:not(:disabled) {
      background: rgba(112, 176, 165, 0.92);
      border-color: rgba(255, 255, 255, 0.55);
    }
    /* Neutral frosted sibling of frost-teal — the iOS welcome Login
       button (PebbleTranslucentButtonStyle, no tint). The pre-login
       backdrop is the LIGHT Daybreak wallpaper (warm sand/peach), so
       a near-white frost vanished into it. This is a DARKER warm-grey
       frosted pill with a white label — the iOS-faithful look: it
       reads as a distinct darker shape against the light wallpaper. */
    .frost-neutral {
      background: rgba(74, 70, 66, 0.46);
      backdrop-filter: blur(20px) saturate(160%);
      -webkit-backdrop-filter: blur(20px) saturate(160%);
      color: #fff;
      text-shadow: 0 1px 2px rgba(20, 12, 6, 0.4);
      border-color: rgba(255, 255, 255, 0.28);
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.16),
        0 6px 18px rgba(20, 12, 6, 0.2);
    }
    .frost-neutral:hover:not(:disabled) {
      background: rgba(74, 70, 66, 0.56);
      border-color: rgba(255, 255, 255, 0.42);
    }
  `);customElements.define("glass-button",_e);class ke extends z{constructor(){super(),this.size=44}render(){const e=this.size;return n`
      <svg
        viewBox="0 0 64 64"
        width=${e}
        height=${e}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Portal"
      >
        <defs>
          <linearGradient id="cm-stone-warm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#f0e3cf" />
            <stop offset="0.6" stop-color="#c9b89a" />
            <stop offset="1" stop-color="#8b5a3e" />
          </linearGradient>
          <linearGradient id="cm-stone-sage" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#aebfa6" />
            <stop offset="1" stop-color="#4a6754" />
          </linearGradient>
          <linearGradient id="cm-stone-clay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#d99a7a" />
            <stop offset="1" stop-color="#8b5a3e" />
          </linearGradient>
          <linearGradient id="cm-highlight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="rgba(255,255,255,0.55)" />
            <stop offset="1" stop-color="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        <!-- Base stone (largest, warm) -->
        <ellipse cx="32" cy="54" rx="22" ry="7" fill="url(#cm-stone-warm)" />
        <ellipse cx="32" cy="52" rx="20" ry="2.2" fill="url(#cm-highlight)" opacity="0.55" />

        <!-- Stone 2 (clay) -->
        <ellipse cx="29.5" cy="43" rx="16.5" ry="6" fill="url(#cm-stone-clay)" />
        <ellipse cx="29.5" cy="41.4" rx="14.8" ry="1.9" fill="url(#cm-highlight)" opacity="0.5" />

        <!-- Stone 3 (sage) -->
        <ellipse cx="33.5" cy="33" rx="12.5" ry="5" fill="url(#cm-stone-sage)" />
        <ellipse cx="33.5" cy="31.6" rx="11" ry="1.6" fill="url(#cm-highlight)" opacity="0.5" />

        <!-- Stone 4 (warm) -->
        <ellipse cx="30.5" cy="24" rx="9" ry="4" fill="url(#cm-stone-warm)" />
        <ellipse cx="30.5" cy="23" rx="7.8" ry="1.4" fill="url(#cm-highlight)" opacity="0.6" />

        <!-- Top stone (smallest, clay) -->
        <ellipse cx="33" cy="16" rx="6" ry="3.2" fill="url(#cm-stone-clay)" />
        <ellipse cx="33" cy="15.2" rx="5" ry="1.1" fill="url(#cm-highlight)" opacity="0.65" />
      </svg>
    `}}_(ke,"properties",{size:{type:Number}}),_(ke,"styles",T`
    :host {
      display: inline-block;
      line-height: 0;
    }
    svg {
      display: block;
      filter: drop-shadow(0 6px 18px rgba(20, 12, 6, 0.45));
    }
  `);customElements.define("cairn-mark",ke);class mt extends z{constructor(){super(),this.size=24,this.color="currentColor",this.mode="production"}render(){const e=Number(this.size)||24,t=this.color||"currentColor",i=this.mode==="template"?{fill:t,opacity:.25}:{fill:"white",opacity:.33};return n`
      <svg
        width=${e}
        height=${e}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style="display:inline-block;vertical-align:middle;position:relative;top:-2px;"
      >
        <ellipse cx="12" cy="21.5" rx="9.5" ry="1.8"
          stroke=${t} stroke-width="1" stroke-opacity="0.2"></ellipse>
        <ellipse cx="12" cy="20.5" rx="6.5" ry="1.2"
          stroke=${t} stroke-width="1" stroke-opacity="0.35"></ellipse>
        <path fill=${t}
          d="M4.5 13C4.5 8.8 7.8 7 12 7C16.2 7 19.5 8.8 19.5 13C19.5 17.2 16.2 19.5 12 19.5C7.8 19.5 4.5 17.2 4.5 13Z"></path>
        <path fill=${i.fill} fill-opacity=${i.opacity}
          d="M7.5 10.5C8 8.5 9.8 7.8 12 7.8C14.2 7.8 16 8.5 16 10.5C16 12 14.2 12.5 12 12.5C9.8 12.5 7.5 12 7.5 10.5Z"></path>
      </svg>
    `}}_(mt,"properties",{size:{type:Number},color:{type:String},mode:{type:String}});customElements.define("pebble-icon",mt);class $e extends z{constructor(){super(),this.name="",this.hue=200,this.photo="",this.size=36,this.showName=!1}_initials(){return this.name.split(/\s+/).map(e=>e[0]).filter(Boolean).slice(0,2).join("").toUpperCase()}render(){const e=`linear-gradient(135deg, hsl(${this.hue}, 55%, 62%) 0%, hsl(${(this.hue+40)%360}, 50%, 42%) 100%)`,t=`width:${this.size}px;height:${this.size}px;background:${e};font-size:${this.size*.38}px;`;return n`
      <div class="avatar" style=${t} title=${this.name}>
        ${this.photo?n`<img src=${this.photo} alt=${this.name} />`:n`<span>${this._initials()}</span>`}
      </div>
      ${this.showName?n`<span class="name">${this.name}</span>`:""}
    `}}_($e,"properties",{name:{type:String},hue:{type:Number},photo:{type:String},size:{type:Number},showName:{type:Boolean,attribute:"show-name"}}),_($e,"styles",T`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .avatar {
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-display);
      font-weight: 600;
      color: rgba(255, 255, 255, 0.95);
      letter-spacing: -0.01em;
      box-shadow:
        0 4px 14px rgba(20, 12, 6, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
      border: 1.5px solid rgba(255, 248, 235, 0.6);
      overflow: hidden;
      flex-shrink: 0;
    }
    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .name {
      font-size: 13px;
      font-weight: 500;
      color: var(--text-secondary);
    }
  `);customElements.define("member-chip",$e);const qt="modulepreload",Wt=function(g){return"/portal/"+g},it={},ie=function(e,t,i){let a=Promise.resolve();if(t&&t.length>0){let s=function(l){return Promise.all(l.map(p=>Promise.resolve(p).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=s(t.map(l=>{if(l=Wt(l),l in it)return;it[l]=!0;const p=l.endsWith(".css"),h=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const c=document.createElement("link");if(c.rel=p?"stylesheet":qt,p||(c.as="script"),c.crossOrigin="",c.href=l,d&&c.setAttribute("nonce",d),document.head.appendChild(c),p)return new Promise((b,v)=>{c.addEventListener("load",b),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return a.then(s=>{for(const o of s||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},Ce={apiKey:"AIzaSyA6NKZNLVBeeLrXcLJSXus5M832AxpI2wk",authDomain:"pebblepath-992b6.firebaseapp.com",projectId:"pebblepath-992b6",storageBucket:"pebblepath-992b6.firebasestorage.app",messagingSenderId:"497141667291",appId:"1:497141667291:web:ee84c186db54389d10c3fe"},B=!!(Ce.apiKey&&Ce.projectId),ae=B?Tt(Ce):null,Kt="6LcRxvosAAAAAM2kb_rubOHlX39yOW73WbaIB_w4";var ut;B&&typeof window<"u"&&((ut=window.location)==null?void 0:ut.hostname)==="localhost"&&(self.FIREBASE_APPCHECK_DEBUG_TOKEN=!0);const Jt=B?Dt(ae,{provider:new Gt(Kt),isTokenAutoRefreshEnabled:!0}):null,w=B?Ft(ae):null,u=B?Et(ae):null,R=B?Vt(ae,"us-central1"):null,O=B?Ht(ae):null,Ae=B?new tt:null;Ae&&Ae.setCustomParameters({prompt:"select_account"});const ue=B?new tt:null;ue&&ue.addScope("https://www.googleapis.com/auth/calendar.readonly");let ge=null,Se=0;async function ft(){if(!w||!ue)throw new Error("Firebase not configured.");if(ge&&Date.now()<Se-6e4)return ge;const g=w.currentUser;if(!g)throw new Error("Please sign in before importing your calendar.");if(!(g.providerData??[]).some(r=>r.providerId==="google.com")){const r=new Error("Calendar import needs a Google account. You're signed in another way, so Cairn can't read your Google Calendar here yet — add events manually for now.");throw r.code="calendar/needs-google-account",r}let t;try{t=await Rt(g,ue)}catch(r){if((r==null?void 0:r.code)==="auth/user-mismatch"){const s=new Error("Please choose the same Google account you use to sign in to Cairn.");throw s.code=r.code,s}if((r==null?void 0:r.code)==="auth/popup-closed-by-user"||(r==null?void 0:r.code)==="auth/cancelled-popup-request"){const s=new Error("Calendar connection cancelled.");throw s.code=r.code,s}throw r}const i=tt.credentialFromResult(t),a=i==null?void 0:i.accessToken;if(!a)throw new Error("Couldn't get a Calendar access token — try again.");return ge=a,Se=Date.now()+3600*1e3,a}function Xt(){ge=null,Se=0}function be(){if(!w)throw new Error("Firebase not configured — fill in .env first.");return bt(w,Ae)}const le=B?new Nt("apple.com"):null;le&&(le.addScope("email"),le.addScope("name"));function Pe(){if(!w||!le)throw new Error("Firebase not configured — fill in .env first.");return bt(w,le)}function vt(g,e){if(!w)throw new Error("Firebase not configured.");return jt(w,g,e)}async function yt(g,e,t){if(!w)throw new Error("Firebase not configured.");const i=await Ot(w,g,e);if(t&&t.trim())try{await Lt(i.user,{displayName:t.trim()})}catch{}return i}function xt(g){if(!w)throw new Error("Firebase not configured.");return Ut(w,g)}function wt(){return w?Bt(w):Promise.resolve()}function _t(g){return w?Yt(w,g):(g(null),()=>{})}const Zt=Object.freeze(Object.defineProperty({__proto__:null,addDoc:L,app:ae,appCheck:Jt,auth:w,clearCalendarToken:Xt,collection:I,connectGoogleCalendar:ft,db:u,deleteDoc:W,doc:C,firebaseApp:ae,functions:R,getDocs:Z,getDownloadURL:ee,httpsCallable:H,isConfigured:B,onAuth:_t,onSnapshot:E,query:G,sendPasswordReset:xt,serverTimestamp:$,setDoc:V,signIn:be,signInWithApple:Pe,signInWithEmail:vt,signOutUser:wt,signUpWithEmail:yt,storage:O,storageRef:K,updateDoc:M,uploadBytes:te,where:Y},Symbol.toStringTag,{value:"Module"})),Qt={"united states":"US","united states of america":"US",usa:"US",us:"US","united kingdom":"GB",uk:"GB","great britain":"GB",england:"GB",scotland:"GB",wales:"GB","northern ireland":"GB",canada:"CA",australia:"AU",ireland:"IE",france:"FR",germany:"DE",spain:"ES",italy:"IT",netherlands:"NL","the netherlands":"NL",belgium:"BE",switzerland:"CH",austria:"AT",portugal:"PT",sweden:"SE",norway:"NO",denmark:"DK",finland:"FI","new zealand":"NZ",mexico:"MX",brazil:"BR","south africa":"ZA",india:"IN",japan:"JP",singapore:"SG",poland:"PL"};class ei extends EventTarget{constructor(){super(),this.state={user:null,family:null,children:[],trips:[],events:[],activities:[],holidays:[],ppFamily:null,ppIsMember:!1,ppIsChildViewer:!1,myChildAccessRequest:null,incomingChildRequests:[],ppChildren:[],selectedChildId:null,childMilestones:[],childInsights:[],childDailyCard:null,familyDailyCard:null,pebbleAnchors:[],pebbleRhythms:[],pebblePatterns:[],pebbleLiveContext:[],childPebbleMessages:[],childPebbleSessions:[]},this._uid=null,this._unsubUser=null,this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this._unsubActivities=null,this._currentFamilyId=null,this._inviteCodeMigratedFamilyId=null,this._holidayKey=null,this._ppFamilyId=null,this._selectedChildId=null,this._unsubPpFamily=null,this._unsubPpChildren=null,this._unsubChildMs=null,this._unsubChildIns=null,this._unsubChildDaily=null,this._unsubFamilyDaily=null,this._unsubAnchors=null,this._unsubRhythms=null,this._unsubPatterns=null,this._unsubLiveContext=null,this._unsubChildPebble=null,this._unsubChildSessions=null,this._ppReadOnly=!1,this._unsubIncomingReq=null,this._unsubMyReq=null,this.userDocResolved=!1}get familyId(){return this._currentFamilyId}start(e){!u||!e||this._uid!==e&&(this.stop(),this._uid=e,this._unsubUser=E(C(u,"users",e),t=>{var r,s,o,d,l,p,h,c;this.userDocResolved=!0,this.state.user=t.exists()?{id:t.id,...t.data()}:null;const i=((r=this.state.user)==null?void 0:r.cairnFamilyId)??((s=this.state.user)==null?void 0:s.familyId)??null;!i&&this.state.user&&this._healFamilyPointer(e),i!==this._currentFamilyId&&(this._currentFamilyId=i,(o=this._unsubFamily)==null||o.call(this),(d=this._unsubChildren)==null||d.call(this),(l=this._unsubTrips)==null||l.call(this),(p=this._unsubEvents)==null||p.call(this),(h=this._unsubActivities)==null||h.call(this),this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this._unsubActivities=null,this.state.family=null,this.state.children=[],this.state.trips=[],this.state.events=[],this.state.activities=[],i&&this._subscribeFamily(i));const a=((c=this.state.user)==null?void 0:c.familyId)??null;a!==this._ppFamilyId&&(this._ppFamilyId=a,this._teardownPpFamily(),a&&this._subscribePpFamily(a)),this._emit()}))}async _healFamilyPointer(e){if(!this._healing){this._healing=!0;try{const t=G(I(u,"families"),Y("cairnMemberIds","array-contains",e)),i=await Z(t);if(!i.empty){await V(C(u,"users",e),{cairnFamilyId:i.docs[0].id,updatedAt:$()},{merge:!0});return}const a=G(I(u,"families"),Y("memberIds","array-contains",e)),r=await Z(a);r.empty||await V(C(u,"users",e),{familyId:r.docs[0].id,updatedAt:$()},{merge:!0})}catch(t){console.warn("[Cairn] auto-heal family pointer failed:",t==null?void 0:t.code,t==null?void 0:t.message)}finally{this._healing=!1}}}async _loadHolidays(){var s,o;const e=(o=(s=this.state.family)==null?void 0:s.homeLocation)==null?void 0:o.country,t=Qt[String(e??"").trim().toLowerCase()]??null;if(!t){this.state.holidays.length&&(this.state.holidays=[],this._holidayKey=null,this._emit());return}const i=new Date().getFullYear(),a=[i,i+1],r=`${t}:${a.join(",")}`;if(this._holidayKey!==r){this._holidayKey=r;try{const d=[];for(const p of a){const h=`pp_hol_${t}_${p}`;let c=null;try{const b=JSON.parse(localStorage.getItem(h)||"null");b&&Date.now()-b.t<720*3600*1e3&&(c=b.h)}catch{}if(!c){const b=await fetch(`https://date.nager.at/api/v3/PublicHolidays/${p}/${t}`);if(!b.ok)continue;const v=await b.json();c=(Array.isArray(v)?v:[]).map(k=>({date:k.date,name:k.name||k.localName||"Holiday"}));try{localStorage.setItem(h,JSON.stringify({t:Date.now(),h:c}))}catch{}}for(const b of c)d.push({id:`hol-${t}-${b.date}-${b.name}`,title:b.name,date:b.date,source:"holiday"})}const l=new Set;this.state.holidays=d.filter(p=>{const h=`${p.date}|${p.title}`;return l.has(h)?!1:(l.add(h),!0)}),this._emit()}catch{this._holidayKey=null}}}_subscribeFamily(e){var t;this._unsubFamily=E(C(u,"families",e),i=>{this.state.family=i.exists()?{id:i.id,...i.data()}:null,this._reconcileChildViewer(),this._loadHolidays(),this._maybeMigrateInviteCodeFormat(),this._emit()}),(t=this._unsubMyReq)==null||t.call(this),this._unsubMyReq=E(C(u,"families",e,"childAccessRequests",this._uid),i=>{this.state.myChildAccessRequest=i.exists()?{id:i.id,...i.data()}:null,this._emit()},i=>console.warn("[Portal] childAccessRequest (mine) error:",i.code,i.message)),this._unsubChildren=E(I(u,"families",e,"children"),i=>{this.state.children=i.docs.map(a=>{var s,o;const r=a.data();return{id:a.id,...r,dateOfBirth:((o=(s=r.dateOfBirth)==null?void 0:s.toDate)==null?void 0:o.call(s))??(r.dateOfBirth?new Date(r.dateOfBirth):null)}}),this._emit()}),this._unsubTrips=E(G(I(u,"families",e,"trips"),Y("visibleTo","array-contains",this._uid)),i=>{this.state.trips=i.docs.map(a=>{var s,o,d,l;const r=a.data();return{id:a.id,...r,start:r.start??"",end:r.end??"",createdAt:((o=(s=r.createdAt)==null?void 0:s.toDate)==null?void 0:o.call(s))??null,updatedAt:((l=(d=r.updatedAt)==null?void 0:d.toDate)==null?void 0:l.call(d))??null}}).sort((a,r)=>String(a.start).localeCompare(String(r.start))),this._backfillVisibleTo("trips",i.docs),this._emit()},i=>{console.warn("[Cairn] trips subscription error:",i.code,i.message)}),this._unsubEvents=E(G(I(u,"families",e,"familyEvents"),Y("visibleTo","array-contains",this._uid)),i=>{this.state.events=i.docs.map(a=>{var s,o,d,l;const r=a.data();return{id:a.id,...r,date:r.date??"",createdAt:((o=(s=r.createdAt)==null?void 0:s.toDate)==null?void 0:o.call(s))??null,updatedAt:((l=(d=r.updatedAt)==null?void 0:d.toDate)==null?void 0:l.call(d))??null}}),this._backfillVisibleTo("familyEvents",i.docs),this._emit()},i=>{console.warn("[Cairn] familyEvents subscription error:",i.code,i.message)}),this._unsubActivities=E(G(I(u,"families",e,"activities"),Y("visibleTo","array-contains",this._uid)),i=>{this.state.activities=i.docs.map(a=>{var s,o,d,l;const r=a.data();return{id:a.id,...r,day:r.day??"",createdAt:((o=(s=r.createdAt)==null?void 0:s.toDate)==null?void 0:o.call(s))??null,updatedAt:((l=(d=r.updatedAt)==null?void 0:d.toDate)==null?void 0:l.call(d))??null}}).sort((a,r)=>{var d,l,p,h;const s=String(a.day??"").localeCompare(String(r.day??""));if(s!==0)return s;const o=String(a.time??"").localeCompare(String(r.time??""));return o!==0?o:(((l=(d=a.createdAt)==null?void 0:d.getTime)==null?void 0:l.call(d))??0)-(((h=(p=r.createdAt)==null?void 0:p.getTime)==null?void 0:h.call(p))??0)}),this._emit()},i=>{console.warn("[Cairn] activities subscription error:",i.code,i.message)})}_reconcileChildViewer(){var r;if((r=this.state.user)!=null&&r.familyId)return;const e=this.state.family,t=this._uid,a=!!(e&&Array.isArray(e.childViewers)&&e.childViewers.includes(t)&&!(Array.isArray(e.memberIds)&&e.memberIds.includes(t)))?e.id:null;a!==this._ppFamilyId&&(this._ppFamilyId=a,this._ppReadOnly=!!a,this._teardownPpFamily(),a&&this._subscribePpFamily(a),this._emit())}_subscribePpFamily(e){if(this._unsubPpFamily=E(C(u,"families",e),t=>{var r;const i=t.exists()?{id:t.id,...t.data()}:null;this.state.ppFamily=i;const a=!!(i&&Array.isArray(i.memberIds)&&i.memberIds.includes(this._uid));this.state.ppIsMember=a,this.state.ppIsChildViewer=!!(!a&&i&&Array.isArray(i.childViewers)&&i.childViewers.includes(this._uid)),a&&this._subscribeIncomingRequests(e),(r=this.state.user)!=null&&r.familyId||this._reconcileChildViewer(),this._emit()},t=>{console.warn("[Portal] ppFamily subscription error:",t.code,t.message)}),this._unsubPpChildren=E(I(u,"families",e,"children"),t=>{var s;const i=t.docs.map(o=>{var l,p;const d=o.data();return{id:o.id,...d,dateOfBirth:((p=(l=d.dateOfBirth)==null?void 0:l.toDate)==null?void 0:p.call(l))??(d.dateOfBirth?new Date(d.dateOfBirth):null)}}).sort((o,d)=>{var l,p,h,c;return(((p=(l=o.createdAt)==null?void 0:l.toMillis)==null?void 0:p.call(l))??0)-(((c=(h=d.createdAt)==null?void 0:h.toMillis)==null?void 0:c.call(h))??0)});this.state.ppChildren=i,this._resolveChildPhotos(e,i);const r=this._selectedChildId&&i.some(o=>o.id===this._selectedChildId)?this._selectedChildId:((s=i[0])==null?void 0:s.id)??null;r!==this._selectedChildId?this._subscribeChild(r):r||this._teardownChild(),this._emit()},t=>{console.warn("[Portal] ppChildren subscription error:",t.code,t.message)}),!this._ppReadOnly){const t=this._readBriefCache("family",e);t&&(this.state.familyDailyCard=t),this._unsubFamilyDaily=E(I(u,"families",e,"familyDailyCards"),i=>{var d,l;const a=i.docs.map(p=>({id:p.id,...p.data()}));a.sort((p,h)=>String(h.id).localeCompare(String(p.id)));const r=a[0]??null,s=((l=(d=r==null?void 0:r.generatedAt)==null?void 0:d.toMillis)==null?void 0:l.call(d))??0,o=s>0&&Q(new Date(s))===Q(new Date);this.state.familyDailyCard=o?r:null,o&&this._writeBriefCache("family",e,r),this._emit()},i=>console.warn("[Portal] familyDailyCards error:",i.code,i.message)),this._subscribePebbleMemory(e)}}_subscribePebbleMemory(e){const t=a=>a.scope!=="member"||a.memberUid===this._uid,i=a=>{var r;return((r=a==null?void 0:a.toMillis)==null?void 0:r.call(a))??0};this._unsubAnchors=E(I(u,"families",e,"anchors"),a=>{this.state.pebbleAnchors=a.docs.map(r=>({id:r.id,...r.data()})).filter(t).sort((r,s)=>i(s.updatedAt)-i(r.updatedAt)),this._emit()},a=>console.warn("[Portal] anchors error:",a.code,a.message)),this._unsubRhythms=E(I(u,"families",e,"rhythms"),a=>{this.state.pebbleRhythms=a.docs.map(r=>({id:r.id,...r.data()})).filter(t).sort((r,s)=>i(s.updatedAt)-i(r.updatedAt)),this._emit()},a=>console.warn("[Portal] rhythms error:",a.code,a.message)),this._unsubPatterns=E(I(u,"families",e,"patterns"),a=>{this.state.pebblePatterns=a.docs.map(r=>({id:r.id,...r.data()})).filter(t).filter(r=>!r.dismissedAt).sort((r,s)=>i(s.derivedAt)-i(r.derivedAt)),this._emit()},a=>console.warn("[Portal] patterns error:",a.code,a.message)),this._unsubLiveContext=E(I(u,"families",e,"liveContext"),a=>{const r=Date.now()-12096e5;this.state.pebbleLiveContext=a.docs.map(s=>({id:s.id,...s.data()})).filter(t).filter(s=>!s.dismissedAt&&i(s.validFrom)>=r).sort((s,o)=>i(o.validFrom)-i(s.validFrom)),this._emit()},a=>console.warn("[Portal] liveContext error:",a.code,a.message))}_briefCacheKey(e,t){return`pp_brief_${e}_${t}`}_writeBriefCache(e,t,i){if(!(!t||!i))try{localStorage.setItem(this._briefCacheKey(e,t),JSON.stringify({dateKey:Q(new Date),card:i}))}catch{}}_readBriefCache(e,t){if(!t)return null;try{const i=localStorage.getItem(this._briefCacheKey(e,t));if(!i)return null;const a=JSON.parse(i);if((a==null?void 0:a.dateKey)===Q(new Date)&&a.card)return a.card}catch{}return null}clearBriefCaches(){try{const e=[];for(let t=0;t<localStorage.length;t++){const i=localStorage.key(t);i&&i.startsWith("pp_brief_")&&e.push(i)}e.forEach(t=>localStorage.removeItem(t))}catch{}}_subscribeIncomingRequests(e){var t;(t=this._unsubIncomingReq)==null||t.call(this),this._unsubIncomingReq=E(I(u,"families",e,"childAccessRequests"),i=>{this.state.incomingChildRequests=i.docs.map(a=>({id:a.id,...a.data()})).filter(a=>a.status==="pending").sort((a,r)=>{var s,o,d,l;return(((o=(s=a.requestedAt)==null?void 0:s.toMillis)==null?void 0:o.call(s))??0)-(((l=(d=r.requestedAt)==null?void 0:d.toMillis)==null?void 0:l.call(d))??0)}),this._emit()},i=>console.warn("[Portal] childAccessRequests error:",i.code,i.message))}_subscribeChild(e){if(this._teardownChild(),this._selectedChildId=e,this.state.selectedChildId=e,!e||!this._ppFamilyId){this.state.childMilestones=[],this.state.childInsights=[],this.state.childDailyCard=null,this.state.childPebbleMessages=[],this.state.childPebbleSessions=[];return}const t=["families",this._ppFamilyId,"children",e];this._unsubChildMs=E(I(u,...t,"milestones"),i=>{this.state.childMilestones=i.docs.map(a=>({id:a.id,...a.data()})).sort((a,r)=>(a.ageRangeStartMonths??0)-(r.ageRangeStartMonths??0)),this._emit()},i=>console.warn("[Portal] milestones error:",i.code,i.message)),this._unsubChildIns=E(I(u,...t,"insights"),i=>{this.state.childInsights=i.docs.map(a=>({id:a.id,...a.data()})).sort((a,r)=>(r.relevanceScore??0)-(a.relevanceScore??0)),this._emit()},i=>console.warn("[Portal] insights error:",i.code,i.message)),this._ppReadOnly?this.state.childDailyCard=null:(this.state.childDailyCard=this._readBriefCache("child",e)||null,this._emit(),this._unsubChildDaily=E(I(u,...t,"dailyCards"),i=>{var d,l;const a=i.docs.map(p=>({id:p.id,...p.data()}));a.sort((p,h)=>String(h.id).localeCompare(String(p.id)));const r=a[0]??null,s=((l=(d=r==null?void 0:r.generatedAt)==null?void 0:d.toMillis)==null?void 0:l.call(d))??0,o=s>0&&Q(new Date(s))===Q(new Date);this.state.childDailyCard=o?r:null,o&&this._writeBriefCache("child",e,r),this._emit()},i=>console.warn("[Portal] dailyCards error:",i.code,i.message))),this._unsubChildPebble=E(I(u,...t,"pebbleMessages"),i=>{this.state.childPebbleMessages=i.docs.map(a=>({id:a.id,...a.data()})).filter(a=>!(a.isPrivate===!0&&a.senderUid!==this._uid)).sort((a,r)=>{var s,o,d,l;return(((o=(s=a.timestamp)==null?void 0:s.toMillis)==null?void 0:o.call(s))??0)-(((l=(d=r.timestamp)==null?void 0:d.toMillis)==null?void 0:l.call(d))??0)}),this._emit()},i=>console.warn("[Portal] pebbleMessages error:",i.code,i.message)),this._unsubChildSessions=E(I(u,...t,"pebbleSessions"),i=>{this.state.childPebbleSessions=i.docs.map(a=>({id:a.id,...a.data()})).filter(a=>a.archived!==!0).filter(a=>!(a.isPrivate===!0&&a.createdBy!==this._uid)).sort((a,r)=>{var s,o,d,l,p,h,c,b;return(((o=(s=r.lastMessageAt)==null?void 0:s.toMillis)==null?void 0:o.call(s))??((l=(d=r.createdAt)==null?void 0:d.toMillis)==null?void 0:l.call(d))??0)-(((h=(p=a.lastMessageAt)==null?void 0:p.toMillis)==null?void 0:h.call(p))??((b=(c=a.createdAt)==null?void 0:c.toMillis)==null?void 0:b.call(c))??0)}),this._emit()},i=>console.warn("[Portal] pebbleSessions error:",i.code,i.message))}_resolveChildPhotos(e,t){if(O){this._photoTried||(this._photoTried=new Set);for(const i of t){const a=i.profilePhotoURL;if(typeof a=="string"&&/^https?:\/\//i.test(a))continue;const r=e+"/"+i.id;this._photoTried.has(r)||(this._photoTried.add(r),ee(K(O,"families/"+e+"/avatars/children/"+i.id)).then(s=>{const o=this.state.ppChildren||[],d=o.findIndex(l=>l.id===i.id);d>=0&&(o[d]={...o[d],profilePhotoURL:s},this.state.ppChildren=[...o],this._emit())}).catch(()=>{this._photoTried.delete(r)}))}}}selectChild(e){!e||e===this._selectedChildId||this.state.ppChildren.some(t=>t.id===e)&&(this._subscribeChild(e),this._emit())}async askPebbleAboutChild(e,t,i=[],a=!1,r=""){if(!R)throw new Error("Firebase functions not configured.");if(!this._ppFamilyId)throw new Error("No PebblePath family.");if(!e)throw new Error("No child selected.");return(await H(R,"askPebbleAboutChild")({familyId:this._ppFamilyId,childId:e,question:t,history:i,isPrivate:a===!0,sessionId:r||""})).data}async streamPebbleChat(e,t,i=[],a=!1,r="",{onStatus:s,onDelta:o}={}){if(!R)throw new Error("Firebase functions not configured.");if(!this._ppFamilyId)throw new Error("No PebblePath family.");if(!e)throw new Error("No child selected.");const d=H(R,"streamPebbleChatPortal"),{stream:l,data:p}=await d.stream({familyId:this._ppFamilyId,childId:e,question:t,history:i,isPrivate:a===!0,sessionId:r||""});for await(const h of l)h&&(h.kind==="status"&&typeof s=="function"?s(h.status):h.kind==="delta"&&typeof h.text=="string"&&typeof o=="function"&&o(h.text));return await p}async refreshFamilyBrief(){if(!R)throw new Error("Firebase functions not configured.");if(!this._ppFamilyId)throw new Error("No PebblePath family.");return(await H(R,"refreshFamilyBrief")({familyId:this._ppFamilyId})).data}_childPebbleBase(e){return["families",this._ppFamilyId,"children",e,"pebbleSessions"]}async createPebbleSession(e,{title:t,isPrivate:i}={}){if(!u||!this._ppFamilyId||!e)throw new Error("No child selected.");return(await L(I(u,...this._childPebbleBase(e)),{title:(t||"New chat").trim()||"New chat",isPrivate:i===!0,archived:!1,createdBy:this._uid??"",createdAt:$(),lastMessageAt:$()})).id}async renamePebbleSession(e,t,i){!u||!this._ppFamilyId||!e||!t||await M(C(u,...this._childPebbleBase(e),t),{title:(i||"").trim()||"Untitled chat"})}async setPebbleSessionPrivacy(e,t,i){!u||!this._ppFamilyId||!e||!t||await M(C(u,...this._childPebbleBase(e),t),{isPrivate:i===!0})}async archivePebbleSession(e,t){!u||!this._ppFamilyId||!e||!t||await M(C(u,...this._childPebbleBase(e),t),{archived:!0})}async touchPebbleSession(e,t){if(!(!u||!this._ppFamilyId||!e||!t))try{await M(C(u,...this._childPebbleBase(e),t),{lastMessageAt:$()})}catch{}}_teardownChild(){var e,t,i,a,r;(e=this._unsubChildMs)==null||e.call(this),(t=this._unsubChildIns)==null||t.call(this),(i=this._unsubChildDaily)==null||i.call(this),(a=this._unsubChildPebble)==null||a.call(this),(r=this._unsubChildSessions)==null||r.call(this),this._unsubChildMs=this._unsubChildIns=this._unsubChildDaily=this._unsubChildPebble=this._unsubChildSessions=null}_teardownPpFamily(){var e,t,i,a,r,s,o,d;this._teardownChild(),(e=this._unsubPpFamily)==null||e.call(this),(t=this._unsubPpChildren)==null||t.call(this),(i=this._unsubFamilyDaily)==null||i.call(this),(a=this._unsubAnchors)==null||a.call(this),(r=this._unsubRhythms)==null||r.call(this),(s=this._unsubPatterns)==null||s.call(this),(o=this._unsubLiveContext)==null||o.call(this),(d=this._unsubIncomingReq)==null||d.call(this),this._unsubPpFamily=null,this._unsubPpChildren=null,this._unsubFamilyDaily=null,this._unsubAnchors=null,this._unsubRhythms=null,this._unsubPatterns=null,this._unsubLiveContext=null,this._unsubIncomingReq=null,this._selectedChildId=null,this.state.ppFamily=null,this.state.ppIsMember=!1,this.state.ppIsChildViewer=!1,this.state.incomingChildRequests=[],this.state.ppChildren=[],this.state.selectedChildId=null,this.state.childMilestones=[],this.state.childInsights=[],this.state.childDailyCard=null,this.state.familyDailyCard=null,this.state.pebbleAnchors=[],this.state.pebbleRhythms=[],this.state.pebblePatterns=[],this.state.pebbleLiveContext=[],this.state.childPebbleMessages=[],this.state.childPebbleSessions=[]}async requestChildAccess(){var t;const e=this._currentFamilyId;if(!e)throw new Error("No family to request access from.");await V(C(u,"families",e,"childAccessRequests",this._uid),{uid:this._uid,displayName:((t=this.state.user)==null?void 0:t.displayName)??"Family member",requestedAt:$(),status:"pending"})}async withdrawChildAccessRequest(){const e=this._currentFamilyId;e&&await W(C(u,"families",e,"childAccessRequests",this._uid))}async setMemberLabel(e,t){!this._uid||!e||await M(C(u,"users",this._uid),{[`memberLabels.${e}`]:(t??"").trim()})}async approveChildAccess(e){var a;const t=this._ppFamilyId;if(!t||!this.state.ppIsMember)throw new Error("Only a parent can approve access.");const i=Array.isArray((a=this.state.ppFamily)==null?void 0:a.childViewers)?this.state.ppFamily.childViewers:[];i.includes(e)||await M(C(u,"families",t),{childViewers:[...i,e],updatedAt:$()}),await M(C(u,"families",t,"childAccessRequests",e),{status:"approved",actionedBy:this._uid,actionedAt:$()})}async declineChildAccess(e){const t=this._ppFamilyId;if(!t||!this.state.ppIsMember)throw new Error("Only a parent can decline access.");await M(C(u,"families",t,"childAccessRequests",e),{status:"declined",actionedBy:this._uid,actionedAt:$()})}async grantChildViewerDirectly(e){var a;const t=this._ppFamilyId;if(!t||!this.state.ppIsMember)throw new Error("Only a parent can grant access.");const i=Array.isArray((a=this.state.ppFamily)==null?void 0:a.childViewers)?this.state.ppFamily.childViewers:[];i.includes(e)||await M(C(u,"families",t),{childViewers:[...i,e],updatedAt:$()})}async grantParentAccessForOwnChildren(e){const t=this._ppFamilyId;if(!t||!this.state.ppIsMember)throw new Error("Only a parent can grant access.");const i=this._uid;if(!i)throw new Error("Not signed in.");const r=(Array.isArray(this.state.ppChildren)?this.state.ppChildren:[]).filter(o=>(o==null?void 0:o.id)&&Array.isArray(o.parentIds)&&o.parentIds.includes(i));if(r.length===0)return[];const s=[];for(const o of r){const d=Array.isArray(o.parentIds)?o.parentIds:[];if(d.includes(e)){s.push(o.name??"your child");continue}await M(C(u,"families",t,"children",o.id),{parentIds:[...d,e],updatedAt:$()}),s.push(o.name??"your child")}return s}async revokeChildViewer(e){var r;const t=this._ppFamilyId;if(!t||!this.state.ppIsMember)throw new Error("Only a parent can revoke access.");const i=Array.isArray((r=this.state.ppFamily)==null?void 0:r.childViewers)?this.state.ppFamily.childViewers:[],a=i.filter(s=>s!==e);a.length!==i.length&&await M(C(u,"families",t),{childViewers:a,updatedAt:$()});try{await M(C(u,"families",t,"childAccessRequests",e),{status:"declined",actionedBy:this._uid,actionedAt:$()})}catch{}}_backfillVisibleTo(e,t){if(!u||!this._currentFamilyId)return;const i=this.state.family;if(i){this._vtBackfilled||(this._vtBackfilled=new Set);for(const a of t){const r=a.data();if(Array.isArray(r.visibleTo))continue;const s=`${e}/${a.id}`;this._vtBackfilled.has(s)||(this._vtBackfilled.add(s),M(C(u,"families",this._currentFamilyId,e,a.id),{visibleTo:fe(r.visibility??"family",i,r.createdBy,Array.isArray(r.attendees)?r.attendees:[])}).catch(o=>{this._vtBackfilled.delete(s),console.warn(`[Cairn] visibleTo backfill failed (${s}):`,o==null?void 0:o.code,o==null?void 0:o.message)}))}}}async _visibleToFor(e,t,i){const a=(e==null?void 0:e.visibility)??"family",r=Array.isArray(e==null?void 0:e.attendees)?e.attendees:[],s=a==="extended"?await ai(t):[];return fe(a,t,i,r,s)}async saveTrip(e){var l;if(!u||!this._currentFamilyId)throw new Error("No family yet.");const t=(l=w==null?void 0:w.currentUser)==null?void 0:l.uid;if(!t)throw new Error("Not signed in.");const{id:i,createdAt:a,updatedAt:r,...s}=e,o={...s,updatedAt:$()};return o.visibleTo=await this._visibleToFor(s,this.state.family,s.createdBy??t),i?(await M(C(u,"families",this._currentFamilyId,"trips",i),o),i):(o.createdBy=t,o.createdAt=$(),(await L(I(u,"families",this._currentFamilyId,"trips"),o)).id)}async deleteTrip(e){if(!u||!this._currentFamilyId)throw new Error("No family yet.");await W(C(u,"families",this._currentFamilyId,"trips",e))}packingTemplatesListener(e){return!u||!this._currentFamilyId?()=>{}:E(I(u,"families",this._currentFamilyId,"packingTemplates"),t=>{const i=t.docs.map(a=>({id:a.id,...a.data()})).sort((a,r)=>{var s,o,d,l;return(((o=(s=r.updatedAt)==null?void 0:s.toMillis)==null?void 0:o.call(s))??0)-(((l=(d=a.updatedAt)==null?void 0:d.toMillis)==null?void 0:l.call(d))??0)});e(i)},t=>{console.warn("[Portal] packingTemplates error:",t.code,t.message),e([])})}packingListListener(e,t){return!u||!this._currentFamilyId||!e?()=>{}:E(I(u,"families",this._currentFamilyId,"trips",e,"packingList"),i=>{const a=i.docs.map(r=>({id:r.id,...r.data()})).sort((r,s)=>{const o=String(r.groupName??"").localeCompare(String(s.groupName??""));return o!==0?o:(r.order??0)-(s.order??0)});t(a)},i=>{console.warn("[Portal] packingList error:",i.code,i.message),t([])})}_packingListCol(e){return I(u,"families",this._currentFamilyId,"trips",e,"packingList")}async addPackingItem(e,{groupName:t,text:i,order:a=0,addedByPebble:r=!1}){var l;if(!u||!this._currentFamilyId)throw new Error("No family yet.");const s=(l=w==null?void 0:w.currentUser)==null?void 0:l.uid;if(!s)throw new Error("Not signed in.");const o=String(i??"").trim();if(!o)throw new Error("Add an item.");return(await L(this._packingListCol(e),{groupName:t,text:o,checked:!1,order:a,addedBy:s,addedByPebble:r===!0,addedAt:$()})).id}async togglePackingItem(e,t){!u||!this._currentFamilyId||!(t!=null&&t.id)||await M(C(this._packingListCol(e),t.id),{checked:t.checked!==!0})}async updatePackingItemText(e,t,i){if(!u||!this._currentFamilyId||!t)return;const a=String(i??"").trim();a&&await M(C(this._packingListCol(e),t),{text:a})}async deletePackingItem(e,t){!u||!this._currentFamilyId||!t||await W(C(this._packingListCol(e),t))}async applyPackingTemplate(e,t){var r;if(!u||!this._currentFamilyId||!(t!=null&&t.id))return;const i=(r=w==null?void 0:w.currentUser)==null?void 0:r.uid;if(!i)throw new Error("Not signed in.");const a=[];for(const s of Array.isArray(t.groups)?t.groups:[]){const o=Array.isArray(s.items)?s.items:[];for(const d of o.slice().sort((l,p)=>(l.order??0)-(p.order??0)))a.push(L(this._packingListCol(e),{templateId:t.id,groupName:s.name,text:String(d.text??"").trim(),checked:!1,order:d.order??0,addedBy:i,addedByPebble:d.addedByPebble===!0,addedAt:$()}))}a.length!==0&&(await Promise.all(a),await M(C(u,"families",this._currentFamilyId,"trips",e),{"packingListMeta.derivedFromTemplateId":t.id}))}async savePackingListAsTemplate(e,t,i){var l;if(!u||!this._currentFamilyId)throw new Error("No family yet.");const a=(l=w==null?void 0:w.currentUser)==null?void 0:l.uid;if(!a)throw new Error("Not signed in.");const r=new Map;for(const p of Array.isArray(i)?i:[]){const h=p.groupName??"Parents";r.has(h)||r.set(h,[]),r.get(h).push(p)}const s=[...r.entries()].map(([p,h])=>({id:crypto.randomUUID(),name:p,items:h.slice().sort((c,b)=>(c.order??0)-(b.order??0)).map((c,b)=>({id:crypto.randomUUID(),text:String(c.text??"").trim(),order:b,addedByPebble:c.addedByPebble===!0}))})),o=$();return(await L(I(u,"families",this._currentFamilyId,"packingTemplates"),{name:String(e??"My list").trim()||"My list",...t?{iconKey:t}:{},groups:s,createdBy:a,createdAt:o,updatedAt:o})).id}async deletePackingTemplate(e){!u||!this._currentFamilyId||!e||await W(C(u,"families",this._currentFamilyId,"packingTemplates",e))}async markPackingReviewed(e){!u||!this._currentFamilyId||!e||await M(C(u,"families",this._currentFamilyId,"trips",e),{"packingListMeta.lastReviewedAt":$()})}async generatePackingReview(e,t,i,a,r,s){if(!R)throw new Error("Firebase functions not configured.");if(!this._currentFamilyId)throw new Error("No family yet.");return(await H(R,"generatePackingReview")({familyId:this._currentFamilyId,tripId:e,trip:t,family:i,currentList:a,dismissedTexts:r,groupNames:s})).data}async generateFamilyPlan(e,t){var s;if(!R)throw new Error("Firebase functions not configured.");if(!this._currentFamilyId)throw new Error("No family yet.");const a=await H(R,"generateFamilyPlan")({familyId:this._currentFamilyId,family:e,window:t}),r=(s=a==null?void 0:a.data)==null?void 0:s.candidates;return Array.isArray(r)?r:[]}async saveEvent(e){var l;if(!u||!this._currentFamilyId)throw new Error("No family yet.");const t=(l=w==null?void 0:w.currentUser)==null?void 0:l.uid;if(!t)throw new Error("Not signed in.");const{id:i,createdAt:a,updatedAt:r,...s}=e,o={...s,updatedAt:$()};return o.visibleTo=await this._visibleToFor(s,this.state.family,s.createdBy??t),i?(await M(C(u,"families",this._currentFamilyId,"familyEvents",i),o),i):(o.createdBy=t,o.createdAt=$(),(await L(I(u,"families",this._currentFamilyId,"familyEvents"),o)).id)}async deleteEvent(e){if(!u||!this._currentFamilyId)throw new Error("No family yet.");await W(C(u,"families",this._currentFamilyId,"familyEvents",e))}activitiesListener(e){if(!u||!this._currentFamilyId||!this._uid)return()=>{};const t=G(I(u,"families",this._currentFamilyId,"activities"),Y("visibleTo","array-contains",this._uid));return E(t,i=>{const a=i.docs.map(r=>({id:r.id,...r.data()})).sort((r,s)=>{var l,p,h,c;const o=String(r.day??"").localeCompare(String(s.day??""));if(o!==0)return o;const d=String(r.time??"").localeCompare(String(s.time??""));return d!==0?d:(((p=(l=r.createdAt)==null?void 0:l.toMillis)==null?void 0:p.call(l))??0)-(((c=(h=s.createdAt)==null?void 0:h.toMillis)==null?void 0:c.call(h))??0)});e(a)},i=>{console.warn("[Portal] activities subscription error:",i.code,i.message),e([])})}async saveActivity(e){var p;if(!u||!this._currentFamilyId)throw new Error("No family yet.");const t=(p=w==null?void 0:w.currentUser)==null?void 0:p.uid;if(!t)throw new Error("Not signed in.");const{id:i,createdAt:a,updatedAt:r,...s}=e,o={...s,updatedAt:$()},d=s.addedBy??t;if(s.tripId){const h=(this.state.trips??[]).find(c=>c.id===s.tripId);o.visibleTo=Array.isArray(h==null?void 0:h.visibleTo)&&h.visibleTo.length?h.visibleTo:await this._visibleToFor(s,this.state.family,d)}else{const h=Array.isArray(s.personIds)?s.personIds:[];o.visibleTo=await this._visibleToFor({...s,attendees:h},this.state.family,d)}return i?(await M(C(u,"families",this._currentFamilyId,"activities",i),o),i):(o.addedBy=t,o.createdAt=$(),(await L(I(u,"families",this._currentFamilyId,"activities"),o)).id)}async deleteActivity(e){if(!u||!this._currentFamilyId)throw new Error("No family yet.");await W(C(u,"families",this._currentFamilyId,"activities",e))}async updateActivity(e,t){if(!u||!this._currentFamilyId)throw new Error("No family yet.");await M(C(u,"families",this._currentFamilyId,"activities",e),t)}async uploadActivityAttachment(e,t){if(!O||!this._currentFamilyId)throw new Error("Storage unavailable.");const i=`families/${this._currentFamilyId}/planAttachments/activity__${e}`,a=K(O,i);return await te(a,t,{contentType:t.type||"application/octet-stream"}),ee(a)}async uploadSchoolCalendar(e){if(!O||!this._currentFamilyId)throw new Error("Storage unavailable.");const t=e.type||"",i=/pdf/.test(t)?"pdf":/^image\//.test(t)?"image":/word|officedocument|msword/.test(t)?"docx":"pdf",a=`families/${this._currentFamilyId}/schoolCalendarUploads/${Date.now()}`;return await te(K(O,a),e,{contentType:t||"application/octet-stream"}),{storagePath:a,fileType:i}}async uploadTripPreview(e){var r;if(!O||!this._currentFamilyId)throw new Error("Storage unavailable.");if(!/^image\//.test(e.type||""))throw new Error("Preview image must be an image file.");const t=((r=crypto==null?void 0:crypto.randomUUID)==null?void 0:r.call(crypto))||`${Date.now()}-${Math.random().toString(36).slice(2)}`,i=`families/${this._currentFamilyId}/trip-previews/${t}`,a=K(O,i);return await te(a,e,{contentType:e.type}),await ee(a)}async extractSchoolCalendarEvents(e,t){var s;if(!R||!this._currentFamilyId)throw new Error("No family yet.");const a=await H(R,"extractSchoolCalendar")({familyId:this._currentFamilyId,storagePath:e,fileType:t}),r=(s=a==null?void 0:a.data)==null?void 0:s.events;return Array.isArray(r)?r:[]}async importSchoolEvents(e,t={}){var k;if(!u||!this._currentFamilyId)throw new Error("No family yet.");const i=(k=w==null?void 0:w.currentUser)==null?void 0:k.uid;if(!i)throw new Error("Not signed in.");const a=this.state.family??{},r=Array.isArray(a.memberIds)?a.memberIds:[],s=Array.isArray(a.cairnMemberIds)?a.cairnMemberIds:[],o=[...new Set([...r,...s,i])],d=fe("family",a,i),l=t.category==="celebration",p=String(t.tag??"").trim().slice(0,60),h=I(u,"families",this._currentFamilyId,"familyEvents"),c=I(u,"families",this._currentFamilyId,"activities"),b=(e??[]).filter(m=>m&&/^\d{4}-\d{2}-\d{2}$/.test(String(m.date??""))&&String(m.title??"").trim()).slice(0,250);let v=0;return await Promise.all(b.map(async m=>{const x=String(m.description??"").trim().slice(0,1e3);l?await L(h,{title:String(m.title).trim().slice(0,120),date:m.date,type:"custom",recurring:!1,category:"celebration",...p?{calTag:p}:{},...x?{notes:x}:{},source:"school-import",personIds:o,visibility:"family",visibleTo:d,createdBy:i,createdAt:$(),updatedAt:$()}):await L(c,{title:String(m.title).trim().slice(0,120),type:"note",day:m.date,...x?{notes:x}:{},...p?{calTag:p}:{},source:"school-import",visibility:"family",visibleTo:d,addedBy:i,createdAt:$(),updatedAt:$()}),v+=1})),v}async renameCalTag(e,t){if(!u||!this._currentFamilyId)throw new Error("No family yet.");const i=String(e??"").trim(),a=String(t??"").trim().slice(0,60);if(!i||!a||i===a)return 0;const r=(this.state.events??[]).filter(s=>String((s==null?void 0:s.calTag)??"").trim()===i).map(s=>s.id).filter(Boolean);return await Promise.all(r.map(s=>M(C(u,"families",this._currentFamilyId,"familyEvents",s),{calTag:a,updatedAt:$()}))),r.length}async deleteCalTag(e){if(!u||!this._currentFamilyId)throw new Error("No family yet.");const t=String(e??"").trim();if(!t)return 0;const i=(this.state.events??[]).filter(a=>String((a==null?void 0:a.calTag)??"").trim()===t).map(a=>a.id).filter(Boolean);return await Promise.all(i.map(a=>M(C(u,"families",this._currentFamilyId,"familyEvents",a),{calTag:null,updatedAt:$()}))),i.length}async previewUrl(e){if(!e||typeof e!="string"||!/^https?:\/\//i.test(e.trim()))return null;if(!R)throw new Error("Firebase functions not configured.");return(await H(R,"previewUrl")({url:e.trim()})).data}async askPebble(e,t=[]){if(!R)throw new Error("Firebase functions not configured.");if(!this._currentFamilyId)throw new Error("No family yet.");return(await H(R,"askPebbleAboutActivities")({question:e,familyId:this._currentFamilyId,history:t})).data}async updateChildBirthday(e,t){if(!u||!this._currentFamilyId)throw new Error("No family yet.");await M(C(u,"families",this._currentFamilyId,"children",e),{dateOfBirth:t,updatedAt:$()})}async findFamilyByCairnCode(e){if(!u)throw new Error("Firebase not configured.");const t=G(I(u,"families"),Y("cairnInviteCode","==",e)),i=await Z(t);if(i.empty)return null;const a=i.docs[0];return{id:a.id,...a.data()}}async findFamilyByConnectCode(e){if(!u)throw new Error("Firebase not configured.");const t=await Z(G(I(u,"families"),Y("cairnInviteCode","==",e)));if(!t.empty){const a=t.docs[0];return{id:a.id,...a.data(),_matchedCodeKind:"cairn"}}const i=await Z(G(I(u,"families"),Y("inviteCode","==",e)));if(!i.empty){const a=i.docs[0];return{id:a.id,...a.data(),_matchedCodeKind:"pp"}}return null}async _applyCairnJoin(e){var l;const t=(l=w==null?void 0:w.currentUser)==null?void 0:l.uid;if(!t)throw new Error("Not signed in.");const i=e.cairnMemberIds??[],a=e.memberIds??[],r=w.currentUser;if(i.includes(t)||a.includes(t))return await V(C(u,"users",t),{email:r.email??"",displayName:r.displayName??"",profilePhotoURL:r.photoURL??null,cairnFamilyId:e.id,updatedAt:$()},{merge:!0}),await this._recordMutualConnection(e.id,t),e.id;const s=e.cairnMaxMembers??20;if(i.length>=s){const p=new Error("This family's connection ring is full.");throw p.code="full",p}const o=new Date,d={displayName:r.displayName??"",profilePhotoURL:r.photoURL??null,role:"member",joinedAt:o,updatedAt:o};return await M(C(u,"families",e.id),{cairnMemberIds:[...i,t],[`memberProfiles.${t}`]:d,updatedAt:$()}),await V(C(u,"users",t),{email:r.email??"",displayName:r.displayName??"",profilePhotoURL:r.photoURL??null,cairnFamilyId:e.id,role:"member",notificationPreferences:{milestoneReminders:!0,tipNotifications:!0,schoolDeadlines:!0},createdAt:$(),updatedAt:$()},{merge:!0}),await this._recordMutualConnection(e.id,t),e.id}async redeemConnectCode(e){var s,o;if(!u)throw new Error("Firebase not configured.");if(!((s=w==null?void 0:w.currentUser)==null?void 0:s.uid))throw new Error("Not signed in.");const i=await this.findFamilyByConnectCode(e);if(!i){const d=new Error("Invite code not found.");throw d.code="not-found",d}const a=i._matchedCodeKind==="pp"?i.inviteCodeExpiresAt:i.cairnInviteCodeExpiresAt,r=((o=a==null?void 0:a.toDate)==null?void 0:o.call(a))??(a?new Date(a):null);if(!r||r<new Date){const d=new Error("This invite code has expired.");throw d.code="expired",d}return this._applyCairnJoin(i)}async _recordMutualConnection(e,t){var i;try{const{getDoc:a,arrayUnion:r}=await ie(async()=>{const{getDoc:d,arrayUnion:l}=await import("./firebase-core-CJo043ws.js").then(p=>p.K);return{getDoc:d,arrayUnion:l}},[]),s=await a(C(u,"users",t)),o=s.exists()?(i=s.data())==null?void 0:i.familyId:null;if(!o||o===e)return;await M(C(u,"families",e),{connectedFamilyIds:r(o),updatedAt:$()}),await M(C(u,"families",o),{connectedFamilyIds:r(e),updatedAt:$()})}catch(a){console.warn("[connect] mutual connection record skipped (non-fatal):",a)}}async saveSubGroup({id:e,name:t,memberIds:i}){if(!u||!this._currentFamilyId)throw new Error("No family yet.");const a=e??`g_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`;return await M(C(u,"families",this._currentFamilyId),{[`subGroups.${a}`]:{name:t.trim(),memberIds:Array.isArray(i)?[...i]:[],updatedAt:$()},updatedAt:$()}),a}async deleteSubGroup(e){if(!u||!this._currentFamilyId)throw new Error("No family yet.");const{deleteField:t}=await ie(async()=>{const{deleteField:i}=await import("./firebase-core-CJo043ws.js").then(a=>a.K);return{deleteField:i}},[]);await M(C(u,"families",this._currentFamilyId),{[`subGroups.${e}`]:t(),updatedAt:$()})}async setCairnMemberSubGroup(e,t){var r;if(!u||!this._currentFamilyId)throw new Error("No family yet.");if(!e)throw new Error("uid is required.");const i=((r=this.state.family)==null?void 0:r.subGroups)??{},a={};for(const[s,o]of Object.entries(i)){const d=Array.isArray(o.memberIds)?o.memberIds:[];s===t?d.includes(e)||(a[`subGroups.${s}.memberIds`]=[...d,e]):d.includes(e)&&(a[`subGroups.${s}.memberIds`]=d.filter(l=>l!==e))}Object.keys(a).length!==0&&(a.updatedAt=$(),await M(C(u,"families",this._currentFamilyId),a))}async removeCairnMember(e){if(!u||!this._currentFamilyId)throw new Error("No family yet.");if(!e)throw new Error("uid is required.");const t=this.state.family??{};if((Array.isArray(t.memberIds)?t.memberIds:[]).includes(e))throw new Error("parents can’t be removed from the ring here.");const{deleteField:a}=await ie(async()=>{const{deleteField:l}=await import("./firebase-core-CJo043ws.js").then(p=>p.K);return{deleteField:l}},[]),r={updatedAt:$()},s=Array.isArray(t.cairnMemberIds)?t.cairnMemberIds:[];s.includes(e)&&(r.cairnMemberIds=s.filter(l=>l!==e)),t.memberProfiles&&t.memberProfiles[e]&&(r[`memberProfiles.${e}`]=a());const o=Array.isArray(t.childViewers)?t.childViewers:[];o.includes(e)&&(r.childViewers=o.filter(l=>l!==e));const d=t.subGroups??{};for(const[l,p]of Object.entries(d)){const h=Array.isArray(p.memberIds)?p.memberIds:[];h.includes(e)&&(r[`subGroups.${l}.memberIds`]=h.filter(c=>c!==e))}await M(C(u,"families",this._currentFamilyId),r);try{await W(C(u,"families",this._currentFamilyId,"childAccessRequests",e))}catch{}}async createCairnOnlyFamily(e){if(!u)throw new Error("Firebase not configured.");const t=w==null?void 0:w.currentUser,i=t==null?void 0:t.uid;if(!i)throw new Error("Not signed in.");const a=(e??"").trim();if(!a)throw new Error("Family name is required.");const r=new Date,s=ve(),o=new Date(Date.now()+720*60*60*1e3),d={displayName:t.displayName??"",profilePhotoURL:t.photoURL??null,role:"admin",joinedAt:r,updatedAt:r},l={name:a,createdBy:i,createdInApp:"cairn",memberIds:[],cairnMemberIds:[i],connectedFamilyIds:[],cairnMaxMembers:20,cairnInviteCode:s,cairnInviteCodeExpiresAt:o,memberProfiles:{[i]:d},createdAt:$(),updatedAt:$()},p=await L(I(u,"families"),l);return await V(C(u,"users",i),{email:t.email??"",displayName:t.displayName??"",profilePhotoURL:t.photoURL??null,cairnFamilyId:p.id,role:"admin",notificationPreferences:{milestoneReminders:!1,tipNotifications:!1,schoolDeadlines:!1},createdAt:$(),updatedAt:$()},{merge:!0}),p.id}async createPebblePathFamily(e){if(!u)throw new Error("Firebase not configured.");const t=w==null?void 0:w.currentUser,i=t==null?void 0:t.uid;if(!i)throw new Error("Not signed in.");const a=(e??"").trim();if(!a)throw new Error("Family name is required.");const r=new Date,s=ve(),o=new Date(Date.now()+720*60*60*1e3),d={displayName:t.displayName??"",profilePhotoURL:t.photoURL??null,role:"admin",joinedAt:r,updatedAt:r},l={name:a,createdBy:i,memberIds:[i],cairnMemberIds:[i],connectedFamilyIds:[],cairnMaxMembers:20,inviteCode:s,inviteCodeExpiresAt:o,cairnInviteCode:s,cairnInviteCodeExpiresAt:o,memberProfiles:{[i]:d},createdAt:$(),updatedAt:$()},p=await L(I(u,"families"),l);return await V(C(u,"users",i),{email:t.email??"",displayName:t.displayName??"",profilePhotoURL:t.photoURL??null,familyId:p.id,role:"owner",notificationPreferences:{milestoneReminders:!1,tipNotifications:!1,schoolDeadlines:!1},createdAt:$(),updatedAt:$()},{merge:!0}),p.id}async createChild(e,t){var h,c;if(!u)throw new Error("Firebase not configured.");const i=(h=w==null?void 0:w.currentUser)==null?void 0:h.uid;if(!i)throw new Error("Not signed in.");if(!e)throw new Error("No family.");const a=((t==null?void 0:t.name)??"").trim();if(!a)throw new Error("Child's name is required.");if(!((t==null?void 0:t.dateOfBirth)instanceof Date))throw new Error("Child's date of birth is required.");const{getDoc:r}=await ie(async()=>{const{getDoc:b}=await import("./firebase-core-CJo043ws.js").then(v=>v.K);return{getDoc:b}},[]),s=await r(C(u,"families",e)),o=s.exists()?Array.isArray((c=s.data())==null?void 0:c.memberIds)?s.data().memberIds:[]:[],d=o.length?o:[i],l={name:a,dateOfBirth:t.dateOfBirth,profilePhotoURL:null,developmentalFlags:Array.isArray(t==null?void 0:t.developmentalFlags)?t.developmentalFlags:[],pediatricianNotes:null,region:(t==null?void 0:t.region)??null,parentIds:d,needsServerSeed:!0,createdAt:$(),updatedAt:$()};return(await L(I(u,"families",e,"children"),l)).id}async uploadChildAvatar(e,t,i){if(!u||!O)throw new Error("Firebase not configured.");if(!e||!t)throw new Error("Missing family/child id.");if(!i)throw new Error("No image.");const a=i.type&&i.type.startsWith("image/")?i.type:"image/jpeg",r=K(O,`families/${e}/avatars/children/${t}`);await te(r,i,{contentType:a});const s=await ee(r);return await M(C(u,"families",e,"children",t),{profilePhotoURL:s,updatedAt:$()}),s}async uploadUserAvatar(e,t){var o;if(!u||!O)throw new Error("Firebase not configured.");const i=(o=w==null?void 0:w.currentUser)==null?void 0:o.uid;if(!i)throw new Error("Not signed in.");if(!e)throw new Error("No family.");if(!t)throw new Error("No image.");const a=t.type&&t.type.startsWith("image/")?t.type:"image/jpeg",r=K(O,`families/${e}/avatars/users/${i}`);await te(r,t,{contentType:a});const s=await ee(r);await M(C(u,"users",i),{profilePhotoURL:s,updatedAt:$()});try{await M(C(u,"families",e),{[`memberProfiles.${i}.profilePhotoURL`]:s,[`memberProfiles.${i}.updatedAt`]:$(),updatedAt:$()})}catch(d){console.warn("memberProfiles photo fan-out failed:",d)}return s}async requestToBeCoParent(e){var r,s,o,d,l;if(!u)throw new Error("Firebase not configured.");const t=(r=w==null?void 0:w.currentUser)==null?void 0:r.uid;if(!t)throw new Error("Not signed in.");const i=this._currentFamilyId??((s=this.state.user)==null?void 0:s.cairnFamilyId)??((o=this.state.user)==null?void 0:o.familyId)??null;if(!i)throw new Error("No family.");if(!e)throw new Error("No child.");const a=((d=this.state.user)==null?void 0:d.displayName)??((l=w==null?void 0:w.currentUser)==null?void 0:l.displayName)??"";await V(C(u,"families",i,"children",e,"coParentRequests",t),{uid:t,displayName:a,status:"pending",requestedAt:$()})}async fetchFamilyChildren(e){if(!u||!e)return[];try{return(await Z(I(u,"families",e,"children"))).docs.map(i=>({id:i.id,...i.data()}))}catch(t){return console.warn("[parent-prompt] fetchFamilyChildren skipped (non-fatal):",t),[]}}async regenerateCairnInviteCode(){if(!u||!this._currentFamilyId)throw new Error("No family yet.");const e=ve(),t=new Date(Date.now()+720*60*60*1e3);return await M(C(u,"families",this._currentFamilyId),{cairnInviteCode:e,cairnInviteCodeExpiresAt:t,updatedAt:$()}),{code:e,expiresAt:t}}_maybeMigrateInviteCodeFormat(){const e=this.state.family;if(!e||!this._uid||this._inviteCodeMigratedFamilyId===e.id)return;const t=e.cairnInviteCode;if(!t||typeof t!="string")return;if(!t.includes("-")){this._inviteCodeMigratedFamilyId=e.id;return}(Array.isArray(e.memberIds)?e.memberIds:[]).includes(this._uid)&&(this._inviteCodeMigratedFamilyId=e.id,this.regenerateCairnInviteCode().catch(a=>{console.debug("invite-code format migration deferred:",(a==null?void 0:a.code)??(a==null?void 0:a.message)??a)}))}stop(){var e,t,i,a,r,s;(e=this._unsubUser)==null||e.call(this),(t=this._unsubFamily)==null||t.call(this),(i=this._unsubChildren)==null||i.call(this),(a=this._unsubTrips)==null||a.call(this),(r=this._unsubEvents)==null||r.call(this),(s=this._unsubActivities)==null||s.call(this),this._unsubUser=this._unsubFamily=this._unsubChildren=this._unsubTrips=this._unsubEvents=this._unsubActivities=null,this._teardownPpFamily(),this._uid=null,this._currentFamilyId=null,this._inviteCodeMigratedFamilyId=null,this._holidayKey=null,this._ppFamilyId=null,this.userDocResolved=!1,this.state={user:null,family:null,children:[],trips:[],events:[],holidays:[],ppFamily:null,ppIsMember:!1,ppChildren:[],selectedChildId:null,childMilestones:[],childInsights:[],childDailyCard:null,familyDailyCard:null,pebbleAnchors:[],pebbleRhythms:[],pebblePatterns:[],pebbleLiveContext:[],childPebbleMessages:[],childPebbleSessions:[]}}_emit(){this.dispatchEvent(new Event("change"))}}const f=new ei;function kt(g,e){const t=e==null?void 0:e.profilePhotoURL;return typeof t=="string"&&/^https?:\/\//i.test(t)?t:g!=null&&g.photoURL?g.photoURL:null}function ti(g,e,t=[]){if(!e)return[];const i=e.memberIds??[],a=e.cairnMemberIds??e.memberIds??[],r=e.memberProfiles??{},s=i.includes(g),o=s?a:Array.from(new Set([...a,...i])),d=[];let l=280;for(const p of o){if(p===g||s&&i.includes(p))continue;const h=r[p],c=h==null?void 0:h.profilePhotoURL,b=i.includes(p);d.push({uid:p,displayName:(h==null?void 0:h.displayName)??"Family",photoURL:typeof c=="string"&&/^https?:\/\//i.test(c)?c:null,role:b?"co-parent":"extended",circles:["extended"],hue:l}),l=(l+47)%360}return d}async function ii(g,e){var o,d;const t=Array.isArray(e==null?void 0:e.connectedFamilyIds)?e.connectedFamilyIds:[];if(t.length===0||!u)return[];const{getDoc:i}=await ie(async()=>{const{getDoc:l}=await import("./firebase-core-CJo043ws.js").then(p=>p.K);return{getDoc:l}},[]),a=[],r=new Set(g?[g]:[]);let s=150;for(const l of t)try{const p=await i(C(u,"families",l));if(!p.exists())continue;const h=p.data()??{},c=h.memberProfiles??{},b=h.name??"Connection";for(const v of h.memberIds??[]){if(r.has(v))continue;r.add(v);const k=(o=c[v])==null?void 0:o.profilePhotoURL;a.push({uid:v,displayName:((d=c[v])==null?void 0:d.displayName)??"Connection",photoURL:typeof k=="string"&&/^https?:\/\//i.test(k)?k:null,role:"connection",circles:["connection"],familyName:b,hue:s}),s=(s+53)%360}}catch{}return a}function fe(g,e,t,i=[],a=[]){const r=(e==null?void 0:e.memberIds)??[],s=(e==null?void 0:e.cairnMemberIds)??[],o=t?[t]:[],d=Array.isArray(i)?i:[],l=Array.isArray(a)?a:[];return g==="personal"?[...new Set(o)]:g==="extended"?[...new Set([...r,...s,...o,...d,...l])]:[...new Set([...r,...o,...d])]}async function ai(g){var a;const e=Array.isArray(g==null?void 0:g.connectedFamilyIds)?g.connectedFamilyIds:[];if(e.length===0||!u)return[];const{getDoc:t}=await ie(async()=>{const{getDoc:r}=await import("./firebase-core-CJo043ws.js").then(s=>s.K);return{getDoc:r}},[]),i=new Set;for(const r of e)try{const s=await t(C(u,"families",r));if(!s.exists())continue;for(const o of((a=s.data())==null?void 0:a.memberIds)??[])i.add(o)}catch{}return[...i]}function ve(){const g="ABCDEFGHJKMNPQRSTUVWXYZ23456789";let e="";for(let t=0;t<6;t++)e+=g[Math.floor(Math.random()*g.length)];return e}function ri(g,e,t,i,a){const r=[],s=new Set((i==null?void 0:i.memberIds)??[]),o=s.has(g);if(r.push({uid:g,displayName:(e==null?void 0:e.displayName)??(t==null?void 0:t.displayName)??"You",photoURL:kt(e,t),role:o?"self":"self-extended",circles:["immediate"],hue:198}),!o)return r;const d=(i==null?void 0:i.memberProfiles)??{};for(const[p,h]of Object.entries(d)){if(p===g||!s.has(p))continue;const c=h.profilePhotoURL;r.push({uid:p,displayName:h.displayName??"Co-parent",photoURL:typeof c=="string"&&/^https?:\/\//i.test(c)?c:null,role:"co-parent",circles:["immediate"],hue:8})}let l=142;for(const p of a??[]){const h=p.profilePhotoURL;r.push({uid:`child:${p.id}`,displayName:p.name,photoURL:typeof h=="string"&&/^https?:\/\//i.test(h)?h:null,role:"child",circles:["immediate"],hue:l,dateOfBirth:p.dateOfBirth}),l=(l+58)%360}return r}function si(g){const e=[];for(const t of g??[]){if(!t.dateOfBirth)continue;const i=t.dateOfBirth,a=i.getUTCFullYear(),r=String(i.getUTCMonth()+1).padStart(2,"0"),s=String(i.getUTCDate()).padStart(2,"0");e.push({id:`bday:${t.id}`,type:"birthday",date:`${a}-${r}-${s}`,personIds:[`child:${t.id}`],title:`${t.name}'s birthday`,_childId:t.id,_childName:t.name,recurring:!0})}return e}function ni(g,e=new Date){if(!(g!=null&&g.date))return{date:null,yearsElapsed:0};const t=S(g.date);if(!t||Number.isNaN(t.getTime()))return{date:null,yearsElapsed:0};if(!g.recurring)return{date:t,yearsElapsed:0};const i=new Date(e.getFullYear(),t.getMonth(),t.getDate()),a=i<new Date(e.getFullYear(),e.getMonth(),e.getDate())?new Date(e.getFullYear()+1,t.getMonth(),t.getDate()):i,r=a.getFullYear()-t.getFullYear();return{date:a,yearsElapsed:r}}const at=["linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)","linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)","linear-gradient(135deg, #3d9b8f 0%, #1f5c54 100%)","linear-gradient(135deg, #d4a843 0%, #c67b5c 55%, #c98a8a 100%)","linear-gradient(135deg, #8b7bb5 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #6b9ac4 0%, #3d9b8f 100%)"];function S(g){if(!g)return null;if(g instanceof Date)return g;const e=String(g).match(/^(\d{4})-(\d{2})-(\d{2})/);return e?new Date(Number(e[1]),Number(e[2])-1,Number(e[3])):new Date(g)}function Q(g){if(!g)return null;const e=g.getFullYear(),t=String(g.getMonth()+1).padStart(2,"0"),i=String(g.getDate()).padStart(2,"0");return`${e}-${t}-${i}`}async function oi(g,e=90,t=100){const i=new Date,a=new Date(i.getTime()+e*24*60*60*1e3),r=new URL("https://www.googleapis.com/calendar/v3/calendars/primary/events");r.searchParams.set("timeMin",i.toISOString()),r.searchParams.set("timeMax",a.toISOString()),r.searchParams.set("maxResults",String(t)),r.searchParams.set("singleEvents","true"),r.searchParams.set("orderBy","startTime");const s=await fetch(r.toString(),{headers:{Authorization:`Bearer ${g}`}});if(!s.ok){const d=await s.text();throw s.status===401?new Error("Your Google session expired — connect your calendar again."):s.status===403&&/accessNotConfigured|SERVICE_DISABLED|PERMISSION_DENIED|insufficient/i.test(d)?new Error("Google Calendar access isn’t configured for this project yet. (Admin: enable the Google Calendar API and add the calendar.readonly scope to the OAuth consent screen in Google Cloud Console.)"):new Error(`Google Calendar: ${s.status} ${d.slice(0,160)}`)}return((await s.json()).items??[]).filter(d=>{var l,p;return d.status!=="cancelled"&&(((l=d.start)==null?void 0:l.date)||((p=d.start)==null?void 0:p.dateTime))})}function li(g,e){var a,r,s,o,d,l,p,h;const t=((a=g.start)==null?void 0:a.date)??((s=(r=g.start)==null?void 0:r.dateTime)==null?void 0:s.slice(0,10))??"";let i=((o=g.end)==null?void 0:o.date)??((l=(d=g.end)==null?void 0:d.dateTime)==null?void 0:l.slice(0,10))??t;if((p=g.start)!=null&&p.date&&((h=g.end)!=null&&h.date)){const c=new Date(i);c.setDate(c.getDate()-1),i=c.toISOString().slice(0,10)}return{title:g.summary||"(untitled)",location:g.location??"",start:t,end:i,attendees:e?[e]:[],viewers:[],visibility:"family",notes:(g.description??"").slice(0,1e3),gcalEventId:g.id,gcalEventLink:g.htmlLink??null}}function $t(g){if(g!=null&&g.coverGradient)return g.coverGradient;const e=((g==null?void 0:g.title)??(g==null?void 0:g.id)??"")+((g==null?void 0:g.location)??"");let t=0;for(let i=0;i<e.length;i++)t=t*31+e.charCodeAt(i)>>>0;return at[t%at.length]}class Me extends z{constructor(){super(),this.start="",this.end="",this._displayMonth=null,this._hoverDate=null}willUpdate(e){if(e.has("start")||this._displayMonth===null){const t=this.start?S(this.start):new Date;this._displayMonth=new Date(t.getFullYear(),t.getMonth(),1)}}_isoFor(e,t,i){return`${e}-${String(t+1).padStart(2,"0")}-${String(i).padStart(2,"0")}`}_emit(e,t){this.start=e,this.end=t,this._hoverDate=null,this.dispatchEvent(new CustomEvent("range-change",{detail:{start:e,end:t},bubbles:!0,composed:!0}))}_onDayClick(e){if(!this.start||this.start&&this.end){this._emit(e,"");return}e<this.start?this._emit(e,this.start):this._emit(this.start,e)}_onDayHover(e){this.start&&!this.end&&(this._hoverDate=e)}_onLeave(){this._hoverDate=null}_shiftMonth(e){const t=this._displayMonth;this._displayMonth=new Date(t.getFullYear(),t.getMonth()+e,1)}_isToday(e,t,i){const a=new Date;return a.getFullYear()===e&&a.getMonth()===t&&a.getDate()===i}_inSelectedRange(e){return!this.start||!this.end?!1:e>this.start&&e<this.end}_inHoverRange(e){if(!this.start||this.end||!this._hoverDate)return!1;const t=this._hoverDate<this.start?this._hoverDate:this.start,i=this._hoverDate<this.start?this.start:this._hoverDate;return e>t&&e<i}_summary(){if(!this.start&&!this.end)return"Pick a start date";const e=t=>{const i=S(t);return i?i.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"}):""};return this.start&&!this.end?`From ${e(this.start)} — pick an end date`:this.start===this.end?e(this.start):`${e(this.start)} – ${e(this.end)}`}_renderGrid(){const e=this._displayMonth.getFullYear(),t=this._displayMonth.getMonth(),a=(new Date(e,t,1).getDay()+6)%7,r=new Date(e,t+1,0).getDate(),s=[];for(let o=0;o<a;o++)s.push(n`<div class="empty"></div>`);for(let o=1;o<=r;o++){const d=this._isoFor(e,t,o),l=d===this.start,p=d===this.end&&d!==this.start,h=this._inSelectedRange(d),c=this._inHoverRange(d),b=this._isToday(e,t,o),v=["day",l?"start":"",p?"end":"",h?"in-range":"",c?"hover-range":"",b&&!l&&!p?"today":""].filter(Boolean).join(" ");s.push(n`
        <button
          type="button"
          class=${v}
          @click=${()=>this._onDayClick(d)}
          @mouseover=${()=>this._onDayHover(d)}
        >
          ${o}
        </button>
      `)}return s}render(){if(!this._displayMonth)return n``;const e=this._displayMonth.toLocaleString("en-GB",{month:"long",year:"numeric"});return n`
      <div class="summary">${this._summary()}</div>
      <div class="head">
        <button class="nav" type="button" @click=${()=>this._shiftMonth(-1)} aria-label="Previous month">‹</button>
        <span class="month-label">${e}</span>
        <button class="nav" type="button" @click=${()=>this._shiftMonth(1)} aria-label="Next month">›</button>
      </div>
      <div class="dow-row">
        ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(t=>n`<div class="dow">${t}</div>`)}
      </div>
      <div class="grid" @mouseleave=${this._onLeave}>${this._renderGrid()}</div>
    `}}_(Me,"properties",{start:{type:String},end:{type:String},_displayMonth:{state:!0},_hoverDate:{state:!0}}),_(Me,"styles",T`
    * { box-sizing: border-box; }
    :host {
      display: block;
    }
    /* Compact variant — date picker takes ~half the space it used to.
       Headed by a slim summary chip, narrower grid cells, smaller
       day buttons. Keeps the same UX (click-start, hover-preview,
       click-end), just at a more proportionate footprint for the
       form sheet. */
    :host {
      max-width: 360px;
    }
    .summary {
      font-family: var(--font-body);
      font-size: 13.5px;
      font-weight: 500;
      color: var(--text-primary);
      padding: 8px 12px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.16);
      border-radius: var(--radius-input);
      margin-bottom: 8px;
    }
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      padding: 0 4px;
    }
    .month-label {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 12.5px;
      letter-spacing: -0.005em;
    }
    .nav {
      width: 24px;
      height: 24px;
      border-radius: 999px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.14);
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 12px;
      font-family: var(--font-body);
      padding: 0;
    }
    .nav:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .dow-row {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
      margin-bottom: 4px;
    }
    .dow {
      font-size: 9.5px;
      color: var(--text-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      text-align: center;
      padding: 4px 0;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 1px;
    }
    .empty {
      aspect-ratio: 1 / 1;
    }
    .day {
      aspect-ratio: 1 / 1;
      background: transparent;
      border: none;
      border-radius: 4px;
      color: var(--text-primary);
      font: inherit;
      font-size: 11.5px;
      cursor: pointer;
      transition: background 140ms ease, color 140ms ease;
      padding: 0;
    }
    .day:hover {
      background: rgba(255, 248, 235, 0.06);
    }
    .day.today {
      box-shadow: inset 0 -2px 0 var(--teal-pebble);
    }
    .day.in-range,
    .day.hover-range {
      background: rgba(61, 155, 143, 0.22);
      border-radius: 0;
    }
    .day.hover-range {
      background: rgba(61, 155, 143, 0.14);
    }
    .day.start,
    .day.end {
      background: var(--teal-pebble);
      color: #fff;
      font-weight: 600;
      border-radius: 6px;
    }
    .day.start {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    .day.end {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    /* When start has an in-range neighbor on its right, square that edge
       so the range bar visually connects. Same for end + left neighbor. */
    .day.start + .in-range,
    .day.start + .hover-range {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `);customElements.define("date-range-picker",Me);class Ie extends z{constructor(){super(),this.open=!1,this.trip=null,this.members=[],this.extendedMembers=[],this.connectionMembers=[],this._visibilityAutoExtended=!1,this.currentUid="",this.familyId="",this.busy=!1,this.formMode="trip",this.subGroups={},this._draft=this._blankDraft(),this._error="",this._previewing=!1,this._previewError="",this._uploadingPreviewImage=!1,this._previewImageError="",this._previewDebounce=null,this._lastPreviewedUrl="",this._showReturn=!1,this._showOutboundDetails=!1,this._showReturnDetails=!1,this._showFlight=!1}willUpdate(e){(e.has("trip")||e.has("open"))&&(this.open&&(this._draft=this._draftFromTrip(this.trip),this._visibilityAutoExtended=!1,this._draft.id&&this._draft.lodgingUrl&&!this._draft.coverImage&&requestAnimationFrame(()=>this._autoRefreshPreview()),this._showReturn=!!(this._draft.returnFlightNumber||this._draft.returnFlightDepartTime||this._draft.returnFlightDepartAirport||this._draft.returnFlightArriveAirport),this._showOutboundDetails=!!(this._draft.flightDepartAirport||this._draft.flightArriveAirport),this._showReturnDetails=!!(this._draft.returnFlightDepartAirport||this._draft.returnFlightArriveAirport),this._showFlight=!!(this._draft.flightNumber||this._draft.flightAirline||this._draft.flightDepartTime||this._draft.flightDepartAirport||this._draft.flightArriveAirport||this._showReturn)),this._error="")}async _autoRefreshPreview(){const e=this._draft.lodgingUrl,t=this._draft.id;if(!(!e||!t||this._previewing)){this._previewing=!0,this._previewError="";try{const i=await f.previewUrl(e);if(!(i!=null&&i.image)){this._previewError="No preview image found for this URL.";return}const a={coverImage:i.image,lodgingHost:i.siteName??i.host??this._draft.lodgingHost??"",lodgingTitle:i.title??this._draft.lodgingTitle??""};this._draft={...this._draft,...a},this._lastPreviewedUrl=e;try{await f.saveTrip({id:t,...a})}catch(r){console.warn("Auto-save cover failed:",r)}}catch(i){console.warn("Auto preview failed:",i),this._previewError=(i==null?void 0:i.code)==="functions/unauthenticated"?"Preview needs you to be signed in.":"Preview unavailable — try the Refresh button."}finally{this._previewing=!1}}}_blankDraft(){const e=new Date().toISOString().slice(0,10);return{id:null,title:"",location:"",start:e,end:e,visibility:"family",attendees:this.currentUid?[this.currentUid]:[],viewers:[],targetSubGroups:[],lodgingUrl:"",lodgingHost:"",lodgingTitle:"",previewImage:"",flightAirline:"",flightNumber:"",flightDepartAirport:"",flightDepartTime:"",flightArriveAirport:"",flightArriveTime:"",returnFlightAirline:"",returnFlightNumber:"",returnFlightDepartAirport:"",returnFlightDepartTime:"",returnFlightArriveAirport:"",returnFlightArriveTime:"",notes:""}}_draftFromTrip(e){return e?{id:e.id??null,title:e.title??"",location:e.location??"",start:e.start??new Date().toISOString().slice(0,10),end:e.end??e.start??new Date().toISOString().slice(0,10),visibility:e.visibility??"family",attendees:Array.isArray(e.attendees)?[...e.attendees]:[],viewers:Array.isArray(e.viewers)?[...e.viewers]:[],targetSubGroups:Array.isArray(e.targetSubGroups)?[...e.targetSubGroups]:[],lodgingUrl:e.lodgingUrl??"",lodgingHost:e.lodgingHost??"",lodgingTitle:e.lodgingTitle??"",flightAirline:e.flightAirline??"",flightNumber:e.flightNumber??"",flightDepartAirport:e.flightDepartAirport??"",flightDepartTime:e.flightDepartTime??"",flightArriveAirport:e.flightArriveAirport??"",flightArriveTime:e.flightArriveTime??"",returnFlightAirline:e.returnFlightAirline??"",returnFlightNumber:e.returnFlightNumber??"",returnFlightDepartAirport:e.returnFlightDepartAirport??"",returnFlightDepartTime:e.returnFlightDepartTime??"",returnFlightArriveAirport:e.returnFlightArriveAirport??"",returnFlightArriveTime:e.returnFlightArriveTime??"",coverImage:e.coverImage??"",previewImage:e.previewImage??"",notes:e.notes??""}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_resolvedPreviewImage(){const e=(this._draft.previewImage||"").trim();return e||(this._uploadedPreviewImageUrl?this._uploadedPreviewImageUrl:"")}async _onPreviewImageUpload(e){var i,a;const t=(a=(i=e.target)==null?void 0:i.files)==null?void 0:a[0];if(t){this._previewImageError="",this._uploadingPreviewImage=!0;try{const r=await f.uploadTripPreview(t);this._uploadedPreviewImageUrl=r,(this._draft.previewImage||"").trim()||this._set("previewImage",r)}catch(r){console.warn("Preview image upload failed:",r),this._previewImageError=(r==null?void 0:r.message)||"Upload failed."}finally{this._uploadingPreviewImage=!1,e.target.value=""}}}_clearPreviewImage(){this._set("previewImage",""),this._uploadedPreviewImageUrl="",this._previewImageError=""}_onLodgingChange(e){this._set("lodgingUrl",e),this._previewError="",this._previewDebounce&&clearTimeout(this._previewDebounce);const t=e.trim();if(!t){this._set("coverImage",""),this._set("lodgingHost",""),this._set("lodgingTitle",""),this._lastPreviewedUrl="";return}/^https?:\/\//i.test(t)&&t!==this._lastPreviewedUrl&&(this._previewDebounce=setTimeout(()=>this._runPreview(t),700))}async _runPreview(e){this._previewing=!0,this._previewError="";try{const t=await f.previewUrl(e);if(!t)return;this._lastPreviewedUrl=e,this._draft={...this._draft,coverImage:t.image??this._draft.coverImage,lodgingHost:t.siteName??t.host??this._draft.lodgingHost,lodgingTitle:t.title??this._draft.lodgingTitle}}catch(t){console.warn("Preview failed:",t),(t==null?void 0:t.code)==="functions/unauthenticated"?this._previewError="Preview unavailable — sign in.":(t==null?void 0:t.code)==="functions/invalid-argument"?this._previewError="That URL doesn’t look right.":this._previewError="Preview unavailable — paste it again or skip."}finally{this._previewing=!1}}_isExtendedUid(e){return(this.extendedMembers??[]).some(t=>t.uid===e)}_setVisibility(e){this._visibilityAutoExtended=!1,this._set("visibility",e)}_toggleAttendee(e){const t=this._draft.attendees.includes(e),i=t?this._draft.attendees.filter(r=>r!==e):[...this._draft.attendees,e];let a=this._draft.viewers??[];t||(a=a.filter(r=>r!==e)),this._draft={...this._draft,attendees:i,viewers:a}}_toggleViewer(e){if(this._draft.attendees.includes(e))return;const i=(this._draft.viewers??[]).includes(e)?this._draft.viewers.filter(a=>a!==e):[...this._draft.viewers??[],e];this._set("viewers",i)}_toggleSubGroup(e){const i=(this._draft.targetSubGroups??[]).includes(e)?this._draft.targetSubGroups.filter(a=>a!==e):[...this._draft.targetSubGroups??[],e];this._set("targetSubGroups",i)}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give the trip a title.";return}if(!e.start){this._error="Pick a start date.";return}const t=e.end||e.start;if(t<e.start){this._error="End date can’t be before start date.";return}if(!this.familyId){this._error="You need to be in a family first.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,end:t,title:e.title.trim(),location:e.location.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this trip? This can’t be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return n``;const e=this._draft,t=!!e.id;return n`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>${t?"Edit activity":this.formMode==="activity"?"New group activity":"New family trip"}</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <div class="form-grid">
            <div class="form-col">
              <div class="field">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="e.g. Half-term in the Alps"
                  .value=${e.title}
                  @input=${i=>this._set("title",i.target.value)}
                />
              </div>
              <div class="field">
                <label>Dates</label>
                <date-range-picker
                  .start=${e.start}
                  .end=${e.end}
                  @range-change=${i=>{this._draft={...this._draft,start:i.detail.start,end:i.detail.end??""}}}
                ></date-range-picker>
              </div>
            </div>
            <div class="form-col">
              <div class="field">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="City, country"
                  .value=${e.location}
                  @input=${i=>this._set("location",i.target.value)}
                />
              </div>
              <div class="field">
                <label>Visibility</label>
                <div class="seg">
                  ${["personal","family","extended"].map(i=>n`
                      <button
                        class=${e.visibility===i?"active":""}
                        @click=${()=>this._setVisibility(i)}
                      >
                        ${i==="personal"?"Just Me":i==="family"?"Participants":"Everyone"}
                      </button>
                    `)}
                </div>
                <!-- Phase 2B: visibility auto-elevate removed; the
                     vis-note no longer applies. -->
              </div>
              <div class="field">
                <label>Who's going</label>
                <div class="attendees">
                  ${this.members.map(i=>n`
                      <div
                        class="att-chip ${e.attendees.includes(i.uid)?"on":""}"
                        @click=${()=>this._toggleAttendee(i.uid)}
                      >
                        <member-chip
                          .name=${i.displayName}
                          .photo=${i.photoURL??""}
                          .hue=${i.hue}
                          size="22"
                        ></member-chip>
                        ${i.displayName}
                      </div>
                    `)}
                </div>
                ${(this.extendedMembers??[]).length>0?n`
                      <div class="att-group-label">My connections</div>
                      <div class="attendees">
                        ${this.extendedMembers.map(i=>n`
                            <div
                              class="att-chip ${e.attendees.includes(i.uid)?"on":""}"
                              @click=${()=>this._toggleAttendee(i.uid)}
                            >
                              <member-chip
                                .name=${i.displayName}
                                .photo=${i.photoURL??""}
                                .hue=${i.hue}
                                size="22"
                              ></member-chip>
                              ${i.displayName}
                            </div>
                          `)}
                      </div>
                    `:""}
                ${(this.connectionMembers??[]).length>0?n`
                      <div class="att-group-label">Connections</div>
                      <div class="attendees">
                        ${this.connectionMembers.map(i=>n`
                            <div
                              class="att-chip ${e.attendees.includes(i.uid)?"on":""}"
                              @click=${()=>this._toggleAttendee(i.uid)}
                              title=${i.familyName??""}
                            >
                              <member-chip
                                .name=${i.displayName}
                                .photo=${i.photoURL??""}
                                .hue=${i.hue}
                                size="22"
                              ></member-chip>
                              ${i.displayName}
                            </div>
                          `)}
                      </div>
                    `:""}
              </div>
              <div class="field">
                <label>Preview image</label>
                <div class="preview-image-help">
                  Shown as the cover instead of the lodging photo. Upload one, or paste an image URL.
                </div>
                <div class="preview-image-controls">
                  <label class="preview-upload-btn" ?data-busy=${this._uploadingPreviewImage}>
                    ${this._uploadingPreviewImage?n`<span class="spinner"></span> Uploading…`:n`<span class="upload-icon">📷</span> Upload image`}
                    <input
                      type="file"
                      accept="image/*"
                      @change=${i=>this._onPreviewImageUpload(i)}
                      ?disabled=${this._uploadingPreviewImage}
                      hidden
                    />
                  </label>
                  ${this._resolvedPreviewImage()?n`<button
                        type="button"
                        class="preview-clear-btn"
                        @click=${()=>this._clearPreviewImage()}
                      >
                        Clear
                      </button>`:""}
                </div>
                <div style="display:flex;gap:8px;align-items:stretch;margin-top:8px;">
                  <input
                    type="url"
                    placeholder="Or paste an image URL"
                    .value=${e.previewImage}
                    @input=${i=>this._set("previewImage",i.target.value)}
                    style="flex:1;min-width:0;"
                  />
                </div>
                ${this._previewImageError?n`<div class="preview-error">${this._previewImageError}</div>`:""}
                ${this._resolvedPreviewImage()?n`<div class="preview-image-thumb" style='background-image:url("${this._resolvedPreviewImage()}");'></div>`:""}
              </div>
              ${this.formMode!=="activity"?n`
                    <div class="field">
                      <label>Lodging URL</label>
                      <div style="display:flex;gap:8px;align-items:stretch;">
                        <input
                          type="url"
                          placeholder="airbnb.com/… or booking.com/…"
                          .value=${e.lodgingUrl}
                          @input=${i=>this._onLodgingChange(i.target.value)}
                          style="flex:1;min-width:0;"
                        />
                        ${e.lodgingUrl?n`<button
                              type="button"
                              class="preview-refresh-btn"
                              ?disabled=${this._previewing}
                              title="Re-fetch preview"
                              @click=${()=>this._runPreview(e.lodgingUrl)}
                            >
                              ↻
                            </button>`:""}
                      </div>
                      ${this._previewing?n`<div class="preview-loading">
                            <div class="spinner"></div>
                            Fetching preview…
                          </div>`:""}
                      ${this._previewError?n`<div class="preview-error">${this._previewError}</div>`:""}
                      ${!this._previewing&&e.coverImage?n`<div class="preview">
                            <div class="thumb" style='background-image:url("${e.coverImage}");'></div>
                            <div class="meta">
                              <div class="meta-title">${e.lodgingTitle||e.lodgingUrl}</div>
                              <div class="meta-host">${e.lodgingHost||""}</div>
                            </div>
                          </div>`:""}
                    </div>
                  `:""}
            </div>
          </div>

          ${e.visibility==="extended"&&Object.keys(this.subGroups??{}).length>0?n`
                <div class="field">
                  <label>Limit to sub-groups <span style="text-transform:none;font-weight:400;color:var(--text-tertiary);letter-spacing:0.01em;">(optional — leave empty to show to all extended)</span></label>
                  <div class="attendees">
                    ${Object.entries(this.subGroups).map(([i,a])=>n`
                        <div
                          class="att-chip ${(e.targetSubGroups??[]).includes(i)?"on":""}"
                          @click=${()=>this._toggleSubGroup(i)}
                        >
                          ${a.name}
                          <span style="color:var(--text-tertiary);font-size:11px;margin-left:4px;">
                            ${(a.memberIds??[]).length}
                          </span>
                        </div>
                      `)}
                  </div>
                </div>
              `:""}

          <!-- "Also visible to" picker removed — the Visibility toggle
               above (Just me / Family / Extended) already controls the
               read audience. The viewers array is preserved on the trip
               doc for old data round-tripping, but we don't surface it
               in the iOS-parity form anymore. -->


          ${this.formMode==="activity"?"":n`
          <fieldset class="flight-section">
            <legend>Flight (optional)</legend>
            <button
              type="button"
              class="flight-toggle"
              aria-expanded=${this._showFlight?"true":"false"}
              @click=${()=>this._showFlight=!this._showFlight}
            >
              <span class="ft-label">Will you be flying?</span>
              <span class="ft-caret" aria-hidden="true">⌄</span>
            </button>
            ${this._showFlight?n`<div class="flight-body">

            <div class="flight-leg">
              <div class="leg-head">
                <span class="leg-name">Outbound</span>
                <button
                  type="button"
                  class="leg-disclosure"
                  @click=${()=>this._showOutboundDetails=!this._showOutboundDetails}
                >
                  ${this._showOutboundDetails?"− Hide airports":"+ Airports"}
                </button>
              </div>
              <div class="row-flight">
                <div class="field" style="margin-bottom:0;">
                  <label>Flight #</label>
                  <input
                    type="text"
                    placeholder="AF1234"
                    .value=${e.flightNumber}
                    @input=${i=>this._set("flightNumber",i.target.value)}
                  />
                </div>
                <div class="field" style="margin-bottom:0;">
                  <label>Departure</label>
                  <input
                    type="datetime-local"
                    .value=${e.flightDepartTime}
                    @input=${i=>this._set("flightDepartTime",i.target.value)}
                  />
                </div>
              </div>
              ${this._showOutboundDetails?n`
                    <div class="row-airports">
                      <input
                        type="text"
                        placeholder="From (CDG)"
                        maxlength="4"
                        .value=${e.flightDepartAirport}
                        @input=${i=>this._set("flightDepartAirport",i.target.value)}
                      />
                      <span class="arrow">→</span>
                      <input
                        type="text"
                        placeholder="To (NCE)"
                        maxlength="4"
                        .value=${e.flightArriveAirport}
                        @input=${i=>this._set("flightArriveAirport",i.target.value)}
                      />
                    </div>
                  `:""}
            </div>

            ${this._showReturn?n`
                  <div class="flight-leg">
                    <div class="leg-head">
                      <span class="leg-name">Return</span>
                      <div style="display:flex;gap:10px;align-items:baseline;">
                        <button
                          type="button"
                          class="leg-disclosure"
                          @click=${()=>this._showReturnDetails=!this._showReturnDetails}
                        >
                          ${this._showReturnDetails?"− Hide airports":"+ Airports"}
                        </button>
                        <button
                          type="button"
                          class="return-remove"
                          @click=${()=>{this._showReturn=!1,this._draft={...this._draft,returnFlightAirline:"",returnFlightNumber:"",returnFlightDepartAirport:"",returnFlightDepartTime:"",returnFlightArriveAirport:"",returnFlightArriveTime:""}}}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div class="row-flight">
                      <div class="field" style="margin-bottom:0;">
                        <label>Flight #</label>
                        <input
                          type="text"
                          placeholder="AF1235"
                          .value=${e.returnFlightNumber}
                          @input=${i=>this._set("returnFlightNumber",i.target.value)}
                        />
                      </div>
                      <div class="field" style="margin-bottom:0;">
                        <label>Departure</label>
                        <input
                          type="datetime-local"
                          .value=${e.returnFlightDepartTime}
                          @input=${i=>this._set("returnFlightDepartTime",i.target.value)}
                        />
                      </div>
                    </div>
                    ${this._showReturnDetails?n`
                          <div class="row-airports">
                            <input
                              type="text"
                              placeholder="From (NCE)"
                              maxlength="4"
                              .value=${e.returnFlightDepartAirport}
                              @input=${i=>this._set("returnFlightDepartAirport",i.target.value)}
                            />
                            <span class="arrow">→</span>
                            <input
                              type="text"
                              placeholder="To (CDG)"
                              maxlength="4"
                              .value=${e.returnFlightArriveAirport}
                              @input=${i=>this._set("returnFlightArriveAirport",i.target.value)}
                            />
                          </div>
                        `:""}
                  </div>
                `:n`
                  <button
                    type="button"
                    class="return-toggle"
                    @click=${()=>this._showReturn=!0}
                  >
                    + Add return flight
                  </button>
                `}
              </div>`:""}
          </fieldset>
          `}

          <div class="field">
            <label>Notes</label>
            <textarea
              placeholder="Reservations, packing list, who's bringing what…"
              .value=${e.notes}
              @input=${i=>this._set("notes",i.target.value)}
            ></textarea>
          </div>

          ${this._error?n`<div class="error">${this._error}</div>`:""}

          <div class="actions">
            ${t?n`<button class="delete-btn" @click=${this._onDelete} ?disabled=${this.busy}>
                  Delete
                </button>`:""}
            <div class="spacer"></div>
            <glass-button variant="ghost" @click=${this._onCancel} ?disabled=${this.busy}>
              Cancel
            </glass-button>
            <glass-button variant="primary" @click=${this._onSave} ?disabled=${this.busy}>
              <span class="save-long">${this.busy?"Saving…":t?"Save changes":"Create activity"}</span>
              <span class="save-short">${this.busy?"Saving…":t?"Save":"Create"}</span>
            </glass-button>
          </div>
        </glass-panel>
      </div>
    `}}_(Ie,"properties",{open:{type:Boolean,reflect:!0},trip:{type:Object},members:{type:Array},extendedMembers:{type:Array},connectionMembers:{type:Array},currentUid:{type:String},familyId:{type:String},busy:{type:Boolean},formMode:{type:String},subGroups:{type:Object},_visibilityAutoExtended:{state:!0},_draft:{state:!0},_error:{state:!0},_previewing:{state:!0},_previewError:{state:!0},_uploadingPreviewImage:{state:!0},_previewImageError:{state:!0},_showReturn:{state:!0},_showOutboundDetails:{state:!0},_showReturnDetails:{state:!0},_showFlight:{state:!0}}),_(Ie,"styles",T`
    * {
      box-sizing: border-box;
    }
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding: 6vh 24px;
      overflow-y: auto;
    }
    :host([open]) {
      display: flex;
    }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(20, 12, 6, 0.55);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: -1;
      animation: fadeIn 200ms ease;
    }
    .sheet {
      position: relative;
      width: 100%;
      max-width: 760px;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .close {
      background: transparent;
      border: 1px solid var(--glass-border);
      width: 32px;
      height: 32px;
      border-radius: 999px;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 18px;
      line-height: 1;
    }
    .close:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .field {
      margin-bottom: 14px;
      min-width: 0;
    }
    label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: -0.005em;
      margin-bottom: 6px;
    }
    input[type='text'],
    input[type='url'],
    input[type='date'],
    textarea {
      width: 100%;
      min-width: 0;
      min-height: 44px;
      box-sizing: border-box;
      /* Themeable: the old light-on-dark rgba border/bg was invisible
         on the light sand surface — fields had no visible outline.
         --glass-border-strong reads clearly in BOTH themes. */
      background: var(--field-bg);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-input);
      padding: 10px 14px;
      color: var(--text-primary);
      font-family: var(--font-body);
      /* 16px prevents iOS Safari auto-zoom on focus. */
      font-size: 16px;
      transition: border-color 200ms ease, background 200ms ease;
    }
    input[type='date'] {
      /* Keep native picker icon from squeezing the displayed date. */
      font-variant-numeric: tabular-nums;
    }
    input:focus,
    textarea:focus {
      outline: none;
      border-color: var(--terracotta);
      background: var(--glass-fill-strong);
    }
    input::placeholder,
    textarea::placeholder {
      color: var(--text-tertiary);
    }
    textarea {
      min-height: 64px;
      resize: vertical;
      font-family: var(--font-body);
    }
    /* Wider form unlocks more 2-column rows so the sheet is shorter. */
    .row-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .row-dates {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    /* Top-of-form grid: Title + Dates on the left, Location + Visibility
       + Who's going + Lodging URL on the right. Keeps the date-picker
       size in proportion with the title field above, and tucks all the
       smaller inputs into the right column so the form reads as two
       balanced stacks. Falls back to a single column on phones. */
    .form-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 20px 24px;
      margin-bottom: 4px;
    }
    .form-col {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .form-col .field {
      margin-bottom: 14px;
    }
    .form-col .field:last-child {
      margin-bottom: 0;
    }
    @media (max-width: 560px) {
      .row-2,
      .row-dates {
        grid-template-columns: 1fr;
        gap: 0;
      }
      .form-grid {
        grid-template-columns: 1fr;
        gap: 0;
      }
    }
    @media (max-width: 560px) {
      :host {
        padding: 4vh 12px;
      }
      h2 {
        font-size: 21px;
      }
      /* Single-row, uniform-shape action buttons on mobile. All three
         (Delete / Cancel / Save) become equal-width pills with the
         exact same height + radius — Delete uses a destructive outline
         tint, Cancel the standard ghost, Save the primary fill, but
         the silhouette matches across all three. */
      .actions {
        flex-wrap: nowrap;
        gap: 8px;
      }
      .actions .spacer {
        display: none;
      }
      .actions .delete-btn,
      .actions glass-button {
        flex: 1 1 0;
        min-width: 0;
        height: 44px;
        padding: 0;
        font-size: 13.5px;
        text-align: center;
        white-space: nowrap;
        border-radius: var(--radius-pill);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .save-long { display: none; }
      .save-short { display: inline; }
    }
    /* Segmented Visibility control — matches the text input shape
       (14px radius, 44px min-height) so the trip-form fields all share
       the same silhouette. The active segment is still pill-radius
       inside the rounded-rect frame for affordance. */
    .seg {
      display: inline-flex;
      width: 100%;
      box-sizing: border-box;
      min-height: 44px;
      padding: 3px;
      gap: 2px;
      background: var(--field-bg);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-input);
    }
    .seg button {
      flex: 1;
      background: transparent;
      color: var(--text-secondary);
      border: none;
      padding: 0 12px;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      border-radius: calc(var(--radius-input) - 4px);
      cursor: pointer;
    }
    .seg button.active {
      background: var(--sand-warm);
      color: var(--charcoal);
      font-weight: 600;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
    }
    .attendees {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .att-group-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-tertiary);
      margin: 12px 0 6px;
    }
    .vis-note {
      margin-top: 8px;
      font-size: 12px;
      line-height: 1.45;
      color: var(--text-secondary);
      background: rgba(198, 123, 92, 0.10);
      border: 1px solid rgba(198, 123, 92, 0.28);
      border-radius: 10px;
      padding: 8px 10px;
    }
    .vis-note strong { color: var(--text-primary); font-weight: 700; }
    .att-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 12px 5px 5px;
      background: var(--field-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-pill);
      cursor: pointer;
      font-size: 13px;
      color: var(--text-secondary);
      transition: all 180ms ease;
    }
    .att-chip:hover {
      border-color: var(--glass-border-strong);
      color: var(--text-primary);
    }
    .att-chip.on {
      background: rgba(61, 155, 143, 0.18);
      border-color: rgba(61, 155, 143, 0.5);
      color: var(--text-primary);
    }
    .actions {
      display: flex;
      gap: 10px;
      margin-top: 24px;
    }
    .actions .spacer {
      flex: 1;
    }
    /* Two labels on the Save button: full copy on desktop, terse copy
       on mobile (so the three single-row pills fit even at narrow
       widths). The mobile media-query below flips the visibility. */
    .save-short { display: none; }
    .delete-btn {
      background: transparent;
      color: var(--rose-soft);
      border: 1px solid rgba(201, 138, 138, 0.35);
      padding: 11px 18px;
      border-radius: var(--radius-pill);
      cursor: pointer;
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 14px;
    }
    .delete-btn:hover {
      background: rgba(201, 138, 138, 0.12);
      border-color: rgba(201, 138, 138, 0.5);
    }
    .error {
      color: var(--rose-soft);
      font-size: 13px;
      margin-top: 12px;
    }
    .hint {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-top: 6px;
    }
    .preview {
      margin-top: 10px;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 12px;
      border-radius: var(--radius-tile);
      background: rgba(255, 248, 235, 0.05);
      border: 1px solid rgba(255, 248, 235, 0.12);
    }
    .preview .thumb {
      width: 64px;
      height: 48px;
      border-radius: 8px;
      background-size: cover;
      background-position: center;
      flex-shrink: 0;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    }
    .preview .meta {
      flex: 1;
      min-width: 0;
    }
    .preview .meta-title {
      font-size: 13px;
      font-weight: 500;
      color: var(--text-primary);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .preview .meta-host {
      font-size: 11.5px;
      color: var(--text-tertiary);
      margin-top: 2px;
    }
    .preview-refresh-btn {
      flex-shrink: 0;
      width: 44px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.16);
      border-radius: var(--radius-input);
      color: var(--text-secondary);
      font-size: 18px;
      cursor: pointer;
      transition: background 180ms ease, color 180ms ease, transform 220ms ease;
    }
    .preview-refresh-btn:hover:not(:disabled) {
      background: rgba(255, 248, 235, 0.12);
      color: var(--text-primary);
    }
    .preview-refresh-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      animation: spin 1s linear infinite;
    }
    /* Preview-image (new field — takes precedence over lodging cover) */
    .preview-image-help {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-bottom: 8px;
      line-height: 1.4;
    }
    .preview-image-controls {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .preview-upload-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      font-size: 13px;
      font-weight: 600;
      color: var(--teal-pebble);
      background: rgba(61, 155, 143, 0.10);
      border: 1px solid rgba(61, 155, 143, 0.30);
      border-radius: 999px;
      cursor: pointer;
      transition: background 180ms ease;
    }
    .preview-upload-btn:hover {
      background: rgba(61, 155, 143, 0.18);
    }
    .preview-upload-btn[data-busy] {
      opacity: 0.7;
      cursor: progress;
    }
    .preview-upload-btn .upload-icon {
      font-size: 14px;
    }
    .preview-clear-btn {
      background: transparent;
      border: none;
      color: var(--text-tertiary);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      padding: 4px 8px;
    }
    .preview-clear-btn:hover { color: var(--text-secondary); }
    .preview-image-thumb {
      margin-top: 10px;
      width: 100%;
      height: 120px;
      border-radius: 10px;
      background-size: cover;
      background-position: center;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    }
    .preview-loading,
    .preview-error {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-top: 6px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .preview-error {
      color: var(--rose-soft);
    }
    .spinner {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      border: 1.5px solid rgba(255, 248, 235, 0.3);
      border-top-color: var(--terracotta);
      animation: spin 700ms linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* Flight section is collapsible behind a "Will you be flying?"
       toggle — most activities don't involve a flight so the section
       stays hidden until the user opts in. No fieldset border;
       contained by the form's natural rhythm. */
    .flight-section {
      border: none;
      padding: 0;
      margin: 6px 0 14px;
    }
    .flight-section legend {
      display: none;
    }
    .flight-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 12px 0;
      background: transparent;
      border: none;
      cursor: pointer;
      font: inherit;
    }
    .flight-toggle .ft-label {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: 0.02em;
    }
    .flight-toggle .ft-caret {
      color: var(--text-tertiary);
      font-size: 14px;
      transition: transform 200ms ease;
    }
    .flight-toggle[aria-expanded="true"] .ft-caret {
      transform: rotate(180deg);
    }
    .flight-toggle:hover .ft-label {
      color: var(--text-primary);
    }
    .flight-body {
      padding-top: 4px;
    }
    .flight-leg {
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px dashed rgba(255, 248, 235, 0.1);
    }
    .flight-leg:last-of-type {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .leg-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .leg-name {
      font-family: var(--font-body);
      font-size: 13px;
      font-weight: 600;
      color: var(--text-primary);
    }
    .leg-disclosure {
      background: transparent;
      border: none;
      color: var(--text-tertiary);
      font: inherit;
      font-size: 12px;
      cursor: pointer;
      padding: 2px 4px;
    }
    .leg-disclosure:hover {
      color: var(--text-secondary);
    }
    .row-flight {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 14px;
    }
    @media (max-width: 560px) {
      .row-flight {
        grid-template-columns: 1fr;
        gap: 0;
      }
    }
    .row-airports {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 10px;
      align-items: center;
      margin-top: 10px;
    }
    .row-airports .arrow {
      color: var(--text-tertiary);
      font-size: 18px;
      text-align: center;
    }
    .return-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 8px;
      background: transparent;
      border: 1px dashed rgba(255, 248, 235, 0.22);
      color: var(--text-secondary);
      border-radius: var(--radius-pill);
      padding: 6px 12px;
      font: inherit;
      font-size: 13px;
      cursor: pointer;
      transition: border-color 180ms ease, color 180ms ease;
    }
    .return-toggle:hover {
      border-color: rgba(255, 248, 235, 0.4);
      color: var(--text-primary);
    }
    .return-remove {
      background: transparent;
      border: none;
      color: var(--rose-soft);
      font: inherit;
      font-size: 12px;
      cursor: pointer;
      padding: 0;
    }
    .return-remove:hover {
      text-decoration: underline;
    }
    .lookup-status {
      margin-top: 8px;
      font-size: 12px;
      color: var(--text-tertiary);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .lookup-ok { color: var(--teal-pebble); }
    .lookup-error { color: var(--rose-soft); }
  `);customElements.define("trip-form",Ie);class ze extends z{constructor(){super(),this.open=!1,this.event=null,this.members=[],this.familyId="",this.busy=!1,this._draft=this._blankDraft(),this._error=""}willUpdate(e){(e.has("event")||e.has("open"))&&(this.open&&(this._draft=this._draftFromEvent(this.event)),this._error="")}_blankDraft(){return{id:null,type:"birthday",title:"",date:new Date().toISOString().slice(0,10),personIds:[],recurring:!0,notes:"",visibility:"family"}}_draftFromEvent(e){return e?{id:e.id??null,type:e.type??"birthday",title:e.title??"",date:e.date??new Date().toISOString().slice(0,10),personIds:Array.isArray(e.personIds)?[...e.personIds]:[],recurring:e.recurring??!0,notes:e.notes??"",visibility:e.visibility??"family"}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_toggleType(e){this._set("type",e)}_togglePerson(e){const t=this._draft.personIds.includes(e);this._set("personIds",t?this._draft.personIds.filter(i=>i!==e):[...this._draft.personIds,e])}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give it a title.";return}if(!e.date){this._error="Pick a date.";return}if(!this.familyId){this._error="No family yet.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,title:e.title.trim(),notes:e.notes.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this event? This can't be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return n``;const e=this._draft,t=!!e.id;return n`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>${t?"Edit event":"New event"}</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <div class="field">
            <label>Type</label>
            <div class="seg">
              ${[{v:"birthday",label:"Birthday"},{v:"anniversary",label:"Anniversary"},{v:"custom",label:"Other"}].map(i=>n`
                  <button
                    class=${e.type===i.v?"active":""}
                    @click=${()=>this._toggleType(i.v)}
                  >
                    ${i.label}
                  </button>
                `)}
            </div>
          </div>

          <div class="row-2">
            <div class="field">
              <label>Title</label>
              <input
                type="text"
                placeholder=${e.type==="birthday"?"e.g. Mum’s birthday":e.type==="anniversary"?"e.g. Mum & Dad’s anniversary":"e.g. School play"}
                .value=${e.title}
                @input=${i=>this._set("title",i.target.value)}
              />
            </div>
            <div class="field">
              <label>Date</label>
              <input
                type="date"
                .value=${e.date}
                @input=${i=>this._set("date",i.target.value)}
              />
            </div>
          </div>

          <div class="field">
            <div
              class="toggle-row ${e.recurring?"on":""}"
              @click=${()=>this._set("recurring",!e.recurring)}
            >
              <div class="body">
                <div class="name">Recurs every year</div>
                <div class="desc">
                  ${e.recurring?`Shows up on ${this._monthDay(e.date)} every year.`:"One-time event on that specific date only."}
                </div>
              </div>
              <div class="toggle-switch"></div>
            </div>
          </div>

          ${this.members.length>0?n`
                <div class="field">
                  <label>Who is this about</label>
                  <div class="people">
                    ${this.members.map(i=>n`
                        <div
                          class="person-chip ${e.personIds.includes(i.uid)?"on":""}"
                          @click=${()=>this._togglePerson(i.uid)}
                        >
                          <member-chip
                            .name=${i.displayName}
                            .photo=${i.photoURL??""}
                            .hue=${i.hue}
                            size="22"
                          ></member-chip>
                          ${i.displayName}
                        </div>
                      `)}
                  </div>
                </div>
              `:""}

          <div class="field">
            <label>Visibility</label>
            <div class="seg">
              ${["personal","family","extended"].map(i=>n`
                  <button
                    class=${e.visibility===i?"active":""}
                    @click=${()=>this._set("visibility",i)}
                  >
                    ${i==="personal"?"Just Me":i==="family"?"Participants":"Everyone"}
                  </button>
                `)}
            </div>
          </div>

          <div class="field">
            <label>Notes</label>
            <textarea
              placeholder="Gift ideas, card text, who's bringing what…"
              .value=${e.notes}
              @input=${i=>this._set("notes",i.target.value)}
            ></textarea>
          </div>

          ${this._error?n`<div class="error">${this._error}</div>`:""}

          <div class="actions">
            ${t?n`<button class="delete-btn" @click=${this._onDelete} ?disabled=${this.busy}>
                  Delete
                </button>`:""}
            <div class="spacer"></div>
            <glass-button variant="ghost" @click=${this._onCancel} ?disabled=${this.busy}>
              Cancel
            </glass-button>
            <glass-button variant="primary" @click=${this._onSave} ?disabled=${this.busy}>
              ${this.busy?"Saving…":t?"Save changes":"Add event"}
            </glass-button>
          </div>
        </glass-panel>
      </div>
    `}_monthDay(e){if(!e)return"";const t=S(e);return!t||Number.isNaN(t.getTime())?"":t.toLocaleString("en-GB",{day:"numeric",month:"long"})}}_(ze,"properties",{open:{type:Boolean,reflect:!0},event:{type:Object},members:{type:Array},familyId:{type:String},busy:{type:Boolean},_draft:{state:!0},_error:{state:!0}}),_(ze,"styles",T`
    * { box-sizing: border-box; }
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding: 6vh 24px;
      overflow-y: auto;
    }
    :host([open]) {
      display: flex;
    }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(20, 12, 6, 0.55);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: -1;
    }
    .sheet {
      position: relative;
      width: 100%;
      max-width: 620px;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .close {
      background: transparent;
      border: 1px solid var(--glass-border);
      width: 32px;
      height: 32px;
      border-radius: 999px;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 18px;
    }
    .close:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .field { margin-bottom: 14px; min-width: 0; }
    label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: -0.005em;
      margin-bottom: 6px;
    }
    input[type='text'],
    input[type='date'],
    textarea {
      width: 100%;
      min-width: 0;
      background: var(--field-bg);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-input);
      padding: 11px 14px;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 16px;
      transition: border-color 200ms ease, background 200ms ease;
    }
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--terracotta);
      background: var(--glass-fill-strong);
    }
    textarea { min-height: 60px; resize: vertical; }
    .row-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    @media (max-width: 520px) {
      .row-2 { grid-template-columns: 1fr; gap: 0; }
    }
    .seg {
      display: inline-flex;
      padding: 3px;
      gap: 2px;
      background: var(--field-bg);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-input);
    }
    .seg button {
      background: transparent;
      color: var(--text-secondary);
      border: none;
      padding: 7px 14px;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      border-radius: calc(var(--radius-input) - 4px);
      cursor: pointer;
    }
    .seg button.active {
      background: var(--sand-warm);
      color: var(--charcoal);
      font-weight: 600;
    }
    .people {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .person-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 12px 5px 5px;
      background: var(--field-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-pill);
      cursor: pointer;
      font-size: 13px;
      color: var(--text-secondary);
    }
    .person-chip:hover {
      border-color: var(--glass-border-strong);
      color: var(--text-primary);
    }
    /* Selected = teal, matching the Activity editor's attendee chips. */
    .person-chip.on {
      background: rgba(61, 155, 143, 0.18);
      border-color: rgba(61, 155, 143, 0.5);
      color: var(--text-primary);
    }
    .toggle-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      background: var(--field-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-input);
      cursor: pointer;
      user-select: none;
    }
    .toggle-row .body {
      flex: 1;
    }
    .toggle-row .name {
      font-size: 14px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .toggle-row .desc {
      font-size: 12.5px;
      color: var(--text-tertiary);
      margin-top: 2px;
      line-height: 1.5;
    }
    .toggle-switch {
      width: 38px;
      height: 22px;
      border-radius: 999px;
      background: rgba(255, 248, 235, 0.18);
      position: relative;
      transition: background 200ms ease;
      flex-shrink: 0;
    }
    .toggle-switch::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: #fff;
      transition: transform 200ms ease;
    }
    .toggle-row.on .toggle-switch {
      background: var(--teal-pebble);
    }
    .toggle-row.on .toggle-switch::after {
      transform: translateX(16px);
    }
    .actions {
      display: flex;
      gap: 10px;
      margin-top: 22px;
      flex-wrap: wrap;
    }
    .spacer { flex: 1; }
    .delete-btn {
      background: transparent;
      color: var(--rose-soft);
      border: 1px solid rgba(201, 138, 138, 0.35);
      padding: 11px 18px;
      border-radius: var(--radius-pill);
      cursor: pointer;
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 14px;
    }
    .delete-btn:hover {
      background: rgba(201, 138, 138, 0.12);
      border-color: rgba(201, 138, 138, 0.5);
    }
    .error {
      color: var(--rose-soft);
      font-size: 13px;
      margin-top: 10px;
    }
    .hint {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-top: 6px;
      line-height: 1.4;
    }
  `);customElements.define("event-form",ze);class Te extends z{constructor(){super(),this.immediate=[],this.extended=[]}_self(){return(this.immediate??[]).find(e=>e.role==="self"||e.role==="self-extended")}_family(){return(this.immediate??[]).filter(e=>e.role==="co-parent"||e.role==="child")}_connections(){return this.extended??[]}_pos(e,t,i,a){if(t<=0)return"left:50%;top:50%;";const r=(a+e/t*360)*(Math.PI/180),s=50+i*Math.cos(r),o=50+i*Math.sin(r);return`left:${s}%;top:${o}%;`}_node(e,t,i){const a=(e.displayName??"").split(/\s+/)[0]||e.displayName||"";return n`
      <div class="node" style=${i}>
        <member-chip
          .name=${e.displayName??""}
          .photo=${e.photoURL??""}
          .hue=${e.hue??200}
          size=${t}
        ></member-chip>
        <span class="cap">${a}</span>
      </div>
    `}render(){const e=this._self(),t=this._family(),i=this._connections(),a=-90+180/Math.max(1,t.length);return n`
      <div class="stage">
        <div class="disc">
          <div class="ring connections"></div>
          <div class="ring family"></div>

          ${i.map((r,s)=>this._node(r,36,this._pos(s,i.length,37,-90)))}
          ${t.map((r,s)=>this._node(r,36,this._pos(s,t.length,19,a)))}

          <div class="you">
            <div class="ringwrap">
              <member-chip
                .name=${(e==null?void 0:e.displayName)??"You"}
                .photo=${(e==null?void 0:e.photoURL)??""}
                .hue=${(e==null?void 0:e.hue)??198}
                size="36"
              ></member-chip>
            </div>
            <span class="cap">You</span>
          </div>
        </div>
      </div>
    `}}_(Te,"properties",{immediate:{type:Array},extended:{type:Array}}),_(Te,"styles",T`
    * {
      box-sizing: border-box;
    }
    :host {
      display: block;
    }
    /* 15% shorter than wide — trims the dead space above/below the
       rings. The circle itself stays full-size: the square .disc
       (sized by WIDTH) holds the rings/avatars and is centred in
       the shorter stage, overflowing symmetrically into the
       surrounding glass-panel padding (overflow visible).
       IMPORTANT — do not use backticks anywhere inside this css
       template, not even in comments: JS parses the template as
       text and a backtick terminates it (broke the Portal once
       2026-05-19; see flat-family-model-plan.md). */
    .stage {
      position: relative;
      width: 100%;
      max-width: 340px;
      margin: 0 auto;
      aspect-ratio: 1 / 0.85;
    }
    .disc {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      aspect-ratio: 1 / 1;
    }
    .ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      pointer-events: none;
    }
    .ring.connections {
      width: 92%;
      /* Tier 3 swapped from purple → terracotta (#c67b5c → rgb 198,
         123, 92) to match the brand. Opacities reduced slightly now
         that the donut mask prevents color-mixing with the inner
         ring. */
      border: 1.5px dashed rgba(198, 123, 92, 0.6);
      background: rgba(198, 123, 92, 0.32);
      /* Donut shape — mask out the inner area where the family ring
         sits so the two rings don't color-mix. The family ring is
         54% of the disc; the connections ring is 92%, so the family
         radius as a fraction of the connections radius is
         54/92 ≈ 0.587. With closest-side (50% of element width as the
         100% reference), the family radius is 58.7% of that gradient
         radius. A 4% gradient transition smooths the edge. */
      -webkit-mask-image: radial-gradient(
        circle closest-side,
        transparent 58%,
        #000 62%
      );
      mask-image: radial-gradient(
        circle closest-side,
        transparent 58%,
        #000 62%
      );
    }
    .ring.family {
      width: 54%;
      /* Opacity reduced slightly alongside the Tier 3 change. */
      border: 1.5px dashed rgba(31, 92, 84, 0.65);
      background: rgba(31, 92, 84, 0.35);
    }
    .node {
      position: absolute;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      width: 78px;
    }
    .node .cap {
      font-size: 10.5px;
      font-weight: 500;
      color: var(--text-secondary);
      max-width: 78px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
    }
    .you {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
    .you .ringwrap {
      border-radius: 999px;
      padding: 3px;
      background: var(--dusty-blue);
      box-shadow: 0 6px 18px rgba(107, 154, 196, 0.4);
    }
    .you .cap {
      font-size: 11px;
      font-weight: 600;
      color: var(--text-secondary);
    }
  `);customElements.define("family-circle",Te);let X=null,rt=null;function di(){return X||(X=document.createElement("div"),X.id="cairn-toast-host",Object.assign(X.style,{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",zIndex:9999,pointerEvents:"none"}),document.body.appendChild(X),X)}function y(g,{duration:e=2800}={}){const t=di();clearTimeout(rt),t.innerHTML="";const i=document.createElement("div");i.textContent=g,Object.assign(i.style,{padding:"12px 18px",background:"rgba(20, 12, 6, 0.78)",backdropFilter:"blur(24px) saturate(180%)",webkitBackdropFilter:"blur(24px) saturate(180%)",border:"1px solid rgba(255, 248, 235, 0.22)",borderRadius:"999px",color:"rgba(255, 248, 235, 0.96)",fontFamily:"'Inter', system-ui, sans-serif",fontSize:"13.5px",fontWeight:"500",letterSpacing:"0.005em",boxShadow:"0 12px 32px rgba(20, 12, 6, 0.45)",pointerEvents:"auto",transform:"translateY(8px)",opacity:"0",transition:"opacity 200ms ease, transform 240ms ease"}),t.appendChild(i),requestAnimationFrame(()=>{i.style.opacity="1",i.style.transform="translateY(0)"}),rt=setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(8px)",setTimeout(()=>i.remove(),260)},e)}class De extends z{constructor(){super(),this.open=!1,this.family=null,this.immediate=[],this.extended=[],this.canRemove=!1,this._busy=!1,this._newGroupName="",this._editingGroupId=null,this._removingUid=null,this._addingChild=!1,this._childName="",this._childDob="",this._savingChild=!1,this._editingLabelUid=null,this._labelDraft="",this._grantTargetUid=null,this._grantingUid=null}_toggleGrantPicker(e){this._editingLabelUid===e&&(this._editingLabelUid=null),this._grantTargetUid=this._grantTargetUid===e?null:e}async _grantReadOnly(e,t){if(!this._grantingUid){this._grantingUid=e;try{await f.grantChildViewerDirectly(e),y(`Read-only access granted to ${t}.`),this._grantTargetUid=null}catch(i){console.error("grantChildViewerDirectly failed:",i),y(`Couldn't grant access: ${i.code??i.message}`,{duration:5e3})}finally{this._grantingUid=null}}}async _grantParent(e,t){if(!this._grantingUid){this._grantingUid=e;try{const i=await f.grantParentAccessForOwnChildren(e);if(!i||i.length===0)y("No children to grant access to — add a child first, then try again.",{duration:5e3});else if(i.length===1)y(`${t} is now a parent of ${i[0]}.`);else if(i.length===2)y(`${t} is now a parent of ${i[0]} & ${i[1]}.`);else{const a=i.slice(0,-1).join(", "),r=i[i.length-1];y(`${t} is now a parent of ${a} & ${r}.`)}this._grantTargetUid=null}catch(i){console.error("grantParentAccessForOwnChildren failed:",i),y(`Couldn't grant access: ${i.code??i.message}`,{duration:5e3})}finally{this._grantingUid=null}}}_memberLabel(e){var i,a;const t=(a=(i=f.state.user)==null?void 0:i.memberLabels)==null?void 0:a[e];return t&&t.trim()?t.trim():""}_startLabelEdit(e){this._editingLabelUid=e,this._labelDraft=this._memberLabel(e)}async _saveLabel(e){const t=this._labelDraft;this._editingLabelUid=null;try{await f.setMemberLabel(e,t)}catch(i){y(`Couldn't save label: ${i.code??i.message}`,{duration:4e3})}this.requestUpdate()}_toggleAddChild(){this._addingChild=!this._addingChild,this._addingChild||(this._childName="",this._childDob="")}async _saveChild(){const e=(this._childName??"").trim();if(!e||this._savingChild)return;if(!this._childDob){y("Add your child's date of birth.");return}const t=new Date(`${this._childDob}T00:00:00`);if(Number.isNaN(t.getTime())){y("That date of birth doesn't look right.");return}const i=f.familyId;if(!i){y("Can't add a child — no family yet.");return}this._savingChild=!0;try{await f.createChild(i,{name:e,dateOfBirth:t}),y(`${e} added.`),this._childName="",this._childDob="",this._addingChild=!1}catch(a){console.error("Add child failed:",a),y((a==null?void 0:a.code)==="permission-denied"?"Only a parent in this family can add a child.":`Couldn't add the child: ${(a==null?void 0:a.message)??"try again"}`,{duration:5e3})}finally{this._savingChild=!1}}_onCancel(){this.dispatchEvent(new Event("cancel"))}async _createSubGroup(){const e=this._newGroupName.trim();if(!(!e||this._busy)){this._busy=!0;try{const t=await f.saveSubGroup({name:e,memberIds:[]});this._newGroupName="",this._editingGroupId=t,y(`Sub-group "${e}" created.`)}catch(t){y(`Couldn't create: ${t.code??t.message}`,{duration:5e3})}finally{this._busy=!1}}}async _toggleSubGroupMember(e,t){var s,o;const i=(o=(s=this.family)==null?void 0:s.subGroups)==null?void 0:o[e];if(!i)return;const a=i.memberIds??[],r=a.includes(t)?a.filter(d=>d!==t):[...a,t];try{await f.saveSubGroup({id:e,name:i.name,memberIds:r})}catch(d){y(`Couldn't update: ${d.code??d.message}`,{duration:5e3})}}async _deleteSubGroup(e,t){if(confirm(`Delete the "${t}" sub-group?`))try{await f.deleteSubGroup(e),this._editingGroupId===e&&(this._editingGroupId=null),y("Sub-group deleted.")}catch(i){y(`Couldn't delete: ${i.code??i.message}`,{duration:5e3})}}async _removeMember(e){var i;if(this._removingUid)return;const t=e.displayName||"this person";if(confirm(`Remove ${t} from ${((i=this.family)==null?void 0:i.name)??"your family"}?

They'll lose access to shared trips, celebrations and any read-only child access. You can re-invite them anytime with the invite code.`)){this._removingUid=e.uid;try{await f.removeCairnMember(e.uid),y(`${t} removed.`)}catch(a){y(`Couldn't remove: ${a.code??a.message}`,{duration:5e3})}finally{this._removingUid=null}}}async _regenerate(){if(!this._busy){this._busy=!0;try{await f.regenerateCairnInviteCode(),y("New invite code generated.")}catch(e){console.error(e),y(`Couldn't generate code: ${e.code??e.message}`,{duration:5e3})}finally{this._busy=!1}}}_inviteLink(e){return`${window.location.origin}/portal/?join=${e}`}async _copyLink(){var t;const e=(t=this.family)==null?void 0:t.cairnInviteCode;if(e)try{await navigator.clipboard.writeText(this._inviteLink(e)),y("Invite link copied to clipboard.")}catch{y("Could not copy — try long-press the link instead.")}}async _share(){var i,a;const e=(i=this.family)==null?void 0:i.cairnInviteCode;if(!e)return;const t=this._inviteLink(e);if(navigator.share)try{await navigator.share({title:"Join my family on PebblePath",text:`Join ${((a=this.family)==null?void 0:a.name)??"our family"} on PebblePath — our shared family calendar.`,url:t})}catch{}else this._copyLink()}_expiryText(e){if(!e)return"";const t=e.toDate?e.toDate():new Date(e),a=Math.max(0,Math.round((t-new Date)/(1440*60*1e3)));return a===0?"Expires today":a===1?"Expires tomorrow":`Expires in ${a} days`}render(){var a,r;if(!this.open)return n``;const e=(a=this.family)==null?void 0:a.cairnInviteCode,t=(r=this.family)==null?void 0:r.cairnInviteCodeExpiresAt,i=t&&(t.toDate?t.toDate():new Date(t))<new Date;return n`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Manage members</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <h3>My family · ${this.immediate.length}</h3>
          ${this.immediate.length===0?n`<div class="empty">No one in your family yet.</div>`:this.immediate.map(s=>n`
                  <div class="member-row">
                    <member-chip
                      .name=${s.displayName}
                      .photo=${s.photoURL??""}
                      .hue=${s.hue}
                      size="36"
                    ></member-chip>
                    <div class="body">
                      <div class="name">${s.displayName}</div>
                      <div class="role">
                        ${s.role==="self"?"You":s.role==="co-parent"?"Co-parent":s.role==="child"?"Child":"Family"}
                      </div>
                    </div>
                  </div>
                `)}

          <h3>My connections · ${this.extended.length}</h3>
          ${this.extended.length===0?n`<div class="empty">
                Anyone you invite (grandparents, aunts, uncles, etc.) will appear here.
                They can see trips and celebrations but not PebblePath child data.
              </div>`:this.extended.map(s=>{const o=s.role==="co-parent"||s.role==="child",d=s.role==="co-parent"?"Co-parent":"Child";return n`
                  <div class="member-row">
                    <member-chip
                      .name=${s.displayName}
                      .photo=${s.photoURL??""}
                      .hue=${s.hue}
                      size="36"
                    ></member-chip>
                    <div class="body">
                      <div class="name">${s.displayName}</div>
                      ${o?n`<div class="role">${d}</div>`:this._editingLabelUid===s.uid?n`<input
                            class="label-input"
                            .value=${this._labelDraft}
                            placeholder="Connection"
                            @input=${l=>this._labelDraft=l.target.value}
                            @keydown=${l=>{l.key==="Enter"&&this._saveLabel(s.uid),l.key==="Escape"&&(this._editingLabelUid=null)}}
                            @blur=${()=>this._saveLabel(s.uid)}
                          />`:n`<button
                            class="role-edit"
                            title="Set a private label only you can see"
                            @click=${()=>this._startLabelEdit(s.uid)}
                          >
                            ${this._memberLabel(s.uid)||"Connection"}<span
                              class="pen"
                              >✎</span
                            >
                          </button>`}
                    </div>
                    ${this.canRemove&&!o?n`<button
                          class="grant-btn"
                          @click=${()=>this._toggleGrantPicker(s.uid)}
                          title="Grant ${s.displayName} access to child data"
                        >
                          ${this._grantTargetUid===s.uid?"Cancel":"Grant access"}
                        </button>`:""}
                    ${this.canRemove&&!o?n`<button
                          class="remove-btn"
                          ?disabled=${this._removingUid===s.uid}
                          @click=${()=>this._removeMember(s)}
                        >
                          ${this._removingUid===s.uid?"Removing…":"Remove"}
                        </button>`:""}
                  </div>
                  ${this._grantTargetUid===s.uid?n`<div class="grant-picker">
                        <div class="grant-picker-head">
                          <b>Pick a level for ${s.displayName}</b>
                          <span class="grant-picker-sub"
                            >Tap one — it takes effect immediately. You can revoke read-only anytime in Settings.</span
                          >
                        </div>
                        <button
                          class="tier-card"
                          ?disabled=${this._grantingUid===s.uid}
                          @click=${()=>this._grantReadOnly(s.uid,s.displayName)}
                        >
                          <span class="tier-icon" style="background:rgba(61,155,143,.14);color:var(--ink-teal);">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/></svg>
                          </span>
                          <span class="tier-text">
                            <b>Read-only access</b>
                            <span
                              >See milestones, growth insights, and Pebble's
                              notes. Can't mark milestones, edit, or use
                              Pebble.</span
                            >
                          </span>
                          <span class="tier-chev">›</span>
                        </button>
                        <button
                          class="tier-card"
                          ?disabled=${this._grantingUid===s.uid}
                          @click=${()=>this._grantParent(s.uid,s.displayName)}
                        >
                          <span class="tier-icon" style="background:rgba(201,138,138,.18);color:var(--ink-terracotta);">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3 2.5-5 6-5s6 2 6 5"/><path d="M14.5 20c0-2 2-3.5 4.5-3.5s4.5 1.5 4.5 3.5"/></svg>
                          </span>
                          <span class="tier-text">
                            <b>Parent or caregiver</b>
                            <span
                              >Becomes a parent of your children. Can mark
                              milestones, ask Pebble, edit child info, export
                              pediatrician PDF. Same access as you.</span
                            >
                          </span>
                          <span class="tier-chev">›</span>
                        </button>
                      </div>`:""}
                `})}

          ${""}

          <h3>Children</h3>
          ${this._addingChild?n`
                <div class="add-child-form">
                  <input
                    class="new-group-input"
                    type="text"
                    placeholder="Child's name"
                    .value=${this._childName}
                    @input=${s=>this._childName=s.target.value}
                    @keydown=${s=>{s.key==="Enter"&&this._saveChild()}}
                  />
                  <input
                    class="new-group-input"
                    type="date"
                    aria-label="Date of birth"
                    .value=${this._childDob}
                    @input=${s=>this._childDob=s.target.value}
                  />
                  <div class="add-child-actions">
                    <glass-button
                      variant="primary"
                      ?disabled=${this._savingChild||!this._childName.trim()||!this._childDob}
                      @click=${this._saveChild}
                    >
                      ${this._savingChild?"Adding…":"Add child"}
                    </glass-button>
                    <glass-button
                      variant="ghost"
                      ?disabled=${this._savingChild}
                      @click=${this._toggleAddChild}
                    >
                      Cancel
                    </glass-button>
                  </div>
                </div>
              `:n`
                <glass-button
                  variant="ghost"
                  full
                  @click=${this._toggleAddChild}
                >
                  + Add a child
                </glass-button>
              `}

          <h3>Connection invite code</h3>
          ${e&&!i?n`
                <div class="invite-box">
                  <div class="invite-code">${e}</div>
                  <div class="invite-meta">${this._expiryText(t)} · share this code with your connections</div>
                  <div class="invite-actions">
                    <glass-button variant="primary" @click=${this._share} ?disabled=${this._busy}>
                      Share invite
                    </glass-button>
                    <glass-button variant="ghost" @click=${this._copyLink} ?disabled=${this._busy}>
                      Copy link
                    </glass-button>
                    <glass-button variant="ghost" @click=${this._regenerate} ?disabled=${this._busy}>
                      Regenerate
                    </glass-button>
                  </div>
                </div>
              `:n`
                <div class="invite-empty">
                  ${i?"Your invite code has expired. Generate a new one to invite connections.":"No invite code yet. Generate one to invite people to connect with you."}
                  <br />
                  <glass-button variant="primary" @click=${this._regenerate} ?disabled=${this._busy}>
                    ${this._busy?"Generating…":"Generate invite code"}
                  </glass-button>
                </div>
              `}

          <div class="footer">
            <glass-button variant="ghost" @click=${this._onCancel}>Done</glass-button>
          </div>
        </glass-panel>
      </div>
    `}}_(De,"properties",{open:{type:Boolean,reflect:!0},family:{type:Object},immediate:{type:Array},extended:{type:Array},canRemove:{type:Boolean},_busy:{state:!0},_newGroupName:{state:!0},_editingGroupId:{state:!0},_removingUid:{state:!0},_addingChild:{state:!0},_childName:{state:!0},_childDob:{state:!0},_savingChild:{state:!0},_editingLabelUid:{state:!0},_labelDraft:{state:!0},_grantTargetUid:{state:!0},_grantingUid:{state:!0}}),_(De,"styles",T`
    * {
      box-sizing: border-box;
    }
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding: 6vh 24px;
      overflow-y: auto;
    }
    :host([open]) {
      display: flex;
    }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(20, 12, 6, 0.55);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: -1;
      animation: fadeIn 200ms ease;
    }
    .sheet {
      position: relative;
      width: 100%;
      max-width: 560px;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .close {
      background: transparent;
      border: 1px solid var(--glass-border);
      width: 32px;
      height: 32px;
      border-radius: 999px;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 18px;
    }
    .close:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    h3 {
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 600;
      letter-spacing: -0.005em;
      color: var(--text-primary);
      margin: 22px 0 12px;
    }
    h3:first-of-type {
      margin-top: 0;
    }
    .member-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 6px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.06);
      /* Phase 11 — the right-side pills (Grant access + Remove) need
         to wrap onto a second line on narrow viewports, otherwise
         they overlap the body column's name + label. Allow the row
         to flow vertically when content can't fit horizontally. */
      flex-wrap: wrap;
    }
    .member-row:last-child {
      border-bottom: none;
    }
    .member-row .body {
      flex: 1;
      /* Phase 11 — was min-width:0 (let body shrink to nothing).
         With the Grant access pill added at narrow viewports the
         body got squashed until its content overlapped the pills.
         Setting a sensible minimum forces the right-side pills onto
         a new wrapped line instead — see flex-wrap:wrap above. */
      /* prettier-ignore — never put backticks in CSS comments inside
         a Lit css tagged template; they terminate the template
         silently and only blow up at module-eval time (node --check
         catches it; Vite build does NOT). */
      min-width: 140px;
    }
    .member-row .name {
      font-size: 14.5px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .member-row .role {
      font-size: 12.5px;
      color: var(--text-tertiary);
      letter-spacing: -0.005em;
      margin-top: 2px;
    }
    .role-edit {
      margin-top: 2px;
      background: transparent;
      border: 1px dashed var(--glass-border);
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-size: 12.5px;
      padding: 2px 9px;
      border-radius: 999px;
      cursor: pointer;
      transition: all 150ms ease;
    }
    .role-edit:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .role-edit .pen {
      opacity: 0.55;
      margin-left: 5px;
      font-size: 11px;
    }
    .label-input {
      margin-top: 2px;
      width: 150px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border-strong);
      border-radius: 999px;
      padding: 3px 11px;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 12.5px;
    }
    .label-input:focus {
      outline: none;
      border-color: var(--dusty-blue);
    }
    .member-row .remove-btn {
      flex-shrink: 0;
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      padding: 5px 12px;
      border-radius: 999px;
      font-family: var(--font-body);
      font-size: 12.5px;
      cursor: pointer;
      transition: all 160ms ease;
    }
    .member-row .remove-btn:hover {
      color: var(--rose-soft);
      border-color: rgba(201, 138, 138, 0.5);
      background: rgba(201, 138, 138, 0.08);
    }
    .member-row .remove-btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    /* Phase 11 — "Grant access" pill on connection rows + the inline
       tier-picker that expands beneath the row when tapped. Inline
       (not a nested modal) so the tier-tap stays close to the row
       it acts on; mirrors the iOS sheet's two-card vertical stack. */
    .member-row .grant-btn {
      flex-shrink: 0;
      background: rgba(61, 155, 143, 0.14);
      border: 1px solid rgba(61, 155, 143, 0.4);
      color: var(--ink-teal, var(--text-primary));
      padding: 5px 12px;
      border-radius: 999px;
      font-family: var(--font-body);
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      transition: all 160ms ease;
    }
    .member-row .grant-btn:hover {
      background: rgba(61, 155, 143, 0.22);
      border-color: rgba(61, 155, 143, 0.6);
    }
    .grant-picker {
      /* prettier-ignore — Lit css tagged-template gotcha: backticks
         here would terminate the template even inside a CSS comment.
         Renders as a sibling block AFTER its .member-row (Lit map
         emits both; parent is a flex column so the picker stacks
         naturally below). Indented to align with the row's name
         column (avatar = 36px + 12px gap = 48px). */
      margin: 4px 0 14px 48px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-right: 4px;
    }
    .grant-picker-head {
      display: flex;
      flex-direction: column;
      gap: 3px;
      padding: 0 4px 4px;
    }
    .grant-picker-head b {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-primary);
    }
    .grant-picker-sub {
      font-size: 11.5px;
      color: var(--text-tertiary);
    }
    .tier-card {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border-radius: var(--radius-input);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      font-family: var(--font-body);
      text-align: left;
      cursor: pointer;
      transition: all 160ms ease;
    }
    .tier-card:hover {
      background: var(--glass-fill-strong);
      border-color: var(--glass-border-strong);
    }
    .tier-card:disabled {
      opacity: 0.55;
      cursor: default;
    }
    .tier-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .tier-icon svg {
      width: 18px;
      height: 18px;
    }
    .tier-text {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .tier-text b {
      font-size: 13.5px;
      font-weight: 600;
    }
    .tier-text span {
      font-size: 11.5px;
      color: var(--text-secondary);
      line-height: 1.4;
    }
    .tier-chev {
      flex-shrink: 0;
      color: var(--text-tertiary);
      font-size: 18px;
      line-height: 1;
    }
    .empty {
      color: var(--text-tertiary);
      font-size: 13.5px;
      padding: 12px 0;
      line-height: 1.5;
    }
    .invite-box {
      margin-top: 8px;
      padding: 16px;
      border-radius: var(--radius-tile);
      background: rgba(61, 155, 143, 0.1);
      border: 1px solid rgba(61, 155, 143, 0.28);
    }
    .invite-code {
      font-family: 'SF Mono', ui-monospace, monospace;
      font-size: 22px;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: var(--text-primary);
      margin-bottom: 6px;
    }
    .invite-meta {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-bottom: 14px;
    }
    .invite-actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .invite-actions glass-button {
      flex: 1;
      min-width: 140px;
    }
    .invite-empty {
      padding: 16px;
      border-radius: var(--radius-tile);
      background: rgba(255, 248, 235, 0.04);
      border: 1px dashed rgba(255, 248, 235, 0.18);
      text-align: center;
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.55;
    }
    .invite-empty glass-button {
      margin-top: 12px;
    }
    .footer {
      margin-top: 24px;
      display: flex;
      justify-content: flex-end;
    }

    /* Sub-groups */
    .subgroup {
      padding: 12px 14px;
      border-radius: var(--radius-tile);
      background: rgba(255, 248, 235, 0.04);
      border: 1px solid rgba(255, 248, 235, 0.1);
      margin-bottom: 10px;
    }
    .subgroup-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 8px;
    }
    .subgroup-name {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 14.5px;
      letter-spacing: -0.005em;
    }
    .subgroup-actions {
      display: flex;
      gap: 6px;
    }
    .icon-btn {
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      width: 28px;
      height: 28px;
      border-radius: 999px;
      cursor: pointer;
      font-size: 13px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .icon-btn:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .icon-btn.danger:hover {
      color: var(--rose-soft);
      border-color: rgba(201, 138, 138, 0.5);
    }
    .chip-toggle {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 4px 11px 4px 4px;
      border-radius: 999px;
      background: rgba(255, 248, 235, 0.05);
      border: 1px solid rgba(255, 248, 235, 0.12);
      font-size: 12.5px;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 160ms ease;
      margin: 0 6px 6px 0;
    }
    .chip-toggle:hover {
      color: var(--text-primary);
    }
    .chip-toggle.on {
      background: rgba(61, 155, 143, 0.18);
      border-color: rgba(61, 155, 143, 0.45);
      color: var(--text-primary);
    }
    .new-group-input {
      width: 100%;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.18);
      border-radius: var(--radius-input);
      padding: 9px 12px;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 14.5px;
    }
    .new-group-input:focus {
      outline: none;
      border-color: var(--terracotta);
    }
    .add-group-row {
      display: flex;
      gap: 8px;
      margin-top: 10px;
    }
    .add-child-form {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 6px;
    }
    .add-child-actions {
      display: flex;
      gap: 8px;
    }
    .add-child-actions glass-button {
      flex: 1;
    }
  `);customElements.define("manage-members-modal",De);const ci=[[/(^|\.)airbnb\./,"Airbnb"],[/(^|\.)(vrbo|homeaway)\./,"Vrbo"],[/(^|\.)booking\./,"Booking.com"],[/(^|\.)expedia\./,"Expedia"],[/(^|\.)hipcamp\./,"Hipcamp"],[/(^|\.)tripadvisor\./,"Tripadvisor"],[/(^|\.)hotels\./,"Hotels.com"],[/(^|\.)(marriott|hilton|hyatt|ihg|accor|fourseasons)\./,"Hotel"],[/(^|\.)plumguide\./,"Plum Guide"]];function Ct(g){const e=(g&&g.lodgingUrl?String(g.lodgingUrl):"").trim();if(e){let t="";try{t=new URL(e.includes("://")?e:`https://${e}`).hostname}catch{t=""}if(t){const i=t.toLowerCase();for(const[a,r]of ci)if(a.test(i))return r}return"Other"}return g&&g.lodgingHost?"Other":""}function pi(g,e){const t=[];if(t.push(g.title||"Portal activity"),g.location&&t.push(g.location),g.start&&g.end){const a=S(g.start),r=S(g.end),s=a.toLocaleString("en-GB",{day:"numeric",month:"short"}),o=r.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});t.push(g.start===g.end?o:`${s} – ${o}`)}if((g.lodgingUrl||g.lodgingHost||g.lodgingTitle)&&t.push(`Lodging: ${[Ct(g),g.lodgingTitle].filter(Boolean).join(" — ")}`),g.flightNumber||g.flightAirline||g.flightDepartAirport){const a=[],r=[g.flightAirline,g.flightNumber].filter(Boolean).join(" ");if(r&&a.push(r),g.flightDepartAirport&&g.flightArriveAirport&&a.push(`${g.flightDepartAirport.toUpperCase()} → ${g.flightArriveAirport.toUpperCase()}`),g.flightDepartTime){const s=new Date(g.flightDepartTime);Number.isNaN(s.getTime())||a.push(`Depart: ${s.toLocaleString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}`)}a.length&&t.push(`Flight: ${a.join(" · ")}`)}const i=(g.attendees??[]).map(a=>{var r;return(r=e.get(a))==null?void 0:r.displayName}).filter(Boolean);return i.length&&t.push(`With: ${i.join(", ")}`),g.notes&&t.push("",g.notes),t.push("","Shared from Portal · pebblepath.ai/portal"),t.join(`
`)}class Fe extends z{constructor(){super(),this.trip=null,this.members=[],this._resizeObs=null}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<"u"&&(this._resizeObs=new ResizeObserver(()=>this._fitTitle()))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._resizeObs)==null||e.disconnect()}updated(){if(this._resizeObs&&this.renderRoot){const e=this.renderRoot.querySelector("article");e&&!e._observed&&(this._resizeObs.observe(e),e._observed=!0)}this._fitTitle()}_fitTitle(){if(!this.renderRoot)return;const e=this.renderRoot.querySelector("h3");if(!e)return;e.style.fontSize="";let t=19;for(e.style.fontSize=`${t}px`;e.scrollWidth>e.clientWidth+1&&t>13;)t-=.5,e.style.fontSize=`${t}px`}_fmtDates(e,t){const i=S(e),a=S(t);if(!i||!a)return"";const r=i.toLocaleString("en-GB",{month:"short"}),s=a.toLocaleString("en-GB",{month:"short"});return r===s&&i.getFullYear()===a.getFullYear()?`${i.getDate()} – ${a.getDate()} ${r}`:`${i.getDate()} ${r} – ${a.getDate()} ${s}`}async _onShare(e,t,i){i.stopPropagation();const a=pi(e,t);if(navigator.share)try{await navigator.share({title:`Portal — ${e.title??"activity"}`,text:a})}catch{}else try{await navigator.clipboard.writeText(a),y("Itinerary copied to clipboard.")}catch{y("Could not copy — try again from a browser tab.")}}render(){const e=this.trip;if(!e)return n``;const t=e.previewImage&&String(e.previewImage).trim()||e.coverImage,i=t?`background-image: url("${t}");`:`background: ${$t(e)};`,a=t?"cover has-image":"cover",r=new Map(this.members.map(l=>[l.uid,l])),s=(e.attendees??[]).map(l=>r.get(l)).filter(Boolean),o=s.slice(0,4),d=Math.max(0,s.length-o.length);return n`
      <article
        tabindex="0"
        aria-label="${e.title} — open day plan"
        @click=${()=>this.dispatchEvent(new CustomEvent("open-planner",{detail:e,bubbles:!0,composed:!0}))}
        @keydown=${l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.dispatchEvent(new CustomEvent("open-planner",{detail:e,bubbles:!0,composed:!0})))}}
      >
        <div class="${a}" style=${i}>
          <div class="dates">${this._fmtDates(e.start,e.end)}</div>
        </div>
        <div class="body">
          <h3>${e.title}</h3>
          <div class="location">${e.location||"—"}</div>
          ${e.lodgingUrl||e.lodgingHost?(()=>{const l=Ct(e);return n`<div class="lodging">
                  ${l?n`<span class="pill">${l}</span>`:""}
                  <span class="lodging-text">${e.lodgingTitle||e.lodgingUrl||""}</span>
                </div>`})():""}
          ${e.flightNumber||e.flightDepartAirport?n`<div class="flight-info">
                <span class="plane">✈</span>
                <span>${[e.flightAirline,e.flightNumber].filter(Boolean).join(" ")}</span>
                ${e.flightDepartAirport&&e.flightArriveAirport?n`<span class="route">${e.flightDepartAirport.toUpperCase()} → ${e.flightArriveAirport.toUpperCase()}</span>`:""}
              </div>`:""}
          <div class="footer">
            <div class="attendees">
              ${o.map(l=>n`<member-chip
                  .name=${l.displayName}
                  .photo=${l.photoURL??""}
                  .hue=${l.hue}
                  size="28"
                ></member-chip>`)}
              ${d>0?n`<span class="more">+${d}</span>`:""}
            </div>
            <div class="actions">
              <button
                class="icon-btn"
                title="Edit trip"
                aria-label="Edit trip details"
                @click=${l=>{l.stopPropagation(),this.dispatchEvent(new CustomEvent("edit-trip",{detail:e,bubbles:!0,composed:!0}))}}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
                </svg>
              </button>
              <button
                class="icon-btn"
                title="Share itinerary"
                aria-label="Share itinerary"
                @click=${l=>this._onShare(e,r,l)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>
    `}}_(Fe,"properties",{trip:{type:Object},members:{type:Array}}),_(Fe,"styles",T`
    :host {
      display: block;
    }
    article {
      position: relative;
      border-radius: var(--radius-stone);
      overflow: hidden;
      background: var(--glass-fill);
      backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      border: 1px solid var(--glass-border);
      box-shadow: var(--glass-shadow);
      transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
      cursor: pointer;
    }
    article:hover {
      transform: translateY(-3px);
      box-shadow: var(--glass-shadow-lifted);
      border-color: var(--glass-border-strong);
    }
    .cover {
      aspect-ratio: 16 / 10;
      position: relative;
      background-size: cover;
      background-position: center;
    }
    /* When a real lodging photo is attached, give the cover more
       vertical real estate + a stronger bottom vignette so the
       overlay chips stay legible against any image. */
    .cover.has-image {
      aspect-ratio: 3 / 2;
    }
    .cover::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(20, 12, 6, 0.55) 100%);
    }
    .cover.has-image::after {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0) 40%,
        rgba(20, 12, 6, 0.72) 100%
      );
    }
    article:hover .cover.has-image {
      /* Subtle zoom on hover gives the photo a polaroid-like presence */
      background-size: 105%;
      transition: background-size 360ms ease;
    }
    .visibility {
      position: absolute;
      top: 12px;
      left: 12px;
      padding: 4px 10px;
      border-radius: var(--radius-pill);
      background: rgba(20, 12, 6, 0.35);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(255, 248, 235, 0.22);
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-primary);
      z-index: 2;
    }
    .dates {
      position: absolute;
      bottom: 12px;
      right: 12px;
      padding: 6px 12px;
      border-radius: var(--radius-pill);
      background: rgba(255, 248, 235, 0.18);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(255, 248, 235, 0.32);
      font-size: 12px;
      font-weight: 600;
      /* Always white — the badge sits on a photo thumbnail, so it
         must not follow the theme (charcoal in light = unreadable
         on the image). The frosted light pill + white text reads on
         any cover. */
      color: #fff;
      z-index: 2;
    }
    .body {
      padding: 18px 20px 20px;
    }
    h3 {
      margin: 0 0 4px;
      font-family: var(--font-display);
      font-size: 19px;
      font-weight: 600;
      letter-spacing: -0.015em;
      white-space: nowrap;
      overflow: hidden;
    }
    .location {
      color: var(--text-secondary);
      font-size: 13px;
      margin-bottom: 14px;
    }
    .lodging {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-bottom: 14px;
      display: flex;
      align-items: flex-start;
      gap: 6px;
      min-width: 0;
    }
    .lodging .pill {
      padding: 2px 8px;
      border-radius: var(--radius-pill);
      background: rgba(255, 248, 235, 0.08);
      border: 1px solid rgba(255, 248, 235, 0.14);
      font-weight: 500;
      color: var(--text-secondary);
      flex-shrink: 0;
    }
    .lodging .lodging-text {
      flex: 1;
      min-width: 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.35;
    }
    .flight-info {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .flight-info .plane {
      color: var(--teal-pebble);
    }
    .flight-info .route {
      font-family: 'SF Mono', ui-monospace, monospace;
      font-size: 11.5px;
      letter-spacing: 0.04em;
      color: var(--text-secondary);
    }
    .attendees {
      display: flex;
      align-items: center;
    }
    .attendees member-chip {
      margin-right: -8px;
    }
    .attendees .more {
      margin-left: 4px;
      font-size: 12px;
      color: var(--text-tertiary);
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-top: 10px;
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .icon-btn {
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.14);
      color: var(--text-secondary);
      width: 32px;
      height: 32px;
      border-radius: 999px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      padding: 0;
      transition: color 200ms ease, border-color 200ms ease, background 200ms ease;
    }
    .icon-btn:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
      background: rgba(255, 248, 235, 0.1);
    }
    .icon-btn svg {
      width: 15px;
      height: 15px;
    }
  `);customElements.define("trip-card",Fe);class Ee extends z{constructor(){super(),this.open=!1,this.trips=[],this.members=[]}_onCancel(){this.dispatchEvent(new Event("cancel"))}_groupByYear(e){const t=[...e].sort((r,s)=>String(r.start).localeCompare(String(s.start))),i=new Date;i.setHours(0,0,0,0);const a=new Map;for(const r of t){if(!r.start)continue;const s=S(r.start),o=S(r.end);if(!s)continue;const d=s.getFullYear();a.has(d)||a.set(d,[]);const l=o?o<i:!1;a.get(d).push({trip:r,isPast:l})}return a}render(){var a;if(!this.open)return n``;const e=this._groupByYear(this.trips??[]),t=((a=this.trips)==null?void 0:a.length)??0,i=new Date().getFullYear();return n`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>All trips<span class="count">${t} ${t===1?"trip":"trips"}</span></h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>
          ${t===0?n`<div class="empty">
                No trips for this circle yet.<br />
                Close this and tap <strong>+ New trip</strong> to add one.
              </div>`:Array.from(e.entries()).map(([r,s])=>n`
                  <div class="year ${r===i?"current":""}">
                    ${r}
                  </div>
                  <div class="grid">
                    ${s.map(({trip:o,isPast:d})=>n`
                        <div class=${d?"past":""}>
                          <trip-card .trip=${o} .members=${this.members}></trip-card>
                        </div>
                      `)}
                  </div>
                `)}
        </glass-panel>
      </div>
    `}}_(Ee,"properties",{open:{type:Boolean,reflect:!0},trips:{type:Array},members:{type:Array}}),_(Ee,"styles",T`
    * { box-sizing: border-box; }
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding: 6vh 24px;
      overflow-y: auto;
    }
    :host([open]) { display: flex; }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(20, 12, 6, 0.55);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: -1;
    }
    .sheet {
      position: relative;
      width: 100%;
      max-width: 780px;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to   { transform: translateY(0); opacity: 1; }
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .count {
      color: var(--text-tertiary);
      font-size: 13px;
      margin-left: 8px;
      font-weight: 500;
    }
    .close {
      background: transparent;
      border: 1px solid var(--glass-border);
      width: 32px;
      height: 32px;
      border-radius: 999px;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 18px;
      line-height: 1;
    }
    .close:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .year {
      font-family: var(--font-display);
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-tertiary);
      margin: 22px 0 12px;
      padding: 0 4px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .year::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(255, 248, 235, 0.18) 0%,
        rgba(255, 248, 235, 0) 100%
      );
    }
    .year:first-of-type { margin-top: 0; }
    .year.current {
      color: var(--teal-pebble);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 14px;
    }
    .grid trip-card { display: block; }
    .past trip-card {
      opacity: 0.65;
      transition: opacity 200ms ease;
    }
    .past trip-card:hover {
      opacity: 1;
    }
    .empty {
      text-align: center;
      color: var(--text-tertiary);
      font-size: 14px;
      padding: 38px 12px;
      line-height: 1.55;
    }
  `);customElements.define("all-trips-modal",Ee);class Ne extends z{constructor(){super(),this.open=!1,this._events=[],this._selected=new Set,this._loading=!1,this._error="",this._importing=!1,this._started=!1,this._mode=null,this._targetTripId="",this._skippedOutOfRange=0,this._addedCount=0}willUpdate(e){e.has("open")&&this.open&&(this._started=!1,this._error="",this._mode=null,this._targetTripId="",this._skippedOutOfRange=0,this._addedCount=0)}_eligibleTrips(){const e=new Date().toISOString().slice(0,10);return(Array.isArray(f.state.trips)?f.state.trips:[]).filter(i=>i&&i.end&&String(i.end)>=e).sort((i,a)=>String(i.start||"").localeCompare(String(a.start||"")))}_pickMode(e){this._mode=e}_pickTrip(e){this._targetTripId=e}_start(){this._loading||(this._started=!0,this._load())}async _load(){var e,t,i,a,r,s;this._loading=!0,this._error="";try{const o=await ft(),d=await oi(o,90),l=new Set((f.state.trips??[]).filter(h=>h.gcalEventId).map(h=>h.gcalEventId));this._events=d.map(h=>({...h,_alreadyImported:l.has(h.id)}));const p=new Set;for(const h of this._events){if(h._alreadyImported)continue;const c=((e=h.start)==null?void 0:e.date)??((i=(t=h.start)==null?void 0:t.dateTime)==null?void 0:i.slice(0,10)),b=((a=h.end)==null?void 0:a.date)??((s=(r=h.end)==null?void 0:r.dateTime)==null?void 0:s.slice(0,10));c&&b&&b!==c&&p.add(h.id)}this._selected=p}catch(o){console.error(o),this._error=(o==null?void 0:o.message)??"Could not load calendar events."}finally{this._loading=!1}}_toggle(e){const t=new Set(this._selected);t.has(e)?t.delete(e):t.add(e),this._selected=t}_toggleAll(){const e=this._events.filter(t=>!t._alreadyImported);this._selected.size===e.length?this._selected=new Set:this._selected=new Set(e.map(t=>t.id))}async _import(){var s,o,d,l;if(this._importing||this._selected.size===0)return;this._importing=!0;const e=(s=w==null?void 0:w.currentUser)==null?void 0:s.uid,t=this._events.filter(p=>this._selected.has(p.id));let i=0,a=0,r=0;if(this._mode==="addToTrip"){const p=this._eligibleTrips().find(h=>h.id===this._targetTripId);if(!p){this._importing=!1,y("Couldn’t find that activity. Try again.",{duration:4e3});return}for(const h of t){const c=((o=h.start)==null?void 0:o.date)??((l=(d=h.start)==null?void 0:d.dateTime)==null?void 0:l.slice(0,10));if(!c){r++;continue}if(c<p.start||c>p.end){r++;continue}const b=this._calendarEventToPlanItem(h,c),v={title:b.title,type:b.type,day:b.day,tripId:p.id,source:"google-calendar"};b.time&&(v.time=b.time),Number.isFinite(b.durationMins)&&(v.durationMins=b.durationMins);try{await f.saveActivity(v),i++}catch(k){console.error("add-to-trip activity failed for event",h.id,k),a++}}this._importing=!1,this._skippedOutOfRange=r,this._addedCount=i;return}for(const p of t){const h=li(p,e);try{await f.saveTrip(h),i++}catch(c){console.error("Import failed for event",p.id,c),a++}}this._importing=!1,a===0?y(`Imported ${i} ${i===1?"activity":"activities"}.`):y(`Imported ${i}, ${a} failed.`,{duration:5e3}),this._events=[],this._selected=new Set,this.dispatchEvent(new Event("cancel"))}_calendarEventToPlanItem(e,t){var o,d;const i=`${e.summary??""} ${e.description??""}`.toLowerCase();let a="visit";/(lunch|dinner|breakfast|brunch|coffee|restaurant|caf[eé])/i.test(i)?a="meal":/(flight|airline|airport|drive|train|taxi|uber|lyft|transfer)/i.test(i)&&(a="travel");let r="",s;if((o=e.start)!=null&&o.dateTime&&((d=e.end)!=null&&d.dateTime)){const l=new Date(e.start.dateTime),p=new Date(e.end.dateTime),h=String(l.getHours()).padStart(2,"0"),c=String(l.getMinutes()).padStart(2,"0");r=`${h}:${c}`;const b=Math.round((p-l)/6e4);b>0&&(s=Math.min(b,600))}return{title:(e.summary||"(untitled)").trim(),type:a,day:t,time:r,durationMins:s}}_openPlannerForTarget(){this._targetTripId&&(this.dispatchEvent(new CustomEvent("open-trip-planner",{detail:{tripId:this._targetTripId},bubbles:!0,composed:!0})),this._closeAndReset())}_closeAndReset(){this._events=[],this._selected=new Set,this._mode=null,this._targetTripId="",this._skippedOutOfRange=0,this._addedCount=0,this._started=!1,this.dispatchEvent(new Event("cancel"))}_onCancel(){this.dispatchEvent(new Event("cancel"))}_fmtRange(e){var p,h,c,b,v,k,m,x;const t=((p=e.start)==null?void 0:p.date)??((c=(h=e.start)==null?void 0:h.dateTime)==null?void 0:c.slice(0,10)),i=((b=e.end)==null?void 0:b.date)??((k=(v=e.end)==null?void 0:v.dateTime)==null?void 0:k.slice(0,10));if(!t)return"";const a=new Date(t);if(!i||i===t)return a.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});let r=new Date(i);(m=e.start)!=null&&m.date&&((x=e.end)!=null&&x.date)&&r.setDate(r.getDate()-1);const s=a.getMonth()===r.getMonth()&&a.getFullYear()===r.getFullYear(),o=a.getFullYear()===r.getFullYear();if(s)return`${a.getDate()}–${r.getDate()} ${a.toLocaleString("en-GB",{month:"short",year:"numeric"})}`;const d=a.toLocaleString("en-GB",{day:"numeric",month:"short"}),l=r.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});return o?`${d} – ${l}`:`${a.toLocaleDateString()} – ${r.toLocaleDateString()}`}render(){if(!this.open)return n``;const e=this._events.filter(s=>!s._alreadyImported),t=e.length>0&&this._selected.size===e.length,i=this._mode===null,a=this._mode==="addToTrip"&&!this._targetTripId,r=this._mode==="addToTrip"&&this._addedCount>0&&!this._importing;return n`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Import from Google Calendar</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          ${i?this._renderModeChooser():a?this._renderTripPicker():r?this._renderDone():this._renderLoadAndList(e,t)}
        </glass-panel>
      </div>
    `}_renderModeChooser(){const t=this._eligibleTrips().length>0;return n`
      <p class="lede">What would you like to do with your calendar events?</p>
      <div class="mode-cards">
        <button class="mode-card" @click=${()=>this._pickMode("newTrips")}>
          <div class="mode-card-icon mode-card-icon-a">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
          </div>
          <div class="mode-card-body">
            <div class="mode-card-title">New Activities from calendar</div>
            <div class="mode-card-subtitle">Each event becomes its own Activity.</div>
          </div>
        </button>
        <button
          class="mode-card ${t?"":"disabled"}"
          ?disabled=${!t}
          @click=${()=>t&&this._pickMode("addToTrip")}
        >
          <div class="mode-card-icon mode-card-icon-b">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <line x1="12" y1="14" x2="12" y2="18"></line>
              <line x1="10" y1="16" x2="14" y2="16"></line>
            </svg>
          </div>
          <div class="mode-card-body">
            <div class="mode-card-title">Add events to an existing Activity</div>
            <div class="mode-card-subtitle">
              ${t?n`Pick a trip — events become items in its day planner.`:n`You'll need a current or upcoming Activity first.`}
            </div>
          </div>
        </button>
      </div>
    `}_renderTripPicker(){const e=this._eligibleTrips();return n`
      <p class="lede">
        Which Activity should these events join? Each imported event becomes
        an item in the trip's day planner.
      </p>
      <div class="trip-picker-list">
        ${e.map(t=>n`
            <button class="trip-pick-row" @click=${()=>this._pickTrip(t.id)}>
              <div class="trip-pick-body">
                <div class="trip-pick-title">${t.title||"(untitled trip)"}</div>
                <div class="trip-pick-dates">${this._fmtTripRange(t)}</div>
              </div>
              <span class="trip-pick-chev">›</span>
            </button>
          `)}
      </div>
      <div class="intro-actions">
        <glass-button variant="ghost" @click=${()=>this._mode=null}>
          Back
        </glass-button>
      </div>
    `}_fmtTripRange(e){const t=e.start?new Date(e.start):null,i=e.end?new Date(e.end):null;if(!t)return"";const a={day:"numeric",month:"short"};return!i||+i==+t?t.toLocaleDateString("en-GB",a):`${t.toLocaleDateString("en-GB",a)} – ${i.toLocaleDateString("en-GB",a)}`}_renderDone(){const e=this._eligibleTrips().find(i=>i.id===this._targetTripId),t=(e==null?void 0:e.title)||"your Activity";return n`
      <p class="lede">
        Added <strong>${this._addedCount}</strong>
        ${this._addedCount===1?"item":"items"} to
        <strong>${t}</strong>'s day planner.
      </p>
      ${this._skippedOutOfRange>0?n`<div class="skipped-note">
            Skipped ${this._skippedOutOfRange}
            ${this._skippedOutOfRange===1?"event":"events"}
            outside the trip's dates.
          </div>`:""}
      <div class="intro-actions">
        <glass-button variant="ghost" @click=${this._closeAndReset}>
          Close
        </glass-button>
        <glass-button variant="primary" @click=${this._openPlannerForTarget}>
          Open day plan
        </glass-button>
      </div>
    `}_renderLoadAndList(e,t){return n`
      <p class="lede">
        Looking at your <strong>primary Google Calendar</strong> for the next 90 days.
        ${this._mode==="addToTrip"?n`Tick the events you want as items in the trip's day planner — the rest stay where they are.`:n`Tick the events you want as Portal activities — the rest stay where they are.`}
      </p>

      ${this._started?this._loading?n`<div class="loading">Loading your calendar…</div>`:this._error?n`
                <div class="error">${this._error}</div>
                <div class="intro-actions">
                  <glass-button variant="ghost" @click=${this._onCancel}>
                    Close
                  </glass-button>
                  <glass-button variant="primary" @click=${this._start}>
                    Try again
                  </glass-button>
                </div>
              `:this._events.length===0?n`<div class="empty">No events found in the next 90 days.</div>`:n`
                <div class="list">
                  ${this._events.map(i=>n`
                      <div
                        class="row ${i._alreadyImported?"disabled":this._selected.has(i.id)?"on":""}"
                        @click=${()=>!i._alreadyImported&&this._toggle(i.id)}
                      >
                        <div class="checkbox"></div>
                        <div class="body">
                          <div class="title">${i.summary||"(untitled)"}</div>
                          <div class="meta">
                            <span>${this._fmtRange(i)}</span>
                            ${i.location?n`<span>· ${i.location}</span>`:""}
                          </div>
                        </div>
                        ${i._alreadyImported?n`<span class="badge">In Portal</span>`:""}
                      </div>
                    `)}
                </div>
                <div class="toolbar">
                  <button class="select-all" @click=${this._toggleAll}>
                    ${t?"Deselect all":"Select all"}
                  </button>
                  <div class="actions">
                    <glass-button variant="ghost" @click=${this._onCancel} ?disabled=${this._importing}>
                      Cancel
                    </glass-button>
                    <glass-button
                      variant="primary"
                      @click=${this._import}
                      ?disabled=${this._importing||this._selected.size===0}
                    >
                      ${this._importing?"Importing…":this._selected.size===0?"Pick events":this._mode==="addToTrip"?`Add ${this._selected.size} ${this._selected.size===1?"item":"items"}`:`Import ${this._selected.size} ${this._selected.size===1?"activity":"activities"}`}
                    </glass-button>
                  </div>
                </div>
              `:n`
                <div class="intro">
                  <p class="intro-lede">
                    We'll pull the next <strong>90 days</strong> from your
                    primary Google Calendar so you can pick which events
                    become Portal activities. Read-only — Portal never edits
                    your calendar.
                  </p>
                  <div class="note">
                    <strong>During our beta:</strong> Google will show
                    <code>pebblepath-992b6.firebaseapp.com</code> and may
                    warn the app "isn't verified." That's expected — it's
                    PebblePath. Pick your Google account, tap
                    <em>Advanced → continue</em> if prompted, then grant
                    calendar access.
                  </div>
                  <div class="intro-actions">
                    <glass-button variant="ghost" @click=${this._onCancel}>
                      Cancel
                    </glass-button>
                    <glass-button variant="primary" @click=${this._start}>
                      Connect Google Calendar
                    </glass-button>
                  </div>
                </div>
              `}
    `}}_(Ne,"properties",{open:{type:Boolean,reflect:!0},_events:{state:!0},_selected:{state:!0},_loading:{state:!0},_error:{state:!0},_importing:{state:!0},_started:{state:!0},_mode:{state:!0},_targetTripId:{state:!0},_skippedOutOfRange:{state:!0},_addedCount:{state:!0}}),_(Ne,"styles",T`
    * { box-sizing: border-box; }
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding: 6vh 24px;
      overflow-y: auto;
    }
    :host([open]) { display: flex; }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(20, 12, 6, 0.55);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: -1;
    }
    .sheet {
      position: relative;
      width: 100%;
      max-width: 680px;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to   { transform: translateY(0); opacity: 1; }
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .close {
      background: transparent;
      border: 1px solid var(--glass-border);
      width: 32px;
      height: 32px;
      border-radius: 999px;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 18px;
    }
    .lede {
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.55;
      margin: 0 0 18px;
    }
    .lede strong { color: var(--text-primary); font-weight: 600; }
    .list {
      max-height: 50vh;
      overflow-y: auto;
      margin: 6px -6px 0;
      padding: 0 6px;
    }
    .row {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 8px;
      border-radius: 10px;
      cursor: pointer;
      transition: background 180ms ease;
    }
    .row:hover {
      background: rgba(255, 248, 235, 0.04);
    }
    .row.disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .checkbox {
      width: 18px;
      height: 18px;
      border-radius: 5px;
      border: 1.5px solid rgba(255, 248, 235, 0.32);
      flex-shrink: 0;
      margin-top: 2px;
      position: relative;
      transition: all 160ms ease;
    }
    .row.on .checkbox {
      background: var(--teal-pebble);
      border-color: var(--teal-pebble);
    }
    .row.on .checkbox::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 6px;
      width: 4px;
      height: 8px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
    .body {
      flex: 1;
      min-width: 0;
    }
    .title {
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 14.5px;
      color: var(--text-primary);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .meta {
      color: var(--text-tertiary);
      font-size: 12px;
      margin-top: 3px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .badge {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 999px;
      background: rgba(122, 158, 126, 0.18);
      border: 1px solid rgba(122, 158, 126, 0.35);
      color: rgba(174, 191, 166, 0.95);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      align-self: center;
      flex-shrink: 0;
    }
    .loading,
    .empty,
    .error {
      padding: 28px 8px;
      text-align: center;
      color: var(--text-secondary);
      font-size: 14px;
      line-height: 1.5;
    }
    .error {
      color: var(--rose-soft);
    }
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 248, 235, 0.08);
    }
    .select-all {
      background: transparent;
      border: none;
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-size: 13px;
      cursor: pointer;
      padding: 4px 0;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    .select-all:hover {
      color: var(--text-primary);
    }
    .actions {
      display: flex;
      gap: 10px;
    }
    .intro {
      padding: 4px 2px 2px;
    }
    .intro-lede {
      margin: 0 0 14px;
      color: var(--text-secondary);
      font-size: 14px;
      line-height: 1.6;
    }
    .intro-lede strong { color: var(--text-primary); font-weight: 600; }
    .note {
      border: 1px solid var(--glass-border);
      background: rgba(255, 248, 235, 0.04);
      border-radius: 12px;
      padding: 12px 14px;
      color: var(--text-secondary);
      font-size: 12.5px;
      line-height: 1.6;
    }
    .note strong { color: var(--text-primary); font-weight: 600; }
    .note em { font-style: normal; color: var(--text-primary); }
    .note code {
      font-family: 'SF Mono', ui-monospace, monospace;
      font-size: 11.5px;
      background: rgba(255, 248, 235, 0.08);
      padding: 1px 5px;
      border-radius: 5px;
      word-break: break-all;
    }
    .intro-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 18px;
    }
    /* Mode chooser (new) */
    .mode-cards {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 6px;
    }
    .mode-card {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 16px;
      width: 100%;
      text-align: left;
      background: var(--glass-surface, rgba(255, 248, 235, 0.04));
      border: 1px solid var(--glass-border);
      border-radius: 16px;
      cursor: pointer;
      color: inherit;
      transition: background 180ms ease, transform 180ms ease;
    }
    .mode-card:hover:not(.disabled) {
      background: rgba(255, 248, 235, 0.08);
      transform: translateY(-1px);
    }
    .mode-card.disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }
    .mode-card-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-shrink: 0;
    }
    .mode-card-icon-a {
      background: linear-gradient(135deg, #3d9b8f, #1f5c54);
      box-shadow: 0 2px 4px rgba(61, 155, 143, 0.3);
    }
    .mode-card-icon-b {
      background: linear-gradient(135deg, #6bb4e8 0%, #4a90e2 55%, #3d9b8f 100%);
      box-shadow: 0 2px 4px rgba(74, 144, 226, 0.3);
    }
    .mode-card.disabled .mode-card-icon-b {
      background: linear-gradient(135deg, var(--text-tertiary), var(--text-secondary));
      box-shadow: none;
    }
    .mode-card-body { flex: 1; min-width: 0; }
    .mode-card-title {
      font-family: var(--font-display);
      font-size: 16px;
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: -0.01em;
    }
    .mode-card-subtitle {
      font-size: 13px;
      color: var(--text-secondary);
      margin-top: 4px;
      line-height: 1.45;
    }
    /* Trip picker rows (Mode B step 0.5) */
    .trip-picker-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 6px;
      max-height: 50vh;
      overflow-y: auto;
    }
    .trip-pick-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px;
      width: 100%;
      text-align: left;
      background: var(--glass-surface, rgba(255, 248, 235, 0.04));
      border: 1px solid var(--glass-border);
      border-radius: 12px;
      cursor: pointer;
      color: inherit;
      transition: background 180ms ease;
    }
    .trip-pick-row:hover {
      background: rgba(255, 248, 235, 0.08);
    }
    .trip-pick-body { flex: 1; min-width: 0; }
    .trip-pick-title {
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 600;
      color: var(--text-primary);
    }
    .trip-pick-dates {
      font-size: 12px;
      color: var(--text-secondary);
      margin-top: 3px;
    }
    .trip-pick-chev {
      font-size: 18px;
      color: var(--text-tertiary);
      flex-shrink: 0;
    }
    /* Mode B done — skipped-out-of-range note */
    .skipped-note {
      padding: 10px 14px;
      background: rgba(212, 168, 67, 0.12);
      border: 1px solid rgba(212, 168, 67, 0.30);
      border-radius: 10px;
      color: var(--text-primary);
      font-size: 13px;
      margin-top: 10px;
    }
  `);customElements.define("import-calendar-modal",Ne);class Re extends z{constructor(){super(),this.open=!1,this.user=null,this.pebbleUser=null,this._name="",this._savingName=!1,this._uploadingPhoto=!1}willUpdate(e){var t;e.has("open")&&this.open&&(this._name=((t=this.user)==null?void 0:t.displayName)??"")}_onCancel(){this.dispatchEvent(new Event("cancel"))}async _saveName(){var i,a;const e=this._name.trim();if(!e||e===(((i=this.user)==null?void 0:i.displayName)??""))return;const t=(a=w==null?void 0:w.currentUser)==null?void 0:a.uid;if(!(!t||!u)){this._savingName=!0;try{await M(C(u,"users",t),{displayName:e,updatedAt:$()});const r=f.familyId;if(r)try{await M(C(u,"families",r),{[`memberProfiles.${t}.displayName`]:e,[`memberProfiles.${t}.updatedAt`]:$(),updatedAt:$()})}catch(s){console.warn("memberProfiles fan-out failed:",s)}y("Display name updated.")}catch(r){console.error(r),y(`Couldn't save: ${r.code??r.message}`,{duration:5e3})}finally{this._savingName=!1}}}async _signOut(){confirm("Sign out of PebblePath?")&&(this.dispatchEvent(new Event("cancel")),await wt())}_triggerPhotoPicker(){var e;(e=this.renderRoot.querySelector("#photo-file"))==null||e.click()}async _onPhotoChosen(e){var r,s;const t=(r=e.target.files)==null?void 0:r[0];if(e.target.value="",!t)return;if(!t.type.startsWith("image/")){y("Pick an image file (JPG, PNG, etc.).");return}if(t.size>5*1024*1024){y("Photo is too big — keep it under 5 MB.");return}const i=(s=w==null?void 0:w.currentUser)==null?void 0:s.uid,a=f.familyId;if(!i||!a||!O){y("Can't upload yet — you need to be in a family first.");return}this._uploadingPhoto=!0;try{const o=K(O,`families/${a}/avatars/users/${i}`);await te(o,t,{contentType:t.type});const d=await ee(o);await M(C(u,"users",i),{profilePhotoURL:d,updatedAt:$()});try{await M(C(u,"families",a),{[`memberProfiles.${i}.profilePhotoURL`]:d,[`memberProfiles.${i}.updatedAt`]:$(),updatedAt:$()})}catch(l){console.warn("memberProfiles photo fan-out failed:",l)}y("Photo updated.")}catch(o){console.error("Photo upload failed",o),y(`Upload failed: ${o.code??o.message}`,{duration:5e3})}finally{this._uploadingPhoto=!1}}render(){if(!this.open)return n``;const e=this.user,t=this._name.trim()&&this._name.trim()!==((e==null?void 0:e.displayName)??"");return n`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Profile</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <div class="avatar-block">
            <member-chip
              .name=${(e==null?void 0:e.displayName)??"You"}
              .photo=${(e==null?void 0:e.photoURL)??""}
              .hue=${198}
              size="80"
            ></member-chip>
            <button
              class="change-photo"
              ?disabled=${this._uploadingPhoto}
              @click=${this._triggerPhotoPicker}
            >
              ${this._uploadingPhoto?"Uploading…":"Change photo"}
            </button>
            <input
              id="photo-file"
              type="file"
              accept="image/*"
              style="display:none;"
              @change=${this._onPhotoChosen}
            />
          </div>

          <div class="field">
            <label>Display name</label>
            <input
              type="text"
              .value=${this._name}
              @input=${i=>this._name=i.target.value}
            />
            ${t?n`<button
                  class="save-btn"
                  ?disabled=${this._savingName}
                  @click=${this._saveName}
                >
                  ${this._savingName?"Saving…":"Save name"}
                </button>`:""}
          </div>

          <div class="field">
            <label>Email</label>
            <div class="read-only">${(e==null?void 0:e.email)??"—"}</div>
          </div>

          <div class="danger-row">
            <button class="signout" @click=${this._signOut}>Sign out</button>
          </div>
        </glass-panel>
      </div>
    `}}_(Re,"properties",{open:{type:Boolean,reflect:!0},user:{type:Object},pebbleUser:{type:Object},_name:{state:!0},_savingName:{state:!0},_uploadingPhoto:{state:!0}}),_(Re,"styles",T`
    * { box-sizing: border-box; }
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding: 8vh 24px;
      overflow-y: auto;
    }
    :host([open]) { display: flex; }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(20, 12, 6, 0.55);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: -1;
    }
    .sheet {
      position: relative;
      width: 100%;
      max-width: 440px;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to   { transform: translateY(0); opacity: 1; }
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 22px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .close {
      background: transparent;
      border: 1px solid var(--glass-border);
      width: 32px;
      height: 32px;
      border-radius: 999px;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 18px;
    }
    .avatar-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-bottom: 26px;
    }
    .change-photo {
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      font: inherit;
      font-size: 12px;
      padding: 5px 12px;
      border-radius: var(--radius-pill);
      cursor: pointer;
    }
    .change-photo:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .field {
      margin-bottom: 16px;
    }
    label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: -0.005em;
      margin-bottom: 6px;
    }
    input[type='text'] {
      width: 100%;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.16);
      border-radius: var(--radius-input);
      padding: 11px 14px;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 16px;
    }
    input[type='text']:focus {
      outline: none;
      border-color: var(--terracotta);
      background: rgba(255, 248, 235, 0.1);
    }
    .read-only {
      padding: 11px 14px;
      background: rgba(255, 248, 235, 0.03);
      border: 1px solid rgba(255, 248, 235, 0.08);
      border-radius: var(--radius-input);
      color: var(--text-secondary);
      font-size: 14px;
      letter-spacing: -0.005em;
    }
    .save-btn {
      width: 100%;
      padding: 10px 14px;
      border-radius: var(--radius-pill);
      background: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      cursor: pointer;
      font: inherit;
      font-weight: 600;
      font-size: 14px;
      margin-top: 8px;
      box-shadow: 0 4px 14px rgba(139, 90, 62, 0.3);
    }
    .save-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .danger-row {
      margin-top: 28px;
      padding-top: 18px;
      border-top: 1px solid rgba(255, 248, 235, 0.08);
      display: flex;
      justify-content: center;
    }
    .signout {
      background: transparent;
      border: 1px solid rgba(201, 138, 138, 0.32);
      color: var(--rose-soft);
      font: inherit;
      font-size: 13.5px;
      padding: 9px 22px;
      border-radius: var(--radius-pill);
      cursor: pointer;
      transition: all 200ms ease;
    }
    .signout:hover {
      background: rgba(201, 138, 138, 0.1);
      border-color: rgba(201, 138, 138, 0.5);
    }
  `);customElements.define("profile-sheet",Re);const de=class de extends z{constructor(){super(),this.open=!1}static get OPTIONS(){return[{type:"trip",tone:"tide",icon:n`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.62 3.05a1 1 0 0 0-1.12-.18L3.7 10.3c-.86.38-.83 1.62.05 1.95l6.06 2.27 2.27 6.06c.33.88 1.57.9 1.95.05L21.8 4.17a1 1 0 0 0-.18-1.12zM10.5 12.7l6.4-5.7-4.9 6.6-.1.1z"/>
        </svg>`,label:"Trip",desc:"Day trips or multi-day travel, with optional lodging, flights, attendees."},{type:"activity",tone:"amber",icon:n`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M15.8 7.4 21.8 19.5a1.1 1.1 0 0 1-.98 1.6H10.2z"/>
          <path d="M9 4.6 16.5 19.5a1.1 1.1 0 0 1-.98 1.6H3.46a1.1 1.1 0 0 1-.98-1.6z"/>
        </svg>`,label:"Activity",desc:"A single outing, plan, or to-do for the family calendar."},{type:"event",tone:"celebration",icon:n`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M11.1 6.7C10.4 5 9.2 3.7 7.8 3.3c-1-.3-1.9.1-2.2.9-.4 1 .2 2.1 1 2.7 1 .75 2.5 1.05 4.5 1.05z"/>
          <path d="M12.9 6.7c.7-1.7 1.9-3 3.3-3.4 1-.3 1.9.1 2.2.9.4 1-.2 2.1-1 2.7-1 .75-2.5 1.05-4.5 1.05z"/>
          <rect x="3" y="8" width="8.1" height="3.5" rx="1"/>
          <rect x="12.9" y="8" width="8.1" height="3.5" rx="1"/>
          <rect x="4.1" y="11.7" width="7" height="9.1" rx="1.4"/>
          <rect x="12.9" y="11.7" width="7" height="9.1" rx="1.4"/>
        </svg>`,label:"Birthday or anniversary",desc:"Recurring celebration on a specific date."},{type:"import",tone:"tide",mobileOnly:!0,icon:n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
          <path d="M9 14l3 3 4-5" />
        </svg>`,label:"Import from Calendar",desc:"Pull recent events from your Google Calendar."}]}_pick(e){this.dispatchEvent(new CustomEvent("pick",{detail:{type:e}}))}_cancel(){this.dispatchEvent(new Event("cancel"))}render(){return this.open?n`
      <div class="backdrop" @click=${this._cancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>What are you adding?</h2>
            <button class="close" @click=${this._cancel} aria-label="Close">×</button>
          </div>
          <div class="options">
            ${de.OPTIONS.map(e=>n`
                <button
                  class="option ${e.mobileOnly?"mobile-only":""}"
                  @click=${()=>this._pick(e.type)}
                >
                  <span class="icon-cell ${e.tone}" aria-hidden="true">${e.icon}</span>
                  <span>
                    <div class="label">${e.label}</div>
                    <div class="desc">${e.desc}</div>
                  </span>
                </button>
              `)}
          </div>
        </glass-panel>
      </div>
    `:n``}};_(de,"properties",{open:{type:Boolean,reflect:!0}}),_(de,"styles",T`
    * { box-sizing: border-box; }
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding: 10vh 24px;
      overflow-y: auto;
    }
    :host([open]) { display: flex; }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(20, 12, 6, 0.55);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: -1;
    }
    .sheet {
      position: relative;
      width: 100%;
      max-width: 460px;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to   { transform: translateY(0); opacity: 1; }
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .close {
      background: transparent;
      border: 1px solid var(--glass-border);
      width: 32px;
      height: 32px;
      border-radius: 999px;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 18px;
    }
    .options {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .option {
      display: grid;
      grid-template-columns: 44px 1fr;
      gap: 14px;
      align-items: center;
      padding: 14px 16px;
      border-radius: var(--radius-card);
      background: rgba(255, 248, 235, 0.05);
      border: 1px solid rgba(255, 248, 235, 0.12);
      cursor: pointer;
      text-align: left;
      font: inherit;
      color: inherit;
      width: 100%;
      transition: all 200ms ease;
    }
    .option:hover {
      background: rgba(255, 248, 235, 0.09);
      border-color: rgba(255, 248, 235, 0.24);
      transform: translateY(-1px);
    }
    .option:active {
      transform: translateY(0);
    }
    .icon-cell {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(255, 248, 235, 0.06);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: #fff;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
    }
    .icon-cell svg {
      width: 22px;
      height: 22px;
      display: block;
    }
    .icon-cell.sage { background: var(--gradient-sage); }
    .icon-cell.tide { background: var(--gradient-tide); }
    .icon-cell.amber { background: var(--gradient-amber); }
    .icon-cell.celebration { background: var(--gradient-celebration); }
    /* Mobile-only options (e.g. Import from Calendar) — hidden on
       desktop where the equivalent affordance lives in the section
       header. */
    @media (min-width: 769px) {
      .option.mobile-only { display: none; }
    }
    .label {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 15.5px;
      letter-spacing: -0.01em;
      color: var(--text-primary);
    }
    .desc {
      font-size: 12.5px;
      color: var(--text-secondary);
      line-height: 1.45;
      margin-top: 2px;
    }
  `);let Be=de;customElements.define("activity-type-picker",Be);class Oe extends z{constructor(){super(),this.open=!1,this.floating=!1,this.family=null,this.trips=[],this._messages=[],this._input="",this._loading=!1,this._error="",this._followUps=[]}willUpdate(e){var t;e.has("_messages")&&(this.floating=(((t=this._messages)==null?void 0:t.length)??0)>0)}_onCancel(){this.dispatchEvent(new Event("cancel"))}_suggestions(){const e=[],t=(this.trips??[]).filter(i=>i.start&&new Date(i.start)>=new Date).sort((i,a)=>String(i.start).localeCompare(String(a.start)))[0];return t&&(e.push(`What should we do in ${t.location||t.title}?`),e.push(`What should we pack for ${t.title}?`)),e.push("Plan a family activity for this weekend"),e.push("Gift ideas for an upcoming birthday"),e.slice(0,4)}async _send(e){const t=(e??this._input).trim();if(!(!t||this._loading)){this._error="",this._input="",this._followUps=[],this._messages=[...this._messages,{role:"user",content:t}],this._loading=!0,this.updateComplete.then(()=>this._scrollToBottom());try{const i=this._messages.slice(0,-1).map(r=>({role:r.role,content:r.content})),a=await f.askPebble(t,i);this._messages=[...this._messages,{role:"assistant",content:a.answer}],this._followUps=Array.isArray(a.followUps)?a.followUps:[]}catch(i){console.error(i),(i==null?void 0:i.code)==="functions/unauthenticated"?this._error="Pebble needs you to be signed in.":(i==null?void 0:i.code)==="functions/permission-denied"?this._error="You're not in this family yet.":(i==null?void 0:i.code)==="functions/not-found"||(i==null?void 0:i.code)==="functions/internal"?this._error="Pebble isn't available right now — the Cloud Function may not be deployed yet.":this._error=(i==null?void 0:i.message)??"Pebble could not answer right now."}finally{this._loading=!1,this.updateComplete.then(()=>this._scrollToBottom())}}}_scrollToBottom(){const e=this.renderRoot.querySelector(".thread");e&&(e.scrollTop=e.scrollHeight)}_renderPebbleIcon(){return n`<pebble-icon color="#fff"></pebble-icon>`}render(){if(!this.open)return n``;const e=this._suggestions();return n`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="panel" @keydown=${t=>{t.key==="Escape"&&this._onCancel()}}>
          <div class="header">
            <span class="pebble-icon">${this._renderPebbleIcon()}</span>
            <div class="body">
              <div class="name">Pebble</div>
              <div class="sub">Family activity advisor · powered by PebblePath</div>
            </div>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <div class="thread">
            ${this._messages.length===0?n`
                  <div class="empty">
                    <div class="lede">Hi — what's on your mind?</div>
                    <div class="sub">
                      I know your upcoming trips and family celebrations.
                      Ask about activities, packing, gift ideas, restaurants
                      — anything family-shaped.
                    </div>
                    <div class="suggestions">
                      ${e.map(t=>n`
                          <button class="suggestion" @click=${()=>this._send(t)}>
                            ${t}
                          </button>
                        `)}
                    </div>
                  </div>
                `:n`
                  ${this._messages.map(t=>n`<div class="bubble ${t.role}">${t.content}</div>`)}
                  ${this._loading?n`<div class="typing"><span></span><span></span><span></span></div>`:this._followUps.length>0?n`
                        <div class="follow-ups">
                          ${this._followUps.map(t=>n`
                              <button class="follow-up" @click=${()=>this._send(t)}>
                                ${t}
                              </button>
                            `)}
                        </div>
                      `:""}
                `}
          </div>

          ${this._error?n`<div class="error">${this._error}</div>`:""}

          <form
            class="composer"
            @submit=${t=>{t.preventDefault(),this._send()}}
          >
            <textarea
              placeholder="Ask Pebble…"
              .value=${this._input}
              @input=${t=>this._input=t.target.value}
              @keydown=${t=>{t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this._send())}}
              ?disabled=${this._loading}
            ></textarea>
            <button
              type="submit"
              class="send-btn"
              ?disabled=${this._loading||!this._input.trim()}
              aria-label="Send"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
      </div>
    `}}_(Oe,"properties",{open:{type:Boolean,reflect:!0},floating:{type:Boolean,reflect:!0},family:{type:Object},trips:{type:Array},_messages:{state:!0},_input:{state:!0},_loading:{state:!0},_error:{state:!0},_followUps:{state:!0}}),_(Oe,"styles",T`
    * { box-sizing: border-box; }
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: none;
      pointer-events: none;
    }
    :host([open]) {
      display: block;
    }
    /* Backdrop is subtle — dashboard stays legible behind the dropdown.
       Catches outside-clicks to dismiss. Hidden once the chat is in
       floating-chatbot mode so the user can still scroll/click the
       dashboard while a conversation is in progress. */
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(20, 12, 6, 0.25);
      pointer-events: auto;
      animation: fadeIn 200ms ease;
    }
    :host([floating]) .backdrop {
      display: none;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    /* Dropdown panel (default): anchored just below the topbar Pebble
       search bar. Centred horizontally on desktop, near-edge on mobile.
       Internal flex so the conversation thread can scroll while header
       + composer stay pinned. */
    .panel {
      position: fixed;
      top: 76px;
      left: 50%;
      transform: translateX(-50%);
      width: min(580px, calc(100vw - 32px));
      max-height: min(640px, calc(100vh - 96px));
      display: flex;
      flex-direction: column;
      /* 2026-05-16 — frosted glass, not a dark slab. Opacity dropped
         0.92 → 0.5 + heavier blur so the dusk gradient reads through
         as frosted glass. Kept a dark-ish tint (not white glass): the
         app is dark-themed with light text, so a light panel would
         kill contrast. Eyeball-tune the 0.5 / 34px if needed. */
      background: rgba(40, 32, 42, 0.5);
      backdrop-filter: blur(34px) saturate(180%);
      -webkit-backdrop-filter: blur(34px) saturate(180%);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-card);
      box-shadow: 0 24px 60px rgba(20, 12, 6, 0.55);
      pointer-events: auto;
      animation: dropIn 240ms cubic-bezier(0.2, 0.8, 0.2, 1);
      padding: 18px 20px 18px;
      overflow: hidden;
    }
    /* Floating-chatbot mode kicks in once a conversation has started:
       dock bottom-right, narrower + slightly shorter, animate up from
       below. The dashboard stays fully interactive behind it. */
    :host([floating]) .panel {
      top: auto;
      left: auto;
      right: 24px;
      bottom: 24px;
      transform: none;
      width: 380px;
      height: min(540px, calc(100vh - 120px));
      max-height: calc(100vh - 120px);
      animation: floatIn 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
      padding: 14px 16px;
    }
    @keyframes dropIn {
      from { transform: translateX(-50%) translateY(-12px); opacity: 0; }
      to   { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    @keyframes floatIn {
      from { transform: translateY(14px); opacity: 0; }
      to   { transform: translateY(0); opacity: 1; }
    }
    @media (max-width: 768px) {
      .panel {
        top: 76px;
        left: 16px;
        right: 16px;
        width: auto;
        max-height: calc(100vh - 96px);
        transform: none;
      }
      :host([floating]) .panel {
        top: auto;
        bottom: 16px;
        left: 16px;
        right: 16px;
        width: auto;
        height: min(540px, calc(100vh - 96px));
      }
      @keyframes dropIn {
        from { transform: translateY(-12px); opacity: 0; }
        to   { transform: translateY(0); opacity: 1; }
      }
    }

    .header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding-bottom: 16px;
      margin-bottom: 4px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.08);
    }
    .pebble-icon {
      width: 36px;
      height: 36px;
      border-radius: 999px;
      background: var(--gradient-sage);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 14px rgba(61, 155, 143, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    .pebble-icon svg { width: 18px; height: 18px; color: #fff; }
    .header .name {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 18px;
      letter-spacing: -0.01em;
    }
    .header .sub {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-top: 2px;
    }
    .header .body { flex: 1; min-width: 0; }
    .header .close {
      background: transparent;
      border: 1px solid var(--glass-border);
      width: 30px;
      height: 30px;
      border-radius: 999px;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 18px;
    }

    .thread {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      margin: 6px -8px;
      padding: 6px 8px 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      /* Thin scroll on webkit so it doesn't feel out-of-place on the
         glass panel; Firefox uses scrollbar-width: thin. */
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
      max-width: 88%;
      padding: 11px 14px;
      border-radius: 16px;
      font-size: 14.5px;
      line-height: 1.5;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .bubble.user {
      align-self: flex-end;
      background: var(--gradient-cta);
      color: #fff;
      border-bottom-right-radius: 6px;
      box-shadow: 0 2px 10px rgba(139, 90, 62, 0.25);
    }
    .bubble.assistant {
      align-self: flex-start;
      background: rgba(255, 248, 235, 0.07);
      border: 1px solid rgba(255, 248, 235, 0.14);
      border-bottom-left-radius: 6px;
      color: var(--text-primary);
    }
    .typing {
      align-self: flex-start;
      padding: 13px 18px;
      border-radius: 16px;
      background: rgba(255, 248, 235, 0.07);
      border: 1px solid rgba(255, 248, 235, 0.14);
      display: inline-flex;
      gap: 4px;
    }
    .typing span {
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: var(--text-secondary);
      animation: bounce 1s infinite ease-in-out;
    }
    .typing span:nth-child(2) { animation-delay: 0.15s; }
    .typing span:nth-child(3) { animation-delay: 0.3s; }
    @keyframes bounce {
      0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
      40% { transform: translateY(-4px); opacity: 1; }
    }

    .empty {
      padding: 24px 4px 12px;
    }
    .empty .lede {
      font-family: var(--font-display);
      font-size: 17px;
      font-weight: 600;
      letter-spacing: -0.01em;
      color: var(--text-primary);
      margin-bottom: 4px;
    }
    .empty .sub {
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.55;
      margin-bottom: 18px;
    }
    .suggestions {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .suggestion {
      text-align: left;
      padding: 11px 14px;
      border-radius: 12px;
      background: rgba(255, 248, 235, 0.04);
      border: 1px solid rgba(255, 248, 235, 0.12);
      color: var(--text-primary);
      font: inherit;
      font-size: 13.5px;
      cursor: pointer;
      transition: background 180ms ease, border-color 180ms ease;
    }
    .suggestion:hover {
      background: rgba(255, 248, 235, 0.08);
      border-color: rgba(255, 248, 235, 0.22);
    }
    /* Quick-reply chips Pebble offers after each answer — sit just
       below the last assistant bubble, flex-wrap, click to send. */
    .follow-ups {
      align-self: flex-start;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: -4px;
      max-width: 100%;
    }
    .follow-up {
      padding: 6px 12px;
      border-radius: 999px;
      background: rgba(61, 155, 143, 0.14);
      border: 1px solid rgba(61, 155, 143, 0.4);
      color: var(--text-primary);
      font: inherit;
      font-size: 12.5px;
      cursor: pointer;
      transition: background 160ms ease, transform 160ms ease;
    }
    .follow-up:hover {
      background: rgba(61, 155, 143, 0.24);
      transform: translateY(-1px);
    }
    .follow-up:active {
      transform: translateY(0);
    }

    .composer {
      display: flex;
      align-items: flex-end;
      gap: 10px;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 248, 235, 0.08);
    }
    textarea {
      flex: 1;
      resize: none;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.16);
      border-radius: 14px;
      padding: 10px 14px;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 16px;
      min-height: 44px;
      max-height: 120px;
      line-height: 1.4;
    }
    textarea:focus {
      outline: none;
      border-color: var(--teal-pebble);
      background: rgba(255, 248, 235, 0.09);
    }
    .send-btn {
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
      transition: transform 160ms ease, box-shadow 240ms ease;
      box-shadow: 0 4px 14px rgba(61, 155, 143, 0.35);
    }
    .send-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .send-btn:not(:disabled):hover { transform: scale(1.04); }
    .send-btn svg { width: 18px; height: 18px; }

    .error {
      color: var(--rose-soft);
      font-size: 13px;
      padding: 8px 0 0;
      text-align: center;
      line-height: 1.5;
    }
  `);customElements.define("pebble-chat",Oe);class At extends z{render(){return n`
      <img class="icon" src=${"/portal/assets/pebblepath-icon.png"} alt="" aria-hidden="true" />
      <div class="wordmark">PebblePath</div>
      <a
        class="cta"
        href="https://apps.apple.com/app/pebblepath-ai/"
        target="_blank"
        rel="noopener"
      >
        Download the app <span class="arrow">→</span>
      </a>
    `}}_(At,"styles",T`
    :host {
      display: block;
      margin-top: 24px;
      padding: 48px 24px 32px;
      text-align: center;
      position: relative;
    }
    :host::before {
      content: '';
      position: absolute;
      top: 0;
      left: 20%;
      right: 20%;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--glass-border-strong) 50%,
        transparent 100%
      );
    }
    .icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      margin: 0 auto 14px;
      display: block;
      box-shadow: 0 4px 14px rgba(20, 12, 6, 0.35);
      opacity: 0.95;
    }
    .wordmark {
      font-family: var(--font-pebble);
      font-weight: 400;
      font-size: 30px;
      /* --brand-wordmark-color is theme-aware: cream on the dark
         dusk-glass surface, SAGE-DEEP (the brand dark-green that the
         navbar uses) on the light sand backdrop. */
      color: var(--brand-wordmark-color);
      letter-spacing: 0.04em;
      line-height: 1;
      text-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
      margin-bottom: 6px;
    }
    .tagline {
      font-family: var(--font-nunito);
      font-weight: 600;
      font-size: 13px;
      color: var(--text-tertiary);
      letter-spacing: 0.01em;
      margin-bottom: 16px;
    }
    .cta {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: var(--text-secondary);
      text-decoration: none;
      font-family: var(--font-body);
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.01em;
      padding: 6px 0;
      transition: color 200ms ease;
    }
    .cta:hover {
      color: var(--text-primary);
    }
    .cta .arrow {
      display: inline-block;
      transition: transform 220ms ease;
    }
    .cta:hover .arrow {
      transform: translateX(3px);
    }
  `);customElements.define("discover-pebblepath",At);class Le extends z{constructor(){super(),this.code="",this._family=null,this._loading=!0,this._joining=!1,this._error="",this._step="join",this._children=[],this._claiming=!1,this._claimedName=null,this._joinedFamilyId=null}willUpdate(e){e.has("code")&&this.code&&this._lookup()}async _lookup(){var e;this._loading=!0,this._error="";try{const t=await f.findFamilyByConnectCode(this.code);if(!t)this._error="Invite code not found. Check it was typed correctly.",this._family=null;else{const i=t._matchedCodeKind==="pp"?t.inviteCodeExpiresAt:t.cairnInviteCodeExpiresAt,a=((e=i==null?void 0:i.toDate)==null?void 0:e.call(i))??(i?new Date(i):null);!a||a<new Date?(this._error="This invite code has expired. Ask the family for a fresh one.",this._family=null):this._family=t}}catch(t){console.error(t),this._error=(t==null?void 0:t.message)??"Couldn't look up the invite."}finally{this._loading=!1}}async _join(){var e;if(!this._joining){this._joining=!0,this._error="";try{const t=await f.redeemConnectCode(this.code);y(`Welcome to ${((e=this._family)==null?void 0:e.name)??"the family"}.`),this._joinedFamilyId=t;const i=await f.fetchFamilyChildren(t);Array.isArray(i)&&i.length?(this._children=i,this._step="parent"):this.dispatchEvent(new CustomEvent("joined",{detail:{familyId:t}}))}catch(t){console.error(t),this._error=(t==null?void 0:t.message)??"Could not join."}finally{this._joining=!1}}}async _claimChild(e){if(!(this._claiming||!(e!=null&&e.id))){this._claiming=!0,this._error="";try{await f.requestToBeCoParent(e.id),this._claimedName=e.name??"your child"}catch(t){console.error(t),this._error=(t==null?void 0:t.message)??"Couldn't send the request."}finally{this._claiming=!1}}}_notAParent(){this._finishJoin()}_finishJoin(){this.dispatchEvent(new CustomEvent("joined",{detail:{familyId:this._joinedFamilyId}}))}_cancel(){this.dispatchEvent(new Event("cancel"))}_inviterFromFamily(e){var a;if(!e)return null;const t=(a=e.memberProfiles)==null?void 0:a[e.createdBy];if(!t)return null;const i=t.profilePhotoURL;return{displayName:t.displayName??"A family member",photoURL:typeof i=="string"&&/^https?:\/\//i.test(i)?i:null}}_renderParentPrompt(){var t;const e=((t=this._family)==null?void 0:t.name)??"this family";return n`
      <div class="wrap">
        <div class="mark">
          <img
            class="brand-icon"
            src=${"/portal/assets/cairn-icon.png"}
            srcset=${"/portal/assets/cairn-icon.png 1x, /portal/assets/cairn-icon-2x.png 2x"}
            alt="Portal"
            width="44"
            height="44"
            style="border-radius:11px;display:block;box-shadow:0 4px 16px rgba(0,0,0,0.25);"
          />
          <div class="mark-name">PebblePath</div>
        </div>
        <glass-panel padding="lg" variant="strong" lifted>
          ${this._claimedName?n`
                <h1>Request sent</h1>
                <div class="sent">
                  ✓ We've asked an existing parent to confirm your
                  link to ${this._claimedName}. You won't see their
                  information until they do.
                </div>
                <div class="actions">
                  <glass-button
                    variant="primary"
                    size="lg"
                    full
                    @click=${this._finishJoin}
                  >
                    Continue
                  </glass-button>
                </div>
              `:n`
                <h1>Are you a parent or caregiver in ${e}?</h1>
                <p class="prompt-lede">
                  If you're a parent or active caregiver of one of
                  these children, ask to be linked to them — an
                  existing parent confirms it. You won't see a child's
                  information until they do.
                </p>
                <div class="child-list">
                  ${this._children.map(i=>n`
                      <button
                        class="child-btn"
                        ?disabled=${this._claiming}
                        @click=${()=>this._claimChild(i)}
                      >
                        <span>${i.name??"Child"}</span>
                        <span aria-hidden="true">›</span>
                      </button>
                    `)}
                </div>
                <div class="actions">
                  <glass-button
                    variant="ghost"
                    size="lg"
                    full
                    ?disabled=${this._claiming}
                    @click=${this._notAParent}
                  >
                    No, I'm not a parent or caregiver here
                  </glass-button>
                </div>
                ${this._error?n`<div class="error">${this._error}</div>`:""}
              `}
        </glass-panel>
      </div>
    `}render(){var a,r,s;if(this._step==="parent")return this._renderParentPrompt();const e=this._inviterFromFamily(this._family),t=(((a=this._family)==null?void 0:a.cairnMemberIds)??((r=this._family)==null?void 0:r.memberIds)??[]).length,i=(((s=this._family)==null?void 0:s.memberIds)??[]).length;return n`
      <div class="wrap">
        <div class="mark">
          <img
            class="brand-icon"
            src=${"/portal/assets/cairn-icon.png"}
            srcset=${"/portal/assets/cairn-icon.png 1x, /portal/assets/cairn-icon-2x.png 2x"}
            alt="Portal"
            width="44"
            height="44"
            style="border-radius:11px;display:block;box-shadow:0 4px 16px rgba(0,0,0,0.25);"
          />
          <div class="mark-name">PebblePath</div>
        </div>
        <glass-panel padding="lg" variant="strong" lifted>
          ${this._loading?n`<div class="loading">Looking up <code>${this.code}</code>…</div>`:this._family?n`
                <h1>You're invited.</h1>
                <div class="preview">
                  ${e?n`
                        <member-chip
                          .name=${e.displayName}
                          .photo=${e.photoURL??""}
                          .hue=${198}
                          size="64"
                        ></member-chip>
                        <div class="inviter">
                          From <strong>${e.displayName}</strong>
                        </div>
                      `:""}
                  <div class="family-name">${this._family.name??"A family"}</div>
                  <div class="meta">
                    ${t} ${t===1?"person":"people"} on the Portal${i&&i<t?` · ${i} on PebblePath`:""}
                  </div>
                </div>
                <div class="what-you-get">
                  <strong>You'll see</strong>
                  shared trips, family birthdays, and anniversaries.
                  You won't see PebblePath's child-development data — that stays private to the parents.
                </div>
                <div class="actions">
                  <glass-button
                    variant="primary"
                    size="lg"
                    full
                    ?disabled=${this._joining}
                    @click=${this._join}
                  >
                    ${this._joining?"Joining…":`Join ${this._family.name??"family"}`}
                  </glass-button>
                  <glass-button variant="ghost" size="lg" full @click=${this._cancel}>
                    Not now
                  </glass-button>
                </div>
                ${this._error?n`<div class="error">${this._error}</div>`:""}
              `:n`
                <h1>Hmm.</h1>
                <p style="text-align:center;color:var(--text-secondary);margin:0 0 22px;line-height:1.55;">
                  ${this._error||"This invite link doesn't look right."}
                </p>
                <div class="actions">
                  <glass-button variant="primary" size="lg" full @click=${this._cancel}>
                    Continue to Portal
                  </glass-button>
                </div>
              `}
        </glass-panel>
      </div>
    `}}_(Le,"properties",{code:{type:String},_family:{state:!0},_loading:{state:!0},_joining:{state:!0},_error:{state:!0},_step:{state:!0},_children:{state:!0},_claiming:{state:!0},_claimedName:{state:!0}}),_(Le,"styles",T`
    * { box-sizing: border-box; }
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
      /* Brand typography parity (matches register/sign-in + iOS):
         body defaults to Inter; headings below use Nunito. */
      font-family: var(--font-body);
    }
    .wrap {
      width: 100%;
      max-width: 460px;
    }
    .mark {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 28px;
      justify-content: center;
    }
    .mark-name {
      font-family: var(--font-pebble);
      font-weight: 400;
      font-size: 36px;
      letter-spacing: 0.04em;
      line-height: 1;
      transform: translateY(2px);
      color: var(--teal-pebble);
      text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
    }
    h1 {
      font-family: var(--font-nunito);
      font-size: clamp(26px, 4vw, 34px);
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin: 0 0 14px;
      text-align: center;
      color: var(--teal-pebble);
    }
    .preview {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 14px 0 22px;
    }
    .family-name {
      font-family: var(--font-nunito);
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.015em;
    }
    .inviter {
      color: var(--text-secondary);
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .meta {
      color: var(--text-tertiary);
      font-size: 12.5px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .what-you-get {
      margin: 4px 0 22px;
      padding: 14px 16px;
      border-radius: var(--radius-tile);
      background: rgba(61, 155, 143, 0.1);
      border: 1px solid rgba(61, 155, 143, 0.28);
      font-size: 13.5px;
      line-height: 1.55;
      color: rgba(255, 248, 235, 0.86);
    }
    .what-you-get strong {
      color: var(--text-primary);
      display: block;
      margin-bottom: 4px;
      font-weight: 600;
    }
    .actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .error {
      color: var(--rose-soft);
      font-size: 14px;
      text-align: center;
      margin-top: 14px;
      line-height: 1.5;
    }
    .loading {
      text-align: center;
      color: var(--text-secondary);
      padding: 32px 12px;
      font-size: 14px;
    }
    code {
      font-family: 'SF Mono', ui-monospace, monospace;
      font-size: 13px;
      letter-spacing: 0.08em;
      padding: 2px 8px;
      background: rgba(255, 248, 235, 0.08);
      border-radius: 6px;
    }
    /* P3-5c — parent-prompt child rows. */
    .prompt-lede {
      text-align: center;
      color: var(--text-secondary);
      font-size: 14.5px;
      line-height: 1.55;
      margin: 0 0 18px;
    }
    .child-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 4px 0 18px;
    }
    .child-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 14px 16px;
      width: 100%;
      text-align: left;
      background: rgba(255, 248, 235, 0.05);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-tile);
      cursor: pointer;
      font-family: var(--font-nunito);
      font-weight: 600;
      font-size: 15.5px;
      color: var(--text-primary);
      transition: background 180ms ease, border-color 180ms ease;
    }
    .child-btn:hover:not(:disabled) {
      background: rgba(255, 248, 235, 0.09);
      border-color: var(--glass-border-strong);
    }
    .child-btn:disabled { opacity: 0.55; cursor: not-allowed; }
    .sent {
      text-align: center;
      color: var(--teal-pebble);
      font-size: 15px;
      line-height: 1.5;
      margin: 8px 0 20px;
    }
  `);customElements.define("join-family-screen",Le);class je extends z{constructor(){super(),this.error="",this.busy=!1,this.joinCode="",this._codeInputOpen=!1,this._code=""}async _handleSignIn(){if(this.busy)return;const e=(this._code??"").trim().toUpperCase();if(this._codeInputOpen&&e){const t=e.startsWith("CAIRN-")?e:`CAIRN-${e.replace(/^CAIRN-?/i,"")}`;try{localStorage.setItem("cairn:pendingJoinCode",t)}catch{}}this.busy=!0,this.error="";try{await be()}catch(t){this.error=(t==null?void 0:t.message)??"Sign-in failed."}finally{this.busy=!1}}_toggleCode(){this._codeInputOpen=!this._codeInputOpen,this._codeInputOpen&&requestAnimationFrame(()=>{var e;(e=this.renderRoot.querySelector(".code-input"))==null||e.focus()})}_renderGoogleIcon(){return n`
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
    `}render(){return n`
      <div class="wrap">
        <div class="brand">
          <div class="mark-row">
            <img
              class="brand-icon"
              src=${"/portal/assets/cairn-icon.png"}
              srcset=${"/portal/assets/cairn-icon.png 1x, /portal/assets/cairn-icon-2x.png 2x"}
              alt="Portal"
              width="56"
              height="56"
            />
            <div class="mark-name">PebblePath</div>
          </div>
          <div class="companion">Web Portal</div>
        </div>
        <glass-panel padding="lg" lifted variant="strong">
          ${this.joinCode?n`<div class="invite-banner">
                <strong>You've been invited to a family on PebblePath.</strong><br />
                Sign in to continue — we'll show you the family next.
                <br /><code>${this.joinCode}</code>
              </div>`:""}
          <h1>${this.joinCode?"Almost there.":"for every little adventure"}</h1>
          <p class="lede">
            ${this.joinCode?"Sign in with the Google account you use with your family. You'll see a preview before joining.":"Private portal for your trips, activities, birthdays and anniversaries — for your whole family."}
          </p>
          <div class="actions">
            <button
              class="google-btn"
              ?disabled=${this.busy||!B}
              @click=${this._handleSignIn}
            >
              ${this._renderGoogleIcon()}
              ${this.busy?"Signing in…":this._codeInputOpen&&this._code.trim()?"Sign in with Google & join":"Sign in with Google"}
            </button>
          </div>
          ${this.joinCode?"":n`<div class="have-code">
                <button type="button" @click=${this._toggleCode}>
                  ${this._codeInputOpen?"× Cancel code":"I have a family code"}
                </button>
              </div>`}
          ${this._codeInputOpen?n`
                <div class="code-row">
                  <input
                    class="code-input"
                    type="text"
                    placeholder="CAIRN-XXXX"
                    .value=${this._code}
                    @input=${e=>this._code=e.target.value}
                    @keydown=${e=>{e.key==="Enter"&&this._code.trim()&&(e.preventDefault(),this._handleSignIn())}}
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
              `:""}
          ${B?"":n`<div class="config-hint">
                Sign-in is awaiting your Firebase config — copy
                <code>.env.example</code> to <code>.env</code> and fill in the web-app
                values from PebblePath's Firebase Console.
              </div>`}
          ${this.error?n`<div class="error">${this.error}</div>`:""}
        </glass-panel>
      </div>
    `}}_(je,"properties",{error:{state:!0},busy:{state:!0},joinCode:{type:String},_codeInputOpen:{state:!0},_code:{state:!0}}),_(je,"styles",T`
    * {
      box-sizing: border-box;
    }
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
      /* Brand typography parity (matches register-screen + iOS):
         whole screen defaults to the PebblePath body font (Inter);
         the h1 below uses Nunito. */
      font-family: var(--font-body);
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
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.17em;
      text-transform: uppercase;
      color: var(--text-tertiary);
      /* Sits below the wordmark in a quiet, "subtitle" voice — same
         visual move the website uses for "for every little milestone"
         under the PebblePath wordmark. */
    }
    .companion::before {
      content: '';
      display: inline-block;
      width: 24px;
      height: 1px;
      background: var(--text-tertiary);
      vertical-align: middle;
      margin-right: 12px;
      opacity: 0.6;
    }
    .companion::after {
      content: '';
      display: inline-block;
      width: 24px;
      height: 1px;
      background: var(--text-tertiary);
      vertical-align: middle;
      margin-left: 12px;
      opacity: 0.6;
    }

    h1 {
      /* Nunito — PebblePath brand heading font (was --font-display =
         Bricolage Grotesque, the Portal/Cairn display font). */
      font-family: var(--font-nunito);
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
  `);customElements.define("sign-in-screen",je);const hi="cairn:pendingJoinCode",st="cairn:pendingLoginIntent";class Ue extends z{constructor(){super(),this.error="",this.busy=!1,this.joinCode="",this._step="welcome",this._email="",this._password="",this._displayName="",this._consent=!1,this._code="",this._resetSent=!1,this._invited=!1}willUpdate(e){if(e.has("joinCode")&&this.joinCode&&!this._invited){try{localStorage.setItem(hi,(this.joinCode??"").trim().toUpperCase())}catch{}this._invited=!0}}_iconGoogle(){return n`<svg viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.65 4.65-6.08 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.05 6.05 29.27 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20c0-1.34-.14-2.65-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.31 14.69l6.57 4.82C14.66 16.06 19.04 13 24 13c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.05 6.05 29.27 4 24 4 16.32 4 9.66 8.34 6.31 14.69z"/>
      <path fill="#4CAF50" d="M24 44c5.16 0 9.86-1.98 13.41-5.19l-6.19-5.24C29.21 35.09 26.71 36 24 36c-5.2 0-9.62-3.33-11.28-7.97l-6.51 5.02C9.5 39.56 16.23 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.79 2.24-2.23 4.16-4.09 5.57l6.19 5.24C39.5 36.46 44 30.5 44 24c0-1.34-.14-2.65-.4-3.5z"/>
    </svg>`}_iconApple(){return n`<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M17.05 12.5c0-2.92 2.4-4.32 2.5-4.4-1.36-2-3.48-2.27-4.24-2.3-1.8-.18-3.52 1.06-4.43 1.06-.92 0-2.33-1.03-3.84-1-1.97.03-3.8 1.15-4.82 2.92-2.06 3.57-.52 8.85 1.48 11.76.98 1.42 2.14 3.02 3.66 2.97 1.47-.06 2.03-.95 3.81-.95 1.78 0 2.28.95 3.84.92 1.58-.03 2.59-1.45 3.55-2.88 1.12-1.65 1.58-3.26 1.6-3.34-.04-.02-3.07-1.18-3.11-4.66zm-2.94-8.55c.81-.99 1.36-2.36 1.21-3.73-1.17.05-2.59.78-3.42 1.76-.75.87-1.4 2.27-1.23 3.6 1.3.1 2.64-.66 3.44-1.63z"/>
    </svg>`}_go(e){this._step=e,this.error="",this._resetSent=!1;try{e==="login"?localStorage.setItem(st,"1"):localStorage.removeItem(st)}catch{}}async _runAuth(e,{onSuccess:t}={}){if(!this.busy){this.busy=!0,this.error="";try{const i=await e();t==null||t(i)}catch(i){console.error(i),this.error=this._humanizeAuthError(i)}finally{this.busy=!1}}}_humanizeAuthError(e){const t=(e==null?void 0:e.code)??"";return t==="auth/invalid-credential"||t==="auth/wrong-password"?"That email and password don't match. Try again or reset your password.":t==="auth/user-not-found"?"No account with that email yet.":t==="auth/email-already-in-use"?"An account already exists for that email — try signing in instead.":t==="auth/invalid-email"?"That email doesn't look right.":t==="auth/weak-password"?"Pick a password with at least 6 characters.":t==="auth/popup-closed-by-user"?"Sign-in cancelled. Try again when you're ready.":t==="auth/popup-blocked"?"Your browser blocked the sign-in popup. Allow popups and retry.":(e==null?void 0:e.message)??"Sign-in failed. Try again."}render(){return n`
      <div class="wrap">
        <div class="brand">
          <div class="mark-row">
            <img
              class="brand-icon"
              src=${"/portal/assets/cairn-icon.png"}
              srcset=${"/portal/assets/cairn-icon.png 1x, /portal/assets/cairn-icon-2x.png 2x"}
              alt="Portal"
              width="56"
              height="56"
            />
            <div class="mark-name">PebblePath</div>
          </div>
          <div class="companion">Web Portal</div>
        </div>
        <glass-panel padding="md" lifted variant="strong">
          ${this._step==="welcome"?this._renderWelcome():""}
          ${this._step==="register"?this._renderRegister():""}
          ${this._step==="login"?this._renderLogin():""}
          ${B?"":this._renderConfigHint()}
        </glass-panel>
      </div>
    `}_renderWelcome(){return n`
      <h1>Let's connect</h1>
      <p class="lede">
        ${this._invited?"You've been invited to a family — register or sign in to join.":"One shared space for the whole family."}
      </p>
      <div class="step">
        <div class="actions cta">
          <glass-button
            variant="frost-teal"
            ?disabled=${this.busy}
            @click=${()=>this._go("register")}
          >
            Register
          </glass-button>
        </div>
        <div class="actions cta">
          <glass-button
            variant="frost-neutral"
            ?disabled=${this.busy}
            @click=${()=>this._go("login")}
          >
            Login
          </glass-button>
        </div>
      </div>
    `}_renderProviders({google:e,apple:t,busyText:i}){return n`
      <div class="providers">
        <button
          class="provider-btn"
          ?disabled=${this.busy||!B}
          @click=${e}
        >
          ${this._iconGoogle()}
          <span>${this.busy?i:"Sign in with Google"}</span>
        </button>
        <button
          class="provider-btn apple"
          ?disabled=${this.busy||!B}
          @click=${t}
        >
          ${this._iconApple()}
          <span>${this.busy?i:"Sign in with Apple"}</span>
        </button>
      </div>
    `}_renderLogin(){return n`
      <button
        class="back"
        aria-label="Back"
        @click=${()=>this._go("welcome")}
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
            @input=${e=>this._email=e.target.value}
            autocomplete="email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Your password"
            .value=${this._password}
            @input=${e=>this._password=e.target.value}
            autocomplete="current-password"
            @keydown=${e=>{e.key==="Enter"&&!this.busy&&(e.preventDefault(),this._submitEmailAuth())}}
          />
        </div>
        <div class="toggle-row">
          <button @click=${this._sendReset}>Forgot password?</button>
        </div>
        ${this.error?n`<div class="error">${this.error}</div>`:""}
        ${this._resetSent?n`<div class="success">Check your inbox for the reset link.</div>`:""}
        <div class="actions">
          <glass-button
            variant="primary"
            ?disabled=${this.busy}
            @click=${this._submitEmailAuth}
          >
            ${this.busy?"Signing in…":"Sign in"}
          </glass-button>
        </div>
        ${this._renderProviders({google:()=>this._runAuth(()=>be()),apple:()=>this._runAuth(()=>Pe()),busyText:"Signing in…"})}
      </div>
    `}_submitEmailAuth(){const e=(this._email??"").trim(),t=this._password??"";if(this._step==="register"){const i=(this._displayName??"").trim();if(!i){this.error="Please enter your name.";return}if(!e.includes("@")){this.error="That email doesn't look right.";return}if(t.length<6){this.error="Pick a password with at least 6 characters.";return}if(!this._consent){this.error="Please confirm you are 18+ and agree to the Terms and Privacy Policy.";return}this._runAuth(()=>yt(e,t,i))}else{if(!e||!t){this.error="Email and password are required.";return}this._runAuth(()=>vt(e,t))}}async _sendReset(){const e=(this._email??"").trim();if(!e){this.error="Enter your email first, then tap Forgot password.";return}this.busy=!0,this.error="";try{await xt(e),this._resetSent=!0}catch(t){this.error=this._humanizeAuthError(t)}finally{this.busy=!1}}_renderRegister(){const e=(this._displayName??"").trim().length>0&&(this._email??"").includes("@")&&(this._password??"").length>=6&&this._consent&&!this.busy;return n`
      <button
        class="back"
        aria-label="Back"
        @click=${()=>this._go("welcome")}
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
            @input=${t=>this._displayName=t.target.value}
            autocomplete="name"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            .value=${this._email}
            @input=${t=>this._email=t.target.value}
            autocomplete="email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="At least 6 characters"
            .value=${this._password}
            @input=${t=>this._password=t.target.value}
            autocomplete="new-password"
            @keydown=${t=>{t.key==="Enter"&&!this.busy&&(t.preventDefault(),this._submitEmailAuth())}}
          />
        </div>
        <label class="consent">
          <input
            type="checkbox"
            .checked=${this._consent}
            @change=${t=>this._consent=t.target.checked}
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
        ${this.error?n`<div class="error">${this.error}</div>`:""}
        <div class="actions">
          <glass-button
            variant="primary"
            ?disabled=${!e}
            @click=${this._submitEmailAuth}
          >
            ${this.busy?"Creating account…":"Create account"}
          </glass-button>
        </div>
        ${this._renderProviders({google:()=>this._runAuth(()=>be()),apple:()=>this._runAuth(()=>Pe()),busyText:"Creating…"})}
      </div>
    `}_renderConfigHint(){return n`
      <div class="config-hint">
        Sign-in is awaiting your Firebase config — copy
        <code>.env.example</code> to <code>.env</code> and fill in the web-app
        values from PebblePath's Firebase Console.
      </div>
    `}}_(Ue,"properties",{error:{state:!0},busy:{state:!0},joinCode:{type:String},_step:{state:!0},_email:{state:!0},_password:{state:!0},_displayName:{state:!0},_consent:{state:!0},_code:{state:!0},_resetSent:{state:!0},_invited:{state:!0}}),_(Ue,"styles",T`
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
  `);customElements.define("register-screen",Ue);const se=class se extends z{constructor(){super(),this.value="family"}_select(e){e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent("circle-change",{detail:{value:e},bubbles:!0,composed:!0})))}render(){return n`
      <div class="track" role="tablist" aria-label="Circle">
        ${se.OPTIONS.map(e=>n`
            <button
              role="tab"
              aria-selected=${this.value===e.value}
              class=${this.value===e.value?"active":""}
              @click=${()=>this._select(e.value)}
            >
              ${e.label}
            </button>
          `)}
      </div>
    `}};_(se,"properties",{value:{type:String,reflect:!0}}),_(se,"OPTIONS",[{value:"personal",label:"Just me"},{value:"family",label:"Family"},{value:"extended",label:"Extended"}]),_(se,"styles",T`
    * {
      box-sizing: border-box;
    }
    :host {
      display: inline-block;
    }
    .track {
      display: inline-flex;
      padding: 4px;
      gap: 2px;
      background: var(--glass-fill);
      backdrop-filter: blur(20px) saturate(160%);
      -webkit-backdrop-filter: blur(20px) saturate(160%);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-pill);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }
    button {
      background: transparent;
      color: var(--text-secondary);
      border: none;
      padding: 9px 16px;
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 13px;
      letter-spacing: 0.01em;
      border-radius: var(--radius-pill);
      cursor: pointer;
      transition: color 200ms ease, background 240ms ease;
      min-height: 36px;
    }
    @media (max-width: 420px) {
      button {
        padding: 8px 12px;
        font-size: 12.5px;
      }
    }
    button:hover {
      color: var(--text-primary);
    }
    button.active {
      color: var(--charcoal);
      background: var(--sand-warm);
      box-shadow:
        0 4px 14px rgba(20, 12, 6, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.5);
      font-weight: 600;
    }
  `);let Ge=se;customElements.define("circle-switcher",Ge);class Ye extends z{constructor(){super(),this.event=null,this.members=[]}_icon(e){return e==="birthday"?n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 14h14v6H5z" />
        <path d="M5 14c0-2 1.5-3 3-3h8c1.5 0 3 1 3 3" />
        <path d="M12 11V7" />
        <path d="M11 5.5c0-.8.5-1.5 1-2 .5.5 1 1.2 1 2 0 .6-.4 1-1 1s-1-.4-1-1z" fill="currentColor" stroke="none" />
      </svg>`:e==="anniversary"?n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="9" cy="13" r="5" />
        <circle cx="15" cy="13" r="5" />
      </svg>`:n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>`}_fmtDate(e){const t=S(e)??new Date(e);return{day:t.getDate(),month:t.toLocaleString("en-GB",{month:"short"})}}render(){const e=this.event;if(!e)return n``;const t=this._fmtDate(e.date),i=new Map((this.members??[]).map(r=>[r.uid,r])),a=(e.personIds??[]).map(r=>i.get(r)).filter(Boolean);return n`
      <div
        class="row"
        @click=${()=>this.dispatchEvent(new CustomEvent("edit-event",{detail:e,bubbles:!0,composed:!0}))}
      >
        <div class="icon ${e.type}">${this._icon(e.type)}</div>
        <div class="body">
          <div class="title-row">
            <div class="title">${e.title}</div>
            ${a.length>0?n`<span class="faces">
                  ${a.slice(0,3).map(r=>n`
                      <member-chip
                        .name=${r.displayName}
                        .photo=${r.photoURL??""}
                        .hue=${r.hue}
                        size="22"
                      ></member-chip>
                    `)}
                </span>`:""}
          </div>
          ${e.calTag||e.subtitle?n`<div class="meta">
                ${e.calTag?n`<span class="tagpill">${e.calTag}</span>`:""}${e.subtitle??""}
              </div>`:""}
        </div>
        <div class="date">
          ${t.day}
          <small>${t.month}</small>
        </div>
      </div>
    `}}_(Ye,"properties",{event:{type:Object},members:{type:Array}}),_(Ye,"styles",T`
    :host {
      display: block;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 12px 0;
      border-radius: var(--radius-tile);
      transition: background 200ms ease;
      cursor: pointer;
    }
    .row:hover {
      background: rgba(255, 248, 235, 0.05);
    }
    .icon {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
      color: #fff;
    }
    .icon svg {
      width: 20px;
      height: 20px;
      display: block;
    }
    /* All celebration icons share the warmsun→rose gradient so they
       match the colour Celebrations carry on the calendar (yearly +
       monthly view paint those days with the same gradient). */
    .icon.birthday,
    .icon.anniversary,
    .icon.custom {
      background: var(--gradient-celebration);
    }
    .body {
      flex: 1;
      min-width: 0;
    }
    .title-row {
      display: flex;
      align-items: center;
      gap: 18px;
      min-width: 0;
    }
    .title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 15px;
      letter-spacing: -0.01em;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .faces {
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
    }
    .faces member-chip {
      /* Match the cairn-stack thin halo — was a thick cream ring,
         out of place vs the rest of the app's avatar treatment. */
      box-shadow:
        0 0 0 1px rgba(255, 248, 235, 0.5),
        0 1px 3px rgba(0, 0, 0, 0.25);
      border-radius: 999px;
      margin-left: -7px;
    }
    .faces member-chip:first-child {
      margin-left: 0;
    }
    @media (max-width: 768px) {
      /* Mobile: hide the person avatars beside the event title — the
         title alone is enough on a narrow row, and the chips can
         crowd the type/date area. */
      .faces {
        display: none;
      }
    }
    .meta {
      font-size: 12.5px;
      color: var(--text-secondary);
      margin-top: 2px;
    }
    /* custom calendar tag (e.g. "Daycare 2026 schedule") */
    .tagpill {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 999px;
      background: rgba(198, 123, 92, 0.16);
      color: var(--ink-terracotta);
      font-size: 11px;
      font-weight: 600;
      margin-right: 6px;
    }
    .date {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-primary);
      text-align: right;
      flex-shrink: 0;
    }
    .date small {
      display: block;
      color: var(--text-tertiary);
      font-weight: 500;
      font-size: 11px;
      margin-top: 2px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
  `);customElements.define("event-row",Ye);class Ve extends z{constructor(){super(),this.open=!1,this.activity=null,this.members=[],this.children=[],this.familyId="",this.busy=!1,this.defaultDay="",this.defaultTripId=null,this.defaultTime="",this.defaultDuration=60,this._draft=this._blankDraft(),this._error=""}willUpdate(e){(e.has("activity")||e.has("open"))&&(this.open&&(this._draft=this.activity?this._draftFromActivity(this.activity):this._blankDraft()),this._error="")}_blankDraft(){const e=new Date().toISOString().slice(0,10);return{id:null,title:"",type:"visit",day:this.defaultDay||e,time:this.defaultTime||"",durationMins:this.defaultDuration||60,personIds:[],visibility:"family",calTag:"",notes:"",url:"",tripId:this.defaultTripId||null}}_draftFromActivity(e){if(!e)return this._blankDraft();const t=new Date().toISOString().slice(0,10);return{id:e.id??null,title:e.title??"",type:e.type??"visit",day:e.day??t,time:e.time??"",durationMins:e.durationMins??60,personIds:Array.isArray(e.personIds)?[...e.personIds]:[],visibility:e.visibility??"family",calTag:e.calTag??"",notes:e.notes??"",url:e.url??"",tripId:e.tripId??null}}_set(e,t){this._draft={...this._draft,[e]:t}}_toggleTime(){this._set("time",this._draft.time?"":"09:00")}_togglePerson(e){const t=this._draft.personIds.includes(e);this._set("personIds",t?this._draft.personIds.filter(i=>i!==e):[...this._draft.personIds,e])}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give it a title.";return}if(!e.day){this._error="Pick a date.";return}if(!this.familyId){this._error="No family yet.";return}const t=(e.url??"").trim();if(t&&!/^https?:\/\//i.test(t)){this._error="Links must start with http:// or https://";return}this._error="";const i=!!e.time,a={id:e.id,title:e.title.trim(),type:e.type,day:e.day,time:i?e.time:null,durationMins:i?e.durationMins:null,personIds:[...e.personIds],visibility:e.visibility,calTag:e.calTag.trim()||null,notes:e.notes.trim()||null,url:t||null};e.tripId&&(a.tripId=e.tripId),this.dispatchEvent(new CustomEvent("save",{detail:a}))}_onDelete(){this._draft.id&&confirm("Delete this activity? This can't be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return n``;const e=this._draft,t=!!e.id,i=!!e.tripId,a=!!e.time,r=[{v:30,label:"30m"},{v:60,label:"1h"},{v:120,label:"2h"},{v:180,label:"3h"},{v:1440,label:"All day"}];return n`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>${t?"Edit activity":"New activity"}</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <div class="field">
            <label>Type</label>
            <div class="seg">
              ${[{v:"visit",label:"Visit"},{v:"meal",label:"Meal"},{v:"travel",label:"Travel"},{v:"note",label:"Note"}].map(s=>n`
                  <button
                    class=${e.type===s.v?"active":""}
                    @click=${()=>this._set("type",s.v)}
                  >
                    ${s.label}
                  </button>
                `)}
            </div>
          </div>

          <div class="row-2">
            <div class="field">
              <label>Title</label>
              <input
                type="text"
                placeholder=${this._titlePlaceholder(e.type)}
                .value=${e.title}
                @input=${s=>this._set("title",s.target.value)}
              />
            </div>
            <div class="field">
              <label>Date</label>
              <input
                type="date"
                .value=${e.day}
                @input=${s=>this._set("day",s.target.value)}
              />
            </div>
          </div>

          <div class="field">
            <div
              class="toggle-row ${a?"on":""}"
              @click=${this._toggleTime}
            >
              <div class="body">
                <div class="name">${a?"Has a specific time":"Anytime that day"}</div>
                <div class="desc">
                  ${a?"Shows at this time on the planner / week grid.":"An all-day item, no fixed time."}
                </div>
              </div>
              <div class="toggle-switch"></div>
            </div>
            ${a?n`
                  <div class="time-detail row-2">
                    <div class="field">
                      <label>Starts at</label>
                      <input
                        type="time"
                        .value=${e.time}
                        @input=${s=>this._set("time",s.target.value||"09:00")}
                      />
                    </div>
                    <div class="field">
                      <label>Duration</label>
                      <div class="dur-chips">
                        ${r.map(s=>n`
                            <button
                              class="dur-chip ${e.durationMins===s.v?"on":""}"
                              @click=${()=>this._set("durationMins",s.v)}
                            >
                              ${s.label}
                            </button>
                          `)}
                      </div>
                    </div>
                  </div>
                `:""}
          </div>

          ${i?n`
                <div class="field">
                  <div class="trip-note">
                    <span aria-hidden="true">ⓘ</span>
                    <span>This is part of a trip, so it's visible to everyone on that trip.</span>
                  </div>
                </div>
              `:n`
                ${this._whosGoing(e)}
                <div class="field">
                  <label>Visibility</label>
                  <div class="seg">
                    ${["personal","family","extended"].map(s=>n`
                        <button
                          class=${e.visibility===s?"active":""}
                          @click=${()=>this._set("visibility",s)}
                        >
                          ${s==="personal"?"Just Me":s==="family"?"Participants":"Everyone"}
                        </button>
                      `)}
                  </div>
                </div>
              `}

          <div class="field">
            <label>Tag (optional)</label>
            <input
              type="text"
              placeholder="e.g. Daycare 2026"
              .value=${e.calTag}
              @input=${s=>this._set("calTag",s.target.value)}
            />
          </div>

          <div class="field">
            <label>Link (optional)</label>
            <input
              type="url"
              placeholder="https://..."
              .value=${e.url}
              @input=${s=>this._set("url",s.target.value)}
            />
          </div>

          <div class="field">
            <label>Notes</label>
            <textarea
              placeholder="Anything else worth noting…"
              .value=${e.notes}
              @input=${s=>this._set("notes",s.target.value)}
            ></textarea>
          </div>

          ${this._error?n`<div class="error">${this._error}</div>`:""}

          <div class="actions">
            ${t?n`<button class="delete-btn" @click=${this._onDelete} ?disabled=${this.busy}>
                  Delete
                </button>`:""}
            <div class="spacer"></div>
            <glass-button variant="ghost" @click=${this._onCancel} ?disabled=${this.busy}>
              Cancel
            </glass-button>
            <glass-button variant="primary" @click=${this._onSave} ?disabled=${this.busy}>
              ${this.busy?"Saving…":t?"Save changes":"Add activity"}
            </glass-button>
          </div>
        </glass-panel>
      </div>
    `}_whosGoing(e){const t=Array.isArray(this.members)?this.members:[],i=Array.isArray(this.children)?this.children:[];return t.length===0&&i.length===0?"":n`
      <div class="field">
        <label>Who's going</label>
        <div class="people">
          ${t.map(a=>n`
              <div
                class="person-chip ${e.personIds.includes(a.uid)?"on":""}"
                @click=${()=>this._togglePerson(a.uid)}
              >
                <member-chip
                  .name=${a.displayName}
                  .photo=${a.photoURL??""}
                  .hue=${a.hue}
                  size="22"
                ></member-chip>
                ${a.displayName}
              </div>
            `)}
          ${i.map(a=>n`
              <div
                class="person-chip ${e.personIds.includes("child:"+a.id)?"on":""}"
                @click=${()=>this._togglePerson("child:"+a.id)}
              >
                <member-chip
                  .name=${a.name??""}
                  .photo=${a.photoURL??""}
                  size="22"
                ></member-chip>
                ${a.name??"Child"}
              </div>
            `)}
        </div>
      </div>
    `}_titlePlaceholder(e){return e==="visit"?"e.g. Zoo morning":e==="meal"?"e.g. Pizza night":e==="travel"?"e.g. Drive to grandma's":"e.g. Pack swim bag"}}_(Ve,"properties",{open:{type:Boolean,reflect:!0},activity:{type:Object},members:{type:Array},children:{type:Array},familyId:{type:String},busy:{type:Boolean},defaultDay:{type:String},defaultTripId:{type:String},defaultTime:{type:String},defaultDuration:{type:Number},_draft:{state:!0},_error:{state:!0}}),_(Ve,"styles",T`
    * { box-sizing: border-box; }
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding: 6vh 24px;
      overflow-y: auto;
    }
    :host([open]) {
      display: flex;
    }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(20, 12, 6, 0.55);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: -1;
    }
    .sheet {
      position: relative;
      width: 100%;
      max-width: 620px;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .close {
      background: transparent;
      border: 1px solid var(--glass-border);
      width: 32px;
      height: 32px;
      border-radius: 999px;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 18px;
    }
    .close:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .field { margin-bottom: 14px; min-width: 0; }
    label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: -0.005em;
      margin-bottom: 6px;
    }
    input[type='text'],
    input[type='date'],
    input[type='time'],
    input[type='url'],
    textarea {
      width: 100%;
      min-width: 0;
      background: var(--field-bg);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-input);
      padding: 11px 14px;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 16px;
      transition: border-color 200ms ease, background 200ms ease;
    }
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--teal-pebble);
      background: var(--glass-fill-strong);
    }
    textarea { min-height: 60px; resize: vertical; }
    .row-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    @media (max-width: 520px) {
      .row-2 { grid-template-columns: 1fr; gap: 0; }
    }
    .seg {
      display: inline-flex;
      padding: 3px;
      gap: 2px;
      background: var(--field-bg);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-input);
      flex-wrap: wrap;
    }
    .seg button {
      background: transparent;
      color: var(--text-secondary);
      border: none;
      padding: 7px 14px;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      border-radius: calc(var(--radius-input) - 4px);
      cursor: pointer;
    }
    .seg button.active {
      background: var(--sand-warm);
      color: var(--charcoal);
      font-weight: 600;
    }
    .people {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .person-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 12px 5px 5px;
      background: var(--field-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-pill);
      cursor: pointer;
      font-size: 13px;
      color: var(--text-secondary);
    }
    .person-chip:hover {
      border-color: var(--glass-border-strong);
      color: var(--text-primary);
    }
    .person-chip.on {
      background: rgba(61, 155, 143, 0.18);
      border-color: rgba(61, 155, 143, 0.5);
      color: var(--text-primary);
    }
    .toggle-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      background: var(--field-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-input);
      cursor: pointer;
      user-select: none;
    }
    .toggle-row .body { flex: 1; }
    .toggle-row .name {
      font-size: 14px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .toggle-row .desc {
      font-size: 12.5px;
      color: var(--text-tertiary);
      margin-top: 2px;
      line-height: 1.5;
    }
    .toggle-switch {
      width: 38px;
      height: 22px;
      border-radius: 999px;
      background: rgba(255, 248, 235, 0.18);
      position: relative;
      transition: background 200ms ease;
      flex-shrink: 0;
    }
    .toggle-switch::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: #fff;
      transition: transform 200ms ease;
    }
    .toggle-row.on .toggle-switch { background: var(--teal-pebble); }
    .toggle-row.on .toggle-switch::after { transform: translateX(16px); }
    .time-detail { margin-top: 10px; }
    .dur-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .dur-chip {
      background: var(--field-bg);
      color: var(--text-secondary);
      border: 1px solid var(--glass-border-strong);
      border-radius: var(--radius-pill);
      padding: 7px 14px;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
    }
    .dur-chip.on {
      background: rgba(61, 155, 143, 0.18);
      border-color: rgba(61, 155, 143, 0.5);
      color: var(--text-primary);
      font-weight: 600;
    }
    .actions {
      display: flex;
      gap: 10px;
      margin-top: 22px;
      flex-wrap: wrap;
    }
    .spacer { flex: 1; }
    .delete-btn {
      background: transparent;
      color: var(--rose-soft);
      border: 1px solid rgba(201, 138, 138, 0.35);
      padding: 11px 18px;
      border-radius: var(--radius-pill);
      cursor: pointer;
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 14px;
    }
    .delete-btn:hover {
      background: rgba(201, 138, 138, 0.12);
      border-color: rgba(201, 138, 138, 0.5);
    }
    .error {
      color: var(--rose-soft);
      font-size: 13px;
      margin-top: 10px;
    }
    .hint {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-top: 6px;
      line-height: 1.4;
    }
    .trip-note {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 12px 14px;
      background: rgba(61, 155, 143, 0.08);
      border: 1px solid rgba(61, 155, 143, 0.24);
      border-radius: var(--radius-input);
      font-size: 13px;
      color: var(--text-secondary);
      line-height: 1.45;
    }
  `);customElements.define("activity-form",Ve);class He extends z{constructor(){super();_(this,"_accept","application/pdf,image/*,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword");this.open=!1,this.knownTags=[],this._reset()}_reset(){this._phase="pick",this._events=[],this._err="",this._count=0,this._category="activity",this._tag=""}willUpdate(t){t.has("open")&&this.open&&this._reset()}_cancel(){this.dispatchEvent(new Event("cancel"))}async _onFile(t){var a;const i=(a=t.target.files)==null?void 0:a[0];if(t.target.value="",!!i){this._phase="working",this._err="";try{const{storagePath:r,fileType:s}=await f.uploadSchoolCalendar(i),o=await f.extractSchoolCalendarEvents(r,s);if(!o.length){this._phase="error",this._err="Couldn't find any dated events in that file. Try a clearer PDF or a screenshot of the calendar.";return}this._events=o.map(d=>({...d,_sel:!0})).sort((d,l)=>String(d.date).localeCompare(String(l.date))),this._phase="review"}catch(r){console.error("school import failed:",r),this._phase="error",this._err=(r==null?void 0:r.code)==="functions/permission-denied"?"You're not a member of this family.":(r==null?void 0:r.code)==="storage/unauthorized"?"The upload rule needs publishing — ask the team to deploy storage.rules.":(r==null?void 0:r.code)==="functions/not-found"||(r==null?void 0:r.code)==="functions/internal"?"The importer isn't available right now — try again in a moment.":(r==null?void 0:r.message)??"Something went wrong — try again."}}}_patch(t,i,a){const r=this._events.slice();r[t]={...r[t],[i]:a},this._events=r}get _selected(){return this._events.filter(t=>t._sel&&/^\d{4}-\d{2}-\d{2}$/.test(t.date)&&t.title.trim())}get _allSelected(){return this._events.length>0&&this._events.every(t=>t._sel)}_toggleAll(){const t=!this._allSelected;this._events=this._events.map(i=>({...i,_sel:t}))}async _confirm(){const t=this._selected;if(t.length){this._phase="working";try{const i=await f.importSchoolEvents(t.map(a=>({date:a.date,title:a.title.trim(),type:a.type,description:a.description})),{category:this._category,tag:this._tag});this._count=i,this._phase="done",y(`Added ${i} event${i===1?"":"s"} to the calendar.`),this.dispatchEvent(new CustomEvent("added",{detail:i}))}catch(i){console.error("importSchoolEvents failed:",i),this._phase="error",this._err=(i==null?void 0:i.code)==="permission-denied"?"Couldn't save — you may not have permission.":(i==null?void 0:i.message)??"Couldn't save the events — try again."}}}render(){return this.open?n`
      <div class="backdrop" @click=${this._cancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Import dates from a file</h2>
            <button class="close" @click=${this._cancel} aria-label="Close">
              ×
            </button>
          </div>
          ${this._phase==="pick"?n`
                <p class="lede">
                  Upload a flier, schedule, school calendar, or daycare
                  note, as a
                  <strong>PDF, a screenshot, or a Word doc</strong>. Pebble
                  reads it and pulls out the dates and details. You'll
                  review and pick which to add before anything lands on the
                  family calendar.
                </p>
                <label class="pickbtn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
                  Choose a file
                  <input
                    type="file"
                    accept=${this._accept}
                    @change=${this._onFile}
                  />
                </label>
                <div class="hint">
                  Imported events are tagged so they're visually distinct
                  from your own activities, and shared with your whole
                  family.
                </div>
              `:""}
          ${this._phase==="working"?n`<div class="working">
                <div class="spin"></div>
                <div>Reading it…</div>
              </div>`:""}
          ${this._phase==="review"?n`
                <p class="lede">
                  Found <strong>${this._events.length}</strong> dated
                  ${this._events.length===1?"event":"events"}. Uncheck
                  any you don't want, fix a date or title if Pebble got it
                  slightly wrong, then add them.
                </p>
                <div class="catbar">
                  <div class="catseg" role="group" aria-label="Add these as">
                    <span class="catlbl">Add as</span>
                    ${[["activity","Activities"],["celebration","Celebrations"]].map(([t,i])=>n`<button
                        type="button"
                        class="catopt ${this._category===t?"on":""}"
                        @click=${()=>this._category=t}
                      >
                        ${i}
                      </button>`)}
                  </div>
                  <input
                    class="tagin"
                    type="text"
                    .value=${this._tag}
                    maxlength="60"
                    placeholder="Tag (optional), e.g. Daycare 2026"
                    @input=${t=>this._tag=t.target.value}
                  />
                </div>
                ${(this.knownTags??[]).length?n`<div class="tagsuggest">
                      <span class="tslbl">Reuse a tag</span>
                      ${this.knownTags.map(t=>n`<button
                          type="button"
                          class="tschip ${this._tag===t?"on":""}"
                          @click=${()=>this._tag=this._tag===t?"":t}
                        >
                          ${t}
                        </button>`)}
                    </div>`:""}
                <div class="list">
                  ${this._events.map((t,i)=>n`<div class="row ${t._sel?"":"off"}">
                      <input
                        type="checkbox"
                        .checked=${t._sel}
                        @change=${a=>this._patch(i,"_sel",a.target.checked)}
                        aria-label="Include this event"
                      />
                      <input
                        type="date"
                        .value=${t.date}
                        @change=${a=>this._patch(i,"date",a.target.value)}
                      />
                      <input
                        class="t"
                        type="text"
                        .value=${t.title}
                        @input=${a=>this._patch(i,"title",a.target.value)}
                      />
                      <span class="ty">${t.type}</span>
                    </div>`)}
                </div>
                <div class="foot">
                  <div class="foot-left">
                    <span class="selinfo"
                      >${this._selected.length} selected</span
                    >
                    <button class="selall" @click=${()=>this._toggleAll()}>
                      ${this._allSelected?"Unselect all":"Select all"}
                    </button>
                  </div>
                  <div class="actions">
                    <button class="btn-ghost" @click=${this._cancel}>
                      Cancel
                    </button>
                    <button
                      class="btn-primary"
                      ?disabled=${this._selected.length===0}
                      @click=${this._confirm}
                    >
                      Add ${this._selected.length} to calendar
                    </button>
                  </div>
                </div>
              `:""}
          ${this._phase==="done"?n`<div class="done">
                <div class="big">${this._count}</div>
                <div class="sub">
                  event${this._count===1?"":"s"} added to your family
                  calendar.
                </div>
                <button class="btn-primary" @click=${this._cancel}>
                  Done
                </button>
              </div>`:""}
          ${this._phase==="error"?n`<div>
                <div class="err">${this._err}</div>
                <div class="foot" style="justify-content:center;">
                  <button class="btn-ghost" @click=${()=>this._reset()}>
                    Try again
                  </button>
                </div>
              </div>`:""}
        </glass-panel>
      </div>
    `:n``}}_(He,"properties",{open:{type:Boolean,reflect:!0},knownTags:{type:Array},_phase:{state:!0},_events:{state:!0},_err:{state:!0},_count:{state:!0},_category:{state:!0},_tag:{state:!0}}),_(He,"styles",T`
    * { box-sizing: border-box; }
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding: 6vh 24px;
      overflow-y: auto;
    }
    :host([open]) { display: flex; }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(20, 12, 6, 0.55);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: -1;
    }
    .sheet {
      position: relative;
      width: 100%;
      max-width: 680px;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
    }
    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .close {
      background: transparent;
      border: 1px solid var(--glass-border);
      width: 32px;
      height: 32px;
      border-radius: 999px;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 18px;
    }
    .lede {
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.55;
      margin: 0 0 18px;
    }
    .lede strong { color: var(--text-primary); font-weight: 600; }
    .pickbtn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 18px;
      border-radius: var(--radius-pill);
      background-image: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13.5px;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(139, 90, 62, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
    }
    .pickbtn svg { width: 16px; height: 16px; }
    .pickbtn input { display: none; }
    .hint {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-top: 12px;
    }
    .working {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      padding: 34px 0;
      color: var(--text-secondary);
      font-size: 14px;
      text-align: center;
    }
    .spin {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 3px solid var(--glass-border);
      border-top-color: var(--teal-pebble);
      animation: sp 0.9s linear infinite;
    }
    @keyframes sp {
      to { transform: rotate(360deg); }
    }
    .catbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      margin: 0 0 14px;
    }
    .catseg {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .catlbl {
      font-size: 12.5px;
      font-weight: 600;
      color: var(--text-secondary);
      margin-right: 2px;
    }
    .catopt {
      padding: 6px 12px;
      border-radius: var(--radius-pill);
      border: 1px solid var(--glass-border);
      background: var(--glass-fill);
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      transition: all 150ms ease;
    }
    .catopt.on {
      background: rgba(61, 155, 143, 0.28);
      color: var(--bubble-link-pb);
      border-color: rgba(61, 155, 143, 0.55);
    }
    .tagin {
      flex: 1;
      min-width: 170px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      border-radius: var(--radius-input);
      padding: 8px 12px;
      font-family: var(--font-body);
      font-size: 13px;
      outline: none;
    }
    .tagin::placeholder { color: var(--text-tertiary); }
    .tagin:focus { border-color: rgba(61, 155, 143, 0.5); }
    .tagsuggest {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin: -4px 0 14px;
    }
    .tslbl { font-size: 12px; color: var(--text-tertiary); }
    .tschip {
      padding: 5px 11px;
      border-radius: var(--radius-pill);
      border: 1px solid rgba(198, 123, 92, 0.4);
      background: rgba(198, 123, 92, 0.12);
      color: var(--ink-terracotta);
      font-family: var(--font-body);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    .tschip.on {
      background: rgba(198, 123, 92, 0.3);
      border-color: rgba(198, 123, 92, 0.6);
    }
    .list {
      max-height: 52vh;
      overflow-y: auto;
      margin: 4px -4px;
      padding: 0 4px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border-radius: var(--radius-tile);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
    }
    .row.off { opacity: 0.42; }
    .row input[type='checkbox'] {
      width: 17px;
      height: 17px;
      accent-color: var(--teal-pebble);
      flex-shrink: 0;
      cursor: pointer;
    }
    .row input[type='date'] {
      flex-shrink: 0;
      width: 140px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      border-radius: var(--radius-input);
      padding: 7px 10px;
      font-family: var(--font-body);
      font-size: 12.5px;
      outline: none;
      color-scheme: dark;
    }
    .row input.t {
      flex: 1;
      min-width: 0;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      border-radius: var(--radius-input);
      padding: 7px 11px;
      font-family: var(--font-body);
      font-size: 13px;
      outline: none;
    }
    .ty {
      flex-shrink: 0;
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #9fded2;
      border: 1px solid rgba(61, 155, 143, 0.4);
      border-radius: var(--radius-pill);
      padding: 3px 9px;
    }
    .foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-top: 18px;
      flex-wrap: wrap;
    }
    .foot-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .selinfo { font-size: 12.5px; color: var(--text-secondary); }
    .selall {
      background: transparent;
      border: none;
      padding: 0;
      font-family: var(--font-body);
      font-size: 12.5px;
      font-weight: 600;
      color: var(--ink-teal);
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .selall:hover { color: var(--bubble-link-pb); }
    .actions { display: flex; gap: 10px; }
    .btn-primary {
      padding: 10px 18px;
      border-radius: var(--radius-pill);
      font-weight: 600;
      font-size: 13.5px;
      background-image: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      cursor: pointer;
      font-family: var(--font-body);
    }
    .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-ghost {
      padding: 10px 18px;
      border-radius: var(--radius-pill);
      font-weight: 600;
      font-size: 13.5px;
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      cursor: pointer;
      font-family: var(--font-body);
    }
    .err {
      color: var(--rose-soft);
      font-size: 13.5px;
      line-height: 1.55;
      padding: 16px 0;
      text-align: center;
    }
    .done {
      text-align: center;
      padding: 24px 0 8px;
    }
    .done .big {
      font-family: var(--font-display);
      font-size: 30px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .done .sub {
      color: var(--text-secondary);
      font-size: 13.5px;
      margin: 6px 0 18px;
    }
  `);customElements.define("school-import-modal",He);const nt=[{vb:"0 0 100 70",d:"M 8 38 C 6 18, 26 6, 48 8 C 72 10, 94 18, 94 38 C 94 58, 72 66, 48 64 C 22 62, 10 58, 8 38 Z"},{vb:"0 0 80 90",d:"M 38 6 C 56 8, 70 24, 72 46 C 74 70, 58 84, 38 84 C 16 84, 6 66, 8 44 C 10 22, 22 4, 38 6 Z"},{vb:"0 0 90 80",d:"M 14 26 C 18 10, 38 4, 56 8 C 78 14, 86 32, 82 50 C 76 70, 54 78, 32 72 C 12 66, 10 42, 14 26 Z"},{vb:"0 0 70 60",d:"M 8 30 C 8 14, 22 6, 38 8 C 54 10, 64 22, 62 36 C 60 52, 44 56, 28 54 C 14 52, 8 44, 8 30 Z"},{vb:"0 0 110 75",d:"M 8 38 C 6 18, 30 8, 56 10 C 84 12, 104 22, 104 40 C 102 58, 80 68, 52 66 C 24 64, 10 56, 8 38 Z"},{vb:"0 0 95 75",d:"M 14 24 C 18 10, 40 6, 56 12 C 70 18, 80 18, 86 30 C 90 44, 80 56, 64 60 C 48 64, 28 60, 18 50 C 10 42, 10 32, 14 24 Z"},{vb:"0 0 80 80",d:"M 14 20 C 20 10, 36 6, 52 10 C 68 16, 76 30, 72 48 C 66 64, 50 72, 32 66 C 16 60, 8 44, 10 30 C 12 24, 12 22, 14 20 Z"}];function gi(g){let e=5381;const t=String(g??"");for(let i=0;i<t.length;i+=1)e=e*33^t.charCodeAt(i);return nt[Math.abs(e)%nt.length]}const ot={motor:{cls:"fam-motor",fill:"#6b9ac4",dom:"Motor"},language:{cls:"fam-language",fill:"#d4a843",dom:"Language"},socialEmotional:{cls:"fam-social",fill:"#c98a8a",dom:"Social-Emotional"},cognitive:{cls:"fam-cognitive",fill:"#8b7bb5",dom:"Cognitive"},cross:{cls:"fam-cross",fill:"#3d9b8f",dom:""}},lt={strength:{label:"Strength",svg:n`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.6l-5.88 3.01 1.12-6.55-4.76-4.64 6.58-.96L12 2.5z"/></svg>`},watching:{label:"Watching",svg:n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3.2"/></svg>`},connection:{label:"Connection",svg:n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.07.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.07-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`},nudge:{label:"Try this",svg:n`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>`}};class qe extends z{constructor(){super(),this.type="nudge",this.domain="cross",this.title="",this.body=""}render(){const e=ot[this.domain]??ot.cross,t=lt[this.type]??lt.nudge,i=gi(`${this.title}${this.type}`);return n`
      <div class="insight ${e.cls}">
        <svg
          class="wm"
          viewBox=${i.vb}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <path d=${i.d} fill=${e.fill} />
        </svg>
        <div class="irow">
          <div class="icirc">${t.svg}</div>
          <div class="icontent">
            <div class="cat">
              <span class="type">${t.label}</span>
              ${e.dom?n`<span class="sep">·</span
                    ><span class="dom">${e.dom}</span>`:""}
            </div>
            <h4>${this.title}</h4>
            <p>${this.body}</p>
          </div>
        </div>
      </div>
    `}}_(qe,"properties",{type:{type:String},domain:{type:String},title:{type:String},body:{type:String}}),_(qe,"styles",T`
    *, *::before, *::after { box-sizing: border-box; }
    :host { display: block; }
    .insight {
      position: relative;
      border-radius: var(--radius-tile);
      border: 1px solid var(--glass-border);
      padding: 16px 18px;
      overflow: hidden;
      isolation: isolate;
    }
    .wm {
      position: absolute;
      top: -28px;
      left: -34px;
      width: 150px;
      height: 130px;
      opacity: 0.18;
      z-index: 0;
      pointer-events: none;
    }
    .irow {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .icirc {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1px;
    }
    .icirc svg { width: 14px; height: 14px; }
    .icontent { flex: 1; min-width: 0; }
    .cat {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 9.5px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      line-height: 1;
      margin-bottom: 6px;
    }
    .cat .sep,
    .cat .dom { color: var(--text-tertiary); }
    h4 {
      position: relative;
      z-index: 1;
      margin: 0 0 5px;
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 700;
      color: var(--text-primary);
      line-height: 1.32;
      letter-spacing: -0.005em;
    }
    p {
      position: relative;
      z-index: 1;
      margin: 0;
      font-size: 13.5px;
      color: var(--text-secondary);
      line-height: 1.52;
    }
    /* per-family harmony — base colour drives bg tint + icon-circle;
       light accent drives the cat-label + glyph (legible on dusk).
       Mirrors the app's domain mapping (motor=blue, language=amber,
       social=rose, cognitive=purple, cross=teal). */
    /* Hue tint layered OVER the themed glass fill — without the
       --glass-fill base the faint tint sat straight on the page and
       charcoal text read as muddy "dark-on-dark" in light mode. The
       base makes it a proper light card in light / stays subtle in
       dark (--glass-fill there is ~0.06, invisible under the tint). */
    .fam-motor { background: linear-gradient(135deg, rgba(107,154,196,0.16), rgba(107,154,196,0.05)), var(--glass-fill); }
    .fam-motor .icirc { background: rgba(107,154,196,0.22); color: var(--ink-blue); }
    .fam-motor .cat .type { color: var(--ink-blue); }
    .fam-language { background: linear-gradient(135deg, rgba(212,168,67,0.16), rgba(212,168,67,0.05)), var(--glass-fill); }
    .fam-language .icirc { background: rgba(212,168,67,0.22); color: var(--ink-amber); }
    .fam-language .cat .type { color: var(--ink-amber); }
    .fam-social { background: linear-gradient(135deg, rgba(201,138,138,0.16), rgba(201,138,138,0.05)), var(--glass-fill); }
    .fam-social .icirc { background: rgba(201,138,138,0.22); color: var(--ink-rose); }
    .fam-social .cat .type { color: var(--ink-rose); }
    .fam-cognitive { background: linear-gradient(135deg, rgba(139,123,181,0.16), rgba(139,123,181,0.05)), var(--glass-fill); }
    .fam-cognitive .icirc { background: rgba(139,123,181,0.22); color: var(--ink-purple); }
    .fam-cognitive .cat .type { color: var(--ink-purple); }
    .fam-cross { background: linear-gradient(135deg, rgba(61,155,143,0.16), rgba(61,155,143,0.05)), var(--glass-fill); }
    .fam-cross .icirc { background: rgba(61,155,143,0.22); color: var(--ink-teal); }
    .fam-cross .cat .type { color: var(--ink-teal); }
  `);customElements.define("insight-card",qe);const pe=[{key:"motor",label:"Motor",color:"#6b9ac4",svg:n`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="13.5" cy="5.5" r="2"/><path d="M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5 0-.8.1L6 7.6V12h2V8.9l1.8-.7z"/></svg>`},{key:"language",label:"Language",color:"#d4a843",svg:n`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>`},{key:"socialEmotional",label:"Social-Emotional",color:"#c98a8a",svg:n`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`},{key:"cognitive",label:"Cognitive",color:"#8b7bb5",svg:n`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11 4.2A2.7 2.7 0 0 0 6.4 5.9a2.6 2.6 0 0 0-2.5 2.6c0 .5.1.9.3 1.3A2.7 2.7 0 0 0 3 12.2a2.7 2.7 0 0 0 1.2 2.2 2.6 2.6 0 0 0-.2 1c0 1.5 1.2 2.7 2.7 2.7.2 0 .4 0 .6-.1A2.7 2.7 0 0 0 11 20V4.2zm2 0v15.8a2.7 2.7 0 0 0 3.7-1.9c.2 0 .4.1.6.1 1.5 0 2.7-1.2 2.7-2.7 0-.4-.1-.7-.2-1A2.7 2.7 0 0 0 21 12.2a2.7 2.7 0 0 0-1.2-2.4c.2-.4.3-.8.3-1.3a2.6 2.6 0 0 0-2.5-2.6A2.7 2.7 0 0 0 13 4.2z"/></svg>`}];function oe(g){return g==="selfCare"?"motor":g}function ui(g){var s;if(!g||Number.isNaN(((s=g.getTime)==null?void 0:s.call(g))??NaN))return"";const e=new Date;let t=(e.getFullYear()-g.getFullYear())*12+(e.getMonth()-g.getMonth());e.getDate()<g.getDate()&&(t-=1),t=Math.max(0,t);const i=Math.floor(t/12),a=t%12;if(i===0)return`${a} month${a===1?"":"s"}`;const r=a?`, ${a} month${a===1?"":"s"}`:"";return`${i} year${i===1?"":"s"}${r}`}class We extends z{constructor(){super(),this.child=null,this.children=[],this.milestones=[],this.insights=[],this.dailyCard=null,this.readonly=!1,this._focusedDot=null,this._onDocClick=e=>{var a;if(this._focusedDot==null)return;(((a=e.composedPath)==null?void 0:a.call(e))??[]).some(r=>{var s,o,d,l;return((o=(s=r==null?void 0:r.classList)==null?void 0:s.contains)==null?void 0:o.call(s,"tl-dot"))||((l=(d=r==null?void 0:r.classList)==null?void 0:d.contains)==null?void 0:l.call(d,"tl-popover"))})||(this._focusedDot=null)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onDocClick)}disconnectedCallback(){document.removeEventListener("click",this._onDocClick),super.disconnectedCallback()}_domainStats(e){const t=(this.milestones??[]).filter(r=>oe(r.category)===e),i=t.filter(r=>r.status==="achieved").length,a=t.length;return{achieved:i,total:a,pct:a?Math.round(i/a*100):0}}_pebbleIcon(){return n`<pebble-icon></pebble-icon>`}_ageMonths(e){var a;if(!e||Number.isNaN(((a=e.getTime)==null?void 0:a.call(e))??NaN))return 0;const t=new Date;let i=(t.getFullYear()-e.getFullYear())*12+(t.getMonth()-e.getMonth());return t.getDate()<e.getDate()&&(i-=1),Math.max(0,i)}_timelineModel(){var h;const e=this.milestones??[],t=this._ageMonths((h=this.child)==null?void 0:h.dateOfBirth),i=e.reduce((c,b)=>b.status==="achieved"?Math.max(c,b.ageRangeEndMonths??b.ageRangeStartMonths??0):c,0);let a=Math.max(i+12,t+6,18);a=Math.ceil(a/6)*6;const r=c=>Math.min(98,Math.max(2,(c??0)/a*100)),s=c=>c<=0?"birth":c<24?`${c} mo`:c%12===0?`${c/12} yr`:`${(c/12).toFixed(1).replace(/\.0$/,"")} yr`,o=(c,b)=>{const v=c.ageRangeStartMonths??0,k=c.ageRangeEndMonths??v;return{left:r(v),future:!!b,title:c.title??"",status:c.status,ageLabel:v===k?`at ${s(v)}`:`${s(v)}–${s(k)}`}},d=[{key:"motor",cls:"motor",name:"Motor"},{key:"language",cls:"language",name:"Language"},{key:"socialEmotional",cls:"social",name:"Social-Emo."},{key:"cognitive",cls:"cognitive",name:"Cognitive"}].map(c=>{const b=e.filter(P=>oe(P.category)===c.key),v=b.filter(P=>P.status==="achieved").sort((P,F)=>(P.ageRangeStartMonths??0)-(F.ageRangeStartMonths??0));let k=v;v.length>7&&(k=Array.from({length:7},(P,F)=>v[Math.round(F*(v.length-1)/6)]));const m=k.map(P=>o(P,!1)),x=b.filter(P=>P.status!=="achieved").sort((P,F)=>(P.ageRangeStartMonths??0)-(F.ageRangeStartMonths??0))[0];return x&&m.push(o(x,!0)),{...c,dots:m}}),l=Array.from({length:7},(c,b)=>s(Math.round(b*a/6))),p=Math.min(1,Math.max(0,t/a));return{lanes:d,axis:l,ageM:t,nowFrac:p}}render(){const e=this.child;if(!e)return n`<div class="panel empty">No child selected yet.</div>`;const t=this.milestones??[],i=t.filter(c=>c.status==="achieved"),a=t.length?Math.round(i.length/t.length*100):0,r=i.slice().sort((c,b)=>(b.ageRangeStartMonths??0)-(c.ageRangeStartMonths??0)).slice(0,4),s=t.filter(c=>c.status!=="achieved").slice(0,4),o=e.themeColorHex||"var(--teal-pebble)",d=this.insights??[],l=this._timelineModel(),p=c=>c==="achieved"?"done":c==="emerging"?"emerging":"up",h=c=>c==="achieved"?"Achieved":c==="emerging"?"Emerging":"Upcoming";return n`
      ${(this.children??[]).length>1?n`<div class="switcher">
            ${this.children.map(c=>n`<button
                class=${c.id===e.id?"on":""}
                @click=${()=>this.dispatchEvent(new CustomEvent("select-child",{detail:c.id,bubbles:!0,composed:!0}))}
              >
                <member-chip
                  .name=${c.name}
                  .photo=${c.profilePhotoURL??""}
                  .hue=${150}
                  size="22"
                ></member-chip>
                ${c.name}
              </button>`)}
          </div>`:""}

      <section>
        <div
          class="child-card"
          style="--theme:${o};--wm:url('${"/portal/"}assets/playgroundv2.jpg');"
        >
          <span class="ring">
            <member-chip
              .name=${e.name}
              .photo=${e.profilePhotoURL??""}
              .hue=${150}
              size="72"
            ></member-chip>
          </span>
          <div class="meta">
            <h2>${e.name}</h2>
            <div class="sub">${ui(e.dateOfBirth)}</div>
            <span class="agepill"
              >${i.length} of ${t.length} milestones
              achieved</span
            >
          </div>
          <div class="progress">
            <div class="big">${a}%</div>
            <div class="lbl">of tracked milestones</div>
          </div>
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2>Milestone areas</h2>
        </div>
        <div class="domains">
          ${pe.map(c=>{const b=this._domainStats(c.key);return n`<div
              class="dtile"
              style="--c:${c.color};--tint:${c.color}26;"
            >
              <div class="dico">${c.svg}</div>
              <div class="dname">${c.label}</div>
              <div class="dcount">${b.achieved} of ${b.total} achieved</div>
              <div class="bar"><i style="width:${b.pct}%"></i></div>
            </div>`})}
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2>Timeline</h2>
        </div>
        <div class="panel">
          <div class="timeline">
            <div
              class="tl-now"
              style="left:calc(var(--tl-pad, 118px) + (100% - var(--tl-pad, 118px)) * ${l.nowFrac});"
            >
              <span>Today</span>
            </div>
            ${l.lanes.map(c=>n`<div class="tl-lane ${c.cls}">
                <div class="tl-name">${c.name}</div>
                <div class="tl-track">
                  ${c.dots.map((b,v)=>{var P,F;const k=((P=this._focusedDot)==null?void 0:P.lane)===c.key&&((F=this._focusedDot)==null?void 0:F.idx)===v,m=b.status==="achieved"?"Achieved":b.status==="emerging"?"Emerging":"Upcoming",x=b.title?`${b.title} · ${b.ageLabel} · ${m}`:`${b.ageLabel} · ${m}`;return n`
                      <button
                        type="button"
                        class=${"tl-dot"+(b.future?" future":"")+(k?" on":"")}
                        style="left:${b.left}%"
                        title=${x}
                        aria-label=${x}
                        @click=${N=>{N.stopPropagation(),this._focusedDot=k?null:{lane:c.key,idx:v}}}
                      ></button>
                      ${k?n`<div
                            class="tl-popover"
                            style="left:${b.left}%"
                          >
                            ${b.title?n`<div class="tl-popover-title">
                                  ${b.title}
                                </div>`:""}
                            <div class="tl-popover-meta">
                              ${b.ageLabel} · ${m}
                            </div>
                          </div>`:""}
                    `})}
                </div>
              </div>`)}
            <div class="tl-axis">
              ${l.axis.map(c=>n`<span>${c}</span>`)}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="two-col">
          <div>
            <div class="section-head"><h2>Coming up</h2></div>
            <div class="panel">
              ${s.length===0?n`<div class="empty">
                    Nothing flagged as next right now — ${e.name} is on
                    track across the board.
                  </div>`:s.map(c=>{var v,k;const b=((v=pe.find(m=>m.key===oe(c.category)))==null?void 0:v.color)??"#6b9ac4";return n`<div class="ms-row">
                      <span class="ms-dot" style="background:${b}"></span>
                      <div class="t">
                        ${c.title}
                        <small
                          >${((k=pe.find(m=>m.key===oe(c.category)))==null?void 0:k.label)??""}
                          · ${c.ageRangeStartMonths}–${c.ageRangeEndMonths}
                          months</small
                        >
                      </div>
                      <span class="ms-stat ${p(c.status)}"
                        >${h(c.status)}</span
                      >
                    </div>`})}
            </div>
            <div class="section-head" style="margin-top:18px;">
              <h2>Recently achieved</h2>
            </div>
            <div class="panel">
              ${r.length===0?n`<div class="empty">
                    No milestones logged as achieved yet.
                  </div>`:r.map(c=>{var v;const b=((v=pe.find(k=>k.key===oe(c.category)))==null?void 0:v.color)??"#6b9ac4";return n`<div class="ms-row">
                      <span class="ms-dot" style="background:${b}"></span>
                      <div class="t">${c.title}</div>
                      <span class="ms-stat done">Achieved</span>
                    </div>`})}
            </div>
          </div>

          <div>
            <div class="section-head"><h2>Growth insights</h2></div>
            ${d.length===0?n`<div class="panel insights-empty">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15l-1.9-4.1L5.5 9l4.6-1.4L12 3z"
                    />
                    <path d="M18 14l.9 2.2L21 17l-2.1.8L18 20l-.9-2.2L15 17l2.1-.8L18 14z" />
                  </svg>
                  <p>
                    Pebble is still learning about ${e.name} — growth
                    insights appear here as more milestones are logged in
                    the app.
                  </p>
                </div>`:n`<div class="insight-stack">
                  ${d.map(c=>n`<insight-card
                      .type=${c.type}
                      .domain=${c.domain}
                      .title=${c.title}
                      .body=${c.body}
                    ></insight-card>`)}
                </div>`}
          </div>
        </div>
      </section>

      <section>
        ${this.readonly?n`<div class="vis-note">
              You're seeing ${e.name}'s milestones &amp; growth
              insights <b>read-only</b>, shared by the parents. Pebble,
              the pediatrician summary and any editing stay with the
              parents — a parent can revoke this access any time.
            </div>`:n`<div class="panel">
                <div class="cta-card">
                  <div class="cic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3v5h5"/><path d="M14 3H6v18h12V8z"/><path d="M9 13h6M9 17h6"/></svg>
                  </div>
                  <div class="ctx">
                    <h4>Pediatrician summary</h4>
                    <p>
                      A clinician-ready summary of ${e.name}'s
                      milestone history, written by Pebble. Bring it to
                      your next check-up.
                    </p>
                  </div>
                  <button
                    class="btn-primary"
                    @click=${()=>this.dispatchEvent(new CustomEvent("ask-pebble",{detail:`Write a clinician-ready summary of ${e.name}'s developmental milestone history I can bring to our next pediatrician visit — strengths, anything to watch, and current progress by domain.`,bubbles:!0,composed:!0}))}
                  >
                    Generate summary
                  </button>
                </div>
              </div>`}
      </section>
    `}}_(We,"properties",{child:{type:Object},children:{type:Array},milestones:{type:Array},insights:{type:Array},dailyCard:{type:Object},readonly:{type:Boolean,reflect:!0},_focusedDot:{state:!0}}),_(We,"styles",T`
    *, *::before, *::after { box-sizing: border-box; }
    :host { display: block; }
    section { margin-bottom: 30px; }
    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
      padding: 0 4px;
      gap: 14px;
      flex-wrap: wrap;
    }
    .section-head h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
    .note {
      font-size: 12.5px;
      color: var(--text-tertiary);
      margin: 0;
    }
    .panel {
      position: relative;
      border-radius: var(--radius-card);
      background: var(--glass-fill-strong);
      backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      border: 1px solid var(--glass-border-strong);
      box-shadow: var(--glass-shadow);
      padding: 24px;
    }

    /* child switcher */
    .switcher {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }
    .switcher button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 7px 14px 7px 8px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
    }
    .switcher button.on {
      background: rgba(61, 155, 143, 0.2);
      color: #fff;
      border-color: rgba(61, 155, 143, 0.45);
    }

    /* Child hero card — mirrors the iOS app card: per-child theme
       gradient, the playgroundv2.jpg watermark behind it, a left-side
       theme colour-filter + soft blur for text legibility, white
       text. (--theme + --wm are set inline per child.) */
    .child-card {
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      gap: 22px;
      flex-wrap: wrap;
      padding: 24px;
      border-radius: var(--radius-card);
      color: #fff;
      background: linear-gradient(
        135deg,
        var(--theme, var(--teal-pebble)) 0%,
        color-mix(in srgb, var(--theme, var(--teal-pebble)) 58%, #ffffff) 100%
      );
      box-shadow: 0 6px 22px rgba(20, 50, 46, 0.22);
    }
    .child-card::before {
      content: '';
      position: absolute;
      inset: 0;
      /* 100% auto (was cover + scale 1.06) — the card is wide & short,
         so cover zoomed hard into a tiny crop on desktop. Sizing to
         full card WIDTH at the image's natural aspect shows the whole
         horizontal scene (much more of the original image); the short
         card just trims top/bottom. Scale removed (was pure extra
         zoom). */
      background: var(--wm) center / 100% auto no-repeat;
      opacity: 0.15;
      /* Blur the watermark itself (cheap filter, no backdrop
         compositing) — same softened look as the iOS card's
         backdrop-blur but without the heavy stacked-blur cost. */
      filter: blur(2px);
      z-index: 0;
      pointer-events: none;
    }
    .child-card::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 62%;
      background: linear-gradient(
        90deg,
        color-mix(in srgb, var(--theme, var(--teal-pebble)) 88%, transparent) 0%,
        color-mix(in srgb, var(--theme, var(--teal-pebble)) 55%, transparent) 50%,
        transparent 100%
      );
      z-index: 0;
      pointer-events: none;
    }
    .child-card > * {
      position: relative;
      z-index: 1;
    }
    .ring {
      border-radius: 999px;
      padding: 3px;
      background: rgba(255, 255, 255, 0.85);
      display: inline-flex;
    }
    .meta h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 26px;
      letter-spacing: -0.02em;
      color: #fff;
    }
    .meta .sub {
      color: rgba(255, 255, 255, 0.85);
      font-size: 14px;
      margin-top: 3px;
    }
    .meta .agepill {
      display: inline-block;
      margin-top: 10px;
      padding: 4px 12px;
      border-radius: var(--radius-pill);
      font-size: 12.5px;
      font-weight: 600;
      background: rgba(255, 255, 255, 0.18);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.32);
    }
    /* Identity · headline-stat as ONE left-aligned cluster, divider
       in white-alpha (reads on the coloured card). */
    .progress {
      margin-left: 6px;
      padding-left: 28px;
      border-left: 1px solid rgba(255, 255, 255, 0.28);
      text-align: left;
    }
    .progress .big {
      font-family: var(--font-display);
      font-size: 30px;
      font-weight: 700;
      color: #fff;
    }
    .progress .lbl {
      color: rgba(255, 255, 255, 0.85);
      font-size: 12.5px;
      margin-top: 2px;
    }

    /* domain tiles */
    .domains {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
    }
    @media (max-width: 880px) {
      .domains { grid-template-columns: repeat(2, 1fr); }
    }
    .dtile {
      border-radius: var(--radius-tile);
      padding: 18px;
      border: 1px solid var(--glass-border);
      background: var(--tint);
    }
    .dico {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin-bottom: 14px;
      background: var(--c);
    }
    .dico svg { width: 18px; height: 18px; }
    .dname {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 14px;
    }
    .dcount {
      font-size: 12.5px;
      color: var(--text-secondary);
      margin: 4px 0 12px;
    }
    .bar {
      height: 7px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.12);
      overflow: hidden;
    }
    .bar i {
      display: block;
      height: 100%;
      border-radius: 999px;
      background: var(--c);
    }

    /* milestone rows */
    .ms-row {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 13px 4px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.07);
    }
    .ms-row:last-child { border-bottom: none; }
    .ms-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .ms-row .t {
      flex: 1;
      font-size: 14.5px;
      font-weight: 500;
    }
    .ms-row .t small {
      display: block;
      color: var(--text-tertiary);
      font-size: 12px;
      font-weight: 400;
      margin-top: 2px;
    }
    .ms-stat {
      padding: 4px 11px;
      border-radius: var(--radius-pill);
      font-size: 11.5px;
      font-weight: 600;
      white-space: nowrap;
    }
    .ms-stat.done { background: rgba(79, 194, 107, 0.18); color: var(--ink-green); }
    .ms-stat.emerging { background: rgba(212, 168, 67, 0.18); color: var(--ink-amber); }
    .ms-stat.up {
      background: var(--field-bg);
      color: var(--text-secondary);
      border: 1px solid var(--hairline);
    }

    .two-col {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 18px;
      align-items: start;
    }
    @media (max-width: 1024px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* Growth insights now render via the shared <insight-card>
       component (Portal v4 Batch G) — the pebble-watermark + family
       harmony CSS lives there. This only spaces the stack. */
    .insight-stack {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* "Timeline" longitudinal view — concept-faithful. */
    .timeline {
      position: relative;
      /* Generous top pad reserves a clear band for the "Today"
         marker chip so it isn't crammed against the panel's top
         edge (2026-05-18 redesign). */
      padding: 40px 4px 4px;
      /* lane-label width + the 14px lane gap = the left pad the
         "now" marker and axis align to. Made a custom property so
         the ≤560px refinement can shrink it without desyncing. */
      --tl-name-w: 104px;
      --tl-pad: 118px;
    }
    .tl-lane { display: flex; align-items: center; gap: 14px; height: 46px; }
    .tl-name {
      width: var(--tl-name-w, 104px);
      font-size: 12.5px;
      font-weight: 600;
      color: var(--text-secondary);
      text-align: right;
      flex-shrink: 0;
    }
    .tl-track {
      flex: 1;
      position: relative;
      height: 2px;
      /* Theme-aware rail — the hardcoded near-white (0.12) was
         invisible on the light sand surface. glass-border-strong
         reads as a definite line in BOTH themes. */
      background: var(--glass-border-strong);
      border-radius: 2px;
    }
    /* 2026-05-24 — was an i element (presentational). Now a button so
       each dot is keyboard-focusable, screen-reader-announced, and
       carries a click handler that toggles the milestone popover.
       Visual styling intentionally identical to the old i look — button
       defaults reset, lane color via parent class, halo preserved. */
    .tl-track .tl-dot {
      position: absolute;
      top: 50%;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 0 3px var(--panel-solid);
      /* Button reset. */
      padding: 0;
      border: none;
      cursor: pointer;
      font: inherit;
      color: inherit;
      transition: transform 140ms ease, box-shadow 140ms ease;
    }
    .tl-track .tl-dot:hover,
    .tl-track .tl-dot.on {
      transform: translate(-50%, -50%) scale(1.35);
    }
    .tl-track .tl-dot:focus-visible {
      outline: 2px solid var(--ink-green);
      outline-offset: 3px;
    }
    .tl-lane.motor .tl-track .tl-dot { background: #6b9ac4; }
    .tl-lane.language .tl-track .tl-dot { background: #d4a843; }
    .tl-lane.social .tl-track .tl-dot { background: #c98a8a; }
    .tl-lane.cognitive .tl-track .tl-dot { background: #8b7bb5; }
    .tl-track .tl-dot.future {
      background: transparent !important;
      border: 2px dashed var(--glass-border-strong);
      box-shadow: none;
    }
    /* Milestone popover — appears above a clicked dot. Positioned via
       inline left:X% so it lines up with the dot column; translate
       centers it horizontally and lifts it above the rail. Arrow drawn
       via ::after pointing back down at the dot. */
    .tl-popover {
      position: absolute;
      bottom: calc(100% + 10px);
      transform: translateX(-50%);
      min-width: 140px;
      max-width: 220px;
      padding: 8px 12px;
      background: var(--panel-solid);
      border: 1px solid var(--glass-border-strong);
      border-radius: 10px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
      z-index: 4;
      pointer-events: auto;
    }
    .tl-popover::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid var(--panel-solid);
    }
    .tl-popover-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-primary);
      line-height: 1.3;
      margin-bottom: 2px;
    }
    .tl-popover-meta {
      font-size: 11.5px;
      color: var(--text-tertiary);
      line-height: 1.2;
    }
    .tl-now {
      position: absolute;
      /* Line begins just under the reserved top band (the chip
         sits in that band) and runs down through the lanes. */
      top: 34px;
      bottom: 24px;
      width: 2px;
      background: linear-gradient(180deg, #4fc26b, transparent);
    }
    .tl-now span {
      position: absolute;
      /* Pill chip floats in the reserved 40px top band with clear
         margin from the panel edge and the first lane. */
      top: -28px;
      left: 50%;
      transform: translateX(-50%);
      padding: 3px 11px;
      border-radius: 999px;
      background: color-mix(in srgb, var(--ink-green) 18%, transparent);
      border: 1px solid color-mix(in srgb, var(--ink-green) 50%, transparent);
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.02em;
      color: var(--ink-green);
      white-space: nowrap;
    }
    .tl-axis {
      display: flex;
      justify-content: space-between;
      margin: 8px 0 0 var(--tl-pad, 118px);
      font-size: 11px;
      color: var(--text-tertiary);
    }

    /* Pediatrician summary CTA — concept .cta-card. */
    .cta-card {
      display: flex;
      align-items: center;
      gap: 18px;
      flex-wrap: wrap;
    }
    .cta-card .cic {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background-image: var(--gradient-cta);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-shrink: 0;
    }
    .cta-card .cic svg { width: 22px; height: 22px; }
    .cta-card .ctx { flex: 1; min-width: 200px; }
    .cta-card .ctx h4 {
      margin: 0 0 4px;
      font-family: var(--font-display);
      font-size: 16px;
    }
    .cta-card .ctx p {
      margin: 0;
      font-size: 13px;
      color: var(--text-secondary);
    }
    .btn-primary {
      padding: 10px 18px;
      border-radius: var(--radius-pill);
      font-weight: 600;
      font-size: 13.5px;
      background-image: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      cursor: pointer;
      font-family: var(--font-body);
      box-shadow: 0 4px 14px rgba(139, 90, 62, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
    }
    .btn-primary:hover { background-image: var(--gradient-cta-hover); }
    .vis-note {
      font-size: 12.5px;
      color: var(--text-tertiary);
      line-height: 1.5;
      margin-top: 12px;
      padding: 0 4px;
    }
    .vis-note b { color: var(--text-secondary); }

    /* Phone refinement — the timeline's fixed lane-label gutter is
       too wide on narrow screens; shrink it (and the axis text) so
       the track keeps usable width. The custom-prop pad keeps the
       "now" marker + axis aligned automatically. */
    @media (max-width: 560px) {
      .timeline {
        --tl-name-w: 58px;
        --tl-pad: 72px;
      }
      .tl-name { font-size: 11px; }
      .tl-axis { font-size: 10px; }
      /* Phones: keep the hero card a SINGLE simple row — avatar ·
         name/age · % all on one line (Thomas). Drop the redundant
         "X of Y achieved" pill + the divider for simplicity, shrink
         the % so it fits beside the identity, trim panel padding. */
      .panel { padding: 16px; }
      .child-card {
        gap: 14px;
        flex-wrap: nowrap;
        align-items: center;
        padding: 16px;
      }
      .meta {
        flex: 1;
        min-width: 0;
      }
      .meta h2 { font-size: 20px; }
      .meta .sub { font-size: 13px; }
      .meta .agepill { display: none; }
      .progress {
        flex-shrink: 0;
        margin-left: 0;
        padding-left: 0;
        border-left: none;
        text-align: right;
      }
      .progress .big { font-size: 22px; }
      .progress .lbl { font-size: 11px; }
    }

    /* Pebble's daily card */
    .daily {
      border-radius: var(--radius-card);
      padding: 24px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #3d9b8f 0%, #1f5c54 100%);
      box-shadow: 0 12px 30px rgba(31, 92, 84, 0.4);
    }
    .daily::after {
      content: '';
      position: absolute;
      right: -30px;
      top: -30px;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.14), transparent 70%);
    }
    .daily .tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 10px;
    }
    .daily .tag svg { width: 13px; height: 13px; }
    .daily h3 {
      margin: 0 0 8px;
      font-family: var(--font-display);
      font-size: 19px;
      color: #fff;
      letter-spacing: -0.01em;
    }
    .daily p {
      margin: 0 0 16px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.88);
      line-height: 1.6;
    }
    .daily .ask {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 8px 16px;
      border-radius: var(--radius-pill);
      background: rgba(255, 255, 255, 0.16);
      border: 1px solid rgba(255, 255, 255, 0.28);
      color: #fff;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
    }
    .daily .ask:hover { background: rgba(255, 255, 255, 0.24); }

    .empty {
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.55;
      padding: 6px 0;
    }
    /* Growth-insights empty state — was a bare sentence stranded at
       the top-left of a tall panel. Centered column + icon + bounded
       text so it reads as a deliberate "coming soon" card. */
    .insights-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 12px;
      min-height: 168px;
      padding: 28px 24px;
    }
    .insights-empty svg {
      width: 30px;
      height: 30px;
      color: var(--teal-pebble);
      opacity: 0.65;
    }
    .insights-empty p {
      margin: 0;
      max-width: 320px;
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.55;
    }
  `);customElements.define("child-overview",We);const bi=["Reading your family's context","Thinking it through","Gathering a few ideas","Pulling the pieces together"],mi=["Looking up fresh ideas","Finding current options","Checking the latest"];class Ke extends z{constructor(){super(),this.child=null,this.messages=[],this.sessions=[],this.prefill="",this.memberProfiles={},this.myUid="",this._session=[],this._input="",this._loading=!1,this._streaming=null,this._streamTick=0,this._streamTimer=null,this._error="",this._seededKey="",this._activeSessionId=null,this._renamingId=null,this._isPrivate=!1,this._railOpen=!1,this.compact=!1,this._listening=!1,this._recognition=null}disconnectedCallback(){var e;super.disconnectedCallback(),this._stopStreamCaptions();try{(e=this._recognition)==null||e.abort()}catch{}this._recognition=null}get _voiceSupported(){return!!(window.SpeechRecognition||window.webkitSpeechRecognition)}_toggleVoice(){var i;if(this._listening){try{(i=this._recognition)==null||i.stop()}catch{}return}const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e)return;const t=new e;t.lang="en-US",t.interimResults=!0,t.continuous=!1,t.onresult=a=>{let r="";for(let s=0;s<a.results.length;s+=1)r+=a.results[s][0].transcript;this._input=r},t.onerror=a=>{this._listening=!1,(a.error==="not-allowed"||a.error==="service-not-allowed")&&(this._error="Microphone access is blocked — allow it in your browser to ask by voice.")},t.onend=()=>{this._listening=!1,this._recognition=null},this._recognition=t,this._listening=!0,this._error="";try{t.start()}catch{this._listening=!1,this._recognition=null}}willUpdate(e){var i;if(e.has("child")&&(this._session=[],this._error="",this._activeSessionId=null,this._seededKey="",this._stopStreamCaptions(),this._streaming=null),this._activeSessionId==null&&(e.has("sessions")||e.has("messages")||e.has("child"))){const a=this._sessionList();a.length&&(this._activeSessionId=a[0].id)}const t=`${((i=this.child)==null?void 0:i.id)??""}|${this._activeSessionId??""}`;if(t!==this._seededKey&&(e.has("messages")||e.has("sessions")||e.has("child")||e.has("_activeSessionId"))){this._session=this._messagesForActive().map(r=>({role:r.role,content:r.content,senderUid:r.senderUid,isPrivate:r.isPrivate===!0})),this._seededKey=t;const a=this._activeSession();this._isPrivate=a?a.isPrivate===!0:!1}e.has("prefill")&&this.prefill&&(this._input=this.prefill)}_sessionList(){const e=(this.sessions??[]).map(i=>({id:i.id,title:i.title||"Untitled chat",isPrivate:i.isPrivate===!0,_real:!0}));return(this.messages??[]).some(i=>!i.sessionId)&&e.push({id:"__legacy",title:"Earlier chats",isPrivate:!1,_real:!1}),e}_activeSession(){return this._sessionList().find(e=>e.id===this._activeSessionId)??null}_messagesForActive(){const e=this._activeSessionId;if(e==null)return[];const t=this.messages??[];return e==="__legacy"?t.filter(i=>!i.sessionId):t.filter(i=>i.sessionId===e)}_selectSession(e){if(this._activeSessionId===e){this._railOpen=!1;return}this._activeSessionId=e,this._railOpen=!1,this._error=""}async _newChat(){var e;if(this._railOpen=!1,this._error="",!!((e=this.child)!=null&&e.id))try{const t=await f.createPebbleSession(this.child.id,{title:"New chat",isPrivate:!1});this._activeSessionId=t,this._session=[],this._input="",this.updateComplete.then(()=>{var i;return(i=this.renderRoot.querySelector("textarea"))==null?void 0:i.focus()})}catch(t){this._error=(t==null?void 0:t.message)??"Couldn't start a new chat."}}async _renameSession(e){var a;if(!(e!=null&&e._real)||!((a=this.child)!=null&&a.id))return;const t=window.prompt("Rename chat",e.title);if(t==null)return;const i=t.trim();if(!(!i||i===e.title))try{await f.renamePebbleSession(this.child.id,e.id,i)}catch(r){this._error=(r==null?void 0:r.message)??"Couldn't rename."}}async _archiveSession(e){var t;if(!(!(e!=null&&e._real)||!((t=this.child)!=null&&t.id))&&window.confirm(`Archive "${e.title}"? It'll leave your chat list.`))try{await f.archivePebbleSession(this.child.id,e.id),this._activeSessionId===e.id&&(this._activeSessionId=null,this._seededKey="")}catch(i){this._error=(i==null?void 0:i.message)??"Couldn't archive."}}async _togglePrivacy(e){var i;const t=this._activeSession();if(this._isPrivate=e,!(!t||!t._real||!((i=this.child)!=null&&i.id)))try{await f.setPebbleSessionPrivacy(this.child.id,t.id,e)}catch(a){this._error=(a==null?void 0:a.message)??"Couldn't change privacy."}}updated(e){(e.has("messages")||e.has("_session")||e.has("_loading"))&&this.updateComplete.then(()=>this._scrollToBottom())}_scrollToBottom(){const e=this.renderRoot.querySelector(".thread");e&&(e.scrollTop=e.scrollHeight)}_suggestions(){var t;const e=((t=this.child)==null?void 0:t.name)??"your child";return[`What's coming up for ${e}?`,`Ideas for a rainy weekend with ${e}`,`Is ${e}'s speech on track?`,`How can I support ${e} this week?`]}_recentQuestions(){const e=[];return this._session.forEach((t,i)=>{if(t.role!=="user")return;const a=String(t.content??"").trim();a&&e.push({idx:i,text:a,isPrivate:t.isPrivate===!0})}),e.reverse()}_scrollToMsg(e){this._railOpen=!1,this.updateComplete.then(()=>{const t=this.renderRoot.querySelector(`.thread [data-idx="${e}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"center"})})}_newQuestion(){this._railOpen=!1,this._input="",this.updateComplete.then(()=>{const e=this.renderRoot.querySelector("textarea");e==null||e.focus(),this._scrollToBottom()})}async _send(e){var l,p,h;const t=(e??this._input).trim();if(!t||this._loading)return;if(!((l=this.child)!=null&&l.id)){this._error="No child selected.";return}this._error="",this._input="";const i=this._session.slice(-20).map(c=>({role:c.role,content:c.content})),a=this._isPrivate===!0;let r=this._activeSessionId;const s=this._activeSession();if(!s||!s._real)try{r=await f.createPebbleSession(this.child.id,{title:t.slice(0,48),isPrivate:a}),this._activeSessionId=r,this._seededKey=`${this.child.id}|${r}`,this._session=[]}catch(c){this._error=(c==null?void 0:c.message)??"Couldn't start a chat.";return}else s.title==="New chat"&&this._session.filter(c=>c.role==="user").length===0&&f.renamePebbleSession(this.child.id,r,t.slice(0,48)).catch(()=>{});this._session=[...this._session,{role:"user",content:t,senderUid:this.myUid,isPrivate:a}],this._loading=!0,this._streaming={phase:"thinking",text:""},this._startStreamCaptions();const o=c=>{this._session=[...this._session,{role:"assistant",content:c??"…",isPrivate:a,senderUid:a?this.myUid:void 0}]},d=async()=>{try{const c=await f.askPebbleAboutChild(this.child.id,t,i,a,r);o((c==null?void 0:c.answer)??"…")}catch(c){console.error(c),this._error=this._sendErrorMessage(c)}};try{const c=await f.streamPebbleChat(this.child.id,t,i,a,r,{onStatus:v=>{v==="searching_web"&&this._streaming&&!this._streaming.text&&(this._streaming={...this._streaming,phase:"searching"})},onDelta:v=>{this._stopStreamCaptions(),this._streaming={phase:"streaming",text:v||""}}}),b=((c==null?void 0:c.answer)??((p=this._streaming)==null?void 0:p.text)??"").trim();b?o(b):await d()}catch(c){console.error(c);const b=(((h=this._streaming)==null?void 0:h.text)??"").trim();b.length>=20?o(b):await d()}finally{this._stopStreamCaptions(),this._streaming=null,this._loading=!1}}_sendErrorMessage(e){return(e==null?void 0:e.code)==="functions/unauthenticated"?"Pebble needs you to be signed in.":(e==null?void 0:e.code)==="functions/permission-denied"?"Pebble's child advisor is for parents on this household.":(e==null?void 0:e.code)==="functions/not-found"||(e==null?void 0:e.code)==="functions/internal"?"Pebble isn't available right now, try again in a moment.":(e==null?void 0:e.message)??"Pebble could not answer right now."}_startStreamCaptions(){this._stopStreamCaptions(),this._streamTick=0,this._streamTimer=setInterval(()=>{this._streamTick+=1},2400)}_stopStreamCaptions(){this._streamTimer&&(clearInterval(this._streamTimer),this._streamTimer=null)}_streamCaption(){var t;const e=((t=this._streaming)==null?void 0:t.phase)==="searching"?mi:bi;return e[this._streamTick%e.length]}_isDark(){return typeof document<"u"?!document.documentElement.classList.contains("theme-light"):!0}_firstName(){var i,a;const e=(a=(i=this.memberProfiles)==null?void 0:i[this.myUid])==null?void 0:a.displayName;return String(e??"").trim().split(/\s+/)[0]||"there"}_smartUpload(){this.dispatchEvent(new CustomEvent("smart-upload",{bubbles:!0,composed:!0}))}_pico(){return n`<pebble-icon></pebble-icon>`}_senderName(e){var i;if(!e||e===this.myUid)return"You";const t=(i=this.memberProfiles)==null?void 0:i[e];return t!=null&&t.displayName?t.displayName:e.charAt(0).toUpperCase()+e.slice(1)}_senderPhoto(e){var i,a;const t=(a=(i=this.memberProfiles)==null?void 0:i[e])==null?void 0:a.profilePhotoURL;return typeof t=="string"&&/^https?:\/\//i.test(t)?t:""}_fmt(e){const i=String(e??"").replace(/^[ \t\u00A0]+/gm,"").trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*([^*]+)\*\*/g,"<b>$1</b>").replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,!?]|$)/g,"$1<i>$2</i>").replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');return zt(i)}render(){var r;(r=this.child)==null||r.name;const e=this._session.length>0,t=this._sessionList(),i=this._activeSession(),a=!i||!!i._real;return n`
      <div class="pebble-wrap ${this.compact?"compact":""}">
        <aside class="rail ${this._railOpen?"open":""}">
          <div class="rail-head">Chats</div>
          <button class="rail-new" @click=${()=>this._newChat()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
            New chat
          </button>
          ${t.length===0?"":t.map(s=>n`<div
                  class="rail-item ${s.id===this._activeSessionId?"on":""}"
                  title=${s.title}
                  @click=${()=>this._selectSession(s.id)}
                >
                  ${s.isPrivate?n`<svg class="lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3" stroke-linecap="round"/></svg>`:""}
                  <span class="rail-title">${s.title}</span>
                  ${s._real?n`<span class="rail-acts">
                        <button
                          class="ra"
                          title="Rename"
                          @click=${o=>{o.stopPropagation(),this._renameSession(s)}}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                        </button>
                        <button
                          class="ra"
                          title="Archive"
                          @click=${o=>{o.stopPropagation(),this._archiveSession(s)}}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M10 12h4"/></svg>
                        </button>
                      </span>`:""}
                </div>`)}
        </aside>
      <div class="chatpane">
        <div class="toprow">
          <button
            class="rail-toggle"
            @click=${()=>this._railOpen=!this._railOpen}
            aria-label="Chats"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>
            Chats
          </button>
          <div
            class="privtoggle ${a?"":"disabled"}"
            role="group"
            aria-label="Who can see this chat"
          >
            <button
              class="fam ${this._isPrivate?"":"on"}"
              ?disabled=${!a}
              @click=${()=>this._togglePrivacy(!1)}
              title="Both parents see this chat"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              Family
            </button>
            <button
              class="priv ${this._isPrivate?"on":""}"
              ?disabled=${!a}
              @click=${()=>this._togglePrivacy(!0)}
              title="Only you see this chat"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3" stroke-linecap="round"/></svg>
              Private
            </button>
          </div>
        </div>
        <div class="thread">
            ${e?n`
                  ${this._session.map((s,o)=>s.role==="assistant"?n`<div class="msg pb" data-idx="${o}">
                          <span class="pic">${this._pico()}</span>
                          <div class="col">
                            <!-- prettier-ignore -->
                            <div class="bubble">${this._fmt(s.content)}</div>
                          </div>
                        </div>`:n`<div class="msg you" data-idx="${o}">
                          <span class="av">
                            <member-chip
                              .name=${this._senderName(s.senderUid)}
                              .photo=${this._senderPhoto(s.senderUid)}
                              .hue=${8}
                              size="30"
                            ></member-chip>
                          </span>
                          <div class="col">
                            <div class="said">
                              ${this._senderName(s.senderUid)} asked${s.isPrivate?" · private":""}
                            </div>
                            <div class="bubble">${this._fmt(s.content)}</div>
                          </div>
                        </div>`)}
                  ${this._streaming?n`<div class="msg pb" data-idx="streaming">
                        <span class="pic">${this._pico()}</span>
                        <div class="col">
                          ${this._streaming.text?n`<!-- prettier-ignore -->
                                <div class="bubble">${this._fmt(this._streaming.text)}</div>`:n`<div class="bubble waiting">
                                <span class="wcap">${this._streamCaption()}</span>
                                <span class="wdots"><span></span><span></span><span></span></span>
                              </div>`}
                        </div>
                      </div>`:""}
                `:n`<div class="landing ${this._isDark()?"dark":""}">
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
                      <div class="g-line ask">what can I help with?</div>
                    </div>
                    <div class="cardgrid">
                      <button
                        class="lcard"
                        @click=${()=>this._smartUpload()}
                      >
                        <span class="lico teal">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4M8 8l4-4 4 4"/><path d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"/></svg>
                        </span>
                        <h3>Smart Upload</h3>
                        <p>Drop a flier, schedule or note. I'll pull out the dates.</p>
                      </button>
                      <button
                        class="lcard"
                        @click=${()=>this._send("What activities and things to do should we plan for our upcoming trip?")}
                      >
                        <span class="lico terra">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
                        </span>
                        <h3>Plan trip activities</h3>
                        <p>Ideas for your upcoming trips.</p>
                      </button>
                      ${this._voiceSupported?n`<button
                            class="lcard"
                            @click=${()=>this._toggleVoice()}
                          >
                            <span class="lico teal">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h2l2-7 4 14 3-9 2 4h5"/></svg>
                            </span>
                            <h3>Talk with Pebble</h3>
                            <p>Hands full? Just talk, I'm listening.</p>
                          </button>`:""}
                    </div>
                  </div>
                </div>`}
          </div>

          ${this._error?n`<div class="error">${this._error}</div>`:""}

          <form
            class="composer"
            @submit=${s=>{s.preventDefault(),this._send()}}
          >
            <textarea
              placeholder="Ask Pebble anything…"
              .value=${this._input}
              @input=${s=>this._input=s.target.value}
              @keydown=${s=>{s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),this._send())}}
              ?disabled=${this._loading}
            ></textarea>
            ${this._voiceSupported?n`<button
                  type="button"
                  class="mic ${this._listening?"on":""}"
                  @click=${()=>this._toggleVoice()}
                  ?disabled=${this._loading}
                  aria-label=${this._listening?"Stop listening":"Ask by voice"}
                  title=${this._listening?"Listening… tap to stop":"Ask by voice"}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
                  </svg>
                </button>`:""}
            <button
              type="submit"
              class="send"
              ?disabled=${this._loading||!this._input.trim()}
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
    `}}_(Ke,"properties",{child:{type:Object},messages:{type:Array},sessions:{type:Array},prefill:{type:String},memberProfiles:{type:Object},myUid:{type:String},_session:{state:!0},_input:{state:!0},_loading:{state:!0},_streaming:{state:!0},_streamTick:{state:!0},_error:{state:!0},_seededKey:{state:!0},_activeSessionId:{state:!0},_renamingId:{state:!0},_listening:{state:!0},_isPrivate:{state:!0},_railOpen:{state:!0},compact:{type:Boolean}}),_(Ke,"styles",T`
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
      height: calc(100vh - 84px);
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
    }
    .rail-item:hover {
      background: var(--glass-fill);
      color: var(--text-primary);
      border-color: var(--glass-border);
    }
    .rail-item.on {
      background: rgba(61, 155, 143, 0.16);
      color: var(--text-primary);
      border-color: rgba(61, 155, 143, 0.4);
    }
    .rail-item .lock {
      width: 11px;
      height: 11px;
      flex-shrink: 0;
      /* Theme-aware — was hardcoded #e6c3ab (pale terracotta) which
         vanished on the light cream rail bg. var(--ink-terracotta)
         resolves to a dark terracotta in light mode + the same
         pale cream in dark mode → visible in both. */
      color: var(--ink-terracotta);
    }
    .rail-item .rail-title {
      flex: 1;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .rail-item .rail-acts {
      display: none;
      gap: 2px;
      flex-shrink: 0;
    }
    .rail-item:hover .rail-acts,
    .rail-item.on .rail-acts { display: inline-flex; }
    .rail-item .ra {
      background: transparent;
      border: none;
      color: var(--text-tertiary);
      cursor: pointer;
      padding: 2px;
      display: inline-flex;
      border-radius: 5px;
    }
    .rail-item .ra:hover { color: var(--text-primary); }
    .rail-item .ra svg { width: 13px; height: 13px; }
    .privtoggle.disabled { opacity: 0.45; }
    .privtoggle button:disabled { cursor: default; }
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
      background: rgba(61, 155, 143, 0.28);
      color: var(--bubble-link-pb);
      box-shadow: inset 0 0 0 1px rgba(61, 155, 143, 0.55);
    }
    /* Was color:#e6c3ab (pale terracotta) — readable on the dusk
       glass but vanished on the light cream Daybreak surface.
       var(--ink-terracotta) is theme-aware (dark terracotta in light
       mode / pale cream in dark) → clearly "on" in BOTH themes.
       Opacities bumped from 0.20/0.45 → 0.28/0.55 for a stronger
       selected state. Mirror change applied to .fam for symmetry. */
    .privtoggle button.on.priv {
      background: rgba(198, 123, 92, 0.28);
      color: var(--ink-terracotta);
      box-shadow: inset 0 0 0 1px rgba(198, 123, 92, 0.55);
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
        background: var(--panel-solid);
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
       widget box via a FLEX chain (the host is set to display:flex
       column by the parent; percentage heights don't work because
       the custom-element host has no definite height). The thread
       scrolls internally; the composer stays pinned + visible. */
    .pebble-wrap.compact {
      flex: 1;
      min-height: 0;
      height: auto;
    }
    .pebble-wrap.compact .rail,
    .pebble-wrap.compact .rail-toggle { display: none; }
    .pebble-wrap.compact .chatpane {
      flex: 1;
      min-height: 0;
      height: auto;
      padding: 12px 16px 12px;
    }
    .pebble-wrap.compact .toprow { margin-bottom: 8px; }
    .pebble-wrap.compact .composer {
      margin-top: 12px;
      margin-bottom: 4px;
    }
    /* Portal v4 — Pebble is the whole tab: no card, no page header,
       edge-to-edge up to the nav bar; the "Private to parents" pill
       is integrated into the top of the chat surface.
       Fills the viewport below the nav bar so the composer sits at the
       bottom of the screen (was capped at 800px, which left a gap below
       the composer on tall displays). The thread scrolls internally;
       the composer stays pinned at the bottom. */
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
      background: rgba(198, 123, 92, 0.18);
      color: var(--ink-terracotta);
      border: 1px solid rgba(198, 123, 92, 0.45);
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
    .msg.pb .bubble b { color: var(--bubble-link-pb); }
    /* Harmonised link colour — kill the browser blue. Light teal on
       the glass Pebble bubble; warm cream on the terracotta you
       bubble. Underlined for the affordance. */
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
    .wdots span:nth-child(2) { animation-delay: 0.15s; }
    .wdots span:nth-child(3) { animation-delay: 0.3s; }
    /* ============================================================
       Pebble landing — the warm front door (replaces the old cold
       lede/sub/prompts empty state). A floating, softly glowing
       glass Ripple Stone hero given room to breathe + a two-line
       greeting (brand-green name) + a single row of three translucent
       action cards (the family's lowest-friction ingestion channels).
       Portal uses simple gradient-chip glyphs (the iOS card-tile motif
       belongs there, where milestone cards are swiped). The whole
       group is vertically centred. margin:auto (not justify-content)
       does the centring so a tall group never clips in the scroll box.
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

    /* floating glowing glass Ripple Stone — the hero; extra air around
       it so it reads as the centrepiece, not just another tile. */
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
    .rings .r1 { width: 73px; height: 13px; }
    .rings .r2 { width: 49px; height: 8px; margin-top: -3px; opacity: 0.7; }
    @keyframes stoneFloat {
      0%, 100% { transform: translateY(5px) scale(0.99); }
      50% { transform: translateY(-6px) scale(1.02); }
    }
    @keyframes ringsFloat {
      0%, 100% { transform: translateY(3px) scale(0.96); opacity: 0.72; }
      50% { transform: translateY(-2px) scale(1.04); opacity: 0.95; }
    }
    @keyframes stoneGlow {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 0.95; }
    }
    @media (prefers-reduced-motion: reduce) {
      .stone, .rings, .stone .glow { animation: none; }
      .stone .glow { opacity: 0.6; }
    }

    /* greeting — two lines: brand-green name, primary-ink question */
    .greet {
      text-align: center;
      margin-top: 4px;
    }
    .greet .g-line {
      /* Nunito (the PebblePath brand face, like iOS) at 700 — softer
         and lighter than the heavier Bricolage display, per Thomas. */
      font-family: var(--font-nunito);
      font-weight: 700;
      font-size: 23px;
      line-height: 1.2;
      letter-spacing: -0.005em;
    }
    /* default CSS = light theme (brand green #1f5c54); .landing.dark
       overrides for Portal's default dusk theme. Same pairing as the
       FamilyBriefHeroCard headerColor (1f5c54 light / 5cbfb0 dark). */
    .greet .name { color: #1f5c54; }
    .landing.dark .greet .name { color: #5cbfb0; }
    .greet .ask { color: var(--text-primary); }

    /* action-cards — a single centred row (like iOS). Flex (not grid)
       so it stays balanced whether 3 cards show or 2 (the Talk card
       drops when the browser has no speech support). */
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
      /* ~50% more transparent than the usual glass-fill-strong (light
         0.7 / dark 0.12), so the mesh reads through more. Per-theme so
         the halving is exact in both. */
      background: rgba(255, 255, 255, 0.34);
      border: 1px solid var(--glass-border);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      box-shadow: var(--glass-shadow);
      cursor: pointer;
      font-family: var(--font-body);
      color: var(--text-primary);
      transition: transform 0.18s ease, box-shadow 0.18s ease,
        border-color 0.18s ease;
    }
    .landing.dark .lcard { background: rgba(255, 248, 235, 0.06); }
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

    /* glyph that belongs to the card — an accent-tinted REGION of the
       card surface (low-opacity, no shadow, no border) holding an
       accent-coloured line icon. Reads as carved from the card, not a
       solid chip superimposed on top. Theme-aware ink colours. */
    .lico {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 46px;
      margin: 0 auto 12px;
      border-radius: 14px;
    }
    .lico svg { width: 24px; height: 24px; display: block; }
    .lico.teal { background: rgba(61, 155, 143, 0.13); color: var(--ink-teal); }
    .lico.terra { background: rgba(198, 123, 92, 0.15); color: var(--ink-terracotta); }

    /* compact (FAB) — shrink the stone + greeting, tighten the grid */
    .pebble-wrap.compact .landing { padding: 6px 2px; }
    .pebble-wrap.compact .landing-inner { gap: 16px; }
    .pebble-wrap.compact .stone-wrap { margin: 2px 0 4px; }
    .pebble-wrap.compact .stone { width: 86px; height: 72px; }
    .pebble-wrap.compact .rings .r1 { width: 50px; height: 9px; }
    .pebble-wrap.compact .rings .r2 { width: 33px; height: 6px; }
    .pebble-wrap.compact .greet .g-line { font-size: 18px; }
    .pebble-wrap.compact .cardgrid { gap: 8px; }
    .pebble-wrap.compact .lcard {
      padding: 12px 8px;
      border-radius: 16px;
    }
    .pebble-wrap.compact .lcard h3 { font-size: 12.5px; }
    .pebble-wrap.compact .lcard p { font-size: 10.5px; }
    .pebble-wrap.compact .lico {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      margin-bottom: 8px;
    }
    .pebble-wrap.compact .lico svg { width: 18px; height: 18px; }
    /* Composer — the concept's rounded pill: a transparent textarea
       inside a glass-fill pill, vertically centred, with a 38px send
       circle (fixes "input not rounded / wrong colour / not centred"). */
    .composer {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-top: 18px;
      /* Roomier padding so typed text doesn't read as crammed in the
         top-left of the pill. The textarea is align-items:center
         vertically so the extra top/bottom keeps the text visually
         balanced inside the composer height. */
      padding: 10px 10px 10px 20px;
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
      /* 4px top/bottom + composer's 10px = ~14px breathing room
         from the pill edge to the text baseline at min-height. */
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
  `);customElements.define("child-pebble",Ke);class Je extends z{constructor(){super(),this.trip=null,this._items=[],this._templates=[],this._hasStarted=!1,this._adHoc=[],this._drafts={},this._editingId=null,this._editText="",this._review=null,this._reviewing=!1,this._reviewError="",this._useOpen=!1,this._saveOpen=!1,this._saveName="",this._addGroupOpen=!1,this._newGroup="",this._dismissed=new Set,this._unsub=null,this._tplUnsub=null,this._subId=null}connectedCallback(){super.connectedCallback(),this._tplUnsub=f.packingTemplatesListener(e=>{this._templates=e}),this._subscribe()}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this._unsub)==null||e.call(this),(t=this._tplUnsub)==null||t.call(this),this._unsub=this._tplUnsub=null,this._subId=null}willUpdate(e){e.has("trip")&&this._subscribe()}_subscribe(){var t,i;const e=((t=this.trip)==null?void 0:t.id)??null;e!==this._subId&&((i=this._unsub)==null||i.call(this),this._subId=e,this._items=[],this._review=null,this._hasStarted=!1,this._adHoc=[],e&&(this._unsub=f.packingListListener(e,a=>{this._items=a})))}get _tripId(){var e;return((e=this.trip)==null?void 0:e.id)??null}get _showEmpty(){return this._items.length===0&&!this._hasStarted&&this._adHoc.length===0}get _groupNames(){const e=new Set,t=[];for(const i of["Parents","Children"])e.has(i)||(e.add(i),t.push(i));for(const i of this._items)i.groupName&&!e.has(i.groupName)&&(e.add(i.groupName),t.push(i.groupName));for(const i of this._adHoc)e.has(i)||(e.add(i),t.push(i));return t}_itemsFor(e){return this._items.filter(t=>t.groupName===e).sort((t,i)=>(t.order??0)-(i.order??0))}async _toggle(e){if(this._tripId)try{await f.togglePackingItem(this._tripId,e)}catch(t){console.warn(t)}}async _addItem(e){const t=String(this._drafts[e]??"").trim();if(!t||!this._tripId)return;const i=this._itemsFor(e).reduce((a,r)=>Math.max(a,r.order??0),-1)+1;this._drafts={...this._drafts,[e]:""},this._hasStarted=!0;try{await f.addPackingItem(this._tripId,{groupName:e,text:t,order:i})}catch(a){console.warn("[packing] add failed",a)}this.updateComplete.then(()=>{const a=this.renderRoot.querySelector(`input[data-add="${CSS.escape(e)}"]`);a==null||a.focus()})}async _delete(e){if(this._tripId)try{await f.deletePackingItem(this._tripId,e.id)}catch(t){console.warn(t)}}_startEdit(e){this._editingId=e.id,this._editText=e.text??"",this.updateComplete.then(()=>{const t=this.renderRoot.querySelector("input.edit-input");t==null||t.focus(),t==null||t.select()})}async _commitEdit(e){const t=String(this._editText??"").trim();if(this._editingId=null,!(!t||t===e.text||!this._tripId))try{await f.updatePackingItemText(this._tripId,e.id,t)}catch(i){console.warn(i)}}async _applyTemplate(e){if(this._useOpen=!1,this._hasStarted=!0,!!this._tripId)try{await f.applyPackingTemplate(this._tripId,e)}catch(t){console.warn(t)}}_addGroup(){const e=String(this._newGroup??"").trim();e&&(this._groupNames.includes(e)||(this._adHoc=[...this._adHoc,e]),this._newGroup="",this._addGroupOpen=!1,this._hasStarted=!0)}async _saveAsTemplate(){const e=String(this._saveName??"").trim();if(e){this._saveOpen=!1,this._saveName="";try{await f.savePackingListAsTemplate(e,"",this._items)}catch(t){console.warn("[packing] save template failed",t)}}}_familyPayload(){var l;const e=f.state,t=((l=e.ppFamily)==null?void 0:l.memberProfiles)??{},i=Object.values(t).map(p=>p==null?void 0:p.displayName).filter(Boolean),a=Array.isArray(e.pebbleAnchors)?e.pebbleAnchors:[],r=Array.isArray(e.pebbleRhythms)?e.pebbleRhythms:[],s=p=>{var c;const h=((c=p==null?void 0:p.getTime)==null?void 0:c.call(p))??(p?new Date(p).getTime():0);return h?Math.max(0,Math.floor((Date.now()-h)/(30.44*24*3600*1e3))):0},o=(Array.isArray(e.ppChildren)?e.ppChildren:[]).map(p=>({name:p.name,ageMonths:s(p.dateOfBirth),anchors:a.filter(h=>h.scope==="child"&&h.childId===p.id).map(h=>h.label),rhythms:r.filter(h=>h.scope==="child"&&h.childId===p.id).map(h=>h.title),recentObservations:[]})),d=a.filter(p=>p.scope==="family").map(p=>p.label);return{parents:i,children:o,familyAnchors:d}}_tripPayload(){const e=this.trip??{},t={title:e.title||"Trip"};return e.location&&(t.location=e.location),e.start&&(t.startDate=e.start),e.end&&(t.endDate=e.end),e.lodgingTitle&&(t.lodgingTitle=e.lodgingTitle),(e.lodgingNotes||e.notes)&&(t.lodgingNotes=e.lodgingNotes||e.notes),(e.flightDepartAirline||e.flightAirline)&&(t.flightAirline=e.flightDepartAirline||e.flightAirline),t}async _runReview(){if(!(this._reviewing||!this._tripId)){this._reviewing=!0,this._reviewError="",this._hasStarted=!0;try{const e=this._items.map(i=>({groupName:i.groupName,text:i.text,checked:i.checked===!0,addedByPebble:i.addedByPebble===!0})),t=await f.generatePackingReview(this._tripId,this._tripPayload(),this._familyPayload(),e,[...this._dismissed],this._groupNames);this._review={additions:Array.isArray(t==null?void 0:t.additions)?t.additions:[],concerns:Array.isArray(t==null?void 0:t.concerns)?t.concerns:[],removals:Array.isArray(t==null?void 0:t.removals)?t.removals:[]},f.markPackingReviewed(this._tripId).catch(()=>{})}catch(e){this._reviewError=(e==null?void 0:e.message)||"Pebble could not review right now."}finally{this._reviewing=!1}}}async _acceptAddition(e){if(!this._tripId)return;const t=this._itemsFor(e.groupName).reduce((i,a)=>Math.max(i,a.order??0),-1)+1;try{await f.addPackingItem(this._tripId,{groupName:this._groupNames.includes(e.groupName)?e.groupName:"Parents",text:e.text,order:t,addedByPebble:!0})}catch(i){console.warn(i)}this._dropSuggestion("additions",e)}_dismiss(e,t){this._dismissed.add(String(t.text||"").toLowerCase()),this._dropSuggestion(e,t)}_dropSuggestion(e,t){if(!this._review)return;const i=`${t.groupName}::${(t.text||"").toLowerCase()}`;this._review={...this._review,[e]:this._review[e].filter(a=>`${a.groupName}::${(a.text||"").toLowerCase()}`!==i)}}_avatars(e){var i;const t=f.state;if(e==="Parents"){const a=((i=t.ppFamily)==null?void 0:i.memberProfiles)??{};return Object.entries(a).slice(0,3).map(([r,s])=>({id:r,name:(s==null?void 0:s.displayName)??"?",photo:(s==null?void 0:s.profilePhotoURL)??"",hue:150}))}return e==="Children"?(Array.isArray(t.ppChildren)?t.ppChildren:[]).slice(0,3).map(a=>({id:a.id,name:a.name,photo:a.profilePhotoURL??"",hue:265})):[]}render(){return this._showEmpty?this._renderEmpty():n`
      ${this._renderReview()}
      ${this._groupNames.map(e=>this._renderGroup(e))}
      <div class="foot-actions">
        ${this._addGroupOpen?n`<div class="inline-input">
              <input
                type="text"
                placeholder="List name (e.g. Beach gear)"
                .value=${this._newGroup}
                @input=${e=>this._newGroup=e.target.value}
                @keydown=${e=>e.key==="Enter"&&this._addGroup()}
              />
              <button class="mini-go" @click=${()=>this._addGroup()}>Add</button>
            </div>`:n`<button class="ghost-btn" @click=${()=>{this._addGroupOpen=!0}}>+ Add another list</button>`}
        ${this._items.length>0?this._saveOpen?n`<div class="inline-input">
                <input
                  type="text"
                  placeholder="Save as (e.g. Beach trips)"
                  .value=${this._saveName}
                  @input=${e=>this._saveName=e.target.value}
                  @keydown=${e=>e.key==="Enter"&&this._saveAsTemplate()}
                />
                <button class="mini-go" @click=${()=>this._saveAsTemplate()}>Save</button>
              </div>`:n`<button class="save-btn" @click=${()=>{var e,t;this._saveOpen=!0,this._saveName=((e=this.trip)==null?void 0:e.location)||((t=this.trip)==null?void 0:t.title)||""}}>
                Save this list for future trips
              </button>`:""}
      </div>
    `}_renderEmpty(){const e=this._templates.slice(0,3).map(i=>i.name).join(", "),t=this._templates.length-3;return n`
      <div class="empty">
        ${this._templates.length>0?n`<button class="cta primary" @click=${()=>{this._useOpen=!this._useOpen}}>
              <span class="cta-ic">📋</span>
              <span class="cta-body">
                <span class="cta-t">Use my lists</span>
                <span class="cta-s">${e}${t>0?` + ${t} more`:""}</span>
              </span>
            </button>`:""}
        ${this._useOpen?n`<div class="tpl-picker">
              ${this._templates.map(i=>n`<button class="tpl-opt" @click=${()=>this._applyTemplate(i)}>
                  ${i.name}
                  <small>${this._templateItemCount(i)} items</small>
                </button>`)}
            </div>`:""}
        <button class="cta secondary" @click=${()=>{this._hasStarted=!0}}>
          <span class="cta-ic">✏️</span>
          <span class="cta-body">
            <span class="cta-t">Create new</span>
            <span class="cta-s">Start blank with Parents and Children groups.</span>
          </span>
        </button>
        <button class="cta tertiary" @click=${()=>this._runReview()}>
          <span class="cta-ic"><pebble-icon size="16"></pebble-icon></span>
          <span class="cta-body">
            <span class="cta-t">Ask Pebble to start the list</span>
            <span class="cta-s">Generates a starter from this trip and your family.</span>
          </span>
        </button>
        ${this._reviewError?n`<div class="err">${this._reviewError}</div>`:""}
      </div>
    `}_templateItemCount(e){return(Array.isArray(e.groups)?e.groups:[]).reduce((t,i)=>t+(Array.isArray(i.items)?i.items.length:0),0)}_renderReview(){const e=this._review,t=e&&e.additions.length+e.concerns.length+e.removals.length>0;return n`
      ${t?this._renderSuggestions(e):""}
      <button class="review-cta ${this._reviewing?"loading":""}" @click=${()=>this._runReview()} ?disabled=${this._reviewing}>
        <pebble-icon size="18"></pebble-icon>
        <span class="rc-body">
          <span class="rc-t">${this._items.length===0?"Ask Pebble to start the list":"Ask Pebble to review"}</span>
          <span class="rc-s">${this._reviewing?"Checking the trip, lodging, and your family…":"Checks against the trip, lodging, and what we know about your family."}</span>
        </span>
      </button>
      ${this._reviewError?n`<div class="err">${this._reviewError}</div>`:""}
    `}_renderSuggestions(e){const t=(i,a,r)=>n`<div class="sug-row ${r}">
      <div class="sug-text">
        <b>${a.text}</b>
        <small>${a.reason}</small>
      </div>
      <div class="sug-actions">
        ${i==="additions"?n`<button class="sug-add" title="Add" @click=${()=>this._acceptAddition(a)}>Add</button>`:""}
        <button class="sug-x" title="Dismiss" @click=${()=>this._dismiss(i,a)}>✕</button>
      </div>
    </div>`;return n`<div class="suggestions">
      <div class="sug-head"><pebble-icon size="14"></pebble-icon> Pebble's suggestions</div>
      ${e.additions.map(i=>t("additions",i,"add"))}
      ${e.concerns.map(i=>t("concerns",i,"concern"))}
      ${e.removals.map(i=>t("removals",i,"remove"))}
    </div>`}_renderGroup(e){const t=this._itemsFor(e),i=this._avatars(e),a=t.filter(r=>r.checked===!0).length;return n`<div class="group">
      <div class="group-head">
        <div class="gh-left">
          <span class="gh-name">${e}</span>
          ${i.length?n`<span class="gh-avatars">
                ${i.map(r=>n`<member-chip .name=${r.name} .photo=${r.photo} .hue=${r.hue} size="22"></member-chip>`)}
              </span>`:""}
        </div>
        ${t.length?n`<span class="gh-count">${a}/${t.length}</span>`:""}
      </div>
      <div class="items">
        ${t.map(r=>this._renderItem(r))}
        <div class="add-row">
          <span class="add-plus">+</span>
          <input
            type="text"
            data-add=${e}
            placeholder="Add for ${e}"
            .value=${this._drafts[e]??""}
            @input=${r=>this._drafts={...this._drafts,[e]:r.target.value}}
            @keydown=${r=>r.key==="Enter"&&this._addItem(e)}
          />
        </div>
      </div>
    </div>`}_renderItem(e){const t=this._editingId===e.id;return n`<div class="item ${e.checked?"done":""}">
      <button
        class="check ${e.checked?"on":""}"
        role="checkbox"
        aria-checked=${e.checked?"true":"false"}
        @click=${()=>this._toggle(e)}
      >
        ${e.checked?n`<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"></path></svg>`:""}
      </button>
      ${t?n`<input
            class="edit-input"
            type="text"
            .value=${this._editText}
            @input=${i=>this._editText=i.target.value}
            @keydown=${i=>{i.key==="Enter"&&this._commitEdit(e),i.key==="Escape"&&(this._editingId=null)}}
            @blur=${()=>this._commitEdit(e)}
          />`:n`<span class="item-text" @click=${()=>this._startEdit(e)}>${e.text}</span>`}
      ${e.addedByPebble?n`<span class="peb-dot" title="Added by Pebble"></span>`:""}
      <button class="item-x" title="Delete" @click=${()=>this._delete(e)}>✕</button>
    </div>`}}_(Je,"properties",{trip:{type:Object},_items:{state:!0},_templates:{state:!0},_hasStarted:{state:!0},_adHoc:{state:!0},_drafts:{state:!0},_editingId:{state:!0},_editText:{state:!0},_review:{state:!0},_reviewing:{state:!0},_reviewError:{state:!0},_useOpen:{state:!0},_saveOpen:{state:!0},_saveName:{state:!0},_addGroupOpen:{state:!0},_newGroup:{state:!0}}),_(Je,"styles",T`
    * { box-sizing: border-box; }
    :host {
      display: block;
    }
    button { font-family: inherit; cursor: pointer; }
    .err {
      font-size: 13px;
      color: var(--terracotta, #c67b5c);
      padding: 4px 2px;
    }
    /* Empty state */
    .empty {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .cta {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      text-align: left;
      padding: 14px;
      border-radius: 14px;
      border: none;
    }
    .cta-ic {
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      font-size: 16px;
    }
    .cta-body { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
    .cta-t { font-weight: 700; font-size: 14px; }
    .cta-s { font-size: 11.5px; opacity: 0.8; }
    .cta.primary {
      background: linear-gradient(135deg, #3d9b8f 0%, #2d7a70 100%);
      color: #fff;
    }
    .cta.primary .cta-ic { background: rgba(255, 255, 255, 0.22); }
    .cta.secondary {
      background: rgba(61, 155, 143, 0.1);
      color: var(--text-primary);
    }
    .cta.secondary .cta-ic { background: var(--glass-fill-strong); }
    .cta.tertiary {
      background: var(--glass-fill-strong);
      color: var(--text-primary);
      border: 1px solid var(--glass-border);
    }
    .cta.tertiary .cta-ic { background: rgba(61, 155, 143, 0.12); }
    .tpl-picker {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 4px 0 4px 44px;
    }
    .tpl-opt {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 14px;
      border-radius: 10px;
      border: 1px solid var(--glass-border);
      background: var(--glass-fill-strong);
      color: var(--text-primary);
      font-size: 13px;
      font-weight: 600;
    }
    .tpl-opt small { color: var(--text-secondary); font-weight: 400; }
    /* Review CTA */
    .review-cta {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      text-align: left;
      padding: 13px 14px;
      margin-bottom: 14px;
      border-radius: 14px;
      border: 1px solid rgba(61, 155, 143, 0.3);
      background: rgba(61, 155, 143, 0.08);
      color: var(--ink-teal);
    }
    .review-cta.loading { opacity: 0.7; }
    .rc-body { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
    .rc-t { font-weight: 700; font-size: 14px; }
    .rc-s { font-size: 11.5px; color: var(--text-secondary); }
    /* Suggestions */
    .suggestions {
      border: 1px solid rgba(61, 155, 143, 0.28);
      border-radius: 14px;
      padding: 12px 14px;
      margin-bottom: 14px;
      background: var(--glass-fill-strong);
    }
    .sug-head {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--ink-teal);
      margin-bottom: 8px;
    }
    .sug-row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
      border-top: 1px solid var(--glass-border);
    }
    .sug-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
    .sug-text b { font-size: 13.5px; color: var(--text-primary); font-weight: 600; }
    .sug-text small { font-size: 12px; color: var(--text-secondary); line-height: 1.35; }
    .sug-row.concern b::before { content: '⚠ '; color: var(--amber-glow, #d4a843); }
    .sug-row.remove b { text-decoration: line-through; opacity: 0.7; }
    .sug-actions { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
    .sug-add {
      border: none;
      background: var(--ink-teal);
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 999px;
    }
    .sug-x {
      border: none;
      background: transparent;
      color: var(--text-tertiary);
      font-size: 13px;
      line-height: 1;
      padding: 4px 6px;
    }
    /* Groups */
    .group {
      border-radius: 14px;
      background: var(--glass-fill-strong);
      border: 1px solid var(--glass-border);
      margin-bottom: 12px;
      overflow: hidden;
    }
    .group-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 14px 6px;
    }
    .gh-left { display: flex; align-items: center; gap: 10px; }
    .gh-name {
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .gh-avatars { display: inline-flex; }
    .gh-avatars member-chip { margin-left: -6px; }
    .gh-avatars member-chip:first-child { margin-left: 0; }
    .gh-count {
      font-size: 12px;
      font-weight: 600;
      color: var(--text-secondary);
    }
    .items { padding: 0 6px 6px; }
    .item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 7px 8px;
      border-radius: 8px;
    }
    .item:hover { background: var(--glass-fill); }
    .item:hover .item-x { opacity: 0.6; }
    .check {
      width: 22px;
      height: 22px;
      flex-shrink: 0;
      border-radius: 6px;
      border: 1.5px solid var(--glass-border-strong);
      background: transparent;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
    .check.on { background: var(--ink-teal); border-color: var(--ink-teal); }
    .item-text {
      flex: 1;
      min-width: 0;
      font-size: 14px;
      color: var(--text-primary);
    }
    .item.done .item-text { text-decoration: line-through; color: var(--text-secondary); }
    .edit-input {
      flex: 1;
      min-width: 0;
      font: inherit;
      font-size: 14px;
      padding: 4px 8px;
      border-radius: 6px;
      border: 1px solid var(--ink-teal);
      background: var(--glass-fill-strong);
      color: var(--text-primary);
    }
    .peb-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--ink-teal);
      flex-shrink: 0;
    }
    .item-x {
      border: none;
      background: transparent;
      color: var(--text-tertiary);
      font-size: 12px;
      line-height: 1;
      padding: 4px 6px;
      opacity: 0;
      transition: opacity 0.15s;
    }
    .add-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px;
      border-top: 1px solid var(--glass-border);
      margin-top: 2px;
    }
    .add-plus {
      width: 22px;
      height: 22px;
      flex-shrink: 0;
      border-radius: 50%;
      background: rgba(61, 155, 143, 0.14);
      color: var(--ink-teal);
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .add-row input {
      flex: 1;
      min-width: 0;
      font: inherit;
      font-size: 14px;
      border: none;
      background: transparent;
      color: var(--text-primary);
      outline: none;
    }
    /* Footer actions */
    .foot-actions { display: flex; flex-direction: column; gap: 10px; }
    .ghost-btn {
      width: 100%;
      padding: 13px;
      border-radius: 14px;
      border: 1px solid rgba(61, 155, 143, 0.3);
      background: var(--glass-fill-strong);
      color: var(--ink-teal);
      font-weight: 600;
      font-size: 13px;
    }
    .save-btn {
      width: 100%;
      padding: 12px;
      border-radius: 14px;
      border: none;
      background: rgba(61, 155, 143, 0.12);
      color: var(--ink-teal);
      font-weight: 600;
      font-size: 13px;
    }
    .inline-input { display: flex; gap: 8px; }
    .inline-input input {
      flex: 1;
      min-width: 0;
      font: inherit;
      font-size: 14px;
      padding: 11px 14px;
      border-radius: 12px;
      border: 1px solid var(--glass-border-strong);
      background: var(--glass-fill-strong);
      color: var(--text-primary);
    }
    .mini-go {
      border: none;
      background: var(--ink-teal);
      color: #fff;
      font-weight: 600;
      font-size: 13px;
      padding: 0 18px;
      border-radius: 12px;
    }
  `);customElements.define("packing-list",Je);const ye=[{key:"visit",label:"Visit"},{key:"meal",label:"Meal"},{key:"travel",label:"Travel"},{key:"note",label:"Note"}],fi=[{m:30,label:"30 min"},{m:60,label:"1 h"},{m:90,label:"1½ h"},{m:120,label:"2 h"},{m:180,label:"3 h"},{m:240,label:"4 h"},{m:480,label:"All day"}],U=40;function dt(g){const e=String(g??"").match(/^(\d{4})-(\d{2})-(\d{2})/);return e?new Date(Number(e[1]),Number(e[2])-1,Number(e[3])):null}function vi(g){const e=g.getFullYear(),t=String(g.getMonth()+1).padStart(2,"0"),i=String(g.getDate()).padStart(2,"0");return`${e}-${t}-${i}`}function he(g){const e=String(g??"").match(/^(\d{1,2}):?(\d{2})?/);return e?Number(e[1])+(e[2]?Number(e[2])/60:0):null}function xe(g){const e=Math.floor(g),t=Math.round((g-e)*60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}class Xe extends z{constructor(){super(),this.open=!1,this.trip=null,this.activities=[],this.members=[],this.currentUid="",this._items=[],this._dayKey=null,this._title="",this._time="12:00",this._type="visit",this._dur=60,this._url="",this._file=null,this._fileName="",this._busy=!1,this._view="day",this._weekStart=0,this._sel=null,this._tab="plan",this._dragCtx=null,this._onGridMove=this._gridMove.bind(this),this._onGridUp=this._gridUp.bind(this),this._unsub=null,this._subId=null}_weekDays(){const e=this._days();if(e.length<=7)return e;const t=Math.min(Math.max(0,this._weekStart),Math.max(0,e.length-7));return e.slice(t,t+7)}_minFromPointer(e,t,i,a){const r=t.getBoundingClientRect(),s=Math.max(0,Math.min(e-r.top,r.height)),o=i*60+s/U*60,d=Math.round(o/15)*15;return Math.max(i*60,Math.min(a*60,d))}_gridDown(e,t,i,a){if(e.button!=null&&e.button!==0||e.target.closest&&e.target.closest(".evt, .wk-evt, button, a"))return;const r=e.currentTarget,s=this._minFromPointer(e.clientY,r,i,a);this._dragCtx={dayKey:t,lo:i,hi:a,el:r},this._sel={dayKey:t,aMin:s,bMin:s},window.addEventListener("pointermove",this._onGridMove),window.addEventListener("pointerup",this._onGridUp),e.preventDefault()}_gridMove(e){if(!this._dragCtx||!this._sel)return;const{el:t,lo:i,hi:a}=this._dragCtx;this._sel={...this._sel,bMin:this._minFromPointer(e.clientY,t,i,a)}}_gridUp(){window.removeEventListener("pointermove",this._onGridMove),window.removeEventListener("pointerup",this._onGridUp);const e=this._sel,t=this._dragCtx;if(this._sel=null,this._dragCtx=null,!e||!t)return;let i=Math.min(e.aMin,e.bMin),r=Math.max(e.aMin,e.bMin)-i;r<15&&(r=this._dur&&this._dur>=15?this._dur:60);const s=String(Math.floor(i/60)).padStart(2,"0"),o=String(i%60).padStart(2,"0");this._dayKey=e.dayKey,this._time=`${s}:${o}`,this._dur=r,this.updateComplete.then(()=>{const d=this.renderRoot.querySelector(".add-row input.t");d&&d.focus()})}_selGhost(e,t){const i=this._sel;if(!i||i.dayKey!==e)return"";const a=Math.min(i.aMin,i.bMin),r=Math.max(i.aMin,i.bMin),s=(a-t*60)/60*U,o=Math.max(3,(r-a)/60*U),d=`${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`;return n`<div
      class="sel-ghost"
      style="top:${s}px;height:${o}px;"
    >
      <span>${d}</span>
    </div>`}willUpdate(e){var t,i;if(e.has("open")||e.has("trip")){const a=((t=this.trip)==null?void 0:t.id)??null;this.open&&a?(this._subId!==a&&(this._teardown(),this._subId=a,this._tab="plan",this._dayKey=((i=this._days()[0])==null?void 0:i.key)??"",this._view=this._days().length>1?"week":"day"),this._recomputeItems()):this.open||this._teardown()}e.has("activities")&&this._recomputeItems()}_recomputeItems(){var t;const e=((t=this.trip)==null?void 0:t.id)??null;this._items=e?(this.activities??[]).filter(i=>i&&i.tripId===e):[]}disconnectedCallback(){super.disconnectedCallback(),this._teardown()}_teardown(){this._subId=null,this._items=[],window.removeEventListener("pointermove",this._onGridMove),window.removeEventListener("pointerup",this._onGridUp),this._sel=null,this._dragCtx=null}_close(){this.dispatchEvent(new Event("cancel"))}_openEdit(){this.trip&&this.dispatchEvent(new CustomEvent("edit-trip",{detail:{trip:this.trip},bubbles:!0,composed:!0}))}_days(){var s,o;const e=dt((s=this.trip)==null?void 0:s.start),t=dt((o=this.trip)==null?void 0:o.end)??e;if(!e)return[{key:"",lbl:"Day",d:"The trip"}];const i=[],a=new Date(e);let r=0;for(;a<=t&&r<31;)i.push({key:vi(a),lbl:a.toLocaleDateString("en-GB",{weekday:"short"}),d:a.toLocaleDateString("en-GB",{day:"numeric",month:"short"})}),a.setDate(a.getDate()+1),r+=1;return i.length?i:[{key:"",lbl:"Day",d:"The trip"}]}_member(e){return(this.members??[]).find(t=>t.uid===e)??null}async _add(){const e=this._title.trim();if(!e||this._busy)return;this._busy=!0;const t=this._file;try{const i=this._url.trim(),a=await f.saveActivity({title:e,type:this._type,day:this._dayKey??"",time:this._time||null,durationMins:this._dur,url:/^https?:\/\//i.test(i)?i:null,tripId:this.trip.id});if(t&&a)try{const r=await f.uploadActivityAttachment(a,t);await f.updateActivity(a,{attachmentURL:r,attachmentName:t.name||"attachment"})}catch(r){console.error("plan attachment upload failed:",r),y((r==null?void 0:r.code)==="storage/unauthorized"?"Item added — but the attachment needs the Storage rule published.":"Item added — couldn't attach the file, try again.",{duration:5e3})}this._title="",this._url="",this._file=null,this._fileName="",this._dur=60}catch(i){console.error("saveActivity (planner add) failed:",i),y((i==null?void 0:i.code)==="permission-denied"?"Couldn't add — the planner rule may need publishing.":`Couldn't add: ${(i==null?void 0:i.message)??"try again"}`,{duration:5e3})}finally{this._busy=!1}}async _remove(e){try{await f.deleteActivity(e.id)}catch(t){y(`Couldn't remove: ${(t==null?void 0:t.code)??(t==null?void 0:t.message)}`,{duration:4e3})}}_renderWeek(){const e=this._weekDays(),t=e.length||1,i=new Set(e.map(l=>l.key)),a=(this._items||[]).filter(l=>i.has(String(l.day??"")));let r=8,s=20;for(const l of a){const p=he(l.time);if(p==null)continue;const h=Math.max(.5,(Number(l.durationMins)||60)/60);r=Math.min(r,Math.floor(p)),s=Math.max(s,Math.ceil(p+h))}r=Math.max(0,Math.min(r,8)),s=Math.min(24,Math.max(s,20));const o=[];for(let l=r;l<s;l++)o.push(n`<div class="wk-hr">${String(l).padStart(2,"0")}:00</div>`);const d=(s-r)*U;return n`
      <div class="wk">
        <div class="wk-head" style="--cols:${t};">
          <div class="wk-hc"></div>
          ${e.map(l=>n`<div
              class="wk-hc ${l.key===(this._dayKey??"")?"on":""}"
              title="Open ${l.d} in day view"
              @click=${()=>{this._dayKey=l.key,this._view="day"}}
            >
              ${l.lbl}<small>${l.d}</small>
            </div>`)}
        </div>
        <div class="wk-body" style="--cols:${t};">
          <div class="wk-gutter">${o}</div>
          ${e.map(l=>{const p=a.filter(h=>String(h.day??"")===String(l.key));return n`<div
              class="wk-col"
              style="height:${d}px;"
              @pointerdown=${h=>this._gridDown(h,l.key,r,s)}
            >
              ${this._selGhost(l.key,r)}
              ${p.map(h=>{const c=he(h.time);if(c==null)return"";const b=Math.max(.5,(Number(h.durationMins)||60)/60),v=(c-r)*U+2,k=Math.max(26,b*U-4),m=ye.some(x=>x.key===h.type)?h.type:"note";return n`<div
                  class="wk-evt ${m}"
                  style="top:${v}px;height:${k}px;"
                  title=${h.title}
                >
                  ${h.addedBy===this.currentUid?n`<button
                        class="wkdel"
                        title="Remove"
                        @click=${()=>this._remove(h)}
                      >
                        ×
                      </button>`:""}
                  <b>${h.title}</b>
                  <span>${xe(c)}</span>
                </div>`})}
            </div>`})}
        </div>
      </div>
    `}render(){var d;if(!this.open||!this.trip)return n``;const e=this._days(),t=this._dayKey??((d=e[0])==null?void 0:d.key)??"",i=(this._items||[]).filter(l=>String(l.day??"")===String(t));let a=8,r=20;for(const l of i){const p=he(l.time);if(p==null)continue;const h=Math.max(.5,(Number(l.durationMins)||60)/60);a=Math.min(a,Math.floor(p)),r=Math.max(r,Math.ceil(p+h))}a=Math.max(0,Math.min(a,8)),r=Math.min(24,Math.max(r,20));const s=[];for(let l=a;l<r;l++)s.push(n`<div class="sched-row">
        <div class="hr">${String(l).padStart(2,"0")}:00</div>
        <div></div>
      </div>`);const o=i.map(l=>{const p=he(l.time);if(p==null)return null;const h=Math.max(.5,(Number(l.durationMins)||60)/60),c=(p-a)*U+3,b=h*U-8,v=this._member(l.addedBy),k=ye.some(m=>m.key===l.type)?l.type:"note";return n`<div
          class="evt ${k}"
          style="top:${c}px;height:${Math.max(34,b)}px;"
        >
          <div class="et">
            <b>${l.title}</b>
            <span>${xe(p)}${h?`–${xe(p+h)}`:""}</span>
            ${l.url||l.attachmentURL?n`<div class="adorn">
                  ${l.url?n`<a
                        href=${l.url}
                        target="_blank"
                        rel="noopener"
                        title=${l.url}
                        @click=${m=>m.stopPropagation()}
                        ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.07.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.07-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>Link</a
                      >`:""}
                  ${l.attachmentURL?n`<a
                        href=${l.attachmentURL}
                        target="_blank"
                        rel="noopener"
                        title=${l.attachmentName||"Attachment"}
                        @click=${m=>m.stopPropagation()}
                        ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05 12.7 19.8a5 5 0 0 1-7.07-7.07l8.49-8.49a3 3 0 0 1 4.24 4.24l-8.49 8.49a1 1 0 0 1-1.41-1.41l7.78-7.78"/></svg>${l.attachmentName||"File"}</a
                      >`:""}
                </div>`:""}
          </div>
          <div class="by">
            <member-chip
              .name=${(v==null?void 0:v.displayName)??"Family"}
              .photo=${(v==null?void 0:v.photoURL)??""}
              .hue=${(v==null?void 0:v.hue)??198}
              size="20"
            ></member-chip>
            <span class="nm">${(v==null?void 0:v.displayName)??"Someone"}</span>
          </div>
          ${l.addedBy===this.currentUid?n`<button class="del" title="Remove" @click=${()=>this._remove(l)}>×</button>`:""}
        </div>`}).filter(Boolean);return n`
      <section>
        <div class="glass">
          <div class="pl-head">
            <div>
              <h3>${this.trip.title||"Trip"}</h3>
              <div class="pl-sub">
                Shared day plan${this.trip.location?` · ${this.trip.location}`:""} — everyone on the trip can add
                <span class="who-adds">
                  ${(this.members??[]).slice(0,4).map(l=>n`<member-chip
                      .name=${l.displayName}
                      .photo=${l.photoURL??""}
                      .hue=${l.hue??198}
                      size="22"
                    ></member-chip>`)}
                </span>
              </div>
            </div>
            <div class="pl-actions">
              <button
                class="pl-edit"
                @click=${this._openEdit}
                aria-label="Edit trip"
                title="Edit trip"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
              </button>
              <button class="pl-close" @click=${this._close} aria-label="Close planner">×</button>
            </div>
          </div>

          <div class="pl-tabs" role="group" aria-label="Planner section">
            <button
              class=${this._tab==="plan"?"on":""}
              @click=${()=>this._tab="plan"}
            >
              Day plan
            </button>
            <button
              class=${this._tab==="packing"?"on":""}
              @click=${()=>this._tab="packing"}
            >
              Packing
            </button>
          </div>

          ${this._tab==="packing"?n`<packing-list .trip=${this.trip}></packing-list>`:n`
          <div class="pl-modebar">
            <div class="view-toggle" role="group" aria-label="Planner view">
              <button
                class=${this._view==="day"?"on":""}
                @click=${()=>this._view="day"}
              >
                Day
              </button>
              <button
                class=${this._view==="week"?"on":""}
                @click=${()=>this._view="week"}
              >
                Week
              </button>
            </div>
            ${this._view==="week"&&e.length>7?n`<div class="wk-pager">
                  <button
                    ?disabled=${this._weekStart<=0}
                    @click=${()=>this._weekStart=Math.max(0,this._weekStart-7)}
                    aria-label="Previous week"
                  >
                    ‹
                  </button>
                  <span>Days ${this._weekStart+1}–${Math.min(e.length,this._weekStart+7)} of ${e.length}</span>
                  <button
                    ?disabled=${this._weekStart+7>=e.length}
                    @click=${()=>this._weekStart=Math.min(e.length-7,this._weekStart+7)}
                    aria-label="Next week"
                  >
                    ›
                  </button>
                </div>`:""}
          </div>

          ${this._view==="week"?this._renderWeek():n`
                <div class="day-rail">
                  ${e.map(l=>n`<button
                      class="day-pill ${l.key===t?"on":""}"
                      @click=${()=>this._dayKey=l.key}
                    >
                      ${l.lbl}<small>${l.d}</small>
                    </button>`)}
                </div>

                <div class="sched">
                  <div class="sched-inner">
                    ${s}
                    <div
                      class="sched-track"
                      @pointerdown=${l=>this._gridDown(l,t,a,r)}
                    >
                      ${o.length?o:n`<div class="sched-empty">
                            Drag to block out a time — or add an item below.
                          </div>`}
                      ${this._selGhost(t,a)}
                    </div>
                  </div>
                </div>
              `}

          <form
            class="add-row"
            @submit=${l=>{l.preventDefault(),this._add()}}
          >
            <input
              class="tm"
              type="text"
              .value=${this._time}
              aria-label="Time"
              @input=${l=>this._time=l.target.value}
            />
            <input
              class="t"
              type="text"
              .value=${this._title}
              placeholder="Add an item — lunch, a visit, a note…"
              aria-label="Item"
              @input=${l=>this._title=l.target.value}
            />
            <select
              aria-label="Type"
              .value=${this._type}
              @change=${l=>this._type=l.target.value}
            >
              ${ye.map(l=>n`<option value=${l.key}>${l.label}</option>`)}
            </select>
            <select
              class="dur"
              aria-label="Duration"
              @change=${l=>this._dur=Number(l.target.value)}
            >
              ${fi.map(l=>n`<option
                  value=${String(l.m)}
                  ?selected=${l.m===this._dur}
                >
                  ${l.label}
                </option>`)}
            </select>
            <input
              class="url"
              type="url"
              .value=${this._url}
              placeholder="Link (optional) — e.g. booking URL"
              aria-label="Link"
              @input=${l=>this._url=l.target.value}
            />
            <label class="attach" title="Attach a PDF or screenshot">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05 12.7 19.8a5 5 0 0 1-7.07-7.07l8.49-8.49a3 3 0 0 1 4.24 4.24l-8.49 8.49a1 1 0 0 1-1.41-1.41l7.78-7.78"/></svg>
              <span>${this._fileName||"Attach"}</span>
              <input
                type="file"
                accept="application/pdf,image/*"
                @change=${l=>{var h;const p=((h=l.target.files)==null?void 0:h[0])??null;this._file=p,this._fileName=p?p.name:""}}
              />
            </label>
            <button class="add-btn" type="submit" ?disabled=${this._busy||!this._title.trim()}>
              ${this._busy?"Adding…":"+ Add to plan"}
            </button>
          </form>
          <div class="add-hint">
            Anyone on the trip can add to this plan — every item is tagged
            with who added it (like a shared sheet, on a day grid).
          </div>
          `}
        </div>
      </section>
    `}}_(Xe,"properties",{open:{type:Boolean,reflect:!0},trip:{type:Object},activities:{type:Array},members:{type:Array},currentUid:{type:String},_items:{state:!0},_dayKey:{state:!0},_title:{state:!0},_time:{state:!0},_type:{state:!0},_dur:{state:!0},_url:{state:!0},_fileName:{state:!0},_busy:{state:!0},_view:{state:!0},_weekStart:{state:!0},_sel:{state:!0},_tab:{state:!0}}),_(Xe,"styles",T`
    *, *::before, *::after { box-sizing: border-box; }
    :host { display: block; }
    :host(:not([open])) { display: none; }
    section { margin-bottom: 30px; }
    .glass {
      position: relative;
      border-radius: var(--radius-card);
      background: var(--glass-fill-strong);
      backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      border: 1px solid var(--glass-border-strong);
      box-shadow: var(--glass-shadow);
      padding: 28px;
      animation: drop 240ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes drop {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: none; }
    }
    .pl-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      /* nowrap (was wrap): on mobile the wide title block pushed the
         × close button onto its OWN row, left-aligned — bad UI. The
         × must stay pinned top-right; the title block shrinks + wraps
         instead. */
      flex-wrap: nowrap;
      margin-bottom: 18px;
    }
    .pl-head > div:first-child {
      min-width: 0;
    }
    .pl-head h3 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 20px;
      letter-spacing: -0.015em;
    }
    .pl-sub {
      color: var(--text-secondary);
      font-size: 13px;
      margin-top: 5px;
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .who-adds { display: inline-flex; align-items: center; }
    .who-adds member-chip { margin-right: -6px; }
    /* 2026-05-24 — the edit pencil + close X share a small flex row
       pinned top-right so the user can edit the trip itself (dates,
       flights, lodging) without scrolling back up to the trip card. */
    .pl-actions {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }
    .pl-edit,
    .pl-close {
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      width: 40px;
      height: 40px;
      border-radius: 999px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      flex-shrink: 0;
      padding: 0;
      transition: color 140ms ease, border-color 140ms ease;
    }
    .pl-edit:hover,
    .pl-close:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .pl-edit:hover { color: var(--teal-pebble); border-color: var(--teal-pebble); }
    .pl-edit svg { width: 17px; height: 17px; display: block; }
    .day-rail {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 4px;
      margin-bottom: 16px;
      scrollbar-width: none;
    }
    .day-rail::-webkit-scrollbar { display: none; }
    .day-pill {
      padding: 9px 15px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border-strong);
      color: var(--text-secondary);
      cursor: pointer;
      font-family: var(--font-body);
      font-size: 12.5px;
      font-weight: 600;
      white-space: nowrap;
      text-align: center;
      line-height: 1.3;
    }
    .day-pill small {
      display: block;
      font-weight: 500;
      font-size: 11px;
      color: var(--text-tertiary);
    }
    .day-pill.on {
      /* Solid teal (was a 0.22 tint) — white text washed out on it
         in light mode; solid reads on both themes. */
      background: var(--teal-pebble);
      color: #fff;
      border-color: var(--teal-pebble);
    }
    .day-pill.on small { color: rgba(255, 255, 255, 0.82); }

    /* Day | Week segmented toggle + optional week pager. */
    /* Day plan / Packing top-level section toggle. */
    .pl-tabs {
      display: inline-flex;
      padding: 3px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border-strong);
      margin-bottom: 16px;
    }
    .pl-tabs button {
      padding: 7px 18px;
      border-radius: var(--radius-pill);
      border: none;
      background: transparent;
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 150ms ease;
    }
    .pl-tabs button.on {
      background: var(--teal-pebble);
      color: #fff;
    }
    .pl-modebar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 14px;
    }
    .view-toggle {
      display: inline-flex;
      padding: 3px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border-strong);
    }
    .view-toggle button {
      padding: 6px 16px;
      border-radius: var(--radius-pill);
      border: none;
      background: transparent;
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      transition: all 150ms ease;
    }
    .view-toggle button.on {
      background: var(--teal-pebble);
      color: #fff;
      box-shadow: inset 0 0 0 1px rgba(61, 155, 143, 0.55);
    }
    .wk-pager {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--text-secondary);
      font-size: 12px;
    }
    .wk-pager button {
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 13px;
    }
    .wk-pager button:disabled { opacity: 0.4; cursor: default; }

    /* Google-Calendar-style week grid: shared hour gutter + a column
       per trip day, items absolutely positioned by time/duration. */
    .wk {
      border-radius: var(--radius-tile);
      border: 1px solid var(--glass-border);
      background: rgba(255, 248, 235, 0.03);
      overflow: hidden;
    }
    .wk-head {
      display: grid;
      grid-template-columns: 62px repeat(var(--cols, 1), 1fr);
      border-bottom: 1px solid var(--gridline);
    }
    .wk-head .wk-hc {
      padding: 8px 4px;
      text-align: center;
      font-size: 11.5px;
      font-weight: 600;
      color: var(--text-secondary);
      border-left: 1px solid var(--gridline);
      cursor: pointer;
      line-height: 1.3;
    }
    .wk-head .wk-hc:first-child { border-left: none; cursor: default; }
    .wk-head .wk-hc small {
      display: block;
      font-weight: 500;
      font-size: 10.5px;
      color: var(--text-tertiary);
    }
    .wk-head .wk-hc.on {
      background: var(--teal-pebble);
      color: #fff;
    }
    .wk-head .wk-hc.on small { color: #bfe6df; }
    .wk-body {
      position: relative;
      display: grid;
      grid-template-columns: 62px repeat(var(--cols, 1), 1fr);
      max-height: 460px;
      overflow-y: auto;
      scrollbar-width: thin;
    }
    .wk-gutter { position: relative; }
    .wk-gutter .wk-hr {
      height: ${U}px;
      font-size: 10.5px;
      color: var(--text-secondary);
      text-align: right;
      padding: 4px 8px 0;
      border-bottom: 1px solid var(--gridline);
      box-sizing: border-box;
    }
    .wk-col {
      position: relative;
      border-left: 1px solid var(--gridline);
      background-image: repeating-linear-gradient(
        var(--gridline) 0,
        var(--gridline) 1px,
        transparent 1px,
        transparent ${U}px
      );
    }
    .wk-evt {
      position: absolute;
      left: 3px;
      right: 3px;
      border-radius: 7px;
      padding: 4px 6px;
      overflow: hidden;
      border-left: 3px solid;
      box-shadow: 0 3px 9px rgba(20, 12, 6, 0.26);
      cursor: default;
    }
    .wk-evt b {
      font-size: 11px;
      font-weight: 600;
      color: #fff;
      display: block;
      line-height: 1.25;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .wk-evt span {
      font-size: 10px;
      color: rgba(255, 255, 255, 0.78);
    }
    .wk-evt.meal { background: var(--evt-meal); border-color: #d4a843; }
    .wk-evt.visit { background: var(--evt-visit); border-color: #3d9b8f; }
    .wk-evt.travel { background: var(--evt-travel); border-color: #6b9ac4; }
    .wk-evt.note { background: var(--evt-note); border-color: #c98a8a; }
    .wk-evt .wkdel {
      position: absolute;
      top: 1px;
      right: 3px;
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      font-size: 12px;
      line-height: 1;
      padding: 0;
    }
    .wk-evt .wkdel:hover { color: #fff; }
    .sched {
      /* Fixed visible height + internal scroll so the Day view is the
         SAME height as the Week view (.wk-body, also 460px) — was
         intrinsic-height which made the page scroll on long days. */
      max-height: 460px;
      overflow-y: auto;
      border-radius: var(--radius-tile);
      border: 1px solid var(--glass-border);
      background: rgba(255, 248, 235, 0.03);
      scrollbar-width: thin;
    }
    /* Inner wrapper carries the full intrinsic height so the
       absolutely-positioned .sched-track spans ALL hours (not just
       the 460px viewport — same trick the week .wk-col uses). */
    .sched-inner {
      position: relative;
    }
    .sched-row {
      display: grid;
      grid-template-columns: 62px 1fr;
      height: ${U}px;
      border-bottom: 1px solid var(--gridline);
    }
    .sched-row:last-child { border-bottom: none; }
    .sched-row .hr {
      font-size: 11px;
      color: var(--text-secondary);
      padding: 6px 10px 0;
      border-right: 1px solid var(--gridline);
      text-align: right;
    }
    .sched-track {
      position: absolute;
      left: 62px;
      right: 0;
      top: 0;
      bottom: 0;
    }
    .evt {
      position: absolute;
      left: 10px;
      right: 10px;
      border-radius: 10px;
      padding: 8px 12px;
      overflow: hidden;
      border-left: 4px solid;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      box-shadow: 0 4px 14px rgba(20, 12, 6, 0.28);
      backdrop-filter: blur(6px);
    }
    .evt .et { flex: 1; min-width: 0; }
    .evt .et b {
      font-size: 13px;
      font-weight: 600;
      display: block;
      color: #fff;
    }
    .evt .et span {
      font-size: 11.5px;
      color: rgba(255, 255, 255, 0.78);
    }
    .evt .by {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
    }
    .evt .by .nm {
      font-size: 10.5px;
      color: rgba(255, 255, 255, 0.7);
    }
    .evt .del {
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      flex-shrink: 0;
    }
    .evt .del:hover { color: #fff; }
    .evt.meal { background: var(--evt-meal); border-color: #d4a843; }
    .evt.visit { background: var(--evt-visit); border-color: #3d9b8f; }
    .evt.travel { background: var(--evt-travel); border-color: #6b9ac4; }
    .evt.note { background: var(--evt-note); border-color: #c98a8a; }
    .sched-empty {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-tertiary);
      font-size: 13px;
      text-align: center;
      padding: 0 24px;
    }
    /* Empty grid is the drag surface; the cursor signals it. The
       drag ghost previews the picked slot (Google-Calendar style). */
    .sched-track,
    .wk-col {
      cursor: cell;
    }
    .sel-ghost {
      position: absolute;
      left: 4px;
      right: 4px;
      border-radius: 8px;
      background: rgba(61, 155, 143, 0.32);
      border: 1.5px solid rgba(61, 155, 143, 0.7);
      pointer-events: none;
      z-index: 4;
      overflow: hidden;
    }
    .sel-ghost span {
      position: absolute;
      top: 3px;
      left: 7px;
      font-size: 10.5px;
      font-weight: 600;
      color: #eafaf6;
    }
    .add-row {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-top: 16px;
      padding: 12px 14px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px dashed var(--glass-border);
      flex-wrap: wrap;
    }
    .add-row input,
    .add-row select {
      background: var(--field-bg);
      border: 1px solid var(--glass-border-strong);
      color: var(--text-primary);
      border-radius: var(--radius-pill);
      padding: 8px 13px;
      font-family: var(--font-body);
      font-size: 12.5px;
      outline: none;
    }
    /* Readable placeholder — browsers dim the placeholder by their
       own UA opacity on top of the colour, which left the title +
       URL hints near-invisible on the dark glass. Pin to the page's
       standard muted secondary text + opacity:1 so it matches the
       other items. */
    .add-row input::placeholder {
      color: var(--text-secondary);
      opacity: 1;
    }
    .add-row input.t { flex: 1; min-width: 160px; }
    .add-row input.tm { width: 78px; text-align: center; }
    .add-row select { cursor: pointer; }
    .add-row .add-btn {
      padding: 8px 16px;
      border-radius: var(--radius-pill);
      border: none;
      cursor: pointer;
      background-image: var(--gradient-sage);
      color: #fff;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 12.5px;
    }
    .add-row .add-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .add-row select.dur { width: auto; }
    .add-row input.url { flex: 1; min-width: 150px; }
    .add-row .attach {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      max-width: 170px;
      padding: 8px 13px;
      border-radius: var(--radius-pill);
      background: var(--field-bg);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      font-size: 12.5px;
      cursor: pointer;
    }
    .add-row .attach:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .add-row .attach svg { width: 14px; height: 14px; flex-shrink: 0; }
    .add-row .attach span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .add-row .attach input { display: none; }
    /* Item link / attachment chips inside the schedule block. */
    .evt .et .adorn {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 4px;
    }
    .evt .et .adorn a {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      max-width: 100%;
      padding: 2px 8px;
      border-radius: var(--radius-pill);
      background: rgba(255, 255, 255, 0.16);
      color: #fff;
      font-size: 10.5px;
      font-weight: 600;
      text-decoration: none;
      overflow: hidden;
    }
    .evt .et .adorn a:hover { background: rgba(255, 255, 255, 0.28); }
    .evt .et .adorn a svg { width: 11px; height: 11px; flex-shrink: 0; }
    .add-hint {
      font-size: 12px;
      color: var(--text-tertiary);
      margin-top: 10px;
      padding-left: 4px;
    }

    /* ── Mobile ──────────────────────────────────────────────────
       The planner had NO responsive rules — on phones the .add-row
       flex-wrapped inside a 999px pill border, so the wrapped
       multi-row controls ballooned into a giant dashed blob with
       the title field clipped (the reported visual error). Make it
       a clean full-width vertical stack inside a normal rounded
       rectangle. */
    @media (max-width: 720px) {
      .add-row {
        flex-direction: column;
        align-items: stretch;
        border-radius: var(--radius-tile);
        padding: 14px;
        gap: 10px;
      }
      .add-row input,
      .add-row select,
      .add-row .attach,
      .add-row .add-btn,
      .add-row input.t,
      .add-row input.tm,
      .add-row input.url,
      .add-row select.dur {
        width: 100%;
        box-sizing: border-box;
        flex: none;
        min-width: 0;
      }
      .add-row input.tm { text-align: left; }
      .add-row .attach {
        justify-content: center;
        max-width: none;
      }
    }
  `);customElements.define("trip-planner",Xe);const ct=["Checking the weekend weather…","Finding nearby spots…","Scoring ideas for your family…","Building your plan…"];class Ze extends z{constructor(){super(),this.open=!1,this._state="empty",this._loadingStep=0,this._candidates=[],this._rec=0,this._error="",this._accepted=null,this._captionTimer=null}willUpdate(e){e.has("open")&&this.open&&this._restoreCache()}updated(e){e.has("_state")&&(this._state==="loading"?this._startLoadingCaptions():this._stopLoadingCaptions())}disconnectedCallback(){super.disconnectedCallback(),this._stopLoadingCaptions()}_startLoadingCaptions(){this._stopLoadingCaptions(),this._loadingStep=0,this._captionTimer=setInterval(()=>{if(this._loadingStep>=ct.length-1){this._stopLoadingCaptions();return}this._loadingStep+=1},2e3)}_stopLoadingCaptions(){this._captionTimer&&(clearInterval(this._captionTimer),this._captionTimer=null)}_window(){const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),i=t.getDay(),a=i===6?0:i===0?-1:6-i,r=new Date(t.getTime()+a*864e5),s=new Date(r.getTime()+864e5),o=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;return{sat:r,sun:s,satKey:o(r),sunKey:o(s)}}_weekendLabel(){const{sat:e,sun:t}=this._window(),i=a=>a.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"});return`${i(e)} – ${i(t)}`}_cacheKey(){return`pp_weekend_plan_${this._window().satKey}`}_restoreCache(){if(!(this._state==="loaded"&&this._candidates.length))try{const e=localStorage.getItem(this._cacheKey());if(!e)return;const t=JSON.parse(e);Array.isArray(t==null?void 0:t.candidates)&&t.candidates.length&&(this._candidates=t.candidates,this._rec=Number.isInteger(t.rec)?t.rec:0,this._state="loaded")}catch{}}_saveCache(){try{localStorage.setItem(this._cacheKey(),JSON.stringify({candidates:this._candidates,rec:this._rec}))}catch{}}_familyPayload(){var c,b;const e=f.state,t=((c=e.ppFamily)==null?void 0:c.memberProfiles)??{},i=Object.values(t).map(v=>v==null?void 0:v.displayName).filter(Boolean),a=Array.isArray(e.pebbleAnchors)?e.pebbleAnchors:[],r=Array.isArray(e.pebbleRhythms)?e.pebbleRhythms:[],s=v=>{var m;const k=((m=v==null?void 0:v.getTime)==null?void 0:m.call(v))??(v?new Date(v).getTime():0);return k?Math.max(0,Math.floor((Date.now()-k)/(30.44*24*3600*1e3))):0},o=(Array.isArray(e.ppChildren)?e.ppChildren:[]).map(v=>({childId:v.id,name:v.name,ageMonths:s(v.dateOfBirth),anchors:a.filter(k=>k.scope==="child"&&k.childId===v.id).map(k=>k.value?`${k.label}: ${k.value}`:k.label),rhythms:r.filter(k=>k.scope==="child"&&k.childId===v.id).map(k=>k.timeOfDay?`${k.title} (${k.timeOfDay})`:k.title),recentObservations:[]})),d=a.filter(v=>v.scope==="family").map(v=>v.value?`${v.label}: ${v.value}`:v.label),l=(b=e.ppFamily)==null?void 0:b.homeLocation,p=l?[l.city,l.region,l.country].filter(v=>v&&String(v).trim()).join(", "):void 0,h={parents:i,children:o,familyAnchors:d};return p&&(h.homeLocation=p),h}_windowPayload(){const e=f.state,{sat:t,sun:i,satKey:a,sunKey:r}=this._window(),s=(Array.isArray(e.pebbleLiveContext)?e.pebbleLiveContext:[]).find(c=>c.kind==="weatherSnapshot"),o=(Array.isArray(e.events)?e.events:[]).filter(c=>c.date===a||c.date===r).map(c=>c.title).filter(Boolean),d=new Date,l=new Date(d.getTime()+14*864e5),p=(Array.isArray(e.trips)?e.trips:[]).filter(c=>{const b=S(c.start);return b&&b>=d&&b<=l}).slice(0,5).map(c=>c.title),h={weekendStart:a,weekendEnd:r,occupiedEvents:o,upcomingTripTitles:p,recentlyDone:[]};return s!=null&&s.title&&(h.weatherSummary=s.title),h}async _generate(){if(this._state!=="loading"){this._state="loading",this._error="";try{const e=await f.generateFamilyPlan(this._familyPayload(),this._windowPayload());if(!e.length){this._state="error",this._error="Pebble could not find a plan for this weekend. Try again.";return}this._candidates=e,this._rec=0,this._state="loaded",this._saveCache()}catch(e){this._state="error",this._error=(e==null?void 0:e.message)||"Pebble could not plan right now. Try again."}}}async _accept(e,t){if(this.preview)return;const i=Array.isArray(e.perChildFit)?e.perChildFit:[],a=Array.isArray(e.logisticsNotes)?e.logisticsNotes:[],r=i.map(s=>`${s.childName}: ${s.reason}`);a.length&&r.push("",...a);try{await f.saveActivity({type:"note",title:e.title,day:e.date,notes:r.join(`
`),visibility:"family",source:"pebble-weekend-plan"}),this._accepted=t,setTimeout(()=>{this._accepted=null},2200)}catch(s){this._error=(s==null?void 0:s.message)||"Could not add this plan."}}_close(){this.dispatchEvent(new Event("cancel"))}render(){return this.open?n`
      <div class="backdrop" @click=${this._close}></div>
      <div class="panel" role="dialog" aria-label="Weekend planner">
        <div class="head">
          <div class="head-l">
            <pebble-icon size="20"></pebble-icon>
            <div>
              <h3>Weekend planner</h3>
              <div class="wk">${this._weekendLabel()}</div>
            </div>
          </div>
          <button class="x" @click=${this._close} aria-label="Close">×</button>
        </div>
        <div class="body">${this._renderState()}</div>
      </div>
    `:n``}_renderState(){if(this._state==="loading")return n`
        <div class="plan-cap">${ct[this._loadingStep]}</div>
        ${this._skeletonRec()}
        <div class="alts-head"><span class="sk" style="width:90px;height:11px"></span></div>
        ${this._skeletonAlt()}
        ${this._skeletonAlt()}
      `;if(this._state==="error")return n`<div class="status">
        <div class="err">${this._error}</div>
        <button class="big-cta" @click=${()=>this._generate()}>Try again</button>
      </div>`;if(this._state==="loaded"&&this._candidates.length){const e=this._candidates[this._rec],t=this._candidates.filter((i,a)=>a!==this._rec);return n`
        ${this._renderRecommended(e,this._rec)}
        ${t.length?n`<div class="alts-head">Other ideas</div>
              ${this._candidates.map((i,a)=>({c:i,i:a})).filter(({i})=>i!==this._rec).map(({c:i,i:a})=>this._renderAlt(i,a))}`:""}
        <button class="regen" @click=${()=>this._generate()}>Regenerate ideas</button>
      `}return n`<div class="status">
      <div class="status-t">Plan our weekend</div>
      <div class="status-s">Pebble suggests 2 to 3 ideas tuned to your family, the weather, and what's already on the calendar.</div>
      <button class="big-cta" @click=${()=>this._generate()}>
        <pebble-icon size="16" color="#fff"></pebble-icon> Plan our weekend
      </button>
    </div>`}_skeletonRec(){return n`<div class="rec sk-card">
      <span class="sk" style="width:96px;height:18px;border-radius:999px;margin-bottom:12px"></span>
      <span class="sk" style="width:72%;height:22px;margin-bottom:10px"></span>
      <span class="sk" style="width:94%;height:13px;margin-bottom:6px"></span>
      <span class="sk" style="width:58%;height:13px;margin-bottom:14px"></span>
      <div class="rec-meta">
        <span class="sk" style="width:62px;height:22px;border-radius:999px"></span>
        <span class="sk" style="width:84px;height:22px;border-radius:999px"></span>
        <span class="sk" style="width:54px;height:22px;border-radius:999px"></span>
      </div>
      <div class="fit">
        <div class="fit-row">
          <span class="sk" style="width:40%;height:12px;margin-bottom:5px"></span>
          <span class="sk" style="width:82%;height:11px"></span>
        </div>
        <div class="fit-row">
          <span class="sk" style="width:34%;height:12px;margin-bottom:5px"></span>
          <span class="sk" style="width:70%;height:11px"></span>
        </div>
      </div>
      <span class="sk" style="width:100%;height:44px;border-radius:12px"></span>
    </div>`}_skeletonAlt(){return n`<div class="alt sk-card">
      <div class="alt-body">
        <span class="sk" style="width:55%;height:14px;margin-bottom:6px"></span>
        <span class="sk" style="width:38%;height:11px"></span>
      </div>
    </div>`}_renderRecommended(e,t){if(!e)return"";const i=Array.isArray(e.perChildFit)?e.perChildFit:[],a=Array.isArray(e.logisticsNotes)?e.logisticsNotes:[],r=[this._timeLabel(e),e.location,e.costEstimate,e.weatherSummary].filter(Boolean);return n`<div class="rec">
      <div class="rec-badge">Recommended</div>
      <h2 class="rec-title">${e.title}</h2>
      ${e.subtitle?n`<p class="rec-sub">${e.subtitle}</p>`:""}
      ${r.length?n`<div class="rec-meta">${r.map(s=>n`<span>${s}</span>`)}</div>`:""}
      ${i.length?n`<div class="fit">
            ${i.map(s=>n`<div class="fit-row">
                <span class="fit-name">${s.childName}</span>
                <span class="fit-reason">${s.reason}</span>
              </div>`)}
          </div>`:""}
      ${a.length?n`<ul class="logi">${a.map(s=>n`<li>${s}</li>`)}</ul>`:""}
      <button class="accept ${this._accepted===t?"done":""}" @click=${()=>this._accept(e,t)}>
        ${this._accepted===t?"✓ Added to Activities":"Add to our calendar"}
      </button>
    </div>`}_renderAlt(e,t){return n`<button class="alt" @click=${()=>{this._rec=t,this._saveCache()}}>
      <div class="alt-body">
        <div class="alt-title">${e.title}</div>
        <div class="alt-sub">${this._timeLabel(e)}${e.location?` · ${e.location}`:""}</div>
      </div>
      <span class="alt-go">Make recommended</span>
    </button>`}_timeLabel(e){const t=r=>{if(!r)return"";const[s,o]=String(r).split(":").map(Number);if(Number.isNaN(s))return"";const d=s>=12?"pm":"am",l=(s+11)%12+1;return o?`${l}:${String(o).padStart(2,"0")}${d}`:`${l}${d}`},i=t(e.startTime),a=t(e.endTime);return i&&a?`${i}–${a}`:i||"Anytime"}}_(Ze,"properties",{open:{type:Boolean,reflect:!0},_state:{state:!0},_loadingStep:{state:!0},_candidates:{state:!0},_rec:{state:!0},_error:{state:!0},_accepted:{state:!0}}),_(Ze,"styles",T`
    * { box-sizing: border-box; }
    :host { display: contents; }
    button { font-family: inherit; cursor: pointer; }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(12, 22, 24, 0.5);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      z-index: 90;
    }
    .panel {
      position: fixed;
      z-index: 91;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: min(560px, calc(100vw - 32px));
      max-height: calc(100vh - 64px);
      display: flex;
      flex-direction: column;
      background: var(--panel-solid, #fffcf7);
      border: 1px solid var(--glass-border-strong);
      border-radius: 20px;
      box-shadow: 0 24px 70px rgba(12, 22, 24, 0.4);
      overflow: hidden;
    }
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 20px;
      border-bottom: 1px solid var(--glass-border);
    }
    .head-l { display: flex; align-items: center; gap: 10px; color: var(--ink-teal); }
    .head h3 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 18px;
      color: var(--text-primary);
    }
    .head .wk { font-size: 12.5px; color: var(--text-secondary); margin-top: 1px; }
    .x {
      border: none;
      background: transparent;
      color: var(--text-secondary);
      font-size: 24px;
      line-height: 1;
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
    .x:hover { background: var(--glass-fill); }
    .body { padding: 20px; overflow-y: auto; }
    /* status (empty / loading / error) */
    .status {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;
      padding: 28px 16px;
    }
    .status-t { font-family: var(--font-display); font-size: 19px; color: var(--text-primary); }
    .status-s { font-size: 13.5px; color: var(--text-secondary); max-width: 360px; line-height: 1.5; }
    /* staged loading caption + skeleton ghosts (mirror the loaded cards) */
    .plan-cap {
      text-align: center;
      font-size: 13.5px;
      color: var(--text-secondary);
      min-height: 18px;
      margin-bottom: 16px;
      transition: opacity 0.25s ease;
    }
    .sk {
      display: block;
      border-radius: 6px;
      background: linear-gradient(
        100deg,
        rgba(127, 127, 127, 0.12) 30%,
        rgba(127, 127, 127, 0.22) 50%,
        rgba(127, 127, 127, 0.12) 70%
      );
      background-size: 200% 100%;
      animation: sk-shimmer 1.4s ease-in-out infinite;
    }
    @keyframes sk-shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .sk-card { pointer-events: none; }
    @media (prefers-reduced-motion: reduce) {
      .plan-cap { transition: none; }
      .sk { animation: none; background: rgba(127, 127, 127, 0.16); }
    }
    .big-cta {
      margin-top: 8px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 22px;
      border: none;
      border-radius: 999px;
      background: linear-gradient(135deg, #3d9b8f 0%, #2d7a70 100%);
      color: #fff;
      font-weight: 700;
      font-size: 14px;
    }
    .err { font-size: 13.5px; color: var(--terracotta, #c67b5c); }
    /* recommended card */
    .rec {
      border: 1px solid rgba(61, 155, 143, 0.3);
      border-radius: 16px;
      padding: 18px;
      background: var(--glass-fill-strong);
    }
    .rec-badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #fff;
      background: var(--ink-teal);
      padding: 3px 10px;
      border-radius: 999px;
      margin-bottom: 10px;
    }
    .rec-title {
      margin: 0 0 4px;
      font-family: var(--font-display);
      font-size: 21px;
      line-height: 1.1;
      color: var(--text-primary);
    }
    .rec-sub { margin: 0 0 12px; font-size: 14px; color: var(--text-secondary); line-height: 1.45; }
    .rec-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 14px;
    }
    .rec-meta span {
      font-size: 12px;
      font-weight: 600;
      color: var(--ink-teal);
      background: rgba(61, 155, 143, 0.1);
      padding: 4px 10px;
      border-radius: 999px;
    }
    .fit { display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px; }
    .fit-row {
      display: flex;
      flex-direction: column;
      gap: 1px;
      padding: 8px 12px;
      border-radius: 10px;
      background: var(--glass-fill);
    }
    .fit-name { font-size: 13px; font-weight: 700; color: var(--text-primary); }
    .fit-reason { font-size: 12.5px; color: var(--text-secondary); line-height: 1.4; }
    .logi { margin: 0 0 14px; padding-left: 18px; }
    .logi li { font-size: 12.5px; color: var(--text-secondary); line-height: 1.5; }
    .accept {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 12px;
      background: var(--ink-teal);
      color: #fff;
      font-weight: 700;
      font-size: 14px;
    }
    .accept.done { background: var(--ink-green, #2e8049); }
    /* alternatives */
    .alts-head {
      margin: 18px 0 8px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-tertiary);
    }
    .alt {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      width: 100%;
      text-align: left;
      padding: 13px 14px;
      margin-bottom: 8px;
      border: 1px solid var(--glass-border);
      border-radius: 12px;
      background: var(--glass-fill-strong);
    }
    .alt:hover { border-color: rgba(61, 155, 143, 0.4); }
    .alt-title { font-size: 14px; font-weight: 600; color: var(--text-primary); }
    .alt-sub { font-size: 12px; color: var(--text-secondary); margin-top: 1px; }
    .alt-go { font-size: 12px; font-weight: 600; color: var(--ink-teal); flex-shrink: 0; }
    .regen {
      width: 100%;
      margin-top: 6px;
      padding: 11px;
      border: 1px solid rgba(61, 155, 143, 0.3);
      border-radius: 12px;
      background: transparent;
      color: var(--ink-teal);
      font-weight: 600;
      font-size: 13px;
    }
  `);customElements.define("weekend-planner",Ze);const yi={uid:"preview-user",displayName:"Thomas Paris",email:"thomas@example.com",photoURL:null},pt=[{uid:"thomas",displayName:"Thomas",circles:["immediate"],hue:198},{uid:"partner",displayName:"Élise",circles:["immediate"],hue:8},{uid:"kid1",displayName:"Oscar",circles:["immediate"],hue:142},{uid:"kid2",displayName:"Mila",circles:["immediate"],hue:44},{uid:"mum",displayName:"Mum",circles:["extended"],hue:320},{uid:"dad",displayName:"Dad",circles:["extended"],hue:28},{uid:"sister",displayName:"Camille",circles:["extended"],hue:280},{uid:"bro-in-law",displayName:"Sam",circles:["extended"],hue:175},{uid:"niece",displayName:"Léa",circles:["extended"],hue:100}],xi=[{id:"t1",title:"Côte d’Azur, summer",location:"Antibes, France",start:"2026-07-12",end:"2026-07-21",coverGradient:"linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)",lodgingHost:"Airbnb",lodgingTitle:"Villa near Cap d’Antibes",attendees:["thomas","partner","kid1","kid2","mum","dad"],notes:"Mum + Dad arrive day 2. Dinner reservations at La Guérite booked.",visibility:"extended"},{id:"t2",title:"Half-term in the Alps",location:"Chamonix, France",start:"2026-10-24",end:"2026-10-31",coverGradient:"linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)",lodgingHost:"Booking.com",lodgingTitle:"Chalet Les Drus",attendees:["thomas","partner","kid1","kid2"],notes:"Need ski school for the kids — book by September.",visibility:"immediate"},{id:"t3",title:"Camille’s 40th",location:"Lisbon, Portugal",start:"2026-09-05",end:"2026-09-08",coverGradient:"linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)",lodgingHost:"Airbnb",lodgingTitle:"Alfama rooftop apartment",attendees:["thomas","partner","sister","bro-in-law"],notes:"Surprise. Don’t mention to Camille.",visibility:"family"}],wi=[{id:"e1",type:"birthday",date:"2026-05-24",personIds:["mum"],title:"Mum’s birthday"},{id:"e2",type:"anniversary",date:"2026-05-28",personIds:["mum","dad"],title:"Mum & Dad’s anniversary",subtitle:"38 years"},{id:"e3",type:"birthday",date:"2026-06-11",personIds:["kid1"],title:"Oscar turns 7"},{id:"e4",type:"birthday",date:"2026-06-30",personIds:["niece"],title:"Léa’s birthday"}],St={id:"preview-felix",name:"Felix",dateOfBirth:new Date("2023-11-15"),profilePhotoURL:null,pronouns:"he",themeColorHex:"#3D9B8F",developmentalFlags:["speech and language"]},_i=[St],ki=[{id:"m1",category:"motor",title:"Kicks a ball forward",status:"achieved",ageRangeStartMonths:18,ageRangeEndMonths:24},{id:"m2",category:"motor",title:"Walks up stairs holding on",status:"achieved",ageRangeStartMonths:18,ageRangeEndMonths:24},{id:"m3",category:"motor",title:"Jumps with both feet off the ground",status:"emerging",ageRangeStartMonths:24,ageRangeEndMonths:30},{id:"m4",category:"motor",title:"Pedals a tricycle",status:"notStarted",ageRangeStartMonths:30,ageRangeEndMonths:36},{id:"m5",category:"language",title:"Uses two-word phrases",status:"achieved",ageRangeStartMonths:18,ageRangeEndMonths:24},{id:"m6",category:"language",title:"Says first name when asked",status:"emerging",ageRangeStartMonths:24,ageRangeEndMonths:30},{id:"m7",category:"language",title:"Names six body parts",status:"notStarted",ageRangeStartMonths:24,ageRangeEndMonths:30},{id:"m8",category:"language",title:"Uses three-word sentences",status:"notStarted",ageRangeStartMonths:30,ageRangeEndMonths:36},{id:"m9",category:"socialEmotional",title:"Shows affection unprompted",status:"achieved",ageRangeStartMonths:18,ageRangeEndMonths:24},{id:"m10",category:"socialEmotional",title:"Plays alongside other children",status:"emerging",ageRangeStartMonths:24,ageRangeEndMonths:36},{id:"m11",category:"socialEmotional",title:"Takes turns in simple games",status:"notStarted",ageRangeStartMonths:30,ageRangeEndMonths:42},{id:"m12",category:"cognitive",title:"Follows a two-step instruction",status:"achieved",ageRangeStartMonths:18,ageRangeEndMonths:24},{id:"m13",category:"cognitive",title:"Sorts objects by shape or colour",status:"emerging",ageRangeStartMonths:30,ageRangeEndMonths:36},{id:"m14",category:"cognitive",title:"Completes a 4-piece puzzle",status:"notStarted",ageRangeStartMonths:30,ageRangeEndMonths:36}],$i=[{id:"i1",type:"strength",domain:"language",title:"Language is tracking ahead",body:"Felix is combining words earlier than the typical 24–30 month window — keep the back-and-forth conversations going.",relevanceScore:.95},{id:"i2",type:"connection",domain:"cross",title:"Fine-motor + sorting → pre-literacy",body:"A strong pincer grip alongside early sorting is a classic pre-literacy signal. Picture books with pointing build on both at once.",relevanceScore:.82},{id:"i3",type:"nudge",domain:"language",title:"Narrate your daily routine",body:'"Now we are washing hands… water on… soap…" — Felix is ready for longer sentence models during everyday moments.',relevanceScore:.7}],Ci={id:"2026-05-16",title:"Felix is stringing two words together",body:'You have logged "more milk" and "Daddy go" this week — early two-word speech, right on the edge of the 24–30 month window. Narrating your routine out loud is the single best way to grow sentence length from here.',topicForChat:"How can I support Felix's two-word speech?"},Ai={id:"2026-05-16",title:"Busy Saturday, water shoes for Felix",body:"Splash day at the park this morning, both kids back to routine by nap.",topicForChat:"What should we prep tonight for tomorrow?",mode:"brief",generatedAt:{toMillis:()=>new Date().setHours(6,14,0,0)},bullets:[{kind:"plan",text:"Splash day at 10. Park sprinklers are on for the morning."},{kind:"weather",text:"74°F and sunny. Sun hats for both kids."},{kind:"packing",text:"Felix's water shoes still unchecked on the bag list."},{kind:"coordinate",text:"Ellie is on pickup. You packed the towels last night."}]},Si=[{id:"p1",role:"user",content:"Felix isn't saying many words yet — should I be worried at 2.5?",senderUid:"partner"},{id:"p2",role:"assistant",content:"At 2½, every child's pace differs. From your logs Felix **uses two-word phrases** and follows two-step instructions — both strong signs. A few practical things to try, and a clear marker for when to mention it at his check-up."},{id:"p3",role:"user",content:"Any toddler-friendly ideas for a rainy weekend?",senderUid:"thomas"},{id:"p4",role:"assistant",content:"Rainy days are great for the kind of close-up play that grows language fastest at this stage. A few ideas matched to where Felix is right now."}];class Qe extends z{constructor(){super(),this.user=yi,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this.activities=[],this.holidays=[],this._connectionMembers=[],this._connKey="",this.ppFamily=null,this.ppIsMember=!1,this.ppChildren=[],this.selectedChildId=null,this.childMilestones=[],this.childInsights=[],this.childDailyCard=null,this.familyDailyCard=null,this.pebbleAnchors=[],this.pebbleRhythms=[],this.pebblePatterns=[],this.pebbleLiveContext=[],this._wpkExpanded=new Set,this.childPebbleMessages=[],this.childPebbleSessions=[],this.ppIsChildViewer=!1,this.incomingChildRequests=[],this.myChildAccessRequest=null,this._claimingChildId=null,this._claimedChildName=null,this._joinAnotherCode="",this._joinAnotherBusy=!1,this._joinAnotherError="",this._joinAnotherSuccessName="",this._pebblePrefill="",this._plannerOpen=!1,this._plannerTrip=null,this.preview=!1,this.circle="extended",this._activeTab="today",this._refreshingFamilyBrief=!1,this._autoBriefAttempted=!1,this._weekendOpen=!1,this._wpkOpen=!1,this._packingTemplates=[],this._formOpen=!1,this._formTrip=null,this._formBusy=!1,this._membersOpen=!1,this._eventFormOpen=!1,this._eventFormEvent=null,this._eventFormBusy=!1,this._activityFormOpen=!1,this._activityFormActivity=null,this._activityFormBusy=!1,this._allTripsOpen=!1,this._editingFamilyName=!1,this._importOpen=!1,this._schoolImportOpen=!1,this._profileOpen=!1,this._typePickerOpen=!1,this._formMode="trip",this._pebbleFabOpen=!1,this._themeLight=typeof document<"u"&&document.documentElement.classList.contains("theme-light"),this._dragOverTarget=null;const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1),this._calendarView="week";const t=new Date(e);t.setHours(0,0,0,0),this._displayWeekStart=new Date(t),this._displayWeekStart.setDate(t.getDate()-t.getDay()),this._calFilters={trip:!0,holiday:!0,event:!0,celebrate:!0},this._managingTags=!1,this._tagRenaming=null,this._tagRenameDraft="",this._tagDeleting=null}_onJoinAnotherCodeInput(e){var a;const t=(((a=e.target)==null?void 0:a.value)??"").toString(),i=t.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6);i!==t&&(e.target.value=i),this._joinAnotherCode=i,this._joinAnotherError&&(this._joinAnotherError="")}async _attemptJoinAnotherFamily(){var t;const e=(this._joinAnotherCode??"").trim();if(!(e.length!==6||this._joinAnotherBusy)){this._joinAnotherBusy=!0,this._joinAnotherError="",this._joinAnotherSuccessName="";try{const i=await f.findFamilyByConnectCode(e);if(!i){this._joinAnotherError="Couldn't find that family. Double-check the code with whoever invited you.";return}const a=i.name||"the family";await f.redeemConnectCode(e),this._joinAnotherSuccessName=a,y(`Joined ${a}.`),this._joinAnotherCode=""}catch(i){console.error("Join another family failed:",i),this._joinAnotherError=((t=i==null?void 0:i.message)==null?void 0:t.replace(/^Error:\s*/,""))??"Couldn't join — double-check the code with whoever invited you."}finally{this._joinAnotherBusy=!1}}}async _saveFamilyName(e){var r,s;const i=(e.target.value??"").trim(),a=((r=this.family)==null?void 0:r.name)??"";if(i&&i!==a&&((s=this.family)!=null&&s.id))try{const{db:o,doc:d,updateDoc:l,serverTimestamp:p}=await ie(async()=>{const{db:h,doc:c,updateDoc:b,serverTimestamp:v}=await Promise.resolve().then(()=>Zt);return{db:h,doc:c,updateDoc:b,serverTimestamp:v}},void 0);await l(d(o,"families",this.family.id),{name:i,updatedAt:p()}),y("Family name updated.")}catch(o){console.error("Update family name failed:",o),y(`Couldn't save: ${o.code??o.message}`,{duration:5e3})}this._editingFamilyName=!1}_liveImmediate(){var e;return this.preview||!((e=this.user)!=null&&e.uid)?pt.filter(t=>t.circles.includes("immediate")):ri(this.user.uid,this.user,this.pebbleUser,this.family,this.children)}_liveExtended(){var e;return this.preview?pt.filter(t=>t.circles.includes("extended")):ti((e=this.user)==null?void 0:e.uid,this.family,this.children)}_liveConnections(){return this.preview?[]:this._connectionMembers??[]}async _refreshConnectionMembers(){var e;if(this.preview||!this.family){this._connectionMembers=[];return}try{this._connectionMembers=await ii((e=this.user)==null?void 0:e.uid,this.family)}catch{this._connectionMembers=[]}}updated(e){var t,i;if(e.has("family")){const a=Array.isArray((t=this.family)==null?void 0:t.connectedFamilyIds)?this.family.connectedFamilyIds:[],r=`${((i=this.family)==null?void 0:i.id)??""}|${[...a].sort().join(",")}`;r!==this._connKey&&(this._connKey=r,this._refreshConnectionMembers())}e.has("_activeTab")&&(this._positionTabSlider({animate:!0}),this._activeTab!=="cairn"&&this._wpkOpen&&(this._wpkOpen=!1))}_liveTrips(){return this.preview?xi:this.trips??[]}_liveEvents(){if(this.preview)return wi;const e=a=>{const{date:r,yearsElapsed:s}=ni(a);return{...a,date:r?Q(r):a.date,_yearsElapsed:s,_originalDate:a.date}},t=si(this.children).map(e),i=(this.events??[]).map(e);return[...t,...i].sort((a,r)=>String(a.date).localeCompare(String(r.date)))}_filteredMembers(){const e=this._liveImmediate(),t=this._liveExtended();return this.circle==="personal"?e.filter(i=>{var a;return i.uid===((a=this.user)==null?void 0:a.uid)}):this.circle==="family"?e:[...e,...t]}_circleTrips(){var s;const e=this._liveTrips(),t=((s=this.user)==null?void 0:s.uid)??"thomas";let i;this.circle==="personal"?i=e.filter(o=>{var d;return(d=o.attendees)==null?void 0:d.includes(t)}):this.circle==="family"?i=e.filter(o=>o.visibility!=="extended"&&this._userCanSeeTrip(o)):i=e.filter(o=>this._userCanSeeTrip(o));const a=new Set,r=[];for(const o of i){const d=o.id??`${o.title}|${o.start}|${o.end}`;a.has(d)||(a.add(d),r.push(o))}return r}_filteredTrips(){const e=new Date;return e.setHours(0,0,0,0),this._circleTrips().filter(t=>t.end?S(t.end)>=e:!0)}_userCanSeeTrip(e){var d,l,p,h,c,b;const t=(d=this.user)==null?void 0:d.uid;if(!t)return!1;if((l=e.attendees)!=null&&l.includes(t)||(p=e.viewers)!=null&&p.includes(t))return!0;const i=((h=this.family)==null?void 0:h.memberIds)??[],a=((c=this.family)==null?void 0:c.cairnMemberIds)??i,r=i.includes(t),s=a.includes(t);if(r)return!0;if(!s)return!1;const o=e.visibility||"family";if(o==="personal")return!1;if(o==="family")return!0;if(o==="extended"){const v=e.targetSubGroups??[];if(v.length===0)return!0;const k=Object.entries(((b=this.family)==null?void 0:b.subGroups)??{}).filter(([,m])=>(m.memberIds??[]).includes(t)).map(([m])=>m);return v.some(m=>k.includes(m))}return!1}_filteredEvents(){const e=new Set(this._filteredMembers().map(t=>t.uid));return this._liveEvents().filter(t=>(Array.isArray(t==null?void 0:t.personIds)?t.personIds:[]).some(a=>e.has(a)))}_standaloneActivities(){return(this.activities??[]).filter(e=>!(e!=null&&e.tripId)&&this._tagVisible(e))}_calendarActivities(){return(this.activities??[]).filter(e=>e&&this._tagVisible(e))}_smartCallout(){var o;const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),i=1440*60*1e3,a=d=>Math.round((d-t)/i);let r=null,s=1/0;for(const d of this._circleTrips()){if(!d.start)continue;const l=S(d.start);if(!l)continue;const p=a(l);p>0&&p<s&&(r={kind:"trip",item:d},s=p)}for(const d of this._filteredEvents()){if(!d.date)continue;const l=S(d.date);if(!l)continue;const p=a(l);p>=0&&p<s&&(r={kind:"event",item:d},s=p)}if(!r)return null;if(r.kind==="trip"){const d=((o=r.item.location)==null?void 0:o.trim())||r.item.title;return s===1?`${d} starts tomorrow.`:s<=14?`${d} in ${s} days.`:s<=60?`Next trip: ${d} in ${s} days.`:null}return s===0?`${r.item.title} — today.`:s===1?`${r.item.title} — tomorrow.`:s<=7?`${r.item.title} in ${s} days.`:null}_tripDensityByDay(e){const t=new Map;for(const i of this._filteredTrips()){if(!i.start||!i.end)continue;const a=S(i.start),r=S(i.end);if(Number.isNaN(a.getTime())||Number.isNaN(r.getTime())||a.getFullYear()>e||r.getFullYear()<e)continue;const s=new Date(Math.max(a,new Date(e,0,1))),o=new Date(Math.min(r,new Date(e,11,31)));for(;s<=o;){const d=`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`;t.set(d,Math.min(1,(t.get(d)??0)+.5)),s.setDate(s.getDate()+1)}}return t}_shiftMonth(e){const t=this._displayMonth;this._displayMonth=new Date(t.getFullYear(),t.getMonth()+e,1)}_jumpToMonth(e,t){this._displayMonth=new Date(e,t,1)}_resetToToday(){const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1)}_openCreate(){if(this.preview){y("Sign in to create real activities.");return}if(!f.familyId){y("You need a PebblePath family first.");return}this._typePickerOpen=!0}_onTypePicked(e){this._typePickerOpen=!1;const t=e.detail.type;if(t==="event"){this._eventFormEvent=null,this._eventFormOpen=!0;return}if(t==="import"){this._importOpen=!0;return}if(t==="activity"){this._openNewActivity();return}this._formMode="trip",this._formTrip=null,this._formOpen=!0}_openPlanner(e){this._plannerTrip=e,this._plannerOpen=!0,this._activeTab="activities",this.updateComplete.then(()=>{requestAnimationFrame(()=>requestAnimationFrame(()=>{var i;const t=(i=this.renderRoot)==null?void 0:i.querySelector("trip-planner");t==null||t.scrollIntoView({behavior:"smooth",block:"start"})}))})}_onOpenTripPlannerFromImport(e){var a;const t=(a=e==null?void 0:e.detail)==null?void 0:a.tripId;if(!t)return;this._importOpen=!1;const i=(f.state.trips??[]).find(r=>r.id===t);i&&requestAnimationFrame(()=>this._openPlanner(i))}_openEdit(e){if(this.preview){y("Sign in to edit real activities.");return}const t=e.lodgingUrl||e.lodgingHost||e.flightNumber||e.flightDepartAirport;this._formMode=t?"trip":"activity",this._formTrip=e,this._formOpen=!0}async _onSaveTrip(e){const t=e.detail;this._formBusy=!0;try{await f.saveTrip(t),this._formOpen=!1,this._formTrip=null,y(t.id?"Trip updated.":"Trip created.")}catch(i){console.error("Save trip failed:",i),y(`Couldn't save: ${i.code??i.message}`,{duration:5e3})}finally{this._formBusy=!1}}async _onDeleteTrip(e){this._formBusy=!0;try{await f.deleteTrip(e.detail.id),this._formOpen=!1,this._formTrip=null,y("Trip deleted.")}catch(t){console.error("Delete trip failed:",t),y(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._formBusy=!1}}_openCreateEvent(){if(this.preview){y("Sign in to add real events.");return}if(!f.familyId){y("You need a family first.");return}this._eventFormEvent=null,this._eventFormOpen=!0}_openEditEvent(e){if(this.preview){y("Sign in to edit real events.");return}if(e!=null&&e._childId){const t=prompt(`Edit ${e._childName}'s birthday (YYYY-MM-DD):`,e.date);if(!t)return;if(!/^\d{4}-\d{2}-\d{2}$/.test(t)){y("Use YYYY-MM-DD format.");return}f.updateChildBirthday(e._childId,new Date(t)).then(()=>y(`Updated ${e._childName}'s birthday.`)).catch(i=>{console.error("Update child birthday failed:",i),y(`Couldn't update: ${i.code??i.message}`,{duration:5e3})});return}this._eventFormEvent={...e,date:e._originalDate??e.date},this._eventFormOpen=!0}async _onSaveEvent(e){this._eventFormBusy=!0;try{await f.saveEvent(e.detail),this._eventFormOpen=!1,this._eventFormEvent=null,y(e.detail.id?"Event updated.":"Event added.")}catch(t){console.error("Save event failed:",t),y(`Couldn't save: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}async _onDeleteEvent(e){this._eventFormBusy=!0;try{await f.deleteEvent(e.detail.id),this._eventFormOpen=!1,this._eventFormEvent=null,y("Event deleted.")}catch(t){console.error("Delete event failed:",t),y(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}_openNewActivity(){if(this.preview){y("Sign in to create real activities.");return}if(!f.familyId){y("You need a family first.");return}this._activityFormActivity=null,this._activityFormOpen=!0}_openEditActivity(e){if(this.preview){y("Sign in to edit real activities.");return}this._activityFormActivity={...e},this._activityFormOpen=!0}async _onSaveActivity(e){this._activityFormBusy=!0;try{await f.saveActivity(e.detail),this._activityFormOpen=!1,this._activityFormActivity=null,y(e.detail.id?"Activity updated.":"Activity added.")}catch(t){console.error("Save activity failed:",t),y(`Couldn't save: ${t.code??t.message}`,{duration:5e3})}finally{this._activityFormBusy=!1}}async _onDeleteActivity(e){this._activityFormBusy=!0;try{await f.deleteActivity(e.detail.id),this._activityFormOpen=!1,this._activityFormActivity=null,y("Activity deleted.")}catch(t){console.error("Delete activity failed:",t),y(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._activityFormBusy=!1}}get _pebbleAvailable(){return this.preview||this.ppIsMember||this.ppIsChildViewer}_tabDefs(){const e={id:"pebble",label:"Pebble",icon:n`<pebble-icon></pebble-icon>`};return[{id:"today",label:"Today",icon:n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9" /><path d="M5 10v10h14V10" /></svg>`},{id:"children",label:"Children",icon:n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4" /><path d="M5 21c0-4 3-6 7-6s7 2 7 6" /></svg>`},...this._pebbleAvailable?[e]:[],{id:"activities",label:"Activities",icon:n`<span
          class="mountain-icon"
          style="--mountain-src:url(${"/portal/"}mountain.png)"
          aria-hidden="true"
        ></span>`},{id:"cairn",label:"Settings",icon:n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>`}]}_renderTabBar(){return n`
      <nav class="tabs" role="tablist" aria-label="Sections">
        <span class="tab-slider" aria-hidden="true"></span>
        ${this._tabDefs().map(e=>n`<button
            class="tab ${this._activeTab===e.id?"active":""}"
            role="tab"
            aria-selected=${this._activeTab===e.id?"true":"false"}
            @click=${()=>this._activeTab=e.id}
          >
            ${e.icon}<span>${e.label}</span>
          </button>`)}
      </nav>
    `}_positionTabSlider({animate:e=!0}={}){this._slideOn(".tabs",".tab-slider",".tab.active",e),this._slideOn(".bottomnav",".bn-slider",".bn-tab.active",e)}_slideOn(e,t,i,a){var d;const r=(d=this.renderRoot)==null?void 0:d.querySelector(e);if(!r)return;const s=r.querySelector(t),o=r.querySelector(i);if(!(!s||!o)&&o.offsetParent!==null){if(!a){const l=s.style.transition;s.style.transition="none",s.style.transform=`translateX(${o.offsetLeft}px)`,s.style.width=`${o.offsetWidth}px`,s.offsetWidth,s.classList.add("ready"),requestAnimationFrame(()=>{s.style.transition=l||""});return}s.classList.add("ready"),s.style.transform=`translateX(${o.offsetLeft}px)`,s.style.width=`${o.offsetWidth}px`}}firstUpdated(e){var t,i,a;if((t=super.firstUpdated)==null||t.call(this,e),this._positionTabSlider({animate:!1}),typeof ResizeObserver<"u"){this._tabsRO=new ResizeObserver(()=>{this._positionTabSlider({animate:!1})});const r=(i=this.renderRoot)==null?void 0:i.querySelector(".tabs"),s=(a=this.renderRoot)==null?void 0:a.querySelector(".bottomnav");r&&this._tabsRO.observe(r),s&&this._tabsRO.observe(s)}}connectedCallback(){super.connectedCallback(),this._pkgTplUnsub=f.packingTemplatesListener(e=>{this._packingTemplates=e})}disconnectedCallback(){var e,t;(e=this._tabsRO)==null||e.disconnect(),this._tabsRO=null,(t=this._pkgTplUnsub)==null||t.call(this),this._pkgTplUnsub=null,super.disconnectedCallback()}_renderBottomNav(){return n`
      <nav class="bottomnav" role="tablist" aria-label="Sections">
        <span class="bn-slider" aria-hidden="true"></span>
        ${this._tabDefs().map(e=>n`<button
            class="bn-tab ${this._activeTab===e.id?"active":""}"
            role="tab"
            aria-selected=${this._activeTab===e.id?"true":"false"}
            @click=${()=>{this._activeTab=e.id,window.scrollTo({top:0,behavior:"smooth"})}}
          >
            ${e.icon}<span>${e.label}</span>
          </button>`)}
      </nav>
    `}_renderActiveTab(){switch(this._activeTab){case"children":return this._renderChildrenTab();case"activities":return this._renderActivitiesTab();case"pebble":return this._renderPebbleTab();case"cairn":return this._renderCairnTab();default:return this._renderTodayTab()}}_renderTodayHeader(e=""){var p;const t=(((p=this.user)==null?void 0:p.displayName)??"there").split(" ")[0],i=this._filteredEvents(),a=new Date,r=new Date(a.getFullYear(),a.getMonth(),1),s=new Date(a.getFullYear(),a.getMonth()+1,0),o=i.filter(h=>{const c=S(h.date);return c&&c.getFullYear()===a.getFullYear()&&c.getMonth()===a.getMonth()}),l=this._circleTrips().filter(h=>{if(!h.start||!h.end)return!1;const c=S(h.start),b=S(h.end);return Number.isNaN(c.getTime())||Number.isNaN(b.getTime())?!1:c<=s&&b>=r}).length+o.length;return n`
        <div class="hello">
          <div>
            <h1>Hi ${t}.</h1>
            ${(()=>{const h=this._smartCallout();return h?n`<div class="smart">${h}</div>`:""})()}
            ${l>0?n`<div class="stat">
                  <span>${l}</span> ${l===1?"activity":"activities"} this month
                </div>`:""}
            ${this.family?this._editingFamilyName?n`<input
                    class="family-name-input"
                    type="text"
                    .value=${this.family.name??""}
                    autofocus
                    @blur=${this._saveFamilyName}
                    @keydown=${h=>{h.key==="Enter"&&h.target.blur(),h.key==="Escape"&&(h.target.value=this.family.name??"",this._editingFamilyName=!1)}}
                  />`:n`<div
                    class="family-name"
                    title="Click to rename"
                    @click=${()=>this._editingFamilyName=!0}
                  >
                    ${this.family.name||"Tap to name your family"}
                  </div>`:""}
          </div>
          ${e}
        </div>
    `}_renderTabHeader(e,t,i=""){return n`
        <div class="hello">
          <div>
            <h1>${e}</h1>
            ${t?n`<div class="page-sub">${t}</div>`:""}
          </div>
          ${i}
        </div>
    `}_renderComingUpSection(){const e=this._filteredTrips(),t=this._liveImmediate().concat(this._liveExtended());return n`
        <section>
          <div class="section-head">
            <h2>Coming up</h2>
            <div style="display:flex;gap:10px;align-items:center;">
              <button
                class="link plan-weekend-link"
                @click=${()=>this._weekendOpen=!0}
                title="Plan our weekend with Pebble"
              >
                <pebble-icon size="14"></pebble-icon> Plan our weekend
              </button>
              <button
                class="link hide-mobile"
                @click=${()=>this._importOpen=!0}
              >
                Import from Calendar
              </button>
              <button
                class="link hide-mobile"
                @click=${()=>this._schoolImportOpen=!0}
              >
                Import from PDF
              </button>
              ${this._circleTrips().length>4?n`<button class="link" @click=${()=>this._allTripsOpen=!0}>
                    All trips →
                  </button>`:""}
            </div>
          </div>
          ${e.length===0?n`
                <glass-panel padding="lg" variant="strong">
                  <div class="empty-hero">
                    <div class="empty-icon" aria-hidden="true">
                      <svg viewBox="0 0 28 28" width="40" height="40">
                        <defs>
                          <linearGradient id="es-grad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stop-color="#3d9b8f" />
                            <stop offset="1" stop-color="#c67b5c" />
                          </linearGradient>
                        </defs>
                        <circle cx="14" cy="14" r="13" fill="none" stroke="url(#es-grad)" stroke-width="1.5" stroke-dasharray="2 3" />
                        <path d="M14 8v6l4 2.5" fill="none" stroke="url(#es-grad)" stroke-width="2" stroke-linecap="round" />
                      </svg>
                    </div>
                    <div class="empty-title">Let's plan something fun.</div>
                    <div class="empty-sub">
                      Plan a trip, weekend, or outing — or pull what's already
                      in your Google Calendar.
                    </div>
                    <div class="empty-actions">
                      <button class="empty-cta primary" @click=${()=>this._openCreate()}>
                        + New activity
                      </button>
                      <button class="empty-cta ghost" @click=${()=>this._importOpen=!0}>
                        Import from Google Calendar
                      </button>
                    </div>
                  </div>
                </glass-panel>
              `:n`
                <div class="trips-row">
                  ${e.map(i=>n`<trip-card
                      .trip=${i}
                      .members=${t}
                      @open-planner=${a=>this._openPlanner(a.detail)}
                      @edit-trip=${a=>this._openEdit(a.detail)}
                    ></trip-card>`)}
                </div>
              `}
        </section>
    `}_resetCalToToday(){const e=new Date;if(this._calendarView==="week"){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-t.getDay()),this._displayWeekStart=t}else this._calendarView==="year"?this._displayMonth=new Date(e.getFullYear(),0,1):this._resetToToday()}_calToolbarPrev(){var e;if(this._calendarView==="week"){const t=new Date(this._displayWeekStart);t.setDate(t.getDate()-7),this._displayWeekStart=t}else if(this._calendarView==="year"){const t=((e=this._displayMonth)==null?void 0:e.getFullYear())??new Date().getFullYear();this._displayMonth=new Date(t-1,0,1)}else this._shiftMonth(-1)}_calToolbarNext(){var e;if(this._calendarView==="week"){const t=new Date(this._displayWeekStart);t.setDate(t.getDate()+7),this._displayWeekStart=t}else if(this._calendarView==="year"){const t=((e=this._displayMonth)==null?void 0:e.getFullYear())??new Date().getFullYear();this._displayMonth=new Date(t+1,0,1)}else this._shiftMonth(1)}_openItem(e){if(!e||!e.ref)return;if(e.cat==="trip"){this._openPlanner(e.ref);return}if(e.src==="activity"){this._openEditActivity(e.ref);return}(e.cat==="event"&&!e.ref.tripId||e.cat==="celebrate")&&this._openEditEvent(e.ref)}_eventCalCat(e){const t=e==null?void 0:e.category;return t==="plan"||t==="activity"?"event":t==="celebration"||(e==null?void 0:e.type)==="birthday"||(e==null?void 0:e.type)==="anniversary"?"celebrate":"event"}_isCelebrationEvent(e){return this._eventCalCat(e)==="celebrate"}_eventTags(){const e=new Set;for(const t of this._filteredEvents()){const i=String((t==null?void 0:t.calTag)??"").trim();i&&e.add(i)}for(const t of this._standaloneActivities()){const i=String((t==null?void 0:t.calTag)??"").trim();i&&e.add(i)}return[...e].sort((t,i)=>t.localeCompare(i))}_tagVisible(e){const t=String((e==null?void 0:e.calTag)??"").trim();return t?this._calFilters["tag:"+t]!==!1:!0}_dominantCategoryForDay(e){if(!e)return null;const t=e.getFullYear(),i=e.getMonth(),a=e.getDate();if(this._calFilters.trip)for(const o of this._circleTrips()){if(!o.start||!o.end)continue;const d=S(o.start),l=S(o.end);if(!(!d||!l)&&e>=d&&e<=l)return"trip"}if(this._calFilters.holiday)for(const o of this.holidays??[]){const d=S(o.date);if(d&&d.getFullYear()===t&&d.getMonth()===i&&d.getDate()===a)return"holiday"}let r=!1,s=!1;for(const o of this._filteredEvents()){const d=S(o.date);if(!d||d.getFullYear()!==t||d.getMonth()!==i||d.getDate()!==a||!this._tagVisible(o))continue;this._eventCalCat(o)==="celebrate"?r=!0:s=!0}for(const o of this._standaloneActivities()){const d=S(o.day);if(d&&d.getFullYear()===t&&d.getMonth()===i&&d.getDate()===a){s=!0;break}}return r&&this._calFilters.celebrate?"celebrate":s&&this._calFilters.event?"event":null}_renderCalToolbar(e,t){var s;let i="",a="";if(e==="week"){const o=new Date(this._displayWeekStart),d=new Date(o);d.setDate(o.getDate()+6);const l=h=>h.toLocaleDateString("en-GB",{month:"short",day:"numeric"});i=o.getMonth()===d.getMonth()&&o.getFullYear()===d.getFullYear()?`${l(o)} – ${d.getDate()}`:`${l(o)} – ${l(d)}`,a=String(o.getFullYear())}else if(e==="year"){const o=((s=this._displayMonth)==null?void 0:s.getFullYear())??t.getFullYear();i=String(o),a="Tap a month to open it"}else{const o=this._displayMonth??t;i=o.toLocaleString("en-GB",{month:"long",year:"numeric"}),a=String(o.getFullYear())}return n`
      <div class="cal-tb">
        <div class="cal-tb-l">
          <button class="cal-today-btn" @click=${()=>this._resetCalToToday()}>Today</button>
          <div class="cal-nav">
            <button aria-label="Previous" @click=${()=>this._calToolbarPrev()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button aria-label="Next" @click=${()=>this._calToolbarNext()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
          <div class="cal-period">
            <span class="pt">${i}</span>
            <span class="ps">${a}</span>
          </div>
        </div>
        <div class="cal-tb-r">
          <div class="cal-vswitch" role="tablist" aria-label="Calendar view">
            ${[{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}].map(o=>n`
                <button
                  role="tab"
                  aria-selected=${e===o.id?"true":"false"}
                  class=${e===o.id?"on":""}
                  @click=${()=>this._calendarView=o.id}
                >${o.label}</button>
              `)}
          </div>
          <button class="cal-add" @click=${()=>this._openCreate()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add event
          </button>
        </div>
      </div>
    `}_renderCalMini(e){const t=this._displayMonth??e,i=t.getFullYear(),a=t.getMonth(),r=t.toLocaleString("en-GB",{month:"long",year:"numeric"}),s=new Date(i,a,1).getDay(),o=new Date(i,a+1,0).getDate(),d=new Date(i,a,0).getDate(),l=[];for(let c=s-1;c>=0;c--){const b=d-c;l.push({day:b,muted:!0,real:new Date(i,a-1,b)})}for(let c=1;c<=o;c++)l.push({day:c,muted:!1,real:new Date(i,a,c)});let p=1;for(;l.length<42;)l.push({day:p,muted:!0,real:new Date(i,a+1,p)}),p++;const h=(c,b)=>c.getFullYear()===b.getFullYear()&&c.getMonth()===b.getMonth()&&c.getDate()===b.getDate();return n`
      <div class="cal-mini">
        <div class="cal-mini-top">
          <span class="mm">${r}</span>
          <div class="cal-mini-arrows">
            <button @click=${()=>this._shiftMonth(-1)} aria-label="Previous month">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button @click=${()=>this._shiftMonth(1)} aria-label="Next month">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
        <div class="cal-mini-dow">
          <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
        </div>
        <div class="cal-mini-grid">
          ${l.map(c=>{const b=h(c.real,e),v=b?null:this._dominantCategoryForDay(c.real),k=["cal-mini-d",c.muted?"muted":"",b?"today":""].filter(Boolean).join(" ");return n`<div
              class=${k}
              @click=${()=>{this._displayMonth=new Date(c.real.getFullYear(),c.real.getMonth(),1),this._calendarView="month"}}
            >
              ${c.day}
              ${v?n`<span class=${"dot cat-"+v}></span>`:""}
            </div>`})}
        </div>
      </div>
    `}_renderCalFilters(){var l;const e=this._circleTrips(),t=this._filteredEvents(),i=t.filter(p=>this._eventCalCat(p)==="celebrate"),a=((l=this._displayMonth)==null?void 0:l.getFullYear())??new Date().getFullYear(),r=(this.holidays??[]).filter(p=>{var h;return((h=S(p.date))==null?void 0:h.getFullYear())===a}),s=[{id:"trip",label:"Trips",count:e.length},{id:"holiday",label:"Holidays",count:r.length},{id:"event",label:"Activities",count:this._calendarActivities().length},{id:"celebrate",label:"Celebrations",count:i.length}],o=this._eventTags(),d=(p,h,c,b)=>{const v=this._calFilters[h]!==!1;return n`
        <div
          class=${"cal-filt "+p+(v?"":" off")}
          @click=${()=>this._calFilters={...this._calFilters,[h]:!v}}
          role="checkbox"
          aria-checked=${v?"true":"false"}
          tabindex="0"
          @keydown=${k=>{(k.key===" "||k.key==="Enter")&&(k.preventDefault(),this._calFilters={...this._calFilters,[h]:!v})}}
        >
          <span class="sw">
            ${v?n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:""}
          </span>
          <span class="nm">${c}</span>
          <span class="ct">${b}</span>
        </div>
      `};return n`
      <div class="cal-side-h">Calendars</div>
      <div class="cal-filt-list">
        ${s.map(p=>d("cat-"+p.id,p.id,p.label,p.count))}
      </div>
      ${o.length?n`
            <div class="cal-side-h cal-side-h--tags">
              <span>Tags</span>
              <button
                class="tag-manage-btn"
                @click=${()=>{this._managingTags=!this._managingTags,this._tagRenaming=null,this._tagDeleting=null}}
              >
                ${this._managingTags?"Done":"Manage"}
              </button>
            </div>
            <div class="cal-filt-list">
              ${this._managingTags?o.map(p=>this._renderTagManageRow(p,t.filter(h=>String((h==null?void 0:h.calTag)??"").trim()===p).length)):o.map(p=>d("cat-tag","tag:"+p,p,t.filter(h=>String((h==null?void 0:h.calTag)??"").trim()===p).length))}
            </div>
          `:""}
    `}_renderTagManageRow(e,t){return this._tagRenaming===e?n`
        <div class="tag-row tag-row--edit">
          <input
            class="tag-rename-in"
            .value=${this._tagRenameDraft}
            maxlength="60"
            placeholder="Tag name"
            @input=${i=>this._tagRenameDraft=i.target.value}
            @keydown=${i=>{i.key==="Enter"?(i.preventDefault(),this._commitTagRename(e)):i.key==="Escape"&&(this._tagRenaming=null)}}
          />
          <button
            class="tag-mini tag-mini--ok"
            title="Save"
            aria-label="Save tag name"
            @click=${()=>this._commitTagRename(e)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
          <button
            class="tag-mini"
            title="Cancel"
            aria-label="Cancel rename"
            @click=${()=>this._tagRenaming=null}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      `:this._tagDeleting===e?n`
        <div class="tag-row tag-row--confirm">
          <span class="tag-confirm-txt">Remove "${e}"? Events stay, they just lose this tag.</span>
          <div class="tag-confirm-actions">
            <button class="tag-mini" @click=${()=>this._tagDeleting=null}>
              Cancel
            </button>
            <button
              class="tag-mini tag-mini--del"
              @click=${()=>this._doDeleteTag(e)}
            >
              Remove
            </button>
          </div>
        </div>
      `:n`
      <div class="tag-row">
        <span class="tag-name" title=${e}>${e}</span>
        <span class="tag-count">${t}</span>
        <button
          class="tag-mini"
          title="Rename tag"
          aria-label="Rename tag"
          @click=${()=>this._startTagRename(e)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        </button>
        <button
          class="tag-mini tag-mini--del"
          title="Remove tag"
          aria-label="Remove tag"
          @click=${()=>{this._tagDeleting=e,this._tagRenaming=null}}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    `}_startTagRename(e){this._tagDeleting=null,this._tagRenameDraft=e,this._tagRenaming=e}async _commitTagRename(e){const t=String(this._tagRenameDraft??"").trim().slice(0,60);if(this._tagRenaming=null,!(!t||t===e))try{const i=await f.renameCalTag(e,t);y(`Renamed tag to "${t}" on ${i} event${i===1?"":"s"}.`)}catch(i){console.error("renameCalTag failed:",i),y("Couldn't rename the tag, try again.")}}async _doDeleteTag(e){this._tagDeleting=null;try{const t=await f.deleteCalTag(e);y(`Removed the "${e}" tag from ${t} event${t===1?"":"s"}.`),this._eventTags().length===0&&(this._managingTags=!1)}catch(t){console.error("deleteCalTag failed:",t),y("Couldn't remove the tag, try again.")}}_assignLanes(e){const t=[...e].sort((a,r)=>a.colStart-r.colStart||r.span-a.span),i=[];for(const a of t){let r=!1;for(let s=0;s<i.length;s++)if(i[s]<=a.colStart){a.lane=s+1,i[s]=a.colStart+a.span,r=!0;break}r||(a.lane=i.length+1,i.push(a.colStart+a.span))}return t}_renderCalWeek(e){const t=new Date(this._displayWeekStart);t.setHours(0,0,0,0);const i=new Date(t);i.setDate(t.getDate()+6),i.setHours(23,59,59,999);const a=Array.from({length:7},(m,x)=>{const P=new Date(t);return P.setDate(t.getDate()+x),P}),r=(m,x)=>m.getFullYear()===x.getFullYear()&&m.getMonth()===x.getMonth()&&m.getDate()===x.getDate(),s=[];if(this._calFilters.trip)for(const m of this._circleTrips()){if(!m.start||!m.end)continue;const x=S(m.start),P=S(m.end);if(!x||!P||P<t||x>i)continue;const F=x<t?t:x,N=P>i?i:P,J=F.getDay()+2,ne=Math.round((N-F)/(1440*60*1e3)),q=Math.max(1,ne+1);s.push({cat:"trip",title:m.title||"Trip",colStart:J,span:q,ref:m})}for(const m of this._filteredEvents()){const x=S(m.date);if(!x||x<t||x>i||!this._tagVisible(m))continue;const P=this._eventCalCat(m);P!=="event"&&this._calFilters[P]&&s.push({cat:P,title:m.title||(P==="celebrate"?"Celebration":"Event"),colStart:x.getDay()+2,span:1,ref:m})}if(this._calFilters.event)for(const m of this._calendarActivities()){const x=S(m.day);!x||x<t||x>i||m.time&&String(m.time).trim()!==""||s.push({cat:"event",title:m.title||"Activity",colStart:x.getDay()+2,span:1,ref:m,src:"activity"})}if(this._calFilters.holiday)for(const m of this.holidays??[]){const x=S(m.date);x&&(x<t||x>i||s.push({cat:"holiday",title:m.title||"Holiday",colStart:x.getDay()+2,span:1,ref:m}))}const o=this._assignLanes(s).slice(0,60),d=[8,9,10,11,12,13,14,15,16,17,18,19],l=52,p=(m,x)=>{const P=m<12?"AM":"PM";return`${(m+11)%12+1}:${String(x).padStart(2,"0")} ${P}`},h=Array.from({length:7},()=>[]);if(this._calFilters.event)for(const m of this._calendarActivities()){if(!m||!m.day)continue;const x=S(m.day);if(!x||x<t||x>i)continue;const P=String(m.time??"").trim();if(!P)continue;const F=P.match(/^(\d{1,2}):(\d{2})/);if(!F)continue;const N=Number(F[1]),J=Number(F[2]);if(N<8||N>=20)continue;const ne=(N-8)*l+J/60*l,q=Number.isFinite(m.durationMins)?m.durationMins:60,A=Math.max(24,q/60*l),D=N*60+J+q,j=Math.floor(D/60),ce=D%60,me=`${p(N,J)} – ${p(j,ce)}`;h[x.getDay()].push({cat:"event",title:m.title||"Activity",top:ne,height:A,timeLabel:me,ref:m,src:"activity"})}const c=new Date;let b=-1,v=null;if(c>=t&&c<=i){const m=c.getHours(),x=c.getMinutes();m>=8&&m<20&&(b=c.getDay(),v=(m-8)*l+x/60*l)}const k=Math.max(1,Math.min(3,o.reduce((m,x)=>Math.max(m,x.lane),0)));return n`
      <div class="cal-week">
        <div class="wk-head">
          <div class="gut"></div>
          ${a.map(m=>{const x=r(m,e),P=m.toLocaleDateString("en-GB",{weekday:"short"});return n`<div class=${"wk-h"+(x?" today":"")}>
              <div class="dw">${P}</div>
              <div class="nm">${m.getDate()}</div>
            </div>`})}
        </div>
        <div
          class="cal-allday"
          style="grid-template-rows: repeat(${k}, 23px);"
        >
          <div class="ad-lbl">All-day</div>
          ${o.filter(m=>m.lane<=3).map(m=>n`<div
                class=${"ad cat-"+m.cat}
                style=${`grid-column:${m.colStart} / span ${m.span}; grid-row:${m.lane};`}
                title=${m.title}
                @click=${()=>this._openItem(m)}
              >${m.title}</div>`)}
        </div>
        <div class="cal-tg">
          <div class="tg-gut">
            ${d.map(m=>{const x=m<12?"AM":"PM",P=(m+11)%12+1;return n`<div class="tg-hr">${P} ${x}</div>`})}
          </div>
          ${a.map((m,x)=>{const P=r(m,e),F=x===b&&v!=null;return n`<div class=${"tg-day"+(P?" today":"")}>
              ${F?n`<div class="nowline" style=${`top:${v}px;`}></div>`:""}
              ${h[x].map(N=>n`<div
                  class=${"tev cat-"+N.cat}
                  style=${`top:${N.top}px; height:${N.height}px;`}
                  title=${N.title}
                  @click=${()=>this._openItem(N)}
                >
                  <div class="tt">${N.title}</div>
                  <div class="tm">${N.timeLabel}</div>
                </div>`)}
            </div>`})}
        </div>
      </div>
    `}_renderCalMonth(e){const t=this._displayMonth??e,i=t.getFullYear(),a=t.getMonth(),r=new Date(i,a,1).getDay(),s=new Date(i,a+1,0).getDate(),o=new Date(i,a,0).getDate(),d=[];for(let m=r-1;m>=0;m--){const x=o-m;d.push({real:new Date(i,a-1,x),muted:!0})}for(let m=1;m<=s;m++)d.push({real:new Date(i,a,m),muted:!1});let l=1;for(;d.length<42;)d.push({real:new Date(i,a+1,l),muted:!0}),l++;const p=[];for(let m=0;m<6;m++)p.push(d.slice(m*7,m*7+7));const h=(m,x)=>m.getFullYear()===x.getFullYear()&&m.getMonth()===x.getMonth()&&m.getDate()===x.getDate(),c=(m,x)=>Math.round((new Date(m.getFullYear(),m.getMonth(),m.getDate())-new Date(x.getFullYear(),x.getMonth(),x.getDate()))/(1440*60*1e3)),b=this._circleTrips(),v=this._filteredEvents(),k=this.holidays??[];return n`
      <div class="cal-month">
        <div class="m-dow">
          <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
        </div>
        <div class="m-grid">
          ${p.map(m=>{const x=m[0].real,P=m[6].real,F=[];if(this._calFilters.trip)for(const A of b){if(!A.start||!A.end)continue;const D=S(A.start),j=S(A.end);if(!D||!j||j<x||D>P)continue;const ce=Math.max(0,c(D,x)),me=Math.min(6,c(j,x));F.push({cat:"trip",title:A.title||"Trip",colStart:ce+1,span:me-ce+1,ref:A})}for(const A of v){const D=S(A.date);if(!D||D<x||D>P||!this._tagVisible(A))continue;const j=this._eventCalCat(A);j!=="event"&&this._calFilters[j]&&F.push({cat:j,title:A.title||(j==="celebrate"?"Celebration":"Event"),colStart:c(D,x)+1,span:1,ref:A})}if(this._calFilters.event)for(const A of this._calendarActivities()){const D=S(A.day);!D||D<x||D>P||F.push({cat:"event",title:A.title||"Activity",colStart:c(D,x)+1,span:1,ref:A,src:"activity"})}if(this._calFilters.holiday)for(const A of k){const D=S(A.date);D&&(D<x||D>P||F.push({cat:"holiday",title:A.title||"Holiday",colStart:c(D,x)+1,span:1,ref:A}))}const N=this._assignLanes(F),J=N.filter(A=>A.lane<=3),ne=N.filter(A=>A.lane>3),q=new Map;for(const A of ne)for(let D=A.colStart;D<A.colStart+A.span;D++)q.set(D,(q.get(D)??0)+1);return n`<div class="wkrow">
              <div class="dnums">
                ${m.map(A=>{const D=h(A.real,e),j=["dcell",A.muted?"muted":"",D?"today":""].filter(Boolean).join(" ");return n`<div class=${j}>
                    <span class="dn">${A.real.getDate()}</span>
                  </div>`})}
              </div>
              <div class="devents">
                ${J.map(A=>n`<div
                    class=${"ev cat-"+A.cat+(A.span>1?" span":"")}
                    style=${`grid-column:${A.colStart} / span ${A.span}; grid-row:${A.lane};`}
                    title=${A.title}
                    @click=${()=>this._openItem(A)}
                  >
                    ${A.span===1?n`<span class="ed"></span>`:""}${A.title}
                  </div>`)}
                ${Array.from(q.entries()).map(([A,D])=>n`<div
                    class="evmore"
                    style=${`grid-column:${A}; grid-row:3;`}
                  >+${D} more</div>`)}
              </div>
            </div>`})}
        </div>
      </div>
    `}_renderCalYear(e){var i;const t=((i=this._displayMonth)==null?void 0:i.getFullYear())??e.getFullYear();return n`
      <div class="cal-year">
        ${Array.from({length:12},(a,r)=>this._renderYearMonthCard(t,r,e))}
      </div>
    `}_renderYearMonthCard(e,t,i){const a=i.getFullYear()===e&&i.getMonth()===t,r=new Date(e,t,1).toLocaleString("en-GB",{month:"long"}),s=new Date(e,t,1).getDay(),o=new Date(e,t+1,0).getDate(),d=[];for(let l=0;l<s;l++)d.push(null);for(let l=1;l<=o;l++)d.push(l);for(;d.length<42;)d.push(null);return n`
      <button
        class=${"ym"+(a?" cur":"")}
        @click=${()=>{this._displayMonth=new Date(e,t,1),this._calendarView="month"}}
      >
        <div class="ym-name">${r}</div>
        <div class="ym-dow">
          <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
        </div>
        <div class="ym-days">
          ${d.map(l=>{if(l==null)return n`<div class="ym-d e">0</div>`;const p=new Date(e,t,l),h=i.getFullYear()===e&&i.getMonth()===t&&i.getDate()===l,c=h?null:this._dominantCategoryForDay(p);return n`<div class=${"ym-d"+(h?" today":"")}>
              ${l}
              ${c?n`<i class=${"yd cat-"+c}></i>`:""}
            </div>`})}
        </div>
      </button>
    `}_renderCalendarsSection(){const e=new Date,t=this._calendarView??"week";return n`
      <section class="cal-section">
        <glass-panel padding="none" variant="strong" stretch>
          <div class="cal-ws">
            ${this._renderCalToolbar(t,e)}
            <div class="cal-ws-divider"></div>
            <div class="cal-ws-body">
              <aside class="cal-side">
                ${this._renderCalMini(e)}
                ${this._renderCalFilters()}
              </aside>
              <div class="cal-main">
                ${t==="week"?this._renderCalWeek(e):""}
                ${t==="month"?this._renderCalMonth(e):""}
                ${t==="year"?this._renderCalYear(e):""}
              </div>
            </div>
          </div>
        </glass-panel>
      </section>
    `}_renderCelebrationsSection(){const e=this._filteredEvents(),t=this._liveImmediate().concat(this._liveExtended());return n`
        <section>
          <div class="section-head">
            <h2>Celebrations</h2>
            <button class="link" @click=${()=>this._openCreateEvent()}>+ Add event</button>
          </div>
          ${(()=>{const i=e.filter(a=>this._isCelebrationEvent(a)&&this._tagVisible(a)).sort((a,r)=>String(a.date).localeCompare(String(r.date)));return n`
              <glass-panel padding="md" variant="strong">
                ${i.length===0?n`<div class="cel-empty">No celebrations yet.</div>`:i.map(a=>n`<event-row
                        .event=${a}
                        .members=${t}
                        @edit-event=${r=>this._openEditEvent(r.detail)}
                      ></event-row>`)}
              </glass-panel>
            `})()}
        </section>
    `}_renderTodayTab(){const e=this._childData(),t=n`<div class="scope shared">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5M15 17c2 0 5 1 5 3" stroke-linecap="round"/></svg>
      Your household
    </div>`,i=this._comingUp(),a=n`
      <glass-panel padding="md" variant="strong" stretch class="fb-bottom-card">
        <div class="cal-head"><h3>Upcoming Activities</h3>
          <button class="link" @click=${()=>this._activeTab="activities"}>All activities</button></div>
        ${i.length===0?n`<div class="ring-note" style="padding:8px 4px;">Nothing on the calendar yet — plan something from the Activities tab.</div>`:i.map(b=>n`<div class="ms-row">
                ${this._gicoFor(b)}
                <div class="t">${b.title}${b.sub?n`<small>${b.sub}</small>`:""}</div>
                <span class="ms-stat up">${b.chip}</span>
              </div>`)}
      </glass-panel>`;if(!e.hasPP||!e.child)return n`
        ${this._renderTodayHeader(t)}
        <section>${a}</section>
        ${this._renderCelebrationsSection()}
      `;const r=e.milestones,s=r.filter(b=>b.status==="achieved"),o=r.length?Math.round(s.length/r.length*100):0,d=(e.insights||[]).slice(0,2),l=e.child.themeColorHex,p="--wm:url('/portal/assets/playgroundv2.jpg');"+(l?`--theme:${l};`:""),h=n`
      <div class="home-child-card" style="${p}">
        <span class="child-photo">
          <member-chip
            .name=${e.child.name}
            .photo=${e.child.profilePhotoURL??""}
            .hue=${150}
            size="72"
          ></member-chip>
        </span>
        <div class="child-meta">
          <h2>${e.child.name}</h2>
          <div class="sub">${this._ageLong(e.child.dateOfBirth)}</div>
        </div>
        <div class="child-progress">
          <div class="big">${o}%</div>
          <div class="lbl">of tracked milestones</div>
        </div>
      </div>`,c=n`
      <glass-panel padding="md" variant="strong" stretch class="fb-bottom-card">
        <div class="cal-head"><h3>Growth insights</h3>
          <button class="link" @click=${()=>this._activeTab="children"}>More insights</button></div>
        ${d.length===0?n`<div class="ring-note" style="padding:8px 4px;">Pebble surfaces patterns here as more of ${e.child.name}'s milestones are logged.</div>`:n`<div class="fb-insights-list">
              ${d.map(b=>n`<insight-card
                  .type=${b.type}
                  .domain=${b.domain}
                  .title=${b.title}
                  .body=${b.body}
                ></insight-card>`)}
            </div>`}
      </glass-panel>`;return n`
      ${this._renderTodayHeader(t)}
      ${this._renderFamilyBrief(e)}

      <section class="today-grid">
        <div class="today-col">
          ${this._renderNextTripCard()}
          ${a}
        </div>
        <div class="today-col">
          ${h}
          ${c}
        </div>
      </section>
    `}_renderActivitiesTab(){var i,a;const e=this._liveImmediate().concat(this._liveExtended()),t=n`<div class="scope shared">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5M15 17c2 0 5 1 5 3" stroke-linecap="round"/></svg>
      Shared with connections
    </div>`;return n`
      ${this._renderTabHeader("Activities",((i=this.family)==null?void 0:i.name)??"Your family",t)}
      ${this._renderComingUpSection()}
      <trip-planner
        ?open=${this._plannerOpen}
        .trip=${this._plannerTrip}
        .activities=${this.activities??[]}
        .members=${e}
        .currentUid=${((a=this.user)==null?void 0:a.uid)??""}
        @cancel=${()=>{this._plannerOpen=!1,this._plannerTrip=null}}
        @edit-trip=${r=>{var o;const s=((o=r.detail)==null?void 0:o.trip)??this._plannerTrip;this._plannerOpen=!1,this._plannerTrip=null,s&&this._openEdit(s)}}
      ></trip-planner>
      <weekend-planner
        ?open=${this._weekendOpen}
        @cancel=${()=>this._weekendOpen=!1}
      ></weekend-planner>
      ${this._renderCalendarsSection()}
      ${this._renderCelebrationsSection()}
    `}_renderChildAccessSection(){var s,o;if(this.preview||!this.ppIsMember)return"";const e=this.incomingChildRequests??[],t=Array.isArray((s=this.ppFamily)==null?void 0:s.childViewers)?this.ppFamily.childViewers:[];if(e.length===0&&t.length===0)return"";const i=((o=this.ppFamily)==null?void 0:o.memberProfiles)??{},a=(d,l)=>{var p;return((p=i[d])==null?void 0:p.displayName)??l??`${String(d).charAt(0).toUpperCase()}${String(d).slice(1)}`},r=n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6" stroke-linecap="round"/></svg>`;return n`
      <section>
        <div class="section-head">
          <h2>Child-view access</h2>
          <span class="note" style="margin:0;"
            >Read-only — milestones &amp; insights, never Pebble or
            editing</span
          >
        </div>
        <glass-panel padding="md" variant="strong">
          ${e.length===0?"":e.map(d=>n`<div class="set-row">
                  <span class="si" style="color:var(--ink-terracotta);">${r}</span>
                  <div class="sl">
                    <b>${a(d.uid??d.id,d.displayName)}</b>
                    <span>Wants read-only access to the Children view</span>
                  </div>
                  <span style="display:inline-flex;gap:8px;">
                    <button
                      class="link"
                      style="color:var(--ink-teal);border-color:rgba(61,155,143,.4);"
                      @click=${()=>this._approveChildAccess(d.uid??d.id)}
                    >
                      Approve
                    </button>
                    <button
                      class="link"
                      @click=${()=>this._declineChildAccess(d.uid??d.id)}
                    >
                      Decline
                    </button>
                  </span>
                </div>`)}
          ${t.map(d=>n`<div class="set-row">
              <span class="si" style="color:var(--ink-teal);">${r}</span>
              <div class="sl">
                <b>${a(d)}</b>
                <span>Read-only Children access</span>
              </div>
              <button
                class="link"
                @click=${()=>this._revokeChildViewer(d)}
              >
                Revoke
              </button>
            </div>`)}
          ${t.length===0?"":n`<div class="ring-note">
                Granted viewers see milestones &amp; growth insights
                only — never Pebble, the pediatrician summary, or any
                editing. Revoke any time.
              </div>`}
        </glass-panel>
      </section>
    `}_setTheme(e){this._themeLight=e;try{document.documentElement.classList.toggle("theme-light",e),localStorage.setItem("portalTheme",e?"light":"dark");const t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content",e?"#f2ede3":"#1f5c54")}catch{}}_renderCairnTab(){var t,i,a;if(this._wpkOpen)return this._renderWpkDetail();(t=this.user)==null||t.displayName,(i=this.user)==null||i.email;const e=((a=this.family)==null?void 0:a.name)??"Your family";return n`
      ${this._renderTabHeader("Settings","Who's in your circle, and what each level can see")}

      <section>
        <div class="grid-2">
          <div>
            <div class="section-head">
              <h2>Your Circles</h2>
              <button class="link" @click=${()=>this._membersOpen=!0}>
                Manage members
              </button>
            </div>
            <glass-panel padding="md" variant="strong">
              <family-circle
                .immediate=${this._liveImmediate()}
                .extended=${this._liveExtended()}
              ></family-circle>
            </glass-panel>
          </div>
          <div>
            <div class="section-head"><h2>What each level sees</h2></div>
            <glass-panel padding="md" variant="strong">
              <div class="set-row">
                <span class="si" style="color:var(--ink-blue);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6" stroke-linecap="round"/></svg>
                </span>
                <div class="sl"><b>You</b><span>Your account, your perspective.</span></div>
                <span class="set-pill" style="color:var(--ink-blue);border-color:var(--ink-blue);">You</span>
              </div>
              <div class="set-row">
                <span class="si" style="color:var(--ink-green);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="7" rx="3" ry="1.4"/><ellipse cx="12" cy="12" rx="6" ry="2.4"/><ellipse cx="12" cy="17" rx="8" ry="3"/></svg>
                </span>
                <div class="sl"><b>Your family</b><span>Your co-parent and your children.</span></div>
                <span class="set-pill" style="color:var(--ink-green);border-color:var(--ink-green);">Full access</span>
              </div>
              <div class="set-row">
                <span class="si" style="color:var(--ink-terracotta);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/></svg>
                </span>
                <div class="sl"><b>Your connections</b><span>Everyone who joined by invitation.</span></div>
                <span class="set-pill" style="color:var(--ink-terracotta);border-color:var(--ink-terracotta);">Activities only</span>
              </div>
            </glass-panel>
          </div>
        </div>
      </section>

      ${this._renderChildAccessSection()}

      <section>
        <div class="section-head"><h2>Account</h2></div>
        <glass-panel padding="md" variant="strong">
          <div class="set-row">
            <span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6"/></svg></span>
            <div class="sl"><b>Profile Settings</b><span>Your photo, display name, sign out.</span></div>
            <button class="link" @click=${()=>this._profileOpen=!0}>Edit</button>
          </div>
          <div class="set-row">
            <span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="3"/></svg></span>
            <div class="sl"><b>${e}</b><span>Family name &amp; invite codes</span></div>
            <button class="link" @click=${()=>this._membersOpen=!0}>Manage</button>
          </div>
          <div class="set-row">
            <span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8"/></svg></span>
            <div class="sl"><b>Appearance</b><span>Applies across the Portal.</span></div>
            <div class="theme-seg" role="group" aria-label="Theme">
              <button
                class=${this._themeLight?"on":""}
                @click=${()=>this._setTheme(!0)}
              >
                Light
              </button>
              <button
                class=${this._themeLight?"":"on"}
                @click=${()=>this._setTheme(!1)}
              >
                Dark
              </button>
            </div>
          </div>
          <!-- Portal v4 audit: the Activity-notifications + Pebble-
               milestone-alerts toggles were removed — they were dead
               decoration (no web notification backend; FCM push is
               iOS-only). Premium is kept as an informational line
               only: the web can't verify StoreKit subscription
               state, so the misleading green "Active" badge was
               dropped (manage the subscription in the iOS app). -->
          <div class="set-row">
            <span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.5 5 5.5.8-4 4 1 5.5L12 15l-5 2.3 1-5.5-4-4 5.5-.8z"/></svg></span>
            <div class="sl"><b>PebblePath Premium</b><span>Unlimited Pebble, summaries, and insights.</span></div>
            <span class="set-meta">Managed in the app</span>
          </div>
          ${this.ppIsMember?n`<div class="set-row">
                <span class="si">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 3l9 5-9 5-9-5 9-5z"></path>
                    <path d="M3 13l9 5 9-5"></path>
                  </svg>
                </span>
                <div class="sl">
                  <b>What Pebble knows</b>
                  <span>The memory Pebble keeps about your family.</span>
                </div>
                <button class="link" @click=${()=>{this._wpkOpen=!0}}>View</button>
              </div>`:""}
          ${this._renderJoinAnotherFamilyRow()}
        </glass-panel>
      </section>
    `}_renderJoinAnotherFamilyRow(){const e=this._joinAnotherCode??"",t=e.length===6&&!this._joinAnotherBusy;return n`
      <div class="set-row set-row-join-another">
        <span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/><circle cx="12" cy="12" r="9"/></svg></span>
        <div class="sl">
          <b>Join another family</b>
          <span>Paste a 6-character connect code.</span>
        </div>
        <!-- 2026-05-23 — input + button moved to the row's right
             column to align with the rest of the settings rows
             (pill/badge slot). The join-cluster takes the right side
             on desktop; wraps to a second line below the .sl on
             narrow viewports via the @media rule on .set-row-join-
             another. -->
        <div class="join-cluster">
          <input
            class="join-code"
            type="text"
            inputmode="latin"
            autocapitalize="characters"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            maxlength="6"
            placeholder="ABC123"
            .value=${e}
            ?disabled=${this._joinAnotherBusy}
            @input=${i=>this._onJoinAnotherCodeInput(i)}
            @keydown=${i=>{i.key==="Enter"&&t&&this._attemptJoinAnotherFamily()}}
            aria-label="Connect code"
          />
          <button
            class="join-go"
            ?disabled=${!t}
            @click=${()=>this._attemptJoinAnotherFamily()}
          >
            ${this._joinAnotherBusy?"Joining…":"Join"}
          </button>
        </div>
        ${this._joinAnotherError?n`<div class="join-error join-feedback">${this._joinAnotherError}</div>`:""}
        ${this._joinAnotherSuccessName?n`<div class="join-success join-feedback">
              ✓ Joined ${this._joinAnotherSuccessName}.
            </div>`:""}
      </div>
    `}_renderChildGate(){const e=this.myChildAccessRequest,t=this.children??[],i=t.length>0,a=t.length===1?`${t[0].name}'s`:"the children's",r=n`<button
      class="empty-cta ghost"
      @click=${()=>this._activeTab="activities"}
    >
      Back to Activities
    </button>`;return i?(e==null?void 0:e.status)==="pending"?n`
        <div class="empty-title">Request sent</div>
        <div class="empty-sub">
          A parent on this family has been asked to share read-only
          access to ${a} milestones &amp; growth insights with you.
          You'll see it here as soon as they approve.
        </div>
        <div class="empty-actions">
          <button
            class="empty-cta ghost"
            @click=${()=>this._withdrawChildAccess()}
          >
            Withdraw request
          </button>
          ${r}
        </div>
      `:(e==null?void 0:e.status)==="approved"?n`
        <div class="empty-title">Access approved</div>
        <div class="empty-sub">
          A parent shared read-only access with you — loading ${a}
          view…
        </div>
        <div class="empty-actions">${r}</div>
      `:n`
      <div class="empty-title">This area is private to parents</div>
      <div class="empty-sub">
        Children's milestones &amp; growth insights are shared only
        with the parents by default. You can ask them to share a
        <strong>read-only</strong> view with you — they'll approve or
        decline, and you'll never get Pebble or editing access.
        ${(e==null?void 0:e.status)==="declined"?n`<br /><span style="color:var(--text-tertiary);"
              >A parent declined a previous request.</span
            >`:""}
      </div>
      <div class="empty-actions">
        <button
          class="empty-cta primary"
          @click=${()=>this._requestChildAccess()}
        >
          Request read-only access
        </button>
        ${r}
      </div>
      ${this._renderParentClaimSection(t)}
    `:n`
        <div class="empty-title">This area is private to parents</div>
        <div class="empty-sub">
          Children's milestones, growth insights and Pebble are visible
          only to parents on a PebblePath household — never to the
          extended Cairn. If you're a parent here and don't see your
          child, make sure you're signed in with your PebblePath
          account.
        </div>
        <div class="empty-actions">${r}</div>
      `}_renderParentClaimSection(e){return!Array.isArray(e)||e.length===0?"":this._claimedChildName?n`
        <div class="claim-section">
          <div class="claim-sent">
            ✓ Claim sent for ${this._claimedChildName} — an existing
            parent will confirm you.
          </div>
        </div>
      `:n`
      <div class="claim-section">
        <div class="claim-title">
          Are you a parent or caregiver of one of them?
        </div>
        <div class="claim-sub">
          Claim the link — an existing parent confirms it. You'll get
          the full child experience once approved.
        </div>
        <div class="claim-list">
          ${e.map(t=>n`
              <button
                class="claim-btn"
                ?disabled=${this._claimingChildId!==null}
                @click=${()=>this._claimChildAsParent(t)}
              >
                <span>I'm a parent or caregiver of ${t.name??"this child"}</span>
                <span class="claim-chev" aria-hidden="true">›</span>
              </button>
            `)}
        </div>
      </div>
    `}_renderChildrenTab(){const e=this._childData(),t=n`<span class="scope-chip">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" stroke-linecap="round" /></svg>
      Private to parents
    </span>`;if(e.hasPP){const i=e.readonly?"Milestones & growth insights — read-only, shared by the parents":"Milestones and insights",a=e.readonly?n`<span class="scope-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3.2"/></svg>
            Shared with you · read-only
          </span>`:t;return n`
        ${this._renderTabHeader("Children",i,a)}
        <section>
          <child-overview
            .child=${e.child}
            .children=${e.children}
            .milestones=${e.milestones}
            .insights=${e.insights}
            .dailyCard=${e.dailyCard}
            ?readonly=${e.readonly}
            @select-child=${this._onSelectChild}
            @ask-pebble=${this._onAskPebble}
          ></child-overview>
        </section>
      `}return n`
      ${this._renderTabHeader("Children","Milestones and insights",t)}
      <section>
        <glass-panel padding="lg" variant="strong">
          <div class="empty-hero">
            <div class="empty-icon" aria-hidden="true">
              <svg viewBox="0 0 28 28" width="44" height="44">
                <circle cx="14" cy="9" r="5" fill="none" stroke="#3d9b8f" stroke-width="1.6" />
                <path d="M4 25c0-5.5 4.5-9 10-9s10 3.5 10 9" fill="none" stroke="#c67b5c" stroke-width="1.6" stroke-linecap="round" />
              </svg>
            </div>
            ${this._renderChildGate()}
          </div>
        </glass-panel>
      </section>
    `}_renderPebbleTab(){var t,i;const e=this._childData();return this._pebbleAvailable&&e.child?n`
        <child-pebble
          .child=${e.child}
          .messages=${e.pebbleMessages}
          .sessions=${e.pebbleSessions}
          .prefill=${this._pebblePrefill}
          .memberProfiles=${((t=this.family)==null?void 0:t.memberProfiles)??{}}
          .myUid=${((i=this.user)==null?void 0:i.uid)??""}
          @smart-upload=${()=>this._schoolImportOpen=!0}
        ></child-pebble>
      `:n`
      ${this._renderTabHeader("Pebble","Personalised guidance for parents")}
      <section>
        <glass-panel padding="lg" variant="strong">
          <div class="empty-hero">
            <div class="empty-icon" aria-hidden="true">
              <pebble-icon size="42" color="#3d9b8f"></pebble-icon>
            </div>
            <div class="empty-title">Pebble is for parents</div>
            <div class="empty-sub">
              Pebble is the child-development advisor for parents on
              this household. Ask a parent to add you to a child if you
              need access.
            </div>
          </div>
        </glass-panel>
      </section>
    `}_renderPebbleFab(){var i,a;if(this._activeTab==="pebble"||!this._pebbleAvailable)return"";const e=this._childData();if(!e.child)return"";const t=n`<pebble-icon></pebble-icon>`;return n`
      <button
        class="pebble-fab"
        aria-label="Ask Pebble"
        title="Ask Pebble"
        @click=${()=>this._pebbleFabOpen=!this._pebbleFabOpen}
      >
        ${t}<span class="lbl">Ask Pebble</span>
      </button>
      ${this._pebbleFabOpen?n`<div
            class="pebble-fab-panel"
            role="dialog"
            aria-label="Pebble"
          >
            <div class="pebble-fab-head">
              <span class="ttl">${t} Pebble</span>
              <button
                class="x"
                aria-label="Close"
                @click=${()=>this._pebbleFabOpen=!1}
              >
                ×
              </button>
            </div>
            <div class="pebble-fab-body">
              <child-pebble
                compact
                .child=${e.child}
                .messages=${e.pebbleMessages}
                .sessions=${e.pebbleSessions}
                .prefill=${this._pebblePrefill}
                .memberProfiles=${((i=this.family)==null?void 0:i.memberProfiles)??{}}
                .myUid=${((a=this.user)==null?void 0:a.uid)??""}
                @smart-upload=${()=>this._schoolImportOpen=!0}
              ></child-pebble>
            </div>
          </div>`:""}
    `}render(){var a,r,s,o,d,l,p,h;const e=this._liveImmediate(),t=this._liveExtended(),i=e.concat(t);return n`
      <div class="topbar">
        <div class="brand">
          <img
            class="brand-icon"
            src=${"/portal/assets/cairn-icon.png"}
            srcset=${"/portal/assets/cairn-icon.png 1x, /portal/assets/cairn-icon-2x.png 2x"}
            alt="Portal"
            width="38"
            height="38"
          />
          <!-- 2026-05-16 — wordmark text removed from the logged-in
               topbar per Thomas; the stone icon stays as the brand mark. -->
        </div>
        ${this._renderTabBar()}
        <div class="who">
          <button
            class="activity-btn"
            @click=${()=>this._openCreate()}
            title="New activity"
          >
            <span aria-hidden="true">+</span>
            <span class="activity-btn-label">Activity</span>
          </button>
          <button
            class="avatar-tap"
            @click=${()=>this._activeTab="cairn"}
            title="${((a=this.user)==null?void 0:a.displayName)??"Profile"} — open Settings"
            aria-label="Open Settings"
          >
            <member-chip
              .name=${((r=this.user)==null?void 0:r.displayName)??"You"}
              .photo=${((s=this.user)==null?void 0:s.photoURL)??""}
              .hue=${198}
              size="36"
            ></member-chip>
          </button>
        </div>
      </div>

      ${this.preview?n`<div class="preview-banner">
            <strong>Preview mode</strong> — viewing the dashboard with placeholder
            data. <a href="?">Back to sign-in</a>.
          </div>`:""}

      <main class=${this._activeTab==="pebble"?"pebble-full":""}>
        ${this._renderActiveTab()}
        ${this._activeTab==="pebble"?"":n`<discover-pebblepath></discover-pebblepath>`}
      </main>

      ${this._renderBottomNav()}

      ${this._renderPebbleFab()}

      <trip-form
        ?open=${this._formOpen}
        .trip=${this._formTrip}
        .members=${e}
        .extendedMembers=${this._liveExtended()}
        .connectionMembers=${this._liveConnections()}
        .currentUid=${((o=this.user)==null?void 0:o.uid)??""}
        .familyId=${((d=this.family)==null?void 0:d.id)??""}
        .busy=${this._formBusy}
        .formMode=${this._formMode}
        .subGroups=${((l=this.family)==null?void 0:l.subGroups)??{}}
        @save=${this._onSaveTrip}
        @remove=${this._onDeleteTrip}
        @cancel=${()=>{this._formOpen=!1,this._formTrip=null}}
      ></trip-form>

      <activity-type-picker
        ?open=${this._typePickerOpen}
        @pick=${this._onTypePicked}
        @cancel=${()=>this._typePickerOpen=!1}
      ></activity-type-picker>

      <manage-members-modal
        ?open=${this._membersOpen}
        .family=${this.family}
        .immediate=${e}
        .extended=${t}
        .canRemove=${this.ppIsMember}
        @cancel=${()=>this._membersOpen=!1}
      ></manage-members-modal>

      <event-form
        ?open=${this._eventFormOpen}
        .event=${this._eventFormEvent}
        .members=${i}
        .familyId=${((p=this.family)==null?void 0:p.id)??""}
        .busy=${this._eventFormBusy}
        @save=${this._onSaveEvent}
        @remove=${this._onDeleteEvent}
        @cancel=${()=>{this._eventFormOpen=!1,this._eventFormEvent=null}}
      ></event-form>

      <activity-form
        ?open=${this._activityFormOpen}
        .activity=${this._activityFormActivity}
        .members=${i}
        .children=${this.ppChildren??[]}
        .familyId=${((h=this.family)==null?void 0:h.id)??""}
        .busy=${this._activityFormBusy}
        @save=${this._onSaveActivity}
        @remove=${this._onDeleteActivity}
        @cancel=${()=>{this._activityFormOpen=!1,this._activityFormActivity=null}}
      ></activity-form>

      <all-trips-modal
        ?open=${this._allTripsOpen}
        .trips=${this._circleTrips()}
        .members=${i}
        @open-planner=${c=>{this._allTripsOpen=!1,this._openPlanner(c.detail)}}
        @edit-trip=${c=>{this._allTripsOpen=!1,this._openEdit(c.detail)}}
        @cancel=${()=>this._allTripsOpen=!1}
      ></all-trips-modal>

      <import-calendar-modal
        ?open=${this._importOpen}
        @cancel=${()=>this._importOpen=!1}
        @open-trip-planner=${c=>this._onOpenTripPlannerFromImport(c)}
      ></import-calendar-modal>

      <school-import-modal
        ?open=${this._schoolImportOpen}
        .knownTags=${this._eventTags()}
        @cancel=${()=>this._schoolImportOpen=!1}
        @added=${()=>this._schoolImportOpen=!1}
      ></school-import-modal>

      <profile-sheet
        ?open=${this._profileOpen}
        .user=${this.user}
        .pebbleUser=${this.pebbleUser}
        @cancel=${()=>this._profileOpen=!1}
      ></profile-sheet>
    `}_renderFamilyBrief(e){const t=e.familyDailyCard??e.dailyCard;if(!t)return this.preview||this.updateComplete.then(()=>this._ensureBriefForToday()),this._refreshingFamilyBrief?this._renderBriefPreparing():"";const i=Array.isArray(t.bullets)?t.bullets:[],a=this._refreshingFamilyBrief?"spinning":"",r=this._briefFreshLabel(t),d=this._themeLight?"/portal/assets/pebblepath-sandbar-empty.jpg":"/portal/assets/pebblepath-stillwater-empty.jpg";return n`
      <section class="family-brief ${this._themeLight?"":"fb-dark"}">
        <div class="fb-card">
          <div class="fb-bg" aria-hidden="true">
            <div class="fb-bg-photo" style="background-image:url('${d}');"></div>
            <div class="fb-bg-frost"></div>
            <div class="fb-bg-wash"></div>
          </div>
          <div class="fb-content">
            <div class="fb-head">
              <div class="fb-tag">
                <span>FAMILY BRIEF</span>
              </div>
              <div class="fb-fresh">
                ${r?n`<span class="fb-fresh-time">${r}</span>`:""}
                <button
                  class="fb-refresh ${a}"
                  title="Refresh brief"
                  aria-label="Refresh family brief"
                  ?disabled=${this._refreshingFamilyBrief}
                  @click=${()=>this._onRefreshFamilyBrief()}
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none"
                    stroke="currentColor" stroke-width="2.2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12a9 9 0 1 1-2.64-6.36"></path>
                    <path d="M21 4v5h-5"></path>
                  </svg>
                </button>
              </div>
            </div>
            <h3 class="fb-title">${t.title}</h3>
            ${i.length?n`<ul class="fb-bullets">
                  ${i.map(l=>this._renderBriefBullet(l))}
                </ul>`:n`<p class="fb-body">${t.body}</p>`}
            ${this._renderBriefCoordination()}
          </div>
        </div>
      </section>
    `}_coordRoles(){const e=t=>{var i;return((i=t==null?void 0:t.toMillis)==null?void 0:i.call(t))??0};return(this.pebbleRhythms??[]).filter(t=>t.iconKey).sort((t,i)=>e(t.createdAt)-e(i.createdAt))}_roleActiveOverride(e){if(!e)return null;const t=Date.now(),i=a=>{var r;return((r=a==null?void 0:a.toMillis)==null?void 0:r.call(a))??0};return(this.pebbleLiveContext??[]).find(a=>a.kind==="handoff"&&a.relatedRhythmId===e&&!a.dismissedAt&&i(a.validFrom)<=t&&(a.validTo?i(a.validTo)>=t:!0))??null}_roleOwnerTodayUids(e){const t=this._roleActiveOverride(e.id),i=t?t.ownerUids:e.usualOwnerUids;return Array.isArray(i)?i:[]}_roleIsOverriddenToday(e){return!!this._roleActiveOverride(e.id)}_memberName(e){var t,i,a;return((a=(i=(t=this.ppFamily)==null?void 0:t.memberProfiles)==null?void 0:i[e])==null?void 0:a.displayName)??""}_memberNames(e){return e.map(t=>this._memberName(t)).filter(Boolean).join(" & ")}_hueForUid(e){let t=0;for(const i of String(e))t=(t*31+i.charCodeAt(0))%360;return t}_openRolesInWpk(){this._activeTab="cairn",this._wpkOpen=!0}_renderBriefCoordination(){if(!this.ppIsMember)return"";const e=this._briefCoordLine();return n`
      <div class="fb-coord">
        <div class="fb-coord-row">
          ${e?n`<div class="fb-coord-faces">
                  ${e.faceUids.map(t=>{var i,a,r;return n`<member-chip
                      .name=${this._memberName(t)}
                      .photo=${((r=(a=(i=this.ppFamily)==null?void 0:i.memberProfiles)==null?void 0:a[t])==null?void 0:r.profilePhotoURL)??""}
                      .hue=${this._hueForUid(t)}
                      size="26"
                    ></member-chip>`})}
                </div>
                <div class="fb-coord-text">
                  <span class="fb-coord-lead">${e.lead}</span>${e.rest}
                </div>`:""}
          <button class="fb-roles-link" @click=${()=>this._openRolesInWpk()}>
            Daily roles &amp; routines
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
              stroke="currentColor" stroke-width="2.4"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 6l6 6-6 6"></path>
            </svg>
          </button>
        </div>
      </div>
    `}_briefCoordLine(){var l;const e=this._coordRoles().filter(p=>this._roleIsOverriddenToday(p));if(!e.length)return null;if(e.length>1)return{faceUids:[...new Set(e.flatMap(h=>this._roleOwnerTodayUids(h)))].slice(0,2),lead:`Tonight: ${e.length} role swaps.`,rest:" Tap Daily roles & routines for who's on what."};const t=e[0],i=this._roleOwnerTodayUids(t),a=Array.isArray(t.usualOwnerUids)?t.usualOwnerUids:[],r=[...new Set([...a,...i])].slice(0,2),s=i.length===1&&i[0]===((l=this.user)==null?void 0:l.uid)?"you":this._memberNames(i)||"someone else",o=this._memberNames(a),d=(t.title??"this").toLowerCase();return{faceUids:r,lead:`Tonight: ${d} is on ${s}.`,rest:o?` Usually ${o}.`:""}}_wpkRoleRow(e){const t=this._roleOwnerTodayUids(e),i=Array.isArray(e.usualOwnerUids)?e.usualOwnerUids:[],a=this._roleIsOverriddenToday(e),r=this._memberNames(t),s=this._memberNames(i),o=a?`Today: ${r||"someone else"} · usually ${s||"—"}`:s?`Usually ${s}`:"Not set yet",d=(t.length?t:i).slice(0,2);return n`<div class="wpk-row wpk-role-row">
      <span class="wpk-role-faces">
        ${d.length?d.map(l=>{var p,h,c;return n`<member-chip
                .name=${this._memberName(l)}
                .photo=${((c=(h=(p=this.ppFamily)==null?void 0:p.memberProfiles)==null?void 0:h[l])==null?void 0:c.profilePhotoURL)??""}
                .hue=${this._hueForUid(l)}
                size="30"
              ></member-chip>`}):n`<span class="wpk-role-unset">?</span>`}
      </span>
      <div class="wpk-body">
        <div class="wpk-primary">${e.title}</div>
        <div class="wpk-secondary">${o}</div>
      </div>
      ${a?n`<span class="wpk-role-today">Today</span>`:""}
    </div>`}_briefFreshLabel(e){var i,a;const t=((a=(i=e==null?void 0:e.generatedAt)==null?void 0:i.toMillis)==null?void 0:a.call(i))??(e!=null&&e.generatedAt?new Date(e.generatedAt).getTime():0);return t?new Date(t).toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"}).toLowerCase():""}_splitBulletLead(e){const t=[". ",": "," — "," – "];for(const i of t){const a=e.indexOf(i);if(a>=0&&a<=32){const r=i===". "?e.slice(0,a+1):e.slice(0,a),s=e.slice(a+i.length);return s.trim()?{lead:r,rest:s}:{lead:null}}}return{lead:null}}_renderBriefBullet(e){const t=e&&typeof e.kind=="string"?e.kind:"other",i=e&&typeof e.text=="string"?e.text:"",a=this._briefTint(t),r=this._pebblePath(t),{lead:s,rest:o}=this._splitBulletLead(i);return n`<li class="fb-bullet">
      <svg
        class="fb-peb-marker"
        viewBox=${r.vb}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d=${r.d} fill=${a}></path>
      </svg>
      <span class="fb-text">
        ${s?n`<span class="fb-lead">${s}</span> ${o}`:i}
      </span>
    </li>`}_briefTint(e){switch(e){case"plan":return"#3d9b8f";case"weather":return"#d4a843";case"packing":return"#8b7bb5";case"coordinate":return"#6b9ac4";case"action":return"#c67b5c";case"trip":return"#2d7a70";case"rhythm":return"#c98a8a";case"memory":return"#1f5c54";default:return"#8a8f98"}}_pebblePath(e){return{a:{vb:"0 0 100 70",d:"M 8 38 C 6 18, 26 6, 48 8 C 72 10, 94 18, 94 38 C 94 58, 72 66, 48 64 C 22 62, 10 58, 8 38 Z"},b:{vb:"0 0 80 90",d:"M 38 6 C 56 8, 70 24, 72 46 C 74 70, 58 84, 38 84 C 16 84, 6 66, 8 44 C 10 22, 22 4, 38 6 Z"},c:{vb:"0 0 90 80",d:"M 14 26 C 18 10, 38 4, 56 8 C 78 14, 86 32, 82 50 C 76 70, 54 78, 32 72 C 12 66, 10 42, 14 26 Z"},d:{vb:"0 0 70 60",d:"M 8 30 C 8 14, 22 6, 38 8 C 54 10, 64 22, 62 36 C 60 52, 44 56, 28 54 C 14 52, 8 44, 8 30 Z"},e:{vb:"0 0 110 75",d:"M 8 38 C 6 18, 30 8, 56 10 C 84 12, 104 22, 104 40 C 102 58, 80 68, 52 66 C 24 64, 10 56, 8 38 Z"},f:{vb:"0 0 95 75",d:"M 14 24 C 18 10, 40 6, 56 12 C 70 18, 80 18, 86 30 C 90 44, 80 56, 64 60 C 48 64, 28 60, 18 50 C 10 42, 10 32, 14 24 Z"},g:{vb:"0 0 80 80",d:"M 14 20 C 20 10, 36 6, 52 10 C 68 16, 76 30, 72 48 C 66 64, 50 72, 32 66 C 16 60, 8 44, 10 30 C 12 24, 12 22, 14 20 Z"}}[{plan:"e",weather:"a",packing:"c",coordinate:"g",action:"d",trip:"f",rhythm:"b",memory:"c",other:"a"}[e]??"a"]}_briefGlyph(e){const t={width:14,height:14,viewBox:"0 0 24 24"};switch(e){case"plan":return n`<svg viewBox=${t.viewBox} width=${t.width} height=${t.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3v5M12 16v5M3 12h5M16 12h5"></path>
          <path d="M6.5 6.5l2.5 2.5M15 15l2.5 2.5M17.5 6.5L15 9M9 15l-2.5 2.5"></path>
        </svg>`;case"weather":return n`<svg viewBox=${t.viewBox} width=${t.width} height=${t.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19"></path>
        </svg>`;case"packing":return n`<svg viewBox=${t.viewBox} width=${t.width} height=${t.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="8" width="16" height="12" rx="2"></rect>
          <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
        </svg>`;case"coordinate":return n`<svg viewBox=${t.viewBox} width=${t.width} height=${t.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="8" r="3"></circle>
          <path d="M3.5 20a5.5 5.5 0 0 1 11 0"></path>
          <circle cx="17" cy="9" r="2.4"></circle>
          <path d="M16 14.2a4.5 4.5 0 0 1 4.5 4.8"></path>
        </svg>`;case"action":return n`<svg viewBox=${t.viewBox} width=${t.width} height=${t.height}
          fill="none" stroke="currentColor" stroke-width="2.4"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7"></path>
        </svg>`;case"trip":return n`<svg viewBox=${t.viewBox} width=${t.width} height=${t.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 4L3 11l6 2.5L21 4z"></path>
          <path d="M9 13.5V20l3.5-3.8"></path>
        </svg>`;case"rhythm":return n`<svg viewBox=${t.viewBox} width=${t.width} height=${t.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="8"></circle>
          <path d="M12 8v4.5l3 1.8"></path>
        </svg>`;case"memory":return n`<svg viewBox=${t.viewBox} width=${t.width} height=${t.height}
          fill="currentColor" stroke="none">
          <path d="M12 20.5S4 15.5 4 9.8A3.8 3.8 0 0 1 12 7.4 3.8 3.8 0 0 1 20 9.8c0 5.7-8 10.7-8 10.7z"></path>
        </svg>`;default:return n`<svg viewBox=${t.viewBox} width=${t.width} height=${t.height}
          fill="currentColor" stroke="none">
          <circle cx="12" cy="12" r="4"></circle>
        </svg>`}}async _onRefreshFamilyBrief(){if(!(this.preview||this._refreshingFamilyBrief)){this._refreshingFamilyBrief=!0;try{await f.refreshFamilyBrief()}catch(e){console.warn("[Portal] refreshFamilyBrief failed:",(e==null?void 0:e.message)??e)}finally{this._refreshingFamilyBrief=!1}}}_ensureBriefForToday(){this.preview||this._autoBriefAttempted||this._refreshingFamilyBrief||(this._autoBriefAttempted=!0,setTimeout(async()=>{const e=this._childData();if(!(e.familyDailyCard||e.dailyCard)){this._refreshingFamilyBrief=!0;try{await f.refreshFamilyBrief()}catch(t){console.warn("[Portal] auto-generate brief failed:",(t==null?void 0:t.message)??t)}finally{this._refreshingFamilyBrief=!1}}},1500))}_renderBriefPreparing(){return n`
      <section class="family-brief">
        <div class="fb-prep-card">
          <span class="fb-tag-lite">FAMILY BRIEF</span>
          <span class="fb-prep-text">Pebble is preparing today's brief…</span>
        </div>
      </section>
    `}_nextUpcomingTrip(){const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate());let i=null,a=1/0;for(const r of this._circleTrips()){const s=S(r.start);!s||(S(r.end)??s)<t||s.getTime()<a&&(i=r,a=s.getTime())}return i}_fmtTripRange(e){const t=S(e.start);if(!t)return"";const i=S(e.end)??t,a={month:"short",day:"numeric"},r=t.toLocaleDateString(void 0,a);if(i.getTime()===t.getTime())return r;const o=t.getMonth()===i.getMonth()&&t.getFullYear()===i.getFullYear()?String(i.getDate()):i.toLocaleDateString(void 0,a);return`${r} – ${o}`}_renderNextTripCard(){const e=()=>{this._activeTab="activities"},t=this._nextUpcomingTrip();if(!t)return n`<button
        class="next-trip empty"
        @click=${e}
        aria-label="Plan a trip in Activities"
      >
        <div class="nt-empty">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
            stroke="currentColor" stroke-width="1.8"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 4L3 11l6 2.5L21 4z"></path>
            <path d="M9 13.5V20l3.5-3.8"></path>
          </svg>
          <div class="nt-empty-title">No upcoming trips</div>
          <div class="nt-empty-sub">Plan one in Activities →</div>
        </div>
      </button>`;const i=t.previewImage&&String(t.previewImage).trim()||t.coverImage,a=i?`background-image: url("${i}"); background-position: center center; background-size: cover;`:`background: ${$t(t)};`;return n`<button
      class="next-trip ${i?"has-image":""}"
      style=${a}
      @click=${e}
      aria-label="${t.title} — open in Activities"
    >
      <div class="nt-scrim"></div>
      <div class="nt-overlay">
        <div class="nt-eyebrow">Next trip</div>
        <div class="nt-title">${t.title}</div>
        <div class="nt-dates">
          ${this._fmtTripRange(t)}${t.location?` · ${t.location}`:""}
        </div>
      </div>
    </button>`}_renderWpkDetail(){const e=this.pebbleAnchors??[],t=(this.pebbleRhythms??[]).filter(s=>!s.iconKey),i=this._coordRoles(),a=this.pebblePatterns??[],r=this.pebbleLiveContext??[];return n`
      <button class="wpk-back" @click=${()=>{this._wpkOpen=!1}}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
          stroke="currentColor" stroke-width="2.2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 5l-7 7 7 7"></path>
        </svg>
        Settings
      </button>
      ${this._renderTabHeader("What Pebble knows","The memory Pebble keeps about your family")}
      <section class="wpk">
        <p class="wpk-intro">
          Pebble keeps a memory of your family in four layers. Edit anchors and
          rhythms in the PebblePath app; this is a read-only view on the web.
        </p>
        <div class="grid-2">
          ${this._wpkGroup({label:"Anchors",subtitle:"Rarely-changes facts: names, allergies, sizes, places.",empty:"No anchors yet. Add facts Pebble should always know in the app.",items:e,glyph:"anchor",row:s=>this._wpkRow({glyph:"anchor",primary:s.label,secondary:s.value,scope:s.scope,childId:s.childId})})}
          ${this._wpkGroup({label:"Daily roles & routines",subtitle:"Who usually does drop-off, bath, bedtime — set in the app.",empty:"No roles yet. Set who usually does each routine in the PebblePath app.",items:i,glyph:"rhythm",row:s=>this._wpkRoleRow(s)})}
          ${this._wpkGroup({label:"Rhythms",subtitle:"Routines that repeat: bedtime, school, weekly classes.",empty:"No rhythms yet. Add a routine Pebble should expect in the app.",items:t,glyph:"rhythm",row:s=>this._wpkRow({glyph:"rhythm",primary:s.title,secondary:this._wpkCadence(s),scope:s.scope,childId:s.childId})})}
          ${this._wpkGroup({label:"Patterns",subtitle:"What Pebble has noticed about your family over time.",empty:"Patterns appear as Pebble learns from how you use the app. Nothing yet.",items:a,glyph:"pattern",row:s=>this._wpkRow({glyph:"pattern",primary:s.statement,scope:s.scope,childId:s.childId,hint:s.confidence<.6?"Pebble is still learning this":""})})}
          ${this._wpkGroup({label:"Live context",subtitle:"This week's calendar, weather, handoffs, prep.",empty:"Calendar events, weather, and handoffs appear here. Nothing yet.",items:r,glyph:"live",row:s=>this._wpkRow({glyph:"live",primary:s.title,secondary:this._wpkRelDate(s.validFrom),scope:s.scope,childId:s.childId})})}
        </div>
        ${this._renderPackingTemplates()}
      </section>
    `}_renderPackingTemplates(){const e=this._packingTemplates??[],t=i=>(Array.isArray(i.groups)?i.groups:[]).reduce((a,r)=>a+(Array.isArray(r.items)?r.items.length:0),0);return n`
      <div class="wpk-packing">
        <div class="section-head"><h3>My packing lists</h3></div>
        <glass-panel padding="md" variant="strong">
          <div class="wpk-sub">
            Reusable lists Pebble draws from when you start a trip. Save one from
            any trip's Packing tab.
          </div>
          ${e.length===0?n`<div class="wpk-empty">
                No saved lists yet. Open a trip, build its packing list, then tap
                "Save this list for future trips".
              </div>`:n`<div class="wpk-rows">
                ${e.map(i=>n`<div class="wpk-row">
                    <span class="wpk-ico">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <rect x="4" y="8" width="16" height="12" rx="2"></rect>
                        <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </span>
                    <div class="wpk-body">
                      <div class="wpk-primary">${i.name}</div>
                      <div class="wpk-secondary">
                        ${t(i)} ${t(i)===1?"item":"items"} ·
                        ${Array.isArray(i.groups)?i.groups.length:0}
                        ${(Array.isArray(i.groups)?i.groups.length:0)===1?"group":"groups"}
                      </div>
                    </div>
                    <button
                      class="pkg-del"
                      title="Delete list"
                      @click=${()=>this._deletePackingTemplate(i)}
                    >
                      Delete
                    </button>
                  </div>`)}
              </div>`}
        </glass-panel>
      </div>
    `}async _deletePackingTemplate(e){if(!(this.preview||!(e!=null&&e.id))&&window.confirm(`Delete "${e.name}"? This won't affect any trip's current list.`))try{await f.deletePackingTemplate(e.id)}catch(t){console.warn("[Portal] deletePackingTemplate failed:",(t==null?void 0:t.message)??t)}}_wpkGroup({label:e,subtitle:t,empty:i,items:a,row:r}){const s=this._wpkExpanded.has(e),o=s?a:a.slice(0,3);return n`
      <div>
        <div class="section-head"><h3>${e}</h3></div>
        <glass-panel padding="md" variant="strong" stretch>
          <div class="wpk-sub">${t}</div>
          ${a.length===0?n`<div class="wpk-empty">${i}</div>`:n`<div class="wpk-rows">${o.map(r)}</div>`}
          ${a.length>3?n`<button
                class="wpk-toggle"
                @click=${()=>this._toggleWpk(e)}
              >
                ${s?"Show fewer":`Show all ${a.length}`}
              </button>`:""}
        </glass-panel>
      </div>
    `}_wpkRow({glyph:e,primary:t,secondary:i,scope:a,childId:r,hint:s}){return n`<div class="wpk-row">
      <span class="wpk-ico">${this._wpkGlyph(e)}</span>
      <div class="wpk-body">
        <div class="wpk-primary">${t}</div>
        ${i?n`<div class="wpk-secondary">${i}</div>`:""}
        <div class="wpk-tags">
          <span class="wpk-scope ${this._scopeClass(a)}"
            >${this._scopeLabel(a,r)}</span
          >
          ${s?n`<span class="wpk-hint">${s}</span>`:""}
        </div>
      </div>
    </div>`}_toggleWpk(e){this._wpkExpanded.has(e)?this._wpkExpanded.delete(e):this._wpkExpanded.add(e),this.requestUpdate()}_scopeClass(e){return e==="child"?"child":e==="member"?"member":"family"}_scopeLabel(e,t){if(e==="member")return"Private";if(e==="child"){const i=(this.ppChildren??[]).find(a=>a.id===t);return(i==null?void 0:i.name)??"Child"}return"Family"}_wpkCadence(e){let t;switch(e.cadence){case"daily":t="Daily";break;case"weekday":t="Weekdays";break;case"weekly":t=Array.isArray(e.daysOfWeek)&&e.daysOfWeek.length?e.daysOfWeek.map(i=>this._weekdayShort(i)).filter(Boolean).join(", "):"Weekly";break;case"monthly":t="Monthly";break;case"asNeeded":t="As needed";break;default:t=e.cadence||""}return e.timeOfDay?`${t} · ${e.timeOfDay}`:t}_weekdayShort(e){return["","Mon","Tue","Wed","Thu","Fri","Sat","Sun"][e]??""}_wpkRelDate(e){var s;const t=((s=e==null?void 0:e.toMillis)==null?void 0:s.call(e))??(e?new Date(e).getTime():0);if(!t)return"";const i=24*3600*1e3,a=o=>{const d=new Date(o);return d.setHours(0,0,0,0),d.getTime()},r=Math.round((a(t)-a(Date.now()))/i);return r===0?"Today":r===1?"Tomorrow":r===-1?"Yesterday":r>1?`In ${r} days`:`${-r} days ago`}_wpkGlyph(e){const t={width:16,height:16,viewBox:"0 0 24 24"};switch(e){case"rhythm":return n`<svg viewBox=${t.viewBox} width=${t.width} height=${t.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 2l4 4-4 4"></path>
          <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
          <path d="M7 22l-4-4 4-4"></path>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
        </svg>`;case"pattern":return n`<svg viewBox=${t.viewBox} width=${t.width} height=${t.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>`;case"live":return n`<svg viewBox=${t.viewBox} width=${t.width} height=${t.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="5" width="18" height="16" rx="2"></rect>
          <path d="M3 9h18M8 3v4M16 3v4"></path>
        </svg>`;default:return n`<svg viewBox=${t.viewBox} width=${t.width} height=${t.height}
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"></path>
          <circle cx="12" cy="9" r="2.5"></circle>
        </svg>`}}_childData(){if(this.preview)return{hasPP:!0,readonly:!1,children:_i,child:St,milestones:ki,insights:$i,dailyCard:Ci,familyDailyCard:Ai,pebbleMessages:Si,pebbleSessions:[]};const e=this.ppChildren??[],t=e.find(a=>a.id===this.selectedChildId)??e[0]??null;return{hasPP:!!((this.ppIsMember||this.ppIsChildViewer)&&t),readonly:!!(this.ppIsChildViewer&&!this.ppIsMember),children:e,child:t,milestones:this.childMilestones??[],insights:this.childInsights??[],dailyCard:this.childDailyCard??null,familyDailyCard:this.familyDailyCard??null,pebbleMessages:this.childPebbleMessages??[],pebbleSessions:this.childPebbleSessions??[]}}_onSelectChild(e){this.preview||f.selectChild(e.detail)}_onAskPebble(e){this._pebblePrefill=e.detail??"",this._activeTab="pebble"}async _claimChildAsParent(e){if(!this.preview&&!(!(e!=null&&e.id)||this._claimingChildId)){this._claimingChildId=e.id;try{await f.requestToBeCoParent(e.id),this._claimedChildName=e.name??"your child"}catch(t){y(`Couldn't send the request: ${t.code??t.message}`,{duration:5e3})}finally{this._claimingChildId=null}}}async _requestChildAccess(){if(!this.preview)try{await f.requestChildAccess(),y("Request sent — a parent will be notified.")}catch(e){y(`Couldn't send request: ${e.code??e.message}`,{duration:5e3})}}async _withdrawChildAccess(){if(!this.preview)try{await f.withdrawChildAccessRequest(),y("Request withdrawn.")}catch(e){y(`Couldn't withdraw: ${e.code??e.message}`,{duration:4e3})}}async _approveChildAccess(e){try{await f.approveChildAccess(e),y("Access granted — read-only Children view.")}catch(t){y(`Couldn't approve: ${t.code??t.message}`,{duration:5e3})}}async _declineChildAccess(e){try{await f.declineChildAccess(e),y("Request declined.")}catch(t){y(`Couldn't decline: ${t.code??t.message}`,{duration:4e3})}}async _revokeChildViewer(e){try{await f.revokeChildViewer(e),y("Read-only access revoked.")}catch(t){y(`Couldn't revoke: ${t.code??t.message}`,{duration:4e3})}}_ageShort(e){var s;if(!e||Number.isNaN(((s=e.getTime)==null?void 0:s.call(e))??NaN))return"";const t=new Date;let i=(t.getFullYear()-e.getFullYear())*12+(t.getMonth()-e.getMonth());t.getDate()<e.getDate()&&(i-=1),i=Math.max(0,i);const a=Math.floor(i/12),r=i%12;return a===0?`${r} mo`:`${a}y${r?` ${r}m`:""}`}_ageLong(e){var o;if(!e||Number.isNaN(((o=e.getTime)==null?void 0:o.call(e))??NaN))return"";const t=new Date;let i=(t.getFullYear()-e.getFullYear())*12+(t.getMonth()-e.getMonth());t.getDate()<e.getDate()&&(i-=1),i=Math.max(0,i);const a=Math.floor(i/12),r=i%12;if(a===0)return`${r} month${r===1?"":"s"}`;const s=r?`, ${r} month${r===1?"":"s"}`:"";return`${a} year${a===1?"":"s"}${s}`}_comingUp(){const e=[];for(const i of this._filteredTrips())i.start&&e.push({kind:"trip",title:i.title||"Trip",sub:i.location||i.lodgingHost||"",date:i.start,chip:this._fmtRangeShort(i.start,i.end)});for(const i of this._filteredEvents()){if(!i.date||!this._isCelebrationEvent(i))continue;const a=S(i.date);a&&e.push({kind:i.source==="school-import"?"external":"event",title:i.title||"Celebration",sub:"",date:i.date,chip:a.toLocaleDateString("en-GB",{day:"numeric",month:"short"})})}const t=new Date().toISOString().slice(0,10);for(const i of this.holidays??[]){if(!i.date||i.date<t)continue;const a=S(i.date);a&&e.push({kind:"holiday",title:i.title||"Public holiday",sub:"Public holiday",date:i.date,chip:a.toLocaleDateString("en-GB",{day:"numeric",month:"short"})})}for(const i of this._standaloneActivities()){if(!i.day||i.day<t)continue;const a=S(i.day);a&&e.push({kind:"event",title:i.title||"Activity",sub:i.calTag||"",date:i.day,chip:a.toLocaleDateString("en-GB",{day:"numeric",month:"short"})})}return e.sort((i,a)=>String(i.date).localeCompare(String(a.date))).slice(0,5)}_fmtRangeShort(e,t){const i=S(e),a=S(t);if(!i)return"";const r=i.toLocaleDateString("en-GB",{month:"short"});if(!a||i.getDate()===a.getDate()&&r===a.toLocaleDateString("en-GB",{month:"short"}))return`${i.getDate()} ${r}`;const s=a.toLocaleDateString("en-GB",{month:"short"});return r===s?`${i.getDate()}–${a.getDate()} ${r}`:`${i.getDate()} ${r} – ${a.getDate()} ${s}`}_tripGico(){return n`<span class="gico trip"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.62 3.05a1 1 0 0 0-1.12-.18L3.7 10.3c-.86.38-.83 1.62.05 1.95l6.06 2.27 2.27 6.06c.33.88 1.57.9 1.95.05L21.8 4.17a1 1 0 0 0-.18-1.12zM10.5 12.7l6.4-5.7-4.9 6.6-.1.1z"/></svg></span>`}_eventGico(){return n`<span class="gico event"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.1 6.7C10.4 5 9.2 3.7 7.8 3.3c-1-.3-1.9.1-2.2.9-.4 1 .2 2.1 1 2.7 1 .75 2.5 1.05 4.5 1.05z"/><path d="M12.9 6.7c.7-1.7 1.9-3 3.3-3.4 1-.3 1.9.1 2.2.9.4 1-.2 2.1-1 2.7-1 .75-2.5 1.05-4.5 1.05z"/><rect x="3" y="8" width="8.1" height="3.5" rx="1"/><rect x="12.9" y="8" width="8.1" height="3.5" rx="1"/><rect x="4.1" y="11.7" width="7" height="9.1" rx="1.4"/><rect x="12.9" y="11.7" width="7" height="9.1" rx="1.4"/></svg></span>`}_holidayGico(){return n`<span class="gico holiday"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"/><path d="M3 10V6C3 4.89543 3.89543 4 5 4H7"/><path d="M7 2V6"/><path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"/></svg></span>`}_schoolGico(){return n`<span class="gico school"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l9-5 9 5-9 5-9-5z"/><path d="M7 12.5V17c0 1 2.5 2.5 5 2.5s5-1.5 5-2.5v-4.5M21 10v5"/></svg></span>`}_gicoFor(e){return e.kind==="trip"?this._tripGico():e.kind==="holiday"?this._holidayGico():e.kind==="external"?this._schoolGico():this._eventGico()}}_(Qe,"properties",{user:{type:Object},pebbleUser:{type:Object},family:{type:Object},children:{type:Array},trips:{type:Array},events:{type:Array},activities:{type:Array},holidays:{type:Array},preview:{type:Boolean},ppFamily:{type:Object},ppIsMember:{type:Boolean},ppChildren:{type:Array},selectedChildId:{type:String},childMilestones:{type:Array},childInsights:{type:Array},childDailyCard:{type:Object},familyDailyCard:{type:Object},pebbleAnchors:{type:Array},pebbleRhythms:{type:Array},pebblePatterns:{type:Array},pebbleLiveContext:{type:Array},childPebbleMessages:{type:Array},childPebbleSessions:{type:Array},ppIsChildViewer:{type:Boolean},incomingChildRequests:{type:Array},myChildAccessRequest:{type:Object},_pebblePrefill:{state:!0},_plannerOpen:{state:!0},_plannerTrip:{state:!0},circle:{state:!0},_activeTab:{state:!0},_refreshingFamilyBrief:{state:!0},_weekendOpen:{state:!0},_wpkOpen:{state:!0},_packingTemplates:{state:!0},_formOpen:{state:!0},_formTrip:{state:!0},_formBusy:{state:!0},_membersOpen:{state:!0},_eventFormOpen:{state:!0},_eventFormEvent:{state:!0},_eventFormBusy:{state:!0},_activityFormOpen:{state:!0},_activityFormActivity:{state:!0},_activityFormBusy:{state:!0},_displayMonth:{state:!0},_calendarView:{state:!0},_calFilters:{state:!0},_managingTags:{state:!0},_tagRenaming:{state:!0},_tagRenameDraft:{state:!0},_tagDeleting:{state:!0},_displayWeekStart:{state:!0},_allTripsOpen:{state:!0},_editingFamilyName:{state:!0},_importOpen:{state:!0},_schoolImportOpen:{state:!0},_profileOpen:{state:!0},_typePickerOpen:{state:!0},_formMode:{state:!0},_pebbleFabOpen:{state:!0},_themeLight:{state:!0},_dragOverTarget:{state:!0},_connectionMembers:{state:!0},_claimingChildId:{state:!0},_claimedChildName:{state:!0},_joinAnotherCode:{state:!0},_joinAnotherBusy:{state:!0},_joinAnotherError:{state:!0},_joinAnotherSuccessName:{state:!0}}),_(Qe,"styles",T`
    /* The global tokens.css *{box-sizing} does NOT pierce this shadow
       root — without this every concept-tuned padding renders against
       content-box and the layout drifts from the concept. */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    :host {
      display: block;
      width: 100%;
      min-height: 100vh;
    }
    .topbar {
      /* Padding + height match PebblePath website's <nav> exactly.
         Three-column grid where the centre column truly centres the
         circle-switcher in the viewport, not just within the gap
         between brand and the .who group. The two outer columns are
         locked to equal width via the 1fr/auto-but-balanced trick. */
      position: sticky;
      top: 0;
      z-index: 10;
      padding: 0 48px;
      height: 68px;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      column-gap: 14px;
      background: var(--chrome-bg);
      backdrop-filter: blur(28px) saturate(180%);
      -webkit-backdrop-filter: blur(28px) saturate(180%);
      border-bottom: 1px solid var(--glass-border);
    }
    .topbar .brand {
      justify-self: start;
    }
    /* circle-switcher was removed from the topbar 2026-05-14 — left
       a no-op selector here so older selectors that targeted it
       degrade gracefully if anyone re-introduces it. */
    .topbar .who {
      justify-self: end;
    }
    /* Pebble surfaces as a search-bar in the centre column (not a pill).
       Always visible, invites a question rather than competing with the
       + Activity primary CTA. Clicking anywhere on it opens the full
       chat sheet, optionally pre-filling the textarea with whatever
       was typed inline. */
    .pebble-search {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      width: clamp(360px, 42vw, 560px);
      max-width: 100%;
      padding: 7px 14px 7px 12px;
      border-radius: var(--radius-pill);
      background: var(--field-bg);
      border: 1px solid var(--glass-border);
      cursor: text;
      transition: background 200ms ease, border-color 200ms ease;
    }
    .pebble-search:hover,
    .pebble-search:focus-within {
      background: rgba(61, 155, 143, 0.14);
      border-color: rgba(61, 155, 143, 0.4);
    }
    .pebble-search-icon {
      width: 16px;
      height: 16px;
      color: var(--teal-pebble);
      flex-shrink: 0;
    }
    .pebble-search-input {
      flex: 1;
      min-width: 0;
      background: transparent;
      border: none;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 14px;
      padding: 2px 0;
      outline: none;
    }
    .pebble-search-input::placeholder {
      /* Quieter than var(--text-tertiary) — the bar already reads as
         a Pebble entry-point from its location + sparkle icon, so the
         placeholder shouldn't compete visually. */
      color: rgba(255, 248, 235, 0.32);
      font-style: italic;
    }
    /* Mobile-only Pebble button — shown next to "+ Activity" instead of
       a centred search bar on narrow viewports. */
    .pebble-mobile-btn {
      display: none;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 999px;
      background: rgba(255, 248, 235, 0.08);
      border: 1px solid var(--glass-border);
      color: var(--teal-pebble);
      cursor: pointer;
      padding: 0;
    }
    .pebble-mobile-btn:hover {
      background: rgba(61, 155, 143, 0.16);
      border-color: rgba(61, 155, 143, 0.45);
    }
    .pebble-mobile-btn svg { width: 16px; height: 16px; }
    @media (max-width: 768px) {
      /* Replace the central search bar with a small button next to
         the "+ Activity" CTA — much less typing real-estate is needed
         on a phone, and the button reads cleaner. */
      .pebble-search {
        display: none;
      }
      .pebble-mobile-btn {
        display: inline-flex;
      }
    }

    .activity-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      border-radius: var(--radius-pill);
      background-image: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      cursor: pointer;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13.5px;
      letter-spacing: -0.005em;
      text-shadow: 0 1px 1px rgba(20, 12, 6, 0.3);
      box-shadow:
        0 4px 14px rgba(139, 90, 62, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
      transition: background-image 240ms ease, transform 160ms ease, box-shadow 240ms ease;
    }
    .activity-btn:hover {
      background-image: var(--gradient-cta-hover);
    }
    .activity-btn:active {
      transform: translateY(1px) scale(0.98);
    }
    @media (max-width: 768px) {
      /* Pixel-matched with pebblepath.ai's mobile nav: padding 0 20px,
         height 60px, same teal wash gradient that fades to transparent.
         Logo lives at the same x/y as on the website so the two surfaces
         feel like one product when switching between them. */
      .topbar {
        padding: 0 20px;
        height: 60px;
        column-gap: 8px;
        grid-template-columns: auto 1fr auto;
        background: linear-gradient(
          180deg,
          rgba(31, 92, 84, 0.96) 0%,
          rgba(31, 92, 84, 0.78) 100%
        );
        backdrop-filter: blur(18px) saturate(160%);
        -webkit-backdrop-filter: blur(18px) saturate(160%);
      }
      .topbar .brand-name {
        display: none;
      }
      .activity-btn-label {
        display: none;
      }
      /* Label hidden on mobile → make it a CLEAN 40px circle with a
         properly-sized "+" (was a cramped pill + tiny 13.5px glyph).
         40px matches the planner close + is a comfortable touch
         target; the FAB stays the larger primary floating action. */
      .activity-btn {
        width: 40px;
        height: 40px;
        padding: 0;
        justify-content: center;
        font-size: 24px;
        font-weight: 300;
        line-height: 1;
      }
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .brand-icon {
      width: 38px;
      height: 38px;
      border-radius: 9px;
      display: block;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
    .brand-name {
      font-family: var(--font-pebble);
      font-weight: 300;
      font-synthesis: weight;
      font-size: 24px;
      letter-spacing: 0.04em;
      line-height: 1;
      color: rgba(255, 248, 235, 0.94);
      transform: translateY(2px);
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
    }
    .who {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .avatar-tap {
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
      border-radius: 999px;
      transition: transform 200ms ease, box-shadow 200ms ease;
    }
    .avatar-tap:hover {
      transform: scale(1.04);
      box-shadow: 0 0 0 3px rgba(255, 248, 235, 0.14);
    }
    .avatar-tap:focus-visible {
      outline: 2px solid var(--terracotta);
      outline-offset: 2px;
    }
    .preview-banner {
      padding: 10px 24px;
      background: linear-gradient(90deg, rgba(212, 168, 67, 0.18), rgba(198, 123, 92, 0.18));
      border-bottom: 1px solid rgba(212, 168, 67, 0.3);
      font-size: 13px;
      color: rgba(255, 232, 200, 0.95);
      text-align: center;
    }
    .preview-banner strong {
      font-weight: 600;
    }
    .preview-banner a {
      color: inherit;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    /* ── Floating Pebble — liquid-glass launcher + docked panel.
       Present on every tab EXCEPT Pebble (that tab IS Pebble). The
       panel reuses <child-pebble compact> — one chat implementation,
       two surfaces. ───────────────────────────────────────────── */
    .pebble-fab {
      position: fixed;
      right: 24px;
      bottom: 24px;
      z-index: 900;
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 13px 18px 13px 15px;
      border-radius: var(--radius-pill);
      cursor: pointer;
      color: #eafaf6;
      font-family: var(--font-display);
      font-size: 14px;
      font-weight: 600;
      letter-spacing: -0.01em;
      /* Liquid glass: translucent teal over a heavy backdrop blur +
         saturation, hairline light edge, soft lifted shadow. */
      background: linear-gradient(
        135deg,
        rgba(61, 155, 143, 0.42),
        rgba(45, 122, 112, 0.32)
      );
      backdrop-filter: blur(22px) saturate(180%);
      -webkit-backdrop-filter: blur(22px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.22);
      box-shadow:
        0 10px 30px rgba(20, 60, 54, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
      transition: transform 160ms ease, box-shadow 160ms ease;
    }
    .pebble-fab:hover {
      transform: translateY(-2px);
      box-shadow:
        0 16px 40px rgba(20, 60, 54, 0.48),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    .pebble-fab svg { width: 20px; height: 20px; }
    .pebble-fab .lbl {
      /* Label hides on narrow screens — the orb alone is the affordance. */
    }
    .pebble-fab-panel {
      position: fixed;
      right: 24px;
      bottom: 92px;
      z-index: 901;
      width: 400px;
      max-width: calc(100vw - 32px);
      height: 580px;
      max-height: calc(100vh - 132px);
      display: flex;
      flex-direction: column;
      border-radius: 22px;
      overflow: hidden;
      background: var(--panel-solid);
      backdrop-filter: blur(34px) saturate(170%);
      -webkit-backdrop-filter: blur(34px) saturate(170%);
      border: 1px solid var(--glass-border-strong);
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.5);
      animation: pebbleFabRise 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes pebbleFabRise {
      from { transform: translateY(16px) scale(0.98); opacity: 0; }
      to { transform: translateY(0) scale(1); opacity: 1; }
    }
    .pebble-fab-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 14px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      flex-shrink: 0;
    }
    .pebble-fab-head .ttl {
      display: flex;
      align-items: center;
      gap: 9px;
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .pebble-fab-head .ttl svg { width: 18px; height: 18px; color: var(--ink-teal); }
    .pebble-fab-head .x {
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      width: 30px;
      height: 30px;
      border-radius: 999px;
      cursor: pointer;
      font-size: 17px;
      line-height: 1;
      flex-shrink: 0;
    }
    .pebble-fab-head .x:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    /* Flex chain (NOT percentage heights) so the embedded
       <child-pebble compact> fills the panel: its thread scrolls
       internally + the composer stays pinned + visible. A
       percentage-height chain breaks here because the custom-element
       host has no definite height. */
    .pebble-fab-body {
      flex: 1;
      min-height: 0;
      overflow: hidden;
      display: flex;
    }
    .pebble-fab-body > child-pebble {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }
    .pebble-fab-empty {
      padding: 26px 22px;
      text-align: center;
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.6;
    }
    .pebble-fab-empty button {
      margin-top: 14px;
      padding: 9px 18px;
      border-radius: var(--radius-pill);
      background: var(--gradient-sage);
      color: #fff;
      border: none;
      cursor: pointer;
      font-family: var(--font-body);
      font-size: 13px;
      font-weight: 600;
    }
    @media (max-width: 720px) {
      /* Sit above the fixed bottom nav bar. */
      /* Icon-only on mobile → an explicit, clean 52px circle (was
         padding-derived ~44 which varied with the glyph). 52 keeps
         it the clearly-primary floating action, distinct from the
         40px header circular controls. */
      .pebble-fab {
        right: 16px;
        bottom: 84px;
        width: 52px;
        height: 52px;
        padding: 0;
        justify-content: center;
      }
      .pebble-fab .lbl { display: none; }
      .pebble-fab-panel {
        right: 12px;
        left: 12px;
        bottom: 150px;
        width: auto;
        max-width: none;
        /* Definite height (not auto) so the inner flex chain can
           size the chat + keep the composer on-screen. */
        height: 62vh;
        max-height: calc(100vh - 210px);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .pebble-fab-panel { animation: none; }
      .pebble-fab:hover { transform: none; }
    }

    main {
      /* Definite width + margin-inline:auto centres reliably
         regardless of the host formatting context (max-width +
         margin:0 auto was computing to 0 here). Matches the concept's
         1280 max + 24px gutters. */
      padding: 30px 24px 0;
      width: min(1280px, 100%);
      margin-inline: auto;
    }
    @media (max-width: 768px) {
      main {
        padding: 20px 16px calc(32px + env(safe-area-inset-bottom));
      }
    }
    /* Portal v4 — Pebble tab is full-bleed: drop the gutters + width
       cap so the chat surface runs edge-to-edge and right up to the
       nav bar. <child-pebble> supplies its own internal padding. */
    main.pebble-full {
      padding: 0;
      width: 100%;
      max-width: none;
    }

    .hello {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 32px;
      flex-wrap: wrap;
    }
    @media (max-width: 768px) {
      .hello {
        margin-bottom: 22px;
        /* Keep the scope/privacy pill on the SAME row as the
           title/subheader, top-right (matches the Activities tab) —
           was wrapping to its own left-aligned row on Today/Children
           because the tall title block forced a flex wrap. */
        flex-wrap: nowrap;
        align-items: flex-start;
      }
      .hello > div:first-child {
        min-width: 0;
        flex: 1;
      }
      .hello > :not(div:first-child) {
        flex-shrink: 0;
      }
    }
    .hello h1 {
      margin: 0;
      font-family: var(--font-display);
      font-size: clamp(30px, 4vw, 44px);
      line-height: 1.05;
      letter-spacing: -0.025em;
      background: var(--heading-fill);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .hello .stat {
      color: var(--text-secondary);
      font-size: 15px;
      margin-top: 8px;
    }
    .hello .stat span {
      color: var(--text-primary);
      font-weight: 600;
    }
    /* Static page subtitle (non-Today tabs). Visually matches the
       old subtitle but is NOT interactive — no cursor/hover — so it
       never looks editable (only Today's .family-name is editable). */
    .hello .page-sub {
      color: var(--text-tertiary);
      font-size: 14px;
      margin-top: 6px;
      letter-spacing: -0.005em;
    }
    .hello .family-name {
      color: var(--text-tertiary);
      font-size: 14px;
      margin-top: 6px;
      letter-spacing: -0.005em;
      cursor: pointer;
      padding: 2px 4px;
      margin-left: -4px;
      border-radius: 4px;
      transition: background 160ms ease, color 160ms ease;
    }
    .hello .family-name:hover {
      color: var(--text-secondary);
      background: var(--field-bg);
    }
    .hello .family-name-input {
      color: var(--text-primary);
      font-size: 14px;
      margin-top: 6px;
      letter-spacing: -0.005em;
      font-family: var(--font-body);
      font-weight: 500;
      background: var(--field-bg);
      border: 1px solid var(--glass-border-strong);
      border-radius: 4px;
      padding: 2px 6px;
      margin-left: -6px;
      outline: none;
      min-width: 200px;
    }
    .hello .smart {
      font-family: var(--font-display);
      font-size: clamp(15px, 1.8vw, 18px);
      font-weight: 600;
      letter-spacing: -0.005em;
      margin: 10px 0 4px;
      color: transparent;
      background: linear-gradient(
        90deg,
        var(--terracotta) 0%,
        var(--amber-glow) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
    }

    section {
      margin-bottom: 32px;
    }
    .section-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 14px;
      padding: 0 4px;
      /* Consistent header height so a head WITH an action pill
         (e.g. "Manage members") and a head WITHOUT one line up —
         keeps side-by-side grid-2 cards top-aligned (My Cairn). */
      min-height: 34px;
    }
    /* Today: the "Felix today" h2 + "Open …'s path" pill were
       removed; the scope ("Your household") chip moved down here
       and sits where the pill was (right-aligned). Tighter margin
       so the cards float up into the reclaimed space. */
    .section-head.scope-only {
      justify-content: flex-end;
      min-height: 0;
      margin-bottom: 10px;
    }
    /* Tab 1 ONLY: pull the lead section (scope chip + Felix/Coming-up
       cards) up toward the family name without moving the greeting
       header itself — the shared .hello margin + main padding stay
       at their original values, this just reclaims part of that gap
       on Today. Other tabs unaffected. */
    /* Gentle pull so the cards sit close under the greeting. The
       scope chip moved into the header rightSlot (unified with the
       other tabs), so the old -20px (calibrated WITH a scope row
       present) would now jam the cards into the family-name; -6 is
       the right gap now. */
    section.today-lead {
      margin-top: -6px;
    }
    @media (max-width: 768px) {
      section.today-lead {
        margin-top: -4px;
      }
    }
    .section-head h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
    /* ONE harmonized action pill — verbatim from the concept's global
       .link (All activities / More insights / See all / Clear / Manage /
       Edit / + Add event …). De-scoped from .section-head so EVERY .link
       across all 5 tabs gets the pill, not just section headers (a
       .section-head-scoped rule left cal-head / set-row links unstyled —
       Portal-polish-v3 #4). */
    .link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      font-family: var(--font-body);
      transition: color 0.18s ease, border-color 0.18s ease, background 0.18s ease;
    }
    .link:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
      background: var(--glass-fill-strong);
    }
    .link svg {
      width: 13px;
      height: 13px;
    }
    /* Slice 7 — the "Plan our weekend" entry reads as the Pebble action. */
    .link.plan-weekend-link {
      color: var(--ink-teal);
      border-color: rgba(61, 155, 143, 0.32);
      background: rgba(61, 155, 143, 0.1);
    }
    .link.plan-weekend-link:hover {
      background: rgba(61, 155, 143, 0.18);
      border-color: rgba(61, 155, 143, 0.5);
      color: var(--ink-teal);
    }
    @media (max-width: 768px) {
      .link.hide-mobile {
        display: none;
      }
    }

    /* 2026-05-22 — was a wrapping grid that grew taller as trips
       accumulated. Switched to a horizontal scroll-snap carousel so
       the section stays one row tall + lets users browse many
       activities without vertical scroll. There's no hard cap on
       trips shown; all eligible trips render and the user swipes
       through them. */
    .trips-row {
      display: flex;
      gap: 18px;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
      scroll-padding-left: 0;
      padding-bottom: 6px;
      /* Hide scrollbar — the carousel rhythm is the affordance. */
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .trips-row::-webkit-scrollbar { display: none; }
    .trips-row > trip-card {
      flex: 0 0 320px;
      scroll-snap-align: start;
    }
    @media (max-width: 480px) {
      .trips-row > trip-card {
        flex: 0 0 86%;
      }
    }

    /* Celebrations — two-column layout (Birthdays | Anniversaries)
       so the panels feel intentional even with sparse content,
       instead of one wide low-density panel. */
    .cel-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    @media (max-width: 720px) {
      .cel-row {
        grid-template-columns: 1fr;
      }
    }
    .cel-col-head {
      display: flex;
      align-items: baseline;
      margin-bottom: 4px;
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.08);
    }
    .cel-col-title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 14.5px;
      letter-spacing: -0.005em;
    }
    .cel-empty {
      color: var(--text-tertiary);
      font-size: 13px;
      padding: 8px 0 4px;
      line-height: 1.5;
    }
    @media (max-width: 720px) {
      .cel-row {
        gap: 12px;
      }
      .cel-col-head {
        margin-bottom: 2px;
        padding-bottom: 6px;
      }
    }

    /* Empty state for the Coming up panel — promoted from a one-line
       "No trips yet" to something inviting since this is the first
       thing a fresh family sees. */
    .empty-hero {
      text-align: center;
      padding: 16px 12px 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    .empty-icon {
      opacity: 0.85;
      margin-bottom: 4px;
    }
    .empty-title {
      font-family: var(--font-display);
      font-size: 19px;
      font-weight: 600;
      letter-spacing: -0.015em;
    }
    .empty-sub {
      color: var(--text-secondary);
      font-size: 14px;
      line-height: 1.55;
      max-width: 420px;
      margin-bottom: 6px;
    }
    .empty-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .empty-cta {
      padding: 10px 18px;
      border-radius: var(--radius-pill);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13.5px;
      cursor: pointer;
      transition: transform 160ms ease, background-image 240ms ease, box-shadow 240ms ease;
      min-height: 40px;
    }
    .empty-cta.primary {
      background-image: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      text-shadow: 0 1px 1px rgba(20, 12, 6, 0.3);
      box-shadow:
        0 4px 14px rgba(139, 90, 62, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
    }
    .empty-cta.primary:hover {
      background-image: var(--gradient-cta-hover);
    }
    .empty-cta.ghost {
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
    }
    .empty-cta.ghost:hover {
      background: var(--glass-fill-strong);
      border-color: var(--glass-border-strong);
    }
    .empty-cta:active {
      transform: translateY(1px) scale(0.99);
    }

    /* P7 Item 3 (2026-05-20) — 2A claim section on the Children gate.
       Sits below the read-only Request Access affordance as a secondary
       option for actual parents/caregivers. Uses the same .empty-*
       typographic scale so the gate reads as one cohesive surface. */
    .claim-section {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid var(--glass-border);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      max-width: 440px;
      width: 100%;
    }
    .claim-title {
      font-family: var(--font-display);
      font-size: 15.5px;
      font-weight: 600;
      letter-spacing: -0.015em;
      color: var(--text-primary);
    }
    .claim-sub {
      color: var(--text-secondary);
      font-size: 13px;
      line-height: 1.55;
      text-align: center;
      margin-bottom: 4px;
    }
    .claim-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }
    .claim-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      width: 100%;
      padding: 12px 16px;
      background: rgba(61, 155, 143, 0.10);
      border: 1px solid rgba(61, 155, 143, 0.30);
      border-radius: var(--radius-tile);
      color: var(--teal-pebble);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13.5px;
      cursor: pointer;
      transition: background 180ms ease, border-color 180ms ease, transform 160ms ease;
      text-align: left;
    }
    .claim-btn:hover:not(:disabled) {
      background: rgba(61, 155, 143, 0.16);
      border-color: rgba(61, 155, 143, 0.45);
    }
    .claim-btn:active:not(:disabled) {
      transform: translateY(1px) scale(0.99);
    }
    .claim-btn:disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }
    .claim-chev {
      color: rgba(61, 155, 143, 0.65);
      font-size: 16px;
      font-weight: 700;
    }
    .claim-sent {
      color: var(--teal-pebble);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13.5px;
      text-align: center;
      padding: 10px 14px;
      background: rgba(61, 155, 143, 0.10);
      border: 1px solid rgba(61, 155, 143, 0.25);
      border-radius: var(--radius-tile);
      width: 100%;
    }

    /* Celebrations (left) + Your Cairn (right) share the EXACT column
       ratio of the calendars above (1fr 1.2fr, 18px gap, same 1024px
       break) so the Celebrations card lines up flush with the monthly
       calendar and Your Cairn lines up flush with the annual grid. */
    .cel-cairn-row {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 18px;
      align-items: start;
    }
    @media (max-width: 1024px) {
      .cel-cairn-row {
        grid-template-columns: 1fr;
      }
    }
    .cel-cairn-col {
      min-width: 0;
    }
    /* Stacked Birthdays / Anniversaries inside one card. */
    .cel-stack-block + .cel-stack-block {
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 248, 235, 0.08);
    }

    .cal-row {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 18px;
      align-items: stretch;
    }
    .cal-row > glass-panel {
      display: block;
      height: 100%;
    }
    @media (max-width: 1024px) {
      .cal-row {
        grid-template-columns: 1fr;
      }
    }
    /* Activities tab icon — mountain.png used as a CSS mask so it
       picks up currentColor like the other inline-SVG tab icons.
       The PNG is solid black on transparent; the mask treats its
       opaque pixels as the icon shape and the background-color
       paints through. Net: icon = whatever the surrounding text
       color is (white on the dark-teal topbar). 2026-05-23.
       prettier-ignore — keep this comment single-line per the
       no-backticks-in-css-templates rule. */
    .mountain-icon {
      display: inline-block;
      width: 22px;
      height: 22px;
      background-color: currentColor;
      -webkit-mask: var(--mountain-src) center / contain no-repeat;
      mask: var(--mountain-src) center / contain no-repeat;
      vertical-align: middle;
    }
    .cal-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .cal-head h3 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 17px;
      font-weight: 600;
    }

    /* ══ Activities calendar workspace (design 28, 2026-05-24) ══
       Replaces the prior single-card calendar (Week/Month/Year
       toggle + chip-per-cell month + weekly strip). New shape =
       toolbar across the top, sidebar with mini-month + filters
       on the left, main pane with Week / Month / Year on the
       right. All-day chips + monthly spanning bars use a shared
       category color carrier via the cat-trip / cat-plan / cat-
       holiday / cat-event / cat-celebrate classes (rules at the
       bottom of this block — they map a category id to --cat,
       --cat-bg, --cat-ink custom properties consumed by the chip
       rules). */

    /* margin-bottom puts air between the calendar workspace and the
       Celebrations section below it on the Activities tab. */
    .cal-section { display: block; margin: 0 0 28px 0; }
    .cal-ws { display: flex; flex-direction: column; }
    .cal-ws-divider { height: 1px; background: var(--hairline); }

    /* ── toolbar ─────────────────────────────────────────── */
    .cal-tb {
      display: flex; align-items: center; justify-content: space-between;
      gap: 16px; padding: 16px 20px; flex-wrap: wrap;
    }
    .cal-tb-l { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .cal-tb-r { display: flex; align-items: center; gap: 10px; }
    .cal-today-btn {
      font-family: var(--font-body); font-weight: 600; font-size: 13px;
      color: var(--text-primary); background: var(--glass-fill);
      border: 1px solid var(--glass-border); padding: 9px 15px;
      border-radius: var(--radius-pill); cursor: pointer;
      transition: border-color 160ms ease, color 160ms ease, background 160ms ease;
    }
    .cal-today-btn:hover {
      border-color: var(--teal-pebble); color: var(--teal-pebble);
      background: var(--glass-fill-strong);
    }
    .cal-nav { display: flex; gap: 4px; }
    .cal-nav button {
      width: 34px; height: 34px; border-radius: 50%;
      border: 1px solid var(--glass-border); background: var(--glass-fill);
      color: var(--text-secondary); cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: border-color 160ms ease, color 160ms ease, background 160ms ease;
      padding: 0;
    }
    .cal-nav button:hover {
      border-color: var(--teal-pebble); color: var(--teal-pebble);
      background: var(--glass-fill-strong);
    }
    .cal-nav button svg { width: 16px; height: 16px; display: block; }
    .cal-period { display: flex; flex-direction: column; line-height: 1.15; margin-left: 4px; }
    .cal-period .pt {
      font-family: var(--font-display); font-weight: 700; font-size: 21px;
      letter-spacing: -0.02em; color: var(--text-primary);
    }
    .cal-period .ps {
      font-size: 12px; color: var(--text-tertiary); font-weight: 500; margin-top: 1px;
    }
    .cal-vswitch {
      display: flex; gap: 3px; padding: 3px;
      background: var(--glass-fill); border: 1px solid var(--glass-border);
      border-radius: var(--radius-pill);
    }
    .cal-vswitch button {
      border: none; background: transparent;
      font-family: var(--font-body); font-weight: 600; font-size: 13px;
      color: var(--text-secondary); padding: 8px 17px;
      border-radius: var(--radius-pill); cursor: pointer;
      transition: background 160ms ease, color 160ms ease;
    }
    .cal-vswitch button:hover { color: var(--text-primary); }
    .cal-vswitch button.on {
      background: var(--teal-pebble); color: #fff;
      box-shadow: 0 2px 7px rgba(61, 155, 143, 0.40);
    }
    .cal-add {
      display: inline-flex; align-items: center; gap: 7px;
      font-family: var(--font-body); font-weight: 600; font-size: 13px;
      color: #fff; background-image: var(--gradient-cta);
      border: 1px solid rgba(0, 0, 0, 0.04);
      padding: 9px 16px; border-radius: var(--radius-pill);
      cursor: pointer; transition: filter 160ms ease;
      box-shadow: 0 3px 10px rgba(139, 90, 62, 0.32);
    }
    .cal-add:hover { background-image: var(--gradient-cta-hover); }
    .cal-add svg { width: 15px; height: 15px; display: block; }

    /* ── body ────────────────────────────────────────────── */
    .cal-ws-body { display: grid; grid-template-columns: 248px 1fr; }
    @media (max-width: 900px) {
      .cal-ws-body { grid-template-columns: 1fr; }
    }
    .cal-side {
      border-right: 1px solid var(--hairline);
      padding: 18px 16px; background: var(--glass-fill);
    }
    @media (max-width: 900px) {
      .cal-side { border-right: none; border-bottom: 1px solid var(--hairline); }
    }
    /* 2026-05-24 — fixed height (not min-height) so the workspace
       doesn't resize when the user flips Week / Month / Year.
       Calibrated to Month's natural full-bleed height: 6 week rows
       × 114px (684) + DOW row + small margin (22) + cal-main top/
       bottom padding (42) = 748px → rounded up to 760px to leave a
       small margin for Week's variable all-day lane (max 3 lanes ×
       23px). overflow-y: auto is the safety net for any view that
       grows past this in edge cases. overflow-x kept for narrow
       viewports where the 8-column Week / Month grids can extend
       past the available width. */
    .cal-main { padding: 18px 20px 24px; height: 760px; overflow: auto; }

    /* ── sidebar: mini-month ──────────────────────────────── */
    .cal-mini-top {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 8px;
    }
    .cal-mini-top .mm {
      font-family: var(--font-display); font-weight: 700; font-size: 14px;
      color: var(--text-primary);
    }
    .cal-mini-arrows { display: flex; gap: 2px; }
    .cal-mini-arrows button {
      width: 24px; height: 24px; border: none; background: transparent;
      border-radius: 6px; color: var(--text-tertiary); cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 140ms ease, color 140ms ease;
    }
    .cal-mini-arrows button:hover {
      background: var(--glass-fill-strong); color: var(--text-primary);
    }
    .cal-mini-arrows svg { width: 13px; height: 13px; display: block; }
    .cal-mini-dow {
      display: grid; grid-template-columns: repeat(7, 1fr); margin-bottom: 2px;
    }
    .cal-mini-dow span {
      text-align: center; font-size: 10px; font-weight: 700;
      color: var(--text-tertiary); padding: 3px 0;
    }
    .cal-mini-grid { display: grid; grid-template-columns: repeat(7, 1fr); }
    .cal-mini-d {
      aspect-ratio: 1; display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      font-size: 11.5px; font-weight: 600; color: var(--text-secondary);
      position: relative; border-radius: 7px; cursor: pointer;
      transition: background 120ms ease;
    }
    .cal-mini-d:hover { background: var(--glass-fill-strong); }
    .cal-mini-d.muted { color: var(--text-tertiary); opacity: 0.55; }
    .cal-mini-d.today {
      background: var(--teal-pebble); color: #fff; font-weight: 700;
    }
    .cal-mini-d .dot {
      width: 4px; height: 4px; border-radius: 50%;
      background: var(--cat, var(--teal-pebble));
      position: absolute; bottom: 3px;
    }
    .cal-mini-d.today .dot { background: #fff; }

    /* ── sidebar: filters ─────────────────────────────────── */
    .cal-side-h {
      font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
      text-transform: uppercase; color: var(--text-tertiary);
      margin: 22px 4px 8px;
    }
    .cal-filt {
      display: flex; align-items: center; gap: 10px;
      padding: 7px 8px; border-radius: 9px; cursor: pointer;
      transition: background 140ms ease;
      user-select: none;
    }
    .cal-filt:hover { background: var(--glass-fill-strong); }
    .cal-filt .sw {
      width: 17px; height: 17px; border-radius: 5px;
      background: var(--cat);
      flex-shrink: 0; display: flex; align-items: center; justify-content: center;
      transition: background 140ms ease, box-shadow 140ms ease;
    }
    .cal-filt .sw svg { width: 11px; height: 11px; color: #fff; }
    .cal-filt .nm {
      font-size: 13px; font-weight: 600; color: var(--text-primary); flex: 1;
    }
    .cal-filt .ct {
      font-size: 11.5px; font-weight: 600; color: var(--text-tertiary);
    }
    .cal-filt.off .sw {
      background: transparent;
      box-shadow: inset 0 0 0 1.5px var(--text-tertiary);
    }
    .cal-filt.off .nm, .cal-filt.off .ct { color: var(--text-tertiary); }

    /* Tags "Manage" mode (2026-06-01) */
    .cal-side-h--tags {
      display: flex; align-items: center; justify-content: space-between;
    }
    .tag-manage-btn {
      background: transparent; border: none; padding: 2px 4px;
      font-family: inherit; font-size: 11px; font-weight: 700;
      letter-spacing: 0.04em; text-transform: none;
      color: var(--teal-pebble); cursor: pointer;
    }
    .tag-manage-btn:hover { color: var(--bubble-link-pb); }
    .tag-row {
      display: flex; align-items: center; gap: 8px;
      padding: 6px 8px; border-radius: 9px;
    }
    .tag-row:hover { background: var(--glass-fill-strong); }
    .tag-name {
      font-size: 13px; font-weight: 600; color: var(--text-primary);
      flex: 1; min-width: 0;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .tag-count {
      font-size: 11.5px; font-weight: 600; color: var(--text-tertiary);
    }
    .tag-mini {
      flex-shrink: 0; display: inline-flex; align-items: center;
      justify-content: center; width: 26px; height: 26px;
      border-radius: 7px; border: 1px solid var(--glass-border);
      background: var(--glass-fill); color: var(--text-secondary);
      cursor: pointer; padding: 0; font-family: inherit;
      font-size: 12px; font-weight: 600;
      transition: background 140ms ease, color 140ms ease, border-color 140ms ease;
    }
    .tag-mini:hover { background: var(--glass-fill-strong); color: var(--text-primary); }
    .tag-mini svg { width: 14px; height: 14px; }
    .tag-mini--ok { color: var(--teal-pebble); border-color: rgba(61, 155, 143, 0.4); }
    .tag-mini--del { color: var(--ink-terracotta); border-color: rgba(198, 123, 92, 0.4); }
    .tag-mini--del:hover { background: rgba(198, 123, 92, 0.14); }
    /* Delete-confirm row stacks so the "events stay" reassurance reads
       in full in the narrow sidebar (it doesn't fit on one line). */
    .tag-row--confirm { flex-direction: column; align-items: stretch; gap: 7px; }
    .tag-confirm-actions { display: flex; gap: 8px; justify-content: flex-end; }
    /* Text buttons (Cancel / Remove) in the delete-confirm row. */
    .tag-row--confirm .tag-mini { width: auto; padding: 0 11px; }
    .tag-rename-in {
      flex: 1; min-width: 0;
      background: var(--glass-fill); border: 1px solid var(--glass-border);
      color: var(--text-primary); border-radius: 7px;
      padding: 5px 9px; font-family: inherit; font-size: 13px; outline: none;
    }
    .tag-rename-in:focus { border-color: rgba(61, 155, 143, 0.5); }
    .tag-confirm-txt {
      font-size: 12px; line-height: 1.4; color: var(--text-secondary);
    }

    /* ── category color carriers ──────────────────────────── */
    /* Each row writes --cat (solid for swatches + chip accent bars),
       --cat-bg (low-alpha tint for chip backgrounds — works in BOTH
       themes), and --cat-ink (chip text). Pure-rule mapping so any
       descendant chip inherits the right palette. */
    .cat-trip {
      --cat: var(--teal-pebble);
      --cat-bg: rgba(61, 155, 143, 0.16);
      --cat-ink: var(--text-primary);
    }
    .cat-plan {
      --cat: var(--sage-soft);
      --cat-bg: rgba(122, 158, 126, 0.16);
      --cat-ink: var(--text-primary);
    }
    .cat-holiday {
      --cat: var(--dusty-blue);
      --cat-bg: rgba(107, 154, 196, 0.16);
      --cat-ink: var(--text-primary);
    }
    .cat-event {
      --cat: var(--amber-glow);
      --cat-bg: rgba(212, 168, 67, 0.18);
      --cat-ink: var(--text-primary);
    }
    .cat-celebrate {
      --cat: var(--rose-soft);
      --cat-bg: rgba(201, 138, 138, 0.18);
      --cat-ink: var(--text-primary);
    }
    /* Custom calendar tags (e.g. "Daycare 2026 schedule") — one
       terracotta-toned filter chip per distinct tag. */
    .cat-tag {
      --cat: var(--terracotta);
      --cat-bg: rgba(198, 123, 92, 0.16);
      --cat-ink: var(--text-primary);
    }

    /* ── WEEK view ────────────────────────────────────────── */
    .cal-week .wk-head {
      display: grid; grid-template-columns: 54px repeat(7, 1fr);
    }
    .cal-week .wk-h {
      padding: 6px 4px 10px; text-align: center;
      border-left: 1px solid var(--hairline);
    }
    .cal-week .wk-h .dw {
      font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
      color: var(--text-tertiary); text-transform: uppercase;
    }
    .cal-week .wk-h .nm {
      font-family: var(--font-display); font-weight: 700; font-size: 19px;
      color: var(--text-primary); margin-top: 3px;
      display: inline-flex; align-items: center; justify-content: center;
      width: 32px; height: 32px; border-radius: 50%;
    }
    .cal-week .wk-h.today .dw { color: var(--teal-pebble); }
    .cal-week .wk-h.today .nm { background: var(--teal-pebble); color: #fff; }

    .cal-allday {
      display: grid; grid-template-columns: 54px repeat(7, 1fr);
      grid-auto-rows: 23px; row-gap: 3px;
      padding: 7px 0 9px;
      border-top: 1px solid var(--hairline);
      border-bottom: 1px solid var(--hairline);
      background: var(--glass-fill);
    }
    .cal-allday .ad-lbl {
      grid-column: 1; grid-row: 1;
      font-size: 9.5px; font-weight: 700; letter-spacing: 0.04em;
      text-transform: uppercase; color: var(--text-tertiary);
      text-align: right; padding-right: 9px; align-self: center;
    }
    .ad {
      background: var(--cat-bg); color: var(--cat-ink);
      border-left: 3px solid var(--cat); border-radius: 5px;
      font-size: 11.5px; font-weight: 600; padding: 3px 8px;
      margin: 0 3px;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      cursor: pointer;
      display: flex; align-items: center;
      transition: filter 140ms ease;
    }
    .ad:hover { filter: brightness(0.97); }

    .cal-tg {
      display: grid; grid-template-columns: 54px repeat(7, 1fr);
      position: relative;
    }
    .tg-gut { display: flex; flex-direction: column; }
    .tg-hr {
      height: 52px; text-align: right; padding-right: 9px;
      font-size: 10.5px; font-weight: 600; color: var(--text-tertiary);
      transform: translateY(-7px);
    }
    .tg-day {
      position: relative; border-left: 1px solid var(--hairline);
      min-height: 624px;
      background: repeating-linear-gradient(
        to bottom,
        var(--hairline) 0 1px,
        transparent 1px 52px
      );
    }
    .tg-day.today {
      background:
        repeating-linear-gradient(
          to bottom,
          var(--hairline) 0 1px,
          transparent 1px 52px
        ),
        rgba(61, 155, 143, 0.06);
    }
    .tev {
      position: absolute; left: 3px; right: 3px;
      background: var(--cat-bg); color: var(--cat-ink);
      border-left: 3px solid var(--cat); border-radius: 6px;
      padding: 4px 7px; overflow: hidden; cursor: pointer;
      transition: filter 140ms ease, box-shadow 140ms ease;
    }
    .tev:hover {
      filter: brightness(0.97);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.13);
    }
    .tev .tt {
      font-size: 11.5px; font-weight: 700; line-height: 1.25;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .tev .tm {
      font-size: 10.5px; font-weight: 500; opacity: 0.85; margin-top: 1px;
    }
    .nowline {
      position: absolute; left: 0; right: 0; height: 2px;
      background: var(--terracotta); z-index: 5;
    }
    .nowline::before {
      content: ''; position: absolute; left: -4px; top: -3px;
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--terracotta);
    }

    /* ── MONTH view ───────────────────────────────────────── */
    .cal-month .m-dow {
      display: grid; grid-template-columns: repeat(7, 1fr); margin-bottom: 7px;
    }
    .cal-month .m-dow span {
      text-align: left; padding: 0 8px;
      font-size: 11px; font-weight: 700; letter-spacing: 0.05em;
      color: var(--text-tertiary); text-transform: uppercase;
    }
    .cal-month .m-grid {
      border: 1px solid var(--hairline);
      border-radius: 13px; overflow: hidden;
    }
    .cal-month .wkrow { position: relative; }
    .cal-month .dnums { display: grid; grid-template-columns: repeat(7, 1fr); }
    .cal-month .dcell {
      min-height: 114px;
      border-right: 1px solid var(--hairline);
      border-bottom: 1px solid var(--hairline);
      padding: 6px 8px;
    }
    .cal-month .wkrow:last-child .dcell { border-bottom: none; }
    .cal-month .dcell .dn {
      font-size: 13px; font-weight: 700; color: var(--text-secondary);
      display: inline-flex; align-items: center; justify-content: center;
      min-width: 24px; height: 24px; border-radius: 50%;
    }
    .cal-month .dcell.muted { background: var(--glass-fill); }
    .cal-month .dcell.muted .dn { color: var(--text-tertiary); opacity: 0.55; }
    .cal-month .dcell.today .dn { background: var(--teal-pebble); color: #fff; }
    .cal-month .devents {
      position: absolute; left: 0; right: 0; top: 32px; bottom: 5px;
      display: grid; grid-template-columns: repeat(7, 1fr);
      grid-auto-rows: 23px; row-gap: 3px;
      pointer-events: none;
    }
    .cal-month .ev {
      margin: 0 3px;
      background: var(--cat-bg); color: var(--cat-ink);
      border-left: 3px solid var(--cat); border-radius: 5px;
      font-size: 11.5px; font-weight: 600; padding: 3px 7px;
      line-height: 1.35;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      pointer-events: auto; cursor: pointer;
      transition: filter 140ms ease;
    }
    .cal-month .ev:hover { filter: brightness(0.97); }
    .cal-month .ev .ed {
      display: inline-block; width: 6px; height: 6px; border-radius: 50%;
      background: var(--cat); margin-right: 5px; vertical-align: 1px;
    }
    .cal-month .evmore {
      margin: 0 3px; padding: 2px 7px;
      font-size: 11px; font-weight: 600; color: var(--text-tertiary);
      pointer-events: auto; cursor: pointer;
    }
    .cal-month .evmore:hover { color: var(--teal-pebble); }

    /* ── YEAR view ────────────────────────────────────────── */
    .cal-year {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
    }
    @media (max-width: 820px) {
      .cal-year { grid-template-columns: repeat(2, 1fr); }
    }
    .ym {
      text-align: left;
      background: var(--glass-fill);
      border: 1px solid var(--hairline);
      border-radius: 13px; padding: 13px 13px 11px;
      cursor: pointer; transition: border-color 160ms ease,
        box-shadow 160ms ease, transform 160ms ease, background 160ms ease;
      font-family: var(--font-body);
    }
    .ym:hover {
      border-color: var(--teal-pebble);
      box-shadow: 0 8px 20px -10px rgba(0, 0, 0, 0.25);
      transform: translateY(-2px);
    }
    .ym.cur {
      border-color: var(--teal-pebble);
      background: linear-gradient(180deg, rgba(61, 155, 143, 0.10), transparent 60%);
    }
    .ym-name {
      font-family: var(--font-display); font-weight: 700; font-size: 14px;
      color: var(--text-primary); margin-bottom: 7px;
    }
    .ym.cur .ym-name { color: var(--teal-pebble); }
    .ym-dow {
      display: grid; grid-template-columns: repeat(7, 1fr); margin-bottom: 3px;
    }
    .ym-dow span {
      text-align: center; font-size: 9px; font-weight: 700;
      color: var(--text-tertiary);
    }
    .ym-days { display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; }
    .ym-d {
      aspect-ratio: 1; display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      font-size: 10.5px; font-weight: 600; color: var(--text-secondary);
      position: relative; border-radius: 5px;
    }
    .ym-d.e { color: transparent; }
    .ym-d.today { background: var(--teal-pebble); color: #fff; font-weight: 800; }
    .ym-d .yd {
      width: 4px; height: 4px; border-radius: 50%;
      background: var(--cat); position: absolute; bottom: 1px;
    }

    /* ── Cairn stack: flat polished pebbles in solid colors with
       specular highlights, mirroring the app icon. Each stone is a
       true ellipse (border-radius 50% on a wider-than-tall box),
       solid-colored — terracotta on top, teal below — with a soft
       elongated upper highlight + a small specular dot, and a
       darker inner shadow on the bottom rim for 3D shading. */
    .cairn-stack {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      padding: 22px 6px 20px;
      /* Faint ground-ring under the base, like the icon's drawn
         arc. Drawn as a soft horizontal vignette. */
      background:
        radial-gradient(
          ellipse 60% 14% at 50% calc(100% - 26px),
          rgba(61, 155, 143, 0.16) 0%,
          rgba(61, 155, 143, 0) 70%
        );
    }
    .stone {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
    }
    .pebble {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      /* Default pebble palette (teal); specific stones override. */
      background:
        radial-gradient(
          ellipse 80% 60% at 50% 30%,
          #4eb2a4 0%,
          #3d9b8f 55%,
          #1f5c54 100%
        );
      box-shadow:
        0 6px 14px -6px rgba(0, 0, 0, 0.38),
        inset 0 -8px 14px rgba(0, 0, 0, 0.24),
        inset 0 6px 14px rgba(255, 255, 255, 0.06);
      transition: transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1),
        filter 240ms ease;
    }
    /* Elongated specular: soft white smear across the upper face. */
    .pebble::before {
      content: '';
      position: absolute;
      top: 16%;
      left: 18%;
      right: 18%;
      height: 22%;
      border-radius: 50%;
      background: radial-gradient(
        ellipse 100% 100% at 50% 50%,
        rgba(255, 255, 255, 0.55) 0%,
        rgba(255, 255, 255, 0.18) 55%,
        rgba(255, 255, 255, 0) 100%
      );
      filter: blur(2px);
      pointer-events: none;
    }
    /* Catchlight dot deferred — the elongated upper smear is enough
       texture without it. Reintroduce later if needed. */
    .stone:hover .pebble {
      transform: translateY(-2px);
      filter: brightness(1.04);
    }
    /* Drop hover: bright ring + lift so the receiving stone reads as
       the active target during a drag. */
    .pebble-drop {
      outline: 2px dashed rgba(255, 255, 255, 0.7);
      outline-offset: 4px;
      transform: translateY(-3px) scale(1.02);
      filter: brightness(1.08);
    }
    .stone-chips member-chip.is-draggable {
      cursor: grab;
    }
    .stone-chips member-chip.is-draggable:active {
      cursor: grabbing;
    }
    /* Sizes follow the icon's progression — flatter + wider as the
       stack descends, like real river stones balanced on each other. */
    .pebble-self {
      width: 120px;
      height: 44px;
      background:
        radial-gradient(
          ellipse 80% 60% at 50% 30%,
          #d4866a 0%,
          #a85f3e 55%,
          #5e3220 100%
        );
    }
    .pebble-family {
      width: 221px;
      height: 66px;
      background:
        radial-gradient(
          ellipse 80% 60% at 50% 30%,
          #52baad 0%,
          #3d9b8f 55%,
          #1f5c54 100%
        );
    }
    .pebble-extended {
      width: 340px;
      height: 80px;
      background:
        radial-gradient(
          ellipse 80% 60% at 50% 30%,
          #46a89c 0%,
          #348177 55%,
          #194c45 100%
        );
    }
    .pebble-subgroup {
      width: 150px;
      height: 50px;
      /* All sub-group pebbles share one green (matches the Family/
         Extended teal family) — the terracotta/teal alternation read
         as inconsistent, not intentional. */
      background:
        radial-gradient(
          ellipse 80% 60% at 50% 30%,
          #46a89c 0%,
          #348177 55%,
          #194c45 100%
        );
    }
    .stone-chips {
      display: inline-flex;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    .stone-chips member-chip {
      /* Slim 1px ring instead of the thick cream halo — matches how
         avatars are shown elsewhere (attendees row on trip cards). */
      box-shadow:
        0 0 0 1px rgba(255, 248, 235, 0.5),
        0 1px 3px rgba(0, 0, 0, 0.28);
      border-radius: 999px;
      margin-left: -6px;
      transition: transform 180ms ease;
    }
    .stone-chips member-chip:first-child {
      margin-left: 0;
    }
    .stone:hover .stone-chips member-chip {
      transform: translateY(-1px);
    }
    .stone-more {
      margin-left: 6px;
      padding: 2px 7px;
      font-size: 11px;
      font-weight: 700;
      color: #fff;
      background: rgba(0, 0, 0, 0.28);
      border-radius: 999px;
      font-variant-numeric: tabular-nums;
      box-shadow: 0 0 0 1px rgba(255, 248, 235, 0.5);
    }
    .stone-label {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 12px;
      color: var(--text-secondary);
      letter-spacing: -0.005em;
      white-space: nowrap;
    }
    /* Empty stones: hollow dashed ellipse — invites a click without
       breaking the pebble silhouette. */
    .pebble-empty {
      background: transparent;
      border: 1.5px dashed rgba(255, 248, 235, 0.22);
      box-shadow: none;
      color: var(--text-tertiary);
      font-size: 12px;
      font-style: italic;
      padding: 0 18px;
    }
    .pebble-empty::before,
    .pebble-empty::after {
      display: none;
    }
    .stone:hover .pebble-empty {
      transform: none;
      border-color: rgba(255, 248, 235, 0.4);
      color: var(--text-secondary);
      filter: none;
    }
    .subgroup-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px 18px;
      margin-top: 4px;
      max-width: 100%;
    }
    @media (max-width: 560px) {
      .pebble-self { width: 100px; height: 38px; }
      .pebble-family { width: 220px; height: 58px; }
      .pebble-extended { width: 270px; height: 68px; }
      .pebble-subgroup { width: 130px; height: 46px; }
      .subgroup-row { gap: 12px; }
    }
    /* Onboarding hint shown when the cairn is mostly empty (just self).
       Sits above the meta with a soft glow + gentle suggestion. */
    .cairn-hint {
      margin-top: 12px;
      padding: 14px 16px;
      border-radius: var(--radius-tile);
      background: linear-gradient(
        135deg,
        rgba(61, 155, 143, 0.16) 0%,
        rgba(212, 168, 67, 0.12) 100%
      );
      border: 1px solid rgba(255, 248, 235, 0.14);
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .cairn-hint-icon {
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      border-radius: 10px;
      background: var(--gradient-sage);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
    }
    .cairn-hint-icon svg { width: 18px; height: 18px; }
    .cairn-hint-body {
      flex: 1;
      min-width: 0;
    }
    .cairn-hint-title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 13.5px;
      letter-spacing: -0.005em;
    }
    .cairn-hint-sub {
      font-size: 12px;
      color: var(--text-secondary);
      margin-top: 2px;
      line-height: 1.5;
    }
    .cairn-hint-cta {
      flex-shrink: 0;
      background: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      border-radius: var(--radius-pill);
      padding: 7px 14px;
      font: inherit;
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      box-shadow:
        0 3px 10px rgba(139, 90, 62, 0.32),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
    }
    .cairn-hint-cta:hover {
      background: var(--gradient-cta-hover);
    }

    /* ── Top-nav tabs (centre column — replaced the Pebble search) ──
       Lives inside .topbar's auto centre column so it stays visually
       centred in the viewport via the same 1fr/auto/1fr grid the
       search bar used. The Pebble entry-point moved to the Pebble
       tab. */
    .tabs {
      display: inline-flex;
      gap: 3px;
      padding: 5px;
      border-radius: var(--radius-pill);
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid var(--glass-border);
      /* Anchor for the absolutely-positioned .tab-slider — the slider
         rides inside .tabs padding-box and slides left/right to
         overlay whichever tab is active. */
      position: relative;
    }
    /* The active visual lives on this ONE absolutely-positioned
       element — it tracks the active tab by transforming horizontally,
       giving a true iOS-26 liquid-glass pill that morphs across the
       bar rather than one pill fading off and another fading in.
       Position + width are set inline by _positionTabSlider() (Lit
       firstUpdated / updated). */
    .tab-slider {
      position: absolute;
      top: 5px;
      bottom: 5px;
      left: 0;
      width: 0;
      transform: translateX(0);
      border-radius: var(--radius-pill);
      pointer-events: none;
      z-index: 0;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.32) 0%,
        rgba(255, 255, 255, 0.12) 55%,
        rgba(255, 255, 255, 0.22) 100%
      );
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow:
        0 6px 18px rgba(20, 50, 46, 0.34),
        inset 0 1px 0 rgba(255, 255, 255, 0.55),
        inset 0 -1px 0 rgba(0, 0, 0, 0.06);
      transition:
        transform 0.42s cubic-bezier(0.4, 0, 0.2, 1),
        width 0.42s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
    .tab-slider.ready {
      opacity: 1;
    }
    .tab {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 16px;
      border: none;
      background: transparent;
      color: var(--chrome-fg);
      cursor: pointer;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13px;
      letter-spacing: -0.005em;
      border-radius: var(--radius-pill);
      white-space: nowrap;
      /* Above the slider so the label stays crisp on the liquid-glass
         pill underneath. */
      position: relative;
      z-index: 1;
      transition: color 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .tab svg {
      width: 16px;
      height: 16px;
    }
    .tab:hover {
      color: var(--chrome-fg-strong);
    }
    .tab.active {
      color: #fff;
    }
    /* Below ~1000px the labels drop to icon-only so 5 tabs + brand +
       Activity + avatar still fit the 68px bar. */
    @media (max-width: 1000px) {
      .tab span {
        display: none;
      }
      .tab {
        padding: 9px 12px;
      }
    }
    /* On phones the centre column scrolls horizontally rather than
       wrapping — the bar stays one row at the existing 60px height. */
    @media (max-width: 768px) {
      .topbar .tabs {
        overflow-x: auto;
        max-width: 100%;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
      }
      .topbar .tabs::-webkit-scrollbar {
        display: none;
      }
    }

    /* ── Mobile bottom tab bar (≤720px) — the PebblePath app's
       mental model. Rendered as a SIBLING of .topbar so its
       position:fixed resolves to the viewport; a .topbar ancestor's
       backdrop-filter would otherwise trap it (the documented
       containing-block trap). Replaces the old icon-only topbar
       shrink with a proper bottom bar. */
    .bottomnav {
      display: none;
    }
    @media (max-width: 720px) {
      .topbar {
        grid-template-columns: 1fr auto;
        padding: 0 16px;
        height: 60px;
      }
      .topbar .tabs {
        display: none;
      }
      .bottomnav {
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 40;
        padding: 8px 6px calc(8px + env(safe-area-inset-bottom));
        background: var(--chrome-bg);
        backdrop-filter: blur(28px) saturate(180%);
        -webkit-backdrop-filter: blur(28px) saturate(180%);
        border-top: 1px solid var(--glass-border);
      }
      .bn-tab {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        padding: 6px 2px;
        border: none;
        background: transparent;
        color: var(--chrome-fg);
        cursor: pointer;
        font-family: var(--font-body);
        font-weight: 600;
        font-size: 10px;
        letter-spacing: -0.005em;
        border-radius: 12px;
        /* Above the bn-slider so the label/icon stay crisp on the
           liquid-glass pill underneath. */
        position: relative;
        z-index: 1;
        transition: color 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .bn-tab svg {
        width: 21px;
        height: 21px;
      }
      .bn-tab.active {
        /* teal-pebble (#3d9b8f) was too dim on the dark-green bar;
           a bright light-teal reads clearly as the active tab. */
        color: #8fe0d2;
      }
      /* Mirror of the top .tab-slider — same iOS-26 liquid-glass
         pill that rides inside the bottom bar, sized for the larger
         vertical bn-tab content (icon + label). Position+width set
         inline by _positionTabSlider(). Larger corner radius (14)
         wraps the vertical bn-tab a touch more generously than the
         12px on the buttons themselves. */
      .bn-slider {
        position: absolute;
        top: 8px;
        bottom: calc(8px + env(safe-area-inset-bottom));
        left: 0;
        width: 0;
        transform: translateX(0);
        border-radius: 14px;
        pointer-events: none;
        z-index: 0;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.32) 0%,
          rgba(255, 255, 255, 0.12) 55%,
          rgba(255, 255, 255, 0.22) 100%
        );
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.4);
        box-shadow:
          0 6px 18px rgba(20, 50, 46, 0.34),
          inset 0 1px 0 rgba(255, 255, 255, 0.55),
          inset 0 -1px 0 rgba(0, 0, 0, 0.06);
        transition:
          transform 0.42s cubic-bezier(0.4, 0, 0.2, 1),
          width 0.42s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
      }
      .bn-slider.ready {
        opacity: 1;
      }
      main {
        padding: 18px 16px calc(82px + env(safe-area-inset-bottom));
      }
    }

    /* Per-tab privacy scope badge (Children/Pebble are parent-only —
       surfaces the "without sharing everything" boundary visibly). */
    .scope-chip {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 7px 14px;
      border-radius: var(--radius-pill);
      font-size: 12.5px;
      font-weight: 600;
      background: rgba(198, 123, 92, 0.16);
      color: var(--ink-terracotta);
      border: 1px solid rgba(198, 123, 92, 0.4);
    }
    .scope-chip svg {
      width: 13px;
      height: 13px;
    }

    /* Today tab — compact child snapshot. */
    .today-child {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .today-child .tc-meta {
      flex: 1;
      min-width: 0;
    }
    .today-child .tc-name {
      font-family: var(--font-display);
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
    .today-child .tc-sub {
      color: var(--text-secondary);
      font-size: 13.5px;
      margin-top: 3px;
    }
    .today-child .tc-pct {
      font-family: var(--font-display);
      font-size: 28px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .tc-daily {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 248, 235, 0.08);
    }
    .tc-daily-tag {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--teal-pebble);
      margin-bottom: 5px;
    }
    .tc-daily-title {
      font-family: var(--font-display);
      font-size: 15.5px;
      font-weight: 600;
      letter-spacing: -0.005em;
    }

    /* ── Concept-parity classes (Today + My Cairn rebuilds) ─────── */
    .scope {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 7px 14px;
      border-radius: var(--radius-pill);
      font-size: 12.5px;
      font-weight: 600;
      border: 1px solid var(--glass-border);
    }
    .scope svg {
      width: 13px;
      height: 13px;
    }
    .scope.private {
      background: rgba(198, 123, 92, 0.16);
      color: var(--ink-terracotta);
      border-color: rgba(198, 123, 92, 0.4);
    }
    .scope.shared {
      background: rgba(61, 155, 143, 0.16);
      color: var(--ink-teal);
      border-color: rgba(61, 155, 143, 0.4);
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 18px;
      align-items: start;
    }
    @media (max-width: 1024px) {
      .grid-2 {
        grid-template-columns: 1fr;
      }
    }
    /* Today top row (Portal v4): left column stacks the half-width
       child card + Pebble's-daily; "Coming up" sits right, stretched
       to the full height of the left stack. */
    .today-top {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 18px;
      align-items: stretch;
    }
    .today-top-left {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    .today-top-left .daily {
      flex: 1;
    }
    /* 2026-05-28 reorg — 2-column Home grid below the Family Brief.
       Left col: next-trip + Coming up. Right col: child card + Growth
       insights. Each column is an independent stack (natural heights);
       align-items:start so a tall left column doesn't stretch the
       right one. */
    .today-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      align-items: stretch; /* columns equal height → bottom cards match */
      margin-top: 4px;
    }
    .today-col {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    /* Child card locked to the next-trip card's height (top of each
       column). */
    .today-col > .home-child-card {
      height: 200px;
      flex: 0 0 auto;
    }
    /* Bottom cards (Upcoming Activities / Growth insights) fill the
       remaining column height equally — same height across both. */
    .today-col > glass-panel.fb-bottom-card {
      flex: 1 1 auto;
      min-height: 0;
    }
    /* Growth-insights inner spacing — gap between the insight cards,
       matching the Children tab. */
    .fb-insights-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    /* 2026-05-28 — Home child card mirrors the Children-tab hero:
       per-child theme gradient + playgroundv2 watermark + left-side
       theme overlay + white text. (--theme + --wm set inline.) */
    .home-child-card {
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      gap: 22px;
      flex-wrap: wrap;
      padding: 24px;
      border-radius: var(--radius-card);
      color: #fff;
      background: linear-gradient(
        135deg,
        var(--theme, var(--teal-pebble)) 0%,
        color-mix(in srgb, var(--theme, var(--teal-pebble)) 58%, #ffffff) 100%
      );
      box-shadow: 0 6px 22px rgba(20, 50, 46, 0.22);
    }
    .home-child-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--wm) center / 100% auto no-repeat;
      opacity: 0.15;
      filter: blur(2px);
      z-index: 0;
      pointer-events: none;
    }
    .home-child-card::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 62%;
      background: linear-gradient(
        90deg,
        color-mix(in srgb, var(--theme, var(--teal-pebble)) 88%, transparent) 0%,
        color-mix(in srgb, var(--theme, var(--teal-pebble)) 55%, transparent) 50%,
        transparent 100%
      );
      z-index: 0;
      pointer-events: none;
    }
    .home-child-card > * {
      position: relative;
      z-index: 1;
    }
    /* White text overrides for the themed surface (reuse the existing
       .child-meta / .child-progress inner structure). */
    .home-child-card .child-photo {
      background: rgba(255, 255, 255, 0.85);
    }
    .home-child-card .child-meta h2 {
      color: #fff;
    }
    .home-child-card .child-meta .sub {
      color: rgba(255, 255, 255, 0.85);
    }
    .home-child-card .child-progress {
      border-left-color: rgba(255, 255, 255, 0.28);
    }
    .home-child-card .child-progress .big {
      color: #fff;
    }
    .home-child-card .child-progress .lbl {
      color: rgba(255, 255, 255, 0.85);
    }
    /* The Recently-achieved / Growth-insight row sits directly under
       .today-top. Use the SAME column template so the Growth-insight
       card is exactly as wide as the "Coming up" card above it and
       the two right-hand cards align vertically (the shared .grid-2
       is 1fr 1.2fr — slightly wider — so it gets its own override
       here without disturbing My Cairn's grid-2). */
    .today-insight-row {
      grid-template-columns: 1fr 1.1fr;
      /* Override the parent .grid-2's align-items:start so the two
         glass-panels in this row stretch to the same height (the
         Recently-achieved card was sizing to its short content while
         the Growth-insight card was taller). */
      align-items: stretch;
    }
    .today-insight-row > glass-panel {
      height: 100%;
    }
    @media (max-width: 1024px) {
      .today-top {
        grid-template-columns: 1fr;
      }
      .today-insight-row {
        grid-template-columns: 1fr;
      }
      .today-grid {
        grid-template-columns: 1fr;
      }
    }
    .gico {
      width: 38px;
      height: 38px;
      border-radius: 11px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .gico svg {
      width: 19px;
      height: 19px;
    }
    .gico.trip {
      background: var(--gradient-tide);
      color: #0d2840;
    }
    .gico.event {
      background: var(--gradient-celebration);
      color: #5a3a1a;
    }
    /* External/imported sources — deliberately distinct from the
       trip (tide) + celebration (amber) palettes (Ellie ③). */
    .gico.holiday {
      background: var(--gradient-sage);
      color: #fff;
    }
    .gico.school {
      background: var(--gradient-cta);
      color: #fff;
    }
    .ms-row {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 13px 4px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.07);
    }
    .ms-row:last-child {
      border-bottom: none;
    }
    .ms-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .ms-dot.motor {
      background: #6b9ac4;
    }
    .ms-dot.language {
      background: #d4a843;
    }
    .ms-dot.social {
      background: #c98a8a;
    }
    .ms-dot.cognitive {
      background: #8b7bb5;
    }
    .ms-row .t {
      flex: 1;
      font-size: 14.5px;
      font-weight: 500;
    }
    .ms-row .t small {
      display: block;
      color: var(--text-tertiary);
      font-size: 12px;
      font-weight: 400;
      margin-top: 2px;
    }
    .ms-stat {
      padding: 4px 11px;
      border-radius: var(--radius-pill);
      font-size: 11.5px;
      font-weight: 600;
      white-space: nowrap;
    }
    .ms-stat.done {
      background: rgba(79, 194, 107, 0.18);
      color: var(--ink-green);
    }
    .ms-stat.emerging {
      background: rgba(212, 168, 67, 0.18);
      color: var(--ink-amber);
    }
    .ms-stat.up {
      background: var(--field-bg);
      color: var(--text-secondary);
      border: 1px solid var(--hairline);
    }
    .insight {
      display: flex;
      gap: 14px;
      padding: 16px;
      border-radius: var(--radius-tile);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      margin-bottom: 12px;
    }
    .insight:last-child {
      margin-bottom: 0;
    }
    .insight .strip {
      width: 4px;
      border-radius: 999px;
      flex-shrink: 0;
    }
    .insight.strength .strip {
      background: var(--teal-pebble);
    }
    .insight.watching .strip {
      background: var(--amber-glow);
    }
    .insight.connection .strip {
      background: var(--purple-muted);
    }
    .insight.nudge .strip {
      background: var(--terracotta);
    }
    .insight .ikind {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 5px;
      color: var(--text-secondary);
    }
    .insight.strength .ikind {
      color: var(--ink-teal);
    }
    .insight.watching .ikind {
      color: var(--ink-amber);
    }
    .insight.connection .ikind {
      color: var(--ink-purple);
    }
    .insight.nudge .ikind {
      color: var(--ink-terracotta);
    }
    .insight h4 {
      margin: 0 0 5px;
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 600;
    }
    .insight p {
      margin: 0;
      font-size: 13.5px;
      color: var(--text-secondary);
      line-height: 1.55;
    }
    .daily {
      border-radius: var(--radius-card);
      padding: 24px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #3d9b8f 0%, #1f5c54 100%);
      box-shadow: 0 12px 30px rgba(31, 92, 84, 0.4);
    }
    .daily::after {
      content: '';
      position: absolute;
      right: -30px;
      top: -30px;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.14), transparent 70%);
    }
    .daily .tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 10px;
    }
    .daily .tag svg {
      width: 13px;
      height: 13px;
    }
    .daily h3 {
      margin: 0 0 8px;
      font-family: var(--font-display);
      font-size: 19px;
      color: #fff;
      letter-spacing: -0.01em;
    }
    .daily p {
      margin: 0 0 16px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.88);
      line-height: 1.6;
    }
    .daily .ask {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 8px 16px;
      border-radius: var(--radius-pill);
      background: rgba(255, 255, 255, 0.16);
      border: 1px solid rgba(255, 255, 255, 0.28);
      color: #fff;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
    }
    .daily .ask:hover {
      background: rgba(255, 255, 255, 0.24);
    }
    /* 2026-05-28 — next-trip card (replaces the per-child Pebble Daily
       card). Fixed 200px height; the child card is locked to match. */
    .next-trip {
      position: relative;
      display: block;
      width: 100%;
      height: 200px;
      flex: 0 0 auto;
      padding: 0;
      border: none;
      border-radius: var(--radius-card);
      overflow: hidden;
      cursor: pointer;
      text-align: left;
      background-size: cover;
      background-position: center;
      box-shadow: 0 12px 30px rgba(31, 92, 84, 0.22);
    }
    .next-trip .nt-scrim {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 38%,
        rgba(20, 12, 6, 0.62) 100%
      );
    }
    .next-trip .nt-overlay {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 18px 20px;
      z-index: 1;
    }
    .next-trip .nt-eyebrow {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 4px;
    }
    .next-trip .nt-title {
      font-family: var(--font-display);
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      letter-spacing: -0.01em;
      line-height: 1.1;
    }
    .next-trip .nt-dates {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.85);
      margin-top: 3px;
    }
    .next-trip.empty {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--glass-fill-strong);
      border: 1px dashed var(--glass-border-strong);
      box-shadow: none;
    }
    .next-trip .nt-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      padding: 24px;
      text-align: center;
      color: var(--text-secondary);
    }
    .next-trip .nt-empty-title {
      font-weight: 600;
      font-size: 15px;
      color: var(--text-primary);
    }
    .next-trip .nt-empty-sub {
      font-size: 13px;
      color: var(--ink-teal);
    }
    /* 2026-05-28 — Family Brief mirrors the iOS FamilyBriefHeroCard:
       daybreak-photo background (blur + frost + warm cream wash), white
       border + teal shadow, static dark ink (the surface is always light
       even in Portal dark mode), pebble bullet markers + 2-tone text. */
    .family-brief {
      margin-bottom: 18px;
    }
    /* Transient "self-heal" state while today's brief is generated. */
    .fb-prep-card {
      display: flex;
      flex-direction: column;
      gap: 8px;
      justify-content: center;
      min-height: 120px;
      padding: 22px 24px;
      border-radius: var(--radius-card);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
    }
    .fb-tag-lite {
      font-family: var(--font-display);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.12em;
      color: var(--ink-teal);
    }
    .fb-prep-text {
      font-size: 14px;
      color: var(--text-secondary);
    }
    .fb-card {
      position: relative;
      min-height: 255px; /* 2026-05-28 — reduced 15% (was 300) per Thomas */
      border-radius: var(--radius-card);
      overflow: hidden;
      border: 1.5px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0 8px 24px rgba(61, 155, 143, 0.25);
    }
    .fb-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
    }
    .fb-bg-photo {
      position: absolute;
      inset: -10px; /* bleed past edges so blur doesn't show a seam */
      background-position: center;
      background-size: cover;
      /* 2026-05-28 — blur reduced 30% (2.5 -> 1.75) per Thomas; applies to
         both light (daybreak) and dark (Stillwater) since they share this
         element. */
      filter: blur(1.75px);
    }
    .fb-bg-frost {
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.225);
    }
    .fb-bg-wash {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        rgba(255, 249, 237, 0.74) 0%,
        rgba(255, 246, 232, 0.42) 50%,
        rgba(255, 244, 227, 0.1) 100%
      );
    }
    .fb-content {
      position: relative;
      z-index: 1;
      padding: 20px 22px; /* 2026-05-28 — tightened for the 15% shorter card */
    }
    .fb-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 12px;
    }
    .fb-tag {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-family: var(--font-display);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #2d7a70; /* static teal-dark — surface is always light */
    }
    .fb-fresh {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .fb-fresh-time {
      font-size: 12px;
      font-weight: 500;
      color: rgba(44, 62, 64, 0.5);
    }
    .fb-refresh {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      flex-shrink: 0;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: #2d7a70;
      cursor: pointer;
    }
    .fb-refresh:hover:not(:disabled) {
      background: rgba(45, 122, 112, 0.12);
    }
    .fb-refresh:disabled {
      opacity: 0.4;
      cursor: default;
    }
    .fb-refresh.spinning svg {
      animation: fb-spin 0.9s linear infinite;
    }
    @keyframes fb-spin {
      to {
        transform: rotate(360deg);
      }
    }
    .fb-title {
      margin: 0 0 12px;
      font-family: var(--font-display);
      font-size: 20px;
      font-weight: 700;
      line-height: 1.05;
      letter-spacing: -0.01em;
      color: #1f5c54; /* brand green — matches iOS FamilyBriefHeroCard headerColor */
    }
    .fb-bullets {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 11px;
    }
    .fb-bullet {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .fb-peb-marker {
      flex-shrink: 0;
      width: 12px;
      height: 10px;
      margin-top: 6px;
    }
    .fb-text {
      font-size: 15px;
      line-height: 1.4;
      /* 2026-05-28 — uniform + softened (pure #2c3e40 read too dark).
         Matches the iOS inkSoft body tone; distinction is weight only. */
      color: rgba(44, 62, 64, 0.66);
    }
    .fb-lead {
      font-weight: 600;
      color: rgba(44, 62, 64, 0.66); /* same tone as the remainder */
    }
    .fb-body {
      margin: 0;
      font-size: 15px;
      line-height: 1.55;
      color: rgba(44, 62, 64, 0.66);
    }
    /* 2026-05-28 — DARK treatment (Portal dark mode = no html.theme-light),
       mirroring the iOS FamilyBriefHeroCard Stillwater treatment: moody
       photo (chosen in JS) + black scrim instead of the cream wash + near
       white text + bright teal-glow eyebrow + softer border, frost dropped. */
    .fb-dark .fb-card {
      border-color: rgba(255, 255, 255, 0.22);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
    }
    .fb-dark .fb-bg-frost {
      display: none;
    }
    .fb-dark .fb-bg-wash {
      background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.55) 0%,
        rgba(0, 0, 0, 0.32) 50%,
        rgba(0, 0, 0, 0.12) 100%
      );
    }
    .fb-dark .fb-tag {
      color: #7dd4c8;
    }
    .fb-dark .fb-refresh {
      color: #7dd4c8;
    }
    .fb-dark .fb-refresh:hover:not(:disabled) {
      background: rgba(125, 212, 200, 0.18);
    }
    .fb-dark .fb-fresh-time {
      color: rgba(246, 244, 239, 0.55);
    }
    .fb-dark .fb-title {
      color: #5cbfb0; /* brand green (dark) — matches iOS headerColor dark */
    }
    .fb-dark .fb-text {
      color: rgba(246, 244, 239, 0.9);
    }
    .fb-dark .fb-lead {
      color: #f6f4ef;
    }
    .fb-dark .fb-body {
      color: rgba(246, 244, 239, 0.9);
    }
    /* 2026-05-29 — coordination footer in the Family Brief (mirrors iOS):
       today's swap line (two parent avatars + 2-tone text) + a "Daily roles
       & routines" link into What Pebble knows. Always-light surface, so
       static inks; .fb-dark overrides for the Stillwater treatment. */
    .fb-coord {
      margin-top: 14px;
      padding-top: 13px;
      border-top: 1px solid rgba(44, 62, 64, 0.12);
    }
    .fb-coord-row {
      display: flex;
      align-items: center;
      gap: 11px;
    }
    .fb-coord-faces {
      display: inline-flex;
      flex-shrink: 0;
    }
    .fb-coord-faces member-chip + member-chip {
      margin-left: -9px;
    }
    .fb-coord-text {
      flex: 1;
      min-width: 0;
      font-size: 14px;
      line-height: 1.4;
      color: rgba(44, 62, 64, 0.66);
    }
    .fb-coord-lead {
      font-weight: 600;
      color: #2c3e40;
    }
    .fb-roles-link {
      margin-left: auto;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 6px 12px;
      border: none;
      border-radius: var(--radius-pill);
      background: rgba(45, 122, 112, 0.14);
      color: #2d7a70;
      font-family: var(--font-body);
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
    }
    .fb-roles-link:hover {
      background: rgba(45, 122, 112, 0.22);
    }
    .fb-dark .fb-coord {
      border-top-color: rgba(255, 255, 255, 0.16);
    }
    .fb-dark .fb-coord-text {
      color: rgba(246, 244, 239, 0.9);
    }
    .fb-dark .fb-coord-lead {
      color: #f6f4ef;
    }
    .fb-dark .fb-roles-link {
      background: rgba(125, 212, 200, 0.18);
      color: #7dd4c8;
    }
    .fb-dark .fb-roles-link:hover {
      background: rgba(125, 212, 200, 0.28);
    }
    /* What Pebble knows — "Daily roles & routines" panel role rows. */
    .wpk-role-row {
      align-items: center;
    }
    .wpk-role-faces {
      display: inline-flex;
      flex-shrink: 0;
    }
    .wpk-role-faces member-chip + member-chip {
      margin-left: -10px;
    }
    .wpk-role-unset {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1.5px dashed rgba(61, 155, 143, 0.5);
      color: var(--teal-pebble);
      font-weight: 700;
      font-size: 13px;
    }
    .wpk-role-today {
      margin-left: auto;
      align-self: center;
      flex-shrink: 0;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--terracotta);
      background: rgba(198, 123, 92, 0.14);
      border: 1px solid rgba(198, 123, 92, 0.3);
      padding: 2px 7px;
      border-radius: var(--radius-pill);
    }
    /* Close-the-loop Slice 4 (2026-05-28) — "What Pebble Knows". */
    .wpk-back {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      margin: 0 0 6px;
      padding: 6px 12px 6px 8px;
      background: none;
      border: none;
      color: var(--ink-teal);
      font-family: var(--font-body);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border-radius: var(--radius-pill);
    }
    .wpk-back:hover {
      background: rgba(61, 155, 143, 0.1);
    }
    .wpk {
      margin-top: 8px;
    }
    .wpk-intro {
      font-size: 13px;
      color: var(--text-secondary);
      margin: 0 0 14px;
      padding: 0 2px;
      line-height: 1.5;
      max-width: 640px;
    }
    .wpk .section-head h3 {
      font-family: var(--font-display);
      font-size: 15px;
      margin: 0;
      letter-spacing: -0.01em;
    }
    .wpk-sub {
      font-size: 12px;
      color: var(--text-secondary);
      margin-bottom: 10px;
    }
    .wpk-empty {
      font-size: 13px;
      color: var(--text-tertiary);
      padding: 6px 2px;
      line-height: 1.5;
    }
    .wpk-rows {
      display: flex;
      flex-direction: column;
    }
    .wpk-row {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px solid var(--glass-border);
    }
    .wpk-row:last-child {
      border-bottom: none;
    }
    .wpk-ico {
      flex-shrink: 0;
      width: 22px;
      color: var(--ink-teal);
      display: inline-flex;
      align-items: center;
      padding-top: 1px;
    }
    .wpk-body {
      flex: 1;
      min-width: 0;
    }
    .wpk-primary {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-primary);
      line-height: 1.4;
    }
    .wpk-secondary {
      font-size: 13px;
      color: var(--text-secondary);
      margin-top: 1px;
    }
    .wpk-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      align-items: center;
      margin-top: 5px;
    }
    .wpk-scope {
      font-size: 11px;
      font-weight: 600;
      padding: 1px 8px;
      border-radius: var(--radius-pill);
      border: 1px solid currentColor;
      white-space: nowrap;
    }
    .wpk-scope.family {
      color: var(--ink-teal);
    }
    .wpk-scope.child {
      color: var(--ink-blue);
    }
    .wpk-scope.member {
      color: var(--ink-terracotta);
    }
    .wpk-hint {
      font-size: 11px;
      font-style: italic;
      color: var(--text-tertiary);
    }
    .wpk-toggle {
      margin-top: 8px;
      background: none;
      border: none;
      color: var(--ink-teal);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      padding: 4px 0;
    }
    /* My packing lists (WPK detail). */
    .wpk-packing {
      margin-top: 16px;
    }
    .pkg-del {
      flex-shrink: 0;
      border: none;
      background: transparent;
      color: var(--text-tertiary);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: var(--radius-pill);
    }
    .pkg-del:hover {
      color: var(--terracotta, #c67b5c);
      background: rgba(198, 123, 92, 0.1);
    }
    .child-card {
      display: flex;
      align-items: center;
      gap: 22px;
      flex-wrap: wrap;
    }
    .child-photo {
      position: relative;
      display: inline-flex;
      border-radius: 999px;
      padding: 3px;
      background: var(--teal-pebble);
    }
    .child-meta {
      min-width: 0;
    }
    .child-meta h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 26px;
      letter-spacing: -0.02em;
    }
    .child-meta .sub {
      color: var(--text-secondary);
      font-size: 14px;
      margin-top: 3px;
    }
    .child-meta .age-pill {
      display: inline-block;
      margin-top: 10px;
      padding: 4px 12px;
      border-radius: var(--radius-pill);
      font-size: 12.5px;
      font-weight: 600;
      background: rgba(61, 155, 143, 0.18);
      color: var(--ink-teal);
      border: 1px solid rgba(61, 155, 143, 0.35);
    }
    /* Identity · headline-stat as ONE left-aligned cluster with a
       hairline divider (consistent with the Children card). */
    .child-progress {
      margin-left: 6px;
      padding-left: 28px;
      border-left: 1px solid var(--hairline);
      text-align: left;
    }
    .child-progress .big {
      font-family: var(--font-display);
      font-size: 30px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .child-progress .lbl {
      color: var(--text-secondary);
      font-size: 12.5px;
      margin-top: 2px;
    }
    /* Phones: keep the Today hero card a SINGLE simple row — avatar ·
       name/age · % on one line (Thomas). Shrink the % to fit beside
       the identity; drop the divider/indent. */
    @media (max-width: 560px) {
      .child-card {
        flex-wrap: nowrap;
        align-items: center;
      }
      .child-meta {
        flex: 1;
        min-width: 0;
      }
      .child-meta h2 { font-size: 20px; }
      .child-meta .sub { font-size: 13px; }
      .child-progress {
        flex-shrink: 0;
        margin-left: 0;
        padding-left: 0;
        border-left: none;
        text-align: right;
      }
      .child-progress .big { font-size: 22px; }
      .child-progress .lbl { font-size: 11px; }
    }
    .cta-card {
      display: flex;
      align-items: center;
      gap: 18px;
      flex-wrap: wrap;
    }
    .cta-card .ic {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background: var(--gradient-cta);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-shrink: 0;
    }
    .cta-card .ic svg {
      width: 22px;
      height: 22px;
    }
    .cta-card .tx {
      flex: 1;
      min-width: 200px;
    }
    .cta-card .tx h4 {
      margin: 0 0 4px;
      font-family: var(--font-display);
      font-size: 16px;
    }
    .cta-card .tx p {
      margin: 0;
      font-size: 13px;
      color: var(--text-secondary);
    }
    .btn-primary {
      padding: 10px 18px;
      border-radius: var(--radius-pill);
      font-weight: 600;
      font-size: 13.5px;
      background-image: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      cursor: pointer;
      box-shadow:
        0 4px 14px rgba(139, 90, 62, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
    }
    .btn-primary:hover {
      background-image: var(--gradient-cta-hover);
    }
    .set-row {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 15px 4px;
      border-bottom: 1px solid var(--hairline);
    }
    .set-row:last-child {
      border-bottom: none;
    }
    .theme-seg {
      display: inline-flex;
      flex-shrink: 0;
      padding: 3px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
    }
    .theme-seg button {
      /* min-height keeps it a comfortable tap target on mobile
         (was ~27px — too small for touch). */
      min-height: 34px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 6px 15px;
      border-radius: var(--radius-pill);
      border: none;
      background: transparent;
      color: var(--text-tertiary);
      font-family: var(--font-body);
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      transition: all 150ms ease;
    }
    .theme-seg button.on {
      background: rgba(61, 155, 143, 0.22);
      color: var(--text-primary);
      box-shadow: inset 0 0 0 1px rgba(61, 155, 143, 0.45);
    }
    .set-row .si {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: var(--glass-fill-strong);
      border: 1px solid var(--glass-border);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      flex-shrink: 0;
    }
    .set-row .si svg {
      width: 16px;
      height: 16px;
    }
    .set-row .sl {
      flex: 1;
      min-width: 0;
    }
    .set-row .sl b {
      font-size: 14.5px;
      font-weight: 600;
      display: block;
    }
    .set-row .sl span {
      font-size: 12.5px;
      color: var(--text-secondary);
    }
    /* Right-side INFO label (e.g. Premium "Managed in the app").
       Deliberately NOT a pill/button — every other set-row has an
       actionable control on the right, so a bare row read as broken;
       this muted, control-less text keeps the row grammar consistent
       while clearly signalling "informational, not actionable". */
    .set-row .set-meta {
      flex-shrink: 0;
      font-size: 12.5px;
      color: var(--text-tertiary);
      font-style: italic;
    }
    /* 2026-05-23 — Join-another-family row: input + button live in
       the row right column (flex grid: si | sl | join-cluster),
       aligned with the rest of the settings rows pill/badge slot.
       On narrow viewports the row wraps so the input+button drop to
       a new line below the .sl (still inside the row). The
       .set-row-join-another wrapper class flips flex-wrap + adjusts
       margin-top on the wrapped state. */
    .join-cluster {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }
    .set-row-join-another {
      flex-wrap: wrap;
    }
    .set-row-join-another > .join-feedback {
      /* Errors / success copy wraps onto a full-width row below the
         input + button. The negative left-margin counts back past
         the icon column so the feedback aligns under the label
         text (visual hierarchy: feedback applies to the label). */
      flex-basis: 100%;
      margin-left: 50px;
    }
    @media (max-width: 560px) {
      .set-row-join-another > .join-cluster {
        flex-basis: 100%;
        margin-left: 50px;
        margin-top: 6px;
      }
    }
    .join-cluster input.join-code {
      width: 110px;
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo,
        monospace);
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 4px;
      text-transform: uppercase;
      text-align: center;
      padding: 7px 8px;
      border-radius: var(--radius-input);
      background: var(--glass-fill-strong);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
    }
    .join-cluster input.join-code:focus {
      outline: none;
      border-color: var(--terracotta);
    }
    .join-cluster button.join-go {
      padding: 7px 14px;
      border-radius: var(--radius-pill);
      background: var(--gradient-cta);
      color: #fff;
      border: 1px solid rgba(255, 248, 235, 0.22);
      cursor: pointer;
      font: inherit;
      font-weight: 600;
      font-size: 12.5px;
    }
    .join-cluster button.join-go:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .join-error {
      margin-top: 8px;
      font-size: 12px;
      color: var(--rose-soft, var(--terracotta));
    }
    .join-success {
      margin-top: 8px;
      font-size: 12.5px;
      color: var(--text-secondary);
    }
    .set-pill {
      display: inline-flex;
      align-items: center;
      padding: 4px 11px;
      border-radius: var(--radius-pill);
      font-size: 11.5px;
      font-weight: 600;
      background: rgba(255, 248, 235, 0.1);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
    }
    .ring-note {
      font-size: 12.5px;
      color: var(--text-tertiary);
      line-height: 1.5;
      margin-top: 10px;
      padding: 0 4px;
    }
    /* Compact header (Pebble tab) — pulls the chat box up so its top
       sits right under the "Pebble" title instead of floating low. */
    .hello.tight {
      margin-bottom: 14px;
      align-items: center;
    }
    .hello.tight h1 {
      font-size: 26px;
      line-height: 1.1;
    }
  `);customElements.define("home-screen",Qe);const ht="cairn:pendingLoginIntent";class et extends z{constructor(){super(),this.user=null,this._mode="choose",this._code="",this._familyName="",this._busy=!1,this._error="",this._childName="",this._childDob="",this._childPhotoBlob=null,this._childPhotoPreview=null,this._parentPhotoBlob=null,this._parentPhotoPreview=null,this._flavor="welcome";try{localStorage.getItem(ht)==="1"&&(this._flavor="recovery",localStorage.removeItem(ht))}catch{}}willUpdate(e){if(e.has("user")&&this.user&&!this._familyName){const t=(this.user.displayName??"").trim().split(/\s+/).slice(-1)[0];t&&t.length>1&&(this._familyName=`${t} Family`)}}_go(e){this._mode=e,this._error=""}_submitJoin(){const e=(this._code??"").trim().toUpperCase().replace(/\s+/g,"");if(!e){this._error="Paste the connect code you were sent.";return}const t=/^[A-Z0-9]{6}$/.test(e),i=/^CAIRN-[A-Z0-9]{3,6}$/.test(e);if(!t&&!i){this._error="Connect codes are 6 characters.";return}this._error="",this.dispatchEvent(new CustomEvent("join-code",{detail:{code:e},bubbles:!0,composed:!0}))}_goChildrenQuestion(){if(!(this._familyName??"").trim()){this._error="Give your family a name.";return}this._error="",this._go("children")}_goAddChild(){this._error="",this._go("addchild")}async _submitNoChildren(){const e=(this._familyName??"").trim();if(!e){this._error="Give your family a name.";return}this._busy=!0,this._error="";try{const t=await f.createCairnOnlyFamily(e);await this._uploadParentPhotoIfAny(t),y(`Welcome to ${e}.`)}catch(t){console.error("Create family failed:",t),this._error=(t==null?void 0:t.code)==="permission-denied"?"Couldn't create the family — Firestore rules may not be deployed yet.":`Couldn't create the family: ${(t==null?void 0:t.message)??"try again"}`}finally{this._busy=!1}}async _submitWithChild(){const e=(this._familyName??"").trim(),t=(this._childName??"").trim();if(!e){this._error="Give your family a name.";return}if(!t){this._error="Add your child's name.";return}if(!this._childDob){this._error="Add your child's date of birth.";return}const i=new Date(`${this._childDob}T00:00:00`);if(Number.isNaN(i.getTime())){this._error="That date of birth doesn't look right.";return}this._busy=!0,this._error="";try{const a=await f.createPebblePathFamily(e),r=await f.createChild(a,{name:t,dateOfBirth:i});if(this._childPhotoBlob)try{await f.uploadChildAvatar(a,r,this._childPhotoBlob)}catch(s){console.warn("child avatar upload failed (non-fatal):",s),y("Family created — couldn't save the photo, add it later.")}await this._uploadParentPhotoIfAny(a),y(`Welcome to ${e}.`)}catch(a){console.error("Create family + child failed:",a),this._error=(a==null?void 0:a.code)==="permission-denied"?"Couldn't set up your family — Firestore rules may not be deployed yet.":`Couldn't set up your family: ${(a==null?void 0:a.message)??"try again"}`}finally{this._busy=!1}}_iconJoin(){return n`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>`}_iconCreate(){return n`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4zm0 4.7l1.6 3.2 3.6.5-2.6 2.5.6 3.5L12 14.7l-3.2 1.7.6-3.5-2.6-2.5 3.6-.5L12 6.7z"/>
    </svg>`}_iconPlus(){return n`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.4"
      stroke-linecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>`}_iconPerson(){return n`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>`}render(){return this._mode==="join"?this._renderJoin():this._mode==="create"?this._renderCreate():this._mode==="children"?this._renderChildren():this._mode==="addchild"?this._renderAddChild():this._renderChoose()}_renderChoose(){const e=this._flavor==="recovery";return n`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <h1>${e?"We couldn't find a family on your account":"Set up your family"}</h1>
          <p class="lede">${e?"Start a new family, or join one with an invite code.":"Your family is one shared space — everyone you invite is a member."}</p>
          <div class="options">
            <button class="option" @click=${()=>this._go("create")}>
              <span class="icon-cell sage">${this._iconPlus()}</span>
              <span>
                <div class="label">Start a new family</div>
                <div class="desc">You'll be the first member, you can then add connections with your family invite code.</div>
              </span>
            </button>
            <button class="option" @click=${()=>this._go("join")}>
              <span class="icon-cell tide">${this._iconJoin()}</span>
              <span>
                <div class="label">I have an invite code</div>
                <div class="desc">Join a family on PebblePath.</div>
              </span>
            </button>
          </div>
        </glass-panel>
      </div>
    `}_renderJoin(){return n`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <button class="back" @click=${()=>this._go("choose")}>‹ Back</button>
          <h1 style="margin-top:10px;">Join a family</h1>
          <p class="lede">
            Paste the connect code you were sent. It's
            <strong>6 characters</strong>.
          </p>
          <div class="step">
            <div>
              <label>Family code</label>
              <input
                class="code"
                type="text"
                placeholder="ABC123"
                .value=${this._code}
                @input=${e=>this._code=e.target.value}
                @keydown=${e=>{e.key==="Enter"&&(e.preventDefault(),this._submitJoin())}}
                autocapitalize="characters"
                autocomplete="off"
                spellcheck="false"
                maxlength="14"
              />
            </div>
            ${this._error?n`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <glass-button variant="primary" @click=${this._submitJoin}>
                Continue
              </glass-button>
            </div>
          </div>
        </glass-panel>
      </div>
    `}_renderCreate(){return n`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <button class="back" @click=${()=>this._go("choose")}>‹ Back</button>
          <h1 style="margin-top:10px;">Start a new family</h1>
          <p class="lede">
            Give your family a name — you can rename it later and invite
            others as soon as you're in.
          </p>
          <div class="step">
            ${this._renderAvatarPicker({preview:this._parentPhotoPreview,inputId:"parent-photo-file",onPick:this._pickParentPhoto,onChange:this._onParentPhotoChosen,ariaLabel:"Add your profile photo"})}
            <div>
              <label>Family name</label>
              <input
                type="text"
                placeholder="The Paris Family"
                .value=${this._familyName}
                @input=${e=>this._familyName=e.target.value}
                @keydown=${e=>{e.key==="Enter"&&(e.preventDefault(),this._goChildrenQuestion())}}
                maxlength="64"
              />
            </div>
            ${this._error?n`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <glass-button
                variant="primary"
                @click=${this._goChildrenQuestion}
              >
                Continue
              </glass-button>
            </div>
          </div>
        </glass-panel>
      </div>
    `}_renderChildren(){return n`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <button class="back" @click=${()=>this._go("create")}>‹ Back</button>
          <h1 style="margin-top:10px;">Do you have children to add?</h1>
          <p class="lede">
            This will create a parent role for you in PebblePath, you can
            always add this later.
          </p>
          <div class="options">
            <button
              class="option"
              ?disabled=${this._busy}
              @click=${this._goAddChild}
            >
              <span class="icon-cell sage">${this._iconPlus()}</span>
              <span>
                <div class="label">Yes, I want to add a child.</div>
                <div class="desc">
                  Sets up child milestones, growth insights, tips, and
                  Pebble advisor for your family.
                </div>
              </span>
            </button>
            <button
              class="option"
              ?disabled=${this._busy}
              @click=${this._submitNoChildren}
            >
              <span class="icon-cell tide">${this._iconPerson()}</span>
              <span>
                <div class="label">
                  ${this._busy?"Setting up…":"No, this is not a parent account."}
                </div>
                <div class="desc">
                  Collaborate on the family activity planner together.
                </div>
              </span>
            </button>
          </div>
          ${this._error?n`<div class="error">${this._error}</div>`:""}
        </glass-panel>
      </div>
    `}_renderAvatarPicker({preview:e,inputId:t,onPick:i,onChange:a,ariaLabel:r}){return n`
      <div class="av-pick">
        <button type="button" @click=${i} aria-label=${r}>
          <span class="ring">
            ${e?n`<img src=${e} alt="" />`:n`<svg
                  class="ph"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>`}
          </span>
          <span class="cam">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M9 3l-1.8 2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.2L15 3H9zm3 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 10z"
              />
            </svg>
          </span>
        </button>
        <span class="cap"
          >${e?"Tap to change":"Add a photo (optional)"}</span
        >
        <input
          id=${t}
          type="file"
          accept="image/*"
          @change=${a}
        />
      </div>
    `}async _uploadParentPhotoIfAny(e){if(!(!this._parentPhotoBlob||!e))try{await f.uploadUserAvatar(e,this._parentPhotoBlob)}catch(t){console.warn("parent avatar upload failed (non-fatal):",t),y("Family created — couldn't save your photo, add it later.")}}_pickChildPhoto(){var e;(e=this.renderRoot.querySelector("#kid-photo-file"))==null||e.click()}_pickParentPhoto(){var e;(e=this.renderRoot.querySelector("#parent-photo-file"))==null||e.click()}async _onChildPhotoChosen(e){const t=await this._readPickedImage(e);t&&(this._childPhotoBlob=t,this._childPhotoPreview&&URL.revokeObjectURL(this._childPhotoPreview),this._childPhotoPreview=URL.createObjectURL(t))}async _onParentPhotoChosen(e){const t=await this._readPickedImage(e);t&&(this._parentPhotoBlob=t,this._parentPhotoPreview&&URL.revokeObjectURL(this._parentPhotoPreview),this._parentPhotoPreview=URL.createObjectURL(t))}async _readPickedImage(e){var i;const t=(i=e.target.files)==null?void 0:i[0];if(e.target.value="",!t)return null;if(!t.type.startsWith("image/"))return y("Pick an image file (JPG, PNG, etc.)."),null;if(t.size>15*1024*1024)return y("That photo is very large — pick one under 15 MB."),null;try{return await this._processAvatarImage(t)}catch(a){return console.warn("photo processing failed:",a),y("Couldn't read that image — try another."),null}}async _processAvatarImage(e){var l;let t;try{t=await createImageBitmap(e,{imageOrientation:"from-image"})}catch{t=await createImageBitmap(e)}const i=Math.min(t.width,t.height),a=(t.width-i)/2,r=(t.height-i)/2,s=512,o=document.createElement("canvas");return o.width=s,o.height=s,o.getContext("2d").drawImage(t,a,r,i,i,0,0,s,s),(l=t.close)==null||l.call(t),await new Promise((p,h)=>{o.toBlob(c=>c?p(c):h(new Error("toBlob returned null")),"image/jpeg",.85)})}_renderAddChild(){return n`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <button class="back" @click=${()=>this._go("children")}>‹ Back</button>
          <h1 style="margin-top:10px;">Add your child</h1>
          <p class="lede">
            You can add another anytime in the app.
          </p>
          <div class="step">
            ${this._renderAvatarPicker({preview:this._childPhotoPreview,inputId:"kid-photo-file",onPick:this._pickChildPhoto,onChange:this._onChildPhotoChosen,ariaLabel:"Add a photo of your child"})}
            <div>
              <label>Child's name</label>
              <input
                type="text"
                placeholder="Felix"
                .value=${this._childName}
                @input=${e=>this._childName=e.target.value}
                maxlength="64"
              />
            </div>
            <div>
              <label>Date of birth</label>
              <input
                type="date"
                .value=${this._childDob}
                @input=${e=>this._childDob=e.target.value}
              />
            </div>
            ${this._error?n`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <glass-button
                variant="primary"
                ?disabled=${this._busy}
                @click=${this._submitWithChild}
              >
                ${this._busy?"Setting up…":"Create family"}
              </glass-button>
            </div>
          </div>
        </glass-panel>
      </div>
    `}}_(et,"properties",{user:{type:Object},_mode:{state:!0},_code:{state:!0},_familyName:{state:!0},_busy:{state:!0},_error:{state:!0},_childName:{state:!0},_childDob:{state:!0},_childPhotoPreview:{state:!0},_parentPhotoPreview:{state:!0},_flavor:{state:!0}}),_(et,"styles",T`
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
      color: var(--teal-pebble);
    }
    .lede {
      color: var(--teal-pebble);
      opacity: 0.82;
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
    /* P3-6b fix (Thomas 2026-05-19) — this wizard renders on a LIGHT
       glass panel, but --text-primary/--text-secondary are Portal's
       DUSK (white) text vars → white-on-light, unreadable. Use
       --teal-pebble (the dark green h1/.lede already use correctly),
       opacity for the secondary hierarchy. Same fix applied to
       label / input / placeholder / .back below. */
    .option .label {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 15.5px;
      letter-spacing: -0.01em;
      color: var(--teal-pebble);
    }
    .option .desc {
      font-size: 12.5px;
      color: var(--teal-pebble);
      opacity: 0.78;
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
      color: var(--teal-pebble);
      opacity: 0.82;
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
      background: rgba(255, 248, 235, 0.12);
    }
    input::placeholder {
      color: var(--teal-pebble);
      opacity: 0.42;
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
      color: var(--teal-pebble);
      opacity: 0.85;
      font: inherit;
      font-size: 13.5px;
      cursor: pointer;
      padding: 4px 6px;
      align-self: flex-start;
    }
    .back:hover { opacity: 1; }
    /* Avatar picker (onboarding "Add your child" + "Start a new
       family" parent photo) — optional; the chosen image is
       center-square cropped + resized to 512² JPEG client-side
       before upload to the Build-14 Storage path. The OUTER button
       is overflow:visible so the camera badge isn't clipped; only
       the inner .ring clips the image to a circle. The ring border
       is brand green (was a near-white that vanished on the light
       Daybreak wallpaper). */
    .av-pick {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      margin-bottom: 2px;
    }
    .av-pick button {
      position: relative;
      width: 84px;
      height: 84px;
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
      overflow: visible;
      color: var(--teal-pebble);
    }
    .av-pick .ring {
      width: 84px;
      height: 84px;
      border-radius: 999px;
      overflow: hidden;
      border: 2px solid var(--teal-pebble);
      background: rgba(61, 155, 143, 0.12);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: border-color 180ms ease, box-shadow 180ms ease;
    }
    .av-pick button:hover .ring {
      border-color: var(--sage-mid, #2d7567);
      box-shadow: 0 0 0 4px rgba(61, 155, 143, 0.16);
    }
    .av-pick img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .av-pick .ph {
      width: 34px;
      height: 34px;
      opacity: 0.6;
    }
    .av-pick .cam {
      position: absolute;
      right: -1px;
      bottom: -1px;
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: var(--teal-pebble);
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--panel-solid, #fffcf7);
      box-shadow: 0 1px 4px rgba(20, 12, 6, 0.3);
    }
    .av-pick .cam svg {
      width: 14px;
      height: 14px;
    }
    .av-pick .cap {
      font-size: 12px;
      color: var(--teal-pebble);
      opacity: 0.75;
    }
    .av-pick input[type='file'] {
      display: none;
    }
    /* P3-6b — .download-card / .app-store-cta / .alt styles removed
       with _renderDownload (the "get the iOS app" card). */
  `);customElements.define("onboarding-wizard",et);const re="cairn:pendingJoinCode",gt="cairn:pendingCreateFamily";class Pt extends z{constructor(){super(),this.authUser=null,this.loading=!0;const e=new URLSearchParams(window.location.search);if(this.preview=e.has("preview"),this._resetMode=e.has("reset"),this._resetMode)try{localStorage.removeItem(re)}catch{}const t=e.get("join");if(t&&!this._resetMode)try{localStorage.setItem(re,t)}catch{}let i=null;if(!this._resetMode)try{i=localStorage.getItem(re)}catch{}this.joinCode=this._resetMode?null:t??i??null,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this.activities=[],this.holidays=[],this.ppFamily=null,this.ppIsMember=!1,this.ppChildren=[],this.selectedChildId=null,this.childMilestones=[],this.childInsights=[],this.childDailyCard=null,this.familyDailyCard=null,this.pebbleAnchors=[],this.pebbleRhythms=[],this.pebblePatterns=[],this.pebbleLiveContext=[],this.childPebbleMessages=[],this.childPebbleSessions=[],this.ppIsChildViewer=!1,this.incomingChildRequests=[],this.myChildAccessRequest=null,this._unsubAuth=null,this._onDataChange=()=>{this.pebbleUser=f.state.user,this.family=f.state.family,this.children=f.state.children,this.trips=f.state.trips,this.events=f.state.events,this.activities=f.state.activities,this.holidays=f.state.holidays,this.ppFamily=f.state.ppFamily,this.ppIsMember=f.state.ppIsMember,this.ppChildren=f.state.ppChildren,this.selectedChildId=f.state.selectedChildId,this.childMilestones=f.state.childMilestones,this.childInsights=f.state.childInsights,this.childDailyCard=f.state.childDailyCard,this.familyDailyCard=f.state.familyDailyCard,this.pebbleAnchors=f.state.pebbleAnchors,this.pebbleRhythms=f.state.pebbleRhythms,this.pebblePatterns=f.state.pebblePatterns,this.pebbleLiveContext=f.state.pebbleLiveContext,this.childPebbleMessages=f.state.childPebbleMessages,this.childPebbleSessions=f.state.childPebbleSessions,this.ppIsChildViewer=f.state.ppIsChildViewer,this.incomingChildRequests=f.state.incomingChildRequests,this.myChildAccessRequest=f.state.myChildAccessRequest,this.userDocResolved=f.userDocResolved},this.userDocResolved=!1}_clearJoinState(){this.joinCode=null;try{localStorage.removeItem(re)}catch{}const e=new URL(window.location.href);e.searchParams.delete("join"),window.history.replaceState({},"",e.toString())}connectedCallback(){if(super.connectedCallback(),typeof document<"u"&&document.documentElement.style.setProperty("--pre-login-bg","url('/portal/assets/pebblepath-daybreak-empty.jpg')"),this.preview){this.loading=!1;return}f.addEventListener("change",this._onDataChange),this._unsubAuth=_t(e=>{if(this.authUser=e,this.loading=!1,e){if(!this._resetMode)try{const t=localStorage.getItem(re);t&&!this.joinCode&&(this.joinCode=t)}catch{}f.start(e.uid),this._consumePendingCreate()}else f.clearBriefCaches(),f.stop(),this.userDocResolved=!1})}async _consumePendingCreate(){let e=null;try{e=localStorage.getItem(gt)}catch{}if(e){try{localStorage.removeItem(gt)}catch{}try{await f.createCairnOnlyFamily(e),y(`Welcome to ${e}.`)}catch(t){console.error("Pending family create failed:",t),y((t==null?void 0:t.code)==="permission-denied"?"Couldn't create the family — Firestore rules may need a redeploy.":`Couldn't create the family: ${(t==null?void 0:t.message)??"try again"}`,{duration:5e3})}}}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubAuth)==null||e.call(this),f.removeEventListener("change",this._onDataChange)}_composeViewer(){var i,a;const e=this.authUser,t=(i=this.pebbleUser)==null?void 0:i.displayName;return{uid:e.uid,displayName:t&&t.trim()||e.displayName||"You",email:e.email??((a=this.pebbleUser)==null?void 0:a.email)??"",photoURL:kt(e,this.pebbleUser)}}_needsOnboarding(){var t,i;return!this.authUser||this.joinCode?!1:this._resetMode?!0:this.userDocResolved?!(((t=this.pebbleUser)==null?void 0:t.familyId)??((i=this.pebbleUser)==null?void 0:i.cairnFamilyId)??null):!1}updated(){this.setAttribute("data-route",this._currentRoute())}_currentRoute(){return this.loading?"loading":this.preview?"home":this.authUser?this.joinCode?"join":!this.userDocResolved&&!this._resetMode||this._needsOnboarding()?"wizard":"home":"register"}render(){return this.loading?n``:this.preview?n`<home-screen preview></home-screen>`:this.authUser?this.joinCode?n`
        <join-family-screen
          .code=${this.joinCode}
          @joined=${()=>this._clearJoinState()}
          @cancel=${()=>this._clearJoinState()}
        ></join-family-screen>
      `:!this.userDocResolved&&!this._resetMode?n``:this._needsOnboarding()?n`
        <onboarding-wizard
          .user=${this.authUser}
          @join-code=${e=>{this.joinCode=e.detail.code;try{localStorage.setItem(re,e.detail.code)}catch{}}}
        ></onboarding-wizard>
      `:n`
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
    `:n`
        <register-screen
          .joinCode=${this.joinCode??""}
        ></register-screen>
      `}}_(Pt,"properties",{authUser:{state:!0},loading:{state:!0},preview:{state:!0},joinCode:{state:!0},pebbleUser:{state:!0},family:{state:!0},children:{state:!0},trips:{state:!0},events:{state:!0},activities:{state:!0},holidays:{state:!0},userDocResolved:{state:!0},ppFamily:{state:!0},ppIsMember:{state:!0},ppChildren:{state:!0},selectedChildId:{state:!0},childMilestones:{state:!0},childInsights:{state:!0},childDailyCard:{state:!0},familyDailyCard:{state:!0},pebbleAnchors:{state:!0},pebbleRhythms:{state:!0},pebblePatterns:{state:!0},pebbleLiveContext:{state:!0},childPebbleMessages:{state:!0},childPebbleSessions:{state:!0},ppIsChildViewer:{state:!0},incomingChildRequests:{state:!0},myChildAccessRequest:{state:!0}});customElements.define("cairn-app",Pt);
//# sourceMappingURL=index-cmuTyAOD.js.map
