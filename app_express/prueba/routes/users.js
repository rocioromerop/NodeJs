'use strict';

var express = require('express');
var router = express.Router();
var user = require('../models/userModel');
var mongoose = require('mongoose'); 
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/form', function(req, res, next) {
	
	var User = mongoose.model('User'); // pido el modelo

	User.list(function(err, rows){
		if (err){ 
			res.render('error', err);
			return;
		}
		res.render('user_form', {users: rows});
		return;
	});

	//pido datos al modelo
	//user.getUsers(function(err, users){ 
		//cuando estén disponibles, los mando a la vista.
	//	res.render('user_form', {users : users}); 
	//});	
  //res.render('user_form', {users : user.getUsers()}); // le paso un objeto con una propiedad que dentro tiene mi objeto que le paso 
});

module.exports = router;
