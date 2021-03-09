var express = require('express');
var router = new express.Router();
console.log('yo')
/* GET LANDING page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
module.exports = router;
