const express = require('express');
const router = express.Router();
// const addminData = require('./admin');
const productsController = require('../controllers/products');
// const path = require('path');
// const rootDir = require('../util/path');

router.get('/', productsController.getProducts);

module.exports = router;