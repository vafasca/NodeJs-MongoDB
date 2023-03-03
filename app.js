var express = require('express');
//var path = require('path'); CREAMOS NUESTRAS propias var de entorno
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { default: mongoose } = require('mongoose');
require('dotenv').config({
    path: './enviromments/development.env'
});


//var indexRouter = require('./controllers/index');
//var productRouter = require('./controllers/get.product');

var app = express();

mongoose.connect(process.env.MONGODB_URI);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//GET /api/v1/products
app.use('/api/v1', require('./controllers/products/get.products'));

//GET /api/v1/product:id
// app.use('/api/v1', require('./controllers/products/get.product'));

// //POST /api/v1/product
app.use('/api/v1', require('./controllers/products/post.product'));

// //PUT /api/v1/product:id
// app.use('/api/v1', require('./controllers/products/put.product'));

// //PATCH /api/v1/product:id
// app.use('/api/v1', require('./controllers/products/patch.product'));

// //DELETE /api/v1/product:id
// app.use('/api/v1', require('./controllers/products/delete.product'));

module.exports = app;
