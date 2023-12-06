const { OverView } = require('../../model/Everest/overView');

exports.createHeading = async (req, res) => {
    try {
        const { heading, condition, description, highlight, overView, ShortItinerary } = req.body;
        const newHeading = new OverView({ heading, condition, description, highlight, overView, ShortItinerary });
        const savedHeading = await newHeading.save();
        res.json(savedHeading);
        // console.log(savedHeading);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.updateHeading = async (req, res) => {
    const id = req.params.id;
    try {
        const heading = await OverView.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.status(202).json(heading)
    } catch (err) {
        console.log(err)
        res.status(202).json(err)
    }
};



exports.getHeading = async (req, res) => {
    try {
        const heading = await OverView.find();
        res.json(heading)
    } catch (err) {
        console.log(err)
    }
};
