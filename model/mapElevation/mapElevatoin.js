const mongoose = require('mongoose');
const { Schema } = mongoose;

const mapElevationSchema = new Schema({
    regularImage: {
        type: String,
        required: true,
    },
    elevationImage: {
        type: String,
        required: true,
    },
    altitude: {
        value: {
            type: Number,
            required: true,
        },
        unit: {
            type: String,
            enum: ['meter', 'feet'],
            default: 'meter',
        },
    },
    date: {
        type: Date,
        default: Date.now,
    },
    imagePath: {
        type: String,
        required: true
    }
});

const MapElevation = mongoose.model('MapElevation', mapElevationSchema);
module.exports = MapElevation;
