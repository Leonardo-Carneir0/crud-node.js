const {Router} = require("express");
const router = Router();

router.get("/produtos",(req, res) => {
    res.send("chegou aqui, estamos listando todos os produtos...");
});

router.post("/produtos", (req, res) => {
    res.send("Chegou aqui, estamos criando um novo produto...");
})

router.put("/produtos/:id", (req, res) => {
    const {id} = req.params;
    res.send("Chegou aqui, estamos atualizando o produto" +"id" + "...");
})

router.delete("/produtos/:id", (req, res) => {
    const {id} = req.params;
    res.send("Chegou aqui, estamos deletando o produto" + "id" + "...");
})

module.exports = router;

app.use(Router);