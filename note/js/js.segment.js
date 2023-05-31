class Deferred {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}

function deferred() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { resolve, reject, promise };
}


// Dynamic require 
async function require(url) {
  const response = await fetch(url);
  const scriptCode = await response.text();
  const module = { exports: {} };
  const moduleFunction = new Function('module', 'exports', scriptCode);
  moduleFunction(module, module.exports);
  return module.exports;
}

// Array polyfill
Array.prototype.zip = arr => Array.from({ length: Math.max(...arr.map(x => x.length)) }).map((_, i) => Array.from({ length: arr.length }, (_, k) => arr[k][i]))
Array.prototype.unzip = arr => arr.reduce((acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc), Array.from({ length: Math.max(...arr.map(x => x.length)) }).map(x => []))
Array.prototype.union = (a, b) => Array.from(new Set([...a, ...b]))
Array.prototype.unique = arr => [...new Set(arr)]
Array.prototype.range = n => Array.apply(null, Array(n)).map((_, i) => i);
Array.prototype.chunk = (arr, n) => Array.range(Math.ceil(arr.length / n)).map((_, i) => arr.slice(i * n, i * n + n))
Array.prototype.shuffle = (arr) => arr.map((_, i, a) => (m = Math.floor(Math.random() * (a.length - i)) + i, [a[i], a[m]] = [a[m], a[i]])) && arr;

var QueryString = (function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
})();

//Stop propagation inline
var e = e || event;
e.bubbles && e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);

//set Cookie
var setCookie = (name, value, time, path = "/") =>
(document.cookie = `${name}=${value};expires=${new Date().setTime(
  new Date().getTime() + time
)};path=${path}`);
//getCookie
var getCookie = name =>
  decodeURIComponent(document.cookie)
    .split(";")
    .map(c => (c.charAt(0) === " " ? c.substring(1) : c))
    .find(c => !c.indexOf(name))
    .substring(name.length + 1);
[].forEach.call($("*"), function (a) {
  a.style.outline = "1px solid #" + ~~(Math.random() * (1 << 24));
  a.style.backgroundColor = "#" + ~~(Math.random() * (1 << 24));
});
// Fake Array
var domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));
var fakeArgsArray = function () {
  var args = Array.prototype.slice.call(arguments);
};
function getCookie(name, cookie = "") {
  const r = {};
  cookie.split(/\s*;\s*/).forEach(p => {
    ip = p.split(/\s*=\s*/);
    r[ip[0]] = ip.splice(1);
  });
  return r[name];
}
function queryString(url) {
  let result = {};
  let params = url.split("?")[1];
  if (params) {
    params.split("&").map(o => {
      if (o) {
        let param = o.split("=");
        result[param[0]] = param[1] || true;
      }
    });
  }
  return result;
}

function addEvent(ele, type, func) {
  if (ele.addEventListener) {
    ele.addEventListener(type, func, false);
  } else if (ele.attachEvent) {
    ele.attachEvent("on" + type, handler);
  } else {
    ele["on" + type] = handler;
  }
}
let sum = (...o) => (o.length ? o.pop() + sum(...o) : 0);
let sum2 = (function () {
  let data = [];
  return function () {
    if (!arguments.length) {
      return data.reduce((sum, i) => i + sum, 0);
    } else {
      [].push.apply(data, arguments);
    }
  };
})();
let isEmail = s => /\w+@\w+\.\w+/.test(s);

function clone(obj, deepClone) {
  /* Default deep cloning to false */
  deepClone = deepClone || false;

  /* Test the object type and clone accordingly */
  var clonedObj = obj;
  switch (true) {
    case obj instanceof Element && typeof obj === "object" && obj.nodeName:
      clonedObj = obj.cloneNode(deepClone);
      break;
    case obj instanceof Object || typeof obj === "object":
      clonedObj = cloneObject(obj, deepClone);
      break;
    case obj instanceof Array || isArray(obj):
      clonedObj = cloneArray(obj, deepClone);
      break;
    case obj instanceof Function || typeof obj === "function":
      clonedObj = cloneFunction(obj);
      break;
    case obj instanceof Date:
      clonedObj = new Date();
      clonedObj.setTime(obj.getTime());
      break;
  }

  return clonedObj;
}

switch (1) {
  case 1 === 2:
    break;
  case 3 === 3:
  case window.someCondition:
    break;
}

var keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function encode64(input) {
  var output = "";
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;

  do {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }

    output =
      output +
      keyStr.charAt(enc1) +
      keyStr.charAt(enc2) +
      keyStr.charAt(enc3) +
      keyStr.charAt(enc4);
  } while (i < input.length);

  return output;
}

function decode64(input) {
  var output = "";
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;

  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 != 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 != 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);

  return output;
}
/**
 * 属性拥有宿主的特性
 */
const app = {};
const req = {};
app.request = Object.create(req, {
  app: { configurable: true, enumerable: true, writable: true, value: app }
});
/**
 * 通过 改写 get 来禁用一个对象的属性，而不是改写这个属性, 有时候属性应该是不可写的。
 */
