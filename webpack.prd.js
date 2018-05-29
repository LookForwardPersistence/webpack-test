const  webpack = require('webpack')
const merge = require('webpack-merge')

const  uglifyJsPlugin = require('uglifyjs-webpack-plugin')

const  common =require('./webpack.common')

module.exports = merge(common,{
    devtool: 'source-map',
    plugins: [
       // new uglifyJsPlugin()
        new uglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})