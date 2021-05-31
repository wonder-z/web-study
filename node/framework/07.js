const express = require('express');
const app = express();
//创建路由对象
const home = express.Router();
//为路由对象匹配请求路径
app.use('/home',home);

home.get('/index', (req,res)=>{
   res.send('aaaaaa')
    
})

//错误处理中间件
app.use((err, req, res, next) =>{
    res.status(500).send(err.message);
})

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');