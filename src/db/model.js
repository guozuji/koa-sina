/**
 * @description 数据模型
 */
const Sequelize = require('sequelize')

const seq = require('./seq')

// 创建User模型，数据表名是 users
const User = seq.define('user', {
  userName: {
    type: Sequelize.STRING, // varchar(255)
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickName: {
    type: Sequelize.STRING,
    defaultValue: 'admin',
    comment: '用户名'
  }
})

// 创建blog模型
const Blog = seq.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Blog.belongsTo(User, {
  // 创建外键 Blog.userId -> User.id
  foreignKey: 'userId'
})

module.exports = {
  User,
  Blog
}
