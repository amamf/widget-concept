'use strict';

define([
  'app',
  'models/region',
  'services/regions-repository',
  'directives/country-widget'
], function(app) {
  app.register.controller('RegionCtrl', function (regionModel, regionsRepository) {

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
