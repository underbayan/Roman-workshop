//////////////////////////////////////
if (global[__filename]) {
  cache = global[__filename]
} else {
  global[__filename] = cache
  isFirstLoad = true
}
//////////////////////////////////////
module.exports = exports
if (process.mainModule === module) {
  /* eslint-disable no-console */
  console.log(exports)
  /* eslint-enable no-console */
}
//////////////////////////////////////
// commmon routers

//////////////////////////////////////

if (socket.writable) {
  socket.write(`HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r\n` + 'Connection: close\r\n' + 'Content-type: text/html\r\n' + `Content-Length: ${Buffer.byteLength(message)}\r\n` + '\r\n' + message)
}
socket.destroy()
