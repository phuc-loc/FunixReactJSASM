const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const router = express.Router();
const addminData = require('./admin')

router.get('/', (req, res, next) => {
    console.log(addminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

module.exports = router