/**
 * @description nodejs fs, 文件模块
 */
const node_fs = require('fs');

//查看文件信息,检测是文件还是目录
//第一个参数是文件，第二个参数是回调函数
node_fs.stat('index.txt', (err, res) => {
  if (err) {
    // console.log(err);
    return false;
  }
  // console.log('文件' + res.isFile());
  // console.log('目录' + res.isDirectory());
})

//创建文件。如果已经创建了，就会报错。
node_fs.mkdir('css', function (err) {
  if (err) {
    // console.log(err);
    return false;
  }
  console.log("创建成功")
})

//写入文件，可以覆盖之前写的。
node_fs.writeFile('t.txt', 'test write file', function (err) {
  if (err) {
    // console.log(err);
    return false;
  }
  // console.log("写入成功")
})

//追加，可以一直写入，不会覆盖
node_fs.appendFile('t1.txt', '追加，可以一直写入，不会覆盖\n', function (err) {
  if (err) {
    // console.log(err);
    return false;
  }
  // console.log("追加成功")
})

// 读文件，
node_fs.readFile('t1.txt', function (err, data) {
  if (err) {
    // console.log(err);
    return false;
  }
  // console.log(data); // 12进制的编码。。
  // console.log(data.toString());
})

//读取目录
node_fs.readdir('css', function (err, data) {
  if (err) {
    console.log(err);
    return false;
  }
  // console.log(data);
})

//  修改名字
node_fs.rename('css/index.css', 'css/home.css', function (err) {
  if (err) {
    console.log(err);
    return false;
  }
  console.log("改名成功！");
});

//删除文件。
// fs.unlink('index.txt', function (err) {
//   if (err) {
//     console.log(err);
//     return false;
//   }
//   console.log("删除文件成功！");
// })

//删除文件目录。不能删文件
// fs.rmdir('css', function (err) {
//   if (err) {
//     console.log(err);
//     return false;
//   }
//   console.log("删除目录成功！");
// })
