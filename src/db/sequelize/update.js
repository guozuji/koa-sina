const { User } = require('../model');

(async function () {
  const updateRes = await User.update({
    nickName: 'DaMowang'
  }, {
    where: {
      userName: 'lingke'
    }
  })
  console.log('修改结果...', updateRes[0] > 0)  //  updateResp[0]>0 修改成功
})()
