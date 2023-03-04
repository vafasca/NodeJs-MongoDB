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

//const productRoutes = require('./controllers/product.controller/product.routes');
app.use('/', require('./controllers/product.controller/product.routes'));

//GET /api/v1/products
// app.use('/api/v1', require('./controllers/product.controller/get.products'));

// //GET /api/v1/product/:id
// app.use('/api/v1', require('./controllers/product.controller/get.product'));

// // //POST /api/v1/product
// app.use('/api/v1', require('./controllers/product.controller/post.product'));

// // //PUT /api/v1/product/:id
// app.use('/api/v1', require('./controllers/product.controller/put.product'));

// // //PATCH /api/v1/product:id
// app.use('/api/v1', require('./controllers/product.controller/patch.product'));

// // //DELETE /api/v1/product:id
// app.use('/api/v1', require('./controllers/product.controller/delete.product'));

module.exports = app;
