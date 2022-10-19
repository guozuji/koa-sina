### nodejs 分享
* 文档见 docs/index.html
* nodejs 代码示例见 src/node_test
* sequelize 代码演示见 src/db


# Nodejs, Koa2, Sequelize

### Nodejs简介

Node.js 是一个开源和跨平台的 JavaScript 运行时环境.

Node.js 在浏览器之外运行 V8 JavaScript 引擎（Google Chrome 的内核）。 这使得 Node.js 的性能非常好。

Node.js 应用程序在单个进程中运行，无需为每个请求创建新的线程。 Node.js 在其标准库中提供了一组异步的 I/O 原语，以防止 JavaScript 代码阻塞，通常，Node.js
中的库是使用非阻塞范式编写的，使得阻塞行为成为异常而不是常态。

当 Node.js 执行 I/O 操作时（比如从网络读取、访问数据库或文件系统），Node.js 将在响应返回时恢复操作（而不是阻塞线程和浪费 CPU 周期等待）。

这允许 Node.js 使用单个服务器处理数千个并发连接，而​​不会引入管理线程并发（这可能是错误的重要来源）的负担。

Node.js 具有独特的优势，因为数百万为浏览器编写 JavaScript 的前端开发者现在无需学习完全不同的语言，就可以编写除客户端代码之外的服务器端代码。

#### 大量的库

npm 以其简单的结构帮助 Node.js 生态系统蓬勃发展，现在 npm 仓库托管了超过 1,000,000 个开源包，你可以自由使用。

### 开发环境

* Node
* npm

  下载连接：http://nodejs.cn/download/


#### nodejs 创建服务

简单示例：

``` 
  const http = require('http')
  const hostname = '127.0.0.1'
  const port = 3000
  const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
  })
  server.listen(port, hostname, () => { 
  console.log(`Server running at http://${hostname}:${port}/`)
  })
```

### 如何运行nodejs脚本
* ` node app.js `

### 设置&获取nodejs环境变量
* 通过命令行输入

  设置：
    ```terminal
    set NODE_ENV=production && node test.js 
    ```

  获取：
    ```javascript
    process.env.NODE_ENV
    ```

* 用cross-env,通过配置npm scripts

  cross-env解决什么问题?

  当我们使用 NODE_ENV = production 来设置环境变量的时候，windows 和 其他 unix 系统 bash 的命令是不一样的，例如：

  在 windows 上 使用： "SET NODE_ENV=production && node test.js"

  在其他 unix 系统上使用： "EXPORT NODE_ENV=production && node test.js"

  package.json 文件：
  ```json
    "scripts": {
      "node_test1": "set NODE_ENV=production && node ./src/node_test/test.js",
      "node_test2": "cross-env NODE_ENV=dev node ./src/node_test/test.js"
    }
  ```


### nodejs从命令行接收参数

参数可以是独立的，也可以具有键和值。

` node app.js steven `

或

` node app.js name=steven `

### 在nodejs命令行交互
```
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`请输入用户名`, name => {
  console.log(`你好 ${name}!`)
  readline.close()
})
```

更优的解决方案：
使用inquirer.js

```
  const inquirer = require('inquirer')

  var questions = [
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
    console.log(`你好 ${answers['name']}!`)
  })

