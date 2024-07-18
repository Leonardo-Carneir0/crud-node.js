// controllers/produtoController.js
const ProdutoModel = require("../models/produtoModel");

class ProdutoController {
    buscar() {
        return ProdutoModel.listar();
    }

    criar(produto) {
        // Aqui você pode adicionar lógica para salvar o produto
        return "Salvando Produto...";
    }

    atualizar(id, produto) {
        // Aqui você pode adicionar lógica para atualizar o produto
        return `Alterando Produto de ID: ${id}...`;
    }

    apagar(id) {
        // Aqui você pode adicionar lógica para deletar o produto
        return `Deletando Produto de ID: ${id}...`;
    }
}

module.exports = new ProdutoController();
