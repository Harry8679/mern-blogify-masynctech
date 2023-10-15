const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: true,
    },
    lastLogin: {
        type: Date,
        default: Date.now()
    },
    isVerified: {
        type: String,
        default: false
    },
    accountLevel: {
        type: String,
        enum: ['bronze', 'silver', 'gold'],
        default: 'bronze'
    },
    profilePicture: {
        type: String,
        default: ''
    },
    coverImage: {
        type: String,
        default: ''
    },
    bio: {
        type: String
    },
    location: {
        type: String
    },
    notificationPreferences: {
        email: { type: String, default: true },
        // ..other notifications (sms)
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'prefer not to say', 'non-binary']
    },
    // All users who view a user profile
    profileViewers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    blockUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    linkedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    passwordResetToken: {
        type: String
    },
    passwordResetExpires: {
        type: Date
    },
    accountVerificationToken: {
        type: String
    },
    accountVerificationTokenExpires: {
        type: Date
    }
},
{
    timestamps: true
});

// Compile schema to model
const User = mongoose.model('User', userSchema);

module.exports = User;