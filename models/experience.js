const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  name: { type: String },
  company: { type: String },
  startDate: { type: Number },
  endDate: { type: Number },
  imageURL: { type: String },
  desc: { type: String },
});

const ExperienceModel = mongoose.model('Experience', ExperienceSchema);

module.exports = ExperienceModel;
