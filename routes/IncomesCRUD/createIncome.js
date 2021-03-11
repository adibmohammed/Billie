const express = require("express");
const router = express.Router();
const UserModel = require("../../models/UserModel");
const IncomeModel = require("../../models/IncomeModel");
const uploader = require("./../../config/cloudinary");
const protectRoute = require("./../../middlewares/protectRoute");

/*GET route to enter a new income*/
router.get("/incomes/new", protectRoute, (req, res) => {
  res.render("incomes/createIncome", {
    style: ["createOne.css", "modalAddAll.css"],
    js: ["modalAddAll.js"], 
  });
});

/*POST route to send the new income via a form*/
router.post(
  "/incomes/new",
  uploader.single("picture"),
  async (req, res, next) => {
    console.log(req.body);
    const newIncome = { ...req.body };

    if (!req.file) newIncome.picture = undefined;
    else newIncome.picture = req.file.path;

    try {
      const theIncome = await IncomeModel.create(newIncome);
      let userIncome = UserModel.findByIdAndUpdate(
        req.session.currentUser._id,
        { $push: { myincome: theIncome._id } }
      );
      res.redirect("/incomes");
      return userIncome;
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);

module.exports = router;
