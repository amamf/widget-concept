'use strict';

require.config({
  baseUrl: '',
  urlArgs: 'v=1.0',
  waitSeconds: 200,
  map: {
    '*': {
      'css': 'bower_components/require-css/css' // or whatever the path to require-css is
    }
  }
});

require(
  [
    'app',
    'common/services/route-resolver',
    'common/services/message-bus',
    'common/services/observer'
  ],
  function () {
    angular.bootstrap(document, ['widgetConceptApp']);
  }
);
