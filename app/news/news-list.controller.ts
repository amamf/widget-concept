import app = require('app');
import observer = require('common/services/observer');
import region = require('common/models/region');
import messageBus = require('common/services/message-bus');
import newsRepository = require('common/services/news-repository');
import newsDirective = require('widgets/news/news.directive');

class NewsListController {
  constructor(parameters) {
    
  }
}

app.controller('NewsListController', function (observer, messageBus, regionModel, newsRepository) {
  var newsWidgetOptions = this.newsWidgetOptions = {
    header: {
      display: true,
      text: 'Hot News'
    },
    data: {
      source: newsRepository,
      params: {
        skip: 0,
        take: 3,
        region: regionModel.region
      }
    },
    events: {
      onDataLoading: function() {
        messageBus.publish('news.loading');
      },
      onDataLoaded: function() {
        messageBus.publish('news.loaded');
      }
    }
  };

  observer.subscribe(function() {
    return regionModel.region;
  }, function(region) {
    newsWidgetOptions.data.params.region = region;
  });
});