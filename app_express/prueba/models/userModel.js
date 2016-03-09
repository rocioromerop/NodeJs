"use strict";

// AQUÍ ESTARÁN MIS DATOS


var users = [{name : 'Smith', age: 30}, 
			{name: 'Jones', age: 22}
];

var user = {
	getUsers: function(){
		return users;
	}
};

module.exports = user; 
