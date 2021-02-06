

'use strict';

var path = require('path');
var webpack = require('webpack');
var glob = require('glob');


console.log('Dirname = ' + __dirname);
var entryPoints = glob.sync(__dirname + '/tests/**/*.tests.js');

console.log('Entry points: ' + JSON.stringify(entryPoints));


module.exports = {
    entry: entryPoints,
    context: __dirname,

    mode: 'development',
    devtool: 'inline-source-map',

    output: {
        path: path.resolve(__dirname, '/test-dist/'),
        publicPath: '/build/'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ]
};
