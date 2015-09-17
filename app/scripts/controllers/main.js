'use strict';

/**
 * @ngdoc function
 * @name widgetConceptApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the widgetConceptApp
 */
angular.module('widgetConceptApp')
  .controller('MainCtrl', function (messageBus) {
    var vm = this;

    messageBus.subscribe('region.changed', function(e, region) {
       vm.region = region;
     });
  });
