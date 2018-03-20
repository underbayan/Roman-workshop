#!/usr/bin/env node
var WebSocket = require('ws');
const ws = new WebSocket('ws://echo.websocket.org/');
setInterval(function() {ws.ping(function () {})},2000)
ws.on('pong', function (o) {console.log(new Date() + o)});
