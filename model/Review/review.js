const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({

    Topdescription: String,
    image: {
        type: String,
        required: true
    },
    reviewerName: {
        type: String,
        required: true
    },
    starRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    destination: {
        type: String,
        required: true
    },
    subheading: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
const trustpilotReviewSchema = new Schema({
    reviewerName: {
        type: String,
        required: true
    },
    starRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    destination: {
        type: String,
        required: true
    },
    subheading: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const tripSchema = new Schema({
    reviews: [reviewSchema]
});

const Trip = mongoose.model('Trip', tripSchema);
const TrustPilot = mongoose.model('TrustPilot', trustpilotReviewSchema)

module.exports = {
    Trip,
    TrustPilot,
};
