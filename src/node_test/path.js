/**
 * @description nodejs 路径模块
 */
const path = require('path')

const p = 'C:\\Users\\mw\\Desktop\\GUO\\koa2-weibo-code\\src\\node_test\\path.js'

console.log('文件名:' + path.basename(p))

console.log('文件夹路径:' + path.dirname(p))

console.log('是否绝对路径:' + path.isAbsolute(p))

console.log('路径连接:' + path.join('/', 'users', 'GUO', 'notes.txt'))

console.dir(path.parse(p))

console.log('获取绝对路径：' + path.resolve('./path.js'))
