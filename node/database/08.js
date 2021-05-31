const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground' ,{ useNewUrlParser: true ,useUnifiedTopology: true}) //若没有该数据库，则会自己创建
    .then(()=> console.log('数据库连接成功'))
    .catch(err=>console.log(err, '数据库连接失败'))
//创建集合规则
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    }
});
const postSchema = new mongoose.Schema({
    title: {
        type: String,
    }, 
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' //关联的集合
    }
});
//数组，且每一个元素必须是字符串
//使用规则创建集合  集合名称  集合规则
const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);
//创建用户
// User.create({name : 'lisi'}).then(result => console.log(result))
//创建文章
// Post.create({title: '123', author: '602e23a0186e6d540493cd13'}).then(result => console.log(result))
Post.find().populate('author').then(result => console.log(result))