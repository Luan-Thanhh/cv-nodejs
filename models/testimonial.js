const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestimonialsSchema = new Schema({
  desc: { type: String },
  name: { type: String },
  job: { type: String },
  imageURL: { type: String },
});

const TestimonialsModel = mongoose.model('Testimonials', TestimonialsSchema);

module.exports = TestimonialsModel;
