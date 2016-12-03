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
//私有变量(其实是利用了函数作用域)
function A(){
  var privateVariable=12;
  var privateFunction=function(){}
}

// 静态变量和静态函数
function A(){}
A.staticVariable=12;
A.staticFunction=function(){}

//实例化


//继承
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
>```javascript
>function New (f) { 
>   /*1*/  
>   var n = { '__proto__': f.prototype }; 
>   return function () { 
>      /*2*/    
>      f.apply(n, arguments); 
>      /*3*/    
>      return n; 
>   }; 
>}
>/*作者：wang z
>链接：https://www.zhihu.com/question/36440948/answer/72391410
>来源：知乎
>著作权归作者所有，转载请联系作者获得授权。*/
>```
