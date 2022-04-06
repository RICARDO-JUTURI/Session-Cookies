const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');
const mainValidator = require('../validations/mainValidator');

router.get('/', controller.main);
router.post('/', mainValidator, controller.userData);
router.get('/profile', controller.view)



module.exports = router;