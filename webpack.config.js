
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const  webpack  = require('webpack')
module.exports = {
    entry: {
        main: './src/index.js',
        print: './src/print.js'
    },
    devtool:"inline-source-map",
    devServer: {
        contentBase:'./dist',
        hot:true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        new  webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        filename: '[name].bundle.js',
        publicPath: "/"
    },
    mode:"development",//开发环境   production 生产环境 代码混淆压缩
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