var express = require('express');
var router = express.Router();

var clients = [];

router.get('/', function(req, res) {
  res.sendFile('server.html', { root: './public' })
});

router.get('/data', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/bet', function(req, res) {
  res.send('respond with a client resource');
  clients.push({'ip':req._remoteAddress, 'time':req.body.time, 'coins':req.body.coins});
  console.log(clients);
});

router.get('/update', function (req,res) {
  res.send({'clients': clients});
});

module.exports = router;
