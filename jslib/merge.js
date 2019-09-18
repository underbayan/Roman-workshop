function merge(targetObj, sourceObj, deepExtend) {

  /* Defaul the target object */
  targetObj = targetObj || {};

  for (var prop in sourceObj) {

    /* Check the property of the source object */
    if (sourceObj.hasOwnProperty(prop)) {

      /* If deep extend is enabled and the source property is an object, recurse */
      if (deepExtend && typeof sourceObj[prop] === "object") {
        targetObj[prop] = merge(targetObj[prop], sourceObj[prop], true);
      } else {
        targetObj[prop] = sourceObj[prop];
      }
    }
  }

  /* Return the extended object */
  return targetObj;
}
