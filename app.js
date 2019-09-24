const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

// const config = require('./config')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// require('dotenv').config()

// mongoose.connect(config.mongoURI, {
//     useNewUrlParser: true
// })
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);

const hostname = process.env.HOST;
const database = process.env.DATABASE;
const port = process.env.PORT;

console.log(hostname);
console.log(database);
console.log(port);
module.exports = app;
