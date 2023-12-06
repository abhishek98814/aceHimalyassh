
const mongoose = require('mongoose');
const { Schema } = mongoose;

const headingImageSchema = new Schema({
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String
});

const HeadingImage = mongoose.model('HeadingImage', headingImageSchema);

module.exports = HeadingImage;
