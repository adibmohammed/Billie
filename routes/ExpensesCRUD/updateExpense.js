const express = require("express");
const router = new express.Router();
const ExpensesModel = require("./../../models/ExpensesModel");
const uploader = require('./../../config/cloudinary');

/* GET edit expense */
router.get("/expenses/update/:id", (req, res, next) => {
  ExpensesModel.findById(req.params.id)
    .then((dbRes) => {
      res.render("expenses/updateExpense.hbs", { expense: dbRes, style:["createOne.css","modalAddAll.css"], js: ["modalAddAll.js"]});
    })
    .catch((err) => {
      next(err);
    });
});

/* POST edit expense */
router.post("/expenses/update/:id",(req, res, next) => {
  const { title, category, amount, date, description, picture} = req.body;
  ExpensesModel.findByIdAndUpdate(req.params.id,{
    title, category, amount, date, description, picture
  }).then((dbRes)=> {
      res.redirect("/expenses");
  }).catch((err) => {
    next(err);
  });
});

module.exports = router;