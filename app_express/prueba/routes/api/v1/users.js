'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 

var User = mongoose.model('User'); // pido el modelo

var auth = require("../../../lib/auth");

//router.use(auth("admin", "pass2")); el router está sin autenticación

/* GET users listing. */

router.get('/', auth('admin', 'pass2'), function(req, res) { // Ahora sólo el get necesita autorización (Que es un middleware)

	var sort = req.query.sort || 'name';

	User.list(sort, function(err, rows){
		if(err){
			return res.json({result: false, err: err});
		}
		//Cuando estén disponibles, los mando en JSON
		res.json({result: true, rows: rows});
		return;
	});

	//pido datos al modelo
	//user.getUsers(function(err, users){ 
		//cuando estén disponibles, los mando a la vista.
	//	res.render('user_form', {users : users}); 
	//});	
  //res.render('user_form', {users : user.getUsers()}); // le paso un objeto con una propiedad que dentro tiene mi objeto que le paso 
});


// Añadir un user
router.post('/', function(req, res){
	//lo hacemos directamente con mongoose:
	var user = new User(req.body); // creamos el objeto en memoria, aún no está en la base de datos
	user.save(function(err, newRow){// lo guardamos en la base de datos
		//newRow contiene lo que se ha guardado, la confirmación
		if(err){
			res.json({result: false, err: err});
			return;
		}
		res.json({result: true, row: newRow});
		return;
	});	
});


// Actualizar un user
router.put('/:id', function(req, res){
	var options={};
	//var options={multi:true};  //para actualizar varios, usar multi
	User.update({ _id: req.params.id}, {$set: req.body }, options, function(err, data){
		if(err){
			return res.json({result: false, err: err});
		}

		res.json({result: true, row: data});

	});
});

module.exports = router;