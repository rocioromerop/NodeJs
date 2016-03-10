"use strict";

// AQUÍ ESTARÁN MIS DATOS

//Conectar con driver: var conn = require('../lib/connectMongo');

var conn = require('../lib/connectMongoose');

var mongoose=require('mongoose');

//Creo el esquema

var userSchema = mongoose.Schema({
	name: String,
	age: Number
});

// al esquema le metemos un estático
userSchema.statics.list = function(cb){
	// preparamos la query sin ejecutarla
	var query = User.find({});
	// añadimos más parámetros a la query
	query.sort('name');

	// se ejecuta la query:
	query.exec(function(err, rows){
		if (err){
			cb(err);
			return;
		}
		cb(null,rows);
		return;
	});

};

// Al modelo le metemos el esquema
var User = mongoose.model('User', userSchema);

// Métodos del modelo
var user = {
	getUsers: function(cb){ //cb=callback
		// con Mongoose
		User.find({}, function(err, datos){
			if(err){
				cb(err);
				return;
			}
			cb(null, datos);
			return;
		});
	}
};

module.exports = user; 
