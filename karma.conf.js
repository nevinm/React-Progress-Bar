var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'], // run phantom
    singleRun: true, // just run once by default
    frameworks: ['mocha'], // use the mocha test framework
    files: [
      'tests.webpack.js', // just load this file
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/babel-polyfill/dist/polyfill.js',
    ],
    plugins: ['karma-chrome-launcher', 'karma-chai', 'karma-mocha',
      'karma-sourcemap-loader', 'karma-webpack', 'karma-coverage',
      'karma-mocha-reporter', 'karma-phantomjs-launcher',
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
      // preprocess with webpack and our sourcemap loader
    },
    reporters: ['mocha', 'coverage'], // report results in this format
    webpack: { // kind of a copy of your webpack config
      devtool: 'inline-source-map', // just do inline source maps instead of the default
      module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
        ],
        postLoaders: [{
           // delays coverage til after tests are run, fixing transpiled source coverage error
          test: /\.js$/,
          exclude: /(test|node_modules|bower_components)\//,
          loader: 'istanbul-instrumenter' }],
      },
    },
    webpackServer: {
      noInfo: true, // please don't spam the console when running in karma!
    },
    coverageReporter: {
      type: 'html', // produces a html document after code is run
      dir: 'coverage/', // path to created html doc
    },
    colors: true,
  });
};
