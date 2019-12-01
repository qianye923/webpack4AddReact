const path = require('path');
const fs = require('fs');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { AutoWebPlugin } = require('web-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //这个插件不兼容style-loader  开发环境下使用style-loader，在生产环境分离css文件，可以这么配置：
const devMode = process.env.NODE_ENV !== 'production'

const MODULE = 'main';

module.exports = {
    entry: {
        // index: './src/pages/main/main_guide/index.js'
        index:"./src/index.js"
    },
    output: {
        filename: devMode ? '[name].[hash:8].js' : '[name].[chunkhash:8].js',       //数字8表示取hash标识符的前八位
        chunkFilename: devMode ? '[name].[hash:8].js' : '[name].[chunkhash:8].js',  //异步模块的文件输出名
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',   // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
    // optimization: {
    //     runtimeChunk: 'single',        //分离webpack运行时的引导代码
    //     splitChunks: {
    //         chunks: 'all',
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all'
    //             }
    //         }
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",    //本文未用到此loader...
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => []
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: "[name].[contenthash:8].css"
        }),
        new AutoWebPlugin(  // 入口点检测
            './src/pages/'+MODULE+'/',
            {
              filename: function(pageName){
                return pageName
              },
                template: (pageName) => {
                    const template = path.resolve('./public', `${pageName}.html`);
                    if (fs.existsSync(template)) {
                        return template;
                    } else {
                        return path.resolve('./public', 'default.html');
                    }
                },
                commonsChunk: {
                   name: MODULE+'_common', // 必填属性,输出的文件名称
                }
            }
        ),
        // new HtmlWebpackPlugin({
        //     title: 'index'
        // }),
        // new webpack.HashedModuleIdsPlugin()
    ]
};