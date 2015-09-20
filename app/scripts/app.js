'use strict';

define(['services/route-resolver'], function () {

  var app = angular.module('widgetConceptApp', [
    'ngRoute',
    'ngSanitize',
    'widgetConceptApp.routing'
  ]);

  app.config(function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

    app.register = {
      controller: $controllerProvider.register,
      directive: $compileProvider.directive,
      filter: $filterProvider.register,
      factory: $provide.factory,
      service: $provide.service
    };

    routeResolverProvider.routeConfig.setBaseDirectories('/views/', '/scripts/controllers/');

    var route = routeResolverProvider.route;

    $routeProvider
      .when('/', route.resolve('main'))
      .when('/news', route.resolve('news', '', 'news'))
      .otherwise({
        redirectTo: '/'
      });
  });

  return app;
});
