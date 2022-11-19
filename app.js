const express = require('express');
const bodyParser = require('body-parser');



//创建服务器实例
const app = express();

// app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
// app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
//   extended: true
// }));
app.use(express.json());  //接收json格式的参数


//导入userRouter路由
const userRouter = require('./router/userRouter');
//使用app.use注册路由，app.use()：用来注册全局中间件
//'/user'，为路由前缀
app.use('/user', userRouter);


app.listen(8080, (req, res) => {
    console.log("http://127.0.0.1");
});