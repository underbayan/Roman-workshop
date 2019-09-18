#!/usr/bin/env node
eval(require('sync-request')('GET', 'https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.0/es6-promise.auto.min.js').getBody('utf8'));
require('isomorphic-fetch');
var WebTorrent = require('webtorrent')
let broadcaster = new WebTorrent();
broadcaster.seed("seed" + Math.random(), (torrent) => {
    torrentInfo[currMagnet] = torrent.magnetURI;
    console.log(`broadcaster ${castNum} is seeding `, torrent.magnetURI)
    this.sendMagnetToServer(torrent.magnetURI);
});
broadcaster.on('error', function (err) {
    console.log('webtorrents has encountered an error', err)
})
