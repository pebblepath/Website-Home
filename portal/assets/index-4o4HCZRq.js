var mt=Object.defineProperty;var bt=(d,e,t)=>e in d?mt(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t;var f=(d,e,t)=>bt(d,typeof e!="symbol"?e+"":e,t);import{i as D,a as E,b as s}from"./lit-2GpawzfI.js";import{f as ft,h as vt,j as yt,G as Ue,O as xt,k as wt,s as _t,l as et,m as kt,n as $t,o as Ct,q as zt,t as A,v as N,w as z,x as Dt,y as X,z as W,A as G,B as V,D as le,E as q,H as de,I as be}from"./firebase-core-WlNQdXp3.js";import{g as At,h as ce}from"./firebase-functions-EPI35Sfs.js";import{g as Et,r as tt,u as it,a as rt}from"./firebase-storage-BMyqKy67.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();class fe extends D{constructor(){super(),this.variant="default",this.lifted=!1,this.padding="md"}render(){const e=["panel",this.variant==="strong"?"strong":"",this.lifted?"lifted":"",`pad-${this.padding}`].filter(Boolean).join(" ");return s`
      <div class=${e}>
        <div class="content"><slot></slot></div>
      </div>
    `}}f(fe,"properties",{variant:{type:String},lifted:{type:Boolean},padding:{type:String}}),f(fe,"styles",E`
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
  `);customElements.define("glass-panel",fe);class ve extends D{constructor(){super(),this.variant="primary",this.size="md",this.full=!1,this.disabled=!1}render(){const e=[this.variant,`size-${this.size}`,this.full?"full":""].filter(Boolean).join(" ");return s`
      <button class=${e} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}}f(ve,"properties",{variant:{type:String},size:{type:String},full:{type:Boolean},disabled:{type:Boolean,reflect:!0}}),f(ve,"styles",E`
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
  `);customElements.define("glass-button",ve);class ye extends D{constructor(){super(),this.size=44}render(){const e=this.size;return s`
      <svg
        viewBox="0 0 64 64"
        width=${e}
        height=${e}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Cairn"
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
    `}}f(ye,"properties",{size:{type:Number}}),f(ye,"styles",E`
    :host {
      display: inline-block;
      line-height: 0;
    }
    svg {
      display: block;
      filter: drop-shadow(0 6px 18px rgba(20, 12, 6, 0.45));
    }
  `);customElements.define("cairn-mark",ye);const St="modulepreload",Ft=function(d){return"/portal/"+d},Je={},at=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let n=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=n(t.map(c=>{if(c=Ft(c),c in Je)return;Je[c]=!0;const h=c.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":St,h||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),h)return new Promise((_,b)=>{u.addEventListener("load",_),u.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(n){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n}return r.then(n=>{for(const o of n||[])o.status==="rejected"&&a(o.reason);return e().catch(a)})},xe={apiKey:"AIzaSyA6NKZNLVBeeLrXcLJSXus5M832AxpI2wk",authDomain:"pebblepath-992b6.firebaseapp.com",projectId:"pebblepath-992b6",storageBucket:"pebblepath-992b6.firebasestorage.app",messagingSenderId:"497141667291",appId:"1:497141667291:web:ee84c186db54389d10c3fe"},T=!!(xe.apiKey&&xe.projectId),Z=T?ft(xe):null,w=T?vt(Z):null,v=T?yt(Z):null,Y=T?At(Z,"us-central1"):null,we=T?Et(Z):null,_e=T?new Ue:null;_e&&_e.setCustomParameters({prompt:"select_account"});const ue=T?new Ue:null;ue&&ue.addScope("https://www.googleapis.com/auth/calendar.readonly");let pe=null,ke=0;async function st(){if(!w||!ue)throw new Error("Firebase not configured.");if(pe&&Date.now()<ke-6e4)return pe;const d=w.currentUser;if(!d)throw new Error("Please sign in before importing your calendar.");if(!(d.providerData??[]).some(a=>a.providerId==="google.com")){const a=new Error("Calendar import needs a Google account. You're signed in another way, so Cairn can't read your Google Calendar here yet — add events manually for now.");throw a.code="calendar/needs-google-account",a}let t;try{t=await wt(d,ue)}catch(a){if((a==null?void 0:a.code)==="auth/user-mismatch"){const n=new Error("Please choose the same Google account you use to sign in to Cairn.");throw n.code=a.code,n}if((a==null?void 0:a.code)==="auth/popup-closed-by-user"||(a==null?void 0:a.code)==="auth/cancelled-popup-request"){const n=new Error("Calendar connection cancelled.");throw n.code=a.code,n}throw a}const i=Ue.credentialFromResult(t),r=i==null?void 0:i.accessToken;if(!r)throw new Error("Couldn't get a Calendar access token — try again.");return pe=r,ke=Date.now()+3600*1e3,r}function It(){pe=null,ke=0}function ie(){if(!w)throw new Error("Firebase not configured — fill in .env first.");return et(w,_e)}const re=T?new xt("apple.com"):null;re&&(re.addScope("email"),re.addScope("name"));function he(){if(!w||!re)throw new Error("Firebase not configured — fill in .env first.");return et(w,re)}function ot(d,e){if(!w)throw new Error("Firebase not configured.");return Ct(w,d,e)}async function nt(d,e,t){if(!w)throw new Error("Firebase not configured.");const i=await kt(w,d,e);if(t&&t.trim())try{await $t(i.user,{displayName:t.trim()})}catch{}return i}function lt(d){if(!w)throw new Error("Firebase not configured.");return zt(w,d)}function dt(){return w?_t(w):Promise.resolve()}function ct(d){return w?Dt(w,d):(d(null),()=>{})}const Nt=Object.freeze(Object.defineProperty({__proto__:null,addDoc:de,app:Z,auth:w,clearCalendarToken:It,collection:G,connectGoogleCalendar:st,db:v,deleteDoc:be,doc:A,firebaseApp:Z,functions:Y,getDocs:le,getDownloadURL:rt,httpsCallable:ce,isConfigured:T,onAuth:ct,onSnapshot:X,query:W,sendPasswordReset:lt,serverTimestamp:z,setDoc:q,signIn:ie,signInWithApple:he,signInWithEmail:ot,signOutUser:dt,signUpWithEmail:nt,storage:we,storageRef:tt,updateDoc:N,uploadBytes:it,where:V},Symbol.toStringTag,{value:"Module"}));class Tt extends EventTarget{constructor(){super(),this.state={user:null,family:null,children:[],trips:[],events:[]},this._uid=null,this._unsubUser=null,this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this._currentFamilyId=null,this.userDocResolved=!1}get familyId(){return this._currentFamilyId}start(e){!v||!e||this._uid!==e&&(this.stop(),this._uid=e,this._unsubUser=X(A(v,"users",e),t=>{var r,a,n,o,l,c;this.userDocResolved=!0,this.state.user=t.exists()?{id:t.id,...t.data()}:null;const i=((r=this.state.user)==null?void 0:r.cairnFamilyId)??((a=this.state.user)==null?void 0:a.familyId)??null;!i&&this.state.user&&this._healFamilyPointer(e),i!==this._currentFamilyId&&(this._currentFamilyId=i,(n=this._unsubFamily)==null||n.call(this),(o=this._unsubChildren)==null||o.call(this),(l=this._unsubTrips)==null||l.call(this),(c=this._unsubEvents)==null||c.call(this),this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this.state.family=null,this.state.children=[],this.state.trips=[],this.state.events=[],i&&this._subscribeFamily(i)),this._emit()}))}async _healFamilyPointer(e){if(!this._healing){this._healing=!0;try{const t=W(G(v,"families"),V("cairnMemberIds","array-contains",e)),i=await le(t);if(!i.empty){await q(A(v,"users",e),{cairnFamilyId:i.docs[0].id,updatedAt:z()},{merge:!0});return}const r=W(G(v,"families"),V("memberIds","array-contains",e)),a=await le(r);a.empty||await q(A(v,"users",e),{familyId:a.docs[0].id,updatedAt:z()},{merge:!0})}catch(t){console.warn("[Cairn] auto-heal family pointer failed:",t==null?void 0:t.code,t==null?void 0:t.message)}finally{this._healing=!1}}}_subscribeFamily(e){this._unsubFamily=X(A(v,"families",e),t=>{this.state.family=t.exists()?{id:t.id,...t.data()}:null,this._emit()}),this._unsubChildren=X(G(v,"families",e,"children"),t=>{this.state.children=t.docs.map(i=>{var a,n;const r=i.data();return{id:i.id,...r,dateOfBirth:((n=(a=r.dateOfBirth)==null?void 0:a.toDate)==null?void 0:n.call(a))??(r.dateOfBirth?new Date(r.dateOfBirth):null)}}),this._emit()}),this._unsubTrips=X(W(G(v,"families",e,"trips"),V("visibleTo","array-contains",this._uid)),t=>{this.state.trips=t.docs.map(i=>{var a,n,o,l;const r=i.data();return{id:i.id,...r,start:r.start??"",end:r.end??"",createdAt:((n=(a=r.createdAt)==null?void 0:a.toDate)==null?void 0:n.call(a))??null,updatedAt:((l=(o=r.updatedAt)==null?void 0:o.toDate)==null?void 0:l.call(o))??null}}).sort((i,r)=>String(i.start).localeCompare(String(r.start))),this._backfillVisibleTo("trips",t.docs),this._emit()},t=>{console.warn("[Cairn] trips subscription error:",t.code,t.message)}),this._unsubEvents=X(W(G(v,"families",e,"familyEvents"),V("visibleTo","array-contains",this._uid)),t=>{this.state.events=t.docs.map(i=>{var a,n,o,l;const r=i.data();return{id:i.id,...r,date:r.date??"",createdAt:((n=(a=r.createdAt)==null?void 0:a.toDate)==null?void 0:n.call(a))??null,updatedAt:((l=(o=r.updatedAt)==null?void 0:o.toDate)==null?void 0:l.call(o))??null}}),this._backfillVisibleTo("familyEvents",t.docs),this._emit()},t=>{console.warn("[Cairn] familyEvents subscription error:",t.code,t.message)})}_backfillVisibleTo(e,t){if(!v||!this._currentFamilyId)return;const i=this.state.family;if(i){this._vtBackfilled||(this._vtBackfilled=new Set);for(const r of t){const a=r.data();if(Array.isArray(a.visibleTo))continue;const n=`${e}/${r.id}`;this._vtBackfilled.has(n)||(this._vtBackfilled.add(n),N(A(v,"families",this._currentFamilyId,e,r.id),{visibleTo:me(a.visibility??"family",i,a.createdBy)}).catch(o=>{this._vtBackfilled.delete(n),console.warn(`[Cairn] visibleTo backfill failed (${n}):`,o==null?void 0:o.code,o==null?void 0:o.message)}))}}}async saveTrip(e){var c;if(!v||!this._currentFamilyId)throw new Error("No family yet.");const t=(c=w==null?void 0:w.currentUser)==null?void 0:c.uid;if(!t)throw new Error("Not signed in.");const{id:i,createdAt:r,updatedAt:a,...n}=e,o={...n,updatedAt:z()};return o.visibleTo=me(n.visibility??"family",this.state.family,n.createdBy??t),i?(await N(A(v,"families",this._currentFamilyId,"trips",i),o),i):(o.createdBy=t,o.createdAt=z(),(await de(G(v,"families",this._currentFamilyId,"trips"),o)).id)}async deleteTrip(e){if(!v||!this._currentFamilyId)throw new Error("No family yet.");await be(A(v,"families",this._currentFamilyId,"trips",e))}async saveEvent(e){var c;if(!v||!this._currentFamilyId)throw new Error("No family yet.");const t=(c=w==null?void 0:w.currentUser)==null?void 0:c.uid;if(!t)throw new Error("Not signed in.");const{id:i,createdAt:r,updatedAt:a,...n}=e,o={...n,updatedAt:z()};return o.visibleTo=me(n.visibility??"family",this.state.family,n.createdBy??t),i?(await N(A(v,"families",this._currentFamilyId,"familyEvents",i),o),i):(o.createdBy=t,o.createdAt=z(),(await de(G(v,"families",this._currentFamilyId,"familyEvents"),o)).id)}async deleteEvent(e){if(!v||!this._currentFamilyId)throw new Error("No family yet.");await be(A(v,"families",this._currentFamilyId,"familyEvents",e))}async previewUrl(e){if(!e||typeof e!="string"||!/^https?:\/\//i.test(e.trim()))return null;if(!Y)throw new Error("Firebase functions not configured.");return(await ce(Y,"previewUrl")({url:e.trim()})).data}async lookupFlight(e,t){if(!e||typeof e!="string")return null;if(!Y)throw new Error("Firebase functions not configured.");return(await ce(Y,"lookupFlight")({flightNumber:e.trim(),date:typeof t=="string"?t.trim():""})).data}async askPebble(e,t=[]){if(!Y)throw new Error("Firebase functions not configured.");if(!this._currentFamilyId)throw new Error("No family yet.");return(await ce(Y,"askPebbleAboutActivities")({question:e,familyId:this._currentFamilyId,history:t})).data}async updateChildBirthday(e,t){if(!v||!this._currentFamilyId)throw new Error("No family yet.");await N(A(v,"families",this._currentFamilyId,"children",e),{dateOfBirth:t,updatedAt:z()})}async findFamilyByCairnCode(e){if(!v)throw new Error("Firebase not configured.");const t=W(G(v,"families"),V("cairnInviteCode","==",e)),i=await le(t);if(i.empty)return null;const r=i.docs[0];return{id:r.id,...r.data()}}async joinFamilyAsCairn(e){var p,u,_;if(!v)throw new Error("Firebase not configured.");const t=(p=w==null?void 0:w.currentUser)==null?void 0:p.uid;if(!t)throw new Error("Not signed in.");const i=await this.findFamilyByCairnCode(e);if(!i){const b=new Error("Invite code not found.");throw b.code="not-found",b}const r=((_=(u=i.cairnInviteCodeExpiresAt)==null?void 0:u.toDate)==null?void 0:_.call(u))??(i.cairnInviteCodeExpiresAt?new Date(i.cairnInviteCodeExpiresAt):null);if(!r||r<new Date){const b=new Error("This invite code has expired.");throw b.code="expired",b}const a=i.cairnMemberIds??[],n=i.memberIds??[],o=w.currentUser;if(a.includes(t)||n.includes(t))return await q(A(v,"users",t),{email:o.email??"",displayName:o.displayName??"",profilePhotoURL:o.photoURL??null,cairnFamilyId:i.id,updatedAt:z()},{merge:!0}),i.id;const l=i.cairnMaxMembers??20;if(a.length>=l){const b=new Error("This family's Cairn ring is full.");throw b.code="full",b}const c=new Date,h={displayName:o.displayName??"",profilePhotoURL:o.photoURL??null,role:"member",joinedAt:c,updatedAt:c};return await N(A(v,"families",i.id),{cairnMemberIds:[...a,t],[`memberProfiles.${t}`]:h,updatedAt:z()}),await q(A(v,"users",t),{email:o.email??"",displayName:o.displayName??"",profilePhotoURL:o.photoURL??null,cairnFamilyId:i.id,role:"member",notificationPreferences:{milestoneReminders:!0,tipNotifications:!0,schoolDeadlines:!0},createdAt:z(),updatedAt:z()},{merge:!0}),i.id}async saveSubGroup({id:e,name:t,memberIds:i}){if(!v||!this._currentFamilyId)throw new Error("No family yet.");const r=e??`g_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`;return await N(A(v,"families",this._currentFamilyId),{[`subGroups.${r}`]:{name:t.trim(),memberIds:Array.isArray(i)?[...i]:[],updatedAt:z()},updatedAt:z()}),r}async deleteSubGroup(e){if(!v||!this._currentFamilyId)throw new Error("No family yet.");const{deleteField:t}=await at(async()=>{const{deleteField:i}=await import("./firebase-core-WlNQdXp3.js").then(r=>r.J);return{deleteField:i}},[]);await N(A(v,"families",this._currentFamilyId),{[`subGroups.${e}`]:t(),updatedAt:z()})}async setCairnMemberSubGroup(e,t){var a;if(!v||!this._currentFamilyId)throw new Error("No family yet.");if(!e)throw new Error("uid is required.");const i=((a=this.state.family)==null?void 0:a.subGroups)??{},r={};for(const[n,o]of Object.entries(i)){const l=Array.isArray(o.memberIds)?o.memberIds:[];n===t?l.includes(e)||(r[`subGroups.${n}.memberIds`]=[...l,e]):l.includes(e)&&(r[`subGroups.${n}.memberIds`]=l.filter(c=>c!==e))}Object.keys(r).length!==0&&(r.updatedAt=z(),await N(A(v,"families",this._currentFamilyId),r))}async createCairnOnlyFamily(e){if(!v)throw new Error("Firebase not configured.");const t=w==null?void 0:w.currentUser,i=t==null?void 0:t.uid;if(!i)throw new Error("Not signed in.");const r=(e??"").trim();if(!r)throw new Error("Family name is required.");const a=new Date,n=Xe(),o=new Date(Date.now()+720*60*60*1e3),l={displayName:t.displayName??"",profilePhotoURL:t.photoURL??null,role:"admin",joinedAt:a,updatedAt:a},c={name:r,createdBy:i,createdInApp:"cairn",memberIds:[],cairnMemberIds:[i],cairnMaxMembers:20,cairnInviteCode:n,cairnInviteCodeExpiresAt:o,memberProfiles:{[i]:l},createdAt:z(),updatedAt:z()},h=await de(G(v,"families"),c);return await q(A(v,"users",i),{email:t.email??"",displayName:t.displayName??"",profilePhotoURL:t.photoURL??null,cairnFamilyId:h.id,role:"admin",notificationPreferences:{milestoneReminders:!1,tipNotifications:!1,schoolDeadlines:!1},createdAt:z(),updatedAt:z()},{merge:!0}),h.id}async regenerateCairnInviteCode(){if(!v||!this._currentFamilyId)throw new Error("No family yet.");const e=Xe(),t=new Date(Date.now()+720*60*60*1e3);return await N(A(v,"families",this._currentFamilyId),{cairnInviteCode:e,cairnInviteCodeExpiresAt:t,updatedAt:z()}),{code:e,expiresAt:t}}stop(){var e,t,i,r,a;(e=this._unsubUser)==null||e.call(this),(t=this._unsubFamily)==null||t.call(this),(i=this._unsubChildren)==null||i.call(this),(r=this._unsubTrips)==null||r.call(this),(a=this._unsubEvents)==null||a.call(this),this._unsubUser=this._unsubFamily=this._unsubChildren=this._unsubTrips=this._unsubEvents=null,this._uid=null,this._currentFamilyId=null,this.userDocResolved=!1,this.state={user:null,family:null,children:[],trips:[],events:[]}}_emit(){this.dispatchEvent(new Event("change"))}}const k=new Tt;function pt(d,e){const t=e==null?void 0:e.profilePhotoURL;return typeof t=="string"&&/^https?:\/\//i.test(t)?t:d!=null&&d.photoURL?d.photoURL:null}function Pt(d,e){if(!e)return[];const t=e.cairnMemberIds??e.memberIds??[],i=e.memberIds??[],r=e.memberProfiles??{},a=[];let n=280;for(const o of t){if(i.includes(o)||o===d)continue;const l=r[o],c=l==null?void 0:l.profilePhotoURL;a.push({uid:o,displayName:(l==null?void 0:l.displayName)??"Family",photoURL:typeof c=="string"&&/^https?:\/\//i.test(c)?c:null,role:"extended",circles:["extended"],hue:n}),n=(n+47)%360}return a}function me(d,e,t){const i=(e==null?void 0:e.memberIds)??[],r=(e==null?void 0:e.cairnMemberIds)??[],a=t?[t]:[];return d==="personal"?[...new Set(a)]:d==="extended"?[...new Set([...i,...r,...a])]:[...new Set([...i,...a])]}function Xe(){const d="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="CAIRN-";for(let t=0;t<4;t++)e+=d[Math.floor(Math.random()*d.length)];return e}function Mt(d,e,t,i,r){const a=[],n=new Set((i==null?void 0:i.memberIds)??[]),o=n.has(d);a.push({uid:d,displayName:(e==null?void 0:e.displayName)??(t==null?void 0:t.displayName)??"You",photoURL:pt(e,t),role:o?"self":"self-extended",circles:["immediate"],hue:198});const l=(i==null?void 0:i.memberProfiles)??{};for(const[h,p]of Object.entries(l)){if(h===d||!n.has(h))continue;const u=p.profilePhotoURL;a.push({uid:h,displayName:p.displayName??"Co-parent",photoURL:typeof u=="string"&&/^https?:\/\//i.test(u)?u:null,role:"co-parent",circles:["immediate"],hue:8})}let c=142;for(const h of r??[]){const p=h.profilePhotoURL;a.push({uid:`child:${h.id}`,displayName:h.name,photoURL:typeof p=="string"&&/^https?:\/\//i.test(p)?p:null,role:"child",circles:["immediate"],hue:c,dateOfBirth:h.dateOfBirth}),c=(c+58)%360}return a}function Ot(d){const e=[];for(const t of d??[]){if(!t.dateOfBirth)continue;const i=t.dateOfBirth,r=i.getUTCFullYear(),a=String(i.getUTCMonth()+1).padStart(2,"0"),n=String(i.getUTCDate()).padStart(2,"0");e.push({id:`bday:${t.id}`,type:"birthday",date:`${r}-${a}-${n}`,personIds:[`child:${t.id}`],title:`${t.name}'s birthday`,_childId:t.id,_childName:t.name,recurring:!0})}return e}function jt(d,e=new Date){if(!(d!=null&&d.date))return{date:null,yearsElapsed:0};const t=C(d.date);if(!t||Number.isNaN(t.getTime()))return{date:null,yearsElapsed:0};if(!d.recurring)return{date:t,yearsElapsed:0};const i=new Date(e.getFullYear(),t.getMonth(),t.getDate()),r=i<new Date(e.getFullYear(),e.getMonth(),e.getDate())?new Date(e.getFullYear()+1,t.getMonth(),t.getDate()):i,a=r.getFullYear()-t.getFullYear();return{date:r,yearsElapsed:a}}const We=["linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)","linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)","linear-gradient(135deg, #3d9b8f 0%, #1f5c54 100%)","linear-gradient(135deg, #d4a843 0%, #c67b5c 55%, #c98a8a 100%)","linear-gradient(135deg, #8b7bb5 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #6b9ac4 0%, #3d9b8f 100%)"];function C(d){if(!d)return null;if(d instanceof Date)return d;const e=String(d).match(/^(\d{4})-(\d{2})-(\d{2})/);return e?new Date(Number(e[1]),Number(e[2])-1,Number(e[3])):new Date(d)}function Lt(d){if(!d)return null;const e=d.getFullYear(),t=String(d.getMonth()+1).padStart(2,"0"),i=String(d.getDate()).padStart(2,"0");return`${e}-${t}-${i}`}async function Gt(d,e=90,t=100){const i=new Date,r=new Date(i.getTime()+e*24*60*60*1e3),a=new URL("https://www.googleapis.com/calendar/v3/calendars/primary/events");a.searchParams.set("timeMin",i.toISOString()),a.searchParams.set("timeMax",r.toISOString()),a.searchParams.set("maxResults",String(t)),a.searchParams.set("singleEvents","true"),a.searchParams.set("orderBy","startTime");const n=await fetch(a.toString(),{headers:{Authorization:`Bearer ${d}`}});if(!n.ok){const l=await n.text();throw n.status===401?new Error("Your Google session expired — connect your calendar again."):n.status===403&&/accessNotConfigured|SERVICE_DISABLED|PERMISSION_DENIED|insufficient/i.test(l)?new Error("Google Calendar access isn’t configured for this project yet. (Admin: enable the Google Calendar API and add the calendar.readonly scope to the OAuth consent screen in Google Cloud Console.)"):new Error(`Google Calendar: ${n.status} ${l.slice(0,160)}`)}return((await n.json()).items??[]).filter(l=>{var c,h;return l.status!=="cancelled"&&(((c=l.start)==null?void 0:c.date)||((h=l.start)==null?void 0:h.dateTime))})}function Bt(d,e){var r,a,n,o,l,c,h,p;const t=((r=d.start)==null?void 0:r.date)??((n=(a=d.start)==null?void 0:a.dateTime)==null?void 0:n.slice(0,10))??"";let i=((o=d.end)==null?void 0:o.date)??((c=(l=d.end)==null?void 0:l.dateTime)==null?void 0:c.slice(0,10))??t;if((h=d.start)!=null&&h.date&&((p=d.end)!=null&&p.date)){const u=new Date(i);u.setDate(u.getDate()-1),i=u.toISOString().slice(0,10)}return{title:d.summary||"(untitled)",location:d.location??"",start:t,end:i,attendees:e?[e]:[],viewers:[],visibility:"family",notes:(d.description??"").slice(0,1e3),gcalEventId:d.id,gcalEventLink:d.htmlLink??null}}function Rt(d){if(d!=null&&d.coverGradient)return d.coverGradient;const e=((d==null?void 0:d.title)??(d==null?void 0:d.id)??"")+((d==null?void 0:d.location)??"");let t=0;for(let i=0;i<e.length;i++)t=t*31+e.charCodeAt(i)>>>0;return We[t%We.length]}class $e extends D{constructor(){super(),this.year=new Date().getFullYear(),this.tripDays=new Map,this.trips=[],this.events=[],this.today=new Date,this._activeDay=null}_isLeap(e){return e%4===0&&e%100!==0||e%400===0}_daysInMonth(e,t){return[31,this._isLeap(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]}_labelsForMonth(e){var a;const t=this.year,i=new Map,r=(n,o)=>{const l=i.get(n);i.set(n,l?`${l} · ${o}`:o)};for(const n of this.trips??[]){if(!n.start||!n.end)continue;const o=C(n.start),l=C(n.end);if(!o||!l||o.getFullYear()>t||l.getFullYear()<t)continue;const c=new Date(t,e,1),h=new Date(t,e+1,0);if(l<c||o>h)continue;const p=o.getMonth()===e&&o.getFullYear()===t?o.getDate():1,u=l.getMonth()===e&&l.getFullYear()===t?l.getDate():h.getDate(),_=(a=n.location)!=null&&a.trim()?`${n.title} (${n.location.trim()})`:n.title;for(let b=p;b<=u;b++)r(b,_)}for(const n of this.events??[]){const o=C(n.date);o&&o.getFullYear()===t&&o.getMonth()===e&&r(o.getDate(),n.title??"Event")}return i}_renderMonth(e){var c,h;const t=this.year,r=(new Date(t,e,1).getDay()+6)%7,a=this._daysInMonth(t,e),n=this._labelsForMonth(e),o=[];for(let p=0;p<r;p++)o.push(s`<div class="cell empty"></div>`);const l=this.today;for(let p=1;p<=a;p++){const u=`${String(e+1).padStart(2,"0")}-${String(p).padStart(2,"0")}`,_=this.tripDays.get(u)??0,b=l.getFullYear()===t&&l.getMonth()===e&&l.getDate()===p,g=n.get(p),m=(this.events??[]).some(P=>{const F=C(P.date);return F&&F.getFullYear()===t&&F.getMonth()===e&&F.getDate()===p}),$=((c=this._activeDay)==null?void 0:c.month)===e&&((h=this._activeDay)==null?void 0:h.day)===p,S=["cell",b?"today":"",_>0?"trip":"",_>.6?"dense":"",m?"event":"",g?"labelled":"",$?"active":""].filter(Boolean).join(" ");o.push(s`<div
        class=${S}
        title=${g?`${p} ${this._monthName(e)} — ${g}`:""}
        @click=${P=>g&&this._onDayTap(P,e,p,g)}
      ></div>`)}return o}_onDayTap(e,t,i,r){var a,n;if(e.stopPropagation(),((a=this._activeDay)==null?void 0:a.month)===t&&((n=this._activeDay)==null?void 0:n.day)===i){this._activeDay=null;return}this._activeDay={month:t,day:i,label:r}}_monthName(e){return new Date(this.year,e,1).toLocaleString("en-GB",{month:"short"})}_onSelect(e){this.dispatchEvent(new CustomEvent("month-select",{detail:{month:e,year:this.year},bubbles:!0,composed:!0}))}render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=this.today.getMonth(),i=this.today.getFullYear()===this.year;return s`
      <div class="grid">
        ${e.map((r,a)=>s`
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
      </div>
      ${this._activeDay?s`
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
    `}}f($e,"properties",{year:{type:Number},tripDays:{type:Object},trips:{type:Array},events:{type:Array},today:{type:Object},_activeDay:{state:!0}}),f($e,"styles",E`
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
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.14);
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
      color: var(--teal-pebble);
    }
    .mini-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 1px;
    }
    .cell {
      aspect-ratio: 1 / 1;
      border-radius: 3px;
      background: rgba(255, 248, 235, 0.09);
      box-shadow: inset 0 0 0 1px rgba(255, 248, 235, 0.07);
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
  `);customElements.define("yearly-view",$e);class Ce extends D{constructor(){super(),this.name="",this.hue=200,this.photo="",this.size=36,this.showName=!1}_initials(){return this.name.split(/\s+/).map(e=>e[0]).filter(Boolean).slice(0,2).join("").toUpperCase()}render(){const e=`linear-gradient(135deg, hsl(${this.hue}, 55%, 62%) 0%, hsl(${(this.hue+40)%360}, 50%, 42%) 100%)`,t=`width:${this.size}px;height:${this.size}px;background:${e};font-size:${this.size*.38}px;`;return s`
      <div class="avatar" style=${t} title=${this.name}>
        ${this.photo?s`<img src=${this.photo} alt=${this.name} />`:s`<span>${this._initials()}</span>`}
      </div>
      ${this.showName?s`<span class="name">${this.name}</span>`:""}
    `}}f(Ce,"properties",{name:{type:String},hue:{type:Number},photo:{type:String},size:{type:Number},showName:{type:Boolean,attribute:"show-name"}}),f(Ce,"styles",E`
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
  `);customElements.define("member-chip",Ce);class ze extends D{constructor(){super(),this.start="",this.end="",this._displayMonth=null,this._hoverDate=null}willUpdate(e){if(e.has("start")||this._displayMonth===null){const t=this.start?C(this.start):new Date;this._displayMonth=new Date(t.getFullYear(),t.getMonth(),1)}}_isoFor(e,t,i){return`${e}-${String(t+1).padStart(2,"0")}-${String(i).padStart(2,"0")}`}_emit(e,t){this.start=e,this.end=t,this._hoverDate=null,this.dispatchEvent(new CustomEvent("range-change",{detail:{start:e,end:t},bubbles:!0,composed:!0}))}_onDayClick(e){if(!this.start||this.start&&this.end){this._emit(e,"");return}e<this.start?this._emit(e,this.start):this._emit(this.start,e)}_onDayHover(e){this.start&&!this.end&&(this._hoverDate=e)}_onLeave(){this._hoverDate=null}_shiftMonth(e){const t=this._displayMonth;this._displayMonth=new Date(t.getFullYear(),t.getMonth()+e,1)}_isToday(e,t,i){const r=new Date;return r.getFullYear()===e&&r.getMonth()===t&&r.getDate()===i}_inSelectedRange(e){return!this.start||!this.end?!1:e>this.start&&e<this.end}_inHoverRange(e){if(!this.start||this.end||!this._hoverDate)return!1;const t=this._hoverDate<this.start?this._hoverDate:this.start,i=this._hoverDate<this.start?this.start:this._hoverDate;return e>t&&e<i}_summary(){if(!this.start&&!this.end)return"Pick a start date";const e=t=>{const i=C(t);return i?i.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"}):""};return this.start&&!this.end?`From ${e(this.start)} — pick an end date`:this.start===this.end?e(this.start):`${e(this.start)} – ${e(this.end)}`}_renderGrid(){const e=this._displayMonth.getFullYear(),t=this._displayMonth.getMonth(),r=(new Date(e,t,1).getDay()+6)%7,a=new Date(e,t+1,0).getDate(),n=[];for(let o=0;o<r;o++)n.push(s`<div class="empty"></div>`);for(let o=1;o<=a;o++){const l=this._isoFor(e,t,o),c=l===this.start,h=l===this.end&&l!==this.start,p=this._inSelectedRange(l),u=this._inHoverRange(l),_=this._isToday(e,t,o),b=["day",c?"start":"",h?"end":"",p?"in-range":"",u?"hover-range":"",_&&!c&&!h?"today":""].filter(Boolean).join(" ");n.push(s`
        <button
          type="button"
          class=${b}
          @click=${()=>this._onDayClick(l)}
          @mouseover=${()=>this._onDayHover(l)}
        >
          ${o}
        </button>
      `)}return n}render(){if(!this._displayMonth)return s``;const e=this._displayMonth.toLocaleString("en-GB",{month:"long",year:"numeric"});return s`
      <div class="summary">${this._summary()}</div>
      <div class="head">
        <button class="nav" type="button" @click=${()=>this._shiftMonth(-1)} aria-label="Previous month">‹</button>
        <span class="month-label">${e}</span>
        <button class="nav" type="button" @click=${()=>this._shiftMonth(1)} aria-label="Next month">›</button>
      </div>
      <div class="dow-row">
        ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(t=>s`<div class="dow">${t}</div>`)}
      </div>
      <div class="grid" @mouseleave=${this._onLeave}>${this._renderGrid()}</div>
    `}}f(ze,"properties",{start:{type:String},end:{type:String},_displayMonth:{state:!0},_hoverDate:{state:!0}}),f(ze,"styles",E`
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
  `);customElements.define("date-range-picker",ze);class De extends D{constructor(){super(),this.open=!1,this.trip=null,this.members=[],this.extendedMembers=[],this._visibilityAutoExtended=!1,this.currentUid="",this.familyId="",this.busy=!1,this.formMode="trip",this.subGroups={},this._draft=this._blankDraft(),this._error="",this._previewing=!1,this._previewError="",this._previewDebounce=null,this._lastPreviewedUrl="",this._showReturn=!1,this._showOutboundDetails=!1,this._showReturnDetails=!1,this._showFlight=!1,this._outboundLookupState="idle",this._outboundLookupMessage="",this._returnLookupState="idle",this._returnLookupMessage="",this._lastLookedUpOutbound="",this._lastLookedUpReturn=""}async _runFlightLookup(e){var p,u,_,b;const t=e==="return",i=t?"returnFlightNumber":"flightNumber",r=(this._draft[i]??"").trim();if(!r)return;const a=r.toUpperCase().replace(/[^A-Z0-9]/g,"");if(!/^[A-Z]{2,3}\d{1,4}[A-Z]?$/.test(a)){this[t?"_returnLookupState":"_outboundLookupState"]="idle";return}const n=t?"_lastLookedUpReturn":"_lastLookedUpOutbound",o=t?this._draft.end:this._draft.start,l=`${a}|${o??""}`;if(this[n]===l)return;const c=t?"_returnLookupState":"_outboundLookupState",h=t?"_returnLookupMessage":"_outboundLookupMessage";this[c]="loading",this[h]="";try{const g=await k.lookupFlight(a,o);if(!g)return;this[n]=l;const m=t?"returnFlightAirline":"flightAirline",$=t?"returnFlightDepartAirport":"flightDepartAirport",S=t?"returnFlightArriveAirport":"flightArriveAirport",P=t?"returnFlightDepartTime":"flightDepartTime",F=t?"returnFlightArriveTime":"flightArriveTime",O=Q=>Q?String(Q).slice(0,16):"",j={};if(!this._draft[m]&&g.airline&&(j[m]=g.airline),!this._draft[$]&&((p=g.depart)!=null&&p.iata)&&(j[$]=g.depart.iata),!this._draft[S]&&((u=g.arrive)!=null&&u.iata)&&(j[S]=g.arrive.iata),!this._draft[P]&&((_=g.depart)!=null&&_.scheduledTime)&&(j[P]=O(g.depart.scheduledTime)),!this._draft[F]&&((b=g.arrive)!=null&&b.scheduledTime)&&(j[F]=O(g.arrive.scheduledTime)),Object.keys(j).length===0){this[c]="idle";return}this._draft={...this._draft,...j},(j[$]||j[S])&&(t?this._showReturnDetails=!0:this._showOutboundDetails=!0),this[c]="ok",this[h]=`Filled from ${g.airline??"flight record"}.`}catch(g){console.warn("Flight lookup failed:",g),this[c]="error",(g==null?void 0:g.code)==="functions/failed-precondition"?this[h]="Auto-fill not configured — enter details manually.":(g==null?void 0:g.code)==="functions/not-found"?this[h]="Couldn't find that flight — enter details manually.":(g==null?void 0:g.code)==="functions/invalid-argument"?this[h]="That doesn't look like a flight number.":(g==null?void 0:g.code)==="functions/unauthenticated"?this[h]="Sign in to use flight lookup.":this[h]="Flight lookup unavailable — enter details manually."}}willUpdate(e){(e.has("trip")||e.has("open"))&&(this.open&&(this._draft=this._draftFromTrip(this.trip),this._visibilityAutoExtended=!1,this._draft.id&&this._draft.lodgingUrl&&!this._draft.coverImage&&requestAnimationFrame(()=>this._autoRefreshPreview()),this._showReturn=!!(this._draft.returnFlightNumber||this._draft.returnFlightDepartTime||this._draft.returnFlightDepartAirport||this._draft.returnFlightArriveAirport),this._showOutboundDetails=!!(this._draft.flightDepartAirport||this._draft.flightArriveAirport),this._showReturnDetails=!!(this._draft.returnFlightDepartAirport||this._draft.returnFlightArriveAirport),this._showFlight=!!(this._draft.flightNumber||this._draft.flightAirline||this._draft.flightDepartTime||this._draft.flightDepartAirport||this._draft.flightArriveAirport||this._showReturn)),this._error="")}async _autoRefreshPreview(){const e=this._draft.lodgingUrl,t=this._draft.id;if(!(!e||!t||this._previewing)){this._previewing=!0,this._previewError="";try{const i=await k.previewUrl(e);if(!(i!=null&&i.image)){this._previewError="No preview image found for this URL.";return}const r={coverImage:i.image,lodgingHost:i.siteName??i.host??this._draft.lodgingHost??"",lodgingTitle:i.title??this._draft.lodgingTitle??""};this._draft={...this._draft,...r},this._lastPreviewedUrl=e;try{await k.saveTrip({id:t,...r})}catch(a){console.warn("Auto-save cover failed:",a)}}catch(i){console.warn("Auto preview failed:",i),this._previewError=(i==null?void 0:i.code)==="functions/unauthenticated"?"Preview needs you to be signed in.":"Preview unavailable — try the Refresh button."}finally{this._previewing=!1}}}_blankDraft(){const e=new Date().toISOString().slice(0,10);return{id:null,title:"",location:"",start:e,end:e,visibility:"family",attendees:this.currentUid?[this.currentUid]:[],viewers:[],targetSubGroups:[],lodgingUrl:"",lodgingHost:"",lodgingTitle:"",flightAirline:"",flightNumber:"",flightDepartAirport:"",flightDepartTime:"",flightArriveAirport:"",flightArriveTime:"",returnFlightAirline:"",returnFlightNumber:"",returnFlightDepartAirport:"",returnFlightDepartTime:"",returnFlightArriveAirport:"",returnFlightArriveTime:"",notes:""}}_draftFromTrip(e){return e?{id:e.id??null,title:e.title??"",location:e.location??"",start:e.start??new Date().toISOString().slice(0,10),end:e.end??e.start??new Date().toISOString().slice(0,10),visibility:e.visibility??"family",attendees:Array.isArray(e.attendees)?[...e.attendees]:[],viewers:Array.isArray(e.viewers)?[...e.viewers]:[],targetSubGroups:Array.isArray(e.targetSubGroups)?[...e.targetSubGroups]:[],lodgingUrl:e.lodgingUrl??"",lodgingHost:e.lodgingHost??"",lodgingTitle:e.lodgingTitle??"",flightAirline:e.flightAirline??"",flightNumber:e.flightNumber??"",flightDepartAirport:e.flightDepartAirport??"",flightDepartTime:e.flightDepartTime??"",flightArriveAirport:e.flightArriveAirport??"",flightArriveTime:e.flightArriveTime??"",returnFlightAirline:e.returnFlightAirline??"",returnFlightNumber:e.returnFlightNumber??"",returnFlightDepartAirport:e.returnFlightDepartAirport??"",returnFlightDepartTime:e.returnFlightDepartTime??"",returnFlightArriveAirport:e.returnFlightArriveAirport??"",returnFlightArriveTime:e.returnFlightArriveTime??"",coverImage:e.coverImage??"",notes:e.notes??""}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_onLodgingChange(e){this._set("lodgingUrl",e),this._previewError="",this._previewDebounce&&clearTimeout(this._previewDebounce);const t=e.trim();if(!t){this._set("coverImage",""),this._set("lodgingHost",""),this._set("lodgingTitle",""),this._lastPreviewedUrl="";return}/^https?:\/\//i.test(t)&&t!==this._lastPreviewedUrl&&(this._previewDebounce=setTimeout(()=>this._runPreview(t),700))}async _runPreview(e){this._previewing=!0,this._previewError="";try{const t=await k.previewUrl(e);if(!t)return;this._lastPreviewedUrl=e,this._draft={...this._draft,coverImage:t.image??this._draft.coverImage,lodgingHost:t.siteName??t.host??this._draft.lodgingHost,lodgingTitle:t.title??this._draft.lodgingTitle}}catch(t){console.warn("Preview failed:",t),(t==null?void 0:t.code)==="functions/unauthenticated"?this._previewError="Preview unavailable — sign in.":(t==null?void 0:t.code)==="functions/invalid-argument"?this._previewError="That URL doesn’t look right.":this._previewError="Preview unavailable — paste it again or skip."}finally{this._previewing=!1}}_isExtendedUid(e){return(this.extendedMembers??[]).some(t=>t.uid===e)}_setVisibility(e){this._visibilityAutoExtended=!1,this._set("visibility",e)}_toggleAttendee(e){const t=this._draft.attendees.includes(e),i=t?this._draft.attendees.filter(n=>n!==e):[...this._draft.attendees,e];let r=this._draft.viewers??[];t||(r=r.filter(n=>n!==e));let a=this._draft.visibility??"family";!t&&this._isExtendedUid(e)&&a!=="extended"?(a="extended",this._visibilityAutoExtended=!0):t&&this._visibilityAutoExtended&&(i.some(o=>this._isExtendedUid(o))||(a="family",this._visibilityAutoExtended=!1)),this._draft={...this._draft,attendees:i,viewers:r,visibility:a}}_toggleViewer(e){if(this._draft.attendees.includes(e))return;const i=(this._draft.viewers??[]).includes(e)?this._draft.viewers.filter(r=>r!==e):[...this._draft.viewers??[],e];this._set("viewers",i)}_toggleSubGroup(e){const i=(this._draft.targetSubGroups??[]).includes(e)?this._draft.targetSubGroups.filter(r=>r!==e):[...this._draft.targetSubGroups??[],e];this._set("targetSubGroups",i)}_renderFlightLookupStatus(e){const t=e==="return",i=t?this._returnLookupState:this._outboundLookupState,r=t?this._returnLookupMessage:this._outboundLookupMessage;return i==="idle"?s`<div class="hint">
        Tip: paste a flight number — we'll fetch airline + airports + times for you.
      </div>`:i==="loading"?s`<div class="lookup-status">
        <div class="spinner"></div>
        Looking up flight…
      </div>`:i==="ok"?s`<div class="lookup-status lookup-ok">✓ ${r}</div>`:s`<div class="lookup-status lookup-error">${r}</div>`}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give the trip a title.";return}if(!e.start){this._error="Pick a start date.";return}const t=e.end||e.start;if(t<e.start){this._error="End date can’t be before start date.";return}if(!this.familyId){this._error="You need to be in a family first.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,end:t,title:e.title.trim(),location:e.location.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this trip? This can’t be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return s``;const e=this._draft,t=!!e.id;return s`
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
                  ${["personal","family","extended"].map(i=>s`
                      <button
                        class=${e.visibility===i?"active":""}
                        @click=${()=>this._setVisibility(i)}
                      >
                        ${i==="personal"?"Just me":i==="family"?"Family":"Extended"}
                      </button>
                    `)}
                </div>
                ${this._visibilityAutoExtended?s`<div class="vis-note">
                      Set to <strong>Extended</strong> because you tagged
                      extended family — they'll see this trip. Remove them
                      or pick a different visibility to change it.
                    </div>`:""}
              </div>
              <div class="field">
                <label>Who's going</label>
                <div class="attendees">
                  ${this.members.map(i=>s`
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
                ${(this.extendedMembers??[]).length>0?s`
                      <div class="att-group-label">Extended family</div>
                      <div class="attendees">
                        ${this.extendedMembers.map(i=>s`
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
              </div>
              ${this.formMode!=="activity"?s`
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
                        ${e.lodgingUrl?s`<button
                              type="button"
                              class="preview-refresh-btn"
                              ?disabled=${this._previewing}
                              title="Re-fetch preview"
                              @click=${()=>this._runPreview(e.lodgingUrl)}
                            >
                              ↻
                            </button>`:""}
                      </div>
                      ${this._previewing?s`<div class="preview-loading">
                            <div class="spinner"></div>
                            Fetching preview…
                          </div>`:""}
                      ${this._previewError?s`<div class="preview-error">${this._previewError}</div>`:""}
                      ${!this._previewing&&e.coverImage?s`<div class="preview">
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

          ${e.visibility==="extended"&&Object.keys(this.subGroups??{}).length>0?s`
                <div class="field">
                  <label>Limit to sub-groups <span style="text-transform:none;font-weight:400;color:var(--text-tertiary);letter-spacing:0.01em;">(optional — leave empty to show to all extended)</span></label>
                  <div class="attendees">
                    ${Object.entries(this.subGroups).map(([i,r])=>s`
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


          ${this.formMode==="activity"?"":s`
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
            ${this._showFlight?s`<div class="flight-body">

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
                    @change=${()=>this._runFlightLookup("outbound")}
                    @blur=${()=>this._runFlightLookup("outbound")}
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
              ${this._showOutboundDetails?s`
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
              ${this._renderFlightLookupStatus("outbound")}
            </div>

            ${this._showReturn?s`
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
                          @change=${()=>this._runFlightLookup("return")}
                          @blur=${()=>this._runFlightLookup("return")}
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
                    ${this._showReturnDetails?s`
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
                    ${this._renderFlightLookupStatus("return")}
                  </div>
                `:s`
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

          ${this._error?s`<div class="error">${this._error}</div>`:""}

          <div class="actions">
            ${t?s`<button class="delete-btn" @click=${this._onDelete} ?disabled=${this.busy}>
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
    `}}f(De,"properties",{open:{type:Boolean,reflect:!0},trip:{type:Object},members:{type:Array},extendedMembers:{type:Array},currentUid:{type:String},familyId:{type:String},busy:{type:Boolean},formMode:{type:String},subGroups:{type:Object},_visibilityAutoExtended:{state:!0},_draft:{state:!0},_error:{state:!0},_previewing:{state:!0},_previewError:{state:!0},_showReturn:{state:!0},_showOutboundDetails:{state:!0},_showReturnDetails:{state:!0},_showFlight:{state:!0},_outboundLookupState:{state:!0},_outboundLookupMessage:{state:!0},_returnLookupState:{state:!0},_returnLookupMessage:{state:!0}}),f(De,"styles",E`
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
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.16);
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
      background: rgba(255, 248, 235, 0.1);
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
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.16);
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
      background: rgba(255, 248, 235, 0.05);
      border: 1px solid rgba(255, 248, 235, 0.12);
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
  `);customElements.define("trip-form",De);class Ae extends D{constructor(){super(),this.open=!1,this.event=null,this.members=[],this.familyId="",this.busy=!1,this._draft=this._blankDraft(),this._error=""}willUpdate(e){(e.has("event")||e.has("open"))&&(this.open&&(this._draft=this._draftFromEvent(this.event)),this._error="")}_blankDraft(){return{id:null,type:"birthday",title:"",date:new Date().toISOString().slice(0,10),personIds:[],recurring:!0,subtitle:"",notes:"",visibility:"family"}}_draftFromEvent(e){return e?{id:e.id??null,type:e.type??"birthday",title:e.title??"",date:e.date??new Date().toISOString().slice(0,10),personIds:Array.isArray(e.personIds)?[...e.personIds]:[],recurring:e.recurring??!0,subtitle:e.subtitle??"",notes:e.notes??"",visibility:e.visibility??"family"}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_toggleType(e){this._set("type",e)}_togglePerson(e){const t=this._draft.personIds.includes(e);this._set("personIds",t?this._draft.personIds.filter(i=>i!==e):[...this._draft.personIds,e])}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give it a title.";return}if(!e.date){this._error="Pick a date.";return}if(!this.familyId){this._error="No family yet.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,title:e.title.trim(),subtitle:e.subtitle.trim(),notes:e.notes.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this event? This can't be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return s``;const e=this._draft,t=!!e.id;return s`
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
              ${[{v:"birthday",label:"Birthday"},{v:"anniversary",label:"Anniversary"},{v:"custom",label:"Other"}].map(i=>s`
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

          ${this.members.length>0?s`
                <div class="field">
                  <label>Who is this about</label>
                  <div class="people">
                    ${this.members.map(i=>s`
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
                ${["personal","family","extended"].map(i=>s`
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

          ${this._error?s`<div class="error">${this._error}</div>`:""}

          <div class="actions">
            ${t?s`<button class="delete-btn" @click=${this._onDelete} ?disabled=${this.busy}>
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
    `}_monthDay(e){if(!e)return"";const t=C(e);return!t||Number.isNaN(t.getTime())?"":t.toLocaleString("en-GB",{day:"numeric",month:"long"})}}f(Ae,"properties",{open:{type:Boolean,reflect:!0},event:{type:Object},members:{type:Array},familyId:{type:String},busy:{type:Boolean},_draft:{state:!0},_error:{state:!0}}),f(Ae,"styles",E`
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
  `);customElements.define("event-form",Ae);let U=null,Ve=null;function Ut(){return U||(U=document.createElement("div"),U.id="cairn-toast-host",Object.assign(U.style,{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",zIndex:9999,pointerEvents:"none"}),document.body.appendChild(U),U)}function x(d,{duration:e=2800}={}){const t=Ut();clearTimeout(Ve),t.innerHTML="";const i=document.createElement("div");i.textContent=d,Object.assign(i.style,{padding:"12px 18px",background:"rgba(20, 12, 6, 0.78)",backdropFilter:"blur(24px) saturate(180%)",webkitBackdropFilter:"blur(24px) saturate(180%)",border:"1px solid rgba(255, 248, 235, 0.22)",borderRadius:"999px",color:"rgba(255, 248, 235, 0.96)",fontFamily:"'Inter', system-ui, sans-serif",fontSize:"13.5px",fontWeight:"500",letterSpacing:"0.005em",boxShadow:"0 12px 32px rgba(20, 12, 6, 0.45)",pointerEvents:"auto",transform:"translateY(8px)",opacity:"0",transition:"opacity 200ms ease, transform 240ms ease"}),t.appendChild(i),requestAnimationFrame(()=>{i.style.opacity="1",i.style.transform="translateY(0)"}),Ve=setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(8px)",setTimeout(()=>i.remove(),260)},e)}class Ee extends D{constructor(){super(),this.open=!1,this.family=null,this.immediate=[],this.extended=[],this._busy=!1,this._newGroupName="",this._editingGroupId=null}_onCancel(){this.dispatchEvent(new Event("cancel"))}async _createSubGroup(){const e=this._newGroupName.trim();if(!(!e||this._busy)){this._busy=!0;try{const t=await k.saveSubGroup({name:e,memberIds:[]});this._newGroupName="",this._editingGroupId=t,x(`Sub-group "${e}" created.`)}catch(t){x(`Couldn't create: ${t.code??t.message}`,{duration:5e3})}finally{this._busy=!1}}}async _toggleSubGroupMember(e,t){var n,o;const i=(o=(n=this.family)==null?void 0:n.subGroups)==null?void 0:o[e];if(!i)return;const r=i.memberIds??[],a=r.includes(t)?r.filter(l=>l!==t):[...r,t];try{await k.saveSubGroup({id:e,name:i.name,memberIds:a})}catch(l){x(`Couldn't update: ${l.code??l.message}`,{duration:5e3})}}async _deleteSubGroup(e,t){if(confirm(`Delete the "${t}" sub-group?`))try{await k.deleteSubGroup(e),this._editingGroupId===e&&(this._editingGroupId=null),x("Sub-group deleted.")}catch(i){x(`Couldn't delete: ${i.code??i.message}`,{duration:5e3})}}async _regenerate(){if(!this._busy){this._busy=!0;try{await k.regenerateCairnInviteCode(),x("New invite code generated.")}catch(e){console.error(e),x(`Couldn't generate code: ${e.code??e.message}`,{duration:5e3})}finally{this._busy=!1}}}_inviteLink(e){return`${window.location.origin}/portal/?join=${e}`}async _copyLink(){var t;const e=(t=this.family)==null?void 0:t.cairnInviteCode;if(e)try{await navigator.clipboard.writeText(this._inviteLink(e)),x("Invite link copied to clipboard.")}catch{x("Could not copy — try long-press the link instead.")}}async _share(){var i,r;const e=(i=this.family)==null?void 0:i.cairnInviteCode;if(!e)return;const t=this._inviteLink(e);if(navigator.share)try{await navigator.share({title:"Join my family on Cairn",text:`Join ${((r=this.family)==null?void 0:r.name)??"our family"} on Cairn — our shared family calendar.`,url:t})}catch{}else this._copyLink()}_expiryText(e){if(!e)return"";const t=e.toDate?e.toDate():new Date(e),r=Math.max(0,Math.round((t-new Date)/(1440*60*1e3)));return r===0?"Expires today":r===1?"Expires tomorrow":`Expires in ${r} days`}render(){var r,a,n,o;if(!this.open)return s``;const e=(r=this.family)==null?void 0:r.cairnInviteCode,t=(a=this.family)==null?void 0:a.cairnInviteCodeExpiresAt,i=t&&(t.toDate?t.toDate():new Date(t))<new Date;return s`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Manage members</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <h3>Immediate family · ${this.immediate.length}</h3>
          ${this.immediate.length===0?s`<div class="empty">No one in immediate yet.</div>`:this.immediate.map(l=>s`
                  <div class="member-row">
                    <member-chip
                      .name=${l.displayName}
                      .photo=${l.photoURL??""}
                      .hue=${l.hue}
                      size="36"
                    ></member-chip>
                    <div class="body">
                      <div class="name">${l.displayName}</div>
                      <div class="role">
                        ${l.role==="self"?"You":l.role==="co-parent"?"Co-parent (PebblePath)":l.role==="child"?"Child":"Family"}
                      </div>
                    </div>
                  </div>
                `)}

          <h3>Extended family · ${this.extended.length}</h3>
          ${this.extended.length===0?s`<div class="empty">
                Anyone you invite via Cairn (grandparents, aunts, uncles, etc.) will appear here.
                They can see trips and celebrations but not PebblePath child data.
              </div>`:this.extended.map(l=>s`
                  <div class="member-row">
                    <member-chip
                      .name=${l.displayName}
                      .photo=${l.photoURL??""}
                      .hue=${l.hue}
                      size="36"
                    ></member-chip>
                    <div class="body">
                      <div class="name">${l.displayName}</div>
                      <div class="role">Cairn — extended</div>
                    </div>
                  </div>
                `)}

          ${this.extended.length>0||Object.keys(((n=this.family)==null?void 0:n.subGroups)??{}).length>0?s`
                <h3>Sub-groups</h3>
                ${Object.entries(((o=this.family)==null?void 0:o.subGroups)??{}).map(([l,c])=>s`
                    <div class="subgroup">
                      <div class="subgroup-head">
                        <div>
                          <span class="subgroup-name">${c.name}</span>
                          <span class="count">${(c.memberIds??[]).length} ${(c.memberIds??[]).length===1?"member":"members"}</span>
                        </div>
                        <div class="subgroup-actions">
                          <button
                            class="icon-btn"
                            title=${this._editingGroupId===l?"Done":"Edit members"}
                            @click=${()=>this._editingGroupId=this._editingGroupId===l?null:l}
                          >
                            ${this._editingGroupId===l?"✓":"✎"}
                          </button>
                          <button
                            class="icon-btn danger"
                            title="Delete"
                            @click=${()=>this._deleteSubGroup(l,c.name)}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                      ${this._editingGroupId===l?s`
                            <div style="margin-top:4px;">
                              ${this.extended.map(h=>s`
                                  <span
                                    class="chip-toggle ${(c.memberIds??[]).includes(h.uid)?"on":""}"
                                    @click=${()=>this._toggleSubGroupMember(l,h.uid)}
                                  >
                                    <member-chip
                                      .name=${h.displayName}
                                      .photo=${h.photoURL??""}
                                      .hue=${h.hue}
                                      size="20"
                                    ></member-chip>
                                    ${h.displayName}
                                  </span>
                                `)}
                              ${this.extended.length===0?s`<span style="color:var(--text-tertiary);font-size:13px;">
                                    Invite extended family first, then group them here.
                                  </span>`:""}
                            </div>
                          `:(c.memberIds??[]).length>0?s`<div style="margin-top:4px;">
                            ${(c.memberIds??[]).map(h=>{const p=this.extended.find(u=>u.uid===h);return p?s`<span class="chip-toggle on" style="cursor:default;">
                                <member-chip
                                  .name=${p.displayName}
                                  .photo=${p.photoURL??""}
                                  .hue=${p.hue}
                                  size="20"
                                ></member-chip>
                                ${p.displayName}
                              </span>`:""})}
                          </div>`:s`<div style="color:var(--text-tertiary);font-size:12.5px;margin-top:4px;">
                            No members yet — tap ✎ to add.
                          </div>`}
                    </div>
                  `)}
                <div class="add-group-row">
                  <input
                    class="new-group-input"
                    type="text"
                    placeholder="New sub-group (e.g. Grandparents, In-laws)"
                    .value=${this._newGroupName}
                    @input=${l=>this._newGroupName=l.target.value}
                    @keydown=${l=>{l.key==="Enter"&&this._createSubGroup()}}
                  />
                  <glass-button
                    variant="primary"
                    ?disabled=${this._busy||!this._newGroupName.trim()}
                    @click=${this._createSubGroup}
                  >
                    Create
                  </glass-button>
                </div>
              `:""}

          <h3>Cairn invite code</h3>
          ${e&&!i?s`
                <div class="invite-box">
                  <div class="invite-code">${e}</div>
                  <div class="invite-meta">${this._expiryText(t)} · share this code with extended family</div>
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
              `:s`
                <div class="invite-empty">
                  ${i?"Your invite code has expired. Generate a new one to invite extended family.":"No invite code yet. Generate one to share Cairn with extended family."}
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
    `}}f(Ee,"properties",{open:{type:Boolean,reflect:!0},family:{type:Object},immediate:{type:Array},extended:{type:Array},_busy:{state:!0},_newGroupName:{state:!0},_editingGroupId:{state:!0}}),f(Ee,"styles",E`
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
  `);customElements.define("manage-members-modal",Ee);function Yt(d,e){const t=[];if(t.push(d.title||"Cairn activity"),d.location&&t.push(d.location),d.start&&d.end){const r=C(d.start),a=C(d.end),n=r.toLocaleString("en-GB",{day:"numeric",month:"short"}),o=a.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});t.push(d.start===d.end?o:`${n} – ${o}`)}if((d.lodgingHost||d.lodgingTitle)&&t.push(`Lodging: ${[d.lodgingHost,d.lodgingTitle].filter(Boolean).join(" — ")}`),d.flightNumber||d.flightAirline||d.flightDepartAirport){const r=[],a=[d.flightAirline,d.flightNumber].filter(Boolean).join(" ");if(a&&r.push(a),d.flightDepartAirport&&d.flightArriveAirport&&r.push(`${d.flightDepartAirport.toUpperCase()} → ${d.flightArriveAirport.toUpperCase()}`),d.flightDepartTime){const n=new Date(d.flightDepartTime);Number.isNaN(n.getTime())||r.push(`Depart: ${n.toLocaleString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}`)}r.length&&t.push(`Flight: ${r.join(" · ")}`)}const i=(d.attendees??[]).map(r=>{var a;return(a=e.get(r))==null?void 0:a.displayName}).filter(Boolean);return i.length&&t.push(`With: ${i.join(", ")}`),d.notes&&t.push("",d.notes),t.push("","Shared from Portal · pebblepath.ai/portal"),t.join(`
`)}class Se extends D{constructor(){super(),this.trip=null,this.members=[],this._resizeObs=null}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<"u"&&(this._resizeObs=new ResizeObserver(()=>this._fitTitle()))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._resizeObs)==null||e.disconnect()}updated(){if(this._resizeObs&&this.renderRoot){const e=this.renderRoot.querySelector("article");e&&!e._observed&&(this._resizeObs.observe(e),e._observed=!0)}this._fitTitle()}_fitTitle(){if(!this.renderRoot)return;const e=this.renderRoot.querySelector("h3");if(!e)return;e.style.fontSize="";let t=19;for(e.style.fontSize=`${t}px`;e.scrollWidth>e.clientWidth+1&&t>13;)t-=.5,e.style.fontSize=`${t}px`}_fmtDates(e,t){const i=C(e),r=C(t);if(!i||!r)return"";const a=i.toLocaleString("en-GB",{month:"short"}),n=r.toLocaleString("en-GB",{month:"short"});return a===n&&i.getFullYear()===r.getFullYear()?`${i.getDate()} – ${r.getDate()} ${a}`:`${i.getDate()} ${a} – ${r.getDate()} ${n}`}async _onShare(e,t,i){i.stopPropagation();const r=Yt(e,t);if(navigator.share)try{await navigator.share({title:`Cairn — ${e.title??"activity"}`,text:r})}catch{}else try{await navigator.clipboard.writeText(r),x("Itinerary copied to clipboard.")}catch{x("Could not copy — try again from a browser tab.")}}render(){const e=this.trip;if(!e)return s``;const t=e.coverImage?`background-image: url(${e.coverImage});`:`background: ${Rt(e)};`,i=e.coverImage?"cover has-image":"cover",r=new Map(this.members.map(l=>[l.uid,l])),a=(e.attendees??[]).map(l=>r.get(l)).filter(Boolean),n=a.slice(0,4),o=Math.max(0,a.length-n.length);return s`
      <article
        tabindex="0"
        aria-label=${e.title}
        @click=${()=>this.dispatchEvent(new CustomEvent("edit-trip",{detail:e,bubbles:!0,composed:!0}))}
        @keydown=${l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.dispatchEvent(new CustomEvent("edit-trip",{detail:e,bubbles:!0,composed:!0})))}}
      >
        <div class="${i}" style=${t}>
          <div class="dates">${this._fmtDates(e.start,e.end)}</div>
        </div>
        <div class="body">
          <h3>${e.title}</h3>
          <div class="location">${e.location||"—"}</div>
          ${e.lodgingUrl||e.lodgingHost?s`<div class="lodging">
                ${e.lodgingHost?s`<span class="pill">${e.lodgingHost}</span>`:""}
                <span class="lodging-text">${e.lodgingTitle||e.lodgingUrl||""}</span>
              </div>`:""}
          ${e.flightNumber||e.flightDepartAirport?s`<div class="flight-info">
                <span class="plane">✈</span>
                <span>${[e.flightAirline,e.flightNumber].filter(Boolean).join(" ")}</span>
                ${e.flightDepartAirport&&e.flightArriveAirport?s`<span class="route">${e.flightDepartAirport.toUpperCase()} → ${e.flightArriveAirport.toUpperCase()}</span>`:""}
              </div>`:""}
          <div class="footer">
            <div class="attendees">
              ${n.map(l=>s`<member-chip
                  .name=${l.displayName}
                  .photo=${l.photoURL??""}
                  .hue=${l.hue}
                  size="28"
                ></member-chip>`)}
              ${o>0?s`<span class="more">+${o}</span>`:""}
            </div>
            <button
              class="share-btn"
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
      </article>
    `}}f(Se,"properties",{trip:{type:Object},members:{type:Array}}),f(Se,"styles",E`
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
      color: var(--text-primary);
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
    .share-btn {
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
      transition: color 200ms ease, border-color 200ms ease, background 200ms ease;
    }
    .share-btn:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
      background: rgba(255, 248, 235, 0.1);
    }
    .share-btn svg {
      width: 15px;
      height: 15px;
    }
  `);customElements.define("trip-card",Se);class Fe extends D{constructor(){super(),this.open=!1,this.trips=[],this.members=[]}_onCancel(){this.dispatchEvent(new Event("cancel"))}_groupByYear(e){const t=[...e].sort((a,n)=>String(a.start).localeCompare(String(n.start))),i=new Date;i.setHours(0,0,0,0);const r=new Map;for(const a of t){if(!a.start)continue;const n=C(a.start),o=C(a.end);if(!n)continue;const l=n.getFullYear();r.has(l)||r.set(l,[]);const c=o?o<i:!1;r.get(l).push({trip:a,isPast:c})}return r}render(){var r;if(!this.open)return s``;const e=this._groupByYear(this.trips??[]),t=((r=this.trips)==null?void 0:r.length)??0,i=new Date().getFullYear();return s`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>All trips<span class="count">${t} ${t===1?"trip":"trips"}</span></h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>
          ${t===0?s`<div class="empty">
                No trips for this circle yet.<br />
                Close this and tap <strong>+ New trip</strong> to add one.
              </div>`:Array.from(e.entries()).map(([a,n])=>s`
                  <div class="year ${a===i?"current":""}">
                    ${a}
                  </div>
                  <div class="grid">
                    ${n.map(({trip:o,isPast:l})=>s`
                        <div class=${l?"past":""}>
                          <trip-card .trip=${o} .members=${this.members}></trip-card>
                        </div>
                      `)}
                  </div>
                `)}
        </glass-panel>
      </div>
    `}}f(Fe,"properties",{open:{type:Boolean,reflect:!0},trips:{type:Array},members:{type:Array}}),f(Fe,"styles",E`
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
  `);customElements.define("all-trips-modal",Fe);class Ie extends D{constructor(){super(),this.open=!1,this._events=[],this._selected=new Set,this._loading=!1,this._error="",this._importing=!1,this._started=!1}willUpdate(e){e.has("open")&&this.open&&(this._started=!1,this._error="")}_start(){this._loading||(this._started=!0,this._load())}async _load(){var e,t,i,r,a,n;this._loading=!0,this._error="";try{const o=await st(),l=await Gt(o,90),c=new Set((k.state.trips??[]).filter(p=>p.gcalEventId).map(p=>p.gcalEventId));this._events=l.map(p=>({...p,_alreadyImported:c.has(p.id)}));const h=new Set;for(const p of this._events){if(p._alreadyImported)continue;const u=((e=p.start)==null?void 0:e.date)??((i=(t=p.start)==null?void 0:t.dateTime)==null?void 0:i.slice(0,10)),_=((r=p.end)==null?void 0:r.date)??((n=(a=p.end)==null?void 0:a.dateTime)==null?void 0:n.slice(0,10));u&&_&&_!==u&&h.add(p.id)}this._selected=h}catch(o){console.error(o),this._error=(o==null?void 0:o.message)??"Could not load calendar events."}finally{this._loading=!1}}_toggle(e){const t=new Set(this._selected);t.has(e)?t.delete(e):t.add(e),this._selected=t}_toggleAll(){const e=this._events.filter(t=>!t._alreadyImported);this._selected.size===e.length?this._selected=new Set:this._selected=new Set(e.map(t=>t.id))}async _import(){var a;if(this._importing||this._selected.size===0)return;this._importing=!0;const e=(a=w==null?void 0:w.currentUser)==null?void 0:a.uid,t=this._events.filter(n=>this._selected.has(n.id));let i=0,r=0;for(const n of t){const o=Bt(n,e);try{await k.saveTrip(o),i++}catch(l){console.error("Import failed for event",n.id,l),r++}}this._importing=!1,r===0?x(`Imported ${i} ${i===1?"activity":"activities"}.`):x(`Imported ${i}, ${r} failed.`,{duration:5e3}),this._events=[],this._selected=new Set,this.dispatchEvent(new Event("cancel"))}_onCancel(){this.dispatchEvent(new Event("cancel"))}_fmtRange(e){var h,p,u,_,b,g,m,$;const t=((h=e.start)==null?void 0:h.date)??((u=(p=e.start)==null?void 0:p.dateTime)==null?void 0:u.slice(0,10)),i=((_=e.end)==null?void 0:_.date)??((g=(b=e.end)==null?void 0:b.dateTime)==null?void 0:g.slice(0,10));if(!t)return"";const r=new Date(t);if(!i||i===t)return r.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});let a=new Date(i);(m=e.start)!=null&&m.date&&(($=e.end)!=null&&$.date)&&a.setDate(a.getDate()-1);const n=r.getMonth()===a.getMonth()&&r.getFullYear()===a.getFullYear(),o=r.getFullYear()===a.getFullYear();if(n)return`${r.getDate()}–${a.getDate()} ${r.toLocaleString("en-GB",{month:"short",year:"numeric"})}`;const l=r.toLocaleString("en-GB",{day:"numeric",month:"short"}),c=a.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});return o?`${l} – ${c}`:`${r.toLocaleDateString()} – ${a.toLocaleDateString()}`}render(){if(!this.open)return s``;const e=this._events.filter(i=>!i._alreadyImported),t=e.length>0&&this._selected.size===e.length;return s`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Import from Google Calendar</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>
          <p class="lede">
            Looking at your <strong>primary Google Calendar</strong> for the next 90 days.
            Tick the events you want as Cairn activities — the rest stay where they are.
          </p>

          ${this._started?this._loading?s`<div class="loading">Loading your calendar…</div>`:this._error?s`
                <div class="error">${this._error}</div>
                <div class="intro-actions">
                  <glass-button variant="ghost" @click=${this._onCancel}>
                    Close
                  </glass-button>
                  <glass-button variant="primary" @click=${this._start}>
                    Try again
                  </glass-button>
                </div>
              `:this._events.length===0?s`<div class="empty">No events found in the next 90 days.</div>`:s`
                <div class="list">
                  ${this._events.map(i=>s`
                      <div
                        class="row ${i._alreadyImported?"disabled":this._selected.has(i.id)?"on":""}"
                        @click=${()=>!i._alreadyImported&&this._toggle(i.id)}
                      >
                        <div class="checkbox"></div>
                        <div class="body">
                          <div class="title">${i.summary||"(untitled)"}</div>
                          <div class="meta">
                            <span>${this._fmtRange(i)}</span>
                            ${i.location?s`<span>· ${i.location}</span>`:""}
                          </div>
                        </div>
                        ${i._alreadyImported?s`<span class="badge">In Cairn</span>`:""}
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
              `:s`
                <div class="intro">
                  <p class="intro-lede">
                    We'll pull the next <strong>90 days</strong> from your
                    primary Google Calendar so you can pick which events
                    become Cairn activities. Read-only — Cairn never edits
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
    `}}f(Ie,"properties",{open:{type:Boolean,reflect:!0},_events:{state:!0},_selected:{state:!0},_loading:{state:!0},_error:{state:!0},_importing:{state:!0},_started:{state:!0}}),f(Ie,"styles",E`
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
  `);customElements.define("import-calendar-modal",Ie);class Ne extends D{constructor(){super(),this.open=!1,this.user=null,this.pebbleUser=null,this._name="",this._savingName=!1,this._uploadingPhoto=!1}willUpdate(e){var t;e.has("open")&&this.open&&(this._name=((t=this.user)==null?void 0:t.displayName)??"")}_onCancel(){this.dispatchEvent(new Event("cancel"))}async _saveName(){var i,r;const e=this._name.trim();if(!e||e===(((i=this.user)==null?void 0:i.displayName)??""))return;const t=(r=w==null?void 0:w.currentUser)==null?void 0:r.uid;if(!(!t||!v)){this._savingName=!0;try{await N(A(v,"users",t),{displayName:e,updatedAt:z()});const a=k.familyId;if(a)try{await N(A(v,"families",a),{[`memberProfiles.${t}.displayName`]:e,[`memberProfiles.${t}.updatedAt`]:z(),updatedAt:z()})}catch(n){console.warn("memberProfiles fan-out failed:",n)}x("Display name updated.")}catch(a){console.error(a),x(`Couldn't save: ${a.code??a.message}`,{duration:5e3})}finally{this._savingName=!1}}}async _signOut(){confirm("Sign out of Cairn?")&&(this.dispatchEvent(new Event("cancel")),await dt())}_triggerPhotoPicker(){var e;(e=this.renderRoot.querySelector("#photo-file"))==null||e.click()}async _onPhotoChosen(e){var a,n;const t=(a=e.target.files)==null?void 0:a[0];if(e.target.value="",!t)return;if(!t.type.startsWith("image/")){x("Pick an image file (JPG, PNG, etc.).");return}if(t.size>5*1024*1024){x("Photo is too big — keep it under 5 MB.");return}const i=(n=w==null?void 0:w.currentUser)==null?void 0:n.uid,r=k.familyId;if(!i||!r||!we){x("Can't upload yet — you need to be in a family first.");return}this._uploadingPhoto=!0;try{const o=tt(we,`families/${r}/avatars/users/${i}`);await it(o,t,{contentType:t.type});const l=await rt(o);await N(A(v,"users",i),{profilePhotoURL:l,updatedAt:z()});try{await N(A(v,"families",r),{[`memberProfiles.${i}.profilePhotoURL`]:l,[`memberProfiles.${i}.updatedAt`]:z(),updatedAt:z()})}catch(c){console.warn("memberProfiles photo fan-out failed:",c)}x("Photo updated.")}catch(o){console.error("Photo upload failed",o),x(`Upload failed: ${o.code??o.message}`,{duration:5e3})}finally{this._uploadingPhoto=!1}}render(){if(!this.open)return s``;const e=this.user,t=this._name.trim()&&this._name.trim()!==((e==null?void 0:e.displayName)??"");return s`
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
            ${t?s`<button
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
    `}}f(Ne,"properties",{open:{type:Boolean,reflect:!0},user:{type:Object},pebbleUser:{type:Object},_name:{state:!0},_savingName:{state:!0},_uploadingPhoto:{state:!0}}),f(Ne,"styles",E`
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
  `);customElements.define("profile-sheet",Ne);const ae=class ae extends D{constructor(){super(),this.open=!1}static get OPTIONS(){return[{type:"activity",tone:"sage",icon:s`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M15.8 7.4 21.8 19.5a1.1 1.1 0 0 1-.98 1.6H10.2z"/>
          <path d="M9 4.6 16.5 19.5a1.1 1.1 0 0 1-.98 1.6H3.46a1.1 1.1 0 0 1-.98-1.6z"/>
        </svg>`,label:"Group activity",desc:"Weekend plans, outings, day trips — no lodging or flights needed."},{type:"trip",tone:"tide",icon:s`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.62 3.05a1 1 0 0 0-1.12-.18L3.7 10.3c-.86.38-.83 1.62.05 1.95l6.06 2.27 2.27 6.06c.33.88 1.57.9 1.95.05L21.8 4.17a1 1 0 0 0-.18-1.12zM10.5 12.7l6.4-5.7-4.9 6.6-.1.1z"/>
        </svg>`,label:"Family trip",desc:"Multi-day travel with lodging, flight info, attendees."},{type:"event",tone:"amber",icon:s`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M11.1 6.7C10.4 5 9.2 3.7 7.8 3.3c-1-.3-1.9.1-2.2.9-.4 1 .2 2.1 1 2.7 1 .75 2.5 1.05 4.5 1.05z"/>
          <path d="M12.9 6.7c.7-1.7 1.9-3 3.3-3.4 1-.3 1.9.1 2.2.9.4 1-.2 2.1-1 2.7-1 .75-2.5 1.05-4.5 1.05z"/>
          <rect x="3" y="8" width="8.1" height="3.5" rx="1"/>
          <rect x="12.9" y="8" width="8.1" height="3.5" rx="1"/>
          <rect x="4.1" y="11.7" width="7" height="9.1" rx="1.4"/>
          <rect x="12.9" y="11.7" width="7" height="9.1" rx="1.4"/>
        </svg>`,label:"Birthday or anniversary",desc:"Recurring celebration on a specific date."},{type:"import",tone:"tide",mobileOnly:!0,icon:s`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
          <path d="M9 14l3 3 4-5" />
        </svg>`,label:"Import from Calendar",desc:"Pull recent events from your Google Calendar."}]}_pick(e){this.dispatchEvent(new CustomEvent("pick",{detail:{type:e}}))}_cancel(){this.dispatchEvent(new Event("cancel"))}render(){return this.open?s`
      <div class="backdrop" @click=${this._cancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>What are you adding?</h2>
            <button class="close" @click=${this._cancel} aria-label="Close">×</button>
          </div>
          <div class="options">
            ${ae.OPTIONS.map(e=>s`
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
    `:s``}};f(ae,"properties",{open:{type:Boolean,reflect:!0}}),f(ae,"styles",E`
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
  `);let Te=ae;customElements.define("activity-type-picker",Te);class Pe extends D{constructor(){super(),this.open=!1,this.floating=!1,this.family=null,this.trips=[],this._messages=[],this._input="",this._loading=!1,this._error="",this._followUps=[]}willUpdate(e){var t;e.has("_messages")&&(this.floating=(((t=this._messages)==null?void 0:t.length)??0)>0)}_onCancel(){this.dispatchEvent(new Event("cancel"))}_suggestions(){const e=[],t=(this.trips??[]).filter(i=>i.start&&new Date(i.start)>=new Date).sort((i,r)=>String(i.start).localeCompare(String(r.start)))[0];return t&&(e.push(`What should we do in ${t.location||t.title}?`),e.push(`What should we pack for ${t.title}?`)),e.push("Plan a family activity for this weekend"),e.push("Gift ideas for an upcoming birthday"),e.slice(0,4)}async _send(e){const t=(e??this._input).trim();if(!(!t||this._loading)){this._error="",this._input="",this._followUps=[],this._messages=[...this._messages,{role:"user",content:t}],this._loading=!0,this.updateComplete.then(()=>this._scrollToBottom());try{const i=this._messages.slice(0,-1).map(a=>({role:a.role,content:a.content})),r=await k.askPebble(t,i);this._messages=[...this._messages,{role:"assistant",content:r.answer}],this._followUps=Array.isArray(r.followUps)?r.followUps:[]}catch(i){console.error(i),(i==null?void 0:i.code)==="functions/unauthenticated"?this._error="Pebble needs you to be signed in.":(i==null?void 0:i.code)==="functions/permission-denied"?this._error="You're not in this family yet.":(i==null?void 0:i.code)==="functions/not-found"||(i==null?void 0:i.code)==="functions/internal"?this._error="Pebble isn't available right now — the Cloud Function may not be deployed yet.":this._error=(i==null?void 0:i.message)??"Pebble could not answer right now."}finally{this._loading=!1,this.updateComplete.then(()=>this._scrollToBottom())}}}_scrollToBottom(){const e=this.renderRoot.querySelector(".thread");e&&(e.scrollTop=e.scrollHeight)}_renderPebbleIcon(){return s`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
      </svg>
    `}render(){if(!this.open)return s``;const e=this._suggestions();return s`
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
            ${this._messages.length===0?s`
                  <div class="empty">
                    <div class="lede">Hi — what's on your mind?</div>
                    <div class="sub">
                      I know your upcoming trips and family celebrations.
                      Ask about activities, packing, gift ideas, restaurants
                      — anything family-shaped.
                    </div>
                    <div class="suggestions">
                      ${e.map(t=>s`
                          <button class="suggestion" @click=${()=>this._send(t)}>
                            ${t}
                          </button>
                        `)}
                    </div>
                  </div>
                `:s`
                  ${this._messages.map(t=>s`<div class="bubble ${t.role}">${t.content}</div>`)}
                  ${this._loading?s`<div class="typing"><span></span><span></span><span></span></div>`:this._followUps.length>0?s`
                        <div class="follow-ups">
                          ${this._followUps.map(t=>s`
                              <button class="follow-up" @click=${()=>this._send(t)}>
                                ${t}
                              </button>
                            `)}
                        </div>
                      `:""}
                `}
          </div>

          ${this._error?s`<div class="error">${this._error}</div>`:""}

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
    `}}f(Pe,"properties",{open:{type:Boolean,reflect:!0},floating:{type:Boolean,reflect:!0},family:{type:Object},trips:{type:Array},_messages:{state:!0},_input:{state:!0},_loading:{state:!0},_error:{state:!0},_followUps:{state:!0}}),f(Pe,"styles",E`
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
      background: rgba(34, 26, 32, 0.92);
      backdrop-filter: blur(28px) saturate(180%);
      -webkit-backdrop-filter: blur(28px) saturate(180%);
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
  `);customElements.define("pebble-chat",Pe);class ht extends D{render(){return s`
      <img class="icon" src=${"/portal/assets/pebblepath-icon.png"} alt="" aria-hidden="true" />
      <div class="wordmark">PebblePath</div>
      <div class="tagline">your parenting companion</div>
      <a
        class="cta"
        href="https://apps.apple.com/app/pebblepath-ai/"
        target="_blank"
        rel="noopener"
      >
        Get the app on iPhone <span class="arrow">→</span>
      </a>
    `}}f(ht,"styles",E`
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
        rgba(255, 248, 235, 0.18) 50%,
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
      color: rgba(255, 248, 235, 0.94);
      letter-spacing: 0.04em;
      line-height: 1;
      text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
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
  `);customElements.define("discover-pebblepath",ht);class Me extends D{constructor(){super(),this.code="",this._family=null,this._loading=!0,this._joining=!1,this._error=""}willUpdate(e){e.has("code")&&this.code&&this._lookup()}async _lookup(){var e,t;this._loading=!0,this._error="";try{const i=await k.findFamilyByCairnCode(this.code);if(!i)this._error="Invite code not found. Check it was typed correctly.",this._family=null;else{const r=((t=(e=i.cairnInviteCodeExpiresAt)==null?void 0:e.toDate)==null?void 0:t.call(e))??(i.cairnInviteCodeExpiresAt?new Date(i.cairnInviteCodeExpiresAt):null);!r||r<new Date?(this._error="This invite code has expired. Ask the family for a fresh one.",this._family=null):this._family=i}}catch(i){console.error(i),this._error=(i==null?void 0:i.message)??"Couldn't look up the invite."}finally{this._loading=!1}}async _join(){var e;if(!this._joining){this._joining=!0,this._error="";try{const t=await k.joinFamilyAsCairn(this.code);x(`Welcome to ${((e=this._family)==null?void 0:e.name)??"the family"}.`),this.dispatchEvent(new CustomEvent("joined",{detail:{familyId:t}}))}catch(t){console.error(t),this._error=(t==null?void 0:t.message)??"Could not join."}finally{this._joining=!1}}}_cancel(){this.dispatchEvent(new Event("cancel"))}_inviterFromFamily(e){var r;if(!e)return null;const t=(r=e.memberProfiles)==null?void 0:r[e.createdBy];if(!t)return null;const i=t.profilePhotoURL;return{displayName:t.displayName??"A family member",photoURL:typeof i=="string"&&/^https?:\/\//i.test(i)?i:null}}render(){var r,a,n;const e=this._inviterFromFamily(this._family),t=(((r=this._family)==null?void 0:r.cairnMemberIds)??((a=this._family)==null?void 0:a.memberIds)??[]).length,i=(((n=this._family)==null?void 0:n.memberIds)??[]).length;return s`
      <div class="wrap">
        <div class="mark">
          <img
            class="brand-icon"
            src=${"/portal/assets/cairn-icon.png"}
            srcset=${"/portal/assets/cairn-icon.png 1x, /portal/assets/cairn-icon-2x.png 2x"}
            alt="Cairn"
            width="44"
            height="44"
            style="border-radius:11px;display:block;box-shadow:0 4px 16px rgba(0,0,0,0.25);"
          />
          <div class="mark-name">Portal</div>
        </div>
        <glass-panel padding="lg" variant="strong" lifted>
          ${this._loading?s`<div class="loading">Looking up <code>${this.code}</code>…</div>`:this._family?s`
                <h1>You're invited.</h1>
                <div class="preview">
                  ${e?s`
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
                    ${t} ${t===1?"person":"people"} on Cairn${i&&i<t?` · ${i} on PebblePath`:""}
                  </div>
                </div>
                <div class="what-you-get">
                  <strong>You'll see</strong>
                  shared trips, family birthdays, and anniversaries.
                  You won't see PebblePath's child-development data — that stays private to the immediate family.
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
                ${this._error?s`<div class="error">${this._error}</div>`:""}
              `:s`
                <h1>Hmm.</h1>
                <p style="text-align:center;color:var(--text-secondary);margin:0 0 22px;line-height:1.55;">
                  ${this._error||"This invite link doesn't look right."}
                </p>
                <div class="actions">
                  <glass-button variant="primary" size="lg" full @click=${this._cancel}>
                    Continue to Cairn
                  </glass-button>
                </div>
              `}
        </glass-panel>
      </div>
    `}}f(Me,"properties",{code:{type:String},_family:{state:!0},_loading:{state:!0},_joining:{state:!0},_error:{state:!0}}),f(Me,"styles",E`
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
      font-family: var(--font-display);
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
      font-family: var(--font-display);
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
  `);customElements.define("join-family-screen",Me);class Oe extends D{constructor(){super(),this.error="",this.busy=!1,this.joinCode="",this._codeInputOpen=!1,this._code=""}async _handleSignIn(){if(this.busy)return;const e=(this._code??"").trim().toUpperCase();if(this._codeInputOpen&&e){const t=e.startsWith("CAIRN-")?e:`CAIRN-${e.replace(/^CAIRN-?/i,"")}`;try{localStorage.setItem("cairn:pendingJoinCode",t)}catch{}}this.busy=!0,this.error="";try{await ie()}catch(t){this.error=(t==null?void 0:t.message)??"Sign-in failed."}finally{this.busy=!1}}_toggleCode(){this._codeInputOpen=!this._codeInputOpen,this._codeInputOpen&&requestAnimationFrame(()=>{var e;(e=this.renderRoot.querySelector(".code-input"))==null||e.focus()})}_renderGoogleIcon(){return s`
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
    `}render(){return s`
      <div class="wrap">
        <div class="brand">
          <div class="mark-row">
            <img
              class="brand-icon"
              src=${"/portal/assets/cairn-icon.png"}
              srcset=${"/portal/assets/cairn-icon.png 1x, /portal/assets/cairn-icon-2x.png 2x"}
              alt="Cairn"
              width="56"
              height="56"
            />
            <div class="mark-name">Portal</div>
          </div>
          <div class="companion">PebblePath companion</div>
        </div>
        <glass-panel padding="lg" lifted variant="strong">
          ${this.joinCode?s`<div class="invite-banner">
                <strong>You've been invited to a family on Cairn.</strong><br />
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
              ?disabled=${this.busy||!T}
              @click=${this._handleSignIn}
            >
              ${this._renderGoogleIcon()}
              ${this.busy?"Signing in…":this._codeInputOpen&&this._code.trim()?"Continue with Google & join":"Continue with Google"}
            </button>
          </div>
          ${this.joinCode?"":s`<div class="have-code">
                <button type="button" @click=${this._toggleCode}>
                  ${this._codeInputOpen?"× Cancel code":"I have a family code"}
                </button>
              </div>`}
          ${this._codeInputOpen?s`
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
          ${T?"":s`<div class="config-hint">
                Sign-in is awaiting your Firebase config — copy
                <code>.env.example</code> to <code>.env</code> and fill in the web-app
                values from PebblePath's Firebase Console.
              </div>`}
          ${this.error?s`<div class="error">${this.error}</div>`:""}
        </glass-panel>
        <div class="footnote">Beta Version</div>
      </div>
    `}}f(Oe,"properties",{error:{state:!0},busy:{state:!0},joinCode:{type:String},_codeInputOpen:{state:!0},_code:{state:!0}}),f(Oe,"styles",E`
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
  `);customElements.define("sign-in-screen",Oe);const Ht="cairn:pendingCreateFamily",Jt="cairn:pendingJoinCode",qe="cairn:pendingLoginIntent";class je extends D{constructor(){super(),this.error="",this.busy=!1,this.joinCode="",this._step="choose",this._authMode=null,this._email="",this._password="",this._confirmPassword="",this._displayName="",this._familyName="",this._code="",this._resetSent=!1}willUpdate(e){e.has("joinCode")&&this.joinCode&&this._step==="choose"&&(this._code=this.joinCode,this._step="join")}_iconLogin(){return s`<svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zM20 19h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"/>
    </svg>`}_iconCreate(){return s`<svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4zm0 4.7l1.6 3.2 3.6.5-2.6 2.5.6 3.5L12 14.7l-3.2 1.7.6-3.5-2.6-2.5 3.6-.5L12 6.7z"/>
    </svg>`}_iconJoin(){return s`<svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>`}_iconGoogle(){return s`<svg viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.65 4.65-6.08 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.05 6.05 29.27 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20c0-1.34-.14-2.65-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.31 14.69l6.57 4.82C14.66 16.06 19.04 13 24 13c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.05 6.05 29.27 4 24 4 16.32 4 9.66 8.34 6.31 14.69z"/>
      <path fill="#4CAF50" d="M24 44c5.16 0 9.86-1.98 13.41-5.19l-6.19-5.24C29.21 35.09 26.71 36 24 36c-5.2 0-9.62-3.33-11.28-7.97l-6.51 5.02C9.5 39.56 16.23 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.79 2.24-2.23 4.16-4.09 5.57l6.19 5.24C39.5 36.46 44 30.5 44 24c0-1.34-.14-2.65-.4-3.5z"/>
    </svg>`}_iconApple(){return s`<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M17.05 12.5c0-2.92 2.4-4.32 2.5-4.4-1.36-2-3.48-2.27-4.24-2.3-1.8-.18-3.52 1.06-4.43 1.06-.92 0-2.33-1.03-3.84-1-1.97.03-3.8 1.15-4.82 2.92-2.06 3.57-.52 8.85 1.48 11.76.98 1.42 2.14 3.02 3.66 2.97 1.47-.06 2.03-.95 3.81-.95 1.78 0 2.28.95 3.84.92 1.58-.03 2.59-1.45 3.55-2.88 1.12-1.65 1.58-3.26 1.6-3.34-.04-.02-3.07-1.18-3.11-4.66zm-2.94-8.55c.81-.99 1.36-2.36 1.21-3.73-1.17.05-2.59.78-3.42 1.76-.75.87-1.4 2.27-1.23 3.6 1.3.1 2.64-.66 3.44-1.63z"/>
    </svg>`}_go(e){this._step=e,this.error="",this._authMode=null,this._resetSent=!1;try{e==="login"?localStorage.setItem(qe,"1"):localStorage.removeItem(qe)}catch{}}async _runAuth(e,{onSuccess:t}={}){if(!this.busy){this.busy=!0,this.error="";try{const i=await e();t==null||t(i)}catch(i){console.error(i),this.error=this._humanizeAuthError(i)}finally{this.busy=!1}}}_humanizeAuthError(e){const t=(e==null?void 0:e.code)??"";return t==="auth/invalid-credential"||t==="auth/wrong-password"?"That email and password don't match. Try again or reset your password.":t==="auth/user-not-found"?"No account with that email yet.":t==="auth/email-already-in-use"?"An account already exists for that email — try signing in instead.":t==="auth/invalid-email"?"That email doesn't look right.":t==="auth/weak-password"?"Pick a password with at least 6 characters.":t==="auth/popup-closed-by-user"?"Sign-in cancelled. Try again when you're ready.":t==="auth/popup-blocked"?"Your browser blocked the sign-in popup. Allow popups and retry.":(e==null?void 0:e.message)??"Sign-in failed. Try again."}_stashCreateIntent(){const e=(this._familyName??"").trim();if(!e)return!1;try{localStorage.setItem(Ht,e)}catch{}return!0}_stashJoinIntent(){const e=(this._code??"").trim().toUpperCase();if(!e)return!1;const t=e.startsWith("CAIRN-")?e:`CAIRN-${e.replace(/^CAIRN-?/i,"")}`;try{localStorage.setItem(Jt,t)}catch{}return!0}render(){return s`
      <div class="wrap">
        <div class="brand">
          <div class="mark-row">
            <img
              class="brand-icon"
              src=${"/portal/assets/cairn-icon.png"}
              srcset=${"/portal/assets/cairn-icon.png 1x, /portal/assets/cairn-icon-2x.png 2x"}
              alt="Cairn"
              width="56"
              height="56"
            />
            <div class="mark-name">Portal</div>
          </div>
          <div class="companion">PebblePath companion</div>
        </div>
        <glass-panel padding="lg" lifted variant="strong">
          ${this._step==="choose"?this._renderChoose():""}
          ${this._step==="login"?this._renderLogin():""}
          ${this._step==="create"?this._renderCreate():""}
          ${this._step==="join"?this._renderJoin():""}
          ${T?"":this._renderConfigHint()}
        </glass-panel>
        <div class="footnote">Beta Version</div>
      </div>
    `}_renderChoose(){return s`
      <h1>Family Activity Portal</h1>
      <p class="lede">Visiting or Returning from PebblePath?</p>
      <div class="cards">
        <button class="card" @click=${()=>this._go("login")}>
          <span class="icon-cell tide" aria-hidden="true">${this._iconLogin()}</span>
          <span>
            <div class="label">Sign in</div>
            <div class="desc">For accounts already connected to a family.</div>
          </span>
        </button>
        <button class="card" @click=${()=>this._go("join")}>
          <span class="icon-cell amber" aria-hidden="true">${this._iconJoin()}</span>
          <span>
            <div class="label">Join an existing family</div>
            <div class="desc">Paste your CAIRN-XXXX invite code.</div>
          </span>
        </button>
        <button class="card" @click=${()=>this._go("create")}>
          <span class="icon-cell sage" aria-hidden="true">${this._iconCreate()}</span>
          <span>
            <div class="label">Create my own account</div>
            <div class="desc">Start a new family planner on Cairn.</div>
          </span>
        </button>
      </div>
    `}_renderProviders({google:e,apple:t,busyText:i}){return s`
      <div class="providers">
        <button
          class="provider-btn"
          ?disabled=${this.busy||!T}
          @click=${e}
        >
          ${this._iconGoogle()}
          ${this.busy?i:"Continue with Google"}
        </button>
        <button
          class="provider-btn apple"
          ?disabled=${this.busy||!T}
          @click=${t}
        >
          ${this._iconApple()}
          ${this.busy?i:"Continue with Apple"}
        </button>
      </div>
    `}_renderLogin(){const e=this._authMode==="signup";return s`
      <button class="back" @click=${()=>this._go("choose")}>‹ Back</button>
      <h1 style="margin-top:6px;">${e?"Create your account":"Welcome back"}</h1>
      <p class="lede">
        ${e?"Pick the method you want for sign-in next time.":"Sign in with the same method you used on PebblePath."}
      </p>
      ${this._renderProviders({google:()=>this._runAuth(()=>ie()),apple:()=>this._runAuth(()=>he()),busyText:"Signing in…"})}
      <div class="or">or use email</div>
      <div class="step">
        ${e?s`
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
            `:""}
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
            autocomplete=${e?"new-password":"current-password"}
            @keydown=${t=>{t.key==="Enter"&&!this.busy&&(t.preventDefault(),this._submitEmailAuth())}}
          />
        </div>
        ${this.error?s`<div class="error">${this.error}</div>`:""}
        ${this._resetSent?s`<div class="success">Check your inbox for the reset link.</div>`:""}
        <div class="actions">
          <glass-button
            variant="primary"
            ?disabled=${this.busy}
            @click=${this._submitEmailAuth}
          >
            ${this.busy?e?"Creating…":"Signing in…":e?"Create account":"Sign in"}
          </glass-button>
        </div>
        <div class="toggle-row">
          ${e?s`
                <span>Already have an account?</span>
                <button @click=${()=>{this._authMode=null,this.error=""}}>
                  Sign in
                </button>
              `:s`
                <button @click=${this._sendReset}>Forgot password?</button>
                <span>·</span>
                <button @click=${()=>{this._authMode="signup",this.error=""}}>
                  Create account
                </button>
              `}
        </div>
      </div>
    `}_submitEmailAuth(){const e=this._authMode==="signup",t=(this._email??"").trim(),i=this._password??"";if(!t||!i){this.error="Email and password are required.";return}e?this._runAuth(()=>nt(t,i,(this._displayName??"").trim())):this._runAuth(()=>ot(t,i))}async _sendReset(){const e=(this._email??"").trim();if(!e){this.error="Enter your email first, then tap Forgot password.";return}this.busy=!0,this.error="";try{await lt(e),this._resetSent=!0}catch(t){this.error=this._humanizeAuthError(t)}finally{this.busy=!1}}_renderCreate(){return s`
      <button class="back" @click=${()=>this._go("choose")}>‹ Back</button>
      <h1 style="margin-top:6px;">Start a new family</h1>
      <p class="lede">
        Name your family — you can rename it later and invite others
        as soon as you're in.
      </p>
      <div class="step">
        <div>
          <label>Family name</label>
          <input
            type="text"
            placeholder="The Paris Family"
            .value=${this._familyName}
            @input=${e=>this._familyName=e.target.value}
            maxlength="64"
          />
        </div>
        ${this.error?s`<div class="error">${this.error}</div>`:""}
        <p style="font-size:12.5px;color:var(--teal-pebble);opacity:0.82;margin:6px 0 0;">
          Continue with a sign-in method — we'll create the family right
          after.
        </p>
        ${this._renderProviders({google:()=>this._continueCreate(()=>ie()),apple:()=>this._continueCreate(()=>he()),busyText:"Creating…"})}
      </div>
    `}_continueCreate(e){if(!this._stashCreateIntent()){this.error="Give your family a name first.";return}this._runAuth(e)}_renderJoin(){return s`
      <button class="back" @click=${()=>this._go("choose")}>‹ Back</button>
      <h1 style="margin-top:6px;">Join a family</h1>
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
            @input=${e=>this._code=e.target.value}
            autocapitalize="characters"
            autocomplete="off"
            spellcheck="false"
            maxlength="14"
          />
        </div>
        ${this.error?s`<div class="error">${this.error}</div>`:""}
        ${this._renderProviders({google:()=>this._continueJoin(()=>ie()),apple:()=>this._continueJoin(()=>he()),busyText:"Joining…"})}
      </div>
    `}_continueJoin(e){if(!this._stashJoinIntent()){this.error="Paste your CAIRN-XXXX code first.";return}this._runAuth(e)}_renderConfigHint(){return s`
      <div class="config-hint">
        Sign-in is awaiting your Firebase config — copy
        <code>.env.example</code> to <code>.env</code> and fill in the web-app
        values from PebblePath's Firebase Console.
      </div>
    `}}f(je,"properties",{error:{state:!0},busy:{state:!0},joinCode:{type:String},_step:{state:!0},_authMode:{state:!0},_email:{state:!0},_password:{state:!0},_confirmPassword:{state:!0},_displayName:{state:!0},_familyName:{state:!0},_code:{state:!0},_resetSent:{state:!0}}),f(je,"styles",E`
    * { box-sizing: border-box; }
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
      /* +50% backdrop blur for the pre-login box only. --glass-blur is
         a CSS custom property so it cascades through the nested
         glass-panel's shadow root; overriding it here scopes the
         heavier frost to the register screen without touching the
         dashboard's 24px default. */
      --glass-blur: 36px;
    }
    .wrap {
      width: 100%;
      max-width: 480px;
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
      font-weight: 600;
      font-size: 11.5px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--teal-pebble);
    }
    .companion::before,
    .companion::after {
      content: '';
      display: inline-block;
      width: 18px;
      height: 1px;
      background: var(--teal-pebble);
      vertical-align: middle;
      opacity: 0.55;
    }
    .companion::before { margin-right: 10px; }
    .companion::after { margin-left: 10px; }

    h1 {
      margin: 0 0 6px;
      font-family: var(--font-display);
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
      font-family: var(--font-display);
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
      background: transparent;
      border: none;
      color: var(--teal-pebble);
      font: inherit;
      font-size: 13.5px;
      font-weight: 600;
      cursor: pointer;
      padding: 4px 6px;
      align-self: flex-start;
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
      min-height: 44px;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.6);
      border: 1px solid rgba(61, 155, 143, 0.3);
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

    .providers {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .provider-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
      min-height: 44px;
      padding: 0 14px;
      border-radius: var(--radius-pill);
      /* Google brand style: white background, dark text, hairline
         border. Matches the iOS Google sign-in button. */
      border: 1px solid rgba(0, 0, 0, 0.12);
      background: #fff;
      color: #3c4043;
      font: inherit;
      font-size: 14px;
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

    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 3px;
      padding: 0;
    }
    .actions { display: flex; gap: 10px; margin-top: 4px; }
    .actions glass-button { flex: 1; }

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
  `);customElements.define("register-screen",je);const K=class K extends D{constructor(){super(),this.value="family"}_select(e){e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent("circle-change",{detail:{value:e},bubbles:!0,composed:!0})))}render(){return s`
      <div class="track" role="tablist" aria-label="Circle">
        ${K.OPTIONS.map(e=>s`
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
    `}};f(K,"properties",{value:{type:String,reflect:!0}}),f(K,"OPTIONS",[{value:"personal",label:"Just me"},{value:"family",label:"Family"},{value:"extended",label:"Extended"}]),f(K,"styles",E`
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
  `);let Le=K;customElements.define("circle-switcher",Le);class Ge extends D{constructor(){super(),this.event=null,this.members=[]}_icon(e){return e==="birthday"?s`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 14h14v6H5z" />
        <path d="M5 14c0-2 1.5-3 3-3h8c1.5 0 3 1 3 3" />
        <path d="M12 11V7" />
        <path d="M11 5.5c0-.8.5-1.5 1-2 .5.5 1 1.2 1 2 0 .6-.4 1-1 1s-1-.4-1-1z" fill="currentColor" stroke="none" />
      </svg>`:e==="anniversary"?s`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="9" cy="13" r="5" />
        <circle cx="15" cy="13" r="5" />
      </svg>`:s`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>`}_fmtDate(e){const t=C(e)??new Date(e);return{day:t.getDate(),month:t.toLocaleString("en-GB",{month:"short"})}}render(){const e=this.event;if(!e)return s``;const t=this._fmtDate(e.date),i=new Map((this.members??[]).map(a=>[a.uid,a])),r=(e.personIds??[]).map(a=>i.get(a)).filter(Boolean);return s`
      <div
        class="row"
        @click=${()=>this.dispatchEvent(new CustomEvent("edit-event",{detail:e,bubbles:!0,composed:!0}))}
      >
        <div class="icon ${e.type}">${this._icon(e.type)}</div>
        <div class="body">
          <div class="title-row">
            <div class="title">${e.title}</div>
            ${r.length>0?s`<span class="faces">
                  ${r.slice(0,3).map(a=>s`
                      <member-chip
                        .name=${a.displayName}
                        .photo=${a.photoURL??""}
                        .hue=${a.hue}
                        size="22"
                      ></member-chip>
                    `)}
                </span>`:""}
          </div>
          ${e.subtitle?s`<div class="meta">${e.subtitle}</div>`:""}
        </div>
        <div class="date">
          ${t.day}
          <small>${t.month}</small>
        </div>
      </div>
    `}}f(Ge,"properties",{event:{type:Object},members:{type:Array}}),f(Ge,"styles",E`
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
  `);customElements.define("event-row",Ge);const Xt={uid:"preview-user",displayName:"Thomas Paris",email:"thomas@example.com",photoURL:null},Ke=[{uid:"thomas",displayName:"Thomas",circles:["immediate"],hue:198},{uid:"partner",displayName:"Élise",circles:["immediate"],hue:8},{uid:"kid1",displayName:"Oscar",circles:["immediate"],hue:142},{uid:"kid2",displayName:"Mila",circles:["immediate"],hue:44},{uid:"mum",displayName:"Mum",circles:["extended"],hue:320},{uid:"dad",displayName:"Dad",circles:["extended"],hue:28},{uid:"sister",displayName:"Camille",circles:["extended"],hue:280},{uid:"bro-in-law",displayName:"Sam",circles:["extended"],hue:175},{uid:"niece",displayName:"Léa",circles:["extended"],hue:100}],Wt=[{id:"t1",title:"Côte d’Azur, summer",location:"Antibes, France",start:"2026-07-12",end:"2026-07-21",coverGradient:"linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)",lodgingHost:"Airbnb",lodgingTitle:"Villa near Cap d’Antibes",attendees:["thomas","partner","kid1","kid2","mum","dad"],notes:"Mum + Dad arrive day 2. Dinner reservations at La Guérite booked.",visibility:"extended"},{id:"t2",title:"Half-term in the Alps",location:"Chamonix, France",start:"2026-10-24",end:"2026-10-31",coverGradient:"linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)",lodgingHost:"Booking.com",lodgingTitle:"Chalet Les Drus",attendees:["thomas","partner","kid1","kid2"],notes:"Need ski school for the kids — book by September.",visibility:"immediate"},{id:"t3",title:"Camille’s 40th",location:"Lisbon, Portugal",start:"2026-09-05",end:"2026-09-08",coverGradient:"linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)",lodgingHost:"Airbnb",lodgingTitle:"Alfama rooftop apartment",attendees:["thomas","partner","sister","bro-in-law"],notes:"Surprise. Don’t mention to Camille.",visibility:"family"}],Vt=[{id:"e1",type:"birthday",date:"2026-05-24",personIds:["mum"],title:"Mum’s birthday"},{id:"e2",type:"anniversary",date:"2026-05-28",personIds:["mum","dad"],title:"Mum & Dad’s anniversary",subtitle:"38 years"},{id:"e3",type:"birthday",date:"2026-06-11",personIds:["kid1"],title:"Oscar turns 7"},{id:"e4",type:"birthday",date:"2026-06-30",personIds:["niece"],title:"Léa’s birthday"}];class Be extends D{constructor(){super(),this.user=Xt,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this.preview=!1,this.circle="extended",this._formOpen=!1,this._formTrip=null,this._formBusy=!1,this._membersOpen=!1,this._eventFormOpen=!1,this._eventFormEvent=null,this._eventFormBusy=!1,this._allTripsOpen=!1,this._editingFamilyName=!1,this._importOpen=!1,this._profileOpen=!1,this._typePickerOpen=!1,this._formMode="trip",this._pebbleOpen=!1,this._dragOverTarget=null;const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1)}async _saveFamilyName(e){var a,n;const i=(e.target.value??"").trim(),r=((a=this.family)==null?void 0:a.name)??"";if(i&&i!==r&&((n=this.family)!=null&&n.id))try{const{db:o,doc:l,updateDoc:c,serverTimestamp:h}=await at(async()=>{const{db:p,doc:u,updateDoc:_,serverTimestamp:b}=await Promise.resolve().then(()=>Nt);return{db:p,doc:u,updateDoc:_,serverTimestamp:b}},void 0);await c(l(o,"families",this.family.id),{name:i,updatedAt:h()}),x("Family name updated.")}catch(o){console.error("Update family name failed:",o),x(`Couldn't save: ${o.code??o.message}`,{duration:5e3})}this._editingFamilyName=!1}_liveImmediate(){var e;return this.preview||!((e=this.user)!=null&&e.uid)?Ke.filter(t=>t.circles.includes("immediate")):Mt(this.user.uid,this.user,this.pebbleUser,this.family,this.children)}_liveExtended(){var e;return this.preview?Ke.filter(t=>t.circles.includes("extended")):Pt((e=this.user)==null?void 0:e.uid,this.family)}_liveTrips(){return this.preview?Wt:this.trips??[]}_liveEvents(){if(this.preview)return Vt;const e=r=>{const{date:a,yearsElapsed:n}=jt(r);return{...r,date:a?Lt(a):r.date,_yearsElapsed:n,_originalDate:r.date}},t=Ot(this.children).map(e),i=(this.events??[]).map(e);return[...t,...i].sort((r,a)=>String(r.date).localeCompare(String(a.date)))}_filteredMembers(){const e=this._liveImmediate(),t=this._liveExtended();return this.circle==="personal"?e.filter(i=>{var r;return i.uid===((r=this.user)==null?void 0:r.uid)}):this.circle==="family"?e:[...e,...t]}_circleTrips(){var n;const e=this._liveTrips(),t=((n=this.user)==null?void 0:n.uid)??"thomas";let i;this.circle==="personal"?i=e.filter(o=>{var l;return(l=o.attendees)==null?void 0:l.includes(t)}):this.circle==="family"?i=e.filter(o=>o.visibility!=="extended"&&this._userCanSeeTrip(o)):i=e.filter(o=>this._userCanSeeTrip(o));const r=new Set,a=[];for(const o of i){const l=o.id??`${o.title}|${o.start}|${o.end}`;r.has(l)||(r.add(l),a.push(o))}return a}_filteredTrips(){const e=new Date;return e.setHours(0,0,0,0),this._circleTrips().filter(t=>t.end?C(t.end)>=e:!0)}_userCanSeeTrip(e){var l,c,h,p,u,_;const t=(l=this.user)==null?void 0:l.uid;if(!t)return!1;if((c=e.attendees)!=null&&c.includes(t)||(h=e.viewers)!=null&&h.includes(t))return!0;const i=((p=this.family)==null?void 0:p.memberIds)??[],r=((u=this.family)==null?void 0:u.cairnMemberIds)??i,a=i.includes(t),n=r.includes(t);if(a)return!0;if(!n)return!1;const o=e.visibility||"family";if(o==="personal")return!1;if(o==="family")return!0;if(o==="extended"){const b=e.targetSubGroups??[];if(b.length===0)return!0;const g=Object.entries(((_=this.family)==null?void 0:_.subGroups)??{}).filter(([,m])=>(m.memberIds??[]).includes(t)).map(([m])=>m);return b.some(m=>g.includes(m))}return!1}_filteredEvents(){const e=new Set(this._filteredMembers().map(t=>t.uid));return this._liveEvents().filter(t=>t.personIds.some(i=>e.has(i)))}_smartCallout(){var o,l;const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),i=1440*60*1e3,r=c=>Math.round((c-t)/i);for(const c of this._circleTrips()){if(!c.start||!c.end)continue;const h=C(c.start),p=C(c.end);if(h.setHours(0,0,0,0),p.setHours(0,0,0,0),h<=t&&t<=p){const u=r(h)+1,_=r(p)-r(h)+1,b=((o=c.location)==null?void 0:o.trim())||c.title;return`Day ${u} of ${_} in ${b}.`}}let a=null,n=1/0;for(const c of this._circleTrips()){if(!c.start)continue;const h=C(c.start);if(!h)continue;const p=r(h);p>0&&p<n&&(a={kind:"trip",item:c},n=p)}for(const c of this._filteredEvents()){if(!c.date)continue;const h=C(c.date);if(!h)continue;const p=r(h);p>=0&&p<n&&(a={kind:"event",item:c},n=p)}if(!a)return null;if(a.kind==="trip"){const c=((l=a.item.location)==null?void 0:l.trim())||a.item.title;return n===1?`${c} starts tomorrow.`:n<=14?`${c} in ${n} days.`:n<=60?`Next trip: ${c} in ${n} days.`:null}return n===0?`${a.item.title} — today.`:n===1?`${a.item.title} — tomorrow.`:n<=7?`${a.item.title} in ${n} days.`:null}_tripDensityByDay(e){const t=new Map;for(const i of this._filteredTrips()){if(!i.start||!i.end)continue;const r=C(i.start),a=C(i.end);if(Number.isNaN(r.getTime())||Number.isNaN(a.getTime())||r.getFullYear()>e||a.getFullYear()<e)continue;const n=new Date(Math.max(r,new Date(e,0,1))),o=new Date(Math.min(a,new Date(e,11,31)));for(;n<=o;){const l=`${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`;t.set(l,Math.min(1,(t.get(l)??0)+.5)),n.setDate(n.getDate()+1)}}return t}_shiftMonth(e){const t=this._displayMonth;this._displayMonth=new Date(t.getFullYear(),t.getMonth()+e,1)}_jumpToMonth(e,t){this._displayMonth=new Date(e,t,1)}_resetToToday(){const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1)}_renderStone({label:e,members:t,pebbleClass:i,emptyLabel:r,onClick:a,maxChips:n=6,dropTargetId:o=null,draggable:l=()=>!1}){const c=o?{dragover:b=>{var g;(g=b.dataTransfer.types)!=null&&g.includes("text/cairn-uid")&&(b.preventDefault(),this._dragOverTarget=o)},dragleave:()=>{this._dragOverTarget===o&&(this._dragOverTarget=null)},drop:async b=>{b.preventDefault(),this._dragOverTarget=null;const g=b.dataTransfer.getData("text/cairn-uid");if(!g)return;const m=o==="extended"?null:o;try{await k.setCairnMemberSubGroup(g,m),x(m?`Moved to ${e}.`:"Moved to extended.")}catch($){console.error("Move failed:",$),x(`Couldn't move: ${$.code??$.message}`,{duration:4e3})}}}:{},h=o&&this._dragOverTarget===o,p=`pebble ${i}${h?" pebble-drop":""}`;if(!t||t.length===0)return s`
        <button
          class="stone"
          @click=${a}
          title=${r}
          @dragover=${c.dragover}
          @dragleave=${c.dragleave}
          @drop=${c.drop}
        >
          <span class="${p} pebble-empty">${r}</span>
          <span class="stone-label">${e}</span>
        </button>
      `;const u=t.slice(0,n),_=t.length-u.length;return s`
      <button
        class="stone"
        @click=${a}
        title="${e} — manage members"
        @dragover=${c.dragover}
        @dragleave=${c.dragleave}
        @drop=${c.drop}
      >
        <span class="${p}">
          <span class="stone-chips">
            ${u.map(b=>{const g=l(b);return s`
                <member-chip
                  draggable=${g?"true":"false"}
                  class=${g?"is-draggable":""}
                  @dragstart=${m=>{if(!g){m.preventDefault();return}m.stopPropagation(),m.dataTransfer.setData("text/cairn-uid",b.uid),m.dataTransfer.effectAllowed="move"}}
                  .name=${b.displayName}
                  .photo=${b.photoURL??""}
                  .hue=${b.hue}
                  size="26"
                ></member-chip>
              `})}
            ${_>0?s`<span class="stone-more">+${_}</span>`:""}
          </span>
        </span>
        <span class="stone-label">${e}</span>
      </button>
    `}_renderMonthly(){const e=new Date,t=this._displayMonth??e,i=t.getFullYear(),r=t.getMonth(),n=(new Date(i,r,1).getDay()+6)%7,o=new Date(i,r+1,0).getDate(),l=new Map,c=(m,$)=>{l.has(m)||l.set(m,$)},h=[];for(const m of this._filteredEvents()){const $=C(m.date);$&&$.getFullYear()===i&&$.getMonth()===r&&(h.push($.getDate()),c($.getDate(),m.title??""))}const p=new Set;for(const m of this._filteredTrips()){if(!m.start||!m.end)continue;const $=C(m.start),S=C(m.end);if(Number.isNaN($.getTime())||Number.isNaN(S.getTime())||$.getFullYear()>i||S.getFullYear()<i||$.getMonth()>r&&S.getMonth()>r||$.getMonth()<r&&S.getMonth()<r)continue;const P=$.getMonth()===r?$.getDate():1,F=S.getMonth()===r?S.getDate():o;for(let O=P;O<=F;O++)p.add(O),c(O,m.title??"")}const u=[];for(let m=0;m<n;m++)u.push(s`<div class="cal-cell empty"></div>`);const _=e.getFullYear()===i&&e.getMonth()===r;for(let m=1;m<=o;m++){const $=_&&m===e.getDate(),S=h.includes(m),P=p.has(m),F=$?l.get(m)??"Today":l.get(m),O=["cal-cell",$?"today":"",S?"has-event":"",P?"has-trip":""].filter(Boolean).join(" ");u.push(s`<div class=${O} title=${F?`${m} — ${F}`:""}>
        <span class="cal-cell-day">${m}</span>
        ${F?s`<span class="cal-cell-label">${F}</span>`:""}
      </div>`)}const b=new Date(i,r,1).toLocaleString("en-GB",{month:"long",year:"numeric"});return s`
      <div class="cal-head">
        <h3>${b}</h3>
        <div class="nav">
          ${!_?s`<button
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
        ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(m=>s`<div class="cal-dow">${m}</div>`)}
        ${u}
      </div>
    `}_openCreate(){if(this.preview){x("Sign in to create real activities.");return}if(!k.familyId){x("You need a PebblePath family first.");return}this._typePickerOpen=!0}_onTypePicked(e){this._typePickerOpen=!1;const t=e.detail.type;if(t==="event"){this._eventFormEvent=null,this._eventFormOpen=!0;return}if(t==="import"){this._importOpen=!0;return}this._formMode=t,this._formTrip=null,this._formOpen=!0}_openEdit(e){if(this.preview){x("Sign in to edit real activities.");return}const t=e.lodgingUrl||e.lodgingHost||e.flightNumber||e.flightDepartAirport;this._formMode=t?"trip":"activity",this._formTrip=e,this._formOpen=!0}async _onSaveTrip(e){const t=e.detail;this._formBusy=!0;try{await k.saveTrip(t),this._formOpen=!1,this._formTrip=null,x(t.id?"Trip updated.":"Trip created.")}catch(i){console.error("Save trip failed:",i),x(`Couldn't save: ${i.code??i.message}`,{duration:5e3})}finally{this._formBusy=!1}}async _onDeleteTrip(e){this._formBusy=!0;try{await k.deleteTrip(e.detail.id),this._formOpen=!1,this._formTrip=null,x("Trip deleted.")}catch(t){console.error("Delete trip failed:",t),x(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._formBusy=!1}}_openCreateEvent(){if(this.preview){x("Sign in to add real events.");return}if(!k.familyId){x("You need a family first.");return}this._eventFormEvent=null,this._eventFormOpen=!0}_openEditEvent(e){if(this.preview){x("Sign in to edit real events.");return}if(e!=null&&e._childId){const t=prompt(`Edit ${e._childName}'s birthday (YYYY-MM-DD):`,e.date);if(!t)return;if(!/^\d{4}-\d{2}-\d{2}$/.test(t)){x("Use YYYY-MM-DD format.");return}k.updateChildBirthday(e._childId,new Date(t)).then(()=>x(`Updated ${e._childName}'s birthday.`)).catch(i=>{console.error("Update child birthday failed:",i),x(`Couldn't update: ${i.code??i.message}`,{duration:5e3})});return}this._eventFormEvent={...e,date:e._originalDate??e.date},this._eventFormOpen=!0}async _onSaveEvent(e){this._eventFormBusy=!0;try{await k.saveEvent(e.detail),this._eventFormOpen=!1,this._eventFormEvent=null,x(e.detail.id?"Event updated.":"Event added.")}catch(t){console.error("Save event failed:",t),x(`Couldn't save: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}async _onDeleteEvent(e){this._eventFormBusy=!0;try{await k.deleteEvent(e.detail.id),this._eventFormOpen=!1,this._eventFormEvent=null,x("Event deleted.")}catch(t){console.error("Delete event failed:",t),x(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}render(){var _,b,g,m,$,S,P,F,O,j,Q;const e=this._filteredTrips(),t=this._filteredEvents(),i=this._liveImmediate(),r=this._liveExtended(),a=i.concat(r),n=(((_=this.user)==null?void 0:_.displayName)??"there").split(" ")[0],o=new Date,l=new Date(o.getFullYear(),o.getMonth(),1),c=new Date(o.getFullYear(),o.getMonth()+1,0),h=t.filter(y=>{const I=C(y.date);return I&&I.getFullYear()===o.getFullYear()&&I.getMonth()===o.getMonth()}),u=this._circleTrips().filter(y=>{if(!y.start||!y.end)return!1;const I=C(y.start),R=C(y.end);return Number.isNaN(I.getTime())||Number.isNaN(R.getTime())?!1:I<=c&&R>=l}).length+h.length;return s`
      <div class="topbar">
        <div class="brand">
          <img
            class="brand-icon"
            src=${"/portal/assets/cairn-icon.png"}
            srcset=${"/portal/assets/cairn-icon.png 1x, /portal/assets/cairn-icon-2x.png 2x"}
            alt="Cairn"
            width="38"
            height="38"
          />
          <!-- 2026-05-16 — wordmark text removed from the logged-in
               topbar per Thomas; the stone icon stays as the brand mark. -->
        </div>
        <div
          class="pebble-search"
          @click=${y=>{var I;y.target.tagName!=="INPUT"&&((I=this.renderRoot.querySelector(".pebble-search-input"))==null||I.focus())}}
        >
          <svg class="pebble-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
          </svg>
          <input
            class="pebble-search-input"
            type="text"
            placeholder="Ask Pebble — weekend plans, trip ideas…"
            @focus=${()=>{var y;this._pebbleOpen=!0,(y=this.renderRoot.querySelector(".pebble-search-input"))==null||y.blur()}}
            @keydown=${y=>{y.key==="Enter"&&(y.preventDefault(),this._pebbleOpen=!0)}}
            aria-label="Ask Pebble"
          />
        </div>
        <div class="who">
          <button
            class="pebble-mobile-btn"
            @click=${()=>this._pebbleOpen=!0}
            title="Ask Pebble"
            aria-label="Ask Pebble"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
            </svg>
          </button>
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
            @click=${()=>this._profileOpen=!0}
            title="${((b=this.user)==null?void 0:b.displayName)??"Profile"} — open settings"
            aria-label="Open profile settings"
          >
            <member-chip
              .name=${((g=this.user)==null?void 0:g.displayName)??"You"}
              .photo=${((m=this.user)==null?void 0:m.photoURL)??""}
              .hue=${198}
              size="36"
            ></member-chip>
          </button>
        </div>
      </div>

      ${this.preview?s`<div class="preview-banner">
            <strong>Preview mode</strong> — viewing the dashboard with placeholder
            data. <a href="?">Back to sign-in</a>.
          </div>`:""}

      <main>
        <div class="hello">
          <div>
            <h1>Hi ${n}.</h1>
            ${(()=>{const y=this._smartCallout();return y?s`<div class="smart">${y}</div>`:""})()}
            ${u>0?s`<div class="stat">
                  <span>${u}</span> ${u===1?"activity":"activities"} this month
                </div>`:""}
            ${this.family?this._editingFamilyName?s`<input
                    class="family-name-input"
                    type="text"
                    .value=${this.family.name??""}
                    autofocus
                    @blur=${this._saveFamilyName}
                    @keydown=${y=>{y.key==="Enter"&&y.target.blur(),y.key==="Escape"&&(y.target.value=this.family.name??"",this._editingFamilyName=!1)}}
                  />`:s`<div
                    class="family-name"
                    title="Click to rename"
                    @click=${()=>this._editingFamilyName=!0}
                  >
                    ${this.family.name||"Tap to name your family"}
                  </div>`:""}
          </div>
        </div>

        <section>
          <div class="section-head">
            <h2>Coming up</h2>
            <div style="display:flex;gap:14px;align-items:baseline;">
              <button
                class="link hide-mobile"
                @click=${()=>this._importOpen=!0}
              >
                Import from Calendar
              </button>
              ${this._circleTrips().length>4?s`<button class="link" @click=${()=>this._allTripsOpen=!0}>
                    All trips →
                  </button>`:""}
            </div>
          </div>
          ${e.length===0?s`
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
                    <div class="empty-title">A blank calendar — full of room.</div>
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
              `:s`
                <div class="trips-row">
                  ${e.map(y=>s`<trip-card
                      .trip=${y}
                      .members=${a}
                      @edit-trip=${I=>this._openEdit(I.detail)}
                    ></trip-card>`)}
                </div>
              `}
        </section>

        <section>
          <div class="cal-row">
            <glass-panel padding="md" variant="strong" stretch>
              ${this._renderMonthly()}
            </glass-panel>
            <glass-panel padding="md" variant="strong" stretch>
              <div class="cal-head">
                <h3>${(($=this._displayMonth)==null?void 0:$.getFullYear())??o.getFullYear()}</h3>
                <div style="font-size:12px;color:var(--text-tertiary);">Yearly</div>
              </div>
              <yearly-view
                .year=${((S=this._displayMonth)==null?void 0:S.getFullYear())??o.getFullYear()}
                .tripDays=${this._tripDensityByDay(((P=this._displayMonth)==null?void 0:P.getFullYear())??o.getFullYear())}
                .trips=${this._circleTrips()}
                .events=${this._liveEvents()}
                .today=${o}
                @month-select=${y=>this._jumpToMonth(y.detail.year,y.detail.month)}
              ></yearly-view>
            </glass-panel>
          </div>
        </section>

        <section>
          <div class="cel-cairn-row">
            <!-- LEFT — Celebrations (combined Birthdays + Anniversaries
                 stacked in one card; width matches the monthly
                 calendar directly above it). -->
            <div class="cel-cairn-col">
              <div class="section-head">
                <h2>Celebrations</h2>
                <button class="link" @click=${()=>this._openCreateEvent()}>+ Add event</button>
              </div>
              ${(()=>{const y=(M,H)=>String(M.date).localeCompare(String(H.date)),I=t.filter(M=>M.type==="birthday").slice().sort(y),R=t.filter(M=>M.type==="anniversary").slice().sort(y),ee=t.filter(M=>M.type!=="birthday"&&M.type!=="anniversary").slice().sort(y),te=(M,H,se)=>s`
                  <div class="cel-stack-block">
                    <div class="cel-col-head">
                      <span class="cel-col-title">${M}</span>
                    </div>
                    ${H.length===0?s`<div class="cel-empty">${se}</div>`:H.map(oe=>s`<event-row
                            .event=${oe}
                            .members=${a}
                            @edit-event=${ne=>this._openEditEvent(ne.detail)}
                          ></event-row>`)}
                  </div>
                `;return s`
                  <glass-panel padding="md" variant="strong">
                    ${te("Birthdays",I,"No birthdays yet.")}
                    ${te("Anniversaries",R,"No anniversaries yet.")}
                    ${ee.length>0?te("Other",ee,""):""}
                  </glass-panel>
                `})()}
            </div>

            <!-- RIGHT — Your Cairn (width matches the annual grid
                 directly above it). -->
            <div class="cel-cairn-col">
              <div class="section-head">
                <h2>Your Cairn</h2>
                <button class="link" @click=${()=>this._membersOpen=!0}>
                  Manage members
                </button>
              </div>
              <glass-panel padding="md" variant="strong">
                ${(()=>{var se,oe,ne,Ye,He;const y=i.find(L=>{var B;return L.uid===((B=this.user)==null?void 0:B.uid)}),R=new Set(((se=this.family)==null?void 0:se.memberIds)??[]).has((oe=this.user)==null?void 0:oe.uid),ee=i.filter(L=>{var B;return L.uid!==((B=this.user)==null?void 0:B.uid)}),te=!R&&y?[{...y,role:"extended"},...r]:r,M=Object.entries(((ne=this.family)==null?void 0:ne.subGroups)??{}),H=new Map(a.map(L=>[L.uid,L]));return s`
                <div class="cairn-stack">
                  ${R?s`
                        <!-- Top: you (terracotta pebble) — PP viewer only. -->
                        <button
                          class="stone"
                          @click=${()=>this._profileOpen=!0}
                          title="Your profile"
                        >
                          <span class="pebble pebble-self">
                            <span class="stone-chips">
                              <member-chip
                                .name=${(y==null?void 0:y.displayName)??((Ye=this.user)==null?void 0:Ye.displayName)??"You"}
                                .photo=${(y==null?void 0:y.photoURL)??((He=this.user)==null?void 0:He.photoURL)??""}
                                .hue=${(y==null?void 0:y.hue)??198}
                                size="28"
                              ></member-chip>
                            </span>
                          </span>
                          <span class="stone-label">You</span>
                        </button>
                      `:""}

                  <!-- Family stone — for PP viewers this is co-parents +
                       children; for extended-family viewers it shows the
                       PP household they joined. -->
                  ${this._renderStone({label:"Family",members:ee,pebbleClass:"pebble-family",emptyLabel:"+ Add co-parent or child",onClick:()=>this._membersOpen=!0})}

                  <!-- Extended (deeper teal, larger). For extended viewers
                       this is where the viewer's own avatar appears. -->
                  ${this._renderStone({label:"Extended",members:te,pebbleClass:"pebble-extended",emptyLabel:"+ Invite extended family",onClick:()=>this._membersOpen=!0,dropTargetId:"extended",draggable:L=>L.role==="extended"})}

                  <!-- Sub-group base row — each stone is a drop target for
                       its group; chips inside are draggable so they can be
                       moved into another sub-group or back to extended. -->
                  ${M.length>0?s`
                        <div class="subgroup-row">
                          ${M.map(([L,B])=>{const gt=(B.memberIds??[]).map(ge=>H.get(ge)).filter(Boolean);return this._renderStone({label:B.name??"Group",members:gt,pebbleClass:"pebble-subgroup",emptyLabel:`${B.name??"Group"} (empty)`,onClick:()=>this._membersOpen=!0,maxChips:4,dropTargetId:L,draggable:ge=>ge.role==="extended"})})}
                        </div>
                      `:""}
                </div>
                ${ee.length===0&&r.length===0?s`
                      <div class="cairn-hint">
                        <span class="cairn-hint-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <ellipse cx="12" cy="6.5" rx="3.5" ry="1.5" />
                            <ellipse cx="12" cy="12" rx="6" ry="2.4" />
                            <ellipse cx="12" cy="18" rx="8" ry="3" />
                          </svg>
                        </span>
                        <div class="cairn-hint-body">
                          <div class="cairn-hint-title">Start stacking your cairn</div>
                          <div class="cairn-hint-sub">
                            Invite a partner, child or grandparent — every stone
                            adds shared trips, celebrations, and circles.
                          </div>
                        </div>
                        <button
                          class="cairn-hint-cta"
                          @click=${()=>this._membersOpen=!0}
                        >
                          Invite
                        </button>
                      </div>
                    `:""}
              `})()}
              </glass-panel>
            </div>
          </div>
        </section>

        <discover-pebblepath></discover-pebblepath>
      </main>

      <trip-form
        ?open=${this._formOpen}
        .trip=${this._formTrip}
        .members=${i}
        .extendedMembers=${this._liveExtended()}
        .currentUid=${((F=this.user)==null?void 0:F.uid)??""}
        .familyId=${((O=this.family)==null?void 0:O.id)??""}
        .busy=${this._formBusy}
        .formMode=${this._formMode}
        .subGroups=${((j=this.family)==null?void 0:j.subGroups)??{}}
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
        .immediate=${i}
        .extended=${r}
        @cancel=${()=>this._membersOpen=!1}
      ></manage-members-modal>

      <event-form
        ?open=${this._eventFormOpen}
        .event=${this._eventFormEvent}
        .members=${a}
        .familyId=${((Q=this.family)==null?void 0:Q.id)??""}
        .busy=${this._eventFormBusy}
        @save=${this._onSaveEvent}
        @remove=${this._onDeleteEvent}
        @cancel=${()=>{this._eventFormOpen=!1,this._eventFormEvent=null}}
      ></event-form>

      <all-trips-modal
        ?open=${this._allTripsOpen}
        .trips=${this._circleTrips()}
        .members=${a}
        @edit-trip=${y=>{this._allTripsOpen=!1,this._openEdit(y.detail)}}
        @cancel=${()=>this._allTripsOpen=!1}
      ></all-trips-modal>

      <import-calendar-modal
        ?open=${this._importOpen}
        @cancel=${()=>this._importOpen=!1}
      ></import-calendar-modal>

      <profile-sheet
        ?open=${this._profileOpen}
        .user=${this.user}
        .pebbleUser=${this.pebbleUser}
        @cancel=${()=>this._profileOpen=!1}
      ></profile-sheet>

      <pebble-chat
        ?open=${this._pebbleOpen}
        .family=${this.family}
        .trips=${this._circleTrips()}
        @cancel=${()=>this._pebbleOpen=!1}
      ></pebble-chat>
    `}}f(Be,"properties",{user:{type:Object},pebbleUser:{type:Object},family:{type:Object},children:{type:Array},trips:{type:Array},events:{type:Array},preview:{type:Boolean},circle:{state:!0},_formOpen:{state:!0},_formTrip:{state:!0},_formBusy:{state:!0},_membersOpen:{state:!0},_eventFormOpen:{state:!0},_eventFormEvent:{state:!0},_eventFormBusy:{state:!0},_displayMonth:{state:!0},_allTripsOpen:{state:!0},_editingFamilyName:{state:!0},_importOpen:{state:!0},_profileOpen:{state:!0},_typePickerOpen:{state:!0},_formMode:{state:!0},_pebbleOpen:{state:!0},_dragOverTarget:{state:!0}}),f(Be,"styles",E`
    :host {
      display: block;
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
      background: rgba(20, 12, 6, 0.42);
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
      background: rgba(255, 248, 235, 0.08);
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
      .activity-btn {
        padding: 8px 12px;
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

    main {
      padding: 32px 24px 48px;
      max-width: 1280px;
      margin: 0 auto;
    }
    @media (max-width: 768px) {
      main {
        padding: 20px 16px calc(32px + env(safe-area-inset-bottom));
      }
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
      }
    }
    .hello h1 {
      margin: 0;
      font-family: var(--font-display);
      font-size: clamp(30px, 4vw, 44px);
      line-height: 1.05;
      letter-spacing: -0.025em;
      background: linear-gradient(180deg, #fff 0%, rgba(255, 248, 235, 0.7) 100%);
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
      background: rgba(255, 248, 235, 0.05);
    }
    .hello .family-name-input {
      color: var(--text-primary);
      font-size: 14px;
      margin-top: 6px;
      letter-spacing: -0.005em;
      font-family: var(--font-body);
      font-weight: 500;
      background: rgba(255, 248, 235, 0.08);
      border: 1px solid rgba(255, 248, 235, 0.25);
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
    }
    .section-head h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
    .section-head .link {
      color: var(--text-secondary);
      font-size: 13px;
      cursor: pointer;
      background: transparent;
      border: none;
      font-family: var(--font-body);
    }
    .section-head .link:hover {
      color: var(--text-primary);
    }
    @media (max-width: 768px) {
      .section-head .link.hide-mobile {
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
      border: 1px solid rgba(255, 248, 235, 0.06);
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
  `);customElements.define("home-screen",Be);const Ze="cairn:pendingLoginIntent";class Re extends D{constructor(){super(),this.user=null,this._mode="choose",this._code="",this._familyName="",this._busy=!1,this._error="",this._flavor="welcome";try{localStorage.getItem(Ze)==="1"&&(this._flavor="recovery",localStorage.removeItem(Ze))}catch{}}willUpdate(e){if(e.has("user")&&this.user&&!this._familyName){const t=(this.user.displayName??"").trim().split(/\s+/).slice(-1)[0];t&&t.length>1&&(this._familyName=`${t} Family`)}}_go(e){this._mode=e,this._error=""}_submitJoin(){const e=(this._code??"").trim().toUpperCase();if(!e){this._error="Paste the family code you were sent.";return}const t=e.startsWith("CAIRN-")?e:`CAIRN-${e.replace(/^CAIRN-?/i,"")}`;if(!/^CAIRN-[A-Z0-9]{3,6}$/.test(t)){this._error="Codes look like CAIRN-XXXX.";return}this._error="",this.dispatchEvent(new CustomEvent("join-code",{detail:{code:t},bubbles:!0,composed:!0}))}async _submitCreate(){const e=(this._familyName??"").trim();if(!e){this._error="Give your family a name.";return}this._busy=!0,this._error="";try{await k.createCairnOnlyFamily(e),x(`Welcome to ${e}.`)}catch(t){console.error("Create family failed:",t),this._error=(t==null?void 0:t.code)==="permission-denied"?"Couldn't create the family — Firestore rules may not be deployed yet.":`Couldn't create the family: ${(t==null?void 0:t.message)??"try again"}`}finally{this._busy=!1}}_iconJoin(){return s`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>`}_iconCreate(){return s`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4zm0 4.7l1.6 3.2 3.6.5-2.6 2.5.6 3.5L12 14.7l-3.2 1.7.6-3.5-2.6-2.5 3.6-.5L12 6.7z"/>
    </svg>`}_iconDownload(){return s`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>`}render(){return this._mode==="join"?this._renderJoin():this._mode==="create"?this._renderCreate():this._mode==="download"?this._renderDownload():this._renderChoose()}_renderChoose(){var a;const e=(((a=this.user)==null?void 0:a.displayName)??"").trim().split(/\s+/)[0]||"there",t=this._flavor==="recovery",i=t?`Hi ${e} — we couldn't find a family on your account.`:`Welcome, ${e}.`;return s`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <h1>${i}</h1>
          <p class="lede">${t?"Join an existing family with your invite code, or start a new one.":"Let's get you all set up."}</p>
          <div class="options">
            <button class="option" @click=${()=>this._go("join")}>
              <span class="icon-cell tide">${this._iconJoin()}</span>
              <span>
                <div class="label">Join an existing family</div>
                <div class="desc">Paste the CAIRN-XXXX code from your invite.</div>
              </span>
            </button>
            <button class="option" @click=${()=>this._go("create")}>
              <span class="icon-cell sage">${this._iconCreate()}</span>
              <span>
                <div class="label">Start a new family</div>
                <div class="desc">Create a family planner account.</div>
              </span>
            </button>
            <button class="option" @click=${()=>this._go("download")}>
              <span class="icon-cell amber">${this._iconDownload()}</span>
              <span>
                <div class="label">I have the PebblePath app</div>
                <div class="desc">Sign in on the app — your family will sync.</div>
              </span>
            </button>
          </div>
        </glass-panel>
      </div>
    `}_renderJoin(){return s`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <button class="back" @click=${()=>this._go("choose")}>‹ Back</button>
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
                @input=${e=>this._code=e.target.value}
                @keydown=${e=>{e.key==="Enter"&&(e.preventDefault(),this._submitJoin())}}
                autocapitalize="characters"
                autocomplete="off"
                spellcheck="false"
                maxlength="14"
              />
            </div>
            ${this._error?s`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <glass-button variant="primary" @click=${this._submitJoin}>
                Continue
              </glass-button>
            </div>
          </div>
        </glass-panel>
      </div>
    `}_renderCreate(){return s`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <button class="back" @click=${()=>this._go("choose")}>‹ Back</button>
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
                @input=${e=>this._familyName=e.target.value}
                @keydown=${e=>{e.key==="Enter"&&!this._busy&&(e.preventDefault(),this._submitCreate())}}
                maxlength="64"
              />
            </div>
            ${this._error?s`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <glass-button
                variant="primary"
                ?disabled=${this._busy}
                @click=${this._submitCreate}
              >
                ${this._busy?"Creating…":"Create family"}
              </glass-button>
            </div>
          </div>
        </glass-panel>
      </div>
    `}_renderDownload(){return s`
      <div class="wrap">
        <glass-panel padding="lg" variant="strong" lifted>
          <button class="back" @click=${()=>this._go("choose")}>‹ Back</button>
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
              <a @click=${()=>this._go("create")}>
                use Cairn standalone for now
              </a>
              — you can connect PebblePath later.
            </div>
          </div>
        </glass-panel>
      </div>
    `}}f(Re,"properties",{user:{type:Object},_mode:{state:!0},_code:{state:!0},_familyName:{state:!0},_busy:{state:!0},_error:{state:!0},_flavor:{state:!0}}),f(Re,"styles",E`
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
  `);customElements.define("onboarding-wizard",Re);const J="cairn:pendingJoinCode",Qe="cairn:pendingCreateFamily";class ut extends D{constructor(){super(),this.authUser=null,this.loading=!0;const e=new URLSearchParams(window.location.search);if(this.preview=e.has("preview"),this._resetMode=e.has("reset"),this._resetMode)try{localStorage.removeItem(J)}catch{}const t=e.get("join");if(t&&!this._resetMode)try{localStorage.setItem(J,t)}catch{}let i=null;if(!this._resetMode)try{i=localStorage.getItem(J)}catch{}this.joinCode=this._resetMode?null:t??i??null,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this._unsubAuth=null,this._onDataChange=()=>{this.pebbleUser=k.state.user,this.family=k.state.family,this.children=k.state.children,this.trips=k.state.trips,this.events=k.state.events,this.userDocResolved=k.userDocResolved},this.userDocResolved=!1}_clearJoinState(){this.joinCode=null;try{localStorage.removeItem(J)}catch{}const e=new URL(window.location.href);e.searchParams.delete("join"),window.history.replaceState({},"",e.toString())}connectedCallback(){if(super.connectedCallback(),typeof document<"u"&&document.documentElement.style.setProperty("--pre-login-bg","url('/portal/assets/pebblepath-daybreak-empty.png')"),this.preview){this.loading=!1;return}k.addEventListener("change",this._onDataChange),this._unsubAuth=ct(e=>{if(this.authUser=e,this.loading=!1,e){if(!this._resetMode)try{const t=localStorage.getItem(J);t&&!this.joinCode&&(this.joinCode=t)}catch{}k.start(e.uid),this._consumePendingCreate()}else k.stop(),this.userDocResolved=!1})}async _consumePendingCreate(){let e=null;try{e=localStorage.getItem(Qe)}catch{}if(e){try{localStorage.removeItem(Qe)}catch{}try{await k.createCairnOnlyFamily(e),x(`Welcome to ${e}.`)}catch(t){console.error("Pending family create failed:",t),x((t==null?void 0:t.code)==="permission-denied"?"Couldn't create the family — Firestore rules may need a redeploy.":`Couldn't create the family: ${(t==null?void 0:t.message)??"try again"}`,{duration:5e3})}}}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubAuth)==null||e.call(this),k.removeEventListener("change",this._onDataChange)}_composeViewer(){var i,r;const e=this.authUser,t=(i=this.pebbleUser)==null?void 0:i.displayName;return{uid:e.uid,displayName:t&&t.trim()||e.displayName||"You",email:e.email??((r=this.pebbleUser)==null?void 0:r.email)??"",photoURL:pt(e,this.pebbleUser)}}_needsOnboarding(){var t,i;return!this.authUser||this.joinCode?!1:this._resetMode?!0:this.userDocResolved?!(((t=this.pebbleUser)==null?void 0:t.familyId)??((i=this.pebbleUser)==null?void 0:i.cairnFamilyId)??null):!1}updated(){this.setAttribute("data-route",this._currentRoute())}_currentRoute(){return this.loading?"loading":this.preview?"home":this.authUser?this.joinCode?"join":this._needsOnboarding()?"wizard":"home":"register"}render(){return this.loading?s``:this.preview?s`<home-screen preview></home-screen>`:this.authUser?this.joinCode?s`
        <join-family-screen
          .code=${this.joinCode}
          @joined=${()=>this._clearJoinState()}
          @cancel=${()=>this._clearJoinState()}
        ></join-family-screen>
      `:this._needsOnboarding()?s`
        <onboarding-wizard
          .user=${this.authUser}
          @join-code=${e=>{this.joinCode=e.detail.code;try{localStorage.setItem(J,e.detail.code)}catch{}}}
        ></onboarding-wizard>
      `:s`
      <home-screen
        .user=${this._composeViewer()}
        .pebbleUser=${this.pebbleUser}
        .family=${this.family}
        .children=${this.children}
        .trips=${this.trips}
        .events=${this.events}
      ></home-screen>
    `:s`
        <register-screen
          .joinCode=${this.joinCode??""}
        ></register-screen>
      `}}f(ut,"properties",{authUser:{state:!0},loading:{state:!0},preview:{state:!0},joinCode:{state:!0},pebbleUser:{state:!0},family:{state:!0},children:{state:!0},trips:{state:!0},events:{state:!0},userDocResolved:{state:!0}});customElements.define("cairn-app",ut);
//# sourceMappingURL=index-4o4HCZRq.js.map
