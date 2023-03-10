const Portfolio = require('../models/portfolio');
const Testimonial = require('../models/testimonial');
const Skill = require('../models/skill');
const Profile = require('../models/profile');
const Service = require('../models/service');
const Experience = require('../models/experience');

async function index(req, res, next) {
  const skills = await Skill.find({});
  const profiles = await Profile.find({});
  const portfolios = await Portfolio.find({});
  const testimonials = await Testimonial.find({});
  const services = await Service.find({});
  const experiences = await Experience.find({});

  res.render('index', {
    title: 'Super Folio',
    page: req.url,
    profile: profiles[0],
    portfolios,
    testimonials,
    skills,
    services,
    experiences,
  });
}

module.exports = { index };
