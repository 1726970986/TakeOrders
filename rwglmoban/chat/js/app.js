// 1.导入nodejs-websocket包
const ws = require('nodejs-websocket')
const PORT = 3000
// 2.创建一个server
function broadcast(msg){
    //server.connection:表示所有的用户
    server.connections.forEach(item=>{
        item.send(msg)
    })
}
let count = 0
const server = ws.createServer(function(connect){
    console.log('有用户连接上来了')
    count++
    connect.on('text', function (str) {
        console.log('接收到了用户数据', str)
        broadcast(str)
    })

    connect.on('close',()=>{
        count--
        console.log("连接断开了")
    })

    connect.on('error',()=>{
        console.log("用户连接异常")
    })
})
server.listen(PORT, () => {
    console.log('websocket服务启动成功了，监听了端口' + PORT)
})