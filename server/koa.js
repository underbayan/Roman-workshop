#!/usr/bin/env node
const assert = require("assert")
const Koa = require('koa');
const app = new Koa();
const Keygrip = require("keygrip")
const http = require('http');
const https = require('https');
const keylist = ["SEKRIT3", "SEKRIT2", "SEKRIT1"]
const keys = Keygrip(keylist)
// .sign returns the hash for the first key
// all hashes are SHA1 HMACs in url-safe base64
hash = keys.sign("bieberschnitzel")
assert.ok(/^[\w\-]{27}$/.test(hash))

// .index returns the index of the first matching key
index = keys.index("bieberschnitzel", hash)
assert.equal(index, 0)

// .verify returns the a boolean indicating a matched key
matched = keys.verify("bieberschnitzel", hash)
assert.ok(matched)

index = keys.index("bieberschnitzel", "o_O")
assert.equal(index, -1)

// rotate a new key in, and an old key out
keylist.unshift("SEKRIT4")
keylist.pop()

// if index > 0, it's time to re-sign
index = keys.index("bieberschnitzel", hash)
assert.equal(index, 1)
hash = keys.sign("bieberschnitzel")
// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms `);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});
app.on('error', err => {
  log.error('server error', err)
});
//app.listen(3000); you can directly using the koa to listen the port
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
