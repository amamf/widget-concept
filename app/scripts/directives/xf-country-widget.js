'use strict';

/**
 * @ngdoc directive
 * @name widgetConceptApp.directive:xfCountryWidget
 * @description
 * # xfCountryWidget
 */
angular.module('widgetConceptApp.widgets')
  .directive('xfCountryWidget', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the xfCountryWidget directive');
      }
    };
  });
