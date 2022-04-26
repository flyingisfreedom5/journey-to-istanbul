const Place = require('../models/place');
const Restaurant = require('../models/restaurant');


module.exports = {
    index,
    show,
    new: newPlace,
    create,
    delete: deletePlace
};


function deletePlace(req, res) {
    req.body.user = req.user._id;
    Place.findOneAndDelete(
        {_id: req.params.id, userRecommending: req.user._id}, function(err) {
            res.redirect('/places');
        }
    );
}

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
                res.render('places/show', {title: "Detail", place, restaurants});
            }
        );
    });
}

function newPlace(req, res) {
    res.render('places/new', { title: 'New Place'});
}

function create(req, res) {
    req.body.user = req.user._id;
    var place = new Place(req.body);
    place.save(function(err) {
        if (err) return res.redirect('/places/new');
        res.redirect('/places');
    });
}