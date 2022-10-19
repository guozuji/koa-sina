const { User, Blog } = require('../db/model')

async function getUserInfo(userName, password) {
  const whereOpt = {
    userName
  }
  if (password) {
    Object.assign(whereOpt, { password })
  }
  const result = await User.findOne({
    where: whereOpt,
    attributes: ['id', 'userName', 'nickName','city','picture']
  })
  if (result === null) {
    return result
  }
  return result.dataValues
}

async function newUser(userName, password, nickName) {
  console.log('userName....')
  console.log(userName, password, nickName)
  const result = await User.create({
    userName,
    password,
    nickName
  })
  return result.dataValues
}

module.exports = {
  getUserInfo,
  newUser
}
