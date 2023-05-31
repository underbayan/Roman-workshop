JSON.stringify = (function(stringify) {
  return function(...args) {
    let str = stringify.apply(this, args)

    if (str && str.indexOf('<') > -1) {
      str = str.replace(/</g, '\\u003C')
    }
    return str
  }
})(JSON.stringify)
