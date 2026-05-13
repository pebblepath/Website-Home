var Pf=Object.defineProperty;var Df=(r,e,t)=>e in r?Pf(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var H=(r,e,t)=>Df(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=globalThis,ua=vi.ShadowRoot&&(vi.ShadyCSS===void 0||vi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ha=Symbol(),dc=new WeakMap;let oh=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ha)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ua&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=dc.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&dc.set(t,e))}return e}toString(){return this.cssText}};const Nf=r=>new oh(typeof r=="string"?r:r+"",void 0,ha),ve=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,i,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new oh(t,r,ha)},Vf=(r,e)=>{if(ua)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),i=vi.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},pc=ua?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Nf(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Of,defineProperty:$f,getOwnPropertyDescriptor:Mf,getOwnPropertyNames:Lf,getOwnPropertySymbols:Ff,getPrototypeOf:Uf}=Object,St=globalThis,fc=St.trustedTypes,zf=fc?fc.emptyScript:"",Ys=St.reactiveElementPolyfillSupport,mr=(r,e)=>r,ho={toAttribute(r,e){switch(e){case Boolean:r=r?zf:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ah=(r,e)=>!Of(r,e),mc={attribute:!0,type:String,converter:ho,reflect:!1,useDefault:!1,hasChanged:ah};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),St.litPropertyMetadata??(St.litPropertyMetadata=new WeakMap);let wn=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=mc){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&$f(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:s}=Mf(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:i,set(a){const l=i==null?void 0:i.call(this);s==null||s.call(this,a),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??mc}static _$Ei(){if(this.hasOwnProperty(mr("elementProperties")))return;const e=Uf(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(mr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mr("properties"))){const t=this.properties,n=[...Lf(t),...Ff(t)];for(const i of n)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(pc(i))}else e!==void 0&&t.push(pc(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vf(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var s;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const a=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:ho).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){var s,a;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=n.getPropertyOptions(i),u=typeof l.converter=="function"?{fromAttribute:l.converter}:((s=l.converter)==null?void 0:s.fromAttribute)!==void 0?l.converter:ho;this._$Em=i;const h=u.fromAttribute(t,l.type);this[i]=h??((a=this._$Ej)==null?void 0:a.get(i))??h,this._$Em=null}}requestUpdate(e,t,n,i=!1,s){var a;if(e!==void 0){const l=this.constructor;if(i===!1&&(s=this[e]),n??(n=l.getPropertyOptions(e)),!((n.hasChanged??ah)(s,t)||n.useDefault&&n.reflect&&s===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:s},a){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),s!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,a]of i){const{wrapped:l}=a,u=this[s];l!==!0||this._$AL.has(s)||u===void 0||this.C(s,void 0,a,u)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};wn.elementStyles=[],wn.shadowRootOptions={mode:"open"},wn[mr("elementProperties")]=new Map,wn[mr("finalized")]=new Map,Ys==null||Ys({ReactiveElement:wn}),(St.reactiveElementVersions??(St.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr=globalThis,gc=r=>r,Pi=gr.trustedTypes,yc=Pi?Pi.createPolicy("lit-html",{createHTML:r=>r}):void 0,lh="$lit$",Et=`lit$${Math.random().toFixed(9).slice(2)}$`,ch="?"+Et,Bf=`<${ch}>`,an=document,Tr=()=>an.createComment(""),Ir=r=>r===null||typeof r!="object"&&typeof r!="function",da=Array.isArray,jf=r=>da(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Qs=`[ 	
\f\r]`,ur=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_c=/-->/g,vc=/>/g,Kt=RegExp(`>|${Qs}(?:([^\\s"'>=/]+)(${Qs}*=${Qs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bc=/'/g,wc=/"/g,uh=/^(?:script|style|textarea|title)$/i,qf=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),R=qf(1),Dn=Symbol.for("lit-noChange"),_e=Symbol.for("lit-nothing"),Ec=new WeakMap,Zt=an.createTreeWalker(an,129);function hh(r,e){if(!da(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return yc!==void 0?yc.createHTML(e):e}const Hf=(r,e)=>{const t=r.length-1,n=[];let i,s=e===2?"<svg>":e===3?"<math>":"",a=ur;for(let l=0;l<t;l++){const u=r[l];let h,p,m=-1,y=0;for(;y<u.length&&(a.lastIndex=y,p=a.exec(u),p!==null);)y=a.lastIndex,a===ur?p[1]==="!--"?a=_c:p[1]!==void 0?a=vc:p[2]!==void 0?(uh.test(p[2])&&(i=RegExp("</"+p[2],"g")),a=Kt):p[3]!==void 0&&(a=Kt):a===Kt?p[0]===">"?(a=i??ur,m=-1):p[1]===void 0?m=-2:(m=a.lastIndex-p[2].length,h=p[1],a=p[3]===void 0?Kt:p[3]==='"'?wc:bc):a===wc||a===bc?a=Kt:a===_c||a===vc?a=ur:(a=Kt,i=void 0);const I=a===Kt&&r[l+1].startsWith("/>")?" ":"";s+=a===ur?u+Bf:m>=0?(n.push(h),u.slice(0,m)+lh+u.slice(m)+Et+I):u+Et+(m===-2?l:I)}return[hh(r,s+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class xr{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,a=0;const l=e.length-1,u=this.parts,[h,p]=Hf(e,t);if(this.el=xr.createElement(h,n),Zt.currentNode=this.el.content,t===2||t===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(i=Zt.nextNode())!==null&&u.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const m of i.getAttributeNames())if(m.endsWith(lh)){const y=p[a++],I=i.getAttribute(m).split(Et),A=/([.?@])?(.*)/.exec(y);u.push({type:1,index:s,name:A[2],strings:I,ctor:A[1]==="."?Wf:A[1]==="?"?Kf:A[1]==="@"?Yf:es}),i.removeAttribute(m)}else m.startsWith(Et)&&(u.push({type:6,index:s}),i.removeAttribute(m));if(uh.test(i.tagName)){const m=i.textContent.split(Et),y=m.length-1;if(y>0){i.textContent=Pi?Pi.emptyScript:"";for(let I=0;I<y;I++)i.append(m[I],Tr()),Zt.nextNode(),u.push({type:2,index:++s});i.append(m[y],Tr())}}}else if(i.nodeType===8)if(i.data===ch)u.push({type:2,index:s});else{let m=-1;for(;(m=i.data.indexOf(Et,m+1))!==-1;)u.push({type:7,index:s}),m+=Et.length-1}s++}}static createElement(e,t){const n=an.createElement("template");return n.innerHTML=e,n}}function Nn(r,e,t=r,n){var a,l;if(e===Dn)return e;let i=n!==void 0?(a=t._$Co)==null?void 0:a[n]:t._$Cl;const s=Ir(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=i:t._$Cl=i),i!==void 0&&(e=Nn(r,i._$AS(r,e.values),i,n)),e}class Gf{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??an).importNode(t,!0);Zt.currentNode=i;let s=Zt.nextNode(),a=0,l=0,u=n[0];for(;u!==void 0;){if(a===u.index){let h;u.type===2?h=new pa(s,s.nextSibling,this,e):u.type===1?h=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(h=new Qf(s,this,e)),this._$AV.push(h),u=n[++l]}a!==(u==null?void 0:u.index)&&(s=Zt.nextNode(),a++)}return Zt.currentNode=an,i}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}let pa=class dh{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=_e,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Nn(this,e,t),Ir(e)?e===_e||e==null||e===""?(this._$AH!==_e&&this._$AR(),this._$AH=_e):e!==this._$AH&&e!==Dn&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):jf(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_e&&Ir(this._$AH)?this._$AA.nextSibling.data=e:this.T(an.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=xr.createElement(hh(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(t);else{const a=new Gf(i,this),l=a.u(this.options);a.p(t),this.T(l),this._$AH=a}}_$AC(e){let t=Ec.get(e.strings);return t===void 0&&Ec.set(e.strings,t=new xr(e)),t}k(e){da(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const s of e)i===t.length?t.push(n=new dh(this.O(Tr()),this.O(Tr()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){const i=gc(e).nextSibling;gc(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}};class es{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,s){this.type=1,this._$AH=_e,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_e}_$AI(e,t=this,n,i){const s=this.strings;let a=!1;if(s===void 0)e=Nn(this,e,t,0),a=!Ir(e)||e!==this._$AH&&e!==Dn,a&&(this._$AH=e);else{const l=e;let u,h;for(e=s[0],u=0;u<s.length-1;u++)h=Nn(this,l[n+u],t,u),h===Dn&&(h=this._$AH[u]),a||(a=!Ir(h)||h!==this._$AH[u]),h===_e?e=_e:e!==_e&&(e+=(h??"")+s[u+1]),this._$AH[u]=h}a&&!i&&this.j(e)}j(e){e===_e?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Wf extends es{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_e?void 0:e}}let Kf=class extends es{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_e)}},Yf=class extends es{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){if((e=Nn(this,e,t,0)??_e)===Dn)return;const n=this._$AH,i=e===_e&&n!==_e||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==_e&&(n===_e||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}};class Qf{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Nn(this,e)}}const Js=gr.litHtmlPolyfillSupport;Js==null||Js(xr,pa),(gr.litHtmlVersions??(gr.litHtmlVersions=[])).push("3.3.2");const Jf=(r,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const s=(t==null?void 0:t.renderBefore)??null;n._$litPart$=i=new pa(e.insertBefore(Tr(),s),s,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nn=globalThis;class oe extends wn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Jf(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Dn}}var sh;oe._$litElement$=!0,oe.finalized=!0,(sh=nn.litElementHydrateSupport)==null||sh.call(nn,{LitElement:oe});const Xs=nn.litElementPolyfillSupport;Xs==null||Xs({LitElement:oe});(nn.litElementVersions??(nn.litElementVersions=[])).push("4.2.2");class po extends oe{constructor(){super(),this.variant="default",this.lifted=!1,this.padding="md"}render(){const e=["panel",this.variant==="strong"?"strong":"",this.lifted?"lifted":"",`pad-${this.padding}`].filter(Boolean).join(" ");return R`
      <div class=${e}>
        <div class="content"><slot></slot></div>
      </div>
    `}}H(po,"properties",{variant:{type:String},lifted:{type:Boolean},padding:{type:String}}),H(po,"styles",ve`
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
  `);customElements.define("glass-panel",po);class fo extends oe{constructor(){super(),this.variant="primary",this.size="md",this.full=!1,this.disabled=!1}render(){const e=[this.variant,`size-${this.size}`,this.full?"full":""].filter(Boolean).join(" ");return R`
      <button class=${e} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}}H(fo,"properties",{variant:{type:String},size:{type:String},full:{type:Boolean},disabled:{type:Boolean,reflect:!0}}),H(fo,"styles",ve`
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
  `);customElements.define("glass-button",fo);class mo extends oe{constructor(){super(),this.size=44}render(){const e=this.size;return R`
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
    `}}H(mo,"properties",{size:{type:Number}}),H(mo,"styles",ve`
    :host {
      display: inline-block;
      line-height: 0;
    }
    svg {
      display: block;
      filter: drop-shadow(0 6px 18px rgba(20, 12, 6, 0.45));
    }
  `);customElements.define("cairn-mark",mo);class go extends oe{constructor(){super(),this.year=new Date().getFullYear(),this.tripDays=new Map,this.events=[],this.today=new Date}_isLeap(e){return e%4===0&&e%100!==0||e%400===0}_daysInMonth(e,t){return[31,this._isLeap(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]}_renderMonth(e){const t=this.year,i=(new Date(t,e,1).getDay()+6)%7,s=this._daysInMonth(t,e),a=new Set(this.events.filter(h=>{const p=new Date(h.date);return p.getFullYear()===t&&p.getMonth()===e}).map(h=>new Date(h.date).getDate())),l=[];for(let h=0;h<i;h++)l.push(R`<div class="cell empty"></div>`);const u=this.today;for(let h=1;h<=s;h++){const p=`${String(e+1).padStart(2,"0")}-${String(h).padStart(2,"0")}`,m=this.tripDays.get(p)??0,y=u.getFullYear()===t&&u.getMonth()===e&&u.getDate()===h,I=a.has(h),A=["cell",y?"today":"",m>0?"trip":"",m>.6?"dense":"",I?"event":""].filter(Boolean).join(" ");l.push(R`<div class=${A}></div>`)}return l}_onSelect(e){this.dispatchEvent(new CustomEvent("month-select",{detail:{month:e,year:this.year},bubbles:!0,composed:!0}))}render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=this.today.getMonth(),n=this.today.getFullYear()===this.year;return R`
      <div class="grid">
        ${e.map((i,s)=>R`
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
    `}}H(go,"properties",{year:{type:Number},tripDays:{type:Object},events:{type:Array},today:{type:Object}}),H(go,"styles",ve`
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
  `);customElements.define("yearly-view",go);class yo extends oe{constructor(){super(),this.name="",this.hue=200,this.photo="",this.size=36,this.showName=!1}_initials(){return this.name.split(/\s+/).map(e=>e[0]).filter(Boolean).slice(0,2).join("").toUpperCase()}render(){const e=`linear-gradient(135deg, hsl(${this.hue}, 55%, 62%) 0%, hsl(${(this.hue+40)%360}, 50%, 42%) 100%)`,t=`width:${this.size}px;height:${this.size}px;background:${e};font-size:${this.size*.38}px;`;return R`
      <div class="avatar" style=${t} title=${this.name}>
        ${this.photo?R`<img src=${this.photo} alt=${this.name} />`:R`<span>${this._initials()}</span>`}
      </div>
      ${this.showName?R`<span class="name">${this.name}</span>`:""}
    `}}H(yo,"properties",{name:{type:String},hue:{type:Number},photo:{type:String},size:{type:Number},showName:{type:Boolean,attribute:"show-name"}}),H(yo,"styles",ve`
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
  `);customElements.define("member-chip",yo);const Xf=()=>{};var Tc={};/**
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
 */const ph=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Zf=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],a=r[t++],l=r[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},fh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],a=i+1<r.length,l=a?r[i+1]:0,u=i+2<r.length,h=u?r[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,I=h&63;u||(I=64,a||(y=64)),n.push(t[p],t[m],t[y],t[I])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ph(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Zf(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],l=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const m=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new em;const y=s<<2|l>>4;if(n.push(y),h!==64){const I=l<<4&240|h>>2;if(n.push(I),m!==64){const A=h<<6&192|m;n.push(A)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class em extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tm=function(r){const e=ph(r);return fh.encodeByteArray(e,!0)},Di=function(r){return tm(r).replace(/\./g,"")},mh=function(r){try{return fh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rm=()=>nm().__FIREBASE_DEFAULTS__,im=()=>{if(typeof process>"u"||typeof Tc>"u")return;const r=Tc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},sm=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&mh(r[1]);return e&&JSON.parse(e)},ts=()=>{try{return Xf()||rm()||im()||sm()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},gh=r=>{var e,t;return(t=(e=ts())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},yh=r=>{const e=gh(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},_h=()=>{var r;return(r=ts())===null||r===void 0?void 0:r.config},vh=r=>{var e;return(e=ts())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class om{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function pn(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function fa(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function am(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Di(JSON.stringify(t)),Di(JSON.stringify(a)),""].join(".")}const yr={};function lm(){const r={prod:[],emulator:[]};for(const e of Object.keys(yr))yr[e]?r.emulator.push(e):r.prod.push(e);return r}function cm(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Ic=!1;function ma(r,e){if(typeof window>"u"||typeof document>"u"||!pn(window.location.host)||yr[r]===e||yr[r]||Ic)return;yr[r]=e;function t(y){return`__firebase__banner__${y}`}const n="__firebase__banner",s=lm().prod.length>0;function a(){const y=document.getElementById(n);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,I){y.setAttribute("width","24"),y.setAttribute("id",I),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Ic=!0,a()},y}function p(y,I){y.setAttribute("id",I),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function m(){const y=cm(n),I=t("text"),A=document.getElementById(I)||document.createElement("span"),D=t("learnmore"),P=document.getElementById(D)||document.createElement("a"),U=t("preprendIcon"),L=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const j=y.element;l(j),p(P,D);const ee=h();u(L,U),j.append(L,A,P,ee),document.body.appendChild(j)}s?(A.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function um(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function hm(){var r;const e=(r=ts())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pm(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function fm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mm(){const r=Pe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function gm(){return!hm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ym(){try{return typeof indexedDB=="object"}catch{return!1}}function _m(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const vm="FirebaseError";class ot extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=vm,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$r.prototype.create)}}class $r{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?bm(s,n):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ot(i,l,n)}}function bm(r,e){return r.replace(wm,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const wm=/\{\$([^}]+)}/g;function Em(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ln(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],a=e[i];if(xc(s)&&xc(a)){if(!ln(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function xc(r){return r!==null&&typeof r=="object"}/**
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
 */function Mr(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Tm(r,e){const t=new Im(r,e);return t.subscribe.bind(t)}class Im{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");xm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Zs),i.error===void 0&&(i.error=Zs),i.complete===void 0&&(i.complete=Zs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xm(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Zs(){}/**
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
 */function de(r){return r&&r._delegate?r._delegate:r}class Nt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class Am{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new om;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cm(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);n===l&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Sm(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sm(r){return r===Qt?void 0:r}function Cm(r){return r.instantiationMode==="EAGER"}/**
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
 */class km{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Am(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(G||(G={}));const Rm={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Pm=G.INFO,Dm={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Nm=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Dm[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ga{constructor(e){this.name=e,this._logLevel=Pm,this._logHandler=Nm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Vm=(r,e)=>e.some(t=>r instanceof t);let Ac,Sc;function Om(){return Ac||(Ac=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $m(){return Sc||(Sc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bh=new WeakMap,_o=new WeakMap,wh=new WeakMap,eo=new WeakMap,ya=new WeakMap;function Mm(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",a)},s=()=>{t(Ct(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&bh.set(t,r)}).catch(()=>{}),ya.set(e,r),e}function Lm(r){if(_o.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",a),r.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",a),r.addEventListener("abort",a)});_o.set(r,e)}let vo={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return _o.get(r);if(e==="objectStoreNames")return r.objectStoreNames||wh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ct(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Fm(r){vo=r(vo)}function Um(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(to(this),e,...t);return wh.set(n,e.sort?e.sort():[e]),Ct(n)}:$m().includes(r)?function(...e){return r.apply(to(this),e),Ct(bh.get(this))}:function(...e){return Ct(r.apply(to(this),e))}}function zm(r){return typeof r=="function"?Um(r):(r instanceof IDBTransaction&&Lm(r),Vm(r,Om())?new Proxy(r,vo):r)}function Ct(r){if(r instanceof IDBRequest)return Mm(r);if(eo.has(r))return eo.get(r);const e=zm(r);return e!==r&&(eo.set(r,e),ya.set(e,r)),e}const to=r=>ya.get(r);function Bm(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(r,e),l=Ct(a);return n&&a.addEventListener("upgradeneeded",u=>{n(Ct(a.result),u.oldVersion,u.newVersion,Ct(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const jm=["get","getKey","getAll","getAllKeys","count"],qm=["put","add","delete","clear"],no=new Map;function Cc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(no.get(e))return no.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=qm.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||jm.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return n&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&u.done]))[0]};return no.set(e,s),s}Fm(r=>({...r,get:(e,t,n)=>Cc(e,t)||r.get(e,t,n),has:(e,t)=>!!Cc(e,t)||r.has(e,t)}));/**
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
 */class Hm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gm(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Gm(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bo="@firebase/app",kc="0.13.2";/**
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
 */const dt=new ga("@firebase/app"),Wm="@firebase/app-compat",Km="@firebase/analytics-compat",Ym="@firebase/analytics",Qm="@firebase/app-check-compat",Jm="@firebase/app-check",Xm="@firebase/auth",Zm="@firebase/auth-compat",eg="@firebase/database",tg="@firebase/data-connect",ng="@firebase/database-compat",rg="@firebase/functions",ig="@firebase/functions-compat",sg="@firebase/installations",og="@firebase/installations-compat",ag="@firebase/messaging",lg="@firebase/messaging-compat",cg="@firebase/performance",ug="@firebase/performance-compat",hg="@firebase/remote-config",dg="@firebase/remote-config-compat",pg="@firebase/storage",fg="@firebase/storage-compat",mg="@firebase/firestore",gg="@firebase/ai",yg="@firebase/firestore-compat",_g="firebase",vg="11.10.0";/**
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
 */const wo="[DEFAULT]",bg={[bo]:"fire-core",[Wm]:"fire-core-compat",[Ym]:"fire-analytics",[Km]:"fire-analytics-compat",[Jm]:"fire-app-check",[Qm]:"fire-app-check-compat",[Xm]:"fire-auth",[Zm]:"fire-auth-compat",[eg]:"fire-rtdb",[tg]:"fire-data-connect",[ng]:"fire-rtdb-compat",[rg]:"fire-fn",[ig]:"fire-fn-compat",[sg]:"fire-iid",[og]:"fire-iid-compat",[ag]:"fire-fcm",[lg]:"fire-fcm-compat",[cg]:"fire-perf",[ug]:"fire-perf-compat",[hg]:"fire-rc",[dg]:"fire-rc-compat",[pg]:"fire-gcs",[fg]:"fire-gcs-compat",[mg]:"fire-fst",[yg]:"fire-fst-compat",[gg]:"fire-vertex","fire-js":"fire-js",[_g]:"fire-js-all"};/**
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
 */const Ni=new Map,wg=new Map,Eo=new Map;function Rc(r,e){try{r.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function cn(r){const e=r.name;if(Eo.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,r);for(const t of Ni.values())Rc(t,r);for(const t of wg.values())Rc(t,r);return!0}function ns(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function ze(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Eg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new $r("app","Firebase",Eg);/**
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
 */class Tg{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
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
 */const zn=vg;function Eh(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:wo,automaticDataCollectionEnabled:!0},e),i=n.name;if(typeof i!="string"||!i)throw kt.create("bad-app-name",{appName:String(i)});if(t||(t=_h()),!t)throw kt.create("no-options");const s=Ni.get(i);if(s){if(ln(t,s.options)&&ln(n,s.config))return s;throw kt.create("duplicate-app",{appName:i})}const a=new km(i);for(const u of Eo.values())a.addComponent(u);const l=new Tg(t,n,a);return Ni.set(i,l),l}function _a(r=wo){const e=Ni.get(r);if(!e&&r===wo&&_h())return Eh();if(!e)throw kt.create("no-app",{appName:r});return e}function Xe(r,e,t){var n;let i=(n=bg[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(l.join(" "));return}cn(new Nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ig="firebase-heartbeat-database",xg=1,Ar="firebase-heartbeat-store";let ro=null;function Th(){return ro||(ro=Bm(Ig,xg,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ar)}catch(t){console.warn(t)}}}}).catch(r=>{throw kt.create("idb-open",{originalErrorMessage:r.message})})),ro}async function Ag(r){try{const t=(await Th()).transaction(Ar),n=await t.objectStore(Ar).get(Ih(r));return await t.done,n}catch(e){if(e instanceof ot)dt.warn(e.message);else{const t=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function Pc(r,e){try{const n=(await Th()).transaction(Ar,"readwrite");await n.objectStore(Ar).put(e,Ih(r)),await n.done}catch(t){if(t instanceof ot)dt.warn(t.message);else{const n=kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(n.message)}}}function Ih(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Sg=1024,Cg=30;class kg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pg(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Cg){const a=Dg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){dt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dc(),{heartbeatsToSend:n,unsentEntries:i}=Rg(this._heartbeatsCache.heartbeats),s=Di(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return dt.warn(t),""}}}function Dc(){return new Date().toISOString().substring(0,10)}function Rg(r,e=Sg){const t=[];let n=r.slice();for(const i of r){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Nc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Nc(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Pg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ym()?_m().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ag(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Nc(r){return Di(JSON.stringify({version:2,heartbeats:r})).length}function Dg(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function Ng(r){cn(new Nt("platform-logger",e=>new Hm(e),"PRIVATE")),cn(new Nt("heartbeat",e=>new kg(e),"PRIVATE")),Xe(bo,kc,r),Xe(bo,kc,"esm2017"),Xe("fire-js","")}Ng("");var Vg="firebase",Og="11.10.0";/**
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
 */Xe(Vg,Og,"app");function va(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function xh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $g=xh,Ah=new $r("auth","Firebase",xh());/**
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
 */const Vi=new ga("@firebase/auth");function Mg(r,...e){Vi.logLevel<=G.WARN&&Vi.warn(`Auth (${zn}): ${r}`,...e)}function bi(r,...e){Vi.logLevel<=G.ERROR&&Vi.error(`Auth (${zn}): ${r}`,...e)}/**
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
 */function it(r,...e){throw wa(r,...e)}function Ye(r,...e){return wa(r,...e)}function ba(r,e,t){const n=Object.assign(Object.assign({},$g()),{[e]:t});return new $r("auth","Firebase",n).create(e,{appName:r.name})}function rn(r){return ba(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lg(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&it(r,"argument-error"),ba(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wa(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Ah.create(r,...e)}function F(r,e,...t){if(!r)throw wa(e,...t)}function ut(r){const e="INTERNAL ASSERTION FAILED: "+r;throw bi(e),new Error(e)}function pt(r,e){r||ut(e)}/**
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
 */function To(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Fg(){return Vc()==="http:"||Vc()==="https:"}function Vc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Ug(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fg()||pm()||"connection"in navigator)?navigator.onLine:!0}function zg(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Lr{constructor(e,t){this.shortDelay=e,this.longDelay=t,pt(t>e,"Short delay should be less than long delay!"),this.isMobile=um()||fm()}get(){return Ug()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ea(r,e){pt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Sh{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qg=new Lr(3e4,6e4);function Ta(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Bn(r,e,t,n,i={}){return Ch(r,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const l=Mr(Object.assign({key:r.config.apiKey},a)).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:u},s);return dm()||(h.referrerPolicy="no-referrer"),r.emulatorConfig&&pn(r.emulatorConfig.host)&&(h.credentials="include"),Sh.fetch()(await kh(r,r.config.apiHost,t,l),h)})}async function Ch(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Bg),e);try{const i=new Gg(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw pi(r,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(r,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw pi(r,"email-already-in-use",a);if(u==="USER_DISABLED")throw pi(r,"user-disabled",a);const p=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ba(r,p,h);it(r,p)}}catch(i){if(i instanceof ot)throw i;it(r,"network-request-failed",{message:String(i)})}}async function Hg(r,e,t,n,i={}){const s=await Bn(r,e,t,n,i);return"mfaPendingCredential"in s&&it(r,"multi-factor-auth-required",{_serverResponse:s}),s}async function kh(r,e,t,n){const i=`${e}${t}?${n}`,s=r,a=s.config.emulator?Ea(r.config,i):`${r.config.apiScheme}://${i}`;return jg.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class Gg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ye(this.auth,"network-request-failed")),qg.get())})}}function pi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Ye(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */async function Wg(r,e){return Bn(r,"POST","/v1/accounts:delete",e)}async function Oi(r,e){return Bn(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function _r(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kg(r,e=!1){const t=de(r),n=await t.getIdToken(e),i=Ia(n);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:_r(io(i.auth_time)),issuedAtTime:_r(io(i.iat)),expirationTime:_r(io(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function io(r){return Number(r)*1e3}function Ia(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return bi("JWT malformed, contained fewer than 3 sections"),null;try{const i=mh(t);return i?JSON.parse(i):(bi("Failed to decode base64 JWT payload"),null)}catch(i){return bi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Oc(r){const e=Ia(r);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Sr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof ot&&Yg(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Yg({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Qg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Io{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_r(this.lastLoginAt),this.creationTime=_r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $i(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Sr(r,Oi(t,{idToken:n}));F(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Rh(s.providerUserInfo):[],l=Xg(r.providerData,a),u=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Io(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(r,m)}async function Jg(r){const e=de(r);await $i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xg(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Rh(r){return r.map(e=>{var{providerId:t}=e,n=va(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Zg(r,e){const t=await Ch(r,{},async()=>{const n=Mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,a=await kh(r,i,"/v1/token",`key=${s}`),l=await r._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:n};return r.emulatorConfig&&pn(r.emulatorConfig.host)&&(u.credentials="include"),Sh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ey(r,e){return Bn(r,"POST","/v2/accounts:revokeToken",Ta(r,e))}/**
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
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Oc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=Oc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await Zg(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,a=new Cn;return n&&(F(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(F(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
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
 */function wt(r,e){F(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ke{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=va(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Io(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Sr(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Kg(this,e)}reload(){return Jg(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ke(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await $i(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ze(this.auth.app))return Promise.reject(rn(this.auth));const e=await this.getIdToken();return await Sr(this,Wg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,a,l,u,h,p;const m=(n=t.displayName)!==null&&n!==void 0?n:void 0,y=(i=t.email)!==null&&i!==void 0?i:void 0,I=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,A=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,U=(h=t.createdAt)!==null&&h!==void 0?h:void 0,L=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:j,emailVerified:ee,isAnonymous:De,providerData:se,stsTokenManager:b}=t;F(j&&b,e,"internal-error");const g=Cn.fromJSON(this.name,b);F(typeof j=="string",e,"internal-error"),wt(m,e.name),wt(y,e.name),F(typeof ee=="boolean",e,"internal-error"),F(typeof De=="boolean",e,"internal-error"),wt(I,e.name),wt(A,e.name),wt(D,e.name),wt(P,e.name),wt(U,e.name),wt(L,e.name);const _=new Ke({uid:j,auth:e,email:y,emailVerified:ee,displayName:m,isAnonymous:De,photoURL:A,phoneNumber:I,tenantId:D,stsTokenManager:g,createdAt:U,lastLoginAt:L});return se&&Array.isArray(se)&&(_.providerData=se.map(w=>Object.assign({},w))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(e,t,n=!1){const i=new Cn;i.updateFromServerResponse(t);const s=new Ke({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await $i(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];F(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Rh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Cn;l.updateFromIdToken(n);const u=new Ke({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Io(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const $c=new Map;function ht(r){pt(r instanceof Function,"Expected a class definition");let e=$c.get(r);return e?(pt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,$c.set(r,e),e)}/**
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
 */class Ph{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ph.type="NONE";const Mc=Ph;/**
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
 */function wi(r,e,t){return`firebase:${r}:${e}:${t}`}class kn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=wi(this.userKey,i.apiKey,s),this.fullPersistenceKey=wi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Oi(this.auth,{idToken:e}).catch(()=>{});return t?Ke._fromGetAccountInfoResponse(this.auth,t,e):null}return Ke._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new kn(ht(Mc),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||ht(Mc);const a=wi(n,e.config.apiKey,e.name);let l=null;for(const h of t)try{const p=await h._get(a);if(p){let m;if(typeof p=="string"){const y=await Oi(e,{idToken:p}).catch(()=>{});if(!y)break;m=await Ke._fromGetAccountInfoResponse(e,y,p)}else m=Ke._fromJSON(e,p);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new kn(s,e,n):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new kn(s,e,n))}}/**
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
 */function Lc(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mh(e))return"Blackberry";if(Lh(e))return"Webos";if(Nh(e))return"Safari";if((e.includes("chrome/")||Vh(e))&&!e.includes("edge/"))return"Chrome";if($h(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Dh(r=Pe()){return/firefox\//i.test(r)}function Nh(r=Pe()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vh(r=Pe()){return/crios\//i.test(r)}function Oh(r=Pe()){return/iemobile/i.test(r)}function $h(r=Pe()){return/android/i.test(r)}function Mh(r=Pe()){return/blackberry/i.test(r)}function Lh(r=Pe()){return/webos/i.test(r)}function xa(r=Pe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ty(r=Pe()){var e;return xa(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ny(){return mm()&&document.documentMode===10}function Fh(r=Pe()){return xa(r)||$h(r)||Lh(r)||Mh(r)||/windows phone/i.test(r)||Oh(r)}/**
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
 */function Uh(r,e=[]){let t;switch(r){case"Browser":t=Lc(Pe());break;case"Worker":t=`${Lc(Pe())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zn}/${n}`}/**
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
 */class ry{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function iy(r,e={}){return Bn(r,"GET","/v2/passwordPolicy",Ta(r,e))}/**
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
 */const sy=6;class oy{constructor(e){var t,n,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:sy,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ay{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fc(this),this.idTokenSubscription=new Fc(this),this.beforeStateQueue=new ry(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ah,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ht(t)),this._initializationPromise=this.queue(async()=>{var n,i,s;if(!this._deleted&&(this.persistenceManager=await kn.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Oi(this,{idToken:e}),n=await Ke._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ze(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $i(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ze(this.app))return Promise.reject(rn(this));const t=e?de(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ze(this.app)?Promise.reject(rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ze(this.app)?Promise.reject(rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iy(this),t=new oy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $r("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await ey(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ht(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(ze(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Mg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function rs(r){return de(r)}class Fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tm(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Aa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ly(r){Aa=r}function cy(r){return Aa.loadJS(r)}function uy(){return Aa.gapiScript}function hy(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function dy(r,e){const t=ns(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(ln(s,e??{}))return i;it(i,"already-initialized")}return t.initialize({options:e})}function py(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(ht);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function fy(r,e,t){const n=rs(r);F(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=zh(e),{host:a,port:l}=my(e),u=l===null?"":`:${l}`,h={url:`${s}//${a}${u}/`},p=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){F(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),F(ln(h,n.config.emulator)&&ln(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,pn(a)?(fa(`${s}//${a}${u}`),ma("Auth",!0)):gy()}function zh(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function my(r){const e=zh(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Uc(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:Uc(a)}}}function Uc(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function gy(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Bh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}/**
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
 */async function Rn(r,e){return Hg(r,"POST","/v1/accounts:signInWithIdp",Ta(r,e))}/**
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
 */const yy="http://localhost";class un extends Bh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=va(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new un(n,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Rn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Rn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rn(e,t)}buildRequest(){const e={requestUri:yy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mr(t)}return e}}/**
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
 */class Sa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fr extends Sa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tt extends Fr{constructor(){super("facebook.com")}static credential(e){return un._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
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
 */class We extends Fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return un._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return We.credential(t,n)}catch{return null}}}We.GOOGLE_SIGN_IN_METHOD="google.com";We.PROVIDER_ID="google.com";/**
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
 */class It extends Fr{constructor(){super("github.com")}static credential(e){return un._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
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
 */class xt extends Fr{constructor(){super("twitter.com")}static credential(e,t){return un._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return xt.credential(t,n)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
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
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Ke._fromIdTokenResponse(e,n,i),a=zc(n);return new Vn({user:s,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=zc(n);return new Vn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function zc(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Mi extends ot{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Mi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Mi(e,t,n,i)}}function jh(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mi._fromErrorAndOperation(r,s,e,n):s})}async function _y(r,e,t=!1){const n=await Sr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Vn._forOperation(r,"link",n)}/**
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
 */async function vy(r,e,t=!1){const{auth:n}=r;if(ze(n.app))return Promise.reject(rn(n));const i="reauthenticate";try{const s=await Sr(r,jh(n,i,e,r),t);F(s.idToken,n,"internal-error");const a=Ia(s.idToken);F(a,n,"internal-error");const{sub:l}=a;return F(r.uid===l,n,"user-mismatch"),Vn._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&it(n,"user-mismatch"),s}}/**
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
 */async function by(r,e,t=!1){if(ze(r.app))return Promise.reject(rn(r));const n="signIn",i=await jh(r,n,e),s=await Vn._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function wy(r,e,t,n){return de(r).onIdTokenChanged(e,t,n)}function Ey(r,e,t){return de(r).beforeAuthStateChanged(e,t)}function Ty(r,e,t,n){return de(r).onAuthStateChanged(e,t,n)}function Iy(r){return de(r).signOut()}const Li="__sak";/**
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
 */class qh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Li,"1"),this.storage.removeItem(Li),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const xy=1e3,Ay=10;class Hh extends qh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);ny()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ay):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},xy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hh.type="LOCAL";const Sy=Hh;/**
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
 */class Gh extends qh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gh.type="SESSION";const Wh=Gh;/**
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
 */function Cy(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class is{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new is(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),u=await Cy(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}is.receivers=[];/**
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
 */function Ca(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class ky{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=Ca("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ze(){return window}function Ry(r){Ze().location.href=r}/**
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
 */function Kh(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function Py(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dy(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Ny(){return Kh()?self:null}/**
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
 */const Yh="firebaseLocalStorageDb",Vy=1,Fi="firebaseLocalStorage",Qh="fbase_key";class Ur{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ss(r,e){return r.transaction([Fi],e?"readwrite":"readonly").objectStore(Fi)}function Oy(){const r=indexedDB.deleteDatabase(Yh);return new Ur(r).toPromise()}function xo(){const r=indexedDB.open(Yh,Vy);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Fi,{keyPath:Qh})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Fi)?e(n):(n.close(),await Oy(),e(await xo()))})})}async function Bc(r,e,t){const n=ss(r,!0).put({[Qh]:e,value:t});return new Ur(n).toPromise()}async function $y(r,e){const t=ss(r,!1).get(e),n=await new Ur(t).toPromise();return n===void 0?null:n.value}function jc(r,e){const t=ss(r,!0).delete(e);return new Ur(t).toPromise()}const My=800,Ly=3;class Jh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Ly)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=is._getInstance(Ny()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Py(),!this.activeServiceWorker)return;this.sender=new ky(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xo();return await Bc(e,Li,"1"),await jc(e,Li),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>$y(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ss(i,!1).getAll();return new Ur(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),My)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jh.type="LOCAL";const Fy=Jh;new Lr(3e4,6e4);/**
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
 */function Xh(r,e){return e?ht(e):(F(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class ka extends Bh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Uy(r){return by(r.auth,new ka(r),r.bypassAuthState)}function zy(r){const{auth:e,user:t}=r;return F(t,e,"internal-error"),vy(t,new ka(r),r.bypassAuthState)}async function By(r){const{auth:e,user:t}=r;return F(t,e,"internal-error"),_y(t,new ka(r),r.bypassAuthState)}/**
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
 */class Zh{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uy;case"linkViaPopup":case"linkViaRedirect":return By;case"reauthViaPopup":case"reauthViaRedirect":return zy;default:it(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jy=new Lr(2e3,1e4);async function ed(r,e,t){if(ze(r.app))return Promise.reject(Ye(r,"operation-not-supported-in-this-environment"));const n=rs(r);Lg(r,e,Sa);const i=Xh(n,t);return new en(n,"signInViaPopup",e,i).executeNotNull()}class en extends Zh{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,en.currentPopupAction&&en.currentPopupAction.cancel(),en.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=Ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,en.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jy.get())};e()}}en.currentPopupAction=null;/**
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
 */const qy="pendingRedirect",Ei=new Map;class Hy extends Zh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ei.get(this.auth._key());if(!e){try{const n=await Gy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ei.set(this.auth._key(),e)}return this.bypassAuthState||Ei.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gy(r,e){const t=Yy(e),n=Ky(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function Wy(r,e){Ei.set(r._key(),e)}function Ky(r){return ht(r._redirectPersistence)}function Yy(r){return wi(qy,r.config.apiKey,r.name)}async function Qy(r,e,t=!1){if(ze(r.app))return Promise.reject(rn(r));const n=rs(r),i=Xh(n,e),a=await new Hy(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const Jy=600*1e3;class Xy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!td(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ye(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jy&&this.cachedEventUids.clear(),this.cachedEventUids.has(qc(e))}saveEventToCache(e){this.cachedEventUids.add(qc(e)),this.lastProcessedEventTime=Date.now()}}function qc(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function td({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zy(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return td(r);default:return!1}}/**
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
 */async function e_(r,e={}){return Bn(r,"GET","/v1/projects",e)}/**
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
 */const t_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n_=/^https?/;async function r_(r){if(r.config.emulator)return;const{authorizedDomains:e}=await e_(r);for(const t of e)try{if(i_(t))return}catch{}it(r,"unauthorized-domain")}function i_(r){const e=To(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!n_.test(t))return!1;if(t_.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const s_=new Lr(3e4,6e4);function Hc(){const r=Ze().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function o_(r){return new Promise((e,t)=>{var n,i,s;function a(){Hc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hc(),t(Ye(r,"network-request-failed"))},timeout:s_.get()})}if(!((i=(n=Ze().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ze().gapi)===null||s===void 0)&&s.load)a();else{const l=hy("iframefcb");return Ze()[l]=()=>{gapi.load?a():t(Ye(r,"network-request-failed"))},cy(`${uy()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Ti=null,e})}let Ti=null;function a_(r){return Ti=Ti||o_(r),Ti}/**
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
 */const l_=new Lr(5e3,15e3),c_="__/auth/iframe",u_="emulator/auth/iframe",h_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function p_(r){const e=r.config;F(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ea(e,u_):`https://${r.config.authDomain}/${c_}`,n={apiKey:e.apiKey,appName:r.name,v:zn},i=d_.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${Mr(n).slice(1)}`}async function f_(r){const e=await a_(r),t=Ze().gapi;return F(t,r,"internal-error"),e.open({where:document.body,url:p_(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:h_,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const a=Ye(r,"network-request-failed"),l=Ze().setTimeout(()=>{s(a)},l_.get());function u(){Ze().clearTimeout(l),i(n)}n.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const m_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g_=500,y_=600,__="_blank",v_="http://localhost";class Gc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b_(r,e,t,n=g_,i=y_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const u=Object.assign(Object.assign({},m_),{width:n.toString(),height:i.toString(),top:s,left:a}),h=Pe().toLowerCase();t&&(l=Vh(h)?__:t),Dh(h)&&(e=e||v_,u.scrollbars="yes");const p=Object.entries(u).reduce((y,[I,A])=>`${y}${I}=${A},`,"");if(ty(h)&&l!=="_self")return w_(e||"",l),new Gc(null);const m=window.open(e||"",l,p);F(m,r,"popup-blocked");try{m.focus()}catch{}return new Gc(m)}function w_(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const E_="__/auth/handler",T_="emulator/auth/handler",I_=encodeURIComponent("fac");async function Wc(r,e,t,n,i,s){F(r.config.authDomain,r,"auth-domain-config-required"),F(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:zn,eventId:i};if(e instanceof Sa){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",Em(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof Fr){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}r.tenantId&&(a.tid=r.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await r._getAppCheckToken(),h=u?`#${I_}=${encodeURIComponent(u)}`:"";return`${x_(r)}?${Mr(l).slice(1)}${h}`}function x_({config:r}){return r.emulator?Ea(r,T_):`https://${r.authDomain}/${E_}`}/**
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
 */const so="webStorageSupport";class A_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wh,this._completeRedirectFn=Qy,this._overrideRedirectResult=Wy}async _openPopup(e,t,n,i){var s;pt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Wc(e,t,n,To(),i);return b_(e,a,Ca())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Wc(e,t,n,To(),i);return Ry(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(pt(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await f_(e),n=new Xy(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(so,{type:so},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[so];a!==void 0&&t(!!a),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=r_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fh()||Nh()||xa()}}const S_=A_;var Kc="@firebase/auth",Yc="1.10.8";/**
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
 */class C_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function k_(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R_(r){cn(new Nt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:a,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uh(r)},h=new ay(n,i,s,u);return py(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),cn(new Nt("auth-internal",e=>{const t=rs(e.getProvider("auth").getImmediate());return(n=>new C_(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(Kc,Yc,k_(r)),Xe(Kc,Yc,"esm2017")}/**
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
 */const P_=300,D_=vh("authIdTokenMaxAge")||P_;let Qc=null;const N_=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>D_)return;const i=t==null?void 0:t.token;Qc!==i&&(Qc=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function V_(r=_a()){const e=ns(r,"auth");if(e.isInitialized())return e.getImmediate();const t=dy(r,{popupRedirectResolver:S_,persistence:[Fy,Sy,Wh]}),n=vh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const a=N_(s.toString());Ey(t,a,()=>a(t.currentUser)),wy(t,l=>a(l))}}const i=gh("auth");return i&&fy(t,`http://${i}`),t}function O_(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}ly({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Ye("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",O_().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R_("Browser");var Jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rt,nd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function _(){}_.prototype=g.prototype,b.D=g.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(w,E,x){for(var v=Array(arguments.length-2),at=2;at<arguments.length;at++)v[at-2]=arguments[at];return g.prototype[E].apply(w,v)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,g,_){_||(_=0);var w=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)w[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;16>E;++E)w[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=b.g[0],_=b.g[1],E=b.g[2];var x=b.g[3],v=g+(x^_&(E^x))+w[0]+3614090360&4294967295;g=_+(v<<7&4294967295|v>>>25),v=x+(E^g&(_^E))+w[1]+3905402710&4294967295,x=g+(v<<12&4294967295|v>>>20),v=E+(_^x&(g^_))+w[2]+606105819&4294967295,E=x+(v<<17&4294967295|v>>>15),v=_+(g^E&(x^g))+w[3]+3250441966&4294967295,_=E+(v<<22&4294967295|v>>>10),v=g+(x^_&(E^x))+w[4]+4118548399&4294967295,g=_+(v<<7&4294967295|v>>>25),v=x+(E^g&(_^E))+w[5]+1200080426&4294967295,x=g+(v<<12&4294967295|v>>>20),v=E+(_^x&(g^_))+w[6]+2821735955&4294967295,E=x+(v<<17&4294967295|v>>>15),v=_+(g^E&(x^g))+w[7]+4249261313&4294967295,_=E+(v<<22&4294967295|v>>>10),v=g+(x^_&(E^x))+w[8]+1770035416&4294967295,g=_+(v<<7&4294967295|v>>>25),v=x+(E^g&(_^E))+w[9]+2336552879&4294967295,x=g+(v<<12&4294967295|v>>>20),v=E+(_^x&(g^_))+w[10]+4294925233&4294967295,E=x+(v<<17&4294967295|v>>>15),v=_+(g^E&(x^g))+w[11]+2304563134&4294967295,_=E+(v<<22&4294967295|v>>>10),v=g+(x^_&(E^x))+w[12]+1804603682&4294967295,g=_+(v<<7&4294967295|v>>>25),v=x+(E^g&(_^E))+w[13]+4254626195&4294967295,x=g+(v<<12&4294967295|v>>>20),v=E+(_^x&(g^_))+w[14]+2792965006&4294967295,E=x+(v<<17&4294967295|v>>>15),v=_+(g^E&(x^g))+w[15]+1236535329&4294967295,_=E+(v<<22&4294967295|v>>>10),v=g+(E^x&(_^E))+w[1]+4129170786&4294967295,g=_+(v<<5&4294967295|v>>>27),v=x+(_^E&(g^_))+w[6]+3225465664&4294967295,x=g+(v<<9&4294967295|v>>>23),v=E+(g^_&(x^g))+w[11]+643717713&4294967295,E=x+(v<<14&4294967295|v>>>18),v=_+(x^g&(E^x))+w[0]+3921069994&4294967295,_=E+(v<<20&4294967295|v>>>12),v=g+(E^x&(_^E))+w[5]+3593408605&4294967295,g=_+(v<<5&4294967295|v>>>27),v=x+(_^E&(g^_))+w[10]+38016083&4294967295,x=g+(v<<9&4294967295|v>>>23),v=E+(g^_&(x^g))+w[15]+3634488961&4294967295,E=x+(v<<14&4294967295|v>>>18),v=_+(x^g&(E^x))+w[4]+3889429448&4294967295,_=E+(v<<20&4294967295|v>>>12),v=g+(E^x&(_^E))+w[9]+568446438&4294967295,g=_+(v<<5&4294967295|v>>>27),v=x+(_^E&(g^_))+w[14]+3275163606&4294967295,x=g+(v<<9&4294967295|v>>>23),v=E+(g^_&(x^g))+w[3]+4107603335&4294967295,E=x+(v<<14&4294967295|v>>>18),v=_+(x^g&(E^x))+w[8]+1163531501&4294967295,_=E+(v<<20&4294967295|v>>>12),v=g+(E^x&(_^E))+w[13]+2850285829&4294967295,g=_+(v<<5&4294967295|v>>>27),v=x+(_^E&(g^_))+w[2]+4243563512&4294967295,x=g+(v<<9&4294967295|v>>>23),v=E+(g^_&(x^g))+w[7]+1735328473&4294967295,E=x+(v<<14&4294967295|v>>>18),v=_+(x^g&(E^x))+w[12]+2368359562&4294967295,_=E+(v<<20&4294967295|v>>>12),v=g+(_^E^x)+w[5]+4294588738&4294967295,g=_+(v<<4&4294967295|v>>>28),v=x+(g^_^E)+w[8]+2272392833&4294967295,x=g+(v<<11&4294967295|v>>>21),v=E+(x^g^_)+w[11]+1839030562&4294967295,E=x+(v<<16&4294967295|v>>>16),v=_+(E^x^g)+w[14]+4259657740&4294967295,_=E+(v<<23&4294967295|v>>>9),v=g+(_^E^x)+w[1]+2763975236&4294967295,g=_+(v<<4&4294967295|v>>>28),v=x+(g^_^E)+w[4]+1272893353&4294967295,x=g+(v<<11&4294967295|v>>>21),v=E+(x^g^_)+w[7]+4139469664&4294967295,E=x+(v<<16&4294967295|v>>>16),v=_+(E^x^g)+w[10]+3200236656&4294967295,_=E+(v<<23&4294967295|v>>>9),v=g+(_^E^x)+w[13]+681279174&4294967295,g=_+(v<<4&4294967295|v>>>28),v=x+(g^_^E)+w[0]+3936430074&4294967295,x=g+(v<<11&4294967295|v>>>21),v=E+(x^g^_)+w[3]+3572445317&4294967295,E=x+(v<<16&4294967295|v>>>16),v=_+(E^x^g)+w[6]+76029189&4294967295,_=E+(v<<23&4294967295|v>>>9),v=g+(_^E^x)+w[9]+3654602809&4294967295,g=_+(v<<4&4294967295|v>>>28),v=x+(g^_^E)+w[12]+3873151461&4294967295,x=g+(v<<11&4294967295|v>>>21),v=E+(x^g^_)+w[15]+530742520&4294967295,E=x+(v<<16&4294967295|v>>>16),v=_+(E^x^g)+w[2]+3299628645&4294967295,_=E+(v<<23&4294967295|v>>>9),v=g+(E^(_|~x))+w[0]+4096336452&4294967295,g=_+(v<<6&4294967295|v>>>26),v=x+(_^(g|~E))+w[7]+1126891415&4294967295,x=g+(v<<10&4294967295|v>>>22),v=E+(g^(x|~_))+w[14]+2878612391&4294967295,E=x+(v<<15&4294967295|v>>>17),v=_+(x^(E|~g))+w[5]+4237533241&4294967295,_=E+(v<<21&4294967295|v>>>11),v=g+(E^(_|~x))+w[12]+1700485571&4294967295,g=_+(v<<6&4294967295|v>>>26),v=x+(_^(g|~E))+w[3]+2399980690&4294967295,x=g+(v<<10&4294967295|v>>>22),v=E+(g^(x|~_))+w[10]+4293915773&4294967295,E=x+(v<<15&4294967295|v>>>17),v=_+(x^(E|~g))+w[1]+2240044497&4294967295,_=E+(v<<21&4294967295|v>>>11),v=g+(E^(_|~x))+w[8]+1873313359&4294967295,g=_+(v<<6&4294967295|v>>>26),v=x+(_^(g|~E))+w[15]+4264355552&4294967295,x=g+(v<<10&4294967295|v>>>22),v=E+(g^(x|~_))+w[6]+2734768916&4294967295,E=x+(v<<15&4294967295|v>>>17),v=_+(x^(E|~g))+w[13]+1309151649&4294967295,_=E+(v<<21&4294967295|v>>>11),v=g+(E^(_|~x))+w[4]+4149444226&4294967295,g=_+(v<<6&4294967295|v>>>26),v=x+(_^(g|~E))+w[11]+3174756917&4294967295,x=g+(v<<10&4294967295|v>>>22),v=E+(g^(x|~_))+w[2]+718787259&4294967295,E=x+(v<<15&4294967295|v>>>17),v=_+(x^(E|~g))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(E+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+x&4294967295}n.prototype.u=function(b,g){g===void 0&&(g=b.length);for(var _=g-this.blockSize,w=this.B,E=this.h,x=0;x<g;){if(E==0)for(;x<=_;)i(this,b,x),x+=this.blockSize;if(typeof b=="string"){for(;x<g;)if(w[E++]=b.charCodeAt(x++),E==this.blockSize){i(this,w),E=0;break}}else for(;x<g;)if(w[E++]=b[x++],E==this.blockSize){i(this,w),E=0;break}}this.h=E,this.o+=g},n.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;var _=8*this.o;for(g=b.length-8;g<b.length;++g)b[g]=_&255,_/=256;for(this.u(b),b=Array(16),g=_=0;4>g;++g)for(var w=0;32>w;w+=8)b[_++]=this.g[g]>>>w&255;return b};function s(b,g){var _=l;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=g(b)}function a(b,g){this.h=g;for(var _=[],w=!0,E=b.length-1;0<=E;E--){var x=b[E]|0;w&&x==g||(_[E]=x,w=!1)}this.g=_}var l={};function u(b){return-128<=b&&128>b?s(b,function(g){return new a([g|0],0>g?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return P(h(-b));for(var g=[],_=1,w=0;b>=_;w++)g[w]=b/_|0,_*=4294967296;return new a(g,0)}function p(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return P(p(b.substring(1),g));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),w=m,E=0;E<b.length;E+=8){var x=Math.min(8,b.length-E),v=parseInt(b.substring(E,E+x),g);8>x?(x=h(Math.pow(g,x)),w=w.j(x).add(h(v))):(w=w.j(_),w=w.add(h(v)))}return w}var m=u(0),y=u(1),I=u(16777216);r=a.prototype,r.m=function(){if(D(this))return-P(this).m();for(var b=0,g=1,_=0;_<this.g.length;_++){var w=this.i(_);b+=(0<=w?w:4294967296+w)*g,g*=4294967296}return b},r.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(A(this))return"0";if(D(this))return"-"+P(this).toString(b);for(var g=h(Math.pow(b,6)),_=this,w="";;){var E=ee(_,g).g;_=U(_,E.j(g));var x=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=E,A(_))return x+w;for(;6>x.length;)x="0"+x;w=x+w}},r.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function A(b){if(b.h!=0)return!1;for(var g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function D(b){return b.h==-1}r.l=function(b){return b=U(this,b),D(b)?-1:A(b)?0:1};function P(b){for(var g=b.g.length,_=[],w=0;w<g;w++)_[w]=~b.g[w];return new a(_,~b.h).add(y)}r.abs=function(){return D(this)?P(this):this},r.add=function(b){for(var g=Math.max(this.g.length,b.g.length),_=[],w=0,E=0;E<=g;E++){var x=w+(this.i(E)&65535)+(b.i(E)&65535),v=(x>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);w=v>>>16,x&=65535,v&=65535,_[E]=v<<16|x}return new a(_,_[_.length-1]&-2147483648?-1:0)};function U(b,g){return b.add(P(g))}r.j=function(b){if(A(this)||A(b))return m;if(D(this))return D(b)?P(this).j(P(b)):P(P(this).j(b));if(D(b))return P(this.j(P(b)));if(0>this.l(I)&&0>b.l(I))return h(this.m()*b.m());for(var g=this.g.length+b.g.length,_=[],w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var E=0;E<b.g.length;E++){var x=this.i(w)>>>16,v=this.i(w)&65535,at=b.i(E)>>>16,Wn=b.i(E)&65535;_[2*w+2*E]+=v*Wn,L(_,2*w+2*E),_[2*w+2*E+1]+=x*Wn,L(_,2*w+2*E+1),_[2*w+2*E+1]+=v*at,L(_,2*w+2*E+1),_[2*w+2*E+2]+=x*at,L(_,2*w+2*E+2)}for(w=0;w<g;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=g;w<2*g;w++)_[w]=0;return new a(_,0)};function L(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function j(b,g){this.g=b,this.h=g}function ee(b,g){if(A(g))throw Error("division by zero");if(A(b))return new j(m,m);if(D(b))return g=ee(P(b),g),new j(P(g.g),P(g.h));if(D(g))return g=ee(b,P(g)),new j(P(g.g),g.h);if(30<b.g.length){if(D(b)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,w=g;0>=w.l(b);)_=De(_),w=De(w);var E=se(_,1),x=se(w,1);for(w=se(w,2),_=se(_,2);!A(w);){var v=x.add(w);0>=v.l(b)&&(E=E.add(_),x=v),w=se(w,1),_=se(_,1)}return g=U(b,E.j(g)),new j(E,g)}for(E=m;0<=b.l(g);){for(_=Math.max(1,Math.floor(b.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),x=h(_),v=x.j(g);D(v)||0<v.l(b);)_-=w,x=h(_),v=x.j(g);A(x)&&(x=y),E=E.add(x),b=U(b,v)}return new j(E,b)}r.A=function(b){return ee(this,b).h},r.and=function(b){for(var g=Math.max(this.g.length,b.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)&b.i(w);return new a(_,this.h&b.h)},r.or=function(b){for(var g=Math.max(this.g.length,b.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)|b.i(w);return new a(_,this.h|b.h)},r.xor=function(b){for(var g=Math.max(this.g.length,b.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)^b.i(w);return new a(_,this.h^b.h)};function De(b){for(var g=b.g.length+1,_=[],w=0;w<g;w++)_[w]=b.i(w)<<1|b.i(w-1)>>>31;return new a(_,b.h)}function se(b,g){var _=g>>5;g%=32;for(var w=b.g.length-_,E=[],x=0;x<w;x++)E[x]=0<g?b.i(x+_)>>>g|b.i(x+_+1)<<32-g:b.i(x+_);return new a(E,b.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,nd=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,Rt=a}).apply(typeof Jc<"u"?Jc:typeof self<"u"?self:typeof window<"u"?window:{});var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rd,hr,id,Ii,Ao,sd,od,ad;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof fi=="object"&&fi];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(o,c){if(c)e:{var d=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var T=o[f];if(!(T in d))break e;d=d[T]}o=o[o.length-1],f=d[o],c=c(f),c!=f&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,f=!1,T={next:function(){if(!f&&d<o.length){var S=d++;return{value:c(S,o[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,d){return o.call.apply(o.bind,arguments)}function m(o,c,d){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),o.apply(c,T)}}return function(){return o.apply(c,arguments)}}function y(o,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,y.apply(null,arguments)}function I(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function A(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(f,T,S){for(var N=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)N[Z-2]=arguments[Z];return c.prototype[T].apply(f,N)}}function D(o){const c=o.length;if(0<c){const d=Array(c);for(let f=0;f<c;f++)d[f]=o[f];return d}return[]}function P(o,c){for(let d=1;d<arguments.length;d++){const f=arguments[d];if(u(f)){const T=o.length||0,S=f.length||0;o.length=T+S;for(let N=0;N<S;N++)o[T+N]=f[N]}else o.push(f)}}class U{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function ee(o){return ee[" "](o),o}ee[" "]=function(){};var De=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function se(o,c,d){for(const f in o)c.call(d,o[f],f,o)}function b(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function g(o){const c={};for(const d in o)c[d]=o[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,c){let d,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(d in f)o[d]=f[d];for(let S=0;S<_.length;S++)d=_[S],Object.prototype.hasOwnProperty.call(f,d)&&(o[d]=f[d])}}function E(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function x(o){l.setTimeout(()=>{throw o},0)}function v(){var o=xs;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class at{constructor(){this.h=this.g=null}add(c,d){const f=Wn.get();f.set(c,d),this.h?this.h.next=f:this.g=f,this.h=f}}var Wn=new U(()=>new Yp,o=>o.reset());class Yp{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Kn,Yn=!1,xs=new at,dl=()=>{const o=l.Promise.resolve(void 0);Kn=()=>{o.then(Qp)}};var Qp=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){x(d)}var c=Wn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Yn=!1};function yt(){this.s=this.s,this.C=this.C}yt.prototype.s=!1,yt.prototype.ma=function(){this.s||(this.s=!0,this.N())},yt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Jp=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o})();function Qn(o,c){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(De){e:{try{ee(c.nodeName);var T=!0;break e}catch{}T=!1}T||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Xp[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qn.aa.h.call(this)}}A(Qn,Ie);var Xp={2:"touch",3:"pen",4:"mouse"};Qn.prototype.h=function(){Qn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Kr="closure_listenable_"+(1e6*Math.random()|0),Zp=0;function ef(o,c,d,f,T){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!f,this.ha=T,this.key=++Zp,this.da=this.fa=!1}function Yr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Qr(o){this.src=o,this.g={},this.h=0}Qr.prototype.add=function(o,c,d,f,T){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var N=Ss(o,c,f,T);return-1<N?(c=o[N],d||(c.fa=!1)):(c=new ef(c,this.src,S,!!f,T),c.fa=d,o.push(c)),c};function As(o,c){var d=c.type;if(d in o.g){var f=o.g[d],T=Array.prototype.indexOf.call(f,c,void 0),S;(S=0<=T)&&Array.prototype.splice.call(f,T,1),S&&(Yr(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ss(o,c,d,f){for(var T=0;T<o.length;++T){var S=o[T];if(!S.da&&S.listener==c&&S.capture==!!d&&S.ha==f)return T}return-1}var Cs="closure_lm_"+(1e6*Math.random()|0),ks={};function pl(o,c,d,f,T){if(Array.isArray(c)){for(var S=0;S<c.length;S++)pl(o,c[S],d,f,T);return null}return d=gl(d),o&&o[Kr]?o.K(c,d,h(f)?!!f.capture:!1,T):tf(o,c,d,!1,f,T)}function tf(o,c,d,f,T,S){if(!c)throw Error("Invalid event type");var N=h(T)?!!T.capture:!!T,Z=Ps(o);if(Z||(o[Cs]=Z=new Qr(o)),d=Z.add(c,d,f,N,S),d.proxy)return d;if(f=nf(),d.proxy=f,f.src=o,f.listener=d,o.addEventListener)Jp||(T=N),T===void 0&&(T=!1),o.addEventListener(c.toString(),f,T);else if(o.attachEvent)o.attachEvent(ml(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function nf(){function o(d){return c.call(o.src,o.listener,d)}const c=rf;return o}function fl(o,c,d,f,T){if(Array.isArray(c))for(var S=0;S<c.length;S++)fl(o,c[S],d,f,T);else f=h(f)?!!f.capture:!!f,d=gl(d),o&&o[Kr]?(o=o.i,c=String(c).toString(),c in o.g&&(S=o.g[c],d=Ss(S,d,f,T),-1<d&&(Yr(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete o.g[c],o.h--)))):o&&(o=Ps(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ss(c,d,f,T)),(d=-1<o?c[o]:null)&&Rs(d))}function Rs(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Kr])As(c.i,o);else{var d=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(d,f,o.capture):c.detachEvent?c.detachEvent(ml(d),f):c.addListener&&c.removeListener&&c.removeListener(f),(d=Ps(c))?(As(d,o),d.h==0&&(d.src=null,c[Cs]=null)):Yr(o)}}}function ml(o){return o in ks?ks[o]:ks[o]="on"+o}function rf(o,c){if(o.da)o=!0;else{c=new Qn(c,this);var d=o.listener,f=o.ha||o.src;o.fa&&Rs(o),o=d.call(f,c)}return o}function Ps(o){return o=o[Cs],o instanceof Qr?o:null}var Ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function gl(o){return typeof o=="function"?o:(o[Ds]||(o[Ds]=function(c){return o.handleEvent(c)}),o[Ds])}function xe(){yt.call(this),this.i=new Qr(this),this.M=this,this.F=null}A(xe,yt),xe.prototype[Kr]=!0,xe.prototype.removeEventListener=function(o,c,d,f){fl(this,o,c,d,f)};function Ne(o,c){var d,f=o.F;if(f)for(d=[];f;f=f.F)d.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new Ie(c,o);else if(c instanceof Ie)c.target=c.target||o;else{var T=c;c=new Ie(f,o),w(c,T)}if(T=!0,d)for(var S=d.length-1;0<=S;S--){var N=c.g=d[S];T=Jr(N,f,!0,c)&&T}if(N=c.g=o,T=Jr(N,f,!0,c)&&T,T=Jr(N,f,!1,c)&&T,d)for(S=0;S<d.length;S++)N=c.g=d[S],T=Jr(N,f,!1,c)&&T}xe.prototype.N=function(){if(xe.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],f=0;f<d.length;f++)Yr(d[f]);delete o.g[c],o.h--}}this.F=null},xe.prototype.K=function(o,c,d,f){return this.i.add(String(o),c,!1,d,f)},xe.prototype.L=function(o,c,d,f){return this.i.add(String(o),c,!0,d,f)};function Jr(o,c,d,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var T=!0,S=0;S<c.length;++S){var N=c[S];if(N&&!N.da&&N.capture==d){var Z=N.listener,be=N.ha||N.src;N.fa&&As(o.i,N),T=Z.call(be,f)!==!1&&T}}return T&&!f.defaultPrevented}function yl(o,c,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function _l(o){o.g=yl(()=>{o.g=null,o.i&&(o.i=!1,_l(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class sf extends yt{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:_l(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jn(o){yt.call(this),this.h=o,this.g={}}A(Jn,yt);var vl=[];function bl(o){se(o.g,function(c,d){this.g.hasOwnProperty(d)&&Rs(c)},o),o.g={}}Jn.prototype.N=function(){Jn.aa.N.call(this),bl(this)},Jn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ns=l.JSON.stringify,of=l.JSON.parse,af=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Vs(){}Vs.prototype.h=null;function wl(o){return o.h||(o.h=o.i())}function El(){}var Xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Os(){Ie.call(this,"d")}A(Os,Ie);function $s(){Ie.call(this,"c")}A($s,Ie);var qt={},Tl=null;function Xr(){return Tl=Tl||new xe}qt.La="serverreachability";function Il(o){Ie.call(this,qt.La,o)}A(Il,Ie);function Zn(o){const c=Xr();Ne(c,new Il(c))}qt.STAT_EVENT="statevent";function xl(o,c){Ie.call(this,qt.STAT_EVENT,o),this.stat=c}A(xl,Ie);function Ve(o){const c=Xr();Ne(c,new xl(c,o))}qt.Ma="timingevent";function Al(o,c){Ie.call(this,qt.Ma,o),this.size=c}A(Al,Ie);function er(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function tr(){this.g=!0}tr.prototype.xa=function(){this.g=!1};function lf(o,c,d,f,T,S){o.info(function(){if(o.g)if(S)for(var N="",Z=S.split("&"),be=0;be<Z.length;be++){var Y=Z[be].split("=");if(1<Y.length){var Ae=Y[0];Y=Y[1];var Se=Ae.split("_");N=2<=Se.length&&Se[1]=="type"?N+(Ae+"="+Y+"&"):N+(Ae+"=redacted&")}}else N=null;else N=S;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+c+`
`+d+`
`+N})}function cf(o,c,d,f,T,S,N){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+c+`
`+d+`
`+S+" "+N})}function yn(o,c,d,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+hf(o,d)+(f?" "+f:"")})}function uf(o,c){o.info(function(){return"TIMEOUT: "+c})}tr.prototype.info=function(){};function hf(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var f=d[o];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var S=T[0];if(S!="noop"&&S!="stop"&&S!="close")for(var N=1;N<T.length;N++)T[N]=""}}}}return Ns(d)}catch{return c}}var Zr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ms;function ei(){}A(ei,Vs),ei.prototype.g=function(){return new XMLHttpRequest},ei.prototype.i=function(){return{}},Ms=new ei;function _t(o,c,d,f){this.j=o,this.i=c,this.l=d,this.R=f||1,this.U=new Jn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cl}function Cl(){this.i=null,this.g="",this.h=!1}var kl={},Ls={};function Fs(o,c,d){o.L=1,o.v=ii(lt(c)),o.m=d,o.P=!0,Rl(o,null)}function Rl(o,c){o.F=Date.now(),ti(o),o.A=lt(o.v);var d=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),ql(d.i,"t",f),o.C=0,d=o.j.J,o.h=new Cl,o.g=lc(o.j,d?c:null,!o.m),0<o.O&&(o.M=new sf(y(o.Y,o,o.g),o.O)),c=o.U,d=o.g,f=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(vl[0]=T.toString()),T=vl);for(var S=0;S<T.length;S++){var N=pl(d,T[S],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Zn(),lf(o.i,o.u,o.A,o.l,o.R,o.m)}_t.prototype.ca=function(o){o=o.target;const c=this.M;c&&ct(o)==3?c.j():this.Y(o)},_t.prototype.Y=function(o){try{if(o==this.g)e:{const Se=ct(this.g);var c=this.g.Ba();const bn=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||Jl(this.g)))){this.J||Se!=4||c==7||(c==8||0>=bn?Zn(3):Zn(2)),Us(this);var d=this.g.Z();this.X=d;t:if(Pl(this)){var f=Jl(this.g);o="";var T=f.length,S=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),nr(this);var N="";break t}this.h.i=new l.TextDecoder}for(c=0;c<T;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(S&&c==T-1)});f.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=d==200,cf(this.i,this.u,this.A,this.l,this.R,Se,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,be=this.g;if((Z=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Z)){var Y=Z;break t}}Y=null}if(d=Y)yn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zs(this,d);else{this.o=!1,this.s=3,Ve(12),Ht(this),nr(this);break e}}if(this.P){d=!0;let He;for(;!this.J&&this.C<N.length;)if(He=df(this,N),He==Ls){Se==4&&(this.s=4,Ve(14),d=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(He==kl){this.s=4,Ve(15),yn(this.i,this.l,N,"[Invalid Chunk]"),d=!1;break}else yn(this.i,this.l,He,null),zs(this,He);if(Pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||N.length!=0||this.h.h||(this.s=1,Ve(16),d=!1),this.o=this.o&&d,!d)yn(this.i,this.l,N,"[Invalid Chunked Response]"),Ht(this),nr(this);else if(0<N.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),Ws(Ae),Ae.M=!0,Ve(11))}}else yn(this.i,this.l,N,null),zs(this,N);Se==4&&Ht(this),this.o&&!this.J&&(Se==4?ic(this.j,this):(this.o=!1,ti(this)))}else kf(this.g),d==400&&0<N.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),Ht(this),nr(this)}}}catch{}finally{}};function Pl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function df(o,c){var d=o.C,f=c.indexOf(`
`,d);return f==-1?Ls:(d=Number(c.substring(d,f)),isNaN(d)?kl:(f+=1,f+d>c.length?Ls:(c=c.slice(f,f+d),o.C=f+d,c)))}_t.prototype.cancel=function(){this.J=!0,Ht(this)};function ti(o){o.S=Date.now()+o.I,Dl(o,o.I)}function Dl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=er(y(o.ba,o),c)}function Us(o){o.B&&(l.clearTimeout(o.B),o.B=null)}_t.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(uf(this.i,this.A),this.L!=2&&(Zn(),Ve(17)),Ht(this),this.s=2,nr(this)):Dl(this,this.S-o)};function nr(o){o.j.G==0||o.J||ic(o.j,o)}function Ht(o){Us(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,bl(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function zs(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Bs(d.h,o))){if(!o.K&&Bs(d.h,o)&&d.G==3){try{var f=d.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ui(d),li(d);else break e;Gs(d),Ve(18)}}else d.za=T[1],0<d.za-d.T&&37500>T[2]&&d.F&&d.v==0&&!d.C&&(d.C=er(y(d.Za,d),6e3));if(1>=Ol(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Wt(d,11)}else if((o.K||d.g==o)&&ui(d),!L(c))for(T=d.Da.g.parse(c),c=0;c<T.length;c++){let Y=T[c];if(d.T=Y[0],Y=Y[1],d.G==2)if(Y[0]=="c"){d.K=Y[1],d.ia=Y[2];const Ae=Y[3];Ae!=null&&(d.la=Ae,d.j.info("VER="+d.la));const Se=Y[4];Se!=null&&(d.Aa=Se,d.j.info("SVER="+d.Aa));const bn=Y[5];bn!=null&&typeof bn=="number"&&0<bn&&(f=1.5*bn,d.L=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const He=o.g;if(He){const di=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(di){var S=f.h;S.g||di.indexOf("spdy")==-1&&di.indexOf("quic")==-1&&di.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(js(S,S.h),S.h=null))}if(f.D){const Ks=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;Ks&&(f.ya=Ks,re(f.I,f.D,Ks))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),f=d;var N=o;if(f.qa=ac(f,f.J?f.ia:null,f.W),N.K){$l(f.h,N);var Z=N,be=f.L;be&&(Z.I=be),Z.B&&(Us(Z),ti(Z)),f.g=N}else nc(f);0<d.i.length&&ci(d)}else Y[0]!="stop"&&Y[0]!="close"||Wt(d,7);else d.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Wt(d,7):Hs(d):Y[0]!="noop"&&d.l&&d.l.ta(Y),d.v=0)}}Zn(4)}catch{}}var pf=class{constructor(o,c){this.g=o,this.map=c}};function Nl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ol(o){return o.h?1:o.g?o.g.size:0}function Bs(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function js(o,c){o.g?o.g.add(c):o.h=c}function $l(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Nl.prototype.cancel=function(){if(this.i=Ml(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ml(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return D(o.i)}function ff(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,f=0;f<d;f++)c.push(o[f]);return c}c=[],d=0;for(f in o)c[d++]=o[f];return c}function mf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const f in o)c[d++]=f;return c}}}function Ll(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=mf(o),f=ff(o),T=f.length,S=0;S<T;S++)c.call(void 0,f[S],d&&d[S],o)}var Fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gf(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var f=o[d].indexOf("="),T=null;if(0<=f){var S=o[d].substring(0,f);T=o[d].substring(f+1)}else S=o[d];c(S,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Gt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Gt){this.h=o.h,ni(this,o.j),this.o=o.o,this.g=o.g,ri(this,o.s),this.l=o.l;var c=o.i,d=new sr;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Ul(this,d),this.m=o.m}else o&&(c=String(o).match(Fl))?(this.h=!1,ni(this,c[1]||"",!0),this.o=rr(c[2]||""),this.g=rr(c[3]||"",!0),ri(this,c[4]),this.l=rr(c[5]||"",!0),Ul(this,c[6]||"",!0),this.m=rr(c[7]||"")):(this.h=!1,this.i=new sr(null,this.h))}Gt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(ir(c,zl,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(ir(c,zl,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ir(d,d.charAt(0)=="/"?vf:_f,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ir(d,wf)),o.join("")};function lt(o){return new Gt(o)}function ni(o,c,d){o.j=d?rr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ri(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Ul(o,c,d){c instanceof sr?(o.i=c,Ef(o.i,o.h)):(d||(c=ir(c,bf)),o.i=new sr(c,o.h))}function re(o,c,d){o.i.set(c,d)}function ii(o){return re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function rr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ir(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,yf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function yf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var zl=/[#\/\?@]/g,_f=/[#\?:]/g,vf=/[#\?]/g,bf=/[#\?@]/g,wf=/#/g;function sr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function vt(o){o.g||(o.g=new Map,o.h=0,o.i&&gf(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}r=sr.prototype,r.add=function(o,c){vt(this),this.i=null,o=_n(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Bl(o,c){vt(o),c=_n(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function jl(o,c){return vt(o),c=_n(o,c),o.g.has(c)}r.forEach=function(o,c){vt(this),this.g.forEach(function(d,f){d.forEach(function(T){o.call(c,T,f,this)},this)},this)},r.na=function(){vt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let f=0;f<c.length;f++){const T=o[f];for(let S=0;S<T.length;S++)d.push(c[f])}return d},r.V=function(o){vt(this);let c=[];if(typeof o=="string")jl(this,o)&&(c=c.concat(this.g.get(_n(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},r.set=function(o,c){return vt(this),this.i=null,o=_n(this,o),jl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function ql(o,c,d){Bl(o,c),0<d.length&&(o.i=null,o.g.set(_n(o,c),D(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var f=c[d];const S=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var T=S;N[f]!==""&&(T+="="+encodeURIComponent(String(N[f]))),o.push(T)}}return this.i=o.join("&")};function _n(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Ef(o,c){c&&!o.j&&(vt(o),o.i=null,o.g.forEach(function(d,f){var T=f.toLowerCase();f!=T&&(Bl(this,f),ql(this,T,d))},o)),o.j=c}function Tf(o,c){const d=new tr;if(l.Image){const f=new Image;f.onload=I(bt,d,"TestLoadImage: loaded",!0,c,f),f.onerror=I(bt,d,"TestLoadImage: error",!1,c,f),f.onabort=I(bt,d,"TestLoadImage: abort",!1,c,f),f.ontimeout=I(bt,d,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function If(o,c){const d=new tr,f=new AbortController,T=setTimeout(()=>{f.abort(),bt(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(S=>{clearTimeout(T),S.ok?bt(d,"TestPingServer: ok",!0,c):bt(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),bt(d,"TestPingServer: error",!1,c)})}function bt(o,c,d,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(d)}catch{}}function xf(){this.g=new af}function Af(o,c,d){const f=d||"";try{Ll(o,function(T,S){let N=T;h(T)&&(N=Ns(T)),c.push(f+S+"="+encodeURIComponent(N))})}catch(T){throw c.push(f+"type="+encodeURIComponent("_badmap")),T}}function si(o){this.l=o.Ub||null,this.j=o.eb||!1}A(si,Vs),si.prototype.g=function(){return new oi(this.l,this.j)},si.prototype.i=(function(o){return function(){return o}})({});function oi(o,c){xe.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(oi,xe),r=oi.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,ar(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,or(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ar(this)),this.g&&(this.readyState=3,ar(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?or(this):ar(this),this.readyState==3&&Hl(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,or(this))},r.Qa=function(o){this.g&&(this.response=o,or(this))},r.ga=function(){this.g&&or(this)};function or(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ar(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function ar(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Gl(o){let c="";return se(o,function(d,f){c+=f,c+=":",c+=d,c+=`\r
`}),c}function qs(o,c,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=Gl(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):re(o,c,d))}function le(o){xe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(le,xe);var Sf=/^https?$/i,Cf=["POST","PUT"];r=le.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ms.g(),this.v=this.o?wl(this.o):wl(Ms),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(S){Wl(this,S);return}if(o=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)d.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())d.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),T=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Cf,c,void 0))||f||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,N]of d)this.g.setRequestHeader(S,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ql(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Wl(this,S)}};function Wl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Kl(o),ai(o)}function Kl(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),ai(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ai(this,!0)),le.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Yl(this):this.bb())},r.bb=function(){Yl(this)};function Yl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ct(o)!=4||o.Z()!=2)){if(o.u&&ct(o)==4)yl(o.Ea,0,o);else if(Ne(o,"readystatechange"),ct(o)==4){o.h=!1;try{const N=o.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var f;if(f=N===0){var T=String(o.D).match(Fl)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),f=!Sf.test(T?T.toLowerCase():"")}d=f}if(d)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var S=2<ct(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",Kl(o)}}finally{ai(o)}}}}function ai(o,c){if(o.g){Ql(o);const d=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ne(o,"ready");try{d.onreadystatechange=f}catch{}}}function Ql(o){o.I&&(l.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function ct(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),of(c)}};function Jl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function kf(o){const c={};o=(o.g&&2<=ct(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(L(o[f]))continue;var d=E(o[f]);const T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=c[T]||[];c[T]=S,S.push(d)}b(c,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function lr(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Xl(o){this.Aa=0,this.i=[],this.j=new tr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=lr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=lr("baseRetryDelayMs",5e3,o),this.cb=lr("retryDelaySeedMs",1e4,o),this.Wa=lr("forwardChannelMaxRetries",2,o),this.wa=lr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Nl(o&&o.concurrentRequestLimit),this.Da=new xf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Xl.prototype,r.la=8,r.G=1,r.connect=function(o,c,d,f){Ve(0),this.W=o,this.H=c||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.I=ac(this,null,this.W),ci(this)};function Hs(o){if(Zl(o),o.G==3){var c=o.U++,d=lt(o.I);if(re(d,"SID",o.K),re(d,"RID",c),re(d,"TYPE","terminate"),cr(o,d),c=new _t(o,o.j,c),c.L=2,c.v=ii(lt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=lc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ti(c)}oc(o)}function li(o){o.g&&(Ws(o),o.g.cancel(),o.g=null)}function Zl(o){li(o),o.u&&(l.clearTimeout(o.u),o.u=null),ui(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ci(o){if(!Vl(o.h)&&!o.s){o.s=!0;var c=o.Ga;Kn||dl(),Yn||(Kn(),Yn=!0),xs.add(c,o),o.B=0}}function Rf(o,c){return Ol(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=er(y(o.Ga,o,c),sc(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const T=new _t(this,this.j,o);let S=this.o;if(this.S&&(S?(S=g(S),w(S,this.S)):S=this.S),this.m!==null||this.O||(T.H=S,S=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=tc(this,T,c),d=lt(this.I),re(d,"RID",o),re(d,"CVER",22),this.D&&re(d,"X-HTTP-Session-Id",this.D),cr(this,d),S&&(this.O?c="headers="+encodeURIComponent(String(Gl(S)))+"&"+c:this.m&&qs(d,this.m,S)),js(this.h,T),this.Ua&&re(d,"TYPE","init"),this.P?(re(d,"$req",c),re(d,"SID","null"),T.T=!0,Fs(T,d,null)):Fs(T,d,c),this.G=2}}else this.G==3&&(o?ec(this,o):this.i.length==0||Vl(this.h)||ec(this))};function ec(o,c){var d;c?d=c.l:d=o.U++;const f=lt(o.I);re(f,"SID",o.K),re(f,"RID",d),re(f,"AID",o.T),cr(o,f),o.m&&o.o&&qs(f,o.m,o.o),d=new _t(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=tc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),js(o.h,d),Fs(d,f,c)}function cr(o,c){o.H&&se(o.H,function(d,f){re(c,f,d)}),o.l&&Ll({},function(d,f){re(c,f,d)})}function tc(o,c,d){d=Math.min(o.i.length,d);var f=o.l?y(o.l.Na,o.l,o):null;e:{var T=o.i;let S=-1;for(;;){const N=["count="+d];S==-1?0<d?(S=T[0].g,N.push("ofs="+S)):S=0:N.push("ofs="+S);let Z=!0;for(let be=0;be<d;be++){let Y=T[be].g;const Ae=T[be].map;if(Y-=S,0>Y)S=Math.max(0,T[be].g-100),Z=!1;else try{Af(Ae,N,"req"+Y+"_")}catch{f&&f(Ae)}}if(Z){f=N.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,f}function nc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Kn||dl(),Yn||(Kn(),Yn=!0),xs.add(c,o),o.v=0}}function Gs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=er(y(o.Fa,o),sc(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,rc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=er(y(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),li(this),rc(this))};function Ws(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function rc(o){o.g=new _t(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=lt(o.qa);re(c,"RID","rpc"),re(c,"SID",o.K),re(c,"AID",o.T),re(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&re(c,"TO",o.ja),re(c,"TYPE","xmlhttp"),cr(o,c),o.m&&o.o&&qs(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ii(lt(c)),d.m=null,d.P=!0,Rl(d,o)}r.Za=function(){this.C!=null&&(this.C=null,li(this),Gs(this),Ve(19))};function ui(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ic(o,c){var d=null;if(o.g==c){ui(o),Ws(o),o.g=null;var f=2}else if(Bs(o.h,c))d=c.D,$l(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var T=o.B;f=Xr(),Ne(f,new Al(f,d)),ci(o)}else nc(o);else if(T=c.s,T==3||T==0&&0<c.X||!(f==1&&Rf(o,c)||f==2&&Gs(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),T){case 1:Wt(o,5);break;case 4:Wt(o,10);break;case 3:Wt(o,6);break;default:Wt(o,2)}}}function sc(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Wt(o,c){if(o.j.info("Error code "+c),c==2){var d=y(o.fb,o),f=o.Xa;const T=!f;f=new Gt(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ni(f,"https"),ii(f),T?Tf(f.toString(),d):If(f.toString(),d)}else Ve(2);o.G=0,o.l&&o.l.sa(c),oc(o),Zl(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function oc(o){if(o.G=0,o.ka=[],o.l){const c=Ml(o.h);(c.length!=0||o.i.length!=0)&&(P(o.ka,c),P(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function ac(o,c,d){var f=d instanceof Gt?lt(d):new Gt(d);if(f.g!="")c&&(f.g=c+"."+f.g),ri(f,f.s);else{var T=l.location;f=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;var S=new Gt(null);f&&ni(S,f),c&&(S.g=c),T&&ri(S,T),d&&(S.l=d),f=S}return d=o.D,c=o.ya,d&&c&&re(f,d,c),re(f,"VER",o.la),cr(o,f),f}function lc(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new le(new si({eb:d})):new le(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function cc(){}r=cc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function hi(){}hi.prototype.g=function(o,c){return new Le(o,c)};function Le(o,c){xe.call(this),this.g=new Xl(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!L(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!L(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new vn(this)}A(Le,xe),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){Hs(this.g)},Le.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ns(o),o=d);c.i.push(new pf(c.Ya++,o)),c.G==3&&ci(c)},Le.prototype.N=function(){this.g.l=null,delete this.j,Hs(this.g),delete this.g,Le.aa.N.call(this)};function uc(o){Os.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}A(uc,Os);function hc(){$s.call(this),this.status=1}A(hc,$s);function vn(o){this.g=o}A(vn,cc),vn.prototype.ua=function(){Ne(this.g,"a")},vn.prototype.ta=function(o){Ne(this.g,new uc(o))},vn.prototype.sa=function(o){Ne(this.g,new hc)},vn.prototype.ra=function(){Ne(this.g,"b")},hi.prototype.createWebChannel=hi.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,ad=function(){return new hi},od=function(){return Xr()},sd=qt,Ao={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zr.NO_ERROR=0,Zr.TIMEOUT=8,Zr.HTTP_ERROR=6,Ii=Zr,Sl.COMPLETE="complete",id=Sl,El.EventType=Xn,Xn.OPEN="a",Xn.CLOSE="b",Xn.ERROR="c",Xn.MESSAGE="d",xe.prototype.listen=xe.prototype.K,hr=El,le.prototype.listenOnce=le.prototype.L,le.prototype.getLastError=le.prototype.Ka,le.prototype.getLastErrorCode=le.prototype.Ba,le.prototype.getStatus=le.prototype.Z,le.prototype.getResponseJson=le.prototype.Oa,le.prototype.getResponseText=le.prototype.oa,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Ha,rd=le}).apply(typeof fi<"u"?fi:typeof self<"u"?self:typeof window<"u"?window:{});const Xc="@firebase/firestore",Zc="4.8.0";/**
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
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
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
 */let jn="11.10.0";/**
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
 */const hn=new ga("@firebase/firestore");function En(){return hn.logLevel}function V(r,...e){if(hn.logLevel<=G.DEBUG){const t=e.map(Ra);hn.debug(`Firestore (${jn}): ${r}`,...t)}}function ft(r,...e){if(hn.logLevel<=G.ERROR){const t=e.map(Ra);hn.error(`Firestore (${jn}): ${r}`,...t)}}function Vt(r,...e){if(hn.logLevel<=G.WARN){const t=e.map(Ra);hn.warn(`Firestore (${jn}): ${r}`,...t)}}function Ra(r){if(typeof r=="string")return r;try{/**
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
 */function M(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,ld(r,n,t)}function ld(r,e,t){let n=`FIRESTORE (${jn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ft(n),new Error(n)}function J(r,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,r||ld(e,i,n)}function B(r,e){return r}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ke.UNAUTHENTICATED)))}shutdown(){}}class M_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class L_{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0,42304);let n=this.i;const i=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let s=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pt,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const u=s;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},l=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(J(typeof n.accessToken=="string",31837,{l:n}),new cd(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{h:e}),new ke(e)}}class F_{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class U_{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new F_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ke.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class eu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ze(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){J(this.o===void 0,3512);const n=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>n(s)))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new eu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new eu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function B_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */function ud(){return new TextEncoder}/**
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
 */class Pa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=B_(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function q(r,e){return r<e?-1:r>e?1:0}function So(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),i=e.codePointAt(t);if(n!==i){if(n<128&&i<128)return q(n,i);{const s=ud(),a=j_(s.encode(tu(r,t)),s.encode(tu(e,t)));return a!==0?a:q(n,i)}}t+=n>65535?2:1}return q(r.length,e.length)}function tu(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function j_(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return q(r[t],e[t]);return q(r.length,e.length)}function On(r,e,t){return r.length===e.length&&r.every(((n,i)=>t(n,e[i])))}/**
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
 */const nu="__name__";class Je{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&M(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Je.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Je?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=Je.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return q(e.length,t.length)}static compareSegments(e,t){const n=Je.isNumericId(e),i=Je.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Je.extractNumericId(e).compare(Je.extractNumericId(t)):So(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rt.fromString(e.substring(4,e.length-2))}}class ne extends Je{construct(e,t,n){return new ne(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((i=>i.length>0)))}return new ne(t)}static emptyPath(){return new ne([])}}const q_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends Je{construct(e,t,n){return new Ee(e,t,n)}static isValidIdentifier(e){return q_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===nu}static keyField(){return new Ee([nu])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(n+=l,i++):(s(),i++)}if(s(),a)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ne.fromString(e))}static fromName(e){return new $(ne.fromString(e).popFirst(5))}static empty(){return new $(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ne(e.slice()))}}/**
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
 */function hd(r,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function H_(r,e,t,n){if(e===!0&&n===!0)throw new O(C.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ru(r){if(!$.isDocumentKey(r))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function iu(r){if($.isDocumentKey(r))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function dd(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function os(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function je(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=os(r);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function me(r,e){const t={typeString:r};return e&&(t.value=e),t}function zr(r,e){if(!dd(r))throw new O(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,s="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const a=r[n];if(i&&typeof a!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${n}' field to equal '${s.value}'`;break}}if(t)throw new O(C.INVALID_ARGUMENT,t);return!0}/**
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
 */const su=-62135596800,ou=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*ou);return new ie(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<su)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ou}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zr(e,ie._jsonSchema))return new ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-su;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:me("string",ie._jsonSchemaVersion),seconds:me("number"),nanoseconds:me("number")};/**
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
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new ie(0,0))}static max(){return new z(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Cr=-1;function G_(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=z.fromTimestamp(n===1e9?new ie(t+1,0):new ie(t,n));return new Ot(i,$.empty(),e)}function W_(r){return new Ot(r.readTime,r.key,Cr)}class Ot{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ot(z.min(),$.empty(),Cr)}static max(){return new Ot(z.max(),$.empty(),Cr)}}function K_(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(r.documentKey,e.documentKey),t!==0?t:q(r.largestBatchId,e.largestBatchId))}/**
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
 */const Y_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function qn(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==Y_)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,n)=>{t(e)}))}static reject(e){return new k(((t,n)=>{n(e)}))}static waitFor(e){return new k(((t,n)=>{let i=0,s=0,a=!1;e.forEach((l=>{++i,l.next((()=>{++s,a&&s===i&&t()}),(u=>n(u)))})),a=!0,s===i&&t()}))}static or(e){let t=k.resolve(!1);for(const n of e)t=t.next((i=>i?k.resolve(i):n()));return t}static forEach(e,t){const n=[];return e.forEach(((i,s)=>{n.push(t.call(this,i,s))})),this.waitFor(n)}static mapArray(e,t){return new k(((n,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next((p=>{a[h]=p,++l,l===s&&n(a)}),(p=>i(p)))}}))}static doWhile(e,t){return new k(((n,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):n()};s()}))}}function J_(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Hn(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class as{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this._e(n),this.ae=n=>t.writeSequenceNumber(n))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}as.ue=-1;/**
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
 */const Da=-1;function ls(r){return r==null}function Ui(r){return r===0&&1/r==-1/0}function X_(r){return typeof r=="number"&&Number.isInteger(r)&&!Ui(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const pd="";function Z_(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=au(e)),e=ev(r.get(t),e);return au(e)}function ev(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case pd:t+="";break;default:t+=s}}return t}function au(r){return r+pd+""}/**
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
 */function lu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Bt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function fd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mi(this.root,e,this.comparator,!0)}}class mi{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??we.RED,this.left=i??we.EMPTY,this.right=s??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new we(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return we.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,n,i,s){return this}insert(e,t,n){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cu(this.data.getIterator())}getIteratorFrom(e){return new cu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class cu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new ge(Ee.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return On(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class md extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new md("Invalid base64 string: "+s):s}})(e);return new Te(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s})(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const tv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(r){if(J(!!r,39018),typeof r=="string"){let e=0;const t=tv.exec(r);if(J(!!t,46558,{timestamp:r}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ue(r.seconds),nanos:ue(r.nanos)}}function ue(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Mt(r){return typeof r=="string"?Te.fromBase64String(r):Te.fromUint8Array(r)}/**
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
 */const gd="server_timestamp",yd="__type__",_d="__previous_value__",vd="__local_write_time__";function Na(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[yd])===null||t===void 0?void 0:t.stringValue)===gd}function cs(r){const e=r.mapValue.fields[_d];return Na(e)?cs(e):e}function kr(r){const e=$t(r.mapValue.fields[vd].timestampValue);return new ie(e.seconds,e.nanos)}/**
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
 */class nv{constructor(e,t,n,i,s,a,l,u,h,p){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=p}}const zi="(default)";class Rr{constructor(e,t){this.projectId=e,this.database=t||zi}static empty(){return new Rr("","")}get isDefaultDatabase(){return this.database===zi}isEqual(e){return e instanceof Rr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bd="__type__",rv="__max__",gi={mapValue:{}},wd="__vector__",Bi="value";function Lt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Na(r)?4:sv(r)?9007199254740991:iv(r)?10:11:M(28295,{value:r})}function st(r,e){if(r===e)return!0;const t=Lt(r);if(t!==Lt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return kr(r).isEqual(kr(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=$t(i.timestampValue),l=$t(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(i,s){return Mt(i.bytesValue).isEqual(Mt(s.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(i,s){return ue(i.geoPointValue.latitude)===ue(s.geoPointValue.latitude)&&ue(i.geoPointValue.longitude)===ue(s.geoPointValue.longitude)})(r,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return ue(i.integerValue)===ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ue(i.doubleValue),l=ue(s.doubleValue);return a===l?Ui(a)===Ui(l):isNaN(a)&&isNaN(l)}return!1})(r,e);case 9:return On(r.arrayValue.values||[],e.arrayValue.values||[],st);case 10:case 11:return(function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(lu(a)!==lu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!st(a[u],l[u])))return!1;return!0})(r,e);default:return M(52216,{left:r})}}function Pr(r,e){return(r.values||[]).find((t=>st(t,e)))!==void 0}function $n(r,e){if(r===e)return 0;const t=Lt(r),n=Lt(e);if(t!==n)return q(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,e.booleanValue);case 2:return(function(s,a){const l=ue(s.integerValue||s.doubleValue),u=ue(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(r,e);case 3:return uu(r.timestampValue,e.timestampValue);case 4:return uu(kr(r),kr(e));case 5:return So(r.stringValue,e.stringValue);case 6:return(function(s,a){const l=Mt(s),u=Mt(a);return l.compareTo(u)})(r.bytesValue,e.bytesValue);case 7:return(function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=q(l[h],u[h]);if(p!==0)return p}return q(l.length,u.length)})(r.referenceValue,e.referenceValue);case 8:return(function(s,a){const l=q(ue(s.latitude),ue(a.latitude));return l!==0?l:q(ue(s.longitude),ue(a.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return hu(r.arrayValue,e.arrayValue);case 10:return(function(s,a){var l,u,h,p;const m=s.fields||{},y=a.fields||{},I=(l=m[Bi])===null||l===void 0?void 0:l.arrayValue,A=(u=y[Bi])===null||u===void 0?void 0:u.arrayValue,D=q(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((p=A==null?void 0:A.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:hu(I,A)})(r.mapValue,e.mapValue);case 11:return(function(s,a){if(s===gi.mapValue&&a===gi.mapValue)return 0;if(s===gi.mapValue)return 1;if(a===gi.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const y=So(u[m],p[m]);if(y!==0)return y;const I=$n(l[u[m]],h[p[m]]);if(I!==0)return I}return q(u.length,p.length)})(r.mapValue,e.mapValue);default:throw M(23264,{le:t})}}function uu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return q(r,e);const t=$t(r),n=$t(e),i=q(t.seconds,n.seconds);return i!==0?i:q(t.nanos,n.nanos)}function hu(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=$n(t[i],n[i]);if(s)return s}return q(t.length,n.length)}function Mn(r){return Co(r)}function Co(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=$t(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Mt(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return $.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Co(s);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of n)s?s=!1:i+=",",i+=`${a}:${Co(t.fields[a])}`;return i+"}"})(r.mapValue):M(61005,{value:r})}function xi(r){switch(Lt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cs(r);return e?16+xi(e):16;case 5:return 2*r.stringValue.length;case 6:return Mt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,s)=>i+xi(s)),0)})(r.arrayValue);case 10:case 11:return(function(n){let i=0;return Bt(n.fields,((s,a)=>{i+=s.length+xi(a)})),i})(r.mapValue);default:throw M(13486,{value:r})}}function du(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ko(r){return!!r&&"integerValue"in r}function Va(r){return!!r&&"arrayValue"in r}function pu(r){return!!r&&"nullValue"in r}function fu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ai(r){return!!r&&"mapValue"in r}function iv(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[bd])===null||t===void 0?void 0:t.stringValue)===wd}function vr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Bt(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=vr(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=vr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function sv(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===rv}/**
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
 */class $e{constructor(e){this.value=e}static empty(){return new $e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ai(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vr(t)}setAll(e){let t=Ee.emptyPath(),n={},i=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,n,i),n={},i=[],t=l.popLast()}a?n[l.lastSegment()]=vr(a):i.push(l.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Ai(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return st(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Ai(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Bt(t,((i,s)=>e[i]=s));for(const i of n)delete e[i]}clone(){return new $e(vr(this.value))}}function Ed(r){const e=[];return Bt(r.fields,((t,n)=>{const i=new Ee([t]);if(Ai(n)){const s=Ed(n.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)})),new Ue(e)}/**
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
 */class Re{constructor(e,t,n,i,s,a,l){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Re(e,0,z.min(),z.min(),z.min(),$e.empty(),0)}static newFoundDocument(e,t,n,i){return new Re(e,1,t,z.min(),n,i,0)}static newNoDocument(e,t){return new Re(e,2,t,z.min(),z.min(),$e.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,z.min(),z.min(),$e.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ji{constructor(e,t){this.position=e,this.inclusive=t}}function mu(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],a=r.position[i];if(s.field.isKeyField()?n=$.comparator($.fromName(a.referenceValue),t.key):n=$n(a,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function gu(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!st(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class qi{constructor(e,t="asc"){this.field=e,this.dir=t}}function ov(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Td{}class fe extends Td{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new lv(e,t,n):t==="array-contains"?new hv(e,n):t==="in"?new dv(e,n):t==="not-in"?new pv(e,n):t==="array-contains-any"?new fv(e,n):new fe(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new cv(e,n):new uv(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison($n(t,this.value)):t!==null&&Lt(this.value)===Lt(t)&&this.matchesComparison($n(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qe extends Td{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Qe(e,t)}matches(e){return Id(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Id(r){return r.op==="and"}function xd(r){return av(r)&&Id(r)}function av(r){for(const e of r.filters)if(e instanceof Qe)return!1;return!0}function Ro(r){if(r instanceof fe)return r.field.canonicalString()+r.op.toString()+Mn(r.value);if(xd(r))return r.filters.map((e=>Ro(e))).join(",");{const e=r.filters.map((t=>Ro(t))).join(",");return`${r.op}(${e})`}}function Ad(r,e){return r instanceof fe?(function(n,i){return i instanceof fe&&n.op===i.op&&n.field.isEqual(i.field)&&st(n.value,i.value)})(r,e):r instanceof Qe?(function(n,i){return i instanceof Qe&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((s,a,l)=>s&&Ad(a,i.filters[l])),!0):!1})(r,e):void M(19439)}function Sd(r){return r instanceof fe?(function(t){return`${t.field.canonicalString()} ${t.op} ${Mn(t.value)}`})(r):r instanceof Qe?(function(t){return t.op.toString()+" {"+t.getFilters().map(Sd).join(" ,")+"}"})(r):"Filter"}class lv extends fe{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class cv extends fe{constructor(e,t){super(e,"in",t),this.keys=Cd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class uv extends fe{constructor(e,t){super(e,"not-in",t),this.keys=Cd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Cd(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((n=>$.fromName(n.referenceValue)))}class hv extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Va(t)&&Pr(t.arrayValue,this.value)}}class dv extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Pr(this.value.arrayValue,t)}}class pv extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Pr(this.value.arrayValue,t)}}class fv extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Va(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>Pr(this.value.arrayValue,n)))}}/**
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
 */class mv{constructor(e,t=null,n=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Pe=null}}function yu(r,e=null,t=[],n=[],i=null,s=null,a=null){return new mv(r,e,t,n,i,s,a)}function Oa(r){const e=B(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>Ro(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(s){return s.field.canonicalString()+s.dir})(n))).join(","),ls(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Mn(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Mn(n))).join(",")),e.Pe=t}return e.Pe}function $a(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!ov(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Ad(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!gu(r.startAt,e.startAt)&&gu(r.endAt,e.endAt)}function Po(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Br{constructor(e,t=null,n=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function gv(r,e,t,n,i,s,a,l){return new Br(r,e,t,n,i,s,a,l)}function Ma(r){return new Br(r)}function _u(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function kd(r){return r.collectionGroup!==null}function br(r){const e=B(r);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ge(Ee.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new qi(s,n))})),t.has(Ee.keyField().canonicalString())||e.Te.push(new qi(Ee.keyField(),n))}return e.Te}function et(r){const e=B(r);return e.Ie||(e.Ie=yv(e,br(r))),e.Ie}function yv(r,e){if(r.limitType==="F")return yu(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new qi(i.field,s)}));const t=r.endAt?new ji(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new ji(r.startAt.position,r.startAt.inclusive):null;return yu(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Do(r,e){const t=r.filters.concat([e]);return new Br(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function No(r,e,t){return new Br(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function us(r,e){return $a(et(r),et(e))&&r.limitType===e.limitType}function Rd(r){return`${Oa(et(r))}|lt:${r.limitType}`}function Tn(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((i=>Sd(i))).join(", ")}]`),ls(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((i=>Mn(i))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((i=>Mn(i))).join(",")),`Target(${n})`})(et(r))}; limitType=${r.limitType})`}function hs(r,e){return e.isFoundDocument()&&(function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):$.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)})(r,e)&&(function(n,i){for(const s of br(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(r,e)&&(function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0})(r,e)&&(function(n,i){return!(n.startAt&&!(function(a,l,u){const h=mu(a,l,u);return a.inclusive?h<=0:h<0})(n.startAt,br(n),i)||n.endAt&&!(function(a,l,u){const h=mu(a,l,u);return a.inclusive?h>=0:h>0})(n.endAt,br(n),i))})(r,e)}function _v(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Pd(r){return(e,t)=>{let n=!1;for(const i of br(r)){const s=vv(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function vv(r,e,t){const n=r.field.isKeyField()?$.comparator(e.key,t.key):(function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?$n(u,h):M(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
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
 */class fn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bt(this.inner,((t,n)=>{for(const[i,s]of n)e(i,s)}))}isEmpty(){return fd(this.inner)}size(){return this.innerSize}}/**
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
 */const bv=new ae($.comparator);function mt(){return bv}const Dd=new ae($.comparator);function dr(...r){let e=Dd;for(const t of r)e=e.insert(t.key,t);return e}function Nd(r){let e=Dd;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function tn(){return wr()}function Vd(){return wr()}function wr(){return new fn((r=>r.toString()),((r,e)=>r.isEqual(e)))}const wv=new ae($.comparator),Ev=new ge($.comparator);function W(...r){let e=Ev;for(const t of r)e=e.add(t);return e}const Tv=new ge(q);function Iv(){return Tv}/**
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
 */function La(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ui(e)?"-0":e}}function Od(r){return{integerValue:""+r}}function xv(r,e){return X_(e)?Od(e):La(r,e)}/**
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
 */class ds{constructor(){this._=void 0}}function Av(r,e,t){return r instanceof Dr?(function(i,s){const a={fields:{[yd]:{stringValue:gd},[vd]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Na(s)&&(s=cs(s)),s&&(a.fields[_d]=s),{mapValue:a}})(t,e):r instanceof Nr?Md(r,e):r instanceof Vr?Ld(r,e):(function(i,s){const a=$d(i,s),l=vu(a)+vu(i.Ee);return ko(a)&&ko(i.Ee)?Od(l):La(i.serializer,l)})(r,e)}function Sv(r,e,t){return r instanceof Nr?Md(r,e):r instanceof Vr?Ld(r,e):t}function $d(r,e){return r instanceof Hi?(function(n){return ko(n)||(function(s){return!!s&&"doubleValue"in s})(n)})(e)?e:{integerValue:0}:null}class Dr extends ds{}class Nr extends ds{constructor(e){super(),this.elements=e}}function Md(r,e){const t=Fd(e);for(const n of r.elements)t.some((i=>st(i,n)))||t.push(n);return{arrayValue:{values:t}}}class Vr extends ds{constructor(e){super(),this.elements=e}}function Ld(r,e){let t=Fd(e);for(const n of r.elements)t=t.filter((i=>!st(i,n)));return{arrayValue:{values:t}}}class Hi extends ds{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function vu(r){return ue(r.integerValue||r.doubleValue)}function Fd(r){return Va(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Cv{constructor(e,t){this.field=e,this.transform=t}}function kv(r,e){return r.field.isEqual(e.field)&&(function(n,i){return n instanceof Nr&&i instanceof Nr||n instanceof Vr&&i instanceof Vr?On(n.elements,i.elements,st):n instanceof Hi&&i instanceof Hi?st(n.Ee,i.Ee):n instanceof Dr&&i instanceof Dr})(r.transform,e.transform)}class Rv{constructor(e,t){this.version=e,this.transformResults=t}}class qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Si(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class ps{}function Ud(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Fa(r.key,qe.none()):new jr(r.key,r.data,qe.none());{const t=r.data,n=$e.empty();let i=new ge(Ee.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new jt(r.key,n,new Ue(i.toArray()),qe.none())}}function Pv(r,e,t){r instanceof jr?(function(i,s,a){const l=i.value.clone(),u=wu(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(r,e,t):r instanceof jt?(function(i,s,a){if(!Si(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=wu(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(zd(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(r,e,t):(function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Er(r,e,t,n){return r instanceof jr?(function(s,a,l,u){if(!Si(s.precondition,a))return l;const h=s.value.clone(),p=Eu(s.fieldTransforms,u,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(r,e,t,n):r instanceof jt?(function(s,a,l,u){if(!Si(s.precondition,a))return l;const h=Eu(s.fieldTransforms,u,a),p=a.data;return p.setAll(zd(s)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((m=>m.field)))})(r,e,t,n):(function(s,a,l){return Si(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(r,e,t)}function Dv(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=$d(n.transform,i||null);s!=null&&(t===null&&(t=$e.empty()),t.set(n.field,s))}return t||null}function bu(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&On(n,i,((s,a)=>kv(s,a)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class jr extends ps{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jt extends ps{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zd(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function wu(r,e,t){const n=new Map;J(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let i=0;i<t.length;i++){const s=r[i],a=s.transform,l=e.data.field(s.field);n.set(s.field,Sv(a,l,t[i]))}return n}function Eu(r,e,t){const n=new Map;for(const i of r){const s=i.transform,a=t.data.field(i.field);n.set(i.field,Av(s,a,e))}return n}class Fa extends ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nv extends ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Vv{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Pv(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Er(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Er(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Vd();return this.mutations.forEach((i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=Ud(a,l);u!==null&&n.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(z.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),W())}isEqual(e){return this.batchId===e.batchId&&On(this.mutations,e.mutations,((t,n)=>bu(t,n)))&&On(this.baseMutations,e.baseMutations,((t,n)=>bu(t,n)))}}class Ua{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){J(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let i=(function(){return wv})();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new Ua(e,t,n,i)}}/**
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
 */class Ov{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $v{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var pe,K;function Mv(r){switch(r){case C.OK:return M(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function Bd(r){if(r===void 0)return ft("GRPC error has no .code"),C.UNKNOWN;switch(r){case pe.OK:return C.OK;case pe.CANCELLED:return C.CANCELLED;case pe.UNKNOWN:return C.UNKNOWN;case pe.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case pe.INTERNAL:return C.INTERNAL;case pe.UNAVAILABLE:return C.UNAVAILABLE;case pe.UNAUTHENTICATED:return C.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case pe.NOT_FOUND:return C.NOT_FOUND;case pe.ALREADY_EXISTS:return C.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return C.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case pe.ABORTED:return C.ABORTED;case pe.OUT_OF_RANGE:return C.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return C.UNIMPLEMENTED;case pe.DATA_LOSS:return C.DATA_LOSS;default:return M(39323,{code:r})}}(K=pe||(pe={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Lv=new Rt([4294967295,4294967295],0);function Tu(r){const e=ud().encode(r),t=new nd;return t.update(e),new Uint8Array(t.digest())}function Iu(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Rt([t,n],0),new Rt([i,s],0)]}class za{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new pr(`Invalid padding: ${t}`);if(n<0)throw new pr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new pr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new pr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Rt.fromNumber(this.fe)}pe(e,t,n){let i=e.add(t.multiply(Rt.fromNumber(n)));return i.compare(Lv)===1&&(i=new Rt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Tu(e),[n,i]=Iu(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(n,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new za(s,i,t);return n.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=Tu(e),[n,i]=Iu(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(n,i,s);this.we(a)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class pr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fs{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,qr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new fs(z.min(),i,new ae(q),mt(),W())}}class qr{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new qr(n,t,W(),W(),W())}}/**
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
 */class Ci{constructor(e,t,n,i){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=i}}class jd{constructor(e,t){this.targetId=e,this.De=t}}class qd{constructor(e,t,n=Te.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class xu{constructor(){this.ve=0,this.Ce=Au(),this.Fe=Te.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=W(),t=W(),n=W();return this.Ce.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:M(38017,{changeType:s})}})),new qr(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=Au()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,J(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Fv{constructor(e){this.We=e,this.Ge=new Map,this.ze=mt(),this.je=yi(),this.Je=yi(),this.He=new ae(q)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:M(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((n,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,n=e.De.count,i=this.st(t);if(i){const s=i.target;if(Po(s))if(n===0){const a=new $(s.path);this.Xe(t,a,Re.newNoDocument(a,z.min()))}else J(n===1,20013,{expectedCount:n});else{const a=this.ot(t);if(a!==n){const l=this._t(e),u=l?this.ut(l,e,a):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=Mt(n).toUint8Array()}catch(u){if(u instanceof md)return Vt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new za(a,i,s)}catch(u){return Vt(u instanceof pr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let i=0;return n.forEach((s=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,s,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((s,a)=>{const l=this.st(a);if(l){if(s.current&&Po(l.target)){const u=new $(l.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Re.newNoDocument(u,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}}));let n=W();this.Je.forEach(((s,a)=>{let l=!0;a.forEachWhile((u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(n=n.add(s))})),this.ze.forEach(((s,a)=>a.setReadTime(e)));const i=new fs(e,t,this.He,this.ze,n);return this.ze=mt(),this.je=yi(),this.Je=yi(),this.He=new ae(q),i}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new xu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ge(q),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ge(q),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new xu),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function yi(){return new ae($.comparator)}function Au(){return new ae($.comparator)}const Uv={asc:"ASCENDING",desc:"DESCENDING"},zv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bv={and:"AND",or:"OR"};class jv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vo(r,e){return r.useProto3Json||ls(e)?e:{value:e}}function Gi(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hd(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function qv(r,e){return Gi(r,e.toTimestamp())}function tt(r){return J(!!r,49232),z.fromTimestamp((function(t){const n=$t(t);return new ie(n.seconds,n.nanos)})(r))}function Ba(r,e){return Oo(r,e).canonicalString()}function Oo(r,e){const t=(function(i){return new ne(["projects",i.projectId,"databases",i.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Gd(r){const e=ne.fromString(r);return J(Jd(e),10190,{key:e.toString()}),e}function $o(r,e){return Ba(r.databaseId,e.path)}function oo(r,e){const t=Gd(e);if(t.get(1)!==r.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new $(Kd(t))}function Wd(r,e){return Ba(r.databaseId,e)}function Hv(r){const e=Gd(r);return e.length===4?ne.emptyPath():Kd(e)}function Mo(r){return new ne(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Kd(r){return J(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Su(r,e,t){return{name:$o(r,e),fields:t.value.mapValue.fields}}function Gv(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:M(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(h,p){return h.useProto3Json?(J(p===void 0||typeof p=="string",58123),Te.fromBase64String(p||"")):(J(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Te.fromUint8Array(p||new Uint8Array))})(r,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const p=h.code===void 0?C.UNKNOWN:Bd(h.code);return new O(p,h.message||"")})(a);t=new qd(n,i,s,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=oo(r,n.document.name),s=tt(n.document.updateTime),a=n.document.createTime?tt(n.document.createTime):z.min(),l=new $e({mapValue:{fields:n.document.fields}}),u=Re.newFoundDocument(i,s,a,l),h=n.targetIds||[],p=n.removedTargetIds||[];t=new Ci(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=oo(r,n.document),s=n.readTime?tt(n.readTime):z.min(),a=Re.newNoDocument(i,s),l=n.removedTargetIds||[];t=new Ci([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=oo(r,n.document),s=n.removedTargetIds||[];t=new Ci([],s,i,null)}else{if(!("filter"in e))return M(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,a=new $v(i,s),l=n.targetId;t=new jd(l,a)}}return t}function Wv(r,e){let t;if(e instanceof jr)t={update:Su(r,e.key,e.value)};else if(e instanceof Fa)t={delete:$o(r,e.key)};else if(e instanceof jt)t={update:Su(r,e.key,e.data),updateMask:nb(e.fieldMask)};else{if(!(e instanceof Nv))return M(16599,{Rt:e.type});t={verify:$o(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(s,a){const l=a.transform;if(l instanceof Dr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Nr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Vr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Hi)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw M(20930,{transform:a.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:qv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M(27497)})(r,e.precondition)),t}function Kv(r,e){return r&&r.length>0?(J(e!==void 0,14353),r.map((t=>(function(i,s){let a=i.updateTime?tt(i.updateTime):tt(s);return a.isEqual(z.min())&&(a=tt(s)),new Rv(a,i.transformResults||[])})(t,e)))):[]}function Yv(r,e){return{documents:[Wd(r,e.path)]}}function Qv(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Wd(r,i);const s=(function(h){if(h.length!==0)return Qd(Qe.create(h,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const a=(function(h){if(h.length!==0)return h.map((p=>(function(y){return{field:In(y.field),direction:Zv(y.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Vo(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:i}}function Jv(r){let e=Hv(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){J(n===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=(function(m){const y=Yd(m);return y instanceof Qe&&xd(y)?y.getFilters():[y]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((y=>(function(A){return new qi(xn(A.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(A.direction))})(y)))})(t.orderBy));let l=null;t.limit&&(l=(function(m){let y;return y=typeof m=="object"?m.value:m,ls(y)?null:y})(t.limit));let u=null;t.startAt&&(u=(function(m){const y=!!m.before,I=m.values||[];return new ji(I,y)})(t.startAt));let h=null;return t.endAt&&(h=(function(m){const y=!m.before,I=m.values||[];return new ji(I,y)})(t.endAt)),gv(e,i,a,s,l,"F",u,h)}function Xv(r,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yd(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=xn(t.unaryFilter.field);return fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=xn(t.unaryFilter.field);return fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xn(t.unaryFilter.field);return fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xn(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(r):r.fieldFilter!==void 0?(function(t){return fe.create(xn(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Qe.create(t.compositeFilter.filters.map((n=>Yd(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(t.compositeFilter.op))})(r):M(30097,{filter:r})}function Zv(r){return Uv[r]}function eb(r){return zv[r]}function tb(r){return Bv[r]}function In(r){return{fieldPath:r.canonicalString()}}function xn(r){return Ee.fromServerFormat(r.fieldPath)}function Qd(r){return r instanceof fe?(function(t){if(t.op==="=="){if(fu(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NAN"}};if(pu(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fu(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NOT_NAN"}};if(pu(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:In(t.field),op:eb(t.op),value:t.value}}})(r):r instanceof Qe?(function(t){const n=t.getFilters().map((i=>Qd(i)));return n.length===1?n[0]:{compositeFilter:{op:tb(t.op),filters:n}}})(r):M(54877,{filter:r})}function nb(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Jd(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class At{constructor(e,t,n,i,s=z.min(),a=z.min(),l=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new At(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rb{constructor(e){this.gt=e}}function ib(r){const e=Jv({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?No(e,e.limit,"L"):e}/**
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
 */class sb{constructor(){this.Dn=new ob}addToCollectionParentIndex(e,t){return this.Dn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Ot.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Ot.min())}updateCollectionGroup(e,t,n){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class ob{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ge(ne.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ge(ne.comparator)).toArray()}}/**
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
 */const Cu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xd=41943040;class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(Xd,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);/**
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
 */class Ln{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ln(0)}static ur(){return new Ln(-1)}}/**
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
 */const ku="LruGarbageCollector",ab=1048576;function Ru([r,e],[t,n]){const i=q(r,t);return i===0?q(e,n):i}class lb{constructor(e){this.Tr=e,this.buffer=new ge(Ru),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Ru(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cb{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){V(ku,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Hn(t)?V(ku,"Ignoring IndexedDB error during garbage collection: ",t):await qn(t)}await this.Rr(3e5)}))}}class ub{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(as.ue);const n=new lb(t);return this.Vr.forEachTarget(e,(i=>n.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>n.Er(i))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Cu)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cu):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,i,s,a,l,u,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i)))).next((m=>(n=m,l=Date.now(),this.removeTargets(e,n,t)))).next((m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((m=>(h=Date.now(),En()<=G.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-p}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m}))))}}function hb(r,e){return new ub(r,e)}/**
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
 */class db{constructor(){this.changes=new fn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?k.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class pb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class fb{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(n!==null&&Er(n.mutation,i,Ue.empty(),ie.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,W()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=W()){const i=tn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((s=>{let a=dr();return s.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const n=tn();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,W())))}populateOverlays(e,t,n){const i=[];return n.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,n,i){let s=mt();const a=wr(),l=(function(){return wr()})();return t.forEach(((u,h)=>{const p=n.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof jt)?s=s.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),Er(p.mutation,h,p.mutation.getFieldMask(),ie.now())):a.set(h.key,Ue.empty())})),this.recalculateAndSaveOverlays(e,s).next((u=>(u.forEach(((h,p)=>a.set(h,p))),t.forEach(((h,p)=>{var m;return l.set(h,new pb(p,(m=a.get(h))!==null&&m!==void 0?m:null))})),l)))}recalculateAndSaveOverlays(e,t){const n=wr();let i=new ae(((a,l)=>a-l)),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let p=n.get(u)||Ue.empty();p=l.applyToLocalView(h,p),n.set(u,p);const m=(i.get(l.batchId)||W()).add(u);i=i.insert(l.batchId,m)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,m=Vd();p.forEach((y=>{if(!s.has(y)){const I=Ud(t.get(y),n.get(y));I!==null&&m.set(y,I),s=s.add(y)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return k.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,i){return(function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):kd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):k.resolve(tn());let l=Cr,u=s;return a.next((h=>k.forEach(h,((p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?k.resolve():this.remoteDocumentCache.getEntry(e,p).next((y=>{u=u.insert(p,y)}))))).next((()=>this.populateOverlays(e,h,s))).next((()=>this.computeViews(e,u,h,W()))).next((p=>({batchId:l,changes:Nd(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next((n=>{let i=dr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let a=dr();return this.indexManager.getCollectionParents(e,s).next((l=>k.forEach(l,(u=>{const h=(function(m,y){return new Br(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next((p=>{p.forEach(((m,y)=>{a=a.insert(m,y)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i)))).next((a=>{s.forEach(((u,h)=>{const p=h.getKey();a.get(p)===null&&(a=a.insert(p,Re.newInvalidDocument(p)))}));let l=dr();return a.forEach(((u,h)=>{const p=s.get(u);p!==void 0&&Er(p.mutation,h,Ue.empty(),ie.now()),hs(t,h)&&(l=l.insert(u,h))})),l}))}}/**
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
 */class mb{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return k.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:tt(i.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:ib(i.bundledQuery),readTime:tt(i.readTime)}})(t)),k.resolve()}}/**
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
 */class gb{constructor(){this.overlays=new ae($.comparator),this.kr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const n=tn();return k.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&n.set(i,s)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((i,s)=>{this.wt(e,t,s)})),k.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.kr.delete(n)),k.resolve()}getOverlaysForCollection(e,t,n){const i=tn(),s=t.length+1,a=new $(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>n&&i.set(u.getKey(),u)}return k.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new ae(((h,p)=>h-p));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let p=s.get(h.largestBatchId);p===null&&(p=tn(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=tn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,p)=>l.set(h,p))),!(l.size()>=i)););return k.resolve(l)}wt(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Ov(t,n));let s=this.kr.get(t);s===void 0&&(s=W(),this.kr.set(t,s)),this.kr.set(t,s.add(n.key))}}/**
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
 */class yb{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class ja{constructor(){this.qr=new ge(ye.Qr),this.$r=new ge(ye.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new ye(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new ye(e,t))}Gr(e,t){e.forEach((n=>this.removeReference(n,t)))}zr(e){const t=new $(new ne([])),n=new ye(t,e),i=new ye(t,e+1),s=[];return this.$r.forEachInRange([n,i],(a=>{this.Wr(a),s.push(a.key)})),s}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new $(new ne([])),n=new ye(t,e),i=new ye(t,e+1);let s=W();return this.$r.forEachInRange([n,i],(a=>{s=s.add(a.key)})),s}containsKey(e){const t=new ye(e,0),n=this.qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ye{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return $.comparator(e.key,t.key)||q(e.Hr,t.Hr)}static Ur(e,t){return q(e.Hr,t.Hr)||$.comparator(e.key,t.key)}}/**
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
 */class _b{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ge(ye.Qr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Vv(s,t,n,i);this.mutationQueue.push(a);for(const l of i)this.Yr=this.Yr.add(new ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Xr(n),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Da:this.er-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ye(t,0),i=new ye(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([n,i],(a=>{const l=this.Zr(a.Hr);s.push(l)})),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ge(q);return t.forEach((i=>{const s=new ye(i,0),a=new ye(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],(l=>{n=n.add(l.Hr)}))})),k.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;$.isDocumentKey(s)||(s=s.child(""));const a=new ye(new $(s),0);let l=new ge(q);return this.Yr.forEachWhile((u=>{const h=u.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)}),a),k.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((n=>{const i=this.Zr(n);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){J(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return k.forEach(t.mutations,(i=>{const s=new ye(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=n}))}rr(e){}containsKey(e,t){const n=new ye(t,0),i=this.Yr.firstAfterOrEqual(n);return k.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class vb{constructor(e){this.ni=e,this.docs=(function(){return new ae($.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return k.resolve(n?n.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let n=mt();return t.forEach((i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():Re.newInvalidDocument(i))})),k.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=mt();const a=t.path,l=new $(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||K_(W_(p),n)<=0||(i.has(p.key)||hs(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,t,n,i){M(9500)}ri(e,t){return k.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new bb(this)}getSize(e){return k.resolve(this.size)}}class bb extends db{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(n)})),k.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class wb{constructor(e){this.persistence=e,this.ii=new fn((t=>Oa(t)),$a),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.si=0,this.oi=new ja,this.targetCount=0,this._i=Ln.ar()}forEachTarget(e,t){return this.ii.forEach(((n,i)=>t(i))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),k.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ln(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.hr(t),k.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),k.waitFor(s).next((()=>i))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return k.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),k.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((a=>{s.push(i.markPotentiallyOrphaned(e,a))})),k.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return k.resolve(n)}containsKey(e,t){return k.resolve(this.oi.containsKey(t))}}/**
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
 */class Zd{constructor(e,t){this.ai={},this.overlays={},this.ui=new as(0),this.ci=!1,this.ci=!0,this.li=new yb,this.referenceDelegate=e(this),this.hi=new wb(this),this.indexManager=new sb,this.remoteDocumentCache=(function(i){return new vb(i)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new rb(t),this.Ti=new mb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new _b(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const i=new Eb(this.ui.next());return this.referenceDelegate.Ii(),n(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return k.or(Object.values(this.ai).map((n=>()=>n.containsKey(e,t))))}}class Eb extends Q_{constructor(e){super(),this.currentSequenceNumber=e}}class qa{constructor(e){this.persistence=e,this.Ai=new ja,this.Ri=null}static Vi(e){return new qa(e)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),k.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.mi.add(s.toString())))})).next((()=>n.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.mi,(n=>{const i=$.fromPath(n);return this.fi(e,i).next((s=>{s||t.removeEntry(i,z.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((n=>{n?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return k.or([()=>k.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Wi{constructor(e,t){this.persistence=e,this.gi=new fn((n=>Z_(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=hb(this,t)}static Vi(e,t){return new Wi(e,t)}Ii(){}di(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}gr(e,t){return k.forEach(this.gi,((n,i)=>this.Sr(e,n,i).next((s=>s?k.resolve():t(i)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(n++,s.removeEntry(a,z.min()))})))).next((()=>s.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),k.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xi(e.data.value)),t}Sr(e,t,n){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return k.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ha{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=i}static Es(e,t){let n=W(),i=W();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ha(e,t.fromCache,n,i)}}/**
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
 */class Tb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ib{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return gm()?8:J_(Pe())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.ps(e,t).next((a=>{s.result=a})).next((()=>{if(!s.result)return this.ys(e,t,i,n).next((a=>{s.result=a}))})).next((()=>{if(s.result)return;const a=new Tb;return this.ws(e,t,a).next((l=>{if(s.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>s.result))}Ss(e,t,n,i){return n.documentReadCount<this.Vs?(En()<=G.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Tn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(En()<=G.DEBUG&&V("QueryEngine","Query:",Tn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(En()<=G.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Tn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,et(t))):k.resolve())}ps(e,t){if(_u(t))return k.resolve(null);let n=et(t);return this.indexManager.getIndexType(e,n).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=No(t,null,"F"),n=et(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const a=W(...s);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,n).next((u=>{const h=this.bs(t,l);return this.Ds(t,h,a,u.readTime)?this.ps(e,No(t,null,"F")):this.vs(e,h,t,u)}))))})))))}ys(e,t,n,i){return _u(t)||i.isEqual(z.min())?k.resolve(null):this.gs.getDocuments(e,n).next((s=>{const a=this.bs(t,s);return this.Ds(t,a,n,i)?k.resolve(null):(En()<=G.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tn(t)),this.vs(e,a,t,G_(i,Cr)).next((l=>l)))}))}bs(e,t){let n=new ge(Pd(e));return t.forEach(((i,s)=>{hs(e,s)&&(n=n.add(s))})),n}Ds(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,n){return En()<=G.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Tn(t)),this.gs.getDocumentsMatchingQuery(e,t,Ot.min(),n)}vs(e,t,n,i){return this.gs.getDocumentsMatchingQuery(e,n,i).next((s=>(t.forEach((a=>{s=s.insert(a.key,a)})),s)))}}/**
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
 */const Ga="LocalStore",xb=3e8;class Ab{constructor(e,t,n,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new ae(q),this.Ms=new fn((s=>Oa(s)),$a),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fb(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Sb(r,e,t,n){return new Ab(r,e,t,n)}async function ep(r,e){const t=B(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next((s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(n)))).next((s=>{const a=[],l=[];let u=W();for(const h of i){a.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of s){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(n,u).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function Cb(r,e){const t=B(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return(function(l,u,h,p){const m=h.batch,y=m.keys();let I=k.resolve();return y.forEach((A=>{I=I.next((()=>p.getEntry(u,A))).next((D=>{const P=h.docVersions.get(A);J(P!==null,48541),D.version.compareTo(P)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),p.addEntry(D)))}))})),I.next((()=>l.mutationQueue.removeMutationBatch(u,m)))})(t,n,e,s).next((()=>s.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(l){let u=W();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(n,i)))}))}function tp(r){const e=B(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function kb(r,e){const t=B(r),n=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const l=[];e.targetChanges.forEach(((p,m)=>{const y=i.get(m);if(!y)return;l.push(t.hi.removeMatchingKeys(s,p.removedDocuments,m).next((()=>t.hi.addMatchingKeys(s,p.addedDocuments,m))));let I=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(Te.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):p.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(p.resumeToken,n)),i=i.insert(m,I),(function(D,P,U){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=xb?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(y,I,p)&&l.push(t.hi.updateTargetData(s,I))}));let u=mt(),h=W();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))})),l.push(Rb(s,a,e.documentUpdates).next((p=>{u=p.Ls,h=p.ks}))),!n.isEqual(z.min())){const p=t.hi.getLastRemoteSnapshotVersion(s).next((m=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,n)));l.push(p)}return k.waitFor(l).next((()=>a.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,u,h))).next((()=>u))})).then((s=>(t.Fs=i,s)))}function Rb(r,e,t){let n=W(),i=W();return t.forEach((s=>n=n.add(s))),e.getEntries(r,n).next((s=>{let a=mt();return t.forEach(((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(z.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):V(Ga,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)})),{Ls:a,ks:i}}))}function Pb(r,e){const t=B(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Da),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Db(r,e){const t=B(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return t.hi.getTargetData(n,e).next((s=>s?(i=s,k.resolve(i)):t.hi.allocateTargetId(n).next((a=>(i=new At(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.hi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=t.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(n.targetId,n),t.Ms.set(e,n.targetId)),n}))}async function Lo(r,e,t){const n=B(r),i=n.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,(a=>n.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!Hn(a))throw a;V(Ga,`Failed to update sequence numbers for target ${e}: ${a}`)}n.Fs=n.Fs.remove(e),n.Ms.delete(i.target)}function Pu(r,e,t){const n=B(r);let i=z.min(),s=W();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,h,p){const m=B(u),y=m.Ms.get(p);return y!==void 0?k.resolve(m.Fs.get(y)):m.hi.getTargetData(h,p)})(n,a,et(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{s=u}))})).next((()=>n.Cs.getDocumentsMatchingQuery(a,e,t?i:z.min(),t?s:W()))).next((l=>(Nb(n,_v(e),l),{documents:l,qs:s})))))}function Nb(r,e,t){let n=r.xs.get(e)||z.min();t.forEach(((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)})),r.xs.set(e,n)}class Du{constructor(){this.activeTargetIds=Iv()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vb{constructor(){this.Fo=new Du,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Du,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ob{xo(e){}shutdown(){}}/**
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
 */const Nu="ConnectivityMonitor";class Vu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){V(Nu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){V(Nu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _i=null;function Fo(){return _i===null?_i=(function(){return 268435456+Math.round(2147483648*Math.random())})():_i++,"0x"+_i.toString(16)}/**
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
 */const ao="RestConnection",$b={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Mb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===zi?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(e,t,n,i,s){const a=Fo(),l=this.Go(e,t.toUriEncodedString());V(ao,`Sending RPC '${e}' ${a}:`,l,n);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(l),p=pn(h);return this.jo(e,l,u,n,p).then((m=>(V(ao,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw Vt(ao,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",n),m}))}Jo(e,t,n,i,s,a){return this.Wo(e,t,n,i,s)}zo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+jn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),n&&n.headers.forEach(((i,s)=>e[s]=i))}Go(e,t){const n=$b[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}/**
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
 */class Lb{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ce="WebChannelConnection";class Fb extends Mb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,i,s){const a=Fo();return new Promise(((l,u)=>{const h=new rd;h.setWithCredentials(!0),h.listenOnce(id.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Ii.NO_ERROR:const m=h.getResponseJson();V(Ce,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case Ii.TIMEOUT:V(Ce,`RPC '${e}' ${a} timed out`),u(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ii.HTTP_ERROR:const y=h.getStatus();if(V(Ce,`RPC '${e}' ${a} failed with status:`,y,"response text:",h.getResponseText()),y>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const A=I==null?void 0:I.error;if(A&&A.status&&A.message){const D=(function(U){const L=U.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(L)>=0?L:C.UNKNOWN})(A.status);u(new O(D,A.message))}else u(new O(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new O(C.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{V(Ce,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(i);V(Ce,`RPC '${e}' ${a} sending request:`,i),h.send(t,"POST",p,n,15)}))}P_(e,t,n){const i=Fo(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ad(),l=od(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const p=s.join("");V(Ce,`Creating RPC '${e}' stream ${i}: ${p}`,u);const m=a.createWebChannel(p,u);this.T_(m);let y=!1,I=!1;const A=new Lb({Ho:P=>{I?V(Ce,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(y||(V(Ce,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),V(Ce,`RPC '${e}' stream ${i} sending:`,P),m.send(P))},Yo:()=>m.close()}),D=(P,U,L)=>{P.listen(U,(j=>{try{L(j)}catch(ee){setTimeout((()=>{throw ee}),0)}}))};return D(m,hr.EventType.OPEN,(()=>{I||(V(Ce,`RPC '${e}' stream ${i} transport opened.`),A.s_())})),D(m,hr.EventType.CLOSE,(()=>{I||(I=!0,V(Ce,`RPC '${e}' stream ${i} transport closed`),A.__(),this.I_(m))})),D(m,hr.EventType.ERROR,(P=>{I||(I=!0,Vt(Ce,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),A.__(new O(C.UNAVAILABLE,"The operation could not be completed")))})),D(m,hr.EventType.MESSAGE,(P=>{var U;if(!I){const L=P.data[0];J(!!L,16349);const j=L,ee=(j==null?void 0:j.error)||((U=j[0])===null||U===void 0?void 0:U.error);if(ee){V(Ce,`RPC '${e}' stream ${i} received error:`,ee);const De=ee.status;let se=(function(_){const w=pe[_];if(w!==void 0)return Bd(w)})(De),b=ee.message;se===void 0&&(se=C.INTERNAL,b="Unknown error status: "+De+" with message "+ee.message),I=!0,A.__(new O(se,b)),m.close()}else V(Ce,`RPC '${e}' stream ${i} received:`,L),A.a_(L)}})),D(l,sd.STAT_EVENT,(P=>{P.stat===Ao.PROXY?V(Ce,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Ao.NOPROXY&&V(Ce,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{A.o_()}),0),A}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function lo(){return typeof document<"u"?document:null}/**
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
 */function ms(r){return new jv(r,!0)}/**
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
 */class np{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-n);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Ou="PersistentStream";class rp{constructor(e,t,n,i,s,a,l,u){this.Fi=e,this.w_=n,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new np(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(ft(t.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.b_===t&&this.W_(n,i)}),(n=>{e((()=>{const i=new O(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)}))}))}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{n((()=>this.G_(i)))})),this.stream.onMessage((i=>{n((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return V(Ou,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(V(Ou,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ub extends rp{constructor(e,t,n,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Gv(this.serializer,e),n=(function(s){if(!("targetChange"in s))return z.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?tt(a.readTime):z.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=Mo(this.serializer),t.addTarget=(function(s,a){let l;const u=a.target;if(l=Po(u)?{documents:Yv(s,u)}:{query:Qv(s,u).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Hd(s,a.resumeToken);const h=Vo(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(z.min())>0){l.readTime=Gi(s,a.snapshotVersion.toTimestamp());const h=Vo(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const n=Xv(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=Mo(this.serializer),t.removeTarget=e,this.k_(t)}}class zb extends rp{constructor(e,t,n,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Kv(e.writeResults,e.commitTime),n=tt(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=Mo(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>Wv(this.serializer,n)))};this.k_(t)}}/**
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
 */class Bb{}class jb extends Bb{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Wo(e,Oo(t,n),i,s,a))).catch((s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(C.UNKNOWN,s.toString())}))}Jo(e,t,n,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,Oo(t,n),i,a,l,s))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(C.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class qb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ft(t),this._a=!1):V("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const dn="RemoteStore";class Hb{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo((a=>{n.enqueueAndForget((async()=>{mn(this)&&(V(dn,"Restarting streams for network reachability change."),await(async function(u){const h=B(u);h.Ia.add(4),await Hr(h),h.Aa.set("Unknown"),h.Ia.delete(4),await gs(h)})(this))}))})),this.Aa=new qb(n,i)}}async function gs(r){if(mn(r))for(const e of r.da)await e(!0)}async function Hr(r){for(const e of r.da)await e(!1)}function ip(r,e){const t=B(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Qa(t)?Ya(t):Gn(t).x_()&&Ka(t,e))}function Wa(r,e){const t=B(r),n=Gn(t);t.Ta.delete(e),n.x_()&&sp(t,e),t.Ta.size===0&&(n.x_()?n.B_():mn(t)&&t.Aa.set("Unknown"))}function Ka(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Gn(r).H_(e)}function sp(r,e){r.Ra.$e(e),Gn(r).Y_(e)}function Ya(r){r.Ra=new Fv({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Gn(r).start(),r.Aa.aa()}function Qa(r){return mn(r)&&!Gn(r).M_()&&r.Ta.size>0}function mn(r){return B(r).Ia.size===0}function op(r){r.Ra=void 0}async function Gb(r){r.Aa.set("Online")}async function Wb(r){r.Ta.forEach(((e,t)=>{Ka(r,e)}))}async function Kb(r,e){op(r),Qa(r)?(r.Aa.la(e),Ya(r)):r.Aa.set("Unknown")}async function Yb(r,e,t){if(r.Aa.set("Online"),e instanceof qd&&e.state===2&&e.cause)try{await(async function(i,s){const a=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ta.delete(l),i.Ra.removeTarget(l))})(r,e)}catch(n){V(dn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ki(r,n)}else if(e instanceof Ci?r.Ra.Ye(e):e instanceof jd?r.Ra.it(e):r.Ra.et(e),!t.isEqual(z.min()))try{const n=await tp(r.localStore);t.compareTo(n)>=0&&await(function(s,a){const l=s.Ra.Pt(a);return l.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.Ta.get(h);p&&s.Ta.set(h,p.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,h)=>{const p=s.Ta.get(u);if(!p)return;s.Ta.set(u,p.withResumeToken(Te.EMPTY_BYTE_STRING,p.snapshotVersion)),sp(s,u);const m=new At(p.target,u,h,p.sequenceNumber);Ka(s,m)})),s.remoteSyncer.applyRemoteEvent(l)})(r,t)}catch(n){V(dn,"Failed to raise snapshot:",n),await Ki(r,n)}}async function Ki(r,e,t){if(!Hn(e))throw e;r.Ia.add(1),await Hr(r),r.Aa.set("Offline"),t||(t=()=>tp(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{V(dn,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await gs(r)}))}function ap(r,e){return e().catch((t=>Ki(r,t,e)))}async function ys(r){const e=B(r),t=Ft(e);let n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Da;for(;Qb(e);)try{const i=await Pb(e.localStore,n);if(i===null){e.Pa.length===0&&t.B_();break}n=i.batchId,Jb(e,i)}catch(i){await Ki(e,i)}lp(e)&&cp(e)}function Qb(r){return mn(r)&&r.Pa.length<10}function Jb(r,e){r.Pa.push(e);const t=Ft(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function lp(r){return mn(r)&&!Ft(r).M_()&&r.Pa.length>0}function cp(r){Ft(r).start()}async function Xb(r){Ft(r).na()}async function Zb(r){const e=Ft(r);for(const t of r.Pa)e.X_(t.mutations)}async function e0(r,e,t){const n=r.Pa.shift(),i=Ua.from(n,e,t);await ap(r,(()=>r.remoteSyncer.applySuccessfulWrite(i))),await ys(r)}async function t0(r,e){e&&Ft(r).Z_&&await(async function(n,i){if((function(a){return Mv(a)&&a!==C.ABORTED})(i.code)){const s=n.Pa.shift();Ft(n).N_(),await ap(n,(()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i))),await ys(n)}})(r,e),lp(r)&&cp(r)}async function $u(r,e){const t=B(r);t.asyncQueue.verifyOperationInProgress(),V(dn,"RemoteStore received new credentials");const n=mn(t);t.Ia.add(3),await Hr(t),n&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await gs(t)}async function n0(r,e){const t=B(r);e?(t.Ia.delete(2),await gs(t)):e||(t.Ia.add(2),await Hr(t),t.Aa.set("Unknown"))}function Gn(r){return r.Va||(r.Va=(function(t,n,i){const s=B(t);return s.ia(),new Ub(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(r.datastore,r.asyncQueue,{Zo:Gb.bind(null,r),e_:Wb.bind(null,r),n_:Kb.bind(null,r),J_:Yb.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Qa(r)?Ya(r):r.Aa.set("Unknown")):(await r.Va.stop(),op(r))}))),r.Va}function Ft(r){return r.ma||(r.ma=(function(t,n,i){const s=B(t);return s.ia(),new zb(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:Xb.bind(null,r),n_:t0.bind(null,r),ea:Zb.bind(null,r),ta:e0.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await ys(r)):(await r.ma.stop(),r.Pa.length>0&&(V(dn,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class Ja{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const a=Date.now()+n,l=new Ja(e,t,a,i,s);return l.start(n),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xa(r,e){if(ft("AsyncQueue",`${e}: ${r}`),Hn(r))return new O(C.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Pn{static emptySet(e){return new Pn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(t,n)=>$.comparator(t.key,n.key),this.keyedMap=dr(),this.sortedSet=new ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Pn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Pn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class Mu{constructor(){this.fa=new ae($.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?e.type!==0&&n.type===3?this.fa=this.fa.insert(t,e):e.type===3&&n.type!==1?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.fa=this.fa.remove(t):e.type===1&&n.type===2?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):M(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Fn{constructor(e,t,n,i,s,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Fn(e,t,Pn.emptySet(t),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&us(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class r0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class i0{constructor(){this.queries=Lu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,n){const i=B(t),s=i.queries;i.queries=Lu(),s.forEach(((a,l)=>{for(const u of l.wa)u.onError(n)}))})(this,new O(C.ABORTED,"Firestore shutting down"))}}function Lu(){return new fn((r=>Rd(r)),us)}async function up(r,e){const t=B(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(n=2):(s=new r0,n=e.ba()?0:1);try{switch(n){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Xa(a,`Initialization of query '${Tn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Za(t)}async function hp(r,e){const t=B(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function s0(r,e){const t=B(r);let n=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.wa)l.Ca(i)&&(n=!0);a.ya=i}}n&&Za(t)}function o0(r,e,t){const n=B(r),i=n.queries.get(e);if(i)for(const s of i.wa)s.onError(t);n.queries.delete(e)}function Za(r){r.Da.forEach((e=>{e.next()}))}var Uo,Fu;(Fu=Uo||(Uo={})).Fa="default",Fu.Cache="cache";class dp{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Fn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const n=t!=="Offline";return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Fn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Uo.Cache}}/**
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
 */class pp{constructor(e){this.key=e}}class fp{constructor(e){this.key=e}}class a0{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=W(),this.mutatedKeys=W(),this.Xa=Pd(e),this.eu=new Pn(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new Mu,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((p,m)=>{const y=i.get(p),I=hs(this.query,m)?m:null,A=!!y&&this.mutatedKeys.has(y.key),D=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;y&&I?y.data.isEqual(I.data)?A!==D&&(n.track({type:3,doc:I}),P=!0):this.iu(y,I)||(n.track({type:2,doc:I}),P=!0,(u&&this.Xa(I,u)>0||h&&this.Xa(I,h)<0)&&(l=!0)):!y&&I?(n.track({type:0,doc:I}),P=!0):y&&!I&&(n.track({type:1,doc:y}),P=!0,(u||h)&&(l=!0)),P&&(I?(a=a.add(I),s=D?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),n.track({type:1,doc:p})}return{eu:a,ru:n,Ds:l,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((p,m)=>(function(I,A){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:P})}};return D(I)-D(A)})(p.type,m.type)||this.Xa(p.doc,m.doc))),this.su(n),i=i!=null&&i;const l=t&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,a.length!==0||h?{snapshot:new Fn(this.query,e.eu,s,a,e.mutatedKeys,u===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Mu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=W(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const t=[];return e.forEach((n=>{this.Za.has(n)||t.push(new fp(n))})),this.Za.forEach((n=>{e.has(n)||t.push(new pp(n))})),t}uu(e){this.Ha=e.qs,this.Za=W();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Fn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const el="SyncEngine";class l0{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class c0{constructor(e){this.key=e,this.lu=!1}}class u0{constructor(e,t,n,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new fn((l=>Rd(l)),us),this.Tu=new Map,this.Iu=new Set,this.du=new ae($.comparator),this.Eu=new Map,this.Au=new ja,this.Ru={},this.Vu=new Map,this.mu=Ln.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function h0(r,e,t=!0){const n=bp(r);let i;const s=n.Pu.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await mp(n,e,t,!0),i}async function d0(r,e){const t=bp(r);await mp(t,e,!0,!1)}async function mp(r,e,t,n){const i=await Db(r.localStore,et(e)),s=i.targetId,a=r.sharedClientState.addLocalQueryTarget(s,t);let l;return n&&(l=await p0(r,e,s,a==="current",i.resumeToken)),r.isPrimaryClient&&t&&ip(r.remoteStore,i),l}async function p0(r,e,t,n,i){r.gu=(m,y,I)=>(async function(D,P,U,L){let j=P.view.nu(U);j.Ds&&(j=await Pu(D.localStore,P.query,!1).then((({documents:b})=>P.view.nu(b,j))));const ee=L&&L.targetChanges.get(P.targetId),De=L&&L.targetMismatches.get(P.targetId)!=null,se=P.view.applyChanges(j,D.isPrimaryClient,ee,De);return zu(D,P.targetId,se._u),se.snapshot})(r,m,y,I);const s=await Pu(r.localStore,e,!0),a=new a0(e,s.qs),l=a.nu(s.documents),u=qr.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=a.applyChanges(l,r.isPrimaryClient,u);zu(r,t,h._u);const p=new l0(e,t,a);return r.Pu.set(e,p),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),h.snapshot}async function f0(r,e,t){const n=B(r),i=n.Pu.get(e),s=n.Tu.get(i.targetId);if(s.length>1)return n.Tu.set(i.targetId,s.filter((a=>!us(a,e)))),void n.Pu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Lo(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Wa(n.remoteStore,i.targetId),zo(n,i.targetId)})).catch(qn)):(zo(n,i.targetId),await Lo(n.localStore,i.targetId,!0))}async function m0(r,e){const t=B(r),n=t.Pu.get(e),i=t.Tu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Wa(t.remoteStore,n.targetId))}async function g0(r,e,t){const n=T0(r);try{const i=await(function(a,l){const u=B(a),h=ie.now(),p=l.reduce(((I,A)=>I.add(A.key)),W());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",(I=>{let A=mt(),D=W();return u.Os.getEntries(I,p).next((P=>{A=P,A.forEach(((U,L)=>{L.isValidDocument()||(D=D.add(U))}))})).next((()=>u.localDocuments.getOverlayedDocuments(I,A))).next((P=>{m=P;const U=[];for(const L of l){const j=Dv(L,m.get(L.key).overlayedDocument);j!=null&&U.push(new jt(L.key,j,Ed(j.value.mapValue),qe.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,U,l)})).next((P=>{y=P;const U=P.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(I,P.batchId,U)}))})).then((()=>({batchId:y.batchId,changes:Nd(m)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),(function(a,l,u){let h=a.Ru[a.currentUser.toKey()];h||(h=new ae(q)),h=h.insert(l,u),a.Ru[a.currentUser.toKey()]=h})(n,i.batchId,t),await Gr(n,i.changes),await ys(n.remoteStore)}catch(i){const s=Xa(i,"Failed to persist write");t.reject(s)}}async function gp(r,e){const t=B(r);try{const n=await kb(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const a=t.Eu.get(s);a&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?J(a.lu,14607):i.removedDocuments.size>0&&(J(a.lu,42227),a.lu=!1))})),await Gr(t,n,e)}catch(n){await qn(n)}}function Uu(r,e,t){const n=B(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Pu.forEach(((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const u=B(a);u.onlineState=l;let h=!1;u.queries.forEach(((p,m)=>{for(const y of m.wa)y.va(l)&&(h=!0)})),h&&Za(u)})(n.eventManager,e),i.length&&n.hu.J_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function y0(r,e,t){const n=B(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Eu.get(e),s=i&&i.key;if(s){let a=new ae($.comparator);a=a.insert(s,Re.newNoDocument(s,z.min()));const l=W().add(s),u=new fs(z.min(),new Map,new ae(q),a,l);await gp(n,u),n.du=n.du.remove(s),n.Eu.delete(e),tl(n)}else await Lo(n.localStore,e,!1).then((()=>zo(n,e,t))).catch(qn)}async function _0(r,e){const t=B(r),n=e.batch.batchId;try{const i=await Cb(t.localStore,e);_p(t,n,null),yp(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Gr(t,i)}catch(i){await qn(i)}}async function v0(r,e,t){const n=B(r);try{const i=await(function(a,l){const u=B(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next((m=>(J(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(h,m)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p))).next((()=>u.localDocuments.getDocuments(h,p)))}))})(n.localStore,e);_p(n,e,t),yp(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Gr(n,i)}catch(i){await qn(i)}}function yp(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function _p(r,e,t){const n=B(r);let i=n.Ru[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ru[n.currentUser.toKey()]=i}}function zo(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Tu.get(e))r.Pu.delete(n),t&&r.hu.pu(n,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((n=>{r.Au.containsKey(n)||vp(r,n)}))}function vp(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Wa(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),tl(r))}function zu(r,e,t){for(const n of t)n instanceof pp?(r.Au.addReference(n.key,e),b0(r,n)):n instanceof fp?(V(el,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,e),r.Au.containsKey(n.key)||vp(r,n.key)):M(19791,{yu:n})}function b0(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Iu.has(n)||(V(el,"New document in limbo: "+t),r.Iu.add(n),tl(r))}function tl(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new $(ne.fromString(e)),n=r.mu.next();r.Eu.set(n,new c0(t)),r.du=r.du.insert(t,n),ip(r.remoteStore,new At(et(Ma(t.path)),n,"TargetPurposeLimboResolution",as.ue))}}async function Gr(r,e,t){const n=B(r),i=[],s=[],a=[];n.Pu.isEmpty()||(n.Pu.forEach(((l,u)=>{a.push(n.gu(u,e,t).then((h=>{var p;if((h||t)&&n.isPrimaryClient){const m=h?!h.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Ha.Es(u.targetId,h);s.push(m)}})))})),await Promise.all(a),n.hu.J_(i),await(async function(u,h){const p=B(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>k.forEach(h,(y=>k.forEach(y.Is,(I=>p.persistence.referenceDelegate.addReference(m,y.targetId,I))).next((()=>k.forEach(y.ds,(I=>p.persistence.referenceDelegate.removeReference(m,y.targetId,I)))))))))}catch(m){if(!Hn(m))throw m;V(Ga,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const I=p.Fs.get(y),A=I.snapshotVersion,D=I.withLastLimboFreeSnapshotVersion(A);p.Fs=p.Fs.insert(y,D)}}})(n.localStore,s))}async function w0(r,e){const t=B(r);if(!t.currentUser.isEqual(e)){V(el,"User change. New user:",e.toKey());const n=await ep(t.localStore,e);t.currentUser=e,(function(s,a){s.Vu.forEach((l=>{l.forEach((u=>{u.reject(new O(C.CANCELLED,a))}))})),s.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Gr(t,n.Bs)}}function E0(r,e){const t=B(r),n=t.Eu.get(e);if(n&&n.lu)return W().add(n.key);{let i=W();const s=t.Tu.get(e);if(!s)return i;for(const a of s){const l=t.Pu.get(a);i=i.unionWith(l.view.tu)}return i}}function bp(r){const e=B(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=gp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=E0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y0.bind(null,e),e.hu.J_=s0.bind(null,e.eventManager),e.hu.pu=o0.bind(null,e.eventManager),e}function T0(r){const e=B(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=v0.bind(null,e),e}class Yi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ms(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Sb(this.persistence,new Ib,e.initialUser,this.serializer)}Du(e){return new Zd(qa.Vi,this.serializer)}bu(e){return new Vb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yi.provider={build:()=>new Yi};class I0 extends Yi{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){J(this.persistence.referenceDelegate instanceof Wi,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new cb(n,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new Zd((n=>Wi.Vi(n,t)),this.serializer)}}class Bo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Uu(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=w0.bind(null,this.syncEngine),await n0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new i0})()}createDatastore(e){const t=ms(e.databaseInfo.databaseId),n=(function(s){return new Fb(s)})(e.databaseInfo);return(function(s,a,l,u){return new jb(s,a,l,u)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,i,s,a,l){return new Hb(n,i,s,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Uu(this.syncEngine,t,0)),(function(){return Vu.C()?new Vu:new Ob})())}createSyncEngine(e,t){return(function(i,s,a,l,u,h,p){const m=new u0(i,s,a,l,u,h);return p&&(m.fu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=B(i);V(dn,"RemoteStore shutting down."),s.Ia.add(5),await Hr(s),s.Ea.shutdown(),s.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Bo.provider={build:()=>new Bo};/**
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
 */class wp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ft("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ut="FirestoreClient";class x0{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=ke.UNAUTHENTICATED,this.clientId=Pa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(async a=>{V(Ut,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(V(Ut,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Xa(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function co(r,e){r.asyncQueue.verifyOperationInProgress(),V(Ut,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await ep(e.localStore,i),n=i)})),e.persistence.setDatabaseDeletedListener((()=>{Vt("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{V("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Vt("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),r._offlineComponents=e}async function Bu(r,e){r.asyncQueue.verifyOperationInProgress();const t=await A0(r);V(Ut,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>$u(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>$u(e.remoteStore,i))),r._onlineComponents=e}async function A0(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(Ut,"Using user provided OfflineComponentProvider");try{await co(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Vt("Error using user provided cache. Falling back to memory cache: "+t),await co(r,new Yi)}}else V(Ut,"Using default OfflineComponentProvider"),await co(r,new I0(void 0));return r._offlineComponents}async function Ep(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(Ut,"Using user provided OnlineComponentProvider"),await Bu(r,r._uninitializedComponentsProvider._online)):(V(Ut,"Using default OnlineComponentProvider"),await Bu(r,new Bo))),r._onlineComponents}function S0(r){return Ep(r).then((e=>e.syncEngine))}async function jo(r){const e=await Ep(r),t=e.eventManager;return t.onListen=h0.bind(null,e.syncEngine),t.onUnlisten=f0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=d0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=m0.bind(null,e.syncEngine),t}function C0(r,e,t={}){const n=new Pt;return r.asyncQueue.enqueueAndForget((async()=>(function(s,a,l,u,h){const p=new wp({next:y=>{p.Ou(),a.enqueueAndForget((()=>hp(s,m))),y.fromCache&&u.source==="server"?h.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new dp(l,p,{includeMetadataChanges:!0,ka:!0});return up(s,m)})(await jo(r),r.asyncQueue,e,t,n))),n.promise}/**
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
 */function Tp(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const ju=new Map;/**
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
 */const Ip="firestore.googleapis.com",qu=!0;class Hu{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ip,this.ssl=qu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:qu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ab)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}H_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tp((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _s{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new $_;switch(n.type){case"firstParty":return new U_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=ju.get(t);n&&(V("ComponentProvider","Removing Datastore"),ju.delete(t),n.terminate())})(this),Promise.resolve()}}function k0(r,e,t,n={}){var i;r=je(r,_s);const s=pn(e),a=r._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:r._getEmulatorOptions()}),u=`${e}:${t}`;s&&(fa(`https://${u}`),ma("Firestore",!0)),a.host!==Ip&&a.host!==u&&Vt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:u,ssl:s,emulatorOptions:n});if(!ln(h,l)&&(r._setSettings(h),n.mockUserToken)){let p,m;if(typeof n.mockUserToken=="string")p=n.mockUserToken,m=ke.MOCK_USER;else{p=am(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const y=n.mockUserToken.sub||n.mockUserToken.user_id;if(!y)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ke(y)}r._authCredentials=new M_(new cd(p,m))}}/**
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
 */class gn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new gn(this.firestore,e,this._query)}}class he{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}toJSON(){return{type:he._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(zr(t,he._jsonSchema))return new he(e,n||null,new $(ne.fromString(t.referencePath)))}}he._jsonSchemaVersion="firestore/documentReference/1.0",he._jsonSchema={type:me("string",he._jsonSchemaVersion),referencePath:me("string")};class Dt extends gn{constructor(e,t,n){super(e,t,Ma(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new $(e))}withConverter(e){return new Dt(this.firestore,e,this._path)}}function Jt(r,e,...t){if(r=de(r),hd("collection","path",e),r instanceof _s){const n=ne.fromString(e,...t);return iu(n),new Dt(r,null,n)}{if(!(r instanceof he||r instanceof Dt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return iu(n),new Dt(r.firestore,null,n)}}function Fe(r,e,...t){if(r=de(r),arguments.length===1&&(e=Pa.newId()),hd("doc","path",e),r instanceof _s){const n=ne.fromString(e,...t);return ru(n),new he(r,null,new $(n))}{if(!(r instanceof he||r instanceof Dt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return ru(n),new he(r.firestore,r instanceof Dt?r.converter:null,new $(n))}}/**
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
 */const Gu="AsyncQueue";class Wu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new np(this,"async_queue_retry"),this.oc=()=>{const n=lo();n&&V(Gu,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=e;const t=lo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=lo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Pt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Hn(e))throw e;V(Gu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((n=>{throw this.tc=n,this.nc=!1,ft("INTERNAL UNHANDLED ERROR: ",Ku(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Ja.createAndSchedule(this,e,t,n,(s=>this.lc(s)));return this.ec.push(i),i}ac(){this.tc&&M(47125,{hc:Ku(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ku(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function Yu(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1})(r,["next","error","complete"])}class zt extends _s{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Wu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wu(e),this._firestoreClient=void 0,await e}}}function R0(r,e){const t=typeof r=="object"?r:_a(),n=typeof r=="string"?r:zi,i=ns(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=yh("firestore");s&&k0(i,...s)}return i}function nl(r){if(r._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||P0(r),r._firestoreClient}function P0(r){var e,t,n;const i=r._freezeSettings(),s=(function(l,u,h,p){return new nv(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Tp(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new x0(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(r._componentsProvider))}/**
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
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(Te.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zr(e,Be._jsonSchema))return Be.fromBase64String(e.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:me("string",Be._jsonSchemaVersion),bytes:me("string")};/**
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
 */class vs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bs{constructor(e){this._methodName=e}}/**
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
 */class nt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nt._jsonSchemaVersion}}static fromJSON(e){if(zr(e,nt._jsonSchema))return new nt(e.latitude,e.longitude)}}nt._jsonSchemaVersion="firestore/geoPoint/1.0",nt._jsonSchema={type:me("string",nt._jsonSchemaVersion),latitude:me("number"),longitude:me("number")};/**
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
 */class rt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:rt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zr(e,rt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new rt(e.vectorValues);throw new O(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rt._jsonSchemaVersion="firestore/vectorValue/1.0",rt._jsonSchema={type:me("string",rt._jsonSchemaVersion),vectorValues:me("object")};/**
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
 */const D0=/^__.*__$/;class N0{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new jt(e,this.data,this.fieldMask,t,this.fieldTransforms):new jr(e,this.data,t,this.fieldTransforms)}}class xp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new jt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ap(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:r})}}class rl{constructor(e,t,n,i,s,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new rl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.fc(e),i}gc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Qi(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ap(this.Ec)&&D0.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class V0{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ms(e)}Dc(e,t,n,i=!1){return new rl({Ec:e,methodName:t,bc:n,path:Ee.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ws(r){const e=r._freezeSettings(),t=ms(r._databaseId);return new V0(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Sp(r,e,t,n,i,s={}){const a=r.Dc(s.merge||s.mergeFields?2:0,e,t,i);sl("Data must be an object, but it was:",a,n);const l=Cp(n,a);let u,h;if(s.merge)u=new Ue(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const y=qo(e,m,t);if(!a.contains(y))throw new O(C.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Rp(p,y)||p.push(y)}u=new Ue(p),h=a.fieldTransforms.filter((m=>u.covers(m.field)))}else u=null,h=a.fieldTransforms;return new N0(new $e(l),u,h)}class Es extends bs{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Es}}class il extends bs{_toFieldTransform(e){return new Cv(e.path,new Dr)}isEqual(e){return e instanceof il}}function O0(r,e,t,n){const i=r.Dc(1,e,t);sl("Data must be an object, but it was:",i,n);const s=[],a=$e.empty();Bt(n,((u,h)=>{const p=ol(e,u,t);h=de(h);const m=i.gc(p);if(h instanceof Es)s.push(p);else{const y=Wr(h,m);y!=null&&(s.push(p),a.set(p,y))}}));const l=new Ue(s);return new xp(a,l,i.fieldTransforms)}function $0(r,e,t,n,i,s){const a=r.Dc(1,e,t),l=[qo(e,n,t)],u=[i];if(s.length%2!=0)throw new O(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(qo(e,s[y])),u.push(s[y+1]);const h=[],p=$e.empty();for(let y=l.length-1;y>=0;--y)if(!Rp(h,l[y])){const I=l[y];let A=u[y];A=de(A);const D=a.gc(I);if(A instanceof Es)h.push(I);else{const P=Wr(A,D);P!=null&&(h.push(I),p.set(I,P))}}const m=new Ue(h);return new xp(p,m,a.fieldTransforms)}function M0(r,e,t,n=!1){return Wr(t,r.Dc(n?4:3,e))}function Wr(r,e){if(kp(r=de(r)))return sl("Unsupported field value:",e,r),Cp(r,e);if(r instanceof bs)return(function(n,i){if(!Ap(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(n,i){const s=[];let a=0;for(const l of n){let u=Wr(l,i.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}})(r,e)}return(function(n,i){if((n=de(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xv(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ie.fromDate(n);return{timestampValue:Gi(i.serializer,s)}}if(n instanceof ie){const s=new ie(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Gi(i.serializer,s)}}if(n instanceof nt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Be)return{bytesValue:Hd(i.serializer,n._byteString)};if(n instanceof he){const s=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ba(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof rt)return(function(a,l){return{mapValue:{fields:{[bd]:{stringValue:wd},[Bi]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return La(l.serializer,h)}))}}}}}})(n,i);throw i.wc(`Unsupported field value: ${os(n)}`)})(r,e)}function Cp(r,e){const t={};return fd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(r,((n,i)=>{const s=Wr(i,e.Vc(n));s!=null&&(t[n]=s)})),{mapValue:{fields:t}}}function kp(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ie||r instanceof nt||r instanceof Be||r instanceof he||r instanceof bs||r instanceof rt)}function sl(r,e,t){if(!kp(t)||!dd(t)){const n=os(t);throw n==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+n)}}function qo(r,e,t){if((e=de(e))instanceof vs)return e._internalPath;if(typeof e=="string")return ol(r,e);throw Qi("Field path arguments must be of type string or ",r,!1,void 0,t)}const L0=new RegExp("[~\\*/\\[\\]]");function ol(r,e,t){if(e.search(L0)>=0)throw Qi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new vs(...e.split("."))._internalPath}catch{throw Qi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Qi(r,e,t,n,i){const s=n&&!n.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${n}`),a&&(u+=` in document ${i}`),u+=")"),new O(C.INVALID_ARGUMENT,l+r+u)}function Rp(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class Pp{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new F0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(al("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class F0 extends Pp{data(){return super.data()}}function al(r,e){return typeof e=="string"?ol(r,e):e instanceof vs?e._internalPath:e._delegate._internalPath}/**
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
 */function Dp(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ll{}class U0 extends ll{}function Np(r,e,...t){let n=[];e instanceof ll&&n.push(e),n=n.concat(t),(function(s){const a=s.filter((u=>u instanceof cl)).length,l=s.filter((u=>u instanceof Ts)).length;if(a>1||a>0&&l>0)throw new O(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const i of n)r=i._apply(r);return r}class Ts extends U0{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ts(e,t,n)}_apply(e){const t=this._parse(e);return Op(e._query,t),new gn(e.firestore,e.converter,Do(e._query,t))}_parse(e){const t=ws(e.firestore);return(function(s,a,l,u,h,p,m){let y;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Ju(m,p);const A=[];for(const D of m)A.push(Qu(u,s,D));y={arrayValue:{values:A}}}else y=Qu(u,s,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Ju(m,p),y=M0(l,a,m,p==="in"||p==="not-in");return fe.create(h,p,y)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Vp(r,e,t){const n=e,i=al("where",r);return Ts._create(i,n,t)}class cl extends ll{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new cl(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Qe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let a=i;const l=s.getFlattenedFilters();for(const u of l)Op(a,u),a=Do(a,u)})(e._query,t),new gn(e.firestore,e.converter,Do(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Qu(r,e,t){if(typeof(t=de(t))=="string"){if(t==="")throw new O(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kd(e)&&t.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ne.fromString(t));if(!$.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return du(r,new $(n))}if(t instanceof he)return du(r,t._key);throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${os(t)}.`)}function Ju(r,e){if(!Array.isArray(r)||r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Op(r,e){const t=(function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null})(r.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class z0{convertValue(e,t="none"){switch(Lt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Bt(e,((i,s)=>{n[i]=this.convertValue(s,t)})),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t[Bi].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map((a=>ue(a.doubleValue)));return new rt(s)}convertGeoPoint(e){return new nt(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=cs(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(kr(e));default:return null}}convertTimestamp(e){const t=$t(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ne.fromString(e);J(Jd(n),9688,{name:e});const i=new Rr(n.get(1),n.get(3)),s=new $(n.popFirst(5));return i.isEqual(t)||ft(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function $p(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class fr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sn extends Pp{constructor(e,t,n,i,s,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ki(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(al("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=sn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}sn._jsonSchemaVersion="firestore/documentSnapshot/1.0",sn._jsonSchema={type:me("string",sn._jsonSchemaVersion),bundleSource:me("string","DocumentSnapshot"),bundleName:me("string"),bundle:me("string")};class ki extends sn{data(e={}){return super.data(e)}}class on{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new fr(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ki(this._firestore,this._userDataWriter,n.key,n,new fr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const u=new ki(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>s||l.type!==3)).map((l=>{const u=new ki(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:B0(l.type),doc:u,oldIndex:h,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=on._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function B0(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}on._jsonSchemaVersion="firestore/querySnapshot/1.0",on._jsonSchema={type:me("string",on._jsonSchemaVersion),bundleSource:me("string","QuerySnapshot"),bundleName:me("string"),bundle:me("string")};class ul extends z0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,t)}}function Mp(r){r=je(r,gn);const e=je(r.firestore,zt),t=nl(e),n=new ul(e);return Dp(r._query),C0(t,r._query).then((i=>new on(e,n,r,i)))}function Lp(r,e,t){r=je(r,he);const n=je(r.firestore,zt),i=$p(r.converter,e,t);return Is(n,[Sp(ws(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,qe.none())])}function Xt(r,e,t,...n){r=je(r,he);const i=je(r.firestore,zt),s=ws(i);let a;return a=typeof(e=de(e))=="string"||e instanceof vs?$0(s,"updateDoc",r._key,e,t,n):O0(s,"updateDoc",r._key,e),Is(i,[a.toMutation(r._key,qe.exists(!0))])}function Ho(r){return Is(je(r.firestore,zt),[new Fa(r._key,qe.none())])}function Go(r,e){const t=je(r.firestore,zt),n=Fe(r),i=$p(r.converter,e);return Is(t,[Sp(ws(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,qe.exists(!1))]).then((()=>n))}function An(r,...e){var t,n,i;r=de(r);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Yu(e[a])||(s=e[a++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Yu(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(n=m.error)===null||n===void 0?void 0:n.bind(m),e[a+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,p;if(r instanceof he)h=je(r.firestore,zt),p=Ma(r._key.path),u={next:m=>{e[a]&&e[a](j0(h,r,m))},error:e[a+1],complete:e[a+2]};else{const m=je(r,gn);h=je(m.firestore,zt),p=m._query;const y=new ul(h);u={next:I=>{e[a]&&e[a](new on(h,y,m,I))},error:e[a+1],complete:e[a+2]},Dp(r._query)}return(function(y,I,A,D){const P=new wp(D),U=new dp(I,P,A);return y.asyncQueue.enqueueAndForget((async()=>up(await jo(y),U))),()=>{P.Ou(),y.asyncQueue.enqueueAndForget((async()=>hp(await jo(y),U)))}})(nl(h),p,l,u)}function Is(r,e){return(function(n,i){const s=new Pt;return n.asyncQueue.enqueueAndForget((async()=>g0(await S0(n),i,s))),s.promise})(nl(r),e)}function j0(r,e,t){const n=t.docs.get(e._key),i=new ul(r);return new sn(r,i,e._key,n,new fr(t.hasPendingWrites,t.fromCache),e.converter)}function Ge(){return new il("serverTimestamp")}(function(e,t=!0){(function(i){jn=i})(zn),cn(new Nt("firestore",((n,{instanceIdentifier:i,options:s})=>{const a=n.getProvider("app").getImmediate(),l=new zt(new L_(n.getProvider("auth-internal")),new z_(a,n.getProvider("app-check-internal")),(function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(h.options.projectId,p)})(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l}),"PUBLIC").setMultipleInstances(!0)),Xe(Xc,Zc,e),Xe(Xc,Zc,"esm2017")})();/**
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
 */const q0="type.googleapis.com/google.protobuf.Int64Value",H0="type.googleapis.com/google.protobuf.UInt64Value";function Fp(r,e){const t={};for(const n in r)r.hasOwnProperty(n)&&(t[n]=e(r[n]));return t}function Ji(r){if(r==null)return null;if(r instanceof Number&&(r=r.valueOf()),typeof r=="number"&&isFinite(r)||r===!0||r===!1||Object.prototype.toString.call(r)==="[object String]")return r;if(r instanceof Date)return r.toISOString();if(Array.isArray(r))return r.map(e=>Ji(e));if(typeof r=="function"||typeof r=="object")return Fp(r,e=>Ji(e));throw new Error("Data cannot be encoded in JSON: "+r)}function Un(r){if(r==null)return r;if(r["@type"])switch(r["@type"]){case q0:case H0:{const e=Number(r.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+r);return e}default:throw new Error("Data cannot be decoded from JSON: "+r)}return Array.isArray(r)?r.map(e=>Un(e)):typeof r=="function"||typeof r=="object"?Fp(r,e=>Un(e)):r}/**
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
 */const hl="functions";/**
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
 */const Xu={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Me extends ot{constructor(e,t,n){super(`${hl}/${e}`,t||""),this.details=n,Object.setPrototypeOf(this,Me.prototype)}}function G0(r){if(r>=200&&r<300)return"ok";switch(r){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Xi(r,e){let t=G0(r),n=t,i;try{const s=e&&e.error;if(s){const a=s.status;if(typeof a=="string"){if(!Xu[a])return new Me("internal","internal");t=Xu[a],n=a}const l=s.message;typeof l=="string"&&(n=l),i=s.details,i!==void 0&&(i=Un(i))}}catch{}return t==="ok"?null:new Me(t,n,i)}/**
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
 */class W0{constructor(e,t,n,i){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,ze(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i==null||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),n=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:t,messagingToken:n,appCheckToken:i}}}/**
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
 */const Wo="us-central1",K0=/^data: (.*?)(?:\n|$)/;function Y0(r){let e=null;return{promise:new Promise((t,n)=>{e=setTimeout(()=>{n(new Me("deadline-exceeded","deadline-exceeded"))},r)}),cancel:()=>{e&&clearTimeout(e)}}}class Q0{constructor(e,t,n,i,s=Wo,a=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new W0(e,t,n,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=Wo}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function J0(r,e,t){const n=pn(e);r.emulatorOrigin=`http${n?"s":""}://${e}:${t}`,n&&(fa(r.emulatorOrigin),ma("Functions",!0))}function X0(r,e,t){const n=i=>ew(r,e,i,t||{});return n.stream=(i,s)=>nw(r,e,i,s),n}async function Z0(r,e,t,n){t["Content-Type"]="application/json";let i;try{i=await n(r,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}async function Up(r,e){const t={},n=await r.contextProvider.getContext(e.limitedUseAppCheckTokens);return n.authToken&&(t.Authorization="Bearer "+n.authToken),n.messagingToken&&(t["Firebase-Instance-ID-Token"]=n.messagingToken),n.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=n.appCheckToken),t}function ew(r,e,t,n){const i=r._url(e);return tw(r,i,t,n)}async function tw(r,e,t,n){t=Ji(t);const i={data:t},s=await Up(r,n),a=n.timeout||7e4,l=Y0(a),u=await Promise.race([Z0(e,i,s,r.fetchImpl),l.promise,r.cancelAllRequests]);if(l.cancel(),!u)throw new Me("cancelled","Firebase Functions instance was deleted.");const h=Xi(u.status,u.json);if(h)throw h;if(!u.json)throw new Me("internal","Response is not valid JSON object.");let p=u.json.data;if(typeof p>"u"&&(p=u.json.result),typeof p>"u")throw new Me("internal","Response is missing data field.");return{data:Un(p)}}function nw(r,e,t,n){const i=r._url(e);return rw(r,i,t,n||{})}async function rw(r,e,t,n){var i;t=Ji(t);const s={data:t},a=await Up(r,n);a["Content-Type"]="application/json",a.Accept="text/event-stream";let l;try{l=await r.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:a,signal:n==null?void 0:n.signal})}catch(I){if(I instanceof Error&&I.name==="AbortError"){const D=new Me("cancelled","Request was cancelled.");return{data:Promise.reject(D),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(D)}}}}}}const A=Xi(0,null);return{data:Promise.reject(A),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(A)}}}}}}let u,h;const p=new Promise((I,A)=>{u=I,h=A});(i=n==null?void 0:n.signal)===null||i===void 0||i.addEventListener("abort",()=>{const I=new Me("cancelled","Request was cancelled.");h(I)});const m=l.body.getReader(),y=iw(m,u,h,n==null?void 0:n.signal);return{stream:{[Symbol.asyncIterator](){const I=y.getReader();return{async next(){const{value:A,done:D}=await I.read();return{value:A,done:D}},async return(){return await I.cancel(),{done:!0,value:void 0}}}}},data:p}}function iw(r,e,t,n){const i=(a,l)=>{const u=a.match(K0);if(!u)return;const h=u[1];try{const p=JSON.parse(h);if("result"in p){e(Un(p.result));return}if("message"in p){l.enqueue(Un(p.message));return}if("error"in p){const m=Xi(0,p);l.error(m),t(m);return}}catch(p){if(p instanceof Me){l.error(p),t(p);return}}},s=new TextDecoder;return new ReadableStream({start(a){let l="";return u();async function u(){if(n!=null&&n.aborted){const h=new Me("cancelled","Request was cancelled");return a.error(h),t(h),Promise.resolve()}try{const{value:h,done:p}=await r.read();if(p){l.trim()&&i(l.trim(),a),a.close();return}if(n!=null&&n.aborted){const y=new Me("cancelled","Request was cancelled");a.error(y),t(y),await r.cancel();return}l+=s.decode(h,{stream:!0});const m=l.split(`
`);l=m.pop()||"";for(const y of m)y.trim()&&i(y.trim(),a);return u()}catch(h){const p=h instanceof Me?h:Xi(0,null);a.error(p),t(p)}}},cancel(){return r.cancel()}})}const Zu="@firebase/functions",eh="0.12.9";/**
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
 */const sw="auth-internal",ow="app-check-internal",aw="messaging-internal";function lw(r){const e=(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider(sw),a=t.getProvider(aw),l=t.getProvider(ow);return new Q0(i,s,a,l,n)};cn(new Nt(hl,e,"PUBLIC").setMultipleInstances(!0)),Xe(Zu,eh,r),Xe(Zu,eh,"esm2017")}/**
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
 */function cw(r=_a(),e=Wo){const n=ns(de(r),hl).getImmediate({identifier:e}),i=yh("functions");return i&&uw(n,...i),n}function uw(r,e,t){J0(de(r),e,t)}function zp(r,e,t){return X0(de(r),e,t)}lw();const Ko={apiKey:"AIzaSyA6NKZNLVBeeLrXcLJSXus5M832AxpI2wk",authDomain:"pebblepath-992b6.firebaseapp.com",projectId:"pebblepath-992b6",storageBucket:"pebblepath-992b6.firebasestorage.app",messagingSenderId:"497141667291",appId:"1:497141667291:web:ee84c186db54389d10c3fe"},gt=!!(Ko.apiKey&&Ko.projectId),Or=gt?Eh(Ko):null,te=gt?V_(Or):null,X=gt?R0(Or):null,Yo=gt?cw(Or,"us-central1"):null,Qo=gt?new We:null;Qo&&Qo.setCustomParameters({prompt:"select_account"});const Zi=gt?new We:null;Zi&&Zi.addScope("https://www.googleapis.com/auth/calendar.readonly");let Ri=null,Jo=0;async function Bp(){if(!te||!Zi)throw new Error("Firebase not configured.");if(Ri&&Date.now()<Jo-6e4)return Ri;const r=await ed(te,Zi),e=We.credentialFromResult(r),t=e==null?void 0:e.accessToken;if(!t)throw new Error("Couldn't get a Calendar access token — try again.");return Ri=t,Jo=Date.now()+3600*1e3,t}function hw(){Ri=null,Jo=0}function jp(){if(!te)throw new Error("Firebase not configured — fill in .env first.");return ed(te,Qo)}function qp(){return te?Iy(te):Promise.resolve()}function Hp(r){return te?Ty(te,r):(r(null),()=>{})}const dw=Object.freeze(Object.defineProperty({__proto__:null,addDoc:Go,app:Or,auth:te,clearCalendarToken:hw,collection:Jt,connectGoogleCalendar:Bp,db:X,deleteDoc:Ho,doc:Fe,firebaseApp:Or,functions:Yo,getDocs:Mp,httpsCallable:zp,isConfigured:gt,onAuth:Hp,onSnapshot:An,query:Np,serverTimestamp:Ge,setDoc:Lp,signIn:jp,signOutUser:qp,updateDoc:Xt,where:Vp},Symbol.toStringTag,{value:"Module"}));class pw extends EventTarget{constructor(){super(),this.state={user:null,family:null,children:[],trips:[],events:[]},this._uid=null,this._unsubUser=null,this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this._currentFamilyId=null}get familyId(){return this._currentFamilyId}start(e){!X||!e||this._uid!==e&&(this.stop(),this._uid=e,this._unsubUser=An(Fe(X,"users",e),t=>{var i,s,a,l,u,h;this.state.user=t.exists()?{id:t.id,...t.data()}:null;const n=((i=this.state.user)==null?void 0:i.familyId)??((s=this.state.user)==null?void 0:s.cairnFamilyId)??null;n!==this._currentFamilyId&&(this._currentFamilyId=n,(a=this._unsubFamily)==null||a.call(this),(l=this._unsubChildren)==null||l.call(this),(u=this._unsubTrips)==null||u.call(this),(h=this._unsubEvents)==null||h.call(this),this._unsubFamily=null,this._unsubChildren=null,this._unsubTrips=null,this._unsubEvents=null,this.state.family=null,this.state.children=[],this.state.trips=[],this.state.events=[],n&&this._subscribeFamily(n)),this._emit()}))}_subscribeFamily(e){this._unsubFamily=An(Fe(X,"families",e),t=>{this.state.family=t.exists()?{id:t.id,...t.data()}:null,this._emit()}),this._unsubChildren=An(Jt(X,"families",e,"children"),t=>{this.state.children=t.docs.map(n=>{var s,a;const i=n.data();return{id:n.id,...i,dateOfBirth:((a=(s=i.dateOfBirth)==null?void 0:s.toDate)==null?void 0:a.call(s))??(i.dateOfBirth?new Date(i.dateOfBirth):null)}}),this._emit()}),this._unsubTrips=An(Jt(X,"families",e,"trips"),t=>{this.state.trips=t.docs.map(n=>{var s,a,l,u;const i=n.data();return{id:n.id,...i,start:i.start??"",end:i.end??"",createdAt:((a=(s=i.createdAt)==null?void 0:s.toDate)==null?void 0:a.call(s))??null,updatedAt:((u=(l=i.updatedAt)==null?void 0:l.toDate)==null?void 0:u.call(l))??null}}).sort((n,i)=>String(n.start).localeCompare(String(i.start))),this._emit()},t=>{console.warn("[Cairn] trips subscription error:",t.code,t.message)}),this._unsubEvents=An(Jt(X,"families",e,"familyEvents"),t=>{this.state.events=t.docs.map(n=>{var s,a,l,u;const i=n.data();return{id:n.id,...i,date:i.date??"",createdAt:((a=(s=i.createdAt)==null?void 0:s.toDate)==null?void 0:a.call(s))??null,updatedAt:((u=(l=i.updatedAt)==null?void 0:l.toDate)==null?void 0:u.call(l))??null}}),this._emit()},t=>{console.warn("[Cairn] familyEvents subscription error:",t.code,t.message)})}async saveTrip(e){var h;if(!X||!this._currentFamilyId)throw new Error("No family yet.");const t=(h=te==null?void 0:te.currentUser)==null?void 0:h.uid;if(!t)throw new Error("Not signed in.");const{id:n,createdAt:i,updatedAt:s,...a}=e,l={...a,updatedAt:Ge()};return n?(await Xt(Fe(X,"families",this._currentFamilyId,"trips",n),l),n):(l.createdBy=t,l.createdAt=Ge(),(await Go(Jt(X,"families",this._currentFamilyId,"trips"),l)).id)}async deleteTrip(e){if(!X||!this._currentFamilyId)throw new Error("No family yet.");await Ho(Fe(X,"families",this._currentFamilyId,"trips",e))}async saveEvent(e){var h;if(!X||!this._currentFamilyId)throw new Error("No family yet.");const t=(h=te==null?void 0:te.currentUser)==null?void 0:h.uid;if(!t)throw new Error("Not signed in.");const{id:n,createdAt:i,updatedAt:s,...a}=e,l={...a,updatedAt:Ge()};return n?(await Xt(Fe(X,"families",this._currentFamilyId,"familyEvents",n),l),n):(l.createdBy=t,l.createdAt=Ge(),(await Go(Jt(X,"families",this._currentFamilyId,"familyEvents"),l)).id)}async deleteEvent(e){if(!X||!this._currentFamilyId)throw new Error("No family yet.");await Ho(Fe(X,"families",this._currentFamilyId,"familyEvents",e))}async previewUrl(e){if(!e||typeof e!="string"||!/^https?:\/\//i.test(e.trim()))return null;if(!Yo)throw new Error("Firebase functions not configured.");return(await zp(Yo,"previewUrl")({url:e.trim()})).data}async updateChildBirthday(e,t){if(!X||!this._currentFamilyId)throw new Error("No family yet.");await Xt(Fe(X,"families",this._currentFamilyId,"children",e),{dateOfBirth:t,updatedAt:Ge()})}async findFamilyByCairnCode(e){if(!X)throw new Error("Firebase not configured.");const t=Np(Jt(X,"families"),Vp("cairnInviteCode","==",e)),n=await Mp(t);if(n.empty)return null;const i=n.docs[0];return{id:i.id,...i.data()}}async joinFamilyAsCairn(e){var p,m,y;if(!X)throw new Error("Firebase not configured.");const t=(p=te==null?void 0:te.currentUser)==null?void 0:p.uid;if(!t)throw new Error("Not signed in.");const n=await this.findFamilyByCairnCode(e);if(!n){const I=new Error("Invite code not found.");throw I.code="not-found",I}const i=((y=(m=n.cairnInviteCodeExpiresAt)==null?void 0:m.toDate)==null?void 0:y.call(m))??(n.cairnInviteCodeExpiresAt?new Date(n.cairnInviteCodeExpiresAt):null);if(!i||i<new Date){const I=new Error("This invite code has expired.");throw I.code="expired",I}const s=n.cairnMemberIds??[];if(s.includes(t)||(n.memberIds??[]).includes(t)){const I=new Error("You're already in this family on Cairn.");throw I.code="already-member",I}const a=n.cairnMaxMembers??20;if(s.length>=a){const I=new Error("This family's Cairn ring is full.");throw I.code="full",I}const l=te.currentUser,u=new Date,h={displayName:l.displayName??"",profilePhotoURL:l.photoURL??null,role:"member",joinedAt:u,updatedAt:u};return await Xt(Fe(X,"families",n.id),{cairnMemberIds:[...s,t],[`memberProfiles.${t}`]:h,updatedAt:Ge()}),await Lp(Fe(X,"users",t),{email:l.email??"",displayName:l.displayName??"",profilePhotoURL:l.photoURL??null,cairnFamilyId:n.id,role:"member",notificationPreferences:{milestoneReminders:!0,tipNotifications:!0,schoolDeadlines:!0},createdAt:Ge(),updatedAt:Ge()},{merge:!0}),n.id}async regenerateCairnInviteCode(){if(!X||!this._currentFamilyId)throw new Error("No family yet.");const e=fw(),t=new Date(Date.now()+720*60*60*1e3);return await Xt(Fe(X,"families",this._currentFamilyId),{cairnInviteCode:e,cairnInviteCodeExpiresAt:t,updatedAt:Ge()}),{code:e,expiresAt:t}}stop(){var e,t,n,i,s;(e=this._unsubUser)==null||e.call(this),(t=this._unsubFamily)==null||t.call(this),(n=this._unsubChildren)==null||n.call(this),(i=this._unsubTrips)==null||i.call(this),(s=this._unsubEvents)==null||s.call(this),this._unsubUser=this._unsubFamily=this._unsubChildren=this._unsubTrips=this._unsubEvents=null,this._uid=null,this._currentFamilyId=null,this.state={user:null,family:null,children:[],trips:[],events:[]}}_emit(){this.dispatchEvent(new Event("change"))}}const ce=new pw;function Gp(r,e){if(r!=null&&r.photoURL)return r.photoURL;const t=e==null?void 0:e.profilePhotoURL;return typeof t=="string"&&/^https?:\/\//i.test(t)?t:null}function fw(){const r="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="CAIRN-";for(let t=0;t<4;t++)e+=r[Math.floor(Math.random()*r.length)];return e}function mw(r,e,t,n,i){const s=[];s.push({uid:r,displayName:(e==null?void 0:e.displayName)??(t==null?void 0:t.displayName)??"You",photoURL:Gp(e,t),role:"self",circles:["immediate"],hue:198});const a=(n==null?void 0:n.memberProfiles)??{};for(const[u,h]of Object.entries(a)){if(u===r)continue;const p=h.profilePhotoURL;s.push({uid:u,displayName:h.displayName??"Co-parent",photoURL:typeof p=="string"&&/^https?:\/\//i.test(p)?p:null,role:"co-parent",circles:["immediate"],hue:8})}let l=142;for(const u of i??[]){const h=u.profilePhotoURL;s.push({uid:`child:${u.id}`,displayName:u.name,photoURL:typeof h=="string"&&/^https?:\/\//i.test(h)?h:null,role:"child",circles:["immediate"],hue:l,dateOfBirth:u.dateOfBirth}),l=(l+58)%360}return s}function gw(r){const e=[];for(const t of r??[])t.dateOfBirth&&e.push({id:`bday:${t.id}`,type:"birthday",date:t.dateOfBirth.toISOString().slice(0,10),personIds:[`child:${t.id}`],title:`${t.name}'s birthday`,_childId:t.id,_childName:t.name,recurring:!0});return e}function yw(r,e=new Date){if(!(r!=null&&r.date))return{date:null,yearsElapsed:0};const t=new Date(r.date);if(Number.isNaN(t.getTime()))return{date:null,yearsElapsed:0};if(!r.recurring)return{date:t,yearsElapsed:0};const n=new Date(e.getFullYear(),t.getMonth(),t.getDate()),i=n<new Date(e.getFullYear(),e.getMonth(),e.getDate())?new Date(e.getFullYear()+1,t.getMonth(),t.getDate()):n,s=i.getFullYear()-t.getFullYear();return{date:i,yearsElapsed:s}}const th=["linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)","linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)","linear-gradient(135deg, #3d9b8f 0%, #1f5c54 100%)","linear-gradient(135deg, #d4a843 0%, #c67b5c 55%, #c98a8a 100%)","linear-gradient(135deg, #8b7bb5 0%, #c98a8a 60%, #d4a843 100%)","linear-gradient(135deg, #6b9ac4 0%, #3d9b8f 100%)"];async function _w(r,e=90,t=100){const n=new Date,i=new Date(n.getTime()+e*24*60*60*1e3),s=new URL("https://www.googleapis.com/calendar/v3/calendars/primary/events");s.searchParams.set("timeMin",n.toISOString()),s.searchParams.set("timeMax",i.toISOString()),s.searchParams.set("maxResults",String(t)),s.searchParams.set("singleEvents","true"),s.searchParams.set("orderBy","startTime");const a=await fetch(s.toString(),{headers:{Authorization:`Bearer ${r}`}});if(!a.ok){const u=await a.text();throw new Error(`Google Calendar: ${a.status} ${u.slice(0,160)}`)}return((await a.json()).items??[]).filter(u=>{var h,p;return u.status!=="cancelled"&&(((h=u.start)==null?void 0:h.date)||((p=u.start)==null?void 0:p.dateTime))})}function vw(r,e){var i,s,a,l,u,h,p,m;const t=((i=r.start)==null?void 0:i.date)??((a=(s=r.start)==null?void 0:s.dateTime)==null?void 0:a.slice(0,10))??"";let n=((l=r.end)==null?void 0:l.date)??((h=(u=r.end)==null?void 0:u.dateTime)==null?void 0:h.slice(0,10))??t;if((p=r.start)!=null&&p.date&&((m=r.end)!=null&&m.date)){const y=new Date(n);y.setDate(y.getDate()-1),n=y.toISOString().slice(0,10)}return{title:r.summary||"(untitled)",location:r.location??"",start:t,end:n,attendees:e?[e]:[],viewers:[],visibility:"family",notes:(r.description??"").slice(0,1e3),gcalEventId:r.id,gcalEventLink:r.htmlLink??null}}function bw(r){if(r!=null&&r.coverGradient)return r.coverGradient;const e=((r==null?void 0:r.title)??(r==null?void 0:r.id)??"")+((r==null?void 0:r.location)??"");let t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return th[t%th.length]}class Xo extends oe{constructor(){super(),this.open=!1,this.trip=null,this.members=[],this.currentUid="",this.familyId="",this.busy=!1,this._draft=this._blankDraft(),this._error="",this._previewing=!1,this._previewError="",this._previewDebounce=null,this._lastPreviewedUrl=""}willUpdate(e){(e.has("trip")||e.has("open"))&&(this.open&&(this._draft=this._draftFromTrip(this.trip)),this._error="")}_blankDraft(){const e=new Date().toISOString().slice(0,10);return{id:null,title:"",location:"",start:e,end:e,visibility:"family",attendees:this.currentUid?[this.currentUid]:[],viewers:[],lodgingUrl:"",lodgingHost:"",lodgingTitle:"",flightAirline:"",flightNumber:"",flightDepartAirport:"",flightDepartTime:"",flightArriveAirport:"",flightArriveTime:"",notes:""}}_draftFromTrip(e){return e?{id:e.id??null,title:e.title??"",location:e.location??"",start:e.start??new Date().toISOString().slice(0,10),end:e.end??e.start??new Date().toISOString().slice(0,10),visibility:e.visibility??"family",attendees:Array.isArray(e.attendees)?[...e.attendees]:[],viewers:Array.isArray(e.viewers)?[...e.viewers]:[],lodgingUrl:e.lodgingUrl??"",lodgingHost:e.lodgingHost??"",lodgingTitle:e.lodgingTitle??"",flightAirline:e.flightAirline??"",flightNumber:e.flightNumber??"",flightDepartAirport:e.flightDepartAirport??"",flightDepartTime:e.flightDepartTime??"",flightArriveAirport:e.flightArriveAirport??"",flightArriveTime:e.flightArriveTime??"",coverImage:e.coverImage??"",notes:e.notes??""}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_onLodgingChange(e){this._set("lodgingUrl",e),this._previewError="",this._previewDebounce&&clearTimeout(this._previewDebounce);const t=e.trim();if(!t){this._set("coverImage",""),this._set("lodgingHost",""),this._set("lodgingTitle",""),this._lastPreviewedUrl="";return}/^https?:\/\//i.test(t)&&t!==this._lastPreviewedUrl&&(this._previewDebounce=setTimeout(()=>this._runPreview(t),700))}async _runPreview(e){this._previewing=!0,this._previewError="";try{const t=await ce.previewUrl(e);if(!t)return;this._lastPreviewedUrl=e,this._draft={...this._draft,coverImage:t.image??this._draft.coverImage,lodgingHost:t.siteName??t.host??this._draft.lodgingHost,lodgingTitle:t.title??this._draft.lodgingTitle}}catch(t){console.warn("Preview failed:",t),(t==null?void 0:t.code)==="functions/unauthenticated"?this._previewError="Preview unavailable — sign in.":(t==null?void 0:t.code)==="functions/invalid-argument"?this._previewError="That URL doesn’t look right.":this._previewError="Preview unavailable — paste it again or skip."}finally{this._previewing=!1}}_toggleAttendee(e){const n=this._draft.attendees.includes(e)?this._draft.attendees.filter(i=>i!==e):[...this._draft.attendees,e];this._set("attendees",n)}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give the trip a title.";return}if(!e.start||!e.end){this._error="Set both start and end dates.";return}if(e.end<e.start){this._error="End date can’t be before start date.";return}if(!this.familyId){this._error="You need to be in a family first.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,title:e.title.trim(),location:e.location.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this trip? This can’t be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return R``;const e=this._draft,t=!!e.id;return R`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>${t?"Edit activity":"New activity"}</h2>
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
                ${["personal","family","extended"].map(n=>R`
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
              ${this._previewing?R`<div class="preview-loading">
                    <div class="spinner"></div>
                    Fetching preview…
                  </div>`:""}
              ${this._previewError?R`<div class="preview-error">${this._previewError}</div>`:""}
              ${!this._previewing&&e.coverImage?R`<div class="preview">
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
              ${this.members.map(n=>R`
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
            <label>Also visible to <span style="text-transform:none;font-weight:400;color:var(--text-tertiary);letter-spacing:0.01em;">(without going)</span></label>
            <div class="attendees">
              ${this.members.filter(n=>!e.attendees.includes(n.uid)).map(n=>R`
                    <div
                      class="att-chip ${(e.viewers??[]).includes(n.uid)?"on":""}"
                      @click=${()=>this._toggleViewer(n.uid)}
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
              ${this.members.filter(n=>!e.attendees.includes(n.uid)).length===0?R`<span style="color:var(--text-tertiary);font-size:13px;">
                    Everyone is going — no extra viewers needed.
                  </span>`:""}
            </div>
          </div>

          <fieldset class="flight-section">
            <legend>Flight (optional)</legend>
            <div class="row-2">
              <div class="field" style="margin-bottom:0;">
                <label>Airline</label>
                <input
                  type="text"
                  placeholder="e.g. Air France"
                  .value=${e.flightAirline}
                  @input=${n=>this._set("flightAirline",n.target.value)}
                />
              </div>
              <div class="field" style="margin-bottom:0;">
                <label>Flight number</label>
                <input
                  type="text"
                  placeholder="AF1234"
                  .value=${e.flightNumber}
                  @input=${n=>this._set("flightNumber",n.target.value)}
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
                  @input=${n=>this._set("flightDepartAirport",n.target.value)}
                />
              </div>
              <div class="field" style="margin-bottom:0;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary);font-size:18px;">→</div>
              <div class="field" style="margin-bottom:0;">
                <input
                  type="datetime-local"
                  .value=${e.flightDepartTime}
                  @input=${n=>this._set("flightDepartTime",n.target.value)}
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
                  @input=${n=>this._set("flightArriveAirport",n.target.value)}
                />
              </div>
              <div class="field" style="margin-bottom:0;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary);font-size:18px;">→</div>
              <div class="field" style="margin-bottom:0;">
                <input
                  type="datetime-local"
                  .value=${e.flightArriveTime}
                  @input=${n=>this._set("flightArriveTime",n.target.value)}
                />
              </div>
            </div>
            <div class="hint">
              Auto-fill from confirmation email arrives in a later phase. Manual entry for now.
            </div>
          </fieldset>

          <div class="field">
            <label>Notes</label>
            <textarea
              placeholder="Reservations, packing list, who's bringing what…"
              .value=${e.notes}
              @input=${n=>this._set("notes",n.target.value)}
            ></textarea>
          </div>

          ${this._error?R`<div class="error">${this._error}</div>`:""}

          <div class="actions">
            ${t?R`<button class="delete-btn" @click=${this._onDelete} ?disabled=${this.busy}>
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
    `}}H(Xo,"properties",{open:{type:Boolean,reflect:!0},trip:{type:Object},members:{type:Array},currentUid:{type:String},familyId:{type:String},busy:{type:Boolean},_draft:{state:!0},_error:{state:!0},_previewing:{state:!0},_previewError:{state:!0}}),H(Xo,"styles",ve`
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
  `);customElements.define("trip-form",Xo);class Zo extends oe{constructor(){super(),this.open=!1,this.event=null,this.members=[],this.familyId="",this.busy=!1,this._draft=this._blankDraft(),this._error=""}willUpdate(e){(e.has("event")||e.has("open"))&&(this.open&&(this._draft=this._draftFromEvent(this.event)),this._error="")}_blankDraft(){return{id:null,type:"birthday",title:"",date:new Date().toISOString().slice(0,10),personIds:[],recurring:!0,subtitle:"",notes:"",visibility:"family"}}_draftFromEvent(e){return e?{id:e.id??null,type:e.type??"birthday",title:e.title??"",date:e.date??new Date().toISOString().slice(0,10),personIds:Array.isArray(e.personIds)?[...e.personIds]:[],recurring:e.recurring??!0,subtitle:e.subtitle??"",notes:e.notes??"",visibility:e.visibility??"family"}:this._blankDraft()}_set(e,t){this._draft={...this._draft,[e]:t}}_toggleType(e){this._set("type",e)}_togglePerson(e){const t=this._draft.personIds.includes(e);this._set("personIds",t?this._draft.personIds.filter(n=>n!==e):[...this._draft.personIds,e])}_onSave(){const e=this._draft;if(!e.title.trim()){this._error="Give it a title.";return}if(!e.date){this._error="Pick a date.";return}if(!this.familyId){this._error="No family yet.";return}this._error="",this.dispatchEvent(new CustomEvent("save",{detail:{...e,title:e.title.trim(),subtitle:e.subtitle.trim(),notes:e.notes.trim()}}))}_onDelete(){this._draft.id&&confirm("Delete this event? This can't be undone.")&&this.dispatchEvent(new CustomEvent("remove",{detail:{id:this._draft.id}}))}_onCancel(){this.dispatchEvent(new Event("cancel"))}render(){if(!this.open)return R``;const e=this._draft,t=!!e.id;return R`
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
              ${[{v:"birthday",label:"Birthday"},{v:"anniversary",label:"Anniversary"},{v:"custom",label:"Other"}].map(n=>R`
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

          ${this.members.length>0?R`
                <div class="field">
                  <label>Who is this about</label>
                  <div class="people">
                    ${this.members.map(n=>R`
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
                ${["personal","family","extended"].map(n=>R`
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

          ${this._error?R`<div class="error">${this._error}</div>`:""}

          <div class="actions">
            ${t?R`<button class="delete-btn" @click=${this._onDelete} ?disabled=${this.busy}>
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
    `}_monthDay(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?"":t.toLocaleString("en-GB",{day:"numeric",month:"long"})}}H(Zo,"properties",{open:{type:Boolean,reflect:!0},event:{type:Object},members:{type:Array},familyId:{type:String},busy:{type:Boolean},_draft:{state:!0},_error:{state:!0}}),H(Zo,"styles",ve`
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
  `);customElements.define("event-form",Zo);let Yt=null,nh=null;function ww(){return Yt||(Yt=document.createElement("div"),Yt.id="cairn-toast-host",Object.assign(Yt.style,{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",zIndex:9999,pointerEvents:"none"}),document.body.appendChild(Yt),Yt)}function Q(r,{duration:e=2800}={}){const t=ww();clearTimeout(nh),t.innerHTML="";const n=document.createElement("div");n.textContent=r,Object.assign(n.style,{padding:"12px 18px",background:"rgba(20, 12, 6, 0.78)",backdropFilter:"blur(24px) saturate(180%)",webkitBackdropFilter:"blur(24px) saturate(180%)",border:"1px solid rgba(255, 248, 235, 0.22)",borderRadius:"999px",color:"rgba(255, 248, 235, 0.96)",fontFamily:"'Inter', system-ui, sans-serif",fontSize:"13.5px",fontWeight:"500",letterSpacing:"0.005em",boxShadow:"0 12px 32px rgba(20, 12, 6, 0.45)",pointerEvents:"auto",transform:"translateY(8px)",opacity:"0",transition:"opacity 200ms ease, transform 240ms ease"}),t.appendChild(n),requestAnimationFrame(()=>{n.style.opacity="1",n.style.transform="translateY(0)"}),nh=setTimeout(()=>{n.style.opacity="0",n.style.transform="translateY(8px)",setTimeout(()=>n.remove(),260)},e)}class ea extends oe{constructor(){super(),this.open=!1,this.family=null,this.immediate=[],this.extended=[],this._busy=!1}_onCancel(){this.dispatchEvent(new Event("cancel"))}async _regenerate(){if(!this._busy){this._busy=!0;try{await ce.regenerateCairnInviteCode(),Q("New invite code generated.")}catch(e){console.error(e),Q(`Couldn't generate code: ${e.code??e.message}`,{duration:5e3})}finally{this._busy=!1}}}_inviteLink(e){return`${window.location.origin}/cairn/?join=${e}`}async _copyLink(){var t;const e=(t=this.family)==null?void 0:t.cairnInviteCode;if(e)try{await navigator.clipboard.writeText(this._inviteLink(e)),Q("Invite link copied to clipboard.")}catch{Q("Could not copy — try long-press the link instead.")}}async _share(){var n,i;const e=(n=this.family)==null?void 0:n.cairnInviteCode;if(!e)return;const t=this._inviteLink(e);if(navigator.share)try{await navigator.share({title:"Join my family on Cairn",text:`Join ${((i=this.family)==null?void 0:i.name)??"our family"} on Cairn — our shared family calendar.`,url:t})}catch{}else this._copyLink()}_expiryText(e){if(!e)return"";const t=e.toDate?e.toDate():new Date(e),i=Math.max(0,Math.round((t-new Date)/(1440*60*1e3)));return i===0?"Expires today":i===1?"Expires tomorrow":`Expires in ${i} days`}render(){var i,s;if(!this.open)return R``;const e=(i=this.family)==null?void 0:i.cairnInviteCode,t=(s=this.family)==null?void 0:s.cairnInviteCodeExpiresAt,n=t&&(t.toDate?t.toDate():new Date(t))<new Date;return R`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>Manage members</h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>

          <h3>Immediate family · ${this.immediate.length}</h3>
          ${this.immediate.length===0?R`<div class="empty">No one in immediate yet.</div>`:this.immediate.map(a=>R`
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
          ${this.extended.length===0?R`<div class="empty">
                Anyone you invite via Cairn (grandparents, aunts, uncles, etc.) will appear here.
                They can see trips and celebrations but not PebblePath child data.
              </div>`:this.extended.map(a=>R`
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
          ${e&&!n?R`
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
              `:R`
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
    `}}H(ea,"properties",{open:{type:Boolean,reflect:!0},family:{type:Object},immediate:{type:Array},extended:{type:Array},_busy:{state:!0}}),H(ea,"styles",ve`
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
  `);customElements.define("manage-members-modal",ea);function Ew(r,e){const t=[];if(t.push(r.title||"Cairn activity"),r.location&&t.push(r.location),r.start&&r.end){const i=new Date(r.start),s=new Date(r.end),a=i.toLocaleString("en-GB",{day:"numeric",month:"short"}),l=s.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});t.push(r.start===r.end?l:`${a} – ${l}`)}if((r.lodgingHost||r.lodgingTitle)&&t.push(`Lodging: ${[r.lodgingHost,r.lodgingTitle].filter(Boolean).join(" — ")}`),r.flightNumber||r.flightAirline||r.flightDepartAirport){const i=[],s=[r.flightAirline,r.flightNumber].filter(Boolean).join(" ");if(s&&i.push(s),r.flightDepartAirport&&r.flightArriveAirport&&i.push(`${r.flightDepartAirport.toUpperCase()} → ${r.flightArriveAirport.toUpperCase()}`),r.flightDepartTime){const a=new Date(r.flightDepartTime);Number.isNaN(a.getTime())||i.push(`Depart: ${a.toLocaleString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}`)}i.length&&t.push(`Flight: ${i.join(" · ")}`)}const n=(r.attendees??[]).map(i=>{var s;return(s=e.get(i))==null?void 0:s.displayName}).filter(Boolean);return n.length&&t.push(`With: ${n.join(", ")}`),r.notes&&t.push("",r.notes),t.push("","Shared from Cairn · pebblepath.ai/cairn"),t.join(`
`)}class ta extends oe{constructor(){super(),this.trip=null,this.members=[]}_fmtDates(e,t){const n=new Date(e),i=new Date(t),s=n.toLocaleString("en-GB",{month:"short"}),a=i.toLocaleString("en-GB",{month:"short"});return s===a&&n.getFullYear()===i.getFullYear()?`${n.getDate()}–${i.getDate()} ${s}`:`${n.getDate()} ${s} – ${i.getDate()} ${a}`}async _onShare(e,t,n){n.stopPropagation();const i=Ew(e,t);if(navigator.share)try{await navigator.share({title:`Cairn — ${e.title??"activity"}`,text:i})}catch{}else try{await navigator.clipboard.writeText(i),Q("Itinerary copied to clipboard.")}catch{Q("Could not copy — try again from a browser tab.")}}render(){const e=this.trip;if(!e)return R``;const t=e.coverImage?`background-image: url(${e.coverImage});`:`background: ${bw(e)};`,n=new Map(this.members.map(l=>[l.uid,l])),i=(e.attendees??[]).map(l=>n.get(l)).filter(Boolean),s=i.slice(0,4),a=Math.max(0,i.length-s.length);return R`
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
          ${e.lodgingUrl||e.lodgingHost?R`<div class="lodging">
                ${e.lodgingHost?R`<span class="pill">${e.lodgingHost}</span>`:""}
                <span>${e.lodgingTitle||e.lodgingUrl||""}</span>
              </div>`:""}
          ${e.flightNumber||e.flightDepartAirport?R`<div class="flight-info">
                <span class="plane">✈</span>
                <span>${[e.flightAirline,e.flightNumber].filter(Boolean).join(" ")}</span>
                ${e.flightDepartAirport&&e.flightArriveAirport?R`<span class="route">${e.flightDepartAirport.toUpperCase()} → ${e.flightArriveAirport.toUpperCase()}</span>`:""}
              </div>`:""}
          <div class="footer">
            <div class="attendees">
              ${s.map(l=>R`<member-chip name=${l.displayName} .hue=${l.hue} size="28"></member-chip>`)}
              ${a>0?R`<span class="more">+${a}</span>`:""}
            </div>
            <button
              class="share-btn"
              title="Share itinerary"
              aria-label="Share itinerary"
              @click=${l=>this._onShare(e,n,l)}
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
    `}}H(ta,"properties",{trip:{type:Object},members:{type:Array}}),H(ta,"styles",ve`
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
  `);customElements.define("trip-card",ta);class na extends oe{constructor(){super(),this.open=!1,this.trips=[],this.members=[]}_onCancel(){this.dispatchEvent(new Event("cancel"))}_groupByYear(e){const t=[...e].sort((s,a)=>String(s.start).localeCompare(String(a.start))),n=new Date;n.setHours(0,0,0,0);const i=new Map;for(const s of t){if(!s.start)continue;const a=new Date(s.start).getFullYear();i.has(a)||i.set(a,[]);const l=s.end?new Date(s.end)<n:!1;i.get(a).push({trip:s,isPast:l})}return i}render(){var i;if(!this.open)return R``;const e=this._groupByYear(this.trips??[]),t=((i=this.trips)==null?void 0:i.length)??0,n=new Date().getFullYear();return R`
      <div class="backdrop" @click=${this._onCancel}></div>
      <div class="sheet">
        <glass-panel padding="lg" variant="strong" lifted>
          <div class="header">
            <h2>All trips<span class="count">${t} ${t===1?"trip":"trips"}</span></h2>
            <button class="close" @click=${this._onCancel} aria-label="Close">×</button>
          </div>
          ${t===0?R`<div class="empty">
                No trips for this circle yet.<br />
                Close this and tap <strong>+ New trip</strong> to add one.
              </div>`:Array.from(e.entries()).map(([s,a])=>R`
                  <div class="year ${s===n?"current":""}">
                    ${s}
                  </div>
                  <div class="grid">
                    ${a.map(({trip:l,isPast:u})=>R`
                        <div class=${u?"past":""}>
                          <trip-card .trip=${l} .members=${this.members}></trip-card>
                        </div>
                      `)}
                  </div>
                `)}
        </glass-panel>
      </div>
    `}}H(na,"properties",{open:{type:Boolean,reflect:!0},trips:{type:Array},members:{type:Array}}),H(na,"styles",ve`
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
  `);customElements.define("all-trips-modal",na);class ra extends oe{constructor(){super(),this.open=!1,this._events=[],this._selected=new Set,this._loading=!1,this._error="",this._importing=!1}willUpdate(e){e.has("open")&&this.open&&this._events.length===0&&!this._loading&&this._load()}async _load(){var e,t,n,i,s,a;this._loading=!0,this._error="";try{const l=await Bp(),u=await _w(l,90),h=new Set((ce.state.trips??[]).filter(m=>m.gcalEventId).map(m=>m.gcalEventId));this._events=u.map(m=>({...m,_alreadyImported:h.has(m.id)}));const p=new Set;for(const m of this._events){if(m._alreadyImported)continue;const y=((e=m.start)==null?void 0:e.date)??((n=(t=m.start)==null?void 0:t.dateTime)==null?void 0:n.slice(0,10)),I=((i=m.end)==null?void 0:i.date)??((a=(s=m.end)==null?void 0:s.dateTime)==null?void 0:a.slice(0,10));y&&I&&I!==y&&p.add(m.id)}this._selected=p}catch(l){console.error(l),this._error=(l==null?void 0:l.message)??"Could not load calendar events."}finally{this._loading=!1}}_toggle(e){const t=new Set(this._selected);t.has(e)?t.delete(e):t.add(e),this._selected=t}_toggleAll(){const e=this._events.filter(t=>!t._alreadyImported);this._selected.size===e.length?this._selected=new Set:this._selected=new Set(e.map(t=>t.id))}async _import(){var s;if(this._importing||this._selected.size===0)return;this._importing=!0;const e=(s=te==null?void 0:te.currentUser)==null?void 0:s.uid,t=this._events.filter(a=>this._selected.has(a.id));let n=0,i=0;for(const a of t){const l=vw(a,e);try{await ce.saveTrip(l),n++}catch(u){console.error("Import failed for event",a.id,u),i++}}this._importing=!1,i===0?Q(`Imported ${n} ${n===1?"activity":"activities"}.`):Q(`Imported ${n}, ${i} failed.`,{duration:5e3}),this._events=[],this._selected=new Set,this.dispatchEvent(new Event("cancel"))}_onCancel(){this.dispatchEvent(new Event("cancel"))}_fmtRange(e){var p,m,y,I,A,D,P,U;const t=((p=e.start)==null?void 0:p.date)??((y=(m=e.start)==null?void 0:m.dateTime)==null?void 0:y.slice(0,10)),n=((I=e.end)==null?void 0:I.date)??((D=(A=e.end)==null?void 0:A.dateTime)==null?void 0:D.slice(0,10));if(!t)return"";const i=new Date(t);if(!n||n===t)return i.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});let s=new Date(n);(P=e.start)!=null&&P.date&&((U=e.end)!=null&&U.date)&&s.setDate(s.getDate()-1);const a=i.getMonth()===s.getMonth()&&i.getFullYear()===s.getFullYear(),l=i.getFullYear()===s.getFullYear();if(a)return`${i.getDate()}–${s.getDate()} ${i.toLocaleString("en-GB",{month:"short",year:"numeric"})}`;const u=i.toLocaleString("en-GB",{day:"numeric",month:"short"}),h=s.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"});return l?`${u} – ${h}`:`${i.toLocaleDateString()} – ${s.toLocaleDateString()}`}render(){if(!this.open)return R``;const e=this._events.filter(n=>!n._alreadyImported),t=e.length>0&&this._selected.size===e.length;return R`
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

          ${this._loading?R`<div class="loading">Loading your calendar…</div>`:this._error?R`<div class="error">${this._error}</div>`:this._events.length===0?R`<div class="empty">No events found in the next 90 days.</div>`:R`
                <div class="list">
                  ${this._events.map(n=>R`
                      <div
                        class="row ${n._alreadyImported?"disabled":this._selected.has(n.id)?"on":""}"
                        @click=${()=>!n._alreadyImported&&this._toggle(n.id)}
                      >
                        <div class="checkbox"></div>
                        <div class="body">
                          <div class="title">${n.summary||"(untitled)"}</div>
                          <div class="meta">
                            <span>${this._fmtRange(n)}</span>
                            ${n.location?R`<span>· ${n.location}</span>`:""}
                          </div>
                        </div>
                        ${n._alreadyImported?R`<span class="badge">In Cairn</span>`:""}
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
    `}}H(ra,"properties",{open:{type:Boolean,reflect:!0},_events:{state:!0},_selected:{state:!0},_loading:{state:!0},_error:{state:!0},_importing:{state:!0}}),H(ra,"styles",ve`
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
  `);customElements.define("import-calendar-modal",ra);class ia extends oe{constructor(){super(),this.open=!1,this.user=null,this.pebbleUser=null,this._name="",this._savingName=!1}willUpdate(e){var t;e.has("open")&&this.open&&(this._name=((t=this.user)==null?void 0:t.displayName)??"")}_onCancel(){this.dispatchEvent(new Event("cancel"))}async _saveName(){var t,n;const e=this._name.trim();if(!(!e||e===(((t=this.user)==null?void 0:t.displayName)??""))&&!(!((n=te==null?void 0:te.currentUser)!=null&&n.uid)||!X)){this._savingName=!0;try{await Xt(Fe(X,"users",te.currentUser.uid),{displayName:e,updatedAt:Ge()}),Q("Display name updated.")}catch(i){console.error(i),Q(`Couldn't save: ${i.code??i.message}`,{duration:5e3})}finally{this._savingName=!1}}}async _signOut(){confirm("Sign out of Cairn?")&&(this.dispatchEvent(new Event("cancel")),await qp())}render(){if(!this.open)return R``;const e=this.user,t=this._name.trim()&&this._name.trim()!==((e==null?void 0:e.displayName)??"");return R`
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
              @click=${()=>Q("Photo override comes in the next polish pass.")}
            >
              Change photo
            </button>
          </div>

          <div class="field">
            <label>Display name</label>
            <input
              type="text"
              .value=${this._name}
              @input=${n=>this._name=n.target.value}
            />
            ${t?R`<button
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
    `}}H(ia,"properties",{open:{type:Boolean,reflect:!0},user:{type:Object},pebbleUser:{type:Object},_name:{state:!0},_savingName:{state:!0}}),H(ia,"styles",ve`
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
  `);customElements.define("profile-sheet",ia);class Wp extends oe{render(){return R`
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
    `}}H(Wp,"styles",ve`
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
  `);customElements.define("discover-pebblepath",Wp);class sa extends oe{constructor(){super(),this.code="",this._family=null,this._loading=!0,this._joining=!1,this._error=""}willUpdate(e){e.has("code")&&this.code&&this._lookup()}async _lookup(){var e,t;this._loading=!0,this._error="";try{const n=await ce.findFamilyByCairnCode(this.code);if(!n)this._error="Invite code not found. Check it was typed correctly.",this._family=null;else{const i=((t=(e=n.cairnInviteCodeExpiresAt)==null?void 0:e.toDate)==null?void 0:t.call(e))??(n.cairnInviteCodeExpiresAt?new Date(n.cairnInviteCodeExpiresAt):null);!i||i<new Date?(this._error="This invite code has expired. Ask the family for a fresh one.",this._family=null):this._family=n}}catch(n){console.error(n),this._error=(n==null?void 0:n.message)??"Couldn't look up the invite."}finally{this._loading=!1}}async _join(){var e;if(!this._joining){this._joining=!0,this._error="";try{const t=await ce.joinFamilyAsCairn(this.code);Q(`Welcome to ${((e=this._family)==null?void 0:e.name)??"the family"}.`),this.dispatchEvent(new CustomEvent("joined",{detail:{familyId:t}}))}catch(t){console.error(t),this._error=(t==null?void 0:t.message)??"Could not join."}finally{this._joining=!1}}}_cancel(){this.dispatchEvent(new Event("cancel"))}_inviterFromFamily(e){var i;if(!e)return null;const t=(i=e.memberProfiles)==null?void 0:i[e.createdBy];if(!t)return null;const n=t.profilePhotoURL;return{displayName:t.displayName??"A family member",photoURL:typeof n=="string"&&/^https?:\/\//i.test(n)?n:null}}render(){var i,s,a;const e=this._inviterFromFamily(this._family),t=(((i=this._family)==null?void 0:i.cairnMemberIds)??((s=this._family)==null?void 0:s.memberIds)??[]).length,n=(((a=this._family)==null?void 0:a.memberIds)??[]).length;return R`
      <div class="wrap">
        <div class="mark">
          <cairn-mark size="44"></cairn-mark>
          <div class="mark-name">Cairn</div>
        </div>
        <glass-panel padding="lg" variant="strong" lifted>
          ${this._loading?R`<div class="loading">Looking up <code>${this.code}</code>…</div>`:this._family?R`
                <h1>You're invited.</h1>
                <div class="preview">
                  ${e?R`
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
                ${this._error?R`<div class="error">${this._error}</div>`:""}
              `:R`
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
    `}}H(sa,"properties",{code:{type:String},_family:{state:!0},_loading:{state:!0},_joining:{state:!0},_error:{state:!0}}),H(sa,"styles",ve`
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
  `);customElements.define("join-family-screen",sa);class oa extends oe{constructor(){super(),this.error="",this.busy=!1,this.joinCode=""}async _handleSignIn(){if(!this.busy){this.busy=!0,this.error="";try{await jp()}catch(e){this.error=(e==null?void 0:e.message)??"Sign-in failed."}finally{this.busy=!1}}}_renderGoogleIcon(){return R`
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
    `}render(){return R`
      <div class="wrap">
        <div class="brand">
          <div class="mark-row">
            <cairn-mark size="52"></cairn-mark>
            <div class="mark-name">Cairn</div>
          </div>
          <div class="companion">PebblePath companion</div>
        </div>
        <glass-panel padding="lg" lifted variant="strong">
          ${this.joinCode?R`<div class="invite-banner">
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
              ?disabled=${this.busy||!gt}
              @click=${this._handleSignIn}
            >
              ${this._renderGoogleIcon()}
              ${this.busy?"Signing in…":"Continue with Google"}
            </button>
          </div>
          ${gt?"":R`<div class="config-hint">
                Sign-in is awaiting your Firebase config — copy
                <code>.env.example</code> to <code>.env</code> and fill in the web-app
                values from PebblePath's Firebase Console.
              </div>`}
          ${this.error?R`<div class="error">${this.error}</div>`:""}
        </glass-panel>
        <div class="footnote">A private space for your family</div>
      </div>
    `}}H(oa,"properties",{error:{state:!0},busy:{state:!0},joinCode:{type:String}}),H(oa,"styles",ve`
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
  `);customElements.define("sign-in-screen",oa);const Tw="modulepreload",Iw=function(r){return"/cairn/"+r},rh={},xw=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let a=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=a(t.map(h=>{if(h=Iw(h),h in rh)return;rh[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const y=document.createElement("link");if(y.rel=p?"stylesheet":Tw,p||(y.as="script"),y.crossOrigin="",y.href=h,u&&y.setAttribute("nonce",u),document.head.appendChild(y),p)return new Promise((I,A)=>{y.addEventListener("load",I),y.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},Sn=class Sn extends oe{constructor(){super(),this.value="family"}_select(e){e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent("circle-change",{detail:{value:e},bubbles:!0,composed:!0})))}render(){return R`
      <div class="track" role="tablist" aria-label="Circle">
        ${Sn.OPTIONS.map(e=>R`
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
    `}};H(Sn,"properties",{value:{type:String,reflect:!0}}),H(Sn,"OPTIONS",[{value:"personal",label:"Just me"},{value:"family",label:"Family"},{value:"extended",label:"Extended"}]),H(Sn,"styles",ve`
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
  `);let aa=Sn;customElements.define("circle-switcher",aa);class la extends oe{constructor(){super(),this.event=null,this.members=[]}_icon(e){return e==="birthday"?"🎂":e==="anniversary"?"💕":"✨"}_fmtDate(e){const t=new Date(e);return{day:t.getDate(),month:t.toLocaleString("en-GB",{month:"short"})}}render(){const e=this.event;if(!e)return R``;const t=this._fmtDate(e.date);return R`
      <div
        class="row"
        @click=${()=>this.dispatchEvent(new CustomEvent("edit-event",{detail:e,bubbles:!0,composed:!0}))}
      >
        <div class="icon ${e.type}">${this._icon(e.type)}</div>
        <div class="body">
          <div class="title">${e.title}</div>
          ${e.subtitle?R`<div class="meta">${e.subtitle}</div>`:""}
        </div>
        <div class="date">
          ${t.day}
          <small>${t.month}</small>
        </div>
      </div>
    `}}H(la,"properties",{event:{type:Object},members:{type:Array}}),H(la,"styles",ve`
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
  `);customElements.define("event-row",la);const Aw={uid:"preview-user",displayName:"Thomas Paris",email:"thomas@example.com",photoURL:null},ih=[{uid:"thomas",displayName:"Thomas",circles:["immediate"],hue:198},{uid:"partner",displayName:"Élise",circles:["immediate"],hue:8},{uid:"kid1",displayName:"Oscar",circles:["immediate"],hue:142},{uid:"kid2",displayName:"Mila",circles:["immediate"],hue:44},{uid:"mum",displayName:"Mum",circles:["extended"],hue:320},{uid:"dad",displayName:"Dad",circles:["extended"],hue:28},{uid:"sister",displayName:"Camille",circles:["extended"],hue:280},{uid:"bro-in-law",displayName:"Sam",circles:["extended"],hue:175},{uid:"niece",displayName:"Léa",circles:["extended"],hue:100}],Sw=[{id:"t1",title:"Côte d’Azur, summer",location:"Antibes, France",start:"2026-07-12",end:"2026-07-21",coverGradient:"linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)",lodgingHost:"Airbnb",lodgingTitle:"Villa near Cap d’Antibes",attendees:["thomas","partner","kid1","kid2","mum","dad"],notes:"Mum + Dad arrive day 2. Dinner reservations at La Guérite booked.",visibility:"extended"},{id:"t2",title:"Half-term in the Alps",location:"Chamonix, France",start:"2026-10-24",end:"2026-10-31",coverGradient:"linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)",lodgingHost:"Booking.com",lodgingTitle:"Chalet Les Drus",attendees:["thomas","partner","kid1","kid2"],notes:"Need ski school for the kids — book by September.",visibility:"immediate"},{id:"t3",title:"Camille’s 40th",location:"Lisbon, Portugal",start:"2026-09-05",end:"2026-09-08",coverGradient:"linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)",lodgingHost:"Airbnb",lodgingTitle:"Alfama rooftop apartment",attendees:["thomas","partner","sister","bro-in-law"],notes:"Surprise. Don’t mention to Camille.",visibility:"family"}],Cw=[{id:"e1",type:"birthday",date:"2026-05-24",personIds:["mum"],title:"Mum’s birthday"},{id:"e2",type:"anniversary",date:"2026-05-28",personIds:["mum","dad"],title:"Mum & Dad’s anniversary",subtitle:"38 years"},{id:"e3",type:"birthday",date:"2026-06-11",personIds:["kid1"],title:"Oscar turns 7"},{id:"e4",type:"birthday",date:"2026-06-30",personIds:["niece"],title:"Léa’s birthday"}];class ca extends oe{constructor(){super(),this.user=Aw,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this.preview=!1,this.circle="family",this._formOpen=!1,this._formTrip=null,this._formBusy=!1,this._membersOpen=!1,this._eventFormOpen=!1,this._eventFormEvent=null,this._eventFormBusy=!1,this._allTripsOpen=!1,this._editingFamilyName=!1,this._importOpen=!1,this._profileOpen=!1;const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1)}async _saveFamilyName(e){var s,a;const n=(e.target.value??"").trim(),i=((s=this.family)==null?void 0:s.name)??"";if(n&&n!==i&&((a=this.family)!=null&&a.id))try{const{db:l,doc:u,updateDoc:h,serverTimestamp:p}=await xw(async()=>{const{db:m,doc:y,updateDoc:I,serverTimestamp:A}=await Promise.resolve().then(()=>dw);return{db:m,doc:y,updateDoc:I,serverTimestamp:A}},void 0);await h(u(l,"families",this.family.id),{name:n,updatedAt:p()}),Q("Family name updated.")}catch(l){console.error("Update family name failed:",l),Q(`Couldn't save: ${l.code??l.message}`,{duration:5e3})}this._editingFamilyName=!1}_liveImmediate(){var e;return this.preview||!((e=this.user)!=null&&e.uid)?ih.filter(t=>t.circles.includes("immediate")):mw(this.user.uid,this.user,this.pebbleUser,this.family,this.children)}_liveExtended(){return this.preview?ih.filter(e=>e.circles.includes("extended")):[]}_liveTrips(){return this.preview?Sw:this.trips??[]}_liveEvents(){if(this.preview)return Cw;const e=gw(this.children),t=(this.events??[]).map(n=>{const{date:i,yearsElapsed:s}=yw(n);return{...n,date:i?i.toISOString().slice(0,10):n.date,_yearsElapsed:s,_originalDate:n.date}});return[...e,...t].sort((n,i)=>String(n.date).localeCompare(String(i.date)))}_filteredMembers(){const e=this._liveImmediate(),t=this._liveExtended();return this.circle==="personal"?e.filter(n=>{var i;return n.uid===((i=this.user)==null?void 0:i.uid)}):this.circle==="family"?e:[...e,...t]}_circleTrips(){var n;const e=this._liveTrips(),t=((n=this.user)==null?void 0:n.uid)??"thomas";return this.circle==="personal"?e.filter(i=>{var s;return(s=i.attendees)==null?void 0:s.includes(t)}):this.circle==="family"?e.filter(i=>i.visibility!=="extended"):e}_filteredTrips(){const e=new Date;return e.setHours(0,0,0,0),this._circleTrips().filter(t=>t.end?new Date(t.end)>=e:!0)}_userCanSeeTrip(e){var n,i,s;const t=(n=this.user)==null?void 0:n.uid;return t?!!((i=e.attendees)!=null&&i.includes(t)||(s=e.viewers)!=null&&s.includes(t)||e.visibility==="family"||e.visibility==="extended"):!1}_filteredEvents(){const e=new Set(this._filteredMembers().map(t=>t.uid));return this._liveEvents().filter(t=>t.personIds.some(n=>e.has(n)))}_smartCallout(){var l,u;const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=1440*60*1e3,i=h=>Math.round((h-t)/n);for(const h of this._circleTrips()){if(!h.start||!h.end)continue;const p=new Date(h.start),m=new Date(h.end);if(p.setHours(0,0,0,0),m.setHours(0,0,0,0),p<=t&&t<=m){const y=i(p)+1,I=i(m)-i(p)+1,A=((l=h.location)==null?void 0:l.trim())||h.title;return`Day ${y} of ${I} in ${A}.`}}let s=null,a=1/0;for(const h of this._circleTrips()){if(!h.start)continue;const p=new Date(h.start);p.setHours(0,0,0,0);const m=i(p);m>0&&m<a&&(s={kind:"trip",item:h},a=m)}for(const h of this._filteredEvents()){if(!h.date)continue;const p=new Date(h.date);p.setHours(0,0,0,0);const m=i(p);m>=0&&m<a&&(s={kind:"event",item:h},a=m)}if(!s)return null;if(s.kind==="trip"){const h=((u=s.item.location)==null?void 0:u.trim())||s.item.title;return a===1?`${h} starts tomorrow.`:a<=14?`${h} in ${a} days.`:a<=60?`Next trip: ${h} in ${a} days.`:null}return a===0?`${s.item.title} — today.`:a===1?`${s.item.title} — tomorrow.`:a<=7?`${s.item.title} in ${a} days.`:null}_tripDensityByDay(e){const t=new Map;for(const n of this._filteredTrips()){if(!n.start||!n.end)continue;const i=new Date(n.start),s=new Date(n.end);if(Number.isNaN(i.getTime())||Number.isNaN(s.getTime())||i.getFullYear()>e||s.getFullYear()<e)continue;const a=new Date(Math.max(i,new Date(e,0,1))),l=new Date(Math.min(s,new Date(e,11,31)));for(;a<=l;){const u=`${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;t.set(u,Math.min(1,(t.get(u)??0)+.5)),a.setDate(a.getDate()+1)}}return t}_shiftMonth(e){const t=this._displayMonth;this._displayMonth=new Date(t.getFullYear(),t.getMonth()+e,1)}_jumpToMonth(e,t){this._displayMonth=new Date(e,t,1)}_resetToToday(){const e=new Date;this._displayMonth=new Date(e.getFullYear(),e.getMonth(),1)}_renderMonthly(){const e=new Date,t=this._displayMonth??e,n=t.getFullYear(),i=t.getMonth(),a=(new Date(n,i,1).getDay()+6)%7,l=new Date(n,i+1,0).getDate(),u=this._filteredEvents().map(A=>new Date(A.date)).filter(A=>A.getFullYear()===n&&A.getMonth()===i).map(A=>A.getDate()),h=new Set;for(const A of this._filteredTrips()){if(!A.start||!A.end)continue;const D=new Date(A.start),P=new Date(A.end);if(Number.isNaN(D.getTime())||Number.isNaN(P.getTime())||D.getFullYear()>n||P.getFullYear()<n||D.getMonth()>i&&P.getMonth()>i||D.getMonth()<i&&P.getMonth()<i)continue;const U=D.getMonth()===i?D.getDate():1,L=P.getMonth()===i?P.getDate():l;for(let j=U;j<=L;j++)h.add(j)}const p=[];for(let A=0;A<a;A++)p.push(R`<div class="cal-cell empty"></div>`);const m=e.getFullYear()===n&&e.getMonth()===i;for(let A=1;A<=l;A++){const D=m&&A===e.getDate(),P=u.includes(A),U=h.has(A),L=["cal-cell",D?"today":"",P?"has-event":"",U?"has-trip":""].filter(Boolean).join(" ");p.push(R`<div class=${L}>${A}</div>`)}const y=new Date(n,i,1).toLocaleString("en-GB",{month:"long",year:"numeric"});return R`
      <div class="cal-head">
        <h3>${y}</h3>
        <div class="nav">
          ${!m?R`<button
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
        ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(A=>R`<div class="cal-dow">${A}</div>`)}
        ${p}
      </div>
    `}_openCreate(){if(this.preview){Q("Sign in to create real trips.");return}if(!ce.familyId){Q("You need a PebblePath family first.");return}this._formTrip=null,this._formOpen=!0}_openEdit(e){if(this.preview){Q("Sign in to edit real trips.");return}this._formTrip=e,this._formOpen=!0}async _onSaveTrip(e){const t=e.detail;this._formBusy=!0;try{await ce.saveTrip(t),this._formOpen=!1,this._formTrip=null,Q(t.id?"Trip updated.":"Trip created.")}catch(n){console.error("Save trip failed:",n),Q(`Couldn't save: ${n.code??n.message}`,{duration:5e3})}finally{this._formBusy=!1}}async _onDeleteTrip(e){this._formBusy=!0;try{await ce.deleteTrip(e.detail.id),this._formOpen=!1,this._formTrip=null,Q("Trip deleted.")}catch(t){console.error("Delete trip failed:",t),Q(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._formBusy=!1}}_openCreateEvent(){if(this.preview){Q("Sign in to add real events.");return}if(!ce.familyId){Q("You need a family first.");return}this._eventFormEvent=null,this._eventFormOpen=!0}_openEditEvent(e){if(this.preview){Q("Sign in to edit real events.");return}if(e!=null&&e._childId){const t=prompt(`Edit ${e._childName}'s birthday (YYYY-MM-DD):`,e.date);if(!t)return;if(!/^\d{4}-\d{2}-\d{2}$/.test(t)){Q("Use YYYY-MM-DD format.");return}ce.updateChildBirthday(e._childId,new Date(t)).then(()=>Q(`Updated ${e._childName}'s birthday.`)).catch(n=>{console.error("Update child birthday failed:",n),Q(`Couldn't update: ${n.code??n.message}`,{duration:5e3})});return}this._eventFormEvent={...e,date:e._originalDate??e.date},this._eventFormOpen=!0}async _onSaveEvent(e){this._eventFormBusy=!0;try{await ce.saveEvent(e.detail),this._eventFormOpen=!1,this._eventFormEvent=null,Q(e.detail.id?"Event updated.":"Event added.")}catch(t){console.error("Save event failed:",t),Q(`Couldn't save: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}async _onDeleteEvent(e){this._eventFormBusy=!0;try{await ce.deleteEvent(e.detail.id),this._eventFormOpen=!1,this._eventFormEvent=null,Q("Event deleted.")}catch(t){console.error("Delete event failed:",t),Q(`Couldn't delete: ${t.code??t.message}`,{duration:5e3})}finally{this._eventFormBusy=!1}}render(){var I,A,D,P,U,L,j,ee,De,se;const e=this._filteredTrips(),t=this._filteredEvents(),n=this._liveImmediate(),i=this._liveExtended(),s=n.concat(i),a=(((I=this.user)==null?void 0:I.displayName)??"there").split(" ")[0],l=new Date,u=new Date(l.getFullYear(),l.getMonth(),1),h=new Date(l.getFullYear(),l.getMonth()+1,0),p=t.filter(b=>{const g=new Date(b.date);return g.getFullYear()===l.getFullYear()&&g.getMonth()===l.getMonth()}),y=this._circleTrips().filter(b=>{if(!b.start||!b.end)return!1;const g=new Date(b.start),_=new Date(b.end);return Number.isNaN(g.getTime())||Number.isNaN(_.getTime())?!1:g<=h&&_>=u}).length+p.length;return R`
      <div class="topbar">
        <div class="brand">
          <cairn-mark size="38"></cairn-mark>
          <div class="brand-name">Cairn</div>
        </div>
        <circle-switcher
          .value=${this.circle}
          @circle-change=${b=>this.circle=b.detail.value}
        ></circle-switcher>
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
            @click=${()=>this._profileOpen=!0}
            title="${((A=this.user)==null?void 0:A.displayName)??"Profile"} — open settings"
            aria-label="Open profile settings"
          >
            <member-chip
              .name=${((D=this.user)==null?void 0:D.displayName)??"You"}
              .photo=${((P=this.user)==null?void 0:P.photoURL)??""}
              .hue=${198}
              size="36"
            ></member-chip>
          </button>
        </div>
      </div>

      ${this.preview?R`<div class="preview-banner">
            <strong>Preview mode</strong> — viewing the dashboard with placeholder
            data. <a href="?">Back to sign-in</a>.
          </div>`:""}

      <main>
        <div class="hello">
          <div>
            <h1>Hi ${a}.</h1>
            ${(()=>{const b=this._smartCallout();return b?R`<div class="smart">${b}</div>`:""})()}
            <div class="stat">
              <span>${y}</span> ${y===1?"activity":"activities"} this month
            </div>
            ${this.family?this._editingFamilyName?R`<input
                    class="family-name-input"
                    type="text"
                    .value=${this.family.name??""}
                    autofocus
                    @blur=${this._saveFamilyName}
                    @keydown=${b=>{b.key==="Enter"&&b.target.blur(),b.key==="Escape"&&(b.target.value=this.family.name??"",this._editingFamilyName=!1)}}
                  />`:R`<div
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
              ${this._circleTrips().length>0?R`<button class="link" @click=${()=>this._allTripsOpen=!0}>
                    All trips →
                  </button>`:""}
            </div>
          </div>
          ${e.length===0?R`
                <glass-panel padding="lg" variant="strong">
                  <div style="text-align:center;color:var(--text-secondary);padding:14px 0;font-size:14.5px;line-height:1.5;">
                    No trips yet for this circle.<br />
                    <button
                      style="margin-top:10px;background:transparent;border:none;color:var(--terracotta);cursor:pointer;font:inherit;text-decoration:underline;text-underline-offset:3px;"
                      @click=${()=>this._openCreate()}
                    >
                      Plan your first activity
                    </button>
                    <span style="color:var(--text-tertiary);"> · </span>
                    <button
                      style="background:transparent;border:none;color:var(--terracotta);cursor:pointer;font:inherit;text-decoration:underline;text-underline-offset:3px;"
                      @click=${()=>this._importOpen=!0}
                    >
                      Import from Google Calendar
                    </button>
                  </div>
                </glass-panel>
              `:R`
                <div class="trips-row">
                  ${e.map(b=>R`<trip-card
                      .trip=${b}
                      .members=${s}
                      @edit-trip=${g=>this._openEdit(g.detail)}
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
                <h3>${((U=this._displayMonth)==null?void 0:U.getFullYear())??l.getFullYear()}</h3>
                <div style="font-size:12px;color:var(--text-tertiary);">Yearly</div>
              </div>
              <yearly-view
                .year=${((L=this._displayMonth)==null?void 0:L.getFullYear())??l.getFullYear()}
                .tripDays=${this._tripDensityByDay(((j=this._displayMonth)==null?void 0:j.getFullYear())??l.getFullYear())}
                .events=${this._liveEvents()}
                .today=${l}
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
          <glass-panel padding="md" variant="strong">
            ${t.length===0?R`<div style="color:var(--text-tertiary);padding:18px 4px;font-size:13.5px;">
                  No birthdays or anniversaries yet.
                  <button
                    style="background:transparent;border:none;color:var(--terracotta);cursor:pointer;font:inherit;text-decoration:underline;text-underline-offset:3px;margin-left:4px;"
                    @click=${()=>this._openCreateEvent()}
                  >
                    Add one
                  </button>
                </div>`:t.map(b=>R`<event-row
                    .event=${b}
                    .members=${s}
                    @edit-event=${g=>this._openEditEvent(g.detail)}
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
                ${n.map(b=>R`
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
                  <span class="count">${i.length} ${i.length===1?"person":"people"}</span>
                </div>
                <button class="invite-btn" @click=${()=>this._membersOpen=!0}>
                  + Invite
                </button>
              </div>
              ${i.length===0?R`<div class="empty-extended">
                    No one yet —
                    <button @click=${()=>this._membersOpen=!0}>
                      invite the grandparents
                    </button>
                  </div>`:R`<div class="members-row">
                    ${i.map(b=>R`
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
        .members=${n}
        .currentUid=${((ee=this.user)==null?void 0:ee.uid)??""}
        .familyId=${((De=this.family)==null?void 0:De.id)??""}
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
        .familyId=${((se=this.family)==null?void 0:se.id)??""}
        .busy=${this._eventFormBusy}
        @save=${this._onSaveEvent}
        @remove=${this._onDeleteEvent}
        @cancel=${()=>{this._eventFormOpen=!1,this._eventFormEvent=null}}
      ></event-form>

      <all-trips-modal
        ?open=${this._allTripsOpen}
        .trips=${this._circleTrips()}
        .members=${s}
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
    `}}H(ca,"properties",{user:{type:Object},pebbleUser:{type:Object},family:{type:Object},children:{type:Array},trips:{type:Array},events:{type:Array},preview:{type:Boolean},circle:{state:!0},_formOpen:{state:!0},_formTrip:{state:!0},_formBusy:{state:!0},_membersOpen:{state:!0},_eventFormOpen:{state:!0},_eventFormEvent:{state:!0},_eventFormBusy:{state:!0},_displayMonth:{state:!0},_allTripsOpen:{state:!0},_editingFamilyName:{state:!0},_importOpen:{state:!0},_profileOpen:{state:!0}}),H(ca,"styles",ve`
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
        justify-self: end;
      }
      .topbar circle-switcher {
        grid-column: 1 / -1;
        grid-row: 2;
        justify-self: center;
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

  `);customElements.define("home-screen",ca);const uo="cairn:pendingJoinCode";class Kp extends oe{constructor(){super(),this.authUser=null,this.loading=!0;const e=new URLSearchParams(window.location.search);this.preview=e.has("preview");const t=e.get("join");if(t)try{localStorage.setItem(uo,t)}catch{}let n=null;try{n=localStorage.getItem(uo)}catch{}this.joinCode=t??n??null,this.pebbleUser=null,this.family=null,this.children=[],this.trips=[],this.events=[],this._unsubAuth=null,this._onDataChange=()=>{this.pebbleUser=ce.state.user,this.family=ce.state.family,this.children=ce.state.children,this.trips=ce.state.trips,this.events=ce.state.events}}_clearJoinState(){this.joinCode=null;try{localStorage.removeItem(uo)}catch{}const e=new URL(window.location.href);e.searchParams.delete("join"),window.history.replaceState({},"",e.toString())}connectedCallback(){if(super.connectedCallback(),this.preview){this.loading=!1;return}ce.addEventListener("change",this._onDataChange),this._unsubAuth=Hp(e=>{this.authUser=e,this.loading=!1,e?ce.start(e.uid):ce.stop()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubAuth)==null||e.call(this),ce.removeEventListener("change",this._onDataChange)}_composeViewer(){var t,n;const e=this.authUser;return{uid:e.uid,displayName:e.displayName??((t=this.pebbleUser)==null?void 0:t.displayName)??"You",email:e.email??((n=this.pebbleUser)==null?void 0:n.email)??"",photoURL:Gp(e,this.pebbleUser)}}render(){return this.loading?R``:this.preview?R`<home-screen preview></home-screen>`:this.authUser?this.joinCode?R`
        <join-family-screen
          .code=${this.joinCode}
          @joined=${()=>this._clearJoinState()}
          @cancel=${()=>this._clearJoinState()}
        ></join-family-screen>
      `:R`
      <home-screen
        .user=${this._composeViewer()}
        .pebbleUser=${this.pebbleUser}
        .family=${this.family}
        .children=${this.children}
        .trips=${this.trips}
        .events=${this.events}
      ></home-screen>
    `:R`
        <sign-in-screen
          .joinCode=${this.joinCode??""}
        ></sign-in-screen>
      `}}H(Kp,"properties",{authUser:{state:!0},loading:{state:!0},preview:{state:!0},joinCode:{state:!0},pebbleUser:{state:!0},family:{state:!0},children:{state:!0},trips:{state:!0},events:{state:!0}});customElements.define("cairn-app",Kp);
//# sourceMappingURL=index-CE-rtag0.js.map
