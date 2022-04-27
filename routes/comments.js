const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// // POST /places/:id/comments
router.post('/places/:id/comments', commentsCtrl.create);










module.exports = router;