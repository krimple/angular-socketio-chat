'use strict';

angular.module('appApp')
  .value('messageFormatter', function(date, nick, message) {
    return date.toLocaleTimeString() + ' - ' + 
           nick + ' - ' + 
           message + '\n';
    
  });
