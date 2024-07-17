const routerProduto = require("./productRoute");

module.exports = (app) => {
    app.use("/api", routerProduto);
};
