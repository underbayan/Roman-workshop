const obj = require('./a')
obj.a='change'
const obj2 =require('./a')
console.log("change!!!",obj2)
const obj3 = require('./c')
console.log("change!!!", obj2)

