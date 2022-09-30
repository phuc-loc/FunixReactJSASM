const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log('In midleware /add-product');
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    res.sendFile( path.join(rootDir, 'views', 'add-product.html' ));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});


exports.routes = router;
exports.products = products;