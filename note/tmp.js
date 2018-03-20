function deepCopy(obj) {
  if (obj instanceof Date) {
    return new Date(obj)
  }
  if (obj.nodeType && typeof obj.cloneNode == 'function') {
    return obj.cloneNode(true)
  }
  if (typeof obj == 'object') {
    var finalObj = {}
    for (var i in obj) {
      finalObj[i] = deepCopy(obj[i])
    }
    return finalObj
  }
  return obj
}

class arrayMember {
  constructor() {
    this._array = []
  }

  get array() {
    return this._array
  }

  set array(val) {
    this._array = [val]
  }
}
const item = new arrayMember();
item.array = {a: 1};
console.log(item.array);

let plugEs6 = num => [].concat(num).reduce((sum, p)=>sum + p, 0)
