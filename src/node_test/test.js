// set NODE_ENV=production

// 1.输入参数
// node test,js a=10 b=2
// 2.输入参数，键值对
// node test,js 10 2

const env = process.env.NODE_ENV
const args = process.argv
console.log('环境:' + env)

console.log(args)

const params = process.argv.slice(2)
console.log('参数:' + params)

console.log('求和:' + (Number(params[0]) + Number(params[1])))

// 命令行交互
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// //
// readline.question(`你叫什么名字?`, name => {
//   console.log(`你好 ${name}!`)
//   readline.close()
// })

// inquirer
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "请输入用户名"
  },
  {
    type: 'password',
    name: 'password',
    message: "请输入密码"
  }
]

inquirer.prompt(questions).then(answers => {
  console.dir({
    name: answers.name,
    password: answers.password
  })
})
