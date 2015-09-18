'use strict';

/**
 * @ngdoc function
 * @name widgetConceptApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the widgetConceptApp
 */
angular.module('widgetConceptApp.news')
  .controller('NewsCtrl', function (observer, messageBus, regionModel, newsRepository) {
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
