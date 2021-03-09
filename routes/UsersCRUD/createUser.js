const express = require('express');
const router = express.Router();
const UsersModel = require('./../../models/UserModel');
const uploader = require('./../../config/cloudinary');
const bcrypt = require('bcrypt');

// GET Method for creationg user (form):
router.get('/signup', (req, res, next) => {
	res.render('Users/signup.hbs', {
		style: 'signup'
	});
});

// POST Method for creationg a user (from form):

router.post('/signup', uploader.single('avatar'), async (req, res, next) => {
	const { firstname, lastname, username, email, password, profile, gender, avatar } = req.body;
	console.log('Sign UP is working', req.body);

	console.log('This is the avatar', avatar);
	try {
		const newUser = { ...req.body };
		const foundUser = await UsersModel.findOne({ email: newUser.email });

		if (foundUser) {
			req.flash('Warning', 'Email Already in Use');
			res.redirect('/signin');
		} else {
			const hashedPassword = bcrypt.hashSync(newUser.password, 10);
			newUser.password = hashedPassword;
			const dbRes = await UsersModel.create(newUser);
			console.log('This is DbRes', dbRes);
			res.redirect('/home');
		}
	} catch (err) {
		console.log(err);
		next(err);
	}
});

module.exports = router;
