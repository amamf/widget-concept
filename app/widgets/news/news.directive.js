'use strict';

define(['app', 'css!widgets/news/news'], function(app) {
  app.register.directive('xfNewsWidget', function () {
    return {
      templateUrl: 'widgets/news/news.html',
      restrict: 'E',
      scope: {
        options: '=xfOptions'
      },
      link: function(scope) {
        var vm = scope.vm = angular.extend({}, scope); // we are emulating the approach that implies using controllerAs syntax

        var options = vm.options;
        var dataSource = options.data && options.data.source;
        var events = options.events;

        validateOptions();
        loadData();

        scope.$watch('vm.options.data.params', function(newValue, oldValue) {
          if(newValue === oldValue) { return; }
          loadData();
        }, true);

        function loadData() {
          onDataLoading();

          dataSource.getNews(options.data.params).then(function(news) {
            vm.news = news;
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

        // an example of how we could implement event model for the widget
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
});
