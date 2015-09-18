'use strict';

/**
 * @ngdoc function
 * @name widgetConceptApp.controller:RegionCtrl
 * @description
 * # RegionCtrl
 * Controller of the widgetConceptApp
 */
angular.module('widgetConceptApp')
  .controller('RegionCtrl', function (regionModel, regionsRepository) {

    this.selectedRegion = function(region) {
      if(!arguments.length) { return regionModel.region; }
      regionModel.region = region;
    };

    this.countryWidgetOptions = {
      header: {
        display: true,
        text: 'Region'
      },
      label: {
        display: true,
        text: 'Choose a region'
      },
      data: {
        source: {
          getCountries: regionsRepository.getRegions
        }
      }
    };
  });
