var D={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=React,z=Symbol.for("react.element"),B=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,J=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function T(t,e,r){var n,u={},o=null,s=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)W.call(e,n)&&!Y.hasOwnProperty(n)&&(u[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)u[n]===void 0&&(u[n]=e[n]);return{$$typeof:z,type:t,key:o,ref:s,props:u,_owner:J.current}}h.Fragment=B;h.jsx=T;h.jsxs=T;D.exports=h;var E=D.exports,_={},P=ReactDOM;_.createRoot=P.createRoot,_.hydrateRoot=P.hydrateRoot;function g(t){return t!=null&&typeof t=="object"&&t["@@functional/placeholder"]===!0}function y(t){return function e(r){return arguments.length===0||g(r)?e:t.apply(this,arguments)}}function G(t){return function e(r,n){switch(arguments.length){case 0:return e;case 1:return g(r)?e:y(function(u){return t(r,u)});default:return g(r)&&g(n)?e:g(r)?y(function(u){return t(u,n)}):g(n)?y(function(u){return t(r,u)}):t(r,n)}}}function q(t){for(var e=[],r;!(r=t.next()).done;)e.push(r.value);return e}function A(t,e,r){for(var n=0,u=r.length;n<u;){if(t(e,r[n]))return!0;n+=1}return!1}function H(t){var e=String(t).match(/^function (\w*)/);return e==null?"":e[1]}function m(t,e){return Object.prototype.hasOwnProperty.call(e,t)}function K(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}const v=typeof Object.is=="function"?Object.is:K;var S=Object.prototype.toString,Q=function(){return S.call(arguments)==="[object Arguments]"?function(e){return S.call(e)==="[object Arguments]"}:function(e){return m("callee",e)}}(),V=!{toString:null}.propertyIsEnumerable("toString"),j=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],C=function(){return arguments.propertyIsEnumerable("length")}(),X=function(e,r){for(var n=0;n<e.length;){if(e[n]===r)return!0;n+=1}return!1},N=y(typeof Object.keys=="function"&&!C?function(e){return Object(e)!==e?[]:Object.keys(e)}:function(e){if(Object(e)!==e)return[];var r,n,u=[],o=C&&Q(e);for(r in e)m(r,e)&&(!o||r!=="length")&&(u[u.length]=r);if(V)for(n=j.length-1;n>=0;)r=j[n],m(r,e)&&!X(u,r)&&(u[u.length]=r),n-=1;return u}),k=y(function(e){return e===null?"Null":e===void 0?"Undefined":Object.prototype.toString.call(e).slice(8,-1)});function U(t,e,r,n){var u=q(t),o=q(e);function s(c,a){return R(c,a,r.slice(),n.slice())}return!A(function(c,a){return!A(s,a,c)},o,u)}function R(t,e,r,n){if(v(t,e))return!0;var u=k(t);if(u!==k(e))return!1;if(typeof t["fantasy-land/equals"]=="function"||typeof e["fantasy-land/equals"]=="function")return typeof t["fantasy-land/equals"]=="function"&&t["fantasy-land/equals"](e)&&typeof e["fantasy-land/equals"]=="function"&&e["fantasy-land/equals"](t);if(typeof t.equals=="function"||typeof e.equals=="function")return typeof t.equals=="function"&&t.equals(e)&&typeof e.equals=="function"&&e.equals(t);switch(u){case"Arguments":case"Array":case"Object":if(typeof t.constructor=="function"&&H(t.constructor)==="Promise")return t===e;break;case"Boolean":case"Number":case"String":if(!(typeof t==typeof e&&v(t.valueOf(),e.valueOf())))return!1;break;case"Date":if(!v(t.valueOf(),e.valueOf()))return!1;break;case"Error":return t.name===e.name&&t.message===e.message;case"RegExp":if(!(t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline&&t.sticky===e.sticky&&t.unicode===e.unicode))return!1;break}for(var o=r.length-1;o>=0;){if(r[o]===t)return n[o]===e;o-=1}switch(u){case"Map":return t.size!==e.size?!1:U(t.entries(),e.entries(),r.concat([t]),n.concat([e]));case"Set":return t.size!==e.size?!1:U(t.values(),e.values(),r.concat([t]),n.concat([e]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var s=N(t);if(s.length!==N(e).length)return!1;var c=r.concat([t]),a=n.concat([e]);for(o=s.length-1;o>=0;){var i=s[o];if(!(m(i,e)&&R(e[i],t[i],c,a)))return!1;o-=1}return!0}var Z=G(function(e,r){return R(e,r,[],[])});const b=Z,L=new Map;function ee(t){return L.get(t)}const w=new Map;function te(t,e){var r;L.set(t,e),(r=w.get(t))==null||r.forEach(n=>n(e))}function re(t,e){const r=w.get(t);return r?r.add(e):w.set(t,new Set([e])),()=>{r==null||r.delete(e)}}function oe(t){for(const e in t)te(e,t[e])}function ne(t){const[e,r]=t;return e==="react"&&typeof r=="function"}const F=React.createContext(null);function se(...t){const e=React.useRef(t);e.current.some((o,s)=>o!==t[s])&&(e.current=t);const[r,n]=React.useState({}),{get:u}=React.useContext(F)??{get:()=>Promise.reject()};return React.useEffect(()=>{const o=e.current;let s=!0;async function c(){const a=await Promise.all(o.map(f=>u(f)));if(!s)return;const i=a.reduce((f,l,p)=>(f[o[p]]=l,f),{});n(i)}return c(),()=>{s=!1}},[u,e.current]),r}function ce(t,e,r,n){if(typeof r=="string"){if(!n)throw new Error("render is required");const o=[r,n];if(ne(o)){const[s,c]=o;return Object.assign((i,f)=>class extends f.Widget.Widget{constructor(){super();const l=document.createElement("div");l.traverseNextNode=()=>null,this.element.appendChild(l);const p=new Map;_.createRoot(l).render(E.jsx(F.Provider,{value:{async get(d){if(p.has(d))return p.get(d);const O=await i.simport(d);return p.set(d,O),O}},children:E.jsx(c,{UI:f,devtoolsWindow:i,onTraverseNextNode:d=>(l.traverseNextNode=d,()=>l.traverseNextNode=()=>null)})}))}},{id:t,type:s,title:e})}throw new Error("render must be a function")}const u=r;return u.id=t,u.title=e,u}const x=[];function M(t,e,r,n){var u;if(!n)return(u=x.find(([o,s])=>o===t&&s===e))==null?void 0:u[3];x.push([t,e,r,n])}function ue(t,e,r){return x.some(([n,u,o])=>n===t&&u===e&&o===r)}const I=Symbol("configure-update");function ae(t){return typeof t=="object"&&t!==null&&I in t}function ie(t,e){let r,n;function u(o,s){if(!e)throw new Error("The second argument is required");const c=e==null?void 0:e(s);return n=s,c[I]=a=>(r=a,()=>r=void 0),M(o,s,e,c),c}if(typeof t=="string"){if(!e)throw new Error("The second argument is required");const o=t,s=ee(o);return ue(o,s,e)?M(o,s,e):(re(o,c=>{b(n,c)||r==null||r(u(o,c))}),u(o,s))}return t}function fe(t){return t}export{g as _,fe as a,ce as b,_ as c,ie as d,G as e,y as f,ee as g,m as h,ae as i,E as j,I as o,oe as r,se as u};
