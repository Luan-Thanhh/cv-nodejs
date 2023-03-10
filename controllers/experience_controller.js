const Experience = require('../models/experience');

async function index(req, res, next) {
  const experiences = await Experience.find({});

  res.render('components/experience', {
    title: 'Super Folio | Experiences',
    page: req.url,
    experiences,
  });
}

module.exports = { index };
