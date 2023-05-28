const router = require("express").Router();
const businessRoutes = require("./businessRoutes.js");
const dealRoutes = require("./dealRoutes.js");

router.use("/businesses", businessRoutes);
router.use("/deals", dealRoutes);

module.exports = router;
