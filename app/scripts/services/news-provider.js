'use strict';

/**
 * @ngdoc service
 * @name widgetConceptApp.newsProvider
 * @description
 * # newsProvider
 * Factory in the widgetConceptApp.
 */
angular.module('widgetConceptApp.providers')
  .factory('newsProvider', function (newsRepository) {
    return {
      getNews: function (params) {
        params = params || {};

        return newsRepository.getNews(params.region, params.skip, params.take);
      }
    };
  });
