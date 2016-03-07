'use strict'

var async=require('async');

console.log('empiezo');

var escribeTras2Segundos = function(texto, callbackNuestro){
	setTimeout(function(){
		console.log(texto);
		callbackNuestro();
	}, 500); //Cambiamos a 500ms para que sea más rápido, pero para que sean 2 segundos son 2000
};

async.eachSeries([1,2,3,4,5], function cada(item, siguiente){
	escribeTras2Segundos(item, function(){
		var res = item % 2 ? null : 'error';
		siguiente(res); //Si aqui hay un error, se va a la función finalizadora y termina. Si tiene valor null, sigue con el siguiente elemento.
	});
	}, function fin(err){
		console.log("fin", err);
	}
);

