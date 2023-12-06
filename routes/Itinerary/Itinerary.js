
const express = require('express')
const itineraryRouter = express.Router();
const itineraryController = require('../../controller/Itinerary/Itinerary')

itineraryRouter
    .post('/', itineraryController.createItinerary)
    .get('/', itineraryController.getItinerary)
    .patch('/', itineraryController.updateItinerary)

module.exports = itineraryRouter