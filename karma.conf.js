module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', "karma-typescript"],
        files: [
            {
                pattern: './node_modules/systemjs/dist/system.src.js',
                included: true
            },
            {
                pattern: './node_modules/@iota-pico/core/dist/**/*.js',
                included: false
            },
            {
                pattern: './node_modules/@iota-pico/data/dist/**/*.js',
                included: false
            },
            {
                pattern: './node_modules/@iota-pico/crypto/dist/**/*.js',
                included: false
            },
            {
                pattern: './node_modules/chai/chai.js',
                included: false
            },
            {
                pattern: './node_modules/sinon/pkg/sinon.js',
                included: false
            },
            {
                pattern: './node_modules/big-integer/BigInteger.js',
                included: false
            },
            {
                pattern: './test/unit-module-config.js',
                included: true
            },
            {
                pattern: './test/unit-bootstrap.js',
                included: true
            },
            {
                pattern: './test/dist/**/*.js',
                included: false
            }
        ],
        browsers: ['ChromeHeadless'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        singleRun: true,
        client: {
            mocha: {
                timeout: 60000
            },
            args: [
                process.env
            ]
        },
        preprocessors: {
            './test/dist/src/**/*.js': ['coverage', 'sourcemap']
        },
        reporters: ["story", "coverage", 'remap-coverage'],
        coverageReporter: {
            type: 'in-memory'
        },
        remapCoverageReporter: {
            text: null,
            html: './coverage/lcov-report',
            lcovonly: './coverage/lcov.info'
        },
        browserNoActivityTimeout: 60000,
        plugins: [
            require('karma-chrome-launcher'),
            require('karma-coverage'),
            require('karma-sourcemap-loader'),
            require('karma-typescript'),
            require('karma-mocha'),
            require('karma-story-reporter'),
            require('karma-remap-coverage')
        ]
    });
};