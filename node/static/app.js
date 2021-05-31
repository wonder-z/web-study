const http = require('http');
const url = require('url');
const app = http.createServer();
const path = require('path');
const fs = require('fs');
const mime = require('mime');
app.on('request', (req,res)=>{
    //获取路径的请求路径
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/introduction.html' : pathname;
    let realPath = path.join(__dirname , 'public' + pathname); 
    console.log(realPath);
    let type = mime.getType(realPath);
    fs.readFile(realPath, (error, result) =>{
        if(error != null){
            res.writeHead(404,{
                'content-type':'text/html;charset=utf8'
            });
            res.end('文件读取失败');
            return;
        }
        res.writeHead(200,{'Content-Type':type});
        
        res.end(result); 
    });
});

app.listen(3000);  //通过localhost:3000访问
console.log('网站服务器启动成功');  