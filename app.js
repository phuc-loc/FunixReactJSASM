const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const express = require('express');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded( {extended: false} )); //-> lấy ra : req.body

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(3000);
