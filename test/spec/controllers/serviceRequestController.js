'use strict';

describe('Controller: ServiceRequestControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('hackerlabAppApp'));

  var ServiceRequestControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceRequestControllerCtrl = $controller('ServiceRequestControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
