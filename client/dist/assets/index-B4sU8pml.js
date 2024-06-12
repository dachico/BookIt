function qg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qf={exports:{}},bs={},Yf={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),Yg=Symbol.for("react.portal"),Kg=Symbol.for("react.fragment"),Qg=Symbol.for("react.strict_mode"),Jg=Symbol.for("react.profiler"),Gg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),Zg=Symbol.for("react.forward_ref"),e0=Symbol.for("react.suspense"),t0=Symbol.for("react.memo"),n0=Symbol.for("react.lazy"),_c=Symbol.iterator;function r0(e){return e===null||typeof e!="object"?null:(e=_c&&e[_c]||e["@@iterator"],typeof e=="function"?e:null)}var Kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qf=Object.assign,Jf={};function Or(e,t,n){this.props=e,this.context=t,this.refs=Jf,this.updater=n||Kf}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gf(){}Gf.prototype=Or.prototype;function du(e,t,n){this.props=e,this.context=t,this.refs=Jf,this.updater=n||Kf}var fu=du.prototype=new Gf;fu.constructor=du;Qf(fu,Or.prototype);fu.isPureReactComponent=!0;var Oc=Array.isArray,Xf=Object.prototype.hasOwnProperty,pu={current:null},Zf={key:!0,ref:!0,__self:!0,__source:!0};function ep(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Xf.call(t,r)&&!Zf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ao,type:e,key:i,ref:s,props:o,_owner:pu.current}}function o0(e,t){return{$$typeof:Ao,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ao}function i0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rc=/\/+/g;function ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?i0(""+e.key):t.toString(36)}function xi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ao:case Yg:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+ol(s,0):r,Oc(o)?(n="",e!=null&&(n=e.replace(Rc,"$&/")+"/"),xi(o,t,n,"",function(u){return u})):o!=null&&(hu(o)&&(o=o0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Rc,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Oc(e))for(var l=0;l<e.length;l++){i=e[l];var a=r+ol(i,l);s+=xi(i,t,n,a,o)}else if(a=r0(e),typeof a=="function")for(e=a.call(e),l=0;!(i=e.next()).done;)i=i.value,a=r+ol(i,l++),s+=xi(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function qo(e,t,n){if(e==null)return e;var r=[],o=0;return xi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function s0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},Si={transition:null},l0={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Si,ReactCurrentOwner:pu};function tp(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:qo,forEach:function(e,t,n){qo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qo(e,function(){t++}),t},toArray:function(e){return qo(e,function(t){return t})||[]},only:function(e){if(!hu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Or;q.Fragment=Kg;q.Profiler=Jg;q.PureComponent=du;q.StrictMode=Qg;q.Suspense=e0;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l0;q.act=tp;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qf({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=pu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Xf.call(t,a)&&!Zf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ao,type:e.type,key:o,ref:i,props:r,_owner:s}};q.createContext=function(e){return e={$$typeof:Xg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gg,_context:e},e.Consumer=e};q.createElement=ep;q.createFactory=function(e){var t=ep.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:Zg,render:e}};q.isValidElement=hu;q.lazy=function(e){return{$$typeof:n0,_payload:{_status:-1,_result:e},_init:s0}};q.memo=function(e,t){return{$$typeof:t0,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Si.transition;Si.transition={};try{e()}finally{Si.transition=t}};q.unstable_act=tp;q.useCallback=function(e,t){return Ae.current.useCallback(e,t)};q.useContext=function(e){return Ae.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};q.useEffect=function(e,t){return Ae.current.useEffect(e,t)};q.useId=function(){return Ae.current.useId()};q.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Ae.current.useMemo(e,t)};q.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};q.useRef=function(e){return Ae.current.useRef(e)};q.useState=function(e){return Ae.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return Ae.current.useTransition()};q.version="18.3.1";Yf.exports=q;var x=Yf.exports;const He=Lo(x),a0=qg({__proto__:null,default:He},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0=x,c0=Symbol.for("react.element"),d0=Symbol.for("react.fragment"),f0=Object.prototype.hasOwnProperty,p0=u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h0={key:!0,ref:!0,__self:!0,__source:!0};function np(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)f0.call(t,r)&&!h0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:c0,type:e,key:i,ref:s,props:o,_owner:p0.current}}bs.Fragment=d0;bs.jsx=np;bs.jsxs=np;qf.exports=bs;var m=qf.exports,Vl={},rp={exports:{}},et={},op={exports:{}},ip={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,T){var j=C.length;C.push(T);e:for(;0<j;){var I=j-1>>>1,M=C[I];if(0<o(M,T))C[I]=T,C[j]=M,j=I;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var T=C[0],j=C.pop();if(j!==T){C[0]=j;e:for(var I=0,M=C.length,Z=M>>>1;I<Z;){var X=2*(I+1)-1,de=C[X],he=X+1,Ce=C[he];if(0>o(de,j))he<M&&0>o(Ce,de)?(C[I]=Ce,C[he]=j,I=he):(C[I]=de,C[X]=j,I=X);else if(he<M&&0>o(Ce,j))C[I]=Ce,C[he]=j,I=he;else break e}}return T}function o(C,T){var j=C.sortIndex-T.sortIndex;return j!==0?j:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],c=1,d=null,f=3,v=!1,y=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=C)r(u),T.sortIndex=T.expirationTime,t(a,T);else break;T=n(u)}}function k(C){if(w=!1,p(C),!y)if(n(a)!==null)y=!0,N(_);else{var T=n(u);T!==null&&D(k,T.startTime-C)}}function _(C,T){y=!1,w&&(w=!1,h(L),L=-1),v=!0;var j=f;try{for(p(T),d=n(a);d!==null&&(!(d.expirationTime>T)||C&&!U());){var I=d.callback;if(typeof I=="function"){d.callback=null,f=d.priorityLevel;var M=I(d.expirationTime<=T);T=e.unstable_now(),typeof M=="function"?d.callback=M:d===n(a)&&r(a),p(T)}else r(a);d=n(a)}if(d!==null)var Z=!0;else{var X=n(u);X!==null&&D(k,X.startTime-T),Z=!1}return Z}finally{d=null,f=j,v=!1}}var O=!1,R=null,L=-1,Y=5,z=-1;function U(){return!(e.unstable_now()-z<Y)}function ze(){if(R!==null){var C=e.unstable_now();z=C;var T=!0;try{T=R(!0,C)}finally{T?nt():(O=!1,R=null)}}else O=!1}var nt;if(typeof g=="function")nt=function(){g(ze)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,A=F.port2;F.port1.onmessage=ze,nt=function(){A.postMessage(null)}}else nt=function(){E(ze,0)};function N(C){R=C,O||(O=!0,nt())}function D(C,T){L=E(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,N(_))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var j=f;f=T;try{return C()}finally{f=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var j=f;f=C;try{return T()}finally{f=j}},e.unstable_scheduleCallback=function(C,T,j){var I=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?I+j:I):j=I,C){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=j+M,C={id:c++,callback:T,priorityLevel:C,startTime:j,expirationTime:M,sortIndex:-1},j>I?(C.sortIndex=j,t(u,C),n(a)===null&&C===n(u)&&(w?(h(L),L=-1):w=!0,D(k,j-I))):(C.sortIndex=M,t(a,C),y||v||(y=!0,N(_))),C},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(C){var T=f;return function(){var j=f;f=T;try{return C.apply(this,arguments)}finally{f=j}}}})(ip);op.exports=ip;var m0=op.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0=x,Ze=m0;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sp=new Set,fo={};function Fn(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(fo[e]=t,e=0;e<t.length;e++)sp.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ql=Object.prototype.hasOwnProperty,y0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tc={},Pc={};function v0(e){return ql.call(Pc,e)?!0:ql.call(Tc,e)?!1:y0.test(e)?Pc[e]=!0:(Tc[e]=!0,!1)}function w0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function x0(e,t,n,r){if(t===null||typeof t>"u"||w0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var mu=/[\-:]([a-z])/g;function gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mu,gu);_e[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mu,gu);_e[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mu,gu);_e[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function yu(e,t,n,r){var o=_e.hasOwnProperty(t)?_e[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(x0(t,n,o,r)&&(n=null),r||o===null?v0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),vu=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),lp=Symbol.for("react.provider"),ap=Symbol.for("react.context"),wu=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),xu=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),up=Symbol.for("react.offscreen"),jc=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=jc&&e[jc]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,il;function Qr(e){if(il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);il=t&&t[1]||""}return`
`+il+e}var sl=!1;function ll(e,t){if(!e||sl)return"";sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qr(e):""}function S0(e){switch(e.tag){case 5:return Qr(e.type);case 16:return Qr("Lazy");case 13:return Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 2:case 15:return e=ll(e.type,!1),e;case 11:return e=ll(e.type.render,!1),e;case 1:return e=ll(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Qn:return"Portal";case Yl:return"Profiler";case vu:return"StrictMode";case Kl:return"Suspense";case Ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ap:return(e.displayName||"Context")+".Consumer";case lp:return(e._context.displayName||"Context")+".Provider";case wu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xu:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function k0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function E0(e){var t=cp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ko(e){e._valueTracker||(e._valueTracker=E0(e))}function dp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gl(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fp(e,t){t=t.checked,t!=null&&yu(e,"checked",t,!1)}function Xl(e,t){fp(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zl(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zl(e,t,n){(t!=="number"||Vi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jr=Array.isArray;function ur(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ac(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Jr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function pp(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qo,mp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function po(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C0=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(e){C0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),to[t]=to[e]})});function gp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||to.hasOwnProperty(e)&&to[e]?(""+t).trim():t+"px"}function yp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=gp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var b0=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(e,t){if(t){if(b0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oa=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ia=null,cr=null,dr=null;function Dc(e){if(e=zo(e)){if(typeof ia!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Ts(t),ia(e.stateNode,e.type,t))}}function vp(e){cr?dr?dr.push(e):dr=[e]:cr=e}function wp(){if(cr){var e=cr,t=dr;if(dr=cr=null,Dc(e),t)for(e=0;e<t.length;e++)Dc(t[e])}}function xp(e,t){return e(t)}function Sp(){}var al=!1;function kp(e,t,n){if(al)return e(t,n);al=!0;try{return xp(e,t,n)}finally{al=!1,(cr!==null||dr!==null)&&(Sp(),wp())}}function ho(e,t){var n=e.stateNode;if(n===null)return null;var r=Ts(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var sa=!1;if(It)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){sa=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{sa=!1}function $0(e,t,n,r,o,i,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var no=!1,qi=null,Yi=!1,la=null,_0={onError:function(e){no=!0,qi=e}};function O0(e,t,n,r,o,i,s,l,a){no=!1,qi=null,$0.apply(_0,arguments)}function R0(e,t,n,r,o,i,s,l,a){if(O0.apply(this,arguments),no){if(no){var u=qi;no=!1,qi=null}else throw Error(P(198));Yi||(Yi=!0,la=u)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ep(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zc(e){if(Mn(e)!==e)throw Error(P(188))}function T0(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return zc(o),e;if(i===r)return zc(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Cp(e){return e=T0(e),e!==null?bp(e):null}function bp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bp(e);if(t!==null)return t;e=e.sibling}return null}var $p=Ze.unstable_scheduleCallback,Ic=Ze.unstable_cancelCallback,P0=Ze.unstable_shouldYield,j0=Ze.unstable_requestPaint,fe=Ze.unstable_now,N0=Ze.unstable_getCurrentPriorityLevel,ku=Ze.unstable_ImmediatePriority,_p=Ze.unstable_UserBlockingPriority,Ki=Ze.unstable_NormalPriority,L0=Ze.unstable_LowPriority,Op=Ze.unstable_IdlePriority,$s=null,Ot=null;function A0(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot($s,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:z0,B0=Math.log,D0=Math.LN2;function z0(e){return e>>>=0,e===0?32:31-(B0(e)/D0|0)|0}var Jo=64,Go=4194304;function Gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Gr(l):(i&=s,i!==0&&(r=Gr(i)))}else s=n&~o,s!==0?r=Gr(s):i!==0&&(r=Gr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),o=1<<n,r|=e[n],t&=~o;return r}function I0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-vt(i),l=1<<s,a=o[s];a===-1?(!(l&n)||l&r)&&(o[s]=I0(l,t)):a<=t&&(e.expiredLanes|=l),i&=~l}}function aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rp(){var e=Jo;return Jo<<=1,!(Jo&4194240)&&(Jo=64),e}function ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function M0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-vt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Eu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function Tp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pp,Cu,jp,Np,Lp,ua=!1,Xo=[],on=null,sn=null,ln=null,mo=new Map,go=new Map,Xt=[],U0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fc(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(t.pointerId)}}function Fr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=zo(t),t!==null&&Cu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function H0(e,t,n,r,o){switch(t){case"focusin":return on=Fr(on,e,t,n,r,o),!0;case"dragenter":return sn=Fr(sn,e,t,n,r,o),!0;case"mouseover":return ln=Fr(ln,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return mo.set(i,Fr(mo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,go.set(i,Fr(go.get(i)||null,e,t,n,r,o)),!0}return!1}function Ap(e){var t=Cn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ep(n),t!==null){e.blockedOn=t,Lp(e.priority,function(){jp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oa=r,n.target.dispatchEvent(r),oa=null}else return t=zo(n),t!==null&&Cu(t),e.blockedOn=n,!1;t.shift()}return!0}function Mc(e,t,n){ki(e)&&n.delete(t)}function W0(){ua=!1,on!==null&&ki(on)&&(on=null),sn!==null&&ki(sn)&&(sn=null),ln!==null&&ki(ln)&&(ln=null),mo.forEach(Mc),go.forEach(Mc)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,ua||(ua=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,W0)))}function yo(e){function t(o){return Mr(o,e)}if(0<Xo.length){Mr(Xo[0],e);for(var n=1;n<Xo.length;n++){var r=Xo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Mr(on,e),sn!==null&&Mr(sn,e),ln!==null&&Mr(ln,e),mo.forEach(t),go.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)Ap(n),n.blockedOn===null&&Xt.shift()}var fr=Wt.ReactCurrentBatchConfig,Ji=!0;function V0(e,t,n,r){var o=G,i=fr.transition;fr.transition=null;try{G=1,bu(e,t,n,r)}finally{G=o,fr.transition=i}}function q0(e,t,n,r){var o=G,i=fr.transition;fr.transition=null;try{G=4,bu(e,t,n,r)}finally{G=o,fr.transition=i}}function bu(e,t,n,r){if(Ji){var o=ca(e,t,n,r);if(o===null)wl(e,t,r,Gi,n),Fc(e,r);else if(H0(o,e,t,n,r))r.stopPropagation();else if(Fc(e,r),t&4&&-1<U0.indexOf(e)){for(;o!==null;){var i=zo(o);if(i!==null&&Pp(i),i=ca(e,t,n,r),i===null&&wl(e,t,r,Gi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else wl(e,t,r,null,n)}}var Gi=null;function ca(e,t,n,r){if(Gi=null,e=Su(r),e=Cn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ep(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function Bp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N0()){case ku:return 1;case _p:return 4;case Ki:case L0:return 16;case Op:return 536870912;default:return 16}default:return 16}}var tn=null,$u=null,Ei=null;function Dp(){if(Ei)return Ei;var e,t=$u,n=t.length,r,o="value"in tn?tn.value:tn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Ei=o.slice(e,1<r?1-r:void 0)}function Ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function Uc(){return!1}function tt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zo:Uc,this.isPropagationStopped=Uc,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),t}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_u=tt(Rr),Do=ue({},Rr,{view:0,detail:0}),Y0=tt(Do),cl,dl,Ur,_s=ue({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(cl=e.screenX-Ur.screenX,dl=e.screenY-Ur.screenY):dl=cl=0,Ur=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:dl}}),Hc=tt(_s),K0=ue({},_s,{dataTransfer:0}),Q0=tt(K0),J0=ue({},Do,{relatedTarget:0}),fl=tt(J0),G0=ue({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=tt(G0),Z0=ue({},Rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ey=tt(Z0),ty=ue({},Rr,{data:0}),Wc=tt(ty),ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=oy[e])?!!t[e]:!1}function Ou(){return iy}var sy=ue({},Do,{key:function(e){if(e.key){var t=ny[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ry[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?Ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ly=tt(sy),ay=ue({},_s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=tt(ay),uy=ue({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),cy=tt(uy),dy=ue({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=tt(dy),py=ue({},_s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hy=tt(py),my=[9,13,27,32],Ru=It&&"CompositionEvent"in window,ro=null;It&&"documentMode"in document&&(ro=document.documentMode);var gy=It&&"TextEvent"in window&&!ro,zp=It&&(!Ru||ro&&8<ro&&11>=ro),qc=" ",Yc=!1;function Ip(e,t){switch(e){case"keyup":return my.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function yy(e,t){switch(e){case"compositionend":return Fp(t);case"keypress":return t.which!==32?null:(Yc=!0,qc);case"textInput":return e=t.data,e===qc&&Yc?null:e;default:return null}}function vy(e,t){if(Gn)return e==="compositionend"||!Ru&&Ip(e,t)?(e=Dp(),Ei=$u=tn=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zp&&t.locale!=="ko"?null:t.data;default:return null}}var wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wy[e.type]:t==="textarea"}function Mp(e,t,n,r){vp(r),t=Xi(t,"onChange"),0<t.length&&(n=new _u("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var oo=null,vo=null;function xy(e){Xp(e,0)}function Os(e){var t=er(e);if(dp(t))return e}function Sy(e,t){if(e==="change")return t}var Up=!1;if(It){var pl;if(It){var hl="oninput"in document;if(!hl){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),hl=typeof Qc.oninput=="function"}pl=hl}else pl=!1;Up=pl&&(!document.documentMode||9<document.documentMode)}function Jc(){oo&&(oo.detachEvent("onpropertychange",Hp),vo=oo=null)}function Hp(e){if(e.propertyName==="value"&&Os(vo)){var t=[];Mp(t,vo,e,Su(e)),kp(xy,t)}}function ky(e,t,n){e==="focusin"?(Jc(),oo=t,vo=n,oo.attachEvent("onpropertychange",Hp)):e==="focusout"&&Jc()}function Ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Os(vo)}function Cy(e,t){if(e==="click")return Os(t)}function by(e,t){if(e==="input"||e==="change")return Os(t)}function $y(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:$y;function wo(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ql.call(t,o)||!kt(e[o],t[o]))return!1}return!0}function Gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xc(e,t){var n=Gc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gc(n)}}function Wp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vp(){for(var e=window,t=Vi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vi(e.document)}return t}function Tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _y(e){var t=Vp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wp(n.ownerDocument.documentElement,n)){if(r!==null&&Tu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Xc(n,i);var s=Xc(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Oy=It&&"documentMode"in document&&11>=document.documentMode,Xn=null,da=null,io=null,fa=!1;function Zc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fa||Xn==null||Xn!==Vi(r)||(r=Xn,"selectionStart"in r&&Tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&wo(io,r)||(io=r,r=Xi(da,"onSelect"),0<r.length&&(t=new _u("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xn)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zn={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},ml={},qp={};It&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function Rs(e){if(ml[e])return ml[e];if(!Zn[e])return e;var t=Zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qp)return ml[e]=t[n];return e}var Yp=Rs("animationend"),Kp=Rs("animationiteration"),Qp=Rs("animationstart"),Jp=Rs("transitionend"),Gp=new Map,ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){Gp.set(e,t),Fn(t,[e])}for(var gl=0;gl<ed.length;gl++){var yl=ed[gl],Ry=yl.toLowerCase(),Ty=yl[0].toUpperCase()+yl.slice(1);gn(Ry,"on"+Ty)}gn(Yp,"onAnimationEnd");gn(Kp,"onAnimationIteration");gn(Qp,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(Jp,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function td(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,R0(r,t,void 0,e),e.currentTarget=null}function Xp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&o.isPropagationStopped())break e;td(o,l,u),i=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&o.isPropagationStopped())break e;td(o,l,u),i=a}}}if(Yi)throw e=la,Yi=!1,la=null,e}function ne(e,t){var n=t[ya];n===void 0&&(n=t[ya]=new Set);var r=e+"__bubble";n.has(r)||(Zp(t,e,2,!1),n.add(r))}function vl(e,t,n){var r=0;t&&(r|=4),Zp(n,e,r,t)}var ti="_reactListening"+Math.random().toString(36).slice(2);function xo(e){if(!e[ti]){e[ti]=!0,sp.forEach(function(n){n!=="selectionchange"&&(Py.has(n)||vl(n,!1,e),vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,vl("selectionchange",!1,t))}}function Zp(e,t,n,r){switch(Bp(t)){case 1:var o=V0;break;case 4:o=q0;break;default:o=bu}n=o.bind(null,t,n,e),o=void 0,!sa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;l!==null;){if(s=Cn(l),s===null)return;if(a=s.tag,a===5||a===6){r=i=s;continue e}l=l.parentNode}}r=r.return}kp(function(){var u=i,c=Su(n),d=[];e:{var f=Gp.get(e);if(f!==void 0){var v=_u,y=e;switch(e){case"keypress":if(Ci(n)===0)break e;case"keydown":case"keyup":v=ly;break;case"focusin":y="focus",v=fl;break;case"focusout":y="blur",v=fl;break;case"beforeblur":case"afterblur":v=fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=cy;break;case Yp:case Kp:case Qp:v=X0;break;case Jp:v=fy;break;case"scroll":v=Y0;break;case"wheel":v=hy;break;case"copy":case"cut":case"paste":v=ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Vc}var w=(t&4)!==0,E=!w&&e==="scroll",h=w?f!==null?f+"Capture":null:f;w=[];for(var g=u,p;g!==null;){p=g;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,h!==null&&(k=ho(g,h),k!=null&&w.push(So(g,k,p)))),E)break;g=g.return}0<w.length&&(f=new v(f,y,null,n,c),d.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==oa&&(y=n.relatedTarget||n.fromElement)&&(Cn(y)||y[Ft]))break e;if((v||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Cn(y):null,y!==null&&(E=Mn(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=Hc,k="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=Vc,k="onPointerLeave",h="onPointerEnter",g="pointer"),E=v==null?f:er(v),p=y==null?f:er(y),f=new w(k,g+"leave",v,n,c),f.target=E,f.relatedTarget=p,k=null,Cn(c)===u&&(w=new w(h,g+"enter",y,n,c),w.target=p,w.relatedTarget=E,k=w),E=k,v&&y)t:{for(w=v,h=y,g=0,p=w;p;p=Hn(p))g++;for(p=0,k=h;k;k=Hn(k))p++;for(;0<g-p;)w=Hn(w),g--;for(;0<p-g;)h=Hn(h),p--;for(;g--;){if(w===h||h!==null&&w===h.alternate)break t;w=Hn(w),h=Hn(h)}w=null}else w=null;v!==null&&nd(d,f,v,w,!1),y!==null&&E!==null&&nd(d,E,y,w,!0)}}e:{if(f=u?er(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var _=Sy;else if(Kc(f))if(Up)_=by;else{_=Ey;var O=ky}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=Cy);if(_&&(_=_(e,u))){Mp(d,_,n,c);break e}O&&O(e,f,u),e==="focusout"&&(O=f._wrapperState)&&O.controlled&&f.type==="number"&&Zl(f,"number",f.value)}switch(O=u?er(u):window,e){case"focusin":(Kc(O)||O.contentEditable==="true")&&(Xn=O,da=u,io=null);break;case"focusout":io=da=Xn=null;break;case"mousedown":fa=!0;break;case"contextmenu":case"mouseup":case"dragend":fa=!1,Zc(d,n,c);break;case"selectionchange":if(Oy)break;case"keydown":case"keyup":Zc(d,n,c)}var R;if(Ru)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Gn?Ip(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(zp&&n.locale!=="ko"&&(Gn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Gn&&(R=Dp()):(tn=c,$u="value"in tn?tn.value:tn.textContent,Gn=!0)),O=Xi(u,L),0<O.length&&(L=new Wc(L,e,null,n,c),d.push({event:L,listeners:O}),R?L.data=R:(R=Fp(n),R!==null&&(L.data=R)))),(R=gy?yy(e,n):vy(e,n))&&(u=Xi(u,"onBeforeInput"),0<u.length&&(c=new Wc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}Xp(d,t)})}function So(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ho(e,n),i!=null&&r.unshift(So(e,i,o)),i=ho(e,t),i!=null&&r.push(So(e,i,o))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nd(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,o?(a=ho(n,i),a!=null&&s.unshift(So(n,a,l))):o||(a=ho(n,i),a!=null&&s.push(So(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var jy=/\r\n?/g,Ny=/\u0000|\uFFFD/g;function rd(e){return(typeof e=="string"?e:""+e).replace(jy,`
`).replace(Ny,"")}function ni(e,t,n){if(t=rd(t),rd(e)!==t&&n)throw Error(P(425))}function Zi(){}var pa=null,ha=null;function ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ga=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,Ay=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(By)}:ga;function By(e){setTimeout(function(){throw e})}function xl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),yo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);yo(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function id(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Tr,ko="__reactProps$"+Tr,Ft="__reactContainer$"+Tr,ya="__reactEvents$"+Tr,Dy="__reactListeners$"+Tr,zy="__reactHandles$"+Tr;function Cn(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=id(e);e!==null;){if(n=e[_t])return n;e=id(e)}return t}e=n,n=e.parentNode}return null}function zo(e){return e=e[_t]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ts(e){return e[ko]||null}var va=[],tr=-1;function yn(e){return{current:e}}function oe(e){0>tr||(e.current=va[tr],va[tr]=null,tr--)}function ee(e,t){tr++,va[tr]=e.current,e.current=t}var mn={},Pe=yn(mn),We=yn(!1),Ln=mn;function yr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function es(){oe(We),oe(Pe)}function sd(e,t,n){if(Pe.current!==mn)throw Error(P(168));ee(Pe,t),ee(We,n)}function eh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,k0(e)||"Unknown",o));return ue({},n,r)}function ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Ln=Pe.current,ee(Pe,e),ee(We,We.current),!0}function ld(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=eh(e,t,Ln),r.__reactInternalMemoizedMergedChildContext=e,oe(We),oe(Pe),ee(Pe,e)):oe(We),ee(We,n)}var At=null,Ps=!1,Sl=!1;function th(e){At===null?At=[e]:At.push(e)}function Iy(e){Ps=!0,th(e)}function vn(){if(!Sl&&At!==null){Sl=!0;var e=0,t=G;try{var n=At;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,Ps=!1}catch(o){throw At!==null&&(At=At.slice(e+1)),$p(ku,vn),o}finally{G=t,Sl=!1}}return null}var nr=[],rr=0,ns=null,rs=0,rt=[],ot=0,An=null,Bt=1,Dt="";function kn(e,t){nr[rr++]=rs,nr[rr++]=ns,ns=e,rs=t}function nh(e,t,n){rt[ot++]=Bt,rt[ot++]=Dt,rt[ot++]=An,An=e;var r=Bt;e=Dt;var o=32-vt(r)-1;r&=~(1<<o),n+=1;var i=32-vt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Bt=1<<32-vt(t)+o|n<<o|r,Dt=i+e}else Bt=1<<i|n<<o|r,Dt=e}function Pu(e){e.return!==null&&(kn(e,1),nh(e,1,0))}function ju(e){for(;e===ns;)ns=nr[--rr],nr[rr]=null,rs=nr[--rr],nr[rr]=null;for(;e===An;)An=rt[--ot],rt[ot]=null,Dt=rt[--ot],rt[ot]=null,Bt=rt[--ot],rt[ot]=null}var Xe=null,Ge=null,ie=!1,yt=null;function rh(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ad(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:Bt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ge=null,!0):!1;default:return!1}}function wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xa(e){if(ie){var t=Ge;if(t){var n=t;if(!ad(e,t)){if(wa(e))throw Error(P(418));t=an(n.nextSibling);var r=Xe;t&&ad(e,t)?rh(r,n):(e.flags=e.flags&-4097|2,ie=!1,Xe=e)}}else{if(wa(e))throw Error(P(418));e.flags=e.flags&-4097|2,ie=!1,Xe=e}}}function ud(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function ri(e){if(e!==Xe)return!1;if(!ie)return ud(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ma(e.type,e.memoizedProps)),t&&(t=Ge)){if(wa(e))throw oh(),Error(P(418));for(;t;)rh(e,t),t=an(t.nextSibling)}if(ud(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Xe?an(e.stateNode.nextSibling):null;return!0}function oh(){for(var e=Ge;e;)e=an(e.nextSibling)}function vr(){Ge=Xe=null,ie=!1}function Nu(e){yt===null?yt=[e]:yt.push(e)}var Fy=Wt.ReactCurrentBatchConfig;function Hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function oi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cd(e){var t=e._init;return t(e._payload)}function ih(e){function t(h,g){if(e){var p=h.deletions;p===null?(h.deletions=[g],h.flags|=16):p.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function o(h,g){return h=fn(h,g),h.index=0,h.sibling=null,h}function i(h,g,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<g?(h.flags|=2,g):p):(h.flags|=2,g)):(h.flags|=1048576,g)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,g,p,k){return g===null||g.tag!==6?(g=Ol(p,h.mode,k),g.return=h,g):(g=o(g,p),g.return=h,g)}function a(h,g,p,k){var _=p.type;return _===Jn?c(h,g,p.props.children,k,p.key):g!==null&&(g.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Jt&&cd(_)===g.type)?(k=o(g,p.props),k.ref=Hr(h,g,p),k.return=h,k):(k=Pi(p.type,p.key,p.props,null,h.mode,k),k.ref=Hr(h,g,p),k.return=h,k)}function u(h,g,p,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==p.containerInfo||g.stateNode.implementation!==p.implementation?(g=Rl(p,h.mode,k),g.return=h,g):(g=o(g,p.children||[]),g.return=h,g)}function c(h,g,p,k,_){return g===null||g.tag!==7?(g=Rn(p,h.mode,k,_),g.return=h,g):(g=o(g,p),g.return=h,g)}function d(h,g,p){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ol(""+g,h.mode,p),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:return p=Pi(g.type,g.key,g.props,null,h.mode,p),p.ref=Hr(h,null,g),p.return=h,p;case Qn:return g=Rl(g,h.mode,p),g.return=h,g;case Jt:var k=g._init;return d(h,k(g._payload),p)}if(Jr(g)||zr(g))return g=Rn(g,h.mode,p,null),g.return=h,g;oi(h,g)}return null}function f(h,g,p,k){var _=g!==null?g.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:l(h,g,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Yo:return p.key===_?a(h,g,p,k):null;case Qn:return p.key===_?u(h,g,p,k):null;case Jt:return _=p._init,f(h,g,_(p._payload),k)}if(Jr(p)||zr(p))return _!==null?null:c(h,g,p,k,null);oi(h,p)}return null}function v(h,g,p,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(p)||null,l(g,h,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Yo:return h=h.get(k.key===null?p:k.key)||null,a(g,h,k,_);case Qn:return h=h.get(k.key===null?p:k.key)||null,u(g,h,k,_);case Jt:var O=k._init;return v(h,g,p,O(k._payload),_)}if(Jr(k)||zr(k))return h=h.get(p)||null,c(g,h,k,_,null);oi(g,k)}return null}function y(h,g,p,k){for(var _=null,O=null,R=g,L=g=0,Y=null;R!==null&&L<p.length;L++){R.index>L?(Y=R,R=null):Y=R.sibling;var z=f(h,R,p[L],k);if(z===null){R===null&&(R=Y);break}e&&R&&z.alternate===null&&t(h,R),g=i(z,g,L),O===null?_=z:O.sibling=z,O=z,R=Y}if(L===p.length)return n(h,R),ie&&kn(h,L),_;if(R===null){for(;L<p.length;L++)R=d(h,p[L],k),R!==null&&(g=i(R,g,L),O===null?_=R:O.sibling=R,O=R);return ie&&kn(h,L),_}for(R=r(h,R);L<p.length;L++)Y=v(R,h,L,p[L],k),Y!==null&&(e&&Y.alternate!==null&&R.delete(Y.key===null?L:Y.key),g=i(Y,g,L),O===null?_=Y:O.sibling=Y,O=Y);return e&&R.forEach(function(U){return t(h,U)}),ie&&kn(h,L),_}function w(h,g,p,k){var _=zr(p);if(typeof _!="function")throw Error(P(150));if(p=_.call(p),p==null)throw Error(P(151));for(var O=_=null,R=g,L=g=0,Y=null,z=p.next();R!==null&&!z.done;L++,z=p.next()){R.index>L?(Y=R,R=null):Y=R.sibling;var U=f(h,R,z.value,k);if(U===null){R===null&&(R=Y);break}e&&R&&U.alternate===null&&t(h,R),g=i(U,g,L),O===null?_=U:O.sibling=U,O=U,R=Y}if(z.done)return n(h,R),ie&&kn(h,L),_;if(R===null){for(;!z.done;L++,z=p.next())z=d(h,z.value,k),z!==null&&(g=i(z,g,L),O===null?_=z:O.sibling=z,O=z);return ie&&kn(h,L),_}for(R=r(h,R);!z.done;L++,z=p.next())z=v(R,h,L,z.value,k),z!==null&&(e&&z.alternate!==null&&R.delete(z.key===null?L:z.key),g=i(z,g,L),O===null?_=z:O.sibling=z,O=z);return e&&R.forEach(function(ze){return t(h,ze)}),ie&&kn(h,L),_}function E(h,g,p,k){if(typeof p=="object"&&p!==null&&p.type===Jn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Yo:e:{for(var _=p.key,O=g;O!==null;){if(O.key===_){if(_=p.type,_===Jn){if(O.tag===7){n(h,O.sibling),g=o(O,p.props.children),g.return=h,h=g;break e}}else if(O.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Jt&&cd(_)===O.type){n(h,O.sibling),g=o(O,p.props),g.ref=Hr(h,O,p),g.return=h,h=g;break e}n(h,O);break}else t(h,O);O=O.sibling}p.type===Jn?(g=Rn(p.props.children,h.mode,k,p.key),g.return=h,h=g):(k=Pi(p.type,p.key,p.props,null,h.mode,k),k.ref=Hr(h,g,p),k.return=h,h=k)}return s(h);case Qn:e:{for(O=p.key;g!==null;){if(g.key===O)if(g.tag===4&&g.stateNode.containerInfo===p.containerInfo&&g.stateNode.implementation===p.implementation){n(h,g.sibling),g=o(g,p.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=Rl(p,h.mode,k),g.return=h,h=g}return s(h);case Jt:return O=p._init,E(h,g,O(p._payload),k)}if(Jr(p))return y(h,g,p,k);if(zr(p))return w(h,g,p,k);oi(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,g!==null&&g.tag===6?(n(h,g.sibling),g=o(g,p),g.return=h,h=g):(n(h,g),g=Ol(p,h.mode,k),g.return=h,h=g),s(h)):n(h,g)}return E}var wr=ih(!0),sh=ih(!1),os=yn(null),is=null,or=null,Lu=null;function Au(){Lu=or=is=null}function Bu(e){var t=os.current;oe(os),e._currentValue=t}function Sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pr(e,t){is=e,Lu=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Lu!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(is===null)throw Error(P(308));or=e,is.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var bn=null;function Du(e){bn===null?bn=[e]:bn.push(e)}function lh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Du(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ah(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mt(e,n)}return o=r.interleaved,o===null?(t.next=t,Du(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mt(e,n)}function bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eu(e,n)}}function dd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ss(e,t,n,r){var o=e.updateQueue;Gt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?i=u:s.next=u,s=a;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==s&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(i!==null){var d=o.baseState;s=0,c=u=a=null,l=i;do{var f=l.lane,v=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(f=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(v,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(v,d,f):y,f==null)break e;d=ue({},d,f);break e;case 2:Gt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[l]:f.push(l))}else v={eventTime:v,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=v,a=d):c=c.next=v,s|=f;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;f=l,l=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(c===null&&(a=d),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Dn|=s,e.lanes=s,e.memoizedState=d}}function fd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Io={},Rt=yn(Io),Eo=yn(Io),Co=yn(Io);function $n(e){if(e===Io)throw Error(P(174));return e}function Iu(e,t){switch(ee(Co,t),ee(Eo,e),ee(Rt,Io),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ta(t,e)}oe(Rt),ee(Rt,t)}function xr(){oe(Rt),oe(Eo),oe(Co)}function uh(e){$n(Co.current);var t=$n(Rt.current),n=ta(t,e.type);t!==n&&(ee(Eo,e),ee(Rt,n))}function Fu(e){Eo.current===e&&(oe(Rt),oe(Eo))}var se=yn(0);function ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kl=[];function Mu(){for(var e=0;e<kl.length;e++)kl[e]._workInProgressVersionPrimary=null;kl.length=0}var $i=Wt.ReactCurrentDispatcher,El=Wt.ReactCurrentBatchConfig,Bn=0,ae=null,ve=null,Se=null,as=!1,so=!1,bo=0,My=0;function Oe(){throw Error(P(321))}function Uu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function Hu(e,t,n,r,o,i){if(Bn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$i.current=e===null||e.memoizedState===null?Vy:qy,e=n(r,o),so){i=0;do{if(so=!1,bo=0,25<=i)throw Error(P(301));i+=1,Se=ve=null,t.updateQueue=null,$i.current=Yy,e=n(r,o)}while(so)}if($i.current=us,t=ve!==null&&ve.next!==null,Bn=0,Se=ve=ae=null,as=!1,t)throw Error(P(300));return e}function Wu(){var e=bo!==0;return bo=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ae.memoizedState=Se=e:Se=Se.next=e,Se}function ct(){if(ve===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=Se===null?ae.memoizedState:Se.next;if(t!==null)Se=t,ve=e;else{if(e===null)throw Error(P(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Se===null?ae.memoizedState=Se=e:Se=Se.next=e}return Se}function $o(e,t){return typeof t=="function"?t(e):t}function Cl(e){var t=ct(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ve,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,a=null,u=i;do{var c=u.lane;if((Bn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,s=r):a=a.next=d,ae.lanes|=c,Dn|=c}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=l,kt(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,Dn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bl(e){var t=ct(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);kt(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ch(){}function dh(e,t){var n=ae,r=ct(),o=t(),i=!kt(r.memoizedState,o);if(i&&(r.memoizedState=o,Me=!0),r=r.queue,Vu(hh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,_o(9,ph.bind(null,n,r,o,t),void 0,null),Ee===null)throw Error(P(349));Bn&30||fh(n,t,o)}return o}function fh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ph(e,t,n,r){t.value=n,t.getSnapshot=r,mh(t)&&gh(e)}function hh(e,t,n){return n(function(){mh(t)&&gh(e)})}function mh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function gh(e){var t=Mt(e,1);t!==null&&wt(t,e,1,-1)}function pd(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:e},t.queue=e,e=e.dispatch=Wy.bind(null,ae,e),[t.memoizedState,e]}function _o(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yh(){return ct().memoizedState}function _i(e,t,n,r){var o=bt();ae.flags|=e,o.memoizedState=_o(1|t,n,void 0,r===void 0?null:r)}function js(e,t,n,r){var o=ct();r=r===void 0?null:r;var i=void 0;if(ve!==null){var s=ve.memoizedState;if(i=s.destroy,r!==null&&Uu(r,s.deps)){o.memoizedState=_o(t,n,i,r);return}}ae.flags|=e,o.memoizedState=_o(1|t,n,i,r)}function hd(e,t){return _i(8390656,8,e,t)}function Vu(e,t){return js(2048,8,e,t)}function vh(e,t){return js(4,2,e,t)}function wh(e,t){return js(4,4,e,t)}function xh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sh(e,t,n){return n=n!=null?n.concat([e]):null,js(4,4,xh.bind(null,t,e),n)}function qu(){}function kh(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Eh(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ch(e,t,n){return Bn&21?(kt(n,t)||(n=Rp(),ae.lanes|=n,Dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function Uy(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=El.transition;El.transition={};try{e(!1),t()}finally{G=n,El.transition=r}}function bh(){return ct().memoizedState}function Hy(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$h(e))_h(t,n);else if(n=lh(e,t,n,r),n!==null){var o=Le();wt(n,e,r,o),Oh(n,t,r)}}function Wy(e,t,n){var r=dn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($h(e))_h(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,kt(l,s)){var a=t.interleaved;a===null?(o.next=o,Du(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=lh(e,t,o,r),n!==null&&(o=Le(),wt(n,e,r,o),Oh(n,t,r))}}function $h(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function _h(e,t){so=as=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Oh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eu(e,n)}}var us={readContext:ut,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Vy={readContext:ut,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:hd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_i(4194308,4,xh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hy.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:pd,useDebugValue:qu,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=pd(!1),t=e[0];return e=Uy.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=bt();if(ie){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ee===null)throw Error(P(349));Bn&30||fh(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,hd(hh.bind(null,r,i,e),[e]),r.flags|=2048,_o(9,ph.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=bt(),t=Ee.identifierPrefix;if(ie){var n=Dt,r=Bt;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=My++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qy={readContext:ut,useCallback:kh,useContext:ut,useEffect:Vu,useImperativeHandle:Sh,useInsertionEffect:vh,useLayoutEffect:wh,useMemo:Eh,useReducer:Cl,useRef:yh,useState:function(){return Cl($o)},useDebugValue:qu,useDeferredValue:function(e){var t=ct();return Ch(t,ve.memoizedState,e)},useTransition:function(){var e=Cl($o)[0],t=ct().memoizedState;return[e,t]},useMutableSource:ch,useSyncExternalStore:dh,useId:bh,unstable_isNewReconciler:!1},Yy={readContext:ut,useCallback:kh,useContext:ut,useEffect:Vu,useImperativeHandle:Sh,useInsertionEffect:vh,useLayoutEffect:wh,useMemo:Eh,useReducer:bl,useRef:yh,useState:function(){return bl($o)},useDebugValue:qu,useDeferredValue:function(e){var t=ct();return ve===null?t.memoizedState=e:Ch(t,ve.memoizedState,e)},useTransition:function(){var e=bl($o)[0],t=ct().memoizedState;return[e,t]},useMutableSource:ch,useSyncExternalStore:dh,useId:bh,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ka(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ns={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),o=dn(e),i=zt(r,o);i.payload=t,n!=null&&(i.callback=n),t=un(e,i,o),t!==null&&(wt(t,e,o,r),bi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),o=dn(e),i=zt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=un(e,i,o),t!==null&&(wt(t,e,o,r),bi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=dn(e),o=zt(n,r);o.tag=2,t!=null&&(o.callback=t),t=un(e,o,r),t!==null&&(wt(t,e,r,n),bi(t,e,r))}};function md(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!wo(n,r)||!wo(o,i):!0}function Rh(e,t,n){var r=!1,o=mn,i=t.contextType;return typeof i=="object"&&i!==null?i=ut(i):(o=Ve(t)?Ln:Pe.current,r=t.contextTypes,i=(r=r!=null)?yr(e,o):mn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ns,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function gd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ns.enqueueReplaceState(t,t.state,null)}function Ea(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},zu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ut(i):(i=Ve(t)?Ln:Pe.current,o.context=yr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ka(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ns.enqueueReplaceState(o,o.state,null),ss(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Sr(e,t){try{var n="",r=t;do n+=S0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ca(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ky=typeof WeakMap=="function"?WeakMap:Map;function Th(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ds||(ds=!0,La=r),Ca(e,t)},n}function Ph(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ca(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ca(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function yd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ky;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=a1.bind(null,e,t,n),t.then(e,e))}function vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var Qy=Wt.ReactCurrentOwner,Me=!1;function Ne(e,t,n,r){t.child=e===null?sh(t,null,n,r):wr(t,e.child,n,r)}function xd(e,t,n,r,o){n=n.render;var i=t.ref;return pr(t,o),r=Hu(e,t,n,r,i,o),n=Wu(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(ie&&n&&Pu(t),t.flags|=1,Ne(e,t,r,o),t.child)}function Sd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ec(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,jh(e,t,i,r,o)):(e=Pi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(s,r)&&e.ref===t.ref)return Ut(e,t,o)}return t.flags|=1,e=fn(i,r),e.ref=t.ref,e.return=t,t.child=e}function jh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(wo(i,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Ut(e,t,o)}return ba(e,t,n,r,o)}function Nh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(sr,Je),Je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(sr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ee(sr,Je),Je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ee(sr,Je),Je|=r;return Ne(e,t,o,n),t.child}function Lh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ba(e,t,n,r,o){var i=Ve(n)?Ln:Pe.current;return i=yr(t,i),pr(t,o),n=Hu(e,t,n,r,i,o),r=Wu(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(ie&&r&&Pu(t),t.flags|=1,Ne(e,t,n,o),t.child)}function kd(e,t,n,r,o){if(Ve(n)){var i=!0;ts(t)}else i=!1;if(pr(t,o),t.stateNode===null)Oi(e,t),Rh(t,n,r),Ea(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ve(n)?Ln:Pe.current,u=yr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&gd(t,s,r,u),Gt=!1;var f=t.memoizedState;s.state=f,ss(t,r,s,o),a=t.memoizedState,l!==r||f!==a||We.current||Gt?(typeof c=="function"&&(ka(t,n,c,r),a=t.memoizedState),(l=Gt||md(t,n,l,r,f,a,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ah(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ht(t.type,l),s.props=u,d=t.pendingProps,f=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=Ve(n)?Ln:Pe.current,a=yr(t,a));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||f!==a)&&gd(t,s,r,a),Gt=!1,f=t.memoizedState,s.state=f,ss(t,r,s,o);var y=t.memoizedState;l!==d||f!==y||We.current||Gt?(typeof v=="function"&&(ka(t,n,v,r),y=t.memoizedState),(u=Gt||md(t,n,u,r,f,y,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return $a(e,t,n,r,i,o)}function $a(e,t,n,r,o,i){Lh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&ld(t,n,!1),Ut(e,t,i);r=t.stateNode,Qy.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=wr(t,e.child,null,i),t.child=wr(t,null,l,i)):Ne(e,t,l,i),t.memoizedState=r.state,o&&ld(t,n,!0),t.child}function Ah(e){var t=e.stateNode;t.pendingContext?sd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sd(e,t.context,!1),Iu(e,t.containerInfo)}function Ed(e,t,n,r,o){return vr(),Nu(o),t.flags|=256,Ne(e,t,n,r),t.child}var _a={dehydrated:null,treeContext:null,retryLane:0};function Oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bh(e,t,n){var r=t.pendingProps,o=se.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ee(se,o&1),e===null)return xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Bs(s,r,0,null),e=Rn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Oa(n),t.memoizedState=_a,e):Yu(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Jy(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=fn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=fn(l,i):(i=Rn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Oa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=_a,r}return i=e.child,e=i.sibling,r=fn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yu(e,t){return t=Bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ii(e,t,n,r){return r!==null&&Nu(r),wr(t,e.child,null,n),e=Yu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jy(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(P(422))),ii(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Bs({mode:"visible",children:r.children},o,0,null),i=Rn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&wr(t,e.child,null,s),t.child.memoizedState=Oa(s),t.memoizedState=_a,i);if(!(t.mode&1))return ii(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(P(419)),r=$l(i,r,void 0),ii(e,t,s,r)}if(l=(s&e.childLanes)!==0,Me||l){if(r=Ee,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Mt(e,o),wt(r,e,o,-1))}return Zu(),r=$l(Error(P(421))),ii(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=u1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ge=an(o.nextSibling),Xe=t,ie=!0,yt=null,e!==null&&(rt[ot++]=Bt,rt[ot++]=Dt,rt[ot++]=An,Bt=e.id,Dt=e.overflow,An=t),t=Yu(t,r.children),t.flags|=4096,t)}function Cd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sa(e.return,t,n)}function _l(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Dh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ne(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cd(e,n,t);else if(e.tag===19)Cd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(se,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ls(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),_l(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ls(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}_l(t,!0,n,null,i);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gy(e,t,n){switch(t.tag){case 3:Ah(t),vr();break;case 5:uh(t);break;case 1:Ve(t.type)&&ts(t);break;case 4:Iu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ee(os,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?Bh(e,t,n):(ee(se,se.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);ee(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Dh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ee(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Nh(e,t,n)}return Ut(e,t,n)}var zh,Ra,Ih,Fh;zh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ra=function(){};Ih=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,$n(Rt.current);var i=null;switch(n){case"input":o=Gl(e,o),r=Gl(e,r),i=[];break;case"select":o=ue({},o,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":o=ea(e,o),r=ea(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zi)}na(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fo.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ne("scroll",e),i||l===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Fh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xy(e,t,n){var r=t.pendingProps;switch(ju(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Ve(t.type)&&es(),Re(t),null;case 3:return r=t.stateNode,xr(),oe(We),oe(Pe),Mu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(Da(yt),yt=null))),Ra(e,t),Re(t),null;case 5:Fu(t);var o=$n(Co.current);if(n=t.type,e!==null&&t.stateNode!=null)Ih(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Re(t),null}if(e=$n(Rt.current),ri(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[_t]=t,r[ko]=i,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(o=0;o<Xr.length;o++)ne(Xr[o],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Nc(r,i),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ne("invalid",r);break;case"textarea":Ac(r,i),ne("invalid",r)}na(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ni(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ni(r.textContent,l,e),o=["children",""+l]):fo.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ne("scroll",r)}switch(n){case"input":Ko(r),Lc(r,i,!0);break;case"textarea":Ko(r),Bc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[_t]=t,e[ko]=r,zh(e,t,!1,!1),t.stateNode=e;e:{switch(s=ra(n,r),n){case"dialog":ne("cancel",e),ne("close",e),o=r;break;case"iframe":case"object":case"embed":ne("load",e),o=r;break;case"video":case"audio":for(o=0;o<Xr.length;o++)ne(Xr[o],e);o=r;break;case"source":ne("error",e),o=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),o=r;break;case"details":ne("toggle",e),o=r;break;case"input":Nc(e,r),o=Gl(e,r),ne("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ue({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Ac(e,r),o=ea(e,r),ne("invalid",e);break;default:o=r}na(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?yp(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&mp(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&po(e,a):typeof a=="number"&&po(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(fo.hasOwnProperty(i)?a!=null&&i==="onScroll"&&ne("scroll",e):a!=null&&yu(e,i,a,s))}switch(n){case"input":Ko(e),Lc(e,r,!1);break;case"textarea":Ko(e),Bc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ur(e,!!r.multiple,i,!1):r.defaultValue!=null&&ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Fh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=$n(Co.current),$n(Rt.current),ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(i=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:ni(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ni(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Re(t),null;case 13:if(oe(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ge!==null&&t.mode&1&&!(t.flags&128))oh(),vr(),t.flags|=98560,i=!1;else if(i=ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[_t]=t}else vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),i=!1}else yt!==null&&(Da(yt),yt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?we===0&&(we=3):Zu())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return xr(),Ra(e,t),e===null&&xo(t.stateNode.containerInfo),Re(t),null;case 10:return Bu(t.type._context),Re(t),null;case 17:return Ve(t.type)&&es(),Re(t),null;case 19:if(oe(se),i=t.memoizedState,i===null)return Re(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Wr(i,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ls(e),s!==null){for(t.flags|=128,Wr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&fe()>kr&&(t.flags|=128,r=!0,Wr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ls(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ie)return Re(t),null}else 2*fe()-i.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,Wr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=fe(),t.sibling=null,n=se.current,ee(se,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return Xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Zy(e,t){switch(ju(t),t.tag){case 1:return Ve(t.type)&&es(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(),oe(We),oe(Pe),Mu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fu(t),null;case 13:if(oe(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(se),null;case 4:return xr(),null;case 10:return Bu(t.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var si=!1,Te=!1,e1=typeof WeakSet=="function"?WeakSet:Set,B=null;function ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function Ta(e,t,n){try{n()}catch(r){ce(e,t,r)}}var bd=!1;function t1(e,t){if(pa=Ji,e=Vp(),Tu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(l=s+o),d!==i||r!==0&&d.nodeType!==3||(a=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)f=d,d=v;for(;;){if(d===e)break t;if(f===n&&++u===o&&(l=s),f===i&&++c===r&&(a=s),(v=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ha={focusedElem:e,selectionRange:n},Ji=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,E=y.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:ht(t.type,w),E);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){ce(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return y=bd,bd=!1,y}function lo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ta(t,n,i)}o=o.next}while(o!==r)}}function Ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mh(e){var t=e.alternate;t!==null&&(e.alternate=null,Mh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[ko],delete t[ya],delete t[Dy],delete t[zy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uh(e){return e.tag===5||e.tag===3||e.tag===4}function $d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(r!==4&&(e=e.child,e!==null))for(ja(e,t,n),e=e.sibling;e!==null;)ja(e,t,n),e=e.sibling}function Na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Na(e,t,n),e=e.sibling;e!==null;)Na(e,t,n),e=e.sibling}var be=null,mt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)Hh(e,t,n),n=n.sibling}function Hh(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount($s,n)}catch{}switch(n.tag){case 5:Te||ir(n,t);case 6:var r=be,o=mt;be=null,Yt(e,t,n),be=r,mt=o,be!==null&&(mt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(mt?(e=be,n=n.stateNode,e.nodeType===8?xl(e.parentNode,n):e.nodeType===1&&xl(e,n),yo(e)):xl(be,n.stateNode));break;case 4:r=be,o=mt,be=n.stateNode.containerInfo,mt=!0,Yt(e,t,n),be=r,mt=o;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Ta(n,t,s),o=o.next}while(o!==r)}Yt(e,t,n);break;case 1:if(!Te&&(ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ce(n,t,l)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Yt(e,t,n),Te=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function _d(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new e1),t.forEach(function(r){var o=c1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,mt=!1;break e;case 3:be=l.stateNode.containerInfo,mt=!0;break e;case 4:be=l.stateNode.containerInfo,mt=!0;break e}l=l.return}if(be===null)throw Error(P(160));Hh(i,s,o),be=null,mt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ce(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wh(t,e),t=t.sibling}function Wh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),Ct(e),r&4){try{lo(3,e,e.return),Ls(3,e)}catch(w){ce(e,e.return,w)}try{lo(5,e,e.return)}catch(w){ce(e,e.return,w)}}break;case 1:pt(t,e),Ct(e),r&512&&n!==null&&ir(n,n.return);break;case 5:if(pt(t,e),Ct(e),r&512&&n!==null&&ir(n,n.return),e.flags&32){var o=e.stateNode;try{po(o,"")}catch(w){ce(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&fp(o,i),ra(l,s);var u=ra(l,i);for(s=0;s<a.length;s+=2){var c=a[s],d=a[s+1];c==="style"?yp(o,d):c==="dangerouslySetInnerHTML"?mp(o,d):c==="children"?po(o,d):yu(o,c,d,u)}switch(l){case"input":Xl(o,i);break;case"textarea":pp(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?ur(o,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?ur(o,!!i.multiple,i.defaultValue,!0):ur(o,!!i.multiple,i.multiple?[]:"",!1))}o[ko]=i}catch(w){ce(e,e.return,w)}}break;case 6:if(pt(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ce(e,e.return,w)}}break;case 3:if(pt(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(t.containerInfo)}catch(w){ce(e,e.return,w)}break;case 4:pt(t,e),Ct(e);break;case 13:pt(t,e),Ct(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ju=fe())),r&4&&_d(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(u=Te)||c,pt(t,e),Te=u):pt(t,e),Ct(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(B=e,c=e.child;c!==null;){for(d=B=c;B!==null;){switch(f=B,v=f.child,f.tag){case 0:case 11:case 14:case 15:lo(4,f,f.return);break;case 1:ir(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ce(r,n,w)}}break;case 5:ir(f,f.return);break;case 22:if(f.memoizedState!==null){Rd(d);continue}}v!==null?(v.return=f,B=v):Rd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,a=d.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=gp("display",s))}catch(w){ce(e,e.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ce(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:pt(t,e),Ct(e),r&4&&_d(e);break;case 21:break;default:pt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Uh(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(po(o,""),r.flags&=-33);var i=$d(e);Na(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=$d(e);ja(e,l,s);break;default:throw Error(P(161))}}catch(a){ce(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function n1(e,t,n){B=e,Vh(e)}function Vh(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var o=B,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||si;if(!s){var l=o.alternate,a=l!==null&&l.memoizedState!==null||Te;l=si;var u=Te;if(si=s,(Te=a)&&!u)for(B=o;B!==null;)s=B,a=s.child,s.tag===22&&s.memoizedState!==null?Td(o):a!==null?(a.return=s,B=a):Td(o);for(;i!==null;)B=i,Vh(i),i=i.sibling;B=o,si=l,Te=u}Od(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,B=i):Od(e)}}function Od(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||Ls(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&fd(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fd(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&yo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Te||t.flags&512&&Pa(t)}catch(f){ce(t,t.return,f)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function Rd(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function Td(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ls(4,t)}catch(a){ce(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ce(t,o,a)}}var i=t.return;try{Pa(t)}catch(a){ce(t,i,a)}break;case 5:var s=t.return;try{Pa(t)}catch(a){ce(t,s,a)}}}catch(a){ce(t,t.return,a)}if(t===e){B=null;break}var l=t.sibling;if(l!==null){l.return=t.return,B=l;break}B=t.return}}var r1=Math.ceil,cs=Wt.ReactCurrentDispatcher,Ku=Wt.ReactCurrentOwner,lt=Wt.ReactCurrentBatchConfig,Q=0,Ee=null,ge=null,$e=0,Je=0,sr=yn(0),we=0,Oo=null,Dn=0,As=0,Qu=0,ao=null,Fe=null,Ju=0,kr=1/0,Nt=null,ds=!1,La=null,cn=null,li=!1,nn=null,fs=0,uo=0,Aa=null,Ri=-1,Ti=0;function Le(){return Q&6?fe():Ri!==-1?Ri:Ri=fe()}function dn(e){return e.mode&1?Q&2&&$e!==0?$e&-$e:Fy.transition!==null?(Ti===0&&(Ti=Rp()),Ti):(e=G,e!==0||(e=window.event,e=e===void 0?16:Bp(e.type)),e):1}function wt(e,t,n,r){if(50<uo)throw uo=0,Aa=null,Error(P(185));Bo(e,n,r),(!(Q&2)||e!==Ee)&&(e===Ee&&(!(Q&2)&&(As|=n),we===4&&Zt(e,$e)),qe(e,r),n===1&&Q===0&&!(t.mode&1)&&(kr=fe()+500,Ps&&vn()))}function qe(e,t){var n=e.callbackNode;F0(e,t);var r=Qi(e,e===Ee?$e:0);if(r===0)n!==null&&Ic(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ic(n),t===1)e.tag===0?Iy(Pd.bind(null,e)):th(Pd.bind(null,e)),Ay(function(){!(Q&6)&&vn()}),n=null;else{switch(Tp(r)){case 1:n=ku;break;case 4:n=_p;break;case 16:n=Ki;break;case 536870912:n=Op;break;default:n=Ki}n=Zh(n,qh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qh(e,t){if(Ri=-1,Ti=0,Q&6)throw Error(P(327));var n=e.callbackNode;if(hr()&&e.callbackNode!==n)return null;var r=Qi(e,e===Ee?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ps(e,r);else{t=r;var o=Q;Q|=2;var i=Kh();(Ee!==e||$e!==t)&&(Nt=null,kr=fe()+500,On(e,t));do try{s1();break}catch(l){Yh(e,l)}while(!0);Au(),cs.current=i,Q=o,ge!==null?t=0:(Ee=null,$e=0,t=we)}if(t!==0){if(t===2&&(o=aa(e),o!==0&&(r=o,t=Ba(e,o))),t===1)throw n=Oo,On(e,0),Zt(e,r),qe(e,fe()),n;if(t===6)Zt(e,r);else{if(o=e.current.alternate,!(r&30)&&!o1(o)&&(t=ps(e,r),t===2&&(i=aa(e),i!==0&&(r=i,t=Ba(e,i))),t===1))throw n=Oo,On(e,0),Zt(e,r),qe(e,fe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:En(e,Fe,Nt);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Ju+500-fe(),10<t)){if(Qi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ga(En.bind(null,e,Fe,Nt),t);break}En(e,Fe,Nt);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-vt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*r1(r/1960))-r,10<r){e.timeoutHandle=ga(En.bind(null,e,Fe,Nt),r);break}En(e,Fe,Nt);break;case 5:En(e,Fe,Nt);break;default:throw Error(P(329))}}}return qe(e,fe()),e.callbackNode===n?qh.bind(null,e):null}function Ba(e,t){var n=ao;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=ps(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Da(t)),e}function Da(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function o1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!kt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Qu,t&=~As,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Pd(e){if(Q&6)throw Error(P(327));hr();var t=Qi(e,0);if(!(t&1))return qe(e,fe()),null;var n=ps(e,t);if(e.tag!==0&&n===2){var r=aa(e);r!==0&&(t=r,n=Ba(e,r))}if(n===1)throw n=Oo,On(e,0),Zt(e,t),qe(e,fe()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e,Fe,Nt),qe(e,fe()),null}function Gu(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(kr=fe()+500,Ps&&vn())}}function zn(e){nn!==null&&nn.tag===0&&!(Q&6)&&hr();var t=Q;Q|=1;var n=lt.transition,r=G;try{if(lt.transition=null,G=1,e)return e()}finally{G=r,lt.transition=n,Q=t,!(Q&6)&&vn()}}function Xu(){Je=sr.current,oe(sr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ly(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(ju(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&es();break;case 3:xr(),oe(We),oe(Pe),Mu();break;case 5:Fu(r);break;case 4:xr();break;case 13:oe(se);break;case 19:oe(se);break;case 10:Bu(r.type._context);break;case 22:case 23:Xu()}n=n.return}if(Ee=e,ge=e=fn(e.current,null),$e=Je=t,we=0,Oo=null,Qu=As=Dn=0,Fe=ao=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}bn=null}return e}function Yh(e,t){do{var n=ge;try{if(Au(),$i.current=us,as){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}as=!1}if(Bn=0,Se=ve=ae=null,so=!1,bo=0,Ku.current=null,n===null||n.return===null){we=1,Oo=t,ge=null;break}e:{var i=e,s=n.return,l=n,a=t;if(t=$e,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=vd(s);if(v!==null){v.flags&=-257,wd(v,s,l,i,t),v.mode&1&&yd(i,u,t),t=v,a=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){yd(i,u,t),Zu();break e}a=Error(P(426))}}else if(ie&&l.mode&1){var E=vd(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),wd(E,s,l,i,t),Nu(Sr(a,l));break e}}i=a=Sr(a,l),we!==4&&(we=2),ao===null?ao=[i]:ao.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Th(i,a,t);dd(i,h);break e;case 1:l=a;var g=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(cn===null||!cn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Ph(i,l,t);dd(i,k);break e}}i=i.return}while(i!==null)}Jh(n)}catch(_){t=_,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function Kh(){var e=cs.current;return cs.current=us,e===null?us:e}function Zu(){(we===0||we===3||we===2)&&(we=4),Ee===null||!(Dn&268435455)&&!(As&268435455)||Zt(Ee,$e)}function ps(e,t){var n=Q;Q|=2;var r=Kh();(Ee!==e||$e!==t)&&(Nt=null,On(e,t));do try{i1();break}catch(o){Yh(e,o)}while(!0);if(Au(),Q=n,cs.current=r,ge!==null)throw Error(P(261));return Ee=null,$e=0,we}function i1(){for(;ge!==null;)Qh(ge)}function s1(){for(;ge!==null&&!P0();)Qh(ge)}function Qh(e){var t=Xh(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Jh(e):ge=t,Ku.current=null}function Jh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zy(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ge=null;return}}else if(n=Xy(n,t,Je),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);we===0&&(we=5)}function En(e,t,n){var r=G,o=lt.transition;try{lt.transition=null,G=1,l1(e,t,n,r)}finally{lt.transition=o,G=r}return null}function l1(e,t,n,r){do hr();while(nn!==null);if(Q&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(M0(e,i),e===Ee&&(ge=Ee=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||li||(li=!0,Zh(Ki,function(){return hr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=lt.transition,lt.transition=null;var s=G;G=1;var l=Q;Q|=4,Ku.current=null,t1(e,n),Wh(n,e),_y(ha),Ji=!!pa,ha=pa=null,e.current=n,n1(n),j0(),Q=l,G=s,lt.transition=i}else e.current=n;if(li&&(li=!1,nn=e,fs=o),i=e.pendingLanes,i===0&&(cn=null),A0(n.stateNode),qe(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ds)throw ds=!1,e=La,La=null,e;return fs&1&&e.tag!==0&&hr(),i=e.pendingLanes,i&1?e===Aa?uo++:(uo=0,Aa=e):uo=0,vn(),null}function hr(){if(nn!==null){var e=Tp(fs),t=lt.transition,n=G;try{if(lt.transition=null,G=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,fs=0,Q&6)throw Error(P(331));var o=Q;for(Q|=4,B=e.current;B!==null;){var i=B,s=i.child;if(B.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:lo(8,c,i)}var d=c.child;if(d!==null)d.return=c,B=d;else for(;B!==null;){c=B;var f=c.sibling,v=c.return;if(Mh(c),c===u){B=null;break}if(f!==null){f.return=v,B=f;break}B=v}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}B=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,B=s;else e:for(;B!==null;){if(i=B,i.flags&2048)switch(i.tag){case 0:case 11:case 15:lo(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,B=h;break e}B=i.return}}var g=e.current;for(B=g;B!==null;){s=B;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,B=p;else e:for(s=g;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ls(9,l)}}catch(_){ce(l,l.return,_)}if(l===s){B=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,B=k;break e}B=l.return}}if(Q=o,vn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot($s,e)}catch{}r=!0}return r}finally{G=n,lt.transition=t}}return!1}function jd(e,t,n){t=Sr(n,t),t=Th(e,t,1),e=un(e,t,1),t=Le(),e!==null&&(Bo(e,1,t),qe(e,t))}function ce(e,t,n){if(e.tag===3)jd(e,e,n);else for(;t!==null;){if(t.tag===3){jd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=Sr(n,e),e=Ph(t,e,1),t=un(t,e,1),e=Le(),t!==null&&(Bo(t,1,e),qe(t,e));break}}t=t.return}}function a1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&($e&n)===n&&(we===4||we===3&&($e&130023424)===$e&&500>fe()-Ju?On(e,0):Qu|=n),qe(e,t)}function Gh(e,t){t===0&&(e.mode&1?(t=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):t=1);var n=Le();e=Mt(e,t),e!==null&&(Bo(e,t,n),qe(e,n))}function u1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gh(e,n)}function c1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Gh(e,n)}var Xh;Xh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,Gy(e,t,n);Me=!!(e.flags&131072)}else Me=!1,ie&&t.flags&1048576&&nh(t,rs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oi(e,t),e=t.pendingProps;var o=yr(t,Pe.current);pr(t,n),o=Hu(null,t,r,e,o,n);var i=Wu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(i=!0,ts(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,zu(t),o.updater=Ns,t.stateNode=o,o._reactInternals=t,Ea(t,r,e,n),t=$a(null,t,r,!0,i,n)):(t.tag=0,ie&&i&&Pu(t),Ne(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=f1(r),e=ht(r,e),o){case 0:t=ba(null,t,r,e,n);break e;case 1:t=kd(null,t,r,e,n);break e;case 11:t=xd(null,t,r,e,n);break e;case 14:t=Sd(null,t,r,ht(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),ba(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),kd(e,t,r,o,n);case 3:e:{if(Ah(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ah(e,t),ss(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Sr(Error(P(423)),t),t=Ed(e,t,r,n,o);break e}else if(r!==o){o=Sr(Error(P(424)),t),t=Ed(e,t,r,n,o);break e}else for(Ge=an(t.stateNode.containerInfo.firstChild),Xe=t,ie=!0,yt=null,n=sh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vr(),r===o){t=Ut(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return uh(t),e===null&&xa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,ma(r,o)?s=null:i!==null&&ma(r,i)&&(t.flags|=32),Lh(e,t),Ne(e,t,s,n),t.child;case 6:return e===null&&xa(t),null;case 13:return Bh(e,t,n);case 4:return Iu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wr(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),xd(e,t,r,o,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,ee(os,r._currentValue),r._currentValue=s,i!==null)if(kt(i.value,s)){if(i.children===o.children&&!We.current){t=Ut(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=zt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Sa(i.return,n,t),l.lanes|=n;break}a=a.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(P(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sa(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ne(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pr(t,n),o=ut(o),r=r(o),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,o=ht(r,t.pendingProps),o=ht(r.type,o),Sd(e,t,r,o,n);case 15:return jh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),Oi(e,t),t.tag=1,Ve(r)?(e=!0,ts(t)):e=!1,pr(t,n),Rh(t,r,o),Ea(t,r,o,n),$a(null,t,r,!0,e,n);case 19:return Dh(e,t,n);case 22:return Nh(e,t,n)}throw Error(P(156,t.tag))};function Zh(e,t){return $p(e,t)}function d1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new d1(e,t,n,r)}function ec(e){return e=e.prototype,!(!e||!e.isReactComponent)}function f1(e){if(typeof e=="function")return ec(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wu)return 11;if(e===xu)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pi(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")ec(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Jn:return Rn(n.children,o,i,t);case vu:s=8,o|=8;break;case Yl:return e=st(12,n,t,o|2),e.elementType=Yl,e.lanes=i,e;case Kl:return e=st(13,n,t,o),e.elementType=Kl,e.lanes=i,e;case Ql:return e=st(19,n,t,o),e.elementType=Ql,e.lanes=i,e;case up:return Bs(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lp:s=10;break e;case ap:s=9;break e;case wu:s=11;break e;case xu:s=14;break e;case Jt:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=st(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Rn(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function Bs(e,t,n,r){return e=st(22,e,r,t),e.elementType=up,e.lanes=n,e.stateNode={isHidden:!1},e}function Ol(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function Rl(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function p1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function tc(e,t,n,r,o,i,s,l,a){return e=new p1(e,t,n,l,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=st(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zu(i),e}function h1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function em(e){if(!e)return mn;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ve(n))return eh(e,n,t)}return t}function tm(e,t,n,r,o,i,s,l,a){return e=tc(n,r,!0,e,o,i,s,l,a),e.context=em(null),n=e.current,r=Le(),o=dn(n),i=zt(r,o),i.callback=t??null,un(n,i,o),e.current.lanes=o,Bo(e,o,r),qe(e,r),e}function Ds(e,t,n,r){var o=t.current,i=Le(),s=dn(o);return n=em(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(o,t,s),e!==null&&(wt(e,o,s,i),bi(e,o,s)),s}function hs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nc(e,t){Nd(e,t),(e=e.alternate)&&Nd(e,t)}function m1(){return null}var nm=typeof reportError=="function"?reportError:function(e){console.error(e)};function rc(e){this._internalRoot=e}zs.prototype.render=rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Ds(e,t,null,null)};zs.prototype.unmount=rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){Ds(null,e,null,null)}),t[Ft]=null}};function zs(e){this._internalRoot=e}zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Np();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&Ap(e)}};function oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ld(){}function g1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=hs(s);i.call(u)}}var s=tm(t,r,e,0,null,!1,!1,"",Ld);return e._reactRootContainer=s,e[Ft]=s.current,xo(e.nodeType===8?e.parentNode:e),zn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=hs(a);l.call(u)}}var a=tc(e,0,!1,null,null,!1,!1,"",Ld);return e._reactRootContainer=a,e[Ft]=a.current,xo(e.nodeType===8?e.parentNode:e),zn(function(){Ds(t,a,n,r)}),a}function Fs(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var a=hs(s);l.call(a)}}Ds(t,s,e,o)}else s=g1(n,t,e,o,r);return hs(s)}Pp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gr(t.pendingLanes);n!==0&&(Eu(t,n|1),qe(t,fe()),!(Q&6)&&(kr=fe()+500,vn()))}break;case 13:zn(function(){var r=Mt(e,1);if(r!==null){var o=Le();wt(r,e,1,o)}}),nc(e,1)}};Cu=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Le();wt(t,e,134217728,n)}nc(e,134217728)}};jp=function(e){if(e.tag===13){var t=dn(e),n=Mt(e,t);if(n!==null){var r=Le();wt(n,e,t,r)}nc(e,t)}};Np=function(){return G};Lp=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};ia=function(e,t,n){switch(t){case"input":if(Xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ts(r);if(!o)throw Error(P(90));dp(r),Xl(r,o)}}}break;case"textarea":pp(e,n);break;case"select":t=n.value,t!=null&&ur(e,!!n.multiple,t,!1)}};xp=Gu;Sp=zn;var y1={usingClientEntryPoint:!1,Events:[zo,er,Ts,vp,wp,Gu]},Vr={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v1={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cp(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||m1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{$s=ai.inject(v1),Ot=ai}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y1;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(t))throw Error(P(200));return h1(e,t,null,n)};et.createRoot=function(e,t){if(!oc(e))throw Error(P(299));var n=!1,r="",o=nm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tc(e,1,!1,null,null,n,!1,r,o),e[Ft]=t.current,xo(e.nodeType===8?e.parentNode:e),new rc(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Cp(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return zn(e)};et.hydrate=function(e,t,n){if(!Is(t))throw Error(P(200));return Fs(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!oc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=nm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=tm(t,null,e,1,n??null,o,!1,i,s),e[Ft]=t.current,xo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new zs(t)};et.render=function(e,t,n){if(!Is(t))throw Error(P(200));return Fs(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!Is(e))throw Error(P(40));return e._reactRootContainer?(zn(function(){Fs(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};et.unstable_batchedUpdates=Gu;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Is(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Fs(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function rm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rm)}catch(e){console.error(e)}}rm(),rp.exports=et;var w1=rp.exports,Ad=w1;Vl.createRoot=Ad.createRoot,Vl.hydrateRoot=Ad.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}var rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rn||(rn={}));const Bd="popstate";function x1(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:l}=r.location;return za("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ms(o)}return k1(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function om(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function S1(){return Math.random().toString(36).substr(2,8)}function Dd(e,t){return{usr:e.state,key:e.key,idx:t}}function za(e,t,n,r){return n===void 0&&(n=null),Ro({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pr(t):t,{state:n,key:t&&t.key||r||S1()})}function ms(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function k1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,l=rn.Pop,a=null,u=c();u==null&&(u=0,s.replaceState(Ro({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){l=rn.Pop;let E=c(),h=E==null?null:E-u;u=E,a&&a({action:l,location:w.location,delta:h})}function f(E,h){l=rn.Push;let g=za(w.location,E,h);u=c()+1;let p=Dd(g,u),k=w.createHref(g);try{s.pushState(p,"",k)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;o.location.assign(k)}i&&a&&a({action:l,location:w.location,delta:1})}function v(E,h){l=rn.Replace;let g=za(w.location,E,h);u=c();let p=Dd(g,u),k=w.createHref(g);s.replaceState(p,"",k),i&&a&&a({action:l,location:w.location,delta:0})}function y(E){let h=o.location.origin!=="null"?o.location.origin:o.location.href,g=typeof E=="string"?E:ms(E);return g=g.replace(/ $/,"%20"),pe(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let w={get action(){return l},get location(){return e(o,s)},listen(E){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Bd,d),a=E,()=>{o.removeEventListener(Bd,d),a=null}},createHref(E){return t(o,E)},createURL:y,encodeLocation(E){let h=y(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:v,go(E){return s.go(E)}};return w}var zd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zd||(zd={}));function E1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Pr(t):t,o=ic(r.pathname||"/",n);if(o==null)return null;let i=im(e);C1(i);let s=null;for(let l=0;s==null&&l<i.length;++l){let a=B1(o);s=N1(i[l],a)}return s}function im(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,l)=>{let a={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};a.relativePath.startsWith("/")&&(pe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=pn([r,a.relativePath]),c=n.concat(a);i.children&&i.children.length>0&&(pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),im(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:P1(u,i.index),routesMeta:c})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,s);else for(let a of sm(i.path))o(i,s,a)}),t}function sm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=sm(r.join("/")),l=[];return l.push(...s.map(a=>a===""?i:[i,a].join("/"))),o&&l.push(...s),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function C1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:j1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const b1=/^:[\w-]+$/,$1=3,_1=2,O1=1,R1=10,T1=-2,Id=e=>e==="*";function P1(e,t){let n=e.split("/"),r=n.length;return n.some(Id)&&(r+=T1),t&&(r+=_1),n.filter(o=>!Id(o)).reduce((o,i)=>o+(b1.test(i)?$1:i===""?O1:R1),r)}function j1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function N1(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let s=0;s<n.length;++s){let l=n[s],a=s===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=L1({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;i.push({params:r,pathname:pn([o,c.pathname]),pathnameBase:F1(pn([o,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(o=pn([o,c.pathnameBase]))}return i}function L1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=A1(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:v}=c;if(f==="*"){let w=l[d]||"";s=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[d];return v&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function A1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),om(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function B1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return om(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ic(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function D1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Pr(e):e;return{pathname:n?n.startsWith("/")?n:z1(n,t):t,search:M1(r),hash:U1(o)}}function z1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Tl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function I1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sc(e,t){let n=I1(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Pr(e):(o=Ro({},e),pe(!o.pathname||!o.pathname.includes("?"),Tl("?","pathname","search",o)),pe(!o.pathname||!o.pathname.includes("#"),Tl("#","pathname","hash",o)),pe(!o.search||!o.search.includes("#"),Tl("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,l;if(s==null)l=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;o.pathname=f.join("/")}l=d>=0?t[d]:"/"}let a=D1(o,l),u=s&&s!=="/"&&s.endsWith("/"),c=(i||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),F1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,U1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function H1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lm=["post","put","patch","delete"];new Set(lm);const W1=["get",...lm];new Set(W1);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function To(){return To=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},To.apply(this,arguments)}const ac=x.createContext(null),V1=x.createContext(null),wn=x.createContext(null),Ms=x.createContext(null),Vt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),am=x.createContext(null);function q1(e,t){let{relative:n}=t===void 0?{}:t;jr()||pe(!1);let{basename:r,navigator:o}=x.useContext(wn),{hash:i,pathname:s,search:l}=dm(e,{relative:n}),a=s;return r!=="/"&&(a=s==="/"?r:pn([r,s])),o.createHref({pathname:a,search:l,hash:i})}function jr(){return x.useContext(Ms)!=null}function Fo(){return jr()||pe(!1),x.useContext(Ms).location}function um(e){x.useContext(wn).static||x.useLayoutEffect(e)}function Nr(){let{isDataRoute:e}=x.useContext(Vt);return e?iv():Y1()}function Y1(){jr()||pe(!1);let e=x.useContext(ac),{basename:t,future:n,navigator:r}=x.useContext(wn),{matches:o}=x.useContext(Vt),{pathname:i}=Fo(),s=JSON.stringify(sc(o,n.v7_relativeSplatPath)),l=x.useRef(!1);return um(()=>{l.current=!0}),x.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=lc(u,JSON.parse(s),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:pn([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,s,i,e])}function cm(){let{matches:e}=x.useContext(Vt),t=e[e.length-1];return t?t.params:{}}function dm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(wn),{matches:o}=x.useContext(Vt),{pathname:i}=Fo(),s=JSON.stringify(sc(o,r.v7_relativeSplatPath));return x.useMemo(()=>lc(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function K1(e,t){return Q1(e,t)}function Q1(e,t,n,r){jr()||pe(!1);let{navigator:o}=x.useContext(wn),{matches:i}=x.useContext(Vt),s=i[i.length-1],l=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=Fo(),c;if(t){var d;let E=typeof t=="string"?Pr(t):t;a==="/"||(d=E.pathname)!=null&&d.startsWith(a)||pe(!1),c=E}else c=u;let f=c.pathname||"/",v=f;if(a!=="/"){let E=a.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let y=E1(e,{pathname:v}),w=ev(y&&y.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:pn([a,o.encodeLocation?o.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:pn([a,o.encodeLocation?o.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,n,r);return t&&w?x.createElement(Ms.Provider,{value:{location:To({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:rn.Pop}},w):w}function J1(){let e=ov(),t=H1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:o},n):null,null)}const G1=x.createElement(J1,null);class X1 extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(Vt.Provider,{value:this.props.routeContext},x.createElement(am.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z1(e){let{routeContext:t,match:n,children:r}=e,o=x.useContext(ac);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Vt.Provider,{value:t},r)}function ev(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let c=s.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||pe(!1),s=s.slice(0,Math.min(s.length,c+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:v}=n,y=d.route.loader&&f[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){a=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,f)=>{let v,y=!1,w=null,E=null;n&&(v=l&&d.route.id?l[d.route.id]:void 0,w=d.route.errorElement||G1,a&&(u<0&&f===0?(y=!0,E=null):u===f&&(y=!0,E=d.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,f+1)),g=()=>{let p;return v?p=w:y?p=E:d.route.Component?p=x.createElement(d.route.Component,null):d.route.element?p=d.route.element:p=c,x.createElement(Z1,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:p})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?x.createElement(X1,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var fm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fm||{}),gs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gs||{});function tv(e){let t=x.useContext(ac);return t||pe(!1),t}function nv(e){let t=x.useContext(V1);return t||pe(!1),t}function rv(e){let t=x.useContext(Vt);return t||pe(!1),t}function pm(e){let t=rv(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function ov(){var e;let t=x.useContext(am),n=nv(gs.UseRouteError),r=pm(gs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function iv(){let{router:e}=tv(fm.UseNavigateStable),t=pm(gs.UseNavigateStable),n=x.useRef(!1);return um(()=>{n.current=!0}),x.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,To({fromRouteId:t},i)))},[e,t])}function sv(e){let{to:t,replace:n,state:r,relative:o}=e;jr()||pe(!1);let{future:i,static:s}=x.useContext(wn),{matches:l}=x.useContext(Vt),{pathname:a}=Fo(),u=Nr(),c=lc(t,sc(l,i.v7_relativeSplatPath),a,o==="path"),d=JSON.stringify(c);return x.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:o}),[u,d,o,n,r]),null}function jt(e){pe(!1)}function lv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=rn.Pop,navigator:i,static:s=!1,future:l}=e;jr()&&pe(!1);let a=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:a,navigator:i,static:s,future:To({v7_relativeSplatPath:!1},l)}),[a,l,i,s]);typeof r=="string"&&(r=Pr(r));let{pathname:c="/",search:d="",hash:f="",state:v=null,key:y="default"}=r,w=x.useMemo(()=>{let E=ic(c,a);return E==null?null:{location:{pathname:E,search:d,hash:f,state:v,key:y},navigationType:o}},[a,c,d,f,v,y,o]);return w==null?null:x.createElement(wn.Provider,{value:u},x.createElement(Ms.Provider,{children:n,value:w}))}function av(e){let{children:t,location:n}=e;return K1(Ia(t),n)}new Promise(()=>{});function Ia(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,o)=>{if(!x.isValidElement(r))return;let i=[...t,o];if(r.type===x.Fragment){n.push.apply(n,Ia(r.props.children,i));return}r.type!==jt&&pe(!1),!r.props.index||!r.props.children||pe(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ia(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fa.apply(this,arguments)}function uv(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function cv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dv(e,t){return e.button===0&&(!t||t==="_self")&&!cv(e)}const fv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],pv="6";try{window.__reactRouterVersion=pv}catch{}const hv="startTransition",Fd=a0[hv];function mv(e){let{basename:t,children:n,future:r,window:o}=e,i=x.useRef();i.current==null&&(i.current=x1({window:o,v5Compat:!0}));let s=i.current,[l,a]=x.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=x.useCallback(d=>{u&&Fd?Fd(()=>a(d)):a(d)},[a,u]);return x.useLayoutEffect(()=>s.listen(c),[s,c]),x.createElement(lv,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const gv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qt=x.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:l,target:a,to:u,preventScrollReset:c,unstable_viewTransition:d}=t,f=uv(t,fv),{basename:v}=x.useContext(wn),y,w=!1;if(typeof u=="string"&&yv.test(u)&&(y=u,gv))try{let p=new URL(window.location.href),k=u.startsWith("//")?new URL(p.protocol+u):new URL(u),_=ic(k.pathname,v);k.origin===p.origin&&_!=null?u=_+k.search+k.hash:w=!0}catch{}let E=q1(u,{relative:o}),h=vv(u,{replace:s,state:l,target:a,preventScrollReset:c,relative:o,unstable_viewTransition:d});function g(p){r&&r(p),p.defaultPrevented||h(p)}return x.createElement("a",Fa({},f,{href:y||E,onClick:w||i?r:g,ref:n,target:a}))});var Md;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Md||(Md={}));var Ud;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ud||(Ud={}));function vv(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:l}=t===void 0?{}:t,a=Nr(),u=Fo(),c=dm(e,{relative:s});return x.useCallback(d=>{if(dv(d,n)){d.preventDefault();let f=r!==void 0?r:ms(u)===ms(c);a(e,{replace:f,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:l})}},[u,a,c,r,o,n,e,i,s,l])}let wv={data:""},xv=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||wv,Sv=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,kv=/\/\*[^]*?\*\/|  +/g,Hd=/\n+/g,en=(e,t)=>{let n="",r="",o="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":r+=i[1]=="f"?en(s,i):i+"{"+en(s,i[1]=="k"?"":t)+"}":typeof s=="object"?r+=en(s,t?t.replace(/([^,])+/g,l=>i.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,l):l?l+" "+a:a)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=en.p?en.p(i,s):i+":"+s+";")}return n+(t&&o?t+"{"+o+"}":o)+r},Pt={},hm=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+hm(e[n]);return t}return e},Ev=(e,t,n,r,o)=>{let i=hm(e),s=Pt[i]||(Pt[i]=(a=>{let u=0,c=11;for(;u<a.length;)c=101*c+a.charCodeAt(u++)>>>0;return"go"+c})(i));if(!Pt[s]){let a=i!==e?e:(u=>{let c,d,f=[{}];for(;c=Sv.exec(u.replace(kv,""));)c[4]?f.shift():c[3]?(d=c[3].replace(Hd," ").trim(),f.unshift(f[0][d]=f[0][d]||{})):f[0][c[1]]=c[2].replace(Hd," ").trim();return f[0]})(e);Pt[s]=en(o?{["@keyframes "+s]:a}:a,n?"":"."+s)}let l=n&&Pt.g?Pt.g:null;return n&&(Pt.g=Pt[s]),((a,u,c,d)=>{d?u.data=u.data.replace(d,a):u.data.indexOf(a)===-1&&(u.data=c?a+u.data:u.data+a)})(Pt[s],t,r,l),s},Cv=(e,t,n)=>e.reduce((r,o,i)=>{let s=t[i];if(s&&s.call){let l=s(n),a=l&&l.props&&l.props.className||/^go/.test(l)&&l;s=a?"."+a:l&&typeof l=="object"?l.props?"":en(l,""):l===!1?"":l}return r+o+(s??"")},"");function Us(e){let t=this||{},n=e.call?e(t.p):e;return Ev(n.unshift?n.raw?Cv(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,xv(t.target),t.g,t.o,t.k)}let mm,Ma,Ua;Us.bind({g:1});let Ht=Us.bind({k:1});function bv(e,t,n,r){en.p=t,mm=e,Ma=n,Ua=r}function xn(e,t){let n=this||{};return function(){let r=arguments;function o(i,s){let l=Object.assign({},i),a=l.className||o.className;n.p=Object.assign({theme:Ma&&Ma()},l),n.o=/ *go\d+/.test(a),l.className=Us.apply(n,r)+(a?" "+a:"");let u=e;return e[0]&&(u=l.as||e,delete l.as),Ua&&u[0]&&Ua(l),mm(u,l)}return o}}var $v=e=>typeof e=="function",ys=(e,t)=>$v(e)?e(t):e,_v=(()=>{let e=0;return()=>(++e).toString()})(),gm=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Ov=20,ji=new Map,Rv=1e3,Wd=e=>{if(ji.has(e))return;let t=setTimeout(()=>{ji.delete(e),Un({type:4,toastId:e})},Rv);ji.set(e,t)},Tv=e=>{let t=ji.get(e);t&&clearTimeout(t)},Ha=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Ov)};case 1:return t.toast.id&&Tv(t.toast.id),{...e,toasts:e.toasts.map(i=>i.id===t.toast.id?{...i,...t.toast}:i)};case 2:let{toast:n}=t;return e.toasts.find(i=>i.id===n.id)?Ha(e,{type:1,toast:n}):Ha(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?Wd(r):e.toasts.forEach(i=>{Wd(i.id)}),{...e,toasts:e.toasts.map(i=>i.id===r||r===void 0?{...i,visible:!1}:i)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(i=>i.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(i=>({...i,pauseDuration:i.pauseDuration+o}))}}},Ni=[],Li={toasts:[],pausedAt:void 0},Un=e=>{Li=Ha(Li,e),Ni.forEach(t=>{t(Li)})},Pv={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},jv=(e={})=>{let[t,n]=x.useState(Li);x.useEffect(()=>(Ni.push(n),()=>{let o=Ni.indexOf(n);o>-1&&Ni.splice(o,1)}),[t]);let r=t.toasts.map(o=>{var i,s;return{...e,...e[o.type],...o,duration:o.duration||((i=e[o.type])==null?void 0:i.duration)||(e==null?void 0:e.duration)||Pv[o.type],style:{...e.style,...(s=e[o.type])==null?void 0:s.style,...o.style}}});return{...t,toasts:r}},Nv=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||_v()}),Mo=e=>(t,n)=>{let r=Nv(t,e,n);return Un({type:2,toast:r}),r.id},te=(e,t)=>Mo("blank")(e,t);te.error=Mo("error");te.success=Mo("success");te.loading=Mo("loading");te.custom=Mo("custom");te.dismiss=e=>{Un({type:3,toastId:e})};te.remove=e=>Un({type:4,toastId:e});te.promise=(e,t,n)=>{let r=te.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(o=>(te.success(ys(t.success,o),{id:r,...n,...n==null?void 0:n.success}),o)).catch(o=>{te.error(ys(t.error,o),{id:r,...n,...n==null?void 0:n.error})}),e};var Lv=(e,t)=>{Un({type:1,toast:{id:e,height:t}})},Av=()=>{Un({type:5,time:Date.now()})},Bv=e=>{let{toasts:t,pausedAt:n}=jv(e);x.useEffect(()=>{if(n)return;let i=Date.now(),s=t.map(l=>{if(l.duration===1/0)return;let a=(l.duration||0)+l.pauseDuration-(i-l.createdAt);if(a<0){l.visible&&te.dismiss(l.id);return}return setTimeout(()=>te.dismiss(l.id),a)});return()=>{s.forEach(l=>l&&clearTimeout(l))}},[t,n]);let r=x.useCallback(()=>{n&&Un({type:6,time:Date.now()})},[n]),o=x.useCallback((i,s)=>{let{reverseOrder:l=!1,gutter:a=8,defaultPosition:u}=s||{},c=t.filter(v=>(v.position||u)===(i.position||u)&&v.height),d=c.findIndex(v=>v.id===i.id),f=c.filter((v,y)=>y<d&&v.visible).length;return c.filter(v=>v.visible).slice(...l?[f+1]:[0,f]).reduce((v,y)=>v+(y.height||0)+a,0)},[t]);return{toasts:t,handlers:{updateHeight:Lv,startPause:Av,endPause:r,calculateOffset:o}}},Dv=Ht`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,zv=Ht`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Iv=Ht`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Fv=xn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Dv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${zv} 0.15s ease-out forwards;
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
    animation: ${Iv} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Mv=Ht`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Uv=xn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Mv} 1s linear infinite;
`,Hv=Ht`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Wv=Ht`
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
}`,Vv=xn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Hv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Wv} 0.2s ease-out forwards;
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
`,qv=xn("div")`
  position: absolute;
`,Yv=xn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Kv=Ht`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Qv=xn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Kv} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Jv=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?x.createElement(Qv,null,t):t:n==="blank"?null:x.createElement(Yv,null,x.createElement(Uv,{...r}),n!=="loading"&&x.createElement(qv,null,n==="error"?x.createElement(Fv,{...r}):x.createElement(Vv,{...r})))},Gv=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Xv=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Zv="0%{opacity:0;} 100%{opacity:1;}",ew="0%{opacity:1;} 100%{opacity:0;}",tw=xn("div")`
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
`,nw=xn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,rw=(e,t)=>{let n=e.includes("top")?1:-1,[r,o]=gm()?[Zv,ew]:[Gv(n),Xv(n)];return{animation:t?`${Ht(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ht(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ow=x.memo(({toast:e,position:t,style:n,children:r})=>{let o=e.height?rw(e.position||t||"top-center",e.visible):{opacity:0},i=x.createElement(Jv,{toast:e}),s=x.createElement(nw,{...e.ariaProps},ys(e.message,e));return x.createElement(tw,{className:e.className,style:{...o,...n,...e.style}},typeof r=="function"?r({icon:i,message:s}):x.createElement(x.Fragment,null,i,s))});bv(x.createElement);var iw=({id:e,className:t,style:n,onHeightUpdate:r,children:o})=>{let i=x.useCallback(s=>{if(s){let l=()=>{let a=s.getBoundingClientRect().height;r(e,a)};l(),new MutationObserver(l).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return x.createElement("div",{ref:i,className:t,style:n},o)},sw=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:gm()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...o}},lw=Us`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ui=16,aw=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:o,containerStyle:i,containerClassName:s})=>{let{toasts:l,handlers:a}=Bv(n);return x.createElement("div",{style:{position:"fixed",zIndex:9999,top:ui,left:ui,right:ui,bottom:ui,pointerEvents:"none",...i},className:s,onMouseEnter:a.startPause,onMouseLeave:a.endPause},l.map(u=>{let c=u.position||t,d=a.calculateOffset(u,{reverseOrder:e,gutter:r,defaultPosition:t}),f=sw(c,d);return x.createElement(iw,{id:u.id,key:u.id,onHeightUpdate:a.updateHeight,className:u.visible?lw:"",style:f},u.type==="custom"?ys(u.message,u):o?o(u):x.createElement(ow,{toast:u,position:c}))}))};function ym(e,t){return function(){return e.apply(t,arguments)}}const{toString:uw}=Object.prototype,{getPrototypeOf:uc}=Object,Hs=(e=>t=>{const n=uw.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Et=e=>(e=e.toLowerCase(),t=>Hs(t)===e),Ws=e=>t=>typeof t===e,{isArray:Lr}=Array,Po=Ws("undefined");function cw(e){return e!==null&&!Po(e)&&e.constructor!==null&&!Po(e.constructor)&&at(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const vm=Et("ArrayBuffer");function dw(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&vm(e.buffer),t}const fw=Ws("string"),at=Ws("function"),wm=Ws("number"),Vs=e=>e!==null&&typeof e=="object",pw=e=>e===!0||e===!1,Ai=e=>{if(Hs(e)!=="object")return!1;const t=uc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},hw=Et("Date"),mw=Et("File"),gw=Et("Blob"),yw=Et("FileList"),vw=e=>Vs(e)&&at(e.pipe),ww=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||at(e.append)&&((t=Hs(e))==="formdata"||t==="object"&&at(e.toString)&&e.toString()==="[object FormData]"))},xw=Et("URLSearchParams"),[Sw,kw,Ew,Cw]=["ReadableStream","Request","Response","Headers"].map(Et),bw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Uo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Lr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function xm(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Sm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,km=e=>!Po(e)&&e!==Sm;function Wa(){const{caseless:e}=km(this)&&this||{},t={},n=(r,o)=>{const i=e&&xm(t,o)||o;Ai(t[i])&&Ai(r)?t[i]=Wa(t[i],r):Ai(r)?t[i]=Wa({},r):Lr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Uo(arguments[r],n);return t}const $w=(e,t,n,{allOwnKeys:r}={})=>(Uo(t,(o,i)=>{n&&at(o)?e[i]=ym(o,n):e[i]=o},{allOwnKeys:r}),e),_w=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ow=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Rw=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&uc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Tw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Pw=e=>{if(!e)return null;if(Lr(e))return e;let t=e.length;if(!wm(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},jw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&uc(Uint8Array)),Nw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Lw=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Aw=Et("HTMLFormElement"),Bw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Vd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Dw=Et("RegExp"),Em=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Uo(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},zw=e=>{Em(e,(t,n)=>{if(at(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(at(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Iw=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Lr(e)?r(e):r(String(e).split(t)),n},Fw=()=>{},Mw=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Pl="abcdefghijklmnopqrstuvwxyz",qd="0123456789",Cm={DIGIT:qd,ALPHA:Pl,ALPHA_DIGIT:Pl+Pl.toUpperCase()+qd},Uw=(e=16,t=Cm.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Hw(e){return!!(e&&at(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ww=e=>{const t=new Array(10),n=(r,o)=>{if(Vs(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Lr(r)?[]:{};return Uo(r,(s,l)=>{const a=n(s,o+1);!Po(a)&&(i[l]=a)}),t[o]=void 0,i}}return r};return n(e,0)},Vw=Et("AsyncFunction"),qw=e=>e&&(Vs(e)||at(e))&&at(e.then)&&at(e.catch),$={isArray:Lr,isArrayBuffer:vm,isBuffer:cw,isFormData:ww,isArrayBufferView:dw,isString:fw,isNumber:wm,isBoolean:pw,isObject:Vs,isPlainObject:Ai,isReadableStream:Sw,isRequest:kw,isResponse:Ew,isHeaders:Cw,isUndefined:Po,isDate:hw,isFile:mw,isBlob:gw,isRegExp:Dw,isFunction:at,isStream:vw,isURLSearchParams:xw,isTypedArray:jw,isFileList:yw,forEach:Uo,merge:Wa,extend:$w,trim:bw,stripBOM:_w,inherits:Ow,toFlatObject:Rw,kindOf:Hs,kindOfTest:Et,endsWith:Tw,toArray:Pw,forEachEntry:Nw,matchAll:Lw,isHTMLForm:Aw,hasOwnProperty:Vd,hasOwnProp:Vd,reduceDescriptors:Em,freezeMethods:zw,toObjectSet:Iw,toCamelCase:Bw,noop:Fw,toFiniteNumber:Mw,findKey:xm,global:Sm,isContextDefined:km,ALPHABET:Cm,generateString:Uw,isSpecCompliantForm:Hw,toJSONObject:Ww,isAsyncFn:Vw,isThenable:qw};function H(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}$.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const bm=H.prototype,$m={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{$m[e]={value:e}});Object.defineProperties(H,$m);Object.defineProperty(bm,"isAxiosError",{value:!0});H.from=(e,t,n,r,o,i)=>{const s=Object.create(bm);return $.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),H.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const Yw=null;function Va(e){return $.isPlainObject(e)||$.isArray(e)}function _m(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function Yd(e,t,n){return e?e.concat(t).map(function(o,i){return o=_m(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Kw(e){return $.isArray(e)&&!e.some(Va)}const Qw=$.toFlatObject($,{},null,function(t){return/^is[A-Z]/.test(t)});function qs(e,t,n){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,E){return!$.isUndefined(E[w])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if($.isDate(y))return y.toISOString();if(!a&&$.isBlob(y))throw new H("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(y)||$.isTypedArray(y)?a&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,w,E){let h=y;if(y&&!E&&typeof y=="object"){if($.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if($.isArray(y)&&Kw(y)||($.isFileList(y)||$.endsWith(w,"[]"))&&(h=$.toArray(y)))return w=_m(w),h.forEach(function(p,k){!($.isUndefined(p)||p===null)&&t.append(s===!0?Yd([w],k,i):s===null?w:w+"[]",u(p))}),!1}return Va(y)?!0:(t.append(Yd(E,w,i),u(y)),!1)}const d=[],f=Object.assign(Qw,{defaultVisitor:c,convertValue:u,isVisitable:Va});function v(y,w){if(!$.isUndefined(y)){if(d.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));d.push(y),$.forEach(y,function(h,g){(!($.isUndefined(h)||h===null)&&o.call(t,h,$.isString(g)?g.trim():g,w,f))===!0&&v(h,w?w.concat(g):[g])}),d.pop()}}if(!$.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Kd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function cc(e,t){this._pairs=[],e&&qs(e,this,t)}const Om=cc.prototype;Om.append=function(t,n){this._pairs.push([t,n])};Om.toString=function(t){const n=t?function(r){return t.call(this,r,Kd)}:Kd;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Jw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Rm(e,t,n){if(!t)return e;const r=n&&n.encode||Jw,o=n&&n.serialize;let i;if(o?i=o(t,n):i=$.isURLSearchParams(t)?t.toString():new cc(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Qd{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){$.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Tm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Gw=typeof URLSearchParams<"u"?URLSearchParams:cc,Xw=typeof FormData<"u"?FormData:null,Zw=typeof Blob<"u"?Blob:null,ex={isBrowser:!0,classes:{URLSearchParams:Gw,FormData:Xw,Blob:Zw},protocols:["http","https","file","blob","url","data"]},dc=typeof window<"u"&&typeof document<"u",tx=(e=>dc&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),nx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",rx=dc&&window.location.href||"http://localhost",ox=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:dc,hasStandardBrowserEnv:tx,hasStandardBrowserWebWorkerEnv:nx,origin:rx},Symbol.toStringTag,{value:"Module"})),xt={...ox,...ex};function ix(e,t){return qs(e,new xt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return xt.isNode&&$.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function sx(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function lx(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Pm(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),a=i>=n.length;return s=!s&&$.isArray(o)?o.length:s,a?($.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!$.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&$.isArray(o[s])&&(o[s]=lx(o[s])),!l)}if($.isFormData(e)&&$.isFunction(e.entries)){const n={};return $.forEachEntry(e,(r,o)=>{t(sx(r),o,n,0)}),n}return null}function ax(e,t,n){if($.isString(e))try{return(t||JSON.parse)(e),$.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ho={transitional:Tm,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=$.isObject(t);if(i&&$.isHTMLForm(t)&&(t=new FormData(t)),$.isFormData(t))return o?JSON.stringify(Pm(t)):t;if($.isArrayBuffer(t)||$.isBuffer(t)||$.isStream(t)||$.isFile(t)||$.isBlob(t)||$.isReadableStream(t))return t;if($.isArrayBufferView(t))return t.buffer;if($.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ix(t,this.formSerializer).toString();if((l=$.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return qs(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),ax(t)):t}],transformResponse:[function(t){const n=this.transitional||Ho.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if($.isResponse(t)||$.isReadableStream(t))return t;if(t&&$.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?H.from(l,H.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:xt.classes.FormData,Blob:xt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],e=>{Ho.headers[e]={}});const ux=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cx=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&ux[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Jd=Symbol("internals");function qr(e){return e&&String(e).trim().toLowerCase()}function Bi(e){return e===!1||e==null?e:$.isArray(e)?e.map(Bi):String(e)}function dx(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const fx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function jl(e,t,n,r,o){if($.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!$.isString(t)){if($.isString(r))return t.indexOf(r)!==-1;if($.isRegExp(r))return r.test(t)}}function px(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function hx(e,t){const n=$.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class Ye{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,a,u){const c=qr(a);if(!c)throw new Error("header name must be a non-empty string");const d=$.findKey(o,c);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||a]=Bi(l))}const s=(l,a)=>$.forEach(l,(u,c)=>i(u,c,a));if($.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if($.isString(t)&&(t=t.trim())&&!fx(t))s(cx(t),n);else if($.isHeaders(t))for(const[l,a]of t.entries())i(a,l,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=qr(t),t){const r=$.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return dx(o);if($.isFunction(n))return n.call(this,o,r);if($.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=qr(t),t){const r=$.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||jl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=qr(s),s){const l=$.findKey(r,s);l&&(!n||jl(r,r[l],l,n))&&(delete r[l],o=!0)}}return $.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||jl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return $.forEach(this,(o,i)=>{const s=$.findKey(r,i);if(s){n[s]=Bi(o),delete n[i];return}const l=t?px(i):String(i).trim();l!==i&&delete n[i],n[l]=Bi(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return $.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&$.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Jd]=this[Jd]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=qr(s);r[l]||(hx(o,s),r[l]=!0)}return $.isArray(t)?t.forEach(i):i(t),this}}Ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(Ye.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});$.freezeMethods(Ye);function Nl(e,t){const n=this||Ho,r=t||n,o=Ye.from(r.headers);let i=r.data;return $.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function jm(e){return!!(e&&e.__CANCEL__)}function Ar(e,t,n){H.call(this,e??"canceled",H.ERR_CANCELED,t,n),this.name="CanceledError"}$.inherits(Ar,H,{__CANCEL__:!0});function Nm(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new H("Request failed with status code "+n.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function mx(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function gx(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),c=r[i];s||(s=u),n[o]=a,r[o]=u;let d=i,f=0;for(;d!==o;)f+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const v=c&&u-c;return v?Math.round(f*1e3/v):void 0}}function yx(e,t){let n=0;const r=1e3/t;let o=null;return function(){const s=this===!0,l=Date.now();if(s||l-n>r)return o&&(clearTimeout(o),o=null),n=l,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(l-n)))}}const vs=(e,t,n=3)=>{let r=0;const o=gx(50,250);return yx(i=>{const s=i.loaded,l=i.lengthComputable?i.total:void 0,a=s-r,u=o(a),c=s<=l;r=s;const d={loaded:s,total:l,progress:l?s/l:void 0,bytes:a,rate:u||void 0,estimated:u&&l&&c?(l-s)/u:void 0,event:i,lengthComputable:l!=null};d[t?"download":"upload"]=!0,e(d)},n)},vx=xt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const l=$.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),wx=xt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];$.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),$.isString(r)&&s.push("path="+r),$.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function xx(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Sx(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Lm(e,t){return e&&!xx(t)?Sx(e,t):t}const Gd=e=>e instanceof Ye?{...e}:e;function In(e,t){t=t||{};const n={};function r(u,c,d){return $.isPlainObject(u)&&$.isPlainObject(c)?$.merge.call({caseless:d},u,c):$.isPlainObject(c)?$.merge({},c):$.isArray(c)?c.slice():c}function o(u,c,d){if($.isUndefined(c)){if(!$.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function i(u,c){if(!$.isUndefined(c))return r(void 0,c)}function s(u,c){if($.isUndefined(c)){if(!$.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const a={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,c)=>o(Gd(u),Gd(c),!0)};return $.forEach(Object.keys(Object.assign({},e,t)),function(c){const d=a[c]||o,f=d(e[c],t[c],c);$.isUndefined(f)&&d!==l||(n[c]=f)}),n}const Am=e=>{const t=In({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:l}=t;t.headers=s=Ye.from(s),t.url=Rm(Lm(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let a;if($.isFormData(n)){if(xt.hasStandardBrowserEnv||xt.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((a=s.getContentType())!==!1){const[u,...c]=a?a.split(";").map(d=>d.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...c].join("; "))}}if(xt.hasStandardBrowserEnv&&(r&&$.isFunction(r)&&(r=r(t)),r||r!==!1&&vx(t.url))){const u=o&&i&&wx.read(i);u&&s.set(o,u)}return t},kx=typeof XMLHttpRequest<"u",Ex=kx&&function(e){return new Promise(function(n,r){const o=Am(e);let i=o.data;const s=Ye.from(o.headers).normalize();let{responseType:l}=o,a;function u(){o.cancelToken&&o.cancelToken.unsubscribe(a),o.signal&&o.signal.removeEventListener("abort",a)}let c=new XMLHttpRequest;c.open(o.method.toUpperCase(),o.url,!0),c.timeout=o.timeout;function d(){if(!c)return;const v=Ye.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!l||l==="text"||l==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:v,config:e,request:c};Nm(function(h){n(h),u()},function(h){r(h),u()},w),c=null}"onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(r(new H("Request aborted",H.ECONNABORTED,o,c)),c=null)},c.onerror=function(){r(new H("Network Error",H.ERR_NETWORK,o,c)),c=null},c.ontimeout=function(){let y=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const w=o.transitional||Tm;o.timeoutErrorMessage&&(y=o.timeoutErrorMessage),r(new H(y,w.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,o,c)),c=null},i===void 0&&s.setContentType(null),"setRequestHeader"in c&&$.forEach(s.toJSON(),function(y,w){c.setRequestHeader(w,y)}),$.isUndefined(o.withCredentials)||(c.withCredentials=!!o.withCredentials),l&&l!=="json"&&(c.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&c.addEventListener("progress",vs(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",vs(o.onUploadProgress)),(o.cancelToken||o.signal)&&(a=v=>{c&&(r(!v||v.type?new Ar(null,e,c):v),c.abort(),c=null)},o.cancelToken&&o.cancelToken.subscribe(a),o.signal&&(o.signal.aborted?a():o.signal.addEventListener("abort",a)));const f=mx(o.url);if(f&&xt.protocols.indexOf(f)===-1){r(new H("Unsupported protocol "+f+":",H.ERR_BAD_REQUEST,e));return}c.send(i||null)})},Cx=(e,t)=>{let n=new AbortController,r;const o=function(a){if(!r){r=!0,s();const u=a instanceof Error?a:this.reason;n.abort(u instanceof H?u:new Ar(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{o(new H(`timeout ${t} of ms exceeded`,H.ETIMEDOUT))},t);const s=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(a=>{a&&(a.removeEventListener?a.removeEventListener("abort",o):a.unsubscribe(o))}),e=null)};e.forEach(a=>a&&a.addEventListener&&a.addEventListener("abort",o));const{signal:l}=n;return l.unsubscribe=s,[l,()=>{i&&clearTimeout(i),i=null}]},bx=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},$x=async function*(e,t,n){for await(const r of e)yield*bx(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Xd=(e,t,n,r,o)=>{const i=$x(e,t,o);let s=0;return new ReadableStream({type:"bytes",async pull(l){const{done:a,value:u}=await i.next();if(a){l.close(),r();return}let c=u.byteLength;n&&n(s+=c),l.enqueue(new Uint8Array(u))},cancel(l){return r(l),i.return()}},{highWaterMark:2})},Zd=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},Ys=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Bm=Ys&&typeof ReadableStream=="function",qa=Ys&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),_x=Bm&&(()=>{let e=!1;const t=new Request(xt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),ef=64*1024,Ya=Bm&&!!(()=>{try{return $.isReadableStream(new Response("").body)}catch{}})(),ws={stream:Ya&&(e=>e.body)};Ys&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!ws[t]&&(ws[t]=$.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new H(`Response type '${t}' is not supported`,H.ERR_NOT_SUPPORT,r)})})})(new Response);const Ox=async e=>{if(e==null)return 0;if($.isBlob(e))return e.size;if($.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if($.isArrayBufferView(e))return e.byteLength;if($.isURLSearchParams(e)&&(e=e+""),$.isString(e))return(await qa(e)).byteLength},Rx=async(e,t)=>{const n=$.toFiniteNumber(e.getContentLength());return n??Ox(t)},Tx=Ys&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:l,onUploadProgress:a,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:f}=Am(e);u=u?(u+"").toLowerCase():"text";let[v,y]=o||i||s?Cx([o,i],s):[],w,E;const h=()=>{!w&&setTimeout(()=>{v&&v.unsubscribe()}),w=!0};let g;try{if(a&&_x&&n!=="get"&&n!=="head"&&(g=await Rx(c,r))!==0){let O=new Request(t,{method:"POST",body:r,duplex:"half"}),R;$.isFormData(r)&&(R=O.headers.get("content-type"))&&c.setContentType(R),O.body&&(r=Xd(O.body,ef,Zd(g,vs(a)),null,qa))}$.isString(d)||(d=d?"cors":"omit"),E=new Request(t,{...f,signal:v,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:d});let p=await fetch(E);const k=Ya&&(u==="stream"||u==="response");if(Ya&&(l||k)){const O={};["status","statusText","headers"].forEach(L=>{O[L]=p[L]});const R=$.toFiniteNumber(p.headers.get("content-length"));p=new Response(Xd(p.body,ef,l&&Zd(R,vs(l,!0)),k&&h,qa),O)}u=u||"text";let _=await ws[$.findKey(ws,u)||"text"](p,e);return!k&&h(),y&&y(),await new Promise((O,R)=>{Nm(O,R,{data:_,headers:Ye.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:E})})}catch(p){throw h(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new H("Network Error",H.ERR_NETWORK,e,E),{cause:p.cause||p}):H.from(p,p&&p.code,e,E)}}),Ka={http:Yw,xhr:Ex,fetch:Tx};$.forEach(Ka,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const tf=e=>`- ${e}`,Px=e=>$.isFunction(e)||e===null||e===!1,Dm={getAdapter:e=>{e=$.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!Px(n)&&(r=Ka[(s=String(n)).toLowerCase()],r===void 0))throw new H(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(tf).join(`
`):" "+tf(i[0]):"as no adapter specified";throw new H("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Ka};function Ll(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ar(null,e)}function nf(e){return Ll(e),e.headers=Ye.from(e.headers),e.data=Nl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Dm.getAdapter(e.adapter||Ho.adapter)(e).then(function(r){return Ll(e),r.data=Nl.call(e,e.transformResponse,r),r.headers=Ye.from(r.headers),r},function(r){return jm(r)||(Ll(e),r&&r.response&&(r.response.data=Nl.call(e,e.transformResponse,r.response),r.response.headers=Ye.from(r.response.headers))),Promise.reject(r)})}const zm="1.7.2",fc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const rf={};fc.transitional=function(t,n,r){function o(i,s){return"[Axios v"+zm+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new H(o(s," has been removed"+(n?" in "+n:"")),H.ERR_DEPRECATED);return n&&!rf[s]&&(rf[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,l):!0}};function jx(e,t,n){if(typeof e!="object")throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],a=l===void 0||s(l,i,e);if(a!==!0)throw new H("option "+i+" must be "+a,H.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new H("Unknown option "+i,H.ERR_BAD_OPTION)}}const Qa={assertOptions:jx,validators:fc},Kt=Qa.validators;class Tn{constructor(t){this.defaults=t,this.interceptors={request:new Qd,response:new Qd}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=In(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Qa.assertOptions(r,{silentJSONParsing:Kt.transitional(Kt.boolean),forcedJSONParsing:Kt.transitional(Kt.boolean),clarifyTimeoutError:Kt.transitional(Kt.boolean)},!1),o!=null&&($.isFunction(o)?n.paramsSerializer={serialize:o}:Qa.assertOptions(o,{encode:Kt.function,serialize:Kt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&$.merge(i.common,i[n.method]);i&&$.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Ye.concat(s,i);const l=[];let a=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(a=a&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let c,d=0,f;if(!a){const y=[nf.bind(this),void 0];for(y.unshift.apply(y,l),y.push.apply(y,u),f=y.length,c=Promise.resolve(n);d<f;)c=c.then(y[d++],y[d++]);return c}f=l.length;let v=n;for(d=0;d<f;){const y=l[d++],w=l[d++];try{v=y(v)}catch(E){w.call(this,E);break}}try{c=nf.call(this,v)}catch(y){return Promise.reject(y)}for(d=0,f=u.length;d<f;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=In(this.defaults,t);const n=Lm(t.baseURL,t.url);return Rm(n,t.params,t.paramsSerializer)}}$.forEach(["delete","get","head","options"],function(t){Tn.prototype[t]=function(n,r){return this.request(In(r||{},{method:t,url:n,data:(r||{}).data}))}});$.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(In(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Tn.prototype[t]=n(),Tn.prototype[t+"Form"]=n(!0)});class pc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new Ar(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pc(function(o){t=o}),cancel:t}}}function Nx(e){return function(n){return e.apply(null,n)}}function Lx(e){return $.isObject(e)&&e.isAxiosError===!0}const Ja={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ja).forEach(([e,t])=>{Ja[t]=e});function Im(e){const t=new Tn(e),n=ym(Tn.prototype.request,t);return $.extend(n,Tn.prototype,t,{allOwnKeys:!0}),$.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Im(In(e,o))},n}const V=Im(Ho);V.Axios=Tn;V.CanceledError=Ar;V.CancelToken=pc;V.isCancel=jm;V.VERSION=zm;V.toFormData=qs;V.AxiosError=H;V.Cancel=V.CanceledError;V.all=function(t){return Promise.all(t)};V.spread=Nx;V.isAxiosError=Lx;V.mergeConfig=In;V.AxiosHeaders=Ye;V.formToJSON=e=>Pm($.isHTMLForm(e)?new FormData(e):e);V.getAdapter=Dm.getAdapter;V.HttpStatusCode=Ja;V.default=V;const Tt=Object.create(null);Tt.open="0";Tt.close="1";Tt.ping="2";Tt.pong="3";Tt.message="4";Tt.upgrade="5";Tt.noop="6";const Di=Object.create(null);Object.keys(Tt).forEach(e=>{Di[Tt[e]]=e});const Ga={type:"error",data:"parser error"},Fm=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Mm=typeof ArrayBuffer=="function",Um=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,hc=({type:e,data:t},n,r)=>Fm&&t instanceof Blob?n?r(t):of(t,r):Mm&&(t instanceof ArrayBuffer||Um(t))?n?r(t):of(new Blob([t]),r):r(Tt[e]+(t||"")),of=(e,t)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];t("b"+(r||""))},n.readAsDataURL(e)};function sf(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Al;function Ax(e,t){if(Fm&&e.data instanceof Blob)return e.data.arrayBuffer().then(sf).then(t);if(Mm&&(e.data instanceof ArrayBuffer||Um(e.data)))return t(sf(e.data));hc(e,!1,n=>{Al||(Al=new TextEncoder),t(Al.encode(n))})}const lf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Zr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<lf.length;e++)Zr[lf.charCodeAt(e)]=e;const Bx=e=>{let t=e.length*.75,n=e.length,r,o=0,i,s,l,a;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const u=new ArrayBuffer(t),c=new Uint8Array(u);for(r=0;r<n;r+=4)i=Zr[e.charCodeAt(r)],s=Zr[e.charCodeAt(r+1)],l=Zr[e.charCodeAt(r+2)],a=Zr[e.charCodeAt(r+3)],c[o++]=i<<2|s>>4,c[o++]=(s&15)<<4|l>>2,c[o++]=(l&3)<<6|a&63;return u},Dx=typeof ArrayBuffer=="function",mc=(e,t)=>{if(typeof e!="string")return{type:"message",data:Hm(e,t)};const n=e.charAt(0);return n==="b"?{type:"message",data:zx(e.substring(1),t)}:Di[n]?e.length>1?{type:Di[n],data:e.substring(1)}:{type:Di[n]}:Ga},zx=(e,t)=>{if(Dx){const n=Bx(e);return Hm(n,t)}else return{base64:!0,data:e}},Hm=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Wm="",Ix=(e,t)=>{const n=e.length,r=new Array(n);let o=0;e.forEach((i,s)=>{hc(i,!1,l=>{r[s]=l,++o===n&&t(r.join(Wm))})})},Fx=(e,t)=>{const n=e.split(Wm),r=[];for(let o=0;o<n.length;o++){const i=mc(n[o],t);if(r.push(i),i.type==="error")break}return r};function Mx(){return new TransformStream({transform(e,t){Ax(e,n=>{const r=n.length;let o;if(r<126)o=new Uint8Array(1),new DataView(o.buffer).setUint8(0,r);else if(r<65536){o=new Uint8Array(3);const i=new DataView(o.buffer);i.setUint8(0,126),i.setUint16(1,r)}else{o=new Uint8Array(9);const i=new DataView(o.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(r))}e.data&&typeof e.data!="string"&&(o[0]|=128),t.enqueue(o),t.enqueue(n)})}})}let Bl;function ci(e){return e.reduce((t,n)=>t+n.length,0)}function di(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let r=0;for(let o=0;o<t;o++)n[o]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function Ux(e,t){Bl||(Bl=new TextDecoder);const n=[];let r=0,o=-1,i=!1;return new TransformStream({transform(s,l){for(n.push(s);;){if(r===0){if(ci(n)<1)break;const a=di(n,1);i=(a[0]&128)===128,o=a[0]&127,o<126?r=3:o===126?r=1:r=2}else if(r===1){if(ci(n)<2)break;const a=di(n,2);o=new DataView(a.buffer,a.byteOffset,a.length).getUint16(0),r=3}else if(r===2){if(ci(n)<8)break;const a=di(n,8),u=new DataView(a.buffer,a.byteOffset,a.length),c=u.getUint32(0);if(c>Math.pow(2,21)-1){l.enqueue(Ga);break}o=c*Math.pow(2,32)+u.getUint32(4),r=3}else{if(ci(n)<o)break;const a=di(n,o);l.enqueue(mc(i?a:Bl.decode(a),t)),r=0}if(o===0||o>e){l.enqueue(Ga);break}}}})}const Vm=4;function ye(e){if(e)return Hx(e)}function Hx(e){for(var t in ye.prototype)e[t]=ye.prototype[t];return e}ye.prototype.on=ye.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};ye.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this};ye.prototype.off=ye.prototype.removeListener=ye.prototype.removeAllListeners=ye.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===t||r.fn===t){n.splice(o,1);break}return n.length===0&&delete this._callbacks["$"+e],this};ye.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,t)}return this};ye.prototype.emitReserved=ye.prototype.emit;ye.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};ye.prototype.hasListeners=function(e){return!!this.listeners(e).length};const it=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function qm(e,...t){return t.reduce((n,r)=>(e.hasOwnProperty(r)&&(n[r]=e[r]),n),{})}const Wx=it.setTimeout,Vx=it.clearTimeout;function Ks(e,t){t.useNativeTimers?(e.setTimeoutFn=Wx.bind(it),e.clearTimeoutFn=Vx.bind(it)):(e.setTimeoutFn=it.setTimeout.bind(it),e.clearTimeoutFn=it.clearTimeout.bind(it))}const qx=1.33;function Yx(e){return typeof e=="string"?Kx(e):Math.ceil((e.byteLength||e.size)*qx)}function Kx(e){let t=0,n=0;for(let r=0,o=e.length;r<o;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}function Qx(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}function Jx(e){let t={},n=e.split("&");for(let r=0,o=n.length;r<o;r++){let i=n[r].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t}class Gx extends Error{constructor(t,n,r){super(t),this.description=n,this.context=r,this.type="TransportError"}}class gc extends ye{constructor(t){super(),this.writable=!1,Ks(this,t),this.opts=t,this.query=t.query,this.socket=t.socket}onError(t,n,r){return super.emitReserved("error",new Gx(t,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const n=mc(t,this.socket.binaryType);this.onPacket(n)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,n={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const n=Qx(t);return n.length?"?"+n:""}}const Ym="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),Xa=64,Xx={};let af=0,fi=0,uf;function cf(e){let t="";do t=Ym[e%Xa]+t,e=Math.floor(e/Xa);while(e>0);return t}function Km(){const e=cf(+new Date);return e!==uf?(af=0,uf=e):e+"."+cf(af++)}for(;fi<Xa;fi++)Xx[Ym[fi]]=fi;let Qm=!1;try{Qm=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Zx=Qm;function Jm(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Zx))return new XMLHttpRequest}catch{}if(!t)try{return new it[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function eS(){}const tS=function(){return new Jm({xdomain:!1}).responseType!=null}();class nS extends gc{constructor(t){if(super(t),this.polling=!1,typeof location<"u"){const r=location.protocol==="https:";let o=location.port;o||(o=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||o!==t.port}const n=t&&t.forceBase64;this.supportsBinary=tS&&!n,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";const n=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Fx(t,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Ix(t,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=Km()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(t,n)}request(t={}){return Object.assign(t,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new mr(this.uri(),t)}doWrite(t,n){const r=this.request({method:"POST",data:t});r.on("success",n),r.on("error",(o,i)=>{this.onError("xhr post error",o,i)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=t}}let mr=class zi extends ye{constructor(t,n){super(),Ks(this,n),this.opts=n,this.method=n.method||"GET",this.uri=t,this.data=n.data!==void 0?n.data:null,this.create()}create(){var t;const n=qm(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this.opts.xd;const r=this.xhr=new Jm(n);try{r.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let o in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(o)&&r.setRequestHeader(o,this.opts.extraHeaders[o])}}catch{}if(this.method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(t=this.opts.cookieJar)===null||t===void 0||t.addCookies(r),"withCredentials"in r&&(r.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(r.timeout=this.opts.requestTimeout),r.onreadystatechange=()=>{var o;r.readyState===3&&((o=this.opts.cookieJar)===null||o===void 0||o.parseCookies(r)),r.readyState===4&&(r.status===200||r.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof r.status=="number"?r.status:0)},0))},r.send(this.data)}catch(o){this.setTimeoutFn(()=>{this.onError(o)},0);return}typeof document<"u"&&(this.index=zi.requestsCount++,zi.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=eS,t)try{this.xhr.abort()}catch{}typeof document<"u"&&delete zi.requests[this.index],this.xhr=null}}onLoad(){const t=this.xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}};mr.requestsCount=0;mr.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",df);else if(typeof addEventListener=="function"){const e="onpagehide"in it?"pagehide":"unload";addEventListener(e,df,!1)}}function df(){for(let e in mr.requests)mr.requests.hasOwnProperty(e)&&mr.requests[e].abort()}const yc=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,n)=>n(t,0),pi=it.WebSocket||it.MozWebSocket,ff=!0,rS="arraybuffer",pf=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class oS extends gc{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const t=this.uri(),n=this.opts.protocols,r=pf?{}:qm(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=ff&&!pf?n?new pi(t,n):new pi(t):new pi(t,n,r)}catch(o){return this.emitReserved("error",o)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],o=n===t.length-1;hc(r,this.supportsBinary,i=>{const s={};try{ff&&this.ws.send(i)}catch{}o&&yc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=Km()),this.supportsBinary||(n.b64=1),this.createUri(t,n)}check(){return!!pi}}class iS extends gc{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(t=>{const n=Ux(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=t.readable.pipeThrough(n).getReader(),o=Mx();o.readable.pipeTo(t.writable),this.writer=o.writable.getWriter();const i=()=>{r.read().then(({done:l,value:a})=>{l||(this.onPacket(a),i())}).catch(l=>{})};i();const s={type:"open"};this.query.sid&&(s.data=`{"sid":"${this.query.sid}"}`),this.writer.write(s).then(()=>this.onOpen())})}))}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],o=n===t.length-1;this.writer.write(r).then(()=>{o&&yc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this.transport)===null||t===void 0||t.close()}}const sS={websocket:oS,webtransport:iS,polling:nS},lS=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,aS=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Za(e){if(e.length>2e3)throw"URI too long";const t=e,n=e.indexOf("["),r=e.indexOf("]");n!=-1&&r!=-1&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let o=lS.exec(e||""),i={},s=14;for(;s--;)i[aS[s]]=o[s]||"";return n!=-1&&r!=-1&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=uS(i,i.path),i.queryKey=cS(i,i.query),i}function uS(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&r.splice(0,1),t.slice(-1)=="/"&&r.splice(r.length-1,1),r}function cS(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,o,i){o&&(n[o]=i)}),n}let Gm=class Kn extends ye{constructor(t,n={}){super(),this.binaryType=rS,this.writeBuffer=[],t&&typeof t=="object"&&(n=t,t=null),t?(t=Za(t),n.hostname=t.host,n.secure=t.protocol==="https"||t.protocol==="wss",n.port=t.port,t.query&&(n.query=t.query)):n.host&&(n.hostname=Za(n.host).host),Ks(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=n.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Jx(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const n=Object.assign({},this.opts.query);n.EIO=Vm,n.transport=t,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new sS[t](r)}open(){let t;if(this.opts.rememberUpgrade&&Kn.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else t=this.transports[0];this.readyState="opening";try{t=this.createTransport(t)}catch{this.transports.shift(),this.open();return}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",n=>this.onClose("transport close",n))}probe(t){let n=this.createTransport(t),r=!1;Kn.priorWebsocketSuccess=!1;const o=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",d=>{if(!r)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Kn.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(c(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=n.name,this.emitReserved("upgradeError",f)}}))};function i(){r||(r=!0,c(),n.close(),n=null)}const s=d=>{const f=new Error("probe error: "+d);f.transport=n.name,i(),this.emitReserved("upgradeError",f)};function l(){s("transport closed")}function a(){s("socket closed")}function u(d){n&&d.name!==n.name&&i()}const c=()=>{n.removeListener("open",o),n.removeListener("error",s),n.removeListener("close",l),this.off("close",a),this.off("upgrading",u)};n.once("open",o),n.once("error",s),n.once("close",l),this.once("close",a),this.once("upgrading",u),this.upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onOpen(){if(this.readyState="open",Kn.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let t=0;const n=this.upgrades.length;for(;t<n;t++)this.probe(this.upgrades[t])}}onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),this.resetPingTimeout(),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const n=new Error("server error");n.code=t.data,this.onError(n);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const o=this.writeBuffer[r].data;if(o&&(n+=Yx(o)),r>0&&n>this.maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}write(t,n,r){return this.sendPacket("message",t,n,r),this}send(t,n,r){return this.sendPacket("message",t,n,r),this}sendPacket(t,n,r,o){if(typeof n=="function"&&(o=n,n=void 0),typeof r=="function"&&(o=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const i={type:t,data:n,options:r};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),o&&this.once("flush",o),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),t()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():t()}):this.upgrading?r():t()),this}onError(t){Kn.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,n){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,n),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const n=[];let r=0;const o=t.length;for(;r<o;r++)~this.transports.indexOf(t[r])&&n.push(t[r]);return n}};Gm.protocol=Vm;function dS(e,t="",n){let r=e;n=n||typeof location<"u"&&location,e==null&&(e=n.protocol+"//"+n.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=n.protocol+e:e=n.host+e),/^(https?|wss?):\/\//.test(e)||(typeof n<"u"?e=n.protocol+"//"+e:e="https://"+e),r=Za(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const i=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+t,r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r}const fS=typeof ArrayBuffer=="function",pS=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Xm=Object.prototype.toString,hS=typeof Blob=="function"||typeof Blob<"u"&&Xm.call(Blob)==="[object BlobConstructor]",mS=typeof File=="function"||typeof File<"u"&&Xm.call(File)==="[object FileConstructor]";function vc(e){return fS&&(e instanceof ArrayBuffer||pS(e))||hS&&e instanceof Blob||mS&&e instanceof File}function Ii(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let n=0,r=e.length;n<r;n++)if(Ii(e[n]))return!0;return!1}if(vc(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return Ii(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&Ii(e[n]))return!0;return!1}function gS(e){const t=[],n=e.data,r=e;return r.data=eu(n,t),r.attachments=t.length,{packet:r,buffers:t}}function eu(e,t){if(!e)return e;if(vc(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=eu(e[r],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=eu(e[r],t));return n}return e}function yS(e,t){return e.data=tu(e.data,t),delete e.attachments,e}function tu(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=tu(e[n],t);else if(typeof e=="object")for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=tu(e[n],t));return e}const vS=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],wS=5;var K;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(K||(K={}));class xS{constructor(t){this.replacer=t}encode(t){return(t.type===K.EVENT||t.type===K.ACK)&&Ii(t)?this.encodeAsBinary({type:t.type===K.EVENT?K.BINARY_EVENT:K.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let n=""+t.type;return(t.type===K.BINARY_EVENT||t.type===K.BINARY_ACK)&&(n+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(n+=t.nsp+","),t.id!=null&&(n+=t.id),t.data!=null&&(n+=JSON.stringify(t.data,this.replacer)),n}encodeAsBinary(t){const n=gS(t),r=this.encodeAsString(n.packet),o=n.buffers;return o.unshift(r),o}}function hf(e){return Object.prototype.toString.call(e)==="[object Object]"}class wc extends ye{constructor(t){super(),this.reviver=t}add(t){let n;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(t);const r=n.type===K.BINARY_EVENT;r||n.type===K.BINARY_ACK?(n.type=r?K.EVENT:K.ACK,this.reconstructor=new SS(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(vc(t)||t.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let n=0;const r={type:Number(t.charAt(0))};if(K[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===K.BINARY_EVENT||r.type===K.BINARY_ACK){const i=n+1;for(;t.charAt(++n)!=="-"&&n!=t.length;);const s=t.substring(i,n);if(s!=Number(s)||t.charAt(n)!=="-")throw new Error("Illegal attachments");r.attachments=Number(s)}if(t.charAt(n+1)==="/"){const i=n+1;for(;++n&&!(t.charAt(n)===","||n===t.length););r.nsp=t.substring(i,n)}else r.nsp="/";const o=t.charAt(n+1);if(o!==""&&Number(o)==o){const i=n+1;for(;++n;){const s=t.charAt(n);if(s==null||Number(s)!=s){--n;break}if(n===t.length)break}r.id=Number(t.substring(i,n+1))}if(t.charAt(++n)){const i=this.tryParse(t.substr(n));if(wc.isPayloadValid(r.type,i))r.data=i;else throw new Error("invalid payload")}return r}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,n){switch(t){case K.CONNECT:return hf(n);case K.DISCONNECT:return n===void 0;case K.CONNECT_ERROR:return typeof n=="string"||hf(n);case K.EVENT:case K.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&vS.indexOf(n[0])===-1);case K.ACK:case K.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class SS{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const n=yS(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const kS=Object.freeze(Object.defineProperty({__proto__:null,Decoder:wc,Encoder:xS,get PacketType(){return K},protocol:wS},Symbol.toStringTag,{value:"Module"}));function gt(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const ES=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Zm extends ye{constructor(t,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[gt(t,"open",this.onopen.bind(this)),gt(t,"packet",this.onpacket.bind(this)),gt(t,"error",this.onerror.bind(this)),gt(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...n){if(ES.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(n.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const r={type:K.EVENT,data:n};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const s=this.ids++,l=n.pop();this._registerAckCallback(s,l),r.id=s}const o=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!o||!this.connected)||(this.connected?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(t,n){var r;const o=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(o===void 0){this.acks[t]=n;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);n.call(this,new Error("operation has timed out"))},o),s=(...l)=>{this.io.clearTimeoutFn(i),n.apply(this,l)};s.withError=!0,this.acks[t]=s}emitWithAck(t,...n){return new Promise((r,o)=>{const i=(s,l)=>s?o(s):r(l);i.withError=!0,n.push(i),this.emit(t,...n)})}_addToQueue(t){let n;typeof t[t.length-1]=="function"&&(n=t.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((o,...i)=>r!==this._queue[0]?void 0:(o!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(o)):(this._queue.shift(),n&&n(null,...i)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!t||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:K.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(r=>String(r.id)===t)){const r=this.acks[t];delete this.acks[t],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case K.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case K.EVENT:case K.BINARY_EVENT:this.onevent(t);break;case K.ACK:case K.BINARY_ACK:this.onack(t);break;case K.DISCONNECT:this.ondisconnect();break;case K.CONNECT_ERROR:this.destroy();const r=new Error(t.data.message);r.data=t.data.data,this.emitReserved("connect_error",r);break}}onevent(t){const n=t.data||[];t.id!=null&&n.push(this.ack(t.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const n=this;let r=!1;return function(...o){r||(r=!0,n.packet({type:K.ACK,id:t,data:o}))}}onack(t){const n=this.acks[t.id];typeof n=="function"&&(delete this.acks[t.id],n.withError&&t.data.unshift(null),n.apply(this,t.data))}onconnect(t,n){this.id=t,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:K.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,t.data)}}}function Br(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Br.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+n:e-n}return Math.min(e,this.max)|0};Br.prototype.reset=function(){this.attempts=0};Br.prototype.setMin=function(e){this.ms=e};Br.prototype.setMax=function(e){this.max=e};Br.prototype.setJitter=function(e){this.jitter=e};class nu extends ye{constructor(t,n){var r;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(n=t,t=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Ks(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Br({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=t;const o=n.parser||kS;this.encoder=new o.Encoder,this.decoder=new o.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var n;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(n=this.backoff)===null||n===void 0||n.setMin(t),this)}randomizationFactor(t){var n;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(n=this.backoff)===null||n===void 0||n.setJitter(t),this)}reconnectionDelayMax(t){var n;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(n=this.backoff)===null||n===void 0||n.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Gm(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const o=gt(n,"open",function(){r.onopen(),t&&t()}),i=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},s=gt(n,"error",i);if(this._timeout!==!1){const l=this._timeout,a=this.setTimeoutFn(()=>{o(),i(new Error("timeout")),n.close()},l);this.opts.autoUnref&&a.unref(),this.subs.push(()=>{this.clearTimeoutFn(a)})}return this.subs.push(o),this.subs.push(s),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(gt(t,"ping",this.onping.bind(this)),gt(t,"data",this.ondata.bind(this)),gt(t,"error",this.onerror.bind(this)),gt(t,"close",this.onclose.bind(this)),gt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(n){this.onclose("parse error",n)}}ondecoded(t){yc(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,n){let r=this.nsps[t];return r?this._autoConnect&&!r.active&&r.connect():(r=new Zm(this,t,n),this.nsps[t]=r),r}_destroy(t){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(t){const n=this.encoder.encode(t);for(let r=0;r<n.length;r++)this.engine.write(n[r],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(t,n){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(o=>{o?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",o)):t.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Yr={};function Pn(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const n=dS(e,t.path||"/socket.io"),r=n.source,o=n.id,i=n.path,s=Yr[o]&&i in Yr[o].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||s;let a;return l?a=new nu(r,t):(Yr[o]||(Yr[o]=new nu(r,t)),a=Yr[o]),n.query&&!t.query&&(t.query=n.queryKey),a.socket(n.path,t)}Object.assign(Pn,{Manager:nu,Socket:Zm,io:Pn,connect:Pn});const eg="http://localhost:3000",mf=Pn(`${eg}`);V.defaults.withCredentials=!0;V.defaults.baseURL=`${eg}`;const CS=async e=>{try{const t=await V.post("/api/v1/bookings/both",e),{currentUserBooking:n,targetedUserBooking:r}=t.data.data;return mf.emit("newBooking",n),mf.emit("newBooking",r),console.log(t.data.data),t.data.data}catch(t){throw console.error("Failed to create booking for both users:",t),t}},gf=async()=>{try{return(await V.get("/api/v1/users/me")).data.data.user}catch(e){throw console.error("Checking failed",e),e}},bS=async(e,t)=>{try{const n=await V.post("/api/v1/users/login",{email:e,password:t}),{accessToken:r}=n.data;return V.defaults.headers.common.Authorization=`Bearer ${r}`,n.data.data.user}catch(n){throw console.error("Login failed:",n),n}},$S=async(e,t,n)=>{try{return(await V.post("/api/v1/users/signup",{name:e,email:t,password:n})).data.data.user}catch(r){throw console.error("Signup failed:",r),r}},tg=async()=>{try{await V.get("/api/v1/users/logout")}catch(e){throw console.error("Logout failed:",e),e}},_S=async()=>{try{const t=(await V.post("/api/v1/users/refreshtoken")).data.data.accessToken;return V.defaults.headers.common.Authorization=`Bearer ${t}`,t}catch(e){throw console.log(e),e}},ng=async e=>{try{return(await V.get(`/api/v1/bookings?userId=${e}`)).data.data.bookings}catch(t){throw console.error("Failed to fetch bookings:",t),t}},OS=async e=>{try{return(await V.post("/api/v1/bookings",e)).data.data.booking}catch(t){throw console.error("Failed to create booking:",t),t}},RS=async(e,t)=>{try{return(await V.patch(`/api/v1/bookings/${e}`,t)).data.data.booking}catch(n){throw console.error("Failed to update booking:",n),n}},TS=async e=>{try{await V.delete(`/api/v1/bookings/${e}`)}catch(t){throw console.error("Failed to delete booking:",t),t}},PS=async e=>{try{return(await V.patch("/api/v1/users/updateMe",e)).data.data.user}catch(t){throw console.error("Failed to update user details:",t),t}},jS=async e=>{try{return(await V.patch("/api/v1/users/updateMyPassword",e)).data.data.user}catch(t){throw console.error("Failed to update user password:",t),t}},NS=async e=>{try{await V.post("/api/v1/users/forgotPassword",{email:e})}catch(t){throw console.error("Failed to send forgot password email:",t),t}},LS=async(e,t)=>{try{return(await V.patch(`/api/v1/users/resetPassword/${e}`,{password:t})).data}catch(n){throw console.error("Failed to reset password:",n.response.data),n}},AS=async e=>{try{return(await V.patch("api/v1/users/updateUserSettings",e)).data.data.user}catch(t){throw new Error(t.response.data.message||"Failed to update settings")}},rg=async e=>{try{return(await V.get(`/api/v1/users/${e}/hours`)).data.hours}catch(t){throw console.error("Err getting hours",t),t}},Sn=x.createContext(),BS=({children:e})=>{const[t,n]=x.useState(null),[r,o]=x.useState(!0),i=Nr(),s=async()=>{o(!0);try{const c=await gf();n(c)}catch{try{if(await _S()){const f=await gf();n(f)}}catch(d){console.error("Failed to refresh token",d)}}finally{o(!1)}};x.useEffect(()=>{s()},[]);const l=async(c,d)=>{var f,v;try{const y=await bS(c,d);n(y),te.success("Login Successful. Welcome!"),i("/calendar")}catch(y){(v=(f=y.response)==null?void 0:f.data)!=null&&v.message&&te.error(y.response.data.message),console.error("Login failed:",y)}},a=async(c,d,f)=>{var v,y;try{const w=await $S(c,d,f);n(w),te.success("Signup Successful. Welcome!"),i("/calendar")}catch(w){(y=(v=w.response)==null?void 0:v.data)!=null&&y.message&&te.error(w.response.data.message),console.error("Signup failed:",w)}},u=async()=>{try{await tg(),n(null),i("/login")}catch(c){console.error("Logout failed:",c)}};return r?m.jsx("div",{children:"Loading..."}):m.jsx(Sn.Provider,{value:{user:t,setUser:n,login:l,signup:a,logout:u},children:e})};var og={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Cs,function(){var n=1e3,r=6e4,o=36e5,i="millisecond",s="second",l="minute",a="hour",u="day",c="week",d="month",f="quarter",v="year",y="date",w="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var A=["th","st","nd","rd"],N=F%100;return"["+F+(A[(N-20)%10]||A[N]||A[0])+"]"}},p=function(F,A,N){var D=String(F);return!D||D.length>=A?F:""+Array(A+1-D.length).join(N)+F},k={s:p,z:function(F){var A=-F.utcOffset(),N=Math.abs(A),D=Math.floor(N/60),C=N%60;return(A<=0?"+":"-")+p(D,2,"0")+":"+p(C,2,"0")},m:function F(A,N){if(A.date()<N.date())return-F(N,A);var D=12*(N.year()-A.year())+(N.month()-A.month()),C=A.clone().add(D,d),T=N-C<0,j=A.clone().add(D+(T?-1:1),d);return+(-(D+(N-C)/(T?C-j:j-C))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:d,y:v,w:c,d:u,D:y,h:a,m:l,s,ms:i,Q:f}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},_="en",O={};O[_]=g;var R="$isDayjsObject",L=function(F){return F instanceof ze||!(!F||!F[R])},Y=function F(A,N,D){var C;if(!A)return _;if(typeof A=="string"){var T=A.toLowerCase();O[T]&&(C=T),N&&(O[T]=N,C=T);var j=A.split("-");if(!C&&j.length>1)return F(j[0])}else{var I=A.name;O[I]=A,C=I}return!D&&C&&(_=C),C||!D&&_},z=function(F,A){if(L(F))return F.clone();var N=typeof A=="object"?A:{};return N.date=F,N.args=arguments,new ze(N)},U=k;U.l=Y,U.i=L,U.w=function(F,A){return z(F,{locale:A.$L,utc:A.$u,x:A.$x,$offset:A.$offset})};var ze=function(){function F(N){this.$L=Y(N.locale,null,!0),this.parse(N),this.$x=this.$x||N.x||{},this[R]=!0}var A=F.prototype;return A.parse=function(N){this.$d=function(D){var C=D.date,T=D.utc;if(C===null)return new Date(NaN);if(U.u(C))return new Date;if(C instanceof Date)return new Date(C);if(typeof C=="string"&&!/Z$/i.test(C)){var j=C.match(E);if(j){var I=j[2]-1||0,M=(j[7]||"0").substring(0,3);return T?new Date(Date.UTC(j[1],I,j[3]||1,j[4]||0,j[5]||0,j[6]||0,M)):new Date(j[1],I,j[3]||1,j[4]||0,j[5]||0,j[6]||0,M)}}return new Date(C)}(N),this.init()},A.init=function(){var N=this.$d;this.$y=N.getFullYear(),this.$M=N.getMonth(),this.$D=N.getDate(),this.$W=N.getDay(),this.$H=N.getHours(),this.$m=N.getMinutes(),this.$s=N.getSeconds(),this.$ms=N.getMilliseconds()},A.$utils=function(){return U},A.isValid=function(){return this.$d.toString()!==w},A.isSame=function(N,D){var C=z(N);return this.startOf(D)<=C&&C<=this.endOf(D)},A.isAfter=function(N,D){return z(N)<this.startOf(D)},A.isBefore=function(N,D){return this.endOf(D)<z(N)},A.$g=function(N,D,C){return U.u(N)?this[D]:this.set(C,N)},A.unix=function(){return Math.floor(this.valueOf()/1e3)},A.valueOf=function(){return this.$d.getTime()},A.startOf=function(N,D){var C=this,T=!!U.u(D)||D,j=U.p(N),I=function(je,xe){var Ke=U.w(C.$u?Date.UTC(C.$y,xe,je):new Date(C.$y,xe,je),C);return T?Ke:Ke.endOf(u)},M=function(je,xe){return U.w(C.toDate()[je].apply(C.toDate("s"),(T?[0,0,0,0]:[23,59,59,999]).slice(xe)),C)},Z=this.$W,X=this.$M,de=this.$D,he="set"+(this.$u?"UTC":"");switch(j){case v:return T?I(1,0):I(31,11);case d:return T?I(1,X):I(0,X+1);case c:var Ce=this.$locale().weekStart||0,ft=(Z<Ce?Z+7:Z)-Ce;return I(T?de-ft:de+(6-ft),X);case u:case y:return M(he+"Hours",0);case a:return M(he+"Minutes",1);case l:return M(he+"Seconds",2);case s:return M(he+"Milliseconds",3);default:return this.clone()}},A.endOf=function(N){return this.startOf(N,!1)},A.$set=function(N,D){var C,T=U.p(N),j="set"+(this.$u?"UTC":""),I=(C={},C[u]=j+"Date",C[y]=j+"Date",C[d]=j+"Month",C[v]=j+"FullYear",C[a]=j+"Hours",C[l]=j+"Minutes",C[s]=j+"Seconds",C[i]=j+"Milliseconds",C)[T],M=T===u?this.$D+(D-this.$W):D;if(T===d||T===v){var Z=this.clone().set(y,1);Z.$d[I](M),Z.init(),this.$d=Z.set(y,Math.min(this.$D,Z.daysInMonth())).$d}else I&&this.$d[I](M);return this.init(),this},A.set=function(N,D){return this.clone().$set(N,D)},A.get=function(N){return this[U.p(N)]()},A.add=function(N,D){var C,T=this;N=Number(N);var j=U.p(D),I=function(X){var de=z(T);return U.w(de.date(de.date()+Math.round(X*N)),T)};if(j===d)return this.set(d,this.$M+N);if(j===v)return this.set(v,this.$y+N);if(j===u)return I(1);if(j===c)return I(7);var M=(C={},C[l]=r,C[a]=o,C[s]=n,C)[j]||1,Z=this.$d.getTime()+N*M;return U.w(Z,this)},A.subtract=function(N,D){return this.add(-1*N,D)},A.format=function(N){var D=this,C=this.$locale();if(!this.isValid())return C.invalidDate||w;var T=N||"YYYY-MM-DDTHH:mm:ssZ",j=U.z(this),I=this.$H,M=this.$m,Z=this.$M,X=C.weekdays,de=C.months,he=C.meridiem,Ce=function(xe,Ke,Ie,Vo){return xe&&(xe[Ke]||xe(D,T))||Ie[Ke].slice(0,Vo)},ft=function(xe){return U.s(I%12||12,xe,"0")},je=he||function(xe,Ke,Ie){var Vo=xe<12?"AM":"PM";return Ie?Vo.toLowerCase():Vo};return T.replace(h,function(xe,Ke){return Ke||function(Ie){switch(Ie){case"YY":return String(D.$y).slice(-2);case"YYYY":return U.s(D.$y,4,"0");case"M":return Z+1;case"MM":return U.s(Z+1,2,"0");case"MMM":return Ce(C.monthsShort,Z,de,3);case"MMMM":return Ce(de,Z);case"D":return D.$D;case"DD":return U.s(D.$D,2,"0");case"d":return String(D.$W);case"dd":return Ce(C.weekdaysMin,D.$W,X,2);case"ddd":return Ce(C.weekdaysShort,D.$W,X,3);case"dddd":return X[D.$W];case"H":return String(I);case"HH":return U.s(I,2,"0");case"h":return ft(1);case"hh":return ft(2);case"a":return je(I,M,!0);case"A":return je(I,M,!1);case"m":return String(M);case"mm":return U.s(M,2,"0");case"s":return String(D.$s);case"ss":return U.s(D.$s,2,"0");case"SSS":return U.s(D.$ms,3,"0");case"Z":return j}return null}(xe)||j.replace(":","")})},A.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},A.diff=function(N,D,C){var T,j=this,I=U.p(D),M=z(N),Z=(M.utcOffset()-this.utcOffset())*r,X=this-M,de=function(){return U.m(j,M)};switch(I){case v:T=de()/12;break;case d:T=de();break;case f:T=de()/3;break;case c:T=(X-Z)/6048e5;break;case u:T=(X-Z)/864e5;break;case a:T=X/o;break;case l:T=X/r;break;case s:T=X/n;break;default:T=X}return C?T:U.a(T)},A.daysInMonth=function(){return this.endOf(d).$D},A.$locale=function(){return O[this.$L]},A.locale=function(N,D){if(!N)return this.$L;var C=this.clone(),T=Y(N,D,!0);return T&&(C.$L=T),C},A.clone=function(){return U.w(this.$d,this)},A.toDate=function(){return new Date(this.valueOf())},A.toJSON=function(){return this.isValid()?this.toISOString():null},A.toISOString=function(){return this.$d.toISOString()},A.toString=function(){return this.$d.toUTCString()},F}(),nt=ze.prototype;return z.prototype=nt,[["$ms",i],["$s",s],["$m",l],["$H",a],["$W",u],["$M",d],["$y",v],["$D",y]].forEach(function(F){nt[F[1]]=function(A){return this.$g(A,F[0],F[1])}}),z.extend=function(F,A){return F.$i||(F(A,ze,z),F.$i=!0),z},z.locale=Y,z.isDayjs=L,z.unix=function(F){return z(1e3*F)},z.en=O[_],z.Ls=O,z.p={},z})})(og);var DS=og.exports;const le=Lo(DS);var ig={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Cs,function(){return function(n,r){r.prototype.weekday=function(o){var i=this.$locale().weekStart||0,s=this.$W,l=(s<i?s+7:s)-i;return this.$utils().u(o)?l:this.subtract(l,"day").add(o,"day")}}})})(ig);var zS=ig.exports;const sg=Lo(zS);var lg={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Cs,function(){return function(n,r){r.prototype.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}}}})})(lg);var IS=lg.exports;const FS=Lo(IS);var ag={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Cs,function(){return function(n,r,o){r.prototype.isToday=function(){var i="YYYY-MM-DD",s=o();return this.format(i)===s.format(i)}}})})(ag);var MS=ag.exports;const ug=Lo(MS);le.extend(sg);le.extend(FS);le.extend(ug);const US=e=>{const[t,n]=x.useState([]),[r,o]=x.useState([]),[i,s]=x.useState(le()),[l,a]=x.useState("month"),[u,c]=x.useState([]);x.useEffect(()=>{e&&d(e._id)},[e]),x.useEffect(()=>{o(t.sort((E,h)=>le(E.time).isBefore(le(h.time))?-1:1))},[t]),x.useEffect(()=>{(()=>{let h=i.startOf("month").weekday(0);const g=i.add(1,"month").month();let p=[],k=[],_=1;for(;h.weekday(0).toObject().months!==g;){const O=w(h);if(k.push(O),_===7&&(p.push({dates:k}),k=[],_=0),_++,h=h.add(1,"day"),h.month()===g&&h.weekday()===0)break}c(p)})()},[i]);const d=async E=>{try{const h=await ng(E);n(h)}catch(h){console.error("Failed to fetch bookings:",h)}},f=async E=>{try{const h={...E,time:le(E.time).format(),user:e._id},g=await OS(h);n(p=>[...p,g])}catch(h){console.error("Failed to create booking:",h)}},v=async(E,h)=>{try{const g=await RS(E,h);n(p=>p.map(k=>k._id===E?g:k))}catch(g){console.error("Failed to update booking:",g)}},y=async E=>{try{await TS(E),n(h=>h.filter(g=>g._id!==E))}catch(h){console.error("Failed to delete booking:",h)}},w=E=>{const h={...E.toObject()};return{minute:h.minutes,hour:h.hours,day:h.date,month:h.months,year:h.years,isCurrentMonth:h.months===i.month(),isCurrentDay:h.date===i.date()}};return{bookings:t,awaitingBookings:r,currentDate:i,currentView:l,arrayOfDays:u,setCurrentDate:s,setCurrentView:a,fetchBookings:d,createBooking:f,updateBooking:v,deleteBooking:y}},HS=()=>{const[e,t]=x.useState(!1),[n,r]=x.useState({clientName:"",phone:"",email:"",description:"",time:null}),[o,i]=x.useState(null);return{showForm:e,setShowForm:t,showBookingForm:(l,a=!1)=>{a?(i(l),r({...l})):(i(null),r({clientName:"",phone:"",email:"",description:"",time:l.time})),t(!0)},newBooking:n,setNewBooking:r,editingBooking:o,setEditingBooking:i}},WS="http://localhost:3000",Kr=Pn(WS),cg=(e,t)=>(x.useEffect(()=>{if(e)return Kr.emit("join",e._id),Kr.on("newBooking",()=>{t(e._id)}),()=>{Kr.emit("leave",e._id),Kr.off("newBooking")}},[e,t]),Kr),VS=()=>{const[e,t]=x.useState(7),[n,r]=x.useState(19);return{openingHour:e,setOpeningHour:t,closingHour:n,setClosingHour:r,fetchOpeningClosingHours:async i=>{try{const s=await rg(i);t(s.openingHour||7),r(s.closingHour||19)}catch(s){console.error("Failed to fetch user opening/closing hours",s)}}}},De=x.createContext(),qS=({children:e})=>{const{user:t}=x.useContext(Sn),[n,r]=x.useState(null),[o,i]=x.useState([]),[s,l]=x.useState(null),{bookings:a,awaitingBookings:u,currentDate:c,currentView:d,arrayOfDays:f,setCurrentDate:v,setCurrentView:y,fetchBookings:w,createBooking:E,updateBooking:h,deleteBooking:g}=US(t),{showForm:p,setShowForm:k,showBookingForm:_,newBooking:O,setNewBooking:R,editingBooking:L,setEditingBooking:Y}=HS(),{openingHour:z,closingHour:U,setOpeningHour:ze,setClosingHour:nt}=VS();return cg(t,w),m.jsx(De.Provider,{value:{bookings:a,awaitingBookings:u,currentDate:c,currentView:d,arrayOfDays:f,setCurrentDate:v,setCurrentView:y,fetchBookings:w,createBooking:E,updateBooking:h,deleteBooking:g,showForm:p,setShowForm:k,showBookingForm:_,newBooking:O,setNewBooking:R,editingBooking:L,setEditingBooking:Y,openingHour:z,closingHour:U,setOpeningHour:ze,setClosingHour:nt,selectedSlot:n,setSelectedSlot:r,targetedUserBookings:o,setTargetedUserBookings:i,targetedUserId:s,setTargetedUserId:l},children:e})},YS=({children:e})=>{const{user:t}=x.useContext(Sn);return t?e:m.jsx(sv,{to:"/login"})};var Ue=function(){return Ue=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ue.apply(this,arguments)};function jo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var re="-ms-",co="-moz-",J="-webkit-",dg="comm",Qs="rule",xc="decl",KS="@import",fg="@keyframes",QS="@layer",pg=Math.abs,Sc=String.fromCharCode,ru=Object.assign;function JS(e,t){return ke(e,0)^45?(((t<<2^ke(e,0))<<2^ke(e,1))<<2^ke(e,2))<<2^ke(e,3):0}function hg(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function Fi(e,t,n){return e.indexOf(t,n)}function ke(e,t){return e.charCodeAt(t)|0}function Er(e,t,n){return e.slice(t,n)}function $t(e){return e.length}function mg(e){return e.length}function eo(e,t){return t.push(e),e}function GS(e,t){return e.map(t).join("")}function yf(e,t){return e.filter(function(n){return!Lt(n,t)})}var Js=1,Cr=1,gg=0,dt=0,me=0,Dr="";function Gs(e,t,n,r,o,i,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Js,column:Cr,length:s,return:"",siblings:l}}function Qt(e,t){return ru(Gs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Wn(e){for(;e.root;)e=Qt(e.root,{children:[e]});eo(e,e.siblings)}function XS(){return me}function ZS(){return me=dt>0?ke(Dr,--dt):0,Cr--,me===10&&(Cr=1,Js--),me}function St(){return me=dt<gg?ke(Dr,dt++):0,Cr++,me===10&&(Cr=1,Js++),me}function jn(){return ke(Dr,dt)}function Mi(){return dt}function Xs(e,t){return Er(Dr,e,t)}function ou(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ek(e){return Js=Cr=1,gg=$t(Dr=e),dt=0,[]}function tk(e){return Dr="",e}function Dl(e){return hg(Xs(dt-1,iu(e===91?e+2:e===40?e+1:e)))}function nk(e){for(;(me=jn())&&me<33;)St();return ou(e)>2||ou(me)>3?"":" "}function rk(e,t){for(;--t&&St()&&!(me<48||me>102||me>57&&me<65||me>70&&me<97););return Xs(e,Mi()+(t<6&&jn()==32&&St()==32))}function iu(e){for(;St();)switch(me){case e:return dt;case 34:case 39:e!==34&&e!==39&&iu(me);break;case 40:e===41&&iu(e);break;case 92:St();break}return dt}function ok(e,t){for(;St()&&e+me!==57;)if(e+me===84&&jn()===47)break;return"/*"+Xs(t,dt-1)+"*"+Sc(e===47?e:St())}function ik(e){for(;!ou(jn());)St();return Xs(e,dt)}function sk(e){return tk(Ui("",null,null,null,[""],e=ek(e),0,[0],e))}function Ui(e,t,n,r,o,i,s,l,a){for(var u=0,c=0,d=s,f=0,v=0,y=0,w=1,E=1,h=1,g=0,p="",k=o,_=i,O=r,R=p;E;)switch(y=g,g=St()){case 40:if(y!=108&&ke(R,d-1)==58){Fi(R+=W(Dl(g),"&","&\f"),"&\f",pg(u?l[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:R+=Dl(g);break;case 9:case 10:case 13:case 32:R+=nk(y);break;case 92:R+=rk(Mi()-1,7);continue;case 47:switch(jn()){case 42:case 47:eo(lk(ok(St(),Mi()),t,n,a),a);break;default:R+="/"}break;case 123*w:l[u++]=$t(R)*h;case 125*w:case 59:case 0:switch(g){case 0:case 125:E=0;case 59+c:h==-1&&(R=W(R,/\f/g,"")),v>0&&$t(R)-d&&eo(v>32?wf(R+";",r,n,d-1,a):wf(W(R," ","")+";",r,n,d-2,a),a);break;case 59:R+=";";default:if(eo(O=vf(R,t,n,u,c,o,l,p,k=[],_=[],d,i),i),g===123)if(c===0)Ui(R,t,O,O,k,i,d,l,_);else switch(f===99&&ke(R,3)===110?100:f){case 100:case 108:case 109:case 115:Ui(e,O,O,r&&eo(vf(e,O,O,0,0,o,l,p,o,k=[],d,_),_),o,_,d,l,r?k:_);break;default:Ui(R,O,O,O,[""],_,0,l,_)}}u=c=v=0,w=h=1,p=R="",d=s;break;case 58:d=1+$t(R),v=y;default:if(w<1){if(g==123)--w;else if(g==125&&w++==0&&ZS()==125)continue}switch(R+=Sc(g),g*w){case 38:h=c>0?1:(R+="\f",-1);break;case 44:l[u++]=($t(R)-1)*h,h=1;break;case 64:jn()===45&&(R+=Dl(St())),f=jn(),c=d=$t(p=R+=ik(Mi())),g++;break;case 45:y===45&&$t(R)==2&&(w=0)}}return i}function vf(e,t,n,r,o,i,s,l,a,u,c,d){for(var f=o-1,v=o===0?i:[""],y=mg(v),w=0,E=0,h=0;w<r;++w)for(var g=0,p=Er(e,f+1,f=pg(E=s[w])),k=e;g<y;++g)(k=hg(E>0?v[g]+" "+p:W(p,/&\f/g,v[g])))&&(a[h++]=k);return Gs(e,t,n,o===0?Qs:l,a,u,c,d)}function lk(e,t,n,r){return Gs(e,t,n,dg,Sc(XS()),Er(e,2,-2),0,r)}function wf(e,t,n,r,o){return Gs(e,t,n,xc,Er(e,0,r),Er(e,r+1,-1),r,o)}function yg(e,t,n){switch(JS(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 4789:return co+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+co+e+re+e+e;case 5936:switch(ke(e,t+11)){case 114:return J+e+re+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+re+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+re+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+re+e+e;case 6165:return J+e+re+"flex-"+e+e;case 5187:return J+e+W(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+re+"flex-$1$2")+e;case 5443:return J+e+re+"flex-item-"+W(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":re+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return J+e+re+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+re+W(e,"shrink","negative")+e;case 5292:return J+e+re+W(e,"basis","preferred-size")+e;case 6060:return J+"box-"+W(e,"-grow","")+J+e+re+W(e,"grow","positive")+e;case 4554:return J+W(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return re+"grid-column-align"+Er(e,t)+e;break;case 2592:case 3360:return re+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Lt(r.props,/grid-\w+-end/)})?~Fi(e+(n=n[t].value),"span",0)?e:re+W(e,"-start","")+e+re+"grid-row-span:"+(~Fi(n,"span",0)?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":re+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Lt(r.props,/grid-\w+-start/)})?e:re+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($t(e)-1-t>6)switch(ke(e,t+1)){case 109:if(ke(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+co+(ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Fi(e,"stretch",0)?yg(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,l,a,u){return re+o+":"+i+u+(s?re+o+"-span:"+(l?a:+a-+i)+u:"")+e});case 4949:if(ke(e,t+6)===121)return W(e,":",":"+J)+e;break;case 6444:switch(ke(e,ke(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(ke(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+re+"$2box$3")+e;case 100:return W(e,":",":"+re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function xs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ak(e,t,n,r){switch(e.type){case QS:if(e.children.length)break;case KS:case xc:return e.return=e.return||e.value;case dg:return"";case fg:return e.return=e.value+"{"+xs(e.children,r)+"}";case Qs:if(!$t(e.value=e.props.join(",")))return""}return $t(n=xs(e.children,r))?e.return=e.value+"{"+n+"}":""}function uk(e){var t=mg(e);return function(n,r,o,i){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,i)||"";return s}}function ck(e){return function(t){t.root||(t=t.return)&&e(t)}}function dk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case xc:e.return=yg(e.value,e.length,n);return;case fg:return xs([Qt(e,{value:W(e.value,"@","@"+J)})],r);case Qs:if(e.length)return GS(n=e.props,function(o){switch(Lt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wn(Qt(e,{props:[W(o,/:(read-\w+)/,":"+co+"$1")]})),Wn(Qt(e,{props:[o]})),ru(e,{props:yf(n,r)});break;case"::placeholder":Wn(Qt(e,{props:[W(o,/:(plac\w+)/,":"+J+"input-$1")]})),Wn(Qt(e,{props:[W(o,/:(plac\w+)/,":"+co+"$1")]})),Wn(Qt(e,{props:[W(o,/:(plac\w+)/,re+"input-$1")]})),Wn(Qt(e,{props:[o]})),ru(e,{props:yf(n,r)});break}return""})}}var fk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qe={},br=typeof process<"u"&&Qe!==void 0&&(Qe.REACT_APP_SC_ATTR||Qe.SC_ATTR)||"data-styled",vg="active",wg="data-styled-version",Zs="6.1.11",kc=`/*!sc*/
`,Ec=typeof window<"u"&&"HTMLElement"in window,pk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Qe!==void 0&&Qe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Qe.REACT_APP_SC_DISABLE_SPEEDY!==""?Qe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Qe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Qe!==void 0&&Qe.SC_DISABLE_SPEEDY!==void 0&&Qe.SC_DISABLE_SPEEDY!==""&&Qe.SC_DISABLE_SPEEDY!=="false"&&Qe.SC_DISABLE_SPEEDY),el=Object.freeze([]),$r=Object.freeze({});function hk(e,t,n){return n===void 0&&(n=$r),e.theme!==n.theme&&e.theme||t||n.theme}var xg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gk=/(^-|-$)/g;function xf(e){return e.replace(mk,"-").replace(gk,"")}var yk=/(a)(d)/gi,hi=52,Sf=function(e){return String.fromCharCode(e+(e>25?39:97))};function su(e){var t,n="";for(t=Math.abs(e);t>hi;t=t/hi|0)n=Sf(t%hi)+n;return(Sf(t%hi)+n).replace(yk,"$1-$2")}var zl,Sg=5381,lr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},kg=function(e){return lr(Sg,e)};function Eg(e){return su(kg(e)>>>0)}function vk(e){return e.displayName||e.name||"Component"}function Il(e){return typeof e=="string"&&!0}var Cg=typeof Symbol=="function"&&Symbol.for,bg=Cg?Symbol.for("react.memo"):60115,wk=Cg?Symbol.for("react.forward_ref"):60112,xk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Sk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$g={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kk=((zl={})[wk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zl[bg]=$g,zl);function kf(e){return("type"in(t=e)&&t.type.$$typeof)===bg?$g:"$$typeof"in e?kk[e.$$typeof]:xk;var t}var Ek=Object.defineProperty,Ck=Object.getOwnPropertyNames,Ef=Object.getOwnPropertySymbols,bk=Object.getOwnPropertyDescriptor,$k=Object.getPrototypeOf,Cf=Object.prototype;function _g(e,t,n){if(typeof t!="string"){if(Cf){var r=$k(t);r&&r!==Cf&&_g(e,r,n)}var o=Ck(t);Ef&&(o=o.concat(Ef(t)));for(var i=kf(e),s=kf(t),l=0;l<o.length;++l){var a=o[l];if(!(a in Sk||n&&n[a]||s&&a in s||i&&a in i)){var u=bk(t,a);try{Ek(e,a,u)}catch{}}}}return e}function _r(e){return typeof e=="function"}function Cc(e){return typeof e=="object"&&"styledComponentId"in e}function _n(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function lu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function No(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function au(e,t,n){if(n===void 0&&(n=!1),!n&&!No(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=au(e[r],t[r]);else if(No(t))for(var r in t)e[r]=au(e[r],t[r]);return e}function bc(e,t){Object.defineProperty(e,"toString",{value:t})}function Wo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _k=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Wo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(kc);return n},e}(),Hi=new Map,Ss=new Map,Wi=1,mi=function(e){if(Hi.has(e))return Hi.get(e);for(;Ss.has(Wi);)Wi++;var t=Wi++;return Hi.set(e,t),Ss.set(t,e),t},Ok=function(e,t){Wi=t+1,Hi.set(e,t),Ss.set(t,e)},Rk="style[".concat(br,"][").concat(wg,'="').concat(Zs,'"]'),Tk=new RegExp("^".concat(br,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Pk=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},jk=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(kc),o=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var a=l.match(Tk);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(Ok(c,u),Pk(e,c,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}};function Nk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Og=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var a=Array.from(l.querySelectorAll("style[".concat(br,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(br,vg),r.setAttribute(wg,Zs);var s=Nk();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Lk=function(){function e(t){this.element=Og(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw Wo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Ak=function(){function e(t){this.element=Og(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Bk=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),bf=Ec,Dk={isServer:!Ec,useCSSOMInjection:!pk},Rg=function(){function e(t,n,r){t===void 0&&(t=$r),n===void 0&&(n={});var o=this;this.options=Ue(Ue({},Dk),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ec&&bf&&(bf=!1,function(i){for(var s=document.querySelectorAll(Rk),l=0,a=s.length;l<a;l++){var u=s[l];u&&u.getAttribute(br)!==vg&&(jk(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),bc(this,function(){return function(i){for(var s=i.getTag(),l=s.length,a="",u=function(d){var f=function(h){return Ss.get(h)}(d);if(f===void 0)return"continue";var v=i.names.get(f),y=s.getGroup(d);if(v===void 0||y.length===0)return"continue";var w="".concat(br,".g").concat(d,'[id="').concat(f,'"]'),E="";v!==void 0&&v.forEach(function(h){h.length>0&&(E+="".concat(h,","))}),a+="".concat(y).concat(w,'{content:"').concat(E,'"}').concat(kc)},c=0;c<l;c++)u(c);return a}(o)})}return e.registerId=function(t){return mi(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ue(Ue({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Bk(o):r?new Lk(o):new Ak(o)}(this.options),new _k(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(mi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(mi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(mi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),zk=/&/g,Ik=/^\s*\/\/.*$/gm;function Tg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Tg(n.children,t)),n})}function Fk(e){var t,n,r,o=$r,i=o.options,s=i===void 0?$r:i,l=o.plugins,a=l===void 0?el:l,u=function(f,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):f},c=a.slice();c.push(function(f){f.type===Qs&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(zk,n).replace(r,u))}),s.prefix&&c.push(dk),c.push(ak);var d=function(f,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var E=f.replace(Ik,""),h=sk(y||v?"".concat(y," ").concat(v," { ").concat(E," }"):E);s.namespace&&(h=Tg(h,s.namespace));var g=[];return xs(h,uk(c.concat(ck(function(p){return g.push(p)})))),g};return d.hash=a.length?a.reduce(function(f,v){return v.name||Wo(15),lr(f,v.name)},Sg).toString():"",d}var Mk=new Rg,uu=Fk(),Pg=He.createContext({shouldForwardProp:void 0,styleSheet:Mk,stylis:uu});Pg.Consumer;He.createContext(void 0);function $f(){return x.useContext(Pg)}var jg=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=uu);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,bc(this,function(){throw Wo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=uu),this.name+t.hash},e}(),Uk=function(e){return e>="A"&&e<="Z"};function _f(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Uk(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ng=function(e){return e==null||e===!1||e===""},Lg=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Ng(i)&&(Array.isArray(i)&&i.isCss||_r(i)?r.push("".concat(_f(o),":"),i,";"):No(i)?r.push.apply(r,jo(jo(["".concat(o," {")],Lg(i),!1),["}"],!1)):r.push("".concat(_f(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in fk||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Nn(e,t,n,r){if(Ng(e))return[];if(Cc(e))return[".".concat(e.styledComponentId)];if(_r(e)){if(!_r(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Nn(o,t,n,r)}var i;return e instanceof jg?n?(e.inject(n,r),[e.getName(r)]):[e]:No(e)?Lg(e):Array.isArray(e)?Array.prototype.concat.apply(el,e.map(function(s){return Nn(s,t,n,r)})):[e.toString()]}function Hk(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(_r(n)&&!Cc(n))return!1}return!0}var Wk=kg(Zs),Vk=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Hk(t),this.componentId=n,this.baseHash=lr(Wk,n),this.baseStyle=r,Rg.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=_n(o,this.staticRulesId);else{var i=lu(Nn(this.rules,t,n,r)),s=su(lr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}o=_n(o,s),this.staticRulesId=s}else{for(var a=lr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=lu(Nn(d,t,n,r));a=lr(a,f+c),u+=f}}if(u){var v=su(a>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),o=_n(o,v)}}return o},e}(),Ag=He.createContext(void 0);Ag.Consumer;var Fl={};function qk(e,t,n){var r=Cc(e),o=e,i=!Il(e),s=t.attrs,l=s===void 0?el:s,a=t.componentId,u=a===void 0?function(k,_){var O=typeof k!="string"?"sc":xf(k);Fl[O]=(Fl[O]||0)+1;var R="".concat(O,"-").concat(Eg(Zs+O+Fl[O]));return _?"".concat(_,"-").concat(R):R}(t.displayName,t.parentComponentId):a,c=t.displayName,d=c===void 0?function(k){return Il(k)?"styled.".concat(k):"Styled(".concat(vk(k),")")}(e):c,f=t.displayName&&t.componentId?"".concat(xf(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;y=function(k,_){return w(k,_)&&E(k,_)}}else y=w}var h=new Vk(n,f,r?o.componentStyle:void 0);function g(k,_){return function(O,R,L){var Y=O.attrs,z=O.componentStyle,U=O.defaultProps,ze=O.foldedComponentIds,nt=O.styledComponentId,F=O.target,A=He.useContext(Ag),N=$f(),D=O.shouldForwardProp||N.shouldForwardProp,C=hk(R,A,U)||$r,T=function(de,he,Ce){for(var ft,je=Ue(Ue({},he),{className:void 0,theme:Ce}),xe=0;xe<de.length;xe+=1){var Ke=_r(ft=de[xe])?ft(je):ft;for(var Ie in Ke)je[Ie]=Ie==="className"?_n(je[Ie],Ke[Ie]):Ie==="style"?Ue(Ue({},je[Ie]),Ke[Ie]):Ke[Ie]}return he.className&&(je.className=_n(je.className,he.className)),je}(Y,R,C),j=T.as||F,I={};for(var M in T)T[M]===void 0||M[0]==="$"||M==="as"||M==="theme"&&T.theme===C||(M==="forwardedAs"?I.as=T.forwardedAs:D&&!D(M,j)||(I[M]=T[M]));var Z=function(de,he){var Ce=$f(),ft=de.generateAndInjectStyles(he,Ce.styleSheet,Ce.stylis);return ft}(z,T),X=_n(ze,nt);return Z&&(X+=" "+Z),T.className&&(X+=" "+T.className),I[Il(j)&&!xg.has(j)?"class":"className"]=X,I.ref=L,x.createElement(j,I)}(p,k,_)}g.displayName=d;var p=He.forwardRef(g);return p.attrs=v,p.componentStyle=h,p.displayName=d,p.shouldForwardProp=y,p.foldedComponentIds=r?_n(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=f,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(_){for(var O=[],R=1;R<arguments.length;R++)O[R-1]=arguments[R];for(var L=0,Y=O;L<Y.length;L++)au(_,Y[L],!0);return _}({},o.defaultProps,k):k}}),bc(p,function(){return".".concat(p.styledComponentId)}),i&&_g(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Of(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Rf=function(e){return Object.assign(e,{isCss:!0})};function ar(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(_r(e)||No(e))return Rf(Nn(Of(el,jo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Nn(r):Rf(Nn(Of(r,t)))}function cu(e,t,n){if(n===void 0&&(n=$r),!t)throw Wo(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,ar.apply(void 0,jo([o],i,!1)))};return r.attrs=function(o){return cu(e,t,Ue(Ue({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return cu(e,t,Ue(Ue({},n),o))},r}var Bg=function(e){return cu(qk,e)},S=Bg;xg.forEach(function(e){S[e]=Bg(e)});function Dg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=lu(ar.apply(void 0,jo([e],t,!1))),o=Eg(r);return new jg(o,r)}const Vn={mobile:"480px",tablet:"768px",laptop:"1024px",desktop:"1440px"},b={mobile:e=>ar`
    @media (max-width: ${Vn.mobile}) {
      ${e}
    }
  `,tablet:e=>ar`
    @media (min-width: ${Vn.mobile}) and (max-width: ${Vn.tablet}) {
      ${e}
    }
  `,laptop:e=>ar`
    @media (min-width: ${Vn.tablet}) and (max-width: ${Vn.laptop}) {
      ${e}
    }
  `,desktop:e=>ar`
    @media (min-width: ${Vn.laptop}) {
      ${e}
    }
  `},Yk=S.span`
  color: #0096ff;
  cursor: pointer;
`,Kk=S.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  margin-left: 2px;
`,Qk=S.div`
  height: 5rem;
  width: 5rem;
  margin-bottom: 3rem;
`,Jk=S.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 20px;

  ${b.mobile`
    flex-direction: column;
    padding: 10px;
  `}
`,Gk=S.div`
  display: flex;
  background-color: white;
  background-color: transparent;
  border-radius: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  height: auto;

  ${b.mobile`
    flex-direction: column;
    width: 100%;
    align-items: center;
  `}

  ${b.laptop`
    flex-direction: row;
    width: 90%;
  `}

  ${b.desktop`
    flex-direction: row;
  `}
`,Tf=S.img`
  border-radius: 2rem;
`,Xk=S.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  ${b.mobile`
    width: 100%;
    padding: 10px;
    order: 2;
  `}

  ${b.laptop`
    width: 50%;
  `}

  ${b.desktop`
    width: 50%;
  `}
`,Zk=S.div`
  width: 50%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${b.mobile`
    width: 90%;
    padding: 2rem;
    order: 1;
  `}

  ${b.laptop`
    width: 50%;
  `}

  ${b.desktop`
    width: 50%;
  `}
`,eE=S.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,tE=S.h2`
  margin-bottom: 3rem;
  font-size: 24px;
  color: #333;

  ${b.mobile`
    font-size: 20px;
    margin-bottom: 2rem;
  `}
`,Ml=S.input`
  margin-bottom: 20px;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  max-width: 100%;

  ${b.mobile`
    font-size: 0.9rem;
    padding: 0.8rem;
  `}
`,nE=S.button`
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

  ${b.mobile`
    font-size: 16px;
    padding: 12px;
  `}
`,zg="/assets/login-DDdhaH2k.png",tl="/assets/bookit-logo-DcUepX7_.png",rE=tl,oE=zg;function iE(){const e=Nr(),{signup:t}=x.useContext(Sn),[n,r]=x.useState({name:"",email:"",password:""}),[o,i]=x.useState(""),s=a=>{const{name:u,value:c}=a.target;r(d=>({...d,[u]:c}))},l=async a=>{var u,c;a.preventDefault();try{await t(n.name,n.email,n.password),e("/login")}catch(d){i(((c=(u=d.response)==null?void 0:u.data)==null?void 0:c.message)||"Something went wrong"),console.log(d)}};return m.jsx(Jk,{children:m.jsxs(Gk,{children:[m.jsx(Zk,{children:m.jsxs(eE,{onSubmit:l,children:[m.jsx(Qk,{children:m.jsx(qt,{to:"/",children:m.jsx(Tf,{src:rE,alt:"logo",style:{maxHeight:"4rem",width:"auto"}})})}),m.jsx(tE,{children:"Welcome!"}),o&&m.jsx("p",{children:o}),m.jsx(Ml,{type:"text",placeholder:"Enter your name",name:"name",value:n.name,onChange:s,required:!0}),m.jsx(Ml,{type:"email",placeholder:"Enter email",name:"email",value:n.email,onChange:s,required:!0}),m.jsx(Ml,{type:"password",placeholder:"Password",name:"password",value:n.password,onChange:s,required:!0}),m.jsx(nE,{type:"submit",children:"Signup"}),m.jsxs(Kk,{children:["Have an account?",m.jsx(Yk,{onClick:()=>e("/login"),children:" Login here"})]})]})}),m.jsx(Xk,{children:m.jsx(Tf,{src:oE,alt:"working with a calendar",style:{width:"100%",height:"auto"}})})]})})}const sE=S.div`
  display: flex;
  justify-content: space-between;
`,lE=S.span`
  color: #0096ff;
  cursor: pointer;
`,aE=S(qt)`
  margin-top: 1rem;
  font-size: 0.9rem;
  margin-left: 2px;
  color: grey;
  cursor: pointer;
  text-decoration: none;
`,Ig=S.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  margin-left: 2px;
`;S(Ig)`
  color: grey;
  cursor: pointer;
  text-decoration: none;
`;const uE=S.div`
  height: 5rem;
  width: 5rem;
  margin-bottom: 3rem;
`,cE=S.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 20px;

  ${b.mobile`
    flex-direction: column;
    padding: 10px;
    height: auto;
  `}

  ${b.tablet`
    flex-direction: column;
    padding: 10px;
    height: auto;
  `}
`,dE=S.div`
  display: flex;
  background-color: white;
  background-color: transparent;
  border-radius: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  height: auto;

  ${b.mobile`
    flex-direction: column;
    width: 100%;
    align-items: center;
  `}

  ${b.tablet`
    flex-direction: column;
    width: 100%;
    align-items: center;
  `}

  ${b.laptop`
    flex-direction: row;
    width: 90%;
  `}

  ${b.desktop`
    flex-direction: row;
  `}
`,Pf=S.img`
  border-radius: 2rem;
`,fE=S.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  ${b.mobile`
    width: 100%;
    padding: 10px;
    order: 2;
  `}

  ${b.tablet`
    width: 100%;
    padding: 10px;
    order: 2;
  `}

  ${b.laptop`
    width: 50%;
  `}

  ${b.desktop`
    width: 50%;
  `}
`,pE=S.div`
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${b.mobile`
    width: 90%;
    padding: 2rem;
    order: 1;
  `}

  ${b.tablet`
    width: 90%;
    padding: 2rem;
    order: 1;
  `}

  ${b.laptop`
    width: 50%;
  `}

  ${b.desktop`
    width: 50%;
  `}
`,hE=S.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,mE=S.h2`
  margin-bottom: 3rem;
  font-size: 24px;
  color: #333;

  ${b.mobile`
    font-size: 20px;
    margin-bottom: 2rem;
  `}

  ${b.tablet`
    font-size: 22px;
    margin-bottom: 2.5rem;
  `}
`,jf=S.input`
  margin-bottom: 20px;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  max-width: 100%;

  ${b.mobile`
    font-size: 0.9rem;
    padding: 0.8rem;
  `}

  ${b.tablet`
    font-size: 1rem;
    padding: 0.9rem;
  `}
`,gE=S.button`
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

  ${b.mobile`
    font-size: 16px;
    padding: 12px;
  `}

  ${b.tablet`
    font-size: 17px;
    padding: 14px;
  `}
`,yE=tl,vE=zg;function wE(){const e=Nr(),{login:t}=x.useContext(Sn),[n,r]=x.useState({email:"",password:""}),[o,i]=x.useState(""),s=a=>{const{name:u,value:c}=a.target;r(d=>({...d,[u]:c}))},l=async a=>{var u,c;a.preventDefault();try{await t(n.email,n.password)}catch(d){i(((c=(u=d.response)==null?void 0:u.data)==null?void 0:c.message)||"Something went wrong"),console.log(d)}};return m.jsx(cE,{children:m.jsxs(dE,{children:[m.jsx(pE,{children:m.jsxs(hE,{onSubmit:l,children:[m.jsx(uE,{children:m.jsx(qt,{to:"/",children:m.jsx(Pf,{src:yE,alt:"logo",style:{maxHeight:"4rem",width:"auto"}})})}),m.jsx(mE,{children:"Welcome!"}),o&&m.jsx("p",{children:o}),m.jsx(jf,{type:"email",placeholder:"Enter email",name:"email",value:n.email,onChange:s}),m.jsx(jf,{type:"password",placeholder:"Password",name:"password",value:n.password,onChange:s}),m.jsx(gE,{type:"submit",children:"Log in"}),m.jsxs(sE,{children:[m.jsxs(Ig,{children:["No account yet?"," ",m.jsx(lE,{onClick:()=>e("/signup"),children:"Register here"})]}),m.jsx(aE,{to:"/forgot-password",children:"Forgot your password?"})]})]})}),m.jsx(fE,{children:m.jsx(Pf,{src:vE,alt:"working with a calendar",style:{width:"100%",height:"auto"}})})]})})}const xE=S.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #5e5e5e;
  background: #f1f1f1;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
`,SE=S.div`
  padding: 1rem;
  background-color: #e0e0e0;
  flex: 1;
  border-radius: 1rem;
  border-top-right-radius: 0rem;
  border-top-left-radius: 0rem;
`,kE=S.div`
  flex-grow: 1;
  flex-basis: 0;
  justify-content: center;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;

  ${b.mobile`
    font-size: 0.9rem;
  `}
`,EE=S.div`
  width: 4rem;
  margin-left: 0.25rem;
  font-weight: 500;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ccc;

  ${b.mobile`
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ccc;
    justify-content: center;
    font-size: 0.8rem;
  `}
`,CE=S.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`,bE=S(CE)`
  height: 3rem;

  ${b.mobile`
    height: auto;
    flex-direction: column;
    align-items: center;
  `}
`,$E=S.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 4px;
  ${b.mobile`
    width: 100%;
    padding: 0;
  `}
`,_E=S.div`
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

  ${b.mobile`
    width: calc(100% - 4px);
    height: 20%;
    margin: 2px 0;
  `}
`,OE=S.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: #3a3a3a;
  padding: 0.75rem 0;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
  ${b.mobile`
    flex-direction: column;
  `}
`,RE=S.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #5e5e5e;
  background: #f1f1f1;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
`,TE=S.div`
  padding: 1rem;
  background-color: #e0e0e0;
  flex: 1;
  border-radius: 1rem;
  border-top-right-radius: 0rem;
  border-top-left-radius: 0rem;
`,PE=S.div`
  flex-grow: 1;
  flex-basis: 0;
  justify-content: center;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;

  ${b.mobile`
    font-size: 0.8rem;
  `}

  ${b.tablet`
    font-size: 1rem;
  `}

  ${b.laptop`
    font-size: 1.1rem;
  `}
`,Nf=S.div`
  width: 4rem;
  margin-left: 0.25rem;
  font-weight: 500;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ccc;

  ${b.mobile`
    width: 3rem;
    font-size: 0.7rem;
  `}

  ${b.tablet`
    width: 3.5rem;
    font-size: 0.8rem;
  `}

  ${b.laptop`
    width: 4rem;
    font-size: 1rem;
  `}
`,jE=S.div`
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

  ${b.mobile`
    font-size: 0.6rem;
  `}

  ${b.tablet`
    font-size: 0.8rem;
  `}

  ${b.laptop`
    font-size: 1rem;
  `}
`,NE=S.div`
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

  ${b.mobile`
    height: 3rem;
  `}

  ${b.tablet`
    height: 4rem;
  `}

  ${b.laptop`
    height:  5rem;
  `}
`,LE=S.div`
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

  ${b.mobile`
    font-size: 0.6rem;
    width: calc(50% - 2px);
    height: calc(50% - 2px);
  `}

  ${b.tablet`
    font-size: 0.7rem;
    width: calc(50% - 3px);
    height: calc(50% - 3px);
  `}

  ${b.laptop`
    font-size: 0.75rem;
    width: calc(50% - 4px);
    height: calc(50% - 4px);
  `}
`,AE=S.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: #3a3a3a;
  padding: 0.75rem 0;
  border-bottom: 1px solid lightgrey;

  ${b.mobile`
    font-size: 0.7rem;
  `}

  ${b.tablet`
    font-size: 0.8rem;
  `}

  ${b.laptop`
    font-size: 1rem;
  `}
`,BE=S.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #5e5e5e;
  background: #ececec;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  padding: 1rem;
`,DE=S.div`
  padding: 1rem;
  background-color: #e0e0e0;
  flex: 1;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`,zE=S.span`
  position: absolute;
  font-size: 0.8rem;
  line-height: 1;
  top: 0.75rem;
  right: 1rem;
  font-weight: 700;

  ${b.mobile`
    font-size: 0.7rem;
  `}

  ${b.tablet`
    font-size: 0.75rem;
  `}

  ${b.laptop`
    font-size: 0.8rem;
  `}
`,IE=S.div`
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

  ${b.mobile`
    height: 3rem;
    padding: 0.3rem;
    font-size: 0.6rem;
  `}

  ${b.tablet`
    height: 4rem;
    padding: 0.4rem;
    font-size: 0.7rem;
  `}

  ${b.laptop`
    height: 5rem;
    padding: 0.5rem;
    font-size: 0.8rem;
  `}
`,FE=S.div`
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
  left: 0.95rem;

  ${b.mobile`
    font-size: 0.5rem;
    height: 0.8rem;
    width: 0.8rem;
    top: 1.65rem;
    left: 0.6rem;
  `}

  ${b.tablet`
    font-size: 0.6rem;
    height: 1rem;
    width: 1rem;
    top: 0.35rem;
    left: 0.7rem;
  `}

  ${b.laptop`
    font-size: 0.7rem;
    height: 1.2rem;
    width: 1.2rem;
    top: 0.6rem;
    left: 0.7rem;
  `}
`,ME=S.span`
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
`,UE=S.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`,Fg=(e,t,n,r,o,i)=>e.filter(s=>{const l=le(s.time);return l.year()===t&&l.month()===n&&l.date()===r&&l.hour()===o&&l.minute()===i}),HE=(e,t,n,r,o,i)=>{const s=Fg(e,t,n,r,o,i);return{isSlotBooked:s.length>0,bookingsForSlot:s}},WE=(e,t,n,r)=>{const o=e.filter(i=>{const s=le(i.time);return s.year()===t&&s.month()===n&&s.date()===r});return{isDayBooked:o.length>0,bookingsCount:o.length,bookingsForDay:o}},VE=(e,t,n,r,o)=>m.jsxs(m.Fragment,{children:[m.jsx(OE,{children:m.jsx(kE,{children:e.format("dddd")})}),Array.from({length:o-r+1},(i,s)=>{const l=r+s;return m.jsxs(bE,{children:[m.jsx(EE,{children:`${String(l).padStart(2,"0")}:00`}),m.jsx($E,{children:Array.from({length:4},(a,u)=>{const c=15*u,d=Fg(t,e.year(),e.month(),e.date(),l,c),f=d.length>0;return m.jsx(_E,{$isBooked:f,onClick:()=>f?n(d[0],!0):n({time:e.hour(l).minute(c).toISOString()}),children:`${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`},u)})})]},s)})]}),qE=(e,t,n,r,o)=>{const i=e.startOf("week"),s=Array.from({length:7},(l,a)=>i.add(a,"day"));return m.jsxs(m.Fragment,{children:[m.jsxs(AE,{children:[m.jsx(Nf,{style:{visibility:"hidden"}})," ",s.map((l,a)=>m.jsx(PE,{children:l.format("dddd")},a))]}),Array.from({length:o-r+1},(l,a)=>{const u=r+a;return m.jsxs(jE,{children:[m.jsx(Nf,{children:`${String(u).padStart(2,"0")}:00`}),s.map((c,d)=>m.jsx(NE,{children:Array.from({length:4},(f,v)=>{const y=15*v,{isSlotBooked:w,bookingsForSlot:E}=HE(t,c.year(),c.month(),c.date(),u,y);return m.jsx(LE,{$isBooked:w,onClick:()=>w?n(E[0],!0):n({time:c.hour(u).minute(y).toISOString()}),children:`${String(u).padStart(2,"0")}:${String(y).padStart(2,"0")}`},v)})},d))]},a)})]})},YE=(e,t,n,r,o)=>{const i=[];let s=[];const l=le();return o.forEach((a,u)=>{a.dates.forEach((c,d)=>{const f=c.month===e.month(),{isDayBooked:v,bookingsCount:y}=f?WE(t,c.year,c.month,c.day):{isDayBooked:!1,bookingsCount:0};s.push(m.jsxs(IE,{$isDisabled:!c.isCurrentMonth,$isSelected:l.date()===c.day&&l.month()===c.month,$isBooked:v,onClick:()=>{f&&(n(e.date(c.day)),r("day"))},children:[m.jsx(zE,{children:c.day}),v&&m.jsx(FE,{children:y}),m.jsx(ME,{children:c.day})]},d))}),i.push(m.jsx(UE,{children:s},u)),s=[]}),i},Lf=()=>{const{currentDate:e,bookings:t,setCurrentDate:n,setCurrentView:r,arrayOfDays:o}=x.useContext(De);return m.jsx(DE,{children:m.jsx(BE,{children:YE(e,t,n,r,o)})})},KE=()=>{const{currentDate:e,bookings:t,showBookingForm:n,openingHour:r,closingHour:o}=x.useContext(De);return m.jsx(TE,{children:m.jsx(RE,{children:qE(e,t,n,r,o)})})},QE=()=>{const{currentDate:e,bookings:t,showBookingForm:n,openingHour:r,closingHour:o}=x.useContext(De);return m.jsx(SE,{children:m.jsx(xE,{children:VE(e,t,n,r,o)})})},JE=S.div`
  background-color: #f1f1f1;
  /* padding: 1rem; */
  flex: 1;
`,GE=()=>{const{currentView:e}=x.useContext(De),t=()=>{switch(e){case"month":return m.jsx(Lf,{});case"week":return m.jsx(KE,{});case"day":return m.jsx(QE,{});default:return m.jsx(Lf,{})}};return m.jsx(JE,{children:t()})};var Mg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Af=He.createContext&&He.createContext(Mg),XE=["attr","size","title"];function ZE(e,t){if(e==null)return{};var n=eC(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function eC(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ks(){return ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ks.apply(this,arguments)}function Bf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Es(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bf(Object(n),!0).forEach(function(r){tC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tC(e,t,n){return t=nC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nC(e){var t=rC(e,"string");return typeof t=="symbol"?t:t+""}function rC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ug(e){return e&&e.map((t,n)=>He.createElement(t.tag,Es({key:n},t.attr),Ug(t.child)))}function nl(e){return t=>He.createElement(oC,ks({attr:Es({},e.attr)},t),Ug(e.child))}function oC(e){var t=n=>{var{attr:r,size:o,title:i}=e,s=ZE(e,XE),l=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),He.createElement("svg",ks({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:a,style:Es(Es({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&He.createElement("title",null,i),e.children)};return Af!==void 0?He.createElement(Af.Consumer,null,n=>t(n)):t(Mg)}function iC(e){return nl({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2",points:"7 2 17 12 7 22"},child:[]}]})(e)}function sC(e){return nl({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2",points:"7 2 17 12 7 22",transform:"matrix(-1 0 0 1 24 0)"},child:[]}]})(e)}const lC=S.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  padding: 1rem 0;
  background: linear-gradient(to right, #007bff, #0096ff);
  color: white;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`,$c=S.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
`,aC=S($c)`
  justify-content: flex-start;
  text-align: left;
  padding: 0 0.5rem;
  gap: 0.5rem;
  font-size: 1.2rem;

  ${b.mobile`
    font-size: 1rem;
    gap: 0.4rem;
  `}

  ${b.tablet`
    font-size: 1.1rem;
    gap: 0.4rem;
  `}
`,uC=S($c)`
  justify-content: center;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  padding-right: 0.5rem;

  ${b.mobile`
    font-size: 1.2rem;
  `}

  ${b.tablet`
    font-size: 1.3rem;
  `}
`,cC=S($c)`
  justify-content: flex-end;
  text-align: right;
  padding: 0 0.5rem;

  ${b.mobile`
    justify-content: center;
  `}
`,Df=S.button`
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

  ${b.mobile`
    font-size: 0.8rem;
    padding: 0.2rem;
  `}

  ${b.tablet`
    font-size: 0.9rem;
    padding: 0.2rem;
  `}
`,rl=S.button`
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

  ${b.mobile`
    font-size: 0.8rem;
    margin: 0 0.3rem;
    padding: 0.2rem 0.5rem;
  `}

  ${b.tablet`
    font-size: 0.9rem;
    margin: 0 0.4rem;
    padding: 0.2rem 0.6rem;
  `}
`,dC=S(rl)`
  background-color: white;
  color: #007bff;
  font-weight: 700;
`,fC=S(rl)`
  background-color: #f73939;
`,pC=S(rl)`
  background-color: #f7a91a;

  ${b.tablet`
    display: none;
  `}

  ${b.mobile`
    display: none;
  `}
`,hC=S(rl)`
  background-color: #21c221;
`;le.extend(sg);le.extend(ug);const mC=()=>{const{currentDate:e,setCurrentDate:t,currentView:n,setCurrentView:r}=x.useContext(De),o=le(),i=()=>{n==="month"?t(e.add(1,"month")):n==="week"?t(e.add(1,"week")):n==="day"&&t(e.add(1,"day"))},s=()=>{n==="month"?t(e.subtract(1,"month")):n==="week"?t(e.subtract(1,"week")):n==="day"&&t(e.subtract(1,"day"))},l=e.startOf("week").format("MMM DD"),a=e.endOf("week").format("MMM DD"),u=n==="month"?"MMM YYYY":n==="week"?`${l} - ${a}`:"dddd, MMM DD, YYYY";return m.jsxs(lC,{children:[m.jsxs(aC,{children:[m.jsx(Df,{onClick:s,children:m.jsx(sC,{})}),m.jsx(dC,{onClick:()=>t(o),children:"Today"}),m.jsx(Df,{onClick:i,children:m.jsx(iC,{})})]}),m.jsx(uC,{children:m.jsx("div",{children:n==="week"?`${l} - ${a}, ${e.year()}`:e.format(u)})}),m.jsxs(cC,{children:[m.jsx(fC,{onClick:()=>r("month"),children:"Month"}),m.jsx(pC,{onClick:()=>r("week"),children:"Week"}),m.jsx(hC,{onClick:()=>r("day"),children:"Day"})]})]})},gC=S.div`
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

  ${b.mobile`
    padding: 1rem;
    max-width: 90%;
  `}

  ${b.tablet`
    padding: 1.5rem;
    max-width: 80%;
  `}
`,yC=S.div`
  background-color: #f9f9f9;
  padding: 2rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  z-index: 101;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;

  ${b.mobile`
    padding: 1rem;
    max-width: 90%;
  `}

  ${b.tablet`
    padding: 1.5rem;
    max-width: 80%;
  `}
`,vC=S.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${b.mobile`
    padding: 1rem;
    max-width: 90%;
  `}

  ${b.tablet`
    padding: 1.5rem;
    max-width: 80%;
  `}
`,gi=S.label`
  font-weight: 600;
  color: #3a3a3a;
`,Ul=S.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;

  ${b.mobile`
    font-size: 0.9rem;
  `}

  ${b.tablet`
    font-size: 0.95rem;
  `}
`,wC=S.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  height: 100px;
  resize: none;

  ${b.mobile`
    font-size: 0.9rem;
  `}

  ${b.tablet`
    font-size: 0.95rem;
  `}
`,xC=S.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  ${b.mobile`
    flex-direction: column;
    gap: 0.5rem;
  `}

  ${b.tablet`
    flex-direction: column;
    gap: 0.75rem;
  `}
`,SC=S.button`
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  flex: 1;

  ${b.mobile`
    padding: 0.4rem 0.8rem;
  `}

  ${b.tablet`
    padding: 0.45rem 0.9rem;
  `}
`,kC=S.button`
  padding: 0.5rem 1rem;
  background-color: #f7a91a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  flex: 1;

  ${b.mobile`
    padding: 0.4rem 0.8rem;
  `}

  ${b.tablet`
    padding: 0.45rem 0.9rem;
  `}
`,EC=S.button`
  padding: 0.5rem 1rem;
  background-color: #f73939;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  flex: 1;

  ${b.mobile`
    padding: 0.4rem 0.8rem;
  `}

  ${b.tablet`
    padding: 0.45rem 0.9rem;
  `}
`,CC=()=>{const{showForm:e,setShowForm:t,newBooking:n,setNewBooking:r,editingBooking:o,setEditingBooking:i,createBooking:s,updateBooking:l,deleteBooking:a}=x.useContext(De);x.useEffect(()=>{if(n!=null&&n.time){const f=setInterval(()=>{const v=le();le(n.time).diff(v,"second")<=0&&clearInterval(f)},1e3);return()=>clearInterval(f)}},[n==null?void 0:n.time]);const u=async f=>{f.preventDefault();try{o?await l(o._id,n):await s(n)}catch(v){console.error("Failed to save booking:",v)}t(!1),r({clientName:"",phone:"",email:"",description:"",time:null})},c=()=>{r({clientName:"",phone:"",email:"",description:"",time:null}),t(!1),i(null)},d=async()=>{o&&(await a(o._id),i(null),r({clientName:"",phone:"",email:"",description:"",time:null}),t(!1))};return n?m.jsx(m.Fragment,{children:e&&m.jsx(gC,{children:m.jsx(yC,{children:m.jsxs(vC,{onSubmit:u,children:[m.jsxs(gi,{children:["Client Name:",m.jsx(Ul,{type:"text",value:n.clientName,onChange:f=>r({...n,clientName:f.target.value})})]}),m.jsxs(gi,{children:["Phone:",m.jsx(Ul,{type:"text",value:n.phone,onChange:f=>r({...n,phone:f.target.value})})]}),m.jsxs(gi,{children:["Email:",m.jsx(Ul,{type:"text",value:n.email,onChange:f=>r({...n,email:f.target.value})})]}),m.jsxs(gi,{children:["Description:",m.jsx(wC,{value:n.description,onChange:f=>r({...n,description:f.target.value})})]}),m.jsxs(xC,{children:[m.jsx(SC,{type:"submit",children:o?"Save":"Submit"}),m.jsx(kC,{type:"button",onClick:c,children:"Cancel"}),o&&m.jsx(EC,{type:"button",onClick:d,children:"Delete"})]})]})})})}):null};function Hg(e){return nl({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},child:[]}]})(e)}const bC=S.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`,$C=S.div`
  display: flex;
  align-items: center;
  background: #28a745;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`,_C=S.div`
  padding: 1rem;
  border-radius: 1rem;
  height: 100%;
`,OC=S.div`
  background: linear-gradient(to right, #007bff, #0096ff);
  color: white;
  padding: 1rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`,RC=S.div`
  font-weight: 700;
  font-size: 1.5rem;
`,TC=S.div`
  padding: 1rem;
  background-color: #f9f9f9;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  max-height: 75vh;
  overflow-y: auto;

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
`,PC=S.div`
  background-color: ${e=>e.cleared?"#c2c2c2":"#fff"};
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`,jC=S.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.6rem;
`,NC=S.div`
  color: #888;
  margin-bottom: 0.4rem;
`,LC=S.div`
  color: #ff0000;
  font-weight: 600;
`,AC=S.div`
  color: #28a745;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,BC=S(Hg)`
  color: #28a745;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    color: #218838;
  }
`,DC=()=>{const{awaitingBookings:e,currentView:t,currentDate:n}=x.useContext(De),[r,o]=x.useState({}),[i,s]=x.useState({}),[l,a]=x.useState({}),[u,c]=x.useState(()=>JSON.parse(localStorage.getItem("clearedBookings"))||{}),f=(y=>y.filter(w=>{const E=le(w.time);if(t==="month")return E.month()===n.month()&&E.year()===n.year();if(t==="week"){const h=n.startOf("week"),g=n.endOf("week");return E.isAfter(h)&&E.isBefore(g)}else if(t==="day")return E.isSame(n,"day");return!1}))(e);x.useEffect(()=>{const y=setInterval(()=>{const w=le(),E={},h={},g={...l};f.forEach(p=>{if(u[p._id])E[p.time]=null,h[p.time]=null;else{const _=le(p.time).diff(w,"second");if(_>0){const O=Math.floor(_/86400),R=Math.floor(_%(3600*24)/3600),L=Math.floor(_%3600/60),Y=_%60;O>0?E[p.time]=`${O}d ${R}h ${L}m ${Y}s`:E[p.time]=`${R}h ${L}m ${Y}s`}else E[p.time]=null,h[p.time]=m.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[`${p.clientName} is waiting for your call`,m.jsx(BC,{onClick:()=>v(p._id),style:{marginLeft:"1rem",cursor:"pointer"}})]}),l[p.time]||(te.custom(O=>m.jsxs($C,{children:[m.jsxs("div",{style:{flex:1},children:[m.jsx("strong",{children:p.clientName})," is waiting for your call."]}),m.jsx(bC,{onClick:()=>{te.dismiss(O.id)},children:m.jsx(Hg,{})})]}),{duration:1/0}),g[p.time]=!0)}}),o(E),s(h),a(g)},1e3);return()=>clearInterval(y)},[f,l,u]);const v=y=>{c(w=>{const E={...w,[y]:!0};return localStorage.setItem("clearedBookings",JSON.stringify(E)),E})};return m.jsxs(_C,{children:[m.jsx(OC,{children:m.jsx(RC,{children:"Awaiting Clients"})}),m.jsx(TC,{children:f.map((y,w)=>m.jsxs(PC,{cleared:u[y._id],children:[m.jsx(jC,{children:y.clientName}),m.jsx(NC,{children:le(y.time).format("DD/MM/YYYY HH:mm")}),r[y.time]&&m.jsx(LC,{children:r[y.time]}),i[y.time]&&m.jsx(AC,{children:i[y.time]})]},w))})]})},zC=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,IC=S.img`
  height: 2.5rem;
`,FC=S.div`
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

  ${b.mobile`
    width: 90%;
    padding: 1.5rem 2rem;
  `}
  ${b.tablet`
    width: 85%;
    padding: 1.5rem 2.5rem;
  `}
  ${b.laptop`
    width: 80%;
    padding: 2rem 3rem;
  `}
  ${b.desktop`
    width: 70%;
    padding: 2rem 4rem;
  `}
`,MC=S.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #007bff;
`,UC=S.div`
  display: flex;
  gap: 2rem;
`,HC=S(qt)`
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
`,WC=S.button`
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
`,VC=S.div`
  position: relative;
  width: 30%;
`,qC=S.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;

  ${b.mobile`
    width: 50%;
  `}
  ${b.tablet`
    width: 40%;
  `}
  ${b.laptop`
    width: 35%;
  `}
  ${b.desktop`
    width: 100%;
  `}

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.3);
  }
`,YC=S.ul`
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
`,KC=S.li`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`,QC=tl;function Wg(){const[e,t]=x.useState(""),[n,r]=x.useState([]),o=Nr();x.useEffect(()=>{(async()=>{if(e.trim())try{const a=await V.get(`/api/v1/users/search?name=${e}`);r(a.data.data.users)}catch(a){console.error("Search failed:",a)}else r([])})()},[e]);const i=l=>{o(`/user-calendar/${l}`)},s=async()=>{try{await tg(),te.success("Logged out successfully"),o("/")}catch{te.error("Failed to logout")}};return m.jsx(zC,{children:m.jsxs(FC,{children:[m.jsx(MC,{children:m.jsx(qt,{to:"/calendar",children:m.jsx(IC,{src:QC,alt:"logo"})})}),m.jsxs(VC,{children:[m.jsx(qC,{type:"text",placeholder:"Search...",value:e,onChange:l=>t(l.target.value)}),n.length>0&&m.jsx(YC,{children:n.map(l=>m.jsx(KC,{onClick:()=>i(l._id),children:l.name},l._id))})]}),m.jsxs(UC,{children:[m.jsx(HC,{to:"/me",children:"Profile"}),m.jsx(WC,{onClick:s,children:"Logout"})]})]})})}const JC=S.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #f1f1f1;
  padding: 1rem;
  width: 80%;
  margin: 0 auto;

  ${b.mobile`
    flex-direction: column;
    width: 90%;
  `}

  ${b.laptop`
    flex-direction: row;
  `}
`,GC=S.div`
  display: block;
  position: relative;
  width: 100%;
  border-radius: 1rem;
  padding: 1rem;
  flex: 5;

  ${b.mobile`
    padding: 0.5rem;
    margin-bottom: 1rem;
  `}

  ${b.laptop`
    padding: 1rem;
  `}
`,XC=S.div`
  flex: 1;
  margin-left: 1rem;

  ${b.mobile`
    display: none;
  `}

  ${b.tablet`
    display: none;
  `}

  ${b.laptop`
    display: block;
  `}
`,ZC=()=>{const{fetchBookings:e,setOpeningHour:t,setClosingHour:n}=x.useContext(De),{user:r}=x.useContext(Sn);return cg(r,e),x.useEffect(()=>{r&&(t(r.openingHour),n(r.closingHour))},[r,t,n]),m.jsxs(m.Fragment,{children:[m.jsx(Wg,{}),m.jsxs(JC,{children:[m.jsxs(GC,{children:[m.jsx(mC,{}),m.jsx(GE,{}),m.jsx(CC,{})]}),m.jsx(XC,{children:m.jsx(DC,{})})]})]})},eb="/assets/home-WpdAse2_.jpg",tb=S(qt)`
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
  ${b.mobile(`
    padding: 10px 20px;
    font-size: 0.9em;
  `)}
`,nb=S.span`
  color: #007bff;
`,rb=S.h2`
  font-size: 1.7rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
  ${b.mobile(`
    font-size: 1.8rem;
  `)}
  ${b.tablet(`
    font-size: 1.7rem;
  `)}
`,ob=S.img`
  height: 2.5rem;
`,ib=Dg`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Vg=Dg`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,sb=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f7fa;
  height: 100vh;
  font-family: "Arial", sans-serif;
  animation: ${ib} 1s ease-out;
`,lb=S.div`
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
  animation: ${Vg} 1s ease-out;
  ${b.mobile(`
    width: 90%;
    padding: 15px 20px;
  `)}
  ${b.tablet(`
    width: 85%;
    padding: 15px 25px;
  `)}
  ${b.laptop(`
    width: 80%;
    padding: 20px 30px;
  `)}
  ${b.desktop(`
    width: 70%;
    padding: 20px 40px;
  `)}
`,ab=S.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #007bff;
`,ub=S.div`
  display: flex;
  gap: 20px;
`,zf=S(qt)`
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
`,cb=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 2rem;
  ${b.mobile(`
    flex-direction: column;
    width: 90%;
    margin-top: 30px;
  `)}
  ${b.tablet(`
    flex-direction: column;
    width: 85%;
    margin-top: 40px;
  `)}
  ${b.laptop(`
    flex-direction: row;
    width: 80%;
    margin-top: 20px;
  `)}
  ${b.desktop(`
    flex-direction: row;
    width: 70%;
    margin-top: 20px;
  `)}
`,db=S.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  animation: ${Vg} 1s ease-out;
  margin-top: 8rem;
  ${b.mobile(`
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
  `)}
`,fb=S.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.3rem;
  font-weight: 600;
  ${b.mobile(`
    font-size: 2em;
  `)}
  ${b.tablet(`
    font-size: 2.2em;
  `)}
`,pb=S.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 2.5rem;
  max-width: 80%;
  ${b.mobile(`
    font-size: 1em;
    max-width: 90%;
  `)}
  ${b.tablet(`
    font-size: 1.1em;
    max-width: 85%;
  `)}
`,hb=S.img`
  height: auto;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,mb=S.div`
  flex: 1;
  max-width: 50%;
  ${b.mobile(`
    max-width: 90%;
    height: 250px;
  `)}
  ${b.tablet(`
    max-width: 85%;
    height: 300px;
  `)}
  ${b.laptop(`
    max-width: 50%;
    height: 350px;
  `)}
  ${b.desktop(`
    max-width: 50%;
    height: 400px;
  `)}
`,gb=eb,yb=tl,vb=()=>m.jsxs(sb,{children:[m.jsxs(lb,{children:[m.jsx(ab,{children:m.jsx(qt,{to:"/",children:m.jsx(ob,{src:yb,alt:"logo"})})}),m.jsxs(ub,{children:[m.jsx(zf,{to:"/signup",children:"Signup"}),m.jsx(zf,{to:"/login",children:"Login"})]})]}),m.jsxs(cb,{children:[m.jsxs(db,{children:[m.jsxs(fb,{children:["Welcome to ",m.jsx(nb,{children:"BookIt"})]}),m.jsx(rb,{children:"The Future of Bookings."}),m.jsx(pb,{children:"Our calendar app is specifically designed to fulfill the needs of marketing teams, customer service representatives, and phone salespersons. We understand the importance of timely communication and efficient scheduling, which is why our tool helps you manage your appointments effortlessly. Stay on top of your schedule and improve your client interactions with our calendar solution."}),m.jsx(tb,{to:"/login",children:"Start Booking Now"})]}),m.jsx(mb,{children:m.jsx(hb,{src:gb,alt:"background image"})})]})]});function If(e){return nl({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"},child:[]}]})(e)}const wb=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f7fa;
  height: 100vh;
  font-family: "Arial", sans-serif;
`,xb=S.div`
  display: flex;
  width: 80%;
  margin-top: 20px;
  ${b.tablet(`
    flex-direction: column;
    align-items: center;
    width: 90%;
  `)}
`,Sb=S.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(to right, #007bff, #0096ff);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${b.tablet(`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  `)}
`,Hl=S(qt)`
  color: #fff;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s;

  &:hover {
    color: #d4d4d4;
  }
`,kb=S.div`
  flex: 1;
  background-color: #fff;
  margin-left: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${b.tablet(`
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
  `)}
`,Eb=S.h2`
  font-size: 1.5em;
  color: #007bff;
  margin-bottom: 20px;
`,Cb=S.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,qn=S.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Yn=S.label`
  font-size: 1em;
  color: #333;
`,Ff=S.div`
  display: flex;
  align-items: center;
  position: relative;
`,yi=S.input`
  flex: 1;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:read-only {
    background-color: #f0f0f0;
  }
`,Mf=S.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  color: #007bff;
`,Uf=S.select`
  margin-top: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
`,bb=S.button`
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
`,$b=()=>{const{user:e,setUser:t}=x.useContext(Sn),{setOpeningHour:n,setClosingHour:r}=x.useContext(De),[o,i]=x.useState(""),[s,l]=x.useState(""),[a,u]=x.useState(""),[c,d]=x.useState(""),[f,v]=x.useState(null),[y,w]=x.useState(7),[E,h]=x.useState(19);x.useEffect(()=>{e&&(i(e.name),l(e.email),w(e.openingHour||7),h(e.closingHour||19))},[e]);const g=async p=>{p.preventDefault();try{(f==="name"||f==="email")&&(await PS({name:o,email:s}),te.success("Settings updated successfully")),a&&c&&(await jS({passwordCurrent:a,password:c}),te.success("Password updated successfully")),await AS({openingHour:y,closingHour:E}),t({...e,openingHour:y,closingHour:E}),n(y),r(E),te.success("Hours updated successfully")}catch{te.error("Failed to update settings")}finally{v(null)}};return m.jsxs(wb,{children:[m.jsx(Wg,{}),m.jsxs(xb,{children:[m.jsxs(Sb,{children:[m.jsx(Hl,{to:"#",children:"MY SETTINGS"}),m.jsx(Hl,{to:"#",children:"MY DETAILS"}),m.jsx(Hl,{to:"#",children:"BILLING"})]}),m.jsxs(kb,{children:[m.jsx(Eb,{children:"YOUR ACCOUNT SETTINGS"}),m.jsxs(Cb,{onSubmit:g,children:[m.jsxs(qn,{children:[m.jsx(Yn,{children:"Name"}),m.jsxs(Ff,{children:[m.jsx(yi,{type:"text",placeholder:o,onChange:p=>i(p.target.value),readOnly:f!=="name"}),f!=="name"&&m.jsxs(Mf,{onClick:()=>v("name"),children:["Change name ",m.jsx(If,{})]})]})]}),m.jsxs(qn,{children:[m.jsx(Yn,{children:"Email address"}),m.jsxs(Ff,{children:[m.jsx(yi,{type:"email",placeholder:s,onChange:p=>l(p.target.value),readOnly:f!=="email"}),f!=="email"&&m.jsxs(Mf,{onClick:()=>v("email"),children:["Change email ",m.jsx(If,{})]})]})]}),m.jsxs(qn,{children:[m.jsx(Yn,{children:"Current Password"}),m.jsx(yi,{type:"password",value:a,onChange:p=>u(p.target.value)})]}),m.jsxs(qn,{children:[m.jsx(Yn,{children:"New Password"}),m.jsx(yi,{type:"password",value:c,onChange:p=>d(p.target.value)})]}),m.jsxs(qn,{children:[m.jsx(Yn,{children:"Opening Hour"}),m.jsx(Uf,{value:y,onChange:p=>w(Number(p.target.value)),children:Array.from({length:24},(p,k)=>m.jsx("option",{value:k,children:`${String(k).padStart(2,"0")}:00`},k))})]}),m.jsxs(qn,{children:[m.jsx(Yn,{children:"Closing Hour"}),m.jsx(Uf,{value:E,onChange:p=>h(Number(p.target.value)),children:Array.from({length:24},(p,k)=>m.jsx("option",{value:k,children:`${String(k).padStart(2,"0")}:00`},k))})]}),m.jsx(bb,{type:"submit",children:"SAVE SETTINGS"})]})]})]})]})},_b=S.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,Ob=S.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,Rb=S.form`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,vi=S.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 600;
`,Wl=S.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ddd;
`,Tb=S.textarea`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ddd;
`,Hf=S.button`
  width: 45%;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`,Pb="http://localhost:3000",Wf=Pn(`${Pb}`),jb=({onClose:e})=>{const{user:t}=x.useContext(Sn),{selectedSlot:n,currentDate:r,targetedUserId:o,fetchBookings:i}=x.useContext(De),[s,l]=x.useState(""),[a,u]=x.useState("");if(!t||!n||!r)return null;const c=async d=>{d.preventDefault();const f={targetedUserId:o,phone:s,time:le(r).hour(n.split(":")[0]).minute(n.split(":")[1]).format(),description:a};try{const v=await CS(f);te.success("Booking created successfully"),Wf.emit("newBooking",v.currentUserBooking),Wf.emit("newBooking",v.targetedUserBooking),i(t._id),e()}catch(v){te.error("Failed to create booking"),console.error("Failed to create booking:",v)}};return m.jsx(Ob,{children:m.jsxs(Rb,{onSubmit:c,children:[m.jsxs(vi,{children:["Name:",m.jsx(Wl,{type:"text",value:t.name,disabled:!0})]}),m.jsxs(vi,{children:["Email:",m.jsx(Wl,{type:"email",value:t.email,disabled:!0})]}),m.jsxs(vi,{children:["Phone:",m.jsx(Wl,{type:"tel",value:s,onChange:d=>l(d.target.value),required:!0})]}),m.jsxs(vi,{children:["Description:",m.jsx(Tb,{value:a,onChange:d=>u(d.target.value)})]}),m.jsxs(_b,{children:[m.jsx(Hf,{type:"submit",children:"Book"}),m.jsx(Hf,{type:"button",onClick:e,children:"Cancel"})]})]})})},Nb=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Lb=S.div`
  display: flex;
  flex-direction: row;
  background: #f1f1f1;
  max-width: 1200px;
  max-height: 70vh;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 1rem;
  height: 60vh;
`,Ab=S.div`
  flex: 1;
  background: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;const Bb=S.div`
  font-size: 1.5rem;
  font-weight: bold;
`,Vf=S.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`,Db=S.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,zb=S.div`
  flex: 1;
  text-align: center;
  padding: 0.5rem 0;
  font-weight: bold;
`,Ib=S.div`
  display: flex;
  flex-wrap: wrap;
`,Fb=S.div`
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
`,Mb=S.div`
  width: calc(100% / 7);
  height: 4rem;
`,Ub=S.div`
  flex: 0.5;
  background: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-left: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 70vh;
`,Hb=S.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;S.div`
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
`;const Wb=S.div`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #f9f9f9;
  }
`,Vb=()=>{const{currentDate:e,setCurrentDate:t}=x.useContext(De),n=()=>{const o=e.subtract(1,"month");t(o)},r=()=>{const o=e.add(1,"month");t(o)};return m.jsxs(Nb,{children:[m.jsx(Vf,{onClick:n,children:"<"}),m.jsx(Bb,{children:e.format("MMMM YYYY")}),m.jsx(Vf,{onClick:r,children:">"})]})},qb=()=>{const{currentDate:e,setCurrentDate:t}=x.useContext(De),[n,r]=x.useState(e),o=le(),i=d=>{const f=e.date(d);r(f),t(f)},s=e.startOf("month"),l=e.endOf("month"),a=[];let u=s.startOf("week");for(;u.isBefore(s);)a.push({day:u.date(),isCurrentMonth:!1,isPast:u.isBefore(o,"day")}),u=u.add(1,"day");for(u=s;u.isBefore(l.add(1,"day"));)a.push({day:u.date(),isCurrentMonth:!0,isPast:u.isBefore(o,"day")}),u=u.add(1,"day");for(u=l.add(1,"day");u.weekday()!==0;)a.push({day:u.date(),isCurrentMonth:!1,isPast:u.isBefore(o,"day")}),u=u.add(1,"day");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return m.jsxs(m.Fragment,{children:[m.jsx(Db,{children:c.map(d=>m.jsx(zb,{children:d},d))}),m.jsx(Ib,{children:a.map(({day:d,isCurrentMonth:f,isPast:v},y)=>{if(!f)return m.jsx(Mb,{},y);const w=n.date()===d&&n.month()===e.month();return m.jsx(Fb,{$isSelected:w,$isPast:v,onClick:()=>!v&&i(d),children:d},y)})})]})},Yb=()=>{const{currentDate:e,bookings:t,openingHour:n,closingHour:r,setSelectedSlot:o,targetedUserBookings:i}=x.useContext(De),s=e,a=(()=>{const u=[],c=le(),d=[...t,...i];for(let f=n;f<r;f++)for(let v=0;v<60;v+=15){const y=s.hour(f).minute(v);if(y.isAfter(c)){const w=y.format("HH:mm");d.some(h=>le(h.time).format("HH:mm")===w)||u.push(w)}}return u})();return m.jsxs(m.Fragment,{children:[m.jsx(Hb,{children:s.format("ddd DD")}),a.map((u,c)=>m.jsx(Wb,{onClick:()=>o(u),children:u},c))]})},Kb="http://localhost:3000",wi=Pn(`${Kb}`),Qb=()=>{const{setOpeningHour:e,setClosingHour:t,selectedSlot:n,setSelectedSlot:r,setTargetedUserBookings:o,setTargetedUserId:i,fetchBookings:s}=x.useContext(De),{userId:l}=cm();x.useEffect(()=>{i(l),(async()=>{try{const d=await rg(l);e(d.openingHour||7),t(d.closingHour||19)}catch(d){console.error("Failed to fetch user opening/closing hours",d)}})()},[l,e,t,i]);const a=async()=>{try{const c=await ng(l);o(c||[])}catch(c){console.error("Failed to fetch targeted user bookings",c),o([])}};x.useEffect(()=>(wi.emit("join",l),wi.on("newBooking",()=>{a(),s(l)}),()=>{wi.emit("leave",l),wi.off("newBooking")}),[l,s]),x.useEffect(()=>{a()},[l]);const u=()=>{r(null)};return m.jsxs(Lb,{children:[m.jsxs(Ab,{children:[m.jsx(Vb,{}),m.jsx(qb,{})]}),m.jsx(Ub,{children:m.jsx(Yb,{})}),n&&m.jsx(jb,{onClose:u})]})},Jb=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`,Gb=S.h1`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.5rem;
`,Xb=S.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,Zb=S.div`
  margin-bottom: 15px;
`,e$=S.label`
  margin-bottom: 5px;
  font-weight: bold;
`,t$=S.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,n$=S.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`,r$=S.p`
  margin-top: 20px;
  color: green;
  font-weight: bold;
`,o$=()=>{const[e,t]=x.useState(""),[n,r]=x.useState(""),o=async i=>{i.preventDefault();try{await NS(e),r("Reset URL has been sent to your email. Only valid for 10 minutes.")}catch{r("Error sending reset email. Please try again.")}};return m.jsxs(Jb,{children:[m.jsx(Gb,{children:"Reset Password"}),m.jsxs(Xb,{onSubmit:o,children:[m.jsxs(Zb,{children:[m.jsx(e$,{htmlFor:"email",children:"Email:"}),m.jsx(t$,{type:"email",id:"email",value:e,onChange:i=>t(i.target.value),required:!0})]}),m.jsx(n$,{type:"submit",children:"Send"})]}),n&&m.jsx(r$,{children:n})]})},i$=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`,s$=S.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`,l$=S.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`,a$=S.button`
  padding: 10px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
`,u$=S.p`
  color: green;
  font-size: 16px;
`,c$=S.p`
  color: red;
  font-size: 16px;
`,d$=()=>{const{token:e}=cm(),[t,n]=x.useState(""),[r,o]=x.useState(""),[i,s]=x.useState(""),l=async a=>{a.preventDefault();try{await LS(e,t),o("Password reset successful!"),s("")}catch(u){console.error("Error resetting password:",u),o(""),s("Failed to reset password")}};return m.jsxs(i$,{children:[m.jsx("h1",{children:"Reset Password"}),m.jsxs(s$,{onSubmit:l,children:[m.jsx(l$,{type:"password",placeholder:"New Password",value:t,onChange:a=>n(a.target.value),required:!0}),m.jsx(a$,{type:"submit",children:"Reset Password"})]}),r&&m.jsx(u$,{children:r}),i&&m.jsx(c$,{children:i})]})},f$=()=>m.jsxs(mv,{children:[m.jsx(aw,{position:"bottom-right",toastOptions:{duration:4e3}}),m.jsx(BS,{children:m.jsx(qS,{children:m.jsxs(av,{children:[m.jsx(jt,{path:"/",element:m.jsx(vb,{})}),m.jsx(jt,{path:"/me",element:m.jsx($b,{})}),m.jsx(jt,{path:"/login",element:m.jsx(wE,{})}),m.jsx(jt,{path:"/signup",element:m.jsx(iE,{})}),m.jsx(jt,{path:"/forgot-password",element:m.jsx(o$,{})}),m.jsx(jt,{path:"/resetPassword/:token",element:m.jsx(d$,{})}),m.jsx(jt,{path:"/user-calendar/:userId",element:m.jsx(Qb,{})}),m.jsx(jt,{path:"/calendar",element:m.jsx(YS,{children:m.jsx(ZC,{})})})]})})})]});Vl.createRoot(document.getElementById("root")).render(m.jsx(He.StrictMode,{children:m.jsx(f$,{})}));
