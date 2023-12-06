const mongoose = require('mongoose');
const { Schema } = mongoose;

const itinerarySchema = new Schema({
    day: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    activities: {
        type: [String],
        default: [],
    },
    maxAltitude: {
        type: Number,
        required: true,
    },
    details: {
        type: String,
    },
    overnightStay: {
        type: String,
    },
    meals: {
        type: String,
        default: 'Meals not included',
    },
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = {
    Itinerary,
};
