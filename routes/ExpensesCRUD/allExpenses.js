const express = require("express");
const router = new express.Router();
const ExpensesModel = require("./../../models/ExpensesModel");

/* GET all expenses list */

router.get("/expenses", (req, res, next) => {
    ExpensesModel.find()
      .then((dbRes) => {
        res.render("expenses/allExpenses.hbs", { expenses: dbRes });
      })
      .catch((err) => {
        next(err);
      });
  });

  module.exports = router;