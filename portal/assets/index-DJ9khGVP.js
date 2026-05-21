var ft=Object.defineProperty;var vt=(c,e,t)=>e in c?ft(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var y=(c,e,t)=>vt(c,typeof e!="symbol"?e+"":e,t);import{i as A,a as M,b as o,o as yt}from"./lit-dM6tPkba.js";import{f as xt,h as wt,j as _t,G as He,O as kt,k as $t,s as Ct,l as at,m as St,n as Pt,o as At,q as Mt,t as _,v as P,w,x as zt,y as D,z as G,A as I,B as Y,D as H,E as O,H as L,I as K}from"./firebase-core-DEm61vaB.js";import{g as It,h as ie}from"./firebase-functions-ID3qFl3p.js";import{g as Dt,a as X,r as V,u as Z}from"./firebase-storage-BqMFCgVD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();class ue extends A{constructor(){super(),this.variant="default",this.lifted=!1,this.padding="md"}render(){const e=["panel",this.variant==="strong"?"strong":"",this.lifted?"lifted":"",`pad-${this.padding}`].filter(Boolean).join(" ");return o`
      <div class=${e}>
        <div class="content"><slot></slot></div>
      </div>
    `}}y(ue,"properties",{variant:{type:String},lifted:{type:Boolean},padding:{type:String}}),y(ue,"styles",M`
    :host {
      display: block;
    }
    :host([stretch]) {
      height: 100%;
    }
    :host([stretch]) .panel {
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
  `);customElements.define("glass-panel",ue);class be extends A{constructor(){super(),this.variant="primary",this.size="md",this.full=!1,this.disabled=!1}render(){const e=[this.variant,`size-${this.size}`,this.full?"full":""].filter(Boolean).join(" ");return o`
      <button class=${e} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}}y(be,"properties",{variant:{type:String},size:{type:String},full:{type:Boolean},disabled:{type:Boolean,reflect:!0}}),y(be,"styles",M`
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
  `);customElements.define("glass-button",be);class me extends A{constructor(){super(),this.size=44}render(){const e=this.size;return o`
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
    `}}y(me,"properties",{size:{type:Number}}),y(me,"styles",M`
    :host {
      display: inline-block;
      line-height: 0;
    }
    svg {
      display: block;
      filter: drop-shadow(0 6px 18px rgba(20, 12, 6, 0.45));
    }
  `);customElements.define("cairn-mark",me);const Et="modulepreload",Ft=function(c){return"/portal/"+c},Ve={},W=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let s=function(d){return Promise.all(d.map(g=>Promise.resolve(g).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=s(t.map(d=>{if(d=Ft(d),d in Ve)return;Ve[d]=!0;const g=d.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const h=document.createElement("link");if(h.rel=g?"stylesheet":Et,g||(h.as="script"),h.crossOrigin="",h.href=d,l&&h.setAttribute("nonce",l),document.head.appendChild(h),g)return new Promise((m,x)=>{h.addEventListener("load",m),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(s){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=s,window.dispatchEvent(n),!n.defaultPrevented)throw s}return r.then(s=>{for(const n of s||[])n.status==="rejected"&&a(n.reason);return e().catch(a)})},fe={apiKey:"AIzaSyA6NKZNLVBeeLrXcLJSXus5M832AxpI2wk",authDomain:"pebblepath-992b6.firebaseapp.com",projectId:"pebblepath-992b6",storageBucket:"pebblepath-992b6.firebasestorage.app",messagingSenderId:"497141667291",appId:"1:497141667291:web:ee84c186db54389d10c3fe"},E=!!(fe.apiKey&&fe.projectId),ee=E?xt(fe):null,v=E?wt(ee):null,u=E?_t(ee):null,U=E?It(ee,"us-central1"):null,T=E?Dt(ee):null,ve=E?new He:null;ve&&ve.setCustomParameters({prompt:"select_account"});const le=E?new He:null;le&&le.addScope("https://www.googleapis.com/auth/calendar.readonly");let ne=null,ye=0;async function st(){if(!v||!le)throw new Error("Firebase not configured.");if(ne&&Date.now()<ye-6e4)return ne;const c=v.currentUser;if(!c)throw new Error("Please sign in before importing your calendar.");if(!(c.providerData??[]).some(a=>a.providerId==="google.com")){const a=new Error("Calendar import needs a Google account. You're signed in another way, so Cairn can't read your Google Calendar here yet — add events manually for now.");throw a.code="calendar/needs-google-account",a}let t;try{t=await $t(c,le)}catch(a){if((a==null?void 0:a.code)==="auth/user-mismatch"){const s=new Error("Please choose the same Google account you use to sign in to Cairn.");throw s.code=a.code,s}if((a==null?void 0:a.code)==="auth/popup-closed-by-user"||(a==null?void 0:a.code)==="auth/cancelled-popup-request"){const s=new Error("Calendar connection cancelled.");throw s.code=a.code,s}throw a}const i=He.credentialFromResult(t),r=i==null?void 0:i.accessToken;if(!r)throw new Error("Couldn't get a Calendar access token — try again.");return ne=r,ye=Date.now()+3600*1e3,r}function Tt(){ne=null,ye=0}function de(){if(!v)throw new Error("Firebase not configured — fill in .env first.");return at(v,ve)}const re=E?new kt("apple.com"):null;re&&(re.addScope("email"),re.addScope("name"));function xe(){if(!v||!re)throw new Error("Firebase not configured — fill in .env first.");return at(v,re)}function ot(c,e){if(!v)throw new Error("Firebase not configured.");return At(v,c,e)}async function nt(c,e,t){if(!v)throw new Error("Firebase not configured.");const i=await St(v,c,e);if(t&&t.trim())try{await Pt(i.user,{displayName:t.trim()})}catch{}return i}function lt(c){if(!v)throw new Error("Firebase not configured.");return Mt(v,c)}function dt(){return v?Ct(v):Promise.resolve()}function ct(c){return v?zt(v,c):(c(null),()=>{})}const Nt=Object.freeze(Object.defineProperty({__proto__:null,addDoc:L,app:ee,auth:v,clearCalendarToken:Tt,collection:I,connectGoogleCalendar:st,db:u,deleteDoc:K,doc:_,firebaseApp:ee,functions:U,getDocs:H,getDownloadURL:X,httpsCallable:ie,isConfigured:E,onAuth:ct,onSnapshot:D,query:G,sendPasswordReset:lt,serverTimestamp:w,setDoc:O,signIn:de,signInWithApple:xe,signInWithEmail:ot,signOutUser:dt,signUpWithEmail:nt,storage:T,storageRef:V,updateDoc:P,uploadBytes:Z,where:Y},Symbol.toStringTag,{value:"Module"})),Rt={"united states":"US","united states of america":"US",usa:"US",us:"US","united kingdom":"GB",uk:"GB","great britain":"GB",england:"GB",scotland:"GB",wales:"GB","northern ireland":"GB",canada:"CA",australia:"AU",ireland:"IE",france:"FR",germany:"DE",spain:"ES",italy:"IT",netherlands:"NL","the netherlands":"NL",belgium:"BE",switzerland:"CH",austria:"AT",portugal:"PT",sweden:"SE",norway:"NO",denmark:"DK",finland:"FI","new zealand":"NZ",mexico:"MX",brazil:"BR","south africa":"ZA",india:"IN",japan:"JP",singapore:"SG",poland:"PL"};class Bt extends EventTarget{constructor(){super(),this.state={user:null,family:null,children:[],trips:[],events:[],holidays:[],ppFamily:null,ppIsMember:!1,ppIsChildViewer:!1,myChildAccessRequest:null,incomingChildRequests:[],ppChildren:[],selectedChildId:null,childMilestones:[],childInsights:[],childDailyCard:null,childPebbleMessages:[],childPebbleSessions:[]},this._uid=null,this._unsubUser=null,this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this._currentFamilyId=null,this._inviteCodeMigratedFamilyId=null,this._holidayKey=null,this._ppFamilyId=null,this._selectedChildId=null,this._unsubPpFamily=null,this._unsubPpChildren=null,this._unsubChildMs=null,this._unsubChildIns=null,this._unsubChildDaily=null,this._unsubChildPebble=null,this._unsubChildSessions=null,this._ppReadOnly=!1,this._unsubIncomingReq=null,this._unsubMyReq=null,this.userDocResolved=!1}get familyId(){return this._currentFamilyId}start(e){!u||!e||this._uid!==e&&(this.stop(),this._uid=e,this._unsubUser=D(_(u,"users",e),t=>{var a,s,n,l,d,g,p;this.userDocResolved=!0,this.state.user=t.exists()?{id:t.id,...t.data()}:null;const i=((a=this.state.user)==null?void 0:a.cairnFamilyId)??((s=this.state.user)==null?void 0:s.familyId)??null;!i&&this.state.user&&this._healFamilyPointer(e),i!==this._currentFamilyId&&(this._currentFamilyId=i,(n=this._unsubFamily)==null||n.call(this),(l=this._unsubChildren)==null||l.call(this),(d=this._unsubTrips)==null||d.call(this),(g=this._unsubEvents)==null||g.call(this),this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this.state.family=null,this.state.children=[],this.state.trips=[],this.state.events=[],i&&this._subscribeFamily(i));const r=((p=this.state.user)==null?void 0:p.familyId)??null;r!==this._ppFamilyId&&(this._ppFamilyId=r,this._teardownPpFamily(),r&&this._subscribePpFamily(r)),this._emit()}))}async _healFamilyPointer(e){if(!this._healing){this._healing=!0;try{const t=G(I(u,"families"),Y("cairnMemberIds","array-contains",e)),i=await H(t);if(!i.empty){await O(_(u,"users",e),{cairnFamilyId:i.docs[0].id,updatedAt:w()},{merge:!0});return}const r=G(I(u,"families"),Y("memberIds","array-contains",e)),a=await H(r);a.empty||await O(_(u,"users",e),{familyId:a.docs[0].id,updatedAt:w()},{merge:!0})}catch(t){console.warn("[Cairn] auto-heal family pointer failed:",t==null?void 0:t.code,t==null?void 0:t.message)}finally{this._healing=!1}}}async _loadHolidays(){var s,n;const e=(n=(s=this.state.family)==null?void 0:s.homeLocation)==null?void 0:n.country,t=Rt[String(e??"").trim().toLowerCase()]??null;if(!t){this.state.holidays.length&&(this.state.holidays=[],this._holidayKey=null,this._emit());return}const i=new Date().getFullYear(),r=[i,i+1],a=`${t}:${r.join(",")}`;if(this._holidayKey!==a){this._holidayKey=a;try{const l=[];for(const g of r){const p=`pp_hol_${t}_${g}`;let h=null;try{const m=JSON.parse(localStorage.getItem(p)||"null");m&&Date.now()-m.t<720*3600*1e3&&(h=m.h)}catch{}if(!h){const m=await fetch(`https://date.nager.at/api/v3/PublicHolidays/${g}/${t}`);if(!m.ok)continue;const x=await m.json();h=(Array.isArray(x)?x:[]).map(C=>({date:C.date,name:C.name||C.localName||"Holiday"}));try{localStorage.setItem(p,JSON.stringify({t:Date.now(),h}))}catch{}}for(const m of h)l.push({id:`hol-${t}-${m.date}-${m.name}`,title:m.name,date:m.date,source:"holiday"})}const d=new Set;this.state.holidays=l.filter(g=>{const p=`${g.date}|${g.title}`;return d.has(p)?!1:(d.add(p),!0)}),this._emit()}catch{this._holidayKey=null}}}_subscribeFamily(e){var t;this._unsubFamily=D(_(u,"families",e),i=>{this.state.family=i.exists()?{id:i.id,...i.data()}:null,this._reconcileChildViewer(),this._loadHolidays(),this._maybeMigrateInviteCodeFormat(),this._emit()}),(t=this._unsubMyReq)==null||t.call(this),this._unsubMyReq=D(_(u,"families",e,"childAccessRequests",this._uid),i=>{this.state.myChildAccessRequest=i.exists()?{id:i.id,...i.data()}:null,this._emit()},i=>console.warn("[Portal] childAccessRequest (mine) error:",i.code,i.message)),this._unsubChildren=D(I(u,"families",e,"children"),i=>{this.state.children=i.docs.map(r=>{var s,n;const a=r.data();return{id:r.id,...a,dateOfBirth:((n=(s=a.dateOfBirth)==null?void 0:s.toDate)==null?void 0:n.call(s))??(a.dateOfBirth?new Date(a.dateOfBirth):null)}}),this._emit()}),this._unsubTrips=D(G(I(u,"families",e,"trips"),Y("visibleTo","array-contains",this._uid)),i=>{this.state.trips=i.docs.map(r=>{var s,n,l,d;const a=r.data();return{id:r.id,...a,start:a.start??"",end:a.end??"",createdAt:((n=(s=a.createdAt)==null?void 0:s.toDate)==null?void 0:n.call(s))??null,updatedAt:((d=(l=a.updatedAt)==null?void 0:l.toDate)==null?void 0:d.call(l))??null}}).sort((r,a)=>String(r.start).localeCompare(String(a.start))),this._backfillVisibleTo("trips",i.docs),this._emit()},i=>{console.warn("[Cairn] trips subscription error:",i.code,i.message)}),this._unsubEvents=D(G(I(u,"families",e,"familyEvents"),Y("visibleTo","array-contains",this._uid)),i=>{this.state.events=i.docs.map(r=>{var s,n,l,d;const a=r.data();return{id:r.id,...a,date:a.date??"",createdAt:((n=(s=a.createdAt)==null?void 0:s.toDate)==null?void 0:n.call(s))??null,updatedAt:((d=(l=a.updatedAt)==null?void 0:l.toDate)==null?void 0:d.call(l))??null}}),this._backfillVisibleTo("familyEvents",i.docs),this._emit()},i=>{console.warn("[Cairn] familyEvents subscription error:",i.code,i.message)})}_reconcileChildViewer(){var a;if((a=this.state.user)!=null&&a.familyId)return;const e=this.state.family,t=this._uid,r=!!(e&&Array.isArray(e.childViewers)&&e.childViewers.includes(t)&&!(Array.isArray(e.memberIds)&&e.memberIds.includes(t)))?e.id:null;r!==this._ppFamilyId&&(this._ppFamilyId=r,this._ppReadOnly=!!r,this._teardownPpFamily(),r&&this._subscribePpFamily(r),this._emit())}_subscribePpFamily(e){this._unsubPpFamily=D(_(u,"families",e),t=>{var a;const i=t.exists()?{id:t.id,...t.data()}:null;this.state.ppFamily=i;const r=!!(i&&Array.isArray(i.memberIds)&&i.memberIds.includes(this._uid));this.state.ppIsMember=r,this.state.ppIsChildViewer=!!(!r&&i&&Array.isArray(i.childViewers)&&i.childViewers.includes(this._uid)),r&&this._subscribeIncomingRequests(e),(a=this.state.user)!=null&&a.familyId||this._reconcileChildViewer(),this._emit()},t=>{console.warn("[Portal] ppFamily subscription error:",t.code,t.message)}),this._unsubPpChildren=D(I(u,"families",e,"children"),t=>{var s;const i=t.docs.map(n=>{var d,g;const l=n.data();return{id:n.id,...l,dateOfBirth:((g=(d=l.dateOfBirth)==null?void 0:d.toDate)==null?void 0:g.call(d))??(l.dateOfBirth?new Date(l.dateOfBirth):null)}}).sort((n,l)=>{var d,g,p,h;return(((g=(d=n.createdAt)==null?void 0:d.toMillis)==null?void 0:g.call(d))??0)-(((h=(p=l.createdAt)==null?void 0:p.toMillis)==null?void 0:h.call(p))??0)});this.state.ppChildren=i,this._resolveChildPhotos(e,i);const a=this._selectedChildId&&i.some(n=>n.id===this._selectedChildId)?this._selectedChildId:((s=i[0])==null?void 0:s.id)??null;a!==this._selectedChildId?this._subscribeChild(a):a||this._teardownChild(),this._emit()},t=>{console.warn("[Portal] ppChildren subscription error:",t.code,t.message)})}_subscribeIncomingRequests(e){var t;(t=this._unsubIncomingReq)==null||t.call(this),this._unsubIncomingReq=D(I(u,"families",e,"childAccessRequests"),i=>{this.state.incomingChildRequests=i.docs.map(r=>({id:r.id,...r.data()})).filter(r=>r.status==="pending").sort((r,a)=>{var s,n,l,d;return(((n=(s=r.requestedAt)==null?void 0:s.toMillis)==null?void 0:n.call(s))??0)-(((d=(l=a.requestedAt)==null?void 0:l.toMillis)==null?void 0:d.call(l))??0)}),this._emit()},i=>console.warn("[Portal] childAccessRequests error:",i.code,i.message))}_subscribeChild(e){if(this._teardownChild(),this._selectedChildId=e,this.state.selectedChildId=e,!e||!this._ppFamilyId){this.state.childMilestones=[],this.state.childInsights=[],this.state.childDailyCard=null,this.state.childPebbleMessages=[],this.state.childPebbleSessions=[];return}const t=["families",this._ppFamilyId,"children",e];this._unsubChildMs=D(I(u,...t,"milestones"),i=>{this.state.childMilestones=i.docs.map(r=>({id:r.id,...r.data()})).sort((r,a)=>(r.ageRangeStartMonths??0)-(a.ageRangeStartMonths??0)),this._emit()},i=>console.warn("[Portal] milestones error:",i.code,i.message)),this._unsubChildIns=D(I(u,...t,"insights"),i=>{this.state.childInsights=i.docs.map(r=>({id:r.id,...r.data()})).sort((r,a)=>(a.relevanceScore??0)-(r.relevanceScore??0)),this._emit()},i=>console.warn("[Portal] insights error:",i.code,i.message)),this._ppReadOnly||(this._unsubChildDaily=D(I(u,...t,"dailyCards"),i=>{const r=i.docs.map(a=>({id:a.id,...a.data()}));r.sort((a,s)=>String(s.id).localeCompare(String(a.id))),this.state.childDailyCard=r[0]??null,this._emit()},i=>console.warn("[Portal] dailyCards error:",i.code,i.message))),this._unsubChildPebble=D(I(u,...t,"pebbleMessages"),i=>{this.state.childPebbleMessages=i.docs.map(r=>({id:r.id,...r.data()})).filter(r=>!(r.isPrivate===!0&&r.senderUid!==this._uid)).sort((r,a)=>{var s,n,l,d;return(((n=(s=r.timestamp)==null?void 0:s.toMillis)==null?void 0:n.call(s))??0)-(((d=(l=a.timestamp)==null?void 0:l.toMillis)==null?void 0:d.call(l))??0)}),this._emit()},i=>console.warn("[Portal] pebbleMessages error:",i.code,i.message)),this._unsubChildSessions=D(I(u,...t,"pebbleSessions"),i=>{this.state.childPebbleSessions=i.docs.map(r=>({id:r.id,...r.data()})).filter(r=>r.archived!==!0).filter(r=>!(r.isPrivate===!0&&r.createdBy!==this._uid)).sort((r,a)=>{var s,n,l,d,g,p,h,m;return(((n=(s=a.lastMessageAt)==null?void 0:s.toMillis)==null?void 0:n.call(s))??((d=(l=a.createdAt)==null?void 0:l.toMillis)==null?void 0:d.call(l))??0)-(((p=(g=r.lastMessageAt)==null?void 0:g.toMillis)==null?void 0:p.call(g))??((m=(h=r.createdAt)==null?void 0:h.toMillis)==null?void 0:m.call(h))??0)}),this._emit()},i=>console.warn("[Portal] pebbleSessions error:",i.code,i.message))}_resolveChildPhotos(e,t){if(T){this._photoTried||(this._photoTried=new Set);for(const i of t){const r=i.profilePhotoURL;if(typeof r=="string"&&/^https?:\/\//i.test(r))continue;const a=e+"/"+i.id;this._photoTried.has(a)||(this._photoTried.add(a),X(V(T,"families/"+e+"/avatars/children/"+i.id)).then(s=>{const n=this.state.ppChildren||[],l=n.findIndex(d=>d.id===i.id);l>=0&&(n[l]={...n[l],profilePhotoURL:s},this.state.ppChildren=[...n],this._emit())}).catch(()=>{this._photoTried.delete(a)}))}}}selectChild(e){!e||e===this._selectedChildId||this.state.ppChildren.some(t=>t.id===e)&&(this._subscribeChild(e),this._emit())}async askPebbleAboutChild(e,t,i=[],r=!1,a=""){if(!U)throw new Error("Firebase functions not configured.");if(!this._ppFamilyId)throw new Error("No PebblePath family.");if(!e)throw new Error("No child selected.");return(await ie(U,"askPebbleAboutChild")({familyId:this._ppFamilyId,childId:e,question:t,history:i,isPrivate:r===!0,sessionId:a||""})).data}_childPebbleBase(e){return["families",this._ppFamilyId,"children",e,"pebbleSessions"]}async createPebbleSession(e,{title:t,isPrivate:i}={}){if(!u||!this._ppFamilyId||!e)throw new Error("No child selected.");return(await L(I(u,...this._childPebbleBase(e)),{title:(t||"New chat").trim()||"New chat",isPrivate:i===!0,archived:!1,createdBy:this._uid??"",createdAt:w(),lastMessageAt:w()})).id}async renamePebbleSession(e,t,i){!u||!this._ppFamilyId||!e||!t||await P(_(u,...this._childPebbleBase(e),t),{title:(i||"").trim()||"Untitled chat"})}async setPebbleSessionPrivacy(e,t,i){!u||!this._ppFamilyId||!e||!t||await P(_(u,...this._childPebbleBase(e),t),{isPrivate:i===!0})}async archivePebbleSession(e,t){!u||!this._ppFamilyId||!e||!t||await P(_(u,...this._childPebbleBase(e),t),{archived:!0})}async touchPebbleSession(e,t){if(!(!u||!this._ppFamilyId||!e||!t))try{await P(_(u,...this._childPebbleBase(e),t),{lastMessageAt:w()})}catch{}}_teardownChild(){var e,t,i,r,a;(e=this._unsubChildMs)==null||e.call(this),(t=this._unsubChildIns)==null||t.call(this),(i=this._unsubChildDaily)==null||i.call(this),(r=this._unsubChildPebble)==null||r.call(this),(a=this._unsubChildSessions)==null||a.call(this),this._unsubChildMs=this._unsubChildIns=this._unsubChildDaily=this._unsubChildPebble=this._unsubChildSessions=null}_teardownPpFamily(){var e,t,i;this._teardownChild(),(e=this._unsubPpFamily)==null||e.call(this),(t=this._unsubPpChildren)==null||t.call(this),(i=this._unsubIncomingReq)==null||i.call(this),this._unsubPpFamily=null,this._unsubPpChildren=null,this._unsubIncomingReq=null,this._selectedChildId=null,this.state.ppFamily=null,this.state.ppIsMember=!1,this.state.ppIsChildViewer=!1,this.state.incomingChildRequests=[],this.state.ppChildren=[],this.state.selectedChildId=null,this.state.childMilestones=[],this.state.childInsights=[],this.state.childDailyCard=null,this.state.childPebbleMessages=[],this.state.childPebbleSessions=[]}async requestChildAccess(){var t;const e=this._currentFamilyId;if(!e)throw new Error("No family to request access from.");await O(_(u,"families",e,"childAccessRequests",this._uid),{uid:this._uid,displayName:((t=this.state.user)==null?void 0:t.displayName)??"Family member",requestedAt:w(),status:"pending"})}async withdrawChildAccessRequest(){const e=this._currentFamilyId;e&&await K(_(u,"families",e,"childAccessRequests",this._uid))}async setMemberLabel(e,t){!this._uid||!e||await P(_(u,"users",this._uid),{[`memberLabels.${e}`]:(t??"").trim()})}async approveChildAccess(e){var r;const t=this._ppFamilyId;if(!t||!this.state.ppIsMember)throw new Error("Only a parent can approve access.");const i=Array.isArray((r=this.state.ppFamily)==null?void 0:r.childViewers)?this.state.ppFamily.childViewers:[];i.includes(e)||await P(_(u,"families",t),{childViewers:[...i,e],updatedAt:w()}),await P(_(u,"families",t,"childAccessRequests",e),{status:"approved",actionedBy:this._uid,actionedAt:w()})}async declineChildAccess(e){const t=this._ppFamilyId;if(!t||!this.state.ppIsMember)throw new Error("Only a parent can decline access.");await P(_(u,"families",t,"childAccessRequests",e),{status:"declined",actionedBy:this._uid,actionedAt:w()})}async revokeChildViewer(e){var a;const t=this._ppFamilyId;if(!t||!this.state.ppIsMember)throw new Error("Only a parent can revoke access.");const i=Array.isArray((a=this.state.ppFamily)==null?void 0:a.childViewers)?this.state.ppFamily.childViewers:[],r=i.filter(s=>s!==e);r.length!==i.length&&await P(_(u,"families",t),{childViewers:r,updatedAt:w()});try{await P(_(u,"families",t,"childAccessRequests",e),{status:"declined",actionedBy:this._uid,actionedAt:w()})}catch{}}_backfillVisibleTo(e,t){if(!u||!this._currentFamilyId)return;const i=this.state.family;if(i){this._vtBackfilled||(this._vtBackfilled=new Set);for(const r of t){const a=r.data();if(Array.isArray(a.visibleTo))continue;const s=`${e}/${r.id}`;this._vtBackfilled.has(s)||(this._vtBackfilled.add(s),P(_(u,"families",this._currentFamilyId,e,r.id),{visibleTo:ce(a.visibility??"family",i,a.createdBy,Array.isArray(a.attendees)?a.attendees:[])}).catch(n=>{this._vtBackfilled.delete(s),console.warn(`[Cairn] visibleTo backfill failed (${s}):`,n==null?void 0:n.code,n==null?void 0:n.message)}))}}}async _visibleToFor(e,t,i){const r=(e==null?void 0:e.visibility)??"family",a=Array.isArray(e==null?void 0:e.attendees)?e.attendees:[],s=r==="extended"?await Lt(t):[];return ce(r,t,i,a,s)}async saveTrip(e){var d;if(!u||!this._currentFamilyId)throw new Error("No family yet.");const t=(d=v==null?void 0:v.currentUser)==null?void 0:d.uid;if(!t)throw new Error("Not signed in.");const{id:i,createdAt:r,updatedAt:a,...s}=e,n={...s,updatedAt:w()};return n.visibleTo=await this._visibleToFor(s,this.state.family,s.createdBy??t),i?(await P(_(u,"families",this._currentFamilyId,"trips",i),n),i):(n.createdBy=t,n.createdAt=w(),(await L(I(u,"families",this._currentFamilyId,"trips"),n)).id)}async deleteTrip(e){if(!u||!this._currentFamilyId)throw new Error("No family yet.");await K(_(u,"families",this._currentFamilyId,"trips",e))}planItemsListener(e,t){return!u||!this._currentFamilyId||!e?()=>{}:D(I(u,"families",this._currentFamilyId,"trips",e,"planItems"),i=>{const r=i.docs.map(a=>({id:a.id,...a.data()})).sort((a,s)=>{var d,g,p,h;const n=String(a.day??"").localeCompare(String(s.day??""));if(n!==0)return n;const l=String(a.time??"").localeCompare(String(s.time??""));return l!==0?l:(((g=(d=a.createdAt)==null?void 0:d.toMillis)==null?void 0:g.call(d))??0)-(((h=(p=s.createdAt)==null?void 0:p.toMillis)==null?void 0:h.call(p))??0)});t(r)},i=>{console.warn("[Portal] planItems subscription error:",i.code,i.message),t([])})}async addPlanItem(e,t){var n;if(!u||!this._currentFamilyId)throw new Error("No family yet.");const i=(n=v==null?void 0:v.currentUser)==null?void 0:n.uid;if(!i)throw new Error("Not signed in.");const r=String((t==null?void 0:t.title)??"").trim();if(!r)throw new Error("Add a title.");const a=String((t==null?void 0:t.url)??"").trim();return(await L(I(u,"families",this._currentFamilyId,"trips",e,"planItems"),{title:r,type:(t==null?void 0:t.type)??"note",day:(t==null?void 0:t.day)??"",time:(t==null?void 0:t.time)??"",durationMins:Number.isFinite(t==null?void 0:t.durationMins)?t.durationMins:60,.../^https?:\/\//i.test(a)?{url:a}:{},addedBy:i,createdAt:w()})).id}async updatePlanItem(e,t,i){if(!u||!this._currentFamilyId)throw new Error("No family yet.");await P(_(u,"families",this._currentFamilyId,"trips",e,"planItems",t),i)}async uploadPlanAttachment(e,t,i){if(!T||!this._currentFamilyId)throw new Error("Storage unavailable.");const r=`families/${this._currentFamilyId}/planAttachments/${e}__${t}`,a=V(T,r);return await Z(a,i,{contentType:i.type||"application/octet-stream"}),X(a)}async deletePlanItem(e,t){if(!u||!this._currentFamilyId)throw new Error("No family yet.");await K(_(u,"families",this._currentFamilyId,"trips",e,"planItems",t))}async saveEvent(e){var d;if(!u||!this._currentFamilyId)throw new Error("No family yet.");const t=(d=v==null?void 0:v.currentUser)==null?void 0:d.uid;if(!t)throw new Error("Not signed in.");const{id:i,createdAt:r,updatedAt:a,...s}=e,n={...s,updatedAt:w()};return n.visibleTo=await this._visibleToFor(s,this.state.family,s.createdBy??t),i?(await P(_(u,"families",this._currentFamilyId,"familyEvents",i),n),i):(n.createdBy=t,n.createdAt=w(),(await L(I(u,"families",this._currentFamilyId,"familyEvents"),n)).id)}async deleteEvent(e){if(!u||!this._currentFamilyId)throw new Error("No family yet.");await K(_(u,"families",this._currentFamilyId,"familyEvents",e))}async uploadSchoolCalendar(e){if(!T||!this._currentFamilyId)throw new Error("Storage unavailable.");const t=e.type||"",i=/pdf/.test(t)?"pdf":/^image\//.test(t)?"image":/word|officedocument|msword/.test(t)?"docx":"pdf",r=`families/${this._currentFamilyId}/schoolCalendarUploads/${Date.now()}`;return await Z(V(T,r),e,{contentType:t||"application/octet-stream"}),{storagePath:r,fileType:i}}async extractSchoolCalendarEvents(e,t){var s;if(!U||!this._currentFamilyId)throw new Error("No family yet.");const r=await ie(U,"extractSchoolCalendar")({familyId:this._currentFamilyId,storagePath:e,fileType:t}),a=(s=r==null?void 0:r.data)==null?void 0:s.events;return Array.isArray(a)?a:[]}async importSchoolEvents(e){var p;if(!u||!this._currentFamilyId)throw new Error("No family yet.");const t=(p=v==null?void 0:v.currentUser)==null?void 0:p.uid;if(!t)throw new Error("Not signed in.");const i=this.state.family??{},r=Array.isArray(i.memberIds)?i.memberIds:[],a=Array.isArray(i.cairnMemberIds)?i.cairnMemberIds:[],s=[...new Set([...r,...a,t])],n=ce("extended",i,t),l=I(u,"families",this._currentFamilyId,"familyEvents"),d=(e??[]).filter(h=>h&&/^\d{4}-\d{2}-\d{2}$/.test(String(h.date??""))&&String(h.title??"").trim()).slice(0,250);let g=0;return await Promise.all(d.map(async h=>{await L(l,{title:String(h.title).trim().slice(0,120),date:h.date,type:h.type||"other",source:"school-import",personIds:s,visibility:"extended",visibleTo:n,createdBy:t,createdAt:w(),updatedAt:w()}),g+=1})),g}async previewUrl(e){if(!e||typeof e!="string"||!/^https?:\/\//i.test(e.trim()))return null;if(!U)throw new Error("Firebase functions not configured.");return(await ie(U,"previewUrl")({url:e.trim()})).data}async askPebble(e,t=[]){if(!U)throw new Error("Firebase functions not configured.");if(!this._currentFamilyId)throw new Error("No family yet.");return(await ie(U,"askPebbleAboutActivities")({question:e,familyId:this._currentFamilyId,history:t})).data}async updateChildBirthday(e,t){if(!u||!this._currentFamilyId)throw new Error("No family yet.");await P(_(u,"families",this._currentFamilyId,"children",e),{dateOfBirth:t,updatedAt:w()})}async findFamilyByCairnCode(e){if(!u)throw new Error("Firebase not configured.");const t=G(I(u,"families"),Y("cairnInviteCode","==",e)),i=await H(t);if(i.empty)return null;const r=i.docs[0];return{id:r.id,...r.data()}}async findFamilyByConnectCode(e){if(!u)throw new Error("Firebase not configured.");const t=await H(G(I(u,"families"),Y("cairnInviteCode","==",e)));if(!t.empty){const r=t.docs[0];return{id:r.id,...r.data(),_matchedCodeKind:"cairn"}}const i=await H(G(I(u,"families"),Y("inviteCode","==",e)));if(!i.empty){const r=i.docs[0];return{id:r.id,...r.data(),_matchedCodeKind:"pp"}}return null}async _applyCairnJoin(e){var d;const t=(d=v==null?void 0:v.currentUser)==null?void 0:d.uid;if(!t)throw new Error("Not signed in.");const i=e.cairnMemberIds??[],r=e.memberIds??[],a=v.currentUser;if(i.includes(t)||r.includes(t))return await O(_(u,"users",t),{email:a.email??"",displayName:a.displayName??"",profilePhotoURL:a.photoURL??null,cairnFamilyId:e.id,updatedAt:w()},{merge:!0}),await this._recordMutualConnection(e.id,t),e.id;const s=e.cairnMaxMembers??20;if(i.length>=s){const g=new Error("This family's connection ring is full.");throw g.code="full",g}const n=new Date,l={displayName:a.displayName??"",profilePhotoURL:a.photoURL??null,role:"member",joinedAt:n,updatedAt:n};return await P(_(u,"families",e.id),{cairnMemberIds:[...i,t],[`memberProfiles.${t}`]:l,updatedAt:w()}),await O(_(u,"users",t),{email:a.email??"",displayName:a.displayName??"",profilePhotoURL:a.photoURL??null,cairnFamilyId:e.id,role:"member",notificationPreferences:{milestoneReminders:!0,tipNotifications:!0,schoolDeadlines:!0},createdAt:w(),updatedAt:w()},{merge:!0}),await this._recordMutualConnection(e.id,t),e.id}async redeemConnectCode(e){var s,n;if(!u)throw new Error("Firebase not configured.");if(!((s=v==null?void 0:v.currentUser)==null?void 0:s.uid))throw new Error("Not signed in.");const i=await this.findFamilyByConnectCode(e);if(!i){const l=new Error("Invite code not found.");throw l.code="not-found",l}const r=i._matchedCodeKind==="pp"?i.inviteCodeExpiresAt:i.cairnInviteCodeExpiresAt,a=((n=r==null?void 0:r.toDate)==null?void 0:n.call(r))??(r?new Date(r):null);if(!a||a<new Date){const l=new Error("This invite code has expired.");throw l.code="expired",l}return this._applyCairnJoin(i)}async _recordMutualConnection(e,t){var i;try{const{getDoc:r,arrayUnion:a}=await W(async()=>{const{getDoc:l,arrayUnion:d}=await import("./firebase-core-DEm61vaB.js").then(g=>g.J);return{getDoc:l,arrayUnion:d}},[]),s=await r(_(u,"users",t)),n=s.exists()?(i=s.data())==null?void 0:i.familyId:null;if(!n||n===e)return;await P(_(u,"families",e),{connectedFamilyIds:a(n),updatedAt:w()}),await P(_(u,"families",n),{connectedFamilyIds:a(e),updatedAt:w()})}catch(r){console.warn("[connect] mutual connection record skipped (non-fatal):",r)}}async saveSubGroup({id:e,name:t,memberIds:i}){if(!u||!this._currentFamilyId)throw new Error("No family yet.");const r=e??`g_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`;return await P(_(u,"families",this._currentFamilyId),{[`subGroups.${r}`]:{name:t.trim(),memberIds:Array.isArray(i)?[...i]:[],updatedAt:w()},updatedAt:w()}),r}async deleteSubGroup(e){if(!u||!this._currentFamilyId)throw new Error("No family yet.");const{deleteField:t}=await W(async()=>{const{deleteField:i}=await import("./firebase-core-DEm61vaB.js").then(r=>r.J);return{deleteField:i}},[]);await P(_(u,"families",this._currentFamilyId),{[`subGroups.${e}`]:t(),updatedAt:w()})}async setCairnMemberSubGroup(e,t){var a;if(!u||!this._currentFamilyId)throw new Error("No family yet.");if(!e)throw new Error("uid is required.");const i=((a=this.state.family)==null?void 0:a.subGroups)??{},r={};for(const[s,n]of Object.entries(i)){const l=Array.isArray(n.memberIds)?n.memberIds:[];s===t?l.includes(e)||(r[`subGroups.${s}.memberIds`]=[...l,e]):l.includes(e)&&(r[`subGroups.${s}.memberIds`]=l.filter(d=>d!==e))}Object.keys(r).length!==0&&(r.updatedAt=w(),await P(_(u,"families",this._currentFamilyId),r))}async removeCairnMember(e){if(!u||!this._currentFamilyId)throw new Error("No family yet.");if(!e)throw new Error("uid is required.");const t=this.state.family??{};if((Array.isArray(t.memberIds)?t.memberIds:[]).includes(e))throw new Error("parents can’t be removed from the ring here.");const{deleteField:r}=await W(async()=>{const{deleteField:d}=await import("./firebase-core-DEm61vaB.js").then(g=>g.J);return{deleteField:d}},[]),a={updatedAt:w()},s=Array.isArray(t.cairnMemberIds)?t.cairnMemberIds:[];s.includes(e)&&(a.cairnMemberIds=s.filter(d=>d!==e)),t.memberProfiles&&t.memberProfiles[e]&&(a[`memberProfiles.${e}`]=r());const n=Array.isArray(t.childViewers)?t.childViewers:[];n.includes(e)&&(a.childViewers=n.filter(d=>d!==e));const l=t.subGroups??{};for(const[d,g]of Object.entries(l)){const p=Array.isArray(g.memberIds)?g.memberIds:[];p.includes(e)&&(a[`subGroups.${d}.memberIds`]=p.filter(h=>h!==e))}await P(_(u,"families",this._currentFamilyId),a);try{await K(_(u,"families",this._currentFamilyId,"childAccessRequests",e))}catch{}}async createCairnOnlyFamily(e){if(!u)throw new Error("Firebase not configured.");const t=v==null?void 0:v.currentUser,i=t==null?void 0:t.uid;if(!i)throw new Error("Not signed in.");const r=(e??"").trim();if(!r)throw new Error("Family name is required.");const a=new Date,s=pe(),n=new Date(Date.now()+720*60*60*1e3),l={displayName:t.displayName??"",profilePhotoURL:t.photoURL??null,role:"admin",joinedAt:a,updatedAt:a},d={name:r,createdBy:i,createdInApp:"cairn",memberIds:[],cairnMemberIds:[i],connectedFamilyIds:[],cairnMaxMembers:20,cairnInviteCode:s,cairnInviteCodeExpiresAt:n,memberProfiles:{[i]:l},createdAt:w(),updatedAt:w()},g=await L(I(u,"families"),d);return await O(_(u,"users",i),{email:t.email??"",displayName:t.displayName??"",profilePhotoURL:t.photoURL??null,cairnFamilyId:g.id,role:"admin",notificationPreferences:{milestoneReminders:!1,tipNotifications:!1,schoolDeadlines:!1},createdAt:w(),updatedAt:w()},{merge:!0}),g.id}async createPebblePathFamily(e){if(!u)throw new Error("Firebase not configured.");const t=v==null?void 0:v.currentUser,i=t==null?void 0:t.uid;if(!i)throw new Error("Not signed in.");const r=(e??"").trim();if(!r)throw new Error("Family name is required.");const a=new Date,s=pe(),n=new Date(Date.now()+720*60*60*1e3),l={displayName:t.displayName??"",profilePhotoURL:t.photoURL??null,role:"admin",joinedAt:a,updatedAt:a},d={name:r,createdBy:i,memberIds:[i],cairnMemberIds:[i],connectedFamilyIds:[],cairnMaxMembers:20,inviteCode:s,inviteCodeExpiresAt:n,cairnInviteCode:s,cairnInviteCodeExpiresAt:n,memberProfiles:{[i]:l},createdAt:w(),updatedAt:w()},g=await L(I(u,"families"),d);return await O(_(u,"users",i),{email:t.email??"",displayName:t.displayName??"",profilePhotoURL:t.photoURL??null,familyId:g.id,role:"owner",notificationPreferences:{milestoneReminders:!1,tipNotifications:!1,schoolDeadlines:!1},createdAt:w(),updatedAt:w()},{merge:!0}),g.id}async createChild(e,t){var p,h;if(!u)throw new Error("Firebase not configured.");const i=(p=v==null?void 0:v.currentUser)==null?void 0:p.uid;if(!i)throw new Error("Not signed in.");if(!e)throw new Error("No family.");const r=((t==null?void 0:t.name)??"").trim();if(!r)throw new Error("Child's name is required.");if(!((t==null?void 0:t.dateOfBirth)instanceof Date))throw new Error("Child's date of birth is required.");const{getDoc:a}=await W(async()=>{const{getDoc:m}=await import("./firebase-core-DEm61vaB.js").then(x=>x.J);return{getDoc:m}},[]),s=await a(_(u,"families",e)),n=s.exists()?Array.isArray((h=s.data())==null?void 0:h.memberIds)?s.data().memberIds:[]:[],l=n.length?n:[i],d={name:r,dateOfBirth:t.dateOfBirth,profilePhotoURL:null,developmentalFlags:Array.isArray(t==null?void 0:t.developmentalFlags)?t.developmentalFlags:[],pediatricianNotes:null,region:(t==null?void 0:t.region)??null,parentIds:l,needsServerSeed:!0,createdAt:w(),updatedAt:w()};return(await L(I(u,"families",e,"children"),d)).id}async uploadChildAvatar(e,t,i){if(!u||!T)throw new Error("Firebase not configured.");if(!e||!t)throw new Error("Missing family/child id.");if(!i)throw new Error("No image.");const r=i.type&&i.type.startsWith("image/")?i.type:"image/jpeg",a=V(T,`families/${e}/avatars/children/${t}`);await Z(a,i,{contentType:r});const s=await X(a);return await P(_(u,"families",e,"children",t),{profilePhotoURL:s,updatedAt:w()}),s}async uploadUserAvatar(e,t){var n;if(!u||!T)throw new Error("Firebase not configured.");const i=(n=v==null?void 0:v.currentUser)==null?void 0:n.uid;if(!i)throw new Error("Not signed in.");if(!e)throw new Error("No family.");if(!t)throw new Error("No image.");const r=t.type&&t.type.startsWith("image/")?t.type:"image/jpeg",a=V(T,`families/${e}/avatars/users/${i}`);await Z(a,t,{contentType:r});const s=await X(a);await P(_(u,"users",i),{profilePhotoURL:s,updatedAt:w()});try{await P(_(u,"families",e),{[`memberProfiles.${i}.profilePhotoURL`]:s,[`memberProfiles.${i}.updatedAt`]:w(),updatedAt:w()})}catch(l){console.warn("memberProfiles photo fan-out failed:",l)}return s}async requestToBeCoParent(e){var a,s,n,l,d;if(!u)throw new Error("Firebase not configured.");const t=(a=v==null?void 0:v.currentUser)==null?void 0:a.uid;if(!t)throw new Error("Not signed in.");const i=this._currentFamilyId??((s=this.state.user)==null?void 0:s.cairnFamilyId)??((n=this.state.user)==null?void 0:n.familyId)??null;if(!i)throw new Error("No family.");if(!e)throw new Error("No child.");const r=((l=this.state.user)==null?void 0:l.displayName)??((d=v==null?void 0:v.currentUser)==null?void 0:d.displayName)??"";await O(_(u,"families",i,"children",e,"coParentRequests",t),{uid:t,displayName:r,status:"pending",requestedAt:w()})}async fetchFamilyChildren(e){if(!u||!e)return[];try{return(await H(I(u,"families",e,"children"))).docs.map(i=>({id:i.id,...i.data()}))}catch(t){return console.warn("[parent-prompt] fetchFamilyChildren skipped (non-fatal):",t),[]}}async regenerateCairnInviteCode(){if(!u||!this._currentFamilyId)throw new Error("No family yet.");const e=pe(),t=new Date(Date.now()+720*60*60*1e3);return await P(_(u,"families",this._currentFamilyId),{cairnInviteCode:e,cairnInviteCodeExpiresAt:t,updatedAt:w()}),{code:e,expiresAt:t}}_maybeMigrateInviteCodeFormat(){const e=this.state.family;if(!e||!this._uid||this._inviteCodeMigratedFamilyId===e.id)return;const t=e.cairnInviteCode;if(!t||typeof t!="string")return;if(!t.includes("-")){this._inviteCodeMigratedFamilyId=e.id;return}(Array.isArray(e.memberIds)?e.memberIds:[]).includes(this._uid)&&(this._inviteCodeMigratedFamilyId=e.id,this.regenerateCairnInviteCode().catch(r=>{console.debug("invite-code format migration deferred:",(r==null?void 0:r.code)??(r==null?void 0:r.message)??r)}))}stop(){var e,t,i,r,a;(e=this._unsubUser)==null||e.call(this),(t=this._unsubFamily)==null||t.call(this),(i=this._unsubChildren)==null||i.call(this),(r=this._unsubTrips)==null||r.call(this),(a=this._unsubEvents)==null||a.call(this),this._unsubUser=this._unsubFamily=this._unsubChildren=this._unsubTrips=this._unsubEvents=null,this._teardownPpFamily(),this._uid=null,this._currentFamilyId=null,this._inviteCodeMigratedFamilyId=null,this._holidayKey=null,this._ppFamilyId=null,this.userDocResolved=!1,this.state={user:null,family:null,children:[],trips:[],events:[],holidays:[],ppFamily:null,ppIsMember:!1,ppChildren:[],selectedChildId:null,childMilestones:[],childInsights:[],childDailyCard:null,childPebbleMessages:[],childPebbleSessions:[]}}_emit(){this.dispatchEvent(new Event("change"))}}const b=new Bt;function pt(c,e){const t=e==null?void 0:e.profilePhotoURL;return typeof t=="string"&&/^https?:\/\//i.test(t)?t:c!=null&&c.photoURL?c.photoURL:null}function jt(c,e,t=[]){if(!e)return[];const i=e.memberIds??[],r=e.cairnMemberIds??e.memberIds??[],a=e.memberProfiles??{},s=i.includes(c),n=s?r:Array.from(new Set([...r,...i])),l=[];let d=280;for(const g of n){if(g===c||s&&i.includes(g))continue;const p=a[g],h=p==null?void 0:p.profilePhotoURL,m=i.includes(g);l.push({uid:g,displayName:(p==null?void 0:p.displayName)??"Family",photoURL:typeof h=="string"&&/^https?:\/\//i.test(h)?h:null,role:m?"co-parent":"extended",circles:["extended"],hue:d}),d=(d+47)%360}return l}async function Ot(c,e){var n,l;const t=Array.isArray(e==null?void 0:e.connectedFamilyIds)?e.connectedFamilyIds:[];if(t.length===0||!u)return[];const{getDoc:i}=await W(async()=>{const{getDoc:d}=await import("./firebase-core-DEm61vaB.js").then(g=>g.J);return{getDoc:d}},[]),r=[],a=new Set(c?[c]:[]);let s=150;for(const d of t)try{const g=await i(_(u,"families",d));if(!g.exists())continue;const p=g.data()??{},h=p.memberProfiles??{},m=p.name??"Connection";for(const x of p.memberIds??[]){if(a.has(x))continue;a.add(x);const C=(n=h[x])==null?void 0:n.profilePhotoURL;r.push({uid:x,displayName:((l=h[x])==null?void 0:l.displayName)??"Connection",photoURL:typeof C=="string"&&/^https?:\/\//i.test(C)?C:null,role:"connection",circles:["connection"],familyName:m,hue:s}),s=(s+53)%360}}catch{}return r}function ce(c,e,t,i=[],r=[]){const a=(e==null?void 0:e.memberIds)??[],s=(e==null?void 0:e.cairnMemberIds)??[],n=t?[t]:[],l=Array.isArray(i)?i:[],d=Array.isArray(r)?r:[];return c==="personal"?[...new Set(n)]:c==="extended"?[...new Set([...a,...s,...n,...l,...d])]:[...new Set([...a,...n,...l])]}async function Lt(c){var r;const e=Array.isArray(c==null?void 0:c.connectedFamilyIds)?c.connectedFamilyIds:[];if(e.length===0||!u)return[];const{getDoc:t}=await W(async()=>{const{getDoc:a}=await import("./firebase-core-DEm61vaB.js").then(s=>s.J);return{getDoc:a}},[]),i=new Set;for(const a of e)try{const s=await t(_(u,"families",a));if(!s.exists())continue;for(const n of((r=s.data())==null?void 0:r.memberIds)??[])i.add(n)}catch{}return[...i]}function pe(){const c="ABCDEFGHJKMNPQRSTUVWXYZ23456789";let e="";for(let t=0;t<6;t++)e+=c[Math.floor(Math.random()*c.length)];return e}function Ut(c,e,t,i,r){const a=[],s=new Set((i==null?void 0:i.memberIds)??[]),n=s.has(c);if(a.push({uid:c,displayName:(e==null?void 0:e.displayName)??(t==null?void 0:t.displayName)??"You",photoURL:pt(e,t),role:n?"self":"self-extended",circles:["immediate"],hue:198}),!n)return a;const l=(i==null?void 0:i.memberProfiles)??{};for(const[g,p]of Object.entries(l)){if(g===c||!s.has(g))continue;const h=p.profilePhotoURL;a.push({uid:g,displayName:p.displayName??"Co-parent",photoURL:typeof h=="string"&&/^https?:\/\//i.test(h)?h:null,role:"co-parent",circles:["immediate"],hue:8})}let d=142;for(const g of r??[]){const p=g.profilePhotoURL;a.push({uid:`child:${g.id}`,displayName:g.name,photoURL:typeof p=="string"&&/^https?:\/\//i.test(p)?p:null,role:"child",circles:["immediate"],hue:d,dateOfBirth:g.dateOfBirth}),d=(d+58)%360}return a}function Gt(c){const e=[];for(const t of c??[]){if(!t.dateOfBirth)continue;const i=t.dateOfBirth,r=i.getUTCFullYear(),a=String(i.getUTCMonth()+1).padStart(2,"0"),s=String(i.getUTCDate()).padStart(2,"0");e.push({id:`bday:${t.id}`,type:"birthday",date:`${r}-${a}-${s}`,personIds:[`child:${t.id}`],title:`${t.name}'s birthday`,_childId:t.id,_childName:t.name,recurring:!0})}return e}function Yt(c,e=new Date){if(!(c!=null&&c.date))return{date:null,yearsElapsed:0};const t=$(c.date);if(!t||Number.isNaN(t.getTime()))return{date:null,yearsElapsed:0};if(!c.recurring)return{date:t,yearsElapsed:0};const i=new Date(e.getFullYear(),t.getMonth(),t.getDate()),r=i<new Date(e.getFullYear(),e.getMonth(),e.getDate())?new Date(e.getFullYear()+1,t.getMonth(),t.getDate()):i,a=r.getFullYear()-t.getFullYear();return{date:r,yearsElapsed:a}}const We=["linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)","linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)","linear-gradient(135deg, #3d9b8f 0%, #1f5c54 100%)","linear-gradient(135deg, #d4a843 0%, #c67b5c 55%, #c98a8a 100%)","linear-gradient(135deg, #8b7bb5 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #6b9ac4 0%, #3d9b8f 100%)"];function $(c){if(!c)return null;if(c instanceof Date)return c;const e=String(c).match(/^(\d{4})-(\d{2})-(\d{2})/);return e?new Date(Number(e[1]),Number(e[2])-1,Number(e[3])):new Date(c)}function qt(c){if(!c)return null;const e=c.getFullYear(),t=String(c.getMonth()+1).padStart(2,"0"),i=String(c.getDate()).padStart(2,"0");return`${e}-${t}-${i}`}async function Ht(c,e=90,t=100){const i=new Date,r=new Date(i.getTime()+e*24*60*60*1e3),a=new URL("https://www.googleapis.com/calendar/v3/calendars/primary/events");a.searchParams.set("timeMin",i.toISOString()),a.searchParams.set("timeMax",r.toISOString()),a.searchParams.set("maxResults",String(t)),a.searchParams.set("singleEvents","true"),a.searchParams.set("orderBy","startTime");const s=await fetch(a.toString(),{headers:{Authorization:`Bearer ${c}`}});if(!s.ok){const l=await s.text();throw s.status===401?new Error("Your Google session expired — connect your calendar again."):s.status===403&&/accessNotConfigured|SERVICE_DISABLED|PERMISSION_DENIED|insufficient/i.test(l)?new Error("Google Calendar access isn’t configured for this project yet. (Admin: enable the Google Calendar API and add the calendar.readonly scope to the OAuth consent screen in Google Cloud Console.)"):new Error(`Google Calendar: ${s.status} ${l.slice(0,160)}`)}return((await s.json()).items??[]).filter(l=>{var d,g;return l.status!=="cancelled"&&(((d=l.start)==null?void 0:d.date)||((g=l.start)==null?void 0:g.dateTime))})}function Vt(c,e){var r,a,s,n,l,d,g,p;const t=((r=c.start)==null?void 0:r.date)??((s=(a=c.start)==null?void 0:a.dateTime)==null?void 0:s.slice(0,10))??"";let i=((n=c.end)==null?void 0:n.date)??((d=(l=c.end)==null?void 0:l.dateTime)==null?void 0:d.slice(0,10))??t;if((g=c.start)!=null&&g.date&&((p=c.end)!=null&&p.date)){const h=new Date(i);h.setDate(h.getDate()-1),i=h.toISOString().slice(0,10)}return{title:c.summary||"(untitled)",location:c.location??"",start:t,end:i,attendees:e?[e]:[],viewers:[],visibility:"family",notes:(c.description??"").slice(0,1e3),gcalEventId:c.id,gcalEventLink:c.htmlLink??null}}function Wt(c){if(c!=null&&c.coverGradient)return c.coverGradient;const e=((c==null?void 0:c.title)??(c==null?void 0:c.id)??"")+((c==null?void 0:c.location)??"");let t=0;for(let i=0;i<e.length;i++)t=t*31+e.charCodeAt(i)>>>0;return We[t%We.length]}class we extends A{constructor(){super(),this.year=new Date().getFullYear(),this.tripDays=new Map,this.trips=[],this.events=[],this.holidays=[],this.today=new Date,this._activeDay=null}_isLeap(e){return e%4===0&&e%100!==0||e%400===0}_daysInMonth(e,t){return[31,this._isLeap(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]}_labelsForMonth(e){var a;const t=this.year,i=new Map,r=(s,n)=>{const l=i.get(s);i.set(s,l?`${l} · ${n}`:n)};for(const s of this.trips??[]){if(!s.start||!s.end)continue;const n=$(s.start),l=$(s.end);if(!n||!l||n.getFullYear()>t||l.getFullYear()<t)continue;const d=new Date(t,e,1),g=new Date(t,e+1,0);if(l<d||n>g)continue;const p=n.getMonth()===e&&n.getFullYear()===t?n.getDate():1,h=l.getMonth()===e&&l.getFullYear()===t?l.getDate():g.getDate(),m=(a=s.location)!=null&&a.trim()?`${s.title} (${s.location.trim()})`:s.title;for(let x=p;x<=h;x++)r(x,m)}for(const s of this.events??[]){const n=$(s.date);n&&n.getFullYear()===t&&n.getMonth()===e&&r(n.getDate(),s.title??"Event")}for(const s of this.holidays??[]){const n=$(s.date);n&&n.getFullYear()===t&&n.getMonth()===e&&r(n.getDate(),s.title??"Public holiday")}return i}_renderMonth(e){var d,g;const t=this.year,r=(new Date(t,e,1).getDay()+6)%7,a=this._daysInMonth(t,e),s=this._labelsForMonth(e),n=[];for(let p=0;p<r;p++)n.push(o`<div class="cell empty"></div>`);const l=this.today;for(let p=1;p<=a;p++){const h=`${String(e+1).padStart(2,"0")}-${String(p).padStart(2,"0")}`,m=this.tripDays.get(h)??0,x=l.getFullYear()===t&&l.getMonth()===e&&l.getDate()===p,C=s.get(p),z=(this.events??[]).some(B=>{const F=$(B.date);return F&&F.getFullYear()===t&&F.getMonth()===e&&F.getDate()===p}),k=(this.holidays??[]).some(B=>{const F=$(B.date);return F&&F.getFullYear()===t&&F.getMonth()===e&&F.getDate()===p}),S=((d=this._activeDay)==null?void 0:d.month)===e&&((g=this._activeDay)==null?void 0:g.day)===p,R=["cell",x?"today":"",k?"holiday":"",m>0?"trip":"",m>.6?"dense":"",z?"event":"",C?"labelled":"",S?"active":""].filter(Boolean).join(" ");n.push(o`<div
        class=${R}
        title=${C?`${p} ${this._monthName(e)} — ${C}`:""}
        @click=${B=>C&&this._onDayTap(B,e,p,C)}
      ></div>`)}return n}_onDayTap(e,t,i,r){var a,s;if(e.stopPropagation(),((a=this._activeDay)==null?void 0:a.month)===t&&((s=this._activeDay)==null?void 0:s.day)===i){this._activeDay=null;return}this._activeDay={month:t,day:i,label:r}}_monthName(e){return new Date(this.year,e,1).toLocaleString("en-GB",{month:"short"})}_onSelect(e){this.dispatchEvent(new CustomEvent("month-select",{detail:{month:e,year:this.year},bubbles:!0,composed:!0}))}render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=this.today.getMonth(),i=this.today.getFullYear()===this.year;return o`
      <div class="grid">
        ${e.map((r,a)=>o`
            <div
              class="month ${i&&a===t?"current":""}"
              @click=${()=>this._onSelect(a)}
            >
              <div class="name">${r}</div>
              <div class="mini-grid">${this._renderMonth(a)}</div>
            </div>
          `)}
      </div>
      <div class="legend">
        <span class="swatch"><i class="today"></i> Today</span>
        <span class="swatch"><i class="trip"></i> Family Activities</span>
        <span class="swatch"><i class="event"></i> Celebrations</span>
        <span class="swatch"><i class="holiday"></i> Public holidays</span>
      </div>
      ${this._activeDay?o`
            <div class="day-caption">
              <span class="day-pill">
                ${this._activeDay.day} ${this._monthName(this._activeDay.month)}
              </span>
              <span class="day-text">${this._activeDay.label}</span>
              <button
                class="day-close"
                aria-label="Dismiss"
                @click=${r=>{r.stopPropagation(),this._activeDay=null}}
              >×</button>
            </div>
          `:""}
    `}}y(we,"properties",{year:{type:Number},tripDays:{type:Object},trips:{type:Array},events:{type:Array},holidays:{type:Array},today:{type:Object},_activeDay:{state:!0}}),y(we,"styles",M`
    :host {
      display: block;
    }
    /* Desktop: 6 columns × 2 rows so the year card's height matches
       the monthly calendar beside it (was 4×3, which made it ~50%
       taller than the monthly view). Narrower viewports fall back to
       fewer columns. */
    .grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 6px;
    }
    @media (max-width: 1024px) {
      .grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
      }
    }
    @media (max-width: 720px) {
      .grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media (max-width: 380px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }
    }
    .month {
      padding: 6px 5px 4px;
      border-radius: 9px;
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      transition: background 200ms ease, border-color 200ms ease;
      cursor: pointer;
    }
    .month:hover {
      background: rgba(255, 248, 235, 0.1);
      border-color: rgba(255, 248, 235, 0.22);
    }
    .month.current {
      background: rgba(61, 155, 143, 0.1);
      border-color: rgba(61, 155, 143, 0.32);
    }
    .name {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 10.5px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-secondary);
      margin-bottom: 5px;
      text-align: center;
    }
    .month.current .name {
      /* Same colour as every other month (Thomas) — the current
         month is already differentiated by its tinted tile + the
         today marker; a different text colour read as inconsistent
         (and white was wrong on the light theme). */
      color: var(--text-secondary);
    }
    .mini-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 1px;
    }
    .cell {
      aspect-ratio: 1 / 1;
      border-radius: 3px;
      background: var(--gridline);
      box-shadow: inset 0 0 0 1px var(--gridline);
      position: relative;
      transition: transform 120ms ease, box-shadow 120ms ease;
    }
    .cell.labelled {
      cursor: pointer;
    }
    .cell.labelled:hover {
      transform: scale(1.18);
      z-index: 1;
      box-shadow:
        0 0 0 1.5px rgba(255, 255, 255, 0.55),
        0 2px 6px rgba(0, 0, 0, 0.35);
    }
    .cell.active {
      transform: scale(1.18);
      z-index: 1;
      box-shadow:
        0 0 0 1.5px rgba(255, 255, 255, 0.7),
        0 2px 8px rgba(0, 0, 0, 0.4);
    }
    .cell.empty {
      background: transparent;
      box-shadow: none;
    }
    .cell.today {
      background: var(--today-bg);
      /* No glow — let the meadow gradient stand on its own. The
         outer rim and shadow were reading as a halo that competed
         with the celebration + trip cells nearby. */
      box-shadow: none;
    }
    /* Public-holiday day — teal, matching the monthly calendar's
       .cal-cell.has-holiday. Declared BEFORE .cell.trip / .cell.event
       so that on a day which is also a trip or celebration the user's
       own content wins the colour; the holiday is just the backdrop. */
    .cell.holiday {
      background: var(--gradient-sage);
      box-shadow: inset 0 0 0 1px rgba(61, 155, 143, 0.55);
    }
    .cell.trip {
      background: var(--trip-day-bg);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);
    }
    .cell.trip.dense {
      background: var(--trip-day-bg-strong);
    }
    /* Celebration day — solid colored cell, treated the same way as
       trip and today instead of a tiny dot. */
    .cell.event {
      background: var(--gradient-celebration);
      box-shadow: inset 0 0 0 1px rgba(255, 240, 215, 0.35);
    }
    /* Trip + celebration day — split diagonally so both signals read. */
    .cell.event.trip {
      background:
        linear-gradient(135deg,
          #6bb4e8 0%,
          #4a90e2 45%,
          #f29a4d 55%,
          #ffd066 100%
        );
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
    }
    .legend {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-top: 12px;
      padding: 0 4px;
      font-size: 11.5px;
      color: var(--text-secondary);
      flex-wrap: wrap;
    }
    .swatch {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .swatch i {
      width: 9px;
      height: 9px;
      border-radius: 3px;
      display: inline-block;
    }
    .swatch i.trip {
      background: var(--trip-day-bg-strong);
      border-radius: 2px;
    }
    .swatch i.event {
      background: var(--gradient-celebration);
      border-radius: 2px;
    }
    .swatch i.holiday {
      background: var(--gradient-sage);
      border-radius: 2px;
    }

    /* Caption strip — appears under the year grid when the user taps a
       coloured day. Stays put until they tap somewhere else or the
       same cell again (toggle). */
    .day-caption {
      margin-top: 12px;
      padding: 10px 12px;
      border-radius: 10px;
      background: linear-gradient(
        135deg,
        rgba(74, 144, 226, 0.16) 0%,
        rgba(212, 168, 67, 0.16) 100%
      );
      border: 1px solid rgba(255, 248, 235, 0.16);
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 12.5px;
      color: var(--text-primary);
    }
    .day-caption .day-pill {
      flex-shrink: 0;
      padding: 3px 9px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.16);
      font-weight: 600;
      font-variant-numeric: tabular-nums;
    }
    .day-caption .day-text {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .day-caption .day-close {
      background: transparent;
      border: none;
      color: var(--text-tertiary);
      font: inherit;
      font-size: 16px;
      cursor: pointer;
      padding: 0 4px;
    }
    .day-caption .day-close:hover { color: var(--text-primary); }
    .swatch i.today {
      background: var(--today-bg);
    }
  `);customElements.define("yearly-view",we);class _e extends A{constructor(){super(),this.name="",this.hue=200,this.photo="",this.size=36,this.showName=!1}_initials(){return this.name.split(/\s+/).map(e=>e[0]).filter(Boolean).slice(0,2).join("").toUpperCase()}render(){const e=`linear-gradient(135deg, hsl(${this.hue}, 55%, 62%) 0%, hsl(${(this.hue+40)%360}, 50%, 42%) 100%)`,t=`width:${this.size}px;height:${this.size}px;background:${e};font-size:${this.size*.38}px;`;return o`
      <div class="avatar" style=${t} title=${this.name}>
        ${this.photo?o`<img src=${this.photo} alt=${this.name} />`:o`<span>${this._initials()}</span>`}
      </div>
      ${this.showName?o`<span class="name">${this.name}</span>`:""}
    `}}y(_e,"properties",{name:{type:String},hue:{type:Number},photo:{type:String},size:{type:Number},showName:{type:Boolean,attribute:"show-name"}}),y(_e,"styles",M`
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
  `);customElements.define("member-chip",_e);class ke extends A{constructor(){super(),this.start="",this.end="",this._displayMonth=null,this._hoverDate=null}willUpdate(e){if(e.has("start")||this._displayMonth===null){const t=this.start?$(this.start):new Date;this._displayMonth=new Date(t.getFullYear(),t.getMonth(),1)}}_isoFor(e,t,i){return`${e}-${String(t+1).padStart(2,"0")}-${String(i).padStart(2,"0")}`}_emit(e,t){this.start=e,this.end=t,this._hoverDate=null,this.dispatchEvent(new CustomEvent("range-change",{detail:{start:e,end:t},bubbles:!0,composed:!0}))}_onDayClick(e){if(!this.start||this.start&&this.end){this._emit(e,"");return}e<this.start?this._emit(e,this.start):this._emit(this.start,e)}_onDayHover(e){this.start&&!this.end&&(this._hoverDate=e)}_onLeave(){this._hoverDate=null}_shiftMonth(e){const t=this._displayMonth;this._displayMonth=new Date(t.getFullYear(),t.getMonth()+e,1)}_isToday(e,t,i){const r=new Date;return r.getFullYear()===e&&r.getMonth()===t&&r.getDate()===i}_inSelectedRange(e){return!this.start||!this.end?!1:e>this.start&&e<this.end}_inHoverRange(e){if(!this.start||this.end||!this._hoverDate)return!1;const t=this._hoverDate<this.start?this._hoverDate:this.start,i=this._hoverDate<this.start?this.start:this._hoverDate;return e>t&&e<i}_summary(){if(!this.start&&!this.end)return"Pick a start date";const e=t=>{const i=$(t);return i?i.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"}):""};return this.start&&!this.end?`From ${e(this.start)} — pick an end date`:this.start===this.end?e(this.start):`${e(this.start)} – ${e(this.end)}`}_renderGrid(){const e=this._displayMonth.getFullYear(),t=this._displayMonth.getMonth(),r=(new Date(e,t,1).getDay()+6)%7,a=new Date(e,t+1,0).getDate(),s=[];for(let n=0;n<r;n++)s.push(o`<div class="empty"></div>`);for(let n=1;n<=a;n++){const l=this._isoFor(e,t,n),d=l===this.start,g=l===this.end&&l!==this.start,p=this._inSelectedRange(l),h=this._inHoverRange(l),m=this._isToday(e,t,n),x=["day",d?"start":"",g?"end":"",p?"in-range":"",h?"hover-range":"",m&&!d&&!g?"today":""].filter(Boolean).join(" ");s.push(o`
        <button
          type="button"
          class=${x}
          @click=${()=>this._onDayClick(l)}
          @mouseover=${()=>this._onDayHover(l)}
        >
          ${n}
        </button>
      `)}return s}render(){if(!this._displayMonth)return o``;const e=this._displayMonth.toLocaleString("en-GB",{month:"long",year:"numeric"});return o`
      <div class="summary">${this._summary()}</div>
      <div class="head">
        <button class="nav" type="button" @click=${()=>this._shiftMonth(-1)} aria-label="Previous month">‹</button>
        <span class="month-label">${e}</span>
        <button class="nav" type="button" @click=${()=>this._shiftMonth(1)} aria-label="Next month">›</button>
      </div>
      <div class="dow-row">
        ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(t=>o`<div class="dow">${t}</div>`)}
      </div>
      <div class="grid" @mouseleave=${this._onLeave}>${this._renderGrid()}</div>
    `}}y(ke,"properties",{start:{type:String},end:{type:String},_displayMonth:{state:!0},_hoverDate:{state:!0}}),y(ke,"styles",M`
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
  `);customElements.define("date-range-picker",ke);class $e extends A{constructor(){super(),this.open=!1,this.trip=null,this.members=[],this.extendedMembers=[],this.connectionMembers=[],this._visibilityAutoExtended=!1,this.currentUid="",this.familyId="",this.busy=!1,this.formMode="trip",this.subGroups={},this._draft=this._blankDraft(),this._error="",this._previewing=!1,this._previewError="",this._previewDebounce=null,this._lastPreviewedUrl="",this._showReturn=!1,this._showOutboundDetails=!1,this._showReturnDetails=!1,this._showFlight=!1}willUpdate(e){(e.has("trip")||e.has("open"))&&(this.open&&(this._draft=this._draftFromTrip(this.trip),this._visibilityAutoExtended=!1,this._draft.id&&this._draft.lodgingUrl&&!this._draft.coverImage&&requestAnimationFrame(()=>this._autoRefreshPreview()),this._showReturn=!!(this._draft.returnFlightNumber||this._draft.returnFlightDepartTime||this._draft.returnFlightDepartAirport||this._draft.returnFlightArriveAirport),this._showOutboundDetails=!!(this._draft.flightDepartAirport||this._draft.flightArriveAirport),this._showReturnDetails=!!(this._draft.returnFlightDepartAirport||this._draft.returnFlightArriveAirport),this._showFlight=!!(this._draft.flightNumber||this._draft.flightAirline||this._draft.flightDepartTime||this._draft.flightDepartAirport||this._draft.flightArriveAirport||this._showReturn)),this._error="")}async _autoRefreshPreview(){const e=this._draft.lodgingUrl,t=this._draft.id;if(!(!e||!t||this._previewing)){this._previewing=!0,this._previewError="";try{const i=await b.previewUrl(e);if(!(i!=null&&i.image)){this._previewError="No preview image found for this URL.";return}const r={coverImage:i.image,lodgingHost:i.siteName??i.host??this._draft.lodgingHost??"",lodgingTitle:i.title??this._draft.lodgingTitle??""};this._draft={...this._draft,...r},this._lastPreviewedUrl=e;try{await b.saveTrip({id:t,...r})}catch(a){console.warn("Auto-save cover failed:",a)}}catch(i){console.warn("Auto preview failed:",i),this._previewError=(i==null?void 0:i.code)==="functions/unauthenticated"?"Preview needs you to be signed in.":"Preview unavailable — try the Refresh button."}finally{this._previewing=!1}}}_blankDraft(){const e=new Date().toISOString().slice(0,10);return{id:null,title:"",location:"",start:e,end:e,visibility:"family",attendees:this.currentUid?[this.currentUid]:[],viewers:[],targetSubGroups:[],lodgingUrl:"",lodgingHost:"",lodgingTitle:"",flightAirline:"",flightNumber:"",flightDepartAirport:"",flightDepartTime:"",flightArriveAirport:"",flightArriveTime:"",returnFlightAirline:"",returnFlightNumber:"",returnFlightDepartAirport:"",returnFlightDepartTime:"",returnFlightArriveAirport:"",returnFlightArriveTime:"",notes:""}}_draftFromTrip(e){return e?{id:e.id??null,title:e.title??"",location:e.location??"",start:e.start??new Date().toISOString().slice(0,10),end:e.end??e.start??new Date().toISOString().slice(0,10),visibility:e.visibility??"family",attendees:Array.isArray(e.attendees)?[...e.attendees]:[],viewers:Array.isArray(e.viewers)?[...e.viewers]:[],targetSubGroups:Array.isArray(e.targetSubGroups)?[...e.targetSubGroups]:[],lodgingUrl:e.lodgingUrl??"",lodgingHost:e.lodgingHost??"",lodgingTitle:e.lodgingTitle??"",flightAirline:e.flightAirline??"",flightNumber:e.flightNumber??"",flightDepartAirport:e.flightDepartAirport??"",flightDepartTime:e.flightDepartTime??"",flightArriveAirport:e.flightArriveAirport??"",flightArriveTime:e.flightArriveTime??"",returnFlightAirline:e.returnFlightAirline??"",returnFlightNumber:e.returnFlightNumber??"",returnFlightDepartAirport:e.returnFlightDepartAirport??"",returnFlightDepartTime:e.returnFlightDepartTime??"",returnFlightArriveAirport:e.returnFlightArriveAirport??"",returnFlightArriveTime:e.returnFlightArriveTime??"",coverImage:e.coverImage??"",notes:e.notes??""}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_onLodgingChange(e){this._set("lodgingUrl",e),this._previewError="",this._previewDebounce&&clearTimeout(this._previewDebounce);const t=e.trim();if(!t){this._set("coverImage",""),this._set("lodgingHost",""),this._set("lodgingTitle",""),this._lastPreviewedUrl="";return}/^https?:\/\//i.test(t)&&t!==this._lastPreviewedUrl&&(this._previewDebounce=setTimeout(()=>this._runPreview(t),700))}async _runPreview(e){this._previewing=!0,this._previewError="";try{const t=await b.previewUrl(e);if(!t)return;this._lastPreviewedUrl=e,this._draft={...this._draft,coverImage:t.image??this._draft.coverImage,lodgingHost:t.siteName??t.host??this._draft.lodgingHost,lodgingTitle:t.title??this._draft.lodgingTitle}}catch(t){console.warn("Preview failed:",t),(t==null?void 0:t.code)==="functions/unauthenticated"?this._previewError="Preview unavailable — sign in.":(t==null?void 0:t.code)==="functions/invalid-argument"?this._previewError="That URL doesn’t look right.":this._previewError="Preview unavailable — paste it again or skip."}finally{this._previewing=!1}}_isExtendedUid(e){return(this.extendedMembers??[]).some(t=>t.uid===e)}_setVisibility(e){this._visibilityAutoExtended=!1,this._set("visibility",e)}_toggleAttendee(e){const t=this._draft.attendees.includes(e),i=t?this._draft.attendees.filter(a=>a!==e):[...this._draft.attendees,e];let r=this._draft.viewers??[];t||(r=r.filter(a=>a!==e)),this._draft={...this._draft,attendees:i,viewers:r}}_toggleViewer(e){if(this._draft.attendees.includes(e))return;const i=(this._draft.viewers??[]).includes(e)?this._draft.viewers.filter(r=>r!==e):[...this._draft.viewers??[],e];this._set("viewers",i)}_toggleSubGroup(e){const i=(this._draft.targetSubGroups??[]).includes(e)?this._draft.targetSubGroups.filter(r=>r!==e):[...this._draft.targetSubGroups??[],e];this._set("targetSubGroups",i)}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give the trip a title.";return}if(!e.start){this._error="Pick a start date.";return}const t=e.end||e.start;if(t<e.start){this._error="End date can’t be before start date.";return}if(!this.familyId){this._error="You need to be in a family first.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,end:t,title:e.title.trim(),location:e.location.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this trip? This can’t be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return o``;const e=this._draft,t=!!e.id;return o`
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
                  ${["personal","family","extended"].map(i=>o`
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
                  ${this.members.map(i=>o`
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
                ${(this.extendedMembers??[]).length>0?o`
                      <div class="att-group-label">My connections</div>
                      <div class="attendees">
                        ${this.extendedMembers.map(i=>o`
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
                ${(this.connectionMembers??[]).length>0?o`
                      <div class="att-group-label">Connections</div>
                      <div class="attendees">
                        ${this.connectionMembers.map(i=>o`
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
              ${this.formMode!=="activity"?o`
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
                        ${e.lodgingUrl?o`<button
                              type="button"
                              class="preview-refresh-btn"
                              ?disabled=${this._previewing}
                              title="Re-fetch preview"
                              @click=${()=>this._runPreview(e.lodgingUrl)}
                            >
                              ↻
                            </button>`:""}
                      </div>
                      ${this._previewing?o`<div class="preview-loading">
                            <div class="spinner"></div>
                            Fetching preview…
                          </div>`:""}
                      ${this._previewError?o`<div class="preview-error">${this._previewError}</div>`:""}
                      ${!this._previewing&&e.coverImage?o`<div class="preview">
                            <div class="thumb" style="background-image:url(${e.coverImage});"></div>
                            <div class="meta">
                              <div class="meta-title">${e.lodgingTitle||e.lodgingUrl}</div>
                              <div class="meta-host">${e.lodgingHost||""}</div>
                            </div>
                          </div>`:""}
                    </div>
                  `:""}
            </div>
          </div>

          ${e.visibility==="extended"&&Object.keys(this.subGroups??{}).length>0?o`
                <div class="field">
                  <label>Limit to sub-groups <span style="text-transform:none;font-weight:400;color:var(--text-tertiary);letter-spacing:0.01em;">(optional — leave empty to show to all extended)</span></label>
                  <div class="attendees">
                    ${Object.entries(this.subGroups).map(([i,r])=>o`
                        <div
                          class="att-chip ${(e.targetSubGroups??[]).includes(i)?"on":""}"
                          @click=${()=>this._toggleSubGroup(i)}
                        >
                          ${r.name}
                          <span style="color:var(--text-tertiary);font-size:11px;margin-left:4px;">
                            ${(r.memberIds??[]).length}
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


          ${this.formMode==="activity"?"":o`
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
            ${this._showFlight?o`<div class="flight-body">

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
              ${this._showOutboundDetails?o`
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

            ${this._showReturn?o`
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
                    ${this._showReturnDetails?o`
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
                `:o`
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

          ${this._error?o`<div class="error">${this._error}</div>`:""}

          <div class="actions">
            ${t?o`<button class="delete-btn" @click=${this._onDelete} ?disabled=${this.busy}>
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
    `}}y($e,"properties",{open:{type:Boolean,reflect:!0},trip:{type:Object},members:{type:Array},extendedMembers:{type:Array},connectionMembers:{type:Array},currentUid:{type:String},familyId:{type:String},busy:{type:Boolean},formMode:{type:String},subGroups:{type:Object},_visibilityAutoExtended:{state:!0},_draft:{state:!0},_error:{state:!0},_previewing:{state:!0},_previewError:{state:!0},_showReturn:{state:!0},_showOutboundDetails:{state:!0},_showReturnDetails:{state:!0},_showFlight:{state:!0}}),y($e,"styles",M`
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
  `);customElements.define("trip-form",$e);class Ce extends A{constructor(){super(),this.open=!1,this.event=null,this.members=[],this.familyId="",this.busy=!1,this._draft=this._blankDraft(),this._error=""}willUpdate(e){(e.has("event")||e.has("open"))&&(this.open&&(this._draft=this._draftFromEvent(this.event)),this._error="")}_blankDraft(){return{id:null,type:"birthday",title:"",date:new Date().toISOString().slice(0,10),personIds:[],recurring:!0,subtitle:"",notes:"",visibility:"family"}}_draftFromEvent(e){return e?{id:e.id??null,type:e.type??"birthday",title:e.title??"",date:e.date??new Date().toISOString().slice(0,10),personIds:Array.isArray(e.personIds)?[...e.personIds]:[],recurring:e.recurring??!0,subtitle:e.subtitle??"",notes:e.notes??"",visibility:e.visibility??"family"}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_toggleType(e){this._set("type",e)}_togglePerson(e){const t=this._draft.personIds.includes(e);this._set("personIds",t?this._draft.personIds.filter(i=>i!==e):[...this._draft.personIds,e])}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give it a title.";return}if(!e.date){this._error="Pick a date.";return}if(!this.familyId){this._error="No family yet.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,title:e.title.trim(),subtitle:e.subtitle.trim(),notes:e.notes.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this event? This can't be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return o``;const e=this._draft,t=!!e.id;return o`
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
              ${[{v:"birthday",label:"Birthday"},{v:"anniversary",label:"Anniversary"},{v:"custom",label:"Other"}].map(i=>o`
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

          ${this.members.length>0?o`
                <div class="field">
                  <label>Who is this about</label>
                  <div class="people">
                    ${this.members.map(i=>o`
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

          <div class="row-2">
            <div class="field">
              <label>Visibility</label>
              <div class="seg">
                ${["personal","family","extended"].map(i=>o`
                    <button
                      class=${e.visibility===i?"active":""}
                      @click=${()=>this._set("visibility",i)}
                    >
                      ${i==="personal"?"Just me":i==="family"?"Family":"Extended"}
                    </button>
                  `)}
              </div>
            </div>
            <div class="field">
              <label>Subtitle (optional)</label>
              <input
                type="text"
                placeholder=${e.type==="anniversary"?"e.g. 30 years":"e.g. surprise party"}
                .value=${e.subtitle}
                @input=${i=>this._set("subtitle",i.target.value)}
              />
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

          ${this._error?o`<div class="error">${this._error}</div>`:""}

          <div class="actions">
            ${t?o`<button class="delete-btn" @click=${this._onDelete} ?disabled=${this.busy}>
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
    `}_monthDay(e){if(!e)return"";const t=$(e);return!t||Number.isNaN(t.getTime())?"":t.toLocaleString("en-GB",{day:"numeric",month:"long"})}}y(Ce,"properties",{open:{type:Boolean,reflect:!0},event:{type:Object},members:{type:Array},familyId:{type:String},busy:{type:Boolean},_draft:{state:!0},_error:{state:!0}}),y(Ce,"styles",M`
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
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.16);
      border-radius: var(--radius-input);
      padding: 11px 14px;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 16px;
    }
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--terracotta);
      background: rgba(255, 248, 235, 0.1);
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
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.14);
      border-radius: var(--radius-pill);
    }
    .seg button {
      background: transparent;
      color: var(--text-secondary);
      border: none;
      padding: 7px 14px;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      border-radius: var(--radius-pill);
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
      background: rgba(255, 248, 235, 0.05);
      border: 1px solid rgba(255, 248, 235, 0.12);
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
      background: rgba(212, 168, 67, 0.16);
      border-color: rgba(212, 168, 67, 0.45);
      color: var(--text-primary);
    }
    .toggle-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      background: rgba(255, 248, 235, 0.04);
      border: 1px solid rgba(255, 248, 235, 0.1);
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
  `);customElements.define("event-form",Ce);class Se extends A{constructor(){super(),this.immediate=[],this.extended=[]}_self(){return(this.immediate??[]).find(e=>e.role==="self"||e.role==="self-extended")}_family(){return(this.immediate??[]).filter(e=>e.role==="co-parent"||e.role==="child")}_connections(){return this.extended??[]}_pos(e,t,i,r){if(t<=0)return"left:50%;top:50%;";const a=(r+e/t*360)*(Math.PI/180),s=50+i*Math.cos(a),n=50+i*Math.sin(a);return`left:${s}%;top:${n}%;`}_node(e,t,i){const r=(e.displayName??"").split(/\s+/)[0]||e.displayName||"";return o`
      <div class="node" style=${i}>
        <member-chip
          .name=${e.displayName??""}
          .photo=${e.photoURL??""}
          .hue=${e.hue??200}
          size=${t}
        ></member-chip>
        <span class="cap">${r}</span>
      </div>
    `}render(){const e=this._self(),t=this._family(),i=this._connections(),r=-90+180/Math.max(1,t.length);return o`
      <div class="stage">
        <div class="disc">
          <div class="ring connections"></div>
          <div class="ring family"></div>

          ${i.map((a,s)=>this._node(a,36,this._pos(s,i.length,37,-90)))}
          ${t.map((a,s)=>this._node(a,36,this._pos(s,t.length,19,r)))}

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
    `}}y(Se,"properties",{immediate:{type:Array},extended:{type:Array}}),y(Se,"styles",M`
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
  `);customElements.define("family-circle",Se);let q=null,Je=null;function Jt(){return q||(q=document.createElement("div"),q.id="cairn-toast-host",Object.assign(q.style,{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",zIndex:9999,pointerEvents:"none"}),document.body.appendChild(q),q)}function f(c,{duration:e=2800}={}){const t=Jt();clearTimeout(Je),t.innerHTML="";const i=document.createElement("div");i.textContent=c,Object.assign(i.style,{padding:"12px 18px",background:"rgba(20, 12, 6, 0.78)",backdropFilter:"blur(24px) saturate(180%)",webkitBackdropFilter:"blur(24px) saturate(180%)",border:"1px solid rgba(255, 248, 235, 0.22)",borderRadius:"999px",color:"rgba(255, 248, 235, 0.96)",fontFamily:"'Inter', system-ui, sans-serif",fontSize:"13.5px",fontWeight:"500",letterSpacing:"0.005em",boxShadow:"0 12px 32px rgba(20, 12, 6, 0.45)",pointerEvents:"auto",transform:"translateY(8px)",opacity:"0",transition:"opacity 200ms ease, transform 240ms ease"}),t.appendChild(i),requestAnimationFrame(()=>{i.style.opacity="1",i.style.transform="translateY(0)"}),Je=setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(8px)",setTimeout(()=>i.remove(),260)},e)}class Pe extends A{constructor(){super(),this.open=!1,this.family=null,this.immediate=[],this.extended=[],this.canRemove=!1,this._busy=!1,this._newGroupName="",this._editingGroupId=null,this._removingUid=null,this._addingChild=!1,this._childName="",this._childDob="",this._savingChild=!1,this._editingLabelUid=null,this._labelDraft=""}_memberLabel(e){var i,r;const t=(r=(i=b.state.user)==null?void 0:i.memberLabels)==null?void 0:r[e];return t&&t.trim()?t.trim():""}_startLabelEdit(e){this._editingLabelUid=e,this._labelDraft=this._memberLabel(e)}async _saveLabel(e){const t=this._labelDraft;this._editingLabelUid=null;try{await b.setMemberLabel(e,t)}catch(i){f(`Couldn't save label: ${i.code??i.message}`,{duration:4e3})}this.requestUpdate()}_toggleAddChild(){this._addingChild=!this._addingChild,this._addingChild||(this._childName="",this._childDob="")}async _saveChild(){const e=(this._childName??"").trim();if(!e||this._savingChild)return;if(!this._childDob){f("Add your child's date of birth.");return}const t=new Date(`${this._childDob}T00:00:00`);if(Number.isNaN(t.getTime())){f("That date of birth doesn't look right.");return}const i=b.familyId;if(!i){f("Can't add a child — no family yet.");return}this._savingChild=!0;try{await b.createChild(i,{name:e,dateOfBirth:t}),f(`${e} added.`),this._childName="",this._childDob="",this._addingChild=!1}catch(r){console.error("Add child failed:",r),f((r==null?void 0:r.code)==="permission-denied"?"Only a parent in this family can add a child.":`Couldn't add the child: ${(r==null?void 0:r.message)??"try again"}`,{duration:5e3})}finally{this._savingChild=!1}}_onCancel(){this.dispatchEvent(new Event("cancel"))}async _createSubGroup(){const e=this._newGroupName.trim();if(!(!e||this._busy)){this._busy=!0;try{const t=await b.saveSubGroup({name:e,memberIds:[]});this._newGroupName="",this._editingGroupId=t,f(`Sub-group "${e}" created.`)}catch(t){f(`Couldn't create: ${t.code??t.message}`,{duration:5e3})}finally{this._busy=!1}}}async _toggleSubGroupMember(e,t){var s,n;const i=(n=(s=this.family)==null?void 0:s.subGroups)==null?void 0:n[e];if(!i)return;const r=i.memberIds??[],a=r.includes(t)?r.filter(l=>l!==t):[...r,t];try{await b.saveSubGroup({id:e,name:i.name,memberIds:a})}catch(l){f(`Couldn't update: ${l.code??l.message}`,{duration:5e3})}}async _deleteSubGroup(e,t){if(confirm(`Delete the "${t}" sub-group?`))try{await b.deleteSubGroup(e),this._editingGroupId===e&&(this._editingGroupId=null),f("Sub-group deleted.")}catch(i){f(`Couldn't delete: ${i.code??i.message}`,{duration:5e3})}}async _removeMember(e){var i;if(this._removingUid)return;const t=e.displayName||"this person";if(confirm(`Remove ${t} from ${((i=this.family)==null?void 0:i.name)??"your family"}?

They'll lose access to shared trips, celebrations and any read-only child access. You can re-invite them anytime with the invite code.`)){this._removingUid=e.uid;try{await b.removeCairnMember(e.uid),f(`${t} removed.`)}catch(r){f(`Couldn't remove: ${r.code??r.message}`,{duration:5e3})}finally{this._removingUid=null}}}async _regenerate(){if(!this._busy){this._busy=!0;try{await b.regenerateCairnInviteCode(),f("New invite code generated.")}catch(e){console.error(e),f(`Couldn't generate code: ${e.code??e.message}`,{duration:5e3})}finally{this._busy=!1}}}_inviteLink(e){return`${window.location.origin}/portal/?join=${e}`}async _copyLink(){var t;const e=(t=this.family)==null?void 0:t.cairnInviteCode;if(e)try{await navigator.clipboard.writeText(this._inviteLink(e)),f("Invite link copied to clipboard.")}catch{f("Could not copy — try long-press the link instead.")}}async _share(){var i,r;const e=(i=this.family)==null?void 0:i.cairnInviteCode;if(!e)return;const t=this._inviteLink(e);if(navigator.share)try{await navigator.share({title:"Join my family on PebblePath",text:`Join ${((r=this.family)==null?void 0:r.name)??"our family"} on PebblePath — our shared family calendar.`,url:t})}catch{}else this._copyLink()}_expiryText(e){if(!e)return"";const t=e.toDate?e.toDate():new Date(e),r=Math.max(0,Math.round((t-new Date)/(1440*60*1e3)));return r===0?"Expires today":r===1?"Expires tomorrow":`Expires in ${r} days`}render(){var r,a;if(!this.open)return o``;const e=(r=this.family)==null?void 0:r.cairnInviteCode,t=(a=this.family)==null?void 0:a.cairnInviteCodeExpiresAt,i=t&&(t.toDate?t.toDate():new Date(t))<new Date;return o`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Manage members</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <h3>My family · ${this.immediate.length}</h3>
          ${this.immediate.length===0?o`<div class="empty">No one in your family yet.</div>`:this.immediate.map(s=>o`
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
          ${this.extended.length===0?o`<div class="empty">
                Anyone you invite (grandparents, aunts, uncles, etc.) will appear here.
                They can see trips and celebrations but not PebblePath child data.
              </div>`:this.extended.map(s=>{const n=s.role==="co-parent"||s.role==="child",l=s.role==="co-parent"?"Co-parent":"Child";return o`
                  <div class="member-row">
                    <member-chip
                      .name=${s.displayName}
                      .photo=${s.photoURL??""}
                      .hue=${s.hue}
                      size="36"
                    ></member-chip>
                    <div class="body">
                      <div class="name">${s.displayName}</div>
                      ${n?o`<div class="role">${l}</div>`:this._editingLabelUid===s.uid?o`<input
                            class="label-input"
                            .value=${this._labelDraft}
                            placeholder="Connection"
                            @input=${d=>this._labelDraft=d.target.value}
                            @keydown=${d=>{d.key==="Enter"&&this._saveLabel(s.uid),d.key==="Escape"&&(this._editingLabelUid=null)}}
                            @blur=${()=>this._saveLabel(s.uid)}
                          />`:o`<button
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
                    ${this.canRemove&&!n?o`<button
                          class="remove-btn"
                          ?disabled=${this._removingUid===s.uid}
                          @click=${()=>this._removeMember(s)}
                        >
                          ${this._removingUid===s.uid?"Removing…":"Remove"}
                        </button>`:""}
                  </div>
                `})}

          ${""}

          <h3>Children</h3>
          ${this._addingChild?o`
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
              `:o`
                <glass-button
                  variant="ghost"
                  full
                  @click=${this._toggleAddChild}
                >
                  + Add a child
                </glass-button>
              `}

          <h3>Connection invite code</h3>
          ${e&&!i?o`
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
              `:o`
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
    `}}y(Pe,"properties",{open:{type:Boolean,reflect:!0},family:{type:Object},immediate:{type:Array},extended:{type:Array},canRemove:{type:Boolean},_busy:{state:!0},_newGroupName:{state:!0},_editingGroupId:{state:!0},_removingUid:{state:!0},_addingChild:{state:!0},_childName:{state:!0},_childDob:{state:!0},_savingChild:{state:!0},_editingLabelUid:{state:!0},_labelDraft:{state:!0}}),y(Pe,"styles",M`
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
    }
    .member-row:last-child {
      border-bottom: none;
    }
    .member-row .body {
      flex: 1;
      min-width: 0;
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
  `);customElements.define("manage-members-modal",Pe);const Kt=[[/(^|\.)airbnb\./,"Airbnb"],[/(^|\.)(vrbo|homeaway)\./,"Vrbo"],[/(^|\.)booking\./,"Booking.com"],[/(^|\.)expedia\./,"Expedia"],[/(^|\.)hipcamp\./,"Hipcamp"],[/(^|\.)tripadvisor\./,"Tripadvisor"],[/(^|\.)hotels\./,"Hotels.com"],[/(^|\.)(marriott|hilton|hyatt|ihg|accor|fourseasons)\./,"Hotel"],[/(^|\.)plumguide\./,"Plum Guide"]];function ht(c){const e=(c&&c.lodgingUrl?String(c.lodgingUrl):"").trim();if(e){let t="";try{t=new URL(e.includes("://")?e:`https://${e}`).hostname}catch{t=""}if(t){const i=t.toLowerCase();for(const[r,a]of Kt)if(r.test(i))return a}return"Other"}return c&&c.lodgingHost?"Other":""}function Xt(c,e){const t=[];if(t.push(c.title||"Portal activity"),c.location&&t.push(c.location),c.start&&c.end){const r=$(c.start),a=$(c.end),s=r.toLocaleString("en-GB",{day:"numeric",month:"short"}),n=a.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});t.push(c.start===c.end?n:`${s} – ${n}`)}if((c.lodgingUrl||c.lodgingHost||c.lodgingTitle)&&t.push(`Lodging: ${[ht(c),c.lodgingTitle].filter(Boolean).join(" — ")}`),c.flightNumber||c.flightAirline||c.flightDepartAirport){const r=[],a=[c.flightAirline,c.flightNumber].filter(Boolean).join(" ");if(a&&r.push(a),c.flightDepartAirport&&c.flightArriveAirport&&r.push(`${c.flightDepartAirport.toUpperCase()} → ${c.flightArriveAirport.toUpperCase()}`),c.flightDepartTime){const s=new Date(c.flightDepartTime);Number.isNaN(s.getTime())||r.push(`Depart: ${s.toLocaleString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}`)}r.length&&t.push(`Flight: ${r.join(" · ")}`)}const i=(c.attendees??[]).map(r=>{var a;return(a=e.get(r))==null?void 0:a.displayName}).filter(Boolean);return i.length&&t.push(`With: ${i.join(", ")}`),c.notes&&t.push("",c.notes),t.push("","Shared from Portal · pebblepath.ai/portal"),t.join(`
`)}class Ae extends A{constructor(){super(),this.trip=null,this.members=[],this._resizeObs=null}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<"u"&&(this._resizeObs=new ResizeObserver(()=>this._fitTitle()))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._resizeObs)==null||e.disconnect()}updated(){if(this._resizeObs&&this.renderRoot){const e=this.renderRoot.querySelector("article");e&&!e._observed&&(this._resizeObs.observe(e),e._observed=!0)}this._fitTitle()}_fitTitle(){if(!this.renderRoot)return;const e=this.renderRoot.querySelector("h3");if(!e)return;e.style.fontSize="";let t=19;for(e.style.fontSize=`${t}px`;e.scrollWidth>e.clientWidth+1&&t>13;)t-=.5,e.style.fontSize=`${t}px`}_fmtDates(e,t){const i=$(e),r=$(t);if(!i||!r)return"";const a=i.toLocaleString("en-GB",{month:"short"}),s=r.toLocaleString("en-GB",{month:"short"});return a===s&&i.getFullYear()===r.getFullYear()?`${i.getDate()} – ${r.getDate()} ${a}`:`${i.getDate()} ${a} – ${r.getDate()} ${s}`}async _onShare(e,t,i){i.stopPropagation();const r=Xt(e,t);if(navigator.share)try{await navigator.share({title:`Portal — ${e.title??"activity"}`,text:r})}catch{}else try{await navigator.clipboard.writeText(r),f("Itinerary copied to clipboard.")}catch{f("Could not copy — try again from a browser tab.")}}render(){const e=this.trip;if(!e)return o``;const t=e.coverImage?`background-image: url(${e.coverImage});`:`background: ${Wt(e)};`,i=e.coverImage?"cover has-image":"cover",r=new Map(this.members.map(l=>[l.uid,l])),a=(e.attendees??[]).map(l=>r.get(l)).filter(Boolean),s=a.slice(0,4),n=Math.max(0,a.length-s.length);return o`
      <article
        tabindex="0"
        aria-label="${e.title} — open day plan"
        @click=${()=>this.dispatchEvent(new CustomEvent("open-planner",{detail:e,bubbles:!0,composed:!0}))}
        @keydown=${l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.dispatchEvent(new CustomEvent("open-planner",{detail:e,bubbles:!0,composed:!0})))}}
      >
        <div class="${i}" style=${t}>
          <div class="dates">${this._fmtDates(e.start,e.end)}</div>
        </div>
        <div class="body">
          <h3>${e.title}</h3>
          <div class="location">${e.location||"—"}</div>
          ${e.lodgingUrl||e.lodgingHost?(()=>{const l=ht(e);return o`<div class="lodging">
                  ${l?o`<span class="pill">${l}</span>`:""}
                  <span class="lodging-text">${e.lodgingTitle||e.lodgingUrl||""}</span>
                </div>`})():""}
          ${e.flightNumber||e.flightDepartAirport?o`<div class="flight-info">
                <span class="plane">✈</span>
                <span>${[e.flightAirline,e.flightNumber].filter(Boolean).join(" ")}</span>
                ${e.flightDepartAirport&&e.flightArriveAirport?o`<span class="route">${e.flightDepartAirport.toUpperCase()} → ${e.flightArriveAirport.toUpperCase()}</span>`:""}
              </div>`:""}
          <div class="footer">
            <div class="attendees">
              ${s.map(l=>o`<member-chip
                  .name=${l.displayName}
                  .photo=${l.photoURL??""}
                  .hue=${l.hue}
                  size="28"
                ></member-chip>`)}
              ${n>0?o`<span class="more">+${n}</span>`:""}
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
    `}}y(Ae,"properties",{trip:{type:Object},members:{type:Array}}),y(Ae,"styles",M`
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
  `);customElements.define("trip-card",Ae);class Me extends A{constructor(){super(),this.open=!1,this.trips=[],this.members=[]}_onCancel(){this.dispatchEvent(new Event("cancel"))}_groupByYear(e){const t=[...e].sort((a,s)=>String(a.start).localeCompare(String(s.start))),i=new Date;i.setHours(0,0,0,0);const r=new Map;for(const a of t){if(!a.start)continue;const s=$(a.start),n=$(a.end);if(!s)continue;const l=s.getFullYear();r.has(l)||r.set(l,[]);const d=n?n<i:!1;r.get(l).push({trip:a,isPast:d})}return r}render(){var r;if(!this.open)return o``;const e=this._groupByYear(this.trips??[]),t=((r=this.trips)==null?void 0:r.length)??0,i=new Date().getFullYear();return o`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>All trips<span class="count">${t} ${t===1?"trip":"trips"}</span></h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>
          ${t===0?o`<div class="empty">
                No trips for this circle yet.<br />
                Close this and tap <strong>+ New trip</strong> to add one.
              </div>`:Array.from(e.entries()).map(([a,s])=>o`
                  <div class="year ${a===i?"current":""}">
                    ${a}
                  </div>
                  <div class="grid">
                    ${s.map(({trip:n,isPast:l})=>o`
                        <div class=${l?"past":""}>
                          <trip-card .trip=${n} .members=${this.members}></trip-card>
                        </div>
                      `)}
                  </div>
                `)}
        </glass-panel>
      </div>
    `}}y(Me,"properties",{open:{type:Boolean,reflect:!0},trips:{type:Array},members:{type:Array}}),y(Me,"styles",M`
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
  `);customElements.define("all-trips-modal",Me);class ze extends A{constructor(){super(),this.open=!1,this._events=[],this._selected=new Set,this._loading=!1,this._error="",this._importing=!1,this._started=!1}willUpdate(e){e.has("open")&&this.open&&(this._started=!1,this._error="")}_start(){this._loading||(this._started=!0,this._load())}async _load(){var e,t,i,r,a,s;this._loading=!0,this._error="";try{const n=await st(),l=await Ht(n,90),d=new Set((b.state.trips??[]).filter(p=>p.gcalEventId).map(p=>p.gcalEventId));this._events=l.map(p=>({...p,_alreadyImported:d.has(p.id)}));const g=new Set;for(const p of this._events){if(p._alreadyImported)continue;const h=((e=p.start)==null?void 0:e.date)??((i=(t=p.start)==null?void 0:t.dateTime)==null?void 0:i.slice(0,10)),m=((r=p.end)==null?void 0:r.date)??((s=(a=p.end)==null?void 0:a.dateTime)==null?void 0:s.slice(0,10));h&&m&&m!==h&&g.add(p.id)}this._selected=g}catch(n){console.error(n),this._error=(n==null?void 0:n.message)??"Could not load calendar events."}finally{this._loading=!1}}_toggle(e){const t=new Set(this._selected);t.has(e)?t.delete(e):t.add(e),this._selected=t}_toggleAll(){const e=this._events.filter(t=>!t._alreadyImported);this._selected.size===e.length?this._selected=new Set:this._selected=new Set(e.map(t=>t.id))}async _import(){var a;if(this._importing||this._selected.size===0)return;this._importing=!0;const e=(a=v==null?void 0:v.currentUser)==null?void 0:a.uid,t=this._events.filter(s=>this._selected.has(s.id));let i=0,r=0;for(const s of t){const n=Vt(s,e);try{await b.saveTrip(n),i++}catch(l){console.error("Import failed for event",s.id,l),r++}}this._importing=!1,r===0?f(`Imported ${i} ${i===1?"activity":"activities"}.`):f(`Imported ${i}, ${r} failed.`,{duration:5e3}),this._events=[],this._selected=new Set,this.dispatchEvent(new Event("cancel"))}_onCancel(){this.dispatchEvent(new Event("cancel"))}_fmtRange(e){var g,p,h,m,x,C,z,k;const t=((g=e.start)==null?void 0:g.date)??((h=(p=e.start)==null?void 0:p.dateTime)==null?void 0:h.slice(0,10)),i=((m=e.end)==null?void 0:m.date)??((C=(x=e.end)==null?void 0:x.dateTime)==null?void 0:C.slice(0,10));if(!t)return"";const r=new Date(t);if(!i||i===t)return r.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});let a=new Date(i);(z=e.start)!=null&&z.date&&((k=e.end)!=null&&k.date)&&a.setDate(a.getDate()-1);const s=r.getMonth()===a.getMonth()&&r.getFullYear()===a.getFullYear(),n=r.getFullYear()===a.getFullYear();if(s)return`${r.getDate()}–${a.getDate()} ${r.toLocaleString("en-GB",{month:"short",year:"numeric"})}`;const l=r.toLocaleString("en-GB",{day:"numeric",month:"short"}),d=a.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});return n?`${l} – ${d}`:`${r.toLocaleDateString()} – ${a.toLocaleDateString()}`}render(){if(!this.open)return o``;const e=this._events.filter(i=>!i._alreadyImported),t=e.length>0&&this._selected.size===e.length;return o`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Import from Google Calendar</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>
          <p class="lede">
            Looking at your <strong>primary Google Calendar</strong> for the next 90 days.
            Tick the events you want as Portal activities — the rest stay where they are.
          </p>

          ${this._started?this._loading?o`<div class="loading">Loading your calendar…</div>`:this._error?o`
                <div class="error">${this._error}</div>
                <div class="intro-actions">
                  <glass-button variant="ghost" @click=${this._onCancel}>
                    Close
                  </glass-button>
                  <glass-button variant="primary" @click=${this._start}>
                    Try again
                  </glass-button>
                </div>
              `:this._events.length===0?o`<div class="empty">No events found in the next 90 days.</div>`:o`
                <div class="list">
                  ${this._events.map(i=>o`
                      <div
                        class="row ${i._alreadyImported?"disabled":this._selected.has(i.id)?"on":""}"
                        @click=${()=>!i._alreadyImported&&this._toggle(i.id)}
                      >
                        <div class="checkbox"></div>
                        <div class="body">
                          <div class="title">${i.summary||"(untitled)"}</div>
                          <div class="meta">
                            <span>${this._fmtRange(i)}</span>
                            ${i.location?o`<span>· ${i.location}</span>`:""}
                          </div>
                        </div>
                        ${i._alreadyImported?o`<span class="badge">In Portal</span>`:""}
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
                      ${this._importing?"Importing…":this._selected.size===0?"Pick events":`Import ${this._selected.size} ${this._selected.size===1?"activity":"activities"}`}
                    </glass-button>
                  </div>
                </div>
              `:o`
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
        </glass-panel>
      </div>
    `}}y(ze,"properties",{open:{type:Boolean,reflect:!0},_events:{state:!0},_selected:{state:!0},_loading:{state:!0},_error:{state:!0},_importing:{state:!0},_started:{state:!0}}),y(ze,"styles",M`
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
  `);customElements.define("import-calendar-modal",ze);class Ie extends A{constructor(){super(),this.open=!1,this.user=null,this.pebbleUser=null,this._name="",this._savingName=!1,this._uploadingPhoto=!1}willUpdate(e){var t;e.has("open")&&this.open&&(this._name=((t=this.user)==null?void 0:t.displayName)??"")}_onCancel(){this.dispatchEvent(new Event("cancel"))}async _saveName(){var i,r;const e=this._name.trim();if(!e||e===(((i=this.user)==null?void 0:i.displayName)??""))return;const t=(r=v==null?void 0:v.currentUser)==null?void 0:r.uid;if(!(!t||!u)){this._savingName=!0;try{await P(_(u,"users",t),{displayName:e,updatedAt:w()});const a=b.familyId;if(a)try{await P(_(u,"families",a),{[`memberProfiles.${t}.displayName`]:e,[`memberProfiles.${t}.updatedAt`]:w(),updatedAt:w()})}catch(s){console.warn("memberProfiles fan-out failed:",s)}f("Display name updated.")}catch(a){console.error(a),f(`Couldn't save: ${a.code??a.message}`,{duration:5e3})}finally{this._savingName=!1}}}async _signOut(){confirm("Sign out of PebblePath?")&&(this.dispatchEvent(new Event("cancel")),await dt())}_triggerPhotoPicker(){var e;(e=this.renderRoot.querySelector("#photo-file"))==null||e.click()}async _onPhotoChosen(e){var a,s;const t=(a=e.target.files)==null?void 0:a[0];if(e.target.value="",!t)return;if(!t.type.startsWith("image/")){f("Pick an image file (JPG, PNG, etc.).");return}if(t.size>5*1024*1024){f("Photo is too big — keep it under 5 MB.");return}const i=(s=v==null?void 0:v.currentUser)==null?void 0:s.uid,r=b.familyId;if(!i||!r||!T){f("Can't upload yet — you need to be in a family first.");return}this._uploadingPhoto=!0;try{const n=V(T,`families/${r}/avatars/users/${i}`);await Z(n,t,{contentType:t.type});const l=await X(n);await P(_(u,"users",i),{profilePhotoURL:l,updatedAt:w()});try{await P(_(u,"families",r),{[`memberProfiles.${i}.profilePhotoURL`]:l,[`memberProfiles.${i}.updatedAt`]:w(),updatedAt:w()})}catch(d){console.warn("memberProfiles photo fan-out failed:",d)}f("Photo updated.")}catch(n){console.error("Photo upload failed",n),f(`Upload failed: ${n.code??n.message}`,{duration:5e3})}finally{this._uploadingPhoto=!1}}render(){if(!this.open)return o``;const e=this.user,t=this._name.trim()&&this._name.trim()!==((e==null?void 0:e.displayName)??"");return o`
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
            ${t?o`<button
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
    `}}y(Ie,"properties",{open:{type:Boolean,reflect:!0},user:{type:Object},pebbleUser:{type:Object},_name:{state:!0},_savingName:{state:!0},_uploadingPhoto:{state:!0}}),y(Ie,"styles",M`
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
  `);customElements.define("profile-sheet",Ie);const ae=class ae extends A{constructor(){super(),this.open=!1}static get OPTIONS(){return[{type:"activity",tone:"sage",icon:o`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M15.8 7.4 21.8 19.5a1.1 1.1 0 0 1-.98 1.6H10.2z"/>
          <path d="M9 4.6 16.5 19.5a1.1 1.1 0 0 1-.98 1.6H3.46a1.1 1.1 0 0 1-.98-1.6z"/>
        </svg>`,label:"Group activity",desc:"Weekend plans, outings, day trips — no lodging or flights needed."},{type:"trip",tone:"tide",icon:o`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.62 3.05a1 1 0 0 0-1.12-.18L3.7 10.3c-.86.38-.83 1.62.05 1.95l6.06 2.27 2.27 6.06c.33.88 1.57.9 1.95.05L21.8 4.17a1 1 0 0 0-.18-1.12zM10.5 12.7l6.4-5.7-4.9 6.6-.1.1z"/>
        </svg>`,label:"Family trip",desc:"Multi-day travel with lodging, flight info, attendees."},{type:"event",tone:"amber",icon:o`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M11.1 6.7C10.4 5 9.2 3.7 7.8 3.3c-1-.3-1.9.1-2.2.9-.4 1 .2 2.1 1 2.7 1 .75 2.5 1.05 4.5 1.05z"/>
          <path d="M12.9 6.7c.7-1.7 1.9-3 3.3-3.4 1-.3 1.9.1 2.2.9.4 1-.2 2.1-1 2.7-1 .75-2.5 1.05-4.5 1.05z"/>
          <rect x="3" y="8" width="8.1" height="3.5" rx="1"/>
          <rect x="12.9" y="8" width="8.1" height="3.5" rx="1"/>
          <rect x="4.1" y="11.7" width="7" height="9.1" rx="1.4"/>
          <rect x="12.9" y="11.7" width="7" height="9.1" rx="1.4"/>
        </svg>`,label:"Birthday or anniversary",desc:"Recurring celebration on a specific date."},{type:"import",tone:"tide",mobileOnly:!0,icon:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
          <path d="M9 14l3 3 4-5" />
        </svg>`,label:"Import from Calendar",desc:"Pull recent events from your Google Calendar."}]}_pick(e){this.dispatchEvent(new CustomEvent("pick",{detail:{type:e}}))}_cancel(){this.dispatchEvent(new Event("cancel"))}render(){return this.open?o`
      <div class="backdrop" @click=${this._cancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>What are you adding?</h2>
            <button class="close" @click=${this._cancel} aria-label="Close">×</button>
          </div>
          <div class="options">
            ${ae.OPTIONS.map(e=>o`
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
    `:o``}};y(ae,"properties",{open:{type:Boolean,reflect:!0}}),y(ae,"styles",M`
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
  `);let De=ae;customElements.define("activity-type-picker",De);class Ee extends A{constructor(){super(),this.open=!1,this.floating=!1,this.family=null,this.trips=[],this._messages=[],this._input="",this._loading=!1,this._error="",this._followUps=[]}willUpdate(e){var t;e.has("_messages")&&(this.floating=(((t=this._messages)==null?void 0:t.length)??0)>0)}_onCancel(){this.dispatchEvent(new Event("cancel"))}_suggestions(){const e=[],t=(this.trips??[]).filter(i=>i.start&&new Date(i.start)>=new Date).sort((i,r)=>String(i.start).localeCompare(String(r.start)))[0];return t&&(e.push(`What should we do in ${t.location||t.title}?`),e.push(`What should we pack for ${t.title}?`)),e.push("Plan a family activity for this weekend"),e.push("Gift ideas for an upcoming birthday"),e.slice(0,4)}async _send(e){const t=(e??this._input).trim();if(!(!t||this._loading)){this._error="",this._input="",this._followUps=[],this._messages=[...this._messages,{role:"user",content:t}],this._loading=!0,this.updateComplete.then(()=>this._scrollToBottom());try{const i=this._messages.slice(0,-1).map(a=>({role:a.role,content:a.content})),r=await b.askPebble(t,i);this._messages=[...this._messages,{role:"assistant",content:r.answer}],this._followUps=Array.isArray(r.followUps)?r.followUps:[]}catch(i){console.error(i),(i==null?void 0:i.code)==="functions/unauthenticated"?this._error="Pebble needs you to be signed in.":(i==null?void 0:i.code)==="functions/permission-denied"?this._error="You're not in this family yet.":(i==null?void 0:i.code)==="functions/not-found"||(i==null?void 0:i.code)==="functions/internal"?this._error="Pebble isn't available right now — the Cloud Function may not be deployed yet.":this._error=(i==null?void 0:i.message)??"Pebble could not answer right now."}finally{this._loading=!1,this.updateComplete.then(()=>this._scrollToBottom())}}}_scrollToBottom(){const e=this.renderRoot.querySelector(".thread");e&&(e.scrollTop=e.scrollHeight)}_renderPebbleIcon(){return o`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
      </svg>
    `}render(){if(!this.open)return o``;const e=this._suggestions();return o`
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
            ${this._messages.length===0?o`
                  <div class="empty">
                    <div class="lede">Hi — what's on your mind?</div>
                    <div class="sub">
                      I know your upcoming trips and family celebrations.
                      Ask about activities, packing, gift ideas, restaurants
                      — anything family-shaped.
                    </div>
                    <div class="suggestions">
                      ${e.map(t=>o`
                          <button class="suggestion" @click=${()=>this._send(t)}>
                            ${t}
                          </button>
                        `)}
                    </div>
                  </div>
                `:o`
                  ${this._messages.map(t=>o`<div class="bubble ${t.role}">${t.content}</div>`)}
                  ${this._loading?o`<div class="typing"><span></span><span></span><span></span></div>`:this._followUps.length>0?o`
                        <div class="follow-ups">
                          ${this._followUps.map(t=>o`
                              <button class="follow-up" @click=${()=>this._send(t)}>
                                ${t}
                              </button>
                            `)}
                        </div>
                      `:""}
                `}
          </div>

          ${this._error?o`<div class="error">${this._error}</div>`:""}

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
    `}}y(Ee,"properties",{open:{type:Boolean,reflect:!0},floating:{type:Boolean,reflect:!0},family:{type:Object},trips:{type:Array},_messages:{state:!0},_input:{state:!0},_loading:{state:!0},_error:{state:!0},_followUps:{state:!0}}),y(Ee,"styles",M`
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
  `);customElements.define("pebble-chat",Ee);class gt extends A{render(){return o`
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
    `}}y(gt,"styles",M`
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
  `);customElements.define("discover-pebblepath",gt);class Fe extends A{constructor(){super(),this.code="",this._family=null,this._loading=!0,this._joining=!1,this._error="",this._step="join",this._children=[],this._claiming=!1,this._claimedName=null,this._joinedFamilyId=null}willUpdate(e){e.has("code")&&this.code&&this._lookup()}async _lookup(){var e;this._loading=!0,this._error="";try{const t=await b.findFamilyByConnectCode(this.code);if(!t)this._error="Invite code not found. Check it was typed correctly.",this._family=null;else{const i=t._matchedCodeKind==="pp"?t.inviteCodeExpiresAt:t.cairnInviteCodeExpiresAt,r=((e=i==null?void 0:i.toDate)==null?void 0:e.call(i))??(i?new Date(i):null);!r||r<new Date?(this._error="This invite code has expired. Ask the family for a fresh one.",this._family=null):this._family=t}}catch(t){console.error(t),this._error=(t==null?void 0:t.message)??"Couldn't look up the invite."}finally{this._loading=!1}}async _join(){var e;if(!this._joining){this._joining=!0,this._error="";try{const t=await b.redeemConnectCode(this.code);f(`Welcome to ${((e=this._family)==null?void 0:e.name)??"the family"}.`),this._joinedFamilyId=t;const i=await b.fetchFamilyChildren(t);Array.isArray(i)&&i.length?(this._children=i,this._step="parent"):this.dispatchEvent(new CustomEvent("joined",{detail:{familyId:t}}))}catch(t){console.error(t),this._error=(t==null?void 0:t.message)??"Could not join."}finally{this._joining=!1}}}async _claimChild(e){if(!(this._claiming||!(e!=null&&e.id))){this._claiming=!0,this._error="";try{await b.requestToBeCoParent(e.id),this._claimedName=e.name??"your child"}catch(t){console.error(t),this._error=(t==null?void 0:t.message)??"Couldn't send the request."}finally{this._claiming=!1}}}_notAParent(){this._finishJoin()}_finishJoin(){this.dispatchEvent(new CustomEvent("joined",{detail:{familyId:this._joinedFamilyId}}))}_cancel(){this.dispatchEvent(new Event("cancel"))}_inviterFromFamily(e){var r;if(!e)return null;const t=(r=e.memberProfiles)==null?void 0:r[e.createdBy];if(!t)return null;const i=t.profilePhotoURL;return{displayName:t.displayName??"A family member",photoURL:typeof i=="string"&&/^https?:\/\//i.test(i)?i:null}}_renderParentPrompt(){var t;const e=((t=this._family)==null?void 0:t.name)??"this family";return o`
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
          ${this._claimedName?o`
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
              `:o`
                <h1>Are you a parent or caregiver in ${e}?</h1>
                <p class="prompt-lede">
                  If you're a parent or active caregiver of one of
                  these children, ask to be linked to them — an
                  existing parent confirms it. You won't see a child's
                  information until they do.
                </p>
                <div class="child-list">
                  ${this._children.map(i=>o`
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
                ${this._error?o`<div class="error">${this._error}</div>`:""}
              `}
        </glass-panel>
      </div>
    `}render(){var r,a,s;if(this._step==="parent")return this._renderParentPrompt();const e=this._inviterFromFamily(this._family),t=(((r=this._family)==null?void 0:r.cairnMemberIds)??((a=this._family)==null?void 0:a.memberIds)??[]).length,i=(((s=this._family)==null?void 0:s.memberIds)??[]).length;return o`
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
          ${this._loading?o`<div class="loading">Looking up <code>${this.code}</code>…</div>`:this._family?o`
                <h1>You're invited.</h1>
                <div class="preview">
                  ${e?o`
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
                ${this._error?o`<div class="error">${this._error}</div>`:""}
              `:o`
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
    `}}y(Fe,"properties",{code:{type:String},_family:{state:!0},_loading:{state:!0},_joining:{state:!0},_error:{state:!0},_step:{state:!0},_children:{state:!0},_claiming:{state:!0},_claimedName:{state:!0}}),y(Fe,"styles",M`
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
  `);customElements.define("join-family-screen",Fe);class Te extends A{constructor(){super(),this.error="",this.busy=!1,this.joinCode="",this._codeInputOpen=!1,this._code=""}async _handleSignIn(){if(this.busy)return;const e=(this._code??"").trim().toUpperCase();if(this._codeInputOpen&&e){const t=e.startsWith("CAIRN-")?e:`CAIRN-${e.replace(/^CAIRN-?/i,"")}`;try{localStorage.setItem("cairn:pendingJoinCode",t)}catch{}}this.busy=!0,this.error="";try{await de()}catch(t){this.error=(t==null?void 0:t.message)??"Sign-in failed."}finally{this.busy=!1}}_toggleCode(){this._codeInputOpen=!this._codeInputOpen,this._codeInputOpen&&requestAnimationFrame(()=>{var e;(e=this.renderRoot.querySelector(".code-input"))==null||e.focus()})}_renderGoogleIcon(){return o`
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
    `}render(){return o`
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
          ${this.joinCode?o`<div class="invite-banner">
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
              ?disabled=${this.busy||!E}
              @click=${this._handleSignIn}
            >
              ${this._renderGoogleIcon()}
              ${this.busy?"Signing in…":this._codeInputOpen&&this._code.trim()?"Sign in with Google & join":"Sign in with Google"}
            </button>
          </div>
          ${this.joinCode?"":o`<div class="have-code">
                <button type="button" @click=${this._toggleCode}>
                  ${this._codeInputOpen?"× Cancel code":"I have a family code"}
                </button>
              </div>`}
          ${this._codeInputOpen?o`
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
          ${E?"":o`<div class="config-hint">
                Sign-in is awaiting your Firebase config — copy
                <code>.env.example</code> to <code>.env</code> and fill in the web-app
                values from PebblePath's Firebase Console.
              </div>`}
          ${this.error?o`<div class="error">${this.error}</div>`:""}
        </glass-panel>
      </div>
    `}}y(Te,"properties",{error:{state:!0},busy:{state:!0},joinCode:{type:String},_codeInputOpen:{state:!0},_code:{state:!0}}),y(Te,"styles",M`
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
  `);customElements.define("sign-in-screen",Te);const Zt="cairn:pendingJoinCode",Ke="cairn:pendingLoginIntent";class Ne extends A{constructor(){super(),this.error="",this.busy=!1,this.joinCode="",this._step="welcome",this._email="",this._password="",this._displayName="",this._consent=!1,this._code="",this._resetSent=!1,this._invited=!1}willUpdate(e){if(e.has("joinCode")&&this.joinCode&&!this._invited){try{localStorage.setItem(Zt,(this.joinCode??"").trim().toUpperCase())}catch{}this._invited=!0}}_iconGoogle(){return o`<svg viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.65 4.65-6.08 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.05 6.05 29.27 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20c0-1.34-.14-2.65-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.31 14.69l6.57 4.82C14.66 16.06 19.04 13 24 13c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.05 6.05 29.27 4 24 4 16.32 4 9.66 8.34 6.31 14.69z"/>
      <path fill="#4CAF50" d="M24 44c5.16 0 9.86-1.98 13.41-5.19l-6.19-5.24C29.21 35.09 26.71 36 24 36c-5.2 0-9.62-3.33-11.28-7.97l-6.51 5.02C9.5 39.56 16.23 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.79 2.24-2.23 4.16-4.09 5.57l6.19 5.24C39.5 36.46 44 30.5 44 24c0-1.34-.14-2.65-.4-3.5z"/>
    </svg>`}_iconApple(){return o`<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M17.05 12.5c0-2.92 2.4-4.32 2.5-4.4-1.36-2-3.48-2.27-4.24-2.3-1.8-.18-3.52 1.06-4.43 1.06-.92 0-2.33-1.03-3.84-1-1.97.03-3.8 1.15-4.82 2.92-2.06 3.57-.52 8.85 1.48 11.76.98 1.42 2.14 3.02 3.66 2.97 1.47-.06 2.03-.95 3.81-.95 1.78 0 2.28.95 3.84.92 1.58-.03 2.59-1.45 3.55-2.88 1.12-1.65 1.58-3.26 1.6-3.34-.04-.02-3.07-1.18-3.11-4.66zm-2.94-8.55c.81-.99 1.36-2.36 1.21-3.73-1.17.05-2.59.78-3.42 1.76-.75.87-1.4 2.27-1.23 3.6 1.3.1 2.64-.66 3.44-1.63z"/>
    </svg>`}_go(e){this._step=e,this.error="",this._resetSent=!1;try{e==="login"?localStorage.setItem(Ke,"1"):localStorage.removeItem(Ke)}catch{}}async _runAuth(e,{onSuccess:t}={}){if(!this.busy){this.busy=!0,this.error="";try{const i=await e();t==null||t(i)}catch(i){console.error(i),this.error=this._humanizeAuthError(i)}finally{this.busy=!1}}}_humanizeAuthError(e){const t=(e==null?void 0:e.code)??"";return t==="auth/invalid-credential"||t==="auth/wrong-password"?"That email and password don't match. Try again or reset your password.":t==="auth/user-not-found"?"No account with that email yet.":t==="auth/email-already-in-use"?"An account already exists for that email — try signing in instead.":t==="auth/invalid-email"?"That email doesn't look right.":t==="auth/weak-password"?"Pick a password with at least 6 characters.":t==="auth/popup-closed-by-user"?"Sign-in cancelled. Try again when you're ready.":t==="auth/popup-blocked"?"Your browser blocked the sign-in popup. Allow popups and retry.":(e==null?void 0:e.message)??"Sign-in failed. Try again."}render(){return o`
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
          ${E?"":this._renderConfigHint()}
        </glass-panel>
      </div>
    `}_renderWelcome(){return o`
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
    `}_renderProviders({google:e,apple:t,busyText:i}){return o`
      <div class="providers">
        <button
          class="provider-btn"
          ?disabled=${this.busy||!E}
          @click=${e}
        >
          ${this._iconGoogle()}
          <span>${this.busy?i:"Sign in with Google"}</span>
        </button>
        <button
          class="provider-btn apple"
          ?disabled=${this.busy||!E}
          @click=${t}
        >
          ${this._iconApple()}
          <span>${this.busy?i:"Sign in with Apple"}</span>
        </button>
      </div>
    `}_renderLogin(){return o`
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
        ${this.error?o`<div class="error">${this.error}</div>`:""}
        ${this._resetSent?o`<div class="success">Check your inbox for the reset link.</div>`:""}
        <div class="actions">
          <glass-button
            variant="primary"
            ?disabled=${this.busy}
            @click=${this._submitEmailAuth}
          >
            ${this.busy?"Signing in…":"Sign in"}
          </glass-button>
        </div>
        ${this._renderProviders({google:()=>this._runAuth(()=>de()),apple:()=>this._runAuth(()=>xe()),busyText:"Signing in…"})}
      </div>
    `}_submitEmailAuth(){const e=(this._email??"").trim(),t=this._password??"";if(this._step==="register"){const i=(this._displayName??"").trim();if(!i){this.error="Please enter your name.";return}if(!e.includes("@")){this.error="That email doesn't look right.";return}if(t.length<6){this.error="Pick a password with at least 6 characters.";return}if(!this._consent){this.error="Please confirm you are 18+ and agree to the Terms and Privacy Policy.";return}this._runAuth(()=>nt(e,t,i))}else{if(!e||!t){this.error="Email and password are required.";return}this._runAuth(()=>ot(e,t))}}async _sendReset(){const e=(this._email??"").trim();if(!e){this.error="Enter your email first, then tap Forgot password.";return}this.busy=!0,this.error="";try{await lt(e),this._resetSent=!0}catch(t){this.error=this._humanizeAuthError(t)}finally{this.busy=!1}}_renderRegister(){const e=(this._displayName??"").trim().length>0&&(this._email??"").includes("@")&&(this._password??"").length>=6&&this._consent&&!this.busy;return o`
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
        ${this.error?o`<div class="error">${this.error}</div>`:""}
        <div class="actions">
          <glass-button
            variant="primary"
            ?disabled=${!e}
            @click=${this._submitEmailAuth}
          >
            ${this.busy?"Creating account…":"Create account"}
          </glass-button>
        </div>
        ${this._renderProviders({google:()=>this._runAuth(()=>de()),apple:()=>this._runAuth(()=>xe()),busyText:"Creating…"})}
      </div>
    `}_renderConfigHint(){return o`
      <div class="config-hint">
        Sign-in is awaiting your Firebase config — copy
        <code>.env.example</code> to <code>.env</code> and fill in the web-app
        values from PebblePath's Firebase Console.
      </div>
    `}}y(Ne,"properties",{error:{state:!0},busy:{state:!0},joinCode:{type:String},_step:{state:!0},_email:{state:!0},_password:{state:!0},_displayName:{state:!0},_consent:{state:!0},_code:{state:!0},_resetSent:{state:!0},_invited:{state:!0}}),y(Ne,"styles",M`
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
  `);customElements.define("register-screen",Ne);const Q=class Q extends A{constructor(){super(),this.value="family"}_select(e){e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent("circle-change",{detail:{value:e},bubbles:!0,composed:!0})))}render(){return o`
      <div class="track" role="tablist" aria-label="Circle">
        ${Q.OPTIONS.map(e=>o`
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
    `}};y(Q,"properties",{value:{type:String,reflect:!0}}),y(Q,"OPTIONS",[{value:"personal",label:"Just me"},{value:"family",label:"Family"},{value:"extended",label:"Extended"}]),y(Q,"styles",M`
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
  `);let Re=Q;customElements.define("circle-switcher",Re);class Be extends A{constructor(){super(),this.event=null,this.members=[]}_icon(e){return e==="birthday"?o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 14h14v6H5z" />
        <path d="M5 14c0-2 1.5-3 3-3h8c1.5 0 3 1 3 3" />
        <path d="M12 11V7" />
        <path d="M11 5.5c0-.8.5-1.5 1-2 .5.5 1 1.2 1 2 0 .6-.4 1-1 1s-1-.4-1-1z" fill="currentColor" stroke="none" />
      </svg>`:e==="anniversary"?o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="9" cy="13" r="5" />
        <circle cx="15" cy="13" r="5" />
      </svg>`:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>`}_fmtDate(e){const t=$(e)??new Date(e);return{day:t.getDate(),month:t.toLocaleString("en-GB",{month:"short"})}}render(){const e=this.event;if(!e)return o``;const t=this._fmtDate(e.date),i=new Map((this.members??[]).map(a=>[a.uid,a])),r=(e.personIds??[]).map(a=>i.get(a)).filter(Boolean);return o`
      <div
        class="row"
        @click=${()=>this.dispatchEvent(new CustomEvent("edit-event",{detail:e,bubbles:!0,composed:!0}))}
      >
        <div class="icon ${e.type}">${this._icon(e.type)}</div>
        <div class="body">
          <div class="title-row">
            <div class="title">${e.title}</div>
            ${r.length>0?o`<span class="faces">
                  ${r.slice(0,3).map(a=>o`
                      <member-chip
                        .name=${a.displayName}
                        .photo=${a.photoURL??""}
                        .hue=${a.hue}
                        size="22"
                      ></member-chip>
                    `)}
                </span>`:""}
          </div>
          ${e.subtitle?o`<div class="meta">${e.subtitle}</div>`:""}
        </div>
        <div class="date">
          ${t.day}
          <small>${t.month}</small>
        </div>
      </div>
    `}}y(Be,"properties",{event:{type:Object},members:{type:Array}}),y(Be,"styles",M`
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
  `);customElements.define("event-row",Be);class je extends A{constructor(){super();y(this,"_accept","application/pdf,image/*,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword");this.open=!1,this._reset()}_reset(){this._phase="pick",this._events=[],this._err="",this._count=0}willUpdate(t){t.has("open")&&this.open&&this._reset()}_cancel(){this.dispatchEvent(new Event("cancel"))}async _onFile(t){var r;const i=(r=t.target.files)==null?void 0:r[0];if(t.target.value="",!!i){this._phase="working",this._err="";try{const{storagePath:a,fileType:s}=await b.uploadSchoolCalendar(i),n=await b.extractSchoolCalendarEvents(a,s);if(!n.length){this._phase="error",this._err="Couldn't find any dated events in that file. Try a clearer PDF or a screenshot of the calendar.";return}this._events=n.map(l=>({...l,_sel:!0})).sort((l,d)=>String(l.date).localeCompare(String(d.date))),this._phase="review"}catch(a){console.error("school import failed:",a),this._phase="error",this._err=(a==null?void 0:a.code)==="functions/permission-denied"?"You're not a member of this family.":(a==null?void 0:a.code)==="storage/unauthorized"?"The upload rule needs publishing — ask the team to deploy storage.rules.":(a==null?void 0:a.code)==="functions/not-found"||(a==null?void 0:a.code)==="functions/internal"?"The importer isn't available right now — try again in a moment.":(a==null?void 0:a.message)??"Something went wrong — try again."}}}_patch(t,i,r){const a=this._events.slice();a[t]={...a[t],[i]:r},this._events=a}get _selected(){return this._events.filter(t=>t._sel&&/^\d{4}-\d{2}-\d{2}$/.test(t.date)&&t.title.trim())}async _confirm(){const t=this._selected;if(t.length){this._phase="working";try{const i=await b.importSchoolEvents(t.map(r=>({date:r.date,title:r.title.trim(),type:r.type})));this._count=i,this._phase="done",f(`Added ${i} event${i===1?"":"s"} to the calendar.`),this.dispatchEvent(new CustomEvent("added",{detail:i}))}catch(i){console.error("importSchoolEvents failed:",i),this._phase="error",this._err=(i==null?void 0:i.code)==="permission-denied"?"Couldn't save — you may not have permission.":(i==null?void 0:i.message)??"Couldn't save the events — try again."}}}render(){return this.open?o`
      <div class="backdrop" @click=${this._cancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Import school calendar</h2>
            <button class="close" @click=${this._cancel} aria-label="Close">
              ×
            </button>
          </div>
          ${this._phase==="pick"?o`
                <p class="lede">
                  Upload the calendar your school sent —
                  <strong>PDF, a screenshot, or a Word doc</strong>. Pebble
                  reads it and pulls out the dates (closures, holidays,
                  INSET days, activities). You'll review and pick which to
                  add before anything lands on the family calendar.
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
          ${this._phase==="working"?o`<div class="working">
                <div class="spin"></div>
                <div>Reading the calendar…</div>
              </div>`:""}
          ${this._phase==="review"?o`
                <p class="lede">
                  Found <strong>${this._events.length}</strong> dated
                  ${this._events.length===1?"event":"events"}. Uncheck
                  any you don't want, fix a date or title if Pebble got it
                  slightly wrong, then add them.
                </p>
                <div class="list">
                  ${this._events.map((t,i)=>o`<div class="row ${t._sel?"":"off"}">
                      <input
                        type="checkbox"
                        .checked=${t._sel}
                        @change=${r=>this._patch(i,"_sel",r.target.checked)}
                        aria-label="Include this event"
                      />
                      <input
                        type="date"
                        .value=${t.date}
                        @change=${r=>this._patch(i,"date",r.target.value)}
                      />
                      <input
                        class="t"
                        type="text"
                        .value=${t.title}
                        @input=${r=>this._patch(i,"title",r.target.value)}
                      />
                      <span class="ty">${t.type}</span>
                    </div>`)}
                </div>
                <div class="foot">
                  <span class="selinfo"
                    >${this._selected.length} selected</span
                  >
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
          ${this._phase==="done"?o`<div class="done">
                <div class="big">${this._count}</div>
                <div class="sub">
                  event${this._count===1?"":"s"} added to your family
                  calendar.
                </div>
                <button class="btn-primary" @click=${this._cancel}>
                  Done
                </button>
              </div>`:""}
          ${this._phase==="error"?o`<div>
                <div class="err">${this._err}</div>
                <div class="foot" style="justify-content:center;">
                  <button class="btn-ghost" @click=${()=>this._reset()}>
                    Try again
                  </button>
                </div>
              </div>`:""}
        </glass-panel>
      </div>
    `:o``}}y(je,"properties",{open:{type:Boolean,reflect:!0},_phase:{state:!0},_events:{state:!0},_err:{state:!0},_count:{state:!0}}),y(je,"styles",M`
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
    .selinfo { font-size: 12.5px; color: var(--text-secondary); }
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
  `);customElements.define("school-import-modal",je);const Xe=[{vb:"0 0 100 70",d:"M 8 38 C 6 18, 26 6, 48 8 C 72 10, 94 18, 94 38 C 94 58, 72 66, 48 64 C 22 62, 10 58, 8 38 Z"},{vb:"0 0 80 90",d:"M 38 6 C 56 8, 70 24, 72 46 C 74 70, 58 84, 38 84 C 16 84, 6 66, 8 44 C 10 22, 22 4, 38 6 Z"},{vb:"0 0 90 80",d:"M 14 26 C 18 10, 38 4, 56 8 C 78 14, 86 32, 82 50 C 76 70, 54 78, 32 72 C 12 66, 10 42, 14 26 Z"},{vb:"0 0 70 60",d:"M 8 30 C 8 14, 22 6, 38 8 C 54 10, 64 22, 62 36 C 60 52, 44 56, 28 54 C 14 52, 8 44, 8 30 Z"},{vb:"0 0 110 75",d:"M 8 38 C 6 18, 30 8, 56 10 C 84 12, 104 22, 104 40 C 102 58, 80 68, 52 66 C 24 64, 10 56, 8 38 Z"},{vb:"0 0 95 75",d:"M 14 24 C 18 10, 40 6, 56 12 C 70 18, 80 18, 86 30 C 90 44, 80 56, 64 60 C 48 64, 28 60, 18 50 C 10 42, 10 32, 14 24 Z"},{vb:"0 0 80 80",d:"M 14 20 C 20 10, 36 6, 52 10 C 68 16, 76 30, 72 48 C 66 64, 50 72, 32 66 C 16 60, 8 44, 10 30 C 12 24, 12 22, 14 20 Z"}];function Qt(c){let e=5381;const t=String(c??"");for(let i=0;i<t.length;i+=1)e=e*33^t.charCodeAt(i);return Xe[Math.abs(e)%Xe.length]}const Ze={motor:{cls:"fam-motor",fill:"#6b9ac4",dom:"Motor"},language:{cls:"fam-language",fill:"#d4a843",dom:"Language"},socialEmotional:{cls:"fam-social",fill:"#c98a8a",dom:"Social-Emotional"},cognitive:{cls:"fam-cognitive",fill:"#8b7bb5",dom:"Cognitive"},cross:{cls:"fam-cross",fill:"#3d9b8f",dom:""}},Qe={strength:{label:"Strength",svg:o`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.6l-5.88 3.01 1.12-6.55-4.76-4.64 6.58-.96L12 2.5z"/></svg>`},watching:{label:"Watching",svg:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3.2"/></svg>`},connection:{label:"Connection",svg:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.07.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.07-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`},nudge:{label:"Try this",svg:o`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>`}};class Oe extends A{constructor(){super(),this.type="nudge",this.domain="cross",this.title="",this.body=""}render(){const e=Ze[this.domain]??Ze.cross,t=Qe[this.type]??Qe.nudge,i=Qt(`${this.title}${this.type}`);return o`
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
              ${e.dom?o`<span class="sep">·</span
                    ><span class="dom">${e.dom}</span>`:""}
            </div>
            <h4>${this.title}</h4>
            <p>${this.body}</p>
          </div>
        </div>
      </div>
    `}}y(Oe,"properties",{type:{type:String},domain:{type:String},title:{type:String},body:{type:String}}),y(Oe,"styles",M`
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
  `);customElements.define("insight-card",Oe);const se=[{key:"motor",label:"Motor",color:"#6b9ac4",svg:o`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="13.5" cy="5.5" r="2"/><path d="M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5 0-.8.1L6 7.6V12h2V8.9l1.8-.7z"/></svg>`},{key:"language",label:"Language",color:"#d4a843",svg:o`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>`},{key:"socialEmotional",label:"Social-Emotional",color:"#c98a8a",svg:o`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`},{key:"cognitive",label:"Cognitive",color:"#8b7bb5",svg:o`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11 4.2A2.7 2.7 0 0 0 6.4 5.9a2.6 2.6 0 0 0-2.5 2.6c0 .5.1.9.3 1.3A2.7 2.7 0 0 0 3 12.2a2.7 2.7 0 0 0 1.2 2.2 2.6 2.6 0 0 0-.2 1c0 1.5 1.2 2.7 2.7 2.7.2 0 .4 0 .6-.1A2.7 2.7 0 0 0 11 20V4.2zm2 0v15.8a2.7 2.7 0 0 0 3.7-1.9c.2 0 .4.1.6.1 1.5 0 2.7-1.2 2.7-2.7 0-.4-.1-.7-.2-1A2.7 2.7 0 0 0 21 12.2a2.7 2.7 0 0 0-1.2-2.4c.2-.4.3-.8.3-1.3a2.6 2.6 0 0 0-2.5-2.6A2.7 2.7 0 0 0 13 4.2z"/></svg>`}];function te(c){return c==="selfCare"?"motor":c}function ei(c){var s;if(!c||Number.isNaN(((s=c.getTime)==null?void 0:s.call(c))??NaN))return"";const e=new Date;let t=(e.getFullYear()-c.getFullYear())*12+(e.getMonth()-c.getMonth());e.getDate()<c.getDate()&&(t-=1),t=Math.max(0,t);const i=Math.floor(t/12),r=t%12;if(i===0)return`${r} month${r===1?"":"s"}`;const a=r?`, ${r} month${r===1?"":"s"}`:"";return`${i} year${i===1?"":"s"}${a}`}class Le extends A{constructor(){super(),this.child=null,this.children=[],this.milestones=[],this.insights=[],this.dailyCard=null,this.readonly=!1}_domainStats(e){const t=(this.milestones??[]).filter(a=>te(a.category)===e),i=t.filter(a=>a.status==="achieved").length,r=t.length;return{achieved:i,total:r,pct:r?Math.round(i/r*100):0}}_pebbleIcon(){return o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" /></svg>`}_ageMonths(e){var r;if(!e||Number.isNaN(((r=e.getTime)==null?void 0:r.call(e))??NaN))return 0;const t=new Date;let i=(t.getFullYear()-e.getFullYear())*12+(t.getMonth()-e.getMonth());return t.getDate()<e.getDate()&&(i-=1),Math.max(0,i)}_timelineModel(){var g;const e=this.milestones??[],t=this._ageMonths((g=this.child)==null?void 0:g.dateOfBirth),i=e.reduce((p,h)=>h.status==="achieved"?Math.max(p,h.ageRangeEndMonths??h.ageRangeStartMonths??0):p,0);let r=Math.max(i+12,t+6,18);r=Math.ceil(r/6)*6;const a=p=>Math.min(98,Math.max(2,(p??0)/r*100)),s=[{key:"motor",cls:"motor",name:"Motor"},{key:"language",cls:"language",name:"Language"},{key:"socialEmotional",cls:"social",name:"Social-Emo."},{key:"cognitive",cls:"cognitive",name:"Cognitive"}].map(p=>{const h=e.filter(k=>te(k.category)===p.key),m=h.filter(k=>k.status==="achieved").sort((k,S)=>(k.ageRangeStartMonths??0)-(S.ageRangeStartMonths??0));let x=m;m.length>7&&(x=Array.from({length:7},(k,S)=>m[Math.round(S*(m.length-1)/6)]));const C=x.map(k=>({left:a(k.ageRangeStartMonths),future:!1})),z=h.filter(k=>k.status!=="achieved").sort((k,S)=>(k.ageRangeStartMonths??0)-(S.ageRangeStartMonths??0))[0];return z&&C.push({left:a(z.ageRangeStartMonths),future:!0}),{...p,dots:C}}),n=p=>p<=0?"birth":p<24?`${p} mo`:p%12===0?`${p/12} yr`:`${(p/12).toFixed(1).replace(/\.0$/,"")} yr`,l=Array.from({length:7},(p,h)=>n(Math.round(h*r/6))),d=Math.min(1,Math.max(0,t/r));return{lanes:s,axis:l,ageM:t,nowFrac:d}}render(){const e=this.child;if(!e)return o`<div class="panel empty">No child selected yet.</div>`;const t=this.milestones??[],i=t.filter(h=>h.status==="achieved"),r=t.length?Math.round(i.length/t.length*100):0,a=i.slice().sort((h,m)=>(m.ageRangeStartMonths??0)-(h.ageRangeStartMonths??0)).slice(0,4),s=t.filter(h=>h.status!=="achieved").slice(0,5),n=e.themeColorHex||"var(--teal-pebble)",l=this.insights??[],d=this._timelineModel(),g=h=>h==="achieved"?"done":h==="emerging"?"emerging":"up",p=h=>h==="achieved"?"Achieved":h==="emerging"?"Emerging":"Upcoming";return o`
      ${(this.children??[]).length>1?o`<div class="switcher">
            ${this.children.map(h=>o`<button
                class=${h.id===e.id?"on":""}
                @click=${()=>this.dispatchEvent(new CustomEvent("select-child",{detail:h.id,bubbles:!0,composed:!0}))}
              >
                <member-chip
                  .name=${h.name}
                  .photo=${h.profilePhotoURL??""}
                  .hue=${150}
                  size="22"
                ></member-chip>
                ${h.name}
              </button>`)}
          </div>`:""}

      <section>
        <div
          class="child-card"
          style="--theme:${n};--wm:url('${"/portal/"}assets/playgroundv2.jpg');"
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
            <div class="sub">${ei(e.dateOfBirth)}</div>
            <span class="agepill"
              >${i.length} of ${t.length} milestones
              achieved</span
            >
          </div>
          <div class="progress">
            <div class="big">${r}%</div>
            <div class="lbl">of tracked milestones</div>
          </div>
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2>Milestone areas</h2>
        </div>
        <div class="domains">
          ${se.map(h=>{const m=this._domainStats(h.key);return o`<div
              class="dtile"
              style="--c:${h.color};--tint:${h.color}26;"
            >
              <div class="dico">${h.svg}</div>
              <div class="dname">${h.label}</div>
              <div class="dcount">${m.achieved} of ${m.total} achieved</div>
              <div class="bar"><i style="width:${m.pct}%"></i></div>
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
              style="left:calc(var(--tl-pad, 118px) + (100% - var(--tl-pad, 118px)) * ${d.nowFrac});"
            >
              <span>Today</span>
            </div>
            ${d.lanes.map(h=>o`<div class="tl-lane ${h.cls}">
                <div class="tl-name">${h.name}</div>
                <div class="tl-track">
                  ${h.dots.map(m=>o`<i
                      class=${m.future?"future":""}
                      style="left:${m.left}%"
                    ></i>`)}
                </div>
              </div>`)}
            <div class="tl-axis">
              ${d.axis.map(h=>o`<span>${h}</span>`)}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="two-col">
          <div>
            <div class="section-head"><h2>Coming up</h2></div>
            <div class="panel">
              ${s.length===0?o`<div class="empty">
                    Nothing flagged as next right now — ${e.name} is on
                    track across the board.
                  </div>`:s.map(h=>{var x,C;const m=((x=se.find(z=>z.key===te(h.category)))==null?void 0:x.color)??"#6b9ac4";return o`<div class="ms-row">
                      <span class="ms-dot" style="background:${m}"></span>
                      <div class="t">
                        ${h.title}
                        <small
                          >${((C=se.find(z=>z.key===te(h.category)))==null?void 0:C.label)??""}
                          · ${h.ageRangeStartMonths}–${h.ageRangeEndMonths}
                          months</small
                        >
                      </div>
                      <span class="ms-stat ${g(h.status)}"
                        >${p(h.status)}</span
                      >
                    </div>`})}
            </div>
            <div class="section-head" style="margin-top:18px;">
              <h2>Recently achieved</h2>
            </div>
            <div class="panel">
              ${a.length===0?o`<div class="empty">
                    No milestones logged as achieved yet.
                  </div>`:a.map(h=>{var x;const m=((x=se.find(C=>C.key===te(h.category)))==null?void 0:x.color)??"#6b9ac4";return o`<div class="ms-row">
                      <span class="ms-dot" style="background:${m}"></span>
                      <div class="t">${h.title}</div>
                      <span class="ms-stat done">Achieved</span>
                    </div>`})}
            </div>
          </div>

          <div>
            <div class="section-head"><h2>Growth insights</h2></div>
            ${l.length===0?o`<div class="panel insights-empty">
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
                </div>`:o`<div class="insight-stack">
                  ${l.map(h=>o`<insight-card
                      .type=${h.type}
                      .domain=${h.domain}
                      .title=${h.title}
                      .body=${h.body}
                    ></insight-card>`)}
                </div>`}
          </div>
        </div>
      </section>

      <section>
        ${this.readonly?o`<div class="vis-note">
              You're seeing ${e.name}'s milestones &amp; growth
              insights <b>read-only</b>, shared by the parents. Pebble,
              the pediatrician summary and any editing stay with the
              parents — a parent can revoke this access any time.
            </div>`:o`<div class="panel">
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
    `}}y(Le,"properties",{child:{type:Object},children:{type:Array},milestones:{type:Array},insights:{type:Array},dailyCard:{type:Object},readonly:{type:Boolean,reflect:!0}}),y(Le,"styles",M`
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
    .tl-track i {
      position: absolute;
      top: 50%;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      /* Punch-through halo matches the card surface in both themes
         so the dot reads as sitting cleanly on the rail. */
      box-shadow: 0 0 0 3px var(--panel-solid);
    }
    .tl-lane.motor .tl-track i { background: #6b9ac4; }
    .tl-lane.language .tl-track i { background: #d4a843; }
    .tl-lane.social .tl-track i { background: #c98a8a; }
    .tl-lane.cognitive .tl-track i { background: #8b7bb5; }
    .tl-track i.future {
      background: transparent !important;
      border: 2px dashed var(--glass-border-strong);
      box-shadow: none;
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
  `);customElements.define("child-overview",Le);class Ue extends A{constructor(){super(),this.child=null,this.messages=[],this.sessions=[],this.prefill="",this.memberProfiles={},this.myUid="",this._session=[],this._input="",this._loading=!1,this._error="",this._seededKey="",this._activeSessionId=null,this._renamingId=null,this._isPrivate=!1,this._railOpen=!1,this.compact=!1,this._listening=!1,this._recognition=null}disconnectedCallback(){var e;super.disconnectedCallback();try{(e=this._recognition)==null||e.abort()}catch{}this._recognition=null}get _voiceSupported(){return!!(window.SpeechRecognition||window.webkitSpeechRecognition)}_toggleVoice(){var i;if(this._listening){try{(i=this._recognition)==null||i.stop()}catch{}return}const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e)return;const t=new e;t.lang="en-US",t.interimResults=!0,t.continuous=!1,t.onresult=r=>{let a="";for(let s=0;s<r.results.length;s+=1)a+=r.results[s][0].transcript;this._input=a},t.onerror=r=>{this._listening=!1,(r.error==="not-allowed"||r.error==="service-not-allowed")&&(this._error="Microphone access is blocked — allow it in your browser to ask by voice.")},t.onend=()=>{this._listening=!1,this._recognition=null},this._recognition=t,this._listening=!0,this._error="";try{t.start()}catch{this._listening=!1,this._recognition=null}}willUpdate(e){var i;if(e.has("child")&&(this._session=[],this._error="",this._activeSessionId=null,this._seededKey=""),this._activeSessionId==null&&(e.has("sessions")||e.has("messages")||e.has("child"))){const r=this._sessionList();r.length&&(this._activeSessionId=r[0].id)}const t=`${((i=this.child)==null?void 0:i.id)??""}|${this._activeSessionId??""}`;if(t!==this._seededKey&&(e.has("messages")||e.has("sessions")||e.has("child")||e.has("_activeSessionId"))){this._session=this._messagesForActive().map(a=>({role:a.role,content:a.content,senderUid:a.senderUid,isPrivate:a.isPrivate===!0})),this._seededKey=t;const r=this._activeSession();this._isPrivate=r?r.isPrivate===!0:!1}e.has("prefill")&&this.prefill&&(this._input=this.prefill)}_sessionList(){const e=(this.sessions??[]).map(i=>({id:i.id,title:i.title||"Untitled chat",isPrivate:i.isPrivate===!0,_real:!0}));return(this.messages??[]).some(i=>!i.sessionId)&&e.push({id:"__legacy",title:"Earlier chats",isPrivate:!1,_real:!1}),e}_activeSession(){return this._sessionList().find(e=>e.id===this._activeSessionId)??null}_messagesForActive(){const e=this._activeSessionId;if(e==null)return[];const t=this.messages??[];return e==="__legacy"?t.filter(i=>!i.sessionId):t.filter(i=>i.sessionId===e)}_selectSession(e){if(this._activeSessionId===e){this._railOpen=!1;return}this._activeSessionId=e,this._railOpen=!1,this._error=""}async _newChat(){var e;if(this._railOpen=!1,this._error="",!!((e=this.child)!=null&&e.id))try{const t=await b.createPebbleSession(this.child.id,{title:"New chat",isPrivate:!1});this._activeSessionId=t,this._session=[],this._input="",this.updateComplete.then(()=>{var i;return(i=this.renderRoot.querySelector("textarea"))==null?void 0:i.focus()})}catch(t){this._error=(t==null?void 0:t.message)??"Couldn't start a new chat."}}async _renameSession(e){var r;if(!(e!=null&&e._real)||!((r=this.child)!=null&&r.id))return;const t=window.prompt("Rename chat",e.title);if(t==null)return;const i=t.trim();if(!(!i||i===e.title))try{await b.renamePebbleSession(this.child.id,e.id,i)}catch(a){this._error=(a==null?void 0:a.message)??"Couldn't rename."}}async _archiveSession(e){var t;if(!(!(e!=null&&e._real)||!((t=this.child)!=null&&t.id))&&window.confirm(`Archive "${e.title}"? It'll leave your chat list.`))try{await b.archivePebbleSession(this.child.id,e.id),this._activeSessionId===e.id&&(this._activeSessionId=null,this._seededKey="")}catch(i){this._error=(i==null?void 0:i.message)??"Couldn't archive."}}async _togglePrivacy(e){var i;const t=this._activeSession();if(this._isPrivate=e,!(!t||!t._real||!((i=this.child)!=null&&i.id)))try{await b.setPebbleSessionPrivacy(this.child.id,t.id,e)}catch(r){this._error=(r==null?void 0:r.message)??"Couldn't change privacy."}}updated(e){(e.has("messages")||e.has("_session")||e.has("_loading"))&&this.updateComplete.then(()=>this._scrollToBottom())}_scrollToBottom(){const e=this.renderRoot.querySelector(".thread");e&&(e.scrollTop=e.scrollHeight)}_suggestions(){var t;const e=((t=this.child)==null?void 0:t.name)??"your child";return[`What's coming up for ${e}?`,`Ideas for a rainy weekend with ${e}`,`Is ${e}'s speech on track?`,`How can I support ${e} this week?`]}_recentQuestions(){const e=[];return this._session.forEach((t,i)=>{if(t.role!=="user")return;const r=String(t.content??"").trim();r&&e.push({idx:i,text:r,isPrivate:t.isPrivate===!0})}),e.reverse()}_scrollToMsg(e){this._railOpen=!1,this.updateComplete.then(()=>{const t=this.renderRoot.querySelector(`.thread [data-idx="${e}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"center"})})}_newQuestion(){this._railOpen=!1,this._input="",this.updateComplete.then(()=>{const e=this.renderRoot.querySelector("textarea");e==null||e.focus(),this._scrollToBottom()})}async _send(e){var n;const t=(e??this._input).trim();if(!t||this._loading)return;if(!((n=this.child)!=null&&n.id)){this._error="No child selected.";return}this._error="",this._input="";const i=this._session.slice(-20).map(l=>({role:l.role,content:l.content})),r=this._isPrivate===!0;let a=this._activeSessionId;const s=this._activeSession();if(!s||!s._real)try{a=await b.createPebbleSession(this.child.id,{title:t.slice(0,48),isPrivate:r}),this._activeSessionId=a,this._seededKey=`${this.child.id}|${a}`,this._session=[]}catch(l){this._error=(l==null?void 0:l.message)??"Couldn't start a chat.";return}else s.title==="New chat"&&this._session.filter(l=>l.role==="user").length===0&&b.renamePebbleSession(this.child.id,a,t.slice(0,48)).catch(()=>{});this._session=[...this._session,{role:"user",content:t,senderUid:this.myUid,isPrivate:r}],this._loading=!0;try{const l=await b.askPebbleAboutChild(this.child.id,t,i,r,a);this._session=[...this._session,{role:"assistant",content:(l==null?void 0:l.answer)??"…",isPrivate:r,senderUid:r?this.myUid:void 0}]}catch(l){console.error(l),(l==null?void 0:l.code)==="functions/unauthenticated"?this._error="Pebble needs you to be signed in.":(l==null?void 0:l.code)==="functions/permission-denied"?this._error="Pebble's child advisor is for parents on this household.":(l==null?void 0:l.code)==="functions/not-found"||(l==null?void 0:l.code)==="functions/internal"?this._error="Pebble isn't available right now — try again in a moment.":this._error=(l==null?void 0:l.message)??"Pebble could not answer right now."}finally{this._loading=!1}}_pico(){return o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" /></svg>`}_senderName(e){var i;if(!e||e===this.myUid)return"You";const t=(i=this.memberProfiles)==null?void 0:i[e];return t!=null&&t.displayName?t.displayName:e.charAt(0).toUpperCase()+e.slice(1)}_senderPhoto(e){var i,r;const t=(r=(i=this.memberProfiles)==null?void 0:i[e])==null?void 0:r.profilePhotoURL;return typeof t=="string"&&/^https?:\/\//i.test(t)?t:""}_fmt(e){const i=String(e??"").replace(/^[ \t\u00A0]+/gm,"").trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*([^*]+)\*\*/g,"<b>$1</b>").replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,!?]|$)/g,"$1<i>$2</i>").replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');return yt(i)}render(){var s;const e=((s=this.child)==null?void 0:s.name)??"your child",t=this._session.length>0,i=this._sessionList(),r=this._activeSession(),a=!!(r&&r._real);return o`
      <div class="pebble-wrap ${this.compact?"compact":""}">
        <aside class="rail ${this._railOpen?"open":""}">
          <div class="rail-head">Chats</div>
          <button class="rail-new" @click=${()=>this._newChat()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
            New chat
          </button>
          ${i.length===0?o`<div class="rail-empty">
                No chats yet — start one and ask Pebble anything about
                ${e}.
              </div>`:i.map(n=>o`<div
                  class="rail-item ${n.id===this._activeSessionId?"on":""}"
                  title=${n.title}
                  @click=${()=>this._selectSession(n.id)}
                >
                  ${n.isPrivate?o`<svg class="lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3" stroke-linecap="round"/></svg>`:""}
                  <span class="rail-title">${n.title}</span>
                  ${n._real?o`<span class="rail-acts">
                        <button
                          class="ra"
                          title="Rename"
                          @click=${l=>{l.stopPropagation(),this._renameSession(n)}}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                        </button>
                        <button
                          class="ra"
                          title="Archive"
                          @click=${l=>{l.stopPropagation(),this._archiveSession(n)}}
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-3-3.87M9 21v-2a4 4 0 0 1 3-3.87"/><circle cx="9" cy="7" r="3"/><circle cx="17" cy="8" r="2.4"/></svg>
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
            ${t?o`
                  ${this._session.map((n,l)=>n.role==="assistant"?o`<div class="msg pb" data-idx="${l}">
                          <span class="pic">${this._pico()}</span>
                          <div class="col">
                            <!-- prettier-ignore -->
                            <div class="bubble">${this._fmt(n.content)}</div>
                          </div>
                        </div>`:o`<div class="msg you" data-idx="${l}">
                          <span class="av">
                            <member-chip
                              .name=${this._senderName(n.senderUid)}
                              .photo=${this._senderPhoto(n.senderUid)}
                              .hue=${8}
                              size="30"
                            ></member-chip>
                          </span>
                          <div class="col">
                            <div class="said">
                              ${this._senderName(n.senderUid)} asked${n.isPrivate?" · private":""}
                            </div>
                            <div class="bubble">${this._fmt(n.content)}</div>
                          </div>
                        </div>`)}
                  ${this._loading?o`<div class="typing">
                        <span></span><span></span><span></span>
                      </div>`:""}
                `:o`<div class="empty">
                  <div class="lede">Hi — what's on your mind?</div>
                  <div class="sub">
                    I know ${e}'s milestones, recent observations and
                    Pebble's running notes. Ask about development,
                    activities, sleep, behaviour — anything ${e}-shaped.
                  </div>
                  <div class="prompts">
                    ${this._suggestions().map(n=>o`<button @click=${()=>this._send(n)}>
                        ${n}
                      </button>`)}
                  </div>
                </div>`}
          </div>

          ${this._error?o`<div class="error">${this._error}</div>`:""}

          <form
            class="composer"
            @submit=${n=>{n.preventDefault(),this._send()}}
          >
            <textarea
              placeholder="Ask Pebble about ${e}…"
              .value=${this._input}
              @input=${n=>this._input=n.target.value}
              @keydown=${n=>{n.key==="Enter"&&!n.shiftKey&&(n.preventDefault(),this._send())}}
              ?disabled=${this._loading}
            ></textarea>
            ${this._voiceSupported?o`<button
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
    `}}y(Ue,"properties",{child:{type:Object},messages:{type:Array},sessions:{type:Array},prefill:{type:String},memberProfiles:{type:Object},myUid:{type:String},_session:{state:!0},_input:{state:!0},_loading:{state:!0},_error:{state:!0},_seededKey:{state:!0},_activeSessionId:{state:!0},_renamingId:{state:!0},_listening:{state:!0},_isPrivate:{state:!0},_railOpen:{state:!0},compact:{type:Boolean}}),y(Ue,"styles",M`
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
  `);customElements.define("child-pebble",Ue);const he=[{key:"visit",label:"Visit"},{key:"meal",label:"Meal"},{key:"travel",label:"Travel"},{key:"note",label:"Note"}],ti=[{m:30,label:"30 min"},{m:60,label:"1 h"},{m:90,label:"1½ h"},{m:120,label:"2 h"},{m:180,label:"3 h"},{m:240,label:"4 h"},{m:480,label:"All day"}],N=56;function et(c){const e=String(c??"").match(/^(\d{4})-(\d{2})-(\d{2})/);return e?new Date(Number(e[1]),Number(e[2])-1,Number(e[3])):null}function ii(c){const e=c.getFullYear(),t=String(c.getMonth()+1).padStart(2,"0"),i=String(c.getDate()).padStart(2,"0");return`${e}-${t}-${i}`}function oe(c){const e=String(c??"").match(/^(\d{1,2}):?(\d{2})?/);return e?Number(e[1])+(e[2]?Number(e[2])/60:0):null}function ge(c){const e=Math.floor(c),t=Math.round((c-e)*60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}class Ge extends A{constructor(){super(),this.open=!1,this.trip=null,this.members=[],this.currentUid="",this._items=[],this._dayKey=null,this._title="",this._time="12:00",this._type="visit",this._dur=60,this._url="",this._file=null,this._fileName="",this._busy=!1,this._view="day",this._weekStart=0,this._sel=null,this._dragCtx=null,this._onGridMove=this._gridMove.bind(this),this._onGridUp=this._gridUp.bind(this),this._unsub=null,this._subId=null}_weekDays(){const e=this._days();if(e.length<=7)return e;const t=Math.min(Math.max(0,this._weekStart),Math.max(0,e.length-7));return e.slice(t,t+7)}_minFromPointer(e,t,i,r){const a=t.getBoundingClientRect(),s=Math.max(0,Math.min(e-a.top,a.height)),n=i*60+s/N*60,l=Math.round(n/15)*15;return Math.max(i*60,Math.min(r*60,l))}_gridDown(e,t,i,r){if(e.button!=null&&e.button!==0||e.target.closest&&e.target.closest(".evt, .wk-evt, button, a"))return;const a=e.currentTarget,s=this._minFromPointer(e.clientY,a,i,r);this._dragCtx={dayKey:t,lo:i,hi:r,el:a},this._sel={dayKey:t,aMin:s,bMin:s},window.addEventListener("pointermove",this._onGridMove),window.addEventListener("pointerup",this._onGridUp),e.preventDefault()}_gridMove(e){if(!this._dragCtx||!this._sel)return;const{el:t,lo:i,hi:r}=this._dragCtx;this._sel={...this._sel,bMin:this._minFromPointer(e.clientY,t,i,r)}}_gridUp(){window.removeEventListener("pointermove",this._onGridMove),window.removeEventListener("pointerup",this._onGridUp);const e=this._sel,t=this._dragCtx;if(this._sel=null,this._dragCtx=null,!e||!t)return;let i=Math.min(e.aMin,e.bMin),a=Math.max(e.aMin,e.bMin)-i;a<15&&(a=this._dur&&this._dur>=15?this._dur:60);const s=String(Math.floor(i/60)).padStart(2,"0"),n=String(i%60).padStart(2,"0");this._dayKey=e.dayKey,this._time=`${s}:${n}`,this._dur=a,this.updateComplete.then(()=>{const l=this.renderRoot.querySelector(".add-row input.t");l&&l.focus()})}_selGhost(e,t){const i=this._sel;if(!i||i.dayKey!==e)return"";const r=Math.min(i.aMin,i.bMin),a=Math.max(i.aMin,i.bMin),s=(r-t*60)/60*N,n=Math.max(3,(a-r)/60*N),l=`${String(Math.floor(r/60)).padStart(2,"0")}:${String(r%60).padStart(2,"0")}`;return o`<div
      class="sel-ghost"
      style="top:${s}px;height:${n}px;"
    >
      <span>${l}</span>
    </div>`}willUpdate(e){var t,i;if(e.has("open")||e.has("trip")){const r=((t=this.trip)==null?void 0:t.id)??null;this.open&&r?this._subId!==r&&(this._teardown(),this._subId=r,this._dayKey=((i=this._days()[0])==null?void 0:i.key)??"",this._unsub=b.planItemsListener(r,a=>{this._items=a})):this.open||this._teardown()}}disconnectedCallback(){super.disconnectedCallback(),this._teardown()}_teardown(){var e;(e=this._unsub)==null||e.call(this),this._unsub=null,this._subId=null,this._items=[],window.removeEventListener("pointermove",this._onGridMove),window.removeEventListener("pointerup",this._onGridUp),this._sel=null,this._dragCtx=null}_close(){this.dispatchEvent(new Event("cancel"))}_days(){var s,n;const e=et((s=this.trip)==null?void 0:s.start),t=et((n=this.trip)==null?void 0:n.end)??e;if(!e)return[{key:"",lbl:"Day",d:"The trip"}];const i=[],r=new Date(e);let a=0;for(;r<=t&&a<31;)i.push({key:ii(r),lbl:r.toLocaleDateString("en-GB",{weekday:"short"}),d:r.toLocaleDateString("en-GB",{day:"numeric",month:"short"})}),r.setDate(r.getDate()+1),a+=1;return i.length?i:[{key:"",lbl:"Day",d:"The trip"}]}_member(e){return(this.members??[]).find(t=>t.uid===e)??null}async _add(){const e=this._title.trim();if(!e||this._busy)return;this._busy=!0;const t=this._file;try{const i=await b.addPlanItem(this.trip.id,{title:e,type:this._type,day:this._dayKey??"",time:this._time||"",durationMins:this._dur,url:this._url.trim()});if(t&&i)try{const r=await b.uploadPlanAttachment(this.trip.id,i,t);await b.updatePlanItem(this.trip.id,i,{attachmentURL:r,attachmentName:t.name||"attachment"})}catch(r){console.error("plan attachment upload failed:",r),f((r==null?void 0:r.code)==="storage/unauthorized"?"Item added — but the attachment needs the Storage rule published.":"Item added — couldn't attach the file, try again.",{duration:5e3})}this._title="",this._url="",this._file=null,this._fileName="",this._dur=60}catch(i){console.error("addPlanItem failed:",i),f((i==null?void 0:i.code)==="permission-denied"?"Couldn't add — the planner rule may need publishing.":`Couldn't add: ${(i==null?void 0:i.message)??"try again"}`,{duration:5e3})}finally{this._busy=!1}}async _remove(e){try{await b.deletePlanItem(this.trip.id,e.id)}catch(t){f(`Couldn't remove: ${(t==null?void 0:t.code)??(t==null?void 0:t.message)}`,{duration:4e3})}}_renderWeek(){const e=this._weekDays(),t=e.length||1,i=new Set(e.map(d=>d.key)),r=(this._items||[]).filter(d=>i.has(String(d.day??"")));let a=8,s=20;for(const d of r){const g=oe(d.time);if(g==null)continue;const p=Math.max(.5,(Number(d.durationMins)||60)/60);a=Math.min(a,Math.floor(g)),s=Math.max(s,Math.ceil(g+p))}a=Math.max(0,Math.min(a,8)),s=Math.min(24,Math.max(s,20));const n=[];for(let d=a;d<s;d++)n.push(o`<div class="wk-hr">${String(d).padStart(2,"0")}:00</div>`);const l=(s-a)*N;return o`
      <div class="wk">
        <div class="wk-head" style="--cols:${t};">
          <div class="wk-hc"></div>
          ${e.map(d=>o`<div
              class="wk-hc ${d.key===(this._dayKey??"")?"on":""}"
              title="Open ${d.d} in day view"
              @click=${()=>{this._dayKey=d.key,this._view="day"}}
            >
              ${d.lbl}<small>${d.d}</small>
            </div>`)}
        </div>
        <div class="wk-body" style="--cols:${t};">
          <div class="wk-gutter">${n}</div>
          ${e.map(d=>{const g=r.filter(p=>String(p.day??"")===String(d.key));return o`<div
              class="wk-col"
              style="height:${l}px;"
              @pointerdown=${p=>this._gridDown(p,d.key,a,s)}
            >
              ${this._selGhost(d.key,a)}
              ${g.map(p=>{const h=oe(p.time);if(h==null)return"";const m=Math.max(.5,(Number(p.durationMins)||60)/60),x=(h-a)*N+2,C=Math.max(26,m*N-4),z=he.some(k=>k.key===p.type)?p.type:"note";return o`<div
                  class="wk-evt ${z}"
                  style="top:${x}px;height:${C}px;"
                  title=${p.title}
                >
                  ${p.addedBy===this.currentUid?o`<button
                        class="wkdel"
                        title="Remove"
                        @click=${()=>this._remove(p)}
                      >
                        ×
                      </button>`:""}
                  <b>${p.title}</b>
                  <span>${ge(h)}</span>
                </div>`})}
            </div>`})}
        </div>
      </div>
    `}render(){var l;if(!this.open||!this.trip)return o``;const e=this._days(),t=this._dayKey??((l=e[0])==null?void 0:l.key)??"",i=(this._items||[]).filter(d=>String(d.day??"")===String(t));let r=8,a=20;for(const d of i){const g=oe(d.time);if(g==null)continue;const p=Math.max(.5,(Number(d.durationMins)||60)/60);r=Math.min(r,Math.floor(g)),a=Math.max(a,Math.ceil(g+p))}r=Math.max(0,Math.min(r,8)),a=Math.min(24,Math.max(a,20));const s=[];for(let d=r;d<a;d++)s.push(o`<div class="sched-row">
        <div class="hr">${String(d).padStart(2,"0")}:00</div>
        <div></div>
      </div>`);const n=i.map(d=>{const g=oe(d.time);if(g==null)return null;const p=Math.max(.5,(Number(d.durationMins)||60)/60),h=(g-r)*N+3,m=p*N-8,x=this._member(d.addedBy),C=he.some(z=>z.key===d.type)?d.type:"note";return o`<div
          class="evt ${C}"
          style="top:${h}px;height:${Math.max(34,m)}px;"
        >
          <div class="et">
            <b>${d.title}</b>
            <span>${ge(g)}${p?`–${ge(g+p)}`:""}</span>
            ${d.url||d.attachmentURL?o`<div class="adorn">
                  ${d.url?o`<a
                        href=${d.url}
                        target="_blank"
                        rel="noopener"
                        title=${d.url}
                        @click=${z=>z.stopPropagation()}
                        ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.07.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.07-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>Link</a
                      >`:""}
                  ${d.attachmentURL?o`<a
                        href=${d.attachmentURL}
                        target="_blank"
                        rel="noopener"
                        title=${d.attachmentName||"Attachment"}
                        @click=${z=>z.stopPropagation()}
                        ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05 12.7 19.8a5 5 0 0 1-7.07-7.07l8.49-8.49a3 3 0 0 1 4.24 4.24l-8.49 8.49a1 1 0 0 1-1.41-1.41l7.78-7.78"/></svg>${d.attachmentName||"File"}</a
                      >`:""}
                </div>`:""}
          </div>
          <div class="by">
            <member-chip
              .name=${(x==null?void 0:x.displayName)??"Family"}
              .photo=${(x==null?void 0:x.photoURL)??""}
              .hue=${(x==null?void 0:x.hue)??198}
              size="20"
            ></member-chip>
            <span class="nm">${(x==null?void 0:x.displayName)??"Someone"}</span>
          </div>
          ${d.addedBy===this.currentUid?o`<button class="del" title="Remove" @click=${()=>this._remove(d)}>×</button>`:""}
        </div>`}).filter(Boolean);return o`
      <section>
        <div class="glass">
          <div class="pl-head">
            <div>
              <h3>${this.trip.title||"Trip"}</h3>
              <div class="pl-sub">
                Shared day plan${this.trip.location?` · ${this.trip.location}`:""} — everyone on the trip can add
                <span class="who-adds">
                  ${(this.members??[]).slice(0,4).map(d=>o`<member-chip
                      .name=${d.displayName}
                      .photo=${d.photoURL??""}
                      .hue=${d.hue??198}
                      size="22"
                    ></member-chip>`)}
                </span>
              </div>
            </div>
            <button class="pl-close" @click=${this._close} aria-label="Close planner">×</button>
          </div>

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
            ${this._view==="week"&&e.length>7?o`<div class="wk-pager">
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

          ${this._view==="week"?this._renderWeek():o`
                <div class="day-rail">
                  ${e.map(d=>o`<button
                      class="day-pill ${d.key===t?"on":""}"
                      @click=${()=>this._dayKey=d.key}
                    >
                      ${d.lbl}<small>${d.d}</small>
                    </button>`)}
                </div>

                <div class="sched">
                  <div class="sched-inner">
                    ${s}
                    <div
                      class="sched-track"
                      @pointerdown=${d=>this._gridDown(d,t,r,a)}
                    >
                      ${n.length?n:o`<div class="sched-empty">
                            Drag to block out a time — or add an item below.
                          </div>`}
                      ${this._selGhost(t,r)}
                    </div>
                  </div>
                </div>
              `}

          <form
            class="add-row"
            @submit=${d=>{d.preventDefault(),this._add()}}
          >
            <input
              class="tm"
              type="text"
              .value=${this._time}
              aria-label="Time"
              @input=${d=>this._time=d.target.value}
            />
            <input
              class="t"
              type="text"
              .value=${this._title}
              placeholder="Add an item — lunch, a visit, a note…"
              aria-label="Item"
              @input=${d=>this._title=d.target.value}
            />
            <select
              aria-label="Type"
              .value=${this._type}
              @change=${d=>this._type=d.target.value}
            >
              ${he.map(d=>o`<option value=${d.key}>${d.label}</option>`)}
            </select>
            <select
              class="dur"
              aria-label="Duration"
              @change=${d=>this._dur=Number(d.target.value)}
            >
              ${ti.map(d=>o`<option
                  value=${String(d.m)}
                  ?selected=${d.m===this._dur}
                >
                  ${d.label}
                </option>`)}
            </select>
            <input
              class="url"
              type="url"
              .value=${this._url}
              placeholder="Link (optional) — e.g. booking URL"
              aria-label="Link"
              @input=${d=>this._url=d.target.value}
            />
            <label class="attach" title="Attach a PDF or screenshot">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05 12.7 19.8a5 5 0 0 1-7.07-7.07l8.49-8.49a3 3 0 0 1 4.24 4.24l-8.49 8.49a1 1 0 0 1-1.41-1.41l7.78-7.78"/></svg>
              <span>${this._fileName||"Attach"}</span>
              <input
                type="file"
                accept="application/pdf,image/*"
                @change=${d=>{var p;const g=((p=d.target.files)==null?void 0:p[0])??null;this._file=g,this._fileName=g?g.name:""}}
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
        </div>
      </section>
    `}}y(Ge,"properties",{open:{type:Boolean,reflect:!0},trip:{type:Object},members:{type:Array},currentUid:{type:String},_items:{state:!0},_dayKey:{state:!0},_title:{state:!0},_time:{state:!0},_type:{state:!0},_dur:{state:!0},_url:{state:!0},_fileName:{state:!0},_busy:{state:!0},_view:{state:!0},_weekStart:{state:!0},_sel:{state:!0}}),y(Ge,"styles",M`
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
    }
    .pl-close:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
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
      height: ${N}px;
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
        transparent ${N}px
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
      height: ${N}px;
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
  `);customElements.define("trip-planner",Ge);const ri={uid:"preview-user",displayName:"Thomas Paris",email:"thomas@example.com",photoURL:null},tt=[{uid:"thomas",displayName:"Thomas",circles:["immediate"],hue:198},{uid:"partner",displayName:"Élise",circles:["immediate"],hue:8},{uid:"kid1",displayName:"Oscar",circles:["immediate"],hue:142},{uid:"kid2",displayName:"Mila",circles:["immediate"],hue:44},{uid:"mum",displayName:"Mum",circles:["extended"],hue:320},{uid:"dad",displayName:"Dad",circles:["extended"],hue:28},{uid:"sister",displayName:"Camille",circles:["extended"],hue:280},{uid:"bro-in-law",displayName:"Sam",circles:["extended"],hue:175},{uid:"niece",displayName:"Léa",circles:["extended"],hue:100}],ai=[{id:"t1",title:"Côte d’Azur, summer",location:"Antibes, France",start:"2026-07-12",end:"2026-07-21",coverGradient:"linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)",lodgingHost:"Airbnb",lodgingTitle:"Villa near Cap d’Antibes",attendees:["thomas","partner","kid1","kid2","mum","dad"],notes:"Mum + Dad arrive day 2. Dinner reservations at La Guérite booked.",visibility:"extended"},{id:"t2",title:"Half-term in the Alps",location:"Chamonix, France",start:"2026-10-24",end:"2026-10-31",coverGradient:"linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)",lodgingHost:"Booking.com",lodgingTitle:"Chalet Les Drus",attendees:["thomas","partner","kid1","kid2"],notes:"Need ski school for the kids — book by September.",visibility:"immediate"},{id:"t3",title:"Camille’s 40th",location:"Lisbon, Portugal",start:"2026-09-05",end:"2026-09-08",coverGradient:"linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)",lodgingHost:"Airbnb",lodgingTitle:"Alfama rooftop apartment",attendees:["thomas","partner","sister","bro-in-law"],notes:"Surprise. Don’t mention to Camille.",visibility:"family"}],si=[{id:"e1",type:"birthday",date:"2026-05-24",personIds:["mum"],title:"Mum’s birthday"},{id:"e2",type:"anniversary",date:"2026-05-28",personIds:["mum","dad"],title:"Mum & Dad’s anniversary",subtitle:"38 years"},{id:"e3",type:"birthday",date:"2026-06-11",personIds:["kid1"],title:"Oscar turns 7"},{id:"e4",type:"birthday",date:"2026-06-30",personIds:["niece"],title:"Léa’s birthday"}],ut={id:"preview-felix",name:"Felix",dateOfBirth:new Date("2023-11-15"),profilePhotoURL:null,pronouns:"he",themeColorHex:"#3D9B8F",developmentalFlags:["speech and language"]},oi=[ut],ni=[{id:"m1",category:"motor",title:"Kicks a ball forward",status:"achieved",ageRangeStartMonths:18,ageRangeEndMonths:24},{id:"m2",category:"motor",title:"Walks up stairs holding on",status:"achieved",ageRangeStartMonths:18,ageRangeEndMonths:24},{id:"m3",category:"motor",title:"Jumps with both feet off the ground",status:"emerging",ageRangeStartMonths:24,ageRangeEndMonths:30},{id:"m4",category:"motor",title:"Pedals a tricycle",status:"notStarted",ageRangeStartMonths:30,ageRangeEndMonths:36},{id:"m5",category:"language",title:"Uses two-word phrases",status:"achieved",ageRangeStartMonths:18,ageRangeEndMonths:24},{id:"m6",category:"language",title:"Says first name when asked",status:"emerging",ageRangeStartMonths:24,ageRangeEndMonths:30},{id:"m7",category:"language",title:"Names six body parts",status:"notStarted",ageRangeStartMonths:24,ageRangeEndMonths:30},{id:"m8",category:"language",title:"Uses three-word sentences",status:"notStarted",ageRangeStartMonths:30,ageRangeEndMonths:36},{id:"m9",category:"socialEmotional",title:"Shows affection unprompted",status:"achieved",ageRangeStartMonths:18,ageRangeEndMonths:24},{id:"m10",category:"socialEmotional",title:"Plays alongside other children",status:"emerging",ageRangeStartMonths:24,ageRangeEndMonths:36},{id:"m11",category:"socialEmotional",title:"Takes turns in simple games",status:"notStarted",ageRangeStartMonths:30,ageRangeEndMonths:42},{id:"m12",category:"cognitive",title:"Follows a two-step instruction",status:"achieved",ageRangeStartMonths:18,ageRangeEndMonths:24},{id:"m13",category:"cognitive",title:"Sorts objects by shape or colour",status:"emerging",ageRangeStartMonths:30,ageRangeEndMonths:36},{id:"m14",category:"cognitive",title:"Completes a 4-piece puzzle",status:"notStarted",ageRangeStartMonths:30,ageRangeEndMonths:36}],li=[{id:"i1",type:"strength",domain:"language",title:"Language is tracking ahead",body:"Felix is combining words earlier than the typical 24–30 month window — keep the back-and-forth conversations going.",relevanceScore:.95},{id:"i2",type:"connection",domain:"cross",title:"Fine-motor + sorting → pre-literacy",body:"A strong pincer grip alongside early sorting is a classic pre-literacy signal. Picture books with pointing build on both at once.",relevanceScore:.82},{id:"i3",type:"nudge",domain:"language",title:"Narrate your daily routine",body:'"Now we are washing hands… water on… soap…" — Felix is ready for longer sentence models during everyday moments.',relevanceScore:.7}],di={id:"2026-05-16",title:"Felix is stringing two words together",body:'You have logged "more milk" and "Daddy go" this week — early two-word speech, right on the edge of the 24–30 month window. Narrating your routine out loud is the single best way to grow sentence length from here.',topicForChat:"How can I support Felix's two-word speech?"},ci=[{id:"p1",role:"user",content:"Felix isn't saying many words yet — should I be worried at 2.5?",senderUid:"partner"},{id:"p2",role:"assistant",content:"At 2½, every child's pace differs. From your logs Felix **uses two-word phrases** and follows two-step instructions — both strong signs. A few practical things to try, and a clear marker for when to mention it at his check-up."},{id:"p3",role:"user",content:"Any toddler-friendly ideas for a rainy weekend?",senderUid:"thomas"},{id:"p4",role:"assistant",content:"Rainy days are great for the kind of close-up play that grows language fastest at this stage. A few ideas matched to where Felix is right now."}];class Ye extends A{constructor(){super(),this.user=ri,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this.holidays=[],this._connectionMembers=[],this._connKey="",this.ppFamily=null,this.ppIsMember=!1,this.ppChildren=[],this.selectedChildId=null,this.childMilestones=[],this.childInsights=[],this.childDailyCard=null,this.childPebbleMessages=[],this.childPebbleSessions=[],this.ppIsChildViewer=!1,this.incomingChildRequests=[],this.myChildAccessRequest=null,this._claimingChildId=null,this._claimedChildName=null,this._joinAnotherCode="",this._joinAnotherBusy=!1,this._joinAnotherError="",this._joinAnotherSuccessName="",this._pebblePrefill="",this._plannerOpen=!1,this._plannerTrip=null,this.preview=!1,this.circle="extended",this._activeTab="today",this._formOpen=!1,this._formTrip=null,this._formBusy=!1,this._membersOpen=!1,this._eventFormOpen=!1,this._eventFormEvent=null,this._eventFormBusy=!1,this._allTripsOpen=!1,this._editingFamilyName=!1,this._importOpen=!1,this._schoolImportOpen=!1,this._profileOpen=!1,this._typePickerOpen=!1,this._formMode="trip",this._pebbleFabOpen=!1,this._themeLight=typeof document<"u"&&document.documentElement.classList.contains("theme-light"),this._dragOverTarget=null;const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1)}_onJoinAnotherCodeInput(e){var r;const t=(((r=e.target)==null?void 0:r.value)??"").toString(),i=t.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6);i!==t&&(e.target.value=i),this._joinAnotherCode=i,this._joinAnotherError&&(this._joinAnotherError="")}async _attemptJoinAnotherFamily(){var t;const e=(this._joinAnotherCode??"").trim();if(!(e.length!==6||this._joinAnotherBusy)){this._joinAnotherBusy=!0,this._joinAnotherError="",this._joinAnotherSuccessName="";try{const i=await b.findFamilyByConnectCode(e);if(!i){this._joinAnotherError="Couldn't find that family. Double-check the code with whoever invited you.";return}const r=i.name||"the family";await b.redeemConnectCode(e),this._joinAnotherSuccessName=r,f(`Joined ${r}.`),this._joinAnotherCode=""}catch(i){console.error("Join another family failed:",i),this._joinAnotherError=((t=i==null?void 0:i.message)==null?void 0:t.replace(/^Error:\s*/,""))??"Couldn't join — double-check the code with whoever invited you."}finally{this._joinAnotherBusy=!1}}}async _saveFamilyName(e){var a,s;const i=(e.target.value??"").trim(),r=((a=this.family)==null?void 0:a.name)??"";if(i&&i!==r&&((s=this.family)!=null&&s.id))try{const{db:n,doc:l,updateDoc:d,serverTimestamp:g}=await W(async()=>{const{db:p,doc:h,updateDoc:m,serverTimestamp:x}=await Promise.resolve().then(()=>Nt);return{db:p,doc:h,updateDoc:m,serverTimestamp:x}},void 0);await d(l(n,"families",this.family.id),{name:i,updatedAt:g()}),f("Family name updated.")}catch(n){console.error("Update family name failed:",n),f(`Couldn't save: ${n.code??n.message}`,{duration:5e3})}this._editingFamilyName=!1}_liveImmediate(){var e;return this.preview||!((e=this.user)!=null&&e.uid)?tt.filter(t=>t.circles.includes("immediate")):Ut(this.user.uid,this.user,this.pebbleUser,this.family,this.children)}_liveExtended(){var e;return this.preview?tt.filter(t=>t.circles.includes("extended")):jt((e=this.user)==null?void 0:e.uid,this.family,this.children)}_liveConnections(){return this.preview?[]:this._connectionMembers??[]}async _refreshConnectionMembers(){var e;if(this.preview||!this.family){this._connectionMembers=[];return}try{this._connectionMembers=await Ot((e=this.user)==null?void 0:e.uid,this.family)}catch{this._connectionMembers=[]}}updated(e){var t,i;if(e.has("family")){const r=Array.isArray((t=this.family)==null?void 0:t.connectedFamilyIds)?this.family.connectedFamilyIds:[],a=`${((i=this.family)==null?void 0:i.id)??""}|${[...r].sort().join(",")}`;a!==this._connKey&&(this._connKey=a,this._refreshConnectionMembers())}e.has("_activeTab")&&this._positionTabSlider({animate:!0})}_liveTrips(){return this.preview?ai:this.trips??[]}_liveEvents(){if(this.preview)return si;const e=r=>{const{date:a,yearsElapsed:s}=Yt(r);return{...r,date:a?qt(a):r.date,_yearsElapsed:s,_originalDate:r.date}},t=Gt(this.children).map(e),i=(this.events??[]).map(e);return[...t,...i].sort((r,a)=>String(r.date).localeCompare(String(a.date)))}_filteredMembers(){const e=this._liveImmediate(),t=this._liveExtended();return this.circle==="personal"?e.filter(i=>{var r;return i.uid===((r=this.user)==null?void 0:r.uid)}):this.circle==="family"?e:[...e,...t]}_circleTrips(){var s;const e=this._liveTrips(),t=((s=this.user)==null?void 0:s.uid)??"thomas";let i;this.circle==="personal"?i=e.filter(n=>{var l;return(l=n.attendees)==null?void 0:l.includes(t)}):this.circle==="family"?i=e.filter(n=>n.visibility!=="extended"&&this._userCanSeeTrip(n)):i=e.filter(n=>this._userCanSeeTrip(n));const r=new Set,a=[];for(const n of i){const l=n.id??`${n.title}|${n.start}|${n.end}`;r.has(l)||(r.add(l),a.push(n))}return a}_filteredTrips(){const e=new Date;return e.setHours(0,0,0,0),this._circleTrips().filter(t=>t.end?$(t.end)>=e:!0)}_userCanSeeTrip(e){var l,d,g,p,h,m;const t=(l=this.user)==null?void 0:l.uid;if(!t)return!1;if((d=e.attendees)!=null&&d.includes(t)||(g=e.viewers)!=null&&g.includes(t))return!0;const i=((p=this.family)==null?void 0:p.memberIds)??[],r=((h=this.family)==null?void 0:h.cairnMemberIds)??i,a=i.includes(t),s=r.includes(t);if(a)return!0;if(!s)return!1;const n=e.visibility||"family";if(n==="personal")return!1;if(n==="family")return!0;if(n==="extended"){const x=e.targetSubGroups??[];if(x.length===0)return!0;const C=Object.entries(((m=this.family)==null?void 0:m.subGroups)??{}).filter(([,z])=>(z.memberIds??[]).includes(t)).map(([z])=>z);return x.some(z=>C.includes(z))}return!1}_filteredEvents(){const e=new Set(this._filteredMembers().map(t=>t.uid));return this._liveEvents().filter(t=>t.personIds.some(i=>e.has(i)))}_smartCallout(){var n,l;const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),i=1440*60*1e3,r=d=>Math.round((d-t)/i);for(const d of this._circleTrips()){if(!d.start||!d.end)continue;const g=$(d.start),p=$(d.end);if(g.setHours(0,0,0,0),p.setHours(0,0,0,0),g<=t&&t<=p){const h=r(g)+1,m=r(p)-r(g)+1,x=((n=d.location)==null?void 0:n.trim())||d.title;return`Day ${h} of ${m} in ${x}.`}}let a=null,s=1/0;for(const d of this._circleTrips()){if(!d.start)continue;const g=$(d.start);if(!g)continue;const p=r(g);p>0&&p<s&&(a={kind:"trip",item:d},s=p)}for(const d of this._filteredEvents()){if(!d.date)continue;const g=$(d.date);if(!g)continue;const p=r(g);p>=0&&p<s&&(a={kind:"event",item:d},s=p)}if(!a)return null;if(a.kind==="trip"){const d=((l=a.item.location)==null?void 0:l.trim())||a.item.title;return s===1?`${d} starts tomorrow.`:s<=14?`${d} in ${s} days.`:s<=60?`Next trip: ${d} in ${s} days.`:null}return s===0?`${a.item.title} — today.`:s===1?`${a.item.title} — tomorrow.`:s<=7?`${a.item.title} in ${s} days.`:null}_tripDensityByDay(e){const t=new Map;for(const i of this._filteredTrips()){if(!i.start||!i.end)continue;const r=$(i.start),a=$(i.end);if(Number.isNaN(r.getTime())||Number.isNaN(a.getTime())||r.getFullYear()>e||a.getFullYear()<e)continue;const s=new Date(Math.max(r,new Date(e,0,1))),n=new Date(Math.min(a,new Date(e,11,31)));for(;s<=n;){const l=`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`;t.set(l,Math.min(1,(t.get(l)??0)+.5)),s.setDate(s.getDate()+1)}}return t}_shiftMonth(e){const t=this._displayMonth;this._displayMonth=new Date(t.getFullYear(),t.getMonth()+e,1)}_jumpToMonth(e,t){this._displayMonth=new Date(e,t,1)}_resetToToday(){const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1)}_renderMonthly(){const e=new Date,t=this._displayMonth??e,i=t.getFullYear(),r=t.getMonth(),s=(new Date(i,r,1).getDay()+6)%7,n=new Date(i,r+1,0).getDate(),l=new Map,d=(k,S)=>{l.has(k)||l.set(k,S)},g=[];for(const k of this._filteredEvents()){const S=$(k.date);S&&S.getFullYear()===i&&S.getMonth()===r&&(g.push(S.getDate()),d(S.getDate(),k.title??""))}const p=new Set;for(const k of this._filteredTrips()){if(!k.start||!k.end)continue;const S=$(k.start),R=$(k.end);if(Number.isNaN(S.getTime())||Number.isNaN(R.getTime())||S.getFullYear()>i||R.getFullYear()<i||S.getMonth()>r&&R.getMonth()>r||S.getMonth()<r&&R.getMonth()<r)continue;const B=S.getMonth()===r?S.getDate():1,F=R.getMonth()===r?R.getDate():n;for(let j=B;j<=F;j++)p.add(j),d(j,k.title??"")}const h=new Set;for(const k of this.holidays??[]){const S=$(k.date);S&&S.getFullYear()===i&&S.getMonth()===r&&(h.add(S.getDate()),d(S.getDate(),k.title??"Holiday"))}const m=[];for(let k=0;k<s;k++)m.push(o`<div class="cal-cell empty"></div>`);const x=e.getFullYear()===i&&e.getMonth()===r;for(let k=1;k<=n;k++){const S=x&&k===e.getDate(),R=g.includes(k),B=p.has(k),F=h.has(k),j=S?l.get(k)??"Today":l.get(k),mt=["cal-cell",S?"today":"",R?"has-event":"",B?"has-trip":"",F?"has-holiday":""].filter(Boolean).join(" ");m.push(o`<div class=${mt} title=${j?`${k} — ${j}`:""}>
        <span class="cal-cell-day">${k}</span>
        ${j?o`<span class="cal-cell-label">${j}</span>`:""}
      </div>`)}const C=new Date(i,r,1).toLocaleString("en-GB",{month:"long",year:"numeric"});return o`
      <div class="cal-head">
        <h3>${C}</h3>
        <div class="nav">
          ${!x?o`<button
                class="cal-nav-btn cal-today-btn"
                @click=${()=>this._resetToToday()}
                title="Jump to today"
              >
                Today
              </button>`:""}
          <button class="cal-nav-btn" @click=${()=>this._shiftMonth(-1)} aria-label="Previous month">‹</button>
          <button class="cal-nav-btn" @click=${()=>this._shiftMonth(1)} aria-label="Next month">›</button>
        </div>
      </div>
      <div class="cal-grid">
        ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(k=>o`<div class="cal-dow">${k}</div>`)}
        ${m}
      </div>
    `}_openCreate(){if(this.preview){f("Sign in to create real activities.");return}if(!b.familyId){f("You need a PebblePath family first.");return}this._typePickerOpen=!0}_onTypePicked(e){this._typePickerOpen=!1;const t=e.detail.type;if(t==="event"){this._eventFormEvent=null,this._eventFormOpen=!0;return}if(t==="import"){this._importOpen=!0;return}this._formMode=t,this._formTrip=null,this._formOpen=!0}_openPlanner(e){this._plannerTrip=e,this._plannerOpen=!0,this._activeTab="activities",this.updateComplete.then(()=>{requestAnimationFrame(()=>requestAnimationFrame(()=>{var i;const t=(i=this.renderRoot)==null?void 0:i.querySelector("trip-planner");t==null||t.scrollIntoView({behavior:"smooth",block:"start"})}))})}_openEdit(e){if(this.preview){f("Sign in to edit real activities.");return}const t=e.lodgingUrl||e.lodgingHost||e.flightNumber||e.flightDepartAirport;this._formMode=t?"trip":"activity",this._formTrip=e,this._formOpen=!0}async _onSaveTrip(e){const t=e.detail;this._formBusy=!0;try{await b.saveTrip(t),this._formOpen=!1,this._formTrip=null,f(t.id?"Trip updated.":"Trip created.")}catch(i){console.error("Save trip failed:",i),f(`Couldn't save: ${i.code??i.message}`,{duration:5e3})}finally{this._formBusy=!1}}async _onDeleteTrip(e){this._formBusy=!0;try{await b.deleteTrip(e.detail.id),this._formOpen=!1,this._formTrip=null,f("Trip deleted.")}catch(t){console.error("Delete trip failed:",t),f(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._formBusy=!1}}_openCreateEvent(){if(this.preview){f("Sign in to add real events.");return}if(!b.familyId){f("You need a family first.");return}this._eventFormEvent=null,this._eventFormOpen=!0}_openEditEvent(e){if(this.preview){f("Sign in to edit real events.");return}if(e!=null&&e._childId){const t=prompt(`Edit ${e._childName}'s birthday (YYYY-MM-DD):`,e.date);if(!t)return;if(!/^\d{4}-\d{2}-\d{2}$/.test(t)){f("Use YYYY-MM-DD format.");return}b.updateChildBirthday(e._childId,new Date(t)).then(()=>f(`Updated ${e._childName}'s birthday.`)).catch(i=>{console.error("Update child birthday failed:",i),f(`Couldn't update: ${i.code??i.message}`,{duration:5e3})});return}this._eventFormEvent={...e,date:e._originalDate??e.date},this._eventFormOpen=!0}async _onSaveEvent(e){this._eventFormBusy=!0;try{await b.saveEvent(e.detail),this._eventFormOpen=!1,this._eventFormEvent=null,f(e.detail.id?"Event updated.":"Event added.")}catch(t){console.error("Save event failed:",t),f(`Couldn't save: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}async _onDeleteEvent(e){this._eventFormBusy=!0;try{await b.deleteEvent(e.detail.id),this._eventFormOpen=!1,this._eventFormEvent=null,f("Event deleted.")}catch(t){console.error("Delete event failed:",t),f(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}get _pebbleAvailable(){return this.preview||this.ppIsMember||this.ppIsChildViewer}_tabDefs(){const e={id:"pebble",label:"Pebble",icon:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" /></svg>`};return[{id:"today",label:"Today",icon:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9" /><path d="M5 10v10h14V10" /></svg>`},{id:"children",label:"Children",icon:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4" /><path d="M5 21c0-4 3-6 7-6s7 2 7 6" /></svg>`},{id:"activities",label:"Activities",icon:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /></svg>`},...this._pebbleAvailable?[e]:[],{id:"cairn",label:"Settings",icon:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>`}]}_renderTabBar(){return o`
      <nav class="tabs" role="tablist" aria-label="Sections">
        <span class="tab-slider" aria-hidden="true"></span>
        ${this._tabDefs().map(e=>o`<button
            class="tab ${this._activeTab===e.id?"active":""}"
            role="tab"
            aria-selected=${this._activeTab===e.id?"true":"false"}
            @click=${()=>this._activeTab=e.id}
          >
            ${e.icon}<span>${e.label}</span>
          </button>`)}
      </nav>
    `}_positionTabSlider({animate:e=!0}={}){this._slideOn(".tabs",".tab-slider",".tab.active",e),this._slideOn(".bottomnav",".bn-slider",".bn-tab.active",e)}_slideOn(e,t,i,r){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(e);if(!a)return;const s=a.querySelector(t),n=a.querySelector(i);if(!(!s||!n)&&n.offsetParent!==null){if(!r){const d=s.style.transition;s.style.transition="none",s.style.transform=`translateX(${n.offsetLeft}px)`,s.style.width=`${n.offsetWidth}px`,s.offsetWidth,s.classList.add("ready"),requestAnimationFrame(()=>{s.style.transition=d||""});return}s.classList.add("ready"),s.style.transform=`translateX(${n.offsetLeft}px)`,s.style.width=`${n.offsetWidth}px`}}firstUpdated(e){var t,i,r;if((t=super.firstUpdated)==null||t.call(this,e),this._positionTabSlider({animate:!1}),typeof ResizeObserver<"u"){this._tabsRO=new ResizeObserver(()=>{this._positionTabSlider({animate:!1})});const a=(i=this.renderRoot)==null?void 0:i.querySelector(".tabs"),s=(r=this.renderRoot)==null?void 0:r.querySelector(".bottomnav");a&&this._tabsRO.observe(a),s&&this._tabsRO.observe(s)}}disconnectedCallback(){var e;(e=this._tabsRO)==null||e.disconnect(),this._tabsRO=null,super.disconnectedCallback()}_renderBottomNav(){return o`
      <nav class="bottomnav" role="tablist" aria-label="Sections">
        <span class="bn-slider" aria-hidden="true"></span>
        ${this._tabDefs().map(e=>o`<button
            class="bn-tab ${this._activeTab===e.id?"active":""}"
            role="tab"
            aria-selected=${this._activeTab===e.id?"true":"false"}
            @click=${()=>{this._activeTab=e.id,window.scrollTo({top:0,behavior:"smooth"})}}
          >
            ${e.icon}<span>${e.label}</span>
          </button>`)}
      </nav>
    `}_renderActiveTab(){switch(this._activeTab){case"children":return this._renderChildrenTab();case"activities":return this._renderActivitiesTab();case"pebble":return this._renderPebbleTab();case"cairn":return this._renderCairnTab();default:return this._renderTodayTab()}}_renderTodayHeader(e=""){var g;const t=(((g=this.user)==null?void 0:g.displayName)??"there").split(" ")[0],i=this._filteredEvents(),r=new Date,a=new Date(r.getFullYear(),r.getMonth(),1),s=new Date(r.getFullYear(),r.getMonth()+1,0),n=i.filter(p=>{const h=$(p.date);return h&&h.getFullYear()===r.getFullYear()&&h.getMonth()===r.getMonth()}),d=this._circleTrips().filter(p=>{if(!p.start||!p.end)return!1;const h=$(p.start),m=$(p.end);return Number.isNaN(h.getTime())||Number.isNaN(m.getTime())?!1:h<=s&&m>=a}).length+n.length;return o`
        <div class="hello">
          <div>
            <h1>Hi ${t}.</h1>
            ${(()=>{const p=this._smartCallout();return p?o`<div class="smart">${p}</div>`:""})()}
            ${d>0?o`<div class="stat">
                  <span>${d}</span> ${d===1?"activity":"activities"} this month
                </div>`:""}
            ${this.family?this._editingFamilyName?o`<input
                    class="family-name-input"
                    type="text"
                    .value=${this.family.name??""}
                    autofocus
                    @blur=${this._saveFamilyName}
                    @keydown=${p=>{p.key==="Enter"&&p.target.blur(),p.key==="Escape"&&(p.target.value=this.family.name??"",this._editingFamilyName=!1)}}
                  />`:o`<div
                    class="family-name"
                    title="Click to rename"
                    @click=${()=>this._editingFamilyName=!0}
                  >
                    ${this.family.name||"Tap to name your family"}
                  </div>`:""}
          </div>
          ${e}
        </div>
    `}_renderTabHeader(e,t,i=""){return o`
        <div class="hello">
          <div>
            <h1>${e}</h1>
            ${t?o`<div class="page-sub">${t}</div>`:""}
          </div>
          ${i}
        </div>
    `}_renderComingUpSection(){const e=this._filteredTrips(),t=this._liveImmediate().concat(this._liveExtended());return o`
        <section>
          <div class="section-head">
            <h2>Coming up</h2>
            <div style="display:flex;gap:10px;align-items:center;">
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
              ${this._circleTrips().length>4?o`<button class="link" @click=${()=>this._allTripsOpen=!0}>
                    All trips →
                  </button>`:""}
            </div>
          </div>
          ${e.length===0?o`
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
              `:o`
                <div class="trips-row">
                  ${e.map(i=>o`<trip-card
                      .trip=${i}
                      .members=${t}
                      @open-planner=${r=>this._openPlanner(r.detail)}
                      @edit-trip=${r=>this._openEdit(r.detail)}
                    ></trip-card>`)}
                </div>
              `}
        </section>
    `}_renderCalendarsSection(){var t,i,r;const e=new Date;return o`
        <section>
          <div class="cal-row">
            <glass-panel padding="md" variant="strong" stretch>
              ${this._renderMonthly()}
            </glass-panel>
            <glass-panel padding="md" variant="strong" stretch>
              <div class="cal-head">
                <h3>${((t=this._displayMonth)==null?void 0:t.getFullYear())??e.getFullYear()}</h3>
                <div style="font-size:12px;color:var(--text-tertiary);">Yearly</div>
              </div>
              <yearly-view
                .year=${((i=this._displayMonth)==null?void 0:i.getFullYear())??e.getFullYear()}
                .tripDays=${this._tripDensityByDay(((r=this._displayMonth)==null?void 0:r.getFullYear())??e.getFullYear())}
                .trips=${this._circleTrips()}
                .events=${this._liveEvents()}
                .holidays=${this.holidays??[]}
                .today=${e}
                @month-select=${a=>this._jumpToMonth(a.detail.year,a.detail.month)}
              ></yearly-view>
            </glass-panel>
          </div>
        </section>
    `}_renderCelebrationsSection(){const e=this._filteredEvents(),t=this._liveImmediate().concat(this._liveExtended());return o`
        <section>
          <div class="section-head">
            <h2>Celebrations</h2>
            <button class="link" @click=${()=>this._openCreateEvent()}>+ Add event</button>
          </div>
          ${(()=>{const i=e.slice().sort((r,a)=>String(r.date).localeCompare(String(a.date)));return o`
              <glass-panel padding="md" variant="strong">
                ${i.length===0?o`<div class="cel-empty">No celebrations yet.</div>`:i.map(r=>o`<event-row
                        .event=${r}
                        .members=${t}
                        @edit-event=${a=>this._openEditEvent(a.detail)}
                      ></event-row>`)}
              </glass-panel>
            `})()}
        </section>
    `}_renderTodayTab(){const e=this._childData(),t=o`<div class="scope shared">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5M15 17c2 0 5 1 5 3" stroke-linecap="round"/></svg>
      Your household
    </div>`,i=this._comingUp(),r=o`
      <glass-panel padding="md" variant="strong" stretch>
        <div class="cal-head"><h3>Coming up</h3>
          <button class="link" @click=${()=>this._activeTab="activities"}>All activities</button></div>
        ${i.length===0?o`<div class="ring-note" style="padding:8px 4px;">Nothing on the calendar yet — plan something from the Activities tab.</div>`:i.map(h=>o`<div class="ms-row">
                ${this._gicoFor(h)}
                <div class="t">${h.title}${h.sub?o`<small>${h.sub}</small>`:""}</div>
                <span class="ms-stat up">${h.chip}</span>
              </div>`)}
      </glass-panel>`;if(!e.hasPP||!e.child)return o`
        ${this._renderTodayHeader(t)}
        <section>${r}</section>
        ${this._renderCelebrationsSection()}
      `;const a=e.milestones,s=a.filter(h=>h.status==="achieved"),n=a.length?Math.round(s.length/a.length*100):0,l=h=>({selfCare:"motor"})[h]||h||"motor",d=s.slice().sort((h,m)=>(m.ageRangeStartMonths??0)-(h.ageRangeStartMonths??0)).slice(0,3),g=(e.insights||[])[0],p=e.dailyCard;return o`
      ${this._renderTodayHeader(t)}

      <section class="today-lead">
        <div class="today-top">
          <div class="today-top-left">
            <glass-panel padding="md" variant="strong">
              <div class="child-card">
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
                  <div class="big">${n}%</div>
                  <div class="lbl">of tracked milestones</div>
                </div>
              </div>
            </glass-panel>
            ${p?o`<div class="daily">
                  <div class="tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/></svg>
                    Pebble's daily
                  </div>
                  <h3>${p.title}</h3>
                  <p>${p.body}</p>
                  <button
                    class="ask"
                    @click=${()=>this._onAskPebble({detail:p.topicForChat||`Tell me more about: ${p.title}`})}
                  >
                    Ask Pebble about this →
                  </button>
                </div>`:o`<div class="daily">
                  <div class="tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/></svg>
                    Pebble's daily
                  </div>
                  <h3>Pebble's note is on its way</h3>
                  <p>A fresh observation about ${e.child.name} appears here each day once Pebble has enough to go on.</p>
                  <button class="ask" @click=${()=>this._activeTab="pebble"}>
                    Ask Pebble anything →
                  </button>
                </div>`}
          </div>
          ${r}
        </div>
      </section>

      <section>
        <div class="grid-2 today-insight-row">
          <glass-panel padding="md" variant="strong">
            <div class="cal-head"><h3>Recently achieved</h3>
              <button class="link" @click=${()=>this._activeTab="children"}>See all</button></div>
            ${d.length===0?o`<div class="ring-note" style="padding:8px 4px;">No milestones logged as achieved yet.</div>`:d.map(h=>o`<div class="ms-row">
                    <span class="ms-dot ${l(h.category)}"></span>
                    <div class="t">${h.title}</div>
                    <span class="ms-stat done">Achieved</span>
                  </div>`)}
          </glass-panel>
          <glass-panel padding="md" variant="strong">
            <div class="cal-head"><h3>Growth insight</h3>
              <button class="link" @click=${()=>this._activeTab="children"}>More insights</button></div>
            ${g?o`<insight-card
                  .type=${g.type}
                  .domain=${g.domain}
                  .title=${g.title}
                  .body=${g.body}
                ></insight-card>`:o`<div class="ring-note" style="padding:8px 4px;">Pebble surfaces patterns here as more of ${e.child.name}'s milestones are logged.</div>`}
          </glass-panel>
        </div>
      </section>
    `}_renderActivitiesTab(){var i,r;const e=this._liveImmediate().concat(this._liveExtended()),t=o`<div class="scope shared">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5M15 17c2 0 5 1 5 3" stroke-linecap="round"/></svg>
      Shared with connections
    </div>`;return o`
      ${this._renderTabHeader("Activities",((i=this.family)==null?void 0:i.name)??"Your family",t)}
      ${this._renderComingUpSection()}
      <trip-planner
        ?open=${this._plannerOpen}
        .trip=${this._plannerTrip}
        .members=${e}
        .currentUid=${((r=this.user)==null?void 0:r.uid)??""}
        @cancel=${()=>{this._plannerOpen=!1,this._plannerTrip=null}}
      ></trip-planner>
      ${this._renderCalendarsSection()}
      ${this._renderCelebrationsSection()}
    `}_renderChildAccessSection(){var s,n;if(this.preview||!this.ppIsMember)return"";const e=this.incomingChildRequests??[],t=Array.isArray((s=this.ppFamily)==null?void 0:s.childViewers)?this.ppFamily.childViewers:[];if(e.length===0&&t.length===0)return"";const i=((n=this.ppFamily)==null?void 0:n.memberProfiles)??{},r=(l,d)=>{var g;return((g=i[l])==null?void 0:g.displayName)??d??`${String(l).charAt(0).toUpperCase()}${String(l).slice(1)}`},a=o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6" stroke-linecap="round"/></svg>`;return o`
      <section>
        <div class="section-head">
          <h2>Child-view access</h2>
          <span class="note" style="margin:0;"
            >Read-only — milestones &amp; insights, never Pebble or
            editing</span
          >
        </div>
        <glass-panel padding="md" variant="strong">
          ${e.length===0?"":e.map(l=>o`<div class="set-row">
                  <span class="si" style="color:var(--ink-terracotta);">${a}</span>
                  <div class="sl">
                    <b>${r(l.uid??l.id,l.displayName)}</b>
                    <span>Wants read-only access to the Children view</span>
                  </div>
                  <span style="display:inline-flex;gap:8px;">
                    <button
                      class="link"
                      style="color:var(--ink-teal);border-color:rgba(61,155,143,.4);"
                      @click=${()=>this._approveChildAccess(l.uid??l.id)}
                    >
                      Approve
                    </button>
                    <button
                      class="link"
                      @click=${()=>this._declineChildAccess(l.uid??l.id)}
                    >
                      Decline
                    </button>
                  </span>
                </div>`)}
          ${t.map(l=>o`<div class="set-row">
              <span class="si" style="color:var(--ink-teal);">${a}</span>
              <div class="sl">
                <b>${r(l)}</b>
                <span>Read-only Children access</span>
              </div>
              <button
                class="link"
                @click=${()=>this._revokeChildViewer(l)}
              >
                Revoke
              </button>
            </div>`)}
          ${t.length===0?"":o`<div class="ring-note">
                Granted viewers see milestones &amp; growth insights
                only — never Pebble, the pediatrician summary, or any
                editing. Revoke any time.
              </div>`}
        </glass-panel>
      </section>
    `}_setTheme(e){this._themeLight=e;try{document.documentElement.classList.toggle("theme-light",e),localStorage.setItem("portalTheme",e?"light":"dark");const t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content",e?"#f2ede3":"#1f5c54")}catch{}}_renderCairnTab(){var t,i,r;(t=this.user)==null||t.displayName,(i=this.user)==null||i.email;const e=((r=this.family)==null?void 0:r.name)??"Your family";return o`
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
          ${this._renderJoinAnotherFamilyRow()}
        </glass-panel>
      </section>
    `}_renderJoinAnotherFamilyRow(){const e=this._joinAnotherCode??"",t=e.length===6&&!this._joinAnotherBusy;return o`
      <div class="set-row" style="align-items:flex-start;">
        <span class="si" style="margin-top:2px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/><circle cx="12" cy="12" r="9"/></svg></span>
        <div class="sl">
          <b>Join another family</b>
          <span>Paste a 6-character connect code to join an additional family.</span>
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
          ${this._joinAnotherError?o`<div class="join-error">${this._joinAnotherError}</div>`:""}
          ${this._joinAnotherSuccessName?o`<div class="join-success">
                ✓ Joined ${this._joinAnotherSuccessName}.
              </div>`:""}
        </div>
      </div>
    `}_renderChildGate(){const e=this.myChildAccessRequest,t=this.children??[],i=t.length>0,r=t.length===1?`${t[0].name}'s`:"the children's",a=o`<button
      class="empty-cta ghost"
      @click=${()=>this._activeTab="activities"}
    >
      Back to Activities
    </button>`;return i?(e==null?void 0:e.status)==="pending"?o`
        <div class="empty-title">Request sent</div>
        <div class="empty-sub">
          A parent on this family has been asked to share read-only
          access to ${r} milestones &amp; growth insights with you.
          You'll see it here as soon as they approve.
        </div>
        <div class="empty-actions">
          <button
            class="empty-cta ghost"
            @click=${()=>this._withdrawChildAccess()}
          >
            Withdraw request
          </button>
          ${a}
        </div>
      `:(e==null?void 0:e.status)==="approved"?o`
        <div class="empty-title">Access approved</div>
        <div class="empty-sub">
          A parent shared read-only access with you — loading ${r}
          view…
        </div>
        <div class="empty-actions">${a}</div>
      `:o`
      <div class="empty-title">This area is private to parents</div>
      <div class="empty-sub">
        Children's milestones &amp; growth insights are shared only
        with the parents by default. You can ask them to share a
        <strong>read-only</strong> view with you — they'll approve or
        decline, and you'll never get Pebble or editing access.
        ${(e==null?void 0:e.status)==="declined"?o`<br /><span style="color:var(--text-tertiary);"
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
        ${a}
      </div>
      ${this._renderParentClaimSection(t)}
    `:o`
        <div class="empty-title">This area is private to parents</div>
        <div class="empty-sub">
          Children's milestones, growth insights and Pebble are visible
          only to parents on a PebblePath household — never to the
          extended Cairn. If you're a parent here and don't see your
          child, make sure you're signed in with your PebblePath
          account.
        </div>
        <div class="empty-actions">${a}</div>
      `}_renderParentClaimSection(e){return!Array.isArray(e)||e.length===0?"":this._claimedChildName?o`
        <div class="claim-section">
          <div class="claim-sent">
            ✓ Claim sent for ${this._claimedChildName} — an existing
            parent will confirm you.
          </div>
        </div>
      `:o`
      <div class="claim-section">
        <div class="claim-title">
          Are you a parent or caregiver of one of them?
        </div>
        <div class="claim-sub">
          Claim the link — an existing parent confirms it. You'll get
          the full child experience once approved.
        </div>
        <div class="claim-list">
          ${e.map(t=>o`
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
    `}_renderChildrenTab(){const e=this._childData(),t=o`<span class="scope-chip">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" stroke-linecap="round" /></svg>
      Private to parents
    </span>`;if(e.hasPP){const i=e.readonly?"Milestones & growth insights — read-only, shared by the parents":"Milestones and insights",r=e.readonly?o`<span class="scope-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3.2"/></svg>
            Shared with you · read-only
          </span>`:t;return o`
        ${this._renderTabHeader("Children",i,r)}
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
      `}return o`
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
    `}_renderPebbleTab(){var t,i;const e=this._childData();return this._pebbleAvailable&&e.child?o`
        <child-pebble
          .child=${e.child}
          .messages=${e.pebbleMessages}
          .sessions=${e.pebbleSessions}
          .prefill=${this._pebblePrefill}
          .memberProfiles=${((t=this.family)==null?void 0:t.memberProfiles)??{}}
          .myUid=${((i=this.user)==null?void 0:i.uid)??""}
        ></child-pebble>
      `:o`
      ${this._renderTabHeader("Pebble","Personalised guidance for parents")}
      <section>
        <glass-panel padding="lg" variant="strong">
          <div class="empty-hero">
            <div class="empty-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#3d9b8f" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4.5" fill="#3d9b8f" stroke="none" />
              </svg>
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
    `}_renderPebbleFab(){var i,r;if(this._activeTab==="pebble"||!this._pebbleAvailable)return"";const e=this._childData();if(!e.child)return"";const t=o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none"/></svg>`;return o`
      <button
        class="pebble-fab"
        aria-label="Ask Pebble"
        title="Ask Pebble"
        @click=${()=>this._pebbleFabOpen=!this._pebbleFabOpen}
      >
        ${t}<span class="lbl">Ask Pebble</span>
      </button>
      ${this._pebbleFabOpen?o`<div
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
                .myUid=${((r=this.user)==null?void 0:r.uid)??""}
              ></child-pebble>
            </div>
          </div>`:""}
    `}render(){var r,a,s,n,l,d,g;const e=this._liveImmediate(),t=this._liveExtended(),i=e.concat(t);return o`
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
            title="${((r=this.user)==null?void 0:r.displayName)??"Profile"} — open Settings"
            aria-label="Open Settings"
          >
            <member-chip
              .name=${((a=this.user)==null?void 0:a.displayName)??"You"}
              .photo=${((s=this.user)==null?void 0:s.photoURL)??""}
              .hue=${198}
              size="36"
            ></member-chip>
          </button>
        </div>
      </div>

      ${this.preview?o`<div class="preview-banner">
            <strong>Preview mode</strong> — viewing the dashboard with placeholder
            data. <a href="?">Back to sign-in</a>.
          </div>`:""}

      <main class=${this._activeTab==="pebble"?"pebble-full":""}>
        ${this._renderActiveTab()}
        ${this._activeTab==="pebble"?"":o`<discover-pebblepath></discover-pebblepath>`}
      </main>

      ${this._renderBottomNav()}

      ${this._renderPebbleFab()}

      <trip-form
        ?open=${this._formOpen}
        .trip=${this._formTrip}
        .members=${e}
        .extendedMembers=${this._liveExtended()}
        .connectionMembers=${this._liveConnections()}
        .currentUid=${((n=this.user)==null?void 0:n.uid)??""}
        .familyId=${((l=this.family)==null?void 0:l.id)??""}
        .busy=${this._formBusy}
        .formMode=${this._formMode}
        .subGroups=${((d=this.family)==null?void 0:d.subGroups)??{}}
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
        .familyId=${((g=this.family)==null?void 0:g.id)??""}
        .busy=${this._eventFormBusy}
        @save=${this._onSaveEvent}
        @remove=${this._onDeleteEvent}
        @cancel=${()=>{this._eventFormOpen=!1,this._eventFormEvent=null}}
      ></event-form>

      <all-trips-modal
        ?open=${this._allTripsOpen}
        .trips=${this._circleTrips()}
        .members=${i}
        @open-planner=${p=>{this._allTripsOpen=!1,this._openPlanner(p.detail)}}
        @edit-trip=${p=>{this._allTripsOpen=!1,this._openEdit(p.detail)}}
        @cancel=${()=>this._allTripsOpen=!1}
      ></all-trips-modal>

      <import-calendar-modal
        ?open=${this._importOpen}
        @cancel=${()=>this._importOpen=!1}
      ></import-calendar-modal>

      <school-import-modal
        ?open=${this._schoolImportOpen}
        @cancel=${()=>this._schoolImportOpen=!1}
        @added=${()=>this._schoolImportOpen=!1}
      ></school-import-modal>

      <profile-sheet
        ?open=${this._profileOpen}
        .user=${this.user}
        .pebbleUser=${this.pebbleUser}
        @cancel=${()=>this._profileOpen=!1}
      ></profile-sheet>
    `}_childData(){if(this.preview)return{hasPP:!0,readonly:!1,children:oi,child:ut,milestones:ni,insights:li,dailyCard:di,pebbleMessages:ci,pebbleSessions:[]};const e=this.ppChildren??[],t=e.find(r=>r.id===this.selectedChildId)??e[0]??null;return{hasPP:!!((this.ppIsMember||this.ppIsChildViewer)&&t),readonly:!!(this.ppIsChildViewer&&!this.ppIsMember),children:e,child:t,milestones:this.childMilestones??[],insights:this.childInsights??[],dailyCard:this.childDailyCard??null,pebbleMessages:this.childPebbleMessages??[],pebbleSessions:this.childPebbleSessions??[]}}_onSelectChild(e){this.preview||b.selectChild(e.detail)}_onAskPebble(e){this._pebblePrefill=e.detail??"",this._activeTab="pebble"}async _claimChildAsParent(e){if(!this.preview&&!(!(e!=null&&e.id)||this._claimingChildId)){this._claimingChildId=e.id;try{await b.requestToBeCoParent(e.id),this._claimedChildName=e.name??"your child"}catch(t){f(`Couldn't send the request: ${t.code??t.message}`,{duration:5e3})}finally{this._claimingChildId=null}}}async _requestChildAccess(){if(!this.preview)try{await b.requestChildAccess(),f("Request sent — a parent will be notified.")}catch(e){f(`Couldn't send request: ${e.code??e.message}`,{duration:5e3})}}async _withdrawChildAccess(){if(!this.preview)try{await b.withdrawChildAccessRequest(),f("Request withdrawn.")}catch(e){f(`Couldn't withdraw: ${e.code??e.message}`,{duration:4e3})}}async _approveChildAccess(e){try{await b.approveChildAccess(e),f("Access granted — read-only Children view.")}catch(t){f(`Couldn't approve: ${t.code??t.message}`,{duration:5e3})}}async _declineChildAccess(e){try{await b.declineChildAccess(e),f("Request declined.")}catch(t){f(`Couldn't decline: ${t.code??t.message}`,{duration:4e3})}}async _revokeChildViewer(e){try{await b.revokeChildViewer(e),f("Read-only access revoked.")}catch(t){f(`Couldn't revoke: ${t.code??t.message}`,{duration:4e3})}}_ageShort(e){var s;if(!e||Number.isNaN(((s=e.getTime)==null?void 0:s.call(e))??NaN))return"";const t=new Date;let i=(t.getFullYear()-e.getFullYear())*12+(t.getMonth()-e.getMonth());t.getDate()<e.getDate()&&(i-=1),i=Math.max(0,i);const r=Math.floor(i/12),a=i%12;return r===0?`${a} mo`:`${r}y${a?` ${a}m`:""}`}_ageLong(e){var n;if(!e||Number.isNaN(((n=e.getTime)==null?void 0:n.call(e))??NaN))return"";const t=new Date;let i=(t.getFullYear()-e.getFullYear())*12+(t.getMonth()-e.getMonth());t.getDate()<e.getDate()&&(i-=1),i=Math.max(0,i);const r=Math.floor(i/12),a=i%12;if(r===0)return`${a} month${a===1?"":"s"}`;const s=a?`, ${a} month${a===1?"":"s"}`:"";return`${r} year${r===1?"":"s"}${s}`}_comingUp(){const e=[];for(const i of this._filteredTrips())i.start&&e.push({kind:"trip",title:i.title||"Trip",sub:i.location||i.lodgingHost||"",date:i.start,chip:this._fmtRangeShort(i.start,i.end)});for(const i of this._filteredEvents()){if(!i.date)continue;const r=$(i.date);r&&e.push({kind:i.source==="school-import"?"external":"event",title:i.title||"Celebration",sub:"",date:i.date,chip:r.toLocaleDateString("en-GB",{day:"numeric",month:"short"})})}const t=new Date().toISOString().slice(0,10);for(const i of this.holidays??[]){if(!i.date||i.date<t)continue;const r=$(i.date);r&&e.push({kind:"holiday",title:i.title||"Public holiday",sub:"Public holiday",date:i.date,chip:r.toLocaleDateString("en-GB",{day:"numeric",month:"short"})})}return e.sort((i,r)=>String(i.date).localeCompare(String(r.date))).slice(0,5)}_fmtRangeShort(e,t){const i=$(e),r=$(t);if(!i)return"";const a=i.toLocaleDateString("en-GB",{month:"short"});if(!r||i.getDate()===r.getDate()&&a===r.toLocaleDateString("en-GB",{month:"short"}))return`${i.getDate()} ${a}`;const s=r.toLocaleDateString("en-GB",{month:"short"});return a===s?`${i.getDate()}–${r.getDate()} ${a}`:`${i.getDate()} ${a} – ${r.getDate()} ${s}`}_tripGico(){return o`<span class="gico trip"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.62 3.05a1 1 0 0 0-1.12-.18L3.7 10.3c-.86.38-.83 1.62.05 1.95l6.06 2.27 2.27 6.06c.33.88 1.57.9 1.95.05L21.8 4.17a1 1 0 0 0-.18-1.12zM10.5 12.7l6.4-5.7-4.9 6.6-.1.1z"/></svg></span>`}_eventGico(){return o`<span class="gico event"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.1 6.7C10.4 5 9.2 3.7 7.8 3.3c-1-.3-1.9.1-2.2.9-.4 1 .2 2.1 1 2.7 1 .75 2.5 1.05 4.5 1.05z"/><path d="M12.9 6.7c.7-1.7 1.9-3 3.3-3.4 1-.3 1.9.1 2.2.9.4 1-.2 2.1-1 2.7-1 .75-2.5 1.05-4.5 1.05z"/><rect x="3" y="8" width="8.1" height="3.5" rx="1"/><rect x="12.9" y="8" width="8.1" height="3.5" rx="1"/><rect x="4.1" y="11.7" width="7" height="9.1" rx="1.4"/><rect x="12.9" y="11.7" width="7" height="9.1" rx="1.4"/></svg></span>`}_holidayGico(){return o`<span class="gico holiday"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"/><path d="M3 10V6C3 4.89543 3.89543 4 5 4H7"/><path d="M7 2V6"/><path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"/></svg></span>`}_schoolGico(){return o`<span class="gico school"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l9-5 9 5-9 5-9-5z"/><path d="M7 12.5V17c0 1 2.5 2.5 5 2.5s5-1.5 5-2.5v-4.5M21 10v5"/></svg></span>`}_gicoFor(e){return e.kind==="trip"?this._tripGico():e.kind==="holiday"?this._holidayGico():e.kind==="external"?this._schoolGico():this._eventGico()}}y(Ye,"properties",{user:{type:Object},pebbleUser:{type:Object},family:{type:Object},children:{type:Array},trips:{type:Array},events:{type:Array},holidays:{type:Array},preview:{type:Boolean},ppFamily:{type:Object},ppIsMember:{type:Boolean},ppChildren:{type:Array},selectedChildId:{type:String},childMilestones:{type:Array},childInsights:{type:Array},childDailyCard:{type:Object},childPebbleMessages:{type:Array},childPebbleSessions:{type:Array},ppIsChildViewer:{type:Boolean},incomingChildRequests:{type:Array},myChildAccessRequest:{type:Object},_pebblePrefill:{state:!0},_plannerOpen:{state:!0},_plannerTrip:{state:!0},circle:{state:!0},_activeTab:{state:!0},_formOpen:{state:!0},_formTrip:{state:!0},_formBusy:{state:!0},_membersOpen:{state:!0},_eventFormOpen:{state:!0},_eventFormEvent:{state:!0},_eventFormBusy:{state:!0},_displayMonth:{state:!0},_allTripsOpen:{state:!0},_editingFamilyName:{state:!0},_importOpen:{state:!0},_schoolImportOpen:{state:!0},_profileOpen:{state:!0},_typePickerOpen:{state:!0},_formMode:{state:!0},_pebbleFabOpen:{state:!0},_themeLight:{state:!0},_dragOverTarget:{state:!0},_connectionMembers:{state:!0},_claimingChildId:{state:!0},_claimedChildName:{state:!0},_joinAnotherCode:{state:!0},_joinAnotherBusy:{state:!0},_joinAnotherError:{state:!0},_joinAnotherSuccessName:{state:!0}}),y(Ye,"styles",M`
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
    @media (max-width: 768px) {
      .link.hide-mobile {
        display: none;
      }
    }

    .trips-row {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 18px;
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
    .cal-head .nav {
      display: flex;
      gap: 6px;
    }
    .cal-nav-btn {
      width: 36px;
      height: 36px;
      border-radius: 999px;
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-family: var(--font-body);
      padding: 0;
    }
    .cal-nav-btn:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    .cal-today-btn {
      width: auto;
      padding: 0 12px;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .cal-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 6px;
    }
    .cal-dow {
      font-size: 11px;
      color: var(--text-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      text-align: center;
      padding: 6px 0;
    }
    .cal-cell {
      /* Shorter cells (3:2 ratio instead of square) so the monthly
         card has less vertical weight — keeps trip cards as the
         primary focus of the page. */
      aspect-ratio: 3 / 2;
      border-radius: 8px;
      background: rgba(255, 248, 235, 0.04);
      border: 1px solid var(--gridline);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 3px 5px 4px;
      font-size: 11.5px;
      color: var(--text-secondary);
      gap: 1px;
      position: relative;
      overflow: hidden;
    }
    .cal-cell .cal-cell-day {
      font-weight: 600;
    }
    .cal-cell .cal-cell-label {
      font-size: 10px;
      line-height: 1.15;
      font-weight: 500;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      opacity: 0.95;
      text-align: left;
      word-break: break-word;
      margin-top: auto;
    }
    @media (max-width: 480px) {
      .cal-cell .cal-cell-label {
        display: none;
      }
    }
    @media (max-width: 480px) {
      .cal-grid {
        gap: 4px;
      }
      .cal-cell {
        padding: 4px 2px;
        font-size: 11.5px;
        border-radius: 8px;
      }
      .cal-nav-btn {
        width: 32px;
        height: 32px;
      }
    }
    .cal-cell.empty {
      background: transparent;
      border-color: transparent;
    }
    .cal-cell.today {
      background: var(--today-bg);
      color: var(--today-fg);
      font-weight: 700;
      border-color: rgba(255, 248, 235, 0.5);
    }
    /* Holiday days — teal, distinct from trip-blue + celebration-
       amber (Ellie ③). Declared BEFORE has-event/has-trip so on a
       day that's both, the user's own trip/celebration wins the
       colour (this is just the public-holiday backdrop). */
    .cal-cell.has-holiday {
      background: var(--gradient-sage);
      border-color: rgba(61, 155, 143, 0.6);
      color: #fff;
      font-weight: 600;
    }
    .cal-cell.has-event {
      background: var(--gradient-celebration);
      border-color: rgba(255, 240, 215, 0.55);
      color: var(--charcoal);
      font-weight: 600;
    }
    .cal-cell.has-trip {
      background: var(--trip-day-bg);
      border-color: rgba(74, 144, 226, 0.75);
      color: var(--trip-day-fg);
      font-weight: 600;
    }
    .cal-cell.has-trip.has-event {
      background: linear-gradient(
        135deg,
        #6bb4e8 0%,
        #4a90e2 45%,
        #d4a843 100%
      );
      border-color: rgba(212, 168, 67, 0.65);
      color: var(--charcoal);
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
    /* P9 — Settings → Join another family. The code input + Join
       button live on a SECOND line below the row description so the
       narrow-viewport Settings tab (one-column grid) doesn't squash
       either the description or the input. */
    .join-cluster {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
      flex-wrap: wrap;
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
  `);customElements.define("home-screen",Ye);const it="cairn:pendingLoginIntent";class qe extends A{constructor(){super(),this.user=null,this._mode="choose",this._code="",this._familyName="",this._busy=!1,this._error="",this._childName="",this._childDob="",this._childPhotoBlob=null,this._childPhotoPreview=null,this._parentPhotoBlob=null,this._parentPhotoPreview=null,this._flavor="welcome";try{localStorage.getItem(it)==="1"&&(this._flavor="recovery",localStorage.removeItem(it))}catch{}}willUpdate(e){if(e.has("user")&&this.user&&!this._familyName){const t=(this.user.displayName??"").trim().split(/\s+/).slice(-1)[0];t&&t.length>1&&(this._familyName=`${t} Family`)}}_go(e){this._mode=e,this._error=""}_submitJoin(){const e=(this._code??"").trim().toUpperCase().replace(/\s+/g,"");if(!e){this._error="Paste the connect code you were sent.";return}const t=/^[A-Z0-9]{6}$/.test(e),i=/^CAIRN-[A-Z0-9]{3,6}$/.test(e);if(!t&&!i){this._error="Connect codes are 6 characters.";return}this._error="",this.dispatchEvent(new CustomEvent("join-code",{detail:{code:e},bubbles:!0,composed:!0}))}_goChildrenQuestion(){if(!(this._familyName??"").trim()){this._error="Give your family a name.";return}this._error="",this._go("children")}_goAddChild(){this._error="",this._go("addchild")}async _submitNoChildren(){const e=(this._familyName??"").trim();if(!e){this._error="Give your family a name.";return}this._busy=!0,this._error="";try{const t=await b.createCairnOnlyFamily(e);await this._uploadParentPhotoIfAny(t),f(`Welcome to ${e}.`)}catch(t){console.error("Create family failed:",t),this._error=(t==null?void 0:t.code)==="permission-denied"?"Couldn't create the family — Firestore rules may not be deployed yet.":`Couldn't create the family: ${(t==null?void 0:t.message)??"try again"}`}finally{this._busy=!1}}async _submitWithChild(){const e=(this._familyName??"").trim(),t=(this._childName??"").trim();if(!e){this._error="Give your family a name.";return}if(!t){this._error="Add your child's name.";return}if(!this._childDob){this._error="Add your child's date of birth.";return}const i=new Date(`${this._childDob}T00:00:00`);if(Number.isNaN(i.getTime())){this._error="That date of birth doesn't look right.";return}this._busy=!0,this._error="";try{const r=await b.createPebblePathFamily(e),a=await b.createChild(r,{name:t,dateOfBirth:i});if(this._childPhotoBlob)try{await b.uploadChildAvatar(r,a,this._childPhotoBlob)}catch(s){console.warn("child avatar upload failed (non-fatal):",s),f("Family created — couldn't save the photo, add it later.")}await this._uploadParentPhotoIfAny(r),f(`Welcome to ${e}.`)}catch(r){console.error("Create family + child failed:",r),this._error=(r==null?void 0:r.code)==="permission-denied"?"Couldn't set up your family — Firestore rules may not be deployed yet.":`Couldn't set up your family: ${(r==null?void 0:r.message)??"try again"}`}finally{this._busy=!1}}_iconJoin(){return o`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>`}_iconCreate(){return o`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4zm0 4.7l1.6 3.2 3.6.5-2.6 2.5.6 3.5L12 14.7l-3.2 1.7.6-3.5-2.6-2.5 3.6-.5L12 6.7z"/>
    </svg>`}_iconPlus(){return o`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.4"
      stroke-linecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>`}_iconPerson(){return o`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>`}render(){return this._mode==="join"?this._renderJoin():this._mode==="create"?this._renderCreate():this._mode==="children"?this._renderChildren():this._mode==="addchild"?this._renderAddChild():this._renderChoose()}_renderChoose(){const e=this._flavor==="recovery";return o`
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
    `}_renderJoin(){return o`
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
            ${this._error?o`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <glass-button variant="primary" @click=${this._submitJoin}>
                Continue
              </glass-button>
            </div>
          </div>
        </glass-panel>
      </div>
    `}_renderCreate(){return o`
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
            ${this._error?o`<div class="error">${this._error}</div>`:""}
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
    `}_renderChildren(){return o`
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
          ${this._error?o`<div class="error">${this._error}</div>`:""}
        </glass-panel>
      </div>
    `}_renderAvatarPicker({preview:e,inputId:t,onPick:i,onChange:r,ariaLabel:a}){return o`
      <div class="av-pick">
        <button type="button" @click=${i} aria-label=${a}>
          <span class="ring">
            ${e?o`<img src=${e} alt="" />`:o`<svg
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
          @change=${r}
        />
      </div>
    `}async _uploadParentPhotoIfAny(e){if(!(!this._parentPhotoBlob||!e))try{await b.uploadUserAvatar(e,this._parentPhotoBlob)}catch(t){console.warn("parent avatar upload failed (non-fatal):",t),f("Family created — couldn't save your photo, add it later.")}}_pickChildPhoto(){var e;(e=this.renderRoot.querySelector("#kid-photo-file"))==null||e.click()}_pickParentPhoto(){var e;(e=this.renderRoot.querySelector("#parent-photo-file"))==null||e.click()}async _onChildPhotoChosen(e){const t=await this._readPickedImage(e);t&&(this._childPhotoBlob=t,this._childPhotoPreview&&URL.revokeObjectURL(this._childPhotoPreview),this._childPhotoPreview=URL.createObjectURL(t))}async _onParentPhotoChosen(e){const t=await this._readPickedImage(e);t&&(this._parentPhotoBlob=t,this._parentPhotoPreview&&URL.revokeObjectURL(this._parentPhotoPreview),this._parentPhotoPreview=URL.createObjectURL(t))}async _readPickedImage(e){var i;const t=(i=e.target.files)==null?void 0:i[0];if(e.target.value="",!t)return null;if(!t.type.startsWith("image/"))return f("Pick an image file (JPG, PNG, etc.)."),null;if(t.size>15*1024*1024)return f("That photo is very large — pick one under 15 MB."),null;try{return await this._processAvatarImage(t)}catch(r){return console.warn("photo processing failed:",r),f("Couldn't read that image — try another."),null}}async _processAvatarImage(e){var d;let t;try{t=await createImageBitmap(e,{imageOrientation:"from-image"})}catch{t=await createImageBitmap(e)}const i=Math.min(t.width,t.height),r=(t.width-i)/2,a=(t.height-i)/2,s=512,n=document.createElement("canvas");return n.width=s,n.height=s,n.getContext("2d").drawImage(t,r,a,i,i,0,0,s,s),(d=t.close)==null||d.call(t),await new Promise((g,p)=>{n.toBlob(h=>h?g(h):p(new Error("toBlob returned null")),"image/jpeg",.85)})}_renderAddChild(){return o`
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
            ${this._error?o`<div class="error">${this._error}</div>`:""}
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
    `}}y(qe,"properties",{user:{type:Object},_mode:{state:!0},_code:{state:!0},_familyName:{state:!0},_busy:{state:!0},_error:{state:!0},_childName:{state:!0},_childDob:{state:!0},_childPhotoPreview:{state:!0},_parentPhotoPreview:{state:!0},_flavor:{state:!0}}),y(qe,"styles",M`
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
  `);customElements.define("onboarding-wizard",qe);const J="cairn:pendingJoinCode",rt="cairn:pendingCreateFamily";class bt extends A{constructor(){super(),this.authUser=null,this.loading=!0;const e=new URLSearchParams(window.location.search);if(this.preview=e.has("preview"),this._resetMode=e.has("reset"),this._resetMode)try{localStorage.removeItem(J)}catch{}const t=e.get("join");if(t&&!this._resetMode)try{localStorage.setItem(J,t)}catch{}let i=null;if(!this._resetMode)try{i=localStorage.getItem(J)}catch{}this.joinCode=this._resetMode?null:t??i??null,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this.holidays=[],this.ppFamily=null,this.ppIsMember=!1,this.ppChildren=[],this.selectedChildId=null,this.childMilestones=[],this.childInsights=[],this.childDailyCard=null,this.childPebbleMessages=[],this.childPebbleSessions=[],this.ppIsChildViewer=!1,this.incomingChildRequests=[],this.myChildAccessRequest=null,this._unsubAuth=null,this._onDataChange=()=>{this.pebbleUser=b.state.user,this.family=b.state.family,this.children=b.state.children,this.trips=b.state.trips,this.events=b.state.events,this.holidays=b.state.holidays,this.ppFamily=b.state.ppFamily,this.ppIsMember=b.state.ppIsMember,this.ppChildren=b.state.ppChildren,this.selectedChildId=b.state.selectedChildId,this.childMilestones=b.state.childMilestones,this.childInsights=b.state.childInsights,this.childDailyCard=b.state.childDailyCard,this.childPebbleMessages=b.state.childPebbleMessages,this.childPebbleSessions=b.state.childPebbleSessions,this.ppIsChildViewer=b.state.ppIsChildViewer,this.incomingChildRequests=b.state.incomingChildRequests,this.myChildAccessRequest=b.state.myChildAccessRequest,this.userDocResolved=b.userDocResolved},this.userDocResolved=!1}_clearJoinState(){this.joinCode=null;try{localStorage.removeItem(J)}catch{}const e=new URL(window.location.href);e.searchParams.delete("join"),window.history.replaceState({},"",e.toString())}connectedCallback(){if(super.connectedCallback(),typeof document<"u"&&document.documentElement.style.setProperty("--pre-login-bg","url('/portal/assets/pebblepath-daybreak-empty.jpg')"),this.preview){this.loading=!1;return}b.addEventListener("change",this._onDataChange),this._unsubAuth=ct(e=>{if(this.authUser=e,this.loading=!1,e){if(!this._resetMode)try{const t=localStorage.getItem(J);t&&!this.joinCode&&(this.joinCode=t)}catch{}b.start(e.uid),this._consumePendingCreate()}else b.stop(),this.userDocResolved=!1})}async _consumePendingCreate(){let e=null;try{e=localStorage.getItem(rt)}catch{}if(e){try{localStorage.removeItem(rt)}catch{}try{await b.createCairnOnlyFamily(e),f(`Welcome to ${e}.`)}catch(t){console.error("Pending family create failed:",t),f((t==null?void 0:t.code)==="permission-denied"?"Couldn't create the family — Firestore rules may need a redeploy.":`Couldn't create the family: ${(t==null?void 0:t.message)??"try again"}`,{duration:5e3})}}}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubAuth)==null||e.call(this),b.removeEventListener("change",this._onDataChange)}_composeViewer(){var i,r;const e=this.authUser,t=(i=this.pebbleUser)==null?void 0:i.displayName;return{uid:e.uid,displayName:t&&t.trim()||e.displayName||"You",email:e.email??((r=this.pebbleUser)==null?void 0:r.email)??"",photoURL:pt(e,this.pebbleUser)}}_needsOnboarding(){var t,i;return!this.authUser||this.joinCode?!1:this._resetMode?!0:this.userDocResolved?!(((t=this.pebbleUser)==null?void 0:t.familyId)??((i=this.pebbleUser)==null?void 0:i.cairnFamilyId)??null):!1}updated(){this.setAttribute("data-route",this._currentRoute())}_currentRoute(){return this.loading?"loading":this.preview?"home":this.authUser?this.joinCode?"join":!this.userDocResolved&&!this._resetMode||this._needsOnboarding()?"wizard":"home":"register"}render(){return this.loading?o``:this.preview?o`<home-screen preview></home-screen>`:this.authUser?this.joinCode?o`
        <join-family-screen
          .code=${this.joinCode}
          @joined=${()=>this._clearJoinState()}
          @cancel=${()=>this._clearJoinState()}
        ></join-family-screen>
      `:!this.userDocResolved&&!this._resetMode?o``:this._needsOnboarding()?o`
        <onboarding-wizard
          .user=${this.authUser}
          @join-code=${e=>{this.joinCode=e.detail.code;try{localStorage.setItem(J,e.detail.code)}catch{}}}
        ></onboarding-wizard>
      `:o`
      <home-screen
        .user=${this._composeViewer()}
        .pebbleUser=${this.pebbleUser}
        .family=${this.family}
        .children=${this.children}
        .trips=${this.trips}
        .events=${this.events}
        .holidays=${this.holidays}
        .ppFamily=${this.ppFamily}
        .ppIsMember=${this.ppIsMember}
        .ppChildren=${this.ppChildren}
        .selectedChildId=${this.selectedChildId}
        .childMilestones=${this.childMilestones}
        .childInsights=${this.childInsights}
        .childDailyCard=${this.childDailyCard}
        .childPebbleMessages=${this.childPebbleMessages}
        .childPebbleSessions=${this.childPebbleSessions}
        .ppIsChildViewer=${this.ppIsChildViewer}
        .incomingChildRequests=${this.incomingChildRequests}
        .myChildAccessRequest=${this.myChildAccessRequest}
      ></home-screen>
    `:o`
        <register-screen
          .joinCode=${this.joinCode??""}
        ></register-screen>
      `}}y(bt,"properties",{authUser:{state:!0},loading:{state:!0},preview:{state:!0},joinCode:{state:!0},pebbleUser:{state:!0},family:{state:!0},children:{state:!0},trips:{state:!0},events:{state:!0},holidays:{state:!0},userDocResolved:{state:!0},ppFamily:{state:!0},ppIsMember:{state:!0},ppChildren:{state:!0},selectedChildId:{state:!0},childMilestones:{state:!0},childInsights:{state:!0},childDailyCard:{state:!0},childPebbleMessages:{state:!0},childPebbleSessions:{state:!0},ppIsChildViewer:{state:!0},incomingChildRequests:{state:!0},myChildAccessRequest:{state:!0}});customElements.define("cairn-app",bt);
//# sourceMappingURL=index-DJ9khGVP.js.map
