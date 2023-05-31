
// /**
//  * https://leetcode.cn/problems/minimum-time-to-repair-cars/
//  * @param {number[]} ranks
//  * @param {number} cars
//  * @return {number}
//  */
// 二分法更好
var repairCars = function (ranks, cars) {
  const rks = ranks.map(r => ({ r, n: 0, cost: r }))
  const findMin = () => {
    let i = 0
    let tiny = Infinity
    rks.map((r, index) => {
      if (r.cost < tiny) {
        tiny = r.cost
        i = index
      }
    })
    return i
  }
  let max = 0
  while (cars) {
    cars--
    const index = findMin()
    rks[index].n += 1
    max = rks[index].cost > max ? rks[index].cost : max
    rks[index].cost = (rks[index].n + 1) * (rks[index].n + 1) * rks[index].r
  }
  return max
};