#!/usr/bin/env node
let assert = require('assert')
let asyncMergeSort = require('./asyncMergeSort')
let randomList = l=>Array.from({length: l}, () => Math.floor(Math.random() * l));
var st = new Date()
let arr = randomList(500)
let qs = asyncMergeSort(arr, ()=> {
  var et = new Date()
  for (var i = 0; i < arr.length - 1; i++) {
    // assert.ok(arr[i] <= arr[i + 1], 'error')
  }
  console.log(et - st)
});
