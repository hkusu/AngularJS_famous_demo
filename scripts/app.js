'use strict';

angular.module('famousAngularTest2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'famous.angular'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
