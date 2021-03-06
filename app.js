require("./config/mongodb");
require("dotenv").config();
require("./helpers/hbs");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const hbs = require("hbs");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const flash = require("connect-flash");
const chart = require('chart.js');

var helpers = require("./helpers/hbs");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials")
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
hbs.registerPartials(path.join(__dirname, "views/partials"));

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 900000
    }, // in millisec
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    }),
    saveUninitialized: true,
    resave: true
  })
);

app.use(flash());
// CUSTOM MIDDLEWARES
// expose flash message to the hbs templates, if any flash-message is defined
app.use(require("./middlewares/exposeFlashMessage"));
// expose login status to the hbs templates
app.use(require("./middlewares/exposeLoginStatus"));
// protect routes

///ROUTES
//Landing
const indexRouter = require("./routes/index");
//Dashboard
const dashboardRouter = require("./routes/dashboard");
//User
const createUserRouter = require('./routes/UsersCRUD/createUser');
const deleteUserRouter = require('./routes/UsersCRUD/deleteUsers');
const readOneUserRouter = require('./routes/UsersCRUD/readOneUser');
const updateUserRouter = require('./routes/UsersCRUD/updateUser');
const logUser = require('./routes/UsersCRUD/signin');
const logOut = require('./routes/UsersCRUD/signout');
//Income
const createIncomeRouter = require("./routes/IncomesCRUD/createIncome");
const deleteIncomeRouter = require("./routes/IncomesCRUD/deleteIncome");
const readOneIncomeRouter = require("./routes/IncomesCRUD/readOneIncome");
const updateIncomeRouter = require("./routes/IncomesCRUD/updateIncome");
const allIncomesRouter = require("./routes/IncomesCRUD/allIncomes");

//Expense
const createExpenseRouter = require("./routes/ExpensesCRUD/createExpense");
const deleteExpenseRouter = require("./routes/ExpensesCRUD/deleteExpense");
const readOneExpenseRouter = require("./routes/ExpensesCRUD/readOneExpense");
const updateExpenseRouter = require("./routes/ExpensesCRUD/updateExpense");
const allExpensesRouter = require("./routes/ExpensesCRUD/allExpenses");

//Landing
app.use("/", indexRouter);
//Dashboard
app.use("/", dashboardRouter);
//User
app.use('/', createUserRouter);
app.use('/', deleteUserRouter);
app.use('/', readOneUserRouter);
app.use('/', updateUserRouter);
app.use('/', logUser);
app.use('/', logOut);
//Income
app.use("/", createIncomeRouter);
app.use("/", deleteIncomeRouter);
app.use("/", readOneIncomeRouter);
app.use("/", updateIncomeRouter);
app.use("/", allIncomesRouter);
//Expense
app.use("/", createExpenseRouter);
app.use("/", deleteExpenseRouter);
app.use("/", readOneExpenseRouter);
app.use("/", updateExpenseRouter);
app.use("/", allExpensesRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
module.exports = app;
