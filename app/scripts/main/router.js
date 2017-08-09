'use strict';

/**
 * @ngdoc overview
 * @name angularDemoAppApp
 * @description
 * # angularDemoAppApp
 *
 * Main module of the application.
 */
angular.module('storeDemoApp', ['$routeProvider'])
  .config(function ($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '../../views/login/login.html',
      controller: 'loginController'
    }).
    when('/edit', {
      templateUrl : '../../views/login/login.html',
      controller: 'loginController'
    }).
    otherwise({
      redirectTo: '/'
    });
  });
