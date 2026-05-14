var Ze=Object.defineProperty;var Qe=(d,e,t)=>e in d?Ze(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t;var m=(d,e,t)=>Qe(d,typeof e!="symbol"?e+"":e,t);import{i as z,a as C,b as n}from"./lit-2GpawzfI.js";import{f as et,h as tt,j as it,G as Ae,s as Oe,k as rt,l as A,m as j,n as T,o as at,q,t as R,v as se,w as ne,x as Pe,y as Le,z as je,A as Be}from"./firebase-core-DVt9Aunh.js";import{g as st,h as Q}from"./firebase-functions-CfBtnn7v.js";import{g as nt,r as Ge,u as Ye,a as Ue}from"./firebase-storage-C5Nl_r0j.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();class oe extends z{constructor(){super(),this.variant="default",this.lifted=!1,this.padding="md"}render(){const e=["panel",this.variant==="strong"?"strong":"",this.lifted?"lifted":"",`pad-${this.padding}`].filter(Boolean).join(" ");return n`
      <div class=${e}>
        <div class="content"><slot></slot></div>
      </div>
    `}}m(oe,"properties",{variant:{type:String},lifted:{type:Boolean},padding:{type:String}}),m(oe,"styles",C`
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
  `);customElements.define("glass-panel",oe);class le extends z{constructor(){super(),this.variant="primary",this.size="md",this.full=!1,this.disabled=!1}render(){const e=[this.variant,`size-${this.size}`,this.full?"full":""].filter(Boolean).join(" ");return n`
      <button class=${e} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}}m(le,"properties",{variant:{type:String},size:{type:String},full:{type:Boolean},disabled:{type:Boolean,reflect:!0}}),m(le,"styles",C`
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
  `);customElements.define("glass-button",le);class de extends z{constructor(){super(),this.size=44}render(){const e=this.size;return n`
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
    `}}m(de,"properties",{size:{type:Number}}),m(de,"styles",C`
    :host {
      display: inline-block;
      line-height: 0;
    }
    svg {
      display: block;
      filter: drop-shadow(0 6px 18px rgba(20, 12, 6, 0.45));
    }
  `);customElements.define("cairn-mark",de);const ot="modulepreload",lt=function(d){return"/cairn/"+d},Te={},Re=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let o=function(p){return Promise.all(p.map(c=>Promise.resolve(c).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=o(t.map(p=>{if(p=lt(p),p in Te)return;Te[p]=!0;const c=p.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${h}`))return;const g=document.createElement("link");if(g.rel=c?"stylesheet":ot,c||(g.as="script"),g.crossOrigin="",g.href=p,l&&g.setAttribute("nonce",l),document.head.appendChild(g),c)return new Promise((v,y)=>{g.addEventListener("load",v),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return r.then(o=>{for(const s of o||[])s.status==="rejected"&&a(s.reason);return e().catch(a)})},pe={apiKey:"AIzaSyA6NKZNLVBeeLrXcLJSXus5M832AxpI2wk",authDomain:"pebblepath-992b6.firebaseapp.com",projectId:"pebblepath-992b6",storageBucket:"pebblepath-992b6.firebasestorage.app",messagingSenderId:"497141667291",appId:"1:497141667291:web:ee84c186db54389d10c3fe"},B=!!(pe.apiKey&&pe.projectId),J=B?et(pe):null,$=B?tt(J):null,w=B?it(J):null,H=B?st(J,"us-central1"):null,ce=B?nt(J):null,he=B?new Ae:null;he&&he.setCustomParameters({prompt:"select_account"});const te=B?new Ae:null;te&&te.addScope("https://www.googleapis.com/auth/calendar.readonly");let ee=null,ue=0;async function He(){if(!$||!te)throw new Error("Firebase not configured.");if(ee&&Date.now()<ue-6e4)return ee;const d=await Oe($,te),e=Ae.credentialFromResult(d),t=e==null?void 0:e.accessToken;if(!t)throw new Error("Couldn't get a Calendar access token — try again.");return ee=t,ue=Date.now()+3600*1e3,t}function dt(){ee=null,ue=0}function qe(){if(!$)throw new Error("Firebase not configured — fill in .env first.");return Oe($,he)}function We(){return $?rt($):Promise.resolve()}function Je(d){return $?at($,d):(d(null),()=>{})}const pt=Object.freeze(Object.defineProperty({__proto__:null,addDoc:se,app:J,auth:$,clearCalendarToken:dt,collection:R,connectGoogleCalendar:He,db:w,deleteDoc:ne,doc:A,firebaseApp:J,functions:H,getDocs:je,getDownloadURL:Ue,httpsCallable:Q,isConfigured:B,onAuth:Je,onSnapshot:q,query:Pe,serverTimestamp:T,setDoc:Be,signIn:qe,signOutUser:We,storage:ce,storageRef:Ge,updateDoc:j,uploadBytes:Ye,where:Le},Symbol.toStringTag,{value:"Module"}));class ct extends EventTarget{constructor(){super(),this.state={user:null,family:null,children:[],trips:[],events:[]},this._uid=null,this._unsubUser=null,this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this._currentFamilyId=null}get familyId(){return this._currentFamilyId}start(e){!w||!e||this._uid!==e&&(this.stop(),this._uid=e,this._unsubUser=q(A(w,"users",e),t=>{var r,a,o,s,l,p;this.state.user=t.exists()?{id:t.id,...t.data()}:null;const i=((r=this.state.user)==null?void 0:r.familyId)??((a=this.state.user)==null?void 0:a.cairnFamilyId)??null;i!==this._currentFamilyId&&(this._currentFamilyId=i,(o=this._unsubFamily)==null||o.call(this),(s=this._unsubChildren)==null||s.call(this),(l=this._unsubTrips)==null||l.call(this),(p=this._unsubEvents)==null||p.call(this),this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this.state.family=null,this.state.children=[],this.state.trips=[],this.state.events=[],i&&this._subscribeFamily(i)),this._emit()}))}_subscribeFamily(e){this._unsubFamily=q(A(w,"families",e),t=>{this.state.family=t.exists()?{id:t.id,...t.data()}:null,this._emit()}),this._unsubChildren=q(R(w,"families",e,"children"),t=>{this.state.children=t.docs.map(i=>{var a,o;const r=i.data();return{id:i.id,...r,dateOfBirth:((o=(a=r.dateOfBirth)==null?void 0:a.toDate)==null?void 0:o.call(a))??(r.dateOfBirth?new Date(r.dateOfBirth):null)}}),this._emit()}),this._unsubTrips=q(R(w,"families",e,"trips"),t=>{this.state.trips=t.docs.map(i=>{var a,o,s,l;const r=i.data();return{id:i.id,...r,start:r.start??"",end:r.end??"",createdAt:((o=(a=r.createdAt)==null?void 0:a.toDate)==null?void 0:o.call(a))??null,updatedAt:((l=(s=r.updatedAt)==null?void 0:s.toDate)==null?void 0:l.call(s))??null}}).sort((i,r)=>String(i.start).localeCompare(String(r.start))),this._emit()},t=>{console.warn("[Cairn] trips subscription error:",t.code,t.message)}),this._unsubEvents=q(R(w,"families",e,"familyEvents"),t=>{this.state.events=t.docs.map(i=>{var a,o,s,l;const r=i.data();return{id:i.id,...r,date:r.date??"",createdAt:((o=(a=r.createdAt)==null?void 0:a.toDate)==null?void 0:o.call(a))??null,updatedAt:((l=(s=r.updatedAt)==null?void 0:s.toDate)==null?void 0:l.call(s))??null}}),this._emit()},t=>{console.warn("[Cairn] familyEvents subscription error:",t.code,t.message)})}async saveTrip(e){var p;if(!w||!this._currentFamilyId)throw new Error("No family yet.");const t=(p=$==null?void 0:$.currentUser)==null?void 0:p.uid;if(!t)throw new Error("Not signed in.");const{id:i,createdAt:r,updatedAt:a,...o}=e,s={...o,updatedAt:T()};return i?(await j(A(w,"families",this._currentFamilyId,"trips",i),s),i):(s.createdBy=t,s.createdAt=T(),(await se(R(w,"families",this._currentFamilyId,"trips"),s)).id)}async deleteTrip(e){if(!w||!this._currentFamilyId)throw new Error("No family yet.");await ne(A(w,"families",this._currentFamilyId,"trips",e))}async saveEvent(e){var p;if(!w||!this._currentFamilyId)throw new Error("No family yet.");const t=(p=$==null?void 0:$.currentUser)==null?void 0:p.uid;if(!t)throw new Error("Not signed in.");const{id:i,createdAt:r,updatedAt:a,...o}=e,s={...o,updatedAt:T()};return i?(await j(A(w,"families",this._currentFamilyId,"familyEvents",i),s),i):(s.createdBy=t,s.createdAt=T(),(await se(R(w,"families",this._currentFamilyId,"familyEvents"),s)).id)}async deleteEvent(e){if(!w||!this._currentFamilyId)throw new Error("No family yet.");await ne(A(w,"families",this._currentFamilyId,"familyEvents",e))}async previewUrl(e){if(!e||typeof e!="string"||!/^https?:\/\//i.test(e.trim()))return null;if(!H)throw new Error("Firebase functions not configured.");return(await Q(H,"previewUrl")({url:e.trim()})).data}async lookupFlight(e,t){if(!e||typeof e!="string")return null;if(!H)throw new Error("Firebase functions not configured.");return(await Q(H,"lookupFlight")({flightNumber:e.trim(),date:typeof t=="string"?t.trim():""})).data}async askPebble(e,t=[]){if(!H)throw new Error("Firebase functions not configured.");if(!this._currentFamilyId)throw new Error("No family yet.");return(await Q(H,"askPebbleAboutActivities")({question:e,familyId:this._currentFamilyId,history:t})).data}async updateChildBirthday(e,t){if(!w||!this._currentFamilyId)throw new Error("No family yet.");await j(A(w,"families",this._currentFamilyId,"children",e),{dateOfBirth:t,updatedAt:T()})}async findFamilyByCairnCode(e){if(!w)throw new Error("Firebase not configured.");const t=Pe(R(w,"families"),Le("cairnInviteCode","==",e)),i=await je(t);if(i.empty)return null;const r=i.docs[0];return{id:r.id,...r.data()}}async joinFamilyAsCairn(e){var c,h,g;if(!w)throw new Error("Firebase not configured.");const t=(c=$==null?void 0:$.currentUser)==null?void 0:c.uid;if(!t)throw new Error("Not signed in.");const i=await this.findFamilyByCairnCode(e);if(!i){const v=new Error("Invite code not found.");throw v.code="not-found",v}const r=((g=(h=i.cairnInviteCodeExpiresAt)==null?void 0:h.toDate)==null?void 0:g.call(h))??(i.cairnInviteCodeExpiresAt?new Date(i.cairnInviteCodeExpiresAt):null);if(!r||r<new Date){const v=new Error("This invite code has expired.");throw v.code="expired",v}const a=i.cairnMemberIds??[];if(a.includes(t)||(i.memberIds??[]).includes(t)){const v=new Error("You're already in this family on Cairn.");throw v.code="already-member",v}const o=i.cairnMaxMembers??20;if(a.length>=o){const v=new Error("This family's Cairn ring is full.");throw v.code="full",v}const s=$.currentUser,l=new Date,p={displayName:s.displayName??"",profilePhotoURL:s.photoURL??null,role:"member",joinedAt:l,updatedAt:l};return await j(A(w,"families",i.id),{cairnMemberIds:[...a,t],[`memberProfiles.${t}`]:p,updatedAt:T()}),await Be(A(w,"users",t),{email:s.email??"",displayName:s.displayName??"",profilePhotoURL:s.photoURL??null,cairnFamilyId:i.id,role:"member",notificationPreferences:{milestoneReminders:!0,tipNotifications:!0,schoolDeadlines:!0},createdAt:T(),updatedAt:T()},{merge:!0}),i.id}async saveSubGroup({id:e,name:t,memberIds:i}){if(!w||!this._currentFamilyId)throw new Error("No family yet.");const r=e??`g_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`;return await j(A(w,"families",this._currentFamilyId),{[`subGroups.${r}`]:{name:t.trim(),memberIds:Array.isArray(i)?[...i]:[],updatedAt:T()},updatedAt:T()}),r}async deleteSubGroup(e){if(!w||!this._currentFamilyId)throw new Error("No family yet.");const{deleteField:t}=await Re(async()=>{const{deleteField:i}=await import("./firebase-core-DVt9Aunh.js").then(r=>r.B);return{deleteField:i}},[]);await j(A(w,"families",this._currentFamilyId),{[`subGroups.${e}`]:t(),updatedAt:T()})}async setCairnMemberSubGroup(e,t){var a;if(!w||!this._currentFamilyId)throw new Error("No family yet.");if(!e)throw new Error("uid is required.");const i=((a=this.state.family)==null?void 0:a.subGroups)??{},r={};for(const[o,s]of Object.entries(i)){const l=Array.isArray(s.memberIds)?s.memberIds:[];o===t?l.includes(e)||(r[`subGroups.${o}.memberIds`]=[...l,e]):l.includes(e)&&(r[`subGroups.${o}.memberIds`]=l.filter(p=>p!==e))}Object.keys(r).length!==0&&(r.updatedAt=T(),await j(A(w,"families",this._currentFamilyId),r))}async regenerateCairnInviteCode(){if(!w||!this._currentFamilyId)throw new Error("No family yet.");const e=ht(),t=new Date(Date.now()+720*60*60*1e3);return await j(A(w,"families",this._currentFamilyId),{cairnInviteCode:e,cairnInviteCodeExpiresAt:t,updatedAt:T()}),{code:e,expiresAt:t}}stop(){var e,t,i,r,a;(e=this._unsubUser)==null||e.call(this),(t=this._unsubFamily)==null||t.call(this),(i=this._unsubChildren)==null||i.call(this),(r=this._unsubTrips)==null||r.call(this),(a=this._unsubEvents)==null||a.call(this),this._unsubUser=this._unsubFamily=this._unsubChildren=this._unsubTrips=this._unsubEvents=null,this._uid=null,this._currentFamilyId=null,this.state={user:null,family:null,children:[],trips:[],events:[]}}_emit(){this.dispatchEvent(new Event("change"))}}const k=new ct;function Ke(d,e){const t=e==null?void 0:e.profilePhotoURL;return typeof t=="string"&&/^https?:\/\//i.test(t)?t:d!=null&&d.photoURL?d.photoURL:null}function ht(){const d="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="CAIRN-";for(let t=0;t<4;t++)e+=d[Math.floor(Math.random()*d.length)];return e}function ut(d,e,t,i,r){const a=[];a.push({uid:d,displayName:(e==null?void 0:e.displayName)??(t==null?void 0:t.displayName)??"You",photoURL:Ke(e,t),role:"self",circles:["immediate"],hue:198});const o=(i==null?void 0:i.memberProfiles)??{};for(const[l,p]of Object.entries(o)){if(l===d)continue;const c=p.profilePhotoURL;a.push({uid:l,displayName:p.displayName??"Co-parent",photoURL:typeof c=="string"&&/^https?:\/\//i.test(c)?c:null,role:"co-parent",circles:["immediate"],hue:8})}let s=142;for(const l of r??[]){const p=l.profilePhotoURL;a.push({uid:`child:${l.id}`,displayName:l.name,photoURL:typeof p=="string"&&/^https?:\/\//i.test(p)?p:null,role:"child",circles:["immediate"],hue:s,dateOfBirth:l.dateOfBirth}),s=(s+58)%360}return a}function gt(d){const e=[];for(const t of d??[]){if(!t.dateOfBirth)continue;const i=t.dateOfBirth,r=i.getUTCFullYear(),a=String(i.getUTCMonth()+1).padStart(2,"0"),o=String(i.getUTCDate()).padStart(2,"0");e.push({id:`bday:${t.id}`,type:"birthday",date:`${r}-${a}-${o}`,personIds:[`child:${t.id}`],title:`${t.name}'s birthday`,_childId:t.id,_childName:t.name,recurring:!0})}return e}function bt(d,e=new Date){if(!(d!=null&&d.date))return{date:null,yearsElapsed:0};const t=D(d.date);if(!t||Number.isNaN(t.getTime()))return{date:null,yearsElapsed:0};if(!d.recurring)return{date:t,yearsElapsed:0};const i=new Date(e.getFullYear(),t.getMonth(),t.getDate()),r=i<new Date(e.getFullYear(),e.getMonth(),e.getDate())?new Date(e.getFullYear()+1,t.getMonth(),t.getDate()):i,a=r.getFullYear()-t.getFullYear();return{date:r,yearsElapsed:a}}const Ie=["linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)","linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)","linear-gradient(135deg, #3d9b8f 0%, #1f5c54 100%)","linear-gradient(135deg, #d4a843 0%, #c67b5c 55%, #c98a8a 100%)","linear-gradient(135deg, #8b7bb5 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #6b9ac4 0%, #3d9b8f 100%)"];function D(d){if(!d)return null;if(d instanceof Date)return d;const e=String(d).match(/^(\d{4})-(\d{2})-(\d{2})/);return e?new Date(Number(e[1]),Number(e[2])-1,Number(e[3])):new Date(d)}function mt(d){if(!d)return null;const e=d.getFullYear(),t=String(d.getMonth()+1).padStart(2,"0"),i=String(d.getDate()).padStart(2,"0");return`${e}-${t}-${i}`}async function ft(d,e=90,t=100){const i=new Date,r=new Date(i.getTime()+e*24*60*60*1e3),a=new URL("https://www.googleapis.com/calendar/v3/calendars/primary/events");a.searchParams.set("timeMin",i.toISOString()),a.searchParams.set("timeMax",r.toISOString()),a.searchParams.set("maxResults",String(t)),a.searchParams.set("singleEvents","true"),a.searchParams.set("orderBy","startTime");const o=await fetch(a.toString(),{headers:{Authorization:`Bearer ${d}`}});if(!o.ok){const l=await o.text();throw new Error(`Google Calendar: ${o.status} ${l.slice(0,160)}`)}return((await o.json()).items??[]).filter(l=>{var p,c;return l.status!=="cancelled"&&(((p=l.start)==null?void 0:p.date)||((c=l.start)==null?void 0:c.dateTime))})}function vt(d,e){var r,a,o,s,l,p,c,h;const t=((r=d.start)==null?void 0:r.date)??((o=(a=d.start)==null?void 0:a.dateTime)==null?void 0:o.slice(0,10))??"";let i=((s=d.end)==null?void 0:s.date)??((p=(l=d.end)==null?void 0:l.dateTime)==null?void 0:p.slice(0,10))??t;if((c=d.start)!=null&&c.date&&((h=d.end)!=null&&h.date)){const g=new Date(i);g.setDate(g.getDate()-1),i=g.toISOString().slice(0,10)}return{title:d.summary||"(untitled)",location:d.location??"",start:t,end:i,attendees:e?[e]:[],viewers:[],visibility:"family",notes:(d.description??"").slice(0,1e3),gcalEventId:d.id,gcalEventLink:d.htmlLink??null}}function xt(d){if(d!=null&&d.coverGradient)return d.coverGradient;const e=((d==null?void 0:d.title)??(d==null?void 0:d.id)??"")+((d==null?void 0:d.location)??"");let t=0;for(let i=0;i<e.length;i++)t=t*31+e.charCodeAt(i)>>>0;return Ie[t%Ie.length]}class ge extends z{constructor(){super(),this.year=new Date().getFullYear(),this.tripDays=new Map,this.trips=[],this.events=[],this.today=new Date,this._activeDay=null}_isLeap(e){return e%4===0&&e%100!==0||e%400===0}_daysInMonth(e,t){return[31,this._isLeap(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]}_labelsForMonth(e){var a;const t=this.year,i=new Map,r=(o,s)=>{const l=i.get(o);i.set(o,l?`${l} · ${s}`:s)};for(const o of this.trips??[]){if(!o.start||!o.end)continue;const s=D(o.start),l=D(o.end);if(!s||!l||s.getFullYear()>t||l.getFullYear()<t)continue;const p=new Date(t,e,1),c=new Date(t,e+1,0);if(l<p||s>c)continue;const h=s.getMonth()===e&&s.getFullYear()===t?s.getDate():1,g=l.getMonth()===e&&l.getFullYear()===t?l.getDate():c.getDate(),v=(a=o.location)!=null&&a.trim()?`${o.title} (${o.location.trim()})`:o.title;for(let y=h;y<=g;y++)r(y,v)}for(const o of this.events??[]){const s=D(o.date);s&&s.getFullYear()===t&&s.getMonth()===e&&r(s.getDate(),o.title??"Event")}return i}_renderMonth(e){var p,c;const t=this.year,r=(new Date(t,e,1).getDay()+6)%7,a=this._daysInMonth(t,e),o=this._labelsForMonth(e),s=[];for(let h=0;h<r;h++)s.push(n`<div class="cell empty"></div>`);const l=this.today;for(let h=1;h<=a;h++){const g=`${String(e+1).padStart(2,"0")}-${String(h).padStart(2,"0")}`,v=this.tripDays.get(g)??0,y=l.getFullYear()===t&&l.getMonth()===e&&l.getDate()===h,u=o.get(h),b=(this.events??[]).some(N=>{const E=D(N.date);return E&&E.getFullYear()===t&&E.getMonth()===e&&E.getDate()===h}),_=((p=this._activeDay)==null?void 0:p.month)===e&&((c=this._activeDay)==null?void 0:c.day)===h,S=["cell",y?"today":"",v>0?"trip":"",v>.6?"dense":"",b?"event":"",u?"labelled":"",_?"active":""].filter(Boolean).join(" ");s.push(n`<div
        class=${S}
        title=${u?`${h} ${this._monthName(e)} — ${u}`:""}
        @click=${N=>u&&this._onDayTap(N,e,h,u)}
      ></div>`)}return s}_onDayTap(e,t,i,r){var a,o;if(e.stopPropagation(),((a=this._activeDay)==null?void 0:a.month)===t&&((o=this._activeDay)==null?void 0:o.day)===i){this._activeDay=null;return}this._activeDay={month:t,day:i,label:r}}_monthName(e){return new Date(this.year,e,1).toLocaleString("en-GB",{month:"short"})}_onSelect(e){this.dispatchEvent(new CustomEvent("month-select",{detail:{month:e,year:this.year},bubbles:!0,composed:!0}))}render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=this.today.getMonth(),i=this.today.getFullYear()===this.year;return n`
      <div class="grid">
        ${e.map((r,a)=>n`
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
      ${this._activeDay?n`
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
    `}}m(ge,"properties",{year:{type:Number},tripDays:{type:Object},trips:{type:Array},events:{type:Array},today:{type:Object},_activeDay:{state:!0}}),m(ge,"styles",C`
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
      box-shadow:
        0 0 0 1px rgba(255, 255, 255, 0.4),
        0 0 6px rgba(79, 194, 107, 0.7);
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
  `);customElements.define("yearly-view",ge);class be extends z{constructor(){super(),this.name="",this.hue=200,this.photo="",this.size=36,this.showName=!1}_initials(){return this.name.split(/\s+/).map(e=>e[0]).filter(Boolean).slice(0,2).join("").toUpperCase()}render(){const e=`linear-gradient(135deg, hsl(${this.hue}, 55%, 62%) 0%, hsl(${(this.hue+40)%360}, 50%, 42%) 100%)`,t=`width:${this.size}px;height:${this.size}px;background:${e};font-size:${this.size*.38}px;`;return n`
      <div class="avatar" style=${t} title=${this.name}>
        ${this.photo?n`<img src=${this.photo} alt=${this.name} />`:n`<span>${this._initials()}</span>`}
      </div>
      ${this.showName?n`<span class="name">${this.name}</span>`:""}
    `}}m(be,"properties",{name:{type:String},hue:{type:Number},photo:{type:String},size:{type:Number},showName:{type:Boolean,attribute:"show-name"}}),m(be,"styles",C`
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
  `);customElements.define("member-chip",be);class me extends z{constructor(){super(),this.start="",this.end="",this._displayMonth=null,this._hoverDate=null}willUpdate(e){if(e.has("start")||this._displayMonth===null){const t=this.start?D(this.start):new Date;this._displayMonth=new Date(t.getFullYear(),t.getMonth(),1)}}_isoFor(e,t,i){return`${e}-${String(t+1).padStart(2,"0")}-${String(i).padStart(2,"0")}`}_emit(e,t){this.start=e,this.end=t,this._hoverDate=null,this.dispatchEvent(new CustomEvent("range-change",{detail:{start:e,end:t},bubbles:!0,composed:!0}))}_onDayClick(e){if(!this.start||this.start&&this.end){this._emit(e,"");return}e<this.start?this._emit(e,this.start):this._emit(this.start,e)}_onDayHover(e){this.start&&!this.end&&(this._hoverDate=e)}_onLeave(){this._hoverDate=null}_shiftMonth(e){const t=this._displayMonth;this._displayMonth=new Date(t.getFullYear(),t.getMonth()+e,1)}_isToday(e,t,i){const r=new Date;return r.getFullYear()===e&&r.getMonth()===t&&r.getDate()===i}_inSelectedRange(e){return!this.start||!this.end?!1:e>this.start&&e<this.end}_inHoverRange(e){if(!this.start||this.end||!this._hoverDate)return!1;const t=this._hoverDate<this.start?this._hoverDate:this.start,i=this._hoverDate<this.start?this.start:this._hoverDate;return e>t&&e<i}_summary(){if(!this.start&&!this.end)return"Pick a start date";const e=t=>{const i=D(t);return i?i.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"}):""};return this.start&&!this.end?`From ${e(this.start)} — pick an end date`:this.start===this.end?e(this.start):`${e(this.start)} – ${e(this.end)}`}_renderGrid(){const e=this._displayMonth.getFullYear(),t=this._displayMonth.getMonth(),r=(new Date(e,t,1).getDay()+6)%7,a=new Date(e,t+1,0).getDate(),o=[];for(let s=0;s<r;s++)o.push(n`<div class="empty"></div>`);for(let s=1;s<=a;s++){const l=this._isoFor(e,t,s),p=l===this.start,c=l===this.end&&l!==this.start,h=this._inSelectedRange(l),g=this._inHoverRange(l),v=this._isToday(e,t,s),y=["day",p?"start":"",c?"end":"",h?"in-range":"",g?"hover-range":"",v&&!p&&!c?"today":""].filter(Boolean).join(" ");o.push(n`
        <button
          type="button"
          class=${y}
          @click=${()=>this._onDayClick(l)}
          @mouseover=${()=>this._onDayHover(l)}
        >
          ${s}
        </button>
      `)}return o}render(){if(!this._displayMonth)return n``;const e=this._displayMonth.toLocaleString("en-GB",{month:"long",year:"numeric"});return n`
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
    `}}m(me,"properties",{start:{type:String},end:{type:String},_displayMonth:{state:!0},_hoverDate:{state:!0}}),m(me,"styles",C`
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
  `);customElements.define("date-range-picker",me);class fe extends z{constructor(){super(),this.open=!1,this.trip=null,this.members=[],this.currentUid="",this.familyId="",this.busy=!1,this.formMode="trip",this.subGroups={},this._draft=this._blankDraft(),this._error="",this._previewing=!1,this._previewError="",this._previewDebounce=null,this._lastPreviewedUrl="",this._showReturn=!1,this._showOutboundDetails=!1,this._showReturnDetails=!1,this._outboundLookupState="idle",this._outboundLookupMessage="",this._returnLookupState="idle",this._returnLookupMessage="",this._lastLookedUpOutbound="",this._lastLookedUpReturn=""}async _runFlightLookup(e){var h,g,v,y;const t=e==="return",i=t?"returnFlightNumber":"flightNumber",r=(this._draft[i]??"").trim();if(!r)return;const a=r.toUpperCase().replace(/[^A-Z0-9]/g,"");if(!/^[A-Z]{2,3}\d{1,4}[A-Z]?$/.test(a)){this[t?"_returnLookupState":"_outboundLookupState"]="idle";return}const o=t?"_lastLookedUpReturn":"_lastLookedUpOutbound",s=t?this._draft.end:this._draft.start,l=`${a}|${s??""}`;if(this[o]===l)return;const p=t?"_returnLookupState":"_outboundLookupState",c=t?"_returnLookupMessage":"_outboundLookupMessage";this[p]="loading",this[c]="";try{const u=await k.lookupFlight(a,s);if(!u)return;this[o]=l;const b=t?"returnFlightAirline":"flightAirline",_=t?"returnFlightDepartAirport":"flightDepartAirport",S=t?"returnFlightArriveAirport":"flightArriveAirport",N=t?"returnFlightDepartTime":"flightDepartTime",E=t?"returnFlightArriveTime":"flightArriveTime",M=K=>K?String(K).slice(0,16):"",O={};if(!this._draft[b]&&u.airline&&(O[b]=u.airline),!this._draft[_]&&((h=u.depart)!=null&&h.iata)&&(O[_]=u.depart.iata),!this._draft[S]&&((g=u.arrive)!=null&&g.iata)&&(O[S]=u.arrive.iata),!this._draft[N]&&((v=u.depart)!=null&&v.scheduledTime)&&(O[N]=M(u.depart.scheduledTime)),!this._draft[E]&&((y=u.arrive)!=null&&y.scheduledTime)&&(O[E]=M(u.arrive.scheduledTime)),Object.keys(O).length===0){this[p]="idle";return}this._draft={...this._draft,...O},(O[_]||O[S])&&(t?this._showReturnDetails=!0:this._showOutboundDetails=!0),this[p]="ok",this[c]=`Filled from ${u.airline??"flight record"}.`}catch(u){console.warn("Flight lookup failed:",u),this[p]="error",(u==null?void 0:u.code)==="functions/failed-precondition"?this[c]="Auto-fill not configured — enter details manually.":(u==null?void 0:u.code)==="functions/not-found"?this[c]="Couldn't find that flight — enter details manually.":(u==null?void 0:u.code)==="functions/invalid-argument"?this[c]="That doesn't look like a flight number.":(u==null?void 0:u.code)==="functions/unauthenticated"?this[c]="Sign in to use flight lookup.":this[c]="Flight lookup unavailable — enter details manually."}}willUpdate(e){(e.has("trip")||e.has("open"))&&(this.open&&(this._draft=this._draftFromTrip(this.trip),this._draft.id&&this._draft.lodgingUrl&&!this._draft.coverImage&&requestAnimationFrame(()=>this._autoRefreshPreview()),this._showReturn=!!(this._draft.returnFlightNumber||this._draft.returnFlightDepartTime||this._draft.returnFlightDepartAirport||this._draft.returnFlightArriveAirport),this._showOutboundDetails=!!(this._draft.flightDepartAirport||this._draft.flightArriveAirport),this._showReturnDetails=!!(this._draft.returnFlightDepartAirport||this._draft.returnFlightArriveAirport)),this._error="")}async _autoRefreshPreview(){const e=this._draft.lodgingUrl,t=this._draft.id;if(!(!e||!t||this._previewing)){this._previewing=!0,this._previewError="";try{const i=await k.previewUrl(e);if(!(i!=null&&i.image)){this._previewError="No preview image found for this URL.";return}const r={coverImage:i.image,lodgingHost:i.siteName??i.host??this._draft.lodgingHost??"",lodgingTitle:i.title??this._draft.lodgingTitle??""};this._draft={...this._draft,...r},this._lastPreviewedUrl=e;try{await k.saveTrip({id:t,...r})}catch(a){console.warn("Auto-save cover failed:",a)}}catch(i){console.warn("Auto preview failed:",i),this._previewError=(i==null?void 0:i.code)==="functions/unauthenticated"?"Preview needs you to be signed in.":"Preview unavailable — try the Refresh button."}finally{this._previewing=!1}}}_blankDraft(){const e=new Date().toISOString().slice(0,10);return{id:null,title:"",location:"",start:e,end:e,visibility:"family",attendees:this.currentUid?[this.currentUid]:[],viewers:[],targetSubGroups:[],lodgingUrl:"",lodgingHost:"",lodgingTitle:"",flightAirline:"",flightNumber:"",flightDepartAirport:"",flightDepartTime:"",flightArriveAirport:"",flightArriveTime:"",returnFlightAirline:"",returnFlightNumber:"",returnFlightDepartAirport:"",returnFlightDepartTime:"",returnFlightArriveAirport:"",returnFlightArriveTime:"",notes:""}}_draftFromTrip(e){return e?{id:e.id??null,title:e.title??"",location:e.location??"",start:e.start??new Date().toISOString().slice(0,10),end:e.end??e.start??new Date().toISOString().slice(0,10),visibility:e.visibility??"family",attendees:Array.isArray(e.attendees)?[...e.attendees]:[],viewers:Array.isArray(e.viewers)?[...e.viewers]:[],targetSubGroups:Array.isArray(e.targetSubGroups)?[...e.targetSubGroups]:[],lodgingUrl:e.lodgingUrl??"",lodgingHost:e.lodgingHost??"",lodgingTitle:e.lodgingTitle??"",flightAirline:e.flightAirline??"",flightNumber:e.flightNumber??"",flightDepartAirport:e.flightDepartAirport??"",flightDepartTime:e.flightDepartTime??"",flightArriveAirport:e.flightArriveAirport??"",flightArriveTime:e.flightArriveTime??"",returnFlightAirline:e.returnFlightAirline??"",returnFlightNumber:e.returnFlightNumber??"",returnFlightDepartAirport:e.returnFlightDepartAirport??"",returnFlightDepartTime:e.returnFlightDepartTime??"",returnFlightArriveAirport:e.returnFlightArriveAirport??"",returnFlightArriveTime:e.returnFlightArriveTime??"",coverImage:e.coverImage??"",notes:e.notes??""}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_onLodgingChange(e){this._set("lodgingUrl",e),this._previewError="",this._previewDebounce&&clearTimeout(this._previewDebounce);const t=e.trim();if(!t){this._set("coverImage",""),this._set("lodgingHost",""),this._set("lodgingTitle",""),this._lastPreviewedUrl="";return}/^https?:\/\//i.test(t)&&t!==this._lastPreviewedUrl&&(this._previewDebounce=setTimeout(()=>this._runPreview(t),700))}async _runPreview(e){this._previewing=!0,this._previewError="";try{const t=await k.previewUrl(e);if(!t)return;this._lastPreviewedUrl=e,this._draft={...this._draft,coverImage:t.image??this._draft.coverImage,lodgingHost:t.siteName??t.host??this._draft.lodgingHost,lodgingTitle:t.title??this._draft.lodgingTitle}}catch(t){console.warn("Preview failed:",t),(t==null?void 0:t.code)==="functions/unauthenticated"?this._previewError="Preview unavailable — sign in.":(t==null?void 0:t.code)==="functions/invalid-argument"?this._previewError="That URL doesn’t look right.":this._previewError="Preview unavailable — paste it again or skip."}finally{this._previewing=!1}}_toggleAttendee(e){const t=this._draft.attendees.includes(e),i=t?this._draft.attendees.filter(a=>a!==e):[...this._draft.attendees,e];let r=this._draft.viewers??[];t||(r=r.filter(a=>a!==e)),this._draft={...this._draft,attendees:i,viewers:r}}_toggleViewer(e){if(this._draft.attendees.includes(e))return;const i=(this._draft.viewers??[]).includes(e)?this._draft.viewers.filter(r=>r!==e):[...this._draft.viewers??[],e];this._set("viewers",i)}_toggleSubGroup(e){const i=(this._draft.targetSubGroups??[]).includes(e)?this._draft.targetSubGroups.filter(r=>r!==e):[...this._draft.targetSubGroups??[],e];this._set("targetSubGroups",i)}_renderFlightLookupStatus(e){const t=e==="return",i=t?this._returnLookupState:this._outboundLookupState,r=t?this._returnLookupMessage:this._outboundLookupMessage;return i==="idle"?n`<div class="hint">
        Tip: paste a flight number — we'll fetch airline + airports + times for you.
      </div>`:i==="loading"?n`<div class="lookup-status">
        <div class="spinner"></div>
        Looking up flight…
      </div>`:i==="ok"?n`<div class="lookup-status lookup-ok">✓ ${r}</div>`:n`<div class="lookup-status lookup-error">${r}</div>`}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give the trip a title.";return}if(!e.start){this._error="Pick a start date.";return}const t=e.end||e.start;if(t<e.start){this._error="End date can’t be before start date.";return}if(!this.familyId){this._error="You need to be in a family first.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,end:t,title:e.title.trim(),location:e.location.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this trip? This can’t be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return n``;const e=this._draft,t=!!e.id;return n`
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
              @range-change=${i=>{this._draft={...this._draft,start:i.detail.start,end:i.detail.end??""}}}
            ></date-range-picker>
          </div>

          <div class=${this.formMode==="activity"?"field":"row-2"}>
            <div class="field" style=${this.formMode==="activity"?"margin-bottom:0;":""}>
              <label>Visibility</label>
              <div class="seg">
                ${["personal","family","extended"].map(i=>n`
                    <button
                      class=${e.visibility===i?"active":""}
                      @click=${()=>this._set("visibility",i)}
                    >
                      ${i==="personal"?"Just me":i==="family"?"Family":"Extended"}
                    </button>
                  `)}
              </div>
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
          </div>

          ${e.visibility==="extended"&&Object.keys(this.subGroups??{}).length>0?n`
                <div class="field">
                  <label>Limit to sub-groups <span style="text-transform:none;font-weight:400;color:var(--text-tertiary);letter-spacing:0.01em;">(optional — leave empty to show to all extended)</span></label>
                  <div class="attendees">
                    ${Object.entries(this.subGroups).map(([i,r])=>n`
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
              ${this.members.filter(i=>!e.attendees.includes(i.uid)).map(i=>n`
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
              ${this.members.filter(i=>!e.attendees.includes(i.uid)).length===0?n`<span style="color:var(--text-tertiary);font-size:13px;">
                    Everyone is going — no extra viewers needed.
                  </span>`:""}
            </div>
          </div>

          ${this.formMode==="activity"?"":n`
          <fieldset class="flight-section">
            <legend>Flight (optional)</legend>

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
              ${this._renderFlightLookupStatus("outbound")}
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
                    ${this._renderFlightLookupStatus("return")}
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
              ${this.busy?"Saving…":t?"Save changes":"Create activity"}
            </glass-button>
          </div>
        </glass-panel>
      </div>
    `}}m(fe,"properties",{open:{type:Boolean,reflect:!0},trip:{type:Object},members:{type:Array},currentUid:{type:String},familyId:{type:String},busy:{type:Boolean},formMode:{type:String},subGroups:{type:Object},_draft:{state:!0},_error:{state:!0},_previewing:{state:!0},_previewError:{state:!0},_showReturn:{state:!0},_showOutboundDetails:{state:!0},_showReturnDetails:{state:!0},_outboundLookupState:{state:!0},_outboundLookupMessage:{state:!0},_returnLookupState:{state:!0},_returnLookupMessage:{state:!0}}),m(fe,"styles",C`
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

    /* Simplified flight section — one leg shown per row by default,
       optional airport codes hidden behind a "Show details" disclosure
       so most users only fill in a flight number + departure time. */
    .flight-section {
      border: 1px solid rgba(255, 248, 235, 0.12);
      border-radius: var(--radius-tile);
      padding: 14px 16px 12px;
      margin: 6px 0 14px;
    }
    .flight-section legend {
      font-size: 11.5px;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 0 6px;
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
  `);customElements.define("trip-form",fe);class ve extends z{constructor(){super(),this.open=!1,this.event=null,this.members=[],this.familyId="",this.busy=!1,this._draft=this._blankDraft(),this._error=""}willUpdate(e){(e.has("event")||e.has("open"))&&(this.open&&(this._draft=this._draftFromEvent(this.event)),this._error="")}_blankDraft(){return{id:null,type:"birthday",title:"",date:new Date().toISOString().slice(0,10),personIds:[],recurring:!0,subtitle:"",notes:"",visibility:"family"}}_draftFromEvent(e){return e?{id:e.id??null,type:e.type??"birthday",title:e.title??"",date:e.date??new Date().toISOString().slice(0,10),personIds:Array.isArray(e.personIds)?[...e.personIds]:[],recurring:e.recurring??!0,subtitle:e.subtitle??"",notes:e.notes??"",visibility:e.visibility??"family"}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_toggleType(e){this._set("type",e)}_togglePerson(e){const t=this._draft.personIds.includes(e);this._set("personIds",t?this._draft.personIds.filter(i=>i!==e):[...this._draft.personIds,e])}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give it a title.";return}if(!e.date){this._error="Pick a date.";return}if(!this.familyId){this._error="No family yet.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,title:e.title.trim(),subtitle:e.subtitle.trim(),notes:e.notes.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this event? This can't be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return n``;const e=this._draft,t=!!e.id;return n`
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

          <div class="row-2">
            <div class="field">
              <label>Visibility</label>
              <div class="seg">
                ${["personal","family","extended"].map(i=>n`
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
    `}_monthDay(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?"":t.toLocaleString("en-GB",{day:"numeric",month:"long"})}}m(ve,"properties",{open:{type:Boolean,reflect:!0},event:{type:Object},members:{type:Array},familyId:{type:String},busy:{type:Boolean},_draft:{state:!0},_error:{state:!0}}),m(ve,"styles",C`
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
  `);customElements.define("event-form",ve);let U=null,Ne=null;function yt(){return U||(U=document.createElement("div"),U.id="cairn-toast-host",Object.assign(U.style,{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",zIndex:9999,pointerEvents:"none"}),document.body.appendChild(U),U)}function x(d,{duration:e=2800}={}){const t=yt();clearTimeout(Ne),t.innerHTML="";const i=document.createElement("div");i.textContent=d,Object.assign(i.style,{padding:"12px 18px",background:"rgba(20, 12, 6, 0.78)",backdropFilter:"blur(24px) saturate(180%)",webkitBackdropFilter:"blur(24px) saturate(180%)",border:"1px solid rgba(255, 248, 235, 0.22)",borderRadius:"999px",color:"rgba(255, 248, 235, 0.96)",fontFamily:"'Inter', system-ui, sans-serif",fontSize:"13.5px",fontWeight:"500",letterSpacing:"0.005em",boxShadow:"0 12px 32px rgba(20, 12, 6, 0.45)",pointerEvents:"auto",transform:"translateY(8px)",opacity:"0",transition:"opacity 200ms ease, transform 240ms ease"}),t.appendChild(i),requestAnimationFrame(()=>{i.style.opacity="1",i.style.transform="translateY(0)"}),Ne=setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(8px)",setTimeout(()=>i.remove(),260)},e)}class xe extends z{constructor(){super(),this.open=!1,this.family=null,this.immediate=[],this.extended=[],this._busy=!1,this._newGroupName="",this._editingGroupId=null}_onCancel(){this.dispatchEvent(new Event("cancel"))}async _createSubGroup(){const e=this._newGroupName.trim();if(!(!e||this._busy)){this._busy=!0;try{const t=await k.saveSubGroup({name:e,memberIds:[]});this._newGroupName="",this._editingGroupId=t,x(`Sub-group "${e}" created.`)}catch(t){x(`Couldn't create: ${t.code??t.message}`,{duration:5e3})}finally{this._busy=!1}}}async _toggleSubGroupMember(e,t){var o,s;const i=(s=(o=this.family)==null?void 0:o.subGroups)==null?void 0:s[e];if(!i)return;const r=i.memberIds??[],a=r.includes(t)?r.filter(l=>l!==t):[...r,t];try{await k.saveSubGroup({id:e,name:i.name,memberIds:a})}catch(l){x(`Couldn't update: ${l.code??l.message}`,{duration:5e3})}}async _deleteSubGroup(e,t){if(confirm(`Delete the "${t}" sub-group?`))try{await k.deleteSubGroup(e),this._editingGroupId===e&&(this._editingGroupId=null),x("Sub-group deleted.")}catch(i){x(`Couldn't delete: ${i.code??i.message}`,{duration:5e3})}}async _regenerate(){if(!this._busy){this._busy=!0;try{await k.regenerateCairnInviteCode(),x("New invite code generated.")}catch(e){console.error(e),x(`Couldn't generate code: ${e.code??e.message}`,{duration:5e3})}finally{this._busy=!1}}}_inviteLink(e){return`${window.location.origin}/cairn/?join=${e}`}async _copyLink(){var t;const e=(t=this.family)==null?void 0:t.cairnInviteCode;if(e)try{await navigator.clipboard.writeText(this._inviteLink(e)),x("Invite link copied to clipboard.")}catch{x("Could not copy — try long-press the link instead.")}}async _share(){var i,r;const e=(i=this.family)==null?void 0:i.cairnInviteCode;if(!e)return;const t=this._inviteLink(e);if(navigator.share)try{await navigator.share({title:"Join my family on Cairn",text:`Join ${((r=this.family)==null?void 0:r.name)??"our family"} on Cairn — our shared family calendar.`,url:t})}catch{}else this._copyLink()}_expiryText(e){if(!e)return"";const t=e.toDate?e.toDate():new Date(e),r=Math.max(0,Math.round((t-new Date)/(1440*60*1e3)));return r===0?"Expires today":r===1?"Expires tomorrow":`Expires in ${r} days`}render(){var r,a,o,s;if(!this.open)return n``;const e=(r=this.family)==null?void 0:r.cairnInviteCode,t=(a=this.family)==null?void 0:a.cairnInviteCodeExpiresAt,i=t&&(t.toDate?t.toDate():new Date(t))<new Date;return n`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Manage members</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <h3>Immediate family · ${this.immediate.length}</h3>
          ${this.immediate.length===0?n`<div class="empty">No one in immediate yet.</div>`:this.immediate.map(l=>n`
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
          ${this.extended.length===0?n`<div class="empty">
                Anyone you invite via Cairn (grandparents, aunts, uncles, etc.) will appear here.
                They can see trips and celebrations but not PebblePath child data.
              </div>`:this.extended.map(l=>n`
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

          ${this.extended.length>0||Object.keys(((o=this.family)==null?void 0:o.subGroups)??{}).length>0?n`
                <h3>Sub-groups</h3>
                ${Object.entries(((s=this.family)==null?void 0:s.subGroups)??{}).map(([l,p])=>n`
                    <div class="subgroup">
                      <div class="subgroup-head">
                        <div>
                          <span class="subgroup-name">${p.name}</span>
                          <span class="count">${(p.memberIds??[]).length} ${(p.memberIds??[]).length===1?"member":"members"}</span>
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
                            @click=${()=>this._deleteSubGroup(l,p.name)}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                      ${this._editingGroupId===l?n`
                            <div style="margin-top:4px;">
                              ${this.extended.map(c=>n`
                                  <span
                                    class="chip-toggle ${(p.memberIds??[]).includes(c.uid)?"on":""}"
                                    @click=${()=>this._toggleSubGroupMember(l,c.uid)}
                                  >
                                    <member-chip
                                      .name=${c.displayName}
                                      .photo=${c.photoURL??""}
                                      .hue=${c.hue}
                                      size="20"
                                    ></member-chip>
                                    ${c.displayName}
                                  </span>
                                `)}
                              ${this.extended.length===0?n`<span style="color:var(--text-tertiary);font-size:13px;">
                                    Invite extended family first, then group them here.
                                  </span>`:""}
                            </div>
                          `:(p.memberIds??[]).length>0?n`<div style="margin-top:4px;">
                            ${(p.memberIds??[]).map(c=>{const h=this.extended.find(g=>g.uid===c);return h?n`<span class="chip-toggle on" style="cursor:default;">
                                <member-chip
                                  .name=${h.displayName}
                                  .photo=${h.photoURL??""}
                                  .hue=${h.hue}
                                  size="20"
                                ></member-chip>
                                ${h.displayName}
                              </span>`:""})}
                          </div>`:n`<div style="color:var(--text-tertiary);font-size:12.5px;margin-top:4px;">
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
          ${e&&!i?n`
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
              `:n`
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
    `}}m(xe,"properties",{open:{type:Boolean,reflect:!0},family:{type:Object},immediate:{type:Array},extended:{type:Array},_busy:{state:!0},_newGroupName:{state:!0},_editingGroupId:{state:!0}}),m(xe,"styles",C`
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
  `);customElements.define("manage-members-modal",xe);function wt(d,e){const t=[];if(t.push(d.title||"Cairn activity"),d.location&&t.push(d.location),d.start&&d.end){const r=D(d.start),a=D(d.end),o=r.toLocaleString("en-GB",{day:"numeric",month:"short"}),s=a.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});t.push(d.start===d.end?s:`${o} – ${s}`)}if((d.lodgingHost||d.lodgingTitle)&&t.push(`Lodging: ${[d.lodgingHost,d.lodgingTitle].filter(Boolean).join(" — ")}`),d.flightNumber||d.flightAirline||d.flightDepartAirport){const r=[],a=[d.flightAirline,d.flightNumber].filter(Boolean).join(" ");if(a&&r.push(a),d.flightDepartAirport&&d.flightArriveAirport&&r.push(`${d.flightDepartAirport.toUpperCase()} → ${d.flightArriveAirport.toUpperCase()}`),d.flightDepartTime){const o=new Date(d.flightDepartTime);Number.isNaN(o.getTime())||r.push(`Depart: ${o.toLocaleString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}`)}r.length&&t.push(`Flight: ${r.join(" · ")}`)}const i=(d.attendees??[]).map(r=>{var a;return(a=e.get(r))==null?void 0:a.displayName}).filter(Boolean);return i.length&&t.push(`With: ${i.join(", ")}`),d.notes&&t.push("",d.notes),t.push("","Shared from Cairn · pebblepath.ai/cairn"),t.join(`
`)}class ye extends z{constructor(){super(),this.trip=null,this.members=[],this._resizeObs=null}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<"u"&&(this._resizeObs=new ResizeObserver(()=>this._fitTitle()))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._resizeObs)==null||e.disconnect()}updated(){if(this._resizeObs&&this.renderRoot){const e=this.renderRoot.querySelector("article");e&&!e._observed&&(this._resizeObs.observe(e),e._observed=!0)}this._fitTitle()}_fitTitle(){if(!this.renderRoot)return;const e=this.renderRoot.querySelector("h3");if(!e)return;e.style.fontSize="";let t=19;for(e.style.fontSize=`${t}px`;e.scrollWidth>e.clientWidth+1&&t>13;)t-=.5,e.style.fontSize=`${t}px`}_fmtDates(e,t){const i=D(e),r=D(t);if(!i||!r)return"";const a=i.toLocaleString("en-GB",{month:"short"}),o=r.toLocaleString("en-GB",{month:"short"});return a===o&&i.getFullYear()===r.getFullYear()?`${i.getDate()}–${r.getDate()} ${a}`:`${i.getDate()} ${a} – ${r.getDate()} ${o}`}async _onShare(e,t,i){i.stopPropagation();const r=wt(e,t);if(navigator.share)try{await navigator.share({title:`Cairn — ${e.title??"activity"}`,text:r})}catch{}else try{await navigator.clipboard.writeText(r),x("Itinerary copied to clipboard.")}catch{x("Could not copy — try again from a browser tab.")}}render(){const e=this.trip;if(!e)return n``;const t=e.coverImage?`background-image: url(${e.coverImage});`:`background: ${xt(e)};`,i=e.coverImage?"cover has-image":"cover",r=new Map(this.members.map(l=>[l.uid,l])),a=(e.attendees??[]).map(l=>r.get(l)).filter(Boolean),o=a.slice(0,4),s=Math.max(0,a.length-o.length);return n`
      <article
        tabindex="0"
        aria-label=${e.title}
        @click=${()=>this.dispatchEvent(new CustomEvent("edit-trip",{detail:e,bubbles:!0,composed:!0}))}
        @keydown=${l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.dispatchEvent(new CustomEvent("edit-trip",{detail:e,bubbles:!0,composed:!0})))}}
      >
        <div class="${i}" style=${t}>
          <div class="visibility">${e.visibility??"family"}</div>
          <div class="dates">${this._fmtDates(e.start,e.end)}</div>
        </div>
        <div class="body">
          <h3>${e.title}</h3>
          <div class="location">${e.location||"—"}</div>
          ${e.lodgingUrl||e.lodgingHost?n`<div class="lodging">
                ${e.lodgingHost?n`<span class="pill">${e.lodgingHost}</span>`:""}
                <span class="lodging-text">${e.lodgingTitle||e.lodgingUrl||""}</span>
              </div>`:""}
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
              ${s>0?n`<span class="more">+${s}</span>`:""}
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
    `}}m(ye,"properties",{trip:{type:Object},members:{type:Array}}),m(ye,"styles",C`
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
  `);customElements.define("trip-card",ye);class we extends z{constructor(){super(),this.open=!1,this.trips=[],this.members=[]}_onCancel(){this.dispatchEvent(new Event("cancel"))}_groupByYear(e){const t=[...e].sort((a,o)=>String(a.start).localeCompare(String(o.start))),i=new Date;i.setHours(0,0,0,0);const r=new Map;for(const a of t){if(!a.start)continue;const o=D(a.start),s=D(a.end);if(!o)continue;const l=o.getFullYear();r.has(l)||r.set(l,[]);const p=s?s<i:!1;r.get(l).push({trip:a,isPast:p})}return r}render(){var r;if(!this.open)return n``;const e=this._groupByYear(this.trips??[]),t=((r=this.trips)==null?void 0:r.length)??0,i=new Date().getFullYear();return n`
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
              </div>`:Array.from(e.entries()).map(([a,o])=>n`
                  <div class="year ${a===i?"current":""}">
                    ${a}
                  </div>
                  <div class="grid">
                    ${o.map(({trip:s,isPast:l})=>n`
                        <div class=${l?"past":""}>
                          <trip-card .trip=${s} .members=${this.members}></trip-card>
                        </div>
                      `)}
                  </div>
                `)}
        </glass-panel>
      </div>
    `}}m(we,"properties",{open:{type:Boolean,reflect:!0},trips:{type:Array},members:{type:Array}}),m(we,"styles",C`
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
  `);customElements.define("all-trips-modal",we);class _e extends z{constructor(){super(),this.open=!1,this._events=[],this._selected=new Set,this._loading=!1,this._error="",this._importing=!1}willUpdate(e){e.has("open")&&this.open&&this._events.length===0&&!this._loading&&this._load()}async _load(){var e,t,i,r,a,o;this._loading=!0,this._error="";try{const s=await He(),l=await ft(s,90),p=new Set((k.state.trips??[]).filter(h=>h.gcalEventId).map(h=>h.gcalEventId));this._events=l.map(h=>({...h,_alreadyImported:p.has(h.id)}));const c=new Set;for(const h of this._events){if(h._alreadyImported)continue;const g=((e=h.start)==null?void 0:e.date)??((i=(t=h.start)==null?void 0:t.dateTime)==null?void 0:i.slice(0,10)),v=((r=h.end)==null?void 0:r.date)??((o=(a=h.end)==null?void 0:a.dateTime)==null?void 0:o.slice(0,10));g&&v&&v!==g&&c.add(h.id)}this._selected=c}catch(s){console.error(s),this._error=(s==null?void 0:s.message)??"Could not load calendar events."}finally{this._loading=!1}}_toggle(e){const t=new Set(this._selected);t.has(e)?t.delete(e):t.add(e),this._selected=t}_toggleAll(){const e=this._events.filter(t=>!t._alreadyImported);this._selected.size===e.length?this._selected=new Set:this._selected=new Set(e.map(t=>t.id))}async _import(){var a;if(this._importing||this._selected.size===0)return;this._importing=!0;const e=(a=$==null?void 0:$.currentUser)==null?void 0:a.uid,t=this._events.filter(o=>this._selected.has(o.id));let i=0,r=0;for(const o of t){const s=vt(o,e);try{await k.saveTrip(s),i++}catch(l){console.error("Import failed for event",o.id,l),r++}}this._importing=!1,r===0?x(`Imported ${i} ${i===1?"activity":"activities"}.`):x(`Imported ${i}, ${r} failed.`,{duration:5e3}),this._events=[],this._selected=new Set,this.dispatchEvent(new Event("cancel"))}_onCancel(){this.dispatchEvent(new Event("cancel"))}_fmtRange(e){var c,h,g,v,y,u,b,_;const t=((c=e.start)==null?void 0:c.date)??((g=(h=e.start)==null?void 0:h.dateTime)==null?void 0:g.slice(0,10)),i=((v=e.end)==null?void 0:v.date)??((u=(y=e.end)==null?void 0:y.dateTime)==null?void 0:u.slice(0,10));if(!t)return"";const r=new Date(t);if(!i||i===t)return r.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});let a=new Date(i);(b=e.start)!=null&&b.date&&((_=e.end)!=null&&_.date)&&a.setDate(a.getDate()-1);const o=r.getMonth()===a.getMonth()&&r.getFullYear()===a.getFullYear(),s=r.getFullYear()===a.getFullYear();if(o)return`${r.getDate()}–${a.getDate()} ${r.toLocaleString("en-GB",{month:"short",year:"numeric"})}`;const l=r.toLocaleString("en-GB",{day:"numeric",month:"short"}),p=a.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});return s?`${l} – ${p}`:`${r.toLocaleDateString()} – ${a.toLocaleDateString()}`}render(){if(!this.open)return n``;const e=this._events.filter(i=>!i._alreadyImported),t=e.length>0&&this._selected.size===e.length;return n`
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

          ${this._loading?n`<div class="loading">Loading your calendar…</div>`:this._error?n`<div class="error">${this._error}</div>`:this._events.length===0?n`<div class="empty">No events found in the next 90 days.</div>`:n`
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
                        ${i._alreadyImported?n`<span class="badge">In Cairn</span>`:""}
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
    `}}m(_e,"properties",{open:{type:Boolean,reflect:!0},_events:{state:!0},_selected:{state:!0},_loading:{state:!0},_error:{state:!0},_importing:{state:!0}}),m(_e,"styles",C`
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
  `);customElements.define("import-calendar-modal",_e);class ke extends z{constructor(){super(),this.open=!1,this.user=null,this.pebbleUser=null,this._name="",this._savingName=!1,this._uploadingPhoto=!1}willUpdate(e){var t;e.has("open")&&this.open&&(this._name=((t=this.user)==null?void 0:t.displayName)??"")}_onCancel(){this.dispatchEvent(new Event("cancel"))}async _saveName(){var t,i;const e=this._name.trim();if(!(!e||e===(((t=this.user)==null?void 0:t.displayName)??""))&&!(!((i=$==null?void 0:$.currentUser)!=null&&i.uid)||!w)){this._savingName=!0;try{await j(A(w,"users",$.currentUser.uid),{displayName:e,updatedAt:T()}),x("Display name updated.")}catch(r){console.error(r),x(`Couldn't save: ${r.code??r.message}`,{duration:5e3})}finally{this._savingName=!1}}}async _signOut(){confirm("Sign out of Cairn?")&&(this.dispatchEvent(new Event("cancel")),await We())}_triggerPhotoPicker(){var e;(e=this.renderRoot.querySelector("#photo-file"))==null||e.click()}async _onPhotoChosen(e){var a,o;const t=(a=e.target.files)==null?void 0:a[0];if(e.target.value="",!t)return;if(!t.type.startsWith("image/")){x("Pick an image file (JPG, PNG, etc.).");return}if(t.size>5*1024*1024){x("Photo is too big — keep it under 5 MB.");return}const i=(o=$==null?void 0:$.currentUser)==null?void 0:o.uid,r=k.familyId;if(!i||!r||!ce){x("Can't upload yet — you need to be in a family first.");return}this._uploadingPhoto=!0;try{const s=Ge(ce,`families/${r}/avatars/users/${i}`);await Ye(s,t,{contentType:t.type});const l=await Ue(s);await j(A(w,"users",i),{profilePhotoURL:l,updatedAt:T()}),x("Photo updated.")}catch(s){console.error("Photo upload failed",s),x(`Upload failed: ${s.code??s.message}`,{duration:5e3})}finally{this._uploadingPhoto=!1}}render(){if(!this.open)return n``;const e=this.user,t=this._name.trim()&&this._name.trim()!==((e==null?void 0:e.displayName)??"");return n`
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
    `}}m(ke,"properties",{open:{type:Boolean,reflect:!0},user:{type:Object},pebbleUser:{type:Object},_name:{state:!0},_savingName:{state:!0},_uploadingPhoto:{state:!0}}),m(ke,"styles",C`
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
  `);customElements.define("profile-sheet",ke);const X=class X extends z{constructor(){super(),this.open=!1}static get OPTIONS(){return[{type:"activity",tone:"sage",icon:n`<svg viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
          <path d="M19.5 2.5c-.3-.3-.7-.4-1.1-.4-2.7.1-7.5.8-10.9 4.2C4.3 9.5 3.7 13.3 4.2 16c-1 1.5-1.6 3-1.9 4.2-.1.4.1.8.5.9.4.1.8-.1.9-.5.2-.9.7-2 1.5-3.1.7.3 1.6.5 2.5.5 2 0 4.5-.7 6.9-3.1 3.4-3.4 4.1-8.2 4.2-10.9 0-.4-.1-.8-.4-1.1zm-5.4 9.8c-1.7 1.7-3.5 2.4-5 2.6 1.8-2.6 4.1-4.9 6.9-6.8.4-.2.5-.7.3-1.1-.2-.4-.7-.5-1.1-.3-2.5 1.7-4.7 3.7-6.4 6 .1-1.6.8-3.5 2.5-5.2 2.6-2.6 6.4-3.4 9-3.7-.3 2.6-1.1 6.4-3.7 9z" />
        </svg>`,label:"Group activity",desc:"Weekend plans, outings, day trips — no lodging or flights needed."},{type:"trip",tone:"tide",icon:n`<svg viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
          <path d="M20.4 1.2c-.2-.2-.6-.3-.9-.2L1.7 7.5c-.4.1-.6.5-.6.9 0 .4.3.7.7.8l6.4 1.7 1.6 6.4c.1.4.4.7.8.7.4 0 .7-.2.9-.6L21.1 2.6c.2-.4.1-.8-.2-1.1L20.4 1.2zM8.4 9.4L4.4 8.3l13.4-4.8L8.4 9.4zm1.6 1.2l9.7-9.7-4.8 13.4L11.5 12 9.7 10.6h.3z" />
        </svg>`,label:"Family trip",desc:"Multi-day travel with lodging, flight info, attendees."},{type:"event",tone:"amber",icon:n`<svg viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
          <!-- Bow loops -->
          <path d="M9.5 6.5C8 6.6 6 6.1 6 4.6c0-1 .9-1.6 1.9-1.6 1.6 0 3 1.7 3.4 3.5h-1.8zM12.5 6.5c1.5.1 3.5-.4 3.5-1.9 0-1-.9-1.6-1.9-1.6-1.6 0-3 1.7-3.4 3.5h1.8z"/>
          <!-- Top of box (slimmer) -->
          <rect x="3" y="7" width="16" height="3.2" rx="1.2"/>
          <!-- Box body -->
          <rect x="3.8" y="10.2" width="14.4" height="9.6" rx="1.4"/>
          <!-- Vertical ribbon — cuts box in two -->
          <rect x="9.75" y="7" width="2.5" height="12.8" fill="#000" fill-opacity="0.18"/>
          <!-- Horizontal ribbon across top quarter of box body -->
          <rect x="3.8" y="11.6" width="14.4" height="1.2" fill="#000" fill-opacity="0.18"/>
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
            ${X.OPTIONS.map(e=>n`
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
    `:n``}};m(X,"properties",{open:{type:Boolean,reflect:!0}}),m(X,"styles",C`
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
  `);let $e=X;customElements.define("activity-type-picker",$e);class De extends z{constructor(){super(),this.open=!1,this.floating=!1,this.family=null,this.trips=[],this._messages=[],this._input="",this._loading=!1,this._error="",this._followUps=[]}willUpdate(e){var t;e.has("_messages")&&(this.floating=(((t=this._messages)==null?void 0:t.length)??0)>0)}_onCancel(){this.dispatchEvent(new Event("cancel"))}_suggestions(){const e=[],t=(this.trips??[]).filter(i=>i.start&&new Date(i.start)>=new Date).sort((i,r)=>String(i.start).localeCompare(String(r.start)))[0];return t&&(e.push(`What should we do in ${t.location||t.title}?`),e.push(`What should we pack for ${t.title}?`)),e.push("Plan a family activity for this weekend"),e.push("Gift ideas for an upcoming birthday"),e.slice(0,4)}async _send(e){const t=(e??this._input).trim();if(!(!t||this._loading)){this._error="",this._input="",this._followUps=[],this._messages=[...this._messages,{role:"user",content:t}],this._loading=!0,this.updateComplete.then(()=>this._scrollToBottom());try{const i=this._messages.slice(0,-1).map(a=>({role:a.role,content:a.content})),r=await k.askPebble(t,i);this._messages=[...this._messages,{role:"assistant",content:r.answer}],this._followUps=Array.isArray(r.followUps)?r.followUps:[]}catch(i){console.error(i),(i==null?void 0:i.code)==="functions/unauthenticated"?this._error="Pebble needs you to be signed in.":(i==null?void 0:i.code)==="functions/permission-denied"?this._error="You're not in this family yet.":(i==null?void 0:i.code)==="functions/not-found"||(i==null?void 0:i.code)==="functions/internal"?this._error="Pebble isn't available right now — the Cloud Function may not be deployed yet.":this._error=(i==null?void 0:i.message)??"Pebble could not answer right now."}finally{this._loading=!1,this.updateComplete.then(()=>this._scrollToBottom())}}}_scrollToBottom(){const e=this.renderRoot.querySelector(".thread");e&&(e.scrollTop=e.scrollHeight)}_renderPebbleIcon(){return n`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
      </svg>
    `}render(){if(!this.open)return n``;const e=this._suggestions();return n`
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
    `}}m(De,"properties",{open:{type:Boolean,reflect:!0},floating:{type:Boolean,reflect:!0},family:{type:Object},trips:{type:Array},_messages:{state:!0},_input:{state:!0},_loading:{state:!0},_error:{state:!0},_followUps:{state:!0}}),m(De,"styles",C`
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
  `);customElements.define("pebble-chat",De);class Ve extends z{render(){return n`
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
    `}}m(Ve,"styles",C`
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
  `);customElements.define("discover-pebblepath",Ve);class ze extends z{constructor(){super(),this.code="",this._family=null,this._loading=!0,this._joining=!1,this._error=""}willUpdate(e){e.has("code")&&this.code&&this._lookup()}async _lookup(){var e,t;this._loading=!0,this._error="";try{const i=await k.findFamilyByCairnCode(this.code);if(!i)this._error="Invite code not found. Check it was typed correctly.",this._family=null;else{const r=((t=(e=i.cairnInviteCodeExpiresAt)==null?void 0:e.toDate)==null?void 0:t.call(e))??(i.cairnInviteCodeExpiresAt?new Date(i.cairnInviteCodeExpiresAt):null);!r||r<new Date?(this._error="This invite code has expired. Ask the family for a fresh one.",this._family=null):this._family=i}}catch(i){console.error(i),this._error=(i==null?void 0:i.message)??"Couldn't look up the invite."}finally{this._loading=!1}}async _join(){var e;if(!this._joining){this._joining=!0,this._error="";try{const t=await k.joinFamilyAsCairn(this.code);x(`Welcome to ${((e=this._family)==null?void 0:e.name)??"the family"}.`),this.dispatchEvent(new CustomEvent("joined",{detail:{familyId:t}}))}catch(t){console.error(t),this._error=(t==null?void 0:t.message)??"Could not join."}finally{this._joining=!1}}}_cancel(){this.dispatchEvent(new Event("cancel"))}_inviterFromFamily(e){var r;if(!e)return null;const t=(r=e.memberProfiles)==null?void 0:r[e.createdBy];if(!t)return null;const i=t.profilePhotoURL;return{displayName:t.displayName??"A family member",photoURL:typeof i=="string"&&/^https?:\/\//i.test(i)?i:null}}render(){var r,a,o;const e=this._inviterFromFamily(this._family),t=(((r=this._family)==null?void 0:r.cairnMemberIds)??((a=this._family)==null?void 0:a.memberIds)??[]).length,i=(((o=this._family)==null?void 0:o.memberIds)??[]).length;return n`
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
                ${this._error?n`<div class="error">${this._error}</div>`:""}
              `:n`
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
    `}}m(ze,"properties",{code:{type:String},_family:{state:!0},_loading:{state:!0},_joining:{state:!0},_error:{state:!0}}),m(ze,"styles",C`
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
  `);customElements.define("join-family-screen",ze);class Ce extends z{constructor(){super(),this.error="",this.busy=!1,this.joinCode=""}async _handleSignIn(){if(!this.busy){this.busy=!0,this.error="";try{await qe()}catch(e){this.error=(e==null?void 0:e.message)??"Sign-in failed."}finally{this.busy=!1}}}_renderGoogleIcon(){return n`
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
          ${this.joinCode?n`<div class="invite-banner">
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
              ?disabled=${this.busy||!B}
              @click=${this._handleSignIn}
            >
              ${this._renderGoogleIcon()}
              ${this.busy?"Signing in…":"Continue with Google"}
            </button>
          </div>
          ${B?"":n`<div class="config-hint">
                Sign-in is awaiting your Firebase config — copy
                <code>.env.example</code> to <code>.env</code> and fill in the web-app
                values from PebblePath's Firebase Console.
              </div>`}
          ${this.error?n`<div class="error">${this.error}</div>`:""}
        </glass-panel>
        <div class="footnote">Beta Version</div>
      </div>
    `}}m(Ce,"properties",{error:{state:!0},busy:{state:!0},joinCode:{type:String}}),m(Ce,"styles",C`
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
  `);customElements.define("sign-in-screen",Ce);const W=class W extends z{constructor(){super(),this.value="family"}_select(e){e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent("circle-change",{detail:{value:e},bubbles:!0,composed:!0})))}render(){return n`
      <div class="track" role="tablist" aria-label="Circle">
        ${W.OPTIONS.map(e=>n`
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
    `}};m(W,"properties",{value:{type:String,reflect:!0}}),m(W,"OPTIONS",[{value:"personal",label:"Just me"},{value:"family",label:"Family"},{value:"extended",label:"Extended"}]),m(W,"styles",C`
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
  `);let Se=W;customElements.define("circle-switcher",Se);class Ee extends z{constructor(){super(),this.event=null,this.members=[]}_icon(e){return e==="birthday"?n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 14h14v6H5z" />
        <path d="M5 14c0-2 1.5-3 3-3h8c1.5 0 3 1 3 3" />
        <path d="M12 11V7" />
        <path d="M11 5.5c0-.8.5-1.5 1-2 .5.5 1 1.2 1 2 0 .6-.4 1-1 1s-1-.4-1-1z" fill="currentColor" stroke="none" />
      </svg>`:e==="anniversary"?n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="9" cy="13" r="5" />
        <circle cx="15" cy="13" r="5" />
      </svg>`:n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>`}_fmtDate(e){const t=D(e)??new Date(e);return{day:t.getDate(),month:t.toLocaleString("en-GB",{month:"short"})}}render(){const e=this.event;if(!e)return n``;const t=this._fmtDate(e.date),i=new Map((this.members??[]).map(a=>[a.uid,a])),r=(e.personIds??[]).map(a=>i.get(a)).filter(Boolean);return n`
      <div
        class="row"
        @click=${()=>this.dispatchEvent(new CustomEvent("edit-event",{detail:e,bubbles:!0,composed:!0}))}
      >
        <div class="icon ${e.type}">${this._icon(e.type)}</div>
        <div class="body">
          <div class="title-row">
            <div class="title">${e.title}</div>
            ${r.length>0?n`<span class="faces">
                  ${r.slice(0,3).map(a=>n`
                      <member-chip
                        .name=${a.displayName}
                        .photo=${a.photoURL??""}
                        .hue=${a.hue}
                        size="22"
                      ></member-chip>
                    `)}
                </span>`:""}
          </div>
          ${e.subtitle?n`<div class="meta">${e.subtitle}</div>`:""}
        </div>
        <div class="date">
          ${t.day}
          <small>${t.month}</small>
        </div>
      </div>
    `}}m(Ee,"properties",{event:{type:Object},members:{type:Array}}),m(Ee,"styles",C`
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
  `);customElements.define("event-row",Ee);const _t={uid:"preview-user",displayName:"Thomas Paris",email:"thomas@example.com",photoURL:null},Me=[{uid:"thomas",displayName:"Thomas",circles:["immediate"],hue:198},{uid:"partner",displayName:"Élise",circles:["immediate"],hue:8},{uid:"kid1",displayName:"Oscar",circles:["immediate"],hue:142},{uid:"kid2",displayName:"Mila",circles:["immediate"],hue:44},{uid:"mum",displayName:"Mum",circles:["extended"],hue:320},{uid:"dad",displayName:"Dad",circles:["extended"],hue:28},{uid:"sister",displayName:"Camille",circles:["extended"],hue:280},{uid:"bro-in-law",displayName:"Sam",circles:["extended"],hue:175},{uid:"niece",displayName:"Léa",circles:["extended"],hue:100}],kt=[{id:"t1",title:"Côte d’Azur, summer",location:"Antibes, France",start:"2026-07-12",end:"2026-07-21",coverGradient:"linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)",lodgingHost:"Airbnb",lodgingTitle:"Villa near Cap d’Antibes",attendees:["thomas","partner","kid1","kid2","mum","dad"],notes:"Mum + Dad arrive day 2. Dinner reservations at La Guérite booked.",visibility:"extended"},{id:"t2",title:"Half-term in the Alps",location:"Chamonix, France",start:"2026-10-24",end:"2026-10-31",coverGradient:"linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)",lodgingHost:"Booking.com",lodgingTitle:"Chalet Les Drus",attendees:["thomas","partner","kid1","kid2"],notes:"Need ski school for the kids — book by September.",visibility:"immediate"},{id:"t3",title:"Camille’s 40th",location:"Lisbon, Portugal",start:"2026-09-05",end:"2026-09-08",coverGradient:"linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)",lodgingHost:"Airbnb",lodgingTitle:"Alfama rooftop apartment",attendees:["thomas","partner","sister","bro-in-law"],notes:"Surprise. Don’t mention to Camille.",visibility:"family"}],$t=[{id:"e1",type:"birthday",date:"2026-05-24",personIds:["mum"],title:"Mum’s birthday"},{id:"e2",type:"anniversary",date:"2026-05-28",personIds:["mum","dad"],title:"Mum & Dad’s anniversary",subtitle:"38 years"},{id:"e3",type:"birthday",date:"2026-06-11",personIds:["kid1"],title:"Oscar turns 7"},{id:"e4",type:"birthday",date:"2026-06-30",personIds:["niece"],title:"Léa’s birthday"}];class Fe extends z{constructor(){super(),this.user=_t,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this.preview=!1,this.circle="extended",this._formOpen=!1,this._formTrip=null,this._formBusy=!1,this._membersOpen=!1,this._eventFormOpen=!1,this._eventFormEvent=null,this._eventFormBusy=!1,this._allTripsOpen=!1,this._editingFamilyName=!1,this._importOpen=!1,this._profileOpen=!1,this._typePickerOpen=!1,this._formMode="trip",this._pebbleOpen=!1,this._dragOverTarget=null;const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1)}async _saveFamilyName(e){var a,o;const i=(e.target.value??"").trim(),r=((a=this.family)==null?void 0:a.name)??"";if(i&&i!==r&&((o=this.family)!=null&&o.id))try{const{db:s,doc:l,updateDoc:p,serverTimestamp:c}=await Re(async()=>{const{db:h,doc:g,updateDoc:v,serverTimestamp:y}=await Promise.resolve().then(()=>pt);return{db:h,doc:g,updateDoc:v,serverTimestamp:y}},void 0);await p(l(s,"families",this.family.id),{name:i,updatedAt:c()}),x("Family name updated.")}catch(s){console.error("Update family name failed:",s),x(`Couldn't save: ${s.code??s.message}`,{duration:5e3})}this._editingFamilyName=!1}_liveImmediate(){var e;return this.preview||!((e=this.user)!=null&&e.uid)?Me.filter(t=>t.circles.includes("immediate")):ut(this.user.uid,this.user,this.pebbleUser,this.family,this.children)}_liveExtended(){return this.preview?Me.filter(e=>e.circles.includes("extended")):[]}_liveTrips(){return this.preview?kt:this.trips??[]}_liveEvents(){if(this.preview)return $t;const e=r=>{const{date:a,yearsElapsed:o}=bt(r);return{...r,date:a?mt(a):r.date,_yearsElapsed:o,_originalDate:r.date}},t=gt(this.children).map(e),i=(this.events??[]).map(e);return[...t,...i].sort((r,a)=>String(r.date).localeCompare(String(a.date)))}_filteredMembers(){const e=this._liveImmediate(),t=this._liveExtended();return this.circle==="personal"?e.filter(i=>{var r;return i.uid===((r=this.user)==null?void 0:r.uid)}):this.circle==="family"?e:[...e,...t]}_circleTrips(){var o;const e=this._liveTrips(),t=((o=this.user)==null?void 0:o.uid)??"thomas";let i;this.circle==="personal"?i=e.filter(s=>{var l;return(l=s.attendees)==null?void 0:l.includes(t)}):this.circle==="family"?i=e.filter(s=>s.visibility!=="extended"&&this._userCanSeeTrip(s)):i=e.filter(s=>this._userCanSeeTrip(s));const r=new Set,a=[];for(const s of i){const l=s.id??`${s.title}|${s.start}|${s.end}`;r.has(l)||(r.add(l),a.push(s))}return a}_filteredTrips(){const e=new Date;return e.setHours(0,0,0,0),this._circleTrips().filter(t=>t.end?D(t.end)>=e:!0)}_userCanSeeTrip(e){var i,r,a,o,s;const t=(i=this.user)==null?void 0:i.uid;if(!t)return!1;if((r=e.attendees)!=null&&r.includes(t)||(a=e.viewers)!=null&&a.includes(t)||e.visibility==="family")return!0;if(e.visibility==="extended"){if((((o=this.family)==null?void 0:o.memberIds)??[]).includes(t))return!0;const l=e.targetSubGroups??[];if(l.length===0)return!0;const p=Object.entries(((s=this.family)==null?void 0:s.subGroups)??{}).filter(([,c])=>(c.memberIds??[]).includes(t)).map(([c])=>c);return l.some(c=>p.includes(c))}return!1}_filteredEvents(){const e=new Set(this._filteredMembers().map(t=>t.uid));return this._liveEvents().filter(t=>t.personIds.some(i=>e.has(i)))}_smartCallout(){var s,l;const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),i=1440*60*1e3,r=p=>Math.round((p-t)/i);for(const p of this._circleTrips()){if(!p.start||!p.end)continue;const c=D(p.start),h=D(p.end);if(c.setHours(0,0,0,0),h.setHours(0,0,0,0),c<=t&&t<=h){const g=r(c)+1,v=r(h)-r(c)+1,y=((s=p.location)==null?void 0:s.trim())||p.title;return`Day ${g} of ${v} in ${y}.`}}let a=null,o=1/0;for(const p of this._circleTrips()){if(!p.start)continue;const c=D(p.start);if(!c)continue;const h=r(c);h>0&&h<o&&(a={kind:"trip",item:p},o=h)}for(const p of this._filteredEvents()){if(!p.date)continue;const c=D(p.date);if(!c)continue;const h=r(c);h>=0&&h<o&&(a={kind:"event",item:p},o=h)}if(!a)return null;if(a.kind==="trip"){const p=((l=a.item.location)==null?void 0:l.trim())||a.item.title;return o===1?`${p} starts tomorrow.`:o<=14?`${p} in ${o} days.`:o<=60?`Next trip: ${p} in ${o} days.`:null}return o===0?`${a.item.title} — today.`:o===1?`${a.item.title} — tomorrow.`:o<=7?`${a.item.title} in ${o} days.`:null}_tripDensityByDay(e){const t=new Map;for(const i of this._filteredTrips()){if(!i.start||!i.end)continue;const r=D(i.start),a=D(i.end);if(Number.isNaN(r.getTime())||Number.isNaN(a.getTime())||r.getFullYear()>e||a.getFullYear()<e)continue;const o=new Date(Math.max(r,new Date(e,0,1))),s=new Date(Math.min(a,new Date(e,11,31)));for(;o<=s;){const l=`${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`;t.set(l,Math.min(1,(t.get(l)??0)+.5)),o.setDate(o.getDate()+1)}}return t}_shiftMonth(e){const t=this._displayMonth;this._displayMonth=new Date(t.getFullYear(),t.getMonth()+e,1)}_jumpToMonth(e,t){this._displayMonth=new Date(e,t,1)}_resetToToday(){const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1)}_renderStone({label:e,members:t,pebbleClass:i,emptyLabel:r,onClick:a,maxChips:o=6,dropTargetId:s=null,draggable:l=()=>!1}){const p=s?{dragover:y=>{var u;(u=y.dataTransfer.types)!=null&&u.includes("text/cairn-uid")&&(y.preventDefault(),this._dragOverTarget=s)},dragleave:()=>{this._dragOverTarget===s&&(this._dragOverTarget=null)},drop:async y=>{y.preventDefault(),this._dragOverTarget=null;const u=y.dataTransfer.getData("text/cairn-uid");if(!u)return;const b=s==="extended"?null:s;try{await k.setCairnMemberSubGroup(u,b),x(b?`Moved to ${e}.`:"Moved to extended.")}catch(_){console.error("Move failed:",_),x(`Couldn't move: ${_.code??_.message}`,{duration:4e3})}}}:{},c=s&&this._dragOverTarget===s,h=`pebble ${i}${c?" pebble-drop":""}`;if(!t||t.length===0)return n`
        <button
          class="stone"
          @click=${a}
          title=${r}
          @dragover=${p.dragover}
          @dragleave=${p.dragleave}
          @drop=${p.drop}
        >
          <span class="${h} pebble-empty">${r}</span>
          <span class="stone-label">${e}</span>
        </button>
      `;const g=t.slice(0,o),v=t.length-g.length;return n`
      <button
        class="stone"
        @click=${a}
        title="${e} — manage members"
        @dragover=${p.dragover}
        @dragleave=${p.dragleave}
        @drop=${p.drop}
      >
        <span class="${h}">
          <span class="stone-chips">
            ${g.map(y=>{const u=l(y);return n`
                <member-chip
                  draggable=${u?"true":"false"}
                  class=${u?"is-draggable":""}
                  @dragstart=${b=>{if(!u){b.preventDefault();return}b.stopPropagation(),b.dataTransfer.setData("text/cairn-uid",y.uid),b.dataTransfer.effectAllowed="move"}}
                  .name=${y.displayName}
                  .photo=${y.photoURL??""}
                  .hue=${y.hue}
                  size="26"
                ></member-chip>
              `})}
            ${v>0?n`<span class="stone-more">+${v}</span>`:""}
          </span>
        </span>
        <span class="stone-label">${e}</span>
      </button>
    `}_renderMonthly(){const e=new Date,t=this._displayMonth??e,i=t.getFullYear(),r=t.getMonth(),o=(new Date(i,r,1).getDay()+6)%7,s=new Date(i,r+1,0).getDate(),l=new Map,p=(b,_)=>{l.has(b)||l.set(b,_)},c=[];for(const b of this._filteredEvents()){const _=D(b.date);_&&_.getFullYear()===i&&_.getMonth()===r&&(c.push(_.getDate()),p(_.getDate(),b.title??""))}const h=new Set;for(const b of this._filteredTrips()){if(!b.start||!b.end)continue;const _=D(b.start),S=D(b.end);if(Number.isNaN(_.getTime())||Number.isNaN(S.getTime())||_.getFullYear()>i||S.getFullYear()<i||_.getMonth()>r&&S.getMonth()>r||_.getMonth()<r&&S.getMonth()<r)continue;const N=_.getMonth()===r?_.getDate():1,E=S.getMonth()===r?S.getDate():s;for(let M=N;M<=E;M++)h.add(M),p(M,b.title??"")}const g=[];for(let b=0;b<o;b++)g.push(n`<div class="cal-cell empty"></div>`);const v=e.getFullYear()===i&&e.getMonth()===r;for(let b=1;b<=s;b++){const _=v&&b===e.getDate(),S=c.includes(b),N=h.has(b),E=_?l.get(b)??"Today":l.get(b),M=["cal-cell",_?"today":"",S?"has-event":"",N?"has-trip":""].filter(Boolean).join(" ");g.push(n`<div class=${M} title=${E?`${b} — ${E}`:""}>
        <span class="cal-cell-day">${b}</span>
        ${E?n`<span class="cal-cell-label">${E}</span>`:""}
      </div>`)}const y=new Date(i,r,1).toLocaleString("en-GB",{month:"long",year:"numeric"});return n`
      <div class="cal-head">
        <h3>${y}</h3>
        <div class="nav">
          ${!v?n`<button
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
        ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(b=>n`<div class="cal-dow">${b}</div>`)}
        ${g}
      </div>
    `}_openCreate(){if(this.preview){x("Sign in to create real activities.");return}if(!k.familyId){x("You need a PebblePath family first.");return}this._typePickerOpen=!0}_onTypePicked(e){this._typePickerOpen=!1;const t=e.detail.type;if(t==="event"){this._eventFormEvent=null,this._eventFormOpen=!0;return}if(t==="import"){this._importOpen=!0;return}this._formMode=t,this._formTrip=null,this._formOpen=!0}_openEdit(e){if(this.preview){x("Sign in to edit real activities.");return}const t=e.lodgingUrl||e.lodgingHost||e.flightNumber||e.flightDepartAirport;this._formMode=t?"trip":"activity",this._formTrip=e,this._formOpen=!0}async _onSaveTrip(e){const t=e.detail;this._formBusy=!0;try{await k.saveTrip(t),this._formOpen=!1,this._formTrip=null,x(t.id?"Trip updated.":"Trip created.")}catch(i){console.error("Save trip failed:",i),x(`Couldn't save: ${i.code??i.message}`,{duration:5e3})}finally{this._formBusy=!1}}async _onDeleteTrip(e){this._formBusy=!0;try{await k.deleteTrip(e.detail.id),this._formOpen=!1,this._formTrip=null,x("Trip deleted.")}catch(t){console.error("Delete trip failed:",t),x(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._formBusy=!1}}_openCreateEvent(){if(this.preview){x("Sign in to add real events.");return}if(!k.familyId){x("You need a family first.");return}this._eventFormEvent=null,this._eventFormOpen=!0}_openEditEvent(e){if(this.preview){x("Sign in to edit real events.");return}if(e!=null&&e._childId){const t=prompt(`Edit ${e._childName}'s birthday (YYYY-MM-DD):`,e.date);if(!t)return;if(!/^\d{4}-\d{2}-\d{2}$/.test(t)){x("Use YYYY-MM-DD format.");return}k.updateChildBirthday(e._childId,new Date(t)).then(()=>x(`Updated ${e._childName}'s birthday.`)).catch(i=>{console.error("Update child birthday failed:",i),x(`Couldn't update: ${i.code??i.message}`,{duration:5e3})});return}this._eventFormEvent={...e,date:e._originalDate??e.date},this._eventFormOpen=!0}async _onSaveEvent(e){this._eventFormBusy=!0;try{await k.saveEvent(e.detail),this._eventFormOpen=!1,this._eventFormEvent=null,x(e.detail.id?"Event updated.":"Event added.")}catch(t){console.error("Save event failed:",t),x(`Couldn't save: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}async _onDeleteEvent(e){this._eventFormBusy=!0;try{await k.deleteEvent(e.detail.id),this._eventFormOpen=!1,this._eventFormEvent=null,x("Event deleted.")}catch(t){console.error("Delete event failed:",t),x(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}render(){var v,y,u,b,_,S,N,E,M,O,K;const e=this._filteredTrips(),t=this._filteredEvents(),i=this._liveImmediate(),r=this._liveExtended(),a=i.concat(r),o=(((v=this.user)==null?void 0:v.displayName)??"there").split(" ")[0],s=new Date,l=new Date(s.getFullYear(),s.getMonth(),1),p=new Date(s.getFullYear(),s.getMonth()+1,0),c=t.filter(f=>{const F=D(f.date);return F&&F.getFullYear()===s.getFullYear()&&F.getMonth()===s.getMonth()}),g=this._circleTrips().filter(f=>{if(!f.start||!f.end)return!1;const F=D(f.start),Y=D(f.end);return Number.isNaN(F.getTime())||Number.isNaN(Y.getTime())?!1:F<=p&&Y>=l}).length+c.length;return n`
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
        <div
          class="pebble-search"
          @click=${f=>{var F;f.target.tagName!=="INPUT"&&((F=this.renderRoot.querySelector(".pebble-search-input"))==null||F.focus())}}
        >
          <svg class="pebble-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
          </svg>
          <input
            class="pebble-search-input"
            type="text"
            placeholder="Ask Pebble — weekend plans, trip ideas…"
            @focus=${()=>{var f;this._pebbleOpen=!0,(f=this.renderRoot.querySelector(".pebble-search-input"))==null||f.blur()}}
            @keydown=${f=>{f.key==="Enter"&&(f.preventDefault(),this._pebbleOpen=!0)}}
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
            title="${((y=this.user)==null?void 0:y.displayName)??"Profile"} — open settings"
            aria-label="Open profile settings"
          >
            <member-chip
              .name=${((u=this.user)==null?void 0:u.displayName)??"You"}
              .photo=${((b=this.user)==null?void 0:b.photoURL)??""}
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

      <main>
        <div class="hello">
          <div>
            <h1>Hi ${o}.</h1>
            ${(()=>{const f=this._smartCallout();return f?n`<div class="smart">${f}</div>`:""})()}
            ${g>0?n`<div class="stat">
                  <span>${g}</span> ${g===1?"activity":"activities"} this month
                </div>`:""}
            ${this.family?this._editingFamilyName?n`<input
                    class="family-name-input"
                    type="text"
                    .value=${this.family.name??""}
                    autofocus
                    @blur=${this._saveFamilyName}
                    @keydown=${f=>{f.key==="Enter"&&f.target.blur(),f.key==="Escape"&&(f.target.value=this.family.name??"",this._editingFamilyName=!1)}}
                  />`:n`<div
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
              `:n`
                <div class="trips-row">
                  ${e.map(f=>n`<trip-card
                      .trip=${f}
                      .members=${a}
                      @edit-trip=${F=>this._openEdit(F.detail)}
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
                <h3>${((_=this._displayMonth)==null?void 0:_.getFullYear())??s.getFullYear()}</h3>
                <div style="font-size:12px;color:var(--text-tertiary);">Yearly</div>
              </div>
              <yearly-view
                .year=${((S=this._displayMonth)==null?void 0:S.getFullYear())??s.getFullYear()}
                .tripDays=${this._tripDensityByDay(((N=this._displayMonth)==null?void 0:N.getFullYear())??s.getFullYear())}
                .trips=${this._circleTrips()}
                .events=${this._liveEvents()}
                .today=${s}
                @month-select=${f=>this._jumpToMonth(f.detail.year,f.detail.month)}
              ></yearly-view>
            </glass-panel>
          </div>
        </section>

        <section>
          <div class="section-head">
            <h2>Celebrations</h2>
            <button class="link" @click=${()=>this._openCreateEvent()}>+ Add event</button>
          </div>
          ${(()=>{const f=(I,G)=>String(I.date).localeCompare(String(G.date)),F=t.filter(I=>I.type==="birthday").slice().sort(f),Y=t.filter(I=>I.type==="anniversary").slice().sort(f),Z=t.filter(I=>I.type!=="birthday"&&I.type!=="anniversary").slice().sort(f),V=(I,G,P)=>n`
              <glass-panel padding="sm" variant="strong" class="cel-col">
                <div class="cel-col-head">
                  <span class="cel-col-title">${I}</span>
                </div>
                ${G.length===0?n`<div class="cel-empty">${P}</div>`:G.map(L=>n`<event-row
                        .event=${L}
                        .members=${a}
                        @edit-event=${ie=>this._openEditEvent(ie.detail)}
                      ></event-row>`)}
              </glass-panel>
            `;return n`
              <div class="cel-row">
                ${V("Birthdays",F,"No birthdays yet.")}
                ${V("Anniversaries",Y,"No anniversaries yet.")}
              </div>
              ${Z.length>0?n`<glass-panel padding="md" variant="strong" style="margin-top:18px;">
                    <div class="cel-col-head">
                      <span class="cel-col-title">Other</span>
                    </div>
                    ${Z.map(I=>n`<event-row
                        .event=${I}
                        .members=${a}
                        @edit-event=${G=>this._openEditEvent(G.detail)}
                      ></event-row>`)}
                  </glass-panel>`:""}
            `})()}
        </section>

        <section>
          <div class="section-head">
            <h2>Your Cairn</h2>
            <button class="link" @click=${()=>this._membersOpen=!0}>
              Manage members
            </button>
          </div>
          <glass-panel padding="md" variant="strong">
            ${(()=>{var V,I,G;const f=i.find(P=>{var L;return P.uid===((L=this.user)==null?void 0:L.uid)}),F=i.filter(P=>{var L;return P.uid!==((L=this.user)==null?void 0:L.uid)}),Y=Object.entries(((V=this.family)==null?void 0:V.subGroups)??{}),Z=new Map(a.map(P=>[P.uid,P]));return n`
                <div class="cairn-stack">
                  <!-- Top: you (terracotta pebble) -->
                  <button
                    class="stone"
                    @click=${()=>this._profileOpen=!0}
                    title="Your profile"
                  >
                    <span class="pebble pebble-self">
                      <span class="stone-chips">
                        <member-chip
                          .name=${(f==null?void 0:f.displayName)??((I=this.user)==null?void 0:I.displayName)??"You"}
                          .photo=${(f==null?void 0:f.photoURL)??((G=this.user)==null?void 0:G.photoURL)??""}
                          .hue=${(f==null?void 0:f.hue)??198}
                          size="28"
                        ></member-chip>
                      </span>
                    </span>
                    <span class="stone-label">You</span>
                  </button>

                  <!-- Family (teal pebble) — read-only for drag-and-drop:
                       its members are PP co-parents/children, not the Cairn
                       ring, so they can't be moved into sub-groups. -->
                  ${this._renderStone({label:"Family",members:F,pebbleClass:"pebble-family",emptyLabel:"+ Add co-parent or child",onClick:()=>this._membersOpen=!0})}

                  <!-- Extended (deeper teal, larger) — drop here to strip
                       a Cairn member from every sub-group. -->
                  ${this._renderStone({label:"Extended",members:r,pebbleClass:"pebble-extended",emptyLabel:"+ Invite extended family",onClick:()=>this._membersOpen=!0,dropTargetId:"extended",draggable:P=>P.role==="extended"})}

                  <!-- Sub-group base row — each stone is a drop target for
                       its group; chips inside are draggable so they can be
                       moved into another sub-group or back to extended. -->
                  ${Y.length>0?n`
                        <div class="subgroup-row">
                          ${Y.map(([P,L])=>{const ie=(L.memberIds??[]).map(re=>Z.get(re)).filter(Boolean);return this._renderStone({label:L.name??"Group",members:ie,pebbleClass:"pebble-subgroup",emptyLabel:`${L.name??"Group"} (empty)`,onClick:()=>this._membersOpen=!0,maxChips:4,dropTargetId:P,draggable:re=>re.role==="extended"})})}
                        </div>
                      `:""}
                </div>
                ${F.length===0&&r.length===0?n`
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
                    `:n`
                      <div class="cairn-meta">
                        <button @click=${()=>this._membersOpen=!0}>
                          + Invite
                        </button>
                        <span style="color:var(--text-tertiary);">·</span>
                        <button @click=${()=>this._membersOpen=!0}>
                          + Sub-group
                        </button>
                      </div>
                    `}
              `})()}
          </glass-panel>
        </section>

        <discover-pebblepath></discover-pebblepath>
      </main>

      <trip-form
        ?open=${this._formOpen}
        .trip=${this._formTrip}
        .members=${i}
        .currentUid=${((E=this.user)==null?void 0:E.uid)??""}
        .familyId=${((M=this.family)==null?void 0:M.id)??""}
        .busy=${this._formBusy}
        .formMode=${this._formMode}
        .subGroups=${((O=this.family)==null?void 0:O.subGroups)??{}}
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
        .familyId=${((K=this.family)==null?void 0:K.id)??""}
        .busy=${this._eventFormBusy}
        @save=${this._onSaveEvent}
        @remove=${this._onDeleteEvent}
        @cancel=${()=>{this._eventFormOpen=!1,this._eventFormEvent=null}}
      ></event-form>

      <all-trips-modal
        ?open=${this._allTripsOpen}
        .trips=${this._circleTrips()}
        .members=${a}
        @edit-trip=${f=>{this._allTripsOpen=!1,this._openEdit(f.detail)}}
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
    `}}m(Fe,"properties",{user:{type:Object},pebbleUser:{type:Object},family:{type:Object},children:{type:Array},trips:{type:Array},events:{type:Array},preview:{type:Boolean},circle:{state:!0},_formOpen:{state:!0},_formTrip:{state:!0},_formBusy:{state:!0},_membersOpen:{state:!0},_eventFormOpen:{state:!0},_eventFormEvent:{state:!0},_eventFormBusy:{state:!0},_displayMonth:{state:!0},_allTripsOpen:{state:!0},_editingFamilyName:{state:!0},_importOpen:{state:!0},_profileOpen:{state:!0},_typePickerOpen:{state:!0},_formMode:{state:!0},_pebbleOpen:{state:!0},_dragOverTarget:{state:!0}}),m(Fe,"styles",C`
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
      align-items: flex-start;
      justify-content: flex-start;
      padding: 4px 5px 5px;
      font-size: 12px;
      color: var(--text-secondary);
      gap: 2px;
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
      width: 260px;
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
    }
    /* Sub-group palette rotation — alternate terracotta + teal so the
       base row reads as varied pebbles, not one repeated colour. */
    .subgroup-row .stone:nth-child(odd) .pebble {
      background:
        radial-gradient(
          ellipse 80% 60% at 50% 30%,
          #c87a5e 0%,
          #a05d3e 55%,
          #6b3a25 100%
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
      font-size: 10.5px;
      color: var(--text-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.12em;
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
    .cairn-meta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px dashed rgba(255, 248, 235, 0.1);
    }
    .cairn-meta button {
      background: transparent;
      border: none;
      color: var(--text-secondary);
      font: inherit;
      font-size: 12.5px;
      cursor: pointer;
    }
    .cairn-meta button:hover {
      color: var(--text-primary);
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
  `);customElements.define("home-screen",Fe);const ae="cairn:pendingJoinCode";class Xe extends z{constructor(){super(),this.authUser=null,this.loading=!0;const e=new URLSearchParams(window.location.search);this.preview=e.has("preview");const t=e.get("join");if(t)try{localStorage.setItem(ae,t)}catch{}let i=null;try{i=localStorage.getItem(ae)}catch{}this.joinCode=t??i??null,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this._unsubAuth=null,this._onDataChange=()=>{this.pebbleUser=k.state.user,this.family=k.state.family,this.children=k.state.children,this.trips=k.state.trips,this.events=k.state.events}}_clearJoinState(){this.joinCode=null;try{localStorage.removeItem(ae)}catch{}const e=new URL(window.location.href);e.searchParams.delete("join"),window.history.replaceState({},"",e.toString())}connectedCallback(){if(super.connectedCallback(),this.preview){this.loading=!1;return}k.addEventListener("change",this._onDataChange),this._unsubAuth=Je(e=>{this.authUser=e,this.loading=!1,e?k.start(e.uid):k.stop()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubAuth)==null||e.call(this),k.removeEventListener("change",this._onDataChange)}_composeViewer(){var t,i;const e=this.authUser;return{uid:e.uid,displayName:e.displayName??((t=this.pebbleUser)==null?void 0:t.displayName)??"You",email:e.email??((i=this.pebbleUser)==null?void 0:i.email)??"",photoURL:Ke(e,this.pebbleUser)}}render(){return this.loading?n``:this.preview?n`<home-screen preview></home-screen>`:this.authUser?this.joinCode?n`
        <join-family-screen
          .code=${this.joinCode}
          @joined=${()=>this._clearJoinState()}
          @cancel=${()=>this._clearJoinState()}
        ></join-family-screen>
      `:n`
      <home-screen
        .user=${this._composeViewer()}
        .pebbleUser=${this.pebbleUser}
        .family=${this.family}
        .children=${this.children}
        .trips=${this.trips}
        .events=${this.events}
      ></home-screen>
    `:n`
        <sign-in-screen
          .joinCode=${this.joinCode??""}
        ></sign-in-screen>
      `}}m(Xe,"properties",{authUser:{state:!0},loading:{state:!0},preview:{state:!0},joinCode:{state:!0},pebbleUser:{state:!0},family:{state:!0},children:{state:!0},trips:{state:!0},events:{state:!0}});customElements.define("cairn-app",Xe);
//# sourceMappingURL=index-Cpa27fm_.js.map
