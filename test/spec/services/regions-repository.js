'use strict';

describe('Service: regionsRepository', function () {

  // load the service's module
  beforeEach(module('widgetConceptApp'));

  // instantiate service
  var regionsRepository;
  beforeEach(inject(function (_regionsRepository_) {
    regionsRepository = _regionsRepository_;
  }));

  it('should do something', function () {
    expect(!!regionsRepository).toBe(true);
  });

});
