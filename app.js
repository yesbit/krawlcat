const createError = require('http-errors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs = require('ejs')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// view engine setup
app.engine('html', ejs.renderFile)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img',express.static(path.join(__dirname, 'public/img')))
app.use('/js',express.static(path.join(__dirname, 'public/js')))
app.use('/css',express.static(path.join(__dirname, 'public/css')))

app.use('/public/Swapall',express.static(path.join(__dirname, 'public/Swapall')))
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
