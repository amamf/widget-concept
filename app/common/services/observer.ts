///<reference path="../../../typings/angularjs/angular.d.ts" />

import app = require('app');

export interface IObserver {
  subscribe(observableGetter: () => any, callback: (newValue: any, oldValue: any) => void);
}

app.factory('observer', function ($rootScope: ng.IScope) {
  var observer: IObserver = {
    subscribe: function (observableGetter, callback) {
      return $rootScope.$watch(observableGetter, function(newValue, oldValue) {
        if(!angular.equals(newValue, oldValue)) {
          callback(newValue, oldValue);
        }
      }, true);
    }
  };

  return observer;
});
