'use strict';

describe('Service: newsRepository', function () {

  // load the service's module
  beforeEach(module('widgetConceptApp'));

  // instantiate service
  var newsRepository;
  beforeEach(inject(function (_newsRepository_) {
    newsRepository = _newsRepository_;
  }));

  it('should do something', function () {
    expect(!!newsRepository).toBe(true);
  });

});
