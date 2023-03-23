const nthLargest = (nums, k) => {
  const swap = (ai, bi) => {
    const tmp = nums[bi]
    nums[bi] = nums[ai]
    nums[ai] = tmp
  }
  const iterate = (left, right) => {
    const pivot = nums[left]
    let j = right
    let i = left + 1
    for (; i < j;) {
      if (nums[i] > pivot) { i++; continue }
      swap(i, j - 1)
      j--
    }
    swap(left, i - 1)
    if (i === k) return nums[i - 1]
    if (i < k) return iterate(i, right)
    return iterate(left, i)
  }
  return iterate(0, nums.length)
}

const params = (neg, n = 100) => Array(n).fill(1).map((v, i, k) => neg ? k.length - i : i + 1)
console.log(params().map(i => nthLargest(params(0, 10000), i)))
console.log(params().map(i => nthLargest(params(1, 10000), i)))

for (let i = 1; i < 6; i++)
  console.log(nthLargest([5, 5, 5, 3, 2, 1], i))
