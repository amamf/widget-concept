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
      templateUrl: 'views/common/xf-country-widget.html',
      restrict: 'E',
      scope: {
        options: '=xfOptions'
      },
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        //NOTE: we can't use controller, controllerAs and bindToController options here because we need to be able to use ngModel
        var vm = scope.vm = angular.extend({}, scope); // we are emulating the approach that implies using controllerAs syntax

        var options = vm.options;
        var dataSource = options.data && options.data.source;
        var selectedCountry;

        validateOptions();
        loadData();

        vm.selectedCountry = function(country) {
          if (!arguments.length) { return selectedCountry; }

          if(country !== selectedCountry) {
            selectedCountry = country;
            ngModel.$setViewValue(country);
          }
        };

        ngModel.$render = function() {
          selectedCountry = ngModel.$modelValue;
        };

        function loadData() {
          dataSource.getCountries().then(function(countries) {
            vm.countries = countries;
          });
        }

        function validateOptions() {
          if(!dataSource) {
            throw new Error('xfCountryWidget: data source should be defined');
          }

          if(!angular.isFunction(dataSource.getCountries)) {
            throw new Error('xfCountryWidget: data source should implement getCountries method');
          }
        }
      }
    };
  });

