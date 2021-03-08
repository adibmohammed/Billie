const express = require("express");
const router = new express.Router();
const ExpensesModel = require("./../../models/ExpensesModel");

/* GET create expense */
router.get("/expenses/new", (req, res, next) => {
        res.render("expenses/createExpense.hbs");
  });

/* POST create expense */

router.post("/expenses/new",(req, res) => {
  // res.render("/dashboard/artists");
  const { title, category, amount, date, description, picture } = req.body;
  ExpensesModel.create({
    title,
    category,
    amount,
    date,description,
    picture
  }).then((dbRes)=> {
    console.log(dbRes);
      res.render("expenses/createExpense.hbs", {expenses:dbRes});
  }).catch((err) => {
    next(err);
  });
});

module.exports = router;
