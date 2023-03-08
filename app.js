var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const { default: mongoose } = require('mongoose');
require('dotenv').config({
    path: './enviromments/development.env'
});
mongoose.connect(process.env.MONGODB_URI);

var app = express();

app.use(cors({
    origin: 'http://localhost:4200'
  }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Modulo product
app.use('/', require('./controllers/product.controller/product.routes'));

module.exports = app;
