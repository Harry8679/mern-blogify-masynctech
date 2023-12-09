const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
    // Create payload for the user
    const payload = {
        user: {
            id: user.id,
        }
    };
    // Sign the token with a secret key
    const token = jwt.sign(payload, process.env.API_KEY, {
        expiresIn: 3600, // Expires in 1 hour
    });
    return token;
};

module.exports = generateToken;