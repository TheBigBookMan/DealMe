const router = require("express").Router();
const apisController = require("../../controller/apisController");

// ? Route '/apis/searchPlaces'
router.route("/searchPlaces").get(apisController.getSearchPlacesAPI);

// ? Route '/apis/findPlace'
router.route("/findPlace").get(apisController.findPlaceAPI);

module.exports = router;
