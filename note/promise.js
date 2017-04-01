#!/usr/bin/env node
'use strict'
eval(require('sync-request')('GET', 'https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.0/es6-promise.auto.min.js').getBody('utf8'));
console.log('============================================================')
console.log('=                         promise                          =')
console.log('============================================================')
console.log("Promise Demo")
//your own promise
//https://github.com/kriskowal/q/tree/v1/design
//http://www.html-js.com/article/Buildyourownpromise-blog-build-their-own-promise%203235
let myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>resolve("Success!"), 200);
    setTimeout(()=>reject('failed'), 50)
})
    .then((s) => console.log("Yay! " + s) && false)
    .catch((s)=> console.log('Error:' + s) || true)

Promise.all([myPromise, Promise.resolve(3), 123456, new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'))])
    .then(values =>console.log(values))