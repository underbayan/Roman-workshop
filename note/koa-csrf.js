import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import session from 'koa-generic-session';
import convert from 'koa-convert';

const app = new Koa();

// set the session keys
app.keys = [ 'a', 'b' ];

// add session support
app.use(convert(session()));

// add body parsing
app.use(bodyParser());

// add the CSRF middleware
app.use(new CSRF({
  invalidSessionSecretMessage: 'Invalid session secret',
  invalidSessionSecretStatusCode: 403,
  invalidTokenMessage: 'Invalid CSRF token',
  invalidTokenStatusCode: 403,
  excludedMethods: [ 'GET', 'HEAD', 'OPTIONS' ],
  disableQuery: false
}));

// your middleware here (e.g. parse a form submit)
app.use((ctx, next) => {

  if (![ 'GET', 'POST' ].includes(ctx.method))
    return next();

  if (ctx.method === 'GET') {
    ctx.body = ctx.csrf;
    return;
  }

  ctx.body = 'OK';

});

app.listen();
