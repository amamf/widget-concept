'use strict';

define(['app'], function(app) {
  app.factory('messageBus', function ($rootScope) {
    return {
      subscribe: function (messageName, callback) {
        return $rootScope.$on(messageName, callback);
      },
      publish: function(messageName, messageData) {
        $rootScope.$emit(messageName, messageData);
      }
    };
  });
});
