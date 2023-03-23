class stackMap extends Set {
  list = []60
  push(value) {
    super.add(value)
    this.list.push(value)
  }
  pop(n = 1) {
    while (n--) {
      super.delete(this.list.pop())
    }
  }
}
const nqueen = (n = 12) => {
  const qs = Array(n).fill(1).map((_, index) => 1 << index).reduce((a, b) => a + b)
  const white = new stackMap
  let result = 0
  const time = performance.now()
  const isNthWork = (nth, step) => {
    if (!white.has(step + nth) && !white.has(n * 3 - 2 - nth + step)) {
      white.push(step + nth)
      white.push(n * 3 - 2 - nth + step)
      return true
    }
    return false
  }
  const aux = (left, step = 0) => {
    if (left === 0 && step === n) result += 1
    const oleft = left
    let nth = 0
    do {
      if (left & 1 && isNthWork(nth, step)) {
        aux(oleft - (1 << nth), step + 1)
        white.pop(white.size - step * 2)
      }
      nth++
    } while (left = left >> 1)
  }
  aux(qs)
  console.log(result)
  console.log(performance.now() - time)

  return result
}
nqueen(16) // 10min :((
