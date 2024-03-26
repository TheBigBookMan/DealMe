const axios = require("axios");

// TODO must remove and set .env
const apiKey = "AIzaSyBwgMZNCPmyUW7uP0FjkHTw2f-0SyvHoO8";

async function findPlaceId(inputText, coordinates) {
    const url =
        "https://maps.googleapis.com/maps/api/place/findplacefromtext/json";
    const params = {
        input: inputText,
        inputtype: "textquery",
        fields: "place_id",
        locationbias: `point:${coordinates.lat},${coordinates.lng}`,
        key: apiKey,
    };
    const response = await axios.get(url, { params });
    const results = response.data.candidates;
    return results.length > 0 ? results[0].place_id : null;
}

async function getPlaceDetails(placeId) {
    const url = "https://maps.googleapis.com/maps/api/place/details/json";
    const params = {
        place_id: placeId,
        key: apiKey, // Replace with your Google API key
    };
    const response = await axios.get(url, { params });
    return response.data.result;
}

module.exports = { findPlaceId, getPlaceDetails };
