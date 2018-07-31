function cloneObject(obj, deepClone) {

  /* Make sure we're working with an object */
  if (typeof obj !== "object") {
    throw new Error("Value provided is not an object");
  }

  /* Define a base target object */
  var clonedObj = {};

  /* Add cloned properties to the target object and recurse if necessary */
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      clonedObj[prop] = deepClone ? clone(obj[prop], deepClone) : obj[prop];
    }
  }

  return clonedObj;
}

/**
 * A helper method to clone an array
 *
 * @private
 * @param  {Array} arr The array to be cloned
 * @param  {Boolean} A boolean to indicate whether the method should recurse through the object tree
 * @return {Array}
 */
function cloneArray(arr, deepClone) {

  /* Make sure we're working with an array */
  if (!isArray(arr)) {
    throw new Error("Value provided is not an array");
  }

  /* Map the array to a new array and recurse if necessary */
  var clonedArr = arr.map(function (item) {
    return deepClone ? clone(item, deepClone) : item;
  });

  return clonedArr;
}

/**
 * A helper method to clone a function
 *
 * @param  {Function} func The function to be cloned
 * @return {Function}
 */
function cloneFunction(func) {

  /* Make sure we're working with a function */
  if (typeof func !== "function") {
    throw new Error("Value provided is not a function");
  }

  return func.bind({});
}


function clone(obj, deepClone) {

  /* Default deep cloning to false */
  deepClone = deepClone || false;

  /* Test the object type and clone accordingly */
  var clonedObj = obj;
  switch (true) {
    case (obj instanceof Element && typeof obj === "object" && obj.nodeName):
      clonedObj = obj.cloneNode(deepClone);
      break;
    case (obj instanceof Object || typeof obj === "object"):
      clonedObj = cloneObject(obj, deepClone)
      break;
    case (obj instanceof Array || isArray(obj)):
      clonedObj = cloneArray(obj, deepClone);
      break;
    case (obj instanceof Function || typeof obj === "function"):
      clonedObj = cloneFunction(obj);
      break;
    case (obj instanceof Date):
      clonedObj = new Date();
      clonedObj.setTime(obj.getTime());
      break;
  }

  return clonedObj;
}
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);
const btoa = str => new Buffer(str, 'binary').toString('base64');
