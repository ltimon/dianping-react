/**
 * Created by litong on 2017/6/6.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const op = require('open-browser-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: path.resolve(__dirname,'app/index'),
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js','jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: /app/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options : {
                            plugins : function() {
                                return [
                                    require('autoprefixer')({
                                        broswers : ['last 5 versions']
                                    })
                                ];
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg|bmp)$/,
                loader: 'url-loader',
                options: {
                    limit: 5000
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/app/index.html'
        }),
        new op({
            url: 'http://localhost:8000'
        })
    ],
    devServer: {
      //此处是webpack-dev-server的配置
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure:false
            }
        },
        contentBase: './public',
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}