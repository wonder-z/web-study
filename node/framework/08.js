const express = require('express');
const app = express();
//创建路由对象
const home = require('./route/home');
const admin = require('./route/admin');
//为路由对象匹配请求路径
app.use('/home',home);
app.use('/admin',admin);

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');