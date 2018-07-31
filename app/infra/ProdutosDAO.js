function ProdutosDAO(connection){
	this._conn = connection;
}
//inclui um novo atributo ao meu obj ProdutosBanco
ProdutosDAO.prototype.lista = function(callback){
	this._conn.query('select * from produtos', callback);
}

module.exports = function(){
	return ProdutosDAO;
}
