const express = require('express');
const path = require('path');
const app = express();

//告诉express框架使用什么模板引擎渲染什么后缀的模板
// 参数： 模板后缀  使用的模板引擎
app.engine('art', require('express-art-template'));
//告诉express框架模板存放的位置是什么 写绝对路径
app.set('views', path.join(__dirname, 'views'));
//告诉express框架模板的默认后缀是神什么  没写就是默认的
app.set('view engine', 'art');

// // 1、告诉express框架模板文件所在的位置
// app.set('views', path.join(__dirname, 'views'));
// // 2、告诉express框架模板后缀是什么
// app.set('view engine', 'art');
// // 3、当渲染后缀为art模板时，所使用的模板引擎是什么
// app.engine('art', require('express-art-template'));

app.get('/index', (req,res)=>{
    //拼接模板路径
    //拼接模板后缀
    //哪一个模板和哪一个数据进行拼接
    //把拼接的结果响应到客户端
    res.render('index', {
        msg: 'message'
    }) 
})

app.get('/list', (req,res)=>{
    res.render('list',{
        msg: 'list page'
    })
})

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');