const sort = (nums) => {
  const list = Array(nums.length).fill(1).map((_, i) => i)
  const swap = (a, b) => {
    [nums[a], nums[b]] = [nums[b], nums[a]];
    [list[a], list[b]] = [list[b], list[a]];
  }
  const aux = (left, right) => {
    if (left >= right) return;
    const originl = left
    const originr = right
    pivot = nums[left];
    left += 1
    while (left <= right) {
      if (pivot > nums[left]) {
        left++
      } else {
        swap(left, right)
        right--
      }
    }
    swap(originl, left - 1)
    // console.log("originl, originr", originl, originr, left, nums)
    aux(originl, left - 1)
    aux(left, originr)
  }
  aux(0, nums.length - 1)
  return list
}
// console.log(sort([1, 2, 3, 4, 5, 6, 7]))
// console.log(sort([7, 6, 5, 4, 3, 2, 1]))
// console.log(sort([7, 6, 5, 5, 3, 5, 7]))

console.log(sort([1, 1, 1, 1, 1, 1, 1, 1]))