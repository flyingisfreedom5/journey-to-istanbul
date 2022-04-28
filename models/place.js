const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    content: {
        type: String,
        match: /.{5,}/
    },
    user: {type: Schema.Types.ObjectId, ref: 'User', required:true},
    userName: String,
    userAvatar: String
},  {
    timestamps: true
});

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
    comments: [commentSchema]
},  {
        timestamps: true
});

module.exports = mongoose.model('Place', placeSchema);