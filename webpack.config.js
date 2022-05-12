const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:path.resolve(__dirname, "node_modules"),
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\$.(png|j?g|svg|gif|webp)?$/,
                use: 'file-loader?name=./images/[name].[ext]'
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve( __dirname, 'public/index.html'),
        filename: 'index.html',

    })]
};