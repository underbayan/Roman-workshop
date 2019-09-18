#!/usr/bin/env node
'use strict'

function Mutable(){
  let h={set(t,n,v){
    t=Object.assign({},t)

    t[n] = new Proxy(v,h)
      console.log(t,n,v)
  }}
   return new Proxy({},h)
}

const p = new Mutable()
p.a=new Number(1)
p.b=p.a
p.a.a1=new Number(1)
console.log(p.a,p.b.a1,'a is 2 and b is undefined')

