var express = require('express');
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
var expect = require('chai').expect;

var app = express();

app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');
app.disable('x-powered-by');

app.set('port', process.env.PORT || 5555);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
        res.render('home');
});

app.get('/about', function(req, res){
        res.type('text/plain');
        res.send('About Meadowlark Travel');
});

app.get('/json',function(req,res){
	res.json(500, {'this':'that'});
});

app.get('/headers', function(req,res){
	res.type('text/plain');
	var s = '';
	for(var name in req.headers){
		s += name + ':' + req.headers[name] + '\n';
	}
	console.log(req.ip + "*******");
	res.send(s);
});

app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Page Not Found');
});

app.listen(app.get('port'), function(){
	console.log('Express server started; press Ctrl+C to terminat me!');
});