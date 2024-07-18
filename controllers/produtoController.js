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
        return ProdutoModel.apagar(id);
    }
}

module.exports = new ProdutoController();
