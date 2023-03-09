const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  name: { type: String },
  percent: { type: String },
});

const SkillModel = mongoose.model('Skill', SkillSchema);

module.exports = SkillModel;
