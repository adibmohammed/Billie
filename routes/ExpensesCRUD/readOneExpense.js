const express = require("express");
const router = new express.Router();
const ExpensesModel = require("./../../models/ExpensesModel");

/* GET read one expense */
router.get("/expenses/expense-details/:id", (req, res) => {
    ExpensesModel.findById(req.params.id)
    .then((expense) => res.render('expenses/readExpense.hbs', {expense}))
    .catch((err) => {
        next(err);
      });
  });

module.exports = router;
