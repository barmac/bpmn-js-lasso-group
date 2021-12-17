// configures browsers to run test against
// any of [ 'ChromeHeadless', 'Chrome', 'Firefox' ]
const browsers = (process.env.TEST_BROWSERS || 'ChromeHeadless').split(',');

module.exports = function(karma) {
  karma.set({

    frameworks: [
      'webpack',
      'mocha'
    ],

    files: [
      'test/spec/**/*Spec.js'
    ],

    reporters: [ 'progress' ],

    preprocessors: {
      'test/spec/**/*Spec.js': [ 'webpack' ]
    },

    browsers: browsers,

    browserNoActivityTimeout: 30000,

    singleRun: true,
    autoWatch: false,

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(bpmn|css)$/,
            use: 'raw-loader'
          }
        ]
      },
      resolve: {
        modules: [
          'node_modules'
        ]
      },
      devtool: 'eval-source-map'
    }
  });
};
