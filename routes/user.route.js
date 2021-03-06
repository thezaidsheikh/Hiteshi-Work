const express = require('express');
const router = express.Router();

// Require the controllers 
const userController = require('../controllers/user.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/allUser', userController.allUser);

router.get('/toFilter', userController.toFilter);

router.post('/createUser',userController.createUser);

module.exports = router;