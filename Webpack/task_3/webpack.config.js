const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    devServer: { // Configure webpack-dev-server
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8564, // Set the port to 8564
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable hot module replacement
        new HtmlWebpackPlugin({
            title: 'My App', // The title of the HTML page
            filename: 'index.html', // The name of the HTML file to generate
            template: './src/index.html', // The template HTML file (optional)
            inject: 'body', // Specify where to inject the script tags (head or body)
        })
    ]
};