#!/usr/bin/env node
'use strict'
var protobuf = require("protobufjs")
protobuf.load('index.proto', function (err, root) {
    if (err)
        throw err
    const helloworld = root.lookupType('lm.helloworld')
    let message = helloworld.create({id: 12, str: 'hello,word!'})
    console.log(`message = ${JSON.stringify(message)}`)
    let buffer = helloworld.encode(message).finish()
    console.log(`buffer = ${Array.prototype.toString.call(buffer)}`)
    let decoded = helloworld.decode(buffer)
    console.log(`decoded = ${JSON.stringify(decoded)}`)
})