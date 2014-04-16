'use strict';

describe('Controller: NickCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var NickCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NickCtrl = $controller('NickCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
