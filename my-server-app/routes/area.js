var express = require('express');
var router = express.Router();

/* GET area listing. */
router.get('/', function(req, res, next) {
  res.send({
    'username':'john',
    'sex':'man',
    'address':'上海'
    });
});

router.post('/', function(req, res, next) {
    res.send({
      'username':'john',
      'sex':'man',
      'address':'上海'
      });
  });

module.exports = router;
