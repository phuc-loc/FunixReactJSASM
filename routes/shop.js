const express = require('express');
const router = express.Router();
const addminData = require('./admin')

const path = require('path');
const rootDir = require('../util/path');


router.get('/', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = addminData.products; //products = ['title', 'title', ..]
    res.render('shop', {
        prods: products, //key : [ array of products(title name) ]
        pageTitle: 'Shop'
    })
})

module.exports = router