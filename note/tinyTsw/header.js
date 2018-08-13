  if (server.keepAliveTimeout > 0) {
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Keep-Alive', `timeout=${parseInt(server.keepAliveTimeout / 1000, 10)}`);
  } else {
    res.setHeader('Connection', 'close');
  }
  res.setHeader('X-Powered-By', 'TSW/Node.js');
  res.setHeader('Server', headerServer);
  res.setHeader('Cache-Control', 'no-cache');
