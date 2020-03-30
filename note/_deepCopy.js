function deepCopy(obj) {
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (typeof obj === "funciton") {
    const _fun = eval(obj.toString());
    _fun.prototype = obj.prototype;
    return _fun;
  }
  if (obj.nodeType && typeof obj.cloneNode == "function") {
    return obj.cloneNode(true);
  }
  if (typeof obj == "object") {
    var _finalObj = {};
    for (var i in obj) {
      _finalObj[i] = deepCopy(obj[i]);
    }
    return _finalObj;
  }
  return obj;
}
