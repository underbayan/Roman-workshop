/** Top-k */
const topK = (nums, k) => {
  const iterate = (left, right) => {
    const pivot = nums[left]
    let j = right
    let i = left + 1
    for (; i < j;) {
      if (nums[i] > pivot) { i++; continue }
      [nums[i], nums[j - 1]] = [nums[j - 1], nums[i]]
      j--
    }
    [nums[left], nums[i - 1]] = [nums[i - 1], nums[left]]
    if (i === k) return nums[i - 1]
    if (i < k) return iterate(i, right)
    return iterate(left, i)
  }
  return iterate(0, nums.length)
}

// const params = (neg, n = 100) => Array(n).fill(1).map((v, i, k) => neg ? k.length - i : i + 1)
// console.log(params().map(i => topK(params(0, 10000), i)))
// console.log(params().map(i => topK(params(1, 10000), i)))

// for (let i = 1; i < 6; i++)
//   console.log(topK([5, 5, 5, 3, 2, 1], i))
