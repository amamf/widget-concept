///<reference path="../typings/angularjs/angular.d.ts" />

import routeResolver = require('common/services/route-resolver');

export var app = angular.module('widgetConceptApp', [
  'ngRoute',
  'ngSanitize',
  'widgetConceptApp.services.routing'
]);

app.config(function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

  app.register = {
    controller: $controllerProvider.register,
    directive: $compileProvider.directive,
    filter: $filterProvider.register,
    factory: $provide.factory,
    service: $provide.service
  };

  var route = routeResolverProvider.route;

  $routeProvider
    .when('/', route.resolve('main', 'main/'))
    .when('/news', route.resolve('news', 'news/', 'vm'))
    .otherwise({
      redirectTo: '/'
    });
});



