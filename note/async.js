#!/usr/bin/env node
const A = require('async')
const fs = require('fs')
A.map(['rx.js', 'fetch.js', 'deferred.js'], fs.stat, function (err, results) {
  // results is now an array of stats for each file
  console.log(err, results, new Date().getTime())
});
A.filter(['rx.js', 'fetch.js', 'deferred.js','NOfile'], function(filePath, callback) {
  fs.access(filePath, function(err) {
    callback(null, !err)
  });
}, function(err, results) {
  console.log(err, results, new Date().getTime())
  // results now equals an array of the existing files
});
A.parallel([
  c=> setTimeout(()=>console.log('1,parallel'),400),
  c=> setTimeout(()=>console.log('2,parallel'),400),
  c=> setTimeout(()=>console.log('3,parallel'),400)
], function (e, r) {console.log(r)})
A.series([
  c=> setTimeout(()=>console.log('300,series'),300),
  c=> setTimeout(()=>console.log('200,series'),200),
  c=> setTimeout(()=>console.log('100,series'),100),
], function (e, r) {console.log(r)});
