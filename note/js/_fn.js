// Curry
// Convert a fn with multiple params into a chain of single-argument fns, pratical functions frequently takes moare arguments than one.
// E.g. (...args) => any -> (arg) => curryfn
// Motivation
// Assume a function with 100 parameters, the first 99 parameters are stable and last parameter is varying frequently, then currying could avoid redundant duplicated push and pop actions of params stack. Currying is better than high-order function because variable numbers of parameters. 

const curry = (fn, l = fn.length) => {
  // TODO  anonymous recursion lamada without aux here?
  const aux = (...a) => a.length < l ? (...ia) => aux.apply(this, [...a, ...ia]) : fn.apply(this, a)
  return aux
}

// Compose 
const compose = (...fns) => fns.reduce((a, b) => b ? (...args) => a(b(...args)) : a)

// Proxy apply 
let proxyCallable = new Proxy((a) => a + 1, {
  apply: (target, t, ...args) => {
    console.log(Reflect.apply(target, t, ...args))
    return proxyCallable
  }
})