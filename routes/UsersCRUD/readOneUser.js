const express = require("express");
const router = express.Router();
const UsersModel = require("./../../models/UserModel");
const protectRoute = require('./../../middlewares/protectRoute');

// GET users:

router.get('/users/:id', protectRoute, function(req, res, next) {
    UsersModel.findById(req.params.id)
    .then((dbRes) => {
        res.render('Users/showUsers.hbs', {myUsers: dbRes, style: ['profiles.css']})
    })
    .catch((dbError) => {
        next(dbError)
    })
})




module.exports = router;