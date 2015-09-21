'use strict';

define([
  'app',
  'common/models/region',
  'common/services/regions-repository',
  'widgets/country/country.directive'
], function(app) {
  app.register.controller('RegionController', function (regionModel, regionsRepository) {

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
});
