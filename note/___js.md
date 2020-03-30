- javascript 函数是对象 其实除了 null 和 undefined 其他的都是对象,只有函数才有 prototype 属性

- Number,Function,Object,Date,String 本质都是函数，当然函数的本质也是对象

# \_\_proto\_\_ 详解

- 每一对象都有一个 内置属性[[prototype]],可以通过 \_\_proto\_\_ 来访问这个属性 ，这个属性指向了构造该对象的函数(构造函数的)的对象的原型

```javascript
;(2).__proto__ === Number.prototype // 2的构造者是Number
Number.__proto__ === Function.prototype //Number 的构造者是Function
Function.__proto__ === Function.prototype //Function的构造者是 Function
;(Math.__proto__ ===
  Object.prototype(
    // Math的构造者是Object
    {}
  ).__proto__) ===
  Object.prototype // {}的构造者是Object
Object.__proto__ === Function.prototype //Object 的构造者是 Function

var A = function() {}
var a = new A()
a.__proto__ === A.prototype //a 的构造者是A
```

# prototype 详解

```javascript
console.log(typeof Function.prototype) // function
console.log(typeof Object.prototype) // object
console.log(typeof Number.prototype) // object
console.log(typeof Boolean.prototype) // object
console.log(typeof String.prototype) // object
console.log(typeof Array.prototype) // object
console.log(typeof RegExp.prototype) // object
console.log(typeof Error.prototype) // object
console.log(typeof Date.prototype) // object
console.log(typeof Object.prototype) // object
```

# class 详解

```javascript
//局部变量(其实是利用了函数作用域)
function A() {
  var privateVariable = 12
  var privateFunction = function() {}
}
//私有变量,本质是闭包
function A() {
  var privateProperty = 0
  return function get() {
    return privateProperty
  }
}
// 静态变量和静态函数，只能通过A来调用，本质就是A的属性
function A() {}
A.staticVariable = 12
A.staticFunction = function() {}

// 本质是原型链
// all instatnce share a memory can sue prototype
// following methodA wouldn't be changed by sub instance
A.prototype.methodA = function() {
  console.log('Amethod')
}

// 本质是 new 过程会改变this 为当前作用域
// all instantce will keep own memory for OwnProperty(成员变量)
function A() {
  this.OwnProperty = 'Aproperty'
}

//A的成员有两种方式: 第二种方式可以限定成员是否能被修改，读取，变量等特性
function A() {
  this.OwnProperty = 'Aproperty'
}
function A() {
  Object.defineProperty(this, 'propertyName', { value: 'propertyValue' })
}

//实例化
var a = new A()
//继承方式 原理:
var Point = {
  x: 0,
  y: 0,
  print: function() {
    console.log(this.x, this.y)
  }
}

var p = { x: 10, y: 20, __proto__: Point }
p.print()
//继承方式 标准写法:
function Point(x, y) {
  this.x = x
  this.y = y
}
Point.prototype = {
  print: function() {
    console.log(this.x, this.y)
  }
}

var p = new Point(10, 20)
p.print() // 10 20

//Doublas crockford 写法
Object.create = function(parent) {
  function F() {}
  F.prototype = parent
  return new F()
}
var Point = {
  x: 0,
  y: 0,
  print: function() {
    console.log(this.x, this.y)
  }
}

var p = Object.create(Point)
p.x = 10
p.y = 20
p.print() // 10 20
```

# new 详解

- new 指能用于函数,生成一个对象
- new A 和 new A() 本质一样

```javascript
/*
* @see https://www.zhihu.com/question/36440948/answer/72391410
* @author wang z 
*/
function New(f) {
  /*1*/

  var n = { __proto__: f.prototype }
  return function() {
    /*2*/

    f.apply(n, arguments)
    /*3*/

    return n
  }
}
```

# javascript 类型

基本类型：number，string，boolean，null，undefined, symbol
引用类型(Object)： Array, Date, RegExp

# 数字

只有 64 位数浮点数
NAN 是一个数值，不等于任何值，包括自己，用 isNaN 来检测。
Infinity 很大的数，但不是无限大，是 js 表示的最大值

# 字符串

不可改变
表达式
=====
略
==：(隐藏的类型转化)
''=='0' false
0=='' true
0=='0' true
false=='false' true
false=='0' true
false==undefined false
false==null false
null==undefined true
'\t\r\n'==0 true

    我们判断的时候最好使用 真值来判断

