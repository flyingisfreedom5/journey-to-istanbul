const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: {
        type: String,
        match: /[A-Z]/,
        required: true
    },
    where: {
        type: String,
        match: /[A-Z]/
    },
    }, {
        timestamps: true
});

module.exports = mongoose.model('Place', placeSchema);