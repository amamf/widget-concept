'use strict';

/**
 * @ngdoc function
 * @name widgetConceptApp.controller:RegionCtrl
 * @description
 * # RegionCtrl
 * Controller of the widgetConceptApp
 */
angular.module('widgetConceptApp')
  .controller('RegionCtrl', function (messageBus, regionsRepository) {
    var selectedRegion;

    this.selectedRegion = function(region) {
      if(!arguments.length) { return selectedRegion; }

      if(region !== selectedRegion) {
        selectedRegion = region;
        messageBus.publish('region.changed', region);
      }
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
