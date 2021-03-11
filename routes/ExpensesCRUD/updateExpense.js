const express = require("express");
const router = new express.Router();
const ExpensesModel = require("./../../models/ExpensesModel");
const uploader = require("./../../config/cloudinary");
const protectRoute = require('./../../middlewares/protectRoute');
const path = require('path');

/* GET edit expense */
router.get("/expenses/update/:id", protectRoute, (req, res, next) => {
  ExpensesModel.findById(req.params.id)
    .then((dbRes) => {
      res.render("expenses/updateExpense.hbs", {
        expense: dbRes,
        style: ["createOne.css", "modalAddAll.css"],
        js: ["modalAddAll.js", "totalTest.js"],
      });
    })
    .catch((err) => {
      next(err);
    });
});

/* POST edit expense */


router.post("/expenses/update/:id", uploader.single('picture'), async (req, res, next) => {
  const {title, category, amount, date, description, picture} = req.body  
  try {
    
    if (req.file && req.file.path) req.body.picture = req.file.path;

    await ExpensesModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/expenses"); //redirecting to the income itself to check the updated value
  } catch (err) {
    next(err)
  };
});

// router.post(
//   "/expenses/update/:id",
//   uploader.single("picture"),
//   (req, res, next) => {
//     const { title, category, amount, date, description, picture } = req.body;

//     if (req.file && req.file.path) req.body.picture = req.file.path;
//     console.log(req.file.path)

//     ExpensesModel.findByIdAndUpdate(req.params.id, {
//       title,
//       category,
//       amount,
//       date,
//       description,
//       picture,
//     })
//       .then((dbRes) => {
//         res.redirect("/expenses");
//       })
//       .catch((err) => {
//         next(err);
//       });
//   }
// );

module.exports = router;
