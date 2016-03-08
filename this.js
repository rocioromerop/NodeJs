//"use strict";

// hacer un objeto con métodos
var persona = {
 name: "Luis",
 printName: function(){
 	console.log(this.name);
 }

};

var mascota = {
	name: "Tobi"
};

//llamarlo de forma normal:
persona.printName();

// llamarlo sin this

setTimeout(persona.printName.bind(persona), 1000); //poniendo .bind(persona), le decimos que use como this, el objeto persona

function saluda(func){
	func(); //en el modo estricto, aquí this será undefined, etnocnes al buscar undefined.name, crashea el programa.
	//si no usamos el modo estricto, el contexto será el global, y como no tiene contextoGlobal.name, no crashea pero el valor es undefined
}

saluda(persona.printName);

//para usar métodos de otros objetos:

persona.printName.call(mascota);

