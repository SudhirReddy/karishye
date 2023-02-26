module.exports = app => {
  const pujas = require("../controllers/puja.controller.js");

  var router = require("express").Router();

  // Create a new puja
  router.post("/", pujas.create);

  // Retrieve all pujas
  router.get("/", pujas.findAll);

  // // Retrieve all published pujas
  // router.get("/published", pujas.findAllPublished);

  // Retrieve a single puja with id
  router.get("/:id", pujas.findOne);

  // Update a puja with id
  router.put("/:id", pujas.update);

  // Delete a puja with id
  router.delete("/:id", pujas.delete);

  // Delete all pujas
  router.delete("/", pujas.deleteAll);

  app.use('/api/pujas', router);
};
