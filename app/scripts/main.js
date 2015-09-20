'use strict';

require.config({
  baseUrl: 'scripts',
  urlArgs: 'v=1.0',
  waitSeconds: 200
});

require(
  [
    'app',
    'services/route-resolver',
    'services/message-bus',
    'services/observer'
  ],
  function () {
    angular.bootstrap(document, ['widgetConceptApp']);
  }
);
