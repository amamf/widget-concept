'use strict';

define([
  'app',
  'common/services/observer',
  'common/models/region',
  'news/news-list.controller',
  'news/region.controller'
], function(app) {
  app.register.controller('NewsController', function (observer, regionModel) {
    var vm = this;

    vm.region = regionModel.region;

    observer.subscribe(function() {
      return regionModel.region;
    }, function(region) {
      vm.region = region;
    });
  });
});
