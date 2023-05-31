for 循环：for 关键字用于遍历迭代器或可迭代对象的元素。它可以与 in 关键字一起使用。例如：for item in iterable { /* do something with item */ }。这种用法允许逐个访问可迭代对象的元素。

for 区间：for 关键字可以用于创建一个区间迭代器。例如：for i in 0..5 { /* do something with i */ }。这种用法可用于遍历一个范围内的数字或字符。

for 条件匹配：for 关键字可以与 if 关键字一起使用，进行条件匹配。例如：for item in iterable if condition { /* do something with item */ }。这种用法可以在遍历迭代器或可迭代对象的元素时，根据指定的条件进行筛选。

for 类型绑定：for 关键字可以与 let 关键字一起使用，用于在遍历过程中绑定元素到一个新的变量。例如：for (index, item) in iterable.enumerate() { /* do something with index and item */ }。这种用法允许同时访问迭代器的索引和元素。