const fs = require('fs')
const path = require('path')

// 创建大文件
const file = fs.createWriteStream('./data.txt');
for (let i = 0; i <= 10000000; i++) {
  file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n');
}
file.end();
