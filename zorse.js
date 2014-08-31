var express = require('express');
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
var expect = require('chai').expect;

var app = express();

app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 5555);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
        res.render('home');
});

app.get('/about', function(req, res){
        res.type('text/plain');
        res.send('About Meadowlark Travel');
});

app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Page Not Found');
});

app.listen(app.get('port'), function(){
	console.log('Express server started; press Ctrl+C to terminat me!');
});