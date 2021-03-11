const express = require("express");
const router = express.Router();
const IncomeModel = require("../../models/IncomeModel");
const UserModel = require("../../models/UserModel");
const protectRoute = require("./../../middlewares/protectRoute");

//Deleting a single income
router.get("/incomes/delete/:id", protectRoute, (req, res, next) => {
  IncomeModel.findByIdAndDelete(req.params.id)
    .then((dbRes) => {
      return UserModel.findByIdAndUpdate(req.session.currentUser._id, {
        $pull: { myincome: dbRes._id },
      });
    })
    .then(() => res.redirect("/incomes"))
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
