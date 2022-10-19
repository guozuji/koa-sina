const router = require('koa-router')()
const { loginRedirect } = require('../../middlewares/loginChecks')
router.get('/index', loginRedirect, async (ctx, next) => {
  const { userName = 'Hi' } = ctx.query
  console.log(ctx.query)
  await ctx.render('index', {
    title: 'home pgae',
    userName
  })
})

/**
 *
 * @param ctx
 * @returns {{isLogin: boolean}}
 */
function getLoginInfo(ctx) {
  let data = {
    isLogin: false
  }
  const { userInfo } = ctx.session
  if (userInfo) {
    data = {
      userName: userInfo.userName,
      isLogin: true
    }
  }
  return data
}

router.get('/userLogin', async (ctx, next) => {
  await ctx.render('login', {
    title: 'login',
    ...getLoginInfo(ctx)
  })
})

router.get('/register', async (ctx, next) => {
  await ctx.render('register', {
    title: '注册',
    ...getLoginInfo(ctx)
  })
})

router.get('/setting',loginRedirect, async (ctx, next) => {
  await ctx.render('setting', ctx.session.userInfo)
})

// router.get('/json', async (ctx, next) => {
//   const session = ctx.session
//   if (session.viewNum == null) {
//     session.viewNum = 0
//   }
//   session.viewNum++
//   ctx.body = {
//     title: 'koa2 json',
//     viewNum: session.viewNum
//   }
// })

module.exports = router
