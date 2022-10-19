const router = require('koa-router')()
const { login, register, isExist } = require('../../controller/user')
const userValidate = require('../../validator/user')
const { genValidator } = require('../../middlewares/validator')
router.prefix('/api/user')

router.get('/', async (ctx, next) => {
  ctx.body = 'this is a users response!'
})

router.get('/profile/:userName', async (ctx, next) => {
  const { userName } = ctx.params
  ctx.body = {
    title: 'this is profile page',
    userName
  }
})

router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await login(ctx, userName, password)
})

router.post('/isExist', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await isExist(userName, password)
})

router.post('/register', genValidator(userValidate), async (ctx, next) => {
  const { userName, password, nickName } = ctx.request.body
  ctx.body = await register(userName, password, nickName)
})
module.exports = router
