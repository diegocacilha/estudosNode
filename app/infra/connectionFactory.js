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
	}else if (process.env.NODE_ENV == 'production'){
		// var urlConn = process.env.CLEARDB_DATABASE_URL;
		// urlConn.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
		return conn = mysql.createConnection({
			host: 'us-cdbr-iron-east-01.cleardb.net',
			user: 'bf595a3eba18d7',
			password: '79ffa09a',
			database: 'heroku_543bf884ee6966f'
		});

	};
}
//wrapper
//função que envolve outra função
module.exports = function(){
	return createDBConnection;
}
