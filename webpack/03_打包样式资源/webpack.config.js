/*该文件是webpack的配置文件
作业：提示webpack干哪些活（当你运行webpack指令时，会加载里面的配置）
所以构建工具都是基于node.js平台运行的模块化默认采用common.js
*/

// resolve用来拼接绝对路径的方法
const {resolve} = require('path');

module.exports = {
    // webpack配置
    // 入口起点
    entry: './src/index.js',
    //输出
    output:{
        // 输出文件名
        filename: 'built.js',

        // 输出路径
        // __dirname node.js的变量，代表当前文件的目录就对路径
        path: resolve(__dirname, 'build')
    },
    // loader的配置
    module: {
        rules: [
            // 详细的loader配置
            // 不同文件必须配置不同loader处理
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理
                use: [
                    // use中loader执行顺序,从左到右,从上到下
                    // 创建style标签,将js中的样式资源插入进行,添加到head中生效
                    'style-loader',
                    // 将css文件变成common.js模块加载js中,里面内容是样式字符串
                    'css-loader'
                ]

            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 将less文件编译成css文件
                    // 需要下载less-loader和less
                    'less-loader'
                ]
            }
        ]
    },
    // plugins的配置
    plugins: [
        // 详细的plugins配置
    ],
    //模式
    mode: 'development',   //开发模式
    // mode: 'production'
}