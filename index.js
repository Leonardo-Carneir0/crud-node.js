const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index");
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas");

tabelas.init(conexao);

router(app);

app.listen(port, (error) => {
    if (error) {
        console.log("Error");
        return;
    }
    console.log("Ok!");
});


// Crie uma API RESTful simples usando Node.js e Express. A API deve permitir
// operações CRUD (Create, Read, Update, Delete)
// em uma entidade chamada "Produtos". Cada produto deve ter os seguintes campos: 
// id, nome, descrição, preço e data de criação.
