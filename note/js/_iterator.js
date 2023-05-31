// iterable对象：js 中的可迭代对象： 必须有 Symbol.iterator 属性. [Symbol.iterator] 属性是一个返回iterator的函数
// iterator  :An object is an iterator when it implements a next() method with the following semantics. next函数：是一个返回{done:false, value:'' } 形式的无参函数

var iteratorFunc = () => {
  var index = 0
  return { next: () => ({ value: index++, done: false }) }
}

var iterator
iterator = iteratorFunc();
iterator.next();
iterator = [1, 2, 3, 4, 5, 6][Symbol.iterator](); // Array is iterable
iterator.next();
iterator = "1234567"[Symbol.iterator](); // String is iterable
iterator.next();

//Own iterable Object
var iterableClass = class {
  [Symbol.iterator]() {
    return iteratorFunc() // Must return a iterator
  }
}
var instance = new iterableClass()

for (var i of instance) {
  console.log(i)
  if (i > 15) break
}

// Iteration<Promise<T>>
// iterator.next().value.then(r=>r)
// Promise<Iteration<T>>
// promiseIterator.next().then(r=>r)
