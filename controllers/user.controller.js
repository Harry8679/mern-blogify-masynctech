const User = require('../model/user.model');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken.util');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Chck if user exists
        const user = await User.findOne({ username });

        if (user) {
            throw new Error('User Already Exists');
        }
        // Register new user
        const newUser = new User({ username, email, password });
        // Hash Password
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        // Save
        await newUser.save();
        res.status(201).json({
            status: 'success',
            message: 'User Registrered Successfully',
            // _id: newUser?._id,
            // username: newUser?.username,
            // email: newUser?.email,
            // role: newUser?.role
            newUser
        });
    } catch (error) {
        res.json({
            status: 'failed',
            message: error?.message
        });
    };
};

exports.login = async (req, res) => {
    try {
        // Get the login details
        const { username, password } = req.body;

        // Check if exists
        const user = await User.findOne({ username });

        if (!user) {
            throw new Error('Invalid login credentials');
        }
        // Compare the hashed password with the one the request
        const isMatched = await bcrypt.compare(password, user?.password);

        if (!isMatched) {
            throw new Error('Invalid login credentials');
        }
        // Update the last login
        user.lastLogin = new Date();
        res.json({
            status: 'success',
            // user,
            email: user?.email,
            _id: user?._id,
            username: user?.username,
            role: user?.role,
            token: generateToken(user)
        });
    } catch (error) {
        res.json({
            status: 'failed',
            message: error?.message
        });
    }
};

exports.getProfile = async (req, res, next) => {
    // console.log(req.params);
    const myErr = new Error('This is my custom error');
    next(myErr);
    try {
        // Get user id from params
        // const id = req.params.id;
        const id = req.userAuth._id;
        const user = await User.findById(id);
        // console.log(user);
        res.json({
            status: 'success',
            message: 'Profile fetched successfully',
            user
        });
    } catch (error) {
        res.json({
            status: 'failed',
            message: error?.message
        });
    };
};