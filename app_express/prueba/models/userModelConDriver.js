"use strict";

// AQUÍ ESTARÁN MIS DATOS

var conn = require('../lib/connectMongo');

var conn

var user = {
	getUsers: function(cb){ //cb=callback
		//imaginamos que lee un fichero
		//var usuariosLeidos = users;

		 conn.db.collection('agentes').find({}).toArray(function(err, usuariosLeidos) {
			 if (err) {
			 	cb(err);
			 	return;
			 }
			 console.dir(usuariosLeidos);
			 cb(null, usuariosLeidos); //no return sino callback, estoy en asincrono
			 return;
		//return users;
		 });
	}
};

module.exports = user; 
