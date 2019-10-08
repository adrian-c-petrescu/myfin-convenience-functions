'use strict';

var path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function (env) {
    return {
        context: __dirname,

        mode: 'production',
        devtool: 'source-map',

        module: {
            rules: [
                { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}
            ]
        },
        optimization: {
            minimize: true,
            minimizer: new UglifyJsPlugin({ exclude: /node_modules/ }),
            splitChunks: false
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
        ]
    };
};
