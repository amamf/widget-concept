///<reference path="../typings/angularjs/angular.d.ts" />

import routeResolver = require('common/services/route-resolver');

var app = angular.module('widgetConceptApp', [
  'ngRoute',
  'ngSanitize',
  'widgetConceptApp.services.routing'
]);

interface IRegisterFunc {
  (name: string, component: any) : void
}

interface IRegistrator {
  controller: IRegisterFunc;
  directive: IRegisterFunc;
  filter: IRegisterFunc;
  factory: IRegisterFunc;
  service: IRegisterFunc;
}

var registrator: IRegistrator;

app.config(function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

  registrator = {
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

export = registrator;



