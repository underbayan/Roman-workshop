// iterable对象：js 中的可迭代对象： 必须有 Symbol.iterator 属性. [Symbol.iterator] 属性是一个返回iterator的函数
// iterator  :An object is an iterator when it implements a next() method with the following semantics. next函数：是一个返回{done:false, value:'' } 形式的无参函数
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
iterator = [1, 2, 3, 4, 5, 6][Symbol.iterator](); // Array is iterable
iterator.next();
iterator = "1234567"[Symbol.iterator](); // String is iterable
iterator.next();

//Own iterable Object
class simpleClass {
  [Symbol.iterator]() {
    return idMaker() // Must return a iterator
  }
}
var instance = new simpleClass()
for (var i of instance) {
  console.log(i)
  if (i > 15)break
}


var generatorFun = function*(){
  yield 1;
  yield 2;
  yield 3;
}

var generator = generatorFun()
generator.next() ? 'Generator is an iterator.': ''
generator[Symbol.iterator] ? 'Generator is iterable.': ''
generator[Symbol.iterator]() === generator //true

generatorFun.constructor // GeneratorFunction Function, generatorFun 的构造函数是 GeneratorFunction
generatorFun.constructor.prototype // GeneratorFunction的原型对象
generatorFun.constructor.prototype  === generatorFun["__proto__"]  //new operation
generatorFun.constructor.prototype.constructor === generatorFun.constructor // true

var Generator= generatorFun.constructor.prototype.prototype // Generator
Generator.next // function
Generator[Symbol.iterator]() === Generator //

var l =(...r)=> console.log('**************')||console.log(...r)

function* f() {
  for (var i = 0; true; i++) {
    var firstOne = yield i;
    var another = yield "======== another String ============" + i
    console.log("The body is executed", "The params is ", firstOne, another)
    if (firstOne) { i = -1; }
  }
}
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
