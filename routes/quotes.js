var quotes = require('../models/quotes');
var util = require('util');

module.exports = function(req,res) {
  var quote;
  if (!req.session.counters) {
    req.session.counters = {  
                              'quotes' : 0,
                              'charity': 0
                           };
  }
  if ((++req.session.counters.quotes) % 4 == 0)
    quote = quotes.charity[req.session.counters.charity++];
  else
    quote = quotes.regular[req.session.counters.quotes];

  res.json(quote);
}
