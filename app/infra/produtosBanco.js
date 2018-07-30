module.exports = function(){
	return function(conn){
		this.lista = function(callback){
			conn.query('select * from produtos', callback);
		}
		return this;
	}
}
