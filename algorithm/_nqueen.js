// const nqueen = (n = 12) => {
//   const qs = Array(n).fill(1).map((_, index) => 1 << index).reduce((a, b) => a + b)
//   let white = 0
//   let black = 0
//   let result = 0
//   const time = performance.now()
//   const aux = (left, step = 0) => {
//     if (left === 0 && step === n) result += 1
//     const oleft = left
//     let nth = 0
//     do {
//       if (left & 1) {
//         const owhite = white
//         const oblack = black
//         const iw = 1 << (step + nth), ib = 1 << (n - 1 - nth + step)
//         if ((white & iw) === 0 && (black & ib) === 0) {
//           white |= iw
//           black |= ib
//           aux(oleft - (1 << nth), step + 1)
//           white = owhite
//           black = oblack
//         }
//       }
//       nth++
//     } while (left >>= 1)
//   }
//   aux(qs)
//   console.log(result)
//   console.log(performance.now() - time)
//   return result
// }

const nqueen = (n = 12) => {
  const qs = Array(n).fill(1).map((_, index) => 1 << index).reduce((a, b) => a + b)
  let white = 0
  let black = 0
  let result = 0
  const time = performance.now()
  const aux = (left, step = 0) => {
    if (left === 0 && step === n) result += 1
    const oleft = left
    let nth = 0
    do {
      if (left & 1) {
        const owhite = white
        const oblack = black
        const iw = 1 << (step + nth), ib = 1 << (n - 1 - nth + step)
        if ((white & iw) === 0 && (black & ib) === 0) {
          white |= iw
          black |= ib
          aux(oleft - (1 << nth), step + 1)
          white = owhite
          black = oblack
        }
      }
      nth++
    } while (left >>= 1)
  }
  aux(qs)
  console.log(result)
  console.log(performance.now() - time)
  return result
}
nqueen(12) // 10min :((

nqueen(12) // 10min :((
