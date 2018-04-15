var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(express.static("."));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/contact", function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	console.log(name, email, message);
	res.redirect("/contact");
});

app.listen(3000, function(){
	console.log("Hello world!");
});