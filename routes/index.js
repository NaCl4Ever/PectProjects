const express = require('express');
const router = express.Router();
const DataInterface = require('../shared/DataInterface');
const Service = new DataInterface();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pect Projects' });
});
router.get('/posts', function (req, res, next) {
  Service.getPosts((err, data)=>{
    console.dir(data.rows);
    res.render('posts', 
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

module.exports = router;
