// db.js
const mongoose = require('mongoose');

const uri = 'mongodb+srv://haiLonnn:O5KebAhYCTGi3J0M@cluster0.3is6y.mongodb.net/';


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Kết nối MongoDB thành công'))
  .catch(err => console.error('❌ Lỗi kết nối MongoDB:', err));

module.exports = mongoose;
mongoose.connection.on('error', err => {
    console.error('❌ Mongoose connection error:', err);
  });