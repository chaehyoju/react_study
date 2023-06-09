const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    //입력
    entry: {
        app: ['./client'],
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        debug: true,
                        targets: {
                           browsers: ['> 1% in KR'],
                        }, 
                    }],
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
            },
        }],
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],
    //출력
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]npm.js',
        publicPath: '/dist',
    },
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    },
}