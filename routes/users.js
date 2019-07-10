var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile('client.html', { root: './public' })
});

router.get('/data', function(req, res, next) {
  res.send('respond with a client resource');
});

module.exports = router;
