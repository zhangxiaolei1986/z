
const path = require('path');
const webpack   = require('webpack');
const publicPath = '/dist/';

module.exports = {
    entry: {
        index: './js/index.js'
    },
    output: {
        filename: '[name].js',
        publicPath: publicPath,
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.less$/, use:'style-loader!css-loader!less-loader'},
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.html/, use: "html-loader" },
            { test:/\.tpl$/, use:'tmodjs-loader'}
        ]
    },
    mode: 'development'
}
