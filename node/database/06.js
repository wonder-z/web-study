const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground' ,{ useNewUrlParser: true ,useUnifiedTopology: true}) //若没有该数据库，则会自己创建
    .then(()=> console.log('数据库连接成功'))
    .catch(err=>console.log(err, '数据库连接失败'))
//创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    agee : Number,
    email: String,
    password: String,
    hobbies : [String]    
});
//数组，且每一个元素必须是字符串
//使用规则创建集合  集合名称  集合规则
const User = mongoose.model('User', courseSchema);

//更新集合里的文档，更新一个
User.updataOne({name:'zhangsan'},{name:'lisi'}).then(result => console.log(result))

//更新多个文档
User.updataMany({},{name:'lisi'}).then(result => console.log(result))
