'use strict';

function conArroz(plato){
	return new Promise(function(resolve, reject){
		//suponemos que nunca falla
		resolve(plato + ' arroz');
	})
}


function conAjo(plato){
	return new Promise(function(resolve, reject){
		//suponemos que nunca falla
		resolve(plato + ' ajo');
	})
}

function conSal(plato){
	return new Promise(function(resolve, reject){
		//suponemos que nunca falla
		resolve(plato + ' sal');
	})
}

function con(plato, ingrediente){
	return new Promise(function(resolve, reject){
		//suponemos que nunca falla
		resolve(plato + ' ' + ingrediente);
	})
}

var paella = 'paella con';

conArroz(paella)
	.then(conAjo) //con lo datos que resuelve la primera
	.then(function(plato){
		console.log("TRACE", plato);
		return con(plato, 'pimiento'); //añadiría sal, devuelve una promesa
	})
	.then(conSal) //añadiría sal
	.then(function(plato){
		console.log(plato);
	})
	.then(function(algo){
		console.log('algo: ', algo);
	})
	.catch(function(err){
		console.log("ERROR", err);
	});