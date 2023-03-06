var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { default: mongoose } = require('mongoose');
require('dotenv').config({
    path: './enviromments/development.env'
});
mongoose.connect(process.env.MONGODB_URI);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Modulo product
app.use('/', require('./controllers/product.controller/product.routes'));

module.exports = app;
