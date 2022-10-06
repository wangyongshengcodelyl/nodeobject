var db = require("./mysqlObj/db");
const express = require("express");
const router = express.Router();
// const uuids = require("node-uuid")
// console.log("生成的uuid", uuids.v1())
const jwToken = require('jsonwebtoken'); //token生成器


// 用户登录信息校验及注册
router.post("/userInfo", (req, res, next) => {
    const query = req.body; //前端传参
    if (query) {
        if (!query.name || !query.password) {
            res.msgObj.msg = "参数错误，请检查参数！"
            res.send(res.msgObj)
            return
        }
    }
    let queryData = "SELECT * FROM userinfo"; //查询数据库
    db.query(queryData, [], function(results, fields) {
        let sqlNameArr = [];
        let sqlPassArr = [];
        if (results && results.length > 0) { //查询用户有数据
            results.forEach(ret => {
                sqlNameArr.push(ret.name);
                sqlPassArr.push(ret.password);
            })
            if (sqlNameArr.includes(query.name) && sqlPassArr.includes(query.password)) {
                res.msgObj.msg = "登录成功";
                res.msgObj.status = "1";
                res.send(res.msgObj);
            } else {
                !sqlNameArr.includes(query.name) ? res.msgObj.msg = "用户名不正确" : !sqlPassArr.includes(query.password) ? res.msgObj.msg = "密码不正确" : res.msgObj.msg = "用户不存在";
                res.send(res.msgObj);
            }
        }
    });
});

module.exports = router;