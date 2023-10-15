const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    shares: {
        type: Number,
        default: 0
    },
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
},
{
    timestamps: true
});

// Compile schema to model
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;