var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var path = require('path');

// import data
var data = require('./data/players');

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
    res.render('start');
});

app.get('/game', function(req, res) {
    res.render('game', 
    {ctx: { 
        player1: data.players['ashwath'], 
        player2: data.players['jeffrey']
    }});
});


app.listen(port, function(req, res){
    console.log('listening on port: ' + port);
});