(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Co(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const yf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vf=Co(yf);function ml(t){return!!t||t===""}function Io(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Te(s)?_f(s):Io(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Te(t))return t;if(ue(t))return t}}const wf=/;(?![^(]*\))/g,Ef=/:(.+)/;function _f(t){const e={};return t.split(wf).forEach(n=>{if(n){const s=n.split(Ef);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function as(t){let e="";if(Te(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=as(t[n]);s&&(e+=s+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yn=t=>Te(t)?t:t==null?"":B(t)||ue(t)&&(t.toString===El||!$(t.toString))?JSON.stringify(t,yl,2):String(t),yl=(t,e)=>e&&e.__v_isRef?yl(t,e.value):wn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:vl(e)?{[`Set(${e.size})`]:[...e.values()]}:ue(e)&&!B(e)&&!_l(e)?String(e):e,re={},vn=[],at=()=>{},Tf=()=>!1,bf=/^on[^a-z]/,Dr=t=>bf.test(t),Ao=t=>t.startsWith("onUpdate:"),Be=Object.assign,So=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Cf=Object.prototype.hasOwnProperty,z=(t,e)=>Cf.call(t,e),B=Array.isArray,wn=t=>Nr(t)==="[object Map]",vl=t=>Nr(t)==="[object Set]",$=t=>typeof t=="function",Te=t=>typeof t=="string",xo=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",wl=t=>ue(t)&&$(t.then)&&$(t.catch),El=Object.prototype.toString,Nr=t=>El.call(t),If=t=>Nr(t).slice(8,-1),_l=t=>Nr(t)==="[object Object]",Do=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rr=Co(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Af=/-(\w)/g,An=kr(t=>t.replace(Af,(e,n)=>n?n.toUpperCase():"")),Sf=/\B([A-Z])/g,Pn=kr(t=>t.replace(Sf,"-$1").toLowerCase()),Tl=kr(t=>t.charAt(0).toUpperCase()+t.slice(1)),di=kr(t=>t?`on${Tl(t)}`:""),cs=(t,e)=>!Object.is(t,e),pi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ur=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xf=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ua;const Df=()=>Ua||(Ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ut;class Nf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ut&&(this.parent=ut,this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}run(e){if(this.active){const n=ut;try{return ut=this,e()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function kf(t,e=ut){e&&e.active&&e.effects.push(t)}const No=t=>{const e=new Set(t);return e.w=0,e.n=0,e},bl=t=>(t.w&Mt)>0,Cl=t=>(t.n&Mt)>0,Mf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Mt},Rf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];bl(r)&&!Cl(r)?r.delete(t):e[n++]=r,r.w&=~Mt,r.n&=~Mt}e.length=n}},Li=new WeakMap;let Qn=0,Mt=1;const Pi=30;let it;const Yt=Symbol(""),Fi=Symbol("");class ko{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kf(this,s)}run(){if(!this.active)return this.fn();let e=it,n=Dt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=it,it=this,Dt=!0,Mt=1<<++Qn,Qn<=Pi?Mf(this):$a(this),this.fn()}finally{Qn<=Pi&&Rf(this),Mt=1<<--Qn,it=this.parent,Dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){it===this?this.deferStop=!0:this.active&&($a(this),this.onStop&&this.onStop(),this.active=!1)}}function $a(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dt=!0;const Il=[];function Fn(){Il.push(Dt),Dt=!1}function Vn(){const t=Il.pop();Dt=t===void 0?!0:t}function Xe(t,e,n){if(Dt&&it){let s=Li.get(t);s||Li.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=No()),Al(r)}}function Al(t,e){let n=!1;Qn<=Pi?Cl(t)||(t.n|=Mt,n=!bl(t)):n=!t.has(it),n&&(t.add(it),it.deps.push(t))}function _t(t,e,n,s,r,i){const o=Li.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Do(n)&&a.push(o.get("length")):(a.push(o.get(Yt)),wn(t)&&a.push(o.get(Fi)));break;case"delete":B(t)||(a.push(o.get(Yt)),wn(t)&&a.push(o.get(Fi)));break;case"set":wn(t)&&a.push(o.get(Yt));break}if(a.length===1)a[0]&&Vi(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Vi(No(c))}}function Vi(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&ja(s);for(const s of n)s.computed||ja(s)}function ja(t,e){(t!==it||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Of=Co("__proto__,__v_isRef,__isVue"),Sl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xo)),Lf=Mo(),Pf=Mo(!1,!0),Ff=Mo(!0),Ha=Vf();function Vf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Y(this);for(let i=0,o=this.length;i<o;i++)Xe(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Y)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fn();const s=Y(this)[e].apply(this,n);return Vn(),s}}),t}function Mo(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?ed:Ml:e?kl:Nl).get(s))return s;const o=B(s);if(!t&&o&&z(Ha,r))return Reflect.get(Ha,r,i);const a=Reflect.get(s,r,i);return(xo(r)?Sl.has(r):Of(r))||(t||Xe(s,"get",r),e)?a:Pe(a)?o&&Do(r)?a:a.value:ue(a)?t?Rl(a):Lo(a):a}}const Bf=xl(),Uf=xl(!0);function xl(t=!1){return function(n,s,r,i){let o=n[s];if(Sn(o)&&Pe(o)&&!Pe(r))return!1;if(!t&&(!hr(r)&&!Sn(r)&&(o=Y(o),r=Y(r)),!B(n)&&Pe(o)&&!Pe(r)))return o.value=r,!0;const a=B(n)&&Do(s)?Number(s)<n.length:z(n,s),c=Reflect.set(n,s,r,i);return n===Y(i)&&(a?cs(r,o)&&_t(n,"set",s,r):_t(n,"add",s,r)),c}}function $f(t,e){const n=z(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&_t(t,"delete",e,void 0),s}function jf(t,e){const n=Reflect.has(t,e);return(!xo(e)||!Sl.has(e))&&Xe(t,"has",e),n}function Hf(t){return Xe(t,"iterate",B(t)?"length":Yt),Reflect.ownKeys(t)}const Dl={get:Lf,set:Bf,deleteProperty:$f,has:jf,ownKeys:Hf},qf={get:Ff,set(t,e){return!0},deleteProperty(t,e){return!0}},Kf=Be({},Dl,{get:Pf,set:Uf}),Ro=t=>t,Mr=t=>Reflect.getPrototypeOf(t);function qs(t,e,n=!1,s=!1){t=t.__v_raw;const r=Y(t),i=Y(e);n||(e!==i&&Xe(r,"get",e),Xe(r,"get",i));const{has:o}=Mr(r),a=s?Ro:n?Fo:ls;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ks(t,e=!1){const n=this.__v_raw,s=Y(n),r=Y(t);return e||(t!==r&&Xe(s,"has",t),Xe(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function zs(t,e=!1){return t=t.__v_raw,!e&&Xe(Y(t),"iterate",Yt),Reflect.get(t,"size",t)}function qa(t){t=Y(t);const e=Y(this);return Mr(e).has.call(e,t)||(e.add(t),_t(e,"add",t,t)),this}function Ka(t,e){e=Y(e);const n=Y(this),{has:s,get:r}=Mr(n);let i=s.call(n,t);i||(t=Y(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?cs(e,o)&&_t(n,"set",t,e):_t(n,"add",t,e),this}function za(t){const e=Y(this),{has:n,get:s}=Mr(e);let r=n.call(e,t);r||(t=Y(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&_t(e,"delete",t,void 0),i}function Ga(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&_t(t,"clear",void 0,void 0),n}function Gs(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Y(o),c=e?Ro:t?Fo:ls;return!t&&Xe(a,"iterate",Yt),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Ws(t,e,n){return function(...s){const r=this.__v_raw,i=Y(r),o=wn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Ro:e?Fo:ls;return!e&&Xe(i,"iterate",c?Fi:Yt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function St(t){return function(...e){return t==="delete"?!1:this}}function zf(){const t={get(i){return qs(this,i)},get size(){return zs(this)},has:Ks,add:qa,set:Ka,delete:za,clear:Ga,forEach:Gs(!1,!1)},e={get(i){return qs(this,i,!1,!0)},get size(){return zs(this)},has:Ks,add:qa,set:Ka,delete:za,clear:Ga,forEach:Gs(!1,!0)},n={get(i){return qs(this,i,!0)},get size(){return zs(this,!0)},has(i){return Ks.call(this,i,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:Gs(!0,!1)},s={get(i){return qs(this,i,!0,!0)},get size(){return zs(this,!0)},has(i){return Ks.call(this,i,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:Gs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ws(i,!1,!1),n[i]=Ws(i,!0,!1),e[i]=Ws(i,!1,!0),s[i]=Ws(i,!0,!0)}),[t,n,e,s]}const[Gf,Wf,Qf,Yf]=zf();function Oo(t,e){const n=e?t?Yf:Qf:t?Wf:Gf;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(z(n,r)&&r in s?n:s,r,i)}const Xf={get:Oo(!1,!1)},Jf={get:Oo(!1,!0)},Zf={get:Oo(!0,!1)},Nl=new WeakMap,kl=new WeakMap,Ml=new WeakMap,ed=new WeakMap;function td(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nd(t){return t.__v_skip||!Object.isExtensible(t)?0:td(If(t))}function Lo(t){return Sn(t)?t:Po(t,!1,Dl,Xf,Nl)}function sd(t){return Po(t,!1,Kf,Jf,kl)}function Rl(t){return Po(t,!0,qf,Zf,Ml)}function Po(t,e,n,s,r){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=nd(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function En(t){return Sn(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function Sn(t){return!!(t&&t.__v_isReadonly)}function hr(t){return!!(t&&t.__v_isShallow)}function Ol(t){return En(t)||Sn(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function Ll(t){return ur(t,"__v_skip",!0),t}const ls=t=>ue(t)?Lo(t):t,Fo=t=>ue(t)?Rl(t):t;function Pl(t){Dt&&it&&(t=Y(t),Al(t.dep||(t.dep=No())))}function Fl(t,e){t=Y(t),t.dep&&Vi(t.dep)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function xn(t){return rd(t,!1)}function rd(t,e){return Pe(t)?t:new id(t,e)}class id{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:ls(e)}get value(){return Pl(this),this._value}set value(e){const n=this.__v_isShallow||hr(e)||Sn(e);e=n?e:Y(e),cs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ls(e),Fl(this))}}function et(t){return Pe(t)?t.value:t}const od={get:(t,e,n)=>et(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Pe(r)&&!Pe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Vl(t){return En(t)?t:new Proxy(t,od)}var Bl;class ad{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Bl]=!1,this._dirty=!0,this.effect=new ko(e,()=>{this._dirty||(this._dirty=!0,Fl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Y(this);return Pl(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Bl="__v_isReadonly";function cd(t,e,n=!1){let s,r;const i=$(t);return i?(s=t,r=at):(s=t.get,r=t.set),new ad(s,r,i||!r,n)}function Nt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Rr(i,e,n)}return r}function tt(t,e,n,s){if($(t)){const i=Nt(t,e,n,s);return i&&wl(i)&&i.catch(o=>{Rr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(tt(t[i],e,n,s));return r}function Rr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Nt(c,null,10,[t,o,a]);return}}ld(t,n,r,s)}function ld(t,e,n,s=!0){console.error(t)}let us=!1,Bi=!1;const Le=[];let ft=0;const _n=[];let wt=null,qt=0;const Ul=Promise.resolve();let Vo=null;function ud(t){const e=Vo||Ul;return t?e.then(this?t.bind(this):t):e}function hd(t){let e=ft+1,n=Le.length;for(;e<n;){const s=e+n>>>1;hs(Le[s])<t?e=s+1:n=s}return e}function Bo(t){(!Le.length||!Le.includes(t,us&&t.allowRecurse?ft+1:ft))&&(t.id==null?Le.push(t):Le.splice(hd(t.id),0,t),$l())}function $l(){!us&&!Bi&&(Bi=!0,Vo=Ul.then(Hl))}function fd(t){const e=Le.indexOf(t);e>ft&&Le.splice(e,1)}function dd(t){B(t)?_n.push(...t):(!wt||!wt.includes(t,t.allowRecurse?qt+1:qt))&&_n.push(t),$l()}function Wa(t,e=us?ft+1:0){for(;e<Le.length;e++){const n=Le[e];n&&n.pre&&(Le.splice(e,1),e--,n())}}function jl(t){if(_n.length){const e=[...new Set(_n)];if(_n.length=0,wt){wt.push(...e);return}for(wt=e,wt.sort((n,s)=>hs(n)-hs(s)),qt=0;qt<wt.length;qt++)wt[qt]();wt=null,qt=0}}const hs=t=>t.id==null?1/0:t.id,pd=(t,e)=>{const n=hs(t)-hs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Hl(t){Bi=!1,us=!0,Le.sort(pd);const e=at;try{for(ft=0;ft<Le.length;ft++){const n=Le[ft];n&&n.active!==!1&&Nt(n,null,14)}}finally{ft=0,Le.length=0,jl(),us=!1,Vo=null,(Le.length||_n.length)&&Hl()}}function gd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||re;p&&(r=n.map(m=>m.trim())),f&&(r=n.map(xf))}let a,c=s[a=di(e)]||s[a=di(An(e))];!c&&i&&(c=s[a=di(Pn(e))]),c&&tt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,tt(l,t,6,r)}}function ql(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!$(t)){const c=l=>{const u=ql(l,e,!0);u&&(a=!0,Be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ue(t)&&s.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):Be(o,i),ue(t)&&s.set(t,o),o)}function Or(t,e){return!t||!Dr(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Pn(e))||z(t,e))}let Ge=null,Lr=null;function fr(t){const e=Ge;return Ge=t,Lr=t&&t.type.__scopeId||null,e}function md(t){Lr=t}function yd(){Lr=null}function Kl(t,e=Ge,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ic(-1);const i=fr(e),o=t(...r);return fr(i),s._d&&ic(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function gi(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:m,ctx:b,inheritAttrs:N}=t;let S,L;const ae=fr(t);try{if(n.shapeFlag&4){const J=r||s;S=ht(u.call(J,J,f,i,m,p,b)),L=c}else{const J=e;S=ht(J.length>1?J(i,{attrs:c,slots:a,emit:l}):J(i,null)),L=e.props?c:vd(c)}}catch(J){ts.length=0,Rr(J,t,1),S=Ne(nt)}let te=S;if(L&&N!==!1){const J=Object.keys(L),{shapeFlag:he}=te;J.length&&he&7&&(o&&J.some(Ao)&&(L=wd(L,o)),te=Rt(te,L))}return n.dirs&&(te=Rt(te),te.dirs=te.dirs?te.dirs.concat(n.dirs):n.dirs),n.transition&&(te.transition=n.transition),S=te,fr(ae),S}const vd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Dr(n))&&((e||(e={}))[n]=t[n]);return e},wd=(t,e)=>{const n={};for(const s in t)(!Ao(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ed(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Qa(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!Or(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Qa(s,o,l):!0:!!o;return!1}function Qa(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Or(n,i))return!0}return!1}function _d({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Td=t=>t.__isSuspense;function bd(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):dd(t)}function Cd(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function mi(t,e,n=!1){const s=xe||Ge;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&$(e)?e.call(s.proxy):e}}const Ya={};function yi(t,e,n){return zl(t,e,n)}function zl(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=re){const a=xe;let c,l=!1,u=!1;if(Pe(t)?(c=()=>t.value,l=hr(t)):En(t)?(c=()=>t,s=!0):B(t)?(u=!0,l=t.some(L=>En(L)||hr(L)),c=()=>t.map(L=>{if(Pe(L))return L.value;if(En(L))return pn(L);if($(L))return Nt(L,a,2)})):$(t)?e?c=()=>Nt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),tt(t,a,3,[p])}:c=at,e&&s){const L=c;c=()=>pn(L())}let f,p=L=>{f=S.onStop=()=>{Nt(L,a,4)}};if(ps)return p=at,e?n&&tt(e,a,3,[c(),u?[]:void 0,p]):c(),at;let m=u?[]:Ya;const b=()=>{if(!!S.active)if(e){const L=S.run();(s||l||(u?L.some((ae,te)=>cs(ae,m[te])):cs(L,m)))&&(f&&f(),tt(e,a,3,[L,m===Ya?void 0:m,p]),m=L)}else S.run()};b.allowRecurse=!!e;let N;r==="sync"?N=b:r==="post"?N=()=>qe(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),N=()=>Bo(b));const S=new ko(c,N);return e?n?b():m=S.run():r==="post"?qe(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&So(a.scope.effects,S)}}function Id(t,e,n){const s=this.proxy,r=Te(t)?t.includes(".")?Gl(s,t):()=>s[t]:t.bind(s,s);let i;$(e)?i=e:(i=e.handler,n=e);const o=xe;Dn(this);const a=zl(r,i.bind(s),n);return o?Dn(o):Jt(),a}function Gl(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function pn(t,e){if(!ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))pn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)pn(t[n],e);else if(vl(t)||wn(t))t.forEach(n=>{pn(n,e)});else if(_l(t))for(const n in t)pn(t[n],e);return t}function Ad(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Uo(()=>{t.isMounted=!0}),Xl(()=>{t.isUnmounting=!0}),t}const Ze=[Function,Array],Sd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ze,onEnter:Ze,onAfterEnter:Ze,onEnterCancelled:Ze,onBeforeLeave:Ze,onLeave:Ze,onAfterLeave:Ze,onLeaveCancelled:Ze,onBeforeAppear:Ze,onAppear:Ze,onAfterAppear:Ze,onAppearCancelled:Ze},setup(t,{slots:e}){const n=gp(),s=Ad();let r;return()=>{const i=e.default&&Ql(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const N of i)if(N.type!==nt){o=N;break}}const a=Y(t),{mode:c}=a;if(s.isLeaving)return vi(o);const l=Xa(o);if(!l)return vi(o);const u=Ui(l,a,s,n);$i(l,u);const f=n.subTree,p=f&&Xa(f);let m=!1;const{getTransitionKey:b}=l.type;if(b){const N=b();r===void 0?r=N:N!==r&&(r=N,m=!0)}if(p&&p.type!==nt&&(!Kt(l,p)||m)){const N=Ui(p,a,s,n);if($i(p,N),c==="out-in")return s.isLeaving=!0,N.afterLeave=()=>{s.isLeaving=!1,n.update()},vi(o);c==="in-out"&&l.type!==nt&&(N.delayLeave=(S,L,ae)=>{const te=Wl(s,p);te[String(p.key)]=p,S._leaveCb=()=>{L(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ae})}return o}}},xd=Sd;function Wl(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ui(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:b,onBeforeAppear:N,onAppear:S,onAfterAppear:L,onAppearCancelled:ae}=e,te=String(t.key),J=Wl(n,t),he=(U,ee)=>{U&&tt(U,s,9,ee)},Ue=(U,ee)=>{const ce=ee[1];he(U,ee),B(U)?U.every(Ee=>Ee.length<=1)&&ce():U.length<=1&&ce()},we={mode:i,persisted:o,beforeEnter(U){let ee=a;if(!n.isMounted)if(r)ee=N||a;else return;U._leaveCb&&U._leaveCb(!0);const ce=J[te];ce&&Kt(t,ce)&&ce.el._leaveCb&&ce.el._leaveCb(),he(ee,[U])},enter(U){let ee=c,ce=l,Ee=u;if(!n.isMounted)if(r)ee=S||c,ce=L||l,Ee=ae||u;else return;let st=!1;const mt=U._enterCb=js=>{st||(st=!0,js?he(Ee,[U]):he(ce,[U]),we.delayedLeave&&we.delayedLeave(),U._enterCb=void 0)};ee?Ue(ee,[U,mt]):mt()},leave(U,ee){const ce=String(t.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return ee();he(f,[U]);let Ee=!1;const st=U._leaveCb=mt=>{Ee||(Ee=!0,ee(),mt?he(b,[U]):he(m,[U]),U._leaveCb=void 0,J[ce]===t&&delete J[ce])};J[ce]=t,p?Ue(p,[U,st]):st()},clone(U){return Ui(U,e,n,s)}};return we}function vi(t){if(Pr(t))return t=Rt(t),t.children=null,t}function Xa(t){return Pr(t)?t.children?t.children[0]:void 0:t}function $i(t,e){t.shapeFlag&6&&t.component?$i(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ql(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Oe?(o.patchFlag&128&&r++,s=s.concat(Ql(o.children,e,a))):(e||o.type!==nt)&&s.push(a!=null?Rt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const Zn=t=>!!t.type.__asyncLoader,Pr=t=>t.type.__isKeepAlive;function Dd(t,e){Yl(t,"a",e)}function Nd(t,e){Yl(t,"da",e)}function Yl(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Fr(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Pr(r.parent.vnode)&&kd(s,e,n,r),r=r.parent}}function kd(t,e,n,s){const r=Fr(e,t,s,!0);Jl(()=>{So(s[e],r)},n)}function Fr(t,e,n=xe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Fn(),Dn(n);const a=tt(e,n,t,o);return Jt(),Vn(),a});return s?r.unshift(i):r.push(i),i}}const It=t=>(e,n=xe)=>(!ps||t==="sp")&&Fr(t,e,n),Md=It("bm"),Uo=It("m"),Rd=It("bu"),Od=It("u"),Xl=It("bum"),Jl=It("um"),Ld=It("sp"),Pd=It("rtg"),Fd=It("rtc");function Vd(t,e=xe){Fr("ec",t,e)}function Ut(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Fn(),tt(c,n,8,[t.el,a,t,e]),Vn())}}const Bd=Symbol();function Zl(t,e,n,s){let r;const i=n&&n[s];if(B(t)||Te(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ue(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Ud(t,e,n={},s,r){if(Ge.isCE||Ge.parent&&Zn(Ge.parent)&&Ge.parent.isCE)return Ne("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),pe();const o=i&&eu(i(n)),a=ds(Oe,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function eu(t){return t.some(e=>lu(e)?!(e.type===nt||e.type===Oe&&!eu(e.children)):!0)?t:null}const ji=t=>t?hu(t)?Go(t)||t.proxy:ji(t.parent):null,dr=Be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ji(t.parent),$root:t=>ji(t.root),$emit:t=>t.emit,$options:t=>$o(t),$forceUpdate:t=>t.f||(t.f=()=>Bo(t.update)),$nextTick:t=>t.n||(t.n=ud.bind(t.proxy)),$watch:t=>Id.bind(t)}),$d={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==re&&z(s,e))return o[e]=1,s[e];if(r!==re&&z(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==re&&z(n,e))return o[e]=4,n[e];Hi&&(o[e]=0)}}const u=dr[e];let f,p;if(u)return e==="$attrs"&&Xe(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==re&&z(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==re&&z(r,e)?(r[e]=n,!0):s!==re&&z(s,e)?(s[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==re&&z(t,o)||e!==re&&z(e,o)||(a=i[0])&&z(a,o)||z(s,o)||z(dr,o)||z(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Hi=!0;function jd(t){const e=$o(t),n=t.proxy,s=t.ctx;Hi=!1,e.beforeCreate&&Ja(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:b,activated:N,deactivated:S,beforeDestroy:L,beforeUnmount:ae,destroyed:te,unmounted:J,render:he,renderTracked:Ue,renderTriggered:we,errorCaptured:U,serverPrefetch:ee,expose:ce,inheritAttrs:Ee,components:st,directives:mt,filters:js}=e;if(l&&Hd(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const fe in o){const ie=o[fe];$(ie)&&(s[fe]=ie.bind(n))}if(r){const fe=r.call(n,n);ue(fe)&&(t.data=Lo(fe))}if(Hi=!0,i)for(const fe in i){const ie=i[fe],yt=$(ie)?ie.bind(n,n):$(ie.get)?ie.get.bind(n,n):at,ui=!$(ie)&&$(ie.set)?ie.set.bind(n):at,zn=gs({get:yt,set:ui});Object.defineProperty(s,fe,{enumerable:!0,configurable:!0,get:()=>zn.value,set:un=>zn.value=un})}if(a)for(const fe in a)tu(a[fe],s,n,fe);if(c){const fe=$(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(ie=>{Cd(ie,fe[ie])})}u&&Ja(u,t,"c");function He(fe,ie){B(ie)?ie.forEach(yt=>fe(yt.bind(n))):ie&&fe(ie.bind(n))}if(He(Md,f),He(Uo,p),He(Rd,m),He(Od,b),He(Dd,N),He(Nd,S),He(Vd,U),He(Fd,Ue),He(Pd,we),He(Xl,ae),He(Jl,J),He(Ld,ee),B(ce))if(ce.length){const fe=t.exposed||(t.exposed={});ce.forEach(ie=>{Object.defineProperty(fe,ie,{get:()=>n[ie],set:yt=>n[ie]=yt})})}else t.exposed||(t.exposed={});he&&t.render===at&&(t.render=he),Ee!=null&&(t.inheritAttrs=Ee),st&&(t.components=st),mt&&(t.directives=mt)}function Hd(t,e,n=at,s=!1){B(t)&&(t=qi(t));for(const r in t){const i=t[r];let o;ue(i)?"default"in i?o=mi(i.from||r,i.default,!0):o=mi(i.from||r):o=mi(i),Pe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ja(t,e,n){tt(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function tu(t,e,n,s){const r=s.includes(".")?Gl(n,s):()=>n[s];if(Te(t)){const i=e[t];$(i)&&yi(r,i)}else if($(t))yi(r,t.bind(n));else if(ue(t))if(B(t))t.forEach(i=>tu(i,e,n,s));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&yi(r,i,t)}}function $o(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>pr(c,l,o,!0)),pr(c,e,o)),ue(e)&&i.set(e,c),c}function pr(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&pr(t,i,n,!0),r&&r.forEach(o=>pr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=qd[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qd={data:Za,props:jt,emits:jt,methods:jt,computed:jt,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:jt,directives:jt,watch:zd,provide:Za,inject:Kd};function Za(t,e){return e?t?function(){return Be($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Kd(t,e){return jt(qi(t),qi(e))}function qi(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $e(t,e){return t?[...new Set([].concat(t,e))]:e}function jt(t,e){return t?Be(Be(Object.create(null),t),e):e}function zd(t,e){if(!t)return e;if(!e)return t;const n=Be(Object.create(null),t);for(const s in e)n[s]=$e(t[s],e[s]);return n}function Gd(t,e,n,s=!1){const r={},i={};ur(i,Vr,1),t.propsDefaults=Object.create(null),nu(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:sd(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Wd(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Y(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Or(t.emitsOptions,p))continue;const m=e[p];if(c)if(z(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const b=An(p);r[b]=Ki(c,a,b,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{nu(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!z(e,f)&&((u=Pn(f))===f||!z(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Ki(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!z(e,f)&&!0)&&(delete i[f],l=!0)}l&&_t(t,"set","$attrs")}function nu(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(rr(c))continue;const l=e[c];let u;r&&z(r,u=An(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Or(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Y(n),l=a||re;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Ki(r,c,f,l[f],t,!z(l,f))}}return o}function Ki(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&$(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Dn(r),s=l[n]=c.call(null,e),Jt())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Pn(n))&&(s=!0))}return s}function su(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!$(t)){const u=f=>{c=!0;const[p,m]=su(f,e,!0);Be(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ue(t)&&s.set(t,vn),vn;if(B(i))for(let u=0;u<i.length;u++){const f=An(i[u]);ec(f)&&(o[f]=re)}else if(i)for(const u in i){const f=An(u);if(ec(f)){const p=i[u],m=o[f]=B(p)||$(p)?{type:p}:p;if(m){const b=sc(Boolean,m.type),N=sc(String,m.type);m[0]=b>-1,m[1]=N<0||b<N,(b>-1||z(m,"default"))&&a.push(f)}}}const l=[o,a];return ue(t)&&s.set(t,l),l}function ec(t){return t[0]!=="$"}function tc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function nc(t,e){return tc(t)===tc(e)}function sc(t,e){return B(e)?e.findIndex(n=>nc(n,t)):$(e)&&nc(e,t)?0:-1}const ru=t=>t[0]==="_"||t==="$stable",jo=t=>B(t)?t.map(ht):[ht(t)],Qd=(t,e,n)=>{if(e._n)return e;const s=Kl((...r)=>jo(e(...r)),n);return s._c=!1,s},iu=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ru(r))continue;const i=t[r];if($(i))e[r]=Qd(r,i,s);else if(i!=null){const o=jo(i);e[r]=()=>o}}},ou=(t,e)=>{const n=jo(e);t.slots.default=()=>n},Yd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),ur(e,"_",n)):iu(e,t.slots={})}else t.slots={},e&&ou(t,e);ur(t.slots,Vr,1)},Xd=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Be(r,e),!n&&a===1&&delete r._):(i=!e.$stable,iu(e,r)),o=e}else e&&(ou(t,e),o={default:1});if(i)for(const a in r)!ru(a)&&!(a in o)&&delete r[a]};function au(){return{app:null,config:{isNativeTag:Tf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jd=0;function Zd(t,e){return function(s,r=null){$(s)||(s=Object.assign({},s)),r!=null&&!ue(r)&&(r=null);const i=au(),o=new Set;let a=!1;const c=i.app={_uid:Jd++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:_p,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(c,...u)):$(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=Ne(s,r);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,Go(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function zi(t,e,n,s,r=!1){if(B(t)){t.forEach((p,m)=>zi(p,e&&(B(e)?e[m]:e),n,s,r));return}if(Zn(s)&&!r)return;const i=s.shapeFlag&4?Go(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===re?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(Te(l)?(u[l]=null,z(f,l)&&(f[l]=null)):Pe(l)&&(l.value=null)),$(c))Nt(c,a,12,[o,u]);else{const p=Te(c),m=Pe(c);if(p||m){const b=()=>{if(t.f){const N=p?u[c]:c.value;r?B(N)&&So(N,i):B(N)?N.includes(i)||N.push(i):p?(u[c]=[i],z(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,z(f,c)&&(f[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,qe(b,n)):b()}}}const qe=bd;function ep(t){return tp(t)}function tp(t,e){const n=Df();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=at,cloneNode:b,insertStaticContent:N}=t,S=(h,d,g,v=null,y=null,T=null,I=!1,_=null,C=!!d.dynamicChildren)=>{if(h===d)return;h&&!Kt(h,d)&&(v=Hs(h),At(h,y,T,!0),h=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:w,ref:M,shapeFlag:x}=d;switch(w){case qo:L(h,d,g,v);break;case nt:ae(h,d,g,v);break;case ir:h==null&&te(d,g,v,I);break;case Oe:mt(h,d,g,v,y,T,I,_,C);break;default:x&1?Ue(h,d,g,v,y,T,I,_,C):x&6?js(h,d,g,v,y,T,I,_,C):(x&64||x&128)&&w.process(h,d,g,v,y,T,I,_,C,hn)}M!=null&&y&&zi(M,h&&h.ref,T,d||h,!d)},L=(h,d,g,v)=>{if(h==null)s(d.el=a(d.children),g,v);else{const y=d.el=h.el;d.children!==h.children&&l(y,d.children)}},ae=(h,d,g,v)=>{h==null?s(d.el=c(d.children||""),g,v):d.el=h.el},te=(h,d,g,v)=>{[h.el,h.anchor]=N(h.children,d,g,v,h.el,h.anchor)},J=({el:h,anchor:d},g,v)=>{let y;for(;h&&h!==d;)y=p(h),s(h,g,v),h=y;s(d,g,v)},he=({el:h,anchor:d})=>{let g;for(;h&&h!==d;)g=p(h),r(h),h=g;r(d)},Ue=(h,d,g,v,y,T,I,_,C)=>{I=I||d.type==="svg",h==null?we(d,g,v,y,T,I,_,C):ce(h,d,y,T,I,_,C)},we=(h,d,g,v,y,T,I,_)=>{let C,w;const{type:M,props:x,shapeFlag:R,transition:V,patchFlag:G,dirs:ne}=h;if(h.el&&b!==void 0&&G===-1)C=h.el=b(h.el);else{if(C=h.el=o(h.type,T,x&&x.is,x),R&8?u(C,h.children):R&16&&ee(h.children,C,null,v,y,T&&M!=="foreignObject",I,_),ne&&Ut(h,null,v,"created"),x){for(const oe in x)oe!=="value"&&!rr(oe)&&i(C,oe,null,x[oe],T,h.children,v,y,vt);"value"in x&&i(C,"value",null,x.value),(w=x.onVnodeBeforeMount)&&lt(w,v,h)}U(C,h,h.scopeId,I,v)}ne&&Ut(h,null,v,"beforeMount");const se=(!y||y&&!y.pendingBranch)&&V&&!V.persisted;se&&V.beforeEnter(C),s(C,d,g),((w=x&&x.onVnodeMounted)||se||ne)&&qe(()=>{w&&lt(w,v,h),se&&V.enter(C),ne&&Ut(h,null,v,"mounted")},y)},U=(h,d,g,v,y)=>{if(g&&m(h,g),v)for(let T=0;T<v.length;T++)m(h,v[T]);if(y){let T=y.subTree;if(d===T){const I=y.vnode;U(h,I,I.scopeId,I.slotScopeIds,y.parent)}}},ee=(h,d,g,v,y,T,I,_,C=0)=>{for(let w=C;w<h.length;w++){const M=h[w]=_?xt(h[w]):ht(h[w]);S(null,M,d,g,v,y,T,I,_)}},ce=(h,d,g,v,y,T,I)=>{const _=d.el=h.el;let{patchFlag:C,dynamicChildren:w,dirs:M}=d;C|=h.patchFlag&16;const x=h.props||re,R=d.props||re;let V;g&&$t(g,!1),(V=R.onVnodeBeforeUpdate)&&lt(V,g,d,h),M&&Ut(d,h,g,"beforeUpdate"),g&&$t(g,!0);const G=y&&d.type!=="foreignObject";if(w?Ee(h.dynamicChildren,w,_,g,v,G,T):I||yt(h,d,_,null,g,v,G,T,!1),C>0){if(C&16)st(_,d,x,R,g,v,y);else if(C&2&&x.class!==R.class&&i(_,"class",null,R.class,y),C&4&&i(_,"style",x.style,R.style,y),C&8){const ne=d.dynamicProps;for(let se=0;se<ne.length;se++){const oe=ne[se],rt=x[oe],fn=R[oe];(fn!==rt||oe==="value")&&i(_,oe,rt,fn,y,h.children,g,v,vt)}}C&1&&h.children!==d.children&&u(_,d.children)}else!I&&w==null&&st(_,d,x,R,g,v,y);((V=R.onVnodeUpdated)||M)&&qe(()=>{V&&lt(V,g,d,h),M&&Ut(d,h,g,"updated")},v)},Ee=(h,d,g,v,y,T,I)=>{for(let _=0;_<d.length;_++){const C=h[_],w=d[_],M=C.el&&(C.type===Oe||!Kt(C,w)||C.shapeFlag&70)?f(C.el):g;S(C,w,M,null,v,y,T,I,!0)}},st=(h,d,g,v,y,T,I)=>{if(g!==v){for(const _ in v){if(rr(_))continue;const C=v[_],w=g[_];C!==w&&_!=="value"&&i(h,_,w,C,I,d.children,y,T,vt)}if(g!==re)for(const _ in g)!rr(_)&&!(_ in v)&&i(h,_,g[_],null,I,d.children,y,T,vt);"value"in v&&i(h,"value",g.value,v.value)}},mt=(h,d,g,v,y,T,I,_,C)=>{const w=d.el=h?h.el:a(""),M=d.anchor=h?h.anchor:a("");let{patchFlag:x,dynamicChildren:R,slotScopeIds:V}=d;V&&(_=_?_.concat(V):V),h==null?(s(w,g,v),s(M,g,v),ee(d.children,g,M,y,T,I,_,C)):x>0&&x&64&&R&&h.dynamicChildren?(Ee(h.dynamicChildren,R,g,y,T,I,_),(d.key!=null||y&&d===y.subTree)&&Ho(h,d,!0)):yt(h,d,g,M,y,T,I,_,C)},js=(h,d,g,v,y,T,I,_,C)=>{d.slotScopeIds=_,h==null?d.shapeFlag&512?y.ctx.activate(d,g,v,I,C):li(d,g,v,y,T,I,C):He(h,d,C)},li=(h,d,g,v,y,T,I)=>{const _=h.component=pp(h,v,y);if(Pr(h)&&(_.ctx.renderer=hn),mp(_),_.asyncDep){if(y&&y.registerDep(_,fe),!h.el){const C=_.subTree=Ne(nt);ae(null,C,d,g)}return}fe(_,h,d,g,y,T,I)},He=(h,d,g)=>{const v=d.component=h.component;if(Ed(h,d,g))if(v.asyncDep&&!v.asyncResolved){ie(v,d,g);return}else v.next=d,fd(v.update),v.update();else d.el=h.el,v.vnode=d},fe=(h,d,g,v,y,T,I)=>{const _=()=>{if(h.isMounted){let{next:M,bu:x,u:R,parent:V,vnode:G}=h,ne=M,se;$t(h,!1),M?(M.el=G.el,ie(h,M,I)):M=G,x&&pi(x),(se=M.props&&M.props.onVnodeBeforeUpdate)&&lt(se,V,M,G),$t(h,!0);const oe=gi(h),rt=h.subTree;h.subTree=oe,S(rt,oe,f(rt.el),Hs(rt),h,y,T),M.el=oe.el,ne===null&&_d(h,oe.el),R&&qe(R,y),(se=M.props&&M.props.onVnodeUpdated)&&qe(()=>lt(se,V,M,G),y)}else{let M;const{el:x,props:R}=d,{bm:V,m:G,parent:ne}=h,se=Zn(d);if($t(h,!1),V&&pi(V),!se&&(M=R&&R.onVnodeBeforeMount)&&lt(M,ne,d),$t(h,!0),x&&fi){const oe=()=>{h.subTree=gi(h),fi(x,h.subTree,h,y,null)};se?d.type.__asyncLoader().then(()=>!h.isUnmounted&&oe()):oe()}else{const oe=h.subTree=gi(h);S(null,oe,g,v,h,y,T),d.el=oe.el}if(G&&qe(G,y),!se&&(M=R&&R.onVnodeMounted)){const oe=d;qe(()=>lt(M,ne,oe),y)}(d.shapeFlag&256||ne&&Zn(ne.vnode)&&ne.vnode.shapeFlag&256)&&h.a&&qe(h.a,y),h.isMounted=!0,d=g=v=null}},C=h.effect=new ko(_,()=>Bo(w),h.scope),w=h.update=()=>C.run();w.id=h.uid,$t(h,!0),w()},ie=(h,d,g)=>{d.component=h;const v=h.vnode.props;h.vnode=d,h.next=null,Wd(h,d.props,v,g),Xd(h,d.children,g),Fn(),Wa(),Vn()},yt=(h,d,g,v,y,T,I,_,C=!1)=>{const w=h&&h.children,M=h?h.shapeFlag:0,x=d.children,{patchFlag:R,shapeFlag:V}=d;if(R>0){if(R&128){zn(w,x,g,v,y,T,I,_,C);return}else if(R&256){ui(w,x,g,v,y,T,I,_,C);return}}V&8?(M&16&&vt(w,y,T),x!==w&&u(g,x)):M&16?V&16?zn(w,x,g,v,y,T,I,_,C):vt(w,y,T,!0):(M&8&&u(g,""),V&16&&ee(x,g,v,y,T,I,_,C))},ui=(h,d,g,v,y,T,I,_,C)=>{h=h||vn,d=d||vn;const w=h.length,M=d.length,x=Math.min(w,M);let R;for(R=0;R<x;R++){const V=d[R]=C?xt(d[R]):ht(d[R]);S(h[R],V,g,null,y,T,I,_,C)}w>M?vt(h,y,T,!0,!1,x):ee(d,g,v,y,T,I,_,C,x)},zn=(h,d,g,v,y,T,I,_,C)=>{let w=0;const M=d.length;let x=h.length-1,R=M-1;for(;w<=x&&w<=R;){const V=h[w],G=d[w]=C?xt(d[w]):ht(d[w]);if(Kt(V,G))S(V,G,g,null,y,T,I,_,C);else break;w++}for(;w<=x&&w<=R;){const V=h[x],G=d[R]=C?xt(d[R]):ht(d[R]);if(Kt(V,G))S(V,G,g,null,y,T,I,_,C);else break;x--,R--}if(w>x){if(w<=R){const V=R+1,G=V<M?d[V].el:v;for(;w<=R;)S(null,d[w]=C?xt(d[w]):ht(d[w]),g,G,y,T,I,_,C),w++}}else if(w>R)for(;w<=x;)At(h[w],y,T,!0),w++;else{const V=w,G=w,ne=new Map;for(w=G;w<=R;w++){const Ye=d[w]=C?xt(d[w]):ht(d[w]);Ye.key!=null&&ne.set(Ye.key,w)}let se,oe=0;const rt=R-G+1;let fn=!1,Fa=0;const Gn=new Array(rt);for(w=0;w<rt;w++)Gn[w]=0;for(w=V;w<=x;w++){const Ye=h[w];if(oe>=rt){At(Ye,y,T,!0);continue}let ct;if(Ye.key!=null)ct=ne.get(Ye.key);else for(se=G;se<=R;se++)if(Gn[se-G]===0&&Kt(Ye,d[se])){ct=se;break}ct===void 0?At(Ye,y,T,!0):(Gn[ct-G]=w+1,ct>=Fa?Fa=ct:fn=!0,S(Ye,d[ct],g,null,y,T,I,_,C),oe++)}const Va=fn?np(Gn):vn;for(se=Va.length-1,w=rt-1;w>=0;w--){const Ye=G+w,ct=d[Ye],Ba=Ye+1<M?d[Ye+1].el:v;Gn[w]===0?S(null,ct,g,Ba,y,T,I,_,C):fn&&(se<0||w!==Va[se]?un(ct,g,Ba,2):se--)}}},un=(h,d,g,v,y=null)=>{const{el:T,type:I,transition:_,children:C,shapeFlag:w}=h;if(w&6){un(h.component.subTree,d,g,v);return}if(w&128){h.suspense.move(d,g,v);return}if(w&64){I.move(h,d,g,hn);return}if(I===Oe){s(T,d,g);for(let x=0;x<C.length;x++)un(C[x],d,g,v);s(h.anchor,d,g);return}if(I===ir){J(h,d,g);return}if(v!==2&&w&1&&_)if(v===0)_.beforeEnter(T),s(T,d,g),qe(()=>_.enter(T),y);else{const{leave:x,delayLeave:R,afterLeave:V}=_,G=()=>s(T,d,g),ne=()=>{x(T,()=>{G(),V&&V()})};R?R(T,G,ne):ne()}else s(T,d,g)},At=(h,d,g,v=!1,y=!1)=>{const{type:T,props:I,ref:_,children:C,dynamicChildren:w,shapeFlag:M,patchFlag:x,dirs:R}=h;if(_!=null&&zi(_,null,g,h,!0),M&256){d.ctx.deactivate(h);return}const V=M&1&&R,G=!Zn(h);let ne;if(G&&(ne=I&&I.onVnodeBeforeUnmount)&&lt(ne,d,h),M&6)mf(h.component,g,v);else{if(M&128){h.suspense.unmount(g,v);return}V&&Ut(h,null,d,"beforeUnmount"),M&64?h.type.remove(h,d,g,y,hn,v):w&&(T!==Oe||x>0&&x&64)?vt(w,d,g,!1,!0):(T===Oe&&x&384||!y&&M&16)&&vt(C,d,g),v&&La(h)}(G&&(ne=I&&I.onVnodeUnmounted)||V)&&qe(()=>{ne&&lt(ne,d,h),V&&Ut(h,null,d,"unmounted")},g)},La=h=>{const{type:d,el:g,anchor:v,transition:y}=h;if(d===Oe){gf(g,v);return}if(d===ir){he(h);return}const T=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:I,delayLeave:_}=y,C=()=>I(g,T);_?_(h.el,T,C):C()}else T()},gf=(h,d)=>{let g;for(;h!==d;)g=p(h),r(h),h=g;r(d)},mf=(h,d,g)=>{const{bum:v,scope:y,update:T,subTree:I,um:_}=h;v&&pi(v),y.stop(),T&&(T.active=!1,At(I,h,d,g)),_&&qe(_,d),qe(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},vt=(h,d,g,v=!1,y=!1,T=0)=>{for(let I=T;I<h.length;I++)At(h[I],d,g,v,y)},Hs=h=>h.shapeFlag&6?Hs(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),Pa=(h,d,g)=>{h==null?d._vnode&&At(d._vnode,null,null,!0):S(d._vnode||null,h,d,null,null,null,g),Wa(),jl(),d._vnode=h},hn={p:S,um:At,m:un,r:La,mt:li,mc:ee,pc:yt,pbc:Ee,n:Hs,o:t};let hi,fi;return e&&([hi,fi]=e(hn)),{render:Pa,hydrate:hi,createApp:Zd(Pa,hi)}}function $t({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ho(t,e,n=!1){const s=t.children,r=e.children;if(B(s)&&B(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=xt(r[i]),a.el=o.el),n||Ho(o,a))}}function np(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const sp=t=>t.__isTeleport,es=t=>t&&(t.disabled||t.disabled===""),rc=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Gi=(t,e)=>{const n=t&&t.to;return Te(n)?e?e(n):null:n},rp={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,l){const{mc:u,pc:f,pbc:p,o:{insert:m,querySelector:b,createText:N,createComment:S}}=l,L=es(e.props);let{shapeFlag:ae,children:te,dynamicChildren:J}=e;if(t==null){const he=e.el=N(""),Ue=e.anchor=N("");m(he,n,s),m(Ue,n,s);const we=e.target=Gi(e.props,b),U=e.targetAnchor=N("");we&&(m(U,we),o=o||rc(we));const ee=(ce,Ee)=>{ae&16&&u(te,ce,Ee,r,i,o,a,c)};L?ee(n,Ue):we&&ee(we,U)}else{e.el=t.el;const he=e.anchor=t.anchor,Ue=e.target=t.target,we=e.targetAnchor=t.targetAnchor,U=es(t.props),ee=U?n:Ue,ce=U?he:we;if(o=o||rc(Ue),J?(p(t.dynamicChildren,J,ee,r,i,o,a),Ho(t,e,!0)):c||f(t,e,ee,ce,r,i,o,a,!1),L)U||Qs(e,n,he,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Ee=e.target=Gi(e.props,b);Ee&&Qs(e,Ee,null,l,0)}else U&&Qs(e,Ue,we,l,1)}},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:f,props:p}=t;if(f&&i(u),(o||!es(p))&&(i(l),a&16))for(let m=0;m<c.length;m++){const b=c[m];r(b,e,n,!0,!!b.dynamicChildren)}},move:Qs,hydrate:ip};function Qs(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,f=i===2;if(f&&s(o,e,n),(!f||es(u))&&c&16)for(let p=0;p<l.length;p++)r(l[p],e,n,2);f&&s(a,e,n)}function ip(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=Gi(e.props,c);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(es(e.props))e.anchor=l(o(t),e,a(t),n,s,r,i),e.targetAnchor=f;else{e.anchor=o(t);let p=f;for(;p;)if(p=o(p),p&&p.nodeType===8&&p.data==="teleport anchor"){e.targetAnchor=p,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(f,e,u,n,s,r,i)}}return e.anchor&&o(e.anchor)}const op=rp,Oe=Symbol(void 0),qo=Symbol(void 0),nt=Symbol(void 0),ir=Symbol(void 0),ts=[];let ot=null;function pe(t=!1){ts.push(ot=t?null:[])}function ap(){ts.pop(),ot=ts[ts.length-1]||null}let fs=1;function ic(t){fs+=t}function cu(t){return t.dynamicChildren=fs>0?ot||vn:null,ap(),fs>0&&ot&&ot.push(t),t}function De(t,e,n,s,r,i){return cu(H(t,e,n,s,r,i,!0))}function ds(t,e,n,s,r){return cu(Ne(t,e,n,s,r,!0))}function lu(t){return t?t.__v_isVNode===!0:!1}function Kt(t,e){return t.type===e.type&&t.key===e.key}const Vr="__vInternal",uu=({key:t})=>t!=null?t:null,or=({ref:t,ref_key:e,ref_for:n})=>t!=null?Te(t)||Pe(t)||$(t)?{i:Ge,r:t,k:e,f:!!n}:t:null;function H(t,e=null,n=null,s=0,r=null,i=t===Oe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&uu(e),ref:e&&or(e),scopeId:Lr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(zo(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Te(n)?8:16),fs>0&&!o&&ot&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ot.push(c),c}const Ne=cp;function cp(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Bd)&&(t=nt),lu(t)){const a=Rt(t,e,!0);return n&&zo(a,n),fs>0&&!i&&ot&&(a.shapeFlag&6?ot[ot.indexOf(t)]=a:ot.push(a)),a.patchFlag|=-2,a}if(Ep(t)&&(t=t.__vccOpts),e){e=lp(e);let{class:a,style:c}=e;a&&!Te(a)&&(e.class=as(a)),ue(c)&&(Ol(c)&&!B(c)&&(c=Be({},c)),e.style=Io(c))}const o=Te(t)?1:Td(t)?128:sp(t)?64:ue(t)?4:$(t)?2:0;return H(t,e,n,s,r,o,i,!0)}function lp(t){return t?Ol(t)||Vr in t?Be({},t):t:null}function Rt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?hp(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&uu(a),ref:e&&e.ref?n&&r?B(r)?r.concat(or(e)):[r,or(e)]:or(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Oe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rt(t.ssContent),ssFallback:t.ssFallback&&Rt(t.ssFallback),el:t.el,anchor:t.anchor}}function Ko(t=" ",e=0){return Ne(qo,null,t,e)}function up(t,e){const n=Ne(ir,null,t);return n.staticCount=e,n}function Xt(t="",e=!1){return e?(pe(),ds(nt,null,t)):Ne(nt,null,t)}function ht(t){return t==null||typeof t=="boolean"?Ne(nt):B(t)?Ne(Oe,null,t.slice()):typeof t=="object"?xt(t):Ne(qo,null,String(t))}function xt(t){return t.el===null||t.memo?t:Rt(t)}function zo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),zo(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Vr in e)?e._ctx=Ge:r===3&&Ge&&(Ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Ge},n=32):(e=String(e),s&64?(n=16,e=[Ko(e)]):n=8);t.children=e,t.shapeFlag|=n}function hp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=as([e.class,s.class]));else if(r==="style")e.style=Io([e.style,s.style]);else if(Dr(r)){const i=e[r],o=s[r];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function lt(t,e,n,s=null){tt(t,e,7,[n,s])}const fp=au();let dp=0;function pp(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||fp,i={uid:dp++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:su(s,r),emitsOptions:ql(s,r),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gd.bind(null,i),t.ce&&t.ce(i),i}let xe=null;const gp=()=>xe||Ge,Dn=t=>{xe=t,t.scope.on()},Jt=()=>{xe&&xe.scope.off(),xe=null};function hu(t){return t.vnode.shapeFlag&4}let ps=!1;function mp(t,e=!1){ps=e;const{props:n,children:s}=t.vnode,r=hu(t);Gd(t,n,r,e),Yd(t,s);const i=r?yp(t,e):void 0;return ps=!1,i}function yp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ll(new Proxy(t.ctx,$d));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?wp(t):null;Dn(t),Fn();const i=Nt(s,t,0,[t.props,r]);if(Vn(),Jt(),wl(i)){if(i.then(Jt,Jt),e)return i.then(o=>{oc(t,o,e)}).catch(o=>{Rr(o,t,0)});t.asyncDep=i}else oc(t,i,e)}else fu(t,e)}function oc(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=Vl(e)),fu(t,n)}let ac;function fu(t,e,n){const s=t.type;if(!t.render){if(!e&&ac&&!s.render){const r=s.template||$o(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Be(Be({isCustomElement:i,delimiters:a},o),c);s.render=ac(r,l)}}t.render=s.render||at}Dn(t),Fn(),jd(t),Vn(),Jt()}function vp(t){return new Proxy(t.attrs,{get(e,n){return Xe(t,"get","$attrs"),e[n]}})}function wp(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=vp(t))},slots:t.slots,emit:t.emit,expose:e}}function Go(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vl(Ll(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in dr)return dr[n](t)}}))}function Ep(t){return $(t)&&"__vccOpts"in t}const gs=(t,e)=>cd(t,e,ps),_p="3.2.39",Tp="http://www.w3.org/2000/svg",zt=typeof document<"u"?document:null,cc=zt&&zt.createElement("template"),bp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?zt.createElementNS(Tp,t):zt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>zt.createTextNode(t),createComment:t=>zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{cc.innerHTML=s?`<svg>${t}</svg>`:t;const a=cc.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Cp(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ip(t,e,n){const s=t.style,r=Te(n);if(n&&!r){for(const i in n)Wi(s,i,n[i]);if(e&&!Te(e))for(const i in e)n[i]==null&&Wi(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const lc=/\s*!important$/;function Wi(t,e,n){if(B(n))n.forEach(s=>Wi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ap(t,e);lc.test(n)?t.setProperty(Pn(s),n.replace(lc,""),"important"):t[s]=n}}const uc=["Webkit","Moz","ms"],wi={};function Ap(t,e){const n=wi[e];if(n)return n;let s=An(e);if(s!=="filter"&&s in t)return wi[e]=s;s=Tl(s);for(let r=0;r<uc.length;r++){const i=uc[r]+s;if(i in t)return wi[e]=i}return e}const hc="http://www.w3.org/1999/xlink";function Sp(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hc,e.slice(6,e.length)):t.setAttributeNS(hc,e,n);else{const i=vf(e);n==null||i&&!ml(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function xp(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ml(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[du,Dp]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Qi=0;const Np=Promise.resolve(),kp=()=>{Qi=0},Mp=()=>Qi||(Np.then(kp),Qi=du());function Rp(t,e,n,s){t.addEventListener(e,n,s)}function Op(t,e,n,s){t.removeEventListener(e,n,s)}function Lp(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Pp(e);if(s){const l=i[e]=Fp(s,r);Rp(t,a,l,c)}else o&&(Op(t,a,o,c),i[e]=void 0)}}const fc=/(?:Once|Passive|Capture)$/;function Pp(t){let e;if(fc.test(t)){e={};let s;for(;s=t.match(fc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pn(t.slice(2)),e]}function Fp(t,e){const n=s=>{const r=s.timeStamp||du();(Dp||r>=n.attached-1)&&tt(Vp(s,n.value),e,5,[s])};return n.value=t,n.attached=Mp(),n}function Vp(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const dc=/^on[a-z]/,Bp=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Cp(t,s,r):e==="style"?Ip(t,n,s):Dr(e)?Ao(e)||Lp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Up(t,e,s,r))?xp(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Sp(t,e,s,r))};function Up(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&dc.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||dc.test(e)&&Te(n)?!1:e in t}const $p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};xd.props;const jp=Be({patchProp:Bp},bp);let pc;function Hp(){return pc||(pc=ep(jp))}const qp=(...t)=>{const e=Hp().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Kp(s);if(!r)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Kp(t){return Te(t)?document.querySelector(t):t}/**
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
 */const pu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},zp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),s.push(n[u],n[f],n[p],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw Error();const p=i<<2|a>>4;if(s.push(p),l!==64){const m=a<<4&240|l>>2;if(s.push(m),f!==64){const b=l<<6&192|f;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Wp=function(t){const e=pu(t);return Gp.encodeByteArray(e,!0)},gu=function(t){return Wp(t).replace(/\./g,"")};/**
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
 */class Qp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}function Yp(){return typeof indexedDB=="object"}function Xp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Jp="FirebaseError";class Bn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Jp,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mu.prototype.create)}}class mu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Zp(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Bn(r,a,s)}}function Zp(t,e){return t.replace(eg,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const eg=/\{\$([^}]+)}/g;function Yi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(gc(i)&&gc(o)){if(!Yi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function gc(t){return t!==null&&typeof t=="object"}/**
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
 */function tg(t){return t&&t._delegate?t._delegate:t}class ms{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ht="[DEFAULT]";/**
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
 */class ng{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Qp;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rg(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sg(t){return t===Ht?void 0:t}function rg(t){return t.instantiationMode==="EAGER"}/**
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
 */class ig{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ng(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const og={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},ag=X.INFO,cg={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},lg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=cg[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yu{constructor(e){this.name=e,this._logLevel=ag,this._logHandler=lg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?og[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const ug=(t,e)=>e.some(n=>t instanceof n);let mc,yc;function hg(){return mc||(mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fg(){return yc||(yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vu=new WeakMap,Xi=new WeakMap,wu=new WeakMap,Ei=new WeakMap,Wo=new WeakMap;function dg(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(kt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vu.set(n,t)}).catch(()=>{}),Wo.set(e,t),e}function pg(t){if(Xi.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xi.set(t,e)}let Ji={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gg(t){Ji=t(Ji)}function mg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_i(this),e,...n);return wu.set(s,e.sort?e.sort():[e]),kt(s)}:fg().includes(t)?function(...e){return t.apply(_i(this),e),kt(vu.get(this))}:function(...e){return kt(t.apply(_i(this),e))}}function yg(t){return typeof t=="function"?mg(t):(t instanceof IDBTransaction&&pg(t),ug(t,hg())?new Proxy(t,Ji):t)}function kt(t){if(t instanceof IDBRequest)return dg(t);if(Ei.has(t))return Ei.get(t);const e=yg(t);return e!==t&&(Ei.set(t,e),Wo.set(e,t)),e}const _i=t=>Wo.get(t);function vg(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=kt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(kt(o.result),c.oldVersion,c.newVersion,kt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const wg=["get","getKey","getAll","getAllKeys","count"],Eg=["put","add","delete","clear"],Ti=new Map;function vc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ti.get(e))return Ti.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Eg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||wg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ti.set(e,i),i}gg(t=>({...t,get:(e,n,s)=>vc(e,n)||t.get(e,n,s),has:(e,n)=>!!vc(e,n)||t.has(e,n)}));/**
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
 */class _g{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Tg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zi="@firebase/app",wc="0.7.33";/**
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
 */const rn=new yu("@firebase/app"),bg="@firebase/app-compat",Cg="@firebase/analytics-compat",Ig="@firebase/analytics",Ag="@firebase/app-check-compat",Sg="@firebase/app-check",xg="@firebase/auth",Dg="@firebase/auth-compat",Ng="@firebase/database",kg="@firebase/database-compat",Mg="@firebase/functions",Rg="@firebase/functions-compat",Og="@firebase/installations",Lg="@firebase/installations-compat",Pg="@firebase/messaging",Fg="@firebase/messaging-compat",Vg="@firebase/performance",Bg="@firebase/performance-compat",Ug="@firebase/remote-config",$g="@firebase/remote-config-compat",jg="@firebase/storage",Hg="@firebase/storage-compat",qg="@firebase/firestore",Kg="@firebase/firestore-compat",zg="firebase",Gg="9.10.0";/**
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
 */const Eu="[DEFAULT]",Wg={[Zi]:"fire-core",[bg]:"fire-core-compat",[Ig]:"fire-analytics",[Cg]:"fire-analytics-compat",[Sg]:"fire-app-check",[Ag]:"fire-app-check-compat",[xg]:"fire-auth",[Dg]:"fire-auth-compat",[Ng]:"fire-rtdb",[kg]:"fire-rtdb-compat",[Mg]:"fire-fn",[Rg]:"fire-fn-compat",[Og]:"fire-iid",[Lg]:"fire-iid-compat",[Pg]:"fire-fcm",[Fg]:"fire-fcm-compat",[Vg]:"fire-perf",[Bg]:"fire-perf-compat",[Ug]:"fire-rc",[$g]:"fire-rc-compat",[jg]:"fire-gcs",[Hg]:"fire-gcs-compat",[qg]:"fire-fst",[Kg]:"fire-fst-compat","fire-js":"fire-js",[zg]:"fire-js-all"};/**
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
 */const gr=new Map,eo=new Map;function Qg(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mr(t){const e=t.name;if(eo.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;eo.set(e,t);for(const n of gr.values())Qg(n,t);return!0}function Yg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Xg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},on=new mu("app","Firebase",Xg);/**
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
 */class Jg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ms("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
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
 */const Zg=Gg;function em(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Eu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});const r=gr.get(s);if(r){if(Yi(t,r.options)&&Yi(n,r.config))return r;throw on.create("duplicate-app",{appName:s})}const i=new ig(s);for(const a of eo.values())i.addComponent(a);const o=new Jg(t,n,i);return gr.set(s,o),o}function tm(t=Eu){const e=gr.get(t);if(!e)throw on.create("no-app",{appName:t});return e}function Tn(t,e,n){var s;let r=(s=Wg[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(a.join(" "));return}mr(new ms(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const nm="firebase-heartbeat-database",sm=1,ys="firebase-heartbeat-store";let bi=null;function _u(){return bi||(bi=vg(nm,sm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ys)}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),bi}async function rm(t){var e;try{return(await _u()).transaction(ys).objectStore(ys).get(Tu(t))}catch(n){if(n instanceof Bn)rn.warn(n.message);else{const s=on.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});rn.warn(s.message)}}}async function Ec(t,e){var n;try{const r=(await _u()).transaction(ys,"readwrite");return await r.objectStore(ys).put(e,Tu(t)),r.done}catch(s){if(s instanceof Bn)rn.warn(s.message);else{const r=on.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});rn.warn(r.message)}}}function Tu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const im=1024,om=30*24*60*60*1e3;class am{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_c();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=om}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_c(),{heartbeatsToSend:n,unsentEntries:s}=cm(this._heartbeatsCache.heartbeats),r=gu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function _c(){return new Date().toISOString().substring(0,10)}function cm(t,e=im){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Tc(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Tc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class lm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yp()?Xp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Tc(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function um(t){mr(new ms("platform-logger",e=>new _g(e),"PRIVATE")),mr(new ms("heartbeat",e=>new am(e),"PRIVATE")),Tn(Zi,wc,t),Tn(Zi,wc,"esm2017"),Tn("fire-js","")}um("");var hm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Qo=Qo||{},F=hm||self;function yr(){}function Br(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ds(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function fm(t){return Object.prototype.hasOwnProperty.call(t,Ci)&&t[Ci]||(t[Ci]=++dm)}var Ci="closure_uid_"+(1e9*Math.random()>>>0),dm=0;function pm(t,e,n){return t.call.apply(t.bind,arguments)}function gm(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Fe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Fe=pm:Fe=gm,Fe.apply(null,arguments)}function Ys(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Re(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ft(){this.s=this.s,this.o=this.o}var mm=0;Ft.prototype.s=!1;Ft.prototype.na=function(){!this.s&&(this.s=!0,this.M(),mm!=0)&&fm(this)};Ft.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function bc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Br(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ve(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var ym=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",yr,e),F.removeEventListener("test",yr,e)}catch{}return t}();function vr(t){return/^[\s\xa0]*$/.test(t)}var Cc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ii(t,e){return t<e?-1:t>e?1:0}function Ur(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function dt(t){return Ur().indexOf(t)!=-1}function Xo(t){return Xo[" "](t),t}Xo[" "]=yr;function vm(t){var e=_m;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var wm=dt("Opera"),Nn=dt("Trident")||dt("MSIE"),Cu=dt("Edge"),to=Cu||Nn,Iu=dt("Gecko")&&!(Ur().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),Em=Ur().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function Au(){var t=F.document;return t?t.documentMode:void 0}var wr;e:{var Ai="",Si=function(){var t=Ur();if(Iu)return/rv:([^\);]+)(\)|;)/.exec(t);if(Cu)return/Edge\/([\d\.]+)/.exec(t);if(Nn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Em)return/WebKit\/(\S+)/.exec(t);if(wm)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Si&&(Ai=Si?Si[1]:""),Nn){var xi=Au();if(xi!=null&&xi>parseFloat(Ai)){wr=String(xi);break e}}wr=Ai}var _m={};function Tm(){return vm(function(){let t=0;const e=Cc(String(wr)).split("."),n=Cc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ii(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ii(r[2].length==0,i[2].length==0)||Ii(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var no;if(F.document&&Nn){var Ic=Au();no=Ic||parseInt(wr,10)||void 0}else no=void 0;var bm=no;function vs(t,e){if(Ve.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Iu){e:{try{Xo(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Cm[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vs.X.h.call(this)}}Re(vs,Ve);var Cm={2:"touch",3:"pen",4:"mouse"};vs.prototype.h=function(){vs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ns="closure_listenable_"+(1e6*Math.random()|0),Im=0;function Am(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Im,this.ba=this.ea=!1}function $r(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Jo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Su(t){const e={};for(const n in t)e[n]=t[n];return e}const Ac="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xu(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ac.length;i++)n=Ac[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function jr(t){this.src=t,this.g={},this.h=0}jr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ro(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Am(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function so(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=bu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&($r(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ro(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Zo="closure_lm_"+(1e6*Math.random()|0),Di={};function Du(t,e,n,s,r){if(s&&s.once)return ku(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Du(t,e[i],n,s,r);return null}return n=na(n),t&&t[Ns]?t.N(e,n,Ds(s)?!!s.capture:!!s,r):Nu(t,e,n,!1,s,r)}function Nu(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ds(r)?!!r.capture:!!r,a=ta(t);if(a||(t[Zo]=a=new jr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Sm(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ym||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Ru(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Sm(){function t(n){return e.call(t.src,t.listener,n)}const e=xm;return t}function ku(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ku(t,e[i],n,s,r);return null}return n=na(n),t&&t[Ns]?t.O(e,n,Ds(s)?!!s.capture:!!s,r):Nu(t,e,n,!0,s,r)}function Mu(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Mu(t,e[i],n,s,r);else s=Ds(s)?!!s.capture:!!s,n=na(n),t&&t[Ns]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ro(i,n,s,r),-1<n&&($r(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ta(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ro(e,n,s,r)),(n=-1<t?e[t]:null)&&ea(n))}function ea(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ns])so(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ru(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ta(e))?(so(n,t),n.h==0&&(n.src=null,e[Zo]=null)):$r(t)}}}function Ru(t){return t in Di?Di[t]:Di[t]="on"+t}function xm(t,e){if(t.ba)t=!0;else{e=new vs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ea(t),t=n.call(s,e)}return t}function ta(t){return t=t[Zo],t instanceof jr?t:null}var Ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function na(t){return typeof t=="function"?t:(t[Ni]||(t[Ni]=function(e){return t.handleEvent(e)}),t[Ni])}function Ce(){Ft.call(this),this.i=new jr(this),this.P=this,this.I=null}Re(Ce,Ft);Ce.prototype[Ns]=!0;Ce.prototype.removeEventListener=function(t,e,n,s){Mu(this,t,e,n,s)};function ke(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ve(e,t);else if(e instanceof Ve)e.target=e.target||t;else{var r=e;e=new Ve(s,t),xu(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Xs(o,s,!0,e)&&r}if(o=e.g=t,r=Xs(o,s,!0,e)&&r,r=Xs(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Xs(o,s,!1,e)&&r}Ce.prototype.M=function(){if(Ce.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)$r(n[s]);delete t.g[e],t.h--}}this.I=null};Ce.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ce.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Xs(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&so(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var sa=F.JSON.stringify;function Dm(){var t=Pu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nm{constructor(){this.h=this.g=null}add(e,n){const s=Ou.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ou=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new km,t=>t.reset());class km{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Mm(t){F.setTimeout(()=>{throw t},0)}function Lu(t,e){io||Rm(),oo||(io(),oo=!0),Pu.add(t,e)}var io;function Rm(){var t=F.Promise.resolve(void 0);io=function(){t.then(Om)}}var oo=!1,Pu=new Nm;function Om(){for(var t;t=Dm();){try{t.h.call(t.g)}catch(n){Mm(n)}var e=Ou;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oo=!1}function Hr(t,e){Ce.call(this),this.h=t||1,this.g=e||F,this.j=Fe(this.kb,this),this.l=Date.now()}Re(Hr,Ce);D=Hr.prototype;D.ca=!1;D.R=null;D.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ke(this,"tick"),this.ca&&(ra(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ra(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){Hr.X.M.call(this),ra(this),delete this.g};function ia(t,e,n){if(typeof t=="function")n&&(t=Fe(t,n));else if(t&&typeof t.handleEvent=="function")t=Fe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function Fu(t){t.g=ia(()=>{t.g=null,t.i&&(t.i=!1,Fu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Lm extends Ft{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fu(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ws(t){Ft.call(this),this.h=t,this.g={}}Re(ws,Ft);var Sc=[];function Vu(t,e,n,s){Array.isArray(n)||(n&&(Sc[0]=n.toString()),n=Sc);for(var r=0;r<n.length;r++){var i=Du(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Bu(t){Jo(t.g,function(e,n){this.g.hasOwnProperty(n)&&ea(e)},t),t.g={}}ws.prototype.M=function(){ws.X.M.call(this),Bu(this)};ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qr(){this.g=!0}qr.prototype.Aa=function(){this.g=!1};function Pm(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Fm(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function gn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Bm(t,n)+(s?" "+s:"")})}function Vm(t,e){t.info(function(){return"TIMEOUT: "+e})}qr.prototype.info=function(){};function Bm(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return sa(n)}catch{return e}}var ln={},xc=null;function Kr(){return xc=xc||new Ce}ln.Oa="serverreachability";function Uu(t){Ve.call(this,ln.Oa,t)}Re(Uu,Ve);function Es(t){const e=Kr();ke(e,new Uu(e))}ln.STAT_EVENT="statevent";function $u(t,e){Ve.call(this,ln.STAT_EVENT,t),this.stat=e}Re($u,Ve);function je(t){const e=Kr();ke(e,new $u(e,t))}ln.Pa="timingevent";function ju(t,e){Ve.call(this,ln.Pa,t),this.size=e}Re(ju,Ve);function ks(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var zr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},Hu={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function oa(){}oa.prototype.h=null;function Dc(t){return t.h||(t.h=t.i())}function qu(){}var Ms={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function aa(){Ve.call(this,"d")}Re(aa,Ve);function ca(){Ve.call(this,"c")}Re(ca,Ve);var ao;function Gr(){}Re(Gr,oa);Gr.prototype.g=function(){return new XMLHttpRequest};Gr.prototype.i=function(){return{}};ao=new Gr;function Rs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ws(this),this.O=Um,t=to?125:void 0,this.T=new Hr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ku}function Ku(){this.i=null,this.g="",this.h=!1}var Um=45e3,co={},Er={};D=Rs.prototype;D.setTimeout=function(t){this.O=t};function lo(t,e,n){t.K=1,t.v=Qr(Tt(e)),t.s=n,t.P=!0,zu(t,null)}function zu(t,e){t.F=Date.now(),Os(t),t.A=Tt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),eh(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Ku,t.g=_h(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Lm(Fe(t.Ka,t,t.g),t.N)),Vu(t.S,t.g,"readystatechange",t.hb),e=t.H?Su(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Es(),Pm(t.j,t.u,t.A,t.m,t.U,t.s)}D.hb=function(t){t=t.target;const e=this.L;e&&Et(t)==3?e.l():this.Ka(t)};D.Ka=function(t){try{if(t==this.g)e:{const u=Et(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||to||this.g&&(this.h.h||this.g.fa()||Rc(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?Es(3):Es(2)),Wr(this);var n=this.g.aa();this.Y=n;t:if(Gu(this)){var s=Rc(this.g);t="";var r=s.length,i=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),ns(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Fm(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vr(a)){var l=a;break t}}l=null}if(n=l)gn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,uo(this,n);else{this.i=!1,this.o=3,je(12),Gt(this),ns(this);break e}}this.P?(Wu(this,u,o),to&&this.i&&u==3&&(Vu(this.S,this.T,"tick",this.gb),this.T.start())):(gn(this.j,this.m,o,null),uo(this,o)),u==4&&Gt(this),this.i&&!this.I&&(u==4?yh(this.l,this):(this.i=!1,Os(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,je(12)):(this.o=0,je(13)),Gt(this),ns(this)}}}catch{}finally{}};function Gu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Wu(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=$m(t,n),r==Er){e==4&&(t.o=4,je(14),s=!1),gn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==co){t.o=4,je(15),gn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else gn(t.j,t.m,r,null),uo(t,r);Gu(t)&&r!=Er&&r!=co&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,je(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ga(e),e.K=!0,je(11))):(gn(t.j,t.m,n,"[Invalid Chunked Response]"),Gt(t),ns(t))}D.gb=function(){if(this.g){var t=Et(this.g),e=this.g.fa();this.C<e.length&&(Wr(this),Wu(this,t,e),this.i&&t!=4&&Os(this))}};function $m(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Er:(n=Number(e.substring(n,s)),isNaN(n)?co:(s+=1,s+n>e.length?Er:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,Gt(this)};function Os(t){t.V=Date.now()+t.O,Qu(t,t.O)}function Qu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ks(Fe(t.fb,t),e)}function Wr(t){t.B&&(F.clearTimeout(t.B),t.B=null)}D.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Vm(this.j,this.A),this.K!=2&&(Es(),je(17)),Gt(this),this.o=2,ns(this)):Qu(this,this.V-t)};function ns(t){t.l.G==0||t.I||yh(t.l,t)}function Gt(t){Wr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ra(t.T),Bu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function uo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ho(n.h,t))){if(!t.J&&ho(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)br(n),Jr(n);else break e;pa(n),je(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=ks(Fe(n.bb,n),6e3));if(1>=sh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Wt(n,11)}else if((t.J||n.g==t)&&br(n),!vr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const b=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var i=s.h;i.g||b.indexOf("spdy")==-1&&b.indexOf("quic")==-1&&b.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(la(i,i.h),i.h=null))}if(s.D){const N=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.za=N,le(s.F,s.D,N))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Eh(s,s.H?s.ka:null,s.V),o.J){rh(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Wr(a),Os(a)),s.g=o}else gh(s);0<n.i.length&&Zr(n)}else l[0]!="stop"&&l[0]!="close"||Wt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Wt(n,7):da(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Es(4)}catch{}}function jm(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Br(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Hm(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Br(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Yu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Br(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Hm(t),s=jm(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qm(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Zt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Zt){this.h=e!==void 0?e:t.h,_r(this,t.j),this.s=t.s,this.g=t.g,Tr(this,t.m),this.l=t.l,e=t.i;var n=new _s;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Nc(this,n),this.o=t.o}else t&&(n=String(t).match(Xu))?(this.h=!!e,_r(this,n[1]||"",!0),this.s=Yn(n[2]||""),this.g=Yn(n[3]||"",!0),Tr(this,n[4]),this.l=Yn(n[5]||"",!0),Nc(this,n[6]||"",!0),this.o=Yn(n[7]||"")):(this.h=!!e,this.i=new _s(null,this.h))}Zt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xn(e,kc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xn(e,kc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xn(n,n.charAt(0)=="/"?Gm:zm,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xn(n,Qm)),t.join("")};function Tt(t){return new Zt(t)}function _r(t,e,n){t.j=n?Yn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Tr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Nc(t,e,n){e instanceof _s?(t.i=e,Ym(t.i,t.h)):(n||(e=Xn(e,Wm)),t.i=new _s(e,t.h))}function le(t,e,n){t.i.set(e,n)}function Qr(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Km),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Km(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kc=/[#\/\?@]/g,zm=/[#\?:]/g,Gm=/[#\?]/g,Wm=/[#\?@]/g,Qm=/#/g;function _s(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vt(t){t.g||(t.g=new Map,t.h=0,t.i&&qm(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=_s.prototype;D.add=function(t,e){Vt(this),this.i=null,t=Un(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ju(t,e){Vt(t),e=Un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Zu(t,e){return Vt(t),e=Un(t,e),t.g.has(e)}D.forEach=function(t,e){Vt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};D.oa=function(){Vt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};D.W=function(t){Vt(this);let e=[];if(typeof t=="string")Zu(this,t)&&(e=e.concat(this.g.get(Un(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Vt(this),this.i=null,t=Un(this,t),Zu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function eh(t,e,n){Ju(t,e),0<n.length&&(t.i=null,t.g.set(Un(t,e),Yo(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ym(t,e){e&&!t.j&&(Vt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ju(this,s),eh(this,r,n))},t)),t.j=e}var Xm=class{constructor(t,e){this.h=t,this.g=e}};function th(t){this.l=t||Jm,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ga&&F.g.Ga()&&F.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Jm=10;function nh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sh(t){return t.h?1:t.g?t.g.size:0}function ho(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function la(t,e){t.g?t.g.add(e):t.h=e}function rh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}th.prototype.cancel=function(){if(this.i=ih(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ih(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Yo(t.i)}function ua(){}ua.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};ua.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function Zm(){this.g=new ua}function ey(t,e,n){const s=n||"";try{Yu(t,function(r,i){let o=r;Ds(r)&&(o=sa(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ty(t,e){const n=new qr;if(F.Image){const s=new Image;s.onload=Ys(Js,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ys(Js,n,s,"TestLoadImage: error",!1,e),s.onabort=Ys(Js,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ys(Js,n,s,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Js(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ls(t){this.l=t.$b||null,this.j=t.ib||!1}Re(Ls,oa);Ls.prototype.g=function(){return new Yr(this.l,this.j)};Ls.prototype.i=function(t){return function(){return t}}({});function Yr(t,e){Ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ha,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Re(Yr,Ce);var ha=0;D=Yr.prototype;D.open=function(t,e){if(this.readyState!=ha)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ts(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||F).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=ha};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oh(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function oh(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ps(this):Ts(this),this.readyState==3&&oh(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,Ps(this))};D.Ta=function(t){this.g&&(this.response=t,Ps(this))};D.ga=function(){this.g&&Ps(this)};function Ps(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ts(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ts(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Yr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ny=F.JSON.parse;function ve(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ah,this.K=this.L=!1}Re(ve,Ce);var ah="",sy=/^https?$/i,ry=["POST","PUT"];D=ve.prototype;D.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ao.g(),this.C=this.u?Dc(this.u):Dc(ao),this.g.onreadystatechange=Fe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Mc(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=F.FormData&&t instanceof F.FormData,!(0<=bu(ry,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{uh(this),0<this.B&&((this.K=iy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fe(this.qa,this)):this.A=ia(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Mc(this,i)}};function iy(t){return Nn&&Tm()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof Qo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function Mc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ch(t),Xr(t)}function ch(t){t.D||(t.D=!0,ke(t,"complete"),ke(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ke(this,"complete"),ke(this,"abort"),Xr(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xr(this,!0)),ve.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?lh(this):this.eb())};D.eb=function(){lh(this)};function lh(t){if(t.h&&typeof Qo<"u"&&(!t.C[1]||Et(t)!=4||t.aa()!=2)){if(t.v&&Et(t)==4)ia(t.Ha,0,t);else if(ke(t,"readystatechange"),Et(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Xu)[1]||null;if(!r&&F.self&&F.self.location){var i=F.self.location.protocol;r=i.substr(0,i.length-1)}s=!sy.test(r?r.toLowerCase():"")}n=s}if(n)ke(t,"complete"),ke(t,"success");else{t.m=6;try{var o=2<Et(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ch(t)}}finally{Xr(t)}}}}function Xr(t,e){if(t.g){uh(t);const n=t.g,s=t.C[0]?yr:null;t.g=null,t.C=null,e||ke(t,"ready");try{n.onreadystatechange=s}catch{}}}function uh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function Et(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ny(e)}};function Rc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ah:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function hh(t){let e="";return Jo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function fa(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=hh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):le(t,e,n))}function Wn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fh(t){this.Ca=0,this.i=[],this.j=new qr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Wn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Wn("baseRetryDelayMs",5e3,t),this.ab=Wn("retryDelaySeedMs",1e4,t),this.Za=Wn("forwardChannelMaxRetries",2,t),this.ta=Wn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new th(t&&t.concurrentRequestLimit),this.Fa=new Zm,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=fh.prototype;D.ma=8;D.G=1;function da(t){if(dh(t),t.G==3){var e=t.U++,n=Tt(t.F);le(n,"SID",t.I),le(n,"RID",e),le(n,"TYPE","terminate"),Fs(t,n),e=new Rs(t,t.j,e,void 0),e.K=2,e.v=Qr(Tt(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(e.v.toString(),"")),!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=_h(e.l,null),e.g.da(e.v)),e.F=Date.now(),Os(e)}wh(t)}function Jr(t){t.g&&(ga(t),t.g.cancel(),t.g=null)}function dh(t){Jr(t),t.u&&(F.clearTimeout(t.u),t.u=null),br(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Zr(t){nh(t.h)||t.m||(t.m=!0,Lu(t.Ja,t),t.C=0)}function oy(t,e){return sh(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=ks(Fe(t.Ja,t,e),vh(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Rs(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Su(i),xu(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ph(this,r,e),n=Tt(this.F),le(n,"RID",t),le(n,"CVER",22),this.D&&le(n,"X-HTTP-Session-Id",this.D),Fs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(hh(i)))+"&"+e:this.o&&fa(n,this.o,i)),la(this.h,r),this.Xa&&le(n,"TYPE","init"),this.O?(le(n,"$req",e),le(n,"SID","null"),r.Z=!0,lo(r,n,null)):lo(r,n,e),this.G=2}}else this.G==3&&(t?Oc(this,t):this.i.length==0||nh(this.h)||Oc(this))};function Oc(t,e){var n;e?n=e.m:n=t.U++;const s=Tt(t.F);le(s,"SID",t.I),le(s,"RID",n),le(s,"AID",t.T),Fs(t,s),t.o&&t.s&&fa(s,t.o,t.s),n=new Rs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ph(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),la(t.h,n),lo(n,s,e)}function Fs(t,e){t.ia&&Jo(t.ia,function(n,s){le(e,s,n)}),t.l&&Yu({},function(n,s){le(e,s,n)})}function ph(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Fe(t.l.Qa,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{ey(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function gh(t){t.g||t.u||(t.Z=1,Lu(t.Ia,t),t.A=0)}function pa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ks(Fe(t.Ia,t),vh(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,mh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ks(Fe(this.cb,this),t)}};D.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,je(10),Jr(this),mh(this))};function ga(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function mh(t){t.g=new Rs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Tt(t.sa);le(e,"RID","rpc"),le(e,"SID",t.I),le(e,"CI",t.L?"0":"1"),le(e,"AID",t.T),le(e,"TYPE","xmlhttp"),Fs(t,e),t.o&&t.s&&fa(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Qr(Tt(e)),n.s=null,n.P=!0,zu(n,t)}D.bb=function(){this.v!=null&&(this.v=null,Jr(this),pa(this),je(19))};function br(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function yh(t,e){var n=null;if(t.g==e){br(t),ga(t),t.g=null;var s=2}else if(ho(t.h,e))n=e.D,rh(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Kr(),ke(s,new ju(s,n)),Zr(t)}else gh(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&oy(t,e)||s==2&&pa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Wt(t,5);break;case 4:Wt(t,10);break;case 3:Wt(t,6);break;default:Wt(t,2)}}}function vh(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function Wt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Fe(t.jb,t);n||(n=new Zt("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||_r(n,"https"),Qr(n)),ty(n.toString(),s)}else je(2);t.G=0,t.l&&t.l.va(e),wh(t),dh(t)}D.jb=function(t){t?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))};function wh(t){if(t.G=0,t.la=[],t.l){const e=ih(t.h);(e.length!=0||t.i.length!=0)&&(bc(t.la,e),bc(t.la,t.i),t.h.i.length=0,Yo(t.i),t.i.length=0),t.l.ua()}}function Eh(t,e,n){var s=n instanceof Zt?Tt(n):new Zt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Tr(s,s.m);else{var r=F.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Zt(null,void 0);s&&_r(i,s),e&&(i.g=e),r&&Tr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&le(s,n,e),le(s,"VER",t.ma),Fs(t,s),s}function _h(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ve(new Ls({ib:!0})):new ve(t.ra),e.L=t.H,e}function Th(){}D=Th.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Qa=function(){};function Cr(){if(Nn&&!(10<=Number(bm)))throw Error("Environmental error: no available transport.")}Cr.prototype.g=function(t,e){return new Je(t,e)};function Je(t,e){Ce.call(this),this.g=new fh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!vr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $n(this)}Re(Je,Ce);Je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;je(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Eh(t,null,t.V),Zr(t)};Je.prototype.close=function(){da(this.g)};Je.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=sa(t),t=n);e.i.push(new Xm(e.$a++,t)),e.G==3&&Zr(e)};Je.prototype.M=function(){this.g.l=null,delete this.j,da(this.g),delete this.g,Je.X.M.call(this)};function bh(t){aa.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Re(bh,aa);function Ch(){ca.call(this),this.status=1}Re(Ch,ca);function $n(t){this.g=t}Re($n,Th);$n.prototype.xa=function(){ke(this.g,"a")};$n.prototype.wa=function(t){ke(this.g,new bh(t))};$n.prototype.va=function(t){ke(this.g,new Ch)};$n.prototype.ua=function(){ke(this.g,"b")};Cr.prototype.createWebChannel=Cr.prototype.g;Je.prototype.send=Je.prototype.u;Je.prototype.open=Je.prototype.m;Je.prototype.close=Je.prototype.close;zr.NO_ERROR=0;zr.TIMEOUT=8;zr.HTTP_ERROR=6;Hu.COMPLETE="complete";qu.EventType=Ms;Ms.OPEN="a";Ms.CLOSE="b";Ms.ERROR="c";Ms.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;ve.prototype.listenOnce=ve.prototype.O;ve.prototype.getLastError=ve.prototype.Na;ve.prototype.getLastErrorCode=ve.prototype.Ea;ve.prototype.getStatus=ve.prototype.aa;ve.prototype.getResponseJson=ve.prototype.Ra;ve.prototype.getResponseText=ve.prototype.fa;ve.prototype.send=ve.prototype.da;var ay=function(){return new Cr},cy=function(){return Kr()},ki=zr,ly=Hu,uy=ln,Lc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},hy=Ls,Zs=qu,fy=ve;const Pc="@firebase/firestore";/**
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
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
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
 */let jn="9.10.0";/**
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
 */const an=new yu("@firebase/firestore");function Fc(){return an.logLevel}function k(t,...e){if(an.logLevel<=X.DEBUG){const n=e.map(ma);an.debug(`Firestore (${jn}): ${t}`,...n)}}function bt(t,...e){if(an.logLevel<=X.ERROR){const n=e.map(ma);an.error(`Firestore (${jn}): ${t}`,...n)}}function Vc(t,...e){if(an.logLevel<=X.WARN){const n=e.map(ma);an.warn(`Firestore (${jn}): ${t}`,...n)}}function ma(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function j(t="Unexpected state"){const e=`FIRESTORE (${jn}) INTERNAL ASSERTION FAILED: `+t;throw bt(e),new Error(e)}function ye(t,e){t||j()}function Q(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class en{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class dy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class py{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class gy{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new en;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new en,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new en)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ye(typeof s.accessToken=="string"),new dy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new Ke(e)}}class my{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ye(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class yy{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new my(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wy{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.A=n.token,new vy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ey(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class _y{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Ey(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Z(t,e){return t<e?-1:t>e?1:0}function kn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Qe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Qe(0,0))}static max(){return new q(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class bs{constructor(e,n,s){n===void 0?n=0:n>e.length&&j(),s===void 0?s=e.length-n:s>e.length-n&&j(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return bs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends bs{construct(e,n,s){return new de(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new P(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new de(n)}static emptyPath(){return new de([])}}const Ty=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends bs{construct(e,n,s){return new ze(e,n,s)}static isValidIdentifier(e){return Ty.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new P(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new P(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new P(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new P(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(de.fromString(e))}static fromName(e){return new O(de.fromString(e).popFirst(5))}static empty(){return new O(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new de(e.slice()))}}function by(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=q.fromTimestamp(s===1e9?new Qe(n+1,0):new Qe(n,s));return new Ot(r,O.empty(),e)}function Cy(t){return new Ot(t.readTime,t.key,-1)}class Ot{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ot(q.min(),O.empty(),-1)}static max(){return new Ot(q.max(),O.empty(),-1)}}function Iy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ay="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ya(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==Ay)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,s)=>{n(e)})}static reject(e){return new E((n,s)=>{s(e)})}static waitFor(e){return new E((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=E.resolve(!1);for(const s of e)n=n.next(r=>r?E.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new E((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new E((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Vs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class va{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Bc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */va.at=-1;class Ie{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new er(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new er(this.root,e,this.comparator,!1)}getReverseIterator(){return new er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new er(this.root,e,this.comparator,!0)}}class er{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ae.RED,this.left=r!=null?r:Ae.EMPTY,this.right=i!=null?i:Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ae(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ae.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uc(this.data.getIterator())}getIteratorFrom(e){return new Uc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class Uc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tn{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new tn([])}unionWith(e){let n=new _e(ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return kn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Me(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Me(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const Dy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(t){if(ye(!!t),typeof t=="string"){let e=0;const n=Dy.exec(t);if(ye(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mn(t){return typeof t=="string"?Me.fromBase64String(t):Me.fromUint8Array(t)}/**
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
 */function Ih(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ah(t){const e=t.mapValue.fields.__previous_value__;return Ih(e)?Ah(e):e}function Cs(t){const e=Lt(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class Ny{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Is{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Is("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Is&&e.projectId===this.projectId&&e.database===this.database}}function ti(t){return t==null}function fo(t){return t===0&&1/t==-1/0}/**
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
 */const tr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ih(t)?4:ky(t)?9007199254740991:10:j()}function gt(t,e){if(t===e)return!0;const n=cn(t);if(n!==cn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Cs(t).isEqual(Cs(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Lt(s.timestampValue),o=Lt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Mn(s.bytesValue).isEqual(Mn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return me(s.geoPointValue.latitude)===me(r.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return me(s.integerValue)===me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=me(s.doubleValue),o=me(r.doubleValue);return i===o?fo(i)===fo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return kn(t.arrayValue.values||[],e.arrayValue.values||[],gt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Bc(i)!==Bc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!gt(i[a],o[a])))return!1;return!0}(t,e);default:return j()}}function As(t,e){return(t.values||[]).find(n=>gt(n,e))!==void 0}function Rn(t,e){if(t===e)return 0;const n=cn(t),s=cn(e);if(n!==s)return Z(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=me(r.integerValue||r.doubleValue),a=me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $c(t.timestampValue,e.timestampValue);case 4:return $c(Cs(t),Cs(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Mn(r),a=Mn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=Z(o[c],a[c]);if(l!==0)return l}return Z(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=Z(me(r.latitude),me(i.latitude));return o!==0?o:Z(me(r.longitude),me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Rn(o[c],a[c]);if(l)return l}return Z(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===tr.mapValue&&i===tr.mapValue)return 0;if(r===tr.mapValue)return 1;if(i===tr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=Z(a[u],l[u]);if(f!==0)return f;const p=Rn(o[a[u]],c[l[u]]);if(p!==0)return p}return Z(a.length,l.length)}(t.mapValue,e.mapValue);default:throw j()}}function $c(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=Lt(t),s=Lt(e),r=Z(n.seconds,s.seconds);return r!==0?r:Z(n.nanos,s.nanos)}function bn(t){return po(t)}function po(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Lt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=po(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${po(s.fields[a])}`;return i+"}"}(t.mapValue):j();var e,n}function go(t){return!!t&&"integerValue"in t}function wa(t){return!!t&&"arrayValue"in t}function jc(t){return!!t&&"nullValue"in t}function Hc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mi(t){return!!t&&"mapValue"in t}function ss(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ei(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ss(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ss(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ky(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Mi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ss(n)}setAll(e){let n=ze.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ss(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Mi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Mi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ei(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new pt(ss(this.value))}}/**
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
 */class Se{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Se(e,0,q.min(),q.min(),pt.empty(),0)}static newFoundDocument(e,n,s){return new Se(e,1,n,q.min(),s,0)}static newNoDocument(e,n){return new Se(e,2,n,q.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new Se(e,3,n,q.min(),pt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class My{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function qc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new My(t,e,n,s,r,i,o)}function Ea(t){const e=Q(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+bn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ti(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>bn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>bn(s)).join(",")),e.ht=n}return e.ht}function Ry(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${bn(s.value)}`;var s}).join(", ")}]`),ti(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>bn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>bn(n)).join(",")),`Target(${e})`}function _a(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!$y(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!gt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zc(t.startAt,e.startAt)&&zc(t.endAt,e.endAt)}function mo(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class We extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new Oy(e,n,s):n==="array-contains"?new Fy(e,s):n==="in"?new Vy(e,s):n==="not-in"?new By(e,s):n==="array-contains-any"?new Uy(e,s):new We(e,n,s)}static lt(e,n,s){return n==="in"?new Ly(e,s):new Py(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Rn(n,this.value)):n!==null&&cn(this.value)===cn(n)&&this.ft(Rn(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Oy extends We{constructor(e,n,s){super(e,n,s),this.key=O.fromName(s.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.ft(n)}}class Ly extends We{constructor(e,n){super(e,"in",n),this.keys=Sh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Py extends We{constructor(e,n){super(e,"not-in",n),this.keys=Sh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>O.fromName(s.referenceValue))}class Fy extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wa(n)&&As(n.arrayValue,this.value)}}class Vy extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&As(this.value.arrayValue,n)}}class By extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!As(this.value.arrayValue,n)}}class Uy extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>As(this.value.arrayValue,s))}}class Ir{constructor(e,n){this.position=e,this.inclusive=n}}class rs{constructor(e,n="asc"){this.field=e,this.dir=n}}function $y(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Kc(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=O.comparator(O.fromName(o.referenceValue),n.key):s=Rn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function zc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ni{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function jy(t,e,n,s,r,i,o,a){return new ni(t,e,n,s,r,i,o,a)}function xh(t){return new ni(t)}function Gc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Hy(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function qy(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Ky(t){return t.collectionGroup!==null}function Ss(t){const e=Q(t);if(e._t===null){e._t=[];const n=qy(e),s=Hy(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new rs(n)),e._t.push(new rs(ze.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new rs(ze.keyField(),i))}}}return e._t}function Ct(t){const e=Q(t);if(!e.wt)if(e.limitType==="F")e.wt=qc(e.path,e.collectionGroup,Ss(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ss(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new rs(i.field,o))}const s=e.endAt?new Ir(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ir(e.startAt.position,e.startAt.inclusive):null;e.wt=qc(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function yo(t,e,n){return new ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function si(t,e){return _a(Ct(t),Ct(e))&&t.limitType===e.limitType}function Dh(t){return`${Ea(Ct(t))}|lt:${t.limitType}`}function vo(t){return`Query(target=${Ry(Ct(t))}; limitType=${t.limitType})`}function Ta(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):O.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Kc(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ss(n),s)||n.endAt&&!function(r,i,o){const a=Kc(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ss(n),s))}(t,e)}function zy(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Nh(t){return(e,n)=>{let s=!1;for(const r of Ss(t)){const i=Gy(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Gy(t,e,n){const s=t.field.isKeyField()?O.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Rn(a,c):j()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return j()}}/**
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
 */function Wy(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fo(e)?"-0":e}}function Qy(t){return{integerValue:""+t}}/**
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
 */class ri{constructor(){this._=void 0}}function Yy(t,e,n){return t instanceof wo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ar?kh(t,e):t instanceof Sr?Mh(t,e):function(s,r){const i=Jy(s,r),o=Wc(i)+Wc(s.yt);return go(i)&&go(s.yt)?Qy(o):Wy(s.It,o)}(t,e)}function Xy(t,e,n){return t instanceof Ar?kh(t,e):t instanceof Sr?Mh(t,e):n}function Jy(t,e){return t instanceof Eo?go(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class wo extends ri{}class Ar extends ri{constructor(e){super(),this.elements=e}}function kh(t,e){const n=Rh(e);for(const s of t.elements)n.some(r=>gt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Sr extends ri{constructor(e){super(),this.elements=e}}function Mh(t,e){let n=Rh(e);for(const s of t.elements)n=n.filter(r=>!gt(r,s));return{arrayValue:{values:n}}}class Eo extends ri{constructor(e,n){super(),this.It=e,this.yt=n}}function Wc(t){return me(t.integerValue||t.doubleValue)}function Rh(t){return wa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Zy(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ar&&s instanceof Ar||n instanceof Sr&&s instanceof Sr?kn(n.elements,s.elements,gt):n instanceof Eo&&s instanceof Eo?gt(n.yt,s.yt):n instanceof wo&&s instanceof wo}(t.transform,e.transform)}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ar(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ba{}function Oh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tv(t.key,nn.none()):new Ca(t.key,t.data,nn.none());{const n=t.data,s=pt.empty();let r=new _e(ze.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ii(t.key,s,new tn(r.toArray()),nn.none())}}function ev(t,e,n){t instanceof Ca?function(s,r,i){const o=s.value.clone(),a=Yc(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ii?function(s,r,i){if(!ar(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Yc(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Lh(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function is(t,e,n,s){return t instanceof Ca?function(r,i,o,a){if(!ar(r.precondition,i))return o;const c=r.value.clone(),l=Xc(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ii?function(r,i,o,a){if(!ar(r.precondition,i))return o;const c=Xc(r.fieldTransforms,a,i),l=i.data;return l.setAll(Lh(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return ar(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Qc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&kn(n,s,(r,i)=>Zy(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ca extends ba{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ii extends ba{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Yc(t,e,n){const s=new Map;ye(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Xy(o,a,n[r]))}return s}function Xc(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Yy(i,o,e))}return s}class tv extends ba{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nv{constructor(e){this.count=e}}/**
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
 */var ge,K;function Ph(t){if(t===void 0)return bt("GRPC error has no .code"),A.UNKNOWN;switch(t){case ge.OK:return A.OK;case ge.CANCELLED:return A.CANCELLED;case ge.UNKNOWN:return A.UNKNOWN;case ge.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case ge.INTERNAL:return A.INTERNAL;case ge.UNAVAILABLE:return A.UNAVAILABLE;case ge.UNAUTHENTICATED:return A.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case ge.NOT_FOUND:return A.NOT_FOUND;case ge.ALREADY_EXISTS:return A.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return A.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case ge.ABORTED:return A.ABORTED;case ge.OUT_OF_RANGE:return A.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return A.UNIMPLEMENTED;case ge.DATA_LOSS:return A.DATA_LOSS;default:return j()}}(K=ge||(ge={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Hn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ei(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return xy(this.inner)}size(){return this.innerSize}}/**
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
 */const sv=new Ie(O.comparator);function Pt(){return sv}const Fh=new Ie(O.comparator);function Jn(...t){let e=Fh;for(const n of t)e=e.insert(n.key,n);return e}function rv(t){let e=Fh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Qt(){return os()}function Vh(){return os()}function os(){return new Hn(t=>t.toString(),(t,e)=>t.isEqual(e))}new Ie(O.comparator);const iv=new _e(O.comparator);function W(...t){let e=iv;for(const n of t)e=e.add(n);return e}const ov=new _e(Z);function Bh(){return ov}/**
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
 */class oi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Bs.createSynthesizedTargetChangeForCurrentChange(e,n)),new oi(q.min(),s,Bh(),Pt(),W())}}class Bs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Bs(Me.EMPTY_BYTE_STRING,n,W(),W(),W())}}/**
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
 */class cr{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class Uh{constructor(e,n){this.targetId=e,this.At=n}}class $h{constructor(e,n,s=Me.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Jc{constructor(){this.Rt=0,this.bt=el(),this.Pt=Me.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=W(),n=W(),s=W();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:j()}}),new Bs(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=el()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class av{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Pt(),this.qt=Zc(),this.Kt=new _e(Z)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(mo(i))if(s===0){const o=new O(i.path);this.jt(n,o,Se.newNoDocument(o,q.min()))}else ye(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&mo(a.target)){const c=new O(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Se.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=W();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new oi(e,n,this.Kt,this.Ut,s);return this.Ut=Pt(),this.qt=Zc(),this.Kt=new _e(Z),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new Jc,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new _e(Z),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Jc),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Zc(){return new Ie(O.comparator)}function el(){return new Ie(O.comparator)}/**
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
 */const cv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class uv{constructor(e,n){this.databaseId=e,this.gt=n}}function hv(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fv(t,e){return t.gt?e.toBase64():e.toUint8Array()}function xs(t){return ye(!!t),q.fromTimestamp(function(e){const n=Lt(e);return new Qe(n.seconds,n.nanos)}(t))}function dv(t,e){return function(n){return new de(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function jh(t){const e=de.fromString(t);return ye(Kh(e)),e}function Ri(t,e){const n=jh(e);if(n.get(1)!==t.databaseId.projectId)throw new P(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(Hh(n))}function _o(t,e){return dv(t.databaseId,e)}function pv(t){const e=jh(t);return e.length===4?de.emptyPath():Hh(e)}function tl(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hh(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gv(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(ye(l===void 0||typeof l=="string"),Me.fromBase64String(l||"")):(ye(l===void 0||l instanceof Uint8Array),Me.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:Ph(c.code);return new P(l,c.message||"")}(o);n=new $h(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ri(t,s.document.name),i=xs(s.document.updateTime),o=new pt({mapValue:{fields:s.document.fields}}),a=Se.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new cr(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ri(t,s.document),i=s.readTime?xs(s.readTime):q.min(),o=Se.newNoDocument(r,i),a=s.removedTargetIds||[];n=new cr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ri(t,s.document),i=s.removedTargetIds||[];n=new cr([],i,r,null)}else{if(!("filter"in e))return j();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new nv(r),o=s.targetId;n=new Uh(o,i)}}return n}function mv(t,e){return{documents:[_o(t,e.path)]}}function yv(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=_o(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_o(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(f){if(f.op==="=="){if(Hc(f.value))return{unaryFilter:{field:dn(f.field),op:"IS_NAN"}};if(jc(f.value))return{unaryFilter:{field:dn(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Hc(f.value))return{unaryFilter:{field:dn(f.field),op:"IS_NOT_NAN"}};if(jc(f.value))return{unaryFilter:{field:dn(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dn(f.field),op:_v(f.op),value:f.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:dn(u.field),direction:Ev(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||ti(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function vv(t){let e=pv(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ye(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=qh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new rs(mn(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,ti(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,p=u.values||[];return new Ir(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,p=u.values||[];return new Ir(p,f)}(n.endAt)),jy(e,r,o,i,a,"F",c,l)}function wv(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function qh(t){return t?t.unaryFilter!==void 0?[bv(t)]:t.fieldFilter!==void 0?[Tv(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>qh(e)).reduce((e,n)=>e.concat(n)):j():[]}function Ev(t){return cv[t]}function _v(t){return lv[t]}function dn(t){return{fieldPath:t.canonicalString()}}function mn(t){return ze.fromServerFormat(t.fieldPath)}function Tv(t){return We.create(mn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}function bv(t){switch(t.unaryFilter.op){case"IS_NAN":const e=mn(t.unaryFilter.field);return We.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=mn(t.unaryFilter.field);return We.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mn(t.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=mn(t.unaryFilter.field);return We.create(r,"!=",{nullValue:"NULL_VALUE"});default:return j()}}function Kh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Cv{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&ev(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=is(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=is(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Vh();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Oh(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&kn(this.mutations,e.mutations,(n,s)=>Qc(n,s))&&kn(this.baseMutations,e.baseMutations,(n,s)=>Qc(n,s))}}/**
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
 */class Iv{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sn{constructor(e,n,s,r,i=q.min(),o=q.min(),a=Me.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Av{constructor(e){this.re=e}}function Sv(t){const e=vv({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yo(e,e.limit,"L"):e}/**
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
 */class xv{constructor(){this.Ye=new Dv}addToCollectionParentIndex(e,n){return this.Ye.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(Ot.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(Ot.min())}updateCollectionGroup(e,n,s){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class Dv{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new _e(de.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new _e(de.comparator)).toArray()}}/**
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
 */class On{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new On(0)}static vn(){return new On(-1)}}/**
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
 */class Nv{constructor(){this.changes=new Hn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class kv{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Mv{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&is(s.mutation,r,tn.empty(),Qe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,W()).next(()=>s))}getLocalViewOfDocuments(e,n,s=W()){const r=Qt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Jn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Qt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,W()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Pt();const o=os(),a=os();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ii)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),is(u.mutation,l,u.mutation.getFieldMask(),Qe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new kv(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=os();let r=new Ie((o,a)=>o-a),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||tn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const f=(r.get(a.batchId)||W()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=Vh();u.forEach(p=>{if(!i.has(p)){const m=Oh(n.get(p),s.get(p));m!==null&&f.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ky(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):E.resolve(Qt());let a=-1,c=i;return o.next(l=>E.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?E.resolve():this.getBaseDocument(e,u,f).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,W())).next(u=>({batchId:a,changes:rv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(s=>{let r=Jn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Jn();return this.indexManager.getCollectionParents(e,r).next(o=>E.forEach(o,a=>{const c=function(l,u){return new ni(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Se.newInvalidDocument(l)))});let o=Jn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&is(l.mutation,c,tn.empty(),Qe.now()),Ta(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):E.resolve(Se.newInvalidDocument(n))}}/**
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
 */class Rv{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return E.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:xs(s.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Sv(s.bundledQuery),readTime:xs(s.readTime)}}(n)),E.resolve()}}/**
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
 */class Ov{constructor(){this.overlays=new Ie(O.comparator),this.es=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Qt();return E.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),E.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),E.resolve()}getOverlaysForCollection(e,n,s){const r=Qt(),i=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return E.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ie((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Qt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Qt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return E.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Iv(n,s));let i=this.es.get(n);i===void 0&&(i=W(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class Ia{constructor(){this.ns=new _e(be.ss),this.rs=new _e(be.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new be(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new be(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new O(new de([])),s=new be(n,e),r=new be(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new O(new de([])),s=new be(n,e),r=new be(n,e+1);let i=W();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new be(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return O.comparator(e.key,n.key)||Z(e._s,n._s)}static os(e,n){return Z(e._s,n._s)||O.comparator(e.key,n.key)}}/**
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
 */class Lv{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new _e(be.ss)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cv(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new be(n,0),r=new be(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _e(Z);return n.forEach(r=>{const i=new be(r,0),o=new be(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),E.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;O.isDocumentKey(i)||(i=i.child(""));const o=new be(new O(i),0);let a=new _e(Z);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),E.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ye(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return E.forEach(n.mutations,r=>{const i=new be(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new be(n,0),r=this.gs.firstAfterOrEqual(s);return E.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Pv{constructor(e){this.Es=e,this.docs=new Ie(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():Se.newInvalidDocument(n))}getEntries(e,n){let s=Pt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Se.newInvalidDocument(r))}),E.resolve(s)}getAllFromCollection(e,n,s){let r=Pt();const i=new O(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Iy(Cy(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return E.resolve(r)}getAllFromCollectionGroup(e,n,s,r){j()}As(e,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Fv(this)}getSize(e){return E.resolve(this.size)}}class Fv extends Nv{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),E.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class Vv{constructor(e){this.persistence=e,this.Rs=new Hn(n=>Ea(n),_a),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ia,this.targetCount=0,this.vs=On.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),E.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new On(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.Dn(n),E.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),E.waitFor(i).next(()=>r)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return E.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),E.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),E.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return E.resolve(s)}containsKey(e,n){return E.resolve(this.Ps.containsKey(n))}}/**
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
 */class Bv{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new va(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Vv(this),this.indexManager=new xv,this.remoteDocumentCache=function(s){return new Pv(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Av(n),this.Ns=new Rv(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ov,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Lv(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){k("MemoryPersistence","Starting transaction:",e);const r=new Uv(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Ms(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return E.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Uv extends Sy{constructor(e){super(),this.currentSequenceNumber=e}}class Aa{constructor(e){this.persistence=e,this.Fs=new Ia,this.$s=null}static Bs(e){return new Aa(e)}get Ls(){if(this.$s)return this.$s;throw j()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),E.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),E.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ls,s=>{const r=O.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,q.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return E.or([()=>E.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Sa{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=W(),r=W();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Sa(e,n.fromCache,s,r)}}/**
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
 */class $v{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Mi(e,n,r,s)).next(i=>i||this.Oi(e,n))}ki(e,n){if(Gc(n))return E.resolve(null);let s=Ct(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=yo(n,null,"F"),s=Ct(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=W(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,yo(n,null,"F")):this.Bi(e,l,n,c)}))})))}Mi(e,n,s,r){return Gc(n)||r.isEqual(q.min())?this.Oi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Oi(e,n):(Fc()<=X.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vo(n)),this.Bi(e,o,n,by(r,-1)))})}Fi(e,n){let s=new _e(Nh(e));return n.forEach((r,i)=>{Ta(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Fc()<=X.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",vo(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ot.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class jv{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new Ie(Z),this.qi=new Hn(i=>Ea(i),_a),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mv(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function Hv(t,e,n,s){return new jv(t,e,n,s)}async function zh(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=W();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Gh(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function qv(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,f)=>{const p=r.get(f);if(!p)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,f)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(f)?m=m.withResumeToken(Me.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(f,m),function(b,N,S){return b.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,m,u)&&a.push(n.Cs.updateTargetData(i,m))});let c=Pt(),l=W();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Kv(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(q.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(f=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function Kv(t,e,n){let s=W(),r=W();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Pt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function zv(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,E.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new sn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function To(t,e,n){const s=Q(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Vs(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function nl(t,e,n){const s=Q(t);let r=q.min(),i=W();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Q(a),f=u.qi.get(l);return f!==void 0?E.resolve(u.Ui.get(f)):u.Cs.getTargetData(c,l)}(s,o,Ct(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:q.min(),n?i:W())).next(a=>(Gv(s,zy(e),a),{documents:a,Hi:i})))}function Gv(t,e,n){let s=q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class sl{constructor(){this.activeTargetIds=Bh()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Wv{constructor(){this.Lr=new sl,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new sl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Qv{qr(e){}shutdown(){}}/**
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
 */class rl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Yv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Xv{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class Jv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ao(e,n);k("RestConnection","Sending: ",o,s);const a={};return this.ho(a,r,i),this.lo(e,o,a,s).then(c=>(k("RestConnection","Received: ",c),c),c=>{throw Vc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+jn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=Yv[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){return new Promise((i,o)=>{const a=new fy;a.listenOnce(ly.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ki.NO_ERROR:const l=a.getResponseJson();k("Connection","XHR received:",JSON.stringify(l)),i(l);break;case ki.TIMEOUT:k("Connection",'RPC "'+e+'" timed out'),o(new P(A.DEADLINE_EXCEEDED,"Request time out"));break;case ki.HTTP_ERROR:const u=a.getStatus();if(k("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const p=function(m){const b=m.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(b)>=0?b:A.UNKNOWN}(f.status);o(new P(p,f.message))}else o(new P(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(A.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{k("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}_o(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=ay(),o=cy(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new hy({})),this.ho(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");k("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,f=!1;const p=new Xv({Hr:b=>{f?k("Connection","Not sending because WebChannel is closed:",b):(u||(k("Connection","Opening WebChannel transport."),l.open(),u=!0),k("Connection","WebChannel sending:",b),l.send(b))},Jr:()=>l.close()}),m=(b,N,S)=>{b.listen(N,L=>{try{S(L)}catch(ae){setTimeout(()=>{throw ae},0)}})};return m(l,Zs.EventType.OPEN,()=>{f||k("Connection","WebChannel transport opened.")}),m(l,Zs.EventType.CLOSE,()=>{f||(f=!0,k("Connection","WebChannel transport closed"),p.io())}),m(l,Zs.EventType.ERROR,b=>{f||(f=!0,Vc("Connection","WebChannel transport errored:",b),p.io(new P(A.UNAVAILABLE,"The operation could not be completed")))}),m(l,Zs.EventType.MESSAGE,b=>{var N;if(!f){const S=b.data[0];ye(!!S);const L=S,ae=L.error||((N=L[0])===null||N===void 0?void 0:N.error);if(ae){k("Connection","WebChannel received error:",ae);const te=ae.status;let J=function(Ue){const we=ge[Ue];if(we!==void 0)return Ph(we)}(te),he=ae.message;J===void 0&&(J=A.INTERNAL,he="Unknown error status: "+te+" with message "+ae.message),f=!0,p.io(new P(J,he)),l.close()}else k("Connection","WebChannel received:",S),p.ro(S)}}),m(o,uy.STAT_EVENT,b=>{b.stat===Lc.PROXY?k("Connection","Detected buffering proxy"):b.stat===Lc.NOPROXY&&k("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function Oi(){return typeof document<"u"?document:null}/**
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
 */function Wh(t){return new uv(t,!0)}class Qh{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.wo=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&k("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Zv{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.Po=s,this.vo=r,this.Vo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Qh(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(bt(n.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new P(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class e0 extends Zv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=gv(this.It,e),s=function(r){if(!("targetChange"in r))return q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?q.min():i.readTime?xs(i.readTime):q.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=tl(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=mo(a)?{documents:mv(r,a)}:{query:yv(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=fv(r,i.resumeToken):i.snapshotVersion.compareTo(q.min())>0&&(o.readTime=hv(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=wv(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=tl(this.It),n.removeTarget=e,this.Bo(n)}}/**
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
 */class t0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new P(A.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new P(A.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Vo.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(A.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class n0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(bt(n),this.ou=!1):k("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class s0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{$s(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c._u.add(4),await Us(c),c.gu.set("Unknown"),c._u.delete(4),await ai(c)}(this))})}),this.gu=new n0(s,r)}}async function ai(t){if($s(t))for(const e of t.wu)await e(!0)}async function Us(t){for(const e of t.wu)await e(!1)}function Yh(t,e){const n=Q(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Na(n)?Da(n):qn(n).ko()&&xa(n,e))}function Xh(t,e){const n=Q(t),s=qn(n);n.du.delete(e),s.ko()&&Jh(n,e),n.du.size===0&&(s.ko()?s.Fo():$s(n)&&n.gu.set("Unknown"))}function xa(t,e){t.yu.Ot(e.targetId),qn(t).zo(e)}function Jh(t,e){t.yu.Ot(e),qn(t).Ho(e)}function Da(t){t.yu=new av({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),qn(t).start(),t.gu.uu()}function Na(t){return $s(t)&&!qn(t).No()&&t.du.size>0}function $s(t){return Q(t)._u.size===0}function Zh(t){t.yu=void 0}async function r0(t){t.du.forEach((e,n)=>{xa(t,e)})}async function i0(t,e){Zh(t),Na(t)?(t.gu.hu(e),Da(t)):t.gu.set("Unknown")}async function o0(t,e,n){if(t.gu.set("Online"),e instanceof $h&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await il(t,s)}else if(e instanceof cr?t.yu.Gt(e):e instanceof Uh?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(q.min()))try{const s=await Gh(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Me.EMPTY_BYTE_STRING,c.snapshotVersion)),Jh(r,a);const l=new sn(c.target,a,1,c.sequenceNumber);xa(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){k("RemoteStore","Failed to raise snapshot:",s),await il(t,s)}}async function il(t,e,n){if(!Vs(e))throw e;t._u.add(1),await Us(t),t.gu.set("Offline"),n||(n=()=>Gh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ai(t)})}async function ol(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const s=$s(n);n._u.add(3),await Us(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ai(n)}async function a0(t,e){const n=Q(t);e?(n._u.delete(2),await ai(n)):e||(n._u.add(2),await Us(n),n.gu.set("Unknown"))}function qn(t){return t.pu||(t.pu=function(e,n,s){const r=Q(e);return r.su(),new e0(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:r0.bind(null,t),Zr:i0.bind(null,t),Wo:o0.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),Na(t)?Da(t):t.gu.set("Unknown")):(await t.pu.stop(),Zh(t))})),t.pu}/**
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
 */class ka{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new en,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new ka(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ef(t,e){if(bt("AsyncQueue",`${e}: ${t}`),Vs(t))return new P(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Cn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||O.comparator(n.key,s.key):(n,s)=>O.comparator(n.key,s.key),this.keyedMap=Jn(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Cn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Cn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Cn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class al{constructor(){this.Tu=new Ie(O.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):j():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ln{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Ln(e,n,Cn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&si(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class c0{constructor(){this.Au=void 0,this.listeners=[]}}class l0{constructor(){this.queries=new Hn(e=>Dh(e),si),this.onlineState="Unknown",this.Ru=new Set}}async function u0(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new c0),r)try{i.Au=await n.onListen(s)}catch(o){const a=ef(o,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Ma(n)}async function h0(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function f0(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Ma(n)}function d0(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ma(t){t.Ru.forEach(e=>{e.next()})}class p0{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ln(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ln.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
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
 */class tf{constructor(e){this.key=e}}class nf{constructor(e){this.key=e}}class g0{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=W(),this.mutatedKeys=W(),this.Ku=Nh(e),this.Gu=new Cn(this.Ku)}get Qu(){return this.Lu}ju(e,n){const s=n?n.Wu:new al,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,f)=>{const p=r.get(u),m=Ta(this.query,f)?f:null,b=!!p&&this.mutatedKeys.has(p.key),N=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;p&&m?p.data.isEqual(m.data)?b!==N&&(s.track({type:3,doc:m}),S=!0):this.zu(p,m)||(s.track({type:2,doc:m}),S=!0,(c&&this.Ku(m,c)>0||l&&this.Ku(m,l)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),S=!0):p&&!m&&(s.track({type:1,doc:p}),S=!0,(c||l)&&(a=!0)),S&&(m?(o=o.add(m),i=N?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,Wu:s,$i:a,mutatedKeys:i}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.Wu.Eu();i.sort((l,u)=>function(f,p){const m=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return m(f)-m(p)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Ln(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new al,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=W(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return e.forEach(s=>{this.qu.has(s)||n.push(new nf(s))}),this.qu.forEach(s=>{e.has(s)||n.push(new tf(s))}),n}Zu(e){this.Lu=e.Hi,this.qu=W();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return Ln.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class m0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class y0{constructor(e){this.key=e,this.ec=!1}}class v0{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Hn(a=>Dh(a),si),this.ic=new Map,this.rc=new Set,this.oc=new Ie(O.comparator),this.uc=new Map,this.cc=new Ia,this.ac={},this.hc=new Map,this.lc=On.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function w0(t,e){const n=A0(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await zv(n.localStore,Ct(e));n.isPrimaryClient&&Yh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await E0(n,e,s,a==="current")}return r}async function E0(t,e,n,s){t.dc=(u,f,p)=>async function(m,b,N,S){let L=b.view.ju(N);L.$i&&(L=await nl(m.localStore,b.query,!1).then(({documents:J})=>b.view.ju(J,L)));const ae=S&&S.targetChanges.get(b.targetId),te=b.view.applyChanges(L,m.isPrimaryClient,ae);return ll(m,b.targetId,te.Yu),te.snapshot}(t,u,f,p);const r=await nl(t.localStore,e,!0),i=new g0(e,r.Hi),o=i.ju(r.documents),a=Bs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);ll(t,n,c.Yu);const l=new m0(e,n,i);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function _0(t,e){const n=Q(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!si(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await To(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Xh(n.remoteStore,s.targetId),bo(n,s.targetId)}).catch(ya)):(bo(n,s.targetId),await To(n.localStore,s.targetId,!0))}async function sf(t,e){const n=Q(t);try{const s=await qv(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(ye(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?ye(o.ec):r.removedDocuments.size>0&&(ye(o.ec),o.ec=!1))}),await of(n,s,e)}catch(s){await ya(s)}}function cl(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.bu(o)&&(c=!0)}),c&&Ma(a)}(s.eventManager,e),r.length&&s.nc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function T0(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new Ie(O.comparator);o=o.insert(i,Se.newNoDocument(i,q.min()));const a=W().add(i),c=new oi(q.min(),new Map,new _e(Z),o,a);await sf(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Ra(s)}else await To(s.localStore,e,!1).then(()=>bo(s,e,n)).catch(ya)}function bo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(s=>{t.cc.containsKey(s)||rf(t,s)})}function rf(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Xh(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Ra(t))}function ll(t,e,n){for(const s of n)s instanceof tf?(t.cc.addReference(s.key,e),b0(t,s)):s instanceof nf?(k("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||rf(t,s.key)):j()}function b0(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(k("SyncEngine","New document in limbo: "+n),t.rc.add(s),Ra(t))}function Ra(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new O(de.fromString(e)),s=t.lc.next();t.uc.set(s,new y0(n)),t.oc=t.oc.insert(n,s),Yh(t.remoteStore,new sn(Ct(xh(n.path)),s,2,va.at))}}async function of(t,e,n){const s=Q(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Sa.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.Wo(r),await async function(a,c){const l=Q(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(c,f=>E.forEach(f.Si,p=>l.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>E.forEach(f.Di,p=>l.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!Vs(u))throw u;k("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const p=l.Ui.get(f),m=p.snapshotVersion,b=p.withLastLimboFreeSnapshotVersion(m);l.Ui=l.Ui.insert(f,b)}}}(s.localStore,i))}async function C0(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const s=await zh(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new P(A.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await of(n,s.ji)}}function I0(t,e){const n=Q(t),s=n.uc.get(e);if(s&&s.ec)return W().add(s.key);{let r=W();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function A0(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=I0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=T0.bind(null,e),e.nc.Wo=f0.bind(null,e.eventManager),e.nc._c=d0.bind(null,e.eventManager),e}class S0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Wh(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return Hv(this.persistence,new $v,e.initialUser,this.It)}gc(e){return new Bv(Aa.Bs,this.It)}mc(e){return new Wv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class x0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>cl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=C0.bind(null,this.syncEngine),await a0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new l0}createDatastore(e){const n=Wh(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Jv(r));var r;return function(i,o,a,c){return new t0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>cl(this.syncEngine,a,0),o=rl.C()?new rl:new Qv,new s0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new v0(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);k("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Us(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */class D0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):bt("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class N0{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ke.UNAUTHENTICATED,this.clientId=_y.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{k("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(k("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new en;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ef(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function k0(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await zh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function M0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await R0(t);k("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>ol(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ol(e.remoteStore,i)),t.onlineComponents=e}async function R0(t){return t.offlineComponents||(k("FirestoreClient","Using default OfflineComponentProvider"),await k0(t,new S0)),t.offlineComponents}async function O0(t){return t.onlineComponents||(k("FirestoreClient","Using default OnlineComponentProvider"),await M0(t,new x0)),t.onlineComponents}async function L0(t){const e=await O0(t),n=e.eventManager;return n.onListen=w0.bind(null,e.syncEngine),n.onUnlisten=_0.bind(null,e.syncEngine),n}function P0(t,e,n={}){const s=new en;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new D0({next:f=>{i.enqueueAndForget(()=>h0(r,u)),f.fromCache&&a.source==="server"?c.reject(new P(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),u=new p0(o,l,{includeMetadataChanges:!0,Nu:!0});return u0(r,u)}(await L0(t),t.asyncQueue,e,n,s)),s.promise}const ul=new Map;/**
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
 */function F0(t,e,n){if(!n)throw new P(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function V0(t,e,n,s){if(e===!0&&s===!0)throw new P(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hl(t){if(O.isDocumentKey(t))throw new P(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function B0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function fl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=B0(t);throw new P(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class dl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,V0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class af{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new py;switch(n.type){case"gapi":const s=n.client;return new yy(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ul.get(e);n&&(k("ComponentProvider","Removing Datastore"),ul.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Kn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kn(this.firestore,e,this._key)}}class ci{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ci(this.firestore,e,this._query)}}class In extends ci{constructor(e,n,s){super(e,n,xh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kn(this.firestore,null,new O(e))}withConverter(e){return new In(this.firestore,e,this._path)}}function U0(t,e,...n){if(t=tg(t),F0("collection","path",e),t instanceof af){const s=de.fromString(e,...n);return hl(s),new In(t,null,s)}{if(!(t instanceof Kn||t instanceof In))throw new P(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(de.fromString(e,...n));return hl(s),new In(t.firestore,null,s)}}/**
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
 */class $0{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Qh(this,"async_queue_retry"),this.jc=()=>{const n=Oi();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Oi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Oi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new en;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Vs(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(s=>{this.qc=s,this.Kc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw bt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(e,n,s){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const r=ka.createAndSchedule(this,e,n,s,i=>this.Jc(i));return this.Uc.push(r),r}Wc(){this.qc&&j()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class cf extends af{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new $0,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lf(this),this._firestoreClient.terminate()}}function j0(t,e){const n=typeof t=="object"?t:tm(),s=typeof t=="string"?t:e||"(default)";return Yg(n,"firestore").getImmediate({identifier:s})}function H0(t){return t._firestoreClient||lf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lf(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Ny(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new N0(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class uf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xr(Me.fromBase64String(e))}catch(n){throw new P(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xr(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class q0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}const K0=new RegExp("[~\\*/\\[\\]]");function z0(t,e,n){if(e.search(K0)>=0)throw pl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uf(...e.split("."))._internalPath}catch{throw pl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pl(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new P(A.INVALID_ARGUMENT,a+t+c)}/**
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
 */class hf{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Kn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new G0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ff("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class G0 extends hf{data(){return super.data()}}function ff(t,e){return typeof e=="string"?z0(t,e):e instanceof uf?e._internalPath:e._delegate._internalPath}/**
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
 */class nr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class W0 extends hf{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ff("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class lr extends W0{data(e={}){return super.data(e)}}class Q0{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new nr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new lr(this._firestore,this._userDataWriter,s.key,s,new nr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new lr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new nr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new lr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new nr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:Y0(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Y0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
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
 */function X0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class J0{convertValue(e,n="none"){switch(cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){const s={};return ei(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new q0(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ah(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Cs(e));default:return null}}convertTimestamp(e){const n=Lt(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=de.fromString(e);ye(Kh(s));const r=new Is(s.get(1),s.get(3)),i=new O(s.popFirst(5));return r.isEqual(n)||bt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class Z0 extends J0{constructor(e){super(),this.firestore=e}convertBytes(e){return new xr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kn(this.firestore,null,n)}}function ew(t){t=fl(t,ci);const e=fl(t.firestore,cf),n=H0(e),s=new Z0(e);return X0(t._query),P0(n,t._query).then(r=>new Q0(e,s,t,r))}(function(t,e=!0){(function(n){jn=n})(Zg),mr(new ms("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new cf(new gy(n.getProvider("auth-internal")),new wy(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Is(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Tn(Pc,"3.5.0",t),Tn(Pc,"3.5.0","esm2017")})();var tw="firebase",nw="9.10.0";/**
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
 */Tn(tw,nw,"app");const sw={apiKey:"AIzaSyDtgcnH0Ro4ZCNc_n2F8KoUWLvuYG5mN_g",authDomain:"open-house-8c55d.firebaseapp.com",projectId:"open-house-8c55d",storageBucket:"open-house-8c55d.appspot.com",messagingSenderId:"1054163941904",appId:"1:1054163941904:web:41a294b0a3e8c45a14e895",measurementId:`${{VITE_API_KEY:"AIzaSyDtgcnH0Ro4ZCNc_n2F8KoUWLvuYG5mN_g",VITE_AUTH_DOMAIN:"open-house-8c55d.firebaseapp.com",VITE_PROJECT_ID:"open-house-8c55d",VITE_STORAGE_BUCKET:"open-house-8c55d.appspot.com",VITE_MESSAGING_SENDER_ID:"1054163941904",VITE_APP_ID:"1:1054163941904:web:41a294b0a3e8c45a14e895",BASE_URL:"/open-house/",MODE:"production",DEV:!1,PROD:!0}.VITE_MEASUREMENT_ID}`},rw=em(sw),iw=j0(rw),df=t=>{if(typeof t=="string"||typeof t=="number")return(+t).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})},ow=["src","alt"],aw={class:"flex flex-col gap-1 text-sm text-center"},cw={key:0,class:"font-semibold text-primary md:text-lg"},lw={key:1},uw={__name:"GiftItem",props:{giftData:{type:Object,required:!0}},emits:["openGiftModal"],setup(t,{emit:e}){var a;const n=t,s=xn(((a=n.giftData)==null?void 0:a.presenteado)||""),r=gs(()=>s.value?`Presenteado por: ${s.value}`:"Presenteie!"),i=gs(()=>s.value?"cursor-not-allowed opacity-50":"transition-transform md:hover:scale-110"),o=()=>s.value||e("openGiftModal",n.giftData);return(c,l)=>{var u,f,p,m,b,N,S;return pe(),De("div",{class:as(["flex items-center justify-center gap-2 p-4 bg-white shadow-md cursor-pointer md:flex-col",et(i)]),onClick:o},[H("img",{src:(u=t.giftData)==null?void 0:u.foto,alt:(f=t.giftData)==null?void 0:f.nome,class:"w-24 h-24 md:w-36 md:h-36"},null,8,ow),H("div",aw,[(p=t.giftData)!=null&&p.nome?(pe(),De("p",cw,yn((m=t.giftData)==null?void 0:m.nome),1)):Xt("",!0),(b=t.giftData)!=null&&b.preco?(pe(),De("p",lw," A partir de "+yn(et(df)((N=t.giftData)==null?void 0:N.preco)),1)):Xt("",!0),H("button",{class:as(["px-1 py-2 mt-1 text-white truncate rounded bg-primary h-9",((S=t.giftData)==null?void 0:S.presenteado)&&"cursor-none bg-gray-500 text-xs"])},yn(et(r)),3)])],2)}}},sr=xn(""),pf=()=>({activeModal:sr,isModalActive:s=>sr.value===s,openModal:s=>sr.value=s,closeModal:()=>sr.value=""}),hw={class:"w-full p-4 m-4 bg-white rounded shadow-md md:max-w-lg animate-show"},fw={class:"flex justify-end w-full"},dw=H("path",{fill:"none",stroke:"#000","stroke-width":"2",d:"M3,3 L21,21 M3,21 L21,3"},null,-1),pw=[dw],gw={__name:"CustomModal",props:{isModalVisible:{type:Boolean,default:!1,required:!0}},setup(t){const{closeModal:e}=pf(),n=xn(null),s=({target:r})=>{r===n.value&&e()};return(r,i)=>(pe(),ds(op,{to:"#modal"},[t.isModalVisible?(pe(),De("div",{key:0,class:"fixed top-0 right-0 flex items-start justify-center w-full h-screen pt-12 bg-black/60",onClick:s,ref_key:"containerModalRef",ref:n},[H("div",hw,[H("div",fw,[(pe(),De("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",class:"cursor-pointer",onClick:i[0]||(i[0]=(...o)=>et(e)&&et(e)(...o))},pw))]),H("div",null,[Ud(r.$slots,"modalContent")])])],512)):Xt("",!0)]))}},mw="/open-house/assets/amazon.b5975f9c.png",yw="/open-house/assets/americanas.62e914a7.png",vw="/open-house/assets/casasbahia.87329a2d.png",ww="/open-house/assets/magalu.ee559ccd.png",Ew="/open-house/assets/mercadolivre.a4aba4a4.webp",_w="/open-house/assets/shopee.e6918b0f.png",Tw="/open-house/assets/shoptime.8341bbb0.png",gl=t=>({amazon:{name:"Amazon",logo:mw},americanas:{name:"Americanas",logo:yw},casasBahia:{name:"Casas Bahia",logo:vw},magalu:{name:"Magalu",logo:ww},mercadoLivre:{name:"Mercado Livre",logo:Ew},shopee:{name:"Shopee",logo:_w},shopTime:{name:"Shoptime",loop:Tw}})[t],bw={class:"flex gap-4"},Cw={class:"text-2xl font-semibold md:text-4xl text-primary"},Iw={key:0,class:"mt-4"},Aw=Ko(" A partir de "),Sw={class:"semibold"},xw=H("p",{class:"mt-2"},"Onde comprar:",-1),Dw={class:"flex flex-wrap gap-1 mt-2"},Nw=["href"],kw=["src"],Mw={class:"text-xs"},Rw=["src","alt"],Ow={class:"flex justify-center md:justify-start"},Lw={class:"w-full px-1 py-2 mt-4 text-sm text-white bg-green-500 rounded md:w-72 h-9"},Pw=["href"],Fw=H("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",version:"1.1",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[H("path",{d:"M13.641 2.325c-1.497-1.5-3.488-2.325-5.609-2.325-4.369 0-7.925 3.556-7.925 7.928 0 1.397 0.366 2.763 1.059 3.963l-1.125 4.109 4.203-1.103c1.159 0.631 2.463 0.966 3.787 0.966h0.003c0 0 0 0 0 0 4.369 0 7.928-3.556 7.928-7.928 0-2.119-0.825-4.109-2.322-5.609zM8.034 14.525v0c-1.184 0-2.344-0.319-3.356-0.919l-0.241-0.144-2.494 0.653 0.666-2.431-0.156-0.25c-0.663-1.047-1.009-2.259-1.009-3.506 0-3.634 2.956-6.591 6.594-6.591 1.759 0 3.416 0.688 4.659 1.931 1.244 1.247 1.928 2.9 1.928 4.662-0.003 3.637-2.959 6.594-6.591 6.594zM11.647 9.588c-0.197-0.1-1.172-0.578-1.353-0.644s-0.313-0.1-0.447 0.1c-0.131 0.197-0.512 0.644-0.628 0.778-0.116 0.131-0.231 0.15-0.428 0.050s-0.838-0.309-1.594-0.984c-0.588-0.525-0.987-1.175-1.103-1.372s-0.013-0.306 0.088-0.403c0.091-0.088 0.197-0.231 0.297-0.347s0.131-0.197 0.197-0.331c0.066-0.131 0.034-0.247-0.016-0.347s-0.447-1.075-0.609-1.472c-0.159-0.388-0.325-0.334-0.447-0.341-0.116-0.006-0.247-0.006-0.378-0.006s-0.347 0.050-0.528 0.247c-0.181 0.197-0.694 0.678-0.694 1.653s0.709 1.916 0.809 2.050c0.1 0.131 1.397 2.134 3.384 2.991 0.472 0.203 0.841 0.325 1.128 0.419 0.475 0.15 0.906 0.128 1.247 0.078 0.381-0.056 1.172-0.478 1.338-0.941s0.166-0.859 0.116-0.941c-0.047-0.088-0.178-0.137-0.378-0.238z"})],-1),Vw=Ko(" Avisa pra gente que voc\xEA vai levar! "),Bw=[Fw,Vw],Uw=H("p",{class:"mt-4 text-xs italic md:text-center md:max-w-md md:mx-auto"}," Recomendamos que coloque o pr\xF3prio endere\xE7o, pois se enviarem para c\xE1, a entrega pode ser rejeitada por conta do nome do destinat\xE1rio! ",-1),$w={__name:"GiftModalContainer",props:{giftData:{type:Object,required:!0}},setup(t){const e=t,n=gs(()=>`https://api.whatsapp.com/send?phone=5513997774462&text=Ol%C3%A1!%20Estava%20vendo%20o%20site%20e%20vou%20levar%20${e.giftData.nome||""}%20como%20presente`);return(s,r)=>{var i,o,a,c,l,u;return pe(),De(Oe,null,[H("div",bw,[H("div",null,[H("h1",Cw,yn((i=t.giftData)==null?void 0:i.nome),1),(o=t.giftData)!=null&&o.preco?(pe(),De("p",Iw,[Aw,H("strong",Sw,yn(et(df)((a=t.giftData)==null?void 0:a.preco)),1)])):Xt("",!0),xw,H("ul",Dw,[(pe(!0),De(Oe,null,Zl((c=t.giftData)==null?void 0:c.lojas,(f,p)=>(pe(),De("li",{key:p,class:"flex"},[H("a",{href:f,target:"_blank",class:"flex items-center gap-1 px-2 py-1 border rounded bg-slate-100"},[H("img",{class:"w-6",src:et(gl)(p).logo},null,8,kw),H("p",Mw,yn(et(gl)(p).name),1)],8,Nw)]))),128))])]),H("img",{src:(l=t.giftData)==null?void 0:l.foto,alt:(u=t.giftData)==null?void 0:u.nome,class:"w-24 h-24 md:w-48 md:h-48"},null,8,Rw)]),H("div",Ow,[H("button",Lw,[H("a",{href:et(n),target:"_blank",class:"flex items-center justify-center w-full gap-2"},Bw,8,Pw)])]),Uw],64)}}},jw={class:"my-4 lg:my-8"},Hw={class:"flex flex-col justify-center gap-5 mx-auto md:grid-cols-3 lg:grid-cols-5 md:grid animate-show"},qw={__name:"GiftListContainer",props:{giftList:{type:Array,default:()=>[],required:!0},isGiftListLoading:{type:Boolean,default:!1}},setup(t){const e=t,{openModal:n,isModalActive:s}=pf(),r="giftModal",i=xn({}),o=c=>{i.value=c,n(r)},a=gs(()=>[...e.giftList].sort((l,u)=>+(l==null?void 0:l.preco)-+(u==null?void 0:u.preco)).sort(l=>{var u;return(u=l==null?void 0:l.presenteado)!=null&&u.trim()?1:-1}));return(c,l)=>(pe(),De("div",jw,[H("ul",Hw,[(pe(!0),De(Oe,null,Zl(et(a),u=>(pe(),De("li",{key:u.id},[Ne(uw,{giftData:u,onOpenGiftModal:o},null,8,["giftData"])]))),128))]),Ne(gw,{isModalVisible:et(s)(r)},{modalContent:Kl(()=>[Ne($w,{giftData:i.value},null,8,["giftData"])]),_:1},8,["isModalVisible"])]))}};const Oa=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Kw={},Bt=t=>(md("data-v-f893ce41"),t=t(),yd(),t),zw={class:"lds-roller"},Gw=Bt(()=>H("div",null,null,-1)),Ww=Bt(()=>H("div",null,null,-1)),Qw=Bt(()=>H("div",null,null,-1)),Yw=Bt(()=>H("div",null,null,-1)),Xw=Bt(()=>H("div",null,null,-1)),Jw=Bt(()=>H("div",null,null,-1)),Zw=Bt(()=>H("div",null,null,-1)),eE=Bt(()=>H("div",null,null,-1)),tE=[Gw,Ww,Qw,Yw,Xw,Jw,Zw,eE];function nE(t,e){return pe(),De("div",zw,tE)}const sE=Oa(Kw,[["render",nE],["__scopeId","data-v-f893ce41"]]),rE={class:"flex items-center justify-center w-full h-[40vh]"},iE={key:1,class:"italic text-center"},oE={__name:"GiftListView",setup(t){const e=xn([]),n=xn(!1);return Uo(async()=>{n.value=!0;try{(await ew(U0(iw,"gifts"))).forEach(i=>{const o={id:i.id,...i.data()};e.value.push(o)})}finally{n.value=!1}}),(r,i)=>(pe(),De(Oe,null,[e.value.length&&!n.value?(pe(),ds(qw,{key:0,giftList:e.value,isGiftListLoading:n.value},null,8,["giftList","isGiftListLoading"])):Xt("",!0),H("div",rE,[n.value?(pe(),ds(sE,{key:0})):Xt("",!0),e.value.length===0&&!n.value?(pe(),De("p",iE," Erro ao carregar a lista de presentes! Manda um zap pra me avisar que t\xE1 fora do ar! ")):Xt("",!0)])],64))}},aE={},cE={class:"p-2 mb-6 bg-white shadow-lg"},lE=H("p",{class:"w-full text-2xl font-semibold text-center text-primary"}," Open House Lu&Thalles \u{1F3E0} ",-1),uE=[lE];function hE(t,e){return pe(),De("header",cE,uE)}const fE=Oa(aE,[["render",hE]]),dE={},pE=up('<div class="flex items-center gap-2"><h1 class="text-xl font-semibold">Ol\xE1 migos, tudo certo?</h1><img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" alt="wave" class="h-8"></div><p class="mt-2"> Voc\xEAs s\xE3o pessoas muito especiais para n\xF3s! \u{1F499} Por isso, \xE9 um orgulho pra gente convidamos voc\xEAs para o nosso <strong class="text-primary">open house</strong>! </p><p class="mt-2"> Vamos comemorar essa nossa nova conquista juntos em uma noite regadas a muita pizza, vinho e jogos! \u{1F601} </p><p class="mt-2"> A comida boa e a hospitalidade \xE9 por nossa conta, mas que tal ajudar esse casal que est\xE1 iniciando nesse rol\xEA de morar junto com <strong class="text-primary">um mimo</strong>? hehe. Segue uma listinha de presentes: </p>',4);function gE(t,e){return pE}const mE=Oa(dE,[["render",gE]]),yE={class:"p-8 mx-auto max-w-7xl"},vE={__name:"App",setup(t){return(e,n)=>(pe(),De("div",null,[Ne(fE),H("div",yE,[Ne(mE),Ne(oE)])]))}};qp(vE).mount("#app");
