
const { EverestFaqq } = require('../../model/faq/EverestFaq')

exports.createFaq = async (req, res) => {
    try {
        const { general, weatherTemp, ArrivalandVisa, Payments, physicalFtness, trekPreparation, Accommodation, healthandsaftey, practicalMatter, transportationAndflights } = req.body;
        const newFaq = new EverestFaqq({ general, weatherTemp, ArrivalandVisa, Payments, physicalFtness, trekPreparation, Accommodation, healthandsaftey, practicalMatter, transportationAndflights });
        const saveNewFaq = await newFaq.save();
        res.json(saveNewFaq)
    }
    catch (err) {
        console.log(err)
    }
}