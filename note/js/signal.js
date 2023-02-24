/**
 * @description A simple implementation to reproduce the signal function of Solidjs
 */
const buckets = new Map()
let globalTempEffectHandler = null
const obj = { _id: Math.random(), __proto__: null }

const objProxy = new Proxy(obj,
  {
    get(target, key) {
      const ins = buckets.get(target)
      if (ins) {
        ins[key] = ins[key] || new Set
        ins[key].add(globalTempEffectHandler) /** TODO: optimization should call this once */
      } else {
        const ins = { __proto__: null }
        ins[key] = new Set
        ins[key].add(globalTempEffectHandler)
        buckets.set(target, ins)
      }
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      const ins = buckets.get(target)
      ins && ins[key] && ins[key].forEach((fn) => fn && fn())
      return true
    }
  }
)

  // Following is how to register the effect functions. They should vary from different rendering framework.
  ;
(function sideEffect1() {
  globalTempEffectHandler = sideEffect1
  console.log(objProxy.name)
  globalTempEffectHandler = null
})()
  ;
(function sideEffect2() {
  globalTempEffectHandler = sideEffect2
  console.log(objProxy.age)
  globalTempEffectHandler = null
})()

objProxy.name = "John"
objProxy.age = 22
