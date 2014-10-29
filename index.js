var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// for form stuff
app.use(bodyParser.urlencoded({extended: true}));

app.post('/email', function(req, res) {
  res.send(req.body.name + ' ' + req.body.email + ' ' + req.body.subject);
});

// for serving public folder
app.use(express.static(__dirname + '/public'));

// choose a port
app.listen(process.env.PORT || 8000);

console.log('Server is now running');
