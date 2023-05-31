const { nmerge } = require("./_nmerge.withheap")

function quickMerge(arr, comparator = (a, b) => a < b, blockLength = 1000) {
  const chunksLength = Math.floor(arr.length / blockLength)
  const tmp = []
  for (let i = 0; i < chunksLength + 1; i++) {
    const index = i * blockLength
    tmp.push(arr.slice(index, index + blockLength).sort((a, b) => comparator(a, b) ? -1 : 1))
  }
  return nmerge(tmp, comparator)
}

exports.quickMerge = quickMerge

// const { assert } = require("console")
// const arrayLength = 500000 - 1
// const randomList = l => Array.from({ length: l }, () => Math.floor(Math.random() * l));
// for (let i = 0; i < 10; i++) {
//   let arr = randomList(arrayLength)
//   let st = performance.now()
//   arr.sort()
//   let originCost = performance.now() - st

//   arr = randomList(arrayLength)
//   st = performance.now()
//   let qs = quickMerge(arr);
//   let mergeCost = performance.now() - st
//   console.log('Speed Compare:', (mergeCost + 0.0) / originCost)
//   //------------------------------------

//   for (let i = 0; i < qs.length - 1; i++) {
//     assert(qs[i] <= qs[i + 1])
//     break;
//   }
// }