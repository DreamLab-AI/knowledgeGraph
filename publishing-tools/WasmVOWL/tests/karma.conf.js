/**
 * Karma Configuration for WebVOWL Tests
 *
 * Supports unit, integration, and benchmark tests
 */

module.exports = function(config) {
    config.set({
        // Base path for resolving patterns
        basePath: '../',

        // Frameworks to use
        frameworks: ['jasmine'],

        // List of files/patterns to load
        files: [
            // Dependencies
            'node_modules/d3/d3.js',
            'node_modules/lodash/lodash.js',

            // Test configuration
            'tests/unit/**/*.test.js',
            'tests/integration/**/*.test.js',
            'tests/benchmarks/**/*.benchmark.js',

            // Test fixtures
            { pattern: 'tests/fixtures/**/*.json', included: false, served: true },
            { pattern: 'src/app/data/**/*.json', included: false, served: true }
        ],

        // Preprocess files
        preprocessors: {
            'tests/**/*.js': ['webpack'],
            'src/**/*.js': ['webpack', 'coverage']
        },

        // Test reporters
        reporters: ['spec', 'coverage', 'junit'],

        // Coverage reporter configuration
        coverageReporter: {
            type: 'html',
            dir: 'coverage/',
            subdir: function(browser) {
                return browser.toLowerCase().split(/[ /-]/)[0];
            },
            reporters: [
                { type: 'html' },
                { type: 'text-summary' },
                { type: 'lcovonly', subdir: '.', file: 'lcov.info' },
                { type: 'json', subdir: '.', file: 'coverage.json' }
            ],
            check: {
                global: {
                    statements: 80,
                    branches: 75,
                    functions: 80,
                    lines: 80
                }
            }
        },

        // JUnit reporter for CI
        junitReporter: {
            outputDir: 'test-results',
            outputFile: 'junit.xml',
            suite: 'WebVOWL Tests',
            useBrowserName: false
        },

        // Webpack configuration
        webpack: {
            resolve: {
                extensions: ['', '.js']
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            devtool: 'inline-source-map'
        },

        // Webpack middleware
        webpackMiddleware: {
            noInfo: true,
            stats: 'errors-only'
        },

        // Browsers to test
        browsers: ['PhantomJS'],

        // Browser configurations
        customLaunchers: {
            ChromeHeadlessCI: {
                base: 'ChromeHeadless',
                flags: [
                    '--no-sandbox',
                    '--disable-gpu',
                    '--disable-dev-shm-usage'
                ]
            },
            FirefoxHeadlessCI: {
                base: 'Firefox',
                flags: ['-headless']
            }
        },

        // Plugins
        plugins: [
            require('karma-jasmine'),
            require('karma-phantomjs-launcher'),
            require('karma-chrome-launcher'),
            require('karma-firefox-launcher'),
            require('karma-spec-reporter'),
            require('karma-coverage'),
            require('karma-junit-reporter'),
            require('karma-webpack')
        ],

        // Continuous integration mode
        singleRun: true,

        // Concurrency level (how many browsers at once)
        concurrency: Infinity,

        // Browser disconnect settings
        browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 3,
        browserNoActivityTimeout: 60000,

        // Capture timeout
        captureTimeout: 210000,

        // Log level
        logLevel: config.LOG_INFO,

        // Enable colors in output
        colors: true,

        // Watch mode for development
        autoWatch: false
    });
};
