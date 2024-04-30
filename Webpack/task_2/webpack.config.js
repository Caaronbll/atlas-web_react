const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',
    performance: {
        maxAssetSize: 1000000,
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'production',
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
                      options: {
                        bypassOnDebug: true,
                        disable: true,
                      },
                    },
                ],
            },
        ],
    },
};