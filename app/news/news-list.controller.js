'use strict';

define([
  'app',
  'common/models/region',
  'common/services/observer',
  'common/services/message-bus',
  'common/services/news-repository',
  'widgets/news/news.directive'
], function(app) {
  app.register.controller('NewsListController', function (observer, messageBus, regionModel, newsRepository) {
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
});
