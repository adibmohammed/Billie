const express = require("express");
const router = express.Router();
const UsersModel = require("./../../models/UserModel");
const protectRoute = require('./../../middlewares/protectRoute');


router.get('/users/delete/:id', protectRoute, async (req, res, next) => {
    try {
        await UsersModel.findByIdAndDelete(req.params.id)
        res.redirect('/users')
    } catch (err){
        next(err)
    }
})




module.exports = router;