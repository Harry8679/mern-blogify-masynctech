const express = require('express');
const { createCategory, getCategories, updateCategory, deleteCategory } = require('../controllers/category.controller');
const isLoggin = require('../middlewares/isLoggin.middleware');

const categoryRouter = express.Router();

// Create
categoryRouter.post('/', isLoggin, createCategory);
categoryRouter.get('/', getCategories);
categoryRouter.delete('/:id', isLoggin, deleteCategory);
categoryRouter.put('/:id', isLoggin, updateCategory);

module.exports = categoryRouter;