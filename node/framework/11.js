const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(fn({a:2}));

function fn(obj){
    return function(req,res,next){
        if(obj.a == 1){
            console.log(req.url);
        }else{
            console.log(req.method);
        } 
        next();
    }
}

app.get('/',(req,res)=>{
    res.send('ok')
})
//监听端口
app.listen(3000);
console.log('网站服务器启动成功');