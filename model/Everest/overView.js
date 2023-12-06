
const mongoose = require('mongoose')
const { Schema } = mongoose;

const overviewSchema = new Schema({
    heading: String,
    description: String,
    condition: {
        Country: String,
        Duration: String,
        Difficulty: String,
        Activity: String,
        MaxAltitude: mongoose.Schema.Types.Mixed,
        BestSeason: String,
        Accommodation: String,
        Meals: String
    },
    highlight: {
        type: [String],
        default: []
    },
    overView: String,
    ShortItinerary: [
        {
            day: Number,
            description: String
        }
    ]
});


const OverView = mongoose.model("Heading", overviewSchema)
module.exports = {
    OverView,
}