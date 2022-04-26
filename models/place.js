const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    name: {
        type: String,
        match: /.{3,}/,
        required: true
    },
    where: {
        type: String,
        match: /.{3,}/,
        required: true
    },
    information: {
        type: String,
        required: true
    },
    restaurants: [{type: Schema.Types.ObjectId, ref: 'Restaurant'}],
    }, {
        timestamps: true
});

module.exports = mongoose.model('Place', placeSchema);