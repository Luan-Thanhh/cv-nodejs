const Portfolio = require('../models/portfolio');

async function index(req, res, next) {
  const portfolios = await Portfolio.find({});

  res.render('components/portfolio', {
    title: 'Super Folio | Portfolio',
    page: req.url,
    portfolios,
  });
}

module.exports = { index };
