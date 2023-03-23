// class EventEmitter {
//   callbackMap = {}
//   on(eventName, fn) { 
//     this.callbackMap[eventName] = [...this.callbackMap[eventName],fn]
//   }
//   off(eventName, fn/**?*/) { 
//     this.callbackMap[eventName] = this.callbackMap[eventName].filter(f=>f!==fn)
//   }
//   emit(eventName, payload) { 
//     this.callbackMap[eventName].map(f=>f(payload))
//   }
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const b = { __proto__: null }
// Object.defineProperties(b, {
//   "a": {
//     set: (...arg) => { console.log(arg) },
//     get: (...arg) => { console.log(arg) }
//   }
// })

// b.a = 12
// b.a
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// websocket upgrade => http ? https =>


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// throttle()
// const fetchWithLimit = (...t) => {
//   return fetch(...t)
// }

