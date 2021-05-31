const template = require('art-template');
const path = require('path');
const dateFormat = require('dateformat');

// const views = path.join(__dirname, 'views', '06.art');

//设置模板根目录
template.defaults.root = path.join(__dirname, 'views');
//导入模板变量
template.defaults.imports.dateFormat = dateFormat;

//配置模板的默认后缀
// template.defaults.extname = '.art';
// const html = template('06',{
//     time: new Date()
// })

template.defaults.extname = '.html';
console.log(template('07',{})); 

console.log(html); 