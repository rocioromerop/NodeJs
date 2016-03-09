"use strict";

// AQUÍ ESTARÁN MIS DATOS


var users = [{name : 'Smith', age: 30}, 
			{name: 'Jones', age: 22}
];

var user = {
	getUsers: function(cb){ //cb=callback
		//imaginamos que lee un fichero
		var usuariosLeidos = users;
		cb(null, users); //no return sino callback, estoy en asincrono
		//return users;
	}
};

module.exports = user; 
