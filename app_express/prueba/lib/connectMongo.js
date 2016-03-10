'use strict';

var client = require('mongodb').MongoClient;
var dbConnection={
	db:null
};

client.connect('mongodb://localhost:27017/usoNode',
function(err, conn) { //el objeto db es al que le pido cosas, tenemos que darselo a un modelo que es lo que va a trabajar con la base de datos.
 if (err) {
 	console.error("Cant connect to database");
 }
 console.log("connected to", conn.databaseName, 'on', conn.options.url);
 dbConnection.db=conn;
});

module.exports=dbConnection;