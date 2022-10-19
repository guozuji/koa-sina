// insert 语句
const { Blog, User } = require('../model');
(async function () {
  // create 方法创建用户
  // insert into users (...) values (...)
  const lingke = await User.create({
    userName: 'lingke',
    password: '123456',
    nickName: 'mowang'
  })
  await User.create({
    userName: 'saierda',
    password: '123456',
    nickName: 'gongzhu'
  })
  const blog1 = await Blog.create({
    title: 'saieErda',
    content: '123456',
    userId: lingke.id
  })
})()
