const router = require("express").Router();
const restroomRoutes = require("./restroom");
const userRoutes = require("./user");

// restroom routes /api/restroom*
router.use("/restroom", restroomRoutes);
// User routes /api/user*
router.use("/user", userRoutes);

module.exports = router;
