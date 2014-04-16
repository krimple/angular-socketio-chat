'use strict';

describe('Controller: SocketCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var SocketCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SocketCtrl = $controller('SocketCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
