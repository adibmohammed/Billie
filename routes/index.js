var express = require('express');
var router = new express.Router();

/* GET LANDING page. */
router.get('/', function(req, res, next) {
  res.render('index.hbs', {
    style: 'landing.css'
  });

});
module.exports = router;
