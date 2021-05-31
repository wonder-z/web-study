/*
loader: 下载  使用(配置)
plugins: 下载 引入 使用
*/

// resolve用来拼接绝对路径的方法
const {resolve} = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
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
            
        ]
    },
    // plugins的配置 插件
    plugins: [
        // 详细的plugins配置
        // 功能:默认会创建一个空的HTML,自动引入打包输出的所有资源(JS/css)
        // 需求:需要有结构的HTML文件
        new HtmlWebpackPlugin({
            // 复制'./src/index.html'文件,并自动引入打包输出的所有资源(JS/css)
            template: './src/index.html'
        })
    ],
    //模式
    mode: 'development',   //开发模式
    // mode: 'production'
}