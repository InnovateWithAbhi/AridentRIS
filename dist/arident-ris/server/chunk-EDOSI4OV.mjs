import './polyfills.server.mjs';
import{$ as x3,A as d,B as _,C as K,D as u,E as G2,F as j2,G as q2,H as x2,I as b,J as d3,L as L3,P as p3,R as M3,T as C1,U as N2,V as U,W as h3,X as g1,Z as C3,_ as g3,a as i3,b as o3,c as r3,ca as N3,d as f3,e as I2,f as p2,g as M2,ga as b3,h as n2,i as N,j as h2,ja as y3,k,l as O2,m as m3,n as z3,o as R2,p as C2,q as B2,r as a2,s as x,t as H2,u as g2,v as I,w as h1,x as u3,y as U2,z as r}from"./chunk-KXK2QBKB.mjs";import{a as o,b as p}from"./chunk-5XUXGTUW.mjs";var v3=()=>{},H1={},Y3={},K3=null,Q3={mark:v3,measure:v3};try{typeof window<"u"&&(H1=window),typeof document<"u"&&(Y3=document),typeof MutationObserver<"u"&&(K3=MutationObserver),typeof performance<"u"&&(Q3=performance)}catch{}var{userAgent:w3=""}=H1.navigator||{},q=H1,C=Y3,S3=K3,W2=Q3,E8=!!q.document,B=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",J3=~w3.indexOf("MSIE")||~w3.indexOf("Trident/"),g="classic",Z3="duotone",w="sharp",S="sharp-duotone",n0=[g,Z3,w,S],a0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},A3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},t0=["kit"],i0=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,o0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,r0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},f0={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},m0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},z0={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},u0={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},d0={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},c4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},L0=["solid","regular","light","thin","duotone","brands"],e4=[1,2,3,4,5,6,7,8,9,10],p0=e4.concat([11,12,13,14,15,16,17,18,19,20]),b2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},M0=[...Object.keys(z0),...L0,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",b2.GROUP,b2.SWAP_OPACITY,b2.PRIMARY,b2.SECONDARY].concat(e4.map(e=>"".concat(e,"x"))).concat(p0.map(e=>"w-".concat(e))),h0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},C0={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},g0={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},k3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},O="___FONT_AWESOME___",w1=16,l4="fa",s4="svg-inline--fa",c2="data-fa-i2svg",S1="data-fa-pseudo-element",x0="data-fa-pseudo-element-pending",U1="data-prefix",G1="data-icon",_3="fontawesome-i2svg",N0="async",b0=["HTML","HEAD","STYLE","SCRIPT"],n4=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),a4=[g,w,S];function k2(e){return new Proxy(e,{get(c,l){return l in c?c[l]:c[g]}})}var t4=o({},c4);t4[g]=o(o(o({},c4[g]),A3.kit),A3["kit-duotone"]);var J=k2(t4),A1=o({},d0);A1[g]=o(o(o({},A1[g]),k3.kit),k3["kit-duotone"]);var S2=k2(A1),k1=o({},u0);k1[g]=o(o({},k1[g]),g0.kit);var Z=k2(k1),_1=o({},m0);_1[g]=o(o({},_1[g]),C0.kit);var y0=k2(_1),v0=i0,i4="fa-layers-text",w0=o0,S0=o({},a0),P8=k2(S0),A0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],x1=b2,o2=new Set;Object.keys(S2[g]).map(o2.add.bind(o2));Object.keys(S2[w]).map(o2.add.bind(o2));Object.keys(S2[S]).map(o2.add.bind(o2));var k0=[...t0,...M0],v2=q.FontAwesomeConfig||{};function _0(e){var c=C.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function D0(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(c=>{let[l,s]=c,n=D0(_0(l));n!=null&&(v2[s]=n)});var o4={styleDefault:"solid",familyDefault:"classic",cssPrefix:l4,replacementClass:s4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};v2.familyPrefix&&(v2.cssPrefix=v2.familyPrefix);var r2=o(o({},o4),v2);r2.autoReplaceSvg||(r2.observeMutations=!1);var z={};Object.keys(o4).forEach(e=>{Object.defineProperty(z,e,{enumerable:!0,set:function(c){r2[e]=c,w2.forEach(l=>l(z))},get:function(){return r2[e]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){r2.cssPrefix=e,w2.forEach(c=>c(z))},get:function(){return r2.cssPrefix}});q.FontAwesomeConfig=z;var w2=[];function F0(e){return w2.push(e),()=>{w2.splice(w2.indexOf(e),1)}}var G=w1,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function E0(e){if(!e||!B)return;let c=C.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;let l=C.head.childNodes,s=null;for(let n=l.length-1;n>-1;n--){let a=l[n],t=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(s=a)}return C.head.insertBefore(c,s),e}var P0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function A2(){let e=12,c="";for(;e-- >0;)c+=P0[Math.random()*62|0];return c}function f2(e){let c=[];for(let l=(e||[]).length>>>0;l--;)c[l]=e[l];return c}function j1(e){return e.classList?f2(e.classList):(e.getAttribute("class")||"").split(" ").filter(c=>c)}function r4(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function V0(e){return Object.keys(e||{}).reduce((c,l)=>c+"".concat(l,'="').concat(r4(e[l]),'" '),"").trim()}function Q2(e){return Object.keys(e||{}).reduce((c,l)=>c+"".concat(l,": ").concat(e[l].trim(),";"),"")}function q1(e){return e.size!==E.size||e.x!==E.x||e.y!==E.y||e.rotate!==E.rotate||e.flipX||e.flipY}function T0(e){let{transform:c,containerWidth:l,iconWidth:s}=e,n={transform:"translate(".concat(l/2," 256)")},a="translate(".concat(c.x*32,", ").concat(c.y*32,") "),t="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),i="rotate(".concat(c.rotate," 0 0)"),f={transform:"".concat(a," ").concat(t," ").concat(i)},m={transform:"translate(".concat(s/2*-1," -256)")};return{outer:n,inner:f,path:m}}function I0(e){let{transform:c,width:l=w1,height:s=w1,startCentered:n=!1}=e,a="";return n&&J3?a+="translate(".concat(c.x/G-l/2,"em, ").concat(c.y/G-s/2,"em) "):n?a+="translate(calc(-50% + ".concat(c.x/G,"em), calc(-50% + ").concat(c.y/G,"em)) "):a+="translate(".concat(c.x/G,"em, ").concat(c.y/G,"em) "),a+="scale(".concat(c.size/G*(c.flipX?-1:1),", ").concat(c.size/G*(c.flipY?-1:1),") "),a+="rotate(".concat(c.rotate,"deg) "),a}var O0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function f4(){let e=l4,c=s4,l=z.cssPrefix,s=z.replacementClass,n=O0;if(l!==e||s!==c){let a=new RegExp("\\.".concat(e,"\\-"),"g"),t=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(c),"g");n=n.replace(a,".".concat(l,"-")).replace(t,"--".concat(l,"-")).replace(i,".".concat(s))}return n}var D3=!1;function N1(){z.autoAddCss&&!D3&&(E0(f4()),D3=!0)}var R0={mixout(){return{dom:{css:f4,insertCss:N1}}},hooks(){return{beforeDOMElementCreation(){N1()},beforeI2svg(){N1()}}}},R=q||{};R[O]||(R[O]={});R[O].styles||(R[O].styles={});R[O].hooks||(R[O].hooks={});R[O].shims||(R[O].shims=[]);var P=R[O],m4=[],z4=function(){C.removeEventListener("DOMContentLoaded",z4),Y2=1,m4.map(e=>e())},Y2=!1;B&&(Y2=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Y2||C.addEventListener("DOMContentLoaded",z4));function B0(e){B&&(Y2?setTimeout(e,0):m4.push(e))}function _2(e){let{tag:c,attributes:l={},children:s=[]}=e;return typeof e=="string"?r4(e):"<".concat(c," ").concat(V0(l),">").concat(s.map(_2).join(""),"</").concat(c,">")}function F3(e,c,l){if(e&&e[c]&&e[c][l])return{prefix:c,iconName:l,icon:e[c][l]}}var H0=function(c,l){return function(s,n,a,t){return c.call(l,s,n,a,t)}},b1=function(c,l,s,n){var a=Object.keys(c),t=a.length,i=n!==void 0?H0(l,n):l,f,m,L;for(s===void 0?(f=1,L=c[a[0]]):(f=0,L=s);f<t;f++)m=a[f],L=i(L,c[m],m,c);return L};function U0(e){let c=[],l=0,s=e.length;for(;l<s;){let n=e.charCodeAt(l++);if(n>=55296&&n<=56319&&l<s){let a=e.charCodeAt(l++);(a&64512)==56320?c.push(((n&1023)<<10)+(a&1023)+65536):(c.push(n),l--)}else c.push(n)}return c}function D1(e){let c=U0(e);return c.length===1?c[0].toString(16):null}function G0(e,c){let l=e.length,s=e.charCodeAt(c),n;return s>=55296&&s<=56319&&l>c+1&&(n=e.charCodeAt(c+1),n>=56320&&n<=57343)?(s-55296)*1024+n-56320+65536:s}function E3(e){return Object.keys(e).reduce((c,l)=>{let s=e[l];return!!s.icon?c[s.iconName]=s.icon:c[l]=s,c},{})}function F1(e,c){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:s=!1}=l,n=E3(c);typeof P.hooks.addPack=="function"&&!s?P.hooks.addPack(e,E3(c)):P.styles[e]=o(o({},P.styles[e]||{}),n),e==="fas"&&F1("fa",c)}var{styles:Q,shims:j0}=P,q0={[g]:Object.values(Z[g]),[w]:Object.values(Z[w]),[S]:Object.values(Z[S])},W1=null,u4={},d4={},L4={},p4={},M4={},W0={[g]:Object.keys(J[g]),[w]:Object.keys(J[w]),[S]:Object.keys(J[S])};function $0(e){return~k0.indexOf(e)}function X0(e,c){let l=c.split("-"),s=l[0],n=l.slice(1).join("-");return s===e&&n!==""&&!$0(n)?n:null}var h4=()=>{let e=s=>b1(Q,(n,a,t)=>(n[t]=b1(a,s,{}),n),{});u4=e((s,n,a)=>(n[3]&&(s[n[3]]=a),n[2]&&n[2].filter(i=>typeof i=="number").forEach(i=>{s[i.toString(16)]=a}),s)),d4=e((s,n,a)=>(s[a]=a,n[2]&&n[2].filter(i=>typeof i=="string").forEach(i=>{s[i]=a}),s)),M4=e((s,n,a)=>{let t=n[2];return s[a]=a,t.forEach(i=>{s[i]=a}),s});let c="far"in Q||z.autoFetchSvg,l=b1(j0,(s,n)=>{let a=n[0],t=n[1],i=n[2];return t==="far"&&!c&&(t="fas"),typeof a=="string"&&(s.names[a]={prefix:t,iconName:i}),typeof a=="number"&&(s.unicodes[a.toString(16)]={prefix:t,iconName:i}),s},{names:{},unicodes:{}});L4=l.names,p4=l.unicodes,W1=J2(z.styleDefault,{family:z.familyDefault})};F0(e=>{W1=J2(e.styleDefault,{family:z.familyDefault})});h4();function $1(e,c){return(u4[e]||{})[c]}function Y0(e,c){return(d4[e]||{})[c]}function j(e,c){return(M4[e]||{})[c]}function C4(e){return L4[e]||{prefix:null,iconName:null}}function K0(e){let c=p4[e],l=$1("fas",e);return c||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function W(){return W1}var X1=()=>({prefix:null,iconName:null,rest:[]});function J2(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:l=g}=c,s=J[l][e],n=S2[l][e]||S2[l][s],a=e in P.styles?e:null;return n||a||null}var Q0={[g]:Object.keys(Z[g]),[w]:Object.keys(Z[w]),[S]:Object.keys(Z[S])};function Z2(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:l=!1}=c,s={[g]:"".concat(z.cssPrefix,"-").concat(g),[w]:"".concat(z.cssPrefix,"-").concat(w),[S]:"".concat(z.cssPrefix,"-").concat(S)},n=null,a=g,t=n0.filter(f=>f!==Z3);t.forEach(f=>{(e.includes(s[f])||e.some(m=>Q0[f].includes(m)))&&(a=f)});let i=e.reduce((f,m)=>{let L=X0(z.cssPrefix,m);if(Q[m]?(m=q0[a].includes(m)?y0[a][m]:m,n=m,f.prefix=m):W0[a].indexOf(m)>-1?(n=m,f.prefix=J2(m,{family:a})):L?f.iconName=L:m!==z.replacementClass&&!t.some(h=>m===s[h])&&f.rest.push(m),!l&&f.prefix&&f.iconName){let h=n==="fa"?C4(f.iconName):{},M=j(f.prefix,f.iconName);h.prefix&&(n=null),f.iconName=h.iconName||M||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Q.far&&Q.fas&&!z.autoFetchSvg&&(f.prefix="fas")}return f},X1());return(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(i.prefix="fad"),!i.prefix&&a===w&&(Q.fass||z.autoFetchSvg)&&(i.prefix="fass",i.iconName=j(i.prefix,i.iconName)||i.iconName),!i.prefix&&a===S&&(Q.fasds||z.autoFetchSvg)&&(i.prefix="fasds",i.iconName=j(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||n==="fa")&&(i.prefix=W()||"fas"),i}var E1=class{constructor(){this.definitions={}}add(){for(var c=arguments.length,l=new Array(c),s=0;s<c;s++)l[s]=arguments[s];let n=l.reduce(this._pullDefinitions,{});Object.keys(n).forEach(a=>{this.definitions[a]=o(o({},this.definitions[a]||{}),n[a]),F1(a,n[a]);let t=Z[g][a];t&&F1(t,n[a]),h4()})}reset(){this.definitions={}}_pullDefinitions(c,l){let s=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(s).map(n=>{let{prefix:a,iconName:t,icon:i}=s[n],f=i[2];c[a]||(c[a]={}),f.length>0&&f.forEach(m=>{typeof m=="string"&&(c[a][m]=i)}),c[a][t]=i}),c}},P3=[],t2={},i2={},J0=Object.keys(i2);function Z0(e,c){let{mixoutsTo:l}=c;return P3=e,t2={},Object.keys(i2).forEach(s=>{J0.indexOf(s)===-1&&delete i2[s]}),P3.forEach(s=>{let n=s.mixout?s.mixout():{};if(Object.keys(n).forEach(a=>{typeof n[a]=="function"&&(l[a]=n[a]),typeof n[a]=="object"&&Object.keys(n[a]).forEach(t=>{l[a]||(l[a]={}),l[a][t]=n[a][t]})}),s.hooks){let a=s.hooks();Object.keys(a).forEach(t=>{t2[t]||(t2[t]=[]),t2[t].push(a[t])})}s.provides&&s.provides(i2)}),l}function P1(e,c){for(var l=arguments.length,s=new Array(l>2?l-2:0),n=2;n<l;n++)s[n-2]=arguments[n];return(t2[e]||[]).forEach(t=>{c=t.apply(null,[c,...s])}),c}function e2(e){for(var c=arguments.length,l=new Array(c>1?c-1:0),s=1;s<c;s++)l[s-1]=arguments[s];(t2[e]||[]).forEach(a=>{a.apply(null,l)})}function $(){let e=arguments[0],c=Array.prototype.slice.call(arguments,1);return i2[e]?i2[e].apply(null,c):void 0}function V1(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:c}=e,l=e.prefix||W();if(c)return c=j(l,c)||c,F3(g4.definitions,l,c)||F3(P.styles,l,c)}var g4=new E1,c6=()=>{z.autoReplaceSvg=!1,z.observeMutations=!1,e2("noAuto")},e6={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(e2("beforeI2svg",e),$("pseudoElements2svg",e),$("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:c}=e;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,B0(()=>{s6({autoReplaceSvgRoot:c}),e2("watch",e)})}},l6={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:j(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let c=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],l=J2(e[0]);return{prefix:l,iconName:j(l,c)||c}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(v0))){let c=Z2(e.split(" "),{skipLookups:!0});return{prefix:c.prefix||W(),iconName:j(c.prefix,c.iconName)||c.iconName}}if(typeof e=="string"){let c=W();return{prefix:c,iconName:j(c,e)||e}}}},A={noAuto:c6,config:z,dom:e6,parse:l6,library:g4,findIconDefinition:V1,toHtml:_2},s6=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:c=C}=e;(Object.keys(P.styles).length>0||z.autoFetchSvg)&&B&&z.autoReplaceSvg&&A.dom.i2svg({node:c})};function c1(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(l=>_2(l))}}),Object.defineProperty(e,"node",{get:function(){if(!B)return;let l=C.createElement("div");return l.innerHTML=e.html,l.children}}),e}function n6(e){let{children:c,main:l,mask:s,attributes:n,styles:a,transform:t}=e;if(q1(t)&&l.found&&!s.found){let{width:i,height:f}=l,m={x:i/f/2,y:.5};n.style=Q2(p(o({},a),{"transform-origin":"".concat(m.x+t.x/16,"em ").concat(m.y+t.y/16,"em")}))}return[{tag:"svg",attributes:n,children:c}]}function a6(e){let{prefix:c,iconName:l,children:s,attributes:n,symbol:a}=e,t=a===!0?"".concat(c,"-").concat(z.cssPrefix,"-").concat(l):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(o({},n),{id:t}),children:s}]}]}function Y1(e){let{icons:{main:c,mask:l},prefix:s,iconName:n,transform:a,symbol:t,title:i,maskId:f,titleId:m,extra:L,watchable:h=!1}=e,{width:M,height:y}=l.found?l:c,H=s==="fak",Y=[z.replacementClass,n?"".concat(z.cssPrefix,"-").concat(n):""].filter(s2=>L.classes.indexOf(s2)===-1).filter(s2=>s2!==""||!!s2).concat(L.classes).join(" "),D={children:[],attributes:p(o({},L.attributes),{"data-prefix":s,"data-icon":n,class:Y,role:L.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(y)})},T=H&&!~L.classes.indexOf("fa-fw")?{width:"".concat(M/y*16*.0625,"em")}:{};h&&(D.attributes[c2]=""),i&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(m||A2())},children:[i]}),delete D.attributes.title);let v=p(o({},D),{prefix:s,iconName:n,main:c,mask:l,maskId:f,transform:a,symbol:t,styles:o(o({},T),L.styles)}),{children:F,attributes:l2}=l.found&&c.found?$("generateAbstractMask",v)||{children:[],attributes:{}}:$("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=F,v.attributes=l2,t?a6(v):n6(v)}function V3(e){let{content:c,width:l,height:s,transform:n,title:a,extra:t,watchable:i=!1}=e,f=p(o(o({},t.attributes),a?{title:a}:{}),{class:t.classes.join(" ")});i&&(f[c2]="");let m=o({},t.styles);q1(n)&&(m.transform=I0({transform:n,startCentered:!0,width:l,height:s}),m["-webkit-transform"]=m.transform);let L=Q2(m);L.length>0&&(f.style=L);let h=[];return h.push({tag:"span",attributes:f,children:[c]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function t6(e){let{content:c,title:l,extra:s}=e,n=p(o(o({},s.attributes),l?{title:l}:{}),{class:s.classes.join(" ")}),a=Q2(s.styles);a.length>0&&(n.style=a);let t=[];return t.push({tag:"span",attributes:n,children:[c]}),l&&t.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),t}var{styles:y1}=P;function T1(e){let c=e[0],l=e[1],[s]=e.slice(4),n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(x1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(x1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(x1.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:c,height:l,icon:n}}var i6={found:!1,width:512,height:512};function o6(e,c){!n4&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function I1(e,c){let l=c;return c==="fa"&&z.styleDefault!==null&&(c=W()),new Promise((s,n)=>{if(l==="fa"){let a=C4(e)||{};e=a.iconName||e,c=a.prefix||c}if(e&&c&&y1[c]&&y1[c][e]){let a=y1[c][e];return s(T1(a))}o6(e,c),s(p(o({},i6),{icon:z.showMissingIcons&&e?$("missingIconAbstract")||{}:{}}))})}var T3=()=>{},O1=z.measurePerformance&&W2&&W2.mark&&W2.measure?W2:{mark:T3,measure:T3},y2='FA "6.6.0"',r6=e=>(O1.mark("".concat(y2," ").concat(e," begins")),()=>x4(e)),x4=e=>{O1.mark("".concat(y2," ").concat(e," ends")),O1.measure("".concat(y2," ").concat(e),"".concat(y2," ").concat(e," begins"),"".concat(y2," ").concat(e," ends"))},K1={begin:r6,end:x4},$2=()=>{};function I3(e){return typeof(e.getAttribute?e.getAttribute(c2):null)=="string"}function f6(e){let c=e.getAttribute?e.getAttribute(U1):null,l=e.getAttribute?e.getAttribute(G1):null;return c&&l}function m6(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function z6(){return z.autoReplaceSvg===!0?X2.replace:X2[z.autoReplaceSvg]||X2.replace}function u6(e){return C.createElementNS("http://www.w3.org/2000/svg",e)}function d6(e){return C.createElement(e)}function N4(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:l=e.tag==="svg"?u6:d6}=c;if(typeof e=="string")return C.createTextNode(e);let s=l(e.tag);return Object.keys(e.attributes||[]).forEach(function(a){s.setAttribute(a,e.attributes[a])}),(e.children||[]).forEach(function(a){s.appendChild(N4(a,{ceFn:l}))}),s}function L6(e){let c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var X2={replace:function(e){let c=e[0];if(c.parentNode)if(e[1].forEach(l=>{c.parentNode.insertBefore(N4(l),c)}),c.getAttribute(c2)===null&&z.keepOriginalSource){let l=C.createComment(L6(c));c.parentNode.replaceChild(l,c)}else c.remove()},nest:function(e){let c=e[0],l=e[1];if(~j1(c).indexOf(z.replacementClass))return X2.replace(e);let s=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){let a=l[0].attributes.class.split(" ").reduce((t,i)=>(i===z.replacementClass||i.match(s)?t.toSvg.push(i):t.toNode.push(i),t),{toNode:[],toSvg:[]});l[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?c.removeAttribute("class"):c.setAttribute("class",a.toNode.join(" "))}let n=l.map(a=>_2(a)).join(`
`);c.setAttribute(c2,""),c.innerHTML=n}};function O3(e){e()}function b4(e,c){let l=typeof c=="function"?c:$2;if(e.length===0)l();else{let s=O3;z.mutateApproach===N0&&(s=q.requestAnimationFrame||O3),s(()=>{let n=z6(),a=K1.begin("mutate");e.map(n),a(),l()})}}var Q1=!1;function y4(){Q1=!0}function R1(){Q1=!1}var K2=null;function R3(e){if(!S3||!z.observeMutations)return;let{treeCallback:c=$2,nodeCallback:l=$2,pseudoElementsCallback:s=$2,observeMutationsRoot:n=C}=e;K2=new S3(a=>{if(Q1)return;let t=W();f2(a).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!I3(i.addedNodes[0])&&(z.searchPseudoElements&&s(i.target),c(i.target)),i.type==="attributes"&&i.target.parentNode&&z.searchPseudoElements&&s(i.target.parentNode),i.type==="attributes"&&I3(i.target)&&~A0.indexOf(i.attributeName))if(i.attributeName==="class"&&f6(i.target)){let{prefix:f,iconName:m}=Z2(j1(i.target));i.target.setAttribute(U1,f||t),m&&i.target.setAttribute(G1,m)}else m6(i.target)&&l(i.target)})}),B&&K2.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function p6(){K2&&K2.disconnect()}function M6(e){let c=e.getAttribute("style"),l=[];return c&&(l=c.split(";").reduce((s,n)=>{let a=n.split(":"),t=a[0],i=a.slice(1);return t&&i.length>0&&(s[t]=i.join(":").trim()),s},{})),l}function h6(e){let c=e.getAttribute("data-prefix"),l=e.getAttribute("data-icon"),s=e.innerText!==void 0?e.innerText.trim():"",n=Z2(j1(e));return n.prefix||(n.prefix=W()),c&&l&&(n.prefix=c,n.iconName=l),n.iconName&&n.prefix||(n.prefix&&s.length>0&&(n.iconName=Y0(n.prefix,e.innerText)||$1(n.prefix,D1(e.innerText))),!n.iconName&&z.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function C6(e){let c=f2(e.attributes).reduce((n,a)=>(n.name!=="class"&&n.name!=="style"&&(n[a.name]=a.value),n),{}),l=e.getAttribute("title"),s=e.getAttribute("data-fa-title-id");return z.autoA11y&&(l?c["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(s||A2()):(c["aria-hidden"]="true",c.focusable="false")),c}function g6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function B3(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:l,prefix:s,rest:n}=h6(e),a=C6(e),t=P1("parseNodeAttributes",{},e),i=c.styleParser?M6(e):[];return o({iconName:l,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:s,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:i,attributes:a}},t)}var{styles:x6}=P;function v4(e){let c=z.autoReplaceSvg==="nest"?B3(e,{styleParser:!1}):B3(e);return~c.extra.classes.indexOf(i4)?$("generateLayersText",e,c):$("generateSvgReplacementMutation",e,c)}var V=new Set;a4.map(e=>{V.add("fa-".concat(e))});Object.keys(J[g]).map(V.add.bind(V));Object.keys(J[w]).map(V.add.bind(V));Object.keys(J[S]).map(V.add.bind(V));V=[...V];function H3(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();let l=C.documentElement.classList,s=L=>l.add("".concat(_3,"-").concat(L)),n=L=>l.remove("".concat(_3,"-").concat(L)),a=z.autoFetchSvg?V:a4.map(L=>"fa-".concat(L)).concat(Object.keys(x6));a.includes("fa")||a.push("fa");let t=[".".concat(i4,":not([").concat(c2,"])")].concat(a.map(L=>".".concat(L,":not([").concat(c2,"])"))).join(", ");if(t.length===0)return Promise.resolve();let i=[];try{i=f2(e.querySelectorAll(t))}catch{}if(i.length>0)s("pending"),n("complete");else return Promise.resolve();let f=K1.begin("onTree"),m=i.reduce((L,h)=>{try{let M=v4(h);M&&L.push(M)}catch(M){n4||M.name==="MissingIcon"&&console.error(M)}return L},[]);return new Promise((L,h)=>{Promise.all(m).then(M=>{b4(M,()=>{s("active"),s("complete"),n("pending"),typeof c=="function"&&c(),f(),L()})}).catch(M=>{f(),h(M)})})}function N6(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;v4(e).then(l=>{l&&b4([l],c)})}function b6(e){return function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(c||{}).icon?c:V1(c||{}),{mask:n}=l;return n&&(n=(n||{}).icon?n:V1(n||{})),e(s,p(o({},l),{mask:n}))}}var y6=function(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=E,symbol:s=!1,mask:n=null,maskId:a=null,title:t=null,titleId:i=null,classes:f=[],attributes:m={},styles:L={}}=c;if(!e)return;let{prefix:h,iconName:M,icon:y}=e;return c1(o({type:"icon"},e),()=>(e2("beforeDOMElementCreation",{iconDefinition:e,params:c}),z.autoA11y&&(t?m["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(i||A2()):(m["aria-hidden"]="true",m.focusable="false")),Y1({icons:{main:T1(y),mask:n?T1(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:M,transform:o(o({},E),l),symbol:s,title:t,maskId:a,titleId:i,extra:{attributes:m,styles:L,classes:f}})))},v6={mixout(){return{icon:b6(y6)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=H3,e.nodeCallback=N6,e}}},provides(e){e.i2svg=function(c){let{node:l=C,callback:s=()=>{}}=c;return H3(l,s)},e.generateSvgReplacementMutation=function(c,l){let{iconName:s,title:n,titleId:a,prefix:t,transform:i,symbol:f,mask:m,maskId:L,extra:h}=l;return new Promise((M,y)=>{Promise.all([I1(s,t),m.iconName?I1(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(H=>{let[Y,D]=H;M([c,Y1({icons:{main:Y,mask:D},prefix:t,iconName:s,transform:i,symbol:f,maskId:L,title:n,titleId:a,extra:h,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(c){let{children:l,attributes:s,main:n,transform:a,styles:t}=c,i=Q2(t);i.length>0&&(s.style=i);let f;return q1(a)&&(f=$("generateAbstractTransformGrouping",{main:n,transform:a,containerWidth:n.width,iconWidth:n.width})),l.push(f||n.icon),{children:l,attributes:s}}}},w6={mixout(){return{layer(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:l=[]}=c;return c1({type:"layer"},()=>{e2("beforeDOMElementCreation",{assembler:e,params:c});let s=[];return e(n=>{Array.isArray(n)?n.map(a=>{s=s.concat(a.abstract)}):s=s.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers"),...l].join(" ")},children:s}]})}}}},S6={mixout(){return{counter(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:l=null,classes:s=[],attributes:n={},styles:a={}}=c;return c1({type:"counter",content:e},()=>(e2("beforeDOMElementCreation",{content:e,params:c}),t6({content:e.toString(),title:l,extra:{attributes:n,styles:a,classes:["".concat(z.cssPrefix,"-layers-counter"),...s]}})))}}}},A6={mixout(){return{text(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=E,title:s=null,classes:n=[],attributes:a={},styles:t={}}=c;return c1({type:"text",content:e},()=>(e2("beforeDOMElementCreation",{content:e,params:c}),V3({content:e,transform:o(o({},E),l),title:s,extra:{attributes:a,styles:t,classes:["".concat(z.cssPrefix,"-layers-text"),...n]}})))}}},provides(e){e.generateLayersText=function(c,l){let{title:s,transform:n,extra:a}=l,t=null,i=null;if(J3){let f=parseInt(getComputedStyle(c).fontSize,10),m=c.getBoundingClientRect();t=m.width/f,i=m.height/f}return z.autoA11y&&!s&&(a.attributes["aria-hidden"]="true"),Promise.resolve([c,V3({content:c.innerHTML,width:t,height:i,transform:n,title:s,extra:a,watchable:!0})])}}},k6=new RegExp('"',"ug"),U3=[1105920,1112319],G3=o(o(o({FontAwesome:{normal:"fas",400:"fas"}},f0),r0),h0),B1=Object.keys(G3).reduce((e,c)=>(e[c.toLowerCase()]=G3[c],e),{}),_6=Object.keys(B1).reduce((e,c)=>{let l=B1[c];return e[c]=l[900]||[...Object.entries(l)][0][1],e},{});function D6(e){let c=e.replace(k6,""),l=G0(c,0),s=l>=U3[0]&&l<=U3[1],n=c.length===2?c[0]===c[1]:!1;return{value:D1(n?c[0]:c),isSecondary:s||n}}function F6(e,c){let l=e.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(c),n=isNaN(s)?"normal":s;return(B1[l]||{})[n]||_6[l]}function j3(e,c){let l="".concat(x0).concat(c.replace(":","-"));return new Promise((s,n)=>{if(e.getAttribute(l)!==null)return s();let t=f2(e.children).filter(M=>M.getAttribute(S1)===c)[0],i=q.getComputedStyle(e,c),f=i.getPropertyValue("font-family"),m=f.match(w0),L=i.getPropertyValue("font-weight"),h=i.getPropertyValue("content");if(t&&!m)return e.removeChild(t),s();if(m&&h!=="none"&&h!==""){let M=i.getPropertyValue("content"),y=F6(f,L),{value:H,isSecondary:Y}=D6(M),D=m[0].startsWith("FontAwesome"),T=$1(y,H),v=T;if(D){let F=K0(H);F.iconName&&F.prefix&&(T=F.iconName,y=F.prefix)}if(T&&!Y&&(!t||t.getAttribute(U1)!==y||t.getAttribute(G1)!==v)){e.setAttribute(l,v),t&&e.removeChild(t);let F=g6(),{extra:l2}=F;l2.attributes[S1]=c,I1(T,y).then(s2=>{let l0=Y1(p(o({},F),{icons:{main:s2,mask:X1()},prefix:y,iconName:v,extra:l2,watchable:!0})),M1=C.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?e.insertBefore(M1,e.firstChild):e.appendChild(M1),M1.outerHTML=l0.map(s0=>_2(s0)).join(`
`),e.removeAttribute(l),s()}).catch(n)}else s()}else s()})}function E6(e){return Promise.all([j3(e,"::before"),j3(e,"::after")])}function P6(e){return e.parentNode!==document.head&&!~b0.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(S1)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function q3(e){if(B)return new Promise((c,l)=>{let s=f2(e.querySelectorAll("*")).filter(P6).map(E6),n=K1.begin("searchPseudoElements");y4(),Promise.all(s).then(()=>{n(),R1(),c()}).catch(()=>{n(),R1(),l()})})}var V6={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=q3,e}}},provides(e){e.pseudoElements2svg=function(c){let{node:l=C}=c;z.searchPseudoElements&&q3(l)}}},W3=!1,T6={mixout(){return{dom:{unwatch(){y4(),W3=!0}}}},hooks(){return{bootstrap(){R3(P1("mutationObserverCallbacks",{}))},noAuto(){p6()},watch(e){let{observeMutationsRoot:c}=e;W3?R1():R3(P1("mutationObserverCallbacks",{observeMutationsRoot:c}))}}}},$3=e=>{let c={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((l,s)=>{let n=s.toLowerCase().split("-"),a=n[0],t=n.slice(1).join("-");if(a&&t==="h")return l.flipX=!0,l;if(a&&t==="v")return l.flipY=!0,l;if(t=parseFloat(t),isNaN(t))return l;switch(a){case"grow":l.size=l.size+t;break;case"shrink":l.size=l.size-t;break;case"left":l.x=l.x-t;break;case"right":l.x=l.x+t;break;case"up":l.y=l.y-t;break;case"down":l.y=l.y+t;break;case"rotate":l.rotate=l.rotate+t;break}return l},c)},I6={mixout(){return{parse:{transform:e=>$3(e)}}},hooks(){return{parseNodeAttributes(e,c){let l=c.getAttribute("data-fa-transform");return l&&(e.transform=$3(l)),e}}},provides(e){e.generateAbstractTransformGrouping=function(c){let{main:l,transform:s,containerWidth:n,iconWidth:a}=c,t={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(s.x*32,", ").concat(s.y*32,") "),f="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),m="rotate(".concat(s.rotate," 0 0)"),L={transform:"".concat(i," ").concat(f," ").concat(m)},h={transform:"translate(".concat(a/2*-1," -256)")},M={outer:t,inner:L,path:h};return{tag:"g",attributes:o({},M.outer),children:[{tag:"g",attributes:o({},M.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:o(o({},l.icon.attributes),M.path)}]}]}}}},v1={x:0,y:0,width:"100%",height:"100%"};function X3(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||c)&&(e.attributes.fill="black"),e}function O6(e){return e.tag==="g"?e.children:[e]}var R6={hooks(){return{parseNodeAttributes(e,c){let l=c.getAttribute("data-fa-mask"),s=l?Z2(l.split(" ").map(n=>n.trim())):X1();return s.prefix||(s.prefix=W()),e.mask=s,e.maskId=c.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(c){let{children:l,attributes:s,main:n,mask:a,maskId:t,transform:i}=c,{width:f,icon:m}=n,{width:L,icon:h}=a,M=T0({transform:i,containerWidth:L,iconWidth:f}),y={tag:"rect",attributes:p(o({},v1),{fill:"white"})},H=m.children?{children:m.children.map(X3)}:{},Y={tag:"g",attributes:o({},M.inner),children:[X3(o({tag:m.tag,attributes:o(o({},m.attributes),M.path)},H))]},D={tag:"g",attributes:o({},M.outer),children:[Y]},T="mask-".concat(t||A2()),v="clip-".concat(t||A2()),F={tag:"mask",attributes:p(o({},v1),{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,D]},l2={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:O6(h)},F]};return l.push(l2,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(T,")")},v1)}),{children:l,attributes:s}}}},B6={provides(e){let c=!1;q.matchMedia&&(c=q.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let l=[],s={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:p(o({},s),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let a=p(o({},n),{attributeName:"opacity"}),t={tag:"circle",attributes:p(o({},s),{cx:"256",cy:"364",r:"28"}),children:[]};return c||t.children.push({tag:"animate",attributes:p(o({},n),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(o({},a),{values:"1;0;1;1;0;1;"})}),l.push(t),l.push({tag:"path",attributes:p(o({},s),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:c?[]:[{tag:"animate",attributes:p(o({},a),{values:"1;0;0;0;0;1;"})}]}),c||l.push({tag:"path",attributes:p(o({},s),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(o({},a),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},H6={hooks(){return{parseNodeAttributes(e,c){let l=c.getAttribute("data-fa-symbol"),s=l===null?!1:l===""?!0:l;return e.symbol=s,e}}}},U6=[R0,v6,w6,S6,A6,V6,T6,I6,R6,B6,H6];Z0(U6,{mixoutsTo:A});var V8=A.noAuto,G6=A.config,T8=A.library,j6=A.dom,q6=A.parse,I8=A.findIconDefinition,O8=A.toHtml,W6=A.icon,R8=A.layer,$6=A.text,X6=A.counter;var w4=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=h2({type:c}),c.\u0275inj=M2({});let e=c;return e})();var K6={prefix:"fas",iconName:"mug-saucer",icon:[640,512,["coffee"],"f0f4","M96 64c0-17.7 14.3-32 32-32l320 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L96 64zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128zM32 416l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},S4=K6;var Q6=(e,c)=>({hidden:e,block:c}),e1=class e{isMenuOpen=!1;toggleMenu(){this.isMenuOpen=!this.isMenuOpen}static \u0275fac=function(l){return new(l||e)};static \u0275cmp=N({type:e,selectors:[["app-navbar"]],standalone:!0,features:[b],decls:28,vars:4,consts:[[1,"bg-white","dark:bg-gray-900","fixed","w-full","z-20","top-0","start-0","border-b","border-gray-200","dark:border-gray-600"],[1,"max-w-screen-xl","flex","flex-wrap","items-center","justify-between","mx-auto","p-4"],["href","/home",1,"flex","items-center","space-x-3","rtl:space-x-reverse"],["src","assets/logo-icon.svg","alt","Flowbite Logo",1,"h-8"],[1,"self-center","text-2xl","font-semibold","whitespace-nowrap","dark:text-white"],[1,"flex","md:order-2","space-x-3","md:space-x-0","rtl:space-x-reverse"],["type","button",1,"text-white","bg-orange-500","hover:bg-orange-600","focus:ring-4","focus:outline-none","focus:ring-orange-300","font-medium","rounded-lg","text-sm","px-4","py-2","text-center","dark:bg-orange-600","dark:hover:bg-orange-500","dark:focus:ring-orange-600"],["data-collapse-toggle","navbar-sticky","type","button","aria-controls","navbar-sticky","aria-expanded","false",1,"inline-flex","items-center","p-2","w-10","h-10","justify-center","text-sm","text-gray-500","rounded-lg","md:hidden","hover:bg-gray-100","focus:outline-none","focus:ring-2","focus:ring-gray-200","dark:text-gray-400","dark:hover:bg-gray-700","dark:focus:ring-gray-600",3,"click"],[1,"sr-only"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 17 14",1,"w-5","h-5"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M1 1h15M1 7h15M1 13h15"],["id","navbar-sticky",1,"items-center","justify-between","w-full","md:flex","md:w-auto","md:order-1",3,"ngClass"],[1,"flex","flex-col","p-4","md:p-0","mt-4","font-medium","border","border-gray-100","rounded-lg","bg-gray-50","md:space-x-8","rtl:space-x-reverse","md:flex-row","md:mt-0","md:border-0","md:bg-white","dark:bg-gray-800","md:dark:bg-gray-900","dark:border-gray-700"],["href","/home","aria-current","page",1,"block","py-2","px-3","text-white","bg-orange-500","rounded","md:bg-transparent","md:text-orange-500","md:p-0","md:dark:text-orange-500"],["href","/about",1,"block","py-2","px-3","text-gray-900","rounded","hover:bg-gray-100","md:hover:bg-transparent","md:hover:text-orange-500","md:p-0","md:dark:hover:text-orange-400","dark:text-white","dark:hover:bg-gray-700","dark:hover:text-white","md:dark:hover:bg-transparent","dark:border-gray-700"],["href","/products",1,"block","py-2","px-3","text-gray-900","rounded","hover:bg-gray-100","md:hover:bg-transparent","md:hover:text-orange-500","md:p-0","md:dark:hover:text-orange-400","dark:text-white","dark:hover:bg-gray-700","dark:hover:text-white","md:dark:hover:bg-transparent","dark:border-gray-700"],["href","/contact",1,"block","py-2","px-3","text-gray-900","rounded","hover:bg-gray-100","md:hover:bg-transparent","md:hover:text-orange-500","md:p-0","md:dark:hover:text-orange-400","dark:text-white","dark:hover:bg-gray-700","dark:hover:text-white","md:dark:hover:bg-transparent","dark:border-gray-700"]],template:function(l,s){l&1&&(r(0,"nav",0)(1,"div",1)(2,"a",2),_(3,"img",3),r(4,"span",4),u(5,"AridentRIS"),d()(),r(6,"div",5)(7,"button",6),u(8," Get started "),d(),r(9,"button",7),K("click",function(){return s.toggleMenu()}),r(10,"span",8),u(11,"Open main menu"),d(),m3(),r(12,"svg",9),_(13,"path",10),d()()(),z3(),r(14,"div",11)(15,"ul",12)(16,"li")(17,"a",13),u(18,"Home"),d()(),r(19,"li")(20,"a",14),u(21,"About"),d()(),r(22,"li")(23,"a",15),u(24,"Products"),d()(),r(25,"li")(26,"a",16),u(27,"Contact"),d()()()()()()),l&2&&(a2(14),u3("ngClass",d3(1,Q6,!s.isMenuOpen,s.isMenuOpen)))},dependencies:[C3]})};var l1=class e{static \u0275fac=function(l){return new(l||e)};static \u0275cmp=N({type:e,selectors:[["app-footer"]],standalone:!0,features:[b],decls:20,vars:0,consts:[[1,"bg-white","border-t","shadow","bottom-0","dark:bg-gray-900"],[1,"w-full","mx-auto","max-w-screen-xl","p-4","md:flex","md:items-center","md:justify-between"],[1,"text-sm","text-white","sm:text-center","dark:text-white"],["href","/home",1,"hover:underline"],[1,"flex","flex-wrap","items-center","mt-3","text-sm","font-medium","text-white","dark:text-white","sm:mt-0"],["href","/about",1,"hover:underline","me-4","md:me-6"],["href","/home",1,"hover:underline","me-4","md:me-6"],["href","/contact",1,"hover:underline"]],template:function(l,s){l&1&&(r(0,"footer",0)(1,"div",1)(2,"span",2),u(3,"\xA9 2024 "),r(4,"a",3),u(5,"AridentRIS\u2122"),d(),u(6,". All Rights Reserved. "),d(),r(7,"ul",4)(8,"li")(9,"a",5),u(10,"About"),d()(),r(11,"li")(12,"a",6),u(13,"Privacy Policy"),d()(),r(14,"li")(15,"a",6),u(16,"Licensing"),d()(),r(17,"li")(18,"a",7),u(19,"Contact"),d()()()()())}})};var s1=class e{title="AridentRIS";faCoffee=S4;static \u0275fac=function(l){return new(l||e)};static \u0275cmp=N({type:e,selectors:[["app-root"]],standalone:!0,features:[b],decls:3,vars:0,template:function(l,s){l&1&&_(0,"app-navbar")(1,"router-outlet")(2,"app-footer")},dependencies:[b3,w4,e1,l1]})};var n1=class e{static \u0275fac=function(l){return new(l||e)};static \u0275cmp=N({type:e,selectors:[["app-home"]],standalone:!0,features:[b],decls:10,vars:0,consts:[[1,"bg-white","dark:bg-gray-900","text-gray-900","dark:text-white","pt-24","px-6","md:px-12","min-h-screen","flex","flex-col","justify-center"],[1,"max-w-screen-xl","mx-auto","text-center"],[1,"text-4xl","md:text-6xl","leading-tight","mb-6","text-gray-900","dark:text-white"],[1,"text-orange-500","dark:text-orange-600"],[1,"text-lg","md:text-2xl","mb-8","text-gray-700","dark:text-gray-300"],[1,"text-white","bg-orange-500","hover:bg-orange-600","focus:ring-4","focus:outline-none","focus:ring-orange-300","font-medium","rounded-lg","text-sm","px-6","py-3","dark:bg-orange-600","dark:hover:bg-orange-500","dark:focus:ring-ornage-600"]],template:function(l,s){l&1&&(r(0,"section",0)(1,"div",1)(2,"h1",2),u(3," Welcome to "),r(4,"span",3),u(5,"AridentRIS"),d()(),r(6,"p",4),u(7," We provide innovative solutions to grow your business digitally. "),d(),r(8,"button",5),u(9," Get Started "),d()()())}})};var a1=class e{static \u0275fac=function(l){return new(l||e)};static \u0275cmp=N({type:e,selectors:[["app-about"]],standalone:!0,features:[b],decls:31,vars:0,consts:[[1,"bg-gray-50","dark:bg-gray-900","text-gray-900","dark:text-white","pt-24","px-6","md:px-12","min-h-screen","flex","flex-col","justify-center"],[1,"max-w-screen-xl","mx-auto","text-center"],[1,"text-4xl","md:text-5xl","leading-tight","mb-6","text-gray-900","dark:text-white"],[1,"text-orange-500","dark:text-orange-600"],[1,"text-lg","md:text-xl","mb-8","text-gray-700","dark:text-gray-300"],[1,"grid","gap-8","grid-cols-1","md:grid-cols-3","mt-12"],[1,"bg-white","dark:bg-gray-800","p-6","rounded-lg","shadow"],[1,"text-2xl","font-semibold","mb-4","text-orange-500","dark:text-orange-600"],[1,"text-gray-700","dark:text-gray-300"],[1,"list-disc","text-left","ml-4","text-gray-700","dark:text-gray-300"]],template:function(l,s){l&1&&(r(0,"section",0)(1,"div",1)(2,"h2",2),u(3," About "),r(4,"span",3),u(5,"AridentRIS"),d()(),r(6,"p",4),u(7," At AridentRIS, we are committed to transforming businesses through digital innovation and strategic growth solutions. Our team is dedicated to helping you navigate the ever-evolving digital landscape with ease and confidence. "),d(),r(8,"div",5)(9,"div",6)(10,"h3",7),u(11," Our Mission "),d(),r(12,"p",8),u(13," To provide tailored digital solutions that empower businesses to thrive in the digital age by enhancing their operational efficiency and market reach. "),d()(),r(14,"div",6)(15,"h3",7),u(16," Our Vision "),d(),r(17,"p",8),u(18," To be the leading provider of cutting-edge business solutions, fostering innovation and digital transformation for enterprises worldwide. "),d()(),r(19,"div",6)(20,"h3",7),u(21," Our Values "),d(),r(22,"ul",9)(23,"li"),u(24,"Innovation and Creativity"),d(),r(25,"li"),u(26,"Customer-Centric Solutions"),d(),r(27,"li"),u(28,"Integrity and Transparency"),d(),r(29,"li"),u(30,"Commitment to Excellence"),d()()()()()())}})};var t1=class e{static \u0275fac=function(l){return new(l||e)};static \u0275cmp=N({type:e,selectors:[["app-products"]],standalone:!0,features:[b],decls:46,vars:0,consts:[[1,"bg-gray-50","dark:bg-gray-900","text-gray-900","dark:text-white","pt-24","pb-12","px-6","md:px-12","min-h-screen","flex","flex-col","justify-center"],[1,"max-w-screen-xl","mx-auto","text-center"],[1,"text-4xl","md:text-5xl","leading-tight","mb-6","text-gray-900","dark:text-white"],[1,"text-orange-500","dark:text-orange-600"],[1,"text-lg","md:text-xl","mb-8","text-gray-700","dark:text-gray-300"],[1,"grid","gap-8","grid-cols-1","md:grid-cols-3","mt-12"],[1,"bg-white","dark:bg-gray-800","p-6","rounded-lg","shadow","hover:shadow-lg","transition-shadow"],[1,"fas","fa-cloud","fa-3x","text-orange-500","dark:text-orange-600","mb-4"],[1,"text-2xl","font-semibold","mb-4","text-orange-500","dark:text-orange-600"],[1,"text-gray-700","dark:text-gray-300"],[1,"fas","fa-chart-line","fa-3x","text-orange-500","dark:text-orange-600","mb-4"],[1,"fas","fa-shield-alt","fa-3x","text-orange-500","dark:text-orange-600","mb-4"],[1,"fas","fa-robot","fa-3x","text-orange-500","dark:text-orange-600","mb-4"],[1,"fas","fa-code","fa-3x","text-orange-500","dark:text-orange-600","mb-4"],[1,"fas","fa-sync-alt","fa-3x","text-orange-500","dark:text-orange-600","mb-4"]],template:function(l,s){l&1&&(r(0,"section",0)(1,"div",1)(2,"h2",2),u(3," Our "),r(4,"span",3),u(5,"Services"),d()(),r(6,"p",4),u(7," AridentRIS offers a wide range of cutting-edge IT services that are designed to accelerate your business growth and digital transformation. "),d(),r(8,"div",5)(9,"div",6),_(10,"i",7),r(11,"h3",8),u(12," Cloud Solutions "),d(),r(13,"p",9),u(14," We offer secure, scalable, and flexible cloud solutions tailored to your business needs, ensuring seamless integration and management of cloud platforms. "),d()(),r(15,"div",6),_(16,"i",10),r(17,"h3",8),u(18," Data Analytics "),d(),r(19,"p",9),u(20," Leverage the power of big data and analytics to make data-driven decisions, optimize processes, and improve business performance. "),d()(),r(21,"div",6),_(22,"i",11),r(23,"h3",8),u(24," Cybersecurity "),d(),r(25,"p",9),u(26," Protect your business from digital threats with our comprehensive cybersecurity services, including risk assessments and penetration testing. "),d()()(),r(27,"div",5)(28,"div",6),_(29,"i",12),r(30,"h3",8),u(31," AI & Machine Learning "),d(),r(32,"p",9),u(33," Innovate and automate with AI-powered solutions. We help businesses implement machine learning models for smarter, faster operations. "),d()(),r(34,"div",6),_(35,"i",13),r(36,"h3",8),u(37," Custom Software Development "),d(),r(38,"p",9),u(39," Get tailored software solutions designed to meet the unique requirements of your business, with end-to-end development services. "),d()(),r(40,"div",6),_(41,"i",14),r(42,"h3",8),u(43," DevOps & Automation "),d(),r(44,"p",9),u(45," Streamline your development and operations with our DevOps solutions, which ensure faster delivery, automation, and continuous integration. "),d()()()()())}})};var T4=(()=>{let c=class c{constructor(s,n){this._renderer=s,this._elementRef=n,this.onChange=a=>{},this.onTouched=()=>{}}setProperty(s,n){this._renderer.setProperty(this._elementRef.nativeElement,s,n)}registerOnTouched(s){this.onTouched=s}registerOnChange(s){this.onChange=s}setDisabledState(s){this.setProperty("disabled",s)}};c.\u0275fac=function(n){return new(n||c)(x(H2),x(B2))},c.\u0275dir=k({type:c});let e=c;return e})(),J6=(()=>{let c=class c extends T4{};c.\u0275fac=(()=>{let s;return function(a){return(s||(s=R2(c)))(a||c)}})(),c.\u0275dir=k({type:c,features:[I]});let e=c;return e})(),I4=new n2("");var Z6={provide:I4,useExisting:p2(()=>d1),multi:!0};function c8(){let e=g1()?g1().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var e8=new n2(""),d1=(()=>{let c=class c extends T4{constructor(s,n,a){super(s,n),this._compositionMode=a,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!c8())}writeValue(s){let n=s??"";this.setProperty("value",n)}_handleInput(s){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(s)}_compositionStart(){this._composing=!0}_compositionEnd(s){this._composing=!1,this._compositionMode&&this.onChange(s)}};c.\u0275fac=function(n){return new(n||c)(x(H2),x(B2),x(e8,8))},c.\u0275dir=k({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,a){n&1&&K("input",function(i){return a._handleInput(i.target.value)})("blur",function(){return a.onTouched()})("compositionstart",function(){return a._compositionStart()})("compositionend",function(i){return a._compositionEnd(i.target.value)})},features:[x2([Z6]),I]});let e=c;return e})();function l8(e){return e==null||(typeof e=="string"||Array.isArray(e))&&e.length===0}var Z1=new n2(""),O4=new n2("");function s8(e){return l8(e.value)?{required:!0}:null}function A4(e){return null}function R4(e){return e!=null}function B4(e){return L3(e)?o3(e):e}function H4(e){let c={};return e.forEach(l=>{c=l!=null?o(o({},c),l):c}),Object.keys(c).length===0?null:c}function U4(e,c){return c.map(l=>l(e))}function n8(e){return!e.validate}function G4(e){return e.map(c=>n8(c)?c:l=>c.validate(l))}function a8(e){if(!e)return null;let c=e.filter(R4);return c.length==0?null:function(l){return H4(U4(l,c))}}function c3(e){return e!=null?a8(G4(e)):null}function t8(e){if(!e)return null;let c=e.filter(R4);return c.length==0?null:function(l){let s=U4(l,c).map(B4);return f3(s).pipe(r3(H4))}}function e3(e){return e!=null?t8(G4(e)):null}function k4(e,c){return e===null?[c]:Array.isArray(e)?[...e,c]:[e,c]}function i8(e){return e._rawValidators}function o8(e){return e._rawAsyncValidators}function J1(e){return e?Array.isArray(e)?e:[e]:[]}function o1(e,c){return Array.isArray(e)?e.includes(c):e===c}function _4(e,c){let l=J1(c);return J1(e).forEach(n=>{o1(l,n)||l.push(n)}),l}function D4(e,c){return J1(c).filter(l=>!o1(e,l))}var r1=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=c3(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=e3(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,l){return this.control?this.control.hasError(c,l):!1}getError(c,l){return this.control?this.control.getError(c,l):null}},d2=class extends r1{get formDirective(){return null}get path(){return null}},T2=class extends r1{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},f1=class{constructor(c){this._cd=c}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},r8={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},v5=p(o({},r8),{"[class.ng-submitted]":"isSubmitted"}),j4=(()=>{let c=class c extends f1{constructor(s){super(s)}};c.\u0275fac=function(n){return new(n||c)(x(T2,2))},c.\u0275dir=k({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,a){n&2&&U2("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)},features:[I]});let e=c;return e})(),q4=(()=>{let c=class c extends f1{constructor(s){super(s)}};c.\u0275fac=function(n){return new(n||c)(x(d2,10))},c.\u0275dir=k({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,a){n&2&&U2("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)("ng-submitted",a.isSubmitted)},features:[I]});let e=c;return e})();var D2="VALID",i1="INVALID",z2="PENDING",F2="DISABLED",L2=class{},m1=class extends L2{constructor(c,l){super(),this.value=c,this.source=l}},P2=class extends L2{constructor(c,l){super(),this.pristine=c,this.source=l}},V2=class extends L2{constructor(c,l){super(),this.touched=c,this.source=l}},u2=class extends L2{constructor(c,l){super(),this.status=c,this.source=l}};function W4(e){return(L1(e)?e.validators:e)||null}function f8(e){return Array.isArray(e)?c3(e):e||null}function $4(e,c){return(L1(c)?c.asyncValidators:e)||null}function m8(e){return Array.isArray(e)?e3(e):e||null}function L1(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function z8(e,c,l){let s=e.controls;if(!(c?Object.keys(s):s).length)throw new I2(1e3,"");if(!s[l])throw new I2(1001,"")}function u8(e,c,l){e._forEachChild((s,n)=>{if(l[n]===void 0)throw new I2(1002,"")})}var z1=class{constructor(c,l){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=N2(()=>this.statusReactive()),this.statusReactive=g2(void 0),this._pristine=N2(()=>this.pristineReactive()),this.pristineReactive=g2(!0),this._touched=N2(()=>this.touchedReactive()),this.touchedReactive=g2(!1),this._events=new i3,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(l)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get status(){return U(this.statusReactive)}set status(c){U(()=>this.statusReactive.set(c))}get valid(){return this.status===D2}get invalid(){return this.status===i1}get pending(){return this.status==z2}get disabled(){return this.status===F2}get enabled(){return this.status!==F2}get pristine(){return U(this.pristineReactive)}set pristine(c){U(()=>this.pristineReactive.set(c))}get dirty(){return!this.pristine}get touched(){return U(this.touchedReactive)}set touched(c){U(()=>this.touchedReactive.set(c))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(_4(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(_4(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(D4(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(D4(c,this._rawAsyncValidators))}hasValidator(c){return o1(this._rawValidators,c)}hasAsyncValidator(c){return o1(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){let l=this.touched===!1;this.touched=!0;let s=c.sourceControl??this;this._parent&&!c.onlySelf&&this._parent.markAsTouched(p(o({},c),{sourceControl:s})),l&&c.emitEvent!==!1&&this._events.next(new V2(!0,s))}markAllAsTouched(c={}){this.markAsTouched({onlySelf:!0,emitEvent:c.emitEvent,sourceControl:this}),this._forEachChild(l=>l.markAllAsTouched(c))}markAsUntouched(c={}){let l=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let s=c.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:c.emitEvent,sourceControl:s})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c,s),l&&c.emitEvent!==!1&&this._events.next(new V2(!1,s))}markAsDirty(c={}){let l=this.pristine===!0;this.pristine=!1;let s=c.sourceControl??this;this._parent&&!c.onlySelf&&this._parent.markAsDirty(p(o({},c),{sourceControl:s})),l&&c.emitEvent!==!1&&this._events.next(new P2(!1,s))}markAsPristine(c={}){let l=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let s=c.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:c.emitEvent})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c,s),l&&c.emitEvent!==!1&&this._events.next(new P2(!0,s))}markAsPending(c={}){this.status=z2;let l=c.sourceControl??this;c.emitEvent!==!1&&(this._events.next(new u2(this.status,l)),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.markAsPending(p(o({},c),{sourceControl:l}))}disable(c={}){let l=this._parentMarkedDirty(c.onlySelf);this.status=F2,this.errors=null,this._forEachChild(n=>{n.disable(p(o({},c),{onlySelf:!0}))}),this._updateValue();let s=c.sourceControl??this;c.emitEvent!==!1&&(this._events.next(new m1(this.value,s)),this._events.next(new u2(this.status,s)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(p(o({},c),{skipPristineCheck:l}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(c={}){let l=this._parentMarkedDirty(c.onlySelf);this.status=D2,this._forEachChild(s=>{s.enable(p(o({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(p(o({},c),{skipPristineCheck:l}),this),this._onDisabledChange.forEach(s=>s(!1))}_updateAncestors(c,l){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine({},l),this._parent._updateTouched({},l))}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let s=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D2||this.status===z2)&&this._runAsyncValidator(s,c.emitEvent)}let l=c.sourceControl??this;c.emitEvent!==!1&&(this._events.next(new m1(this.value,l)),this._events.next(new u2(this.status,l)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(p(o({},c),{sourceControl:l}))}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(l=>l._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F2:D2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c,l){if(this.asyncValidator){this.status=z2,this._hasOwnPendingAsyncValidator={emitEvent:l!==!1};let s=B4(this.asyncValidator(this));this._asyncValidationSubscription=s.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:l,shouldHaveEmitted:c})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let c=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,c}return!1}setErrors(c,l={}){this.errors=c,this._updateControlsErrors(l.emitEvent!==!1,this,l.shouldHaveEmitted)}get(c){let l=c;return l==null||(Array.isArray(l)||(l=l.split(".")),l.length===0)?null:l.reduce((s,n)=>s&&s._find(n),this)}getError(c,l){let s=l?this.get(l):this;return s&&s.errors?s.errors[c]:null}hasError(c,l){return!!this.getError(c,l)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c,l,s){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),(c||s)&&this._events.next(new u2(this.status,l)),this._parent&&this._parent._updateControlsErrors(c,l,s)}_initObservables(){this.valueChanges=new C2,this.statusChanges=new C2}_calculateStatus(){return this._allControlsDisabled()?F2:this.errors?i1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(z2)?z2:this._anyControlsHaveStatus(i1)?i1:D2}_anyControlsHaveStatus(c){return this._anyControls(l=>l.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c,l){let s=!this._anyControlsDirty(),n=this.pristine!==s;this.pristine=s,this._parent&&!c.onlySelf&&this._parent._updatePristine(c,l),n&&this._events.next(new P2(this.pristine,l))}_updateTouched(c={},l){this.touched=this._anyControlsTouched(),this._events.next(new V2(this.touched,l)),this._parent&&!c.onlySelf&&this._parent._updateTouched(c,l)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){L1(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let l=this._parent&&this._parent.dirty;return!c&&!!l&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=f8(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=m8(this._rawAsyncValidators)}},u1=class extends z1{constructor(c,l,s){super(W4(l),$4(s,l)),this.controls=c,this._initObservables(),this._setUpdateStrategy(l),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(c,l){return this.controls[c]?this.controls[c]:(this.controls[c]=l,l.setParent(this),l._registerOnCollectionChange(this._onCollectionChange),l)}addControl(c,l,s={}){this.registerControl(c,l),this.updateValueAndValidity({emitEvent:s.emitEvent}),this._onCollectionChange()}removeControl(c,l={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],this.updateValueAndValidity({emitEvent:l.emitEvent}),this._onCollectionChange()}setControl(c,l,s={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],l&&this.registerControl(c,l),this.updateValueAndValidity({emitEvent:s.emitEvent}),this._onCollectionChange()}contains(c){return this.controls.hasOwnProperty(c)&&this.controls[c].enabled}setValue(c,l={}){u8(this,!0,c),Object.keys(c).forEach(s=>{z8(this,!0,s),this.controls[s].setValue(c[s],{onlySelf:!0,emitEvent:l.emitEvent})}),this.updateValueAndValidity(l)}patchValue(c,l={}){c!=null&&(Object.keys(c).forEach(s=>{let n=this.controls[s];n&&n.patchValue(c[s],{onlySelf:!0,emitEvent:l.emitEvent})}),this.updateValueAndValidity(l))}reset(c={},l={}){this._forEachChild((s,n)=>{s.reset(c?c[n]:null,{onlySelf:!0,emitEvent:l.emitEvent})}),this._updatePristine(l,this),this._updateTouched(l,this),this.updateValueAndValidity(l)}getRawValue(){return this._reduceChildren({},(c,l,s)=>(c[s]=l.getRawValue(),c))}_syncPendingControls(){let c=this._reduceChildren(!1,(l,s)=>s._syncPendingControls()?!0:l);return c&&this.updateValueAndValidity({onlySelf:!0}),c}_forEachChild(c){Object.keys(this.controls).forEach(l=>{let s=this.controls[l];s&&c(s,l)})}_setUpControls(){this._forEachChild(c=>{c.setParent(this),c._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(c){for(let[l,s]of Object.entries(this.controls))if(this.contains(l)&&c(s))return!0;return!1}_reduceValue(){let c={};return this._reduceChildren(c,(l,s,n)=>((s.enabled||this.disabled)&&(l[n]=s.value),l))}_reduceChildren(c,l){let s=c;return this._forEachChild((n,a)=>{s=l(s,n,a)}),s}_allControlsDisabled(){for(let c of Object.keys(this.controls))if(this.controls[c].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(c){return this.controls.hasOwnProperty(c)?this.controls[c]:null}};var l3=new n2("CallSetDisabledState",{providedIn:"root",factory:()=>s3}),s3="always";function d8(e,c){return[...c.path,e]}function X4(e,c,l=s3){Y4(e,c),c.valueAccessor.writeValue(e.value),(e.disabled||l==="always")&&c.valueAccessor.setDisabledState?.(e.disabled),p8(e,c),h8(e,c),M8(e,c),L8(e,c)}function F4(e,c){e.forEach(l=>{l.registerOnValidatorChange&&l.registerOnValidatorChange(c)})}function L8(e,c){if(c.valueAccessor.setDisabledState){let l=s=>{c.valueAccessor.setDisabledState(s)};e.registerOnDisabledChange(l),c._registerOnDestroy(()=>{e._unregisterOnDisabledChange(l)})}}function Y4(e,c){let l=i8(e);c.validator!==null?e.setValidators(k4(l,c.validator)):typeof l=="function"&&e.setValidators([l]);let s=o8(e);c.asyncValidator!==null?e.setAsyncValidators(k4(s,c.asyncValidator)):typeof s=="function"&&e.setAsyncValidators([s]);let n=()=>e.updateValueAndValidity();F4(c._rawValidators,n),F4(c._rawAsyncValidators,n)}function p8(e,c){c.valueAccessor.registerOnChange(l=>{e._pendingValue=l,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&K4(e,c)})}function M8(e,c){c.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&K4(e,c),e.updateOn!=="submit"&&e.markAsTouched()})}function K4(e,c){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function h8(e,c){let l=(s,n)=>{c.valueAccessor.writeValue(s),n&&c.viewToModelUpdate(s)};e.registerOnChange(l),c._registerOnDestroy(()=>{e._unregisterOnChange(l)})}function C8(e,c){e==null,Y4(e,c)}function g8(e,c){if(!e.hasOwnProperty("model"))return!1;let l=e.model;return l.isFirstChange()?!0:!Object.is(c,l.currentValue)}function x8(e){return Object.getPrototypeOf(e.constructor)===J6}function N8(e,c){e._syncPendingControls(),c.forEach(l=>{let s=l.control;s.updateOn==="submit"&&s._pendingChange&&(l.viewToModelUpdate(s._pendingValue),s._pendingChange=!1)})}function b8(e,c){if(!c)return null;Array.isArray(c);let l,s,n;return c.forEach(a=>{a.constructor===d1?l=a:x8(a)?s=a:n=a}),n||s||l||null}var y8={provide:d2,useExisting:p2(()=>n3)},E2=Promise.resolve(),n3=(()=>{let c=class c extends d2{get submitted(){return U(this.submittedReactive)}constructor(s,n,a){super(),this.callSetDisabledState=a,this._submitted=N2(()=>this.submittedReactive()),this.submittedReactive=g2(!1),this._directives=new Set,this.ngSubmit=new C2,this.form=new u1({},c3(s),e3(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(s){E2.then(()=>{let n=this._findContainer(s.path);s.control=n.registerControl(s.name,s.control),X4(s.control,s,this.callSetDisabledState),s.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(s)})}getControl(s){return this.form.get(s.path)}removeControl(s){E2.then(()=>{let n=this._findContainer(s.path);n&&n.removeControl(s.name),this._directives.delete(s)})}addFormGroup(s){E2.then(()=>{let n=this._findContainer(s.path),a=new u1({});C8(a,s),n.registerControl(s.name,a),a.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(s){E2.then(()=>{let n=this._findContainer(s.path);n&&n.removeControl(s.name)})}getFormGroup(s){return this.form.get(s.path)}updateModel(s,n){E2.then(()=>{this.form.get(s.path).setValue(n)})}setValue(s){this.control.setValue(s)}onSubmit(s){return this.submittedReactive.set(!0),N8(this.form,this._directives),this.ngSubmit.emit(s),s?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(s=void 0){this.form.reset(s),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(s){return s.pop(),s.length?this.form.get(s):this.form}};c.\u0275fac=function(n){return new(n||c)(x(Z1,10),x(O4,10),x(l3,8))},c.\u0275dir=k({type:c,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,a){n&1&&K("submit",function(i){return a.onSubmit(i)})("reset",function(){return a.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[x2([y8]),I]});let e=c;return e})();function E4(e,c){let l=e.indexOf(c);l>-1&&e.splice(l,1)}function P4(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var v8=class extends z1{constructor(c=null,l,s){super(W4(l),$4(s,l)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(l),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L1(l)&&(l.nonNullable||l.initialValueIsDefault)&&(P4(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,l={}){this.value=this._pendingValue=c,this._onChange.length&&l.emitModelToViewChange!==!1&&this._onChange.forEach(s=>s(this.value,l.emitViewToModelChange!==!1)),this.updateValueAndValidity(l)}patchValue(c,l={}){this.setValue(c,l)}reset(c=this.defaultValue,l={}){this._applyFormState(c),this.markAsPristine(l),this.markAsUntouched(l),this.setValue(this.value,l),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){E4(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){E4(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){P4(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var w8={provide:T2,useExisting:p2(()=>a3)},V4=Promise.resolve(),a3=(()=>{let c=class c extends T2{constructor(s,n,a,t,i,f){super(),this._changeDetectorRef=i,this.callSetDisabledState=f,this.control=new v8,this._registered=!1,this.name="",this.update=new C2,this._parent=s,this._setValidators(n),this._setAsyncValidators(a),this.valueAccessor=b8(this,t)}ngOnChanges(s){if(this._checkForErrors(),!this._registered||"name"in s){if(this._registered&&(this._checkName(),this.formDirective)){let n=s.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in s&&this._updateDisabled(s),g8(s,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(s){this.viewModel=s,this.update.emit(s)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){X4(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(s){V4.then(()=>{this.control.setValue(s,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(s){let n=s.isDisabled.currentValue,a=n!==0&&C1(n);V4.then(()=>{a&&!this.control.disabled?this.control.disable():!a&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(s){return this._parent?d8(s,this._parent):[s]}};c.\u0275fac=function(n){return new(n||c)(x(d2,9),x(Z1,10),x(O4,10),x(I4,10),x(M3,8),x(l3,8))},c.\u0275dir=k({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[x2([w8]),I,O2]});let e=c;return e})(),Q4=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275dir=k({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let e=c;return e})();var S8=(()=>{let c=class c{constructor(){this._validator=A4}ngOnChanges(s){if(this.inputName in s){let n=this.normalizeInput(s[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):A4,this._onChange&&this._onChange()}}validate(s){return this._validator(s)}registerOnValidatorChange(s){this._onChange=s}enabled(s){return s!=null}};c.\u0275fac=function(n){return new(n||c)},c.\u0275dir=k({type:c,features:[O2]});let e=c;return e})();var A8={provide:Z1,useExisting:p2(()=>t3),multi:!0};var t3=(()=>{let c=class c extends S8{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=C1,this.createValidator=s=>s8}enabled(s){return s}};c.\u0275fac=(()=>{let s;return function(a){return(s||(s=R2(c)))(a||c)}})(),c.\u0275dir=k({type:c,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,a){n&2&&h1("required",a._enabled?"":null)},inputs:{required:"required"},features:[x2([A8]),I]});let e=c;return e})();var k8=(()=>{let c=class c{};c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=h2({type:c}),c.\u0275inj=M2({});let e=c;return e})();var J4=(()=>{let c=class c{static withConfig(s){return{ngModule:c,providers:[{provide:l3,useValue:s.callSetDisabledState??s3}]}}};c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=h2({type:c}),c.\u0275inj=M2({imports:[k8]});let e=c;return e})();var p1=class e{contactForm={name:"",email:"",message:""};constructor(){}onSubmit(){this.isFormValid()?(console.log("Form Submitted:",this.contactForm),this.resetForm(),alert("Message sent successfully!")):alert("Please fill in all fields correctly.")}isFormValid(){let{name:c,email:l,message:s}=this.contactForm;return c.trim()!==""&&this.isValidEmail(l)&&s.trim()!==""}isValidEmail(c){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)}resetForm(){this.contactForm={name:"",email:"",message:""}}static \u0275fac=function(l){return new(l||e)};static \u0275cmp=N({type:e,selectors:[["app-contact"]],standalone:!0,features:[b],decls:24,vars:3,consts:[[1,"bg-gray-50","dark:bg-gray-900","text-gray-900","dark:text-white","pt-24","pb-12","px-6","md:px-12","min-h-screen","flex","flex-col","justify-center"],[1,"max-w-screen-xl","mx-auto","text-center"],[1,"text-4xl","md:text-5xl","leading-tight","mb-6","text-gray-900","dark:text-white"],[1,"text-orange-500","dark:text-orange-600"],[1,"text-lg","md:text-xl","mb-8","text-gray-700","dark:text-gray-300"],[1,"bg-white","dark:bg-gray-800","p-8","rounded-2xl","shadow-lg","max-w-screen-sm","mx-auto"],[3,"submit"],[1,"mb-6"],["for","name",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-gray-300"],["type","text","id","name","name","name","autocomplete","name","placeholder","John Doe","required","",1,"block","w-full","p-3","border","border-gray-300","rounded-lg","shadow-sm","dark:bg-gray-700","dark:border-gray-600","dark:text-white","focus:ring-orange-500","focus:border-orange-500",3,"ngModelChange","ngModel"],["for","email",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-gray-300"],["type","email","id","email","name","email","autocomplete","email","placeholder","example@example.com","required","",1,"block","w-full","p-3","border","border-gray-300","rounded-lg","shadow-sm","dark:bg-gray-700","dark:border-gray-600","dark:text-white","focus:ring-orange-500","focus:border-orange-500",3,"ngModelChange","ngModel"],["for","message",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-gray-300"],["id","message","name","message","rows","4","placeholder","Write your message here...","required","",1,"block","w-full","p-3","border","border-gray-300","rounded-lg","shadow-sm","dark:bg-gray-700","dark:border-gray-600","dark:text-white","focus:ring-orange-500","focus:border-orange-500",3,"ngModelChange","ngModel"],["type","submit",1,"w-full","bg-orange-500","hover:bg-orange-600","text-white","font-medium","rounded-lg","text-sm","px-6","py-3","text-center","transition","ease-in-out","duration-300","focus:outline-none","focus:ring-4","focus:ring-orange-300","dark:focus:ring-orange-600"]],template:function(l,s){l&1&&(r(0,"section",0)(1,"div",1)(2,"h2",2),u(3," Get in Touch with "),r(4,"span",3),u(5,"AridentRIS"),d()(),r(6,"p",4),u(7," Have any questions or inquiries? We're here to help you grow your business digitally. Feel free to reach out to us! "),d(),r(8,"div",5)(9,"form",6),K("submit",function(){return s.onSubmit()}),r(10,"div",7)(11,"label",8),u(12,"Your Name"),d(),r(13,"input",9),q2("ngModelChange",function(a){return j2(s.contactForm.name,a)||(s.contactForm.name=a),a}),d()(),r(14,"div",7)(15,"label",10),u(16,"Your Email"),d(),r(17,"input",11),q2("ngModelChange",function(a){return j2(s.contactForm.email,a)||(s.contactForm.email=a),a}),d()(),r(18,"div",7)(19,"label",12),u(20,"Your Message"),d(),r(21,"textarea",13),q2("ngModelChange",function(a){return j2(s.contactForm.message,a)||(s.contactForm.message=a),a}),d()(),r(22,"button",14),u(23," Send Message "),d()()()()()),l&2&&(a2(13),G2("ngModel",s.contactForm.name),a2(4),G2("ngModel",s.contactForm.email),a2(4),G2("ngModel",s.contactForm.message))},dependencies:[J4,Q4,d1,j4,q4,t3,a3,n3]})};var Z4=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:n1},{path:"about",component:a1},{path:"products",component:t1},{path:"contact",component:p1}];var c0={providers:[p3({eventCoalescing:!0}),y3(Z4),x3()]};var D8={providers:[N3()]},e0=h3(c0,D8);var F8=()=>g3(s1,e0),Y5=F8;export{Y5 as a};
