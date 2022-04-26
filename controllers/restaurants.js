const Restaurant = require('../models/restaurant');
const Place = require('../models/place');

module.exports = {
    new: newRestaurant,
    create,
    addToRestaurants
}

function addToRestaurants(req, res) {
    Place.findById(req.params.id, function(err, place) {
        // if (place.usersToRestaurant.id(req.user._id)) return res.redirect('/places');
        place.restaurants.push(req.body.restaurantId);
        place.save(function(err) {
            res.redirect(`/places/${place._id}`);
        });
    });
}

function create(req, res) {
    Restaurant.create(req.body, function (err, restaurant) {
      res.redirect('/restaurants/new');
    });
}

function newRestaurant(req, res) {
    res.render('restaurants/new', { title: 'Add Restaurant'});
}
