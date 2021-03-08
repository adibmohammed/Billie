const express = require("express");
const router = express.Router();
const IncomeModel = require("../../models/IncomeModel");

//GET route to enter a new income
router.get("/income-edit/:id", (req, res, next) => {
  res.render("incomes/updateIncome");
});

//POST route to send the new income via a form
router.post("/income-edit/:id", async (req, res, next) => {
  try {
    await IncomeModel.findOneAndUpdate(req.params.id);
    res.redirect("/income-edit/:id"); //redirecting to the income itself to check the updated value
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;