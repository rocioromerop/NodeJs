var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/form', function(req, res, next) {
  res.render('user_form', {name: 'Smith', age: 30});
});


module.exports = router;
