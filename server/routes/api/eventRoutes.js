const router = require("express").Router();
const eventController = require("../../controller/eventController");

// ? Route '/'
router
    .route("/")
    .get(eventController.getAllEvents)
    .post(eventController.addEvent);

// ? Route '/:eventId'
router.route("/:eventId").get(eventController.getEvent);

module.exports = router;
