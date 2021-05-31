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
const User = mongoose.model('User', courseSchema) 

//查询用户集合中的所有文档
//find可传递查询条件，返回的都是数组
// User.find().then(result => console.log(result) );

// User.find({_id:'602dffa1046a55149f436a04'}).then(result => console.log(result) );

//findOne方法返回一条文档，默认返回当前集合中的第一条文档，一对象的形式
// User.findOne().then(result => console.log(result))

// User.findOne({name:'zhangsan'}).then(result => console.log(result))

//查询用户集合中年龄大于20小于40的
// User.find({age:{$gt:20, $lt: 40}}).then(result => console.log(result))

//匹配包含
User.find({hobbies:{$in : ['做饭']}}).then(result => console.log(result))

//选择要查询的字段,  _id默认出来   -_id表示不查询_id
User.find().select('name email -_id').then(result => console.log(result))

//将数据排序(根据年龄升序排列)
User.find().sort('age').then(result => console.log(result))
//降序
User.find().sort('-age').then(result => console.log(result))
//跳过和限制数量
User.find().skip(2).limit(3).then(result => console.log(result))