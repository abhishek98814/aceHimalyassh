
const mongoose = require("mongoose");
const { Schema } = mongoose;

const availibilitySchema = new Schema({
    description: String,
    tripDuration: Number,
    returnDate: Date
})

const Availibility = mongoose.model("Availibilty", availibilitySchema)
module.exports = {
    Availibility
}