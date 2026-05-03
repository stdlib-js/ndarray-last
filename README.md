<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# last

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a read-only view of the last element (or subarray) along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro section element. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
last = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-last@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var last = require( 'path/to/vendor/umd/ndarray-last/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-last@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.last;
})();
</script>
```

#### last( x\[, options] )

Returns a read-only view of the last element (or subarray) along one or more [`ndarray`][@stdlib/ndarray/ctor] dimensions.

```javascript
var array = require( '@stdlib/ndarray-array' );

var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
// returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]

var v = last( x );
// returns <ndarray>[ 4.0 ]
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **options**: function options.

The function accepts the following `options`:

-   **dims**: list of dimensions over which to perform the operation. If a dimension index is provided as an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`. By default, the function performs the operation over all dimensions.

To resolve the last element (or subarray) along one or more specific dimensions, provide a `dims` option:

```javascript
var array = require( '@stdlib/ndarray-array' );

var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
// returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]

// Last column:
var v = last( x, {
    'dims': [ -1 ]
});
// returns <ndarray>[ 2.0, 4.0 ]

// Last row:
v = last( x, {
    'dims': [ -2 ]
});
// returns <ndarray>[ 3.0, 4.0 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function always returns a **read-only** view. To convert a returned view to a writable [`ndarray`][@stdlib/ndarray/ctor], copy the contents to a new [`ndarray`][@stdlib/ndarray/ctor] (e.g., via [`@stdlib/ndarray-copy`][@stdlib/ndarray/copy]).
-   If provided an empty `dims` array, the function returns a read-only view of the input [`ndarray`][@stdlib/ndarray/ctor].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-last@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x = uniform( [ 3, 3, 3 ], -10.0, 10.0 );
console.log( ndarray2array( x ) );

// Last scalar element:
var v = last( x );
console.log( v.get() );

// Last columns along the innermost dimension:
v = last( x, {
    'dims': [ -1 ]
});
console.log( ndarray2array( v ) );

// Last matrix along the outermost dimension:
v = last( x, {
    'dims': [ 0 ]
});
console.log( ndarray2array( v ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-last.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-last

[test-image]: https://github.com/stdlib-js/ndarray-last/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-last/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-last/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-last?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-last.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-last/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-last/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-last/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-last/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-last/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-last/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-last/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-last/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-last/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/umd

[@stdlib/ndarray/copy]: https://github.com/stdlib-js/ndarray-copy/tree/umd

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
