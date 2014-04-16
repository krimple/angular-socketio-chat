'use strict';

angular.module('appApp')
  .controller('NickCtrl', function ($scope, nickName) {
    $scope.nickName = nickName;
  });
