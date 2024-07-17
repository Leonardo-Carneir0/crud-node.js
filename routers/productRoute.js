const { Router } = require("express");
const router = Router();
const produtoController = require("../controllers/produtoController")

router.get("/produtos", (req, res) => {
    const resposta = produtoController.buscar();
    res.send(resposta);
});

router.post("/produtos", (req, res) => {
    const resposta = produtoController.criar();
    res.send(resposta);
});

router.put("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const resposta = produtoController.atualizar(id);
    res.send(resposta);
});

router.delete("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const resposta = produtoController.apagar(id);
    res.send(resposta)
});

module.exports = router;
