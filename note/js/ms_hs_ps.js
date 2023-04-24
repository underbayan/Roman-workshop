function middleware(ctx, next) { }
function hook(ctx) { }
class Plugin {
  middlewares = []
  run(ctx) { }
}

class App {
  middlewares = []
  plugins = {}
  hooks = {}
  useMiddleware(middleware) {
    this.middlewares.push(middleware)
  }
  registerPlugin(name, pl) {
    pl.middlewares.map(name => {
      this.plugins[name] = this.plugins[name] || []
      this.plugins[name].push(ps)
    })
  }
  registerHook(eventName, hk) {
    this.hooks[eventName] = hk // Should use symbolfor here?
  }
  handle(ctx, end = () => { }) { // Should using symbol to make it private
    if (this.middlewares.length) {
      const middleware = this.middlewares.shift()
      this.hooks[ctx.event] && this.hooks[ctx.event](ctx) // should support array list here?
      this.plugins[middleware.name].map(ps => ps.run(ctx))
      return middleware(ctx, this.handle)
    }
    return end(ctx)
  }
}