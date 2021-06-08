var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('object',{title:'BUS Locator'});
});

module.exports = router;
