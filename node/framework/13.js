const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')))

app.get('/index/:id/:name/:age',(req,res)=>{
    res.send(req.params)
})
//只写/index不行

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');