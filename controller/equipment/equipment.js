const { Equipment } = require("../../model/equipment/equipment");

exports.createEquipment = async (req, res) => {
    try {
        const { general, upperBody, lowerBody, feet, undergarment, firstaidAndMedical, otherEssenTials, optional } = req.body;
        const newGearsEquip = new Equipment({ general, upperBody, lowerBody, feet, undergarment, firstaidAndMedical, otherEssenTials, optional });
        const saveNewGearEquip = await newGearsEquip.save();
        res.json(saveNewGearEquip);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
