'use strict';

describe('Service: observer', function () {

  // load the service's module
  beforeEach(module('widgetConceptApp'));

  // instantiate service
  var observer;
  beforeEach(inject(function (_observer_) {
    observer = _observer_;
  }));

  it('should do something', function () {
    expect(!!observer).toBe(true);
  });

});
