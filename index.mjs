// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.0.8-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-left-pad@v0.0.2-esm/index.mjs";function n(n,o,m){var d;if(!r(n))throw new TypeError(t("0hE3R",n));if(!e(o))throw new TypeError(t("0hE3k",o));if(arguments.length>2){if(!r(d=m))throw new TypeError(t("0hEB6",d));if(0===d.length)throw new RangeError(t("0hE1f"))}else d=" ";if(o>s)throw new RangeError(t("0hEB7",o));return i(n,o,d)}export{n as default};
//# sourceMappingURL=index.mjs.map
