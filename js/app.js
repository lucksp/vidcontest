// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../'));

// Routes \\
app.get('/', function(req, res){
  	res.sendFile('/index.html', { root : '../'} )
})


var submitArray = []
app.post('/formsubmit', function(req, res){

	submitArray.push({
		name : req.body.name,
		url : req.body.url,
		title : req.body.title,
		description : req.body.description
	})

// fs.appendFile('data.json')

	res.redirect('/submit.html')
})

app.get('/view', function(req, res){
  	res.sendFile('/view.html', { root : '../'} )
})

app.get('/winner', function(req, res){
  	res.sendFile('/winner.html', { root : '../'} )
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
})