```

### 核心模块

#### 路径模块
>path 模块提供了许多非常实用的函数来访问文件系统并与文件系统进行交互。

无需安装。 作为 Node.js 核心的组成部分，可以通过简单地引用来使用它：

` const path = require('path') `

* path.basename()
  返回路径的最后一部分。 第二个参数可以过滤掉文件的扩展名：

```
require('path').basename('/test/something') //something
require('path').basename('/test/something.txt') //something.txt
require('path').basename('/test/something.txt', '.txt') //something
```

* path.dirname()
```
require('path').dirname('/test/something') // /test
require('path').dirname('/test/something/file.txt') // /test/something
```

* path.isAbsolute()

* path.join()
```
const name = 'wang'
require('path').join('/', 'users', name, 'notes.txt') //'/users/wang/notes.txt'
```

* path.parse()

  解析对象的路径为组成其的片段：

  root: 根路径。
  dir: 从根路径开始的文件夹路径。
  base: 文件名 + 扩展名
  name: 文件名
  ext: 文件扩展名

  ` require('path').parse('/users/test.txt') `

  结果

    ```
    {
      root: '/',
      dir: '/users',
      base: 'test.txt',
      ext: '.txt',
      name: 'test'
    }
    ```

#### fs
>fs 模块提供了许多非常实用的函数来访问文件系统并与文件系统进行交互。
无需安装。 作为 Node.js 核心的组成部分，可以通过简单地引用来使用它：

` const fs = require('fs') `

fs.access(): 检查文件是否存在，以及 Node.js 是否有权限访问。

fs.appendFile():

fs.chmod(): 更改文件（通过传入的文件名指定）的权限。相关方法：fs.lchmod()、fs.fchmod()。

fs.chown(): 更改文件（通过传入的文件名指定）的所有者和群组。相关方法：fs.fchown()、fs.lchown()。

fs.close(): 关闭文件描述符。

fs.copyFile(): 拷贝文件。

fs.createReadStream(): 创建可读的文件流。

fs.createWriteStream(): 创建可写的文件流。

fs.link(): 新建指向文件的硬链接。

fs.mkdir(): 新建文件夹。

fs.mkdtemp(): 创建临时目录。

fs.open(): 设置文件模式。

fs.readdir(): 读取目录的内容。

fs.readFile(): 读取文件的内容。相关方法：fs.read()。

fs.readlink(): 读取符号链接的值。

fs.realpath(): 将相对的文件路径指针（.、..）解析为完整的路径。

fs.rename(): 重命名文件或文件夹。

fs.rmdir(): 删除文件夹。

#### stream

>流是为 Node.js 应用程序提供动力的基本概念之一。
它们是一种以高效的方式处理读/写文件、网络通信、或任何类型的端到端的信息交换。
流不是 Node.js 特有的概念。 它们是几十年前在 Unix 操作系统中引入的，程序可以通过管道运算符（|）对流进行相互交互。
例如，在传统的方式中，当告诉程序读取文件时，这会将文件从头到尾读入内存，然后进行处理。
使用流，则可以逐个片段地读取并处理（而无需全部保存在内存中）。

流的特定：

* 内存效率: 无需加载大量的数据到内存中即可进行处理。
* 时间效率: 当获得数据之后即可立即开始处理数据，这样所需的时间更少，而不必等到整个数据有效负载可用才开始。

一个典型的例子是从磁盘读取文件。
```
const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
  fs.readFile(__dirname + '/data.txt', (err, data) => {
    res.end(data)
  })
})
server.listen(3000)
```
readFile() 读取文件的全部内容，并在完成时调用回调函数。 回调中的 res.end(data) 会返回文件的内容给 HTTP 客户端。 如果文件很大，则该操作会花费较多的时间。 以下是使用流编写的相同内容。

示例：

```
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/data.txt')
  stream.pipe(res)
})
server.listen(3000)
```

当要发送的数据块已获得时就立即开始将其流式传输到 HTTP 客户端，而不是等待直到文件被完全读取。

pipe()
上面的示例使用了 stream.pipe(res) 这行代码：在文件流上调用 pipe() 方法。
该代码的作用是什么？ 它获取来源流，并将其通过管道传输到目标流。
在来源流上调用它，在该示例中，文件流通过管道传输到 HTTP 响应。
pipe() 方法的返回值是目标流，这是非常方便的事情，它使得可以链接多个 pipe() 调用，比如：

` src.pipe(dest1).pipe(dest2) `

#### http
>HTTP 核心模块是 Node.js 网络的关键模块。

### Node框架和工具

* [Express](https://www.expressjs.com.cn/) 是基于 Node.js 平台，快速、开放、极简的 Web 开发框架。

* [Koa](https://koa.bootcss.com/#introduction) 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API
  开发领域中的一个更小、更富有表现力、更健壮的基石。

* [Egg.js](https://www.eggjs.org/zh-CN/intro) 为企业级框架和应用而生，可以由 Egg.js 孕育出更多上层框架，帮助开发团队和开发人员降低开发和维护成本。

* [Next.js](https://www.nextjs.cn/) Next.js 为您提供生产环境所需的所有功能以及最佳的开发体验：包括静态及服务器端融合渲染、 支持 TypeScript、智能化打包、 路由预取等功能 无需任何配置。

### Koa与Express中间件对比

#### nodejs中间件定义

Nodejs中间件的定位是拦截用户请求，并在它前后做一些事情，例如：鉴权、安全检查、访问日志等等。它的工作模型下图所示。

#### express中间件

* Express的中间件时线性执行的，每一个中间件处理完后只有两个选择：交给下一个中间件或者返回Response。
  ![express中间件](./img/expressMiddleware.png)

#### koa中间件

* Koa的中间件机制是洋葱模型，中间件像一层层的洋葱。请求要穿过洋葱，每个中间件也会被穿过两次。

![koa中间件](./img/onion.png)
![koa中间件](./img/koaMiddleware.png)

* koa中间件执行顺序

![koa中间件](https://raw.githubusercontent.com/koajs/koa/a7b6ed0529a58112bac4171e4729b8760a34ab8b/docs/middleware.gif)

### koa创建项目

利用koa-generator 脚手架创建项目。

**step1：安装**

` npm install -g koa-generator `

or

` yarn add -g koa-generator `

*nodejs版本需 >= 8.0*

**step2：初始化项目**

` koa2 -e --git ./koa-test && cd koa-test && yarn install `

otions

```
-h, --help          output usage information
-V, --version       output the version number
-e, --ejs           add ejs engine support (defaults to jade)
    --hbs           add handlebars engine support
