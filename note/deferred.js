#!/usr/bin/env node
'use strict'
eval(require('sync-request')('GET', 'https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.0/es6-promise.auto.min.js').getBody('utf8'))
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest


let c = console
c.log('============================================================')
c.log('=                         DEFERRED                         =')
c.log('============================================================')
function Deferred() {
    this.promise = new Promise(function (resolve, reject) {
        this._resolve = resolve
        this._reject = reject
    }.bind(this))
}
Deferred.prototype.resolve = function (value) {
    this._resolve.call(this.promise, value)
}
Deferred.prototype.reject = function (reason) {
    this._reject.call(this.promise, reason)
}
function getURL(URL) {
    var deferred = new Deferred()
    var req = new XMLHttpRequest()
    req.open('GET', URL, true)
    req.onload = function () {
        if (req.status === 200) {
            deferred.resolve(req.responseText)
        } else {
            deferred.reject(new Error(req.statusText))
        }
    }
    req.onerror = function () {
        deferred.reject(new Error(req.statusText))
    }
    req.send()
    return deferred.promise
}
// 运行示例
var URL = "https://jsonplaceholder.typicode.com/posts/1"
getURL(URL).then(function onFulfilled(value) {
    console.log(value)
}).catch(console.error.bind(console))