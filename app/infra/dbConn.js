/*
	
*/
var mysql = require('mysql');

module.exports = function(){

	return conn = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: '',
	    database: 'alura'
	});
	
}