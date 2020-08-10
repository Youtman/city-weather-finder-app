const express = require('express');
const router = express.Router();
const controller = require('../controllers/viewsController');

router.get('/', controller.renderHomePage);

router.post('/', controller.renderWeatherForecast);

router.get('/about', controller.renderAboutPage);

module.exports = router;
