const express = require("express");
const router = new express.Router();
const ExpensesModel = require("./../../models/ExpensesModel");

/* GET edit expense */
router.get("/expenses/expense-update/:id", (req, res) => {
  ExpensesModel.findById(req.params.id)
    .then((dbRes) => {
      res.render("expenses/updateExpense.hbs", { expense: dbRes });
    })
    .catch((err) => {
      next(err);
    });
});

/* POST edit expense */
router.post("/expenses/expense-update/:id",(req, res) => {
  const { title, category, amount, date, description, picture} = req.body;
  ExpensesModel.findByIdAndUpdate(req.params.id,{
    title, category, amount, date, description, picture
  }).then((dbRes)=> {
      res.render("/expenses/updateExpense.hbs", { expense: dbRes });
  }).catch((err) => {
    next(err);
  });
});

module.exports = router;
