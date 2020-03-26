var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var careRouter = require('./routes/care');
var codesRouter = require('./routes/codes');
var contactRouter = require('./routes/contact');
var faqsRouter = require('./routes/faqs');
var holdRouter = require('./routes/hold');
var kitchenRouter = require('./routes/kitchen');
var loginRouter = require('./routes/login');
var offerRouter = require('./routes/offer');
var registerRouter = require('./routes/register');
var shippingRouter = require('./routes/shipping');
var singleRouter = require('./routes/single');
var termsRouter = require('./routes/terms');
var wishlistRouter = require('./routes/wishlist');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/keiki-shop/',express.static(path.join(__dirname, './public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', aboutRouter);
app.use('/', careRouter);
app.use('/', codesRouter);
app.use('/', contactRouter);
app.use('/', faqsRouter);
app.use('/', holdRouter);
app.use('/', kitchenRouter);
app.use('/', loginRouter);
app.use('/', offerRouter);
app.use('/', registerRouter);
app.use('/', shippingRouter);
app.use('/', singleRouter);
app.use('/', termsRouter);
app.use('/', wishlistRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
