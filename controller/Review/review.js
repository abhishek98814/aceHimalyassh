
const { Trip, TrustPilot } = require('../../model/Review/review')

const createTripReview = async (req, res) => {
    try {
        const { image, reviewerName, starRating, destination, subheading, description } = req.body;
        const newReviewer = new Trip({ image, reviewerName, starRating, destination, subheading, description });
        const saveReviewer = await newReviewer.save();
        res.json(saveReviewer)
    } catch (err) {
        console.log(err)
    }
}