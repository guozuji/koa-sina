const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { getUserInfo, newUser } = require('../services/user')
const { registerUserNameNotExistInfo, loginFailInfo, registerFailInfo } = require('../model/ErrorInfo')
const doCrypto = require('../utils/crype')

async function isExist(userName) {
  const userInfo = await getUserInfo(userName)
  console.log(userInfo)
  if (userInfo) {
    // 存在
    return new SuccessModel(userInfo)
  } else {
    // 不存在
    return new ErrorModel(registerUserNameNotExistInfo)
  }
}

/**
 * @param ctx
 * @param userName
 * @param password
 * @returns {Promise<ErrorModel|SuccessModel>}
 */
async function login(ctx, userName, password) {
  const userInfo = await getUserInfo(userName, doCrypto(password))
  if (userInfo) {
    console.log('userInfo')
    console.log(userInfo)
    // ctx.session.userInfo = userInfo
    const session = ctx.session
    session.userInfo = userInfo
    return new SuccessModel(userInfo)
  } else {
    return new ErrorModel(loginFailInfo)
  }
  // if (!userInfo) {
  //   // 登录失败
  //   return new ErrorModel(loginFailInfo)
  // }
  //
  // // 登录成功
  // if (ctx.session.userInfo == null) {
  //   ctx.session.userInfo = userInfo
  // }
  // return new SuccessModel()
}

async function register(userName, password, nickName) {
  const res = await newUser(userName, doCrypto(password), nickName)
  if (res) {
    return new SuccessModel(res)
  } else {
    return new ErrorModel(registerFailInfo)
  }
}

module.exports = {
  isExist,
  login,
  register
}
