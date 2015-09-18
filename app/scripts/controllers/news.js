'use strict';

/**
 * @ngdoc function
 * @name widgetConceptApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the widgetConceptApp
 */
angular.module('widgetConceptApp.news')
  .controller('NewsCtrl', function ($scope, messageBus, newsRepository) {
    var newsWidgetOptions = this.newsWidgetOptions = {
      header: {
        display: true,
        text: 'Hot News'
      },
      data: {
        source: newsRepository,
        params: {
          skip: 0,
          take: 3
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

    messageBus.subscribe('region.changed', function(e, region) {
      newsWidgetOptions.data.params.region = region;
    });
  });
