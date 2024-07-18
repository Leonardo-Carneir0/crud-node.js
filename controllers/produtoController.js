const { Router } = require("express");
const router = Router();
const ProdutoModel = require("../models/produtoModel");

class ProdutoController {
    buscar() {
        return ProdutoModel.listar();
    }

    criar(produto) {
        return ProdutoModel.criar(produto);
    }

    atualizar(id, produto) {
        return ProdutoModel.atualizar(id, produto);
    }


    apagar(id) {
        // Aqui você pode adicionar lógica para deletar o produto
        return `Deletando Produto de ID: ${id}...`;
    }
}

module.exports = new ProdutoController();
