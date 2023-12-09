const mongoose = require('mongoose');

// Connect to Db
const connectDB = async () => {
    try {
        // mongodb+srv://Ruud86:Davidvilla7986@blogify-mern-api.d82obfr.mongodb.net/blogify?retryWrites=true&w=majority
        const connected = mongoose.connect('mongodb+srv://Ruud86:Davidvilla7986@blogify-mern-api.d82obfr.mongodb.net/blogify?retryWrites=true&w=majority');
        console.log('Database connected');
    } catch (err) {
        console.log('DB connection failed', err.message);
    }
};

module.exports = connectDB;