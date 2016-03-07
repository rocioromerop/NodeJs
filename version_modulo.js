'use strict'


// cargar librería

function versionModulo(nombreModulo, callback){
	var path = "./node_modules/"+nombreModulo+"/package.json";

	var fs = require('fs');
	fs.readFile(path, {encoding: "utf8"}, function(err, data){
		if (err){
			console.log("ERROR!" + err);
			callback(err);
			return;
		} 

		var paquete = JSON.parse(data);

		var version = paquete['_nodeVersion'];

		callback(err, version);
	});
};


versionModulo('chanceg', function(err, str) {
	if (err) {
	 console.error('Hubo un error: ', err);
	 return;
	}
	console.log('La version del módulo es:', str);
});