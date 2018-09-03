/*
	Exporta a fn createConnection para o NodeJS.

*/
var mysql = require('mysql');
/*
	Para setar o NODE_ENV no Windows: SET NODE_ENV=<valor>
*/
function createDBConnection(){
	if(!process.env.NODE_ENV){//ambiente de produção
		return conn = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'ispj4lqzx22',
			database: 'alura'
		});
	}else
	if(process.env.NODE_ENV == 'dev'){
		return conn = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'ispj4lqzx22',
			database: 'alura-dev'
		});
	};
}
//wrapper
//função que envolve outra função
module.exports = function(){
	return createDBConnection;
}
