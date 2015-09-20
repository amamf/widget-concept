'use strict';

define(['app'], function(app) {
  app.register.factory('regionsRepository', function ($q) {
    return {
      getRegions: function () {
        return $q.when(['USA', 'Belarus']);
      }
    };
  });
});