# 对象：

通过引用来访问

# 原型和继承：

每一个对象都会链接到一个原型

# 关键字:

-Infinity,Infinity
typeof 不能区分出数组，null 和普通对象
只有通过 new 出来的基本类型才能通过 instanceof 判断
在判断是否字符串，是否数字，是否布尔值的时候，我们应该使用 typeof,对数组和要判断对象是否是在某个构造函数或对象的原型链上时使用 instanceof,对函数的判断两者皆可

# 数组：

length 没有上限
delete 和 splice 的区别
delete 不影响数组长度

# 函数：

函数就是对象
调用：方法调用（this 值为调用的对象）、
函数调用（this 是外部的全局对象）、
构造器调用（this 就是 new 出来的新的对象）、
apply 调用（this 可以被指定）
  
this:
=====
this is bound at runtime based on the context

# context vs scope

A context of function is the value of this for that function
Scope defines the way javascript resolves a variable at run time.
There is only two scopes in js, global and function scope, weuse scope chain to make closures possible

# 返回：

没有指定则返回的 undefined

# tip：
- 为什么 js 中没有析构函数
- for in 遍历对象属性的顺序不是固定的
- for in 再原型上表现糟糕
- delete 可以删除对象的属性，但是不会操作原型链中的任何对象
- javascript 没有尾递归优化
- 只有函数作用域没有块作用域
- JavaScript 中 if 语句求值其实使用 eval 函数
- instanceof 和 typeof 的区别
- 未使用 var 关键字定义的变量都是全局变量。
- 函数中声明的变量在整个函数中都有定义
- 全局变量都是 window 对象的属性
- JavaScript 中的函数运行在它们被定义的作用域里,而不是它们被执行的作用域里
- 迭代器： 是一个实现 next 函数 的对象
- next 函数：是一个返回{done:false, value:'' } 形式的无参函数
- generator: 是一个 生成迭代器的函数
- entries: 返回一个可迭代对象的迭代器
- IIFE Immediately-Invoked Function Expression
- 立即调用表达式: 自执行匿名函数 的设计模式: (function(){/_ code _/}())
- setTimeout 有一个最小时间 4ms/10ms? ,I will choose using the setImmediate
-  async 修饰会使得 运行的时候脱离原有的上下文，而加上await 之后 throw 出来的error 依然可以在外部获取到
# Object:

assign,
defineProperties, defineProperty,
entries(和 new Map 相互转化),
freeze 和 seal 区别（前者完全冻结,后者禁止了所有新的 defineProperty）
setPrototypeOf(修改 **proto** )

# 函数:

箭头函数： 不绑定自己的 this，super 和 arguments，所以不能作为构造函数和 new 一起使用，返回对象需要用 o=>({o:12})的形式，可以用...arg 来代替 arguments
yield
curry 化 sum: sum= (...o)=>o.length?(o.pop()+sum(...o)):0

# 正则表达式

# 异步

```
Basically, use microtasks when you need to do stuff asynchronously in a synchronous way (i.e. when you would say perform this (micro-)task in the most immediate future). Otherwise, stick to macrotasks.
Examples
macrotasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
microtasks: process.nextTick, Promises, Object.observe, MutationObserver
```

# 性能问题

懒加载， 作用域越深，速度越慢，局部变量最快

# Tool

```
karma : test js on multiple browser and node.
Jasmine || mocha || qunit: test frame work
SetImmediate: 一个 js 库，可以取代 setTimeout
```

# tips

###

The mixup between objects and hashes is also a very bad idea.
callable attributes should not be called directly like a function.
you should using class or Map instead of Object






- ts 灵魂发问：
    - 什么是字面量类型，用途是？ tips（"A"|"B"|"C"|1|2|3|4|true|false）
    - never 类型，用途是？ 和void 有什么不同？
    -  strictNullChecks 用途？ 
    -  索引签名，他有什么限制，这个限制使用交叉类型 怎么解决。 
    -  typeof 用来捕获变量的类型，捕获字符串的类型，得到的是一个字面量类型
    -  keyof 通过捕获得到的类型，来推断类型的key
    -  "module": "esnext" 和动态载入的关系
    -  可调用的类型
    -  重载，实现机制，限制是什么
    -  理解下面的代码
        ````
        // 泛型 Id 类型
            type Id<T extends string> = {
            type: T;
            value: string;
            };

            // 特殊的 Id 类型
            type FooId = Id<'foo'>;
            type BarId = Id<'bar'>;
        ````
    - bind 为什me 是有害的
    - 惰性初始化，为什么要惰性初始化
    - export default 是有害的
    - 用ts 简单写个单例



