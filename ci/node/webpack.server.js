var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js.js')();
var opn = require('opn')
var app = express();
var compiler = webpack(config);
app.use(require('connect-history-api-fallback')({
  htmlAcceptHeaders: ['text/html'],
  disableDotRule: true,
  logger: console.log.bind(console)
}));
app.use(require('webpack-dev-middleware')(compiler, {
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: 'normal',
  historyApiFallback: true,
  publicPath: "/"
}));
app.use(require('webpack-hot-middleware')(compiler, {
}));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });
app.get('/', function (req, res) {
  res.sendFile('/index.html');
});
app.listen(3000, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  opn('http://0.0.0.0:3000/')
});
