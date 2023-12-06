const express = require('express')
const reviewRouter = express.Router()
const reviewController = require('../../controller/Review/review')

reviewRouter
    .post('/', reviewController.createTripReview)
    .post('/pilot', reviewController.createPilotReviewer)

module.exports = {
    reviewRouter
}