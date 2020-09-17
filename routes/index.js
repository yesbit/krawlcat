var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cn', function (req, res, next) {
  res.render('index-cn', { title: 'Express' });
});

router.get('/supernode', function (req, res, next) {
  res.render('supernode', { title: 'Express' });
});

router.get('/supernode-cn', function (req, res, next) {
  res.render('supernode-cn', { title: 'Express' });
});

router.get('/swap-all', function (req, res, next) {
  res.render('Swapall', { title: 'Express' });
});

router.get('/swap-all-cn', function (req, res, next) {
  res.render('Swapall-cn', { title: 'Express' });
});



module.exports = router;
