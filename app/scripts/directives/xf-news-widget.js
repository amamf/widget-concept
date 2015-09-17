'use strict';

/**
 * @ngdoc directive
 * @name widgetConceptApp.directive:xfNewsWidget
 * @description
 * # xfNewsWidget
 */
angular.module('widgetConceptApp.widgets')
  .directive('xfNewsWidget', function () {
    return {
      templateUrl: '/views/common/xf-news-widget.html',
      restrict: 'E',
      scope: {

      },
      controller: function($scope) {

      }
    };
  });