- 不建议在调用 fs.open() 、 fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 检查一个文件的可访问性。 如此处理会造成紊乱情况，因为其他进程可能在两个调用之间改变该文件的状态。 所以，用户代码应该直接打开/读取/写入文件，当文件无法访问时再处理错误

* 异步地追加数据到一个文件，如果文件不存在则创建文件。 data 可以是一个字符串或 Buffer
* 虽然 fs.exists() 是废弃的，但 fs.existsSync() 不是





# js - interview
- __propto__ 和 prototype 区别
- class 和 function 的区别，如何用es5 实现类似 class的特性
- new 操作符 具体背后做了哪些工作
- instanceof 和 typeof 的区别
- 描述下变量提升
- generator 和 iterator 的区别 
- 写个 curry 求和函数
- macrotasks 和 microtasks 区别， 解释下node或者浏览器的事件循环机制
- for of 和 for in 的区别
- 实现个 promise
- 写个deferred
- 写个深拷贝
# node
- 写一个 koa的compose
- 如何限制并发请求在500以内
- 双向管道，写一个demo 来描述他的作用
- 进程间通信方案，具体案例和最佳实践
- 如何捕获和上报node服务的运行时错误
- stateless 服务的理解和实践

# 网络相关
- https 机制
- http2 机制
- websocket 握手和通信，及对网关的要求
- nat 穿透
- csrf 防范
- method 除了curd 还有第3种
- etag If-none-match 
- Content-Security-Policy:script-src 'self'



# ===================================================================== END
### 事件机制
- 类型：mousedown, mouseup, mousemove, click, touchstart, touchmove ,touchend
- 标准事件： 先捕获capturing后冒泡 bubbling 
- IE：只有冒泡
- dispatchEvent 手动触发
- 捕获还是冒泡在addEventListener 的 第三个参数中设定, attachEvent 中没有该参数
- 阻止传播：stopPropagation
- 也可以阻止 捕获阶段的传播
#### 事件委托
currentTarget 注册事件dom
srcElement, target 触发时间的dom
timeStamp 事件的时间戳
#### ghostClick
scalable page ：300ms delay to fire the click after touchstart
not scalable page：10ms delay to fire the click after touchstart
<meta name="viewport" content="width=device-width, user-scalable=no">
In addition in IE10, also add this CSS rule to remove the ghost click delay:
html {
-ms-touch-action: manipulation;
touch-action: manipulation;
}
preventing the ghost clicks :
1,在window的 时间捕获中判断，touchstart 和click的位置，如果是同一个位置那么则，阻止click 传播
2,只用click
3，只用touch
4，fastclick

#### fastClick 原理

#### postMessage 
postMessage 可以做到任何域名页面之间的通信。但是需要使用到iframe

#### Fetch
credentials : include

#### webSocket  不实行同源政策


# ================================================================= END 


### BNF of LAMBDA
````
  <expression> := <name> | <function> | <application>
  <function> := λ<name>.<expression>
  <application> := <expression><expression>
````
* There is no algorithm that takes as input two lambda expressions and outputs TRUE or FALSE depending on whether or not the two expressions are equivalent.
* Operation	Name	Description
* (λx.M[x]) → (λy.M[y])	α-conversion	Renaming the bound (formal) variables in the expression. Used to avoid name collisions.
* ((λx.M) E) → (M[x:=E])	β-reduction	Replacing the bound variable with the argument expression in the body of the abstraction



### EVENT LOOP
````javascript
async function asyncOne() {
  console.log("async one start");
  await asyncInner();
  console.log("async one end");
  return "async one return";
}
async function asyncInner() {
  await console.log("async inner called");
}
asyncOne().then(m => console.log(m));
new Promise(function(r) {
  console.log("promise one start");
  r();
}).then(function() {
  let i = 0;
  while (i++ < 300000) {}
  console.log("promise one then called");
});
setTimeout(_ => console.log("setTimeout"));
setImmediate(_ => console.log("setImmediate"));
// Result: 
// => async one start => async inner called 
// => promise one start => promise one then called 
// => async one end => async one return 
// => setTimeout => setImmediate
````