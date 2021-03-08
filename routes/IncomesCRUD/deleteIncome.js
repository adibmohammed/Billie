const express = require("express");
const router = express.Router();
const IncomeModel = require("../../models/IncomeModel");

//Deleting a single income
router.get("/incomes/delete/:id", (req, res, next) => {
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