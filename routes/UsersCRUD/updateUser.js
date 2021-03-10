const express = require("express");
const router = express.Router();
const UsersModel = require("./../../models/UserModel");
const uploader = require('./../../config/cloudinary');

// GET user id:

router.get("/users/update/:id", (req, res, next) => {
    UsersModel.findById(req.params.id)
    .then((user) => {res.render("Users/UserUpdate.hbs", user)
  console.log(user);
  })
    
    .catch(next);

})

// POST user id:

router.post("/users/update/:id", uploader.single('avatar'), async (req, res, next) => {
   const {firstname, lastname, username, email, password, profile, gender, avatar} = req.body  
    try {
      
      if (req.file && req.file.path) req.body.picture = req.file.path;
  
      await UsersModel.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/users"); //redirecting to the income itself to check the updated value
    } catch (err) {
      next(err)
    };
  });

// router.post("/users/update/:id", uploader.single("avatar"), async (req, res, next) => {
//     try {
//         const newProfilePicture = {...req.body};
//         await UsersModel.findByIdAndUpdate(req.params.id, req.body)
//         res.redirect("/users")
//     } catch (err) {
//         next (err)
//     }
// })





module.exports = router;