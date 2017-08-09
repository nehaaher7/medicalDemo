module.exports = function(config) {
  config.set({

    basePath: 'app',

    files: [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../bower_components/angular-route/angular-route.min.js',
      'app.js',
      'views/**/**/*.*',
      'views/modules/bill/*.js',
     '../test/*.*'
    ],

    autoWatch: true,

    frameworks: ['mocha', 'chai', 'sinon'],//['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
     // 'karma-jasmine',
      'karma-coverage',
      'karma-junit-reporter'
    ],
    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'views/modules/*/*.js': ['coverage'],
      'test/testFixture.html' : ['html2js']
    },
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  });
};
