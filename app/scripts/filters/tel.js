'use strict';

/**
 * @ngdoc filter
 * @name angularDemoAppApp.filter:tel
 * @function
 * @description
 * # tel
 * Filter in the angularDemoAppApp.
 */
angular.module('angularDemoAppApp')
  .filter('tel', function () {
    return function (input) {
      return 'tel filter: ' + input;
    };
  });
