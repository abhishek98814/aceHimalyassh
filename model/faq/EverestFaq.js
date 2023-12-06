const mongoose = require('mongoose')

const { Schema } = mongoose;


const faqSchema = new Schema({
    general: [
        {
            question: String,
            description: String
        }
    ],
    weatherTemp: [
        {
            question: String,
            description: String
        }
    ],
    ArrivalandVisa: [
        {
            question: String,
            description: String
        }
    ],
    Payments: [
        {
            question: String,
            description: String
        }
    ],
    physicalFtness: [
        {
            question: String,
            description: String
        }
    ],
    trekPreparation: [
        {
            question: String,
            description: String
        }
    ],
    Accommodation: [
        {
            question: String,
            description: String
        }
    ],
    healthandsaftey: [
        {
            question: String,
            description: String
        }
    ],
    practicalMatter: [
        {
            question: String,
            description: String
        }
    ],
    transportationAndflights: [
        {
            question: String,
            description: String
        }
    ],

})

const EverestFaqq = mongoose.model("EverestFaq", faqSchema);

module.exports = {
    EverestFaqq
}