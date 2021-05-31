const express = require('express');
const path = require('path');
const app = express();


app.engine('art', require('express-art-template'));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'art');

app.locals.users = [{
    name : 'zahngsan',
    age: 20
},{
    name:'lisi',
    age: 30
}]

app.get('/index', (req,res)=>{
    res.render('index', {
        msg: '首页'
    }) 
})

app.get('/list', (req,res)=>{
    res.render('list',{
        msg: '列表页'
    })
})

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');