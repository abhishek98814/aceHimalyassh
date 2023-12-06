
const HeadingImage = require("../../model/homeModel/homeImageModel");

exports.createHome1Image = async (req, res) => {
    try {
        if (!req.files || !req.files.image1 || !req.files.image2 || !req.files.image3 || !req.files.image4 || !req.files.image5) {
            return res.status(400).json({ error: 'All image files are required.' });
        }

        const { image1, image2, image3, image4, image5 } = req.files;
        const newHeadingImage = new HeadingImage({
            image1: image1[0].filename,
            image2: image2[0].filename,
            image3: image3[0].filename,
            image4: image4[0].filename,
            image5: image5[0].filename
        });

        const savedImageHeading = await newHeadingImage.save();
        res.json(savedImageHeading);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.updateHeading = async (req, res) => {
    const id = req.params.id;
    try {
        const headingImage = await HeadingImage.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.status(202).json(headingImage);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getImageHeading = async (req, res) => {
    try {
        const headingImage = await HeadingImage.find();
        res.json(headingImage);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};