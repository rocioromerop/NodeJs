"use strict"

var creaAgente= function(_edad){
	var edad = _edad;
	return { //Devuelve un objeto con funciones	
		nombre: 'pepe',
		dimeEdad: function(){
			console.log('yo tengo ' + edad);
			return edad;
		}
	}
};

var agente = creaAgente(30);
var smith = creaAgente(22);

console.log(agente.dimeEdad(), smith.dimeEdad()); 

setTimeout(agente.dimeEdad, 5000);
setTimeout(smith.dimeEdad, 5000);

console.log(agente.nombre);


