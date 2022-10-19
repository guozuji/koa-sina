/**
 * @description nodejs http模块
 */
const http = require('http')
console.log(http.METHODS)
console.log(http.STATUS_CODES)

const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('welcome')
})

server.listen(port, () => {
  console.log(`server is listening on port ${3000} ...`)
})
