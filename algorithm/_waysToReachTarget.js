
// https://leetcode.cn/problems/number-of-ways-to-earn-points/description/
const waysToReachTarget = function (target, types) {
  const cache = []
  const aux = (iTarget, iTypes, index) => {
    if (index >= iTypes.length) return 0
    let sum = 0
    const [count, mark] = iTypes[index++]
    for (let k = 0; k <= count; k++) {
      const next = iTarget - mark * k
      if (next === 0) {
        sum += 1;
        break;
      }
      if (next < 0) {
        break;
      }
      const key = next + index * target
      cache[key] = cache[key] !== undefined ? cache[key] : aux(next, iTypes, index)
      sum += cache[key]
    }
    return sum % 1000000007
  }
  return aux(target, types, 0)
};

const waysToReachTarget = function (target, types) {
  const length = types.length
  const modV = 10e9 + 7
  let sum = 0;
  let targets = [target]
  for (let index = 0; index < length; index++) {
    const [count, mark] = types[index]
    const pLength = targets.length
    const newList = Array(pLength * (count + 1))
    for (let j = 0; j < pLength; j++) {
      const iTarget = targets[j]
      for (let k = 0; k < count + 1; k++) {
        const next = iTarget - mark * k
        if (next === 0) {
          sum += 1;
          break;
        }
        if (next < 0) {
          break;
        }
        newList.push(next)
      }
      sum %= (10e9 + 7)
    }
    targets = newList
  }
  return sum
};

const waysToReachTarget = function (target, types) {
  return types.reduce((remain, [count, mark]) => {
    for (let j = 1; j < target + 1; j++) {
      if (remain[j]) {
        // k start from 1, since when k=0, remain[next] = remain[j] + 0 , then we could directly reuse remain list:remain[next] += remain[j],  
        for (let k = 1; k < count + 1; k++) {
          const next = j - mark * k
          if (next >= 0) {
            remain[next] = (remain[j] + remain[next]) % 1000000007
          } else break;
        }
      }
    }
    return remain
  }, [...Array(target).fill(0), 1])[0]
};

// following output should be 342808744
const result = waysToReachTarget(500, [[6, 1], [49, 2], [33, 3], [26, 4], [28, 5], [45, 6], [4, 7], [23, 8], [46, 9], [39, 10], [12, 11], [28, 12], [37, 13], [18, 14], [10, 15], [27, 16], [26, 17], [10, 18], [34, 19], [11, 20], [35, 21], [5, 22], [47, 23], [19, 24], [15, 25], [27, 26], [50, 27], [3, 28], [24, 29], [18, 30], [49, 31], [32, 32], [18, 33], [5, 34], [34, 35]])
console.log(result)