//a: array, si: startIndex, ei: endIndex
exports.qsort = function qsort(a, si = 0, ei = a.length) {
  if (ei <= si || si >= ei) { }
  else {
    let pivot = a[si];
    let i = si + 1;
    for (let j = si + 1; j <= ei; j++) {
      if (pivot > a[j]) {
        [a[i], a[j]] = [a[j], a[i]]
        i++;
      }
    }
    a[si] = a[i - 1];
    a[i - 1] = pivot;
    qsort(a, si, i - 2);
    qsort(a, i, ei);
  }
  return a
}
// Test:
// const { assert } = require("console")
// let previous = -1
// qsort(Array(5000).fill(1).map(r => Math.random())).map(d => (assert(d >= previous), previous = d))