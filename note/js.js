javascript 类型
	数字，字符串，布尔值，null，undefined
数字
	只有64位数浮点数
	NAN是一个数值，不等于任何值，包括自己，用isNaN来检测。
	Infinity很大的数，但不是无限大，是js表示的最大值
字符串
	不可改变
表达式
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
	通过引用来访问
原型和继承：
	每一个对象都会链接到一个原型
数组：
	length 没有上限
	delete 和 splice 的区别
反射：
	类型检查



函数：
	函数就是对象
	调用：方法调用（this值为调用的对象）、
	     函数调用（this是外部的全局对象）、
	     构造器调用（this就是new 出来的新的对象）、
	     apply调用（this可以被指定）
返回：
	没有指定则返回的undefined
tip：
	for in 遍历对象属性的顺序不是固定的
	for in 再原型上表现糟糕
	delete 可以删除对象的属性，但是不会操作原型链中的任何对象
	javascript没有尾递归优化
	只有函数作用域没有块作用域
必包：
	可以实现成员私有
	改变函数的context


