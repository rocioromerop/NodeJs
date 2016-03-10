var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Modelos
require('./models/userModel'); //quito el var user = require('...'); porque no me hace falta, sólo hago que empiece mongoose, la variable user no la voy a usar

// Rutas de web
var routes = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin'); //aquí lo que hago es cargarlo //en principio si no exporto nada, no tiene nada

//Rutas de API V1
var apiUsers = require('./routes/api/v1/users');

var app = express();

app.use(function(req, res, next){
  //console.log(req.query);
  var algo = req.query.algo || "";
  req.algo=algo;
  //res.send('soy el primero!');
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //Para archivos estáticos
console.log("dir name: " + __dirname);


// Rutas de web
app.use('/', routes);
app.use('/users', users);
app.use('/admin', admin); //donde /nombre puedo poner lo que quiera, no tiene que ser '/'

//Rutas de API V1
app.use('/api/v1/user', apiUsers); //registro de la ruta


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
