'use strict';

describe('Service: serviceRequestService', function () {

  // load the service's module
  beforeEach(module('hackerlabAppApp'));

  // instantiate service
  var serviceRequestService;
  beforeEach(inject(function (_serviceRequestService_) {
    serviceRequestService = _serviceRequestService_;
  }));

  it('should do something', function () {
    expect(!!serviceRequestService).toBe(true);
  });

});
