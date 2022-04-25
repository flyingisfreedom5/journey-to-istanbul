const express = require('express');
const router = express.Router();
const placesCtrl = require('../controllers/places');
const isLoggedIn = require('../config/auth');

// All routes starts with: /places (because of mounting in server.js)

//Get /places
router.get('/', placesCtrl.index); 

module.exports = router;


