const Place = require('../models/place')

module.exports = {
    create
};


function create(req, res) {
    Place.findById(req.params.id, function(err, place) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        place.comments.push(req.body);
        place.save(function(err) {
            res.redirect(`/places/${req.params.id}`);
        });
    });
}