var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();

// for form stuff
app.use(bodyParser.urlencoded({extended: true}));

app.post('/email', function(req, res) {

	// create reusable transporter object using SMTP transport
	var transporter = nodemailer.createTransport({
	    service: 'Yahoo',
	    auth: {
	        user: 'angienguyen629@yahoo.com',
	        pass: 'Cows411923'
	    }
	});

	// NB! No need to recreate the transporter object. You can use
	// the same transporter object for all e-mails

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: req.body.name + ' <' + req.body.email + '>', // sender address
	    to: 'angienguyen629@gmail.com, ' + req.body.email, // list of receivers
	    subject: req.body.subject, // Subject line
	    text: req.body.message, // plaintext body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	        res.redirect('contact.html?q=error')
	        //res.send("Uh oh! Your message was not delivered for some reason. Please try again.");
	    }else{
	        console.log('Message sent: ' + info.response);
	        res.redirect('contact.html?q=success')
	        //res.send('Thank you, ' + req.body.name + '! Your message has been sent to me and a copy has been sent to ' + req.body.email + '.');
	    }
	});

});



// for serving public folder
app.use(express.static(__dirname + '/public'));

// choose a port
app.listen(process.env.PORT || 8000);

console.log('Server is now running');
