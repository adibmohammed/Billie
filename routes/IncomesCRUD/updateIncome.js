const express = require("express");
const router = express.Router();
const IncomeModel = require("../../models/IncomeModel");
const uploader = require('./../../config/cloudinary');

//GET route to update an existing a new income
router.get("/incomes/edit/:id", async (req, res, next) => {
  try {
    const incomeDetails = await IncomeModel.findById(req.params.id);
    res.render("incomes/updateIncome", {incomeDetails});
  }
  catch (err) {
    next(err);
    console.log(err);
  }
});

//POST route to send the new infos via a form
router.post("/incomes/edit/:id", uploader.single('picture'), async (req, res, next) => {
  try {
    const incomeToEdit = { ...req.body };
    await IncomeModel.findByIdAndUpdate(req.params.id, incomeToEdit, {new: true});
    res.redirect("/incomes"); //redirecting to the income itself to check the updated value
  } catch (err) {next(err)};
});

module.exports = router;