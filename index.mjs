// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@esm/index.mjs";var m=e.isPrimitive,a=t.isPrimitive,g=r,d=i,l=n,o=s;var h=function(e,t,r){var i,n;if(!a(e))throw new TypeError(l("invalid argument. First argument must be a string. Value: `%s`.",e));if(!m(t))throw new TypeError(l("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!a(n=r))throw new TypeError(l("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(t>o)throw new RangeError(l("invalid argument. Output string length exceeds maximum allowed string length. Value: `%s`.",t));return(i=(t-e.length)/n.length)<=0?e:(i=d(i),g(n,i)+e)};export{h as default};
//# sourceMappingURL=index.mjs.map
