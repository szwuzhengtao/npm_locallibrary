var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* 测试，添加新路由*/
router.get('/cool', function(req, res, next) {
  res.send('你好酷');
});

module.exports = router;
