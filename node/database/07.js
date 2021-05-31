const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground' ,{ useNewUrlParser: true ,useUnifiedTopology: true}) //若没有该数据库，则会自己创建
    .then(()=> console.log('数据库连接成功'))
    .catch(err=>console.log(err, '数据库连接失败'))
//创建集合规则
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true  必选字段
        required: [true , '请传入文章标题'],
        // minlength: 2,  //字符串的最短长度
        // maxlength: 5    //最长
        minlength: [2 , '可写提示信息'],
        maxlength: [5 , '请传入文章标题'],
        //去除字符串两边的空格 
        trim: true

    }, 
    category: {
        type: String,
        enum: {
            values: ['html', 'css', 'javascript', 'node.js'],
            message: '分类名称要在一定范围内'
        }
    }
    author:{
        type:String,
        //自定义规则 v为用户传入的值
        validate: {
            validator: v=>{
                //返回布尔值， true验证成功  false验证失败 v为要验证的值
                return v && v.length > 4
            },
            //自定义错误信息
            message: '传入得值不符合验证规则'
        }
    }
});
//数组，且每一个元素必须是字符串
//使用规则创建集合  集合名称  集合规则
const Post = mongoose.model('Post', postSchema);

Post.create({})
    .then(result => console.log(result))
    .catch(error => {
        //获取错误信息对象
        const err = error.errors;
        //循环错误对象信息
        for (var attr in err){
            console.log(err[attr]['message']);
        }
    })