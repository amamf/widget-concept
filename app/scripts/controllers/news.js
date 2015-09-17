'use strict';

/**
 * @ngdoc function
 * @name widgetConceptApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the widgetConceptApp
 */
angular.module('widgetConceptApp')
  .controller('NewsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
