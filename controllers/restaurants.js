const Restaurant = require('../models/restaurant');
const Place = require('../models/place');

module.exports = {
    new: newRestaurant,
}

function newRestaurant(req, res) {
    res.render('restaurants/new', { title: 'Add Restaurant'});
}
