#!/usr/bin/env node
'use strict'
var express = require('express');
var app = express();
var http = require("http");
var routes = require('./router')(app);

app.use("/home", function(request, response, next) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Welcome to the homepage!\n");
});

app.use("/about", function(request, response, next) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Welcome to the about page!\n");
});

app.use(function(request, response) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("404 error!\n");
});

app.listen(3000);
var http = require("http");

var rawApp = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello world! from rawApp");
});

rawApp.listen(3001, "localhost");