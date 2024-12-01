// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,b=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,y,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function O(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,u,l,f,s,p,g,b,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,b=n.padRight,d=void 0,(d=g-p.length)<0?p:p=b?p+m(d):m(d)+p)),u+=n.arg||"",l+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var P,V=Object.prototype,A=V.toString,F=V.__defineGetter__,N=V.__defineSetter__,C=V.__lookupGetter__,$=V.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var B=P;var R=/./;function G(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&U.call(r,e)}var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"";var q=Z()?function(r){var e,t,n;if(null==r)return W.call(r);t=r[z],e=X(r,z);try{r[z]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[z]=t:delete r[z],n}:function(r){return W.call(r)},D=Boolean,H=Boolean.prototype.toString;var J=Z();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return L(r)||K(r)}G(Q,"isPrimitive",L),G(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!L(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),or=ir.document&&ir.document.childNodes,ar=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;G(cr,"REGEXP",ur);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function fr(r){return null!==r&&"object"==typeof r}function sr(r){var e,t,n,i;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ur.exec(n.toString()))return e[1]}return fr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}G(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var pr="function"==typeof R||"object"==typeof ar||"function"==typeof or?function(r){return sr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?sr(r).toLowerCase():e};function gr(r){return"function"===pr(r)}function br(r){return r!=r}function dr(r){return"number"==typeof r}var vr=Number,yr=vr.prototype.toString;var hr=Z();function wr(r){return"object"==typeof r&&(r instanceof vr||(hr?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function mr(r){return dr(r)||wr(r)}G(mr,"isPrimitive",dr),G(mr,"isObject",wr);var jr,_r=Object,Or=Object.getPrototypeOf;jr=gr(Object.getPrototypeOf)?Or:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=jr;var Sr=Object.prototype;function xr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!lr(r)}(r)&&(e=function(r){return null==r?null:(r=_r(r),Er(r))}(r),!e||!X(r,"constructor")&&X(e,"constructor")&&gr(e.constructor)&&"[object Function]"===q(e.constructor)&&X(e,"isPrototypeOf")&&gr(e.isPrototypeOf)&&(e===Sr||function(r){var e;for(e in r)if(!X(r,e))return!1;return!0}(r)))}var Tr=Number.POSITIVE_INFINITY,kr=vr.NEGATIVE_INFINITY,Ir=Math.floor;function Pr(r){return r<Tr&&r>kr&&Ir(e=r)===e;var e}function Vr(r){return dr(r)&&Pr(r)}function Ar(r){return wr(r)&&Pr(r.valueOf())}function Fr(r){return Vr(r)||Ar(r)}function Nr(r){return Vr(r)&&r>=0}function Cr(r){return Ar(r)&&r.valueOf()>=0}function $r(r){return Nr(r)||Cr(r)}function Br(r){return r==r&&r>kr&&r<Tr}function Rr(r){return dr(r)&&Br(r)}function Gr(r){return wr(r)&&Br(r.valueOf())}function Lr(r){return Rr(r)||Gr(r)}G(Fr,"isPrimitive",Vr),G(Fr,"isObject",Ar),G($r,"isPrimitive",Nr),G($r,"isObject",Cr),G(Lr,"isPrimitive",Rr),G(Lr,"isObject",Gr);var Mr=1e-50;var Zr={};return function(r,e,t){B(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}(Zr,"iterContinuedFraction",(function(r){var e,t,n,i,o,a,c,u,l,f,s,p,g;if(p=typeof(s=r),null===s||"object"!==p&&"function"!==p||!gr(s.next))throw new TypeError(I("invalid argument. Must provide an iterator. Value: `%s`.",r));if(t={iter:1e308,tol:2220446049250313e-31},arguments.length>1&&(n=function(r,e){return xr(e)?X(e,"iter")&&(r.iter=e.iter,!Nr(e.iter))?new TypeError("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter):X(e,"tol")&&(r.tol=e.tol,!Rr(e.tol)||e.tol<=0)?new TypeError(I("invalid option. `%s` option must be a positive finite number. Option: `%s`.","tol",e.tol)):null:new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",e))}(t,arguments[1]),n))throw n;if((o=r.next()).done)return null;if(!dr(i=o.value)||br(i))return i;for(0===(u=i)&&(u=Mr),a=u,c=0,f=1;f<t.iter&&!(o=r.next()).done;){if(f+=1,!dr(l=o.value)||br(l)){u=NaN;break}if(0===(c+=l)&&(c=Mr),0===(a=l+1/a)&&(a=Mr),u*=e=a*(c=1/c),g=e-1,Math.abs(g)<=t.tol)break}return f<=1?i:u})),Zr}));
//# sourceMappingURL=index.js.map