// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,b=/^(\d+)$/,d=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,h=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,v,"e"),n=s.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,d,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function O(e){return e!=e}function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,n,o,a,u,l,f,s,p,g,b,d;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,f=0;f<e.length;f++)if("string"==typeof(n=e[f]))u+=n;else{if(r=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,b=n.padRight,d=void 0,(d=g-p.length)<0?p:p=b?p+m(d):m(d)+p)),u+=n.arg||"",l+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,t,n,i;for(t=[],i=0,n=x.exec(e);n;)(r=e.slice(i,x.lastIndex-n[0].length)).length&&t.push(r),t.push(T(n)),i=x.lastIndex,n=x.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){var r,t;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[k(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return S.apply(null,r)}var P,V=Object.prototype,A=V.toString,F=V.__defineGetter__,N=V.__defineSetter__,C=V.__lookupGetter__,$=V.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};var B=P,R=/./;function G(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,U=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&U.call(e,r)}var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",q=Z()?function(e){var r,t,n;if(null==e)return W.call(e);t=e[z],r=X(e,z);try{e[z]=void 0}catch(r){return W.call(e)}return n=W.call(e),r?e[z]=t:delete e[z],n}:function(e){return W.call(e)},D=Boolean,H=Boolean.prototype.toString,J=Z();function K(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function Q(e){return L(e)||K(e)}G(Q,"isPrimitive",L),G(Q,"isObject",K);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,te="object"==typeof globalThis?globalThis:null,ne=function(e){if(arguments.length){if(!L(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(te)return te;if(ee)return ee;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=ne.document&&ne.document.childNodes,oe=Int8Array;function ae(){return/^\s*function\s*([^(]*)/i}var ce=/^\s*function\s*([^(]*)/i;G(ae,"REGEXP",ce);var ue=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function le(e){return null!==e&&"object"==typeof e}function fe(e){var r,t,n,i;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ce.exec(n.toString()))return r[1]}return le(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}G(le,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ue(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(le));var se="function"==typeof R||"object"==typeof oe||"function"==typeof ie?function(e){return fe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?fe(e).toLowerCase():r};function pe(e){return"function"===se(e)}function ge(e){return e!=e}function be(e){return"number"==typeof e}var de=Number,ye=de.prototype.toString,ve=Z();function he(e){return"object"==typeof e&&(e instanceof de||(ve?function(e){try{return ye.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function we(e){return be(e)||he(e)}G(we,"isPrimitive",be),G(we,"isObject",he);var me,je=Object,_e=Object.getPrototypeOf;me=pe(Object.getPrototypeOf)?_e:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===q(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Oe=me,Ee=Object.prototype;function Se(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ue(e)}(e)&&(r=function(e){return null==e?null:(e=je(e),Oe(e))}(e),!r||!X(e,"constructor")&&X(r,"constructor")&&pe(r.constructor)&&"[object Function]"===q(r.constructor)&&X(r,"isPrototypeOf")&&pe(r.isPrototypeOf)&&(r===Ee||function(e){var r;for(r in e)if(!X(e,r))return!1;return!0}(e)))}var xe=Number.POSITIVE_INFINITY,Te=de.NEGATIVE_INFINITY,ke=Math.floor;function Ie(e){return e<xe&&e>Te&&ke(r=e)===r;var r}function Pe(e){return be(e)&&Ie(e)}function Ve(e){return he(e)&&Ie(e.valueOf())}function Ae(e){return Pe(e)||Ve(e)}function Fe(e){return Pe(e)&&e>=0}function Ne(e){return Ve(e)&&e.valueOf()>=0}function Ce(e){return Fe(e)||Ne(e)}function $e(e){return e==e&&e>Te&&e<xe}function Be(e){return be(e)&&$e(e)}function Re(e){return he(e)&&$e(e.valueOf())}function Ge(e){return Be(e)||Re(e)}G(Ae,"isPrimitive",Pe),G(Ae,"isObject",Ve),G(Ce,"isPrimitive",Fe),G(Ce,"isObject",Ne),G(Ge,"isPrimitive",Be),G(Ge,"isObject",Re);var Le=1e-50,Me={};return function(e,r,t){B(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}(Me,"iterContinuedFraction",(function(e){var r,t,n,i,o,a,c,u,l,f,s,p,g;if(p=typeof(s=e),null===s||"object"!==p&&"function"!==p||!pe(s.next))throw new TypeError(I("invalid argument. Must provide an iterator. Value: `%s`.",e));if(t={iter:1e308,tol:2220446049250313e-31},arguments.length>1&&(n=function(e,r){return Se(r)?X(r,"iter")&&(e.iter=r.iter,!Fe(r.iter))?new TypeError("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",r.iter):X(r,"tol")&&(e.tol=r.tol,!Be(r.tol)||r.tol<=0)?new TypeError(I("invalid option. `%s` option must be a positive finite number. Option: `%s`.","tol",r.tol)):null:new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",r))}(t,arguments[1]),n))throw n;if((o=e.next()).done)return null;if(!be(i=o.value)||ge(i))return i;for(0===(u=i)&&(u=Le),a=u,c=0,f=1;f<t.iter&&!(o=e.next()).done;){if(f+=1,!be(l=o.value)||ge(l)){u=NaN;break}if(0===(c+=l)&&(c=Le),0===(a=l+1/a)&&(a=Le),u*=r=a*(c=1/c),g=r-1,Math.abs(g)<=t.tol)break}return f<=1?i:u})),Me},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r();
//# sourceMappingURL=browser.js.map
