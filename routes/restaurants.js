const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants');

// GET /restaurants/new
router.get('/restaurants/new', restaurantsCtrl.new);
// POST /restaurants
router.post('/restaurants', restaurantsCtrl.create);
// POST /places/:id/restaurants
router.post('/places/:id/restaurants', restaurantsCtrl.addToRestaurants);

module.exports =router;