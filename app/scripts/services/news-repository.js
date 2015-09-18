'use strict';

/**
 * @ngdoc service
 * @name widgetConceptApp.newsRepository
 * @description
 * # newsRepository
 * Factory in the widgetConceptApp.
 */
angular.module('widgetConceptApp.data')
  .factory('newsRepository', function ($q) {
    var allNews = [
      { title: 'Title A', description: 'Description A', region: 'USA' },
      { title: 'Title A', description: 'Description A', region: 'USA' },
      { title: 'Title A', description: 'Description A', region: 'USA' },
      { title: 'Title A', description: 'Description A', region: 'USA' },
      { title: 'Title A', description: 'Description A', region: 'USA' },
      { title: 'Title A', description: 'Description A', region: 'USA' },
      { title: 'Title A', description: 'Description A', region: 'Belarus' },
      { title: 'Title A', description: 'Description A', region: 'Belarus' },
      { title: 'Title A', description: 'Description A', region: 'Belarus' },
      { title: 'Title A', description: 'Description A', region: 'Belarus' },
      { title: 'Title A', description: 'Description A', region: 'Belarus' },
      { title: 'Title A', description: 'Description A', region: 'Belarus' },
    ];

    return {
      getNews: function (params) {
        params = params || params;

        var news = allNews;

        if(angular.isDefined(params.region)) {
          news = _.filter(allNews, { region: params.region });
        }

        if(angular.isDefined(params.skip) && angular.isDefined(params.take)) {
          news = news.slice(params.skip, params.skip + params.take);
        }

        return $q.when(news);
      }
    };
  });
