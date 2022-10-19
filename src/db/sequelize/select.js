const { Op } = require("sequelize");
const { User, Blog } = require('../model');

(async function () {
  // findOne 查询一条
  const lingke = await User.findOne({
    where: {
      userName: 'lingke'
    }
  })
  console.log(lingke.dataValues)
  const datas = await User.findAll({
    where: {
      userName: {
        [Op.like]: '%Nong'
      }
    }
  })
  // console.log(datas)
  // 查询特定的列
  const lingkeName = await User.findOne({
    attributes: ['userName', 'nickName'],
    where: {
      id: 1
    }
  })
  // console.log('lingkeName', lingkeName.dataValues)

  // 查询总数
  const blogListAndCount = await Blog.findAndCountAll({
    limit: 2, // 限制本次查询2条
    offset: 0, // 跳过多少条
    order: [
      ['id', 'desc']
    ]
  })
  console.log('blogListAndCount:',
      blogListAndCount.count,
      blogListAndCount.rows
  )

  // 连表查询
})()
