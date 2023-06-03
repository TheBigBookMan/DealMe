const router = require("express").Router();
const dealController = require("../../controller/dealController");

// ? Route '/'
router.route("/").get(dealController.getAllDeals).post(dealController.addDeal);

module.exports = router;
