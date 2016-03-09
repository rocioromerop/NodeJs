var express = require('express');
var router = express.Router();
var users = require('../models/userModel');

console.log('users: ', users); // para ver que lo hago bien

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/form', function(req, res, next) {
  res.render('user_form', {users : users}); // le paso un objeto con una propiedad que dentro tiene mi objeto que le paso 
});


module.exports = router;
