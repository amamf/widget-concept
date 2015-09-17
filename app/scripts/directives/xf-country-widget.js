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
      templateUrl: '/views/common/xf-country-widget.html',
      restrict: 'E',
      scope: {

      },
      link: function postLink(scope, element, attrs) {
        element.text('this is the xfCountryWidget directive');
      }
    };
  });
