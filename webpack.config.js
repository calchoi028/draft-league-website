const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "./bundle.js",
    },
    mode: 'development',
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};