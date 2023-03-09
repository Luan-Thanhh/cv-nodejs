const { default: mongoose } = require('mongoose');

mongoose.set('strictQuery', true);

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://cvSmile:cvSmile123@mycv.ynodbx7.mongodb.net/cv_db');
    console.log('Database connected!!');
  } catch (error) {
    console.log('Database not connected!!');
  }
}

module.exports = { connect };
