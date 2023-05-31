const net = require('net');
const path = require('path')
const client = net.createConnection(path.join('\\\\?\\pipe', process.cwd(), 'myctl'), () => {
  // 'connect' listener
  console.log('connected to server!');
  client.write('world!\r\n');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});
