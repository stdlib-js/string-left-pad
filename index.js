// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(u.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=c):t[e]=a.value),p="get"in a,y="set"in a,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,a.get),y&&i&&i.call(t,e,a.set),t};function c(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,g=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",h=y()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[s],i=s,e=null!=(o=t)&&g.call(o,i);try{t[s]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[s]=r:delete t[s],n}:function(t){return b.call(t)},m=Number,v=m.prototype.toString,d=y();function _(t){return"object"==typeof t&&(t instanceof m||(d?function(t){try{return v.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function w(t){return f(t)||_(t)}c(w,"isPrimitive",f),c(w,"isObject",_);var j=Number.POSITIVE_INFINITY,E=m.NEGATIVE_INFINITY,S=Math.floor;function O(t){return t<j&&t>E&&S(e=t)===e;var e}function T(t){return f(t)&&O(t)}function I(t){return _(t)&&O(t.valueOf())}function P(t){return T(t)||I(t)}function N(t){return T(t)&&t>=0}function V(t){return I(t)&&t.valueOf()>=0}function x(t){return N(t)||V(t)}function R(t){return"string"==typeof t}c(P,"isPrimitive",T),c(P,"isObject",I),c(x,"isPrimitive",N),c(x,"isObject",V);var F=String.prototype.valueOf,k=y();function A(t){return"object"==typeof t&&(t instanceof String||(k?function(t){try{return F.call(t),!0}catch(t){return!1}}(t):"[object String]"===h(t)))}function G(t){return R(t)||A(t)}c(G,"isPrimitive",R),c(G,"isObject",A);var B=9007199254740991;function C(t,e){var r,n;if(!R(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(!N(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===t.length||0===e)return"";if(t.length*e>B)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(r="",n=e;1==(1&n)&&(r+=t),0!=(n>>>=1);)t+=t;return r}var M=Math.ceil;function Y(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function(t,e,r){var n,o;if(!R(t))throw new TypeError(Y("0hE3R",t));if(!N(e))throw new TypeError(Y("0hE3k",e));if(arguments.length>2){if(!R(o=r))throw new TypeError(Y("0hEB6",o));if(0===o.length)throw new RangeError(Y("0hE1f"))}else o=" ";if(e>B)throw new RangeError(Y("0hEB7",e));return(n=(e-t.length)/o.length)<=0?t:C(o,n=M(n))+t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).lpad=e();
//# sourceMappingURL=index.js.map
