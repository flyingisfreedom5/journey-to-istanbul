const Place = require('../models/place');


module.exports = {
    index
};

function index(req, res) {
    Place.find({}, function(err, places) {
        res.render('places/index', { title: 'All Places', places });
    });
}