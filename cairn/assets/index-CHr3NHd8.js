var Ke=Object.defineProperty;var Xe=(o,e,t)=>e in o?Ke(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var g=(o,e,t)=>Xe(o,typeof e!="symbol"?e+"":e,t);import{i as $,a as k,b as s}from"./lit-2GpawzfI.js";import{f as Ze,h as Qe,j as et,G as we,s as Ie,k as tt,l as z,m as I,n as D,o as it,q as G,t as M,v as q,w as V,x as Fe,y as Te,z as Ae,A as Me}from"./firebase-core-DVt9Aunh.js";import{g as rt,h as K}from"./firebase-functions-CfBtnn7v.js";import{g as at,r as je,u as Pe,a as Oe}from"./firebase-storage-C5Nl_r0j.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();class X extends ${constructor(){super(),this.variant="default",this.lifted=!1,this.padding="md"}render(){const e=["panel",this.variant==="strong"?"strong":"",this.lifted?"lifted":"",`pad-${this.padding}`].filter(Boolean).join(" ");return s`
      <div class=${e}>
        <div class="content"><slot></slot></div>
      </div>
    `}}g(X,"properties",{variant:{type:String},lifted:{type:Boolean},padding:{type:String}}),g(X,"styles",k`
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
  `);customElements.define("glass-panel",X);class Z extends ${constructor(){super(),this.variant="primary",this.size="md",this.full=!1,this.disabled=!1}render(){const e=[this.variant,`size-${this.size}`,this.full?"full":""].filter(Boolean).join(" ");return s`
      <button class=${e} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}}g(Z,"properties",{variant:{type:String},size:{type:String},full:{type:Boolean},disabled:{type:Boolean,reflect:!0}}),g(Z,"styles",k`
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
  `);customElements.define("glass-button",Z);class Q extends ${constructor(){super(),this.size=44}render(){const e=this.size;return s`
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
    `}}g(Q,"properties",{size:{type:Number}}),g(Q,"styles",k`
    :host {
      display: inline-block;
      line-height: 0;
    }
    svg {
      display: block;
      filter: drop-shadow(0 6px 18px rgba(20, 12, 6, 0.45));
    }
  `);customElements.define("cairn-mark",Q);class ee extends ${constructor(){super(),this.year=new Date().getFullYear(),this.tripDays=new Map,this.events=[],this.today=new Date}_isLeap(e){return e%4===0&&e%100!==0||e%400===0}_daysInMonth(e,t){return[31,this._isLeap(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]}_renderMonth(e){const t=this.year,r=(new Date(t,e,1).getDay()+6)%7,a=this._daysInMonth(t,e),l=new Set(this.events.filter(c=>{const p=new Date(c.date);return p.getFullYear()===t&&p.getMonth()===e}).map(c=>new Date(c.date).getDate())),n=[];for(let c=0;c<r;c++)n.push(s`<div class="cell empty"></div>`);const d=this.today;for(let c=1;c<=a;c++){const p=`${String(e+1).padStart(2,"0")}-${String(c).padStart(2,"0")}`,h=this.tripDays.get(p)??0,f=d.getFullYear()===t&&d.getMonth()===e&&d.getDate()===c,y=l.has(c),m=["cell",f?"today":"",h>0?"trip":"",h>.6?"dense":"",y?"event":""].filter(Boolean).join(" ");n.push(s`<div class=${m}></div>`)}return n}_onSelect(e){this.dispatchEvent(new CustomEvent("month-select",{detail:{month:e,year:this.year},bubbles:!0,composed:!0}))}render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=this.today.getMonth(),i=this.today.getFullYear()===this.year;return s`
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
        <span class="swatch"><i class="trip"></i> Trip</span>
        <span class="swatch"><i class="event"></i> Celebration</span>
        <span class="swatch"><i class="today"></i> Today</span>
      </div>
    `}}g(ee,"properties",{year:{type:Number},tripDays:{type:Object},events:{type:Array},today:{type:Object}}),g(ee,"styles",k`
    :host {
      display: block;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
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
      padding: 8px 6px 6px;
      border-radius: 10px;
      background: rgba(255, 248, 235, 0.04);
      border: 1px solid rgba(255, 248, 235, 0.08);
      transition: background 200ms ease, border-color 200ms ease;
      cursor: pointer;
    }
    .month:hover {
      background: rgba(255, 248, 235, 0.07);
      border-color: rgba(255, 248, 235, 0.14);
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
      border-radius: 2px;
      background: rgba(255, 248, 235, 0.04);
      position: relative;
    }
    .cell.empty {
      background: transparent;
    }
    .cell.today {
      background: var(--gradient-warmsun);
    }
    .cell.trip {
      background: rgba(61, 155, 143, 0.38);
    }
    .cell.trip.dense {
      background: rgba(61, 155, 143, 0.62);
    }
    .cell.event::after {
      content: '';
      position: absolute;
      bottom: 1px;
      left: 50%;
      transform: translateX(-50%);
      width: 2.5px;
      height: 2.5px;
      border-radius: 999px;
      background: var(--amber-glow);
      box-shadow: 0 0 3px rgba(212, 168, 67, 0.6);
    }
    .cell.event.trip::after {
      background: var(--rose-soft);
      box-shadow: 0 0 3px rgba(201, 138, 138, 0.6);
    }
    .legend {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
      padding: 0 4px;
      font-size: 10.5px;
      color: var(--text-tertiary);
      flex-wrap: wrap;
    }
    .swatch {
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .swatch i {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      display: inline-block;
    }
    .swatch i.trip {
      background: rgba(61, 155, 143, 0.5);
    }
    .swatch i.event {
      background: var(--amber-glow);
      border-radius: 999px;
    }
    .swatch i.today {
      background: var(--gradient-warmsun);
    }
  `);customElements.define("yearly-view",ee);class te extends ${constructor(){super(),this.name="",this.hue=200,this.photo="",this.size=36,this.showName=!1}_initials(){return this.name.split(/\s+/).map(e=>e[0]).filter(Boolean).slice(0,2).join("").toUpperCase()}render(){const e=`linear-gradient(135deg, hsl(${this.hue}, 55%, 62%) 0%, hsl(${(this.hue+40)%360}, 50%, 42%) 100%)`,t=`width:${this.size}px;height:${this.size}px;background:${e};font-size:${this.size*.38}px;`;return s`
      <div class="avatar" style=${t} title=${this.name}>
        ${this.photo?s`<img src=${this.photo} alt=${this.name} />`:s`<span>${this._initials()}</span>`}
      </div>
      ${this.showName?s`<span class="name">${this.name}</span>`:""}
    `}}g(te,"properties",{name:{type:String},hue:{type:Number},photo:{type:String},size:{type:Number},showName:{type:Boolean,attribute:"show-name"}}),g(te,"styles",k`
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
  `);customElements.define("member-chip",te);const st="modulepreload",nt=function(o){return"/cairn/"+o},Ee={},Ge=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(p=>Promise.resolve(p).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),d=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=l(t.map(c=>{if(c=nt(c),c in Ee)return;Ee[c]=!0;const p=c.endsWith(".css"),h=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=p?"stylesheet":st,p||(f.as="script"),f.crossOrigin="",f.href=c,d&&f.setAttribute("nonce",d),document.head.appendChild(f),p)return new Promise((y,m)=>{f.addEventListener("load",y),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(l){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=l,window.dispatchEvent(n),!n.defaultPrevented)throw l}return r.then(l=>{for(const n of l||[])n.status==="rejected"&&a(n.reason);return e().catch(a)})},ie={apiKey:"AIzaSyA6NKZNLVBeeLrXcLJSXus5M832AxpI2wk",authDomain:"pebblepath-992b6.firebaseapp.com",projectId:"pebblepath-992b6",storageBucket:"pebblepath-992b6.firebasestorage.app",messagingSenderId:"497141667291",appId:"1:497141667291:web:ee84c186db54389d10c3fe"},F=!!(ie.apiKey&&ie.projectId),L=F?Ze(ie):null,x=F?Qe(L):null,v=F?et(L):null,R=F?rt(L,"us-central1"):null,re=F?at(L):null,ae=F?new we:null;ae&&ae.setCustomParameters({prompt:"select_account"});const J=F?new we:null;J&&J.addScope("https://www.googleapis.com/auth/calendar.readonly");let H=null,se=0;async function Be(){if(!x||!J)throw new Error("Firebase not configured.");if(H&&Date.now()<se-6e4)return H;const o=await Ie(x,J),e=we.credentialFromResult(o),t=e==null?void 0:e.accessToken;if(!t)throw new Error("Couldn't get a Calendar access token — try again.");return H=t,se=Date.now()+3600*1e3,t}function ot(){H=null,se=0}function Ye(){if(!x)throw new Error("Firebase not configured — fill in .env first.");return Ie(x,ae)}function Le(){return x?tt(x):Promise.resolve()}function Ue(o){return x?it(x,o):(o(null),()=>{})}const lt=Object.freeze(Object.defineProperty({__proto__:null,addDoc:q,app:L,auth:x,clearCalendarToken:ot,collection:M,connectGoogleCalendar:Be,db:v,deleteDoc:V,doc:z,firebaseApp:L,functions:R,getDocs:Ae,getDownloadURL:Oe,httpsCallable:K,isConfigured:F,onAuth:Ue,onSnapshot:G,query:Fe,serverTimestamp:D,setDoc:Me,signIn:Ye,signOutUser:Le,storage:re,storageRef:je,updateDoc:I,uploadBytes:Pe,where:Te},Symbol.toStringTag,{value:"Module"}));class dt extends EventTarget{constructor(){super(),this.state={user:null,family:null,children:[],trips:[],events:[]},this._uid=null,this._unsubUser=null,this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this._currentFamilyId=null}get familyId(){return this._currentFamilyId}start(e){!v||!e||this._uid!==e&&(this.stop(),this._uid=e,this._unsubUser=G(z(v,"users",e),t=>{var r,a,l,n,d,c;this.state.user=t.exists()?{id:t.id,...t.data()}:null;const i=((r=this.state.user)==null?void 0:r.familyId)??((a=this.state.user)==null?void 0:a.cairnFamilyId)??null;i!==this._currentFamilyId&&(this._currentFamilyId=i,(l=this._unsubFamily)==null||l.call(this),(n=this._unsubChildren)==null||n.call(this),(d=this._unsubTrips)==null||d.call(this),(c=this._unsubEvents)==null||c.call(this),this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this.state.family=null,this.state.children=[],this.state.trips=[],this.state.events=[],i&&this._subscribeFamily(i)),this._emit()}))}_subscribeFamily(e){this._unsubFamily=G(z(v,"families",e),t=>{this.state.family=t.exists()?{id:t.id,...t.data()}:null,this._emit()}),this._unsubChildren=G(M(v,"families",e,"children"),t=>{this.state.children=t.docs.map(i=>{var a,l;const r=i.data();return{id:i.id,...r,dateOfBirth:((l=(a=r.dateOfBirth)==null?void 0:a.toDate)==null?void 0:l.call(a))??(r.dateOfBirth?new Date(r.dateOfBirth):null)}}),this._emit()}),this._unsubTrips=G(M(v,"families",e,"trips"),t=>{this.state.trips=t.docs.map(i=>{var a,l,n,d;const r=i.data();return{id:i.id,...r,start:r.start??"",end:r.end??"",createdAt:((l=(a=r.createdAt)==null?void 0:a.toDate)==null?void 0:l.call(a))??null,updatedAt:((d=(n=r.updatedAt)==null?void 0:n.toDate)==null?void 0:d.call(n))??null}}).sort((i,r)=>String(i.start).localeCompare(String(r.start))),this._emit()},t=>{console.warn("[Cairn] trips subscription error:",t.code,t.message)}),this._unsubEvents=G(M(v,"families",e,"familyEvents"),t=>{this.state.events=t.docs.map(i=>{var a,l,n,d;const r=i.data();return{id:i.id,...r,date:r.date??"",createdAt:((l=(a=r.createdAt)==null?void 0:a.toDate)==null?void 0:l.call(a))??null,updatedAt:((d=(n=r.updatedAt)==null?void 0:n.toDate)==null?void 0:d.call(n))??null}}),this._emit()},t=>{console.warn("[Cairn] familyEvents subscription error:",t.code,t.message)})}async saveTrip(e){var c;if(!v||!this._currentFamilyId)throw new Error("No family yet.");const t=(c=x==null?void 0:x.currentUser)==null?void 0:c.uid;if(!t)throw new Error("Not signed in.");const{id:i,createdAt:r,updatedAt:a,...l}=e,n={...l,updatedAt:D()};return i?(await I(z(v,"families",this._currentFamilyId,"trips",i),n),i):(n.createdBy=t,n.createdAt=D(),(await q(M(v,"families",this._currentFamilyId,"trips"),n)).id)}async deleteTrip(e){if(!v||!this._currentFamilyId)throw new Error("No family yet.");await V(z(v,"families",this._currentFamilyId,"trips",e))}async saveEvent(e){var c;if(!v||!this._currentFamilyId)throw new Error("No family yet.");const t=(c=x==null?void 0:x.currentUser)==null?void 0:c.uid;if(!t)throw new Error("Not signed in.");const{id:i,createdAt:r,updatedAt:a,...l}=e,n={...l,updatedAt:D()};return i?(await I(z(v,"families",this._currentFamilyId,"familyEvents",i),n),i):(n.createdBy=t,n.createdAt=D(),(await q(M(v,"families",this._currentFamilyId,"familyEvents"),n)).id)}async deleteEvent(e){if(!v||!this._currentFamilyId)throw new Error("No family yet.");await V(z(v,"families",this._currentFamilyId,"familyEvents",e))}async previewUrl(e){if(!e||typeof e!="string"||!/^https?:\/\//i.test(e.trim()))return null;if(!R)throw new Error("Firebase functions not configured.");return(await K(R,"previewUrl")({url:e.trim()})).data}async askPebble(e,t=[]){if(!R)throw new Error("Firebase functions not configured.");if(!this._currentFamilyId)throw new Error("No family yet.");return(await K(R,"askPebbleAboutActivities")({question:e,familyId:this._currentFamilyId,history:t})).data}async updateChildBirthday(e,t){if(!v||!this._currentFamilyId)throw new Error("No family yet.");await I(z(v,"families",this._currentFamilyId,"children",e),{dateOfBirth:t,updatedAt:D()})}async findFamilyByCairnCode(e){if(!v)throw new Error("Firebase not configured.");const t=Fe(M(v,"families"),Te("cairnInviteCode","==",e)),i=await Ae(t);if(i.empty)return null;const r=i.docs[0];return{id:r.id,...r.data()}}async joinFamilyAsCairn(e){var p,h,f;if(!v)throw new Error("Firebase not configured.");const t=(p=x==null?void 0:x.currentUser)==null?void 0:p.uid;if(!t)throw new Error("Not signed in.");const i=await this.findFamilyByCairnCode(e);if(!i){const y=new Error("Invite code not found.");throw y.code="not-found",y}const r=((f=(h=i.cairnInviteCodeExpiresAt)==null?void 0:h.toDate)==null?void 0:f.call(h))??(i.cairnInviteCodeExpiresAt?new Date(i.cairnInviteCodeExpiresAt):null);if(!r||r<new Date){const y=new Error("This invite code has expired.");throw y.code="expired",y}const a=i.cairnMemberIds??[];if(a.includes(t)||(i.memberIds??[]).includes(t)){const y=new Error("You're already in this family on Cairn.");throw y.code="already-member",y}const l=i.cairnMaxMembers??20;if(a.length>=l){const y=new Error("This family's Cairn ring is full.");throw y.code="full",y}const n=x.currentUser,d=new Date,c={displayName:n.displayName??"",profilePhotoURL:n.photoURL??null,role:"member",joinedAt:d,updatedAt:d};return await I(z(v,"families",i.id),{cairnMemberIds:[...a,t],[`memberProfiles.${t}`]:c,updatedAt:D()}),await Me(z(v,"users",t),{email:n.email??"",displayName:n.displayName??"",profilePhotoURL:n.photoURL??null,cairnFamilyId:i.id,role:"member",notificationPreferences:{milestoneReminders:!0,tipNotifications:!0,schoolDeadlines:!0},createdAt:D(),updatedAt:D()},{merge:!0}),i.id}async saveSubGroup({id:e,name:t,memberIds:i}){if(!v||!this._currentFamilyId)throw new Error("No family yet.");const r=e??`g_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`;return await I(z(v,"families",this._currentFamilyId),{[`subGroups.${r}`]:{name:t.trim(),memberIds:Array.isArray(i)?[...i]:[],updatedAt:D()},updatedAt:D()}),r}async deleteSubGroup(e){if(!v||!this._currentFamilyId)throw new Error("No family yet.");const{deleteField:t}=await Ge(async()=>{const{deleteField:i}=await import("./firebase-core-DVt9Aunh.js").then(r=>r.B);return{deleteField:i}},[]);await I(z(v,"families",this._currentFamilyId),{[`subGroups.${e}`]:t(),updatedAt:D()})}async regenerateCairnInviteCode(){if(!v||!this._currentFamilyId)throw new Error("No family yet.");const e=ct(),t=new Date(Date.now()+720*60*60*1e3);return await I(z(v,"families",this._currentFamilyId),{cairnInviteCode:e,cairnInviteCodeExpiresAt:t,updatedAt:D()}),{code:e,expiresAt:t}}stop(){var e,t,i,r,a;(e=this._unsubUser)==null||e.call(this),(t=this._unsubFamily)==null||t.call(this),(i=this._unsubChildren)==null||i.call(this),(r=this._unsubTrips)==null||r.call(this),(a=this._unsubEvents)==null||a.call(this),this._unsubUser=this._unsubFamily=this._unsubChildren=this._unsubTrips=this._unsubEvents=null,this._uid=null,this._currentFamilyId=null,this.state={user:null,family:null,children:[],trips:[],events:[]}}_emit(){this.dispatchEvent(new Event("change"))}}const w=new dt;function Re(o,e){const t=e==null?void 0:e.profilePhotoURL;return typeof t=="string"&&/^https?:\/\//i.test(t)?t:o!=null&&o.photoURL?o.photoURL:null}function ct(){const o="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="CAIRN-";for(let t=0;t<4;t++)e+=o[Math.floor(Math.random()*o.length)];return e}function pt(o,e,t,i,r){const a=[];a.push({uid:o,displayName:(e==null?void 0:e.displayName)??(t==null?void 0:t.displayName)??"You",photoURL:Re(e,t),role:"self",circles:["immediate"],hue:198});const l=(i==null?void 0:i.memberProfiles)??{};for(const[d,c]of Object.entries(l)){if(d===o)continue;const p=c.profilePhotoURL;a.push({uid:d,displayName:c.displayName??"Co-parent",photoURL:typeof p=="string"&&/^https?:\/\//i.test(p)?p:null,role:"co-parent",circles:["immediate"],hue:8})}let n=142;for(const d of r??[]){const c=d.profilePhotoURL;a.push({uid:`child:${d.id}`,displayName:d.name,photoURL:typeof c=="string"&&/^https?:\/\//i.test(c)?c:null,role:"child",circles:["immediate"],hue:n,dateOfBirth:d.dateOfBirth}),n=(n+58)%360}return a}function ht(o){const e=[];for(const t of o??[]){if(!t.dateOfBirth)continue;const i=t.dateOfBirth,r=i.getFullYear(),a=String(i.getMonth()+1).padStart(2,"0"),l=String(i.getDate()).padStart(2,"0");e.push({id:`bday:${t.id}`,type:"birthday",date:`${r}-${a}-${l}`,personIds:[`child:${t.id}`],title:`${t.name}'s birthday`,_childId:t.id,_childName:t.name,recurring:!0})}return e}function gt(o,e=new Date){if(!(o!=null&&o.date))return{date:null,yearsElapsed:0};const t=_(o.date);if(!t||Number.isNaN(t.getTime()))return{date:null,yearsElapsed:0};if(!o.recurring)return{date:t,yearsElapsed:0};const i=new Date(e.getFullYear(),t.getMonth(),t.getDate()),r=i<new Date(e.getFullYear(),e.getMonth(),e.getDate())?new Date(e.getFullYear()+1,t.getMonth(),t.getDate()):i,a=r.getFullYear()-t.getFullYear();return{date:r,yearsElapsed:a}}const Ce=["linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)","linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)","linear-gradient(135deg, #3d9b8f 0%, #1f5c54 100%)","linear-gradient(135deg, #d4a843 0%, #c67b5c 55%, #c98a8a 100%)","linear-gradient(135deg, #8b7bb5 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #6b9ac4 0%, #3d9b8f 100%)"];function _(o){if(!o)return null;if(o instanceof Date)return o;const e=String(o).match(/^(\d{4})-(\d{2})-(\d{2})/);return e?new Date(Number(e[1]),Number(e[2])-1,Number(e[3])):new Date(o)}async function ut(o,e=90,t=100){const i=new Date,r=new Date(i.getTime()+e*24*60*60*1e3),a=new URL("https://www.googleapis.com/calendar/v3/calendars/primary/events");a.searchParams.set("timeMin",i.toISOString()),a.searchParams.set("timeMax",r.toISOString()),a.searchParams.set("maxResults",String(t)),a.searchParams.set("singleEvents","true"),a.searchParams.set("orderBy","startTime");const l=await fetch(a.toString(),{headers:{Authorization:`Bearer ${o}`}});if(!l.ok){const d=await l.text();throw new Error(`Google Calendar: ${l.status} ${d.slice(0,160)}`)}return((await l.json()).items??[]).filter(d=>{var c,p;return d.status!=="cancelled"&&(((c=d.start)==null?void 0:c.date)||((p=d.start)==null?void 0:p.dateTime))})}function mt(o,e){var r,a,l,n,d,c,p,h;const t=((r=o.start)==null?void 0:r.date)??((l=(a=o.start)==null?void 0:a.dateTime)==null?void 0:l.slice(0,10))??"";let i=((n=o.end)==null?void 0:n.date)??((c=(d=o.end)==null?void 0:d.dateTime)==null?void 0:c.slice(0,10))??t;if((p=o.start)!=null&&p.date&&((h=o.end)!=null&&h.date)){const f=new Date(i);f.setDate(f.getDate()-1),i=f.toISOString().slice(0,10)}return{title:o.summary||"(untitled)",location:o.location??"",start:t,end:i,attendees:e?[e]:[],viewers:[],visibility:"family",notes:(o.description??"").slice(0,1e3),gcalEventId:o.id,gcalEventLink:o.htmlLink??null}}function ft(o){if(o!=null&&o.coverGradient)return o.coverGradient;const e=((o==null?void 0:o.title)??(o==null?void 0:o.id)??"")+((o==null?void 0:o.location)??"");let t=0;for(let i=0;i<e.length;i++)t=t*31+e.charCodeAt(i)>>>0;return Ce[t%Ce.length]}class ne extends ${constructor(){super(),this.start="",this.end="",this._displayMonth=null,this._hoverDate=null}willUpdate(e){if(e.has("start")||this._displayMonth===null){const t=this.start?_(this.start):new Date;this._displayMonth=new Date(t.getFullYear(),t.getMonth(),1)}}_isoFor(e,t,i){return`${e}-${String(t+1).padStart(2,"0")}-${String(i).padStart(2,"0")}`}_emit(e,t){this.start=e,this.end=t,this._hoverDate=null,this.dispatchEvent(new CustomEvent("range-change",{detail:{start:e,end:t},bubbles:!0,composed:!0}))}_onDayClick(e){if(!this.start||this.start&&this.end){this._emit(e,"");return}e<this.start?this._emit(e,this.start):this._emit(this.start,e)}_onDayHover(e){this.start&&!this.end&&(this._hoverDate=e)}_onLeave(){this._hoverDate=null}_shiftMonth(e){const t=this._displayMonth;this._displayMonth=new Date(t.getFullYear(),t.getMonth()+e,1)}_isToday(e,t,i){const r=new Date;return r.getFullYear()===e&&r.getMonth()===t&&r.getDate()===i}_inSelectedRange(e){return!this.start||!this.end?!1:e>this.start&&e<this.end}_inHoverRange(e){if(!this.start||this.end||!this._hoverDate)return!1;const t=this._hoverDate<this.start?this._hoverDate:this.start,i=this._hoverDate<this.start?this.start:this._hoverDate;return e>t&&e<i}_summary(){if(!this.start&&!this.end)return"Pick a start date";const e=t=>{const i=_(t);return i?i.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"}):""};return this.start&&!this.end?`From ${e(this.start)} — pick an end date`:this.start===this.end?e(this.start):`${e(this.start)} – ${e(this.end)}`}_renderGrid(){const e=this._displayMonth.getFullYear(),t=this._displayMonth.getMonth(),r=(new Date(e,t,1).getDay()+6)%7,a=new Date(e,t+1,0).getDate(),l=[];for(let n=0;n<r;n++)l.push(s`<div class="empty"></div>`);for(let n=1;n<=a;n++){const d=this._isoFor(e,t,n),c=d===this.start,p=d===this.end&&d!==this.start,h=this._inSelectedRange(d),f=this._inHoverRange(d),y=this._isToday(e,t,n),m=["day",c?"start":"",p?"end":"",h?"in-range":"",f?"hover-range":"",y&&!c&&!p?"today":""].filter(Boolean).join(" ");l.push(s`
        <button
          type="button"
          class=${m}
          @click=${()=>this._onDayClick(d)}
          @mouseover=${()=>this._onDayHover(d)}
        >
          ${n}
        </button>
      `)}return l}render(){if(!this._displayMonth)return s``;const e=this._displayMonth.toLocaleString("en-GB",{month:"long",year:"numeric"});return s`
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
    `}}g(ne,"properties",{start:{type:String},end:{type:String},_displayMonth:{state:!0},_hoverDate:{state:!0}}),g(ne,"styles",k`
    * { box-sizing: border-box; }
    :host {
      display: block;
    }
    .summary {
      font-family: var(--font-body);
      font-size: 15px;
      font-weight: 500;
      color: var(--text-primary);
      padding: 11px 14px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.16);
      border-radius: var(--radius-input);
      margin-bottom: 10px;
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
      font-size: 14px;
      letter-spacing: -0.005em;
    }
    .nav {
      width: 30px;
      height: 30px;
      border-radius: 999px;
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.14);
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 14px;
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
      font-size: 10.5px;
      color: var(--text-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      text-align: center;
      padding: 6px 0;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
    }
    .empty {
      aspect-ratio: 1 / 1;
    }
    .day {
      aspect-ratio: 1 / 1;
      background: transparent;
      border: none;
      border-radius: 6px;
      color: var(--text-primary);
      font: inherit;
      font-size: 13px;
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
  `);customElements.define("date-range-picker",ne);class oe extends ${constructor(){super(),this.open=!1,this.trip=null,this.members=[],this.currentUid="",this.familyId="",this.busy=!1,this.formMode="trip",this.subGroups={},this._draft=this._blankDraft(),this._error="",this._previewing=!1,this._previewError="",this._previewDebounce=null,this._lastPreviewedUrl=""}willUpdate(e){(e.has("trip")||e.has("open"))&&(this.open&&(this._draft=this._draftFromTrip(this.trip)),this._error="")}_blankDraft(){const e=new Date().toISOString().slice(0,10);return{id:null,title:"",location:"",start:e,end:e,visibility:"family",attendees:this.currentUid?[this.currentUid]:[],viewers:[],targetSubGroups:[],lodgingUrl:"",lodgingHost:"",lodgingTitle:"",flightAirline:"",flightNumber:"",flightDepartAirport:"",flightDepartTime:"",flightArriveAirport:"",flightArriveTime:"",notes:""}}_draftFromTrip(e){return e?{id:e.id??null,title:e.title??"",location:e.location??"",start:e.start??new Date().toISOString().slice(0,10),end:e.end??e.start??new Date().toISOString().slice(0,10),visibility:e.visibility??"family",attendees:Array.isArray(e.attendees)?[...e.attendees]:[],viewers:Array.isArray(e.viewers)?[...e.viewers]:[],targetSubGroups:Array.isArray(e.targetSubGroups)?[...e.targetSubGroups]:[],lodgingUrl:e.lodgingUrl??"",lodgingHost:e.lodgingHost??"",lodgingTitle:e.lodgingTitle??"",flightAirline:e.flightAirline??"",flightNumber:e.flightNumber??"",flightDepartAirport:e.flightDepartAirport??"",flightDepartTime:e.flightDepartTime??"",flightArriveAirport:e.flightArriveAirport??"",flightArriveTime:e.flightArriveTime??"",coverImage:e.coverImage??"",notes:e.notes??""}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_onLodgingChange(e){this._set("lodgingUrl",e),this._previewError="",this._previewDebounce&&clearTimeout(this._previewDebounce);const t=e.trim();if(!t){this._set("coverImage",""),this._set("lodgingHost",""),this._set("lodgingTitle",""),this._lastPreviewedUrl="";return}/^https?:\/\//i.test(t)&&t!==this._lastPreviewedUrl&&(this._previewDebounce=setTimeout(()=>this._runPreview(t),700))}async _runPreview(e){this._previewing=!0,this._previewError="";try{const t=await w.previewUrl(e);if(!t)return;this._lastPreviewedUrl=e,this._draft={...this._draft,coverImage:t.image??this._draft.coverImage,lodgingHost:t.siteName??t.host??this._draft.lodgingHost,lodgingTitle:t.title??this._draft.lodgingTitle}}catch(t){console.warn("Preview failed:",t),(t==null?void 0:t.code)==="functions/unauthenticated"?this._previewError="Preview unavailable — sign in.":(t==null?void 0:t.code)==="functions/invalid-argument"?this._previewError="That URL doesn’t look right.":this._previewError="Preview unavailable — paste it again or skip."}finally{this._previewing=!1}}_toggleAttendee(e){const t=this._draft.attendees.includes(e),i=t?this._draft.attendees.filter(a=>a!==e):[...this._draft.attendees,e];let r=this._draft.viewers??[];t||(r=r.filter(a=>a!==e)),this._draft={...this._draft,attendees:i,viewers:r}}_toggleViewer(e){if(this._draft.attendees.includes(e))return;const i=(this._draft.viewers??[]).includes(e)?this._draft.viewers.filter(r=>r!==e):[...this._draft.viewers??[],e];this._set("viewers",i)}_toggleSubGroup(e){const i=(this._draft.targetSubGroups??[]).includes(e)?this._draft.targetSubGroups.filter(r=>r!==e):[...this._draft.targetSubGroups??[],e];this._set("targetSubGroups",i)}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give the trip a title.";return}if(!e.start||!e.end){this._error="Set both start and end dates.";return}if(e.end<e.start){this._error="End date can’t be before start date.";return}if(!this.familyId){this._error="You need to be in a family first.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,title:e.title.trim(),location:e.location.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this trip? This can’t be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return s``;const e=this._draft,t=!!e.id;return s`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>${t?"Edit activity":this.formMode==="activity"?"New group activity":"New family trip"}</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <div class="row-2">
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
              <label>Location</label>
              <input
                type="text"
                placeholder="City, country"
                .value=${e.location}
                @input=${i=>this._set("location",i.target.value)}
              />
            </div>
          </div>

          <div class="field">
            <label>Dates</label>
            <date-range-picker
              .start=${e.start}
              .end=${e.end}
              @range-change=${i=>{this._draft={...this._draft,start:i.detail.start,end:i.detail.end||i.detail.start}}}
            ></date-range-picker>
          </div>

          <div class=${this.formMode==="activity"?"field":"row-2"}>
            <div class="field" style=${this.formMode==="activity"?"margin-bottom:0;":""}>
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
            ${this.formMode!=="activity"?s`
                  <div class="field">
                    <label>Lodging URL</label>
                    <input
                      type="url"
                      placeholder="airbnb.com/… or booking.com/…"
                      .value=${e.lodgingUrl}
                      @input=${i=>this._onLodgingChange(i.target.value)}
                    />
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

          <div class="field">
            <label>Also visible to <span style="text-transform:none;font-weight:400;color:var(--text-tertiary);letter-spacing:0.01em;">(without going)</span></label>
            <div class="attendees">
              ${this.members.filter(i=>!e.attendees.includes(i.uid)).map(i=>s`
                    <div
                      class="att-chip ${(e.viewers??[]).includes(i.uid)?"on":""}"
                      @click=${()=>this._toggleViewer(i.uid)}
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
              ${this.members.filter(i=>!e.attendees.includes(i.uid)).length===0?s`<span style="color:var(--text-tertiary);font-size:13px;">
                    Everyone is going — no extra viewers needed.
                  </span>`:""}
            </div>
          </div>

          ${this.formMode==="activity"?"":s`
          <fieldset class="flight-section">
            <legend>Flight (optional)</legend>
            <div class="row-2">
              <div class="field" style="margin-bottom:0;">
                <label>Airline</label>
                <input
                  type="text"
                  placeholder="e.g. Air France"
                  .value=${e.flightAirline}
                  @input=${i=>this._set("flightAirline",i.target.value)}
                />
              </div>
              <div class="field" style="margin-bottom:0;">
                <label>Flight number</label>
                <input
                  type="text"
                  placeholder="AF1234"
                  .value=${e.flightNumber}
                  @input=${i=>this._set("flightNumber",i.target.value)}
                />
              </div>
            </div>

            <div class="leg-label">Departure</div>
            <div class="row-3">
              <div class="field" style="margin-bottom:0;">
                <input
                  type="text"
                  placeholder="CDG"
                  maxlength="4"
                  .value=${e.flightDepartAirport}
                  @input=${i=>this._set("flightDepartAirport",i.target.value)}
                />
              </div>
              <div class="field" style="margin-bottom:0;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary);font-size:18px;">→</div>
              <div class="field" style="margin-bottom:0;">
                <input
                  type="datetime-local"
                  .value=${e.flightDepartTime}
                  @input=${i=>this._set("flightDepartTime",i.target.value)}
                />
              </div>
            </div>

            <div class="leg-label">Arrival</div>
            <div class="row-3">
              <div class="field" style="margin-bottom:0;">
                <input
                  type="text"
                  placeholder="NCE"
                  maxlength="4"
                  .value=${e.flightArriveAirport}
                  @input=${i=>this._set("flightArriveAirport",i.target.value)}
                />
              </div>
              <div class="field" style="margin-bottom:0;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary);font-size:18px;">→</div>
              <div class="field" style="margin-bottom:0;">
                <input
                  type="datetime-local"
                  .value=${e.flightArriveTime}
                  @input=${i=>this._set("flightArriveTime",i.target.value)}
                />
              </div>
            </div>
            <div class="hint">
              Auto-fill from confirmation email arrives in a later phase. Manual entry for now.
            </div>
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
              ${this.busy?"Saving…":t?"Save changes":"Create activity"}
            </glass-button>
          </div>
        </glass-panel>
      </div>
    `}}g(oe,"properties",{open:{type:Boolean,reflect:!0},trip:{type:Object},members:{type:Array},currentUid:{type:String},familyId:{type:String},busy:{type:Boolean},formMode:{type:String},subGroups:{type:Object},_draft:{state:!0},_error:{state:!0},_previewing:{state:!0},_previewError:{state:!0}}),g(oe,"styles",k`
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
      font-size: 11.5px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    input[type='text'],
    input[type='url'],
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
    @media (max-width: 560px) {
      .row-2,
      .row-dates {
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
      .actions {
        flex-wrap: wrap;
      }
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
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
    }
    .attendees {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
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
  `);customElements.define("trip-form",oe);class le extends ${constructor(){super(),this.open=!1,this.event=null,this.members=[],this.familyId="",this.busy=!1,this._draft=this._blankDraft(),this._error=""}willUpdate(e){(e.has("event")||e.has("open"))&&(this.open&&(this._draft=this._draftFromEvent(this.event)),this._error="")}_blankDraft(){return{id:null,type:"birthday",title:"",date:new Date().toISOString().slice(0,10),personIds:[],recurring:!0,subtitle:"",notes:"",visibility:"family"}}_draftFromEvent(e){return e?{id:e.id??null,type:e.type??"birthday",title:e.title??"",date:e.date??new Date().toISOString().slice(0,10),personIds:Array.isArray(e.personIds)?[...e.personIds]:[],recurring:e.recurring??!0,subtitle:e.subtitle??"",notes:e.notes??"",visibility:e.visibility??"family"}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_toggleType(e){this._set("type",e)}_togglePerson(e){const t=this._draft.personIds.includes(e);this._set("personIds",t?this._draft.personIds.filter(i=>i!==e):[...this._draft.personIds,e])}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give it a title.";return}if(!e.date){this._error="Pick a date.";return}if(!this.familyId){this._error="No family yet.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,title:e.title.trim(),subtitle:e.subtitle.trim(),notes:e.notes.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this event? This can't be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return s``;const e=this._draft,t=!!e.id;return s`
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
    `}_monthDay(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?"":t.toLocaleString("en-GB",{day:"numeric",month:"long"})}}g(le,"properties",{open:{type:Boolean,reflect:!0},event:{type:Object},members:{type:Array},familyId:{type:String},busy:{type:Boolean},_draft:{state:!0},_error:{state:!0}}),g(le,"styles",k`
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
      font-size: 11.5px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: 0.06em;
      text-transform: uppercase;
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
  `);customElements.define("event-form",le);let A=null,Se=null;function bt(){return A||(A=document.createElement("div"),A.id="cairn-toast-host",Object.assign(A.style,{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",zIndex:9999,pointerEvents:"none"}),document.body.appendChild(A),A)}function u(o,{duration:e=2800}={}){const t=bt();clearTimeout(Se),t.innerHTML="";const i=document.createElement("div");i.textContent=o,Object.assign(i.style,{padding:"12px 18px",background:"rgba(20, 12, 6, 0.78)",backdropFilter:"blur(24px) saturate(180%)",webkitBackdropFilter:"blur(24px) saturate(180%)",border:"1px solid rgba(255, 248, 235, 0.22)",borderRadius:"999px",color:"rgba(255, 248, 235, 0.96)",fontFamily:"'Inter', system-ui, sans-serif",fontSize:"13.5px",fontWeight:"500",letterSpacing:"0.005em",boxShadow:"0 12px 32px rgba(20, 12, 6, 0.45)",pointerEvents:"auto",transform:"translateY(8px)",opacity:"0",transition:"opacity 200ms ease, transform 240ms ease"}),t.appendChild(i),requestAnimationFrame(()=>{i.style.opacity="1",i.style.transform="translateY(0)"}),Se=setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(8px)",setTimeout(()=>i.remove(),260)},e)}class de extends ${constructor(){super(),this.open=!1,this.family=null,this.immediate=[],this.extended=[],this._busy=!1,this._newGroupName="",this._editingGroupId=null}_onCancel(){this.dispatchEvent(new Event("cancel"))}async _createSubGroup(){const e=this._newGroupName.trim();if(!(!e||this._busy)){this._busy=!0;try{const t=await w.saveSubGroup({name:e,memberIds:[]});this._newGroupName="",this._editingGroupId=t,u(`Sub-group "${e}" created.`)}catch(t){u(`Couldn't create: ${t.code??t.message}`,{duration:5e3})}finally{this._busy=!1}}}async _toggleSubGroupMember(e,t){var l,n;const i=(n=(l=this.family)==null?void 0:l.subGroups)==null?void 0:n[e];if(!i)return;const r=i.memberIds??[],a=r.includes(t)?r.filter(d=>d!==t):[...r,t];try{await w.saveSubGroup({id:e,name:i.name,memberIds:a})}catch(d){u(`Couldn't update: ${d.code??d.message}`,{duration:5e3})}}async _deleteSubGroup(e,t){if(confirm(`Delete the "${t}" sub-group?`))try{await w.deleteSubGroup(e),this._editingGroupId===e&&(this._editingGroupId=null),u("Sub-group deleted.")}catch(i){u(`Couldn't delete: ${i.code??i.message}`,{duration:5e3})}}async _regenerate(){if(!this._busy){this._busy=!0;try{await w.regenerateCairnInviteCode(),u("New invite code generated.")}catch(e){console.error(e),u(`Couldn't generate code: ${e.code??e.message}`,{duration:5e3})}finally{this._busy=!1}}}_inviteLink(e){return`${window.location.origin}/cairn/?join=${e}`}async _copyLink(){var t;const e=(t=this.family)==null?void 0:t.cairnInviteCode;if(e)try{await navigator.clipboard.writeText(this._inviteLink(e)),u("Invite link copied to clipboard.")}catch{u("Could not copy — try long-press the link instead.")}}async _share(){var i,r;const e=(i=this.family)==null?void 0:i.cairnInviteCode;if(!e)return;const t=this._inviteLink(e);if(navigator.share)try{await navigator.share({title:"Join my family on Cairn",text:`Join ${((r=this.family)==null?void 0:r.name)??"our family"} on Cairn — our shared family calendar.`,url:t})}catch{}else this._copyLink()}_expiryText(e){if(!e)return"";const t=e.toDate?e.toDate():new Date(e),r=Math.max(0,Math.round((t-new Date)/(1440*60*1e3)));return r===0?"Expires today":r===1?"Expires tomorrow":`Expires in ${r} days`}render(){var r,a,l,n;if(!this.open)return s``;const e=(r=this.family)==null?void 0:r.cairnInviteCode,t=(a=this.family)==null?void 0:a.cairnInviteCodeExpiresAt,i=t&&(t.toDate?t.toDate():new Date(t))<new Date;return s`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Manage members</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <h3>Immediate family · ${this.immediate.length}</h3>
          ${this.immediate.length===0?s`<div class="empty">No one in immediate yet.</div>`:this.immediate.map(d=>s`
                  <div class="member-row">
                    <member-chip
                      .name=${d.displayName}
                      .photo=${d.photoURL??""}
                      .hue=${d.hue}
                      size="36"
                    ></member-chip>
                    <div class="body">
                      <div class="name">${d.displayName}</div>
                      <div class="role">
                        ${d.role==="self"?"You":d.role==="co-parent"?"Co-parent (PebblePath)":d.role==="child"?"Child":"Family"}
                      </div>
                    </div>
                  </div>
                `)}

          <h3>Extended family · ${this.extended.length}</h3>
          ${this.extended.length===0?s`<div class="empty">
                Anyone you invite via Cairn (grandparents, aunts, uncles, etc.) will appear here.
                They can see trips and celebrations but not PebblePath child data.
              </div>`:this.extended.map(d=>s`
                  <div class="member-row">
                    <member-chip
                      .name=${d.displayName}
                      .photo=${d.photoURL??""}
                      .hue=${d.hue}
                      size="36"
                    ></member-chip>
                    <div class="body">
                      <div class="name">${d.displayName}</div>
                      <div class="role">Cairn — extended</div>
                    </div>
                  </div>
                `)}

          ${this.extended.length>0||Object.keys(((l=this.family)==null?void 0:l.subGroups)??{}).length>0?s`
                <h3>Sub-groups</h3>
                ${Object.entries(((n=this.family)==null?void 0:n.subGroups)??{}).map(([d,c])=>s`
                    <div class="subgroup">
                      <div class="subgroup-head">
                        <div>
                          <span class="subgroup-name">${c.name}</span>
                          <span class="count">${(c.memberIds??[]).length} ${(c.memberIds??[]).length===1?"member":"members"}</span>
                        </div>
                        <div class="subgroup-actions">
                          <button
                            class="icon-btn"
                            title=${this._editingGroupId===d?"Done":"Edit members"}
                            @click=${()=>this._editingGroupId=this._editingGroupId===d?null:d}
                          >
                            ${this._editingGroupId===d?"✓":"✎"}
                          </button>
                          <button
                            class="icon-btn danger"
                            title="Delete"
                            @click=${()=>this._deleteSubGroup(d,c.name)}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                      ${this._editingGroupId===d?s`
                            <div style="margin-top:4px;">
                              ${this.extended.map(p=>s`
                                  <span
                                    class="chip-toggle ${(c.memberIds??[]).includes(p.uid)?"on":""}"
                                    @click=${()=>this._toggleSubGroupMember(d,p.uid)}
                                  >
                                    <member-chip
                                      .name=${p.displayName}
                                      .photo=${p.photoURL??""}
                                      .hue=${p.hue}
                                      size="20"
                                    ></member-chip>
                                    ${p.displayName}
                                  </span>
                                `)}
                              ${this.extended.length===0?s`<span style="color:var(--text-tertiary);font-size:13px;">
                                    Invite extended family first, then group them here.
                                  </span>`:""}
                            </div>
                          `:(c.memberIds??[]).length>0?s`<div style="margin-top:4px;">
                            ${(c.memberIds??[]).map(p=>{const h=this.extended.find(f=>f.uid===p);return h?s`<span class="chip-toggle on" style="cursor:default;">
                                <member-chip
                                  .name=${h.displayName}
                                  .photo=${h.photoURL??""}
                                  .hue=${h.hue}
                                  size="20"
                                ></member-chip>
                                ${h.displayName}
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
                    @input=${d=>this._newGroupName=d.target.value}
                    @keydown=${d=>{d.key==="Enter"&&this._createSubGroup()}}
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
    `}}g(de,"properties",{open:{type:Boolean,reflect:!0},family:{type:Object},immediate:{type:Array},extended:{type:Array},_busy:{state:!0},_newGroupName:{state:!0},_editingGroupId:{state:!0}}),g(de,"styles",k`
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
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--text-secondary);
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
      font-size: 11.5px;
      color: var(--text-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
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
  `);customElements.define("manage-members-modal",de);function vt(o,e){const t=[];if(t.push(o.title||"Cairn activity"),o.location&&t.push(o.location),o.start&&o.end){const r=_(o.start),a=_(o.end),l=r.toLocaleString("en-GB",{day:"numeric",month:"short"}),n=a.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});t.push(o.start===o.end?n:`${l} – ${n}`)}if((o.lodgingHost||o.lodgingTitle)&&t.push(`Lodging: ${[o.lodgingHost,o.lodgingTitle].filter(Boolean).join(" — ")}`),o.flightNumber||o.flightAirline||o.flightDepartAirport){const r=[],a=[o.flightAirline,o.flightNumber].filter(Boolean).join(" ");if(a&&r.push(a),o.flightDepartAirport&&o.flightArriveAirport&&r.push(`${o.flightDepartAirport.toUpperCase()} → ${o.flightArriveAirport.toUpperCase()}`),o.flightDepartTime){const l=new Date(o.flightDepartTime);Number.isNaN(l.getTime())||r.push(`Depart: ${l.toLocaleString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}`)}r.length&&t.push(`Flight: ${r.join(" · ")}`)}const i=(o.attendees??[]).map(r=>{var a;return(a=e.get(r))==null?void 0:a.displayName}).filter(Boolean);return i.length&&t.push(`With: ${i.join(", ")}`),o.notes&&t.push("",o.notes),t.push("","Shared from Cairn · pebblepath.ai/cairn"),t.join(`
`)}class ce extends ${constructor(){super(),this.trip=null,this.members=[]}_fmtDates(e,t){const i=_(e),r=_(t);if(!i||!r)return"";const a=i.toLocaleString("en-GB",{month:"short"}),l=r.toLocaleString("en-GB",{month:"short"});return a===l&&i.getFullYear()===r.getFullYear()?`${i.getDate()}–${r.getDate()} ${a}`:`${i.getDate()} ${a} – ${r.getDate()} ${l}`}async _onShare(e,t,i){i.stopPropagation();const r=vt(e,t);if(navigator.share)try{await navigator.share({title:`Cairn — ${e.title??"activity"}`,text:r})}catch{}else try{await navigator.clipboard.writeText(r),u("Itinerary copied to clipboard.")}catch{u("Could not copy — try again from a browser tab.")}}render(){const e=this.trip;if(!e)return s``;const t=e.coverImage?`background-image: url(${e.coverImage});`:`background: ${ft(e)};`,i=new Map(this.members.map(n=>[n.uid,n])),r=(e.attendees??[]).map(n=>i.get(n)).filter(Boolean),a=r.slice(0,4),l=Math.max(0,r.length-a.length);return s`
      <article
        tabindex="0"
        aria-label=${e.title}
        @click=${()=>this.dispatchEvent(new CustomEvent("edit-trip",{detail:e,bubbles:!0,composed:!0}))}
        @keydown=${n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.dispatchEvent(new CustomEvent("edit-trip",{detail:e,bubbles:!0,composed:!0})))}}
      >
        <div class="cover" style=${t}>
          <div class="visibility">${e.visibility??"family"}</div>
          <div class="dates">${this._fmtDates(e.start,e.end)}</div>
        </div>
        <div class="body">
          <h3>${e.title}</h3>
          <div class="location">${e.location||"—"}</div>
          ${e.lodgingUrl||e.lodgingHost?s`<div class="lodging">
                ${e.lodgingHost?s`<span class="pill">${e.lodgingHost}</span>`:""}
                <span>${e.lodgingTitle||e.lodgingUrl||""}</span>
              </div>`:""}
          ${e.flightNumber||e.flightDepartAirport?s`<div class="flight-info">
                <span class="plane">✈</span>
                <span>${[e.flightAirline,e.flightNumber].filter(Boolean).join(" ")}</span>
                ${e.flightDepartAirport&&e.flightArriveAirport?s`<span class="route">${e.flightDepartAirport.toUpperCase()} → ${e.flightArriveAirport.toUpperCase()}</span>`:""}
              </div>`:""}
          <div class="footer">
            <div class="attendees">
              ${a.map(n=>s`<member-chip name=${n.displayName} .hue=${n.hue} size="28"></member-chip>`)}
              ${l>0?s`<span class="more">+${l}</span>`:""}
            </div>
            <button
              class="share-btn"
              title="Share itinerary"
              aria-label="Share itinerary"
              @click=${n=>this._onShare(e,i,n)}
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
    `}}g(ce,"properties",{trip:{type:Object},members:{type:Array}}),g(ce,"styles",k`
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
    .cover::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(20, 12, 6, 0.55) 100%);
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
      align-items: center;
      gap: 6px;
    }
    .lodging .pill {
      padding: 2px 8px;
      border-radius: var(--radius-pill);
      background: rgba(255, 248, 235, 0.08);
      border: 1px solid rgba(255, 248, 235, 0.14);
      font-weight: 500;
      color: var(--text-secondary);
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
  `);customElements.define("trip-card",ce);class pe extends ${constructor(){super(),this.open=!1,this.trips=[],this.members=[]}_onCancel(){this.dispatchEvent(new Event("cancel"))}_groupByYear(e){const t=[...e].sort((a,l)=>String(a.start).localeCompare(String(l.start))),i=new Date;i.setHours(0,0,0,0);const r=new Map;for(const a of t){if(!a.start)continue;const l=_(a.start),n=_(a.end);if(!l)continue;const d=l.getFullYear();r.has(d)||r.set(d,[]);const c=n?n<i:!1;r.get(d).push({trip:a,isPast:c})}return r}render(){var r;if(!this.open)return s``;const e=this._groupByYear(this.trips??[]),t=((r=this.trips)==null?void 0:r.length)??0,i=new Date().getFullYear();return s`
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
              </div>`:Array.from(e.entries()).map(([a,l])=>s`
                  <div class="year ${a===i?"current":""}">
                    ${a}
                  </div>
                  <div class="grid">
                    ${l.map(({trip:n,isPast:d})=>s`
                        <div class=${d?"past":""}>
                          <trip-card .trip=${n} .members=${this.members}></trip-card>
                        </div>
                      `)}
                  </div>
                `)}
        </glass-panel>
      </div>
    `}}g(pe,"properties",{open:{type:Boolean,reflect:!0},trips:{type:Array},members:{type:Array}}),g(pe,"styles",k`
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
  `);customElements.define("all-trips-modal",pe);class he extends ${constructor(){super(),this.open=!1,this._events=[],this._selected=new Set,this._loading=!1,this._error="",this._importing=!1}willUpdate(e){e.has("open")&&this.open&&this._events.length===0&&!this._loading&&this._load()}async _load(){var e,t,i,r,a,l;this._loading=!0,this._error="";try{const n=await Be(),d=await ut(n,90),c=new Set((w.state.trips??[]).filter(h=>h.gcalEventId).map(h=>h.gcalEventId));this._events=d.map(h=>({...h,_alreadyImported:c.has(h.id)}));const p=new Set;for(const h of this._events){if(h._alreadyImported)continue;const f=((e=h.start)==null?void 0:e.date)??((i=(t=h.start)==null?void 0:t.dateTime)==null?void 0:i.slice(0,10)),y=((r=h.end)==null?void 0:r.date)??((l=(a=h.end)==null?void 0:a.dateTime)==null?void 0:l.slice(0,10));f&&y&&y!==f&&p.add(h.id)}this._selected=p}catch(n){console.error(n),this._error=(n==null?void 0:n.message)??"Could not load calendar events."}finally{this._loading=!1}}_toggle(e){const t=new Set(this._selected);t.has(e)?t.delete(e):t.add(e),this._selected=t}_toggleAll(){const e=this._events.filter(t=>!t._alreadyImported);this._selected.size===e.length?this._selected=new Set:this._selected=new Set(e.map(t=>t.id))}async _import(){var a;if(this._importing||this._selected.size===0)return;this._importing=!0;const e=(a=x==null?void 0:x.currentUser)==null?void 0:a.uid,t=this._events.filter(l=>this._selected.has(l.id));let i=0,r=0;for(const l of t){const n=mt(l,e);try{await w.saveTrip(n),i++}catch(d){console.error("Import failed for event",l.id,d),r++}}this._importing=!1,r===0?u(`Imported ${i} ${i===1?"activity":"activities"}.`):u(`Imported ${i}, ${r} failed.`,{duration:5e3}),this._events=[],this._selected=new Set,this.dispatchEvent(new Event("cancel"))}_onCancel(){this.dispatchEvent(new Event("cancel"))}_fmtRange(e){var p,h,f,y,m,E,C,T;const t=((p=e.start)==null?void 0:p.date)??((f=(h=e.start)==null?void 0:h.dateTime)==null?void 0:f.slice(0,10)),i=((y=e.end)==null?void 0:y.date)??((E=(m=e.end)==null?void 0:m.dateTime)==null?void 0:E.slice(0,10));if(!t)return"";const r=new Date(t);if(!i||i===t)return r.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});let a=new Date(i);(C=e.start)!=null&&C.date&&((T=e.end)!=null&&T.date)&&a.setDate(a.getDate()-1);const l=r.getMonth()===a.getMonth()&&r.getFullYear()===a.getFullYear(),n=r.getFullYear()===a.getFullYear();if(l)return`${r.getDate()}–${a.getDate()} ${r.toLocaleString("en-GB",{month:"short",year:"numeric"})}`;const d=r.toLocaleString("en-GB",{day:"numeric",month:"short"}),c=a.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});return n?`${d} – ${c}`:`${r.toLocaleDateString()} – ${a.toLocaleDateString()}`}render(){if(!this.open)return s``;const e=this._events.filter(i=>!i._alreadyImported),t=e.length>0&&this._selected.size===e.length;return s`
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

          ${this._loading?s`<div class="loading">Loading your calendar…</div>`:this._error?s`<div class="error">${this._error}</div>`:this._events.length===0?s`<div class="empty">No events found in the next 90 days.</div>`:s`
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
              `}
        </glass-panel>
      </div>
    `}}g(he,"properties",{open:{type:Boolean,reflect:!0},_events:{state:!0},_selected:{state:!0},_loading:{state:!0},_error:{state:!0},_importing:{state:!0}}),g(he,"styles",k`
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
  `);customElements.define("import-calendar-modal",he);class ge extends ${constructor(){super(),this.open=!1,this.user=null,this.pebbleUser=null,this._name="",this._savingName=!1,this._uploadingPhoto=!1}willUpdate(e){var t;e.has("open")&&this.open&&(this._name=((t=this.user)==null?void 0:t.displayName)??"")}_onCancel(){this.dispatchEvent(new Event("cancel"))}async _saveName(){var t,i;const e=this._name.trim();if(!(!e||e===(((t=this.user)==null?void 0:t.displayName)??""))&&!(!((i=x==null?void 0:x.currentUser)!=null&&i.uid)||!v)){this._savingName=!0;try{await I(z(v,"users",x.currentUser.uid),{displayName:e,updatedAt:D()}),u("Display name updated.")}catch(r){console.error(r),u(`Couldn't save: ${r.code??r.message}`,{duration:5e3})}finally{this._savingName=!1}}}async _signOut(){confirm("Sign out of Cairn?")&&(this.dispatchEvent(new Event("cancel")),await Le())}_triggerPhotoPicker(){var e;(e=this.renderRoot.querySelector("#photo-file"))==null||e.click()}async _onPhotoChosen(e){var a,l;const t=(a=e.target.files)==null?void 0:a[0];if(e.target.value="",!t)return;if(!t.type.startsWith("image/")){u("Pick an image file (JPG, PNG, etc.).");return}if(t.size>5*1024*1024){u("Photo is too big — keep it under 5 MB.");return}const i=(l=x==null?void 0:x.currentUser)==null?void 0:l.uid,r=w.familyId;if(!i||!r||!re){u("Can't upload yet — you need to be in a family first.");return}this._uploadingPhoto=!0;try{const n=je(re,`families/${r}/avatars/users/${i}`);await Pe(n,t,{contentType:t.type});const d=await Oe(n);await I(z(v,"users",i),{profilePhotoURL:d,updatedAt:D()}),u("Photo updated.")}catch(n){console.error("Photo upload failed",n),u(`Upload failed: ${n.code??n.message}`,{duration:5e3})}finally{this._uploadingPhoto=!1}}render(){if(!this.open)return s``;const e=this.user,t=this._name.trim()&&this._name.trim()!==((e==null?void 0:e.displayName)??"");return s`
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
    `}}g(ge,"properties",{open:{type:Boolean,reflect:!0},user:{type:Object},pebbleUser:{type:Object},_name:{state:!0},_savingName:{state:!0},_uploadingPhoto:{state:!0}}),g(ge,"styles",k`
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
      font-size: 11.5px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: 0.06em;
      text-transform: uppercase;
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
  `);customElements.define("profile-sheet",ge);const B=class B extends ${constructor(){super(),this.open=!1}_pick(e){this.dispatchEvent(new CustomEvent("pick",{detail:{type:e}}))}_cancel(){this.dispatchEvent(new Event("cancel"))}render(){return this.open?s`
      <div class="backdrop" @click=${this._cancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>What are you adding?</h2>
            <button class="close" @click=${this._cancel} aria-label="Close">×</button>
          </div>
          <div class="options">
            ${B.OPTIONS.map(e=>s`
                <button class="option" @click=${()=>this._pick(e.type)}>
                  <span class="icon-cell" aria-hidden="true">${e.icon}</span>
                  <span>
                    <div class="label">${e.label}</div>
                    <div class="desc">${e.desc}</div>
                  </span>
                </button>
              `)}
          </div>
        </glass-panel>
      </div>
    `:s``}};g(B,"properties",{open:{type:Boolean,reflect:!0}}),g(B,"OPTIONS",[{type:"activity",icon:"🌿",label:"Group activity",desc:"Weekend plans, outings, day trips — no lodging or flights needed."},{type:"trip",icon:"✈️",label:"Family trip",desc:"Multi-day travel with lodging, flight info, attendees."},{type:"event",icon:"🎂",label:"Birthday or anniversary",desc:"Recurring celebration on a specific date."}]),g(B,"styles",k`
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
      font-size: 22px;
      flex-shrink: 0;
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
  `);let ue=B;customElements.define("activity-type-picker",ue);class me extends ${constructor(){super(),this.open=!1,this.family=null,this.trips=[],this._messages=[],this._input="",this._loading=!1,this._error=""}_onCancel(){this.dispatchEvent(new Event("cancel"))}_suggestions(){const e=[],t=(this.trips??[]).filter(i=>i.start&&new Date(i.start)>=new Date).sort((i,r)=>String(i.start).localeCompare(String(r.start)))[0];return t&&(e.push(`What should we do in ${t.location||t.title}?`),e.push(`What should we pack for ${t.title}?`)),e.push("Plan a family activity for this weekend"),e.push("Gift ideas for an upcoming birthday"),e.slice(0,4)}async _send(e){const t=(e??this._input).trim();if(!(!t||this._loading)){this._error="",this._input="",this._messages=[...this._messages,{role:"user",content:t}],this._loading=!0,this.updateComplete.then(()=>this._scrollToBottom());try{const i=this._messages.slice(0,-1).map(a=>({role:a.role,content:a.content})),r=await w.askPebble(t,i);this._messages=[...this._messages,{role:"assistant",content:r.answer}]}catch(i){console.error(i),(i==null?void 0:i.code)==="functions/unauthenticated"?this._error="Pebble needs you to be signed in.":(i==null?void 0:i.code)==="functions/permission-denied"?this._error="You're not in this family yet.":(i==null?void 0:i.code)==="functions/not-found"||(i==null?void 0:i.code)==="functions/internal"?this._error="Pebble isn't available right now — the Cloud Function may not be deployed yet.":this._error=(i==null?void 0:i.message)??"Pebble could not answer right now."}finally{this._loading=!1,this.updateComplete.then(()=>this._scrollToBottom())}}}_scrollToBottom(){const e=this.renderRoot.querySelector(".thread");e&&(e.scrollTop=e.scrollHeight)}_renderPebbleIcon(){return s`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
      </svg>
    `}render(){if(!this.open)return s``;const e=this._suggestions();return s`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
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
                  ${this._loading?s`<div class="typing"><span></span><span></span><span></span></div>`:""}
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
        </glass-panel>
      </div>
    `}}g(me,"properties",{open:{type:Boolean,reflect:!0},family:{type:Object},trips:{type:Array},_messages:{state:!0},_input:{state:!0},_loading:{state:!0},_error:{state:!0}}),g(me,"styles",k`
    * { box-sizing: border-box; }
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: none;
      align-items: flex-end;
      justify-content: center;
      padding: 5vh 24px 24px;
    }
    @media (min-width: 720px) {
      :host {
        align-items: center;
        padding: 6vh 24px;
      }
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
      max-width: 560px;
      height: min(680px, 90vh);
      display: flex;
      flex-direction: column;
      animation: rise 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes rise {
      from { transform: translateY(20px); opacity: 0; }
      to   { transform: translateY(0); opacity: 1; }
    }
    glass-panel {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
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
      overflow-y: auto;
      margin: 6px -8px;
      padding: 6px 8px 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
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
  `);customElements.define("pebble-chat",me);class He extends ${render(){return s`
      <img class="icon" src=${"/cairn/assets/pebblepath-icon.png"} alt="" aria-hidden="true" />
      <div class="wordmark">PebblePath</div>
      <div class="tagline">for every little milestone</div>
      <a
        class="cta"
        href="https://apps.apple.com/app/pebblepath-ai/"
        target="_blank"
        rel="noopener"
      >
        Get the app on iPhone <span class="arrow">→</span>
      </a>
    `}}g(He,"styles",k`
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
  `);customElements.define("discover-pebblepath",He);class fe extends ${constructor(){super(),this.code="",this._family=null,this._loading=!0,this._joining=!1,this._error=""}willUpdate(e){e.has("code")&&this.code&&this._lookup()}async _lookup(){var e,t;this._loading=!0,this._error="";try{const i=await w.findFamilyByCairnCode(this.code);if(!i)this._error="Invite code not found. Check it was typed correctly.",this._family=null;else{const r=((t=(e=i.cairnInviteCodeExpiresAt)==null?void 0:e.toDate)==null?void 0:t.call(e))??(i.cairnInviteCodeExpiresAt?new Date(i.cairnInviteCodeExpiresAt):null);!r||r<new Date?(this._error="This invite code has expired. Ask the family for a fresh one.",this._family=null):this._family=i}}catch(i){console.error(i),this._error=(i==null?void 0:i.message)??"Couldn't look up the invite."}finally{this._loading=!1}}async _join(){var e;if(!this._joining){this._joining=!0,this._error="";try{const t=await w.joinFamilyAsCairn(this.code);u(`Welcome to ${((e=this._family)==null?void 0:e.name)??"the family"}.`),this.dispatchEvent(new CustomEvent("joined",{detail:{familyId:t}}))}catch(t){console.error(t),this._error=(t==null?void 0:t.message)??"Could not join."}finally{this._joining=!1}}}_cancel(){this.dispatchEvent(new Event("cancel"))}_inviterFromFamily(e){var r;if(!e)return null;const t=(r=e.memberProfiles)==null?void 0:r[e.createdBy];if(!t)return null;const i=t.profilePhotoURL;return{displayName:t.displayName??"A family member",photoURL:typeof i=="string"&&/^https?:\/\//i.test(i)?i:null}}render(){var r,a,l;const e=this._inviterFromFamily(this._family),t=(((r=this._family)==null?void 0:r.cairnMemberIds)??((a=this._family)==null?void 0:a.memberIds)??[]).length,i=(((l=this._family)==null?void 0:l.memberIds)??[]).length;return s`
      <div class="wrap">
        <div class="mark">
          <img
            class="brand-icon"
            src=${"/cairn/assets/cairn-icon.png"}
            srcset=${"/cairn/assets/cairn-icon.png 1x, /cairn/assets/cairn-icon-2x.png 2x"}
            alt="Cairn"
            width="44"
            height="44"
            style="border-radius:11px;display:block;box-shadow:0 4px 16px rgba(0,0,0,0.25);"
          />
          <div class="mark-name">Cairn</div>
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
    `}}g(fe,"properties",{code:{type:String},_family:{state:!0},_loading:{state:!0},_joining:{state:!0},_error:{state:!0}}),g(fe,"styles",k`
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
    }
    h1 {
      font-family: var(--font-display);
      font-size: clamp(26px, 4vw, 34px);
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin: 0 0 14px;
      text-align: center;
      background: linear-gradient(180deg, #fff 0%, rgba(255, 248, 235, 0.7) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
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
  `);customElements.define("join-family-screen",fe);class be extends ${constructor(){super(),this.error="",this.busy=!1,this.joinCode=""}async _handleSignIn(){if(!this.busy){this.busy=!0,this.error="";try{await Ye()}catch(e){this.error=(e==null?void 0:e.message)??"Sign-in failed."}finally{this.busy=!1}}}_renderGoogleIcon(){return s`
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
              src=${"/cairn/assets/cairn-icon.png"}
              srcset=${"/cairn/assets/cairn-icon.png 1x, /cairn/assets/cairn-icon-2x.png 2x"}
              alt="Cairn"
              width="56"
              height="56"
            />
            <div class="mark-name">Cairn</div>
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
              ?disabled=${this.busy||!F}
              @click=${this._handleSignIn}
            >
              ${this._renderGoogleIcon()}
              ${this.busy?"Signing in…":"Continue with Google"}
            </button>
          </div>
          ${F?"":s`<div class="config-hint">
                Sign-in is awaiting your Firebase config — copy
                <code>.env.example</code> to <code>.env</code> and fill in the web-app
                values from PebblePath's Firebase Console.
              </div>`}
          ${this.error?s`<div class="error">${this.error}</div>`:""}
        </glass-panel>
        <div class="footnote">Beta Version</div>
      </div>
    `}}g(be,"properties",{error:{state:!0},busy:{state:!0},joinCode:{type:String}}),g(be,"styles",k`
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
      gap: 4px;
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
  `);customElements.define("sign-in-screen",be);const Y=class Y extends ${constructor(){super(),this.value="family"}_select(e){e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent("circle-change",{detail:{value:e},bubbles:!0,composed:!0})))}render(){return s`
      <div class="track" role="tablist" aria-label="Circle">
        ${Y.OPTIONS.map(e=>s`
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
    `}};g(Y,"properties",{value:{type:String,reflect:!0}}),g(Y,"OPTIONS",[{value:"personal",label:"Just me"},{value:"family",label:"Family"},{value:"extended",label:"Extended"}]),g(Y,"styles",k`
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
  `);let ve=Y;customElements.define("circle-switcher",ve);class ye extends ${constructor(){super(),this.event=null,this.members=[]}_icon(e){return e==="birthday"?"🎂":e==="anniversary"?"💕":"✨"}_fmtDate(e){const t=new Date(e);return{day:t.getDate(),month:t.toLocaleString("en-GB",{month:"short"})}}render(){const e=this.event;if(!e)return s``;const t=this._fmtDate(e.date);return s`
      <div
        class="row"
        @click=${()=>this.dispatchEvent(new CustomEvent("edit-event",{detail:e,bubbles:!0,composed:!0}))}
      >
        <div class="icon ${e.type}">${this._icon(e.type)}</div>
        <div class="body">
          <div class="title">${e.title}</div>
          ${e.subtitle?s`<div class="meta">${e.subtitle}</div>`:""}
        </div>
        <div class="date">
          ${t.day}
          <small>${t.month}</small>
        </div>
      </div>
    `}}g(ye,"properties",{event:{type:Object},members:{type:Array}}),g(ye,"styles",k`
    :host {
      display: block;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 12px 14px;
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
      font-size: 18px;
      flex-shrink: 0;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    .icon.birthday {
      background: var(--gradient-amber);
    }
    .icon.anniversary {
      background: var(--gradient-rose);
    }
    .icon.custom {
      background: var(--gradient-sage);
    }
    .body {
      flex: 1;
      min-width: 0;
    }
    .title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 15px;
      letter-spacing: -0.01em;
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
  `);customElements.define("event-row",ye);const yt={uid:"preview-user",displayName:"Thomas Paris",email:"thomas@example.com",photoURL:null},Ne=[{uid:"thomas",displayName:"Thomas",circles:["immediate"],hue:198},{uid:"partner",displayName:"Élise",circles:["immediate"],hue:8},{uid:"kid1",displayName:"Oscar",circles:["immediate"],hue:142},{uid:"kid2",displayName:"Mila",circles:["immediate"],hue:44},{uid:"mum",displayName:"Mum",circles:["extended"],hue:320},{uid:"dad",displayName:"Dad",circles:["extended"],hue:28},{uid:"sister",displayName:"Camille",circles:["extended"],hue:280},{uid:"bro-in-law",displayName:"Sam",circles:["extended"],hue:175},{uid:"niece",displayName:"Léa",circles:["extended"],hue:100}],xt=[{id:"t1",title:"Côte d’Azur, summer",location:"Antibes, France",start:"2026-07-12",end:"2026-07-21",coverGradient:"linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)",lodgingHost:"Airbnb",lodgingTitle:"Villa near Cap d’Antibes",attendees:["thomas","partner","kid1","kid2","mum","dad"],notes:"Mum + Dad arrive day 2. Dinner reservations at La Guérite booked.",visibility:"extended"},{id:"t2",title:"Half-term in the Alps",location:"Chamonix, France",start:"2026-10-24",end:"2026-10-31",coverGradient:"linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)",lodgingHost:"Booking.com",lodgingTitle:"Chalet Les Drus",attendees:["thomas","partner","kid1","kid2"],notes:"Need ski school for the kids — book by September.",visibility:"immediate"},{id:"t3",title:"Camille’s 40th",location:"Lisbon, Portugal",start:"2026-09-05",end:"2026-09-08",coverGradient:"linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)",lodgingHost:"Airbnb",lodgingTitle:"Alfama rooftop apartment",attendees:["thomas","partner","sister","bro-in-law"],notes:"Surprise. Don’t mention to Camille.",visibility:"family"}],wt=[{id:"e1",type:"birthday",date:"2026-05-24",personIds:["mum"],title:"Mum’s birthday"},{id:"e2",type:"anniversary",date:"2026-05-28",personIds:["mum","dad"],title:"Mum & Dad’s anniversary",subtitle:"38 years"},{id:"e3",type:"birthday",date:"2026-06-11",personIds:["kid1"],title:"Oscar turns 7"},{id:"e4",type:"birthday",date:"2026-06-30",personIds:["niece"],title:"Léa’s birthday"}];class xe extends ${constructor(){super(),this.user=yt,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this.preview=!1,this.circle="family",this._formOpen=!1,this._formTrip=null,this._formBusy=!1,this._membersOpen=!1,this._eventFormOpen=!1,this._eventFormEvent=null,this._eventFormBusy=!1,this._allTripsOpen=!1,this._editingFamilyName=!1,this._importOpen=!1,this._profileOpen=!1,this._typePickerOpen=!1,this._formMode="trip",this._pebbleOpen=!1;const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1)}async _saveFamilyName(e){var a,l;const i=(e.target.value??"").trim(),r=((a=this.family)==null?void 0:a.name)??"";if(i&&i!==r&&((l=this.family)!=null&&l.id))try{const{db:n,doc:d,updateDoc:c,serverTimestamp:p}=await Ge(async()=>{const{db:h,doc:f,updateDoc:y,serverTimestamp:m}=await Promise.resolve().then(()=>lt);return{db:h,doc:f,updateDoc:y,serverTimestamp:m}},void 0);await c(d(n,"families",this.family.id),{name:i,updatedAt:p()}),u("Family name updated.")}catch(n){console.error("Update family name failed:",n),u(`Couldn't save: ${n.code??n.message}`,{duration:5e3})}this._editingFamilyName=!1}_liveImmediate(){var e;return this.preview||!((e=this.user)!=null&&e.uid)?Ne.filter(t=>t.circles.includes("immediate")):pt(this.user.uid,this.user,this.pebbleUser,this.family,this.children)}_liveExtended(){return this.preview?Ne.filter(e=>e.circles.includes("extended")):[]}_liveTrips(){return this.preview?xt:this.trips??[]}_liveEvents(){if(this.preview)return wt;const e=ht(this.children),t=(this.events??[]).map(i=>{const{date:r,yearsElapsed:a}=gt(i);return{...i,date:r?r.toISOString().slice(0,10):i.date,_yearsElapsed:a,_originalDate:i.date}});return[...e,...t].sort((i,r)=>String(i.date).localeCompare(String(r.date)))}_filteredMembers(){const e=this._liveImmediate(),t=this._liveExtended();return this.circle==="personal"?e.filter(i=>{var r;return i.uid===((r=this.user)==null?void 0:r.uid)}):this.circle==="family"?e:[...e,...t]}_circleTrips(){var i;const e=this._liveTrips(),t=((i=this.user)==null?void 0:i.uid)??"thomas";return this.circle==="personal"?e.filter(r=>{var a;return(a=r.attendees)==null?void 0:a.includes(t)}):this.circle==="family"?e.filter(r=>r.visibility!=="extended"):e}_filteredTrips(){const e=new Date;return e.setHours(0,0,0,0),this._circleTrips().filter(t=>t.end?_(t.end)>=e:!0)}_userCanSeeTrip(e){var i,r,a,l,n;const t=(i=this.user)==null?void 0:i.uid;if(!t)return!1;if((r=e.attendees)!=null&&r.includes(t)||(a=e.viewers)!=null&&a.includes(t)||e.visibility==="family")return!0;if(e.visibility==="extended"){if((((l=this.family)==null?void 0:l.memberIds)??[]).includes(t))return!0;const d=e.targetSubGroups??[];if(d.length===0)return!0;const c=Object.entries(((n=this.family)==null?void 0:n.subGroups)??{}).filter(([,p])=>(p.memberIds??[]).includes(t)).map(([p])=>p);return d.some(p=>c.includes(p))}return!1}_filteredEvents(){const e=new Set(this._filteredMembers().map(t=>t.uid));return this._liveEvents().filter(t=>t.personIds.some(i=>e.has(i)))}_smartCallout(){var n,d;const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),i=1440*60*1e3,r=c=>Math.round((c-t)/i);for(const c of this._circleTrips()){if(!c.start||!c.end)continue;const p=_(c.start),h=_(c.end);if(p.setHours(0,0,0,0),h.setHours(0,0,0,0),p<=t&&t<=h){const f=r(p)+1,y=r(h)-r(p)+1,m=((n=c.location)==null?void 0:n.trim())||c.title;return`Day ${f} of ${y} in ${m}.`}}let a=null,l=1/0;for(const c of this._circleTrips()){if(!c.start)continue;const p=_(c.start);if(!p)continue;const h=r(p);h>0&&h<l&&(a={kind:"trip",item:c},l=h)}for(const c of this._filteredEvents()){if(!c.date)continue;const p=_(c.date);if(!p)continue;const h=r(p);h>=0&&h<l&&(a={kind:"event",item:c},l=h)}if(!a)return null;if(a.kind==="trip"){const c=((d=a.item.location)==null?void 0:d.trim())||a.item.title;return l===1?`${c} starts tomorrow.`:l<=14?`${c} in ${l} days.`:l<=60?`Next trip: ${c} in ${l} days.`:null}return l===0?`${a.item.title} — today.`:l===1?`${a.item.title} — tomorrow.`:l<=7?`${a.item.title} in ${l} days.`:null}_tripDensityByDay(e){const t=new Map;for(const i of this._filteredTrips()){if(!i.start||!i.end)continue;const r=_(i.start),a=_(i.end);if(Number.isNaN(r.getTime())||Number.isNaN(a.getTime())||r.getFullYear()>e||a.getFullYear()<e)continue;const l=new Date(Math.max(r,new Date(e,0,1))),n=new Date(Math.min(a,new Date(e,11,31)));for(;l<=n;){const d=`${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`;t.set(d,Math.min(1,(t.get(d)??0)+.5)),l.setDate(l.getDate()+1)}}return t}_shiftMonth(e){const t=this._displayMonth;this._displayMonth=new Date(t.getFullYear(),t.getMonth()+e,1)}_jumpToMonth(e,t){this._displayMonth=new Date(e,t,1)}_resetToToday(){const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1)}_renderMonthly(){const e=new Date,t=this._displayMonth??e,i=t.getFullYear(),r=t.getMonth(),l=(new Date(i,r,1).getDay()+6)%7,n=new Date(i,r+1,0).getDate(),d=this._filteredEvents().map(m=>_(m.date)).filter(Boolean).filter(m=>m.getFullYear()===i&&m.getMonth()===r).map(m=>m.getDate()),c=new Set;for(const m of this._filteredTrips()){if(!m.start||!m.end)continue;const E=_(m.start),C=_(m.end);if(Number.isNaN(E.getTime())||Number.isNaN(C.getTime())||E.getFullYear()>i||C.getFullYear()<i||E.getMonth()>r&&C.getMonth()>r||E.getMonth()<r&&C.getMonth()<r)continue;const T=E.getMonth()===r?E.getDate():1,j=C.getMonth()===r?C.getDate():n;for(let P=T;P<=j;P++)c.add(P)}const p=[];for(let m=0;m<l;m++)p.push(s`<div class="cal-cell empty"></div>`);const h=e.getFullYear()===i&&e.getMonth()===r;for(let m=1;m<=n;m++){const E=h&&m===e.getDate(),C=d.includes(m),T=c.has(m),j=["cal-cell",E?"today":"",C?"has-event":"",T?"has-trip":""].filter(Boolean).join(" ");p.push(s`<div class=${j}>${m}</div>`)}const f=new Date(i,r,1).toLocaleString("en-GB",{month:"long",year:"numeric"});return s`
      <div class="cal-head">
        <h3>${f}</h3>
        <div class="nav">
          ${!h?s`<button
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
        ${p}
      </div>
    `}_openCreate(){if(this.preview){u("Sign in to create real activities.");return}if(!w.familyId){u("You need a PebblePath family first.");return}this._typePickerOpen=!0}_onTypePicked(e){this._typePickerOpen=!1;const t=e.detail.type;if(t==="event"){this._eventFormEvent=null,this._eventFormOpen=!0;return}this._formMode=t,this._formTrip=null,this._formOpen=!0}_openEdit(e){if(this.preview){u("Sign in to edit real activities.");return}const t=e.lodgingUrl||e.lodgingHost||e.flightNumber||e.flightDepartAirport;this._formMode=t?"trip":"activity",this._formTrip=e,this._formOpen=!0}async _onSaveTrip(e){const t=e.detail;this._formBusy=!0;try{await w.saveTrip(t),this._formOpen=!1,this._formTrip=null,u(t.id?"Trip updated.":"Trip created.")}catch(i){console.error("Save trip failed:",i),u(`Couldn't save: ${i.code??i.message}`,{duration:5e3})}finally{this._formBusy=!1}}async _onDeleteTrip(e){this._formBusy=!0;try{await w.deleteTrip(e.detail.id),this._formOpen=!1,this._formTrip=null,u("Trip deleted.")}catch(t){console.error("Delete trip failed:",t),u(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._formBusy=!1}}_openCreateEvent(){if(this.preview){u("Sign in to add real events.");return}if(!w.familyId){u("You need a family first.");return}this._eventFormEvent=null,this._eventFormOpen=!0}_openEditEvent(e){if(this.preview){u("Sign in to edit real events.");return}if(e!=null&&e._childId){const t=prompt(`Edit ${e._childName}'s birthday (YYYY-MM-DD):`,e.date);if(!t)return;if(!/^\d{4}-\d{2}-\d{2}$/.test(t)){u("Use YYYY-MM-DD format.");return}w.updateChildBirthday(e._childId,new Date(t)).then(()=>u(`Updated ${e._childName}'s birthday.`)).catch(i=>{console.error("Update child birthday failed:",i),u(`Couldn't update: ${i.code??i.message}`,{duration:5e3})});return}this._eventFormEvent={...e,date:e._originalDate??e.date},this._eventFormOpen=!0}async _onSaveEvent(e){this._eventFormBusy=!0;try{await w.saveEvent(e.detail),this._eventFormOpen=!1,this._eventFormEvent=null,u(e.detail.id?"Event updated.":"Event added.")}catch(t){console.error("Save event failed:",t),u(`Couldn't save: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}async _onDeleteEvent(e){this._eventFormBusy=!0;try{await w.deleteEvent(e.detail.id),this._eventFormOpen=!1,this._eventFormEvent=null,u("Event deleted.")}catch(t){console.error("Delete event failed:",t),u(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}render(){var y,m,E,C,T,j,P,_e,$e,ke,ze;const e=this._filteredTrips(),t=this._filteredEvents(),i=this._liveImmediate(),r=this._liveExtended(),a=i.concat(r),l=(((y=this.user)==null?void 0:y.displayName)??"there").split(" ")[0],n=new Date,d=new Date(n.getFullYear(),n.getMonth(),1),c=new Date(n.getFullYear(),n.getMonth()+1,0),p=t.filter(b=>{const S=_(b.date);return S&&S.getFullYear()===n.getFullYear()&&S.getMonth()===n.getMonth()}),f=this._circleTrips().filter(b=>{if(!b.start||!b.end)return!1;const S=_(b.start),O=_(b.end);return Number.isNaN(S.getTime())||Number.isNaN(O.getTime())?!1:S<=c&&O>=d}).length+p.length;return s`
      <div class="topbar">
        <div class="brand">
          <img
            class="brand-icon"
            src=${"/cairn/assets/cairn-icon.png"}
            srcset=${"/cairn/assets/cairn-icon.png 1x, /cairn/assets/cairn-icon-2x.png 2x"}
            alt="Cairn"
            width="38"
            height="38"
          />
          <div class="brand-name">Cairn</div>
        </div>
        <circle-switcher
          .value=${this.circle}
          @circle-change=${b=>this.circle=b.detail.value}
        ></circle-switcher>
        <div class="who">
          <button
            class="pebble-pill"
            @click=${()=>this._pebbleOpen=!0}
            title="Ask Pebble"
            aria-label="Ask Pebble"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
            </svg>
            <span class="pebble-pill-label">Pebble</span>
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
            title="${((m=this.user)==null?void 0:m.displayName)??"Profile"} — open settings"
            aria-label="Open profile settings"
          >
            <member-chip
              .name=${((E=this.user)==null?void 0:E.displayName)??"You"}
              .photo=${((C=this.user)==null?void 0:C.photoURL)??""}
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
            <h1>Hi ${l}.</h1>
            ${(()=>{const b=this._smartCallout();return b?s`<div class="smart">${b}</div>`:""})()}
            <div class="stat">
              <span>${f}</span> ${f===1?"activity":"activities"} this month
            </div>
            ${this.family?this._editingFamilyName?s`<input
                    class="family-name-input"
                    type="text"
                    .value=${this.family.name??""}
                    autofocus
                    @blur=${this._saveFamilyName}
                    @keydown=${b=>{b.key==="Enter"&&b.target.blur(),b.key==="Escape"&&(b.target.value=this.family.name??"",this._editingFamilyName=!1)}}
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
              <button class="link" @click=${()=>this._importOpen=!0}>
                Import from Calendar
              </button>
              ${this._circleTrips().length>0?s`<button class="link" @click=${()=>this._allTripsOpen=!0}>
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
                  ${e.map(b=>s`<trip-card
                      .trip=${b}
                      .members=${a}
                      @edit-trip=${S=>this._openEdit(S.detail)}
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
                <h3>${((T=this._displayMonth)==null?void 0:T.getFullYear())??n.getFullYear()}</h3>
                <div style="font-size:12px;color:var(--text-tertiary);">Yearly</div>
              </div>
              <yearly-view
                .year=${((j=this._displayMonth)==null?void 0:j.getFullYear())??n.getFullYear()}
                .tripDays=${this._tripDensityByDay(((P=this._displayMonth)==null?void 0:P.getFullYear())??n.getFullYear())}
                .events=${this._liveEvents()}
                .today=${n}
                @month-select=${b=>this._jumpToMonth(b.detail.year,b.detail.month)}
              ></yearly-view>
            </glass-panel>
          </div>
        </section>

        <section>
          <div class="section-head">
            <h2>Celebrations</h2>
            <button class="link" @click=${()=>this._openCreateEvent()}>+ Add event</button>
          </div>
          ${(()=>{const b=t.filter(N=>N.type==="birthday"),S=t.filter(N=>N.type==="anniversary"),O=t.filter(N=>N.type!=="birthday"&&N.type!=="anniversary"),De=(N,U,We)=>s`
              <glass-panel padding="md" variant="strong" class="cel-col">
                <div class="cel-col-head">
                  <span class="cel-col-title">${N}</span>
                  <span class="cel-col-count">${U.length}</span>
                </div>
                ${U.length===0?s`<div class="cel-empty">${We}</div>`:U.map(qe=>s`<event-row
                        .event=${qe}
                        .members=${a}
                        @edit-event=${Ve=>this._openEditEvent(Ve.detail)}
                      ></event-row>`)}
              </glass-panel>
            `;return s`
              <div class="cel-row">
                ${De("Birthdays",b,"No birthdays yet.")}
                ${De("Anniversaries",S,"No anniversaries yet.")}
              </div>
              ${O.length>0?s`<glass-panel padding="md" variant="strong" style="margin-top:18px;">
                    <div class="cel-col-head">
                      <span class="cel-col-title">Other</span>
                      <span class="cel-col-count">${O.length}</span>
                    </div>
                    ${O.map(N=>s`<event-row
                        .event=${N}
                        .members=${a}
                        @edit-event=${U=>this._openEditEvent(U.detail)}
                      ></event-row>`)}
                  </glass-panel>`:""}
            `})()}
        </section>

        <section>
          <div class="section-head">
            <h2>Your circles</h2>
            <button class="link" @click=${()=>this._membersOpen=!0}>
              Manage members
            </button>
          </div>
          <glass-panel padding="md" variant="strong">
            <div class="circle-block">
              <div class="circle-head">
                <div>
                  <span class="name">Immediate family</span>
                  <span class="count">${i.length} ${i.length===1?"person":"people"}</span>
                </div>
                <button class="invite-btn" @click=${()=>this._membersOpen=!0}>
                  Manage
                </button>
              </div>
              <div class="members-row">
                ${i.map(b=>s`
                    <div class="member-tile">
                      <member-chip
                        .name=${b.displayName}
                        .photo=${b.photoURL??""}
                        .hue=${b.hue}
                        size="24"
                      ></member-chip>
                      ${b.displayName}
                    </div>
                  `)}
              </div>
            </div>
            <div class="circle-block">
              <div class="circle-head">
                <div>
                  <span class="name">Extended family</span>
                  <span class="count">${r.length} ${r.length===1?"person":"people"}</span>
                </div>
                <button class="invite-btn" @click=${()=>this._membersOpen=!0}>
                  + Invite
                </button>
              </div>
              ${r.length===0?s`<div class="empty-extended">
                    No one yet —
                    <button @click=${()=>this._membersOpen=!0}>
                      invite the grandparents
                    </button>
                  </div>`:s`<div class="members-row">
                    ${r.map(b=>s`
                        <div class="member-tile">
                          <member-chip
                            .name=${b.displayName}
                            .photo=${b.photoURL??""}
                            .hue=${b.hue}
                            size="24"
                          ></member-chip>
                          ${b.displayName}
                        </div>
                      `)}
                  </div>`}
            </div>
          </glass-panel>
        </section>

        <discover-pebblepath></discover-pebblepath>
      </main>

      <trip-form
        ?open=${this._formOpen}
        .trip=${this._formTrip}
        .members=${i}
        .currentUid=${((_e=this.user)==null?void 0:_e.uid)??""}
        .familyId=${(($e=this.family)==null?void 0:$e.id)??""}
        .busy=${this._formBusy}
        .formMode=${this._formMode}
        .subGroups=${((ke=this.family)==null?void 0:ke.subGroups)??{}}
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
        .familyId=${((ze=this.family)==null?void 0:ze.id)??""}
        .busy=${this._eventFormBusy}
        @save=${this._onSaveEvent}
        @remove=${this._onDeleteEvent}
        @cancel=${()=>{this._eventFormOpen=!1,this._eventFormEvent=null}}
      ></event-form>

      <all-trips-modal
        ?open=${this._allTripsOpen}
        .trips=${this._circleTrips()}
        .members=${a}
        @edit-trip=${b=>{this._allTripsOpen=!1,this._openEdit(b.detail)}}
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
    `}}g(xe,"properties",{user:{type:Object},pebbleUser:{type:Object},family:{type:Object},children:{type:Array},trips:{type:Array},events:{type:Array},preview:{type:Boolean},circle:{state:!0},_formOpen:{state:!0},_formTrip:{state:!0},_formBusy:{state:!0},_membersOpen:{state:!0},_eventFormOpen:{state:!0},_eventFormEvent:{state:!0},_eventFormBusy:{state:!0},_displayMonth:{state:!0},_allTripsOpen:{state:!0},_editingFamilyName:{state:!0},_importOpen:{state:!0},_profileOpen:{state:!0},_typePickerOpen:{state:!0},_formMode:{state:!0},_pebbleOpen:{state:!0}}),g(xe,"styles",k`
    :host {
      display: block;
      min-height: 100vh;
    }
    .topbar {
      /* Padding + height match PebblePath website's <nav> exactly so the
         logo sits at the same screen coordinates when tabbing between
         pebblepath.ai and pebblepath.ai/cairn. */
      position: sticky;
      top: 0;
      z-index: 10;
      padding: 0 48px;
      height: 68px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      column-gap: 14px;
      background: rgba(20, 12, 6, 0.42);
      backdrop-filter: blur(28px) saturate(180%);
      -webkit-backdrop-filter: blur(28px) saturate(180%);
      border-bottom: 1px solid var(--glass-border);
    }
    .topbar circle-switcher {
      justify-self: center;
    }
    .topbar .who {
      justify-self: end;
    }
    .pebble-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px 7px 12px;
      border-radius: var(--radius-pill);
      background: rgba(61, 155, 143, 0.18);
      color: var(--text-primary);
      border: 1px solid rgba(61, 155, 143, 0.42);
      cursor: pointer;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13px;
      letter-spacing: -0.005em;
      transition: background 200ms ease, transform 160ms ease;
    }
    .pebble-pill:hover {
      background: rgba(61, 155, 143, 0.3);
    }
    .pebble-pill:active {
      transform: translateY(1px) scale(0.98);
    }
    .pebble-pill svg {
      width: 14px;
      height: 14px;
      color: var(--teal-pebble);
    }
    @media (max-width: 768px) {
      .pebble-pill-label {
        display: none;
      }
      .pebble-pill {
        padding: 7px 9px;
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
      /* Mobile keeps the single-row desktop layout. Just hide the
         wordmark text (icon carries identity) and tighten padding +
         activity button so all 3 grid cells fit on a phone. */
      .topbar {
        padding: 10px 16px;
        height: 60px;
        column-gap: 8px;
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
      font-size: 13px;
      margin-top: 6px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
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
      font-size: 13px;
      margin-top: 6px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
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
      justify-content: space-between;
      margin-bottom: 8px;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.08);
    }
    .cel-col-title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 14.5px;
      letter-spacing: -0.005em;
    }
    .cel-col-count {
      font-size: 12px;
      color: var(--text-tertiary);
      font-variant-numeric: tabular-nums;
    }
    .cel-empty {
      color: var(--text-tertiary);
      font-size: 13px;
      padding: 12px 2px 4px;
      line-height: 1.5;
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
      aspect-ratio: 1 / 1;
      border-radius: 10px;
      background: rgba(255, 248, 235, 0.04);
      border: 1px solid rgba(255, 248, 235, 0.06);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 6px 4px;
      font-size: 12px;
      color: var(--text-secondary);
      gap: 3px;
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
      background: rgba(212, 168, 67, 0.18);
      border-color: rgba(212, 168, 67, 0.4);
      color: var(--text-primary);
    }
    .cal-cell.has-trip {
      background: rgba(61, 155, 143, 0.34);
      border-color: rgba(61, 155, 143, 0.55);
      color: var(--text-primary);
    }
    .cal-cell.has-trip.has-event {
      background: linear-gradient(
        135deg,
        rgba(61, 155, 143, 0.22) 0%,
        rgba(212, 168, 67, 0.22) 100%
      );
      border-color: rgba(201, 138, 138, 0.4);
    }

    .circle-block {
      padding: 14px 0;
      border-top: 1px solid rgba(255, 248, 235, 0.08);
    }
    .circle-block:first-child {
      border-top: none;
      padding-top: 0;
    }
    .circle-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .circle-head .name {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 15px;
    }
    .circle-head .count {
      color: var(--text-tertiary);
      font-size: 12px;
      margin-left: 8px;
      font-weight: 500;
    }
    .invite-btn {
      font-family: var(--font-body);
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      border-radius: var(--radius-pill);
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
    }
    .invite-btn:hover {
      border-color: var(--glass-border-strong);
      color: var(--text-primary);
    }
    .members-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .member-tile {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px 6px 6px;
      border-radius: var(--radius-pill);
      background: rgba(255, 248, 235, 0.06);
      border: 1px solid rgba(255, 248, 235, 0.1);
      font-size: 13px;
    }
    .empty-extended {
      color: var(--text-tertiary);
      font-size: 13px;
      padding: 8px 0;
    }
    .empty-extended button {
      margin-left: 6px;
      background: transparent;
      border: none;
      color: var(--terracotta);
      cursor: pointer;
      font: inherit;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

  `);customElements.define("home-screen",xe);const W="cairn:pendingJoinCode";class Je extends ${constructor(){super(),this.authUser=null,this.loading=!0;const e=new URLSearchParams(window.location.search);this.preview=e.has("preview");const t=e.get("join");if(t)try{localStorage.setItem(W,t)}catch{}let i=null;try{i=localStorage.getItem(W)}catch{}this.joinCode=t??i??null,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this._unsubAuth=null,this._onDataChange=()=>{this.pebbleUser=w.state.user,this.family=w.state.family,this.children=w.state.children,this.trips=w.state.trips,this.events=w.state.events}}_clearJoinState(){this.joinCode=null;try{localStorage.removeItem(W)}catch{}const e=new URL(window.location.href);e.searchParams.delete("join"),window.history.replaceState({},"",e.toString())}connectedCallback(){if(super.connectedCallback(),this.preview){this.loading=!1;return}w.addEventListener("change",this._onDataChange),this._unsubAuth=Ue(e=>{this.authUser=e,this.loading=!1,e?w.start(e.uid):w.stop()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubAuth)==null||e.call(this),w.removeEventListener("change",this._onDataChange)}_composeViewer(){var t,i;const e=this.authUser;return{uid:e.uid,displayName:e.displayName??((t=this.pebbleUser)==null?void 0:t.displayName)??"You",email:e.email??((i=this.pebbleUser)==null?void 0:i.email)??"",photoURL:Re(e,this.pebbleUser)}}render(){return this.loading?s``:this.preview?s`<home-screen preview></home-screen>`:this.authUser?this.joinCode?s`
        <join-family-screen
          .code=${this.joinCode}
          @joined=${()=>this._clearJoinState()}
          @cancel=${()=>this._clearJoinState()}
        ></join-family-screen>
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
        <sign-in-screen
          .joinCode=${this.joinCode??""}
        ></sign-in-screen>
      `}}g(Je,"properties",{authUser:{state:!0},loading:{state:!0},preview:{state:!0},joinCode:{state:!0},pebbleUser:{state:!0},family:{state:!0},children:{state:!0},trips:{state:!0},events:{state:!0}});customElements.define("cairn-app",Je);
//# sourceMappingURL=index-CHr3NHd8.js.map
