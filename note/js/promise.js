#!/usr/bin/env node
'use strict'
eval(require('sync-request')('GET', 'https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.0/es6-promise.auto.min.js').getBody('utf8'));
let c = console
// Promise( /* executor */ function(resolve, reject) { ... } )
// then(onFulfilled[, onRejected]), returns a Promise
//thenable 对象
let thenable = {
    then: (resolve)=> {
        resolve()
        return 'success'
    }
}
let thenableReject = {
    then: (resolve)=> {
        throw 'thenable error';
        resolve()
    }
}
// Promise.resolve(3).resolve(thenable).then((success)=>c.log(success)).resolve(thenableReject).then(()=>{},(e)=>{c.log(e)})
Promise.resolve(1)
    .then(()=> {
        c.log('============================================================')
        c.log('=                         promise                          =')
        c.log('============================================================')
        c.log("Promise Demo")
    })
    .then(()=>new Promise((s)=>s(2)))
    .then(()=>new Promise((s, r)=>r(3)))
    .then(()=>0, (e)=>c.log('The sequence of num is 1,2,', e))
    .then(()=> {
        throw 'No value';
    })
    .then(()=> 0, (e)=> c.log('Then catch the reason is :' + e)
    )
    .then(()=>new Promise((s)=>
        setTimeout(()=> {
            c.log('100ms:')
            s(2)
        }, 100)))
    .then(()=>new Promise((s, r)=>
        setTimeout(()=> {
            c.log('200ms:')
            r('Reject after 200ms')
        }, 100)))
    .then(()=>0, (e)=>c.log(e))
    .then(()=> {
        let myPromise = new Promise((resolve, reject) => {
            setTimeout(()=>resolve("Success!"), 20000);
            setTimeout(()=>reject('failed'), 5000)
        })
            .then((s) => c.log("Yay! " + s) && false)
            .catch((s)=> c.log('Error:' + s) || true)

        return Promise.all([myPromise, Promise.resolve(3), 123456, new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'))])
            .then(values =>c.log("Promise return value：" + values))
    })
    .then(()=> {
        c.log('============================================================')
        c.log('=                         lights                           =')
        c.log('============================================================')
        let red = ()=>c.log('red'), green = ()=>c.log('green'), yellow = ()=>c.log('yellow'),
            light = (fn, timer)=>new Promise(resolve=> {
                setTimeout(()=> {
                    fn();
                    resolve()
                }, timer)
            }),
            start = (count)=> {
                if (!count)return
                count--

                Promise.resolve().then(()=>light(red, 3000)).then(()=>light(green, 1000)).then(()=>light(yellow, 2000)).then(()=>start(count))
            }
        start(2)
    })



//your own promise
//https://github.com/kriskowal/q/tree/v1/design
//http://www.html-js.com/article/Buildyourownpromise-blog-build-their-own-promise%203235


function Opromise(executor) {
    var self = this
    self.status = 'pending'
    self.data = undefined
    self.onResolvedCallback = []
    self.onRejectedCallback = []
    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolved'
            self.data = value
        }
        for (var i = 0; i < self.onResolvedCallback.length; i++) {
            self.onResolvedCallback[i](value)
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'rejected'
            self.data = reason
            for (var i = 0; i < self.onRejectedCallback.length; i++) {
                self.onRejectedCallback[i](reason)
            }
        }
    }
}
Opromise.prototype.then = function (onResolved, onrejected) {
    var self = this

    onResolved = typeof onResolved === 'function' ? onResolved : function (value) {
        return value
    }
    onRejected = typeof onRejected === 'function' ? onRejected : function (reason) {
        throw reason
    }


    if (self.status === 'resolved') {
        return new Opromise(function (resolve, reject) {
            new Promise(function (resolve, reject) {
                try {
                    var x = onResolved(self.data)
                    if (x instanceof Promise) { // 如果onResolved的返回值是一个Promise对象，直接取它的结果做为promise2的结果
                        x.then(resolve, reject)
                    }
                    resolve(x) // 否则，以它的返回值做为promise2的结果
                } catch (e) {
                    reject(e) // 如果出错，以捕获到的错误做为promise2的结果
                }
            })
        })
    }

    if (self.status === 'rejected') {
        return new Opromise(function (resolve, reject) {
            try {
                var x = onRejected(self.data)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                }
            } catch (e) {
                reject(e)
            }

        })
    }

    if (self.status === 'pending') {
        return new Opromise(function (resolve, reject) {
            self.onResolvedCallback.push(function (value) {
                try {
                    var x = onResolved(self.data)
                    if (x instanceof Promise) {
                        x.then(resolve, reject)
                    }
                } catch (e) {
                    reject(e)
                }
            })

            self.onRejectedCallback.push(function (reason) {
                try {
                    var x = onRejected(self.data)
                    if (x instanceof Promise) {
                        x.then(resolve, reject)
                    }
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
}
Opromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
}