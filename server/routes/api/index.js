const router = require("express").Router();
const businessRoutes = require("./businessRoutes.js");

router.use("/businesses", businessRoutes);

module.exports = router;
