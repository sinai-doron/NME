var http = require('http');
var mongoose = require('mongoose');
var express = require('express');
var fs = require('fs');

function ServerStaticFile(res, path, contentType, responseCode){
	if(!responseCode){
		responseCode = 200;
	}
	fs.readFile(__dirname + path, function(err, data){
		if(err){
			res.writeHead(500, {'Content-Type' : 'text/plain' });
			res.end('500 - Internal Server Error');
		}
		else {
			res.writeHead(500, {'Content-Type' : contentType });
			res.end(data);
		}
	})
}

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
  console.log('Connected to mongodb');
});

mongoose.connect('mongodb://localhost/test');

setInterval(function(){
	console.log('I am a live');
}, 69000);


http.createServer(function(req,res){
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path){
		case '': 
			ServerStaticFile(res, '/public/index.html', 'text/html', 200);
		break;
		case '/about':
			res.writeHead(200, { 'Content-Type' : 'text/plain'});
			res.end('Server is online!');
			break;
		default: 
			res.writeHead(404, { 'Content-Type' : 'text/plain'});
			res.end('Page not found!')
			break;
	}
}).listen(44444, function(){console.log('Server is online')});