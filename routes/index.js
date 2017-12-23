const express = require('express');
const router = express.Router();
const DataInterface = require('../shared/DataInterface');
const Service = new DataInterface();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome!' });
});
router.get('/post', function (req, res, next) {
  console.log(Service.getPosts());
  
  res.render('post', { title: 'Example Post' });
});

module.exports = router;
