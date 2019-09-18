module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('Hello world')
    })
    app.get('/customer', function (req, res) {
        res.send('customer page')
    })
    app.get('/admin', function (req, res) {
        res.send('admin page')
    })

    app.get('/hello/:who?', function (req, res) {
        if (req.params.who) {
            res.end("Hello, " + req.params.who + ".")
        }
        else {
            res.send("Hello, Guest.")
        }
    })
    app.get('/forum/:fid/thread/:tid', function (req, res) {
        res.end("Hello, " + req.params.fid + "." + req.params.tid)
    })
    app.get('/redirect', function (req, res) {
        res.redirect(301, "http://www.baidu.com")
    })
    app.get('/file',function(req,res){
        res.sendfile("./test.md")
    })


// 匹配/commits/71dbb9c
// 或/commits/71dbb9c..4c084f9这样的git格式的网址
    app.get(/^\/commits\/(\w+)(?:\.\.(\w+))?$/, function (req, res) {
        var from = req.params[0]
        var to = req.params[1] || 'HEAD'
        res.send('commit range ' + from + '..' + to)
    })
}