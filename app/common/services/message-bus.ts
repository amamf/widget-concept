///<reference path="../../../typings/angularjs/angular.d.ts" />

import app = require('app');

export interface IMessageBus {
  subscribe(messageName: string, callback: ()=>any);
  publish(messageName: string, messageData: any);
}

app.factory('messageBus', function ($rootScope: ng.IScope) {
  var messageBus: IMessageBus = {
    subscribe: function (messageName, callback) {
      return $rootScope.$on(messageName, callback);
    },
    publish: function(messageName, messageData) {
      $rootScope.$emit(messageName, messageData);
    }
  }; 
  return messageBus;
});