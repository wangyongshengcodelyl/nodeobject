//接口中间件
function stateFun(req, res, next) {
    console.log(req.headers.authorization, "===----99999")
    res.msgObj = {
        status: "0",
        msg: "请求成功",
        data: null
    }
    next()
        // const bearerHeader = req.headers.authorization
        // if (typeof bearerHeader !== 'undefined') {
        //     req.token = bearerHeader.split(' ')[1]
        //     next()
        // } else {
        //     res.send({
        //         msg: '请先登录'
        //     })
        // }

}
module.exports = {
    stateFun: stateFun
}