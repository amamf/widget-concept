'use strict';

/**
 * @ngdoc service
 * @name widgetConceptApp.regionsRepository
 * @description
 * # regionsRepository
 * Factory in the widgetConceptApp.
 */
angular.module('widgetConceptApp.data')
  .factory('regionsRepository', function ($q) {
    return {
      getRegions: function () {
        return $q.when(['USA', 'Belarus']);
      }
    };
  });
