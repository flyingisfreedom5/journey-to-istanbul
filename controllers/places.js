const Place = require('../models/place');
const Restaurant = require('../models/restaurant');


module.exports = {
    index,
    show,
    new: newPlace,
    create
};

function index(req, res) {
    Place.find({}, function(err, places) {
        res.render('places/index', { title: 'All Places', places });
    });
}

function show(req, res) {
    Place.findById(req.params.id)
    .populate('restaurants')
    .exec(function(err, place){
        Restaurant.find(
            {_id: {$nin: place.restaurants}},
            function(err, restaurants) {
                console.log(restaurants);
                res.render('places/show', {title: "Place Detail", place, restaurants});
            }
        );
    });
}

function newPlace(req, res) {
    res.render('places/new', { title: 'New Place'});
}

function create(req, res) {
    console.log(req.body);
    var place = new Place(req.body);
    place.save(function(err) {
        if (err) return res.redirect('/places/new');
        // created data, so redirect
        res.redirect('/places');
    });
}