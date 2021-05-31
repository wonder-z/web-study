const http = require('http');
const url = require('url');
const app = http.createServer();
app.on('request', (req,res)=>{
    const method = req.method.toLowerCase();
    const pathname = url.parse(req.url).pathname;

    res.writeHead(200, {
        'content-type':'text/html;charset=utf8'
    });
    if(method == 'get'){
        if(pathname == '/' || pathname == '/index'){
            res.end('欢迎来到首页');
            return;
        }
        else if (pathname == '/list'){
            res.end('欢迎来到列表页');
            return;
        }
        else{
            res.end('您访问的页面不存在');
            return;
        }
    }
    else if(method == 'post'){

    }
});

app.listen(3000);  //通过localhost:3000访问
console.log('网站服务器启动成功');  