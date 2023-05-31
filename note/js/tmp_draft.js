///////////////////// 10 -> 26
let ten2TwentySix = (num) => {
  const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // 0 -> A
  // 1 -> B
  // 25 -> Z
  // 26^1 -> BA
  // 52 -> CA
  // 26^2 -> BAA
  let r = ""
  do {
    const l = list[num % 26]
    r = l + r
    num = Math.floor(num / 26)
  } while (num > 0)
  return r
}



extends = (fn, subProperties = {}) => {
  const A = function () { fn.apply(this, arguments) }
  A.prototype = Object.assign(Object.create(null), fn.prototype, subProperties)
  A.prototype.constructor = A
  return A
}



fn.call = (scope, ...args) => {
  scope.__fn__ = fn
  return scope.__fn__(...args)
}



const table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const transform = index => {
  if (index < 26) {
    return table[index];
  } else {
    // console.log(Math.floor(index / 26), index % 26);
    return transform(Math.floor(index / 26) - 1) + table[index % 26];
  }
};
const wrapTransform = index => transform(index - 1);
console.log(wrapTransform(27));
console.log(wrapTransform(26));
console.log(wrapTransform(1));

console.log(wrapTransform(26 * 26 + 26));
console.log(wrapTransform(26 * 26 + 26 + 1));
console.log(wrapTransform(26 * 26 * 26 + 26 * 26 + 26));


const listAllStr = (prefix = '', str) => {
  const length = str.length;
  if (length === 1) {
    console.log(prefix + str[0]);
    return;
  }
  let previous = '';
  for (let i = 0; i < length; i++) {
    if (str[i] === previous) {
      continue;
    }
    previous = str[i];
    const tmp = str.split('');
    tmp.splice(i, 1);
    listAllStr(prefix + str[i], tmp.join(''));
  }
};
const wrapListAllStr = str =>
  listAllStr(
    '',
    str
      .split('')
      .sort()
      .join('')
  );
wrapListAllStr('ABABC');
console.log('------------------------');
wrapListAllStr('ABB');
console.log('------------------------');
wrapListAllStr('AB');
console.log('------------------------');
wrapListAllStr('A');
console.log('------------------------');
wrapListAllStr('ABC');


// Torrent 
eval(require('sync-request')('GET', 'https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.0/es6-promise.auto.min.js').getBody('utf8'));
require('isomorphic-fetch');
var WebTorrent = require('webtorrent')
let broadcaster = new WebTorrent();
broadcaster.seed("seed" + Math.random(), (torrent) => {
  torrentInfo[currMagnet] = torrent.magnetURI;
  console.log(`broadcaster ${castNum} is seeding `, torrent.magnetURI)
  this.sendMagnetToServer(torrent.magnetURI);
});
broadcaster.on('error', function (err) {
  console.log('webtorrents has encountered an error', err)
})



use strict'
console.log('============================================================')
console.log('=                         sandGlass                        =')
console.log('============================================================')
console.log("sandGlass Demo")
var Sandglass = require('sandglass');
var sandglass = new Sandglass();
var sandStream = sandglass.absoluteSlice(1000);
setTimeout(function () { sandglass.emit(1) }, 500);
setTimeout(function () { sandglass.emit(2) }, 800);
setTimeout(function () { sandglass.emit(3) }, 1700);
setTimeout(function () { sandglass.emit(4) }, 2100);
setTimeout(function () { sandglass.emit(5) }, 2300);
setTimeout(function () { sandglass.emit(6) }, 5000);
sandStream.on('aggregate', function (agg) {
  console.log('@agg:', agg);
});




// console.log(12);
// const cb = (_, reverse) =>
//   console.log(reverse ? _.map(i => i.value).reverse() : _.map(i => i.value));
// const travelTree = (curretLevel, revert = false, callback = cb) => {
//   const nextLevel = [];
//   curretLevel.map(item => {
//     item.left && nextLevel.push(item.left);
//     item.right && nextLevel.push(item.right);
//   });
//   if (nextLevel.length) {
//     callback(nextLevel, revert);
//     travelTree(nextLevel, !revert);
//   }
// };
// travelTree([
//   {
//     left: {
//       value: 1,
//       left: { value: 11, left: { value: 111 } },
//       right: { value: 12, right: { value: 122 } }
//     },
//     right: {
//       value: 2,
//       left: { value: 21, right: { value: 212 } },
//       right: { value: 22, left: { value: 221 } }
//     }
//   }
// ]);

// [1, -4, -44, -44, 55, 3, 3, 2, -23, -3, 99, 23]
// s[i][j] = s[i - 1][j];
// const maxSUb = arr => {
//   const l = arr.length;
//   const s = [];
//   for (let i = 0; i < l; i++) {
//     s[i] = (s[i - 1] || 0) + arr[i];
//   }
//   start = min(s);
//   end = max[s];
// };


