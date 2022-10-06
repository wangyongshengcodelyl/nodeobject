const express = require('express');
const app = express(); //创建服务实例
const router = require("./login")
const personalcenter = require("./home/personalCenter")
const middles = require("./mysqlObj/middleware")
console.log(middles)

app.use(express.urlencoded({ extended: false })) //解析表单数据的中间件
app.use(middles.stateFun) //解析表单数据的中间件


app.use('/api', router); //登录注册接口
app.use('/center', personalcenter); //个人中心接口


app.listen(8082, function() {
    console.log("服务启动了")
})