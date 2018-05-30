const path = require('path')
const  webpack = require('webpack')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const workboxplugin = require('workbox-webpack-plugin')
module.exports = {
    entry: {
        app: './src/index.js',
        another: './src/another-module.js'
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            title: 'production'
        }),
        new workboxplugin.GenerateSW({ //PWA渐进式网络应用程序
            clientsClaim: true,
            skipWaiting: true
        })
      /*  new webpack.optimize.CommonsChunkPlugin({
            name: 'commonplugin'
        })*/
    ],
    optimization: {//防止重复依赖引入
        // runtimeChunk: true,
        splitChunks: {
           name: 'common',
            chunks: 'all'
        }
    },
    mode: "development",
    output: {
        filename: "js/[name].bundle.[chunkhash].js",
        path: path.resolve(__dirname,'dist'),
        publicPath: "/"
    },
    module: {
        rules: [{
            test:/\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
            {
                test: /\.(png|svg|jpg|git)$/,
                loader: 'file-loader',
                query: {
                    limit: 1000,
                    name: 'img/[hash].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 1000,
                    name: 'fonts/[hash].[ext]'
                }
            },
            {
                test:/\.(csv|tsv)$/,
                use: 'csv-loader'
            },
            {
                test:/\.xml$/,
                use:'xml-loader'
            }]
    }
}