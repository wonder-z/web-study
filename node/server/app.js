const http = require('http');   //创建服务器
const url = require('url');//用于处理地址
const app = http.createServer();  // 网站服务器对象
app.on('request', (req,res) =>{ //req就是请求对象
    // console.log(req.method);   //获取请求方式
    console.log(req.url);  //获取请求地址
    //console.log(req.headers['accept']); //获取请求报文信息
    res.writeHead(200, {
        'content-type':'text/html;charset=utf8'
    });     //状态码，响应报文信息
    
    let {query, pathname} = url.parse(req.url, true)//要解析的url地址  将查询参数解析成对象
    console.log(query.name); //字符串
    console.log(query.age); 
    if(pathname == '/index' || pathname == '/'){
        res.end('<h2>欢迎来到首页</h2>');
        return;
    }
    else if(pathname == '/list'){
        res.end('welcome to listpage');
        return;
    }
    else{
        res.end('not found');
        return;
    }
    if(req.method == 'POST'){
        res.end('post');
    }
    else if (req.method == 'GET'){
        res.end('get');
    }
    // res.end('<h2>Hello user</h2>');  //结束请求
});    //当客户端有请求时

// 必须得监听一个端口
app.listen(3000);  //通过localhost:3000访问
console.log('网站服务器启动成功');  