'use strict';

describe('Service: newsProvider', function () {

  // load the service's module
  beforeEach(module('widgetConceptApp'));

  // instantiate service
  var newsProvider;
  beforeEach(inject(function (_newsProvider_) {
    newsProvider = _newsProvider_;
  }));

  it('should do something', function () {
    expect(!!newsProvider).toBe(true);
  });

});
