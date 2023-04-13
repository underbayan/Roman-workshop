

/**
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 class EventEmitter {
  callbackMap = {}
  on(eventName, fn) { 
    this.callbackMap[eventName] = [...this.callbackMap[eventName],fn]
  }
  off(eventName, fn?) {
      this.callbackMap[eventName] = this.callbackMap[eventName].filter(f=>f!==fn)
    }
    emit(eventName, payload) { 
      this.callbackMap[eventName].map(f=>f(payload))
    }
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const b = { __proto__: null }
  Object.defineProperties(b, {
    "a": {
      set: (...arg) => { console.log(arg) },
      get: (...arg) => { console.log(arg) }
    }
  })
  b.a = 12
  b.a
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  websocket upgrade => http ? https =>
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  throttle()
  const fetchWithLimit = (...t) => {
    return fetch(...t)
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
_plugins 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  client => { syn = 1, clientSeq = x } => server // C->B(B)
  client <= { syn = 1, ack=1, clientSeq = x + 1, ServerSeq = Y } <= server  //C -> B(B,C), B->C(C)
  client => { ack = 1, clientSeq = x + 1, ServerSeq = Y + 1 } => server B -> C(B)

  C -> B  //  我不说了
  B -> C  //  知道了你停止吧（没有这个的话，C 会不停的我不说了我不说了我不说了我不说了我不说了我不说了）
  B -> C  //  我也不说了
  C -> B  //  挂了。 嘟嘟嘟
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
webpack //loader// plugins// 
webpack vs rollup
TODO: webpack hosting plugin instead of splitchunk plugin
plugin is a class with apply
* /



/**
 * cookie 
 * sub Domain: a.baidu.com, b.baidu.com path /
 * Domain: g1.com g2.com
 * Get action from g2.com -> g1.com:
 * access-control-allow-origin:
 * access-contorl-credential:
 * Post action from a.g.com -> b.g.com
 * preflight: access-contorl-allow-headers/method
 * Cookie: sameSite, secure, path, domain, httpOnly 
 * Sticky, fixed-> relative
 * sessionStorage
 * withCredential
 * 
 * /
 
 https -> pubKey(CA) -> AES key <-> Target
https <-> fake pubKey(own CA) <-> Porxy server(decrypt)-> pubKey(CA) -> AES key <->  target

Set -> stack map 
loaders? transformer
plugins  middleware ->
Vue react?

mobx??
await  async 
class Promise(){
  // static resolve(){}
  // static reject(){}
  // static all(){}
  // static allSettled(){}
  constructor(res,rej){
   
  }
}

SW:{ 
  strategy 
  ReuqestWhileStale => {}
  Cache only
  Network only 
  Cache first
  network first 
  Stale-while-revalidate
}


React  FiZz vs bigPipe vs server components  => suspense 
createResource 


Cache: expire => cache control => 
if-modified-since/ last modified
if-none-match / Etag  
301 permanent , 302 temporary  307, 304 cache? 
401 not authorized, 404 not found  403 fobidden 
200 ok 204 no response /
500 server error 501  502 gate way 




// CreateElement =(type,config,children,) => {
  props,key,ref,self,source
}




Js

Expired ?=>etag?=>ifnonematch:=>last modified=> if modified since 
Block formatting context: overflow display position 
Verticalcenter: auto +absolute flex+ align items inline+height+100% verticalAlign+inlineblock topTransform
Horizontal center:flex+justify inline+textalign marginAuo+width left+transform 
Responsive: scssplugin to vw
1px transform?
Use strict 
Proxy: get set apply construct reflect 
React: flushsync   useImperativeHandle
Wasm 
_redux,_curry,
type: number, string, null, boolean, undefined, Symbol, object Regexp
Object.prototype.call / typeof / instanceof 

css
content-box / border-box
animation-name: keyframes from / to 
transition

*/

const { Agent } = require("http");

var squareFreeSubsets = function (nums) {
  const pl = []
  const plk = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  nums = nums.sort().filter(i => (i % 4 && i % 9 && i % 25))
  const l = nums.length
  let result = 0
  const factorCache = {}
  const getFactors = (num) => {
    if (factorCache[num]) return factorCache[num]
    factorCache[num] = plk.filter(v => !(num % v))
    return factorCache[num]
  }
  const updatepl = (pl, factors, changed) => {
    let isWork = true
    factors.map(f => {
      pl[f] = (pl[f] || 0) + changed
      if (pl[f] > 1) {
        isWork = false
      }
    })
    return isWork
  }
  const cache = {}
  const aux = (step = 0, previous = -1) => {
    if (cache[step] && cache[step][previous]) return cache[step][previous]
    const current = nums[step]
    const factors = getFactors(current)
    const isWork = updatepl(pl, factors, 1)
    if (step >= l) {
      cache[step] = { [previous]: isWork ? 2 : 1 };
      return isWork ? 2 : 1
    } else {
      if (isWork) {
        const temp = 2 * aux(step + 1, current)
        cache[step] = { [previous]: temp };
        return temp
      } else {
        const temp = aux(step + 1, previous)
        cache[step] = { [previous]: temp };
        return temp
      }
    }
  }
  aux()
  return (result - 1)
};


/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = []
  const status = Array(9).fill(1).reduce((i, _, index) => i + (1 << index))
  const tempResult = []
  const aux = (status, k, n, i) => {
    if ((n === 0 && k === 0)) { result.push(Array.from(tempResult)); return }
    if (status === 0 || i === 10) { return }
    if (n - i < 0) return;
    const statusFlag = 1 << (i - 1)
    const nextStatus = status - statusFlag
    tempResult.push(i)
    aux(nextStatus, k - 1, n - i, i + 1)
    tempResult.pop()
    aux(nextStatus, k, n, i + 1)
  }
  aux(status, k, n, 1)
  return result
};



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

////////////////////////////

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

///////////////


// expire, cache-control max-Age
// last-modified if-modified-since ?
// etag / if-none-match 







1 链表的排序
2 无限滚动

快速排序

// const quickSort = (arr, start, end) => {
//   const st = arr[start];
//   const tmp = start + 1;
//   for (let i = start + 1; i < end; i++) {
//     if (st > arr[i]) {
//       [arr[i], arr[tmp]] = [arr[tmp], arr[i]];
//       tmp++;
//     }
//   }
//   [arr[start], arr[tmp]] = [arr[tmp], arr[start]];
//   quickSort(arr, start, tmp);
//   quickSort(arr, tmp, end);
// };
3 求两个链表的公共节点 （环，怎么写测试）
4 中位数
5 求 excel的列的字母是怎么计算生成的


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







debugger;
console;
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
 * 
 * 
 * 
 * 
 * // ./a.js
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
fn.apply(ins,args)
return ins
 
Symbol.for
Symbol // 安全 unique,
 */