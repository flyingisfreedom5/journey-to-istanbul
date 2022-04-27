const Place = require('../models/place')

module.exports = {
    create,
    delete: deleteComment,
    update
};

function update(req, res) {
    Place.findOne({'comments._id': req.params.id,  'comments.userId' : req.user._id}, 
    function(err, place) {
        const commentSubdoc = place.comments.id(req.params.id);
        if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/places/${place._id}`);
        commentSubdoc.content = req.body.content;
        place.save(function(err) {
            res.redirect(`/places/${place._id}`);
        });
    });
    }

function deleteComment(req, res) {
    Place.findOne({'comments._id': req.params.id, 'comments.userId' : req.user._id},
    function(err, place) {
        if (!place || err) return res.redirect(`/places/${place.id}`);
        place.comments.remove(req.params.id);
        place.save(function(err) {
            res.redirect(`/places/${place._id}`);
        });
    }
  );
}

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