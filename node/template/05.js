const template = require('art-template');
const path = require('path');
//template方法是用来拼接字符串的
//1.模板路径 绝对路径
//2.要在模板中显示的数据 对象类型
//返回拼接好的字符串
const views = path.join(__dirname, 'views', '05.art')
const html = template(views,{
    msg: '我是模板'
})

console.log(html); 