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

# Left Pad

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Left pad a string.

<section class="installation">

## Installation

```bash
npm install @stdlib/string-left-pad
```

</section>

<section class="usage">

## Usage

```javascript
var lpad = require( '@stdlib/string-left-pad' );
```

#### lpad( str, len\[, pad] )

Left pads a `string` such that the padded `string` has a `length` of **at least** `len`.

```javascript
var str = lpad( 'a', 5 );
// returns '    a'
```

By default, an input `string` is padded with `spaces`. To pad with a different character or sequence of characters, provide a `pad` string.

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

-   An output `string` is **not** guaranteed to have a length of **exactly** `len`, but to have a `length` of **at least** `len`. To generate a padded `string` having a `length` equal to `len`

    ```javascript
    var str = lpad( 'boop', 10, 'beep' ); // => length 12
    // returns 'beepbeepboop'

    str = str.substring( str.length-10 ); // => length 10
    // returns 'epbeepboop'
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math-base-special-round' );
var randu = require( '@stdlib/random-base-randu' );
var lpad = require( '@stdlib/string-left-pad' );

var str = 'beep';
var n;
var i;

for ( i = 0; i < 100; i++ ) {
    n = round( randu()*10 ) + str.length;
    console.log( lpad( str, n, 'b' ) );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-left-pad
```

</section>

<section class="usage">

### Usage

```text
Usage: lpad [options] [<string>] --len=<length>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --len length          Minimum string length.
         --pad str             String used to pad. Default: ' '.
```

</section>

<!-- /.usage -->

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

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   [`@stdlib/string/pad`][@stdlib/string/pad]: pad a string.
-   [`@stdlib/string/right-pad`][@stdlib/string/right-pad]: right pad a string.

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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-left-pad.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-left-pad

[test-image]: https://github.com/stdlib-js/string-left-pad/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/string-left-pad/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-left-pad/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-left-pad?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-left-pad.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-left-pad/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-left-pad/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

<!-- <related-links> -->

[@stdlib/string/pad]: https://github.com/stdlib-js/string-pad

[@stdlib/string/right-pad]: https://github.com/stdlib-js/string-right-pad

<!-- </related-links> -->

</section>

<!-- /.links -->
