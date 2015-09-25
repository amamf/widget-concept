/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../../typings/requirejs/require.d.ts" />

export interface IRouteConfig {
  setBaseDirectories(viewsDirectory: string, controllersDirectory: string);
  getControllersDirectory() : string;
  getViewsDirectory() : string;
}

export interface IRouteResolver {
  resolve(baseName: string, path: string, controllerAs: string): angular.route.IRoute
}

var routeResolver = <ng.IServiceProviderFactory>function () {

  this.$get = function () {
    return this;
  };

  this.routeConfig = <IRouteConfig>function () {
    var viewsDirectory = '',
        controllersDirectory = '',

    setBaseDirectories = function (viewsDir: string, controllersDir: string) {
      viewsDirectory = viewsDir;
      controllersDirectory = controllersDir;
    },

    getViewsDirectory = function () {
      return viewsDirectory;
    },

    getControllersDirectory = function () {
      return controllersDirectory;
    };
      
    return {
      setBaseDirectories: setBaseDirectories,
      getControllersDirectory: getControllersDirectory,
      getViewsDirectory: getViewsDirectory
    };
  }();

  this.route = function (routeConfig: IRouteConfig) {
    var resolve = function (baseName: string, path: string, controllerAs: string) {
      if (!path) {
        path = '';
      }

      var route: angular.route.IRoute = {};
      route.templateUrl = routeConfig.getViewsDirectory() + path + baseName + '.html';
      route.controller = baseName.charAt(0).toUpperCase() + baseName.slice(1) + 'Controller';

      if (controllerAs)  {
        route.controllerAs = controllerAs;
      }

      route.resolve = {
        load: ['$q', '$rootScope', function ($q: ng.IQService, $rootScope: ng.IScope) {
          var dependencies = [routeConfig.getControllersDirectory() + path + baseName + '.controller.js'];
          return resolveDependencies($q, $rootScope, dependencies);
        }]
      };

      return route;
    },

    resolveDependencies = function ($q: ng.IQService, $rootScope: ng.IScope, dependencies: string[]) {
      var defer = $q.defer();
      require(dependencies, function () {
        defer.resolve();
        $rootScope.$apply();
      });

      return defer.promise;
    };

    return <IRouteResolver>{
      resolve: resolve
    };
  }(this.routeConfig);

};

var routingModule = angular.module('widgetConceptApp.services.routing', []);
//Must be a provider since it will be injected into module.config()
routingModule.provider('routeResolver', routeResolver);
