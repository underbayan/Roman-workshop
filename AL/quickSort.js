#!/usr/bin/env node
'use strict'
//a: array, si: startIndex, ei: endIndex
function qsort(a, si, ei) {
  //base case
  if (ei <= si || si >= ei) {}
  else {
    let pivot = a[si];
    let i = si + 1;
    let tmp;
    //partition array
    for (let j = si + 1; j <= ei; j++) {
      if (pivot > a[j]) {
        tmp = a[j];
        a[j] = a[i];
        a[i] = tmp;
        i++;
      }
    }
    //put pivot in right position
    a[si] = a[i - 1];
    a[i - 1] = pivot;
    console.log(a)
    //call qsort on right and left sides of pivot
    qsort(a, si, i - 2);
    qsort(a, i, ei);
  }
  return a
}
// test line
let a = [4, 7, 6, 34, 1, 22, 10, 0,5]
console.log(qsort(a, 0, 8))
