function requestHandler(req, res) {
  if (server.keepAliveTimeout > 0) {
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Keep-Alive', `timeout=${parseInt(server.keepAliveTimeout / 1000, 10)}`);
  } else {
    res.setHeader('Connection', 'close');
  }
  res.setHeader('X-Powered-By', 'TSW/Node.js');
  res.setHeader('Server', headerServer);
  res.setHeader('Cache-Control', 'no-cache');

  if (config.devMode) {
    // 发者模式清除缓存
    cleanCache();
  }
  res.flush = res.flush || empty;
  parseGet(req); // 解析get参数
  doRoute(req, res); // HTTP路由
}
