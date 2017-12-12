var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();
var parseTorrentFile = require('parse-torrent-file')
var path = require('path')
var fs= require('fs')
var torrent = fs.readFileSync(path.join(__dirname, '/var/www/p2pspider/torrents/3eddbedd111acaa9df8e1a6cdff5b9d676b040cb.torrent'))
var parsed
try {
    parsed = parseTorrentFile(torrent)
} catch (e) {
    // the torrent file was corrupt
    console.error(e)
}

console.log(parsed.toString())