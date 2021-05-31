const express = require('express');
const app = express();
//创建路由对象
app.get('/index', (req,res)=>{
    res.send(req.query);
})

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');