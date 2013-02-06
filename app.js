var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 5000
    ;

app.get('/stooges/:name?', function(req, res, next) {
  var name = req.params.name;

  switch ( name ? name.toLowerCase() : '' ) {
    case 'larry':
    case 'curly':
    case 'moe'  :
      res.send(name + ' is my favourite stooge.');
      break;

    default :
      next();
  }
});

app.get('/stooges/*?', function(req, res) {
  res.send('no stooges listed');
});

app.get('/?', function(req, res) {
  res.send('hello world');
});

app.listen(port),
console.log('Listening on port ' + port);
