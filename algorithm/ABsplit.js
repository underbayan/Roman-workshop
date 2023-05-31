#!/usr/bin/env node
'use strict'
//###给你一个数组 如何找到一个分割这个数组为AB首尾两部分，使得中的元素(ai-bj)*(ak-bm)>0
exports.search = function search(A) {
  var inc = []
  var dec = []
  var length = A.length,
    index,
    cMax = A[0],
    cMin = A[0]
  A.map((o, i) => {
    inc[i] = {}
    cMax = inc[i].max = Math.max(cMax, A[i])
    cMin = inc[i].min = Math.min(cMin, A[i])
  })
  cMax = A[length - 1]
  cMin = A[length - 1]
  A.map((o, i) => {
    index = length - 2 - i
    dec[index] = {}
    cMax = dec[index].max = Math.max(cMax, A[index + 1])
    cMin = dec[index].min = Math.min(cMin, A[index + 1])
  })
  var isOverLap = (a, b) => !(a.min > b.max || a.max < b.min)
  var binarySearch = (start, end) => {
    if (start > end) {
      return -1
    }
    var mid = Math.floor((start + end) / 2)
    if (!isOverLap(inc[mid], dec[mid])) {
      return mid
    } else {
      var result = binarySearch(start, mid - 1)
      if (!~result) return binarySearch(mid + 1, end)
      return result
    }
  }
  return binarySearch(0, length - 2)
}
