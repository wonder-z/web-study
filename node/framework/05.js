const express = require('express');
const fs = require('fs');
//创建网站服务器
const app = express();

    app.get('/index', (req,res,next)=>{
        // throw new Error('程序发生了未知错误')
        //异步
        fs.readFile('./demo.txt', 'utf8', (err,result)=>{
            if(err){
                next(err);
            }
            else{
                res.send(result);
            }
        })
        
    })

//错误处理中间件
app.use((err, req, res, next) =>{
    res.status(500).send(err.message);
})

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');