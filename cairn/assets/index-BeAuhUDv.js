var mp=Object.defineProperty;var gp=(r,e,t)=>e in r?mp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var K=(r,e,t)=>gp(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=globalThis,ta=_i.ShadowRoot&&(_i.ShadyCSS===void 0||_i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,na=Symbol(),ic=new WeakMap;let eh=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==na)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ta&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=ic.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ic.set(t,e))}return e}toString(){return this.cssText}};const yp=r=>new eh(typeof r=="string"?r:r+"",void 0,na),De=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,i,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new eh(t,r,na)},_p=(r,e)=>{if(ta)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),i=_i.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},sc=ta?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return yp(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vp,defineProperty:bp,getOwnPropertyDescriptor:wp,getOwnPropertyNames:Ep,getOwnPropertySymbols:Tp,getPrototypeOf:Ip}=Object,xt=globalThis,oc=xt.trustedTypes,Ap=oc?oc.emptyScript:"",Gs=xt.reactiveElementPolyfillSupport,mr=(r,e)=>r,lo={toAttribute(r,e){switch(e){case Boolean:r=r?Ap:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},th=(r,e)=>!vp(r,e),ac={attribute:!0,type:String,converter:lo,reflect:!1,useDefault:!1,hasChanged:th};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),xt.litPropertyMetadata??(xt.litPropertyMetadata=new WeakMap);let bn=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ac){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&bp(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:s}=wp(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:i,set(a){const l=i==null?void 0:i.call(this);s==null||s.call(this,a),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ac}static _$Ei(){if(this.hasOwnProperty(mr("elementProperties")))return;const e=Ip(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(mr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mr("properties"))){const t=this.properties,n=[...Ep(t),...Tp(t)];for(const i of n)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(sc(i))}else e!==void 0&&t.push(sc(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _p(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var s;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const a=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:lo).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){var s,a;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=n.getPropertyOptions(i),u=typeof l.converter=="function"?{fromAttribute:l.converter}:((s=l.converter)==null?void 0:s.fromAttribute)!==void 0?l.converter:lo;this._$Em=i;const d=u.fromAttribute(t,l.type);this[i]=d??((a=this._$Ej)==null?void 0:a.get(i))??d,this._$Em=null}}requestUpdate(e,t,n,i=!1,s){var a;if(e!==void 0){const l=this.constructor;if(i===!1&&(s=this[e]),n??(n=l.getPropertyOptions(e)),!((n.hasChanged??th)(s,t)||n.useDefault&&n.reflect&&s===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:s},a){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),s!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,a]of i){const{wrapped:l}=a,u=this[s];l!==!0||this._$AL.has(s)||u===void 0||this.C(s,void 0,a,u)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};bn.elementStyles=[],bn.shadowRootOptions={mode:"open"},bn[mr("elementProperties")]=new Map,bn[mr("finalized")]=new Map,Gs==null||Gs({ReactiveElement:bn}),(xt.reactiveElementVersions??(xt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr=globalThis,lc=r=>r,Ci=gr.trustedTypes,cc=Ci?Ci.createPolicy("lit-html",{createHTML:r=>r}):void 0,nh="$lit$",wt=`lit$${Math.random().toFixed(9).slice(2)}$`,rh="?"+wt,xp=`<${rh}>`,rn=document,Tr=()=>rn.createComment(""),Ir=r=>r===null||typeof r!="object"&&typeof r!="function",ra=Array.isArray,Sp=r=>ra(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ws=`[ 	
\f\r]`,lr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,uc=/-->/g,hc=/>/g,Wt=RegExp(`>|${Ws}(?:([^\\s"'>=/]+)(${Ws}*=${Ws}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dc=/'/g,fc=/"/g,ih=/^(?:script|style|textarea|title)$/i,Rp=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),k=Rp(1),Pn=Symbol.for("lit-noChange"),_e=Symbol.for("lit-nothing"),pc=new WeakMap,Qt=rn.createTreeWalker(rn,129);function sh(r,e){if(!ra(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return cc!==void 0?cc.createHTML(e):e}const Cp=(r,e)=>{const t=r.length-1,n=[];let i,s=e===2?"<svg>":e===3?"<math>":"",a=lr;for(let l=0;l<t;l++){const u=r[l];let d,f,m=-1,y=0;for(;y<u.length&&(a.lastIndex=y,f=a.exec(u),f!==null);)y=a.lastIndex,a===lr?f[1]==="!--"?a=uc:f[1]!==void 0?a=hc:f[2]!==void 0?(ih.test(f[2])&&(i=RegExp("</"+f[2],"g")),a=Wt):f[3]!==void 0&&(a=Wt):a===Wt?f[0]===">"?(a=i??lr,m=-1):f[1]===void 0?m=-2:(m=a.lastIndex-f[2].length,d=f[1],a=f[3]===void 0?Wt:f[3]==='"'?fc:dc):a===fc||a===dc?a=Wt:a===uc||a===hc?a=lr:(a=Wt,i=void 0);const A=a===Wt&&r[l+1].startsWith("/>")?" ":"";s+=a===lr?u+xp:m>=0?(n.push(d),u.slice(0,m)+nh+u.slice(m)+wt+A):u+wt+(m===-2?l:A)}return[sh(r,s+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class Ar{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,a=0;const l=e.length-1,u=this.parts,[d,f]=Cp(e,t);if(this.el=Ar.createElement(d,n),Qt.currentNode=this.el.content,t===2||t===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(i=Qt.nextNode())!==null&&u.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const m of i.getAttributeNames())if(m.endsWith(nh)){const y=f[a++],A=i.getAttribute(m).split(wt),S=/([.?@])?(.*)/.exec(y);u.push({type:1,index:s,name:S[2],strings:A,ctor:S[1]==="."?kp:S[1]==="?"?Dp:S[1]==="@"?Np:Ji}),i.removeAttribute(m)}else m.startsWith(wt)&&(u.push({type:6,index:s}),i.removeAttribute(m));if(ih.test(i.tagName)){const m=i.textContent.split(wt),y=m.length-1;if(y>0){i.textContent=Ci?Ci.emptyScript:"";for(let A=0;A<y;A++)i.append(m[A],Tr()),Qt.nextNode(),u.push({type:2,index:++s});i.append(m[y],Tr())}}}else if(i.nodeType===8)if(i.data===rh)u.push({type:2,index:s});else{let m=-1;for(;(m=i.data.indexOf(wt,m+1))!==-1;)u.push({type:7,index:s}),m+=wt.length-1}s++}}static createElement(e,t){const n=rn.createElement("template");return n.innerHTML=e,n}}function kn(r,e,t=r,n){var a,l;if(e===Pn)return e;let i=n!==void 0?(a=t._$Co)==null?void 0:a[n]:t._$Cl;const s=Ir(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=i:t._$Cl=i),i!==void 0&&(e=kn(r,i._$AS(r,e.values),i,n)),e}class Pp{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??rn).importNode(t,!0);Qt.currentNode=i;let s=Qt.nextNode(),a=0,l=0,u=n[0];for(;u!==void 0;){if(a===u.index){let d;u.type===2?d=new ia(s,s.nextSibling,this,e):u.type===1?d=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(d=new Vp(s,this,e)),this._$AV.push(d),u=n[++l]}a!==(u==null?void 0:u.index)&&(s=Qt.nextNode(),a++)}return Qt.currentNode=rn,i}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}let ia=class oh{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=_e,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=kn(this,e,t),Ir(e)?e===_e||e==null||e===""?(this._$AH!==_e&&this._$AR(),this._$AH=_e):e!==this._$AH&&e!==Pn&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Sp(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_e&&Ir(this._$AH)?this._$AA.nextSibling.data=e:this.T(rn.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ar.createElement(sh(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(t);else{const a=new Pp(i,this),l=a.u(this.options);a.p(t),this.T(l),this._$AH=a}}_$AC(e){let t=pc.get(e.strings);return t===void 0&&pc.set(e.strings,t=new Ar(e)),t}k(e){ra(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const s of e)i===t.length?t.push(n=new oh(this.O(Tr()),this.O(Tr()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){const i=lc(e).nextSibling;lc(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}};class Ji{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,s){this.type=1,this._$AH=_e,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_e}_$AI(e,t=this,n,i){const s=this.strings;let a=!1;if(s===void 0)e=kn(this,e,t,0),a=!Ir(e)||e!==this._$AH&&e!==Pn,a&&(this._$AH=e);else{const l=e;let u,d;for(e=s[0],u=0;u<s.length-1;u++)d=kn(this,l[n+u],t,u),d===Pn&&(d=this._$AH[u]),a||(a=!Ir(d)||d!==this._$AH[u]),d===_e?e=_e:e!==_e&&(e+=(d??"")+s[u+1]),this._$AH[u]=d}a&&!i&&this.j(e)}j(e){e===_e?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class kp extends Ji{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_e?void 0:e}}let Dp=class extends Ji{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_e)}},Np=class extends Ji{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){if((e=kn(this,e,t,0)??_e)===Pn)return;const n=this._$AH,i=e===_e&&n!==_e||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==_e&&(n===_e||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}};class Vp{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){kn(this,e)}}const Ks=gr.litHtmlPolyfillSupport;Ks==null||Ks(Ar,ia),(gr.litHtmlVersions??(gr.litHtmlVersions=[])).push("3.3.2");const Op=(r,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const s=(t==null?void 0:t.renderBefore)??null;n._$litPart$=i=new ia(e.insertBefore(Tr(),s),s,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=globalThis;class ce extends bn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Op(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Pn}}var Zu;ce._$litElement$=!0,ce.finalized=!0,(Zu=Zt.litElementHydrateSupport)==null||Zu.call(Zt,{LitElement:ce});const Ys=Zt.litElementPolyfillSupport;Ys==null||Ys({LitElement:ce});(Zt.litElementVersions??(Zt.litElementVersions=[])).push("4.2.2");class co extends ce{constructor(){super(),this.variant="default",this.lifted=!1,this.padding="md"}render(){const e=["panel",this.variant==="strong"?"strong":"",this.lifted?"lifted":"",`pad-${this.padding}`].filter(Boolean).join(" ");return k`
      <div class=${e}>
        <div class="content"><slot></slot></div>
      </div>
    `}}K(co,"properties",{variant:{type:String},lifted:{type:Boolean},padding:{type:String}}),K(co,"styles",De`
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
  `);customElements.define("glass-panel",co);class uo extends ce{constructor(){super(),this.variant="primary",this.size="md",this.full=!1,this.disabled=!1}render(){const e=[this.variant,`size-${this.size}`,this.full?"full":""].filter(Boolean).join(" ");return k`
      <button class=${e} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}}K(uo,"properties",{variant:{type:String},size:{type:String},full:{type:Boolean},disabled:{type:Boolean,reflect:!0}}),K(uo,"styles",De`
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
  `);customElements.define("glass-button",uo);class ho extends ce{constructor(){super(),this.size=44}render(){const e=this.size;return k`
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
    `}}K(ho,"properties",{size:{type:Number}}),K(ho,"styles",De`
    :host {
      display: inline-block;
      line-height: 0;
    }
    svg {
      display: block;
      filter: drop-shadow(0 6px 18px rgba(20, 12, 6, 0.45));
    }
  `);customElements.define("cairn-mark",ho);class fo extends ce{constructor(){super(),this.year=new Date().getFullYear(),this.tripDays=new Map,this.events=[],this.today=new Date}_isLeap(e){return e%4===0&&e%100!==0||e%400===0}_daysInMonth(e,t){return[31,this._isLeap(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]}_renderMonth(e){const t=this.year,i=(new Date(t,e,1).getDay()+6)%7,s=this._daysInMonth(t,e),a=new Set(this.events.filter(d=>{const f=new Date(d.date);return f.getFullYear()===t&&f.getMonth()===e}).map(d=>new Date(d.date).getDate())),l=[];for(let d=0;d<i;d++)l.push(k`<div class="cell empty"></div>`);const u=this.today;for(let d=1;d<=s;d++){const f=`${String(e+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`,m=this.tripDays.get(f)??0,y=u.getFullYear()===t&&u.getMonth()===e&&u.getDate()===d,A=a.has(d),S=["cell",y?"today":"",m>0?"trip":"",m>.6?"dense":"",A?"event":""].filter(Boolean).join(" ");l.push(k`<div class=${S}></div>`)}return l}_onSelect(e){this.dispatchEvent(new CustomEvent("month-select",{detail:{month:e,year:this.year},bubbles:!0,composed:!0}))}render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=this.today.getMonth(),n=this.today.getFullYear()===this.year;return k`
      <div class="grid">
        ${e.map((i,s)=>k`
            <div
              class="month ${n&&s===t?"current":""}"
              @click=${()=>this._onSelect(s)}
            >
              <div class="name">${i}</div>
              <div class="mini-grid">${this._renderMonth(s)}</div>
            </div>
          `)}
      </div>
      <div class="legend">
        <span class="swatch"><i class="trip"></i> Trip</span>
        <span class="swatch"><i class="event"></i> Celebration</span>
        <span class="swatch"><i class="today"></i> Today</span>
      </div>
    `}}K(fo,"properties",{year:{type:Number},tripDays:{type:Object},events:{type:Array},today:{type:Object}}),K(fo,"styles",De`
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
  `);customElements.define("yearly-view",fo);class po extends ce{constructor(){super(),this.name="",this.hue=200,this.photo="",this.size=36,this.showName=!1}_initials(){return this.name.split(/\s+/).map(e=>e[0]).filter(Boolean).slice(0,2).join("").toUpperCase()}render(){const e=`linear-gradient(135deg, hsl(${this.hue}, 55%, 62%) 0%, hsl(${(this.hue+40)%360}, 50%, 42%) 100%)`,t=`width:${this.size}px;height:${this.size}px;background:${e};font-size:${this.size*.38}px;`;return k`
      <div class="avatar" style=${t} title=${this.name}>
        ${this.photo?k`<img src=${this.photo} alt=${this.name} />`:k`<span>${this._initials()}</span>`}
      </div>
      ${this.showName?k`<span class="name">${this.name}</span>`:""}
    `}}K(po,"properties",{name:{type:String},hue:{type:Number},photo:{type:String},size:{type:Number},showName:{type:Boolean,attribute:"show-name"}}),K(po,"styles",De`
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
  `);customElements.define("member-chip",po);const $p=()=>{};var mc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Mp=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],a=r[t++],l=r[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],a=i+1<r.length,l=a?r[i+1]:0,u=i+2<r.length,d=u?r[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|d>>6,A=d&63;u||(A=64,a||(y=64)),n.push(t[f],t[m],t[y],t[A])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ah(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Mp(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],l=i<r.length?t[r.charAt(i)]:0;++i;const d=i<r.length?t[r.charAt(i)]:64;++i;const m=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||l==null||d==null||m==null)throw new Lp;const y=s<<2|l>>4;if(n.push(y),d!==64){const A=l<<4&240|d>>2;if(n.push(A),m!==64){const S=d<<6&192|m;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Lp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fp=function(r){const e=ah(r);return lh.encodeByteArray(e,!0)},Pi=function(r){return Fp(r).replace(/\./g,"")},ch=function(r){try{return lh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=()=>Up().__FIREBASE_DEFAULTS__,zp=()=>{if(typeof process>"u"||typeof mc>"u")return;const r=mc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},jp=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ch(r[1]);return e&&JSON.parse(e)},Xi=()=>{try{return $p()||Bp()||zp()||jp()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},uh=r=>{var e,t;return(t=(e=Xi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},hh=r=>{const e=uh(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},dh=()=>{var r;return(r=Xi())===null||r===void 0?void 0:r.config},fh=r=>{var e;return(e=Xi())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sa(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Pi(JSON.stringify(t)),Pi(JSON.stringify(a)),""].join(".")}const yr={};function Gp(){const r={prod:[],emulator:[]};for(const e of Object.keys(yr))yr[e]?r.emulator.push(e):r.prod.push(e);return r}function Wp(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let gc=!1;function oa(r,e){if(typeof window>"u"||typeof document>"u"||!hn(window.location.host)||yr[r]===e||yr[r]||gc)return;yr[r]=e;function t(y){return`__firebase__banner__${y}`}const n="__firebase__banner",s=Gp().prod.length>0;function a(){const y=document.getElementById(n);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,A){y.setAttribute("width","24"),y.setAttribute("id",A),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function d(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{gc=!0,a()},y}function f(y,A){y.setAttribute("id",A),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function m(){const y=Wp(n),A=t("text"),S=document.getElementById(A)||document.createElement("span"),D=t("learnmore"),P=document.getElementById(D)||document.createElement("a"),j=t("preprendIcon"),F=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const q=y.element;l(q),f(P,D);const M=d();u(F,j),q.append(F,S,P,M),document.body.appendChild(q)}s?(S.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Yp(){var r;const e=(r=Xi())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jp(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Xp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zp(){const r=ke();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function em(){return!Yp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tm(){try{return typeof indexedDB=="object"}catch{return!1}}function nm(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="FirebaseError";class it extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=rm,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?im(s,n):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new it(i,l,n)}}function im(r,e){return r.replace(sm,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const sm=/\{\$([^}]+)}/g;function om(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function sn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],a=e[i];if(yc(s)&&yc(a)){if(!sn(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function yc(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function am(r,e){const t=new lm(r,e);return t.subscribe.bind(t)}class lm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");cm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Qs),i.error===void 0&&(i.error=Qs),i.complete===void 0&&(i.complete=Qs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cm(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Qs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(r){return r&&r._delegate?r._delegate:r}class Dt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new qp;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dm(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);n===l&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:hm(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hm(r){return r===Yt?void 0:r}function dm(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new um(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(G||(G={}));const pm={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},mm=G.INFO,gm={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},ym=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=gm[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class aa{constructor(e){this.name=e,this._logLevel=mm,this._logHandler=ym,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const _m=(r,e)=>e.some(t=>r instanceof t);let _c,vc;function vm(){return _c||(_c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bm(){return vc||(vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ph=new WeakMap,mo=new WeakMap,mh=new WeakMap,Js=new WeakMap,la=new WeakMap;function wm(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",a)},s=()=>{t(St(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ph.set(t,r)}).catch(()=>{}),la.set(e,r),e}function Em(r){if(mo.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",a),r.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",a),r.addEventListener("abort",a)});mo.set(r,e)}let go={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return mo.get(r);if(e==="objectStoreNames")return r.objectStoreNames||mh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return St(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Tm(r){go=r(go)}function Im(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Xs(this),e,...t);return mh.set(n,e.sort?e.sort():[e]),St(n)}:bm().includes(r)?function(...e){return r.apply(Xs(this),e),St(ph.get(this))}:function(...e){return St(r.apply(Xs(this),e))}}function Am(r){return typeof r=="function"?Im(r):(r instanceof IDBTransaction&&Em(r),_m(r,vm())?new Proxy(r,go):r)}function St(r){if(r instanceof IDBRequest)return wm(r);if(Js.has(r))return Js.get(r);const e=Am(r);return e!==r&&(Js.set(r,e),la.set(e,r)),e}const Xs=r=>la.get(r);function xm(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(r,e),l=St(a);return n&&a.addEventListener("upgradeneeded",u=>{n(St(a.result),u.oldVersion,u.newVersion,St(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Sm=["get","getKey","getAll","getAllKeys","count"],Rm=["put","add","delete","clear"],Zs=new Map;function bc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Zs.get(e))return Zs.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Rm.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Sm.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&u.done]))[0]};return Zs.set(e,s),s}Tm(r=>({...r,get:(e,t,n)=>bc(e,t)||r.get(e,t,n),has:(e,t)=>!!bc(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Pm(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Pm(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yo="@firebase/app",wc="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new aa("@firebase/app"),km="@firebase/app-compat",Dm="@firebase/analytics-compat",Nm="@firebase/analytics",Vm="@firebase/app-check-compat",Om="@firebase/app-check",$m="@firebase/auth",Mm="@firebase/auth-compat",Lm="@firebase/database",Fm="@firebase/data-connect",Um="@firebase/database-compat",Bm="@firebase/functions",zm="@firebase/functions-compat",jm="@firebase/installations",qm="@firebase/installations-compat",Hm="@firebase/messaging",Gm="@firebase/messaging-compat",Wm="@firebase/performance",Km="@firebase/performance-compat",Ym="@firebase/remote-config",Qm="@firebase/remote-config-compat",Jm="@firebase/storage",Xm="@firebase/storage-compat",Zm="@firebase/firestore",eg="@firebase/ai",tg="@firebase/firestore-compat",ng="firebase",rg="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="[DEFAULT]",ig={[yo]:"fire-core",[km]:"fire-core-compat",[Nm]:"fire-analytics",[Dm]:"fire-analytics-compat",[Om]:"fire-app-check",[Vm]:"fire-app-check-compat",[$m]:"fire-auth",[Mm]:"fire-auth-compat",[Lm]:"fire-rtdb",[Fm]:"fire-data-connect",[Um]:"fire-rtdb-compat",[Bm]:"fire-fn",[zm]:"fire-fn-compat",[jm]:"fire-iid",[qm]:"fire-iid-compat",[Hm]:"fire-fcm",[Gm]:"fire-fcm-compat",[Wm]:"fire-perf",[Km]:"fire-perf-compat",[Ym]:"fire-rc",[Qm]:"fire-rc-compat",[Jm]:"fire-gcs",[Xm]:"fire-gcs-compat",[Zm]:"fire-fst",[tg]:"fire-fst-compat",[eg]:"fire-vertex","fire-js":"fire-js",[ng]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Map,sg=new Map,vo=new Map;function Ec(r,e){try{r.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function on(r){const e=r.name;if(vo.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;vo.set(e,r);for(const t of ki.values())Ec(t,r);for(const t of sg.values())Ec(t,r);return!0}function Zi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Ue(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rt=new Or("app","Firebase",og);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=rg;function gh(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:_o,automaticDataCollectionEnabled:!0},e),i=n.name;if(typeof i!="string"||!i)throw Rt.create("bad-app-name",{appName:String(i)});if(t||(t=dh()),!t)throw Rt.create("no-options");const s=ki.get(i);if(s){if(sn(t,s.options)&&sn(n,s.config))return s;throw Rt.create("duplicate-app",{appName:i})}const a=new fm(i);for(const u of vo.values())a.addComponent(u);const l=new ag(t,n,a);return ki.set(i,l),l}function ca(r=_o){const e=ki.get(r);if(!e&&r===_o&&dh())return gh();if(!e)throw Rt.create("no-app",{appName:r});return e}function Qe(r,e,t){var n;let i=(n=ig[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(l.join(" "));return}on(new Dt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="firebase-heartbeat-database",cg=1,xr="firebase-heartbeat-store";let eo=null;function yh(){return eo||(eo=xm(lg,cg,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(xr)}catch(t){console.warn(t)}}}}).catch(r=>{throw Rt.create("idb-open",{originalErrorMessage:r.message})})),eo}async function ug(r){try{const t=(await yh()).transaction(xr),n=await t.objectStore(xr).get(_h(r));return await t.done,n}catch(e){if(e instanceof it)dt.warn(e.message);else{const t=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function Tc(r,e){try{const n=(await yh()).transaction(xr,"readwrite");await n.objectStore(xr).put(e,_h(r)),await n.done}catch(t){if(t instanceof it)dt.warn(t.message);else{const n=Rt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(n.message)}}}function _h(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=1024,dg=30;class fg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mg(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ic();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>dg){const a=gg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){dt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ic(),{heartbeatsToSend:n,unsentEntries:i}=pg(this._heartbeatsCache.heartbeats),s=Pi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return dt.warn(t),""}}}function Ic(){return new Date().toISOString().substring(0,10)}function pg(r,e=hg){const t=[];let n=r.slice();for(const i of r){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Ac(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ac(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class mg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tm()?nm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ug(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ac(r){return Pi(JSON.stringify({version:2,heartbeats:r})).length}function gg(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(r){on(new Dt("platform-logger",e=>new Cm(e),"PRIVATE")),on(new Dt("heartbeat",e=>new fg(e),"PRIVATE")),Qe(yo,wc,r),Qe(yo,wc,"esm2017"),Qe("fire-js","")}yg("");var _g="firebase",vg="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(_g,vg,"app");function ua(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function vh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bg=vh,bh=new Or("auth","Firebase",vh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new aa("@firebase/auth");function wg(r,...e){Di.logLevel<=G.WARN&&Di.warn(`Auth (${Fn}): ${r}`,...e)}function vi(r,...e){Di.logLevel<=G.ERROR&&Di.error(`Auth (${Fn}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(r,...e){throw da(r,...e)}function We(r,...e){return da(r,...e)}function ha(r,e,t){const n=Object.assign(Object.assign({},bg()),{[e]:t});return new Or("auth","Firebase",n).create(e,{appName:r.name})}function en(r){return ha(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Eg(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&nt(r,"argument-error"),ha(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function da(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return bh.create(r,...e)}function U(r,e,...t){if(!r)throw da(e,...t)}function ut(r){const e="INTERNAL ASSERTION FAILED: "+r;throw vi(e),new Error(e)}function ft(r,e){r||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Tg(){return xc()==="http:"||xc()==="https:"}function xc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tg()||Jp()||"connection"in navigator)?navigator.onLine:!0}function Ag(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile=Kp()||Xp()}get(){return Ig()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(r,e){ft(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Rg=new Mr(3e4,6e4);function pa(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Un(r,e,t,n,i={}){return Eh(r,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const l=$r(Object.assign({key:r.config.apiKey},a)).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const d=Object.assign({method:e,headers:u},s);return Qp()||(d.referrerPolicy="no-referrer"),r.emulatorConfig&&hn(r.emulatorConfig.host)&&(d.credentials="include"),wh.fetch()(await Th(r,r.config.apiHost,t,l),d)})}async function Eh(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},xg),e);try{const i=new Pg(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw di(r,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw di(r,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw di(r,"email-already-in-use",a);if(u==="USER_DISABLED")throw di(r,"user-disabled",a);const f=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ha(r,f,d);nt(r,f)}}catch(i){if(i instanceof it)throw i;nt(r,"network-request-failed",{message:String(i)})}}async function Cg(r,e,t,n,i={}){const s=await Un(r,e,t,n,i);return"mfaPendingCredential"in s&&nt(r,"multi-factor-auth-required",{_serverResponse:s}),s}async function Th(r,e,t,n){const i=`${e}${t}?${n}`,s=r,a=s.config.emulator?fa(r.config,i):`${r.config.apiScheme}://${i}`;return Sg.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class Pg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(We(this.auth,"network-request-failed")),Rg.get())})}}function di(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=We(r,e,n);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(r,e){return Un(r,"POST","/v1/accounts:delete",e)}async function Ni(r,e){return Un(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dg(r,e=!1){const t=ue(r),n=await t.getIdToken(e),i=ma(n);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:_r(to(i.auth_time)),issuedAtTime:_r(to(i.iat)),expirationTime:_r(to(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function to(r){return Number(r)*1e3}function ma(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return vi("JWT malformed, contained fewer than 3 sections"),null;try{const i=ch(t);return i?JSON.parse(i):(vi("Failed to decode base64 JWT payload"),null)}catch(i){return vi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sc(r){const e=ma(r);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof it&&Ng(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Ng({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_r(this.lastLoginAt),this.creationTime=_r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Sr(r,Ni(t,{idToken:n}));U(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ih(s.providerUserInfo):[],l=$g(r.providerData,a),u=r.isAnonymous,d=!(r.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new wo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,m)}async function Og(r){const e=ue(r);await Vi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $g(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Ih(r){return r.map(e=>{var{providerId:t}=e,n=ua(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(r,e){const t=await Eh(r,{},async()=>{const n=$r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,a=await Th(r,i,"/v1/token",`key=${s}`),l=await r._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:n};return r.emulatorConfig&&hn(r.emulatorConfig.host)&&(u.credentials="include"),wh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Lg(r,e){return Un(r,"POST","/v2/accounts:revokeToken",pa(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=Sc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await Mg(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,a=new xn;return n&&(U(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(U(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(r,e){U(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ge{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=ua(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Sr(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Dg(this,e)}reload(){return Og(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ge(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Vi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(en(this.auth));const e=await this.getIdToken();return await Sr(this,kg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,a,l,u,d,f;const m=(n=t.displayName)!==null&&n!==void 0?n:void 0,y=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,S=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,j=(d=t.createdAt)!==null&&d!==void 0?d:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:M,isAnonymous:me,providerData:oe,stsTokenManager:w}=t;U(q&&w,e,"internal-error");const g=xn.fromJSON(this.name,w);U(typeof q=="string",e,"internal-error"),bt(m,e.name),bt(y,e.name),U(typeof M=="boolean",e,"internal-error"),U(typeof me=="boolean",e,"internal-error"),bt(A,e.name),bt(S,e.name),bt(D,e.name),bt(P,e.name),bt(j,e.name),bt(F,e.name);const v=new Ge({uid:q,auth:e,email:y,emailVerified:M,displayName:m,isAnonymous:me,photoURL:S,phoneNumber:A,tenantId:D,stsTokenManager:g,createdAt:j,lastLoginAt:F});return oe&&Array.isArray(oe)&&(v.providerData=oe.map(b=>Object.assign({},b))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,t,n=!1){const i=new xn;i.updateFromServerResponse(t);const s=new Ge({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Vi(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];U(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ih(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new xn;l.updateFromIdToken(n);const u=new Ge({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Map;function ht(r){ft(r instanceof Function,"Expected a class definition");let e=Rc.get(r);return e?(ft(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Rc.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ah.type="NONE";const Cc=Ah;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(r,e,t){return`firebase:${r}:${e}:${t}`}class Sn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=bi(this.userKey,i.apiKey,s),this.fullPersistenceKey=bi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ni(this.auth,{idToken:e}).catch(()=>{});return t?Ge._fromGetAccountInfoResponse(this.auth,t,e):null}return Ge._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Sn(ht(Cc),e,n);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||ht(Cc);const a=bi(n,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(a);if(f){let m;if(typeof f=="string"){const y=await Ni(e,{idToken:f}).catch(()=>{});if(!y)break;m=await Ge._fromGetAccountInfoResponse(e,y,f)}else m=Ge._fromJSON(e,f);d!==s&&(l=m),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Sn(s,e,n):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new Sn(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ch(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kh(e))return"Blackberry";if(Dh(e))return"Webos";if(Sh(e))return"Safari";if((e.includes("chrome/")||Rh(e))&&!e.includes("edge/"))return"Chrome";if(Ph(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function xh(r=ke()){return/firefox\//i.test(r)}function Sh(r=ke()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rh(r=ke()){return/crios\//i.test(r)}function Ch(r=ke()){return/iemobile/i.test(r)}function Ph(r=ke()){return/android/i.test(r)}function kh(r=ke()){return/blackberry/i.test(r)}function Dh(r=ke()){return/webos/i.test(r)}function ga(r=ke()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Fg(r=ke()){var e;return ga(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ug(){return Zp()&&document.documentMode===10}function Nh(r=ke()){return ga(r)||Ph(r)||Dh(r)||kh(r)||/windows phone/i.test(r)||Ch(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(r,e=[]){let t;switch(r){case"Browser":t=Pc(ke());break;case"Worker":t=`${Pc(ke())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(r,e={}){return Un(r,"GET","/v2/passwordPolicy",pa(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=6;class qg{constructor(e){var t,n,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:jg,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kc(this),this.idTokenSubscription=new kc(this),this.beforeStateQueue=new Bg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ht(t)),this._initializationPromise=this.queue(async()=>{var n,i,s;if(!this._deleted&&(this.persistenceManager=await Sn.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ni(this,{idToken:e}),n=await Ge._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ue(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ag()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(en(this));const t=e?ue(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zg(this),t=new qg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Lg(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ht(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await Sn.create(this,[ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&wg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function es(r){return ue(r)}class kc{constructor(e){this.auth=e,this.observer=null,this.addObserver=am(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gg(r){ya=r}function Wg(r){return ya.loadJS(r)}function Kg(){return ya.gapiScript}function Yg(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(r,e){const t=Zi(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(sn(s,e??{}))return i;nt(i,"already-initialized")}return t.initialize({options:e})}function Jg(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(ht);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Xg(r,e,t){const n=es(r);U(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=Oh(e),{host:a,port:l}=Zg(e),u=l===null?"":`:${l}`,d={url:`${s}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){U(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),U(sn(d,n.config.emulator)&&sn(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,hn(a)?(sa(`${s}//${a}${u}`),oa("Auth",!0)):ey()}function Oh(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Zg(r){const e=Oh(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Dc(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:Dc(a)}}}function Dc(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ey(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(r,e){return Cg(r,"POST","/v1/accounts:signInWithIdp",pa(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="http://localhost";class an extends $h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new an(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=ua(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new an(n,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Rn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Rn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rn(e,t)}buildRequest(){const e={requestUri:ty,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$r(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends _a{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Lr{constructor(){super("facebook.com")}static credential(e){return an._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return an._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ct.credential(t,n)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Lr{constructor(){super("github.com")}static credential(e){return an._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Lr{constructor(){super("twitter.com")}static credential(e,t){return an._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Ge._fromIdTokenResponse(e,n,i),a=Nc(n);return new Dn({user:s,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Nc(n);return new Dn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Nc(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends it{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Oi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Oi(e,t,n,i)}}function Mh(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Oi._fromErrorAndOperation(r,s,e,n):s})}async function ny(r,e,t=!1){const n=await Sr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Dn._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(r,e,t=!1){const{auth:n}=r;if(Ue(n.app))return Promise.reject(en(n));const i="reauthenticate";try{const s=await Sr(r,Mh(n,i,e,r),t);U(s.idToken,n,"internal-error");const a=ma(s.idToken);U(a,n,"internal-error");const{sub:l}=a;return U(r.uid===l,n,"user-mismatch"),Dn._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nt(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(r,e,t=!1){if(Ue(r.app))return Promise.reject(en(r));const n="signIn",i=await Mh(r,n,e),s=await Dn._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function sy(r,e,t,n){return ue(r).onIdTokenChanged(e,t,n)}function oy(r,e,t){return ue(r).beforeAuthStateChanged(e,t)}function ay(r,e,t,n){return ue(r).onAuthStateChanged(e,t,n)}function ly(r){return ue(r).signOut()}const $i="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($i,"1"),this.storage.removeItem($i),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=1e3,uy=10;class Fh extends Lh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);Ug()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uy):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},cy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fh.type="LOCAL";const hy=Fh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh extends Lh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Uh.type="SESSION";const Bh=Uh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new ts(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(a).map(async d=>d(t.origin,s)),u=await dy(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ts.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const d=va("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function py(r){Je().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function my(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gy(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function yy(){return zh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="firebaseLocalStorageDb",_y=1,Mi="firebaseLocalStorage",qh="fbase_key";class Fr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ns(r,e){return r.transaction([Mi],e?"readwrite":"readonly").objectStore(Mi)}function vy(){const r=indexedDB.deleteDatabase(jh);return new Fr(r).toPromise()}function Eo(){const r=indexedDB.open(jh,_y);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Mi,{keyPath:qh})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Mi)?e(n):(n.close(),await vy(),e(await Eo()))})})}async function Vc(r,e,t){const n=ns(r,!0).put({[qh]:e,value:t});return new Fr(n).toPromise()}async function by(r,e){const t=ns(r,!1).get(e),n=await new Fr(t).toPromise();return n===void 0?null:n.value}function Oc(r,e){const t=ns(r,!0).delete(e);return new Fr(t).toPromise()}const wy=800,Ey=3;class Hh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Ey)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ts._getInstance(yy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await my(),!this.activeServiceWorker)return;this.sender=new fy(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eo();return await Vc(e,$i,"1"),await Oc(e,$i),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>by(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Oc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ns(i,!1).getAll();return new Fr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hh.type="LOCAL";const Ty=Hh;new Mr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(r,e){return e?ht(e):(U(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends $h{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Iy(r){return iy(r.auth,new ba(r),r.bypassAuthState)}function Ay(r){const{auth:e,user:t}=r;return U(t,e,"internal-error"),ry(t,new ba(r),r.bypassAuthState)}async function xy(r){const{auth:e,user:t}=r;return U(t,e,"internal-error"),ny(t,new ba(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Iy;case"linkViaPopup":case"linkViaRedirect":return xy;case"reauthViaPopup":case"reauthViaRedirect":return Ay;default:nt(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=new Mr(2e3,1e4);async function Ry(r,e,t){if(Ue(r.app))return Promise.reject(We(r,"operation-not-supported-in-this-environment"));const n=es(r);Eg(r,e,_a);const i=Gh(n,t);return new Jt(n,"signInViaPopup",e,i).executeNotNull()}class Jt extends Wh{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=va();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sy.get())};e()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="pendingRedirect",wi=new Map;class Py extends Wh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=wi.get(this.auth._key());if(!e){try{const n=await ky(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}wi.set(this.auth._key(),e)}return this.bypassAuthState||wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ky(r,e){const t=Vy(e),n=Ny(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function Dy(r,e){wi.set(r._key(),e)}function Ny(r){return ht(r._redirectPersistence)}function Vy(r){return bi(Cy,r.config.apiKey,r.name)}async function Oy(r,e,t=!1){if(Ue(r.app))return Promise.reject(en(r));const n=es(r),i=Gh(n,e),a=await new Py(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=600*1e3;class My{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ly(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Kh(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(We(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$y&&this.cachedEventUids.clear(),this.cachedEventUids.has($c(e))}saveEventToCache(e){this.cachedEventUids.add($c(e)),this.lastProcessedEventTime=Date.now()}}function $c(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Kh({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ly(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kh(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(r,e={}){return Un(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,By=/^https?/;async function zy(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Fy(r);for(const t of e)try{if(jy(t))return}catch{}nt(r,"unauthorized-domain")}function jy(r){const e=bo(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!By.test(t))return!1;if(Uy.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=new Mr(3e4,6e4);function Mc(){const r=Je().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Hy(r){return new Promise((e,t)=>{var n,i,s;function a(){Mc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mc(),t(We(r,"network-request-failed"))},timeout:qy.get()})}if(!((i=(n=Je().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Je().gapi)===null||s===void 0)&&s.load)a();else{const l=Yg("iframefcb");return Je()[l]=()=>{gapi.load?a():t(We(r,"network-request-failed"))},Wg(`${Kg()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Ei=null,e})}let Ei=null;function Gy(r){return Ei=Ei||Hy(r),Ei}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=new Mr(5e3,15e3),Ky="__/auth/iframe",Yy="emulator/auth/iframe",Qy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xy(r){const e=r.config;U(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?fa(e,Yy):`https://${r.config.authDomain}/${Ky}`,n={apiKey:e.apiKey,appName:r.name,v:Fn},i=Jy.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${$r(n).slice(1)}`}async function Zy(r){const e=await Gy(r),t=Je().gapi;return U(t,r,"internal-error"),e.open({where:document.body,url:Xy(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qy,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const a=We(r,"network-request-failed"),l=Je().setTimeout(()=>{s(a)},Wy.get());function u(){Je().clearTimeout(l),i(n)}n.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},t_=500,n_=600,r_="_blank",i_="http://localhost";class Lc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s_(r,e,t,n=t_,i=n_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const u=Object.assign(Object.assign({},e_),{width:n.toString(),height:i.toString(),top:s,left:a}),d=ke().toLowerCase();t&&(l=Rh(d)?r_:t),xh(d)&&(e=e||i_,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[A,S])=>`${y}${A}=${S},`,"");if(Fg(d)&&l!=="_self")return o_(e||"",l),new Lc(null);const m=window.open(e||"",l,f);U(m,r,"popup-blocked");try{m.focus()}catch{}return new Lc(m)}function o_(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="__/auth/handler",l_="emulator/auth/handler",c_=encodeURIComponent("fac");async function Fc(r,e,t,n,i,s){U(r.config.authDomain,r,"auth-domain-config-required"),U(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Fn,eventId:i};if(e instanceof _a){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",om(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Lr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}r.tenantId&&(a.tid=r.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await r._getAppCheckToken(),d=u?`#${c_}=${encodeURIComponent(u)}`:"";return`${u_(r)}?${$r(l).slice(1)}${d}`}function u_({config:r}){return r.emulator?fa(r,l_):`https://${r.authDomain}/${a_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="webStorageSupport";class h_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bh,this._completeRedirectFn=Oy,this._overrideRedirectResult=Dy}async _openPopup(e,t,n,i){var s;ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Fc(e,t,n,bo(),i);return s_(e,a,va())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Fc(e,t,n,bo(),i);return py(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ft(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Zy(e),n=new My(e);return t.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(no,{type:no},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[no];a!==void 0&&t(!!a),nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nh()||Sh()||ga()}}const d_=h_;var Uc="@firebase/auth",Bc="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function m_(r){on(new Dt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:a,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vh(r)},d=new Hg(n,i,s,u);return Jg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),on(new Dt("auth-internal",e=>{const t=es(e.getProvider("auth").getImmediate());return(n=>new f_(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Uc,Bc,p_(r)),Qe(Uc,Bc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=300,y_=fh("authIdTokenMaxAge")||g_;let zc=null;const __=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>y_)return;const i=t==null?void 0:t.token;zc!==i&&(zc=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function v_(r=ca()){const e=Zi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Qg(r,{popupRedirectResolver:d_,persistence:[Ty,hy,Bh]}),n=fh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const a=__(s.toString());oy(t,a,()=>a(t.currentUser)),sy(t,l=>a(l))}}const i=uh("auth");return i&&Xg(t,`http://${i}`),t}function b_(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}Gg({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=We("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",b_().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});m_("Browser");var jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ct,Yh;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function v(){}v.prototype=g.prototype,w.D=g.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(b,E,I){for(var _=Array(arguments.length-2),st=2;st<arguments.length;st++)_[st-2]=arguments[st];return g.prototype[E].apply(b,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,v){v||(v=0);var b=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)b[E]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(E=0;16>E;++E)b[E]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=w.g[0],v=w.g[1],E=w.g[2];var I=w.g[3],_=g+(I^v&(E^I))+b[0]+3614090360&4294967295;g=v+(_<<7&4294967295|_>>>25),_=I+(E^g&(v^E))+b[1]+3905402710&4294967295,I=g+(_<<12&4294967295|_>>>20),_=E+(v^I&(g^v))+b[2]+606105819&4294967295,E=I+(_<<17&4294967295|_>>>15),_=v+(g^E&(I^g))+b[3]+3250441966&4294967295,v=E+(_<<22&4294967295|_>>>10),_=g+(I^v&(E^I))+b[4]+4118548399&4294967295,g=v+(_<<7&4294967295|_>>>25),_=I+(E^g&(v^E))+b[5]+1200080426&4294967295,I=g+(_<<12&4294967295|_>>>20),_=E+(v^I&(g^v))+b[6]+2821735955&4294967295,E=I+(_<<17&4294967295|_>>>15),_=v+(g^E&(I^g))+b[7]+4249261313&4294967295,v=E+(_<<22&4294967295|_>>>10),_=g+(I^v&(E^I))+b[8]+1770035416&4294967295,g=v+(_<<7&4294967295|_>>>25),_=I+(E^g&(v^E))+b[9]+2336552879&4294967295,I=g+(_<<12&4294967295|_>>>20),_=E+(v^I&(g^v))+b[10]+4294925233&4294967295,E=I+(_<<17&4294967295|_>>>15),_=v+(g^E&(I^g))+b[11]+2304563134&4294967295,v=E+(_<<22&4294967295|_>>>10),_=g+(I^v&(E^I))+b[12]+1804603682&4294967295,g=v+(_<<7&4294967295|_>>>25),_=I+(E^g&(v^E))+b[13]+4254626195&4294967295,I=g+(_<<12&4294967295|_>>>20),_=E+(v^I&(g^v))+b[14]+2792965006&4294967295,E=I+(_<<17&4294967295|_>>>15),_=v+(g^E&(I^g))+b[15]+1236535329&4294967295,v=E+(_<<22&4294967295|_>>>10),_=g+(E^I&(v^E))+b[1]+4129170786&4294967295,g=v+(_<<5&4294967295|_>>>27),_=I+(v^E&(g^v))+b[6]+3225465664&4294967295,I=g+(_<<9&4294967295|_>>>23),_=E+(g^v&(I^g))+b[11]+643717713&4294967295,E=I+(_<<14&4294967295|_>>>18),_=v+(I^g&(E^I))+b[0]+3921069994&4294967295,v=E+(_<<20&4294967295|_>>>12),_=g+(E^I&(v^E))+b[5]+3593408605&4294967295,g=v+(_<<5&4294967295|_>>>27),_=I+(v^E&(g^v))+b[10]+38016083&4294967295,I=g+(_<<9&4294967295|_>>>23),_=E+(g^v&(I^g))+b[15]+3634488961&4294967295,E=I+(_<<14&4294967295|_>>>18),_=v+(I^g&(E^I))+b[4]+3889429448&4294967295,v=E+(_<<20&4294967295|_>>>12),_=g+(E^I&(v^E))+b[9]+568446438&4294967295,g=v+(_<<5&4294967295|_>>>27),_=I+(v^E&(g^v))+b[14]+3275163606&4294967295,I=g+(_<<9&4294967295|_>>>23),_=E+(g^v&(I^g))+b[3]+4107603335&4294967295,E=I+(_<<14&4294967295|_>>>18),_=v+(I^g&(E^I))+b[8]+1163531501&4294967295,v=E+(_<<20&4294967295|_>>>12),_=g+(E^I&(v^E))+b[13]+2850285829&4294967295,g=v+(_<<5&4294967295|_>>>27),_=I+(v^E&(g^v))+b[2]+4243563512&4294967295,I=g+(_<<9&4294967295|_>>>23),_=E+(g^v&(I^g))+b[7]+1735328473&4294967295,E=I+(_<<14&4294967295|_>>>18),_=v+(I^g&(E^I))+b[12]+2368359562&4294967295,v=E+(_<<20&4294967295|_>>>12),_=g+(v^E^I)+b[5]+4294588738&4294967295,g=v+(_<<4&4294967295|_>>>28),_=I+(g^v^E)+b[8]+2272392833&4294967295,I=g+(_<<11&4294967295|_>>>21),_=E+(I^g^v)+b[11]+1839030562&4294967295,E=I+(_<<16&4294967295|_>>>16),_=v+(E^I^g)+b[14]+4259657740&4294967295,v=E+(_<<23&4294967295|_>>>9),_=g+(v^E^I)+b[1]+2763975236&4294967295,g=v+(_<<4&4294967295|_>>>28),_=I+(g^v^E)+b[4]+1272893353&4294967295,I=g+(_<<11&4294967295|_>>>21),_=E+(I^g^v)+b[7]+4139469664&4294967295,E=I+(_<<16&4294967295|_>>>16),_=v+(E^I^g)+b[10]+3200236656&4294967295,v=E+(_<<23&4294967295|_>>>9),_=g+(v^E^I)+b[13]+681279174&4294967295,g=v+(_<<4&4294967295|_>>>28),_=I+(g^v^E)+b[0]+3936430074&4294967295,I=g+(_<<11&4294967295|_>>>21),_=E+(I^g^v)+b[3]+3572445317&4294967295,E=I+(_<<16&4294967295|_>>>16),_=v+(E^I^g)+b[6]+76029189&4294967295,v=E+(_<<23&4294967295|_>>>9),_=g+(v^E^I)+b[9]+3654602809&4294967295,g=v+(_<<4&4294967295|_>>>28),_=I+(g^v^E)+b[12]+3873151461&4294967295,I=g+(_<<11&4294967295|_>>>21),_=E+(I^g^v)+b[15]+530742520&4294967295,E=I+(_<<16&4294967295|_>>>16),_=v+(E^I^g)+b[2]+3299628645&4294967295,v=E+(_<<23&4294967295|_>>>9),_=g+(E^(v|~I))+b[0]+4096336452&4294967295,g=v+(_<<6&4294967295|_>>>26),_=I+(v^(g|~E))+b[7]+1126891415&4294967295,I=g+(_<<10&4294967295|_>>>22),_=E+(g^(I|~v))+b[14]+2878612391&4294967295,E=I+(_<<15&4294967295|_>>>17),_=v+(I^(E|~g))+b[5]+4237533241&4294967295,v=E+(_<<21&4294967295|_>>>11),_=g+(E^(v|~I))+b[12]+1700485571&4294967295,g=v+(_<<6&4294967295|_>>>26),_=I+(v^(g|~E))+b[3]+2399980690&4294967295,I=g+(_<<10&4294967295|_>>>22),_=E+(g^(I|~v))+b[10]+4293915773&4294967295,E=I+(_<<15&4294967295|_>>>17),_=v+(I^(E|~g))+b[1]+2240044497&4294967295,v=E+(_<<21&4294967295|_>>>11),_=g+(E^(v|~I))+b[8]+1873313359&4294967295,g=v+(_<<6&4294967295|_>>>26),_=I+(v^(g|~E))+b[15]+4264355552&4294967295,I=g+(_<<10&4294967295|_>>>22),_=E+(g^(I|~v))+b[6]+2734768916&4294967295,E=I+(_<<15&4294967295|_>>>17),_=v+(I^(E|~g))+b[13]+1309151649&4294967295,v=E+(_<<21&4294967295|_>>>11),_=g+(E^(v|~I))+b[4]+4149444226&4294967295,g=v+(_<<6&4294967295|_>>>26),_=I+(v^(g|~E))+b[11]+3174756917&4294967295,I=g+(_<<10&4294967295|_>>>22),_=E+(g^(I|~v))+b[2]+718787259&4294967295,E=I+(_<<15&4294967295|_>>>17),_=v+(I^(E|~g))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+I&4294967295}n.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var v=g-this.blockSize,b=this.B,E=this.h,I=0;I<g;){if(E==0)for(;I<=v;)i(this,w,I),I+=this.blockSize;if(typeof w=="string"){for(;I<g;)if(b[E++]=w.charCodeAt(I++),E==this.blockSize){i(this,b),E=0;break}}else for(;I<g;)if(b[E++]=w[I++],E==this.blockSize){i(this,b),E=0;break}}this.h=E,this.o+=g},n.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var v=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=v&255,v/=256;for(this.u(w),w=Array(16),g=v=0;4>g;++g)for(var b=0;32>b;b+=8)w[v++]=this.g[g]>>>b&255;return w};function s(w,g){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=g(w)}function a(w,g){this.h=g;for(var v=[],b=!0,E=w.length-1;0<=E;E--){var I=w[E]|0;b&&I==g||(v[E]=I,b=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return P(d(-w));for(var g=[],v=1,b=0;w>=v;b++)g[b]=w/v|0,v*=4294967296;return new a(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return P(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(g,8)),b=m,E=0;E<w.length;E+=8){var I=Math.min(8,w.length-E),_=parseInt(w.substring(E,E+I),g);8>I?(I=d(Math.pow(g,I)),b=b.j(I).add(d(_))):(b=b.j(v),b=b.add(d(_)))}return b}var m=u(0),y=u(1),A=u(16777216);r=a.prototype,r.m=function(){if(D(this))return-P(this).m();for(var w=0,g=1,v=0;v<this.g.length;v++){var b=this.i(v);w+=(0<=b?b:4294967296+b)*g,g*=4294967296}return w},r.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(D(this))return"-"+P(this).toString(w);for(var g=d(Math.pow(w,6)),v=this,b="";;){var E=M(v,g).g;v=j(v,E.j(g));var I=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=E,S(v))return I+b;for(;6>I.length;)I="0"+I;b=I+b}},r.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function D(w){return w.h==-1}r.l=function(w){return w=j(this,w),D(w)?-1:S(w)?0:1};function P(w){for(var g=w.g.length,v=[],b=0;b<g;b++)v[b]=~w.g[b];return new a(v,~w.h).add(y)}r.abs=function(){return D(this)?P(this):this},r.add=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],b=0,E=0;E<=g;E++){var I=b+(this.i(E)&65535)+(w.i(E)&65535),_=(I>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);b=_>>>16,I&=65535,_&=65535,v[E]=_<<16|I}return new a(v,v[v.length-1]&-2147483648?-1:0)};function j(w,g){return w.add(P(g))}r.j=function(w){if(S(this)||S(w))return m;if(D(this))return D(w)?P(this).j(P(w)):P(P(this).j(w));if(D(w))return P(this.j(P(w)));if(0>this.l(A)&&0>w.l(A))return d(this.m()*w.m());for(var g=this.g.length+w.g.length,v=[],b=0;b<2*g;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var E=0;E<w.g.length;E++){var I=this.i(b)>>>16,_=this.i(b)&65535,st=w.i(E)>>>16,Hn=w.i(E)&65535;v[2*b+2*E]+=_*Hn,F(v,2*b+2*E),v[2*b+2*E+1]+=I*Hn,F(v,2*b+2*E+1),v[2*b+2*E+1]+=_*st,F(v,2*b+2*E+1),v[2*b+2*E+2]+=I*st,F(v,2*b+2*E+2)}for(b=0;b<g;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=g;b<2*g;b++)v[b]=0;return new a(v,0)};function F(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function q(w,g){this.g=w,this.h=g}function M(w,g){if(S(g))throw Error("division by zero");if(S(w))return new q(m,m);if(D(w))return g=M(P(w),g),new q(P(g.g),P(g.h));if(D(g))return g=M(w,P(g)),new q(P(g.g),g.h);if(30<w.g.length){if(D(w)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var v=y,b=g;0>=b.l(w);)v=me(v),b=me(b);var E=oe(v,1),I=oe(b,1);for(b=oe(b,2),v=oe(v,2);!S(b);){var _=I.add(b);0>=_.l(w)&&(E=E.add(v),I=_),b=oe(b,1),v=oe(v,1)}return g=j(w,E.j(g)),new q(E,g)}for(E=m;0<=w.l(g);){for(v=Math.max(1,Math.floor(w.m()/g.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),I=d(v),_=I.j(g);D(_)||0<_.l(w);)v-=b,I=d(v),_=I.j(g);S(I)&&(I=y),E=E.add(I),w=j(w,_)}return new q(E,w)}r.A=function(w){return M(this,w).h},r.and=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],b=0;b<g;b++)v[b]=this.i(b)&w.i(b);return new a(v,this.h&w.h)},r.or=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],b=0;b<g;b++)v[b]=this.i(b)|w.i(b);return new a(v,this.h|w.h)},r.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],b=0;b<g;b++)v[b]=this.i(b)^w.i(b);return new a(v,this.h^w.h)};function me(w){for(var g=w.g.length+1,v=[],b=0;b<g;b++)v[b]=w.i(b)<<1|w.i(b-1)>>>31;return new a(v,w.h)}function oe(w,g){var v=g>>5;g%=32;for(var b=w.g.length-v,E=[],I=0;I<b;I++)E[I]=0<g?w.i(I+v)>>>g|w.i(I+v+1)<<32-g:w.i(I+v);return new a(E,w.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Yh=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Ct=a}).apply(typeof jc<"u"?jc:typeof self<"u"?self:typeof window<"u"?window:{});var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qh,hr,Jh,Ti,To,Xh,Zh,ed;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof fi=="object"&&fi];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function i(o,c){if(c)e:{var h=n;o=o.split(".");for(var p=0;p<o.length-1;p++){var T=o[p];if(!(T in h))break e;h=h[T]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,p=!1,T={next:function(){if(!p&&h<o.length){var x=h++;return{value:c(x,o[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function m(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),o.apply(c,T)}}return function(){return o.apply(c,arguments)}}function y(o,c,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function A(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function S(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,T,x){for(var N=Array(arguments.length-2),X=2;X<arguments.length;X++)N[X-2]=arguments[X];return c.prototype[T].apply(p,N)}}function D(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function P(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const T=o.length||0,x=p.length||0;o.length=T+x;for(let N=0;N<x;N++)o[T+N]=p[N]}else o.push(p)}}class j{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function F(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function M(o){return M[" "](o),o}M[" "]=function(){};var me=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function oe(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function w(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function g(o){const c={};for(const h in o)c[h]=o[h];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,c){let h,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(h in p)o[h]=p[h];for(let x=0;x<v.length;x++)h=v[x],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function E(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function I(o){l.setTimeout(()=>{throw o},0)}function _(){var o=Es;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class st{constructor(){this.h=this.g=null}add(c,h){const p=Hn.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Hn=new j(()=>new Vf,o=>o.reset());class Vf{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Gn,Wn=!1,Es=new st,il=()=>{const o=l.Promise.resolve(void 0);Gn=()=>{o.then(Of)}};var Of=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){I(h)}var c=Hn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Wn=!1};function gt(){this.s=this.s,this.C=this.C}gt.prototype.s=!1,gt.prototype.ma=function(){this.s||(this.s=!0,this.N())},gt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var $f=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o})();function Kn(o,c){if(Te.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(me){e:{try{M(c.nodeName);var T=!0;break e}catch{}T=!1}T||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Mf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Kn.aa.h.call(this)}}S(Kn,Te);var Mf={2:"touch",3:"pen",4:"mouse"};Kn.prototype.h=function(){Kn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Wr="closure_listenable_"+(1e6*Math.random()|0),Lf=0;function Ff(o,c,h,p,T){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=T,this.key=++Lf,this.da=this.fa=!1}function Kr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Yr(o){this.src=o,this.g={},this.h=0}Yr.prototype.add=function(o,c,h,p,T){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var N=Is(o,c,p,T);return-1<N?(c=o[N],h||(c.fa=!1)):(c=new Ff(c,this.src,x,!!p,T),c.fa=h,o.push(c)),c};function Ts(o,c){var h=c.type;if(h in o.g){var p=o.g[h],T=Array.prototype.indexOf.call(p,c,void 0),x;(x=0<=T)&&Array.prototype.splice.call(p,T,1),x&&(Kr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Is(o,c,h,p){for(var T=0;T<o.length;++T){var x=o[T];if(!x.da&&x.listener==c&&x.capture==!!h&&x.ha==p)return T}return-1}var As="closure_lm_"+(1e6*Math.random()|0),xs={};function sl(o,c,h,p,T){if(Array.isArray(c)){for(var x=0;x<c.length;x++)sl(o,c[x],h,p,T);return null}return h=ll(h),o&&o[Wr]?o.K(c,h,d(p)?!!p.capture:!1,T):Uf(o,c,h,!1,p,T)}function Uf(o,c,h,p,T,x){if(!c)throw Error("Invalid event type");var N=d(T)?!!T.capture:!!T,X=Rs(o);if(X||(o[As]=X=new Yr(o)),h=X.add(c,h,p,N,x),h.proxy)return h;if(p=Bf(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)$f||(T=N),T===void 0&&(T=!1),o.addEventListener(c.toString(),p,T);else if(o.attachEvent)o.attachEvent(al(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Bf(){function o(h){return c.call(o.src,o.listener,h)}const c=zf;return o}function ol(o,c,h,p,T){if(Array.isArray(c))for(var x=0;x<c.length;x++)ol(o,c[x],h,p,T);else p=d(p)?!!p.capture:!!p,h=ll(h),o&&o[Wr]?(o=o.i,c=String(c).toString(),c in o.g&&(x=o.g[c],h=Is(x,h,p,T),-1<h&&(Kr(x[h]),Array.prototype.splice.call(x,h,1),x.length==0&&(delete o.g[c],o.h--)))):o&&(o=Rs(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Is(c,h,p,T)),(h=-1<o?c[o]:null)&&Ss(h))}function Ss(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Wr])Ts(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(al(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=Rs(c))?(Ts(h,o),h.h==0&&(h.src=null,c[As]=null)):Kr(o)}}}function al(o){return o in xs?xs[o]:xs[o]="on"+o}function zf(o,c){if(o.da)o=!0;else{c=new Kn(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&Ss(o),o=h.call(p,c)}return o}function Rs(o){return o=o[As],o instanceof Yr?o:null}var Cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ll(o){return typeof o=="function"?o:(o[Cs]||(o[Cs]=function(c){return o.handleEvent(c)}),o[Cs])}function Ie(){gt.call(this),this.i=new Yr(this),this.M=this,this.F=null}S(Ie,gt),Ie.prototype[Wr]=!0,Ie.prototype.removeEventListener=function(o,c,h,p){ol(this,o,c,h,p)};function Ne(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Te(c,o);else if(c instanceof Te)c.target=c.target||o;else{var T=c;c=new Te(p,o),b(c,T)}if(T=!0,h)for(var x=h.length-1;0<=x;x--){var N=c.g=h[x];T=Qr(N,p,!0,c)&&T}if(N=c.g=o,T=Qr(N,p,!0,c)&&T,T=Qr(N,p,!1,c)&&T,h)for(x=0;x<h.length;x++)N=c.g=h[x],T=Qr(N,p,!1,c)&&T}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)Kr(h[p]);delete o.g[c],o.h--}}this.F=null},Ie.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},Ie.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function Qr(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var T=!0,x=0;x<c.length;++x){var N=c[x];if(N&&!N.da&&N.capture==h){var X=N.listener,ve=N.ha||N.src;N.fa&&Ts(o.i,N),T=X.call(ve,p)!==!1&&T}}return T&&!p.defaultPrevented}function cl(o,c,h){if(typeof o=="function")h&&(o=y(o,h));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function ul(o){o.g=cl(()=>{o.g=null,o.i&&(o.i=!1,ul(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class jf extends gt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ul(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yn(o){gt.call(this),this.h=o,this.g={}}S(Yn,gt);var hl=[];function dl(o){oe(o.g,function(c,h){this.g.hasOwnProperty(h)&&Ss(c)},o),o.g={}}Yn.prototype.N=function(){Yn.aa.N.call(this),dl(this)},Yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ps=l.JSON.stringify,qf=l.JSON.parse,Hf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ks(){}ks.prototype.h=null;function fl(o){return o.h||(o.h=o.i())}function pl(){}var Qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ds(){Te.call(this,"d")}S(Ds,Te);function Ns(){Te.call(this,"c")}S(Ns,Te);var jt={},ml=null;function Jr(){return ml=ml||new Ie}jt.La="serverreachability";function gl(o){Te.call(this,jt.La,o)}S(gl,Te);function Jn(o){const c=Jr();Ne(c,new gl(c))}jt.STAT_EVENT="statevent";function yl(o,c){Te.call(this,jt.STAT_EVENT,o),this.stat=c}S(yl,Te);function Ve(o){const c=Jr();Ne(c,new yl(c,o))}jt.Ma="timingevent";function _l(o,c){Te.call(this,jt.Ma,o),this.size=c}S(_l,Te);function Xn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Zn(){this.g=!0}Zn.prototype.xa=function(){this.g=!1};function Gf(o,c,h,p,T,x){o.info(function(){if(o.g)if(x)for(var N="",X=x.split("&"),ve=0;ve<X.length;ve++){var Q=X[ve].split("=");if(1<Q.length){var Ae=Q[0];Q=Q[1];var xe=Ae.split("_");N=2<=xe.length&&xe[1]=="type"?N+(Ae+"="+Q+"&"):N+(Ae+"=redacted&")}}else N=null;else N=x;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+c+`
`+h+`
`+N})}function Wf(o,c,h,p,T,x,N){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+c+`
`+h+`
`+x+" "+N})}function mn(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Yf(o,h)+(p?" "+p:"")})}function Kf(o,c){o.info(function(){return"TIMEOUT: "+c})}Zn.prototype.info=function(){};function Yf(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var x=T[0];if(x!="noop"&&x!="stop"&&x!="close")for(var N=1;N<T.length;N++)T[N]=""}}}}return Ps(h)}catch{return c}}var Xr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vs;function Zr(){}S(Zr,ks),Zr.prototype.g=function(){return new XMLHttpRequest},Zr.prototype.i=function(){return{}},Vs=new Zr;function yt(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new Yn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bl}function bl(){this.i=null,this.g="",this.h=!1}var wl={},Os={};function $s(o,c,h){o.L=1,o.v=ri(ot(c)),o.m=h,o.P=!0,El(o,null)}function El(o,c){o.F=Date.now(),ei(o),o.A=ot(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),$l(h.i,"t",p),o.C=0,h=o.j.J,o.h=new bl,o.g=ec(o.j,h?c:null,!o.m),0<o.O&&(o.M=new jf(y(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(hl[0]=T.toString()),T=hl);for(var x=0;x<T.length;x++){var N=sl(h,T[x],p||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Jn(),Gf(o.i,o.u,o.A,o.l,o.R,o.m)}yt.prototype.ca=function(o){o=o.target;const c=this.M;c&&at(o)==3?c.j():this.Y(o)},yt.prototype.Y=function(o){try{if(o==this.g)e:{const xe=at(this.g);var c=this.g.Ba();const _n=this.g.Z();if(!(3>xe)&&(xe!=3||this.g&&(this.h.h||this.g.oa()||jl(this.g)))){this.J||xe!=4||c==7||(c==8||0>=_n?Jn(3):Jn(2)),Ms(this);var h=this.g.Z();this.X=h;t:if(Tl(this)){var p=jl(this.g);o="";var T=p.length,x=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),er(this);var N="";break t}this.h.i=new l.TextDecoder}for(c=0;c<T;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(x&&c==T-1)});p.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,Wf(this.i,this.u,this.A,this.l,this.R,xe,h),this.o){if(this.T&&!this.K){t:{if(this.g){var X,ve=this.g;if((X=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(X)){var Q=X;break t}}Q=null}if(h=Q)mn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ls(this,h);else{this.o=!1,this.s=3,Ve(12),qt(this),er(this);break e}}if(this.P){h=!0;let qe;for(;!this.J&&this.C<N.length;)if(qe=Qf(this,N),qe==Os){xe==4&&(this.s=4,Ve(14),h=!1),mn(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==wl){this.s=4,Ve(15),mn(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else mn(this.i,this.l,qe,null),Ls(this,qe);if(Tl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xe!=4||N.length!=0||this.h.h||(this.s=1,Ve(16),h=!1),this.o=this.o&&h,!h)mn(this.i,this.l,N,"[Invalid Chunked Response]"),qt(this),er(this);else if(0<N.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),qs(Ae),Ae.M=!0,Ve(11))}}else mn(this.i,this.l,N,null),Ls(this,N);xe==4&&qt(this),this.o&&!this.J&&(xe==4?Ql(this.j,this):(this.o=!1,ei(this)))}else fp(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),qt(this),er(this)}}}catch{}finally{}};function Tl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Qf(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Os:(h=Number(c.substring(h,p)),isNaN(h)?wl:(p+=1,p+h>c.length?Os:(c=c.slice(p,p+h),o.C=p+h,c)))}yt.prototype.cancel=function(){this.J=!0,qt(this)};function ei(o){o.S=Date.now()+o.I,Il(o,o.I)}function Il(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Xn(y(o.ba,o),c)}function Ms(o){o.B&&(l.clearTimeout(o.B),o.B=null)}yt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Kf(this.i,this.A),this.L!=2&&(Jn(),Ve(17)),qt(this),this.s=2,er(this)):Il(this,this.S-o)};function er(o){o.j.G==0||o.J||Ql(o.j,o)}function qt(o){Ms(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,dl(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Ls(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Fs(h.h,o))){if(!o.K&&Fs(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ci(h),ai(h);else break e;js(h),Ve(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=Xn(y(h.Za,h),6e3));if(1>=Sl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Gt(h,11)}else if((o.K||h.g==o)&&ci(h),!F(c))for(T=h.Da.g.parse(c),c=0;c<T.length;c++){let Q=T[c];if(h.T=Q[0],Q=Q[1],h.G==2)if(Q[0]=="c"){h.K=Q[1],h.ia=Q[2];const Ae=Q[3];Ae!=null&&(h.la=Ae,h.j.info("VER="+h.la));const xe=Q[4];xe!=null&&(h.Aa=xe,h.j.info("SVER="+h.Aa));const _n=Q[5];_n!=null&&typeof _n=="number"&&0<_n&&(p=1.5*_n,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const qe=o.g;if(qe){const hi=qe.g?qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hi){var x=p.h;x.g||hi.indexOf("spdy")==-1&&hi.indexOf("quic")==-1&&hi.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Us(x,x.h),x.h=null))}if(p.D){const Hs=qe.g?qe.g.getResponseHeader("X-HTTP-Session-Id"):null;Hs&&(p.ya=Hs,ee(p.I,p.D,Hs))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var N=o;if(p.qa=Zl(p,p.J?p.ia:null,p.W),N.K){Rl(p.h,N);var X=N,ve=p.L;ve&&(X.I=ve),X.B&&(Ms(X),ei(X)),p.g=N}else Kl(p);0<h.i.length&&li(h)}else Q[0]!="stop"&&Q[0]!="close"||Gt(h,7);else h.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Gt(h,7):zs(h):Q[0]!="noop"&&h.l&&h.l.ta(Q),h.v=0)}}Jn(4)}catch{}}var Jf=class{constructor(o,c){this.g=o,this.map=c}};function Al(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Sl(o){return o.h?1:o.g?o.g.size:0}function Fs(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Us(o,c){o.g?o.g.add(c):o.h=c}function Rl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Al.prototype.cancel=function(){if(this.i=Cl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Cl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return D(o.i)}function Xf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function Zf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function Pl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Zf(o),p=Xf(o),T=p.length,x=0;x<T;x++)c.call(void 0,p[x],h&&h[x],o)}var kl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ep(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),T=null;if(0<=p){var x=o[h].substring(0,p);T=o[h].substring(p+1)}else x=o[h];c(x,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Ht(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ht){this.h=o.h,ti(this,o.j),this.o=o.o,this.g=o.g,ni(this,o.s),this.l=o.l;var c=o.i,h=new rr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Dl(this,h),this.m=o.m}else o&&(c=String(o).match(kl))?(this.h=!1,ti(this,c[1]||"",!0),this.o=tr(c[2]||""),this.g=tr(c[3]||"",!0),ni(this,c[4]),this.l=tr(c[5]||"",!0),Dl(this,c[6]||"",!0),this.m=tr(c[7]||"")):(this.h=!1,this.i=new rr(null,this.h))}Ht.prototype.toString=function(){var o=[],c=this.j;c&&o.push(nr(c,Nl,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(nr(c,Nl,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(nr(h,h.charAt(0)=="/"?rp:np,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",nr(h,sp)),o.join("")};function ot(o){return new Ht(o)}function ti(o,c,h){o.j=h?tr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ni(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Dl(o,c,h){c instanceof rr?(o.i=c,op(o.i,o.h)):(h||(c=nr(c,ip)),o.i=new rr(c,o.h))}function ee(o,c,h){o.i.set(c,h)}function ri(o){return ee(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function tr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function nr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,tp),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function tp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Nl=/[#\/\?@]/g,np=/[#\?:]/g,rp=/[#\?]/g,ip=/[#\?@]/g,sp=/#/g;function rr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function _t(o){o.g||(o.g=new Map,o.h=0,o.i&&ep(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=rr.prototype,r.add=function(o,c){_t(this),this.i=null,o=gn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Vl(o,c){_t(o),c=gn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Ol(o,c){return _t(o),c=gn(o,c),o.g.has(c)}r.forEach=function(o,c){_t(this),this.g.forEach(function(h,p){h.forEach(function(T){o.call(c,T,p,this)},this)},this)},r.na=function(){_t(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const T=o[p];for(let x=0;x<T.length;x++)h.push(c[p])}return h},r.V=function(o){_t(this);let c=[];if(typeof o=="string")Ol(this,o)&&(c=c.concat(this.g.get(gn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return _t(this),this.i=null,o=gn(this,o),Ol(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function $l(o,c,h){Vl(o,c),0<h.length&&(o.i=null,o.g.set(gn(o,c),D(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const x=encodeURIComponent(String(p)),N=this.V(p);for(p=0;p<N.length;p++){var T=x;N[p]!==""&&(T+="="+encodeURIComponent(String(N[p]))),o.push(T)}}return this.i=o.join("&")};function gn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function op(o,c){c&&!o.j&&(_t(o),o.i=null,o.g.forEach(function(h,p){var T=p.toLowerCase();p!=T&&(Vl(this,p),$l(this,T,h))},o)),o.j=c}function ap(o,c){const h=new Zn;if(l.Image){const p=new Image;p.onload=A(vt,h,"TestLoadImage: loaded",!0,c,p),p.onerror=A(vt,h,"TestLoadImage: error",!1,c,p),p.onabort=A(vt,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(vt,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function lp(o,c){const h=new Zn,p=new AbortController,T=setTimeout(()=>{p.abort(),vt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(x=>{clearTimeout(T),x.ok?vt(h,"TestPingServer: ok",!0,c):vt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),vt(h,"TestPingServer: error",!1,c)})}function vt(o,c,h,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(h)}catch{}}function cp(){this.g=new Hf}function up(o,c,h){const p=h||"";try{Pl(o,function(T,x){let N=T;d(T)&&(N=Ps(T)),c.push(p+x+"="+encodeURIComponent(N))})}catch(T){throw c.push(p+"type="+encodeURIComponent("_badmap")),T}}function ii(o){this.l=o.Ub||null,this.j=o.eb||!1}S(ii,ks),ii.prototype.g=function(){return new si(this.l,this.j)},ii.prototype.i=(function(o){return function(){return o}})({});function si(o,c){Ie.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(si,Ie),r=si.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,sr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ir(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,sr(this)),this.g&&(this.readyState=3,sr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ml(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ml(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ir(this):sr(this),this.readyState==3&&Ml(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,ir(this))},r.Qa=function(o){this.g&&(this.response=o,ir(this))},r.ga=function(){this.g&&ir(this)};function ir(o){o.readyState=4,o.l=null,o.j=null,o.v=null,sr(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function sr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ll(o){let c="";return oe(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Bs(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Ll(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ee(o,c,h))}function ie(o){Ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ie,Ie);var hp=/^https?$/i,dp=["POST","PUT"];r=ie.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vs.g(),this.v=this.o?fl(this.o):fl(Vs),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(x){Fl(this,x);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)h.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())h.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(x=>x.toLowerCase()=="content-type"),T=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(dp,c,void 0))||p||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,N]of h)this.g.setRequestHeader(x,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zl(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){Fl(this,x)}};function Fl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Ul(o),oi(o)}function Ul(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),oi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oi(this,!0)),ie.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Bl(this):this.bb())},r.bb=function(){Bl(this)};function Bl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||at(o)!=4||o.Z()!=2)){if(o.u&&at(o)==4)cl(o.Ea,0,o);else if(Ne(o,"readystatechange"),at(o)==4){o.h=!1;try{const N=o.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=N===0){var T=String(o.D).match(kl)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),p=!hp.test(T?T.toLowerCase():"")}h=p}if(h)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var x=2<at(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",Ul(o)}}finally{oi(o)}}}}function oi(o,c){if(o.g){zl(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ne(o,"ready");try{h.onreadystatechange=p}catch{}}}function zl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function at(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),qf(c)}};function jl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function fp(o){const c={};o=(o.g&&2<=at(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(F(o[p]))continue;var h=E(o[p]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const x=c[T]||[];c[T]=x,x.push(h)}w(c,function(p){return p.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function or(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function ql(o){this.Aa=0,this.i=[],this.j=new Zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=or("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=or("baseRetryDelayMs",5e3,o),this.cb=or("retryDelaySeedMs",1e4,o),this.Wa=or("forwardChannelMaxRetries",2,o),this.wa=or("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Al(o&&o.concurrentRequestLimit),this.Da=new cp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ql.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,p){Ve(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Zl(this,null,this.W),li(this)};function zs(o){if(Hl(o),o.G==3){var c=o.U++,h=ot(o.I);if(ee(h,"SID",o.K),ee(h,"RID",c),ee(h,"TYPE","terminate"),ar(o,h),c=new yt(o,o.j,c),c.L=2,c.v=ri(ot(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=ec(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ei(c)}Xl(o)}function ai(o){o.g&&(qs(o),o.g.cancel(),o.g=null)}function Hl(o){ai(o),o.u&&(l.clearTimeout(o.u),o.u=null),ci(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function li(o){if(!xl(o.h)&&!o.s){o.s=!0;var c=o.Ga;Gn||il(),Wn||(Gn(),Wn=!0),Es.add(c,o),o.B=0}}function pp(o,c){return Sl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Xn(y(o.Ga,o,c),Jl(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const T=new yt(this,this.j,o);let x=this.o;if(this.S&&(x?(x=g(x),b(x,this.S)):x=this.S),this.m!==null||this.O||(T.H=x,x=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Wl(this,T,c),h=ot(this.I),ee(h,"RID",o),ee(h,"CVER",22),this.D&&ee(h,"X-HTTP-Session-Id",this.D),ar(this,h),x&&(this.O?c="headers="+encodeURIComponent(String(Ll(x)))+"&"+c:this.m&&Bs(h,this.m,x)),Us(this.h,T),this.Ua&&ee(h,"TYPE","init"),this.P?(ee(h,"$req",c),ee(h,"SID","null"),T.T=!0,$s(T,h,null)):$s(T,h,c),this.G=2}}else this.G==3&&(o?Gl(this,o):this.i.length==0||xl(this.h)||Gl(this))};function Gl(o,c){var h;c?h=c.l:h=o.U++;const p=ot(o.I);ee(p,"SID",o.K),ee(p,"RID",h),ee(p,"AID",o.T),ar(o,p),o.m&&o.o&&Bs(p,o.m,o.o),h=new yt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Wl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Us(o.h,h),$s(h,p,c)}function ar(o,c){o.H&&oe(o.H,function(h,p){ee(c,p,h)}),o.l&&Pl({},function(h,p){ee(c,p,h)})}function Wl(o,c,h){h=Math.min(o.i.length,h);var p=o.l?y(o.l.Na,o.l,o):null;e:{var T=o.i;let x=-1;for(;;){const N=["count="+h];x==-1?0<h?(x=T[0].g,N.push("ofs="+x)):x=0:N.push("ofs="+x);let X=!0;for(let ve=0;ve<h;ve++){let Q=T[ve].g;const Ae=T[ve].map;if(Q-=x,0>Q)x=Math.max(0,T[ve].g-100),X=!1;else try{up(Ae,N,"req"+Q+"_")}catch{p&&p(Ae)}}if(X){p=N.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function Kl(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Gn||il(),Wn||(Gn(),Wn=!0),Es.add(c,o),o.v=0}}function js(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Xn(y(o.Fa,o),Jl(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Yl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Xn(y(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),ai(this),Yl(this))};function qs(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Yl(o){o.g=new yt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ot(o.qa);ee(c,"RID","rpc"),ee(c,"SID",o.K),ee(c,"AID",o.T),ee(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ee(c,"TO",o.ja),ee(c,"TYPE","xmlhttp"),ar(o,c),o.m&&o.o&&Bs(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ri(ot(c)),h.m=null,h.P=!0,El(h,o)}r.Za=function(){this.C!=null&&(this.C=null,ai(this),js(this),Ve(19))};function ci(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Ql(o,c){var h=null;if(o.g==c){ci(o),qs(o),o.g=null;var p=2}else if(Fs(o.h,c))h=c.D,Rl(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var T=o.B;p=Jr(),Ne(p,new _l(p,h)),li(o)}else Kl(o);else if(T=c.s,T==3||T==0&&0<c.X||!(p==1&&pp(o,c)||p==2&&js(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),T){case 1:Gt(o,5);break;case 4:Gt(o,10);break;case 3:Gt(o,6);break;default:Gt(o,2)}}}function Jl(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Gt(o,c){if(o.j.info("Error code "+c),c==2){var h=y(o.fb,o),p=o.Xa;const T=!p;p=new Ht(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ti(p,"https"),ri(p),T?ap(p.toString(),h):lp(p.toString(),h)}else Ve(2);o.G=0,o.l&&o.l.sa(c),Xl(o),Hl(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function Xl(o){if(o.G=0,o.ka=[],o.l){const c=Cl(o.h);(c.length!=0||o.i.length!=0)&&(P(o.ka,c),P(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Zl(o,c,h){var p=h instanceof Ht?ot(h):new Ht(h);if(p.g!="")c&&(p.g=c+"."+p.g),ni(p,p.s);else{var T=l.location;p=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;var x=new Ht(null);p&&ti(x,p),c&&(x.g=c),T&&ni(x,T),h&&(x.l=h),p=x}return h=o.D,c=o.ya,h&&c&&ee(p,h,c),ee(p,"VER",o.la),ar(o,p),p}function ec(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ie(new ii({eb:h})):new ie(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function tc(){}r=tc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ui(){}ui.prototype.g=function(o,c){return new Le(o,c)};function Le(o,c){Ie.call(this),this.g=new ql(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!F(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!F(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new yn(this)}S(Le,Ie),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){zs(this.g)},Le.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ps(o),o=h);c.i.push(new Jf(c.Ya++,o)),c.G==3&&li(c)},Le.prototype.N=function(){this.g.l=null,delete this.j,zs(this.g),delete this.g,Le.aa.N.call(this)};function nc(o){Ds.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}S(nc,Ds);function rc(){Ns.call(this),this.status=1}S(rc,Ns);function yn(o){this.g=o}S(yn,tc),yn.prototype.ua=function(){Ne(this.g,"a")},yn.prototype.ta=function(o){Ne(this.g,new nc(o))},yn.prototype.sa=function(o){Ne(this.g,new rc)},yn.prototype.ra=function(){Ne(this.g,"b")},ui.prototype.createWebChannel=ui.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,ed=function(){return new ui},Zh=function(){return Jr()},Xh=jt,To={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xr.NO_ERROR=0,Xr.TIMEOUT=8,Xr.HTTP_ERROR=6,Ti=Xr,vl.COMPLETE="complete",Jh=vl,pl.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,hr=pl,ie.prototype.listenOnce=ie.prototype.L,ie.prototype.getLastError=ie.prototype.Ka,ie.prototype.getLastErrorCode=ie.prototype.Ba,ie.prototype.getStatus=ie.prototype.Z,ie.prototype.getResponseJson=ie.prototype.Oa,ie.prototype.getResponseText=ie.prototype.oa,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Ha,Qh=ie}).apply(typeof fi<"u"?fi:typeof self<"u"?self:typeof window<"u"?window:{});const qc="@firebase/firestore",Hc="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new aa("@firebase/firestore");function wn(){return ln.logLevel}function V(r,...e){if(ln.logLevel<=G.DEBUG){const t=e.map(wa);ln.debug(`Firestore (${Bn}): ${r}`,...t)}}function pt(r,...e){if(ln.logLevel<=G.ERROR){const t=e.map(wa);ln.error(`Firestore (${Bn}): ${r}`,...t)}}function Nt(r,...e){if(ln.logLevel<=G.WARN){const t=e.map(wa);ln.warn(`Firestore (${Bn}): ${r}`,...t)}}function wa(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,td(r,n,t)}function td(r,e,t){let n=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw pt(n),new Error(n)}function J(r,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,r||td(e,i,n)}function z(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends it{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class w_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ce.UNAUTHENTICATED)))}shutdown(){}}class E_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class T_{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0,42304);let n=this.i;const i=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let s=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pt,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const u=s;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},l=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(J(typeof n.accessToken=="string",31837,{l:n}),new nd(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{h:e}),new Ce(e)}}class I_{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class A_{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new I_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ce.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){J(this.o===void 0,3512);const n=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>n(s)))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Gc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Gc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=S_(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function H(r,e){return r<e?-1:r>e?1:0}function Io(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),i=e.codePointAt(t);if(n!==i){if(n<128&&i<128)return H(n,i);{const s=rd(),a=R_(s.encode(Wc(r,t)),s.encode(Wc(e,t)));return a!==0?a:H(n,i)}}t+=n>65535?2:1}return H(r.length,e.length)}function Wc(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function R_(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return H(r[t],e[t]);return H(r.length,e.length)}function Nn(r,e,t){return r.length===e.length&&r.every(((n,i)=>t(n,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="__name__";class Ye{constructor(e,t,n){t===void 0?t=0:t>e.length&&L(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&L(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ye.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ye?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=Ye.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return H(e.length,t.length)}static compareSegments(e,t){const n=Ye.isNumericId(e),i=Ye.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Ye.extractNumericId(e).compare(Ye.extractNumericId(t)):Io(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ct.fromString(e.substring(4,e.length-2))}}class Z extends Ye{construct(e,t,n){return new Z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new O(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((i=>i.length>0)))}return new Z(t)}static emptyPath(){return new Z([])}}const C_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends Ye{construct(e,t,n){return new we(e,t,n)}static isValidIdentifier(e){return C_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kc}static keyField(){return new we([Kc])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new O(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new O(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(n+=l,i++):(s(),i++)}if(s(),a)throw new O(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Z.fromString(e))}static fromName(e){return new $(Z.fromString(e).popFirst(5))}static empty(){return new $(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Z(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(r,e,t){if(!t)throw new O(R.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function P_(r,e,t,n){if(e===!0&&n===!0)throw new O(R.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Yc(r){if(!$.isDocumentKey(r))throw new O(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Qc(r){if($.isDocumentKey(r))throw new O(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function sd(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function rs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":L(12329,{type:typeof r})}function ze(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new O(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=rs(r);throw new O(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(r,e){const t={typeString:r};return e&&(t.value=e),t}function Ur(r,e){if(!sd(r))throw new O(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,s="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const a=r[n];if(i&&typeof a!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${n}' field to equal '${s.value}'`;break}}if(t)throw new O(R.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=-62135596800,Xc=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Xc);return new ne(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Jc)throw new O(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xc}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ur(e,ne._jsonSchema))return new ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:pe("string",ne._jsonSchemaVersion),seconds:pe("number"),nanoseconds:pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ne(0,0))}static max(){return new B(new ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=-1;function k_(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=B.fromTimestamp(n===1e9?new ne(t+1,0):new ne(t,n));return new Vt(i,$.empty(),e)}function D_(r){return new Vt(r.readTime,r.key,Rr)}class Vt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Vt(B.min(),$.empty(),Rr)}static max(){return new Vt(B.max(),$.empty(),Rr)}}function N_(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(r.documentKey,e.documentKey),t!==0?t:H(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class O_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(r){if(r.code!==R.FAILED_PRECONDITION||r.message!==V_)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,n)=>{t(e)}))}static reject(e){return new C(((t,n)=>{n(e)}))}static waitFor(e){return new C(((t,n)=>{let i=0,s=0,a=!1;e.forEach((l=>{++i,l.next((()=>{++s,a&&s===i&&t()}),(u=>n(u)))})),a=!0,s===i&&t()}))}static or(e){let t=C.resolve(!1);for(const n of e)t=t.next((i=>i?C.resolve(i):n()));return t}static forEach(e,t){const n=[];return e.forEach(((i,s)=>{n.push(t.call(this,i,s))})),this.waitFor(n)}static mapArray(e,t){return new C(((n,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next((f=>{a[d]=f,++l,l===s&&n(a)}),(f=>i(f)))}}))}static doWhile(e,t){return new C(((n,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):n()};s()}))}}function $_(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jn(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this._e(n),this.ae=n=>t.writeSequenceNumber(n))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}is.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=-1;function ss(r){return r==null}function Li(r){return r===0&&1/r==-1/0}function M_(r){return typeof r=="number"&&Number.isInteger(r)&&!Li(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="";function L_(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Zc(e)),e=F_(r.get(t),e);return Zc(e)}function F_(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case od:t+="";break;default:t+=s}}return t}function Zc(r){return r+od+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Bt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function ad(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pi(this.root,e,this.comparator,!1)}getReverseIterator(){return new pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pi(this.root,e,this.comparator,!0)}}class pi{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??be.RED,this.left=i??be.EMPTY,this.right=s??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new be(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw L(27949);return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(e,t,n,i,s){return this}insert(e,t,n){return new be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tu(this.data.getIterator())}getIteratorFrom(e){return new tu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class tu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new Fe([])}unionWith(e){let t=new ge(we.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Fe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Nn(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ld("Invalid base64 string: "+s):s}})(e);return new Ee(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s})(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const U_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(r){if(J(!!r,39018),typeof r=="string"){let e=0;const t=U_.exec(r);if(J(!!t,46558,{timestamp:r}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ae(r.seconds),nanos:ae(r.nanos)}}function ae(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function $t(r){return typeof r=="string"?Ee.fromBase64String(r):Ee.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="server_timestamp",ud="__type__",hd="__previous_value__",dd="__local_write_time__";function Ia(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[ud])===null||t===void 0?void 0:t.stringValue)===cd}function os(r){const e=r.mapValue.fields[hd];return Ia(e)?os(e):e}function Cr(r){const e=Ot(r.mapValue.fields[dd].timestampValue);return new ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t,n,i,s,a,l,u,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const Fi="(default)";class Pr{constructor(e,t){this.projectId=e,this.database=t||Fi}static empty(){return new Pr("","")}get isDefaultDatabase(){return this.database===Fi}isEqual(e){return e instanceof Pr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="__type__",z_="__max__",mi={mapValue:{}},pd="__vector__",Ui="value";function Mt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ia(r)?4:q_(r)?9007199254740991:j_(r)?10:11:L(28295,{value:r})}function rt(r,e){if(r===e)return!0;const t=Mt(r);if(t!==Mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Cr(r).isEqual(Cr(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Ot(i.timestampValue),l=Ot(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(i,s){return $t(i.bytesValue).isEqual($t(s.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(i,s){return ae(i.geoPointValue.latitude)===ae(s.geoPointValue.latitude)&&ae(i.geoPointValue.longitude)===ae(s.geoPointValue.longitude)})(r,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return ae(i.integerValue)===ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ae(i.doubleValue),l=ae(s.doubleValue);return a===l?Li(a)===Li(l):isNaN(a)&&isNaN(l)}return!1})(r,e);case 9:return Nn(r.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:case 11:return(function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(eu(a)!==eu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!rt(a[u],l[u])))return!1;return!0})(r,e);default:return L(52216,{left:r})}}function kr(r,e){return(r.values||[]).find((t=>rt(t,e)))!==void 0}function Vn(r,e){if(r===e)return 0;const t=Mt(r),n=Mt(e);if(t!==n)return H(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(r.booleanValue,e.booleanValue);case 2:return(function(s,a){const l=ae(s.integerValue||s.doubleValue),u=ae(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(r,e);case 3:return nu(r.timestampValue,e.timestampValue);case 4:return nu(Cr(r),Cr(e));case 5:return Io(r.stringValue,e.stringValue);case 6:return(function(s,a){const l=$t(s),u=$t(a);return l.compareTo(u)})(r.bytesValue,e.bytesValue);case 7:return(function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=H(l[d],u[d]);if(f!==0)return f}return H(l.length,u.length)})(r.referenceValue,e.referenceValue);case 8:return(function(s,a){const l=H(ae(s.latitude),ae(a.latitude));return l!==0?l:H(ae(s.longitude),ae(a.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return ru(r.arrayValue,e.arrayValue);case 10:return(function(s,a){var l,u,d,f;const m=s.fields||{},y=a.fields||{},A=(l=m[Ui])===null||l===void 0?void 0:l.arrayValue,S=(u=y[Ui])===null||u===void 0?void 0:u.arrayValue,D=H(((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:ru(A,S)})(r.mapValue,e.mapValue);case 11:return(function(s,a){if(s===mi.mapValue&&a===mi.mapValue)return 0;if(s===mi.mapValue)return 1;if(a===mi.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=Io(u[m],f[m]);if(y!==0)return y;const A=Vn(l[u[m]],d[f[m]]);if(A!==0)return A}return H(u.length,f.length)})(r.mapValue,e.mapValue);default:throw L(23264,{le:t})}}function nu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return H(r,e);const t=Ot(r),n=Ot(e),i=H(t.seconds,n.seconds);return i!==0?i:H(t.nanos,n.nanos)}function ru(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=Vn(t[i],n[i]);if(s)return s}return H(t.length,n.length)}function On(r){return Ao(r)}function Ao(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=Ot(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return $t(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return $.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Ao(s);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of n)s?s=!1:i+=",",i+=`${a}:${Ao(t.fields[a])}`;return i+"}"})(r.mapValue):L(61005,{value:r})}function Ii(r){switch(Mt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=os(r);return e?16+Ii(e):16;case 5:return 2*r.stringValue.length;case 6:return $t(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,s)=>i+Ii(s)),0)})(r.arrayValue);case 10:case 11:return(function(n){let i=0;return Bt(n.fields,((s,a)=>{i+=s.length+Ii(a)})),i})(r.mapValue);default:throw L(13486,{value:r})}}function iu(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function xo(r){return!!r&&"integerValue"in r}function Aa(r){return!!r&&"arrayValue"in r}function su(r){return!!r&&"nullValue"in r}function ou(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ai(r){return!!r&&"mapValue"in r}function j_(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[fd])===null||t===void 0?void 0:t.stringValue)===pd}function vr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Bt(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=vr(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=vr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function q_(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===z_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.value=e}static empty(){return new $e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ai(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vr(t)}setAll(e){let t=we.emptyPath(),n={},i=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,n,i),n={},i=[],t=l.popLast()}a?n[l.lastSegment()]=vr(a):i.push(l.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Ai(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Ai(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Bt(t,((i,s)=>e[i]=s));for(const i of n)delete e[i]}clone(){return new $e(vr(this.value))}}function md(r){const e=[];return Bt(r.fields,((t,n)=>{const i=new we([t]);if(Ai(n)){const s=md(n.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)})),new Fe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t,n,i,s,a,l){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Pe(e,0,B.min(),B.min(),B.min(),$e.empty(),0)}static newFoundDocument(e,t,n,i){return new Pe(e,1,t,B.min(),n,i,0)}static newNoDocument(e,t){return new Pe(e,2,t,B.min(),B.min(),$e.empty(),0)}static newUnknownDocument(e,t){return new Pe(e,3,t,B.min(),B.min(),$e.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t){this.position=e,this.inclusive=t}}function au(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],a=r.position[i];if(s.field.isKeyField()?n=$.comparator($.fromName(a.referenceValue),t.key):n=Vn(a,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function lu(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!rt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t="asc"){this.field=e,this.dir=t}}function H_(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{}class fe extends gd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new W_(e,t,n):t==="array-contains"?new Q_(e,n):t==="in"?new J_(e,n):t==="not-in"?new X_(e,n):t==="array-contains-any"?new Z_(e,n):new fe(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new K_(e,n):new Y_(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Vn(t,this.value)):t!==null&&Mt(this.value)===Mt(t)&&this.matchesComparison(Vn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ke extends gd{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ke(e,t)}matches(e){return yd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function yd(r){return r.op==="and"}function _d(r){return G_(r)&&yd(r)}function G_(r){for(const e of r.filters)if(e instanceof Ke)return!1;return!0}function So(r){if(r instanceof fe)return r.field.canonicalString()+r.op.toString()+On(r.value);if(_d(r))return r.filters.map((e=>So(e))).join(",");{const e=r.filters.map((t=>So(t))).join(",");return`${r.op}(${e})`}}function vd(r,e){return r instanceof fe?(function(n,i){return i instanceof fe&&n.op===i.op&&n.field.isEqual(i.field)&&rt(n.value,i.value)})(r,e):r instanceof Ke?(function(n,i){return i instanceof Ke&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((s,a,l)=>s&&vd(a,i.filters[l])),!0):!1})(r,e):void L(19439)}function bd(r){return r instanceof fe?(function(t){return`${t.field.canonicalString()} ${t.op} ${On(t.value)}`})(r):r instanceof Ke?(function(t){return t.op.toString()+" {"+t.getFilters().map(bd).join(" ,")+"}"})(r):"Filter"}class W_ extends fe{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class K_ extends fe{constructor(e,t){super(e,"in",t),this.keys=wd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Y_ extends fe{constructor(e,t){super(e,"not-in",t),this.keys=wd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function wd(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((n=>$.fromName(n.referenceValue)))}class Q_ extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Aa(t)&&kr(t.arrayValue,this.value)}}class J_ extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&kr(this.value.arrayValue,t)}}class X_ extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!kr(this.value.arrayValue,t)}}class Z_ extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Aa(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>kr(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t=null,n=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Pe=null}}function cu(r,e=null,t=[],n=[],i=null,s=null,a=null){return new ev(r,e,t,n,i,s,a)}function xa(r){const e=z(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>So(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(s){return s.field.canonicalString()+s.dir})(n))).join(","),ss(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>On(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>On(n))).join(",")),e.Pe=t}return e.Pe}function Sa(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!H_(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!vd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!lu(r.startAt,e.startAt)&&lu(r.endAt,e.endAt)}function Ro(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t=null,n=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function tv(r,e,t,n,i,s,a,l){return new Br(r,e,t,n,i,s,a,l)}function Ra(r){return new Br(r)}function uu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Ed(r){return r.collectionGroup!==null}function br(r){const e=z(r);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ge(we.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new zi(s,n))})),t.has(we.keyField().canonicalString())||e.Te.push(new zi(we.keyField(),n))}return e.Te}function Xe(r){const e=z(r);return e.Ie||(e.Ie=nv(e,br(r))),e.Ie}function nv(r,e){if(r.limitType==="F")return cu(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new zi(i.field,s)}));const t=r.endAt?new Bi(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Bi(r.startAt.position,r.startAt.inclusive):null;return cu(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Co(r,e){const t=r.filters.concat([e]);return new Br(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Po(r,e,t){return new Br(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function as(r,e){return Sa(Xe(r),Xe(e))&&r.limitType===e.limitType}function Td(r){return`${xa(Xe(r))}|lt:${r.limitType}`}function En(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((i=>bd(i))).join(", ")}]`),ss(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((i=>On(i))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((i=>On(i))).join(",")),`Target(${n})`})(Xe(r))}; limitType=${r.limitType})`}function ls(r,e){return e.isFoundDocument()&&(function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):$.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)})(r,e)&&(function(n,i){for(const s of br(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(r,e)&&(function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0})(r,e)&&(function(n,i){return!(n.startAt&&!(function(a,l,u){const d=au(a,l,u);return a.inclusive?d<=0:d<0})(n.startAt,br(n),i)||n.endAt&&!(function(a,l,u){const d=au(a,l,u);return a.inclusive?d>=0:d>0})(n.endAt,br(n),i))})(r,e)}function rv(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Id(r){return(e,t)=>{let n=!1;for(const i of br(r)){const s=iv(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function iv(r,e,t){const n=r.field.isKeyField()?$.comparator(e.key,t.key):(function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Vn(u,d):L(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bt(this.inner,((t,n)=>{for(const[i,s]of n)e(i,s)}))}isEmpty(){return ad(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=new re($.comparator);function mt(){return sv}const Ad=new re($.comparator);function dr(...r){let e=Ad;for(const t of r)e=e.insert(t.key,t);return e}function xd(r){let e=Ad;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Xt(){return wr()}function Sd(){return wr()}function wr(){return new dn((r=>r.toString()),((r,e)=>r.isEqual(e)))}const ov=new re($.comparator),av=new ge($.comparator);function W(...r){let e=av;for(const t of r)e=e.add(t);return e}const lv=new ge(H);function cv(){return lv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Li(e)?"-0":e}}function Rd(r){return{integerValue:""+r}}function uv(r,e){return M_(e)?Rd(e):Ca(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this._=void 0}}function hv(r,e,t){return r instanceof Dr?(function(i,s){const a={fields:{[ud]:{stringValue:cd},[dd]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ia(s)&&(s=os(s)),s&&(a.fields[hd]=s),{mapValue:a}})(t,e):r instanceof Nr?Pd(r,e):r instanceof Vr?kd(r,e):(function(i,s){const a=Cd(i,s),l=hu(a)+hu(i.Ee);return xo(a)&&xo(i.Ee)?Rd(l):Ca(i.serializer,l)})(r,e)}function dv(r,e,t){return r instanceof Nr?Pd(r,e):r instanceof Vr?kd(r,e):t}function Cd(r,e){return r instanceof ji?(function(n){return xo(n)||(function(s){return!!s&&"doubleValue"in s})(n)})(e)?e:{integerValue:0}:null}class Dr extends cs{}class Nr extends cs{constructor(e){super(),this.elements=e}}function Pd(r,e){const t=Dd(e);for(const n of r.elements)t.some((i=>rt(i,n)))||t.push(n);return{arrayValue:{values:t}}}class Vr extends cs{constructor(e){super(),this.elements=e}}function kd(r,e){let t=Dd(e);for(const n of r.elements)t=t.filter((i=>!rt(i,n)));return{arrayValue:{values:t}}}class ji extends cs{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function hu(r){return ae(r.integerValue||r.doubleValue)}function Dd(r){return Aa(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t){this.field=e,this.transform=t}}function pv(r,e){return r.field.isEqual(e.field)&&(function(n,i){return n instanceof Nr&&i instanceof Nr||n instanceof Vr&&i instanceof Vr?Nn(n.elements,i.elements,rt):n instanceof ji&&i instanceof ji?rt(n.Ee,i.Ee):n instanceof Dr&&i instanceof Dr})(r.transform,e.transform)}class mv{constructor(e,t){this.version=e,this.transformResults=t}}class je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new je}static exists(e){return new je(void 0,e)}static updateTime(e){return new je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xi(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class us{}function Nd(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Pa(r.key,je.none()):new zr(r.key,r.data,je.none());{const t=r.data,n=$e.empty();let i=new ge(we.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new zt(r.key,n,new Fe(i.toArray()),je.none())}}function gv(r,e,t){r instanceof zr?(function(i,s,a){const l=i.value.clone(),u=fu(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(r,e,t):r instanceof zt?(function(i,s,a){if(!xi(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=fu(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Vd(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(r,e,t):(function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Er(r,e,t,n){return r instanceof zr?(function(s,a,l,u){if(!xi(s.precondition,a))return l;const d=s.value.clone(),f=pu(s.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(r,e,t,n):r instanceof zt?(function(s,a,l,u){if(!xi(s.precondition,a))return l;const d=pu(s.fieldTransforms,u,a),f=a.data;return f.setAll(Vd(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((m=>m.field)))})(r,e,t,n):(function(s,a,l){return xi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(r,e,t)}function yv(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=Cd(n.transform,i||null);s!=null&&(t===null&&(t=$e.empty()),t.set(n.field,s))}return t||null}function du(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Nn(n,i,((s,a)=>pv(s,a)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class zr extends us{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zt extends us{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Vd(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function fu(r,e,t){const n=new Map;J(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let i=0;i<t.length;i++){const s=r[i],a=s.transform,l=e.data.field(s.field);n.set(s.field,dv(a,l,t[i]))}return n}function pu(r,e,t){const n=new Map;for(const i of r){const s=i.transform,a=t.data.field(i.field);n.set(i.field,hv(s,a,e))}return n}class Pa extends us{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _v extends us{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&gv(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Er(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Er(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Sd();return this.mutations.forEach((i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=Nd(a,l);u!==null&&n.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(B.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),W())}isEqual(e){return this.batchId===e.batchId&&Nn(this.mutations,e.mutations,((t,n)=>du(t,n)))&&Nn(this.baseMutations,e.baseMutations,((t,n)=>du(t,n)))}}class ka{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){J(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let i=(function(){return ov})();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new ka(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,Y;function Ev(r){switch(r){case R.OK:return L(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return L(15467,{code:r})}}function Od(r){if(r===void 0)return pt("GRPC error has no .code"),R.UNKNOWN;switch(r){case he.OK:return R.OK;case he.CANCELLED:return R.CANCELLED;case he.UNKNOWN:return R.UNKNOWN;case he.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case he.INTERNAL:return R.INTERNAL;case he.UNAVAILABLE:return R.UNAVAILABLE;case he.UNAUTHENTICATED:return R.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case he.NOT_FOUND:return R.NOT_FOUND;case he.ALREADY_EXISTS:return R.ALREADY_EXISTS;case he.PERMISSION_DENIED:return R.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case he.ABORTED:return R.ABORTED;case he.OUT_OF_RANGE:return R.OUT_OF_RANGE;case he.UNIMPLEMENTED:return R.UNIMPLEMENTED;case he.DATA_LOSS:return R.DATA_LOSS;default:return L(39323,{code:r})}}(Y=he||(he={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=new Ct([4294967295,4294967295],0);function mu(r){const e=rd().encode(r),t=new Yh;return t.update(e),new Uint8Array(t.digest())}function gu(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ct([t,n],0),new Ct([i,s],0)]}class Da{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new fr(`Invalid padding: ${t}`);if(n<0)throw new fr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new fr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new fr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ct.fromNumber(this.fe)}pe(e,t,n){let i=e.add(t.multiply(Ct.fromNumber(n)));return i.compare(Tv)===1&&(i=new Ct([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=mu(e),[n,i]=gu(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(n,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Da(s,i,t);return n.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=mu(e),[n,i]=gu(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(n,i,s);this.we(a)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class fr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,jr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new hs(B.min(),i,new re(H),mt(),W())}}class jr{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new jr(n,t,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t,n,i){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=i}}class $d{constructor(e,t){this.targetId=e,this.De=t}}class Md{constructor(e,t,n=Ee.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class yu{constructor(){this.ve=0,this.Ce=_u(),this.Fe=Ee.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=W(),t=W(),n=W();return this.Ce.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:L(38017,{changeType:s})}})),new jr(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=_u()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,J(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Iv{constructor(e){this.We=e,this.Ge=new Map,this.ze=mt(),this.je=gi(),this.Je=gi(),this.He=new re(H)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:L(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((n,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,n=e.De.count,i=this.st(t);if(i){const s=i.target;if(Ro(s))if(n===0){const a=new $(s.path);this.Xe(t,a,Pe.newNoDocument(a,B.min()))}else J(n===1,20013,{expectedCount:n});else{const a=this.ot(t);if(a!==n){const l=this._t(e),u=l?this.ut(l,e,a):1;if(u!==0){this.rt(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=$t(n).toUint8Array()}catch(u){if(u instanceof ld)return Nt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Da(a,i,s)}catch(u){return Nt(u instanceof fr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let i=0;return n.forEach((s=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,s,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((s,a)=>{const l=this.st(a);if(l){if(s.current&&Ro(l.target)){const u=new $(l.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Pe.newNoDocument(u,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}}));let n=W();this.Je.forEach(((s,a)=>{let l=!0;a.forEachWhile((u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(n=n.add(s))})),this.ze.forEach(((s,a)=>a.setReadTime(e)));const i=new hs(e,t,this.He,this.ze,n);return this.ze=mt(),this.je=gi(),this.Je=gi(),this.He=new re(H),i}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new yu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ge(H),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ge(H),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new yu),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function gi(){return new re($.comparator)}function _u(){return new re($.comparator)}const Av={asc:"ASCENDING",desc:"DESCENDING"},xv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Sv={and:"AND",or:"OR"};class Rv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ko(r,e){return r.useProto3Json||ss(e)?e:{value:e}}function qi(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ld(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Cv(r,e){return qi(r,e.toTimestamp())}function Ze(r){return J(!!r,49232),B.fromTimestamp((function(t){const n=Ot(t);return new ne(n.seconds,n.nanos)})(r))}function Na(r,e){return Do(r,e).canonicalString()}function Do(r,e){const t=(function(i){return new Z(["projects",i.projectId,"databases",i.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Fd(r){const e=Z.fromString(r);return J(qd(e),10190,{key:e.toString()}),e}function No(r,e){return Na(r.databaseId,e.path)}function ro(r,e){const t=Fd(e);if(t.get(1)!==r.databaseId.projectId)throw new O(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new O(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new $(Bd(t))}function Ud(r,e){return Na(r.databaseId,e)}function Pv(r){const e=Fd(r);return e.length===4?Z.emptyPath():Bd(e)}function Vo(r){return new Z(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Bd(r){return J(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function vu(r,e,t){return{name:No(r,e),fields:t.value.mapValue.fields}}function kv(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(d,f){return d.useProto3Json?(J(f===void 0||typeof f=="string",58123),Ee.fromBase64String(f||"")):(J(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ee.fromUint8Array(f||new Uint8Array))})(r,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(d){const f=d.code===void 0?R.UNKNOWN:Od(d.code);return new O(f,d.message||"")})(a);t=new Md(n,i,s,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=ro(r,n.document.name),s=Ze(n.document.updateTime),a=n.document.createTime?Ze(n.document.createTime):B.min(),l=new $e({mapValue:{fields:n.document.fields}}),u=Pe.newFoundDocument(i,s,a,l),d=n.targetIds||[],f=n.removedTargetIds||[];t=new Si(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=ro(r,n.document),s=n.readTime?Ze(n.readTime):B.min(),a=Pe.newNoDocument(i,s),l=n.removedTargetIds||[];t=new Si([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=ro(r,n.document),s=n.removedTargetIds||[];t=new Si([],s,i,null)}else{if(!("filter"in e))return L(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,a=new wv(i,s),l=n.targetId;t=new $d(l,a)}}return t}function Dv(r,e){let t;if(e instanceof zr)t={update:vu(r,e.key,e.value)};else if(e instanceof Pa)t={delete:No(r,e.key)};else if(e instanceof zt)t={update:vu(r,e.key,e.data),updateMask:Bv(e.fieldMask)};else{if(!(e instanceof _v))return L(16599,{Rt:e.type});t={verify:No(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(s,a){const l=a.transform;if(l instanceof Dr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Nr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Vr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ji)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw L(20930,{transform:a.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:Cv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L(27497)})(r,e.precondition)),t}function Nv(r,e){return r&&r.length>0?(J(e!==void 0,14353),r.map((t=>(function(i,s){let a=i.updateTime?Ze(i.updateTime):Ze(s);return a.isEqual(B.min())&&(a=Ze(s)),new mv(a,i.transformResults||[])})(t,e)))):[]}function Vv(r,e){return{documents:[Ud(r,e.path)]}}function Ov(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Ud(r,i);const s=(function(d){if(d.length!==0)return jd(Ke.create(d,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const a=(function(d){if(d.length!==0)return d.map((f=>(function(y){return{field:Tn(y.field),direction:Lv(y.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ko(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{Vt:t,parent:i}}function $v(r){let e=Pv(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){J(n===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=(function(m){const y=zd(m);return y instanceof Ke&&_d(y)?y.getFilters():[y]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((y=>(function(S){return new zi(In(S.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(y)))})(t.orderBy));let l=null;t.limit&&(l=(function(m){let y;return y=typeof m=="object"?m.value:m,ss(y)?null:y})(t.limit));let u=null;t.startAt&&(u=(function(m){const y=!!m.before,A=m.values||[];return new Bi(A,y)})(t.startAt));let d=null;return t.endAt&&(d=(function(m){const y=!m.before,A=m.values||[];return new Bi(A,y)})(t.endAt)),tv(e,i,a,s,l,"F",u,d)}function Mv(r,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zd(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=In(t.unaryFilter.field);return fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=In(t.unaryFilter.field);return fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=In(t.unaryFilter.field);return fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=In(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(r):r.fieldFilter!==void 0?(function(t){return fe.create(In(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Ke.create(t.compositeFilter.filters.map((n=>zd(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(t.compositeFilter.op))})(r):L(30097,{filter:r})}function Lv(r){return Av[r]}function Fv(r){return xv[r]}function Uv(r){return Sv[r]}function Tn(r){return{fieldPath:r.canonicalString()}}function In(r){return we.fromServerFormat(r.fieldPath)}function jd(r){return r instanceof fe?(function(t){if(t.op==="=="){if(ou(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NAN"}};if(su(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ou(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NAN"}};if(su(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(t.field),op:Fv(t.op),value:t.value}}})(r):r instanceof Ke?(function(t){const n=t.getFilters().map((i=>jd(i)));return n.length===1?n[0]:{compositeFilter:{op:Uv(t.op),filters:n}}})(r):L(54877,{filter:r})}function Bv(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function qd(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,n,i,s=B.min(),a=B.min(),l=Ee.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new At(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e){this.gt=e}}function jv(r){const e=$v({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Po(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.Dn=new Hv}addToCollectionParentIndex(e,t){return this.Dn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Vt.min())}updateCollectionGroup(e,t,n){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Hv{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ge(Z.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ge(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hd=41943040;class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(Hd,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new $n(0)}static ur(){return new $n(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="LruGarbageCollector",Gv=1048576;function Eu([r,e],[t,n]){const i=H(r,t);return i===0?H(e,n):i}class Wv{constructor(e){this.Tr=e,this.buffer=new ge(Eu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Eu(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Kv{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){V(wu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jn(t)?V(wu,"Ignoring IndexedDB error during garbage collection: ",t):await zn(t)}await this.Rr(3e5)}))}}class Yv{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(is.ue);const n=new Wv(t);return this.Vr.forEachTarget(e,(i=>n.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>n.Er(i))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(bu)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bu):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,i,s,a,l,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i)))).next((m=>(n=m,l=Date.now(),this.removeTargets(e,n,t)))).next((m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((m=>(d=Date.now(),wn()<=G.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m}))))}}function Qv(r,e){return new Yv(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.changes=new dn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?C.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(n!==null&&Er(n.mutation,i,Fe.empty(),ne.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,W()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=W()){const i=Xt();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((s=>{let a=dr();return s.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const n=Xt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,W())))}populateOverlays(e,t,n){const i=[];return n.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,n,i){let s=mt();const a=wr(),l=(function(){return wr()})();return t.forEach(((u,d)=>{const f=n.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof zt)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Er(f.mutation,d,f.mutation.getFieldMask(),ne.now())):a.set(d.key,Fe.empty())})),this.recalculateAndSaveOverlays(e,s).next((u=>(u.forEach(((d,f)=>a.set(d,f))),t.forEach(((d,f)=>{var m;return l.set(d,new Xv(f,(m=a.get(d))!==null&&m!==void 0?m:null))})),l)))}recalculateAndSaveOverlays(e,t){const n=wr();let i=new re(((a,l)=>a-l)),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let f=n.get(u)||Fe.empty();f=l.applyToLocalView(d,f),n.set(u,f);const m=(i.get(l.batchId)||W()).add(u);i=i.insert(l.batchId,m)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,m=Sd();f.forEach((y=>{if(!s.has(y)){const A=Nd(t.get(y),n.get(y));A!==null&&m.set(y,A),s=s.add(y)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return C.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,i){return(function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ed(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):C.resolve(Xt());let l=Rr,u=s;return a.next((d=>C.forEach(d,((f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?C.resolve():this.remoteDocumentCache.getEntry(e,f).next((y=>{u=u.insert(f,y)}))))).next((()=>this.populateOverlays(e,d,s))).next((()=>this.computeViews(e,u,d,W()))).next((f=>({batchId:l,changes:xd(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next((n=>{let i=dr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let a=dr();return this.indexManager.getCollectionParents(e,s).next((l=>C.forEach(l,(u=>{const d=(function(m,y){return new Br(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,n,i).next((f=>{f.forEach(((m,y)=>{a=a.insert(m,y)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i)))).next((a=>{s.forEach(((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Pe.newInvalidDocument(f)))}));let l=dr();return a.forEach(((u,d)=>{const f=s.get(u);f!==void 0&&Er(f.mutation,d,Fe.empty(),ne.now()),ls(t,d)&&(l=l.insert(u,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return C.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Ze(i.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:jv(i.bundledQuery),readTime:Ze(i.readTime)}})(t)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.overlays=new re($.comparator),this.kr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Xt();return C.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&n.set(i,s)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((i,s)=>{this.wt(e,t,s)})),C.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.kr.delete(n)),C.resolve()}getOverlaysForCollection(e,t,n){const i=Xt(),s=t.length+1,a=new $(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>n&&i.set(u.getKey(),u)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new re(((d,f)=>d-f));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let f=s.get(d.largestBatchId);f===null&&(f=Xt(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Xt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,f)=>l.set(d,f))),!(l.size()>=i)););return C.resolve(l)}wt(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new bv(t,n));let s=this.kr.get(t);s===void 0&&(s=W(),this.kr.set(t,s)),this.kr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.qr=new ge(ye.Qr),this.$r=new ge(ye.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new ye(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new ye(e,t))}Gr(e,t){e.forEach((n=>this.removeReference(n,t)))}zr(e){const t=new $(new Z([])),n=new ye(t,e),i=new ye(t,e+1),s=[];return this.$r.forEachInRange([n,i],(a=>{this.Wr(a),s.push(a.key)})),s}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new $(new Z([])),n=new ye(t,e),i=new ye(t,e+1);let s=W();return this.$r.forEachInRange([n,i],(a=>{s=s.add(a.key)})),s}containsKey(e){const t=new ye(e,0),n=this.qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ye{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return $.comparator(e.key,t.key)||H(e.Hr,t.Hr)}static Ur(e,t){return H(e.Hr,t.Hr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ge(ye.Qr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new vv(s,t,n,i);this.mutationQueue.push(a);for(const l of i)this.Yr=this.Yr.add(new ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Xr(n),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Ta:this.er-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ye(t,0),i=new ye(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([n,i],(a=>{const l=this.Zr(a.Hr);s.push(l)})),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ge(H);return t.forEach((i=>{const s=new ye(i,0),a=new ye(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],(l=>{n=n.add(l.Hr)}))})),C.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;$.isDocumentKey(s)||(s=s.child(""));const a=new ye(new $(s),0);let l=new ge(H);return this.Yr.forEachWhile((u=>{const d=u.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.Hr)),!0)}),a),C.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((n=>{const i=this.Zr(n);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){J(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return C.forEach(t.mutations,(i=>{const s=new ye(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=n}))}rr(e){}containsKey(e,t){const n=new ye(t,0),i=this.Yr.firstAfterOrEqual(n);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.ni=e,this.docs=(function(){return new re($.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return C.resolve(n?n.document.mutableCopy():Pe.newInvalidDocument(t))}getEntries(e,t){let n=mt();return t.forEach((i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():Pe.newInvalidDocument(i))})),C.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=mt();const a=t.path,l=new $(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||N_(D_(f),n)<=0||(i.has(f.key)||ls(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,t,n,i){L(9500)}ri(e,t){return C.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new sb(this)}getSize(e){return C.resolve(this.size)}}class sb extends Jv{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(n)})),C.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.persistence=e,this.ii=new dn((t=>xa(t)),Sa),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.si=0,this.oi=new Va,this.targetCount=0,this._i=$n.ar()}forEachTarget(e,t){return this.ii.forEach(((n,i)=>t(i))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),C.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new $n(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.hr(t),C.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),C.waitFor(s).next((()=>i))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return C.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),C.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((a=>{s.push(i.markPotentiallyOrphaned(e,a))})),C.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return C.resolve(n)}containsKey(e,t){return C.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t){this.ai={},this.overlays={},this.ui=new is(0),this.ci=!1,this.ci=!0,this.li=new nb,this.referenceDelegate=e(this),this.hi=new ob(this),this.indexManager=new qv,this.remoteDocumentCache=(function(i){return new ib(i)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new zv(t),this.Ti=new eb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new rb(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const i=new ab(this.ui.next());return this.referenceDelegate.Ii(),n(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return C.or(Object.values(this.ai).map((n=>()=>n.containsKey(e,t))))}}class ab extends O_{constructor(e){super(),this.currentSequenceNumber=e}}class Oa{constructor(e){this.persistence=e,this.Ai=new Va,this.Ri=null}static Vi(e){return new Oa(e)}get mi(){if(this.Ri)return this.Ri;throw L(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),C.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.mi.add(s.toString())))})).next((()=>n.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.mi,(n=>{const i=$.fromPath(n);return this.fi(e,i).next((s=>{s||t.removeEntry(i,B.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((n=>{n?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return C.or([()=>C.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Hi{constructor(e,t){this.persistence=e,this.gi=new dn((n=>L_(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=Qv(this,t)}static Vi(e,t){return new Hi(e,t)}Ii(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}gr(e,t){return C.forEach(this.gi,((n,i)=>this.Sr(e,n,i).next((s=>s?C.resolve():t(i)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(n++,s.removeEntry(a,B.min()))})))).next((()=>s.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),C.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ii(e.data.value)),t}Sr(e,t,n){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return C.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=i}static Es(e,t){let n=W(),i=W();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $a(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return em()?8:$_(ke())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.ps(e,t).next((a=>{s.result=a})).next((()=>{if(!s.result)return this.ys(e,t,i,n).next((a=>{s.result=a}))})).next((()=>{if(s.result)return;const a=new lb;return this.ws(e,t,a).next((l=>{if(s.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>s.result))}Ss(e,t,n,i){return n.documentReadCount<this.Vs?(wn()<=G.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",En(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(wn()<=G.DEBUG&&V("QueryEngine","Query:",En(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(wn()<=G.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",En(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xe(t))):C.resolve())}ps(e,t){if(uu(t))return C.resolve(null);let n=Xe(t);return this.indexManager.getIndexType(e,n).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Po(t,null,"F"),n=Xe(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const a=W(...s);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,n).next((u=>{const d=this.bs(t,l);return this.Ds(t,d,a,u.readTime)?this.ps(e,Po(t,null,"F")):this.vs(e,d,t,u)}))))})))))}ys(e,t,n,i){return uu(t)||i.isEqual(B.min())?C.resolve(null):this.gs.getDocuments(e,n).next((s=>{const a=this.bs(t,s);return this.Ds(t,a,n,i)?C.resolve(null):(wn()<=G.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),En(t)),this.vs(e,a,t,k_(i,Rr)).next((l=>l)))}))}bs(e,t){let n=new ge(Id(e));return t.forEach(((i,s)=>{ls(e,s)&&(n=n.add(s))})),n}Ds(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,n){return wn()<=G.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",En(t)),this.gs.getDocumentsMatchingQuery(e,t,Vt.min(),n)}vs(e,t,n,i){return this.gs.getDocumentsMatchingQuery(e,n,i).next((s=>(t.forEach((a=>{s=s.insert(a.key,a)})),s)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="LocalStore",ub=3e8;class hb{constructor(e,t,n,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new re(H),this.Ms=new dn((s=>xa(s)),Sa),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zv(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function db(r,e,t,n){return new hb(r,e,t,n)}async function Wd(r,e){const t=z(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next((s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(n)))).next((s=>{const a=[],l=[];let u=W();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(n,u).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function fb(r,e){const t=z(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return(function(l,u,d,f){const m=d.batch,y=m.keys();let A=C.resolve();return y.forEach((S=>{A=A.next((()=>f.getEntry(u,S))).next((D=>{const P=d.docVersions.get(S);J(P!==null,48541),D.version.compareTo(P)<0&&(m.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))}))})),A.next((()=>l.mutationQueue.removeMutationBatch(u,m)))})(t,n,e,s).next((()=>s.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(l){let u=W();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(n,i)))}))}function Kd(r){const e=z(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function pb(r,e){const t=z(r),n=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const l=[];e.targetChanges.forEach(((f,m)=>{const y=i.get(m);if(!y)return;l.push(t.hi.removeMatchingKeys(s,f.removedDocuments,m).next((()=>t.hi.addMatchingKeys(s,f.addedDocuments,m))));let A=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(Ee.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,n)),i=i.insert(m,A),(function(D,P,j){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=ub?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(y,A,f)&&l.push(t.hi.updateTargetData(s,A))}));let u=mt(),d=W();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))})),l.push(mb(s,a,e.documentUpdates).next((f=>{u=f.Ls,d=f.ks}))),!n.isEqual(B.min())){const f=t.hi.getLastRemoteSnapshotVersion(s).next((m=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,n)));l.push(f)}return C.waitFor(l).next((()=>a.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,u,d))).next((()=>u))})).then((s=>(t.Fs=i,s)))}function mb(r,e,t){let n=W(),i=W();return t.forEach((s=>n=n.add(s))),e.getEntries(r,n).next((s=>{let a=mt();return t.forEach(((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):V(Ma,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)})),{Ls:a,ks:i}}))}function gb(r,e){const t=z(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Ta),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function yb(r,e){const t=z(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return t.hi.getTargetData(n,e).next((s=>s?(i=s,C.resolve(i)):t.hi.allocateTargetId(n).next((a=>(i=new At(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.hi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=t.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(n.targetId,n),t.Ms.set(e,n.targetId)),n}))}async function Oo(r,e,t){const n=z(r),i=n.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,(a=>n.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!jn(a))throw a;V(Ma,`Failed to update sequence numbers for target ${e}: ${a}`)}n.Fs=n.Fs.remove(e),n.Ms.delete(i.target)}function Tu(r,e,t){const n=z(r);let i=B.min(),s=W();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,f){const m=z(u),y=m.Ms.get(f);return y!==void 0?C.resolve(m.Fs.get(y)):m.hi.getTargetData(d,f)})(n,a,Xe(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{s=u}))})).next((()=>n.Cs.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?s:W()))).next((l=>(_b(n,rv(e),l),{documents:l,qs:s})))))}function _b(r,e,t){let n=r.xs.get(e)||B.min();t.forEach(((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)})),r.xs.set(e,n)}class Iu{constructor(){this.activeTargetIds=cv()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vb{constructor(){this.Fo=new Iu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Iu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="ConnectivityMonitor";class xu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){V(Au,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){V(Au,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi=null;function $o(){return yi===null?yi=(function(){return 268435456+Math.round(2147483648*Math.random())})():yi++,"0x"+yi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="RestConnection",wb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Eb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===Fi?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(e,t,n,i,s){const a=$o(),l=this.Go(e,t.toUriEncodedString());V(io,`Sending RPC '${e}' ${a}:`,l,n);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:d}=new URL(l),f=hn(d);return this.jo(e,l,u,n,f).then((m=>(V(io,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw Nt(io,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",n),m}))}Jo(e,t,n,i,s,a){return this.Wo(e,t,n,i,s)}zo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),n&&n.headers.forEach(((i,s)=>e[s]=i))}Go(e,t){const n=wb[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="WebChannelConnection";class Ib extends Eb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,i,s){const a=$o();return new Promise(((l,u)=>{const d=new Qh;d.setWithCredentials(!0),d.listenOnce(Jh.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Ti.NO_ERROR:const m=d.getResponseJson();V(Se,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case Ti.TIMEOUT:V(Se,`RPC '${e}' ${a} timed out`),u(new O(R.DEADLINE_EXCEEDED,"Request time out"));break;case Ti.HTTP_ERROR:const y=d.getStatus();if(V(Se,`RPC '${e}' ${a} failed with status:`,y,"response text:",d.getResponseText()),y>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const D=(function(j){const F=j.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(F)>=0?F:R.UNKNOWN})(S.status);u(new O(D,S.message))}else u(new O(R.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new O(R.UNAVAILABLE,"Connection failed."));break;default:L(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{V(Se,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(i);V(Se,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",f,n,15)}))}P_(e,t,n){const i=$o(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ed(),l=Zh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const f=s.join("");V(Se,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=a.createWebChannel(f,u);this.T_(m);let y=!1,A=!1;const S=new Tb({Ho:P=>{A?V(Se,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(y||(V(Se,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),V(Se,`RPC '${e}' stream ${i} sending:`,P),m.send(P))},Yo:()=>m.close()}),D=(P,j,F)=>{P.listen(j,(q=>{try{F(q)}catch(M){setTimeout((()=>{throw M}),0)}}))};return D(m,hr.EventType.OPEN,(()=>{A||(V(Se,`RPC '${e}' stream ${i} transport opened.`),S.s_())})),D(m,hr.EventType.CLOSE,(()=>{A||(A=!0,V(Se,`RPC '${e}' stream ${i} transport closed`),S.__(),this.I_(m))})),D(m,hr.EventType.ERROR,(P=>{A||(A=!0,Nt(Se,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),S.__(new O(R.UNAVAILABLE,"The operation could not be completed")))})),D(m,hr.EventType.MESSAGE,(P=>{var j;if(!A){const F=P.data[0];J(!!F,16349);const q=F,M=(q==null?void 0:q.error)||((j=q[0])===null||j===void 0?void 0:j.error);if(M){V(Se,`RPC '${e}' stream ${i} received error:`,M);const me=M.status;let oe=(function(v){const b=he[v];if(b!==void 0)return Od(b)})(me),w=M.message;oe===void 0&&(oe=R.INTERNAL,w="Unknown error status: "+me+" with message "+M.message),A=!0,S.__(new O(oe,w)),m.close()}else V(Se,`RPC '${e}' stream ${i} received:`,F),S.a_(F)}})),D(l,Xh.STAT_EVENT,(P=>{P.stat===To.PROXY?V(Se,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===To.NOPROXY&&V(Se,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{S.o_()}),0),S}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function so(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(r){return new Rv(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-n);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="PersistentStream";class Qd{constructor(e,t,n,i,s,a,l,u){this.Fi=e,this.w_=n,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Yd(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(pt(t.toString()),pt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.b_===t&&this.W_(n,i)}),(n=>{e((()=>{const i=new O(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)}))}))}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{n((()=>this.G_(i)))})),this.stream.onMessage((i=>{n((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return V(Su,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(V(Su,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ab extends Qd{constructor(e,t,n,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=kv(this.serializer,e),n=(function(s){if(!("targetChange"in s))return B.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Ze(a.readTime):B.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=Vo(this.serializer),t.addTarget=(function(s,a){let l;const u=a.target;if(l=Ro(u)?{documents:Vv(s,u)}:{query:Ov(s,u).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ld(s,a.resumeToken);const d=ko(s,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){l.readTime=qi(s,a.snapshotVersion.toTimestamp());const d=ko(s,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,e);const n=Mv(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=Vo(this.serializer),t.removeTarget=e,this.k_(t)}}class xb extends Qd{constructor(e,t,n,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Nv(e.writeResults,e.commitTime),n=Ze(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=Vo(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>Dv(this.serializer,n)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{}class Rb extends Sb{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new O(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Wo(e,Do(t,n),i,s,a))).catch((s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(R.UNKNOWN,s.toString())}))}Jo(e,t,n,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,Do(t,n),i,a,l,s))).catch((a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(R.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Cb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(pt(t),this._a=!1):V("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="RemoteStore";class Pb{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo((a=>{n.enqueueAndForget((async()=>{fn(this)&&(V(cn,"Restarting streams for network reachability change."),await(async function(u){const d=z(u);d.Ia.add(4),await qr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await fs(d)})(this))}))})),this.Aa=new Cb(n,i)}}async function fs(r){if(fn(r))for(const e of r.da)await e(!0)}async function qr(r){for(const e of r.da)await e(!1)}function Jd(r,e){const t=z(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ba(t)?Ua(t):qn(t).x_()&&Fa(t,e))}function La(r,e){const t=z(r),n=qn(t);t.Ta.delete(e),n.x_()&&Xd(t,e),t.Ta.size===0&&(n.x_()?n.B_():fn(t)&&t.Aa.set("Unknown"))}function Fa(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}qn(r).H_(e)}function Xd(r,e){r.Ra.$e(e),qn(r).Y_(e)}function Ua(r){r.Ra=new Iv({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),qn(r).start(),r.Aa.aa()}function Ba(r){return fn(r)&&!qn(r).M_()&&r.Ta.size>0}function fn(r){return z(r).Ia.size===0}function Zd(r){r.Ra=void 0}async function kb(r){r.Aa.set("Online")}async function Db(r){r.Ta.forEach(((e,t)=>{Fa(r,e)}))}async function Nb(r,e){Zd(r),Ba(r)?(r.Aa.la(e),Ua(r)):r.Aa.set("Unknown")}async function Vb(r,e,t){if(r.Aa.set("Online"),e instanceof Md&&e.state===2&&e.cause)try{await(async function(i,s){const a=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ta.delete(l),i.Ra.removeTarget(l))})(r,e)}catch(n){V(cn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Gi(r,n)}else if(e instanceof Si?r.Ra.Ye(e):e instanceof $d?r.Ra.it(e):r.Ra.et(e),!t.isEqual(B.min()))try{const n=await Kd(r.localStore);t.compareTo(n)>=0&&await(function(s,a){const l=s.Ra.Pt(a);return l.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(d);f&&s.Ta.set(d,f.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,d)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(Ee.EMPTY_BYTE_STRING,f.snapshotVersion)),Xd(s,u);const m=new At(f.target,u,d,f.sequenceNumber);Fa(s,m)})),s.remoteSyncer.applyRemoteEvent(l)})(r,t)}catch(n){V(cn,"Failed to raise snapshot:",n),await Gi(r,n)}}async function Gi(r,e,t){if(!jn(e))throw e;r.Ia.add(1),await qr(r),r.Aa.set("Offline"),t||(t=()=>Kd(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{V(cn,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await fs(r)}))}function ef(r,e){return e().catch((t=>Gi(r,t,e)))}async function ps(r){const e=z(r),t=Lt(e);let n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ta;for(;Ob(e);)try{const i=await gb(e.localStore,n);if(i===null){e.Pa.length===0&&t.B_();break}n=i.batchId,$b(e,i)}catch(i){await Gi(e,i)}tf(e)&&nf(e)}function Ob(r){return fn(r)&&r.Pa.length<10}function $b(r,e){r.Pa.push(e);const t=Lt(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function tf(r){return fn(r)&&!Lt(r).M_()&&r.Pa.length>0}function nf(r){Lt(r).start()}async function Mb(r){Lt(r).na()}async function Lb(r){const e=Lt(r);for(const t of r.Pa)e.X_(t.mutations)}async function Fb(r,e,t){const n=r.Pa.shift(),i=ka.from(n,e,t);await ef(r,(()=>r.remoteSyncer.applySuccessfulWrite(i))),await ps(r)}async function Ub(r,e){e&&Lt(r).Z_&&await(async function(n,i){if((function(a){return Ev(a)&&a!==R.ABORTED})(i.code)){const s=n.Pa.shift();Lt(n).N_(),await ef(n,(()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i))),await ps(n)}})(r,e),tf(r)&&nf(r)}async function Ru(r,e){const t=z(r);t.asyncQueue.verifyOperationInProgress(),V(cn,"RemoteStore received new credentials");const n=fn(t);t.Ia.add(3),await qr(t),n&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await fs(t)}async function Bb(r,e){const t=z(r);e?(t.Ia.delete(2),await fs(t)):e||(t.Ia.add(2),await qr(t),t.Aa.set("Unknown"))}function qn(r){return r.Va||(r.Va=(function(t,n,i){const s=z(t);return s.ia(),new Ab(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(r.datastore,r.asyncQueue,{Zo:kb.bind(null,r),e_:Db.bind(null,r),n_:Nb.bind(null,r),J_:Vb.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Ba(r)?Ua(r):r.Aa.set("Unknown")):(await r.Va.stop(),Zd(r))}))),r.Va}function Lt(r){return r.ma||(r.ma=(function(t,n,i){const s=z(t);return s.ia(),new xb(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:Mb.bind(null,r),n_:Ub.bind(null,r),ea:Lb.bind(null,r),ta:Fb.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await ps(r)):(await r.ma.stop(),r.Pa.length>0&&(V(cn,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const a=Date.now()+n,l=new za(e,t,a,i,s);return l.start(n),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ja(r,e){if(pt("AsyncQueue",`${e}: ${r}`),jn(r))return new O(R.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{static emptySet(e){return new Cn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(t,n)=>$.comparator(t.key,n.key),this.keyedMap=dr(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Cn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.fa=new re($.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?e.type!==0&&n.type===3?this.fa=this.fa.insert(t,e):e.type===3&&n.type!==1?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.fa=this.fa.remove(t):e.type===1&&n.type===2?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):L(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Mn{constructor(e,t,n,i,s,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,i,s){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Mn(e,t,Cn.emptySet(t),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&as(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class jb{constructor(){this.queries=Pu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,n){const i=z(t),s=i.queries;i.queries=Pu(),s.forEach(((a,l)=>{for(const u of l.wa)u.onError(n)}))})(this,new O(R.ABORTED,"Firestore shutting down"))}}function Pu(){return new dn((r=>Td(r)),as)}async function rf(r,e){const t=z(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(n=2):(s=new zb,n=e.ba()?0:1);try{switch(n){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=ja(a,`Initialization of query '${En(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&qa(t)}async function sf(r,e){const t=z(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function qb(r,e){const t=z(r);let n=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.wa)l.Ca(i)&&(n=!0);a.ya=i}}n&&qa(t)}function Hb(r,e,t){const n=z(r),i=n.queries.get(e);if(i)for(const s of i.wa)s.onError(t);n.queries.delete(e)}function qa(r){r.Da.forEach((e=>{e.next()}))}var Mo,ku;(ku=Mo||(Mo={})).Fa="default",ku.Cache="cache";class of{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Mn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const n=t!=="Offline";return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Mn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Mo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.key=e}}class lf{constructor(e){this.key=e}}class Gb{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=W(),this.mutatedKeys=W(),this.Xa=Id(e),this.eu=new Cn(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new Cu,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,m)=>{const y=i.get(f),A=ls(this.query,m)?m:null,S=!!y&&this.mutatedKeys.has(y.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let P=!1;y&&A?y.data.isEqual(A.data)?S!==D&&(n.track({type:3,doc:A}),P=!0):this.iu(y,A)||(n.track({type:2,doc:A}),P=!0,(u&&this.Xa(A,u)>0||d&&this.Xa(A,d)<0)&&(l=!0)):!y&&A?(n.track({type:0,doc:A}),P=!0):y&&!A&&(n.track({type:1,doc:y}),P=!0,(u||d)&&(l=!0)),P&&(A?(a=a.add(A),s=D?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{eu:a,ru:n,Ds:l,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((f,m)=>(function(A,S){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{At:P})}};return D(A)-D(S)})(f.type,m.type)||this.Xa(f.doc,m.doc))),this.su(n),i=i!=null&&i;const l=t&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,d=u!==this.Ya;return this.Ya=u,a.length!==0||d?{snapshot:new Mn(this.query,e.eu,s,a,e.mutatedKeys,u===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Cu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=W(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const t=[];return e.forEach((n=>{this.Za.has(n)||t.push(new lf(n))})),this.Za.forEach((n=>{e.has(n)||t.push(new af(n))})),t}uu(e){this.Ha=e.qs,this.Za=W();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Mn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ha="SyncEngine";class Wb{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Kb{constructor(e){this.key=e,this.lu=!1}}class Yb{constructor(e,t,n,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new dn((l=>Td(l)),as),this.Tu=new Map,this.Iu=new Set,this.du=new re($.comparator),this.Eu=new Map,this.Au=new Va,this.Ru={},this.Vu=new Map,this.mu=$n.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Qb(r,e,t=!0){const n=pf(r);let i;const s=n.Pu.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await cf(n,e,t,!0),i}async function Jb(r,e){const t=pf(r);await cf(t,e,!0,!1)}async function cf(r,e,t,n){const i=await yb(r.localStore,Xe(e)),s=i.targetId,a=r.sharedClientState.addLocalQueryTarget(s,t);let l;return n&&(l=await Xb(r,e,s,a==="current",i.resumeToken)),r.isPrimaryClient&&t&&Jd(r.remoteStore,i),l}async function Xb(r,e,t,n,i){r.gu=(m,y,A)=>(async function(D,P,j,F){let q=P.view.nu(j);q.Ds&&(q=await Tu(D.localStore,P.query,!1).then((({documents:w})=>P.view.nu(w,q))));const M=F&&F.targetChanges.get(P.targetId),me=F&&F.targetMismatches.get(P.targetId)!=null,oe=P.view.applyChanges(q,D.isPrimaryClient,M,me);return Nu(D,P.targetId,oe._u),oe.snapshot})(r,m,y,A);const s=await Tu(r.localStore,e,!0),a=new Gb(e,s.qs),l=a.nu(s.documents),u=jr.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),d=a.applyChanges(l,r.isPrimaryClient,u);Nu(r,t,d._u);const f=new Wb(e,t,a);return r.Pu.set(e,f),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),d.snapshot}async function Zb(r,e,t){const n=z(r),i=n.Pu.get(e),s=n.Tu.get(i.targetId);if(s.length>1)return n.Tu.set(i.targetId,s.filter((a=>!as(a,e)))),void n.Pu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Oo(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),t&&La(n.remoteStore,i.targetId),Lo(n,i.targetId)})).catch(zn)):(Lo(n,i.targetId),await Oo(n.localStore,i.targetId,!0))}async function e0(r,e){const t=z(r),n=t.Pu.get(e),i=t.Tu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),La(t.remoteStore,n.targetId))}async function t0(r,e,t){const n=l0(r);try{const i=await(function(a,l){const u=z(a),d=ne.now(),f=l.reduce(((A,S)=>A.add(S.key)),W());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let S=mt(),D=W();return u.Os.getEntries(A,f).next((P=>{S=P,S.forEach(((j,F)=>{F.isValidDocument()||(D=D.add(j))}))})).next((()=>u.localDocuments.getOverlayedDocuments(A,S))).next((P=>{m=P;const j=[];for(const F of l){const q=yv(F,m.get(F.key).overlayedDocument);q!=null&&j.push(new zt(F.key,q,md(q.value.mapValue),je.exists(!0)))}return u.mutationQueue.addMutationBatch(A,d,j,l)})).next((P=>{y=P;const j=P.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(A,P.batchId,j)}))})).then((()=>({batchId:y.batchId,changes:xd(m)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),(function(a,l,u){let d=a.Ru[a.currentUser.toKey()];d||(d=new re(H)),d=d.insert(l,u),a.Ru[a.currentUser.toKey()]=d})(n,i.batchId,t),await Hr(n,i.changes),await ps(n.remoteStore)}catch(i){const s=ja(i,"Failed to persist write");t.reject(s)}}async function uf(r,e){const t=z(r);try{const n=await pb(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const a=t.Eu.get(s);a&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?J(a.lu,14607):i.removedDocuments.size>0&&(J(a.lu,42227),a.lu=!1))})),await Hr(t,n,e)}catch(n){await zn(n)}}function Du(r,e,t){const n=z(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Pu.forEach(((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const u=z(a);u.onlineState=l;let d=!1;u.queries.forEach(((f,m)=>{for(const y of m.wa)y.va(l)&&(d=!0)})),d&&qa(u)})(n.eventManager,e),i.length&&n.hu.J_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function n0(r,e,t){const n=z(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Eu.get(e),s=i&&i.key;if(s){let a=new re($.comparator);a=a.insert(s,Pe.newNoDocument(s,B.min()));const l=W().add(s),u=new hs(B.min(),new Map,new re(H),a,l);await uf(n,u),n.du=n.du.remove(s),n.Eu.delete(e),Ga(n)}else await Oo(n.localStore,e,!1).then((()=>Lo(n,e,t))).catch(zn)}async function r0(r,e){const t=z(r),n=e.batch.batchId;try{const i=await fb(t.localStore,e);df(t,n,null),hf(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Hr(t,i)}catch(i){await zn(i)}}async function i0(r,e,t){const n=z(r);try{const i=await(function(a,l){const u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next((m=>(J(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>u.localDocuments.getDocuments(d,f)))}))})(n.localStore,e);df(n,e,t),hf(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Hr(n,i)}catch(i){await zn(i)}}function hf(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function df(r,e,t){const n=z(r);let i=n.Ru[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ru[n.currentUser.toKey()]=i}}function Lo(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Tu.get(e))r.Pu.delete(n),t&&r.hu.pu(n,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((n=>{r.Au.containsKey(n)||ff(r,n)}))}function ff(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(La(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Ga(r))}function Nu(r,e,t){for(const n of t)n instanceof af?(r.Au.addReference(n.key,e),s0(r,n)):n instanceof lf?(V(Ha,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,e),r.Au.containsKey(n.key)||ff(r,n.key)):L(19791,{yu:n})}function s0(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Iu.has(n)||(V(Ha,"New document in limbo: "+t),r.Iu.add(n),Ga(r))}function Ga(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new $(Z.fromString(e)),n=r.mu.next();r.Eu.set(n,new Kb(t)),r.du=r.du.insert(t,n),Jd(r.remoteStore,new At(Xe(Ra(t.path)),n,"TargetPurposeLimboResolution",is.ue))}}async function Hr(r,e,t){const n=z(r),i=[],s=[],a=[];n.Pu.isEmpty()||(n.Pu.forEach(((l,u)=>{a.push(n.gu(u,e,t).then((d=>{var f;if((d||t)&&n.isPrimaryClient){const m=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=$a.Es(u.targetId,d);s.push(m)}})))})),await Promise.all(a),n.hu.J_(i),await(async function(u,d){const f=z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>C.forEach(d,(y=>C.forEach(y.Is,(A=>f.persistence.referenceDelegate.addReference(m,y.targetId,A))).next((()=>C.forEach(y.ds,(A=>f.persistence.referenceDelegate.removeReference(m,y.targetId,A)))))))))}catch(m){if(!jn(m))throw m;V(Ma,"Failed to update sequence numbers: "+m)}for(const m of d){const y=m.targetId;if(!m.fromCache){const A=f.Fs.get(y),S=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(S);f.Fs=f.Fs.insert(y,D)}}})(n.localStore,s))}async function o0(r,e){const t=z(r);if(!t.currentUser.isEqual(e)){V(Ha,"User change. New user:",e.toKey());const n=await Wd(t.localStore,e);t.currentUser=e,(function(s,a){s.Vu.forEach((l=>{l.forEach((u=>{u.reject(new O(R.CANCELLED,a))}))})),s.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Hr(t,n.Bs)}}function a0(r,e){const t=z(r),n=t.Eu.get(e);if(n&&n.lu)return W().add(n.key);{let i=W();const s=t.Tu.get(e);if(!s)return i;for(const a of s){const l=t.Pu.get(a);i=i.unionWith(l.view.tu)}return i}}function pf(r){const e=z(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=uf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=a0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=n0.bind(null,e),e.hu.J_=qb.bind(null,e.eventManager),e.hu.pu=Hb.bind(null,e.eventManager),e}function l0(r){const e=z(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=r0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=i0.bind(null,e),e}class Wi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ds(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return db(this.persistence,new cb,e.initialUser,this.serializer)}Du(e){return new Gd(Oa.Vi,this.serializer)}bu(e){return new vb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wi.provider={build:()=>new Wi};class c0 extends Wi{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){J(this.persistence.referenceDelegate instanceof Hi,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Kv(n,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new Gd((n=>Hi.Vi(n,t)),this.serializer)}}class Fo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Du(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=o0.bind(null,this.syncEngine),await Bb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new jb})()}createDatastore(e){const t=ds(e.databaseInfo.databaseId),n=(function(s){return new Ib(s)})(e.databaseInfo);return(function(s,a,l,u){return new Rb(s,a,l,u)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,i,s,a,l){return new Pb(n,i,s,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Du(this.syncEngine,t,0)),(function(){return xu.C()?new xu:new bb})())}createSyncEngine(e,t){return(function(i,s,a,l,u,d,f){const m=new Yb(i,s,a,l,u,d);return f&&(m.fu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=z(i);V(cn,"RemoteStore shutting down."),s.Ia.add(5),await qr(s),s.Ea.shutdown(),s.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Fo.provider={build:()=>new Fo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):pt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="FirestoreClient";class u0{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ce.UNAUTHENTICATED,this.clientId=Ea.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(async a=>{V(Ft,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(V(Ft,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ja(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function oo(r,e){r.asyncQueue.verifyOperationInProgress(),V(Ft,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await Wd(e.localStore,i),n=i)})),e.persistence.setDatabaseDeletedListener((()=>{Nt("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{V("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Nt("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),r._offlineComponents=e}async function Vu(r,e){r.asyncQueue.verifyOperationInProgress();const t=await h0(r);V(Ft,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>Ru(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>Ru(e.remoteStore,i))),r._onlineComponents=e}async function h0(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(Ft,"Using user provided OfflineComponentProvider");try{await oo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Nt("Error using user provided cache. Falling back to memory cache: "+t),await oo(r,new Wi)}}else V(Ft,"Using default OfflineComponentProvider"),await oo(r,new c0(void 0));return r._offlineComponents}async function gf(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(Ft,"Using user provided OnlineComponentProvider"),await Vu(r,r._uninitializedComponentsProvider._online)):(V(Ft,"Using default OnlineComponentProvider"),await Vu(r,new Fo))),r._onlineComponents}function d0(r){return gf(r).then((e=>e.syncEngine))}async function Uo(r){const e=await gf(r),t=e.eventManager;return t.onListen=Qb.bind(null,e.syncEngine),t.onUnlisten=Zb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Jb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=e0.bind(null,e.syncEngine),t}function f0(r,e,t={}){const n=new Pt;return r.asyncQueue.enqueueAndForget((async()=>(function(s,a,l,u,d){const f=new mf({next:y=>{f.Ou(),a.enqueueAndForget((()=>sf(s,m))),y.fromCache&&u.source==="server"?d.reject(new O(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),m=new of(l,f,{includeMetadataChanges:!0,ka:!0});return rf(s,m)})(await Uo(r),r.asyncQueue,e,t,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="firestore.googleapis.com",$u=!0;class Mu{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_f,this.ssl=$u}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:$u;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Gv)throw new O(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}P_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yf((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ms{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new w_;switch(n.type){case"firstParty":return new A_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Ou.get(t);n&&(V("ComponentProvider","Removing Datastore"),Ou.delete(t),n.terminate())})(this),Promise.resolve()}}function p0(r,e,t,n={}){var i;r=ze(r,ms);const s=hn(e),a=r._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:r._getEmulatorOptions()}),u=`${e}:${t}`;s&&(sa(`https://${u}`),oa("Firestore",!0)),a.host!==_f&&a.host!==u&&Nt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:u,ssl:s,emulatorOptions:n});if(!sn(d,l)&&(r._setSettings(d),n.mockUserToken)){let f,m;if(typeof n.mockUserToken=="string")f=n.mockUserToken,m=Ce.MOCK_USER;else{f=Hp(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const y=n.mockUserToken.sub||n.mockUserToken.user_id;if(!y)throw new O(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ce(y)}r._authCredentials=new E_(new nd(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new pn(this.firestore,e,this._query)}}class le{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}toJSON(){return{type:le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Ur(t,le._jsonSchema))return new le(e,n||null,new $(Z.fromString(t.referencePath)))}}le._jsonSchemaVersion="firestore/documentReference/1.0",le._jsonSchema={type:pe("string",le._jsonSchemaVersion),referencePath:pe("string")};class kt extends pn{constructor(e,t,n){super(e,t,Ra(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new $(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function vn(r,e,...t){if(r=ue(r),id("collection","path",e),r instanceof ms){const n=Z.fromString(e,...t);return Qc(n),new kt(r,null,n)}{if(!(r instanceof le||r instanceof kt))throw new O(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Z.fromString(e,...t));return Qc(n),new kt(r.firestore,null,n)}}function He(r,e,...t){if(r=ue(r),arguments.length===1&&(e=Ea.newId()),id("doc","path",e),r instanceof ms){const n=Z.fromString(e,...t);return Yc(n),new le(r,null,new $(n))}{if(!(r instanceof le||r instanceof kt))throw new O(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Z.fromString(e,...t));return Yc(n),new le(r.firestore,r instanceof kt?r.converter:null,new $(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="AsyncQueue";class Fu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Yd(this,"async_queue_retry"),this.oc=()=>{const n=so();n&&V(Lu,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=e;const t=so();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=so();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Pt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!jn(e))throw e;V(Lu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((n=>{throw this.tc=n,this.nc=!1,pt("INTERNAL UNHANDLED ERROR: ",Uu(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=za.createAndSchedule(this,e,t,n,(s=>this.lc(s)));return this.ec.push(i),i}ac(){this.tc&&L(47125,{hc:Uu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Uu(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1})(r,["next","error","complete"])}class Ut extends ms{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Fu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fu(e),this._firestoreClient=void 0,await e}}}function m0(r,e){const t=typeof r=="object"?r:ca(),n=typeof r=="string"?r:Fi,i=Zi(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=hh("firestore");s&&p0(i,...s)}return i}function Wa(r){if(r._terminated)throw new O(R.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||g0(r),r._firestoreClient}function g0(r){var e,t,n;const i=r._freezeSettings(),s=(function(l,u,d,f){return new B_(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,yf(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new u0(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(Ee.fromBase64String(e))}catch(t){throw new O(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ur(e,Be._jsonSchema))return Be.fromBase64String(e.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:pe("string",Be._jsonSchemaVersion),bytes:pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:et._jsonSchemaVersion}}static fromJSON(e){if(Ur(e,et._jsonSchema))return new et(e.latitude,e.longitude)}}et._jsonSchemaVersion="firestore/geoPoint/1.0",et._jsonSchema={type:pe("string",et._jsonSchemaVersion),latitude:pe("number"),longitude:pe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ur(e,tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new tt(e.vectorValues);throw new O(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tt._jsonSchemaVersion="firestore/vectorValue/1.0",tt._jsonSchema={type:pe("string",tt._jsonSchemaVersion),vectorValues:pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=/^__.*__$/;class _0{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new zt(e,this.data,this.fieldMask,t,this.fieldTransforms):new zr(e,this.data,t,this.fieldTransforms)}}class vf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new zt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function bf(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ec:r})}}class Ka{constructor(e,t,n,i,s,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ka(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.fc(e),i}gc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ki(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(bf(this.Ec)&&y0.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class v0{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ds(e)}Dc(e,t,n,i=!1){return new Ka({Ec:e,methodName:t,bc:n,path:we.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _s(r){const e=r._freezeSettings(),t=ds(r._databaseId);return new v0(r._databaseId,!!e.ignoreUndefinedProperties,t)}function wf(r,e,t,n,i,s={}){const a=r.Dc(s.merge||s.mergeFields?2:0,e,t,i);Qa("Data must be an object, but it was:",a,n);const l=Ef(n,a);let u,d;if(s.merge)u=new Fe(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=Bo(e,m,t);if(!a.contains(y))throw new O(R.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);If(f,y)||f.push(y)}u=new Fe(f),d=a.fieldTransforms.filter((m=>u.covers(m.field)))}else u=null,d=a.fieldTransforms;return new _0(new $e(l),u,d)}class vs extends ys{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vs}}class Ya extends ys{_toFieldTransform(e){return new fv(e.path,new Dr)}isEqual(e){return e instanceof Ya}}function b0(r,e,t,n){const i=r.Dc(1,e,t);Qa("Data must be an object, but it was:",i,n);const s=[],a=$e.empty();Bt(n,((u,d)=>{const f=Ja(e,u,t);d=ue(d);const m=i.gc(f);if(d instanceof vs)s.push(f);else{const y=Gr(d,m);y!=null&&(s.push(f),a.set(f,y))}}));const l=new Fe(s);return new vf(a,l,i.fieldTransforms)}function w0(r,e,t,n,i,s){const a=r.Dc(1,e,t),l=[Bo(e,n,t)],u=[i];if(s.length%2!=0)throw new O(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Bo(e,s[y])),u.push(s[y+1]);const d=[],f=$e.empty();for(let y=l.length-1;y>=0;--y)if(!If(d,l[y])){const A=l[y];let S=u[y];S=ue(S);const D=a.gc(A);if(S instanceof vs)d.push(A);else{const P=Gr(S,D);P!=null&&(d.push(A),f.set(A,P))}}const m=new Fe(d);return new vf(f,m,a.fieldTransforms)}function E0(r,e,t,n=!1){return Gr(t,r.Dc(n?4:3,e))}function Gr(r,e){if(Tf(r=ue(r)))return Qa("Unsupported field value:",e,r),Ef(r,e);if(r instanceof ys)return(function(n,i){if(!bf(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(n,i){const s=[];let a=0;for(const l of n){let u=Gr(l,i.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}})(r,e)}return(function(n,i){if((n=ue(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return uv(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ne.fromDate(n);return{timestampValue:qi(i.serializer,s)}}if(n instanceof ne){const s=new ne(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:qi(i.serializer,s)}}if(n instanceof et)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Be)return{bytesValue:Ld(i.serializer,n._byteString)};if(n instanceof le){const s=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Na(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof tt)return(function(a,l){return{mapValue:{fields:{[fd]:{stringValue:pd},[Ui]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.wc("VectorValues must only contain numeric values.");return Ca(l.serializer,d)}))}}}}}})(n,i);throw i.wc(`Unsupported field value: ${rs(n)}`)})(r,e)}function Ef(r,e){const t={};return ad(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(r,((n,i)=>{const s=Gr(i,e.Vc(n));s!=null&&(t[n]=s)})),{mapValue:{fields:t}}}function Tf(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ne||r instanceof et||r instanceof Be||r instanceof le||r instanceof ys||r instanceof tt)}function Qa(r,e,t){if(!Tf(t)||!sd(t)){const n=rs(t);throw n==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+n)}}function Bo(r,e,t){if((e=ue(e))instanceof gs)return e._internalPath;if(typeof e=="string")return Ja(r,e);throw Ki("Field path arguments must be of type string or ",r,!1,void 0,t)}const T0=new RegExp("[~\\*/\\[\\]]");function Ja(r,e,t){if(e.search(T0)>=0)throw Ki(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new gs(...e.split("."))._internalPath}catch{throw Ki(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ki(r,e,t,n,i){const s=n&&!n.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${n}`),a&&(u+=` in document ${i}`),u+=")"),new O(R.INVALID_ARGUMENT,l+r+u)}function If(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new I0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class I0 extends Af{data(){return super.data()}}function Xa(r,e){return typeof e=="string"?Ja(r,e):e instanceof gs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new O(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Za{}class A0 extends Za{}function x0(r,e,...t){let n=[];e instanceof Za&&n.push(e),n=n.concat(t),(function(s){const a=s.filter((u=>u instanceof el)).length,l=s.filter((u=>u instanceof bs)).length;if(a>1||a>0&&l>0)throw new O(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const i of n)r=i._apply(r);return r}class bs extends A0{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new bs(e,t,n)}_apply(e){const t=this._parse(e);return Sf(e._query,t),new pn(e.firestore,e.converter,Co(e._query,t))}_parse(e){const t=_s(e.firestore);return(function(s,a,l,u,d,f,m){let y;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ju(m,f);const S=[];for(const D of m)S.push(zu(u,s,D));y={arrayValue:{values:S}}}else y=zu(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ju(m,f),y=E0(l,a,m,f==="in"||f==="not-in");return fe.create(d,f,y)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function S0(r,e,t){const n=e,i=Xa("where",r);return bs._create(i,n,t)}class el extends Za{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new el(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Ke.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let a=i;const l=s.getFlattenedFilters();for(const u of l)Sf(a,u),a=Co(a,u)})(e._query,t),new pn(e.firestore,e.converter,Co(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zu(r,e,t){if(typeof(t=ue(t))=="string"){if(t==="")throw new O(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ed(e)&&t.indexOf("/")!==-1)throw new O(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Z.fromString(t));if(!$.isDocumentKey(n))throw new O(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return iu(r,new $(n))}if(t instanceof le)return iu(r,t._key);throw new O(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rs(t)}.`)}function ju(r,e){if(!Array.isArray(r)||r.length===0)throw new O(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Sf(r,e){const t=(function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null})(r.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class R0{convertValue(e,t="none"){switch(Mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($t(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Bt(e,((i,s)=>{n[i]=this.convertValue(s,t)})),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t[Ui].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map((a=>ae(a.doubleValue)));return new tt(s)}convertGeoPoint(e){return new et(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=os(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Cr(e));default:return null}}convertTimestamp(e){const t=Ot(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Z.fromString(e);J(qd(n),9688,{name:e});const i=new Pr(n.get(1),n.get(3)),s=new $(n.popFirst(5));return i.isEqual(t)||pt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class pr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tn extends Af{constructor(e,t,n,i,s,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Xa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=tn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}tn._jsonSchemaVersion="firestore/documentSnapshot/1.0",tn._jsonSchema={type:pe("string",tn._jsonSchemaVersion),bundleSource:pe("string","DocumentSnapshot"),bundleName:pe("string"),bundle:pe("string")};class Ri extends tn{data(e={}){return super.data(e)}}class nn{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new pr(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ri(this._firestore,this._userDataWriter,n.key,n,new pr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const u=new Ri(i._firestore,i._userDataWriter,l.doc.key,l.doc,new pr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>s||l.type!==3)).map((l=>{const u=new Ri(i._firestore,i._userDataWriter,l.doc.key,l.doc,new pr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:C0(l.type),doc:u,oldIndex:d,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=nn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ea.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function C0(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:r})}}nn._jsonSchemaVersion="firestore/querySnapshot/1.0",nn._jsonSchema={type:pe("string",nn._jsonSchemaVersion),bundleSource:pe("string","QuerySnapshot"),bundleName:pe("string"),bundle:pe("string")};class tl extends R0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function P0(r){r=ze(r,pn);const e=ze(r.firestore,Ut),t=Wa(e),n=new tl(e);return xf(r._query),f0(t,r._query).then((i=>new nn(e,n,r,i)))}function k0(r,e,t){r=ze(r,le);const n=ze(r.firestore,Ut),i=Rf(r.converter,e,t);return ws(n,[wf(_s(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,je.none())])}function cr(r,e,t,...n){r=ze(r,le);const i=ze(r.firestore,Ut),s=_s(i);let a;return a=typeof(e=ue(e))=="string"||e instanceof gs?w0(s,"updateDoc",r._key,e,t,n):b0(s,"updateDoc",r._key,e),ws(i,[a.toMutation(r._key,je.exists(!0))])}function qu(r){return ws(ze(r.firestore,Ut),[new Pa(r._key,je.none())])}function Hu(r,e){const t=ze(r.firestore,Ut),n=He(r),i=Rf(r.converter,e);return ws(t,[wf(_s(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,je.exists(!1))]).then((()=>n))}function ur(r,...e){var t,n,i;r=ue(r);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Bu(e[a])||(s=e[a++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Bu(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(n=m.error)===null||n===void 0?void 0:n.bind(m),e[a+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,d,f;if(r instanceof le)d=ze(r.firestore,Ut),f=Ra(r._key.path),u={next:m=>{e[a]&&e[a](D0(d,r,m))},error:e[a+1],complete:e[a+2]};else{const m=ze(r,pn);d=ze(m.firestore,Ut),f=m._query;const y=new tl(d);u={next:A=>{e[a]&&e[a](new nn(d,y,m,A))},error:e[a+1],complete:e[a+2]},xf(r._query)}return(function(y,A,S,D){const P=new mf(D),j=new of(A,P,S);return y.asyncQueue.enqueueAndForget((async()=>rf(await Uo(y),j))),()=>{P.Ou(),y.asyncQueue.enqueueAndForget((async()=>sf(await Uo(y),j)))}})(Wa(d),f,l,u)}function ws(r,e){return(function(n,i){const s=new Pt;return n.asyncQueue.enqueueAndForget((async()=>t0(await d0(n),i,s))),s.promise})(Wa(r),e)}function D0(r,e,t){const n=t.docs.get(e._key),i=new tl(r);return new tn(r,i,e._key,n,new pr(t.hasPendingWrites,t.fromCache),e.converter)}function lt(){return new Ya("serverTimestamp")}(function(e,t=!0){(function(i){Bn=i})(Fn),on(new Dt("firestore",((n,{instanceIdentifier:i,options:s})=>{const a=n.getProvider("app").getImmediate(),l=new Ut(new T_(n.getProvider("auth-internal")),new x_(a,n.getProvider("app-check-internal")),(function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pr(d.options.projectId,f)})(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l}),"PUBLIC").setMultipleInstances(!0)),Qe(qc,Hc,e),Qe(qc,Hc,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="type.googleapis.com/google.protobuf.Int64Value",V0="type.googleapis.com/google.protobuf.UInt64Value";function Cf(r,e){const t={};for(const n in r)r.hasOwnProperty(n)&&(t[n]=e(r[n]));return t}function Yi(r){if(r==null)return null;if(r instanceof Number&&(r=r.valueOf()),typeof r=="number"&&isFinite(r)||r===!0||r===!1||Object.prototype.toString.call(r)==="[object String]")return r;if(r instanceof Date)return r.toISOString();if(Array.isArray(r))return r.map(e=>Yi(e));if(typeof r=="function"||typeof r=="object")return Cf(r,e=>Yi(e));throw new Error("Data cannot be encoded in JSON: "+r)}function Ln(r){if(r==null)return r;if(r["@type"])switch(r["@type"]){case N0:case V0:{const e=Number(r.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+r);return e}default:throw new Error("Data cannot be decoded from JSON: "+r)}return Array.isArray(r)?r.map(e=>Ln(e)):typeof r=="function"||typeof r=="object"?Cf(r,e=>Ln(e)):r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Me extends it{constructor(e,t,n){super(`${nl}/${e}`,t||""),this.details=n,Object.setPrototypeOf(this,Me.prototype)}}function O0(r){if(r>=200&&r<300)return"ok";switch(r){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Qi(r,e){let t=O0(r),n=t,i;try{const s=e&&e.error;if(s){const a=s.status;if(typeof a=="string"){if(!Gu[a])return new Me("internal","internal");t=Gu[a],n=a}const l=s.message;typeof l=="string"&&(n=l),i=s.details,i!==void 0&&(i=Ln(i))}}catch{}return t==="ok"?null:new Me(t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,t,n,i){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Ue(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i==null||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),n=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:t,messagingToken:n,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="us-central1",M0=/^data: (.*?)(?:\n|$)/;function L0(r){let e=null;return{promise:new Promise((t,n)=>{e=setTimeout(()=>{n(new Me("deadline-exceeded","deadline-exceeded"))},r)}),cancel:()=>{e&&clearTimeout(e)}}}class F0{constructor(e,t,n,i,s=zo,a=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new $0(e,t,n,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=zo}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function U0(r,e,t){const n=hn(e);r.emulatorOrigin=`http${n?"s":""}://${e}:${t}`,n&&(sa(r.emulatorOrigin),oa("Functions",!0))}function B0(r,e,t){const n=i=>j0(r,e,i,{});return n.stream=(i,s)=>H0(r,e,i,s),n}async function z0(r,e,t,n){t["Content-Type"]="application/json";let i;try{i=await n(r,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}async function Pf(r,e){const t={},n=await r.contextProvider.getContext(e.limitedUseAppCheckTokens);return n.authToken&&(t.Authorization="Bearer "+n.authToken),n.messagingToken&&(t["Firebase-Instance-ID-Token"]=n.messagingToken),n.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=n.appCheckToken),t}function j0(r,e,t,n){const i=r._url(e);return q0(r,i,t,n)}async function q0(r,e,t,n){t=Yi(t);const i={data:t},s=await Pf(r,n),a=n.timeout||7e4,l=L0(a),u=await Promise.race([z0(e,i,s,r.fetchImpl),l.promise,r.cancelAllRequests]);if(l.cancel(),!u)throw new Me("cancelled","Firebase Functions instance was deleted.");const d=Qi(u.status,u.json);if(d)throw d;if(!u.json)throw new Me("internal","Response is not valid JSON object.");let f=u.json.data;if(typeof f>"u"&&(f=u.json.result),typeof f>"u")throw new Me("internal","Response is missing data field.");return{data:Ln(f)}}function H0(r,e,t,n){const i=r._url(e);return G0(r,i,t,n||{})}async function G0(r,e,t,n){var i;t=Yi(t);const s={data:t},a=await Pf(r,n);a["Content-Type"]="application/json",a.Accept="text/event-stream";let l;try{l=await r.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:a,signal:n==null?void 0:n.signal})}catch(A){if(A instanceof Error&&A.name==="AbortError"){const D=new Me("cancelled","Request was cancelled.");return{data:Promise.reject(D),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(D)}}}}}}const S=Qi(0,null);return{data:Promise.reject(S),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(S)}}}}}}let u,d;const f=new Promise((A,S)=>{u=A,d=S});(i=n==null?void 0:n.signal)===null||i===void 0||i.addEventListener("abort",()=>{const A=new Me("cancelled","Request was cancelled.");d(A)});const m=l.body.getReader(),y=W0(m,u,d,n==null?void 0:n.signal);return{stream:{[Symbol.asyncIterator](){const A=y.getReader();return{async next(){const{value:S,done:D}=await A.read();return{value:S,done:D}},async return(){return await A.cancel(),{done:!0,value:void 0}}}}},data:f}}function W0(r,e,t,n){const i=(a,l)=>{const u=a.match(M0);if(!u)return;const d=u[1];try{const f=JSON.parse(d);if("result"in f){e(Ln(f.result));return}if("message"in f){l.enqueue(Ln(f.message));return}if("error"in f){const m=Qi(0,f);l.error(m),t(m);return}}catch(f){if(f instanceof Me){l.error(f),t(f);return}}},s=new TextDecoder;return new ReadableStream({start(a){let l="";return u();async function u(){if(n!=null&&n.aborted){const d=new Me("cancelled","Request was cancelled");return a.error(d),t(d),Promise.resolve()}try{const{value:d,done:f}=await r.read();if(f){l.trim()&&i(l.trim(),a),a.close();return}if(n!=null&&n.aborted){const y=new Me("cancelled","Request was cancelled");a.error(y),t(y),await r.cancel();return}l+=s.decode(d,{stream:!0});const m=l.split(`
`);l=m.pop()||"";for(const y of m)y.trim()&&i(y.trim(),a);return u()}catch(d){const f=d instanceof Me?d:Qi(0,null);a.error(f),t(f)}}},cancel(){return r.cancel()}})}const Wu="@firebase/functions",Ku="0.12.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="auth-internal",Y0="app-check-internal",Q0="messaging-internal";function J0(r){const e=(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider(K0),a=t.getProvider(Q0),l=t.getProvider(Y0);return new F0(i,s,a,l,n)};on(new Dt(nl,e,"PUBLIC").setMultipleInstances(!0)),Qe(Wu,Ku,r),Qe(Wu,Ku,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(r=ca(),e=zo){const n=Zi(ue(r),nl).getImmediate({identifier:e}),i=hh("functions");return i&&Z0(n,...i),n}function Z0(r,e,t){U0(ue(r),e,t)}function ew(r,e,t){return B0(ue(r),e)}J0();const jo={apiKey:"AIzaSyA6NKZNLVBeeLrXcLJSXus5M832AxpI2wk",authDomain:"pebblepath-992b6.firebaseapp.com",projectId:"pebblepath-992b6",storageBucket:"pebblepath-992b6.firebasestorage.app",messagingSenderId:"497141667291",appId:"1:497141667291:web:ee84c186db54389d10c3fe"},un=!!(jo.apiKey&&jo.projectId),rl=un?gh(jo):null,Re=un?v_(rl):null,te=un?m0(rl):null,Yu=un?X0(rl,"us-central1"):null,qo=un?new ct:null;qo&&qo.setCustomParameters({prompt:"select_account"});function tw(){if(!Re)throw new Error("Firebase not configured — fill in .env first.");return Ry(Re,qo)}function nw(){return Re?ly(Re):Promise.resolve()}function rw(r){return Re?ay(Re,r):(r(null),()=>{})}class iw extends EventTarget{constructor(){super(),this.state={user:null,family:null,children:[],trips:[],events:[]},this._uid=null,this._unsubUser=null,this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this._currentFamilyId=null}get familyId(){return this._currentFamilyId}start(e){!te||!e||this._uid!==e&&(this.stop(),this._uid=e,this._unsubUser=ur(He(te,"users",e),t=>{var i,s,a,l,u,d;this.state.user=t.exists()?{id:t.id,...t.data()}:null;const n=((i=this.state.user)==null?void 0:i.familyId)??((s=this.state.user)==null?void 0:s.cairnFamilyId)??null;n!==this._currentFamilyId&&(this._currentFamilyId=n,(a=this._unsubFamily)==null||a.call(this),(l=this._unsubChildren)==null||l.call(this),(u=this._unsubTrips)==null||u.call(this),(d=this._unsubEvents)==null||d.call(this),this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this.state.family=null,this.state.children=[],this.state.trips=[],this.state.events=[],n&&this._subscribeFamily(n)),this._emit()}))}_subscribeFamily(e){this._unsubFamily=ur(He(te,"families",e),t=>{this.state.family=t.exists()?{id:t.id,...t.data()}:null,this._emit()}),this._unsubChildren=ur(vn(te,"families",e,"children"),t=>{this.state.children=t.docs.map(n=>{var s,a;const i=n.data();return{id:n.id,...i,dateOfBirth:((a=(s=i.dateOfBirth)==null?void 0:s.toDate)==null?void 0:a.call(s))??(i.dateOfBirth?new Date(i.dateOfBirth):null)}}),this._emit()}),this._unsubTrips=ur(vn(te,"families",e,"trips"),t=>{this.state.trips=t.docs.map(n=>{var s,a,l,u;const i=n.data();return{id:n.id,...i,start:i.start??"",end:i.end??"",createdAt:((a=(s=i.createdAt)==null?void 0:s.toDate)==null?void 0:a.call(s))??null,updatedAt:((u=(l=i.updatedAt)==null?void 0:l.toDate)==null?void 0:u.call(l))??null}}).sort((n,i)=>String(n.start).localeCompare(String(i.start))),this._emit()},t=>{console.warn("[Cairn] trips subscription error:",t.code,t.message)}),this._unsubEvents=ur(vn(te,"families",e,"familyEvents"),t=>{this.state.events=t.docs.map(n=>{var s,a,l,u;const i=n.data();return{id:n.id,...i,date:i.date??"",createdAt:((a=(s=i.createdAt)==null?void 0:s.toDate)==null?void 0:a.call(s))??null,updatedAt:((u=(l=i.updatedAt)==null?void 0:l.toDate)==null?void 0:u.call(l))??null}}),this._emit()},t=>{console.warn("[Cairn] familyEvents subscription error:",t.code,t.message)})}async saveTrip(e){var d;if(!te||!this._currentFamilyId)throw new Error("No family yet.");const t=(d=Re==null?void 0:Re.currentUser)==null?void 0:d.uid;if(!t)throw new Error("Not signed in.");const{id:n,createdAt:i,updatedAt:s,...a}=e,l={...a,updatedAt:lt()};return n?(await cr(He(te,"families",this._currentFamilyId,"trips",n),l),n):(l.createdBy=t,l.createdAt=lt(),(await Hu(vn(te,"families",this._currentFamilyId,"trips"),l)).id)}async deleteTrip(e){if(!te||!this._currentFamilyId)throw new Error("No family yet.");await qu(He(te,"families",this._currentFamilyId,"trips",e))}async saveEvent(e){var d;if(!te||!this._currentFamilyId)throw new Error("No family yet.");const t=(d=Re==null?void 0:Re.currentUser)==null?void 0:d.uid;if(!t)throw new Error("Not signed in.");const{id:n,createdAt:i,updatedAt:s,...a}=e,l={...a,updatedAt:lt()};return n?(await cr(He(te,"families",this._currentFamilyId,"familyEvents",n),l),n):(l.createdBy=t,l.createdAt=lt(),(await Hu(vn(te,"families",this._currentFamilyId,"familyEvents"),l)).id)}async deleteEvent(e){if(!te||!this._currentFamilyId)throw new Error("No family yet.");await qu(He(te,"families",this._currentFamilyId,"familyEvents",e))}async previewUrl(e){if(!e||typeof e!="string"||!/^https?:\/\//i.test(e.trim()))return null;if(!Yu)throw new Error("Firebase functions not configured.");return(await ew(Yu,"previewUrl")({url:e.trim()})).data}async updateChildBirthday(e,t){if(!te||!this._currentFamilyId)throw new Error("No family yet.");await cr(He(te,"families",this._currentFamilyId,"children",e),{dateOfBirth:t,updatedAt:lt()})}async findFamilyByCairnCode(e){if(!te)throw new Error("Firebase not configured.");const t=x0(vn(te,"families"),S0("cairnInviteCode","==",e)),n=await P0(t);if(n.empty)return null;const i=n.docs[0];return{id:i.id,...i.data()}}async joinFamilyAsCairn(e){var f,m,y;if(!te)throw new Error("Firebase not configured.");const t=(f=Re==null?void 0:Re.currentUser)==null?void 0:f.uid;if(!t)throw new Error("Not signed in.");const n=await this.findFamilyByCairnCode(e);if(!n){const A=new Error("Invite code not found.");throw A.code="not-found",A}const i=((y=(m=n.cairnInviteCodeExpiresAt)==null?void 0:m.toDate)==null?void 0:y.call(m))??(n.cairnInviteCodeExpiresAt?new Date(n.cairnInviteCodeExpiresAt):null);if(!i||i<new Date){const A=new Error("This invite code has expired.");throw A.code="expired",A}const s=n.cairnMemberIds??[];if(s.includes(t)||(n.memberIds??[]).includes(t)){const A=new Error("You're already in this family on Cairn.");throw A.code="already-member",A}const a=n.cairnMaxMembers??20;if(s.length>=a){const A=new Error("This family's Cairn ring is full.");throw A.code="full",A}const l=Re.currentUser,u=new Date,d={displayName:l.displayName??"",profilePhotoURL:l.photoURL??null,role:"member",joinedAt:u,updatedAt:u};return await cr(He(te,"families",n.id),{cairnMemberIds:[...s,t],[`memberProfiles.${t}`]:d,updatedAt:lt()}),await k0(He(te,"users",t),{email:l.email??"",displayName:l.displayName??"",profilePhotoURL:l.photoURL??null,cairnFamilyId:n.id,role:"member",notificationPreferences:{milestoneReminders:!0,tipNotifications:!0,schoolDeadlines:!0},createdAt:lt(),updatedAt:lt()},{merge:!0}),n.id}async regenerateCairnInviteCode(){if(!te||!this._currentFamilyId)throw new Error("No family yet.");const e=sw(),t=new Date(Date.now()+720*60*60*1e3);return await cr(He(te,"families",this._currentFamilyId),{cairnInviteCode:e,cairnInviteCodeExpiresAt:t,updatedAt:lt()}),{code:e,expiresAt:t}}stop(){var e,t,n,i,s;(e=this._unsubUser)==null||e.call(this),(t=this._unsubFamily)==null||t.call(this),(n=this._unsubChildren)==null||n.call(this),(i=this._unsubTrips)==null||i.call(this),(s=this._unsubEvents)==null||s.call(this),this._unsubUser=this._unsubFamily=this._unsubChildren=this._unsubTrips=this._unsubEvents=null,this._uid=null,this._currentFamilyId=null,this.state={user:null,family:null,children:[],trips:[],events:[]}}_emit(){this.dispatchEvent(new Event("change"))}}const de=new iw;function kf(r,e){if(r!=null&&r.photoURL)return r.photoURL;const t=e==null?void 0:e.profilePhotoURL;return typeof t=="string"&&/^https?:\/\//i.test(t)?t:null}function sw(){const r="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="CAIRN-";for(let t=0;t<4;t++)e+=r[Math.floor(Math.random()*r.length)];return e}function ow(r,e,t,n,i){const s=[];s.push({uid:r,displayName:(e==null?void 0:e.displayName)??(t==null?void 0:t.displayName)??"You",photoURL:kf(e,t),role:"self",circles:["immediate"],hue:198});const a=(n==null?void 0:n.memberProfiles)??{};for(const[u,d]of Object.entries(a)){if(u===r)continue;const f=d.profilePhotoURL;s.push({uid:u,displayName:d.displayName??"Co-parent",photoURL:typeof f=="string"&&/^https?:\/\//i.test(f)?f:null,role:"co-parent",circles:["immediate"],hue:8})}let l=142;for(const u of i??[]){const d=u.profilePhotoURL;s.push({uid:`child:${u.id}`,displayName:u.name,photoURL:typeof d=="string"&&/^https?:\/\//i.test(d)?d:null,role:"child",circles:["immediate"],hue:l,dateOfBirth:u.dateOfBirth}),l=(l+58)%360}return s}function aw(r){const e=[];for(const t of r??[])t.dateOfBirth&&e.push({id:`bday:${t.id}`,type:"birthday",date:t.dateOfBirth.toISOString().slice(0,10),personIds:[`child:${t.id}`],title:`${t.name}'s birthday`,_childId:t.id,_childName:t.name,recurring:!0});return e}function lw(r,e=new Date){if(!(r!=null&&r.date))return{date:null,yearsElapsed:0};const t=new Date(r.date);if(Number.isNaN(t.getTime()))return{date:null,yearsElapsed:0};if(!r.recurring)return{date:t,yearsElapsed:0};const n=new Date(e.getFullYear(),t.getMonth(),t.getDate()),i=n<new Date(e.getFullYear(),e.getMonth(),e.getDate())?new Date(e.getFullYear()+1,t.getMonth(),t.getDate()):n,s=i.getFullYear()-t.getFullYear();return{date:i,yearsElapsed:s}}const Qu=["linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)","linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)","linear-gradient(135deg, #3d9b8f 0%, #1f5c54 100%)","linear-gradient(135deg, #d4a843 0%, #c67b5c 55%, #c98a8a 100%)","linear-gradient(135deg, #8b7bb5 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #6b9ac4 0%, #3d9b8f 100%)"];function cw(r){if(r!=null&&r.coverGradient)return r.coverGradient;const e=((r==null?void 0:r.title)??(r==null?void 0:r.id)??"")+((r==null?void 0:r.location)??"");let t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return Qu[t%Qu.length]}class Ho extends ce{constructor(){super(),this.open=!1,this.trip=null,this.members=[],this.currentUid="",this.familyId="",this.busy=!1,this._draft=this._blankDraft(),this._error="",this._previewing=!1,this._previewError="",this._previewDebounce=null,this._lastPreviewedUrl=""}willUpdate(e){(e.has("trip")||e.has("open"))&&(this.open&&(this._draft=this._draftFromTrip(this.trip)),this._error="")}_blankDraft(){const e=new Date().toISOString().slice(0,10);return{id:null,title:"",location:"",start:e,end:e,visibility:"family",attendees:this.currentUid?[this.currentUid]:[],lodgingUrl:"",lodgingHost:"",lodgingTitle:"",notes:""}}_draftFromTrip(e){return e?{id:e.id??null,title:e.title??"",location:e.location??"",start:e.start??new Date().toISOString().slice(0,10),end:e.end??e.start??new Date().toISOString().slice(0,10),visibility:e.visibility??"family",attendees:Array.isArray(e.attendees)?[...e.attendees]:[],lodgingUrl:e.lodgingUrl??"",lodgingHost:e.lodgingHost??"",lodgingTitle:e.lodgingTitle??"",coverImage:e.coverImage??"",notes:e.notes??""}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_onLodgingChange(e){this._set("lodgingUrl",e),this._previewError="",this._previewDebounce&&clearTimeout(this._previewDebounce);const t=e.trim();if(!t){this._set("coverImage",""),this._set("lodgingHost",""),this._set("lodgingTitle",""),this._lastPreviewedUrl="";return}/^https?:\/\//i.test(t)&&t!==this._lastPreviewedUrl&&(this._previewDebounce=setTimeout(()=>this._runPreview(t),700))}async _runPreview(e){this._previewing=!0,this._previewError="";try{const t=await de.previewUrl(e);if(!t)return;this._lastPreviewedUrl=e,this._draft={...this._draft,coverImage:t.image??this._draft.coverImage,lodgingHost:t.siteName??t.host??this._draft.lodgingHost,lodgingTitle:t.title??this._draft.lodgingTitle}}catch(t){console.warn("Preview failed:",t),(t==null?void 0:t.code)==="functions/unauthenticated"?this._previewError="Preview unavailable — sign in.":(t==null?void 0:t.code)==="functions/invalid-argument"?this._previewError="That URL doesn’t look right.":this._previewError="Preview unavailable — paste it again or skip."}finally{this._previewing=!1}}_toggleAttendee(e){const n=this._draft.attendees.includes(e)?this._draft.attendees.filter(i=>i!==e):[...this._draft.attendees,e];this._set("attendees",n)}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give the trip a title.";return}if(!e.start||!e.end){this._error="Set both start and end dates.";return}if(e.end<e.start){this._error="End date can’t be before start date.";return}if(!this.familyId){this._error="You need to be in a family first.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,title:e.title.trim(),location:e.location.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this trip? This can’t be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return k``;const e=this._draft,t=!!e.id;return k`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>${t?"Edit trip":"New trip"}</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <div class="row-2">
            <div class="field">
              <label>Title</label>
              <input
                type="text"
                placeholder="e.g. Half-term in the Alps"
                .value=${e.title}
                @input=${n=>this._set("title",n.target.value)}
              />
            </div>
            <div class="field">
              <label>Location</label>
              <input
                type="text"
                placeholder="City, country"
                .value=${e.location}
                @input=${n=>this._set("location",n.target.value)}
              />
            </div>
          </div>

          <div class="row-dates">
            <div class="field">
              <label>Start</label>
              <input
                type="date"
                .value=${e.start}
                @input=${n=>this._set("start",n.target.value)}
              />
            </div>
            <div class="field">
              <label>End</label>
              <input
                type="date"
                .value=${e.end}
                @input=${n=>this._set("end",n.target.value)}
              />
            </div>
          </div>

          <div class="row-2">
            <div class="field">
              <label>Visibility</label>
              <div class="seg">
                ${["personal","family","extended"].map(n=>k`
                    <button
                      class=${e.visibility===n?"active":""}
                      @click=${()=>this._set("visibility",n)}
                    >
                      ${n==="personal"?"Just me":n==="family"?"Family":"Extended"}
                    </button>
                  `)}
              </div>
            </div>
            <div class="field">
              <label>Lodging URL</label>
              <input
                type="url"
                placeholder="airbnb.com/… or booking.com/…"
                .value=${e.lodgingUrl}
                @input=${n=>this._onLodgingChange(n.target.value)}
              />
              ${this._previewing?k`<div class="preview-loading">
                    <div class="spinner"></div>
                    Fetching preview…
                  </div>`:""}
              ${this._previewError?k`<div class="preview-error">${this._previewError}</div>`:""}
              ${!this._previewing&&e.coverImage?k`<div class="preview">
                    <div
                      class="thumb"
                      style="background-image:url(${e.coverImage});"
                    ></div>
                    <div class="meta">
                      <div class="meta-title">${e.lodgingTitle||e.lodgingUrl}</div>
                      <div class="meta-host">${e.lodgingHost||""}</div>
                    </div>
                  </div>`:""}
            </div>
          </div>

          <div class="field">
            <label>Who's going</label>
            <div class="attendees">
              ${this.members.map(n=>k`
                  <div
                    class="att-chip ${e.attendees.includes(n.uid)?"on":""}"
                    @click=${()=>this._toggleAttendee(n.uid)}
                  >
                    <member-chip
                      .name=${n.displayName}
                      .photo=${n.photoURL??""}
                      .hue=${n.hue}
                      size="22"
                    ></member-chip>
                    ${n.displayName}
                  </div>
                `)}
            </div>
          </div>

          <div class="field">
            <label>Notes</label>
            <textarea
              placeholder="Reservations, packing list, who's bringing what…"
              .value=${e.notes}
              @input=${n=>this._set("notes",n.target.value)}
            ></textarea>
          </div>

          ${this._error?k`<div class="error">${this._error}</div>`:""}

          <div class="actions">
            ${t?k`<button class="delete-btn" @click=${this._onDelete} ?disabled=${this.busy}>
                  Delete
                </button>`:""}
            <div class="spacer"></div>
            <glass-button variant="ghost" @click=${this._onCancel} ?disabled=${this.busy}>
              Cancel
            </glass-button>
            <glass-button variant="primary" @click=${this._onSave} ?disabled=${this.busy}>
              ${this.busy?"Saving…":t?"Save changes":"Create trip"}
            </glass-button>
          </div>
        </glass-panel>
      </div>
    `}}K(Ho,"properties",{open:{type:Boolean,reflect:!0},trip:{type:Object},members:{type:Array},currentUid:{type:String},familyId:{type:String},busy:{type:Boolean},_draft:{state:!0},_error:{state:!0},_previewing:{state:!0},_previewError:{state:!0}}),K(Ho,"styles",De`
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
  `);customElements.define("trip-form",Ho);class Go extends ce{constructor(){super(),this.open=!1,this.event=null,this.members=[],this.familyId="",this.busy=!1,this._draft=this._blankDraft(),this._error=""}willUpdate(e){(e.has("event")||e.has("open"))&&(this.open&&(this._draft=this._draftFromEvent(this.event)),this._error="")}_blankDraft(){return{id:null,type:"birthday",title:"",date:new Date().toISOString().slice(0,10),personIds:[],recurring:!0,subtitle:"",notes:"",visibility:"family"}}_draftFromEvent(e){return e?{id:e.id??null,type:e.type??"birthday",title:e.title??"",date:e.date??new Date().toISOString().slice(0,10),personIds:Array.isArray(e.personIds)?[...e.personIds]:[],recurring:e.recurring??!0,subtitle:e.subtitle??"",notes:e.notes??"",visibility:e.visibility??"family"}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_toggleType(e){this._set("type",e)}_togglePerson(e){const t=this._draft.personIds.includes(e);this._set("personIds",t?this._draft.personIds.filter(n=>n!==e):[...this._draft.personIds,e])}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give it a title.";return}if(!e.date){this._error="Pick a date.";return}if(!this.familyId){this._error="No family yet.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,title:e.title.trim(),subtitle:e.subtitle.trim(),notes:e.notes.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this event? This can't be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return k``;const e=this._draft,t=!!e.id;return k`
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
              ${[{v:"birthday",label:"Birthday"},{v:"anniversary",label:"Anniversary"},{v:"custom",label:"Other"}].map(n=>k`
                  <button
                    class=${e.type===n.v?"active":""}
                    @click=${()=>this._toggleType(n.v)}
                  >
                    ${n.label}
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
                @input=${n=>this._set("title",n.target.value)}
              />
            </div>
            <div class="field">
              <label>Date</label>
              <input
                type="date"
                .value=${e.date}
                @input=${n=>this._set("date",n.target.value)}
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

          ${this.members.length>0?k`
                <div class="field">
                  <label>Who is this about</label>
                  <div class="people">
                    ${this.members.map(n=>k`
                        <div
                          class="person-chip ${e.personIds.includes(n.uid)?"on":""}"
                          @click=${()=>this._togglePerson(n.uid)}
                        >
                          <member-chip
                            .name=${n.displayName}
                            .photo=${n.photoURL??""}
                            .hue=${n.hue}
                            size="22"
                          ></member-chip>
                          ${n.displayName}
                        </div>
                      `)}
                  </div>
                </div>
              `:""}

          <div class="row-2">
            <div class="field">
              <label>Visibility</label>
              <div class="seg">
                ${["personal","family","extended"].map(n=>k`
                    <button
                      class=${e.visibility===n?"active":""}
                      @click=${()=>this._set("visibility",n)}
                    >
                      ${n==="personal"?"Just me":n==="family"?"Family":"Extended"}
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
                @input=${n=>this._set("subtitle",n.target.value)}
              />
            </div>
          </div>

          <div class="field">
            <label>Notes</label>
            <textarea
              placeholder="Gift ideas, card text, who's bringing what…"
              .value=${e.notes}
              @input=${n=>this._set("notes",n.target.value)}
            ></textarea>
          </div>

          ${this._error?k`<div class="error">${this._error}</div>`:""}

          <div class="actions">
            ${t?k`<button class="delete-btn" @click=${this._onDelete} ?disabled=${this.busy}>
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
    `}_monthDay(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?"":t.toLocaleString("en-GB",{day:"numeric",month:"long"})}}K(Go,"properties",{open:{type:Boolean,reflect:!0},event:{type:Object},members:{type:Array},familyId:{type:String},busy:{type:Boolean},_draft:{state:!0},_error:{state:!0}}),K(Go,"styles",De`
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
  `);customElements.define("event-form",Go);let Kt=null,Ju=null;function uw(){return Kt||(Kt=document.createElement("div"),Kt.id="cairn-toast-host",Object.assign(Kt.style,{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",zIndex:9999,pointerEvents:"none"}),document.body.appendChild(Kt),Kt)}function se(r,{duration:e=2800}={}){const t=uw();clearTimeout(Ju),t.innerHTML="";const n=document.createElement("div");n.textContent=r,Object.assign(n.style,{padding:"12px 18px",background:"rgba(20, 12, 6, 0.78)",backdropFilter:"blur(24px) saturate(180%)",webkitBackdropFilter:"blur(24px) saturate(180%)",border:"1px solid rgba(255, 248, 235, 0.22)",borderRadius:"999px",color:"rgba(255, 248, 235, 0.96)",fontFamily:"'Inter', system-ui, sans-serif",fontSize:"13.5px",fontWeight:"500",letterSpacing:"0.005em",boxShadow:"0 12px 32px rgba(20, 12, 6, 0.45)",pointerEvents:"auto",transform:"translateY(8px)",opacity:"0",transition:"opacity 200ms ease, transform 240ms ease"}),t.appendChild(n),requestAnimationFrame(()=>{n.style.opacity="1",n.style.transform="translateY(0)"}),Ju=setTimeout(()=>{n.style.opacity="0",n.style.transform="translateY(8px)",setTimeout(()=>n.remove(),260)},e)}class Wo extends ce{constructor(){super(),this.open=!1,this.family=null,this.immediate=[],this.extended=[],this._busy=!1}_onCancel(){this.dispatchEvent(new Event("cancel"))}async _regenerate(){if(!this._busy){this._busy=!0;try{await de.regenerateCairnInviteCode(),se("New invite code generated.")}catch(e){console.error(e),se(`Couldn't generate code: ${e.code??e.message}`,{duration:5e3})}finally{this._busy=!1}}}_inviteLink(e){return`${window.location.origin}/cairn/?join=${e}`}async _copyLink(){var t;const e=(t=this.family)==null?void 0:t.cairnInviteCode;if(e)try{await navigator.clipboard.writeText(this._inviteLink(e)),se("Invite link copied to clipboard.")}catch{se("Could not copy — try long-press the link instead.")}}async _share(){var n,i;const e=(n=this.family)==null?void 0:n.cairnInviteCode;if(!e)return;const t=this._inviteLink(e);if(navigator.share)try{await navigator.share({title:"Join my family on Cairn",text:`Join ${((i=this.family)==null?void 0:i.name)??"our family"} on Cairn — our shared family calendar.`,url:t})}catch{}else this._copyLink()}_expiryText(e){if(!e)return"";const t=e.toDate?e.toDate():new Date(e),i=Math.max(0,Math.round((t-new Date)/(1440*60*1e3)));return i===0?"Expires today":i===1?"Expires tomorrow":`Expires in ${i} days`}render(){var i,s;if(!this.open)return k``;const e=(i=this.family)==null?void 0:i.cairnInviteCode,t=(s=this.family)==null?void 0:s.cairnInviteCodeExpiresAt,n=t&&(t.toDate?t.toDate():new Date(t))<new Date;return k`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Manage members</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <h3>Immediate family · ${this.immediate.length}</h3>
          ${this.immediate.length===0?k`<div class="empty">No one in immediate yet.</div>`:this.immediate.map(a=>k`
                  <div class="member-row">
                    <member-chip
                      .name=${a.displayName}
                      .photo=${a.photoURL??""}
                      .hue=${a.hue}
                      size="36"
                    ></member-chip>
                    <div class="body">
                      <div class="name">${a.displayName}</div>
                      <div class="role">
                        ${a.role==="self"?"You":a.role==="co-parent"?"Co-parent (PebblePath)":a.role==="child"?"Child":"Family"}
                      </div>
                    </div>
                  </div>
                `)}

          <h3>Extended family · ${this.extended.length}</h3>
          ${this.extended.length===0?k`<div class="empty">
                Anyone you invite via Cairn (grandparents, aunts, uncles, etc.) will appear here.
                They can see trips and celebrations but not PebblePath child data.
              </div>`:this.extended.map(a=>k`
                  <div class="member-row">
                    <member-chip
                      .name=${a.displayName}
                      .photo=${a.photoURL??""}
                      .hue=${a.hue}
                      size="36"
                    ></member-chip>
                    <div class="body">
                      <div class="name">${a.displayName}</div>
                      <div class="role">Cairn — extended</div>
                    </div>
                  </div>
                `)}

          <h3>Cairn invite code</h3>
          ${e&&!n?k`
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
              `:k`
                <div class="invite-empty">
                  ${n?"Your invite code has expired. Generate a new one to invite extended family.":"No invite code yet. Generate one to share Cairn with extended family."}
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
    `}}K(Wo,"properties",{open:{type:Boolean,reflect:!0},family:{type:Object},immediate:{type:Array},extended:{type:Array},_busy:{state:!0}}),K(Wo,"styles",De`
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
  `);customElements.define("manage-members-modal",Wo);class Ko extends ce{constructor(){super(),this.trip=null,this.members=[]}_fmtDates(e,t){const n=new Date(e),i=new Date(t),s=n.toLocaleString("en-GB",{month:"short"}),a=i.toLocaleString("en-GB",{month:"short"});return s===a&&n.getFullYear()===i.getFullYear()?`${n.getDate()}–${i.getDate()} ${s}`:`${n.getDate()} ${s} – ${i.getDate()} ${a}`}render(){const e=this.trip;if(!e)return k``;const t=e.coverImage?`background-image: url(${e.coverImage});`:`background: ${cw(e)};`,n=new Map(this.members.map(l=>[l.uid,l])),i=(e.attendees??[]).map(l=>n.get(l)).filter(Boolean),s=i.slice(0,4),a=Math.max(0,i.length-s.length);return k`
      <article
        tabindex="0"
        aria-label=${e.title}
        @click=${()=>this.dispatchEvent(new CustomEvent("edit-trip",{detail:e,bubbles:!0,composed:!0}))}
        @keydown=${l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.dispatchEvent(new CustomEvent("edit-trip",{detail:e,bubbles:!0,composed:!0})))}}
      >
        <div class="cover" style=${t}>
          <div class="visibility">${e.visibility??"family"}</div>
          <div class="dates">${this._fmtDates(e.start,e.end)}</div>
        </div>
        <div class="body">
          <h3>${e.title}</h3>
          <div class="location">${e.location||"—"}</div>
          ${e.lodgingUrl||e.lodgingHost?k`<div class="lodging">
                ${e.lodgingHost?k`<span class="pill">${e.lodgingHost}</span>`:""}
                <span>${e.lodgingTitle||e.lodgingUrl||""}</span>
              </div>`:""}
          <div class="attendees">
            ${s.map(l=>k`<member-chip name=${l.displayName} .hue=${l.hue} size="28"></member-chip>`)}
            ${a>0?k`<span class="more">+${a}</span>`:""}
          </div>
        </div>
      </article>
    `}}K(Ko,"properties",{trip:{type:Object},members:{type:Array}}),K(Ko,"styles",De`
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
  `);customElements.define("trip-card",Ko);class Yo extends ce{constructor(){super(),this.open=!1,this.trips=[],this.members=[]}_onCancel(){this.dispatchEvent(new Event("cancel"))}_groupByYear(e){const t=[...e].sort((s,a)=>String(s.start).localeCompare(String(a.start))),n=new Date;n.setHours(0,0,0,0);const i=new Map;for(const s of t){if(!s.start)continue;const a=new Date(s.start).getFullYear();i.has(a)||i.set(a,[]);const l=s.end?new Date(s.end)<n:!1;i.get(a).push({trip:s,isPast:l})}return i}render(){var i;if(!this.open)return k``;const e=this._groupByYear(this.trips??[]),t=((i=this.trips)==null?void 0:i.length)??0,n=new Date().getFullYear();return k`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>All trips<span class="count">${t} ${t===1?"trip":"trips"}</span></h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>
          ${t===0?k`<div class="empty">
                No trips for this circle yet.<br />
                Close this and tap <strong>+ New trip</strong> to add one.
              </div>`:Array.from(e.entries()).map(([s,a])=>k`
                  <div class="year ${s===n?"current":""}">
                    ${s}
                  </div>
                  <div class="grid">
                    ${a.map(({trip:l,isPast:u})=>k`
                        <div class=${u?"past":""}>
                          <trip-card .trip=${l} .members=${this.members}></trip-card>
                        </div>
                      `)}
                  </div>
                `)}
        </glass-panel>
      </div>
    `}}K(Yo,"properties",{open:{type:Boolean,reflect:!0},trips:{type:Array},members:{type:Array}}),K(Yo,"styles",De`
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
  `);customElements.define("all-trips-modal",Yo);class Df extends ce{render(){return k`
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
    `}}K(Df,"styles",De`
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
  `);customElements.define("discover-pebblepath",Df);class Qo extends ce{constructor(){super(),this.code="",this._family=null,this._loading=!0,this._joining=!1,this._error=""}willUpdate(e){e.has("code")&&this.code&&this._lookup()}async _lookup(){var e,t;this._loading=!0,this._error="";try{const n=await de.findFamilyByCairnCode(this.code);if(!n)this._error="Invite code not found. Check it was typed correctly.",this._family=null;else{const i=((t=(e=n.cairnInviteCodeExpiresAt)==null?void 0:e.toDate)==null?void 0:t.call(e))??(n.cairnInviteCodeExpiresAt?new Date(n.cairnInviteCodeExpiresAt):null);!i||i<new Date?(this._error="This invite code has expired. Ask the family for a fresh one.",this._family=null):this._family=n}}catch(n){console.error(n),this._error=(n==null?void 0:n.message)??"Couldn't look up the invite."}finally{this._loading=!1}}async _join(){var e;if(!this._joining){this._joining=!0,this._error="";try{const t=await de.joinFamilyAsCairn(this.code);se(`Welcome to ${((e=this._family)==null?void 0:e.name)??"the family"}.`),this.dispatchEvent(new CustomEvent("joined",{detail:{familyId:t}}))}catch(t){console.error(t),this._error=(t==null?void 0:t.message)??"Could not join."}finally{this._joining=!1}}}_cancel(){this.dispatchEvent(new Event("cancel"))}_inviterFromFamily(e){var i;if(!e)return null;const t=(i=e.memberProfiles)==null?void 0:i[e.createdBy];if(!t)return null;const n=t.profilePhotoURL;return{displayName:t.displayName??"A family member",photoURL:typeof n=="string"&&/^https?:\/\//i.test(n)?n:null}}render(){var i,s,a;const e=this._inviterFromFamily(this._family),t=(((i=this._family)==null?void 0:i.cairnMemberIds)??((s=this._family)==null?void 0:s.memberIds)??[]).length,n=(((a=this._family)==null?void 0:a.memberIds)??[]).length;return k`
      <div class="wrap">
        <div class="mark">
          <cairn-mark size="44"></cairn-mark>
          <div class="mark-name">Cairn</div>
        </div>
        <glass-panel padding="lg" variant="strong" lifted>
          ${this._loading?k`<div class="loading">Looking up <code>${this.code}</code>…</div>`:this._family?k`
                <h1>You're invited.</h1>
                <div class="preview">
                  ${e?k`
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
                    ${t} ${t===1?"person":"people"} on Cairn${n&&n<t?` · ${n} on PebblePath`:""}
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
                ${this._error?k`<div class="error">${this._error}</div>`:""}
              `:k`
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
    `}}K(Qo,"properties",{code:{type:String},_family:{state:!0},_loading:{state:!0},_joining:{state:!0},_error:{state:!0}}),K(Qo,"styles",De`
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
  `);customElements.define("join-family-screen",Qo);class Jo extends ce{constructor(){super(),this.error="",this.busy=!1,this.joinCode=""}async _handleSignIn(){if(!this.busy){this.busy=!0,this.error="";try{await tw()}catch(e){this.error=(e==null?void 0:e.message)??"Sign-in failed."}finally{this.busy=!1}}}_renderGoogleIcon(){return k`
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
    `}render(){return k`
      <div class="wrap">
        <div class="brand">
          <div class="mark-row">
            <cairn-mark size="52"></cairn-mark>
            <div class="mark-name">Cairn</div>
          </div>
          <div class="companion">PebblePath companion</div>
        </div>
        <glass-panel padding="lg" lifted variant="strong">
          ${this.joinCode?k`<div class="invite-banner">
                <strong>You've been invited to a family on Cairn.</strong><br />
                Sign in to continue — we'll show you the family next.
                <br /><code>${this.joinCode}</code>
              </div>`:""}
          <h1>${this.joinCode?"Almost there.":"for every shared path."}</h1>
          <p class="lede">
            ${this.joinCode?"Sign in with the Google account you use with your family. You'll see a preview before joining.":"One quiet place for trips, birthdays, and anniversaries — across your immediate and extended family."}
          </p>
          <div class="actions">
            <button
              class="google-btn"
              ?disabled=${this.busy||!un}
              @click=${this._handleSignIn}
            >
              ${this._renderGoogleIcon()}
              ${this.busy?"Signing in…":"Continue with Google"}
            </button>
          </div>
          ${un?"":k`<div class="config-hint">
                Sign-in is awaiting your Firebase config — copy
                <code>.env.example</code> to <code>.env</code> and fill in the web-app
                values from PebblePath's Firebase Console.
              </div>`}
          ${this.error?k`<div class="error">${this.error}</div>`:""}
        </glass-panel>
        <div class="footnote">A private space for your family</div>
      </div>
    `}}K(Jo,"properties",{error:{state:!0},busy:{state:!0},joinCode:{type:String}}),K(Jo,"styles",De`
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
    .mark-name {
      font-family: var(--font-pebble);
      font-weight: 400;
      font-size: 44px;
      letter-spacing: 0.04em;
      line-height: 1;
      text-shadow: 0 2px 14px rgba(0, 0, 0, 0.25);
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
  `);customElements.define("sign-in-screen",Jo);const An=class An extends ce{constructor(){super(),this.value="family"}_select(e){e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent("circle-change",{detail:{value:e},bubbles:!0,composed:!0})))}render(){return k`
      <div class="track" role="tablist" aria-label="Circle">
        ${An.OPTIONS.map(e=>k`
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
    `}};K(An,"properties",{value:{type:String,reflect:!0}}),K(An,"OPTIONS",[{value:"personal",label:"Just me"},{value:"family",label:"Family"},{value:"extended",label:"Extended"}]),K(An,"styles",De`
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
  `);let Xo=An;customElements.define("circle-switcher",Xo);class Zo extends ce{constructor(){super(),this.event=null,this.members=[]}_icon(e){return e==="birthday"?"🎂":e==="anniversary"?"💕":"✨"}_fmtDate(e){const t=new Date(e);return{day:t.getDate(),month:t.toLocaleString("en-GB",{month:"short"})}}render(){const e=this.event;if(!e)return k``;const t=this._fmtDate(e.date);return k`
      <div
        class="row"
        @click=${()=>this.dispatchEvent(new CustomEvent("edit-event",{detail:e,bubbles:!0,composed:!0}))}
      >
        <div class="icon ${e.type}">${this._icon(e.type)}</div>
        <div class="body">
          <div class="title">${e.title}</div>
          ${e.subtitle?k`<div class="meta">${e.subtitle}</div>`:""}
        </div>
        <div class="date">
          ${t.day}
          <small>${t.month}</small>
        </div>
      </div>
    `}}K(Zo,"properties",{event:{type:Object},members:{type:Array}}),K(Zo,"styles",De`
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
  `);customElements.define("event-row",Zo);const hw={uid:"preview-user",displayName:"Thomas Paris",email:"thomas@example.com",photoURL:null},Xu=[{uid:"thomas",displayName:"Thomas",circles:["immediate"],hue:198},{uid:"partner",displayName:"Élise",circles:["immediate"],hue:8},{uid:"kid1",displayName:"Oscar",circles:["immediate"],hue:142},{uid:"kid2",displayName:"Mila",circles:["immediate"],hue:44},{uid:"mum",displayName:"Mum",circles:["extended"],hue:320},{uid:"dad",displayName:"Dad",circles:["extended"],hue:28},{uid:"sister",displayName:"Camille",circles:["extended"],hue:280},{uid:"bro-in-law",displayName:"Sam",circles:["extended"],hue:175},{uid:"niece",displayName:"Léa",circles:["extended"],hue:100}],dw=[{id:"t1",title:"Côte d’Azur, summer",location:"Antibes, France",start:"2026-07-12",end:"2026-07-21",coverGradient:"linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)",lodgingHost:"Airbnb",lodgingTitle:"Villa near Cap d’Antibes",attendees:["thomas","partner","kid1","kid2","mum","dad"],notes:"Mum + Dad arrive day 2. Dinner reservations at La Guérite booked.",visibility:"extended"},{id:"t2",title:"Half-term in the Alps",location:"Chamonix, France",start:"2026-10-24",end:"2026-10-31",coverGradient:"linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)",lodgingHost:"Booking.com",lodgingTitle:"Chalet Les Drus",attendees:["thomas","partner","kid1","kid2"],notes:"Need ski school for the kids — book by September.",visibility:"immediate"},{id:"t3",title:"Camille’s 40th",location:"Lisbon, Portugal",start:"2026-09-05",end:"2026-09-08",coverGradient:"linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)",lodgingHost:"Airbnb",lodgingTitle:"Alfama rooftop apartment",attendees:["thomas","partner","sister","bro-in-law"],notes:"Surprise. Don’t mention to Camille.",visibility:"family"}],fw=[{id:"e1",type:"birthday",date:"2026-05-24",personIds:["mum"],title:"Mum’s birthday"},{id:"e2",type:"anniversary",date:"2026-05-28",personIds:["mum","dad"],title:"Mum & Dad’s anniversary",subtitle:"38 years"},{id:"e3",type:"birthday",date:"2026-06-11",personIds:["kid1"],title:"Oscar turns 7"},{id:"e4",type:"birthday",date:"2026-06-30",personIds:["niece"],title:"Léa’s birthday"}];class ea extends ce{constructor(){super(),this.user=hw,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this.preview=!1,this.circle="family",this._formOpen=!1,this._formTrip=null,this._formBusy=!1,this._membersOpen=!1,this._eventFormOpen=!1,this._eventFormEvent=null,this._eventFormBusy=!1,this._allTripsOpen=!1;const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1)}_liveImmediate(){var e;return this.preview||!((e=this.user)!=null&&e.uid)?Xu.filter(t=>t.circles.includes("immediate")):ow(this.user.uid,this.user,this.pebbleUser,this.family,this.children)}_liveExtended(){return this.preview?Xu.filter(e=>e.circles.includes("extended")):[]}_liveTrips(){return this.preview?dw:this.trips??[]}_liveEvents(){if(this.preview)return fw;const e=aw(this.children),t=(this.events??[]).map(n=>{const{date:i,yearsElapsed:s}=lw(n);return{...n,date:i?i.toISOString().slice(0,10):n.date,_yearsElapsed:s,_originalDate:n.date}});return[...e,...t].sort((n,i)=>String(n.date).localeCompare(String(i.date)))}_filteredMembers(){const e=this._liveImmediate(),t=this._liveExtended();return this.circle==="personal"?e.filter(n=>{var i;return n.uid===((i=this.user)==null?void 0:i.uid)}):this.circle==="family"?e:[...e,...t]}_circleTrips(){var n;const e=this._liveTrips(),t=((n=this.user)==null?void 0:n.uid)??"thomas";return this.circle==="personal"?e.filter(i=>{var s;return(s=i.attendees)==null?void 0:s.includes(t)}):this.circle==="family"?e.filter(i=>i.visibility!=="extended"):e}_filteredTrips(){const e=new Date;return e.setHours(0,0,0,0),this._circleTrips().filter(t=>t.end?new Date(t.end)>=e:!0)}_filteredEvents(){const e=new Set(this._filteredMembers().map(t=>t.uid));return this._liveEvents().filter(t=>t.personIds.some(n=>e.has(n)))}_smartCallout(){var l,u;const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=1440*60*1e3,i=d=>Math.round((d-t)/n);for(const d of this._circleTrips()){if(!d.start||!d.end)continue;const f=new Date(d.start),m=new Date(d.end);if(f.setHours(0,0,0,0),m.setHours(0,0,0,0),f<=t&&t<=m){const y=i(f)+1,A=i(m)-i(f)+1,S=((l=d.location)==null?void 0:l.trim())||d.title;return`Day ${y} of ${A} in ${S}.`}}let s=null,a=1/0;for(const d of this._circleTrips()){if(!d.start)continue;const f=new Date(d.start);f.setHours(0,0,0,0);const m=i(f);m>0&&m<a&&(s={kind:"trip",item:d},a=m)}for(const d of this._filteredEvents()){if(!d.date)continue;const f=new Date(d.date);f.setHours(0,0,0,0);const m=i(f);m>=0&&m<a&&(s={kind:"event",item:d},a=m)}if(!s)return null;if(s.kind==="trip"){const d=((u=s.item.location)==null?void 0:u.trim())||s.item.title;return a===1?`${d} starts tomorrow.`:a<=14?`${d} in ${a} days.`:a<=60?`Next trip: ${d} in ${a} days.`:null}return a===0?`${s.item.title} — today.`:a===1?`${s.item.title} — tomorrow.`:a<=7?`${s.item.title} in ${a} days.`:null}_tripDensityByDay(e){const t=new Map;for(const n of this._filteredTrips()){if(!n.start||!n.end)continue;const i=new Date(n.start),s=new Date(n.end);if(Number.isNaN(i.getTime())||Number.isNaN(s.getTime())||i.getFullYear()>e||s.getFullYear()<e)continue;const a=new Date(Math.max(i,new Date(e,0,1))),l=new Date(Math.min(s,new Date(e,11,31)));for(;a<=l;){const u=`${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;t.set(u,Math.min(1,(t.get(u)??0)+.5)),a.setDate(a.getDate()+1)}}return t}_shiftMonth(e){const t=this._displayMonth;this._displayMonth=new Date(t.getFullYear(),t.getMonth()+e,1)}_jumpToMonth(e,t){this._displayMonth=new Date(e,t,1)}_resetToToday(){const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1)}_renderMonthly(){const e=new Date,t=this._displayMonth??e,n=t.getFullYear(),i=t.getMonth(),a=(new Date(n,i,1).getDay()+6)%7,l=new Date(n,i+1,0).getDate(),u=this._filteredEvents().map(S=>new Date(S.date)).filter(S=>S.getFullYear()===n&&S.getMonth()===i).map(S=>S.getDate()),d=new Set;for(const S of this._filteredTrips()){if(!S.start||!S.end)continue;const D=new Date(S.start),P=new Date(S.end);if(Number.isNaN(D.getTime())||Number.isNaN(P.getTime())||D.getFullYear()>n||P.getFullYear()<n||D.getMonth()>i&&P.getMonth()>i||D.getMonth()<i&&P.getMonth()<i)continue;const j=D.getMonth()===i?D.getDate():1,F=P.getMonth()===i?P.getDate():l;for(let q=j;q<=F;q++)d.add(q)}const f=[];for(let S=0;S<a;S++)f.push(k`<div class="cal-cell empty"></div>`);const m=e.getFullYear()===n&&e.getMonth()===i;for(let S=1;S<=l;S++){const D=m&&S===e.getDate(),P=u.includes(S),j=d.has(S),F=["cal-cell",D?"today":"",P?"has-event":"",j?"has-trip":""].filter(Boolean).join(" ");f.push(k`<div class=${F}>${S}</div>`)}const y=new Date(n,i,1).toLocaleString("en-GB",{month:"long",year:"numeric"});return k`
      <div class="cal-head">
        <h3>${y}</h3>
        <div class="nav">
          ${!m?k`<button
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
        ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(S=>k`<div class="cal-dow">${S}</div>`)}
        ${f}
      </div>
    `}_openCreate(){if(this.preview){se("Sign in to create real trips.");return}if(!de.familyId){se("You need a PebblePath family first.");return}this._formTrip=null,this._formOpen=!0}_openEdit(e){if(this.preview){se("Sign in to edit real trips.");return}this._formTrip=e,this._formOpen=!0}async _onSaveTrip(e){const t=e.detail;this._formBusy=!0;try{await de.saveTrip(t),this._formOpen=!1,this._formTrip=null,se(t.id?"Trip updated.":"Trip created.")}catch(n){console.error("Save trip failed:",n),se(`Couldn't save: ${n.code??n.message}`,{duration:5e3})}finally{this._formBusy=!1}}async _onDeleteTrip(e){this._formBusy=!0;try{await de.deleteTrip(e.detail.id),this._formOpen=!1,this._formTrip=null,se("Trip deleted.")}catch(t){console.error("Delete trip failed:",t),se(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._formBusy=!1}}_openCreateEvent(){if(this.preview){se("Sign in to add real events.");return}if(!de.familyId){se("You need a family first.");return}this._eventFormEvent=null,this._eventFormOpen=!0}_openEditEvent(e){if(this.preview){se("Sign in to edit real events.");return}if(e!=null&&e._childId){const t=prompt(`Edit ${e._childName}'s birthday (YYYY-MM-DD):`,e.date);if(!t)return;if(!/^\d{4}-\d{2}-\d{2}$/.test(t)){se("Use YYYY-MM-DD format.");return}de.updateChildBirthday(e._childId,new Date(t)).then(()=>se(`Updated ${e._childName}'s birthday.`)).catch(n=>{console.error("Update child birthday failed:",n),se(`Couldn't update: ${n.code??n.message}`,{duration:5e3})});return}this._eventFormEvent={...e,date:e._originalDate??e.date},this._eventFormOpen=!0}async _onSaveEvent(e){this._eventFormBusy=!0;try{await de.saveEvent(e.detail),this._eventFormOpen=!1,this._eventFormEvent=null,se(e.detail.id?"Event updated.":"Event added.")}catch(t){console.error("Save event failed:",t),se(`Couldn't save: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}async _onDeleteEvent(e){this._eventFormBusy=!0;try{await de.deleteEvent(e.detail.id),this._eventFormOpen=!1,this._eventFormEvent=null,se("Event deleted.")}catch(t){console.error("Delete event failed:",t),se(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}render(){var d,f,m,y,A,S,D,P,j,F,q;const e=this._filteredTrips(),t=this._filteredEvents(),n=this._liveImmediate(),i=this._liveExtended(),s=n.concat(i),a=(((d=this.user)==null?void 0:d.displayName)??"there").split(" ")[0],l=new Date,u=t.filter(M=>{const me=new Date(M.date);return me.getFullYear()===l.getFullYear()&&me.getMonth()===l.getMonth()});return k`
      <div class="topbar">
        <div class="brand">
          <cairn-mark size="38"></cairn-mark>
          <div class="brand-name">Cairn</div>
        </div>
        <circle-switcher
          .value=${this.circle}
          @circle-change=${M=>this.circle=M.detail.value}
        ></circle-switcher>
        <div class="who">
          <span class="label">${((f=this.user)==null?void 0:f.displayName)??""}</span>
          <member-chip
            .name=${((m=this.user)==null?void 0:m.displayName)??"You"}
            .photo=${((y=this.user)==null?void 0:y.photoURL)??""}
            .hue=${198}
            size="32"
          ></member-chip>
          ${this.preview?"":k`<button class="signout" @click=${()=>nw()} title="Sign out">
                Sign out
              </button>`}
        </div>
      </div>

      ${this.preview?k`<div class="preview-banner">
            <strong>Preview mode</strong> — viewing the dashboard with placeholder
            data. <a href="?">Back to sign-in</a>.
          </div>`:""}

      <main>
        <div class="hello">
          <div>
            <h1>Hi ${a}.</h1>
            ${(()=>{const M=this._smartCallout();return M?k`<div class="smart">${M}</div>`:""})()}
            <div class="stat">
              <span>${e.length}</span> trip${e.length===1?"":"s"} ahead ·
              <span>${u.length}</span> celebration${u.length===1?"":"s"} this month
            </div>
            ${(A=this.family)!=null&&A.name?k`<div class="family-name">${this.family.name}</div>`:""}
          </div>
        </div>

        <section>
          <div class="section-head">
            <h2>Coming up</h2>
            ${this._circleTrips().length>0?k`<button class="link" @click=${()=>this._allTripsOpen=!0}>
                  All trips →
                </button>`:""}
          </div>
          ${e.length===0?k`
                <glass-panel padding="lg" variant="strong">
                  <div style="text-align:center;color:var(--text-secondary);padding:14px 0;font-size:14.5px;line-height:1.5;">
                    No trips yet for this circle.<br />
                    <button
                      style="margin-top:10px;background:transparent;border:none;color:var(--terracotta);cursor:pointer;font:inherit;text-decoration:underline;text-underline-offset:3px;"
                      @click=${()=>this._openCreate()}
                    >
                      Plan your first trip
                    </button>
                  </div>
                </glass-panel>
              `:k`
                <div class="trips-row">
                  ${e.map(M=>k`<trip-card
                      .trip=${M}
                      .members=${s}
                      @edit-trip=${me=>this._openEdit(me.detail)}
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
                <h3>${((S=this._displayMonth)==null?void 0:S.getFullYear())??l.getFullYear()}</h3>
                <div style="font-size:12px;color:var(--text-tertiary);">Yearly</div>
              </div>
              <yearly-view
                .year=${((D=this._displayMonth)==null?void 0:D.getFullYear())??l.getFullYear()}
                .tripDays=${this._tripDensityByDay(((P=this._displayMonth)==null?void 0:P.getFullYear())??l.getFullYear())}
                .events=${this._liveEvents()}
                .today=${l}
                @month-select=${M=>this._jumpToMonth(M.detail.year,M.detail.month)}
              ></yearly-view>
            </glass-panel>
          </div>
        </section>

        <section>
          <div class="section-head">
            <h2>Celebrations</h2>
            <button class="link" @click=${()=>this._openCreateEvent()}>+ Add event</button>
          </div>
          <glass-panel padding="md" variant="strong">
            ${t.length===0?k`<div style="color:var(--text-tertiary);padding:18px 4px;font-size:13.5px;">
                  No birthdays or anniversaries yet.
                  <button
                    style="background:transparent;border:none;color:var(--terracotta);cursor:pointer;font:inherit;text-decoration:underline;text-underline-offset:3px;margin-left:4px;"
                    @click=${()=>this._openCreateEvent()}
                  >
                    Add one
                  </button>
                </div>`:t.map(M=>k`<event-row
                    .event=${M}
                    .members=${s}
                    @edit-event=${me=>this._openEditEvent(me.detail)}
                  ></event-row>`)}
          </glass-panel>
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
                  <span class="count">${n.length} ${n.length===1?"person":"people"}</span>
                </div>
                <button class="invite-btn" @click=${()=>this._membersOpen=!0}>
                  Manage
                </button>
              </div>
              <div class="members-row">
                ${n.map(M=>k`
                    <div class="member-tile">
                      <member-chip
                        .name=${M.displayName}
                        .photo=${M.photoURL??""}
                        .hue=${M.hue}
                        size="24"
                      ></member-chip>
                      ${M.displayName}
                    </div>
                  `)}
              </div>
            </div>
            <div class="circle-block">
              <div class="circle-head">
                <div>
                  <span class="name">Extended family</span>
                  <span class="count">${i.length} ${i.length===1?"person":"people"}</span>
                </div>
                <button class="invite-btn" @click=${()=>this._membersOpen=!0}>
                  + Invite
                </button>
              </div>
              ${i.length===0?k`<div class="empty-extended">
                    No one yet —
                    <button @click=${()=>this._membersOpen=!0}>
                      invite the grandparents
                    </button>
                  </div>`:k`<div class="members-row">
                    ${i.map(M=>k`
                        <div class="member-tile">
                          <member-chip
                            .name=${M.displayName}
                            .photo=${M.photoURL??""}
                            .hue=${M.hue}
                            size="24"
                          ></member-chip>
                          ${M.displayName}
                        </div>
                      `)}
                  </div>`}
            </div>
          </glass-panel>
        </section>

        <discover-pebblepath></discover-pebblepath>
      </main>

      <div class="fab">
        <glass-button variant="primary" size="lg" @click=${()=>this._openCreate()}>
          + New trip
        </glass-button>
      </div>

      <trip-form
        ?open=${this._formOpen}
        .trip=${this._formTrip}
        .members=${n}
        .currentUid=${((j=this.user)==null?void 0:j.uid)??""}
        .familyId=${((F=this.family)==null?void 0:F.id)??""}
        .busy=${this._formBusy}
        @save=${this._onSaveTrip}
        @remove=${this._onDeleteTrip}
        @cancel=${()=>{this._formOpen=!1,this._formTrip=null}}
      ></trip-form>

      <manage-members-modal
        ?open=${this._membersOpen}
        .family=${this.family}
        .immediate=${n}
        .extended=${i}
        @cancel=${()=>this._membersOpen=!1}
      ></manage-members-modal>

      <event-form
        ?open=${this._eventFormOpen}
        .event=${this._eventFormEvent}
        .members=${s}
        .familyId=${((q=this.family)==null?void 0:q.id)??""}
        .busy=${this._eventFormBusy}
        @save=${this._onSaveEvent}
        @remove=${this._onDeleteEvent}
        @cancel=${()=>{this._eventFormOpen=!1,this._eventFormEvent=null}}
      ></event-form>

      <all-trips-modal
        ?open=${this._allTripsOpen}
        .trips=${this._circleTrips()}
        .members=${s}
        @edit-trip=${M=>{this._allTripsOpen=!1,this._openEdit(M.detail)}}
        @cancel=${()=>this._allTripsOpen=!1}
      ></all-trips-modal>
    `}}K(ea,"properties",{user:{type:Object},pebbleUser:{type:Object},family:{type:Object},children:{type:Array},trips:{type:Array},events:{type:Array},preview:{type:Boolean},circle:{state:!0},_formOpen:{state:!0},_formTrip:{state:!0},_formBusy:{state:!0},_membersOpen:{state:!0},_eventFormOpen:{state:!0},_eventFormEvent:{state:!0},_eventFormBusy:{state:!0},_displayMonth:{state:!0},_allTripsOpen:{state:!0}}),K(ea,"styles",De`
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
      column-gap: 16px;
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
    @media (max-width: 768px) {
      .topbar {
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto;
        height: auto;
        padding: 10px 20px;
        row-gap: 10px;
      }
      .topbar .brand {
        grid-column: 1;
        grid-row: 1;
      }
      .topbar .who {
        grid-column: 2;
        grid-row: 1;
      }
      .topbar circle-switcher {
        grid-column: 1 / -1;
        grid-row: 2;
        justify-self: center;
      }
      .topbar .who .label {
        display: none;
      }
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .brand-name {
      font-family: var(--font-pebble);
      font-weight: 400;
      font-size: 24px;
      letter-spacing: 0.04em;
      line-height: 1;
      transform: translateY(2px);
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.22);
    }
    .who {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .who .label {
      font-size: 13px;
      color: var(--text-secondary);
      max-width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .signout {
      background: transparent;
      border: 1px solid var(--glass-border);
      color: var(--text-tertiary);
      font: inherit;
      font-size: 12px;
      padding: 6px 12px;
      border-radius: var(--radius-pill);
      cursor: pointer;
      transition: color 200ms ease, border-color 200ms ease;
    }
    .signout:hover {
      color: var(--text-primary);
      border-color: var(--glass-border-strong);
    }
    @media (max-width: 768px) {
      .signout {
        padding: 6px 10px;
        font-size: 11.5px;
      }
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
      padding: 32px 24px 120px;
      max-width: 1280px;
      margin: 0 auto;
    }
    @media (max-width: 768px) {
      main {
        padding: 20px 16px calc(110px + env(safe-area-inset-bottom));
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
      background: var(--gradient-warmsun);
      color: var(--charcoal);
      font-weight: 700;
      border-color: rgba(255, 248, 235, 0.5);
    }
    .cal-cell.has-event {
      background: rgba(212, 168, 67, 0.12);
      border-color: rgba(212, 168, 67, 0.3);
      color: var(--text-primary);
    }
    .cal-cell.has-trip {
      background: rgba(61, 155, 143, 0.18);
      border-color: rgba(61, 155, 143, 0.35);
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

    .fab {
      position: fixed;
      bottom: calc(24px + env(safe-area-inset-bottom));
      right: calc(24px + env(safe-area-inset-right));
      z-index: 20;
    }
    @media (max-width: 480px) {
      .fab {
        bottom: calc(16px + env(safe-area-inset-bottom));
        right: 16px;
      }
    }
  `);customElements.define("home-screen",ea);const ao="cairn:pendingJoinCode";class Nf extends ce{constructor(){super(),this.authUser=null,this.loading=!0;const e=new URLSearchParams(window.location.search);this.preview=e.has("preview");const t=e.get("join");if(t)try{localStorage.setItem(ao,t)}catch{}let n=null;try{n=localStorage.getItem(ao)}catch{}this.joinCode=t??n??null,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this._unsubAuth=null,this._onDataChange=()=>{this.pebbleUser=de.state.user,this.family=de.state.family,this.children=de.state.children,this.trips=de.state.trips,this.events=de.state.events}}_clearJoinState(){this.joinCode=null;try{localStorage.removeItem(ao)}catch{}const e=new URL(window.location.href);e.searchParams.delete("join"),window.history.replaceState({},"",e.toString())}connectedCallback(){if(super.connectedCallback(),this.preview){this.loading=!1;return}de.addEventListener("change",this._onDataChange),this._unsubAuth=rw(e=>{this.authUser=e,this.loading=!1,e?de.start(e.uid):de.stop()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubAuth)==null||e.call(this),de.removeEventListener("change",this._onDataChange)}_composeViewer(){var t,n;const e=this.authUser;return{uid:e.uid,displayName:e.displayName??((t=this.pebbleUser)==null?void 0:t.displayName)??"You",email:e.email??((n=this.pebbleUser)==null?void 0:n.email)??"",photoURL:kf(e,this.pebbleUser)}}render(){return this.loading?k``:this.preview?k`<home-screen preview></home-screen>`:this.authUser?this.joinCode?k`
        <join-family-screen
          .code=${this.joinCode}
          @joined=${()=>this._clearJoinState()}
          @cancel=${()=>this._clearJoinState()}
        ></join-family-screen>
      `:k`
      <home-screen
        .user=${this._composeViewer()}
        .pebbleUser=${this.pebbleUser}
        .family=${this.family}
        .children=${this.children}
        .trips=${this.trips}
        .events=${this.events}
      ></home-screen>
    `:k`
        <sign-in-screen
          .joinCode=${this.joinCode??""}
        ></sign-in-screen>
      `}}K(Nf,"properties",{authUser:{state:!0},loading:{state:!0},preview:{state:!0},joinCode:{state:!0},pebbleUser:{state:!0},family:{state:!0},children:{state:!0},trips:{state:!0},events:{state:!0}});customElements.define("cairn-app",Nf);
//# sourceMappingURL=index-BeAuhUDv.js.map
