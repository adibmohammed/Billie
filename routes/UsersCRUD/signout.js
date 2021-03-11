const express = require('express');
const router = express.Router();


router.get('/signout', (req, res, next) => {
    req.session.destroy(function (err) {
        res.redirect("/signin");
      });
});

module.exports = router;