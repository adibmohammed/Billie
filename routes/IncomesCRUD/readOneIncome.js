const express = require("express");
const router = express.Router();
const IncomeModel = require("../../models/IncomeModel");
const protectRoute = require('./../../middlewares/protectRoute');

router.get('/incomes/details/:id', protectRoute, (req, res, next) => {
    IncomeModel.findById(req.params.id) //find the selected income
    .then((dbRes) => {
        res.render('incomes/readOneIncome', {
            income : dbRes, 
            style: ['readOneEntry.css']
        }); //rendering the details of selected income
    })
    .catch((err) => {
        console.log(err);
        next(err);
    })
})

module.exports = router;