const axios = require("axios");
const { findPlaceId, getPlaceDetails } = require("../utils/findPlaceById");

// TODO must remove and set .env
const apiKey = "AIzaSyBwgMZNCPmyUW7uP0FjkHTw2f-0SyvHoO8";

const apisHttp = {
    getSearchPlacesAPI: async (req, res) => {
        try {
            const { searchValue } = req.query;
            const response = await axios.get(
                `https://maps.googleapis.com/maps/api/place/autocomplete/json`,
                {
                    params: {
                        input: `${searchValue} adelaide`,
                        key: apiKey,
                        types: "(cities)", // or 'geocode' for addresses
                    },
                }
            );

            res.json(response.data);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "API Error", error: err });
        }
    },
    findPlaceAPI: async (req, res) => {
        try {
            const { query, lat, lng } = req.query;
            const placeId = await findPlaceId(query, { lat, lng });
            const placeDetails = await getPlaceDetails(placeId);
            res.json(placeDetails);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "API Error", error: err });
        }
    },
};

module.exports = apisHttp;
