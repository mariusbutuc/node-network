var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 5000;

app.configure(function(){
  app.set('view engine', 'jade');
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
  res.render('index.jade', {layout: false});
});

app.listen(port),
console.log('Listening on port ' + port);
