var express = require("express");
const protectRoute = require("../middlewares/protectRoute");
var router = express.Router();
const UserModel = require("../models/UserModel");

router.get("/home", protectRoute, function (req, res, next) {
  UserModel.findById(req.session.currentUser)
    .populate("myexpense myincome")
    .then((dbRes) => {
      console.log(dbRes)
      res.render("dashboard", {
        user: dbRes,
        style: ["modalAddAll.css", "dashboard.css"],
        js: ["modalAddAll.js"],
        totalExp: parseFloat(dbRes.myexpense.reduce((acc, val) => acc + val.amount, 0)).toFixed(2),
        totalInc: parseFloat(dbRes.myincome.reduce((acc, val) => acc + val.amount, 0)).toFixed(2),
        totalBudg : (dbRes.myincome.reduce((acc, val) => acc + val.amount, 0) - dbRes.myexpense.reduce((acc, val) => acc + val.amount, 0)).toFixed(2),
        byDateExp: dbRes.myexpense.date,
        byDateInc: dbRes.myincome.date, 
      });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
