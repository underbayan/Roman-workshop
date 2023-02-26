/**
 * @description calculate Levenshtein distance, delete action increase 1, adding action increases 1, replace action increases replaceDistance 
 * @param string1 string  
 * @param string2 string 
 * @return Levenshtein map, result[string1.length][string2.lenght] is final Levenshtein distance 
 * following table shows the Levenshtein distance between "bcdef" and "abcdef". (replaceDistance=2)
 * table[i][j] represent the Levenshtein distance between "bcdef".slice(0,i) and "abcdef".slice(0,j)
  ┌─────────┬───┬───┬───┬───┬───┬───┐
  │ (index) │   │ b │ c │ d │ e │ f │
  ├─────────┼───┼───┼───┼───┼───┼───┤
  │         │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │
  │    a    │ 1 │ 1 │ 2 │ 3 │ 4 │ 5 │
  │    b    │ 2 │ 1 │ 2 │ 3 │ 4 │ 5 │
  │    c    │ 3 │ 2 │ 1 │ 2 │ 3 │ 4 │
  │    d    │ 4 │ 3 │ 2 │ 1 │ 2 │ 3 │
  │    e    │ 5 │ 4 │ 3 │ 2 │ 1 │ 2 │
  │    f    │ 6 │ 5 │ 4 │ 3 │ 2 │ 1 │
  └─────────┴───┴───┴───┴───┴───┴───┘
 */

const strDiff = (string1, string2, replaceDistance = 1) => {
  const m = string1.length
  const n = string2.length
  const minPath = []
  for (let j = 0; j < n + 1; j++) { minPath[j] = []; minPath[j][0] = j }
  for (let i = 0; i < m + 1; i++) { minPath[0][i] = i }
  for (let j = 1; j < n + 1; j++) {
    for (let i = 1; i < m + 1; i++) {
      minPath[j][i] = Math.min(
        minPath[j - 1][i - 1] + (string1[i - 1] === string2[j - 1] && string1[i - 1] !== undefined ? 0 : replaceDistance),
        minPath[j - 1][i] + 1,
        minPath[j][i - 1] + 1)
    }
  }
  return minPath
}
module.exports = strDiff
