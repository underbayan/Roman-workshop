// https://leetcode.cn/problems/combinations/description/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = []
  const tempResult = []
  const aux = (step = 0, previous = 0) => {
    if (previous > n || k - step > n - previous) return
    if (step === k) {
      result.push(Array.from(tempResult))
      return
    }
    tempResult.push(previous + 1)
    aux(step + 1, previous + 1)
    tempResult.pop()
    aux(step, previous + 1)
  }
  aux()

  return result
};


var combine = function (n, k) {
  const result = []
  const tempResult = []
  const aux = (step = k, previous = n) => {
    if (previous < 1 || step > previous) return
    if (step === 0) {
      result.push(Array.from(tempResult))
      return
    }
    tempResult.push(previous - 1)
    aux(step - 1, previous - 1)
    tempResult.pop()
    aux(step, previous - 1)
  }
  aux()

  return result
};



