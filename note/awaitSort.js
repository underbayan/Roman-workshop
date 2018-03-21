// #!/usr/bin/env node
// let assert = require('assert')

/**
 * @param timer
 * @return {quickSort}
 */
function quickSortHandler(timer) {
  let _flag = 1

  /**
   * @param arr
   * @param pivot
   * @param left
   * @param right
   * @return {*}
   */
  function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot],
      partitionIndex = left
    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, partitionIndex)
        partitionIndex++
      }
    }
    swap(arr, right, partitionIndex)
    return partitionIndex
  }

  /**
   * @param arr
   * @param i
   * @param j
   */
  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  /**
   * @param arr
   * @param left
   * @param right
   * @param callback
   */
  function quickSort(arr, left, right, callback) {
    let pivot, partitionIndex
    if (left < right) {
      _flag++
      pivot = right
      partitionIndex = partition(arr, pivot, left, right)
      setTimeout(()=>quickSort(arr, left, partitionIndex - 1, callback), timer)
      setTimeout(()=>quickSort(arr, partitionIndex + 1, right, callback), timer)
    }
    else {
      _flag--
      if (!_flag) {
        _flag = 1
        callback()
      }
    }
  }

  return quickSort
}
let randomList = l=>Array.from({length: l}, () => Math.random());
var st = new Date()
let qs = quickSortHandler(20);
let arr = randomList(5000)
qs(arr, 0, arr.length - 1, ()=> {
  var et = new Date()
  for (var i = 0; i < arr.length - 1; i++) {
    // assert.ok(arr[i] < arr[i + 1], 'error')
  }
  console.log(et - st)
})




