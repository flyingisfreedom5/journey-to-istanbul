const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants');

// GET /restaurants/new
router.get('/restaurants/new', restaurantsCtrl.new);


module.exports =router;