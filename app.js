let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let exphbs = require('express-handlebars');
let session = require('express-session');
let passport = require('passport');
let flash = require('connect-flash');

//Importing routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const encargoRouter = require('./routes/encargos.routes');
const contactRouter = require('./routes/contact.routes');
const authRouter = require('./routes/auth.routes');

//Importing model
let userModel = require('./database/models').User;
require('./middlewares/auth')(passport, userModel);

let app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
const hbs = exphbs.create({
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, 'views/layouts'),
	partialsDir: path.join(__dirname, 'views/partials'),
	extname: '.hbs',
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
	session({
		secret: ['kadjc98c.qef,eaascaasc[q,', 'esfwpe.wqfoeofeqneq,fp[q'],
		resave: true,
		saveUninitialized: false,
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Using routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(encargoRouter);
app.use(contactRouter);
app.use(authRouter);

app.use((req, res, next) => {
	app.locals.success = req.flash('success');
	app.locals.failure = req.flash('failure');
	next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
