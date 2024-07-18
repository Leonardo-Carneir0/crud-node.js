// models/produtoModels.js
const conexao = require("../infraestrutura/conexao");

class ProdutoModel {
    listar() {
        const sql = "SELECT * FROM produtos";
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, resposta) => {
                if (error) {
                    console.log("Erro ao listar produtos...");
                    reject(error);
                } else {
                    console.log("Produtos listados com sucesso");
                    resolve(resposta);
                }
            });
        });
    }

    // Adicione outros métodos conforme necessário, como salvar, atualizar e deletar
}

module.exports = new ProdutoModel();
