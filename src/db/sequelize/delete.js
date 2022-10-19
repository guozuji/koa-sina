const { User } = require('../model');

(async function () {
  const deleteRes = await User.destroy({
    where: {
      id: 2
    }
  })
  console.log('删除结果...', deleteRes > 0)  //  updateResp>0 删除成功
})()
