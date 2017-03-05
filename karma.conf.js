var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

var cssLoaderQuery = {
  module: true,
  importLoaders: 2,
  sourceMap: false,
  localIdentName: '[path]_[local]',
};

var lessSassLoaderQuery = {
  outputStyle: 'expanded',
  sourceMap: false,
};

var styleLoaders = [
  'isomorphic-style-loader',
  // 'css-loader?' + JSON.stringify(cssLoaderQuery),
  'css?importLoaders=2&module&localIdentName=[path][local]&-autoprefixer&-minimize',
  'sass-loader?' + JSON.stringify(lessSassLoaderQuery),
];


module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'], // run phantom
    singleRun: true, // just run once by default
    frameworks: ['mocha'], // use the mocha test framework
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/babel-polyfill/dist/polyfill.js',
      'tests.webpack.js', // just load this file
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
            { test: /\.js?$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.scss$/, loaders: styleLoaders },
            { test: /\.css$/, loaders: styleLoaders },
        ],
        postLoaders: [{
           // delays coverage til after tests are run, fixing transpiled source coverage error
          test: /\.js$/,
          exclude: /(test|node_modules|bower_components)\//,
          loader: 'istanbul-instrumenter'
        }],
      },
      externals: {
        jsdom: 'window',
        cheerio: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true,
        'text-encoding': 'window',
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
