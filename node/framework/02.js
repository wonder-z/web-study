const express = require('express');
//创建网站服务器
const app = express();
app.get('/request', (req,res, next)=>{
    req.name = 'zhangsan';
    next(); //一定要引用
});
//next为权限控制函数
app.get('/request',(req,res)=>{
    res.send(req.name)
})
//监听端口
app.listen(3000);
console.log('网站服务器启动成功');