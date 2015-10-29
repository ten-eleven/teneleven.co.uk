var path = require("path");
var WebpackConfig = require('webpack-config');

// Karma configuration here
module.exports = function (config) {
  config.set({
    port: 3334,
    browsers: ['PhantomJS'],
    singleRun: true, //just run once by default
    frameworks: ['jasmine'], //use jasmine as framework
    files: [
      path.join(__dirname, 'node_modules', 'phantomjs-polyfill', 'bind-polyfill.js'), // To enable PhantomJS to render React components
      './src/components/**/test/unit/*.tsx' //test files
    ],
    preprocessors: {
      './src/components/**/test/unit/*.tsx': ['webpack'] //preprocess with webpack and sourcemap loader
    },
    reporters: ['progress'], //report results in this format
    webpack: new WebpackConfig().extend("webpack.test.config")
  });
};
