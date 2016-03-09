var express = require('express');
var router = express.Router();
var user = require('../models/userModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/form', function(req, res, next) {
  res.render('user_form', {users : user.getUsers()}); // le paso un objeto con una propiedad que dentro tiene mi objeto que le paso 
});


module.exports = router;
