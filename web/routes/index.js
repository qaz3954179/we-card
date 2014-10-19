var express = require('express');
var router = express.Router();
/* GET home page. */

router.get('/', function(req, res) {

  res.render('index', { title: 'Express' });
});

router.get('/we-card', function(req, res) {
	res.send(req.echostr);
	res.end();
});

module.exports = router;
