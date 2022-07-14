window.onload = function () {
    var send = document.getElementById("sendBtn")
    //获取到文本框对象
    var text = document.getElementById("textInput")
    var ul = document.getElementById("show")
    //创建和服务器的连接
    var exampleSocket = new WebSocket("ws://172.20.10.3:3000");
    document.getElementById("sendBtn").onclick = function (evt) {var sendMessage = text.value
        exampleSocket.send(sendMessage)
        //将自己发送的信息加载到右边
        var li = document.createElement('li');
        // 先有li 才能赋值
        var Myinform="<div class='info'><div class='left avatar'></div><div class='name'>辜十四</div><div class='clear'></div></div><div class='text'><div class='content'>"+text.value+"</div></div>"
        li.className = "ChatCard ME"
        li.innerHTML = Myinform;
        // (2) 添加元素
        ul.insertBefore(li, ul.lastChild)
        text.value = ""
        boxScroll(div);
        exampleSocket.onclose
        //将响应数据加载到左边
        exampleSocket.onmessage = function (evt) {
            var li = document.createElement('li');
            // 先有li 才能赋值
            var inform = "<div class='info'><div class='left avatar'></div><div class='name'>辜十四</div><div class='clear'></div></div><div class='text'><div class='content'>"+evt.data+"</div></div>"
            li.className = "ChatCard"
            li.innerHTML = inform;
            // (2) 添加元素
            ul.insertBefore(li, ul.lastChild)
            text.value = ""
            boxScroll(div);
            exampleSocket.onclose
        }
    }

    //以下实现滚动条底部操作
    var div = document.getElementById("show");
    function boxScroll(o) {
        o.scrollTop = o.scrollHeight;
    }
}