
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/requirejs/require.d.ts" />

export var routeResolver = function () {

  this.$get = function () {
    return this;
  };

  this.routeConfig = function () {
    var viewsDirectory = '',
        controllersDirectory = '',

    setBaseDirectories = function (viewsDir, controllersDir) {
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

  this.route = function (routeConfig) {
    var resolve = function (baseName, path, controllerAs) {
      if (!path) {
        path = '';
      }

      var routeDef: ng.IRoute = {};
      routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseName + '.html';
      routeDef.controller = baseName.charAt(0).toUpperCase() + baseName.slice(1) + 'Controller';

      if (controllerAs)  {
        routeDef.controllerAs = controllerAs;
      }

      routeDef.resolve = {
        load: ['$q', '$rootScope', function ($q, $rootScope) {
          var dependencies = [routeConfig.getControllersDirectory() + path + baseName + '.controller.js'];
          return resolveDependencies($q, $rootScope, dependencies);
        }]
      };

      return routeDef;
    },

    resolveDependencies = function ($q, $rootScope, dependencies) {
      var defer = $q.defer();
      require(dependencies, function () {
        defer.resolve();
        $rootScope.$apply();
      });

      return defer.promise;
    };

    return {
      resolve: resolve
    };
  }(this.routeConfig);

};

var routingModule = angular.module('widgetConceptApp.services.routing', []);
//Must be a provider since it will be injected into module.config()
routingModule.provider('routeResolver', routeResolver);
