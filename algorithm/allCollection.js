

const displayAllCollection = (str = "aabb") => { //aabb,bbaa,abab,baba,abba,baab
  const l = str.length
  const pos = []
  const setPos = (next, i) => {
    if (str[next - 1] === str[next]) {
      if (pos[next - 1] + 1 !== i && pos[next - 1] - 1 !== i) {
        pos[next] = i
        return true
      }
      return false
    }
    pos[next] = i
    return true
  }
  const aux = (next, columns = 0) => {
    if (next === l) { console.log(pos); return }
    for (let i = 0; i < l; i++) {
      if (!(columns & 1 << i) && setPos(next, i)) {
        aux(next + 1, columns | 1 << i)
      }
      pos[next] = -1
    }
  }
  aux(0)
}

displayAllCollection()