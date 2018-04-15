require("dotenv").config()

var express = require("express");
var app = express();

var bodyParser = require("body-parser");

var nodemailer = require("nodemailer");

app.use(express.static("."));
app.use(bodyParser.urlencoded({extended: true}));

var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL,
		pass: process.env.EMAIL_PASS
	}
});

app.post("/contact", function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	const mailOptions = {
		from: process.env.EMAIL,
		to: process.env.EMAIL,
		subject: "New Website Contact",
		html: `<p>Name: ${name}</p> <p>Email: ${email}</p> <p>Message: ${message}</p>`
	};
	transporter.sendMail(mailOptions, function(err, info){
		if(err){
			console.log(err);
		}
		else {
			console.log(info);
			res.redirect("/contact.html");
		}
	});
});

app.listen(3000, function(){
	console.log("Hello world!");
});