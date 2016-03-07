'use strict'

console.log('empiezo');

var escribeTras2Segundos = function(texto, callback){
	setTimeout(function(){
		console.log(texto);
		callback();
	}, 500); //Cambiamos a 500ms para que sea más rápido, pero para que sean 2 segundos son 2000
};

function serie(arr, fn){

	fun("texto" + i, function(){
		i--;
		if(i==0){
			console.log('fin');
			return;
		}
		serie(i, fun);
		
	});
}

serie([1,2,3,4,5], escribeTras2Segundos);
