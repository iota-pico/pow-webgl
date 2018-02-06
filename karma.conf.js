module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
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
                pattern: './dist/**/*',
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
                pattern: './test/dist/**/*',
                included: false
            }
        ],
        browsers: ['ChromeHeadless'],
        reporters: ['story'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        singleRun: true
    });
};