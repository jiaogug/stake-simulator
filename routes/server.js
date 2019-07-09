var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile('/home/guillermo/WebstormProjects/stake-simulator/public/server.html');
});

router.get('/data', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
