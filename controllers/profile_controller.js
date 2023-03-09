const Profile = require('../models/profile');

async function contact(req, res, next) {
  const profiles = await Profile.find({});

  res.render('components/contact', {
    title: 'Super Folio | Contact',
    page: req.url,
    profile: profiles[0],
  });
}

module.exports = { contact };
