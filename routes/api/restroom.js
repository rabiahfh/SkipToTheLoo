const router = require("express").Router();
const restroomController = require("../../controllers/restroomController");
// const db = require("../../models");


// Matches with "/api/restroom"
router.route("/")
  .get(restroomController.findAll)
  .post(restroomController.create);

// Matches with "/api/restroom/:id"
router
  .route("/:id")
  .get(restroomController.findById)
  .put(restroomController.update)
  .delete(restroomController.remove);

module.exports = router;
