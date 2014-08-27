var mongoose = require('mongoose');
var express = require('express');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
  console.log('Connected to mongodb');
});

mongoose.connect('mongodb://localhost/test');

var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, { 'Content-Type' : 'text/plain'});
	res.end('Server is online!')
}).listen(44444);

console.log('Server is online');