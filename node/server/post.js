const http = require('http');   //创建服务器
const app = http.createServer();  // 网站服务器对象
const querystring = require('querystring'); //处理请求参数模块
app.on('request', (req,res) =>{ 

    let postParams = '';
    req.on('data', params=>{
        postParams += params;
    })
    req.on('end',()=>{
        console.log(querystring.parse(postParams));
    })
    res.end('ok');
});    //post参数是通过事件的方式接受的   data  当请求参数传递时
// end 当请求参数传递完时

// 必须得监听一个端口
app.listen(3000);  //通过localhost:3000访问
console.log('网站服务器启动成功');  