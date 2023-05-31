const { Heap } = require("./_simple.heap")
// Merge serveral sorted array
exports.nmerge = (arrs, cp = (a, b) => a < b) => {
  const idxs = new Array(arrs.length).fill(0)
  const heap = new Heap(arrs.map((a, i) => ({ i, v: a[0] })), (a, b) => cp(a.v, b.v))
  const result = []
  while (heap.peek) {
    const top = heap.pop()
    result.push(top.v)
    const i = top.i
    if (idxs[i] + 1 < arrs[i].length) {
      idxs[i]++
      heap.push({ i: top.i, v: arrs[i][idxs[i]] })
    }
  }
  return result
}

// Test:
// const { assert } = require("console")
// const arrGen = () => Array(50).fill(1).map(r => Math.random()).sort((a, b) => a - b)
// const data = Array(500).fill(1).map(r => arrGen())
// let previous = -1
// nmerge(data).map(d => {
//   assert(d >= previous)
//   previous = d
// })