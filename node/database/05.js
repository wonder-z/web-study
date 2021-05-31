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

//查找到一条文档并删除文档
//返回删除的文档
//如果查询体条件匹配到了多个文档，那么将会删除第一个匹配的文档
User.findOneAndDelete({_id: '602dffa1046a55149f436a04'}).then(result => console.log(result))

//删除多个
//若为空，则全部删除
User.deleteMany({_id: '602dffa1046a55149f436a04'}).then(result => console.log(result))