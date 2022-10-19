// 基础模板
class BaseModel {
  constructor({errno, data, message}) {
    this.errno = errno
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data={}) {
    super({
      errno: 0,
      data
    })
  }
}

class ErrorModel extends BaseModel {
  constructor({ errno, message}) {
    super({
      errno,
      message
    });
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}

// example
// const successRes = new SuccessModel(
//     {
//       id: 1,
//       userName: 'guozuji',
//       nickName: 'GUO'
//     }, '登录成功'
// )
// // console.log(successRes)
//
// const errorRes = new ErrorModel(-2, '用户已存在')
// console.log(errorRes)
