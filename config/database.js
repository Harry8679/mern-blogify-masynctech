const mongoose = require('mongoose');
require('dotenv').config();

// Connect to Db
const connectDB = async () => {
    try {
        // mongodb+srv://Ruud86:Davidvilla7986@blogify-mern-api.d82obfr.mongodb.net/blogify?retryWrites=true&w=majority
        const connected = mongoose.connect(process.env.API_MONGODB);
        console.log('Database connected');
    } catch (err) {
        console.log('DB connection failed', err.message);
    }
};

module.exports = connectDB;