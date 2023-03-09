const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  imageURL: { type: String },
  job: { type: String },
  desc: { type: String },
  website: { type: String },
});

const PortfolioModel = mongoose.model('Portfolio', PortfolioSchema);

module.exports = PortfolioModel;
