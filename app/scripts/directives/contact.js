'use strict';

/**
 * @ngdoc directive
 * @name angularDemoAppApp.directive:contact
 * @description
 * # contact
 */
angular.module('angularDemoAppApp')
  .directive('contact', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the contact directive');
      }
    };
  });
