function unary(fn) {
  fn = functionalize(fn);
  if (fn.length == 1) {
    return fn;
  } else return function (something) {
    return fn.call(this, something);
  };
}

// ['1', '2', '3'].map(unary(parseInt));
