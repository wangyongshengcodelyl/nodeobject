var db = require("../mysqlObj/db");
const express = require("express");
const router = express.Router();

// 个人中心数据请求接口
router.post("/userInfo", (req, res, next) => {
    const query = req.body; //前端传参
    if (query) {
        if (!query.userId) {
            res.msgObj.msg = "参数错误，请检查参数！"
            res.send(res.msgObj)
            return
        }
    }
    let queryData = "SELECT * FROM  userinfo WHERE userid= '" + query.userId + "'  "; //查询数据库
    db.query(queryData, [], function(results, fields) {
        res.msgObj.data = results;
        res.msgObj.status = "1";
        res.json(res.msgObj)
    });
});

// 个人资料更新
router.post("/updata", (req, res, next) => {
    const query = req.body; //前端传参
    console.log(query)
    if (query) {
        if (!query.userId) {
            res.msgObj.msg = "参数错误，请检查参数！"
            res.send(res.msgObj)
            return
        }
    }
    res.send("5545")
    let params = [query.nickName, query.phone, query.email, query.autograph]
    let queryData = "UPDATE userinfo SET email = ?, autograph = ?, phone = ?,nickName = ? WHERE userid= '" + query.userId + "'  "; //查询数据库
    db.query(queryData, params, function(results, fields) {
        // res.msgObj.data = results;
        // res.msgObj.status = "1";
        res.json(res.msgObj)
    });
    return
});

module.exports = router;