const mongoose = require('mongoose')
const { Schema } = mongoose;

const equipmentSchema = new Schema({
    general: [String],
    upperBody: [String],
    lowerBody: [String],
    feet: [String],
    undergarment: [String],
    firstaidAndMedical: [String],
    otherEssenTials: [String],
    optional: [String]
})

const Equipment = mongoose.model("Equipment", equipmentSchema)

module.exports = {
    Equipment,
}