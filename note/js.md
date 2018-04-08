* javascript 函数是对象 其实除了null 和undefined 其他的都是对象,只有函数才有prototype属性

* Number,Function,Object,Date,String本质都是函数，当然函数的本质也是对象

\_\_proto__ 详解
======
* 每一对象都有一个 内置属性[[prototype]],可以通过 \_\_proto__ 来访问这个属性 ，这个属性指向了构造该对象的函数(构造函数的)的对象的原型
```javascript
2..__proto__=== Number.prototype // 2的构造者是Number
Number.__proto__===Function.prototype //Number 的构造者是Function
Function.__proto__===Function.prototype //Function的构造者是 Function
Math.__proto__=== Object.prototype // Math的构造者是Object
({}).__proto__===Object.prototype // {}的构造者是Object
Object.__proto__===Function.prototype //Object 的构造者是 Function

var A=function(){}
var a=new A()
a.__proto__===A.prototype //a 的构造者是A
```

prototype详解
======
```javascript
console.log(typeof Function.prototype) // function
console.log(typeof Object.prototype)   // object
console.log(typeof Number.prototype)   // object
console.log(typeof Boolean.prototype)  // object
console.log(typeof String.prototype)   // object
console.log(typeof Array.prototype)    // object
console.log(typeof RegExp.prototype)   // object
console.log(typeof Error.prototype)    // object
console.log(typeof Date.prototype)     // object
console.log(typeof Object.prototype)   // object
```
class 详解
=====
```javascript
//局部变量(其实是利用了函数作用域)
function A(){
var privateVariable=12;
var privateFunction=function(){}
}
//私有变量,本质是闭包
function A(){
var privateProperty=0
return function get(){
    return privateProperty
}
}
// 静态变量和静态函数，只能通过A来调用，本质就是A的属性
function A(){}
A.staticVariable=12;
A.staticFunction=function(){}

// 本质是原型链
// all instatnce share a memory can sue prototype
// following methodA wouldn't be changed by sub instance
A.prototype.methodA=function (){console.log('Amethod')}

// 本质是 new 过程会改变this 为当前作用域
// all instantce will keep own memory for OwnProperty(成员变量)
function A(){
this.OwnProperty="Aproperty"
}

//A的成员有两种方式: 第二种方式可以限定成员是否能被修改，读取，变量等特性
function A(){
this.OwnProperty="Aproperty"
}
function A(){
Object.defineProperty(this,"propertyName",{value:"propertyValue"})
}

//实例化
var a=new A()
//继承方式 原理:
var Point = {
    x: 0,
    y: 0,
    print: function () { console.log(this.x, this.y); }
};

var p = {x: 10, y: 20, __proto__: Point};
p.print();
//继承方式 标准写法:
function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype = {
    print: function () { console.log(this.x, this.y); }
};

var p = new Point(10, 20);
p.print(); // 10 20

//Doublas crockford 写法
Object.create = function (parent) {
    function F() {}
    F.prototype = parent;
    return new F();
};
var Point = {
    x: 0,
    y: 0,
    print: function () { console.log(this.x, this.y); }
};

var p = Object.create(Point);
p.x = 10;
p.y = 20;
p.print(); // 10 20
```
new 详解
====
* new 指能用于函数,生成一个对象
* new A 和 new A() 本质一样
```javascript
/*
* @see https://www.zhihu.com/question/36440948/answer/72391410
* @author wang z 
*/
function New (f) { 
/*1*/  
var n = { '__proto__': f.prototype }; 
return function () { 
  /*2*/    
  f.apply(n, arguments); 
  /*3*/    
  return n; 
}; 
}
```
javascript 类型
=====
基本类型：number，string，boolean，null，undefined, symbol
引用类型(Object)： Array, Date, RegExp

数字
=====

只有64位数浮点数
NAN是一个数值，不等于任何值，包括自己，用isNaN来检测。
Infinity很大的数，但不是无限大，是js表示的最大值

字符串
=====
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
对象：
=====
通过引用来访问
原型和继承：
=====
每一个对象都会链接到一个原型

关键字:
=====
-Infinity,Infinity
typeof不能区分出数组，null和普通对象
只有通过new出来的基本类型才能通过instanceof判断
在判断是否字符串，是否数字，是否布尔值的时候，我们应该使用typeof,对数组和要判断对象是否是在某个构造函数或对象的原型链上时使用instanceof,对函数的判断两者皆可

数组：
=====
length 没有上限
delete 和 splice 的区别
delete  不影响数组长度
函数：
=====
函数就是对象
调用：方法调用（this值为调用的对象）、
     函数调用（this是外部的全局对象）、
     构造器调用（this就是new 出来的新的对象）、
     apply调用（this可以被指定）
     
返回：
=====
没有指定则返回的undefined

tip：
=====
 * for in 遍历对象属性的顺序不是固定的
 * for in 再原型上表现糟糕
 * delete 可以删除对象的属性，但是不会操作原型链中的任何对象
 * javascript没有尾递归优化
 * 只有函数作用域没有块作用域
 * JavaScript中if语句求值其实使用eval函数
 * instanceof 和typeof的区别
 * 未使用var关键字定义的变量都是全局变量。
 * 函数中声明的变量在整个函数中都有定义
 * 全局变量都是window对象的属性
 * JavaScript中的函数运行在它们被定义的作用域里,而不是它们被执行的作用域里
 * 迭代器： 是一个实现next函数 的对象
 * next函数：是一个返回{done:false, value:'' } 形式的无参函数
 * generator: 是一个 生成迭代器的函数
 * entries: 返回一个可迭代对象的迭代器
 * IIFE Immediately-Invoked Function Expression
 * 立即调用表达式: 自执行匿名函数 的设计模式: (function(){/* code */}())
 * setTimeout 有一个最小时间4ms/10ms? ,I will choose using the setImmediate 

Object:
=====
assign,
defineProperties, defineProperty,
entries(和 new Map 相互转化),
freeze 和 seal 区别（前者完全冻结,后者禁止了所有新的defineProperty）
setPrototypeOf(修改 __proto__ )

函数:
=====
箭头函数： 不绑定自己的this，super 和arguments，所以不能作为构造函数和new 一起使用，返回对象需要用o=>({o:12})的形式，可以用...arg来代替 arguments
yield
curry化sum: sum= (...o)=>o.length?(o.pop()+sum(...o)):0

正则表达式
=====

异步
=====
````
Basically, use microtasks when you need to do stuff asynchronously in a synchronous way (i.e. when you would say perform this (micro-)task in the most immediate future). Otherwise, stick to macrotasks.
Examples
macrotasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
microtasks: process.nextTick, Promises, Object.observe, MutationObserver
````

性能问题
=====
懒加载， 作用域越深，速度越慢，局部变量最快


Tool
=====
````
karma : test js on multiple browser and node.
Jasmine || mocha || qunit: test frame work
SetImmediate: 一个 js 库，可以取代 setTimeout
````
