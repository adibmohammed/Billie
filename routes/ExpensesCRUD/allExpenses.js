const express = require("express");
const protectRoute = require("../../middlewares/protectRoute");
const router = new express.Router();
const UserModel = require("../../models/UserModel");
const ExpensesModel = require("./../../models/ExpensesModel");

/* GET all expenses list */

router.get("/expenses", protectRoute, (req, res, next) => {
  UserModel.findById(req.session.currentUser)
    .populate("myexpense")
    .then((dbRes) => {
      res.render("expenses/allExpenses.hbs", {
        expenses: dbRes.myexpense,
        style: ["allEntries.css", "modalAddAll.css"],
        js: ["modalAddAll.js"],
        totalExp: parseFloat(dbRes.myexpense.reduce((acc,val)=>acc + val.amount,0)).toFixed(2),
      });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
