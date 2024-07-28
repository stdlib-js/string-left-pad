<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# lpad

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Left pad a string.

<section class="installation">

## Installation

```bash
npm install @stdlib/string-left-pad
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var lpad = require( '@stdlib/string-left-pad' );
```

#### lpad( str, len\[, pad] )

Left pads a string such that the padded string has a length of **at least** `len`.

```javascript
var str = lpad( 'a', 5 );
// returns '    a'
```

By default, an input string is padded with a Unicode "space" character (U+0020). To pad with a different character or sequence of characters, provide a `pad` string.

```javascript
var str = lpad( 'beep', 10, 'b' );
// returns 'bbbbbbbeep'

str = lpad( 'boop', 12, 'beep' );
// returns 'beepbeepboop'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An output string is **not** guaranteed to have a length of **exactly** `len`, but to have a length of **at least** `len`. To generate a padded string having a length equal to `len`

    ```javascript
    var str = lpad( 'boop', 10, 'beep' ); // => length 12
    // returns 'beepbeepboop'

    str = str.substring( str.length-10 ); // => length 10
    // returns 'epbeepboop'
    ```

-   This function differs from [`String.prototype.padStart`][mdn-string-padstart] in the following ways:

    -   The function is **not** guaranteed to return a string having a length exactly equal to `len` (as explained above).
    -   The function does **not** truncate `pad` (from the end) in order to ensure the returned string has length `len`.

    To replicate [`String.prototype.padStart`][mdn-string-padstart] truncation behavior

    ```javascript
    var floorb = require( '@stdlib/math-base-special-floorb' );

    function padStart( str, len, pad ) {
        var n;
        if ( len <= str.length ) {
            return str;
        }
        n = floorb( len-str.length, 1, pad.length ) + str.length;
        return pad.substring( 0, len-n ) + lpad( str, n, pad );
    }

    var str = padStart( 'boop', 10, 'beep' );
    // returns 'bebeepboop'
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var lpad = require( '@stdlib/string-left-pad' );

var str = 'beep';
var i;
for ( i = 0; i < 100; i++ ) {
    console.log( lpad( str, discreteUniform( str.length, str.length+10 ), 'b' ) );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/string-left-pad-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: lpad [options] --len=<length> [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --len length          Minimum string length.
         --pad str             String used to pad. Default: ' '.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'beep\nboop' | lpad -len 8 --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | lpad -len 8 --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ lpad beep --len 10 --pad b
bbbbbbbeep
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep' | lpad --len 8
    beep
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'boop\tbeep' |  lpad --len 8 --split '\t'
    boop
    beep
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-pad`][@stdlib/string/pad]</span><span class="delimiter">: </span><span class="description">pad a string.</span>
-   <span class="package-name">[`@stdlib/string-right-pad`][@stdlib/string/right-pad]</span><span class="delimiter">: </span><span class="description">right pad a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-left-pad.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-left-pad

[test-image]: https://github.com/stdlib-js/string-left-pad/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/string-left-pad/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-left-pad/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-left-pad?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-left-pad.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-left-pad/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-left-pad#cli
[cli-url]: https://github.com/stdlib-js/string-left-pad/tree/cli
[@stdlib/string-left-pad]: https://github.com/stdlib-js/string-left-pad/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-left-pad/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-left-pad/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-left-pad/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-left-pad/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-left-pad/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-left-pad/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-left-pad/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-left-pad/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[mdn-string-padstart]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

<!-- <related-links> -->

[@stdlib/string/pad]: https://github.com/stdlib-js/string-pad

[@stdlib/string/right-pad]: https://github.com/stdlib-js/string-right-pad

<!-- </related-links> -->

</section>

<!-- /.links -->
