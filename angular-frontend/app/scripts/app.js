'use strict';

angular
  .module('chatApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io'
  ])
  .value('nickName', 'anonymous');
