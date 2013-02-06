var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 5000
    ;

app.set('view engine', 'jade');
app.set('view options', {
  layout: true
});
app.set('views', __dirname + '/views');

app.get('/stooges/:name?', function(req, res, next) {
  var name = req.params.name;

  switch ( name ? name.toLowerCase() : '' ) {
    case 'larry':
    case 'curly':
    case 'moe'  :
      res.render('stooges', { stooge: name });
      break;

    default :
      next();
  }
});

app.get('/stooges/*?', function(req, res) {
  res.render('stooges', { stooge: null });
});

app.get('/?', function(req, res) {
  res.render('index');
});

app.listen(port),
console.log('Listening on port ' + port);
