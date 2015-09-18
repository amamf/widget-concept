'use strict';

/**
 * @ngdoc overview
 * @name widgetConceptApp
 * @description
 * # widgetConceptApp
 *
 * Main module of the application.
 */
angular.module('widgetConceptApp.common', []);
angular.module('widgetConceptApp.communication', []);
angular.module('widgetConceptApp.models', []);
angular.module('widgetConceptApp.widgets', []);
angular.module('widgetConceptApp.data', []);
angular.module('widgetConceptApp.news', [
  'widgetConceptApp.data',
  'widgetConceptApp.communication',
  'widgetConceptApp.models',
  'widgetConceptApp.common'
]);


angular
  .module('widgetConceptApp', [
    'ngRoute',
    'ngSanitize',
    'widgetConceptApp.communication',
    'widgetConceptApp.widgets',
    'widgetConceptApp.data',
    'widgetConceptApp.news'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/news', {
        templateUrl: 'views/news.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
