const express = require('express');
const {
  getProducts,
  addProduct,
  getProductById,
  removeProduct,
} = require('../controllers/productController.js');
const upload = require('../middleware/multer.js');
const adminAuth = require('../middleware/adminAuth.js');

const productRouter = express.Router();

// Get all products
productRouter.get('/get', getProducts);

// Create a product
productRouter.post('/add', adminAuth, upload.fields([{'name': 'image1', maxCount:1}, {'name': 'image2', maxCount:1}, {'name': 'image3', maxCount:1}, {'name': 'image4', maxCount:1}]), addProduct);

// Get a product by ID
productRouter.get('/get/:id', getProductById);

// Delete a product
productRouter.delete('/remove/:id',adminAuth, removeProduct);

module.exports = productRouter;
