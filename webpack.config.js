const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules:[
            {test: /\.js$/, loader:'babel-loader', exclude: /node_modules/},
            {test: /\.png$/, use:[
                {
                    loader: 'url-loader',
                    options: {
                        mimetype: 'image/png',
                    }
                }
            ]},
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.s(a|c)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }

        ]
    },
    devServer:{
        static: {
            directory: __dirname, // Use __dirname to refer to the current directory
        },
        hot: true,
        open:true,
        port: 8000,
        //watchContentBase: true   
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new Dotenv()
    ]
}