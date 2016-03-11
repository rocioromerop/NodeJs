'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 

var User = mongoose.model('User'); // pido el modelo
var basicAuth=require('basic-auth'); //nos devuelve una función en vez de un objeto

router.use(function(req, resp, next){ // middleware con el que controlaré la ocupación	
	var user = basicAuth(req);
	console.log(user);
	if(!user || user.name !== 'admin' || user.pass !== 'pass'){ // no nos han mandado usuario
		resp.set("WWW-Authenticate","Basic realm=Authorization Required"); //pone algo en la cabecera de la respuesta, SIN ENVIARLA AÚN
		resp.send(401); //401="necesita autorización"
		return;
	}
	next();
});

/* GET users listing. */

router.get('/', function(req, res) {

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