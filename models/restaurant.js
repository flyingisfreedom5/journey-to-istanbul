const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default : 1
    },
 },  {
        timestamps: true
    
});

module.exports = mongoose.model('Restaurant', restaurantSchema);