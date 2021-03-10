const express = require("express");
const router = express.Router();
const IncomeModel = require("../../models/IncomeModel");
const protectRoute = require('./../../middlewares/protectRoute');

//Deleting a single income
router.get("/incomes/delete/:id", protectRoute, (req, res, next) => {
  IncomeModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/incomes");
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;