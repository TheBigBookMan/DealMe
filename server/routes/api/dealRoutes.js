const router = require("express").Router();
const dealController = require("../../controller/dealController");

// ? Route '/deals'
router.route("/").get(dealController.getAllDeals).post(dealController.addDeal);

// ? Route '/deals/specials'
router.route("/specials").get(dealController.getAllSpecials);

// ? Route '/deals/:dealId'
router
    .route("/:dealId")
    .get(dealController.getDeal)
    .delete(dealController.deleteDeal)
    .put(dealController.updateDeal);

module.exports = router;
