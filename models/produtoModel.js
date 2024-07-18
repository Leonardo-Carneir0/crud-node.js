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

    criar(produto) {
        const sql = "INSERT INTO produtos SET ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, produto, (error, resposta) => {
                if (error) {
                    console.log("Erro ao criar produto...");
                    reject(error);
                } else {
                    console.log("Produto criado com sucesso");
                    resolve({ id: resposta.insertId, ...produto });
                }
            });
        });
    }

    atualizar(id, produto) {
        const sql = "UPDATE produtos SET ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, [produto, id], (error, resposta) => {
                if (error) {
                    console.log("Erro ao atualizar produto...");
                    reject(error);
                } else {
                    console.log("Produto atualizado com sucesso");
                    resolve({ id, ...produto });
                }
            });
        });
    }
    // Adicione outros métodos conforme necessário, como salvar, atualizar e deletar
}

module.exports = new ProdutoModel();