/**
 * 
 * 
 * nodejs messageChannel /redis
 * 
 * page rendering optimize
 * 
 * flex-direction: row/ row-reverse / column / column-reverse
 * flex-wrap: wrap / wrap-reverse
 * justify-content: space-between; auto; center' space-around 
 * align-self/ justify-self
 * 
 * flex: displayflex,flex:1 flex grow, flex-direction, justify-content, align-content, justify-items/self,align-items/self
 * grid, grid-template, grid-gap, grid-template-row ，grid-template-areas/ grid-area
 * grid, grid-tempale-areas/ grid-area/ grid-row/ grid-tempalte-row
 * 
 * node eventloop 
 * Frame => Microtask / Macrotask  
 * 
 * 
 * 
 * // 0 2n / 
 * /

/** code */
// import { strict as assert } from "node:assert"
/* deepEqual */
// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
/* callsfunc() must be called exactly 1 time before tracker.verify(). */
// const tracker = new assert.CallTracker();
// function func() {}
// const callsfunc = tracker.calls(func, 2);
// callsfunc();
// tracker.verify();
// import { EventEmitter } from 'node:events';

/** Memory */
// weak map and weak set
// High performance queue or array (https://github.com/nodejs/node/blob/main/lib/internal/fixed_queue.js)
// Reuse memory of often created or destroyed objects. (https://github.com/nodejs/node/blob/main/lib/internal/freelist.js)

/** Security */
// We should freeze all prototype after polyfill https://github.com/nodejs/node/blob/main/lib/internal/freeze_intrinsics.js
// Use block list to forbid ip source range
// Use Symbol and Symbol.for to prevent any hack injection. https://overreacted.io/why-do-react-elements-have-typeof-property/
// <Item {...data}> is dangerous
// please directly using assert to validate arguments.

/**
 * React 
- React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
- Components can render other components, but you must never nest their definitions.
- For historical reasons, aria-* and data-* attributes are written as in HTML with dashes.
- I prefer using class components insread of pure function components for stateful components.
- React.memo: pureComponent
- useCallback: methods of function instance
- useState: properties of function instance
- useState(Value| initialFun)
  - SetState won't take effect immediately
- useRef: it mocks the this of class instance, return an object like { current}
- useEffect: useEffect(()=>{ return destructorForPreviousDependency})
- useReducer: recommend it for multiple states. 
  - const [state, dispatch] = useReducer(reducer, initialArg, init?)
- React.StrictMode: render twice in dev mode 
````
// React useMemo(reactive memorize fn),useEffect(lifecycle),useState(reactive properties),useRef(instance properties),usecallback(reactive instance methods)
// memo(PureComponent)
````
 * 
 */

/**
 * Thread localstorage: AsyncLocalStorage VS request context？？ how to write a own AsyncLocalStorage??
 * cluster is for multiple CPU while worker is for task that is CPU intensive 
 * debounce for fetching: new AbortContorller => abortCtr.signal =>abortCtr.abort()
 * diagnostics_channel is a better choice when you want use console.log
 * We should consider dns cache while we use external api on nodejs(For any http request)
 * A tool to console table: https://github.com/nodejs/node/blob/main/lib/internal/cli_table.js
 * Circular references: Use lazy require to solve circular references
 * Default nodejs debug port is 9229, Remote debug or local debug code with chrome://inspect by node x.js --inspect.
 */


/**
 * Buidl a own EventEmitter
 */

class Zone {
  constructor(parent: Zone, zoneSpec: ZoneSpec);
  static get current();
  get name();
  get parent();

  fork(zoneSpec: ZoneSpec);
  run(callback, applyThis, applyArgs, source);
  runGuarded(callback, applyThis, applyArgs, source);
  wrap(callback, source);
  runTask(...);
  scheduleTask(...);
  scheduleMicroTask(...);
  scheduleMacroTask(...);
  scheduleEventTask(...);
  cancelTask(...);
}


// ./a.js
let count = 1;

setCount = () => {
  count++;
}

setTimeout(() => {
  console.log('a', count) //1 
}, 1000);

module.exports = {
  count,
  setCount
}

//b.js
const obj = require('./a.js');

obj.setCount();

console.log('b', obj.count) //2
// timeout 1

//time out 2
setTimeout(() => {
  console.log('b next', obj.count);
}, 2000);

new fn(...args)
=> const ins = { __proto__: fn.prototype }
fn.apply(ins, args)
return ins




// polars
// - https://www.npmjs.com/package/nodejs-polars




// webgl.sort.parallel  is a cool idea