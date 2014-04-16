'use strict';
angular.module('appApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]).value('nickName', 'anonymous');
'use strict';
angular.module('appApp').controller('MainCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
'use strict';
angular.module('appApp').controller('SocketCtrl', [
  '$log',
  '$scope',
  'chatSocket',
  'messageFormatter',
  'nickName',
  function ($log, $scope, chatSocket, messageFormatter, nickName) {
    $scope.nickName = nickName;
    $scope.messageLog = 'Ready to chat!';
    $scope.sendMessage = function () {
      var match = $scope.message.match('^/nick (.*)');
      if (angular.isDefined(match) && angular.isArray(match) && match.length === 2) {
        var oldNick = nickName;
        nickName = match[1];
        $scope.message = '';
        $scope.messageLog = messageFormatter(new Date(), nickName, 'nickname changed - from ' + oldNick + ' to ' + nickName + '!') + $scope.messageLog;
        $scope.nickName = nickName;
      }
      $log.debug('sending message', $scope.message);
      chatSocket.emit('message', nickName, $scope.message);
      $scope.message = '';
    };
    $scope.$on('socket:broadcast', function (event, data) {
      $log.debug('got a message', event.name);
      if (!data.payload) {
        $log.error('invalid message', 'event', event, 'data', JSON.stringify(data));
        return;
      }
      $scope.$apply(function () {
        $scope.messageLog = messageFormatter(new Date(), data.source, data.payload) + $scope.messageLog;
        $scope.message = '';
      });
    });
  }
]);
'use strict';
angular.module('appApp').factory('chatSocket', [
  'socketFactory',
  function (socketFactory) {
    var socket = socketFactory();
    socket.forward('broadcast');
    return socket;
  }
]);
'use strict';
angular.module('appApp').controller('NickCtrl', [
  '$scope',
  'nickName',
  function ($scope, nickName) {
    $scope.nickName = nickName;
  }
]);
'use strict';
angular.module('appApp').value('messageFormatter', function (date, nick, message) {
  return date.toLocaleTimeString() + ' - ' + nick + ' - ' + message + '\n';
});