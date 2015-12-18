var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var path = require('path');


//var Slackhook = require('slackhook');
//var slackhook = new Slackhook({
//	domain: 'alljunior',
//	token: 'CldyQ1SkHRgGlt5qkd7ZL7D1'
//});

app.post('/outgoing', function(req, res){
	var hook = slackhook.respond(req.body);
	res.json({text: 'Hi ' + hook.user_name, username: 'Dr. Nick'});
});

// import data
var data = require('./data/players');
var all = require('./data/allplayers');

// Make sure to include the ES6 & JSX transpiler
require('babel/register');

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));

// Set view path
app.set('views',__dirname + '/views');

// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

// to support JSON-encoded bodies
app.use( bodyParser.json() );
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.render('game', {ctx: { 
        players: all.players 
    }});
});

app.get('/game', function(req, res) {
    res.render('game', 
    {ctx: { 
        player1: data.players['ashwath'], 
        player2: data.players['jeffrey']
    }});
});

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function(req, res){
    console.log('listening on port: ' + port);
});
