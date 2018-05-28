const path = require('path')

const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            title: 'production'
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,'dist')
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
                use:['file-loader']
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
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