var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var helpers = require("./helpers/hbs");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

///ROUTES
var indexRouter = require('./routes/index');
//User
const createUserRouter = require('./routes/UsersCRUD/createUser')
const deleteUserRouter = require('./routes/UsersCRUD/deleteUsers')
const readOneUserRouter = require('./routes/UsersCRUD/readOneUser')
const updateUserRouter = require('./routes/UsersCRUD/updateUser')
//Income
const createIncomeRouter = require('./routes/IncomesCRUD/createIncome')
const deleteIncomeRouter = require('./routes/IncomesCRUD/deleteIncome')
const readOneIncomeRouter = require('./routes/IncomesCRUD/readOneIncome')
const updateIncomeRouter = require('./routes/IncomesCRUD/updateIncome')
//Expense
const createExpenseRouter = require('./routes/ExpensesCRUD/createExpense')
const deleteExpenseRouter = require('./routes/ExpensesCRUD/deleteExpense')
const readOneExpenseRouter = require('./routes/ExpensesCRUD/readOneExpense')
const updateExpenseRouter = require('./routes/ExpensesCRUD/updateExpense')



app.use('/', indexRouter);
//User
app.use('/', createUserRouter)
app.use('/', deleteUserRouter)
app.use('/', readOneUserRouter)
app.use('/', updateUserRouter)
//Income
app.use('/', createIncomeRouter)
app.use('/', deleteIncomeRouter)
app.use('/', readOneIncomeRouter)
app.use('/', updateIncomeRouter)
//Expense
app.use('/', createExpenseRouter)
app.use('/', deleteExpenseRouter)
app.use('/', readOneExpenseRouter)
app.use('/', updateExpenseRouter)

module.exports = app;
