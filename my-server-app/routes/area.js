var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({
    'username':'john',
    'sex':'man',
    'address':'上海'
    });
});

router.post('/', function(req, res, next) {
    var data =  req.body;
    res.send(data);
  });

module.exports = router;
