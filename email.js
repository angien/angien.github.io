var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

app.use(bodyParser.urlencoded({extended: true}));

app.post('/email', function(req, res) {
  res.send(req.body.name + ' ' + req.body.email + ' ' + req.body.subject);
});

app.listen(8080, function() {
  console.log('Server running on part 8080');
});