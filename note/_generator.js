// iterable对象：js 中的可迭代对象： 必须有 Symbol.iterator 属性
// [Symbol.iterator] 属性 是 返回一个对象的无参函数，被返回对象符合迭代器协议
// iterator  :An object is an iterator when it implements a next() method with the following semantics:
// next函数：是一个返回{done:false, value:'' } 形式的无参函数
// generator = iterator + iterable ; because it has a next method, so it's an iterator; because it has an @@iterator method, so it's an iterable
// entries方法: 返回一个可迭代对象的迭代器
var idMaker = () => {
  var index = 0
  return {
    next: ()=> {return {value: index++, done: false}}
  }
}

var iterator
iterator = idMaker();
iterator.next();
iterator.next();
iterator.next();

iterator = [1, 2, 3, 4, 5, 6][Symbol.iterator]();
iterator.next();
iterator.next();
iterator.next();

iterator = "1234567"[Symbol.iterator]();
iterator.next();
iterator.next();
iterator.next();

// iterable Object
class simpleClass {
  [Symbol.iterator]() {
    return idMaker()
  }
}
var instance = new simpleClass()
for (var i of instance) {
  console.log(i)
  if (i > 15)break
}
var generator = function*() {
  yield 1;
  yield 2;
  yield 3;
}()
generator.next()
generator[Symbol.iterator]
generator[Symbol.iterator]() === generator

function* f() {
  for (var i = 0; true; i++) {
    var firstOne = yield i;
    var another = yield "======== another String ============" + i
    console.log("The body is executed", "The params is ", firstOne, another)
    if (firstOne) { i = -1; }
  }
}
f = function*(){}
f.constructor.prototype //GeneratorFunction
f.constructor.prototype.prototype // Generator
f.constructor.prototype.prototype.next //function
f.constructor.prototype.prototype[Symbol.iterator]() === f.constructor.prototype.prototype

var l =(...r)=> console.log('**************')||console.log(...r)
var g = f();

l(g.next()) //{ value: 0, done: false }
l(g.next()) //{ value: '======== another String ============0', done: false }
l(g.next()) //The body is executed The params is  undefined undefined
            // { value: 1, done: false }
l(g.next(true))
// why this send can take affect until the next step?，
// because generator function's body is executed until the first yield expression
l(g.next())
l(g.next())
l(g.next(true))// why this next(true) wont work?
l(g.next())
l(g.next())
l(g.next())
g = f();
l(g.next())
l(g.next())
g.next(true) //This params will send to the another not firstOne Why?
l(g.next())
l(g.next())
l(g.next(true))
l(g.next())
l(g.next())
l(g.next())

// Used to send a value to a generator.
// The value is returned from the yield expression,
// and returns a value yielded by the next yield expression.
// send(x) corresponds to next(x) in the ES2015 generator object.
