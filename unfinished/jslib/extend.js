const merge = require('./merge')

function extend(obj, extensions, deepExtend) {

  if (typeof obj !== "object") {
    throw new Error("Only objects can be extended");
  }

  var extensionArray = [].concat(extensions);

  for (var i = 0; i < extensionArray.length; i++) {
    var sourceObj = extensionArray[i];
    merge(obj, sourceObj, deepExtend);
  }

  return obj;
}
