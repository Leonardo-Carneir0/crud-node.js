// index.js
require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./routers/index");
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas");

app.use(express.json());

tabelas.init(conexao);
router(app);

const port = process.env.PORT || 3000;

app.listen(port, (error) => {
    if (error) {
        console.log("Error");
        return;
    }
    console.log(`Server running on port ${port}`);
});
