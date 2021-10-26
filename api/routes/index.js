var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('reached');
  res.send('hello world');
});

module.exports = router;
