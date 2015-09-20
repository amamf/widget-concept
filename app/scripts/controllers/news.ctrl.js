'use strict';

define([
  'app',
  'services/observer',
  'models/region',
  'controllers/news-list.ctrl',
  'controllers/region.ctrl'
], function(app) {
  app.register.controller('NewsCtrl', function (observer, regionModel) {
    var vm = this;

    vm.region = regionModel.region;

    observer.subscribe(function() {
      return regionModel.region;
    }, function(region) {
      vm.region = region;
    });
  });
});
