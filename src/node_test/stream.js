/**
 * @description nodejs-stream
 */
    // 输入输出
// process.stdin.pipe(process.stdout)
const http = require('http')
const fs = require('fs')
const path = require('path')

const file1 = path.resolve(__dirname, 'data.txt')
const file2 = path.resolve(__dirname, 'data2.txt')

let start = new Date().getTime();
let end;

// =========================采用readFile读取, writeFile写入===================
// fs.readFile(file1, function (err, data) {
//   fs.writeFile(file2, data, function (err) {
//     end = new Date().getTime()
//     console.log('耗时：' + (end - start))
//   })
// })

// ========================采用流的方式复制文件=================================
// 创建文件的可读流
// const readStream = fs.createReadStream(file1)
//
// // 创建文件的可写流。
// const writeStream = fs.createWriteStream(file2)
//
// // 通过pipe连接， 执行拷贝
// readStream.pipe(writeStream)
//
// // 监听finish事件，写入完成
// writeStream.on('finish', function () {
//   console.log('写入完成:' + new Date().getTime())
// })
//
// // 监听open事件，读取开始
// readStream.on('open', function () {
//   console.log('读取开始:' + start)
// })
//
// // 监听data事件，获取每次读取内容
// readStream.on('data', function (res) {
//   console.log('读取中')
//   // console.log(res)
// })
//
// // 监听end事件，文件读取完成，同时拷贝完成
// readStream.on('end', function () {
//   end = new Date().getTime()
//   console.log('读取完成:' + end)
//   console.log('耗时：' + (end - start))
// })

// ====================采用copyFile(v8.5.0 版本后支持)，同步复制文件==============================
// fs.copyFile(file1, file2, function () {
//   end = new Date().getTime()
//   console.log('耗时：' + (end - start))
// })


// ===================================================
// const server = http.createServer((req, res) => {
//   if (req.method === 'GET') {
//     fs.readFile('./data.txt', (err, data) => {
//       if (err) throw err;
//       res.end(data);
//     })
//   }
// })

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const readStream = fs.createReadStream(file1)
    readStream.pipe(res)
  }
})
server.listen(3005)
