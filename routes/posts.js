const express = require('express');
const router = express.Router();
const DataInterface = require('../shared/DataInterface');
const Service = new DataInterface();


router.get('/', function (req, res, next) {
  Service.getPosts((err, data) => {
    console.dir(data.rows);
    res.render('posts_index',
      {
        title: 'Pect Projects',
        data: data.rows
      });
  }, 15, 0);

});
router.get('/latest', function (req, res, next) {
  Service.getLatest((err, data) => {
    console.dir(data);
    res.render('posts_show',
      {
        title: 'Pect Projects',
        data: data.rows
      });
  });

});
router.get('/:postId', function (req, res, next) {
  Service.getPost((err, data) => {
    console.dir(data.rows);
    res.render('posts_show',
      {
        title: 'Pect Projects',
        data: data.rows
      });
  }, req.params.postId);

});

router.get('/create', function (req, res, next) {
      res.render('posts_create');
});
module.exports = router;
