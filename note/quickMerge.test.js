#!/usr/bin/env node
let assert = require('assert')
let quickMerge = require('./quickMerge')
let randomList = l=>Array.from({length: l}, () => Math.floor(Math.random() * l));
for (let i = 0; i < 10; i++) {
  //------------------------------------
  let arr = randomList(500000)
  let st = new Date()
  arr.sort()
  let originCost = new Date() - st
  //------------------------------------
  arr = randomList(500000)
  st = new Date()
  let qs = quickMerge(arr);
  let mergeCost = new Date() - st
  console.log('Speed Compare:', (mergeCost + 0.0) / originCost)
  //------------------------------------

  for (let i = 0; i < arr.length - 1; i++) {
    assert.ok(arr[i] <= arr[i + 1], 'error')
  }
}
