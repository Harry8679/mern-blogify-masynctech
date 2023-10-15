const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    claps: {
        type: Number,
        default: 0
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    shares: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Category'
    },
    schedduledPublished: {
        type: Date,
        default: null
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
},
{
    timestamps: true
});

// Compile schema to model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;