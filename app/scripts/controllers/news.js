'use strict';

/**
 * @ngdoc function
 * @name widgetConceptApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the widgetConceptApp
 */
angular.module('widgetConceptApp')
  .controller('NewsCtrl', function ($scope, messageBus, newsRepository) {
    $scope.newsWidget = {
      options: {
        showHeader: true,
        header: 'Hot News'
      },
      dataProvider: newsRepository,
      dataProviderOptions: {
        methods: {
          get: {
            name: 'getNews',
            params: {  }
          }
        }
      }
    };

    $scope.onNewsLoading = function() {
      messageBus.publish('news.loading');
    };

    $scope.onNewsLoaded = function() {
      messageBus.publish('news.loaded');
    };

  });
