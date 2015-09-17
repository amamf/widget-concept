'use strict';

/**
 * @ngdoc overview
 * @name widgetConceptApp
 * @description
 * # widgetConceptApp
 *
 * Main module of the application.
 */
angular
  .module('widgetConceptApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
