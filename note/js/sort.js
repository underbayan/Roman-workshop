#!/usr/bin/env node
var arr = [];
for (var i = 0; i < 10000000; i++) {
  arr.push(Math.random());
}

function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
    partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function quickSortHandler() {
  var flag = 1
  return function quickSort(arr, left, right, callback) {
    var len = arr.length,
      pivot,
      partitionIndex, result;
    if (left < right) {
      flag++
      pivot = right;
      partitionIndex = partition(arr, pivot, left, right);
      if (left < right - 100) {
        setTimeout(() => quickSort(arr, left, partitionIndex - 1, callback), 0);
        setTimeout(() => quickSort(arr, partitionIndex + 1, right, callback), 0);
      } else {
        quickSort(arr, left, partitionIndex - 1, callback);
        quickSort(arr, partitionIndex + 1, right, callback);
      }

    }
    else {
      flag--
      if (!flag) {
        callback()
      }
    }
  }
}

var st = new Date();
var qs = quickSortHandler();
qs(arr, 0, arr.length - 1, () => {
  var et = new Date();
  console.log(arr)
  console.log(et - st)
})
