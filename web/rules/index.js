var webot = require('webot');
webot.set('hi', 'Hi, I\'m Webot');
webot.set('help', '我们正在努力完善功能，敬请期待。。。');

exports = function (app) {
  app.use('/we-card', function(req, res, next) {
    var message = req.query.message;
    webot.reply({
      text: message
    }, function(err, info) {
      if (err) return res.json({ r: err });
      res.json({
        r: 0,
        reply: info.reply
      });
    });
  });
}