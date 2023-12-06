
const { Itinerary } = require('../../model/Itenerary/Itinerary')

exports.createItinerary = async (req, res) => {
    try {
        const { day, location, activities, maxAltitude, details, overnightStay, meals } = req.body;
        const newItinerary = new Itinerary({ day, location, activities, maxAltitude, details, overnightStay, meals });
        const saveItinerary = await newItinerary.save()
        res.json(saveItinerary)
    } catch (err) {
        console.log(err)
    }
}
exports.updateItinerary = async (req, res) => {
    const id = req.parms.id;
    try {
        const itinerary = await Itinerary.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.status(202).json(itinerary)
    } catch (err) {
        console, log(err)
    }
}

exports.getItinerary = async (req, res) => {
    try {
        const itinerary = await Itinerary.find()
        res.json()
    } catch (err) {
        console.log(err)
    }
}