const express = require("express");
const protectRoute = require("../../middlewares/protectRoute");
const router = express.Router();
const UserModel = require("../../models/UserModel");
const IncomeModel = require("../../models/IncomeModel");

//The page showing only the incomes

router.get("/incomes", protectRoute, (req, res, next) => {
  UserModel.findById(req.session.currentUser)
    .populate("myincome")
    .then((dbRes) => {
      res.render("incomes/allIncomes", {
        incomes: dbRes.myincome,
        style: ["allEntries.css", "modalAddAll.css"],
        js: ["modalAddAll.js"],
        totalInc: parseFloat(dbRes.myincome.reduce((acc,val)=>acc + val.amount,0)).toFixed(2),
      })
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
