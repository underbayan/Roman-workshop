const ht = '\n =============\n '
const handler = {
  getPrototypeOf: _ => _,
  setPrototypeOf: _ => _,
  isExtensible: _ => _,
  preventExtensions: _ => _,
  getOwnPropertyDescriptor: _ => _,
  defineProperty: (target, args, desc) => {
    console.log('target, args ,desc ::' + ht, target, args, desc)
    return false
  },
  getPrototypeOf(target) {
    console.log('#get type#  target ::' + ht, target)
    return {
      configurable: true,
      enumerable: true
    }
  },
  get: (obj, prop) => {
    console.log('#get# obj, prop ::' + ht, obj, prop)
  },
  set: (obj, prop, value) => {
    console.log('#set# obj, prop, value ::' + ht, obj, prop, value)
  },
  construct: (target, args) => {
    console.log('#new# target, args ::' + ht, target, args)
    return target
  },
  apply: (target, args) => {
    console.log('#apply# target, args ::' + ht, target, args)
    return target
  },
  deleteProperty: (target, args) => {
    console.log('#del# target, args ::' + ht, target, args)
    return target
  },

  has: (target, args) => {
    console.log('#in#target, args ::' + ht, target, args)
    return target
  },
  ownKeys: (target, args) => {
    console.log('#keys# target, args ::' + ht, target, args)
    return Reflect.ownKeys(target)
  }
}
function A(a) {
  this._a = _ => _
}
const p = new Proxy(A, handler)
Object.getPrototypeOf(p)
p.a
p.a = 1
p.__b == 223
new p(0)
p(1)
delete p.a
console.log('_a' in p)
// Object.keys(p) ??? TypeError: 'getOwnPropertyDescriptor' on proxy: trap reported non-configurability for property 'length' which is either non-existant or configurable in the proxy target
// p.call(null, 1) ???
