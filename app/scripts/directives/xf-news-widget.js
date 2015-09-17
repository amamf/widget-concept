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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the xfNewsWidget directive');
      }
    };
  });
