#!/usr/bin/env node
'use strict'
async function tmp(){
    let a={},b={},c={}
    await setTimeout(()=>a.t=12,500)
    await setTimeout(()=>b.t=9,200)
    await setTimeout(()=>c.t=1,100)
    return {a,b,c}
}
console.log(tmp().then(o=>console.log(o)))
