const express = require('express');
const router = express.Router();
const UsersModel = require('./../../models/UserModel');
const uploader = require('./../../config/cloudinaray');


// GET Method for creationg user (form):
router.get('/signup', (req, res, next) => {
	res.render('signup.hbs');
});

// POST Method for creationg a user (from form):

router.post('/signup', uploader.single("avatar"), async (req, res, next) => {
	const { firstname, lastname, username, email, password, profile, gender} = req.body;
console.log("Sign UP is working", req.body);
let avatar;
if (req.file) {
  avatar = req.file.path;
}
console.log("This is the avatar" , avatar);
	try {
		const dbRes = await UsersModel.create({
			firstname,
			lastname,
            username,
			email,
			password,
			profile,
			gender,
			avatar
		});
        console.log("This is DbRes" , dbRes);
		res.redirect('/home');
	} catch (err) {
		console.log(err);
		next(err);
		
	}
});

module.exports = router;
