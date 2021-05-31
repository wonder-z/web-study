const express = require('express');
//创建网站服务器
const app = express();

// app.use('/admin', (req, res, next) =>{
//     res.send('页面正在维护中....');
// })

app.use('/admin', (req, res, next) =>{
    //用户没登录
    let isLogin = false;
    if(isLogin){
        next();
    }
    else{
        res.send('您还没有登录');
    }
})

app.get('/admin', (req,res)=>{
    res.send('您已经登录可以访问当前页面')
})

app.use((req, res, next) =>{
    //为客户端响应状态码和提示信息
    res.status(404)
        .send('当前访问的页面不存在');
})
//监听端口
app.listen(3000);
console.log('网站服务器启动成功');