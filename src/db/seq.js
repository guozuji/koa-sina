/**
 * @description 执行同步
 */
const Sequelize = require('sequelize')

const conf = {
  host: 'localhost',
  dialect: 'mysql'
}

//  创建实例
const seq = new Sequelize('blog', 'root', '123456', conf)

module.exports = seq

// 测试连接
seq.authenticate().then(() => {
  console.log('连接成功')
}).catch((err) => {
  console.log(err)
});
