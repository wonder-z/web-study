const express = require('express');
//创建网站服务器
const app = express();

app.get('/', (req,res)=>{
    //send() 该方法内部会检测响应内容的类型    该方法会自动设置http状态码  该方法会帮我们自动设置响应的内容类型及编码
    res.send('Hello Express');
    //可以传递一个对象

});

app.get('/list',(req,res)=>{
    res.send({name: 'zhangsan'})
})
//监听端口
app.listen(3000);
console.log('网站服务器启动成功');