Object.defineProperty(exports, name, {
  get: function () {
    throw new Error("");
  },
  configurable: true
});
/**
 * 大型的app 中需要 提供 disable，set 和 enable，register，use 等方法？
 */

//  deepClone
JSON.parse(JSON.stringify(obj));

function cloneDeep(o) {
  let newO;
  let i;

  if (typeof o !== "object") return o;

  if (!o) return o;

  if (Object.prototype.toString.apply(o) === "[object Array]") {
    newO = [];
    for (i = 0; i < o.length; i += 1) {
      newO[i] = cloneDeep(o[i]);
    }
    return newO;
  }

  newO = {};
  for (i in o) {
    if (o.hasOwnProperty(i)) {
      newO[i] = cloneDeep(o[i]);
    }
  }
  return newO;
}

function isObject(obj) {
  return obj && obj.constructor === Object;
}

function isFunction(fn) {
  return typeof fn === "function";
}

function isGenerator(obj) {
  return obj.constructor && isGeneratorFn(obj.constructor);
}

function isGeneratorFn(fn) {
  return fn.constructor && fn.constructor.name === "GeneratorFunction";
}

function isAsyncFn(fn) {
  return fn.constructor && fn.constructor.name === "AsyncFunction";
}

// Tiny Debounce
function debounce(fn, delay = 0) {
  let timer;
  return function () {
    if (timer) cleatTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      fn.apply(this, arguments);
    }, delay);
  };
}
// tiny throttle
function throttle(fn, delay) {
  var timer;
  return function () {
    var last = timer;
    var now = Date.now();
    if (!last) {
      timer = now;
      fn.apply(this, arguments);
      return;
    }
    if (last + delay > now) return;
    timer = now;
    fn.apply(this, arguments);
  };
}

//https://gist.github.com/jfsiii/034152ecfa908cf66178
function dp(obj) {
  if (obj instanceof Date) return new Date(obj);
  if (obj.nodeType && typeof obj.cloneNode === "function")
    return obj.cloneNode(true);
  if (isObject(obj)) {
    finalObj = {};
    for (let i in obj) {
      if (obj[i]) finalObj[i] = dp(obj[i]);
    }
    return finalObj;
  }
  return obj;
}
Array.prototype.reduce = function (fn, init) {
  let result = init;
  this.forEach((element, index) => {
    result = fn(result, element, index);
  });
  return result;
};

const curry = fn => {
  const _fn = (...a) =>
    a.length > 1 ? (...l) => _fn(fn(...a), ...l) : fn(...a);
  return _fn;
};

const add = (...l) => l.reduce((s, v) => s + v, 0);
const cc = curry(add);
cc(1, 2, 3, 4)();

const compose = mids => {
  if (!Array.isArray(mids)) throw new TypeError("");
  return (ctx, next) => {
    const consume = index => {
      if (index > mids.length) next();
      if (!typeof mids[index] === "function") throw new TypeError("");
      mids[index](ctx, () => consume(++index));
    };
    consume(0);
  };
};

const reqLimit = () => {
  const currency = 0;
  const work = 0;
  const nextWork = 0;
  const Max = 5;
  const eventBus = new EventEmitter();
  return async (ctx, next) => {
    if (currency++ < Max) {
      await next();
      currency--;
      eventBus.emit(work++);
    } else {
      eventBus.on(nextWork++, async () => {
        await next();
        currency--;
        eventBus.emit(work++);
      });
    }
  };
};

/**
 * don't use this code inproduction
 * @param {*} obj
 */
function deepCopy(obj) {
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (typeof obj === "funciton") {
    const _fun = eval(obj.toString());
    _fun.prototype = obj.prototype;
    return _fun;
  }
  if (obj.nodeType && typeof obj.cloneNode == "function") {
    return obj.cloneNode(true);
  }
  if (typeof obj == "object") {
    var _finalObj = {};
    for (var i in obj) {
      _finalObj[i] = deepCopy(obj[i]);
    }
    return _finalObj;
  }
  return obj;
}


function deepCopy(obj) {
  if (!item) { return item; } // null, undefined values check

  var types = [Number, String, Boolean],
    result;

  // normalizing primitives if someone did new String('aaa'), or new Number('444');
  types.forEach(function (type) {
    if (item instanceof type) {
      result = type(item);
    }
  });

  if (typeof result == "undefined") {
    if (Object.prototype.toString.call(item) === "[object Array]") {
      result = [];
      item.forEach(function (child, index, array) {
        result[index] = deepCopy(child);
      });
    } else if (typeof item == "object") {
      // testing that this is DOM
      if (item.nodeType && typeof item.cloneNode == "function") {
        var result = item.cloneNode(true);
      } else if (!item.prototype) { // check that this is a literal
        if (item instanceof Date) {
          result = new Date(item);
        } else {
          // it is an object literal
          result = {};
          for (var i in item) {
            result[i] = deepCopy(item[i]);
          }
        }
      } else {
        // depending what you would like here,
        // just keep the reference, or create new object
        if (false && item.constructor) {
          // would not advice to do that, reason? Read below
          result = new item.constructor();
        } else {
          result = item;
        }
      }
    } else {
      result = item;
    }
  }

  return result;
}
