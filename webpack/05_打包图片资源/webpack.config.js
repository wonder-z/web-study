// /*
// loader: 下载  使用(配置)
// plugins: 下载 引入 使用
// */

// // resolve用来拼接绝对路径的方法
// const {resolve} = require('path');
// const HtmlWebpackPlugin=require('html-webpack-plugin');
// module.exports = {
//     // webpack配置
//     // 入口起点
//     entry: './src/index.js',
//     //输出
//     output:{
//         // 输出文件名
//         filename: 'built.js',

//         // 输出路径
//         // __dirname node.js的变量，代表当前文件的目录就对路径
//         path: resolve(__dirname, 'build')
//     },
//     // loader的配置
//     module: {
//         rules: [
//             // 详细的loader配置
//             // 不同文件必须配置不同loader处理
//             {
//                 // 匹配哪些文件
//                 test: /\.css$/,
//                 // 使用哪些loader进行处理
//                 use: [
//                     // use中loader执行顺序,从左到右,从上到下
//                     // 创建style标签,将js中的样式资源插入进行,添加到head中生效
//                     'style-loader',
//                     // 将css文件变成common.js模块加载js中,里面内容是样式字符串
//                     'css-loader'
//                 ]

//             },
//             {
//                 test: /\.less$/,
//                 use: [
//                     'style-loader',
//                     'css-loader',
//                     // 将less文件编译成css文件
//                     // 需要下载less-loader和less
//                     'less-loader'
//                 ]
//             },
//             {
//                 //处理图片资源
//                 test: /\.(jpg|pnj|gif)%/,
//                 //使用一个loader
//                 // 下载url-loader file-loader
//                 loader: 'url-loader',
//                 options:{
//                     //图片大小小于8kb,就会被base64处理
//                     // 优点:减少请求数量(减轻服务器压力)
//                     // 缺点: 图片体积会更大(文件请求速度更慢)
//                     limit: 8*1024
//                 }
//             }
//         ]
//     },
//     // plugins的配置 插件
//     plugins: [
//         // 详细的plugins配置
//         // 功能:默认会创建一个空的HTML,自动引入打包输出的所有资源(JS/css)
//         // 需求:需要有结构的HTML文件
//         new HtmlWebpackPlugin({
//             // 复制'./src/index.html'文件,并自动引入打包输出的所有资源(JS/css)
//             template: './src/index.html'
//         })
//     ],
//     //模式
//     mode: 'development',   //开发模式
//     // mode: 'production'
// }
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        // 要使用多个loader处理用use
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // 问题：默认处理不了html中img图片
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        // 使用一个loader
        // 下载 url-loader file-loader
        loader: 'url-loader',
        options: {
          // 图片大小小于8kb，就会被base64处理
          // 优点: 减少请求数量（减轻服务器压力）
          // 缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,
          // 问题：因为url-loader默认使用es6模块化解析，而html-withimg-loader引入图片是commonjs
          // 解析时会出问题：[object Module]
          // 解决：关闭url-loader的es6模块化，使用commonjs解析
           esModule: false,
          // 给图片进行重命名
          // [hash:10]取图片的hash的前10位
          // [ext]取文件原来扩展名
           name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
        loader: 'html-withimg-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
};
