const express = require('express');

//创建路由对象
const home = express.Router();

home.get('/index', (req,res)=>{
    res.send('欢迎来到博客首页页面')
})
module.exports = home;