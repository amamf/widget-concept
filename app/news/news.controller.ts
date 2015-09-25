import app = require('app');
import observer = require('common/services/observer');
import region = require('common/models/region');
import newsListController = require('news/news-list.controller');
import regionController = require('news/region.controller');

class NewsController {
  region: string;

  static $inject = ['observer', 'regionModel'];
  constructor(observer: observer.IObserver, regionModel: region.IRegionModel) {
    this.region = regionModel.region;

    observer.subscribe(function() {
      return regionModel.region;
    }, function(region) {
      this.region = region;
    }.bind(this))
  }
}

app.controller('NewsController', NewsController);
