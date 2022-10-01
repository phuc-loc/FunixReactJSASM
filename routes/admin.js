const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');

const products = [];

// /admin/add-product => GET  , chủ yếu lấy route (page) -> router 
router.get('/add-product', (req, res, next) => {
    // res.sendFile( path.join(rootDir, 'views', 'add-product.html' ));
    res.render('add-product', {pageTitle: 'Add Product'});
});

// /admin/add-product => POST , lấy products , đọc body 
router.post('/add-product', (req, res, next) => {
    // console.log('body',req.body);
    products.push( {bookTitle: req.body.title} ); //req.body.key"title" = [array]
    // console.log(products);
    res.redirect('/');
});

exports.routes = router;

exports.products = products;