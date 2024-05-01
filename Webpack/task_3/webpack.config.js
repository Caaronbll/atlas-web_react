const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },
    performance: {
        maxAssetSize: 1000000,
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
    mode: 'development', // Set mode to development
    module: {
        rules: [
            {
                test: /\.css$/i, // Match CSS files
                use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i, // Match image files
                use: [
                    "file-loader",
                    {
                      loader: "image-webpack-loader",
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, './public'),
        compress: true,
        port: 8564,
    },
    plugins: [
        new HTMLWebpackPlugin({
          filename: 'public/index.html'
        }),
        new CleanWebpackPlugin()
      ]
};