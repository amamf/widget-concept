'use strict';

define(['app'], function(app) {
  app.factory('observer', function ($rootScope) {
    return {
      subscribe: function (observableGetter, callback) {
        if(!angular.isFunction(observableGetter)) {
          throw new Error('observer: observableGetter should be a function');
        }

        if(!angular.isFunction(callback)) {
          throw new Error('observer: callback should be a function');
        }

        return $rootScope.$watch(observableGetter, function(newValue, oldValue) {
          if(!angular.equals(newValue, oldValue)) {
            callback(newValue, oldValue);
          }
        }, true);
      }
    };
  });
});
