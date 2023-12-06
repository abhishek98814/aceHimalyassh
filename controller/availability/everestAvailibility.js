
const { Availibility } = require('../../model/Avialibility/everestAvailibility')



exports.selectTour = async (req, res) => {
    try {
        const { description, departureDate, tripDuration } = req.body;

        // Parse the departure date from the request body
        const parsedDepartureDate = new Date(departureDate);

        let returnDate = new Date(parsedDepartureDate);
        returnDate.setDate(parsedDepartureDate.getDate() + tripDuration);

        const availability = new Availibility({
            description,
            tripDuration,
            returnDate,
        });

        await availability.save();

        res.json({ message: "Tour selected successfully", returnDate });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
