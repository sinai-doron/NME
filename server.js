var mongoose = require('mongoose');
var express = require('express');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
  console.log('Connected to mongodb');
});

mongoose.connect('mongodb://localhost/test');