var QueryString = (function() {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {}
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    // If first entry with this name
    if (typeof query_string[pair[0]] === 'undefined') {
      query_string[pair[0]] = decodeURIComponent(pair[1])
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === 'string') {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])]
      query_string[pair[0]] = arr
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]))
    }
  }
  return query_string
})()

//Stop propagation inline
var e = e || event
e.bubbles && e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true)

//set Cookie
var setCookie = (name, value, time, path = '/') =>
  (document.cookie = `${name}=${value};expires=${new Date().setTime(
    new Date().getTime() + time
  )};path=${path}`)
//getCookie
var getCookie = name =>
  decodeURIComponent(document.cookie)
    .split(';')
    .map(c => (c.charAt(0) === ' ' ? c.substring(1) : c))
    .find(c => !c.indexOf(name))
    .substring(name.length + 1)
;[].forEach.call($('*'), function(a) {
  a.style.outline = '1px solid #' + ~~(Math.random() * (1 << 24))
  a.style.backgroundColor = '#' + ~~(Math.random() * (1 << 24))
})
// Fake Array
var domNodes = Array.prototype.slice.call(document.getElementsByTagName('*'))
var fakeArgsArray = function() {
  var args = Array.prototype.slice.call(arguments)
}

function queryString(url) {
  let result = {}
  let params = url.split('?')[1]
  if (params) {
    params.split('&').map(o => {
      if (o) {
        let param = o.split('=')
        result[param[0]] = param[1] || true
      }
    })
  }
  return result
}

function addEvent(ele, type, func) {
  if (ele.addEventListener) {
    ele.addEventListener(type, func, false)
  } else if (ele.attachEvent) {
    ele.attachEvent('on' + type, handler)
  } else {
    ele['on' + type] = handler
  }
}
let sum = (...o) => (o.length ? o.pop() + sum(...o) : 0)
let sum2 = (function() {
  let data = []
  return function() {
    if (!arguments.length) {
      return data.reduce((sum, i) => i + sum, 0)
    } else {
      ;[].push.apply(data, arguments)
    }
  }
})()
let isEmail = s => /\w+@\w+\.\w+/.test(s)

function clone(obj, deepClone) {
  /* Default deep cloning to false */
  deepClone = deepClone || false

  /* Test the object type and clone accordingly */
  var clonedObj = obj
  switch (true) {
    case obj instanceof Element && typeof obj === 'object' && obj.nodeName:
      clonedObj = obj.cloneNode(deepClone)
      break
    case obj instanceof Object || typeof obj === 'object':
      clonedObj = cloneObject(obj, deepClone)
      break
    case obj instanceof Array || isArray(obj):
      clonedObj = cloneArray(obj, deepClone)
      break
    case obj instanceof Function || typeof obj === 'function':
      clonedObj = cloneFunction(obj)
      break
    case obj instanceof Date:
      clonedObj = new Date()
      clonedObj.setTime(obj.getTime())
      break
  }

  return clonedObj
}

switch (1) {
  case 1 === 2:
    break
  case 3 === 3:
  case window.someCondition:
    break
}

var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

function encode64(input) {
  var output = ''
  var chr1, chr2, chr3
  var enc1, enc2, enc3, enc4
  var i = 0

  do {
    chr1 = input.charCodeAt(i++)
    chr2 = input.charCodeAt(i++)
    chr3 = input.charCodeAt(i++)

    enc1 = chr1 >> 2
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
    enc4 = chr3 & 63

    if (isNaN(chr2)) {
      enc3 = enc4 = 64
    } else if (isNaN(chr3)) {
      enc4 = 64
    }

    output =
      output +
      keyStr.charAt(enc1) +
      keyStr.charAt(enc2) +
      keyStr.charAt(enc3) +
      keyStr.charAt(enc4)
  } while (i < input.length)

  return output
}

function decode64(input) {
  var output = ''
  var chr1, chr2, chr3
  var enc1, enc2, enc3, enc4
  var i = 0

  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '')

  do {
    enc1 = keyStr.indexOf(input.charAt(i++))
    enc2 = keyStr.indexOf(input.charAt(i++))
    enc3 = keyStr.indexOf(input.charAt(i++))
    enc4 = keyStr.indexOf(input.charAt(i++))

    chr1 = (enc1 << 2) | (enc2 >> 4)
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
    chr3 = ((enc3 & 3) << 6) | enc4

    output = output + String.fromCharCode(chr1)

    if (enc3 != 64) {
      output = output + String.fromCharCode(chr2)
    }
    if (enc4 != 64) {
      output = output + String.fromCharCode(chr3)
    }
  } while (i < input.length)

  return output
}
/**
 * 属性拥有宿主的特性
 */
const app = {}
const req = {}
app.request = Object.create(req, {
  app: { configurable: true, enumerable: true, writable: true, value: app }
})
/**
 * 通过 改写 get 来禁用一个对象的属性，而不是改写这个属性, 有时候属性应该是不可写的。
 */
Object.defineProperty(exports, name, {
  get: function() {
    throw new Error('')
  },
  configurable: true
})
/**
 * 大型的app 中需要 提供 disable，set 和 enable，register，use 等方法？
 */
