const express = require("express");
const { createConnection } = require("mongoose");
const router = new express.Router();
const ExpensesModel = require("./../../models/ExpensesModel");

/* GET create expense */
router.get("/expenses/new", (req, res, next) => {
        res.render("expenses/createExpense.hbs",{style:["createOne.css","modalAddAll.css"], js: ["modalAddAll.js"]});
  });

/* POST create expense */

router.post("/expenses/new",(req, res, next) => {
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
      res.redirect("/expenses");
  }).catch((err) => {
    next(err);
  });
});

module.exports = router;
