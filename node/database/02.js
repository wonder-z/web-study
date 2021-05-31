const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground' ,{ useNewUrlParser: true ,useUnifiedTopology: true}) //若没有该数据库，则会自己创建
    .then(()=> console.log('数据库连接成功'))
    .catch(err=>console.log(err, '数据库连接失败'))
//创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})
//使用规则创建集合  集合名称  集合规则
const Course = mongoose.model('Course', courseSchema) //courses 没有插入数据，数据库不会显现出来

//创建文档
const course = new Course({
    name: 'node.js',
    author: '老师',
    isPublished: true
})

course.save()  //将文档插入到数据库中