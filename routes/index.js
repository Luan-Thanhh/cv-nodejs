var express = require('express');
var router = express.Router();

var homeController = require('../controllers/home_controller');
var portfolioController = require('../controllers/portfolio_controller');
var testimonialController = require('../controllers/testimonial_controller');

/* GET home page. */
router.get('/', homeController.index);
router.get('/portfolio', portfolioController.index);
router.get('/testimonial', testimonialController.index);

module.exports = router;
