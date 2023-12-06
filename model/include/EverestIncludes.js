const mongoose = require('mongoose');
const { Schema } = mongoose;

const includeSchema = new Schema({
    priceInclude: {
        type: [String],
        default: []
    },
    priceExclude: {
        type: [String],
        default: []
    },
})

const EverestInclude = mongoose.model("EverestInclude", includeSchema);
module.exports = {
    EverestInclude,
}