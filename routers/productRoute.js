// routers/productRoute.js
const { Router } = require("express");
const router = Router();
const produtoController = require("../controllers/produtoController");

router.get("/produtos", (req, res) => {
    produtoController.buscar()
        .then(produtos => res.status(200).json(produtos))
        .catch(error => res.status(400).json({ mensagem: error.message }));
});

router.post("/produtos", (req, res) => {
    produtoController.criar(req.body)
        .then(produto => res.status(201).json(produto))
        .catch(error => res.status(400).json({ mensagem: error.message }));
});


router.put("/produtos/:id", (req, res) => {
    const { id } = req.params;
    produtoController.atualizar(id, req.body)
        .then(produto => res.status(200).json(produto))
        .catch(error => res.status(400).json({ mensagem: error.message }));
});

router.delete("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const resposta = produtoController.apagar(id);
    res.send(resposta);
});

module.exports = router;
