const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  address: { type: String },
  email: { type: String },
  job: { type: String },
  name: { type: String },
  age: { type: Number },
  phone: { type: String },
  facebook: { type: String },
  status: { type: String },
  avatar: { type: String },
  desc: { type: String },
});

const ProfileModel = mongoose.model('Profile', ProfileSchema);

module.exports = ProfileModel;
