const Profile = require('../models/profile');

async function index(req, res, next) {
  const profiles = await Profile.find({});

  res.render('components/about', {
    title: 'Super Folio | Profile',
    page: req.url,
    profile: profiles[0],
  });
}

async function contact(req, res, next) {
  const profiles = await Profile.find({});

  res.render('components/contact', {
    title: 'Super Folio | Contact',
    page: req.url,
    profile: profiles[0],
  });
}

module.exports = { index, contact };
