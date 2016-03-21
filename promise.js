	"use strict";

var sleep = function(ms){

	var ms = 1000; //si no me dan ms, pon 1000

	var promesa = new Promise (function (resolve, reject){

		setTimeout(function(){
			if(ms % 2 !== 0){ //equivale al if(err)
				reject(new Error("Fatal"));
				return;
			}
			resolve({name: 'Jones'});
			return;
		}, ms);

	});

	return promesa;

};

var promesa2 = sleep(1000);

console.log(promesa2);

promesa2.then(function(datos){
	console.log('promesa terminada', datos);
}).catch(function(err){
	console.error("ERROR", err);
});