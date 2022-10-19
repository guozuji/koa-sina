const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const redisStore = require('koa-redis')
const session = require('koa-generic-session')
const view = require('./routes/view/index')
const users = require('./routes/api/users')
const { REDIS_CONF } = require('./conf/db')
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// session配置
app.keys = ['UID_GUO2342']
app.use(
    session({
      key: 'weibo.sid', // cookie name 默认是'koa.sid'
      prefix: 'weibo:sess:', // redis key的前缀，默认是koa:sess:
      cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 10 * 60 * 1000 // 毫秒
      },
      ttl: 10 * 60 * 1000, // 默认和cookie 的maxAge一样，毫秒
      store: redisStore({
        all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
      })
    })
)

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(view.routes(), view.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
