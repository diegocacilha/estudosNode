/*
	
*/
var mysql = require('mysql');

function createDBConnection(){

	return conn = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'ispj4lqzx22',
	    database: 'alura'
	});
	
}
//wrapper
//função que envolve outra função
module.exports = function(){
	return createDBConnection;
}