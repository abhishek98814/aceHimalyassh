const { EverestInclude } = require('../../model/include/EverestIncludes')

exports.createInclude = async (req, res) => {
    try {
        const { priceInclude, priceExclude } = req.body;
        const newIncluding = new EverestInclude({ priceInclude, priceExclude });
        const savedIncludes = await newIncluding.save()
        res.json(savedIncludes)
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'iNternal Error occur' })
    }
}

exports.updateIncluding = async (req, res) => {
    const id = req.params.id;
    try {
        const include = await EverestInclude.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.status(202).json(include)
    } catch (err) {
        console.log(err)
    }
}

exports.getInclude = async (req, res) => {
    try {
        const include = await EverestInclude.find()
        res.json(include)
    } catch (err) {
        console.log(err)
    }
}