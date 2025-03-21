require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('✅ Kết nối MongoDB thành công');
    } catch (err) {
        console.error('❌ Lỗi kết nối MongoDB:', err);
        process.exit(1);
    }
};

mongoose.connection.on('error', err => {
    console.error('❌ Mongoose connection error:', err);
});

module.exports = connectDB;