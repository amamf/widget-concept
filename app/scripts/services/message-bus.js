'use strict';

/**
 * @ngdoc service
 * @name widgetConceptApp.messageBus
 * @description
 * # messageBus
 * Factory in the widgetConceptApp.
 */
angular.module('widgetConceptApp.communication')
  .factory('messageBus', function ($rootScope) {
    return {
      subscribe: function (messageName, callback) {
        return $rootScope.$on(messageName, callback);
      },
      publish: function(messageName, messageData) {
        $rootScope.$emit(messageName, messageData);
      }
    };
  });
