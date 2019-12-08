res.setHeader('Connection', 'keep-alive')
res.setHeader('Keep-Alive', `timeout=${parseInt(server.keepAliveTimeout / 1000, 10)}`)
res.setHeader('Connection', 'close')
res.setHeader('X-Powered-By', 'TSW/Node.js')
res.setHeader('Server', headerServer)
res.setHeader('Cache-Control', 'no-cache')

// 'Access-Control-Allow-Credentials'
// Access-Control-Allow-Methods', 'POST, GET, OPTIONS
//  access-control-request-headers
// 