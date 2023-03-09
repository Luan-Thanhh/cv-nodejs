const Portfolio = require('../models/portfolio');
const Testimonial = require('../models/testimonial');
const Skill = require('../models/skill');
const Profile = require('../models/profile');

async function index(req, res, next) {
  const skills = await Skill.find({});
  const profiles = await Profile.find({});
  const portfolios = await Portfolio.find({});
  const testimonials = await Testimonial.find({});

  res.render('index', {
    title: 'Super Folio',
    page: req.url,
    portfolios,
    testimonials,
    skills,
    profile: profiles[0],
  });
}

module.exports = { index };
