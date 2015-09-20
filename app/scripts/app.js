'use strict';

define(['services/route-resolver'], function () {

  //  angular.module('widgetConceptApp.common', []);
//  angular.module('widgetConceptApp.communication', []);
//  angular.module('widgetConceptApp.models', []);
//  angular.module('widgetConceptApp.widgets', []);
//  angular.module('widgetConceptApp.data', []);
//  angular.module('widgetConceptApp.news', [
//    'widgetConceptApp.data',
//    'widgetConceptApp.communication',
//    'widgetConceptApp.models',
//    'widgetConceptApp.common'
//  ]);

  var app = angular.module('widgetConceptApp', [
      'ngRoute',
      'ngSanitize',
      'widgetConceptApp.routing'
//      'widgetConceptApp.communication'
//      'widgetConceptApp.widgets',
//      'widgetConceptApp.data',
//      'widgetConceptApp.news'
    ]);

  app.config(function ($routeProvider, routeResolverProvider, $controllerProvider,
                      $compileProvider, $filterProvider, $provide) {

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
        .when('/news', route.resolve('news'))
        .otherwise({
          redirectTo: '/'
        });
    });

  return app;
});
