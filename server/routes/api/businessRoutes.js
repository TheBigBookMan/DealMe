const router = require("express").Router();
const businessController = require("../../controller/businessController.js");

// ? Route '/'
router
    .route("/")
    .get(businessController.getAllBusiness)
    .post(businessController.createBusiness);

// ? Route '/:businessId'
router
    .route("/:businessId")
    .get(businessController.getSingleBusiness)
    .delete(businessController.deleteBusiness)
    .put(businessController.addNotification);

// ? Route '/:businessId/settings'
router
    .route("/:businessId/settings")
    .put(businessController.addBusinessSettings);

module.exports = router;
