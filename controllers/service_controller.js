const Service = require('../models/service');

async function index(req, res, next) {
  const services = await Service.find({});

  res.render('components/service', {
    title: 'Super Folio | Service',
    page: req.url,
    services,
  });
}

module.exports = { index };
