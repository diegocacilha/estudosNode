module.exports = function(){
	this.lista = function(conn, callback){
		conn.query('select * from produtos', callback);
	}
	return this;
}