const { default: mongoose } = require('mongoose');

mongoose.set('strictQuery', true);

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://profile:profileSmile@cluster0.d0dy7bi.mongodb.net/db_cv'
    );
    console.log('Database connected!!');
  } catch (error) {
    console.log('Database not connected!!');
  }
}

module.exports = { connect };
