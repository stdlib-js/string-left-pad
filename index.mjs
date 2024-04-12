// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-left-pad@v0.2.1-esm/index.mjs";function n(n,o,m){var d;if(!r(n))throw new TypeError(t("1Ol3F",n));if(!e(o))throw new TypeError(t("1Ol3X",o));if(arguments.length>2){if(!r(d=m))throw new TypeError(t("1OlAO",d));if(0===d.length)throw new RangeError(t("1Ol1W"))}else d=" ";if(o>s)throw new RangeError(t("1OlAP",o));return i(n,o,d)}export{n as default};
//# sourceMappingURL=index.mjs.map
