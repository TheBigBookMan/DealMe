const router = require("express").Router();
const businessRoutes = require("./businessRoutes.js");
const dealRoutes = require("./dealRoutes.js");
const eventRoutes = require("./eventRoutes.js");

router.use("/businesses", businessRoutes);
router.use("/deals", dealRoutes);
router.use("/events", eventRoutes);

module.exports = router;
