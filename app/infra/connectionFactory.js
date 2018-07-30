/*

*/
var mysql = require('mysql');

function createDBConnection(){

	return conn = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'root',
	    database: 'alura'
	});

}
//wrapper
//função que envolve outra função
module.exports = function(){
	return createDBConnection;
}
