// generator = iterator + iterable ; because it has a next method, so it's an iterator; because it has an @@iterator method, so it's an iterable
// entries方法: 返回一个可迭代对象的迭代器

var generatorFun = function*() {
}
var generator = generatorFun()
generator.next() ? 'Generator is an iterator.' : ''
generator[Symbol.iterator] ? 'Generator is iterable.' : ''
generator[Symbol.iterator]() === generator //true

generatorFun.constructor // GeneratorFunction Function, generatorFun 的构造函数是 GeneratorFunction
generatorFun.constructor.prototype // GeneratorFunction的原型对象
generatorFun.constructor.prototype === generatorFun["__proto__"]  //new operation
generatorFun.constructor.prototype.constructor === generatorFun.constructor // true

var Generator = generatorFun.constructor.prototype.prototype // Generator
Generator.next // function
Generator[Symbol.iterator]() === Generator //

var l = (...r)=> console.log('**************') || console.log(...r)

// Generator with for
var demo = function *() {
  for (var i = 0; i < 100; i++) {
    yield i
  }
}()
// Generator with for in
var demo2 = function *() {
  for (i in [1, 2, 3, 4, 56]) {
    yield i
    yield i + 0.1
  }
}()

// what's the order of code execute in generator
var demo3 = function *() {

  console.log("Yield start") //after first next()
  yield 1

  console.log("Yield 2")
  yield 2

  console.log("Yield 3")
  yield 3

  console.log("Yield end") //before when the done is true
}()

//demo4
var demo4 = function *() {
  for (i in [1, 2, 3, 4, 56]) {
    console.log('yield', i)
    yield i
    console.log('yield', i + 0.1)
    yield i + 0.1
    console.log('yield Another loop')
  }
}()
function* f() {
  for (var i = 0; true; i++) {
    l('yield first one')
    var firstOne = yield i
    l('yield anohter one')
    var another = yield i + 0.1
    l('Judge the first one')
    if (firstOne) { i = -1; }
  }
}

var g = f();
l(g.next())
l(g.next())
l(g.next())
l(g.next(true))
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


