
class BitMap {
  constructor(max = (1 << 23), min = 0) { // 23 => 1MB (3 * 1024 * 1024), 
    if (max > Math.pow(2, 53) - 1) { //number: f64-> exculde 1 positive/nagetive and 11 exponetial, it is with 53 accurate bit
      throw "Out of max range"
    }
    this.buff = new Uint32Array((max - min) / 32)
    this.duplicates = new Set;
    this.min = min
  }
  clear() {
    this.duplicates.clear()
    this.buff.fill(null)
  }
  set(num) /** return boolean, false when duplicated */ {
    const index = num - this.min // offset, avoid negative nums 
    const byteIndex = index >> 5; // 4byte index
    const bitIndex = index & 31; // bit index
    if ((this.buff[byteIndex] >> bitIndex) & 1) { return false }
    else {
      this.buff[byteIndex] |= 1 << bitIndex;
      return true
    }
  }
}

exports.BitMap = BitMap


/** Test cases */
// function findDuplicates(arr) {
//   const bitmap = new BitMap(2048, -1024)
//   bitmap.clear()
//   const duplicates = new Set;
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (!bitmap.set(num)) { duplicates.add(num) }
//   }

//   return duplicates;
// }
// const { assert } = require("console");
// Array(100).fill(1).map(i => {
//   assert(findDuplicates(Array(10000).fill(1).map(i => (Math.floor(Math.random() * 10)) % 10)).size < 11)
// })
// console.log(findDuplicates([0, 0, 1, 1, 12, 12, 2, 2, 2, 2, 3, 4, 4, 13, 13, 15, 15, 16, 16, 234, 234, 256, 256, 511, 511, 512, 512, -1024, -1024]))