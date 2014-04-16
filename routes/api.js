module.exports = function(app) {
    'use strict';

  /* GET users listing. */
  app.get('/api/test', function(req, res) {
    res.send([
      {
        a: 'b',
        c: 'd'
      }]);
  });
};


