// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=f.call(n,w,"$1e"),n=f.call(n,h,"e"),n=f.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,d,"e-0$1"),r.alternate&&(n=f.call(n,b,"$1."),n=f.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):s.call(n)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function j(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var S=String.fromCharCode,E=isNaN,O=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,l,s,p,f;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,p=0;p<r.length;p++)if(u(n=r[p]))l+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){return"string"==typeof r}function P(r){var e,t,n;if(!I(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=V(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var F,$=Object.prototype,C=$.toString,N=$.__defineGetter__,R=$.__defineSetter__,G=$.__lookupGetter__,Z=$.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||Z.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var L=F;var W=/./,B="function"==typeof Object.defineProperty?Object.defineProperty:null;var M,U=Object.defineProperty,X=Object.prototype,z=X.toString,Y=X.__defineGetter__,q=X.__defineSetter__,D=X.__lookupGetter__,H=X.__lookupSetter__;M=function(){try{return B({},"x",{}),!0}catch(r){return!1}}()?U:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(D.call(r,e)||H.call(r,e)?(n=r.__proto__,r.__proto__=X,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Y&&Y.call(r,e,t.get),a&&q&&q.call(r,e,t.set),r};var J=M;function K(r,e,t){J(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Q(r){return"boolean"==typeof r}function rr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var er=rr();function tr(){return er&&"symbol"==typeof Symbol.toStringTag}var nr=Object.prototype.toString;var ir=Object.prototype.hasOwnProperty;var or="function"==typeof Symbol?Symbol.toStringTag:"";var ar=tr()?function(r){var e,t,n,i,o;if(null==r)return nr.call(r);t=r[or],o=or,e=null!=(i=r)&&ir.call(i,o);try{r[or]=void 0}catch(e){return nr.call(r)}return n=nr.call(r),e?r[or]=t:delete r[or],n}:function(r){return nr.call(r)},cr=Boolean.prototype.toString;var ur=tr();function lr(r){return"object"==typeof r&&(r instanceof Boolean||(ur?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ar(r)))}function sr(r){return Q(r)||lr(r)}function pr(){return new Function("return this;")()}K(sr,"isPrimitive",Q),K(sr,"isObject",lr);var fr="object"==typeof self?self:null,gr="object"==typeof window?window:null,dr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},br="object"==typeof dr?dr:null;var yr=function(r){if(arguments.length){if(!Q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return pr()}if(fr)return fr;if(gr)return gr;if(br)return br;throw new Error("unexpected error. Unable to resolve global object.")}(),vr=yr.document&&yr.document.childNodes,hr=Int8Array;var wr=rr();var mr=Object.prototype.toString;var _r=Object.prototype.hasOwnProperty;var jr="function"==typeof Symbol?Symbol.toStringTag:"";var Sr=wr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,o;if(null==r)return mr.call(r);t=r[jr],o=jr,e=null!=(i=r)&&_r.call(i,o);try{r[jr]=void 0}catch(e){return mr.call(r)}return n=mr.call(r),e?r[jr]=t:delete r[jr],n}:function(r){return mr.call(r)};function Er(){return/^\s*function\s*([^(]*)/i}var Or=/^\s*function\s*([^(]*)/i;K(Er,"REGEXP",Or);var xr=rr();var kr=Object.prototype.toString;var Tr=Object.prototype.hasOwnProperty;var Ar="function"==typeof Symbol?Symbol.toStringTag:"";var Vr=xr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,o;if(null==r)return kr.call(r);t=r[Ar],o=Ar,e=null!=(i=r)&&Tr.call(i,o);try{r[Ar]=void 0}catch(e){return kr.call(r)}return n=kr.call(r),e?r[Ar]=t:delete r[Ar],n}:function(r){return kr.call(r)};var Ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===Vr(r)};function Pr(r){return null!==r&&"object"==typeof r}function Fr(r){var e,t,n,i;if(("Object"===(t=Sr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Or.exec(n.toString()))return e[1]}return Pr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}K(Pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Ir(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Pr));var $r="function"==typeof W||"object"==typeof hr||"function"==typeof vr?function(r){return Fr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Fr(r).toLowerCase():e};function Cr(r){return"function"===$r(r)}function Nr(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&Cr(r.next)}function Rr(r){return Math.abs(r)}function Gr(r){return r!=r}function Zr(r){return"number"==typeof r}var Lr=rr();function Wr(){return Lr&&"symbol"==typeof Symbol.toStringTag}var Br=Object.prototype.toString;var Mr=Object.prototype.hasOwnProperty;function Ur(r,e){return null!=r&&Mr.call(r,e)}var Xr="function"==typeof Symbol?Symbol.toStringTag:"";var zr=Wr()?function(r){var e,t,n;if(null==r)return Br.call(r);t=r[Xr],e=Ur(r,Xr);try{r[Xr]=void 0}catch(e){return Br.call(r)}return n=Br.call(r),e?r[Xr]=t:delete r[Xr],n}:function(r){return Br.call(r)},Yr=Number,qr=Yr.prototype.toString;var Dr=Wr();function Hr(r){return"object"==typeof r&&(r instanceof Yr||(Dr?function(r){try{return qr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===zr(r)))}function Jr(r){return Zr(r)||Hr(r)}function Kr(r){return"number"==typeof r}function Qr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function re(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Qr(i):Qr(i)+r,n&&(r="-"+r)),r}K(Jr,"isPrimitive",Zr),K(Jr,"isObject",Hr);var ee=String.prototype.toLowerCase,te=String.prototype.toUpperCase;function ne(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Kr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=re(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=re(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===te.call(r.specifier)?te.call(t):ee.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ie(r){return"string"==typeof r}var oe=Math.abs,ae=String.prototype.toLowerCase,ce=String.prototype.toUpperCase,ue=String.prototype.replace,le=/e\+(\d)$/,se=/e-(\d)$/,pe=/^(\d+)$/,fe=/^(\d+)e/,ge=/\.0$/,de=/\.0*e/,be=/(\..*[^0])0*e/;function ye(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Kr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":oe(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=ue.call(t,be,"$1e"),t=ue.call(t,de,"e"),t=ue.call(t,ge,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ue.call(t,le,"e+0$1"),t=ue.call(t,se,"e-0$1"),r.alternate&&(t=ue.call(t,pe,"$1."),t=ue.call(t,fe,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ce.call(r.specifier)?ce.call(t):ae.call(t)}function ve(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function he(r,e,t){var n=e-r.length;return n<0?r:r=t?r+ve(n):ve(n)+r}var we=String.fromCharCode,me=isNaN,_e=Array.isArray;function je(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Se(r){var e,t,n,i,o,a,c,u,l;if(!_e(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(ie(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=je(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,me(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,me(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=ne(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!me(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=me(o)?String(n.arg):we(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=ye(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=re(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=he(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var Ee=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Oe(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function xe(r){var e,t,n,i;for(t=[],i=0,n=Ee.exec(r);n;)(e=r.slice(i,Ee.lastIndex-n[0].length)).length&&t.push(e),t.push(Oe(n)),i=Ee.lastIndex,n=Ee.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function ke(r){return"string"==typeof r}function Te(r){var e,t,n;if(!ke(r))throw new TypeError(Te("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=xe(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Se.apply(null,t)}var Ae=Array.isArray?Array.isArray:function(r){return"[object Array]"===zr(r)};var Ve,Ie=Object.getPrototypeOf;Ve=Cr(Object.getPrototypeOf)?Ie:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===zr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Pe=Ve;var Fe=Object.prototype;function $e(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Ae(r)}(r)&&(e=function(r){return null==r?null:(r=Object(r),Pe(r))}(r),!e||!Ur(r,"constructor")&&Ur(e,"constructor")&&Cr(e.constructor)&&"[object Function]"===zr(e.constructor)&&Ur(e,"isPrototypeOf")&&Cr(e.isPrototypeOf)&&(e===Fe||function(r){var e;for(e in r)if(!Ur(r,e))return!1;return!0}(r)))}var Ce=Number.POSITIVE_INFINITY,Ne=Yr.NEGATIVE_INFINITY,Re=Math.floor;function Ge(r){return r<Ce&&r>Ne&&Re(e=r)===e;var e}function Ze(r){return Zr(r)&&Ge(r)}function Le(r){return Hr(r)&&Ge(r.valueOf())}function We(r){return Ze(r)||Le(r)}function Be(r){return Ze(r)&&r>=0}function Me(r){return Le(r)&&r.valueOf()>=0}function Ue(r){return Be(r)||Me(r)}function Xe(r){return r==r&&r>Ne&&r<Ce}function ze(r){return Zr(r)&&Xe(r)}function Ye(r){return Hr(r)&&Xe(r.valueOf())}function qe(r){return ze(r)||Ye(r)}function De(r,e){return $e(e)?Ur(e,"iter")&&(r.iter=e.iter,!Be(e.iter))?new TypeError("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter):Ur(e,"tol")&&(r.tol=e.tol,!ze(e.tol)||e.tol<=0)?new TypeError(Te("invalid option. `%s` option must be a positive finite number. Option: `%s`.","tol",e.tol)):null:new TypeError(Te("invalid argument. Options argument must be an object. Value: `%s`.",e))}K(We,"isPrimitive",Ze),K(We,"isObject",Le),K(Ue,"isPrimitive",Be),K(Ue,"isObject",Me),K(qe,"isPrimitive",ze),K(qe,"isObject",Ye);function He(r){var e,t,n,i,o,a,c,u,l,s;if(!Nr(r))throw new TypeError(Te("invalid argument. Must provide an iterator. Value: `%s`.",r));if(t={iter:1e308,tol:2220446049250313e-31},arguments.length>1&&(n=De(t,arguments[1])))throw n;if((o=r.next()).done)return null;if(!Zr(i=o.value)||Gr(i))return i;for(0===(u=i)&&(u=1e-50),a=u,c=0,s=1;s<t.iter&&!(o=r.next()).done;){if(s+=1,!Zr(l=o.value)||Gr(l)){u=NaN;break}if(0===(c+=l)&&(c=1e-50),0===(a=l+1/a)&&(a=1e-50),u*=e=a*(c=1/c),Rr(e-1)<=t.tol)break}return s<=1?i:u}var Je={};!function(r,e,t){L(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}(Je,"iterContinuedFraction",He);export{Je as default,He as iterContinuedFraction};
//# sourceMappingURL=mod.js.map
