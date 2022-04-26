const express = require('express');
const router = express.Router();
const placesCtrl = require('../controllers/places');
const isLoggedIn = require('../config/auth');

// All routes starts with: /places (because of mounting in server.js)

//GET /places
router.get('/', placesCtrl.index);  
//GET /movies/new (new functionality)
router.get('/new', placesCtrl.new);
//GET /places/:id (show functionality)
router.get('/:id', placesCtrl.show);
// POST /places (create functionality)
router.post('/', isLoggedIn, placesCtrl.create);
//GET /places/:id (delete functionality)
router.delete('/:id', isLoggedIn, placesCtrl.delete);

module.exports = router;


