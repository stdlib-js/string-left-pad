// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,i=t.__defineGetter__,a=t.__defineSetter__,o=t.__lookupGetter__,c=t.__lookupSetter__,s=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,s){var l,u,p,f;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof s||null===s||"[object Array]"===n.call(s))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+s+"`.");if((u="value"in s)&&(o.call(e,r)||c.call(e,r)?(l=e.__proto__,e.__proto__=t,delete e[r],e[r]=s.value,e.__proto__=l):e[r]=s.value),p="get"in s,f="set"in s,u&&(p||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,s.get),f&&a&&a.call(e,r,s.set),e};function l(e,r,t){s(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function u(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function f(){return p&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString,h=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",b=f()?function(e){var r,t,n,i,a;if(null==e)return g.call(e);t=e[d],a=d,r=null!=(i=e)&&h.call(i,a);try{e[d]=void 0}catch(r){return g.call(e)}return n=g.call(e),r?e[d]=t:delete e[d],n}:function(e){return g.call(e)},w=Number,y=w.prototype.toString,v=f();function m(e){return"object"==typeof e&&(e instanceof w||(v?function(e){try{return y.call(e),!0}catch(e){return!1}}(e):"[object Number]"===b(e)))}function E(e){return u(e)||m(e)}l(E,"isPrimitive",u),l(E,"isObject",m);var _=Number.POSITIVE_INFINITY,S=w.NEGATIVE_INFINITY,j=Math.floor;function x(e){return e<_&&e>S&&j(r=e)===r;var r}function T(e){return u(e)&&x(e)}function k(e){return m(e)&&x(e.valueOf())}function I(e){return T(e)||k(e)}function O(e){return T(e)&&e>=0}function V(e){return k(e)&&e.valueOf()>=0}function F(e){return O(e)||V(e)}function P(e){return"string"==typeof e}l(I,"isPrimitive",T),l(I,"isObject",k),l(F,"isPrimitive",O),l(F,"isObject",V);var R=String.prototype.valueOf,N=f();function $(e){return"object"==typeof e&&(e instanceof String||(N?function(e){try{return R.call(e),!0}catch(e){return!1}}(e):"[object String]"===b(e)))}function A(e){return P(e)||$(e)}l(A,"isPrimitive",P),l(A,"isObject",$);var C=9007199254740991;function G(e){return"number"==typeof e}function Z(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function W(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Z(i):Z(i)+e,n&&(e="-"+e)),e}var L=String.prototype.toLowerCase,M=String.prototype.toUpperCase;function U(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!G(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=W(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=W(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===M.call(e.specifier)?M.call(t):L.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function B(e){return"string"==typeof e}var X=Math.abs,Y=String.prototype.toLowerCase,z=String.prototype.toUpperCase,q=String.prototype.replace,D=/e\+(\d)$/,H=/e-(\d)$/,J=/^(\d+)$/,K=/^(\d+)e/,Q=/\.0$/,ee=/\.0*e/,re=/(\..*[^0])0*e/;function te(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!G(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":X(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=q.call(t,re,"$1e"),t=q.call(t,ee,"e"),t=q.call(t,Q,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=q.call(t,D,"e+0$1"),t=q.call(t,H,"e-0$1"),e.alternate&&(t=q.call(t,J,"$1."),t=q.call(t,K,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===z.call(e.specifier)?z.call(t):Y.call(t)}function ne(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ie(e,r,t){var n=r-e.length;return n<0?e:e=t?e+ne(n):ne(n)+e}var ae=String.fromCharCode,oe=isNaN,ce=Array.isArray;function se(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function le(e){var r,t,n,i,a,o,c,s,l;if(!ce(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(B(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=se(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,oe(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,oe(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=U(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!oe(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=oe(a)?String(n.arg):ae(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=te(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=W(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ie(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var ue=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function pe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function fe(e){var r,t,n,i;for(t=[],i=0,n=ue.exec(e);n;)(r=e.slice(i,ue.lastIndex-n[0].length)).length&&t.push(r),t.push(pe(n)),i=ue.lastIndex,n=ue.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function ge(e){return"string"==typeof e}function he(e){var r,t,n;if(!ge(e))throw new TypeError(he("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=fe(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return le.apply(null,t)}function de(e,r){var t,n;if(!P(e))throw new TypeError(he("invalid argument. First argument must be a string. Value: `%s`.",e));if(!O(r))throw new TypeError(he("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(0===e.length||0===r)return"";if(e.length*r>C)throw new RangeError(he("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e.length*r));for(t="",n=r;1==(1&n)&&(t+=e),0!=(n>>>=1);)e+=e;return t}var be=Math.ceil;function we(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function(e,r,t){var n,i;if(!P(e))throw new TypeError(we("0hE3R",e));if(!O(r))throw new TypeError(we("0hE3k",r));if(arguments.length>2){if(!P(i=t))throw new TypeError(we("0hEB6",i));if(0===i.length)throw new RangeError(we("0hE1f"))}else i=" ";if(r>C)throw new RangeError(we("0hEB7",r));return(n=(r-e.length)/i.length)<=0?e:de(i,n=be(n))+e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).lpad=r();
//# sourceMappingURL=browser.js.map
