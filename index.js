var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.post('/email', function(req, res) {
  res.send(req.body.name + ' ' + req.body.email + ' ' + req.body.subject);
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8000);

console.log('Server is now running');
