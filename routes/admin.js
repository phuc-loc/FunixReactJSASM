const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products')
// const path = require('path');
// const rootDir = require('../util/path');

// /admin/add-product => GET  , chủ yếu lấy route (page) -> router 
router.get('/add-product', productsController.getAppProduct);

// /admin/add-product => POST , lấy products , đọc body 
router.post('/add-product', productsController.postAddProduct);

module.exports = router;