const Testimonial = require('../models/testimonial');

async function index(req, res, next) {
  const testimonials = await Testimonial.find({});

  res.render('components/testimonial', {
    title: 'Super Folio | Testimonial',
    page: req.url,
    testimonials,
  });
}

module.exports = { index };
