"use strict";

var express = require('express');
var router = express.Router(); //vacío

router.get('/', function(req, res){ //function es el callback
	//http://localhost:3000/admin/?hola=55
	console.log(req.query);
	res.send('Hola Express!');
});

router.get('/:id([0-9]+)', function(req, res){ //function es el callback
	//http://localhost:3000/admin/5
	console.log(req.params, 'el id es ', req.params.id);
	res.send('Hola Express!');
});

router.get('/:id([0-9]+)/piso/:piso(A|B|C)', function(req, res){ //function es el callback
	//http://localhost:3000/admin/5
	console.log(req.params, 'el id es ', req.params.id, 'el piso es: ', req.params.piso);
	res.send('Hola Express!');
});

router.get('/:id', function(req, res){ //function es el callback
	//http://localhost:3000/admin/5
	console.log(req.params);
	res.send('Hola Express!');
});

router.post('/', function(req, res){
	// post a //http://localhost:3000/admin/
	console.log(req.body);
	res.send('body recogido');
});


module.exports = router; //Aquí lo exporto
