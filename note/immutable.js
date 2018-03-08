#!/usr/bin/env node
const {Map} = require('immutable')
const {List} = require('immutable')
const assert = require('assert')
const map1 = Map({a: 1, b: 2, c: 3})
const map2 = map1.set('b', 50)
console.log(map1.get('b') + " vs. " + map2.get('b')) // 2 vs. 50
const obj = {d: 100, o: 200, g: 300}
const map3 = map1.merge(map2, obj);
const list1 = List([1, 2]);
const list2 = list1.push(3, 4, 5);
const array = [6, 7, 8, 9]
const listMerge = list1.concat(list2, array)
const list3 = list2.unshift(0);
const list4 = list1.concat(list2, list3);
assert.equal(list1.size, 2);
assert.equal(list2.size, 5);
assert.equal(list3.size, 6);
assert.equal(list4.size, 13);
assert.equal(list4.get(0), 1);



const { fromJS } = require('immutable')
const nested = fromJS({ a: { b: { c: [ 3, 4, 5 ] } } })
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ] } } }
