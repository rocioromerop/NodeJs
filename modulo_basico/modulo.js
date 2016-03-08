'use strict';

var objeto = {
	vuela: function(){
		console.log('volando voy');
	}
};

module.exports = {
	objeto1: objeto,
	objeto2: {
		nada: function(){console.log('nadando voy');}
	}

}; //caracteriza esto como un módulo