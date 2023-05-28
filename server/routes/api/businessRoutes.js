const router = require("express").Router();
const businessController = require("../../controller/businessController.js");

// ? Route '/'
router
    .route("/")
    .get(businessController.getAllBusiness)
    .post(businessController.createBusiness);

// ? Route '/:businessId'
router.route("/:businessId").get(businessController.getSingleBusiness);

module.exports = router;