-n, --nunjucks      add nunjucks engine support
-H, --hogan         add hogan.js engine support
-c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
    --git           add .gitignore
-f, --force         force on non-empty directory
```

### koa讲解代码和结构

![koa中间件](./img/structure.png)

### 开发路由

见代码

### 模板引擎ejs

> ejs 高效的嵌入式 JavaScript 模板引擎。

示例：见代码

### 使用Sequelize 操作mysql

> Sequelize 是一个基于 promise 的 Node.js ORM, 目前支持 Postgres, MySQL, MariaDB, SQLite 以及 Microsoft SQL Server. 它具有强大的事务支持, 关联关系, 预读和延迟加载,读取复制等功能

#### 安装

` yarn add sequelize -S `

#### Sequelize配置

```
const Sequelize = require('sequelize')

const conf = {
  host: 'localhost',
  dialect: 'mysql'
}

//  创建实例
const seq = new Sequelize('blog', 'root', '123456', conf)

```

#### Sequelize模型定义

```
const User = sql.define('User', {
  // 在这里定义模型属性
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull 默认为 true
  }
});
```

#### 创建关联

```
Blog.belongsTo(User, {
  // 创建外键 Blog.userId -> User.id
  foreignKey: 'userId'
})

```

#### ORM的增删改查

```
(async function () {
  // create 方法创建用户
  // insert into users (...) values (...)
  await User.create({
    userName: 'GaiNong',
    password: '123456',
    nickName: 'enemy'
  })
  
  // destory 方法删除用户
  await User.destroy({
    where: {
      id: 2
    }
  })
  
 // update更新用户
  const updateRes = await User.update({
    nickName: 'DaMowang'
  }, {
    where: {
      userName: 'lingke'
    }
  })
 
 // findOne, 方法获得它找到的第一个条目(它可以满足提供的可选查询参数).
  await User.findOne({
    where: {
      userName: 'lingke'
    }
  })
  
 // findAll, 它生成一个标准的 SELECT 查询,该查询将从表中检索所有条目(除非受到 where 子句的限制).
    const datas = await User.findAll({
    where: {
      userName: {
        [Op.like]: '%Nong'
      }
    }
  })
})()
```

### koa ,ejs ,sequelize, mysql- 实现SSR登录


----------------------------------------

日期：8-24， 章节：5-14

