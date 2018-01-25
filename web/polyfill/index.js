// //this polyfill  should be before any script using promise,
// // the webpack  require.ensure function also should be for  QT browser is not compatible with Promise
/* eslint-disable */
require( 'whatwg-fetch')
require('es6-promise/auto');
function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }

  return maxIndex;
}
if (!Array.prototype.indexOfMax) {
  Array.prototype.indexOfMax = function () {
    if (this.length === 0) {
      return -1;
    }

    var max = this[0];
    var maxIndex = 0;

    for (var i = 1; i < this.length; i++) {
      if (this[i] > max) {
        maxIndex = i;
        max = this[i];
      }
    }
    return maxIndex;
  }
}
if (!Number.EPSILON) {
  // Number.EPSILON = Number.EPSILON||0.0000000000001x
  Object.defineProperty(Number, 'EPSILON', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 0.0000000000001
  });
}
Number.isInteger || (Number.isInteger = Number.isInteger || function (value) {
    return typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value
  })
if (!Array.prototype.fill) {
  Array.prototype.fill = function (value) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined')
    }
    var O = Object(this)
    // Steps 3-5.
    var len = O.length >>> 0
    // Steps 6-7.
    var start = arguments[1]
    var relativeStart = start >> 0
    // Step 8.
    var k = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len)
    // Steps 9-10.
    var end = arguments[2]
    var relativeEnd = end === undefined ?
      len : end >> 0
    // Step 11.
    var final = relativeEnd < 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len)
    // Step 12.
    while (k < final) {
      O[k] = value
      k++
    }
    // Step 13.
    return O
  }
}
/* eslint-enable */
