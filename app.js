const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// const config = require('./config')
require('dotenv').config();

const index = require('./routes/index');
const usersRouter = require('./routes/users');

// mongoose.connect(config.mongoURI, {
//     useNewUrlParser: true
// })
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', usersRouter);

const hostname = process.env.GOOGLE_CLIENT_SECRET;

console.log(hostname);

module.exports = app;
