"use strict";

// hacer función constructora
var Persona = function (name){
	this.name = name;
}
// crear una instancia
var luis = new Persona("luis");
console.log(luis.name);
// cambiar su prototipo 

Persona.prototype.saluda = function(){
	console.log('Hola soy ' + this.name);
};

luis.saluda();

var pepe = new Persona('pepe');

pepe.saluda();

// --------------- HERENCIA ----------------

// hago otra función constructora que hereda de Persona

var Agente = function(name){ 
	// Ejecutamos constructor heredado
	// Lo mismo que llamar a super() en otros lenguajes
	Persona.call(this, name);
};


Agente.prototype = new Persona('soy un prototipo');


var smith = new Agente('smith');

smith.saluda();

console.log(Object.getPrototypeOf(smith));
console.log(smith instanceof Agente);
console.log(smith instanceof Persona	);
console.log(smith instanceof Object);
console.log(luis instanceof Agente);

// Ejercicio: Crear un objeto que herede de persona y también de un eventEmitter 
var EventEmitter = require('events').EventEmitter;
var extend = require('util')._extend;

Persona.prototype = extend(Persona.prototype, EventEmitter.prototype);

var p=new Persona('p');

p.on('prueba', function(data){
	console.log('ha saltado el evento', data);
});

p.emit('prueba', {payload: 55000})
process.on('exit', function(){
	p.emit('prueba', 'el programa termina!');
})