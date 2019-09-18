#!/usr/bin/env node
'use strict'
var l = console.log
var http = require("http");
var util = require("util")
var sio = require("socket.io");
var fs = require("fs");
var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-type": "text/html"});
  if(~req.url.indexOf('111')){
    res.end(fs.readFileSync("./socket_c.html"));
  }
  if(~req.url.indexOf('222')){
    res.end(fs.readFileSync("./socket_b.html"));
  }
  fs.writeFile('./_socket.data.txt', util.inspect(req, {depth: null}))

});
server.listen(1337);
var socket = sio.listen(server);
socket.on("connection", function (socket) {
  socket.emit("news", {hello: "你好"});
  socket.on("my other event", function (data) {
    console.log("服务器端接受到信息%j", data);
  });
  socket.on('message', details => l('message', details))
  socket.on('shareScreen', details => l('shareScreen', details))
  socket.on('unshareScreen', details => l('unshareScreen', details))
  socket.on('join', details => l('join', details))
  socket.on('disconnect', details => l('disconnect', details))
  socket.on('create', details => l('create', details))
  socket.on('trace', details => l('trace', details))
  socket.on('stunservers', details => l('stunservers', details))
});
