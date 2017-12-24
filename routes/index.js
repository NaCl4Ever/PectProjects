const express = require('express');
const router = express.Router();
const DataInterface = require('../shared/DataInterface');
const Service = new DataInterface();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pect Projects' });
});

module.exports = router;
