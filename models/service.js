const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  name: { type: String },
  imageURL: { type: String },
});

const ServiceModel = mongoose.model('Service', ServiceSchema);

module.exports = ServiceModel;
