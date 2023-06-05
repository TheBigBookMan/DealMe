const router = require("express").Router();
const eventController = require("../../controller/eventController");

// ? Route '/'
router.route("/").get(eventController.getAllEvents);

module.exports = router;
