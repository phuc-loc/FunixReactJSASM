const express = require('express');
const route = express.Router();
const path = require('path');

route.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'users.html'));
})

module.exports = route;