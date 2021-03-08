var express = require('express');
var router = new express.Router();
console.log('yo')
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index');
});

module.exports = router;
