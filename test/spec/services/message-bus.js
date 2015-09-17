'use strict';

describe('Service: messageBus', function () {

  // load the service's module
  beforeEach(module('widgetConceptApp'));

  // instantiate service
  var messageBus;
  beforeEach(inject(function (_messageBus_) {
    messageBus = _messageBus_;
  }));

  it('should do something', function () {
    expect(!!messageBus).toBe(true);
  });

});
