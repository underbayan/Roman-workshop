const express = require('express')
const app = express()
const port = 3000

app.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
app.use(
  '/router',
  express
    .Router()
    .use(function timeLog(req, res, next) {
      console.log('Time: ', Date.now())
      next()
    })
    .get('/birds', function(req, res) {
      res.send('birds')
    })
)

app.get('/', function(req, res) {
  res.send('root')
})

app.get('/about', function(req, res) {
  res.send('about')
})

app.get('/random.text', function(req, res) {
  res.send('random.text')
})
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd')
})
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd')
})
app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/')
})
app.get('/info', (req, res) => {
  const r = `
  app.locals.title:${app.locals.title},
  app.locals.email:${app.locals.email},
  app.locals.strftime:${app.locals.strftime},
  mountPaht:${app.mountpath}`
  res.send(r)
})
app.all('/secret', function(req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})
app
  .route('/book')
  .get(function(req, res) {
    res.send('Get a random book')
  })
  .post(function(req, res) {
    res.send('Add a book')
  })
  .put(function(req, res) {
    res.send('Update the book')
  })

//** 下面是静态文件服务器 */
var options = {
  dotfiles: 'ignore',
  extensions: ['htm', 'html', 'png'],
  etag: false,
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function(res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}
app.use('/static', express.static('public', options))
