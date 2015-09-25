'use strict';

import app = require('app');

export interface IRegionModel {
  region: string;
}

app.factory('regionModel', function () {
  var regionModel: IRegionModel = {
    region: 'USA'
  }; 
  return regionModel;
});

