var webpack = require('webpack');

process.env.CHROME_BIN = require('puppeteer').executablePath();
console.log('Found Chrome bin - ' + process.env.CHROME_BIN);

module.exports = function(config) {
    // Documentation: https://karma-runner.github.io/0.13/config/configuration-file.html
    config.set({
        browsers: [ 'ChromeHeadless', 'Chrome' ],

        files: [
            'tests/**/*.tests.js',
        ],

        port: 9876,

        //proxies: {
        //    '/proto/': 'http://localhost:9876/base/proto/' // handles loadProtoFile('./proto/bcl.proto') etc.
        //},

        frameworks: [ 'jasmine' ],

        logLevel: config.LOG_INFO, //config.LOG_DEBUG

        preprocessors: {
            'tests/**/*.tests.js': [ 'webpack' ]
        },

        webpack: Object.assign(
            require('./webpack.conf.test.js'),
            {
                plugins: [
                    new webpack.DefinePlugin({
                        'process.env.NODE_ENV': JSON.stringify('test')
                    })
                ]
            }
        ),
        webpackMiddleware: { noInfo: true },

        // reporter options
        mochaReporter: {
            colors: {
                success: 'bgGreen',
                info: 'cyan',
                warning: 'bgBlue',
                error: 'bgRed'
            }
        },

        coverageReporter: {
            reporters:[
                //{type: 'html', dir:'coverage/'},  // https://github.com/karma-runner/karma-coverage/issues/123
                {type: 'text'},
                {type: 'text-summary'}
            ],
        },

        plugins: [
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-jasmine',
            'karma-mocha-reporter'
        ]
    });
};

