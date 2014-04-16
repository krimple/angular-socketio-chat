'use strict';

// define globals
var express = require('express');
var io = require('socket.io');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = io.listen(server);
server.listen(3000);
io.set('log level', 1000);

// define local middleware
var path = require('path'),
  favicon = require('static-favicon'),
  logger = require('morgan'),
//users = require('./routes/users'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser');
require('./routes/api')(app),
  require('./sockets/base')(io);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/users', users);
//app.use('/api', api);

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
