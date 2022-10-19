
const seq = require('./seq')
require('./model')

// 测试连接
seq.authenticate().then(() => {
  console.log('连接成功')
}).catch((err) => {
  console.log(err)
});

// 执行同步
seq.sync({ force: true }).then(()=>{
  console.log('同步成功')
  process.exit()
})
