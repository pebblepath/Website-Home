const x_=()=>{};var sh={};/**
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
 */const af=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},O_=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],c=r[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,c=o?r[i+1]:0,u=i+2<r.length,h=u?r[i+2]:0,f=s>>2,p=(s&3)<<4|c>>4;let g=(c&15)<<2|h>>6,v=h&63;u||(v=64,o||(g=64)),n.push(t[f],t[p],t[g],t[v])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(af(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):O_(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const p=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||h==null||p==null)throw new M_;const g=s<<2|c>>4;if(n.push(g),h!==64){const v=c<<4&240|h>>2;if(n.push(v),p!==64){const C=h<<6&192|p;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class M_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L_=function(r){const e=af(r);return cf.encodeByteArray(e,!0)},ho=function(r){return L_(r).replace(/\./g,"")},uf=function(r){try{return cf.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const F_=()=>lf().__FIREBASE_DEFAULTS__,U_=()=>{if(typeof process>"u"||typeof sh>"u")return;const r=sh.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},B_=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&uf(r[1]);return e&&JSON.parse(e)},Fo=()=>{try{return x_()||F_()||U_()||B_()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},hf=r=>{var e,t;return(t=(e=Fo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},q_=r=>{const e=hf(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},df=()=>{var r;return(r=Fo())===null||r===void 0?void 0:r.config},ff=r=>{var e;return(e=Fo())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class j_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Wn(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lc(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function $_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[ho(JSON.stringify(t)),ho(JSON.stringify(o)),""].join(".")}const Vi={};function z_(){const r={prod:[],emulator:[]};for(const e of Object.keys(Vi))Vi[e]?r.emulator.push(e):r.prod.push(e);return r}function G_(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let oh=!1;function pf(r,e){if(typeof window>"u"||typeof document>"u"||!Wn(window.location.host)||Vi[r]===e||Vi[r]||oh)return;Vi[r]=e;function t(g){return`__firebase__banner__${g}`}const n="__firebase__banner",s=z_().prod.length>0;function o(){const g=document.getElementById(n);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,v){g.setAttribute("width","24"),g.setAttribute("id",v),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{oh=!0,o()},g}function f(g,v){g.setAttribute("id",v),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=G_(n),v=t("text"),C=document.getElementById(v)||document.createElement("span"),D=t("learnmore"),k=document.getElementById(D)||document.createElement("a"),L=t("preprendIcon"),B=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const U=g.element;c(U),f(k,D);const K=h();u(B,L),U.append(B,C,k,K),document.body.appendChild(U)}s?(C.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function mf(){var r;const e=(r=Fo())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function W_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function H_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Q_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J_(){const r=Te();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function gf(){return!mf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _f(){return!mf()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function yf(){try{return typeof indexedDB=="object"}catch{return!1}}function X_(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Y_="FirebaseError";class Pt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Y_,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Z_(s,n):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Pt(i,c,n)}}function Z_(r,e){return r.replace(ey,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const ey=/\{\$([^}]+)}/g;function ty(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function st(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(ah(s)&&ah(o)){if(!st(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function ah(r){return r!==null&&typeof r=="object"}/**
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
 */function rs(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Ai(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function bi(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function ny(r,e){const t=new ry(r,e);return t.subscribe.bind(t)}class ry{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");iy(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Ba),i.error===void 0&&(i.error=Ba),i.complete===void 0&&(i.complete=Ba);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iy(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ba(){}/**
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
 */function ne(r){return r&&r._delegate?r._delegate:r}class Mn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bn="[DEFAULT]";/**
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
 */class sy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new j_;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ay(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:oy(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oy(r){return r===bn?void 0:r}function ay(r){return r.instantiationMode==="EAGER"}/**
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
 */class cy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(J||(J={}));const uy={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},ly=J.INFO,hy={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},dy=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=hy[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=ly,this._logHandler=dy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const fy=(r,e)=>e.some(t=>r instanceof t);let ch,uh;function py(){return ch||(ch=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function my(){return uh||(uh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const If=new WeakMap,tc=new WeakMap,Ef=new WeakMap,qa=new WeakMap,Uc=new WeakMap;function gy(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(Yt(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&If.set(t,r)}).catch(()=>{}),Uc.set(e,r),e}function _y(r){if(tc.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});tc.set(r,e)}let nc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return tc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Ef.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Yt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function yy(r){nc=r(nc)}function Iy(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(ja(this),e,...t);return Ef.set(n,e.sort?e.sort():[e]),Yt(n)}:my().includes(r)?function(...e){return r.apply(ja(this),e),Yt(If.get(this))}:function(...e){return Yt(r.apply(ja(this),e))}}function Ey(r){return typeof r=="function"?Iy(r):(r instanceof IDBTransaction&&_y(r),fy(r,py())?new Proxy(r,nc):r)}function Yt(r){if(r instanceof IDBRequest)return gy(r);if(qa.has(r))return qa.get(r);const e=Ey(r);return e!==r&&(qa.set(r,e),Uc.set(e,r)),e}const ja=r=>Uc.get(r);function Ty(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),c=Yt(o);return n&&o.addEventListener("upgradeneeded",u=>{n(Yt(o.result),u.oldVersion,u.newVersion,Yt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const vy=["get","getKey","getAll","getAllKeys","count"],wy=["put","add","delete","clear"],$a=new Map;function lh(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=wy.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||vy.includes(t)))return;const s=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return $a.set(e,s),s}yy(r=>({...r,get:(e,t,n)=>lh(e,t)||r.get(e,t,n),has:(e,t)=>!!lh(e,t)||r.has(e,t)}));/**
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
 */class Ay{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(by(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function by(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rc="@firebase/app",hh="0.13.2";/**
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
 */const wt=new Fc("@firebase/app"),Ry="@firebase/app-compat",Sy="@firebase/analytics-compat",Py="@firebase/analytics",Cy="@firebase/app-check-compat",Vy="@firebase/app-check",Dy="@firebase/auth",ky="@firebase/auth-compat",Ny="@firebase/database",xy="@firebase/data-connect",Oy="@firebase/database-compat",My="@firebase/functions",Ly="@firebase/functions-compat",Fy="@firebase/installations",Uy="@firebase/installations-compat",By="@firebase/messaging",qy="@firebase/messaging-compat",jy="@firebase/performance",$y="@firebase/performance-compat",zy="@firebase/remote-config",Gy="@firebase/remote-config-compat",Ky="@firebase/storage",Wy="@firebase/storage-compat",Hy="@firebase/firestore",Qy="@firebase/ai",Jy="@firebase/firestore-compat",Xy="firebase",Yy="11.10.0";/**
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
 */const fo="[DEFAULT]",Zy={[rc]:"fire-core",[Ry]:"fire-core-compat",[Py]:"fire-analytics",[Sy]:"fire-analytics-compat",[Vy]:"fire-app-check",[Cy]:"fire-app-check-compat",[Dy]:"fire-auth",[ky]:"fire-auth-compat",[Ny]:"fire-rtdb",[xy]:"fire-data-connect",[Oy]:"fire-rtdb-compat",[My]:"fire-fn",[Ly]:"fire-fn-compat",[Fy]:"fire-iid",[Uy]:"fire-iid-compat",[By]:"fire-fcm",[qy]:"fire-fcm-compat",[jy]:"fire-perf",[$y]:"fire-perf-compat",[zy]:"fire-rc",[Gy]:"fire-rc-compat",[Ky]:"fire-gcs",[Wy]:"fire-gcs-compat",[Hy]:"fire-fst",[Jy]:"fire-fst-compat",[Qy]:"fire-vertex","fire-js":"fire-js",[Xy]:"fire-js-all"};/**
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
 */const po=new Map,eI=new Map,ic=new Map;function dh(r,e){try{r.container.addComponent(e)}catch(t){wt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function yr(r){const e=r.name;if(ic.has(e))return wt.debug(`There were multiple attempts to register component ${e}.`),!1;ic.set(e,r);for(const t of po.values())dh(t,r);for(const t of eI.values())dh(t,r);return!0}function is(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function tI(r,e,t=fo){is(r,e).clearInstance(t)}function qe(r){return r==null?!1:r.settings!==void 0}/**
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
 */const nI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new ns("app","Firebase",nI);/**
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
 */class rI{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
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
 */const qr=Yy;function iI(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:fo,automaticDataCollectionEnabled:!0},e),i=n.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(t||(t=df()),!t)throw Zt.create("no-options");const s=po.get(i);if(s){if(st(t,s.options)&&st(n,s.config))return s;throw Zt.create("duplicate-app",{appName:i})}const o=new cy(i);for(const u of ic.values())o.addComponent(u);const c=new rI(t,n,o);return po.set(i,c),c}function Tf(r=fo){const e=po.get(r);if(!e&&r===fo&&df())return iI();if(!e)throw Zt.create("no-app",{appName:r});return e}function en(r,e,t){var n;let i=(n=Zy[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wt.warn(c.join(" "));return}yr(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const sI="firebase-heartbeat-database",oI=1,qi="firebase-heartbeat-store";let za=null;function vf(){return za||(za=Ty(sI,oI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(qi)}catch(t){console.warn(t)}}}}).catch(r=>{throw Zt.create("idb-open",{originalErrorMessage:r.message})})),za}async function aI(r){try{const t=(await vf()).transaction(qi),n=await t.objectStore(qi).get(wf(r));return await t.done,n}catch(e){if(e instanceof Pt)wt.warn(e.message);else{const t=Zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wt.warn(t.message)}}}async function fh(r,e){try{const n=(await vf()).transaction(qi,"readwrite");await n.objectStore(qi).put(e,wf(r)),await n.done}catch(t){if(t instanceof Pt)wt.warn(t.message);else{const n=Zt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wt.warn(n.message)}}}function wf(r){return`${r.name}!${r.options.appId}`}/**
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
 */const cI=1024,uI=30;class lI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dI(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ph();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>uI){const o=fI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){wt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ph(),{heartbeatsToSend:n,unsentEntries:i}=hI(this._heartbeatsCache.heartbeats),s=ho(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return wt.warn(t),""}}}function ph(){return new Date().toISOString().substring(0,10)}function hI(r,e=cI){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),mh(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class dI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yf()?X_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await aI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mh(r){return ho(JSON.stringify({version:2,heartbeats:r})).length}function fI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function pI(r){yr(new Mn("platform-logger",e=>new Ay(e),"PRIVATE")),yr(new Mn("heartbeat",e=>new lI(e),"PRIVATE")),en(rc,hh,r),en(rc,hh,"esm2017"),en("fire-js","")}pI("");var mI="firebase",gI="11.10.0";/**
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
 */en(mI,gI,"app");function Bc(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function Af(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _I=Af,bf=new ns("auth","Firebase",Af());/**
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
 */const mo=new Fc("@firebase/auth");function yI(r,...e){mo.logLevel<=J.WARN&&mo.warn(`Auth (${qr}): ${r}`,...e)}function Js(r,...e){mo.logLevel<=J.ERROR&&mo.error(`Auth (${qr}): ${r}`,...e)}/**
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
 */function Ze(r,...e){throw jc(r,...e)}function Xe(r,...e){return jc(r,...e)}function qc(r,e,t){const n=Object.assign(Object.assign({},_I()),{[e]:t});return new ns("auth","Firebase",n).create(e,{appName:r.name})}function vt(r){return qc(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rf(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Ze(r,"argument-error"),qc(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jc(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return bf.create(r,...e)}function z(r,e,...t){if(!r)throw jc(e,...t)}function yt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Js(e),new Error(e)}function At(r,e){r||yt(e)}/**
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
 */function sc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function II(){return gh()==="http:"||gh()==="https:"}function gh(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function EI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(II()||H_()||"connection"in navigator)?navigator.onLine:!0}function TI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ss{constructor(e,t){this.shortDelay=e,this.longDelay=t,At(t>e,"Short delay should be less than long delay!"),this.isMobile=K_()||Q_()}get(){return EI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $c(r,e){At(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Sf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],AI=new ss(3e4,6e4);function Ct(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function pt(r,e,t,n,i={}){return Pf(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const c=rs(Object.assign({key:r.config.apiKey},o)).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:u},s);return W_()||(h.referrerPolicy="no-referrer"),r.emulatorConfig&&Wn(r.emulatorConfig.host)&&(h.credentials="include"),Sf.fetch()(await Cf(r,r.config.apiHost,t,c),h)})}async function Pf(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},vI),e);try{const i=new RI(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw qs(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw qs(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw qs(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw qs(r,"user-disabled",o);const f=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw qc(r,f,h);Ze(r,f)}}catch(i){if(i instanceof Pt)throw i;Ze(r,"network-request-failed",{message:String(i)})}}async function os(r,e,t,n,i={}){const s=await pt(r,e,t,n,i);return"mfaPendingCredential"in s&&Ze(r,"multi-factor-auth-required",{_serverResponse:s}),s}async function Cf(r,e,t,n){const i=`${e}${t}?${n}`,s=r,o=s.config.emulator?$c(r.config,i):`${r.config.apiScheme}://${i}`;return wI.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function bI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Xe(this.auth,"network-request-failed")),AI.get())})}}function qs(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Xe(r,e,n);return i.customData._tokenResponse=t,i}function _h(r){return r!==void 0&&r.enterprise!==void 0}class SI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return bI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function PI(r,e){return pt(r,"GET","/v2/recaptchaConfig",Ct(r,e))}/**
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
 */async function CI(r,e){return pt(r,"POST","/v1/accounts:delete",e)}async function go(r,e){return pt(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Di(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VI(r,e=!1){const t=ne(r),n=await t.getIdToken(e),i=zc(n);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:Di(Ga(i.auth_time)),issuedAtTime:Di(Ga(i.iat)),expirationTime:Di(Ga(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ga(r){return Number(r)*1e3}function zc(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Js("JWT malformed, contained fewer than 3 sections"),null;try{const i=uf(t);return i?JSON.parse(i):(Js("Failed to decode base64 JWT payload"),null)}catch(i){return Js("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yh(r){const e=zc(r);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ir(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Pt&&DI(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function DI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class kI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class oc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _o(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Ir(r,go(t,{idToken:n}));z(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Vf(s.providerUserInfo):[],c=xI(r.providerData,o),u=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new oc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function NI(r){const e=ne(r);await _o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xI(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Vf(r){return r.map(e=>{var{providerId:t}=e,n=Bc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function OI(r,e){const t=await Pf(r,{},async()=>{const n=rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=await Cf(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:n};return r.emulatorConfig&&Wn(r.emulatorConfig.host)&&(u.credentials="include"),Sf.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function MI(r,e){return pt(r,"POST","/v2/accounts:revokeToken",Ct(r,e))}/**
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
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=yh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await OI(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new fr;return n&&(z(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
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
 */function Ut(r,e){z(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class nt{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Bc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ir(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return VI(this,e)}reload(){return NI(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await _o(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(vt(this.auth));const e=await this.getIdToken();return await Ir(this,CI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,c,u,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,v=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=t.photoURL)!==null&&o!==void 0?o:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,L=(h=t.createdAt)!==null&&h!==void 0?h:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:K,isAnonymous:Z,providerData:G,stsTokenManager:E}=t;z(U&&E,e,"internal-error");const _=fr.fromJSON(this.name,E);z(typeof U=="string",e,"internal-error"),Ut(p,e.name),Ut(g,e.name),z(typeof K=="boolean",e,"internal-error"),z(typeof Z=="boolean",e,"internal-error"),Ut(v,e.name),Ut(C,e.name),Ut(D,e.name),Ut(k,e.name),Ut(L,e.name),Ut(B,e.name);const I=new nt({uid:U,auth:e,email:g,emailVerified:K,displayName:p,isAnonymous:Z,photoURL:C,phoneNumber:v,tenantId:D,stsTokenManager:_,createdAt:L,lastLoginAt:B});return G&&Array.isArray(G)&&(I.providerData=G.map(T=>Object.assign({},T))),k&&(I._redirectEventId=k),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new fr;i.updateFromServerResponse(t);const s=new nt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await _o(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Vf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new fr;c.updateFromIdToken(n);const u=new nt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new oc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Ih=new Map;function It(r){At(r instanceof Function,"Expected a class definition");let e=Ih.get(r);return e?(At(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Ih.set(r,e),e)}/**
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
 */class Df{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Df.type="NONE";const Eh=Df;/**
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
 */function Xs(r,e,t){return`firebase:${r}:${e}:${t}`}class pr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Xs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await go(this.auth,{idToken:e}).catch(()=>{});return t?nt._fromGetAccountInfoResponse(this.auth,t,e):null}return nt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pr(It(Eh),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||It(Eh);const o=Xs(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await go(e,{idToken:f}).catch(()=>{});if(!g)break;p=await nt._fromGetAccountInfoResponse(e,g,f)}else p=nt._fromJSON(e,f);h!==s&&(c=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new pr(s,e,n):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new pr(s,e,n))}}/**
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
 */function Th(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Of(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lf(e))return"Blackberry";if(Ff(e))return"Webos";if(Nf(e))return"Safari";if((e.includes("chrome/")||xf(e))&&!e.includes("edge/"))return"Chrome";if(Mf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function kf(r=Te()){return/firefox\//i.test(r)}function Nf(r=Te()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xf(r=Te()){return/crios\//i.test(r)}function Of(r=Te()){return/iemobile/i.test(r)}function Mf(r=Te()){return/android/i.test(r)}function Lf(r=Te()){return/blackberry/i.test(r)}function Ff(r=Te()){return/webos/i.test(r)}function Gc(r=Te()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function LI(r=Te()){var e;return Gc(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FI(){return J_()&&document.documentMode===10}function Uf(r=Te()){return Gc(r)||Mf(r)||Ff(r)||Lf(r)||/windows phone/i.test(r)||Of(r)}/**
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
 */function Bf(r,e=[]){let t;switch(r){case"Browser":t=Th(Te());break;case"Worker":t=`${Th(Te())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qr}/${n}`}/**
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
 */class UI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function BI(r,e={}){return pt(r,"GET","/v2/passwordPolicy",Ct(r,e))}/**
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
 */const qI=6;class jI{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:qI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class $I{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vh(this),this.idTokenSubscription=new vh(this),this.beforeStateQueue=new UI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=It(t)),this._initializationPromise=this.queue(async()=>{var n,i,s;if(!this._deleted&&(this.persistenceManager=await pr.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await go(this,{idToken:e}),n=await nt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _o(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(vt(this));const t=e?ne(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BI(this),t=new jI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await MI(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&It(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await pr.create(this,[It(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&yI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Vt(r){return ne(r)}class vh{constructor(e){this.auth=e,this.observer=null,this.addObserver=ny(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Uo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zI(r){Uo=r}function qf(r){return Uo.loadJS(r)}function GI(){return Uo.recaptchaEnterpriseScript}function KI(){return Uo.gapiScript}function WI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class HI{constructor(){this.enterprise=new QI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class QI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const JI="recaptcha-enterprise",jf="NO_RECAPTCHA";class XI{constructor(e){this.type=JI,this.auth=Vt(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{PI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new SI(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){const u=window.grecaptcha;_h(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(jf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HI().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{n(this.auth).then(c=>{if(!t&&_h(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=GI();u.length!==0&&(u+=c),qf(u).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function wh(r,e,t,n=!1,i=!1){const s=new XI(r);let o;if(i)o=jf;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function yo(r,e,t,n,i){var s;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await wh(r,e,t,t==="getOobCode");return n(r,o)}else return n(r,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await wh(r,e,t,t==="getOobCode");return n(r,c)}else return Promise.reject(o)})}/**
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
 */function YI(r,e){const t=is(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(st(s,e??{}))return i;Ze(i,"already-initialized")}return t.initialize({options:e})}function ZI(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(It);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function eE(r,e,t){const n=Vt(r);z(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=$f(e),{host:o,port:c}=tE(e),u=c===null?"":`:${c}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){z(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),z(st(h,n.config.emulator)&&st(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,Wn(o)?(Lc(`${s}//${o}${u}`),pf("Auth",!0)):nE()}function $f(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function tE(r){const e=$f(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Ah(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:Ah(o)}}}function Ah(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function nE(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Kc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yt("not implemented")}_getIdTokenResponse(e){return yt("not implemented")}_linkToIdToken(e,t){return yt("not implemented")}_getReauthenticationResolver(e){return yt("not implemented")}}async function rE(r,e){return pt(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function iE(r,e){return os(r,"POST","/v1/accounts:signInWithPassword",Ct(r,e))}async function sE(r,e){return pt(r,"POST","/v1/accounts:sendOobCode",Ct(r,e))}async function oE(r,e){return sE(r,e)}/**
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
 */async function aE(r,e){return os(r,"POST","/v1/accounts:signInWithEmailLink",Ct(r,e))}async function cE(r,e){return os(r,"POST","/v1/accounts:signInWithEmailLink",Ct(r,e))}/**
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
 */class ji extends Kc{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ji(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ji(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yo(e,t,"signInWithPassword",iE);case"emailLink":return aE(e,{email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yo(e,n,"signUpPassword",rE);case"emailLink":return cE(e,{idToken:t,email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mr(r,e){return os(r,"POST","/v1/accounts:signInWithIdp",Ct(r,e))}/**
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
 */const uE="http://localhost";class bt extends Kc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new bt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Bc(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new bt(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return mr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,mr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mr(e,t)}buildRequest(){const e={requestUri:uE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rs(t)}return e}}/**
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
 */function lE(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hE(r){const e=Ai(bi(r)).link,t=e?Ai(bi(e)).deep_link_id:null,n=Ai(bi(r)).deep_link_id;return(n?Ai(bi(n)).link:null)||n||t||e||r}class Wc{constructor(e){var t,n,i,s,o,c;const u=Ai(bi(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(n=u.oobCode)!==null&&n!==void 0?n:null,p=lE((i=u.mode)!==null&&i!==void 0?i:null);z(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=hE(e);try{return new Wc(t)}catch{return null}}}/**
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
 */class jr{constructor(){this.providerId=jr.PROVIDER_ID}static credential(e,t){return ji._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Wc.parseLink(t);return z(n,"argument-error"),ji._fromEmailAndCode(e,n.code,n.tenantId)}}jr.PROVIDER_ID="password";jr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Bo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $r extends Bo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ys extends $r{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return z("providerId"in t&&"signInMethod"in t,"argument-error"),bt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),bt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ys.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ys.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:c}=e;if(!n&&!i&&!t&&!s||!c)return null;try{return new Ys(c)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class $t extends $r{constructor(){super("facebook.com")}static credential(e){return bt._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
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
 */class zt extends $r{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return bt._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return zt.credential(t,n)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
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
 */class Gt extends $r{constructor(){super("github.com")}static credential(e){return bt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
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
 */class Kt extends $r{constructor(){super("twitter.com")}static credential(e,t){return bt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Kt.credential(t,n)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
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
 */async function dE(r,e){return os(r,"POST","/v1/accounts:signUp",Ct(r,e))}/**
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
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await nt._fromIdTokenResponse(e,n,i),o=bh(n);return new Ln({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=bh(n);return new Ln({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function bh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Io extends Pt{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Io(e,t,n,i)}}function zf(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(r,s,e,n):s})}async function fE(r,e,t=!1){const n=await Ir(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ln._forOperation(r,"link",n)}/**
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
 */async function pE(r,e,t=!1){const{auth:n}=r;if(qe(n.app))return Promise.reject(vt(n));const i="reauthenticate";try{const s=await Ir(r,zf(n,i,e,r),t);z(s.idToken,n,"internal-error");const o=zc(s.idToken);z(o,n,"internal-error");const{sub:c}=o;return z(r.uid===c,n,"user-mismatch"),Ln._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ze(n,"user-mismatch"),s}}/**
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
 */async function Gf(r,e,t=!1){if(qe(r.app))return Promise.reject(vt(r));const n="signIn",i=await zf(r,n,e),s=await Ln._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}async function mE(r,e){return Gf(Vt(r),e)}/**
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
 */async function Kf(r){const e=Vt(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ER(r,e,t){const n=Vt(r);await yo(n,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",oE)}async function TR(r,e,t){if(qe(r.app))return Promise.reject(vt(r));const n=Vt(r),o=await yo(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dE).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Kf(r),u}),c=await Ln._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function vR(r,e,t){return qe(r.app)?Promise.reject(vt(r)):mE(ne(r),jr.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Kf(r),n})}/**
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
 */async function gE(r,e){return pt(r,"POST","/v1/accounts:update",e)}/**
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
 */async function wR(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=ne(r),s={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Ir(n,gE(n.auth,s));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const c=n.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=n.displayName,c.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function _E(r,e,t,n){return ne(r).onIdTokenChanged(e,t,n)}function yE(r,e,t){return ne(r).beforeAuthStateChanged(e,t)}function AR(r,e,t,n){return ne(r).onAuthStateChanged(e,t,n)}function bR(r){return ne(r).signOut()}const Eo="__sak";/**
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
 */class Wf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Eo,"1"),this.storage.removeItem(Eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const IE=1e3,EE=10;class Hf extends Wf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);FI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,EE):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},IE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hf.type="LOCAL";const TE=Hf;/**
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
 */class Qf extends Wf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qf.type="SESSION";const Jf=Qf;/**
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
 */function vE(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new qo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(o).map(async h=>h(t.origin,s)),u=await vE(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
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
 */function Hc(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class wE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const h=Hc("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function lt(){return window}function AE(r){lt().location.href=r}/**
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
 */function Xf(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function bE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RE(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function SE(){return Xf()?self:null}/**
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
 */const Yf="firebaseLocalStorageDb",PE=1,To="firebaseLocalStorage",Zf="fbase_key";class as{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jo(r,e){return r.transaction([To],e?"readwrite":"readonly").objectStore(To)}function CE(){const r=indexedDB.deleteDatabase(Yf);return new as(r).toPromise()}function ac(){const r=indexedDB.open(Yf,PE);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(To,{keyPath:Zf})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(To)?e(n):(n.close(),await CE(),e(await ac()))})})}async function Rh(r,e,t){const n=jo(r,!0).put({[Zf]:e,value:t});return new as(n).toPromise()}async function VE(r,e){const t=jo(r,!1).get(e),n=await new as(t).toPromise();return n===void 0?null:n.value}function Sh(r,e){const t=jo(r,!0).delete(e);return new as(t).toPromise()}const DE=800,kE=3;class ep{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ac(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>kE)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(SE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await bE(),!this.activeServiceWorker)return;this.sender=new wE(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ac();return await Rh(e,Eo,"1"),await Sh(e,Eo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>VE(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=jo(i,!1).getAll();return new as(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ep.type="LOCAL";const NE=ep;new ss(3e4,6e4);/**
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
 */function Qc(r,e){return e?It(e):(z(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Jc extends Kc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xE(r){return Gf(r.auth,new Jc(r),r.bypassAuthState)}function OE(r){const{auth:e,user:t}=r;return z(t,e,"internal-error"),pE(t,new Jc(r),r.bypassAuthState)}async function ME(r){const{auth:e,user:t}=r;return z(t,e,"internal-error"),fE(t,new Jc(r),r.bypassAuthState)}/**
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
 */class tp{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xE;case"linkViaPopup":case"linkViaRedirect":return ME;case"reauthViaPopup":case"reauthViaRedirect":return OE;default:Ze(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LE=new ss(2e3,1e4);async function RR(r,e,t){if(qe(r.app))return Promise.reject(Xe(r,"operation-not-supported-in-this-environment"));const n=Vt(r);Rf(r,e,Bo);const i=Qc(n,t);return new Qt(n,"signInViaPopup",e,i).executeNotNull()}async function SR(r,e,t){const n=ne(r);if(qe(n.auth.app))return Promise.reject(Xe(n.auth,"operation-not-supported-in-this-environment"));Rf(n.auth,e,Bo);const i=Qc(n.auth,t);return new Qt(n.auth,"reauthViaPopup",e,i,n).executeNotNull()}class Qt extends tp{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Qt.currentPopupAction&&Qt.currentPopupAction.cancel(),Qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const e=Hc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LE.get())};e()}}Qt.currentPopupAction=null;/**
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
 */const FE="pendingRedirect",Zs=new Map;class UE extends tp{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Zs.get(this.auth._key());if(!e){try{const n=await BE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Zs.set(this.auth._key(),e)}return this.bypassAuthState||Zs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BE(r,e){const t=$E(e),n=jE(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function qE(r,e){Zs.set(r._key(),e)}function jE(r){return It(r._redirectPersistence)}function $E(r){return Xs(FE,r.config.apiKey,r.name)}async function zE(r,e,t=!1){if(qe(r.app))return Promise.reject(vt(r));const n=Vt(r),i=Qc(n,e),o=await new UE(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const GE=600*1e3;class KE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!np(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ph(e))}saveEventToCache(e){this.cachedEventUids.add(Ph(e)),this.lastProcessedEventTime=Date.now()}}function Ph(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function np({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WE(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return np(r);default:return!1}}/**
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
 */async function HE(r,e={}){return pt(r,"GET","/v1/projects",e)}/**
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
 */const QE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JE=/^https?/;async function XE(r){if(r.config.emulator)return;const{authorizedDomains:e}=await HE(r);for(const t of e)try{if(YE(t))return}catch{}Ze(r,"unauthorized-domain")}function YE(r){const e=sc(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!JE.test(t))return!1;if(QE.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const ZE=new ss(3e4,6e4);function Ch(){const r=lt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function eT(r){return new Promise((e,t)=>{var n,i,s;function o(){Ch(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ch(),t(Xe(r,"network-request-failed"))},timeout:ZE.get()})}if(!((i=(n=lt().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=lt().gapi)===null||s===void 0)&&s.load)o();else{const c=WI("iframefcb");return lt()[c]=()=>{gapi.load?o():t(Xe(r,"network-request-failed"))},qf(`${KI()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw eo=null,e})}let eo=null;function tT(r){return eo=eo||eT(r),eo}/**
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
 */const nT=new ss(5e3,15e3),rT="__/auth/iframe",iT="emulator/auth/iframe",sT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aT(r){const e=r.config;z(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?$c(e,iT):`https://${r.config.authDomain}/${rT}`,n={apiKey:e.apiKey,appName:r.name,v:qr},i=oT.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${rs(n).slice(1)}`}async function cT(r){const e=await tT(r),t=lt().gapi;return z(t,r,"internal-error"),e.open({where:document.body,url:aT(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sT,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=Xe(r,"network-request-failed"),c=lt().setTimeout(()=>{s(o)},nT.get());function u(){lt().clearTimeout(c),i(n)}n.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const uT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lT=500,hT=600,dT="_blank",fT="http://localhost";class Vh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pT(r,e,t,n=lT,i=hT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const u=Object.assign(Object.assign({},uT),{width:n.toString(),height:i.toString(),top:s,left:o}),h=Te().toLowerCase();t&&(c=xf(h)?dT:t),kf(h)&&(e=e||fT,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[v,C])=>`${g}${v}=${C},`,"");if(LI(h)&&c!=="_self")return mT(e||"",c),new Vh(null);const p=window.open(e||"",c,f);z(p,r,"popup-blocked");try{p.focus()}catch{}return new Vh(p)}function mT(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const gT="__/auth/handler",_T="emulator/auth/handler",yT=encodeURIComponent("fac");async function Dh(r,e,t,n,i,s){z(r.config.authDomain,r,"auth-domain-config-required"),z(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:qr,eventId:i};if(e instanceof Bo){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",ty(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof $r){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await r._getAppCheckToken(),h=u?`#${yT}=${encodeURIComponent(u)}`:"";return`${IT(r)}?${rs(c).slice(1)}${h}`}function IT({config:r}){return r.emulator?$c(r,_T):`https://${r.authDomain}/${gT}`}/**
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
 */const Ka="webStorageSupport";class ET{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jf,this._completeRedirectFn=zE,this._overrideRedirectResult=qE}async _openPopup(e,t,n,i){var s;At((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Dh(e,t,n,sc(),i);return pT(e,o,Hc())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Dh(e,t,n,sc(),i);return AE(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(At(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await cT(e),n=new KE(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ka,{type:Ka},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ka];o!==void 0&&t(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=XE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Uf()||Nf()||Gc()}}const TT=ET;var kh="@firebase/auth",Nh="1.10.8";/**
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
 */class vT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AT(r){yr(new Mn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bf(r)},h=new $I(n,i,s,u);return ZI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),yr(new Mn("auth-internal",e=>{const t=Vt(e.getProvider("auth").getImmediate());return(n=>new vT(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(kh,Nh,wT(r)),en(kh,Nh,"esm2017")}/**
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
 */const bT=300,RT=ff("authIdTokenMaxAge")||bT;let xh=null;const ST=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>RT)return;const i=t==null?void 0:t.token;xh!==i&&(xh=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PR(r=Tf()){const e=is(r,"auth");if(e.isInitialized())return e.getImmediate();const t=YI(r,{popupRedirectResolver:TT,persistence:[NE,TE,Jf]}),n=ff("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=ST(s.toString());yE(t,o,()=>o(t.currentUser)),_E(t,c=>o(c))}}const i=hf("auth");return i&&eE(t,`http://${i}`),t}function PT(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}zI({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Xe("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",PT().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AT("Browser");var Oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tn,rp;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function I(){}I.prototype=_.prototype,E.D=_.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(T,w,S){for(var y=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)y[mt-2]=arguments[mt];return _.prototype[w].apply(T,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,I){I||(I=0);var T=Array(16);if(typeof _=="string")for(var w=0;16>w;++w)T[w]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(w=0;16>w;++w)T[w]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=E.g[0],I=E.g[1],w=E.g[2];var S=E.g[3],y=_+(S^I&(w^S))+T[0]+3614090360&4294967295;_=I+(y<<7&4294967295|y>>>25),y=S+(w^_&(I^w))+T[1]+3905402710&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(I^S&(_^I))+T[2]+606105819&4294967295,w=S+(y<<17&4294967295|y>>>15),y=I+(_^w&(S^_))+T[3]+3250441966&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(S^I&(w^S))+T[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(w^_&(I^w))+T[5]+1200080426&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(I^S&(_^I))+T[6]+2821735955&4294967295,w=S+(y<<17&4294967295|y>>>15),y=I+(_^w&(S^_))+T[7]+4249261313&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(S^I&(w^S))+T[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(w^_&(I^w))+T[9]+2336552879&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(I^S&(_^I))+T[10]+4294925233&4294967295,w=S+(y<<17&4294967295|y>>>15),y=I+(_^w&(S^_))+T[11]+2304563134&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(S^I&(w^S))+T[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(w^_&(I^w))+T[13]+4254626195&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(I^S&(_^I))+T[14]+2792965006&4294967295,w=S+(y<<17&4294967295|y>>>15),y=I+(_^w&(S^_))+T[15]+1236535329&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(w^S&(I^w))+T[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^w&(_^I))+T[6]+3225465664&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(S^_))+T[11]+643717713&4294967295,w=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(w^S))+T[0]+3921069994&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^S&(I^w))+T[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^w&(_^I))+T[10]+38016083&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(S^_))+T[15]+3634488961&4294967295,w=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(w^S))+T[4]+3889429448&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^S&(I^w))+T[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^w&(_^I))+T[14]+3275163606&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(S^_))+T[3]+4107603335&4294967295,w=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(w^S))+T[8]+1163531501&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^S&(I^w))+T[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^w&(_^I))+T[2]+4243563512&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(S^_))+T[7]+1735328473&4294967295,w=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(w^S))+T[12]+2368359562&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(I^w^S)+T[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^w)+T[8]+2272392833&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^I)+T[11]+1839030562&4294967295,w=S+(y<<16&4294967295|y>>>16),y=I+(w^S^_)+T[14]+4259657740&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^S)+T[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^w)+T[4]+1272893353&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^I)+T[7]+4139469664&4294967295,w=S+(y<<16&4294967295|y>>>16),y=I+(w^S^_)+T[10]+3200236656&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^S)+T[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^w)+T[0]+3936430074&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^I)+T[3]+3572445317&4294967295,w=S+(y<<16&4294967295|y>>>16),y=I+(w^S^_)+T[6]+76029189&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^S)+T[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^w)+T[12]+3873151461&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^I)+T[15]+530742520&4294967295,w=S+(y<<16&4294967295|y>>>16),y=I+(w^S^_)+T[2]+3299628645&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(w^(I|~S))+T[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~w))+T[7]+1126891415&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~I))+T[14]+2878612391&4294967295,w=S+(y<<15&4294967295|y>>>17),y=I+(S^(w|~_))+T[5]+4237533241&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~S))+T[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~w))+T[3]+2399980690&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~I))+T[10]+4293915773&4294967295,w=S+(y<<15&4294967295|y>>>17),y=I+(S^(w|~_))+T[1]+2240044497&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~S))+T[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~w))+T[15]+4264355552&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~I))+T[6]+2734768916&4294967295,w=S+(y<<15&4294967295|y>>>17),y=I+(S^(w|~_))+T[13]+1309151649&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~S))+T[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~w))+T[11]+3174756917&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~I))+T[2]+718787259&4294967295,w=S+(y<<15&4294967295|y>>>17),y=I+(S^(w|~_))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+S&4294967295}n.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var I=_-this.blockSize,T=this.B,w=this.h,S=0;S<_;){if(w==0)for(;S<=I;)i(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<_;)if(T[w++]=E.charCodeAt(S++),w==this.blockSize){i(this,T),w=0;break}}else for(;S<_;)if(T[w++]=E[S++],w==this.blockSize){i(this,T),w=0;break}}this.h=w,this.o+=_},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var I=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=I&255,I/=256;for(this.u(E),E=Array(16),_=I=0;4>_;++_)for(var T=0;32>T;T+=8)E[I++]=this.g[_]>>>T&255;return E};function s(E,_){var I=c;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=_(E)}function o(E,_){this.h=_;for(var I=[],T=!0,w=E.length-1;0<=w;w--){var S=E[w]|0;T&&S==_||(I[w]=S,T=!1)}this.g=I}var c={};function u(E){return-128<=E&&128>E?s(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return k(h(-E));for(var _=[],I=1,T=0;E>=I;T++)_[T]=E/I|0,I*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return k(f(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),T=p,w=0;w<E.length;w+=8){var S=Math.min(8,E.length-w),y=parseInt(E.substring(w,w+S),_);8>S?(S=h(Math.pow(_,S)),T=T.j(S).add(h(y))):(T=T.j(I),T=T.add(h(y)))}return T}var p=u(0),g=u(1),v=u(16777216);r=o.prototype,r.m=function(){if(D(this))return-k(this).m();for(var E=0,_=1,I=0;I<this.g.length;I++){var T=this.i(I);E+=(0<=T?T:4294967296+T)*_,_*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(D(this))return"-"+k(this).toString(E);for(var _=h(Math.pow(E,6)),I=this,T="";;){var w=K(I,_).g;I=L(I,w.j(_));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=w,C(I))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function D(E){return E.h==-1}r.l=function(E){return E=L(this,E),D(E)?-1:C(E)?0:1};function k(E){for(var _=E.g.length,I=[],T=0;T<_;T++)I[T]=~E.g[T];return new o(I,~E.h).add(g)}r.abs=function(){return D(this)?k(this):this},r.add=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0,w=0;w<=_;w++){var S=T+(this.i(w)&65535)+(E.i(w)&65535),y=(S>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);T=y>>>16,S&=65535,y&=65535,I[w]=y<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function L(E,_){return E.add(k(_))}r.j=function(E){if(C(this)||C(E))return p;if(D(this))return D(E)?k(this).j(k(E)):k(k(this).j(E));if(D(E))return k(this.j(k(E)));if(0>this.l(v)&&0>E.l(v))return h(this.m()*E.m());for(var _=this.g.length+E.g.length,I=[],T=0;T<2*_;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<E.g.length;w++){var S=this.i(T)>>>16,y=this.i(T)&65535,mt=E.i(w)>>>16,ni=E.i(w)&65535;I[2*T+2*w]+=y*ni,B(I,2*T+2*w),I[2*T+2*w+1]+=S*ni,B(I,2*T+2*w+1),I[2*T+2*w+1]+=y*mt,B(I,2*T+2*w+1),I[2*T+2*w+2]+=S*mt,B(I,2*T+2*w+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new o(I,0)};function B(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function U(E,_){this.g=E,this.h=_}function K(E,_){if(C(_))throw Error("division by zero");if(C(E))return new U(p,p);if(D(E))return _=K(k(E),_),new U(k(_.g),k(_.h));if(D(_))return _=K(E,k(_)),new U(k(_.g),_.h);if(30<E.g.length){if(D(E)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,T=_;0>=T.l(E);)I=Z(I),T=Z(T);var w=G(I,1),S=G(T,1);for(T=G(T,2),I=G(I,2);!C(T);){var y=S.add(T);0>=y.l(E)&&(w=w.add(I),S=y),T=G(T,1),I=G(I,1)}return _=L(E,w.j(_)),new U(w,_)}for(w=p;0<=E.l(_);){for(I=Math.max(1,Math.floor(E.m()/_.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(I),y=S.j(_);D(y)||0<y.l(E);)I-=T,S=h(I),y=S.j(_);C(S)&&(S=g),w=w.add(S),E=L(E,y)}return new U(w,E)}r.A=function(E){return K(this,E).h},r.and=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)&E.i(T);return new o(I,this.h&E.h)},r.or=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)|E.i(T);return new o(I,this.h|E.h)},r.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)^E.i(T);return new o(I,this.h^E.h)};function Z(E){for(var _=E.g.length+1,I=[],T=0;T<_;T++)I[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(I,E.h)}function G(E,_){var I=_>>5;_%=32;for(var T=E.g.length-I,w=[],S=0;S<T;S++)w[S]=0<_?E.i(S+I)>>>_|E.i(S+I+1)<<32-_:E.i(S+I);return new o(w,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,rp=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,tn=o}).apply(typeof Oh<"u"?Oh:typeof self<"u"?self:typeof window<"u"?window:{});var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ip,Ri,sp,to,cc,op,ap,cp;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,l,d){return a==Array.prototype||a==Object.prototype||(a[l]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof js=="object"&&js];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(a,l){if(l)e:{var d=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var b=a[m];if(!(b in d))break e;d=d[b]}a=a[a.length-1],m=d[a],l=l(m),l!=m&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}function s(a,l){a instanceof String&&(a+="");var d=0,m=!1,b={next:function(){if(!m&&d<a.length){var P=d++;return{value:l(P,a[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var l=typeof a;return l=l!="object"?l:a?Array.isArray(a)?"array":l:"null",l=="array"||l=="object"&&typeof a.length=="number"}function h(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function f(a,l,d){return a.call.apply(a.bind,arguments)}function p(a,l,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),a.apply(l,b)}}return function(){return a.apply(l,arguments)}}function g(a,l,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function v(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,l){function d(){}d.prototype=l.prototype,a.aa=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,b,P){for(var M=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)M[ae-2]=arguments[ae];return l.prototype[b].apply(m,M)}}function D(a){const l=a.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=a[m];return d}return[]}function k(a,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const b=a.length||0,P=m.length||0;a.length=b+P;for(let M=0;M<P;M++)a[b+M]=m[M]}else a.push(m)}}class L{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(a){return/^[\s\xa0]*$/.test(a)}function U(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function K(a){return K[" "](a),a}K[" "]=function(){};var Z=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function G(a,l,d){for(const m in a)l.call(d,a[m],m,a)}function E(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function _(a){const l={};for(const d in a)l[d]=a[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,l){let d,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(d in m)a[d]=m[d];for(let P=0;P<I.length;P++)d=I[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function w(a){var l=1;a=a.split(":");const d=[];for(;0<l&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function y(){var a=ga;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class mt{constructor(){this.h=this.g=null}add(l,d){const m=ni.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var ni=new L(()=>new Zg,a=>a.reset());class Zg{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ri,ii=!1,ga=new mt,sl=()=>{const a=c.Promise.resolve(void 0);ri=()=>{a.then(e_)}};var e_=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){S(d)}var l=ni;l.j(a),100>l.h&&(l.h++,a.next=l.g,l.g=a)}ii=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ve(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var t_=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return a})();function si(a,l){if(Ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget){if(Z){e:{try{K(l.nodeName);var b=!0;break e}catch{}b=!1}b||(l=null)}}else d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:n_[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&si.aa.h.call(this)}}C(si,Ve);var n_={2:"touch",3:"pen",4:"mouse"};si.prototype.h=function(){si.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var vs="closure_listenable_"+(1e6*Math.random()|0),r_=0;function i_(a,l,d,m,b){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=b,this.key=++r_,this.da=this.fa=!1}function ws(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function As(a){this.src=a,this.g={},this.h=0}As.prototype.add=function(a,l,d,m,b){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var M=ya(a,l,m,b);return-1<M?(l=a[M],d||(l.fa=!1)):(l=new i_(l,this.src,P,!!m,b),l.fa=d,a.push(l)),l};function _a(a,l){var d=l.type;if(d in a.g){var m=a.g[d],b=Array.prototype.indexOf.call(m,l,void 0),P;(P=0<=b)&&Array.prototype.splice.call(m,b,1),P&&(ws(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ya(a,l,d,m){for(var b=0;b<a.length;++b){var P=a[b];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==m)return b}return-1}var Ia="closure_lm_"+(1e6*Math.random()|0),Ea={};function ol(a,l,d,m,b){if(Array.isArray(l)){for(var P=0;P<l.length;P++)ol(a,l[P],d,m,b);return null}return d=ul(d),a&&a[vs]?a.K(l,d,h(m)?!!m.capture:!1,b):s_(a,l,d,!1,m,b)}function s_(a,l,d,m,b,P){if(!l)throw Error("Invalid event type");var M=h(b)?!!b.capture:!!b,ae=va(a);if(ae||(a[Ia]=ae=new As(a)),d=ae.add(l,d,m,M,P),d.proxy)return d;if(m=o_(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)t_||(b=M),b===void 0&&(b=!1),a.addEventListener(l.toString(),m,b);else if(a.attachEvent)a.attachEvent(cl(l.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function o_(){function a(d){return l.call(a.src,a.listener,d)}const l=a_;return a}function al(a,l,d,m,b){if(Array.isArray(l))for(var P=0;P<l.length;P++)al(a,l[P],d,m,b);else m=h(m)?!!m.capture:!!m,d=ul(d),a&&a[vs]?(a=a.i,l=String(l).toString(),l in a.g&&(P=a.g[l],d=ya(P,d,m,b),-1<d&&(ws(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete a.g[l],a.h--)))):a&&(a=va(a))&&(l=a.g[l.toString()],a=-1,l&&(a=ya(l,d,m,b)),(d=-1<a?l[a]:null)&&Ta(d))}function Ta(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[vs])_a(l.i,a);else{var d=a.type,m=a.proxy;l.removeEventListener?l.removeEventListener(d,m,a.capture):l.detachEvent?l.detachEvent(cl(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=va(l))?(_a(d,a),d.h==0&&(d.src=null,l[Ia]=null)):ws(a)}}}function cl(a){return a in Ea?Ea[a]:Ea[a]="on"+a}function a_(a,l){if(a.da)a=!0;else{l=new si(l,this);var d=a.listener,m=a.ha||a.src;a.fa&&Ta(a),a=d.call(m,l)}return a}function va(a){return a=a[Ia],a instanceof As?a:null}var wa="__closure_events_fn_"+(1e9*Math.random()>>>0);function ul(a){return typeof a=="function"?a:(a[wa]||(a[wa]=function(l){return a.handleEvent(l)}),a[wa])}function De(){Ot.call(this),this.i=new As(this),this.M=this,this.F=null}C(De,Ot),De.prototype[vs]=!0,De.prototype.removeEventListener=function(a,l,d,m){al(this,a,l,d,m)};function Ue(a,l){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=l.type||l,typeof l=="string")l=new Ve(l,a);else if(l instanceof Ve)l.target=l.target||a;else{var b=l;l=new Ve(m,a),T(l,b)}if(b=!0,d)for(var P=d.length-1;0<=P;P--){var M=l.g=d[P];b=bs(M,m,!0,l)&&b}if(M=l.g=a,b=bs(M,m,!0,l)&&b,b=bs(M,m,!1,l)&&b,d)for(P=0;P<d.length;P++)M=l.g=d[P],b=bs(M,m,!1,l)&&b}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var a=this.i,l;for(l in a.g){for(var d=a.g[l],m=0;m<d.length;m++)ws(d[m]);delete a.g[l],a.h--}}this.F=null},De.prototype.K=function(a,l,d,m){return this.i.add(String(a),l,!1,d,m)},De.prototype.L=function(a,l,d,m){return this.i.add(String(a),l,!0,d,m)};function bs(a,l,d,m){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,P=0;P<l.length;++P){var M=l[P];if(M&&!M.da&&M.capture==d){var ae=M.listener,Se=M.ha||M.src;M.fa&&_a(a.i,M),b=ae.call(Se,m)!==!1&&b}}return b&&!m.defaultPrevented}function ll(a,l,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(a,l||0)}function hl(a){a.g=ll(()=>{a.g=null,a.i&&(a.i=!1,hl(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class c_ extends Ot{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:hl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(a){Ot.call(this),this.h=a,this.g={}}C(oi,Ot);var dl=[];function fl(a){G(a.g,function(l,d){this.g.hasOwnProperty(d)&&Ta(l)},a),a.g={}}oi.prototype.N=function(){oi.aa.N.call(this),fl(this)},oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Aa=c.JSON.stringify,u_=c.JSON.parse,l_=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ba(){}ba.prototype.h=null;function pl(a){return a.h||(a.h=a.i())}function ml(){}var ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ra(){Ve.call(this,"d")}C(Ra,Ve);function Sa(){Ve.call(this,"c")}C(Sa,Ve);var En={},gl=null;function Rs(){return gl=gl||new De}En.La="serverreachability";function _l(a){Ve.call(this,En.La,a)}C(_l,Ve);function ci(a){const l=Rs();Ue(l,new _l(l))}En.STAT_EVENT="statevent";function yl(a,l){Ve.call(this,En.STAT_EVENT,a),this.stat=l}C(yl,Ve);function Be(a){const l=Rs();Ue(l,new yl(l,a))}En.Ma="timingevent";function Il(a,l){Ve.call(this,En.Ma,a),this.size=l}C(Il,Ve);function ui(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},l)}function li(){this.g=!0}li.prototype.xa=function(){this.g=!1};function h_(a,l,d,m,b,P){a.info(function(){if(a.g)if(P)for(var M="",ae=P.split("&"),Se=0;Se<ae.length;Se++){var ee=ae[Se].split("=");if(1<ee.length){var ke=ee[0];ee=ee[1];var Ne=ke.split("_");M=2<=Ne.length&&Ne[1]=="type"?M+(ke+"="+ee+"&"):M+(ke+"=redacted&")}}else M=null;else M=P;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+l+`
`+d+`
`+M})}function d_(a,l,d,m,b,P,M){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+l+`
`+d+`
`+P+" "+M})}function Zn(a,l,d,m){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+p_(a,d)+(m?" "+m:"")})}function f_(a,l){a.info(function(){return"TIMEOUT: "+l})}li.prototype.info=function(){};function p_(a,l){if(!a.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var M=1;M<b.length;M++)b[M]=""}}}}return Aa(d)}catch{return l}}var Ss={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},El={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pa;function Ps(){}C(Ps,ba),Ps.prototype.g=function(){return new XMLHttpRequest},Ps.prototype.i=function(){return{}},Pa=new Ps;function Mt(a,l,d,m){this.j=a,this.i=l,this.l=d,this.R=m||1,this.U=new oi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tl}function Tl(){this.i=null,this.g="",this.h=!1}var vl={},Ca={};function Va(a,l,d){a.L=1,a.v=ks(gt(l)),a.m=d,a.P=!0,wl(a,null)}function wl(a,l){a.F=Date.now(),Cs(a),a.A=gt(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Ll(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Tl,a.g=th(a.j,d?l:null,!a.m),0<a.O&&(a.M=new c_(g(a.Y,a,a.g),a.O)),l=a.U,d=a.g,m=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(dl[0]=b.toString()),b=dl);for(var P=0;P<b.length;P++){var M=ol(d,b[P],m||l.handleEvent,!1,l.h||l);if(!M)break;l.g[M.key]=M}l=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,l)):(a.u="GET",a.g.ea(a.A,a.u,null,l)),ci(),h_(a.i,a.u,a.A,a.l,a.R,a.m)}Mt.prototype.ca=function(a){a=a.target;const l=this.M;l&&_t(a)==3?l.j():this.Y(a)},Mt.prototype.Y=function(a){try{if(a==this.g)e:{const Ne=_t(this.g);var l=this.g.Ba();const nr=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||zl(this.g)))){this.J||Ne!=4||l==7||(l==8||0>=nr?ci(3):ci(2)),Da(this);var d=this.g.Z();this.X=d;t:if(Al(this)){var m=zl(this.g);a="";var b=m.length,P=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),hi(this);var M="";break t}this.h.i=new c.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,a+=this.h.i.decode(m[l],{stream:!(P&&l==b-1)});m.length=0,this.h.g+=a,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=d==200,d_(this.i,this.u,this.A,this.l,this.R,Ne,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ae,Se=this.g;if((ae=Se.g?Se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(ae)){var ee=ae;break t}}ee=null}if(d=ee)Zn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ka(this,d);else{this.o=!1,this.s=3,Be(12),Tn(this),hi(this);break e}}if(this.P){d=!0;let et;for(;!this.J&&this.C<M.length;)if(et=m_(this,M),et==Ca){Ne==4&&(this.s=4,Be(14),d=!1),Zn(this.i,this.l,null,"[Incomplete Response]");break}else if(et==vl){this.s=4,Be(15),Zn(this.i,this.l,M,"[Invalid Chunk]"),d=!1;break}else Zn(this.i,this.l,et,null),ka(this,et);if(Al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||M.length!=0||this.h.h||(this.s=1,Be(16),d=!1),this.o=this.o&&d,!d)Zn(this.i,this.l,M,"[Invalid Chunked Response]"),Tn(this),hi(this);else if(0<M.length&&!this.W){this.W=!0;var ke=this.j;ke.g==this&&ke.ba&&!ke.M&&(ke.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Fa(ke),ke.M=!0,Be(11))}}else Zn(this.i,this.l,M,null),ka(this,M);Ne==4&&Tn(this),this.o&&!this.J&&(Ne==4?Xl(this.j,this):(this.o=!1,Cs(this)))}else k_(this.g),d==400&&0<M.indexOf("Unknown SID")?(this.s=3,Be(12)):(this.s=0,Be(13)),Tn(this),hi(this)}}}catch{}finally{}};function Al(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function m_(a,l){var d=a.C,m=l.indexOf(`
`,d);return m==-1?Ca:(d=Number(l.substring(d,m)),isNaN(d)?vl:(m+=1,m+d>l.length?Ca:(l=l.slice(m,m+d),a.C=m+d,l)))}Mt.prototype.cancel=function(){this.J=!0,Tn(this)};function Cs(a){a.S=Date.now()+a.I,bl(a,a.I)}function bl(a,l){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ui(g(a.ba,a),l)}function Da(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Mt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(f_(this.i,this.A),this.L!=2&&(ci(),Be(17)),Tn(this),this.s=2,hi(this)):bl(this,this.S-a)};function hi(a){a.j.G==0||a.J||Xl(a.j,a)}function Tn(a){Da(a);var l=a.M;l&&typeof l.ma=="function"&&l.ma(),a.M=null,fl(a.U),a.g&&(l=a.g,a.g=null,l.abort(),l.ma())}function ka(a,l){try{var d=a.j;if(d.G!=0&&(d.g==a||Na(d.h,a))){if(!a.K&&Na(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Fs(d),Ms(d);else break e;La(d),Be(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=ui(g(d.Za,d),6e3));if(1>=Pl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else wn(d,11)}else if((a.K||d.g==a)&&Fs(d),!B(l))for(b=d.Da.g.parse(l),l=0;l<b.length;l++){let ee=b[l];if(d.T=ee[0],ee=ee[1],d.G==2)if(ee[0]=="c"){d.K=ee[1],d.ia=ee[2];const ke=ee[3];ke!=null&&(d.la=ke,d.j.info("VER="+d.la));const Ne=ee[4];Ne!=null&&(d.Aa=Ne,d.j.info("SVER="+d.Aa));const nr=ee[5];nr!=null&&typeof nr=="number"&&0<nr&&(m=1.5*nr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const et=a.g;if(et){const Bs=et.g?et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bs){var P=m.h;P.g||Bs.indexOf("spdy")==-1&&Bs.indexOf("quic")==-1&&Bs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(xa(P,P.h),P.h=null))}if(m.D){const Ua=et.g?et.g.getResponseHeader("X-HTTP-Session-Id"):null;Ua&&(m.ya=Ua,ue(m.I,m.D,Ua))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var M=a;if(m.qa=eh(m,m.J?m.ia:null,m.W),M.K){Cl(m.h,M);var ae=M,Se=m.L;Se&&(ae.I=Se),ae.B&&(Da(ae),Cs(ae)),m.g=M}else Ql(m);0<d.i.length&&Ls(d)}else ee[0]!="stop"&&ee[0]!="close"||wn(d,7);else d.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?wn(d,7):Ma(d):ee[0]!="noop"&&d.l&&d.l.ta(ee),d.v=0)}}ci(4)}catch{}}var g_=class{constructor(a,l){this.g=a,this.map=l}};function Rl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Pl(a){return a.h?1:a.g?a.g.size:0}function Na(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function xa(a,l){a.g?a.g.add(l):a.h=l}function Cl(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Rl.prototype.cancel=function(){if(this.i=Vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.D);return l}return D(a.i)}function __(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var l=[],d=a.length,m=0;m<d;m++)l.push(a[m]);return l}l=[],d=0;for(m in a)l[d++]=a[m];return l}function y_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var l=[];a=a.length;for(var d=0;d<a;d++)l.push(d);return l}l=[],d=0;for(const m in a)l[d++]=m;return l}}}function Dl(a,l){if(a.forEach&&typeof a.forEach=="function")a.forEach(l,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,l,void 0);else for(var d=y_(a),m=__(a),b=m.length,P=0;P<b;P++)l.call(void 0,m[P],d&&d[P],a)}var kl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function I_(a,l){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),b=null;if(0<=m){var P=a[d].substring(0,m);b=a[d].substring(m+1)}else P=a[d];l(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function vn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof vn){this.h=a.h,Vs(this,a.j),this.o=a.o,this.g=a.g,Ds(this,a.s),this.l=a.l;var l=a.i,d=new pi;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Nl(this,d),this.m=a.m}else a&&(l=String(a).match(kl))?(this.h=!1,Vs(this,l[1]||"",!0),this.o=di(l[2]||""),this.g=di(l[3]||"",!0),Ds(this,l[4]),this.l=di(l[5]||"",!0),Nl(this,l[6]||"",!0),this.m=di(l[7]||"")):(this.h=!1,this.i=new pi(null,this.h))}vn.prototype.toString=function(){var a=[],l=this.j;l&&a.push(fi(l,xl,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(fi(l,xl,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(fi(d,d.charAt(0)=="/"?v_:T_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",fi(d,A_)),a.join("")};function gt(a){return new vn(a)}function Vs(a,l,d){a.j=d?di(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function Ds(a,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);a.s=l}else a.s=null}function Nl(a,l,d){l instanceof pi?(a.i=l,b_(a.i,a.h)):(d||(l=fi(l,w_)),a.i=new pi(l,a.h))}function ue(a,l,d){a.i.set(l,d)}function ks(a){return ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function di(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fi(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,E_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function E_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xl=/[#\/\?@]/g,T_=/[#\?:]/g,v_=/[#\?]/g,w_=/[#\?@]/g,A_=/#/g;function pi(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Lt(a){a.g||(a.g=new Map,a.h=0,a.i&&I_(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=pi.prototype,r.add=function(a,l){Lt(this),this.i=null,a=er(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function Ol(a,l){Lt(a),l=er(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Ml(a,l){return Lt(a),l=er(a,l),a.g.has(l)}r.forEach=function(a,l){Lt(this),this.g.forEach(function(d,m){d.forEach(function(b){a.call(l,b,m,this)},this)},this)},r.na=function(){Lt(this);const a=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const b=a[m];for(let P=0;P<b.length;P++)d.push(l[m])}return d},r.V=function(a){Lt(this);let l=[];if(typeof a=="string")Ml(this,a)&&(l=l.concat(this.g.get(er(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)l=l.concat(a[d])}return l},r.set=function(a,l){return Lt(this),this.i=null,a=er(this,a),Ml(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=this.V(a),0<a.length?String(a[0]):l):l};function Ll(a,l,d){Ol(a,l),0<d.length&&(a.i=null,a.g.set(er(a,l),D(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const P=encodeURIComponent(String(m)),M=this.V(m);for(m=0;m<M.length;m++){var b=P;M[m]!==""&&(b+="="+encodeURIComponent(String(M[m]))),a.push(b)}}return this.i=a.join("&")};function er(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function b_(a,l){l&&!a.j&&(Lt(a),a.i=null,a.g.forEach(function(d,m){var b=m.toLowerCase();m!=b&&(Ol(this,m),Ll(this,b,d))},a)),a.j=l}function R_(a,l){const d=new li;if(c.Image){const m=new Image;m.onload=v(Ft,d,"TestLoadImage: loaded",!0,l,m),m.onerror=v(Ft,d,"TestLoadImage: error",!1,l,m),m.onabort=v(Ft,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=v(Ft,d,"TestLoadImage: timeout",!1,l,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else l(!1)}function S_(a,l){const d=new li,m=new AbortController,b=setTimeout(()=>{m.abort(),Ft(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(b),P.ok?Ft(d,"TestPingServer: ok",!0,l):Ft(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),Ft(d,"TestPingServer: error",!1,l)})}function Ft(a,l,d,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(d)}catch{}}function P_(){this.g=new l_}function C_(a,l,d){const m=d||"";try{Dl(a,function(b,P){let M=b;h(b)&&(M=Aa(b)),l.push(m+P+"="+encodeURIComponent(M))})}catch(b){throw l.push(m+"type="+encodeURIComponent("_badmap")),b}}function Ns(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Ns,ba),Ns.prototype.g=function(){return new xs(this.l,this.j)},Ns.prototype.i=(function(a){return function(){return a}})({});function xs(a,l){De.call(this),this.D=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(xs,De),r=xs.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=l,this.readyState=1,gi(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(l.body=a),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?mi(this):gi(this),this.readyState==3&&Fl(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,mi(this))},r.Qa=function(a){this.g&&(this.response=a,mi(this))},r.ga=function(){this.g&&mi(this)};function mi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,gi(a)}r.setRequestHeader=function(a,l){this.u.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function gi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ul(a){let l="";return G(a,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function Oa(a,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Ul(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ue(a,l,d))}function ge(a){De.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ge,De);var V_=/^https?$/i,D_=["POST","PUT"];r=ge.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pa.g(),this.v=this.o?pl(this.o):pl(Pa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(P){Bl(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)d.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),b=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(D_,l,void 0))||m||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,M]of d)this.g.setRequestHeader(P,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$l(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){Bl(this,P)}};function Bl(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.m=5,ql(a),Os(a)}function ql(a){a.A||(a.A=!0,Ue(a,"complete"),Ue(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ue(this,"complete"),Ue(this,"abort"),Os(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Os(this,!0)),ge.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?jl(this):this.bb())},r.bb=function(){jl(this)};function jl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_t(a)!=4||a.Z()!=2)){if(a.u&&_t(a)==4)ll(a.Ea,0,a);else if(Ue(a,"readystatechange"),_t(a)==4){a.h=!1;try{const M=a.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=M===0){var b=String(a.D).match(kl)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),m=!V_.test(b?b.toLowerCase():"")}d=m}if(d)Ue(a,"complete"),Ue(a,"success");else{a.m=6;try{var P=2<_t(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",ql(a)}}finally{Os(a)}}}}function Os(a,l){if(a.g){$l(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,l||Ue(a,"ready");try{d.onreadystatechange=m}catch{}}}function $l(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function _t(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),u_(l)}};function zl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function k_(a){const l={};a=(a.g&&2<=_t(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(B(a[m]))continue;var d=w(a[m]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[b]||[];l[b]=P,P.push(d)}E(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _i(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function Gl(a){this.Aa=0,this.i=[],this.j=new li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_i("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_i("baseRetryDelayMs",5e3,a),this.cb=_i("retryDelaySeedMs",1e4,a),this.Wa=_i("forwardChannelMaxRetries",2,a),this.wa=_i("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Rl(a&&a.concurrentRequestLimit),this.Da=new P_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Gl.prototype,r.la=8,r.G=1,r.connect=function(a,l,d,m){Be(0),this.W=a,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=eh(this,null,this.W),Ls(this)};function Ma(a){if(Kl(a),a.G==3){var l=a.U++,d=gt(a.I);if(ue(d,"SID",a.K),ue(d,"RID",l),ue(d,"TYPE","terminate"),yi(a,d),l=new Mt(a,a.j,l),l.L=2,l.v=ks(gt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=th(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Cs(l)}Zl(a)}function Ms(a){a.g&&(Fa(a),a.g.cancel(),a.g=null)}function Kl(a){Ms(a),a.u&&(c.clearTimeout(a.u),a.u=null),Fs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ls(a){if(!Sl(a.h)&&!a.s){a.s=!0;var l=a.Ga;ri||sl(),ii||(ri(),ii=!0),ga.add(l,a),a.B=0}}function N_(a,l){return Pl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=l.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ui(g(a.Ga,a,l),Yl(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Mt(this,this.j,a);let P=this.o;if(this.S&&(P?(P=_(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Hl(this,b,l),d=gt(this.I),ue(d,"RID",a),ue(d,"CVER",22),this.D&&ue(d,"X-HTTP-Session-Id",this.D),yi(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(Ul(P)))+"&"+l:this.m&&Oa(d,this.m,P)),xa(this.h,b),this.Ua&&ue(d,"TYPE","init"),this.P?(ue(d,"$req",l),ue(d,"SID","null"),b.T=!0,Va(b,d,null)):Va(b,d,l),this.G=2}}else this.G==3&&(a?Wl(this,a):this.i.length==0||Sl(this.h)||Wl(this))};function Wl(a,l){var d;l?d=l.l:d=a.U++;const m=gt(a.I);ue(m,"SID",a.K),ue(m,"RID",d),ue(m,"AID",a.T),yi(a,m),a.m&&a.o&&Oa(m,a.m,a.o),d=new Mt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),l&&(a.i=l.D.concat(a.i)),l=Hl(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),xa(a.h,d),Va(d,m,l)}function yi(a,l){a.H&&G(a.H,function(d,m){ue(l,m,d)}),a.l&&Dl({},function(d,m){ue(l,m,d)})}function Hl(a,l,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var b=a.i;let P=-1;for(;;){const M=["count="+d];P==-1?0<d?(P=b[0].g,M.push("ofs="+P)):P=0:M.push("ofs="+P);let ae=!0;for(let Se=0;Se<d;Se++){let ee=b[Se].g;const ke=b[Se].map;if(ee-=P,0>ee)P=Math.max(0,b[Se].g-100),ae=!1;else try{C_(ke,M,"req"+ee+"_")}catch{m&&m(ke)}}if(ae){m=M.join("&");break e}}}return a=a.i.splice(0,d),l.D=a,m}function Ql(a){if(!a.g&&!a.u){a.Y=1;var l=a.Fa;ri||sl(),ii||(ri(),ii=!0),ga.add(l,a),a.v=0}}function La(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ui(g(a.Fa,a),Yl(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Jl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ui(g(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Be(10),Ms(this),Jl(this))};function Fa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Jl(a){a.g=new Mt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var l=gt(a.qa);ue(l,"RID","rpc"),ue(l,"SID",a.K),ue(l,"AID",a.T),ue(l,"CI",a.F?"0":"1"),!a.F&&a.ja&&ue(l,"TO",a.ja),ue(l,"TYPE","xmlhttp"),yi(a,l),a.m&&a.o&&Oa(l,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ks(gt(l)),d.m=null,d.P=!0,wl(d,a)}r.Za=function(){this.C!=null&&(this.C=null,Ms(this),La(this),Be(19))};function Fs(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Xl(a,l){var d=null;if(a.g==l){Fs(a),Fa(a),a.g=null;var m=2}else if(Na(a.h,l))d=l.D,Cl(a.h,l),m=1;else return;if(a.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var b=a.B;m=Rs(),Ue(m,new Il(m,d)),Ls(a)}else Ql(a);else if(b=l.s,b==3||b==0&&0<l.X||!(m==1&&N_(a,l)||m==2&&La(a)))switch(d&&0<d.length&&(l=a.h,l.i=l.i.concat(d)),b){case 1:wn(a,5);break;case 4:wn(a,10);break;case 3:wn(a,6);break;default:wn(a,2)}}}function Yl(a,l){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*l}function wn(a,l){if(a.j.info("Error code "+l),l==2){var d=g(a.fb,a),m=a.Xa;const b=!m;m=new vn(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Vs(m,"https"),ks(m),b?R_(m.toString(),d):S_(m.toString(),d)}else Be(2);a.G=0,a.l&&a.l.sa(l),Zl(a),Kl(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function Zl(a){if(a.G=0,a.ka=[],a.l){const l=Vl(a.h);(l.length!=0||a.i.length!=0)&&(k(a.ka,l),k(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function eh(a,l,d){var m=d instanceof vn?gt(d):new vn(d);if(m.g!="")l&&(m.g=l+"."+m.g),Ds(m,m.s);else{var b=c.location;m=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var P=new vn(null);m&&Vs(P,m),l&&(P.g=l),b&&Ds(P,b),d&&(P.l=d),m=P}return d=a.D,l=a.ya,d&&l&&ue(m,d,l),ue(m,"VER",a.la),yi(a,m),m}function th(a,l,d){if(l&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Ca&&!a.pa?new ge(new Ns({eb:d})):new ge(a.pa),l.Ha(a.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function nh(){}r=nh.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Us(){}Us.prototype.g=function(a,l){return new He(a,l)};function He(a,l){De.call(this),this.g=new Gl(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(a?a["X-WebChannel-Client-Profile"]=l.va:a={"X-WebChannel-Client-Profile":l.va}),this.g.S=a,(a=l&&l.Sb)&&!B(a)&&(this.g.m=a),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!B(l)&&(this.g.D=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new tr(this)}C(He,De),He.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},He.prototype.close=function(){Ma(this.g)},He.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Aa(a),a=d);l.i.push(new g_(l.Ya++,a)),l.G==3&&Ls(l)},He.prototype.N=function(){this.g.l=null,delete this.j,Ma(this.g),delete this.g,He.aa.N.call(this)};function rh(a){Ra.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}C(rh,Ra);function ih(){Sa.call(this),this.status=1}C(ih,Sa);function tr(a){this.g=a}C(tr,nh),tr.prototype.ua=function(){Ue(this.g,"a")},tr.prototype.ta=function(a){Ue(this.g,new rh(a))},tr.prototype.sa=function(a){Ue(this.g,new ih)},tr.prototype.ra=function(){Ue(this.g,"b")},Us.prototype.createWebChannel=Us.prototype.g,He.prototype.send=He.prototype.o,He.prototype.open=He.prototype.m,He.prototype.close=He.prototype.close,cp=function(){return new Us},ap=function(){return Rs()},op=En,cc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ss.NO_ERROR=0,Ss.TIMEOUT=8,Ss.HTTP_ERROR=6,to=Ss,El.COMPLETE="complete",sp=El,ml.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",De.prototype.listen=De.prototype.K,Ri=ml,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha,ip=ge}).apply(typeof js<"u"?js:typeof self<"u"?self:typeof window<"u"?window:{});const Mh="@firebase/firestore",Lh="4.8.0";/**
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
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
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
 */let zr="11.10.0";/**
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
 */const rn=new Fc("@firebase/firestore");function ur(){return rn.logLevel}function CT(r){rn.setLogLevel(r)}function N(r,...e){if(rn.logLevel<=J.DEBUG){const t=e.map(Xc);rn.debug(`Firestore (${zr}): ${r}`,...t)}}function _e(r,...e){if(rn.logLevel<=J.ERROR){const t=e.map(Xc);rn.error(`Firestore (${zr}): ${r}`,...t)}}function Fe(r,...e){if(rn.logLevel<=J.WARN){const t=e.map(Xc);rn.warn(`Firestore (${zr}): ${r}`,...t)}}function Xc(r){if(typeof r=="string")return r;try{/**
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
 */function F(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,up(r,n,t)}function up(r,e,t){let n=`FIRESTORE (${zr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw _e(n),new Error(n)}function q(r,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,r||up(e,i,n)}function VT(r,e){r||F(57014,e)}function O(r,e){return r}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Re{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class lp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(be.UNAUTHENTICATED)))}shutdown(){}}class DT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class kT{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){q(this.o===void 0,42304);let n=this.i;const i=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let s=new Re;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Re,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const u=s;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},c=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Re)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(q(typeof n.accessToken=="string",31837,{l:n}),new lp(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string",2055,{h:e}),new be(e)}}class NT{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=be.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xT{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new NT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(be.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class uc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){q(this.o===void 0,3512);const n=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>n(s)))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new uc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new uc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class MT{getToken(){return Promise.resolve(new uc(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */function LT(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */function Yc(){return new TextEncoder}/**
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
 */class $o{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=LT(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function $(r,e){return r<e?-1:r>e?1:0}function lc(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),i=e.codePointAt(t);if(n!==i){if(n<128&&i<128)return $(n,i);{const s=Yc(),o=FT(s.encode(Fh(r,t)),s.encode(Fh(e,t)));return o!==0?o:$(n,i)}}t+=n>65535?2:1}return $(r.length,e.length)}function Fh(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function FT(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return $(r[t],e[t]);return $(r.length,e.length)}function Er(r,e,t){return r.length===e.length&&r.every(((n,i)=>t(n,e[i])))}function dp(r){return r+"\0"}/**
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
 */const hc="__name__";class ot{constructor(e,t,n){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&F(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return ot.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ot?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=ot.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return $(e.length,t.length)}static compareSegments(e,t){const n=ot.isNumericId(e),i=ot.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?ot.extractNumericId(e).compare(ot.extractNumericId(t)):lc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return tn.fromString(e.substring(4,e.length-2))}}class H extends ot{construct(e,t,n){return new H(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((i=>i.length>0)))}return new H(t)}static emptyPath(){return new H([])}}const UT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends ot{construct(e,t,n){return new he(e,t,n)}static isValidIdentifier(e){return UT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hc}static keyField(){return new he([hc])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(n+=c,i++):(s(),i++)}if(s(),o)throw new V(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new he(t)}static emptyPath(){return new he([])}}/**
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
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(H.fromString(e))}static fromName(e){return new x(H.fromString(e).popFirst(5))}static empty(){return new x(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&H.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return H.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new H(e.slice()))}}/**
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
 */function Zc(r,e,t){if(!t)throw new V(R.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function fp(r,e,t,n){if(e===!0&&n===!0)throw new V(R.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Uh(r){if(!x.isDocumentKey(r))throw new V(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Bh(r){if(x.isDocumentKey(r))throw new V(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function pp(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function zo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F(12329,{type:typeof r})}function Q(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new V(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zo(r);throw new V(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function mp(r,e){if(e<=0)throw new V(R.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ee(r,e){const t={typeString:r};return e&&(t.value=e),t}function Hn(r,e){if(!pp(r))throw new V(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,s="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(i&&typeof o!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${n}' field to equal '${s.value}'`;break}}if(t)throw new V(R.INVALID_ARGUMENT,t);return!0}/**
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
 */const qh=-62135596800,jh=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*jh);return new te(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qh)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jh}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hn(e,te._jsonSchema))return new te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:Ee("string",te._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
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
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new te(0,0))}static max(){return new j(new te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Tr=-1;class vr{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function dc(r){return r.fields.find((e=>e.kind===2))}function Rn(r){return r.fields.filter((e=>e.kind!==2))}function BT(r,e){let t=$(r.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let n=0;n<Math.min(r.fields.length,e.fields.length);++n)if(t=qT(r.fields[n],e.fields[n]),t!==0)return t;return $(r.fields.length,e.fields.length)}vr.UNKNOWN_ID=-1;class Nn{constructor(e,t){this.fieldPath=e,this.kind=t}}function qT(r,e){const t=he.comparator(r.fieldPath,e.fieldPath);return t!==0?t:$(r.kind,e.kind)}class wr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new wr(0,Je.min())}}function gp(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=j.fromTimestamp(n===1e9?new te(t+1,0):new te(t,n));return new Je(i,x.empty(),e)}function _p(r){return new Je(r.readTime,r.key,Tr)}class Je{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Je(j.min(),x.empty(),Tr)}static max(){return new Je(j.max(),x.empty(),Tr)}}function eu(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(r.documentKey,e.documentKey),t!==0?t:$(r.largestBatchId,e.largestBatchId))}/**
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
 */const yp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ip{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function dn(r){if(r.code!==R.FAILED_PRECONDITION||r.message!==yp)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A(((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):A.reject(t)}static resolve(e){return new A(((t,n)=>{t(e)}))}static reject(e){return new A(((t,n)=>{n(e)}))}static waitFor(e){return new A(((t,n)=>{let i=0,s=0,o=!1;e.forEach((c=>{++i,c.next((()=>{++s,o&&s===i&&t()}),(u=>n(u)))})),o=!0,s===i&&t()}))}static or(e){let t=A.resolve(!1);for(const n of e)t=t.next((i=>i?A.resolve(i):n()));return t}static forEach(e,t){const n=[];return e.forEach(((i,s)=>{n.push(t.call(this,i,s))})),this.waitFor(n)}static mapArray(e,t){return new A(((n,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next((f=>{o[h]=f,++c,c===s&&n(o)}),(f=>i(f)))}}))}static doWhile(e,t){return new A(((n,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):n()};s()}))}}/**
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
 */const Qe="SimpleDb";class Go{static open(e,t,n,i){try{return new Go(t,e.transaction(i,n))}catch(s){throw new ki(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Re,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new ki(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const i=tu(n.target.error);this.S.reject(new ki(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(N(Qe,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new $T(t)}}class ht{static delete(e){return N(Qe,"Removing database:",e),Pn(lf().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!yf())return!1;if(ht.F())return!0;const e=Te(),t=ht.M(e),n=0<t&&t<10,i=Ep(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,ht.M(Te())===12.2&&_e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(N(Qe,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{n(new ki(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new V(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new V(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new ki(e,o))},i.onupgradeneeded=s=>{N(Qe,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;if(this.L!==null&&this.L!==s.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${s.oldVersion}, event.newVersion=${s.newVersion}, db.version=${o.version}`);this.B.q(o,i.transaction,s.oldVersion,this.version).next((()=>{N(Qe,"Database upgrade to version "+this.version+" complete")}))}})),this.db.addEventListener("close",(t=>{const n=t.target;this.L=n.version}),{passive:!0})),this.db.addEventListener("versionchange",(t=>{var n;t.newVersion===null&&(Fe('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(n=this.databaseDeletedListener)===null||n===void 0||n.call(this))}),{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,n,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const c=Go.open(this.db,e,s?"readonly":"readwrite",n),u=i(c).next((h=>(c.v(),h))).catch((h=>(c.abort(h),A.reject(h)))).toPromise();return u.catch((()=>{})),await c.D,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&o<3;if(N(Qe,"Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Ep(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class jT{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return Pn(this.$.delete())}}class ki extends V{constructor(e,t){super(R.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function fn(r){return r.name==="IndexedDbTransactionError"}class $T{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(N(Qe,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(N(Qe,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Pn(n)}add(e){return N(Qe,"ADD",this.store.name,e,e),Pn(this.store.add(e))}get(e){return Pn(this.store.get(e)).next((t=>(t===void 0&&(t=null),N(Qe,"GET",this.store.name,e,t),t)))}delete(e){return N(Qe,"DELETE",this.store.name,e),Pn(this.store.delete(e))}count(){return N(Qe,"COUNT",this.store.name),Pn(this.store.count())}j(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new A(((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}}))}{const s=this.cursor(n),o=[];return this.J(s,((c,u)=>{o.push(u)})).next((()=>o))}}H(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new A(((i,s)=>{n.onerror=o=>{s(o.target.error)},n.onsuccess=o=>{i(o.target.result)}}))}Y(e,t){N(Qe,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Z=!1;const i=this.cursor(n);return this.J(i,((s,o,c)=>c.delete()))}X(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.J(i,t)}ee(e){const t=this.cursor({});return new A(((n,i)=>{t.onerror=s=>{const o=tu(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next((c=>{c?o.continue():n()})):n()}}))}J(e,t){const n=[];return new A(((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const u=new jT(c),h=t(c.primaryKey,c.value,u);if(h instanceof A){const f=h.catch((p=>(u.done(),A.reject(p))));n.push(f)}u.isDone?i():u.W===null?c.continue():c.continue(u.W)}})).next((()=>A.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Z?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Pn(r){return new A(((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=tu(n.target.error);t(i)}}))}let $h=!1;function tu(r){const e=ht.M(Te());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return $h||($h=!0,setTimeout((()=>{throw n}),0)),n}}return r}const Ni="IndexBackfiller";class zT{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){N(Ni,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.te.re();N(Ni,`Documents written: ${t}`)}catch(t){fn(t)?N(Ni,"Ignoring IndexedDB error during index backfill: ",t):await dn(t)}await this.ne(6e4)}))}}class GT{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.ie(t,e)))}ie(e,t){const n=new Set;let i=t,s=!0;return A.doWhile((()=>s===!0&&i>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!n.has(o))return N(Ni,`Processing collection: ${o}`),this.se(e,o,i).next((c=>{i-=c,n.add(o)}));s=!1})))).next((()=>t-i))}se(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next((s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this.oe(i,s))).next((c=>(N(Ni,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>o.size))}))))}oe(e,t){let n=e;return t.changes.forEach(((i,s)=>{const o=_p(s);eu(o,n)>0&&(n=o)})),new Je(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class $e{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this._e(n),this.ae=n=>t.writeSequenceNumber(n))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}$e.ue=-1;/**
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
 */const nn=-1;function cs(r){return r==null}function $i(r){return r===0&&1/r==-1/0}function Tp(r){return typeof r=="number"&&Number.isInteger(r)&&!$i(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const vo="";function Me(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=zh(e)),e=KT(r.get(t),e);return zh(e)}function KT(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case vo:t+="";break;default:t+=s}}return t}function zh(r){return r+vo+""}function ct(r){const e=r.length;if(q(e>=2,64408,{path:r}),e===2)return q(r.charAt(0)===vo&&r.charAt(1)==="",56145,{path:r}),H.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const o=r.indexOf(vo,s);switch((o<0||o>t)&&F(50515,{path:r}),r.charAt(o+1)){case"":const c=r.substring(s,o);let u;i.length===0?u=c:(i+=c,u=i,i=""),n.push(u);break;case"":i+=r.substring(s,o),i+="\0";break;case"":i+=r.substring(s,o+1);break;default:F(61167,{path:r})}s=o+2}return new H(n)}/**
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
 */const Sn="remoteDocuments",us="owner",rr="owner",zi="mutationQueues",WT="userId",tt="mutations",Gh="batchId",kn="userMutationsIndex",Kh=["userId","batchId"];/**
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
 */function no(r,e){return[r,Me(e)]}function vp(r,e,t){return[r,Me(e),t]}const HT={},Ar="documentMutations",wo="remoteDocumentsV14",QT=["prefixPath","collectionGroup","readTime","documentId"],ro="documentKeyIndex",JT=["prefixPath","collectionGroup","documentId"],wp="collectionGroupIndex",XT=["collectionGroup","readTime","prefixPath","documentId"],Gi="remoteDocumentGlobal",fc="remoteDocumentGlobalKey",br="targets",Ap="queryTargetsIndex",YT=["canonicalId","targetId"],Rr="targetDocuments",ZT=["targetId","path"],nu="documentTargetsIndex",ev=["path","targetId"],Ao="targetGlobalKey",xn="targetGlobal",Ki="collectionParents",tv=["collectionId","parent"],Sr="clientMetadata",nv="clientId",Ko="bundles",rv="bundleId",Wo="namedQueries",iv="name",ru="indexConfiguration",sv="indexId",pc="collectionGroupIndex",ov="collectionGroup",xi="indexState",av=["indexId","uid"],bp="sequenceNumberIndex",cv=["uid","sequenceNumber"],Oi="indexEntries",uv=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Rp="documentKeyIndex",lv=["indexId","uid","orderedDocumentKey"],Ho="documentOverlays",hv=["userId","collectionPath","documentId"],mc="collectionPathOverlayIndex",dv=["userId","collectionPath","largestBatchId"],Sp="collectionGroupOverlayIndex",fv=["userId","collectionGroup","largestBatchId"],iu="globals",pv="name",Pp=[zi,tt,Ar,Sn,br,us,xn,Rr,Sr,Gi,Ki,Ko,Wo],mv=[...Pp,Ho],Cp=[zi,tt,Ar,wo,br,us,xn,Rr,Sr,Gi,Ki,Ko,Wo,Ho],Vp=Cp,su=[...Vp,ru,xi,Oi],gv=su,Dp=[...su,iu],_v=Dp;/**
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
 */class gc extends Ip{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function we(r,e){const t=O(r);return ht.N(t.ce,e)}/**
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
 */function Wh(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function pn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function kp(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function Np(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ce{constructor(e,t){this.comparator=e,this.root=t||Pe.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $s(this.root,e,this.comparator,!1)}getReverseIterator(){return new $s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $s(this.root,e,this.comparator,!0)}}class $s{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??Pe.RED,this.left=i??Pe.EMPTY,this.right=s??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Pe(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Pe.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,n,i,s){return this}insert(e,t,n){return new Pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class se{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Hh(this.data.getIterator())}getIteratorFrom(e){return new Hh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new se(this.comparator);return t.data=e,t}}class Hh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ir(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class ze{constructor(e){this.fields=e,e.sort(he.comparator)}static empty(){return new ze([])}unionWith(e){let t=new se(he.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Er(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class xp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function yv(){return typeof atob<"u"}/**
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
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new xp("Invalid base64 string: "+s):s}})(e);return new me(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const Iv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(r){if(q(!!r,39018),typeof r=="string"){let e=0;const t=Iv.exec(r);if(q(!!t,46558,{timestamp:r}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:de(r.seconds),nanos:de(r.nanos)}}function de(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function St(r){return typeof r=="string"?me.fromBase64String(r):me.fromUint8Array(r)}/**
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
 */const Op="server_timestamp",Mp="__type__",Lp="__previous_value__",Fp="__local_write_time__";function Qo(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mp])===null||t===void 0?void 0:t.stringValue)===Op}function Jo(r){const e=r.mapValue.fields[Lp];return Qo(e)?Jo(e):e}function Wi(r){const e=Rt(r.mapValue.fields[Fp].timestampValue);return new te(e.seconds,e.nanos)}/**
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
 */class Ev{constructor(e,t,n,i,s,o,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Hi="(default)";class sn{constructor(e,t){this.projectId=e,this.database=t||Hi}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database===Hi}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ou="__type__",Up="__max__",Jt={mapValue:{fields:{__type__:{stringValue:Up}}}},au="__vector__",Pr="value",io={nullValue:"NULL_VALUE"};function on(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Qo(r)?4:Bp(r)?9007199254740991:Xo(r)?10:11:F(28295,{value:r})}function ft(r,e){if(r===e)return!0;const t=on(r);if(t!==on(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Wi(r).isEqual(Wi(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Rt(i.timestampValue),c=Rt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(i,s){return St(i.bytesValue).isEqual(St(s.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(i,s){return de(i.geoPointValue.latitude)===de(s.geoPointValue.latitude)&&de(i.geoPointValue.longitude)===de(s.geoPointValue.longitude)})(r,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return de(i.integerValue)===de(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=de(i.doubleValue),c=de(s.doubleValue);return o===c?$i(o)===$i(c):isNaN(o)&&isNaN(c)}return!1})(r,e);case 9:return Er(r.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:case 11:return(function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Wh(o)!==Wh(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!ft(o[u],c[u])))return!1;return!0})(r,e);default:return F(52216,{left:r})}}function Qi(r,e){return(r.values||[]).find((t=>ft(t,e)))!==void 0}function an(r,e){if(r===e)return 0;const t=on(r),n=on(e);if(t!==n)return $(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,e.booleanValue);case 2:return(function(s,o){const c=de(s.integerValue||s.doubleValue),u=de(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(r,e);case 3:return Qh(r.timestampValue,e.timestampValue);case 4:return Qh(Wi(r),Wi(e));case 5:return lc(r.stringValue,e.stringValue);case 6:return(function(s,o){const c=St(s),u=St(o);return c.compareTo(u)})(r.bytesValue,e.bytesValue);case 7:return(function(s,o){const c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=$(c[h],u[h]);if(f!==0)return f}return $(c.length,u.length)})(r.referenceValue,e.referenceValue);case 8:return(function(s,o){const c=$(de(s.latitude),de(o.latitude));return c!==0?c:$(de(s.longitude),de(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Jh(r.arrayValue,e.arrayValue);case 10:return(function(s,o){var c,u,h,f;const p=s.fields||{},g=o.fields||{},v=(c=p[Pr])===null||c===void 0?void 0:c.arrayValue,C=(u=g[Pr])===null||u===void 0?void 0:u.arrayValue,D=$(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Jh(v,C)})(r.mapValue,e.mapValue);case 11:return(function(s,o){if(s===Jt.mapValue&&o===Jt.mapValue)return 0;if(s===Jt.mapValue)return 1;if(o===Jt.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=lc(u[p],f[p]);if(g!==0)return g;const v=an(c[u[p]],h[f[p]]);if(v!==0)return v}return $(u.length,f.length)})(r.mapValue,e.mapValue);default:throw F(23264,{le:t})}}function Qh(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return $(r,e);const t=Rt(r),n=Rt(e),i=$(t.seconds,n.seconds);return i!==0?i:$(t.nanos,n.nanos)}function Jh(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=an(t[i],n[i]);if(s)return s}return $(t.length,n.length)}function Cr(r){return _c(r)}function _c(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=Rt(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return St(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return x.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=_c(s);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${_c(t.fields[o])}`;return i+"}"})(r.mapValue):F(61005,{value:r})}function so(r){switch(on(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Jo(r);return e?16+so(e):16;case 5:return 2*r.stringValue.length;case 6:return St(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,s)=>i+so(s)),0)})(r.arrayValue);case 10:case 11:return(function(n){let i=0;return pn(n.fields,((s,o)=>{i+=s.length+so(o)})),i})(r.mapValue);default:throw F(13486,{value:r})}}function Fn(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function yc(r){return!!r&&"integerValue"in r}function Ji(r){return!!r&&"arrayValue"in r}function Xh(r){return!!r&&"nullValue"in r}function Yh(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function oo(r){return!!r&&"mapValue"in r}function Xo(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[ou])===null||t===void 0?void 0:t.stringValue)===au}function Mi(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return pn(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Mi(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Mi(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Bp(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Up}const qp={mapValue:{fields:{[ou]:{stringValue:au},[Pr]:{arrayValue:{}}}}};function Tv(r){return"nullValue"in r?io:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Fn(sn.empty(),x.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Xo(r)?qp:{mapValue:{}}:F(35942,{value:r})}function vv(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Fn(sn.empty(),x.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?qp:"mapValue"in r?Xo(r)?{mapValue:{}}:Jt:F(61959,{value:r})}function Zh(r,e){const t=an(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function ed(r,e){const t=an(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Ce{constructor(e){this.value=e}static empty(){return new Ce({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!oo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mi(t)}setAll(e){let t=he.emptyPath(),n={},i=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,n,i),n={},i=[],t=c.popLast()}o?n[c.lastSegment()]=Mi(o):i.push(c.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());oo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];oo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){pn(t,((i,s)=>e[i]=s));for(const i of n)delete e[i]}clone(){return new Ce(Mi(this.value))}}function jp(r){const e=[];return pn(r.fields,((t,n)=>{const i=new he([t]);if(oo(n)){const s=jp(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)})),new ze(e)}/**
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
 */class le{constructor(e,t,n,i,s,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new le(e,0,j.min(),j.min(),j.min(),Ce.empty(),0)}static newFoundDocument(e,t,n,i){return new le(e,1,t,j.min(),n,i,0)}static newNoDocument(e,t){return new le(e,2,t,j.min(),j.min(),Ce.empty(),0)}static newUnknownDocument(e,t){return new le(e,3,t,j.min(),j.min(),Ce.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cn{constructor(e,t){this.position=e,this.inclusive=t}}function td(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=x.comparator(x.fromName(o.referenceValue),t.key):n=an(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function nd(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ft(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Xi{constructor(e,t="asc"){this.field=e,this.dir=t}}function wv(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class $p{}class X extends $p{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Av(e,t,n):t==="array-contains"?new Sv(e,n):t==="in"?new Qp(e,n):t==="not-in"?new Pv(e,n):t==="array-contains-any"?new Cv(e,n):new X(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new bv(e,n):new Rv(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(an(t,this.value)):t!==null&&on(this.value)===on(t)&&this.matchesComparison(an(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends $p{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new re(e,t)}matches(e){return Vr(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Vr(r){return r.op==="and"}function Ic(r){return r.op==="or"}function cu(r){return zp(r)&&Vr(r)}function zp(r){for(const e of r.filters)if(e instanceof re)return!1;return!0}function Ec(r){if(r instanceof X)return r.field.canonicalString()+r.op.toString()+Cr(r.value);if(cu(r))return r.filters.map((e=>Ec(e))).join(",");{const e=r.filters.map((t=>Ec(t))).join(",");return`${r.op}(${e})`}}function Gp(r,e){return r instanceof X?(function(n,i){return i instanceof X&&n.op===i.op&&n.field.isEqual(i.field)&&ft(n.value,i.value)})(r,e):r instanceof re?(function(n,i){return i instanceof re&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((s,o,c)=>s&&Gp(o,i.filters[c])),!0):!1})(r,e):void F(19439)}function Kp(r,e){const t=r.filters.concat(e);return re.create(t,r.op)}function Wp(r){return r instanceof X?(function(t){return`${t.field.canonicalString()} ${t.op} ${Cr(t.value)}`})(r):r instanceof re?(function(t){return t.op.toString()+" {"+t.getFilters().map(Wp).join(" ,")+"}"})(r):"Filter"}class Av extends X{constructor(e,t,n){super(e,t,n),this.key=x.fromName(n.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class bv extends X{constructor(e,t){super(e,"in",t),this.keys=Hp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Rv extends X{constructor(e,t){super(e,"not-in",t),this.keys=Hp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Hp(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((n=>x.fromName(n.referenceValue)))}class Sv extends X{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ji(t)&&Qi(t.arrayValue,this.value)}}class Qp extends X{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qi(this.value.arrayValue,t)}}class Pv extends X{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qi(this.value.arrayValue,t)}}class Cv extends X{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ji(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>Qi(this.value.arrayValue,n)))}}/**
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
 */class Vv{constructor(e,t=null,n=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Pe=null}}function Tc(r,e=null,t=[],n=[],i=null,s=null,o=null){return new Vv(r,e,t,n,i,s,o)}function Un(r){const e=O(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>Ec(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(s){return s.field.canonicalString()+s.dir})(n))).join(","),cs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Cr(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Cr(n))).join(",")),e.Pe=t}return e.Pe}function ls(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!wv(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Gp(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!nd(r.startAt,e.startAt)&&nd(r.endAt,e.endAt)}function bo(r){return x.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ro(r,e){return r.filters.filter((t=>t instanceof X&&t.field.isEqual(e)))}function rd(r,e,t){let n=io,i=!0;for(const s of Ro(r,e)){let o=io,c=!0;switch(s.op){case"<":case"<=":o=Tv(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=io}Zh({value:n,inclusive:i},{value:o,inclusive:c})<0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];Zh({value:n,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}function id(r,e,t){let n=Jt,i=!0;for(const s of Ro(r,e)){let o=Jt,c=!0;switch(s.op){case">=":case">":o=vv(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=Jt}ed({value:n,inclusive:i},{value:o,inclusive:c})>0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];ed({value:n,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
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
 */class Dt{constructor(e,t=null,n=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Jp(r,e,t,n,i,s,o,c){return new Dt(r,e,t,n,i,s,o,c)}function Gr(r){return new Dt(r)}function sd(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function uu(r){return r.collectionGroup!==null}function gr(r){const e=O(r);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new se(he.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Xi(s,n))})),t.has(he.keyField().canonicalString())||e.Te.push(new Xi(he.keyField(),n))}return e.Te}function Le(r){const e=O(r);return e.Ie||(e.Ie=Yp(e,gr(r))),e.Ie}function Xp(r){const e=O(r);return e.de||(e.de=Yp(e,r.explicitOrderBy)),e.de}function Yp(r,e){if(r.limitType==="F")return Tc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new Xi(i.field,s)}));const t=r.endAt?new cn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new cn(r.startAt.position,r.startAt.inclusive):null;return Tc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function vc(r,e){const t=r.filters.concat([e]);return new Dt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function So(r,e,t){return new Dt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function hs(r,e){return ls(Le(r),Le(e))&&r.limitType===e.limitType}function Zp(r){return`${Un(Le(r))}|lt:${r.limitType}`}function lr(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((i=>Wp(i))).join(", ")}]`),cs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((i=>Cr(i))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((i=>Cr(i))).join(",")),`Target(${n})`})(Le(r))}; limitType=${r.limitType})`}function ds(r,e){return e.isFoundDocument()&&(function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):x.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)})(r,e)&&(function(n,i){for(const s of gr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(r,e)&&(function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0})(r,e)&&(function(n,i){return!(n.startAt&&!(function(o,c,u){const h=td(o,c,u);return o.inclusive?h<=0:h<0})(n.startAt,gr(n),i)||n.endAt&&!(function(o,c,u){const h=td(o,c,u);return o.inclusive?h>=0:h>0})(n.endAt,gr(n),i))})(r,e)}function em(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function tm(r){return(e,t)=>{let n=!1;for(const i of gr(r)){const s=Dv(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Dv(r,e,t){const n=r.field.isKeyField()?x.comparator(e.key,t.key):(function(s,o,c){const u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?an(u,h):F(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F(19790,{direction:r.dir})}}/**
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
 */class kt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){pn(this.inner,((t,n)=>{for(const[i,s]of n)e(i,s)}))}isEmpty(){return Np(this.inner)}size(){return this.innerSize}}/**
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
 */const kv=new ce(x.comparator);function Ge(){return kv}const nm=new ce(x.comparator);function Si(...r){let e=nm;for(const t of r)e=e.insert(t.key,t);return e}function rm(r){let e=nm;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ut(){return Li()}function im(){return Li()}function Li(){return new kt((r=>r.toString()),((r,e)=>r.isEqual(e)))}const Nv=new ce(x.comparator),xv=new se(x.comparator);function W(...r){let e=xv;for(const t of r)e=e.add(t);return e}const Ov=new se($);function lu(){return Ov}/**
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
 */function hu(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$i(e)?"-0":e}}function sm(r){return{integerValue:""+r}}function om(r,e){return Tp(e)?sm(e):hu(r,e)}/**
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
 */class Yo{constructor(){this._=void 0}}function Mv(r,e,t){return r instanceof Dr?(function(i,s){const o={fields:{[Mp]:{stringValue:Op},[Fp]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qo(s)&&(s=Jo(s)),s&&(o.fields[Lp]=s),{mapValue:o}})(t,e):r instanceof Bn?cm(r,e):r instanceof qn?um(r,e):(function(i,s){const o=am(i,s),c=od(o)+od(i.Ee);return yc(o)&&yc(i.Ee)?sm(c):hu(i.serializer,c)})(r,e)}function Lv(r,e,t){return r instanceof Bn?cm(r,e):r instanceof qn?um(r,e):t}function am(r,e){return r instanceof kr?(function(n){return yc(n)||(function(s){return!!s&&"doubleValue"in s})(n)})(e)?e:{integerValue:0}:null}class Dr extends Yo{}class Bn extends Yo{constructor(e){super(),this.elements=e}}function cm(r,e){const t=lm(e);for(const n of r.elements)t.some((i=>ft(i,n)))||t.push(n);return{arrayValue:{values:t}}}class qn extends Yo{constructor(e){super(),this.elements=e}}function um(r,e){let t=lm(e);for(const n of r.elements)t=t.filter((i=>!ft(i,n)));return{arrayValue:{values:t}}}class kr extends Yo{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function od(r){return de(r.integerValue||r.doubleValue)}function lm(r){return Ji(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class fs{constructor(e,t){this.field=e,this.transform=t}}function Fv(r,e){return r.field.isEqual(e.field)&&(function(n,i){return n instanceof Bn&&i instanceof Bn||n instanceof qn&&i instanceof qn?Er(n.elements,i.elements,ft):n instanceof kr&&i instanceof kr?ft(n.Ee,i.Ee):n instanceof Dr&&i instanceof Dr})(r.transform,e.transform)}class Uv{constructor(e,t){this.version=e,this.transformResults=t}}class fe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new fe}static exists(e){return new fe(void 0,e)}static updateTime(e){return new fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ao(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Zo{}function hm(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Wr(r.key,fe.none()):new Kr(r.key,r.data,fe.none());{const t=r.data,n=Ce.empty();let i=new se(he.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new Nt(r.key,n,new ze(i.toArray()),fe.none())}}function Bv(r,e,t){r instanceof Kr?(function(i,s,o){const c=i.value.clone(),u=cd(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(r,e,t):r instanceof Nt?(function(i,s,o){if(!ao(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=cd(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(dm(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):(function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Fi(r,e,t,n){return r instanceof Kr?(function(s,o,c,u){if(!ao(s.precondition,o))return c;const h=s.value.clone(),f=ud(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(r,e,t,n):r instanceof Nt?(function(s,o,c,u){if(!ao(s.precondition,o))return c;const h=ud(s.fieldTransforms,u,o),f=o.data;return f.setAll(dm(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((p=>p.field)))})(r,e,t,n):(function(s,o,c){return ao(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(r,e,t)}function qv(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=am(n.transform,i||null);s!=null&&(t===null&&(t=Ce.empty()),t.set(n.field,s))}return t||null}function ad(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Er(n,i,((s,o)=>Fv(s,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Kr extends Zo{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nt extends Zo{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dm(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function cd(r,e,t){const n=new Map;q(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,c=e.data.field(s.field);n.set(s.field,Lv(o,c,t[i]))}return n}function ud(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,Mv(s,o,e))}return n}class Wr extends Zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class du extends Zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fu{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Bv(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Fi(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Fi(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=im();return this.mutations.forEach((i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=hm(o,c);u!==null&&n.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(j.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),W())}isEqual(e){return this.batchId===e.batchId&&Er(this.mutations,e.mutations,((t,n)=>ad(t,n)))&&Er(this.baseMutations,e.baseMutations,((t,n)=>ad(t,n)))}}class pu{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){q(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let i=(function(){return Nv})();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new pu(e,t,n,i)}}/**
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
 */class mu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class fm{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}/**
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
 */class jv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ie,Y;function pm(r){switch(r){case R.OK:return F(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return F(15467,{code:r})}}function mm(r){if(r===void 0)return _e("GRPC error has no .code"),R.UNKNOWN;switch(r){case Ie.OK:return R.OK;case Ie.CANCELLED:return R.CANCELLED;case Ie.UNKNOWN:return R.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return R.INTERNAL;case Ie.UNAVAILABLE:return R.UNAVAILABLE;case Ie.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Ie.NOT_FOUND:return R.NOT_FOUND;case Ie.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Ie.ABORTED:return R.ABORTED;case Ie.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Ie.DATA_LOSS:return R.DATA_LOSS;default:return F(39323,{code:r})}}(Y=Ie||(Ie={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let Po=null;/**
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
 */const $v=new tn([4294967295,4294967295],0);function ld(r){const e=Yc().encode(r),t=new rp;return t.update(e),new Uint8Array(t.digest())}function hd(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new tn([t,n],0),new tn([i,s],0)]}class gu{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Pi(`Invalid padding: ${t}`);if(n<0)throw new Pi(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Pi(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Pi(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=tn.fromNumber(this.fe)}pe(e,t,n){let i=e.add(t.multiply(tn.fromNumber(n)));return i.compare($v)===1&&(i=new tn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ld(e),[n,i]=hd(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(n,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new gu(s,i,t);return n.forEach((c=>o.insert(c))),o}insert(e){if(this.fe===0)return;const t=ld(e),[n,i]=hd(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(n,i,s);this.we(o)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Pi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ps{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,ms.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ps(j.min(),i,new ce($),Ge(),W())}}class ms{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ms(n,t,W(),W(),W())}}/**
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
 */class co{constructor(e,t,n,i){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=i}}class gm{constructor(e,t){this.targetId=e,this.De=t}}class _m{constructor(e,t,n=me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class dd{constructor(){this.ve=0,this.Ce=fd(),this.Fe=me.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=W(),t=W(),n=W();return this.Ce.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:F(38017,{changeType:s})}})),new ms(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=fd()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,q(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class zv{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ge(),this.je=zs(),this.Je=zs(),this.He=new ce($)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:F(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((n,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,n=e.De.count,i=this.st(t);if(i){const s=i.target;if(bo(s))if(n===0){const o=new x(s.path);this.Xe(t,o,le.newNoDocument(o,j.min()))}else q(n===1,20013,{expectedCount:n});else{const o=this.ot(t);if(o!==n){const c=this._t(e),u=c?this.ut(c,e,o):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}Po==null||Po.ct((function(f,p,g,v,C){var D,k,L,B,U,K;const Z={localCacheCount:f,existenceFilterCount:p.count,databaseId:g.database,projectId:g.projectId},G=p.unchangedNames;return G&&(Z.bloomFilter={applied:C===0,hashCount:(D=G==null?void 0:G.hashCount)!==null&&D!==void 0?D:0,bitmapLength:(B=(L=(k=G==null?void 0:G.bits)===null||k===void 0?void 0:k.bitmap)===null||L===void 0?void 0:L.length)!==null&&B!==void 0?B:0,padding:(K=(U=G==null?void 0:G.bits)===null||U===void 0?void 0:U.padding)!==null&&K!==void 0?K:0,mightContain:E=>{var _;return(_=v==null?void 0:v.mightContain(E))!==null&&_!==void 0&&_}}),Z})(o,e.De,this.We.lt(),c,u))}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=St(n).toUint8Array()}catch(u){if(u instanceof xp)return Fe("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new gu(o,i,s)}catch(u){return Fe(u instanceof Pi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let i=0;return n.forEach((s=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,s,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((s,o)=>{const c=this.st(o);if(c){if(s.current&&bo(c.target)){const u=new x(c.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,le.newNoDocument(u,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}}));let n=W();this.Je.forEach(((s,o)=>{let c=!0;o.forEachWhile((u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(s))})),this.ze.forEach(((s,o)=>o.setReadTime(e)));const i=new ps(e,t,this.He,this.ze,n);return this.ze=Ge(),this.je=zs(),this.Je=zs(),this.He=new ce($),i}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new dd,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new se($),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new se($),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new dd),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function zs(){return new ce(x.comparator)}function fd(){return new ce(x.comparator)}const Gv={asc:"ASCENDING",desc:"DESCENDING"},Kv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Wv={and:"AND",or:"OR"};class Hv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wc(r,e){return r.useProto3Json||cs(e)?e:{value:e}}function Nr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ym(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Qv(r,e){return Nr(r,e.toTimestamp())}function ye(r){return q(!!r,49232),j.fromTimestamp((function(t){const n=Rt(t);return new te(n.seconds,n.nanos)})(r))}function _u(r,e){return Ac(r,e).canonicalString()}function Ac(r,e){const t=(function(i){return new H(["projects",i.projectId,"databases",i.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Im(r){const e=H.fromString(r);return q(Pm(e),10190,{key:e.toString()}),e}function Yi(r,e){return _u(r.databaseId,e.path)}function dt(r,e){const t=Im(e);if(t.get(1)!==r.databaseId.projectId)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new x(vm(t))}function Em(r,e){return _u(r.databaseId,e)}function Tm(r){const e=Im(r);return e.length===4?H.emptyPath():vm(e)}function bc(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function vm(r){return q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function pd(r,e,t){return{name:Yi(r,e),fields:t.value.mapValue.fields}}function ea(r,e,t){const n=dt(r,e.name),i=ye(e.updateTime),s=e.createTime?ye(e.createTime):j.min(),o=new Ce({mapValue:{fields:e.fields}}),c=le.newFoundDocument(n,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Jv(r,e){return"found"in e?(function(n,i){q(!!i.found,43571),i.found.name,i.found.updateTime;const s=dt(n,i.found.name),o=ye(i.found.updateTime),c=i.found.createTime?ye(i.found.createTime):j.min(),u=new Ce({mapValue:{fields:i.found.fields}});return le.newFoundDocument(s,o,c,u)})(r,e):"missing"in e?(function(n,i){q(!!i.missing,3894),q(!!i.readTime,22933);const s=dt(n,i.missing),o=ye(i.readTime);return le.newNoDocument(s,o)})(r,e):F(7234,{result:e})}function Xv(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(h,f){return h.useProto3Json?(q(f===void 0||typeof f=="string",58123),me.fromBase64String(f||"")):(q(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),me.fromUint8Array(f||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?R.UNKNOWN:mm(h.code);return new V(f,h.message||"")})(o);t=new _m(n,i,s,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=dt(r,n.document.name),s=ye(n.document.updateTime),o=n.document.createTime?ye(n.document.createTime):j.min(),c=new Ce({mapValue:{fields:n.document.fields}}),u=le.newFoundDocument(i,s,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new co(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=dt(r,n.document),s=n.readTime?ye(n.readTime):j.min(),o=le.newNoDocument(i,s),c=n.removedTargetIds||[];t=new co([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=dt(r,n.document),s=n.removedTargetIds||[];t=new co([],s,i,null)}else{if(!("filter"in e))return F(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new jv(i,s),c=n.targetId;t=new gm(c,o)}}return t}function Zi(r,e){let t;if(e instanceof Kr)t={update:pd(r,e.key,e.value)};else if(e instanceof Wr)t={delete:Yi(r,e.key)};else if(e instanceof Nt)t={update:pd(r,e.key,e.data),updateMask:rw(e.fieldMask)};else{if(!(e instanceof du))return F(16599,{Rt:e.type});t={verify:Yi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(s,o){const c=o.transform;if(c instanceof Dr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Bn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof qn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof kr)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw F(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:Qv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F(27497)})(r,e.precondition)),t}function Rc(r,e){const t=e.currentDocument?(function(s){return s.updateTime!==void 0?fe.updateTime(ye(s.updateTime)):s.exists!==void 0?fe.exists(s.exists):fe.none()})(e.currentDocument):fe.none(),n=e.updateTransforms?e.updateTransforms.map((i=>(function(o,c){let u=null;if("setToServerValue"in c)q(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new Dr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new Bn(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new qn(f)}else"increment"in c?u=new kr(o,c.increment):F(16584,{proto:c});const h=he.fromServerFormat(c.fieldPath);return new fs(h,u)})(r,i))):[];if(e.update){e.update.name;const i=dt(r,e.update.name),s=new Ce({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(u){const h=u.fieldPaths||[];return new ze(h.map((f=>he.fromServerFormat(f))))})(e.updateMask);return new Nt(i,s,o,t,n)}return new Kr(i,s,t,n)}if(e.delete){const i=dt(r,e.delete);return new Wr(i,t)}if(e.verify){const i=dt(r,e.verify);return new du(i,t)}return F(1463,{proto:e})}function Yv(r,e){return r&&r.length>0?(q(e!==void 0,14353),r.map((t=>(function(i,s){let o=i.updateTime?ye(i.updateTime):ye(s);return o.isEqual(j.min())&&(o=ye(s)),new Uv(o,i.transformResults||[])})(t,e)))):[]}function wm(r,e){return{documents:[Em(r,e.path)]}}function ta(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Em(r,i);const s=(function(h){if(h.length!==0)return Sm(re.create(h,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(h){if(h.length!==0)return h.map((f=>(function(g){return{field:Wt(g.field),direction:ew(g.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=wc(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:i}}function Am(r,e,t,n){const{Vt:i,parent:s}=ta(r,e),o={},c=[];let u=0;return t.forEach((h=>{const f=n?h.alias:"aggregate_"+u++;o[f]=h.alias,h.aggregateType==="count"?c.push({alias:f,count:{}}):h.aggregateType==="avg"?c.push({alias:f,avg:{field:Wt(h.fieldPath)}}):h.aggregateType==="sum"&&c.push({alias:f,sum:{field:Wt(h.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:i.structuredQuery},parent:i.parent},ft:o,parent:s}}function bm(r){let e=Tm(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){q(n===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=(function(p){const g=Rm(p);return g instanceof re&&cu(g)?g.getFilters():[g]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((g=>(function(C){return new Xi(hr(C.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(g)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let g;return g=typeof p=="object"?p.value:p,cs(g)?null:g})(t.limit));let u=null;t.startAt&&(u=(function(p){const g=!!p.before,v=p.values||[];return new cn(v,g)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const g=!p.before,v=p.values||[];return new cn(v,g)})(t.endAt)),Jp(e,i,o,s,c,"F",u,h)}function Zv(r,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rm(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=hr(t.unaryFilter.field);return X.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=hr(t.unaryFilter.field);return X.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hr(t.unaryFilter.field);return X.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hr(t.unaryFilter.field);return X.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(r):r.fieldFilter!==void 0?(function(t){return X.create(hr(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return re.create(t.compositeFilter.filters.map((n=>Rm(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(t.compositeFilter.op))})(r):F(30097,{filter:r})}function ew(r){return Gv[r]}function tw(r){return Kv[r]}function nw(r){return Wv[r]}function Wt(r){return{fieldPath:r.canonicalString()}}function hr(r){return he.fromServerFormat(r.fieldPath)}function Sm(r){return r instanceof X?(function(t){if(t.op==="=="){if(Yh(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NAN"}};if(Xh(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Yh(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NOT_NAN"}};if(Xh(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wt(t.field),op:tw(t.op),value:t.value}}})(r):r instanceof re?(function(t){const n=t.getFilters().map((i=>Sm(i)));return n.length===1?n[0]:{compositeFilter:{op:nw(t.op),filters:n}}})(r):F(54877,{filter:r})}function rw(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Pm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Et{constructor(e,t,n,i,s=j.min(),o=j.min(),c=me.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Cm{constructor(e){this.gt=e}}function iw(r,e){let t;if(e.document)t=ea(r.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=x.fromSegments(e.noDocument.path),i=$n(e.noDocument.readTime);t=le.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F(56709);{const n=x.fromSegments(e.unknownDocument.path),i=$n(e.unknownDocument.version);t=le.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime((function(i){const s=new te(i[0],i[1]);return j.fromTimestamp(s)})(e.readTime)),t}function md(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Co(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(s,o){return{name:Yi(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Nr(s,o.version.toTimestamp()),createTime:Nr(s,o.createTime.toTimestamp())}})(r.gt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:jn(e.version)};else{if(!e.isUnknownDocument())return F(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:jn(e.version)}}return n}function Co(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function jn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function $n(r){const e=new te(r.seconds,r.nanoseconds);return j.fromTimestamp(e)}function Cn(r,e){const t=(e.baseMutations||[]).map((s=>Rc(r.gt,s)));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map((s=>Rc(r.gt,s))),i=te.fromMillis(e.localWriteTimeMs);return new fu(e.batchId,i,t,n)}function Ci(r){const e=$n(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?$n(r.lastLimboFreeSnapshotVersion):j.min();let n;return n=(function(s){return s.documents!==void 0})(r.query)?(function(s){const o=s.documents.length;return q(o===1,1966,{count:o}),Le(Gr(Tm(s.documents[0])))})(r.query):(function(s){return Le(bm(s))})(r.query),new Et(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,me.fromBase64String(r.resumeToken))}function Vm(r,e){const t=jn(e.snapshotVersion),n=jn(e.lastLimboFreeSnapshotVersion);let i;i=bo(e.target)?wm(r.gt,e.target):ta(r.gt,e.target).Vt;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Un(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function na(r){const e=bm({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?So(e,e.limit,"L"):e}function Wa(r,e){return new mu(e.largestBatchId,Rc(r.gt,e.overlayMutation))}function gd(r,e){const t=e.path.lastSegment();return[r,Me(e.path.popLast()),t]}function _d(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:jn(n.readTime),documentKey:Me(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class sw{getBundleMetadata(e,t){return yd(e).get(t).next((n=>{if(n)return(function(s){return{id:s.bundleId,createTime:$n(s.createTime),version:s.version}})(n)}))}saveBundleMetadata(e,t){return yd(e).put((function(i){return{bundleId:i.id,createTime:jn(ye(i.createTime)),version:i.version}})(t))}getNamedQuery(e,t){return Id(e).get(t).next((n=>{if(n)return(function(s){return{name:s.name,query:na(s.bundledQuery),readTime:$n(s.readTime)}})(n)}))}saveNamedQuery(e,t){return Id(e).put((function(i){return{name:i.name,readTime:jn(ye(i.readTime)),bundledQuery:i.bundledQuery}})(t))}}function yd(r){return we(r,Ko)}function Id(r){return we(r,Wo)}/**
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
 */class ra{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const n=t.uid||"";return new ra(e,n)}getOverlay(e,t){return Ii(e).get(gd(this.userId,t)).next((n=>n?Wa(this.serializer,n):null))}getOverlays(e,t){const n=ut();return A.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&n.set(i,s)})))).next((()=>n))}saveOverlays(e,t,n){const i=[];return n.forEach(((s,o)=>{const c=new mu(t,o);i.push(this.wt(e,c))})),A.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach((o=>i.add(Me(o.getCollectionPath()))));const s=[];return i.forEach((o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);s.push(Ii(e).Y(mc,c))})),A.waitFor(s)}getOverlaysForCollection(e,t,n){const i=ut(),s=Me(t),o=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ii(e).j(mc,o).next((c=>{for(const u of c){const h=Wa(this.serializer,u);i.set(h.getKey(),h)}return i}))}getOverlaysForCollectionGroup(e,t,n,i){const s=ut();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ii(e).X({index:Sp,range:c},((u,h,f)=>{const p=Wa(this.serializer,h);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):f.done()})).next((()=>s))}wt(e,t){return Ii(e).put((function(i,s,o){const[c,u,h]=gd(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Zi(i.gt,o.mutation)}})(this.serializer,this.userId,t))}}function Ii(r){return we(r,Ho)}/**
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
 */class ow{St(e){return we(e,iu)}getSessionToken(e){return this.St(e).get("sessionToken").next((t=>{const n=t==null?void 0:t.value;return n?me.fromUint8Array(n):me.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Vn{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(de(e.integerValue));else if("doubleValue"in e){const n=de(e.doubleValue);isNaN(n)?this.Ct(t,13):(this.Ct(t,15),$i(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ct(t,20),typeof n=="string"&&(n=Rt(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(St(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ct(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?Bp(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):Xo(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):F(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.Ct(t,55);for(const i of Object.keys(n))this.xt(i,t),this.Dt(n[i],t)}Lt(e,t){var n,i;const s=e.fields||{};this.Ct(t,53);const o=Pr,c=((i=(n=s[o].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(de(c)),this.xt(o,t),this.Dt(s[o],t)}qt(e,t){const n=e.values||[];this.Ct(t,50);for(const i of n)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),x.fromName(e).path.forEach((n=>{this.Ct(t,60),this.$t(n,t)}))}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}Vn.Ut=new Vn;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=255;function aw(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Ed(r){const e=64-(function(n){let i=0;for(let s=0;s<8;++s){const o=aw(255&n[s]);if(i+=o,o!==8)break}return i})(r);return Math.ceil(e/8)}class cw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Wt(n.value),n=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Wt(n);else if(n<2048)this.Wt(960|n>>>6),this.Wt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|n>>>12),this.Wt(128|63&n>>>6),this.Wt(128|63&n);else{const i=t.codePointAt(0);this.Wt(240|i>>>18),this.Wt(128|63&i>>>12),this.Wt(128|63&i>>>6),this.Wt(128|63&i)}}this.Gt()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.jt(n);else if(n<2048)this.jt(960|n>>>6),this.jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|n>>>12),this.jt(128|63&n>>>6),this.jt(128|63&n);else{const i=t.codePointAt(0);this.jt(240|i>>>18),this.jt(128|63&i>>>12),this.jt(128|63&i>>>6),this.jt(128|63&i)}}this.Jt()}Zt(e){const t=this.Xt(e),n=Ed(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}tn(e){const t=this.Xt(e),n=Ed(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}nn(){this.rn(sr),this.rn(255)}sn(){this._n(sr),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=(function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===sr?(this.rn(sr),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===sr?(this._n(sr),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class uw{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class lw{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class Ei{constructor(){this.un=new cw,this.cn=new uw(this.un),this.ln=new lw(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
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
 */class Dn{constructor(e,t,n,i){this.Pn=e,this.Tn=t,this.In=n,this.dn=i}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new Dn(this.Pn,this.Tn,this.In,n)}An(e,t,n){return{indexId:this.Pn,uid:e,arrayValue:uo(this.In),directionalValue:uo(this.dn),orderedDocumentKey:uo(t),documentKey:n.path.toArray()}}Rn(e,t,n){const i=this.An(e,t,n);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Bt(r,e){let t=r.Pn-e.Pn;return t!==0?t:(t=Td(r.In,e.In),t!==0?t:(t=Td(r.dn,e.dn),t!==0?t:x.comparator(r.Tn,e.Tn)))}function Td(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function uo(r){return _f()?(function(t){let n="";for(let i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return n})(r):r}function vd(r){return typeof r!="string"?r:(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(r)}class wd{constructor(e){this.Vn=new se(((t,n)=>he.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Vn=this.Vn.add(n):this.fn.push(n)}}get gn(){return this.Vn.size>1}pn(e){if(q(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=dc(e);if(t!==void 0&&!this.yn(t))return!1;const n=Rn(e);let i=new Set,s=0,o=0;for(;s<n.length&&this.yn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=n[s];if(!this.wn(c,u)||!this.Sn(this.mn[o++],u))return!1}++s}for(;s<n.length;++s){const c=n[s];if(o>=this.mn.length||!this.Sn(this.mn[o++],c))return!1}return!0}bn(){if(this.gn)return null;let e=new se(he.comparator);const t=[];for(const n of this.fn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Nn(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Nn(n.field,0))}for(const n of this.mn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Nn(n.field,n.dir==="asc"?0:1)));return new vr(vr.UNKNOWN_ID,this.collectionId,t,wr.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Dm(r){var e,t;if(q(r instanceof X||r instanceof re,20012),r instanceof X){if(r instanceof Qp){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map((s=>X.create(r.field,"==",s))))||[];return re.create(i,"or")}return r}const n=r.filters.map((i=>Dm(i)));return re.create(n,r.op)}function hw(r){if(r.getFilters().length===0)return[];const e=Cc(Dm(r));return q(km(e),7391),Sc(e)||Pc(e)?[e]:e.getFilters()}function Sc(r){return r instanceof X}function Pc(r){return r instanceof re&&cu(r)}function km(r){return Sc(r)||Pc(r)||(function(t){if(t instanceof re&&Ic(t)){for(const n of t.getFilters())if(!Sc(n)&&!Pc(n))return!1;return!0}return!1})(r)}function Cc(r){if(q(r instanceof X||r instanceof re,34018),r instanceof X)return r;if(r.filters.length===1)return Cc(r.filters[0]);const e=r.filters.map((n=>Cc(n)));let t=re.create(e,r.op);return t=Vo(t),km(t)?t:(q(t instanceof re,64498),q(Vr(t),40251),q(t.filters.length>1,57927),t.filters.reduce(((n,i)=>yu(n,i))))}function yu(r,e){let t;return q(r instanceof X||r instanceof re,38388),q(e instanceof X||e instanceof re,25473),t=r instanceof X?e instanceof X?(function(i,s){return re.create([i,s],"and")})(r,e):Ad(r,e):e instanceof X?Ad(e,r):(function(i,s){if(q(i.filters.length>0&&s.filters.length>0,48005),Vr(i)&&Vr(s))return Kp(i,s.getFilters());const o=Ic(i)?i:s,c=Ic(i)?s:i,u=o.filters.map((h=>yu(h,c)));return re.create(u,"or")})(r,e),Vo(t)}function Ad(r,e){if(Vr(e))return Kp(e,r.getFilters());{const t=e.filters.map((n=>yu(r,n)));return re.create(t,"or")}}function Vo(r){if(q(r instanceof X||r instanceof re,11850),r instanceof X)return r;const e=r.getFilters();if(e.length===1)return Vo(e[0]);if(zp(r))return r;const t=e.map((i=>Vo(i))),n=[];return t.forEach((i=>{i instanceof X?n.push(i):i instanceof re&&(i.op===r.op?n.push(...i.filters):n.push(i))})),n.length===1?n[0]:re.create(n,r.op)}/**
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
 */class dw{constructor(){this.Dn=new Iu}addToCollectionParentIndex(e,t){return this.Dn.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(Je.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(Je.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class Iu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new se(H.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new se(H.comparator)).toArray()}}/**
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
 */const bd="IndexedDbIndexManager",Gs=new Uint8Array(0);class fw{constructor(e,t){this.databaseId=t,this.vn=new Iu,this.Cn=new kt((n=>Un(n)),((n,i)=>ls(n,i))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const s={collectionId:n,parent:Me(i)};return Rd(e).put(s)}return A.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[dp(t),""],!1,!0);return Rd(e).j(i).next((s=>{for(const o of s){if(o.collectionId!==t)break;n.push(ct(o.parent))}return n}))}addFieldIndex(e,t){const n=Ti(e),i=(function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map((u=>[u.fieldPath.canonicalString(),u.kind]))}})(t);delete i.indexId;const s=n.add(i);if(t.indexState){const o=ar(e);return s.next((c=>{o.put(_d(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const n=Ti(e),i=ar(e),s=or(e);return n.delete(t.indexId).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Ti(e),n=or(e),i=ar(e);return t.Y().next((()=>n.Y())).next((()=>i.Y()))}createTargetIndexes(e,t){return A.forEach(this.Fn(t),(n=>this.getIndexType(e,n).next((i=>{if(i===0||i===1){const s=new wd(n).bn();if(s!=null)return this.addFieldIndex(e,s)}}))))}getDocumentsMatchingTarget(e,t){const n=or(e);let i=!0;const s=new Map;return A.forEach(this.Fn(t),(o=>this.Mn(e,o).next((c=>{i&&(i=!!c),s.set(o,c)})))).next((()=>{if(i){let o=W();const c=[];return A.forEach(s,((u,h)=>{N(bd,`Using index ${(function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map((K=>`${K.fieldPath}:${K.kind}`)).join(",")}`})(u)} to execute ${Un(t)}`);const f=(function(U,K){const Z=dc(K);if(Z===void 0)return null;for(const G of Ro(U,Z.fieldPath))switch(G.op){case"array-contains-any":return G.value.arrayValue.values||[];case"array-contains":return[G.value]}return null})(h,u),p=(function(U,K){const Z=new Map;for(const G of Rn(K))for(const E of Ro(U,G.fieldPath))switch(E.op){case"==":case"in":Z.set(G.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return Z.set(G.fieldPath.canonicalString(),E.value),Array.from(Z.values())}return null})(h,u),g=(function(U,K){const Z=[];let G=!0;for(const E of Rn(K)){const _=E.kind===0?rd(U,E.fieldPath,U.startAt):id(U,E.fieldPath,U.startAt);Z.push(_.value),G&&(G=_.inclusive)}return new cn(Z,G)})(h,u),v=(function(U,K){const Z=[];let G=!0;for(const E of Rn(K)){const _=E.kind===0?id(U,E.fieldPath,U.endAt):rd(U,E.fieldPath,U.endAt);Z.push(_.value),G&&(G=_.inclusive)}return new cn(Z,G)})(h,u),C=this.xn(u,h,g),D=this.xn(u,h,v),k=this.On(u,h,p),L=this.Nn(u.indexId,f,C,g.inclusive,D,v.inclusive,k);return A.forEach(L,(B=>n.H(B,t.limit).next((U=>{U.forEach((K=>{const Z=x.fromSegments(K.documentKey);o.has(Z)||(o=o.add(Z),c.push(Z))}))}))))})).next((()=>c))}return A.resolve(null)}))}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=hw(re.create(e.filters,"and")).map((n=>Tc(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}Nn(e,t,n,i,s,o,c){const u=(t!=null?t.length:1)*Math.max(n.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let p=0;p<u;++p){const g=t?this.Bn(t[p/h]):Gs,v=this.Ln(e,g,n[p%h],i),C=this.kn(e,g,s[p%h],o),D=c.map((k=>this.Ln(e,g,k,!0)));f.push(...this.createRange(v,C,D))}return f}Ln(e,t,n,i){const s=new Dn(e,x.empty(),t,n);return i?s:s.En()}kn(e,t,n,i){const s=new Dn(e,x.empty(),t,n);return i?s.En():s}Mn(e,t){const n=new wd(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next((s=>{let o=null;for(const c of s)n.pn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o}))}getIndexType(e,t){let n=2;const i=this.Fn(t);return A.forEach(i,(s=>this.Mn(e,s).next((o=>{o?n!==0&&o.fields.length<(function(u){let h=new se(he.comparator),f=!1;for(const p of u.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:h=h.add(g.field));for(const p of u.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)})(s)&&(n=1):n=0})))).next((()=>(function(o){return o.limit!==null})(t)&&i.length>1&&n===2?1:n))}qn(e,t){const n=new Ei;for(const i of Rn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=n.hn(i.kind);Vn.Ut.bt(s,o)}return n.an()}Bn(e){const t=new Ei;return Vn.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const n=new Ei;return Vn.Ut.bt(Fn(this.databaseId,t),n.hn((function(s){const o=Rn(s);return o.length===0?0:o[o.length-1].kind})(e))),n.an()}On(e,t,n){if(n===null)return[];let i=[];i.push(new Ei);let s=0;for(const o of Rn(e)){const c=n[s++];for(const u of i)if(this.$n(t,o.fieldPath)&&Ji(c))i=this.Un(i,o,c);else{const h=u.hn(o.kind);Vn.Ut.bt(c,h)}}return this.Kn(i)}xn(e,t,n){return this.On(e,t,n.position)}Kn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Un(e,t,n){const i=[...e],s=[];for(const o of n.arrayValue.values||[])for(const c of i){const u=new Ei;u.seed(c.an()),Vn.Ut.bt(o,u.hn(t.kind)),s.push(u)}return s}$n(e,t){return!!e.filters.find((n=>n instanceof X&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=Ti(e),i=ar(e);return(t?n.j(pc,IDBKeyRange.bound(t,t)):n.j()).next((s=>{const o=[];return A.forEach(s,(c=>i.get([c.indexId,this.uid]).next((u=>{o.push((function(f,p){const g=p?new wr(p.sequenceNumber,new Je($n(p.readTime),new x(ct(p.documentKey)),p.largestBatchId)):wr.empty(),v=f.fields.map((([C,D])=>new Nn(he.fromServerFormat(C),D)));return new vr(f.indexId,f.collectionGroup,v,g)})(c,u))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:$(n.collectionGroup,i.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const i=Ti(e),s=ar(e);return this.Wn(e).next((o=>i.j(pc,IDBKeyRange.bound(t,t)).next((c=>A.forEach(c,(u=>s.put(_d(u.indexId,this.uid,o,n))))))))}updateIndexEntries(e,t){const n=new Map;return A.forEach(t,((i,s)=>{const o=n.get(i.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next((c=>(n.set(i.collectionGroup,c),A.forEach(c,(u=>this.Gn(e,i,u).next((h=>{const f=this.zn(s,u);return h.isEqual(f)?A.resolve():this.jn(e,s,u,h,f)})))))))}))}Jn(e,t,n,i){return or(e).put(i.An(this.uid,this.Qn(n,t.key),t.key))}Hn(e,t,n,i){return or(e).delete(i.Rn(this.uid,this.Qn(n,t.key),t.key))}Gn(e,t,n){const i=or(e);let s=new se(Bt);return i.X({index:Rp,range:IDBKeyRange.only([n.indexId,this.uid,uo(this.Qn(n,t))])},((o,c)=>{s=s.add(new Dn(n.indexId,t,vd(c.arrayValue),vd(c.directionalValue)))})).next((()=>s))}zn(e,t){let n=new se(Bt);const i=this.qn(t,e);if(i==null)return n;const s=dc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Ji(o))for(const c of o.arrayValue.values||[])n=n.add(new Dn(t.indexId,e.key,this.Bn(c),i))}else n=n.add(new Dn(t.indexId,e.key,Gs,i));return n}jn(e,t,n,i,s){N(bd,"Updating index entries for document '%s'",t.key);const o=[];return(function(u,h,f,p,g){const v=u.getIterator(),C=h.getIterator();let D=ir(v),k=ir(C);for(;D||k;){let L=!1,B=!1;if(D&&k){const U=f(D,k);U<0?B=!0:U>0&&(L=!0)}else D!=null?B=!0:L=!0;L?(p(k),k=ir(C)):B?(g(D),D=ir(v)):(D=ir(v),k=ir(C))}})(i,s,Bt,(c=>{o.push(this.Jn(e,t,n,c))}),(c=>{o.push(this.Hn(e,t,n,c))})),A.waitFor(o)}Wn(e){let t=1;return ar(e).X({index:bp,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,i,s)=>{s.done(),t=i.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((o,c)=>Bt(o,c))).filter(((o,c,u)=>!c||Bt(o,u[c-1])!==0));const i=[];i.push(e);for(const o of n){const c=Bt(o,e),u=Bt(o,t);if(c===0)i[0]=e.En();else if(c>0&&u<0)i.push(o),i.push(o.En());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Yn(i[o],i[o+1]))return[];const c=i[o].Rn(this.uid,Gs,x.empty()),u=i[o+1].Rn(this.uid,Gs,x.empty());s.push(IDBKeyRange.bound(c,u))}return s}Yn(e,t){return Bt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Sd)}getMinOffset(e,t){return A.mapArray(this.Fn(t),(n=>this.Mn(e,n).next((i=>i||F(44426))))).next(Sd)}}function Rd(r){return we(r,Ki)}function or(r){return we(r,Oi)}function Ti(r){return we(r,ru)}function ar(r){return we(r,xi)}function Sd(r){q(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;eu(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Je(e.readTime,e.documentKey,t)}/**
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
 */const Pd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nm=41943040;class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function xm(r,e,t){const n=r.store(tt),i=r.store(Ar),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=n.X({range:o},((f,p,g)=>(c++,g.delete())));s.push(u.next((()=>{q(c===1,47070,{batchId:t.batchId})})));const h=[];for(const f of t.mutations){const p=vp(e,f.key.path,t.batchId);s.push(i.delete(p)),h.push(f.key)}return A.waitFor(s).next((()=>h))}function Do(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw F(14731);e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(Nm,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);class ia{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Zn={}}static yt(e,t,n,i){q(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new ia(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return qt(e).X({index:kn,range:n},((i,s,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,n,i){const s=dr(e),o=qt(e);return o.add({}).next((c=>{q(typeof c=="number",49019);const u=new fu(c,t,n,i),h=(function(v,C,D){const k=D.baseMutations.map((B=>Zi(v.gt,B))),L=D.mutations.map((B=>Zi(v.gt,B)));return{userId:C,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:k,mutations:L}})(this.serializer,this.userId,u),f=[];let p=new se(((g,v)=>$(g.canonicalString(),v.canonicalString())));for(const g of i){const v=vp(this.userId,g.key.path,c);p=p.add(g.key.path.popLast()),f.push(o.put(h)),f.push(s.put(v,HT))}return p.forEach((g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))})),e.addOnCommittedListener((()=>{this.Zn[c]=u.keys()})),A.waitFor(f).next((()=>u))}))}lookupMutationBatch(e,t){return qt(e).get(t).next((n=>n?(q(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),Cn(this.serializer,n)):null))}Xn(e,t){return this.Zn[t]?A.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const i=n.keys();return this.Zn[t]=i,i}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return qt(e).X({index:kn,range:i},((o,c,u)=>{c.userId===this.userId&&(q(c.batchId>=n,47524,{er:n}),s=Cn(this.serializer,c)),u.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=nn;return qt(e).X({index:kn,range:t,reverse:!0},((i,s,o)=>{n=s.batchId,o.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,nn],[this.userId,Number.POSITIVE_INFINITY]);return qt(e).j(kn,t).next((n=>n.map((i=>Cn(this.serializer,i)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=no(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return dr(e).X({range:i},((o,c,u)=>{const[h,f,p]=o,g=ct(f);if(h===this.userId&&t.path.isEqual(g))return qt(e).get(p).next((v=>{if(!v)throw F(61480,{tr:o,batchId:p});q(v.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:v.userId,batchId:p}),s.push(Cn(this.serializer,v))}));u.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new se($);const i=[];return t.forEach((s=>{const o=no(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=dr(e).X({range:c},((h,f,p)=>{const[g,v,C]=h,D=ct(v);g===this.userId&&s.path.isEqual(D)?n=n.add(C):p.done()}));i.push(u)})),A.waitFor(i).next((()=>this.nr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=no(this.userId,n),o=IDBKeyRange.lowerBound(s);let c=new se($);return dr(e).X({range:o},((u,h,f)=>{const[p,g,v]=u,C=ct(g);p===this.userId&&n.isPrefixOf(C)?C.length===i&&(c=c.add(v)):f.done()})).next((()=>this.nr(e,c)))}nr(e,t){const n=[],i=[];return t.forEach((s=>{i.push(qt(e).get(s).next((o=>{if(o===null)throw F(35274,{batchId:s});q(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),n.push(Cn(this.serializer,o))})))})),A.waitFor(i).next((()=>n))}removeMutationBatch(e,t){return xm(e.ce,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.rr(t.batchId)})),A.forEach(n,(i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return A.resolve();const n=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),i=[];return dr(e).X({range:n},((s,o,c)=>{if(s[0]===this.userId){const u=ct(s[1]);i.push(u)}else c.done()})).next((()=>{q(i.length===0,56720,{ir:i.map((s=>s.canonicalString()))})}))}))}containsKey(e,t){return Om(e,this.userId,t)}sr(e){return Mm(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:nn,lastStreamToken:""}))}}function Om(r,e,t){const n=no(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return dr(r).X({range:s,Z:!0},((c,u,h)=>{const[f,p,g]=c;f===e&&p===i&&(o=!0),h.done()})).next((()=>o))}function qt(r){return we(r,tt)}function dr(r){return we(r,Ar)}function Mm(r){return we(r,zi)}/**
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
 */class zn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new zn(0)}static ur(){return new zn(-1)}}/**
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
 */class pw{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next((t=>{const n=new zn(t.highestTargetId);return t.highestTargetId=n.next(),this.lr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.cr(e).next((t=>j.fromTimestamp(new te(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.cr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.cr(e).next((i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.lr(e,i))))}addTargetData(e,t){return this.hr(e,t).next((()=>this.cr(e).next((n=>(n.targetCount+=1,this.Pr(t,n),this.lr(e,n))))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>cr(e).delete(t.targetId))).next((()=>this.cr(e))).next((n=>(q(n.targetCount>0,8065),n.targetCount-=1,this.lr(e,n))))}removeTargets(e,t,n){let i=0;const s=[];return cr(e).X(((o,c)=>{const u=Ci(c);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))})).next((()=>A.waitFor(s))).next((()=>i))}forEachTarget(e,t){return cr(e).X(((n,i)=>{const s=Ci(i);t(s)}))}cr(e){return Cd(e).get(Ao).next((t=>(q(t!==null,2888),t)))}lr(e,t){return Cd(e).put(Ao,t)}hr(e,t){return cr(e).put(Vm(this.serializer,t))}Pr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.cr(e).next((t=>t.targetCount))}getTargetData(e,t){const n=Un(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return cr(e).X({range:i,index:Ap},((o,c,u)=>{const h=Ci(c);ls(t,h.target)&&(s=h,u.done())})).next((()=>s))}addMatchingKeys(e,t,n){const i=[],s=Ht(e);return t.forEach((o=>{const c=Me(o.path);i.push(s.put({targetId:n,path:c})),i.push(this.referenceDelegate.addReference(e,n,o))})),A.waitFor(i)}removeMatchingKeys(e,t,n){const i=Ht(e);return A.forEach(t,(s=>{const o=Me(s.path);return A.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])}))}removeMatchingKeysForTargetId(e,t){const n=Ht(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=Ht(e);let s=W();return i.X({range:n,Z:!0},((o,c,u)=>{const h=ct(o[1]),f=new x(h);s=s.add(f)})).next((()=>s))}containsKey(e,t){const n=Me(t.path),i=IDBKeyRange.bound([n],[dp(n)],!1,!0);let s=0;return Ht(e).X({index:nu,Z:!0,range:i},(([o,c],u,h)=>{o!==0&&(s++,h.done())})).next((()=>s>0))}Et(e,t){return cr(e).get(t).next((n=>n?Ci(n):null))}}function cr(r){return we(r,br)}function Cd(r){return we(r,xn)}function Ht(r){return we(r,Rr)}/**
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
 */const Vd="LruGarbageCollector",Lm=1048576;function Dd([r,e],[t,n]){const i=$(r,t);return i===0?$(e,n):i}class mw{constructor(e){this.Tr=e,this.buffer=new se(Dd),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Dd(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Fm{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){N(Vd,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fn(t)?N(Vd,"Ignoring IndexedDB error during garbage collection: ",t):await dn(t)}await this.Rr(3e5)}))}}class gw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return A.resolve($e.ue);const n=new mw(t);return this.Vr.forEachTarget(e,(i=>n.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>n.Er(i))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Pd)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pd):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,i,s,o,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(n=p,c=Date.now(),this.removeTargets(e,n,t)))).next((p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((p=>(h=Date.now(),ur()<=J.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p}))))}}function Um(r,e){return new gw(r,e)}/**
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
 */class _w{constructor(e,t){this.db=e,this.garbageCollector=Um(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,((n,i)=>t(i)))}addReference(e,t,n){return Ks(e,n)}removeReference(e,t,n){return Ks(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ks(e,t)}Sr(e,t){return(function(i,s){let o=!1;return Mm(i).ee((c=>Om(i,c,s).next((u=>(u&&(o=!0),A.resolve(!u)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.wr(e,((o,c)=>{if(c<=t){const u=this.Sr(e,o).next((h=>{if(!h)return s++,n.getEntry(e,o).next((()=>(n.removeEntry(o,j.min()),Ht(e).delete((function(p){return[0,Me(p.path)]})(o)))))}));i.push(u)}})).next((()=>A.waitFor(i))).next((()=>n.apply(e))).next((()=>s))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ks(e,t)}wr(e,t){const n=Ht(e);let i,s=$e.ue;return n.X({index:nu},(([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==$e.ue&&t(new x(ct(i)),s),s=h,i=u):s=$e.ue})).next((()=>{s!==$e.ue&&t(new x(ct(i)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ks(r,e){return Ht(r).put((function(n,i){return{targetId:0,path:Me(n.path),sequenceNumber:i}})(e,r.currentSequenceNumber))}/**
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
 */class Bm{constructor(){this.changes=new kt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yw{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return An(e).put(n)}removeEntry(e,t,n){return An(e).delete((function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Co(o),c[c.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.br(e,n))))}getEntry(e,t){let n=le.newInvalidDocument(t);return An(e).X({index:ro,range:IDBKeyRange.only(vi(t))},((i,s)=>{n=this.Dr(t,s)})).next((()=>n))}vr(e,t){let n={size:0,document:le.newInvalidDocument(t)};return An(e).X({index:ro,range:IDBKeyRange.only(vi(t))},((i,s)=>{n={document:this.Dr(t,s),size:Do(s)}})).next((()=>n))}getEntries(e,t){let n=Ge();return this.Cr(e,t,((i,s)=>{const o=this.Dr(i,s);n=n.insert(i,o)})).next((()=>n))}Fr(e,t){let n=Ge(),i=new ce(x.comparator);return this.Cr(e,t,((s,o)=>{const c=this.Dr(s,o);n=n.insert(s,c),i=i.insert(s,Do(o))})).next((()=>({documents:n,Mr:i})))}Cr(e,t,n){if(t.isEmpty())return A.resolve();let i=new se(xd);t.forEach((u=>i=i.add(u)));const s=IDBKeyRange.bound(vi(i.first()),vi(i.last())),o=i.getIterator();let c=o.getNext();return An(e).X({index:ro,range:s},((u,h,f)=>{const p=x.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&xd(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.G(vi(c)):f.done()})).next((()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Co(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return An(e).j(IDBKeyRange.bound(c,u,!0)).next((h=>{s==null||s.incrementDocumentReadCount(h.length);let f=Ge();for(const p of h){const g=this.Dr(x.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(ds(t,g)||i.has(g.key))&&(f=f.insert(g.key,g))}return f}))}getAllFromCollectionGroup(e,t,n,i){let s=Ge();const o=Nd(t,n),c=Nd(t,Je.max());return An(e).X({index:wp,range:IDBKeyRange.bound(o,c,!0)},((u,h,f)=>{const p=this.Dr(x.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(p.key,p),s.size===i&&f.done()})).next((()=>s))}newChangeBuffer(e){return new Iw(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return kd(e).get(fc).next((t=>(q(!!t,20021),t)))}br(e,t){return kd(e).put(fc,t)}Dr(e,t){if(t){const n=iw(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(j.min())))return n}return le.newInvalidDocument(e)}}function qm(r){return new yw(r)}class Iw extends Bm{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new kt((n=>n.toString()),((n,i)=>n.isEqual(i)))}applyChanges(e){const t=[];let n=0,i=new se(((s,o)=>$(s.canonicalString(),o.canonicalString())));return this.changes.forEach(((s,o)=>{const c=this.Nr.get(s);if(t.push(this.Or.removeEntry(e,s,c.readTime)),o.isValidDocument()){const u=md(this.Or.serializer,o);i=i.add(s.path.popLast());const h=Do(u);n+=h-c.size,t.push(this.Or.addEntry(e,s,u))}else if(n-=c.size,this.trackRemovals){const u=md(this.Or.serializer,o.convertToNoDocument(j.min()));t.push(this.Or.addEntry(e,s,u))}})),i.forEach((s=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,s))})),t.push(this.Or.updateMetadata(e,n)),A.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next((n=>(this.Nr.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Or.Fr(e,t).next((({documents:n,Mr:i})=>(i.forEach(((s,o)=>{this.Nr.set(s,{size:o,readTime:n.get(s).readTime})})),n)))}}function kd(r){return we(r,Gi)}function An(r){return we(r,wo)}function vi(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Nd(r,e){const t=e.documentKey.path.toArray();return[r,Co(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function xd(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=$(t[s],n[s]),i)return i;return i=$(t.length,n.length),i||(i=$(t[t.length-2],n[n.length-2]),i||$(t[t.length-1],n[n.length-1]))}/**
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
 */class Ew{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class jm{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(n!==null&&Fi(n.mutation,i,ze.empty(),te.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,W()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=W()){const i=ut();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((s=>{let o=Si();return s.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=ut();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,W())))}populateOverlays(e,t,n){const i=[];return n.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,n,i){let s=Ge();const o=Li(),c=(function(){return Li()})();return t.forEach(((u,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Nt)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Fi(f.mutation,h,f.mutation.getFieldMask(),te.now())):o.set(h.key,ze.empty())})),this.recalculateAndSaveOverlays(e,s).next((u=>(u.forEach(((h,f)=>o.set(h,f))),t.forEach(((h,f)=>{var p;return c.set(h,new Ew(f,(p=o.get(h))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,t){const n=Li();let i=new ce(((o,c)=>o-c)),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let f=n.get(u)||ze.empty();f=c.applyToLocalView(h,f),n.set(u,f);const p=(i.get(c.batchId)||W()).add(u);i=i.insert(c.batchId,p)}))})).next((()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,p=im();f.forEach((g=>{if(!s.has(g)){const v=hm(t.get(g),n.get(g));v!==null&&p.set(g,v),s=s.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return A.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,i){return(function(o){return x.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):uu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):A.resolve(ut());let c=Tr,u=s;return o.next((h=>A.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),s.get(f)?A.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{u=u.insert(f,g)}))))).next((()=>this.populateOverlays(e,h,s))).next((()=>this.computeViews(e,u,h,W()))).next((f=>({batchId:c,changes:rm(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next((n=>{let i=Si();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=Si();return this.indexManager.getCollectionParents(e,s).next((c=>A.forEach(c,(u=>{const h=(function(p,g){return new Dt(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next((f=>{f.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i)))).next((o=>{s.forEach(((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,le.newInvalidDocument(f)))}));let c=Si();return o.forEach(((u,h)=>{const f=s.get(u);f!==void 0&&Fi(f.mutation,h,ze.empty(),te.now()),ds(t,h)&&(c=c.insert(u,h))})),c}))}}/**
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
 */class Tw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return A.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:ye(i.createTime)}})(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:na(i.bundledQuery),readTime:ye(i.readTime)}})(t)),A.resolve()}}/**
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
 */class vw{constructor(){this.overlays=new ce(x.comparator),this.kr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ut();return A.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&n.set(i,s)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((i,s)=>{this.wt(e,t,s)})),A.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.kr.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const i=ut(),s=t.length+1,o=new x(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>n&&i.set(u.getKey(),u)}return A.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new ce(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=ut(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=ut(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=i)););return A.resolve(c)}wt(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new mu(t,n));let s=this.kr.get(t);s===void 0&&(s=W(),this.kr.set(t,s)),this.kr.set(t,s.add(n.key))}}/**
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
 */class ww{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
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
 */class Eu{constructor(){this.qr=new se(Ae.Qr),this.$r=new se(Ae.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new Ae(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new Ae(e,t))}Gr(e,t){e.forEach((n=>this.removeReference(n,t)))}zr(e){const t=new x(new H([])),n=new Ae(t,e),i=new Ae(t,e+1),s=[];return this.$r.forEachInRange([n,i],(o=>{this.Wr(o),s.push(o.key)})),s}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new x(new H([])),n=new Ae(t,e),i=new Ae(t,e+1);let s=W();return this.$r.forEachInRange([n,i],(o=>{s=s.add(o.key)})),s}containsKey(e){const t=new Ae(e,0),n=this.qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ae{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return x.comparator(e.key,t.key)||$(e.Hr,t.Hr)}static Ur(e,t){return $(e.Hr,t.Hr)||x.comparator(e.key,t.key)}}/**
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
 */class Aw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new se(Ae.Qr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fu(s,t,n,i);this.mutationQueue.push(o);for(const c of i)this.Yr=this.Yr.add(new Ae(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Xr(n),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?nn:this.er-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ae(t,0),i=new Ae(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([n,i],(o=>{const c=this.Zr(o.Hr);s.push(c)})),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new se($);return t.forEach((i=>{const s=new Ae(i,0),o=new Ae(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],(c=>{n=n.add(c.Hr)}))})),A.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;x.isDocumentKey(s)||(s=s.child(""));const o=new Ae(new x(s),0);let c=new se($);return this.Yr.forEachWhile((u=>{const h=u.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.Hr)),!0)}),o),A.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((n=>{const i=this.Zr(n);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){q(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return A.forEach(t.mutations,(i=>{const s=new Ae(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=n}))}rr(e){}containsKey(e,t){const n=new Ae(t,0),i=this.Yr.firstAfterOrEqual(n);return A.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class bw{constructor(e){this.ni=e,this.docs=(function(){return new ce(x.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():le.newInvalidDocument(t))}getEntries(e,t){let n=Ge();return t.forEach((i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():le.newInvalidDocument(i))})),A.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Ge();const o=t.path,c=new x(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||eu(_p(f),n)<=0||(i.has(f.key)||ds(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,t,n,i){F(9500)}ri(e,t){return A.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new Rw(this)}getSize(e){return A.resolve(this.size)}}class Rw extends Bm{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(n)})),A.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class Sw{constructor(e){this.persistence=e,this.ii=new kt((t=>Un(t)),ls),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.si=0,this.oi=new Eu,this.targetCount=0,this._i=zn.ar()}forEachTarget(e,t){return this.ii.forEach(((n,i)=>t(i))),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),A.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new zn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.hr(t),A.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.ii.forEach(((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),A.waitFor(s).next((()=>i))}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),A.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((o=>{s.push(i.markPotentiallyOrphaned(e,o))})),A.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this.oi.containsKey(t))}}/**
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
 */class Tu{constructor(e,t){this.ai={},this.overlays={},this.ui=new $e(0),this.ci=!1,this.ci=!0,this.li=new ww,this.referenceDelegate=e(this),this.hi=new Sw(this),this.indexManager=new dw,this.remoteDocumentCache=(function(i){return new bw(i)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new Cm(t),this.Ti=new Tw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new Aw(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){N("MemoryPersistence","Starting transaction:",e);const i=new Pw(this.ui.next());return this.referenceDelegate.Ii(),n(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return A.or(Object.values(this.ai).map((n=>()=>n.containsKey(e,t))))}}class Pw extends Ip{constructor(e){super(),this.currentSequenceNumber=e}}class sa{constructor(e){this.persistence=e,this.Ai=new Eu,this.Ri=null}static Vi(e){return new sa(e)}get mi(){if(this.Ri)return this.Ri;throw F(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),A.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.mi.add(s.toString())))})).next((()=>n.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.mi,(n=>{const i=x.fromPath(n);return this.fi(e,i).next((s=>{s||t.removeEntry(i,j.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((n=>{n?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return A.or([()=>A.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ko{constructor(e,t){this.persistence=e,this.gi=new kt((n=>Me(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=Um(this,t)}static Vi(e,t){return new ko(e,t)}Ii(){}di(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}gr(e,t){return A.forEach(this.gi,((n,i)=>this.Sr(e,n,i).next((s=>s?A.resolve():t(i)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,(o=>this.Sr(e,o,t).next((c=>{c||(n++,s.removeEntry(o,j.min()))})))).next((()=>s.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),A.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),A.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=so(e.data.value)),t}Sr(e,t,n){return A.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return A.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Cw{constructor(e){this.serializer=e}q(e,t,n,i){const s=new Go("createOrUpgrade",t);n<1&&i>=1&&((function(u){u.createObjectStore(us)})(e),(function(u){u.createObjectStore(zi,{keyPath:WT}),u.createObjectStore(tt,{keyPath:Gh,autoIncrement:!0}).createIndex(kn,Kh,{unique:!0}),u.createObjectStore(Ar)})(e),Od(e),(function(u){u.createObjectStore(Sn)})(e));let o=A.resolve();return n<3&&i>=3&&(n!==0&&((function(u){u.deleteObjectStore(Rr),u.deleteObjectStore(br),u.deleteObjectStore(xn)})(e),Od(e)),o=o.next((()=>(function(u){const h=u.store(xn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return h.put(Ao,f)})(s)))),n<4&&i>=4&&(n!==0&&(o=o.next((()=>(function(u,h){return h.store(tt).j().next((p=>{u.deleteObjectStore(tt),u.createObjectStore(tt,{keyPath:Gh,autoIncrement:!0}).createIndex(kn,Kh,{unique:!0});const g=h.store(tt),v=p.map((C=>g.put(C)));return A.waitFor(v)}))})(e,s)))),o=o.next((()=>{(function(u){u.createObjectStore(Sr,{keyPath:nv})})(e)}))),n<5&&i>=5&&(o=o.next((()=>this.pi(s)))),n<6&&i>=6&&(o=o.next((()=>((function(u){u.createObjectStore(Gi)})(e),this.yi(s))))),n<7&&i>=7&&(o=o.next((()=>this.wi(s)))),n<8&&i>=8&&(o=o.next((()=>this.Si(e,s)))),n<9&&i>=9&&(o=o.next((()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&i>=10&&(o=o.next((()=>this.bi(s)))),n<11&&i>=11&&(o=o.next((()=>{(function(u){u.createObjectStore(Ko,{keyPath:rv})})(e),(function(u){u.createObjectStore(Wo,{keyPath:iv})})(e)}))),n<12&&i>=12&&(o=o.next((()=>{(function(u){const h=u.createObjectStore(Ho,{keyPath:hv});h.createIndex(mc,dv,{unique:!1}),h.createIndex(Sp,fv,{unique:!1})})(e)}))),n<13&&i>=13&&(o=o.next((()=>(function(u){const h=u.createObjectStore(wo,{keyPath:QT});h.createIndex(ro,JT),h.createIndex(wp,XT)})(e))).next((()=>this.Di(e,s))).next((()=>e.deleteObjectStore(Sn)))),n<14&&i>=14&&(o=o.next((()=>this.Ci(e,s)))),n<15&&i>=15&&(o=o.next((()=>(function(u){u.createObjectStore(ru,{keyPath:sv,autoIncrement:!0}).createIndex(pc,ov,{unique:!1}),u.createObjectStore(xi,{keyPath:av}).createIndex(bp,cv,{unique:!1}),u.createObjectStore(Oi,{keyPath:uv}).createIndex(Rp,lv,{unique:!1})})(e)))),n<16&&i>=16&&(o=o.next((()=>{t.objectStore(xi).clear()})).next((()=>{t.objectStore(Oi).clear()}))),n<17&&i>=17&&(o=o.next((()=>{(function(u){u.createObjectStore(iu,{keyPath:pv})})(e)}))),n<18&&i>=18&&_f()&&(o=o.next((()=>{t.objectStore(xi).clear()})).next((()=>{t.objectStore(Oi).clear()}))),o}yi(e){let t=0;return e.store(Sn).X(((n,i)=>{t+=Do(i)})).next((()=>{const n={byteSize:t};return e.store(Gi).put(fc,n)}))}pi(e){const t=e.store(zi),n=e.store(tt);return t.j().next((i=>A.forEach(i,(s=>{const o=IDBKeyRange.bound([s.userId,nn],[s.userId,s.lastAcknowledgedBatchId]);return n.j(kn,o).next((c=>A.forEach(c,(u=>{q(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const h=Cn(this.serializer,u);return xm(e,s.userId,h).next((()=>{}))}))))}))))}wi(e){const t=e.store(Rr),n=e.store(Sn);return e.store(xn).get(Ao).next((i=>{const s=[];return n.X(((o,c)=>{const u=new H(o),h=(function(p){return[0,Me(p)]})(u);s.push(t.get(h).next((f=>f?A.resolve():(p=>t.put({targetId:0,path:Me(p),sequenceNumber:i.highestListenSequenceNumber}))(u))))})).next((()=>A.waitFor(s)))}))}Si(e,t){e.createObjectStore(Ki,{keyPath:tv});const n=t.store(Ki),i=new Iu,s=o=>{if(i.add(o)){const c=o.lastSegment(),u=o.popLast();return n.put({collectionId:c,parent:Me(u)})}};return t.store(Sn).X({Z:!0},((o,c)=>{const u=new H(o);return s(u.popLast())})).next((()=>t.store(Ar).X({Z:!0},(([o,c,u],h)=>{const f=ct(c);return s(f.popLast())}))))}bi(e){const t=e.store(br);return t.X(((n,i)=>{const s=Ci(i),o=Vm(this.serializer,s);return t.put(o)}))}Di(e,t){const n=t.store(Sn),i=[];return n.X(((s,o)=>{const c=t.store(wo),u=(function(p){return p.document?new x(H.fromString(p.document.name).popFirst(5)):p.noDocument?x.fromSegments(p.noDocument.path):p.unknownDocument?x.fromSegments(p.unknownDocument.path):F(36783)})(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))})).next((()=>A.waitFor(i)))}Ci(e,t){const n=t.store(tt),i=qm(this.serializer),s=new Tu(sa.Vi,this.serializer.gt);return n.j().next((o=>{const c=new Map;return o.forEach((u=>{var h;let f=(h=c.get(u.userId))!==null&&h!==void 0?h:W();Cn(this.serializer,u).keys().forEach((p=>f=f.add(p))),c.set(u.userId,f)})),A.forEach(c,((u,h)=>{const f=new be(h),p=ra.yt(this.serializer,f),g=s.getIndexManager(f),v=ia.yt(f,this.serializer,g,s.referenceDelegate);return new jm(i,v,p,g).recalculateAndSaveOverlaysForDocumentKeys(new gc(t,$e.ue),u).next()}))}))}}function Od(r){r.createObjectStore(Rr,{keyPath:ZT}).createIndex(nu,ev,{unique:!0}),r.createObjectStore(br,{keyPath:"targetId"}).createIndex(Ap,YT,{unique:!0}),r.createObjectStore(xn)}const jt="IndexedDbPersistence",Ha=18e5,Qa=5e3,Ja="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",$m="main";class vu{constructor(e,t,n,i,s,o,c,u,h,f,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Fi=s,this.window=o,this.document=c,this.Mi=h,this.xi=f,this.Oi=p,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=g=>Promise.resolve(),!vu.C())throw new V(R.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new _w(this,i),this.Qi=t+$m,this.serializer=new Cm(u),this.$i=new ht(this.Qi,this.Oi,new Cw(this.serializer)),this.li=new ow,this.hi=new pw(this.referenceDelegate,this.serializer),this.remoteDocumentCache=qm(this.serializer),this.Ti=new sw,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&_e(jt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(R.FAILED_PRECONDITION,Ja);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.hi.getHighestSequenceNumber(e)))})).then((e=>{this.ui=new $e(e,this.Mi)})).then((()=>{this.ci=!0})).catch((e=>(this.$i&&this.$i.close(),Promise.reject(e))))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget((async()=>{this.started&&await this.Ki()})))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Ws(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ji(e).next((t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))))}))})).next((()=>this.Hi(e))).next((t=>this.isPrimary&&!t?this.Yi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(fn(e))return N(jt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N(jt,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable((()=>this.qi(e))),this.isPrimary=e}))}Ji(e){return wi(e).get(rr).next((t=>A.resolve(this.Xi(t))))}es(e){return Ws(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,Ha)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=we(t,Sr);return n.j().next((i=>{const s=this.rs(i,Ha),o=i.filter((c=>s.indexOf(c)===-1));return A.forEach(o,(c=>n.delete(c.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ki().then((()=>this.ts())).then((()=>this.zi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?A.resolve(!0):wi(e).get(rr).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Qa)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new V(R.FAILED_PRECONDITION,Ja);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ws(e).j().next((n=>this.rs(n,Qa).find((i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&N(jt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[us,Sr],(e=>{const t=new gc(e,$e.ue);return this.Yi(t).next((()=>this.es(t)))})),this.$i.close(),this.hs()}rs(e,t){return e.filter((n=>this.ns(n.updateTimeMs,t)&&!this._s(n.clientId)))}Ps(){return this.runTransaction("getActiveClients","readonly",(e=>Ws(e).j().next((t=>this.rs(t,Ha).map((n=>n.clientId))))))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return ia.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new fw(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return ra.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,n){N(jt,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(function(u){return u===18?_v:u===17?Dp:u===16?gv:u===15?su:u===14?Vp:u===13?Cp:u===12?mv:u===11?Pp:void F(60245)})(this.Oi);let o;return this.$i.runTransaction(e,i,s,(c=>(o=new gc(c,this.ui?this.ui.next():$e.ue),t==="readwrite-primary"?this.Ji(o).next((u=>!!u||this.Hi(o))).next((u=>{if(!u)throw _e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))),new V(R.FAILED_PRECONDITION,yp);return n(o)})).next((u=>this.Zi(o).next((()=>u)))):this.Ts(o).next((()=>n(o)))))).then((c=>(o.raiseOnCommittedEvent(),c)))}Ts(e){return wi(e).get(rr).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Qa)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new V(R.FAILED_PRECONDITION,Ja)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return wi(e).put(rr,t)}static C(){return ht.C()}Yi(e){const t=wi(e);return t.get(rr).next((n=>this.Xi(n)?(N(jt,"Releasing primary lease."),t.delete(rr)):A.resolve()))}ns(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(_e(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki())))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;gf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const n=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return N(jt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return _e(jt,"Failed to get zombied client id.",n),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){_e("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function wi(r){return we(r,us)}function Ws(r){return we(r,Sr)}function wu(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Au{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=i}static Es(e,t){let n=W(),i=W();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Au(e,t.fromCache,n,i)}}/**
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
 */class Vw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zm{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return gf()?8:Ep(Te())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.ps(e,t).next((o=>{s.result=o})).next((()=>{if(!s.result)return this.ys(e,t,i,n).next((o=>{s.result=o}))})).next((()=>{if(s.result)return;const o=new Vw;return this.ws(e,t,o).next((c=>{if(s.result=c,this.Rs)return this.Ss(e,t,o,c.size)}))})).next((()=>s.result))}Ss(e,t,n,i){return n.documentReadCount<this.Vs?(ur()<=J.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",lr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),A.resolve()):(ur()<=J.DEBUG&&N("QueryEngine","Query:",lr(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(ur()<=J.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",lr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Le(t))):A.resolve())}ps(e,t){if(sd(t))return A.resolve(null);let n=Le(t);return this.indexManager.getIndexType(e,n).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=So(t,null,"F"),n=Le(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const o=W(...s);return this.gs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,n).next((u=>{const h=this.bs(t,c);return this.Ds(t,h,o,u.readTime)?this.ps(e,So(t,null,"F")):this.vs(e,h,t,u)}))))})))))}ys(e,t,n,i){return sd(t)||i.isEqual(j.min())?A.resolve(null):this.gs.getDocuments(e,n).next((s=>{const o=this.bs(t,s);return this.Ds(t,o,n,i)?A.resolve(null):(ur()<=J.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),lr(t)),this.vs(e,o,t,gp(i,Tr)).next((c=>c)))}))}bs(e,t){let n=new se(tm(e));return t.forEach(((i,s)=>{ds(e,s)&&(n=n.add(s))})),n}Ds(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,n){return ur()<=J.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",lr(t)),this.gs.getDocumentsMatchingQuery(e,t,Je.min(),n)}vs(e,t,n,i){return this.gs.getDocumentsMatchingQuery(e,n,i).next((s=>(t.forEach((o=>{s=s.insert(o.key,o)})),s)))}}/**
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
 */const bu="LocalStore",Dw=3e8;class kw{constructor(e,t,n,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new ce($),this.Ms=new kt((s=>Un(s)),ls),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jm(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Gm(r,e,t,n){return new kw(r,e,t,n)}async function Km(r,e){const t=O(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next((s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(n)))).next((s=>{const o=[],c=[];let u=W();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(n,u).next((h=>({Bs:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function Nw(r,e){const t=O(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,u,h,f){const p=h.batch,g=p.keys();let v=A.resolve();return g.forEach((C=>{v=v.next((()=>f.getEntry(u,C))).next((D=>{const k=h.docVersions.get(C);q(k!==null,48541),D.version.compareTo(k)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))}))})),v.next((()=>c.mutationQueue.removeMutationBatch(u,p)))})(t,n,e,s).next((()=>s.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(c){let u=W();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(n,i)))}))}function Wm(r){const e=O(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function xw(r,e){const t=O(r),n=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const c=[];e.targetChanges.forEach(((f,p)=>{const g=i.get(p);if(!g)return;c.push(t.hi.removeMatchingKeys(s,f.removedDocuments,p).next((()=>t.hi.addMatchingKeys(s,f.addedDocuments,p))));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(me.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,n)),i=i.insert(p,v),(function(D,k,L){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Dw?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(g,v,f)&&c.push(t.hi.updateTargetData(s,v))}));let u=Ge(),h=W();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))})),c.push(Hm(s,o,e.documentUpdates).next((f=>{u=f.Ls,h=f.ks}))),!n.isEqual(j.min())){const f=t.hi.getLastRemoteSnapshotVersion(s).next((p=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,n)));c.push(f)}return A.waitFor(c).next((()=>o.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,u,h))).next((()=>u))})).then((s=>(t.Fs=i,s)))}function Hm(r,e,t){let n=W(),i=W();return t.forEach((s=>n=n.add(s))),e.getEntries(r,n).next((s=>{let o=Ge();return t.forEach(((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):N(bu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)})),{Ls:o,ks:i}}))}function Ow(r,e){const t=O(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=nn),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function xr(r,e){const t=O(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return t.hi.getTargetData(n,e).next((s=>s?(i=s,A.resolve(i)):t.hi.allocateTargetId(n).next((o=>(i=new Et(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.hi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=t.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(n.targetId,n),t.Ms.set(e,n.targetId)),n}))}async function Or(r,e,t){const n=O(r),i=n.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,(o=>n.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!fn(o))throw o;N(bu,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Fs=n.Fs.remove(e),n.Ms.delete(i.target)}function No(r,e,t){const n=O(r);let i=j.min(),s=W();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,h,f){const p=O(u),g=p.Ms.get(f);return g!==void 0?A.resolve(p.Fs.get(g)):p.hi.getTargetData(h,f)})(n,o,Le(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(o,c.targetId).next((u=>{s=u}))})).next((()=>n.Cs.getDocumentsMatchingQuery(o,e,t?i:j.min(),t?s:W()))).next((c=>(Xm(n,em(e),c),{documents:c,qs:s})))))}function Qm(r,e){const t=O(r),n=O(t.hi),i=t.Fs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",(s=>n.Et(s,e).next((o=>o?o.target:null))))}function Jm(r,e){const t=O(r),n=t.xs.get(e)||j.min();return t.persistence.runTransaction("Get new document changes","readonly",(i=>t.Os.getAllFromCollectionGroup(i,e,gp(n,Tr),Number.MAX_SAFE_INTEGER))).then((i=>(Xm(t,e,i),i)))}function Xm(r,e,t){let n=r.xs.get(e)||j.min();t.forEach(((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)})),r.xs.set(e,n)}async function Mw(r,e,t,n){const i=O(r);let s=W(),o=Ge();for(const h of t){const f=e.Qs(h.metadata.name);h.document&&(s=s.add(f));const p=e.$s(h);p.setReadTime(e.Us(h.metadata.readTime)),o=o.insert(f,p)}const c=i.Os.newChangeBuffer({trackRemovals:!0}),u=await xr(i,(function(f){return Le(Gr(H.fromString(`__bundle__/docs/${f}`)))})(n));return i.persistence.runTransaction("Apply bundle documents","readwrite",(h=>Hm(h,c,o).next((f=>(c.apply(h),f))).next((f=>i.hi.removeMatchingKeysForTargetId(h,u.targetId).next((()=>i.hi.addMatchingKeys(h,s,u.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(h,f.Ls,f.ks))).next((()=>f.Ls))))))}async function Lw(r,e,t=W()){const n=await xr(r,Le(na(e.bundledQuery))),i=O(r);return i.persistence.runTransaction("Save named query","readwrite",(s=>{const o=ye(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return i.Ti.saveNamedQuery(s,e);const c=n.withResumeToken(me.EMPTY_BYTE_STRING,o);return i.Fs=i.Fs.insert(c.targetId,c),i.hi.updateTargetData(s,c).next((()=>i.hi.removeMatchingKeysForTargetId(s,n.targetId))).next((()=>i.hi.addMatchingKeys(s,t,n.targetId))).next((()=>i.Ti.saveNamedQuery(s,e)))}))}/**
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
 */const Ym="firestore_clients";function Md(r,e){return`${Ym}_${r}_${e}`}const Zm="firestore_mutations";function Ld(r,e,t){let n=`${Zm}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const eg="firestore_targets";function Xa(r,e){return`${eg}_${r}_${e}`}/**
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
 */const at="SharedClientState";class xo{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Ks(e,t,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new V(i.error.code,i.error.message))),o?new xo(e,t,i.state,s):(_e(at,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ui{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ks(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new V(n.error.code,n.error.message))),s?new Ui(e,n.state,i):(_e(at,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Oo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=lu();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=Tp(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new Oo(e,s):(_e(at,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Ru{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Ru(t.clientId,t.onlineState):(_e(at,`Failed to parse online state: ${e}`),null)}}class Vc{constructor(){this.activeTargetIds=lu()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ya{constructor(e,t,n,i,s){this.window=e,this.Fi=t,this.persistenceKey=n,this.js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new ce($),this.started=!1,this.Zs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=Md(this.persistenceKey,this.js),this.eo=(function(u){return`firestore_sequence_number_${u}`})(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new Vc),this.no=new RegExp(`^${Ym}_${o}_([^_]*)$`),this.ro=new RegExp(`^${Zm}_${o}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${eg}_${o}_(\\d+)$`),this.so=(function(u){return`firestore_online_state_${u}`})(this.persistenceKey),this.oo=(function(u){return`firestore_bundle_loaded_v2_${u}`})(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ps();for(const n of e){if(n===this.js)continue;const i=this.getItem(Md(this.persistenceKey,n));if(i){const s=Oo.Ks(n,i);s&&(this.Ys=this.Ys.insert(s.clientId,s))}}this._o();const t=this.storage.getItem(this.so);if(t){const n=this.ao(t);n&&this.uo(n)}for(const n of this.Zs)this.Hs(n);this.Zs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach(((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,n){this.lo(e,t,n),this.ho(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Xa(this.persistenceKey,e));if(i){const s=Ui.Ks(e,i);s&&(n=s.state)}}return t&&this.Po.Gs(e),this._o(),n}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Xa(this.persistenceKey,e))}updateQueryState(e,t,n){this.To(e,t,n)}handleUserChange(e,t,n){t.forEach((i=>{this.ho(i)})),this.currentUser=e,n.forEach((i=>{this.addPendingMutation(i)}))}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return N(at,"READ",e,t),t}setItem(e,t){N(at,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){N(at,"REMOVE",e),this.storage.removeItem(e)}Hs(e){const t=e;if(t.storageArea===this.storage){if(N(at,"EVENT",t.key,t.newValue),t.key===this.Xs)return void _e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.no.test(t.key)){if(t.newValue==null){const n=this.Ao(t.key);return this.Ro(n,null)}{const n=this.Vo(t.key,t.newValue);if(n)return this.Ro(n.clientId,n)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const n=this.mo(t.key,t.newValue);if(n)return this.fo(n)}}else if(this.io.test(t.key)){if(t.newValue!==null){const n=this.po(t.key,t.newValue);if(n)return this.yo(n)}}else if(t.key===this.so){if(t.newValue!==null){const n=this.ao(t.newValue);if(n)return this.uo(n)}}else if(t.key===this.eo){const n=(function(s){let o=$e.ue;if(s!=null)try{const c=JSON.parse(s);q(typeof c=="number",30636,{wo:s}),o=c}catch(c){_e(at,"Failed to read sequence number from WebStorage",c)}return o})(t.newValue);n!==$e.ue&&this.sequenceNumberHandler(n)}else if(t.key===this.oo){const n=this.So(t.newValue);await Promise.all(n.map((i=>this.syncEngine.bo(i))))}}}else this.Zs.push(t)}))}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,n){const i=new xo(this.currentUser,e,t,n),s=Ld(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ws())}ho(e){const t=Ld(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){const t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,n){const i=Xa(this.persistenceKey,e),s=new Ui(e,t,n);this.setItem(i,s.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){const t=this.no.exec(e);return t?t[1]:null}Vo(e,t){const n=this.Ao(e);return Oo.Ks(n,t)}mo(e,t){const n=this.ro.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return xo.Ks(new be(s),i,t)}po(e,t){const n=this.io.exec(e),i=Number(n[1]);return Ui.Ks(i,t)}ao(e){return Ru.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);N(at,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){const n=t?this.Ys.insert(e,t):this.Ys.remove(e),i=this.co(this.Ys),s=this.co(n),o=[],c=[];return s.forEach((u=>{i.has(u)||o.push(u)})),i.forEach((u=>{s.has(u)||c.push(u)})),this.syncEngine.Co(o,c).then((()=>{this.Ys=n}))}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=lu();return e.forEach(((n,i)=>{t=t.unionWith(i.activeTargetIds)})),t}}class tg{constructor(){this.Fo=new Vc,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Vc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Fw{xo(e){}shutdown(){}}/**
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
 */const Fd="ConnectivityMonitor";class Ud{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){N(Fd,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){N(Fd,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hs=null;function Dc(){return Hs===null?Hs=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hs++,"0x"+Hs.toString(16)}/**
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
 */const Za="RestConnection",Uw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Bw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===Hi?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(e,t,n,i,s){const o=Dc(),c=this.Go(e,t.toUriEncodedString());N(Za,`Sending RPC '${e}' ${o}:`,c,n);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(c),f=Wn(h);return this.jo(e,c,u,n,f).then((p=>(N(Za,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Fe(Za,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",n),p}))}Jo(e,t,n,i,s,o){return this.Wo(e,t,n,i,s)}zo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+zr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),n&&n.headers.forEach(((i,s)=>e[s]=i))}Go(e,t){const n=Uw[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}/**
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
 */class qw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const xe="WebChannelConnection";class jw extends Bw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,i,s){const o=Dc();return new Promise(((c,u)=>{const h=new ip;h.setWithCredentials(!0),h.listenOnce(sp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case to.NO_ERROR:const p=h.getResponseJson();N(xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case to.TIMEOUT:N(xe,`RPC '${e}' ${o} timed out`),u(new V(R.DEADLINE_EXCEEDED,"Request time out"));break;case to.HTTP_ERROR:const g=h.getStatus();if(N(xe,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const C=v==null?void 0:v.error;if(C&&C.status&&C.message){const D=(function(L){const B=L.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(B)>=0?B:R.UNKNOWN})(C.status);u(new V(D,C.message))}else u(new V(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new V(R.UNAVAILABLE,"Connection failed."));break;default:F(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{N(xe,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(i);N(xe,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",f,n,15)}))}P_(e,t,n){const i=Dc(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cp(),c=ap(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const f=s.join("");N(xe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.T_(p);let g=!1,v=!1;const C=new qw({Ho:k=>{v?N(xe,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(g||(N(xe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),N(xe,`RPC '${e}' stream ${i} sending:`,k),p.send(k))},Yo:()=>p.close()}),D=(k,L,B)=>{k.listen(L,(U=>{try{B(U)}catch(K){setTimeout((()=>{throw K}),0)}}))};return D(p,Ri.EventType.OPEN,(()=>{v||(N(xe,`RPC '${e}' stream ${i} transport opened.`),C.s_())})),D(p,Ri.EventType.CLOSE,(()=>{v||(v=!0,N(xe,`RPC '${e}' stream ${i} transport closed`),C.__(),this.I_(p))})),D(p,Ri.EventType.ERROR,(k=>{v||(v=!0,Fe(xe,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),C.__(new V(R.UNAVAILABLE,"The operation could not be completed")))})),D(p,Ri.EventType.MESSAGE,(k=>{var L;if(!v){const B=k.data[0];q(!!B,16349);const U=B,K=(U==null?void 0:U.error)||((L=U[0])===null||L===void 0?void 0:L.error);if(K){N(xe,`RPC '${e}' stream ${i} received error:`,K);const Z=K.status;let G=(function(I){const T=Ie[I];if(T!==void 0)return mm(T)})(Z),E=K.message;G===void 0&&(G=R.INTERNAL,E="Unknown error status: "+Z+" with message "+K.message),v=!0,C.__(new V(G,E)),p.close()}else N(xe,`RPC '${e}' stream ${i} received:`,B),C.a_(B)}})),D(c,op.STAT_EVENT,(k=>{k.stat===cc.PROXY?N(xe,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===cc.NOPROXY&&N(xe,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}/**
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
 */function ng(){return typeof window<"u"?window:null}function lo(){return typeof document<"u"?document:null}/**
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
 */function Qn(r){return new Hv(r,!0)}/**
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
 */class Su{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-n);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Bd="PersistentStream";class rg{constructor(e,t,n,i,s,o,c,u){this.Fi=e,this.w_=n,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Su(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(_e(t.toString()),_e("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.b_===t&&this.W_(n,i)}),(n=>{e((()=>{const i=new V(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)}))}))}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{n((()=>this.G_(i)))})),this.stream.onMessage((i=>{n((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return N(Bd,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(N(Bd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class $w extends rg{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Xv(this.serializer,e),n=(function(s){if(!("targetChange"in s))return j.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?ye(o.readTime):j.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=bc(this.serializer),t.addTarget=(function(s,o){let c;const u=o.target;if(c=bo(u)?{documents:wm(s,u)}:{query:ta(s,u).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ym(s,o.resumeToken);const h=wc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(j.min())>0){c.readTime=Nr(s,o.snapshotVersion.toTimestamp());const h=wc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const n=Zv(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=bc(this.serializer),t.removeTarget=e,this.k_(t)}}class zw extends rg{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Yv(e.writeResults,e.commitTime),n=ye(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=bc(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>Zi(this.serializer,n)))};this.k_(t)}}/**
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
 */class Gw{}class Kw extends Gw{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Wo(e,Ac(t,n),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(R.UNKNOWN,s.toString())}))}Jo(e,t,n,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Jo(e,Ac(t,n),i,o,c,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(R.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Ww{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(_e(t),this._a=!1):N("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Gn="RemoteStore";class Hw{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo((o=>{n.enqueueAndForget((async()=>{mn(this)&&(N(Gn,"Restarting streams for network reachability change."),await(async function(u){const h=O(u);h.Ia.add(4),await Hr(h),h.Aa.set("Unknown"),h.Ia.delete(4),await gs(h)})(this))}))})),this.Aa=new Ww(n,i)}}async function gs(r){if(mn(r))for(const e of r.da)await e(!0)}async function Hr(r){for(const e of r.da)await e(!1)}function oa(r,e){const t=O(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Vu(t)?Cu(t):Jr(t).x_()&&Pu(t,e))}function Mr(r,e){const t=O(r),n=Jr(t);t.Ta.delete(e),n.x_()&&ig(t,e),t.Ta.size===0&&(n.x_()?n.B_():mn(t)&&t.Aa.set("Unknown"))}function Pu(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jr(r).H_(e)}function ig(r,e){r.Ra.$e(e),Jr(r).Y_(e)}function Cu(r){r.Ra=new zv({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Jr(r).start(),r.Aa.aa()}function Vu(r){return mn(r)&&!Jr(r).M_()&&r.Ta.size>0}function mn(r){return O(r).Ia.size===0}function sg(r){r.Ra=void 0}async function Qw(r){r.Aa.set("Online")}async function Jw(r){r.Ta.forEach(((e,t)=>{Pu(r,e)}))}async function Xw(r,e){sg(r),Vu(r)?(r.Aa.la(e),Cu(r)):r.Aa.set("Unknown")}async function Yw(r,e,t){if(r.Aa.set("Online"),e instanceof _m&&e.state===2&&e.cause)try{await(async function(i,s){const o=s.cause;for(const c of s.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ta.delete(c),i.Ra.removeTarget(c))})(r,e)}catch(n){N(Gn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Mo(r,n)}else if(e instanceof co?r.Ra.Ye(e):e instanceof gm?r.Ra.it(e):r.Ra.et(e),!t.isEqual(j.min()))try{const n=await Wm(r.localStore);t.compareTo(n)>=0&&await(function(s,o){const c=s.Ra.Pt(o);return c.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,o))}})),c.targetMismatches.forEach(((u,h)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(me.EMPTY_BYTE_STRING,f.snapshotVersion)),ig(s,u);const p=new Et(f.target,u,h,f.sequenceNumber);Pu(s,p)})),s.remoteSyncer.applyRemoteEvent(c)})(r,t)}catch(n){N(Gn,"Failed to raise snapshot:",n),await Mo(r,n)}}async function Mo(r,e,t){if(!fn(e))throw e;r.Ia.add(1),await Hr(r),r.Aa.set("Offline"),t||(t=()=>Wm(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{N(Gn,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await gs(r)}))}function og(r,e){return e().catch((t=>Mo(r,t,e)))}async function Qr(r){const e=O(r),t=un(e);let n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:nn;for(;Zw(e);)try{const i=await Ow(e.localStore,n);if(i===null){e.Pa.length===0&&t.B_();break}n=i.batchId,eA(e,i)}catch(i){await Mo(e,i)}ag(e)&&cg(e)}function Zw(r){return mn(r)&&r.Pa.length<10}function eA(r,e){r.Pa.push(e);const t=un(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function ag(r){return mn(r)&&!un(r).M_()&&r.Pa.length>0}function cg(r){un(r).start()}async function tA(r){un(r).na()}async function nA(r){const e=un(r);for(const t of r.Pa)e.X_(t.mutations)}async function rA(r,e,t){const n=r.Pa.shift(),i=pu.from(n,e,t);await og(r,(()=>r.remoteSyncer.applySuccessfulWrite(i))),await Qr(r)}async function iA(r,e){e&&un(r).Z_&&await(async function(n,i){if((function(o){return pm(o)&&o!==R.ABORTED})(i.code)){const s=n.Pa.shift();un(n).N_(),await og(n,(()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i))),await Qr(n)}})(r,e),ag(r)&&cg(r)}async function qd(r,e){const t=O(r);t.asyncQueue.verifyOperationInProgress(),N(Gn,"RemoteStore received new credentials");const n=mn(t);t.Ia.add(3),await Hr(t),n&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await gs(t)}async function kc(r,e){const t=O(r);e?(t.Ia.delete(2),await gs(t)):e||(t.Ia.add(2),await Hr(t),t.Aa.set("Unknown"))}function Jr(r){return r.Va||(r.Va=(function(t,n,i){const s=O(t);return s.ia(),new $w(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(r.datastore,r.asyncQueue,{Zo:Qw.bind(null,r),e_:Jw.bind(null,r),n_:Xw.bind(null,r),J_:Yw.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Vu(r)?Cu(r):r.Aa.set("Unknown")):(await r.Va.stop(),sg(r))}))),r.Va}function un(r){return r.ma||(r.ma=(function(t,n,i){const s=O(t);return s.ia(),new zw(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:tA.bind(null,r),n_:iA.bind(null,r),ea:nA.bind(null,r),ta:rA.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Qr(r)):(await r.ma.stop(),r.Pa.length>0&&(N(Gn,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class Du{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,c=new Du(e,t,o,i,s);return c.start(n),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xr(r,e){if(_e("AsyncQueue",`${e}: ${r}`),fn(r))return new V(R.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class On{static emptySet(e){return new On(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||x.comparator(t.key,n.key):(t,n)=>x.comparator(t.key,n.key),this.keyedMap=Si(),this.sortedSet=new ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof On)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new On;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class jd{constructor(){this.fa=new ce(x.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?e.type!==0&&n.type===3?this.fa=this.fa.insert(t,e):e.type===3&&n.type!==1?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.fa=this.fa.remove(t):e.type===1&&n.type===2?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):F(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Kn{constructor(e,t,n,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Kn(e,t,On.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class sA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class oA{constructor(){this.queries=$d(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,n){const i=O(t),s=i.queries;i.queries=$d(),s.forEach(((o,c)=>{for(const u of c.wa)u.onError(n)}))})(this,new V(R.ABORTED,"Firestore shutting down"))}}function $d(){return new kt((r=>Zp(r)),hs)}async function ku(r,e){const t=O(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(n=2):(s=new sA,n=e.ba()?0:1);try{switch(n){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=Xr(o,`Initialization of query '${lr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&xu(t)}async function Nu(r,e){const t=O(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function aA(r,e){const t=O(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.wa)c.Ca(i)&&(n=!0);o.ya=i}}n&&xu(t)}function cA(r,e,t){const n=O(r),i=n.queries.get(e);if(i)for(const s of i.wa)s.onError(t);n.queries.delete(e)}function xu(r){r.Da.forEach((e=>{e.next()}))}var Nc,zd;(zd=Nc||(Nc={})).Fa="default",zd.Cache="cache";class Ou{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Kn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const n=t!=="Offline";return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Kn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Nc.Cache}}/**
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
 */class ug{constructor(e,t){this.qa=e,this.byteLength=t}Qa(){return"metadata"in this.qa}}/**
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
 */class Gd{constructor(e){this.serializer=e}Qs(e){return dt(this.serializer,e)}$s(e){return e.metadata.exists?ea(this.serializer,e.document,!1):le.newNoDocument(this.Qs(e.metadata.name),this.Us(e.metadata.readTime))}Us(e){return ye(e)}}class Mu{constructor(e,t){this.$a=e,this.serializer=t,this.Ua=[],this.Ka=[],this.collectionGroups=new Set,this.progress=lg(e)}get queries(){return this.Ua}get documents(){return this.Ka}Wa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.qa.namedQuery)this.Ua.push(e.qa.namedQuery);else if(e.qa.documentMetadata){this.Ka.push({metadata:e.qa.documentMetadata}),e.qa.documentMetadata.exists||++t;const n=H.fromString(e.qa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.qa.document&&(this.Ka[this.Ka.length-1].document=e.qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ga(e){const t=new Map,n=new Gd(this.serializer);for(const i of e)if(i.metadata.queries){const s=n.Qs(i.metadata.name);for(const o of i.metadata.queries){const c=(t.get(o)||W()).add(s);t.set(o,c)}}return t}async za(e){const t=await Mw(e,new Gd(this.serializer),this.Ka,this.$a.id),n=this.Ga(this.documents);for(const i of this.Ua)await Lw(e,i,n.get(i.name));return this.progress.taskState="Success",{progress:this.progress,ja:this.collectionGroups,Ja:t}}}function lg(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class hg{constructor(e){this.key=e}}class dg{constructor(e){this.key=e}}class fg{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=W(),this.mutatedKeys=W(),this.Xa=tm(e),this.eu=new On(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new jd,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,p)=>{const g=i.get(f),v=ds(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),D=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;g&&v?g.data.isEqual(v.data)?C!==D&&(n.track({type:3,doc:v}),k=!0):this.iu(g,v)||(n.track({type:2,doc:v}),k=!0,(u&&this.Xa(v,u)>0||h&&this.Xa(v,h)<0)&&(c=!0)):!g&&v?(n.track({type:0,doc:v}),k=!0):g&&!v&&(n.track({type:1,doc:g}),k=!0,(u||h)&&(c=!0)),k&&(v?(o=o.add(v),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{eu:o,ru:n,Ds:c,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(v,C){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{At:k})}};return D(v)-D(C)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(n),i=i!=null&&i;const c=t&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new Kn(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new jd,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=W(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const t=[];return e.forEach((n=>{this.Za.has(n)||t.push(new dg(n))})),this.Za.forEach((n=>{e.has(n)||t.push(new hg(n))})),t}uu(e){this.Ha=e.qs,this.Za=W();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Kn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const gn="SyncEngine";class uA{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class lA{constructor(e){this.key=e,this.lu=!1}}class hA{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new kt((c=>Zp(c)),hs),this.Tu=new Map,this.Iu=new Set,this.du=new ce(x.comparator),this.Eu=new Map,this.Au=new Eu,this.Ru={},this.Vu=new Map,this.mu=zn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function dA(r,e,t=!0){const n=aa(r);let i;const s=n.Pu.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await pg(n,e,t,!0),i}async function fA(r,e){const t=aa(r);await pg(t,e,!0,!1)}async function pg(r,e,t,n){const i=await xr(r.localStore,Le(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t);let c;return n&&(c=await Lu(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&oa(r.remoteStore,i),c}async function Lu(r,e,t,n,i){r.gu=(p,g,v)=>(async function(D,k,L,B){let U=k.view.nu(L);U.Ds&&(U=await No(D.localStore,k.query,!1).then((({documents:E})=>k.view.nu(E,U))));const K=B&&B.targetChanges.get(k.targetId),Z=B&&B.targetMismatches.get(k.targetId)!=null,G=k.view.applyChanges(U,D.isPrimaryClient,K,Z);return xc(D,k.targetId,G._u),G.snapshot})(r,p,g,v);const s=await No(r.localStore,e,!0),o=new fg(e,s.qs),c=o.nu(s.documents),u=ms.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=o.applyChanges(c,r.isPrimaryClient,u);xc(r,t,h._u);const f=new uA(e,t,o);return r.Pu.set(e,f),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),h.snapshot}async function pA(r,e,t){const n=O(r),i=n.Pu.get(e),s=n.Tu.get(i.targetId);if(s.length>1)return n.Tu.set(i.targetId,s.filter((o=>!hs(o,e)))),void n.Pu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Or(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Mr(n.remoteStore,i.targetId),Lr(n,i.targetId)})).catch(dn)):(Lr(n,i.targetId),await Or(n.localStore,i.targetId,!0))}async function mA(r,e){const t=O(r),n=t.Pu.get(e),i=t.Tu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Mr(t.remoteStore,n.targetId))}async function gA(r,e,t){const n=qu(r);try{const i=await(function(o,c){const u=O(o),h=te.now(),f=c.reduce(((v,C)=>v.add(C.key)),W());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let C=Ge(),D=W();return u.Os.getEntries(v,f).next((k=>{C=k,C.forEach(((L,B)=>{B.isValidDocument()||(D=D.add(L))}))})).next((()=>u.localDocuments.getOverlayedDocuments(v,C))).next((k=>{p=k;const L=[];for(const B of c){const U=qv(B,p.get(B.key).overlayedDocument);U!=null&&L.push(new Nt(B.key,U,jp(U.value.mapValue),fe.exists(!0)))}return u.mutationQueue.addMutationBatch(v,h,L,c)})).next((k=>{g=k;const L=k.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(v,k.batchId,L)}))})).then((()=>({batchId:g.batchId,changes:rm(p)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),(function(o,c,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new ce($)),h=h.insert(c,u),o.Ru[o.currentUser.toKey()]=h})(n,i.batchId,t),await xt(n,i.changes),await Qr(n.remoteStore)}catch(i){const s=Xr(i,"Failed to persist write");t.reject(s)}}async function mg(r,e){const t=O(r);try{const n=await xw(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const o=t.Eu.get(s);o&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?q(o.lu,14607):i.removedDocuments.size>0&&(q(o.lu,42227),o.lu=!1))})),await xt(t,n,e)}catch(n){await dn(n)}}function Kd(r,e,t){const n=O(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Pu.forEach(((s,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(o,c){const u=O(o);u.onlineState=c;let h=!1;u.queries.forEach(((f,p)=>{for(const g of p.wa)g.va(c)&&(h=!0)})),h&&xu(u)})(n.eventManager,e),i.length&&n.hu.J_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function _A(r,e,t){const n=O(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Eu.get(e),s=i&&i.key;if(s){let o=new ce(x.comparator);o=o.insert(s,le.newNoDocument(s,j.min()));const c=W().add(s),u=new ps(j.min(),new Map,new ce($),o,c);await mg(n,u),n.du=n.du.remove(s),n.Eu.delete(e),Bu(n)}else await Or(n.localStore,e,!1).then((()=>Lr(n,e,t))).catch(dn)}async function yA(r,e){const t=O(r),n=e.batch.batchId;try{const i=await Nw(t.localStore,e);Uu(t,n,null),Fu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await xt(t,i)}catch(i){await dn(i)}}async function IA(r,e,t){const n=O(r);try{const i=await(function(o,c){const u=O(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next((p=>(q(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>u.localDocuments.getDocuments(h,f)))}))})(n.localStore,e);Uu(n,e,t),Fu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await xt(n,i)}catch(i){await dn(i)}}async function EA(r,e){const t=O(r);mn(t.remoteStore)||N(gn,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await(function(o){const c=O(o);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(u=>c.mutationQueue.getHighestUnacknowledgedBatchId(u)))})(t.localStore);if(n===nn)return void e.resolve();const i=t.Vu.get(n)||[];i.push(e),t.Vu.set(n,i)}catch(n){const i=Xr(n,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Fu(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function Uu(r,e,t){const n=O(r);let i=n.Ru[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ru[n.currentUser.toKey()]=i}}function Lr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Tu.get(e))r.Pu.delete(n),t&&r.hu.pu(n,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((n=>{r.Au.containsKey(n)||gg(r,n)}))}function gg(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Mr(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Bu(r))}function xc(r,e,t){for(const n of t)n instanceof hg?(r.Au.addReference(n.key,e),TA(r,n)):n instanceof dg?(N(gn,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,e),r.Au.containsKey(n.key)||gg(r,n.key)):F(19791,{yu:n})}function TA(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Iu.has(n)||(N(gn,"New document in limbo: "+t),r.Iu.add(n),Bu(r))}function Bu(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new x(H.fromString(e)),n=r.mu.next();r.Eu.set(n,new lA(t)),r.du=r.du.insert(t,n),oa(r.remoteStore,new Et(Le(Gr(t.path)),n,"TargetPurposeLimboResolution",$e.ue))}}async function xt(r,e,t){const n=O(r),i=[],s=[],o=[];n.Pu.isEmpty()||(n.Pu.forEach(((c,u)=>{o.push(n.gu(u,e,t).then((h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Au.Es(u.targetId,h);s.push(p)}})))})),await Promise.all(o),n.hu.J_(i),await(async function(u,h){const f=O(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>A.forEach(h,(g=>A.forEach(g.Is,(v=>f.persistence.referenceDelegate.addReference(p,g.targetId,v))).next((()=>A.forEach(g.ds,(v=>f.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))))))}catch(p){if(!fn(p))throw p;N(bu,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const v=f.Fs.get(g),C=v.snapshotVersion,D=v.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(g,D)}}})(n.localStore,s))}async function vA(r,e){const t=O(r);if(!t.currentUser.isEqual(e)){N(gn,"User change. New user:",e.toKey());const n=await Km(t.localStore,e);t.currentUser=e,(function(s,o){s.Vu.forEach((c=>{c.forEach((u=>{u.reject(new V(R.CANCELLED,o))}))})),s.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await xt(t,n.Bs)}}function wA(r,e){const t=O(r),n=t.Eu.get(e);if(n&&n.lu)return W().add(n.key);{let i=W();const s=t.Tu.get(e);if(!s)return i;for(const o of s){const c=t.Pu.get(o);i=i.unionWith(c.view.tu)}return i}}async function AA(r,e){const t=O(r),n=await No(t.localStore,e.query,!0),i=e.view.uu(n);return t.isPrimaryClient&&xc(t,e.targetId,i._u),i}async function bA(r,e){const t=O(r);return Jm(t.localStore,e).then((n=>xt(t,n)))}async function RA(r,e,t,n){const i=O(r),s=await(function(c,u){const h=O(c),f=O(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",(p=>f.Xn(p,u).next((g=>g?h.localDocuments.getDocuments(p,g):A.resolve(null)))))})(i.localStore,e);s!==null?(t==="pending"?await Qr(i.remoteStore):t==="acknowledged"||t==="rejected"?(Uu(i,e,n||null),Fu(i,e),(function(c,u){O(O(c).mutationQueue).rr(u)})(i.localStore,e)):F(6720,"Unknown batchState",{wu:t}),await xt(i,s)):N(gn,"Cannot apply mutation batch with id: "+e)}async function SA(r,e){const t=O(r);if(aa(t),qu(t),e===!0&&t.fu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await Wd(t,n.toArray());t.fu=!0,await kc(t.remoteStore,!0);for(const s of i)oa(t.remoteStore,s)}else if(e===!1&&t.fu!==!1){const n=[];let i=Promise.resolve();t.Tu.forEach(((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then((()=>(Lr(t,o),Or(t.localStore,o,!0)))),Mr(t.remoteStore,o)})),await i,await Wd(t,n),(function(o){const c=O(o);c.Eu.forEach(((u,h)=>{Mr(c.remoteStore,h)})),c.Au.jr(),c.Eu=new Map,c.du=new ce(x.comparator)})(t),t.fu=!1,await kc(t.remoteStore,!1)}}async function Wd(r,e,t){const n=O(r),i=[],s=[];for(const o of e){let c;const u=n.Tu.get(o);if(u&&u.length!==0){c=await xr(n.localStore,Le(u[0]));for(const h of u){const f=n.Pu.get(h),p=await AA(n,f);p.snapshot&&s.push(p.snapshot)}}else{const h=await Qm(n.localStore,o);c=await xr(n.localStore,h),await Lu(n,_g(h),o,!1,c.resumeToken)}i.push(c)}return n.hu.J_(s),i}function _g(r){return Jp(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function PA(r){return(function(t){return O(O(t).persistence).Ps()})(O(r).localStore)}async function CA(r,e,t,n){const i=O(r);if(i.fu)return void N(gn,"Ignoring unexpected query state notification.");const s=i.Tu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await Jm(i.localStore,em(s[0])),c=ps.createSynthesizedRemoteEventForCurrentChange(e,t==="current",me.EMPTY_BYTE_STRING);await xt(i,o,c);break}case"rejected":await Or(i.localStore,e,!0),Lr(i,e,n);break;default:F(64155,t)}}async function VA(r,e,t){const n=aa(r);if(n.fu){for(const i of e){if(n.Tu.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){N(gn,"Adding an already active target "+i);continue}const s=await Qm(n.localStore,i),o=await xr(n.localStore,s);await Lu(n,_g(s),o.targetId,!1,o.resumeToken),oa(n.remoteStore,o)}for(const i of t)n.Tu.has(i)&&await Or(n.localStore,i,!1).then((()=>{Mr(n.remoteStore,i),Lr(n,i)})).catch(dn)}}function aa(r){const e=O(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=mg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_A.bind(null,e),e.hu.J_=aA.bind(null,e.eventManager),e.hu.pu=cA.bind(null,e.eventManager),e}function qu(r){const e=O(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IA.bind(null,e),e}function DA(r,e,t){const n=O(r);(async function(s,o,c){try{const u=await o.getMetadata();if(await(function(v,C){const D=O(v),k=ye(C.createTime);return D.persistence.runTransaction("hasNewerBundle","readonly",(L=>D.Ti.getBundleMetadata(L,C.id))).then((L=>!!L&&L.createTime.compareTo(k)>=0))})(s.localStore,u))return await o.close(),c._completeWith((function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}})(u)),Promise.resolve(new Set);c._updateProgress(lg(u));const h=new Mu(u,o.serializer);let f=await o.Su();for(;f;){const g=await h.Wa(f);g&&c._updateProgress(g),f=await o.Su()}const p=await h.za(s.localStore);return await xt(s,p.Ja,void 0),await(function(v,C){const D=O(v);return D.persistence.runTransaction("Save bundle","readwrite",(k=>D.Ti.saveBundleMetadata(k,C)))})(s.localStore,u),c._completeWith(p.progress),Promise.resolve(p.ja)}catch(u){return Fe(gn,`Loading bundle failed with ${u}`),c._failWith(u),Promise.resolve(new Set)}})(n,e,t).then((i=>{n.sharedClientState.notifyBundleLoaded(i)}))}class Fr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qn(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Gm(this.persistence,new zm,e.initialUser,this.serializer)}Du(e){return new Tu(sa.Vi,this.serializer)}bu(e){return new tg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fr.provider={build:()=>new Fr};class ju extends Fr{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){q(this.persistence.referenceDelegate instanceof ko,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Fm(n,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new Tu((n=>ko.Vi(n,t)),this.serializer)}}class $u extends Fr{constructor(e,t,n){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await qu(this.Mu.syncEngine),await Qr(this.Mu.remoteStore),await this.persistence.ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return Gm(this.persistence,new zm,e.initialUser,this.serializer)}Cu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Fm(n,e.asyncQueue,t)}Fu(e,t){const n=new GT(t,this.persistence);return new zT(e.asyncQueue,n)}Du(e){const t=wu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new vu(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,ng(),lo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new tg}}class yg extends $u{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Mu.syncEngine;this.sharedClientState instanceof Ya&&(this.sharedClientState.syncEngine={Do:RA.bind(null,t),vo:CA.bind(null,t),Co:VA.bind(null,t),Ps:PA.bind(null,t),bo:bA.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji((async n=>{await SA(this.Mu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}bu(e){const t=ng();if(!Ya.C(t))throw new V(R.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=wu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ya(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ln{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Kd(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=vA.bind(null,this.syncEngine),await kc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new oA})()}createDatastore(e){const t=Qn(e.databaseInfo.databaseId),n=(function(s){return new jw(s)})(e.databaseInfo);return(function(s,o,c,u){return new Kw(s,o,c,u)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,i,s,o,c){return new Hw(n,i,s,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Kd(this.syncEngine,t,0)),(function(){return Ud.C()?new Ud:new Fw})())}createSyncEngine(e,t){return(function(i,s,o,c,u,h,f){const p=new hA(i,s,o,c,u,h);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=O(i);N(Gn,"RemoteStore shutting down."),s.Ia.add(5),await Hr(s),s.Ea.shutdown(),s.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ln.provider={build:()=>new ln};function Hd(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class ca{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):_e("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class kA{constructor(e,t){this.Nu=e,this.serializer=t,this.metadata=new Re,this.buffer=new Uint8Array,this.Bu=(function(){return new TextDecoder("utf-8")})(),this.Lu().then((n=>{n&&n.Qa()?this.metadata.resolve(n.qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.qa)}`))}),(n=>this.metadata.reject(n)))}close(){return this.Nu.cancel()}async getMetadata(){return this.metadata.promise}async Su(){return await this.getMetadata(),this.Lu()}async Lu(){const e=await this.ku();if(e===null)return null;const t=this.Bu.decode(e),n=Number(t);isNaN(n)&&this.qu(`length string (${t}) is not valid number`);const i=await this.Qu(n);return new ug(JSON.parse(i),e.length+n)}$u(){return this.buffer.findIndex((e=>e===123))}async ku(){for(;this.$u()<0&&!await this.Uu(););if(this.buffer.length===0)return null;const e=this.$u();e<0&&this.qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Qu(e){for(;this.buffer.length<e;)await this.Uu()&&this.qu("Reached the end of bundle when more is expected.");const t=this.Bu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}qu(e){throw this.Nu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Uu(){const e=await this.Nu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class NA{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let n=this.Su();if(!n||!n.Qa())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(n==null?void 0:n.qa)}`);this.metadata=n;do n=this.Su(),n!==null&&this.elements.push(n);while(n!==null)}getMetadata(){return this.metadata}Ku(){return this.elements}Su(){if(this.cursor===this.bundleData.length)return null;const e=this.ku(),t=this.Qu(e);return new ug(JSON.parse(t),e)}Qu(e){if(this.cursor+e>this.bundleData.length)throw new V(R.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}ku(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
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
 */class xA{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new V(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(i,s){const o=O(i),c={documents:s.map((p=>Yi(o.serializer,p)))},u=await o.Jo("BatchGetDocuments",o.serializer.databaseId,H.emptyPath(),c,s.length),h=new Map;u.forEach((p=>{const g=Jv(o.serializer,p);h.set(g.key.toString(),g)}));const f=[];return s.forEach((p=>{const g=h.get(p.toString());q(!!g,55234,{key:p}),f.push(g)})),f})(this.datastore,e);return t.forEach((n=>this.recordVersion(n))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Wr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,n)=>{const i=x.fromPath(n);this.mutations.push(new du(i,this.precondition(i)))})),await(async function(n,i){const s=O(n),o={writes:i.map((c=>Zi(s.serializer,c)))};await s.Wo("Commit",s.serializer.databaseId,H.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw F(50498,{Wu:e.constructor.name});t=j.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new V(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(j.min())?fe.exists(!1):fe.updateTime(t):fe.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(j.min()))throw new V(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return fe.updateTime(t)}return fe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class OA{constructor(e,t,n,i,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=i,this.deferred=s,this.Gu=n.maxAttempts,this.F_=new Su(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_((async()=>{const e=new xA(this.datastore),t=this.Ju(e);t&&t.then((n=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(n)})).catch((i=>{this.Hu(i)}))))})).catch((n=>{this.Hu(n)}))}))}Ju(e){try{const t=this.updateFunction(e);return!cs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget((()=>(this.ju(),Promise.resolve())))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!pm(t)}return!1}}/**
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
 */const hn="FirestoreClient";class MA{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=$o.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(async o=>{N(hn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(N(hn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Xr(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function ec(r,e){r.asyncQueue.verifyOperationInProgress(),N(hn,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await Km(e.localStore,i),n=i)})),e.persistence.setDatabaseDeletedListener((()=>{Fe("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{N("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Fe("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),r._offlineComponents=e}async function Qd(r,e){r.asyncQueue.verifyOperationInProgress();const t=await zu(r);N(hn,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>qd(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>qd(e.remoteStore,i))),r._onlineComponents=e}async function zu(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(hn,"Using user provided OfflineComponentProvider");try{await ec(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Fe("Error using user provided cache. Falling back to memory cache: "+t),await ec(r,new Fr)}}else N(hn,"Using default OfflineComponentProvider"),await ec(r,new ju(void 0));return r._offlineComponents}async function ua(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(hn,"Using user provided OnlineComponentProvider"),await Qd(r,r._uninitializedComponentsProvider._online)):(N(hn,"Using default OnlineComponentProvider"),await Qd(r,new ln))),r._onlineComponents}function Ig(r){return zu(r).then((e=>e.persistence))}function Yr(r){return zu(r).then((e=>e.localStore))}function Eg(r){return ua(r).then((e=>e.remoteStore))}function Gu(r){return ua(r).then((e=>e.syncEngine))}function Tg(r){return ua(r).then((e=>e.datastore))}async function Ur(r){const e=await ua(r),t=e.eventManager;return t.onListen=dA.bind(null,e.syncEngine),t.onUnlisten=pA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mA.bind(null,e.syncEngine),t}function LA(r){return r.asyncQueue.enqueue((async()=>{const e=await Ig(r),t=await Eg(r);return e.setNetworkEnabled(!0),(function(i){const s=O(i);return s.Ia.delete(0),gs(s)})(t)}))}function FA(r){return r.asyncQueue.enqueue((async()=>{const e=await Ig(r),t=await Eg(r);return e.setNetworkEnabled(!1),(async function(i){const s=O(i);s.Ia.add(0),await Hr(s),s.Aa.set("Offline")})(t)}))}function UA(r,e){const t=new Re;return r.asyncQueue.enqueueAndForget((async()=>(async function(i,s,o){try{const c=await(function(h,f){const p=O(h);return p.persistence.runTransaction("read document","readonly",(g=>p.localDocuments.getDocument(g,f)))})(i,s);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new V(R.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const u=Xr(c,`Failed to get document '${s} from cache`);o.reject(u)}})(await Yr(r),e,t))),t.promise}function vg(r,e,t={}){const n=new Re;return r.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,u,h){const f=new ca({next:g=>{f.Ou(),o.enqueueAndForget((()=>Nu(s,p)));const v=g.docs.has(c);!v&&g.fromCache?h.reject(new V(R.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&u&&u.source==="server"?h.reject(new V(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Ou(Gr(c.path),f,{includeMetadataChanges:!0,ka:!0});return ku(s,p)})(await Ur(r),r.asyncQueue,e,t,n))),n.promise}function BA(r,e){const t=new Re;return r.asyncQueue.enqueueAndForget((async()=>(async function(i,s,o){try{const c=await No(i,s,!0),u=new fg(s,c.qs),h=u.nu(c.documents),f=u.applyChanges(h,!1);o.resolve(f.snapshot)}catch(c){const u=Xr(c,`Failed to execute query '${s} against cache`);o.reject(u)}})(await Yr(r),e,t))),t.promise}function wg(r,e,t={}){const n=new Re;return r.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,u,h){const f=new ca({next:g=>{f.Ou(),o.enqueueAndForget((()=>Nu(s,p))),g.fromCache&&u.source==="server"?h.reject(new V(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Ou(c,f,{includeMetadataChanges:!0,ka:!0});return ku(s,p)})(await Ur(r),r.asyncQueue,e,t,n))),n.promise}function qA(r,e,t){const n=new Re;return r.asyncQueue.enqueueAndForget((async()=>{try{const i=await Tg(r);n.resolve((async function(o,c,u){var h;const f=O(o),{request:p,ft:g,parent:v}=Am(f.serializer,Xp(c),u);f.connection.Qo||delete p.parent;const C=(await f.Jo("RunAggregationQuery",f.serializer.databaseId,v,p,1)).filter((k=>!!k.result));q(C.length===1,64727);const D=(h=C[0].result)===null||h===void 0?void 0:h.aggregateFields;return Object.keys(D).reduce(((k,L)=>(k[g[L]]=D[L],k)),{})})(i,e,t))}catch(i){n.reject(i)}})),n.promise}function jA(r,e){const t=new ca(e);return r.asyncQueue.enqueueAndForget((async()=>(function(i,s){O(i).Da.add(s),s.next()})(await Ur(r),t))),()=>{t.Ou(),r.asyncQueue.enqueueAndForget((async()=>(function(i,s){O(i).Da.delete(s)})(await Ur(r),t)))}}function $A(r,e,t,n){const i=(function(o,c){let u;return u=typeof o=="string"?Yc().encode(o):o,(function(f,p){return new kA(f,p)})((function(f,p){if(f instanceof Uint8Array)return Hd(f,p);if(f instanceof ArrayBuffer)return Hd(new Uint8Array(f),p);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(u),c)})(t,Qn(e));r.asyncQueue.enqueueAndForget((async()=>{DA(await Gu(r),i,n)}))}function zA(r,e){return r.asyncQueue.enqueue((async()=>(function(n,i){const s=O(n);return s.persistence.runTransaction("Get named query","readonly",(o=>s.Ti.getNamedQuery(o,i)))})(await Yr(r),e)))}function Ag(r,e){return(function(n,i){return new NA(n,i)})(r,e)}function GA(r,e){return r.asyncQueue.enqueue((async()=>(async function(n,i){const s=O(n),o=s.indexManager,c=[];return s.persistence.runTransaction("Configure indexes","readwrite",(u=>o.getFieldIndexes(u).next((h=>(function(p,g,v,C,D){p=[...p],g=[...g],p.sort(v),g.sort(v);const k=p.length,L=g.length;let B=0,U=0;for(;B<L&&U<k;){const K=v(p[U],g[B]);K<0?D(p[U++]):K>0?C(g[B++]):(B++,U++)}for(;B<L;)C(g[B++]);for(;U<k;)D(p[U++])})(h,i,BT,(f=>{c.push(o.addFieldIndex(u,f))}),(f=>{c.push(o.deleteFieldIndex(u,f))})))).next((()=>A.waitFor(c)))))})(await Yr(r),e)))}function KA(r,e){return r.asyncQueue.enqueue((async()=>(function(n,i){O(n).Cs.Rs=i})(await Yr(r),e)))}function WA(r){return r.asyncQueue.enqueue((async()=>(function(t){const n=O(t),i=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",(s=>i.deleteAllFieldIndexes(s)))})(await Yr(r))))}/**
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
 */function bg(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Jd=new Map;/**
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
 */const Rg="firestore.googleapis.com",Xd=!0;class Yd{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rg,this.ssl=Xd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Xd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Lm)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bg((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _s{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new hp;switch(n.type){case"firstParty":return new xT(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Jd.get(t);n&&(N("ComponentProvider","Removing Datastore"),Jd.delete(t),n.terminate())})(this),Promise.resolve()}}function Sg(r,e,t,n={}){var i;r=Q(r,_s);const s=Wn(e),o=r._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:r._getEmulatorOptions()}),u=`${e}:${t}`;s&&(Lc(`https://${u}`),pf("Firestore",!0)),o.host!==Rg&&o.host!==u&&Fe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:n});if(!st(h,c)&&(r._setSettings(h),n.mockUserToken)){let f,p;if(typeof n.mockUserToken=="string")f=n.mockUserToken,p=be.MOCK_USER;else{f=$_(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const g=n.mockUserToken.sub||n.mockUserToken.user_id;if(!g)throw new V(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new be(g)}r._authCredentials=new DT(new lp(f,p))}}/**
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
 */class ve{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ve(this.firestore,e,this._query)}}class ie{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ie(this.firestore,e,this._key)}toJSON(){return{type:ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Hn(t,ie._jsonSchema))return new ie(e,n||null,new x(H.fromString(t.referencePath)))}}ie._jsonSchemaVersion="firestore/documentReference/1.0",ie._jsonSchema={type:Ee("string",ie._jsonSchemaVersion),referencePath:Ee("string")};class rt extends ve{constructor(e,t,n){super(e,t,Gr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ie(this.firestore,null,new x(e))}withConverter(e){return new rt(this.firestore,e,this._path)}}function HA(r,e,...t){if(r=ne(r),Zc("collection","path",e),r instanceof _s){const n=H.fromString(e,...t);return Bh(n),new rt(r,null,n)}{if(!(r instanceof ie||r instanceof rt))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(e,...t));return Bh(n),new rt(r.firestore,null,n)}}function QA(r,e){if(r=Q(r,_s),Zc("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ve(r,null,(function(n){return new Dt(H.emptyPath(),n)})(e))}function Pg(r,e,...t){if(r=ne(r),arguments.length===1&&(e=$o.newId()),Zc("doc","path",e),r instanceof _s){const n=H.fromString(e,...t);return Uh(n),new ie(r,null,new x(n))}{if(!(r instanceof ie||r instanceof rt))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(e,...t));return Uh(n),new ie(r.firestore,r instanceof rt?r.converter:null,new x(n))}}function JA(r,e){return r=ne(r),e=ne(e),(r instanceof ie||r instanceof rt)&&(e instanceof ie||e instanceof rt)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function Ku(r,e){return r=ne(r),e=ne(e),r instanceof ve&&e instanceof ve&&r.firestore===e.firestore&&hs(r._query,e._query)&&r.converter===e.converter}/**
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
 */const Zd="AsyncQueue";class ef{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Su(this,"async_queue_retry"),this.oc=()=>{const n=lo();n&&N(Zd,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=e;const t=lo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=lo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Re;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!fn(e))throw e;N(Zd,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((n=>{throw this.tc=n,this.nc=!1,_e("INTERNAL UNHANDLED ERROR: ",tf(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Du.createAndSchedule(this,e,t,n,(s=>this.lc(s)));return this.ec.push(i),i}ac(){this.tc&&F(47125,{hc:tf(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function tf(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function _r(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1})(r,["next","error","complete"])}class Cg{constructor(){this._progressObserver={},this._taskCompletionResolver=new Re,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const XA=-1;class oe extends _s{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new ef,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ef(e),this._firestoreClient=void 0,await e}}}function YA(r,e,t){t||(t=Hi);const n=is(r,"firestore");if(n.isInitialized(t)){const i=n.getImmediate({identifier:t}),s=n.getOptions(t);if(st(s,e))return i;throw new V(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new V(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Lm)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Wn(e.host)&&Lc(e.host),n.initialize({options:e,instanceIdentifier:t})}function ZA(r,e){const t=typeof r=="object"?r:Tf(),n=typeof r=="string"?r:e||Hi,i=is(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=q_("firestore");s&&Sg(i,...s)}return i}function pe(r){if(r._terminated)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Vg(r),r._firestoreClient}function Vg(r){var e,t,n;const i=r._freezeSettings(),s=(function(c,u,h,f){return new Ev(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,bg(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new MA(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(r._componentsProvider))}function eb(r,e){Fe("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return Dg(r,ln.provider,{build:n=>new $u(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function tb(r){Fe("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();Dg(r,ln.provider,{build:t=>new yg(t,e.cacheSizeBytes)})}function Dg(r,e,t){if((r=Q(r,oe))._firestoreClient||r._terminated)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new V(R.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},Vg(r)}function nb(r){if(r._initialized&&!r._terminated)throw new V(R.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Re;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(n){if(!ht.C())return Promise.resolve();const i=n+$m;await ht.delete(i)})(wu(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function rb(r){return(function(t){const n=new Re;return t.asyncQueue.enqueueAndForget((async()=>EA(await Gu(t),n))),n.promise})(pe(r=Q(r,oe)))}function ib(r){return LA(pe(r=Q(r,oe)))}function sb(r){return FA(pe(r=Q(r,oe)))}function ob(r){return tI(r.app,"firestore",r._databaseId.database),r._delete()}function Oc(r,e){const t=pe(r=Q(r,oe)),n=new Cg;return $A(t,r._databaseId,e,n),n}function kg(r,e){return zA(pe(r=Q(r,oe)),e).then((t=>t?new ve(r,null,t.query):null))}/**
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
 */class Br{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class Ng{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new je(me.fromBase64String(e))}catch(t){throw new V(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new je(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hn(e,je._jsonSchema))return je.fromBase64String(e.bytes)}}je._jsonSchemaVersion="firestore/bytes/1.0",je._jsonSchema={type:Ee("string",je._jsonSchemaVersion),bytes:Ee("string")};/**
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
 */class _n{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function ab(){return new _n(hc)}/**
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
 */class yn{constructor(e){this._methodName=e}}/**
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
 */class it{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:it._jsonSchemaVersion}}static fromJSON(e){if(Hn(e,it._jsonSchema))return new it(e.latitude,e.longitude)}}it._jsonSchemaVersion="firestore/geoPoint/1.0",it._jsonSchema={type:Ee("string",it._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
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
 */class Ye{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ye._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hn(e,Ye._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ye(e.vectorValues);throw new V(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ye._jsonSchemaVersion="firestore/vectorValue/1.0",Ye._jsonSchema={type:Ee("string",Ye._jsonSchemaVersion),vectorValues:Ee("object")};/**
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
 */const cb=/^__.*__$/;class ub{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Nt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Kr(e,this.data,t,this.fieldTransforms)}}class xg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Nt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Og(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ec:r})}}class la{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new la(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.fc(e),i}gc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Lo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Og(this.Ec)&&cb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class lb{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Qn(e)}Dc(e,t,n,i=!1){return new la({Ec:e,methodName:t,bc:n,path:he.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jn(r){const e=r._freezeSettings(),t=Qn(r._databaseId);return new lb(r._databaseId,!!e.ignoreUndefinedProperties,t)}function ha(r,e,t,n,i,s={}){const o=r.Dc(s.merge||s.mergeFields?2:0,e,t,i);Zu("Data must be an object, but it was:",o,n);const c=Fg(n,o);let u,h;if(s.merge)u=new ze(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=es(e,p,t);if(!o.contains(g))throw new V(R.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Bg(f,g)||f.push(g)}u=new ze(f),h=o.fieldTransforms.filter((p=>u.covers(p.field)))}else u=null,h=o.fieldTransforms;return new ub(new Ce(c),u,h)}class ys extends yn{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ys}}function Mg(r,e,t){return new la({Ec:3,bc:e.settings.bc,methodName:r._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Wu extends yn{_toFieldTransform(e){return new fs(e.path,new Dr)}isEqual(e){return e instanceof Wu}}class Hu extends yn{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Mg(this,e,!0),n=this.vc.map((s=>Xn(s,t))),i=new Bn(n);return new fs(e.path,i)}isEqual(e){return e instanceof Hu&&st(this.vc,e.vc)}}class Qu extends yn{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Mg(this,e,!0),n=this.vc.map((s=>Xn(s,t))),i=new qn(n);return new fs(e.path,i)}isEqual(e){return e instanceof Qu&&st(this.vc,e.vc)}}class Ju extends yn{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new kr(e.serializer,om(e.serializer,this.Cc));return new fs(e.path,t)}isEqual(e){return e instanceof Ju&&this.Cc===e.Cc}}function Xu(r,e,t,n){const i=r.Dc(1,e,t);Zu("Data must be an object, but it was:",i,n);const s=[],o=Ce.empty();pn(n,((u,h)=>{const f=da(e,u,t);h=ne(h);const p=i.gc(f);if(h instanceof ys)s.push(f);else{const g=Xn(h,p);g!=null&&(s.push(f),o.set(f,g))}}));const c=new ze(s);return new xg(o,c,i.fieldTransforms)}function Yu(r,e,t,n,i,s){const o=r.Dc(1,e,t),c=[es(e,n,t)],u=[i];if(s.length%2!=0)throw new V(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)c.push(es(e,s[g])),u.push(s[g+1]);const h=[],f=Ce.empty();for(let g=c.length-1;g>=0;--g)if(!Bg(h,c[g])){const v=c[g];let C=u[g];C=ne(C);const D=o.gc(v);if(C instanceof ys)h.push(v);else{const k=Xn(C,D);k!=null&&(h.push(v),f.set(v,k))}}const p=new ze(h);return new xg(f,p,o.fieldTransforms)}function Lg(r,e,t,n=!1){return Xn(t,r.Dc(n?4:3,e))}function Xn(r,e){if(Ug(r=ne(r)))return Zu("Unsupported field value:",e,r),Fg(r,e);if(r instanceof yn)return(function(n,i){if(!Og(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(n,i){const s=[];let o=0;for(const c of n){let u=Xn(c,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}})(r,e)}return(function(n,i){if((n=ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return om(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=te.fromDate(n);return{timestampValue:Nr(i.serializer,s)}}if(n instanceof te){const s=new te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Nr(i.serializer,s)}}if(n instanceof it)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof je)return{bytesValue:ym(i.serializer,n._byteString)};if(n instanceof ie){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:_u(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Ye)return(function(o,c){return{mapValue:{fields:{[ou]:{stringValue:au},[Pr]:{arrayValue:{values:o.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return hu(c.serializer,h)}))}}}}}})(n,i);throw i.wc(`Unsupported field value: ${zo(n)}`)})(r,e)}function Fg(r,e){const t={};return Np(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pn(r,((n,i)=>{const s=Xn(i,e.Vc(n));s!=null&&(t[n]=s)})),{mapValue:{fields:t}}}function Ug(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof te||r instanceof it||r instanceof je||r instanceof ie||r instanceof yn||r instanceof Ye)}function Zu(r,e,t){if(!Ug(t)||!pp(t)){const n=zo(t);throw n==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+n)}}function es(r,e,t){if((e=ne(e))instanceof _n)return e._internalPath;if(typeof e=="string")return da(r,e);throw Lo("Field path arguments must be of type string or ",r,!1,void 0,t)}const hb=new RegExp("[~\\*/\\[\\]]");function da(r,e,t){if(e.search(hb)>=0)throw Lo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new _n(...e.split("."))._internalPath}catch{throw Lo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Lo(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${n}`),o&&(u+=` in document ${i}`),u+=")"),new V(R.INVALID_ARGUMENT,c+r+u)}function Bg(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class ts{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new db(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class db extends ts{data(){return super.data()}}function fa(r,e){return typeof e=="string"?da(r,e):e instanceof _n?e._internalPath:e._delegate._internalPath}/**
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
 */function qg(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new V(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class el{}class Zr extends el{}function fb(r,e,...t){let n=[];e instanceof el&&n.push(e),n=n.concat(t),(function(s){const o=s.filter((u=>u instanceof Yn)).length,c=s.filter((u=>u instanceof ei)).length;if(o>1||o>0&&c>0)throw new V(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const i of n)r=i._apply(r);return r}class ei extends Zr{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new ei(e,t,n)}_apply(e){const t=this._parse(e);return $g(e._query,t),new ve(e.firestore,e.converter,vc(e._query,t))}_parse(e){const t=Jn(e.firestore);return(function(s,o,c,u,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){rf(p,f);const C=[];for(const D of p)C.push(nf(u,s,D));g={arrayValue:{values:C}}}else g=nf(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||rf(p,f),g=Lg(c,o,p,f==="in"||f==="not-in");return X.create(h,f,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function pb(r,e,t){const n=e,i=fa("where",r);return ei._create(i,n,t)}class Yn extends el{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Yn(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:re.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)$g(o,u),o=vc(o,u)})(e._query,t),new ve(e.firestore,e.converter,vc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function mb(...r){return r.forEach((e=>zg("or",e))),Yn._create("or",r)}function gb(...r){return r.forEach((e=>zg("and",e))),Yn._create("and",r)}class pa extends Zr{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new pa(e,t)}_apply(e){const t=(function(i,s,o){if(i.startAt!==null)throw new V(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xi(s,o)})(e._query,this._field,this._direction);return new ve(e.firestore,e.converter,(function(i,s){const o=i.explicitOrderBy.concat([s]);return new Dt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function _b(r,e="asc"){const t=e,n=fa("orderBy",r);return pa._create(n,t)}class Is extends Zr{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Is(e,t,n)}_apply(e){return new ve(e.firestore,e.converter,So(e._query,this._limit,this._limitType))}}function yb(r){return mp("limit",r),Is._create("limit",r,"F")}function Ib(r){return mp("limitToLast",r),Is._create("limitToLast",r,"L")}class Es extends Zr{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Es(e,t,n)}_apply(e){const t=jg(e,this.type,this._docOrFields,this._inclusive);return new ve(e.firestore,e.converter,(function(i,s){return new Dt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)})(e._query,t))}}function Eb(...r){return Es._create("startAt",r,!0)}function Tb(...r){return Es._create("startAfter",r,!1)}class Ts extends Zr{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Ts(e,t,n)}_apply(e){const t=jg(e,this.type,this._docOrFields,this._inclusive);return new ve(e.firestore,e.converter,(function(i,s){return new Dt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)})(e._query,t))}}function vb(...r){return Ts._create("endBefore",r,!1)}function wb(...r){return Ts._create("endAt",r,!0)}function jg(r,e,t,n){if(t[0]=ne(t[0]),t[0]instanceof ts)return(function(s,o,c,u,h){if(!u)throw new V(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const f=[];for(const p of gr(s))if(p.field.isKeyField())f.push(Fn(o,u.key));else{const g=u.data.field(p.field);if(Qo(g))throw new V(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const v=p.field.canonicalString();throw new V(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}f.push(g)}return new cn(f,h)})(r._query,r.firestore._databaseId,e,t[0]._document,n);{const i=Jn(r.firestore);return(function(o,c,u,h,f,p){const g=o.explicitOrderBy;if(f.length>g.length)throw new V(R.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let C=0;C<f.length;C++){const D=f[C];if(g[C].field.isKeyField()){if(typeof D!="string")throw new V(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof D}`);if(!uu(o)&&D.indexOf("/")!==-1)throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${D}' contains a slash.`);const k=o.path.child(H.fromString(D));if(!x.isDocumentKey(k))throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const L=new x(k);v.push(Fn(c,L))}else{const k=Lg(u,h,D);v.push(k)}}return new cn(v,p)})(r._query,r.firestore._databaseId,i,e,t,n)}}function nf(r,e,t){if(typeof(t=ne(t))=="string"){if(t==="")throw new V(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uu(e)&&t.indexOf("/")!==-1)throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(H.fromString(t));if(!x.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Fn(r,new x(n))}if(t instanceof ie)return Fn(r,t._key);throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zo(t)}.`)}function rf(r,e){if(!Array.isArray(r)||r.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $g(r,e){const t=(function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null})(r.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new V(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function zg(r,e){if(!(e instanceof ei||e instanceof Yn))throw new V(R.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class tl{convertValue(e,t="none"){switch(on(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(St(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return pn(e,((i,s)=>{n[i]=this.convertValue(s,t)})),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t[Pr].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map((o=>de(o.doubleValue)));return new Ye(s)}convertGeoPoint(e){return new it(de(e.latitude),de(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Jo(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Wi(e));default:return null}}convertTimestamp(e){const t=Rt(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=H.fromString(e);q(Pm(n),9688,{name:e});const i=new sn(n.get(1),n.get(3)),s=new x(n.popFirst(5));return i.isEqual(t)||_e(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function ma(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class nl extends tl{constructor(e){super(),this.firestore=e}convertBytes(e){return new je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ie(this.firestore,null,t)}}/**
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
 */function Ab(r){return new Br("sum",es("sum",r))}function bb(r){return new Br("avg",es("average",r))}function Gg(){return new Br("count")}function Rb(r,e){var t,n;return r instanceof Br&&e instanceof Br&&r.aggregateType===e.aggregateType&&((t=r._internalFieldPath)===null||t===void 0?void 0:t.canonicalString())===((n=e._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())}function Sb(r,e){return Ku(r.query,e.query)&&st(r.data(),e.data())}/**
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
 *//**
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
 */const Kg="NOT SUPPORTED";class Tt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ke extends ts{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(fa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ke._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function Pb(r,e,t){if(Hn(e,Ke._jsonSchema)){if(e.bundle===Kg)throw new V(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Qn(r._databaseId),i=Ag(e.bundle,n),s=i.Ku(),o=new Mu(i.getMetadata(),n);for(const f of s)o.Wa(f);const c=o.documents;if(c.length!==1)throw new V(R.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${c.length} documents.`);const u=ea(n,c[0].document),h=new x(H.fromString(e.bundleName));return new Ke(r,new nl(r),h,u,new Tt(!1,!1),t||null)}}Ke._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ke._jsonSchema={type:Ee("string",Ke._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class Bi extends Ke{data(e={}){return super.data(e)}}class We{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Tt(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Bi(this._firestore,this._userDataWriter,n.key,n,new Tt(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((c=>{const u=new Bi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Tt(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>s||c.type!==3)).map((c=>{const u=new Bi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Tt(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:Vb(c.type),doc:u,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=We._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$o.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Cb(r,e,t){if(Hn(e,We._jsonSchema)){if(e.bundle===Kg)throw new V(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Qn(r._databaseId),i=Ag(e.bundle,n),s=i.Ku(),o=new Mu(i.getMetadata(),n);for(const g of s)o.Wa(g);if(o.queries.length!==1)throw new V(R.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const c=na(o.queries[0].bundledQuery),u=o.documents;let h=new On;u.map((g=>{const v=ea(n,g.document);h=h.add(v)}));const f=Kn.fromInitialDocuments(c,h,W(),!1,!1),p=new ve(r,t||null,c);return new We(r,new nl(r),p,f)}}function Vb(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:r})}}function Db(r,e){return r instanceof Ke&&e instanceof Ke?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof We&&e instanceof We&&r._firestore===e._firestore&&Ku(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
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
 */function kb(r){r=Q(r,ie);const e=Q(r.firestore,oe);return vg(pe(e),r._key).then((t=>rl(e,r,t)))}We._jsonSchemaVersion="firestore/querySnapshot/1.0",We._jsonSchema={type:Ee("string",We._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class In extends tl{constructor(e){super(),this.firestore=e}convertBytes(e){return new je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ie(this.firestore,null,t)}}function Nb(r){r=Q(r,ie);const e=Q(r.firestore,oe),t=pe(e),n=new In(e);return UA(t,r._key).then((i=>new Ke(e,n,r._key,i,new Tt(i!==null&&i.hasLocalMutations,!0),r.converter)))}function xb(r){r=Q(r,ie);const e=Q(r.firestore,oe);return vg(pe(e),r._key,{source:"server"}).then((t=>rl(e,r,t)))}function Ob(r){r=Q(r,ve);const e=Q(r.firestore,oe),t=pe(e),n=new In(e);return qg(r._query),wg(t,r._query).then((i=>new We(e,n,r,i)))}function Mb(r){r=Q(r,ve);const e=Q(r.firestore,oe),t=pe(e),n=new In(e);return BA(t,r._query).then((i=>new We(e,n,r,i)))}function Lb(r){r=Q(r,ve);const e=Q(r.firestore,oe),t=pe(e),n=new In(e);return wg(t,r._query,{source:"server"}).then((i=>new We(e,n,r,i)))}function Fb(r,e,t){r=Q(r,ie);const n=Q(r.firestore,oe),i=ma(r.converter,e,t);return ti(n,[ha(Jn(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,fe.none())])}function Ub(r,e,t,...n){r=Q(r,ie);const i=Q(r.firestore,oe),s=Jn(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof _n?Yu(s,"updateDoc",r._key,e,t,n):Xu(s,"updateDoc",r._key,e),ti(i,[o.toMutation(r._key,fe.exists(!0))])}function Bb(r){return ti(Q(r.firestore,oe),[new Wr(r._key,fe.none())])}function qb(r,e){const t=Q(r.firestore,oe),n=Pg(r),i=ma(r.converter,e);return ti(t,[ha(Jn(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,fe.exists(!1))]).then((()=>n))}function Mc(r,...e){var t,n,i;r=ne(r);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||_r(e[o])||(s=e[o++]);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(_r(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(r instanceof ie)h=Q(r.firestore,oe),f=Gr(r._key.path),u={next:p=>{e[o]&&e[o](rl(h,r,p))},error:e[o+1],complete:e[o+2]};else{const p=Q(r,ve);h=Q(p.firestore,oe),f=p._query;const g=new In(h);u={next:v=>{e[o]&&e[o](new We(h,g,p,v))},error:e[o+1],complete:e[o+2]},qg(r._query)}return(function(g,v,C,D){const k=new ca(D),L=new Ou(v,k,C);return g.asyncQueue.enqueueAndForget((async()=>ku(await Ur(g),L))),()=>{k.Ou(),g.asyncQueue.enqueueAndForget((async()=>Nu(await Ur(g),L)))}})(pe(h),f,c,u)}function jb(r,e,...t){const n=ne(r),i=(function(u){const h={bundle:"",bundleName:"",bundleSource:""},f=["bundle","bundleName","bundleSource"];for(const p of f){if(!(p in u)){h.error=`snapshotJson missing required field: ${p}`;break}const g=u[p];if(typeof g!="string"){h.error=`snapshotJson field '${p}' must be a string.`;break}if(g.length===0){h.error=`snapshotJson field '${p}' cannot be an empty string.`;break}p==="bundle"?h.bundle=g:p==="bundleName"?h.bundleName=g:p==="bundleSource"&&(h.bundleSource=g)}return h})(e);if(i.error)throw new V(R.INVALID_ARGUMENT,i.error);let s,o=0;if(typeof t[o]!="object"||_r(t[o])||(s=t[o++]),i.bundleSource==="QuerySnapshot"){let c=null;if(typeof t[o]=="object"&&_r(t[o])){const u=t[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:t[o++],error:t[o++],complete:t[o++]};return(function(h,f,p,g,v){let C,D=!1;return Oc(h,f.bundle).then((()=>kg(h,f.bundleName))).then((L=>{L&&!D&&(v&&L.withConverter(v),C=Mc(L,p||{},g))})).catch((L=>(g.error&&g.error(L),()=>{}))),()=>{D||(D=!0,C&&C())}})(n,i,s,c,t[o])}if(i.bundleSource==="DocumentSnapshot"){let c=null;if(typeof t[o]=="object"&&_r(t[o])){const u=t[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:t[o++],error:t[o++],complete:t[o++]};return(function(h,f,p,g,v){let C,D=!1;return Oc(h,f.bundle).then((()=>{if(!D){const L=new ie(h,v||null,x.fromPath(f.bundleName));C=Mc(L,p||{},g)}})).catch((L=>(g.error&&g.error(L),()=>{}))),()=>{D||(D=!0,C&&C())}})(n,i,s,c,t[o])}throw new V(R.INVALID_ARGUMENT,`unsupported bundle source: ${i.bundleSource}`)}function $b(r,e){return jA(pe(r=Q(r,oe)),_r(e)?e:{next:e})}function ti(r,e){return(function(n,i){const s=new Re;return n.asyncQueue.enqueueAndForget((async()=>gA(await Gu(n),i,s))),s.promise})(pe(r),e)}function rl(r,e,t){const n=t.docs.get(e._key),i=new In(r);return new Ke(r,i,e._key,n,new Tt(t.hasPendingWrites,t.fromCache),e.converter)}function zb(r){return Wg(r,{count:Gg()})}function Wg(r,e){const t=Q(r.firestore,oe),n=pe(t),i=kp(e,((s,o)=>new fm(o,s.aggregateType,s._internalFieldPath)));return qA(n,r._query,i).then((s=>(function(c,u,h){const f=new In(c);return new Ng(u,f,h)})(t,r,s)))}class Gb{constructor(e){this.kind="memory",this._onlineComponentProvider=ln.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new ju(void 0)}}toJSON(){return{kind:this.kind}}}class Kb{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Hg(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class Wb{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Fr.provider}toJSON(){return{kind:this.kind}}}class Hb{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new ju(e)}}toJSON(){return{kind:this.kind}}}function Qb(){return new Wb}function Jb(r){return new Hb(r==null?void 0:r.cacheSizeBytes)}function Xb(r){return new Gb(r)}function Yb(r){return new Kb(r)}class Zb{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ln.provider,this._offlineComponentProvider={build:t=>new $u(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class eR{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ln.provider,this._offlineComponentProvider={build:t=>new yg(t,e==null?void 0:e.cacheSizeBytes)}}}function Hg(r){return new Zb(r==null?void 0:r.forceOwnership)}function tR(){return new eR}/**
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
 */const nR={maxAttempts:5};/**
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
 */class Qg{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Jn(e)}set(e,t,n){this._verifyNotCommitted();const i=Xt(e,this._firestore),s=ma(i.converter,t,n),o=ha(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(o.toMutation(i._key,fe.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=Xt(e,this._firestore);let o;return o=typeof(t=ne(t))=="string"||t instanceof _n?Yu(this._dataReader,"WriteBatch.update",s._key,t,n,i):Xu(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,fe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Xt(e,this._firestore);return this._mutations=this._mutations.concat(new Wr(t._key,fe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new V(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Xt(r,e){if((r=ne(r)).firestore!==e)throw new V(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class rR{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Jn(e)}get(e){const t=Xt(e,this._firestore),n=new nl(this._firestore);return this._transaction.lookup([t._key]).then((i=>{if(!i||i.length!==1)return F(24041);const s=i[0];if(s.isFoundDocument())return new ts(this._firestore,n,s.key,s,t.converter);if(s.isNoDocument())return new ts(this._firestore,n,t._key,null,t.converter);throw F(18433,{doc:s})}))}set(e,t,n){const i=Xt(e,this._firestore),s=ma(i.converter,t,n),o=ha(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,n);return this._transaction.set(i._key,o),this}update(e,t,n,...i){const s=Xt(e,this._firestore);let o;return o=typeof(t=ne(t))=="string"||t instanceof _n?Yu(this._dataReader,"Transaction.update",s._key,t,n,i):Xu(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=Xt(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */class Jg extends rR{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Xt(e,this._firestore),n=new In(this._firestore);return super.get(e).then((i=>new Ke(this._firestore,n,t._key,i._document,new Tt(!1,!1),t.converter)))}}function iR(r,e,t){r=Q(r,oe);const n=Object.assign(Object.assign({},nR),t);return(function(s){if(s.maxAttempts<1)throw new V(R.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n),(function(s,o,c){const u=new Re;return s.asyncQueue.enqueueAndForget((async()=>{const h=await Tg(s);new OA(s.asyncQueue,h,c,o,u).zu()})),u.promise})(pe(r),(i=>e(new Jg(r,i))),n)}/**
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
 */function sR(){return new ys("deleteField")}function oR(){return new Wu("serverTimestamp")}function aR(...r){return new Hu("arrayUnion",r)}function cR(...r){return new Qu("arrayRemove",r)}function uR(r){return new Ju("increment",r)}function lR(r){return new Ye(r)}/**
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
 */function hR(r){return pe(r=Q(r,oe)),new Qg(r,(e=>ti(r,e)))}/**
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
 */function dR(r,e){const t=pe(r=Q(r,oe));if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return Fe("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=(function(s){const o=typeof s=="string"?(function(h){try{return JSON.parse(h)}catch(f){throw new V(R.INVALID_ARGUMENT,"Failed to parse JSON: "+(f==null?void 0:f.message))}})(s):s,c=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const h=sf(u,"collectionGroup"),f=[];if(Array.isArray(u.fields))for(const p of u.fields){const g=da("setIndexConfiguration",sf(p,"fieldPath"));p.arrayConfig==="CONTAINS"?f.push(new Nn(g,2)):p.order==="ASCENDING"?f.push(new Nn(g,0)):p.order==="DESCENDING"&&f.push(new Nn(g,1))}c.push(new vr(vr.UNKNOWN_ID,h,f,wr.empty()))}return c})(e);return GA(t,n)}function sf(r,e){if(typeof r[e]!="string")throw new V(R.INVALID_ARGUMENT,"Missing string value for: "+e);return r[e]}/**
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
 */class Xg{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function fR(r){var e;r=Q(r,oe);const t=of.get(r);if(t)return t;if(((e=pe(r)._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offline.kind)!=="persistent")return null;const n=new Xg(r);return of.set(r,n),n}function pR(r){Yg(r,!0)}function mR(r){Yg(r,!1)}function gR(r){WA(pe(r._firestore)).then((e=>N("deleting all persistent cache indexes succeeded"))).catch((e=>Fe("deleting all persistent cache indexes failed",e)))}function Yg(r,e){KA(pe(r._firestore),e).then((t=>N(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((t=>Fe(`setting persistent cache index auto creation isEnabled=${e} failed`,t)))}const of=new WeakMap;/**
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
 */function _R(r){var e;const t=(e=pe(Q(r.firestore,oe))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return t===void 0?null:ta(t,Le(r._query)).Vt}function yR(r,e){var t;const n=kp(e,((s,o)=>new fm(o,s.aggregateType,s._internalFieldPath))),i=(t=pe(Q(r.firestore,oe))._onlineComponents)===null||t===void 0?void 0:t.datastore.serializer;return i===void 0?null:Am(i,Xp(r._query),n,!0).request}/**
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
 */class IR{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return il.instance.onExistenceFilterMismatch(e)}}class il{constructor(){this.Fc=new Map}static get instance(){return Qs||(Qs=new il,(function(t){if(Po)throw new Error("a TestingHooksSpi instance is already set");Po=t})(Qs)),Qs}ct(e){this.Fc.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.Fc;return n.set(t,e),()=>n.delete(t)}}let Qs=null;(function(e,t=!0){(function(i){zr=i})(qr),yr(new Mn("firestore",((n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),c=new oe(new kT(n.getProvider("auth-internal")),new OT(o,n.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new V(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(h.options.projectId,f)})(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c}),"PUBLIC").setMultipleInstances(!0)),en(Mh,Lh,e),en(Mh,Lh,"esm2017")})();const VR=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:tl,AggregateField:Br,AggregateQuerySnapshot:Ng,Bytes:je,CACHE_SIZE_UNLIMITED:XA,CollectionReference:rt,DocumentReference:ie,DocumentSnapshot:Ke,FieldPath:_n,FieldValue:yn,Firestore:oe,FirestoreError:V,GeoPoint:it,LoadBundleTask:Cg,PersistentCacheIndexManager:Xg,Query:ve,QueryCompositeFilterConstraint:Yn,QueryConstraint:Zr,QueryDocumentSnapshot:Bi,QueryEndAtConstraint:Ts,QueryFieldFilterConstraint:ei,QueryLimitConstraint:Is,QueryOrderByConstraint:pa,QuerySnapshot:We,QueryStartAtConstraint:Es,SnapshotMetadata:Tt,Timestamp:te,Transaction:Jg,VectorValue:Ye,WriteBatch:Qg,_AutoId:$o,_ByteString:me,_DatabaseId:sn,_DocumentKey:x,_EmptyAppCheckTokenProvider:MT,_EmptyAuthCredentialsProvider:hp,_FieldPath:he,_TestingHooks:IR,_cast:Q,_debugAssert:VT,_internalAggregationQueryToProtoRunAggregationQueryRequest:yR,_internalQueryToProtoQueryTarget:_R,_isBase64Available:yv,_logWarn:Fe,_validateIsNotUsedTogether:fp,addDoc:qb,aggregateFieldEqual:Rb,aggregateQuerySnapshotEqual:Sb,and:gb,arrayRemove:cR,arrayUnion:aR,average:bb,clearIndexedDbPersistence:nb,collection:HA,collectionGroup:QA,connectFirestoreEmulator:Sg,count:Gg,deleteAllPersistentCacheIndexes:gR,deleteDoc:Bb,deleteField:sR,disableNetwork:sb,disablePersistentCacheIndexAutoCreation:mR,doc:Pg,documentId:ab,documentSnapshotFromJSON:Pb,enableIndexedDbPersistence:eb,enableMultiTabIndexedDbPersistence:tb,enableNetwork:ib,enablePersistentCacheIndexAutoCreation:pR,endAt:wb,endBefore:vb,ensureFirestoreConfigured:pe,executeWrite:ti,getAggregateFromServer:Wg,getCountFromServer:zb,getDoc:kb,getDocFromCache:Nb,getDocFromServer:xb,getDocs:Ob,getDocsFromCache:Mb,getDocsFromServer:Lb,getFirestore:ZA,getPersistentCacheIndexManager:fR,increment:uR,initializeFirestore:YA,limit:yb,limitToLast:Ib,loadBundle:Oc,memoryEagerGarbageCollector:Qb,memoryLocalCache:Xb,memoryLruGarbageCollector:Jb,namedQuery:kg,onSnapshot:Mc,onSnapshotResume:jb,onSnapshotsInSync:$b,or:mb,orderBy:_b,persistentLocalCache:Yb,persistentMultipleTabManager:tR,persistentSingleTabManager:Hg,query:fb,queryEqual:Ku,querySnapshotFromJSON:Cb,refEqual:JA,runTransaction:iR,serverTimestamp:oR,setDoc:Fb,setIndexConfiguration:dR,setLogLevel:CT,snapshotEqual:Db,startAfter:Tb,startAt:Eb,sum:Ab,terminate:ob,updateDoc:Ub,vector:lR,waitForPendingWrites:rb,where:pb,writeBatch:hR},Symbol.toStringTag,{value:"Module"}));export{HA as A,pb as B,Mn as C,Ob as D,Fb as E,Pt as F,zt as G,qb as H,Bb as I,VR as J,Ys as O,qr as S,yr as _,qe as a,is as b,q_ as c,Tf as d,$_ as e,iI as f,ne as g,PR as h,Wn as i,ZA as j,SR as k,RR as l,TR as m,wR as n,vR as o,Lc as p,ER as q,en as r,bR as s,Pg as t,pf as u,Ub as v,oR as w,AR as x,Mc as y,fb as z};
//# sourceMappingURL=firebase-core-DEm61vaB.js.map
