'use strict';

/**
 * @ngdoc directive
 * @name widgetConceptApp.directive:xfNewsWidget
 * @description
 * # xfNewsWidget
 */
angular.module('widgetConceptApp.widgets')
  .directive('xfNewsWidget', function () {

    return {
      templateUrl: '/views/common/xf-news-widget.html',
      restrict: 'E',
      scope: {
        options: '=xfOptions'
      },
      controller: function($scope) {
        var options = $scope.options,
            dataSource = options.data && options.data.source,
            events = options.events;

        validateOptions();

        loadData();

        $scope.$watch('options.data.params', function(newValue, oldValue) {
          if(newValue === oldValue) { return; }
          loadData();
        });

        function loadData() {
          onDataLoading();

          dataSource.getNews(options.data.params).then(function(news) {
            $scope.news = news;
          }).finally(function() {
            onDataLoaded();
          });
        }

        function validateOptions() {
          if(!dataSource) {
            throw new Error('xfNewsWidget: data source should be defined');
          }

          if(!angular.isFunction(dataSource.getNews)) {
            throw new Error('xfNewsWidget: data source should implement getNews method');
          }
        }

        function onDataLoading() {
          if(angular.isFunction(events.onDataLoading)) {
            events.onDataLoading();
          }
        }

        function onDataLoaded() {
          if(angular.isFunction(events.onDataLoaded)) {
            events.onDataLoaded();
          }
        }
      }
    };
  });
