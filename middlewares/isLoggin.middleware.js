const jwt = require('jsonwebtoken');
const User = require('../model/user.model');
require('dotenv').config();

const isLoggin = (req, res, next) => {
    // Get token from header
    const token = req.headers.authorization.split(' ')[1];
    // Verify the token
    jwt.verify(token, process.env.API_KEY, async (err, decoded) => {
        const userId = decoded?.user?.id;
        const user = await User.findById(userId).select('username email role _id');
        // console.log(user);
        req.userAuth = user;
        // save user into req object
        if (err) {
            return 'Invalid Token';
        } else {
            // return decoded;
            // save the user
            // send the user
            next();
        }
    });
};

module.exports = isLoggin;