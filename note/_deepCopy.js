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
