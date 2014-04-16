'use strict';

describe('Service: messageFormatter', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var messageFormatter;
  beforeEach(inject(function (_messageFormatter_) {
    messageFormatter = _messageFormatter_;
  }));

  it('should do something', function () {
    expect(!!messageFormatter).toBe(true);
  });

});
