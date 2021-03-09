const express = require("express");
const router = express.Router();
const IncomeModel = require("../../models/IncomeModel");

//GET route to enter a new income
router.get("/incomes/new", (req, res, next) => {
  res.render("incomes/createIncome", {
    style: "test.css",
  });
});

//POST route to send the new income via a form
router.post("/incomes/new", async (req, res, next) => {
  const newIncome = { ...req.body };
  console.log(newIncome);
  try {
    await IncomeModel.create(newIncome);
    res.redirect("/incomes"); //redirecting to the list of incomes only
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
