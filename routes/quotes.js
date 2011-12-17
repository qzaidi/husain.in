var quotes = require('../models/quotes');
var util = require('util');

module.exports = function(req,res) {
  var quote;
  if (!req.session.seen || (req.session.token != req.query.token) ) {
    req.session.seen = quotes.init();
    req.session.token = req.query.token;
  }

  quote = quotes.getRandom(req.session.seen);
  res.json(quote);
}
