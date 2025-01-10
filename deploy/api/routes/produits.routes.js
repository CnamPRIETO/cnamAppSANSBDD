const { checkJwt}  = require('./jwtMiddleware');

module.exports = app => {
    const catalogue = require("../controllers/produits.controllers.js");
  
    let router = require("express").Router();
  

   
    router.get("/", checkJwt,catalogue.get);
  
    app.use('/api/produits', router);
  };