const router = require("express").Router();
const businessController = require("../../controller/businessController.js");

router
    .route("/")
    .get(businessController.getAllBusiness)
    .post(businessController.createBusiness);

module.exports = router;
