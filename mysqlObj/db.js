var mysql = require('mysql')
var dbConfig = require('./db.config')
module.exports = {
    query: function(sql, params, callback) {
        var connection = mysql.createConnection(dbConfig); //每次使用的时候需要创建链接
        connection.connect(function(err) {
            if (err) {
                throw err
            }
            //开始数据操作
            connection.query(sql, params, function(err, results, fields) {
                console.log(results, fields, "--------------------------------")
                if (err) {
                    throw err
                }
                //将查询出来的数据返回给回调函数
                callback && callback(
                    JSON.parse(JSON.stringify(results)),
                    // JSON.parse(JSON.stringify(fields))
                )
                connection.end(function(err) {
                    if (err) {
                        console.log('关闭数据库连接失败！')
                        throw err
                    }
                })
            })
        })
    },
}