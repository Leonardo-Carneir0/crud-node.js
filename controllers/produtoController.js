class produtoController {
buscar(){
    return "Buscando Produtos...";
}
criar(){
    return "Salvando Produtos...";
}
atualizar(id){
    return "Alternado Produto de ID: "+ id + "...";
}
apagar(id){
    return "Deletando Produto de ID: "+ id + "..."; 
}
}

module.exports = new produtoController();

