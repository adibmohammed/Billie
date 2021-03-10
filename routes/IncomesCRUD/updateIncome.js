const express = require("express");
const router = express.Router();
const IncomeModel = require("../../models/IncomeModel");
const uploader = require('./../../config/cloudinary');
const path = require('path');

//GET route to update an existing a new income
router.get("/incomes/edit/:id", async (req, res, next) => {
  try {
    const incomeDetails = await IncomeModel.findById(req.params.id);
    res.render("incomes/updateIncome", {incomeDetails, style:["createOne.css","modalAddAll.css"], js: ["modalAddAll.js"]});
  }
  catch (err) {
    next(err);
    console.log(err);
  }
});

//POST route to send the new infos via a form
router.post("/incomes/edit/:id", uploader.single('picture'), async (req, res, next) => {
  const {title, source, amount, date, description} = req.body  
  try {
    
    // console.log("hey" + req.body.picture)
    if (req.file && req.file.path) req.body.picture = req.file.path;
    console.log(req.file)

    await IncomeModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.redirect("/incomes"); //redirecting to the income itself to check the updated value
  } catch (err) {next(err)};
});

module.exports = router;