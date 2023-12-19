const Category = require('../model/category.model');
const asyncHandler = require('express-async-handler');

exports.createCategory = asyncHandler(async (req, res) => {
    const { name, author } = req.body;
    // if exist
    const categoryFound = await Category.findOne({ name });

    if (categoryFound) {
        throw new Error('Category already exists');
    }

    const category = await Category.create({ 
        name,
        author: req.userAuth?._id
    });
    res.status(201).json({
        status: 'success',
        message: 'Category created successfully',
        category
    });
});

exports.getCategories = asyncHandler(async(req, res) => {
    const categories = await Category.find({});

    res.status(200).json({
        status: 'success',
        message: 'Categories successfully retrieved',
        categories
    });
});

exports.deleteCategory = asyncHandler(async(req, res) => {
    await Category.findByIdAndDelete(req.params.id);

    res.status(200).json({
        status: 'success',
        message: 'Categories successfully deleted',
    });
});

exports.updateCategory = asyncHandler(async (req, res) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
        },
        {
            new: true,
            runValidators: true,
        }
    );
    res.status(200).json({
        status: 'success',
        message: 'Category successfully updated',
        category
    });
});