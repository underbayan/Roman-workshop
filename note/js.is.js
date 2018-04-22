function isObject (obj) {
  return obj && obj.constructor === Object
}

function isFunction (fn) {
  return typeof fn === 'function'
}

function isGenerator (obj) {
  return obj.constructor && isGeneratorFn(obj.constructor)
}

function isGeneratorFn (fn) {
  return fn.constructor && fn.constructor.name === 'GeneratorFunction'
}

function isAsyncFn (fn) {
  return fn.constructor && fn.constructor.name === 'AsyncFunction'
}
