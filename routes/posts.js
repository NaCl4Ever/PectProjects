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
        data: [{
          id: 4,
          created_on: new Date("2017 - 12 - 23T06: 00: 00.000Z"),
          updated_on: new Date("2017 - 12 - 23T06: 00: 00.000Z"),
          contents: 'YO MAN THIS IS ME TESTING IT OUT'
        },
        {
          id: 5,
          created_on: new Date("2017 - 12 - 23T06: 00: 00.000Z"),
          updated_on: new Date("2017 - 12 - 23T06: 00: 00.000Z"),
          contents: 'YO MAN THIS IS ME TESTING IT OUT'
        }]
      });
  }, 15, 2);

});
router.get('/create', function (req, res, next) {
      res.render('posts_create');
});
module.exports = router;
