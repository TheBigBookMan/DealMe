const router = require("express").Router();
const dealController = require("../../controller/dealController");

// ? Route '/'
router.route("/").get(dealController.getAllDeals).post(dealController.addDeal);

// ? Route '/:dealId'
router
    .route("/:dealId")
    .get(dealController.getDeal)
    .delete(dealController.deleteDeal)
    .put(dealController.updateDeal);

module.exports = router;
