const  webpack = require('webpack')
const merge = require('webpack-merge')

const  uglifyJsPlugin = require('uglifyjs-webpack-plugin')

const  common =require('./webpack.common')

const  path = require('path')
const zipWebPack = require('zip-webpack-plugin')
module.exports = merge(common,{
    devtool: 'source-map',
    plugins: [
       // new uglifyJsPlugin()
        new uglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new zipWebPack({
            path: path.join(__dirname,'dist'),//指定打包文件目录
            filename: 'webpack-test.zip'//打包文件名
        })
    ]
    /*,
    mode: 'development'*/
})