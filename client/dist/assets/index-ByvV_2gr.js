function Zg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qf={exports:{}},bs={},Jf={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),e0=Symbol.for("react.portal"),t0=Symbol.for("react.fragment"),n0=Symbol.for("react.strict_mode"),r0=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),i0=Symbol.for("react.context"),s0=Symbol.for("react.forward_ref"),l0=Symbol.for("react.suspense"),a0=Symbol.for("react.memo"),u0=Symbol.for("react.lazy"),Tc=Symbol.iterator;function c0(e){return e===null||typeof e!="object"?null:(e=Tc&&e[Tc]||e["@@iterator"],typeof e=="function"?e:null)}var Gf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xf=Object.assign,Zf={};function Tr(e,t,n){this.props=e,this.context=t,this.refs=Zf,this.updater=n||Gf}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ep(){}ep.prototype=Tr.prototype;function pu(e,t,n){this.props=e,this.context=t,this.refs=Zf,this.updater=n||Gf}var hu=pu.prototype=new ep;hu.constructor=pu;Xf(hu,Tr.prototype);hu.isPureReactComponent=!0;var Pc=Array.isArray,tp=Object.prototype.hasOwnProperty,mu={current:null},np={key:!0,ref:!0,__self:!0,__source:!0};function rp(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)tp.call(t,r)&&!np.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ao,type:e,key:i,ref:s,props:o,_owner:mu.current}}function d0(e,t){return{$$typeof:Ao,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ao}function f0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jc=/\/+/g;function il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f0(""+e.key):t.toString(36)}function xi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ao:case e0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+il(s,0):r,Pc(o)?(n="",e!=null&&(n=e.replace(jc,"$&/")+"/"),xi(o,t,n,"",function(u){return u})):o!=null&&(gu(o)&&(o=d0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(jc,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Pc(e))for(var l=0;l<e.length;l++){i=e[l];var a=r+il(i,l);s+=xi(i,t,n,a,o)}else if(a=c0(e),typeof a=="function")for(e=a.call(e),l=0;!(i=e.next()).done;)i=i.value,a=r+il(i,l++),s+=xi(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function qo(e,t,n){if(e==null)return e;var r=[],o=0;return xi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function p0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Si={transition:null},h0={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Si,ReactCurrentOwner:mu};function op(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:qo,forEach:function(e,t,n){qo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qo(e,function(){t++}),t},toArray:function(e){return qo(e,function(t){return t})||[]},only:function(e){if(!gu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Tr;q.Fragment=t0;q.Profiler=r0;q.PureComponent=pu;q.StrictMode=n0;q.Suspense=l0;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h0;q.act=op;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xf({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=mu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)tp.call(t,a)&&!np.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ao,type:e.type,key:o,ref:i,props:r,_owner:s}};q.createContext=function(e){return e={$$typeof:i0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o0,_context:e},e.Consumer=e};q.createElement=rp;q.createFactory=function(e){var t=rp.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:s0,render:e}};q.isValidElement=gu;q.lazy=function(e){return{$$typeof:u0,_payload:{_status:-1,_result:e},_init:p0}};q.memo=function(e,t){return{$$typeof:a0,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Si.transition;Si.transition={};try{e()}finally{Si.transition=t}};q.unstable_act=op;q.useCallback=function(e,t){return De.current.useCallback(e,t)};q.useContext=function(e){return De.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return De.current.useDeferredValue(e)};q.useEffect=function(e,t){return De.current.useEffect(e,t)};q.useId=function(){return De.current.useId()};q.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return De.current.useMemo(e,t)};q.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};q.useRef=function(e){return De.current.useRef(e)};q.useState=function(e){return De.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return De.current.useTransition()};q.version="18.3.1";Jf.exports=q;var S=Jf.exports;const He=Rr(S),m0=Zg({__proto__:null,default:He},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0=S,y0=Symbol.for("react.element"),v0=Symbol.for("react.fragment"),w0=Object.prototype.hasOwnProperty,x0=g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S0={key:!0,ref:!0,__self:!0,__source:!0};function ip(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)w0.call(t,r)&&!S0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:y0,type:e,key:i,ref:s,props:o,_owner:x0.current}}bs.Fragment=v0;bs.jsx=ip;bs.jsxs=ip;Qf.exports=bs;var f=Qf.exports,ql={},sp={exports:{}},et={},lp={exports:{}},ap={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,T){var j=C.length;C.push(T);e:for(;0<j;){var I=j-1>>>1,M=C[I];if(0<o(M,T))C[I]=T,C[j]=M,j=I;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var T=C[0],j=C.pop();if(j!==T){C[0]=j;e:for(var I=0,M=C.length,ee=M>>>1;I<ee;){var X=2*(I+1)-1,de=C[X],he=X+1,be=C[he];if(0>o(de,j))he<M&&0>o(be,de)?(C[I]=be,C[he]=j,I=he):(C[I]=de,C[X]=j,I=X);else if(he<M&&0>o(be,j))C[I]=be,C[he]=j,I=he;else break e}}return T}function o(C,T){var j=C.sortIndex-T.sortIndex;return j!==0?j:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],c=1,d=null,p=3,v=!1,y=!1,w=!1,$=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=C)r(u),T.sortIndex=T.expirationTime,t(a,T);else break;T=n(u)}}function E(C){if(w=!1,g(C),!y)if(n(a)!==null)y=!0,N(R);else{var T=n(u);T!==null&&z(E,T.startTime-C)}}function R(C,T){y=!1,w&&(w=!1,h(L),L=-1),v=!0;var j=p;try{for(g(T),d=n(a);d!==null&&(!(d.expirationTime>T)||C&&!U());){var I=d.callback;if(typeof I=="function"){d.callback=null,p=d.priorityLevel;var M=I(d.expirationTime<=T);T=e.unstable_now(),typeof M=="function"?d.callback=M:d===n(a)&&r(a),g(T)}else r(a);d=n(a)}if(d!==null)var ee=!0;else{var X=n(u);X!==null&&z(E,X.startTime-T),ee=!1}return ee}finally{d=null,p=j,v=!1}}var _=!1,O=null,L=-1,K=5,B=-1;function U(){return!(e.unstable_now()-B<K)}function Be(){if(O!==null){var C=e.unstable_now();B=C;var T=!0;try{T=O(!0,C)}finally{T?nt():(_=!1,O=null)}}else _=!1}var nt;if(typeof m=="function")nt=function(){m(Be)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,A=F.port2;F.port1.onmessage=Be,nt=function(){A.postMessage(null)}}else nt=function(){$(Be,0)};function N(C){O=C,_||(_=!0,nt())}function z(C,T){L=$(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,N(R))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var j=p;p=T;try{return C()}finally{p=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var j=p;p=C;try{return T()}finally{p=j}},e.unstable_scheduleCallback=function(C,T,j){var I=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?I+j:I):j=I,C){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=j+M,C={id:c++,callback:T,priorityLevel:C,startTime:j,expirationTime:M,sortIndex:-1},j>I?(C.sortIndex=j,t(u,C),n(a)===null&&C===n(u)&&(w?(h(L),L=-1):w=!0,z(E,j-I))):(C.sortIndex=M,t(a,C),y||v||(y=!0,N(R))),C},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(C){var T=p;return function(){var j=p;p=T;try{return C.apply(this,arguments)}finally{p=j}}}})(ap);lp.exports=ap;var k0=lp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0=S,Ze=k0;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var up=new Set,po={};function Fn(e,t){yr(e,t),yr(e+"Capture",t)}function yr(e,t){for(po[e]=t,e=0;e<t.length;e++)up.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,C0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nc={},Lc={};function b0(e){return Yl.call(Lc,e)?!0:Yl.call(Nc,e)?!1:C0.test(e)?Lc[e]=!0:(Nc[e]=!0,!1)}function $0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _0(e,t,n,r){if(t===null||typeof t>"u"||$0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var yu=/[\-:]([a-z])/g;function vu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yu,vu);Oe[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yu,vu);Oe[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yu,vu);Oe[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function wu(e,t,n,r){var o=Oe.hasOwnProperty(t)?Oe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_0(t,n,o,r)&&(n=null),r||o===null?b0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),xu=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),cp=Symbol.for("react.provider"),dp=Symbol.for("react.context"),Su=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),ku=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),fp=Symbol.for("react.offscreen"),Ac=Symbol.iterator;function Fr(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,sl;function Jr(e){if(sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sl=t&&t[1]||""}return`
`+sl+e}var ll=!1;function al(e,t){if(!e||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function O0(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Jn:return"Portal";case Kl:return"Profiler";case xu:return"StrictMode";case Ql:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dp:return(e.displayName||"Context")+".Consumer";case cp:return(e._context.displayName||"Context")+".Provider";case Su:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ku:return t=e.displayName||null,t!==null?t:Gl(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return Gl(e(t))}catch{}}return null}function R0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gl(t);case 8:return t===xu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T0(e){var t=pp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ko(e){e._valueTracker||(e._valueTracker=T0(e))}function hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Dc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mp(e,t){t=t.checked,t!=null&&wu(e,"checked",t,!1)}function Zl(e,t){mp(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ea(e,t.type,n):t.hasOwnProperty("defaultValue")&&ea(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ea(e,t,n){(t!=="number"||Vi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gr=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ta(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Gr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function gp(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ic(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function na(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qo,vp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ho(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P0=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(e){P0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),no[t]=no[e]})});function wp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||no.hasOwnProperty(e)&&no[e]?(""+t).trim():t+"px"}function xp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=wp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var j0=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ra(e,t){if(t){if(j0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function oa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ia=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,dr=null,fr=null;function Fc(e){if(e=Bo(e)){if(typeof sa!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Ts(t),sa(e.stateNode,e.type,t))}}function Sp(e){dr?fr?fr.push(e):fr=[e]:dr=e}function kp(){if(dr){var e=dr,t=fr;if(fr=dr=null,Fc(e),t)for(e=0;e<t.length;e++)Fc(t[e])}}function Ep(e,t){return e(t)}function Cp(){}var ul=!1;function bp(e,t,n){if(ul)return e(t,n);ul=!0;try{return Ep(e,t,n)}finally{ul=!1,(dr!==null||fr!==null)&&(Cp(),kp())}}function mo(e,t){var n=e.stateNode;if(n===null)return null;var r=Ts(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var la=!1;if(Ft)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){la=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{la=!1}function N0(e,t,n,r,o,i,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ro=!1,qi=null,Yi=!1,aa=null,L0={onError:function(e){ro=!0,qi=e}};function A0(e,t,n,r,o,i,s,l,a){ro=!1,qi=null,N0.apply(L0,arguments)}function D0(e,t,n,r,o,i,s,l,a){if(A0.apply(this,arguments),ro){if(ro){var u=qi;ro=!1,qi=null}else throw Error(P(198));Yi||(Yi=!0,aa=u)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mc(e){if(Mn(e)!==e)throw Error(P(188))}function z0(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Mc(o),e;if(i===r)return Mc(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function _p(e){return e=z0(e),e!==null?Op(e):null}function Op(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Op(e);if(t!==null)return t;e=e.sibling}return null}var Rp=Ze.unstable_scheduleCallback,Uc=Ze.unstable_cancelCallback,B0=Ze.unstable_shouldYield,I0=Ze.unstable_requestPaint,fe=Ze.unstable_now,F0=Ze.unstable_getCurrentPriorityLevel,Cu=Ze.unstable_ImmediatePriority,Tp=Ze.unstable_UserBlockingPriority,Ki=Ze.unstable_NormalPriority,M0=Ze.unstable_LowPriority,Pp=Ze.unstable_IdlePriority,$s=null,Rt=null;function U0(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot($s,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:V0,H0=Math.log,W0=Math.LN2;function V0(e){return e>>>=0,e===0?32:31-(H0(e)/W0|0)|0}var Jo=64,Go=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Xr(l):(i&=s,i!==0&&(r=Xr(i)))}else s=n&~o,s!==0?r=Xr(s):i!==0&&(r=Xr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),o=1<<n,r|=e[n],t&=~o;return r}function q0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-vt(i),l=1<<s,a=o[s];a===-1?(!(l&n)||l&r)&&(o[s]=q0(l,t)):a<=t&&(e.expiredLanes|=l),i&=~l}}function ua(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jp(){var e=Jo;return Jo<<=1,!(Jo&4194240)&&(Jo=64),e}function cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Do(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function K0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-vt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function bu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function Np(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lp,$u,Ap,Dp,zp,ca=!1,Xo=[],on=null,sn=null,ln=null,go=new Map,yo=new Map,Xt=[],Q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hc(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(t.pointerId)}}function Ur(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Bo(t),t!==null&&$u(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function J0(e,t,n,r,o){switch(t){case"focusin":return on=Ur(on,e,t,n,r,o),!0;case"dragenter":return sn=Ur(sn,e,t,n,r,o),!0;case"mouseover":return ln=Ur(ln,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return go.set(i,Ur(go.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,yo.set(i,Ur(yo.get(i)||null,e,t,n,r,o)),!0}return!1}function Bp(e){var t=Cn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=$p(n),t!==null){e.blockedOn=t,zp(e.priority,function(){Ap(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=da(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ia=r,n.target.dispatchEvent(r),ia=null}else return t=Bo(n),t!==null&&$u(t),e.blockedOn=n,!1;t.shift()}return!0}function Wc(e,t,n){ki(e)&&n.delete(t)}function G0(){ca=!1,on!==null&&ki(on)&&(on=null),sn!==null&&ki(sn)&&(sn=null),ln!==null&&ki(ln)&&(ln=null),go.forEach(Wc),yo.forEach(Wc)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,ca||(ca=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,G0)))}function vo(e){function t(o){return Hr(o,e)}if(0<Xo.length){Hr(Xo[0],e);for(var n=1;n<Xo.length;n++){var r=Xo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Hr(on,e),sn!==null&&Hr(sn,e),ln!==null&&Hr(ln,e),go.forEach(t),yo.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)Bp(n),n.blockedOn===null&&Xt.shift()}var pr=Vt.ReactCurrentBatchConfig,Ji=!0;function X0(e,t,n,r){var o=G,i=pr.transition;pr.transition=null;try{G=1,_u(e,t,n,r)}finally{G=o,pr.transition=i}}function Z0(e,t,n,r){var o=G,i=pr.transition;pr.transition=null;try{G=4,_u(e,t,n,r)}finally{G=o,pr.transition=i}}function _u(e,t,n,r){if(Ji){var o=da(e,t,n,r);if(o===null)xl(e,t,r,Gi,n),Hc(e,r);else if(J0(o,e,t,n,r))r.stopPropagation();else if(Hc(e,r),t&4&&-1<Q0.indexOf(e)){for(;o!==null;){var i=Bo(o);if(i!==null&&Lp(i),i=da(e,t,n,r),i===null&&xl(e,t,r,Gi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else xl(e,t,r,null,n)}}var Gi=null;function da(e,t,n,r){if(Gi=null,e=Eu(r),e=Cn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function Ip(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F0()){case Cu:return 1;case Tp:return 4;case Ki:case M0:return 16;case Pp:return 536870912;default:return 16}default:return 16}}var tn=null,Ou=null,Ei=null;function Fp(){if(Ei)return Ei;var e,t=Ou,n=t.length,r,o="value"in tn?tn.value:tn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Ei=o.slice(e,1<r?1-r:void 0)}function Ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function Vc(){return!1}function tt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zo:Vc,this.isPropagationStopped=Vc,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),t}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ru=tt(Pr),zo=ue({},Pr,{view:0,detail:0}),ey=tt(zo),dl,fl,Wr,_s=ue({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(dl=e.screenX-Wr.screenX,fl=e.screenY-Wr.screenY):fl=dl=0,Wr=e),dl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),qc=tt(_s),ty=ue({},_s,{dataTransfer:0}),ny=tt(ty),ry=ue({},zo,{relatedTarget:0}),pl=tt(ry),oy=ue({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),iy=tt(oy),sy=ue({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ly=tt(sy),ay=ue({},Pr,{data:0}),Yc=tt(ay),uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dy[e])?!!t[e]:!1}function Tu(){return fy}var py=ue({},zo,{key:function(e){if(e.key){var t=uy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?Ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hy=tt(py),my=ue({},_s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=tt(my),gy=ue({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),yy=tt(gy),vy=ue({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wy=tt(vy),xy=ue({},_s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=tt(xy),ky=[9,13,27,32],Pu=Ft&&"CompositionEvent"in window,oo=null;Ft&&"documentMode"in document&&(oo=document.documentMode);var Ey=Ft&&"TextEvent"in window&&!oo,Mp=Ft&&(!Pu||oo&&8<oo&&11>=oo),Qc=" ",Jc=!1;function Up(e,t){switch(e){case"keyup":return ky.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function Cy(e,t){switch(e){case"compositionend":return Hp(t);case"keypress":return t.which!==32?null:(Jc=!0,Qc);case"textInput":return e=t.data,e===Qc&&Jc?null:e;default:return null}}function by(e,t){if(Xn)return e==="compositionend"||!Pu&&Up(e,t)?(e=Fp(),Ei=Ou=tn=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mp&&t.locale!=="ko"?null:t.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$y[e.type]:t==="textarea"}function Wp(e,t,n,r){Sp(r),t=Xi(t,"onChange"),0<t.length&&(n=new Ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var io=null,wo=null;function _y(e){th(e,0)}function Os(e){var t=tr(e);if(hp(t))return e}function Oy(e,t){if(e==="change")return t}var Vp=!1;if(Ft){var hl;if(Ft){var ml="oninput"in document;if(!ml){var Xc=document.createElement("div");Xc.setAttribute("oninput","return;"),ml=typeof Xc.oninput=="function"}hl=ml}else hl=!1;Vp=hl&&(!document.documentMode||9<document.documentMode)}function Zc(){io&&(io.detachEvent("onpropertychange",qp),wo=io=null)}function qp(e){if(e.propertyName==="value"&&Os(wo)){var t=[];Wp(t,wo,e,Eu(e)),bp(_y,t)}}function Ry(e,t,n){e==="focusin"?(Zc(),io=t,wo=n,io.attachEvent("onpropertychange",qp)):e==="focusout"&&Zc()}function Ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Os(wo)}function Py(e,t){if(e==="click")return Os(t)}function jy(e,t){if(e==="input"||e==="change")return Os(t)}function Ny(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Ny;function xo(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Yl.call(t,o)||!kt(e[o],t[o]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function Yp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kp(){for(var e=window,t=Vi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vi(e.document)}return t}function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ly(e){var t=Kp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yp(n.ownerDocument.documentElement,n)){if(r!==null&&ju(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=td(n,i);var s=td(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ay=Ft&&"documentMode"in document&&11>=document.documentMode,Zn=null,fa=null,so=null,pa=!1;function nd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pa||Zn==null||Zn!==Vi(r)||(r=Zn,"selectionStart"in r&&ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),so&&xo(so,r)||(so=r,r=Xi(fa,"onSelect"),0<r.length&&(t=new Ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},gl={},Qp={};Ft&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Rs(e){if(gl[e])return gl[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qp)return gl[e]=t[n];return e}var Jp=Rs("animationend"),Gp=Rs("animationiteration"),Xp=Rs("animationstart"),Zp=Rs("transitionend"),eh=new Map,rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){eh.set(e,t),Fn(t,[e])}for(var yl=0;yl<rd.length;yl++){var vl=rd[yl],Dy=vl.toLowerCase(),zy=vl[0].toUpperCase()+vl.slice(1);gn(Dy,"on"+zy)}gn(Jp,"onAnimationEnd");gn(Gp,"onAnimationIteration");gn(Xp,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(Zp,"onTransitionEnd");yr("onMouseEnter",["mouseout","mouseover"]);yr("onMouseLeave",["mouseout","mouseover"]);yr("onPointerEnter",["pointerout","pointerover"]);yr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),By=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function od(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,D0(r,t,void 0,e),e.currentTarget=null}function th(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&o.isPropagationStopped())break e;od(o,l,u),i=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&o.isPropagationStopped())break e;od(o,l,u),i=a}}}if(Yi)throw e=aa,Yi=!1,aa=null,e}function ne(e,t){var n=t[va];n===void 0&&(n=t[va]=new Set);var r=e+"__bubble";n.has(r)||(nh(t,e,2,!1),n.add(r))}function wl(e,t,n){var r=0;t&&(r|=4),nh(n,e,r,t)}var ti="_reactListening"+Math.random().toString(36).slice(2);function So(e){if(!e[ti]){e[ti]=!0,up.forEach(function(n){n!=="selectionchange"&&(By.has(n)||wl(n,!1,e),wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,wl("selectionchange",!1,t))}}function nh(e,t,n,r){switch(Ip(t)){case 1:var o=X0;break;case 4:o=Z0;break;default:o=_u}n=o.bind(null,t,n,e),o=void 0,!la||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function xl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;l!==null;){if(s=Cn(l),s===null)return;if(a=s.tag,a===5||a===6){r=i=s;continue e}l=l.parentNode}}r=r.return}bp(function(){var u=i,c=Eu(n),d=[];e:{var p=eh.get(e);if(p!==void 0){var v=Ru,y=e;switch(e){case"keypress":if(Ci(n)===0)break e;case"keydown":case"keyup":v=hy;break;case"focusin":y="focus",v=pl;break;case"focusout":y="blur",v=pl;break;case"beforeblur":case"afterblur":v=pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=yy;break;case Jp:case Gp:case Xp:v=iy;break;case Zp:v=wy;break;case"scroll":v=ey;break;case"wheel":v=Sy;break;case"copy":case"cut":case"paste":v=ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Kc}var w=(t&4)!==0,$=!w&&e==="scroll",h=w?p!==null?p+"Capture":null:p;w=[];for(var m=u,g;m!==null;){g=m;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,h!==null&&(E=mo(m,h),E!=null&&w.push(ko(m,E,g)))),$)break;m=m.return}0<w.length&&(p=new v(p,y,null,n,c),d.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==ia&&(y=n.relatedTarget||n.fromElement)&&(Cn(y)||y[Mt]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Cn(y):null,y!==null&&($=Mn(y),y!==$||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=qc,E="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=Kc,E="onPointerLeave",h="onPointerEnter",m="pointer"),$=v==null?p:tr(v),g=y==null?p:tr(y),p=new w(E,m+"leave",v,n,c),p.target=$,p.relatedTarget=g,E=null,Cn(c)===u&&(w=new w(h,m+"enter",y,n,c),w.target=g,w.relatedTarget=$,E=w),$=E,v&&y)t:{for(w=v,h=y,m=0,g=w;g;g=Hn(g))m++;for(g=0,E=h;E;E=Hn(E))g++;for(;0<m-g;)w=Hn(w),m--;for(;0<g-m;)h=Hn(h),g--;for(;m--;){if(w===h||h!==null&&w===h.alternate)break t;w=Hn(w),h=Hn(h)}w=null}else w=null;v!==null&&id(d,p,v,w,!1),y!==null&&$!==null&&id(d,$,y,w,!0)}}e:{if(p=u?tr(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var R=Oy;else if(Gc(p))if(Vp)R=jy;else{R=Ty;var _=Ry}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(R=Py);if(R&&(R=R(e,u))){Wp(d,R,n,c);break e}_&&_(e,p,u),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&ea(p,"number",p.value)}switch(_=u?tr(u):window,e){case"focusin":(Gc(_)||_.contentEditable==="true")&&(Zn=_,fa=u,so=null);break;case"focusout":so=fa=Zn=null;break;case"mousedown":pa=!0;break;case"contextmenu":case"mouseup":case"dragend":pa=!1,nd(d,n,c);break;case"selectionchange":if(Ay)break;case"keydown":case"keyup":nd(d,n,c)}var O;if(Pu)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Xn?Up(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Mp&&n.locale!=="ko"&&(Xn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Xn&&(O=Fp()):(tn=c,Ou="value"in tn?tn.value:tn.textContent,Xn=!0)),_=Xi(u,L),0<_.length&&(L=new Yc(L,e,null,n,c),d.push({event:L,listeners:_}),O?L.data=O:(O=Hp(n),O!==null&&(L.data=O)))),(O=Ey?Cy(e,n):by(e,n))&&(u=Xi(u,"onBeforeInput"),0<u.length&&(c=new Yc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=O))}th(d,t)})}function ko(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=mo(e,n),i!=null&&r.unshift(ko(e,i,o)),i=mo(e,t),i!=null&&r.push(ko(e,i,o))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,o?(a=mo(n,i),a!=null&&s.unshift(ko(n,a,l))):o||(a=mo(n,i),a!=null&&s.push(ko(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Iy=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(Iy,`
`).replace(Fy,"")}function ni(e,t,n){if(t=sd(t),sd(e)!==t&&n)throw Error(P(425))}function Zi(){}var ha=null,ma=null;function ga(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ya=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,Uy=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(e){return ld.resolve(null).then(e).catch(Hy)}:ya;function Hy(e){setTimeout(function(){throw e})}function Sl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),vo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);vo(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+jr,Eo="__reactProps$"+jr,Mt="__reactContainer$"+jr,va="__reactEvents$"+jr,Wy="__reactListeners$"+jr,Vy="__reactHandles$"+jr;function Cn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ad(e);e!==null;){if(n=e[Ot])return n;e=ad(e)}return t}e=n,n=e.parentNode}return null}function Bo(e){return e=e[Ot]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ts(e){return e[Eo]||null}var wa=[],nr=-1;function yn(e){return{current:e}}function oe(e){0>nr||(e.current=wa[nr],wa[nr]=null,nr--)}function te(e,t){nr++,wa[nr]=e.current,e.current=t}var mn={},je=yn(mn),We=yn(!1),Ln=mn;function vr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function es(){oe(We),oe(je)}function ud(e,t,n){if(je.current!==mn)throw Error(P(168));te(je,t),te(We,n)}function rh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,R0(e)||"Unknown",o));return ue({},n,r)}function ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Ln=je.current,te(je,e),te(We,We.current),!0}function cd(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=rh(e,t,Ln),r.__reactInternalMemoizedMergedChildContext=e,oe(We),oe(je),te(je,e)):oe(We),te(We,n)}var Dt=null,Ps=!1,kl=!1;function oh(e){Dt===null?Dt=[e]:Dt.push(e)}function qy(e){Ps=!0,oh(e)}function vn(){if(!kl&&Dt!==null){kl=!0;var e=0,t=G;try{var n=Dt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,Ps=!1}catch(o){throw Dt!==null&&(Dt=Dt.slice(e+1)),Rp(Cu,vn),o}finally{G=t,kl=!1}}return null}var rr=[],or=0,ns=null,rs=0,rt=[],ot=0,An=null,zt=1,Bt="";function kn(e,t){rr[or++]=rs,rr[or++]=ns,ns=e,rs=t}function ih(e,t,n){rt[ot++]=zt,rt[ot++]=Bt,rt[ot++]=An,An=e;var r=zt;e=Bt;var o=32-vt(r)-1;r&=~(1<<o),n+=1;var i=32-vt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,zt=1<<32-vt(t)+o|n<<o|r,Bt=i+e}else zt=1<<i|n<<o|r,Bt=e}function Nu(e){e.return!==null&&(kn(e,1),ih(e,1,0))}function Lu(e){for(;e===ns;)ns=rr[--or],rr[or]=null,rs=rr[--or],rr[or]=null;for(;e===An;)An=rt[--ot],rt[ot]=null,Bt=rt[--ot],rt[ot]=null,zt=rt[--ot],rt[ot]=null}var Xe=null,Ge=null,ie=!1,yt=null;function sh(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:zt,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ge=null,!0):!1;default:return!1}}function xa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sa(e){if(ie){var t=Ge;if(t){var n=t;if(!dd(e,t)){if(xa(e))throw Error(P(418));t=an(n.nextSibling);var r=Xe;t&&dd(e,t)?sh(r,n):(e.flags=e.flags&-4097|2,ie=!1,Xe=e)}}else{if(xa(e))throw Error(P(418));e.flags=e.flags&-4097|2,ie=!1,Xe=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function ri(e){if(e!==Xe)return!1;if(!ie)return fd(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ga(e.type,e.memoizedProps)),t&&(t=Ge)){if(xa(e))throw lh(),Error(P(418));for(;t;)sh(e,t),t=an(t.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Xe?an(e.stateNode.nextSibling):null;return!0}function lh(){for(var e=Ge;e;)e=an(e.nextSibling)}function wr(){Ge=Xe=null,ie=!1}function Au(e){yt===null?yt=[e]:yt.push(e)}var Yy=Vt.ReactCurrentBatchConfig;function Vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function oi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pd(e){var t=e._init;return t(e._payload)}function ah(e){function t(h,m){if(e){var g=h.deletions;g===null?(h.deletions=[m],h.flags|=16):g.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function o(h,m){return h=fn(h,m),h.index=0,h.sibling=null,h}function i(h,m,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<m?(h.flags|=2,m):g):(h.flags|=2,m)):(h.flags|=1048576,m)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,m,g,E){return m===null||m.tag!==6?(m=Rl(g,h.mode,E),m.return=h,m):(m=o(m,g),m.return=h,m)}function a(h,m,g,E){var R=g.type;return R===Gn?c(h,m,g.props.children,E,g.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Jt&&pd(R)===m.type)?(E=o(m,g.props),E.ref=Vr(h,m,g),E.return=h,E):(E=Pi(g.type,g.key,g.props,null,h.mode,E),E.ref=Vr(h,m,g),E.return=h,E)}function u(h,m,g,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Tl(g,h.mode,E),m.return=h,m):(m=o(m,g.children||[]),m.return=h,m)}function c(h,m,g,E,R){return m===null||m.tag!==7?(m=Rn(g,h.mode,E,R),m.return=h,m):(m=o(m,g),m.return=h,m)}function d(h,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Rl(""+m,h.mode,g),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yo:return g=Pi(m.type,m.key,m.props,null,h.mode,g),g.ref=Vr(h,null,m),g.return=h,g;case Jn:return m=Tl(m,h.mode,g),m.return=h,m;case Jt:var E=m._init;return d(h,E(m._payload),g)}if(Gr(m)||Fr(m))return m=Rn(m,h.mode,g,null),m.return=h,m;oi(h,m)}return null}function p(h,m,g,E){var R=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:l(h,m,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:return g.key===R?a(h,m,g,E):null;case Jn:return g.key===R?u(h,m,g,E):null;case Jt:return R=g._init,p(h,m,R(g._payload),E)}if(Gr(g)||Fr(g))return R!==null?null:c(h,m,g,E,null);oi(h,g)}return null}function v(h,m,g,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(g)||null,l(m,h,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Yo:return h=h.get(E.key===null?g:E.key)||null,a(m,h,E,R);case Jn:return h=h.get(E.key===null?g:E.key)||null,u(m,h,E,R);case Jt:var _=E._init;return v(h,m,g,_(E._payload),R)}if(Gr(E)||Fr(E))return h=h.get(g)||null,c(m,h,E,R,null);oi(m,E)}return null}function y(h,m,g,E){for(var R=null,_=null,O=m,L=m=0,K=null;O!==null&&L<g.length;L++){O.index>L?(K=O,O=null):K=O.sibling;var B=p(h,O,g[L],E);if(B===null){O===null&&(O=K);break}e&&O&&B.alternate===null&&t(h,O),m=i(B,m,L),_===null?R=B:_.sibling=B,_=B,O=K}if(L===g.length)return n(h,O),ie&&kn(h,L),R;if(O===null){for(;L<g.length;L++)O=d(h,g[L],E),O!==null&&(m=i(O,m,L),_===null?R=O:_.sibling=O,_=O);return ie&&kn(h,L),R}for(O=r(h,O);L<g.length;L++)K=v(O,h,L,g[L],E),K!==null&&(e&&K.alternate!==null&&O.delete(K.key===null?L:K.key),m=i(K,m,L),_===null?R=K:_.sibling=K,_=K);return e&&O.forEach(function(U){return t(h,U)}),ie&&kn(h,L),R}function w(h,m,g,E){var R=Fr(g);if(typeof R!="function")throw Error(P(150));if(g=R.call(g),g==null)throw Error(P(151));for(var _=R=null,O=m,L=m=0,K=null,B=g.next();O!==null&&!B.done;L++,B=g.next()){O.index>L?(K=O,O=null):K=O.sibling;var U=p(h,O,B.value,E);if(U===null){O===null&&(O=K);break}e&&O&&U.alternate===null&&t(h,O),m=i(U,m,L),_===null?R=U:_.sibling=U,_=U,O=K}if(B.done)return n(h,O),ie&&kn(h,L),R;if(O===null){for(;!B.done;L++,B=g.next())B=d(h,B.value,E),B!==null&&(m=i(B,m,L),_===null?R=B:_.sibling=B,_=B);return ie&&kn(h,L),R}for(O=r(h,O);!B.done;L++,B=g.next())B=v(O,h,L,B.value,E),B!==null&&(e&&B.alternate!==null&&O.delete(B.key===null?L:B.key),m=i(B,m,L),_===null?R=B:_.sibling=B,_=B);return e&&O.forEach(function(Be){return t(h,Be)}),ie&&kn(h,L),R}function $(h,m,g,E){if(typeof g=="object"&&g!==null&&g.type===Gn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:e:{for(var R=g.key,_=m;_!==null;){if(_.key===R){if(R=g.type,R===Gn){if(_.tag===7){n(h,_.sibling),m=o(_,g.props.children),m.return=h,h=m;break e}}else if(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Jt&&pd(R)===_.type){n(h,_.sibling),m=o(_,g.props),m.ref=Vr(h,_,g),m.return=h,h=m;break e}n(h,_);break}else t(h,_);_=_.sibling}g.type===Gn?(m=Rn(g.props.children,h.mode,E,g.key),m.return=h,h=m):(E=Pi(g.type,g.key,g.props,null,h.mode,E),E.ref=Vr(h,m,g),E.return=h,h=E)}return s(h);case Jn:e:{for(_=g.key;m!==null;){if(m.key===_)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(h,m.sibling),m=o(m,g.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=Tl(g,h.mode,E),m.return=h,h=m}return s(h);case Jt:return _=g._init,$(h,m,_(g._payload),E)}if(Gr(g))return y(h,m,g,E);if(Fr(g))return w(h,m,g,E);oi(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(h,m.sibling),m=o(m,g),m.return=h,h=m):(n(h,m),m=Rl(g,h.mode,E),m.return=h,h=m),s(h)):n(h,m)}return $}var xr=ah(!0),uh=ah(!1),os=yn(null),is=null,ir=null,Du=null;function zu(){Du=ir=is=null}function Bu(e){var t=os.current;oe(os),e._currentValue=t}function ka(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hr(e,t){is=e,Du=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Du!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(is===null)throw Error(P(308));ir=e,is.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var bn=null;function Iu(e){bn===null?bn=[e]:bn.push(e)}function ch(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Iu(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ut(e,n)}return o=r.interleaved,o===null?(t.next=t,Iu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ut(e,n)}function bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bu(e,n)}}function hd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ss(e,t,n,r){var o=e.updateQueue;Gt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?i=u:s.next=u,s=a;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==s&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(i!==null){var d=o.baseState;s=0,c=u=a=null,l=i;do{var p=l.lane,v=l.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(p=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(v,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(v,d,p):y,p==null)break e;d=ue({},d,p);break e;case 2:Gt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[l]:p.push(l))}else v={eventTime:v,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=v,a=d):c=c.next=v,s|=p;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;p=l,l=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(c===null&&(a=d),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);zn|=s,e.lanes=s,e.memoizedState=d}}function md(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Io={},Tt=yn(Io),Co=yn(Io),bo=yn(Io);function $n(e){if(e===Io)throw Error(P(174));return e}function Mu(e,t){switch(te(bo,t),te(Co,e),te(Tt,Io),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:na(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=na(t,e)}oe(Tt),te(Tt,t)}function Sr(){oe(Tt),oe(Co),oe(bo)}function fh(e){$n(bo.current);var t=$n(Tt.current),n=na(t,e.type);t!==n&&(te(Co,e),te(Tt,n))}function Uu(e){Co.current===e&&(oe(Tt),oe(Co))}var se=yn(0);function ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var El=[];function Hu(){for(var e=0;e<El.length;e++)El[e]._workInProgressVersionPrimary=null;El.length=0}var $i=Vt.ReactCurrentDispatcher,Cl=Vt.ReactCurrentBatchConfig,Dn=0,ae=null,ve=null,ke=null,as=!1,lo=!1,$o=0,Ky=0;function Re(){throw Error(P(321))}function Wu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function Vu(e,t,n,r,o,i){if(Dn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$i.current=e===null||e.memoizedState===null?Xy:Zy,e=n(r,o),lo){i=0;do{if(lo=!1,$o=0,25<=i)throw Error(P(301));i+=1,ke=ve=null,t.updateQueue=null,$i.current=e1,e=n(r,o)}while(lo)}if($i.current=us,t=ve!==null&&ve.next!==null,Dn=0,ke=ve=ae=null,as=!1,t)throw Error(P(300));return e}function qu(){var e=$o!==0;return $o=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ae.memoizedState=ke=e:ke=ke.next=e,ke}function ct(){if(ve===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=ke===null?ae.memoizedState:ke.next;if(t!==null)ke=t,ve=e;else{if(e===null)throw Error(P(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},ke===null?ae.memoizedState=ke=e:ke=ke.next=e}return ke}function _o(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=ct(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ve,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,a=null,u=i;do{var c=u.lane;if((Dn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,s=r):a=a.next=d,ae.lanes|=c,zn|=c}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=l,kt(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,zn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=ct(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);kt(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ph(){}function hh(e,t){var n=ae,r=ct(),o=t(),i=!kt(r.memoizedState,o);if(i&&(r.memoizedState=o,Me=!0),r=r.queue,Yu(yh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Oo(9,gh.bind(null,n,r,o,t),void 0,null),Ce===null)throw Error(P(349));Dn&30||mh(n,t,o)}return o}function mh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gh(e,t,n,r){t.value=n,t.getSnapshot=r,vh(t)&&wh(e)}function yh(e,t,n){return n(function(){vh(t)&&wh(e)})}function vh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function wh(e){var t=Ut(e,1);t!==null&&wt(t,e,1,-1)}function gd(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:e},t.queue=e,e=e.dispatch=Gy.bind(null,ae,e),[t.memoizedState,e]}function Oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xh(){return ct().memoizedState}function _i(e,t,n,r){var o=$t();ae.flags|=e,o.memoizedState=Oo(1|t,n,void 0,r===void 0?null:r)}function js(e,t,n,r){var o=ct();r=r===void 0?null:r;var i=void 0;if(ve!==null){var s=ve.memoizedState;if(i=s.destroy,r!==null&&Wu(r,s.deps)){o.memoizedState=Oo(t,n,i,r);return}}ae.flags|=e,o.memoizedState=Oo(1|t,n,i,r)}function yd(e,t){return _i(8390656,8,e,t)}function Yu(e,t){return js(2048,8,e,t)}function Sh(e,t){return js(4,2,e,t)}function kh(e,t){return js(4,4,e,t)}function Eh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ch(e,t,n){return n=n!=null?n.concat([e]):null,js(4,4,Eh.bind(null,t,e),n)}function Ku(){}function bh(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $h(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _h(e,t,n){return Dn&21?(kt(n,t)||(n=jp(),ae.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function Qy(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Cl.transition;Cl.transition={};try{e(!1),t()}finally{G=n,Cl.transition=r}}function Oh(){return ct().memoizedState}function Jy(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rh(e))Th(t,n);else if(n=ch(e,t,n,r),n!==null){var o=Ae();wt(n,e,r,o),Ph(n,t,r)}}function Gy(e,t,n){var r=dn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rh(e))Th(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,kt(l,s)){var a=t.interleaved;a===null?(o.next=o,Iu(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=ch(e,t,o,r),n!==null&&(o=Ae(),wt(n,e,r,o),Ph(n,t,r))}}function Rh(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Th(e,t){lo=as=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ph(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bu(e,n)}}var us={readContext:ut,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Xy={readContext:ut,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:yd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_i(4194308,4,Eh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jy.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:gd,useDebugValue:Ku,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=gd(!1),t=e[0];return e=Qy.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=$t();if(ie){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ce===null)throw Error(P(349));Dn&30||mh(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,yd(yh.bind(null,r,i,e),[e]),r.flags|=2048,Oo(9,gh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=$t(),t=Ce.identifierPrefix;if(ie){var n=Bt,r=zt;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$o++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ky++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zy={readContext:ut,useCallback:bh,useContext:ut,useEffect:Yu,useImperativeHandle:Ch,useInsertionEffect:Sh,useLayoutEffect:kh,useMemo:$h,useReducer:bl,useRef:xh,useState:function(){return bl(_o)},useDebugValue:Ku,useDeferredValue:function(e){var t=ct();return _h(t,ve.memoizedState,e)},useTransition:function(){var e=bl(_o)[0],t=ct().memoizedState;return[e,t]},useMutableSource:ph,useSyncExternalStore:hh,useId:Oh,unstable_isNewReconciler:!1},e1={readContext:ut,useCallback:bh,useContext:ut,useEffect:Yu,useImperativeHandle:Ch,useInsertionEffect:Sh,useLayoutEffect:kh,useMemo:$h,useReducer:$l,useRef:xh,useState:function(){return $l(_o)},useDebugValue:Ku,useDeferredValue:function(e){var t=ct();return ve===null?t.memoizedState=e:_h(t,ve.memoizedState,e)},useTransition:function(){var e=$l(_o)[0],t=ct().memoizedState;return[e,t]},useMutableSource:ph,useSyncExternalStore:hh,useId:Oh,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ea(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ns={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=dn(e),i=It(r,o);i.payload=t,n!=null&&(i.callback=n),t=un(e,i,o),t!==null&&(wt(t,e,o,r),bi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=dn(e),i=It(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=un(e,i,o),t!==null&&(wt(t,e,o,r),bi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=dn(e),o=It(n,r);o.tag=2,t!=null&&(o.callback=t),t=un(e,o,r),t!==null&&(wt(t,e,r,n),bi(t,e,r))}};function vd(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!xo(n,r)||!xo(o,i):!0}function jh(e,t,n){var r=!1,o=mn,i=t.contextType;return typeof i=="object"&&i!==null?i=ut(i):(o=Ve(t)?Ln:je.current,r=t.contextTypes,i=(r=r!=null)?vr(e,o):mn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ns,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function wd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ns.enqueueReplaceState(t,t.state,null)}function Ca(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Fu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ut(i):(i=Ve(t)?Ln:je.current,o.context=vr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ea(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ns.enqueueReplaceState(o,o.state,null),ss(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function kr(e,t){try{var n="",r=t;do n+=O0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function _l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ba(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var t1=typeof WeakMap=="function"?WeakMap:Map;function Nh(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ds||(ds=!0,Aa=r),ba(e,t)},n}function Lh(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ba(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ba(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function xd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new t1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=m1.bind(null,e,t,n),t.then(e,e))}function Sd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var n1=Vt.ReactCurrentOwner,Me=!1;function Le(e,t,n,r){t.child=e===null?uh(t,null,n,r):xr(t,e.child,n,r)}function Ed(e,t,n,r,o){n=n.render;var i=t.ref;return hr(t,o),r=Vu(e,t,n,r,i,o),n=qu(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(ie&&n&&Nu(t),t.flags|=1,Le(e,t,r,o),t.child)}function Cd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!nc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ah(e,t,i,r,o)):(e=Pi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(s,r)&&e.ref===t.ref)return Ht(e,t,o)}return t.flags|=1,e=fn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ah(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(xo(i,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Ht(e,t,o)}return $a(e,t,n,r,o)}function Dh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(lr,Je),Je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(lr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(lr,Je),Je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,te(lr,Je),Je|=r;return Le(e,t,o,n),t.child}function zh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $a(e,t,n,r,o){var i=Ve(n)?Ln:je.current;return i=vr(t,i),hr(t,o),n=Vu(e,t,n,r,i,o),r=qu(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(ie&&r&&Nu(t),t.flags|=1,Le(e,t,n,o),t.child)}function bd(e,t,n,r,o){if(Ve(n)){var i=!0;ts(t)}else i=!1;if(hr(t,o),t.stateNode===null)Oi(e,t),jh(t,n,r),Ca(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ve(n)?Ln:je.current,u=vr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&wd(t,s,r,u),Gt=!1;var p=t.memoizedState;s.state=p,ss(t,r,s,o),a=t.memoizedState,l!==r||p!==a||We.current||Gt?(typeof c=="function"&&(Ea(t,n,c,r),a=t.memoizedState),(l=Gt||vd(t,n,l,r,p,a,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,dh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ht(t.type,l),s.props=u,d=t.pendingProps,p=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=Ve(n)?Ln:je.current,a=vr(t,a));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||p!==a)&&wd(t,s,r,a),Gt=!1,p=t.memoizedState,s.state=p,ss(t,r,s,o);var y=t.memoizedState;l!==d||p!==y||We.current||Gt?(typeof v=="function"&&(Ea(t,n,v,r),y=t.memoizedState),(u=Gt||vd(t,n,u,r,p,y,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return _a(e,t,n,r,i,o)}function _a(e,t,n,r,o,i){zh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&cd(t,n,!1),Ht(e,t,i);r=t.stateNode,n1.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=xr(t,e.child,null,i),t.child=xr(t,null,l,i)):Le(e,t,l,i),t.memoizedState=r.state,o&&cd(t,n,!0),t.child}function Bh(e){var t=e.stateNode;t.pendingContext?ud(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ud(e,t.context,!1),Mu(e,t.containerInfo)}function $d(e,t,n,r,o){return wr(),Au(o),t.flags|=256,Le(e,t,n,r),t.child}var Oa={dehydrated:null,treeContext:null,retryLane:0};function Ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ih(e,t,n){var r=t.pendingProps,o=se.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(se,o&1),e===null)return Sa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Ds(s,r,0,null),e=Rn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ra(n),t.memoizedState=Oa,e):Qu(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return r1(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=fn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=fn(l,i):(i=Rn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ra(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Oa,r}return i=e.child,e=i.sibling,r=fn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qu(e,t){return t=Ds({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ii(e,t,n,r){return r!==null&&Au(r),xr(t,e.child,null,n),e=Qu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function r1(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=_l(Error(P(422))),ii(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ds({mode:"visible",children:r.children},o,0,null),i=Rn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&xr(t,e.child,null,s),t.child.memoizedState=Ra(s),t.memoizedState=Oa,i);if(!(t.mode&1))return ii(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(P(419)),r=_l(i,r,void 0),ii(e,t,s,r)}if(l=(s&e.childLanes)!==0,Me||l){if(r=Ce,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ut(e,o),wt(r,e,o,-1))}return tc(),r=_l(Error(P(421))),ii(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=g1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ge=an(o.nextSibling),Xe=t,ie=!0,yt=null,e!==null&&(rt[ot++]=zt,rt[ot++]=Bt,rt[ot++]=An,zt=e.id,Bt=e.overflow,An=t),t=Qu(t,r.children),t.flags|=4096,t)}function _d(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ka(e.return,t,n)}function Ol(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Fh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Le(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_d(e,n,t);else if(e.tag===19)_d(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(se,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ls(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ol(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ls(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ol(t,!0,n,null,i);break;case"together":Ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function o1(e,t,n){switch(t.tag){case 3:Bh(t),wr();break;case 5:fh(t);break;case 1:Ve(t.type)&&ts(t);break;case 4:Mu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;te(os,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?Ih(e,t,n):(te(se,se.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);te(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Dh(e,t,n)}return Ht(e,t,n)}var Mh,Ta,Uh,Hh;Mh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ta=function(){};Uh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,$n(Tt.current);var i=null;switch(n){case"input":o=Xl(e,o),r=Xl(e,r),i=[];break;case"select":o=ue({},o,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":o=ta(e,o),r=ta(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zi)}ra(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(po.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(po.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ne("scroll",e),i||l===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Hh=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i1(e,t,n){var r=t.pendingProps;switch(Lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ve(t.type)&&es(),Te(t),null;case 3:return r=t.stateNode,Sr(),oe(We),oe(je),Hu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(Ba(yt),yt=null))),Ta(e,t),Te(t),null;case 5:Uu(t);var o=$n(bo.current);if(n=t.type,e!==null&&t.stateNode!=null)Uh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Te(t),null}if(e=$n(Tt.current),ri(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ot]=t,r[Eo]=i,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(o=0;o<Zr.length;o++)ne(Zr[o],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Dc(r,i),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ne("invalid",r);break;case"textarea":Bc(r,i),ne("invalid",r)}ra(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ni(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ni(r.textContent,l,e),o=["children",""+l]):po.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ne("scroll",r)}switch(n){case"input":Ko(r),zc(r,i,!0);break;case"textarea":Ko(r),Ic(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ot]=t,e[Eo]=r,Mh(e,t,!1,!1),t.stateNode=e;e:{switch(s=oa(n,r),n){case"dialog":ne("cancel",e),ne("close",e),o=r;break;case"iframe":case"object":case"embed":ne("load",e),o=r;break;case"video":case"audio":for(o=0;o<Zr.length;o++)ne(Zr[o],e);o=r;break;case"source":ne("error",e),o=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),o=r;break;case"details":ne("toggle",e),o=r;break;case"input":Dc(e,r),o=Xl(e,r),ne("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ue({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Bc(e,r),o=ta(e,r),ne("invalid",e);break;default:o=r}ra(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?xp(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&vp(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ho(e,a):typeof a=="number"&&ho(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(po.hasOwnProperty(i)?a!=null&&i==="onScroll"&&ne("scroll",e):a!=null&&wu(e,i,a,s))}switch(n){case"input":Ko(e),zc(e,r,!1);break;case"textarea":Ko(e),Ic(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?cr(e,!!r.multiple,i,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Hh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=$n(bo.current),$n(Tt.current),ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(i=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:ni(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ni(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Te(t),null;case 13:if(oe(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ge!==null&&t.mode&1&&!(t.flags&128))lh(),wr(),t.flags|=98560,i=!1;else if(i=ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[Ot]=t}else wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else yt!==null&&(Ba(yt),yt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?we===0&&(we=3):tc())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return Sr(),Ta(e,t),e===null&&So(t.stateNode.containerInfo),Te(t),null;case 10:return Bu(t.type._context),Te(t),null;case 17:return Ve(t.type)&&es(),Te(t),null;case 19:if(oe(se),i=t.memoizedState,i===null)return Te(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)qr(i,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ls(e),s!==null){for(t.flags|=128,qr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&fe()>Er&&(t.flags|=128,r=!0,qr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ls(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ie)return Te(t),null}else 2*fe()-i.renderingStartTime>Er&&n!==1073741824&&(t.flags|=128,r=!0,qr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=fe(),t.sibling=null,n=se.current,te(se,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return ec(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function s1(e,t){switch(Lu(t),t.tag){case 1:return Ve(t.type)&&es(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),oe(We),oe(je),Hu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Uu(t),null;case 13:if(oe(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(se),null;case 4:return Sr(),null;case 10:return Bu(t.type._context),null;case 22:case 23:return ec(),null;case 24:return null;default:return null}}var si=!1,Pe=!1,l1=typeof WeakSet=="function"?WeakSet:Set,D=null;function sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function Pa(e,t,n){try{n()}catch(r){ce(e,t,r)}}var Od=!1;function a1(e,t){if(ha=Ji,e=Kp(),ju(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(l=s+o),d!==i||r!==0&&d.nodeType!==3||(a=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===n&&++u===o&&(l=s),p===i&&++c===r&&(a=s),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ma={focusedElem:e,selectionRange:n},Ji=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,$=y.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:ht(t.type,w),$);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){ce(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return y=Od,Od=!1,y}function ao(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Pa(t,n,i)}o=o.next}while(o!==r)}}function Ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ja(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wh(e){var t=e.alternate;t!==null&&(e.alternate=null,Wh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[Eo],delete t[va],delete t[Wy],delete t[Vy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vh(e){return e.tag===5||e.tag===3||e.tag===4}function Rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(r!==4&&(e=e.child,e!==null))for(Na(e,t,n),e=e.sibling;e!==null;)Na(e,t,n),e=e.sibling}function La(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(La(e,t,n),e=e.sibling;e!==null;)La(e,t,n),e=e.sibling}var $e=null,mt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)qh(e,t,n),n=n.sibling}function qh(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount($s,n)}catch{}switch(n.tag){case 5:Pe||sr(n,t);case 6:var r=$e,o=mt;$e=null,Yt(e,t,n),$e=r,mt=o,$e!==null&&(mt?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(mt?(e=$e,n=n.stateNode,e.nodeType===8?Sl(e.parentNode,n):e.nodeType===1&&Sl(e,n),vo(e)):Sl($e,n.stateNode));break;case 4:r=$e,o=mt,$e=n.stateNode.containerInfo,mt=!0,Yt(e,t,n),$e=r,mt=o;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Pa(n,t,s),o=o.next}while(o!==r)}Yt(e,t,n);break;case 1:if(!Pe&&(sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ce(n,t,l)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Yt(e,t,n),Pe=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function Td(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new l1),t.forEach(function(r){var o=y1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,mt=!1;break e;case 3:$e=l.stateNode.containerInfo,mt=!0;break e;case 4:$e=l.stateNode.containerInfo,mt=!0;break e}l=l.return}if($e===null)throw Error(P(160));qh(i,s,o),$e=null,mt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ce(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yh(t,e),t=t.sibling}function Yh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),Ct(e),r&4){try{ao(3,e,e.return),Ls(3,e)}catch(w){ce(e,e.return,w)}try{ao(5,e,e.return)}catch(w){ce(e,e.return,w)}}break;case 1:pt(t,e),Ct(e),r&512&&n!==null&&sr(n,n.return);break;case 5:if(pt(t,e),Ct(e),r&512&&n!==null&&sr(n,n.return),e.flags&32){var o=e.stateNode;try{ho(o,"")}catch(w){ce(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&mp(o,i),oa(l,s);var u=oa(l,i);for(s=0;s<a.length;s+=2){var c=a[s],d=a[s+1];c==="style"?xp(o,d):c==="dangerouslySetInnerHTML"?vp(o,d):c==="children"?ho(o,d):wu(o,c,d,u)}switch(l){case"input":Zl(o,i);break;case"textarea":gp(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?cr(o,!!i.multiple,v,!1):p!==!!i.multiple&&(i.defaultValue!=null?cr(o,!!i.multiple,i.defaultValue,!0):cr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Eo]=i}catch(w){ce(e,e.return,w)}}break;case 6:if(pt(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ce(e,e.return,w)}}break;case 3:if(pt(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch(w){ce(e,e.return,w)}break;case 4:pt(t,e),Ct(e);break;case 13:pt(t,e),Ct(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Xu=fe())),r&4&&Td(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(u=Pe)||c,pt(t,e),Pe=u):pt(t,e),Ct(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(D=e,c=e.child;c!==null;){for(d=D=c;D!==null;){switch(p=D,v=p.child,p.tag){case 0:case 11:case 14:case 15:ao(4,p,p.return);break;case 1:sr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ce(r,n,w)}}break;case 5:sr(p,p.return);break;case 22:if(p.memoizedState!==null){jd(d);continue}}v!==null?(v.return=p,D=v):jd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,a=d.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=wp("display",s))}catch(w){ce(e,e.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ce(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:pt(t,e),Ct(e),r&4&&Td(e);break;case 21:break;default:pt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vh(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ho(o,""),r.flags&=-33);var i=Rd(e);La(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Rd(e);Na(e,l,s);break;default:throw Error(P(161))}}catch(a){ce(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function u1(e,t,n){D=e,Kh(e)}function Kh(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||si;if(!s){var l=o.alternate,a=l!==null&&l.memoizedState!==null||Pe;l=si;var u=Pe;if(si=s,(Pe=a)&&!u)for(D=o;D!==null;)s=D,a=s.child,s.tag===22&&s.memoizedState!==null?Nd(o):a!==null?(a.return=s,D=a):Nd(o);for(;i!==null;)D=i,Kh(i),i=i.sibling;D=o,si=l,Pe=u}Pd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,D=i):Pd(e)}}function Pd(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||Ls(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&md(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}md(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&vo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Pe||t.flags&512&&ja(t)}catch(p){ce(t,t.return,p)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function jd(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Nd(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ls(4,t)}catch(a){ce(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ce(t,o,a)}}var i=t.return;try{ja(t)}catch(a){ce(t,i,a)}break;case 5:var s=t.return;try{ja(t)}catch(a){ce(t,s,a)}}}catch(a){ce(t,t.return,a)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var c1=Math.ceil,cs=Vt.ReactCurrentDispatcher,Ju=Vt.ReactCurrentOwner,lt=Vt.ReactCurrentBatchConfig,Q=0,Ce=null,ge=null,_e=0,Je=0,lr=yn(0),we=0,Ro=null,zn=0,As=0,Gu=0,uo=null,Fe=null,Xu=0,Er=1/0,Lt=null,ds=!1,Aa=null,cn=null,li=!1,nn=null,fs=0,co=0,Da=null,Ri=-1,Ti=0;function Ae(){return Q&6?fe():Ri!==-1?Ri:Ri=fe()}function dn(e){return e.mode&1?Q&2&&_e!==0?_e&-_e:Yy.transition!==null?(Ti===0&&(Ti=jp()),Ti):(e=G,e!==0||(e=window.event,e=e===void 0?16:Ip(e.type)),e):1}function wt(e,t,n,r){if(50<co)throw co=0,Da=null,Error(P(185));Do(e,n,r),(!(Q&2)||e!==Ce)&&(e===Ce&&(!(Q&2)&&(As|=n),we===4&&Zt(e,_e)),qe(e,r),n===1&&Q===0&&!(t.mode&1)&&(Er=fe()+500,Ps&&vn()))}function qe(e,t){var n=e.callbackNode;Y0(e,t);var r=Qi(e,e===Ce?_e:0);if(r===0)n!==null&&Uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uc(n),t===1)e.tag===0?qy(Ld.bind(null,e)):oh(Ld.bind(null,e)),Uy(function(){!(Q&6)&&vn()}),n=null;else{switch(Np(r)){case 1:n=Cu;break;case 4:n=Tp;break;case 16:n=Ki;break;case 536870912:n=Pp;break;default:n=Ki}n=nm(n,Qh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qh(e,t){if(Ri=-1,Ti=0,Q&6)throw Error(P(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=Qi(e,e===Ce?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ps(e,r);else{t=r;var o=Q;Q|=2;var i=Gh();(Ce!==e||_e!==t)&&(Lt=null,Er=fe()+500,On(e,t));do try{p1();break}catch(l){Jh(e,l)}while(!0);zu(),cs.current=i,Q=o,ge!==null?t=0:(Ce=null,_e=0,t=we)}if(t!==0){if(t===2&&(o=ua(e),o!==0&&(r=o,t=za(e,o))),t===1)throw n=Ro,On(e,0),Zt(e,r),qe(e,fe()),n;if(t===6)Zt(e,r);else{if(o=e.current.alternate,!(r&30)&&!d1(o)&&(t=ps(e,r),t===2&&(i=ua(e),i!==0&&(r=i,t=za(e,i))),t===1))throw n=Ro,On(e,0),Zt(e,r),qe(e,fe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:En(e,Fe,Lt);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Xu+500-fe(),10<t)){if(Qi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ya(En.bind(null,e,Fe,Lt),t);break}En(e,Fe,Lt);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-vt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c1(r/1960))-r,10<r){e.timeoutHandle=ya(En.bind(null,e,Fe,Lt),r);break}En(e,Fe,Lt);break;case 5:En(e,Fe,Lt);break;default:throw Error(P(329))}}}return qe(e,fe()),e.callbackNode===n?Qh.bind(null,e):null}function za(e,t){var n=uo;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=ps(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Ba(t)),e}function Ba(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function d1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!kt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Gu,t&=~As,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Ld(e){if(Q&6)throw Error(P(327));mr();var t=Qi(e,0);if(!(t&1))return qe(e,fe()),null;var n=ps(e,t);if(e.tag!==0&&n===2){var r=ua(e);r!==0&&(t=r,n=za(e,r))}if(n===1)throw n=Ro,On(e,0),Zt(e,t),qe(e,fe()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e,Fe,Lt),qe(e,fe()),null}function Zu(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Er=fe()+500,Ps&&vn())}}function Bn(e){nn!==null&&nn.tag===0&&!(Q&6)&&mr();var t=Q;Q|=1;var n=lt.transition,r=G;try{if(lt.transition=null,G=1,e)return e()}finally{G=r,lt.transition=n,Q=t,!(Q&6)&&vn()}}function ec(){Je=lr.current,oe(lr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,My(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&es();break;case 3:Sr(),oe(We),oe(je),Hu();break;case 5:Uu(r);break;case 4:Sr();break;case 13:oe(se);break;case 19:oe(se);break;case 10:Bu(r.type._context);break;case 22:case 23:ec()}n=n.return}if(Ce=e,ge=e=fn(e.current,null),_e=Je=t,we=0,Ro=null,Gu=As=zn=0,Fe=uo=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}bn=null}return e}function Jh(e,t){do{var n=ge;try{if(zu(),$i.current=us,as){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}as=!1}if(Dn=0,ke=ve=ae=null,lo=!1,$o=0,Ju.current=null,n===null||n.return===null){we=1,Ro=t,ge=null;break}e:{var i=e,s=n.return,l=n,a=t;if(t=_e,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Sd(s);if(v!==null){v.flags&=-257,kd(v,s,l,i,t),v.mode&1&&xd(i,u,t),t=v,a=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){xd(i,u,t),tc();break e}a=Error(P(426))}}else if(ie&&l.mode&1){var $=Sd(s);if($!==null){!($.flags&65536)&&($.flags|=256),kd($,s,l,i,t),Au(kr(a,l));break e}}i=a=kr(a,l),we!==4&&(we=2),uo===null?uo=[i]:uo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Nh(i,a,t);hd(i,h);break e;case 1:l=a;var m=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(cn===null||!cn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=Lh(i,l,t);hd(i,E);break e}}i=i.return}while(i!==null)}Zh(n)}catch(R){t=R,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function Gh(){var e=cs.current;return cs.current=us,e===null?us:e}function tc(){(we===0||we===3||we===2)&&(we=4),Ce===null||!(zn&268435455)&&!(As&268435455)||Zt(Ce,_e)}function ps(e,t){var n=Q;Q|=2;var r=Gh();(Ce!==e||_e!==t)&&(Lt=null,On(e,t));do try{f1();break}catch(o){Jh(e,o)}while(!0);if(zu(),Q=n,cs.current=r,ge!==null)throw Error(P(261));return Ce=null,_e=0,we}function f1(){for(;ge!==null;)Xh(ge)}function p1(){for(;ge!==null&&!B0();)Xh(ge)}function Xh(e){var t=tm(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Zh(e):ge=t,Ju.current=null}function Zh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=s1(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ge=null;return}}else if(n=i1(n,t,Je),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);we===0&&(we=5)}function En(e,t,n){var r=G,o=lt.transition;try{lt.transition=null,G=1,h1(e,t,n,r)}finally{lt.transition=o,G=r}return null}function h1(e,t,n,r){do mr();while(nn!==null);if(Q&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(K0(e,i),e===Ce&&(ge=Ce=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||li||(li=!0,nm(Ki,function(){return mr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=lt.transition,lt.transition=null;var s=G;G=1;var l=Q;Q|=4,Ju.current=null,a1(e,n),Yh(n,e),Ly(ma),Ji=!!ha,ma=ha=null,e.current=n,u1(n),I0(),Q=l,G=s,lt.transition=i}else e.current=n;if(li&&(li=!1,nn=e,fs=o),i=e.pendingLanes,i===0&&(cn=null),U0(n.stateNode),qe(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ds)throw ds=!1,e=Aa,Aa=null,e;return fs&1&&e.tag!==0&&mr(),i=e.pendingLanes,i&1?e===Da?co++:(co=0,Da=e):co=0,vn(),null}function mr(){if(nn!==null){var e=Np(fs),t=lt.transition,n=G;try{if(lt.transition=null,G=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,fs=0,Q&6)throw Error(P(331));var o=Q;for(Q|=4,D=e.current;D!==null;){var i=D,s=i.child;if(D.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:ao(8,c,i)}var d=c.child;if(d!==null)d.return=c,D=d;else for(;D!==null;){c=D;var p=c.sibling,v=c.return;if(Wh(c),c===u){D=null;break}if(p!==null){p.return=v,D=p;break}D=v}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var $=w.sibling;w.sibling=null,w=$}while(w!==null)}}D=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,D=s;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ao(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,D=h;break e}D=i.return}}var m=e.current;for(D=m;D!==null;){s=D;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,D=g;else e:for(s=m;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ls(9,l)}}catch(R){ce(l,l.return,R)}if(l===s){D=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,D=E;break e}D=l.return}}if(Q=o,vn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot($s,e)}catch{}r=!0}return r}finally{G=n,lt.transition=t}}return!1}function Ad(e,t,n){t=kr(n,t),t=Nh(e,t,1),e=un(e,t,1),t=Ae(),e!==null&&(Do(e,1,t),qe(e,t))}function ce(e,t,n){if(e.tag===3)Ad(e,e,n);else for(;t!==null;){if(t.tag===3){Ad(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=kr(n,e),e=Lh(t,e,1),t=un(t,e,1),e=Ae(),t!==null&&(Do(t,1,e),qe(t,e));break}}t=t.return}}function m1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(_e&n)===n&&(we===4||we===3&&(_e&130023424)===_e&&500>fe()-Xu?On(e,0):Gu|=n),qe(e,t)}function em(e,t){t===0&&(e.mode&1?(t=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):t=1);var n=Ae();e=Ut(e,t),e!==null&&(Do(e,t,n),qe(e,n))}function g1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),em(e,n)}function y1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),em(e,n)}var tm;tm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,o1(e,t,n);Me=!!(e.flags&131072)}else Me=!1,ie&&t.flags&1048576&&ih(t,rs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oi(e,t),e=t.pendingProps;var o=vr(t,je.current);hr(t,n),o=Vu(null,t,r,e,o,n);var i=qu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(i=!0,ts(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fu(t),o.updater=Ns,t.stateNode=o,o._reactInternals=t,Ca(t,r,e,n),t=_a(null,t,r,!0,i,n)):(t.tag=0,ie&&i&&Nu(t),Le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=w1(r),e=ht(r,e),o){case 0:t=$a(null,t,r,e,n);break e;case 1:t=bd(null,t,r,e,n);break e;case 11:t=Ed(null,t,r,e,n);break e;case 14:t=Cd(null,t,r,ht(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),$a(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),bd(e,t,r,o,n);case 3:e:{if(Bh(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,dh(e,t),ss(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=kr(Error(P(423)),t),t=$d(e,t,r,n,o);break e}else if(r!==o){o=kr(Error(P(424)),t),t=$d(e,t,r,n,o);break e}else for(Ge=an(t.stateNode.containerInfo.firstChild),Xe=t,ie=!0,yt=null,n=uh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),r===o){t=Ht(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return fh(t),e===null&&Sa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,ga(r,o)?s=null:i!==null&&ga(r,i)&&(t.flags|=32),zh(e,t),Le(e,t,s,n),t.child;case 6:return e===null&&Sa(t),null;case 13:return Ih(e,t,n);case 4:return Mu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xr(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),Ed(e,t,r,o,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,te(os,r._currentValue),r._currentValue=s,i!==null)if(kt(i.value,s)){if(i.children===o.children&&!We.current){t=Ht(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=It(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ka(i.return,n,t),l.lanes|=n;break}a=a.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(P(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ka(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,hr(t,n),o=ut(o),r=r(o),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,o=ht(r,t.pendingProps),o=ht(r.type,o),Cd(e,t,r,o,n);case 15:return Ah(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),Oi(e,t),t.tag=1,Ve(r)?(e=!0,ts(t)):e=!1,hr(t,n),jh(t,r,o),Ca(t,r,o,n),_a(null,t,r,!0,e,n);case 19:return Fh(e,t,n);case 22:return Dh(e,t,n)}throw Error(P(156,t.tag))};function nm(e,t){return Rp(e,t)}function v1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new v1(e,t,n,r)}function nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function w1(e){if(typeof e=="function")return nc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Su)return 11;if(e===ku)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pi(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")nc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Gn:return Rn(n.children,o,i,t);case xu:s=8,o|=8;break;case Kl:return e=st(12,n,t,o|2),e.elementType=Kl,e.lanes=i,e;case Ql:return e=st(13,n,t,o),e.elementType=Ql,e.lanes=i,e;case Jl:return e=st(19,n,t,o),e.elementType=Jl,e.lanes=i,e;case fp:return Ds(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cp:s=10;break e;case dp:s=9;break e;case Su:s=11;break e;case ku:s=14;break e;case Jt:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=st(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Rn(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function Ds(e,t,n,r){return e=st(22,e,r,t),e.elementType=fp,e.lanes=n,e.stateNode={isHidden:!1},e}function Rl(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function Tl(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function x1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function rc(e,t,n,r,o,i,s,l,a){return e=new x1(e,t,n,l,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=st(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fu(i),e}function S1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rm(e){if(!e)return mn;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ve(n))return rh(e,n,t)}return t}function om(e,t,n,r,o,i,s,l,a){return e=rc(n,r,!0,e,o,i,s,l,a),e.context=rm(null),n=e.current,r=Ae(),o=dn(n),i=It(r,o),i.callback=t??null,un(n,i,o),e.current.lanes=o,Do(e,o,r),qe(e,r),e}function zs(e,t,n,r){var o=t.current,i=Ae(),s=dn(o);return n=rm(n),t.context===null?t.context=n:t.pendingContext=n,t=It(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(o,t,s),e!==null&&(wt(e,o,s,i),bi(e,o,s)),s}function hs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oc(e,t){Dd(e,t),(e=e.alternate)&&Dd(e,t)}function k1(){return null}var im=typeof reportError=="function"?reportError:function(e){console.error(e)};function ic(e){this._internalRoot=e}Bs.prototype.render=ic.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));zs(e,t,null,null)};Bs.prototype.unmount=ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){zs(null,e,null,null)}),t[Mt]=null}};function Bs(e){this._internalRoot=e}Bs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&Bp(e)}};function sc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zd(){}function E1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=hs(s);i.call(u)}}var s=om(t,r,e,0,null,!1,!1,"",zd);return e._reactRootContainer=s,e[Mt]=s.current,So(e.nodeType===8?e.parentNode:e),Bn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=hs(a);l.call(u)}}var a=rc(e,0,!1,null,null,!1,!1,"",zd);return e._reactRootContainer=a,e[Mt]=a.current,So(e.nodeType===8?e.parentNode:e),Bn(function(){zs(t,a,n,r)}),a}function Fs(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var a=hs(s);l.call(a)}}zs(t,s,e,o)}else s=E1(n,t,e,o,r);return hs(s)}Lp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(bu(t,n|1),qe(t,fe()),!(Q&6)&&(Er=fe()+500,vn()))}break;case 13:Bn(function(){var r=Ut(e,1);if(r!==null){var o=Ae();wt(r,e,1,o)}}),oc(e,1)}};$u=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Ae();wt(t,e,134217728,n)}oc(e,134217728)}};Ap=function(e){if(e.tag===13){var t=dn(e),n=Ut(e,t);if(n!==null){var r=Ae();wt(n,e,t,r)}oc(e,t)}};Dp=function(){return G};zp=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};sa=function(e,t,n){switch(t){case"input":if(Zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ts(r);if(!o)throw Error(P(90));hp(r),Zl(r,o)}}}break;case"textarea":gp(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};Ep=Zu;Cp=Bn;var C1={usingClientEntryPoint:!1,Events:[Bo,tr,Ts,Sp,kp,Zu]},Yr={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b1={bundleType:Yr.bundleType,version:Yr.version,rendererPackageName:Yr.rendererPackageName,rendererConfig:Yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_p(e),e===null?null:e.stateNode},findFiberByHostInstance:Yr.findFiberByHostInstance||k1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{$s=ai.inject(b1),Rt=ai}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C1;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sc(t))throw Error(P(200));return S1(e,t,null,n)};et.createRoot=function(e,t){if(!sc(e))throw Error(P(299));var n=!1,r="",o=im;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=rc(e,1,!1,null,null,n,!1,r,o),e[Mt]=t.current,So(e.nodeType===8?e.parentNode:e),new ic(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=_p(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return Bn(e)};et.hydrate=function(e,t,n){if(!Is(t))throw Error(P(200));return Fs(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!sc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=im;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=om(t,null,e,1,n??null,o,!1,i,s),e[Mt]=t.current,So(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Bs(t)};et.render=function(e,t,n){if(!Is(t))throw Error(P(200));return Fs(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!Is(e))throw Error(P(40));return e._reactRootContainer?(Bn(function(){Fs(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};et.unstable_batchedUpdates=Zu;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Is(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Fs(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function sm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sm)}catch(e){console.error(e)}}sm(),sp.exports=et;var $1=sp.exports,Bd=$1;ql.createRoot=Bd.createRoot,ql.hydrateRoot=Bd.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function To(){return To=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},To.apply(this,arguments)}var rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rn||(rn={}));const Id="popstate";function _1(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:l}=r.location;return Ia("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ms(o)}return R1(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function O1(){return Math.random().toString(36).substr(2,8)}function Fd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ia(e,t,n,r){return n===void 0&&(n=null),To({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Nr(t):t,{state:n,key:t&&t.key||r||O1()})}function ms(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Nr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function R1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,l=rn.Pop,a=null,u=c();u==null&&(u=0,s.replaceState(To({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){l=rn.Pop;let $=c(),h=$==null?null:$-u;u=$,a&&a({action:l,location:w.location,delta:h})}function p($,h){l=rn.Push;let m=Ia(w.location,$,h);u=c()+1;let g=Fd(m,u),E=w.createHref(m);try{s.pushState(g,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;o.location.assign(E)}i&&a&&a({action:l,location:w.location,delta:1})}function v($,h){l=rn.Replace;let m=Ia(w.location,$,h);u=c();let g=Fd(m,u),E=w.createHref(m);s.replaceState(g,"",E),i&&a&&a({action:l,location:w.location,delta:0})}function y($){let h=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof $=="string"?$:ms($);return m=m.replace(/ $/,"%20"),pe(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let w={get action(){return l},get location(){return e(o,s)},listen($){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Id,d),a=$,()=>{o.removeEventListener(Id,d),a=null}},createHref($){return t(o,$)},createURL:y,encodeLocation($){let h=y($);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:v,go($){return s.go($)}};return w}var Md;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Md||(Md={}));function T1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Nr(t):t,o=lc(r.pathname||"/",n);if(o==null)return null;let i=am(e);P1(i);let s=null;for(let l=0;s==null&&l<i.length;++l){let a=H1(o);s=F1(i[l],a)}return s}function am(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,l)=>{let a={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};a.relativePath.startsWith("/")&&(pe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=pn([r,a.relativePath]),c=n.concat(a);i.children&&i.children.length>0&&(pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),am(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:B1(u,i.index),routesMeta:c})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,s);else for(let a of um(i.path))o(i,s,a)}),t}function um(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=um(r.join("/")),l=[];return l.push(...s.map(a=>a===""?i:[i,a].join("/"))),o&&l.push(...s),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function P1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:I1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const j1=/^:[\w-]+$/,N1=3,L1=2,A1=1,D1=10,z1=-2,Ud=e=>e==="*";function B1(e,t){let n=e.split("/"),r=n.length;return n.some(Ud)&&(r+=z1),t&&(r+=L1),n.filter(o=>!Ud(o)).reduce((o,i)=>o+(j1.test(i)?N1:i===""?A1:D1),r)}function I1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function F1(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let s=0;s<n.length;++s){let l=n[s],a=s===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=M1({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;i.push({params:r,pathname:pn([o,c.pathname]),pathnameBase:Y1(pn([o,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(o=pn([o,c.pathnameBase]))}return i}function M1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=U1(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:v}=c;if(p==="*"){let w=l[d]||"";s=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[d];return v&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function U1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function H1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return lm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function lc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function W1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Nr(e):e;return{pathname:n?n.startsWith("/")?n:V1(n,t):t,search:K1(r),hash:Q1(o)}}function V1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Pl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function q1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ac(e,t){let n=q1(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function uc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Nr(e):(o=To({},e),pe(!o.pathname||!o.pathname.includes("?"),Pl("?","pathname","search",o)),pe(!o.pathname||!o.pathname.includes("#"),Pl("#","pathname","hash",o)),pe(!o.search||!o.search.includes("#"),Pl("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,l;if(s==null)l=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;o.pathname=p.join("/")}l=d>=0?t[d]:"/"}let a=W1(o,l),u=s&&s!=="/"&&s.endsWith("/"),c=(i||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),Y1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),K1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Q1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function J1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cm=["post","put","patch","delete"];new Set(cm);const G1=["get",...cm];new Set(G1);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Po.apply(this,arguments)}const cc=S.createContext(null),X1=S.createContext(null),wn=S.createContext(null),Ms=S.createContext(null),jt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),dm=S.createContext(null);function Z1(e,t){let{relative:n}=t===void 0?{}:t;Lr()||pe(!1);let{basename:r,navigator:o}=S.useContext(wn),{hash:i,pathname:s,search:l}=hm(e,{relative:n}),a=s;return r!=="/"&&(a=s==="/"?r:pn([r,s])),o.createHref({pathname:a,search:l,hash:i})}function Lr(){return S.useContext(Ms)!=null}function Fo(){return Lr()||pe(!1),S.useContext(Ms).location}function fm(e){S.useContext(wn).static||S.useLayoutEffect(e)}function Ar(){let{isDataRoute:e}=S.useContext(jt);return e?hv():ev()}function ev(){Lr()||pe(!1);let e=S.useContext(cc),{basename:t,future:n,navigator:r}=S.useContext(wn),{matches:o}=S.useContext(jt),{pathname:i}=Fo(),s=JSON.stringify(ac(o,n.v7_relativeSplatPath)),l=S.useRef(!1);return fm(()=>{l.current=!0}),S.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=uc(u,JSON.parse(s),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:pn([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,s,i,e])}const tv=S.createContext(null);function nv(e){let t=S.useContext(jt).outlet;return t&&S.createElement(tv.Provider,{value:e},t)}function pm(){let{matches:e}=S.useContext(jt),t=e[e.length-1];return t?t.params:{}}function hm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(wn),{matches:o}=S.useContext(jt),{pathname:i}=Fo(),s=JSON.stringify(ac(o,r.v7_relativeSplatPath));return S.useMemo(()=>uc(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function rv(e,t){return ov(e,t)}function ov(e,t,n,r){Lr()||pe(!1);let{navigator:o}=S.useContext(wn),{matches:i}=S.useContext(jt),s=i[i.length-1],l=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=Fo(),c;if(t){var d;let $=typeof t=="string"?Nr(t):t;a==="/"||(d=$.pathname)!=null&&d.startsWith(a)||pe(!1),c=$}else c=u;let p=c.pathname||"/",v=p;if(a!=="/"){let $=a.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice($.length).join("/")}let y=T1(e,{pathname:v}),w=uv(y&&y.map($=>Object.assign({},$,{params:Object.assign({},l,$.params),pathname:pn([a,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?a:pn([a,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),i,n,r);return t&&w?S.createElement(Ms.Provider,{value:{location:Po({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:rn.Pop}},w):w}function iv(){let e=pv(),t=J1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:o},n):null,null)}const sv=S.createElement(iv,null);class lv extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(jt.Provider,{value:this.props.routeContext},S.createElement(dm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function av(e){let{routeContext:t,match:n,children:r}=e,o=S.useContext(cc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(jt.Provider,{value:t},r)}function uv(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let c=s.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||pe(!1),s=s.slice(0,Math.min(s.length,c+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:v}=n,y=d.route.loader&&p[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){a=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,p)=>{let v,y=!1,w=null,$=null;n&&(v=l&&d.route.id?l[d.route.id]:void 0,w=d.route.errorElement||sv,a&&(u<0&&p===0?(y=!0,$=null):u===p&&(y=!0,$=d.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,p+1)),m=()=>{let g;return v?g=w:y?g=$:d.route.Component?g=S.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,S.createElement(av,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?S.createElement(lv,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var mm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mm||{}),gs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gs||{});function cv(e){let t=S.useContext(cc);return t||pe(!1),t}function dv(e){let t=S.useContext(X1);return t||pe(!1),t}function fv(e){let t=S.useContext(jt);return t||pe(!1),t}function gm(e){let t=fv(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function pv(){var e;let t=S.useContext(dm),n=dv(gs.UseRouteError),r=gm(gs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function hv(){let{router:e}=cv(mm.UseNavigateStable),t=gm(gs.UseNavigateStable),n=S.useRef(!1);return fm(()=>{n.current=!0}),S.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Po({fromRouteId:t},i)))},[e,t])}function mv(e){let{to:t,replace:n,state:r,relative:o}=e;Lr()||pe(!1);let{future:i,static:s}=S.useContext(wn),{matches:l}=S.useContext(jt),{pathname:a}=Fo(),u=Ar(),c=uc(t,ac(l,i.v7_relativeSplatPath),a,o==="path"),d=JSON.stringify(c);return S.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:o}),[u,d,o,n,r]),null}function gv(e){return nv(e.context)}function bt(e){pe(!1)}function yv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=rn.Pop,navigator:i,static:s=!1,future:l}=e;Lr()&&pe(!1);let a=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:a,navigator:i,static:s,future:Po({v7_relativeSplatPath:!1},l)}),[a,l,i,s]);typeof r=="string"&&(r=Nr(r));let{pathname:c="/",search:d="",hash:p="",state:v=null,key:y="default"}=r,w=S.useMemo(()=>{let $=lc(c,a);return $==null?null:{location:{pathname:$,search:d,hash:p,state:v,key:y},navigationType:o}},[a,c,d,p,v,y,o]);return w==null?null:S.createElement(wn.Provider,{value:u},S.createElement(Ms.Provider,{children:n,value:w}))}function vv(e){let{children:t,location:n}=e;return rv(Fa(t),n)}new Promise(()=>{});function Fa(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,o)=>{if(!S.isValidElement(r))return;let i=[...t,o];if(r.type===S.Fragment){n.push.apply(n,Fa(r.props.children,i));return}r.type!==bt&&pe(!1),!r.props.index||!r.props.children||pe(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Fa(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ma.apply(this,arguments)}function wv(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function xv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Sv(e,t){return e.button===0&&(!t||t==="_self")&&!xv(e)}const kv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ev="6";try{window.__reactRouterVersion=Ev}catch{}const Cv="startTransition",Hd=m0[Cv];function bv(e){let{basename:t,children:n,future:r,window:o}=e,i=S.useRef();i.current==null&&(i.current=_1({window:o,v5Compat:!0}));let s=i.current,[l,a]=S.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=S.useCallback(d=>{u&&Hd?Hd(()=>a(d)):a(d)},[a,u]);return S.useLayoutEffect(()=>s.listen(c),[s,c]),S.createElement(yv,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const $v=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_v=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qt=S.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:l,target:a,to:u,preventScrollReset:c,unstable_viewTransition:d}=t,p=wv(t,kv),{basename:v}=S.useContext(wn),y,w=!1;if(typeof u=="string"&&_v.test(u)&&(y=u,$v))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),R=lc(E.pathname,v);E.origin===g.origin&&R!=null?u=R+E.search+E.hash:w=!0}catch{}let $=Z1(u,{relative:o}),h=Ov(u,{replace:s,state:l,target:a,preventScrollReset:c,relative:o,unstable_viewTransition:d});function m(g){r&&r(g),g.defaultPrevented||h(g)}return S.createElement("a",Ma({},p,{href:y||$,onClick:w||i?r:m,ref:n,target:a}))});var Wd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wd||(Wd={}));var Vd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vd||(Vd={}));function Ov(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:l}=t===void 0?{}:t,a=Ar(),u=Fo(),c=hm(e,{relative:s});return S.useCallback(d=>{if(Sv(d,n)){d.preventDefault();let p=r!==void 0?r:ms(u)===ms(c);a(e,{replace:p,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:l})}},[u,a,c,r,o,n,e,i,s,l])}let Rv={data:""},Tv=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Rv,Pv=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,jv=/\/\*[^]*?\*\/|  +/g,qd=/\n+/g,en=(e,t)=>{let n="",r="",o="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":r+=i[1]=="f"?en(s,i):i+"{"+en(s,i[1]=="k"?"":t)+"}":typeof s=="object"?r+=en(s,t?t.replace(/([^,])+/g,l=>i.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,l):l?l+" "+a:a)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=en.p?en.p(i,s):i+":"+s+";")}return n+(t&&o?t+"{"+o+"}":o)+r},Nt={},ym=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+ym(e[n]);return t}return e},Nv=(e,t,n,r,o)=>{let i=ym(e),s=Nt[i]||(Nt[i]=(a=>{let u=0,c=11;for(;u<a.length;)c=101*c+a.charCodeAt(u++)>>>0;return"go"+c})(i));if(!Nt[s]){let a=i!==e?e:(u=>{let c,d,p=[{}];for(;c=Pv.exec(u.replace(jv,""));)c[4]?p.shift():c[3]?(d=c[3].replace(qd," ").trim(),p.unshift(p[0][d]=p[0][d]||{})):p[0][c[1]]=c[2].replace(qd," ").trim();return p[0]})(e);Nt[s]=en(o?{["@keyframes "+s]:a}:a,n?"":"."+s)}let l=n&&Nt.g?Nt.g:null;return n&&(Nt.g=Nt[s]),((a,u,c,d)=>{d?u.data=u.data.replace(d,a):u.data.indexOf(a)===-1&&(u.data=c?a+u.data:u.data+a)})(Nt[s],t,r,l),s},Lv=(e,t,n)=>e.reduce((r,o,i)=>{let s=t[i];if(s&&s.call){let l=s(n),a=l&&l.props&&l.props.className||/^go/.test(l)&&l;s=a?"."+a:l&&typeof l=="object"?l.props?"":en(l,""):l===!1?"":l}return r+o+(s??"")},"");function Us(e){let t=this||{},n=e.call?e(t.p):e;return Nv(n.unshift?n.raw?Lv(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,Tv(t.target),t.g,t.o,t.k)}let vm,Ua,Ha;Us.bind({g:1});let Wt=Us.bind({k:1});function Av(e,t,n,r){en.p=t,vm=e,Ua=n,Ha=r}function xn(e,t){let n=this||{};return function(){let r=arguments;function o(i,s){let l=Object.assign({},i),a=l.className||o.className;n.p=Object.assign({theme:Ua&&Ua()},l),n.o=/ *go\d+/.test(a),l.className=Us.apply(n,r)+(a?" "+a:"");let u=e;return e[0]&&(u=l.as||e,delete l.as),Ha&&u[0]&&Ha(l),vm(u,l)}return o}}var Dv=e=>typeof e=="function",ys=(e,t)=>Dv(e)?e(t):e,zv=(()=>{let e=0;return()=>(++e).toString()})(),wm=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Bv=20,ji=new Map,Iv=1e3,Yd=e=>{if(ji.has(e))return;let t=setTimeout(()=>{ji.delete(e),Un({type:4,toastId:e})},Iv);ji.set(e,t)},Fv=e=>{let t=ji.get(e);t&&clearTimeout(t)},Wa=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Bv)};case 1:return t.toast.id&&Fv(t.toast.id),{...e,toasts:e.toasts.map(i=>i.id===t.toast.id?{...i,...t.toast}:i)};case 2:let{toast:n}=t;return e.toasts.find(i=>i.id===n.id)?Wa(e,{type:1,toast:n}):Wa(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?Yd(r):e.toasts.forEach(i=>{Yd(i.id)}),{...e,toasts:e.toasts.map(i=>i.id===r||r===void 0?{...i,visible:!1}:i)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(i=>i.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(i=>({...i,pauseDuration:i.pauseDuration+o}))}}},Ni=[],Li={toasts:[],pausedAt:void 0},Un=e=>{Li=Wa(Li,e),Ni.forEach(t=>{t(Li)})},Mv={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Uv=(e={})=>{let[t,n]=S.useState(Li);S.useEffect(()=>(Ni.push(n),()=>{let o=Ni.indexOf(n);o>-1&&Ni.splice(o,1)}),[t]);let r=t.toasts.map(o=>{var i,s;return{...e,...e[o.type],...o,duration:o.duration||((i=e[o.type])==null?void 0:i.duration)||(e==null?void 0:e.duration)||Mv[o.type],style:{...e.style,...(s=e[o.type])==null?void 0:s.style,...o.style}}});return{...t,toasts:r}},Hv=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||zv()}),Mo=e=>(t,n)=>{let r=Hv(t,e,n);return Un({type:2,toast:r}),r.id},Z=(e,t)=>Mo("blank")(e,t);Z.error=Mo("error");Z.success=Mo("success");Z.loading=Mo("loading");Z.custom=Mo("custom");Z.dismiss=e=>{Un({type:3,toastId:e})};Z.remove=e=>Un({type:4,toastId:e});Z.promise=(e,t,n)=>{let r=Z.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(o=>(Z.success(ys(t.success,o),{id:r,...n,...n==null?void 0:n.success}),o)).catch(o=>{Z.error(ys(t.error,o),{id:r,...n,...n==null?void 0:n.error})}),e};var Wv=(e,t)=>{Un({type:1,toast:{id:e,height:t}})},Vv=()=>{Un({type:5,time:Date.now()})},qv=e=>{let{toasts:t,pausedAt:n}=Uv(e);S.useEffect(()=>{if(n)return;let i=Date.now(),s=t.map(l=>{if(l.duration===1/0)return;let a=(l.duration||0)+l.pauseDuration-(i-l.createdAt);if(a<0){l.visible&&Z.dismiss(l.id);return}return setTimeout(()=>Z.dismiss(l.id),a)});return()=>{s.forEach(l=>l&&clearTimeout(l))}},[t,n]);let r=S.useCallback(()=>{n&&Un({type:6,time:Date.now()})},[n]),o=S.useCallback((i,s)=>{let{reverseOrder:l=!1,gutter:a=8,defaultPosition:u}=s||{},c=t.filter(v=>(v.position||u)===(i.position||u)&&v.height),d=c.findIndex(v=>v.id===i.id),p=c.filter((v,y)=>y<d&&v.visible).length;return c.filter(v=>v.visible).slice(...l?[p+1]:[0,p]).reduce((v,y)=>v+(y.height||0)+a,0)},[t]);return{toasts:t,handlers:{updateHeight:Wv,startPause:Vv,endPause:r,calculateOffset:o}}},Yv=Wt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Kv=Wt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Qv=Wt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Jv=xn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Yv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Kv} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Qv} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Gv=Wt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Xv=xn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Gv} 1s linear infinite;
`,Zv=Wt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ew=Wt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,tw=xn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Zv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ew} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,nw=xn("div")`
  position: absolute;
`,rw=xn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ow=Wt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,iw=xn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ow} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,sw=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?S.createElement(iw,null,t):t:n==="blank"?null:S.createElement(rw,null,S.createElement(Xv,{...r}),n!=="loading"&&S.createElement(nw,null,n==="error"?S.createElement(Jv,{...r}):S.createElement(tw,{...r})))},lw=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,aw=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,uw="0%{opacity:0;} 100%{opacity:1;}",cw="0%{opacity:1;} 100%{opacity:0;}",dw=xn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,fw=xn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,pw=(e,t)=>{let n=e.includes("top")?1:-1,[r,o]=wm()?[uw,cw]:[lw(n),aw(n)];return{animation:t?`${Wt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Wt(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},hw=S.memo(({toast:e,position:t,style:n,children:r})=>{let o=e.height?pw(e.position||t||"top-center",e.visible):{opacity:0},i=S.createElement(sw,{toast:e}),s=S.createElement(fw,{...e.ariaProps},ys(e.message,e));return S.createElement(dw,{className:e.className,style:{...o,...n,...e.style}},typeof r=="function"?r({icon:i,message:s}):S.createElement(S.Fragment,null,i,s))});Av(S.createElement);var mw=({id:e,className:t,style:n,onHeightUpdate:r,children:o})=>{let i=S.useCallback(s=>{if(s){let l=()=>{let a=s.getBoundingClientRect().height;r(e,a)};l(),new MutationObserver(l).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return S.createElement("div",{ref:i,className:t,style:n},o)},gw=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:wm()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...o}},yw=Us`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ui=16,vw=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:o,containerStyle:i,containerClassName:s})=>{let{toasts:l,handlers:a}=qv(n);return S.createElement("div",{style:{position:"fixed",zIndex:9999,top:ui,left:ui,right:ui,bottom:ui,pointerEvents:"none",...i},className:s,onMouseEnter:a.startPause,onMouseLeave:a.endPause},l.map(u=>{let c=u.position||t,d=a.calculateOffset(u,{reverseOrder:e,gutter:r,defaultPosition:t}),p=gw(c,d);return S.createElement(mw,{id:u.id,key:u.id,onHeightUpdate:a.updateHeight,className:u.visible?yw:"",style:p},u.type==="custom"?ys(u.message,u):o?o(u):S.createElement(hw,{toast:u,position:c}))}))},xm={exports:{}},ww="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xw=ww,Sw=xw;function Sm(){}function km(){}km.resetWarningCache=Sm;var kw=function(){function e(r,o,i,s,l,a){if(a!==Sw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:km,resetWarningCache:Sm};return n.PropTypes=n,n};xm.exports=kw();var Ew=xm.exports;const Hs=Rr(Ew);function Em(e,t){return function(){return e.apply(t,arguments)}}const{toString:Cw}=Object.prototype,{getPrototypeOf:dc}=Object,Ws=(e=>t=>{const n=Cw.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Et=e=>(e=e.toLowerCase(),t=>Ws(t)===e),Vs=e=>t=>typeof t===e,{isArray:Dr}=Array,jo=Vs("undefined");function bw(e){return e!==null&&!jo(e)&&e.constructor!==null&&!jo(e.constructor)&&at(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Cm=Et("ArrayBuffer");function $w(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Cm(e.buffer),t}const _w=Vs("string"),at=Vs("function"),bm=Vs("number"),qs=e=>e!==null&&typeof e=="object",Ow=e=>e===!0||e===!1,Ai=e=>{if(Ws(e)!=="object")return!1;const t=dc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Rw=Et("Date"),Tw=Et("File"),Pw=Et("Blob"),jw=Et("FileList"),Nw=e=>qs(e)&&at(e.pipe),Lw=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||at(e.append)&&((t=Ws(e))==="formdata"||t==="object"&&at(e.toString)&&e.toString()==="[object FormData]"))},Aw=Et("URLSearchParams"),[Dw,zw,Bw,Iw]=["ReadableStream","Request","Response","Headers"].map(Et),Fw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Uo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Dr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function $m(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const _m=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Om=e=>!jo(e)&&e!==_m;function Va(){const{caseless:e}=Om(this)&&this||{},t={},n=(r,o)=>{const i=e&&$m(t,o)||o;Ai(t[i])&&Ai(r)?t[i]=Va(t[i],r):Ai(r)?t[i]=Va({},r):Dr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Uo(arguments[r],n);return t}const Mw=(e,t,n,{allOwnKeys:r}={})=>(Uo(t,(o,i)=>{n&&at(o)?e[i]=Em(o,n):e[i]=o},{allOwnKeys:r}),e),Uw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Hw=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ww=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&dc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Vw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},qw=e=>{if(!e)return null;if(Dr(e))return e;let t=e.length;if(!bm(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Yw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&dc(Uint8Array)),Kw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Qw=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Jw=Et("HTMLFormElement"),Gw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Kd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Xw=Et("RegExp"),Rm=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Uo(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},Zw=e=>{Rm(e,(t,n)=>{if(at(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(at(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ex=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Dr(e)?r(e):r(String(e).split(t)),n},tx=()=>{},nx=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,jl="abcdefghijklmnopqrstuvwxyz",Qd="0123456789",Tm={DIGIT:Qd,ALPHA:jl,ALPHA_DIGIT:jl+jl.toUpperCase()+Qd},rx=(e=16,t=Tm.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function ox(e){return!!(e&&at(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const ix=e=>{const t=new Array(10),n=(r,o)=>{if(qs(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Dr(r)?[]:{};return Uo(r,(s,l)=>{const a=n(s,o+1);!jo(a)&&(i[l]=a)}),t[o]=void 0,i}}return r};return n(e,0)},sx=Et("AsyncFunction"),lx=e=>e&&(qs(e)||at(e))&&at(e.then)&&at(e.catch),b={isArray:Dr,isArrayBuffer:Cm,isBuffer:bw,isFormData:Lw,isArrayBufferView:$w,isString:_w,isNumber:bm,isBoolean:Ow,isObject:qs,isPlainObject:Ai,isReadableStream:Dw,isRequest:zw,isResponse:Bw,isHeaders:Iw,isUndefined:jo,isDate:Rw,isFile:Tw,isBlob:Pw,isRegExp:Xw,isFunction:at,isStream:Nw,isURLSearchParams:Aw,isTypedArray:Yw,isFileList:jw,forEach:Uo,merge:Va,extend:Mw,trim:Fw,stripBOM:Uw,inherits:Hw,toFlatObject:Ww,kindOf:Ws,kindOfTest:Et,endsWith:Vw,toArray:qw,forEachEntry:Kw,matchAll:Qw,isHTMLForm:Jw,hasOwnProperty:Kd,hasOwnProp:Kd,reduceDescriptors:Rm,freezeMethods:Zw,toObjectSet:ex,toCamelCase:Gw,noop:tx,toFiniteNumber:nx,findKey:$m,global:_m,isContextDefined:Om,ALPHABET:Tm,generateString:rx,isSpecCompliantForm:ox,toJSONObject:ix,isAsyncFn:sx,isThenable:lx};function H(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}b.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Pm=H.prototype,jm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{jm[e]={value:e}});Object.defineProperties(H,jm);Object.defineProperty(Pm,"isAxiosError",{value:!0});H.from=(e,t,n,r,o,i)=>{const s=Object.create(Pm);return b.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),H.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const ax=null;function qa(e){return b.isPlainObject(e)||b.isArray(e)}function Nm(e){return b.endsWith(e,"[]")?e.slice(0,-2):e}function Jd(e,t,n){return e?e.concat(t).map(function(o,i){return o=Nm(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function ux(e){return b.isArray(e)&&!e.some(qa)}const cx=b.toFlatObject(b,{},null,function(t){return/^is[A-Z]/.test(t)});function Ys(e,t,n){if(!b.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,$){return!b.isUndefined($[w])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(t);if(!b.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(b.isDate(y))return y.toISOString();if(!a&&b.isBlob(y))throw new H("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(y)||b.isTypedArray(y)?a&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,w,$){let h=y;if(y&&!$&&typeof y=="object"){if(b.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(b.isArray(y)&&ux(y)||(b.isFileList(y)||b.endsWith(w,"[]"))&&(h=b.toArray(y)))return w=Nm(w),h.forEach(function(g,E){!(b.isUndefined(g)||g===null)&&t.append(s===!0?Jd([w],E,i):s===null?w:w+"[]",u(g))}),!1}return qa(y)?!0:(t.append(Jd($,w,i),u(y)),!1)}const d=[],p=Object.assign(cx,{defaultVisitor:c,convertValue:u,isVisitable:qa});function v(y,w){if(!b.isUndefined(y)){if(d.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));d.push(y),b.forEach(y,function(h,m){(!(b.isUndefined(h)||h===null)&&o.call(t,h,b.isString(m)?m.trim():m,w,p))===!0&&v(h,w?w.concat(m):[m])}),d.pop()}}if(!b.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Gd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function fc(e,t){this._pairs=[],e&&Ys(e,this,t)}const Lm=fc.prototype;Lm.append=function(t,n){this._pairs.push([t,n])};Lm.toString=function(t){const n=t?function(r){return t.call(this,r,Gd)}:Gd;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function dx(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Am(e,t,n){if(!t)return e;const r=n&&n.encode||dx,o=n&&n.serialize;let i;if(o?i=o(t,n):i=b.isURLSearchParams(t)?t.toString():new fc(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Xd{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){b.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Dm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fx=typeof URLSearchParams<"u"?URLSearchParams:fc,px=typeof FormData<"u"?FormData:null,hx=typeof Blob<"u"?Blob:null,mx={isBrowser:!0,classes:{URLSearchParams:fx,FormData:px,Blob:hx},protocols:["http","https","file","blob","url","data"]},pc=typeof window<"u"&&typeof document<"u",gx=(e=>pc&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),yx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",vx=pc&&window.location.href||"http://localhost",wx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pc,hasStandardBrowserEnv:gx,hasStandardBrowserWebWorkerEnv:yx,origin:vx},Symbol.toStringTag,{value:"Module"})),xt={...wx,...mx};function xx(e,t){return Ys(e,new xt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return xt.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Sx(e){return b.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function kx(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function zm(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),a=i>=n.length;return s=!s&&b.isArray(o)?o.length:s,a?(b.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!b.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&b.isArray(o[s])&&(o[s]=kx(o[s])),!l)}if(b.isFormData(e)&&b.isFunction(e.entries)){const n={};return b.forEachEntry(e,(r,o)=>{t(Sx(r),o,n,0)}),n}return null}function Ex(e,t,n){if(b.isString(e))try{return(t||JSON.parse)(e),b.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ho={transitional:Dm,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=b.isObject(t);if(i&&b.isHTMLForm(t)&&(t=new FormData(t)),b.isFormData(t))return o?JSON.stringify(zm(t)):t;if(b.isArrayBuffer(t)||b.isBuffer(t)||b.isStream(t)||b.isFile(t)||b.isBlob(t)||b.isReadableStream(t))return t;if(b.isArrayBufferView(t))return t.buffer;if(b.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return xx(t,this.formSerializer).toString();if((l=b.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Ys(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Ex(t)):t}],transformResponse:[function(t){const n=this.transitional||Ho.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(b.isResponse(t)||b.isReadableStream(t))return t;if(t&&b.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?H.from(l,H.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:xt.classes.FormData,Blob:xt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};b.forEach(["delete","get","head","post","put","patch"],e=>{Ho.headers[e]={}});const Cx=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bx=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&Cx[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Zd=Symbol("internals");function Kr(e){return e&&String(e).trim().toLowerCase()}function Di(e){return e===!1||e==null?e:b.isArray(e)?e.map(Di):String(e)}function $x(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const _x=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Nl(e,t,n,r,o){if(b.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!b.isString(t)){if(b.isString(r))return t.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(t)}}function Ox(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Rx(e,t){const n=b.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class Ye{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,a,u){const c=Kr(a);if(!c)throw new Error("header name must be a non-empty string");const d=b.findKey(o,c);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||a]=Di(l))}const s=(l,a)=>b.forEach(l,(u,c)=>i(u,c,a));if(b.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(b.isString(t)&&(t=t.trim())&&!_x(t))s(bx(t),n);else if(b.isHeaders(t))for(const[l,a]of t.entries())i(a,l,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Kr(t),t){const r=b.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return $x(o);if(b.isFunction(n))return n.call(this,o,r);if(b.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Kr(t),t){const r=b.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Nl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Kr(s),s){const l=b.findKey(r,s);l&&(!n||Nl(r,r[l],l,n))&&(delete r[l],o=!0)}}return b.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Nl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return b.forEach(this,(o,i)=>{const s=b.findKey(r,i);if(s){n[s]=Di(o),delete n[i];return}const l=t?Ox(i):String(i).trim();l!==i&&delete n[i],n[l]=Di(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return b.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&b.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Zd]=this[Zd]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=Kr(s);r[l]||(Rx(o,s),r[l]=!0)}return b.isArray(t)?t.forEach(i):i(t),this}}Ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.reduceDescriptors(Ye.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});b.freezeMethods(Ye);function Ll(e,t){const n=this||Ho,r=t||n,o=Ye.from(r.headers);let i=r.data;return b.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Bm(e){return!!(e&&e.__CANCEL__)}function zr(e,t,n){H.call(this,e??"canceled",H.ERR_CANCELED,t,n),this.name="CanceledError"}b.inherits(zr,H,{__CANCEL__:!0});function Im(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new H("Request failed with status code "+n.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Tx(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Px(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),c=r[i];s||(s=u),n[o]=a,r[o]=u;let d=i,p=0;for(;d!==o;)p+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const v=c&&u-c;return v?Math.round(p*1e3/v):void 0}}function jx(e,t){let n=0;const r=1e3/t;let o=null;return function(){const s=this===!0,l=Date.now();if(s||l-n>r)return o&&(clearTimeout(o),o=null),n=l,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(l-n)))}}const vs=(e,t,n=3)=>{let r=0;const o=Px(50,250);return jx(i=>{const s=i.loaded,l=i.lengthComputable?i.total:void 0,a=s-r,u=o(a),c=s<=l;r=s;const d={loaded:s,total:l,progress:l?s/l:void 0,bytes:a,rate:u||void 0,estimated:u&&l&&c?(l-s)/u:void 0,event:i,lengthComputable:l!=null};d[t?"download":"upload"]=!0,e(d)},n)},Nx=xt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const l=b.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),Lx=xt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];b.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),b.isString(r)&&s.push("path="+r),b.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ax(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Dx(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Fm(e,t){return e&&!Ax(t)?Dx(e,t):t}const ef=e=>e instanceof Ye?{...e}:e;function In(e,t){t=t||{};const n={};function r(u,c,d){return b.isPlainObject(u)&&b.isPlainObject(c)?b.merge.call({caseless:d},u,c):b.isPlainObject(c)?b.merge({},c):b.isArray(c)?c.slice():c}function o(u,c,d){if(b.isUndefined(c)){if(!b.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function i(u,c){if(!b.isUndefined(c))return r(void 0,c)}function s(u,c){if(b.isUndefined(c)){if(!b.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const a={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,c)=>o(ef(u),ef(c),!0)};return b.forEach(Object.keys(Object.assign({},e,t)),function(c){const d=a[c]||o,p=d(e[c],t[c],c);b.isUndefined(p)&&d!==l||(n[c]=p)}),n}const Mm=e=>{const t=In({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:l}=t;t.headers=s=Ye.from(s),t.url=Am(Fm(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let a;if(b.isFormData(n)){if(xt.hasStandardBrowserEnv||xt.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((a=s.getContentType())!==!1){const[u,...c]=a?a.split(";").map(d=>d.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...c].join("; "))}}if(xt.hasStandardBrowserEnv&&(r&&b.isFunction(r)&&(r=r(t)),r||r!==!1&&Nx(t.url))){const u=o&&i&&Lx.read(i);u&&s.set(o,u)}return t},zx=typeof XMLHttpRequest<"u",Bx=zx&&function(e){return new Promise(function(n,r){const o=Mm(e);let i=o.data;const s=Ye.from(o.headers).normalize();let{responseType:l}=o,a;function u(){o.cancelToken&&o.cancelToken.unsubscribe(a),o.signal&&o.signal.removeEventListener("abort",a)}let c=new XMLHttpRequest;c.open(o.method.toUpperCase(),o.url,!0),c.timeout=o.timeout;function d(){if(!c)return;const v=Ye.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!l||l==="text"||l==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:v,config:e,request:c};Im(function(h){n(h),u()},function(h){r(h),u()},w),c=null}"onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(r(new H("Request aborted",H.ECONNABORTED,o,c)),c=null)},c.onerror=function(){r(new H("Network Error",H.ERR_NETWORK,o,c)),c=null},c.ontimeout=function(){let y=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const w=o.transitional||Dm;o.timeoutErrorMessage&&(y=o.timeoutErrorMessage),r(new H(y,w.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,o,c)),c=null},i===void 0&&s.setContentType(null),"setRequestHeader"in c&&b.forEach(s.toJSON(),function(y,w){c.setRequestHeader(w,y)}),b.isUndefined(o.withCredentials)||(c.withCredentials=!!o.withCredentials),l&&l!=="json"&&(c.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&c.addEventListener("progress",vs(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",vs(o.onUploadProgress)),(o.cancelToken||o.signal)&&(a=v=>{c&&(r(!v||v.type?new zr(null,e,c):v),c.abort(),c=null)},o.cancelToken&&o.cancelToken.subscribe(a),o.signal&&(o.signal.aborted?a():o.signal.addEventListener("abort",a)));const p=Tx(o.url);if(p&&xt.protocols.indexOf(p)===-1){r(new H("Unsupported protocol "+p+":",H.ERR_BAD_REQUEST,e));return}c.send(i||null)})},Ix=(e,t)=>{let n=new AbortController,r;const o=function(a){if(!r){r=!0,s();const u=a instanceof Error?a:this.reason;n.abort(u instanceof H?u:new zr(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{o(new H(`timeout ${t} of ms exceeded`,H.ETIMEDOUT))},t);const s=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(a=>{a&&(a.removeEventListener?a.removeEventListener("abort",o):a.unsubscribe(o))}),e=null)};e.forEach(a=>a&&a.addEventListener&&a.addEventListener("abort",o));const{signal:l}=n;return l.unsubscribe=s,[l,()=>{i&&clearTimeout(i),i=null}]},Fx=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},Mx=async function*(e,t,n){for await(const r of e)yield*Fx(ArrayBuffer.isView(r)?r:await n(String(r)),t)},tf=(e,t,n,r,o)=>{const i=Mx(e,t,o);let s=0;return new ReadableStream({type:"bytes",async pull(l){const{done:a,value:u}=await i.next();if(a){l.close(),r();return}let c=u.byteLength;n&&n(s+=c),l.enqueue(new Uint8Array(u))},cancel(l){return r(l),i.return()}},{highWaterMark:2})},nf=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},Ks=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Um=Ks&&typeof ReadableStream=="function",Ya=Ks&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ux=Um&&(()=>{let e=!1;const t=new Request(xt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),rf=64*1024,Ka=Um&&!!(()=>{try{return b.isReadableStream(new Response("").body)}catch{}})(),ws={stream:Ka&&(e=>e.body)};Ks&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!ws[t]&&(ws[t]=b.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new H(`Response type '${t}' is not supported`,H.ERR_NOT_SUPPORT,r)})})})(new Response);const Hx=async e=>{if(e==null)return 0;if(b.isBlob(e))return e.size;if(b.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(b.isArrayBufferView(e))return e.byteLength;if(b.isURLSearchParams(e)&&(e=e+""),b.isString(e))return(await Ya(e)).byteLength},Wx=async(e,t)=>{const n=b.toFiniteNumber(e.getContentLength());return n??Hx(t)},Vx=Ks&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:l,onUploadProgress:a,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:p}=Mm(e);u=u?(u+"").toLowerCase():"text";let[v,y]=o||i||s?Ix([o,i],s):[],w,$;const h=()=>{!w&&setTimeout(()=>{v&&v.unsubscribe()}),w=!0};let m;try{if(a&&Ux&&n!=="get"&&n!=="head"&&(m=await Wx(c,r))!==0){let _=new Request(t,{method:"POST",body:r,duplex:"half"}),O;b.isFormData(r)&&(O=_.headers.get("content-type"))&&c.setContentType(O),_.body&&(r=tf(_.body,rf,nf(m,vs(a)),null,Ya))}b.isString(d)||(d=d?"cors":"omit"),$=new Request(t,{...p,signal:v,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:d});let g=await fetch($);const E=Ka&&(u==="stream"||u==="response");if(Ka&&(l||E)){const _={};["status","statusText","headers"].forEach(L=>{_[L]=g[L]});const O=b.toFiniteNumber(g.headers.get("content-length"));g=new Response(tf(g.body,rf,l&&nf(O,vs(l,!0)),E&&h,Ya),_)}u=u||"text";let R=await ws[b.findKey(ws,u)||"text"](g,e);return!E&&h(),y&&y(),await new Promise((_,O)=>{Im(_,O,{data:R,headers:Ye.from(g.headers),status:g.status,statusText:g.statusText,config:e,request:$})})}catch(g){throw h(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new H("Network Error",H.ERR_NETWORK,e,$),{cause:g.cause||g}):H.from(g,g&&g.code,e,$)}}),Qa={http:ax,xhr:Bx,fetch:Vx};b.forEach(Qa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const of=e=>`- ${e}`,qx=e=>b.isFunction(e)||e===null||e===!1,Hm={getAdapter:e=>{e=b.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!qx(n)&&(r=Qa[(s=String(n)).toLowerCase()],r===void 0))throw new H(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(of).join(`
`):" "+of(i[0]):"as no adapter specified";throw new H("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Qa};function Al(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new zr(null,e)}function sf(e){return Al(e),e.headers=Ye.from(e.headers),e.data=Ll.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Hm.getAdapter(e.adapter||Ho.adapter)(e).then(function(r){return Al(e),r.data=Ll.call(e,e.transformResponse,r),r.headers=Ye.from(r.headers),r},function(r){return Bm(r)||(Al(e),r&&r.response&&(r.response.data=Ll.call(e,e.transformResponse,r.response),r.response.headers=Ye.from(r.response.headers))),Promise.reject(r)})}const Wm="1.7.2",hc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{hc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const lf={};hc.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Wm+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new H(o(s," has been removed"+(n?" in "+n:"")),H.ERR_DEPRECATED);return n&&!lf[s]&&(lf[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,l):!0}};function Yx(e,t,n){if(typeof e!="object")throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],a=l===void 0||s(l,i,e);if(a!==!0)throw new H("option "+i+" must be "+a,H.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new H("Unknown option "+i,H.ERR_BAD_OPTION)}}const Ja={assertOptions:Yx,validators:hc},Kt=Ja.validators;class Tn{constructor(t){this.defaults=t,this.interceptors={request:new Xd,response:new Xd}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=In(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Ja.assertOptions(r,{silentJSONParsing:Kt.transitional(Kt.boolean),forcedJSONParsing:Kt.transitional(Kt.boolean),clarifyTimeoutError:Kt.transitional(Kt.boolean)},!1),o!=null&&(b.isFunction(o)?n.paramsSerializer={serialize:o}:Ja.assertOptions(o,{encode:Kt.function,serialize:Kt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&b.merge(i.common,i[n.method]);i&&b.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Ye.concat(s,i);const l=[];let a=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(a=a&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let c,d=0,p;if(!a){const y=[sf.bind(this),void 0];for(y.unshift.apply(y,l),y.push.apply(y,u),p=y.length,c=Promise.resolve(n);d<p;)c=c.then(y[d++],y[d++]);return c}p=l.length;let v=n;for(d=0;d<p;){const y=l[d++],w=l[d++];try{v=y(v)}catch($){w.call(this,$);break}}try{c=sf.call(this,v)}catch(y){return Promise.reject(y)}for(d=0,p=u.length;d<p;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=In(this.defaults,t);const n=Fm(t.baseURL,t.url);return Am(n,t.params,t.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(t){Tn.prototype[t]=function(n,r){return this.request(In(r||{},{method:t,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(In(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Tn.prototype[t]=n(),Tn.prototype[t+"Form"]=n(!0)});class mc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new zr(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new mc(function(o){t=o}),cancel:t}}}function Kx(e){return function(n){return e.apply(null,n)}}function Qx(e){return b.isObject(e)&&e.isAxiosError===!0}const Ga={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ga).forEach(([e,t])=>{Ga[t]=e});function Vm(e){const t=new Tn(e),n=Em(Tn.prototype.request,t);return b.extend(n,Tn.prototype,t,{allOwnKeys:!0}),b.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Vm(In(e,o))},n}const V=Vm(Ho);V.Axios=Tn;V.CanceledError=zr;V.CancelToken=mc;V.isCancel=Bm;V.VERSION=Wm;V.toFormData=Ys;V.AxiosError=H;V.Cancel=V.CanceledError;V.all=function(t){return Promise.all(t)};V.spread=Kx;V.isAxiosError=Qx;V.mergeConfig=In;V.AxiosHeaders=Ye;V.formToJSON=e=>zm(b.isHTMLForm(e)?new FormData(e):e);V.getAdapter=Hm.getAdapter;V.HttpStatusCode=Ga;V.default=V;const Pt=Object.create(null);Pt.open="0";Pt.close="1";Pt.ping="2";Pt.pong="3";Pt.message="4";Pt.upgrade="5";Pt.noop="6";const zi=Object.create(null);Object.keys(Pt).forEach(e=>{zi[Pt[e]]=e});const Xa={type:"error",data:"parser error"},qm=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Ym=typeof ArrayBuffer=="function",Km=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,gc=({type:e,data:t},n,r)=>qm&&t instanceof Blob?n?r(t):af(t,r):Ym&&(t instanceof ArrayBuffer||Km(t))?n?r(t):af(new Blob([t]),r):r(Pt[e]+(t||"")),af=(e,t)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];t("b"+(r||""))},n.readAsDataURL(e)};function uf(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Dl;function Jx(e,t){if(qm&&e.data instanceof Blob)return e.data.arrayBuffer().then(uf).then(t);if(Ym&&(e.data instanceof ArrayBuffer||Km(e.data)))return t(uf(e.data));gc(e,!1,n=>{Dl||(Dl=new TextEncoder),t(Dl.encode(n))})}const cf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",eo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<cf.length;e++)eo[cf.charCodeAt(e)]=e;const Gx=e=>{let t=e.length*.75,n=e.length,r,o=0,i,s,l,a;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const u=new ArrayBuffer(t),c=new Uint8Array(u);for(r=0;r<n;r+=4)i=eo[e.charCodeAt(r)],s=eo[e.charCodeAt(r+1)],l=eo[e.charCodeAt(r+2)],a=eo[e.charCodeAt(r+3)],c[o++]=i<<2|s>>4,c[o++]=(s&15)<<4|l>>2,c[o++]=(l&3)<<6|a&63;return u},Xx=typeof ArrayBuffer=="function",yc=(e,t)=>{if(typeof e!="string")return{type:"message",data:Qm(e,t)};const n=e.charAt(0);return n==="b"?{type:"message",data:Zx(e.substring(1),t)}:zi[n]?e.length>1?{type:zi[n],data:e.substring(1)}:{type:zi[n]}:Xa},Zx=(e,t)=>{if(Xx){const n=Gx(e);return Qm(n,t)}else return{base64:!0,data:e}},Qm=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Jm="",eS=(e,t)=>{const n=e.length,r=new Array(n);let o=0;e.forEach((i,s)=>{gc(i,!1,l=>{r[s]=l,++o===n&&t(r.join(Jm))})})},tS=(e,t)=>{const n=e.split(Jm),r=[];for(let o=0;o<n.length;o++){const i=yc(n[o],t);if(r.push(i),i.type==="error")break}return r};function nS(){return new TransformStream({transform(e,t){Jx(e,n=>{const r=n.length;let o;if(r<126)o=new Uint8Array(1),new DataView(o.buffer).setUint8(0,r);else if(r<65536){o=new Uint8Array(3);const i=new DataView(o.buffer);i.setUint8(0,126),i.setUint16(1,r)}else{o=new Uint8Array(9);const i=new DataView(o.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(r))}e.data&&typeof e.data!="string"&&(o[0]|=128),t.enqueue(o),t.enqueue(n)})}})}let zl;function ci(e){return e.reduce((t,n)=>t+n.length,0)}function di(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let r=0;for(let o=0;o<t;o++)n[o]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function rS(e,t){zl||(zl=new TextDecoder);const n=[];let r=0,o=-1,i=!1;return new TransformStream({transform(s,l){for(n.push(s);;){if(r===0){if(ci(n)<1)break;const a=di(n,1);i=(a[0]&128)===128,o=a[0]&127,o<126?r=3:o===126?r=1:r=2}else if(r===1){if(ci(n)<2)break;const a=di(n,2);o=new DataView(a.buffer,a.byteOffset,a.length).getUint16(0),r=3}else if(r===2){if(ci(n)<8)break;const a=di(n,8),u=new DataView(a.buffer,a.byteOffset,a.length),c=u.getUint32(0);if(c>Math.pow(2,21)-1){l.enqueue(Xa);break}o=c*Math.pow(2,32)+u.getUint32(4),r=3}else{if(ci(n)<o)break;const a=di(n,o);l.enqueue(yc(i?a:zl.decode(a),t)),r=0}if(o===0||o>e){l.enqueue(Xa);break}}}})}const Gm=4;function ye(e){if(e)return oS(e)}function oS(e){for(var t in ye.prototype)e[t]=ye.prototype[t];return e}ye.prototype.on=ye.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};ye.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this};ye.prototype.off=ye.prototype.removeListener=ye.prototype.removeAllListeners=ye.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===t||r.fn===t){n.splice(o,1);break}return n.length===0&&delete this._callbacks["$"+e],this};ye.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,t)}return this};ye.prototype.emitReserved=ye.prototype.emit;ye.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};ye.prototype.hasListeners=function(e){return!!this.listeners(e).length};const it=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function Xm(e,...t){return t.reduce((n,r)=>(e.hasOwnProperty(r)&&(n[r]=e[r]),n),{})}const iS=it.setTimeout,sS=it.clearTimeout;function Qs(e,t){t.useNativeTimers?(e.setTimeoutFn=iS.bind(it),e.clearTimeoutFn=sS.bind(it)):(e.setTimeoutFn=it.setTimeout.bind(it),e.clearTimeoutFn=it.clearTimeout.bind(it))}const lS=1.33;function aS(e){return typeof e=="string"?uS(e):Math.ceil((e.byteLength||e.size)*lS)}function uS(e){let t=0,n=0;for(let r=0,o=e.length;r<o;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}function cS(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}function dS(e){let t={},n=e.split("&");for(let r=0,o=n.length;r<o;r++){let i=n[r].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t}class fS extends Error{constructor(t,n,r){super(t),this.description=n,this.context=r,this.type="TransportError"}}class vc extends ye{constructor(t){super(),this.writable=!1,Qs(this,t),this.opts=t,this.query=t.query,this.socket=t.socket}onError(t,n,r){return super.emitReserved("error",new fS(t,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const n=yc(t,this.socket.binaryType);this.onPacket(n)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,n={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const n=cS(t);return n.length?"?"+n:""}}const Zm="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),Za=64,pS={};let df=0,fi=0,ff;function pf(e){let t="";do t=Zm[e%Za]+t,e=Math.floor(e/Za);while(e>0);return t}function eg(){const e=pf(+new Date);return e!==ff?(df=0,ff=e):e+"."+pf(df++)}for(;fi<Za;fi++)pS[Zm[fi]]=fi;let tg=!1;try{tg=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const hS=tg;function ng(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||hS))return new XMLHttpRequest}catch{}if(!t)try{return new it[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function mS(){}const gS=function(){return new ng({xdomain:!1}).responseType!=null}();class yS extends vc{constructor(t){if(super(t),this.polling=!1,typeof location<"u"){const r=location.protocol==="https:";let o=location.port;o||(o=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||o!==t.port}const n=t&&t.forceBase64;this.supportsBinary=gS&&!n,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";const n=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};tS(t,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,eS(t,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=eg()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(t,n)}request(t={}){return Object.assign(t,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new gr(this.uri(),t)}doWrite(t,n){const r=this.request({method:"POST",data:t});r.on("success",n),r.on("error",(o,i)=>{this.onError("xhr post error",o,i)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=t}}let gr=class Bi extends ye{constructor(t,n){super(),Qs(this,n),this.opts=n,this.method=n.method||"GET",this.uri=t,this.data=n.data!==void 0?n.data:null,this.create()}create(){var t;const n=Xm(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this.opts.xd;const r=this.xhr=new ng(n);try{r.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let o in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(o)&&r.setRequestHeader(o,this.opts.extraHeaders[o])}}catch{}if(this.method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(t=this.opts.cookieJar)===null||t===void 0||t.addCookies(r),"withCredentials"in r&&(r.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(r.timeout=this.opts.requestTimeout),r.onreadystatechange=()=>{var o;r.readyState===3&&((o=this.opts.cookieJar)===null||o===void 0||o.parseCookies(r)),r.readyState===4&&(r.status===200||r.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof r.status=="number"?r.status:0)},0))},r.send(this.data)}catch(o){this.setTimeoutFn(()=>{this.onError(o)},0);return}typeof document<"u"&&(this.index=Bi.requestsCount++,Bi.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=mS,t)try{this.xhr.abort()}catch{}typeof document<"u"&&delete Bi.requests[this.index],this.xhr=null}}onLoad(){const t=this.xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}};gr.requestsCount=0;gr.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",hf);else if(typeof addEventListener=="function"){const e="onpagehide"in it?"pagehide":"unload";addEventListener(e,hf,!1)}}function hf(){for(let e in gr.requests)gr.requests.hasOwnProperty(e)&&gr.requests[e].abort()}const wc=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,n)=>n(t,0),pi=it.WebSocket||it.MozWebSocket,mf=!0,vS="arraybuffer",gf=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class wS extends vc{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const t=this.uri(),n=this.opts.protocols,r=gf?{}:Xm(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=mf&&!gf?n?new pi(t,n):new pi(t):new pi(t,n,r)}catch(o){return this.emitReserved("error",o)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],o=n===t.length-1;gc(r,this.supportsBinary,i=>{const s={};try{mf&&this.ws.send(i)}catch{}o&&wc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=eg()),this.supportsBinary||(n.b64=1),this.createUri(t,n)}check(){return!!pi}}class xS extends vc{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(t=>{const n=rS(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=t.readable.pipeThrough(n).getReader(),o=nS();o.readable.pipeTo(t.writable),this.writer=o.writable.getWriter();const i=()=>{r.read().then(({done:l,value:a})=>{l||(this.onPacket(a),i())}).catch(l=>{})};i();const s={type:"open"};this.query.sid&&(s.data=`{"sid":"${this.query.sid}"}`),this.writer.write(s).then(()=>this.onOpen())})}))}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],o=n===t.length-1;this.writer.write(r).then(()=>{o&&wc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this.transport)===null||t===void 0||t.close()}}const SS={websocket:wS,webtransport:xS,polling:yS},kS=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ES=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function eu(e){if(e.length>2e3)throw"URI too long";const t=e,n=e.indexOf("["),r=e.indexOf("]");n!=-1&&r!=-1&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let o=kS.exec(e||""),i={},s=14;for(;s--;)i[ES[s]]=o[s]||"";return n!=-1&&r!=-1&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=CS(i,i.path),i.queryKey=bS(i,i.query),i}function CS(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&r.splice(0,1),t.slice(-1)=="/"&&r.splice(r.length-1,1),r}function bS(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,o,i){o&&(n[o]=i)}),n}let rg=class Qn extends ye{constructor(t,n={}){super(),this.binaryType=vS,this.writeBuffer=[],t&&typeof t=="object"&&(n=t,t=null),t?(t=eu(t),n.hostname=t.host,n.secure=t.protocol==="https"||t.protocol==="wss",n.port=t.port,t.query&&(n.query=t.query)):n.host&&(n.hostname=eu(n.host).host),Qs(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=n.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=dS(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const n=Object.assign({},this.opts.query);n.EIO=Gm,n.transport=t,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new SS[t](r)}open(){let t;if(this.opts.rememberUpgrade&&Qn.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else t=this.transports[0];this.readyState="opening";try{t=this.createTransport(t)}catch{this.transports.shift(),this.open();return}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",n=>this.onClose("transport close",n))}probe(t){let n=this.createTransport(t),r=!1;Qn.priorWebsocketSuccess=!1;const o=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",d=>{if(!r)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Qn.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(c(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const p=new Error("probe error");p.transport=n.name,this.emitReserved("upgradeError",p)}}))};function i(){r||(r=!0,c(),n.close(),n=null)}const s=d=>{const p=new Error("probe error: "+d);p.transport=n.name,i(),this.emitReserved("upgradeError",p)};function l(){s("transport closed")}function a(){s("socket closed")}function u(d){n&&d.name!==n.name&&i()}const c=()=>{n.removeListener("open",o),n.removeListener("error",s),n.removeListener("close",l),this.off("close",a),this.off("upgrading",u)};n.once("open",o),n.once("error",s),n.once("close",l),this.once("close",a),this.once("upgrading",u),this.upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onOpen(){if(this.readyState="open",Qn.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let t=0;const n=this.upgrades.length;for(;t<n;t++)this.probe(this.upgrades[t])}}onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),this.resetPingTimeout(),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const n=new Error("server error");n.code=t.data,this.onError(n);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const o=this.writeBuffer[r].data;if(o&&(n+=aS(o)),r>0&&n>this.maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}write(t,n,r){return this.sendPacket("message",t,n,r),this}send(t,n,r){return this.sendPacket("message",t,n,r),this}sendPacket(t,n,r,o){if(typeof n=="function"&&(o=n,n=void 0),typeof r=="function"&&(o=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const i={type:t,data:n,options:r};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),o&&this.once("flush",o),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),t()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():t()}):this.upgrading?r():t()),this}onError(t){Qn.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,n){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,n),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const n=[];let r=0;const o=t.length;for(;r<o;r++)~this.transports.indexOf(t[r])&&n.push(t[r]);return n}};rg.protocol=Gm;function $S(e,t="",n){let r=e;n=n||typeof location<"u"&&location,e==null&&(e=n.protocol+"//"+n.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=n.protocol+e:e=n.host+e),/^(https?|wss?):\/\//.test(e)||(typeof n<"u"?e=n.protocol+"//"+e:e="https://"+e),r=eu(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const i=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+t,r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r}const _S=typeof ArrayBuffer=="function",OS=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,og=Object.prototype.toString,RS=typeof Blob=="function"||typeof Blob<"u"&&og.call(Blob)==="[object BlobConstructor]",TS=typeof File=="function"||typeof File<"u"&&og.call(File)==="[object FileConstructor]";function xc(e){return _S&&(e instanceof ArrayBuffer||OS(e))||RS&&e instanceof Blob||TS&&e instanceof File}function Ii(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let n=0,r=e.length;n<r;n++)if(Ii(e[n]))return!0;return!1}if(xc(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return Ii(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&Ii(e[n]))return!0;return!1}function PS(e){const t=[],n=e.data,r=e;return r.data=tu(n,t),r.attachments=t.length,{packet:r,buffers:t}}function tu(e,t){if(!e)return e;if(xc(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=tu(e[r],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=tu(e[r],t));return n}return e}function jS(e,t){return e.data=nu(e.data,t),delete e.attachments,e}function nu(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=nu(e[n],t);else if(typeof e=="object")for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=nu(e[n],t));return e}const NS=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],LS=5;var Y;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(Y||(Y={}));class AS{constructor(t){this.replacer=t}encode(t){return(t.type===Y.EVENT||t.type===Y.ACK)&&Ii(t)?this.encodeAsBinary({type:t.type===Y.EVENT?Y.BINARY_EVENT:Y.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let n=""+t.type;return(t.type===Y.BINARY_EVENT||t.type===Y.BINARY_ACK)&&(n+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(n+=t.nsp+","),t.id!=null&&(n+=t.id),t.data!=null&&(n+=JSON.stringify(t.data,this.replacer)),n}encodeAsBinary(t){const n=PS(t),r=this.encodeAsString(n.packet),o=n.buffers;return o.unshift(r),o}}function yf(e){return Object.prototype.toString.call(e)==="[object Object]"}class Sc extends ye{constructor(t){super(),this.reviver=t}add(t){let n;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(t);const r=n.type===Y.BINARY_EVENT;r||n.type===Y.BINARY_ACK?(n.type=r?Y.EVENT:Y.ACK,this.reconstructor=new DS(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(xc(t)||t.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let n=0;const r={type:Number(t.charAt(0))};if(Y[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===Y.BINARY_EVENT||r.type===Y.BINARY_ACK){const i=n+1;for(;t.charAt(++n)!=="-"&&n!=t.length;);const s=t.substring(i,n);if(s!=Number(s)||t.charAt(n)!=="-")throw new Error("Illegal attachments");r.attachments=Number(s)}if(t.charAt(n+1)==="/"){const i=n+1;for(;++n&&!(t.charAt(n)===","||n===t.length););r.nsp=t.substring(i,n)}else r.nsp="/";const o=t.charAt(n+1);if(o!==""&&Number(o)==o){const i=n+1;for(;++n;){const s=t.charAt(n);if(s==null||Number(s)!=s){--n;break}if(n===t.length)break}r.id=Number(t.substring(i,n+1))}if(t.charAt(++n)){const i=this.tryParse(t.substr(n));if(Sc.isPayloadValid(r.type,i))r.data=i;else throw new Error("invalid payload")}return r}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,n){switch(t){case Y.CONNECT:return yf(n);case Y.DISCONNECT:return n===void 0;case Y.CONNECT_ERROR:return typeof n=="string"||yf(n);case Y.EVENT:case Y.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&NS.indexOf(n[0])===-1);case Y.ACK:case Y.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class DS{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const n=jS(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const zS=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Sc,Encoder:AS,get PacketType(){return Y},protocol:LS},Symbol.toStringTag,{value:"Module"}));function gt(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const BS=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ig extends ye{constructor(t,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[gt(t,"open",this.onopen.bind(this)),gt(t,"packet",this.onpacket.bind(this)),gt(t,"error",this.onerror.bind(this)),gt(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...n){if(BS.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(n.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const r={type:Y.EVENT,data:n};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const s=this.ids++,l=n.pop();this._registerAckCallback(s,l),r.id=s}const o=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!o||!this.connected)||(this.connected?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(t,n){var r;const o=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(o===void 0){this.acks[t]=n;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);n.call(this,new Error("operation has timed out"))},o),s=(...l)=>{this.io.clearTimeoutFn(i),n.apply(this,l)};s.withError=!0,this.acks[t]=s}emitWithAck(t,...n){return new Promise((r,o)=>{const i=(s,l)=>s?o(s):r(l);i.withError=!0,n.push(i),this.emit(t,...n)})}_addToQueue(t){let n;typeof t[t.length-1]=="function"&&(n=t.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((o,...i)=>r!==this._queue[0]?void 0:(o!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(o)):(this._queue.shift(),n&&n(null,...i)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!t||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Y.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(r=>String(r.id)===t)){const r=this.acks[t];delete this.acks[t],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Y.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Y.EVENT:case Y.BINARY_EVENT:this.onevent(t);break;case Y.ACK:case Y.BINARY_ACK:this.onack(t);break;case Y.DISCONNECT:this.ondisconnect();break;case Y.CONNECT_ERROR:this.destroy();const r=new Error(t.data.message);r.data=t.data.data,this.emitReserved("connect_error",r);break}}onevent(t){const n=t.data||[];t.id!=null&&n.push(this.ack(t.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const n=this;let r=!1;return function(...o){r||(r=!0,n.packet({type:Y.ACK,id:t,data:o}))}}onack(t){const n=this.acks[t.id];typeof n=="function"&&(delete this.acks[t.id],n.withError&&t.data.unshift(null),n.apply(this,t.data))}onconnect(t,n){this.id=t,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Y.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,t.data)}}}function Br(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Br.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+n:e-n}return Math.min(e,this.max)|0};Br.prototype.reset=function(){this.attempts=0};Br.prototype.setMin=function(e){this.ms=e};Br.prototype.setMax=function(e){this.max=e};Br.prototype.setJitter=function(e){this.jitter=e};class ru extends ye{constructor(t,n){var r;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(n=t,t=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Qs(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Br({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=t;const o=n.parser||zS;this.encoder=new o.Encoder,this.decoder=new o.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var n;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(n=this.backoff)===null||n===void 0||n.setMin(t),this)}randomizationFactor(t){var n;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(n=this.backoff)===null||n===void 0||n.setJitter(t),this)}reconnectionDelayMax(t){var n;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(n=this.backoff)===null||n===void 0||n.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new rg(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const o=gt(n,"open",function(){r.onopen(),t&&t()}),i=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},s=gt(n,"error",i);if(this._timeout!==!1){const l=this._timeout,a=this.setTimeoutFn(()=>{o(),i(new Error("timeout")),n.close()},l);this.opts.autoUnref&&a.unref(),this.subs.push(()=>{this.clearTimeoutFn(a)})}return this.subs.push(o),this.subs.push(s),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(gt(t,"ping",this.onping.bind(this)),gt(t,"data",this.ondata.bind(this)),gt(t,"error",this.onerror.bind(this)),gt(t,"close",this.onclose.bind(this)),gt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(n){this.onclose("parse error",n)}}ondecoded(t){wc(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,n){let r=this.nsps[t];return r?this._autoConnect&&!r.active&&r.connect():(r=new ig(this,t,n),this.nsps[t]=r),r}_destroy(t){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(t){const n=this.encoder.encode(t);for(let r=0;r<n.length;r++)this.engine.write(n[r],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(t,n){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(o=>{o?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",o)):t.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Qr={};function Pn(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const n=$S(e,t.path||"/socket.io"),r=n.source,o=n.id,i=n.path,s=Qr[o]&&i in Qr[o].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||s;let a;return l?a=new ru(r,t):(Qr[o]||(Qr[o]=new ru(r,t)),a=Qr[o]),n.query&&!t.query&&(t.query=n.queryKey),a.socket(n.path,t)}Object.assign(Pn,{Manager:ru,Socket:ig,io:Pn,connect:Pn});const sg="http://localhost:3000",vf=Pn(`${sg}`);V.defaults.withCredentials=!0;V.defaults.baseURL=`${sg}`;const IS=async e=>{try{const t=await V.post("/api/v1/bookings/both",e),{currentUserBooking:n,targetedUserBooking:r}=t.data.data;return vf.emit("newBooking",n),vf.emit("newBooking",r),t.data.data}catch(t){throw console.error("Failed to create booking for both users:",t),t}},wf=async()=>{try{return(await V.get("/api/v1/users/me")).data.data.user}catch(e){throw console.warn("You are not logged in",e),e}},FS=async(e,t)=>{try{return(await V.post("/api/v1/users/login",{email:e,password:t})).data.data.user}catch(n){throw console.error("Login failed:",n),n}},MS=async(e,t,n)=>{try{return(await V.post("/api/v1/users/signup",{name:e,email:t,password:n})).data.data.user}catch(r){throw console.error("Signup failed:",r),r}},lg=async()=>{try{await V.get("/api/v1/users/logout")}catch(e){throw console.error("Logout failed:",e),e}},US=async()=>{try{return(await V.post("/api/v1/users/refreshtoken")).data.data.accessToken}catch(e){throw console.log(e),e}},ag=async e=>{try{return(await V.get(`/api/v1/bookings?userId=${e}`)).data.data.bookings}catch(t){throw console.error("Failed to fetch bookings:",t),t}},HS=async e=>{try{return(await V.post("/api/v1/bookings",e)).data.data.booking}catch(t){throw console.error("Failed to create booking:",t),t}},WS=async(e,t)=>{try{return(await V.patch(`/api/v1/bookings/${e}`,t)).data.data.booking}catch(n){throw console.error("Failed to update booking:",n),n}},VS=async e=>{try{await V.delete(`/api/v1/bookings/${e}`)}catch(t){throw console.error("Failed to delete booking:",t),t}},qS=async e=>{try{return(await V.patch("/api/v1/users/updateMe",e)).data.data.user}catch(t){throw console.error("Failed to update user details:",t),t}},YS=async e=>{try{return(await V.patch("/api/v1/users/updateMyPassword",e)).data.data.user}catch(t){throw console.error("Failed to update user password:",t),t}},KS=async e=>{try{await V.post("/api/v1/users/forgotPassword",{email:e})}catch(t){throw console.error("Failed to send forgot password email:",t),t}},QS=async(e,t)=>{try{return(await V.patch(`/api/v1/users/resetPassword/${e}`,{password:t})).data}catch(n){throw console.error("Failed to reset password:",n.response.data),n}},JS=async e=>{try{return(await V.patch("api/v1/users/updateUserSettings",e)).data.data.user}catch(t){throw new Error(t.response.data.message||"Failed to update settings")}},ug=async e=>{try{return(await V.get(`/api/v1/users/${e}/hours`)).data.hours}catch(t){throw console.error("Err getting hours",t),t}},Sn=S.createContext(),cg=({children:e})=>{const[t,n]=S.useState(null),[r,o]=S.useState(!0),i=Ar(),s=async()=>{o(!0);try{const c=await wf();n(c)}catch{try{if(await US()){const p=await wf();n(p)}}catch(d){console.warn("Couldnt refresh your token, log in",d)}}finally{o(!1)}};S.useEffect(()=>{s()},[]);const l=async(c,d)=>{var p,v;try{const y=await FS(c,d);n(y),Z.success("Login Successful. Welcome!"),i("/calendar")}catch(y){(v=(p=y.response)==null?void 0:p.data)!=null&&v.message&&Z.error(y.response.data.message),console.error("Login failed:",y)}},a=async(c,d,p)=>{var v,y;try{const w=await MS(c,d,p);n(w),Z.success("Signup Successful. Welcome!"),i("/login")}catch(w){(y=(v=w.response)==null?void 0:v.data)!=null&&y.message&&Z.error(w.response.data.message),console.error("Signup failed:",w)}},u=async()=>{try{await lg(),n(null),i("/login")}catch(c){console.error("Logout failed:",c)}};return r?f.jsx("div",{children:"Loading..."}):f.jsx(Sn.Provider,{value:{user:t,setUser:n,login:l,signup:a,logout:u},children:e})};cg.propTypes={children:Hs.node.isRequired};var dg={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Cs,function(){var n=1e3,r=6e4,o=36e5,i="millisecond",s="second",l="minute",a="hour",u="day",c="week",d="month",p="quarter",v="year",y="date",w="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var A=["th","st","nd","rd"],N=F%100;return"["+F+(A[(N-20)%10]||A[N]||A[0])+"]"}},g=function(F,A,N){var z=String(F);return!z||z.length>=A?F:""+Array(A+1-z.length).join(N)+F},E={s:g,z:function(F){var A=-F.utcOffset(),N=Math.abs(A),z=Math.floor(N/60),C=N%60;return(A<=0?"+":"-")+g(z,2,"0")+":"+g(C,2,"0")},m:function F(A,N){if(A.date()<N.date())return-F(N,A);var z=12*(N.year()-A.year())+(N.month()-A.month()),C=A.clone().add(z,d),T=N-C<0,j=A.clone().add(z+(T?-1:1),d);return+(-(z+(N-C)/(T?C-j:j-C))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:d,y:v,w:c,d:u,D:y,h:a,m:l,s,ms:i,Q:p}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},R="en",_={};_[R]=m;var O="$isDayjsObject",L=function(F){return F instanceof Be||!(!F||!F[O])},K=function F(A,N,z){var C;if(!A)return R;if(typeof A=="string"){var T=A.toLowerCase();_[T]&&(C=T),N&&(_[T]=N,C=T);var j=A.split("-");if(!C&&j.length>1)return F(j[0])}else{var I=A.name;_[I]=A,C=I}return!z&&C&&(R=C),C||!z&&R},B=function(F,A){if(L(F))return F.clone();var N=typeof A=="object"?A:{};return N.date=F,N.args=arguments,new Be(N)},U=E;U.l=K,U.i=L,U.w=function(F,A){return B(F,{locale:A.$L,utc:A.$u,x:A.$x,$offset:A.$offset})};var Be=function(){function F(N){this.$L=K(N.locale,null,!0),this.parse(N),this.$x=this.$x||N.x||{},this[O]=!0}var A=F.prototype;return A.parse=function(N){this.$d=function(z){var C=z.date,T=z.utc;if(C===null)return new Date(NaN);if(U.u(C))return new Date;if(C instanceof Date)return new Date(C);if(typeof C=="string"&&!/Z$/i.test(C)){var j=C.match($);if(j){var I=j[2]-1||0,M=(j[7]||"0").substring(0,3);return T?new Date(Date.UTC(j[1],I,j[3]||1,j[4]||0,j[5]||0,j[6]||0,M)):new Date(j[1],I,j[3]||1,j[4]||0,j[5]||0,j[6]||0,M)}}return new Date(C)}(N),this.init()},A.init=function(){var N=this.$d;this.$y=N.getFullYear(),this.$M=N.getMonth(),this.$D=N.getDate(),this.$W=N.getDay(),this.$H=N.getHours(),this.$m=N.getMinutes(),this.$s=N.getSeconds(),this.$ms=N.getMilliseconds()},A.$utils=function(){return U},A.isValid=function(){return this.$d.toString()!==w},A.isSame=function(N,z){var C=B(N);return this.startOf(z)<=C&&C<=this.endOf(z)},A.isAfter=function(N,z){return B(N)<this.startOf(z)},A.isBefore=function(N,z){return this.endOf(z)<B(N)},A.$g=function(N,z,C){return U.u(N)?this[z]:this.set(C,N)},A.unix=function(){return Math.floor(this.valueOf()/1e3)},A.valueOf=function(){return this.$d.getTime()},A.startOf=function(N,z){var C=this,T=!!U.u(z)||z,j=U.p(N),I=function(Ne,Se){var Ke=U.w(C.$u?Date.UTC(C.$y,Se,Ne):new Date(C.$y,Se,Ne),C);return T?Ke:Ke.endOf(u)},M=function(Ne,Se){return U.w(C.toDate()[Ne].apply(C.toDate("s"),(T?[0,0,0,0]:[23,59,59,999]).slice(Se)),C)},ee=this.$W,X=this.$M,de=this.$D,he="set"+(this.$u?"UTC":"");switch(j){case v:return T?I(1,0):I(31,11);case d:return T?I(1,X):I(0,X+1);case c:var be=this.$locale().weekStart||0,ft=(ee<be?ee+7:ee)-be;return I(T?de-ft:de+(6-ft),X);case u:case y:return M(he+"Hours",0);case a:return M(he+"Minutes",1);case l:return M(he+"Seconds",2);case s:return M(he+"Milliseconds",3);default:return this.clone()}},A.endOf=function(N){return this.startOf(N,!1)},A.$set=function(N,z){var C,T=U.p(N),j="set"+(this.$u?"UTC":""),I=(C={},C[u]=j+"Date",C[y]=j+"Date",C[d]=j+"Month",C[v]=j+"FullYear",C[a]=j+"Hours",C[l]=j+"Minutes",C[s]=j+"Seconds",C[i]=j+"Milliseconds",C)[T],M=T===u?this.$D+(z-this.$W):z;if(T===d||T===v){var ee=this.clone().set(y,1);ee.$d[I](M),ee.init(),this.$d=ee.set(y,Math.min(this.$D,ee.daysInMonth())).$d}else I&&this.$d[I](M);return this.init(),this},A.set=function(N,z){return this.clone().$set(N,z)},A.get=function(N){return this[U.p(N)]()},A.add=function(N,z){var C,T=this;N=Number(N);var j=U.p(z),I=function(X){var de=B(T);return U.w(de.date(de.date()+Math.round(X*N)),T)};if(j===d)return this.set(d,this.$M+N);if(j===v)return this.set(v,this.$y+N);if(j===u)return I(1);if(j===c)return I(7);var M=(C={},C[l]=r,C[a]=o,C[s]=n,C)[j]||1,ee=this.$d.getTime()+N*M;return U.w(ee,this)},A.subtract=function(N,z){return this.add(-1*N,z)},A.format=function(N){var z=this,C=this.$locale();if(!this.isValid())return C.invalidDate||w;var T=N||"YYYY-MM-DDTHH:mm:ssZ",j=U.z(this),I=this.$H,M=this.$m,ee=this.$M,X=C.weekdays,de=C.months,he=C.meridiem,be=function(Se,Ke,Ie,Vo){return Se&&(Se[Ke]||Se(z,T))||Ie[Ke].slice(0,Vo)},ft=function(Se){return U.s(I%12||12,Se,"0")},Ne=he||function(Se,Ke,Ie){var Vo=Se<12?"AM":"PM";return Ie?Vo.toLowerCase():Vo};return T.replace(h,function(Se,Ke){return Ke||function(Ie){switch(Ie){case"YY":return String(z.$y).slice(-2);case"YYYY":return U.s(z.$y,4,"0");case"M":return ee+1;case"MM":return U.s(ee+1,2,"0");case"MMM":return be(C.monthsShort,ee,de,3);case"MMMM":return be(de,ee);case"D":return z.$D;case"DD":return U.s(z.$D,2,"0");case"d":return String(z.$W);case"dd":return be(C.weekdaysMin,z.$W,X,2);case"ddd":return be(C.weekdaysShort,z.$W,X,3);case"dddd":return X[z.$W];case"H":return String(I);case"HH":return U.s(I,2,"0");case"h":return ft(1);case"hh":return ft(2);case"a":return Ne(I,M,!0);case"A":return Ne(I,M,!1);case"m":return String(M);case"mm":return U.s(M,2,"0");case"s":return String(z.$s);case"ss":return U.s(z.$s,2,"0");case"SSS":return U.s(z.$ms,3,"0");case"Z":return j}return null}(Se)||j.replace(":","")})},A.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},A.diff=function(N,z,C){var T,j=this,I=U.p(z),M=B(N),ee=(M.utcOffset()-this.utcOffset())*r,X=this-M,de=function(){return U.m(j,M)};switch(I){case v:T=de()/12;break;case d:T=de();break;case p:T=de()/3;break;case c:T=(X-ee)/6048e5;break;case u:T=(X-ee)/864e5;break;case a:T=X/o;break;case l:T=X/r;break;case s:T=X/n;break;default:T=X}return C?T:U.a(T)},A.daysInMonth=function(){return this.endOf(d).$D},A.$locale=function(){return _[this.$L]},A.locale=function(N,z){if(!N)return this.$L;var C=this.clone(),T=K(N,z,!0);return T&&(C.$L=T),C},A.clone=function(){return U.w(this.$d,this)},A.toDate=function(){return new Date(this.valueOf())},A.toJSON=function(){return this.isValid()?this.toISOString():null},A.toISOString=function(){return this.$d.toISOString()},A.toString=function(){return this.$d.toUTCString()},F}(),nt=Be.prototype;return B.prototype=nt,[["$ms",i],["$s",s],["$m",l],["$H",a],["$W",u],["$M",d],["$y",v],["$D",y]].forEach(function(F){nt[F[1]]=function(A){return this.$g(A,F[0],F[1])}}),B.extend=function(F,A){return F.$i||(F(A,Be,B),F.$i=!0),B},B.locale=K,B.isDayjs=L,B.unix=function(F){return B(1e3*F)},B.en=_[R],B.Ls=_,B.p={},B})})(dg);var GS=dg.exports;const le=Rr(GS);var fg={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Cs,function(){return function(n,r){r.prototype.weekday=function(o){var i=this.$locale().weekStart||0,s=this.$W,l=(s<i?s+7:s)-i;return this.$utils().u(o)?l:this.subtract(l,"day").add(o,"day")}}})})(fg);var XS=fg.exports;const pg=Rr(XS);var hg={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Cs,function(){return function(n,r){r.prototype.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}}}})})(hg);var ZS=hg.exports;const ek=Rr(ZS);var mg={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Cs,function(){return function(n,r,o){r.prototype.isToday=function(){var i="YYYY-MM-DD",s=o();return this.format(i)===s.format(i)}}})})(mg);var tk=mg.exports;const gg=Rr(tk);le.extend(pg);le.extend(ek);le.extend(gg);const nk=e=>{const[t,n]=S.useState([]),[r,o]=S.useState([]),[i,s]=S.useState(le()),[l,a]=S.useState("month"),[u,c]=S.useState([]);S.useEffect(()=>{e&&d(e._id)},[e]),S.useEffect(()=>{o(t.sort(($,h)=>le($.time).isBefore(le(h.time))?-1:1))},[t]),S.useEffect(()=>{(()=>{let h=i.startOf("month").weekday(0);const m=i.add(1,"month").month();let g=[],E=[],R=1;for(;h.weekday(0).toObject().months!==m;){const _=w(h);if(E.push(_),R===7&&(g.push({dates:E}),E=[],R=0),R++,h=h.add(1,"day"),h.month()===m&&h.weekday()===0)break}c(g)})()},[i]);const d=async $=>{try{const h=await ag($);n(h)}catch(h){console.error("Failed to fetch bookings:",h)}},p=async $=>{try{const h={...$,time:le($.time).format(),user:e._id},m=await HS(h);n(g=>[...g,m])}catch(h){console.error("Failed to create booking:",h)}},v=async($,h)=>{try{const m=await WS($,h);n(g=>g.map(E=>E._id===$?m:E))}catch(m){console.error("Failed to update booking:",m)}},y=async $=>{try{await VS($),n(h=>h.filter(m=>m._id!==$))}catch(h){console.error("Failed to delete booking:",h)}},w=$=>{const h={...$.toObject()};return{minute:h.minutes,hour:h.hours,day:h.date,month:h.months,year:h.years,isCurrentMonth:h.months===i.month(),isCurrentDay:h.date===i.date()}};return{bookings:t,setBookings:n,awaitingBookings:r,currentDate:i,currentView:l,arrayOfDays:u,setCurrentDate:s,setCurrentView:a,fetchBookings:d,createBooking:p,updateBooking:v,deleteBooking:y}},rk=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState({clientName:"",phone:"",email:"",description:"",time:null}),[o,i]=S.useState(null);return{showForm:e,setShowForm:t,showBookingForm:(l,a=!1)=>{a?(i(l),r({...l})):(i(null),r({clientName:"",phone:"",email:"",description:"",time:l.time})),t(!0)},newBooking:n,setNewBooking:r,editingBooking:o,setEditingBooking:i}},ok="http://localhost:3000",Wn=Pn(ok),ik=(e,t,n)=>(S.useEffect(()=>{if(!(!e||!t||!n))return Wn.emit("join",e._id),Wn.on("newBooking",r=>{n(e._id),t(o=>[...o,r])}),()=>{Wn.emit("leave",e._id),Wn.off("newBooking"),Wn.disconnect()}},[e,t,n]),Wn),sk=()=>{const[e,t]=S.useState(7),[n,r]=S.useState(19);return{openingHour:e,setOpeningHour:t,closingHour:n,setClosingHour:r,fetchOpeningClosingHours:async i=>{try{const s=await ug(i);t(s.openingHour||7),r(s.closingHour||19)}catch(s){console.error("Failed to fetch user opening/closing hours",s)}}}},xe=S.createContext(),yg=({children:e})=>{const{user:t}=S.useContext(Sn),[n,r]=S.useState(null),[o,i]=S.useState([]),[s,l]=S.useState(null),{bookings:a,setBookings:u,awaitingBookings:c,currentDate:d,currentView:p,arrayOfDays:v,setCurrentDate:y,setCurrentView:w,fetchBookings:$,createBooking:h,updateBooking:m,deleteBooking:g}=nk(t),{showForm:E,setShowForm:R,showBookingForm:_,newBooking:O,setNewBooking:L,editingBooking:K,setEditingBooking:B}=rk(),{openingHour:U,closingHour:Be,setOpeningHour:nt,setClosingHour:F}=sk();return ik(t,u,$),f.jsx(xe.Provider,{value:{bookings:a,setBookings:u,awaitingBookings:c,currentDate:d,currentView:p,arrayOfDays:v,setCurrentDate:y,setCurrentView:w,fetchBookings:$,createBooking:h,updateBooking:m,deleteBooking:g,showForm:E,setShowForm:R,showBookingForm:_,newBooking:O,setNewBooking:L,editingBooking:K,setEditingBooking:B,openingHour:U,closingHour:Be,setOpeningHour:nt,setClosingHour:F,selectedSlot:n,setSelectedSlot:r,targetedUserBookings:o,setTargetedUserBookings:i,targetedUserId:s,setTargetedUserId:l},children:e})};yg.propTypes={children:Hs.node.isRequired};const vg=({children:e})=>{const{user:t}=S.useContext(Sn);return t?e||f.jsx(gv,{}):f.jsx(mv,{to:"/login"})};vg.propTypes={children:Hs.node};var Ue=function(){return Ue=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ue.apply(this,arguments)};function No(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var re="-ms-",fo="-moz-",J="-webkit-",wg="comm",Js="rule",kc="decl",lk="@import",xg="@keyframes",ak="@layer",Sg=Math.abs,Ec=String.fromCharCode,ou=Object.assign;function uk(e,t){return Ee(e,0)^45?(((t<<2^Ee(e,0))<<2^Ee(e,1))<<2^Ee(e,2))<<2^Ee(e,3):0}function kg(e){return e.trim()}function At(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function Fi(e,t,n){return e.indexOf(t,n)}function Ee(e,t){return e.charCodeAt(t)|0}function Cr(e,t,n){return e.slice(t,n)}function _t(e){return e.length}function Eg(e){return e.length}function to(e,t){return t.push(e),e}function ck(e,t){return e.map(t).join("")}function xf(e,t){return e.filter(function(n){return!At(n,t)})}var Gs=1,br=1,Cg=0,dt=0,me=0,Ir="";function Xs(e,t,n,r,o,i,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Gs,column:br,length:s,return:"",siblings:l}}function Qt(e,t){return ou(Xs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Vn(e){for(;e.root;)e=Qt(e.root,{children:[e]});to(e,e.siblings)}function dk(){return me}function fk(){return me=dt>0?Ee(Ir,--dt):0,br--,me===10&&(br=1,Gs--),me}function St(){return me=dt<Cg?Ee(Ir,dt++):0,br++,me===10&&(br=1,Gs++),me}function jn(){return Ee(Ir,dt)}function Mi(){return dt}function Zs(e,t){return Cr(Ir,e,t)}function iu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pk(e){return Gs=br=1,Cg=_t(Ir=e),dt=0,[]}function hk(e){return Ir="",e}function Bl(e){return kg(Zs(dt-1,su(e===91?e+2:e===40?e+1:e)))}function mk(e){for(;(me=jn())&&me<33;)St();return iu(e)>2||iu(me)>3?"":" "}function gk(e,t){for(;--t&&St()&&!(me<48||me>102||me>57&&me<65||me>70&&me<97););return Zs(e,Mi()+(t<6&&jn()==32&&St()==32))}function su(e){for(;St();)switch(me){case e:return dt;case 34:case 39:e!==34&&e!==39&&su(me);break;case 40:e===41&&su(e);break;case 92:St();break}return dt}function yk(e,t){for(;St()&&e+me!==57;)if(e+me===84&&jn()===47)break;return"/*"+Zs(t,dt-1)+"*"+Ec(e===47?e:St())}function vk(e){for(;!iu(jn());)St();return Zs(e,dt)}function wk(e){return hk(Ui("",null,null,null,[""],e=pk(e),0,[0],e))}function Ui(e,t,n,r,o,i,s,l,a){for(var u=0,c=0,d=s,p=0,v=0,y=0,w=1,$=1,h=1,m=0,g="",E=o,R=i,_=r,O=g;$;)switch(y=m,m=St()){case 40:if(y!=108&&Ee(O,d-1)==58){Fi(O+=W(Bl(m),"&","&\f"),"&\f",Sg(u?l[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:O+=Bl(m);break;case 9:case 10:case 13:case 32:O+=mk(y);break;case 92:O+=gk(Mi()-1,7);continue;case 47:switch(jn()){case 42:case 47:to(xk(yk(St(),Mi()),t,n,a),a);break;default:O+="/"}break;case 123*w:l[u++]=_t(O)*h;case 125*w:case 59:case 0:switch(m){case 0:case 125:$=0;case 59+c:h==-1&&(O=W(O,/\f/g,"")),v>0&&_t(O)-d&&to(v>32?kf(O+";",r,n,d-1,a):kf(W(O," ","")+";",r,n,d-2,a),a);break;case 59:O+=";";default:if(to(_=Sf(O,t,n,u,c,o,l,g,E=[],R=[],d,i),i),m===123)if(c===0)Ui(O,t,_,_,E,i,d,l,R);else switch(p===99&&Ee(O,3)===110?100:p){case 100:case 108:case 109:case 115:Ui(e,_,_,r&&to(Sf(e,_,_,0,0,o,l,g,o,E=[],d,R),R),o,R,d,l,r?E:R);break;default:Ui(O,_,_,_,[""],R,0,l,R)}}u=c=v=0,w=h=1,g=O="",d=s;break;case 58:d=1+_t(O),v=y;default:if(w<1){if(m==123)--w;else if(m==125&&w++==0&&fk()==125)continue}switch(O+=Ec(m),m*w){case 38:h=c>0?1:(O+="\f",-1);break;case 44:l[u++]=(_t(O)-1)*h,h=1;break;case 64:jn()===45&&(O+=Bl(St())),p=jn(),c=d=_t(g=O+=vk(Mi())),m++;break;case 45:y===45&&_t(O)==2&&(w=0)}}return i}function Sf(e,t,n,r,o,i,s,l,a,u,c,d){for(var p=o-1,v=o===0?i:[""],y=Eg(v),w=0,$=0,h=0;w<r;++w)for(var m=0,g=Cr(e,p+1,p=Sg($=s[w])),E=e;m<y;++m)(E=kg($>0?v[m]+" "+g:W(g,/&\f/g,v[m])))&&(a[h++]=E);return Xs(e,t,n,o===0?Js:l,a,u,c,d)}function xk(e,t,n,r){return Xs(e,t,n,wg,Ec(dk()),Cr(e,2,-2),0,r)}function kf(e,t,n,r,o){return Xs(e,t,n,kc,Cr(e,0,r),Cr(e,r+1,-1),r,o)}function bg(e,t,n){switch(uk(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 4789:return fo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+fo+e+re+e+e;case 5936:switch(Ee(e,t+11)){case 114:return J+e+re+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+re+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+re+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+re+e+e;case 6165:return J+e+re+"flex-"+e+e;case 5187:return J+e+W(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+re+"flex-$1$2")+e;case 5443:return J+e+re+"flex-item-"+W(e,/flex-|-self/g,"")+(At(e,/flex-|baseline/)?"":re+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return J+e+re+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+re+W(e,"shrink","negative")+e;case 5292:return J+e+re+W(e,"basis","preferred-size")+e;case 6060:return J+"box-"+W(e,"-grow","")+J+e+re+W(e,"grow","positive")+e;case 4554:return J+W(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4200:if(!At(e,/flex-|baseline/))return re+"grid-column-align"+Cr(e,t)+e;break;case 2592:case 3360:return re+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,At(r.props,/grid-\w+-end/)})?~Fi(e+(n=n[t].value),"span",0)?e:re+W(e,"-start","")+e+re+"grid-row-span:"+(~Fi(n,"span",0)?At(n,/\d+/):+At(n,/\d+/)-+At(e,/\d+/))+";":re+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return At(r.props,/grid-\w+-start/)})?e:re+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(e)-1-t>6)switch(Ee(e,t+1)){case 109:if(Ee(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+fo+(Ee(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Fi(e,"stretch",0)?bg(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,l,a,u){return re+o+":"+i+u+(s?re+o+"-span:"+(l?a:+a-+i)+u:"")+e});case 4949:if(Ee(e,t+6)===121)return W(e,":",":"+J)+e;break;case 6444:switch(Ee(e,Ee(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(Ee(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+re+"$2box$3")+e;case 100:return W(e,":",":"+re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function xs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Sk(e,t,n,r){switch(e.type){case ak:if(e.children.length)break;case lk:case kc:return e.return=e.return||e.value;case wg:return"";case xg:return e.return=e.value+"{"+xs(e.children,r)+"}";case Js:if(!_t(e.value=e.props.join(",")))return""}return _t(n=xs(e.children,r))?e.return=e.value+"{"+n+"}":""}function kk(e){var t=Eg(e);return function(n,r,o,i){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,i)||"";return s}}function Ek(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ck(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case kc:e.return=bg(e.value,e.length,n);return;case xg:return xs([Qt(e,{value:W(e.value,"@","@"+J)})],r);case Js:if(e.length)return ck(n=e.props,function(o){switch(At(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vn(Qt(e,{props:[W(o,/:(read-\w+)/,":"+fo+"$1")]})),Vn(Qt(e,{props:[o]})),ou(e,{props:xf(n,r)});break;case"::placeholder":Vn(Qt(e,{props:[W(o,/:(plac\w+)/,":"+J+"input-$1")]})),Vn(Qt(e,{props:[W(o,/:(plac\w+)/,":"+fo+"$1")]})),Vn(Qt(e,{props:[W(o,/:(plac\w+)/,re+"input-$1")]})),Vn(Qt(e,{props:[o]})),ou(e,{props:xf(n,r)});break}return""})}}var bk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qe={},$r=typeof process<"u"&&Qe!==void 0&&(Qe.REACT_APP_SC_ATTR||Qe.SC_ATTR)||"data-styled",$g="active",_g="data-styled-version",el="6.1.11",Cc=`/*!sc*/
`,bc=typeof window<"u"&&"HTMLElement"in window,$k=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Qe!==void 0&&Qe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Qe.REACT_APP_SC_DISABLE_SPEEDY!==""?Qe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Qe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Qe!==void 0&&Qe.SC_DISABLE_SPEEDY!==void 0&&Qe.SC_DISABLE_SPEEDY!==""&&Qe.SC_DISABLE_SPEEDY!=="false"&&Qe.SC_DISABLE_SPEEDY),tl=Object.freeze([]),_r=Object.freeze({});function _k(e,t,n){return n===void 0&&(n=_r),e.theme!==n.theme&&e.theme||t||n.theme}var Og=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ok=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Rk=/(^-|-$)/g;function Ef(e){return e.replace(Ok,"-").replace(Rk,"")}var Tk=/(a)(d)/gi,hi=52,Cf=function(e){return String.fromCharCode(e+(e>25?39:97))};function lu(e){var t,n="";for(t=Math.abs(e);t>hi;t=t/hi|0)n=Cf(t%hi)+n;return(Cf(t%hi)+n).replace(Tk,"$1-$2")}var Il,Rg=5381,ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Tg=function(e){return ar(Rg,e)};function Pg(e){return lu(Tg(e)>>>0)}function Pk(e){return e.displayName||e.name||"Component"}function Fl(e){return typeof e=="string"&&!0}var jg=typeof Symbol=="function"&&Symbol.for,Ng=jg?Symbol.for("react.memo"):60115,jk=jg?Symbol.for("react.forward_ref"):60112,Nk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Lk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ak=((Il={})[jk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Il[Ng]=Lg,Il);function bf(e){return("type"in(t=e)&&t.type.$$typeof)===Ng?Lg:"$$typeof"in e?Ak[e.$$typeof]:Nk;var t}var Dk=Object.defineProperty,zk=Object.getOwnPropertyNames,$f=Object.getOwnPropertySymbols,Bk=Object.getOwnPropertyDescriptor,Ik=Object.getPrototypeOf,_f=Object.prototype;function Ag(e,t,n){if(typeof t!="string"){if(_f){var r=Ik(t);r&&r!==_f&&Ag(e,r,n)}var o=zk(t);$f&&(o=o.concat($f(t)));for(var i=bf(e),s=bf(t),l=0;l<o.length;++l){var a=o[l];if(!(a in Lk||n&&n[a]||s&&a in s||i&&a in i)){var u=Bk(t,a);try{Dk(e,a,u)}catch{}}}}return e}function Or(e){return typeof e=="function"}function $c(e){return typeof e=="object"&&"styledComponentId"in e}function _n(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function au(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Lo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function uu(e,t,n){if(n===void 0&&(n=!1),!n&&!Lo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=uu(e[r],t[r]);else if(Lo(t))for(var r in t)e[r]=uu(e[r],t[r]);return e}function _c(e,t){Object.defineProperty(e,"toString",{value:t})}function Wo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Fk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Wo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(Cc);return n},e}(),Hi=new Map,Ss=new Map,Wi=1,mi=function(e){if(Hi.has(e))return Hi.get(e);for(;Ss.has(Wi);)Wi++;var t=Wi++;return Hi.set(e,t),Ss.set(t,e),t},Mk=function(e,t){Wi=t+1,Hi.set(e,t),Ss.set(t,e)},Uk="style[".concat($r,"][").concat(_g,'="').concat(el,'"]'),Hk=new RegExp("^".concat($r,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Wk=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Vk=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Cc),o=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var a=l.match(Hk);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(Mk(c,u),Wk(e,c,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}};function qk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Dg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var a=Array.from(l.querySelectorAll("style[".concat($r,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute($r,$g),r.setAttribute(_g,el);var s=qk();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Yk=function(){function e(t){this.element=Dg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw Wo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Kk=function(){function e(t){this.element=Dg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Qk=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Of=bc,Jk={isServer:!bc,useCSSOMInjection:!$k},zg=function(){function e(t,n,r){t===void 0&&(t=_r),n===void 0&&(n={});var o=this;this.options=Ue(Ue({},Jk),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&bc&&Of&&(Of=!1,function(i){for(var s=document.querySelectorAll(Uk),l=0,a=s.length;l<a;l++){var u=s[l];u&&u.getAttribute($r)!==$g&&(Vk(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),_c(this,function(){return function(i){for(var s=i.getTag(),l=s.length,a="",u=function(d){var p=function(h){return Ss.get(h)}(d);if(p===void 0)return"continue";var v=i.names.get(p),y=s.getGroup(d);if(v===void 0||y.length===0)return"continue";var w="".concat($r,".g").concat(d,'[id="').concat(p,'"]'),$="";v!==void 0&&v.forEach(function(h){h.length>0&&($+="".concat(h,","))}),a+="".concat(y).concat(w,'{content:"').concat($,'"}').concat(Cc)},c=0;c<l;c++)u(c);return a}(o)})}return e.registerId=function(t){return mi(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ue(Ue({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Qk(o):r?new Yk(o):new Kk(o)}(this.options),new Fk(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(mi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(mi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(mi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Gk=/&/g,Xk=/^\s*\/\/.*$/gm;function Bg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Bg(n.children,t)),n})}function Zk(e){var t,n,r,o=_r,i=o.options,s=i===void 0?_r:i,l=o.plugins,a=l===void 0?tl:l,u=function(p,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},c=a.slice();c.push(function(p){p.type===Js&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Gk,n).replace(r,u))}),s.prefix&&c.push(Ck),c.push(Sk);var d=function(p,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var $=p.replace(Xk,""),h=wk(y||v?"".concat(y," ").concat(v," { ").concat($," }"):$);s.namespace&&(h=Bg(h,s.namespace));var m=[];return xs(h,kk(c.concat(Ek(function(g){return m.push(g)})))),m};return d.hash=a.length?a.reduce(function(p,v){return v.name||Wo(15),ar(p,v.name)},Rg).toString():"",d}var eE=new zg,cu=Zk(),Ig=He.createContext({shouldForwardProp:void 0,styleSheet:eE,stylis:cu});Ig.Consumer;He.createContext(void 0);function Rf(){return S.useContext(Ig)}var Fg=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=cu);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,_c(this,function(){throw Wo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=cu),this.name+t.hash},e}(),tE=function(e){return e>="A"&&e<="Z"};function Tf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;tE(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Mg=function(e){return e==null||e===!1||e===""},Ug=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Mg(i)&&(Array.isArray(i)&&i.isCss||Or(i)?r.push("".concat(Tf(o),":"),i,";"):Lo(i)?r.push.apply(r,No(No(["".concat(o," {")],Ug(i),!1),["}"],!1)):r.push("".concat(Tf(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in bk||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Nn(e,t,n,r){if(Mg(e))return[];if($c(e))return[".".concat(e.styledComponentId)];if(Or(e)){if(!Or(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Nn(o,t,n,r)}var i;return e instanceof Fg?n?(e.inject(n,r),[e.getName(r)]):[e]:Lo(e)?Ug(e):Array.isArray(e)?Array.prototype.concat.apply(tl,e.map(function(s){return Nn(s,t,n,r)})):[e.toString()]}function nE(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Or(n)&&!$c(n))return!1}return!0}var rE=Tg(el),oE=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&nE(t),this.componentId=n,this.baseHash=ar(rE,n),this.baseStyle=r,zg.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=_n(o,this.staticRulesId);else{var i=au(Nn(this.rules,t,n,r)),s=lu(ar(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}o=_n(o,s),this.staticRulesId=s}else{for(var a=ar(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var p=au(Nn(d,t,n,r));a=ar(a,p+c),u+=p}}if(u){var v=lu(a>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),o=_n(o,v)}}return o},e}(),Hg=He.createContext(void 0);Hg.Consumer;var Ml={};function iE(e,t,n){var r=$c(e),o=e,i=!Fl(e),s=t.attrs,l=s===void 0?tl:s,a=t.componentId,u=a===void 0?function(E,R){var _=typeof E!="string"?"sc":Ef(E);Ml[_]=(Ml[_]||0)+1;var O="".concat(_,"-").concat(Pg(el+_+Ml[_]));return R?"".concat(R,"-").concat(O):O}(t.displayName,t.parentComponentId):a,c=t.displayName,d=c===void 0?function(E){return Fl(E)?"styled.".concat(E):"Styled(".concat(Pk(E),")")}(e):c,p=t.displayName&&t.componentId?"".concat(Ef(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;y=function(E,R){return w(E,R)&&$(E,R)}}else y=w}var h=new oE(n,p,r?o.componentStyle:void 0);function m(E,R){return function(_,O,L){var K=_.attrs,B=_.componentStyle,U=_.defaultProps,Be=_.foldedComponentIds,nt=_.styledComponentId,F=_.target,A=He.useContext(Hg),N=Rf(),z=_.shouldForwardProp||N.shouldForwardProp,C=_k(O,A,U)||_r,T=function(de,he,be){for(var ft,Ne=Ue(Ue({},he),{className:void 0,theme:be}),Se=0;Se<de.length;Se+=1){var Ke=Or(ft=de[Se])?ft(Ne):ft;for(var Ie in Ke)Ne[Ie]=Ie==="className"?_n(Ne[Ie],Ke[Ie]):Ie==="style"?Ue(Ue({},Ne[Ie]),Ke[Ie]):Ke[Ie]}return he.className&&(Ne.className=_n(Ne.className,he.className)),Ne}(K,O,C),j=T.as||F,I={};for(var M in T)T[M]===void 0||M[0]==="$"||M==="as"||M==="theme"&&T.theme===C||(M==="forwardedAs"?I.as=T.forwardedAs:z&&!z(M,j)||(I[M]=T[M]));var ee=function(de,he){var be=Rf(),ft=de.generateAndInjectStyles(he,be.styleSheet,be.stylis);return ft}(B,T),X=_n(Be,nt);return ee&&(X+=" "+ee),T.className&&(X+=" "+T.className),I[Fl(j)&&!Og.has(j)?"class":"className"]=X,I.ref=L,S.createElement(j,I)}(g,E,R)}m.displayName=d;var g=He.forwardRef(m);return g.attrs=v,g.componentStyle=h,g.displayName=d,g.shouldForwardProp=y,g.foldedComponentIds=r?_n(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=p,g.target=r?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(R){for(var _=[],O=1;O<arguments.length;O++)_[O-1]=arguments[O];for(var L=0,K=_;L<K.length;L++)uu(R,K[L],!0);return R}({},o.defaultProps,E):E}}),_c(g,function(){return".".concat(g.styledComponentId)}),i&&Ag(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Pf(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var jf=function(e){return Object.assign(e,{isCss:!0})};function ur(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Or(e)||Lo(e))return jf(Nn(Pf(tl,No([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Nn(r):jf(Nn(Pf(r,t)))}function du(e,t,n){if(n===void 0&&(n=_r),!t)throw Wo(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,ur.apply(void 0,No([o],i,!1)))};return r.attrs=function(o){return du(e,t,Ue(Ue({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return du(e,t,Ue(Ue({},n),o))},r}var Wg=function(e){return du(iE,e)},k=Wg;Og.forEach(function(e){k[e]=Wg(e)});function Vg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=au(ur.apply(void 0,No([e],t,!1))),o=Pg(r);return new Fg(o,r)}const qn={mobile:"480px",tablet:"768px",laptop:"1024px",desktop:"1440px"},x={mobile:e=>ur`
    @media (max-width: ${qn.mobile}) {
      ${e}
    }
  `,tablet:e=>ur`
    @media (min-width: ${qn.mobile}) and (max-width: ${qn.tablet}) {
      ${e}
    }
  `,laptop:e=>ur`
    @media (min-width: ${qn.tablet}) and (max-width: ${qn.laptop}) {
      ${e}
    }
  `,desktop:e=>ur`
    @media (min-width: ${qn.laptop}) {
      ${e}
    }
  `},sE=k.span`
  color: #0096ff;
  cursor: pointer;
`,lE=k.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  margin-left: 2px;
`,aE=k.div`
  height: 5rem;
  width: 5rem;
  margin-bottom: 3rem;
`,uE=k.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 20px;

  ${x.mobile`
    flex-direction: column;
    padding: 10px;
  `}
`,cE=k.div`
  display: flex;
  background-color: white;
  background-color: transparent;
  border-radius: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  height: auto;

  ${x.mobile`
    flex-direction: column;
    width: 100%;
    align-items: center;
  `}

  ${x.laptop`
    flex-direction: row;
    width: 90%;
  `}

  ${x.desktop`
    flex-direction: row;
  `}
`,Nf=k.img`
  border-radius: 2rem;
`,dE=k.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  ${x.mobile`
    width: 100%;
    padding: 10px;
    order: 2;
  `}

  ${x.laptop`
    width: 50%;
  `}

  ${x.desktop`
    width: 50%;
  `}
`,fE=k.div`
  width: 50%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${x.mobile`
    width: 90%;
    padding: 2rem;
    order: 1;
  `}

  ${x.laptop`
    width: 50%;
  `}

  ${x.desktop`
    width: 50%;
  `}
`,pE=k.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,hE=k.h2`
  margin-bottom: 3rem;
  font-size: 24px;
  color: #333;

  ${x.mobile`
    font-size: 20px;
    margin-bottom: 2rem;
  `}
`,Ul=k.input`
  margin-bottom: 20px;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  max-width: 100%;

  ${x.mobile`
    font-size: 0.9rem;
    padding: 0.8rem;
  `}
`,mE=k.button`
  padding: 15px;
  font-size: 18px;
  color: white;
  background: linear-gradient(to right, #007bff, #0096ff);
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  max-width: 100%;

  &:hover {
    background: #24afff;
  }

  ${x.mobile`
    font-size: 16px;
    padding: 12px;
  `}
`,qg="/assets/login-DDdhaH2k.png",nl="/assets/bookit-logo-DcUepX7_.png",gE=nl,yE=qg;function vE(){const e=Ar(),{signup:t}=S.useContext(Sn),[n,r]=S.useState({name:"",email:"",password:""}),[o,i]=S.useState(""),s=a=>{const{name:u,value:c}=a.target;r(d=>({...d,[u]:c}))},l=async a=>{var u,c,d;a.preventDefault();try{console.log("trying to signup",n),await t(n.name,n.email,n.password),e("/login")}catch(p){i(((c=(u=p.response)==null?void 0:u.data)==null?void 0:c.message)||p.message||"Something went wrong"),Z.error(((d=p.response)==null?void 0:d.data)||p.message||"Something went wrong"),console.log(p)}};return f.jsx(uE,{children:f.jsxs(cE,{children:[f.jsx(fE,{children:f.jsxs(pE,{onSubmit:l,children:[f.jsx(aE,{children:f.jsx(qt,{to:"/",children:f.jsx(Nf,{src:gE,alt:"logo",style:{maxHeight:"4rem",width:"auto"}})})}),f.jsx(hE,{children:"Welcome!"}),o&&f.jsx("p",{children:o}),f.jsx(Ul,{type:"text",placeholder:"Enter your name",name:"name",value:n.name,onChange:s,required:!0}),f.jsx(Ul,{type:"email",placeholder:"Enter email",name:"email",value:n.email,onChange:s,required:!0}),f.jsx(Ul,{type:"password",placeholder:"Password",name:"password",value:n.password,onChange:s,required:!0}),f.jsx(mE,{type:"submit",children:"Signup"}),f.jsxs(lE,{children:["Have an account?",f.jsx(sE,{onClick:()=>e("/login"),children:" Login here"})]})]})}),f.jsx(dE,{children:f.jsx(Nf,{src:yE,alt:"working with a calendar",style:{width:"100%",height:"auto"}})})]})})}const wE=k.div`
  display: flex;
  justify-content: space-between;
`,xE=k.span`
  color: #0096ff;
  cursor: pointer;
`,SE=k(qt)`
  margin-top: 1rem;
  font-size: 0.9rem;
  margin-left: 2px;
  color: grey;
  cursor: pointer;
  text-decoration: none;
`,Yg=k.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  margin-left: 2px;
`;k(Yg)`
  color: grey;
  cursor: pointer;
  text-decoration: none;
`;const kE=k.div`
  height: 5rem;
  width: 5rem;
  margin-bottom: 3rem;
`,EE=k.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 20px;

  ${x.mobile`
    flex-direction: column;
    padding: 10px;
    height: auto;
  `}

  ${x.tablet`
    flex-direction: column;
    padding: 10px;
    height: auto;
  `}
`,CE=k.div`
  display: flex;
  background-color: white;
  background-color: transparent;
  border-radius: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  height: auto;

  ${x.mobile`
    flex-direction: column;
    width: 100%;
    align-items: center;
  `}

  ${x.tablet`
    flex-direction: column;
    width: 100%;
    align-items: center;
  `}

  ${x.laptop`
    flex-direction: row;
    width: 90%;
  `}

  ${x.desktop`
    flex-direction: row;
  `}
`,Lf=k.img`
  border-radius: 2rem;
`,bE=k.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  ${x.mobile`
    width: 100%;
    padding: 10px;
    order: 2;
  `}

  ${x.tablet`
    width: 100%;
    padding: 10px;
    order: 2;
  `}

  ${x.laptop`
    width: 50%;
  `}

  ${x.desktop`
    width: 50%;
  `}
`,$E=k.div`
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${x.mobile`
    width: 90%;
    padding: 2rem;
    order: 1;
  `}

  ${x.tablet`
    width: 90%;
    padding: 2rem;
    order: 1;
  `}

  ${x.laptop`
    width: 50%;
  `}

  ${x.desktop`
    width: 50%;
  `}
`,_E=k.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,OE=k.h2`
  margin-bottom: 3rem;
  font-size: 24px;
  color: #333;

  ${x.mobile`
    font-size: 20px;
    margin-bottom: 2rem;
  `}

  ${x.tablet`
    font-size: 22px;
    margin-bottom: 2.5rem;
  `}
`,Af=k.input`
  margin-bottom: 20px;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  max-width: 100%;

  ${x.mobile`
    font-size: 0.9rem;
    padding: 0.8rem;
  `}

  ${x.tablet`
    font-size: 1rem;
    padding: 0.9rem;
  `}
`,RE=k.button`
  padding: 15px;
  font-size: 18px;
  color: white;
  background: linear-gradient(to right, #007bff, #0096ff);
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  max-width: 100%;

  &:hover {
    background: #24afff;
  }

  ${x.mobile`
    font-size: 16px;
    padding: 12px;
  `}

  ${x.tablet`
    font-size: 17px;
    padding: 14px;
  `}
`,TE=nl,PE=qg;function jE(){const e=Ar(),{login:t}=S.useContext(Sn),[n,r]=S.useState({email:"",password:""}),[o,i]=S.useState(""),s=a=>{const{name:u,value:c}=a.target;r(d=>({...d,[u]:c}))},l=async a=>{var u,c;a.preventDefault();try{await t(n.email,n.password)}catch(d){i(((c=(u=d.response)==null?void 0:u.data)==null?void 0:c.message)||"Something went wrong"),console.log(d)}};return f.jsx(EE,{children:f.jsxs(CE,{children:[f.jsx($E,{children:f.jsxs(_E,{onSubmit:l,children:[f.jsx(kE,{children:f.jsx(qt,{to:"/",children:f.jsx(Lf,{src:TE,alt:"logo",style:{maxHeight:"4rem",width:"auto"}})})}),f.jsx(OE,{children:"Welcome!"}),o&&f.jsx("p",{children:o}),f.jsx(Af,{type:"email",placeholder:"Enter email",name:"email",value:n.email,onChange:s,autoComplete:"email"}),f.jsx(Af,{type:"password",placeholder:"Password",name:"password",value:n.password,onChange:s,autoComplete:"current-password"}),f.jsx(RE,{type:"submit",children:"Log in"}),f.jsxs(wE,{children:[f.jsxs(Yg,{children:["No account yet?"," ",f.jsx(xE,{onClick:()=>e("/signup"),children:"Register here"})]}),f.jsx(SE,{to:"/forgot-password",children:"Forgot your password?"})]})]})}),f.jsx(bE,{children:f.jsx(Lf,{src:PE,alt:"working with a calendar",style:{width:"100%",height:"auto"}})})]})})}const NE=k.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #5e5e5e;
  background: #f1f1f1;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
`,LE=k.div`
  padding: 1rem;
  background-color: #e0e0e0;
  flex: 1;
  border-radius: 1rem;
  border-top-right-radius: 0rem;
  border-top-left-radius: 0rem;
`,AE=k.div`
  flex-grow: 1;
  flex-basis: 0;
  justify-content: center;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;

  ${x.mobile`
    font-size: 0.9rem;
  `}
`,DE=k.div`
  width: 4rem;
  margin-left: 0.25rem;
  font-weight: 500;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ccc;

  ${x.mobile`
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ccc;
    justify-content: center;
    font-size: 0.8rem;
  `}
`,zE=k.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`,BE=k(zE)`
  height: 3rem;

  ${x.mobile`
    height: auto;
    flex-direction: column;
    align-items: center;
  `}
`,IE=k.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 4px;
  ${x.mobile`
    width: 100%;
    padding: 0;
  `}
`,FE=k.div`
  width: calc(25% - 8px);
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.$isBooked?"#28a745":"#fff"};
  color: #000;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #a4ebb4;
  }
  margin: 2px;

  ${x.mobile`
    width: calc(100% - 4px);
    height: 20%;
    margin: 2px 0;
  `}
`,ME=k.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: #3a3a3a;
  padding: 0.75rem 0;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
  ${x.mobile`
    flex-direction: column;
  `}
`,Kg=(e,t,n,r,o,i)=>e.filter(s=>{const l=le(s.time);return l.year()===t&&l.month()===n&&l.date()===r&&l.hour()===o&&l.minute()===i}),UE=(e,t,n,r,o,i)=>{const s=Kg(e,t,n,r,o,i);return{isSlotBooked:s.length>0,bookingsForSlot:s}},HE=(e,t,n,r)=>{const o=e.filter(i=>{const s=le(i.time);return s.year()===t&&s.month()===n&&s.date()===r});return{isDayBooked:o.length>0,bookingsCount:o.length,bookingsForDay:o}},WE=()=>{const{currentDate:e,bookings:t,showBookingForm:n,openingHour:r,closingHour:o}=S.useContext(xe);return f.jsxs(f.Fragment,{children:[f.jsx(ME,{children:f.jsx(AE,{children:e.format("dddd")})}),Array.from({length:o-r+1},(i,s)=>{const l=r+s;return f.jsxs(BE,{children:[f.jsx(DE,{children:`${String(l).padStart(2,"0")}:00`}),f.jsx(IE,{children:Array.from({length:4},(a,u)=>{const c=15*u,d=Kg(t,e.year(),e.month(),e.date(),l,c),p=d.length>0;return f.jsx(FE,{$isBooked:p,onClick:()=>p?n(d[0],!0):n({time:e.hour(l).minute(c).toISOString()}),children:`${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`},u)})})]},s)})]})},VE=k.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #5e5e5e;
  background: #f1f1f1;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
`,qE=k.div`
  padding: 1rem;
  background-color: #e0e0e0;
  flex: 1;
  border-radius: 1rem;
  border-top-right-radius: 0rem;
  border-top-left-radius: 0rem;
`,YE=k.div`
  flex-grow: 1;
  flex-basis: 0;
  justify-content: center;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;

  ${x.mobile`
    font-size: 0.8rem;
  `}

  ${x.tablet`
    font-size: 1rem;
  `}

  ${x.laptop`
    font-size: 1.1rem;
    margin: 1px;
  `}
`,Df=k.div`
  width: 4rem;
  margin-left: 0.25rem;
  font-weight: 500;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ccc;

  ${x.mobile`
    width: 3rem;
    font-size: 0.7rem;
  `}

  ${x.tablet`
    width: 3.5rem;
    font-size: 0.8rem;
  `}

  ${x.laptop`
    width: 4rem;
    font-size: 1rem;
  `}
`,KE=k.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #ccc;
  &:first-child {
    border-top: 1px solid black;
  }
  &:last-child {
    border-bottom: none;
  }

  ${x.mobile`
    font-size: 0.6rem;
  `}

  ${x.tablet`
    font-size: 0.8rem;
  `}

  ${x.laptop`
    font-size: 1rem;
  `}
`,QE=k.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  box-sizing: border-box;
  justify-items: center;
  align-items: center;

  &:last-child {
    border-right: none;
  }

  ${x.mobile`
    height: 3rem;
  `}

  ${x.tablet`
    height: 4rem;
  `}

  ${x.laptop`
    height:  5rem;
  `}
`,JE=k.div`
  width: calc(50% - 4px);
  height: calc(50% - 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.$isBooked?"#28a745":"#fff"};
  color: #000;
  border: 1px solid #ddd;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 0.75rem;
  font-weight: 600;
  margin: 2px;
  border-radius: 1rem;

  &:hover {
    background-color: #a4ebb4;
  }

  ${x.mobile`
    font-size: 0.6rem;
    width: calc(50% - 2px);
    height: calc(50% - 2px);
  `}

  ${x.tablet`
    font-size: 0.7rem;
    width: calc(50% - 3px);
    height: calc(50% - 3px);
  `}

  ${x.laptop`
    font-size: 0.7rem;
    width: calc(50% - 4px);
    height: calc(50% - 4px);
    border-radius: 1rem;
  `}
`,GE=k.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: #3a3a3a;
  padding: 0.75rem 0;
  border-bottom: 1px solid lightgrey;

  ${x.mobile`
    font-size: 0.7rem;
  `}

  ${x.tablet`
    font-size: 0.8rem;
  `}

  ${x.laptop`
    font-size: 1rem;
  `}
`,XE=()=>{const{currentDate:e,bookings:t,showBookingForm:n,openingHour:r,closingHour:o}=S.useContext(xe),i=e.startOf("week"),s=Array.from({length:7},(l,a)=>i.add(a,"day"));return f.jsxs(f.Fragment,{children:[f.jsxs(GE,{children:[f.jsx(Df,{style:{visibility:"hidden"}})," ",s.map((l,a)=>f.jsx(YE,{children:l.format("dddd")},a))]}),Array.from({length:o-r+1},(l,a)=>{const u=r+a;return f.jsxs(KE,{children:[f.jsx(Df,{children:`${String(u).padStart(2,"0")}:00`}),s.map((c,d)=>f.jsx(QE,{children:Array.from({length:4},(p,v)=>{const y=15*v,{isSlotBooked:w,bookingsForSlot:$}=UE(t,c.year(),c.month(),c.date(),u,y);return f.jsx(JE,{$isBooked:w,onClick:()=>w?n($[0],!0):n({time:c.hour(u).minute(y).toISOString()}),children:`${String(u).padStart(2,"0")}:${String(y).padStart(2,"0")}`},v)})},d))]},a)})]})},ZE=k.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #5e5e5e;
  background: #ececec;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  padding: 1rem;
`,eC=k.div`
  padding: 1rem;
  background-color: #e0e0e0;
  flex: 1;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`,tC=k.span`
  position: absolute;
  font-size: 0.8rem;
  line-height: 1;
  top: 0.75rem;
  right: 1rem;
  font-weight: 700;

  ${x.mobile`
    font-size: 0.7rem;
    height: 1rem;
    width: 1rem;
    top: 0.7rem;
    right: 0.3rem;
  `}
  ${x.tablet`
    font-size: 0.75rem;
    height: 1rem;
    width: 1rem;
    top: 0.75rem;
    right: 0.4rem;
  `}

  ${x.laptop`
    font-size:0.8rem;
    height: 1rem;
    width: 1rem;
    top: 0.75rem;
    right: 0.6rem;
  `}
`,nC=k.div`
  flex-grow: 1;
  flex-basis: calc(100% / 7);
  max-width: calc(100% / 7);
  position: relative;
  height: 5rem;
  overflow: hidden;
  cursor: pointer;
  background-color: #fff;
  transition: 0.25s ease-out;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 5px;
  padding: 0.5rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #f9f9f9;
    transition: 0.5s ease-out;
  }

  color: ${e=>e.$isDisabled?"#ccc":""};
  pointer-events: ${e=>e.$isDisabled?"none":"auto"};
  ${e=>e.$isSelected&&`
    position: relative;
    z-index: 1;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 10px;
      padding: 3px; /* adjust this to control the border width */
      background: linear-gradient(45deg, #1a8fff, #53cbf1);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      z-index: -1;
    }
  `}

  ${x.mobile`
    height: 3rem;
    padding: 0.3rem;
    font-size: 0.6rem;
  `}

  ${x.tablet`
    height: 4rem;
    padding: 0.4rem;
    font-size: 0.7rem;
  `}

  ${x.laptop`
    height: 5rem;
    min-width: 2rem
    padding: 0.5rem;
    font-size: 0.8rem;
  `}
`,rC=k.div`
  background: linear-gradient(to right, #007bff, #0096ff);
  border-radius: 50%;
  color: white;
  font-size: 0.8rem;
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0.5rem;
  left: 0.65rem;

  ${x.mobile`
    font-size: 0.5rem;
    height: 0.8rem;
    width: 0.8rem;
    top: 1.7rem;
    left: 0.4rem;
  `}

  ${x.tablet`
    font-size: 0.6rem;
    height: 1rem;
    width: 1rem;
    top: 2.4rem;
    left: 0.4rem;
  `}


  ${x.laptop`
    height: 1rem;
    width: 1rem;
    font-size: 0.7rem;
    top: 0.6rem;
    left: 0.3rem;
  `}
`,oC=k.span`
  font-weight: 700;
  line-height: 1;
  color: #1a8fff;
  opacity: 0;
  font-size: 8rem;
  position: absolute;
  top: -0.2rem;
  right: -0.05rem;
  transition: 0.25s ease-out;
  letter-spacing: -0.07rem;

  &:hover {
    opacity: 0.05;
    transition: 0.5s ease-in;
  }
`,iC=k.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`,sC=()=>{const{currentDate:e,bookings:t,setCurrentDate:n,setCurrentView:r,arrayOfDays:o}=S.useContext(xe),i=[];let s=[];const l=le();return Array.isArray(o)?(o.forEach((a,u)=>{a.dates.forEach((c,d)=>{const p=c.month===e.month(),{isDayBooked:v,bookingsCount:y}=p?HE(t,c.year,c.month,c.day):{isDayBooked:!1,bookingsCount:0};s.push(f.jsxs(nC,{$isDisabled:!c.isCurrentMonth,$isSelected:l.date()===c.day&&l.month()===c.month,$isBooked:v,onClick:()=>{p&&(n(e.date(c.day)),r("day"))},children:[f.jsx(tC,{children:c.day}),v&&f.jsx(rC,{children:y}),f.jsx(oC,{children:c.day})]},d))}),i.push(f.jsx(iC,{children:s},u)),s=[]}),i):null},lC=()=>f.jsx(WE,{}),aC=()=>f.jsx(XE,{}),uC=()=>f.jsx(sC,{}),zf=()=>(S.useContext(xe),f.jsx(eC,{children:f.jsx(ZE,{children:uC()})})),cC=()=>(S.useContext(xe),f.jsx(qE,{children:f.jsx(VE,{children:aC()})})),dC=()=>(S.useContext(xe),f.jsx(LE,{children:f.jsx(NE,{children:lC()})})),fC=k.div`
  background-color: #f1f1f1;
  /* padding: 1rem; */
  flex: 1;
`,pC=()=>{const{currentView:e}=S.useContext(xe),t=()=>{switch(e){case"month":return f.jsx(zf,{});case"week":return f.jsx(cC,{});case"day":return f.jsx(dC,{});default:return f.jsx(zf,{})}};return f.jsx(fC,{children:t()})};var Qg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bf=He.createContext&&He.createContext(Qg),hC=["attr","size","title"];function mC(e,t){if(e==null)return{};var n=gC(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function gC(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ks(){return ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ks.apply(this,arguments)}function If(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Es(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?If(Object(n),!0).forEach(function(r){yC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):If(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yC(e,t,n){return t=vC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vC(e){var t=wC(e,"string");return typeof t=="symbol"?t:t+""}function wC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Jg(e){return e&&e.map((t,n)=>He.createElement(t.tag,Es({key:n},t.attr),Jg(t.child)))}function rl(e){return t=>He.createElement(xC,ks({attr:Es({},e.attr)},t),Jg(e.child))}function xC(e){var t=n=>{var{attr:r,size:o,title:i}=e,s=mC(e,hC),l=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),He.createElement("svg",ks({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:a,style:Es(Es({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&He.createElement("title",null,i),e.children)};return Bf!==void 0?He.createElement(Bf.Consumer,null,n=>t(n)):t(Qg)}function SC(e){return rl({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2",points:"7 2 17 12 7 22"},child:[]}]})(e)}function kC(e){return rl({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2",points:"7 2 17 12 7 22",transform:"matrix(-1 0 0 1 24 0)"},child:[]}]})(e)}const EC=k.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  padding: 1rem 0;
  background: linear-gradient(to right, #007bff, #0096ff);
  color: white;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;

  ${x.mobile`
  gap: 0;
  `}
`,Oc=k.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;

  ${x.mobile`
    flex-direction: column;
    gap: 0.5rem
  `}
`,CC=k(Oc)`
  justify-content: flex-start;
  text-align: left;
  padding: 0 0.5rem;
  gap: 0.5rem;
  font-size: 1.2rem;

  ${x.mobile`
    font-size: 1rem;
    gap: 0.2rem;
    flex-direction: row;
  `}

  ${x.tablet`
    font-size: 1.1rem;
    gap: 0.4rem;
  `}
`,bC=k(Oc)`
  justify-content: center;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  padding-right: 0.5rem;

  ${x.mobile`
    font-size: 1.2rem;
  `}

  ${x.tablet`
    font-size: 1.3rem;
  `}
`,$C=k(Oc)`
  justify-content: flex-end;
  text-align: right;
  padding: 0 0.5rem;

  ${x.mobile`
    justify-content: center;
  `}
`,Ff=k.button`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  padding: 0.25rem;
  background-color: #ffffff;
  color: #0051ff;
  border-radius: 50%;
  border: none;
  line-height: 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

  ${x.mobile`
    font-size: 0.8rem;
    padding: 0.2rem;
  `}

  ${x.tablet`
    font-size: 0.9rem;
    padding: 0.2rem;
  `}
`,ol=k.button`
  margin: 0 0.5rem;
  padding: 0.25rem 0.65rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.7rem;
  background: none;
  color: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

  ${x.mobile`
    font-size: 0.8rem;
    margin: 0 0.3rem;
    padding: 0.2rem 0.5rem;
  `}

  ${x.tablet`
    font-size: 0.9rem;
    margin: 0 0.4rem;
    padding: 0.2rem 0.6rem;
  `}
`,_C=k(ol)`
  background-color: white;
  color: #007bff;
  font-weight: 700;
`,OC=k(ol)`
  background-color: #f73939;
`,RC=k(ol)`
  background-color: #f7a91a;

  ${x.tablet`
    display: none;
  `}

  ${x.mobile`
    display: none;
  `}
`,TC=k(ol)`
  background-color: #21c221;
`;le.extend(pg);le.extend(gg);const PC=()=>{const{currentDate:e,setCurrentDate:t,currentView:n,setCurrentView:r}=S.useContext(xe),o=le(),i=()=>{n==="month"?t(e.add(1,"month")):n==="week"?t(e.add(1,"week")):n==="day"&&t(e.add(1,"day"))},s=()=>{n==="month"?t(e.subtract(1,"month")):n==="week"?t(e.subtract(1,"week")):n==="day"&&t(e.subtract(1,"day"))},l=e.startOf("week").format("MMM DD"),a=e.endOf("week").format("MMM DD"),u=n==="month"?"MMM YYYY":n==="week"?`${l} - ${a}`:"dddd, MMM DD, YYYY";return f.jsxs(EC,{children:[f.jsxs(CC,{children:[f.jsx(Ff,{onClick:s,children:f.jsx(kC,{})}),f.jsx(_C,{onClick:()=>t(o),children:"Today"}),f.jsx(Ff,{onClick:i,children:f.jsx(SC,{})})]}),f.jsx(bC,{children:f.jsx("div",{children:n==="week"?`${l} - ${a}, ${e.year()}`:e.format(u)})}),f.jsxs($C,{children:[f.jsx(OC,{onClick:()=>r("month"),children:"Month"}),f.jsx(RC,{onClick:()=>r("week"),children:"Week"}),f.jsx(TC,{onClick:()=>r("day"),children:"Day"})]})]})},jC=e=>{S.useEffect(()=>{if(e!=null&&e.time){const t=setInterval(()=>{const n=le();le(e.time).diff(n,"second")<=0&&clearInterval(t)},1e3);return()=>clearInterval(t)}},[e==null?void 0:e.time])},NC=()=>{const{setShowForm:e,setNewBooking:t,editingBooking:n,setEditingBooking:r,createBooking:o,updateBooking:i,deleteBooking:s}=S.useContext(xe);return{handleBookingSubmit:async(c,d)=>{c.preventDefault();try{n?await i(n._id,d):await o(d)}catch(p){console.error("Failed to save booking:",p)}e(!1),t({clientName:"",phone:"",email:"",description:"",time:null})},handleCancelBooking:()=>{t({clientName:"",phone:"",email:"",description:"",time:null}),e(!1),r(null)},handleDeleteBooking:async()=>{n&&(await s(n._id),r(null),t({clientName:"",phone:"",email:"",description:"",time:null}),e(!1))}}},LC=k.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  ${x.mobile`
    padding: 1rem;
    max-width: 100%;
  `}

  ${x.tablet`
    padding: 1.5rem;
    max-width: 100%;
  `}
`,AC=k.div`
  background-color: #f9f9f9;
  padding: 2rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  z-index: 101;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;

  ${x.mobile`
    padding: 1rem;
    max-width: 70%;
  `}

  ${x.tablet`
    padding: 1.5rem;
    max-width: 65%;
  `}
`,DC=k.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${x.mobile`
    padding: 1rem;
    max-width: 90%;
  `}

  ${x.tablet`
    padding: 1.5rem;
    max-width: 80%;
  `}
`,gi=k.label`
  font-weight: 600;
  color: #3a3a3a;
`,Hl=k.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;

  ${x.mobile`
    font-size: 0.9rem;
  `}

  ${x.tablet`
    font-size: 0.95rem;
  `}
`,zC=k.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  height: 100px;
  resize: none;

  ${x.mobile`
    font-size: 0.9rem;
  `}

  ${x.tablet`
    font-size: 0.95rem;
  `}
`,BC=k.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  ${x.mobile`
    flex-direction: column;
    gap: 0.5rem;
  `}

  ${x.tablet`
    flex-direction: column;
    gap: 0.75rem;
  `}
`,IC=k.button`
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  flex: 1;

  ${x.mobile`
    padding: 0.4rem 0.8rem;
  `}

  ${x.tablet`
    padding: 0.45rem 0.9rem;
  `}
`,FC=k.button`
  padding: 0.5rem 1rem;
  background-color: #f7a91a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  flex: 1;

  ${x.mobile`
    padding: 0.4rem 0.8rem;
  `}

  ${x.tablet`
    padding: 0.45rem 0.9rem;
  `}
`,MC=k.button`
  padding: 0.5rem 1rem;
  background-color: #f73939;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  flex: 1;

  ${x.mobile`
    padding: 0.4rem 0.8rem;
  `}

  ${x.tablet`
    padding: 0.45rem 0.9rem;
  `}
`,UC=()=>{const{showForm:e,newBooking:t,setNewBooking:n,editingBooking:r}=S.useContext(xe);jC(t);const{handleBookingSubmit:o,handleCancelBooking:i,handleDeleteBooking:s}=NC();return t?f.jsx(f.Fragment,{children:e&&f.jsx(LC,{children:f.jsx(AC,{children:f.jsxs(DC,{onSubmit:l=>o(l,t),children:[f.jsxs(gi,{children:["Client Name:",f.jsx(Hl,{type:"text",value:t.clientName,onChange:l=>n({...t,clientName:l.target.value})})]}),f.jsxs(gi,{children:["Phone:",f.jsx(Hl,{type:"text",value:t.phone,onChange:l=>n({...t,phone:l.target.value})})]}),f.jsxs(gi,{children:["Email:",f.jsx(Hl,{type:"text",value:t.email,onChange:l=>n({...t,email:l.target.value})})]}),f.jsxs(gi,{children:["Description:",f.jsx(zC,{value:t.description,onChange:l=>n({...t,description:l.target.value})})]}),f.jsxs(BC,{children:[f.jsx(IC,{type:"submit",children:r?"Save":"Submit"}),f.jsx(FC,{type:"button",onClick:i,children:"Cancel"}),r&&f.jsx(MC,{type:"button",onClick:s,children:"Delete"})]})]})})})}):null},HC=(e,t,n)=>e.filter(r=>{const o=le(r.time);if(t==="month")return o.month()===n.month()&&o.year()===n.year();if(t==="week"){const i=n.startOf("week"),s=n.endOf("week");return o.isAfter(i)&&o.isBefore(s)}else if(t==="day")return o.isSame(n,"day");return!1});function fu(e){return rl({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},child:[]}]})(e)}const WC=k.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`,VC=k.div`
  display: flex;
  align-items: center;
  background: #28a745;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`,qC=k.div`
  padding: 1rem;
  border-radius: 1rem;
  height: 100%;

  ${x.mobile`
    padding: 0.5rem;
  `}
  ${x.tablet`
    padding: 0.75rem;
  `}
  ${x.laptop`
    padding: 1rem;
  `}
`,YC=k.div`
  background: linear-gradient(to right, #007bff, #0096ff);
  color: white;
  padding: 1rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${x.mobile`
    padding: 0.5rem;
  `}
  ${x.tablet`
    padding: 0.75rem;
  `}
  ${x.laptop`
    padding: 1rem;
  `}
`,KC=k.div`
  font-weight: 700;
  font-size: 1.5rem;

  ${x.mobile`
    font-size: 1rem;
  `}
  ${x.tablet`
    font-size: 1.25rem;
  `}
  ${x.laptop`
    font-size: 1.5rem;
  `}
`,QC=k.div`
  padding: 1rem;
  background-color: #f9f9f9;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  max-height: 75vh;
  overflow-y: auto;

  ${x.mobile`
    padding: 0.5rem;
  `}
  ${x.tablet`
    padding: 0.75rem;
  `}
  ${x.laptop`
    padding: 1rem;
  `}

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #8f8f8f;
  }
`,JC=k.div`
  background-color: ${e=>e.cleared?"#c2c2c2":"#fff"};
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  ${x.mobile`
    padding: 0.25rem 0.5rem;
  `}
  ${x.tablet`
    padding: 0.5rem 0.75rem;
  `}
  ${x.laptop`
    padding: 0.5rem 1rem;
  `}
`,GC=k.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.6rem;

  ${x.mobile`
    font-size: 0.75rem;
  `}
  ${x.tablet`
    font-size: 0.875rem;
  `}
  ${x.laptop`
    font-size: 1rem;
  `}
`,XC=k.div`
  color: #888;
  margin-bottom: 0.4rem;

  ${x.mobile`
    font-size: 0.75rem;
  `}
  ${x.tablet`
    font-size: 0.875rem;
  `}
  ${x.laptop`
    font-size: 1rem;
  `}
`,ZC=k.div`
  color: #ff0000;
  font-weight: 600;

  ${x.mobile`
    font-size: 0.75rem;
  `}
  ${x.tablet`
    font-size: 0.875rem;
  `}
  ${x.laptop`
    font-size: 1rem;
  `}
`,eb=k.div`
  color: #28a745;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${x.mobile`
    font-size: 0.75rem;
  `}
  ${x.tablet`
    font-size: 0.875rem;
  `}
  ${x.laptop`
    font-size: 1rem;
  `}
`;k(fu)`
  color: #28a745;
  cursor: pointer;
  margin-left: 1rem;

  height: 5rem;

  ${x.mobile`
    font-size: 0.75rem;
  `}
  ${x.tablet`
    font-size: 0.875rem;
  `}
  ${x.laptop`
    font-size: 1rem;
  `}

  &:hover {
    color: #218838;
  }
`;const tb=(e,t,n,r,o)=>{const i={},s={},l={...n};return e.forEach(a=>{if(r[a._id])i[a.time]=null,s[a.time]=null;else{const c=le(a.time).diff(t,"second");if(c>0){const d=Math.floor(c/86400),p=Math.floor(c%(3600*24)/3600),v=Math.floor(c%3600/60),y=c%60;d>0?i[a.time]=`${d}d ${p}h ${v}m ${y}s`:i[a.time]=`${p}h ${v}m ${y}s`}else i[a.time]=null,s[a.time]=f.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[`${a.clientName} is waiting for your call`,f.jsx(fu,{onClick:()=>o(a._id),style:{marginLeft:"1rem",cursor:"pointer",fontSize:"2rem"}})]}),n[a.time]||(Z.custom(d=>f.jsxs(VC,{children:[f.jsxs("div",{style:{flex:1},children:[f.jsx("strong",{children:a.clientName})," is waiting for your call."]}),f.jsx(WC,{onClick:()=>{o(a._id),Z.dismiss(d.id)},children:f.jsx(fu,{})})]}),{duration:1/0}),l[a.time]=!0)}}),{newRemainingTimes:i,newTimerMessages:s,newNotifiedBookings:l}},nb=()=>{const{awaitingBookings:e,currentView:t,currentDate:n}=S.useContext(xe),[r,o]=S.useState({}),[i,s]=S.useState({}),[l,a]=S.useState({}),[u,c]=S.useState(()=>JSON.parse(localStorage.getItem("clearedBookings"))||{}),d=HC(e,t,n);S.useEffect(()=>{const v=setInterval(()=>{const y=le(),{newRemainingTimes:w,newTimerMessages:$,newNotifiedBookings:h}=tb(d,y,l,u,p);o(w),s($),a(h)},1e3);return()=>clearInterval(v)},[d,l,u]);const p=v=>{c(y=>{const w={...y,[v]:!0};return localStorage.setItem("clearedBookings",JSON.stringify(w)),w})};return f.jsxs(qC,{children:[f.jsx(YC,{children:f.jsx(KC,{children:"Awaiting Clients"})}),f.jsx(QC,{children:d.map((v,y)=>f.jsxs(JC,{cleared:u[v._id],children:[f.jsx(GC,{children:v.clientName}),f.jsx(XC,{children:le(v.time).format("DD/MM/YYYY HH:mm")}),r[v.time]&&f.jsx(ZC,{children:r[v.time]}),i[v.time]&&f.jsx(eb,{children:i[v.time]})]},y))})]})},rb=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${x.mobile`
    min-width: 100%;
  `}

  ${x.tablet`
    min-width: 100%;

  `}
`,ob=k.img`
  height: 2.5rem;
  ${x.mobile`
  height: 1.5rem
  `}
  ${x.tablet`
    height: 2rem;
  `}
`,ib=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 2rem 3rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin-top: 0.5rem;
  height: 0px;
  z-index: 100;

  ${x.mobile`
    width: 80%;
    padding: 1.5rem 2rem;
    gap: 10px;
  `}

  ${x.tablet`
    width: 60%;
    padding: 1.5rem 2.5rem;
  `}
  ${x.laptop`
    width: 80%;
    padding: 2rem 3rem;
  `}
  ${x.desktop`
    width: 70%;
    padding: 2rem 4rem;
  `}
`,sb=k.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #007bff;
`,lb=k.div`
  display: flex;
  gap: 2rem;
`,ab=k(qt)`
  font-size: 1em;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  color: #ffffff;
  background: #007bff;

  &:hover {
    color: #007bff;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }

  ${x.mobile`
        padding: 0.3rem;
    font-size: 0.9rem;
  `}
  ${x.tablet`
    padding: 0.5rem;
    font-size: 0.9rem;
  `}
`,ub=k.button`
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  color: #ffffff;
  background: #007bff;
  border: none;

  &:hover {
    color: #007bff;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }

  ${x.mobile`
        padding: 0.3rem;
    font-size: 0.9rem;
  `}
  ${x.tablet`
    padding: 0.3rem;
    font-size: 0.9rem;
  `}
`,cb=k.div`
  position: relative;
  width: 30%;
`,db=k.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;

  ${x.mobile`
    width: 60%;
    padding: 0.5rem;
  `}
  ${x.tablet`
    width: 60%;
    padding: 0.7rem;
  `}
  ${x.laptop`
    width: 90%;
  `}
  ${x.desktop`
    width: 100%;
  `}

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.3);
  }
`,fb=k.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  background: white;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;

  ${x.mobile`
    width: 50%;
  `}
  ${x.tablet`
    width: 40%;
  `}
  ${x.laptop`
    width: 95%;
  `}
  ${x.desktop`
    width: 100%;
  `}
`,pb=k.li`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`,hb=nl;function Rc(){const[e,t]=S.useState(""),[n,r]=S.useState([]),o=Ar();S.useEffect(()=>{(async()=>{if(e.trim())try{const a=await V.get(`/api/v1/users/search?name=${e}`);r(a.data.data.users)}catch(a){console.error("Search failed:",a)}else r([])})()},[e]);const i=l=>{o(`/user-calendar/${l}`)},s=async()=>{try{await lg(),Z.success("Logged out successfully"),o("/")}catch{Z.error("Failed to logout")}};return f.jsx(rb,{children:f.jsxs(ib,{children:[f.jsx(sb,{children:f.jsx(qt,{to:"/calendar",children:f.jsx(ob,{src:hb,alt:"logo"})})}),f.jsxs(cb,{children:[f.jsx(db,{type:"text",placeholder:"Search...",value:e,onChange:l=>t(l.target.value)}),n.length>0&&f.jsx(fb,{children:n.map(l=>f.jsx(pb,{onClick:()=>i(l._id),children:l.name},l._id))})]}),f.jsxs(lb,{children:[f.jsx(ab,{to:"/me",children:"Profile"}),f.jsx(ub,{onClick:s,children:"Logout"})]})]})})}const mb=k.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #f1f1f1;
  padding: 1rem;
  width: 80%;
  margin: 0 auto;

  ${x.mobile`
    flex-direction: column;
    width: 90%;
  `}

  ${x.laptop`
    flex-direction: row;
  `}
`,gb=k.div`
  display: block;
  position: relative;
  width: 100%;
  border-radius: 1rem;
  padding: 1rem;
  flex: 5;

  ${x.mobile`
    padding: 0.5rem;
    margin-bottom: 1rem;
  `}

  ${x.laptop`
    padding: 1rem;
  `}
`,yb=k.div`
  flex: 1;
  margin-left: 1rem;

  ${x.mobile`
    display: none;
  `}

  ${x.tablet`
    display: block;
  `}

  ${x.laptop`
    display: block;
  `}
`,vb=()=>{const{setOpeningHour:e,setClosingHour:t}=S.useContext(xe),{user:n}=S.useContext(Sn);return S.useEffect(()=>{n&&(e(n.openingHour),t(n.closingHour))},[n,e,t]),f.jsxs(f.Fragment,{children:[f.jsx(Rc,{}),f.jsxs(mb,{children:[f.jsxs(gb,{children:[f.jsx(PC,{}),f.jsx(pC,{}),f.jsx(UC,{})]}),f.jsx(yb,{children:f.jsx(nb,{})})]})]})},wb="/assets/home-WpdAse2_.jpg",xb=k(qt)`
  padding: 1.1rem 2.1rem;
  font-size: 1rem;
  border: none;
  border-radius: 2rem;
  background: linear-gradient(to right, #007bff, #0096ff);
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  text-decoration: none;

  &:hover {
    background: linear-gradient(to right, #0011ff, #0096ff);
    transform: scale(1.05);
  }
  ${x.mobile`
    padding: 10px 20px;
    font-size: 0.9em;
  `}
`,Sb=k.span`
  color: #007bff;
`,kb=k.h2`
  font-size: 1.7rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
  ${x.mobile`
    font-size: 1.8rem;
  `}
  ${x.tablet`
    font-size: 1.7rem;
  `}
`,Eb=k.img`
  height: 2.5rem;
`,Cb=Vg`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Gg=Vg`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,bb=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f7fa;
  height: 100vh;
  font-family: "Arial", sans-serif;
  animation: ${Cb} 1s ease-out;
`,$b=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-top: 20px;
  animation: ${Gg} 1s ease-out;
  ${x.mobile`
    width: 90%;
    padding: 15px 20px;
  `}
  ${x.tablet`
    width: 85%;
    padding: 15px 25px;
  `}
  ${x.laptop`
    width: 80%;
    padding: 20px 30px;
  `}
  ${x.desktop`
    width: 70%;
    padding: 20px 40px;
  `}
`,_b=k.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #007bff;
`,Ob=k.div`
  display: flex;
  gap: 20px;
`,Mf=k(qt)`
  font-size: 1em;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  padding: 5px 10px;
  border-radius: 0.8rem;
  background: #007bff;
  padding: 0.7rem 1rem;

  &:hover {
    color: #007bff;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }
`,Rb=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  width: 80%;
  margin-top: 2rem;
  ${x.mobile`
    grid-template-columns: 1fr;
    width: 90%;
    margin-top: 30px;
  `}
  ${x.tablet`
    grid-template-columns: 1fr;
    width: 85%;
    margin-top: 40px;
  `}
  ${x.laptop`
    grid-template-columns: 1fr 1fr;
    width: 80%;
    margin-top: 20px;
  `}
  ${x.desktop`
    grid-template-columns: 1fr 1fr;
    width: 70%;
    margin-top: 20px;
  `}
`,Tb=k.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  animation: ${Gg} 1s ease-out;
  ${x.mobile`
    align-items: center;
    text-align: center;
  `}
`,Pb=k.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.3rem;
  font-weight: 600;
  ${x.mobile`
    font-size: 2em;
  `}
  ${x.tablet`
    font-size: 2.2em;
  `}
`,jb=k.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 2.5rem;
  max-width: 80%;
  ${x.mobile`
    font-size: 1em;
    max-width: 90%;
  `}
  ${x.tablet`
    font-size: 1.1em;
    max-width: 85%;
  `}
`,Nb=k.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,Lb=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${x.mobile`
    width: 100%;
    margin-bottom: 30px;
  `}
  ${x.tablet`
    width: 100%;
    margin-bottom: 30px;
  `}
`,Ab=wb,Db=nl,zb=()=>f.jsxs(bb,{children:[f.jsxs($b,{children:[f.jsx(_b,{children:f.jsx(qt,{to:"/",children:f.jsx(Eb,{src:Db,alt:"logo"})})}),f.jsxs(Ob,{children:[f.jsx(Mf,{to:"/signup",children:"Signup"}),f.jsx(Mf,{to:"/login",children:"Login"})]})]}),f.jsxs(Rb,{children:[f.jsxs(Tb,{children:[f.jsxs(Pb,{children:["Welcome to ",f.jsx(Sb,{children:"BookIt"})]}),f.jsx(kb,{children:"The Future of Bookings."}),f.jsx(jb,{children:"Our calendar app is specifically designed to fulfill the needs of marketing teams, customer service representatives, and phone salespersons. We understand the importance of timely communication and efficient scheduling, which is why our tool helps you manage your appointments effortlessly. Stay on top of your schedule and improve your client interactions with our calendar solution."}),f.jsx(xb,{to:"/login",children:"Start Booking Now"})]}),f.jsx(Lb,{children:f.jsx(Nb,{src:Ab,alt:"background image"})})]})]});function Uf(e){return rl({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"},child:[]}]})(e)}const Bb=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f7fa;
  height: 100vh;
  font-family: "Arial", sans-serif;
`,Ib=k.div`
  display: flex;
  width: 80%;
  margin-top: 20px;

  ${x.mobile`
    flex-direction: column;
    align-items: center;
    width: 90%;
  `}

  ${x.tablet(`
    flex-direction: column;
    align-items: center;
    width: 90%;
  `)}
`,Fb=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(to right, #007bff, #0096ff);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ${x.mobile`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  `}

  ${x.tablet(`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  `)}
`,Wl=k(qt)`
  color: #fff;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s;

  &:hover {
    color: #d4d4d4;
  }
`,Mb=k.div`
  flex: 1;
  background-color: #fff;
  margin-left: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ${x.mobile`
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
  `}

  ${x.tablet(`
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
  `)}
`,Ub=k.h2`
  font-size: 1.5em;
  color: #007bff;
  margin-bottom: 20px;
`,Hb=k.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Yn=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Kn=k.label`
  font-size: 1em;
  color: #333;
`,Hf=k.div`
  display: flex;
  align-items: center;
  position: relative;
`,yi=k.input`
  flex: 1;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:read-only {
    background-color: #f0f0f0;
  }
`,Wf=k.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  color: #007bff;
`,Vf=k.select`
  margin-top: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
`,Wb=k.button`
  padding: 15px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  background: linear-gradient(to right, #007bff, #0096ff);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(to right, #0051ff, #0066ff);
  }
`,Vb=()=>{const{user:e,setUser:t}=S.useContext(Sn),{setOpeningHour:n,setClosingHour:r}=S.useContext(xe),[o,i]=S.useState(""),[s,l]=S.useState(""),[a,u]=S.useState(""),[c,d]=S.useState(""),[p,v]=S.useState(null),[y,w]=S.useState(7),[$,h]=S.useState(19);S.useEffect(()=>{e&&(i(e.name),l(e.email),w(e.openingHour||7),h(e.closingHour||19))},[e]);const m=async g=>{g.preventDefault();try{(p==="name"||p==="email")&&(await qS({name:o,email:s}),Z.success("Settings updated successfully")),a&&c&&(await YS({passwordCurrent:a,password:c}),Z.success("Password updated successfully")),await JS({openingHour:y,closingHour:$}),t({...e,openingHour:y,closingHour:$}),n(y),r($),Z.success("Hours updated successfully")}catch{Z.error("Failed to update settings")}finally{v(null)}};return f.jsxs(Bb,{children:[f.jsx(Rc,{}),f.jsxs(Ib,{children:[f.jsxs(Fb,{children:[f.jsx(Wl,{to:"#",children:"MY SETTINGS"}),f.jsx(Wl,{to:"#",children:"MY DETAILS"}),f.jsx(Wl,{to:"#",children:"BILLING"})]}),f.jsxs(Mb,{children:[f.jsx(Ub,{children:"YOUR ACCOUNT SETTINGS"}),f.jsxs(Hb,{onSubmit:m,children:[f.jsxs(Yn,{children:[f.jsx(Kn,{children:"Name"}),f.jsxs(Hf,{children:[f.jsx(yi,{type:"text",placeholder:o,onChange:g=>i(g.target.value),readOnly:p!=="name"}),p!=="name"&&f.jsxs(Wf,{onClick:()=>v("name"),children:["Change name ",f.jsx(Uf,{})]})]})]}),f.jsxs(Yn,{children:[f.jsx(Kn,{children:"Email address"}),f.jsxs(Hf,{children:[f.jsx(yi,{type:"email",placeholder:s,onChange:g=>l(g.target.value),readOnly:p!=="email"}),p!=="email"&&f.jsxs(Wf,{onClick:()=>v("email"),children:["Change email ",f.jsx(Uf,{})]})]})]}),f.jsxs(Yn,{children:[f.jsx(Kn,{children:"Current Password"}),f.jsx(yi,{type:"password",value:a,onChange:g=>u(g.target.value)})]}),f.jsxs(Yn,{children:[f.jsx(Kn,{children:"New Password"}),f.jsx(yi,{type:"password",value:c,onChange:g=>d(g.target.value)})]}),f.jsxs(Yn,{children:[f.jsx(Kn,{children:"Opening Hour"}),f.jsx(Vf,{value:y,onChange:g=>w(Number(g.target.value)),children:Array.from({length:24},(g,E)=>f.jsx("option",{value:E,children:`${String(E).padStart(2,"0")}:00`},E))})]}),f.jsxs(Yn,{children:[f.jsx(Kn,{children:"Closing Hour"}),f.jsx(Vf,{value:$,onChange:g=>h(Number(g.target.value)),children:Array.from({length:24},(g,E)=>f.jsx("option",{value:E,children:`${String(E).padStart(2,"0")}:00`},E))})]}),f.jsx(Wb,{type:"submit",children:"SAVE SETTINGS"})]})]})]})]})},qb=k.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  ${x.mobile`
    width: 90%;
    height: 90%;
    padding: 1rem;
  `}
`,Yb=k.form`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  max-width: 500px;

  ${x.mobile`
    padding: 1rem;
  `}
`,vi=k.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 600;
  color: #333;
`,Vl=k.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
`,Kb=k.textarea`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  height: 120px;
  resize: none;
`,Qb=k.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${x.mobile`
    flex-direction: column;
    gap: 1rem;
  `}
`,qf=k.button`
  width: 45%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background: ${({$secondary:e})=>e?"#f7c216":"#007bff"};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;

  &:hover {
    background: ${({$secondary:e})=>e?"#f7c216":"#0056b3"};
  }

  ${x.mobile`
    width: 100%;
  `}
`,Jb="http://localhost:3000",Yf=Pn(`${Jb}`),Xg=({onClose:e})=>{const{user:t}=S.useContext(Sn),{selectedSlot:n,currentDate:r,targetedUserId:o,fetchBookings:i}=S.useContext(xe),[s,l]=S.useState(""),[a,u]=S.useState("");if(!t||!n||!r)return null;const c=async d=>{d.preventDefault();const p={targetedUserId:o,clientName:t.name,email:t.email,phone:s,time:le(r).hour(n.split(":")[0]).minute(n.split(":")[1]).format(),description:a};try{const v=await IS(p);Z.success("Booking created successfully"),Yf.emit("newBooking",v.currentUserBooking),Yf.emit("newBooking",v.targetedUserBooking),i(t._id),e()}catch(v){Z.error("Failed to create booking"),console.error("Failed to create booking:",v)}};return f.jsx(qb,{children:f.jsxs(Yb,{onSubmit:c,children:[f.jsxs(vi,{children:["Name:",f.jsx(Vl,{type:"text",value:t.name,disabled:!0})]}),f.jsxs(vi,{children:["Email:",f.jsx(Vl,{type:"email",value:t.email,disabled:!0})]}),f.jsxs(vi,{children:["Phone:",f.jsx(Vl,{type:"tel",value:s,onChange:d=>l(d.target.value),required:!0})]}),f.jsxs(vi,{children:["Description:",f.jsx(Kb,{value:a,onChange:d=>u(d.target.value)})]}),f.jsxs(Qb,{children:[f.jsx(qf,{type:"submit",children:"Book"}),f.jsx(qf,{type:"button",onClick:e,$secondary:!0,children:"Cancel"})]})]})})};Xg.propTypes={onClose:Hs.func.isRequired};const Gb=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Xb=k.div`
  display: flex;
  flex-direction: row;
  background: #f1f1f1;
  max-width: 1200px;
  max-height: 70vh;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 1rem;
  height: 60vh;
`,Zb=k.div`
  flex: 1;
  background: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;const e$=k.div`
  font-size: 1.5rem;
  font-weight: bold;
`,Kf=k.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`,t$=k.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,n$=k.div`
  flex: 1;
  text-align: center;
  padding: 0.5rem 0;
  font-weight: bold;
`,r$=k.div`
  display: flex;
  flex-wrap: wrap;
`,o$=k.div`
  width: calc(100% / 7);
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0;
  background: ${e=>e.$isSelected?"#000":e.$isPast?"transparent":"#f9f9f9"};
  color: ${e=>e.$isSelected?"#fff":"#000"};
  border-radius: 0.5rem;
  cursor: ${e=>e.$isPast?"default":"pointer"};
  pointer-events: ${e=>e.$isPast?"none":"auto"};
  transition: background 0.2s;
  &:hover {
    background: ${e=>!e.$isPast&&(e.$isSelected?"#000":"#5daafc")};
  }
`,i$=k.div`
  width: calc(100% / 7);
  height: 4rem;
`,s$=k.div`
  flex: 0.5;
  background: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-left: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 70vh;
`,l$=k.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;k.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;const a$=k.div`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #f9f9f9;
  }
`,u$=()=>{const{currentDate:e,setCurrentDate:t}=S.useContext(xe),n=()=>{const o=e.subtract(1,"month");t(o)},r=()=>{const o=e.add(1,"month");t(o)};return f.jsxs(Gb,{children:[f.jsx(Kf,{onClick:n,children:"<"}),f.jsx(e$,{children:e.format("MMMM YYYY")}),f.jsx(Kf,{onClick:r,children:">"})]})},c$=()=>{const{currentDate:e,setCurrentDate:t}=S.useContext(xe),[n,r]=S.useState(e),o=le(),i=d=>{const p=e.date(d);r(p),t(p)},s=e.startOf("month"),l=e.endOf("month"),a=[];let u=s.startOf("week");for(;u.isBefore(s);)a.push({day:u.date(),isCurrentMonth:!1,isPast:u.isBefore(o,"day")}),u=u.add(1,"day");for(u=s;u.isBefore(l.add(1,"day"));)a.push({day:u.date(),isCurrentMonth:!0,isPast:u.isBefore(o,"day")}),u=u.add(1,"day");for(u=l.add(1,"day");u.weekday()!==0;)a.push({day:u.date(),isCurrentMonth:!1,isPast:u.isBefore(o,"day")}),u=u.add(1,"day");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return f.jsxs(f.Fragment,{children:[f.jsx(t$,{children:c.map(d=>f.jsx(n$,{children:d},d))}),f.jsx(r$,{children:a.map(({day:d,isCurrentMonth:p,isPast:v},y)=>{if(!p)return f.jsx(i$,{},y);const w=n.date()===d&&n.month()===e.month();return f.jsx(o$,{$isSelected:w,$isPast:v,onClick:()=>!v&&i(d),children:d},y)})})]})},d$=()=>{const{currentDate:e,bookings:t,openingHour:n,closingHour:r,setSelectedSlot:o,targetedUserBookings:i}=S.useContext(xe),s=e,a=(()=>{const u=[],c=le(),d=[...t,...i];for(let p=n;p<r;p++)for(let v=0;v<60;v+=15){const y=s.hour(p).minute(v);if(y.isAfter(c)){const w=y.format("HH:mm");d.some(h=>le(h.time).format("HH:mm")===w)||u.push(w)}}return u})();return f.jsxs(f.Fragment,{children:[f.jsx(l$,{children:s.format("ddd DD")}),a.map((u,c)=>f.jsx(a$,{onClick:()=>o(u),children:u},c))]})},f$="http://localhost:3000",wi=Pn(`${f$}`),p$=()=>{const{setOpeningHour:e,setClosingHour:t,selectedSlot:n,setSelectedSlot:r,setTargetedUserBookings:o,setTargetedUserId:i}=S.useContext(xe),{userId:s}=pm();S.useEffect(()=>{i(s),(async()=>{try{const u=await ug(s);e(u.openingHour||7),t(u.closingHour||19)}catch(u){console.error("Failed to fetch user opening/closing hours",u)}})()},[s,e,t,i]),S.useEffect(()=>{(async()=>{try{const u=await ag(s);o(u||[])}catch(u){console.error("Failed to fetch targeted user bookings",u),o([])}})()},[s,o]),S.useEffect(()=>{const a=u=>{o(c=>[...c,u])};return wi.emit("join",s),wi.on("newBooking",a),()=>{wi.emit("leave",s),wi.off("newBooking",a)}},[s,o]);const l=()=>{r(null)};return f.jsxs(f.Fragment,{children:[f.jsx(Rc,{}),f.jsxs(Xb,{children:[f.jsxs(Zb,{children:[f.jsx(u$,{}),f.jsx(c$,{})]}),f.jsx(s$,{children:f.jsx(d$,{})}),n&&f.jsx(Xg,{onClose:l})]})]})},h$=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`,m$=k.h1`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.5rem;
`,g$=k.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,y$=k.div`
  margin-bottom: 15px;
`,v$=k.label`
  margin-bottom: 5px;
  font-weight: bold;
`,w$=k.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,x$=k.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`,S$=k.p`
  margin-top: 20px;
  color: green;
  font-weight: bold;
`,k$=()=>{const[e,t]=S.useState(""),[n,r]=S.useState(""),o=async i=>{i.preventDefault();try{await KS(e),r("Reset URL has been sent to your email. Only valid for 10 minutes.")}catch{r("Error sending reset email. Please try again.")}};return f.jsxs(h$,{children:[f.jsx(m$,{children:"Reset Password"}),f.jsxs(g$,{onSubmit:o,children:[f.jsxs(y$,{children:[f.jsx(v$,{htmlFor:"email",children:"Email:"}),f.jsx(w$,{type:"email",id:"email",value:e,onChange:i=>t(i.target.value),required:!0})]}),f.jsx(x$,{type:"submit",children:"Send"})]}),n&&f.jsx(S$,{children:n})]})},E$=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`,C$=k.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`,b$=k.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`,$$=k.button`
  padding: 10px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
`,_$=k.p`
  color: green;
  font-size: 16px;
`,O$=k.p`
  color: red;
  font-size: 16px;
`,R$=()=>{const{token:e}=pm(),[t,n]=S.useState(""),[r,o]=S.useState(""),[i,s]=S.useState(""),l=async a=>{a.preventDefault();try{await QS(e,t),o("Password reset successful!"),s("")}catch(u){console.error("Error resetting password:",u),o(""),s("Failed to reset password")}};return f.jsxs(E$,{children:[f.jsx("h1",{children:"Reset Password"}),f.jsxs(C$,{onSubmit:l,children:[f.jsx(b$,{type:"password",placeholder:"New Password",value:t,onChange:a=>n(a.target.value),required:!0}),f.jsx($$,{type:"submit",children:"Reset Password"})]}),r&&f.jsx(_$,{children:r}),i&&f.jsx(O$,{children:i})]})},T$=()=>f.jsxs(bv,{children:[f.jsx(vw,{position:"bottom-right",toastOptions:{duration:4e3}}),f.jsx(cg,{children:f.jsx(yg,{children:f.jsxs(vv,{children:[f.jsx(bt,{path:"/",element:f.jsx(zb,{})}),f.jsx(bt,{path:"/login",element:f.jsx(jE,{})}),f.jsx(bt,{path:"/signup",element:f.jsx(vE,{})}),f.jsx(bt,{path:"/forgot-password",element:f.jsx(k$,{})}),f.jsx(bt,{path:"/resetPassword/:token",element:f.jsx(R$,{})}),f.jsxs(bt,{element:f.jsx(vg,{}),children:[f.jsx(bt,{path:"/me",element:f.jsx(Vb,{})}),f.jsx(bt,{path:"/user-calendar/:userId",element:f.jsx(p$,{})}),f.jsx(bt,{path:"/calendar",element:f.jsx(vb,{})})]})]})})})]});ql.createRoot(document.getElementById("root")).render(f.jsx(He.StrictMode,{children:f.jsx(T$,{})}));
