const { MapElevation } = require('../../model/mapElevation/mapElevatoin');

const createMapElevation = async (req, res) => {
    try {
        const { regularImage, elevationImage, altitudeValue, altitudeUnit, date } = req.body;

        const newMapElevation = new MapElevation({
            regularImage,
            elevationImage,
            altitude: {
                value: altitudeValue,
                unit: altitudeUnit || 'meter',
            },
            date,
            imagePath: req.file.path,
        });

        const savedMapElevation = await newMapElevation.save();

        res.status(201).json(savedMapElevation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createMapElevation,
};
