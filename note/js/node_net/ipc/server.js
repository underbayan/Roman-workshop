const net = require('net')
const path = require('path')
const sr = net.createServer()
sr.listen(path.join('\\\\?\\pipe', process.cwd(), 'myctl'))
sr.on('connection', _ => {
  _.on('connect', _ => console.log(_))
  _.on('data', data => {
    console.log('recive the data', data)
    _.write('1234567890')
  })

  _.on('end', _ => console.log(_))
})
sr.on('close', _ => console.log(_))

// 如何管理connections
// getConnections:err,count
// 保持 server 和 解除server;
