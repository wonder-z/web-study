const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.get('/index/:id/:name/:age',(req,res)=>{
    res.send(req.params)
})
//只写/index不行

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');