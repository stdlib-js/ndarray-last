/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isObject = require( '@stdlib/assert-is-plain-object' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isIntegerArray = require( '@stdlib/assert-is-integer-array' ).primitives;
var isEmptyCollection = require( '@stdlib/assert-is-empty-collection' );
var normalizeIndices = require( '@stdlib/ndarray-base-to-unique-normalized-indices' );
var join = require( '@stdlib/array-base-join' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {NonNegativeInteger} ndims - number of input ndarray dimensions
* @param {Options} options - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform the operation
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'dims': [ 0 ]
* };
* var err = validate( opts, 2, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, ndims, options ) {
	var tmp;
	if ( !isObject( options ) ) {
		return new TypeError( format( '2nR2V', options ) );
	}
	if ( hasOwnProp( options, 'dims' ) ) {
		opts.dims = options.dims;
		if ( !isIntegerArray( opts.dims ) && !isEmptyCollection( opts.dims ) ) {
			return new TypeError( format( '2nRHk', 'dims', opts.dims ) );
		}
		tmp = normalizeIndices( opts.dims, ndims-1 );
		if ( tmp === null ) {
			return new RangeError( format( '2nRHl', 'dims', join( opts.dims, ',' ) ) );
		}
		if ( tmp.length !== opts.dims.length ) {
			return new Error( format( '2nRHu', 'dims', join( opts.dims, ',' ) ) );
		}
		opts.dims = tmp;
	}
	return null;
}


// EXPORTS //

module.exports = validate;
