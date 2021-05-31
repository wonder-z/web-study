const express = require('express');
const app = express();

const bodyParser = require('body-parser');
//拦截所有请求
//extended: false 方法内部使用querystring模块处理请求采参数的格式
//extended: true 方法内部使用第三方模块qs处理请求参数的格式
app.use(bodyParser.urlencoded({extended: false}))

app.post('/add',(req,res)=>{
    res.send(req.body)
})
//监听端口
app.listen(3000);
console.log('网站服务器启动成功');