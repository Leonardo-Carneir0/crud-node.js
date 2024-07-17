class Tabelas {
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaProdutos();
    }

    criarTabelaProdutos(){
        const sql = `
            CREATE TABLE IF NOT EXISTS produtos (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                descricao TEXT,
                preco DECIMAL(10, 2) NOT NULL,
                data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao criar tabela:', erro);
            } else {
                console.log('Tabela produtos criada com sucesso');
            }
        });
    }
}

module.exports = new Tabelas();