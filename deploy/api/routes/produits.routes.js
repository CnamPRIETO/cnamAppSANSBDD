module.exports = app => {
    const produits = require("../controllers/produits.controllers.js");
  
    let router = require("express").Router();
  
    // GET /api/produits
    router.get("/", produits.getProduits);
  
    app.use('/api/produits', router);
};
