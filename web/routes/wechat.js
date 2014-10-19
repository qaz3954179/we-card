var express = require('express');
var router = express.Router();

var wechat = require('wechat');
var config = require('../conf')();

router.get('/', function(req, res) {
	wechat(config.token, function(req, res, next) {
		console.info(req);
		var message = req.weixin;
		if (message.FromUserName === 'diaosi') {
			res.reply('hehe');
		} else {
			res.reply({
				content: 'hello world',
				type: 'text'
			});
		}
	});
});

module.exports = router;