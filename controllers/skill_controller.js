const Skill = require('../models/skill');

async function index(req, res, next) {
  const skills = await Skill.find({});

  res.render('components/skill', {
    title: 'Super Folio | Skill',
    page: req.url,
    skills,
  });
}

module.exports = { index };
