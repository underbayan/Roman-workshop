//https://leetcode.cn/problems/split-the-array-to-make-coprime-products/

// 分解质因数的方法比此方法好～
const gcd = function (a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
};
/** 
01111111111111111111
x0211111111111111111
xx031111111111111111
xxx04111111111111111
xxxx0511111111111111
1111----------------
1111----------------
1111----------------
1111----------------
1111----------------
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findValidSplit = function (nums) {
  const l = nums.length
  if (l < 2) return -1
  let minRight = l
  for (let i = 0; i < l; i++) {
    let ri = 0
    for (let j = l - 1; j > i; j--) {
      const isP = gcd(nums[i], nums[j]) === 1 ? 1 : 0
      ri = (ri || 0) + isP
      if (!isP || minRight <= ri) break;
    }
    if (ri > l - 2 - i && minRight >= ri) return i
    minRight = Math.min(minRight, ri)
    if (minRight < 1) break;
  }
  return -1
};